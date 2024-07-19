/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type libxml2 from '@girs/libxml2-2.0';
import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from '@girs/cairo-1.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';

export namespace AgsGui {
    /**
     * AgsGui-6.0
     */

    enum DialAction {
        INCREMENT,
        DECREMENT,
    }
    enum ExpanderFlags {
        EXPANDER_DRAW_BORDER,
    }
    enum FileWidgetFileAction {
        OPEN,
        SAVE_AS,
    }
    enum FileWidgetFileFilter {
        NONE,
        BY_SUFFIX,
    }
    enum LevelAction {
        STEP_UP,
        STEP_DOWN,
        PAGE_UP,
        PAGE_DOWN,
    }
    enum LevelButtonState {
        LEVEL_BUTTON_1_PRESSED,
    }
    enum LevelDataFormat {
        S8,
        S16,
        S24,
        S32,
        S64,
        FLOAT,
        DOUBLE,
        COMPLEX,
    }
    enum PianoAction {
        MOVE_CURSOR_UP,
        MOVE_CURSOR_DOWN,
        HIT_KEY,
    }
    enum PianoButtonState {
        PIANO_BUTTON_1_PRESSED,
    }
    enum PianoOctave {
        C,
        CIS,
        D,
        DIS,
        E,
        F,
        FIS,
        G,
        GIS,
        A,
        AIS,
        H,
    }
    enum PlotFillFlags {
        PLOT_FILL_REPLACE,
    }
    enum ScaleAction {
        STEP_UP,
        STEP_DOWN,
        PAGE_UP,
        PAGE_DOWN,
    }
    enum ScaleButtonState {
        SCALE_BUTTON_1_PRESSED,
    }
    enum ScaleFlags {
        SCALE_LOGARITHMIC,
    }
    enum ScaleLayout {
        VERTICAL,
        HORIZONTAL,
    }
    enum TempoAction {
        STEP_UP,
        STEP_DOWN,
        PAGE_UP,
        PAGE_DOWN,
    }
    enum TempoButtonState {
        TEMPO_BUTTON_1_PRESSED,
    }
    enum TempoLayout {
        VERTICAL,
        HORIZONTAL,
    }
    const CARTESIAN_DEFAULT_X_END: number;
    const CARTESIAN_DEFAULT_X_LABEL_START: number;
    const CARTESIAN_DEFAULT_X_LABEL_STEP_WIDTH: number;
    const CARTESIAN_DEFAULT_X_MARGIN: number;
    const CARTESIAN_DEFAULT_X_SCALE_STEP_WIDTH: number;
    const CARTESIAN_DEFAULT_X_START: number;
    const CARTESIAN_DEFAULT_X_STEP: number;
    const CARTESIAN_DEFAULT_X_STEP_WIDTH: number;
    const CARTESIAN_DEFAULT_Y_END: number;
    const CARTESIAN_DEFAULT_Y_LABEL_START: number;
    const CARTESIAN_DEFAULT_Y_LABEL_STEP_HEIGHT: number;
    const CARTESIAN_DEFAULT_Y_MARGIN: number;
    const CARTESIAN_DEFAULT_Y_SCALE_STEP_HEIGHT: number;
    const CARTESIAN_DEFAULT_Y_START: number;
    const CARTESIAN_DEFAULT_Y_STEP: number;
    const CARTESIAN_DEFAULT_Y_STEP_HEIGHT: number;
    const DIAL_DEFAULT_BUTTON_HEIGHT: number;
    const DIAL_DEFAULT_BUTTON_WIDTH: number;
    const DIAL_DEFAULT_FONT_SIZE: number;
    const DIAL_DEFAULT_HEIGHT: number;
    const DIAL_DEFAULT_MARGIN: number;
    const DIAL_DEFAULT_OUTLINE_STRENGTH: number;
    const DIAL_DEFAULT_PRECISION: number;
    const DIAL_DEFAULT_RADIUS: number;
    const DIAL_DEFAULT_WIDTH: number;
    const FILE_WIDGET_DEFAULT_FILE_MAGIC_EXECUTABLE: string;
    const FILE_WIDGET_LOCATION_OPEN_FOLDER_APP_GENERIC: string;
    const FILE_WIDGET_LOCATION_OPEN_FOLDER_APP_HOME: string;
    const FILE_WIDGET_LOCATION_OPEN_FOLDER_DOCUMENTS: string;
    const FILE_WIDGET_LOCATION_OPEN_FOLDER_DOWNLOADS: string;
    const FILE_WIDGET_LOCATION_OPEN_FOLDER_MUSIC: string;
    const FILE_WIDGET_LOCATION_OPEN_FOLDER_PICTURES: string;
    const FILE_WIDGET_LOCATION_OPEN_FOLDER_VIDEOS: string;
    const FILE_WIDGET_LOCATION_OPEN_RECENT: string;
    const FILE_WIDGET_LOCATION_OPEN_START_HERE: string;
    const FILE_WIDGET_LOCATION_OPEN_USER_DESKTOP: string;
    const FILE_WIDGET_LOCATION_OPEN_USER_HOME: string;
    const FILE_WIDGET_MAX_RECENTLY_USED: number;
    const ICON_LINK_DEFAULT_SEGMENT_COUNT: number;
    const ICON_LINK_DEFAULT_SEGMENT_HEIGHT: number;
    const ICON_LINK_DEFAULT_SEGMENT_PADDING: number;
    const ICON_LINK_DEFAULT_SEGMENT_WIDTH: number;
    const INDICATOR_DEFAULT_SEGMENT_COUNT: number;
    const INDICATOR_DEFAULT_SEGMENT_HEIGHT: number;
    const INDICATOR_DEFAULT_SEGMENT_PADDING: number;
    const INDICATOR_DEFAULT_SEGMENT_WIDTH: number;
    const LED_ARRAY_DEFAULT_SEGMENT_HEIGHT: number;
    const LED_ARRAY_DEFAULT_SEGMENT_WIDTH: number;
    const LED_DEFAULT_SEGMENT_HEIGHT: number;
    const LED_DEFAULT_SEGMENT_WIDTH: number;
    const LEVEL_BOX_DEFAULT_SPACING: number;
    const LEVEL_DEFAULT_HEIGHT_REQUEST: number;
    const LEVEL_DEFAULT_LOWER: number;
    const LEVEL_DEFAULT_NORMALIZED_VOLUME: number;
    const LEVEL_DEFAULT_PAGE_SIZE: number;
    const LEVEL_DEFAULT_SAMPLERATE: number;
    const LEVEL_DEFAULT_STEP_COUNT: number;
    const LEVEL_DEFAULT_UPPER: number;
    const LEVEL_DEFAULT_WIDTH_REQUEST: number;
    const NOTEBOOK_TAB_DEFAULT_HEIGHT: number;
    const NOTEBOOK_TAB_DEFAULT_WIDTH: number;
    const PIANO_DEFAULT_BASE_KEY_CODE: number;
    const PIANO_DEFAULT_FONT_SIZE: number;
    const PIANO_DEFAULT_KEY_COUNT: number;
    const PIANO_DEFAULT_KEY_HEIGHT: number;
    const PIANO_DEFAULT_KEY_WIDTH: number;
    const PIANO_KEYS_OCTAVE_0_A: string;
    const PIANO_KEYS_OCTAVE_0_AIS: string;
    const PIANO_KEYS_OCTAVE_0_C: string;
    const PIANO_KEYS_OCTAVE_0_CIS: string;
    const PIANO_KEYS_OCTAVE_0_D: string;
    const PIANO_KEYS_OCTAVE_0_DIS: string;
    const PIANO_KEYS_OCTAVE_0_E: string;
    const PIANO_KEYS_OCTAVE_0_F: string;
    const PIANO_KEYS_OCTAVE_0_FIS: string;
    const PIANO_KEYS_OCTAVE_0_G: string;
    const PIANO_KEYS_OCTAVE_0_GIS: string;
    const PIANO_KEYS_OCTAVE_0_H: string;
    const PIANO_KEYS_OCTAVE_10_A: string;
    const PIANO_KEYS_OCTAVE_10_AIS: string;
    const PIANO_KEYS_OCTAVE_10_C: string;
    const PIANO_KEYS_OCTAVE_10_CIS: string;
    const PIANO_KEYS_OCTAVE_10_D: string;
    const PIANO_KEYS_OCTAVE_10_DIS: string;
    const PIANO_KEYS_OCTAVE_10_E: string;
    const PIANO_KEYS_OCTAVE_10_F: string;
    const PIANO_KEYS_OCTAVE_10_FIS: string;
    const PIANO_KEYS_OCTAVE_10_G: string;
    const PIANO_KEYS_OCTAVE_10_GIS: string;
    const PIANO_KEYS_OCTAVE_10_H: string;
    const PIANO_KEYS_OCTAVE_1_A: string;
    const PIANO_KEYS_OCTAVE_1_AIS: string;
    const PIANO_KEYS_OCTAVE_1_C: string;
    const PIANO_KEYS_OCTAVE_1_CIS: string;
    const PIANO_KEYS_OCTAVE_1_D: string;
    const PIANO_KEYS_OCTAVE_1_DIS: string;
    const PIANO_KEYS_OCTAVE_1_E: string;
    const PIANO_KEYS_OCTAVE_1_F: string;
    const PIANO_KEYS_OCTAVE_1_FIS: string;
    const PIANO_KEYS_OCTAVE_1_G: string;
    const PIANO_KEYS_OCTAVE_1_GIS: string;
    const PIANO_KEYS_OCTAVE_1_H: string;
    const PIANO_KEYS_OCTAVE_2_A: string;
    const PIANO_KEYS_OCTAVE_2_AIS: string;
    const PIANO_KEYS_OCTAVE_2_C: string;
    const PIANO_KEYS_OCTAVE_2_CIS: string;
    const PIANO_KEYS_OCTAVE_2_D: string;
    const PIANO_KEYS_OCTAVE_2_DIS: string;
    const PIANO_KEYS_OCTAVE_2_E: string;
    const PIANO_KEYS_OCTAVE_2_F: string;
    const PIANO_KEYS_OCTAVE_2_FIS: string;
    const PIANO_KEYS_OCTAVE_2_G: string;
    const PIANO_KEYS_OCTAVE_2_GIS: string;
    const PIANO_KEYS_OCTAVE_2_H: string;
    const PIANO_KEYS_OCTAVE_3_A: string;
    const PIANO_KEYS_OCTAVE_3_AIS: string;
    const PIANO_KEYS_OCTAVE_3_C: string;
    const PIANO_KEYS_OCTAVE_3_CIS: string;
    const PIANO_KEYS_OCTAVE_3_D: string;
    const PIANO_KEYS_OCTAVE_3_DIS: string;
    const PIANO_KEYS_OCTAVE_3_E: string;
    const PIANO_KEYS_OCTAVE_3_F: string;
    const PIANO_KEYS_OCTAVE_3_FIS: string;
    const PIANO_KEYS_OCTAVE_3_G: string;
    const PIANO_KEYS_OCTAVE_3_GIS: string;
    const PIANO_KEYS_OCTAVE_3_H: string;
    const PIANO_KEYS_OCTAVE_4_A: string;
    const PIANO_KEYS_OCTAVE_4_AIS: string;
    const PIANO_KEYS_OCTAVE_4_C: string;
    const PIANO_KEYS_OCTAVE_4_CIS: string;
    const PIANO_KEYS_OCTAVE_4_D: string;
    const PIANO_KEYS_OCTAVE_4_DIS: string;
    const PIANO_KEYS_OCTAVE_4_E: string;
    const PIANO_KEYS_OCTAVE_4_F: string;
    const PIANO_KEYS_OCTAVE_4_FIS: string;
    const PIANO_KEYS_OCTAVE_4_G: string;
    const PIANO_KEYS_OCTAVE_4_GIS: string;
    const PIANO_KEYS_OCTAVE_4_H: string;
    const PIANO_KEYS_OCTAVE_5_A: string;
    const PIANO_KEYS_OCTAVE_5_AIS: string;
    const PIANO_KEYS_OCTAVE_5_C: string;
    const PIANO_KEYS_OCTAVE_5_CIS: string;
    const PIANO_KEYS_OCTAVE_5_D: string;
    const PIANO_KEYS_OCTAVE_5_DIS: string;
    const PIANO_KEYS_OCTAVE_5_E: string;
    const PIANO_KEYS_OCTAVE_5_F: string;
    const PIANO_KEYS_OCTAVE_5_FIS: string;
    const PIANO_KEYS_OCTAVE_5_G: string;
    const PIANO_KEYS_OCTAVE_5_GIS: string;
    const PIANO_KEYS_OCTAVE_5_H: string;
    const PIANO_KEYS_OCTAVE_6_A: string;
    const PIANO_KEYS_OCTAVE_6_AIS: string;
    const PIANO_KEYS_OCTAVE_6_C: string;
    const PIANO_KEYS_OCTAVE_6_CIS: string;
    const PIANO_KEYS_OCTAVE_6_D: string;
    const PIANO_KEYS_OCTAVE_6_DIS: string;
    const PIANO_KEYS_OCTAVE_6_E: string;
    const PIANO_KEYS_OCTAVE_6_F: string;
    const PIANO_KEYS_OCTAVE_6_FIS: string;
    const PIANO_KEYS_OCTAVE_6_G: string;
    const PIANO_KEYS_OCTAVE_6_GIS: string;
    const PIANO_KEYS_OCTAVE_6_H: string;
    const PIANO_KEYS_OCTAVE_7_A: string;
    const PIANO_KEYS_OCTAVE_7_AIS: string;
    const PIANO_KEYS_OCTAVE_7_C: string;
    const PIANO_KEYS_OCTAVE_7_CIS: string;
    const PIANO_KEYS_OCTAVE_7_D: string;
    const PIANO_KEYS_OCTAVE_7_DIS: string;
    const PIANO_KEYS_OCTAVE_7_E: string;
    const PIANO_KEYS_OCTAVE_7_F: string;
    const PIANO_KEYS_OCTAVE_7_FIS: string;
    const PIANO_KEYS_OCTAVE_7_G: string;
    const PIANO_KEYS_OCTAVE_7_GIS: string;
    const PIANO_KEYS_OCTAVE_7_H: string;
    const PIANO_KEYS_OCTAVE_8_A: string;
    const PIANO_KEYS_OCTAVE_8_AIS: string;
    const PIANO_KEYS_OCTAVE_8_C: string;
    const PIANO_KEYS_OCTAVE_8_CIS: string;
    const PIANO_KEYS_OCTAVE_8_D: string;
    const PIANO_KEYS_OCTAVE_8_DIS: string;
    const PIANO_KEYS_OCTAVE_8_E: string;
    const PIANO_KEYS_OCTAVE_8_F: string;
    const PIANO_KEYS_OCTAVE_8_FIS: string;
    const PIANO_KEYS_OCTAVE_8_G: string;
    const PIANO_KEYS_OCTAVE_8_GIS: string;
    const PIANO_KEYS_OCTAVE_8_H: string;
    const PIANO_KEYS_OCTAVE_9_A: string;
    const PIANO_KEYS_OCTAVE_9_AIS: string;
    const PIANO_KEYS_OCTAVE_9_C: string;
    const PIANO_KEYS_OCTAVE_9_CIS: string;
    const PIANO_KEYS_OCTAVE_9_D: string;
    const PIANO_KEYS_OCTAVE_9_DIS: string;
    const PIANO_KEYS_OCTAVE_9_E: string;
    const PIANO_KEYS_OCTAVE_9_F: string;
    const PIANO_KEYS_OCTAVE_9_FIS: string;
    const PIANO_KEYS_OCTAVE_9_G: string;
    const PIANO_KEYS_OCTAVE_9_GIS: string;
    const PIANO_KEYS_OCTAVE_9_H: string;
    const RULER_DEFAULT_FACTOR: number;
    const RULER_DEFAULT_HEIGHT: number;
    const RULER_DEFAULT_LARGE_STEP: number;
    const RULER_DEFAULT_PRECISION: number;
    const RULER_DEFAULT_SCALE_PRECISION: number;
    const RULER_DEFAULT_SMALL_STEP: number;
    const RULER_DEFAULT_STEP: number;
    const RULER_FONT_SIZE: number;
    const RULER_FREE_SPACE: number;
    const SCALE_BOX_DEFAULT_SPACING: number;
    const SCALE_DEFAULT_CONTROL_NAME: string;
    const SCALE_DEFAULT_HEIGHT_REQUEST: number;
    const SCALE_DEFAULT_LOWER: number;
    const SCALE_DEFAULT_PAGE_SIZE: number;
    const SCALE_DEFAULT_STEP_COUNT: number;
    const SCALE_DEFAULT_UPPER: number;
    const SCALE_DEFAULT_VALUE: number;
    const SCALE_DEFAULT_WIDTH_REQUEST: number;
    const TEMPO_DEFAULT_CONTROL_NAME: string;
    const TEMPO_DEFAULT_HEIGHT_REQUEST: number;
    const TEMPO_DEFAULT_LOWER: number;
    const TEMPO_DEFAULT_PAGE_SIZE: number;
    const TEMPO_DEFAULT_STEP_COUNT: number;
    const TEMPO_DEFAULT_UPPER: number;
    const TEMPO_DEFAULT_VALUE: number;
    const TEMPO_DEFAULT_WIDTH_REQUEST: number;
    /**
     * Allocate #AgsExpanderChild-struct.
     * @param x the x position
     * @param y the y position
     * @param width the width
     * @param height the height
     * @returns the new #AgsExpanderChild-struct
     */
    function expander_child_alloc(x: number, y: number, width: number, height: number): any | null;
    /**
     * Free `expander_child`.
     * @param expander_child the #AgsExpanderChild-struct
     */
    function expander_child_free(expander_child?: any | null): void;
    /**
     * Allocate #AgsExpanderSetChild-struct.
     * @param x the x position
     * @param y the y position
     * @param width the width
     * @param height the height
     * @returns the new #AgsExpanderSetChild-struct
     */
    function expander_set_child_alloc(x: number, y: number, width: number, height: number): any | null;
    /**
     * Free `expander_set_child`.
     * @param expander_set_child the #AgsExpanderSetChild-struct
     */
    function expander_set_child_free(expander_set_child?: any | null): void;
    /**
     * Allocate #AgsPlot-struct.
     * @param n_points number of points
     * @param n_bitmaps number of bitmaps
     * @param n_pixmaps number of pixmaps
     * @returns the newly allocated #AgsPlot-struct
     */
    function plot_alloc(n_points: number, n_bitmaps: number, n_pixmaps: number): any | null;
    /**
     * Free `plot`.
     * @param plot the #AgsPlot-struct
     */
    function plot_free(plot?: any | null): void;
    /**
     * Get bitmaps.
     * @param plot the #AgsPlot-struct
     * @returns bitmap field
     */
    function plot_get_bitmap(plot?: any | null): number;
    /**
     * Get bitmap colors.
     * @param plot the #AgsPlot-struct
     * @returns bitmap color field
     */
    function plot_get_bitmap_color(plot?: any | null): number;
    /**
     * Get join points.
     * @param plot the #AgsPlot-struct
     * @returns join_points field
     */
    function plot_get_join_points(plot?: any | null): boolean;
    /**
     * Get number of bitmaps.
     * @param plot the #AgsPlot-struct
     * @returns n_bitmaps field
     */
    function plot_get_n_bitmaps(plot?: any | null): number;
    /**
     * Get number of pixmaps.
     * @param plot the #AgsPlot-struct
     * @returns n_pixmaps field
     */
    function plot_get_n_pixmaps(plot?: any | null): number;
    /**
     * Get number of points.
     * @param plot the #AgsPlot-struct
     * @returns n_points field
     */
    function plot_get_n_points(plot?: any | null): number;
    /**
     * Get pixmaps.
     * @param plot the #AgsPlot-struct
     * @returns pixmap field
     */
    function plot_get_pixmap(plot?: any | null): number;
    /**
     * Get points.
     * @param plot the #AgsPlot-struct
     * @returns point field
     */
    function plot_get_point(plot?: any | null): number;
    /**
     * Get point colors.
     * @param plot the #AgsPlot-struct
     * @returns point color field
     */
    function plot_get_point_color(plot?: any | null): number;
    /**
     * Get point labels.
     * @param plot the #AgsPlot-struct
     * @returns point label field
     */
    function plot_get_point_label(plot?: any | null): string[];
    /**
     * Set bitmap field of `plot`.
     * @param plot the #AgsPlot-struct
     * @param bitmap the bitmaps
     */
    function plot_set_bitmap(plot: any | null, bitmap: number): void;
    /**
     * Set bitmap color field of `plot`.
     * @param plot the #AgsPlot-struct
     * @param bitmap_color the bitmaps colors as array of RGB value
     */
    function plot_set_bitmap_color(plot: any | null, bitmap_color: number): void;
    /**
     * Set join_points field of `plot`.
     * @param plot the #AgsPlot-struct
     * @param join_points if %TRUE join points, otherwise not
     */
    function plot_set_join_points(plot: any | null, join_points: boolean): void;
    /**
     * Set n_bitmaps field of `plot`.
     * @param plot the #AgsPlot-struct
     * @param n_bitmaps the number of bitmaps
     */
    function plot_set_n_bitmaps(plot: any | null, n_bitmaps: number): void;
    /**
     * Set n_pixmaps field of `plot`.
     * @param plot the #AgsPlot-struct
     * @param n_pixmaps the number of pixmaps
     */
    function plot_set_n_pixmaps(plot: any | null, n_pixmaps: number): void;
    /**
     * Set n_points field of `plot`.
     * @param plot the #AgsPlot-struct
     * @param n_points the number of points
     */
    function plot_set_n_points(plot: any | null, n_points: number): void;
    /**
     * Set pixmap field of `plot`.
     * @param plot the #AgsPlot-struct
     * @param pixmap the pixmaps
     */
    function plot_set_pixmap(plot: any | null, pixmap: number): void;
    /**
     * Set point field of `plot`.
     * @param plot the #AgsPlot-struct
     * @param point the points as array of coordinates
     */
    function plot_set_point(plot: any | null, point: number): void;
    /**
     * Set point color field of `plot`.
     * @param plot the #AgsPlot-struct
     * @param point_color the points colors as array of RGB value
     */
    function plot_set_point_color(plot: any | null, point_color: number): void;
    /**
     * Set point label field of `plot`.
     * @param plot the #AgsPlot-struct
     * @param point_label the points labels as string vector
     */
    function plot_set_point_label(plot: any | null, point_label: string): void;
    function widget_cclosure_marshal_OBJECT__VOID(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function widget_cclosure_marshal_VOID__OBJECT_INT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    function widget_cclosure_marshal_VOID__STRING_INT(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    interface CartesianLabelFunc {
        (value: number, data?: any | null): string;
    }
    interface CartesianScaleFunc {
        (value: number, data?: any | null): number;
    }
    interface CartesianStepConversionFunc {
        (current: number, is_abscissae: boolean, data?: any | null): number;
    }
    interface CartesianTranslateFunc {
        (x: number, y: number, ret_x: number, ret_y: number, data?: any | null): void;
    }
    enum CartesianFlags {
        ABSCISSAE,
        ORDINATE,
        X_SCALE,
        Y_SCALE,
        X_UNIT,
        Y_UNIT,
        X_LABEL,
        Y_LABEL,
    }
    enum DialFlags {
        WITH_BUTTONS,
        MOUSE_BUTTON_PRESSED,
        BUTTON_DOWN_PRESSED,
        BUTTON_UP_PRESSED,
        MOTION_CAPTURING_INIT,
        MOTION_CAPTURING,
        SEEMLESS_MODE,
        INVERSE_LIGHT,
    }
    enum ExpanderSetFlags {
        GHOST,
        LEFT_ENDING,
        RIGHT_ENDING,
        LEFT_CONNECTOR,
        RIGHT_CONNECTOR,
    }
    enum FileWidgetFlags {
        APP_SANDBOX,
        WITH_MULTI_SELECTION,
        WITH_PREVIEW,
        HIDDEN_FILES_VISIBLE,
    }
    enum IconLinkFlags {
        HIGHLIGHT,
        SHOW_CONTEXT_MENU,
    }
    enum InputDialogFlags {
        STRING_INPUT,
        SPIN_BUTTON_INPUT,
    }
    enum LevelKeyMask {
        L_CONTROL,
        R_CONTROL,
        L_SHIFT,
        R_SHIFT,
    }
    enum PianoFlags {
        FULL_SCALE,
        OCTAVE_SCALE,
    }
    enum ScaleKeyMask {
        L_CONTROL,
        R_CONTROL,
        L_SHIFT,
        R_SHIFT,
    }
    enum TempoKeyMask {
        L_CONTROL,
        R_CONTROL,
        L_SHIFT,
        R_SHIFT,
    }
    module Cartesian {
        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Widget.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {
            center: number;
            font_size: number;
            fontSize: number;
            line_width: number;
            lineWidth: number;
            plot: any;
            point_radius: number;
            pointRadius: number;
            surface: any;
            translate_data: any;
            translateData: any;
            x_big_scale_factor: number;
            xBigScaleFactor: number;
            x_end: number;
            xEnd: number;
            x_label: any;
            xLabel: any;
            x_label_data: any;
            xLabelData: any;
            x_label_factor: number;
            xLabelFactor: number;
            x_label_precision: number;
            xLabelPrecision: number;
            x_label_start: number;
            xLabelStart: number;
            x_label_step_width: number;
            xLabelStepWidth: number;
            x_margin: number;
            xMargin: number;
            x_scale_data: any;
            xScaleData: any;
            x_scale_step_width: number;
            xScaleStepWidth: number;
            x_small_scale_factor: number;
            xSmallScaleFactor: number;
            x_start: number;
            xStart: number;
            x_step: number;
            xStep: number;
            x_step_data: any;
            xStepData: any;
            x_step_factor: number;
            xStepFactor: number;
            x_step_width: number;
            xStepWidth: number;
            x_translate_point: number;
            xTranslatePoint: number;
            x_unit: string;
            xUnit: string;
            x_unit_size: number;
            xUnitSize: number;
            x_unit_x0: number;
            xUnitX0: number;
            x_unit_y0: number;
            xUnitY0: number;
            y_big_scale_factor: number;
            yBigScaleFactor: number;
            y_end: number;
            yEnd: number;
            y_label: any;
            yLabel: any;
            y_label_data: any;
            yLabelData: any;
            y_label_factor: number;
            yLabelFactor: number;
            y_label_precision: number;
            yLabelPrecision: number;
            y_label_start: number;
            yLabelStart: number;
            y_label_step_height: number;
            yLabelStepHeight: number;
            y_margin: number;
            yMargin: number;
            y_scale_data: any;
            yScaleData: any;
            y_scale_step_height: number;
            yScaleStepHeight: number;
            y_small_scale_factor: number;
            ySmallScaleFactor: number;
            y_start: number;
            yStart: number;
            y_step: number;
            yStep: number;
            y_step_data: any;
            yStepData: any;
            y_step_factor: number;
            yStepFactor: number;
            y_step_height: number;
            yStepHeight: number;
            y_translate_point: number;
            yTranslatePoint: number;
            y_unit: string;
            yUnit: string;
            y_unit_size: number;
            yUnitSize: number;
            y_unit_x0: number;
            yUnitX0: number;
            y_unit_y0: number;
            yUnitY0: number;
        }
    }

    class Cartesian extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<Cartesian>;

        // Own properties of AgsGui.Cartesian

        /**
         * The center of lines
         */
        get center(): number;
        set center(val: number);
        /**
         * The font's size to draw labels and units.
         */
        get font_size(): number;
        set font_size(val: number);
        /**
         * The font's size to draw labels and units.
         */
        get fontSize(): number;
        set fontSize(val: number);
        /**
         * The line width.
         */
        get line_width(): number;
        set line_width(val: number);
        /**
         * The line width.
         */
        get lineWidth(): number;
        set lineWidth(val: number);
        /**
         * The #GList-struct containig #AgsPlot.
         */
        get plot(): any;
        set plot(val: any);
        /**
         * The points radius.
         */
        get point_radius(): number;
        set point_radius(val: number);
        /**
         * The points radius.
         */
        get pointRadius(): number;
        set pointRadius(val: number);
        /**
         * The cairo surface.
         */
        get surface(): any;
        set surface(val: any);
        /**
         * The data to pass to translate function.
         */
        get translate_data(): any;
        set translate_data(val: any);
        /**
         * The data to pass to translate function.
         */
        get translateData(): any;
        set translateData(val: any);
        /**
         * The scale factor to use with x big scale function.
         */
        get x_big_scale_factor(): number;
        set x_big_scale_factor(val: number);
        /**
         * The scale factor to use with x big scale function.
         */
        get xBigScaleFactor(): number;
        set xBigScaleFactor(val: number);
        /**
         * The x end.
         */
        get x_end(): number;
        set x_end(val: number);
        /**
         * The x end.
         */
        get xEnd(): number;
        set xEnd(val: number);
        /**
         * The x labels as a string array.
         */
        get x_label(): any;
        set x_label(val: any);
        /**
         * The x labels as a string array.
         */
        get xLabel(): any;
        set xLabel(val: any);
        /**
         * The data to pass to x label conversion function.
         */
        get x_label_data(): any;
        set x_label_data(val: any);
        /**
         * The data to pass to x label conversion function.
         */
        get xLabelData(): any;
        set xLabelData(val: any);
        /**
         * The factor to use with x label function.
         */
        get x_label_factor(): number;
        set x_label_factor(val: number);
        /**
         * The factor to use with x label function.
         */
        get xLabelFactor(): number;
        set xLabelFactor(val: number);
        /**
         * The precision to use with x label function.
         */
        get x_label_precision(): number;
        set x_label_precision(val: number);
        /**
         * The precision to use with x label function.
         */
        get xLabelPrecision(): number;
        set xLabelPrecision(val: number);
        /**
         * The x label start position.
         */
        get x_label_start(): number;
        set x_label_start(val: number);
        /**
         * The x label start position.
         */
        get xLabelStart(): number;
        set xLabelStart(val: number);
        /**
         * The x label step width.
         */
        get x_label_step_width(): number;
        set x_label_step_width(val: number);
        /**
         * The x label step width.
         */
        get xLabelStepWidth(): number;
        set xLabelStepWidth(val: number);
        /**
         * The horizontal x margin.
         */
        get x_margin(): number;
        set x_margin(val: number);
        /**
         * The horizontal x margin.
         */
        get xMargin(): number;
        set xMargin(val: number);
        /**
         * The data to pass to x scale conversion function.
         */
        get x_scale_data(): any;
        set x_scale_data(val: any);
        /**
         * The data to pass to x scale conversion function.
         */
        get xScaleData(): any;
        set xScaleData(val: any);
        /**
         * The width of a x scale step.
         */
        get x_scale_step_width(): number;
        set x_scale_step_width(val: number);
        /**
         * The width of a x scale step.
         */
        get xScaleStepWidth(): number;
        set xScaleStepWidth(val: number);
        /**
         * The scale factor to use with x small scale function.
         */
        get x_small_scale_factor(): number;
        set x_small_scale_factor(val: number);
        /**
         * The scale factor to use with x small scale function.
         */
        get xSmallScaleFactor(): number;
        set xSmallScaleFactor(val: number);
        /**
         * The x start.
         */
        get x_start(): number;
        set x_start(val: number);
        /**
         * The x start.
         */
        get xStart(): number;
        set xStart(val: number);
        /**
         * The x step.
         */
        get x_step(): number;
        set x_step(val: number);
        /**
         * The x step.
         */
        get xStep(): number;
        set xStep(val: number);
        /**
         * The data to pass to x step conversion function.
         */
        get x_step_data(): any;
        set x_step_data(val: any);
        /**
         * The data to pass to x step conversion function.
         */
        get xStepData(): any;
        set xStepData(val: any);
        /**
         * The step factor to use with x step conversion function.
         */
        get x_step_factor(): number;
        set x_step_factor(val: number);
        /**
         * The step factor to use with x step conversion function.
         */
        get xStepFactor(): number;
        set xStepFactor(val: number);
        /**
         * The width of a x step.
         */
        get x_step_width(): number;
        set x_step_width(val: number);
        /**
         * The width of a x step.
         */
        get xStepWidth(): number;
        set xStepWidth(val: number);
        /**
         * The x translate point.
         */
        get x_translate_point(): number;
        set x_translate_point(val: number);
        /**
         * The x translate point.
         */
        get xTranslatePoint(): number;
        set xTranslatePoint(val: number);
        /**
         * The x unit label.
         */
        get x_unit(): string;
        set x_unit(val: string);
        /**
         * The x unit label.
         */
        get xUnit(): string;
        set xUnit(val: string);
        /**
         * The x unit's size.
         */
        get x_unit_size(): number;
        set x_unit_size(val: number);
        /**
         * The x unit's size.
         */
        get xUnitSize(): number;
        set xUnitSize(val: number);
        /**
         * The x unit's x0 position.
         */
        get x_unit_x0(): number;
        set x_unit_x0(val: number);
        /**
         * The x unit's x0 position.
         */
        get xUnitX0(): number;
        set xUnitX0(val: number);
        /**
         * The x unit's y0 position.
         */
        get x_unit_y0(): number;
        set x_unit_y0(val: number);
        /**
         * The x unit's y0 position.
         */
        get xUnitY0(): number;
        set xUnitY0(val: number);
        /**
         * The scale factor to use with y big scale function.
         */
        get y_big_scale_factor(): number;
        set y_big_scale_factor(val: number);
        /**
         * The scale factor to use with y big scale function.
         */
        get yBigScaleFactor(): number;
        set yBigScaleFactor(val: number);
        /**
         * The y end.
         */
        get y_end(): number;
        set y_end(val: number);
        /**
         * The y end.
         */
        get yEnd(): number;
        set yEnd(val: number);
        /**
         * The y labels as a string array.
         */
        get y_label(): any;
        set y_label(val: any);
        /**
         * The y labels as a string array.
         */
        get yLabel(): any;
        set yLabel(val: any);
        /**
         * The data to pass to y label conversion function.
         */
        get y_label_data(): any;
        set y_label_data(val: any);
        /**
         * The data to pass to y label conversion function.
         */
        get yLabelData(): any;
        set yLabelData(val: any);
        /**
         * The factor to use with y label function.
         */
        get y_label_factor(): number;
        set y_label_factor(val: number);
        /**
         * The factor to use with y label function.
         */
        get yLabelFactor(): number;
        set yLabelFactor(val: number);
        /**
         * The precision to use with y label function.
         */
        get y_label_precision(): number;
        set y_label_precision(val: number);
        /**
         * The precision to use with y label function.
         */
        get yLabelPrecision(): number;
        set yLabelPrecision(val: number);
        /**
         * The y label start position.
         */
        get y_label_start(): number;
        set y_label_start(val: number);
        /**
         * The y label start position.
         */
        get yLabelStart(): number;
        set yLabelStart(val: number);
        /**
         * The y label step height.
         */
        get y_label_step_height(): number;
        set y_label_step_height(val: number);
        /**
         * The y label step height.
         */
        get yLabelStepHeight(): number;
        set yLabelStepHeight(val: number);
        /**
         * The horizontal y margin.
         */
        get y_margin(): number;
        set y_margin(val: number);
        /**
         * The horizontal y margin.
         */
        get yMargin(): number;
        set yMargin(val: number);
        /**
         * The data to pass to y scale conversion function.
         */
        get y_scale_data(): any;
        set y_scale_data(val: any);
        /**
         * The data to pass to y scale conversion function.
         */
        get yScaleData(): any;
        set yScaleData(val: any);
        /**
         * The height of a y scale step.
         */
        get y_scale_step_height(): number;
        set y_scale_step_height(val: number);
        /**
         * The height of a y scale step.
         */
        get yScaleStepHeight(): number;
        set yScaleStepHeight(val: number);
        /**
         * The scale factor to use with y small scale function.
         */
        get y_small_scale_factor(): number;
        set y_small_scale_factor(val: number);
        /**
         * The scale factor to use with y small scale function.
         */
        get ySmallScaleFactor(): number;
        set ySmallScaleFactor(val: number);
        /**
         * The y start.
         */
        get y_start(): number;
        set y_start(val: number);
        /**
         * The y start.
         */
        get yStart(): number;
        set yStart(val: number);
        /**
         * The y step.
         */
        get y_step(): number;
        set y_step(val: number);
        /**
         * The y step.
         */
        get yStep(): number;
        set yStep(val: number);
        /**
         * The data to pass to y step conversion function.
         */
        get y_step_data(): any;
        set y_step_data(val: any);
        /**
         * The data to pass to y step conversion function.
         */
        get yStepData(): any;
        set yStepData(val: any);
        /**
         * The step factor to use with y step conversion function.
         */
        get y_step_factor(): number;
        set y_step_factor(val: number);
        /**
         * The step factor to use with y step conversion function.
         */
        get yStepFactor(): number;
        set yStepFactor(val: number);
        /**
         * The height of a y step.
         */
        get y_step_height(): number;
        set y_step_height(val: number);
        /**
         * The height of a y step.
         */
        get yStepHeight(): number;
        set yStepHeight(val: number);
        /**
         * The y translate point.
         */
        get y_translate_point(): number;
        set y_translate_point(val: number);
        /**
         * The y translate point.
         */
        get yTranslatePoint(): number;
        set yTranslatePoint(val: number);
        /**
         * The y unit label.
         */
        get y_unit(): string;
        set y_unit(val: string);
        /**
         * The y unit label.
         */
        get yUnit(): string;
        set yUnit(val: string);
        /**
         * The y unit's size.
         */
        get y_unit_size(): number;
        set y_unit_size(val: number);
        /**
         * The y unit's size.
         */
        get yUnitSize(): number;
        set yUnitSize(val: number);
        /**
         * The y unit's x0 position.
         */
        get y_unit_x0(): number;
        set y_unit_x0(val: number);
        /**
         * The y unit's x0 position.
         */
        get yUnitX0(): number;
        set yUnitX0(val: number);
        /**
         * The y unit's y0 position.
         */
        get y_unit_y0(): number;
        set y_unit_y0(val: number);
        /**
         * The y unit's y0 position.
         */
        get yUnitY0(): number;
        set yUnitY0(val: number);

        // Own fields of AgsGui.Cartesian

        widget: Gtk.Widget;
        flags: CartesianFlags;

        // Constructors of AgsGui.Cartesian

        constructor(properties?: Partial<Cartesian.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Cartesian;

        // Own static methods of AgsGui.Cartesian

        /**
         * Perform linear step conversion.
         * @param current current step value
         * @param is_abscissae is abscissae
         * @param data the data
         */
        static linear_step_conversion_func(current: number, is_abscissae: boolean, data?: any | null): number;
        /**
         * Perform linear translation.
         * @param x the x position
         * @param y the y position
         * @param data the #AgsCartesian
         */
        static linear_translate_func(x: number, y: number, data?: any | null): [number, number];
        /**
         * Labeling function of x big scale
         * @param value the value
         * @param data the #AgsCartesian
         */
        static linear_x_big_scale_func(value: number, data?: any | null): number;
        /**
         * Format x label `value` appropriately.
         * @param value the value
         * @param data the #AgsCartesian
         */
        static linear_x_label_func(value: number, data?: any | null): string;
        /**
         * Labeling function of x small scale
         * @param value the value
         * @param data the #AgsCartesian
         */
        static linear_x_small_scale_func(value: number, data?: any | null): number;
        /**
         * Labeling function of y big scale
         * @param value the value
         * @param data the #AgsCartesian
         */
        static linear_y_big_scale_func(value: number, data?: any | null): number;
        /**
         * Format y label `value` appropriately.
         * @param value the value
         * @param data the #AgsCartesian
         */
        static linear_y_label_func(value: number, data?: any | null): string;
        /**
         * Labeling function of y small scale
         * @param value the value
         * @param data the #AgsCartesian
         */
        static linear_y_small_scale_func(value: number, data?: any | null): number;

        // Own methods of AgsGui.Cartesian

        /**
         * Add `plot` to `cartesian`.
         * @param plot the #AgsPlot-struct
         */
        add_plot(plot?: any | null): void;
        /**
         * Fill x label if `do_x_label,` otherwise y label.
         * @param do_x_label do x label
         */
        fill_label(do_x_label: boolean): void;
        /**
         * Get center of `cartesian`.
         * @returns the center
         */
        get_center(): number;
        /**
         * Get font size of `cartesian`.
         * @returns the font size
         */
        get_font_size(): number;
        /**
         * Get line width of `cartesian`.
         * @returns the line width
         */
        get_line_width(): number;
        /**
         * Get point radius.
         * @returns the point radius
         */
        get_point_radius(): number;
        /**
         * Get cairo surface of `cartesian`.
         * @returns the cairo surface
         */
        get_surface(): cairo.Surface;
        /**
         * Get x big scale factor of `cartesian`.
         * @returns the x big factor
         */
        get_x_big_scale_factor(): number;
        /**
         * Get x end of `cartesian`.
         * @returns the x end
         */
        get_x_end(): number;
        /**
         * Get x label of `cartesian`.
         * @returns the x label
         */
        get_x_label(): string[];
        /**
         * Get x label factor of `cartesian`.
         * @returns the x label factor
         */
        get_x_label_factor(): number;
        /**
         * Get x label precision of `cartesian`.
         * @returns the x label precision
         */
        get_x_label_precision(): number;
        /**
         * Get x label start of `cartesian`.
         * @returns the x label start
         */
        get_x_label_start(): number;
        /**
         * Get x label step width.
         * @returns the x label step width
         */
        get_x_label_step_width(): number;
        /**
         * Get x margin of `cartesian`.
         * @returns the x margin
         */
        get_x_margin(): number;
        /**
         * Get x scale step width of `cartesian`.
         * @returns the x scale step width
         */
        get_x_scale_step_width(): number;
        /**
         * Get x small scale factor of `cartesian`.
         * @returns the x small factor
         */
        get_x_small_scale_factor(): number;
        /**
         * Get x start of `cartesian`.
         * @returns the x start
         */
        get_x_start(): number;
        /**
         * Get x step of `cartesian`.
         * @returns the x step
         */
        get_x_step(): number;
        /**
         * Get x step factor of `cartesian`.
         * @returns the x step factor
         */
        get_x_step_factor(): number;
        /**
         * Get x step width of `cartesian`.
         * @returns the x step width
         */
        get_x_step_width(): number;
        /**
         * Get x unit of `cartesian`.
         * @returns the x unit
         */
        get_x_unit(): string;
        /**
         * Get x unit size of `cartesian`.
         * @returns the x unit size
         */
        get_x_unit_size(): number;
        /**
         * Get x unit x0 of `cartesian`.
         * @returns the x unit x0
         */
        get_x_unit_x0(): number;
        /**
         * Get x unit y0 of `cartesian`.
         * @returns the x unit y0
         */
        get_x_unit_y0(): number;
        /**
         * Get y big scale factor of `cartesian`.
         * @returns the y big factor
         */
        get_y_big_scale_factor(): number;
        /**
         * Get y end of `cartesian`.
         * @returns the y end
         */
        get_y_end(): number;
        /**
         * Get y label of `cartesian`.
         * @returns the y label
         */
        get_y_label(): string[];
        /**
         * Get y label factor of `cartesian`.
         * @returns the y label factor
         */
        get_y_label_factor(): number;
        /**
         * Get y label precision of `cartesian`.
         * @returns the y label precision
         */
        get_y_label_precision(): number;
        /**
         * Get y label start of `cartesian`.
         * @returns the y label start
         */
        get_y_label_start(): number;
        /**
         * Get y label step height of `cartesian`.
         * @returns the y label step height
         */
        get_y_label_step_height(): number;
        /**
         * Get y margin of `cartesian`.
         * @returns the y margin
         */
        get_y_margin(): number;
        /**
         * Get y scale step height of `cartesian`.
         * @returns the y scale step height
         */
        get_y_scale_step_height(): number;
        /**
         * Get y small scale factor of `cartesian`.
         * @returns the y small factor
         */
        get_y_small_scale_factor(): number;
        /**
         * Get y start of `cartesian`.
         * @returns the y start
         */
        get_y_start(): number;
        /**
         * Get y step of `cartesian`.
         * @returns the y step
         */
        get_y_step(): number;
        /**
         * Get y step factor of `cartesian`.
         * @returns the y step factor
         */
        get_y_step_factor(): number;
        /**
         * Get y step height.
         * @returns the y step height
         */
        get_y_step_height(): number;
        /**
         * Get y unit of `cartesian`.
         * @returns the y unit
         */
        get_y_unit(): string;
        /**
         * Get y unit size of `cartesian`.
         * @returns the y unit size
         */
        get_y_unit_size(): number;
        /**
         * Get y unit x0 of `cartesian`.
         * @returns the y unit x0
         */
        get_y_unit_x0(): number;
        /**
         * Get y unit y0 of `cartesian`.
         */
        get_y_unit_y0(): number;
        /**
         * Reallocate x label if `do_x_label,` otherwise y label.
         * @param do_x_label do x label
         */
        reallocate_label(do_x_label: boolean): void;
        /**
         * Remove `plot` from `cartesian`.
         * @param plot the #AgsPlot-struct
         */
        remove_plot(plot?: any | null): void;
        /**
         * Set center of `cartesian`.
         * @param center the center
         */
        set_center(center: number): void;
        /**
         * Set font size of `cartesian`.
         * @param font_size the font size
         */
        set_font_size(font_size: number): void;
        /**
         * Set line width of `cartesian`.
         * @param line_width the line width
         */
        set_line_width(line_width: number): void;
        /**
         * Set point radius.
         * @param point_radius the point radius
         */
        set_point_radius(point_radius: number): void;
        /**
         * Set x big scale factor of `cartesian`.
         * @param x_big_scale_factor the x big scale factor
         */
        set_x_big_scale_factor(x_big_scale_factor: number): void;
        /**
         * Set x end of `cartesian`.
         * @param x_end the x end
         */
        set_x_end(x_end: number): void;
        /**
         * Set x label of `cartesian`.
         * @param x_label the x label
         */
        set_x_label(x_label: string): void;
        /**
         * Set x label factor of `cartesian`.
         * @param x_label_factor the x label factor
         */
        set_x_label_factor(x_label_factor: number): void;
        /**
         * Set x label precision of `cartesian`.
         * @param x_label_precision the x label precision
         */
        set_x_label_precision(x_label_precision: number): void;
        /**
         * Set x label start of `cartesian`.
         * @param x_label_start the x label start
         */
        set_x_label_start(x_label_start: number): void;
        /**
         * Set x label step width of `cartesian`.
         * @param x_label_step_width the x label step width
         */
        set_x_label_step_width(x_label_step_width: number): void;
        /**
         * Set x margin of `cartesian`.
         * @param x_margin the x margin
         */
        set_x_margin(x_margin: number): void;
        /**
         * Set x scale step width of `cartesian`.
         * @param x_scale_step_width the x scale step width
         */
        set_x_scale_step_width(x_scale_step_width: number): void;
        /**
         * Set x small scale factor of `cartesian`.
         * @param x_small_scale_factor the x small scale factor
         */
        set_x_small_scale_factor(x_small_scale_factor: number): void;
        /**
         * Set x start of `cartesian`.
         * @param x_start the x start
         */
        set_x_start(x_start: number): void;
        /**
         * Set x step of `cartesian`.
         * @param x_step the x step
         */
        set_x_step(x_step: number): void;
        /**
         * Set x step factor of `cartesian`.
         * @param x_step_factor the x step factor
         */
        set_x_step_factor(x_step_factor: number): void;
        /**
         * Set x step width of `cartesian`.
         * @param x_step_width the x step width
         */
        set_x_step_width(x_step_width: number): void;
        /**
         * Set x unit of `cartesian`.
         * @param x_unit the x unit
         */
        set_x_unit(x_unit: string): void;
        /**
         * Set x unit size of `cartesian`.
         * @param x_unit_size the x unit size
         */
        set_x_unit_size(x_unit_size: number): void;
        /**
         * Set x unit x0 of `cartesian`.
         * @param x_unit_x0 the x unit x0
         */
        set_x_unit_x0(x_unit_x0: number): void;
        /**
         * Set x unit y0 of `cartesian`.
         * @param x_unit_y0 the x unit y0
         */
        set_x_unit_y0(x_unit_y0: number): void;
        /**
         * Set y big scale factor of `cartesian`.
         * @param y_big_scale_factor the y big scale factor
         */
        set_y_big_scale_factor(y_big_scale_factor: number): void;
        /**
         * Set y end of `cartesian`.
         * @param y_end the y end
         */
        set_y_end(y_end: number): void;
        /**
         * Set y label of `cartesian`.
         * @param y_label the y label
         */
        set_y_label(y_label: string): void;
        /**
         * Set y label factor of `cartesian`.
         * @param y_label_factor the y label factor
         */
        set_y_label_factor(y_label_factor: number): void;
        /**
         * Set y label precision of `cartesian`.
         * @param y_label_precision the y label precision
         */
        set_y_label_precision(y_label_precision: number): void;
        /**
         * Set y label start of `cartesian`.
         * @param y_label_start the y label start
         */
        set_y_label_start(y_label_start: number): void;
        /**
         * Set y label step height of `cartesian`.
         * @param y_label_step_height the y label step height
         */
        set_y_label_step_height(y_label_step_height: number): void;
        /**
         * Set y margin of `cartesian`.
         * @param y_margin the y margin
         */
        set_y_margin(y_margin: number): void;
        /**
         * Set y scale step height of `cartesian`.
         * @param y_scale_step_height the y scale step height
         */
        set_y_scale_step_height(y_scale_step_height: number): void;
        /**
         * Set y small scale factor of `cartesian`.
         * @param y_small_scale_factor the y small scale factor
         */
        set_y_small_scale_factor(y_small_scale_factor: number): void;
        /**
         * Set y start of `cartesian`.
         * @param y_start the y start
         */
        set_y_start(y_start: number): void;
        /**
         * Set y step of `cartesian`.
         * @param y_step the y step
         */
        set_y_step(y_step: number): void;
        /**
         * Set y step factor of `cartesian`.
         * @param y_step_factor the y step factor
         */
        set_y_step_factor(y_step_factor: number): void;
        /**
         * Set y step height of `cartesian`.
         * @param y_step_height the y step height
         */
        set_y_step_height(y_step_height: number): void;
        /**
         * Set y unit of `cartesian`.
         * @param y_unit the y unit
         */
        set_y_unit(y_unit: string): void;
        /**
         * Set y unit size of `cartesian`.
         * @param y_unit_size the y unit size
         */
        set_y_unit_size(y_unit_size: number): void;
        /**
         * Set y unit x0 of `cartesian`.
         * @param y_unit_x0 the y unit x0
         */
        set_y_unit_x0(y_unit_x0: number): void;
        /**
         * Set y unit y0 of `cartesian`.
         * @param y_unit_y0 the y unit y0
         */
        set_y_unit_y0(y_unit_y0: number): void;

        // Inherited properties
        /**
         * The accessible role of the given `GtkAccessible` implementation.
         *
         * The accessible role cannot be changed once set.
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);
        /**
         * The accessible role of the given `GtkAccessible` implementation.
         *
         * The accessible role cannot be changed once set.
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

        // Inherited methods
        /**
         * Requests the user's screen reader to announce the given message.
         *
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         *
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;
        /**
         * Retrieves the accessible implementation for the given `GtkAccessible`.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Query a platform state, such as focus.
         *
         * See gtk_accessible_platform_changed().
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for `GtkText` wrappers.
         * @param state platform state to query
         * @returns the value of @state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Resets the accessible `property` to its default value.
         * @param property a `GtkAccessibleProperty`
         */
        reset_property(property: Gtk.AccessibleProperty): void;
        /**
         * Resets the accessible `relation` to its default value.
         * @param relation a `GtkAccessibleRelation`
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;
        /**
         * Resets the accessible `state` to its default value.
         * @param state a `GtkAccessibleState`
         */
        reset_state(state: Gtk.AccessibleState): void;
        /**
         * Sets the parent and sibling of an accessible object.
         *
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the `GtkAccessible`
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
        /**
         * Updates the next accessible sibling of `self`.
         *
         * That might be useful when a new child of a custom `GtkAccessible`
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
        /**
         * Updates an array of accessible properties.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * property change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param properties an array of `GtkAccessibleProperty`
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible relations.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * relation change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param relations an array of `GtkAccessibleRelation`
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible states.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * state change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param states an array of `GtkAccessibleState`
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the accessible implementation for the given `GtkAccessible`.
         */
        vfunc_get_at_context(): Gtk.ATContext | null;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Query a platform state, such as focus.
         *
         * See gtk_accessible_platform_changed().
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for `GtkText` wrappers.
         * @param state platform state to query
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Gets the ID of the `buildable` object.
         *
         * `GtkBuilder` sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a `GtkBuilder`
         * @param child child to add
         * @param type kind of child or %NULL
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
        /**
         * Similar to gtk_buildable_parser_finished() but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a `GtkBuilder`
         * @param child child object or %NULL for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         */
        vfunc_custom_finished(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder `GtkBuilder` used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        vfunc_custom_tag_end(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called for each unknown element under `<child>`.
         * @param builder a `GtkBuilder` used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         */
        vfunc_custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, Gtk.BuildableParser, any];
        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         */
        vfunc_get_id(): string;
        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a `GtkBuilder`
         * @param childname name of child
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. `GtkWindow` sets
         *  the `GtkWidget:visible` property here.
         * @param builder
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;
        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, g_object_set_property()
         *  is used by default. `GtkWindow` implements this to delay showing itself
         *  (i.e. setting the [property`Gtk`.Widget:visible] property) until the whole
         *  interface is created.
         * @param builder
         * @param name
         * @param value
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
        /**
         * Stores the id attribute given in the `GtkBuilder` UI definition.
         *   `GtkWidget` stores the name as object data. Implement this method if your
         *   object has some notion of “ID” and it makes sense to map the XML id
         *   attribute to it.
         * @param id
         */
        vfunc_set_id(id: string): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module Dial {
        // Signal callback interfaces

        interface ValueChanged {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Widget.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {
            adjustment: GObject.Object;
            button_height: number;
            buttonHeight: number;
            button_width: number;
            buttonWidth: number;
            font_size: number;
            fontSize: number;
            margin_left: number;
            marginLeft: number;
            margin_right: number;
            marginRight: number;
            outline_strength: number;
            outlineStrength: number;
            radius: number;
            scale_precision: number;
            scalePrecision: number;
        }
    }

    class Dial extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<Dial>;

        // Own properties of AgsGui.Dial

        /**
         * The adjustment storing current value and boundaries.
         */
        get adjustment(): GObject.Object;
        set adjustment(val: GObject.Object);
        /**
         * The buttons height.
         */
        get button_height(): number;
        set button_height(val: number);
        /**
         * The buttons height.
         */
        get buttonHeight(): number;
        set buttonHeight(val: number);
        /**
         * The buttons width.
         */
        get button_width(): number;
        set button_width(val: number);
        /**
         * The buttons width.
         */
        get buttonWidth(): number;
        set buttonWidth(val: number);
        /**
         * The font size of the buttons.
         */
        get font_size(): number;
        set font_size(val: number);
        /**
         * The font size of the buttons.
         */
        get fontSize(): number;
        set fontSize(val: number);
        /**
         * The button's margin left.
         */
        get margin_left(): number;
        set margin_left(val: number);
        /**
         * The button's margin left.
         */
        get marginLeft(): number;
        set marginLeft(val: number);
        /**
         * The button's margin right.
         */
        get margin_right(): number;
        set margin_right(val: number);
        /**
         * The button's margin right.
         */
        get marginRight(): number;
        set marginRight(val: number);
        /**
         * The outline strength of the knob.
         */
        get outline_strength(): number;
        set outline_strength(val: number);
        /**
         * The outline strength of the knob.
         */
        get outlineStrength(): number;
        set outlineStrength(val: number);
        /**
         * The radius of the knob.
         */
        get radius(): number;
        set radius(val: number);
        /**
         * The precision of the scale.
         */
        get scale_precision(): number;
        set scale_precision(val: number);
        /**
         * The precision of the scale.
         */
        get scalePrecision(): number;
        set scalePrecision(val: number);

        // Own fields of AgsGui.Dial

        widget: Gtk.Widget;
        flags: DialFlags;
        scale_max_precision: number;
        tolerance: number;
        negated_tolerance: number;
        gravity_x: number;
        gravity_y: number;
        current_x: number;
        current_y: number;

        // Constructors of AgsGui.Dial

        constructor(properties?: Partial<Dial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Dial;

        // Own signals of AgsGui.Dial

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'value-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'value-changed', callback: (_source: this) => void): number;
        emit(signal: 'value-changed'): void;

        // Own virtual methods of AgsGui.Dial

        /**
         * draws the widget
         */
        vfunc_value_changed(): void;

        // Own methods of AgsGui.Dial

        /**
         * Get adjustment of `dial`.
         * @returns the #GtkAdjustment
         */
        get_adjustment(): Gtk.Adjustment;
        /**
         * Get button height of `dial`.
         * @returns the button height
         */
        get_button_height(): number;
        /**
         * Get button width of `dial`.
         * @returns the button width
         */
        get_button_width(): number;
        /**
         * Get font size of `dial`.
         * @returns the font size
         */
        get_font_size(): number;
        /**
         * Get margin_left of `dial`.
         * @returns the margin left
         */
        get_margin_left(): number;
        /**
         * Get margin right of `dial`.
         * @returns the margin right
         */
        get_margin_right(): number;
        /**
         * Get outline strength of `dial`.
         * @returns the outline _strength
         */
        get_outline_strength(): number;
        /**
         * Get radius of `dial`.
         * @returns the radius
         */
        get_radius(): number;
        /**
         * Get scale precision of `dial`.
         * @returns the scale precision
         */
        get_scale_precision(): number;
        /**
         * Get value
         * @returns the value
         */
        get_value(): number;
        /**
         * Set adjustment of `dial`.
         * @param adjustment the #GtkAdjustment
         */
        set_adjustment(adjustment: Gtk.Adjustment): void;
        /**
         * Set button height of `dial`.
         * @param button_height the button height
         */
        set_button_height(button_height: number): void;
        /**
         * Set button width of `dial`.
         * @param button_width the button width
         */
        set_button_width(button_width: number): void;
        /**
         * Set font size of `dial`.
         * @param font_size the font size
         */
        set_font_size(font_size: number): void;
        /**
         * Set margin left of `dial`.
         * @param margin_left the margin left
         */
        set_margin_left(margin_left: number): void;
        /**
         * Set margin right of `dial`.
         * @param margin_right the margin right
         */
        set_margin_right(margin_right: number): void;
        /**
         * Set outline strength of `dial`.
         * @param outline_strength the outline strength
         */
        set_outline_strength(outline_strength: number): void;
        /**
         * Set radius of `dial`.
         * @param radius the radius
         */
        set_radius(radius: number): void;
        /**
         * Set scale precision of `dial`.
         * @param scale_precision the scale precision
         */
        set_scale_precision(scale_precision: number): void;
        /**
         * Set value
         * @param value the value to set
         */
        set_value(value: number): void;
        /**
         * draws the widget
         */
        value_changed(): void;

        // Inherited properties
        /**
         * The accessible role of the given `GtkAccessible` implementation.
         *
         * The accessible role cannot be changed once set.
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);
        /**
         * The accessible role of the given `GtkAccessible` implementation.
         *
         * The accessible role cannot be changed once set.
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

        // Inherited methods
        /**
         * Requests the user's screen reader to announce the given message.
         *
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         *
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;
        /**
         * Retrieves the accessible implementation for the given `GtkAccessible`.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Query a platform state, such as focus.
         *
         * See gtk_accessible_platform_changed().
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for `GtkText` wrappers.
         * @param state platform state to query
         * @returns the value of @state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Resets the accessible `property` to its default value.
         * @param property a `GtkAccessibleProperty`
         */
        reset_property(property: Gtk.AccessibleProperty): void;
        /**
         * Resets the accessible `relation` to its default value.
         * @param relation a `GtkAccessibleRelation`
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;
        /**
         * Resets the accessible `state` to its default value.
         * @param state a `GtkAccessibleState`
         */
        reset_state(state: Gtk.AccessibleState): void;
        /**
         * Sets the parent and sibling of an accessible object.
         *
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the `GtkAccessible`
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
        /**
         * Updates the next accessible sibling of `self`.
         *
         * That might be useful when a new child of a custom `GtkAccessible`
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
        /**
         * Updates an array of accessible properties.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * property change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param properties an array of `GtkAccessibleProperty`
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible relations.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * relation change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param relations an array of `GtkAccessibleRelation`
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible states.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * state change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param states an array of `GtkAccessibleState`
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the accessible implementation for the given `GtkAccessible`.
         */
        vfunc_get_at_context(): Gtk.ATContext | null;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Query a platform state, such as focus.
         *
         * See gtk_accessible_platform_changed().
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for `GtkText` wrappers.
         * @param state platform state to query
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Gets the ID of the `buildable` object.
         *
         * `GtkBuilder` sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a `GtkBuilder`
         * @param child child to add
         * @param type kind of child or %NULL
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
        /**
         * Similar to gtk_buildable_parser_finished() but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a `GtkBuilder`
         * @param child child object or %NULL for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         */
        vfunc_custom_finished(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder `GtkBuilder` used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        vfunc_custom_tag_end(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called for each unknown element under `<child>`.
         * @param builder a `GtkBuilder` used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         */
        vfunc_custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, Gtk.BuildableParser, any];
        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         */
        vfunc_get_id(): string;
        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a `GtkBuilder`
         * @param childname name of child
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. `GtkWindow` sets
         *  the `GtkWidget:visible` property here.
         * @param builder
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;
        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, g_object_set_property()
         *  is used by default. `GtkWindow` implements this to delay showing itself
         *  (i.e. setting the [property`Gtk`.Widget:visible] property) until the whole
         *  interface is created.
         * @param builder
         * @param name
         * @param value
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
        /**
         * Stores the id attribute given in the `GtkBuilder` UI definition.
         *   `GtkWidget` stores the name as object data. Implement this method if your
         *   object has some notion of “ID” and it makes sense to map the XML id
         *   attribute to it.
         * @param id
         */
        vfunc_set_id(id: string): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module Expander {
        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Box.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps,
                Gtk.Orientable.ConstructorProps {}
    }

    class Expander extends Gtk.Box implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<Expander>;

        // Own fields of AgsGui.Expander

        box: Gtk.Box;
        flags: ExpanderFlags;
        expander: Gtk.Expander;
        grid: Gtk.Grid;
        children: any[];

        // Constructors of AgsGui.Expander

        constructor(properties?: Partial<Expander.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Expander;

        // Own methods of AgsGui.Expander

        /**
         * Adds a #GtkWidget to #AgsExpander
         * @param widget the child #GtkWidget
         * @param x x-position
         * @param y y-position
         * @param width allocation width
         * @param height allocation height
         */
        add(widget: Gtk.Widget, x: number, y: number, width: number, height: number): void;
        /**
         * Find `child` of `expander`.
         * @param child the #GtkWidget
         * @returns the matching #AgsExpanderChild-struct
         */
        child_find(child: Gtk.Widget): any | null;
        /**
         * Removes a #GtkWidget of #AgsExpander
         * @param widget the child #GtkWidget
         */
        remove(widget: Gtk.Widget): void;

        // Inherited properties
        /**
         * The orientation of the orientable.
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        // Inherited methods
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the @orientable
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module ExpanderSet {
        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Grid.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps,
                Gtk.Orientable.ConstructorProps {}
    }

    class ExpanderSet extends Gtk.Grid implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<ExpanderSet>;

        // Own fields of AgsGui.ExpanderSet

        grid: Gtk.Grid;
        flags: ExpanderSetFlags;
        ghost: any[];
        location: any[];

        // Constructors of AgsGui.ExpanderSet

        constructor(properties?: Partial<ExpanderSet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ExpanderSet;

        // Own methods of AgsGui.ExpanderSet

        /**
         * Adds a #GtkWidget to #AgsExpanderSet
         * @param widget the child #GtkWidget
         * @param x x-position
         * @param y y-position
         * @param width allocation width
         * @param height allocation height
         */
        add(widget: Gtk.Widget, x: number, y: number, width: number, height: number): void;
        /**
         * Find `child` of `expander_set`.
         * @param child the #GtkWidget
         * @returns the matching #AgsExpanderSetChild-struct
         */
        child_find(child: Gtk.Widget): any | null;
        /**
         * Removes a #GtkWidget of #AgsExpanderSet
         * @param widget the child #GtkWidget
         */
        remove(widget: Gtk.Widget): void;

        // Inherited properties
        /**
         * The orientation of the orientable.
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        // Inherited methods
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the @orientable
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module FileDialog {
        // Signal callback interfaces

        interface Response {
            (object: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Window.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps,
                Gtk.Native.ConstructorProps,
                Gtk.Root.ConstructorProps,
                Gtk.ShortcutManager.ConstructorProps {
            file_widget: any;
            fileWidget: any;
        }
    }

    class FileDialog
        extends Gtk.Window
        implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Native, Gtk.Root, Gtk.ShortcutManager
    {
        static $gtype: GObject.GType<FileDialog>;

        // Own properties of AgsGui.FileDialog

        get file_widget(): any;
        set file_widget(val: any);
        get fileWidget(): any;
        set fileWidget(val: any);

        // Own fields of AgsGui.FileDialog

        window: Gtk.Window;
        flags: number;
        vbox: Gtk.Box;
        activate_button: Gtk.Button;

        // Constructors of AgsGui.FileDialog

        constructor(properties?: Partial<FileDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](transient_for: Gtk.Widget, title: string): FileDialog;
        // Conflicted with Gtk.Window.new

        static ['new'](...args: never[]): any;

        // Own signals of AgsGui.FileDialog

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'response', callback: (_source: this, object: number) => void): number;
        connect_after(signal: 'response', callback: (_source: this, object: number) => void): number;
        emit(signal: 'response', object: number): void;

        // Own virtual methods of AgsGui.FileDialog

        /**
         * Response `file_dialog` due to user action.
         * @param response_id the response id
         */
        vfunc_response(response_id: number): void;

        // Own methods of AgsGui.FileDialog

        /**
         * Response `file_dialog` due to user action.
         * @param response_id the response id
         */
        response(response_id: number): void;

        // Inherited properties
        /**
         * Whether the widget or any of its descendents can accept
         * the input focus.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get can_focus(): boolean;
        set can_focus(val: boolean);
        /**
         * Whether the widget or any of its descendents can accept
         * the input focus.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get canFocus(): boolean;
        set canFocus(val: boolean);
        /**
         * Whether the widget can receive pointer events.
         */
        get can_target(): boolean;
        set can_target(val: boolean);
        /**
         * Whether the widget can receive pointer events.
         */
        get canTarget(): boolean;
        set canTarget(val: boolean);
        /**
         * A list of css classes applied to this widget.
         */
        get css_classes(): string[];
        set css_classes(val: string[]);
        /**
         * A list of css classes applied to this widget.
         */
        get cssClasses(): string[];
        set cssClasses(val: string[]);
        /**
         * The name of this widget in the CSS tree.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get css_name(): string;
        /**
         * The name of this widget in the CSS tree.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get cssName(): string;
        /**
         * The cursor used by `widget`.
         */
        get cursor(): Gdk.Cursor;
        set cursor(val: Gdk.Cursor);
        /**
         * Whether the widget should grab focus when it is clicked with the mouse.
         *
         * This property is only relevant for widgets that can take focus.
         */
        get focus_on_click(): boolean;
        set focus_on_click(val: boolean);
        /**
         * Whether the widget should grab focus when it is clicked with the mouse.
         *
         * This property is only relevant for widgets that can take focus.
         */
        get focusOnClick(): boolean;
        set focusOnClick(val: boolean);
        /**
         * Whether this widget itself will accept the input focus.
         */
        get focusable(): boolean;
        set focusable(val: boolean);
        /**
         * How to distribute horizontal space if widget gets extra space.
         */
        get halign(): Gtk.Align;
        set halign(val: Gtk.Align);
        /**
         * Whether the widget is the default widget.
         */
        get has_default(): boolean;
        /**
         * Whether the widget is the default widget.
         */
        get hasDefault(): boolean;
        /**
         * Whether the widget has the input focus.
         */
        get has_focus(): boolean;
        /**
         * Whether the widget has the input focus.
         */
        get hasFocus(): boolean;
        /**
         * Enables or disables the emission of the ::query-tooltip signal on `widget`.
         *
         * A value of %TRUE indicates that `widget` can have a tooltip, in this case
         * the widget will be queried using [signal`Gtk`.Widget::query-tooltip] to
         * determine whether it will provide a tooltip or not.
         */
        get has_tooltip(): boolean;
        set has_tooltip(val: boolean);
        /**
         * Enables or disables the emission of the ::query-tooltip signal on `widget`.
         *
         * A value of %TRUE indicates that `widget` can have a tooltip, in this case
         * the widget will be queried using [signal`Gtk`.Widget::query-tooltip] to
         * determine whether it will provide a tooltip or not.
         */
        get hasTooltip(): boolean;
        set hasTooltip(val: boolean);
        /**
         * Override for height request of the widget.
         *
         * If this is -1, the natural request will be used.
         */
        get height_request(): number;
        set height_request(val: number);
        /**
         * Override for height request of the widget.
         *
         * If this is -1, the natural request will be used.
         */
        get heightRequest(): number;
        set heightRequest(val: number);
        /**
         * Whether to expand horizontally.
         */
        get hexpand(): boolean;
        set hexpand(val: boolean);
        /**
         * Whether to use the `hexpand` property.
         */
        get hexpand_set(): boolean;
        set hexpand_set(val: boolean);
        /**
         * Whether to use the `hexpand` property.
         */
        get hexpandSet(): boolean;
        set hexpandSet(val: boolean);
        /**
         * The `GtkLayoutManager` instance to use to compute the preferred size
         * of the widget, and allocate its children.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get layout_manager(): Gtk.LayoutManager;
        set layout_manager(val: Gtk.LayoutManager);
        /**
         * The `GtkLayoutManager` instance to use to compute the preferred size
         * of the widget, and allocate its children.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get layoutManager(): Gtk.LayoutManager;
        set layoutManager(val: Gtk.LayoutManager);
        /**
         * Margin on bottom side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get margin_bottom(): number;
        set margin_bottom(val: number);
        /**
         * Margin on bottom side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get marginBottom(): number;
        set marginBottom(val: number);
        /**
         * Margin on end of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get margin_end(): number;
        set margin_end(val: number);
        /**
         * Margin on end of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get marginEnd(): number;
        set marginEnd(val: number);
        /**
         * Margin on start of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get margin_start(): number;
        set margin_start(val: number);
        /**
         * Margin on start of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get marginStart(): number;
        set marginStart(val: number);
        /**
         * Margin on top side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get margin_top(): number;
        set margin_top(val: number);
        /**
         * Margin on top side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get marginTop(): number;
        set marginTop(val: number);
        /**
         * The name of the widget.
         */
        get name(): string;
        set name(val: string);
        /**
         * The requested opacity of the widget.
         */
        get opacity(): number;
        set opacity(val: number);
        /**
         * How content outside the widget's content area is treated.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get overflow(): Gtk.Overflow;
        set overflow(val: Gtk.Overflow);
        /**
         * The parent widget of this widget.
         */
        get parent(): Gtk.Widget;
        /**
         * Whether the widget will receive the default action when it is focused.
         */
        get receives_default(): boolean;
        set receives_default(val: boolean);
        /**
         * Whether the widget will receive the default action when it is focused.
         */
        get receivesDefault(): boolean;
        set receivesDefault(val: boolean);
        /**
         * The `GtkRoot` widget of the widget tree containing this widget.
         *
         * This will be %NULL if the widget is not contained in a root widget.
         */
        get root(): Gtk.Root;
        /**
         * The scale factor of the widget.
         */
        get scale_factor(): number;
        /**
         * The scale factor of the widget.
         */
        get scaleFactor(): number;
        /**
         * Whether the widget responds to input.
         */
        get sensitive(): boolean;
        set sensitive(val: boolean);
        /**
         * Sets the text of tooltip to be the given string, which is marked up
         * with Pango markup.
         *
         * Also see [method`Gtk`.Tooltip.set_markup].
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not %NULL:
         * [property`Gtk`.Widget:has-tooltip] will automatically be set to %TRUE
         * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
         * the default signal handler.
         *
         * Note that if both [property`Gtk`.Widget:tooltip-text] and
         * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
         */
        get tooltip_markup(): string;
        set tooltip_markup(val: string);
        /**
         * Sets the text of tooltip to be the given string, which is marked up
         * with Pango markup.
         *
         * Also see [method`Gtk`.Tooltip.set_markup].
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not %NULL:
         * [property`Gtk`.Widget:has-tooltip] will automatically be set to %TRUE
         * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
         * the default signal handler.
         *
         * Note that if both [property`Gtk`.Widget:tooltip-text] and
         * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
         */
        get tooltipMarkup(): string;
        set tooltipMarkup(val: string);
        /**
         * Sets the text of tooltip to be the given string.
         *
         * Also see [method`Gtk`.Tooltip.set_text].
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not %NULL:
         * [property`Gtk`.Widget:has-tooltip] will automatically be set to %TRUE
         * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
         * the default signal handler.
         *
         * Note that if both [property`Gtk`.Widget:tooltip-text] and
         * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
         */
        get tooltip_text(): string;
        set tooltip_text(val: string);
        /**
         * Sets the text of tooltip to be the given string.
         *
         * Also see [method`Gtk`.Tooltip.set_text].
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not %NULL:
         * [property`Gtk`.Widget:has-tooltip] will automatically be set to %TRUE
         * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
         * the default signal handler.
         *
         * Note that if both [property`Gtk`.Widget:tooltip-text] and
         * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
         */
        get tooltipText(): string;
        set tooltipText(val: string);
        /**
         * How to distribute vertical space if widget gets extra space.
         */
        get valign(): Gtk.Align;
        set valign(val: Gtk.Align);
        /**
         * Whether to expand vertically.
         */
        get vexpand(): boolean;
        set vexpand(val: boolean);
        /**
         * Whether to use the `vexpand` property.
         */
        get vexpand_set(): boolean;
        set vexpand_set(val: boolean);
        /**
         * Whether to use the `vexpand` property.
         */
        get vexpandSet(): boolean;
        set vexpandSet(val: boolean);
        /**
         * Whether the widget is visible.
         */
        get visible(): boolean;
        set visible(val: boolean);
        /**
         * Override for width request of the widget.
         *
         * If this is -1, the natural request will be used.
         */
        get width_request(): number;
        set width_request(val: number);
        /**
         * Override for width request of the widget.
         *
         * If this is -1, the natural request will be used.
         */
        get widthRequest(): number;
        set widthRequest(val: number);

        // Inherited methods
        /**
         * Returns the renderer that is used for this `GtkNative`.
         * @returns the renderer for @self
         */
        get_renderer(): Gsk.Renderer | null;
        /**
         * Returns the surface of this `GtkNative`.
         * @returns the surface of @self
         */
        get_surface(): Gdk.Surface | null;
        /**
         * Retrieves the surface transform of `self`.
         *
         * This is the translation from `self'`s surface coordinates into
         * `self'`s widget coordinates.
         */
        get_surface_transform(): [number, number];
        /**
         * Realizes a `GtkNative`.
         *
         * This should only be used by subclasses.
         */
        realize(): void;
        /**
         * Unrealizes a `GtkNative`.
         *
         * This should only be used by subclasses.
         */
        unrealize(): void;
        /**
         * Returns the display that this `GtkRoot` is on.
         * @returns the display of @root
         */
        get_display(): Gdk.Display;
        /**
         * Retrieves the current focused widget within the root.
         *
         * Note that this is the widget that would have the focus
         * if the root is active; if the root is not focused then
         * `gtk_widget_has_focus (widget)` will be %FALSE for the
         * widget.
         * @returns the currently focused widget
         */
        get_focus(): Gtk.Widget | null;
        /**
         * If `focus` is not the current focus widget, and is focusable, sets
         * it as the focus widget for the root.
         *
         * If `focus` is %NULL, unsets the focus widget for the root.
         *
         * To set the focus to a particular widget in the root, it is usually
         * more convenient to use [method`Gtk`.Widget.grab_focus] instead of
         * this function.
         * @param focus widget to be the new focus widget, or %NULL    to unset the focus widget
         */
        set_focus(focus?: Gtk.Widget | null): void;
        /**
         * Add a `GtkShortcutController` to be managed.
         * @param controller
         */
        vfunc_add_controller(controller: Gtk.ShortcutController): void;
        /**
         * Remove a `GtkShortcutController` that had previously
         *   been added
         * @param controller
         */
        vfunc_remove_controller(controller: Gtk.ShortcutController): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
        /**
         * Enable or disable an action installed with
         * gtk_widget_class_install_action().
         * @param action_name action name, such as "clipboard.paste"
         * @param enabled whether the action is now enabled
         */
        action_set_enabled(action_name: string, enabled: boolean): void;
        /**
         * For widgets that can be “activated” (buttons, menu items, etc.),
         * this function activates them.
         *
         * The activation will emit the signal set using
         * [method`Gtk`.WidgetClass.set_activate_signal] during class initialization.
         *
         * Activation is what happens when you press <kbd>Enter</kbd>
         * on a widget during key navigation.
         *
         * If you wish to handle the activation keybinding yourself, it is
         * recommended to use [method`Gtk`.WidgetClass.add_shortcut] with an action
         * created with [ctor`Gtk`.SignalAction.new].
         *
         * If `widget` isn't activatable, the function returns %FALSE.
         * @returns %TRUE if the widget was activatable
         */
        activate(): boolean;
        /**
         * Looks up the action in the action groups associated with
         * `widget` and its ancestors, and activates it.
         *
         * If the action is in an action group added with
         * [method`Gtk`.Widget.insert_action_group], the `name` is expected
         * to be prefixed with the prefix that was used when the group was
         * inserted.
         *
         * The arguments must match the actions expected parameter type,
         * as returned by `g_action_get_parameter_type()`.
         * @param name the name of the action to activate
         * @param args parameters to use
         * @returns %TRUE if the action was activated, %FALSE if the   action does not exist.
         */
        activate_action(name: string, args?: GLib.Variant | null): boolean;
        /**
         * Activates the `default.activate` action from `widget`.
         */
        activate_default(): void;
        /**
         * Adds `controller` to `widget` so that it will receive events.
         *
         * You will usually want to call this function right after
         * creating any kind of [class`Gtk`.EventController].
         * @param controller a `GtkEventController` that hasn't been   added to a widget yet
         */
        add_controller(controller: Gtk.EventController): void;
        /**
         * Adds a style class to `widget`.
         *
         * After calling this function, the widget’s style will match
         * for `css_class,` according to CSS matching rules.
         *
         * Use [method`Gtk`.Widget.remove_css_class] to remove the
         * style again.
         * @param css_class The style class to add to @widget, without   the leading '.' used for notation of style classes
         */
        add_css_class(css_class: string): void;
        /**
         * Adds a widget to the list of mnemonic labels for this widget.
         *
         * See [method`Gtk`.Widget.list_mnemonic_labels]. Note the
         * list of mnemonic labels for the widget is cleared when the
         * widget is destroyed, so the caller must make sure to update
         * its internal state at this point as well.
         * @param label a `GtkWidget` that acts as a mnemonic label for @widget
         */
        add_mnemonic_label(label: Gtk.Widget): void;
        /**
         * Queues an animation frame update and adds a callback to be called
         * before each frame.
         *
         * Until the tick callback is removed, it will be called frequently
         * (usually at the frame rate of the output device or as quickly as
         * the application can be repainted, whichever is slower). For this
         * reason, is most suitable for handling graphics that change every
         * frame or every few frames. The tick callback does not automatically
         * imply a relayout or repaint. If you want a repaint or relayout, and
         * aren’t changing widget properties that would trigger that (for example,
         * changing the text of a `GtkLabel`), then you will have to call
         * [method`Gtk`.Widget.queue_resize] or [method`Gtk`.Widget.queue_draw]
         * yourself.
         *
         * [method`Gdk`.FrameClock.get_frame_time] should generally be used
         * for timing continuous animations and
         * [method`Gdk`.FrameTimings.get_predicted_presentation_time] if you are
         * trying to display isolated frames at particular times.
         *
         * This is a more convenient alternative to connecting directly to the
         * [signal`Gdk`.FrameClock::update] signal of `GdkFrameClock`, since you
         * don't have to worry about when a `GdkFrameClock` is assigned to a widget.
         * @param callback function to call for updating animations
         * @returns an id for the connection of this callback. Remove the callback   by passing the id returned from this function to   [method@Gtk.Widget.remove_tick_callback]
         */
        add_tick_callback(callback: Gtk.TickCallback): number;
        /**
         * This function is only used by `GtkWidget` subclasses, to
         * assign a size, position and (optionally) baseline to their
         * child widgets.
         *
         * In this function, the allocation and baseline may be adjusted.
         * The given allocation will be forced to be bigger than the
         * widget's minimum size, as well as at least 0×0 in size.
         *
         * For a version that does not take a transform, see
         * [method`Gtk`.Widget.size_allocate].
         * @param width New width of @widget
         * @param height New height of @widget
         * @param baseline New baseline of @widget, or -1
         * @param transform Transformation to be applied to @widget
         */
        allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void;
        /**
         * Called by widgets as the user moves around the window using
         * keyboard shortcuts.
         *
         * The `direction` argument indicates what kind of motion is taking place (up,
         * down, left, right, tab forward, tab backward).
         *
         * This function calls the [vfunc`Gtk`.Widget.focus] virtual function; widgets
         * can override the virtual function in order to implement appropriate focus
         * behavior.
         *
         * The default `focus()` virtual function for a widget should return `TRUE` if
         * moving in `direction` left the focus on a focusable location inside that
         * widget, and `FALSE` if moving in `direction` moved the focus outside the
         * widget. When returning `TRUE`, widgets normally call [method`Gtk`.Widget.grab_focus]
         * to place the focus accordingly; when returning `FALSE`, they don’t modify
         * the current focus location.
         *
         * This function is used by custom widget implementations; if you're
         * writing an app, you’d use [method`Gtk`.Widget.grab_focus] to move
         * the focus to a particular widget.
         * @param direction direction of focus movement
         * @returns %TRUE if focus ended up inside @widget
         */
        child_focus(direction: Gtk.DirectionType): boolean;
        /**
         * Computes the bounds for `widget` in the coordinate space of `target`.
         *
         * The bounds of widget are (the bounding box of) the region that it is
         * expected to draw in. See the [coordinate system](coordinates.html)
         * overview to learn more.
         *
         * If the operation is successful, %TRUE is returned. If `widget` has no
         * bounds or the bounds cannot be expressed in `target'`s coordinate space
         * (for example if both widgets are in different windows), %FALSE is
         * returned and `bounds` is set to the zero rectangle.
         *
         * It is valid for `widget` and `target` to be the same widget.
         * @param target the `GtkWidget`
         * @returns %TRUE if the bounds could be computed
         */
        compute_bounds(target: Gtk.Widget): [boolean, Graphene.Rect];
        /**
         * Computes whether a container should give this widget
         * extra space when possible.
         *
         * Containers should check this, rather than looking at
         * [method`Gtk`.Widget.get_hexpand] or [method`Gtk`.Widget.get_vexpand].
         *
         * This function already checks whether the widget is visible, so
         * visibility does not need to be checked separately. Non-visible
         * widgets are not expanded.
         *
         * The computed expand value uses either the expand setting explicitly
         * set on the widget itself, or, if none has been explicitly set,
         * the widget may expand if some of its children do.
         * @param orientation expand direction
         * @returns whether widget tree rooted here should be expanded
         */
        compute_expand(orientation: Gtk.Orientation): boolean;
        /**
         * Translates the given `point` in `widget'`s coordinates to coordinates
         * relative to `target’`s coordinate system.
         *
         * In order to perform this operation, both widgets must share a
         * common ancestor.
         * @param target the `GtkWidget` to transform into
         * @param point a point in @widget's coordinate system
         * @returns %TRUE if the point could be determined, %FALSE on failure.   In this case, 0 is stored in @out_point.
         */
        compute_point(target: Gtk.Widget, point: Graphene.Point): [boolean, Graphene.Point];
        /**
         * Computes a matrix suitable to describe a transformation from
         * `widget'`s coordinate system into `target'`s coordinate system.
         *
         * The transform can not be computed in certain cases, for example
         * when `widget` and `target` do not share a common ancestor. In that
         * case `out_transform` gets set to the identity matrix.
         *
         * To learn more about widget coordinate systems, see the coordinate
         * system [overview](coordinates.html).
         * @param target the target widget that the matrix will transform to
         * @returns %TRUE if the transform could be computed, %FALSE otherwise
         */
        compute_transform(target: Gtk.Widget): [boolean, Graphene.Matrix];
        /**
         * Tests if the point at (`x,` `y)` is contained in `widget`.
         *
         * The coordinates for (`x,` `y)` must be in widget coordinates, so
         * (0, 0) is assumed to be the top left of `widget'`s content area.
         * @param x X coordinate to test, relative to @widget's origin
         * @param y Y coordinate to test, relative to @widget's origin
         * @returns %TRUE if @widget contains (@x, @y).
         */
        contains(x: number, y: number): boolean;
        /**
         * Creates a new `PangoContext` with the appropriate font map,
         * font options, font description, and base direction for drawing
         * text for this widget.
         *
         * See also [method`Gtk`.Widget.get_pango_context].
         * @returns the new `PangoContext`
         */
        create_pango_context(): Pango.Context;
        /**
         * Creates a new `PangoLayout` with the appropriate font map,
         * font description, and base direction for drawing text for
         * this widget.
         *
         * If you keep a `PangoLayout` created in this way around,
         * you need to re-create it when the widget `PangoContext`
         * is replaced. This can be tracked by listening to changes
         * of the [property`Gtk`.Widget:root] property on the widget.
         * @param text text to set on the layout
         * @returns the new `PangoLayout`
         */
        create_pango_layout(text?: string | null): Pango.Layout;
        /**
         * Clears the template children for the given widget.
         *
         * This function is the opposite of [method`Gtk`.Widget.init_template], and
         * it is used to clear all the template children from a widget instance.
         * If you bound a template child to a field in the instance structure, or
         * in the instance private data structure, the field will be set to `NULL`
         * after this function returns.
         *
         * You should call this function inside the `GObjectClass.dispose()`
         * implementation of any widget that called `gtk_widget_init_template()`.
         * Typically, you will want to call this function last, right before
         * chaining up to the parent type's dispose implementation, e.g.
         *
         * ```c
         * static void
         * some_widget_dispose (GObject *gobject)
         * {
         *   SomeWidget *self = SOME_WIDGET (gobject);
         *
         *   // Clear the template data for SomeWidget
         *   gtk_widget_dispose_template (GTK_WIDGET (self), SOME_TYPE_WIDGET);
         *
         *   G_OBJECT_CLASS (some_widget_parent_class)->dispose (gobject);
         * }
         * ```
         * @param widget_type the type of the widget to finalize the template for
         */
        dispose_template(widget_type: GObject.GType): void;
        /**
         * Checks to see if a drag movement has passed the GTK drag threshold.
         * @param start_x X coordinate of start of drag
         * @param start_y Y coordinate of start of drag
         * @param current_x current X coordinate
         * @param current_y current Y coordinate
         * @returns %TRUE if the drag threshold has been passed.
         */
        drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean;
        /**
         * Notifies the user about an input-related error on this widget.
         *
         * If the [property`Gtk`.Settings:gtk-error-bell] setting is %TRUE,
         * it calls [method`Gdk`.Surface.beep], otherwise it does nothing.
         *
         * Note that the effect of [method`Gdk`.Surface.beep] can be configured
         * in many ways, depending on the windowing backend and the desktop
         * environment or window manager that is used.
         */
        error_bell(): void;
        /**
         * Returns the baseline that has currently been allocated to `widget`.
         *
         * This function is intended to be used when implementing handlers
         * for the `GtkWidget`Class.snapshot() function, and when allocating
         * child widgets in `GtkWidget`Class.size_allocate().
         * @returns the baseline of the @widget, or -1 if none
         */
        get_allocated_baseline(): number;
        /**
         * Returns the height that has currently been allocated to `widget`.
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns the height of the @widget
         */
        get_allocated_height(): number;
        /**
         * Returns the width that has currently been allocated to `widget`.
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns the width of the @widget
         */
        get_allocated_width(): number;
        /**
         * Retrieves the widget’s allocation.
         *
         * Note, when implementing a layout container: a widget’s allocation
         * will be its “adjusted” allocation, that is, the widget’s parent
         * typically calls [method`Gtk`.Widget.size_allocate] with an allocation,
         * and that allocation is then adjusted (to handle margin
         * and alignment for example) before assignment to the widget.
         * [method`Gtk`.Widget.get_allocation] returns the adjusted allocation that
         * was actually assigned to the widget. The adjusted allocation is
         * guaranteed to be completely contained within the
         * [method`Gtk`.Widget.size_allocate] allocation, however.
         *
         * So a layout container is guaranteed that its children stay inside
         * the assigned bounds, but not that they have exactly the bounds the
         * container assigned.
         */
        get_allocation(): Gtk.Allocation;
        /**
         * Gets the first ancestor of `widget` with type `widget_type`.
         *
         * For example, `gtk_widget_get_ancestor (widget, GTK_TYPE_BOX)`
         * gets the first `GtkBox` that’s an ancestor of `widget`. No
         * reference will be added to the returned widget; it should
         * not be unreferenced.
         *
         * Note that unlike [method`Gtk`.Widget.is_ancestor], this function
         * considers `widget` to be an ancestor of itself.
         * @param widget_type ancestor type
         * @returns the ancestor widget
         */
        get_ancestor(widget_type: GObject.GType): Gtk.Widget | null;
        /**
         * Returns the baseline that has currently been allocated to `widget`.
         *
         * This function is intended to be used when implementing handlers
         * for the `GtkWidget`Class.snapshot() function, and when allocating
         * child widgets in `GtkWidget`Class.size_allocate().
         * @returns the baseline of the @widget, or -1 if none
         */
        get_baseline(): number;
        /**
         * Determines whether the input focus can enter `widget` or any
         * of its children.
         *
         * See [method`Gtk`.Widget.set_focusable].
         * @returns %TRUE if the input focus can enter @widget, %FALSE otherwise
         */
        get_can_focus(): boolean;
        /**
         * Queries whether `widget` can be the target of pointer events.
         * @returns %TRUE if @widget can receive pointer events
         */
        get_can_target(): boolean;
        /**
         * Gets the value set with gtk_widget_set_child_visible().
         *
         * If you feel a need to use this function, your code probably
         * needs reorganization.
         *
         * This function is only useful for container implementations
         * and should never be called by an application.
         * @returns %TRUE if the widget is mapped with the parent.
         */
        get_child_visible(): boolean;
        /**
         * Gets the clipboard object for `widget`.
         *
         * This is a utility function to get the clipboard object for the
         * `GdkDisplay` that `widget` is using.
         *
         * Note that this function always works, even when `widget` is not
         * realized yet.
         * @returns the appropriate clipboard object
         */
        get_clipboard(): Gdk.Clipboard;
        /**
         * Gets the current foreground color for the widget’s
         * CSS style.
         *
         * This function should only be used in snapshot
         * implementations that need to do custom
         * drawing with the foreground color.
         */
        get_color(): Gdk.RGBA;
        /**
         * Returns the list of style classes applied to `widget`.
         * @returns a %NULL-terminated list of   css classes currently applied to @widget. The returned   list must freed using g_strfreev().
         */
        get_css_classes(): string[];
        /**
         * Returns the CSS name that is used for `self`.
         * @returns the CSS name
         */
        get_css_name(): string;
        /**
         * Queries the cursor set on `widget`.
         *
         * See [method`Gtk`.Widget.set_cursor] for details.
         * @returns the cursor   currently in use or %NULL if the cursor is inherited
         */
        get_cursor(): Gdk.Cursor | null;
        /**
         * Gets the reading direction for a particular widget.
         *
         * See [method`Gtk`.Widget.set_direction].
         * @returns the reading direction for the widget.
         */
        get_direction(): Gtk.TextDirection;
        /**
         * Returns the widget’s first child.
         *
         * This API is primarily meant for widget implementations.
         * @returns The widget's first child
         */
        get_first_child(): Gtk.Widget | null;
        /**
         * Returns the current focus child of `widget`.
         * @returns The current focus   child of @widget
         */
        get_focus_child(): Gtk.Widget | null;
        /**
         * Returns whether the widget should grab focus when it is clicked
         * with the mouse.
         *
         * See [method`Gtk`.Widget.set_focus_on_click].
         * @returns %TRUE if the widget should grab focus when it is   clicked with the mouse
         */
        get_focus_on_click(): boolean;
        /**
         * Determines whether `widget` can own the input focus.
         *
         * See [method`Gtk`.Widget.set_focusable].
         * @returns %TRUE if @widget can own the input focus, %FALSE otherwise
         */
        get_focusable(): boolean;
        /**
         * Gets the font map of `widget`.
         *
         * See [method`Gtk`.Widget.set_font_map].
         * @returns A `PangoFontMap`
         */
        get_font_map(): Pango.FontMap | null;
        /**
         * Returns the `cairo_font_options_t` of widget.
         *
         * Seee [method`Gtk`.Widget.set_font_options].
         * @returns the `cairo_font_options_t`   of widget
         */
        get_font_options(): cairo.FontOptions | null;
        /**
         * Obtains the frame clock for a widget.
         *
         * The frame clock is a global “ticker” that can be used to drive
         * animations and repaints. The most common reason to get the frame
         * clock is to call [method`Gdk`.FrameClock.get_frame_time], in order
         * to get a time to use for animating. For example you might record
         * the start of the animation with an initial value from
         * [method`Gdk`.FrameClock.get_frame_time], and then update the animation
         * by calling [method`Gdk`.FrameClock.get_frame_time] again during each repaint.
         *
         * [method`Gdk`.FrameClock.request_phase] will result in a new frame on the
         * clock, but won’t necessarily repaint any widgets. To repaint a
         * widget, you have to use [method`Gtk`.Widget.queue_draw] which invalidates
         * the widget (thus scheduling it to receive a draw on the next
         * frame). gtk_widget_queue_draw() will also end up requesting a frame
         * on the appropriate frame clock.
         *
         * A widget’s frame clock will not change while the widget is
         * mapped. Reparenting a widget (which implies a temporary unmap) can
         * change the widget’s frame clock.
         *
         * Unrealized widgets do not have a frame clock.
         * @returns a `GdkFrameClock`
         */
        get_frame_clock(): Gdk.FrameClock | null;
        /**
         * Gets the horizontal alignment of `widget`.
         *
         * For backwards compatibility reasons this method will never return
         * one of the baseline alignments, but instead it will convert it to
         * `GTK_ALIGN_FILL` or `GTK_ALIGN_CENTER`.
         *
         * Baselines are not supported for horizontal alignment.
         * @returns the horizontal alignment of @widget
         */
        get_halign(): Gtk.Align;
        /**
         * Returns the current value of the `has-tooltip` property.
         * @returns current value of `has-tooltip` on @widget.
         */
        get_has_tooltip(): boolean;
        /**
         * Returns the content height of the widget.
         *
         * This function returns the height passed to its
         * size-allocate implementation, which is the height you
         * should be using in [vfunc`Gtk`.Widget.snapshot].
         *
         * For pointer events, see [method`Gtk`.Widget.contains].
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns The height of @widget
         */
        get_height(): number;
        /**
         * Gets whether the widget would like any available extra horizontal
         * space.
         *
         * When a user resizes a `GtkWindow`, widgets with expand=TRUE
         * generally receive the extra space. For example, a list or
         * scrollable area or document in your window would often be set to
         * expand.
         *
         * Containers should use [method`Gtk`.Widget.compute_expand] rather
         * than this function, to see whether a widget, or any of its children,
         * has the expand flag set. If any child of a widget wants to
         * expand, the parent may ask to expand also.
         *
         * This function only looks at the widget’s own hexpand flag, rather
         * than computing whether the entire widget tree rooted at this widget
         * wants to expand.
         * @returns whether hexpand flag is set
         */
        get_hexpand(): boolean;
        /**
         * Gets whether gtk_widget_set_hexpand() has been used
         * to explicitly set the expand flag on this widget.
         *
         * If [property`Gtk`.Widget:hexpand] property is set, then it
         * overrides any computed expand value based on child widgets.
         * If `hexpand` is not set, then the expand value depends on
         * whether any children of the widget would like to expand.
         *
         * There are few reasons to use this function, but it’s here
         * for completeness and consistency.
         * @returns whether hexpand has been explicitly set
         */
        get_hexpand_set(): boolean;
        /**
         * Returns the widget’s last child.
         *
         * This API is primarily meant for widget implementations.
         * @returns The widget's last child
         */
        get_last_child(): Gtk.Widget | null;
        /**
         * Retrieves the layout manager used by `widget`.
         *
         * See [method`Gtk`.Widget.set_layout_manager].
         * @returns a `GtkLayoutManager`
         */
        get_layout_manager(): Gtk.LayoutManager | null;
        /**
         * Whether the widget is mapped.
         * @returns %TRUE if the widget is mapped, %FALSE otherwise.
         */
        get_mapped(): boolean;
        /**
         * Gets the bottom margin of `widget`.
         * @returns The bottom margin of @widget
         */
        get_margin_bottom(): number;
        /**
         * Gets the end margin of `widget`.
         * @returns The end margin of @widget
         */
        get_margin_end(): number;
        /**
         * Gets the start margin of `widget`.
         * @returns The start margin of @widget
         */
        get_margin_start(): number;
        /**
         * Gets the top margin of `widget`.
         * @returns The top margin of @widget
         */
        get_margin_top(): number;
        /**
         * Retrieves the name of a widget.
         *
         * See [method`Gtk`.Widget.set_name] for the significance of widget names.
         * @returns name of the widget. This string is owned by GTK and   should not be modified or freed
         */
        get_name(): string;
        /**
         * Returns the nearest `GtkNative` ancestor of `widget`.
         *
         * This function will return %NULL if the widget is not
         * contained inside a widget tree with a native ancestor.
         *
         * `GtkNative` widgets will return themselves here.
         * @returns the `GtkNative` ancestor of @widget
         */
        get_native(): Gtk.Native | null;
        /**
         * Returns the widget’s next sibling.
         *
         * This API is primarily meant for widget implementations.
         * @returns The widget's next sibling
         */
        get_next_sibling(): Gtk.Widget | null;
        /**
         * #Fetches the requested opacity for this widget.
         *
         * See [method`Gtk`.Widget.set_opacity].
         * @returns the requested opacity for this widget.
         */
        get_opacity(): number;
        /**
         * Returns the widget’s overflow value.
         * @returns The widget's overflow.
         */
        get_overflow(): Gtk.Overflow;
        /**
         * Gets a `PangoContext` with the appropriate font map, font description,
         * and base direction for this widget.
         *
         * Unlike the context returned by [method`Gtk`.Widget.create_pango_context],
         * this context is owned by the widget (it can be used until the screen
         * for the widget changes or the widget is removed from its toplevel),
         * and will be updated to match any changes to the widget’s attributes.
         * This can be tracked by listening to changes of the
         * [property`Gtk`.Widget:root] property on the widget.
         * @returns the `PangoContext` for the widget.
         */
        get_pango_context(): Pango.Context;
        /**
         * Returns the parent widget of `widget`.
         * @returns the parent widget of @widget
         */
        get_parent(): Gtk.Widget | null;
        /**
         * Retrieves the minimum and natural size of a widget, taking
         * into account the widget’s preference for height-for-width management.
         *
         * This is used to retrieve a suitable size by container widgets which do
         * not impose any restrictions on the child placement. It can be used
         * to deduce toplevel window and menu sizes as well as child widgets in
         * free-form containers such as `GtkFixed`.
         *
         * Handle with care. Note that the natural height of a height-for-width
         * widget will generally be a smaller size than the minimum height, since
         * the required height for the natural width is generally smaller than the
         * required height for the minimum width.
         *
         * Use [method`Gtk`.Widget.measure] if you want to support baseline alignment.
         */
        get_preferred_size(): [Gtk.Requisition | null, Gtk.Requisition | null];
        /**
         * Returns the widget’s previous sibling.
         *
         * This API is primarily meant for widget implementations.
         * @returns The widget's previous sibling
         */
        get_prev_sibling(): Gtk.Widget | null;
        /**
         * Gets the primary clipboard of `widget`.
         *
         * This is a utility function to get the primary clipboard object
         * for the `GdkDisplay` that `widget` is using.
         *
         * Note that this function always works, even when `widget` is not
         * realized yet.
         * @returns the appropriate clipboard object
         */
        get_primary_clipboard(): Gdk.Clipboard;
        /**
         * Determines whether `widget` is realized.
         * @returns %TRUE if @widget is realized, %FALSE otherwise
         */
        get_realized(): boolean;
        /**
         * Determines whether `widget` is always treated as the default widget
         * within its toplevel when it has the focus, even if another widget
         * is the default.
         *
         * See [method`Gtk`.Widget.set_receives_default].
         * @returns %TRUE if @widget acts as the default widget when focused,   %FALSE otherwise
         */
        get_receives_default(): boolean;
        /**
         * Gets whether the widget prefers a height-for-width layout
         * or a width-for-height layout.
         *
         * Single-child widgets generally propagate the preference of
         * their child, more complex widgets need to request something
         * either in context of their children or in context of their
         * allocation capabilities.
         * @returns The `GtkSizeRequestMode` preferred by @widget.
         */
        get_request_mode(): Gtk.SizeRequestMode;
        /**
         * Returns the `GtkRoot` widget of `widget`.
         *
         * This function will return %NULL if the widget is not contained
         * inside a widget tree with a root widget.
         *
         * `GtkRoot` widgets will return themselves here.
         * @returns the root widget of @widget
         */
        get_root(): Gtk.Root | null;
        /**
         * Retrieves the internal scale factor that maps from window
         * coordinates to the actual device pixels.
         *
         * On traditional systems this is 1, on high density outputs,
         * it can be a higher value (typically 2).
         *
         * See [method`Gdk`.Surface.get_scale_factor].
         * @returns the scale factor for @widget
         */
        get_scale_factor(): number;
        /**
         * Returns the widget’s sensitivity.
         *
         * This function returns the value that has been set using
         * [method`Gtk`.Widget.set_sensitive]).
         *
         * The effective sensitivity of a widget is however determined
         * by both its own and its parent widget’s sensitivity.
         * See [method`Gtk`.Widget.is_sensitive].
         * @returns %TRUE if the widget is sensitive
         */
        get_sensitive(): boolean;
        /**
         * Gets the settings object holding the settings used for this widget.
         *
         * Note that this function can only be called when the `GtkWidget`
         * is attached to a toplevel, since the settings object is specific
         * to a particular `GdkDisplay`. If you want to monitor the widget for
         * changes in its settings, connect to the `notify::display` signal.
         * @returns the relevant `GtkSettings` object
         */
        get_settings(): Gtk.Settings;
        /**
         * Returns the content width or height of the widget.
         *
         * Which dimension is returned depends on `orientation`.
         *
         * This is equivalent to calling [method`Gtk`.Widget.get_width]
         * for %GTK_ORIENTATION_HORIZONTAL or [method`Gtk`.Widget.get_height]
         * for %GTK_ORIENTATION_VERTICAL, but can be used when
         * writing orientation-independent code, such as when
         * implementing [iface`Gtk`.Orientable] widgets.
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @param orientation the orientation to query
         * @returns The size of @widget in @orientation.
         */
        get_size(orientation: Gtk.Orientation): number;
        /**
         * Gets the size request that was explicitly set for the widget using
         * gtk_widget_set_size_request().
         *
         * A value of -1 stored in `width` or `height` indicates that that
         * dimension has not been set explicitly and the natural requisition
         * of the widget will be used instead. See
         * [method`Gtk`.Widget.set_size_request]. To get the size a widget will
         * actually request, call [method`Gtk`.Widget.measure] instead of
         * this function.
         */
        get_size_request(): [number, number];
        /**
         * Returns the widget state as a flag set.
         *
         * It is worth mentioning that the effective %GTK_STATE_FLAG_INSENSITIVE
         * state will be returned, that is, also based on parent insensitivity,
         * even if `widget` itself is sensitive.
         *
         * Also note that if you are looking for a way to obtain the
         * [flags`Gtk`.StateFlags] to pass to a [class`Gtk`.StyleContext]
         * method, you should look at [method`Gtk`.StyleContext.get_state].
         * @returns The state flags for widget
         */
        get_state_flags(): Gtk.StateFlags;
        /**
         * Returns the style context associated to `widget`.
         *
         * The returned object is guaranteed to be the same
         * for the lifetime of `widget`.
         * @returns the widget’s `GtkStyleContext`
         */
        get_style_context(): Gtk.StyleContext;
        /**
         * Fetch an object build from the template XML for `widget_type` in
         * this `widget` instance.
         *
         * This will only report children which were previously declared
         * with [method`Gtk`.WidgetClass.bind_template_child_full] or one of its
         * variants.
         *
         * This function is only meant to be called for code which is private
         * to the `widget_type` which declared the child and is meant for language
         * bindings which cannot easily make use of the GObject structure offsets.
         * @param widget_type The `GType` to get a template child for
         * @param name The “id” of the child defined in the template XML
         * @returns The object built in the template XML with   the id @name
         */
        get_template_child<T = GObject.Object>(widget_type: GObject.GType, name: string): T;
        /**
         * Gets the contents of the tooltip for `widget`.
         *
         * If the tooltip has not been set using
         * [method`Gtk`.Widget.set_tooltip_markup], this
         * function returns %NULL.
         * @returns the tooltip text
         */
        get_tooltip_markup(): string | null;
        /**
         * Gets the contents of the tooltip for `widget`.
         *
         * If the `widget'`s tooltip was set using
         * [method`Gtk`.Widget.set_tooltip_markup],
         * this function will return the escaped text.
         * @returns the tooltip text
         */
        get_tooltip_text(): string | null;
        /**
         * Gets the vertical alignment of `widget`.
         * @returns the vertical alignment of @widget
         */
        get_valign(): Gtk.Align;
        /**
         * Gets whether the widget would like any available extra vertical
         * space.
         *
         * See [method`Gtk`.Widget.get_hexpand] for more detail.
         * @returns whether vexpand flag is set
         */
        get_vexpand(): boolean;
        /**
         * Gets whether gtk_widget_set_vexpand() has been used to
         * explicitly set the expand flag on this widget.
         *
         * See [method`Gtk`.Widget.get_hexpand_set] for more detail.
         * @returns whether vexpand has been explicitly set
         */
        get_vexpand_set(): boolean;
        /**
         * Determines whether the widget is visible.
         *
         * If you want to take into account whether the widget’s
         * parent is also marked as visible, use
         * [method`Gtk`.Widget.is_visible] instead.
         *
         * This function does not check if the widget is
         * obscured in any way.
         *
         * See [method`Gtk`.Widget.set_visible].
         * @returns %TRUE if the widget is visible
         */
        get_visible(): boolean;
        /**
         * Returns the content width of the widget.
         *
         * This function returns the width passed to its
         * size-allocate implementation, which is the width you
         * should be using in [vfunc`Gtk`.Widget.snapshot].
         *
         * For pointer events, see [method`Gtk`.Widget.contains].
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns The width of @widget
         */
        get_width(): number;
        /**
         * Causes `widget` to have the keyboard focus for the `GtkWindow` it's inside.
         *
         * If `widget` is not focusable, or its [vfunc`Gtk`.Widget.grab_focus]
         * implementation cannot transfer the focus to a descendant of `widget`
         * that is focusable, it will not take focus and %FALSE will be returned.
         *
         * Calling [method`Gtk`.Widget.grab_focus] on an already focused widget
         * is allowed, should not have an effect, and return %TRUE.
         * @returns %TRUE if focus is now inside @widget.
         */
        grab_focus(): boolean;
        /**
         * Returns whether `css_class` is currently applied to `widget`.
         * @param css_class A style class, without the leading '.'   used for notation of style classes
         * @returns %TRUE if @css_class is currently applied to @widget,   %FALSE otherwise.
         */
        has_css_class(css_class: string): boolean;
        /**
         * Determines if the widget should show a visible indication that
         * it has the global input focus.
         *
         * This is a convenience function that takes into account whether
         * focus indication should currently be shown in the toplevel window
         * of `widget`. See [method`Gtk`.Window.get_focus_visible] for more
         * information about focus indication.
         *
         * To find out if the widget has the global input focus, use
         * [method`Gtk`.Widget.has_focus].
         * @returns %TRUE if the widget should display a “focus rectangle”
         */
        has_visible_focus(): boolean;
        /**
         * Reverses the effects of gtk_widget_show().
         *
         * This is causing the widget to be hidden (invisible to the user).
         */
        hide(): void;
        /**
         * Returns whether the widget is currently being destroyed.
         *
         * This information can sometimes be used to avoid doing
         * unnecessary work.
         * @returns %TRUE if @widget is being destroyed
         */
        in_destruction(): boolean;
        /**
         * Creates and initializes child widgets defined in templates.
         *
         * This function must be called in the instance initializer
         * for any class which assigned itself a template using
         * [method`Gtk`.WidgetClass.set_template].
         *
         * It is important to call this function in the instance initializer
         * of a `GtkWidget` subclass and not in `GObject.constructed()` or
         * `GObject.constructor()` for two reasons:
         *
         *  - derived widgets will assume that the composite widgets
         *    defined by its parent classes have been created in their
         *    relative instance initializers
         *  - when calling `g_object_new()` on a widget with composite templates,
         *    it’s important to build the composite widgets before the construct
         *    properties are set. Properties passed to `g_object_new()` should
         *    take precedence over properties set in the private template XML
         *
         * A good rule of thumb is to call this function as the first thing in
         * an instance initialization function.
         */
        init_template(): void;
        /**
         * Inserts `group` into `widget`.
         *
         * Children of `widget` that implement [iface`Gtk`.Actionable] can
         * then be associated with actions in `group` by setting their
         * “action-name” to `prefix`.`action-name`.
         *
         * Note that inheritance is defined for individual actions. I.e.
         * even if you insert a group with prefix `prefix,` actions with
         * the same prefix will still be inherited from the parent, unless
         * the group contains an action with the same name.
         *
         * If `group` is %NULL, a previously inserted group for `name` is
         * removed from `widget`.
         * @param name the prefix for actions in @group
         * @param group a `GActionGroup`, or %NULL to remove   the previously inserted group for @name
         */
        insert_action_group(name: string, group?: Gio.ActionGroup | null): void;
        /**
         * Inserts `widget` into the child widget list of `parent`.
         *
         * It will be placed after `previous_sibling,` or at the beginning if
         * `previous_sibling` is %NULL.
         *
         * After calling this function, `gtk_widget_get_prev_sibling(widget)`
         * will return `previous_sibling`.
         *
         * If `parent` is already set as the parent widget of `widget,` this
         * function can also be used to reorder `widget` in the child widget
         * list of `parent`.
         *
         * This API is primarily meant for widget implementations; if you are
         * just using a widget, you *must* use its own API for adding children.
         * @param parent the parent `GtkWidget` to insert @widget into
         * @param previous_sibling the new previous sibling of @widget
         */
        insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void;
        /**
         * Inserts `widget` into the child widget list of `parent`.
         *
         * It will be placed before `next_sibling,` or at the end if
         * `next_sibling` is %NULL.
         *
         * After calling this function, `gtk_widget_get_next_sibling(widget)`
         * will return `next_sibling`.
         *
         * If `parent` is already set as the parent widget of `widget,` this function
         * can also be used to reorder `widget` in the child widget list of `parent`.
         *
         * This API is primarily meant for widget implementations; if you are
         * just using a widget, you *must* use its own API for adding children.
         * @param parent the parent `GtkWidget` to insert @widget into
         * @param next_sibling the new next sibling of @widget
         */
        insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void;
        /**
         * Determines whether `widget` is somewhere inside `ancestor,`
         * possibly with intermediate containers.
         * @param ancestor another `GtkWidget`
         * @returns %TRUE if @ancestor contains @widget as a child,   grandchild, great grandchild, etc.
         */
        is_ancestor(ancestor: Gtk.Widget): boolean;
        /**
         * Determines whether `widget` can be drawn to.
         *
         * A widget can be drawn if it is mapped and visible.
         * @returns %TRUE if @widget is drawable, %FALSE otherwise
         */
        is_drawable(): boolean;
        /**
         * Determines if the widget is the focus widget within its
         * toplevel.
         *
         * This does not mean that the [property`Gtk`.Widget:has-focus]
         * property is necessarily set; [property`Gtk`.Widget:has-focus]
         * will only be set if the toplevel widget additionally has the
         * global input focus.
         * @returns %TRUE if the widget is the focus widget.
         */
        is_focus(): boolean;
        /**
         * Returns the widget’s effective sensitivity.
         *
         * This means it is sensitive itself and also its
         * parent widget is sensitive.
         * @returns %TRUE if the widget is effectively sensitive
         */
        is_sensitive(): boolean;
        /**
         * Determines whether the widget and all its parents are marked as
         * visible.
         *
         * This function does not check if the widget is obscured in any way.
         *
         * See also [method`Gtk`.Widget.get_visible] and
         * [method`Gtk`.Widget.set_visible].
         * @returns %TRUE if the widget and all its parents are visible
         */
        is_visible(): boolean;
        /**
         * Emits the `::keynav-failed` signal on the widget.
         *
         * This function should be called whenever keyboard navigation
         * within a single widget hits a boundary.
         *
         * The return value of this function should be interpreted
         * in a way similar to the return value of
         * [method`Gtk`.Widget.child_focus]. When %TRUE is returned,
         * stay in the widget, the failed keyboard  navigation is OK
         * and/or there is nowhere we can/should move the focus to.
         * When %FALSE is returned, the caller should continue with
         * keyboard navigation outside the widget, e.g. by calling
         * [method`Gtk`.Widget.child_focus] on the widget’s toplevel.
         *
         * The default [signal`Gtk`.Widget::keynav-failed] handler returns
         * %FALSE for %GTK_DIR_TAB_FORWARD and %GTK_DIR_TAB_BACKWARD.
         * For the other values of `GtkDirectionType` it returns %TRUE.
         *
         * Whenever the default handler returns %TRUE, it also calls
         * [method`Gtk`.Widget.error_bell] to notify the user of the
         * failed keyboard navigation.
         *
         * A use case for providing an own implementation of ::keynav-failed
         * (either by connecting to it or by overriding it) would be a row of
         * [class`Gtk`.Entry] widgets where the user should be able to navigate
         * the entire row with the cursor keys, as e.g. known from user
         * interfaces that require entering license keys.
         * @param direction direction of focus movement
         * @returns %TRUE if stopping keyboard navigation is fine, %FALSE   if the emitting widget should try to handle the keyboard   navigation attempt in its parent container(s).
         */
        keynav_failed(direction: Gtk.DirectionType): boolean;
        /**
         * Returns the widgets for which this widget is the target of a
         * mnemonic.
         *
         * Typically, these widgets will be labels. See, for example,
         * [method`Gtk`.Label.set_mnemonic_widget].
         *
         * The widgets in the list are not individually referenced.
         * If you want to iterate through the list and perform actions
         * involving callbacks that might destroy the widgets, you
         * must call `g_list_foreach (result, (GFunc)g_object_ref, NULL)`
         * first, and then unref all the widgets afterwards.
         * @returns the list   of mnemonic labels; free this list with g_list_free() when you   are done with it.
         */
        list_mnemonic_labels(): Gtk.Widget[];
        /**
         * Causes a widget to be mapped if it isn’t already.
         *
         * This function is only for use in widget implementations.
         */
        map(): void;
        /**
         * Measures `widget` in the orientation `orientation` and for the given `for_size`.
         *
         * As an example, if `orientation` is %GTK_ORIENTATION_HORIZONTAL and `for_size`
         * is 300, this functions will compute the minimum and natural width of `widget`
         * if it is allocated at a height of 300 pixels.
         *
         * See [GtkWidget’s geometry management section](class.Widget.html#height-for-width-geometry-management) for
         * a more details on implementing `GtkWidgetClass.measure()`.
         * @param orientation the orientation to measure
         * @param for_size Size for the opposite of @orientation, i.e.   if @orientation is %GTK_ORIENTATION_HORIZONTAL, this is   the height the widget should be measured with. The %GTK_ORIENTATION_VERTICAL   case is analogous. This way, both height-for-width and width-for-height   requests can be implemented. If no size is known, -1 can be passed.
         */
        measure(orientation: Gtk.Orientation, for_size: number): [number, number, number, number];
        /**
         * Emits the ::mnemonic-activate signal.
         *
         * See [signal`Gtk`.Widget::mnemonic-activate].
         * @param group_cycling %TRUE if there are other widgets with the same mnemonic
         * @returns %TRUE if the signal has been handled
         */
        mnemonic_activate(group_cycling: boolean): boolean;
        /**
         * Returns a `GListModel` to track the children of `widget`.
         *
         * Calling this function will enable extra internal bookkeeping
         * to track children and emit signals on the returned listmodel.
         * It may slow down operations a lot.
         *
         * Applications should try hard to avoid calling this function
         * because of the slowdowns.
         * @returns a `GListModel` tracking @widget's children
         */
        observe_children(): Gio.ListModel;
        /**
         * Returns a `GListModel` to track the [class`Gtk`.EventController]s
         * of `widget`.
         *
         * Calling this function will enable extra internal bookkeeping
         * to track controllers and emit signals on the returned listmodel.
         * It may slow down operations a lot.
         *
         * Applications should try hard to avoid calling this function
         * because of the slowdowns.
         * @returns a `GListModel` tracking @widget's controllers
         */
        observe_controllers(): Gio.ListModel;
        /**
         * Finds the descendant of `widget` closest to the point (`x,` `y)`.
         *
         * The point must be given in widget coordinates, so (0, 0) is assumed
         * to be the top left of `widget'`s content area.
         *
         * Usually widgets will return %NULL if the given coordinate is not
         * contained in `widget` checked via [method`Gtk`.Widget.contains].
         * Otherwise they will recursively try to find a child that does
         * not return %NULL. Widgets are however free to customize their
         * picking algorithm.
         *
         * This function is used on the toplevel to determine the widget
         * below the mouse cursor for purposes of hover highlighting and
         * delivering events.
         * @param x X coordinate to test, relative to @widget's origin
         * @param y Y coordinate to test, relative to @widget's origin
         * @param flags Flags to influence what is picked
         * @returns The widget descendant at   the given point
         */
        pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null;
        /**
         * Flags the widget for a rerun of the [vfunc`Gtk`.Widget.size_allocate]
         * function.
         *
         * Use this function instead of [method`Gtk`.Widget.queue_resize]
         * when the `widget'`s size request didn't change but it wants to
         * reposition its contents.
         *
         * An example user of this function is [method`Gtk`.Widget.set_halign].
         *
         * This function is only for use in widget implementations.
         */
        queue_allocate(): void;
        /**
         * Schedules this widget to be redrawn in the paint phase
         * of the current or the next frame.
         *
         * This means `widget'`s [vfunc`Gtk`.Widget.snapshot]
         * implementation will be called.
         */
        queue_draw(): void;
        /**
         * Flags a widget to have its size renegotiated.
         *
         * This should be called when a widget for some reason has a new
         * size request. For example, when you change the text in a
         * [class`Gtk`.Label], the label queues a resize to ensure there’s
         * enough space for the new text.
         *
         * Note that you cannot call gtk_widget_queue_resize() on a widget
         * from inside its implementation of the [vfunc`Gtk`.Widget.size_allocate]
         * virtual method. Calls to gtk_widget_queue_resize() from inside
         * [vfunc`Gtk`.Widget.size_allocate] will be silently ignored.
         *
         * This function is only for use in widget implementations.
         */
        queue_resize(): void;
        /**
         * Removes `controller` from `widget,` so that it doesn't process
         * events anymore.
         *
         * It should not be used again.
         *
         * Widgets will remove all event controllers automatically when they
         * are destroyed, there is normally no need to call this function.
         * @param controller a `GtkEventController`
         */
        remove_controller(controller: Gtk.EventController): void;
        /**
         * Removes a style from `widget`.
         *
         * After this, the style of `widget` will stop matching for `css_class`.
         * @param css_class The style class to remove from @widget, without   the leading '.' used for notation of style classes
         */
        remove_css_class(css_class: string): void;
        /**
         * Removes a widget from the list of mnemonic labels for this widget.
         *
         * See [method`Gtk`.Widget.list_mnemonic_labels]. The widget must
         * have previously been added to the list with
         * [method`Gtk`.Widget.add_mnemonic_label].
         * @param label a `GtkWidget` that was previously set as a mnemonic   label for @widget with [method@Gtk.Widget.add_mnemonic_label]
         */
        remove_mnemonic_label(label: Gtk.Widget): void;
        /**
         * Removes a tick callback previously registered with
         * gtk_widget_add_tick_callback().
         * @param id an id returned by [method@Gtk.Widget.add_tick_callback]
         */
        remove_tick_callback(id: number): void;
        /**
         * Specifies whether the input focus can enter the widget
         * or any of its children.
         *
         * Applications should set `can_focus` to %FALSE to mark a
         * widget as for pointer/touch use only.
         *
         * Note that having `can_focus` be %TRUE is only one of the
         * necessary conditions for being focusable. A widget must
         * also be sensitive and focusable and not have an ancestor
         * that is marked as not can-focus in order to receive input
         * focus.
         *
         * See [method`Gtk`.Widget.grab_focus] for actually setting
         * the input focus on a widget.
         * @param can_focus whether or not the input focus can enter   the widget or any of its children
         */
        set_can_focus(can_focus: boolean): void;
        /**
         * Sets whether `widget` can be the target of pointer events.
         * @param can_target whether this widget should be able to   receive pointer events
         */
        set_can_target(can_target: boolean): void;
        /**
         * Sets whether `widget` should be mapped along with its parent.
         *
         * The child visibility can be set for widget before it is added
         * to a container with [method`Gtk`.Widget.set_parent], to avoid
         * mapping children unnecessary before immediately unmapping them.
         * However it will be reset to its default state of %TRUE when the
         * widget is removed from a container.
         *
         * Note that changing the child visibility of a widget does not
         * queue a resize on the widget. Most of the time, the size of
         * a widget is computed from all visible children, whether or
         * not they are mapped. If this is not the case, the container
         * can queue a resize itself.
         *
         * This function is only useful for container implementations
         * and should never be called by an application.
         * @param child_visible if %TRUE, @widget should be mapped along   with its parent.
         */
        set_child_visible(child_visible: boolean): void;
        /**
         * Clear all style classes applied to `widget`
         * and replace them with `classes`.
         * @param classes %NULL-terminated list of style classes to apply to @widget.
         */
        set_css_classes(classes: string[]): void;
        /**
         * Sets the cursor to be shown when pointer devices point
         * towards `widget`.
         *
         * If the `cursor` is NULL, `widget` will use the cursor
         * inherited from the parent widget.
         * @param cursor the new cursor
         */
        set_cursor(cursor?: Gdk.Cursor | null): void;
        /**
         * Sets a named cursor to be shown when pointer devices point
         * towards `widget`.
         *
         * This is a utility function that creates a cursor via
         * [ctor`Gdk`.Cursor.new_from_name] and then sets it on `widget`
         * with [method`Gtk`.Widget.set_cursor]. See those functions for
         * details.
         *
         * On top of that, this function allows `name` to be %NULL, which
         * will do the same as calling [method`Gtk`.Widget.set_cursor]
         * with a %NULL cursor.
         * @param name The name of the cursor
         */
        set_cursor_from_name(name?: string | null): void;
        /**
         * Sets the reading direction on a particular widget.
         *
         * This direction controls the primary direction for widgets
         * containing text, and also the direction in which the children
         * of a container are packed. The ability to set the direction is
         * present in order so that correct localization into languages with
         * right-to-left reading directions can be done. Generally, applications
         * will let the default reading direction present, except for containers
         * where the containers are arranged in an order that is explicitly
         * visual rather than logical (such as buttons for text justification).
         *
         * If the direction is set to %GTK_TEXT_DIR_NONE, then the value
         * set by [func`Gtk`.Widget.set_default_direction] will be used.
         * @param dir the new direction
         */
        set_direction(dir: Gtk.TextDirection): void;
        /**
         * Set `child` as the current focus child of `widget`.
         *
         * This function is only suitable for widget implementations.
         * If you want a certain widget to get the input focus, call
         * [method`Gtk`.Widget.grab_focus] on it.
         * @param child a direct child widget of @widget or %NULL   to unset the focus child of @widget
         */
        set_focus_child(child?: Gtk.Widget | null): void;
        /**
         * Sets whether the widget should grab focus when it is clicked
         * with the mouse.
         *
         * Making mouse clicks not grab focus is useful in places like
         * toolbars where you don’t want the keyboard focus removed from
         * the main area of the application.
         * @param focus_on_click whether the widget should grab focus when clicked   with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
        /**
         * Specifies whether `widget` can own the input focus.
         *
         * Widget implementations should set `focusable` to %TRUE in
         * their init() function if they want to receive keyboard input.
         *
         * Note that having `focusable` be %TRUE is only one of the
         * necessary conditions for being focusable. A widget must
         * also be sensitive and can-focus and not have an ancestor
         * that is marked as not can-focus in order to receive input
         * focus.
         *
         * See [method`Gtk`.Widget.grab_focus] for actually setting
         * the input focus on a widget.
         * @param focusable whether or not @widget can own the input focus
         */
        set_focusable(focusable: boolean): void;
        /**
         * Sets the font map to use for Pango rendering.
         *
         * The font map is the object that is used to look up fonts.
         * Setting a custom font map can be useful in special situations,
         * e.g. when you need to add application-specific fonts to the set
         * of available fonts.
         *
         * When not set, the widget will inherit the font map from its parent.
         * @param font_map a `PangoFontMap`, or %NULL to unset any   previously set font map
         */
        set_font_map(font_map?: Pango.FontMap | null): void;
        /**
         * Sets the `cairo_font_options_t` used for Pango rendering
         * in this widget.
         *
         * When not set, the default font options for the `GdkDisplay`
         * will be used.
         * @param options a `cairo_font_options_t`   to unset any previously set default font options
         */
        set_font_options(options?: cairo.FontOptions | null): void;
        /**
         * Sets the horizontal alignment of `widget`.
         * @param align the horizontal alignment
         */
        set_halign(align: Gtk.Align): void;
        /**
         * Sets the `has-tooltip` property on `widget` to `has_tooltip`.
         * @param has_tooltip whether or not @widget has a tooltip.
         */
        set_has_tooltip(has_tooltip: boolean): void;
        /**
         * Sets whether the widget would like any available extra horizontal
         * space.
         *
         * When a user resizes a `GtkWindow`, widgets with expand=TRUE
         * generally receive the extra space. For example, a list or
         * scrollable area or document in your window would often be set to
         * expand.
         *
         * Call this function to set the expand flag if you would like your
         * widget to become larger horizontally when the window has extra
         * room.
         *
         * By default, widgets automatically expand if any of their children
         * want to expand. (To see if a widget will automatically expand given
         * its current children and state, call [method`Gtk`.Widget.compute_expand].
         * A container can decide how the expandability of children affects the
         * expansion of the container by overriding the compute_expand virtual
         * method on `GtkWidget`.).
         *
         * Setting hexpand explicitly with this function will override the
         * automatic expand behavior.
         *
         * This function forces the widget to expand or not to expand,
         * regardless of children.  The override occurs because
         * [method`Gtk`.Widget.set_hexpand] sets the hexpand-set property (see
         * [method`Gtk`.Widget.set_hexpand_set]) which causes the widget’s hexpand
         * value to be used, rather than looking at children and widget state.
         * @param expand whether to expand
         */
        set_hexpand(expand: boolean): void;
        /**
         * Sets whether the hexpand flag will be used.
         *
         * The [property`Gtk`.Widget:hexpand-set] property will be set
         * automatically when you call [method`Gtk`.Widget.set_hexpand]
         * to set hexpand, so the most likely reason to use this function
         * would be to unset an explicit expand flag.
         *
         * If hexpand is set, then it overrides any computed
         * expand value based on child widgets. If hexpand is not
         * set, then the expand value depends on whether any
         * children of the widget would like to expand.
         *
         * There are few reasons to use this function, but it’s here
         * for completeness and consistency.
         * @param set value for hexpand-set property
         */
        set_hexpand_set(set: boolean): void;
        /**
         * Sets the layout manager delegate instance that provides an
         * implementation for measuring and allocating the children of `widget`.
         * @param layout_manager a `GtkLayoutManager`
         */
        set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void;
        /**
         * Sets the bottom margin of `widget`.
         * @param margin the bottom margin
         */
        set_margin_bottom(margin: number): void;
        /**
         * Sets the end margin of `widget`.
         * @param margin the end margin
         */
        set_margin_end(margin: number): void;
        /**
         * Sets the start margin of `widget`.
         * @param margin the start margin
         */
        set_margin_start(margin: number): void;
        /**
         * Sets the top margin of `widget`.
         * @param margin the top margin
         */
        set_margin_top(margin: number): void;
        /**
         * Sets a widgets name.
         *
         * Setting a name allows you to refer to the widget from a
         * CSS file. You can apply a style to widgets with a particular name
         * in the CSS file. See the documentation for the CSS syntax (on the
         * same page as the docs for [class`Gtk`.StyleContext].
         *
         * Note that the CSS syntax has certain special characters to delimit
         * and represent elements in a selector (period, #, >, *...), so using
         * these will make your widget impossible to match by name. Any combination
         * of alphanumeric symbols, dashes and underscores will suffice.
         * @param name name for the widget
         */
        set_name(name: string): void;
        /**
         * Request the `widget` to be rendered partially transparent.
         *
         * An opacity of 0 is fully transparent and an opacity of 1
         * is fully opaque.
         *
         * Opacity works on both toplevel widgets and child widgets, although
         * there are some limitations: For toplevel widgets, applying opacity
         * depends on the capabilities of the windowing system. On X11, this
         * has any effect only on X displays with a compositing manager,
         * see gdk_display_is_composited(). On Windows and Wayland it should
         * always work, although setting a window’s opacity after the window
         * has been shown may cause some flicker.
         *
         * Note that the opacity is inherited through inclusion — if you set
         * a toplevel to be partially translucent, all of its content will
         * appear translucent, since it is ultimatively rendered on that
         * toplevel. The opacity value itself is not inherited by child
         * widgets (since that would make widgets deeper in the hierarchy
         * progressively more translucent). As a consequence, [class`Gtk`.Popover]s
         * and other [iface`Gtk`.Native] widgets with their own surface will use their
         * own opacity value, and thus by default appear non-translucent,
         * even if they are attached to a toplevel that is translucent.
         * @param opacity desired opacity, between 0 and 1
         */
        set_opacity(opacity: number): void;
        /**
         * Sets how `widget` treats content that is drawn outside the
         * widget's content area.
         *
         * See the definition of [enum`Gtk`.Overflow] for details.
         *
         * This setting is provided for widget implementations and
         * should not be used by application code.
         *
         * The default value is %GTK_OVERFLOW_VISIBLE.
         * @param overflow desired overflow
         */
        set_overflow(overflow: Gtk.Overflow): void;
        /**
         * Sets `parent` as the parent widget of `widget`.
         *
         * This takes care of details such as updating the state and style
         * of the child to reflect its new location and resizing the parent.
         * The opposite function is [method`Gtk`.Widget.unparent].
         *
         * This function is useful only when implementing subclasses of
         * `GtkWidget`.
         * @param parent parent widget
         */
        set_parent(parent: Gtk.Widget): void;
        /**
         * Specifies whether `widget` will be treated as the default
         * widget within its toplevel when it has the focus, even if
         * another widget is the default.
         * @param receives_default whether or not @widget can be a default widget.
         */
        set_receives_default(receives_default: boolean): void;
        /**
         * Sets the sensitivity of a widget.
         *
         * A widget is sensitive if the user can interact with it.
         * Insensitive widgets are “grayed out” and the user can’t
         * interact with them. Insensitive widgets are known as
         * “inactive”, “disabled”, or “ghosted” in some other toolkits.
         * @param sensitive %TRUE to make the widget sensitive
         */
        set_sensitive(sensitive: boolean): void;
        /**
         * Sets the minimum size of a widget.
         *
         * That is, the widget’s size request will be at least `width`
         * by `height`. You can use this function to force a widget to
         * be larger than it normally would be.
         *
         * In most cases, [method`Gtk`.Window.set_default_size] is a better
         * choice for toplevel windows than this function; setting the default
         * size will still allow users to shrink the window. Setting the size
         * request will force them to leave the window at least as large as
         * the size request.
         *
         * Note the inherent danger of setting any fixed size - themes,
         * translations into other languages, different fonts, and user action
         * can all change the appropriate size for a given widget. So, it's
         * basically impossible to hardcode a size that will always be
         * correct.
         *
         * The size request of a widget is the smallest size a widget can
         * accept while still functioning well and drawing itself correctly.
         * However in some strange cases a widget may be allocated less than
         * its requested size, and in many cases a widget may be allocated more
         * space than it requested.
         *
         * If the size request in a given direction is -1 (unset), then
         * the “natural” size request of the widget will be used instead.
         *
         * The size request set here does not include any margin from the
         * properties
         * [property`Gtk`.Widget:margin-start],
         * [property`Gtk`.Widget:margin-end],
         * [property`Gtk`.Widget:margin-top], and
         * [property`Gtk`.Widget:margin-bottom], but it does include pretty
         * much all other padding or border properties set by any subclass
         * of `GtkWidget`.
         * @param width width @widget should request, or -1 to unset
         * @param height height @widget should request, or -1 to unset
         */
        set_size_request(width: number, height: number): void;
        /**
         * Turns on flag values in the current widget state.
         *
         * Typical widget states are insensitive, prelighted, etc.
         *
         * This function accepts the values %GTK_STATE_FLAG_DIR_LTR and
         * %GTK_STATE_FLAG_DIR_RTL but ignores them. If you want to set
         * the widget's direction, use [method`Gtk`.Widget.set_direction].
         *
         * This function is for use in widget implementations.
         * @param flags State flags to turn on
         * @param clear Whether to clear state before turning on @flags
         */
        set_state_flags(flags: Gtk.StateFlags, clear: boolean): void;
        /**
         * Sets `markup` as the contents of the tooltip, which is marked
         * up with Pango markup.
         *
         * This function will take care of setting the
         * [property`Gtk`.Widget:has-tooltip] as a side effect, and of the
         * default handler for the [signal`Gtk`.Widget::query-tooltip] signal.
         *
         * See also [method`Gtk`.Tooltip.set_markup].
         * @param markup the contents of the tooltip for @widget
         */
        set_tooltip_markup(markup?: string | null): void;
        /**
         * Sets `text` as the contents of the tooltip.
         *
         * If `text` contains any markup, it will be escaped.
         *
         * This function will take care of setting
         * [property`Gtk`.Widget:has-tooltip] as a side effect,
         * and of the default handler for the
         * [signal`Gtk`.Widget::query-tooltip] signal.
         *
         * See also [method`Gtk`.Tooltip.set_text].
         * @param text the contents of the tooltip for @widget
         */
        set_tooltip_text(text?: string | null): void;
        /**
         * Sets the vertical alignment of `widget`.
         * @param align the vertical alignment
         */
        set_valign(align: Gtk.Align): void;
        /**
         * Sets whether the widget would like any available extra vertical
         * space.
         *
         * See [method`Gtk`.Widget.set_hexpand] for more detail.
         * @param expand whether to expand
         */
        set_vexpand(expand: boolean): void;
        /**
         * Sets whether the vexpand flag will be used.
         *
         * See [method`Gtk`.Widget.set_hexpand_set] for more detail.
         * @param set value for vexpand-set property
         */
        set_vexpand_set(set: boolean): void;
        /**
         * Sets the visibility state of `widget`.
         *
         * Note that setting this to %TRUE doesn’t mean the widget is
         * actually viewable, see [method`Gtk`.Widget.get_visible].
         * @param visible whether the widget should be shown or not
         */
        set_visible(visible: boolean): void;
        /**
         * Returns whether `widget` should contribute to
         * the measuring and allocation of its parent.
         *
         * This is %FALSE for invisible children, but also
         * for children that have their own surface.
         * @returns %TRUE if child should be included in   measuring and allocating
         */
        should_layout(): boolean;
        /**
         * Flags a widget to be displayed.
         *
         * Any widget that isn’t shown will not appear on the screen.
         *
         * Remember that you have to show the containers containing a widget,
         * in addition to the widget itself, before it will appear onscreen.
         *
         * When a toplevel container is shown, it is immediately realized and
         * mapped; other shown widgets are realized and mapped when their
         * toplevel container is realized and mapped.
         */
        show(): void;
        /**
         * Allocates widget with a transformation that translates
         * the origin to the position in `allocation`.
         *
         * This is a simple form of [method`Gtk`.Widget.allocate].
         * @param allocation position and size to be allocated to @widget
         * @param baseline The baseline of the child, or -1
         */
        size_allocate(allocation: Gtk.Allocation, baseline: number): void;
        /**
         * Snapshot the a child of `widget`.
         *
         * When a widget receives a call to the snapshot function,
         * it must send synthetic [vfunc`Gtk`.Widget.snapshot] calls
         * to all children. This function provides a convenient way
         * of doing this. A widget, when it receives a call to its
         * [vfunc`Gtk`.Widget.snapshot] function, calls
         * gtk_widget_snapshot_child() once for each child, passing in
         * the `snapshot` the widget received.
         *
         * gtk_widget_snapshot_child() takes care of translating the origin of
         * `snapshot,` and deciding whether the child needs to be snapshot.
         *
         * This function does nothing for children that implement `GtkNative`.
         * @param child a child of @widget
         * @param snapshot `GtkSnapshot` as passed to the widget. In particular, no   calls to gtk_snapshot_translate() or other transform calls should   have been made.
         */
        snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void;
        /**
         * Translate coordinates relative to `src_widget’`s allocation
         * to coordinates relative to `dest_widget’`s allocations.
         *
         * In order to perform this operation, both widget must share
         * a common ancestor.
         * @param dest_widget a `GtkWidget`
         * @param src_x X position relative to @src_widget
         * @param src_y Y position relative to @src_widget
         * @returns %FALSE if @src_widget and @dest_widget have no common   ancestor. In this case, 0 is stored in *@dest_x and *@dest_y.   Otherwise %TRUE.
         */
        translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [boolean, number, number];
        /**
         * Triggers a tooltip query on the display where the toplevel
         * of `widget` is located.
         */
        trigger_tooltip_query(): void;
        /**
         * Causes a widget to be unmapped if it’s currently mapped.
         *
         * This function is only for use in widget implementations.
         */
        unmap(): void;
        /**
         * Dissociate `widget` from its parent.
         *
         * This function is only for use in widget implementations,
         * typically in dispose.
         */
        unparent(): void;
        /**
         * Turns off flag values for the current widget state.
         *
         * See [method`Gtk`.Widget.set_state_flags].
         *
         * This function is for use in widget implementations.
         * @param flags State flags to turn off
         */
        unset_state_flags(flags: Gtk.StateFlags): void;
        /**
         * Computes whether a container should give this
         *   widget extra space when possible.
         * @param hexpand_p
         * @param vexpand_p
         */
        vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void;
        /**
         * Tests if the point at (`x,` `y)` is contained in `widget`.
         *
         * The coordinates for (`x,` `y)` must be in widget coordinates, so
         * (0, 0) is assumed to be the top left of `widget'`s content area.
         * @param x X coordinate to test, relative to @widget's origin
         * @param y Y coordinate to test, relative to @widget's origin
         */
        vfunc_contains(x: number, y: number): boolean;
        /**
         * Vfunc called when the CSS used by widget was changed. Widgets
         *   should then discard their caches that depend on CSS and queue resizes or
         *   redraws accordingly. The default implementation will take care of this for
         *   all the default CSS properties, so implementations must chain up.
         * @param change
         */
        vfunc_css_changed(change: Gtk.CssStyleChange): void;
        /**
         * Signal emitted when the text direction of a
         *   widget changes.
         * @param previous_direction
         */
        vfunc_direction_changed(previous_direction: Gtk.TextDirection): void;
        /**
         * Vfunc for gtk_widget_child_focus()
         * @param direction
         */
        vfunc_focus(direction: Gtk.DirectionType): boolean;
        /**
         * Gets whether the widget prefers a height-for-width layout
         * or a width-for-height layout.
         *
         * Single-child widgets generally propagate the preference of
         * their child, more complex widgets need to request something
         * either in context of their children or in context of their
         * allocation capabilities.
         */
        vfunc_get_request_mode(): Gtk.SizeRequestMode;
        /**
         * Causes `widget` to have the keyboard focus for the `GtkWindow` it's inside.
         *
         * If `widget` is not focusable, or its [vfunc`Gtk`.Widget.grab_focus]
         * implementation cannot transfer the focus to a descendant of `widget`
         * that is focusable, it will not take focus and %FALSE will be returned.
         *
         * Calling [method`Gtk`.Widget.grab_focus] on an already focused widget
         * is allowed, should not have an effect, and return %TRUE.
         */
        vfunc_grab_focus(): boolean;
        /**
         * Reverses the effects of gtk_widget_show().
         *
         * This is causing the widget to be hidden (invisible to the user).
         */
        vfunc_hide(): void;
        /**
         * Emits the `::keynav-failed` signal on the widget.
         *
         * This function should be called whenever keyboard navigation
         * within a single widget hits a boundary.
         *
         * The return value of this function should be interpreted
         * in a way similar to the return value of
         * [method`Gtk`.Widget.child_focus]. When %TRUE is returned,
         * stay in the widget, the failed keyboard  navigation is OK
         * and/or there is nowhere we can/should move the focus to.
         * When %FALSE is returned, the caller should continue with
         * keyboard navigation outside the widget, e.g. by calling
         * [method`Gtk`.Widget.child_focus] on the widget’s toplevel.
         *
         * The default [signal`Gtk`.Widget::keynav-failed] handler returns
         * %FALSE for %GTK_DIR_TAB_FORWARD and %GTK_DIR_TAB_BACKWARD.
         * For the other values of `GtkDirectionType` it returns %TRUE.
         *
         * Whenever the default handler returns %TRUE, it also calls
         * [method`Gtk`.Widget.error_bell] to notify the user of the
         * failed keyboard navigation.
         *
         * A use case for providing an own implementation of ::keynav-failed
         * (either by connecting to it or by overriding it) would be a row of
         * [class`Gtk`.Entry] widgets where the user should be able to navigate
         * the entire row with the cursor keys, as e.g. known from user
         * interfaces that require entering license keys.
         * @param direction direction of focus movement
         */
        vfunc_keynav_failed(direction: Gtk.DirectionType): boolean;
        /**
         * Causes a widget to be mapped if it isn’t already.
         *
         * This function is only for use in widget implementations.
         */
        vfunc_map(): void;
        /**
         * Measures `widget` in the orientation `orientation` and for the given `for_size`.
         *
         * As an example, if `orientation` is %GTK_ORIENTATION_HORIZONTAL and `for_size`
         * is 300, this functions will compute the minimum and natural width of `widget`
         * if it is allocated at a height of 300 pixels.
         *
         * See [GtkWidget’s geometry management section](class.Widget.html#height-for-width-geometry-management) for
         * a more details on implementing `GtkWidgetClass.measure()`.
         * @param orientation the orientation to measure
         * @param for_size Size for the opposite of @orientation, i.e.   if @orientation is %GTK_ORIENTATION_HORIZONTAL, this is   the height the widget should be measured with. The %GTK_ORIENTATION_VERTICAL   case is analogous. This way, both height-for-width and width-for-height   requests can be implemented. If no size is known, -1 can be passed.
         */
        vfunc_measure(orientation: Gtk.Orientation, for_size: number): [number, number, number, number];
        /**
         * Emits the ::mnemonic-activate signal.
         *
         * See [signal`Gtk`.Widget::mnemonic-activate].
         * @param group_cycling %TRUE if there are other widgets with the same mnemonic
         */
        vfunc_mnemonic_activate(group_cycling: boolean): boolean;
        /**
         * Signal emitted when a change of focus is requested
         * @param direction
         */
        vfunc_move_focus(direction: Gtk.DirectionType): void;
        /**
         * Signal emitted when “has-tooltip” is %TRUE and the
         *   hover timeout has expired with the cursor hovering “above”
         *   widget; or emitted when widget got focus in keyboard mode.
         * @param x
         * @param y
         * @param keyboard_tooltip
         * @param tooltip
         */
        vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean;
        /**
         * Creates the GDK resources associated with a widget.
         *
         * Normally realization happens implicitly; if you show a widget
         * and all its parent containers, then the widget will be realized
         * and mapped automatically.
         *
         * Realizing a widget requires all the widget’s parent widgets to be
         * realized; calling this function realizes the widget’s parents
         * in addition to `widget` itself. If a widget is not yet inside a
         * toplevel window when you realize it, bad things will happen.
         *
         * This function is primarily used in widget implementations, and
         * isn’t very useful otherwise. Many times when you think you might
         * need it, a better approach is to connect to a signal that will be
         * called after the widget is realized automatically, such as
         * [signal`Gtk`.Widget::realize].
         */
        vfunc_realize(): void;
        /**
         * Called when the widget gets added to a `GtkRoot` widget. Must
         *   chain up
         */
        vfunc_root(): void;
        /**
         * Set `child` as the current focus child of `widget`.
         *
         * This function is only suitable for widget implementations.
         * If you want a certain widget to get the input focus, call
         * [method`Gtk`.Widget.grab_focus] on it.
         * @param child a direct child widget of @widget or %NULL   to unset the focus child of @widget
         */
        vfunc_set_focus_child(child?: Gtk.Widget | null): void;
        /**
         * Flags a widget to be displayed.
         *
         * Any widget that isn’t shown will not appear on the screen.
         *
         * Remember that you have to show the containers containing a widget,
         * in addition to the widget itself, before it will appear onscreen.
         *
         * When a toplevel container is shown, it is immediately realized and
         * mapped; other shown widgets are realized and mapped when their
         * toplevel container is realized and mapped.
         */
        vfunc_show(): void;
        /**
         * Called to set the allocation, if the widget does
         *   not have a layout manager.
         * @param width
         * @param height
         * @param baseline
         */
        vfunc_size_allocate(width: number, height: number, baseline: number): void;
        /**
         * Vfunc called when a new snapshot of the widget has to be taken.
         * @param snapshot
         */
        vfunc_snapshot(snapshot: Gtk.Snapshot): void;
        /**
         * Signal emitted when the widget state changes,
         *   see gtk_widget_get_state_flags().
         * @param previous_state_flags
         */
        vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void;
        /**
         * Emitted when a system setting was changed. Must chain up.
         * @param settings
         */
        vfunc_system_setting_changed(settings: Gtk.SystemSetting): void;
        /**
         * Causes a widget to be unmapped if it’s currently mapped.
         *
         * This function is only for use in widget implementations.
         */
        vfunc_unmap(): void;
        /**
         * Causes a widget to be unrealized (frees all GDK resources
         * associated with the widget).
         *
         * This function is only useful in widget implementations.
         */
        vfunc_unrealize(): void;
        /**
         * Called when the widget is about to be removed from its
         *   `GtkRoot` widget. Must chain up
         */
        vfunc_unroot(): void;
    }

    module FileWidget {
        // Signal callback interfaces

        interface CreateDir {
            (dir_path: string): void;
        }

        interface Refresh {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Box.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps,
                Gtk.Orientable.ConstructorProps {
            app_generic_path: string;
            appGenericPath: string;
            app_home_path: string;
            appHomePath: string;
            bookmark_filename: string;
            bookmarkFilename: string;
            current_path: string;
            currentPath: string;
            default_bundle: string;
            defaultBundle: string;
            default_path: string;
            defaultPath: string;
            file_magic_executable: string;
            fileMagicExecutable: string;
            home_path: string;
            homePath: string;
            recently_used_filename: string;
            recentlyUsedFilename: string;
        }
    }

    class FileWidget extends Gtk.Box implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<FileWidget>;

        // Own properties of AgsGui.FileWidget

        /**
         * The app generic path.
         */
        get app_generic_path(): string;
        set app_generic_path(val: string);
        /**
         * The app generic path.
         */
        get appGenericPath(): string;
        set appGenericPath(val: string);
        /**
         * The app home path.
         */
        get app_home_path(): string;
        set app_home_path(val: string);
        /**
         * The app home path.
         */
        get appHomePath(): string;
        set appHomePath(val: string);
        /**
         * The recently used filename.
         */
        get bookmark_filename(): string;
        set bookmark_filename(val: string);
        /**
         * The recently used filename.
         */
        get bookmarkFilename(): string;
        set bookmarkFilename(val: string);
        /**
         * The current path.
         */
        get current_path(): string;
        set current_path(val: string);
        /**
         * The current path.
         */
        get currentPath(): string;
        set currentPath(val: string);
        /**
         * The default bundle.
         */
        get default_bundle(): string;
        set default_bundle(val: string);
        /**
         * The default bundle.
         */
        get defaultBundle(): string;
        set defaultBundle(val: string);
        /**
         * The default path.
         */
        get default_path(): string;
        set default_path(val: string);
        /**
         * The default path.
         */
        get defaultPath(): string;
        set defaultPath(val: string);
        /**
         * The file magic executable.
         */
        get file_magic_executable(): string;
        set file_magic_executable(val: string);
        /**
         * The file magic executable.
         */
        get fileMagicExecutable(): string;
        set fileMagicExecutable(val: string);
        /**
         * The home path.
         */
        get home_path(): string;
        set home_path(val: string);
        /**
         * The home path.
         */
        get homePath(): string;
        set homePath(val: string);
        /**
         * The recently used filename.
         */
        get recently_used_filename(): string;
        set recently_used_filename(val: string);
        /**
         * The recently used filename.
         */
        get recentlyUsedFilename(): string;
        set recentlyUsedFilename(val: string);

        // Own fields of AgsGui.FileWidget

        box: Gtk.Box;
        flags: number;
        file_action: number;
        file_filter: number;
        sandbox_path: string;
        action_group: Gio.SimpleActionGroup;
        vbox: Gtk.Box;
        location_entry: Gtk.Entry;
        action_menu_button: Gtk.MenuButton;
        action_popover: Gtk.PopoverMenu;
        action_popup: Gio.Menu;
        location_drop_down: Gtk.DropDown;
        left_vbox: Gtk.Box;
        location_box: Gtk.Box;
        recently_used: string;
        recently_used_link: IconLink;
        location_separator: Gtk.Separator;
        bookmark_box: Gtk.Box;
        center_vbox: Gtk.Box;
        file_filter_suffix: string;
        current_file_filter: string;
        filename_key_selection: Gtk.NoSelection;
        filename_factory: Gtk.ListItemFactory[];
        filename_single_selection: Gtk.SingleSelection;
        filename_multi_selection: Gtk.MultiSelection;
        filename_scrolled_window: Gtk.ScrolledWindow;
        filename_view: Gtk.ColumnView;
        right_vbox: Gtk.Box;
        preview: Gtk.Widget;
        file_filter_drop_down: Gtk.DropDown;

        // Constructors of AgsGui.FileWidget

        constructor(properties?: Partial<FileWidget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FileWidget;

        // Own signals of AgsGui.FileWidget

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'create-dir', callback: (_source: this, dir_path: string) => void): number;
        connect_after(signal: 'create-dir', callback: (_source: this, dir_path: string) => void): number;
        emit(signal: 'create-dir', dir_path: string): void;
        connect(signal: 'refresh', callback: (_source: this) => void): number;
        connect_after(signal: 'refresh', callback: (_source: this) => void): number;
        emit(signal: 'refresh'): void;

        // Own virtual methods of AgsGui.FileWidget

        /**
         * Create directory `dir_path`.
         * @param dir_path the directory path
         */
        vfunc_create_dir(dir_path: string): void;
        /**
         * Refresh `file_widget` due to current path change.
         */
        vfunc_refresh(): void;

        // Own methods of AgsGui.FileWidget

        /**
         * Add `bookmark_location` to bookmark with `button_text`.
         * @param bookmark_location the bookmark location
         */
        add_bookmark(bookmark_location: string): void;
        /**
         * Add `button_action` to location with `button_text`.
         * @param button_action the button action
         * @param button_text the button text
         */
        add_location(button_action: string, button_text: string): void;
        /**
         * Create directory `dir_path`.
         * @param dir_path the directory path
         */
        create_dir(dir_path: string): void;
        /**
         * Get app generic path of `file_widget`.
         * @returns the app generic path as string
         */
        get_app_generic_path(): string;
        /**
         * Get app home path of `file_widget`.
         * @returns the app home path as string
         */
        get_app_home_path(): string;
        /**
         * Get bookmark from `file_widget`.
         * @returns the bookmark #GHashTable
         */
        get_bookmark(): GLib.HashTable<any, any>;
        /**
         * Get bookmark filename of `file_widget`.
         * @returns the bookmark filename as string
         */
        get_bookmark_filename(): string;
        /**
         * Get current path of `file_widget`.
         * @returns the current path as string
         */
        get_current_path(): string;
        /**
         * Get default bundle of `file_widget`.
         * @returns the default bundle as string
         */
        get_default_bundle(): string;
        /**
         * Get default path of `file_widget`.
         * @returns the default path as string
         */
        get_default_path(): string;
        /**
         * Get file magic executable of `file_widget`.
         * @returns the file magic executable as string
         */
        get_file_magic_executable(): string;
        /**
         * Get filename of `file_widget`.
         * @returns the filename as string
         */
        get_filename(): string;
        /**
         * Get filenames of `file_widget`.
         * @returns the filename as string
         */
        get_filenames(): string[];
        /**
         * Get home path of `file_widget`.
         * @returns the home path as string
         */
        get_home_path(): string;
        /**
         * Get location from `file_widget`.
         * @returns the location #GHashTable
         */
        get_location(): GLib.HashTable<any, any>;
        /**
         * Get recently used from `file_widget`.
         * @returns the recently used string vector
         */
        get_recently_used(): [string[], number];
        /**
         * Get recently used filename of `file_widget`.
         * @returns the home path as string
         */
        get_recently_used_filename(): string;
        /**
         * Read bookmarks from bookmark-filename.
         */
        read_bookmark(): void;
        /**
         * Read recently-used from recently-used-filename.
         */
        read_recently_used(): void;
        /**
         * Refresh `file_widget` due to current path change.
         */
        refresh(): void;
        /**
         * Remove `bookmark_location` from bookmark with `button_text`.
         * @param bookmark_location the bookmark location
         */
        remove_bookmark(bookmark_location: string): void;
        /**
         * Remove `button_action` from location with `button_text`.
         * @param button_action the button action
         */
        remove_location(button_action: string): void;
        /**
         * Set `app_generic_path` of `file_widget`.
         * @param app_generic_path the app generic path
         */
        set_app_generic_path(app_generic_path: string): void;
        /**
         * Set `app_home_path` of `file_widget`.
         * @param app_home_path the app home path
         */
        set_app_home_path(app_home_path: string): void;
        /**
         * Set `bookmark_filename` of `file_widget`.
         * @param bookmark_filename the bookmark filename
         */
        set_bookmark_filename(bookmark_filename: string): void;
        /**
         * Set `current_path` of `file_widget`.
         * @param current_path the current path
         */
        set_current_path(current_path: string): void;
        /**
         * Set `default_bundle` of `file_widget`.
         * @param default_bundle the default bundle
         */
        set_default_bundle(default_bundle: string): void;
        /**
         * Set `default_path` of `file_widget`.
         * @param default_path the default path
         */
        set_default_path(default_path: string): void;
        /**
         * Set `file_action` of `file_widget`.
         * @param file_action the file action
         */
        set_file_action(file_action: number): void;
        /**
         * Set `file_filter` of `file_widget`.
         * @param file_filter the file filter
         */
        set_file_filter(file_filter: number): void;
        /**
         * Set `file_magic_executable` of `file_widget`.
         * @param file_magic_executable the file magic executable
         */
        set_file_magic_executable(file_magic_executable: string): void;
        /**
         * Set `flags` of `file_widget`.
         * @param flags the flags
         */
        set_flags(flags: number): void;
        /**
         * Set `home_path` of `file_widget`.
         * @param home_path the home path
         */
        set_home_path(home_path: string): void;
        /**
         * Set `recently_used_filename` of `file_widget`.
         * @param recently_used_filename the recently used filename
         */
        set_recently_used_filename(recently_used_filename: string): void;
        /**
         * Test `file_action` of `file_widget`.
         * @param file_action the file action
         * @returns %TRUE if file action matches, otherwise %FALSE
         */
        test_file_action(file_action: number): boolean;
        /**
         * Test `file_filter` of `file_widget`.
         * @param file_filter the file filter
         * @returns %TRUE if file filter matches, otherwise %FALSE
         */
        test_file_filter(file_filter: number): boolean;
        /**
         * Test `flags` of `file_widget`.
         * @param flags the flags
         * @returns %TRUE if flags set, otherwise %FALSE
         */
        test_flags(flags: number): boolean;
        /**
         * Set `flags` of `file_widget`.
         * @param flags the flags
         */
        unset_flags(flags: number): void;
        /**
         * Write bookmarks from bookmark-filename.
         */
        write_bookmark(): void;
        /**
         * Write recently_useds from recently_used-filename.
         */
        write_recently_used(): void;

        // Inherited properties
        /**
         * The orientation of the orientable.
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        // Inherited methods
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the @orientable
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module IconLink {
        // Signal callback interfaces

        interface Clicked {
            (): void;
        }

        interface CopyEvent {
            (): IconLink;
        }

        interface DeleteEvent {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Box.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps,
                Gtk.Orientable.ConstructorProps {
            action: string;
        }
    }

    class IconLink extends Gtk.Box implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<IconLink>;

        // Own properties of AgsGui.IconLink

        /**
         * The assigned action.
         */
        get action(): string;
        set action(val: string);

        // Own fields of AgsGui.IconLink

        box: Gtk.Box;
        flags: number;
        icon: Gtk.Image;
        link: Gtk.Label;
        context_group: Gio.SimpleActionGroup;
        context_popover: Gtk.PopoverMenu;
        context_popup: Gio.Menu;

        // Constructors of AgsGui.IconLink

        constructor(properties?: Partial<IconLink.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](icon_name: string, action: string, link_text: string): IconLink;
        // Conflicted with Gtk.Box.new

        static ['new'](...args: never[]): any;

        // Own signals of AgsGui.IconLink

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'clicked', callback: (_source: this) => void): number;
        connect_after(signal: 'clicked', callback: (_source: this) => void): number;
        emit(signal: 'clicked'): void;
        connect(signal: 'copy-event', callback: (_source: this) => IconLink): number;
        connect_after(signal: 'copy-event', callback: (_source: this) => IconLink): number;
        emit(signal: 'copy-event'): void;
        connect(signal: 'delete-event', callback: (_source: this) => void): number;
        connect_after(signal: 'delete-event', callback: (_source: this) => void): number;
        emit(signal: 'delete-event'): void;

        // Own virtual methods of AgsGui.IconLink

        /**
         * Emits ::clicked event.
         */
        vfunc_clicked(): void;
        /**
         * Emits ::delete-event event.
         */
        vfunc_delete_event(): void;

        // Own methods of AgsGui.IconLink

        /**
         * Emits ::clicked event.
         */
        clicked(): void;
        /**
         * Emits ::delete-event event.
         */
        delete_event(): void;
        /**
         * Get action of `icon_link`.
         * @returns the action as string
         */
        get_action(): string;
        /**
         * Get icon name of `icon_link`.
         * @returns the icon name as string
         */
        get_icon_name(): string;
        /**
         * Get link text of `icon_link`.
         * @returns the link text as string
         */
        get_link_text(): string;
        /**
         * Set `action` of `icon_link`.
         * @param action the action
         */
        set_action(action: string): void;
        /**
         * Set `flags` of `icon_link`.
         * @param flags the flags
         */
        set_flags(flags: number): void;
        /**
         * Set `icon_name` of `icon_link`.
         * @param icon_name the icon name
         */
        set_icon_name(icon_name: string): void;
        /**
         * Set `link_text` of `icon_link`.
         * @param link_text the link text
         */
        set_link_text(link_text: string): void;
        /**
         * Test `flags` of `icon_link`.
         * @param flags the flags
         * @returns %TRUE if flags set, otherwise %FALSE
         */
        test_flags(flags: number): boolean;
        /**
         * Set `flags` of `icon_link`.
         * @param flags the flags
         */
        unset_flags(flags: number): void;

        // Inherited properties
        /**
         * The orientation of the orientable.
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        // Inherited methods
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the @orientable
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module Indicator {
        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Widget.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps,
                Gtk.Orientable.ConstructorProps {
            adjustment: GObject.Object;
            segment_count: number;
            segmentCount: number;
            segment_height: number;
            segmentHeight: number;
            segment_padding: number;
            segmentPadding: number;
            segment_width: number;
            segmentWidth: number;
        }
    }

    class Indicator extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<Indicator>;

        // Own properties of AgsGui.Indicator

        /**
         * The adjustment giving indicator value.
         */
        get adjustment(): GObject.Object;
        set adjustment(val: GObject.Object);
        /**
         * The indicator's segment count.
         */
        get segment_count(): number;
        set segment_count(val: number);
        /**
         * The indicator's segment count.
         */
        get segmentCount(): number;
        set segmentCount(val: number);
        /**
         * The indicator's segment height.
         */
        get segment_height(): number;
        set segment_height(val: number);
        /**
         * The indicator's segment height.
         */
        get segmentHeight(): number;
        set segmentHeight(val: number);
        /**
         * The indicator's segment padding.
         */
        get segment_padding(): number;
        set segment_padding(val: number);
        /**
         * The indicator's segment padding.
         */
        get segmentPadding(): number;
        set segmentPadding(val: number);
        /**
         * The indicator's segment width.
         */
        get segment_width(): number;
        set segment_width(val: number);
        /**
         * The indicator's segment width.
         */
        get segmentWidth(): number;
        set segmentWidth(val: number);

        // Own fields of AgsGui.Indicator

        widget: Gtk.Widget;
        orientation: Gtk.Orientation;

        // Constructors of AgsGui.Indicator

        constructor(properties?: Partial<Indicator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](orientation: Gtk.Orientation, segment_width: number, segment_height: number): Indicator;

        // Own methods of AgsGui.Indicator

        /**
         * Get adjustment.
         * @returns the #GtkAdjustment
         */
        get_adjustment(): Gtk.Adjustment;
        /**
         * Get segment count.
         * @returns the segment count
         */
        get_segment_count(): number;
        /**
         * Get segment height.
         * @returns the segment height
         */
        get_segment_height(): number;
        /**
         * Get segment padding.
         * @returns the segment padding
         */
        get_segment_padding(): number;
        /**
         * Get segment width.
         * @returns the segment width
         */
        get_segment_width(): number;
        /**
         * Set adjustment.
         * @param adjustment the #GtkAdjustment
         */
        set_adjustment(adjustment: Gtk.Adjustment): void;
        /**
         * Set segment count.
         * @param segment_count the segment count
         */
        set_segment_count(segment_count: number): void;
        /**
         * Set segment height.
         * @param segment_height the segment height
         */
        set_segment_height(segment_height: number): void;
        /**
         * Set segment padding.
         * @param segment_padding the segment padding
         */
        set_segment_padding(segment_padding: number): void;
        /**
         * Set segment width.
         * @param segment_width the segment width
         */
        set_segment_width(segment_width: number): void;

        // Inherited properties
        /**
         * The accessible role of the given `GtkAccessible` implementation.
         *
         * The accessible role cannot be changed once set.
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);
        /**
         * The accessible role of the given `GtkAccessible` implementation.
         *
         * The accessible role cannot be changed once set.
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

        // Inherited methods
        /**
         * Requests the user's screen reader to announce the given message.
         *
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         *
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;
        /**
         * Retrieves the accessible implementation for the given `GtkAccessible`.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Query a platform state, such as focus.
         *
         * See gtk_accessible_platform_changed().
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for `GtkText` wrappers.
         * @param state platform state to query
         * @returns the value of @state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Resets the accessible `property` to its default value.
         * @param property a `GtkAccessibleProperty`
         */
        reset_property(property: Gtk.AccessibleProperty): void;
        /**
         * Resets the accessible `relation` to its default value.
         * @param relation a `GtkAccessibleRelation`
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;
        /**
         * Resets the accessible `state` to its default value.
         * @param state a `GtkAccessibleState`
         */
        reset_state(state: Gtk.AccessibleState): void;
        /**
         * Sets the parent and sibling of an accessible object.
         *
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the `GtkAccessible`
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
        /**
         * Updates the next accessible sibling of `self`.
         *
         * That might be useful when a new child of a custom `GtkAccessible`
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
        /**
         * Updates an array of accessible properties.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * property change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param properties an array of `GtkAccessibleProperty`
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible relations.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * relation change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param relations an array of `GtkAccessibleRelation`
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible states.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * state change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param states an array of `GtkAccessibleState`
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the accessible implementation for the given `GtkAccessible`.
         */
        vfunc_get_at_context(): Gtk.ATContext | null;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Query a platform state, such as focus.
         *
         * See gtk_accessible_platform_changed().
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for `GtkText` wrappers.
         * @param state platform state to query
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Gets the ID of the `buildable` object.
         *
         * `GtkBuilder` sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a `GtkBuilder`
         * @param child child to add
         * @param type kind of child or %NULL
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
        /**
         * Similar to gtk_buildable_parser_finished() but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a `GtkBuilder`
         * @param child child object or %NULL for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         */
        vfunc_custom_finished(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder `GtkBuilder` used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        vfunc_custom_tag_end(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called for each unknown element under `<child>`.
         * @param builder a `GtkBuilder` used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         */
        vfunc_custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, Gtk.BuildableParser, any];
        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         */
        vfunc_get_id(): string;
        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a `GtkBuilder`
         * @param childname name of child
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. `GtkWindow` sets
         *  the `GtkWidget:visible` property here.
         * @param builder
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;
        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, g_object_set_property()
         *  is used by default. `GtkWindow` implements this to delay showing itself
         *  (i.e. setting the [property`Gtk`.Widget:visible] property) until the whole
         *  interface is created.
         * @param builder
         * @param name
         * @param value
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
        /**
         * Stores the id attribute given in the `GtkBuilder` UI definition.
         *   `GtkWidget` stores the name as object data. Implement this method if your
         *   object has some notion of “ID” and it makes sense to map the XML id
         *   attribute to it.
         * @param id
         */
        vfunc_set_id(id: string): void;
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the @orientable
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module InputDialog {
        // Signal callback interfaces

        interface Response {
            (response: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Window.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps,
                Gtk.Native.ConstructorProps,
                Gtk.Root.ConstructorProps,
                Gtk.ShortcutManager.ConstructorProps {}
    }

    class InputDialog
        extends Gtk.Window
        implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Native, Gtk.Root, Gtk.ShortcutManager
    {
        static $gtype: GObject.GType<InputDialog>;

        // Own fields of AgsGui.InputDialog

        window: Gtk.Window;
        flags: number;
        vbox: Gtk.Box;
        input_box: Gtk.Box;
        text: Gtk.Label;
        string_input: Gtk.Entry;
        spin_button_label: Gtk.Label;
        spin_button_input: Gtk.SpinButton;
        ok: Gtk.Button;
        cancel: Gtk.Button;
        message: Gtk.Label;

        // Constructors of AgsGui.InputDialog

        constructor(properties?: Partial<InputDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](title: string, transient_for: Gtk.Window): InputDialog;
        // Conflicted with Gtk.Window.new

        static ['new'](...args: never[]): any;

        // Own signals of AgsGui.InputDialog

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'response', callback: (_source: this, response: number) => void): number;
        connect_after(signal: 'response', callback: (_source: this, response: number) => void): number;
        emit(signal: 'response', response: number): void;

        // Own virtual methods of AgsGui.InputDialog

        /**
         * Emit signal  AgsInputDialog::response().
         * @param response the response
         */
        vfunc_response(response: number): void;

        // Own methods of AgsGui.InputDialog

        /**
         * The #GtkEntry to get input from.
         * @returns the entry widget
         */
        get_entry(): Gtk.Entry;
        /**
         * The #GtkSpinButton to get input from.
         * @returns the spin button widget
         */
        get_spin_button(): Gtk.SpinButton;
        /**
         * Emit signal  AgsInputDialog::response().
         * @param response the response
         */
        response(response: number): void;
        /**
         * Set `flags`.
         * @param flags the flags
         */
        set_flags(flags: number): void;
        /**
         * Set informal message.
         * @param message
         */
        set_message(message: string): void;
        /**
         * Set label of spin button.
         * @param label the spin button label
         */
        set_spin_button_label(label: string): void;
        /**
         * Set informal text.
         * @param text the text
         */
        set_text(text: string): void;
        /**
         * Test flags to be set.
         * @param flags the flags
         * @returns %TRUE if flags is set, otherwise %FALSE
         */
        test_flags(flags: number): boolean;
        /**
         * Unset `flags`.
         * @param flags the flags
         */
        unset_flags(flags: number): void;

        // Inherited properties
        /**
         * Whether the widget or any of its descendents can accept
         * the input focus.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get can_focus(): boolean;
        set can_focus(val: boolean);
        /**
         * Whether the widget or any of its descendents can accept
         * the input focus.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get canFocus(): boolean;
        set canFocus(val: boolean);
        /**
         * Whether the widget can receive pointer events.
         */
        get can_target(): boolean;
        set can_target(val: boolean);
        /**
         * Whether the widget can receive pointer events.
         */
        get canTarget(): boolean;
        set canTarget(val: boolean);
        /**
         * A list of css classes applied to this widget.
         */
        get css_classes(): string[];
        set css_classes(val: string[]);
        /**
         * A list of css classes applied to this widget.
         */
        get cssClasses(): string[];
        set cssClasses(val: string[]);
        /**
         * The name of this widget in the CSS tree.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get css_name(): string;
        /**
         * The name of this widget in the CSS tree.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get cssName(): string;
        /**
         * The cursor used by `widget`.
         */
        get cursor(): Gdk.Cursor;
        set cursor(val: Gdk.Cursor);
        /**
         * Whether the widget should grab focus when it is clicked with the mouse.
         *
         * This property is only relevant for widgets that can take focus.
         */
        get focus_on_click(): boolean;
        set focus_on_click(val: boolean);
        /**
         * Whether the widget should grab focus when it is clicked with the mouse.
         *
         * This property is only relevant for widgets that can take focus.
         */
        get focusOnClick(): boolean;
        set focusOnClick(val: boolean);
        /**
         * Whether this widget itself will accept the input focus.
         */
        get focusable(): boolean;
        set focusable(val: boolean);
        /**
         * How to distribute horizontal space if widget gets extra space.
         */
        get halign(): Gtk.Align;
        set halign(val: Gtk.Align);
        /**
         * Whether the widget is the default widget.
         */
        get has_default(): boolean;
        /**
         * Whether the widget is the default widget.
         */
        get hasDefault(): boolean;
        /**
         * Whether the widget has the input focus.
         */
        get has_focus(): boolean;
        /**
         * Whether the widget has the input focus.
         */
        get hasFocus(): boolean;
        /**
         * Enables or disables the emission of the ::query-tooltip signal on `widget`.
         *
         * A value of %TRUE indicates that `widget` can have a tooltip, in this case
         * the widget will be queried using [signal`Gtk`.Widget::query-tooltip] to
         * determine whether it will provide a tooltip or not.
         */
        get has_tooltip(): boolean;
        set has_tooltip(val: boolean);
        /**
         * Enables or disables the emission of the ::query-tooltip signal on `widget`.
         *
         * A value of %TRUE indicates that `widget` can have a tooltip, in this case
         * the widget will be queried using [signal`Gtk`.Widget::query-tooltip] to
         * determine whether it will provide a tooltip or not.
         */
        get hasTooltip(): boolean;
        set hasTooltip(val: boolean);
        /**
         * Override for height request of the widget.
         *
         * If this is -1, the natural request will be used.
         */
        get height_request(): number;
        set height_request(val: number);
        /**
         * Override for height request of the widget.
         *
         * If this is -1, the natural request will be used.
         */
        get heightRequest(): number;
        set heightRequest(val: number);
        /**
         * Whether to expand horizontally.
         */
        get hexpand(): boolean;
        set hexpand(val: boolean);
        /**
         * Whether to use the `hexpand` property.
         */
        get hexpand_set(): boolean;
        set hexpand_set(val: boolean);
        /**
         * Whether to use the `hexpand` property.
         */
        get hexpandSet(): boolean;
        set hexpandSet(val: boolean);
        /**
         * The `GtkLayoutManager` instance to use to compute the preferred size
         * of the widget, and allocate its children.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get layout_manager(): Gtk.LayoutManager;
        set layout_manager(val: Gtk.LayoutManager);
        /**
         * The `GtkLayoutManager` instance to use to compute the preferred size
         * of the widget, and allocate its children.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get layoutManager(): Gtk.LayoutManager;
        set layoutManager(val: Gtk.LayoutManager);
        /**
         * Margin on bottom side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get margin_bottom(): number;
        set margin_bottom(val: number);
        /**
         * Margin on bottom side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get marginBottom(): number;
        set marginBottom(val: number);
        /**
         * Margin on end of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get margin_end(): number;
        set margin_end(val: number);
        /**
         * Margin on end of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get marginEnd(): number;
        set marginEnd(val: number);
        /**
         * Margin on start of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get margin_start(): number;
        set margin_start(val: number);
        /**
         * Margin on start of widget, horizontally.
         *
         * This property supports left-to-right and right-to-left text
         * directions.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get marginStart(): number;
        set marginStart(val: number);
        /**
         * Margin on top side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get margin_top(): number;
        set margin_top(val: number);
        /**
         * Margin on top side of widget.
         *
         * This property adds margin outside of the widget's normal size
         * request, the margin will be added in addition to the size from
         * [method`Gtk`.Widget.set_size_request] for example.
         */
        get marginTop(): number;
        set marginTop(val: number);
        /**
         * The name of the widget.
         */
        get name(): string;
        set name(val: string);
        /**
         * The requested opacity of the widget.
         */
        get opacity(): number;
        set opacity(val: number);
        /**
         * How content outside the widget's content area is treated.
         *
         * This property is meant to be set by widget implementations,
         * typically in their instance init function.
         */
        get overflow(): Gtk.Overflow;
        set overflow(val: Gtk.Overflow);
        /**
         * The parent widget of this widget.
         */
        get parent(): Gtk.Widget;
        /**
         * Whether the widget will receive the default action when it is focused.
         */
        get receives_default(): boolean;
        set receives_default(val: boolean);
        /**
         * Whether the widget will receive the default action when it is focused.
         */
        get receivesDefault(): boolean;
        set receivesDefault(val: boolean);
        /**
         * The `GtkRoot` widget of the widget tree containing this widget.
         *
         * This will be %NULL if the widget is not contained in a root widget.
         */
        get root(): Gtk.Root;
        /**
         * The scale factor of the widget.
         */
        get scale_factor(): number;
        /**
         * The scale factor of the widget.
         */
        get scaleFactor(): number;
        /**
         * Whether the widget responds to input.
         */
        get sensitive(): boolean;
        set sensitive(val: boolean);
        /**
         * Sets the text of tooltip to be the given string, which is marked up
         * with Pango markup.
         *
         * Also see [method`Gtk`.Tooltip.set_markup].
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not %NULL:
         * [property`Gtk`.Widget:has-tooltip] will automatically be set to %TRUE
         * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
         * the default signal handler.
         *
         * Note that if both [property`Gtk`.Widget:tooltip-text] and
         * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
         */
        get tooltip_markup(): string;
        set tooltip_markup(val: string);
        /**
         * Sets the text of tooltip to be the given string, which is marked up
         * with Pango markup.
         *
         * Also see [method`Gtk`.Tooltip.set_markup].
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not %NULL:
         * [property`Gtk`.Widget:has-tooltip] will automatically be set to %TRUE
         * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
         * the default signal handler.
         *
         * Note that if both [property`Gtk`.Widget:tooltip-text] and
         * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
         */
        get tooltipMarkup(): string;
        set tooltipMarkup(val: string);
        /**
         * Sets the text of tooltip to be the given string.
         *
         * Also see [method`Gtk`.Tooltip.set_text].
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not %NULL:
         * [property`Gtk`.Widget:has-tooltip] will automatically be set to %TRUE
         * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
         * the default signal handler.
         *
         * Note that if both [property`Gtk`.Widget:tooltip-text] and
         * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
         */
        get tooltip_text(): string;
        set tooltip_text(val: string);
        /**
         * Sets the text of tooltip to be the given string.
         *
         * Also see [method`Gtk`.Tooltip.set_text].
         *
         * This is a convenience property which will take care of getting the
         * tooltip shown if the given string is not %NULL:
         * [property`Gtk`.Widget:has-tooltip] will automatically be set to %TRUE
         * and there will be taken care of [signal`Gtk`.Widget::query-tooltip] in
         * the default signal handler.
         *
         * Note that if both [property`Gtk`.Widget:tooltip-text] and
         * [property`Gtk`.Widget:tooltip-markup] are set, the last one wins.
         */
        get tooltipText(): string;
        set tooltipText(val: string);
        /**
         * How to distribute vertical space if widget gets extra space.
         */
        get valign(): Gtk.Align;
        set valign(val: Gtk.Align);
        /**
         * Whether to expand vertically.
         */
        get vexpand(): boolean;
        set vexpand(val: boolean);
        /**
         * Whether to use the `vexpand` property.
         */
        get vexpand_set(): boolean;
        set vexpand_set(val: boolean);
        /**
         * Whether to use the `vexpand` property.
         */
        get vexpandSet(): boolean;
        set vexpandSet(val: boolean);
        /**
         * Whether the widget is visible.
         */
        get visible(): boolean;
        set visible(val: boolean);
        /**
         * Override for width request of the widget.
         *
         * If this is -1, the natural request will be used.
         */
        get width_request(): number;
        set width_request(val: number);
        /**
         * Override for width request of the widget.
         *
         * If this is -1, the natural request will be used.
         */
        get widthRequest(): number;
        set widthRequest(val: number);

        // Inherited methods
        /**
         * Returns the renderer that is used for this `GtkNative`.
         * @returns the renderer for @self
         */
        get_renderer(): Gsk.Renderer | null;
        /**
         * Returns the surface of this `GtkNative`.
         * @returns the surface of @self
         */
        get_surface(): Gdk.Surface | null;
        /**
         * Retrieves the surface transform of `self`.
         *
         * This is the translation from `self'`s surface coordinates into
         * `self'`s widget coordinates.
         */
        get_surface_transform(): [number, number];
        /**
         * Realizes a `GtkNative`.
         *
         * This should only be used by subclasses.
         */
        realize(): void;
        /**
         * Unrealizes a `GtkNative`.
         *
         * This should only be used by subclasses.
         */
        unrealize(): void;
        /**
         * Returns the display that this `GtkRoot` is on.
         * @returns the display of @root
         */
        get_display(): Gdk.Display;
        /**
         * Retrieves the current focused widget within the root.
         *
         * Note that this is the widget that would have the focus
         * if the root is active; if the root is not focused then
         * `gtk_widget_has_focus (widget)` will be %FALSE for the
         * widget.
         * @returns the currently focused widget
         */
        get_focus(): Gtk.Widget | null;
        /**
         * If `focus` is not the current focus widget, and is focusable, sets
         * it as the focus widget for the root.
         *
         * If `focus` is %NULL, unsets the focus widget for the root.
         *
         * To set the focus to a particular widget in the root, it is usually
         * more convenient to use [method`Gtk`.Widget.grab_focus] instead of
         * this function.
         * @param focus widget to be the new focus widget, or %NULL    to unset the focus widget
         */
        set_focus(focus?: Gtk.Widget | null): void;
        /**
         * Add a `GtkShortcutController` to be managed.
         * @param controller
         */
        vfunc_add_controller(controller: Gtk.ShortcutController): void;
        /**
         * Remove a `GtkShortcutController` that had previously
         *   been added
         * @param controller
         */
        vfunc_remove_controller(controller: Gtk.ShortcutController): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
        /**
         * Enable or disable an action installed with
         * gtk_widget_class_install_action().
         * @param action_name action name, such as "clipboard.paste"
         * @param enabled whether the action is now enabled
         */
        action_set_enabled(action_name: string, enabled: boolean): void;
        /**
         * For widgets that can be “activated” (buttons, menu items, etc.),
         * this function activates them.
         *
         * The activation will emit the signal set using
         * [method`Gtk`.WidgetClass.set_activate_signal] during class initialization.
         *
         * Activation is what happens when you press <kbd>Enter</kbd>
         * on a widget during key navigation.
         *
         * If you wish to handle the activation keybinding yourself, it is
         * recommended to use [method`Gtk`.WidgetClass.add_shortcut] with an action
         * created with [ctor`Gtk`.SignalAction.new].
         *
         * If `widget` isn't activatable, the function returns %FALSE.
         * @returns %TRUE if the widget was activatable
         */
        activate(): boolean;
        /**
         * Looks up the action in the action groups associated with
         * `widget` and its ancestors, and activates it.
         *
         * If the action is in an action group added with
         * [method`Gtk`.Widget.insert_action_group], the `name` is expected
         * to be prefixed with the prefix that was used when the group was
         * inserted.
         *
         * The arguments must match the actions expected parameter type,
         * as returned by `g_action_get_parameter_type()`.
         * @param name the name of the action to activate
         * @param args parameters to use
         * @returns %TRUE if the action was activated, %FALSE if the   action does not exist.
         */
        activate_action(name: string, args?: GLib.Variant | null): boolean;
        /**
         * Activates the `default.activate` action from `widget`.
         */
        activate_default(): void;
        /**
         * Adds `controller` to `widget` so that it will receive events.
         *
         * You will usually want to call this function right after
         * creating any kind of [class`Gtk`.EventController].
         * @param controller a `GtkEventController` that hasn't been   added to a widget yet
         */
        add_controller(controller: Gtk.EventController): void;
        /**
         * Adds a style class to `widget`.
         *
         * After calling this function, the widget’s style will match
         * for `css_class,` according to CSS matching rules.
         *
         * Use [method`Gtk`.Widget.remove_css_class] to remove the
         * style again.
         * @param css_class The style class to add to @widget, without   the leading '.' used for notation of style classes
         */
        add_css_class(css_class: string): void;
        /**
         * Adds a widget to the list of mnemonic labels for this widget.
         *
         * See [method`Gtk`.Widget.list_mnemonic_labels]. Note the
         * list of mnemonic labels for the widget is cleared when the
         * widget is destroyed, so the caller must make sure to update
         * its internal state at this point as well.
         * @param label a `GtkWidget` that acts as a mnemonic label for @widget
         */
        add_mnemonic_label(label: Gtk.Widget): void;
        /**
         * Queues an animation frame update and adds a callback to be called
         * before each frame.
         *
         * Until the tick callback is removed, it will be called frequently
         * (usually at the frame rate of the output device or as quickly as
         * the application can be repainted, whichever is slower). For this
         * reason, is most suitable for handling graphics that change every
         * frame or every few frames. The tick callback does not automatically
         * imply a relayout or repaint. If you want a repaint or relayout, and
         * aren’t changing widget properties that would trigger that (for example,
         * changing the text of a `GtkLabel`), then you will have to call
         * [method`Gtk`.Widget.queue_resize] or [method`Gtk`.Widget.queue_draw]
         * yourself.
         *
         * [method`Gdk`.FrameClock.get_frame_time] should generally be used
         * for timing continuous animations and
         * [method`Gdk`.FrameTimings.get_predicted_presentation_time] if you are
         * trying to display isolated frames at particular times.
         *
         * This is a more convenient alternative to connecting directly to the
         * [signal`Gdk`.FrameClock::update] signal of `GdkFrameClock`, since you
         * don't have to worry about when a `GdkFrameClock` is assigned to a widget.
         * @param callback function to call for updating animations
         * @returns an id for the connection of this callback. Remove the callback   by passing the id returned from this function to   [method@Gtk.Widget.remove_tick_callback]
         */
        add_tick_callback(callback: Gtk.TickCallback): number;
        /**
         * This function is only used by `GtkWidget` subclasses, to
         * assign a size, position and (optionally) baseline to their
         * child widgets.
         *
         * In this function, the allocation and baseline may be adjusted.
         * The given allocation will be forced to be bigger than the
         * widget's minimum size, as well as at least 0×0 in size.
         *
         * For a version that does not take a transform, see
         * [method`Gtk`.Widget.size_allocate].
         * @param width New width of @widget
         * @param height New height of @widget
         * @param baseline New baseline of @widget, or -1
         * @param transform Transformation to be applied to @widget
         */
        allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void;
        /**
         * Called by widgets as the user moves around the window using
         * keyboard shortcuts.
         *
         * The `direction` argument indicates what kind of motion is taking place (up,
         * down, left, right, tab forward, tab backward).
         *
         * This function calls the [vfunc`Gtk`.Widget.focus] virtual function; widgets
         * can override the virtual function in order to implement appropriate focus
         * behavior.
         *
         * The default `focus()` virtual function for a widget should return `TRUE` if
         * moving in `direction` left the focus on a focusable location inside that
         * widget, and `FALSE` if moving in `direction` moved the focus outside the
         * widget. When returning `TRUE`, widgets normally call [method`Gtk`.Widget.grab_focus]
         * to place the focus accordingly; when returning `FALSE`, they don’t modify
         * the current focus location.
         *
         * This function is used by custom widget implementations; if you're
         * writing an app, you’d use [method`Gtk`.Widget.grab_focus] to move
         * the focus to a particular widget.
         * @param direction direction of focus movement
         * @returns %TRUE if focus ended up inside @widget
         */
        child_focus(direction: Gtk.DirectionType): boolean;
        /**
         * Computes the bounds for `widget` in the coordinate space of `target`.
         *
         * The bounds of widget are (the bounding box of) the region that it is
         * expected to draw in. See the [coordinate system](coordinates.html)
         * overview to learn more.
         *
         * If the operation is successful, %TRUE is returned. If `widget` has no
         * bounds or the bounds cannot be expressed in `target'`s coordinate space
         * (for example if both widgets are in different windows), %FALSE is
         * returned and `bounds` is set to the zero rectangle.
         *
         * It is valid for `widget` and `target` to be the same widget.
         * @param target the `GtkWidget`
         * @returns %TRUE if the bounds could be computed
         */
        compute_bounds(target: Gtk.Widget): [boolean, Graphene.Rect];
        /**
         * Computes whether a container should give this widget
         * extra space when possible.
         *
         * Containers should check this, rather than looking at
         * [method`Gtk`.Widget.get_hexpand] or [method`Gtk`.Widget.get_vexpand].
         *
         * This function already checks whether the widget is visible, so
         * visibility does not need to be checked separately. Non-visible
         * widgets are not expanded.
         *
         * The computed expand value uses either the expand setting explicitly
         * set on the widget itself, or, if none has been explicitly set,
         * the widget may expand if some of its children do.
         * @param orientation expand direction
         * @returns whether widget tree rooted here should be expanded
         */
        compute_expand(orientation: Gtk.Orientation): boolean;
        /**
         * Translates the given `point` in `widget'`s coordinates to coordinates
         * relative to `target’`s coordinate system.
         *
         * In order to perform this operation, both widgets must share a
         * common ancestor.
         * @param target the `GtkWidget` to transform into
         * @param point a point in @widget's coordinate system
         * @returns %TRUE if the point could be determined, %FALSE on failure.   In this case, 0 is stored in @out_point.
         */
        compute_point(target: Gtk.Widget, point: Graphene.Point): [boolean, Graphene.Point];
        /**
         * Computes a matrix suitable to describe a transformation from
         * `widget'`s coordinate system into `target'`s coordinate system.
         *
         * The transform can not be computed in certain cases, for example
         * when `widget` and `target` do not share a common ancestor. In that
         * case `out_transform` gets set to the identity matrix.
         *
         * To learn more about widget coordinate systems, see the coordinate
         * system [overview](coordinates.html).
         * @param target the target widget that the matrix will transform to
         * @returns %TRUE if the transform could be computed, %FALSE otherwise
         */
        compute_transform(target: Gtk.Widget): [boolean, Graphene.Matrix];
        /**
         * Tests if the point at (`x,` `y)` is contained in `widget`.
         *
         * The coordinates for (`x,` `y)` must be in widget coordinates, so
         * (0, 0) is assumed to be the top left of `widget'`s content area.
         * @param x X coordinate to test, relative to @widget's origin
         * @param y Y coordinate to test, relative to @widget's origin
         * @returns %TRUE if @widget contains (@x, @y).
         */
        contains(x: number, y: number): boolean;
        /**
         * Creates a new `PangoContext` with the appropriate font map,
         * font options, font description, and base direction for drawing
         * text for this widget.
         *
         * See also [method`Gtk`.Widget.get_pango_context].
         * @returns the new `PangoContext`
         */
        create_pango_context(): Pango.Context;
        /**
         * Creates a new `PangoLayout` with the appropriate font map,
         * font description, and base direction for drawing text for
         * this widget.
         *
         * If you keep a `PangoLayout` created in this way around,
         * you need to re-create it when the widget `PangoContext`
         * is replaced. This can be tracked by listening to changes
         * of the [property`Gtk`.Widget:root] property on the widget.
         * @param text text to set on the layout
         * @returns the new `PangoLayout`
         */
        create_pango_layout(text?: string | null): Pango.Layout;
        /**
         * Clears the template children for the given widget.
         *
         * This function is the opposite of [method`Gtk`.Widget.init_template], and
         * it is used to clear all the template children from a widget instance.
         * If you bound a template child to a field in the instance structure, or
         * in the instance private data structure, the field will be set to `NULL`
         * after this function returns.
         *
         * You should call this function inside the `GObjectClass.dispose()`
         * implementation of any widget that called `gtk_widget_init_template()`.
         * Typically, you will want to call this function last, right before
         * chaining up to the parent type's dispose implementation, e.g.
         *
         * ```c
         * static void
         * some_widget_dispose (GObject *gobject)
         * {
         *   SomeWidget *self = SOME_WIDGET (gobject);
         *
         *   // Clear the template data for SomeWidget
         *   gtk_widget_dispose_template (GTK_WIDGET (self), SOME_TYPE_WIDGET);
         *
         *   G_OBJECT_CLASS (some_widget_parent_class)->dispose (gobject);
         * }
         * ```
         * @param widget_type the type of the widget to finalize the template for
         */
        dispose_template(widget_type: GObject.GType): void;
        /**
         * Checks to see if a drag movement has passed the GTK drag threshold.
         * @param start_x X coordinate of start of drag
         * @param start_y Y coordinate of start of drag
         * @param current_x current X coordinate
         * @param current_y current Y coordinate
         * @returns %TRUE if the drag threshold has been passed.
         */
        drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean;
        /**
         * Notifies the user about an input-related error on this widget.
         *
         * If the [property`Gtk`.Settings:gtk-error-bell] setting is %TRUE,
         * it calls [method`Gdk`.Surface.beep], otherwise it does nothing.
         *
         * Note that the effect of [method`Gdk`.Surface.beep] can be configured
         * in many ways, depending on the windowing backend and the desktop
         * environment or window manager that is used.
         */
        error_bell(): void;
        /**
         * Returns the baseline that has currently been allocated to `widget`.
         *
         * This function is intended to be used when implementing handlers
         * for the `GtkWidget`Class.snapshot() function, and when allocating
         * child widgets in `GtkWidget`Class.size_allocate().
         * @returns the baseline of the @widget, or -1 if none
         */
        get_allocated_baseline(): number;
        /**
         * Returns the height that has currently been allocated to `widget`.
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns the height of the @widget
         */
        get_allocated_height(): number;
        /**
         * Returns the width that has currently been allocated to `widget`.
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns the width of the @widget
         */
        get_allocated_width(): number;
        /**
         * Retrieves the widget’s allocation.
         *
         * Note, when implementing a layout container: a widget’s allocation
         * will be its “adjusted” allocation, that is, the widget’s parent
         * typically calls [method`Gtk`.Widget.size_allocate] with an allocation,
         * and that allocation is then adjusted (to handle margin
         * and alignment for example) before assignment to the widget.
         * [method`Gtk`.Widget.get_allocation] returns the adjusted allocation that
         * was actually assigned to the widget. The adjusted allocation is
         * guaranteed to be completely contained within the
         * [method`Gtk`.Widget.size_allocate] allocation, however.
         *
         * So a layout container is guaranteed that its children stay inside
         * the assigned bounds, but not that they have exactly the bounds the
         * container assigned.
         */
        get_allocation(): Gtk.Allocation;
        /**
         * Gets the first ancestor of `widget` with type `widget_type`.
         *
         * For example, `gtk_widget_get_ancestor (widget, GTK_TYPE_BOX)`
         * gets the first `GtkBox` that’s an ancestor of `widget`. No
         * reference will be added to the returned widget; it should
         * not be unreferenced.
         *
         * Note that unlike [method`Gtk`.Widget.is_ancestor], this function
         * considers `widget` to be an ancestor of itself.
         * @param widget_type ancestor type
         * @returns the ancestor widget
         */
        get_ancestor(widget_type: GObject.GType): Gtk.Widget | null;
        /**
         * Returns the baseline that has currently been allocated to `widget`.
         *
         * This function is intended to be used when implementing handlers
         * for the `GtkWidget`Class.snapshot() function, and when allocating
         * child widgets in `GtkWidget`Class.size_allocate().
         * @returns the baseline of the @widget, or -1 if none
         */
        get_baseline(): number;
        /**
         * Determines whether the input focus can enter `widget` or any
         * of its children.
         *
         * See [method`Gtk`.Widget.set_focusable].
         * @returns %TRUE if the input focus can enter @widget, %FALSE otherwise
         */
        get_can_focus(): boolean;
        /**
         * Queries whether `widget` can be the target of pointer events.
         * @returns %TRUE if @widget can receive pointer events
         */
        get_can_target(): boolean;
        /**
         * Gets the value set with gtk_widget_set_child_visible().
         *
         * If you feel a need to use this function, your code probably
         * needs reorganization.
         *
         * This function is only useful for container implementations
         * and should never be called by an application.
         * @returns %TRUE if the widget is mapped with the parent.
         */
        get_child_visible(): boolean;
        /**
         * Gets the clipboard object for `widget`.
         *
         * This is a utility function to get the clipboard object for the
         * `GdkDisplay` that `widget` is using.
         *
         * Note that this function always works, even when `widget` is not
         * realized yet.
         * @returns the appropriate clipboard object
         */
        get_clipboard(): Gdk.Clipboard;
        /**
         * Gets the current foreground color for the widget’s
         * CSS style.
         *
         * This function should only be used in snapshot
         * implementations that need to do custom
         * drawing with the foreground color.
         */
        get_color(): Gdk.RGBA;
        /**
         * Returns the list of style classes applied to `widget`.
         * @returns a %NULL-terminated list of   css classes currently applied to @widget. The returned   list must freed using g_strfreev().
         */
        get_css_classes(): string[];
        /**
         * Returns the CSS name that is used for `self`.
         * @returns the CSS name
         */
        get_css_name(): string;
        /**
         * Queries the cursor set on `widget`.
         *
         * See [method`Gtk`.Widget.set_cursor] for details.
         * @returns the cursor   currently in use or %NULL if the cursor is inherited
         */
        get_cursor(): Gdk.Cursor | null;
        /**
         * Gets the reading direction for a particular widget.
         *
         * See [method`Gtk`.Widget.set_direction].
         * @returns the reading direction for the widget.
         */
        get_direction(): Gtk.TextDirection;
        /**
         * Returns the widget’s first child.
         *
         * This API is primarily meant for widget implementations.
         * @returns The widget's first child
         */
        get_first_child(): Gtk.Widget | null;
        /**
         * Returns the current focus child of `widget`.
         * @returns The current focus   child of @widget
         */
        get_focus_child(): Gtk.Widget | null;
        /**
         * Returns whether the widget should grab focus when it is clicked
         * with the mouse.
         *
         * See [method`Gtk`.Widget.set_focus_on_click].
         * @returns %TRUE if the widget should grab focus when it is   clicked with the mouse
         */
        get_focus_on_click(): boolean;
        /**
         * Determines whether `widget` can own the input focus.
         *
         * See [method`Gtk`.Widget.set_focusable].
         * @returns %TRUE if @widget can own the input focus, %FALSE otherwise
         */
        get_focusable(): boolean;
        /**
         * Gets the font map of `widget`.
         *
         * See [method`Gtk`.Widget.set_font_map].
         * @returns A `PangoFontMap`
         */
        get_font_map(): Pango.FontMap | null;
        /**
         * Returns the `cairo_font_options_t` of widget.
         *
         * Seee [method`Gtk`.Widget.set_font_options].
         * @returns the `cairo_font_options_t`   of widget
         */
        get_font_options(): cairo.FontOptions | null;
        /**
         * Obtains the frame clock for a widget.
         *
         * The frame clock is a global “ticker” that can be used to drive
         * animations and repaints. The most common reason to get the frame
         * clock is to call [method`Gdk`.FrameClock.get_frame_time], in order
         * to get a time to use for animating. For example you might record
         * the start of the animation with an initial value from
         * [method`Gdk`.FrameClock.get_frame_time], and then update the animation
         * by calling [method`Gdk`.FrameClock.get_frame_time] again during each repaint.
         *
         * [method`Gdk`.FrameClock.request_phase] will result in a new frame on the
         * clock, but won’t necessarily repaint any widgets. To repaint a
         * widget, you have to use [method`Gtk`.Widget.queue_draw] which invalidates
         * the widget (thus scheduling it to receive a draw on the next
         * frame). gtk_widget_queue_draw() will also end up requesting a frame
         * on the appropriate frame clock.
         *
         * A widget’s frame clock will not change while the widget is
         * mapped. Reparenting a widget (which implies a temporary unmap) can
         * change the widget’s frame clock.
         *
         * Unrealized widgets do not have a frame clock.
         * @returns a `GdkFrameClock`
         */
        get_frame_clock(): Gdk.FrameClock | null;
        /**
         * Gets the horizontal alignment of `widget`.
         *
         * For backwards compatibility reasons this method will never return
         * one of the baseline alignments, but instead it will convert it to
         * `GTK_ALIGN_FILL` or `GTK_ALIGN_CENTER`.
         *
         * Baselines are not supported for horizontal alignment.
         * @returns the horizontal alignment of @widget
         */
        get_halign(): Gtk.Align;
        /**
         * Returns the current value of the `has-tooltip` property.
         * @returns current value of `has-tooltip` on @widget.
         */
        get_has_tooltip(): boolean;
        /**
         * Returns the content height of the widget.
         *
         * This function returns the height passed to its
         * size-allocate implementation, which is the height you
         * should be using in [vfunc`Gtk`.Widget.snapshot].
         *
         * For pointer events, see [method`Gtk`.Widget.contains].
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns The height of @widget
         */
        get_height(): number;
        /**
         * Gets whether the widget would like any available extra horizontal
         * space.
         *
         * When a user resizes a `GtkWindow`, widgets with expand=TRUE
         * generally receive the extra space. For example, a list or
         * scrollable area or document in your window would often be set to
         * expand.
         *
         * Containers should use [method`Gtk`.Widget.compute_expand] rather
         * than this function, to see whether a widget, or any of its children,
         * has the expand flag set. If any child of a widget wants to
         * expand, the parent may ask to expand also.
         *
         * This function only looks at the widget’s own hexpand flag, rather
         * than computing whether the entire widget tree rooted at this widget
         * wants to expand.
         * @returns whether hexpand flag is set
         */
        get_hexpand(): boolean;
        /**
         * Gets whether gtk_widget_set_hexpand() has been used
         * to explicitly set the expand flag on this widget.
         *
         * If [property`Gtk`.Widget:hexpand] property is set, then it
         * overrides any computed expand value based on child widgets.
         * If `hexpand` is not set, then the expand value depends on
         * whether any children of the widget would like to expand.
         *
         * There are few reasons to use this function, but it’s here
         * for completeness and consistency.
         * @returns whether hexpand has been explicitly set
         */
        get_hexpand_set(): boolean;
        /**
         * Returns the widget’s last child.
         *
         * This API is primarily meant for widget implementations.
         * @returns The widget's last child
         */
        get_last_child(): Gtk.Widget | null;
        /**
         * Retrieves the layout manager used by `widget`.
         *
         * See [method`Gtk`.Widget.set_layout_manager].
         * @returns a `GtkLayoutManager`
         */
        get_layout_manager(): Gtk.LayoutManager | null;
        /**
         * Whether the widget is mapped.
         * @returns %TRUE if the widget is mapped, %FALSE otherwise.
         */
        get_mapped(): boolean;
        /**
         * Gets the bottom margin of `widget`.
         * @returns The bottom margin of @widget
         */
        get_margin_bottom(): number;
        /**
         * Gets the end margin of `widget`.
         * @returns The end margin of @widget
         */
        get_margin_end(): number;
        /**
         * Gets the start margin of `widget`.
         * @returns The start margin of @widget
         */
        get_margin_start(): number;
        /**
         * Gets the top margin of `widget`.
         * @returns The top margin of @widget
         */
        get_margin_top(): number;
        /**
         * Retrieves the name of a widget.
         *
         * See [method`Gtk`.Widget.set_name] for the significance of widget names.
         * @returns name of the widget. This string is owned by GTK and   should not be modified or freed
         */
        get_name(): string;
        /**
         * Returns the nearest `GtkNative` ancestor of `widget`.
         *
         * This function will return %NULL if the widget is not
         * contained inside a widget tree with a native ancestor.
         *
         * `GtkNative` widgets will return themselves here.
         * @returns the `GtkNative` ancestor of @widget
         */
        get_native(): Gtk.Native | null;
        /**
         * Returns the widget’s next sibling.
         *
         * This API is primarily meant for widget implementations.
         * @returns The widget's next sibling
         */
        get_next_sibling(): Gtk.Widget | null;
        /**
         * #Fetches the requested opacity for this widget.
         *
         * See [method`Gtk`.Widget.set_opacity].
         * @returns the requested opacity for this widget.
         */
        get_opacity(): number;
        /**
         * Returns the widget’s overflow value.
         * @returns The widget's overflow.
         */
        get_overflow(): Gtk.Overflow;
        /**
         * Gets a `PangoContext` with the appropriate font map, font description,
         * and base direction for this widget.
         *
         * Unlike the context returned by [method`Gtk`.Widget.create_pango_context],
         * this context is owned by the widget (it can be used until the screen
         * for the widget changes or the widget is removed from its toplevel),
         * and will be updated to match any changes to the widget’s attributes.
         * This can be tracked by listening to changes of the
         * [property`Gtk`.Widget:root] property on the widget.
         * @returns the `PangoContext` for the widget.
         */
        get_pango_context(): Pango.Context;
        /**
         * Returns the parent widget of `widget`.
         * @returns the parent widget of @widget
         */
        get_parent(): Gtk.Widget | null;
        /**
         * Retrieves the minimum and natural size of a widget, taking
         * into account the widget’s preference for height-for-width management.
         *
         * This is used to retrieve a suitable size by container widgets which do
         * not impose any restrictions on the child placement. It can be used
         * to deduce toplevel window and menu sizes as well as child widgets in
         * free-form containers such as `GtkFixed`.
         *
         * Handle with care. Note that the natural height of a height-for-width
         * widget will generally be a smaller size than the minimum height, since
         * the required height for the natural width is generally smaller than the
         * required height for the minimum width.
         *
         * Use [method`Gtk`.Widget.measure] if you want to support baseline alignment.
         */
        get_preferred_size(): [Gtk.Requisition | null, Gtk.Requisition | null];
        /**
         * Returns the widget’s previous sibling.
         *
         * This API is primarily meant for widget implementations.
         * @returns The widget's previous sibling
         */
        get_prev_sibling(): Gtk.Widget | null;
        /**
         * Gets the primary clipboard of `widget`.
         *
         * This is a utility function to get the primary clipboard object
         * for the `GdkDisplay` that `widget` is using.
         *
         * Note that this function always works, even when `widget` is not
         * realized yet.
         * @returns the appropriate clipboard object
         */
        get_primary_clipboard(): Gdk.Clipboard;
        /**
         * Determines whether `widget` is realized.
         * @returns %TRUE if @widget is realized, %FALSE otherwise
         */
        get_realized(): boolean;
        /**
         * Determines whether `widget` is always treated as the default widget
         * within its toplevel when it has the focus, even if another widget
         * is the default.
         *
         * See [method`Gtk`.Widget.set_receives_default].
         * @returns %TRUE if @widget acts as the default widget when focused,   %FALSE otherwise
         */
        get_receives_default(): boolean;
        /**
         * Gets whether the widget prefers a height-for-width layout
         * or a width-for-height layout.
         *
         * Single-child widgets generally propagate the preference of
         * their child, more complex widgets need to request something
         * either in context of their children or in context of their
         * allocation capabilities.
         * @returns The `GtkSizeRequestMode` preferred by @widget.
         */
        get_request_mode(): Gtk.SizeRequestMode;
        /**
         * Returns the `GtkRoot` widget of `widget`.
         *
         * This function will return %NULL if the widget is not contained
         * inside a widget tree with a root widget.
         *
         * `GtkRoot` widgets will return themselves here.
         * @returns the root widget of @widget
         */
        get_root(): Gtk.Root | null;
        /**
         * Retrieves the internal scale factor that maps from window
         * coordinates to the actual device pixels.
         *
         * On traditional systems this is 1, on high density outputs,
         * it can be a higher value (typically 2).
         *
         * See [method`Gdk`.Surface.get_scale_factor].
         * @returns the scale factor for @widget
         */
        get_scale_factor(): number;
        /**
         * Returns the widget’s sensitivity.
         *
         * This function returns the value that has been set using
         * [method`Gtk`.Widget.set_sensitive]).
         *
         * The effective sensitivity of a widget is however determined
         * by both its own and its parent widget’s sensitivity.
         * See [method`Gtk`.Widget.is_sensitive].
         * @returns %TRUE if the widget is sensitive
         */
        get_sensitive(): boolean;
        /**
         * Gets the settings object holding the settings used for this widget.
         *
         * Note that this function can only be called when the `GtkWidget`
         * is attached to a toplevel, since the settings object is specific
         * to a particular `GdkDisplay`. If you want to monitor the widget for
         * changes in its settings, connect to the `notify::display` signal.
         * @returns the relevant `GtkSettings` object
         */
        get_settings(): Gtk.Settings;
        /**
         * Returns the content width or height of the widget.
         *
         * Which dimension is returned depends on `orientation`.
         *
         * This is equivalent to calling [method`Gtk`.Widget.get_width]
         * for %GTK_ORIENTATION_HORIZONTAL or [method`Gtk`.Widget.get_height]
         * for %GTK_ORIENTATION_VERTICAL, but can be used when
         * writing orientation-independent code, such as when
         * implementing [iface`Gtk`.Orientable] widgets.
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @param orientation the orientation to query
         * @returns The size of @widget in @orientation.
         */
        get_size(orientation: Gtk.Orientation): number;
        /**
         * Gets the size request that was explicitly set for the widget using
         * gtk_widget_set_size_request().
         *
         * A value of -1 stored in `width` or `height` indicates that that
         * dimension has not been set explicitly and the natural requisition
         * of the widget will be used instead. See
         * [method`Gtk`.Widget.set_size_request]. To get the size a widget will
         * actually request, call [method`Gtk`.Widget.measure] instead of
         * this function.
         */
        get_size_request(): [number, number];
        /**
         * Returns the widget state as a flag set.
         *
         * It is worth mentioning that the effective %GTK_STATE_FLAG_INSENSITIVE
         * state will be returned, that is, also based on parent insensitivity,
         * even if `widget` itself is sensitive.
         *
         * Also note that if you are looking for a way to obtain the
         * [flags`Gtk`.StateFlags] to pass to a [class`Gtk`.StyleContext]
         * method, you should look at [method`Gtk`.StyleContext.get_state].
         * @returns The state flags for widget
         */
        get_state_flags(): Gtk.StateFlags;
        /**
         * Returns the style context associated to `widget`.
         *
         * The returned object is guaranteed to be the same
         * for the lifetime of `widget`.
         * @returns the widget’s `GtkStyleContext`
         */
        get_style_context(): Gtk.StyleContext;
        /**
         * Fetch an object build from the template XML for `widget_type` in
         * this `widget` instance.
         *
         * This will only report children which were previously declared
         * with [method`Gtk`.WidgetClass.bind_template_child_full] or one of its
         * variants.
         *
         * This function is only meant to be called for code which is private
         * to the `widget_type` which declared the child and is meant for language
         * bindings which cannot easily make use of the GObject structure offsets.
         * @param widget_type The `GType` to get a template child for
         * @param name The “id” of the child defined in the template XML
         * @returns The object built in the template XML with   the id @name
         */
        get_template_child<T = GObject.Object>(widget_type: GObject.GType, name: string): T;
        /**
         * Gets the contents of the tooltip for `widget`.
         *
         * If the tooltip has not been set using
         * [method`Gtk`.Widget.set_tooltip_markup], this
         * function returns %NULL.
         * @returns the tooltip text
         */
        get_tooltip_markup(): string | null;
        /**
         * Gets the contents of the tooltip for `widget`.
         *
         * If the `widget'`s tooltip was set using
         * [method`Gtk`.Widget.set_tooltip_markup],
         * this function will return the escaped text.
         * @returns the tooltip text
         */
        get_tooltip_text(): string | null;
        /**
         * Gets the vertical alignment of `widget`.
         * @returns the vertical alignment of @widget
         */
        get_valign(): Gtk.Align;
        /**
         * Gets whether the widget would like any available extra vertical
         * space.
         *
         * See [method`Gtk`.Widget.get_hexpand] for more detail.
         * @returns whether vexpand flag is set
         */
        get_vexpand(): boolean;
        /**
         * Gets whether gtk_widget_set_vexpand() has been used to
         * explicitly set the expand flag on this widget.
         *
         * See [method`Gtk`.Widget.get_hexpand_set] for more detail.
         * @returns whether vexpand has been explicitly set
         */
        get_vexpand_set(): boolean;
        /**
         * Determines whether the widget is visible.
         *
         * If you want to take into account whether the widget’s
         * parent is also marked as visible, use
         * [method`Gtk`.Widget.is_visible] instead.
         *
         * This function does not check if the widget is
         * obscured in any way.
         *
         * See [method`Gtk`.Widget.set_visible].
         * @returns %TRUE if the widget is visible
         */
        get_visible(): boolean;
        /**
         * Returns the content width of the widget.
         *
         * This function returns the width passed to its
         * size-allocate implementation, which is the width you
         * should be using in [vfunc`Gtk`.Widget.snapshot].
         *
         * For pointer events, see [method`Gtk`.Widget.contains].
         *
         * To learn more about widget sizes, see the coordinate
         * system [overview](coordinates.html).
         * @returns The width of @widget
         */
        get_width(): number;
        /**
         * Causes `widget` to have the keyboard focus for the `GtkWindow` it's inside.
         *
         * If `widget` is not focusable, or its [vfunc`Gtk`.Widget.grab_focus]
         * implementation cannot transfer the focus to a descendant of `widget`
         * that is focusable, it will not take focus and %FALSE will be returned.
         *
         * Calling [method`Gtk`.Widget.grab_focus] on an already focused widget
         * is allowed, should not have an effect, and return %TRUE.
         * @returns %TRUE if focus is now inside @widget.
         */
        grab_focus(): boolean;
        /**
         * Returns whether `css_class` is currently applied to `widget`.
         * @param css_class A style class, without the leading '.'   used for notation of style classes
         * @returns %TRUE if @css_class is currently applied to @widget,   %FALSE otherwise.
         */
        has_css_class(css_class: string): boolean;
        /**
         * Determines if the widget should show a visible indication that
         * it has the global input focus.
         *
         * This is a convenience function that takes into account whether
         * focus indication should currently be shown in the toplevel window
         * of `widget`. See [method`Gtk`.Window.get_focus_visible] for more
         * information about focus indication.
         *
         * To find out if the widget has the global input focus, use
         * [method`Gtk`.Widget.has_focus].
         * @returns %TRUE if the widget should display a “focus rectangle”
         */
        has_visible_focus(): boolean;
        /**
         * Reverses the effects of gtk_widget_show().
         *
         * This is causing the widget to be hidden (invisible to the user).
         */
        hide(): void;
        /**
         * Returns whether the widget is currently being destroyed.
         *
         * This information can sometimes be used to avoid doing
         * unnecessary work.
         * @returns %TRUE if @widget is being destroyed
         */
        in_destruction(): boolean;
        /**
         * Creates and initializes child widgets defined in templates.
         *
         * This function must be called in the instance initializer
         * for any class which assigned itself a template using
         * [method`Gtk`.WidgetClass.set_template].
         *
         * It is important to call this function in the instance initializer
         * of a `GtkWidget` subclass and not in `GObject.constructed()` or
         * `GObject.constructor()` for two reasons:
         *
         *  - derived widgets will assume that the composite widgets
         *    defined by its parent classes have been created in their
         *    relative instance initializers
         *  - when calling `g_object_new()` on a widget with composite templates,
         *    it’s important to build the composite widgets before the construct
         *    properties are set. Properties passed to `g_object_new()` should
         *    take precedence over properties set in the private template XML
         *
         * A good rule of thumb is to call this function as the first thing in
         * an instance initialization function.
         */
        init_template(): void;
        /**
         * Inserts `group` into `widget`.
         *
         * Children of `widget` that implement [iface`Gtk`.Actionable] can
         * then be associated with actions in `group` by setting their
         * “action-name” to `prefix`.`action-name`.
         *
         * Note that inheritance is defined for individual actions. I.e.
         * even if you insert a group with prefix `prefix,` actions with
         * the same prefix will still be inherited from the parent, unless
         * the group contains an action with the same name.
         *
         * If `group` is %NULL, a previously inserted group for `name` is
         * removed from `widget`.
         * @param name the prefix for actions in @group
         * @param group a `GActionGroup`, or %NULL to remove   the previously inserted group for @name
         */
        insert_action_group(name: string, group?: Gio.ActionGroup | null): void;
        /**
         * Inserts `widget` into the child widget list of `parent`.
         *
         * It will be placed after `previous_sibling,` or at the beginning if
         * `previous_sibling` is %NULL.
         *
         * After calling this function, `gtk_widget_get_prev_sibling(widget)`
         * will return `previous_sibling`.
         *
         * If `parent` is already set as the parent widget of `widget,` this
         * function can also be used to reorder `widget` in the child widget
         * list of `parent`.
         *
         * This API is primarily meant for widget implementations; if you are
         * just using a widget, you *must* use its own API for adding children.
         * @param parent the parent `GtkWidget` to insert @widget into
         * @param previous_sibling the new previous sibling of @widget
         */
        insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void;
        /**
         * Inserts `widget` into the child widget list of `parent`.
         *
         * It will be placed before `next_sibling,` or at the end if
         * `next_sibling` is %NULL.
         *
         * After calling this function, `gtk_widget_get_next_sibling(widget)`
         * will return `next_sibling`.
         *
         * If `parent` is already set as the parent widget of `widget,` this function
         * can also be used to reorder `widget` in the child widget list of `parent`.
         *
         * This API is primarily meant for widget implementations; if you are
         * just using a widget, you *must* use its own API for adding children.
         * @param parent the parent `GtkWidget` to insert @widget into
         * @param next_sibling the new next sibling of @widget
         */
        insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void;
        /**
         * Determines whether `widget` is somewhere inside `ancestor,`
         * possibly with intermediate containers.
         * @param ancestor another `GtkWidget`
         * @returns %TRUE if @ancestor contains @widget as a child,   grandchild, great grandchild, etc.
         */
        is_ancestor(ancestor: Gtk.Widget): boolean;
        /**
         * Determines whether `widget` can be drawn to.
         *
         * A widget can be drawn if it is mapped and visible.
         * @returns %TRUE if @widget is drawable, %FALSE otherwise
         */
        is_drawable(): boolean;
        /**
         * Determines if the widget is the focus widget within its
         * toplevel.
         *
         * This does not mean that the [property`Gtk`.Widget:has-focus]
         * property is necessarily set; [property`Gtk`.Widget:has-focus]
         * will only be set if the toplevel widget additionally has the
         * global input focus.
         * @returns %TRUE if the widget is the focus widget.
         */
        is_focus(): boolean;
        /**
         * Returns the widget’s effective sensitivity.
         *
         * This means it is sensitive itself and also its
         * parent widget is sensitive.
         * @returns %TRUE if the widget is effectively sensitive
         */
        is_sensitive(): boolean;
        /**
         * Determines whether the widget and all its parents are marked as
         * visible.
         *
         * This function does not check if the widget is obscured in any way.
         *
         * See also [method`Gtk`.Widget.get_visible] and
         * [method`Gtk`.Widget.set_visible].
         * @returns %TRUE if the widget and all its parents are visible
         */
        is_visible(): boolean;
        /**
         * Emits the `::keynav-failed` signal on the widget.
         *
         * This function should be called whenever keyboard navigation
         * within a single widget hits a boundary.
         *
         * The return value of this function should be interpreted
         * in a way similar to the return value of
         * [method`Gtk`.Widget.child_focus]. When %TRUE is returned,
         * stay in the widget, the failed keyboard  navigation is OK
         * and/or there is nowhere we can/should move the focus to.
         * When %FALSE is returned, the caller should continue with
         * keyboard navigation outside the widget, e.g. by calling
         * [method`Gtk`.Widget.child_focus] on the widget’s toplevel.
         *
         * The default [signal`Gtk`.Widget::keynav-failed] handler returns
         * %FALSE for %GTK_DIR_TAB_FORWARD and %GTK_DIR_TAB_BACKWARD.
         * For the other values of `GtkDirectionType` it returns %TRUE.
         *
         * Whenever the default handler returns %TRUE, it also calls
         * [method`Gtk`.Widget.error_bell] to notify the user of the
         * failed keyboard navigation.
         *
         * A use case for providing an own implementation of ::keynav-failed
         * (either by connecting to it or by overriding it) would be a row of
         * [class`Gtk`.Entry] widgets where the user should be able to navigate
         * the entire row with the cursor keys, as e.g. known from user
         * interfaces that require entering license keys.
         * @param direction direction of focus movement
         * @returns %TRUE if stopping keyboard navigation is fine, %FALSE   if the emitting widget should try to handle the keyboard   navigation attempt in its parent container(s).
         */
        keynav_failed(direction: Gtk.DirectionType): boolean;
        /**
         * Returns the widgets for which this widget is the target of a
         * mnemonic.
         *
         * Typically, these widgets will be labels. See, for example,
         * [method`Gtk`.Label.set_mnemonic_widget].
         *
         * The widgets in the list are not individually referenced.
         * If you want to iterate through the list and perform actions
         * involving callbacks that might destroy the widgets, you
         * must call `g_list_foreach (result, (GFunc)g_object_ref, NULL)`
         * first, and then unref all the widgets afterwards.
         * @returns the list   of mnemonic labels; free this list with g_list_free() when you   are done with it.
         */
        list_mnemonic_labels(): Gtk.Widget[];
        /**
         * Causes a widget to be mapped if it isn’t already.
         *
         * This function is only for use in widget implementations.
         */
        map(): void;
        /**
         * Measures `widget` in the orientation `orientation` and for the given `for_size`.
         *
         * As an example, if `orientation` is %GTK_ORIENTATION_HORIZONTAL and `for_size`
         * is 300, this functions will compute the minimum and natural width of `widget`
         * if it is allocated at a height of 300 pixels.
         *
         * See [GtkWidget’s geometry management section](class.Widget.html#height-for-width-geometry-management) for
         * a more details on implementing `GtkWidgetClass.measure()`.
         * @param orientation the orientation to measure
         * @param for_size Size for the opposite of @orientation, i.e.   if @orientation is %GTK_ORIENTATION_HORIZONTAL, this is   the height the widget should be measured with. The %GTK_ORIENTATION_VERTICAL   case is analogous. This way, both height-for-width and width-for-height   requests can be implemented. If no size is known, -1 can be passed.
         */
        measure(orientation: Gtk.Orientation, for_size: number): [number, number, number, number];
        /**
         * Emits the ::mnemonic-activate signal.
         *
         * See [signal`Gtk`.Widget::mnemonic-activate].
         * @param group_cycling %TRUE if there are other widgets with the same mnemonic
         * @returns %TRUE if the signal has been handled
         */
        mnemonic_activate(group_cycling: boolean): boolean;
        /**
         * Returns a `GListModel` to track the children of `widget`.
         *
         * Calling this function will enable extra internal bookkeeping
         * to track children and emit signals on the returned listmodel.
         * It may slow down operations a lot.
         *
         * Applications should try hard to avoid calling this function
         * because of the slowdowns.
         * @returns a `GListModel` tracking @widget's children
         */
        observe_children(): Gio.ListModel;
        /**
         * Returns a `GListModel` to track the [class`Gtk`.EventController]s
         * of `widget`.
         *
         * Calling this function will enable extra internal bookkeeping
         * to track controllers and emit signals on the returned listmodel.
         * It may slow down operations a lot.
         *
         * Applications should try hard to avoid calling this function
         * because of the slowdowns.
         * @returns a `GListModel` tracking @widget's controllers
         */
        observe_controllers(): Gio.ListModel;
        /**
         * Finds the descendant of `widget` closest to the point (`x,` `y)`.
         *
         * The point must be given in widget coordinates, so (0, 0) is assumed
         * to be the top left of `widget'`s content area.
         *
         * Usually widgets will return %NULL if the given coordinate is not
         * contained in `widget` checked via [method`Gtk`.Widget.contains].
         * Otherwise they will recursively try to find a child that does
         * not return %NULL. Widgets are however free to customize their
         * picking algorithm.
         *
         * This function is used on the toplevel to determine the widget
         * below the mouse cursor for purposes of hover highlighting and
         * delivering events.
         * @param x X coordinate to test, relative to @widget's origin
         * @param y Y coordinate to test, relative to @widget's origin
         * @param flags Flags to influence what is picked
         * @returns The widget descendant at   the given point
         */
        pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null;
        /**
         * Flags the widget for a rerun of the [vfunc`Gtk`.Widget.size_allocate]
         * function.
         *
         * Use this function instead of [method`Gtk`.Widget.queue_resize]
         * when the `widget'`s size request didn't change but it wants to
         * reposition its contents.
         *
         * An example user of this function is [method`Gtk`.Widget.set_halign].
         *
         * This function is only for use in widget implementations.
         */
        queue_allocate(): void;
        /**
         * Schedules this widget to be redrawn in the paint phase
         * of the current or the next frame.
         *
         * This means `widget'`s [vfunc`Gtk`.Widget.snapshot]
         * implementation will be called.
         */
        queue_draw(): void;
        /**
         * Flags a widget to have its size renegotiated.
         *
         * This should be called when a widget for some reason has a new
         * size request. For example, when you change the text in a
         * [class`Gtk`.Label], the label queues a resize to ensure there’s
         * enough space for the new text.
         *
         * Note that you cannot call gtk_widget_queue_resize() on a widget
         * from inside its implementation of the [vfunc`Gtk`.Widget.size_allocate]
         * virtual method. Calls to gtk_widget_queue_resize() from inside
         * [vfunc`Gtk`.Widget.size_allocate] will be silently ignored.
         *
         * This function is only for use in widget implementations.
         */
        queue_resize(): void;
        /**
         * Removes `controller` from `widget,` so that it doesn't process
         * events anymore.
         *
         * It should not be used again.
         *
         * Widgets will remove all event controllers automatically when they
         * are destroyed, there is normally no need to call this function.
         * @param controller a `GtkEventController`
         */
        remove_controller(controller: Gtk.EventController): void;
        /**
         * Removes a style from `widget`.
         *
         * After this, the style of `widget` will stop matching for `css_class`.
         * @param css_class The style class to remove from @widget, without   the leading '.' used for notation of style classes
         */
        remove_css_class(css_class: string): void;
        /**
         * Removes a widget from the list of mnemonic labels for this widget.
         *
         * See [method`Gtk`.Widget.list_mnemonic_labels]. The widget must
         * have previously been added to the list with
         * [method`Gtk`.Widget.add_mnemonic_label].
         * @param label a `GtkWidget` that was previously set as a mnemonic   label for @widget with [method@Gtk.Widget.add_mnemonic_label]
         */
        remove_mnemonic_label(label: Gtk.Widget): void;
        /**
         * Removes a tick callback previously registered with
         * gtk_widget_add_tick_callback().
         * @param id an id returned by [method@Gtk.Widget.add_tick_callback]
         */
        remove_tick_callback(id: number): void;
        /**
         * Specifies whether the input focus can enter the widget
         * or any of its children.
         *
         * Applications should set `can_focus` to %FALSE to mark a
         * widget as for pointer/touch use only.
         *
         * Note that having `can_focus` be %TRUE is only one of the
         * necessary conditions for being focusable. A widget must
         * also be sensitive and focusable and not have an ancestor
         * that is marked as not can-focus in order to receive input
         * focus.
         *
         * See [method`Gtk`.Widget.grab_focus] for actually setting
         * the input focus on a widget.
         * @param can_focus whether or not the input focus can enter   the widget or any of its children
         */
        set_can_focus(can_focus: boolean): void;
        /**
         * Sets whether `widget` can be the target of pointer events.
         * @param can_target whether this widget should be able to   receive pointer events
         */
        set_can_target(can_target: boolean): void;
        /**
         * Sets whether `widget` should be mapped along with its parent.
         *
         * The child visibility can be set for widget before it is added
         * to a container with [method`Gtk`.Widget.set_parent], to avoid
         * mapping children unnecessary before immediately unmapping them.
         * However it will be reset to its default state of %TRUE when the
         * widget is removed from a container.
         *
         * Note that changing the child visibility of a widget does not
         * queue a resize on the widget. Most of the time, the size of
         * a widget is computed from all visible children, whether or
         * not they are mapped. If this is not the case, the container
         * can queue a resize itself.
         *
         * This function is only useful for container implementations
         * and should never be called by an application.
         * @param child_visible if %TRUE, @widget should be mapped along   with its parent.
         */
        set_child_visible(child_visible: boolean): void;
        /**
         * Clear all style classes applied to `widget`
         * and replace them with `classes`.
         * @param classes %NULL-terminated list of style classes to apply to @widget.
         */
        set_css_classes(classes: string[]): void;
        /**
         * Sets the cursor to be shown when pointer devices point
         * towards `widget`.
         *
         * If the `cursor` is NULL, `widget` will use the cursor
         * inherited from the parent widget.
         * @param cursor the new cursor
         */
        set_cursor(cursor?: Gdk.Cursor | null): void;
        /**
         * Sets a named cursor to be shown when pointer devices point
         * towards `widget`.
         *
         * This is a utility function that creates a cursor via
         * [ctor`Gdk`.Cursor.new_from_name] and then sets it on `widget`
         * with [method`Gtk`.Widget.set_cursor]. See those functions for
         * details.
         *
         * On top of that, this function allows `name` to be %NULL, which
         * will do the same as calling [method`Gtk`.Widget.set_cursor]
         * with a %NULL cursor.
         * @param name The name of the cursor
         */
        set_cursor_from_name(name?: string | null): void;
        /**
         * Sets the reading direction on a particular widget.
         *
         * This direction controls the primary direction for widgets
         * containing text, and also the direction in which the children
         * of a container are packed. The ability to set the direction is
         * present in order so that correct localization into languages with
         * right-to-left reading directions can be done. Generally, applications
         * will let the default reading direction present, except for containers
         * where the containers are arranged in an order that is explicitly
         * visual rather than logical (such as buttons for text justification).
         *
         * If the direction is set to %GTK_TEXT_DIR_NONE, then the value
         * set by [func`Gtk`.Widget.set_default_direction] will be used.
         * @param dir the new direction
         */
        set_direction(dir: Gtk.TextDirection): void;
        /**
         * Set `child` as the current focus child of `widget`.
         *
         * This function is only suitable for widget implementations.
         * If you want a certain widget to get the input focus, call
         * [method`Gtk`.Widget.grab_focus] on it.
         * @param child a direct child widget of @widget or %NULL   to unset the focus child of @widget
         */
        set_focus_child(child?: Gtk.Widget | null): void;
        /**
         * Sets whether the widget should grab focus when it is clicked
         * with the mouse.
         *
         * Making mouse clicks not grab focus is useful in places like
         * toolbars where you don’t want the keyboard focus removed from
         * the main area of the application.
         * @param focus_on_click whether the widget should grab focus when clicked   with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
        /**
         * Specifies whether `widget` can own the input focus.
         *
         * Widget implementations should set `focusable` to %TRUE in
         * their init() function if they want to receive keyboard input.
         *
         * Note that having `focusable` be %TRUE is only one of the
         * necessary conditions for being focusable. A widget must
         * also be sensitive and can-focus and not have an ancestor
         * that is marked as not can-focus in order to receive input
         * focus.
         *
         * See [method`Gtk`.Widget.grab_focus] for actually setting
         * the input focus on a widget.
         * @param focusable whether or not @widget can own the input focus
         */
        set_focusable(focusable: boolean): void;
        /**
         * Sets the font map to use for Pango rendering.
         *
         * The font map is the object that is used to look up fonts.
         * Setting a custom font map can be useful in special situations,
         * e.g. when you need to add application-specific fonts to the set
         * of available fonts.
         *
         * When not set, the widget will inherit the font map from its parent.
         * @param font_map a `PangoFontMap`, or %NULL to unset any   previously set font map
         */
        set_font_map(font_map?: Pango.FontMap | null): void;
        /**
         * Sets the `cairo_font_options_t` used for Pango rendering
         * in this widget.
         *
         * When not set, the default font options for the `GdkDisplay`
         * will be used.
         * @param options a `cairo_font_options_t`   to unset any previously set default font options
         */
        set_font_options(options?: cairo.FontOptions | null): void;
        /**
         * Sets the horizontal alignment of `widget`.
         * @param align the horizontal alignment
         */
        set_halign(align: Gtk.Align): void;
        /**
         * Sets the `has-tooltip` property on `widget` to `has_tooltip`.
         * @param has_tooltip whether or not @widget has a tooltip.
         */
        set_has_tooltip(has_tooltip: boolean): void;
        /**
         * Sets whether the widget would like any available extra horizontal
         * space.
         *
         * When a user resizes a `GtkWindow`, widgets with expand=TRUE
         * generally receive the extra space. For example, a list or
         * scrollable area or document in your window would often be set to
         * expand.
         *
         * Call this function to set the expand flag if you would like your
         * widget to become larger horizontally when the window has extra
         * room.
         *
         * By default, widgets automatically expand if any of their children
         * want to expand. (To see if a widget will automatically expand given
         * its current children and state, call [method`Gtk`.Widget.compute_expand].
         * A container can decide how the expandability of children affects the
         * expansion of the container by overriding the compute_expand virtual
         * method on `GtkWidget`.).
         *
         * Setting hexpand explicitly with this function will override the
         * automatic expand behavior.
         *
         * This function forces the widget to expand or not to expand,
         * regardless of children.  The override occurs because
         * [method`Gtk`.Widget.set_hexpand] sets the hexpand-set property (see
         * [method`Gtk`.Widget.set_hexpand_set]) which causes the widget’s hexpand
         * value to be used, rather than looking at children and widget state.
         * @param expand whether to expand
         */
        set_hexpand(expand: boolean): void;
        /**
         * Sets whether the hexpand flag will be used.
         *
         * The [property`Gtk`.Widget:hexpand-set] property will be set
         * automatically when you call [method`Gtk`.Widget.set_hexpand]
         * to set hexpand, so the most likely reason to use this function
         * would be to unset an explicit expand flag.
         *
         * If hexpand is set, then it overrides any computed
         * expand value based on child widgets. If hexpand is not
         * set, then the expand value depends on whether any
         * children of the widget would like to expand.
         *
         * There are few reasons to use this function, but it’s here
         * for completeness and consistency.
         * @param set value for hexpand-set property
         */
        set_hexpand_set(set: boolean): void;
        /**
         * Sets the layout manager delegate instance that provides an
         * implementation for measuring and allocating the children of `widget`.
         * @param layout_manager a `GtkLayoutManager`
         */
        set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void;
        /**
         * Sets the bottom margin of `widget`.
         * @param margin the bottom margin
         */
        set_margin_bottom(margin: number): void;
        /**
         * Sets the end margin of `widget`.
         * @param margin the end margin
         */
        set_margin_end(margin: number): void;
        /**
         * Sets the start margin of `widget`.
         * @param margin the start margin
         */
        set_margin_start(margin: number): void;
        /**
         * Sets the top margin of `widget`.
         * @param margin the top margin
         */
        set_margin_top(margin: number): void;
        /**
         * Sets a widgets name.
         *
         * Setting a name allows you to refer to the widget from a
         * CSS file. You can apply a style to widgets with a particular name
         * in the CSS file. See the documentation for the CSS syntax (on the
         * same page as the docs for [class`Gtk`.StyleContext].
         *
         * Note that the CSS syntax has certain special characters to delimit
         * and represent elements in a selector (period, #, >, *...), so using
         * these will make your widget impossible to match by name. Any combination
         * of alphanumeric symbols, dashes and underscores will suffice.
         * @param name name for the widget
         */
        set_name(name: string): void;
        /**
         * Request the `widget` to be rendered partially transparent.
         *
         * An opacity of 0 is fully transparent and an opacity of 1
         * is fully opaque.
         *
         * Opacity works on both toplevel widgets and child widgets, although
         * there are some limitations: For toplevel widgets, applying opacity
         * depends on the capabilities of the windowing system. On X11, this
         * has any effect only on X displays with a compositing manager,
         * see gdk_display_is_composited(). On Windows and Wayland it should
         * always work, although setting a window’s opacity after the window
         * has been shown may cause some flicker.
         *
         * Note that the opacity is inherited through inclusion — if you set
         * a toplevel to be partially translucent, all of its content will
         * appear translucent, since it is ultimatively rendered on that
         * toplevel. The opacity value itself is not inherited by child
         * widgets (since that would make widgets deeper in the hierarchy
         * progressively more translucent). As a consequence, [class`Gtk`.Popover]s
         * and other [iface`Gtk`.Native] widgets with their own surface will use their
         * own opacity value, and thus by default appear non-translucent,
         * even if they are attached to a toplevel that is translucent.
         * @param opacity desired opacity, between 0 and 1
         */
        set_opacity(opacity: number): void;
        /**
         * Sets how `widget` treats content that is drawn outside the
         * widget's content area.
         *
         * See the definition of [enum`Gtk`.Overflow] for details.
         *
         * This setting is provided for widget implementations and
         * should not be used by application code.
         *
         * The default value is %GTK_OVERFLOW_VISIBLE.
         * @param overflow desired overflow
         */
        set_overflow(overflow: Gtk.Overflow): void;
        /**
         * Sets `parent` as the parent widget of `widget`.
         *
         * This takes care of details such as updating the state and style
         * of the child to reflect its new location and resizing the parent.
         * The opposite function is [method`Gtk`.Widget.unparent].
         *
         * This function is useful only when implementing subclasses of
         * `GtkWidget`.
         * @param parent parent widget
         */
        set_parent(parent: Gtk.Widget): void;
        /**
         * Specifies whether `widget` will be treated as the default
         * widget within its toplevel when it has the focus, even if
         * another widget is the default.
         * @param receives_default whether or not @widget can be a default widget.
         */
        set_receives_default(receives_default: boolean): void;
        /**
         * Sets the sensitivity of a widget.
         *
         * A widget is sensitive if the user can interact with it.
         * Insensitive widgets are “grayed out” and the user can’t
         * interact with them. Insensitive widgets are known as
         * “inactive”, “disabled”, or “ghosted” in some other toolkits.
         * @param sensitive %TRUE to make the widget sensitive
         */
        set_sensitive(sensitive: boolean): void;
        /**
         * Sets the minimum size of a widget.
         *
         * That is, the widget’s size request will be at least `width`
         * by `height`. You can use this function to force a widget to
         * be larger than it normally would be.
         *
         * In most cases, [method`Gtk`.Window.set_default_size] is a better
         * choice for toplevel windows than this function; setting the default
         * size will still allow users to shrink the window. Setting the size
         * request will force them to leave the window at least as large as
         * the size request.
         *
         * Note the inherent danger of setting any fixed size - themes,
         * translations into other languages, different fonts, and user action
         * can all change the appropriate size for a given widget. So, it's
         * basically impossible to hardcode a size that will always be
         * correct.
         *
         * The size request of a widget is the smallest size a widget can
         * accept while still functioning well and drawing itself correctly.
         * However in some strange cases a widget may be allocated less than
         * its requested size, and in many cases a widget may be allocated more
         * space than it requested.
         *
         * If the size request in a given direction is -1 (unset), then
         * the “natural” size request of the widget will be used instead.
         *
         * The size request set here does not include any margin from the
         * properties
         * [property`Gtk`.Widget:margin-start],
         * [property`Gtk`.Widget:margin-end],
         * [property`Gtk`.Widget:margin-top], and
         * [property`Gtk`.Widget:margin-bottom], but it does include pretty
         * much all other padding or border properties set by any subclass
         * of `GtkWidget`.
         * @param width width @widget should request, or -1 to unset
         * @param height height @widget should request, or -1 to unset
         */
        set_size_request(width: number, height: number): void;
        /**
         * Turns on flag values in the current widget state.
         *
         * Typical widget states are insensitive, prelighted, etc.
         *
         * This function accepts the values %GTK_STATE_FLAG_DIR_LTR and
         * %GTK_STATE_FLAG_DIR_RTL but ignores them. If you want to set
         * the widget's direction, use [method`Gtk`.Widget.set_direction].
         *
         * This function is for use in widget implementations.
         * @param flags State flags to turn on
         * @param clear Whether to clear state before turning on @flags
         */
        set_state_flags(flags: Gtk.StateFlags, clear: boolean): void;
        /**
         * Sets `markup` as the contents of the tooltip, which is marked
         * up with Pango markup.
         *
         * This function will take care of setting the
         * [property`Gtk`.Widget:has-tooltip] as a side effect, and of the
         * default handler for the [signal`Gtk`.Widget::query-tooltip] signal.
         *
         * See also [method`Gtk`.Tooltip.set_markup].
         * @param markup the contents of the tooltip for @widget
         */
        set_tooltip_markup(markup?: string | null): void;
        /**
         * Sets `text` as the contents of the tooltip.
         *
         * If `text` contains any markup, it will be escaped.
         *
         * This function will take care of setting
         * [property`Gtk`.Widget:has-tooltip] as a side effect,
         * and of the default handler for the
         * [signal`Gtk`.Widget::query-tooltip] signal.
         *
         * See also [method`Gtk`.Tooltip.set_text].
         * @param text the contents of the tooltip for @widget
         */
        set_tooltip_text(text?: string | null): void;
        /**
         * Sets the vertical alignment of `widget`.
         * @param align the vertical alignment
         */
        set_valign(align: Gtk.Align): void;
        /**
         * Sets whether the widget would like any available extra vertical
         * space.
         *
         * See [method`Gtk`.Widget.set_hexpand] for more detail.
         * @param expand whether to expand
         */
        set_vexpand(expand: boolean): void;
        /**
         * Sets whether the vexpand flag will be used.
         *
         * See [method`Gtk`.Widget.set_hexpand_set] for more detail.
         * @param set value for vexpand-set property
         */
        set_vexpand_set(set: boolean): void;
        /**
         * Sets the visibility state of `widget`.
         *
         * Note that setting this to %TRUE doesn’t mean the widget is
         * actually viewable, see [method`Gtk`.Widget.get_visible].
         * @param visible whether the widget should be shown or not
         */
        set_visible(visible: boolean): void;
        /**
         * Returns whether `widget` should contribute to
         * the measuring and allocation of its parent.
         *
         * This is %FALSE for invisible children, but also
         * for children that have their own surface.
         * @returns %TRUE if child should be included in   measuring and allocating
         */
        should_layout(): boolean;
        /**
         * Flags a widget to be displayed.
         *
         * Any widget that isn’t shown will not appear on the screen.
         *
         * Remember that you have to show the containers containing a widget,
         * in addition to the widget itself, before it will appear onscreen.
         *
         * When a toplevel container is shown, it is immediately realized and
         * mapped; other shown widgets are realized and mapped when their
         * toplevel container is realized and mapped.
         */
        show(): void;
        /**
         * Allocates widget with a transformation that translates
         * the origin to the position in `allocation`.
         *
         * This is a simple form of [method`Gtk`.Widget.allocate].
         * @param allocation position and size to be allocated to @widget
         * @param baseline The baseline of the child, or -1
         */
        size_allocate(allocation: Gtk.Allocation, baseline: number): void;
        /**
         * Snapshot the a child of `widget`.
         *
         * When a widget receives a call to the snapshot function,
         * it must send synthetic [vfunc`Gtk`.Widget.snapshot] calls
         * to all children. This function provides a convenient way
         * of doing this. A widget, when it receives a call to its
         * [vfunc`Gtk`.Widget.snapshot] function, calls
         * gtk_widget_snapshot_child() once for each child, passing in
         * the `snapshot` the widget received.
         *
         * gtk_widget_snapshot_child() takes care of translating the origin of
         * `snapshot,` and deciding whether the child needs to be snapshot.
         *
         * This function does nothing for children that implement `GtkNative`.
         * @param child a child of @widget
         * @param snapshot `GtkSnapshot` as passed to the widget. In particular, no   calls to gtk_snapshot_translate() or other transform calls should   have been made.
         */
        snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void;
        /**
         * Translate coordinates relative to `src_widget’`s allocation
         * to coordinates relative to `dest_widget’`s allocations.
         *
         * In order to perform this operation, both widget must share
         * a common ancestor.
         * @param dest_widget a `GtkWidget`
         * @param src_x X position relative to @src_widget
         * @param src_y Y position relative to @src_widget
         * @returns %FALSE if @src_widget and @dest_widget have no common   ancestor. In this case, 0 is stored in *@dest_x and *@dest_y.   Otherwise %TRUE.
         */
        translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [boolean, number, number];
        /**
         * Triggers a tooltip query on the display where the toplevel
         * of `widget` is located.
         */
        trigger_tooltip_query(): void;
        /**
         * Causes a widget to be unmapped if it’s currently mapped.
         *
         * This function is only for use in widget implementations.
         */
        unmap(): void;
        /**
         * Dissociate `widget` from its parent.
         *
         * This function is only for use in widget implementations,
         * typically in dispose.
         */
        unparent(): void;
        /**
         * Turns off flag values for the current widget state.
         *
         * See [method`Gtk`.Widget.set_state_flags].
         *
         * This function is for use in widget implementations.
         * @param flags State flags to turn off
         */
        unset_state_flags(flags: Gtk.StateFlags): void;
        /**
         * Computes whether a container should give this
         *   widget extra space when possible.
         * @param hexpand_p
         * @param vexpand_p
         */
        vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void;
        /**
         * Tests if the point at (`x,` `y)` is contained in `widget`.
         *
         * The coordinates for (`x,` `y)` must be in widget coordinates, so
         * (0, 0) is assumed to be the top left of `widget'`s content area.
         * @param x X coordinate to test, relative to @widget's origin
         * @param y Y coordinate to test, relative to @widget's origin
         */
        vfunc_contains(x: number, y: number): boolean;
        /**
         * Vfunc called when the CSS used by widget was changed. Widgets
         *   should then discard their caches that depend on CSS and queue resizes or
         *   redraws accordingly. The default implementation will take care of this for
         *   all the default CSS properties, so implementations must chain up.
         * @param change
         */
        vfunc_css_changed(change: Gtk.CssStyleChange): void;
        /**
         * Signal emitted when the text direction of a
         *   widget changes.
         * @param previous_direction
         */
        vfunc_direction_changed(previous_direction: Gtk.TextDirection): void;
        /**
         * Vfunc for gtk_widget_child_focus()
         * @param direction
         */
        vfunc_focus(direction: Gtk.DirectionType): boolean;
        /**
         * Gets whether the widget prefers a height-for-width layout
         * or a width-for-height layout.
         *
         * Single-child widgets generally propagate the preference of
         * their child, more complex widgets need to request something
         * either in context of their children or in context of their
         * allocation capabilities.
         */
        vfunc_get_request_mode(): Gtk.SizeRequestMode;
        /**
         * Causes `widget` to have the keyboard focus for the `GtkWindow` it's inside.
         *
         * If `widget` is not focusable, or its [vfunc`Gtk`.Widget.grab_focus]
         * implementation cannot transfer the focus to a descendant of `widget`
         * that is focusable, it will not take focus and %FALSE will be returned.
         *
         * Calling [method`Gtk`.Widget.grab_focus] on an already focused widget
         * is allowed, should not have an effect, and return %TRUE.
         */
        vfunc_grab_focus(): boolean;
        /**
         * Reverses the effects of gtk_widget_show().
         *
         * This is causing the widget to be hidden (invisible to the user).
         */
        vfunc_hide(): void;
        /**
         * Emits the `::keynav-failed` signal on the widget.
         *
         * This function should be called whenever keyboard navigation
         * within a single widget hits a boundary.
         *
         * The return value of this function should be interpreted
         * in a way similar to the return value of
         * [method`Gtk`.Widget.child_focus]. When %TRUE is returned,
         * stay in the widget, the failed keyboard  navigation is OK
         * and/or there is nowhere we can/should move the focus to.
         * When %FALSE is returned, the caller should continue with
         * keyboard navigation outside the widget, e.g. by calling
         * [method`Gtk`.Widget.child_focus] on the widget’s toplevel.
         *
         * The default [signal`Gtk`.Widget::keynav-failed] handler returns
         * %FALSE for %GTK_DIR_TAB_FORWARD and %GTK_DIR_TAB_BACKWARD.
         * For the other values of `GtkDirectionType` it returns %TRUE.
         *
         * Whenever the default handler returns %TRUE, it also calls
         * [method`Gtk`.Widget.error_bell] to notify the user of the
         * failed keyboard navigation.
         *
         * A use case for providing an own implementation of ::keynav-failed
         * (either by connecting to it or by overriding it) would be a row of
         * [class`Gtk`.Entry] widgets where the user should be able to navigate
         * the entire row with the cursor keys, as e.g. known from user
         * interfaces that require entering license keys.
         * @param direction direction of focus movement
         */
        vfunc_keynav_failed(direction: Gtk.DirectionType): boolean;
        /**
         * Causes a widget to be mapped if it isn’t already.
         *
         * This function is only for use in widget implementations.
         */
        vfunc_map(): void;
        /**
         * Measures `widget` in the orientation `orientation` and for the given `for_size`.
         *
         * As an example, if `orientation` is %GTK_ORIENTATION_HORIZONTAL and `for_size`
         * is 300, this functions will compute the minimum and natural width of `widget`
         * if it is allocated at a height of 300 pixels.
         *
         * See [GtkWidget’s geometry management section](class.Widget.html#height-for-width-geometry-management) for
         * a more details on implementing `GtkWidgetClass.measure()`.
         * @param orientation the orientation to measure
         * @param for_size Size for the opposite of @orientation, i.e.   if @orientation is %GTK_ORIENTATION_HORIZONTAL, this is   the height the widget should be measured with. The %GTK_ORIENTATION_VERTICAL   case is analogous. This way, both height-for-width and width-for-height   requests can be implemented. If no size is known, -1 can be passed.
         */
        vfunc_measure(orientation: Gtk.Orientation, for_size: number): [number, number, number, number];
        /**
         * Emits the ::mnemonic-activate signal.
         *
         * See [signal`Gtk`.Widget::mnemonic-activate].
         * @param group_cycling %TRUE if there are other widgets with the same mnemonic
         */
        vfunc_mnemonic_activate(group_cycling: boolean): boolean;
        /**
         * Signal emitted when a change of focus is requested
         * @param direction
         */
        vfunc_move_focus(direction: Gtk.DirectionType): void;
        /**
         * Signal emitted when “has-tooltip” is %TRUE and the
         *   hover timeout has expired with the cursor hovering “above”
         *   widget; or emitted when widget got focus in keyboard mode.
         * @param x
         * @param y
         * @param keyboard_tooltip
         * @param tooltip
         */
        vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean;
        /**
         * Creates the GDK resources associated with a widget.
         *
         * Normally realization happens implicitly; if you show a widget
         * and all its parent containers, then the widget will be realized
         * and mapped automatically.
         *
         * Realizing a widget requires all the widget’s parent widgets to be
         * realized; calling this function realizes the widget’s parents
         * in addition to `widget` itself. If a widget is not yet inside a
         * toplevel window when you realize it, bad things will happen.
         *
         * This function is primarily used in widget implementations, and
         * isn’t very useful otherwise. Many times when you think you might
         * need it, a better approach is to connect to a signal that will be
         * called after the widget is realized automatically, such as
         * [signal`Gtk`.Widget::realize].
         */
        vfunc_realize(): void;
        /**
         * Called when the widget gets added to a `GtkRoot` widget. Must
         *   chain up
         */
        vfunc_root(): void;
        /**
         * Set `child` as the current focus child of `widget`.
         *
         * This function is only suitable for widget implementations.
         * If you want a certain widget to get the input focus, call
         * [method`Gtk`.Widget.grab_focus] on it.
         * @param child a direct child widget of @widget or %NULL   to unset the focus child of @widget
         */
        vfunc_set_focus_child(child?: Gtk.Widget | null): void;
        /**
         * Flags a widget to be displayed.
         *
         * Any widget that isn’t shown will not appear on the screen.
         *
         * Remember that you have to show the containers containing a widget,
         * in addition to the widget itself, before it will appear onscreen.
         *
         * When a toplevel container is shown, it is immediately realized and
         * mapped; other shown widgets are realized and mapped when their
         * toplevel container is realized and mapped.
         */
        vfunc_show(): void;
        /**
         * Called to set the allocation, if the widget does
         *   not have a layout manager.
         * @param width
         * @param height
         * @param baseline
         */
        vfunc_size_allocate(width: number, height: number, baseline: number): void;
        /**
         * Vfunc called when a new snapshot of the widget has to be taken.
         * @param snapshot
         */
        vfunc_snapshot(snapshot: Gtk.Snapshot): void;
        /**
         * Signal emitted when the widget state changes,
         *   see gtk_widget_get_state_flags().
         * @param previous_state_flags
         */
        vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void;
        /**
         * Emitted when a system setting was changed. Must chain up.
         * @param settings
         */
        vfunc_system_setting_changed(settings: Gtk.SystemSetting): void;
        /**
         * Causes a widget to be unmapped if it’s currently mapped.
         *
         * This function is only for use in widget implementations.
         */
        vfunc_unmap(): void;
        /**
         * Causes a widget to be unrealized (frees all GDK resources
         * associated with the widget).
         *
         * This function is only useful in widget implementations.
         */
        vfunc_unrealize(): void;
        /**
         * Called when the widget is about to be removed from its
         *   `GtkRoot` widget. Must chain up
         */
        vfunc_unroot(): void;
    }

    module Led {
        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Widget.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {
            segment_height: number;
            segmentHeight: number;
            segment_width: number;
            segmentWidth: number;
        }
    }

    class Led extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<Led>;

        // Own properties of AgsGui.Led

        /**
         * The led's segment height.
         */
        get segment_height(): number;
        set segment_height(val: number);
        /**
         * The led's segment height.
         */
        get segmentHeight(): number;
        set segmentHeight(val: number);
        /**
         * The led's segment width.
         */
        get segment_width(): number;
        set segment_width(val: number);
        /**
         * The led's segment width.
         */
        get segmentWidth(): number;
        set segmentWidth(val: number);

        // Own fields of AgsGui.Led

        widget: Gtk.Widget;
        active: boolean;

        // Constructors of AgsGui.Led

        constructor(properties?: Partial<Led.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](segment_width: number, segment_height: number): Led;

        // Own methods of AgsGui.Led

        /**
         * Get segment height.
         * @returns the segment height
         */
        get_segment_height(): number;
        /**
         * Get segment width.
         * @returns the segment width
         */
        get_segment_width(): number;
        /**
         * Set `led` to active state.
         * @returns %TRUE if led active, otherwise %FALSE
         */
        is_active(): boolean;
        /**
         * Set `led` active by `active`.
         * @param active %TRUE if active, otherwise %FALSE
         */
        set_active(active: boolean): void;
        /**
         * Set segment height.
         * @param segment_height the segment height
         */
        set_segment_height(segment_height: number): void;
        /**
         * Set segment width.
         * @param segment_width the segment width
         */
        set_segment_width(segment_width: number): void;

        // Inherited properties
        /**
         * The accessible role of the given `GtkAccessible` implementation.
         *
         * The accessible role cannot be changed once set.
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);
        /**
         * The accessible role of the given `GtkAccessible` implementation.
         *
         * The accessible role cannot be changed once set.
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

        // Inherited methods
        /**
         * Requests the user's screen reader to announce the given message.
         *
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         *
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;
        /**
         * Retrieves the accessible implementation for the given `GtkAccessible`.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Query a platform state, such as focus.
         *
         * See gtk_accessible_platform_changed().
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for `GtkText` wrappers.
         * @param state platform state to query
         * @returns the value of @state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Resets the accessible `property` to its default value.
         * @param property a `GtkAccessibleProperty`
         */
        reset_property(property: Gtk.AccessibleProperty): void;
        /**
         * Resets the accessible `relation` to its default value.
         * @param relation a `GtkAccessibleRelation`
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;
        /**
         * Resets the accessible `state` to its default value.
         * @param state a `GtkAccessibleState`
         */
        reset_state(state: Gtk.AccessibleState): void;
        /**
         * Sets the parent and sibling of an accessible object.
         *
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the `GtkAccessible`
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
        /**
         * Updates the next accessible sibling of `self`.
         *
         * That might be useful when a new child of a custom `GtkAccessible`
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
        /**
         * Updates an array of accessible properties.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * property change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param properties an array of `GtkAccessibleProperty`
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible relations.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * relation change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param relations an array of `GtkAccessibleRelation`
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible states.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * state change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param states an array of `GtkAccessibleState`
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the accessible implementation for the given `GtkAccessible`.
         */
        vfunc_get_at_context(): Gtk.ATContext | null;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Query a platform state, such as focus.
         *
         * See gtk_accessible_platform_changed().
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for `GtkText` wrappers.
         * @param state platform state to query
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Gets the ID of the `buildable` object.
         *
         * `GtkBuilder` sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a `GtkBuilder`
         * @param child child to add
         * @param type kind of child or %NULL
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
        /**
         * Similar to gtk_buildable_parser_finished() but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a `GtkBuilder`
         * @param child child object or %NULL for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         */
        vfunc_custom_finished(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder `GtkBuilder` used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        vfunc_custom_tag_end(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called for each unknown element under `<child>`.
         * @param builder a `GtkBuilder` used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         */
        vfunc_custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, Gtk.BuildableParser, any];
        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         */
        vfunc_get_id(): string;
        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a `GtkBuilder`
         * @param childname name of child
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. `GtkWindow` sets
         *  the `GtkWidget:visible` property here.
         * @param builder
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;
        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, g_object_set_property()
         *  is used by default. `GtkWindow` implements this to delay showing itself
         *  (i.e. setting the [property`Gtk`.Widget:visible] property) until the whole
         *  interface is created.
         * @param builder
         * @param name
         * @param value
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
        /**
         * Stores the id attribute given in the `GtkBuilder` UI definition.
         *   `GtkWidget` stores the name as object data. Implement this method if your
         *   object has some notion of “ID” and it makes sense to map the XML id
         *   attribute to it.
         * @param id
         */
        vfunc_set_id(id: string): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module LedArray {
        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Box.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps,
                Gtk.Orientable.ConstructorProps {
            led_count: number;
            ledCount: number;
            segment_height: number;
            segmentHeight: number;
            segment_width: number;
            segmentWidth: number;
        }
    }

    class LedArray extends Gtk.Box implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<LedArray>;

        // Own properties of AgsGui.LedArray

        /**
         * The count of leds available.
         */
        get led_count(): number;
        set led_count(val: number);
        /**
         * The count of leds available.
         */
        get ledCount(): number;
        set ledCount(val: number);
        /**
         * The segment height of one led.
         */
        get segment_height(): number;
        set segment_height(val: number);
        /**
         * The segment height of one led.
         */
        get segmentHeight(): number;
        set segmentHeight(val: number);
        /**
         * The segment width of one led.
         */
        get segment_width(): number;
        set segment_width(val: number);
        /**
         * The segment width of one led.
         */
        get segmentWidth(): number;
        set segmentWidth(val: number);

        // Own fields of AgsGui.LedArray

        box: Gtk.Box;
        led: Led;

        // Constructors of AgsGui.LedArray

        constructor(properties?: Partial<LedArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            orientation: Gtk.Orientation,
            segment_width: number,
            segment_height: number,
            led_count: number,
        ): LedArray;
        // Conflicted with Gtk.Box.new

        static ['new'](...args: never[]): any;

        // Own methods of AgsGui.LedArray

        /**
         * Get led count of `led_array`.
         * @returns the led count
         */
        get_led_count(): number;
        /**
         * Set led height of `led_array`.
         * @returns the led height
         */
        get_segment_height(): number;
        /**
         * Get led width of `led_array`.
         * @returns the led width
         */
        get_segment_width(): number;
        /**
         * Set led count of `led_array`.
         * @param led_count the led count
         */
        set_led_count(led_count: number): void;
        /**
         * Set `nth` led active.
         * @param nth the nth led
         */
        set_nth(nth: number): void;
        /**
         * Set led height of `led_array`.
         * @param segment_height the led height
         */
        set_segment_height(segment_height: number): void;
        /**
         * Set led width of `led_array`.
         * @param segment_width the led width
         */
        set_segment_width(segment_width: number): void;
        /**
         * Unset all led active.
         */
        unset_all(): void;

        // Inherited properties
        /**
         * The orientation of the orientable.
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        // Inherited methods
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the @orientable
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module Level {
        // Signal callback interfaces

        interface ValueChanged {
            (normalized_volume: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Widget.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps,
                Gtk.Orientable.ConstructorProps {
            data_format: number;
            dataFormat: number;
            lower: number;
            normalized_volume: number;
            normalizedVolume: number;
            samplerate: number;
            upper: number;
        }
    }

    class Level extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<Level>;

        // Own properties of AgsGui.Level

        /**
         * The data format.
         */
        get data_format(): number;
        set data_format(val: number);
        /**
         * The data format.
         */
        get dataFormat(): number;
        set dataFormat(val: number);
        /**
         * The level's lower range.
         */
        get lower(): number;
        set lower(val: number);
        /**
         * The level's default value.
         */
        get normalized_volume(): number;
        set normalized_volume(val: number);
        /**
         * The level's default value.
         */
        get normalizedVolume(): number;
        set normalizedVolume(val: number);
        /**
         * The level's samplerate.
         */
        get samplerate(): number;
        set samplerate(val: number);
        /**
         * The level's upper range.
         */
        get upper(): number;
        set upper(val: number);

        // Own fields of AgsGui.Level

        widget: Gtk.Widget;
        flags: number;
        orientation: Gtk.Orientation;
        key_mask: LevelKeyMask;
        button_state: LevelButtonState;
        font_size: number;
        step_count: number;
        page_size: number;
        audio_channel: number;
        audio_channel_count: number;

        // Constructors of AgsGui.Level

        constructor(properties?: Partial<Level.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](orientation: Gtk.Orientation, width_request: number, height_request: number): Level;

        // Own signals of AgsGui.Level

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'value-changed', callback: (_source: this, normalized_volume: number) => void): number;
        connect_after(signal: 'value-changed', callback: (_source: this, normalized_volume: number) => void): number;
        emit(signal: 'value-changed', normalized_volume: number): void;

        // Own virtual methods of AgsGui.Level

        /**
         * Emits ::value-changed event.
         * @param normalized_volume the normalized volume
         */
        vfunc_value_changed(normalized_volume: number): void;

        // Own methods of AgsGui.Level

        /**
         * Get lower of `level`.
         * @returns the lower
         */
        get_lower(): number;
        /**
         * Get normalized volume of `level`.
         * @returns the normalized volume
         */
        get_normalized_volume(): number;
        /**
         * Get upper of `level`.
         * @returns the upper
         */
        get_upper(): number;
        /**
         * Set data-format.
         * @param data_format the data format
         */
        set_data_format(data_format: LevelDataFormat): void;
        /**
         * Set `lower` of `level`.
         * @param lower the lower
         */
        set_lower(lower: number): void;
        /**
         * Set `normalized_volume` of `level`.
         * @param normalized_volume the normalized volume
         */
        set_normalized_volume(normalized_volume: number): void;
        /**
         * Set samplerate.
         * @param samplerate the samplerate
         */
        set_samplerate(samplerate: number): void;
        /**
         * Set `upper` of `level`.
         * @param upper the upper
         */
        set_upper(upper: number): void;
        /**
         * Emits ::value-changed event.
         * @param normalized_volume the normalized volume
         */
        value_changed(normalized_volume: number): void;

        // Inherited properties
        /**
         * The accessible role of the given `GtkAccessible` implementation.
         *
         * The accessible role cannot be changed once set.
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);
        /**
         * The accessible role of the given `GtkAccessible` implementation.
         *
         * The accessible role cannot be changed once set.
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

        // Inherited methods
        /**
         * Requests the user's screen reader to announce the given message.
         *
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         *
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;
        /**
         * Retrieves the accessible implementation for the given `GtkAccessible`.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Query a platform state, such as focus.
         *
         * See gtk_accessible_platform_changed().
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for `GtkText` wrappers.
         * @param state platform state to query
         * @returns the value of @state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Resets the accessible `property` to its default value.
         * @param property a `GtkAccessibleProperty`
         */
        reset_property(property: Gtk.AccessibleProperty): void;
        /**
         * Resets the accessible `relation` to its default value.
         * @param relation a `GtkAccessibleRelation`
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;
        /**
         * Resets the accessible `state` to its default value.
         * @param state a `GtkAccessibleState`
         */
        reset_state(state: Gtk.AccessibleState): void;
        /**
         * Sets the parent and sibling of an accessible object.
         *
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the `GtkAccessible`
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
        /**
         * Updates the next accessible sibling of `self`.
         *
         * That might be useful when a new child of a custom `GtkAccessible`
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
        /**
         * Updates an array of accessible properties.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * property change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param properties an array of `GtkAccessibleProperty`
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible relations.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * relation change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param relations an array of `GtkAccessibleRelation`
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible states.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * state change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param states an array of `GtkAccessibleState`
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the accessible implementation for the given `GtkAccessible`.
         */
        vfunc_get_at_context(): Gtk.ATContext | null;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Query a platform state, such as focus.
         *
         * See gtk_accessible_platform_changed().
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for `GtkText` wrappers.
         * @param state platform state to query
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Gets the ID of the `buildable` object.
         *
         * `GtkBuilder` sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a `GtkBuilder`
         * @param child child to add
         * @param type kind of child or %NULL
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
        /**
         * Similar to gtk_buildable_parser_finished() but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a `GtkBuilder`
         * @param child child object or %NULL for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         */
        vfunc_custom_finished(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder `GtkBuilder` used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        vfunc_custom_tag_end(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called for each unknown element under `<child>`.
         * @param builder a `GtkBuilder` used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         */
        vfunc_custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, Gtk.BuildableParser, any];
        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         */
        vfunc_get_id(): string;
        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a `GtkBuilder`
         * @param childname name of child
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. `GtkWindow` sets
         *  the `GtkWidget:visible` property here.
         * @param builder
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;
        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, g_object_set_property()
         *  is used by default. `GtkWindow` implements this to delay showing itself
         *  (i.e. setting the [property`Gtk`.Widget:visible] property) until the whole
         *  interface is created.
         * @param builder
         * @param name
         * @param value
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
        /**
         * Stores the id attribute given in the `GtkBuilder` UI definition.
         *   `GtkWidget` stores the name as object data. Implement this method if your
         *   object has some notion of “ID” and it makes sense to map the XML id
         *   attribute to it.
         * @param id
         */
        vfunc_set_id(id: string): void;
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the @orientable
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module LevelBox {
        // Signal callback interfaces

        interface ChildHeightRequest {
            (level: GObject.Object, height_request: number): void;
        }

        interface ChildWidthRequest {
            (level: GObject.Object, width_request: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Box.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps,
                Gtk.Orientable.ConstructorProps {}
    }

    class LevelBox extends Gtk.Box implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<LevelBox>;

        // Own fields of AgsGui.LevelBox

        box: Gtk.Box;
        level: any[];

        // Constructors of AgsGui.LevelBox

        constructor(properties?: Partial<LevelBox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](orientation: Gtk.Orientation): LevelBox;

        // Own signals of AgsGui.LevelBox

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(
            signal: 'child-height-request',
            callback: (_source: this, level: GObject.Object, height_request: number) => void,
        ): number;
        connect_after(
            signal: 'child-height-request',
            callback: (_source: this, level: GObject.Object, height_request: number) => void,
        ): number;
        emit(signal: 'child-height-request', level: GObject.Object, height_request: number): void;
        connect(
            signal: 'child-width-request',
            callback: (_source: this, level: GObject.Object, width_request: number) => void,
        ): number;
        connect_after(
            signal: 'child-width-request',
            callback: (_source: this, level: GObject.Object, width_request: number) => void,
        ): number;
        emit(signal: 'child-width-request', level: GObject.Object, width_request: number): void;

        // Own virtual methods of AgsGui.LevelBox

        /**
         * Notify about child level height request.
         * @param level the #AgsLevel
         * @param height_request the level's height-request
         */
        vfunc_child_height_request(level: Gtk.Widget, height_request: number): void;
        /**
         * Notify about child level width request.
         * @param level the #AgsLevel
         * @param width_request the level's width-request
         */
        vfunc_child_width_request(level: Gtk.Widget, width_request: number): void;

        // Own methods of AgsGui.LevelBox

        /**
         * Add `level` to `level_box`.
         * @param level the #AgsLevel
         */
        add_level(level: Level): void;
        /**
         * Notify about child level height request.
         * @param level the #AgsLevel
         * @param height_request the level's height-request
         */
        child_height_request(level: Gtk.Widget, height_request: number): void;
        /**
         * Notify about child level width request.
         * @param level the #AgsLevel
         * @param width_request the level's width-request
         */
        child_width_request(level: Gtk.Widget, width_request: number): void;
        /**
         * Get level.
         * @returns the #GList-struct containing #AgsLevel
         */
        get_level(): Level[];
        /**
         * Remove level at `position` of `level_box`.
         * @param level the #AgsLevel
         */
        remove_level(level: Level): void;

        // Inherited properties
        /**
         * The orientation of the orientable.
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        // Inherited methods
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the @orientable
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module Notebook {
        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Box.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps,
                Gtk.Orientable.ConstructorProps {
            tab_height: number;
            tabHeight: number;
            tab_width: number;
            tabWidth: number;
        }
    }

    class Notebook extends Gtk.Box implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<Notebook>;

        // Own properties of AgsGui.Notebook

        /**
         * The tab's height.
         */
        get tab_height(): number;
        set tab_height(val: number);
        /**
         * The tab's height.
         */
        get tabHeight(): number;
        set tabHeight(val: number);
        /**
         * The tab's width.
         */
        get tab_width(): number;
        set tab_width(val: number);
        /**
         * The tab's width.
         */
        get tabWidth(): number;
        set tabWidth(val: number);

        // Own fields of AgsGui.Notebook

        box: Gtk.Box;
        navigation: Gtk.Box;
        scroll_prev: Gtk.Button;
        scroll_next: Gtk.Button;
        scrolled_window: Gtk.ScrolledWindow;
        tab_box: Gtk.Box;
        tab: any[];

        // Constructors of AgsGui.Notebook

        constructor(properties?: Partial<Notebook.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Notebook;

        // Own methods of AgsGui.Notebook

        /**
         * Add `tab` to `notebook`.
         * @param tab the #GtkToggleButton
         */
        add_tab(tab: Gtk.ToggleButton): void;
        /**
         * Get tab.
         * @returns the #GList-struct containing #GtkToggleButton
         */
        get_tab(): Gtk.ToggleButton[];
        /**
         * Insert a new #AgsNotebookTab-struct to `notebook`.
         * @param tab the #GtkToggleButton
         * @param position the position as integer
         */
        insert_tab(tab: Gtk.ToggleButton, position: number): void;
        /**
         * Get next active tab following `position`.
         * @param position the position as integer
         * @returns the position of next active tab as integer
         */
        next_active_tab(position: number): number;
        /**
         * Remove `tab` from `notebook`.
         * @param tab the #GtkToggleButton
         */
        remove_tab(tab: Gtk.ToggleButton): void;

        // Inherited properties
        /**
         * The orientation of the orientable.
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        // Inherited methods
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the @orientable
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module Piano {
        // Signal callback interfaces

        interface KeyClicked {
            (note: string, key_code: number): void;
        }

        interface KeyPressed {
            (note: string, key_code: number): void;
        }

        interface KeyReleased {
            (note: string, key_code: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Widget.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps,
                Gtk.Orientable.ConstructorProps {
            base_key_code: number;
            baseKeyCode: number;
            base_note: string;
            baseNote: string;
            key_count: number;
            keyCount: number;
            key_height: number;
            keyHeight: number;
            key_width: number;
            keyWidth: number;
        }
    }

    class Piano extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<Piano>;

        // Own properties of AgsGui.Piano

        /**
         * The base key code.
         */
        get base_key_code(): number;
        set base_key_code(val: number);
        /**
         * The base key code.
         */
        get baseKeyCode(): number;
        set baseKeyCode(val: number);
        /**
         * The base note to use as lower.
         */
        get base_note(): string;
        set base_note(val: string);
        /**
         * The base note to use as lower.
         */
        get baseNote(): string;
        set baseNote(val: string);
        /**
         * The count of keys to be drawn.
         */
        get key_count(): number;
        set key_count(val: number);
        /**
         * The count of keys to be drawn.
         */
        get keyCount(): number;
        set keyCount(val: number);
        /**
         * The key height to use for drawing a key.
         */
        get key_height(): number;
        set key_height(val: number);
        /**
         * The key height to use for drawing a key.
         */
        get keyHeight(): number;
        set keyHeight(val: number);
        /**
         * The key width to use for drawing a key.
         */
        get key_width(): number;
        set key_width(val: number);
        /**
         * The key width to use for drawing a key.
         */
        get keyWidth(): number;
        set keyWidth(val: number);

        // Own fields of AgsGui.Piano

        widget: Gtk.Widget;
        flags: PianoFlags;
        orientation: Gtk.Orientation;
        button_state: PianoButtonState;
        font_size: number;
        cursor_position: number;
        current_key: number;
        active_key: number;
        active_key_count: number;

        // Constructors of AgsGui.Piano

        constructor(properties?: Partial<Piano.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](orientation: Gtk.Orientation, key_width: number, key_height: number): Piano;

        // Own signals of AgsGui.Piano

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'key-clicked', callback: (_source: this, note: string, key_code: number) => void): number;
        connect_after(signal: 'key-clicked', callback: (_source: this, note: string, key_code: number) => void): number;
        emit(signal: 'key-clicked', note: string, key_code: number): void;
        connect(signal: 'key-pressed', callback: (_source: this, note: string, key_code: number) => void): number;
        connect_after(signal: 'key-pressed', callback: (_source: this, note: string, key_code: number) => void): number;
        emit(signal: 'key-pressed', note: string, key_code: number): void;
        connect(signal: 'key-released', callback: (_source: this, note: string, key_code: number) => void): number;
        connect_after(
            signal: 'key-released',
            callback: (_source: this, note: string, key_code: number) => void,
        ): number;
        emit(signal: 'key-released', note: string, key_code: number): void;

        // Own static methods of AgsGui.Piano

        /**
         * Get note from key code.
         * @param key_code the key code
         */
        static key_code_to_note(key_code: number): string;

        // Own virtual methods of AgsGui.Piano

        /**
         * Emits ::key-clicked event.
         * @param note the string representation of key
         * @param key_code the key code
         */
        vfunc_key_clicked(note: string, key_code: number): void;
        /**
         * Emits ::key-pressed event.
         * @param note the string representation of key
         * @param key_code the key code
         */
        vfunc_key_pressed(note: string, key_code: number): void;
        /**
         * Emits ::key-released event.
         * @param note the string representation of key
         * @param key_code the key code
         */
        vfunc_key_released(note: string, key_code: number): void;

        // Own methods of AgsGui.Piano

        /**
         * Get active keys.
         * @param active_key_count return location of count of active keys
         * @returns the active keys as gint array
         */
        get_active_key(active_key_count: number): number;
        /**
         * Get base key code of `piano`.
         * @returns the base key code
         */
        get_base_key_code(): number;
        /**
         * Get base note of `piano`.
         * @returns the base note
         */
        get_base_note(): string;
        /**
         * Get mouse button state of `piano`.
         * @returns the button state
         */
        get_button_state(): number;
        /**
         * Get key count of `piano`.
         * @returns the key count
         */
        get_key_count(): number;
        /**
         * Get key height of `piano`.
         * @returns the key height
         */
        get_key_height(): number;
        /**
         * Get key width of `piano`.
         * @returns the key width
         */
        get_key_width(): number;
        /**
         * Emits ::key-clicked event.
         * @param note the string representation of key
         * @param key_code the key code
         */
        key_clicked(note: string, key_code: number): void;
        /**
         * Emits ::key-pressed event.
         * @param note the string representation of key
         * @param key_code the key code
         */
        key_pressed(note: string, key_code: number): void;
        /**
         * Emits ::key-released event.
         * @param note the string representation of key
         * @param key_code the key code
         */
        key_released(note: string, key_code: number): void;
        /**
         * Set base key code of `piano`.
         * @param base_key_code the base key code
         */
        set_base_key_code(base_key_code: number): void;
        /**
         * Set base note of `piano`.
         * @param base_note the base note
         */
        set_base_note(base_note: string): void;
        /**
         * Set `button_state` of `piano`.
         * @param button_state the #AgsPianoButtonState-enum
         */
        set_button_state(button_state: number): void;
        /**
         * Set key count of `piano`.
         * @param key_count the key count
         */
        set_key_count(key_count: number): void;
        /**
         * Set key width of `piano`.
         * @param key_height the key width
         */
        set_key_height(key_height: number): void;
        /**
         * Set key width of `piano`.
         * @param key_width the base note
         */
        set_key_width(key_width: number): void;

        // Inherited properties
        /**
         * The accessible role of the given `GtkAccessible` implementation.
         *
         * The accessible role cannot be changed once set.
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);
        /**
         * The accessible role of the given `GtkAccessible` implementation.
         *
         * The accessible role cannot be changed once set.
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

        // Inherited methods
        /**
         * Requests the user's screen reader to announce the given message.
         *
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         *
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;
        /**
         * Retrieves the accessible implementation for the given `GtkAccessible`.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Query a platform state, such as focus.
         *
         * See gtk_accessible_platform_changed().
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for `GtkText` wrappers.
         * @param state platform state to query
         * @returns the value of @state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Resets the accessible `property` to its default value.
         * @param property a `GtkAccessibleProperty`
         */
        reset_property(property: Gtk.AccessibleProperty): void;
        /**
         * Resets the accessible `relation` to its default value.
         * @param relation a `GtkAccessibleRelation`
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;
        /**
         * Resets the accessible `state` to its default value.
         * @param state a `GtkAccessibleState`
         */
        reset_state(state: Gtk.AccessibleState): void;
        /**
         * Sets the parent and sibling of an accessible object.
         *
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the `GtkAccessible`
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
        /**
         * Updates the next accessible sibling of `self`.
         *
         * That might be useful when a new child of a custom `GtkAccessible`
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
        /**
         * Updates an array of accessible properties.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * property change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param properties an array of `GtkAccessibleProperty`
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible relations.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * relation change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param relations an array of `GtkAccessibleRelation`
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible states.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * state change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param states an array of `GtkAccessibleState`
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the accessible implementation for the given `GtkAccessible`.
         */
        vfunc_get_at_context(): Gtk.ATContext | null;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Query a platform state, such as focus.
         *
         * See gtk_accessible_platform_changed().
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for `GtkText` wrappers.
         * @param state platform state to query
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Gets the ID of the `buildable` object.
         *
         * `GtkBuilder` sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a `GtkBuilder`
         * @param child child to add
         * @param type kind of child or %NULL
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
        /**
         * Similar to gtk_buildable_parser_finished() but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a `GtkBuilder`
         * @param child child object or %NULL for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         */
        vfunc_custom_finished(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder `GtkBuilder` used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        vfunc_custom_tag_end(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called for each unknown element under `<child>`.
         * @param builder a `GtkBuilder` used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         */
        vfunc_custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, Gtk.BuildableParser, any];
        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         */
        vfunc_get_id(): string;
        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a `GtkBuilder`
         * @param childname name of child
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. `GtkWindow` sets
         *  the `GtkWidget:visible` property here.
         * @param builder
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;
        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, g_object_set_property()
         *  is used by default. `GtkWindow` implements this to delay showing itself
         *  (i.e. setting the [property`Gtk`.Widget:visible] property) until the whole
         *  interface is created.
         * @param builder
         * @param name
         * @param value
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
        /**
         * Stores the id attribute given in the `GtkBuilder` UI definition.
         *   `GtkWidget` stores the name as object data. Implement this method if your
         *   object has some notion of “ID” and it makes sense to map the XML id
         *   attribute to it.
         * @param id
         */
        vfunc_set_id(id: string): void;
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the @orientable
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module Ruler {
        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Widget.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps,
                Gtk.Orientable.ConstructorProps {
            adjustment: GObject.Object;
            factor: number;
            font_size: number;
            fontSize: number;
            large_step: number;
            largeStep: number;
            precision: number;
            scale_precision: number;
            scalePrecision: number;
            small_step: number;
            smallStep: number;
            step: number;
        }
    }

    class Ruler extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<Ruler>;

        // Own properties of AgsGui.Ruler

        /**
         * The adjustment.
         */
        get adjustment(): GObject.Object;
        set adjustment(val: GObject.Object);
        /**
         * The factor.
         */
        get factor(): number;
        set factor(val: number);
        /**
         * The font size.
         */
        get font_size(): number;
        set font_size(val: number);
        /**
         * The font size.
         */
        get fontSize(): number;
        set fontSize(val: number);
        /**
         * The large step's width.
         */
        get large_step(): number;
        set large_step(val: number);
        /**
         * The large step's width.
         */
        get largeStep(): number;
        set largeStep(val: number);
        /**
         * The precision.
         */
        get precision(): number;
        set precision(val: number);
        /**
         * The scale precision.
         */
        get scale_precision(): number;
        set scale_precision(val: number);
        /**
         * The scale precision.
         */
        get scalePrecision(): number;
        set scalePrecision(val: number);
        /**
         * The small step's width.
         */
        get small_step(): number;
        set small_step(val: number);
        /**
         * The small step's width.
         */
        get smallStep(): number;
        set smallStep(val: number);
        /**
         * The step's width.
         */
        get step(): number;
        set step(val: number);

        // Own fields of AgsGui.Ruler

        widget: Gtk.Widget;
        orientation: Gtk.Orientation;

        // Constructors of AgsGui.Ruler

        constructor(properties?: Partial<Ruler.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            orientation: Gtk.Orientation,
            step: number,
            factor: number,
            precision: number,
            scale_precision: number,
        ): Ruler;

        // Own methods of AgsGui.Ruler

        /**
         * Get adjustment of `ruler`.
         * @returns the #GtkAdjustment
         */
        get_adjustment(): Gtk.Adjustment;
        /**
         * Get factor of `ruler`.
         * @returns the factor
         */
        get_factor(): number;
        /**
         * Get font size of `ruler`.
         * @returns the font size
         */
        get_font_size(): number;
        /**
         * Get large step of `ruler`.
         * @returns the large step
         */
        get_large_step(): number;
        /**
         * Get precision of `ruler`.
         * @returns the precision
         */
        get_precision(): number;
        /**
         * Get scale precision of `ruler`.
         * @returns the scale precision
         */
        get_scale_precision(): number;
        /**
         * Get small step of `ruler`.
         * @returns the small step
         */
        get_small_step(): number;
        /**
         * Get step of `ruler`.
         * @returns the step
         */
        get_step(): number;
        /**
         * Set adjustment of `ruler`.
         * @param adjustment the #GtkAdjustment
         */
        set_adjustment(adjustment: Gtk.Adjustment): void;
        /**
         * Set factor of `ruler`.
         * @param factor the factor
         */
        set_factor(factor: number): void;
        /**
         * Set font size of `ruler`.
         * @param font_size the font size
         */
        set_font_size(font_size: number): void;
        /**
         * Set large step of `ruler`.
         * @param large_step the large step
         */
        set_large_step(large_step: number): void;
        /**
         * Set precision of `ruler`.
         * @param precision the precision
         */
        set_precision(precision: number): void;
        /**
         * Set scale precision of `ruler`.
         * @param scale_precision the scale precision
         */
        set_scale_precision(scale_precision: number): void;
        /**
         * Set small step of `ruler`.
         * @param small_step the small step
         */
        set_small_step(small_step: number): void;
        /**
         * Set step of `ruler`.
         * @param step the step
         */
        set_step(step: number): void;

        // Inherited properties
        /**
         * The accessible role of the given `GtkAccessible` implementation.
         *
         * The accessible role cannot be changed once set.
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);
        /**
         * The accessible role of the given `GtkAccessible` implementation.
         *
         * The accessible role cannot be changed once set.
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

        // Inherited methods
        /**
         * Requests the user's screen reader to announce the given message.
         *
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         *
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;
        /**
         * Retrieves the accessible implementation for the given `GtkAccessible`.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Query a platform state, such as focus.
         *
         * See gtk_accessible_platform_changed().
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for `GtkText` wrappers.
         * @param state platform state to query
         * @returns the value of @state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Resets the accessible `property` to its default value.
         * @param property a `GtkAccessibleProperty`
         */
        reset_property(property: Gtk.AccessibleProperty): void;
        /**
         * Resets the accessible `relation` to its default value.
         * @param relation a `GtkAccessibleRelation`
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;
        /**
         * Resets the accessible `state` to its default value.
         * @param state a `GtkAccessibleState`
         */
        reset_state(state: Gtk.AccessibleState): void;
        /**
         * Sets the parent and sibling of an accessible object.
         *
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the `GtkAccessible`
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
        /**
         * Updates the next accessible sibling of `self`.
         *
         * That might be useful when a new child of a custom `GtkAccessible`
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
        /**
         * Updates an array of accessible properties.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * property change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param properties an array of `GtkAccessibleProperty`
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible relations.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * relation change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param relations an array of `GtkAccessibleRelation`
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible states.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * state change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param states an array of `GtkAccessibleState`
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the accessible implementation for the given `GtkAccessible`.
         */
        vfunc_get_at_context(): Gtk.ATContext | null;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Query a platform state, such as focus.
         *
         * See gtk_accessible_platform_changed().
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for `GtkText` wrappers.
         * @param state platform state to query
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Gets the ID of the `buildable` object.
         *
         * `GtkBuilder` sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a `GtkBuilder`
         * @param child child to add
         * @param type kind of child or %NULL
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
        /**
         * Similar to gtk_buildable_parser_finished() but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a `GtkBuilder`
         * @param child child object or %NULL for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         */
        vfunc_custom_finished(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder `GtkBuilder` used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        vfunc_custom_tag_end(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called for each unknown element under `<child>`.
         * @param builder a `GtkBuilder` used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         */
        vfunc_custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, Gtk.BuildableParser, any];
        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         */
        vfunc_get_id(): string;
        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a `GtkBuilder`
         * @param childname name of child
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. `GtkWindow` sets
         *  the `GtkWidget:visible` property here.
         * @param builder
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;
        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, g_object_set_property()
         *  is used by default. `GtkWindow` implements this to delay showing itself
         *  (i.e. setting the [property`Gtk`.Widget:visible] property) until the whole
         *  interface is created.
         * @param builder
         * @param name
         * @param value
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
        /**
         * Stores the id attribute given in the `GtkBuilder` UI definition.
         *   `GtkWidget` stores the name as object data. Implement this method if your
         *   object has some notion of “ID” and it makes sense to map the XML id
         *   attribute to it.
         * @param id
         */
        vfunc_set_id(id: string): void;
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the @orientable
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module Scale {
        // Signal callback interfaces

        interface ValueChanged {
            (default_value: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Widget.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps,
                Gtk.Orientable.ConstructorProps {
            control_name: string;
            controlName: string;
            default_value: number;
            defaultValue: number;
            lower: number;
            upper: number;
        }
    }

    class Scale extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<Scale>;

        // Own properties of AgsGui.Scale

        /**
         * The scale's control name.
         */
        get control_name(): string;
        set control_name(val: string);
        /**
         * The scale's control name.
         */
        get controlName(): string;
        set controlName(val: string);
        /**
         * The scale's default value.
         */
        get default_value(): number;
        set default_value(val: number);
        /**
         * The scale's default value.
         */
        get defaultValue(): number;
        set defaultValue(val: number);
        /**
         * The scale's lower range.
         */
        get lower(): number;
        set lower(val: number);
        /**
         * The scale's upper range.
         */
        get upper(): number;
        set upper(val: number);

        // Own fields of AgsGui.Scale

        widget: Gtk.Widget;
        flags: ScaleFlags;
        orientation: Gtk.Orientation;
        key_mask: ScaleKeyMask;
        button_state: ScaleButtonState;
        font_size: number;
        step_count: number;
        page_size: number;
        scale_step_count: number;
        scale_point: string;
        scale_value: number;

        // Constructors of AgsGui.Scale

        constructor(properties?: Partial<Scale.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](orientation: Gtk.Orientation, width_request: number, height_request: number): Scale;

        // Own signals of AgsGui.Scale

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'value-changed', callback: (_source: this, default_value: number) => void): number;
        connect_after(signal: 'value-changed', callback: (_source: this, default_value: number) => void): number;
        emit(signal: 'value-changed', default_value: number): void;

        // Own virtual methods of AgsGui.Scale

        /**
         * Emits ::value-changed event.
         * @param default_value the default value
         */
        vfunc_value_changed(default_value: number): void;

        // Own methods of AgsGui.Scale

        /**
         * Get scale height of `scale`.
         * @returns the scale height
         */
        get_control_name(): string;
        /**
         * Get normalized volume of `scale`.
         * @returns the normalized volume
         */
        get_default_value(): number;
        /**
         * Get lower of `scale`.
         * @returns the lower
         */
        get_lower(): number;
        /**
         * Get upper of `scale`.
         * @returns the upper
         */
        get_upper(): number;
        /**
         * Set `control_name` of `scale`.
         * @param control_name the scale height
         */
        set_control_name(control_name: string): void;
        /**
         * Set `default_value` of `scale`.
         * @param default_value the normalized volume
         */
        set_default_value(default_value: number): void;
        /**
         * Set `lower` of `scale`.
         * @param lower the lower
         */
        set_lower(lower: number): void;
        /**
         * Set `upper` of `scale`.
         * @param upper the upper
         */
        set_upper(upper: number): void;
        /**
         * Emits ::value-changed event.
         * @param default_value the default value
         */
        value_changed(default_value: number): void;

        // Inherited properties
        /**
         * The accessible role of the given `GtkAccessible` implementation.
         *
         * The accessible role cannot be changed once set.
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);
        /**
         * The accessible role of the given `GtkAccessible` implementation.
         *
         * The accessible role cannot be changed once set.
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

        // Inherited methods
        /**
         * Requests the user's screen reader to announce the given message.
         *
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         *
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;
        /**
         * Retrieves the accessible implementation for the given `GtkAccessible`.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Query a platform state, such as focus.
         *
         * See gtk_accessible_platform_changed().
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for `GtkText` wrappers.
         * @param state platform state to query
         * @returns the value of @state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Resets the accessible `property` to its default value.
         * @param property a `GtkAccessibleProperty`
         */
        reset_property(property: Gtk.AccessibleProperty): void;
        /**
         * Resets the accessible `relation` to its default value.
         * @param relation a `GtkAccessibleRelation`
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;
        /**
         * Resets the accessible `state` to its default value.
         * @param state a `GtkAccessibleState`
         */
        reset_state(state: Gtk.AccessibleState): void;
        /**
         * Sets the parent and sibling of an accessible object.
         *
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the `GtkAccessible`
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
        /**
         * Updates the next accessible sibling of `self`.
         *
         * That might be useful when a new child of a custom `GtkAccessible`
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
        /**
         * Updates an array of accessible properties.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * property change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param properties an array of `GtkAccessibleProperty`
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible relations.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * relation change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param relations an array of `GtkAccessibleRelation`
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible states.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * state change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param states an array of `GtkAccessibleState`
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the accessible implementation for the given `GtkAccessible`.
         */
        vfunc_get_at_context(): Gtk.ATContext | null;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Query a platform state, such as focus.
         *
         * See gtk_accessible_platform_changed().
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for `GtkText` wrappers.
         * @param state platform state to query
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Gets the ID of the `buildable` object.
         *
         * `GtkBuilder` sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a `GtkBuilder`
         * @param child child to add
         * @param type kind of child or %NULL
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
        /**
         * Similar to gtk_buildable_parser_finished() but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a `GtkBuilder`
         * @param child child object or %NULL for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         */
        vfunc_custom_finished(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder `GtkBuilder` used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        vfunc_custom_tag_end(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called for each unknown element under `<child>`.
         * @param builder a `GtkBuilder` used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         */
        vfunc_custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, Gtk.BuildableParser, any];
        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         */
        vfunc_get_id(): string;
        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a `GtkBuilder`
         * @param childname name of child
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. `GtkWindow` sets
         *  the `GtkWidget:visible` property here.
         * @param builder
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;
        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, g_object_set_property()
         *  is used by default. `GtkWindow` implements this to delay showing itself
         *  (i.e. setting the [property`Gtk`.Widget:visible] property) until the whole
         *  interface is created.
         * @param builder
         * @param name
         * @param value
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
        /**
         * Stores the id attribute given in the `GtkBuilder` UI definition.
         *   `GtkWidget` stores the name as object data. Implement this method if your
         *   object has some notion of “ID” and it makes sense to map the XML id
         *   attribute to it.
         * @param id
         */
        vfunc_set_id(id: string): void;
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the @orientable
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module ScaleBox {
        // Signal callback interfaces

        interface ChildHeightRequest {
            (scale: GObject.Object, height_request: number): void;
        }

        interface ChildWidthRequest {
            (scale: GObject.Object, width_request: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Box.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps,
                Gtk.Orientable.ConstructorProps {}
    }

    class ScaleBox extends Gtk.Box implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<ScaleBox>;

        // Own fields of AgsGui.ScaleBox

        box: Gtk.Box;
        scale: any[];

        // Constructors of AgsGui.ScaleBox

        constructor(properties?: Partial<ScaleBox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](orientation: Gtk.Orientation): ScaleBox;

        // Own signals of AgsGui.ScaleBox

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(
            signal: 'child-height-request',
            callback: (_source: this, scale: GObject.Object, height_request: number) => void,
        ): number;
        connect_after(
            signal: 'child-height-request',
            callback: (_source: this, scale: GObject.Object, height_request: number) => void,
        ): number;
        emit(signal: 'child-height-request', scale: GObject.Object, height_request: number): void;
        connect(
            signal: 'child-width-request',
            callback: (_source: this, scale: GObject.Object, width_request: number) => void,
        ): number;
        connect_after(
            signal: 'child-width-request',
            callback: (_source: this, scale: GObject.Object, width_request: number) => void,
        ): number;
        emit(signal: 'child-width-request', scale: GObject.Object, width_request: number): void;

        // Own virtual methods of AgsGui.ScaleBox

        /**
         * Notify about child scale height request.
         * @param scale the #AgsScale
         * @param height_request the scale's height-request
         */
        vfunc_child_height_request(scale: Gtk.Widget, height_request: number): void;
        /**
         * Notify about child scale width request.
         * @param scale the #AgsScale
         * @param width_request the scale's width-request
         */
        vfunc_child_width_request(scale: Gtk.Widget, width_request: number): void;

        // Own methods of AgsGui.ScaleBox

        /**
         * Add `scale` to `scale_box`.
         * @param scale the #AgsScale
         */
        add_scale(scale: Scale): void;
        /**
         * Notify about child scale height request.
         * @param scale the #AgsScale
         * @param height_request the scale's height-request
         */
        child_height_request(scale: Gtk.Widget, height_request: number): void;
        /**
         * Notify about child scale width request.
         * @param scale the #AgsScale
         * @param width_request the scale's width-request
         */
        child_width_request(scale: Gtk.Widget, width_request: number): void;
        /**
         * Get scale.
         * @returns the #GList-struct containing #AgsScale
         */
        get_scale(): Scale[];
        /**
         * Remove `scale` from `scale_box`.
         * @param scale the #AgsScale
         */
        remove_scale(scale: Scale): void;

        // Inherited properties
        /**
         * The orientation of the orientable.
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        // Inherited methods
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the @orientable
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module ScrolledLevelBox {
        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Grid.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps,
                Gtk.Orientable.ConstructorProps {}
    }

    class ScrolledLevelBox
        extends Gtk.Grid
        implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable
    {
        static $gtype: GObject.GType<ScrolledLevelBox>;

        // Own fields of AgsGui.ScrolledLevelBox

        grid: Gtk.Grid;
        scrolled_window: Gtk.ScrolledWindow;
        level_box: Gtk.Box;

        // Constructors of AgsGui.ScrolledLevelBox

        constructor(properties?: Partial<ScrolledLevelBox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ScrolledLevelBox;

        // Own methods of AgsGui.ScrolledLevelBox

        /**
         * Get level box of `scrolled_level_box`.
         * @returns the #AgsLevelBox
         */
        get_level_box(): LevelBox;
        /**
         * Get scrolled window of `scrolled_level_box`.
         * @returns the #GtkScrolledWindow
         */
        get_scrolled_window(): Gtk.ScrolledWindow;

        // Inherited properties
        /**
         * The orientation of the orientable.
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        // Inherited methods
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the @orientable
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module ScrolledPiano {
        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Grid.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps,
                Gtk.Orientable.ConstructorProps {}
    }

    class ScrolledPiano
        extends Gtk.Grid
        implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable
    {
        static $gtype: GObject.GType<ScrolledPiano>;

        // Own fields of AgsGui.ScrolledPiano

        grid: Gtk.Grid;
        scrolled_window: Gtk.ScrolledWindow;
        piano: Piano;

        // Constructors of AgsGui.ScrolledPiano

        constructor(properties?: Partial<ScrolledPiano.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ScrolledPiano;

        // Own methods of AgsGui.ScrolledPiano

        /**
         * Get piano of `scrolled_piano`.
         * @returns the #AgsPiano
         */
        get_piano(): Piano;
        /**
         * Get scrolled window of `scrolled_piano`.
         * @returns the #GtkScrolled_Window
         */
        get_scrolled_window(): Gtk.ScrolledWindow;

        // Inherited properties
        /**
         * The orientation of the orientable.
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        // Inherited methods
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the @orientable
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module ScrolledScaleBox {
        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Grid.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps,
                Gtk.Orientable.ConstructorProps {}
    }

    class ScrolledScaleBox
        extends Gtk.Grid
        implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable
    {
        static $gtype: GObject.GType<ScrolledScaleBox>;

        // Own fields of AgsGui.ScrolledScaleBox

        grid: Gtk.Grid;
        scrolled_window: Gtk.ScrolledWindow;
        scale_box: Gtk.Box;

        // Constructors of AgsGui.ScrolledScaleBox

        constructor(properties?: Partial<ScrolledScaleBox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ScrolledScaleBox;

        // Own methods of AgsGui.ScrolledScaleBox

        /**
         * Get scrolled_window of `scrolled_scale_box`.
         * @returns the #GtkScrolled_Window
         */
        get_scrolled_window(): Gtk.ScrolledWindow;

        // Inherited properties
        /**
         * The orientation of the orientable.
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        // Inherited methods
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the @orientable
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module Tempo {
        // Signal callback interfaces

        interface ValueChanged {
            (default_value: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Widget.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps,
                Gtk.Orientable.ConstructorProps {
            control_name: string;
            controlName: string;
            default_value: number;
            defaultValue: number;
            lower: number;
            upper: number;
        }
    }

    class Tempo extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<Tempo>;

        // Own properties of AgsGui.Tempo

        /**
         * The tempo's control name.
         */
        get control_name(): string;
        set control_name(val: string);
        /**
         * The tempo's control name.
         */
        get controlName(): string;
        set controlName(val: string);
        /**
         * The tempo's default value.
         */
        get default_value(): number;
        set default_value(val: number);
        /**
         * The tempo's default value.
         */
        get defaultValue(): number;
        set defaultValue(val: number);
        /**
         * The tempo's lower range.
         */
        get lower(): number;
        set lower(val: number);
        /**
         * The tempo's upper range.
         */
        get upper(): number;
        set upper(val: number);

        // Own fields of AgsGui.Tempo

        widget: Gtk.Widget;
        orientation: Gtk.Orientation;
        key_mask: TempoKeyMask;
        button_state: TempoButtonState;
        font_size: number;
        step_count: number;
        page_size: number;
        tempo_step_count: number;
        tempo_point: string;
        tempo_value: number;

        // Constructors of AgsGui.Tempo

        constructor(properties?: Partial<Tempo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](orientation: Gtk.Orientation, width_request: number, height_request: number): Tempo;

        // Own signals of AgsGui.Tempo

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'value-changed', callback: (_source: this, default_value: number) => void): number;
        connect_after(signal: 'value-changed', callback: (_source: this, default_value: number) => void): number;
        emit(signal: 'value-changed', default_value: number): void;

        // Own virtual methods of AgsGui.Tempo

        /**
         * Emits ::value-changed event.
         * @param default_value the default value
         */
        vfunc_value_changed(default_value: number): void;

        // Own methods of AgsGui.Tempo

        /**
         * Get tempo height of `tempo`.
         * @returns the tempo height
         */
        get_control_name(): string;
        /**
         * Get normalized volume of `tempo`.
         * @returns the normalized volume
         */
        get_default_value(): number;
        /**
         * Get lower of `tempo`.
         * @returns the lower
         */
        get_lower(): number;
        /**
         * Get upper of `tempo`.
         * @returns the upper
         */
        get_upper(): number;
        /**
         * Set `control_name` of `tempo`.
         * @param control_name the tempo height
         */
        set_control_name(control_name: string): void;
        /**
         * Set `default_value` of `tempo`.
         * @param default_value the normalized volume
         */
        set_default_value(default_value: number): void;
        /**
         * Set `lower` of `tempo`.
         * @param lower the lower
         */
        set_lower(lower: number): void;
        /**
         * Set `upper` of `tempo`.
         * @param upper the upper
         */
        set_upper(upper: number): void;
        /**
         * Emits ::value-changed event.
         * @param default_value the default value
         */
        value_changed(default_value: number): void;

        // Inherited properties
        /**
         * The accessible role of the given `GtkAccessible` implementation.
         *
         * The accessible role cannot be changed once set.
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);
        /**
         * The accessible role of the given `GtkAccessible` implementation.
         *
         * The accessible role cannot be changed once set.
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

        // Inherited methods
        /**
         * Requests the user's screen reader to announce the given message.
         *
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         *
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;
        /**
         * Retrieves the accessible implementation for the given `GtkAccessible`.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Query a platform state, such as focus.
         *
         * See gtk_accessible_platform_changed().
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for `GtkText` wrappers.
         * @param state platform state to query
         * @returns the value of @state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Resets the accessible `property` to its default value.
         * @param property a `GtkAccessibleProperty`
         */
        reset_property(property: Gtk.AccessibleProperty): void;
        /**
         * Resets the accessible `relation` to its default value.
         * @param relation a `GtkAccessibleRelation`
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;
        /**
         * Resets the accessible `state` to its default value.
         * @param state a `GtkAccessibleState`
         */
        reset_state(state: Gtk.AccessibleState): void;
        /**
         * Sets the parent and sibling of an accessible object.
         *
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the `GtkAccessible`
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
        /**
         * Updates the next accessible sibling of `self`.
         *
         * That might be useful when a new child of a custom `GtkAccessible`
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
        /**
         * Updates an array of accessible properties.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * property change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param properties an array of `GtkAccessibleProperty`
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible relations.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * relation change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param relations an array of `GtkAccessibleRelation`
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible states.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
         * state change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param states an array of `GtkAccessibleState`
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the accessible implementation for the given `GtkAccessible`.
         */
        vfunc_get_at_context(): Gtk.ATContext | null;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Query a platform state, such as focus.
         *
         * See gtk_accessible_platform_changed().
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for `GtkText` wrappers.
         * @param state platform state to query
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Gets the ID of the `buildable` object.
         *
         * `GtkBuilder` sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a `GtkBuilder`
         * @param child child to add
         * @param type kind of child or %NULL
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
        /**
         * Similar to gtk_buildable_parser_finished() but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a `GtkBuilder`
         * @param child child object or %NULL for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         */
        vfunc_custom_finished(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder `GtkBuilder` used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        vfunc_custom_tag_end(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called for each unknown element under `<child>`.
         * @param builder a `GtkBuilder` used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         */
        vfunc_custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, Gtk.BuildableParser, any];
        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         */
        vfunc_get_id(): string;
        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a `GtkBuilder`
         * @param childname name of child
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. `GtkWindow` sets
         *  the `GtkWidget:visible` property here.
         * @param builder
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;
        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, g_object_set_property()
         *  is used by default. `GtkWindow` implements this to delay showing itself
         *  (i.e. setting the [property`Gtk`.Widget:visible] property) until the whole
         *  interface is created.
         * @param builder
         * @param name
         * @param value
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
        /**
         * Stores the id attribute given in the `GtkBuilder` UI definition.
         *   `GtkWidget` stores the name as object data. Implement this method if your
         *   object has some notion of “ID” and it makes sense to map the XML id
         *   attribute to it.
         * @param id
         */
        vfunc_set_id(id: string): void;
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the @orientable
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    type CartesianClass = typeof Cartesian;
    type DialClass = typeof Dial;
    class ExpanderChild {
        static $gtype: GObject.GType<ExpanderChild>;

        // Own fields of AgsGui.ExpanderChild

        child: Gtk.Widget;
        x: number;
        y: number;
        width: number;
        height: number;

        // Constructors of AgsGui.ExpanderChild

        _init(...args: any[]): void;

        // Own static methods of AgsGui.ExpanderChild

        /**
         * Allocate #AgsExpanderChild-struct.
         * @param x the x position
         * @param y the y position
         * @param width the width
         * @param height the height
         */
        static alloc(x: number, y: number, width: number, height: number): any | null;
        /**
         * Free `expander_child`.
         * @param expander_child the #AgsExpanderChild-struct
         */
        static free(expander_child?: any | null): void;
    }

    type ExpanderClass = typeof Expander;
    class ExpanderSetChild {
        static $gtype: GObject.GType<ExpanderSetChild>;

        // Own fields of AgsGui.ExpanderSetChild

        child: Gtk.Widget;
        x: number;
        y: number;
        width: number;
        height: number;

        // Constructors of AgsGui.ExpanderSetChild

        _init(...args: any[]): void;

        // Own static methods of AgsGui.ExpanderSetChild

        /**
         * Allocate #AgsExpanderSetChild-struct.
         * @param x the x position
         * @param y the y position
         * @param width the width
         * @param height the height
         */
        static alloc(x: number, y: number, width: number, height: number): any | null;
        /**
         * Free `expander_set_child`.
         * @param expander_set_child the #AgsExpanderSetChild-struct
         */
        static free(expander_set_child?: any | null): void;
    }

    type ExpanderSetClass = typeof ExpanderSet;
    type FileDialogClass = typeof FileDialog;
    type FileWidgetClass = typeof FileWidget;
    type IconLinkClass = typeof IconLink;
    type IndicatorClass = typeof Indicator;
    type InputDialogClass = typeof InputDialog;
    type LedArrayClass = typeof LedArray;
    type LedClass = typeof Led;
    type LevelBoxClass = typeof LevelBox;
    type LevelClass = typeof Level;
    type NotebookClass = typeof Notebook;
    type PianoClass = typeof Piano;
    class Plot {
        static $gtype: GObject.GType<Plot>;

        // Own fields of AgsGui.Plot

        fill_flags: PlotFillFlags;
        n_points: number;
        join_points: boolean;
        point: number;
        point_color: number;
        point_label: string;
        n_bitmaps: number;
        bitmap: number;
        bitmap_color: number;
        n_pixmaps: number;
        pixmap: number;

        // Constructors of AgsGui.Plot

        _init(...args: any[]): void;

        // Own static methods of AgsGui.Plot

        /**
         * Allocate #AgsPlot-struct.
         * @param n_points number of points
         * @param n_bitmaps number of bitmaps
         * @param n_pixmaps number of pixmaps
         */
        static alloc(n_points: number, n_bitmaps: number, n_pixmaps: number): any | null;
        /**
         * Free `plot`.
         * @param plot the #AgsPlot-struct
         */
        static free(plot?: any | null): void;
        /**
         * Get bitmaps.
         * @param plot the #AgsPlot-struct
         */
        static get_bitmap(plot?: any | null): number;
        /**
         * Get bitmap colors.
         * @param plot the #AgsPlot-struct
         */
        static get_bitmap_color(plot?: any | null): number;
        /**
         * Get join points.
         * @param plot the #AgsPlot-struct
         */
        static get_join_points(plot?: any | null): boolean;
        /**
         * Get number of bitmaps.
         * @param plot the #AgsPlot-struct
         */
        static get_n_bitmaps(plot?: any | null): number;
        /**
         * Get number of pixmaps.
         * @param plot the #AgsPlot-struct
         */
        static get_n_pixmaps(plot?: any | null): number;
        /**
         * Get number of points.
         * @param plot the #AgsPlot-struct
         */
        static get_n_points(plot?: any | null): number;
        /**
         * Get pixmaps.
         * @param plot the #AgsPlot-struct
         */
        static get_pixmap(plot?: any | null): number;
        /**
         * Get points.
         * @param plot the #AgsPlot-struct
         */
        static get_point(plot?: any | null): number;
        /**
         * Get point colors.
         * @param plot the #AgsPlot-struct
         */
        static get_point_color(plot?: any | null): number;
        /**
         * Get point labels.
         * @param plot the #AgsPlot-struct
         */
        static get_point_label(plot?: any | null): string[];
        /**
         * Set bitmap field of `plot`.
         * @param plot the #AgsPlot-struct
         * @param bitmap the bitmaps
         */
        static set_bitmap(plot: any | null, bitmap: number): void;
        /**
         * Set bitmap color field of `plot`.
         * @param plot the #AgsPlot-struct
         * @param bitmap_color the bitmaps colors as array of RGB value
         */
        static set_bitmap_color(plot: any | null, bitmap_color: number): void;
        /**
         * Set join_points field of `plot`.
         * @param plot the #AgsPlot-struct
         * @param join_points if %TRUE join points, otherwise not
         */
        static set_join_points(plot: any | null, join_points: boolean): void;
        /**
         * Set n_bitmaps field of `plot`.
         * @param plot the #AgsPlot-struct
         * @param n_bitmaps the number of bitmaps
         */
        static set_n_bitmaps(plot: any | null, n_bitmaps: number): void;
        /**
         * Set n_pixmaps field of `plot`.
         * @param plot the #AgsPlot-struct
         * @param n_pixmaps the number of pixmaps
         */
        static set_n_pixmaps(plot: any | null, n_pixmaps: number): void;
        /**
         * Set n_points field of `plot`.
         * @param plot the #AgsPlot-struct
         * @param n_points the number of points
         */
        static set_n_points(plot: any | null, n_points: number): void;
        /**
         * Set pixmap field of `plot`.
         * @param plot the #AgsPlot-struct
         * @param pixmap the pixmaps
         */
        static set_pixmap(plot: any | null, pixmap: number): void;
        /**
         * Set point field of `plot`.
         * @param plot the #AgsPlot-struct
         * @param point the points as array of coordinates
         */
        static set_point(plot: any | null, point: number): void;
        /**
         * Set point color field of `plot`.
         * @param plot the #AgsPlot-struct
         * @param point_color the points colors as array of RGB value
         */
        static set_point_color(plot: any | null, point_color: number): void;
        /**
         * Set point label field of `plot`.
         * @param plot the #AgsPlot-struct
         * @param point_label the points labels as string vector
         */
        static set_point_label(plot: any | null, point_label: string): void;
    }

    type RulerClass = typeof Ruler;
    type ScaleBoxClass = typeof ScaleBox;
    type ScaleClass = typeof Scale;
    type ScrolledLevelBoxClass = typeof ScrolledLevelBox;
    type ScrolledPianoClass = typeof ScrolledPiano;
    type ScrolledScaleBoxClass = typeof ScrolledScaleBox;
    type TempoClass = typeof Tempo;
    /**
     * Name of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
     */
    const __name__: string;
    /**
     * Version of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
     */
    const __version__: string;
}

export default AgsGui;

// END
