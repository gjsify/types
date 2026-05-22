
/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type libxml2 from '@girs/libxml2-2.0';
import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from 'cairo';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';

export namespace AgsGui {

    /**
     * AgsGui-8.0
     */


    /**
     * @gir-type Enum
     */
    enum DialAction {
        INCREMENT,
        DECREMENT,
    }


    /**
     * @gir-type Enum
     */
    enum ExpanderFlags {
        EXPANDER_DRAW_BORDER,
    }


    /**
     * @gir-type Enum
     */
    enum FileDialogFlags {
        FILE_DIALOG_SHOW_DOWNLOAD_LINK,
    }


    /**
     * @gir-type Enum
     */
    enum FileWidgetFileAction {
        OPEN,
        SAVE_AS,
    }


    /**
     * @gir-type Enum
     */
    enum FileWidgetFileFilter {
        NONE,
        BY_SUFFIX,
    }


    /**
     * @gir-type Enum
     */
    enum LevelAction {
        STEP_UP,
        STEP_DOWN,
        PAGE_UP,
        PAGE_DOWN,
    }


    /**
     * @gir-type Enum
     */
    enum LevelButtonState {
        LEVEL_BUTTON_1_PRESSED,
    }


    /**
     * @gir-type Enum
     */
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


    /**
     * @gir-type Enum
     */
    enum PianoAction {
        MOVE_CURSOR_UP,
        MOVE_CURSOR_DOWN,
        HIT_KEY,
    }


    /**
     * @gir-type Enum
     */
    enum PianoButtonState {
        PIANO_BUTTON_1_PRESSED,
    }


    /**
     * @gir-type Enum
     */
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


    /**
     * @gir-type Enum
     */
    enum PlotFillFlags {
        PLOT_FILL_REPLACE,
    }


    /**
     * @gir-type Enum
     */
    enum ScaleAction {
        STEP_UP,
        STEP_DOWN,
        PAGE_UP,
        PAGE_DOWN,
    }


    /**
     * @gir-type Enum
     */
    enum ScaleButtonState {
        SCALE_BUTTON_1_PRESSED,
    }


    /**
     * @gir-type Enum
     */
    enum ScaleFlags {
        SCALE_LOGARITHMIC,
    }


    /**
     * @gir-type Enum
     */
    enum ScaleLayout {
        VERTICAL,
        HORIZONTAL,
    }


    /**
     * @gir-type Enum
     */
    enum TempoAction {
        STEP_UP,
        STEP_DOWN,
        PAGE_UP,
        PAGE_DOWN,
    }


    /**
     * @gir-type Enum
     */
    enum TempoButtonState {
        TEMPO_BUTTON_1_PRESSED,
    }


    /**
     * @gir-type Enum
     */
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

    const FILE_ENTRY_DEFAULT_MAX_FILENAME_LENGTH: number;

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
     * Allocate {@link AgsGui.ExpanderChild}-struct.
     * @param x the x position
     * @param y the y position
     * @param width the width
     * @param height the height
     * @returns the new {@link AgsGui.ExpanderChild}-struct
     * @since 3.0.0
     */
    function expander_child_alloc(x: number, y: number, width: number, height: number): null;

    /**
     * Free `expander_child`.
     * @param expander_child the {@link AgsGui.ExpanderChild}-struct
     * @since 3.2.2
     */
    function expander_child_free(expander_child: null): void;

    /**
     * Allocate {@link AgsGui.ExpanderSetChild}-struct.
     * @param x the x position
     * @param y the y position
     * @param width the width
     * @param height the height
     * @returns the new {@link AgsGui.ExpanderSetChild}-struct
     * @since 3.0.0
     */
    function expander_set_child_alloc(x: number, y: number, width: number, height: number): null;

    /**
     * Free `expander_set_child`.
     * @param expander_set_child the {@link AgsGui.ExpanderSetChild}-struct
     * @since 3.2.2
     */
    function expander_set_child_free(expander_set_child: null): void;

    /**
     * Allocate {@link AgsGui.Plot}-struct.
     * @param n_points number of points
     * @param n_bitmaps number of bitmaps
     * @param n_pixmaps number of pixmaps
     * @returns the newly allocated {@link AgsGui.Plot}-struct
     * @since 3.0.0
     */
    function plot_alloc(n_points: number, n_bitmaps: number, n_pixmaps: number): null;

    /**
     * Free `plot`.
     * @param plot the {@link AgsGui.Plot}-struct
     * @since 3.0.0
     */
    function plot_free(plot: null): void;

    /**
     * Get bitmaps.
     * @param plot the {@link AgsGui.Plot}-struct
     * @returns bitmap field
     * @since 3.2.0
     */
    function plot_get_bitmap(plot: null): number;

    /**
     * Get bitmap colors.
     * @param plot the {@link AgsGui.Plot}-struct
     * @returns bitmap color field
     * @since 3.2.0
     */
    function plot_get_bitmap_color(plot: null): number;

    /**
     * Get join points.
     * @param plot the {@link AgsGui.Plot}-struct
     * @returns join_points field
     * @since 3.2.0
     */
    function plot_get_join_points(plot: null): boolean;

    /**
     * Get number of bitmaps.
     * @param plot the {@link AgsGui.Plot}-struct
     * @returns n_bitmaps field
     * @since 3.2.0
     */
    function plot_get_n_bitmaps(plot: null): number;

    /**
     * Get number of pixmaps.
     * @param plot the {@link AgsGui.Plot}-struct
     * @returns n_pixmaps field
     * @since 3.2.0
     */
    function plot_get_n_pixmaps(plot: null): number;

    /**
     * Get number of points.
     * @param plot the {@link AgsGui.Plot}-struct
     * @returns n_points field
     * @since 3.2.0
     */
    function plot_get_n_points(plot: null): number;

    /**
     * Get pixmaps.
     * @param plot the {@link AgsGui.Plot}-struct
     * @returns pixmap field
     * @since 3.2.0
     */
    function plot_get_pixmap(plot: null): number;

    /**
     * Get points.
     * @param plot the {@link AgsGui.Plot}-struct
     * @returns point field
     * @since 3.2.0
     */
    function plot_get_point(plot: null): number;

    /**
     * Get point colors.
     * @param plot the {@link AgsGui.Plot}-struct
     * @returns point color field
     * @since 3.2.0
     */
    function plot_get_point_color(plot: null): number;

    /**
     * Get point labels.
     * @param plot the {@link AgsGui.Plot}-struct
     * @returns point label field
     * @since 3.2.0
     */
    function plot_get_point_label(plot: null): string[];

    /**
     * Set bitmap field of `plot`.
     * @param plot the {@link AgsGui.Plot}-struct
     * @param bitmap the bitmaps
     * @since 3.2.0
     */
    function plot_set_bitmap(plot: null, bitmap: number): void;

    /**
     * Set bitmap color field of `plot`.
     * @param plot the {@link AgsGui.Plot}-struct
     * @param bitmap_color the bitmaps colors as array of RGB value
     * @since 3.2.0
     */
    function plot_set_bitmap_color(plot: null, bitmap_color: number): void;

    /**
     * Set join_points field of `plot`.
     * @param plot the {@link AgsGui.Plot}-struct
     * @param join_points if `true` join points, otherwise not
     * @since 3.2.0
     */
    function plot_set_join_points(plot: null, join_points: boolean): void;

    /**
     * Set n_bitmaps field of `plot`.
     * @param plot the {@link AgsGui.Plot}-struct
     * @param n_bitmaps the number of bitmaps
     * @since 3.2.0
     */
    function plot_set_n_bitmaps(plot: null, n_bitmaps: number): void;

    /**
     * Set n_pixmaps field of `plot`.
     * @param plot the {@link AgsGui.Plot}-struct
     * @param n_pixmaps the number of pixmaps
     * @since 3.2.0
     */
    function plot_set_n_pixmaps(plot: null, n_pixmaps: number): void;

    /**
     * Set n_points field of `plot`.
     * @param plot the {@link AgsGui.Plot}-struct
     * @param n_points the number of points
     * @since 3.2.0
     */
    function plot_set_n_points(plot: null, n_points: number): void;

    /**
     * Set pixmap field of `plot`.
     * @param plot the {@link AgsGui.Plot}-struct
     * @param pixmap the pixmaps
     * @since 3.2.0
     */
    function plot_set_pixmap(plot: null, pixmap: number): void;

    /**
     * Set point field of `plot`.
     * @param plot the {@link AgsGui.Plot}-struct
     * @param point the points as array of coordinates
     * @since 3.2.0
     */
    function plot_set_point(plot: null, point: number): void;

    /**
     * Set point color field of `plot`.
     * @param plot the {@link AgsGui.Plot}-struct
     * @param point_color the points colors as array of RGB value
     * @since 3.2.0
     */
    function plot_set_point_color(plot: null, point_color: number): void;

    /**
     * Set point label field of `plot`.
     * @param plot the {@link AgsGui.Plot}-struct
     * @param point_label the points labels as string vector
     * @since 3.2.0
     */
    function plot_set_point_label(plot: null, point_label: string): void;

    /**
     * @param closure 
     * @param return_value 
     * @param n_param_values 
     * @param param_values 
     * @param invocation_hint 
     * @param marshal_data 
     */
    function widget_cclosure_marshal_OBJECT__VOID(closure: GObject.Closure, return_value: GObject.Value | any, n_param_values: number, param_values: GObject.Value | any, invocation_hint: null, marshal_data: null): void;

    /**
     * @param closure 
     * @param return_value 
     * @param n_param_values 
     * @param param_values 
     * @param invocation_hint 
     * @param marshal_data 
     */
    function widget_cclosure_marshal_VOID__OBJECT_INT(closure: GObject.Closure, return_value: GObject.Value | any, n_param_values: number, param_values: GObject.Value | any, invocation_hint: null, marshal_data: null): void;

    /**
     * @param closure 
     * @param return_value 
     * @param n_param_values 
     * @param param_values 
     * @param invocation_hint 
     * @param marshal_data 
     */
    function widget_cclosure_marshal_VOID__STRING_INT(closure: GObject.Closure, return_value: GObject.Value | any, n_param_values: number, param_values: GObject.Value | any, invocation_hint: null, marshal_data: null): void;

    /**
     * @gir-type Callback
     */
    interface CartesianLabelFunc {
        (value: number, data: null): string;
    }

    /**
     * @gir-type Callback
     */
    interface CartesianScaleFunc {
        (value: number, data: null): number;
    }

    /**
     * @gir-type Callback
     */
    interface CartesianStepConversionFunc {
        (current: number, is_abscissae: boolean, data: null): number;
    }

    /**
     * @gir-type Callback
     */
    interface CartesianTranslateFunc {
        (x: number, y: number, ret_x: number, ret_y: number, data: null): void;
    }

    /**
     * @gir-type Flags
     */
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


    /**
     * @gir-type Flags
     */
    export namespace DialFlags {
        export const $gtype: GObject.GType<DialFlags>;
    }

    /**
     * @gir-type Flags
     */
    enum DialFlags {
        DIAL_WITH_BUTTONS,
        DIAL_SEEMLESS_MODE,
        DIAL_INVERSE_LIGHT,
    }


    /**
     * @gir-type Flags
     */
    enum DialStateFlags {
        MOUSE_BUTTON_PRESSED,
        BUTTON_DOWN_PRESSED,
        BUTTON_UP_PRESSED,
        MOTION_CAPTURING_INIT,
        MOTION_CAPTURING,
    }


    /**
     * @gir-type Flags
     */
    enum ExpanderSetFlags {
        GHOST,
        LEFT_ENDING,
        RIGHT_ENDING,
        LEFT_CONNECTOR,
        RIGHT_CONNECTOR,
    }


    /**
     * @gir-type Flags
     */
    enum FileEntryFlags {
        AUTO_COMPLETION,
        SELECTION,
        EDIT_DROPDOWN,
    }


    /**
     * @gir-type Flags
     */
    enum FileEntryKeyMask {
        L_CONTROL,
        R_CONTROL,
        L_SHIFT,
        R_SHIFT,
        L_META,
        R_META,
    }


    /**
     * @gir-type Flags
     */
    enum FileWidgetFlags {
        APP_SANDBOX,
        WITH_MULTI_SELECTION,
        WITH_PREVIEW,
        HIDDEN_FILES_VISIBLE,
    }


    /**
     * @gir-type Flags
     */
    enum IconLinkFlags {
        HIGHLIGHT,
        SHOW_CONTEXT_MENU,
    }


    /**
     * @gir-type Flags
     */
    enum InputDialogFlags {
        STRING_INPUT,
        SPIN_BUTTON_INPUT,
    }


    /**
     * @gir-type Flags
     */
    enum LevelKeyMask {
        L_CONTROL,
        R_CONTROL,
        L_SHIFT,
        R_SHIFT,
    }


    /**
     * @gir-type Flags
     */
    enum PianoFlags {
        FULL_SCALE,
        OCTAVE_SCALE,
    }


    /**
     * @gir-type Flags
     */
    enum ScaleKeyMask {
        L_CONTROL,
        R_CONTROL,
        L_SHIFT,
        R_SHIFT,
    }


    /**
     * @gir-type Flags
     */
    enum TempoKeyMask {
        L_CONTROL,
        R_CONTROL,
        L_SHIFT,
        R_SHIFT,
    }


    namespace Cartesian {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            "notify::center": (pspec: GObject.ParamSpec) => void;
            "notify::font-size": (pspec: GObject.ParamSpec) => void;
            "notify::line-width": (pspec: GObject.ParamSpec) => void;
            "notify::plot": (pspec: GObject.ParamSpec) => void;
            "notify::point-radius": (pspec: GObject.ParamSpec) => void;
            "notify::surface": (pspec: GObject.ParamSpec) => void;
            "notify::translate-data": (pspec: GObject.ParamSpec) => void;
            "notify::x-big-scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::x-end": (pspec: GObject.ParamSpec) => void;
            "notify::x-label": (pspec: GObject.ParamSpec) => void;
            "notify::x-label-data": (pspec: GObject.ParamSpec) => void;
            "notify::x-label-factor": (pspec: GObject.ParamSpec) => void;
            "notify::x-label-precision": (pspec: GObject.ParamSpec) => void;
            "notify::x-label-start": (pspec: GObject.ParamSpec) => void;
            "notify::x-label-step-width": (pspec: GObject.ParamSpec) => void;
            "notify::x-margin": (pspec: GObject.ParamSpec) => void;
            "notify::x-scale-data": (pspec: GObject.ParamSpec) => void;
            "notify::x-scale-step-width": (pspec: GObject.ParamSpec) => void;
            "notify::x-small-scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::x-start": (pspec: GObject.ParamSpec) => void;
            "notify::x-step": (pspec: GObject.ParamSpec) => void;
            "notify::x-step-data": (pspec: GObject.ParamSpec) => void;
            "notify::x-step-factor": (pspec: GObject.ParamSpec) => void;
            "notify::x-step-width": (pspec: GObject.ParamSpec) => void;
            "notify::x-translate-point": (pspec: GObject.ParamSpec) => void;
            "notify::x-unit": (pspec: GObject.ParamSpec) => void;
            "notify::x-unit-size": (pspec: GObject.ParamSpec) => void;
            "notify::x-unit-x0": (pspec: GObject.ParamSpec) => void;
            "notify::x-unit-y0": (pspec: GObject.ParamSpec) => void;
            "notify::y-big-scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::y-end": (pspec: GObject.ParamSpec) => void;
            "notify::y-label": (pspec: GObject.ParamSpec) => void;
            "notify::y-label-data": (pspec: GObject.ParamSpec) => void;
            "notify::y-label-factor": (pspec: GObject.ParamSpec) => void;
            "notify::y-label-precision": (pspec: GObject.ParamSpec) => void;
            "notify::y-label-start": (pspec: GObject.ParamSpec) => void;
            "notify::y-label-step-height": (pspec: GObject.ParamSpec) => void;
            "notify::y-margin": (pspec: GObject.ParamSpec) => void;
            "notify::y-scale-data": (pspec: GObject.ParamSpec) => void;
            "notify::y-scale-step-height": (pspec: GObject.ParamSpec) => void;
            "notify::y-small-scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::y-start": (pspec: GObject.ParamSpec) => void;
            "notify::y-step": (pspec: GObject.ParamSpec) => void;
            "notify::y-step-data": (pspec: GObject.ParamSpec) => void;
            "notify::y-step-factor": (pspec: GObject.ParamSpec) => void;
            "notify::y-step-height": (pspec: GObject.ParamSpec) => void;
            "notify::y-translate-point": (pspec: GObject.ParamSpec) => void;
            "notify::y-unit": (pspec: GObject.ParamSpec) => void;
            "notify::y-unit-size": (pspec: GObject.ParamSpec) => void;
            "notify::y-unit-x0": (pspec: GObject.ParamSpec) => void;
            "notify::y-unit-y0": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps {
            center: number;
            font_size: number;
            fontSize: number;
            line_width: number;
            lineWidth: number;
            plot: never;
            point_radius: number;
            pointRadius: number;
            surface: never;
            translate_data: never;
            translateData: never;
            x_big_scale_factor: number;
            xBigScaleFactor: number;
            x_end: number;
            xEnd: number;
            x_label: never;
            xLabel: never;
            x_label_data: never;
            xLabelData: never;
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
            x_scale_data: never;
            xScaleData: never;
            x_scale_step_width: number;
            xScaleStepWidth: number;
            x_small_scale_factor: number;
            xSmallScaleFactor: number;
            x_start: number;
            xStart: number;
            x_step: number;
            xStep: number;
            x_step_data: never;
            xStepData: never;
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
            y_label: never;
            yLabel: never;
            y_label_data: never;
            yLabelData: never;
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
            y_scale_data: never;
            yScaleData: never;
            y_scale_step_height: number;
            yScaleStepHeight: number;
            y_small_scale_factor: number;
            ySmallScaleFactor: number;
            y_start: number;
            yStart: number;
            y_step: number;
            yStep: number;
            y_step_data: never;
            yStepData: never;
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

    /**
     * @gir-type Class
     */
    class Cartesian extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<Cartesian>;

        // Properties
        /**
         * The center of lines
         * @since 3.0.0
         * @default 0.5
         */
        get center(): number;
        set center(val: number);

        /**
         * The font's size to draw labels and units.
         * @since 3.0.0
         * @default 12
         */
        get font_size(): number;
        set font_size(val: number);

        /**
         * The font's size to draw labels and units.
         * @since 3.0.0
         * @default 12
         */
        get fontSize(): number;
        set fontSize(val: number);

        /**
         * The line width.
         * @since 3.0.0
         * @default 1
         */
        get line_width(): number;
        set line_width(val: number);

        /**
         * The line width.
         * @since 3.0.0
         * @default 1
         */
        get lineWidth(): number;
        set lineWidth(val: number);

        /**
         * The {@link GLib.List}-struct containig {@link AgsGui.Plot}.
         * @since 4.0.0
         */
        get plot(): null;
        set plot(val: never);

        /**
         * The points radius.
         * @since 3.0.0
         * @default 0
         */
        get point_radius(): number;
        set point_radius(val: number);

        /**
         * The points radius.
         * @since 3.0.0
         * @default 0
         */
        get pointRadius(): number;
        set pointRadius(val: number);

        /**
         * The cairo surface.
         * @since 4.0.0
         */
        get surface(): null;
        set surface(val: never);

        /**
         * The data to pass to translate function.
         * @since 4.0.0
         */
        get translate_data(): null;
        set translate_data(val: never);

        /**
         * The data to pass to translate function.
         * @since 4.0.0
         */
        get translateData(): null;
        set translateData(val: never);

        /**
         * The scale factor to use with x big scale function.
         * @since 4.0.0
         * @default 5
         */
        get x_big_scale_factor(): number;
        set x_big_scale_factor(val: number);

        /**
         * The scale factor to use with x big scale function.
         * @since 4.0.0
         * @default 5
         */
        get xBigScaleFactor(): number;
        set xBigScaleFactor(val: number);

        /**
         * The x end.
         * @since 3.0.0
         * @default 199
         */
        get x_end(): number;
        set x_end(val: number);

        /**
         * The x end.
         * @since 3.0.0
         * @default 199
         */
        get xEnd(): number;
        set xEnd(val: number);

        /**
         * The x labels as a string array.
         * @since 3.0.0
         */
        get x_label(): null;
        set x_label(val: never);

        /**
         * The x labels as a string array.
         * @since 3.0.0
         */
        get xLabel(): null;
        set xLabel(val: never);

        /**
         * The data to pass to x label conversion function.
         * @since 4.0.0
         */
        get x_label_data(): null;
        set x_label_data(val: never);

        /**
         * The data to pass to x label conversion function.
         * @since 4.0.0
         */
        get xLabelData(): null;
        set xLabelData(val: never);

        /**
         * The factor to use with x label function.
         * @since 4.0.0
         * @default 5
         */
        get x_label_factor(): number;
        set x_label_factor(val: number);

        /**
         * The factor to use with x label function.
         * @since 4.0.0
         * @default 5
         */
        get xLabelFactor(): number;
        set xLabelFactor(val: number);

        /**
         * The precision to use with x label function.
         * @since 4.0.0
         * @default 3
         */
        get x_label_precision(): number;
        set x_label_precision(val: number);

        /**
         * The precision to use with x label function.
         * @since 4.0.0
         * @default 3
         */
        get xLabelPrecision(): number;
        set xLabelPrecision(val: number);

        /**
         * The x label start position.
         * @since 3.0.0
         * @default 10
         */
        get x_label_start(): number;
        set x_label_start(val: number);

        /**
         * The x label start position.
         * @since 3.0.0
         * @default 10
         */
        get xLabelStart(): number;
        set xLabelStart(val: number);

        /**
         * The x label step width.
         * @since 3.0.0
         * @default 50
         */
        get x_label_step_width(): number;
        set x_label_step_width(val: number);

        /**
         * The x label step width.
         * @since 3.0.0
         * @default 50
         */
        get xLabelStepWidth(): number;
        set xLabelStepWidth(val: number);

        /**
         * The horizontal x margin.
         * @since 3.0.0
         * @default 24
         */
        get x_margin(): number;
        set x_margin(val: number);

        /**
         * The horizontal x margin.
         * @since 3.0.0
         * @default 24
         */
        get xMargin(): number;
        set xMargin(val: number);

        /**
         * The data to pass to x scale conversion function.
         * @since 4.0.0
         */
        get x_scale_data(): null;
        set x_scale_data(val: never);

        /**
         * The data to pass to x scale conversion function.
         * @since 4.0.0
         */
        get xScaleData(): null;
        set xScaleData(val: never);

        /**
         * The width of a x scale step.
         * @since 3.0.0
         * @default 10
         */
        get x_scale_step_width(): number;
        set x_scale_step_width(val: number);

        /**
         * The width of a x scale step.
         * @since 3.0.0
         * @default 10
         */
        get xScaleStepWidth(): number;
        set xScaleStepWidth(val: number);

        /**
         * The scale factor to use with x small scale function.
         * @since 4.0.0
         * @default 1
         */
        get x_small_scale_factor(): number;
        set x_small_scale_factor(val: number);

        /**
         * The scale factor to use with x small scale function.
         * @since 4.0.0
         * @default 1
         */
        get xSmallScaleFactor(): number;
        set xSmallScaleFactor(val: number);

        /**
         * The x start.
         * @since 3.0.0
         * @default -60
         */
        get x_start(): number;
        set x_start(val: number);

        /**
         * The x start.
         * @since 3.0.0
         * @default -60
         */
        get xStart(): number;
        set xStart(val: number);

        /**
         * The x step.
         * @since 3.0.0
         * @default 1
         */
        get x_step(): number;
        set x_step(val: number);

        /**
         * The x step.
         * @since 3.0.0
         * @default 1
         */
        get xStep(): number;
        set xStep(val: number);

        /**
         * The data to pass to x step conversion function.
         * @since 4.0.0
         */
        get x_step_data(): null;
        set x_step_data(val: never);

        /**
         * The data to pass to x step conversion function.
         * @since 4.0.0
         */
        get xStepData(): null;
        set xStepData(val: never);

        /**
         * The step factor to use with x step conversion function.
         * @since 4.0.0
         * @default 1
         */
        get x_step_factor(): number;
        set x_step_factor(val: number);

        /**
         * The step factor to use with x step conversion function.
         * @since 4.0.0
         * @default 1
         */
        get xStepFactor(): number;
        set xStepFactor(val: number);

        /**
         * The width of a x step.
         * @since 3.0.0
         * @default 10
         */
        get x_step_width(): number;
        set x_step_width(val: number);

        /**
         * The width of a x step.
         * @since 3.0.0
         * @default 10
         */
        get xStepWidth(): number;
        set xStepWidth(val: number);

        /**
         * The x translate point.
         * @since 4.0.0
         * @default 0
         */
        get x_translate_point(): number;
        set x_translate_point(val: number);

        /**
         * The x translate point.
         * @since 4.0.0
         * @default 0
         */
        get xTranslatePoint(): number;
        set xTranslatePoint(val: number);

        /**
         * The x unit label.
         * @since 3.0.0
         * @default null
         */
        get x_unit(): string;
        set x_unit(val: string);

        /**
         * The x unit label.
         * @since 3.0.0
         * @default null
         */
        get xUnit(): string;
        set xUnit(val: string);

        /**
         * The x unit's size.
         * @since 4.0.0
         * @default 0
         */
        get x_unit_size(): number;
        set x_unit_size(val: number);

        /**
         * The x unit's size.
         * @since 4.0.0
         * @default 0
         */
        get xUnitSize(): number;
        set xUnitSize(val: number);

        /**
         * The x unit's x0 position.
         * @since 3.0.0
         * @default 0
         */
        get x_unit_x0(): number;
        set x_unit_x0(val: number);

        /**
         * The x unit's x0 position.
         * @since 3.0.0
         * @default 0
         */
        get xUnitX0(): number;
        set xUnitX0(val: number);

        /**
         * The x unit's y0 position.
         * @since 3.0.0
         * @default 0
         */
        get x_unit_y0(): number;
        set x_unit_y0(val: number);

        /**
         * The x unit's y0 position.
         * @since 3.0.0
         * @default 0
         */
        get xUnitY0(): number;
        set xUnitY0(val: number);

        /**
         * The scale factor to use with y big scale function.
         * @since 4.0.0
         * @default 5
         */
        get y_big_scale_factor(): number;
        set y_big_scale_factor(val: number);

        /**
         * The scale factor to use with y big scale function.
         * @since 4.0.0
         * @default 5
         */
        get yBigScaleFactor(): number;
        set yBigScaleFactor(val: number);

        /**
         * The y end.
         * @since 3.0.0
         * @default 99
         */
        get y_end(): number;
        set y_end(val: number);

        /**
         * The y end.
         * @since 3.0.0
         * @default 99
         */
        get yEnd(): number;
        set yEnd(val: number);

        /**
         * The y labels as a string array.
         * @since 3.0.0
         */
        get y_label(): null;
        set y_label(val: never);

        /**
         * The y labels as a string array.
         * @since 3.0.0
         */
        get yLabel(): null;
        set yLabel(val: never);

        /**
         * The data to pass to y label conversion function.
         * @since 4.0.0
         */
        get y_label_data(): null;
        set y_label_data(val: never);

        /**
         * The data to pass to y label conversion function.
         * @since 4.0.0
         */
        get yLabelData(): null;
        set yLabelData(val: never);

        /**
         * The factor to use with y label function.
         * @since 4.0.0
         * @default 5
         */
        get y_label_factor(): number;
        set y_label_factor(val: number);

        /**
         * The factor to use with y label function.
         * @since 4.0.0
         * @default 5
         */
        get yLabelFactor(): number;
        set yLabelFactor(val: number);

        /**
         * The precision to use with y label function.
         * @since 4.0.0
         * @default 3
         */
        get y_label_precision(): number;
        set y_label_precision(val: number);

        /**
         * The precision to use with y label function.
         * @since 4.0.0
         * @default 3
         */
        get yLabelPrecision(): number;
        set yLabelPrecision(val: number);

        /**
         * The y label start position.
         * @since 3.0.0
         * @default 20
         */
        get y_label_start(): number;
        set y_label_start(val: number);

        /**
         * The y label start position.
         * @since 3.0.0
         * @default 20
         */
        get yLabelStart(): number;
        set yLabelStart(val: number);

        /**
         * The y label step height.
         * @since 3.0.0
         * @default 50
         */
        get y_label_step_height(): number;
        set y_label_step_height(val: number);

        /**
         * The y label step height.
         * @since 3.0.0
         * @default 50
         */
        get yLabelStepHeight(): number;
        set yLabelStepHeight(val: number);

        /**
         * The horizontal y margin.
         * @since 3.0.0
         * @default 24
         */
        get y_margin(): number;
        set y_margin(val: number);

        /**
         * The horizontal y margin.
         * @since 3.0.0
         * @default 24
         */
        get yMargin(): number;
        set yMargin(val: number);

        /**
         * The data to pass to y scale conversion function.
         * @since 4.0.0
         */
        get y_scale_data(): null;
        set y_scale_data(val: never);

        /**
         * The data to pass to y scale conversion function.
         * @since 4.0.0
         */
        get yScaleData(): null;
        set yScaleData(val: never);

        /**
         * The height of a y scale step.
         * @since 3.0.0
         * @default 10
         */
        get y_scale_step_height(): number;
        set y_scale_step_height(val: number);

        /**
         * The height of a y scale step.
         * @since 3.0.0
         * @default 10
         */
        get yScaleStepHeight(): number;
        set yScaleStepHeight(val: number);

        /**
         * The scale factor to use with y small scale function.
         * @since 4.0.0
         * @default 1
         */
        get y_small_scale_factor(): number;
        set y_small_scale_factor(val: number);

        /**
         * The scale factor to use with y small scale function.
         * @since 4.0.0
         * @default 1
         */
        get ySmallScaleFactor(): number;
        set ySmallScaleFactor(val: number);

        /**
         * The y start.
         * @since 3.0.0
         * @default -70
         */
        get y_start(): number;
        set y_start(val: number);

        /**
         * The y start.
         * @since 3.0.0
         * @default -70
         */
        get yStart(): number;
        set yStart(val: number);

        /**
         * The y step.
         * @since 3.0.0
         * @default 1
         */
        get y_step(): number;
        set y_step(val: number);

        /**
         * The y step.
         * @since 3.0.0
         * @default 1
         */
        get yStep(): number;
        set yStep(val: number);

        /**
         * The data to pass to y step conversion function.
         * @since 4.0.0
         */
        get y_step_data(): null;
        set y_step_data(val: never);

        /**
         * The data to pass to y step conversion function.
         * @since 4.0.0
         */
        get yStepData(): null;
        set yStepData(val: never);

        /**
         * The step factor to use with y step conversion function.
         * @since 4.0.0
         * @default 1
         */
        get y_step_factor(): number;
        set y_step_factor(val: number);

        /**
         * The step factor to use with y step conversion function.
         * @since 4.0.0
         * @default 1
         */
        get yStepFactor(): number;
        set yStepFactor(val: number);

        /**
         * The height of a y step.
         * @since 3.0.0
         * @default 10
         */
        get y_step_height(): number;
        set y_step_height(val: number);

        /**
         * The height of a y step.
         * @since 3.0.0
         * @default 10
         */
        get yStepHeight(): number;
        set yStepHeight(val: number);

        /**
         * The y translate point.
         * @since 4.0.0
         * @default 0
         */
        get y_translate_point(): number;
        set y_translate_point(val: number);

        /**
         * The y translate point.
         * @since 4.0.0
         * @default 0
         */
        get yTranslatePoint(): number;
        set yTranslatePoint(val: number);

        /**
         * The y unit label.
         * @since 3.0.0
         * @default null
         */
        get y_unit(): string;
        set y_unit(val: string);

        /**
         * The y unit label.
         * @since 3.0.0
         * @default null
         */
        get yUnit(): string;
        set yUnit(val: string);

        /**
         * The y unit's size.
         * @since 4.0.0
         * @default 0
         */
        get y_unit_size(): number;
        set y_unit_size(val: number);

        /**
         * The y unit's size.
         * @since 4.0.0
         * @default 0
         */
        get yUnitSize(): number;
        set yUnitSize(val: number);

        /**
         * The y unit's x0 position.
         * @since 3.0.0
         * @default 0
         */
        get y_unit_x0(): number;
        set y_unit_x0(val: number);

        /**
         * The y unit's x0 position.
         * @since 3.0.0
         * @default 0
         */
        get yUnitX0(): number;
        set yUnitX0(val: number);

        /**
         * The y unit's y0 position.
         * @since 3.0.0
         * @default 0
         */
        get y_unit_y0(): number;
        set y_unit_y0(val: number);

        /**
         * The y unit's y0 position.
         * @since 3.0.0
         * @default 0
         */
        get yUnitY0(): number;
        set yUnitY0(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Cartesian.SignalSignatures;

        // Fields
        widget: Gtk.Widget;

        flags: CartesianFlags;

        // Constructors
        constructor(properties?: Partial<Cartesian.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Cartesian;

        // Signals
        /** @signal */
        connect<K extends keyof Cartesian.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Cartesian.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Cartesian.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Cartesian.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Cartesian.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Cartesian.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Perform linear step conversion.
         * @param current current step value
         * @param is_abscissae is abscissae
         * @param data the data
         */
        static linear_step_conversion_func(current: number, is_abscissae: boolean, data: null): number;

        /**
         * Perform linear translation.
         * @param x the x position
         * @param y the y position
         * @param data the {@link AgsGui.Cartesian}
         */
        static linear_translate_func(x: number, y: number, data: null): [number, number];

        /**
         * Labeling function of x big scale
         * @param value the value
         * @param data the {@link AgsGui.Cartesian}
         */
        static linear_x_big_scale_func(value: number, data: null): number;

        /**
         * Format x label `value` appropriately.
         * @param value the value
         * @param data the {@link AgsGui.Cartesian}
         */
        static linear_x_label_func(value: number, data: null): string;

        /**
         * Labeling function of x small scale
         * @param value the value
         * @param data the {@link AgsGui.Cartesian}
         */
        static linear_x_small_scale_func(value: number, data: null): number;

        /**
         * Labeling function of y big scale
         * @param value the value
         * @param data the {@link AgsGui.Cartesian}
         */
        static linear_y_big_scale_func(value: number, data: null): number;

        /**
         * Format y label `value` appropriately.
         * @param value the value
         * @param data the {@link AgsGui.Cartesian}
         */
        static linear_y_label_func(value: number, data: null): string;

        /**
         * Labeling function of y small scale
         * @param value the value
         * @param data the {@link AgsGui.Cartesian}
         */
        static linear_y_small_scale_func(value: number, data: null): number;

        // Methods
        /**
         * Add `plot` to `cartesian`.
         * @param plot the {@link AgsGui.Plot}-struct
         */
        add_plot(plot: null): void;

        /**
         * Fill x label if `do_x_label`, otherwise y label.
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
         * Reallocate x label if `do_x_label`, otherwise y label.
         * @param do_x_label do x label
         */
        reallocate_label(do_x_label: boolean): void;

        /**
         * Remove `plot` from `cartesian`.
         * @param plot the {@link AgsGui.Plot}-struct
         */
        remove_plot(plot: null): void;

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

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

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
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @returns the accessible identifier
         */
        get_accessible_id(): string | null;

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
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
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
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty): void;

        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;

        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState): void;

        /**
         * Sets the parent and sibling of an accessible object.
         * 
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent: Gtk.Accessible | null, next_sibling: Gtk.Accessible | null): void;

        /**
         * Updates the next accessible sibling.
         * 
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: Gtk.Accessible | null): void;

        /**
         * Informs ATs that the platform state has changed.
         * 
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState): void;

        /**
         * Updates an array of accessible properties.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible relations.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible states.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @virtual
         */
        vfunc_get_accessible_id(): string | null;

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;

        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): Gtk.ATContext | null;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Gets the ID of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: string | null): void;

        /**
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [boolean, Gtk.BuildableParser, never];

        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         * @virtual
         */
        vfunc_get_id(): string;

        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. {@link Gtk.Window} sets
         *  the {@link Gtk.Widget.visible} property here.
         * @param builder 
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, `g_object_set_property()`
         *  is used by default. {@link Gtk.Window} implements this to delay showing itself
         *  (i.e. setting the {@link Gtk.Widget.visible} property) until the whole
         *  interface is created.
         * @param builder 
         * @param name 
         * @param value 
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id 
         * @virtual
         */
        vfunc_set_id(id: string): void;
    }


    namespace Dial {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            /**
             * The ::value-changed signal notifies adjustment value changed.
             * @signal
             * @since 3.0.0
             * @run-last
             */
            "value-changed": () => void;
            "notify::adjustment": (pspec: GObject.ParamSpec) => void;
            "notify::button-height": (pspec: GObject.ParamSpec) => void;
            "notify::button-width": (pspec: GObject.ParamSpec) => void;
            "notify::font-name": (pspec: GObject.ParamSpec) => void;
            "notify::font-size": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::outline-strength": (pspec: GObject.ParamSpec) => void;
            "notify::radius": (pspec: GObject.ParamSpec) => void;
            "notify::scale-precision": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps {
            adjustment: GObject.Object;
            button_height: number;
            buttonHeight: number;
            button_width: number;
            buttonWidth: number;
            font_name: string;
            fontName: string;
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

    /**
     * @gir-type Class
     */
    class Dial extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<Dial>;

        // Properties
        /**
         * The adjustment storing current value and boundaries.
         * @since 3.0.0
         */
        get adjustment(): GObject.Object;
        set adjustment(val: GObject.Object);

        /**
         * The buttons height.
         * @since 3.0.0
         * @default 8
         */
        get button_height(): number;
        set button_height(val: number);

        /**
         * The buttons height.
         * @since 3.0.0
         * @default 8
         */
        get buttonHeight(): number;
        set buttonHeight(val: number);

        /**
         * The buttons width.
         * @since 3.0.0
         * @default 12
         */
        get button_width(): number;
        set button_width(val: number);

        /**
         * The buttons width.
         * @since 3.0.0
         * @default 12
         */
        get buttonWidth(): number;
        set buttonWidth(val: number);

        /**
         * The font name of the dials.
         * @since 8.0.0
         * @default null
         */
        get font_name(): string;
        set font_name(val: string);

        /**
         * The font name of the dials.
         * @since 8.0.0
         * @default null
         */
        get fontName(): string;
        set fontName(val: string);

        /**
         * The font size of the buttons.
         * @since 3.0.0
         * @default 12
         */
        get font_size(): number;
        set font_size(val: number);

        /**
         * The font size of the buttons.
         * @since 3.0.0
         * @default 12
         */
        get fontSize(): number;
        set fontSize(val: number);

        /**
         * The button's margin left.
         * @since 3.0.0
         * @default 4
         */
        get margin_left(): number;
        set margin_left(val: number);

        /**
         * The button's margin left.
         * @since 3.0.0
         * @default 4
         */
        get marginLeft(): number;
        set marginLeft(val: number);

        /**
         * The button's margin right.
         * @since 3.0.0
         * @default 4
         */
        get margin_right(): number;
        set margin_right(val: number);

        /**
         * The button's margin right.
         * @since 3.0.0
         * @default 4
         */
        get marginRight(): number;
        set marginRight(val: number);

        /**
         * The outline strength of the knob.
         * @since 3.0.0
         * @default 4
         */
        get outline_strength(): number;
        set outline_strength(val: number);

        /**
         * The outline strength of the knob.
         * @since 3.0.0
         * @default 4
         */
        get outlineStrength(): number;
        set outlineStrength(val: number);

        /**
         * The radius of the knob.
         * @since 3.0.0
         * @default 10
         */
        get radius(): number;
        set radius(val: number);

        /**
         * The precision of the scale.
         * @since 3.0.0
         * @default 8
         */
        get scale_precision(): number;
        set scale_precision(val: number);

        /**
         * The precision of the scale.
         * @since 3.0.0
         * @default 8
         */
        get scalePrecision(): number;
        set scalePrecision(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Dial.SignalSignatures;

        // Fields
        widget: Gtk.Widget;

        flags: DialFlags;

        state_flags: DialStateFlags;

        scale_max_precision: number;

        tolerance: number;

        negated_tolerance: number;

        gravity_x: number;

        gravity_y: number;

        current_x: number;

        current_y: number;

        // Constructors
        constructor(properties?: Partial<Dial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Dial;

        // Signals
        /** @signal */
        connect<K extends keyof Dial.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Dial.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Dial.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Dial.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Dial.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Dial.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * The value-changed event of `dial`.
         * @virtual
         */
        vfunc_value_changed(): void;

        // Methods
        /**
         * Get adjustment of `dial`.
         * @returns the {@link Gtk.Adjustment}
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
         * Get font name of `dial`.
         * @returns the font name
         */
        get_font_name(): string;

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
         * @param adjustment the {@link Gtk.Adjustment}
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
         * Set flags of `dial`.
         * @param flags the flags
         */
        set_flags(flags: DialFlags): void;

        /**
         * Set font name of `dial`.
         * @param font_name the font name
         */
        set_font_name(font_name: string): void;

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
         * Test flags of `dial`.
         * @param flags the flags
         * @returns `true` on success, otherwise `false`
         */
        test_flags(flags: DialFlags): boolean;

        /**
         * Set flags of `dial`.
         * @param flags the flags
         */
        unset_flags(flags: DialFlags): void;

        /**
         * The value-changed event of `dial`.
         */
        value_changed(): void;

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

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
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @returns the accessible identifier
         */
        get_accessible_id(): string | null;

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
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
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
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty): void;

        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;

        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState): void;

        /**
         * Sets the parent and sibling of an accessible object.
         * 
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent: Gtk.Accessible | null, next_sibling: Gtk.Accessible | null): void;

        /**
         * Updates the next accessible sibling.
         * 
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: Gtk.Accessible | null): void;

        /**
         * Informs ATs that the platform state has changed.
         * 
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState): void;

        /**
         * Updates an array of accessible properties.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible relations.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible states.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @virtual
         */
        vfunc_get_accessible_id(): string | null;

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;

        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): Gtk.ATContext | null;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Gets the ID of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: string | null): void;

        /**
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [boolean, Gtk.BuildableParser, never];

        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         * @virtual
         */
        vfunc_get_id(): string;

        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. {@link Gtk.Window} sets
         *  the {@link Gtk.Widget.visible} property here.
         * @param builder 
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, `g_object_set_property()`
         *  is used by default. {@link Gtk.Window} implements this to delay showing itself
         *  (i.e. setting the {@link Gtk.Widget.visible} property) until the whole
         *  interface is created.
         * @param builder 
         * @param name 
         * @param value 
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id 
         * @virtual
         */
        vfunc_set_id(id: string): void;
    }


    namespace Expander {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::baseline-child": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Orientable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Expander extends Gtk.Box implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<Expander>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Expander.SignalSignatures;

        // Fields
        box: Gtk.Box;

        flags: ExpanderFlags;

        expander: Gtk.Expander;

        grid: Gtk.Grid;

        children: null[];

        // Constructors
        constructor(properties?: Partial<Expander.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Expander;

        // Signals
        /** @signal */
        connect<K extends keyof Expander.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Expander.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Expander.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Expander.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Expander.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Expander.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Adds a {@link Gtk.Widget} to {@link AgsGui.Expander}
         * @param widget the child {@link Gtk.Widget}
         * @param x x-position
         * @param y y-position
         * @param width allocation width
         * @param height allocation height
         */
        add(widget: Gtk.Widget, x: number, y: number, width: number, height: number): void;

        /**
         * Find `child` of `expander`.
         * @param child the {@link Gtk.Widget}
         * @returns the matching {@link AgsGui.ExpanderChild}-struct
         */
        child_find(child: Gtk.Widget): null;

        /**
         * Removes a {@link Gtk.Widget} of {@link AgsGui.Expander}
         * @param widget the child {@link Gtk.Widget}
         */
        remove(widget: Gtk.Widget): void;

        /**
         * The orientation of the orientable.
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable&#x2019;s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace ExpanderSet {
        // Signal signatures
        interface SignalSignatures extends Gtk.Grid.SignalSignatures {
            "notify::baseline-row": (pspec: GObject.ParamSpec) => void;
            "notify::column-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::column-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::row-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::row-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Grid.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Orientable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ExpanderSet extends Gtk.Grid implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<ExpanderSet>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ExpanderSet.SignalSignatures;

        // Fields
        grid: Gtk.Grid;

        flags: ExpanderSetFlags;

        ghost: null[];

        location: null[];

        // Constructors
        constructor(properties?: Partial<ExpanderSet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ExpanderSet;

        // Signals
        /** @signal */
        connect<K extends keyof ExpanderSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ExpanderSet.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ExpanderSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ExpanderSet.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ExpanderSet.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ExpanderSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Adds a {@link Gtk.Widget} to {@link AgsGui.ExpanderSet}
         * @param widget the child {@link Gtk.Widget}
         * @param x x-position
         * @param y y-position
         * @param width allocation width
         * @param height allocation height
         */
        add(widget: Gtk.Widget, x: number, y: number, width: number, height: number): void;

        /**
         * Find `child` of `expander_set`.
         * @param child the {@link Gtk.Widget}
         * @returns the matching {@link AgsGui.ExpanderSetChild}-struct
         */
        child_find(child: Gtk.Widget): null;

        /**
         * Removes a {@link Gtk.Widget} of {@link AgsGui.ExpanderSet}
         * @param widget the child {@link Gtk.Widget}
         */
        remove(widget: Gtk.Widget): void;

        /**
         * The orientation of the orientable.
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable&#x2019;s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace FileDialog {
        // Signal signatures
        interface SignalSignatures extends Gtk.Window.SignalSignatures {
            /**
             * The ::response signal notifies about window interaction.
             * @signal
             * @since 6.6.0
             * @run-last
             */
            response: (arg0: number) => void;
            "notify::file-widget": (pspec: GObject.ParamSpec) => void;
            "notify::application": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::decorated": (pspec: GObject.ParamSpec) => void;
            "notify::default-height": (pspec: GObject.ParamSpec) => void;
            "notify::default-widget": (pspec: GObject.ParamSpec) => void;
            "notify::default-width": (pspec: GObject.ParamSpec) => void;
            "notify::deletable": (pspec: GObject.ParamSpec) => void;
            "notify::destroy-with-parent": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::focus-visible": (pspec: GObject.ParamSpec) => void;
            "notify::focus-widget": (pspec: GObject.ParamSpec) => void;
            "notify::fullscreened": (pspec: GObject.ParamSpec) => void;
            "notify::gravity": (pspec: GObject.ParamSpec) => void;
            "notify::handle-menubar-accel": (pspec: GObject.ParamSpec) => void;
            "notify::hide-on-close": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-active": (pspec: GObject.ParamSpec) => void;
            "notify::maximized": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonics-visible": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::resizable": (pspec: GObject.ParamSpec) => void;
            "notify::startup-id": (pspec: GObject.ParamSpec) => void;
            "notify::suspended": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::titlebar": (pspec: GObject.ParamSpec) => void;
            "notify::transient-for": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Window.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Native.ConstructorProps, Gtk.Root.ConstructorProps, Gtk.ShortcutManager.ConstructorProps {
            file_widget: never;
            fileWidget: never;
        }
    }

    /**
     * @gir-type Class
     */
    class FileDialog extends Gtk.Window implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Native, Gtk.Root, Gtk.ShortcutManager {
        static $gtype: GObject.GType<FileDialog>;

        // Properties
        /**
         * The file widget.
         * @since 6.6.0
         */
        get file_widget(): null;
        set file_widget(val: never);

        /**
         * The file widget.
         * @since 6.6.0
         */
        get fileWidget(): null;
        set fileWidget(val: never);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileDialog.SignalSignatures;

        // Fields
        window: Gtk.Window;

        flags: number;

        vbox: Gtk.Box;

        download_link: Gtk.LinkButton;

        activate_button: Gtk.Button;

        // Constructors
        constructor(properties?: Partial<FileDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](transient_for: Gtk.Widget, title: string): FileDialog;

        // Conflicted with Gtk.Window.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof FileDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileDialog.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FileDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileDialog.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FileDialog.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FileDialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * Response `file_dialog` due to user action.
         * @param response_id the response id
         * @virtual
         */
        vfunc_response(response_id: number): void;

        // Methods
        /**
         * Get download link of `file_dialog`.
         * @returns the {@link Gtk.LinkButton} or `null`
         */
        get_download_link(): Gtk.LinkButton;

        /**
         * Get widget of `file_dialog`.
         * @returns the {@link AgsGui.FileWidget}
         */
        get_file_widget(): FileWidget;

        /**
         * Response `file_dialog` due to user action.
         * @param response_id the response id
         */
        response(response_id: number): void;

        /**
         * Set `flags` of `file_dialog`.
         * @param flags the flags
         */
        set_flags(flags: number): void;

        /**
         * Test `flags` of `file_dialog`.
         * @param flags the flags
         * @returns `true` if flags set, otherwise `false`
         */
        test_flags(flags: number): boolean;

        /**
         * Set `flags` of `file_dialog`.
         * @param flags the flags
         */
        unset_flags(flags: number): void;

        /**
         * Returns the renderer that is used for this {@link Gtk.Native}.
         * @returns the renderer for `self`
         */
        get_renderer(): Gsk.Renderer | null;

        /**
         * Returns the surface of this {@link Gtk.Native}.
         * @returns the surface of `self`
         */
        get_surface(): Gdk.Surface | null;

        /**
         * Retrieves the surface transform of `self`.
         * 
         * This is the translation from `self`'s surface coordinates into
         * `self`'s widget coordinates.
         */
        get_surface_transform(): [number, number];

        /**
         * Realizes a {@link Gtk.Native}.
         * 
         * This should only be used by subclasses.
         */
        realize(): void;

        /**
         * Unrealizes a {@link Gtk.Native}.
         * 
         * This should only be used by subclasses.
         */
        unrealize(): void;

        /**
         * Returns the display that this {@link Gtk.Root} is on.
         * @returns the display of `root`
         */
        get_display(): Gdk.Display;

        /**
         * Retrieves the current focused widget within the root.
         * 
         * Note that this is the widget that would have the focus
         * if the root is active; if the root is not focused then
         * `gtk_widget_has_focus (widget)` will be `false` for the
         * widget.
         * @returns the currently focused widget
         */
        get_focus(): Gtk.Widget | null;

        /**
         * If `focus` is not the current focus widget, and is focusable, sets
         * it as the focus widget for the root.
         * 
         * If `focus` is `null`, unsets the focus widget for the root.
         * 
         * To set the focus to a particular widget in the root, it is usually
         * more convenient to use {@link Gtk.Widget.grab_focus} instead of
         * this function.
         * @param focus widget to be the new focus widget, or `null`    to unset the focus widget
         */
        set_focus(focus: Gtk.Widget | null): void;

        /**
         * Add a {@link Gtk.ShortcutController} to be managed.
         * @param controller 
         * @virtual
         */
        vfunc_add_controller(controller: Gtk.ShortcutController): void;

        /**
         * Remove a {@link Gtk.ShortcutController} that had previously
         *   been added
         * @param controller 
         * @virtual
         */
        vfunc_remove_controller(controller: Gtk.ShortcutController): void;
    }


    namespace FileEntry {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            /**
             * The ::activate signal notifies about window interaction.
             * @signal
             * @since 7.5.0
             * @run-last
             */
            activate: () => void;
            "notify::filename": (pspec: GObject.ParamSpec) => void;
            "notify::im-module": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-child": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Orientable.ConstructorProps {
            filename: string;
            im_module: string;
            imModule: string;
        }
    }

    /**
     * @gir-type Class
     */
    class FileEntry extends Gtk.Box implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<FileEntry>;

        // Properties
        /**
         * The file widget.
         * @since 7.5.0
         * @default null
         */
        get filename(): string;
        set filename(val: string);

        /**
         * The file widget.
         * @since 7.5.0
         * @default null
         */
        get im_module(): string;
        set im_module(val: string);

        /**
         * The file widget.
         * @since 7.5.0
         * @default null
         */
        get imModule(): string;
        set imModule(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileEntry.SignalSignatures;

        // Fields
        box: Gtk.Box;

        flags: FileEntryFlags;

        key_mask: FileEntryKeyMask;

        current_keyval: number;

        keyval_timestamp: number;

        im_context: Gtk.IMContext;

        cursor_position: number;

        max_filename_length: number;

        auto_completion_filename: string;

        font_size: number;

        xalign: number;

        do_selection: boolean;

        show_selection: boolean;

        selection_offset_x0: number;

        selection_offset_x1: number;

        click_x: number;

        click_y: number;

        text_width: number;

        text_height: number;

        clip_x0: number;

        clip_x1: number;

        drawing_area: Gtk.DrawingArea;

        edit_drop_down: Gtk.DropDown;

        // Constructors
        constructor(properties?: Partial<FileEntry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): FileEntry;

        // Signals
        /** @signal */
        connect<K extends keyof FileEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileEntry.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FileEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileEntry.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FileEntry.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FileEntry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_activate(): void;

        // Methods
        /**
         * Get filename of `file_entry`.
         * @returns the filename
         */
        get_filename(): string;

        /**
         * Set filename of `file_entry`.
         * @param filename the filename
         */
        set_filename(filename: string): void;

        /**
         * Set flags of `file_entry`.
         * @param flags the flags
         */
        set_flags(flags: FileEntryFlags): void;

        /**
         * Test flags of `file_entry`.
         * @param flags the flags
         * @returns `true` on success, otherwise `false`
         */
        test_flags(flags: FileEntryFlags): boolean;

        /**
         * Set flags of `file_entry`.
         * @param flags the flags
         */
        unset_flags(flags: FileEntryFlags): void;

        /**
         * The orientation of the orientable.
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable&#x2019;s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace FileWidget {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            /**
             * The ::create-dir signal notifies about creating directory.
             * @signal
             * @since 6.6.0
             * @run-last
             */
            "create-dir": (arg0: string) => void;
            /**
             * The ::refresh signal notifies about filesystem change.
             * @signal
             * @since 6.6.0
             * @run-last
             */
            refresh: () => void;
            "notify::app-generic-path": (pspec: GObject.ParamSpec) => void;
            "notify::app-home-path": (pspec: GObject.ParamSpec) => void;
            "notify::bookmark-filename": (pspec: GObject.ParamSpec) => void;
            "notify::current-path": (pspec: GObject.ParamSpec) => void;
            "notify::default-bundle": (pspec: GObject.ParamSpec) => void;
            "notify::default-path": (pspec: GObject.ParamSpec) => void;
            "notify::file-magic-executable": (pspec: GObject.ParamSpec) => void;
            "notify::home-path": (pspec: GObject.ParamSpec) => void;
            "notify::recently-used-filename": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-child": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Orientable.ConstructorProps {
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

    /**
     * @gir-type Class
     */
    class FileWidget extends Gtk.Box implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<FileWidget>;

        // Properties
        /**
         * The app generic path.
         * @since 6.6.0
         * @default null
         */
        get app_generic_path(): string;
        set app_generic_path(val: string);

        /**
         * The app generic path.
         * @since 6.6.0
         * @default null
         */
        get appGenericPath(): string;
        set appGenericPath(val: string);

        /**
         * The app home path.
         * @since 6.6.0
         * @default null
         */
        get app_home_path(): string;
        set app_home_path(val: string);

        /**
         * The app home path.
         * @since 6.6.0
         * @default null
         */
        get appHomePath(): string;
        set appHomePath(val: string);

        /**
         * The recently used filename.
         * @since 6.6.0
         * @default null
         */
        get bookmark_filename(): string;
        set bookmark_filename(val: string);

        /**
         * The recently used filename.
         * @since 6.6.0
         * @default null
         */
        get bookmarkFilename(): string;
        set bookmarkFilename(val: string);

        /**
         * The current path.
         * @since 6.6.0
         * @default null
         */
        get current_path(): string;
        set current_path(val: string);

        /**
         * The current path.
         * @since 6.6.0
         * @default null
         */
        get currentPath(): string;
        set currentPath(val: string);

        /**
         * The default bundle.
         * @since 6.6.0
         * @default null
         */
        get default_bundle(): string;
        set default_bundle(val: string);

        /**
         * The default bundle.
         * @since 6.6.0
         * @default null
         */
        get defaultBundle(): string;
        set defaultBundle(val: string);

        /**
         * The default path.
         * @since 6.6.0
         * @default null
         */
        get default_path(): string;
        set default_path(val: string);

        /**
         * The default path.
         * @since 6.6.0
         * @default null
         */
        get defaultPath(): string;
        set defaultPath(val: string);

        /**
         * The file magic executable.
         * @since 6.6.0
         * @default null
         */
        get file_magic_executable(): string;
        set file_magic_executable(val: string);

        /**
         * The file magic executable.
         * @since 6.6.0
         * @default null
         */
        get fileMagicExecutable(): string;
        set fileMagicExecutable(val: string);

        /**
         * The home path.
         * @since 6.6.0
         * @default null
         */
        get home_path(): string;
        set home_path(val: string);

        /**
         * The home path.
         * @since 6.6.0
         * @default null
         */
        get homePath(): string;
        set homePath(val: string);

        /**
         * The recently used filename.
         * @since 6.6.0
         * @default null
         */
        get recently_used_filename(): string;
        set recently_used_filename(val: string);

        /**
         * The recently used filename.
         * @since 6.6.0
         * @default null
         */
        get recentlyUsedFilename(): string;
        set recentlyUsedFilename(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileWidget.SignalSignatures;

        // Fields
        box: Gtk.Box;

        flags: FileWidgetFlags;

        file_action: FileWidgetFileAction;

        file_filter: FileWidgetFileFilter;

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

        // Constructors
        constructor(properties?: Partial<FileWidget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): FileWidget;

        // Signals
        /** @signal */
        connect<K extends keyof FileWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileWidget.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FileWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileWidget.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FileWidget.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FileWidget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * Create directory `dir_path`.
         * @param dir_path the directory path
         * @virtual
         */
        vfunc_create_dir(dir_path: string): void;

        /**
         * Refresh `file_widget` due to current path change.
         * @virtual
         */
        vfunc_refresh(): void;

        // Methods
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
         * @returns the bookmark {@link GLib.HashTable}
         */
        get_bookmark(): never;

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
         * @returns the location {@link GLib.HashTable}
         */
        get_location(): never;

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
         * @returns `true` if file action matches, otherwise `false`
         */
        test_file_action(file_action: number): boolean;

        /**
         * Test `file_filter` of `file_widget`.
         * @param file_filter the file filter
         * @returns `true` if file filter matches, otherwise `false`
         */
        test_file_filter(file_filter: number): boolean;

        /**
         * Test `flags` of `file_widget`.
         * @param flags the flags
         * @returns `true` if flags set, otherwise `false`
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

        /**
         * The orientation of the orientable.
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable&#x2019;s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace IconLink {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            /**
             * The ::clicked signal notifies about widget clicked.
             * @signal
             * @since 6.6.0
             * @run-last
             */
            clicked: () => void;
            /**
             * The ::copy-event signal notifies about widget copy_event.
             * @signal
             * @since 6.6.0
             * @run-last
             */
            "copy-event": () => IconLink;
            /**
             * The ::delete-event signal notifies about widget delete_event.
             * @signal
             * @since 6.6.0
             * @run-last
             */
            "delete-event": () => void;
            "notify::action": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-child": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Orientable.ConstructorProps {
            action: string;
        }
    }

    /**
     * @gir-type Class
     */
    class IconLink extends Gtk.Box implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<IconLink>;

        // Properties
        /**
         * The assigned action.
         * @since 6.6.0
         * @default null
         */
        get action(): string;
        set action(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: IconLink.SignalSignatures;

        // Fields
        box: Gtk.Box;

        flags: number;

        icon: Gtk.Image;

        link: Gtk.Label;

        context_group: Gio.SimpleActionGroup;

        context_popover: Gtk.PopoverMenu;

        context_popup: Gio.Menu;

        // Constructors
        constructor(properties?: Partial<IconLink.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](icon_name: string, action: string, link_text: string): IconLink;

        // Conflicted with Gtk.Box.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof IconLink.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, IconLink.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof IconLink.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, IconLink.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof IconLink.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<IconLink.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * Emits ::clicked event.
         * @virtual
         */
        vfunc_clicked(): void;

        /**
         * Emits ::copy-event event.
         * @virtual
         */
        vfunc_copy_event(): IconLink;

        /**
         * Emits ::delete-event event.
         * @virtual
         */
        vfunc_delete_event(): void;

        // Methods
        /**
         * Emits ::clicked event.
         */
        clicked(): void;

        /**
         * Emits ::copy-event event.
         * @returns the icon link
         */
        copy_event(): IconLink;

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
         * @returns `true` if flags set, otherwise `false`
         */
        test_flags(flags: number): boolean;

        /**
         * Set `flags` of `icon_link`.
         * @param flags the flags
         */
        unset_flags(flags: number): void;

        /**
         * The orientation of the orientable.
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable&#x2019;s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace Indicator {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            "notify::adjustment": (pspec: GObject.ParamSpec) => void;
            "notify::segment-count": (pspec: GObject.ParamSpec) => void;
            "notify::segment-height": (pspec: GObject.ParamSpec) => void;
            "notify::segment-padding": (pspec: GObject.ParamSpec) => void;
            "notify::segment-width": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Orientable.ConstructorProps {
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

    /**
     * @gir-type Class
     */
    class Indicator extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<Indicator>;

        // Properties
        /**
         * The adjustment giving indicator value.
         * @since 3.0.0
         */
        get adjustment(): GObject.Object;
        set adjustment(val: GObject.Object);

        /**
         * The indicator's segment count.
         * @since 3.0.0
         * @default 10
         */
        get segment_count(): number;
        set segment_count(val: number);

        /**
         * The indicator's segment count.
         * @since 3.0.0
         * @default 10
         */
        get segmentCount(): number;
        set segmentCount(val: number);

        /**
         * The indicator's segment height.
         * @since 3.0.0
         * @default 7
         */
        get segment_height(): number;
        set segment_height(val: number);

        /**
         * The indicator's segment height.
         * @since 3.0.0
         * @default 7
         */
        get segmentHeight(): number;
        set segmentHeight(val: number);

        /**
         * The indicator's segment padding.
         * @since 3.0.0
         * @default 3
         */
        get segment_padding(): number;
        set segment_padding(val: number);

        /**
         * The indicator's segment padding.
         * @since 3.0.0
         * @default 3
         */
        get segmentPadding(): number;
        set segmentPadding(val: number);

        /**
         * The indicator's segment width.
         * @since 3.0.0
         * @default 7
         */
        get segment_width(): number;
        set segment_width(val: number);

        /**
         * The indicator's segment width.
         * @since 3.0.0
         * @default 7
         */
        get segmentWidth(): number;
        set segmentWidth(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Indicator.SignalSignatures;

        // Fields
        widget: Gtk.Widget;

        orientation: Gtk.Orientation;

        animation_time: number;

        // Constructors
        constructor(properties?: Partial<Indicator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](orientation: Gtk.Orientation, segment_width: number, segment_height: number): Indicator;

        // Signals
        /** @signal */
        connect<K extends keyof Indicator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Indicator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Indicator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Indicator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Indicator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Indicator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get adjustment.
         * @returns the {@link Gtk.Adjustment}
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
         * @param adjustment the {@link Gtk.Adjustment}
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

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

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
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @returns the accessible identifier
         */
        get_accessible_id(): string | null;

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
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
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
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty): void;

        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;

        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState): void;

        /**
         * Sets the parent and sibling of an accessible object.
         * 
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent: Gtk.Accessible | null, next_sibling: Gtk.Accessible | null): void;

        /**
         * Updates the next accessible sibling.
         * 
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: Gtk.Accessible | null): void;

        /**
         * Informs ATs that the platform state has changed.
         * 
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState): void;

        /**
         * Updates an array of accessible properties.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible relations.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible states.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @virtual
         */
        vfunc_get_accessible_id(): string | null;

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;

        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): Gtk.ATContext | null;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Gets the ID of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: string | null): void;

        /**
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [boolean, Gtk.BuildableParser, never];

        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         * @virtual
         */
        vfunc_get_id(): string;

        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. {@link Gtk.Window} sets
         *  the {@link Gtk.Widget.visible} property here.
         * @param builder 
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, `g_object_set_property()`
         *  is used by default. {@link Gtk.Window} implements this to delay showing itself
         *  (i.e. setting the {@link Gtk.Widget.visible} property) until the whole
         *  interface is created.
         * @param builder 
         * @param name 
         * @param value 
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id 
         * @virtual
         */
        vfunc_set_id(id: string): void;

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable&#x2019;s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace InputDialog {
        // Signal signatures
        interface SignalSignatures extends Gtk.Window.SignalSignatures {
            /**
             * The ::response signal notifies adjustment value changed.
             * @signal
             * @since 6.6.0
             * @run-last
             */
            response: (arg0: number) => void;
            "notify::application": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::decorated": (pspec: GObject.ParamSpec) => void;
            "notify::default-height": (pspec: GObject.ParamSpec) => void;
            "notify::default-widget": (pspec: GObject.ParamSpec) => void;
            "notify::default-width": (pspec: GObject.ParamSpec) => void;
            "notify::deletable": (pspec: GObject.ParamSpec) => void;
            "notify::destroy-with-parent": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::focus-visible": (pspec: GObject.ParamSpec) => void;
            "notify::focus-widget": (pspec: GObject.ParamSpec) => void;
            "notify::fullscreened": (pspec: GObject.ParamSpec) => void;
            "notify::gravity": (pspec: GObject.ParamSpec) => void;
            "notify::handle-menubar-accel": (pspec: GObject.ParamSpec) => void;
            "notify::hide-on-close": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-active": (pspec: GObject.ParamSpec) => void;
            "notify::maximized": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonics-visible": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::resizable": (pspec: GObject.ParamSpec) => void;
            "notify::startup-id": (pspec: GObject.ParamSpec) => void;
            "notify::suspended": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::titlebar": (pspec: GObject.ParamSpec) => void;
            "notify::transient-for": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Window.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Native.ConstructorProps, Gtk.Root.ConstructorProps, Gtk.ShortcutManager.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class InputDialog extends Gtk.Window implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Native, Gtk.Root, Gtk.ShortcutManager {
        static $gtype: GObject.GType<InputDialog>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: InputDialog.SignalSignatures;

        // Fields
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

        // Constructors
        constructor(properties?: Partial<InputDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](title: string, transient_for: Gtk.Window): InputDialog;

        // Conflicted with Gtk.Window.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof InputDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InputDialog.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof InputDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InputDialog.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof InputDialog.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<InputDialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * Emit signal  AgsInputDialog::response().
         * @param response the response
         * @virtual
         */
        vfunc_response(response: number): void;

        // Methods
        /**
         * The {@link Gtk.Entry} to get input from.
         * @returns the entry widget
         */
        get_entry(): Gtk.Entry;

        /**
         * The {@link Gtk.SpinButton} to get input from.
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
         * @param message the message
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
         * @returns `true` if flags is set, otherwise `false`
         */
        test_flags(flags: number): boolean;

        /**
         * Unset `flags`.
         * @param flags the flags
         */
        unset_flags(flags: number): void;

        /**
         * Returns the renderer that is used for this {@link Gtk.Native}.
         * @returns the renderer for `self`
         */
        get_renderer(): Gsk.Renderer | null;

        /**
         * Returns the surface of this {@link Gtk.Native}.
         * @returns the surface of `self`
         */
        get_surface(): Gdk.Surface | null;

        /**
         * Retrieves the surface transform of `self`.
         * 
         * This is the translation from `self`'s surface coordinates into
         * `self`'s widget coordinates.
         */
        get_surface_transform(): [number, number];

        /**
         * Realizes a {@link Gtk.Native}.
         * 
         * This should only be used by subclasses.
         */
        realize(): void;

        /**
         * Unrealizes a {@link Gtk.Native}.
         * 
         * This should only be used by subclasses.
         */
        unrealize(): void;

        /**
         * Returns the display that this {@link Gtk.Root} is on.
         * @returns the display of `root`
         */
        get_display(): Gdk.Display;

        /**
         * Retrieves the current focused widget within the root.
         * 
         * Note that this is the widget that would have the focus
         * if the root is active; if the root is not focused then
         * `gtk_widget_has_focus (widget)` will be `false` for the
         * widget.
         * @returns the currently focused widget
         */
        get_focus(): Gtk.Widget | null;

        /**
         * If `focus` is not the current focus widget, and is focusable, sets
         * it as the focus widget for the root.
         * 
         * If `focus` is `null`, unsets the focus widget for the root.
         * 
         * To set the focus to a particular widget in the root, it is usually
         * more convenient to use {@link Gtk.Widget.grab_focus} instead of
         * this function.
         * @param focus widget to be the new focus widget, or `null`    to unset the focus widget
         */
        set_focus(focus: Gtk.Widget | null): void;

        /**
         * Add a {@link Gtk.ShortcutController} to be managed.
         * @param controller 
         * @virtual
         */
        vfunc_add_controller(controller: Gtk.ShortcutController): void;

        /**
         * Remove a {@link Gtk.ShortcutController} that had previously
         *   been added
         * @param controller 
         * @virtual
         */
        vfunc_remove_controller(controller: Gtk.ShortcutController): void;
    }


    namespace Led {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            "notify::segment-height": (pspec: GObject.ParamSpec) => void;
            "notify::segment-width": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps {
            segment_height: number;
            segmentHeight: number;
            segment_width: number;
            segmentWidth: number;
        }
    }

    /**
     * @gir-type Class
     */
    class Led extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<Led>;

        // Properties
        /**
         * The led's segment height.
         * @since 4.0.0
         * @default 8
         */
        get segment_height(): number;
        set segment_height(val: number);

        /**
         * The led's segment height.
         * @since 4.0.0
         * @default 8
         */
        get segmentHeight(): number;
        set segmentHeight(val: number);

        /**
         * The led's segment width.
         * @since 4.0.0
         * @default 12
         */
        get segment_width(): number;
        set segment_width(val: number);

        /**
         * The led's segment width.
         * @since 4.0.0
         * @default 12
         */
        get segmentWidth(): number;
        set segmentWidth(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Led.SignalSignatures;

        // Fields
        widget: Gtk.Widget;

        active: boolean;

        animation_time: number;

        // Constructors
        constructor(properties?: Partial<Led.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](segment_width: number, segment_height: number): Led;

        // Signals
        /** @signal */
        connect<K extends keyof Led.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Led.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Led.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Led.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Led.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Led.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
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
         * @returns `true` if led active, otherwise `false`
         */
        is_active(): boolean;

        /**
         * Set `led` active by `active`.
         * @param active `true` if active, otherwise `false`
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

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

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
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @returns the accessible identifier
         */
        get_accessible_id(): string | null;

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
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
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
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty): void;

        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;

        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState): void;

        /**
         * Sets the parent and sibling of an accessible object.
         * 
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent: Gtk.Accessible | null, next_sibling: Gtk.Accessible | null): void;

        /**
         * Updates the next accessible sibling.
         * 
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: Gtk.Accessible | null): void;

        /**
         * Informs ATs that the platform state has changed.
         * 
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState): void;

        /**
         * Updates an array of accessible properties.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible relations.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible states.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @virtual
         */
        vfunc_get_accessible_id(): string | null;

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;

        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): Gtk.ATContext | null;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Gets the ID of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: string | null): void;

        /**
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [boolean, Gtk.BuildableParser, never];

        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         * @virtual
         */
        vfunc_get_id(): string;

        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. {@link Gtk.Window} sets
         *  the {@link Gtk.Widget.visible} property here.
         * @param builder 
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, `g_object_set_property()`
         *  is used by default. {@link Gtk.Window} implements this to delay showing itself
         *  (i.e. setting the {@link Gtk.Widget.visible} property) until the whole
         *  interface is created.
         * @param builder 
         * @param name 
         * @param value 
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id 
         * @virtual
         */
        vfunc_set_id(id: string): void;
    }


    namespace LedArray {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::led-count": (pspec: GObject.ParamSpec) => void;
            "notify::segment-height": (pspec: GObject.ParamSpec) => void;
            "notify::segment-width": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-child": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Orientable.ConstructorProps {
            led_count: number;
            ledCount: number;
            segment_height: number;
            segmentHeight: number;
            segment_width: number;
            segmentWidth: number;
        }
    }

    /**
     * @gir-type Class
     */
    class LedArray extends Gtk.Box implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<LedArray>;

        // Properties
        /**
         * The count of leds available.
         * @since 3.0.0
         * @default 0
         */
        get led_count(): number;
        set led_count(val: number);

        /**
         * The count of leds available.
         * @since 3.0.0
         * @default 0
         */
        get ledCount(): number;
        set ledCount(val: number);

        /**
         * The segment height of one led.
         * @since 4.0.0
         * @default 10
         */
        get segment_height(): number;
        set segment_height(val: number);

        /**
         * The segment height of one led.
         * @since 4.0.0
         * @default 10
         */
        get segmentHeight(): number;
        set segmentHeight(val: number);

        /**
         * The segment width of one led.
         * @since 4.0.0
         * @default 10
         */
        get segment_width(): number;
        set segment_width(val: number);

        /**
         * The segment width of one led.
         * @since 4.0.0
         * @default 10
         */
        get segmentWidth(): number;
        set segmentWidth(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LedArray.SignalSignatures;

        // Fields
        box: Gtk.Box;

        led: Led;

        // Constructors
        constructor(properties?: Partial<LedArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](orientation: Gtk.Orientation, segment_width: number, segment_height: number, led_count: number): LedArray;

        // Conflicted with Gtk.Box.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof LedArray.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LedArray.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof LedArray.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LedArray.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof LedArray.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<LedArray.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
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

        /**
         * The orientation of the orientable.
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable&#x2019;s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace Level {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            /**
             * The ::value-changed signal notifies about modified default value.
             * @signal
             * @since 3.0.0
             * @run-last
             */
            "value-changed": (arg0: number) => void;
            "notify::data-format": (pspec: GObject.ParamSpec) => void;
            "notify::lower": (pspec: GObject.ParamSpec) => void;
            "notify::normalized-volume": (pspec: GObject.ParamSpec) => void;
            "notify::samplerate": (pspec: GObject.ParamSpec) => void;
            "notify::upper": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Orientable.ConstructorProps {
            data_format: number;
            dataFormat: number;
            lower: number;
            normalized_volume: number;
            normalizedVolume: number;
            samplerate: number;
            upper: number;
        }
    }

    /**
     * @gir-type Class
     */
    class Level extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<Level>;

        // Properties
        /**
         * The data format.
         * @since 4.0.0
         * @default 1
         */
        get data_format(): number;
        set data_format(val: number);

        /**
         * The data format.
         * @since 4.0.0
         * @default 1
         */
        get dataFormat(): number;
        set dataFormat(val: number);

        /**
         * The level's lower range.
         * @since 3.0.0
         * @default 0
         */
        get lower(): number;
        set lower(val: number);

        /**
         * The level's default value.
         * @since 3.0.0
         * @default 0
         */
        get normalized_volume(): number;
        set normalized_volume(val: number);

        /**
         * The level's default value.
         * @since 3.0.0
         * @default 0
         */
        get normalizedVolume(): number;
        set normalizedVolume(val: number);

        /**
         * The level's samplerate.
         * @since 5.1.0
         * @default 44100
         */
        get samplerate(): number;
        set samplerate(val: number);

        /**
         * The level's upper range.
         * @since 3.0.0
         * @default 1
         */
        get upper(): number;
        set upper(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Level.SignalSignatures;

        // Fields
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

        // Constructors
        constructor(properties?: Partial<Level.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](orientation: Gtk.Orientation, width_request: number, height_request: number): Level;

        // Signals
        /** @signal */
        connect<K extends keyof Level.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Level.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Level.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Level.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Level.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Level.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * Emits ::value-changed event.
         * @param normalized_volume the normalized volume
         * @virtual
         */
        vfunc_value_changed(normalized_volume: number): void;

        // Methods
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

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

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
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @returns the accessible identifier
         */
        get_accessible_id(): string | null;

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
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
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
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty): void;

        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;

        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState): void;

        /**
         * Sets the parent and sibling of an accessible object.
         * 
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent: Gtk.Accessible | null, next_sibling: Gtk.Accessible | null): void;

        /**
         * Updates the next accessible sibling.
         * 
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: Gtk.Accessible | null): void;

        /**
         * Informs ATs that the platform state has changed.
         * 
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState): void;

        /**
         * Updates an array of accessible properties.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible relations.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible states.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @virtual
         */
        vfunc_get_accessible_id(): string | null;

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;

        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): Gtk.ATContext | null;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Gets the ID of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: string | null): void;

        /**
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [boolean, Gtk.BuildableParser, never];

        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         * @virtual
         */
        vfunc_get_id(): string;

        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. {@link Gtk.Window} sets
         *  the {@link Gtk.Widget.visible} property here.
         * @param builder 
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, `g_object_set_property()`
         *  is used by default. {@link Gtk.Window} implements this to delay showing itself
         *  (i.e. setting the {@link Gtk.Widget.visible} property) until the whole
         *  interface is created.
         * @param builder 
         * @param name 
         * @param value 
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id 
         * @virtual
         */
        vfunc_set_id(id: string): void;

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable&#x2019;s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace LevelBox {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            /**
             * The ::child-height-request
             * @signal
             * @since 4.0.0
             * @run-last
             */
            "child-height-request": (arg0: GObject.Object, arg1: number) => void;
            /**
             * The ::child-width-request
             * @signal
             * @since 4.0.0
             * @run-last
             */
            "child-width-request": (arg0: GObject.Object, arg1: number) => void;
            "notify::baseline-child": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Orientable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class LevelBox extends Gtk.Box implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<LevelBox>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LevelBox.SignalSignatures;

        // Fields
        box: Gtk.Box;

        level: null[];

        // Constructors
        constructor(properties?: Partial<LevelBox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](orientation: Gtk.Orientation): LevelBox;

        // Signals
        /** @signal */
        connect<K extends keyof LevelBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LevelBox.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof LevelBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LevelBox.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof LevelBox.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<LevelBox.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * Notify about child level height request.
         * @param level the {@link AgsGui.Level}
         * @param height_request the level's height-request
         * @virtual
         */
        vfunc_child_height_request(level: Gtk.Widget, height_request: number): void;

        /**
         * Notify about child level width request.
         * @param level the {@link AgsGui.Level}
         * @param width_request the level's width-request
         * @virtual
         */
        vfunc_child_width_request(level: Gtk.Widget, width_request: number): void;

        // Methods
        /**
         * Add `level` to `level_box`.
         * @param level the {@link AgsGui.Level}
         */
        add_level(level: Level): void;

        /**
         * Notify about child level height request.
         * @param level the {@link AgsGui.Level}
         * @param height_request the level's height-request
         */
        child_height_request(level: Gtk.Widget, height_request: number): void;

        /**
         * Notify about child level width request.
         * @param level the {@link AgsGui.Level}
         * @param width_request the level's width-request
         */
        child_width_request(level: Gtk.Widget, width_request: number): void;

        /**
         * Get level.
         * @returns the {@link GLib.List}-struct containing {@link AgsGui.Level}
         */
        get_level(): Level[];

        /**
         * Remove level at `position` of `level_box`.
         * @param level the {@link AgsGui.Level}
         */
        remove_level(level: Level): void;

        /**
         * The orientation of the orientable.
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable&#x2019;s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace Notebook {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::tab-height": (pspec: GObject.ParamSpec) => void;
            "notify::tab-width": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-child": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Orientable.ConstructorProps {
            tab_height: number;
            tabHeight: number;
            tab_width: number;
            tabWidth: number;
        }
    }

    /**
     * @gir-type Class
     */
    class Notebook extends Gtk.Box implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<Notebook>;

        // Properties
        /**
         * The tab's height.
         * @since 4.0.0
         * @default 32
         */
        get tab_height(): number;
        set tab_height(val: number);

        /**
         * The tab's height.
         * @since 4.0.0
         * @default 32
         */
        get tabHeight(): number;
        set tabHeight(val: number);

        /**
         * The tab's width.
         * @since 4.0.0
         * @default 100
         */
        get tab_width(): number;
        set tab_width(val: number);

        /**
         * The tab's width.
         * @since 4.0.0
         * @default 100
         */
        get tabWidth(): number;
        set tabWidth(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Notebook.SignalSignatures;

        // Fields
        box: Gtk.Box;

        navigation: Gtk.Box;

        scroll_prev: Gtk.Button;

        scroll_next: Gtk.Button;

        scrolled_window: Gtk.ScrolledWindow;

        tab_box: Gtk.Box;

        tab: null[];

        // Constructors
        constructor(properties?: Partial<Notebook.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Notebook;

        // Signals
        /** @signal */
        connect<K extends keyof Notebook.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Notebook.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Notebook.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Notebook.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Notebook.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Notebook.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Add `tab` to `notebook`.
         * @param tab the {@link Gtk.ToggleButton}
         */
        add_tab(tab: Gtk.ToggleButton): void;

        /**
         * Get tab.
         * @returns the {@link GLib.List}-struct containing {@link Gtk.ToggleButton}
         */
        get_tab(): Gtk.ToggleButton[];

        /**
         * Insert a new `AgsNotebookTab`-struct to `notebook`.
         * @param tab the {@link Gtk.ToggleButton}
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
         * @param tab the {@link Gtk.ToggleButton}
         */
        remove_tab(tab: Gtk.ToggleButton): void;

        /**
         * The orientation of the orientable.
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable&#x2019;s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace Piano {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            /**
             * The ::key-clicked signal notifies about key clicked.
             * @signal
             * @since 3.0.0
             * @run-last
             */
            "key-clicked": (arg0: string, arg1: number) => void;
            /**
             * The ::key-pressed signal notifies about key pressed.
             * @signal
             * @since 3.0.0
             * @run-last
             */
            "key-pressed": (arg0: string, arg1: number) => void;
            /**
             * The ::key-released signal notifies about key released.
             * @signal
             * @since 3.0.0
             * @run-last
             */
            "key-released": (arg0: string, arg1: number) => void;
            "notify::base-key-code": (pspec: GObject.ParamSpec) => void;
            "notify::base-note": (pspec: GObject.ParamSpec) => void;
            "notify::key-count": (pspec: GObject.ParamSpec) => void;
            "notify::key-height": (pspec: GObject.ParamSpec) => void;
            "notify::key-width": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Orientable.ConstructorProps {
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

    /**
     * @gir-type Class
     */
    class Piano extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<Piano>;

        // Properties
        /**
         * The base key code.
         * @since 3.0.0
         * @default 0
         */
        get base_key_code(): number;
        set base_key_code(val: number);

        /**
         * The base key code.
         * @since 3.0.0
         * @default 0
         */
        get baseKeyCode(): number;
        set baseKeyCode(val: number);

        /**
         * The base note to use as lower.
         * @since 3.0.0
         * @default C,,
         */
        get base_note(): string;
        set base_note(val: string);

        /**
         * The base note to use as lower.
         * @since 3.0.0
         * @default C,,
         */
        get baseNote(): string;
        set baseNote(val: string);

        /**
         * The count of keys to be drawn.
         * @since 3.0.0
         * @default 128
         */
        get key_count(): number;
        set key_count(val: number);

        /**
         * The count of keys to be drawn.
         * @since 3.0.0
         * @default 128
         */
        get keyCount(): number;
        set keyCount(val: number);

        /**
         * The key height to use for drawing a key.
         * @since 3.0.0
         * @default 14
         */
        get key_height(): number;
        set key_height(val: number);

        /**
         * The key height to use for drawing a key.
         * @since 3.0.0
         * @default 14
         */
        get keyHeight(): number;
        set keyHeight(val: number);

        /**
         * The key width to use for drawing a key.
         * @since 3.0.0
         * @default 60
         */
        get key_width(): number;
        set key_width(val: number);

        /**
         * The key width to use for drawing a key.
         * @since 3.0.0
         * @default 60
         */
        get keyWidth(): number;
        set keyWidth(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Piano.SignalSignatures;

        // Fields
        widget: Gtk.Widget;

        flags: PianoFlags;

        orientation: Gtk.Orientation;

        button_state: PianoButtonState;

        font_size: number;

        cursor_position: number;

        current_key: number;

        active_key: number;

        active_key_count: number;

        // Constructors
        constructor(properties?: Partial<Piano.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](orientation: Gtk.Orientation, key_width: number, key_height: number): Piano;

        // Signals
        /** @signal */
        connect<K extends keyof Piano.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Piano.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Piano.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Piano.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Piano.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Piano.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Get note from key code.
         * @param key_code the key code
         */
        static key_code_to_note(key_code: number): string;

        // Virtual methods
        /**
         * Emits ::key-clicked event.
         * @param note the string representation of key
         * @param key_code the key code
         * @virtual
         */
        vfunc_key_clicked(note: string, key_code: number): void;

        /**
         * Emits ::key-pressed event.
         * @param note the string representation of key
         * @param key_code the key code
         * @virtual
         */
        vfunc_key_pressed(note: string, key_code: number): void;

        /**
         * Emits ::key-released event.
         * @param note the string representation of key
         * @param key_code the key code
         * @virtual
         */
        vfunc_key_released(note: string, key_code: number): void;

        // Methods
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
         * @param button_state the {@link AgsGui.PianoButtonState}-enum
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

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

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
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @returns the accessible identifier
         */
        get_accessible_id(): string | null;

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
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
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
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty): void;

        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;

        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState): void;

        /**
         * Sets the parent and sibling of an accessible object.
         * 
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent: Gtk.Accessible | null, next_sibling: Gtk.Accessible | null): void;

        /**
         * Updates the next accessible sibling.
         * 
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: Gtk.Accessible | null): void;

        /**
         * Informs ATs that the platform state has changed.
         * 
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState): void;

        /**
         * Updates an array of accessible properties.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible relations.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible states.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @virtual
         */
        vfunc_get_accessible_id(): string | null;

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;

        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): Gtk.ATContext | null;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Gets the ID of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: string | null): void;

        /**
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [boolean, Gtk.BuildableParser, never];

        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         * @virtual
         */
        vfunc_get_id(): string;

        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. {@link Gtk.Window} sets
         *  the {@link Gtk.Widget.visible} property here.
         * @param builder 
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, `g_object_set_property()`
         *  is used by default. {@link Gtk.Window} implements this to delay showing itself
         *  (i.e. setting the {@link Gtk.Widget.visible} property) until the whole
         *  interface is created.
         * @param builder 
         * @param name 
         * @param value 
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id 
         * @virtual
         */
        vfunc_set_id(id: string): void;

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable&#x2019;s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace Ruler {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            "notify::adjustment": (pspec: GObject.ParamSpec) => void;
            "notify::factor": (pspec: GObject.ParamSpec) => void;
            "notify::font-size": (pspec: GObject.ParamSpec) => void;
            "notify::large-step": (pspec: GObject.ParamSpec) => void;
            "notify::precision": (pspec: GObject.ParamSpec) => void;
            "notify::scale-precision": (pspec: GObject.ParamSpec) => void;
            "notify::small-step": (pspec: GObject.ParamSpec) => void;
            "notify::step": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Orientable.ConstructorProps {
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

    /**
     * @gir-type Class
     */
    class Ruler extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<Ruler>;

        // Properties
        /**
         * The adjustment.
         * @since 3.0.0
         */
        get adjustment(): GObject.Object;
        set adjustment(val: GObject.Object);

        /**
         * The factor.
         * @since 4.0.0
         * @default 16
         */
        get factor(): number;
        set factor(val: number);

        /**
         * The font size.
         * @since 3.6.15
         * @default 12
         */
        get font_size(): number;
        set font_size(val: number);

        /**
         * The font size.
         * @since 3.6.15
         * @default 12
         */
        get fontSize(): number;
        set fontSize(val: number);

        /**
         * The large step's width.
         * @since 3.0.0
         * @default 8
         */
        get large_step(): number;
        set large_step(val: number);

        /**
         * The large step's width.
         * @since 3.0.0
         * @default 8
         */
        get largeStep(): number;
        set largeStep(val: number);

        /**
         * The precision.
         * @since 4.0.0
         * @default 1
         */
        get precision(): number;
        set precision(val: number);

        /**
         * The scale precision.
         * @since 4.0.0
         * @default 1
         */
        get scale_precision(): number;
        set scale_precision(val: number);

        /**
         * The scale precision.
         * @since 4.0.0
         * @default 1
         */
        get scalePrecision(): number;
        set scalePrecision(val: number);

        /**
         * The small step's width.
         * @since 3.0.0
         * @default 6
         */
        get small_step(): number;
        set small_step(val: number);

        /**
         * The small step's width.
         * @since 3.0.0
         * @default 6
         */
        get smallStep(): number;
        set smallStep(val: number);

        /**
         * The step's width.
         * @since 3.0.0
         * @default 16
         */
        get step(): number;
        set step(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Ruler.SignalSignatures;

        // Fields
        widget: Gtk.Widget;

        orientation: Gtk.Orientation;

        // Constructors
        constructor(properties?: Partial<Ruler.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](orientation: Gtk.Orientation, step: number, factor: number, precision: number, scale_precision: number): Ruler;

        // Signals
        /** @signal */
        connect<K extends keyof Ruler.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Ruler.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Ruler.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Ruler.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Ruler.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Ruler.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get adjustment of `ruler`.
         * @returns the {@link Gtk.Adjustment}
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
         * @param adjustment the {@link Gtk.Adjustment}
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

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

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
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @returns the accessible identifier
         */
        get_accessible_id(): string | null;

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
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
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
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty): void;

        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;

        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState): void;

        /**
         * Sets the parent and sibling of an accessible object.
         * 
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent: Gtk.Accessible | null, next_sibling: Gtk.Accessible | null): void;

        /**
         * Updates the next accessible sibling.
         * 
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: Gtk.Accessible | null): void;

        /**
         * Informs ATs that the platform state has changed.
         * 
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState): void;

        /**
         * Updates an array of accessible properties.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible relations.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible states.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @virtual
         */
        vfunc_get_accessible_id(): string | null;

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;

        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): Gtk.ATContext | null;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Gets the ID of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: string | null): void;

        /**
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [boolean, Gtk.BuildableParser, never];

        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         * @virtual
         */
        vfunc_get_id(): string;

        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. {@link Gtk.Window} sets
         *  the {@link Gtk.Widget.visible} property here.
         * @param builder 
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, `g_object_set_property()`
         *  is used by default. {@link Gtk.Window} implements this to delay showing itself
         *  (i.e. setting the {@link Gtk.Widget.visible} property) until the whole
         *  interface is created.
         * @param builder 
         * @param name 
         * @param value 
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id 
         * @virtual
         */
        vfunc_set_id(id: string): void;

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable&#x2019;s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace Scale {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            /**
             * The ::value-changed signal notifies about modified default value.
             * @signal
             * @since 3.0.0
             * @run-last
             */
            "value-changed": (arg0: number) => void;
            "notify::control-name": (pspec: GObject.ParamSpec) => void;
            "notify::default-value": (pspec: GObject.ParamSpec) => void;
            "notify::lower": (pspec: GObject.ParamSpec) => void;
            "notify::upper": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Orientable.ConstructorProps {
            control_name: string;
            controlName: string;
            default_value: number;
            defaultValue: number;
            lower: number;
            upper: number;
        }
    }

    /**
     * @gir-type Class
     */
    class Scale extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<Scale>;

        // Properties
        /**
         * The scale's control name.
         * @since 3.0.0
         * @default null
         */
        get control_name(): string;
        set control_name(val: string);

        /**
         * The scale's control name.
         * @since 3.0.0
         * @default null
         */
        get controlName(): string;
        set controlName(val: string);

        /**
         * The scale's default value.
         * @since 3.0.0
         * @default 0
         */
        get default_value(): number;
        set default_value(val: number);

        /**
         * The scale's default value.
         * @since 3.0.0
         * @default 0
         */
        get defaultValue(): number;
        set defaultValue(val: number);

        /**
         * The scale's lower range.
         * @since 3.0.0
         * @default 0
         */
        get lower(): number;
        set lower(val: number);

        /**
         * The scale's upper range.
         * @since 3.0.0
         * @default 1
         */
        get upper(): number;
        set upper(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Scale.SignalSignatures;

        // Fields
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

        // Constructors
        constructor(properties?: Partial<Scale.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](orientation: Gtk.Orientation, width_request: number, height_request: number): Scale;

        // Signals
        /** @signal */
        connect<K extends keyof Scale.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Scale.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Scale.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Scale.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Scale.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Scale.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * Emits ::value-changed event.
         * @param default_value the default value
         * @virtual
         */
        vfunc_value_changed(default_value: number): void;

        // Methods
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

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

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
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @returns the accessible identifier
         */
        get_accessible_id(): string | null;

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
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
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
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty): void;

        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;

        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState): void;

        /**
         * Sets the parent and sibling of an accessible object.
         * 
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent: Gtk.Accessible | null, next_sibling: Gtk.Accessible | null): void;

        /**
         * Updates the next accessible sibling.
         * 
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: Gtk.Accessible | null): void;

        /**
         * Informs ATs that the platform state has changed.
         * 
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState): void;

        /**
         * Updates an array of accessible properties.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible relations.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible states.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @virtual
         */
        vfunc_get_accessible_id(): string | null;

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;

        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): Gtk.ATContext | null;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Gets the ID of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: string | null): void;

        /**
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [boolean, Gtk.BuildableParser, never];

        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         * @virtual
         */
        vfunc_get_id(): string;

        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. {@link Gtk.Window} sets
         *  the {@link Gtk.Widget.visible} property here.
         * @param builder 
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, `g_object_set_property()`
         *  is used by default. {@link Gtk.Window} implements this to delay showing itself
         *  (i.e. setting the {@link Gtk.Widget.visible} property) until the whole
         *  interface is created.
         * @param builder 
         * @param name 
         * @param value 
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id 
         * @virtual
         */
        vfunc_set_id(id: string): void;

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable&#x2019;s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace ScaleBox {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            /**
             * The ::child-height-request
             * @signal
             * @since 4.0.0
             * @run-last
             */
            "child-height-request": (arg0: GObject.Object, arg1: number) => void;
            /**
             * The ::child-width-request
             * @signal
             * @since 4.0.0
             * @run-last
             */
            "child-width-request": (arg0: GObject.Object, arg1: number) => void;
            "notify::baseline-child": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Orientable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ScaleBox extends Gtk.Box implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<ScaleBox>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ScaleBox.SignalSignatures;

        // Fields
        box: Gtk.Box;

        scale: null[];

        // Constructors
        constructor(properties?: Partial<ScaleBox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](orientation: Gtk.Orientation): ScaleBox;

        // Signals
        /** @signal */
        connect<K extends keyof ScaleBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ScaleBox.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ScaleBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ScaleBox.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ScaleBox.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ScaleBox.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * Notify about child scale height request.
         * @param scale the {@link AgsGui.Scale}
         * @param height_request the scale's height-request
         * @virtual
         */
        vfunc_child_height_request(scale: Gtk.Widget, height_request: number): void;

        /**
         * Notify about child scale width request.
         * @param scale the {@link AgsGui.Scale}
         * @param width_request the scale's width-request
         * @virtual
         */
        vfunc_child_width_request(scale: Gtk.Widget, width_request: number): void;

        // Methods
        /**
         * Add `scale` to `scale_box`.
         * @param scale the {@link AgsGui.Scale}
         */
        add_scale(scale: Scale): void;

        /**
         * Notify about child scale height request.
         * @param scale the {@link AgsGui.Scale}
         * @param height_request the scale's height-request
         */
        child_height_request(scale: Gtk.Widget, height_request: number): void;

        /**
         * Notify about child scale width request.
         * @param scale the {@link AgsGui.Scale}
         * @param width_request the scale's width-request
         */
        child_width_request(scale: Gtk.Widget, width_request: number): void;

        /**
         * Get scale.
         * @returns the {@link GLib.List}-struct containing {@link AgsGui.Scale}
         */
        get_scale(): Scale[];

        /**
         * Remove `scale` from `scale_box`.
         * @param scale the {@link AgsGui.Scale}
         */
        remove_scale(scale: Scale): void;

        /**
         * The orientation of the orientable.
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable&#x2019;s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace ScrolledLevelBox {
        // Signal signatures
        interface SignalSignatures extends Gtk.Grid.SignalSignatures {
            "notify::baseline-row": (pspec: GObject.ParamSpec) => void;
            "notify::column-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::column-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::row-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::row-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Grid.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Orientable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ScrolledLevelBox extends Gtk.Grid implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<ScrolledLevelBox>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ScrolledLevelBox.SignalSignatures;

        // Fields
        grid: Gtk.Grid;

        scrolled_window: Gtk.ScrolledWindow;

        level_box: Gtk.Box;

        // Constructors
        constructor(properties?: Partial<ScrolledLevelBox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ScrolledLevelBox;

        // Signals
        /** @signal */
        connect<K extends keyof ScrolledLevelBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ScrolledLevelBox.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ScrolledLevelBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ScrolledLevelBox.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ScrolledLevelBox.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ScrolledLevelBox.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get level box of `scrolled_level_box`.
         * @returns the {@link AgsGui.LevelBox}
         */
        get_level_box(): LevelBox;

        /**
         * Get scrolled window of `scrolled_level_box`.
         * @returns the {@link Gtk.ScrolledWindow}
         */
        get_scrolled_window(): Gtk.ScrolledWindow;

        /**
         * The orientation of the orientable.
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable&#x2019;s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace ScrolledPiano {
        // Signal signatures
        interface SignalSignatures extends Gtk.Grid.SignalSignatures {
            "notify::baseline-row": (pspec: GObject.ParamSpec) => void;
            "notify::column-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::column-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::row-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::row-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Grid.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Orientable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ScrolledPiano extends Gtk.Grid implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<ScrolledPiano>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ScrolledPiano.SignalSignatures;

        // Fields
        grid: Gtk.Grid;

        scrolled_window: Gtk.ScrolledWindow;

        piano: Piano;

        // Constructors
        constructor(properties?: Partial<ScrolledPiano.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ScrolledPiano;

        // Signals
        /** @signal */
        connect<K extends keyof ScrolledPiano.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ScrolledPiano.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ScrolledPiano.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ScrolledPiano.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ScrolledPiano.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ScrolledPiano.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get piano of `scrolled_piano`.
         * @returns the {@link AgsGui.Piano}
         */
        get_piano(): Piano;

        /**
         * Get scrolled window of `scrolled_piano`.
         * @returns the #GtkScrolled_Window
         */
        get_scrolled_window(): Gtk.ScrolledWindow;

        /**
         * The orientation of the orientable.
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable&#x2019;s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace ScrolledScaleBox {
        // Signal signatures
        interface SignalSignatures extends Gtk.Grid.SignalSignatures {
            "notify::baseline-row": (pspec: GObject.ParamSpec) => void;
            "notify::column-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::column-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::row-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::row-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Grid.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Orientable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ScrolledScaleBox extends Gtk.Grid implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<ScrolledScaleBox>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ScrolledScaleBox.SignalSignatures;

        // Fields
        grid: Gtk.Grid;

        scrolled_window: Gtk.ScrolledWindow;

        scale_box: Gtk.Box;

        // Constructors
        constructor(properties?: Partial<ScrolledScaleBox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ScrolledScaleBox;

        // Signals
        /** @signal */
        connect<K extends keyof ScrolledScaleBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ScrolledScaleBox.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ScrolledScaleBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ScrolledScaleBox.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ScrolledScaleBox.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ScrolledScaleBox.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get scrolled_window of `scrolled_scale_box`.
         * @returns the #GtkScrolled_Window
         */
        get_scrolled_window(): Gtk.ScrolledWindow;

        /**
         * The orientation of the orientable.
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable&#x2019;s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace Tempo {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            /**
             * The ::value-changed signal notifies about modified default value.
             * @signal
             * @since 5.1.0
             * @run-last
             */
            "value-changed": (arg0: number) => void;
            "notify::control-name": (pspec: GObject.ParamSpec) => void;
            "notify::default-value": (pspec: GObject.ParamSpec) => void;
            "notify::lower": (pspec: GObject.ParamSpec) => void;
            "notify::upper": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::accessible-role": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps, Gtk.Orientable.ConstructorProps {
            control_name: string;
            controlName: string;
            default_value: number;
            defaultValue: number;
            lower: number;
            upper: number;
        }
    }

    /**
     * @gir-type Class
     */
    class Tempo extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Orientable {
        static $gtype: GObject.GType<Tempo>;

        // Properties
        /**
         * The tempo's control name.
         * @since 5.1.0
         * @default null
         */
        get control_name(): string;
        set control_name(val: string);

        /**
         * The tempo's control name.
         * @since 5.1.0
         * @default null
         */
        get controlName(): string;
        set controlName(val: string);

        /**
         * The tempo's default value.
         * @since 5.1.0
         * @default 120
         */
        get default_value(): number;
        set default_value(val: number);

        /**
         * The tempo's default value.
         * @since 5.1.0
         * @default 120
         */
        get defaultValue(): number;
        set defaultValue(val: number);

        /**
         * The tempo's lower range.
         * @since 5.1.0
         * @default 0
         */
        get lower(): number;
        set lower(val: number);

        /**
         * The tempo's upper range.
         * @since 5.1.0
         * @default 240
         */
        get upper(): number;
        set upper(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Tempo.SignalSignatures;

        // Fields
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

        // Constructors
        constructor(properties?: Partial<Tempo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](orientation: Gtk.Orientation, width_request: number, height_request: number): Tempo;

        // Signals
        /** @signal */
        connect<K extends keyof Tempo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Tempo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Tempo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Tempo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Tempo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Tempo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * Emits ::value-changed event.
         * @param default_value the default value
         * @virtual
         */
        vfunc_value_changed(default_value: number): void;

        // Methods
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

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);

        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         * 
         * The accessible role cannot be changed once set.
         * @default Gtk.AccessibleRole.NONE
          * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);

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
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @returns the accessible identifier
         */
        get_accessible_id(): string | null;

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
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
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
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty): void;

        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation): void;

        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState): void;

        /**
         * Sets the parent and sibling of an accessible object.
         * 
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent: Gtk.Accessible | null, next_sibling: Gtk.Accessible | null): void;

        /**
         * Updates the next accessible sibling.
         * 
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling: Gtk.Accessible | null): void;

        /**
         * Informs ATs that the platform state has changed.
         * 
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState): void;

        /**
         * Updates an array of accessible properties.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible relations.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[], values: (GObject.Value | any)[]): void;

        /**
         * Updates an array of accessible states.
         * 
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         * 
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[], values: (GObject.Value | any)[]): void;

        /**
         * Retrieves the accessible identifier for the accessible object.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations.
         * 
         * It is left to the accessible implementation to define the scope
         * and uniqueness of the identifier.
         * @virtual
         */
        vfunc_get_accessible_id(): string | null;

        /**
         * Retrieves the accessible parent for an accessible object.
         * 
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;

        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): Gtk.ATContext | null;

        /**
         * Queries the coordinates and dimensions of this accessible
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];

        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;

        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;

        /**
         * Queries a platform state, such as focus.
         * 
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;

        /**
         * Gets the ID of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: string | null): void;

        /**
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data: null): void;

        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [boolean, Gtk.BuildableParser, never];

        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         * @virtual
         */
        vfunc_get_id(): string;

        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. {@link Gtk.Window} sets
         *  the {@link Gtk.Widget.visible} property here.
         * @param builder 
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, `g_object_set_property()`
         *  is used by default. {@link Gtk.Window} implements this to delay showing itself
         *  (i.e. setting the {@link Gtk.Widget.visible} property) until the whole
         *  interface is created.
         * @param builder 
         * @param name 
         * @param value 
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of &#x201C;ID&#x201D; and it makes sense to map the XML id
         *   attribute to it.
         * @param id 
         * @virtual
         */
        vfunc_set_id(id: string): void;

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable&#x2019;s new orientation
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    /**
     * @gir-type Alias
     */
    type CartesianClass = typeof Cartesian;

    /**
     * @gir-type Alias
     */
    type DialClass = typeof Dial;

    /**
     * @gir-type Struct
     */
    class ExpanderChild {
        static $gtype: GObject.GType<ExpanderChild>;

        // Fields
        child: Gtk.Widget;

        x: number;

        y: number;

        width: number;

        height: number;

        // Static methods
        /**
         * Allocate {@link AgsGui.ExpanderChild}-struct.
         * @param x the x position
         * @param y the y position
         * @param width the width
         * @param height the height
         */
        static alloc(x: number, y: number, width: number, height: number): null;

        /**
         * Free `expander_child`.
         * @param expander_child the {@link AgsGui.ExpanderChild}-struct
         */
        static free(expander_child: null): void;
    }


    /**
     * @gir-type Alias
     */
    type ExpanderClass = typeof Expander;

    /**
     * @gir-type Struct
     */
    class ExpanderSetChild {
        static $gtype: GObject.GType<ExpanderSetChild>;

        // Fields
        child: Gtk.Widget;

        x: number;

        y: number;

        width: number;

        height: number;

        // Static methods
        /**
         * Allocate {@link AgsGui.ExpanderSetChild}-struct.
         * @param x the x position
         * @param y the y position
         * @param width the width
         * @param height the height
         */
        static alloc(x: number, y: number, width: number, height: number): null;

        /**
         * Free `expander_set_child`.
         * @param expander_set_child the {@link AgsGui.ExpanderSetChild}-struct
         */
        static free(expander_set_child: null): void;
    }


    /**
     * @gir-type Alias
     */
    type ExpanderSetClass = typeof ExpanderSet;

    /**
     * @gir-type Alias
     */
    type FileDialogClass = typeof FileDialog;

    /**
     * @gir-type Alias
     */
    type FileEntryClass = typeof FileEntry;

    /**
     * @gir-type Alias
     */
    type FileWidgetClass = typeof FileWidget;

    /**
     * @gir-type Alias
     */
    type IconLinkClass = typeof IconLink;

    /**
     * @gir-type Alias
     */
    type IndicatorClass = typeof Indicator;

    /**
     * @gir-type Alias
     */
    type InputDialogClass = typeof InputDialog;

    /**
     * @gir-type Alias
     */
    type LedArrayClass = typeof LedArray;

    /**
     * @gir-type Alias
     */
    type LedClass = typeof Led;

    /**
     * @gir-type Alias
     */
    type LevelBoxClass = typeof LevelBox;

    /**
     * @gir-type Alias
     */
    type LevelClass = typeof Level;

    /**
     * @gir-type Alias
     */
    type NotebookClass = typeof Notebook;

    /**
     * @gir-type Alias
     */
    type PianoClass = typeof Piano;

    /**
     * @gir-type Struct
     */
    class Plot {
        static $gtype: GObject.GType<Plot>;

        // Fields
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

        // Static methods
        /**
         * Allocate {@link AgsGui.Plot}-struct.
         * @param n_points number of points
         * @param n_bitmaps number of bitmaps
         * @param n_pixmaps number of pixmaps
         */
        static alloc(n_points: number, n_bitmaps: number, n_pixmaps: number): null;

        /**
         * Free `plot`.
         * @param plot the {@link AgsGui.Plot}-struct
         */
        static free(plot: null): void;

        /**
         * Get bitmaps.
         * @param plot the {@link AgsGui.Plot}-struct
         */
        static get_bitmap(plot: null): number;

        /**
         * Get bitmap colors.
         * @param plot the {@link AgsGui.Plot}-struct
         */
        static get_bitmap_color(plot: null): number;

        /**
         * Get join points.
         * @param plot the {@link AgsGui.Plot}-struct
         */
        static get_join_points(plot: null): boolean;

        /**
         * Get number of bitmaps.
         * @param plot the {@link AgsGui.Plot}-struct
         */
        static get_n_bitmaps(plot: null): number;

        /**
         * Get number of pixmaps.
         * @param plot the {@link AgsGui.Plot}-struct
         */
        static get_n_pixmaps(plot: null): number;

        /**
         * Get number of points.
         * @param plot the {@link AgsGui.Plot}-struct
         */
        static get_n_points(plot: null): number;

        /**
         * Get pixmaps.
         * @param plot the {@link AgsGui.Plot}-struct
         */
        static get_pixmap(plot: null): number;

        /**
         * Get points.
         * @param plot the {@link AgsGui.Plot}-struct
         */
        static get_point(plot: null): number;

        /**
         * Get point colors.
         * @param plot the {@link AgsGui.Plot}-struct
         */
        static get_point_color(plot: null): number;

        /**
         * Get point labels.
         * @param plot the {@link AgsGui.Plot}-struct
         */
        static get_point_label(plot: null): string[];

        /**
         * Set bitmap field of `plot`.
         * @param plot the {@link AgsGui.Plot}-struct
         * @param bitmap the bitmaps
         */
        static set_bitmap(plot: null, bitmap: number): void;

        /**
         * Set bitmap color field of `plot`.
         * @param plot the {@link AgsGui.Plot}-struct
         * @param bitmap_color the bitmaps colors as array of RGB value
         */
        static set_bitmap_color(plot: null, bitmap_color: number): void;

        /**
         * Set join_points field of `plot`.
         * @param plot the {@link AgsGui.Plot}-struct
         * @param join_points if `true` join points, otherwise not
         */
        static set_join_points(plot: null, join_points: boolean): void;

        /**
         * Set n_bitmaps field of `plot`.
         * @param plot the {@link AgsGui.Plot}-struct
         * @param n_bitmaps the number of bitmaps
         */
        static set_n_bitmaps(plot: null, n_bitmaps: number): void;

        /**
         * Set n_pixmaps field of `plot`.
         * @param plot the {@link AgsGui.Plot}-struct
         * @param n_pixmaps the number of pixmaps
         */
        static set_n_pixmaps(plot: null, n_pixmaps: number): void;

        /**
         * Set n_points field of `plot`.
         * @param plot the {@link AgsGui.Plot}-struct
         * @param n_points the number of points
         */
        static set_n_points(plot: null, n_points: number): void;

        /**
         * Set pixmap field of `plot`.
         * @param plot the {@link AgsGui.Plot}-struct
         * @param pixmap the pixmaps
         */
        static set_pixmap(plot: null, pixmap: number): void;

        /**
         * Set point field of `plot`.
         * @param plot the {@link AgsGui.Plot}-struct
         * @param point the points as array of coordinates
         */
        static set_point(plot: null, point: number): void;

        /**
         * Set point color field of `plot`.
         * @param plot the {@link AgsGui.Plot}-struct
         * @param point_color the points colors as array of RGB value
         */
        static set_point_color(plot: null, point_color: number): void;

        /**
         * Set point label field of `plot`.
         * @param plot the {@link AgsGui.Plot}-struct
         * @param point_label the points labels as string vector
         */
        static set_point_label(plot: null, point_label: string): void;
    }


    /**
     * @gir-type Alias
     */
    type RulerClass = typeof Ruler;

    /**
     * @gir-type Alias
     */
    type ScaleBoxClass = typeof ScaleBox;

    /**
     * @gir-type Alias
     */
    type ScaleClass = typeof Scale;

    /**
     * @gir-type Alias
     */
    type ScrolledLevelBoxClass = typeof ScrolledLevelBox;

    /**
     * @gir-type Alias
     */
    type ScrolledPianoClass = typeof ScrolledPiano;

    /**
     * @gir-type Alias
     */
    type ScrolledScaleBoxClass = typeof ScrolledScaleBox;

    /**
     * @gir-type Alias
     */
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
