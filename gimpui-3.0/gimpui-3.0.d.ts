
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
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';
import type GioUnix from '@girs/giounix-2.0';
import type Gimp from '@girs/gimp-3.0';
import type Gegl from '@girs/gegl-0.4';
import type Babl from '@girs/babl-0.1';
import type GExiv2 from '@girs/gexiv2-0.10';

export namespace GimpUi {

    /**
     * GimpUi-3.0
     */


    /**
     * @gir-type Enum
     */
    export namespace AspectType {
        export const $gtype: GObject.GType<AspectType>;
    }

    /**
     * Aspect ratios.
     * @gir-type Enum
     */
    enum AspectType {
        /**
         * it's a 1:1 square
         */
        SQUARE,
        /**
         * it's higher than it's wide
         */
        PORTRAIT,
        /**
         * it's wider than it's high
         */
        LANDSCAPE,
    }


    /**
     * @gir-type Enum
     */
    export namespace ChainPosition {
        export const $gtype: GObject.GType<ChainPosition>;
    }

    /**
     * Possible chain positions for {@link GimpUi.ChainButton}.
     * @gir-type Enum
     */
    enum ChainPosition {
        /**
         * the chain is on top
         */
        TOP,
        /**
         * the chain is to the left
         */
        LEFT,
        /**
         * the chain is on bottom
         */
        BOTTOM,
        /**
         * the chain is to the right
         */
        RIGHT,
    }


    /**
     * @gir-type Enum
     */
    export namespace ColorAreaType {
        export const $gtype: GObject.GType<ColorAreaType>;
    }

    /**
     * The types of transparency display for {@link GimpUi.ColorArea}.
     * @gir-type Enum
     */
    enum ColorAreaType {
        /**
         * don't display transparency
         */
        FLAT,
        /**
         * display transparency using small checks
         */
        SMALL_CHECKS,
        /**
         * display transparency using large checks
         */
        LARGE_CHECKS,
    }


    /**
     * @gir-type Enum
     */
    export namespace ColorSelectorChannel {
        export const $gtype: GObject.GType<ColorSelectorChannel>;
    }

    /**
     * An enum to specify the types of color channels edited in
     * {@link GimpUi.ColorSelector} widgets.
     * @gir-type Enum
     */
    enum ColorSelectorChannel {
        /**
         * the hue channel
         */
        HUE,
        /**
         * the saturation channel
         */
        SATURATION,
        /**
         * the value channel
         */
        VALUE,
        /**
         * the red channel
         */
        RED,
        /**
         * the green channel
         */
        GREEN,
        /**
         * the blue channel
         */
        BLUE,
        /**
         * the alpha channel
         */
        ALPHA,
        /**
         * the lightness channel
         */
        LCH_LIGHTNESS,
        /**
         * the chroma channel
         */
        LCH_CHROMA,
        /**
         * the hue channel
         */
        LCH_HUE,
    }


    /**
     * @gir-type Enum
     */
    export namespace ColorSelectorModel {
        export const $gtype: GObject.GType<ColorSelectorModel>;
    }

    /**
     * An enum to specify the types of color spaces edited in
     * {@link GimpUi.ColorSelector} widgets.
     * @gir-type Enum
     * @since 2.10
     */
    enum ColorSelectorModel {
        /**
         * RGB color model
         */
        RGB,
        /**
         * CIE LCh color model
         */
        LCH,
        /**
         * HSV color model
         */
        HSV,
    }


    /**
     * @gir-type Enum
     */
    export namespace IntComboBoxLayout {
        export const $gtype: GObject.GType<IntComboBoxLayout>;
    }

    /**
     * Possible layouts for {@link GimpUi.IntComboBox}.
     * @gir-type Enum
     * @since 2.10
     */
    enum IntComboBoxLayout {
        /**
         * show icons only
         */
        ICON_ONLY,
        /**
         * show icons and abbreviated labels,
         *                                         when available
         */
        ABBREVIATED,
        /**
         * show icons and full labels
         */
        FULL,
    }


    /**
     * The column types of {@link GimpUi.IntStore}.
     * @gir-type Enum
     */
    enum IntStoreColumns {
        /**
         * the integer value
         */
        VALUE,
        /**
         * a human-readable label
         */
        LABEL,
        /**
         * an abbreviated label
         */
        ABBREV,
        /**
         * an icon name
         */
        ICON_NAME,
        /**
         * a {@link GdkPixbuf.Pixbuf}
         */
        PIXBUF,
        /**
         * arbitrary user data
         */
        USER_DATA,
        /**
         * the number of columns
         */
        NUM_COLUMNS,
    }


    /**
     * @gir-type Enum
     */
    export namespace PageSelectorTarget {
        export const $gtype: GObject.GType<PageSelectorTarget>;
    }

    /**
     * Import targets for {@link GimpUi.PageSelector}.
     * @gir-type Enum
     */
    enum PageSelectorTarget {
        /**
         * import as layers of one image
         */
        LAYERS,
        /**
         * import as separate images
         */
        IMAGES,
    }


    /**
     * @gir-type Enum
     */
    export namespace SizeEntryUpdatePolicy {
        export const $gtype: GObject.GType<SizeEntryUpdatePolicy>;
    }

    /**
     * Update policies for {@link GimpUi.SizeEntry}.
     * @gir-type Enum
     */
    enum SizeEntryUpdatePolicy {
        /**
         * the size entry's meaning is up to the user
         */
        NONE,
        /**
         * the size entry displays values
         */
        SIZE,
        /**
         * the size entry displays resolutions
         */
        RESOLUTION,
    }


    /**
     * Types of errors returned by libgimpwidgets functions
     * @gir-type Struct
     */
    class WidgetsError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        /**
         * A parse error has occurred
         */
        static WIDGETS_PARSE_ERROR: number;

        // Constructors
        constructor(options: { message: string, code: number });
    }


    /**
     * @gir-type Enum
     */
    export namespace ZoomType {
        export const $gtype: GObject.GType<ZoomType>;
    }

    /**
     * the zoom types for {@link GimpUi.ZoomModel}.
     * @gir-type Enum
     */
    enum ZoomType {
        /**
         * zoom in
         */
        IN,
        /**
         * zoom out
         */
        OUT,
    }


    /**
     * The suggested width for a color bar in a {@link GimpUi.ColorSelector}
     * implementation.
     */
    const COLOR_SELECTOR_BAR_SIZE: number;

    /**
     * The suggested size for a color area in a {@link GimpUi.ColorSelector}
     * implementation.
     */
    const COLOR_SELECTOR_SIZE: number;

    const ICON_APPLICATION_EXIT: string;

    const ICON_ASPECT_LANDSCAPE: string;

    const ICON_ASPECT_PORTRAIT: string;

    const ICON_ATTACH: string;

    const ICON_BUSINESS_CARD: string;

    const ICON_CAP_BUTT: string;

    const ICON_CAP_ROUND: string;

    const ICON_CAP_SQUARE: string;

    const ICON_CENTER: string;

    const ICON_CENTER_HORIZONTAL: string;

    const ICON_CENTER_VERTICAL: string;

    const ICON_CHAIN_HORIZONTAL: string;

    const ICON_CHAIN_HORIZONTAL_BROKEN: string;

    const ICON_CHAIN_VERTICAL: string;

    const ICON_CHAIN_VERTICAL_BROKEN: string;

    const ICON_CHANNEL: string;

    const ICON_CHANNEL_ALPHA: string;

    const ICON_CHANNEL_BLUE: string;

    const ICON_CHANNEL_GRAY: string;

    const ICON_CHANNEL_GREEN: string;

    const ICON_CHANNEL_INDEXED: string;

    const ICON_CHANNEL_RED: string;

    const ICON_CHAR_PICKER: string;

    const ICON_CLOSE: string;

    const ICON_CLOSE_ALL: string;

    const ICON_COLORMAP: string;

    const ICON_COLORS_DEFAULT: string;

    const ICON_COLORS_SWAP: string;

    const ICON_COLOR_PICKER_BLACK: string;

    const ICON_COLOR_PICKER_GRAY: string;

    const ICON_COLOR_PICKER_WHITE: string;

    const ICON_COLOR_PICK_FROM_SCREEN: string;

    const ICON_COLOR_SELECTOR_CMYK: string;

    const ICON_COLOR_SELECTOR_TRIANGLE: string;

    const ICON_COLOR_SELECTOR_WATER: string;

    const ICON_COLOR_SPACE_LINEAR: string;

    const ICON_COLOR_SPACE_NON_LINEAR: string;

    const ICON_COLOR_SPACE_PERCEPTUAL: string;

    const ICON_CONTROLLER: string;

    const ICON_CONTROLLER_KEYBOARD: string;

    const ICON_CONTROLLER_LINUX_INPUT: string;

    const ICON_CONTROLLER_MIDI: string;

    const ICON_CONTROLLER_WHEEL: string;

    const ICON_CONVERT_GRAYSCALE: string;

    const ICON_CONVERT_INDEXED: string;

    const ICON_CONVERT_RGB: string;

    const ICON_CURSOR: string;

    const ICON_CURVE_FREE: string;

    const ICON_CURVE_SMOOTH: string;

    const ICON_DETACH: string;

    const ICON_DIALOG_CHANNELS: string;

    const ICON_DIALOG_DASHBOARD: string;

    const ICON_DIALOG_DEVICE_STATUS: string;

    const ICON_DIALOG_ERROR: string;

    const ICON_DIALOG_IMAGES: string;

    const ICON_DIALOG_INFORMATION: string;

    const ICON_DIALOG_LAYERS: string;

    const ICON_DIALOG_NAVIGATION: string;

    const ICON_DIALOG_PATHS: string;

    const ICON_DIALOG_QUESTION: string;

    const ICON_DIALOG_RESHOW_FILTER: string;

    const ICON_DIALOG_TOOLS: string;

    const ICON_DIALOG_TOOL_OPTIONS: string;

    const ICON_DIALOG_UNDO_HISTORY: string;

    const ICON_DIALOG_WARNING: string;

    const ICON_DISPLAY: string;

    const ICON_DISPLAY_FILTER: string;

    const ICON_DISPLAY_FILTER_CLIP_WARNING: string;

    const ICON_DISPLAY_FILTER_COLORBLIND: string;

    const ICON_DISPLAY_FILTER_CONTRAST: string;

    const ICON_DISPLAY_FILTER_GAMMA: string;

    const ICON_DISPLAY_FILTER_LCMS: string;

    const ICON_DISPLAY_FILTER_PROOF: string;

    const ICON_DOCUMENT_NEW: string;

    const ICON_DOCUMENT_OPEN: string;

    const ICON_DOCUMENT_OPEN_RECENT: string;

    const ICON_DOCUMENT_PAGE_SETUP: string;

    const ICON_DOCUMENT_PRINT: string;

    const ICON_DOCUMENT_PRINT_RESOLUTION: string;

    const ICON_DOCUMENT_PROPERTIES: string;

    const ICON_DOCUMENT_REVERT: string;

    const ICON_DOCUMENT_SAVE: string;

    const ICON_DOCUMENT_SAVE_AS: string;

    const ICON_DYNAMICS: string;

    const ICON_EDIT: string;

    const ICON_EDIT_CLEAR: string;

    const ICON_EDIT_COPY: string;

    const ICON_EDIT_CUT: string;

    const ICON_EDIT_DELETE: string;

    const ICON_EDIT_FIND: string;

    const ICON_EDIT_PASTE: string;

    const ICON_EDIT_PASTE_AS_NEW: string;

    const ICON_EDIT_PASTE_INTO: string;

    const ICON_EDIT_REDO: string;

    const ICON_EDIT_UNDO: string;

    const ICON_EFFECT: string;

    const ICON_EVEN_HORIZONTAL_GAP: string;

    const ICON_EVEN_VERTICAL_GAP: string;

    const ICON_FILE_MANAGER: string;

    const ICON_FILL_HORIZONTAL: string;

    const ICON_FILL_VERTICAL: string;

    const ICON_FOLDER_NEW: string;

    const ICON_FONT: string;

    const ICON_FORMAT_INDENT_LESS: string;

    const ICON_FORMAT_INDENT_MORE: string;

    const ICON_FORMAT_JUSTIFY_CENTER: string;

    const ICON_FORMAT_JUSTIFY_FILL: string;

    const ICON_FORMAT_JUSTIFY_LEFT: string;

    const ICON_FORMAT_JUSTIFY_RIGHT: string;

    const ICON_FORMAT_TEXT_BOLD: string;

    const ICON_FORMAT_TEXT_DIRECTION_LTR: string;

    const ICON_FORMAT_TEXT_DIRECTION_RTL: string;

    const ICON_FORMAT_TEXT_DIRECTION_TTB_LTR: string;

    const ICON_FORMAT_TEXT_DIRECTION_TTB_LTR_UPRIGHT: string;

    const ICON_FORMAT_TEXT_DIRECTION_TTB_RTL: string;

    const ICON_FORMAT_TEXT_DIRECTION_TTB_RTL_UPRIGHT: string;

    const ICON_FORMAT_TEXT_ITALIC: string;

    const ICON_FORMAT_TEXT_SPACING_LETTER: string;

    const ICON_FORMAT_TEXT_SPACING_LINE: string;

    const ICON_FORMAT_TEXT_STRIKETHROUGH: string;

    const ICON_FORMAT_TEXT_UNDERLINE: string;

    const ICON_FRAME: string;

    const ICON_GEGL: string;

    const ICON_GO_BOTTOM: string;

    const ICON_GO_DOWN: string;

    const ICON_GO_FIRST: string;

    const ICON_GO_HOME: string;

    const ICON_GO_LAST: string;

    const ICON_GO_NEXT: string;

    const ICON_GO_PREVIOUS: string;

    const ICON_GO_TOP: string;

    const ICON_GO_UP: string;

    const ICON_GRADIENT_BILINEAR: string;

    const ICON_GRADIENT_CONICAL_ASYMMETRIC: string;

    const ICON_GRADIENT_CONICAL_SYMMETRIC: string;

    const ICON_GRADIENT_LINEAR: string;

    const ICON_GRADIENT_RADIAL: string;

    const ICON_GRADIENT_SHAPEBURST_ANGULAR: string;

    const ICON_GRADIENT_SHAPEBURST_DIMPLED: string;

    const ICON_GRADIENT_SHAPEBURST_SPHERICAL: string;

    const ICON_GRADIENT_SPIRAL_ANTICLOCKWISE: string;

    const ICON_GRADIENT_SPIRAL_CLOCKWISE: string;

    const ICON_GRADIENT_SQUARE: string;

    const ICON_GRAVITY_EAST: string;

    const ICON_GRAVITY_NORTH: string;

    const ICON_GRAVITY_NORTH_EAST: string;

    const ICON_GRAVITY_NORTH_WEST: string;

    const ICON_GRAVITY_SOUTH: string;

    const ICON_GRAVITY_SOUTH_EAST: string;

    const ICON_GRAVITY_SOUTH_WEST: string;

    const ICON_GRAVITY_WEST: string;

    const ICON_GRID: string;

    const ICON_HELP: string;

    const ICON_HELP_ABOUT: string;

    const ICON_HELP_USER_MANUAL: string;

    const ICON_HISTOGRAM: string;

    const ICON_HISTOGRAM_LINEAR: string;

    const ICON_HISTOGRAM_LOGARITHMIC: string;

    const ICON_IMAGE: string;

    const ICON_IMAGE_OPEN: string;

    const ICON_IMAGE_RELOAD: string;

    const ICON_INPUT_DEVICE: string;

    const ICON_INVERT: string;

    const ICON_JOIN_BEVEL: string;

    const ICON_JOIN_MITER: string;

    const ICON_JOIN_ROUND: string;

    const ICON_LAYER: string;

    const ICON_LAYER_ANCHOR: string;

    const ICON_LAYER_FLOATING_SELECTION: string;

    const ICON_LAYER_LINK_LAYER: string;

    const ICON_LAYER_MASK: string;

    const ICON_LAYER_MERGE_DOWN: string;

    const ICON_LAYER_TEXT_LAYER: string;

    const ICON_LAYER_TO_IMAGESIZE: string;

    const ICON_LAYER_VECTOR_LAYER: string;

    const ICON_LINKED: string;

    const ICON_LIST: string;

    const ICON_LIST_ADD: string;

    const ICON_LIST_REMOVE: string;

    const ICON_LOCK: string;

    const ICON_LOCK_ALPHA: string;

    const ICON_LOCK_CONTENT: string;

    const ICON_LOCK_MULTI: string;

    const ICON_LOCK_PATH: string;

    const ICON_LOCK_POSITION: string;

    const ICON_LOCK_VISIBILITY: string;

    const ICON_MARKER: string;

    const ICON_MENU_LEFT: string;

    const ICON_MENU_RIGHT: string;

    const ICON_OBJECT_DUPLICATE: string;

    const ICON_OBJECT_FLIP_HORIZONTAL: string;

    const ICON_OBJECT_FLIP_VERTICAL: string;

    const ICON_OBJECT_RESIZE: string;

    const ICON_OBJECT_ROTATE_180: string;

    const ICON_OBJECT_ROTATE_270: string;

    const ICON_OBJECT_ROTATE_90: string;

    const ICON_OBJECT_SCALE: string;

    const ICON_PALETTE: string;

    const ICON_PATH: string;

    const ICON_PATH_STROKE: string;

    const ICON_PATTERN: string;

    const ICON_PIVOT_CENTER: string;

    const ICON_PIVOT_EAST: string;

    const ICON_PIVOT_NORTH: string;

    const ICON_PIVOT_NORTH_EAST: string;

    const ICON_PIVOT_NORTH_WEST: string;

    const ICON_PIVOT_SOUTH: string;

    const ICON_PIVOT_SOUTH_EAST: string;

    const ICON_PIVOT_SOUTH_WEST: string;

    const ICON_PIVOT_WEST: string;

    const ICON_PLUGIN: string;

    const ICON_PREFERENCES_SYSTEM: string;

    const ICON_PROCESS_STOP: string;

    const ICON_QUICK_MASK_OFF: string;

    const ICON_QUICK_MASK_ON: string;

    const ICON_RECORD: string;

    const ICON_RESET: string;

    const ICON_SAMPLE_POINT: string;

    const ICON_SELECTION: string;

    const ICON_SELECTION_ADD: string;

    const ICON_SELECTION_ALL: string;

    const ICON_SELECTION_BORDER: string;

    const ICON_SELECTION_GROW: string;

    const ICON_SELECTION_INTERSECT: string;

    const ICON_SELECTION_NONE: string;

    const ICON_SELECTION_REPLACE: string;

    const ICON_SELECTION_SHRINK: string;

    const ICON_SELECTION_STROKE: string;

    const ICON_SELECTION_SUBTRACT: string;

    const ICON_SELECTION_TO_CHANNEL: string;

    const ICON_SELECTION_TO_PATH: string;

    const ICON_SHAPE_CIRCLE: string;

    const ICON_SHAPE_DIAMOND: string;

    const ICON_SHAPE_SQUARE: string;

    const ICON_SHRED: string;

    const ICON_SMARTPHONE: string;

    const ICON_SYMMETRY: string;

    const ICON_SYSTEM_RUN: string;

    const ICON_TEMPLATE: string;

    const ICON_TEXTURE: string;

    const ICON_TOOL_AIRBRUSH: string;

    const ICON_TOOL_ALIGN: string;

    const ICON_TOOL_BLUR: string;

    const ICON_TOOL_BRIGHTNESS_CONTRAST: string;

    const ICON_TOOL_BUCKET_FILL: string;

    const ICON_TOOL_BY_COLOR_SELECT: string;

    const ICON_TOOL_CAGE: string;

    const ICON_TOOL_CLONE: string;

    const ICON_TOOL_COLORIZE: string;

    const ICON_TOOL_COLOR_BALANCE: string;

    const ICON_TOOL_COLOR_PICKER: string;

    const ICON_TOOL_COLOR_TEMPERATURE: string;

    const ICON_TOOL_CROP: string;

    const ICON_TOOL_CURVES: string;

    const ICON_TOOL_DESATURATE: string;

    const ICON_TOOL_DODGE: string;

    const ICON_TOOL_ELLIPSE_SELECT: string;

    const ICON_TOOL_ERASER: string;

    const ICON_TOOL_EXPOSURE: string;

    const ICON_TOOL_FLIP: string;

    const ICON_TOOL_FOREGROUND_SELECT: string;

    const ICON_TOOL_FREE_SELECT: string;

    const ICON_TOOL_FUZZY_SELECT: string;

    const ICON_TOOL_GRADIENT: string;

    const ICON_TOOL_HANDLE_TRANSFORM: string;

    const ICON_TOOL_HEAL: string;

    const ICON_TOOL_HUE_SATURATION: string;

    const ICON_TOOL_INK: string;

    const ICON_TOOL_ISCISSORS: string;

    const ICON_TOOL_LEVELS: string;

    const ICON_TOOL_MEASURE: string;

    const ICON_TOOL_MOVE: string;

    const ICON_TOOL_MYPAINT_BRUSH: string;

    const ICON_TOOL_N_POINT_DEFORMATION: string;

    const ICON_TOOL_OFFSET: string;

    const ICON_TOOL_PAINTBRUSH: string;

    const ICON_TOOL_PAINT_SELECT: string;

    const ICON_TOOL_PATH: string;

    const ICON_TOOL_PENCIL: string;

    const ICON_TOOL_PERSPECTIVE: string;

    const ICON_TOOL_PERSPECTIVE_CLONE: string;

    const ICON_TOOL_POSTERIZE: string;

    const ICON_TOOL_PRESET: string;

    const ICON_TOOL_RECT_SELECT: string;

    const ICON_TOOL_ROTATE: string;

    const ICON_TOOL_SCALE: string;

    const ICON_TOOL_SEAMLESS_CLONE: string;

    const ICON_TOOL_SHADOWS_HIGHLIGHTS: string;

    const ICON_TOOL_SHEAR: string;

    const ICON_TOOL_SMUDGE: string;

    const ICON_TOOL_TEXT: string;

    const ICON_TOOL_THRESHOLD: string;

    const ICON_TOOL_TRANSFORM_3D: string;

    const ICON_TOOL_UNIFIED_TRANSFORM: string;

    const ICON_TOOL_WARP: string;

    const ICON_TOOL_ZOOM: string;

    const ICON_TRANSFORM_3D_CAMERA: string;

    const ICON_TRANSFORM_3D_MOVE: string;

    const ICON_TRANSFORM_3D_ROTATE: string;

    const ICON_TRANSPARENCY: string;

    const ICON_VIDEO: string;

    const ICON_VIEW_FULLSCREEN: string;

    const ICON_VIEW_REFRESH: string;

    const ICON_VIEW_SHRINK_WRAP: string;

    const ICON_VIEW_ZOOM_FILL: string;

    const ICON_VISIBLE: string;

    const ICON_WEB: string;

    const ICON_WILBER: string;

    const ICON_WILBER_EEK: string;

    const ICON_WINDOW_CLOSE: string;

    const ICON_WINDOW_MOVE_TO_SCREEN: string;

    const ICON_WINDOW_NEW: string;

    const ICON_ZOOM_FIT_BEST: string;

    const ICON_ZOOM_FOLLOW_WINDOW: string;

    const ICON_ZOOM_IN: string;

    const ICON_ZOOM_ORIGINAL: string;

    const ICON_ZOOM_OUT: string;

    /**
     * Sets color and dash pattern for stroking a focus line on the given
     * `cr`. The line pattern is taken from `widget`.
     * @param cr Cairo context
     * @param widget widget to draw the focus indicator on
     * @returns `true` if the widget style has a focus line pattern,               `false` otherwise
     * @since 2.6
     */
    function cairo_set_focus_line_pattern(cr: cairo.Context, widget: Gtk.Widget): boolean;

    /**
     * Sets `color` as the source pattern within `cr`, taking into account the profile
     * of the {@link Gdk.Monitor} which `widget` is displayed on.
     * 
     * If `config` is set, the color configuration as set by the user will be used,
     * in particular using any custom monitor profile set in preferences (overriding
     * system-set profile). If no such custom profile is set, it will use the
     * profile of the monitor `widget` is displayed on and will default to sRGB if
     * `widget` is `null`.
     * 
     * Use {@link Gimp.get_color_configuration} to retrieve the user
     * {@link Gimp.ColorConfig}.
     * 
     * TODO: `softproof` is currently unused.
     * @param cr Cairo context.
     * @param color the {@link Gegl.Color} to use as source pattern within `cr`.
     * @param config the color management settings.
     * @param softproof whether the color must also be soft-proofed.
     * @param widget {@link Gtk.Widget} to draw the focus indicator on.
     * @since 3.0
     */
    function cairo_set_source_color(cr: cairo.Context, color: Gegl.Color, config: Gimp.ColorConfig, softproof: boolean, widget: (Gtk.Widget | null)): void;

    /**
     * Create a Cairo image surface from a GdkPixbuf.
     * 
     * You should avoid calling this function as there are probably more
     * efficient ways of achieving the result you are looking for.
     * @param pixbuf a {@link GdkPixbuf.Pixbuf}
     * @returns a {@link cairo.Surface}.
     * @since 2.6
     */
    function cairo_surface_create_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): cairo.Surface;

    /**
     * This function invokes the context help inspector.
     * 
     * The mouse cursor will turn turn into a question mark and the user can
     * click on any widget of the application which started the inspector.
     * 
     * If the widget the user clicked on has a `help_id` string attached
     * (see `gimp_help_set_help_data()`), the corresponding help page will
     * be displayed. Otherwise the help system will ascend the widget hierarchy
     * until it finds an attached `help_id` string (which should be the
     * case at least for every window/dialog).
     * @param widget Any {@link Gtk.Widget} on the screen.
     */
    function context_help(widget: Gtk.Widget): void;

    /**
     * Convenience function that creates a {@link GimpUi.SizeEntry} with two fields for x/y
     * coordinates/sizes with a {@link GimpUi.ChainButton} attached to constrain either the
     * two fields' values or the ratio between them.
     * @param unit The initial unit of the `GimpUnitMenu`.
     * @param unit_format A printf-like unit-format string as is used with                          `gimp_unit_menu_new()`.
     * @param menu_show_pixels `true` if the `GimpUnitMenu` should contain an item                          for GIMP_UNIT_PIXEL.
     * @param menu_show_percent `true` if the `GimpUnitMenu` should contain an item                          for GIMP_UNIT_PERCENT.
     * @param spinbutton_width The horizontal size of the {@link GimpUi.SizeEntry}'s                           {@link Gtk.SpinButton}'s.
     * @param update_policy The update policy for the {@link GimpUi.SizeEntry}.
     * @param chainbutton_active `true` if the attached {@link GimpUi.ChainButton} should be                          active.
     * @param chain_constrains_ratio `true` if the chainbutton should constrain the                          fields' aspect ratio. If `false`, the values will                          be constrained.
     * @param xlabel The label for the X coordinate.
     * @param x The initial value of the X coordinate.
     * @param xres The horizontal resolution in DPI.
     * @param lower_boundary_x The lower boundary of the X coordinate.
     * @param upper_boundary_x The upper boundary of the X coordinate.
     * @param xsize_0 The X value which will be treated as 0%.
     * @param xsize_100 The X value which will be treated as 100%.
     * @param ylabel The label for the Y coordinate.
     * @param y The initial value of the Y coordinate.
     * @param yres The vertical resolution in DPI.
     * @param lower_boundary_y The lower boundary of the Y coordinate.
     * @param upper_boundary_y The upper boundary of the Y coordinate.
     * @param ysize_0 The Y value which will be treated as 0%.
     * @param ysize_100 The Y value which will be treated as 100%.
     * @returns The new {@link GimpUi.SizeEntry}.
     */
    function coordinates_new(unit: Gimp.Unit, unit_format: string, menu_show_pixels: boolean, menu_show_percent: boolean, spinbutton_width: number, update_policy: SizeEntryUpdatePolicy, chainbutton_active: boolean, chain_constrains_ratio: boolean, xlabel: string, x: number, xres: number, lower_boundary_x: number, upper_boundary_x: number, xsize_0: number, xsize_100: number, ylabel: string, y: number, yres: number, lower_boundary_y: number, upper_boundary_y: number, ysize_0: number, ysize_100: number): Gtk.Widget;

    /**
     * @param adjustment A {@link Gtk.Adjustment}.
     */
    function double_adjustment_update(adjustment: Gtk.Adjustment): number;

    /**
     * Creates a horizontal box of radio buttons with named icons. The
     * icon name for each icon is created by appending the enum_value's
     * nick to the given `icon_prefix`.
     * @param enum_type the {@link GObject.GType} of an enum.
     * @param icon_prefix the prefix of the group of icon names to use.
     * @param icon_size the icon size for the icons
     * @param callback a callback to connect to the "toggled" signal of each                        {@link Gtk.RadioButton} that is created.
     * @returns a new horizontal {@link Gtk.Box} holding a group of `GtkRadioButtons`.
     * @since 2.10
     */
    function enum_icon_box_new(enum_type: GObject.GType, icon_prefix: string, icon_size: Gtk.IconSize, callback: (GObject.Callback | null)): [Gtk.Widget, Gtk.Widget | null];

    /**
     * Just like `gimp_enum_icon_box_new()`, this function creates a group
     * of radio buttons, but additionally it supports limiting the range
     * of available enum values.
     * @param enum_type the {@link GObject.GType} of an enum.
     * @param minimum the minumim enum value
     * @param maximum the maximum enum value
     * @param icon_prefix the prefix of the group of icon names to use.
     * @param icon_size the icon size for the icons
     * @param callback a callback to connect to the "toggled" signal of each                        {@link Gtk.RadioButton} that is created.
     * @returns a new horizontal {@link Gtk.Box} holding a group of `GtkRadioButtons`.
     * @since 2.10
     */
    function enum_icon_box_new_with_range(enum_type: GObject.GType, minimum: number, maximum: number, icon_prefix: string, icon_size: Gtk.IconSize, callback: (GObject.Callback | null)): [Gtk.Widget, Gtk.Widget | null];

    /**
     * Sets the padding of all buttons in a box created by
     * `gimp_enum_icon_box_new()`.
     * @param icon_box an icon box widget
     * @param xpad horizontal padding
     * @param ypad vertical padding
     * @since 2.10
     */
    function enum_icon_box_set_child_padding(icon_box: Gtk.Widget, xpad: number, ypad: number): void;

    /**
     * Sets the icon size of all buttons in a box created by
     * `gimp_enum_icon_box_new()`.
     * @param icon_box an icon box widget
     * @param icon_size the {@link Gtk.IconSize} enum
     * @since 3.0
     */
    function enum_icon_box_set_icon_size(icon_box: Gtk.Widget, icon_size: Gtk.IconSize): void;

    /**
     * Creates a new group of `GtkRadioButtons` representing the enum
     * values.  A group of radiobuttons is a good way to represent enums
     * with up to three or four values. Often it is better to use a
     * {@link GimpUi.EnumComboBox} instead.
     * @param enum_type the {@link GObject.GType} of an enum.
     * @param callback a callback to connect to the "toggled" signal of each                        {@link Gtk.RadioButton} that is created.
     * @returns a new {@link Gtk.Box} holding a group of `GtkRadioButtons`.
     * @since 2.4
     */
    function enum_radio_box_new(enum_type: GObject.GType, callback: (GObject.Callback | null)): [Gtk.Widget, Gtk.Widget | null];

    /**
     * Just like `gimp_enum_radio_box_new()`, this function creates a group
     * of radio buttons, but additionally it supports limiting the range
     * of available enum values.
     * @param enum_type the {@link GObject.GType} of an enum.
     * @param minimum the minimum enum value
     * @param maximum the maximum enum value
     * @param callback a callback to connect to the "toggled" signal of each                 {@link Gtk.RadioButton} that is created.
     * @returns a new vertical {@link Gtk.Box} holding a group of                           `GtkRadioButtons`
     * @since 2.4
     */
    function enum_radio_box_new_with_range(enum_type: GObject.GType, minimum: number, maximum: number, callback: (GObject.Callback | null)): [Gtk.Widget, Gtk.Widget | null];

    /**
     * Calls `gimp_enum_radio_box_new()` and puts the resulting vbox into a
     * {@link Gtk.Frame}.
     * @param enum_type the {@link GObject.GType} of an enum.
     * @param label_widget a {@link Gtk.Widget} to use as label for the frame                            that will hold the radio box.
     * @param callback a callback to connect to the "toggled" signal of each                        {@link Gtk.RadioButton} that is created.
     * @returns a new {@link Gtk.Frame} holding a group of `GtkRadioButtons`.
     * @since 2.4
     */
    function enum_radio_frame_new(enum_type: GObject.GType, label_widget: (Gtk.Widget | null), callback: (GObject.Callback | null)): [Gtk.Widget, Gtk.Widget | null];

    /**
     * Calls `gimp_enum_radio_box_new_with_range()` and puts the resulting
     * vertical box into a {@link Gtk.Frame}.
     * @param enum_type the {@link GObject.GType} of an enum.
     * @param minimum the minimum enum value
     * @param maximum the maximum enum value
     * @param label_widget a widget to put into the frame that will hold the radio box.
     * @param callback a callback to connect to the "toggled" signal of each                        {@link Gtk.RadioButton} that is created.
     * @returns a new {@link Gtk.Frame} holding a group of `GtkRadioButtons`.
     * @since 2.4
     */
    function enum_radio_frame_new_with_range(enum_type: GObject.GType, minimum: number, maximum: number, label_widget: (Gtk.Widget | null), callback: (GObject.Callback | null)): [Gtk.Widget, Gtk.Widget | null];

    /**
     * Alternative of `gdk_event_triggers_context_menu()` with the additional
     * feature of allowing a menu triggering to happen on a button release
     * event. All the other rules on whether `event` should trigger a
     * contextual menu are exactly the same. Only the swapping to release
     * state as additional feature is different.
     * @param event The {@link Gdk.Event} to verify.
     * @param on_release Whether a menu is triggered on a button release event              instead of a press event.
     * @returns `true` if the event should trigger a context menu.
     * @since 3.0
     */
    function event_triggers_context_menu(event: Gdk.Event, on_release: boolean): boolean;

    /**
     * @param adjustment A {@link Gtk.Adjustment}.
     */
    function float_adjustment_update(adjustment: Gtk.Adjustment): number;

    /**
     * @returns the {@link Gdk.Monitor} where the pointer is.
     */
    function get_monitor_at_pointer(): Gdk.Monitor;

    /**
     * Note that the `label_text` can be `null` and that the widget will be
     * attached starting at (`column` + 1) in this case, too.
     * @param grid The {@link Gtk.Grid} the widgets will be attached to.
     * @param left The column to start with.
     * @param top The row to attach the widgets.
     * @param label_text The text for the {@link Gtk.Label} which will be attached left of                  the widget.
     * @param label_xalign The horizontal alignment of the {@link Gtk.Label}.
     * @param label_yalign The vertical alignment of the {@link Gtk.Label}.
     * @param widget The {@link Gtk.Widget} to attach right of the label.
     * @param widget_columns The number of columns the widget will use.
     * @returns The created {@link Gtk.Label}.
     */
    function grid_attach_aligned(grid: Gtk.Grid, left: number, top: number, label_text: string, label_xalign: number, label_yalign: number, widget: Gtk.Widget, widget_columns: number): Gtk.Widget;

    /**
     * Note that this function is automatically called by all libgimp dialog
     * constructors. You only have to call it for windows/dialogs you created
     * "manually".
     * 
     * Most of the time, what you want to call for non-windows widgets is
     * simply {@link GimpUi.help_set_help_data}. Yet if you need to set up an
     * `help_func`, call `gimp_help_connect` instead. Note that `gimp_help_set_help_data`
     * is implied, so you don't have to call it too.
     * @param widget The widget you want to connect the help accelerator for.                     Will be a {@link Gtk.Window} in most cases.
     * @param tooltip The text for this widget's tooltip. For windows, you                     usually want to set `null`.
     * @param help_func The function which will be called if the user presses "F1".
     * @param help_id The `help_id` which will be passed to `help_func`.
     */
    function help_connect(widget: Gtk.Widget, tooltip: (string | null), help_func: HelpFunc, help_id: string): void;

    /**
     * This function returns the {@link GLib.Quark} which should be used as key when
     * attaching help IDs to widgets and objects.
     * @returns The {@link GLib.Quark}.
     * @since 2.2
     */
    function help_id_quark(): GLib.Quark;

    /**
     * The reason why we don't use `gtk_widget_set_tooltip_text()` is that
     * elements in the GIMP user interface should, if possible, also have
     * a `help_id` set for context-sensitive help.
     * 
     * This function can be called with `null` for `tooltip`. Use this feature
     * if you want to set a help link for a widget which shouldn't have
     * a visible tooltip.
     * @param widget The {@link Gtk.Widget} you want to set a `tooltip` and/or `help_id` for.
     * @param tooltip The text for this widget's tooltip (or `null`).
     * @param help_id The `help_id` for the `GtkTipsQuery` tooltips inspector.
     */
    function help_set_help_data(widget: Gtk.Widget, tooltip: (string | null), help_id: string): void;

    /**
     * Just like `gimp_help_set_help_data()`, but supports to pass text
     * which is marked up with <link linkend="PangoMarkupFormat">Pango
     * text markup language</link>.
     * @param widget The {@link Gtk.Widget} you want to set a `tooltip` and/or `help_id` for.
     * @param tooltip The markup for this widget's tooltip (or `null`).
     * @param help_id The `help_id` for the `GtkTipsQuery` tooltips inspector.
     * @since 2.6
     */
    function help_set_help_data_with_markup(widget: Gtk.Widget, tooltip: string, help_id: string): void;

    /**
     * Initializes the GIMP stock icon factory.
     * 
     * You don't need to call this function as `gimp_ui_init()` already does
     * this for you.
     */
    function icons_init(): void;

    /**
     * @param path 
     */
    function icons_set_icon_theme(path: Gio.File): boolean;

    /**
     * This function initializes GTK with {@link Gtk.init}, as well as GEGL and
     * babl.
     * 
     * It also sets up various other things so that the plug-in user looks
     * and behaves like the GIMP core. This includes selecting the GTK theme
     * and setting up the help system as chosen in GIMP preferences. Any
     * plug-in that provides a user interface should call this function.
     * 
     * It can safely be called more than once. Calls after the first return
     * quickly with no effect.
     * @param prog_name The name of the plug-in which will be passed as argv[0] to             `gtk_init()`. It's a convention to use the name of the             executable and _not_ the PDB procedure name.
     */
    function init(prog_name: string): void;

    /**
     * Note that the {@link Gtk.Adjustment}'s value (which is a `gdouble`) will be
     * rounded with RINT().
     * @param adjustment A {@link Gtk.Adjustment}.
     */
    function int_adjustment_update(adjustment: Gtk.Adjustment): number;

    /**
     * Calls `gtk_toggle_button_set_active()` with the radio button that was created
     * with a matching `item_data`. This function does the same thing as
     * `gimp_radio_group_set_active()`, but takes integers as `item_data` instead
     * of pointers.
     * @param radio_button Pointer to a {@link Gtk.RadioButton}.
     * @param item_data The `item_data` of the radio button you want to select.
     */
    function int_radio_group_set_active(radio_button: Gtk.RadioButton, item_data: number): void;

    /**
     * This function returns the {@link Gimp.ColorProfile} of `monitor`
     * or `null` if there is no profile configured.
     * @param monitor a {@link Gdk.Monitor}
     * @returns the monitor's {@link Gimp.ColorProfile},          or `null`.
     * @since 3.0
     */
    function monitor_get_color_profile(monitor: Gdk.Monitor): (Gimp.ColorProfile | null);

    /**
     * @param procedure_name The name of a procedure.
     * @returns a new widget providing a view on a          GIMP procedure
     * @since 2.4
     */
    function proc_view_new(procedure_name: string): Gtk.Widget;

    /**
     * Creates a {@link Gtk.ComboBox} widget to display and set the specified
     * boolean property.  The combo box will have two entries, one
     * displaying the `true_text` label, the other displaying the
     * `false_text` label.
     * @param config Object to which property is attached.
     * @param property_name Name of boolean property controlled by combo box.
     * @param true_text Label used for entry corresponding to `true` value.
     * @param false_text Label used for entry corresponding to `false` value.
     * @returns The newly created {@link Gtk.ComboBox} widget.
     * @since 2.4
     */
    function prop_boolean_combo_box_new(config: GObject.Object, property_name: string, true_text: string, false_text: string): Gtk.Widget;

    /**
     * Creates a pair of radio buttons which function to set and display
     * the specified boolean property.
     * If `title` is `null`, the `property_name`'s nick will be used as label
     * of the returned frame.
     * @param config Object to which property is attached.
     * @param property_name Name of boolean property controlled by the radio buttons.
     * @param title Label for the frame.
     * @param true_text Label for the button corresponding to `true`.
     * @param false_text Label for the button corresponding to `false`.
     * @returns A {@link GimpUi.Frame} containing the radio buttons.
     * @since 2.4
     */
    function prop_boolean_radio_frame_new(config: GObject.Object, property_name: string, title: (string | null), true_text: string, false_text: string): Gtk.Widget;

    /**
     * Creates a {@link GimpUi.BrushChooser} controlled by the specified property.
     * @param config Object to which property is attached.
     * @param property_name Name of a {@link Gimp.Brush} property.
     * @param chooser_title title for the poppable dialog.
     * @returns A new {@link GimpUi.BrushChooser}.
     * @since 3.0
     */
    function prop_brush_chooser_new(config: GObject.Object, property_name: string, chooser_title: (string | null)): Gtk.Widget;

    /**
     * Creates a {@link Gtk.CheckButton} that displays and sets the specified
     * boolean property.
     * If `label` is `null`, the `property_name`'s nick will be used as label
     * of the returned button.
     * @param config Object to which property is attached.
     * @param property_name Name of boolean property controlled by checkbutton.
     * @param label Label to give checkbutton (including mnemonic).
     * @returns The newly created {@link Gtk.CheckButton} widget.
     * @since 2.4
     */
    function prop_check_button_new(config: GObject.Object, property_name: string, label: (string | null)): Gtk.Widget;

    /**
     * Creates a {@link GimpUi.StringComboBox} widget to display and set the
     * specified property.
     * @param config Object to which property is attached.
     * @param property_name Name of %GimpChoice property controlled by combo box.
     * @returns The newly created {@link GimpUi.StringComboBox} widget.
     */
    function prop_choice_combo_box_new(config: GObject.Object, property_name: string): Gtk.Widget;

    /**
     * Creates a {@link GimpUi.IntRadioFrame} widget to display and set the
     * specified {@link Gimp.Choice} property.
     * @param config Object to which property is attached.
     * @param property_name Name of %GimpChoice property controlled by radio buttons.
     * @returns The newly created {@link GimpUi.IntRadioFrame} widget.
     */
    function prop_choice_radio_frame_new(config: GObject.Object, property_name: string): Gtk.Widget;

    /**
     * Creates a {@link GimpUi.ColorArea} to set and display the value of an RGB
     * property.
     * @param config Object to which property is attached.
     * @param property_name Name of %GeglColor property.
     * @param width Width of color area.
     * @param height Height of color area.
     * @param type How transparency is represented.
     * @returns A new {@link GimpUi.ColorArea} widget.
     * @since 2.4
     */
    function prop_color_area_new(config: GObject.Object, property_name: string, width: number, height: number, type: ColorAreaType): Gtk.Widget;

    /**
     * Creates a {@link GimpUi.ColorButton} to set and display the value of a color
     * property.
     * @param config Object to which property is attached.
     * @param property_name Name of {@link Gegl.Color} property.
     * @param width Width of the colorpreview in pixels.
     * @param height Height of the colorpreview in pixels.
     * @param type How transparency is represented.
     * @returns A new {@link GimpUi.ColorButton} widget.
     * @since 3.0
     */
    function prop_color_select_new(config: GObject.Object, property_name: string, width: number, height: number, type: ColorAreaType): Gtk.Widget;

    /**
     * @param config 
     * @param x_property_name 
     * @param y_property_name 
     * @param unit_property_name 
     * @param sizeentry 
     * @param chainbutton 
     * @param xresolution 
     * @param yresolution 
     */
    function prop_coordinates_connect(config: GObject.Object, x_property_name: string, y_property_name: string, unit_property_name: string, sizeentry: Gtk.Widget, chainbutton: Gtk.Widget, xresolution: number, yresolution: number): boolean;

    /**
     * Creates a {@link GimpUi.SizeEntry} to set and display two double or int
     * properties, which will usually represent X and Y coordinates, and
     * their associated unit property.
     * 
     * If `unit_format` is `null`, the unit will default to inch. Otherwise it
     * must be the name of a property of type %GimpParamUnit:
     * @param config Object to which property is attached.
     * @param x_property_name Name of int or double property for X coordinate.
     * @param y_property_name Name of int or double property for Y coordinate.
     * @param unit_property_name Name of unit property.
     * @param unit_format A printf-like unit-format string as is used with                      `gimp_unit_menu_new()`.
     * @param update_policy How the automatic pixel <-> real-world-unit                      calculations should be done.
     * @param xresolution The resolution (in dpi) for the X coordinate.
     * @param yresolution The resolution (in dpi) for the Y coordinate.
     * @param has_chainbutton Whether to add a chainbutton to the size entry.
     * @returns A new {@link GimpUi.SizeEntry} widget.
     * @since 2.4
     */
    function prop_coordinates_new(config: GObject.Object, x_property_name: string, y_property_name: string, unit_property_name: string, unit_format: string, update_policy: SizeEntryUpdatePolicy, xresolution: number, yresolution: number, has_chainbutton: boolean): Gtk.Widget;

    /**
     * Creates a {@link GimpUi.DrawableChooser} controlled by the specified property.
     * @param config Object to which property is attached.
     * @param property_name Name of a {@link Gimp.Drawable} property.
     * @param chooser_title title for the poppable dialog.
     * @returns A new {@link GimpUi.DrawableChooser}.
     * @since 3.0
     * @deprecated since 3.2: Use `gimp_prop_item_chooser_new()`.
     */
    function prop_drawable_chooser_new(config: GObject.Object, property_name: string, chooser_title: (string | null)): Gtk.Widget;

    /**
     * Creates a {@link Gtk.Entry} to set and display the value of the specified
     * string property.
     * @param config Object to which property is attached.
     * @param property_name Name of string property.
     * @param max_len Maximum allowed length of string.
     * @returns A new {@link Gtk.Entry} widget.
     * @since 2.4
     */
    function prop_entry_new(config: GObject.Object, property_name: string, max_len: number): Gtk.Widget;

    /**
     * Creates a {@link Gtk.CheckButton} that displays and sets the specified
     * property of type Enum.  Note that this widget only allows two values
     * for the enum, one corresponding to the "checked" state and the
     * other to the "unchecked" state.
     * If `label` is `null`, the `property_name`'s nick will be used as label
     * of the returned button.
     * @param config Object to which property is attached.
     * @param property_name Name of enum property controlled by checkbutton.
     * @param label Label to give checkbutton (including mnemonic).
     * @param false_value Enum value corresponding to unchecked state.
     * @param true_value Enum value corresponding to checked state.
     * @returns The newly created {@link Gtk.CheckButton} widget.
     * @since 2.4
     */
    function prop_enum_check_button_new(config: GObject.Object, property_name: string, label: (string | null), false_value: number, true_value: number): Gtk.Widget;

    /**
     * Creates a {@link GimpUi.IntComboBox} widget to display and set the specified
     * enum property.  The `mimimum_value` and `maximum_value` give the
     * possibility of restricting the allowed range to a subset of the
     * enum.  If the two values are equal (e.g., 0, 0), then the full
     * range of the Enum is used.
     * @param config Object to which property is attached.
     * @param property_name Name of enum property controlled by combo box.
     * @param minimum Smallest allowed value of enum.
     * @param maximum Largest allowed value of enum.
     * @returns The newly created {@link GimpUi.EnumComboBox} widget.
     * @since 2.4
     */
    function prop_enum_combo_box_new(config: GObject.Object, property_name: string, minimum: number, maximum: number): Gtk.Widget;

    /**
     * Creates a horizontal box of radio buttons with named icons, which
     * function to set and display the value of the specified Enum
     * property.  The icon name for each icon is created by appending the
     * enum_value's nick to the given `icon_prefix`.  See
     * `gimp_enum_icon_box_new()` for more information.
     * @param config Object to which property is attached.
     * @param property_name Name of enum property controlled by the radio buttons.
     * @param icon_prefix The prefix of the group of icon names to use.
     * @param minimum Smallest value of enum to be included.
     * @param maximum Largest value of enum to be included.
     * @returns A #libgimpwidgets-gimpenumiconbox containing the radio buttons.
     * @since 2.10
     */
    function prop_enum_icon_box_new(config: GObject.Object, property_name: string, icon_prefix: string, minimum: number, maximum: number): Gtk.Widget;

    /**
     * @param config Object to which property is attached.
     * @param property_name Name of enum property to be displayed.
     * @returns The newly created {@link GimpUi.EnumLabel} widget.
     * @since 2.4
     */
    function prop_enum_label_new(config: GObject.Object, property_name: string): Gtk.Widget;

    /**
     * Creates a group of radio buttons which function to set and display
     * the specified enum property.  The `minimum` and `maximum` arguments
     * allow only a subset of the enum to be used.  If the two arguments
     * are equal (e.g., 0, 0), then the full range of the enum will be used.
     * If you want to assign a label to the group of radio buttons, use
     * `gimp_prop_enum_radio_frame_new()` instead of this function.
     * @param config Object to which property is attached.
     * @param property_name Name of enum property controlled by the radio buttons.
     * @param minimum Smallest value of enum to be included.
     * @param maximum Largest value of enum to be included.
     * @returns A {@link Gtk.Box} containing the radio buttons.
     * @since 2.4
     */
    function prop_enum_radio_box_new(config: GObject.Object, property_name: string, minimum: number, maximum: number): Gtk.Widget;

    /**
     * Creates a group of radio buttons which function to set and display
     * the specified enum property.  The `minimum` and `maximum` arguments
     * allow only a subset of the enum to be used.  If the two arguments
     * are equal (e.g., 0, 0), then the full range of the enum will be used.
     * If `title` is `null`, the `property_name`'s nick will be used as label
     * of the returned frame.
     * @param config Object to which property is attached.
     * @param property_name Name of enum property controlled by the radio buttons.
     * @param title Label for the frame holding the buttons
     * @param minimum Smallest value of enum to be included.
     * @param maximum Largest value of enum to be included.
     * @returns A {@link GimpUi.Frame} containing the radio buttons.
     * @since 2.4
     */
    function prop_enum_radio_frame_new(config: GObject.Object, property_name: string, title: (string | null), minimum: number, maximum: number): Gtk.Widget;

    /**
     * Creates a {@link Gtk.Expander} controlled by the specified boolean property.
     * A value of `true` for the property corresponds to the expanded state
     * for the widget.
     * If `label` is `null`, the `property_name`'s nick will be used as label
     * of the returned widget.
     * @param config Object to which property is attached.
     * @param property_name Name of boolean property.
     * @param label Label for expander.
     * @returns A new {@link Gtk.Expander} widget.
     * @since 2.4
     */
    function prop_expander_new(config: GObject.Object, property_name: string, label: (string | null)): Gtk.Widget;

    /**
     * Creates a {@link Gtk.FileChooserButton} to edit the specified path property.
     * `property_name` must represent either a GIMP_PARAM_SPEC_CONFIG_PATH or
     * a G_PARAM_SPEC_OBJECT where `value_type == G_TYPE_FILE`.
     * 
     * Note that {@link Gtk.FileChooserButton} implements the {@link Gtk.FileChooser}
     * interface; you can use the {@link Gtk.FileChooser} API with it.
     * @param config object to which property is attached.
     * @param property_name name of path property.
     * @param title the title of the browse dialog.
     * @param action the open mode for the widget.
     * @returns A new {@link Gtk.FileChooserButton}.
     * @since 2.4
     */
    function prop_file_chooser_button_new(config: GObject.Object, property_name: string, title: (string | null), action: Gtk.FileChooserAction): Gtk.Widget;

    /**
     * Creates a {@link Gtk.FileChooserButton} to edit the specified path property.
     * 
     * The button uses `dialog` as it's file-picking window. Note that `dialog`
     * must be a {@link Gtk.FileChooserDialog} (or subclass) and must not have
     * {@link Gtk.DialogFlags.DESTROY_WITH_PARENT} set.
     * 
     * Note that {@link Gtk.FileChooserButton} implements the {@link Gtk.FileChooser}
     * interface; you can use the {@link Gtk.FileChooser} API with it.
     * @param config object to which property is attached.
     * @param property_name name of path property.
     * @param dialog the {@link Gtk.FileChooserDialog} widget to use.
     * @returns A new {@link Gtk.FileChooserButton}.
     * @since 2.4
     */
    function prop_file_chooser_button_new_with_dialog(config: GObject.Object, property_name: string, dialog: Gtk.Widget): Gtk.Widget;

    /**
     * Creates a {@link GimpUi.FileChooser} to edit the specified file
     * property. `property_name` must be a %GimpParamSpecFile with an action
     * other than {@link Gimp.FileChooserAction.ANY}.
     * 
     * If `label` is `null`, `property_name`'s `nick` text will be used
     * instead.
     * @param config Object to which property is attached.
     * @param property_name Name of a %GimpParamSpecFile property.
     * @param label Label of the widget.
     * @param title Title of the file dialog.
     * @returns A new {@link Gtk.FileChooserButton}.
     * @since 3.0
     */
    function prop_file_chooser_new(config: GObject.Object, property_name: string, label: (string | null), title: (string | null)): Gtk.Widget;

    /**
     * Creates a {@link GimpUi.FontChooser} controlled by the specified property.
     * @param config Object to which property is attached.
     * @param property_name Name of a {@link Gimp.Font} property.
     * @param chooser_title title for the poppable dialog.
     * @returns A new {@link GimpUi.FontChooser}.
     * @since 3.0
     */
    function prop_font_chooser_new(config: GObject.Object, property_name: string, chooser_title: (string | null)): Gtk.Widget;

    /**
     * Creates a {@link GimpUi.GradientChooser} controlled by the specified property.
     * @param config Object to which property is attached.
     * @param property_name Name of a {@link Gimp.Gradient} property.
     * @param chooser_title title for the poppable dialog.
     * @returns A new {@link GimpUi.GradientChooser}.
     * @since 3.0
     */
    function prop_gradient_chooser_new(config: GObject.Object, property_name: string, chooser_title: (string | null)): Gtk.Widget;

    /**
     * Creates a horizontal scale to control the value of the specified
     * integer or double property.
     * @param config Object to which property is attached.
     * @param property_name Name of integer or double property controlled by the scale.
     * @param step_increment Step size.
     * @param page_increment Page size.
     * @param digits Number of digits after decimal point to display.
     * @returns A new {@link Gtk.Scale}.
     * @since 2.4
     */
    function prop_hscale_new(config: GObject.Object, property_name: string, step_increment: number, page_increment: number, digits: number): Gtk.Widget;

    /**
     * Creates a widget to display a icon image representing the value of the
     * specified string property, which should encode an icon name.
     * See `gtk_image_new_from_icon_name()` for more information.
     * @param config Object to which property is attached.
     * @param property_name Name of string property.
     * @param icon_size Size of desired icon image.
     * @returns A new {@link Gtk.Image} widget.
     * @since 2.10
     */
    function prop_icon_image_new(config: GObject.Object, property_name: string, icon_size: Gtk.IconSize): Gtk.Widget;

    /**
     * Creates a {@link GimpUi.ImageChooser} controlled by the specified property.
     * @param config Object to which property is attached.
     * @param property_name Name of a {@link Gimp.Image} property.
     * @param chooser_title title for the poppable dialog.
     * @returns A new {@link GimpUi.ImageChooser}.
     * @since 3.0
     */
    function prop_image_chooser_new(config: GObject.Object, property_name: string, chooser_title: (string | null)): Gtk.Widget;

    /**
     * Creates a {@link GimpUi.IntComboBox} widget to display and set the specified
     * property.  The contents of the widget are determined by `store`,
     * which should be created using `gimp_int_store_new()`.
     * @param config Object to which property is attached.
     * @param property_name Name of int property controlled by combo box.
     * @param store {@link GimpUi.IntStore} holding list of labels, values, etc.
     * @returns The newly created {@link GimpUi.IntComboBox} widget.
     * @since 2.4
     */
    function prop_int_combo_box_new(config: GObject.Object, property_name: string, store: IntStore): Gtk.Widget;

    /**
     * Creates a group of radio buttons which function to set and display
     * the specified int property. If `title` is `null`, the
     * `property_name`'s nick will be used as label of the returned frame.
     * @param config Object to which property is attached.
     * @param property_name Name of enum property controlled by the radio buttons.
     * @param title Label for the frame holding the buttons
     * @param store {@link GimpUi.IntStore} holding list of labels, values, etc.
     * @returns A {@link GimpUi.Frame} containing the radio buttons.
     * @since 3.0
     */
    function prop_int_radio_frame_new(config: GObject.Object, property_name: string, title: (string | null), store: IntStore): Gtk.Widget;

    /**
     * Creates a {@link GimpUi.ItemChooser} controlled by the specified property.
     * @param config Object to which property is attached.
     * @param property_name Name of a {@link Gimp.Item} property.
     * @param chooser_title title for the poppable dialog.
     * @returns A new {@link GimpUi.ItemChooser}.
     * @since 3.2
     */
    function prop_item_chooser_new(config: GObject.Object, property_name: string, chooser_title: (string | null)): Gtk.Widget;

    /**
     * Creates a {@link GimpUi.LabelColor} to set and display the value of an RGB
     * property.
     * @param config Object to which property is attached.
     * @param property_name Name of RGB property.
     * @param editable Whether the widget should allow color editability.
     * @returns A new {@link GimpUi.LabelColor} widget.
     * @since 3.0
     */
    function prop_label_color_new(config: GObject.Object, property_name: string, editable: boolean): Gtk.Widget;

    /**
     * Creates a {@link GimpUi.LabelEntry} to set and display the value of the
     * specified string property.
     * @param config Object to which property is attached.
     * @param property_name Name of string property.
     * @param max_len Maximum allowed length of string (set to negative for                 no maximum).
     * @returns A new {@link Gtk.Entry} widget.
     * @since 3.0
     */
    function prop_label_entry_new(config: GObject.Object, property_name: string, max_len: number): Gtk.Widget;

    /**
     * Creates a {@link Gtk.Label} to display the value of the specified property.
     * The property should be a string property or at least transformable
     * to a string.  If the user should be able to edit the string, use
     * `gimp_prop_entry_new()` instead.
     * @param config Object to which property is attached.
     * @param property_name Name of string property.
     * @returns A new {@link Gtk.Label} widget.
     * @since 2.4
     */
    function prop_label_new(config: GObject.Object, property_name: string): Gtk.Widget;

    /**
     * Creates a {@link GimpUi.LabelSpin} to set and display the value of the
     * specified double property.
     * @param config Object to which property is attached.
     * @param property_name 
     * @param digits Number of digits after decimal point to display.
     * @returns A new #libgimpwidgets-gimpspinbutton.
     * @since 2.4
     */
    function prop_label_spin_new(config: GObject.Object, property_name: string, digits: number): Gtk.Widget;

    /**
     * Creates a {@link GimpUi.MemsizeEntry} (spin button and option menu) to set
     * and display the value of the specified memsize property.  See
     * `gimp_memsize_entry_new()` for more information.
     * @param config Object to which property is attached.
     * @param property_name Name of memsize property.
     * @returns A new {@link GimpUi.MemsizeEntry}.
     * @since 2.4
     */
    function prop_memsize_entry_new(config: GObject.Object, property_name: string): Gtk.Widget;

    /**
     * Creates a {@link GimpUi.PaletteChooser} controlled by the specified property.
     * @param config Object to which property is attached.
     * @param property_name Name of a {@link Gimp.Palette} property.
     * @param chooser_title title for the poppable dialog.
     * @returns A new {@link GimpUi.PaletteChooser}.
     * @since 3.0
     */
    function prop_palette_chooser_new(config: GObject.Object, property_name: string, chooser_title: (string | null)): Gtk.Widget;

    /**
     * Creates a {@link GimpUi.PathEditor} to edit the specified path and writable
     * path properties.
     * @param config object to which property is attached.
     * @param path_property_name name of path property.
     * @param writable_property_name name of writable path property.
     * @param filechooser_title window title of {@link Gtk.FileChooserDialog} widget.
     * @returns A new {@link GimpUi.PathEditor}.
     */
    function prop_path_editor_new(config: GObject.Object, path_property_name: string, writable_property_name: string, filechooser_title: string): Gtk.Widget;

    /**
     * Creates a {@link GimpUi.PatternChooser} controlled by the specified property.
     * @param config Object to which property is attached.
     * @param property_name Name of a {@link Gimp.Pattern} property.
     * @param chooser_title title for the poppable dialog.
     * @returns A new {@link GimpUi.PatternChooser}.
     * @since 3.0
     */
    function prop_pattern_chooser_new(config: GObject.Object, property_name: string, chooser_title: (string | null)): Gtk.Widget;

    /**
     * Creates a {@link GimpUi.IntComboBox} widget to display and set the specified
     * property.  The contents of the widget are determined by `store`,
     * which should be created using `gimp_int_store_new()`.
     * Values are GType/gpointer data, and therefore must be stored in the
     * "user-data" column, instead of the usual "value" column.
     * @param config Object to which property is attached.
     * @param property_name Name of GType/gpointer property controlled by combo box.
     * @param store {@link GimpUi.IntStore} holding list of labels, values, etc.
     * @returns The newly created {@link GimpUi.IntComboBox} widget.
     * @since 2.10
     */
    function prop_pointer_combo_box_new(config: GObject.Object, property_name: string, store: IntStore): Gtk.Widget;

    /**
     * Creates a {@link GimpUi.ScaleEntry} (slider and spin button) to set and display
     * the value of a specified int or double property with sensible default
     * settings depending on the range (decimal places, increments, etc.).
     * These settings can be overridden by the relevant widget methods.
     * 
     * If `label` is `null`, the `property_name`'s nick will be used as label
     * of the returned object.
     * 
     * If `factor` is not 1.0, the widget's range will be computed based of
     * `property_name`'s range multiplied by `factor`. A typical usage would
     * be to display a [0.0, 1.0] range as [0.0, 100.0] by setting 100.0 as
     * `factor`.
     * 
     * See `gimp_scale_entry_set_bounds()` for more information on
     * `limit_scale`, `lower_limit` and `upper_limit`.
     * @param config Object to which property is attached.
     * @param property_name Name of integer or double property controlled by the scale.
     * @param label The text for the {@link Gtk.Label} which will appear left of                     the {@link Gtk.Scale}.
     * @param factor Optional multiplier to convert `property_name`'s                  range into the {@link GimpUi.ScaleEntry}'s range. The common                  usage is to set 1.0.                  For non-double properties, no other values than 1.0                  are acceptable.
     * @param limit_scale `false` if the range of possible values of the                  GtkScale should be the same as of the GtkSpinButton.
     * @param lower_limit The scale's lower boundary if `scale_limits` is `true`.
     * @param upper_limit The scale's upper boundary if `scale_limits` is `true`.
     * @returns The newly allocated {@link GimpUi.ScaleEntry}.
     * @since 2.4
     */
    function prop_scale_entry_new(config: GObject.Object, property_name: string, label: (string | null), factor: number, limit_scale: boolean, lower_limit: number, upper_limit: number): Gtk.Widget;

    /**
     * Creates a {@link GimpUi.SizeEntry} to set and display the specified double or
     * int property, and its associated unit property.  Note that this
     * function is only suitable for creating a size entry holding a
     * single value.  Use `gimp_prop_coordinates_new()` to create a size
     * entry holding two values.
     * @param config Object to which property is attached.
     * @param property_name Name of int or double property.
     * @param property_is_pixel When `true`, the property value is in pixels,                      and in the selected unit otherwise.
     * @param unit_property_name Name of unit property.
     * @param unit_format A printf-like unit-format string as is used with                      `gimp_unit_menu_new()`.
     * @param update_policy How the automatic pixel <-> real-world-unit                      calculations should be done.
     * @param resolution The resolution (in dpi) for the field.
     * @returns A new {@link GimpUi.SizeEntry} widget.
     * @since 2.4
     */
    function prop_size_entry_new(config: GObject.Object, property_name: string, property_is_pixel: boolean, unit_property_name: string, unit_format: string, update_policy: SizeEntryUpdatePolicy, resolution: number): Gtk.Widget;

    /**
     * Creates a spin button to set and display the value of the
     * specified double property.
     * 
     * If you wish to change the widget's range relatively to the
     * `property_name`'s range, use `gimp_prop_widget_set_factor()`.
     * @param config Object to which property is attached.
     * @param property_name Name of double property controlled by the spin button.
     * @param step_increment Step size.
     * @param page_increment Page size.
     * @param digits Number of digits after decimal point to display.
     * @returns A new #libgimpwidgets-gimpspinbutton.
     * @since 2.4
     */
    function prop_spin_button_new(config: GObject.Object, property_name: string, step_increment: number, page_increment: number, digits: number): Gtk.Widget;

    /**
     * Creates a spin scale to set and display the value of the specified
     * int or double property.
     * 
     * By default, the `property_name`'s nick will be used as label of the
     * returned widget. Use `gimp_spin_scale_set_label()` to change this.
     * 
     * If you wish to change the widget's range relatively to the
     * `property_name`'s range, use `gimp_prop_widget_set_factor()`.
     * @param config Object to which property is attached.
     * @param property_name Name of double or int property controlled by the                  spin button.
     * @param step_increment Step size.
     * @param page_increment Page size.
     * @param digits Number of digits after decimal point to display.                  This is only used for double properties. In case of                  int properties, `digits = 0` is implied.
     * @returns A new #libgimpwidgets-gimpspinbutton.
     * @since 3.0
     */
    function prop_spin_scale_new(config: GObject.Object, property_name: string, step_increment: number, page_increment: number, digits: number): Gtk.Widget;

    /**
     * Creates a {@link GimpUi.StringComboBox} widget to display and set the
     * specified property.  The contents of the widget are determined by
     * `store`.
     * @param config Object to which property is attached.
     * @param property_name Name of int property controlled by combo box.
     * @param model {@link Gtk.TreeStore} holding list of values
     * @param id_column column in `store` that holds string IDs
     * @param label_column column in `store` that holds labels to use in the combo-box
     * @returns The newly created {@link GimpUi.StringComboBox} widget.
     * @since 2.4
     */
    function prop_string_combo_box_new(config: GObject.Object, property_name: string, model: Gtk.TreeModel, id_column: number, label_column: number): Gtk.Widget;

    /**
     * Creates a {@link Gtk.Box} with a switch and a label that displays and sets the
     * specified boolean property.
     * If `label` is `null`, the `property_name`'s nick will be used as label.
     * @param config Object to which property is attached.
     * @param property_name Name of boolean property controlled by checkbutton.
     * @param label Label to give checkbutton (including mnemonic).
     * @returns The newly created box containing a {@link Gtk.Switch}.
     * @since 3.0
     */
    function prop_switch_new(config: GObject.Object, property_name: string, label: string): [Gtk.Widget, Gtk.Widget | null, Gtk.Widget | null];

    /**
     * Creates a {@link Gtk.TextBuffer} to set and display the value of the
     * specified string property.  Unless the string is expected to
     * contain multiple lines or a large amount of text, use
     * `gimp_prop_entry_new()` instead.  See {@link Gtk.TextView} for information on
     * how to insert a text buffer into a visible widget.
     * 
     * If `max_len` is 0 or negative, the text buffer allows an unlimited
     * number of characters to be entered.
     * @param config Object to which property is attached.
     * @param property_name Name of string property.
     * @param max_len Maximum allowed length of text (in characters).
     * @returns A new {@link Gtk.TextBuffer}.
     * @since 2.4
     */
    function prop_text_buffer_new(config: GObject.Object, property_name: string, max_len: number): Gtk.TextBuffer;

    /**
     * Creates a {@link Gtk.ToggleButton} that sets the specified boolean
     * property.
     * 
     * If `icon_name` is `null`, `label` will be used. If `label` is `null` too,
     * the `property_name`'s nick will be used as label.
     * @param config Object to which property is attached.
     * @param property_name Name of boolean property controlled by the toggle button.
     * @param icon_name Icon to display in the toggle.
     * @param label Label to give the toggle (including mnemonic).
     * @returns The newly {@link Gtk.ToggleButton}.
     * @since 3.2
     */
    function prop_toggle_new(config: GObject.Object, property_name: string, icon_name: string, label: string): [Gtk.Widget, Gtk.Widget | null];

    /**
     * Creates a {@link GimpUi.UnitComboBox} to set and display the value of a Unit
     * property.  See `gimp_unit_combo_box_new()` for more information.
     * @param config Object to which property is attached.
     * @param property_name Name of Unit property.
     * @returns A new {@link GimpUi.UnitComboBox} widget.
     * @since 2.8
     */
    function prop_unit_combo_box_new(config: GObject.Object, property_name: string): Gtk.Widget;

    /**
     * Change the display factor of the property `widget` relatively to the
     * property it was bound to. Currently the only types of widget accepted
     * as input are those created by `gimp_prop_spin_scale_new()` and
     * `gimp_prop_spin_button_new()`.
     * 
     * If `factor` is 1.0, then the config property and the widget display
     * map exactly.
     * 
     * If `factor` is not 1.0, the widget's range will be computed based of
     * `property_name`'s range multiplied by `factor`. A typical usage would
     * be to display a [0.0, 1.0] range as [0.0, 100.0] by setting 100.0 as
     * `factor`. This function can only be used with double properties.
     * 
     * The `step_increment` and `page_increment` can be set to new increments
     * you want to get for this new range. If you set them to 0.0 or
     * negative values, new increments will be computed based on the new
     * `factor` and previous factor.
     * @param widget Property widget.
     * @param factor Multiplier to convert the `widget`'s range and                  map appropriately to the property's range it is                  associated to.
     * @param step_increment Step size.
     * @param page_increment Page size.
     * @param digits Number of digits after decimal point to display.
     * @since 3.0
     */
    function prop_widget_set_factor(widget: Gtk.Widget, factor: number, step_increment: number, page_increment: number, digits: number): void;

    /**
     * Creates a new {@link Gtk.Dialog} that asks the user to do a boolean decision.
     * @param title The query box dialog's title.
     * @param parent The dialog's parent widget.
     * @param help_func The help function to show this dialog's help page.
     * @param help_id A string identifying this dialog's help page.
     * @param icon_name An icon name to specify an icon to appear on the left                on the dialog's message.
     * @param message A string which will be shown in the query box.
     * @param true_button The string to be shown in the dialog's left button.
     * @param false_button The string to be shown in the dialog's right button.
     * @param object The object this query box is associated with.
     * @param signal The object's signal which will cause the query box                to be closed.
     * @param callback The function which will be called when the user clicks one                of the buttons.
     * @returns A pointer to the new {@link Gtk.Dialog}.
     */
    function query_boolean_box(title: string, parent: Gtk.Widget, help_func: HelpFunc, help_id: string, icon_name: string, message: string, true_button: string, false_button: string, object: GObject.Object, signal: string, callback: QueryBooleanCallback): Gtk.Widget;

    /**
     * Creates a new {@link Gtk.Dialog} that queries the user for a double value.
     * @param title The query box dialog's title.
     * @param parent The dialog's parent widget.
     * @param help_func The help function to show this dialog's help page.
     * @param help_id A string identifying this dialog's help page.
     * @param message A string which will be shown above the dialog's entry widget.
     * @param initial The initial value.
     * @param lower The lower boundary of the range of possible values.
     * @param upper The upper boundray of the range of possible values.
     * @param digits The number of decimal digits the {@link Gtk.SpinButton} will provide.
     * @param object The object this query box is associated with.
     * @param signal The object's signal which will cause the query box to be closed.
     * @param callback The function which will be called when the user selects "OK".
     * @returns A pointer to the new {@link Gtk.Dialog}.
     */
    function query_double_box(title: string, parent: Gtk.Widget, help_func: HelpFunc, help_id: string, message: string, initial: number, lower: number, upper: number, digits: number, object: GObject.Object, signal: string, callback: QueryDoubleCallback): Gtk.Widget;

    /**
     * Creates a new {@link Gtk.Dialog} that queries the user for an integer value.
     * @param title The query box dialog's title.
     * @param parent The dialog's parent widget.
     * @param help_func The help function to show this dialog's help page.
     * @param help_id A string identifying this dialog's help page.
     * @param message A string which will be shown above the dialog's entry widget.
     * @param initial The initial value.
     * @param lower The lower boundary of the range of possible values.
     * @param upper The upper boundray of the range of possible values.
     * @param object The object this query box is associated with.
     * @param signal The object's signal which will cause the query box to be closed.
     * @param callback The function which will be called when the user selects "OK".
     * @returns A pointer to the new {@link Gtk.Dialog}.
     */
    function query_int_box(title: string, parent: Gtk.Widget, help_func: HelpFunc, help_id: string, message: string, initial: number, lower: number, upper: number, object: GObject.Object, signal: string, callback: QueryIntCallback): Gtk.Widget;

    /**
     * Creates a new {@link Gtk.Dialog} that queries the user for a size using a
     * {@link GimpUi.SizeEntry}.
     * @param title The query box dialog's title.
     * @param parent The dialog's parent widget.
     * @param help_func The help function to show this dialog's help page.
     * @param help_id A string identifying this dialog's help page.
     * @param message A string which will be shown above the dialog's entry widget.
     * @param initial The initial value.
     * @param lower The lower boundary of the range of possible values.
     * @param upper The upper boundray of the range of possible values.
     * @param digits The number of decimal digits the {@link GimpUi.SizeEntry} provide in                "pixel" mode.
     * @param unit The unit initially shown by the `GimpUnitMenu`.
     * @param resolution The resolution (in dpi) which will be used for pixel/unit                calculations.
     * @param dot_for_dot `true` if the `GimpUnitMenu`'s initial unit should be "pixels".
     * @param object The object this query box is associated with.
     * @param signal The object's signal which will cause the query box                to be closed.
     * @param callback The function which will be called when the user selects "OK".
     * @returns A pointer to the new {@link Gtk.Dialog}.
     */
    function query_size_box(title: string, parent: Gtk.Widget, help_func: HelpFunc, help_id: string, message: string, initial: number, lower: number, upper: number, digits: number, unit: Gimp.Unit, resolution: number, dot_for_dot: boolean, object: GObject.Object, signal: string, callback: QuerySizeCallback): Gtk.Widget;

    /**
     * Creates a new {@link Gtk.Dialog} that queries the user for a string value.
     * @param title The query box dialog's title.
     * @param parent The dialog's parent widget.
     * @param help_func The help function to show this dialog's help page.
     * @param help_id A string identifying this dialog's help page.
     * @param message A string which will be shown above the dialog's entry widget.
     * @param initial The initial value.
     * @param object The object this query box is associated with.
     * @param signal The object's signal which will cause the query box to be closed.
     * @param callback The function which will be called when the user selects "OK".
     * @returns A pointer to the new {@link Gtk.Dialog}.
     */
    function query_string_box(title: string, parent: Gtk.Widget, help_func: HelpFunc, help_id: string, message: string, initial: string, object: GObject.Object, signal: string, callback: QueryStringCallback): Gtk.Widget;

    /**
     * @param widget A {@link Gtk.RadioButton}.
     */
    function radio_button_update(widget: Gtk.Widget): number;

    /**
     * Creates a widget that allows the user to control how the random number
     * generator is initialized.
     * @param seed A pointer to the variable which stores the random seed.
     * @param random_seed A pointer to a boolean indicating whether seed should be               initialised randomly or not.
     * @returns A {@link Gtk.Box} containing a {@link Gtk.SpinButton} for          the seed and a {@link Gtk.Button} for setting a random seed.
     */
    function random_seed_new(seed: number, random_seed: boolean): Gtk.Widget;

    /**
     * @param sevent A {@link Gdk.EventScroll}
     * @param hadj Horizontal adjustment
     * @param vadj Vertical adjustment
     */
    function scroll_adjustment_values(sevent: Gdk.EventScroll, hadj: (Gtk.Adjustment | null), vadj: (Gtk.Adjustment | null)): [number, number];

    /**
     * This is the standard GIMP help function which does nothing but calling
     * `gimp_help()`. It is the right function to use in almost all cases.
     * @param help_id A unique help identifier.
     * @param help_data The `help_data` passed to `gimp_help_connect()`.
     */
    function standard_help_func(help_id: string, help_data: null): void;

    /**
     * @param widget A {@link Gtk.ToggleButton}.
     */
    function toggle_button_update(widget: Gtk.Widget): boolean;

    /**
     * Note that the {@link Gtk.Adjustment}'s value (which is a `gdouble`) will be rounded
     * with (`guint`) (value + 0.5).
     * @param adjustment A {@link Gtk.Adjustment}.
     */
    function uint_adjustment_update(adjustment: Gtk.Adjustment): number;

    /**
     * This function attempts to read the user's system preference for
     * showing animation. It can be used to turn off or hide unnecessary
     * animations such as the scrolling credits or Easter Egg animations.
     * @returns `true` if the user has animations enabled on their system
     * @since 3.0
     */
    function widget_animation_enabled(): boolean;

    /**
     * Disposes a widget's native window handle created, possibly
     * asynchronously, by a previous call to {@link GimpUi.widget_set_native_handle}.
     * 
     * Depending on the platform, this function may also execute other
     * necessary clean up so you should call it and not simply free the
     * {@link GLib.Bytes} yourself.
     * 
     * You should call this function in the `dispose()` implementation of
     * your custom widget **before** chaining up with the parent class'
     * `dispose()` call. The first call to the parent's `dispose()` will
     * destroy the {@link Gdk.Window} which will prevent this function to do part
     * of its cleanup when run after. This may result in crashes on some
     * platforms.
     * 
     * This is safe to call even if deferenced `window_handle` is `null`, i.e.
     * that you don't have to check if the window handle was actually set.
     * @param widget a widget we got a handle for.
     * @param window_handle same pointer previously passed to {@link GimpUi.widget_set_native_handle}.
     * @since 3.0
     */
    function widget_free_native_handle(widget: Gtk.Widget, window_handle: (GLib.Bytes | Uint8Array)): GLib.Bytes;

    /**
     * This function returns the {@link Gimp.ColorProfile} of the monitor `widget` is
     * currently displayed on, or `null` if there is no profile configured.
     * @param widget a {@link Gtk.Widget}
     * @returns `widget`'s monitor's {@link Gimp.ColorProfile},          or `null`.
     * @since 3.0
     */
    function widget_get_color_profile(widget: Gtk.Widget): (Gimp.ColorProfile | null);

    /**
     * This function returns the {@link Gimp.ColorTransform} that transforms pixels
     * from `src_profile` to the profile of the {@link Gdk.Monitor} the `widget` is
     * displayed on.
     * @param widget a {@link Gtk.Widget}
     * @param config a {@link Gimp.ColorConfig}
     * @param src_profile a {@link Gimp.ColorProfile}
     * @param src_format Babl format for the transform's source pixels
     * @param dest_format Babl format for the transforms's destination pixels
     * @param softproof_profile 
     * @param proof_intent 
     * @param proof_bpc 
     * @returns the {@link Gimp.ColorTransform}.
     * @since 2.10
     */
    function widget_get_color_transform(widget: Gtk.Widget, config: Gimp.ColorConfig, src_profile: Gimp.ColorProfile, src_format: Babl.Object, dest_format: Babl.Object, softproof_profile: Gimp.ColorProfile, proof_intent: Gimp.ColorRenderingIntent, proof_bpc: boolean): (Gimp.ColorTransform | null);

    /**
     * @param widget a {@link Gtk.Widget}.
     * @returns the {@link Gdk.Monitor} where `widget` is current displayed on.
     */
    function widget_get_monitor(widget: Gtk.Widget): Gdk.Monitor;

    /**
     * @param widget 
     * @param config 
     */
    function widget_get_render_space(widget: Gtk.Widget, config: Gimp.ColorConfig): Babl.Object;

    /**
     * This function is to be used in custom widget construction to store
     * the window handle representing `widget` into `window_handle` so that it
     * can later be reused to set other windows as transient to this one
     * (even across processes, such as in-between plug-ins), e.g. using
     * {@link GimpUi.window_set_transient_for}.
     * 
     * Depending on the platform, the actual content of `window_handle` can be
     * various types and should therefore be considered an opaque data.
     * Moreover it may be filled asynchronously in a callback, so you should
     * not assume that `window_handle` is set after running
     * this function.
     * 
     * This convenience function is safe to use even before `widget` is
     * visible as it will set the handle once it is mapped.
     * 
     * Free `window_handle` on `dispose()` or `finalize()` with
     * {@link GimpUi.widget_free_native_handle}.
     * @param widget a widget to get a handle for.
     * @param window_handle pointer to store the native handle as a {@link GLib.Bytes}.
     * @since 3.0
     */
    function widget_set_native_handle(widget: Gtk.Widget, window_handle: (GLib.Bytes | Uint8Array)): GLib.Bytes;

    /**
     * This function behaves as if {@link Gtk.Widget} had a signal
     * 
     * GtkWidget::monitor_changed(GtkWidget *widget, gpointer user_data)
     * 
     * That is emitted whenever `widget`'s toplevel window is moved from
     * one monitor to another. This function automatically connects to
     * the right toplevel {@link Gtk.Window}, even across moving `widget` between
     * toplevel windows.
     * 
     * Note that this function tracks the toplevel, not `widget` itself, so
     * all a window's widgets are always considered to be on the same
     * monitor. This is because this function is mainly used for fetching
     * the new monitor's color profile, and it makes little sense to use
     * different profiles for the widgets of one window.
     * @param widget a {@link Gtk.Widget}
     * @param monitor_changed_callback the callback when `widget`'s monitor changes
     * @since 2.10
     */
    function widget_track_monitor(widget: Gtk.Widget, monitor_changed_callback: GObject.Callback): void;

    /**
     * This function is never called directly. Use GIMP_WIDGETS_ERROR() instead.
     * @returns the {@link GLib.Quark} that defines the GIMP widgets error domain.
     */
    function widgets_error_quark(): GLib.Quark;

    /**
     * Indicates to the window manager that `window` is a transient dialog
     * associated with the GIMP window that the plug-in has been
     * started from. See also `gimp_window_set_transient_for_display()`.
     * @param window the {@link Gtk.Window} that should become transient
     * @since 2.4
     */
    function window_set_transient(window: Gtk.Window): void;

    /**
     * Indicates to the window manager that `window` is a transient dialog
     * to the window identified by `handle`.
     * 
     * Note that `handle` is an opaque data, which you should not try to
     * construct yourself or make sense of. It may be different things
     * depending on the OS or even the display server. You should only use
     * a handle returned by {@link Gimp.progress_get_window_handle},
     * {@link Gimp.Display.get_window_handle} or
     * {@link GimpUi.Dialog.get_native_handle}.
     * 
     * Most of the time you will want to use the convenience function
     * {@link GimpUi.window_set_transient}.
     * @param window the {@link Gtk.Window} that should become transient
     * @param handle handle of the window that should become the parent
     * @since 3.0
     */
    function window_set_transient_for(window: Gtk.Window, handle: (GLib.Bytes | Uint8Array)): void;

    /**
     * Indicates to the window manager that `window` is a transient dialog
     * associated with the GIMP image window that is identified by its
     * display. See {@link Gdk.Window.set_transient_for} for more information.
     * 
     * Most of the time you will want to use the convenience function
     * {@link GimpUi.window_set_transient}.
     * @param window the {@link Gtk.Window} that should become transient
     * @param display display of the image window that should become the parent
     * @since 2.4
     */
    function window_set_transient_for_display(window: Gtk.Window, display: Gimp.Display): void;

    /**
     * @param model a {@link GimpUi.ZoomModel}
     * @param zoom_type 
     * @param icon_size use 0 for a button with text labels
     * @returns a newly created GtkButton Since GIMP 2.4
     */
    function zoom_button_new(model: ZoomModel, zoom_type: ZoomType, icon_size: Gtk.IconSize): Gtk.Widget;

    /**
     * @gir-type Callback
     */
    interface HelpFunc {
        (help_id: string, help_data: null): void;
    }

    /**
     * @gir-type Callback
     */
    interface ImageConstraintFunc {
        (image: Gimp.Image): boolean;
    }

    /**
     * @gir-type Callback
     */
    interface IntRadioFrameSensitivityFunc {
        (value: number, new_value: number): boolean;
    }

    /**
     * @gir-type Callback
     */
    interface IntSensitivityFunc {
        (value: number): boolean;
    }

    /**
     * @gir-type Callback
     */
    interface ItemConstraintFunc {
        (image: Gimp.Image, item: Gimp.Item): boolean;
    }

    /**
     * @gir-type Callback
     */
    interface QueryBooleanCallback {
        (query_box: Gtk.Widget, value: boolean): void;
    }

    /**
     * @gir-type Callback
     */
    interface QueryDoubleCallback {
        (query_box: Gtk.Widget, value: number): void;
    }

    /**
     * @gir-type Callback
     */
    interface QueryIntCallback {
        (query_box: Gtk.Widget, value: number): void;
    }

    /**
     * @gir-type Callback
     */
    interface QuerySizeCallback {
        (query_box: Gtk.Widget, size: number, unit: Gimp.Unit): void;
    }

    /**
     * @gir-type Callback
     */
    interface QueryStringCallback {
        (query_box: Gtk.Widget, string: string): void;
    }

    /**
     * @gir-type Callback
     */
    interface StringSensitivityFunc {
        (id: string): boolean;
    }

    namespace AspectPreview {
        // Signal signatures
        interface SignalSignatures extends Preview.SignalSignatures {
            "notify::drawable": (pspec: GObject.ParamSpec) => void;
            "notify::update": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Preview.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            drawable: Gimp.Drawable;
        }
    }

    /**
     * A widget providing a preview with fixed aspect ratio.
     * @gir-type Class
     */
    class AspectPreview extends Preview implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<AspectPreview>;

        // Properties
        /**
         * @construct-only
         */
        get drawable(): Gimp.Drawable;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AspectPreview.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AspectPreview.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_from_drawable(drawable: Gimp.Drawable): AspectPreview;

        // Signals
        /** @signal */
        connect<K extends keyof AspectPreview.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AspectPreview.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AspectPreview.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AspectPreview.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AspectPreview.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AspectPreview.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace Browser {
        // Signal signatures
        interface SignalSignatures extends Gtk.Paned.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            search: (arg0: string, arg1: number) => void;
            /**
             * This signal is emitted when the search operation was stopped by user input.
             * @signal
             * @run-last
             */
            "stop-search": () => void;
            "notify::max-position": (pspec: GObject.ParamSpec) => void;
            "notify::min-position": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::position-set": (pspec: GObject.ParamSpec) => void;
            "notify::wide-handle": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Paned.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {

        }
    }

    /**
     * A base class for a documentation browser.
     * @gir-type Class
     */
    class Browser extends Gtk.Paned implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<Browser>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Browser.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Browser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Browser;

        // Signals
        /** @signal */
        connect<K extends keyof Browser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Browser.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Browser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Browser.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Browser.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Browser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns The left vbox.
         */
        get_left_vbox(): Gtk.Box;

        /**
         * @returns The right vbox.
         */
        get_right_vbox(): Gtk.Box;

        /**
         * Sets the search summary text.
         * @param summary a string describing the search result
         */
        set_search_summary(summary: string): void;

        /**
         * Sets the widget to appear on the right side of the `browser`.
         * @param widget a {@link Gtk.Widget}
         */
        set_widget(widget: Gtk.Widget): void;

        /**
         * Displays `message` in the right side of the `browser`. Unless the right
         * side already contains a {@link Gtk.Label}, the widget previously added with
         * `gimp_browser_set_widget()` is removed and replaced by a {@link Gtk.Label}.
         * @param message text message
         */
        show_message(message: string): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace BrushChooser {
        // Signal signatures
        interface SignalSignatures extends ResourceChooser.SignalSignatures {
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::resource": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends ResourceChooser.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {

        }
    }

    /**
     * A button which pops up a brush selection dialog.
     * 
     * Note that this widget draws itself using `GEGL` code. You **must** call
     * {@link Gegl.init} first to be able to use this chooser.
     * @gir-type Class
     */
    class BrushChooser extends ResourceChooser implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<BrushChooser>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BrushChooser.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<BrushChooser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](title: (string | null), label: (string | null), brush: (Gimp.Brush | null)): BrushChooser;

        // Conflicted with Gtk.Box.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof BrushChooser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BrushChooser.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof BrushChooser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BrushChooser.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof BrushChooser.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BrushChooser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace BusyBox {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::message": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            message: string;
        }
    }

    /**
     * {@link GimpUi.BusyBox} displays a styled message, providing indication of
     * an ongoing operation.
     * @gir-type Class
     */
    class BusyBox extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<BusyBox>;

        // Properties
        /**
         * Specifies the displayed message.
         * @since 2.10.4
         * @default null
         */
        get message(): string;
        set message(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BusyBox.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<BusyBox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](message: (string | null)): BusyBox;

        // Conflicted with Gtk.Box.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof BusyBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BusyBox.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof BusyBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, BusyBox.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof BusyBox.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<BusyBox.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Returns the displayed message of `box`.
         * @returns The displayed message.
         */
        get_message(): string;

        /**
         * Sets the displayed message og `box` to `message`.
         * @param message the displayed message
         */
        set_message(message: string): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace Button {
        // Signal signatures
        interface SignalSignatures extends Gtk.Button.SignalSignatures {
            /**
             * This signal is emitted when the button is clicked with a modifier
             * key pressed.
             * @signal
             * @run-first
             */
            "extended-clicked": (arg0: Gdk.ModifierType) => void;
            "notify::always-show-image": (pspec: GObject.ParamSpec) => void;
            "notify::image": (pspec: GObject.ParamSpec) => void;
            "notify::image-position": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::relief": (pspec: GObject.ParamSpec) => void;
            "notify::use-stock": (pspec: GObject.ParamSpec) => void;
            "notify::use-underline": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::yalign": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::action-name": (pspec: GObject.ParamSpec) => void;
            "notify::action-target": (pspec: GObject.ParamSpec) => void;
            "notify::related-action": (pspec: GObject.ParamSpec) => void;
            "notify::use-action-appearance": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Button.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Actionable.ConstructorProps, Gtk.Activatable.ConstructorProps, Gtk.Buildable.ConstructorProps {

        }
    }

    /**
     * {@link GimpUi.Button} adds an extra signal to the {@link Gtk.Button} widget that
     * allows the callback to distinguish a normal click from a click that
     * was performed with modifier keys pressed.
     * @gir-type Class
     */
    class Button extends Gtk.Button implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {
        static $gtype: GObject.GType<Button>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Button.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Button.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Button;

        // Signals
        /** @signal */
        connect<K extends keyof Button.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Button.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Button.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Button.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Button.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Button.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * Emits the button's "extended_clicked" signal.
         * @param modifier_state a state as found in {@link Gdk.EventButton}->state,                  e.g. #GDK_SHIFT_MASK.
         * @virtual
         */
        vfunc_extended_clicked(modifier_state: Gdk.ModifierType): void;

        // Methods
        /**
         * Emits the button's "extended_clicked" signal.
         * @param modifier_state a state as found in {@link Gdk.EventButton}->state,                  e.g. #GDK_SHIFT_MASK.
         */
        extended_clicked(modifier_state: Gdk.ModifierType): void;

        /**
         * @default null
          * @category Inherited from Gtk.Actionable
         */
        get action_name(): (string | null);
        set action_name(val: (string | null));

        /**
         * @default null
          * @category Inherited from Gtk.Actionable
         */
        get actionName(): (string | null);
        set actionName(val: (string | null));

        /** @category Inherited from Gtk.Actionable */
        get action_target(): GLib.Variant;
        set action_target(val: GLib.Variant);

        /** @category Inherited from Gtk.Actionable */
        get actionTarget(): GLib.Variant;
        set actionTarget(val: GLib.Variant);

        /**
         * The action that this activatable will activate and receive
         * updates from for various states and possibly appearance.
         * 
         * > {@link Gtk.Activatable} implementors need to handle the this property and
         * > call `gtk_activatable_do_set_related_action()` when it changes.
         * @since 2.16
         * @deprecated since 3.10
          * @category Inherited from Gtk.Activatable
         */
        get related_action(): Gtk.Action;
        set related_action(val: Gtk.Action);

        /**
         * The action that this activatable will activate and receive
         * updates from for various states and possibly appearance.
         * 
         * > {@link Gtk.Activatable} implementors need to handle the this property and
         * > call `gtk_activatable_do_set_related_action()` when it changes.
         * @since 2.16
         * @deprecated since 3.10
          * @category Inherited from Gtk.Activatable
         */
        get relatedAction(): Gtk.Action;
        set relatedAction(val: Gtk.Action);

        /**
         * Whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         * 
         * See the {@link Gtk.Action} documentation directly to find which properties
         * should be ignored by the {@link Gtk.Activatable} when this property is `false`.
         * 
         * > {@link Gtk.Activatable} implementors need to handle this property
         * > and call `gtk_activatable_sync_action_properties()` on the activatable
         * > widget when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @default true
          * @category Inherited from Gtk.Activatable
         */
        get use_action_appearance(): boolean;
        set use_action_appearance(val: boolean);

        /**
         * Whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         * 
         * See the {@link Gtk.Action} documentation directly to find which properties
         * should be ignored by the {@link Gtk.Activatable} when this property is `false`.
         * 
         * > {@link Gtk.Activatable} implementors need to handle this property
         * > and call `gtk_activatable_sync_action_properties()` on the activatable
         * > widget when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @default true
          * @category Inherited from Gtk.Activatable
         */
        get useActionAppearance(): boolean;
        set useActionAppearance(val: boolean);

        /**
         * Gets the action name for `actionable`.
         * 
         * See `gtk_actionable_set_action_name()` for more information.
         * @returns the action name, or `null` if none is set
         */
        get_action_name(): (string | null);

        /**
         * Gets the current target value of `actionable`.
         * 
         * See `gtk_actionable_set_action_target_value()` for more information.
         * @returns the current target value
         */
        get_action_target_value(): GLib.Variant;

        /**
         * Specifies the name of the action with which this widget should be
         * associated.  If `action_name` is `null` then the widget will be
         * unassociated from any previous action.
         * 
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         * 
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing {@link Gtk.ApplicationWindow} or its associated {@link Gtk.Application},
         * respectively.  This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name, or `null`
         */
        set_action_name(action_name: (string | null)): void;

        /**
         * Sets the target value of an actionable widget.
         * 
         * If `target_value` is `null` then the target value is unset.
         * 
         * The target value has two purposes.  First, it is used as the
         * parameter to activation of the action associated with the
         * {@link Gtk.Actionable} widget. Second, it is used to determine if the widget
         * should be rendered as “active” — the widget is active if the state
         * is equal to the given target.
         * 
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical “radio button” situation.  Each button
         * will be associated with the same action, but with a different target
         * value for that action.  Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value.  Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value, or `null`
         */
        set_action_target_value(target_value: (GLib.Variant | null)): void;

        /**
         * Sets the action-name and associated string target value of an
         * actionable widget.
         * 
         * `detailed_action_name` is a string in the format accepted by
         * `g_action_parse_detailed_name()`.
         * 
         * (Note that prior to version 3.22.25,
         * this function is only usable for actions with a simple "s" target, and
         * `detailed_action_name` must be of the form `"action::target"` where
         * `action` is the action name and `target` is the string to use
         * as the target.)
         * @param detailed_action_name the detailed action name
         */
        set_detailed_action_name(detailed_action_name: string): void;

        /**
         * Gets the action name for `actionable`.
         * 
         * See `gtk_actionable_set_action_name()` for more information.
         * @virtual
         */
        vfunc_get_action_name(): (string | null);

        /**
         * Gets the current target value of `actionable`.
         * 
         * See `gtk_actionable_set_action_target_value()` for more information.
         * @virtual
         */
        vfunc_get_action_target_value(): GLib.Variant;

        /**
         * Specifies the name of the action with which this widget should be
         * associated.  If `action_name` is `null` then the widget will be
         * unassociated from any previous action.
         * 
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         * 
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing {@link Gtk.ApplicationWindow} or its associated {@link Gtk.Application},
         * respectively.  This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name, or `null`
         * @virtual
         */
        vfunc_set_action_name(action_name: (string | null)): void;

        /**
         * Sets the target value of an actionable widget.
         * 
         * If `target_value` is `null` then the target value is unset.
         * 
         * The target value has two purposes.  First, it is used as the
         * parameter to activation of the action associated with the
         * {@link Gtk.Actionable} widget. Second, it is used to determine if the widget
         * should be rendered as “active” — the widget is active if the state
         * is equal to the given target.
         * 
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical “radio button” situation.  Each button
         * will be associated with the same action, but with a different target
         * value for that action.  Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value.  Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value, or `null`
         * @virtual
         */
        vfunc_set_action_target_value(target_value: (GLib.Variant | null)): void;

        /**
         * This is a utility function for {@link Gtk.Activatable} implementors.
         * 
         * When implementing {@link Gtk.Activatable} you must call this when
         * handling changes of the {@link Gtk.Activatable.related_action}, and
         * you must also use this to break references in {@link GObject.Object}->dispose().
         * 
         * This function adds a reference to the currently set related
         * action for you, it also makes sure the {@link Gtk.Activatable}->update()
         * method is called when the related {@link Gtk.Action} properties change
         * and registers to the action’s proxy list.
         * 
         * > Be careful to call this before setting the local
         * > copy of the {@link Gtk.Action} property, since this function uses
         * > `gtk_activatable_get_related_action()` to retrieve the
         * > previous action.
         * @param action the {@link Gtk.Action} to set
         */
        do_set_related_action(action: Gtk.Action): void;

        /**
         * Gets the related {@link Gtk.Action} for `activatable`.
         * @returns the related {@link Gtk.Action} if one is set.
         */
        get_related_action(): Gtk.Action;

        /**
         * Gets whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         * @returns whether `activatable` uses its actions appearance.
         */
        get_use_action_appearance(): boolean;

        /**
         * Sets the related action on the `activatable` object.
         * 
         * > {@link Gtk.Activatable} implementors need to handle the {@link Gtk.Activatable.related_action}
         * > property and call `gtk_activatable_do_set_related_action()` when it changes.
         * @param action the {@link Gtk.Action} to set
         */
        set_related_action(action: Gtk.Action): void;

        /**
         * Sets whether this activatable should reset its layout and appearance
         * when setting the related action or when the action changes appearance
         * 
         * > {@link Gtk.Activatable} implementors need to handle the
         * > {@link Gtk.Activatable.use_action_appearance} property and call
         * > `gtk_activatable_sync_action_properties()` to update `activatable`
         * > if needed.
         * @param use_appearance whether to use the actions appearance
         */
        set_use_action_appearance(use_appearance: boolean): void;

        /**
         * This is called to update the activatable completely, this is called
         * internally when the {@link Gtk.Activatable.related_action} property is set
         * or unset and by the implementing class when
         * {@link Gtk.Activatable.use_action_appearance} changes.
         * @param action the related {@link Gtk.Action} or `null`
         */
        sync_action_properties(action: (Gtk.Action | null)): void;

        /**
         * This is called to update the activatable completely, this is called
         * internally when the {@link Gtk.Activatable.related_action} property is set
         * or unset and by the implementing class when
         * {@link Gtk.Activatable.use_action_appearance} changes.
         * @param action the related {@link Gtk.Action} or `null`
         * @virtual
         */
        vfunc_sync_action_properties(action: (Gtk.Action | null)): void;

        /**
         * Called to update the activatable when its related action’s properties change.
         * You must check the {@link Gtk.Activatable.use_action_appearance} property only apply action
         * properties that are meant to effect the appearance accordingly.
         * @param action 
         * @param property_name 
         * @virtual
         */
        vfunc_update(action: Gtk.Action, property_name: string): void;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;

        /**
         * Returns whether the widget should grab focus when it is clicked with the mouse.
         * See `gtk_widget_set_focus_on_click()`.
         * @returns `true` if the widget should grab focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;

        /**
         * Sets whether the widget should grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the widget should grab focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
    }


    namespace CellRendererColor {
        // Signal signatures
        interface SignalSignatures extends Gtk.CellRenderer.SignalSignatures {
            "notify::color": (pspec: GObject.ParamSpec) => void;
            "notify::icon-size": (pspec: GObject.ParamSpec) => void;
            "notify::opaque": (pspec: GObject.ParamSpec) => void;
            "notify::cell-background": (pspec: GObject.ParamSpec) => void;
            "notify::cell-background-gdk": (pspec: GObject.ParamSpec) => void;
            "notify::cell-background-rgba": (pspec: GObject.ParamSpec) => void;
            "notify::cell-background-set": (pspec: GObject.ParamSpec) => void;
            "notify::editing": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::is-expanded": (pspec: GObject.ParamSpec) => void;
            "notify::is-expander": (pspec: GObject.ParamSpec) => void;
            "notify::mode": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::xpad": (pspec: GObject.ParamSpec) => void;
            "notify::yalign": (pspec: GObject.ParamSpec) => void;
            "notify::ypad": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.CellRenderer.ConstructorProps {
            color: Gegl.Color;
            icon_size: number;
            iconSize: number;
            opaque: boolean;
        }
    }

    /**
     * A {@link Gtk.CellRenderer} to display a {@link Gegl.Color} color.
     * @gir-type Class
     */
    class CellRendererColor extends Gtk.CellRenderer {
        static $gtype: GObject.GType<CellRendererColor>;

        // Properties
        get color(): Gegl.Color;
        set color(val: Gegl.Color);

        /**
         * @default 1
         */
        get icon_size(): number;
        set icon_size(val: number);

        /**
         * @default 1
         */
        get iconSize(): number;
        set iconSize(val: number);

        /**
         * @default true
         */
        get opaque(): boolean;
        set opaque(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CellRendererColor.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<CellRendererColor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): CellRendererColor;

        // Signals
        /** @signal */
        connect<K extends keyof CellRendererColor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CellRendererColor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CellRendererColor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CellRendererColor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CellRendererColor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CellRendererColor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace CellRendererToggle {
        // Signal signatures
        interface SignalSignatures extends Gtk.CellRendererToggle.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            clicked: (arg0: string, arg1: Gdk.ModifierType) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::icon-size": (pspec: GObject.ParamSpec) => void;
            "notify::override-background": (pspec: GObject.ParamSpec) => void;
            "notify::activatable": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::inconsistent": (pspec: GObject.ParamSpec) => void;
            "notify::indicator-size": (pspec: GObject.ParamSpec) => void;
            "notify::radio": (pspec: GObject.ParamSpec) => void;
            "notify::cell-background": (pspec: GObject.ParamSpec) => void;
            "notify::cell-background-gdk": (pspec: GObject.ParamSpec) => void;
            "notify::cell-background-rgba": (pspec: GObject.ParamSpec) => void;
            "notify::cell-background-set": (pspec: GObject.ParamSpec) => void;
            "notify::editing": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::is-expanded": (pspec: GObject.ParamSpec) => void;
            "notify::is-expander": (pspec: GObject.ParamSpec) => void;
            "notify::mode": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::xpad": (pspec: GObject.ParamSpec) => void;
            "notify::yalign": (pspec: GObject.ParamSpec) => void;
            "notify::ypad": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.CellRendererToggle.ConstructorProps {
            icon_name: string;
            iconName: string;
            icon_size: number;
            iconSize: number;
            override_background: boolean;
            overrideBackground: boolean;
        }
    }

    /**
     * A {@link Gtk.CellRendererToggle} that displays icons instead of a checkbox.
     * @gir-type Class
     */
    class CellRendererToggle extends Gtk.CellRendererToggle {
        static $gtype: GObject.GType<CellRendererToggle>;

        // Properties
        /**
         * @default null
         */
        get icon_name(): string;
        set icon_name(val: string);

        /**
         * @default null
         */
        get iconName(): string;
        set iconName(val: string);

        /**
         * @default 16
         */
        get icon_size(): number;
        set icon_size(val: number);

        /**
         * @default 16
         */
        get iconSize(): number;
        set iconSize(val: number);

        /**
         * @default false
         */
        get override_background(): boolean;
        set override_background(val: boolean);

        /**
         * @default false
         */
        get overrideBackground(): boolean;
        set overrideBackground(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CellRendererToggle.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<CellRendererToggle.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](icon_name: string): CellRendererToggle;

        // Conflicted with Gtk.CellRendererToggle.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof CellRendererToggle.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CellRendererToggle.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CellRendererToggle.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CellRendererToggle.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CellRendererToggle.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CellRendererToggle.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Emits the "clicked" signal from a {@link GimpUi.CellRendererToggle}.
         * @param path the path to the clicked row
         * @param state the modifier state
         */
        clicked(path: string, state: Gdk.ModifierType): void;
    }


    namespace ChainButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.Grid.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            toggled: () => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::icon-size": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-row": (pspec: GObject.ParamSpec) => void;
            "notify::column-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::column-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::row-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::row-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Grid.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            active: boolean;
            icon_size: Gtk.IconSize;
            iconSize: Gtk.IconSize;
            position: ChainPosition;
        }
    }

    /**
     * This widget provides a button showing either a linked or a broken
     * chain that can be used to link two entries, spinbuttons, colors or
     * other GUI elements and show that they may be locked. Use it for
     * example to connect X and Y ratios to provide the possibility of a
     * constrained aspect ratio.
     * 
     * The {@link GimpUi.ChainButton} only gives visual feedback, it does not really
     * connect widgets. You have to take care of locking the values
     * yourself by checking the state of the {@link GimpUi.ChainButton} whenever a
     * value changes in one of the connected widgets and adjusting the
     * other value if necessary.
     * @gir-type Class
     */
    class ChainButton extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<ChainButton>;

        // Properties
        /**
         * The toggled state of the chain button.
         * @since 2.10.10
         * @default false
         */
        get active(): boolean;
        set active(val: boolean);

        /**
         * The chain button icon size.
         * @since 2.10.10
         * @default Gtk.IconSize.BUTTON
         */
        get icon_size(): Gtk.IconSize;
        set icon_size(val: Gtk.IconSize);

        /**
         * The chain button icon size.
         * @since 2.10.10
         * @default Gtk.IconSize.BUTTON
         */
        get iconSize(): Gtk.IconSize;
        set iconSize(val: Gtk.IconSize);

        /**
         * The position in which the chain button will be used.
         * @since 2.4
         * @construct-only
         * @default GimpUi.ChainPosition.TOP
         */
        get position(): ChainPosition;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ChainButton.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ChainButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](position: ChainPosition): ChainButton;

        // Conflicted with Gtk.Grid.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof ChainButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ChainButton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ChainButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ChainButton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ChainButton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ChainButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Checks the state of the {@link GimpUi.ChainButton}.
         * @returns `true` if the {@link GimpUi.ChainButton} is active (locked).
         */
        get_active(): boolean;

        /**
         * @returns The {@link GimpUi.ChainButton}'s button.
         */
        get_button(): Gtk.Button;

        /**
         * Gets the icon size of the {@link GimpUi.ChainButton}.
         * @returns The icon size.
         */
        get_icon_size(): Gtk.IconSize;

        /**
         * Sets the state of the {@link GimpUi.ChainButton} to be either locked (`true`) or
         * unlocked (`false`) and changes the showed pixmap to reflect the new state.
         * @param active The new state.
         */
        set_active(active: boolean): void;

        /**
         * Sets the icon size of the {@link GimpUi.ChainButton}.
         * @param size The new icon size.
         */
        set_icon_size(size: Gtk.IconSize): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace ChannelComboBox {
        // Signal signatures
        interface SignalSignatures extends IntComboBox.SignalSignatures {
            "notify::ellipsize": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::layout": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::active-id": (pspec: GObject.ParamSpec) => void;
            "notify::add-tearoffs": (pspec: GObject.ParamSpec) => void;
            "notify::button-sensitivity": (pspec: GObject.ParamSpec) => void;
            "notify::cell-area": (pspec: GObject.ParamSpec) => void;
            "notify::column-span-column": (pspec: GObject.ParamSpec) => void;
            "notify::entry-text-column": (pspec: GObject.ParamSpec) => void;
            "notify::has-entry": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::id-column": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::popup-fixed-width": (pspec: GObject.ParamSpec) => void;
            "notify::popup-shown": (pspec: GObject.ParamSpec) => void;
            "notify::row-span-column": (pspec: GObject.ParamSpec) => void;
            "notify::tearoff-title": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-width": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends IntComboBox.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.CellLayout.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class ChannelComboBox extends IntComboBox implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.CellLayout {
        static $gtype: GObject.GType<ChannelComboBox>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ChannelComboBox.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ChannelComboBox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](constraint: (ItemConstraintFunc | null)): ChannelComboBox;

        // Conflicted with GimpUi.IntComboBox.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect_after<K extends keyof ChannelComboBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ChannelComboBox.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ChannelComboBox.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ChannelComboBox.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;

        /**
         * Returns whether the widget should grab focus when it is clicked with the mouse.
         * See `gtk_widget_set_focus_on_click()`.
         * @returns `true` if the widget should grab focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;

        /**
         * Sets whether the widget should grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the widget should grab focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
    }


    namespace ColorArea {
        // Signal signatures
        interface SignalSignatures extends Gtk.DrawingArea.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            "color-changed": () => void;
            "notify::color": (pspec: GObject.ParamSpec) => void;
            "notify::drag-mask": (pspec: GObject.ParamSpec) => void;
            "notify::draw-border": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.DrawingArea.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            color: Gegl.Color;
            drag_mask: Gdk.ModifierType;
            dragMask: Gdk.ModifierType;
            draw_border: boolean;
            drawBorder: boolean;
            type: ColorAreaType;
        }
    }

    /**
     * Displays a {@link Gegl.Color}, optionally with alpha-channel.
     * @gir-type Class
     */
    class ColorArea extends Gtk.DrawingArea implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<ColorArea>;

        // Properties
        /**
         * The color displayed in the color area.
         * @since 2.4
         */
        get color(): Gegl.Color;
        set color(val: Gegl.Color);

        /**
         * @write-only
         * @default 0
         */
        set drag_mask(val: Gdk.ModifierType);

        /**
         * @write-only
         * @default 0
         */
        set dragMask(val: Gdk.ModifierType);

        /**
         * Whether to draw a thin border in the foreground color around the area.
         * @since 2.4
         * @default false
         */
        get draw_border(): boolean;
        set draw_border(val: boolean);

        /**
         * Whether to draw a thin border in the foreground color around the area.
         * @since 2.4
         * @default false
         */
        get drawBorder(): boolean;
        set drawBorder(val: boolean);

        /**
         * The type of the color area.
         * @since 2.4
         * @default GimpUi.ColorAreaType.FLAT
         */
        get type(): ColorAreaType;
        set type(val: ColorAreaType);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ColorArea.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ColorArea.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](color: Gegl.Color, type: ColorAreaType, drag_mask: Gdk.ModifierType): ColorArea;

        // Conflicted with Gtk.DrawingArea.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof ColorArea.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorArea.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ColorArea.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorArea.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ColorArea.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ColorArea.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Allows dragging the color displayed with buttons identified by
         * `drag_mask`. The drag supports targets of type "application/x-geglcolor".
         * 
         * Note that setting a `drag_mask` of 0 disables the drag ability.
         * @param drag_mask The bitmask of buttons that can start the drag.
         */
        enable_drag(drag_mask: Gdk.ModifierType): void;

        /**
         * Retrieves the current color of the `area`.
         * @returns a copy of the {@link Gegl.Color} displayed in                           `area`.
         */
        get_color(): Gegl.Color;

        /**
         * Checks whether the `area` shows transparency information. This is determined
         * via the `area`'s {@link GimpUi.ColorAreaType}.
         * @returns `true` if `area` shows transparency information, `false` otherwise.
         */
        has_alpha(): boolean;

        /**
         * Sets `area` to a different `color`.
         * @param color Pointer to a {@link Gegl.Color} that defines the new color.
         */
        set_color(color: Gegl.Color): void;

        /**
         * Sets the color management configuration to use with this color area.
         * @param config a {@link Gimp.ColorConfig} object.
         */
        set_color_config(config: Gimp.ColorConfig): void;

        /**
         * The `area` can draw a thin border in the foreground color around
         * itself.  This function toggles this behavior on and off. The
         * default is not draw a border.
         * @param draw_border whether to draw a border or not
         */
        set_draw_border(draw_border: boolean): void;

        /**
         * Sets the color area to render as an out-of-gamut color, i.e. with a
         * small triangle on a corner using the color management out of gamut
         * color (as per `gimp_color_area_set_color_config()`).
         * 
         * By default, `area` will render as out-of-gamut for any RGB color with
         * a channel out of the [0; 1] range. This function allows to consider
         * more colors out of gamut (for instance non-gray colors on a grayscale
         * image, or colors absent of palettes in indexed images, etc.)
         * @param out_of_gamut whether to show an out-of-gamut indicator
         */
        set_out_of_gamut(out_of_gamut: boolean): void;

        /**
         * Changes the type of `area`. The {@link GimpUi.ColorAreaType} determines
         * whether the widget shows transparency information and chooses the
         * size of the checkerboard used to do that.
         * @param type A {@link GimpUi.ColorAreaType}.
         */
        set_type(type: ColorAreaType): void;
    }


    namespace ColorButton {
        // Signal signatures
        interface SignalSignatures extends Button.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            "color-changed": () => void;
            "notify::area-height": (pspec: GObject.ParamSpec) => void;
            "notify::area-width": (pspec: GObject.ParamSpec) => void;
            "notify::color": (pspec: GObject.ParamSpec) => void;
            "notify::color-config": (pspec: GObject.ParamSpec) => void;
            "notify::continuous-update": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::always-show-image": (pspec: GObject.ParamSpec) => void;
            "notify::image": (pspec: GObject.ParamSpec) => void;
            "notify::image-position": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::relief": (pspec: GObject.ParamSpec) => void;
            "notify::use-stock": (pspec: GObject.ParamSpec) => void;
            "notify::use-underline": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::yalign": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Button.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Actionable.ConstructorProps, Gtk.Activatable.ConstructorProps, Gtk.Buildable.ConstructorProps {
            area_height: number;
            areaHeight: number;
            area_width: number;
            areaWidth: number;
            color: Gegl.Color;
            color_config: Gimp.ColorConfig;
            colorConfig: Gimp.ColorConfig;
            continuous_update: boolean;
            continuousUpdate: boolean;
            title: string;
            type: ColorAreaType;
        }
    }

    /**
     * This widget provides a simple button with a preview showing the
     * color.
     * 
     * On click a color selection dialog is opened. Additionally the
     * button supports Drag and Drop and has a right-click menu that
     * allows one to choose the color from the current FG or BG color. If
     * the user changes the color, the "color-changed" signal is emitted.
     * @gir-type Class
     */
    class ColorButton extends Button implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {
        static $gtype: GObject.GType<ColorButton>;

        // Properties
        /**
         * The minimum height of the button's {@link GimpUi.ColorArea}.
         * @since 2.8
         * @write-only
         * @default 16
         */
        set area_height(val: number);

        /**
         * The minimum height of the button's {@link GimpUi.ColorArea}.
         * @since 2.8
         * @write-only
         * @default 16
         */
        set areaHeight(val: number);

        /**
         * The minimum width of the button's {@link GimpUi.ColorArea}.
         * @since 2.8
         * @write-only
         * @default 16
         */
        set area_width(val: number);

        /**
         * The minimum width of the button's {@link GimpUi.ColorArea}.
         * @since 2.8
         * @write-only
         * @default 16
         */
        set areaWidth(val: number);

        /**
         * The color displayed in the button's color area.
         * @since 2.4
         */
        get color(): Gegl.Color;
        set color(val: Gegl.Color);

        /**
         * The {@link Gimp.ColorConfig} object used for the button's {@link GimpUi.ColorArea}
         * and {@link GimpUi.ColorSelection}.
         * @since 2.10
         */
        get color_config(): Gimp.ColorConfig;
        set color_config(val: Gimp.ColorConfig);

        /**
         * The {@link Gimp.ColorConfig} object used for the button's {@link GimpUi.ColorArea}
         * and {@link GimpUi.ColorSelection}.
         * @since 2.10
         */
        get colorConfig(): Gimp.ColorConfig;
        set colorConfig(val: Gimp.ColorConfig);

        /**
         * The update policy of the color button.
         * @since 2.4
         * @default false
         */
        get continuous_update(): boolean;
        set continuous_update(val: boolean);

        /**
         * The update policy of the color button.
         * @since 2.4
         * @default false
         */
        get continuousUpdate(): boolean;
        set continuousUpdate(val: boolean);

        /**
         * The title to be used for the color selection dialog.
         * @since 2.4
         * @default null
         */
        get title(): string;
        set title(val: string);

        /**
         * The type of the button's color area.
         * @since 2.4
         * @default GimpUi.ColorAreaType.FLAT
         */
        get type(): ColorAreaType;
        set type(val: ColorAreaType);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ColorButton.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ColorButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](title: string, width: number, height: number, color: Gegl.Color, type: ColorAreaType): ColorButton;

        // Conflicted with GimpUi.Button.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof ColorButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorButton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ColorButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorButton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ColorButton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ColorButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_color_changed(): void;

        /**
         * @virtual
         */
        vfunc_get_action_type(): GObject.GType;

        // Methods
        /**
         * @returns The `button`'s {@link Gio.SimpleActionGroup}.
         */
        get_action_group(): Gio.SimpleActionGroup;

        /**
         * Retrieves the currently set color from the `button`.
         * @returns a copy of `button`'s {@link Gegl.Color}.
         */
        get_color(): Gegl.Color;

        /**
         * @returns The `button` dialog's title.
         */
        get_title(): string;

        /**
         * Returns the color button's `continuous_update` property.
         * @returns the `continuous_update` property.
         */
        get_update(): boolean;

        /**
         * Checks whether the `buttons` shows transparency information.
         * @returns `true` if the `button` shows transparency information, `false` otherwise.
         */
        has_alpha(): boolean;

        /**
         * Sets the `button` to the given `color`.
         * @param color A new {@link Gegl.Color}.
         */
        set_color(color: Gegl.Color): void;

        /**
         * Sets the color management configuration to use with this color button's
         * {@link GimpUi.ColorArea}.
         * @param config a {@link Gimp.ColorConfig} object.
         */
        set_color_config(config: Gimp.ColorConfig): void;

        /**
         * Sets the `button` dialog's title.
         * @param title the new title.
         */
        set_title(title: string): void;

        /**
         * Sets the `button` to the given `type`. See also `gimp_color_area_set_type()`.
         * @param type the new {@link GimpUi.ColorAreaType}
         */
        set_type(type: ColorAreaType): void;

        /**
         * When set to `true`, the `button` will emit the "color-changed"
         * continuously while the color is changed in the color selection
         * dialog.
         * @param continuous The new setting of the `continuous_update` property.
         */
        set_update(continuous: boolean): void;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;

        /**
         * Returns whether the widget should grab focus when it is clicked with the mouse.
         * See `gtk_widget_set_focus_on_click()`.
         * @returns `true` if the widget should grab focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;

        /**
         * Sets whether the widget should grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the widget should grab focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
    }


    namespace ColorDisplay {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            changed: () => void;
            "notify::color-config": (pspec: GObject.ParamSpec) => void;
            "notify::color-managed": (pspec: GObject.ParamSpec) => void;
            "notify::enabled": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gimp.ConfigInterface.ConstructorProps {
            color_config: Gimp.ColorConfig;
            colorConfig: Gimp.ColorConfig;
            color_managed: Gimp.ColorManaged;
            colorManaged: Gimp.ColorManaged;
            enabled: boolean;
        }
    }

    /**
     * Functions and definitions for creating pluggable GIMP
     * display color correction modules.
     * @gir-type Class
     */
    abstract class ColorDisplay extends GObject.Object implements Gimp.ConfigInterface {
        static $gtype: GObject.GType<ColorDisplay>;

        // Properties
        /**
         * @construct-only
         */
        get color_config(): Gimp.ColorConfig;

        /**
         * @construct-only
         */
        get colorConfig(): Gimp.ColorConfig;

        /**
         * @construct-only
         */
        get color_managed(): Gimp.ColorManaged;

        /**
         * @construct-only
         */
        get colorManaged(): Gimp.ColorManaged;

        /**
         * @default true
         */
        get enabled(): boolean;
        set enabled(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ColorDisplay.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ColorDisplay.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ColorDisplay.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorDisplay.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ColorDisplay.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorDisplay.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ColorDisplay.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ColorDisplay.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_changed(): void;

        /**
         * Creates a configuration widget for `display` which can be added to a
         * container widget.
         * @virtual
         */
        vfunc_configure(): Gtk.Widget;

        /**
         * Converts all pixels in `area` of `buffer`.
         * @param buffer a {@link Gegl.Buffer}
         * @param area area in `buffer` to convert
         * @virtual
         */
        vfunc_convert_buffer(buffer: Gegl.Buffer, area: Gegl.Rectangle): void;

        // Methods
        changed(): void;

        /**
         * Creates a copy of `display`.
         * @returns a duplicate of `display`.
         */
        clone(): ColorDisplay;

        /**
         * Creates a configuration widget for `display` which can be added to a
         * container widget.
         * @returns a new configuration widget for `display`, or          `null` if no specific widget exists.
         */
        configure(): Gtk.Widget;

        configure_reset(): void;

        /**
         * Converts all pixels in `area` of `buffer`.
         * @param buffer a {@link Gegl.Buffer}
         * @param area area in `buffer` to convert
         */
        convert_buffer(buffer: Gegl.Buffer, area: Gegl.Rectangle): void;

        /**
         * @returns a pointer to the {@link Gimp.ColorConfig}               object or `null`.
         */
        get_config(): Gimp.ColorConfig;

        get_enabled(): boolean;

        /**
         * @returns a pointer to the {@link Gimp.ColorManaged}               object or `null`.
         */
        get_managed(): Gimp.ColorManaged;

        /**
         * Configures `display` from the contents of the parasite `state`.
         * `state` must be a properly serialized configuration for a
         * {@link GimpUi.ColorDisplay}, such as saved by `gimp_color_display_save_state()`.
         * @param state a {@link Gimp.Parasite}
         */
        load_state(state: Gimp.Parasite): void;

        /**
         * Saves the configuration state of `display` as a new parasite.
         * @returns a {@link Gimp.Parasite}
         */
        save_state(): Gimp.Parasite;

        /**
         * @param enabled 
         */
        set_enabled(enabled: boolean): void;
    }


    namespace ColorDisplayStack {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            added: (arg0: ColorDisplay, arg1: number) => void;
            /**
             * @signal
             * @run-first
             */
            changed: () => void;
            /**
             * @signal
             * @run-first
             */
            removed: (arg0: ColorDisplay) => void;
            /**
             * @signal
             * @run-first
             */
            reordered: (arg0: ColorDisplay, arg1: number) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * A stack of color correction modules.
     * @gir-type Class
     */
    class ColorDisplayStack extends GObject.Object {
        static $gtype: GObject.GType<ColorDisplayStack>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ColorDisplayStack.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ColorDisplayStack.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ColorDisplayStack;

        // Signals
        /** @signal */
        connect<K extends keyof ColorDisplayStack.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorDisplayStack.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ColorDisplayStack.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorDisplayStack.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ColorDisplayStack.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ColorDisplayStack.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Add the color module `display` to `stack`.
         * @param display a {@link GimpUi.ColorDisplay}
         */
        add(display: ColorDisplay): void;

        /**
         * Emit the "changed" signal of `stack`.
         */
        changed(): void;

        /**
         * Creates a copy of `stack` with all its display color modules also
         * duplicated.
         * @returns a duplicate of `stack`.
         */
        clone(): ColorDisplayStack;

        /**
         * Runs all the stack's filters on all pixels in `area` of `buffer`.
         * @param buffer a {@link Gegl.Buffer}
         * @param area area of `buffer` to convert
         */
        convert_buffer(buffer: Gegl.Buffer, area: Gegl.Rectangle): void;

        /**
         * Gets the list of added color modules.
         * @returns the list of `stack`'s display color modules.
         */
        get_filters(): ColorDisplay[];

        /**
         * Remove the color module `display` from `stack`.
         * @param display a {@link GimpUi.ColorDisplay}
         */
        remove(display: ColorDisplay): void;

        /**
         * Move the color module `display` down in the filter list of `stack`.
         * @param display a {@link GimpUi.ColorDisplay}
         */
        reorder_down(display: ColorDisplay): void;

        /**
         * Move the color module `display` up in the filter list of `stack`.
         * @param display a {@link GimpUi.ColorDisplay}
         */
        reorder_up(display: ColorDisplay): void;
    }


    namespace ColorHexEntry {
        // Signal signatures
        interface SignalSignatures extends Gtk.Entry.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            "color-changed": () => void;
            "notify::activates-default": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::caps-lock-warning": (pspec: GObject.ParamSpec) => void;
            "notify::completion": (pspec: GObject.ParamSpec) => void;
            "notify::cursor-position": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::enable-emoji-completion": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::im-module": (pspec: GObject.ParamSpec) => void;
            "notify::inner-border": (pspec: GObject.ParamSpec) => void;
            "notify::input-hints": (pspec: GObject.ParamSpec) => void;
            "notify::input-purpose": (pspec: GObject.ParamSpec) => void;
            "notify::invisible-char": (pspec: GObject.ParamSpec) => void;
            "notify::invisible-char-set": (pspec: GObject.ParamSpec) => void;
            "notify::max-length": (pspec: GObject.ParamSpec) => void;
            "notify::max-width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::overwrite-mode": (pspec: GObject.ParamSpec) => void;
            "notify::placeholder-text": (pspec: GObject.ParamSpec) => void;
            "notify::populate-all": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-activatable": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-gicon": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-stock": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-storage-type": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::progress-fraction": (pspec: GObject.ParamSpec) => void;
            "notify::progress-pulse-step": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-offset": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-activatable": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-gicon": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-stock": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-storage-type": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::selection-bound": (pspec: GObject.ParamSpec) => void;
            "notify::shadow-type": (pspec: GObject.ParamSpec) => void;
            "notify::show-emoji-icon": (pspec: GObject.ParamSpec) => void;
            "notify::tabs": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::text-length": (pspec: GObject.ParamSpec) => void;
            "notify::truncate-multiline": (pspec: GObject.ParamSpec) => void;
            "notify::visibility": (pspec: GObject.ParamSpec) => void;
            "notify::width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::editing-canceled": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Entry.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.Editable.ConstructorProps {

        }
    }

    /**
     * Widget for entering a color's hex triplet. The syntax follows CSS and
     * SVG specifications, which means that only sRGB colors are supported.
     * @gir-type Class
     */
    class ColorHexEntry extends Gtk.Entry implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.Editable {
        static $gtype: GObject.GType<ColorHexEntry>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ColorHexEntry.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ColorHexEntry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ColorHexEntry;

        // Signals
        /** @signal */
        connect<K extends keyof ColorHexEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorHexEntry.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ColorHexEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorHexEntry.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ColorHexEntry.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ColorHexEntry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Retrieves the color value displayed by a {@link GimpUi.ColorHexEntry}.
         * @returns the color stored in `entry`.
         */
        get_color(): Gegl.Color;

        /**
         * Sets the color displayed by a {@link GimpUi.ColorHexEntry}. If the new color
         * is different to the previously set color, the "color-changed"
         * signal is emitted.
         * @param color the color to set.
         */
        set_color(color: Gegl.Color): void;

        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
          * @category Inherited from Gtk.CellEditable
         */
        get editing_canceled(): boolean;
        set editing_canceled(val: boolean);

        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
          * @category Inherited from Gtk.CellEditable
         */
        get editingCanceled(): boolean;
        set editingCanceled(val: boolean);

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         */
        editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         */
        remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         */
        start_editing(event: (Gdk.Event | null)): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         * @virtual
         */
        vfunc_editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         * @virtual
         */
        vfunc_remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         * @virtual
         */
        vfunc_start_editing(event: (Gdk.Event | null)): void;

        /**
         * Copies the contents of the currently selected content in the editable and
         * puts it on the clipboard.
         */
        copy_clipboard(): void;

        /**
         * Removes the contents of the currently selected content in the editable and
         * puts it on the clipboard.
         */
        cut_clipboard(): void;

        /**
         * Deletes the currently selected text of the editable.
         * This call doesn’t do anything if there is no selected text.
         */
        delete_selection(): void;

        /**
         * Deletes a sequence of characters. The characters that are deleted are
         * those characters at positions from `start_pos` up to, but not including
         * `end_pos`. If `end_pos` is negative, then the characters deleted
         * are those from `start_pos` to the end of the text.
         * 
         * Note that the positions are specified in characters, not bytes.
         * @param start_pos start position
         * @param end_pos end position
         */
        delete_text(start_pos: number, end_pos: number): void;

        /**
         * Retrieves a sequence of characters. The characters that are retrieved
         * are those characters at positions from `start_pos` up to, but not
         * including `end_pos`. If `end_pos` is negative, then the characters
         * retrieved are those characters from `start_pos` to the end of the text.
         * 
         * Note that positions are specified in characters, not bytes.
         * @param start_pos start of text
         * @param end_pos end of text
         * @returns a pointer to the contents of the widget as a      string. This string is allocated by the {@link Gtk.Editable}      implementation and should be freed by the caller.
         */
        get_chars(start_pos: number, end_pos: number): string;

        /**
         * Retrieves whether `editable` is editable. See
         * `gtk_editable_set_editable()`.
         * @returns `true` if `editable` is editable.
         */
        get_editable(): boolean;

        /**
         * Retrieves the current position of the cursor relative to the start
         * of the content of the editable.
         * 
         * Note that this position is in characters, not in bytes.
         * @returns the cursor position
         */
        get_position(): number;

        /**
         * Retrieves the selection bound of the editable. start_pos will be filled
         * with the start of the selection and `end_pos` with end. If no text was
         * selected both will be identical and `false` will be returned.
         * 
         * Note that positions are specified in characters, not bytes.
         * @returns `true` if an area is selected, `false` otherwise
         */
        get_selection_bounds(): [boolean, number, number];

        /**
         * Inserts `new_text_length` bytes of `new_text` into the contents of the
         * widget, at position `position`.
         * 
         * Note that the position is in characters, not in bytes.
         * The function updates `position` to point after the newly inserted text.
         * @param new_text the text to append
         * @param new_text_length the length of the text in bytes, or -1
         * @param position location of the position text will be inserted at
         */
        insert_text(new_text: string, new_text_length: number, position: number): number;

        /**
         * Pastes the content of the clipboard to the current position of the
         * cursor in the editable.
         */
        paste_clipboard(): void;

        /**
         * Selects a region of text. The characters that are selected are
         * those characters at positions from `start_pos` up to, but not
         * including `end_pos`. If `end_pos` is negative, then the
         * characters selected are those characters from `start_pos` to
         * the end of the text.
         * 
         * Note that positions are specified in characters, not bytes.
         * @param start_pos start of region
         * @param end_pos end of region
         */
        select_region(start_pos: number, end_pos: number): void;

        /**
         * Determines if the user can edit the text in the editable
         * widget or not.
         * @param is_editable `true` if the user is allowed to edit the text   in the widget
         */
        set_editable(is_editable: boolean): void;

        /**
         * Sets the cursor position in the editable to the given value.
         * 
         * The cursor is displayed before the character with the given (base 0)
         * index in the contents of the editable. The value must be less than or
         * equal to the number of characters in the editable. A value of -1
         * indicates that the position should be set after the last character
         * of the editable. Note that `position` is in characters, not in bytes.
         * @param position the position of the cursor
         */
        set_position(position: number): void;

        /**
         * @virtual
         */
        vfunc_changed(): void;

        /**
         * Deletes a sequence of characters. The characters that are deleted are
         * those characters at positions from `start_pos` up to, but not including
         * `end_pos`. If `end_pos` is negative, then the characters deleted
         * are those from `start_pos` to the end of the text.
         * 
         * Note that the positions are specified in characters, not bytes.
         * @param start_pos start position
         * @param end_pos end position
         * @virtual
         */
        vfunc_delete_text(start_pos: number, end_pos: number): void;

        /**
         * Deletes a sequence of characters. The characters that are deleted are
         * those characters at positions from `start_pos` up to, but not including
         * `end_pos`. If `end_pos` is negative, then the characters deleted
         * are those from `start_pos` to the end of the text.
         * 
         * Note that the positions are specified in characters, not bytes.
         * @param start_pos start position
         * @param end_pos end position
         * @virtual
         */
        vfunc_do_delete_text(start_pos: number, end_pos: number): void;

        /**
         * Inserts `new_text_length` bytes of `new_text` into the contents of the
         * widget, at position `position`.
         * 
         * Note that the position is in characters, not in bytes.
         * The function updates `position` to point after the newly inserted text.
         * @param new_text the text to append
         * @param new_text_length the length of the text in bytes, or -1
         * @param position location of the position text will be inserted at
         * @virtual
         */
        vfunc_do_insert_text(new_text: string, new_text_length: number, position: number): number;

        /**
         * Retrieves a sequence of characters. The characters that are retrieved
         * are those characters at positions from `start_pos` up to, but not
         * including `end_pos`. If `end_pos` is negative, then the characters
         * retrieved are those characters from `start_pos` to the end of the text.
         * 
         * Note that positions are specified in characters, not bytes.
         * @param start_pos start of text
         * @param end_pos end of text
         * @virtual
         */
        vfunc_get_chars(start_pos: number, end_pos: number): string;

        /**
         * Retrieves the current position of the cursor relative to the start
         * of the content of the editable.
         * 
         * Note that this position is in characters, not in bytes.
         * @virtual
         */
        vfunc_get_position(): number;

        /**
         * Retrieves the selection bound of the editable. start_pos will be filled
         * with the start of the selection and `end_pos` with end. If no text was
         * selected both will be identical and `false` will be returned.
         * 
         * Note that positions are specified in characters, not bytes.
         * @virtual
         */
        vfunc_get_selection_bounds(): [boolean, number, number];

        /**
         * Inserts `new_text_length` bytes of `new_text` into the contents of the
         * widget, at position `position`.
         * 
         * Note that the position is in characters, not in bytes.
         * The function updates `position` to point after the newly inserted text.
         * @param new_text the text to append
         * @param new_text_length the length of the text in bytes, or -1
         * @param position location of the position text will be inserted at
         * @virtual
         */
        vfunc_insert_text(new_text: string, new_text_length: number, position: number): number;

        /**
         * Sets the cursor position in the editable to the given value.
         * 
         * The cursor is displayed before the character with the given (base 0)
         * index in the contents of the editable. The value must be less than or
         * equal to the number of characters in the editable. A value of -1
         * indicates that the position should be set after the last character
         * of the editable. Note that `position` is in characters, not in bytes.
         * @param position the position of the cursor
         * @virtual
         */
        vfunc_set_position(position: number): void;

        /**
         * Selects a region of text. The characters that are selected are
         * those characters at positions from `start_pos` up to, but not
         * including `end_pos`. If `end_pos` is negative, then the
         * characters selected are those characters from `start_pos` to
         * the end of the text.
         * 
         * Note that positions are specified in characters, not bytes.
         * @param start_pos start of region
         * @param end_pos end of region
         * @virtual
         */
        vfunc_set_selection_bounds(start_pos: number, end_pos: number): void;
    }


    namespace ColorNotebook {
        // Signal signatures
        interface SignalSignatures extends ColorSelector.SignalSignatures {
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends ColorSelector.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {

        }
    }

    /**
     * The {@link GimpUi.ColorNotebook} widget is an implementation of a
     * {@link GimpUi.ColorSelector}. It serves as a container for
     * `GimpColorSelectors`.
     * @gir-type Class
     */
    class ColorNotebook extends ColorSelector implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<ColorNotebook>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ColorNotebook.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ColorNotebook.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ColorNotebook.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorNotebook.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ColorNotebook.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorNotebook.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ColorNotebook.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ColorNotebook.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param enabled 
         */
        enable_simulation(enabled: boolean): void;

        /**
         * @param args 
         */
    // Conflicted with GimpUi.ColorSelector.enable_simulation
        enable_simulation(...args: never[]): any;

        /**
         * @returns The active page's {@link GimpUi.ColorSelector}.
         */
        get_current_selector(): ColorSelector;

        /**
         * @returns The {@link Gtk.Notebook} inside.
         */
        get_notebook(): Gtk.Notebook;

        /**
         * @returns The               notebook's list of {@link GimpUi.ColorSelector}'s.
         */
        get_selectors(): ColorSelector[];

        /**
         * Updates all selectors with the current format.
         * @param format A Babl format, with space.
         */
        set_format(format: Babl.Object): void;

        /**
         * This function adds and removed pages to / from a {@link GimpUi.ColorNotebook}.
         * The `page_type` passed must be a {@link GimpUi.ColorSelector} subtype.
         * @param page_type The {@link GObject.GType} of the notebook page to add or remove.
         * @param has_page Whether the page should be added or removed.
         * @returns The new page widget, if `has_page` was               `true`, or `null` if `has_page` was `false`.
         */
        set_has_page(page_type: GObject.GType, has_page: boolean): Gtk.Widget;

        /**
         * Updates all selectors with the current simulation settings.
         * @param profile A {@link Gimp.ColorProfile} object.
         * @param intent A {@link Gimp.ColorRenderingIntent} enum.
         * @param bpc A gboolean.
         */
        set_simulation(profile: Gimp.ColorProfile, intent: Gimp.ColorRenderingIntent, bpc: boolean): void;
    }


    namespace ColorProfileChooserDialog {
        // Signal signatures
        interface SignalSignatures extends Gtk.FileChooserDialog.SignalSignatures {
            "notify::use-header-bar": (pspec: GObject.ParamSpec) => void;
            "notify::accept-focus": (pspec: GObject.ParamSpec) => void;
            "notify::application": (pspec: GObject.ParamSpec) => void;
            "notify::attached-to": (pspec: GObject.ParamSpec) => void;
            "notify::decorated": (pspec: GObject.ParamSpec) => void;
            "notify::default-height": (pspec: GObject.ParamSpec) => void;
            "notify::default-width": (pspec: GObject.ParamSpec) => void;
            "notify::deletable": (pspec: GObject.ParamSpec) => void;
            "notify::destroy-with-parent": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-map": (pspec: GObject.ParamSpec) => void;
            "notify::focus-visible": (pspec: GObject.ParamSpec) => void;
            "notify::gravity": (pspec: GObject.ParamSpec) => void;
            "notify::has-resize-grip": (pspec: GObject.ParamSpec) => void;
            "notify::has-toplevel-focus": (pspec: GObject.ParamSpec) => void;
            "notify::hide-titlebar-when-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-active": (pspec: GObject.ParamSpec) => void;
            "notify::is-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonics-visible": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::resizable": (pspec: GObject.ParamSpec) => void;
            "notify::resize-grip-visible": (pspec: GObject.ParamSpec) => void;
            "notify::role": (pspec: GObject.ParamSpec) => void;
            "notify::screen": (pspec: GObject.ParamSpec) => void;
            "notify::skip-pager-hint": (pspec: GObject.ParamSpec) => void;
            "notify::skip-taskbar-hint": (pspec: GObject.ParamSpec) => void;
            "notify::startup-id": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::transient-for": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::type-hint": (pspec: GObject.ParamSpec) => void;
            "notify::urgency-hint": (pspec: GObject.ParamSpec) => void;
            "notify::window-position": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::action": (pspec: GObject.ParamSpec) => void;
            "notify::create-folders": (pspec: GObject.ParamSpec) => void;
            "notify::do-overwrite-confirmation": (pspec: GObject.ParamSpec) => void;
            "notify::extra-widget": (pspec: GObject.ParamSpec) => void;
            "notify::filter": (pspec: GObject.ParamSpec) => void;
            "notify::local-only": (pspec: GObject.ParamSpec) => void;
            "notify::preview-widget": (pspec: GObject.ParamSpec) => void;
            "notify::preview-widget-active": (pspec: GObject.ParamSpec) => void;
            "notify::select-multiple": (pspec: GObject.ParamSpec) => void;
            "notify::show-hidden": (pspec: GObject.ParamSpec) => void;
            "notify::use-preview-label": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.FileChooserDialog.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.FileChooser.ConstructorProps {

        }
    }

    /**
     * A {@link Gtk.FileChooser} subclass for selecting color profiles.
     * @gir-type Class
     */
    class ColorProfileChooserDialog extends Gtk.FileChooserDialog implements Atk.ImplementorIface, Gtk.Buildable, Gtk.FileChooser {
        static $gtype: GObject.GType<ColorProfileChooserDialog>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ColorProfileChooserDialog.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ColorProfileChooserDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](title: string, parent: Gtk.Window, action: Gtk.FileChooserAction): ColorProfileChooserDialog;

        // Conflicted with Gtk.Dialog.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof ColorProfileChooserDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorProfileChooserDialog.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ColorProfileChooserDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorProfileChooserDialog.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ColorProfileChooserDialog.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ColorProfileChooserDialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * @default Gtk.FileChooserAction.OPEN
          * @category Inherited from Gtk.FileChooser
         */
        get action(): Gtk.FileChooserAction;
        set action(val: Gtk.FileChooserAction);

        /**
         * Whether a file chooser not in {@link Gtk.FileChooserAction.OPEN} mode
         * will offer the user to create new folders.
         * @since 2.18
         * @default true
          * @category Inherited from Gtk.FileChooser
         */
        get create_folders(): boolean;
        set create_folders(val: boolean);

        /**
         * Whether a file chooser not in {@link Gtk.FileChooserAction.OPEN} mode
         * will offer the user to create new folders.
         * @since 2.18
         * @default true
          * @category Inherited from Gtk.FileChooser
         */
        get createFolders(): boolean;
        set createFolders(val: boolean);

        /**
         * Whether a file chooser in {@link Gtk.FileChooserAction.SAVE} mode
         * will present an overwrite confirmation dialog if the user
         * selects a file name that already exists.
         * @since 2.8
         * @default false
          * @category Inherited from Gtk.FileChooser
         */
        get do_overwrite_confirmation(): boolean;
        set do_overwrite_confirmation(val: boolean);

        /**
         * Whether a file chooser in {@link Gtk.FileChooserAction.SAVE} mode
         * will present an overwrite confirmation dialog if the user
         * selects a file name that already exists.
         * @since 2.8
         * @default false
          * @category Inherited from Gtk.FileChooser
         */
        get doOverwriteConfirmation(): boolean;
        set doOverwriteConfirmation(val: boolean);

        /** @category Inherited from Gtk.FileChooser */
        get extra_widget(): (Gtk.Widget | null);
        set extra_widget(val: (Gtk.Widget | null));

        /** @category Inherited from Gtk.FileChooser */
        get extraWidget(): (Gtk.Widget | null);
        set extraWidget(val: (Gtk.Widget | null));

        /** @category Inherited from Gtk.FileChooser */
        get filter(): (Gtk.FileFilter | null);
        set filter(val: (Gtk.FileFilter | null));

        /**
         * @default true
          * @category Inherited from Gtk.FileChooser
         */
        get local_only(): boolean;
        set local_only(val: boolean);

        /**
         * @default true
          * @category Inherited from Gtk.FileChooser
         */
        get localOnly(): boolean;
        set localOnly(val: boolean);

        /** @category Inherited from Gtk.FileChooser */
        get preview_widget(): (Gtk.Widget | null);
        set preview_widget(val: (Gtk.Widget | null));

        /** @category Inherited from Gtk.FileChooser */
        get previewWidget(): (Gtk.Widget | null);
        set previewWidget(val: (Gtk.Widget | null));

        /**
         * @default true
          * @category Inherited from Gtk.FileChooser
         */
        get preview_widget_active(): boolean;
        set preview_widget_active(val: boolean);

        /**
         * @default true
          * @category Inherited from Gtk.FileChooser
         */
        get previewWidgetActive(): boolean;
        set previewWidgetActive(val: boolean);

        /**
         * @default false
          * @category Inherited from Gtk.FileChooser
         */
        get select_multiple(): boolean;
        set select_multiple(val: boolean);

        /**
         * @default false
          * @category Inherited from Gtk.FileChooser
         */
        get selectMultiple(): boolean;
        set selectMultiple(val: boolean);

        /**
         * @default false
          * @category Inherited from Gtk.FileChooser
         */
        get show_hidden(): boolean;
        set show_hidden(val: boolean);

        /**
         * @default false
          * @category Inherited from Gtk.FileChooser
         */
        get showHidden(): boolean;
        set showHidden(val: boolean);

        /**
         * @default true
          * @category Inherited from Gtk.FileChooser
         */
        get use_preview_label(): boolean;
        set use_preview_label(val: boolean);

        /**
         * @default true
          * @category Inherited from Gtk.FileChooser
         */
        get usePreviewLabel(): boolean;
        set usePreviewLabel(val: boolean);

        /**
         * Adds a 'choice' to the file chooser. This is typically implemented
         * as a combobox or, for boolean choices, as a checkbutton. You can select
         * a value using `gtk_file_chooser_set_choice()` before the dialog is shown,
         * and you can obtain the user-selected value in the ::response signal handler
         * using `gtk_file_chooser_get_choice()`.
         * 
         * Compare `gtk_file_chooser_set_extra_widget()`.
         * @param id id for the added choice
         * @param label user-visible label for the added choice
         * @param options ids for the options of the choice, or `null` for a boolean choice
         * @param option_labels user-visible labels for the options, must be the same length as `options`
         */
        add_choice(id: string, label: string, options: (string[] | null), option_labels: (string[] | null)): void;

        /**
         * Adds `filter` to the list of filters that the user can select between.
         * When a filter is selected, only files that are passed by that
         * filter are displayed.
         * 
         * Note that the `chooser` takes ownership of the filter, so you have to
         * ref and sink it if you want to keep a reference.
         * @param filter a {@link Gtk.FileFilter}
         */
        add_filter(filter: Gtk.FileFilter): void;

        /**
         * Adds a folder to be displayed with the shortcut folders in a file chooser.
         * Note that shortcut folders do not get saved, as they are provided by the
         * application.  For example, you can use this to add a
         * “/usr/share/mydrawprogram/Clipart” folder to the volume list.
         * @param folder filename of the folder to add
         * @returns `true` if the folder could be added successfully, `false` otherwise.  In the latter case, the `error` will be set as appropriate.
         */
        add_shortcut_folder(folder: string): boolean;

        /**
         * Adds a folder URI to be displayed with the shortcut folders in a file
         * chooser.  Note that shortcut folders do not get saved, as they are provided
         * by the application.  For example, you can use this to add a
         * “file:///usr/share/mydrawprogram/Clipart” folder to the volume list.
         * @param uri URI of the folder to add
         * @returns `true` if the folder could be added successfully, `false` otherwise.  In the latter case, the `error` will be set as appropriate.
         */
        add_shortcut_folder_uri(uri: string): boolean;

        /**
         * Gets the type of operation that the file chooser is performing; see
         * `gtk_file_chooser_set_action()`.
         * @returns the action that the file selector is performing
         */
        get_action(): Gtk.FileChooserAction;

        /**
         * Gets the currently selected option in the 'choice' with the given ID.
         * @param id the ID of the choice to get
         * @returns the ID of the currenly selected option
         */
        get_choice(id: string): string;

        /**
         * Gets whether file choser will offer to create new folders.
         * See `gtk_file_chooser_set_create_folders()`.
         * @returns `true` if the Create Folder button should be displayed.
         */
        get_create_folders(): boolean;

        /**
         * Gets the current folder of `chooser` as a local filename.
         * See `gtk_file_chooser_set_current_folder()`.
         * 
         * Note that this is the folder that the file chooser is currently displaying
         * (e.g. "/home/username/Documents"), which is not the same
         * as the currently-selected folder if the chooser is in
         * {@link Gtk.FileChooserAction.SELECT_FOLDER} mode
         * (e.g. "/home/username/Documents/selected-folder/".  To get the
         * currently-selected folder in that mode, use `gtk_file_chooser_get_uri()` as the
         * usual way to get the selection.
         * @returns the full path of the current folder, or `null` if the current path cannot be represented as a local filename.  Free with `g_free()`.  This function will also return `null` if the file chooser was unable to load the last folder that was requested from it; for example, as would be for calling `gtk_file_chooser_set_current_folder()` on a nonexistent folder.
         */
        get_current_folder(): (string | null);

        /**
         * Gets the current folder of `chooser` as {@link Gio.File}.
         * See `gtk_file_chooser_get_current_folder_uri()`.
         * @returns the {@link Gio.File} for the current folder.
         */
        get_current_folder_file(): (Gio.File | null);

        /**
         * Gets the current folder of `chooser` as an URI.
         * See `gtk_file_chooser_set_current_folder_uri()`.
         * 
         * Note that this is the folder that the file chooser is currently displaying
         * (e.g. "file:///home/username/Documents"), which is not the same
         * as the currently-selected folder if the chooser is in
         * {@link Gtk.FileChooserAction.SELECT_FOLDER} mode
         * (e.g. "file:///home/username/Documents/selected-folder/".  To get the
         * currently-selected folder in that mode, use `gtk_file_chooser_get_uri()` as the
         * usual way to get the selection.
         * @returns the URI for the current folder. Free with `g_free()`.  This function will also return `null` if the file chooser was unable to load the last folder that was requested from it; for example, as would be for calling `gtk_file_chooser_set_current_folder_uri()` on a nonexistent folder.
         */
        get_current_folder_uri(): (string | null);

        /**
         * Gets the current name in the file selector, as entered by the user in the
         * text entry for “Name”.
         * 
         * This is meant to be used in save dialogs, to get the currently typed filename
         * when the file itself does not exist yet.  For example, an application that
         * adds a custom extra widget to the file chooser for “file format” may want to
         * change the extension of the typed filename based on the chosen format, say,
         * from “.jpg” to “.png”.
         * @returns The raw text from the file chooser’s “Name” entry.  Free this with `g_free()`.  Note that this string is not a full pathname or URI; it is whatever the contents of the entry are.  Note also that this string is in UTF-8 encoding, which is not necessarily the system’s encoding for filenames.
         */
        get_current_name(): string;

        /**
         * Queries whether a file chooser is set to confirm for overwriting when the user
         * types a file name that already exists.
         * @returns `true` if the file chooser will present a confirmation dialog; `false` otherwise.
         */
        get_do_overwrite_confirmation(): boolean;

        /**
         * Gets the current extra widget; see
         * `gtk_file_chooser_set_extra_widget()`.
         * @returns the current extra widget, or `null`
         */
        get_extra_widget(): (Gtk.Widget | null);

        /**
         * Gets the {@link Gio.File} for the currently selected file in
         * the file selector. If multiple files are selected,
         * one of the files will be returned at random.
         * 
         * If the file chooser is in folder mode, this function returns the selected
         * folder.
         * @returns a selected {@link Gio.File}. You own the returned file;     use `g_object_unref()` to release it.
         */
        get_file(): Gio.File;

        /**
         * Gets the filename for the currently selected file in
         * the file selector. The filename is returned as an absolute path. If
         * multiple files are selected, one of the filenames will be returned at
         * random.
         * 
         * If the file chooser is in folder mode, this function returns the selected
         * folder.
         * @returns The currently selected filename,  or `null` if no file is selected, or the selected file can't  be represented with a local filename. Free with `g_free()`.
         */
        get_filename(): (string | null);

        /**
         * Lists all the selected files and subfolders in the current folder of
         * `chooser`. The returned names are full absolute paths. If files in the current
         * folder cannot be represented as local filenames they will be ignored. (See
         * `gtk_file_chooser_get_uris()`)
         * @returns a {@link GLib.SList}    containing the filenames of all selected files and subfolders in    the current folder. Free the returned list with `g_slist_free()`,    and the filenames with `g_free()`.
         */
        get_filenames(): string[];

        /**
         * Lists all the selected files and subfolders in the current folder of `chooser`
         * as {@link Gio.File}. An internal function, see `gtk_file_chooser_get_uris()`.
         * @returns a {@link GLib.SList}   containing a {@link Gio.File} for each selected file and subfolder in the   current folder.  Free the returned list with `g_slist_free()`, and   the files with `g_object_unref()`.
         */
        get_files(): Gio.File[];

        /**
         * Gets the current filter; see `gtk_file_chooser_set_filter()`.
         * @returns the current filter, or `null`
         */
        get_filter(): (Gtk.FileFilter | null);

        /**
         * Gets whether only local files can be selected in the
         * file selector. See `gtk_file_chooser_set_local_only()`
         * @returns `true` if only local files can be selected.
         */
        get_local_only(): boolean;

        /**
         * Gets the {@link Gio.File} that should be previewed in a custom preview
         * Internal function, see `gtk_file_chooser_get_preview_uri()`.
         * @returns the {@link Gio.File} for the file to preview,     or `null` if no file is selected. Free with `g_object_unref()`.
         */
        get_preview_file(): (Gio.File | null);

        /**
         * Gets the filename that should be previewed in a custom preview
         * widget. See `gtk_file_chooser_set_preview_widget()`.
         * @returns the filename to preview, or `null` if  no file is selected, or if the selected file cannot be represented  as a local filename. Free with `g_free()`
         */
        get_preview_filename(): (string | null);

        /**
         * Gets the URI that should be previewed in a custom preview
         * widget. See `gtk_file_chooser_set_preview_widget()`.
         * @returns the URI for the file to preview,     or `null` if no file is selected. Free with `g_free()`.
         */
        get_preview_uri(): (string | null);

        /**
         * Gets the current preview widget; see
         * `gtk_file_chooser_set_preview_widget()`.
         * @returns the current preview widget, or `null`
         */
        get_preview_widget(): (Gtk.Widget | null);

        /**
         * Gets whether the preview widget set by `gtk_file_chooser_set_preview_widget()`
         * should be shown for the current filename. See
         * `gtk_file_chooser_set_preview_widget_active()`.
         * @returns `true` if the preview widget is active for the current filename.
         */
        get_preview_widget_active(): boolean;

        /**
         * Gets whether multiple files can be selected in the file
         * selector. See `gtk_file_chooser_set_select_multiple()`.
         * @returns `true` if multiple files can be selected.
         */
        get_select_multiple(): boolean;

        /**
         * Gets whether hidden files and folders are displayed in the file selector.
         * See `gtk_file_chooser_set_show_hidden()`.
         * @returns `true` if hidden files and folders are displayed.
         */
        get_show_hidden(): boolean;

        /**
         * Gets the URI for the currently selected file in
         * the file selector. If multiple files are selected,
         * one of the filenames will be returned at random.
         * 
         * If the file chooser is in folder mode, this function returns the selected
         * folder.
         * @returns The currently selected URI, or `null`    if no file is selected. If `gtk_file_chooser_set_local_only()` is set to    `true` (the default) a local URI will be returned for any FUSE locations.    Free with `g_free()`
         */
        get_uri(): (string | null);

        /**
         * Lists all the selected files and subfolders in the current folder of
         * `chooser`. The returned names are full absolute URIs.
         * @returns a {@link GLib.SList} containing the URIs of all selected   files and subfolders in the current folder. Free the returned list   with `g_slist_free()`, and the filenames with `g_free()`.
         */
        get_uris(): string[];

        /**
         * Gets whether a stock label should be drawn with the name of the previewed
         * file.  See `gtk_file_chooser_set_use_preview_label()`.
         * @returns `true` if the file chooser is set to display a label with the name of the previewed file, `false` otherwise.
         */
        get_use_preview_label(): boolean;

        /**
         * Lists the current set of user-selectable filters; see
         * `gtk_file_chooser_add_filter()`, `gtk_file_chooser_remove_filter()`.
         * @returns a  {@link GLib.SList} containing the current set of user selectable filters. The  contents of the list are owned by GTK+, but you must free the list  itself with `g_slist_free()` when you are done with it.
         */
        list_filters(): Gtk.FileFilter[];

        /**
         * Queries the list of shortcut folders in the file chooser, as set by
         * `gtk_file_chooser_add_shortcut_folder_uri()`.
         * @returns A list of folder URIs, or `null` if there are no shortcut folders.  Free the returned list with `g_slist_free()`, and the URIs with `g_free()`.
         */
        list_shortcut_folder_uris(): (string[] | null);

        /**
         * Queries the list of shortcut folders in the file chooser, as set by
         * `gtk_file_chooser_add_shortcut_folder()`.
         * @returns A list of folder filenames, or `null` if there are no shortcut folders. Free the returned list with `g_slist_free()`, and the filenames with `g_free()`.
         */
        list_shortcut_folders(): (string[] | null);

        /**
         * Removes a 'choice' that has been added with `gtk_file_chooser_add_choice()`.
         * @param id the ID of the choice to remove
         */
        remove_choice(id: string): void;

        /**
         * Removes `filter` from the list of filters that the user can select between.
         * @param filter a {@link Gtk.FileFilter}
         */
        remove_filter(filter: Gtk.FileFilter): void;

        /**
         * Removes a folder from a file chooser’s list of shortcut folders.
         * @param folder filename of the folder to remove
         * @returns `true` if the operation succeeds, `false` otherwise. In the latter case, the `error` will be set as appropriate. See also: `gtk_file_chooser_add_shortcut_folder()`
         */
        remove_shortcut_folder(folder: string): boolean;

        /**
         * Removes a folder URI from a file chooser’s list of shortcut folders.
         * @param uri URI of the folder to remove
         * @returns `true` if the operation succeeds, `false` otherwise. In the latter case, the `error` will be set as appropriate. See also: `gtk_file_chooser_add_shortcut_folder_uri()`
         */
        remove_shortcut_folder_uri(uri: string): boolean;

        /**
         * Selects all the files in the current folder of a file chooser.
         */
        select_all(): void;

        /**
         * Selects the file referred to by `file`. An internal function. See
         * _gtk_file_chooser_select_uri().
         * @param file the file to select
         * @returns Not useful.
         */
        select_file(file: Gio.File): boolean;

        /**
         * Selects a filename. If the file name isn’t in the current
         * folder of `chooser`, then the current folder of `chooser` will
         * be changed to the folder containing `filename`.
         * @param filename the filename to select
         * @returns Not useful. See also: `gtk_file_chooser_set_filename()`
         */
        select_filename(filename: string): boolean;

        /**
         * Selects the file to by `uri`. If the URI doesn’t refer to a
         * file in the current folder of `chooser`, then the current folder of
         * `chooser` will be changed to the folder containing `filename`.
         * @param uri the URI to select
         * @returns Not useful.
         */
        select_uri(uri: string): boolean;

        /**
         * Sets the type of operation that the chooser is performing; the
         * user interface is adapted to suit the selected action. For example,
         * an option to create a new folder might be shown if the action is
         * {@link Gtk.FileChooserAction.SAVE} but not if the action is
         * {@link Gtk.FileChooserAction.OPEN}.
         * @param action the action that the file selector is performing
         */
        set_action(action: Gtk.FileChooserAction): void;

        /**
         * Selects an option in a 'choice' that has been added with
         * `gtk_file_chooser_add_choice()`. For a boolean choice, the
         * possible options are "true" and "false".
         * @param id the ID of the choice to set
         * @param option the ID of the option to select
         */
        set_choice(id: string, option: string): void;

        /**
         * Sets whether file choser will offer to create new folders.
         * This is only relevant if the action is not set to be
         * {@link Gtk.FileChooserAction.OPEN}.
         * @param create_folders `true` if the Create Folder button should be displayed
         */
        set_create_folders(create_folders: boolean): void;

        /**
         * Sets the current folder for `chooser` from a local filename.
         * The user will be shown the full contents of the current folder,
         * plus user interface elements for navigating to other folders.
         * 
         * In general, you should not use this function.  See the
         * [section on setting up a file chooser dialog][gtkfilechooserdialog-setting-up]
         * for the rationale behind this.
         * @param filename the full path of the new current folder
         * @returns Not useful.
         */
        set_current_folder(filename: string): boolean;

        /**
         * Sets the current folder for `chooser` from a {@link Gio.File}.
         * Internal function, see `gtk_file_chooser_set_current_folder_uri()`.
         * @param file the {@link Gio.File} for the new folder
         * @returns `true` if the folder could be changed successfully, `false` otherwise.
         */
        set_current_folder_file(file: Gio.File): boolean;

        /**
         * Sets the current folder for `chooser` from an URI.
         * The user will be shown the full contents of the current folder,
         * plus user interface elements for navigating to other folders.
         * 
         * In general, you should not use this function.  See the
         * [section on setting up a file chooser dialog][gtkfilechooserdialog-setting-up]
         * for the rationale behind this.
         * @param uri the URI for the new current folder
         * @returns `true` if the folder could be changed successfully, `false` otherwise.
         */
        set_current_folder_uri(uri: string): boolean;

        /**
         * Sets the current name in the file selector, as if entered
         * by the user. Note that the name passed in here is a UTF-8
         * string rather than a filename. This function is meant for
         * such uses as a suggested name in a “Save As...” dialog.  You can
         * pass “Untitled.doc” or a similarly suitable suggestion for the `name`.
         * 
         * If you want to preselect a particular existing file, you should use
         * `gtk_file_chooser_set_filename()` or `gtk_file_chooser_set_uri()` instead.
         * Please see the documentation for those functions for an example of using
         * `gtk_file_chooser_set_current_name()` as well.
         * @param name the filename to use, as a UTF-8 string
         */
        set_current_name(name: string): void;

        /**
         * Sets whether a file chooser in {@link Gtk.FileChooserAction.SAVE} mode will present
         * a confirmation dialog if the user types a file name that already exists.  This
         * is `false` by default.
         * 
         * If set to `true`, the `chooser` will emit the
         * {@link Gtk.FileChooser.SignalSignatures.confirm_overwrite | Gtk.FileChooser::confirm-overwrite} signal when appropriate.
         * 
         * If all you need is the stock confirmation dialog, set this property to `true`.
         * You can override the way confirmation is done by actually handling the
         * {@link Gtk.FileChooser.SignalSignatures.confirm_overwrite | Gtk.FileChooser::confirm-overwrite} signal; please refer to its documentation
         * for the details.
         * @param do_overwrite_confirmation whether to confirm overwriting in save mode
         */
        set_do_overwrite_confirmation(do_overwrite_confirmation: boolean): void;

        /**
         * Sets an application-supplied widget to provide extra options to the user.
         * @param extra_widget widget for extra options
         */
        set_extra_widget(extra_widget: Gtk.Widget): void;

        /**
         * Sets `file` as the current filename for the file chooser, by changing
         * to the file’s parent folder and actually selecting the file in list.  If
         * the `chooser` is in {@link Gtk.FileChooserAction.SAVE} mode, the file’s base name
         * will also appear in the dialog’s file name entry.
         * 
         * If the file name isn’t in the current folder of `chooser`, then the current
         * folder of `chooser` will be changed to the folder containing `filename`. This
         * is equivalent to a sequence of `gtk_file_chooser_unselect_all()` followed by
         * `gtk_file_chooser_select_filename()`.
         * 
         * Note that the file must exist, or nothing will be done except
         * for the directory change.
         * 
         * If you are implementing a save dialog,
         * you should use this function if you already have a file name to which the
         * user may save; for example, when the user opens an existing file and then
         * does Save As...  If you don’t have
         * a file name already — for example, if the user just created a new
         * file and is saving it for the first time, do not call this function.
         * Instead, use something similar to this:
         * 
         * ```c
         * if (document_is_new)
         *   {
         *     // the user just created a new document
         *     gtk_file_chooser_set_current_folder_file (chooser, default_file_for_saving);
         *     gtk_file_chooser_set_current_name (chooser, "Untitled document");
         *   }
         * else
         *   {
         *     // the user edited an existing document
         *     gtk_file_chooser_set_file (chooser, existing_file);
         *   }
         * ```
         * 
         * @param file the {@link Gio.File} to set as current
         * @returns Not useful.
         */
        set_file(file: Gio.File): boolean;

        /**
         * Sets `filename` as the current filename for the file chooser, by changing to
         * the file’s parent folder and actually selecting the file in list; all other
         * files will be unselected.  If the `chooser` is in
         * {@link Gtk.FileChooserAction.SAVE} mode, the file’s base name will also appear in
         * the dialog’s file name entry.
         * 
         * Note that the file must exist, or nothing will be done except
         * for the directory change.
         * 
         * You should use this function only when implementing a save
         * dialog for which you already have a file name to which
         * the user may save.  For example, when the user opens an existing file and
         * then does Save As... to save a copy or
         * a modified version.  If you don’t have a file name already — for
         * example, if the user just created a new file and is saving it for the first
         * time, do not call this function.  Instead, use something similar to this:
         * 
         * ```c
         * if (document_is_new)
         *   {
         *     // the user just created a new document
         *     gtk_file_chooser_set_current_name (chooser, "Untitled document");
         *   }
         * else
         *   {
         *     // the user edited an existing document
         *     gtk_file_chooser_set_filename (chooser, existing_filename);
         *   }
         * ```
         * 
         * 
         * In the first case, the file chooser will present the user with useful suggestions
         * as to where to save his new file.  In the second case, the file’s existing location
         * is already known, so the file chooser will use it.
         * @param filename the filename to set as current
         * @returns Not useful.
         */
        set_filename(filename: string): boolean;

        /**
         * Sets the current filter; only the files that pass the
         * filter will be displayed. If the user-selectable list of filters
         * is non-empty, then the filter should be one of the filters
         * in that list. Setting the current filter when the list of
         * filters is empty is useful if you want to restrict the displayed
         * set of files without letting the user change it.
         * @param filter a {@link Gtk.FileFilter}
         */
        set_filter(filter: Gtk.FileFilter): void;

        /**
         * Sets whether only local files can be selected in the
         * file selector. If `local_only` is `true` (the default),
         * then the selected file or files are guaranteed to be
         * accessible through the operating systems native file
         * system and therefore the application only
         * needs to worry about the filename functions in
         * {@link Gtk.FileChooser}, like `gtk_file_chooser_get_filename()`,
         * rather than the URI functions like
         * `gtk_file_chooser_get_uri()`,
         * 
         * On some systems non-native files may still be
         * available using the native filesystem via a userspace
         * filesystem (FUSE).
         * @param local_only `true` if only local files can be selected
         */
        set_local_only(local_only: boolean): void;

        /**
         * Sets an application-supplied widget to use to display a custom preview
         * of the currently selected file. To implement a preview, after setting the
         * preview widget, you connect to the {@link Gtk.FileChooser.SignalSignatures.update_preview | Gtk.FileChooser::update-preview}
         * signal, and call `gtk_file_chooser_get_preview_filename()` or
         * `gtk_file_chooser_get_preview_uri()` on each change. If you can
         * display a preview of the new file, update your widget and
         * set the preview active using `gtk_file_chooser_set_preview_widget_active()`.
         * Otherwise, set the preview inactive.
         * 
         * When there is no application-supplied preview widget, or the
         * application-supplied preview widget is not active, the file chooser
         * will display no preview at all.
         * @param preview_widget widget for displaying preview.
         */
        set_preview_widget(preview_widget: Gtk.Widget): void;

        /**
         * Sets whether the preview widget set by
         * `gtk_file_chooser_set_preview_widget()` should be shown for the
         * current filename. When `active` is set to false, the file chooser
         * may display an internally generated preview of the current file
         * or it may display no preview at all. See
         * `gtk_file_chooser_set_preview_widget()` for more details.
         * @param active whether to display the user-specified preview widget
         */
        set_preview_widget_active(active: boolean): void;

        /**
         * Sets whether multiple files can be selected in the file selector.  This is
         * only relevant if the action is set to be {@link Gtk.FileChooserAction.OPEN} or
         * {@link Gtk.FileChooserAction.SELECT_FOLDER}.
         * @param select_multiple `true` if multiple files can be selected.
         */
        set_select_multiple(select_multiple: boolean): void;

        /**
         * Sets whether hidden files and folders are displayed in the file selector.
         * @param show_hidden `true` if hidden files and folders should be displayed.
         */
        set_show_hidden(show_hidden: boolean): void;

        /**
         * Sets the file referred to by `uri` as the current file for the file chooser,
         * by changing to the URI’s parent folder and actually selecting the URI in the
         * list.  If the `chooser` is {@link Gtk.FileChooserAction.SAVE} mode, the URI’s base
         * name will also appear in the dialog’s file name entry.
         * 
         * Note that the URI must exist, or nothing will be done except for the
         * directory change.
         * 
         * You should use this function only when implementing a save
         * dialog for which you already have a file name to which
         * the user may save.  For example, when the user opens an existing file and then
         * does Save As... to save a copy or a
         * modified version.  If you don’t have a file name already — for example,
         * if the user just created a new file and is saving it for the first time, do
         * not call this function.  Instead, use something similar to this:
         * 
         * ```c
         * if (document_is_new)
         *   {
         *     // the user just created a new document
         *     gtk_file_chooser_set_current_name (chooser, "Untitled document");
         *   }
         * else
         *   {
         *     // the user edited an existing document
         *     gtk_file_chooser_set_uri (chooser, existing_uri);
         *   }
         * ```
         * 
         * 
         * 
         * In the first case, the file chooser will present the user with useful suggestions
         * as to where to save his new file.  In the second case, the file’s existing location
         * is already known, so the file chooser will use it.
         * @param uri the URI to set as current
         * @returns Not useful.
         */
        set_uri(uri: string): boolean;

        /**
         * Sets whether the file chooser should display a stock label with the name of
         * the file that is being previewed; the default is `true`.  Applications that
         * want to draw the whole preview area themselves should set this to `false` and
         * display the name themselves in their preview widget.
         * 
         * See also: `gtk_file_chooser_set_preview_widget()`
         * @param use_label whether to display a stock label with the name of the previewed file
         */
        set_use_preview_label(use_label: boolean): void;

        /**
         * Unselects all the files in the current folder of a file chooser.
         */
        unselect_all(): void;

        /**
         * Unselects the file referred to by `file`. If the file is not in the current
         * directory, does not exist, or is otherwise not currently selected, does nothing.
         * @param file a {@link Gio.File}
         */
        unselect_file(file: Gio.File): void;

        /**
         * Unselects a currently selected filename. If the filename
         * is not in the current directory, does not exist, or
         * is otherwise not currently selected, does nothing.
         * @param filename the filename to unselect
         */
        unselect_filename(filename: string): void;

        /**
         * Unselects the file referred to by `uri`. If the file
         * is not in the current directory, does not exist, or
         * is otherwise not currently selected, does nothing.
         * @param uri the URI to unselect
         */
        unselect_uri(uri: string): void;
    }


    namespace ColorProfileComboBox {
        // Signal signatures
        interface SignalSignatures extends Gtk.ComboBox.SignalSignatures {
            "notify::dialog": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::active-id": (pspec: GObject.ParamSpec) => void;
            "notify::add-tearoffs": (pspec: GObject.ParamSpec) => void;
            "notify::button-sensitivity": (pspec: GObject.ParamSpec) => void;
            "notify::cell-area": (pspec: GObject.ParamSpec) => void;
            "notify::column-span-column": (pspec: GObject.ParamSpec) => void;
            "notify::entry-text-column": (pspec: GObject.ParamSpec) => void;
            "notify::has-entry": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::id-column": (pspec: GObject.ParamSpec) => void;
            "notify::popup-fixed-width": (pspec: GObject.ParamSpec) => void;
            "notify::popup-shown": (pspec: GObject.ParamSpec) => void;
            "notify::row-span-column": (pspec: GObject.ParamSpec) => void;
            "notify::tearoff-title": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-width": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::editing-canceled": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.ComboBox.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.CellLayout.ConstructorProps {
            dialog: Gtk.Dialog;
            model: ColorProfileStore;
        }
    }

    /**
     * A combo box for selecting color profiles.
     * @gir-type Class
     */
    class ColorProfileComboBox extends Gtk.ComboBox implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.CellLayout {
        static $gtype: GObject.GType<ColorProfileComboBox>;

        // Properties
        /**
         * {@link Gtk.Dialog} to present when the user selects the
         * "Select color profile from disk..." item.
         * @since 2.4
         * @construct-only
         */
        get dialog(): Gtk.Dialog;

        /**
         * Overrides the "model" property of the {@link Gtk.ComboBox} class.
         * {@link GimpUi.ColorProfileComboBox} requires the model to be a
         * {@link GimpUi.ColorProfileStore}.
         * @since 2.4
         */
        get model(): ColorProfileStore;
        set model(val: ColorProfileStore);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ColorProfileComboBox.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ColorProfileComboBox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](dialog: Gtk.Widget, history: Gio.File): ColorProfileComboBox;

        // Conflicted with Gtk.ComboBox.new
        static ["new"](...args: never[]): any;

        static new_with_model(dialog: Gtk.Widget, model: Gtk.TreeModel): ColorProfileComboBox;

        // Conflicted with Gtk.ComboBox.new_with_model
        static new_with_model(...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof ColorProfileComboBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorProfileComboBox.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ColorProfileComboBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorProfileComboBox.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ColorProfileComboBox.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ColorProfileComboBox.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * This function delegates to the underlying
         * {@link GimpUi.ColorProfileStore}. Please refer to the documentation of
         * `gimp_color_profile_store_add_file()` for details.
         * @param file file of the profile to add (or `null`)
         * @param label label to use for the profile         (may only be `null` if `file` is `null`)
         */
        add_file(file: Gio.File, label: string): void;

        /**
         * @returns The file of the currently selected               color profile, release using `g_object_unref()` when it               is not any longer needed.
         */
        get_active_file(): Gio.File;

        /**
         * Selects a color profile from the `combo` and makes it the active
         * item.  If the profile is not listed in the `combo`, then it is added
         * with the given `label` (or `file` in case that `label` is `null`).
         * @param file file of the profile to select
         * @param label label to use when adding a new entry (can be `null`)
         */
        set_active_file(file: Gio.File, label: string): void;

        /**
         * Selects a color profile from the `combo` and makes it the active
         * item.
         * @param profile a {@link Gimp.ColorProfile} to set
         */
        set_active_profile(profile: Gimp.ColorProfile): void;

        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
          * @category Inherited from Gtk.CellEditable
         */
        get editing_canceled(): boolean;
        set editing_canceled(val: boolean);

        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
          * @category Inherited from Gtk.CellEditable
         */
        get editingCanceled(): boolean;
        set editingCanceled(val: boolean);

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         */
        editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         */
        remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         */
        start_editing(event: (Gdk.Event | null)): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         * @virtual
         */
        vfunc_editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         * @virtual
         */
        vfunc_remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         * @virtual
         */
        vfunc_start_editing(event: (Gdk.Event | null)): void;

        /**
         * Adds an attribute mapping to the list in `cell_layout`.
         * 
         * The `column` is the column of the model to get a value from, and the
         * `attribute` is the parameter on `cell` to be set from the value. So for
         * example if column 2 of the model contains strings, you could have the
         * “text” attribute of a {@link Gtk.CellRendererText} get its values from column 2.
         * @param cell a {@link Gtk.CellRenderer}
         * @param attribute an attribute on the renderer
         * @param column the column position on the model to get the attribute from
         */
        add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void;

        /**
         * Unsets all the mappings on all renderers on `cell_layout` and
         * removes all renderers from `cell_layout`.
         */
        clear(): void;

        /**
         * Clears all existing attributes previously set with
         * `gtk_cell_layout_set_attributes()`.
         * @param cell a {@link Gtk.CellRenderer} to clear the attribute mapping on
         */
        clear_attributes(cell: Gtk.CellRenderer): void;

        /**
         * Returns the underlying {@link Gtk.CellArea} which might be `cell_layout`
         * if called on a {@link Gtk.CellArea} or might be `null` if no {@link Gtk.CellArea}
         * is used by `cell_layout`.
         * @returns the cell area used by `cell_layout`, or `null` in case no cell area is used.
         */
        get_area(): (Gtk.CellArea | null);

        /**
         * Returns the cell renderers which have been added to `cell_layout`.
         * @returns a list of cell renderers. The list, but not the renderers has     been newly allocated and should be freed with `g_list_free()`     when no longer needed.
         */
        get_cells(): Gtk.CellRenderer[];

        /**
         * Adds the `cell` to the end of `cell_layout`. If `expand` is `false`, then the
         * `cell` is allocated no more space than it needs. Any unused space is
         * divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         */
        pack_end(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Packs the `cell` into the beginning of `cell_layout`. If `expand` is `false`,
         * then the `cell` is allocated no more space than it needs. Any unused space
         * is divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         */
        pack_start(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Re-inserts `cell` at `position`.
         * 
         * Note that `cell` has already to be packed into `cell_layout`
         * for this to function properly.
         * @param cell a {@link Gtk.CellRenderer} to reorder
         * @param position new position to insert `cell` at
         */
        reorder(cell: Gtk.CellRenderer, position: number): void;

        /**
         * Sets the {@link Gtk.CellLayoutDataFunc} to use for `cell_layout`.
         * 
         * This function is used instead of the standard attributes mapping
         * for setting the column value, and should set the value of `cell_layout`’s
         * cell renderer(s) as appropriate.
         * 
         * `func` may be `null` to remove a previously set function.
         * @param cell a {@link Gtk.CellRenderer}
         * @param func the {@link Gtk.CellLayoutDataFunc} to use, or `null`
         */
        set_cell_data_func(cell: Gtk.CellRenderer, func: (Gtk.CellLayoutDataFunc | null)): void;

        /**
         * Adds an attribute mapping to the list in `cell_layout`.
         * 
         * The `column` is the column of the model to get a value from, and the
         * `attribute` is the parameter on `cell` to be set from the value. So for
         * example if column 2 of the model contains strings, you could have the
         * “text” attribute of a {@link Gtk.CellRendererText} get its values from column 2.
         * @param cell a {@link Gtk.CellRenderer}
         * @param attribute an attribute on the renderer
         * @param column the column position on the model to get the attribute from
         * @virtual
         */
        vfunc_add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void;

        /**
         * Unsets all the mappings on all renderers on `cell_layout` and
         * removes all renderers from `cell_layout`.
         * @virtual
         */
        vfunc_clear(): void;

        /**
         * Clears all existing attributes previously set with
         * `gtk_cell_layout_set_attributes()`.
         * @param cell a {@link Gtk.CellRenderer} to clear the attribute mapping on
         * @virtual
         */
        vfunc_clear_attributes(cell: Gtk.CellRenderer): void;

        /**
         * Returns the underlying {@link Gtk.CellArea} which might be `cell_layout`
         * if called on a {@link Gtk.CellArea} or might be `null` if no {@link Gtk.CellArea}
         * is used by `cell_layout`.
         * @virtual
         */
        vfunc_get_area(): (Gtk.CellArea | null);

        /**
         * Returns the cell renderers which have been added to `cell_layout`.
         * @virtual
         */
        vfunc_get_cells(): Gtk.CellRenderer[];

        /**
         * Adds the `cell` to the end of `cell_layout`. If `expand` is `false`, then the
         * `cell` is allocated no more space than it needs. Any unused space is
         * divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         * @virtual
         */
        vfunc_pack_end(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Packs the `cell` into the beginning of `cell_layout`. If `expand` is `false`,
         * then the `cell` is allocated no more space than it needs. Any unused space
         * is divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         * @virtual
         */
        vfunc_pack_start(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Re-inserts `cell` at `position`.
         * 
         * Note that `cell` has already to be packed into `cell_layout`
         * for this to function properly.
         * @param cell a {@link Gtk.CellRenderer} to reorder
         * @param position new position to insert `cell` at
         * @virtual
         */
        vfunc_reorder(cell: Gtk.CellRenderer, position: number): void;

        /**
         * Sets the {@link Gtk.CellLayoutDataFunc} to use for `cell_layout`.
         * 
         * This function is used instead of the standard attributes mapping
         * for setting the column value, and should set the value of `cell_layout`’s
         * cell renderer(s) as appropriate.
         * 
         * `func` may be `null` to remove a previously set function.
         * @param cell a {@link Gtk.CellRenderer}
         * @param func the {@link Gtk.CellLayoutDataFunc} to use, or `null`
         * @virtual
         */
        vfunc_set_cell_data_func(cell: Gtk.CellRenderer, func: (Gtk.CellLayoutDataFunc | null)): void;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;

        /**
         * Returns whether the widget should grab focus when it is clicked with the mouse.
         * See `gtk_widget_set_focus_on_click()`.
         * @returns `true` if the widget should grab focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;

        /**
         * Sets whether the widget should grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the widget should grab focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
    }


    namespace ColorProfileStore {
        // Signal signatures
        interface SignalSignatures extends Gtk.ListStore.SignalSignatures {
            "notify::history": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.ListStore.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.TreeDragDest.ConstructorProps, Gtk.TreeDragSource.ConstructorProps, Gtk.TreeModel.ConstructorProps, Gtk.TreeSortable.ConstructorProps {
            history: Gio.File;
        }
    }

    /**
     * A {@link Gtk.ListStore} subclass that keep color profiles.
     * @gir-type Class
     */
    class ColorProfileStore extends Gtk.ListStore implements Gtk.Buildable, Gtk.TreeDragDest, Gtk.TreeDragSource, Gtk.TreeModel, Gtk.TreeSortable {
        static $gtype: GObject.GType<ColorProfileStore>;

        // Properties
        /**
         * {@link Gio.File} of the color history used to populate the profile store.
         * @since 2.4
         * @construct-only
         */
        get history(): Gio.File;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ColorProfileStore.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ColorProfileStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](history: Gio.File): ColorProfileStore;

        // Conflicted with Gtk.ListStore.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof ColorProfileStore.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorProfileStore.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ColorProfileStore.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorProfileStore.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ColorProfileStore.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ColorProfileStore.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Adds a color profile item to the {@link GimpUi.ColorProfileStore}. Items
         * added with this function will be kept at the top, separated from
         * the history of last used color profiles.
         * 
         * This function is often used to add a selectable item for the `null`
         * file. If you pass `null` for both `file` and `label`, the `label` will
         * be set to the string "None" for you (and translated for the user).
         * @param file {@link Gio.File} of the profile to add (or `null`)
         * @param label label to use for the profile         (may only be `null` if `file` is `null`)
         */
        add_file(file: Gio.File, label: string): void;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         */
        add_child(builder: Gtk.Builder, child: GObject.Object, type: (string | null)): void;

        /**
         * Constructs a child of `buildable` with the name `name`.
         * 
         * {@link Gtk.Builder} calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param name name of child to construct
         * @returns the constructed child
         */
        construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

        /**
         * This is similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         */
        custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @returns `true` if a object has a custom implementation, `false`          if it doesn't.
         */
        custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, GLib.MarkupParser, null];

        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @returns the internal child of the buildable object
         */
        get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Gets the name of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the
         * [GtkBuilder UI definition][BUILDER-UI]
         * used to construct the `buildable`.
         * @returns the name set with `gtk_buildable_set_name()`
         */
        get_name(): string;

        /**
         * Called when the builder finishes the parsing of a
         * [GtkBuilder UI definition][BUILDER-UI].
         * Note that this will be called once for each time
         * `gtk_builder_add_from_file()` or `gtk_builder_add_from_string()`
         * is called on a builder.
         * @param builder a {@link Gtk.Builder}
         */
        parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param name name of property
         * @param value value of property
         */
        set_buildable_property(builder: Gtk.Builder, name: string, value: (GObject.Value | any)): void;

        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         */
        set_name(name: string): void;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: (string | null)): void;

        /**
         * Constructs a child of `buildable` with the name `name`.
         * 
         * {@link Gtk.Builder} calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param name name of child to construct
         * @virtual
         */
        vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

        /**
         * This is similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, GLib.MarkupParser, never];

        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Gets the name of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the
         * [GtkBuilder UI definition][BUILDER-UI]
         * used to construct the `buildable`.
         * @virtual
         */
        vfunc_get_name(): string;

        /**
         * Called when the builder finishes the parsing of a
         * [GtkBuilder UI definition][BUILDER-UI].
         * Note that this will be called once for each time
         * `gtk_builder_add_from_file()` or `gtk_builder_add_from_string()`
         * is called on a builder.
         * @param builder a {@link Gtk.Builder}
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param name name of property
         * @param value value of property
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         * @virtual
         */
        vfunc_set_name(name: string): void;

        /**
         * Asks the {@link Gtk.TreeDragDest} to insert a row before the path `dest`,
         * deriving the contents of the row from `selection_data`. If `dest` is
         * outside the tree so that inserting before it is impossible, `false`
         * will be returned. Also, `false` may be returned if the new row is
         * not created for some model-specific reason.  Should robustly handle
         * a `dest` no longer found in the model!
         * @param dest row to drop in front of
         * @param selection_data data to drop
         * @returns whether a new row was created before position `dest`
         */
        drag_data_received(dest: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;

        /**
         * Determines whether a drop is possible before the given `dest_path`,
         * at the same depth as `dest_path`. i.e., can we drop the data in
         * `selection_data` at that location. `dest_path` does not have to
         * exist; the return value will almost certainly be `false` if the
         * parent of `dest_path` doesn’t exist, though.
         * @param dest_path destination row
         * @param selection_data the data being dragged
         * @returns `true` if a drop is possible before `dest_path`
         */
        row_drop_possible(dest_path: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;

        /**
         * Asks the {@link Gtk.TreeDragDest} to insert a row before the path `dest`,
         * deriving the contents of the row from `selection_data`. If `dest` is
         * outside the tree so that inserting before it is impossible, `false`
         * will be returned. Also, `false` may be returned if the new row is
         * not created for some model-specific reason.  Should robustly handle
         * a `dest` no longer found in the model!
         * @param dest row to drop in front of
         * @param selection_data data to drop
         * @virtual
         */
        vfunc_drag_data_received(dest: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;

        /**
         * Determines whether a drop is possible before the given `dest_path`,
         * at the same depth as `dest_path`. i.e., can we drop the data in
         * `selection_data` at that location. `dest_path` does not have to
         * exist; the return value will almost certainly be `false` if the
         * parent of `dest_path` doesn’t exist, though.
         * @param dest_path destination row
         * @param selection_data the data being dragged
         * @virtual
         */
        vfunc_row_drop_possible(dest_path: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;

        /**
         * Asks the {@link Gtk.TreeDragSource} to delete the row at `path`, because
         * it was moved somewhere else via drag-and-drop. Returns `false`
         * if the deletion fails because `path` no longer exists, or for
         * some model-specific reason. Should robustly handle a `path` no
         * longer found in the model!
         * @param path row that was being dragged
         * @returns `true` if the row was successfully deleted
         */
        drag_data_delete(path: Gtk.TreePath): boolean;

        /**
         * Asks the {@link Gtk.TreeDragSource} to fill in `selection_data` with a
         * representation of the row at `path`. `selection_data`->target gives
         * the required type of the data.  Should robustly handle a `path` no
         * longer found in the model!
         * @param path row that was dragged
         * @param selection_data a {@link Gtk.SelectionData} to fill with data                  from the dragged row
         * @returns `true` if data of the required type was provided
         */
        drag_data_get(path: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;

        /**
         * Asks the {@link Gtk.TreeDragSource} whether a particular row can be used as
         * the source of a DND operation. If the source doesn’t implement
         * this interface, the row is assumed draggable.
         * @param path row on which user is initiating a drag
         * @returns `true` if the row can be dragged
         */
        row_draggable(path: Gtk.TreePath): boolean;

        /**
         * Asks the {@link Gtk.TreeDragSource} to delete the row at `path`, because
         * it was moved somewhere else via drag-and-drop. Returns `false`
         * if the deletion fails because `path` no longer exists, or for
         * some model-specific reason. Should robustly handle a `path` no
         * longer found in the model!
         * @param path row that was being dragged
         * @virtual
         */
        vfunc_drag_data_delete(path: Gtk.TreePath): boolean;

        /**
         * Asks the {@link Gtk.TreeDragSource} to fill in `selection_data` with a
         * representation of the row at `path`. `selection_data`->target gives
         * the required type of the data.  Should robustly handle a `path` no
         * longer found in the model!
         * @param path row that was dragged
         * @param selection_data a {@link Gtk.SelectionData} to fill with data                  from the dragged row
         * @virtual
         */
        vfunc_drag_data_get(path: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;

        /**
         * Asks the {@link Gtk.TreeDragSource} whether a particular row can be used as
         * the source of a DND operation. If the source doesn’t implement
         * this interface, the row is assumed draggable.
         * @param path row on which user is initiating a drag
         * @virtual
         */
        vfunc_row_draggable(path: Gtk.TreePath): boolean;

        /**
         * Creates a new {@link Gtk.TreeModel}, with `child_model` as the child_model
         * and `root` as the virtual root.
         * @param root A {@link Gtk.TreePath} or `null`.
         * @returns A new {@link Gtk.TreeModel}.
         */
        filter_new(root: (Gtk.TreePath | null)): Gtk.TreeModel;

        /**
         * Calls func on each node in model in a depth-first fashion.
         * 
         * If `func` returns `true`, then the tree ceases to be walked,
         * and `gtk_tree_model_foreach()` returns.
         * @param func a function to be called on each row
         */
        foreach(func: Gtk.TreeModelForeachFunc): void;

        /**
         * Returns the type of the column.
         * @param index_ the column index
         * @returns the type of the column
         */
        get_column_type(index_: number): GObject.GType;

        /**
         * Returns a set of flags supported by this interface.
         * 
         * The flags are a bitwise combination of {@link Gtk.TreeModelFlags}.
         * The flags supported should not change during the lifetime
         * of the `tree_model`.
         * @returns the flags supported by this interface
         */
        get_flags(): Gtk.TreeModelFlags;

        /**
         * Sets `iter` to a valid iterator pointing to `path`.  If `path` does
         * not exist, `iter` is set to an invalid iterator and `false` is returned.
         * @param path the {@link Gtk.TreePath}-struct
         * @returns `true`, if `iter` was set
         */
        get_iter(path: Gtk.TreePath): [boolean, Gtk.TreeIter];

        /**
         * Initializes `iter` with the first iterator in the tree
         * (the one at the path "0") and returns `true`. Returns
         * `false` if the tree is empty.
         * @returns `true`, if `iter` was set
         */
        get_iter_first(): [boolean, Gtk.TreeIter];

        /**
         * Sets `iter` to a valid iterator pointing to `path_string`, if it
         * exists. Otherwise, `iter` is left invalid and `false` is returned.
         * @param path_string a string representation of a {@link Gtk.TreePath}-struct
         * @returns `true`, if `iter` was set
         */
        get_iter_from_string(path_string: string): [boolean, Gtk.TreeIter];

        /**
         * Returns the number of columns supported by `tree_model`.
         * @returns the number of columns
         */
        get_n_columns(): number;

        /**
         * Returns a newly-created {@link Gtk.TreePath}-struct referenced by `iter`.
         * 
         * This path should be freed with `gtk_tree_path_free()`.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @returns a newly-created {@link Gtk.TreePath}-struct
         */
        get_path(iter: Gtk.TreeIter): Gtk.TreePath;

        /**
         * Generates a string representation of the iter.
         * 
         * This string is a “:” separated list of numbers.
         * For example, “4:10:0:3” would be an acceptable
         * return value for this string.
         * @param iter a {@link Gtk.TreeIter}-struct
         * @returns a newly-allocated string.     Must be freed with `g_free()`.
         */
        get_string_from_iter(iter: Gtk.TreeIter): string;

        /**
         * Initializes and sets `value` to that at `column`.
         * 
         * When done with `value`, `g_value_unset()` needs to be called
         * to free any allocated memory.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @param column the column to lookup the value at
         */
        get_value(iter: Gtk.TreeIter, column: number): unknown;

        /**
         * Sets `iter` to point to the first child of `parent`.
         * 
         * If `parent` has no children, `false` is returned and `iter` is
         * set to be invalid. `parent` will remain a valid node after this
         * function has been called.
         * 
         * If `parent` is `null` returns the first node, equivalent to
         * `gtk_tree_model_get_iter_first (tree_model, iter);`
         * @param parent the {@link Gtk.TreeIter}-struct, or `null`
         * @returns `true`, if `iter` has been set to the first child
         */
        iter_children(parent: (Gtk.TreeIter | null)): [boolean, Gtk.TreeIter];

        /**
         * Returns `true` if `iter` has children, `false` otherwise.
         * @param iter the {@link Gtk.TreeIter}-struct to test for children
         * @returns `true` if `iter` has children
         */
        iter_has_child(iter: Gtk.TreeIter): boolean;

        /**
         * Returns the number of children that `iter` has.
         * 
         * As a special case, if `iter` is `null`, then the number
         * of toplevel nodes is returned.
         * @param iter the {@link Gtk.TreeIter}-struct, or `null`
         * @returns the number of children of `iter`
         */
        iter_n_children(iter: (Gtk.TreeIter | null)): number;

        /**
         * Sets `iter` to point to the node following it at the current level.
         * 
         * If there is no next `iter`, `false` is returned and `iter` is set
         * to be invalid.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @returns `true` if `iter` has been changed to the next node
         */
        iter_next(iter: Gtk.TreeIter): boolean;

        /**
         * Sets `iter` to be the child of `parent`, using the given index.
         * 
         * The first index is 0. If `n` is too big, or `parent` has no children,
         * `iter` is set to an invalid iterator and `false` is returned. `parent`
         * will remain a valid node after this function has been called. As a
         * special case, if `parent` is `null`, then the `n`-th root node
         * is set.
         * @param parent the {@link Gtk.TreeIter}-struct to get the child from, or `null`.
         * @param n the index of the desired child
         * @returns `true`, if `parent` has an `n`-th child
         */
        iter_nth_child(parent: (Gtk.TreeIter | null), n: number): [boolean, Gtk.TreeIter];

        /**
         * Sets `iter` to be the parent of `child`.
         * 
         * If `child` is at the toplevel, and doesn’t have a parent, then
         * `iter` is set to an invalid iterator and `false` is returned.
         * `child` will remain a valid node after this function has been
         * called.
         * 
         * `iter` will be initialized before the lookup is performed, so `child`
         * and `iter` cannot point to the same memory location.
         * @param child the {@link Gtk.TreeIter}-struct
         * @returns `true`, if `iter` is set to the parent of `child`
         */
        iter_parent(child: Gtk.TreeIter): [boolean, Gtk.TreeIter];

        /**
         * Sets `iter` to point to the previous node at the current level.
         * 
         * If there is no previous `iter`, `false` is returned and `iter` is
         * set to be invalid.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @returns `true` if `iter` has been changed to the previous node
         */
        iter_previous(iter: Gtk.TreeIter): boolean;

        /**
         * Lets the tree ref the node.
         * 
         * This is an optional method for models to implement.
         * To be more specific, models may ignore this call as it exists
         * primarily for performance reasons.
         * 
         * This function is primarily meant as a way for views to let
         * caching models know when nodes are being displayed (and hence,
         * whether or not to cache that node). Being displayed means a node
         * is in an expanded branch, regardless of whether the node is currently
         * visible in the viewport. For example, a file-system based model
         * would not want to keep the entire file-hierarchy in memory,
         * just the sections that are currently being displayed by
         * every current view.
         * 
         * A model should be expected to be able to get an iter independent
         * of its reffed state.
         * @param iter the {@link Gtk.TreeIter}-struct
         */
        ref_node(iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_changed | Gtk.TreeModel::row-changed} signal on `tree_model`.
         * @param path a {@link Gtk.TreePath}-struct pointing to the changed row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the changed row
         */
        row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_deleted | Gtk.TreeModel::row-deleted} signal on `tree_model`.
         * 
         * This should be called by models after a row has been removed.
         * The location pointed to by `path` should be the location that
         * the row previously was at. It may not be a valid location anymore.
         * 
         * Nodes that are deleted are not unreffed, this means that any
         * outstanding references on the deleted node should not be released.
         * @param path a {@link Gtk.TreePath}-struct pointing to the previous location of     the deleted row
         */
        row_deleted(path: Gtk.TreePath): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_has_child_toggled | Gtk.TreeModel::row-has-child-toggled} signal on
         * `tree_model`. This should be called by models after the child
         * state of a node changes.
         * @param path a {@link Gtk.TreePath}-struct pointing to the changed row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the changed row
         */
        row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_inserted | Gtk.TreeModel::row-inserted} signal on `tree_model`.
         * @param path a {@link Gtk.TreePath}-struct pointing to the inserted row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the inserted row
         */
        row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.rows_reordered | Gtk.TreeModel::rows-reordered} signal on `tree_model`.
         * 
         * This should be called by models when their rows have been
         * reordered.
         * @param path a {@link Gtk.TreePath}-struct pointing to the tree node whose children     have been reordered
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the node     whose children have been reordered, or `null` if the depth     of `path` is 0
         * @param new_order an array of integers     mapping the current position of each child to its old     position before the re-ordering,     i.e. `new_order``[newpos] = oldpos`
         */
        rows_reordered(path: Gtk.TreePath, iter: (Gtk.TreeIter | null), new_order: number[]): void;

        /**
         * Lets the tree unref the node.
         * 
         * This is an optional method for models to implement.
         * To be more specific, models may ignore this call as it exists
         * primarily for performance reasons. For more information on what
         * this means, see `gtk_tree_model_ref_node()`.
         * 
         * Please note that nodes that are deleted are not unreffed.
         * @param iter the {@link Gtk.TreeIter}-struct
         */
        unref_node(iter: Gtk.TreeIter): void;

        /**
         * Returns the type of the column.
         * @param index_ the column index
         * @virtual
         */
        vfunc_get_column_type(index_: number): GObject.GType;

        /**
         * Returns a set of flags supported by this interface.
         * 
         * The flags are a bitwise combination of {@link Gtk.TreeModelFlags}.
         * The flags supported should not change during the lifetime
         * of the `tree_model`.
         * @virtual
         */
        vfunc_get_flags(): Gtk.TreeModelFlags;

        /**
         * Sets `iter` to a valid iterator pointing to `path`.  If `path` does
         * not exist, `iter` is set to an invalid iterator and `false` is returned.
         * @param path the {@link Gtk.TreePath}-struct
         * @virtual
         */
        vfunc_get_iter(path: Gtk.TreePath): [boolean, Gtk.TreeIter];

        /**
         * Returns the number of columns supported by `tree_model`.
         * @virtual
         */
        vfunc_get_n_columns(): number;

        /**
         * Returns a newly-created {@link Gtk.TreePath}-struct referenced by `iter`.
         * 
         * This path should be freed with `gtk_tree_path_free()`.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_get_path(iter: Gtk.TreeIter): Gtk.TreePath;

        /**
         * Initializes and sets `value` to that at `column`.
         * 
         * When done with `value`, `g_value_unset()` needs to be called
         * to free any allocated memory.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @param column the column to lookup the value at
         * @virtual
         */
        vfunc_get_value(iter: Gtk.TreeIter, column: number): GObject.Value | any;

        /**
         * Sets `iter` to point to the first child of `parent`.
         * 
         * If `parent` has no children, `false` is returned and `iter` is
         * set to be invalid. `parent` will remain a valid node after this
         * function has been called.
         * 
         * If `parent` is `null` returns the first node, equivalent to
         * `gtk_tree_model_get_iter_first (tree_model, iter);`
         * @param parent the {@link Gtk.TreeIter}-struct, or `null`
         * @virtual
         */
        vfunc_iter_children(parent: (Gtk.TreeIter | null)): [boolean, Gtk.TreeIter];

        /**
         * Returns `true` if `iter` has children, `false` otherwise.
         * @param iter the {@link Gtk.TreeIter}-struct to test for children
         * @virtual
         */
        vfunc_iter_has_child(iter: Gtk.TreeIter): boolean;

        /**
         * Returns the number of children that `iter` has.
         * 
         * As a special case, if `iter` is `null`, then the number
         * of toplevel nodes is returned.
         * @param iter the {@link Gtk.TreeIter}-struct, or `null`
         * @virtual
         */
        vfunc_iter_n_children(iter: (Gtk.TreeIter | null)): number;

        /**
         * Sets `iter` to point to the node following it at the current level.
         * 
         * If there is no next `iter`, `false` is returned and `iter` is set
         * to be invalid.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_iter_next(iter: Gtk.TreeIter): boolean;

        /**
         * Sets `iter` to be the child of `parent`, using the given index.
         * 
         * The first index is 0. If `n` is too big, or `parent` has no children,
         * `iter` is set to an invalid iterator and `false` is returned. `parent`
         * will remain a valid node after this function has been called. As a
         * special case, if `parent` is `null`, then the `n`-th root node
         * is set.
         * @param parent the {@link Gtk.TreeIter}-struct to get the child from, or `null`.
         * @param n the index of the desired child
         * @virtual
         */
        vfunc_iter_nth_child(parent: (Gtk.TreeIter | null), n: number): [boolean, Gtk.TreeIter];

        /**
         * Sets `iter` to be the parent of `child`.
         * 
         * If `child` is at the toplevel, and doesn’t have a parent, then
         * `iter` is set to an invalid iterator and `false` is returned.
         * `child` will remain a valid node after this function has been
         * called.
         * 
         * `iter` will be initialized before the lookup is performed, so `child`
         * and `iter` cannot point to the same memory location.
         * @param child the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_iter_parent(child: Gtk.TreeIter): [boolean, Gtk.TreeIter];

        /**
         * Sets `iter` to point to the previous node at the current level.
         * 
         * If there is no previous `iter`, `false` is returned and `iter` is
         * set to be invalid.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_iter_previous(iter: Gtk.TreeIter): boolean;

        /**
         * Lets the tree ref the node.
         * 
         * This is an optional method for models to implement.
         * To be more specific, models may ignore this call as it exists
         * primarily for performance reasons.
         * 
         * This function is primarily meant as a way for views to let
         * caching models know when nodes are being displayed (and hence,
         * whether or not to cache that node). Being displayed means a node
         * is in an expanded branch, regardless of whether the node is currently
         * visible in the viewport. For example, a file-system based model
         * would not want to keep the entire file-hierarchy in memory,
         * just the sections that are currently being displayed by
         * every current view.
         * 
         * A model should be expected to be able to get an iter independent
         * of its reffed state.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_ref_node(iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_changed | Gtk.TreeModel::row-changed} signal on `tree_model`.
         * @param path a {@link Gtk.TreePath}-struct pointing to the changed row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the changed row
         * @virtual
         */
        vfunc_row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_deleted | Gtk.TreeModel::row-deleted} signal on `tree_model`.
         * 
         * This should be called by models after a row has been removed.
         * The location pointed to by `path` should be the location that
         * the row previously was at. It may not be a valid location anymore.
         * 
         * Nodes that are deleted are not unreffed, this means that any
         * outstanding references on the deleted node should not be released.
         * @param path a {@link Gtk.TreePath}-struct pointing to the previous location of     the deleted row
         * @virtual
         */
        vfunc_row_deleted(path: Gtk.TreePath): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_has_child_toggled | Gtk.TreeModel::row-has-child-toggled} signal on
         * `tree_model`. This should be called by models after the child
         * state of a node changes.
         * @param path a {@link Gtk.TreePath}-struct pointing to the changed row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the changed row
         * @virtual
         */
        vfunc_row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_inserted | Gtk.TreeModel::row-inserted} signal on `tree_model`.
         * @param path a {@link Gtk.TreePath}-struct pointing to the inserted row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the inserted row
         * @virtual
         */
        vfunc_row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Lets the tree unref the node.
         * 
         * This is an optional method for models to implement.
         * To be more specific, models may ignore this call as it exists
         * primarily for performance reasons. For more information on what
         * this means, see `gtk_tree_model_ref_node()`.
         * 
         * Please note that nodes that are deleted are not unreffed.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_unref_node(iter: Gtk.TreeIter): void;

        /**
         * Fills in `sort_column_id` and `order` with the current sort column and the
         * order. It returns `true` unless the `sort_column_id` is
         * `GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID` or
         * `GTK_TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID`.
         * @returns `true` if the sort column is not one of the special sort   column ids.
         */
        get_sort_column_id(): [boolean, number, Gtk.SortType];

        /**
         * Returns `true` if the model has a default sort function. This is used
         * primarily by GtkTreeViewColumns in order to determine if a model can
         * go back to the default state, or not.
         * @returns `true`, if the model has a default sort function
         */
        has_default_sort_func(): boolean;

        /**
         * Sets the default comparison function used when sorting to be `sort_func`.
         * If the current sort column id of `sortable` is
         * `GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID`, then the model will sort using
         * this function.
         * 
         * If `sort_func` is `null`, then there will be no default comparison function.
         * This means that once the model  has been sorted, it can’t go back to the
         * default state. In this case, when the current sort column id of `sortable`
         * is `GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID`, the model will be unsorted.
         * @param sort_func The comparison function
         */
        set_default_sort_func(sort_func: Gtk.TreeIterCompareFunc): void;

        /**
         * Sets the current sort column to be `sort_column_id`. The `sortable` will
         * resort itself to reflect this change, after emitting a
         * {@link Gtk.TreeSortable.SignalSignatures.sort_column_changed | Gtk.TreeSortable::sort-column-changed} signal. `sort_column_id` may either be
         * a regular column id, or one of the following special values:
         * 
         * - `GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID`: the default sort function
         *   will be used, if it is set
         * 
         * - `GTK_TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID`: no sorting will occur
         * @param sort_column_id the sort column id to set
         * @param order The sort order of the column
         */
        set_sort_column_id(sort_column_id: number, order: Gtk.SortType): void;

        /**
         * Sets the comparison function used when sorting to be `sort_func`. If the
         * current sort column id of `sortable` is the same as `sort_column_id`, then
         * the model will sort using this function.
         * @param sort_column_id the sort column id to set the function for
         * @param sort_func The comparison function
         */
        set_sort_func(sort_column_id: number, sort_func: Gtk.TreeIterCompareFunc): void;

        /**
         * Emits a {@link Gtk.TreeSortable.SignalSignatures.sort_column_changed | Gtk.TreeSortable::sort-column-changed} signal on `sortable`.
         */
        sort_column_changed(): void;

        /**
         * Fills in `sort_column_id` and `order` with the current sort column and the
         * order. It returns `true` unless the `sort_column_id` is
         * `GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID` or
         * `GTK_TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID`.
         * @virtual
         */
        vfunc_get_sort_column_id(): [boolean, number, Gtk.SortType];

        /**
         * Returns `true` if the model has a default sort function. This is used
         * primarily by GtkTreeViewColumns in order to determine if a model can
         * go back to the default state, or not.
         * @virtual
         */
        vfunc_has_default_sort_func(): boolean;

        /**
         * Sets the default comparison function used when sorting to be `sort_func`.
         * If the current sort column id of `sortable` is
         * `GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID`, then the model will sort using
         * this function.
         * 
         * If `sort_func` is `null`, then there will be no default comparison function.
         * This means that once the model  has been sorted, it can’t go back to the
         * default state. In this case, when the current sort column id of `sortable`
         * is `GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID`, the model will be unsorted.
         * @param sort_func The comparison function
         * @virtual
         */
        vfunc_set_default_sort_func(sort_func: Gtk.TreeIterCompareFunc): void;

        /**
         * Sets the current sort column to be `sort_column_id`. The `sortable` will
         * resort itself to reflect this change, after emitting a
         * {@link Gtk.TreeSortable.SignalSignatures.sort_column_changed | Gtk.TreeSortable::sort-column-changed} signal. `sort_column_id` may either be
         * a regular column id, or one of the following special values:
         * 
         * - `GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID`: the default sort function
         *   will be used, if it is set
         * 
         * - `GTK_TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID`: no sorting will occur
         * @param sort_column_id the sort column id to set
         * @param order The sort order of the column
         * @virtual
         */
        vfunc_set_sort_column_id(sort_column_id: number, order: Gtk.SortType): void;

        /**
         * Sets the comparison function used when sorting to be `sort_func`. If the
         * current sort column id of `sortable` is the same as `sort_column_id`, then
         * the model will sort using this function.
         * @param sort_column_id the sort column id to set the function for
         * @param sort_func The comparison function
         * @virtual
         */
        vfunc_set_sort_func(sort_column_id: number, sort_func: Gtk.TreeIterCompareFunc): void;

        /**
         * Emits a {@link Gtk.TreeSortable.SignalSignatures.sort_column_changed | Gtk.TreeSortable::sort-column-changed} signal on `sortable`.
         * @virtual
         */
        vfunc_sort_column_changed(): void;

        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.ListStore.set
        set(...args: never[]): any;
    }


    namespace ColorProfileView {
        // Signal signatures
        interface SignalSignatures extends Gtk.TextView.SignalSignatures {
            "notify::accepts-tab": (pspec: GObject.ParamSpec) => void;
            "notify::bottom-margin": (pspec: GObject.ParamSpec) => void;
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::cursor-visible": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::im-module": (pspec: GObject.ParamSpec) => void;
            "notify::indent": (pspec: GObject.ParamSpec) => void;
            "notify::input-hints": (pspec: GObject.ParamSpec) => void;
            "notify::input-purpose": (pspec: GObject.ParamSpec) => void;
            "notify::justification": (pspec: GObject.ParamSpec) => void;
            "notify::left-margin": (pspec: GObject.ParamSpec) => void;
            "notify::monospace": (pspec: GObject.ParamSpec) => void;
            "notify::overwrite": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-above-lines": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-below-lines": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-inside-wrap": (pspec: GObject.ParamSpec) => void;
            "notify::populate-all": (pspec: GObject.ParamSpec) => void;
            "notify::right-margin": (pspec: GObject.ParamSpec) => void;
            "notify::tabs": (pspec: GObject.ParamSpec) => void;
            "notify::top-margin": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-mode": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::hadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::hscroll-policy": (pspec: GObject.ParamSpec) => void;
            "notify::vadjustment": (pspec: GObject.ParamSpec) => void;
            "notify::vscroll-policy": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.TextView.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Scrollable.ConstructorProps {

        }
    }

    /**
     * A widget for viewing the properties of a {@link Gimp.ColorProfile}.
     * @gir-type Class
     */
    class ColorProfileView extends Gtk.TextView implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
        static $gtype: GObject.GType<ColorProfileView>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ColorProfileView.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ColorProfileView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ColorProfileView;

        // Signals
        /** @signal */
        connect<K extends keyof ColorProfileView.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorProfileView.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ColorProfileView.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorProfileView.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ColorProfileView.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ColorProfileView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param message 
         */
        set_error(message: string): void;

        /**
         * @param profile 
         */
        set_profile(profile: Gimp.ColorProfile): void;

        /**
         * Horizontal {@link Gtk.Adjustment} of the scrollable widget. This adjustment is
         * shared between the scrollable widget and its parent.
         * @since 3.0
          * @category Inherited from Gtk.Scrollable
         */
        get hadjustment(): Gtk.Adjustment;
        set hadjustment(val: Gtk.Adjustment);

        /**
         * Determines whether horizontal scrolling should start once the scrollable
         * widget is allocated less than its minimum width or less than its natural width.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get hscroll_policy(): Gtk.ScrollablePolicy;
        set hscroll_policy(val: Gtk.ScrollablePolicy);

        /**
         * Determines whether horizontal scrolling should start once the scrollable
         * widget is allocated less than its minimum width or less than its natural width.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get hscrollPolicy(): Gtk.ScrollablePolicy;
        set hscrollPolicy(val: Gtk.ScrollablePolicy);

        /**
         * Verical {@link Gtk.Adjustment} of the scrollable widget. This adjustment is shared
         * between the scrollable widget and its parent.
         * @since 3.0
          * @category Inherited from Gtk.Scrollable
         */
        get vadjustment(): Gtk.Adjustment;
        set vadjustment(val: Gtk.Adjustment);

        /**
         * Determines whether vertical scrolling should start once the scrollable
         * widget is allocated less than its minimum height or less than its natural height.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get vscroll_policy(): Gtk.ScrollablePolicy;
        set vscroll_policy(val: Gtk.ScrollablePolicy);

        /**
         * Determines whether vertical scrolling should start once the scrollable
         * widget is allocated less than its minimum height or less than its natural height.
         * @since 3.0
         * @default Gtk.ScrollablePolicy.MINIMUM
          * @category Inherited from Gtk.Scrollable
         */
        get vscrollPolicy(): Gtk.ScrollablePolicy;
        set vscrollPolicy(val: Gtk.ScrollablePolicy);

        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable. An example for this would
         * be treeview headers. GTK+ can use this information to
         * display overlayed graphics, like the overshoot indication,
         * at the right position.
         * @returns `true` if `border` has been set
         */
        get_border(): [boolean, Gtk.Border];

        /**
         * Retrieves the {@link Gtk.Adjustment} used for horizontal scrolling.
         * @returns horizontal {@link Gtk.Adjustment}.
         */
        get_hadjustment(): Gtk.Adjustment;

        /**
         * Gets the horizontal {@link Gtk.ScrollablePolicy}.
         * @returns The horizontal {@link Gtk.ScrollablePolicy}.
         */
        get_hscroll_policy(): Gtk.ScrollablePolicy;

        /**
         * Retrieves the {@link Gtk.Adjustment} used for vertical scrolling.
         * @returns vertical {@link Gtk.Adjustment}.
         */
        get_vadjustment(): Gtk.Adjustment;

        /**
         * Gets the vertical {@link Gtk.ScrollablePolicy}.
         * @returns The vertical {@link Gtk.ScrollablePolicy}.
         */
        get_vscroll_policy(): Gtk.ScrollablePolicy;

        /**
         * Sets the horizontal adjustment of the {@link Gtk.Scrollable}.
         * @param hadjustment a {@link Gtk.Adjustment}
         */
        set_hadjustment(hadjustment: (Gtk.Adjustment | null)): void;

        /**
         * Sets the {@link Gtk.ScrollablePolicy} to determine whether
         * horizontal scrolling should start below the minimum width or
         * below the natural width.
         * @param policy the horizontal {@link Gtk.ScrollablePolicy}
         */
        set_hscroll_policy(policy: Gtk.ScrollablePolicy): void;

        /**
         * Sets the vertical adjustment of the {@link Gtk.Scrollable}.
         * @param vadjustment a {@link Gtk.Adjustment}
         */
        set_vadjustment(vadjustment: (Gtk.Adjustment | null)): void;

        /**
         * Sets the {@link Gtk.ScrollablePolicy} to determine whether
         * vertical scrolling should start below the minimum height or
         * below the natural height.
         * @param policy the vertical {@link Gtk.ScrollablePolicy}
         */
        set_vscroll_policy(policy: Gtk.ScrollablePolicy): void;

        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable. An example for this would
         * be treeview headers. GTK+ can use this information to
         * display overlayed graphics, like the overshoot indication,
         * at the right position.
         * @virtual
         */
        vfunc_get_border(): [boolean, Gtk.Border];
    }


    namespace ColorScale {
        // Signal signatures
        interface SignalSignatures extends Gtk.Scale.SignalSignatures {
            "notify::channel": (pspec: GObject.ParamSpec) => void;
            "notify::digits": (pspec: GObject.ParamSpec) => void;
            "notify::draw-value": (pspec: GObject.ParamSpec) => void;
            "notify::has-origin": (pspec: GObject.ParamSpec) => void;
            "notify::value-pos": (pspec: GObject.ParamSpec) => void;
            "notify::adjustment": (pspec: GObject.ParamSpec) => void;
            "notify::fill-level": (pspec: GObject.ParamSpec) => void;
            "notify::inverted": (pspec: GObject.ParamSpec) => void;
            "notify::lower-stepper-sensitivity": (pspec: GObject.ParamSpec) => void;
            "notify::restrict-to-fill-level": (pspec: GObject.ParamSpec) => void;
            "notify::round-digits": (pspec: GObject.ParamSpec) => void;
            "notify::show-fill-level": (pspec: GObject.ParamSpec) => void;
            "notify::upper-stepper-sensitivity": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Scale.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            channel: ColorSelectorChannel;
        }
    }

    /**
     * Fancy colored sliders.
     * @gir-type Class
     */
    class ColorScale extends Gtk.Scale implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<ColorScale>;

        // Properties
        /**
         * The channel which is edited by the color scale.
         * @since 2.8
         * @default GimpUi.ColorSelectorChannel.VALUE
         */
        get channel(): ColorSelectorChannel;
        set channel(val: ColorSelectorChannel);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ColorScale.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ColorScale.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](orientation: Gtk.Orientation, channel: ColorSelectorChannel): ColorScale;

        // Conflicted with Gtk.Scale.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof ColorScale.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorScale.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ColorScale.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorScale.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ColorScale.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ColorScale.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Changes the color channel displayed by the `scale`.
         * @param channel the new color channel
         */
        set_channel(channel: ColorSelectorChannel): void;

        /**
         * Changes the color value of the `scale`.
         * @param color the new color.
         */
        set_color(color: Gegl.Color): void;

        /**
         * Sets the color management configuration to use with this color scale.
         * @param config a {@link Gimp.ColorConfig} object.
         */
        set_color_config(config: Gimp.ColorConfig): void;

        /**
         * Changes the color format displayed by the `scale`.
         * @param format the Babl format represented by `scale`.
         */
        set_format(format: Babl.Object): void;
    }


    namespace ColorScaleEntry {
        // Signal signatures
        interface SignalSignatures extends ScaleEntry.SignalSignatures {
            "notify::digits": (pspec: GObject.ParamSpec) => void;
            "notify::lower": (pspec: GObject.ParamSpec) => void;
            "notify::upper": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-row": (pspec: GObject.ParamSpec) => void;
            "notify::column-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::column-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::row-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::row-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends ScaleEntry.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {

        }
    }

    /**
     * This widget is a subclass of {@link GimpUi.ScaleEntry} showing a
     * {@link GimpUi.ColorScale} instead of a {@link Gtk.Scale}.
     * @gir-type Class
     */
    class ColorScaleEntry extends ScaleEntry implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<ColorScaleEntry>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ColorScaleEntry.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ColorScaleEntry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](text: string, value: number, lower: number, upper: number, digits: number): ColorScaleEntry;

        // Conflicted with Gtk.Grid.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof ColorScaleEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorScaleEntry.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ColorScaleEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorScaleEntry.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ColorScaleEntry.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ColorScaleEntry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace ColorScales {
        // Signal signatures
        interface SignalSignatures extends ColorSelector.SignalSignatures {
            "notify::show-hsv": (pspec: GObject.ParamSpec) => void;
            "notify::show-rgb-u8": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends ColorSelector.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            show_hsv: boolean;
            showHsv: boolean;
            show_rgb_u8: boolean;
            showRgbU8: boolean;
        }
    }

    /**
     * The {@link GimpUi.ColorScales} widget is an implementation of a
     * {@link GimpUi.ColorSelector}. It shows a group of {@link GimpUi.ColorScale} widgets
     * that allow to adjust the HSV, LCH, and RGB color channels.
     * @gir-type Class
     */
    class ColorScales extends ColorSelector implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<ColorScales>;

        // Properties
        /**
         * @default false
         */
        get show_hsv(): boolean;
        set show_hsv(val: boolean);

        /**
         * @default false
         */
        get showHsv(): boolean;
        set showHsv(val: boolean);

        /**
         * @default false
         */
        get show_rgb_u8(): boolean;
        set show_rgb_u8(val: boolean);

        /**
         * @default false
         */
        get showRgbU8(): boolean;
        set showRgbU8(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ColorScales.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ColorScales.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ColorScales.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorScales.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ColorScales.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorScales.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ColorScales.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ColorScales.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_show_rgb_u8(): boolean;

        /**
         * @param show_rgb_u8 
         */
        set_show_rgb_u8(show_rgb_u8: boolean): void;
    }


    namespace ColorSelect {
        // Signal signatures
        interface SignalSignatures extends ColorSelector.SignalSignatures {
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends ColorSelector.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {

        }
    }

    /**
     * The {@link GimpUi.ColorSelect} widget is an implementation of a
     * {@link GimpUi.ColorSelector}. It shows a square area that supports
     * interactively changing two color channels and a smaller area to
     * change the third channel. You can select which channel should be
     * the third by calling `gimp_color_selector_set_channel()`. The widget
     * will then change the other two channels accordingly.
     * @gir-type Class
     */
    class ColorSelect extends ColorSelector implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<ColorSelect>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ColorSelect.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ColorSelect.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ColorSelect.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorSelect.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ColorSelect.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorSelect.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ColorSelect.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ColorSelect.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace ColorSelection {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            "color-changed": () => void;
            "notify::config": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            config: Gimp.ColorConfig;
        }
    }

    /**
     * Widget for doing a color selection.
     * @gir-type Class
     */
    class ColorSelection extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<ColorSelection>;

        // Properties
        /**
         * @write-only
         */
        set config(val: Gimp.ColorConfig);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ColorSelection.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ColorSelection.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ColorSelection;

        // Signals
        /** @signal */
        connect<K extends keyof ColorSelection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorSelection.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ColorSelection.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorSelection.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ColorSelection.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ColorSelection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Emits the "color-changed" signal.
         */
        color_changed(): void;

        /**
         * This function returns the {@link GimpUi.ColorSelection}'s current color.
         * @returns the currently selected color.
         */
        get_color(): Gegl.Color;

        /**
         * @returns The selection's {@link GimpUi.ColorNotebook}.
         */
        get_notebook(): Gtk.Widget;

        /**
         * @returns the old color.
         */
        get_old_color(): Gegl.Color;

        /**
         * @returns The selection's right {@link Gtk.Box} which          contains the color scales.
         */
        get_right_vbox(): Gtk.Box;

        /**
         * Returns the `selection`'s `show_alpha` property.
         * @returns `true` if the {@link GimpUi.ColorSelection} has alpha controls.
         */
        get_show_alpha(): boolean;

        /**
         * Sets the {@link GimpUi.ColorSelection}'s current color to its old color.
         */
        reset(): void;

        /**
         * Sets the {@link GimpUi.ColorSelection}'s current color to the new `color`.
         * @param color The `color` to set as current color.
         */
        set_color(color: Gegl.Color): void;

        /**
         * Sets the color management configuration to use with this color selection.
         * @param config A {@link Gimp.ColorConfig} object.
         */
        set_config(config: Gimp.ColorConfig): void;

        /**
         * Updates all selectors with the current format.
         * @param format A Babl format, with space.
         */
        set_format(format: Babl.Object): void;

        /**
         * Sets the {@link GimpUi.ColorSelection}'s old color.
         * @param color The `color` to set as old color.
         */
        set_old_color(color: Gegl.Color): void;

        /**
         * Sets the `show_alpha` property of the `selection` widget.
         * @param show_alpha The new `show_alpha` setting.
         */
        set_show_alpha(show_alpha: boolean): void;

        /**
         * Sets the simulation options to use with this color selection.
         * @param profile A {@link Gimp.ColorProfile} object.
         * @param intent A {@link Gimp.ColorRenderingIntent} enum.
         * @param bpc A gboolean.
         */
        set_simulation(profile: Gimp.ColorProfile, intent: Gimp.ColorRenderingIntent, bpc: boolean): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace ColorSelector {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            "channel-changed": (arg0: ColorSelectorChannel) => void;
            /**
             * @signal
             * @run-first
             */
            "color-changed": (arg0: Gegl.Color) => void;
            /**
             * @signal
             * @run-first
             */
            "model-visible-changed": (arg0: ColorSelectorModel, arg1: boolean) => void;
            /**
             * @signal
             * @run-first
             */
            simulation: (arg0: boolean) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {

        }
    }

    /**
     * Functions and definitions for creating pluggable GIMP color
     * selector modules.
     * @gir-type Class
     */
    abstract class ColorSelector extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<ColorSelector>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ColorSelector.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ColorSelector.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ColorSelector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorSelector.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ColorSelector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ColorSelector.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ColorSelector.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ColorSelector.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param channel 
         * @virtual
         */
        vfunc_channel_changed(channel: ColorSelectorChannel): void;

        /**
         * @param color 
         * @virtual
         */
        vfunc_color_changed(color: Gegl.Color): void;

        /**
         * @param model 
         * @param visible 
         * @virtual
         */
        vfunc_model_visible_changed(model: ColorSelectorModel, visible: boolean): void;

        /**
         * Sets the `channel` property of the `selector` widget.
         * 
         * Changes between displayed channels if this `selector` instance has
         * the ability to show different channels.
         * This will also update the color model if needed.
         * @param channel The new `channel` setting.
         * @virtual
         */
        vfunc_set_channel(channel: ColorSelectorChannel): void;

        /**
         * Sets the color shown in the `selector` widget.
         * @param color The new color.
         * @virtual
         */
        vfunc_set_color(color: Gegl.Color): void;

        /**
         * Sets the color management configuration to use with this color selector.
         * @param config a {@link Gimp.ColorConfig} object.
         * @virtual
         */
        vfunc_set_config(config: Gimp.ColorConfig): void;

        /**
         * Sets the babl format representing the color model and the space this
         * `selector` is supposed to display values for. Depending on the type of color
         * selector, it may trigger various UX changes, or none at all.
         * @param format a Babl format, with space.
         * @virtual
         */
        vfunc_set_format(format: Babl.Object): void;

        /**
         * Sets the `model` visible/invisible on the `selector` widget.
         * 
         * Toggles visibility of displayed models if this `selector` instance
         * has the ability to show different color models.
         * @param model The affected {@link GimpUi.ColorSelectorModel}.
         * @param visible The new visible setting.
         * @virtual
         */
        vfunc_set_model_visible(model: ColorSelectorModel, visible: boolean): void;

        /**
         * Sets the `show_alpha` property of the `selector` widget.
         * @param show_alpha The new `show_alpha` setting.
         * @virtual
         */
        vfunc_set_show_alpha(show_alpha: boolean): void;

        /**
         * Sets the simulation options to use with this color selector.
         * @param profile a {@link Gimp.ColorProfile} object.
         * @param intent a {@link Gimp.ColorRenderingIntent} enum.
         * @param bpc a gboolean.
         * @virtual
         */
        vfunc_set_simulation(profile: Gimp.ColorProfile, intent: Gimp.ColorRenderingIntent, bpc: boolean): void;

        /**
         * Sets the `sensitive` property of the `selector`'s toggles.
         * 
         * This function has no effect if this `selector` instance has no
         * toggles to switch channels.
         * @param sensitive The new `sensitive` setting.
         * @virtual
         */
        vfunc_set_toggles_sensitive(sensitive: boolean): void;

        /**
         * Sets the `visible` property of the `selector`'s toggles.
         * 
         * This function has no effect if this `selector` instance has no
         * toggles to switch channels.
         * @param visible The new `visible` setting.
         * @virtual
         */
        vfunc_set_toggles_visible(visible: boolean): void;

        /**
         * @param enabled 
         * @virtual
         */
        vfunc_simulation(enabled: boolean): void;

        // Methods
        /**
         * @param enabled 
         */
        enable_simulation(enabled: boolean): boolean;

        /**
         * Returns the `selector`'s current channel.
         * @returns The {@link GimpUi.ColorSelectorChannel} currently shown by the `selector`.
         */
        get_channel(): ColorSelectorChannel;

        /**
         * Retrieves the color shown in the `selector` widget.
         * @returns a copy of the selected color.
         */
        get_color(): Gegl.Color;

        /**
         * @param model The {@link GimpUi.ColorSelectorModel}.
         * @returns whether `model` is visible in `selector`.
         */
        get_model_visible(model: ColorSelectorModel): boolean;

        /**
         * Returns the `selector`'s `show_alpha` property.
         * @returns `true` if the {@link GimpUi.ColorSelector} has alpha controls.
         */
        get_show_alpha(): boolean;

        /**
         * @param profile 
         * @param intent 
         * @param bpc 
         */
        get_simulation(profile: Gimp.ColorProfile, intent: Gimp.ColorRenderingIntent, bpc: boolean): boolean;

        /**
         * Returns the `sensitive` property of the `selector`'s toggles.
         * @returns `true` if the {@link GimpUi.ColorSelector}'s toggles are sensitive.
         */
        get_toggles_sensitive(): boolean;

        /**
         * Returns the `visible` property of the `selector`'s toggles.
         * @returns `true` if the {@link GimpUi.ColorSelector}'s toggles are visible.
         */
        get_toggles_visible(): boolean;

        /**
         * Sets the `channel` property of the `selector` widget.
         * 
         * Changes between displayed channels if this `selector` instance has
         * the ability to show different channels.
         * This will also update the color model if needed.
         * @param channel The new `channel` setting.
         */
        set_channel(channel: ColorSelectorChannel): void;

        /**
         * Sets the color shown in the `selector` widget.
         * @param color The new color.
         */
        set_color(color: Gegl.Color): void;

        /**
         * Sets the color management configuration to use with this color selector.
         * @param config a {@link Gimp.ColorConfig} object.
         */
        set_config(config: Gimp.ColorConfig): void;

        /**
         * Sets the babl format representing the color model and the space this
         * `selector` is supposed to display values for. Depending on the type of color
         * selector, it may trigger various UX changes, or none at all.
         * @param format a Babl format, with space.
         */
        set_format(format: Babl.Object): void;

        /**
         * Sets the `model` visible/invisible on the `selector` widget.
         * 
         * Toggles visibility of displayed models if this `selector` instance
         * has the ability to show different color models.
         * @param model The affected {@link GimpUi.ColorSelectorModel}.
         * @param visible The new visible setting.
         */
        set_model_visible(model: ColorSelectorModel, visible: boolean): void;

        /**
         * Sets the `show_alpha` property of the `selector` widget.
         * @param show_alpha The new `show_alpha` setting.
         */
        set_show_alpha(show_alpha: boolean): void;

        /**
         * Sets the simulation options to use with this color selector.
         * @param profile a {@link Gimp.ColorProfile} object.
         * @param intent a {@link Gimp.ColorRenderingIntent} enum.
         * @param bpc a gboolean.
         */
        set_simulation(profile: Gimp.ColorProfile, intent: Gimp.ColorRenderingIntent, bpc: boolean): void;

        /**
         * Sets the `sensitive` property of the `selector`'s toggles.
         * 
         * This function has no effect if this `selector` instance has no
         * toggles to switch channels.
         * @param sensitive The new `sensitive` setting.
         */
        set_toggles_sensitive(sensitive: boolean): void;

        /**
         * Sets the `visible` property of the `selector`'s toggles.
         * 
         * This function has no effect if this `selector` instance has no
         * toggles to switch channels.
         * @param visible The new `visible` setting.
         */
        set_toggles_visible(visible: boolean): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace Dialog {
        // Signal signatures
        interface SignalSignatures extends Gtk.Dialog.SignalSignatures {
            "notify::help-func": (pspec: GObject.ParamSpec) => void;
            "notify::help-id": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::use-header-bar": (pspec: GObject.ParamSpec) => void;
            "notify::accept-focus": (pspec: GObject.ParamSpec) => void;
            "notify::application": (pspec: GObject.ParamSpec) => void;
            "notify::attached-to": (pspec: GObject.ParamSpec) => void;
            "notify::decorated": (pspec: GObject.ParamSpec) => void;
            "notify::default-height": (pspec: GObject.ParamSpec) => void;
            "notify::default-width": (pspec: GObject.ParamSpec) => void;
            "notify::deletable": (pspec: GObject.ParamSpec) => void;
            "notify::destroy-with-parent": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-map": (pspec: GObject.ParamSpec) => void;
            "notify::focus-visible": (pspec: GObject.ParamSpec) => void;
            "notify::gravity": (pspec: GObject.ParamSpec) => void;
            "notify::has-resize-grip": (pspec: GObject.ParamSpec) => void;
            "notify::has-toplevel-focus": (pspec: GObject.ParamSpec) => void;
            "notify::hide-titlebar-when-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-active": (pspec: GObject.ParamSpec) => void;
            "notify::is-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonics-visible": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::resizable": (pspec: GObject.ParamSpec) => void;
            "notify::resize-grip-visible": (pspec: GObject.ParamSpec) => void;
            "notify::role": (pspec: GObject.ParamSpec) => void;
            "notify::screen": (pspec: GObject.ParamSpec) => void;
            "notify::skip-pager-hint": (pspec: GObject.ParamSpec) => void;
            "notify::skip-taskbar-hint": (pspec: GObject.ParamSpec) => void;
            "notify::startup-id": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::transient-for": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::type-hint": (pspec: GObject.ParamSpec) => void;
            "notify::urgency-hint": (pspec: GObject.ParamSpec) => void;
            "notify::window-position": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Dialog.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            help_func: never;
            helpFunc: never;
            help_id: string;
            helpId: string;
            parent: (Gtk.Widget | any);
        }
    }

    /**
     * Constructors for {@link Gtk.Dialog}'s and action_areas as well as other
     * dialog-related stuff.
     * @gir-type Class
     */
    class Dialog extends Gtk.Dialog implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Dialog>;

        // Properties
        /**
         * @since 2.2
         * @construct-only
         */
        get help_func(): null;

        /**
         * @since 2.2
         * @construct-only
         */
        get helpFunc(): null;

        /**
         * @since 2.2
         * @default null
         */
        get help_id(): string;
        set help_id(val: string);

        /**
         * @since 2.2
         * @default null
         */
        get helpId(): string;
        set helpId(val: string);

        /**
         * @since 2.8
         * @construct-only
         */
    // This accessor conflicts with another accessor's type in a parent class or interface.
        set parent(val: (Gtk.Widget | any));

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Dialog.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Dialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Dialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Dialog.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Dialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Dialog.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Dialog.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Dialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * This function is essentially the same as `gtk_dialog_add_button()`
         * except it ensures there is only one help button and automatically
         * sets the RESPONSE_OK widget as the default response.
         * @param button_text text of button, or stock ID.
         * @param response_id response ID for the button.
         * @returns the button widget that was added.
         */
        add_button(button_text: string, response_id: number): Gtk.Widget;

        /**
         * Returns an opaque data handle representing the window in the currently
         * running platform. You should not try to use this directly. Usually this is to
         * be used in functions such as {@link Gimp.brushes_popup} which will allow the
         * core process to set this {@link Dialog} as parent to the newly created popup.
         * @returns an opaque {@link GLib.Bytes} identifying this                           window.
         */
        get_native_handle(): GLib.Bytes;

        /**
         * This function does exactly the same as `gtk_dialog_run()` except it
         * does not make the dialog modal while the {@link GLib.MainLoop} is running.
         * @returns response ID
         */
        run(): number;

        /**
         * Reorder `dialog`'s buttons if {@link Gtk.Settings.gtk_alternative_button_order}
         * is set to TRUE. This is mostly a wrapper around the GTK function
         * {@link Gtk.Dialog.set_alternative_button_order}, except it won't
         * output a deprecation warning.
         * @param order array of buttons' response ids.
         */
        set_alternative_button_order_from_array(order: number[]): void;
    }


    namespace DrawableChooser {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::drawable": (pspec: GObject.ParamSpec) => void;
            "notify::drawable-type": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            drawable: Gimp.Drawable;
            drawable_type: GObject.GTypeInput;
            drawableType: GObject.GTypeInput;
            label: string;
            title: string;
        }
    }

    /**
     * The chooser contains an optional label and a button which queries the core
     * process to pop up a drawable selection dialog.
     * @gir-type Class
     * @since 3.0
     * @deprecated since 3.2: Use GimpItemChooser.
     */
    class DrawableChooser extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<DrawableChooser>;

        // Properties
        /**
         * The currently selected drawable.
         * @since 3.0
         */
        get drawable(): Gimp.Drawable;
        set drawable(val: Gimp.Drawable);

        /**
         * Allowed drawable types, which must be either GIMP_TYPE_DRAWABLE or a
         * subtype.
         * @since 3.0
         * @construct-only
         */
        get drawable_type(): GObject.GType;

        /**
         * Allowed drawable types, which must be either GIMP_TYPE_DRAWABLE or a
         * subtype.
         * @since 3.0
         * @construct-only
         */
        get drawableType(): GObject.GType;

        /**
         * Label text with mnemonic.
         * @since 3.0
         * @construct-only
         * @default null
         */
        get label(): string;

        /**
         * The title to be used for the drawable selection popup dialog.
         * @since 3.0
         * @construct-only
         * @default Drawable Selection
         */
        get title(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DrawableChooser.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DrawableChooser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](title: (string | null), label: (string | null), drawable_type: GObject.GType, drawable: (Gimp.Drawable | null)): DrawableChooser;

        // Conflicted with Gtk.Box.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof DrawableChooser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DrawableChooser.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DrawableChooser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DrawableChooser.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DrawableChooser.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DrawableChooser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the currently selected drawable.
         * @returns an internal copy of the drawable which must not be freed.
         */
        get_drawable(): Gimp.Drawable;

        /**
         * Returns the label widget.
         * @returns the {@link Gtk.Widget} showing the label text.
         */
        get_label(): Gtk.Widget;

        /**
         * Sets the currently selected drawable.
         * This will select the drawable in both the button and any chooser popup.
         * @param drawable Drawable to set.
         */
        set_drawable(drawable: Gimp.Drawable): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace DrawableComboBox {
        // Signal signatures
        interface SignalSignatures extends IntComboBox.SignalSignatures {
            "notify::ellipsize": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::layout": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::active-id": (pspec: GObject.ParamSpec) => void;
            "notify::add-tearoffs": (pspec: GObject.ParamSpec) => void;
            "notify::button-sensitivity": (pspec: GObject.ParamSpec) => void;
            "notify::cell-area": (pspec: GObject.ParamSpec) => void;
            "notify::column-span-column": (pspec: GObject.ParamSpec) => void;
            "notify::entry-text-column": (pspec: GObject.ParamSpec) => void;
            "notify::has-entry": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::id-column": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::popup-fixed-width": (pspec: GObject.ParamSpec) => void;
            "notify::popup-shown": (pspec: GObject.ParamSpec) => void;
            "notify::row-span-column": (pspec: GObject.ParamSpec) => void;
            "notify::tearoff-title": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-width": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends IntComboBox.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.CellLayout.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class DrawableComboBox extends IntComboBox implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.CellLayout {
        static $gtype: GObject.GType<DrawableComboBox>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DrawableComboBox.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DrawableComboBox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](constraint: (ItemConstraintFunc | null)): DrawableComboBox;

        // Conflicted with GimpUi.IntComboBox.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect_after<K extends keyof DrawableComboBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DrawableComboBox.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DrawableComboBox.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DrawableComboBox.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;

        /**
         * Returns whether the widget should grab focus when it is clicked with the mouse.
         * See `gtk_widget_set_focus_on_click()`.
         * @returns `true` if the widget should grab focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;

        /**
         * Sets whether the widget should grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the widget should grab focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
    }


    namespace DrawablePreview {
        // Signal signatures
        interface SignalSignatures extends ScrolledPreview.SignalSignatures {
            "notify::drawable": (pspec: GObject.ParamSpec) => void;
            "notify::update": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends ScrolledPreview.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            drawable: Gimp.Drawable;
        }
    }

    /**
     * A widget providing a preview of a {@link Gimp.Drawable}.
     * @gir-type Class
     */
    class DrawablePreview extends ScrolledPreview implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<DrawablePreview>;

        // Properties
        /**
         * @construct-only
         */
        get drawable(): Gimp.Drawable;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DrawablePreview.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DrawablePreview.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_from_drawable(drawable: Gimp.Drawable): DrawablePreview;

        // Signals
        /** @signal */
        connect<K extends keyof DrawablePreview.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DrawablePreview.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DrawablePreview.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DrawablePreview.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DrawablePreview.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DrawablePreview.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns the drawable that has been passed to          `gimp_drawable_preview_new_from_drawable()`.
         */
        get_drawable(): Gimp.Drawable;
    }


    namespace EnumComboBox {
        // Signal signatures
        interface SignalSignatures extends IntComboBox.SignalSignatures {
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::ellipsize": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::layout": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::active-id": (pspec: GObject.ParamSpec) => void;
            "notify::add-tearoffs": (pspec: GObject.ParamSpec) => void;
            "notify::button-sensitivity": (pspec: GObject.ParamSpec) => void;
            "notify::cell-area": (pspec: GObject.ParamSpec) => void;
            "notify::column-span-column": (pspec: GObject.ParamSpec) => void;
            "notify::entry-text-column": (pspec: GObject.ParamSpec) => void;
            "notify::has-entry": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::id-column": (pspec: GObject.ParamSpec) => void;
            "notify::popup-fixed-width": (pspec: GObject.ParamSpec) => void;
            "notify::popup-shown": (pspec: GObject.ParamSpec) => void;
            "notify::row-span-column": (pspec: GObject.ParamSpec) => void;
            "notify::tearoff-title": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-width": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends IntComboBox.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.CellLayout.ConstructorProps {
            model: EnumStore;
        }
    }

    /**
     * A {@link Gtk.ComboBox} subclass for selecting an enum value.
     * @gir-type Class
     */
    class EnumComboBox extends IntComboBox implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.CellLayout {
        static $gtype: GObject.GType<EnumComboBox>;

        // Properties
        get model(): EnumStore;
        set model(val: EnumStore);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EnumComboBox.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<EnumComboBox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](enum_type: GObject.GType): EnumComboBox;

        // Conflicted with GimpUi.IntComboBox.new
        static ["new"](...args: never[]): any;

        static new_with_model(enum_store: EnumStore): EnumComboBox;

        // Signals
        /** @signal */
        connect_after<K extends keyof EnumComboBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EnumComboBox.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EnumComboBox.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EnumComboBox.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Attempts to create icons for all items in the `combo_box`. See
         * `gimp_enum_store_set_icon_prefix()` to find out what to use as
         * `icon_prefix`.
         * @param icon_prefix a prefix to create icon names from enum values
         */
        set_icon_prefix(icon_prefix: string): void;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;

        /**
         * Returns whether the widget should grab focus when it is clicked with the mouse.
         * See `gtk_widget_set_focus_on_click()`.
         * @returns `true` if the widget should grab focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;

        /**
         * Sets whether the widget should grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the widget should grab focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
    }


    namespace EnumLabel {
        // Signal signatures
        interface SignalSignatures extends Gtk.Label.SignalSignatures {
            "notify::enum-type": (pspec: GObject.ParamSpec) => void;
            "notify::enum-value": (pspec: GObject.ParamSpec) => void;
            "notify::angle": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::cursor-position": (pspec: GObject.ParamSpec) => void;
            "notify::ellipsize": (pspec: GObject.ParamSpec) => void;
            "notify::justify": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::lines": (pspec: GObject.ParamSpec) => void;
            "notify::max-width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonic-keyval": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonic-widget": (pspec: GObject.ParamSpec) => void;
            "notify::pattern": (pspec: GObject.ParamSpec) => void;
            "notify::selectable": (pspec: GObject.ParamSpec) => void;
            "notify::selection-bound": (pspec: GObject.ParamSpec) => void;
            "notify::single-line-mode": (pspec: GObject.ParamSpec) => void;
            "notify::track-visited-links": (pspec: GObject.ParamSpec) => void;
            "notify::use-markup": (pspec: GObject.ParamSpec) => void;
            "notify::use-underline": (pspec: GObject.ParamSpec) => void;
            "notify::width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::wrap": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-mode": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::yalign": (pspec: GObject.ParamSpec) => void;
            "notify::xpad": (pspec: GObject.ParamSpec) => void;
            "notify::ypad": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Label.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            enum_type: GObject.GTypeInput;
            enumType: GObject.GTypeInput;
            enum_value: number;
            enumValue: number;
        }
    }

    /**
     * A {@link Gtk.Label} subclass that displays an enum value.
     * @gir-type Class
     */
    class EnumLabel extends Gtk.Label implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<EnumLabel>;

        // Properties
        /**
         * The {@link GObject.GType} of the enum.
         * @since 2.8
         * @construct-only
         */
        get enum_type(): GObject.GType;

        /**
         * The {@link GObject.GType} of the enum.
         * @since 2.8
         * @construct-only
         */
        get enumType(): GObject.GType;

        /**
         * The value to display.
         * @since 2.8
         * @write-only
         * @default 0
         */
        set enum_value(val: number);

        /**
         * The value to display.
         * @since 2.8
         * @write-only
         * @default 0
         */
        set enumValue(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EnumLabel.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<EnumLabel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](enum_type: GObject.GType, value: number): EnumLabel;

        // Conflicted with Gtk.Label.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof EnumLabel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EnumLabel.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EnumLabel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EnumLabel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EnumLabel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EnumLabel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param value an enum value
         */
        set_value(value: number): void;
    }


    namespace EnumStore {
        // Signal signatures
        interface SignalSignatures extends IntStore.SignalSignatures {
            "notify::enum-type": (pspec: GObject.ParamSpec) => void;
            "notify::user-data-type": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends IntStore.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.TreeDragDest.ConstructorProps, Gtk.TreeDragSource.ConstructorProps, Gtk.TreeModel.ConstructorProps, Gtk.TreeSortable.ConstructorProps {
            enum_type: GObject.GTypeInput;
            enumType: GObject.GTypeInput;
        }
    }

    /**
     * A {@link GimpUi.IntStore} subclass that keeps enum values.
     * @gir-type Class
     */
    class EnumStore extends IntStore implements Gtk.Buildable, Gtk.TreeDragDest, Gtk.TreeDragSource, Gtk.TreeModel, Gtk.TreeSortable {
        static $gtype: GObject.GType<EnumStore>;

        // Properties
        /**
         * Sets the {@link GObject.GType} of the enum to be used in the store.
         * @since 2.4
         * @construct-only
         */
        get enum_type(): GObject.GType;

        /**
         * Sets the {@link GObject.GType} of the enum to be used in the store.
         * @since 2.4
         * @construct-only
         */
        get enumType(): GObject.GType;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EnumStore.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<EnumStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](enum_type: GObject.GType): EnumStore;

        // Conflicted with GimpUi.IntStore.new
        static ["new"](...args: never[]): any;

        static new_with_range(enum_type: GObject.GType, minimum: number, maximum: number): EnumStore;

        // Signals
        /** @signal */
        connect<K extends keyof EnumStore.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EnumStore.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EnumStore.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EnumStore.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EnumStore.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EnumStore.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Creates an icon name for each enum value in the `store` by appending
         * the value's nick to the given `icon_prefix`, separated by a hyphen.
         * 
         * See also: `gimp_enum_combo_box_set_icon_prefix()`.
         * @param icon_prefix a prefix to create icon names from enum values
         */
        set_icon_prefix(icon_prefix: string): void;

        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.ListStore.set
        set(...args: never[]): any;
    }


    namespace ExportProcedureDialog {
        // Signal signatures
        interface SignalSignatures extends ProcedureDialog.SignalSignatures {
            "notify::config": (pspec: GObject.ParamSpec) => void;
            "notify::procedure": (pspec: GObject.ParamSpec) => void;
            "notify::help-func": (pspec: GObject.ParamSpec) => void;
            "notify::help-id": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::use-header-bar": (pspec: GObject.ParamSpec) => void;
            "notify::accept-focus": (pspec: GObject.ParamSpec) => void;
            "notify::application": (pspec: GObject.ParamSpec) => void;
            "notify::attached-to": (pspec: GObject.ParamSpec) => void;
            "notify::decorated": (pspec: GObject.ParamSpec) => void;
            "notify::default-height": (pspec: GObject.ParamSpec) => void;
            "notify::default-width": (pspec: GObject.ParamSpec) => void;
            "notify::deletable": (pspec: GObject.ParamSpec) => void;
            "notify::destroy-with-parent": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-map": (pspec: GObject.ParamSpec) => void;
            "notify::focus-visible": (pspec: GObject.ParamSpec) => void;
            "notify::gravity": (pspec: GObject.ParamSpec) => void;
            "notify::has-resize-grip": (pspec: GObject.ParamSpec) => void;
            "notify::has-toplevel-focus": (pspec: GObject.ParamSpec) => void;
            "notify::hide-titlebar-when-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-active": (pspec: GObject.ParamSpec) => void;
            "notify::is-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonics-visible": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::resizable": (pspec: GObject.ParamSpec) => void;
            "notify::resize-grip-visible": (pspec: GObject.ParamSpec) => void;
            "notify::role": (pspec: GObject.ParamSpec) => void;
            "notify::screen": (pspec: GObject.ParamSpec) => void;
            "notify::skip-pager-hint": (pspec: GObject.ParamSpec) => void;
            "notify::skip-taskbar-hint": (pspec: GObject.ParamSpec) => void;
            "notify::startup-id": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::transient-for": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::type-hint": (pspec: GObject.ParamSpec) => void;
            "notify::urgency-hint": (pspec: GObject.ParamSpec) => void;
            "notify::window-position": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends ProcedureDialog.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class ExportProcedureDialog extends ProcedureDialog implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<ExportProcedureDialog>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ExportProcedureDialog.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ExportProcedureDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](procedure: Gimp.ExportProcedure, config: Gimp.ProcedureConfig, image: Gimp.Image): ExportProcedureDialog;

        // Conflicted with GimpUi.ProcedureDialog.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof ExportProcedureDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ExportProcedureDialog.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ExportProcedureDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ExportProcedureDialog.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ExportProcedureDialog.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ExportProcedureDialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param property 
         */
        add_metadata(property: string): void;
    }


    namespace FileChooser {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::action": (pspec: GObject.ParamSpec) => void;
            "notify::file": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            action: Gimp.FileChooserAction;
            file: Gio.File;
            label: (string | null);
            title: (string | null);
        }
    }

    /**
     * The chooser contains an optional label and other interface allowing
     * to select files for different use cases.
     * @gir-type Class
     * @since 3.0
     */
    class FileChooser extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<FileChooser>;

        // Properties
        /**
         * The action determining the chooser UI.
         * @since 3.0
         * @default Gimp.FileChooserAction.OPEN
         */
        get action(): Gimp.FileChooserAction;
        set action(val: Gimp.FileChooserAction);

        /**
         * The currently selected file.
         * @since 3.0
         */
        get file(): Gio.File;
        set file(val: Gio.File);

        /**
         * Label text with mnemonic.
         * @since 3.0
         * @default null
         */
        get label(): (string | null);
        set label(val: (string | null));

        /**
         * The title to be used for the file selection popup dialog.
         * If `null`, the "label" property is used instead.
         * @since 3.0
         * @default File Selection
         */
        get title(): (string | null);
        set title(val: (string | null));

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileChooser.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<FileChooser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](action: Gimp.FileChooserAction, label: (string | null), title: (string | null), file: (Gio.File | null)): FileChooser;

        // Conflicted with Gtk.Box.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof FileChooser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileChooser.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FileChooser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileChooser.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FileChooser.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FileChooser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the current action.
         * @returns the action which determined the UI of `chooser`.
         */
        get_action(): Gimp.FileChooserAction;

        /**
         * Gets the currently selected file.
         * @returns an internal copy of the file which must not be freed.
         */
        get_file(): Gio.File;

        /**
         * Gets the current label text. A `null` label means that the label
         * widget is hidden.
         * 
         * Note: the label text may contain a mnemonic.
         * @returns the label set.
         */
        get_label(): (string | null);

        /**
         * Returns the label widget. This can be useful for instance when
         * aligning dialog's widgets with a {@link Gtk.SizeGroup}.
         * @returns the {@link Gtk.Widget} showing the label text.
         */
        get_label_widget(): Gtk.Widget;

        /**
         * Gets the text currently used for the file dialog's title and for
         * entry's placeholder text.
         * 
         * A `null` value means that the file dialog uses default title and the
         * entry has no placeholder text.
         * @returns the text used for the title of `chooser`'s dialog.
         */
        get_title(): (string | null);

        /**
         * Changes how `chooser` is set to select a file. It may completely
         * change the internal widget structure so you should not depend on a
         * specific widget composition.
         * 
         * Warning: with GTK deprecations, we may have soon to change the
         * internal implementation. So this is all the more reason for you not
         * to rely on specific child widgets being present (e.g.: we use
         * currently {@link Gtk.FileChooserButton} internally but it was removed
         * in GTK4 so we will eventually replace it by custom code). We will
         * also likely move to native file dialogs at some point.
         * 
         * {@link Gimp.FileChooserAction.ANY} is not a valid value for `action`.
         * @param action Action to set.
         */
        set_action(action: Gimp.FileChooserAction): void;

        /**
         * Sets the currently selected file.
         * @param file File to set.
         */
        set_file(file: Gio.File): void;

        /**
         * Set the label text with mnemonic.
         * 
         * Setting a `null` label text will hide the label widget.
         * @param text Label text.
         */
        set_label(text: (string | null)): void;

        /**
         * Set the text to be used for the file dialog's title and for entry's
         * placeholder text.
         * 
         * Setting a `null` title `text` will mean that the file dialog will use a
         * generic title and there will be no placeholder text in the entry.
         * @param text Dialog's title text.
         */
        set_title(text: (string | null)): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace FontChooser {
        // Signal signatures
        interface SignalSignatures extends ResourceChooser.SignalSignatures {
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::resource": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends ResourceChooser.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {

        }
    }

    /**
     * A button which pops up a font selection dialog.
     * @gir-type Class
     */
    class FontChooser extends ResourceChooser implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<FontChooser>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FontChooser.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<FontChooser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](title: (string | null), label: (string | null), font: (Gimp.Font | null)): FontChooser;

        // Conflicted with Gtk.Box.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof FontChooser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FontChooser.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FontChooser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FontChooser.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FontChooser.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FontChooser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace Frame {
        // Signal signatures
        interface SignalSignatures extends Gtk.Frame.SignalSignatures {
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::label-widget": (pspec: GObject.ParamSpec) => void;
            "notify::label-xalign": (pspec: GObject.ParamSpec) => void;
            "notify::label-yalign": (pspec: GObject.ParamSpec) => void;
            "notify::shadow-type": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Frame.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {

        }
    }

    /**
     * A widget providing a HIG-compliant subclass of {@link Gtk.Frame}.
     * @gir-type Class
     */
    class Frame extends Gtk.Frame implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Frame>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Frame.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Frame.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](label: (string | null)): Frame;

        // Signals
        /** @signal */
        connect<K extends keyof Frame.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Frame.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Frame.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Frame.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Frame.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Frame.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace GradientChooser {
        // Signal signatures
        interface SignalSignatures extends ResourceChooser.SignalSignatures {
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::resource": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends ResourceChooser.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {

        }
    }

    /**
     * A button which pops up a gradient select dialog.
     * @gir-type Class
     */
    class GradientChooser extends ResourceChooser implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<GradientChooser>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GradientChooser.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GradientChooser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](title: (string | null), label: (string | null), gradient: (Gimp.Gradient | null)): GradientChooser;

        // Conflicted with Gtk.Box.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof GradientChooser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GradientChooser.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GradientChooser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GradientChooser.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GradientChooser.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GradientChooser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace HintBox {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::hint": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            hint: string;
            icon_name: string;
            iconName: string;
        }
    }

    /**
     * Displays a wilber icon and a text.
     * @gir-type Class
     */
    class HintBox extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<HintBox>;

        // Properties
        /**
         * @construct-only
         * @default null
         */
        get hint(): string;

        /**
         * @construct-only
         * @default dialog-information
         */
        get icon_name(): string;

        /**
         * @construct-only
         * @default dialog-information
         */
        get iconName(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HintBox.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<HintBox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](hint: string): HintBox;

        // Conflicted with Gtk.Box.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof HintBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HintBox.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof HintBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HintBox.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof HintBox.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<HintBox.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace ImageChooser {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::image": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            image: Gimp.Image;
            label: string;
            title: string;
        }
    }

    /**
     * The chooser contains an optional label and a button which queries the core
     * process to pop up an image selection dialog.
     * @gir-type Class
     * @since 3.0
     */
    class ImageChooser extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<ImageChooser>;

        // Properties
        /**
         * The currently selected image.
         * @since 3.0
         */
        get image(): Gimp.Image;
        set image(val: Gimp.Image);

        /**
         * Label text with mnemonic.
         * @since 3.0
         * @construct-only
         * @default null
         */
        get label(): string;

        /**
         * The title to be used for the image selection popup dialog.
         * @since 3.0
         * @construct-only
         * @default Image Selection
         */
        get title(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ImageChooser.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ImageChooser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](title: (string | null), label: (string | null), image: (Gimp.Image | null)): ImageChooser;

        // Conflicted with Gtk.Box.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof ImageChooser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ImageChooser.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ImageChooser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ImageChooser.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ImageChooser.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ImageChooser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the currently selected image.
         * @returns an internal copy of the image which must not be freed.
         */
        get_image(): Gimp.Image;

        /**
         * Returns the label widget.
         * @returns the {@link Gtk.Widget} showing the label text.
         */
        get_label(): Gtk.Widget;

        /**
         * Sets the currently selected image.
         * This will select the image in both the button and any chooser popup.
         * @param image Image to set.
         */
        set_image(image: Gimp.Image): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace ImageComboBox {
        // Signal signatures
        interface SignalSignatures extends IntComboBox.SignalSignatures {
            "notify::ellipsize": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::layout": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::active-id": (pspec: GObject.ParamSpec) => void;
            "notify::add-tearoffs": (pspec: GObject.ParamSpec) => void;
            "notify::button-sensitivity": (pspec: GObject.ParamSpec) => void;
            "notify::cell-area": (pspec: GObject.ParamSpec) => void;
            "notify::column-span-column": (pspec: GObject.ParamSpec) => void;
            "notify::entry-text-column": (pspec: GObject.ParamSpec) => void;
            "notify::has-entry": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::id-column": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::popup-fixed-width": (pspec: GObject.ParamSpec) => void;
            "notify::popup-shown": (pspec: GObject.ParamSpec) => void;
            "notify::row-span-column": (pspec: GObject.ParamSpec) => void;
            "notify::tearoff-title": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-width": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends IntComboBox.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.CellLayout.ConstructorProps {

        }
    }

    /**
     * A widget providing a popup menu of images.
     * @gir-type Class
     */
    class ImageComboBox extends IntComboBox implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.CellLayout {
        static $gtype: GObject.GType<ImageComboBox>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ImageComboBox.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ImageComboBox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](constraint: (ImageConstraintFunc | null)): ImageComboBox;

        // Conflicted with GimpUi.IntComboBox.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect_after<K extends keyof ImageComboBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ImageComboBox.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ImageComboBox.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ImageComboBox.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;

        /**
         * Returns whether the widget should grab focus when it is clicked with the mouse.
         * See `gtk_widget_set_focus_on_click()`.
         * @returns `true` if the widget should grab focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;

        /**
         * Sets whether the widget should grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the widget should grab focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
    }


    namespace IntComboBox {
        // Signal signatures
        interface SignalSignatures extends Gtk.ComboBox.SignalSignatures {
            "notify::ellipsize": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::layout": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::active-id": (pspec: GObject.ParamSpec) => void;
            "notify::add-tearoffs": (pspec: GObject.ParamSpec) => void;
            "notify::button-sensitivity": (pspec: GObject.ParamSpec) => void;
            "notify::cell-area": (pspec: GObject.ParamSpec) => void;
            "notify::column-span-column": (pspec: GObject.ParamSpec) => void;
            "notify::entry-text-column": (pspec: GObject.ParamSpec) => void;
            "notify::has-entry": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::id-column": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::popup-fixed-width": (pspec: GObject.ParamSpec) => void;
            "notify::popup-shown": (pspec: GObject.ParamSpec) => void;
            "notify::row-span-column": (pspec: GObject.ParamSpec) => void;
            "notify::tearoff-title": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-width": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::editing-canceled": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.ComboBox.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.CellLayout.ConstructorProps {
            ellipsize: Pango.EllipsizeMode;
            label: string;
            layout: IntComboBoxLayout;
            value: number;
        }
    }

    /**
     * A widget providing a popup menu of integer values (e.g. enums).
     * @gir-type Class
     */
    class IntComboBox extends Gtk.ComboBox implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.CellLayout {
        static $gtype: GObject.GType<IntComboBox>;

        // Properties
        /**
         * Specifies the preferred place to ellipsize text in the combo-box,
         * if the cell renderer does not have enough room to display the
         * entire string.
         * @since 2.4
         * @default Pango.EllipsizeMode.NONE
         */
        get ellipsize(): Pango.EllipsizeMode;
        set ellipsize(val: Pango.EllipsizeMode);

        /**
         * Sets a label on the combo-box, see `gimp_int_combo_box_set_label()`.
         * @since 2.10
         * @default null
         */
        get label(): string;
        set label(val: string);

        /**
         * Specifies the combo box layout.
         * @since 2.10
         * @default GimpUi.IntComboBoxLayout.ABBREVIATED
         */
        get layout(): IntComboBoxLayout;
        set layout(val: IntComboBoxLayout);

        /**
         * The active value (different from the "active" property of
         * GtkComboBox which is the active index).
         * @since 3.0
         * @default 0
         */
        get value(): number;
        set value(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: IntComboBox.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<IntComboBox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](labels: string[]): IntComboBox;

        // Conflicted with Gtk.ComboBox.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof IntComboBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, IntComboBox.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof IntComboBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, IntComboBox.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof IntComboBox.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<IntComboBox.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * A convenience function that sets the initial `value` of a
         * {@link GimpUi.IntComboBox} and connects `callback` to the "changed"
         * signal.
         * 
         * This function also calls the `callback` once after setting the
         * initial `value`. This is often convenient when working with combo
         * boxes that select a default active item, like for example
         * `gimp_drawable_combo_box_new()`. If you pass an invalid initial
         * `value`, the `callback` will be called with the default item active.
         * @param value the value to set
         * @param callback a callback to connect to the `combo_box`'s "changed" signal
         * @returns the signal handler ID as returned by `g_signal_connect()`
         */
        connect(value: number, callback: GObject.Callback): number;

        /**
         * @param args 
         */
        connect(...args: never[]): any;

        /**
         * Retrieves the value of the selected (active) item in the `combo_box`.
         * @returns `true` if `value` has been set or `false` if no item was               active.
         */
        get_active(): [boolean, number];

        /**
         * @param args 
         */
    // Conflicted with Gtk.ComboBox.get_active
        get_active(...args: never[]): any;

        /**
         * Retrieves the user-data of the selected (active) item in the `combo_box`.
         * @returns `true` if `user_data` has been set or `false` if no item was               active.
         */
        get_active_user_data(): [boolean, null];

        /**
         * Returns the label previously set with `gimp_int_combo_box_set_label()`,
         * or `null`,
         * @returns the `combo_box`' label.
         */
        get_label(): string;

        /**
         * Returns the layout of `combo_box`
         * @returns the `combo_box`'s layout.
         */
        get_layout(): IntComboBoxLayout;

        /**
         * Looks up the item that belongs to the given `value` and makes it the
         * selected item in the `combo_box`.
         * @param value an integer value
         * @returns `true` on success (value changed or not) or `false` if there          was no item for this value.
         */
        set_active(value: number): boolean;

        /**
         * @param args 
         */
    // Conflicted with Gtk.ComboBox.set_active
        set_active(...args: never[]): any;

        /**
         * Looks up the item that has the given `user_data` and makes it the
         * selected item in the `combo_box`.
         * @param user_data an integer value
         * @returns `true` on success or `false` if there was no item for               this user-data.
         */
        set_active_by_user_data(user_data: null): boolean;

        /**
         * Sets a caption on the `combo_box` that will be displayed
         * left-aligned inside the box. When a label is set, the remaining
         * contents of the box will be right-aligned. This is useful for
         * places where screen estate is rare, like in tool options.
         * @param label a string to be shown as label
         */
        set_label(label: string): void;

        /**
         * Sets the layout of `combo_box` to `layout`.
         * @param layout the combo box layout
         */
        set_layout(layout: IntComboBoxLayout): void;

        /**
         * Sets a function that is used to decide about the sensitivity of
         * rows in the `combo_box`. Use this if you want to set certain rows
         * insensitive.
         * 
         * Calling `gtk_widget_queue_draw()` on the `combo_box` will cause the
         * sensitivity to be updated.
         * @param func a function that returns a boolean value, or `null` to unset
         */
        set_sensitivity(func: IntSensitivityFunc): void;

        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
          * @category Inherited from Gtk.CellEditable
         */
        get editing_canceled(): boolean;
        set editing_canceled(val: boolean);

        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
          * @category Inherited from Gtk.CellEditable
         */
        get editingCanceled(): boolean;
        set editingCanceled(val: boolean);

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         */
        editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         */
        remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         */
        start_editing(event: (Gdk.Event | null)): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         * @virtual
         */
        vfunc_editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         * @virtual
         */
        vfunc_remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         * @virtual
         */
        vfunc_start_editing(event: (Gdk.Event | null)): void;

        /**
         * Adds an attribute mapping to the list in `cell_layout`.
         * 
         * The `column` is the column of the model to get a value from, and the
         * `attribute` is the parameter on `cell` to be set from the value. So for
         * example if column 2 of the model contains strings, you could have the
         * “text” attribute of a {@link Gtk.CellRendererText} get its values from column 2.
         * @param cell a {@link Gtk.CellRenderer}
         * @param attribute an attribute on the renderer
         * @param column the column position on the model to get the attribute from
         */
        add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void;

        /**
         * Unsets all the mappings on all renderers on `cell_layout` and
         * removes all renderers from `cell_layout`.
         */
        clear(): void;

        /**
         * Clears all existing attributes previously set with
         * `gtk_cell_layout_set_attributes()`.
         * @param cell a {@link Gtk.CellRenderer} to clear the attribute mapping on
         */
        clear_attributes(cell: Gtk.CellRenderer): void;

        /**
         * Returns the underlying {@link Gtk.CellArea} which might be `cell_layout`
         * if called on a {@link Gtk.CellArea} or might be `null` if no {@link Gtk.CellArea}
         * is used by `cell_layout`.
         * @returns the cell area used by `cell_layout`, or `null` in case no cell area is used.
         */
        get_area(): (Gtk.CellArea | null);

        /**
         * Returns the cell renderers which have been added to `cell_layout`.
         * @returns a list of cell renderers. The list, but not the renderers has     been newly allocated and should be freed with `g_list_free()`     when no longer needed.
         */
        get_cells(): Gtk.CellRenderer[];

        /**
         * Adds the `cell` to the end of `cell_layout`. If `expand` is `false`, then the
         * `cell` is allocated no more space than it needs. Any unused space is
         * divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         */
        pack_end(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Packs the `cell` into the beginning of `cell_layout`. If `expand` is `false`,
         * then the `cell` is allocated no more space than it needs. Any unused space
         * is divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         */
        pack_start(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Re-inserts `cell` at `position`.
         * 
         * Note that `cell` has already to be packed into `cell_layout`
         * for this to function properly.
         * @param cell a {@link Gtk.CellRenderer} to reorder
         * @param position new position to insert `cell` at
         */
        reorder(cell: Gtk.CellRenderer, position: number): void;

        /**
         * Sets the {@link Gtk.CellLayoutDataFunc} to use for `cell_layout`.
         * 
         * This function is used instead of the standard attributes mapping
         * for setting the column value, and should set the value of `cell_layout`’s
         * cell renderer(s) as appropriate.
         * 
         * `func` may be `null` to remove a previously set function.
         * @param cell a {@link Gtk.CellRenderer}
         * @param func the {@link Gtk.CellLayoutDataFunc} to use, or `null`
         */
        set_cell_data_func(cell: Gtk.CellRenderer, func: (Gtk.CellLayoutDataFunc | null)): void;

        /**
         * Adds an attribute mapping to the list in `cell_layout`.
         * 
         * The `column` is the column of the model to get a value from, and the
         * `attribute` is the parameter on `cell` to be set from the value. So for
         * example if column 2 of the model contains strings, you could have the
         * “text” attribute of a {@link Gtk.CellRendererText} get its values from column 2.
         * @param cell a {@link Gtk.CellRenderer}
         * @param attribute an attribute on the renderer
         * @param column the column position on the model to get the attribute from
         * @virtual
         */
        vfunc_add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void;

        /**
         * Unsets all the mappings on all renderers on `cell_layout` and
         * removes all renderers from `cell_layout`.
         * @virtual
         */
        vfunc_clear(): void;

        /**
         * Clears all existing attributes previously set with
         * `gtk_cell_layout_set_attributes()`.
         * @param cell a {@link Gtk.CellRenderer} to clear the attribute mapping on
         * @virtual
         */
        vfunc_clear_attributes(cell: Gtk.CellRenderer): void;

        /**
         * Returns the underlying {@link Gtk.CellArea} which might be `cell_layout`
         * if called on a {@link Gtk.CellArea} or might be `null` if no {@link Gtk.CellArea}
         * is used by `cell_layout`.
         * @virtual
         */
        vfunc_get_area(): (Gtk.CellArea | null);

        /**
         * Returns the cell renderers which have been added to `cell_layout`.
         * @virtual
         */
        vfunc_get_cells(): Gtk.CellRenderer[];

        /**
         * Adds the `cell` to the end of `cell_layout`. If `expand` is `false`, then the
         * `cell` is allocated no more space than it needs. Any unused space is
         * divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         * @virtual
         */
        vfunc_pack_end(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Packs the `cell` into the beginning of `cell_layout`. If `expand` is `false`,
         * then the `cell` is allocated no more space than it needs. Any unused space
         * is divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         * @virtual
         */
        vfunc_pack_start(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Re-inserts `cell` at `position`.
         * 
         * Note that `cell` has already to be packed into `cell_layout`
         * for this to function properly.
         * @param cell a {@link Gtk.CellRenderer} to reorder
         * @param position new position to insert `cell` at
         * @virtual
         */
        vfunc_reorder(cell: Gtk.CellRenderer, position: number): void;

        /**
         * Sets the {@link Gtk.CellLayoutDataFunc} to use for `cell_layout`.
         * 
         * This function is used instead of the standard attributes mapping
         * for setting the column value, and should set the value of `cell_layout`’s
         * cell renderer(s) as appropriate.
         * 
         * `func` may be `null` to remove a previously set function.
         * @param cell a {@link Gtk.CellRenderer}
         * @param func the {@link Gtk.CellLayoutDataFunc} to use, or `null`
         * @virtual
         */
        vfunc_set_cell_data_func(cell: Gtk.CellRenderer, func: (Gtk.CellLayoutDataFunc | null)): void;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;

        /**
         * Returns whether the widget should grab focus when it is clicked with the mouse.
         * See `gtk_widget_set_focus_on_click()`.
         * @returns `true` if the widget should grab focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;

        /**
         * Sets whether the widget should grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the widget should grab focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
    }


    namespace IntRadioFrame {
        // Signal signatures
        interface SignalSignatures extends Frame.SignalSignatures {
            "notify::store": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::label-widget": (pspec: GObject.ParamSpec) => void;
            "notify::label-xalign": (pspec: GObject.ParamSpec) => void;
            "notify::label-yalign": (pspec: GObject.ParamSpec) => void;
            "notify::shadow-type": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Frame.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            store: IntStore;
            value: number;
        }
    }

    /**
     * A widget providing a frame with title, containing grouped radio
     * buttons, each associated with an integer value and random user data.
     * @gir-type Class
     */
    class IntRadioFrame extends Frame implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<IntRadioFrame>;

        // Properties
        /**
         * The %GimpIntStore from which the radio frame takes the values shown
         * in the list.
         * @since 3.0
         */
        get store(): IntStore;
        set store(val: IntStore);

        /**
         * The active value
         * @since 3.0
         * @default 0
         */
        get value(): number;
        set value(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: IntRadioFrame.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<IntRadioFrame.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](labels: string[]): IntRadioFrame;

        // Conflicted with GimpUi.Frame.new
        static ["new"](...args: never[]): any;

        static new_from_store(title: string, store: IntStore): IntRadioFrame;

        // Signals
        /** @signal */
        connect<K extends keyof IntRadioFrame.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, IntRadioFrame.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof IntRadioFrame.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, IntRadioFrame.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof IntRadioFrame.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<IntRadioFrame.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns the value of the active item.
         */
        get_active(): number;

        /**
         * Retrieves the user-data of the selected (active) item in the `radio_frame`.
         * @returns `true` if `user_data` has been set or `false` if no item was               active.
         */
        get_active_user_data(): [boolean, null];

        /**
         * Looks up the item that belongs to the given `value` and makes it the
         * selected item in the `radio_frame`.
         * @param value an integer value
         * @returns `true` on success (value changed or not) or `false` if there          was no item for this value.
         */
        set_active(value: number): boolean;

        /**
         * Looks up the item that has the given `user_data` and makes it the
         * selected item in the `radio_frame`.
         * @param user_data an integer value
         * @returns `true` on success or `false` if there was no item for          this user-data.
         */
        set_active_by_user_data(user_data: null): boolean;

        /**
         * Sets a function that is used to decide about the sensitivity of radio
         * buttons in the `radio_frame`. Use this if you want to set certain
         * radio buttons insensitive.
         * 
         * Calling `gtk_widget_queue_draw()` on the `radio_frame` will cause the
         * sensitivity to be updated.
         * @param func a function that returns a boolean value, or `null` to unset
         */
        set_sensitivity(func: IntRadioFrameSensitivityFunc): void;

        /**
         * Change the `frame`'s title, possibly with a mnemonic.
         * @param title the frame title or `null` for none.
         * @param with_mnemonic whether `title` has a mnemonic.
         */
        set_title(title: string, with_mnemonic: boolean): void;
    }


    namespace IntStore {
        // Signal signatures
        interface SignalSignatures extends Gtk.ListStore.SignalSignatures {
            "notify::user-data-type": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.ListStore.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.TreeDragDest.ConstructorProps, Gtk.TreeDragSource.ConstructorProps, Gtk.TreeModel.ConstructorProps, Gtk.TreeSortable.ConstructorProps {
            user_data_type: GObject.GTypeInput;
            userDataType: GObject.GTypeInput;
        }
    }

    /**
     * A model for integer based name-value pairs (e.g. enums)
     * @gir-type Class
     */
    class IntStore extends Gtk.ListStore implements Gtk.Buildable, Gtk.TreeDragDest, Gtk.TreeDragSource, Gtk.TreeModel, Gtk.TreeSortable {
        static $gtype: GObject.GType<IntStore>;

        // Properties
        /**
         * Sets the {@link GObject.GType} for the GIMP_INT_STORE_USER_DATA column.
         * 
         * You need to set this property when constructing the store if you want
         * to use the GIMP_INT_STORE_USER_DATA column and want to have the store
         * handle ref-counting of your user data.
         * @since 2.4
         * @construct-only
         */
        get user_data_type(): GObject.GType;

        /**
         * Sets the {@link GObject.GType} for the GIMP_INT_STORE_USER_DATA column.
         * 
         * You need to set this property when constructing the store if you want
         * to use the GIMP_INT_STORE_USER_DATA column and want to have the store
         * handle ref-counting of your user data.
         * @since 2.4
         * @construct-only
         */
        get userDataType(): GObject.GType;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: IntStore.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<IntStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](labels: string[]): IntStore;

        // Conflicted with Gtk.ListStore.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof IntStore.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, IntStore.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof IntStore.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, IntStore.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof IntStore.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<IntStore.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Iterate over the `model` looking for `user_data`.
         * @param model a {@link GimpUi.IntStore}
         * @param user_data a gpointer "user-data" to lookup in the `model`
         */
        static lookup_by_user_data(model: Gtk.TreeModel, user_data: null): [boolean, Gtk.TreeIter];

        /**
         * Iterate over the `model` looking for `value`.
         * @param model a {@link GimpUi.IntStore}
         * @param value an integer value to lookup in the `model`
         */
        static lookup_by_value(model: Gtk.TreeModel, value: number): [boolean, Gtk.TreeIter];

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         */
        add_child(builder: Gtk.Builder, child: GObject.Object, type: (string | null)): void;

        /**
         * Constructs a child of `buildable` with the name `name`.
         * 
         * {@link Gtk.Builder} calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param name name of child to construct
         * @returns the constructed child
         */
        construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

        /**
         * This is similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         */
        custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @returns `true` if a object has a custom implementation, `false`          if it doesn't.
         */
        custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, GLib.MarkupParser, null];

        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @returns the internal child of the buildable object
         */
        get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Gets the name of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the
         * [GtkBuilder UI definition][BUILDER-UI]
         * used to construct the `buildable`.
         * @returns the name set with `gtk_buildable_set_name()`
         */
        get_name(): string;

        /**
         * Called when the builder finishes the parsing of a
         * [GtkBuilder UI definition][BUILDER-UI].
         * Note that this will be called once for each time
         * `gtk_builder_add_from_file()` or `gtk_builder_add_from_string()`
         * is called on a builder.
         * @param builder a {@link Gtk.Builder}
         */
        parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param name name of property
         * @param value value of property
         */
        set_buildable_property(builder: Gtk.Builder, name: string, value: (GObject.Value | any)): void;

        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         */
        set_name(name: string): void;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: (string | null)): void;

        /**
         * Constructs a child of `buildable` with the name `name`.
         * 
         * {@link Gtk.Builder} calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param name name of child to construct
         * @virtual
         */
        vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

        /**
         * This is similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, GLib.MarkupParser, never];

        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Gets the name of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the
         * [GtkBuilder UI definition][BUILDER-UI]
         * used to construct the `buildable`.
         * @virtual
         */
        vfunc_get_name(): string;

        /**
         * Called when the builder finishes the parsing of a
         * [GtkBuilder UI definition][BUILDER-UI].
         * Note that this will be called once for each time
         * `gtk_builder_add_from_file()` or `gtk_builder_add_from_string()`
         * is called on a builder.
         * @param builder a {@link Gtk.Builder}
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param name name of property
         * @param value value of property
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         * @virtual
         */
        vfunc_set_name(name: string): void;

        /**
         * Asks the {@link Gtk.TreeDragDest} to insert a row before the path `dest`,
         * deriving the contents of the row from `selection_data`. If `dest` is
         * outside the tree so that inserting before it is impossible, `false`
         * will be returned. Also, `false` may be returned if the new row is
         * not created for some model-specific reason.  Should robustly handle
         * a `dest` no longer found in the model!
         * @param dest row to drop in front of
         * @param selection_data data to drop
         * @returns whether a new row was created before position `dest`
         */
        drag_data_received(dest: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;

        /**
         * Determines whether a drop is possible before the given `dest_path`,
         * at the same depth as `dest_path`. i.e., can we drop the data in
         * `selection_data` at that location. `dest_path` does not have to
         * exist; the return value will almost certainly be `false` if the
         * parent of `dest_path` doesn’t exist, though.
         * @param dest_path destination row
         * @param selection_data the data being dragged
         * @returns `true` if a drop is possible before `dest_path`
         */
        row_drop_possible(dest_path: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;

        /**
         * Asks the {@link Gtk.TreeDragDest} to insert a row before the path `dest`,
         * deriving the contents of the row from `selection_data`. If `dest` is
         * outside the tree so that inserting before it is impossible, `false`
         * will be returned. Also, `false` may be returned if the new row is
         * not created for some model-specific reason.  Should robustly handle
         * a `dest` no longer found in the model!
         * @param dest row to drop in front of
         * @param selection_data data to drop
         * @virtual
         */
        vfunc_drag_data_received(dest: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;

        /**
         * Determines whether a drop is possible before the given `dest_path`,
         * at the same depth as `dest_path`. i.e., can we drop the data in
         * `selection_data` at that location. `dest_path` does not have to
         * exist; the return value will almost certainly be `false` if the
         * parent of `dest_path` doesn’t exist, though.
         * @param dest_path destination row
         * @param selection_data the data being dragged
         * @virtual
         */
        vfunc_row_drop_possible(dest_path: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;

        /**
         * Asks the {@link Gtk.TreeDragSource} to delete the row at `path`, because
         * it was moved somewhere else via drag-and-drop. Returns `false`
         * if the deletion fails because `path` no longer exists, or for
         * some model-specific reason. Should robustly handle a `path` no
         * longer found in the model!
         * @param path row that was being dragged
         * @returns `true` if the row was successfully deleted
         */
        drag_data_delete(path: Gtk.TreePath): boolean;

        /**
         * Asks the {@link Gtk.TreeDragSource} to fill in `selection_data` with a
         * representation of the row at `path`. `selection_data`->target gives
         * the required type of the data.  Should robustly handle a `path` no
         * longer found in the model!
         * @param path row that was dragged
         * @param selection_data a {@link Gtk.SelectionData} to fill with data                  from the dragged row
         * @returns `true` if data of the required type was provided
         */
        drag_data_get(path: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;

        /**
         * Asks the {@link Gtk.TreeDragSource} whether a particular row can be used as
         * the source of a DND operation. If the source doesn’t implement
         * this interface, the row is assumed draggable.
         * @param path row on which user is initiating a drag
         * @returns `true` if the row can be dragged
         */
        row_draggable(path: Gtk.TreePath): boolean;

        /**
         * Asks the {@link Gtk.TreeDragSource} to delete the row at `path`, because
         * it was moved somewhere else via drag-and-drop. Returns `false`
         * if the deletion fails because `path` no longer exists, or for
         * some model-specific reason. Should robustly handle a `path` no
         * longer found in the model!
         * @param path row that was being dragged
         * @virtual
         */
        vfunc_drag_data_delete(path: Gtk.TreePath): boolean;

        /**
         * Asks the {@link Gtk.TreeDragSource} to fill in `selection_data` with a
         * representation of the row at `path`. `selection_data`->target gives
         * the required type of the data.  Should robustly handle a `path` no
         * longer found in the model!
         * @param path row that was dragged
         * @param selection_data a {@link Gtk.SelectionData} to fill with data                  from the dragged row
         * @virtual
         */
        vfunc_drag_data_get(path: Gtk.TreePath, selection_data: Gtk.SelectionData): boolean;

        /**
         * Asks the {@link Gtk.TreeDragSource} whether a particular row can be used as
         * the source of a DND operation. If the source doesn’t implement
         * this interface, the row is assumed draggable.
         * @param path row on which user is initiating a drag
         * @virtual
         */
        vfunc_row_draggable(path: Gtk.TreePath): boolean;

        /**
         * Creates a new {@link Gtk.TreeModel}, with `child_model` as the child_model
         * and `root` as the virtual root.
         * @param root A {@link Gtk.TreePath} or `null`.
         * @returns A new {@link Gtk.TreeModel}.
         */
        filter_new(root: (Gtk.TreePath | null)): Gtk.TreeModel;

        /**
         * Calls func on each node in model in a depth-first fashion.
         * 
         * If `func` returns `true`, then the tree ceases to be walked,
         * and `gtk_tree_model_foreach()` returns.
         * @param func a function to be called on each row
         */
        foreach(func: Gtk.TreeModelForeachFunc): void;

        /**
         * Returns the type of the column.
         * @param index_ the column index
         * @returns the type of the column
         */
        get_column_type(index_: number): GObject.GType;

        /**
         * Returns a set of flags supported by this interface.
         * 
         * The flags are a bitwise combination of {@link Gtk.TreeModelFlags}.
         * The flags supported should not change during the lifetime
         * of the `tree_model`.
         * @returns the flags supported by this interface
         */
        get_flags(): Gtk.TreeModelFlags;

        /**
         * Sets `iter` to a valid iterator pointing to `path`.  If `path` does
         * not exist, `iter` is set to an invalid iterator and `false` is returned.
         * @param path the {@link Gtk.TreePath}-struct
         * @returns `true`, if `iter` was set
         */
        get_iter(path: Gtk.TreePath): [boolean, Gtk.TreeIter];

        /**
         * Initializes `iter` with the first iterator in the tree
         * (the one at the path "0") and returns `true`. Returns
         * `false` if the tree is empty.
         * @returns `true`, if `iter` was set
         */
        get_iter_first(): [boolean, Gtk.TreeIter];

        /**
         * Sets `iter` to a valid iterator pointing to `path_string`, if it
         * exists. Otherwise, `iter` is left invalid and `false` is returned.
         * @param path_string a string representation of a {@link Gtk.TreePath}-struct
         * @returns `true`, if `iter` was set
         */
        get_iter_from_string(path_string: string): [boolean, Gtk.TreeIter];

        /**
         * Returns the number of columns supported by `tree_model`.
         * @returns the number of columns
         */
        get_n_columns(): number;

        /**
         * Returns a newly-created {@link Gtk.TreePath}-struct referenced by `iter`.
         * 
         * This path should be freed with `gtk_tree_path_free()`.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @returns a newly-created {@link Gtk.TreePath}-struct
         */
        get_path(iter: Gtk.TreeIter): Gtk.TreePath;

        /**
         * Generates a string representation of the iter.
         * 
         * This string is a “:” separated list of numbers.
         * For example, “4:10:0:3” would be an acceptable
         * return value for this string.
         * @param iter a {@link Gtk.TreeIter}-struct
         * @returns a newly-allocated string.     Must be freed with `g_free()`.
         */
        get_string_from_iter(iter: Gtk.TreeIter): string;

        /**
         * Initializes and sets `value` to that at `column`.
         * 
         * When done with `value`, `g_value_unset()` needs to be called
         * to free any allocated memory.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @param column the column to lookup the value at
         */
        get_value(iter: Gtk.TreeIter, column: number): unknown;

        /**
         * Sets `iter` to point to the first child of `parent`.
         * 
         * If `parent` has no children, `false` is returned and `iter` is
         * set to be invalid. `parent` will remain a valid node after this
         * function has been called.
         * 
         * If `parent` is `null` returns the first node, equivalent to
         * `gtk_tree_model_get_iter_first (tree_model, iter);`
         * @param parent the {@link Gtk.TreeIter}-struct, or `null`
         * @returns `true`, if `iter` has been set to the first child
         */
        iter_children(parent: (Gtk.TreeIter | null)): [boolean, Gtk.TreeIter];

        /**
         * Returns `true` if `iter` has children, `false` otherwise.
         * @param iter the {@link Gtk.TreeIter}-struct to test for children
         * @returns `true` if `iter` has children
         */
        iter_has_child(iter: Gtk.TreeIter): boolean;

        /**
         * Returns the number of children that `iter` has.
         * 
         * As a special case, if `iter` is `null`, then the number
         * of toplevel nodes is returned.
         * @param iter the {@link Gtk.TreeIter}-struct, or `null`
         * @returns the number of children of `iter`
         */
        iter_n_children(iter: (Gtk.TreeIter | null)): number;

        /**
         * Sets `iter` to point to the node following it at the current level.
         * 
         * If there is no next `iter`, `false` is returned and `iter` is set
         * to be invalid.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @returns `true` if `iter` has been changed to the next node
         */
        iter_next(iter: Gtk.TreeIter): boolean;

        /**
         * Sets `iter` to be the child of `parent`, using the given index.
         * 
         * The first index is 0. If `n` is too big, or `parent` has no children,
         * `iter` is set to an invalid iterator and `false` is returned. `parent`
         * will remain a valid node after this function has been called. As a
         * special case, if `parent` is `null`, then the `n`-th root node
         * is set.
         * @param parent the {@link Gtk.TreeIter}-struct to get the child from, or `null`.
         * @param n the index of the desired child
         * @returns `true`, if `parent` has an `n`-th child
         */
        iter_nth_child(parent: (Gtk.TreeIter | null), n: number): [boolean, Gtk.TreeIter];

        /**
         * Sets `iter` to be the parent of `child`.
         * 
         * If `child` is at the toplevel, and doesn’t have a parent, then
         * `iter` is set to an invalid iterator and `false` is returned.
         * `child` will remain a valid node after this function has been
         * called.
         * 
         * `iter` will be initialized before the lookup is performed, so `child`
         * and `iter` cannot point to the same memory location.
         * @param child the {@link Gtk.TreeIter}-struct
         * @returns `true`, if `iter` is set to the parent of `child`
         */
        iter_parent(child: Gtk.TreeIter): [boolean, Gtk.TreeIter];

        /**
         * Sets `iter` to point to the previous node at the current level.
         * 
         * If there is no previous `iter`, `false` is returned and `iter` is
         * set to be invalid.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @returns `true` if `iter` has been changed to the previous node
         */
        iter_previous(iter: Gtk.TreeIter): boolean;

        /**
         * Lets the tree ref the node.
         * 
         * This is an optional method for models to implement.
         * To be more specific, models may ignore this call as it exists
         * primarily for performance reasons.
         * 
         * This function is primarily meant as a way for views to let
         * caching models know when nodes are being displayed (and hence,
         * whether or not to cache that node). Being displayed means a node
         * is in an expanded branch, regardless of whether the node is currently
         * visible in the viewport. For example, a file-system based model
         * would not want to keep the entire file-hierarchy in memory,
         * just the sections that are currently being displayed by
         * every current view.
         * 
         * A model should be expected to be able to get an iter independent
         * of its reffed state.
         * @param iter the {@link Gtk.TreeIter}-struct
         */
        ref_node(iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_changed | Gtk.TreeModel::row-changed} signal on `tree_model`.
         * @param path a {@link Gtk.TreePath}-struct pointing to the changed row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the changed row
         */
        row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_deleted | Gtk.TreeModel::row-deleted} signal on `tree_model`.
         * 
         * This should be called by models after a row has been removed.
         * The location pointed to by `path` should be the location that
         * the row previously was at. It may not be a valid location anymore.
         * 
         * Nodes that are deleted are not unreffed, this means that any
         * outstanding references on the deleted node should not be released.
         * @param path a {@link Gtk.TreePath}-struct pointing to the previous location of     the deleted row
         */
        row_deleted(path: Gtk.TreePath): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_has_child_toggled | Gtk.TreeModel::row-has-child-toggled} signal on
         * `tree_model`. This should be called by models after the child
         * state of a node changes.
         * @param path a {@link Gtk.TreePath}-struct pointing to the changed row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the changed row
         */
        row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_inserted | Gtk.TreeModel::row-inserted} signal on `tree_model`.
         * @param path a {@link Gtk.TreePath}-struct pointing to the inserted row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the inserted row
         */
        row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.rows_reordered | Gtk.TreeModel::rows-reordered} signal on `tree_model`.
         * 
         * This should be called by models when their rows have been
         * reordered.
         * @param path a {@link Gtk.TreePath}-struct pointing to the tree node whose children     have been reordered
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the node     whose children have been reordered, or `null` if the depth     of `path` is 0
         * @param new_order an array of integers     mapping the current position of each child to its old     position before the re-ordering,     i.e. `new_order``[newpos] = oldpos`
         */
        rows_reordered(path: Gtk.TreePath, iter: (Gtk.TreeIter | null), new_order: number[]): void;

        /**
         * Lets the tree unref the node.
         * 
         * This is an optional method for models to implement.
         * To be more specific, models may ignore this call as it exists
         * primarily for performance reasons. For more information on what
         * this means, see `gtk_tree_model_ref_node()`.
         * 
         * Please note that nodes that are deleted are not unreffed.
         * @param iter the {@link Gtk.TreeIter}-struct
         */
        unref_node(iter: Gtk.TreeIter): void;

        /**
         * Returns the type of the column.
         * @param index_ the column index
         * @virtual
         */
        vfunc_get_column_type(index_: number): GObject.GType;

        /**
         * Returns a set of flags supported by this interface.
         * 
         * The flags are a bitwise combination of {@link Gtk.TreeModelFlags}.
         * The flags supported should not change during the lifetime
         * of the `tree_model`.
         * @virtual
         */
        vfunc_get_flags(): Gtk.TreeModelFlags;

        /**
         * Sets `iter` to a valid iterator pointing to `path`.  If `path` does
         * not exist, `iter` is set to an invalid iterator and `false` is returned.
         * @param path the {@link Gtk.TreePath}-struct
         * @virtual
         */
        vfunc_get_iter(path: Gtk.TreePath): [boolean, Gtk.TreeIter];

        /**
         * Returns the number of columns supported by `tree_model`.
         * @virtual
         */
        vfunc_get_n_columns(): number;

        /**
         * Returns a newly-created {@link Gtk.TreePath}-struct referenced by `iter`.
         * 
         * This path should be freed with `gtk_tree_path_free()`.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_get_path(iter: Gtk.TreeIter): Gtk.TreePath;

        /**
         * Initializes and sets `value` to that at `column`.
         * 
         * When done with `value`, `g_value_unset()` needs to be called
         * to free any allocated memory.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @param column the column to lookup the value at
         * @virtual
         */
        vfunc_get_value(iter: Gtk.TreeIter, column: number): GObject.Value | any;

        /**
         * Sets `iter` to point to the first child of `parent`.
         * 
         * If `parent` has no children, `false` is returned and `iter` is
         * set to be invalid. `parent` will remain a valid node after this
         * function has been called.
         * 
         * If `parent` is `null` returns the first node, equivalent to
         * `gtk_tree_model_get_iter_first (tree_model, iter);`
         * @param parent the {@link Gtk.TreeIter}-struct, or `null`
         * @virtual
         */
        vfunc_iter_children(parent: (Gtk.TreeIter | null)): [boolean, Gtk.TreeIter];

        /**
         * Returns `true` if `iter` has children, `false` otherwise.
         * @param iter the {@link Gtk.TreeIter}-struct to test for children
         * @virtual
         */
        vfunc_iter_has_child(iter: Gtk.TreeIter): boolean;

        /**
         * Returns the number of children that `iter` has.
         * 
         * As a special case, if `iter` is `null`, then the number
         * of toplevel nodes is returned.
         * @param iter the {@link Gtk.TreeIter}-struct, or `null`
         * @virtual
         */
        vfunc_iter_n_children(iter: (Gtk.TreeIter | null)): number;

        /**
         * Sets `iter` to point to the node following it at the current level.
         * 
         * If there is no next `iter`, `false` is returned and `iter` is set
         * to be invalid.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_iter_next(iter: Gtk.TreeIter): boolean;

        /**
         * Sets `iter` to be the child of `parent`, using the given index.
         * 
         * The first index is 0. If `n` is too big, or `parent` has no children,
         * `iter` is set to an invalid iterator and `false` is returned. `parent`
         * will remain a valid node after this function has been called. As a
         * special case, if `parent` is `null`, then the `n`-th root node
         * is set.
         * @param parent the {@link Gtk.TreeIter}-struct to get the child from, or `null`.
         * @param n the index of the desired child
         * @virtual
         */
        vfunc_iter_nth_child(parent: (Gtk.TreeIter | null), n: number): [boolean, Gtk.TreeIter];

        /**
         * Sets `iter` to be the parent of `child`.
         * 
         * If `child` is at the toplevel, and doesn’t have a parent, then
         * `iter` is set to an invalid iterator and `false` is returned.
         * `child` will remain a valid node after this function has been
         * called.
         * 
         * `iter` will be initialized before the lookup is performed, so `child`
         * and `iter` cannot point to the same memory location.
         * @param child the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_iter_parent(child: Gtk.TreeIter): [boolean, Gtk.TreeIter];

        /**
         * Sets `iter` to point to the previous node at the current level.
         * 
         * If there is no previous `iter`, `false` is returned and `iter` is
         * set to be invalid.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_iter_previous(iter: Gtk.TreeIter): boolean;

        /**
         * Lets the tree ref the node.
         * 
         * This is an optional method for models to implement.
         * To be more specific, models may ignore this call as it exists
         * primarily for performance reasons.
         * 
         * This function is primarily meant as a way for views to let
         * caching models know when nodes are being displayed (and hence,
         * whether or not to cache that node). Being displayed means a node
         * is in an expanded branch, regardless of whether the node is currently
         * visible in the viewport. For example, a file-system based model
         * would not want to keep the entire file-hierarchy in memory,
         * just the sections that are currently being displayed by
         * every current view.
         * 
         * A model should be expected to be able to get an iter independent
         * of its reffed state.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_ref_node(iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_changed | Gtk.TreeModel::row-changed} signal on `tree_model`.
         * @param path a {@link Gtk.TreePath}-struct pointing to the changed row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the changed row
         * @virtual
         */
        vfunc_row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_deleted | Gtk.TreeModel::row-deleted} signal on `tree_model`.
         * 
         * This should be called by models after a row has been removed.
         * The location pointed to by `path` should be the location that
         * the row previously was at. It may not be a valid location anymore.
         * 
         * Nodes that are deleted are not unreffed, this means that any
         * outstanding references on the deleted node should not be released.
         * @param path a {@link Gtk.TreePath}-struct pointing to the previous location of     the deleted row
         * @virtual
         */
        vfunc_row_deleted(path: Gtk.TreePath): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_has_child_toggled | Gtk.TreeModel::row-has-child-toggled} signal on
         * `tree_model`. This should be called by models after the child
         * state of a node changes.
         * @param path a {@link Gtk.TreePath}-struct pointing to the changed row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the changed row
         * @virtual
         */
        vfunc_row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_inserted | Gtk.TreeModel::row-inserted} signal on `tree_model`.
         * @param path a {@link Gtk.TreePath}-struct pointing to the inserted row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the inserted row
         * @virtual
         */
        vfunc_row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Lets the tree unref the node.
         * 
         * This is an optional method for models to implement.
         * To be more specific, models may ignore this call as it exists
         * primarily for performance reasons. For more information on what
         * this means, see `gtk_tree_model_ref_node()`.
         * 
         * Please note that nodes that are deleted are not unreffed.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_unref_node(iter: Gtk.TreeIter): void;

        /**
         * Fills in `sort_column_id` and `order` with the current sort column and the
         * order. It returns `true` unless the `sort_column_id` is
         * `GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID` or
         * `GTK_TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID`.
         * @returns `true` if the sort column is not one of the special sort   column ids.
         */
        get_sort_column_id(): [boolean, number, Gtk.SortType];

        /**
         * Returns `true` if the model has a default sort function. This is used
         * primarily by GtkTreeViewColumns in order to determine if a model can
         * go back to the default state, or not.
         * @returns `true`, if the model has a default sort function
         */
        has_default_sort_func(): boolean;

        /**
         * Sets the default comparison function used when sorting to be `sort_func`.
         * If the current sort column id of `sortable` is
         * `GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID`, then the model will sort using
         * this function.
         * 
         * If `sort_func` is `null`, then there will be no default comparison function.
         * This means that once the model  has been sorted, it can’t go back to the
         * default state. In this case, when the current sort column id of `sortable`
         * is `GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID`, the model will be unsorted.
         * @param sort_func The comparison function
         */
        set_default_sort_func(sort_func: Gtk.TreeIterCompareFunc): void;

        /**
         * Sets the current sort column to be `sort_column_id`. The `sortable` will
         * resort itself to reflect this change, after emitting a
         * {@link Gtk.TreeSortable.SignalSignatures.sort_column_changed | Gtk.TreeSortable::sort-column-changed} signal. `sort_column_id` may either be
         * a regular column id, or one of the following special values:
         * 
         * - `GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID`: the default sort function
         *   will be used, if it is set
         * 
         * - `GTK_TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID`: no sorting will occur
         * @param sort_column_id the sort column id to set
         * @param order The sort order of the column
         */
        set_sort_column_id(sort_column_id: number, order: Gtk.SortType): void;

        /**
         * Sets the comparison function used when sorting to be `sort_func`. If the
         * current sort column id of `sortable` is the same as `sort_column_id`, then
         * the model will sort using this function.
         * @param sort_column_id the sort column id to set the function for
         * @param sort_func The comparison function
         */
        set_sort_func(sort_column_id: number, sort_func: Gtk.TreeIterCompareFunc): void;

        /**
         * Emits a {@link Gtk.TreeSortable.SignalSignatures.sort_column_changed | Gtk.TreeSortable::sort-column-changed} signal on `sortable`.
         */
        sort_column_changed(): void;

        /**
         * Fills in `sort_column_id` and `order` with the current sort column and the
         * order. It returns `true` unless the `sort_column_id` is
         * `GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID` or
         * `GTK_TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID`.
         * @virtual
         */
        vfunc_get_sort_column_id(): [boolean, number, Gtk.SortType];

        /**
         * Returns `true` if the model has a default sort function. This is used
         * primarily by GtkTreeViewColumns in order to determine if a model can
         * go back to the default state, or not.
         * @virtual
         */
        vfunc_has_default_sort_func(): boolean;

        /**
         * Sets the default comparison function used when sorting to be `sort_func`.
         * If the current sort column id of `sortable` is
         * `GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID`, then the model will sort using
         * this function.
         * 
         * If `sort_func` is `null`, then there will be no default comparison function.
         * This means that once the model  has been sorted, it can’t go back to the
         * default state. In this case, when the current sort column id of `sortable`
         * is `GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID`, the model will be unsorted.
         * @param sort_func The comparison function
         * @virtual
         */
        vfunc_set_default_sort_func(sort_func: Gtk.TreeIterCompareFunc): void;

        /**
         * Sets the current sort column to be `sort_column_id`. The `sortable` will
         * resort itself to reflect this change, after emitting a
         * {@link Gtk.TreeSortable.SignalSignatures.sort_column_changed | Gtk.TreeSortable::sort-column-changed} signal. `sort_column_id` may either be
         * a regular column id, or one of the following special values:
         * 
         * - `GTK_TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID`: the default sort function
         *   will be used, if it is set
         * 
         * - `GTK_TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID`: no sorting will occur
         * @param sort_column_id the sort column id to set
         * @param order The sort order of the column
         * @virtual
         */
        vfunc_set_sort_column_id(sort_column_id: number, order: Gtk.SortType): void;

        /**
         * Sets the comparison function used when sorting to be `sort_func`. If the
         * current sort column id of `sortable` is the same as `sort_column_id`, then
         * the model will sort using this function.
         * @param sort_column_id the sort column id to set the function for
         * @param sort_func The comparison function
         * @virtual
         */
        vfunc_set_sort_func(sort_column_id: number, sort_func: Gtk.TreeIterCompareFunc): void;

        /**
         * Emits a {@link Gtk.TreeSortable.SignalSignatures.sort_column_changed | Gtk.TreeSortable::sort-column-changed} signal on `sortable`.
         * @virtual
         */
        vfunc_sort_column_changed(): void;

        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.ListStore.set
        set(...args: never[]): any;
    }


    namespace ItemChooser {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::item": (pspec: GObject.ParamSpec) => void;
            "notify::item-type": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            item: Gimp.Item;
            item_type: GObject.GTypeInput;
            itemType: GObject.GTypeInput;
            label: string;
            title: string;
        }
    }

    /**
     * The chooser contains an optional label and a button which queries the core
     * process to pop up a item selection dialog.
     * @gir-type Class
     * @since 3.2
     */
    class ItemChooser extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<ItemChooser>;

        // Properties
        /**
         * The currently selected item.
         * @since 3.0
         */
        get item(): Gimp.Item;
        set item(val: Gimp.Item);

        /**
         * Allowed item types, which must be either GIMP_TYPE_ITEM or a
         * subtype.
         * @since 3.0
         * @construct-only
         */
        get item_type(): GObject.GType;

        /**
         * Allowed item types, which must be either GIMP_TYPE_ITEM or a
         * subtype.
         * @since 3.0
         * @construct-only
         */
        get itemType(): GObject.GType;

        /**
         * Label text with mnemonic.
         * @since 3.0
         * @construct-only
         * @default null
         */
        get label(): string;

        /**
         * The title to be used for the item selection popup dialog.
         * @since 3.0
         * @construct-only
         * @default Item Selection
         */
        get title(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ItemChooser.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ItemChooser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](title: (string | null), label: (string | null), item_type: GObject.GType, item: (Gimp.Item | null)): ItemChooser;

        // Conflicted with Gtk.Box.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof ItemChooser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ItemChooser.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ItemChooser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ItemChooser.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ItemChooser.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ItemChooser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the currently selected item.
         * @returns an internal copy of the item which must not be freed.
         */
        get_item(): Gimp.Item;

        /**
         * Returns the label widget.
         * @returns the {@link Gtk.Widget} showing the label text.
         */
        get_label(): Gtk.Widget;

        /**
         * Sets the currently selected item.
         * This will select the item in both the button and any chooser popup.
         * @param item Item to set.
         */
        set_item(item: Gimp.Item): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace LabelColor {
        // Signal signatures
        interface SignalSignatures extends Labeled.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            "value-changed": () => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-row": (pspec: GObject.ParamSpec) => void;
            "notify::column-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::column-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::row-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::row-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Labeled.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            editable: boolean;
            value: Gegl.Color;
        }
    }

    /**
     * This widget is a subclass of {@link GimpUi.Labeled} with a `GtkColor`.
     * @gir-type Class
     */
    class LabelColor extends Labeled implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<LabelColor>;

        // Properties
        /**
         * Whether the color can be edited.
         * @since 3.0
         * @default false
         */
        get editable(): boolean;
        set editable(val: boolean);

        /**
         * The currently set value.
         * @since 3.0
         */
        get value(): Gegl.Color;
        set value(val: Gegl.Color);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LabelColor.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<LabelColor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](label: string, color: Gegl.Color, editable: boolean): LabelColor;

        // Conflicted with Gtk.Grid.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof LabelColor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LabelColor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof LabelColor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LabelColor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof LabelColor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<LabelColor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * This function returns the color widget packed in `color`, which can be
         * either a {@link GimpUi.ColorButton} (if the `color` is editable) or a
         * {@link GimpUi.ColorArea} otherwise.
         * @returns The color widget packed in `color`.
         */
        get_color_widget(): Gtk.Widget;

        /**
         * This function returns the value shown by `color`.
         * @returns a copy of the {@link Gegl.Color} used by the widget.
         */
        get_value(): Gegl.Color;

        /**
         * This function tells whether the color widget allows to edit the
         * color.
         * @returns `true` if the color is editable.
         */
        is_editable(): boolean;

        /**
         * Changes the editability of the color.
         * @param editable Whether the color should be editable.
         */
        set_editable(editable: boolean): void;

        /**
         * This function sets the value in the `GtkColor` inside `color`.
         * @param value A new value.
         */
        set_value(value: Gegl.Color): void;
    }


    namespace LabelEntry {
        // Signal signatures
        interface SignalSignatures extends Labeled.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            "value-changed": () => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-row": (pspec: GObject.ParamSpec) => void;
            "notify::column-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::column-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::row-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::row-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Labeled.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            value: string;
        }
    }

    /**
     * This widget is a subclass of {@link GimpUi.Labeled} with a {@link Gtk.Entry}.
     * @gir-type Class
     */
    class LabelEntry extends Labeled implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<LabelEntry>;

        // Properties
        /**
         * The currently set value.
         * @since 3.0
         * @default null
         */
        get value(): string;
        set value(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LabelEntry.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<LabelEntry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](label: string): LabelEntry;

        // Conflicted with Gtk.Grid.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof LabelEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LabelEntry.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof LabelEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LabelEntry.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof LabelEntry.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<LabelEntry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * This function returns the {@link Gtk.Entry} packed in `entry`.
         * @returns The {@link Gtk.Entry} contained in `entry`.
         */
        get_entry(): Gtk.Widget;

        /**
         * This function returns the value shown by `entry`.
         * @returns The value currently set.
         */
        get_value(): string;

        /**
         * This function sets the value in the {@link Gtk.Entry} inside `entry`.
         * @param value A new value.
         */
        set_value(value: string): void;
    }


    namespace LabelIntWidget {
        // Signal signatures
        interface SignalSignatures extends Labeled.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            "value-changed": () => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::widget": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-row": (pspec: GObject.ParamSpec) => void;
            "notify::column-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::column-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::row-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::row-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Labeled.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            value: number;
            widget: (Gtk.Widget | any);
        }
    }

    /**
     * This widget is a subclass of {@link GimpUi.Labeled}.
     * @gir-type Class
     */
    class LabelIntWidget extends Labeled implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<LabelIntWidget>;

        // Properties
        /**
         * The currently set value.
         * @since 3.0
         * @default 0
         */
        get value(): number;
        set value(val: number);

        /**
         * The widget holding an integer value.
         * @since 3.0
         * @construct-only
         */
    // This accessor conflicts with a property or field in a parent class or interface.
         widget: Gtk.Widget | any;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LabelIntWidget.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<LabelIntWidget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](text: string, widget: Gtk.Widget): LabelIntWidget;

        // Conflicted with Gtk.Grid.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof LabelIntWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LabelIntWidget.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof LabelIntWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LabelIntWidget.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof LabelIntWidget.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<LabelIntWidget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns The new {@link Gtk.Widget} packed next to the label.
         */
        get_widget(): Gtk.Widget;
    }


    namespace LabelSpin {
        // Signal signatures
        interface SignalSignatures extends Labeled.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            "value-changed": () => void;
            "notify::digits": (pspec: GObject.ParamSpec) => void;
            "notify::lower": (pspec: GObject.ParamSpec) => void;
            "notify::upper": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-row": (pspec: GObject.ParamSpec) => void;
            "notify::column-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::column-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::row-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::row-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Labeled.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            digits: number;
            lower: number;
            upper: number;
            value: number;
        }
    }

    /**
     * This widget is a subclass of {@link GimpUi.Labeled} with a {@link GimpUi.SpinButton}.
     * @gir-type Class
     */
    class LabelSpin extends Labeled implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<LabelSpin>;

        // Properties
        /**
         * The number of decimal places to display. If -1, then the number is
         * estimated.
         * @since 3.0
         * @default -1
         */
        get digits(): number;
        set digits(val: number);

        /**
         * The lower bound of the spin button.
         * @since 3.0
         * @default 0
         */
        get lower(): number;
        set lower(val: number);

        /**
         * The upper bound of the spin button.
         * @since 3.0
         * @default 1
         */
        get upper(): number;
        set upper(val: number);

        /**
         * The currently set value.
         * @since 3.0
         * @default 1
         */
        get value(): number;
        set value(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LabelSpin.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<LabelSpin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](text: string, value: number, lower: number, upper: number, digits: number): LabelSpin;

        // Conflicted with Gtk.Grid.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof LabelSpin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LabelSpin.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof LabelSpin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LabelSpin.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof LabelSpin.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<LabelSpin.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_value_changed(): void;

        // Methods
        /**
         * This function returns the {@link GimpUi.SpinButton} packed in `spin`.
         * @returns The {@link GimpUi.SpinButton} contained in `spin`.
         */
        get_spin_button(): Gtk.Widget;

        /**
         * This function returns the value shown by `spin`.
         * @returns The value currently set.
         */
        get_value(): number;

        /**
         * Set the number of decimal place to display in the `spin`'s entry.
         * If `digits` is -1, then it will also be estimated based on `spin`'s
         * range. Digits estimation will always be at least 1, so if you want to
         * show integer values only, set 0 explicitly.
         * @param digits the number of decimal places to display.
         */
        set_digits(digits: number): void;

        /**
         * Set the step and page increments of the spin button.
         * By default, these increment values are automatically computed
         * depending on the range based on common usage. So you will likely not
         * need to run this for most case. Yet if you want specific increments
         * (which the widget cannot guess), you can call this function.
         * @param step the step increment.
         * @param page the page increment.
         */
        set_increments(step: number, page: number): void;

        /**
         * This function sets the value shown by `spin`.
         * @param value A new value.
         */
        set_value(value: number): void;
    }


    namespace LabelStringWidget {
        // Signal signatures
        interface SignalSignatures extends Labeled.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            "value-changed": () => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::widget": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-row": (pspec: GObject.ParamSpec) => void;
            "notify::column-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::column-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::row-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::row-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Labeled.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            value: string;
            widget: (Gtk.Widget | any);
        }
    }

    /**
     * This widget is a subclass of {@link GimpUi.Labeled}.
     * @gir-type Class
     */
    class LabelStringWidget extends Labeled implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<LabelStringWidget>;

        // Properties
        /**
         * The currently set value.
         * @since 3.0
         * @default null
         */
        get value(): string;
        set value(val: string);

        /**
         * The widget holding a string property named "value".
         * @since 3.0
         * @construct-only
         */
    // This accessor conflicts with a property or field in a parent class or interface.
         widget: Gtk.Widget | any;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LabelStringWidget.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<LabelStringWidget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](text: string, widget: Gtk.Widget): LabelStringWidget;

        // Conflicted with Gtk.Grid.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof LabelStringWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LabelStringWidget.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof LabelStringWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LabelStringWidget.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof LabelStringWidget.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<LabelStringWidget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns The new {@link Gtk.Widget} packed next to the label.
         */
        get_widget(): Gtk.Widget;
    }


    namespace Labeled {
        // Signal signatures
        interface SignalSignatures extends Gtk.Grid.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            "mnemonic-widget-changed": (arg0: Gtk.Widget) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-row": (pspec: GObject.ParamSpec) => void;
            "notify::column-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::column-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::row-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::row-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Grid.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            label: string;
        }
    }

    /**
     * This widget is a {@link Gtk.Grid} showing a {@link Gtk.Label} used as mnemonic on
     * another widget.
     * @gir-type Class
     */
    class Labeled extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<Labeled>;

        // Properties
        /**
         * Label text with pango markup and mnemonic.
         * @since 3.0
         * @default null
         */
        get label(): string;
        set label(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Labeled.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Labeled.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Labeled.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Labeled.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Labeled.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Labeled.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Labeled.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Labeled.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param widget 
         * @virtual
         */
        vfunc_mnemonic_widget_changed(widget: Gtk.Widget): void;

        // Methods
        /**
         * This function returns the {@link Gtk.Label} packed in `labeled`. This can be
         * useful if you need to customize some aspects of the widget.
         * @returns The {@link Gtk.Label} contained in `labeled`.
         */
        get_label(): Gtk.Label;

        /**
         * This function will return exactly what you entered with
         * `gimp_labeled_set_text()` or through the "label" property because this
         * class expects labels to have mnemonics (and allows Pango formatting).
         * To obtain instead the text as displayed with mnemonics and markup
         * removed, call:
         * 
         * ```c
         * gtk_label_get_text (GTK_LABEL (gimp_labeled_get_label (`labeled`)));
         * ```
         * 
         * @returns the label text as entered, which includes pango markup and          mnemonics similarly to `gtk_label_get_label()`.
         */
        get_text(): string;

        /**
         * This is the equivalent of running
         * `gtk_label_set_markup_with_mnemonic()` on the {@link Gtk.Label} as a
         * {@link GimpUi.Labeled} expects a mnemonic. Pango markup are also allowed.
         * @param text label text with Pango markup and mnemonic.
         */
        set_text(text: string): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace LayerComboBox {
        // Signal signatures
        interface SignalSignatures extends IntComboBox.SignalSignatures {
            "notify::ellipsize": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::layout": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::active-id": (pspec: GObject.ParamSpec) => void;
            "notify::add-tearoffs": (pspec: GObject.ParamSpec) => void;
            "notify::button-sensitivity": (pspec: GObject.ParamSpec) => void;
            "notify::cell-area": (pspec: GObject.ParamSpec) => void;
            "notify::column-span-column": (pspec: GObject.ParamSpec) => void;
            "notify::entry-text-column": (pspec: GObject.ParamSpec) => void;
            "notify::has-entry": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::id-column": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::popup-fixed-width": (pspec: GObject.ParamSpec) => void;
            "notify::popup-shown": (pspec: GObject.ParamSpec) => void;
            "notify::row-span-column": (pspec: GObject.ParamSpec) => void;
            "notify::tearoff-title": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-width": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends IntComboBox.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.CellLayout.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class LayerComboBox extends IntComboBox implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.CellLayout {
        static $gtype: GObject.GType<LayerComboBox>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LayerComboBox.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<LayerComboBox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](constraint: (ItemConstraintFunc | null)): LayerComboBox;

        // Conflicted with GimpUi.IntComboBox.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect_after<K extends keyof LayerComboBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LayerComboBox.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof LayerComboBox.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<LayerComboBox.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;

        /**
         * Returns whether the widget should grab focus when it is clicked with the mouse.
         * See `gtk_widget_set_focus_on_click()`.
         * @returns `true` if the widget should grab focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;

        /**
         * Sets whether the widget should grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the widget should grab focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
    }


    namespace MemsizeEntry {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            "value-changed": () => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {

        }
    }

    /**
     * Similar to a {@link GimpUi.SizeEntry} but instead of lengths, this widget is
     * used to let the user enter memory sizes. A combo box allows one to
     * switch between Kilobytes, Megabytes and Gigabytes. Used in the GIMP
     * preferences dialog.
     * @gir-type Class
     */
    class MemsizeEntry extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<MemsizeEntry>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MemsizeEntry.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MemsizeEntry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](value: (bigint | number), lower: (bigint | number), upper: (bigint | number)): MemsizeEntry;

        // Conflicted with Gtk.Box.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof MemsizeEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MemsizeEntry.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MemsizeEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MemsizeEntry.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MemsizeEntry.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MemsizeEntry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns the entry's `GtkSpinbutton`.
         */
        get_spinbutton(): Gtk.SpinButton;

        /**
         * Retrieves the current value from a {@link GimpUi.MemsizeEntry}.
         * @returns the current value of `entry` (in Bytes).
         */
        get_value(): number;

        /**
         * Sets the `entry`'s value. Please note that the {@link GimpUi.MemsizeEntry} rounds
         * the value to full Kilobytes.
         * @param value the new value (in Bytes)
         */
        set_value(value: (bigint | number)): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace NumberPairEntry {
        // Signal signatures
        interface SignalSignatures extends Gtk.Entry.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            "numbers-changed": () => void;
            /**
             * @signal
             * @run-first
             */
            "ratio-changed": () => void;
            "notify::allow-simplification": (pspec: GObject.ParamSpec) => void;
            "notify::aspect": (pspec: GObject.ParamSpec) => void;
            "notify::default-left-number": (pspec: GObject.ParamSpec) => void;
            "notify::default-right-number": (pspec: GObject.ParamSpec) => void;
            "notify::default-text": (pspec: GObject.ParamSpec) => void;
            "notify::left-number": (pspec: GObject.ParamSpec) => void;
            "notify::max-valid-value": (pspec: GObject.ParamSpec) => void;
            "notify::min-valid-value": (pspec: GObject.ParamSpec) => void;
            "notify::ratio": (pspec: GObject.ParamSpec) => void;
            "notify::right-number": (pspec: GObject.ParamSpec) => void;
            "notify::separators": (pspec: GObject.ParamSpec) => void;
            "notify::user-override": (pspec: GObject.ParamSpec) => void;
            "notify::activates-default": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::caps-lock-warning": (pspec: GObject.ParamSpec) => void;
            "notify::completion": (pspec: GObject.ParamSpec) => void;
            "notify::cursor-position": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::enable-emoji-completion": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::im-module": (pspec: GObject.ParamSpec) => void;
            "notify::inner-border": (pspec: GObject.ParamSpec) => void;
            "notify::input-hints": (pspec: GObject.ParamSpec) => void;
            "notify::input-purpose": (pspec: GObject.ParamSpec) => void;
            "notify::invisible-char": (pspec: GObject.ParamSpec) => void;
            "notify::invisible-char-set": (pspec: GObject.ParamSpec) => void;
            "notify::max-length": (pspec: GObject.ParamSpec) => void;
            "notify::max-width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::overwrite-mode": (pspec: GObject.ParamSpec) => void;
            "notify::placeholder-text": (pspec: GObject.ParamSpec) => void;
            "notify::populate-all": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-activatable": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-gicon": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-stock": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-storage-type": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::progress-fraction": (pspec: GObject.ParamSpec) => void;
            "notify::progress-pulse-step": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-offset": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-activatable": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-gicon": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-stock": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-storage-type": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::selection-bound": (pspec: GObject.ParamSpec) => void;
            "notify::shadow-type": (pspec: GObject.ParamSpec) => void;
            "notify::show-emoji-icon": (pspec: GObject.ParamSpec) => void;
            "notify::tabs": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::text-length": (pspec: GObject.ParamSpec) => void;
            "notify::truncate-multiline": (pspec: GObject.ParamSpec) => void;
            "notify::visibility": (pspec: GObject.ParamSpec) => void;
            "notify::width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::editing-canceled": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Entry.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.Editable.ConstructorProps {
            allow_simplification: boolean;
            allowSimplification: boolean;
            aspect: AspectType;
            default_left_number: number;
            defaultLeftNumber: number;
            default_right_number: number;
            defaultRightNumber: number;
            default_text: (string | null);
            defaultText: (string | null);
            left_number: number;
            leftNumber: number;
            max_valid_value: number;
            maxValidValue: number;
            min_valid_value: number;
            minValidValue: number;
            ratio: number;
            right_number: number;
            rightNumber: number;
            separators: string;
            user_override: boolean;
            userOverride: boolean;
        }
    }

    /**
     * A {@link Gtk.Entry} subclass to enter ratios.
     * @gir-type Class
     */
    class NumberPairEntry extends Gtk.Entry implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.Editable {
        static $gtype: GObject.GType<NumberPairEntry>;

        // Properties
        /**
         * @default false
         */
        get allow_simplification(): boolean;
        set allow_simplification(val: boolean);

        /**
         * @default false
         */
        get allowSimplification(): boolean;
        set allowSimplification(val: boolean);

        /**
         * @default GimpUi.AspectType.SQUARE
         */
        get aspect(): AspectType;
        set aspect(val: AspectType);

        /**
         * @default 100
         */
        get default_left_number(): number;
        set default_left_number(val: number);

        /**
         * @default 100
         */
        get defaultLeftNumber(): number;
        set defaultLeftNumber(val: number);

        /**
         * @default 100
         */
        get default_right_number(): number;
        set default_right_number(val: number);

        /**
         * @default 100
         */
        get defaultRightNumber(): number;
        set defaultRightNumber(val: number);

        /**
         * @default null
         */
        get default_text(): (string | null);
        set default_text(val: (string | null));

        /**
         * @default null
         */
        get defaultText(): (string | null);
        set defaultText(val: (string | null));

        /**
         * @default 100
         */
        get left_number(): number;
        set left_number(val: number);

        /**
         * @default 100
         */
        get leftNumber(): number;
        set leftNumber(val: number);

        /**
         * @default 1.7976931348623157e+308
         */
        get max_valid_value(): number;
        set max_valid_value(val: number);

        /**
         * @default 1.7976931348623157e+308
         */
        get maxValidValue(): number;
        set maxValidValue(val: number);

        /**
         * @default 0
         */
        get min_valid_value(): number;
        set min_valid_value(val: number);

        /**
         * @default 0
         */
        get minValidValue(): number;
        set minValidValue(val: number);

        /**
         * @default 1
         */
        get ratio(): number;
        set ratio(val: number);

        /**
         * @default 100
         */
        get right_number(): number;
        set right_number(val: number);

        /**
         * @default 100
         */
        get rightNumber(): number;
        set rightNumber(val: number);

        /**
         * @construct-only
         * @default null
         */
        get separators(): string;

        /**
         * @default false
         */
        get user_override(): boolean;
        set user_override(val: boolean);

        /**
         * @default false
         */
        get userOverride(): boolean;
        set userOverride(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: NumberPairEntry.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<NumberPairEntry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](separators: string, allow_simplification: boolean, min_valid_value: number, max_valid_value: number): NumberPairEntry;

        // Conflicted with Gtk.Entry.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof NumberPairEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NumberPairEntry.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof NumberPairEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NumberPairEntry.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof NumberPairEntry.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<NumberPairEntry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the aspect of the ratio displayed by a {@link GimpUi.NumberPairEntry}.
         * @returns The entry's current aspect.
         */
        get_aspect(): AspectType;

        /**
         * @returns the string manually set to be shown,          or `null` if values are shown in a normal fashion.
         */
        get_default_text(): (string | null);

        get_default_values(): [number, number];

        /**
         * Retrieves the ratio of the numbers displayed by a {@link GimpUi.NumberPairEntry}.
         * @returns The ratio value.
         */
        get_ratio(): number;

        /**
         * @returns Whether or not the the widget is in user overridden mode.
         */
        get_user_override(): boolean;

        /**
         * Gets the numbers displayed by a {@link GimpUi.NumberPairEntry}.
         */
        get_values(): [number, number];

        /**
         * Sets the aspect of the ratio by swapping the left_number and
         * right_number if necessary (or setting them to 1.0 in case that
         * `aspect` is {@link GimpUi.AspectType.SQUARE}).
         * @param aspect The new aspect.
         */
        set_aspect(aspect: AspectType): void;

        /**
         * Causes the entry to show a given string when in automatic mode,
         * instead of the default numbers. The only thing this does is making
         * the {@link GimpUi.NumberPairEntry} showing this string, the internal state
         * and API calls are not affected.
         * 
         * Set the default string to `null` to display default values as
         * normal.
         * @param string Default string.
         */
        set_default_text(string: string): void;

        /**
         * @param left Default left value in the entry.
         * @param right Default right value in the entry.
         */
        set_default_values(left: number, right: number): void;

        /**
         * Sets the numbers of the {@link GimpUi.NumberPairEntry} to have the desired
         * ratio. If the new ratio is different than the previous ratio, the
         * "ratio-changed" signal is emitted.
         * 
         * An attempt is made to convert the decimal number into a fraction
         * with left_number and right_number < 1000.
         * @param ratio Ratio to set in the widget.
         */
        set_ratio(ratio: number): void;

        /**
         * When the entry is not in user overridden mode, the values will
         * change when the default values are changed. When in user overridden
         * mode, setting default values will not affect the active values.
         * @param user_override `true` sets the entry in user overridden mode,                 `false` disables.
         */
        set_user_override(user_override: boolean): void;

        /**
         * Forces setting the numbers displayed by a {@link GimpUi.NumberPairEntry},
         * ignoring if the user has set their own value. The state of
         * user-override will not be changed.
         * @param left Left number in the entry.
         * @param right Right number in the entry.
         */
        set_values(left: number, right: number): void;

        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
          * @category Inherited from Gtk.CellEditable
         */
        get editing_canceled(): boolean;
        set editing_canceled(val: boolean);

        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
          * @category Inherited from Gtk.CellEditable
         */
        get editingCanceled(): boolean;
        set editingCanceled(val: boolean);

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         */
        editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         */
        remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         */
        start_editing(event: (Gdk.Event | null)): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         * @virtual
         */
        vfunc_editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         * @virtual
         */
        vfunc_remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         * @virtual
         */
        vfunc_start_editing(event: (Gdk.Event | null)): void;

        /**
         * Copies the contents of the currently selected content in the editable and
         * puts it on the clipboard.
         */
        copy_clipboard(): void;

        /**
         * Removes the contents of the currently selected content in the editable and
         * puts it on the clipboard.
         */
        cut_clipboard(): void;

        /**
         * Deletes the currently selected text of the editable.
         * This call doesn’t do anything if there is no selected text.
         */
        delete_selection(): void;

        /**
         * Deletes a sequence of characters. The characters that are deleted are
         * those characters at positions from `start_pos` up to, but not including
         * `end_pos`. If `end_pos` is negative, then the characters deleted
         * are those from `start_pos` to the end of the text.
         * 
         * Note that the positions are specified in characters, not bytes.
         * @param start_pos start position
         * @param end_pos end position
         */
        delete_text(start_pos: number, end_pos: number): void;

        /**
         * Retrieves a sequence of characters. The characters that are retrieved
         * are those characters at positions from `start_pos` up to, but not
         * including `end_pos`. If `end_pos` is negative, then the characters
         * retrieved are those characters from `start_pos` to the end of the text.
         * 
         * Note that positions are specified in characters, not bytes.
         * @param start_pos start of text
         * @param end_pos end of text
         * @returns a pointer to the contents of the widget as a      string. This string is allocated by the {@link Gtk.Editable}      implementation and should be freed by the caller.
         */
        get_chars(start_pos: number, end_pos: number): string;

        /**
         * Retrieves whether `editable` is editable. See
         * `gtk_editable_set_editable()`.
         * @returns `true` if `editable` is editable.
         */
        get_editable(): boolean;

        /**
         * Retrieves the current position of the cursor relative to the start
         * of the content of the editable.
         * 
         * Note that this position is in characters, not in bytes.
         * @returns the cursor position
         */
        get_position(): number;

        /**
         * Retrieves the selection bound of the editable. start_pos will be filled
         * with the start of the selection and `end_pos` with end. If no text was
         * selected both will be identical and `false` will be returned.
         * 
         * Note that positions are specified in characters, not bytes.
         * @returns `true` if an area is selected, `false` otherwise
         */
        get_selection_bounds(): [boolean, number, number];

        /**
         * Inserts `new_text_length` bytes of `new_text` into the contents of the
         * widget, at position `position`.
         * 
         * Note that the position is in characters, not in bytes.
         * The function updates `position` to point after the newly inserted text.
         * @param new_text the text to append
         * @param new_text_length the length of the text in bytes, or -1
         * @param position location of the position text will be inserted at
         */
        insert_text(new_text: string, new_text_length: number, position: number): number;

        /**
         * Pastes the content of the clipboard to the current position of the
         * cursor in the editable.
         */
        paste_clipboard(): void;

        /**
         * Selects a region of text. The characters that are selected are
         * those characters at positions from `start_pos` up to, but not
         * including `end_pos`. If `end_pos` is negative, then the
         * characters selected are those characters from `start_pos` to
         * the end of the text.
         * 
         * Note that positions are specified in characters, not bytes.
         * @param start_pos start of region
         * @param end_pos end of region
         */
        select_region(start_pos: number, end_pos: number): void;

        /**
         * Determines if the user can edit the text in the editable
         * widget or not.
         * @param is_editable `true` if the user is allowed to edit the text   in the widget
         */
        set_editable(is_editable: boolean): void;

        /**
         * Sets the cursor position in the editable to the given value.
         * 
         * The cursor is displayed before the character with the given (base 0)
         * index in the contents of the editable. The value must be less than or
         * equal to the number of characters in the editable. A value of -1
         * indicates that the position should be set after the last character
         * of the editable. Note that `position` is in characters, not in bytes.
         * @param position the position of the cursor
         */
        set_position(position: number): void;

        /**
         * @virtual
         */
        vfunc_changed(): void;

        /**
         * Deletes a sequence of characters. The characters that are deleted are
         * those characters at positions from `start_pos` up to, but not including
         * `end_pos`. If `end_pos` is negative, then the characters deleted
         * are those from `start_pos` to the end of the text.
         * 
         * Note that the positions are specified in characters, not bytes.
         * @param start_pos start position
         * @param end_pos end position
         * @virtual
         */
        vfunc_delete_text(start_pos: number, end_pos: number): void;

        /**
         * Deletes a sequence of characters. The characters that are deleted are
         * those characters at positions from `start_pos` up to, but not including
         * `end_pos`. If `end_pos` is negative, then the characters deleted
         * are those from `start_pos` to the end of the text.
         * 
         * Note that the positions are specified in characters, not bytes.
         * @param start_pos start position
         * @param end_pos end position
         * @virtual
         */
        vfunc_do_delete_text(start_pos: number, end_pos: number): void;

        /**
         * Inserts `new_text_length` bytes of `new_text` into the contents of the
         * widget, at position `position`.
         * 
         * Note that the position is in characters, not in bytes.
         * The function updates `position` to point after the newly inserted text.
         * @param new_text the text to append
         * @param new_text_length the length of the text in bytes, or -1
         * @param position location of the position text will be inserted at
         * @virtual
         */
        vfunc_do_insert_text(new_text: string, new_text_length: number, position: number): number;

        /**
         * Retrieves a sequence of characters. The characters that are retrieved
         * are those characters at positions from `start_pos` up to, but not
         * including `end_pos`. If `end_pos` is negative, then the characters
         * retrieved are those characters from `start_pos` to the end of the text.
         * 
         * Note that positions are specified in characters, not bytes.
         * @param start_pos start of text
         * @param end_pos end of text
         * @virtual
         */
        vfunc_get_chars(start_pos: number, end_pos: number): string;

        /**
         * Retrieves the current position of the cursor relative to the start
         * of the content of the editable.
         * 
         * Note that this position is in characters, not in bytes.
         * @virtual
         */
        vfunc_get_position(): number;

        /**
         * Retrieves the selection bound of the editable. start_pos will be filled
         * with the start of the selection and `end_pos` with end. If no text was
         * selected both will be identical and `false` will be returned.
         * 
         * Note that positions are specified in characters, not bytes.
         * @virtual
         */
        vfunc_get_selection_bounds(): [boolean, number, number];

        /**
         * Inserts `new_text_length` bytes of `new_text` into the contents of the
         * widget, at position `position`.
         * 
         * Note that the position is in characters, not in bytes.
         * The function updates `position` to point after the newly inserted text.
         * @param new_text the text to append
         * @param new_text_length the length of the text in bytes, or -1
         * @param position location of the position text will be inserted at
         * @virtual
         */
        vfunc_insert_text(new_text: string, new_text_length: number, position: number): number;

        /**
         * Sets the cursor position in the editable to the given value.
         * 
         * The cursor is displayed before the character with the given (base 0)
         * index in the contents of the editable. The value must be less than or
         * equal to the number of characters in the editable. A value of -1
         * indicates that the position should be set after the last character
         * of the editable. Note that `position` is in characters, not in bytes.
         * @param position the position of the cursor
         * @virtual
         */
        vfunc_set_position(position: number): void;

        /**
         * Selects a region of text. The characters that are selected are
         * those characters at positions from `start_pos` up to, but not
         * including `end_pos`. If `end_pos` is negative, then the
         * characters selected are those characters from `start_pos` to
         * the end of the text.
         * 
         * Note that positions are specified in characters, not bytes.
         * @param start_pos start of region
         * @param end_pos end of region
         * @virtual
         */
        vfunc_set_selection_bounds(start_pos: number, end_pos: number): void;
    }


    namespace OffsetArea {
        // Signal signatures
        interface SignalSignatures extends Gtk.DrawingArea.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            "offsets-changed": (arg0: number, arg1: number) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.DrawingArea.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {

        }
    }

    /**
     * Widget to control image offsets.
     * @gir-type Class
     */
    class OffsetArea extends Gtk.DrawingArea implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<OffsetArea>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OffsetArea.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<OffsetArea.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](orig_width: number, orig_height: number): OffsetArea;

        // Conflicted with Gtk.DrawingArea.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof OffsetArea.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OffsetArea.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof OffsetArea.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, OffsetArea.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof OffsetArea.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<OffsetArea.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Sets the offsets of the image/drawable displayed by the {@link GimpUi.OffsetArea}.
         * It does not emit the "offsets-changed" signal.
         * @param offset_x the X offset
         * @param offset_y the Y offset
         */
        set_offsets(offset_x: number, offset_y: number): void;

        /**
         * Sets the pixbuf which represents the original image/drawable which
         * is being offset.
         * @param pixbuf a {@link GdkPixbuf.Pixbuf}.
         */
        set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;

        /**
         * Sets the size of the image/drawable displayed by the {@link GimpUi.OffsetArea}.
         * If the offsets change as a result of this change, the "offsets-changed"
         * signal is emitted.
         * @param width the new width
         * @param height the new height
         */
        set_size(width: number, height: number): void;
    }


    namespace PageSelector {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            /**
             * The "activate" signal on GimpPageSelector is an action signal. It
             * is emitted when a user double-clicks an item in the page selection.
             * @signal
             * @since 2.4
             * @action
             * @run-first
             */
            activate: () => void;
            /**
             * This signal is emitted whenever the set of selected pages changes.
             * @signal
             * @since 2.4
             * @run-first
             */
            "selection-changed": () => void;
            "notify::n-pages": (pspec: GObject.ParamSpec) => void;
            "notify::target": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            n_pages: number;
            nPages: number;
            target: PageSelectorTarget;
        }
    }

    /**
     * Use this for example for specifying what pages to import from
     * a PDF or PS document.
     * @gir-type Class
     */
    class PageSelector extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<PageSelector>;

        // Properties
        /**
         * The number of pages of the document to open.
         * @since 2.4
         * @default 0
         */
        get n_pages(): number;
        set n_pages(val: number);

        /**
         * The number of pages of the document to open.
         * @since 2.4
         * @default 0
         */
        get nPages(): number;
        set nPages(val: number);

        /**
         * The target to open the document to.
         * @since 2.4
         * @default GimpUi.PageSelectorTarget.LAYERS
         */
        get target(): PageSelectorTarget;
        set target(val: PageSelectorTarget);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PageSelector.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PageSelector.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): PageSelector;

        // Signals
        /** @signal */
        connect<K extends keyof PageSelector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PageSelector.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PageSelector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PageSelector.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PageSelector.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PageSelector.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns the number of pages in the document to open.
         */
        get_n_pages(): number;

        /**
         * @param page_no The number of the page to get the thumbnail for.
         * @returns The page's label, or `null` if none is          set. This is a newly allocated string that should be `g_free()`'d          when no longer needed.
         */
        get_page_label(page_no: number): (string | null);

        /**
         * @param page_no The number of the page to get the thumbnail for.
         * @returns The page's thumbnail, or `null` if none          is set. The returned pixbuf is owned by {@link GimpUi.PageSelector} and must          not be unref'ed when no longer needed.
         */
        get_page_thumbnail(page_no: number): (GdkPixbuf.Pixbuf | null);

        /**
         * @returns A sorted array of page numbers of          selected pages. Use `g_free()` if you don't need the array any longer
         */
        get_selected_pages(): number[];

        /**
         * @returns A newly allocated string representing the set of selected          pages. See `gimp_page_selector_select_range()` for the          format of the string.
         */
        get_selected_range(): string;

        /**
         * @returns How the selected pages should be opened.
         */
        get_target(): PageSelectorTarget;

        /**
         * @param page_no The number of the page to check.
         * @returns `true` if the page is selected, `false` otherwise.
         */
        page_is_selected(page_no: number): boolean;

        /**
         * Selects all pages.
         */
        select_all(): void;

        /**
         * Adds a page to the selection.
         * @param page_no The number of the page to select.
         */
        select_page(page_no: number): void;

        /**
         * Selects the pages described by `range`. The range string is a
         * user-editable list of pages and ranges, e.g. "1,3,5-7,9-12,14".
         * Note that the page numbering in the range string starts with 1,
         * not 0.
         * 
         * Invalid pages and ranges will be silently ignored, duplicate and
         * overlapping pages and ranges will be merged.
         * @param range A string representing the set of selected pages.
         */
        select_range(range: string): void;

        /**
         * Sets the number of pages in the document to open.
         * @param n_pages The number of pages.
         */
        set_n_pages(n_pages: number): void;

        /**
         * Sets the label of the specified page.
         * @param page_no The number of the page to set the label for.
         * @param label The label.
         */
        set_page_label(page_no: number, label: string): void;

        /**
         * Sets the thumbnail for given `page_no`. A default "page" icon will
         * be used if no page thumbnail is set.
         * @param page_no The number of the page to set the thumbnail for.
         * @param thumbnail The thumbnail pixbuf.
         */
        set_page_thumbnail(page_no: number, thumbnail: GdkPixbuf.Pixbuf): void;

        /**
         * @param target How to open the selected pages.
         */
        set_target(target: PageSelectorTarget): void;

        /**
         * Unselects all pages.
         */
        unselect_all(): void;

        /**
         * Removes a page from the selection.
         * @param page_no The number of the page to unselect.
         */
        unselect_page(page_no: number): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace PaletteChooser {
        // Signal signatures
        interface SignalSignatures extends ResourceChooser.SignalSignatures {
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::resource": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends ResourceChooser.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {

        }
    }

    /**
     * A button which pops up a palette selection dialog.
     * @gir-type Class
     */
    class PaletteChooser extends ResourceChooser implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<PaletteChooser>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PaletteChooser.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PaletteChooser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](title: (string | null), label: (string | null), palette: (Gimp.Palette | null)): PaletteChooser;

        // Conflicted with Gtk.Box.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof PaletteChooser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PaletteChooser.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PaletteChooser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PaletteChooser.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PaletteChooser.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PaletteChooser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace PathComboBox {
        // Signal signatures
        interface SignalSignatures extends IntComboBox.SignalSignatures {
            "notify::ellipsize": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::layout": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::active-id": (pspec: GObject.ParamSpec) => void;
            "notify::add-tearoffs": (pspec: GObject.ParamSpec) => void;
            "notify::button-sensitivity": (pspec: GObject.ParamSpec) => void;
            "notify::cell-area": (pspec: GObject.ParamSpec) => void;
            "notify::column-span-column": (pspec: GObject.ParamSpec) => void;
            "notify::entry-text-column": (pspec: GObject.ParamSpec) => void;
            "notify::has-entry": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::id-column": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::popup-fixed-width": (pspec: GObject.ParamSpec) => void;
            "notify::popup-shown": (pspec: GObject.ParamSpec) => void;
            "notify::row-span-column": (pspec: GObject.ParamSpec) => void;
            "notify::tearoff-title": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-width": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends IntComboBox.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.CellLayout.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class PathComboBox extends IntComboBox implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.CellLayout {
        static $gtype: GObject.GType<PathComboBox>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PathComboBox.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PathComboBox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](constraint: (ItemConstraintFunc | null)): PathComboBox;

        // Conflicted with GimpUi.IntComboBox.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect_after<K extends keyof PathComboBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PathComboBox.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PathComboBox.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PathComboBox.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;

        /**
         * Returns whether the widget should grab focus when it is clicked with the mouse.
         * See `gtk_widget_set_focus_on_click()`.
         * @returns `true` if the widget should grab focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;

        /**
         * Sets whether the widget should grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the widget should grab focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
    }


    namespace PathEditor {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            /**
             * This signal is emitted whenever the user adds, deletes, modifies
             * or reorders an element of the search path.
             * @signal
             * @run-first
             */
            "path-changed": () => void;
            /**
             * This signal is emitted whenever the "writable" column of a directory
             * is changed, either by the user clicking on it or by calling
             * `gimp_path_editor_set_dir_writable()`.
             * @signal
             * @run-first
             */
            "writable-changed": () => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {

        }
    }

    /**
     * This widget is used to edit file search paths.
     * 
     * It shows a list of all directories which are in the search
     * path. You can click a directory to select it. The widget provides a
     * {@link GimpUi.FileEntry} to change the currently selected directory.
     * 
     * There are buttons to add or delete directories as well as "up" and
     * "down" buttons to change the order in which the directories will be
     * searched.
     * 
     * Whenever the user adds, deletes, changes or reorders a directory of
     * the search path, the "path_changed" signal will be emitted.
     * @gir-type Class
     */
    class PathEditor extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<PathEditor>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PathEditor.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PathEditor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](title: string, path: (string | null)): PathEditor;

        // Conflicted with Gtk.Box.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof PathEditor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PathEditor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PathEditor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PathEditor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PathEditor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PathEditor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param directory 
         */
        get_dir_writable(directory: string): boolean;

        /**
         * The elements of the returned search path string are separated with the
         * #G_SEARCHPATH_SEPARATOR character.
         * 
         * Note that you have to `g_free()` the returned string.
         * @returns The search path the user has selected in the path editor.
         */
        get_path(): string;

        /**
         * @param args 
         */
    // Conflicted with Gtk.Widget.get_path
        get_path(...args: never[]): any;

        get_writable_path(): string;

        /**
         * @param directory 
         * @param writable 
         */
        set_dir_writable(directory: string, writable: boolean): void;

        /**
         * The elements of the initial search path must be separated with the
         * `G_SEARCHPATH_SEPARATOR` character.
         * @param path The new path to set.
         */
        set_path(path: string): void;

        /**
         * @param path 
         */
        set_writable_path(path: string): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace PatternChooser {
        // Signal signatures
        interface SignalSignatures extends ResourceChooser.SignalSignatures {
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::resource": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends ResourceChooser.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {

        }
    }

    /**
     * A button which pops up a pattern selection dialog.
     * 
     * Note that this widget draws itself using `GEGL` code. You **must** call
     * {@link Gegl.init} first to be able to use this chooser.
     * @gir-type Class
     */
    class PatternChooser extends ResourceChooser implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<PatternChooser>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PatternChooser.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PatternChooser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](title: (string | null), label: (string | null), pattern: (Gimp.Pattern | null)): PatternChooser;

        // Conflicted with Gtk.Box.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof PatternChooser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PatternChooser.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PatternChooser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PatternChooser.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PatternChooser.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PatternChooser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace PickButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.Button.SignalSignatures {
            /**
             * This signal is emitted when the user has picked a color.
             * @signal
             * @run-first
             */
            "color-picked": (arg0: Gegl.Color) => void;
            "notify::always-show-image": (pspec: GObject.ParamSpec) => void;
            "notify::image": (pspec: GObject.ParamSpec) => void;
            "notify::image-position": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::relief": (pspec: GObject.ParamSpec) => void;
            "notify::use-stock": (pspec: GObject.ParamSpec) => void;
            "notify::use-underline": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::yalign": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::action-name": (pspec: GObject.ParamSpec) => void;
            "notify::action-target": (pspec: GObject.ParamSpec) => void;
            "notify::related-action": (pspec: GObject.ParamSpec) => void;
            "notify::use-action-appearance": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Button.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Actionable.ConstructorProps, Gtk.Activatable.ConstructorProps, Gtk.Buildable.ConstructorProps {

        }
    }

    /**
     * {@link GimpUi.PickButton} is a specialized button. When clicked, it changes
     * the cursor to a color-picker pipette and allows the user to pick a
     * color from any point on the screen.
     * @gir-type Class
     */
    class PickButton extends Gtk.Button implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {
        static $gtype: GObject.GType<PickButton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PickButton.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PickButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): PickButton;

        // Signals
        /** @signal */
        connect<K extends keyof PickButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PickButton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PickButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PickButton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PickButton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PickButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param color 
         * @virtual
         */
        vfunc_color_picked(color: Gegl.Color): void;

        /**
         * @default null
          * @category Inherited from Gtk.Actionable
         */
        get action_name(): (string | null);
        set action_name(val: (string | null));

        /**
         * @default null
          * @category Inherited from Gtk.Actionable
         */
        get actionName(): (string | null);
        set actionName(val: (string | null));

        /** @category Inherited from Gtk.Actionable */
        get action_target(): GLib.Variant;
        set action_target(val: GLib.Variant);

        /** @category Inherited from Gtk.Actionable */
        get actionTarget(): GLib.Variant;
        set actionTarget(val: GLib.Variant);

        /**
         * The action that this activatable will activate and receive
         * updates from for various states and possibly appearance.
         * 
         * > {@link Gtk.Activatable} implementors need to handle the this property and
         * > call `gtk_activatable_do_set_related_action()` when it changes.
         * @since 2.16
         * @deprecated since 3.10
          * @category Inherited from Gtk.Activatable
         */
        get related_action(): Gtk.Action;
        set related_action(val: Gtk.Action);

        /**
         * The action that this activatable will activate and receive
         * updates from for various states and possibly appearance.
         * 
         * > {@link Gtk.Activatable} implementors need to handle the this property and
         * > call `gtk_activatable_do_set_related_action()` when it changes.
         * @since 2.16
         * @deprecated since 3.10
          * @category Inherited from Gtk.Activatable
         */
        get relatedAction(): Gtk.Action;
        set relatedAction(val: Gtk.Action);

        /**
         * Whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         * 
         * See the {@link Gtk.Action} documentation directly to find which properties
         * should be ignored by the {@link Gtk.Activatable} when this property is `false`.
         * 
         * > {@link Gtk.Activatable} implementors need to handle this property
         * > and call `gtk_activatable_sync_action_properties()` on the activatable
         * > widget when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @default true
          * @category Inherited from Gtk.Activatable
         */
        get use_action_appearance(): boolean;
        set use_action_appearance(val: boolean);

        /**
         * Whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         * 
         * See the {@link Gtk.Action} documentation directly to find which properties
         * should be ignored by the {@link Gtk.Activatable} when this property is `false`.
         * 
         * > {@link Gtk.Activatable} implementors need to handle this property
         * > and call `gtk_activatable_sync_action_properties()` on the activatable
         * > widget when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @default true
          * @category Inherited from Gtk.Activatable
         */
        get useActionAppearance(): boolean;
        set useActionAppearance(val: boolean);

        /**
         * Gets the action name for `actionable`.
         * 
         * See `gtk_actionable_set_action_name()` for more information.
         * @returns the action name, or `null` if none is set
         */
        get_action_name(): (string | null);

        /**
         * Gets the current target value of `actionable`.
         * 
         * See `gtk_actionable_set_action_target_value()` for more information.
         * @returns the current target value
         */
        get_action_target_value(): GLib.Variant;

        /**
         * Specifies the name of the action with which this widget should be
         * associated.  If `action_name` is `null` then the widget will be
         * unassociated from any previous action.
         * 
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         * 
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing {@link Gtk.ApplicationWindow} or its associated {@link Gtk.Application},
         * respectively.  This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name, or `null`
         */
        set_action_name(action_name: (string | null)): void;

        /**
         * Sets the target value of an actionable widget.
         * 
         * If `target_value` is `null` then the target value is unset.
         * 
         * The target value has two purposes.  First, it is used as the
         * parameter to activation of the action associated with the
         * {@link Gtk.Actionable} widget. Second, it is used to determine if the widget
         * should be rendered as “active” — the widget is active if the state
         * is equal to the given target.
         * 
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical “radio button” situation.  Each button
         * will be associated with the same action, but with a different target
         * value for that action.  Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value.  Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value, or `null`
         */
        set_action_target_value(target_value: (GLib.Variant | null)): void;

        /**
         * Sets the action-name and associated string target value of an
         * actionable widget.
         * 
         * `detailed_action_name` is a string in the format accepted by
         * `g_action_parse_detailed_name()`.
         * 
         * (Note that prior to version 3.22.25,
         * this function is only usable for actions with a simple "s" target, and
         * `detailed_action_name` must be of the form `"action::target"` where
         * `action` is the action name and `target` is the string to use
         * as the target.)
         * @param detailed_action_name the detailed action name
         */
        set_detailed_action_name(detailed_action_name: string): void;

        /**
         * Gets the action name for `actionable`.
         * 
         * See `gtk_actionable_set_action_name()` for more information.
         * @virtual
         */
        vfunc_get_action_name(): (string | null);

        /**
         * Gets the current target value of `actionable`.
         * 
         * See `gtk_actionable_set_action_target_value()` for more information.
         * @virtual
         */
        vfunc_get_action_target_value(): GLib.Variant;

        /**
         * Specifies the name of the action with which this widget should be
         * associated.  If `action_name` is `null` then the widget will be
         * unassociated from any previous action.
         * 
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         * 
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing {@link Gtk.ApplicationWindow} or its associated {@link Gtk.Application},
         * respectively.  This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name, or `null`
         * @virtual
         */
        vfunc_set_action_name(action_name: (string | null)): void;

        /**
         * Sets the target value of an actionable widget.
         * 
         * If `target_value` is `null` then the target value is unset.
         * 
         * The target value has two purposes.  First, it is used as the
         * parameter to activation of the action associated with the
         * {@link Gtk.Actionable} widget. Second, it is used to determine if the widget
         * should be rendered as “active” — the widget is active if the state
         * is equal to the given target.
         * 
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical “radio button” situation.  Each button
         * will be associated with the same action, but with a different target
         * value for that action.  Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value.  Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value, or `null`
         * @virtual
         */
        vfunc_set_action_target_value(target_value: (GLib.Variant | null)): void;

        /**
         * This is a utility function for {@link Gtk.Activatable} implementors.
         * 
         * When implementing {@link Gtk.Activatable} you must call this when
         * handling changes of the {@link Gtk.Activatable.related_action}, and
         * you must also use this to break references in {@link GObject.Object}->dispose().
         * 
         * This function adds a reference to the currently set related
         * action for you, it also makes sure the {@link Gtk.Activatable}->update()
         * method is called when the related {@link Gtk.Action} properties change
         * and registers to the action’s proxy list.
         * 
         * > Be careful to call this before setting the local
         * > copy of the {@link Gtk.Action} property, since this function uses
         * > `gtk_activatable_get_related_action()` to retrieve the
         * > previous action.
         * @param action the {@link Gtk.Action} to set
         */
        do_set_related_action(action: Gtk.Action): void;

        /**
         * Gets the related {@link Gtk.Action} for `activatable`.
         * @returns the related {@link Gtk.Action} if one is set.
         */
        get_related_action(): Gtk.Action;

        /**
         * Gets whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         * @returns whether `activatable` uses its actions appearance.
         */
        get_use_action_appearance(): boolean;

        /**
         * Sets the related action on the `activatable` object.
         * 
         * > {@link Gtk.Activatable} implementors need to handle the {@link Gtk.Activatable.related_action}
         * > property and call `gtk_activatable_do_set_related_action()` when it changes.
         * @param action the {@link Gtk.Action} to set
         */
        set_related_action(action: Gtk.Action): void;

        /**
         * Sets whether this activatable should reset its layout and appearance
         * when setting the related action or when the action changes appearance
         * 
         * > {@link Gtk.Activatable} implementors need to handle the
         * > {@link Gtk.Activatable.use_action_appearance} property and call
         * > `gtk_activatable_sync_action_properties()` to update `activatable`
         * > if needed.
         * @param use_appearance whether to use the actions appearance
         */
        set_use_action_appearance(use_appearance: boolean): void;

        /**
         * This is called to update the activatable completely, this is called
         * internally when the {@link Gtk.Activatable.related_action} property is set
         * or unset and by the implementing class when
         * {@link Gtk.Activatable.use_action_appearance} changes.
         * @param action the related {@link Gtk.Action} or `null`
         */
        sync_action_properties(action: (Gtk.Action | null)): void;

        /**
         * This is called to update the activatable completely, this is called
         * internally when the {@link Gtk.Activatable.related_action} property is set
         * or unset and by the implementing class when
         * {@link Gtk.Activatable.use_action_appearance} changes.
         * @param action the related {@link Gtk.Action} or `null`
         * @virtual
         */
        vfunc_sync_action_properties(action: (Gtk.Action | null)): void;

        /**
         * Called to update the activatable when its related action’s properties change.
         * You must check the {@link Gtk.Activatable.use_action_appearance} property only apply action
         * properties that are meant to effect the appearance accordingly.
         * @param action 
         * @param property_name 
         * @virtual
         */
        vfunc_update(action: Gtk.Action, property_name: string): void;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;

        /**
         * Returns whether the widget should grab focus when it is clicked with the mouse.
         * See `gtk_widget_set_focus_on_click()`.
         * @returns `true` if the widget should grab focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;

        /**
         * Sets whether the widget should grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the widget should grab focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
    }


    namespace Preview {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            invalidated: () => void;
            "notify::update": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            update: boolean;
        }
    }

    /**
     * A widget providing a {@link GimpUi.PreviewArea} plus framework to update the
     * preview.
     * @gir-type Class
     */
    abstract class Preview extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<Preview>;

        // Properties
        /**
         * @default true
         */
        get update(): boolean;
        set update(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Preview.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Preview.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Preview.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Preview.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Preview.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Preview.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Preview.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Preview.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * Calls the GimpPreview::draw method. GimpPreview itself doesn't
         * implement a default draw method so the behavior is determined by
         * the derived class implementing this method.
         * 
         * {@link GimpUi.DrawablePreview} implements `gimp_preview_draw()` by drawing the
         * original, unmodified drawable to the `preview`.
         * @virtual
         */
        vfunc_draw(): void;

        /**
         * @param args 
         * @virtual
         */
    // Conflicted with Gtk.Widget.vfunc_draw
        vfunc_draw(...args: never[]): any;

        /**
         * Calls the GimpPreview::draw_buffer method. GimpPreview itself
         * doesn't implement this method so the behavior is determined by the
         * derived class implementing this method.
         * @param buffer a pixel buffer the size of the preview
         * @param rowstride the `buffer`'s rowstride
         * @virtual
         */
        vfunc_draw_buffer(buffer: Uint8Array, rowstride: number): void;

        /**
         * @param area 
         * @param width 
         * @param height 
         * @virtual
         */
        vfunc_draw_thumb(area: PreviewArea, width: number, height: number): void;

        /**
         * @virtual
         */
        vfunc_invalidated(): void;

        /**
         * @virtual
         */
        vfunc_set_cursor(): void;

        /**
         * Transforms from image to widget coordinates.
         * @param src_x horizontal position on the previewed image
         * @param src_y vertical position on the previewed image
         * @virtual
         */
        vfunc_transform(src_x: number, src_y: number): [number, number];

        /**
         * Transforms from widget to image coordinates.
         * @param src_x horizontal position relative to the preview area's origin
         * @param src_y vertical position relative to  preview area's origin
         * @virtual
         */
        vfunc_untransform(src_x: number, src_y: number): [number, number];

        // Methods
        /**
         * Calls the GimpPreview::draw method. GimpPreview itself doesn't
         * implement a default draw method so the behavior is determined by
         * the derived class implementing this method.
         * 
         * {@link GimpUi.DrawablePreview} implements `gimp_preview_draw()` by drawing the
         * original, unmodified drawable to the `preview`.
         */
        draw(): void;

        /**
         * Calls the GimpPreview::draw_buffer method. GimpPreview itself
         * doesn't implement this method so the behavior is determined by the
         * derived class implementing this method.
         * @param buffer a pixel buffer the size of the preview
         * @param rowstride the `buffer`'s rowstride
         */
        draw_buffer(buffer: (Uint8Array | string), rowstride: number): void;

        /**
         * In most cases, you shouldn't need to access the {@link GimpUi.PreviewArea}
         * that is being used in the `preview`. Sometimes however, you need to.
         * For example if you want to receive mouse events from the area. In
         * such cases, use `gimp_preview_get_area()`.
         * @returns a pointer to the {@link GimpUi.PreviewArea} used in the `preview`.
         */
        get_area(): PreviewArea;

        get_bounds(): [number, number, number, number];

        /**
         * Gives access to the horizontal {@link Gtk.Box} at the bottom of the preview
         * that contains the update toggle. Derived widgets can use this function
         * if they need to add controls to this area.
         * @returns the horizontal {@link Gtk.Box} at the bottom of the preview.
         */
        get_controls(): Gtk.Box;

        /**
         * See `gimp_preview_set_default_cursor()`:
         * @returns The `preview`'s default {@link Gdk.Cursor}.
         */
        get_default_cursor(): Gdk.Cursor;

        /**
         * @returns a pointer to the {@link Gtk.AspectFrame} used in the `preview`.
         */
        get_frame(): Gtk.AspectFrame;

        /**
         * @returns a pointer to the {@link Gtk.Grid} used in the `preview`.
         */
        get_grid(): Gtk.Grid;

        get_offsets(): [number, number];

        get_position(): [number, number];

        get_size(): [number, number];

        /**
         * @returns the state of the "Preview" check button.
         */
        get_update(): boolean;

        /**
         * This function starts or renews a short low-priority timeout. When
         * the timeout expires, the GimpPreview::invalidated signal is emitted
         * which will usually cause the `preview` to be updated.
         * 
         * This function does nothing unless the "Preview" button is checked.
         * 
         * During the emission of the signal a busy cursor is set on the
         * toplevel window containing the `preview` and on the preview area
         * itself.
         */
        invalidate(): void;

        /**
         * Sets the lower and upper limits for the previewed area. The
         * difference between the upper and lower value is used to set the
         * maximum size of the {@link GimpUi.PreviewArea} used in the `preview`.
         * @param xmin the minimum X value
         * @param ymin the minimum Y value
         * @param xmax the maximum X value
         * @param ymax the maximum Y value
         */
        set_bounds(xmin: number, ymin: number, xmax: number, ymax: number): void;

        /**
         * Sets the default mouse cursor for the preview.  Note that this will
         * be overridden by a {@link Gdk.CursorType.FLEUR} if the preview has scrollbars, or by a
         * {@link Gdk.CursorType.WATCH} when the preview is invalidated.
         * @param cursor a {@link Gdk.Cursor} or `null`
         */
        set_default_cursor(cursor: Gdk.Cursor): void;

        /**
         * @param xoff 
         * @param yoff 
         */
        set_offsets(xoff: number, yoff: number): void;

        /**
         * @param width 
         * @param height 
         */
        set_size(width: number, height: number): void;

        /**
         * Sets the state of the "Preview" check button.
         * @param update `true` if the preview should invalidate itself when being          scrolled or when `gimp_preview_invalidate()` is being called
         */
        set_update(update: boolean): void;

        /**
         * Transforms from image to widget coordinates.
         * @param src_x horizontal position on the previewed image
         * @param src_y vertical position on the previewed image
         */
        transform(src_x: number, src_y: number): [number, number];

        /**
         * Transforms from widget to image coordinates.
         * @param src_x horizontal position relative to the preview area's origin
         * @param src_y vertical position relative to  preview area's origin
         */
        untransform(src_x: number, src_y: number): [number, number];

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace PreviewArea {
        // Signal signatures
        interface SignalSignatures extends Gtk.DrawingArea.SignalSignatures {
            "notify::check-custom-color1": (pspec: GObject.ParamSpec) => void;
            "notify::check-custom-color2": (pspec: GObject.ParamSpec) => void;
            "notify::check-size": (pspec: GObject.ParamSpec) => void;
            "notify::check-type": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.DrawingArea.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            check_custom_color1: Gegl.Color;
            checkCustomColor1: Gegl.Color;
            check_custom_color2: Gegl.Color;
            checkCustomColor2: Gegl.Color;
            check_size: Gimp.CheckSize;
            checkSize: Gimp.CheckSize;
            check_type: Gimp.CheckType;
            checkType: Gimp.CheckType;
        }
    }

    /**
     * A general purpose preview widget which caches its pixel data.
     * @gir-type Class
     */
    class PreviewArea extends Gtk.DrawingArea implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<PreviewArea>;

        // Properties
        get check_custom_color1(): Gegl.Color;
        set check_custom_color1(val: Gegl.Color);

        get checkCustomColor1(): Gegl.Color;
        set checkCustomColor1(val: Gegl.Color);

        get check_custom_color2(): Gegl.Color;
        set check_custom_color2(val: Gegl.Color);

        get checkCustomColor2(): Gegl.Color;
        set checkCustomColor2(val: Gegl.Color);

        /**
         * @default Gimp.CheckSize.MEDIUM_CHECKS
         */
        get check_size(): Gimp.CheckSize;
        set check_size(val: Gimp.CheckSize);

        /**
         * @default Gimp.CheckSize.MEDIUM_CHECKS
         */
        get checkSize(): Gimp.CheckSize;
        set checkSize(val: Gimp.CheckSize);

        /**
         * @default Gimp.CheckType.GRAY_CHECKS
         */
        get check_type(): Gimp.CheckType;
        set check_type(val: Gimp.CheckType);

        /**
         * @default Gimp.CheckType.GRAY_CHECKS
         */
        get checkType(): Gimp.CheckType;
        set checkType(val: Gimp.CheckType);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PreviewArea.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PreviewArea.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): PreviewArea;

        // Signals
        /** @signal */
        connect<K extends keyof PreviewArea.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PreviewArea.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PreviewArea.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PreviewArea.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PreviewArea.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PreviewArea.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Composites `buf1` on `buf2` with the given `opacity`, draws the result
         * to `area` and queues a redraw on the given rectangle.
         * 
         * Since GIMP 2.2
         * @param x x offset in preview
         * @param y y offset in preview
         * @param width buffer width
         * @param height buffer height
         * @param type the {@link Gimp.ImageType} of `buf1` and `buf2`
         * @param buf1 a `guchar` buffer that contains the pixel data for                 the lower layer
         * @param rowstride1 rowstride of `buf1`
         * @param buf2 a `guchar` buffer that contains the pixel data for                 the upper layer
         * @param rowstride2 rowstride of `buf2`
         * @param opacity The opacity of the first layer.
         */
        blend(x: number, y: number, width: number, height: number, type: Gimp.ImageType, buf1: (Uint8Array | string), rowstride1: number, buf2: (Uint8Array | string), rowstride2: number, opacity: number): void;

        /**
         * Draws `buf` on `area` and queues a redraw on the given rectangle.
         * 
         * Since GIMP 2.2
         * @param x x offset in preview
         * @param y y offset in preview
         * @param width buffer width
         * @param height buffer height
         * @param type the {@link Gimp.ImageType} of `buf`
         * @param buf a `guchar` buffer that contains the preview pixel data.
         * @param rowstride rowstride of `buf`
         */
        draw(x: number, y: number, width: number, height: number, type: Gimp.ImageType, buf: (Uint8Array | string), rowstride: number): void;

        /**
         * @param args 
         */
    // Conflicted with Gtk.Widget.draw
        draw(...args: never[]): any;

        /**
         * Fills the given rectangle of `area` in the given color and queues a
         * redraw.
         * 
         * Since GIMP 2.2
         * @param x x offset in preview
         * @param y y offset in preview
         * @param width width of the rectangle to fill
         * @param height height of the rectangle to fill
         * @param red red component of the fill color (0-255)
         * @param green green component of the fill color (0-255)
         * @param blue red component of the fill color (0-255)
         */
        fill(x: number, y: number, width: number, height: number, red: number, green: number, blue: number): void;

        /**
         * Gets the preview area size
         */
        get_size(): [number, number];

        /**
         * Composites `buf1` on `buf2` with the given `mask`, draws the result on
         * `area` and queues a redraw on the given rectangle.
         * 
         * Since GIMP 2.2
         * @param x x offset in preview
         * @param y y offset in preview
         * @param width buffer width
         * @param height buffer height
         * @param type the {@link Gimp.ImageType} of `buf1` and `buf2`
         * @param buf1 a `guchar` buffer that contains the pixel data for                  the lower layer
         * @param rowstride1 rowstride of `buf1`
         * @param buf2 a `guchar` buffer that contains the pixel data for                  the upper layer
         * @param rowstride2 rowstride of `buf2`
         * @param mask a `guchar` buffer representing the mask of the second                  layer.
         * @param rowstride_mask rowstride for the mask.
         */
        mask(x: number, y: number, width: number, height: number, type: Gimp.ImageType, buf1: (Uint8Array | string), rowstride1: number, buf2: (Uint8Array | string), rowstride2: number, mask: (Uint8Array | string), rowstride_mask: number): void;

        /**
         * Creates a popup menu that allows one to configure the size and type of
         * the checkerboard pattern that the `area` uses to visualize transparency.
         * @param event the button event that causes the menu to popup or `null`
         */
        menu_popup(event: (Gdk.EventButton | null)): void;

        /**
         * Reset any previous drawing done through {@link GimpUi.PreviewArea} functions.
         */
        reset(): void;

        /**
         * Sets the color management configuration to use with this preview area.
         * @param config a {@link Gimp.ColorConfig} object.
         */
        set_color_config(config: Gimp.ColorConfig): void;

        /**
         * Sets the colormap for the {@link GimpUi.PreviewArea} widget. You need to
         * call this function before you use `gimp_preview_area_draw()` with
         * an image type of {@link Gimp.ImageType.INDEXED_IMAGE} or {@link Gimp.ImageType.INDEXEDA_IMAGE}.
         * 
         * Since GIMP 2.2
         * @param colormap a `guchar` buffer that contains the colormap
         * @param num_colors the number of colors in the colormap
         */
        set_colormap(colormap: (Uint8Array | string), num_colors: number): void;

        /**
         * Usually a {@link GimpUi.PreviewArea} fills the size that it is
         * allocated. This function allows you to limit the preview area to a
         * maximum size. If a larger size is allocated for the widget, the
         * preview will draw itself centered into the allocated area.
         * @param width the maximum width in pixels or -1 to unset the limit
         * @param height the maximum height in pixels or -1 to unset the limit
         */
        set_max_size(width: number, height: number): void;

        /**
         * Sets the offsets of the previewed area. This information is used
         * when drawing the checkerboard and to determine the dither offsets.
         * @param x horizontal offset
         * @param y vertical offset
         */
        set_offsets(x: number, y: number): void;
    }


    namespace ProcBrowserDialog {
        // Signal signatures
        interface SignalSignatures extends Dialog.SignalSignatures {
            /**
             * Emitted when one of the rows in the contained {@link Gtk.TreeView} is activated.
             * @signal
             * @run-last
             */
            "row-activated": () => void;
            /**
             * Emitted when the selection in the contained {@link Gtk.TreeView} changes.
             * @signal
             * @run-last
             */
            "selection-changed": () => void;
            "notify::help-func": (pspec: GObject.ParamSpec) => void;
            "notify::help-id": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::use-header-bar": (pspec: GObject.ParamSpec) => void;
            "notify::accept-focus": (pspec: GObject.ParamSpec) => void;
            "notify::application": (pspec: GObject.ParamSpec) => void;
            "notify::attached-to": (pspec: GObject.ParamSpec) => void;
            "notify::decorated": (pspec: GObject.ParamSpec) => void;
            "notify::default-height": (pspec: GObject.ParamSpec) => void;
            "notify::default-width": (pspec: GObject.ParamSpec) => void;
            "notify::deletable": (pspec: GObject.ParamSpec) => void;
            "notify::destroy-with-parent": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-map": (pspec: GObject.ParamSpec) => void;
            "notify::focus-visible": (pspec: GObject.ParamSpec) => void;
            "notify::gravity": (pspec: GObject.ParamSpec) => void;
            "notify::has-resize-grip": (pspec: GObject.ParamSpec) => void;
            "notify::has-toplevel-focus": (pspec: GObject.ParamSpec) => void;
            "notify::hide-titlebar-when-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-active": (pspec: GObject.ParamSpec) => void;
            "notify::is-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonics-visible": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::resizable": (pspec: GObject.ParamSpec) => void;
            "notify::resize-grip-visible": (pspec: GObject.ParamSpec) => void;
            "notify::role": (pspec: GObject.ParamSpec) => void;
            "notify::screen": (pspec: GObject.ParamSpec) => void;
            "notify::skip-pager-hint": (pspec: GObject.ParamSpec) => void;
            "notify::skip-taskbar-hint": (pspec: GObject.ParamSpec) => void;
            "notify::startup-id": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::transient-for": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::type-hint": (pspec: GObject.ParamSpec) => void;
            "notify::urgency-hint": (pspec: GObject.ParamSpec) => void;
            "notify::window-position": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Dialog.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {

        }
    }

    /**
     * The dialog for the procedure and plugin browsers.
     * @gir-type Class
     */
    class ProcBrowserDialog extends Dialog implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<ProcBrowserDialog>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ProcBrowserDialog.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ProcBrowserDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ProcBrowserDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProcBrowserDialog.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ProcBrowserDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProcBrowserDialog.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ProcBrowserDialog.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ProcBrowserDialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Retrieves the name of the currently selected procedure.
         * @returns The name of the selected procedure of `null` if no               procedure is selected.
         */
        get_selected(): (string | null);
    }


    namespace ProcedureDialog {
        // Signal signatures
        interface SignalSignatures extends Dialog.SignalSignatures {
            "notify::config": (pspec: GObject.ParamSpec) => void;
            "notify::procedure": (pspec: GObject.ParamSpec) => void;
            "notify::help-func": (pspec: GObject.ParamSpec) => void;
            "notify::help-id": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::use-header-bar": (pspec: GObject.ParamSpec) => void;
            "notify::accept-focus": (pspec: GObject.ParamSpec) => void;
            "notify::application": (pspec: GObject.ParamSpec) => void;
            "notify::attached-to": (pspec: GObject.ParamSpec) => void;
            "notify::decorated": (pspec: GObject.ParamSpec) => void;
            "notify::default-height": (pspec: GObject.ParamSpec) => void;
            "notify::default-width": (pspec: GObject.ParamSpec) => void;
            "notify::deletable": (pspec: GObject.ParamSpec) => void;
            "notify::destroy-with-parent": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-map": (pspec: GObject.ParamSpec) => void;
            "notify::focus-visible": (pspec: GObject.ParamSpec) => void;
            "notify::gravity": (pspec: GObject.ParamSpec) => void;
            "notify::has-resize-grip": (pspec: GObject.ParamSpec) => void;
            "notify::has-toplevel-focus": (pspec: GObject.ParamSpec) => void;
            "notify::hide-titlebar-when-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-active": (pspec: GObject.ParamSpec) => void;
            "notify::is-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonics-visible": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::resizable": (pspec: GObject.ParamSpec) => void;
            "notify::resize-grip-visible": (pspec: GObject.ParamSpec) => void;
            "notify::role": (pspec: GObject.ParamSpec) => void;
            "notify::screen": (pspec: GObject.ParamSpec) => void;
            "notify::skip-pager-hint": (pspec: GObject.ParamSpec) => void;
            "notify::skip-taskbar-hint": (pspec: GObject.ParamSpec) => void;
            "notify::startup-id": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::transient-for": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::type-hint": (pspec: GObject.ParamSpec) => void;
            "notify::urgency-hint": (pspec: GObject.ParamSpec) => void;
            "notify::window-position": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Dialog.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            config: Gimp.ProcedureConfig;
            procedure: Gimp.Procedure;
        }
    }

    /**
     * @gir-type Class
     */
    class ProcedureDialog extends Dialog implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<ProcedureDialog>;

        // Properties
        get config(): Gimp.ProcedureConfig;
        set config(val: Gimp.ProcedureConfig);

        /**
         * @construct-only
         */
        get procedure(): Gimp.Procedure;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ProcedureDialog.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ProcedureDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](procedure: Gimp.Procedure, config: Gimp.ProcedureConfig, title: (string | null)): ProcedureDialog;

        // Conflicted with Gtk.Dialog.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof ProcedureDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProcedureDialog.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ProcedureDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProcedureDialog.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ProcedureDialog.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ProcedureDialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param procedure 
         * @param config 
         * @virtual
         */
        vfunc_fill_end(procedure: Gimp.Procedure, config: Gimp.ProcedureConfig): void;

        /**
         * @param procedure 
         * @param config 
         * @virtual
         */
        vfunc_fill_start(procedure: Gimp.Procedure, config: Gimp.ProcedureConfig): void;

        // Methods
        /**
         * Creates and populates a new {@link Gtk.Box} with widgets corresponding to
         * every listed `properties`. If the list is empty, the created box will
         * be filled by the whole list of properties of the associated
         * {@link Gimp.Procedure}, in the defined order. This is similar of how
         * `gimp_procedure_dialog_fill()` works except that it creates a new
         * widget which is not inside `dialog` itself.
         * 
         * The `container_id` must be a unique ID which is neither the name of a
         * property of the {@link Gimp.ProcedureConfig} associated to `dialog`, nor is it
         * the ID of any previously created container. This ID can later be used
         * together with property names to be packed in other containers or
         * inside `dialog` itself.
         * @param container_id a container identifier.
         * @param properties the list of property names.
         * @returns the {@link Gtk.Box} representing `property`. The                           object belongs to `dialog` and must not be                           freed.
         */
        fill_box(container_id: string, properties: (string[] | null)): Gtk.Widget;

        /**
         * Creates a new {@link Gtk.Expander} and packs `title_id` as its title
         * and `contents_id` as content.
         * If `title_id` represents a boolean property, its value will be used to
         * expand the {@link Gtk.Expander}. If `invert_title` is TRUE, then expand binding is
         * inverted.
         * 
         * The `container_id` must be a unique ID which is neither the name of a
         * property of the {@link Gimp.ProcedureConfig} associated to `dialog`, nor is it
         * the ID of any previously created container. This ID can later be used
         * together with property names to be packed in other containers or
         * inside `dialog` itself.
         * @param container_id a container identifier.
         * @param title_id the identifier for the title widget.
         * @param invert_title whether to use the opposite value of `title_id` if it                 represents a boolean widget.
         * @param contents_id the identifier for the contents.
         * @returns the {@link Gtk.Widget} representing `container_id`. The                           object belongs to `dialog` and must not be                           freed.
         */
        fill_expander(container_id: string, title_id: (string | null), invert_title: boolean, contents_id: (string | null)): Gtk.Widget;

        /**
         * Creates and populates a new {@link Gtk.FlowBox} with widgets corresponding to
         * every listed `properties`. If the list is empty, the created flowbox
         * will be filled by the whole list of properties of the associated
         * {@link Gimp.Procedure}, in the defined order. This is similar of how
         * `gimp_procedure_dialog_fill()` works except that it creates a new
         * widget which is not inside `dialog` itself.
         * 
         * The `container_id` must be a unique ID which is neither the name of a
         * property of the {@link Gimp.ProcedureConfig} associated to `dialog`, nor is it
         * the ID of any previously created container. This ID can later be used
         * together with property names to be packed in other containers or
         * inside `dialog` itself.
         * @param container_id a container identifier.
         * @param properties the list of property names.
         * @returns the {@link Gtk.FlowBox} representing `property`. The                           object belongs to `dialog` and must not be                           freed.
         */
        fill_flowbox(container_id: string, properties: (string[] | null)): Gtk.Widget;

        /**
         * Creates a new {@link Gtk.Frame} and packs `title_id` as its title and
         * `contents_id` as its child.
         * If `title_id` represents a boolean property, its value will be used to
         * renders `contents_id` sensitive or not. If `invert_title` is TRUE, then
         * sensitivity binding is inverted.
         * 
         * The `container_id` must be a unique ID which is neither the name of a
         * property of the {@link Gimp.ProcedureConfig} associated to `dialog`, nor is it
         * the ID of any previously created container. This ID can later be used
         * together with property names to be packed in other containers or
         * inside `dialog` itself.
         * @param container_id a container identifier.
         * @param title_id the identifier for the title widget.
         * @param invert_title whether to use the opposite value of `title_id` if it                 represents a boolean widget.
         * @param contents_id the identifier for the contents.
         * @returns the {@link Gtk.Widget} representing `container_id`. The                           object belongs to `dialog` and must not be                           freed.
         */
        fill_frame(container_id: string, title_id: (string | null), invert_title: boolean, contents_id: (string | null)): Gtk.Widget;

        /**
         * Populate `dialog` with the widgets corresponding to every listed
         * properties. If the list is `null`, `dialog` will be filled by the whole
         * list of properties of the associated {@link Gimp.Procedure}, in the defined
         * order:
         * 
         * ```c
         * gimp_procedure_dialog_fill_list (dialog, NULL);
         * ```
         * 
         * Nevertheless if you only wish to display a partial list of
         * properties, or if you wish to change the display order, then you have
         * to give an explicit list:
         * 
         * ```c
         * gimp_procedure_dialog_fill (dialog, "property-1", "property-2", NULL);
         * ```
         * 
         * 
         * Note: you do not have to call `gimp_procedure_dialog_get_widget()` on
         * every property before calling this function unless you want a given
         * property to be represented by an alternative widget type. By default,
         * each property will get a default representation according to its
         * type.
         * @param properties the list of property names.
         */
        fill(properties: (string[] | null)): void;

        /**
         * Creates and populates a new {@link Gtk.Notebook} with widgets corresponding to every
         * listed properties.
         * This is similar of how `gimp_procedure_dialog_fill_list()` works except that it
         * creates a new widget which is not inside `dialog` itself.
         * 
         * The `container_id` must be a unique ID which is neither the name of a
         * property of the {@link Gimp.ProcedureConfig} associated to `dialog`, nor is it
         * the ID of any previously created container. This ID can later be used
         * together with property names to be packed in other containers or
         * inside `dialog` itself.
         * @param container_id a container identifier.
         * @param label_list the list of label IDs.
         * @param page_list the list of page IDs.
         * @returns the {@link Gtk.Notebook} representing `property`. The                           object belongs to `dialog` and must not be                           freed.
         */
        fill_notebook(container_id: string, label_list: string[], page_list: string[]): Gtk.Widget;

        /**
         * Creates and populates a new {@link Gtk.Paned} containing widgets corresponding to
         * `child1_id` and `child2_id`.
         * This is similar of how `gimp_procedure_dialog_fill()` works except that it
         * creates a new widget which is not inside `dialog` itself.
         * 
         * The `container_id` must be a unique ID which is neither the name of a
         * property of the {@link Gimp.ProcedureConfig} associated to `dialog`, nor is it
         * the ID of any previously created container. This ID can later be used
         * together with property names to be packed in other containers or
         * inside `dialog` itself.
         * @param container_id a container identifier.
         * @param orientation 
         * @param child1_id the first child's ID.
         * @param child2_id the second child's ID.
         * @returns the {@link Gtk.Paned} representing `property`. The                           object belongs to `dialog` and must not be                           freed.
         */
        fill_paned(container_id: string, orientation: Gtk.Orientation, child1_id: (string | null), child2_id: (string | null)): Gtk.Widget;

        /**
         * Creates and populates a new {@link Gtk.ScrolledWindow} with a widget corresponding
         * to the declared content id.
         * 
         * The `container_id` must be a unique ID which is neither the name of a
         * property of the {@link Gimp.ProcedureConfig} associated to `dialog`, nor is it
         * the ID of any previously created container. This ID can later be used
         * together with property names to be packed in other containers or
         * inside `dialog` itself.
         * @param container_id a container identifier.
         * @param contents_id The identifier for the contents.
         * @returns the {@link Gtk.ScrolledWindow} representing `contents_id`.                           The object belongs to `dialog` and must not be                           freed.
         */
        fill_scrolled_window(container_id: string, contents_id: string): Gtk.Widget;

        /**
         * Creates a new widget for `property` which must necessarily be a
         * {@link Gegl.Color} property.
         * This must be used instead of `gimp_procedure_dialog_get_widget()` when
         * you want a {@link GimpUi.LabelColor} which is not customizable for a color
         * property, or when to set a specific `type`.
         * 
         * If a widget has already been created for this procedure, it will be
         * returned instead (whatever its actual widget type).
         * @param property name of the {@link Gegl.Color} property to build a widget for. It            must be a property of the {@link Gimp.Procedure} `dialog` has been            created for.
         * @param editable whether the color can be edited or is only for display.
         * @param type the {@link GimpUi.ColorAreaType}.
         * @returns a {@link GimpUi.LabelColor} representing `property`.                           The object belongs to `dialog` and must not                           be freed.
         */
        get_color_widget(property: string, editable: boolean, type: ColorAreaType): Gtk.Widget;

        /**
         * Creates a new `GimpCoordinates` for `x_property` and `y_property` which
         * must necessarily be an integer or double property.
         * The associated `unit_property` must be a GimpUnit property.
         * 
         * If a widget has already been created for this procedure, it will be
         * returned instead (whatever its actual widget type).
         * @param coordinates_id Identifier for `GimpCoordinates` widget.
         * @param x_property Name of int or double property for X coordinate.
         * @param y_property Name of int or double property for Y coordinate.
         * @param unit_property Name of unit property.
         * @param unit_format A printf-like unit-format string as is used with                     `gimp_unit_menu_new()`.
         * @param update_policy How the automatic pixel <-> real-world-unit                     calculations should be done.
         * @param x_resolution The resolution (in dpi) for the X coordinate.
         * @param y_resolution The resolution (in dpi) for the Y coordinate.
         * @returns the {@link Gtk.Widget} representing `coordinates_id`.                           The object belongs to `dialog` and must not be                           freed.
         */
        get_coordinates(coordinates_id: string, x_property: string, y_property: string, unit_property: string, unit_format: string, update_policy: SizeEntryUpdatePolicy, x_resolution: number, y_resolution: number): Gtk.Widget;

        /**
         * Gets or creates a new {@link GimpUi.DrawablePreview} for `drawable`.
         * If a widget with the `preview_id` has already been created for
         * this procedure, it will be returned instead.
         * 
         * The `preview_id` ID can later be used together with property names
         * to be packed in other containers or inside `dialog` itself.
         * @param preview_id the ID of {@link GimpUi.DrawablePreview}.
         * @param drawable the {@link Gimp.Drawable}.
         * @returns the {@link Gtk.Widget} representing `preview_id`. The                           object belongs to `dialog` and must not be                           freed.
         */
        get_drawable_preview(preview_id: string, drawable: Gimp.Drawable): Gtk.Widget;

        /**
         * Creates a new {@link GimpUi.LabelIntWidget} for `property` which must
         * necessarily be an integer or boolean property.
         * This must be used instead of `gimp_procedure_dialog_get_widget()` when
         * you want to create a combo box from an integer property.
         * 
         * If a widget has already been created for this procedure, it will be
         * returned instead (whatever its actual widget type).
         * @param property name of the int property to build a combo for. It must be            a property of the {@link Gimp.Procedure} `dialog` has been created            for.
         * @param store the {@link GimpUi.IntStore} which will be used.
         * @returns the {@link Gtk.Widget} representing `property`. The                           object belongs to `dialog` and must not be                           freed.
         */
        get_int_combo(property: string, store: IntStore): Gtk.Widget;

        /**
         * Creates a new `GimpLabelIntRadioFrame` for `property` which must
         * necessarily be an integer, enum or boolean property.
         * This must be used instead of `gimp_procedure_dialog_get_widget()` when
         * you want to create a group of %GtkRadioButton-s from an integer
         * property.
         * 
         * If a widget has already been created for this procedure, it will be
         * returned instead (whatever its actual widget type).
         * @param property name of the int property to build radio buttons for. It            must be a property of the {@link Gimp.Procedure} `dialog` has been            created for.
         * @param store the {@link GimpUi.IntStore} which will be used.
         * @returns the {@link Gtk.Widget} representing `property`. The                           object belongs to `dialog` and must not be                           freed.
         */
        get_int_radio(property: string, store: IntStore): Gtk.Widget;

        /**
         * Creates a new {@link Gtk.Label} with `text`. It can be useful for packing
         * textual information in between property settings.
         * 
         * If `label_id` is an existing string property of the {@link Gimp.ProcedureConfig}
         * associated to `dialog`, then it will sync to the property value. In this case,
         * `text` should be `null`.
         * 
         * If `label_id` is a unique ID which is neither the name of a property of the
         * {@link Gimp.ProcedureConfig} associated to `dialog`, nor is it the ID of any
         * previously created label or container, it will be initialized to `text`. This
         * ID can later be used together with property names to be packed in other
         * containers or inside `dialog` itself.
         * @param label_id the label for the {@link Gtk.Label}.
         * @param text the text for the label.
         * @param is_markup whether `text` is formatted with Pango markup.
         * @param with_mnemonic whether `text` contains a mnemonic character.
         * @returns the {@link Gtk.Widget} representing `label_id`. The                           object belongs to `dialog` and must not be                           freed.
         */
        get_label(label_id: string, text: string, is_markup: boolean, with_mnemonic: boolean): Gtk.Widget;

        /**
         * Creates a new {@link GimpUi.ScaleEntry} for `property` which must necessarily be
         * an integer or double property.
         * This can be used instead of `gimp_procedure_dialog_get_widget()` in
         * particular if you want to tweak the display factor. A typical example
         * is showing a [0.0, 1.0] range as [0.0, 100.0] instead (`factor` = 100.0).
         * 
         * If a widget has already been created for this procedure, it will be
         * returned instead (whatever its actual widget type).
         * @param property name of the int property to build a combo for. It must be            a property of the {@link Gimp.Procedure} `dialog` has been created            for.
         * @param factor a display factor for the range shown by the widget.
         * @returns the {@link Gtk.Widget} representing `property`. The                           object belongs to `dialog` and must not be                           freed.
         */
        get_scale_entry(property: string, factor: number): Gtk.Widget;

        /**
         * Creates a new {@link GimpUi.SizeEntry} for `property` which must necessarily be
         * an integer or double property. The associated `unit_property` must be
         * a GimpUnit or integer property.
         * 
         * If a widget has already been created for this procedure, it will be
         * returned instead (whatever its actual widget type).
         * @param property name of the int property to build an entry for.                     It must be a property of the {@link Gimp.Procedure} `dialog`                     has been created for.
         * @param property_is_pixel when `true`, the property value is in pixels,                     and in the selected unit otherwise.
         * @param unit_property name of unit property.
         * @param unit_format a printf-like unit-format string used for unit                     labels.
         * @param update_policy how the automatic pixel <-> real-world-unit                     calculations should be done.
         * @param resolution the resolution (in dpi) for the field.
         * @returns the {@link Gtk.Widget} representing `property`. The                           object belongs to `dialog` and must not be                           freed.
         */
        get_size_entry(property: string, property_is_pixel: boolean, unit_property: string, unit_format: string, update_policy: SizeEntryUpdatePolicy, resolution: number): Gtk.Widget;

        /**
         * Creates a new {@link GimpUi.SpinScale} for `property` which must necessarily be
         * an integer or double property.
         * This can be used instead of `gimp_procedure_dialog_get_widget()` in
         * particular if you want to tweak the display factor. A typical example
         * is showing a [0.0, 1.0] range as [0.0, 100.0] instead (`factor` = 100.0).
         * 
         * If a widget has already been created for this procedure, it will be
         * returned instead (whatever its actual widget type).
         * @param property name of the int or double property to build a            {@link GimpUi.SpinScale} for. It must be a property of the            {@link Gimp.Procedure} `dialog` has been created for.
         * @param factor a display factor for the range shown by the widget.            It must be set to 1.0 for integer properties.
         * @returns the {@link Gtk.Widget} representing `property`. The                           object belongs to `dialog` and must not be                           freed.
         */
        get_spin_scale(property: string, factor: number): Gtk.Widget;

        /**
         * Creates a new {@link Gtk.Widget} for `property` according to the property
         * type. The following types are possible:
         * 
         * - `G_TYPE_PARAM_BOOLEAN`:
         *     * `GTK_TYPE_CHECK_BUTTON` (default)
         *     * `GTK_TYPE_SWITCH`
         * - `G_TYPE_PARAM_INT`, `G_TYPE_PARAM_UINT`, or `G_TYPE_PARAM_DOUBLE`:
         *     * `GIMP_TYPE_LABEL_SPIN` (default): a spin button with a label.
         *     * `GIMP_TYPE_SCALE_ENTRY`: a scale entry with label.
         *     * `GIMP_TYPE_SPIN_SCALE`: a spin scale with label embedded.
         *     * `GIMP_TYPE_SPIN_BUTTON`: a spin button with no label.
         * - `G_TYPE_PARAM_STRING`:
         *     * `GIMP_TYPE_LABEL_ENTRY` (default): an entry with a label.
         *     * `GTK_TYPE_ENTRY`: an entry with no label.
         *     * `GTK_TYPE_TEXT_VIEW`: a text view with no label.
         * - `GIMP_TYPE_CHOICE` (default will depend on the number of choices):
         *     * `GTK_TYPE_COMBO_BOX`: a combo box displaying every
         *       choice.
         *     * `GIMP_TYPE_INT_RADIO_FRAME`: a frame with radio buttons.
         * - `GEGL_TYPE_COLOR`:
         *     * `GIMP_TYPE_LABEL_COLOR` (default): a color button with a label.
         *         Please use `gimp_procedure_dialog_get_color_widget()` for a
         *         non-editable color area with a label.
         *     * `GIMP_TYPE_COLOR_BUTTON`: a color button with no label.
         *     * `GIMP_TYPE_COLOR_AREA`: a color area with no label.
         * - `GIMP_TYPE_PARAM_FILE`:
         *     * `GTK_FILE_CHOOSER_BUTTON` (default): generic file chooser widget
         *       using the action mode of the param spec.
         *       Note that it won't work with a {@link Gimp.FileChooserAction.ANY}
         *       action. If you intend to display a widget for a file param
         *       spec, you should always set it to a more specific action.
         *       See {@link Gimp.Procedure.add_file_argument}.
         * - `G_TYPE_PARAM_UNIT`:
         *     * `GIMP_TYPE_UNIT_COMBO_BOX`
         * - `GIMP_TYPE_PARAM_ITEM` (any subtype, such as layer, channel or path):
         *     * `GIMP_TYPE_ITEM_CHOOSER` (default): a widget allowing to choose
         *       among items of the specific subtype, within all images opened in
         *       GIMP.
         *     * `GIMP_TYPE_DRAWABLE_CHOOSER` (deprecated): this type of widget
         *       is now deprecated. You should update your code to request a
         *       %GimpItemChooser instead.
         * - `GIMP_TYPE_PARAM_IMAGE`:
         *     * `GIMP_TYPE_IMAGE_CHOOSER`: a widget allowing to choose among
         *       images opened in GIMP.
         * 
         * If the `widget_type` is not supported for the actual type of
         * `property`, the function will fail. To keep the default, set to
         * `G_TYPE_NONE`.
         * 
         * Note that this function will not ensure that its default returned
         * widget type will always be the same. If you want to make sure that no
         * breakage will ensure in your code, in particular if you are further
         * tweaking the widget with `GTK` or `libgimpui` API, you should always
         * call with the specific `widget_type`.
         * 
         * If a widget has already been created for this procedure, it will be
         * returned instead (even if with a different `widget_type`).
         * @param property name of the property to build a widget for. It must be               a property of the {@link Gimp.Procedure} `dialog` has been               created for.
         * @param widget_type alternative widget type. `G_TYPE_NONE` will create the               default type of widget for the associated property               type.
         * @returns the {@link Gtk.Widget} representing `property`. The                           object belongs to `dialog` and must not be                           freed.
         */
        get_widget(property: string, widget_type: GObject.GType): Gtk.Widget;

        /**
         * Show `dialog` and only returns when the user finished interacting with
         * it (either validating choices or canceling).
         * @returns `true` if the dialog was validated, `false` otherwise.
         */
        run(): boolean;

        /**
         * @param args 
         */
    // Conflicted with GimpUi.Dialog.run
        run(...args: never[]): any;

        /**
         * Changes the "OK" button's label of `dialog` to `ok_label`.
         * @param ok_label a label to replace the OK button's text.
         */
        set_ok_label(ok_label: string): void;

        /**
         * Sets sensitivity of the widget associated to `property` in `dialog`. If
         * `config` is `null`, then it is set to the value of `sensitive`.
         * Otherwise `sensitive` is ignored and sensitivity is bound to the value
         * of `config_property` of `config` (or the negation of this value
         * if `config_reverse` is `true`).
         * @param property name of a property of the {@link Gimp.Procedure} `dialog`                   has been created for.
         * @param sensitive whether the widget associated to `property` should                   be sensitive.
         * @param config an optional config object.
         * @param config_property name of a property of `config`.
         * @param config_invert whether to negate the value of `config_property`.
         */
        set_sensitive(property: string, sensitive: boolean, config: (GObject.Object | null), config_property: (string | null), config_invert: boolean): void;

        /**
         * @param args 
         */
    // Conflicted with Gtk.Widget.set_sensitive
        set_sensitive(...args: never[]): any;

        /**
         * Sets sensitivity of the widget associated to `property` in `dialog` if the
         * value of `config_property` in `config` is equal to one of `values`.
         * 
         * If `config` is `null`, then the configuration object of `dialog` is used.
         * 
         * If `in_values` is FALSE, then the widget is set sensitive if the value of
         * `config_property` is **not** in `values`.
         * @param property name of a property of the {@link Gimp.Procedure} `dialog`                   has been created for.
         * @param config an optional config object (if `null`,                   `property`'s config will be used).
         * @param config_property name of a property of `config`.
         * @param values an array of GValues which could be values of `config_property`.
         * @param in_values whether `property` should be sensitive when `config_property`                   is one of `values`, or the opposite.
         */
        set_sensitive_if_in(property: string, config: (GObject.Object | null), config_property: string, values: Gimp.ValueArray, in_values: boolean): void;
    }


    namespace ProgressBar {
        // Signal signatures
        interface SignalSignatures extends Gtk.ProgressBar.SignalSignatures {
            "notify::ellipsize": (pspec: GObject.ParamSpec) => void;
            "notify::fraction": (pspec: GObject.ParamSpec) => void;
            "notify::inverted": (pspec: GObject.ParamSpec) => void;
            "notify::pulse-step": (pspec: GObject.ParamSpec) => void;
            "notify::show-text": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.ProgressBar.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {

        }
    }

    /**
     * A widget providing a progress bar that automatically redirects any
     * progress calls to itself.
     * @gir-type Class
     */
    class ProgressBar extends Gtk.ProgressBar implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<ProgressBar>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ProgressBar.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ProgressBar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ProgressBar;

        // Signals
        /** @signal */
        connect<K extends keyof ProgressBar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProgressBar.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ProgressBar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProgressBar.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ProgressBar.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ProgressBar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace ResourceChooser {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            /**
             * The ::resource-set signal is emitted when the user selects a resource.
             * @signal
             * @since 3.0
             * @run-first
             */
            "resource-set": (arg0: GObject.Object, arg1: boolean) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::resource": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            label: string;
            resource: Gimp.Resource;
            title: string;
        }
    }

    /**
     * A button which pops up a resource selection dialog.
     * 
     * Responsibilities:
     * 
     *     - implementing outer container widget,
     *     - managing clicks and popping up a remote chooser,
     *     - having a resource property,
     *     - signaling when user selects resource
     *     - receiving drag,
     *     - triggering draws of the button interior (by subclass) and draws of remote popup chooser.
     * 
     * Collaborations:
     * 
     *     - owned by GimpProcedureDialog via GimpPropWidget
     *     - resource property usually bound to a GimpConfig for a GimpPluginProcedure.
     *     - communicates using GimpResourceSelect with remote GimpPDBDialog,
     *       to choose an installed GimpResource owned by core.
     * 
     * Subclass responsibilities:
     * 
     *     - creating interior widgets
     *     - drawing the interior (a preview of the chosen resource)
     *     - declaring which interior widgets are drag destinations
     *     - declaring which interior widgets are clickable (generate "clicked" signal)
     *     - generate "clicked" (delegating to GtkButton or implementing from mouse events)
     * @gir-type Class
     * @since 3.0
     */
    abstract class ResourceChooser extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<ResourceChooser>;

        // Properties
        /**
         * Label text with mnemonic.
         * @since 3.0
         * @construct-only
         * @default null
         */
        get label(): string;

        /**
         * The currently selected resource.
         * @since 3.0
         */
        get resource(): Gimp.Resource;
        set resource(val: Gimp.Resource);

        /**
         * The title to be used for the resource selection popup dialog.
         * @since 3.0
         * @construct-only
         * @default Resource Selection
         */
        get title(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ResourceChooser.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ResourceChooser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ResourceChooser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ResourceChooser.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ResourceChooser.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ResourceChooser.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ResourceChooser.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ResourceChooser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_draw_interior(): void;

        /**
         * @param resource 
         * @param dialog_closing 
         * @virtual
         */
        vfunc_resource_set(resource: Gimp.Resource, dialog_closing: boolean): void;

        // Methods
        /**
         * Returns the label widget.
         * @returns the {@link Gtk.Widget} showing the label text.
         */
        get_label(): Gtk.Widget;

        /**
         * Gets the currently selected resource.
         * @returns an internal copy of the resource which must not be freed.
         */
        get_resource(): Gimp.Resource;

        /**
         * Sets the currently selected resource.
         * This will select the resource in both the button and any chooser popup.
         * @param resource Resource to set.
         */
        set_resource(resource: Gimp.Resource): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace Ruler {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            "notify::lower": (pspec: GObject.ParamSpec) => void;
            "notify::max-size": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::unit": (pspec: GObject.ParamSpec) => void;
            "notify::upper": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            lower: number;
            max_size: number;
            maxSize: number;
            orientation: Gtk.Orientation;
            position: number;
            unit: Gimp.Unit;
            upper: number;
        }
    }

    /**
     * A ruler widget with configurable unit and orientation.
     * @gir-type Class
     */
    class Ruler extends Gtk.Widget implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Ruler>;

        // Properties
        /**
         * @default 0
         */
        get lower(): number;
        set lower(val: number);

        /**
         * @default 0
         */
        get max_size(): number;
        set max_size(val: number);

        /**
         * @default 0
         */
        get maxSize(): number;
        set maxSize(val: number);

        /**
         * @default Gtk.Orientation.HORIZONTAL
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * @default 0
         */
        get position(): number;
        set position(val: number);

        get unit(): Gimp.Unit;
        set unit(val: Gimp.Unit);

        /**
         * @default 0
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
        $signals: Ruler.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Ruler.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](orientation: Gtk.Orientation): Ruler;

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
         * Adds a "track widget" to the ruler. The ruler will connect to
         * GtkWidget:motion-notify-event: on the track widget and update its
         * position marker accordingly. The marker is correctly updated also
         * for the track widget's children, regardless of whether they are
         * ordinary children of off-screen children.
         * @param widget the track widget to add
         */
        add_track_widget(widget: Gtk.Widget): void;

        /**
         * @returns the current position of the `ruler` widget.
         */
        get_position(): number;

        /**
         * Retrieves values indicating the range and current position of a {@link GimpUi.Ruler}.
         * See `gimp_ruler_set_range()`.
         */
        get_range(): [number, number, number];

        /**
         * @returns the unit currently used in the `ruler` widget.
         */
        get_unit(): Gimp.Unit;

        /**
         * Removes a previously added track widget from the ruler. See
         * `gimp_ruler_add_track_widget()`.
         * @param widget the track widget to remove
         */
        remove_track_widget(widget: Gtk.Widget): void;

        /**
         * This sets the position of the ruler.
         * @param position the position to set the ruler to
         */
        set_position(position: number): void;

        /**
         * This sets the range of the ruler.
         * @param lower the lower limit of the ruler
         * @param upper the upper limit of the ruler
         * @param max_size the maximum size of the ruler used when calculating the space to leave for the text
         */
        set_range(lower: number, upper: number, max_size: number): void;

        /**
         * This sets the unit of the ruler.
         * @param unit the {@link Gimp.Unit} to set the ruler to
         */
        set_unit(unit: Gimp.Unit): void;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         */
        add_child(builder: Gtk.Builder, child: GObject.Object, type: (string | null)): void;

        /**
         * Constructs a child of `buildable` with the name `name`.
         * 
         * {@link Gtk.Builder} calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param name name of child to construct
         * @returns the constructed child
         */
        construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

        /**
         * This is similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         */
        custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @returns `true` if a object has a custom implementation, `false`          if it doesn't.
         */
        custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, GLib.MarkupParser, null];

        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @returns the internal child of the buildable object
         */
        get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Gets the name of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the
         * [GtkBuilder UI definition][BUILDER-UI]
         * used to construct the `buildable`.
         * @returns the name set with `gtk_buildable_set_name()`
         */
        get_name(): string;

        /**
         * Called when the builder finishes the parsing of a
         * [GtkBuilder UI definition][BUILDER-UI].
         * Note that this will be called once for each time
         * `gtk_builder_add_from_file()` or `gtk_builder_add_from_string()`
         * is called on a builder.
         * @param builder a {@link Gtk.Builder}
         */
        parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param name name of property
         * @param value value of property
         */
        set_buildable_property(builder: Gtk.Builder, name: string, value: (GObject.Value | any)): void;

        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         */
        set_name(name: string): void;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: (string | null)): void;

        /**
         * Constructs a child of `buildable` with the name `name`.
         * 
         * {@link Gtk.Builder} calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param name name of child to construct
         * @virtual
         */
        vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

        /**
         * This is similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: null): void;

        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, GLib.MarkupParser, never];

        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Gets the name of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the
         * [GtkBuilder UI definition][BUILDER-UI]
         * used to construct the `buildable`.
         * @virtual
         */
        vfunc_get_name(): string;

        /**
         * Called when the builder finishes the parsing of a
         * [GtkBuilder UI definition][BUILDER-UI].
         * Note that this will be called once for each time
         * `gtk_builder_add_from_file()` or `gtk_builder_add_from_string()`
         * is called on a builder.
         * @param builder a {@link Gtk.Builder}
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param name name of property
         * @param value value of property
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         * @virtual
         */
        vfunc_set_name(name: string): void;
    }


    namespace ScaleEntry {
        // Signal signatures
        interface SignalSignatures extends LabelSpin.SignalSignatures {
            "notify::digits": (pspec: GObject.ParamSpec) => void;
            "notify::lower": (pspec: GObject.ParamSpec) => void;
            "notify::upper": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-row": (pspec: GObject.ParamSpec) => void;
            "notify::column-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::column-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::row-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::row-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends LabelSpin.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {

        }
    }

    /**
     * This widget is a {@link Gtk.Grid} showing a {@link Gtk.SpinButton} and a {@link Gtk.Scale}
     * bound together. It also displays a {@link Gtk.Label} which is used as
     * mnemonic on the {@link Gtk.SpinButton}.
     * @gir-type Class
     */
    class ScaleEntry extends LabelSpin implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<ScaleEntry>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ScaleEntry.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ScaleEntry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](text: string, value: number, lower: number, upper: number, digits: number): ScaleEntry;

        // Conflicted with Gtk.Grid.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof ScaleEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ScaleEntry.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ScaleEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ScaleEntry.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ScaleEntry.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ScaleEntry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns `true` if `entry`'s scale widget will behave in          logarithmic fashion, `false` for linear behavior.
         */
        get_logarithmic(): boolean;

        /**
         * This function returns the {@link Gtk.Range} packed in `entry`. This can be
         * useful if you need to customize some aspects of the widget
         * 
         * By default, it is a {@link Gtk.Scale}, but it can be any other type of
         * {@link Gtk.Range} if a subclass overrode the `new_range_widget()` protected
         * method.
         * @returns The {@link Gtk.Range} contained in `entry`.
         */
        get_range(): Gtk.Range;

        /**
         * By default the {@link Gtk.SpinButton} and {@link Gtk.Scale} will have the same range.
         * In some case, you want to set a different range. In particular when
         * the finale range is huge, the {@link Gtk.Scale} might become nearly useless
         * as every tiny slider move would dramatically update the value. In
         * this case, it is common to set the {@link Gtk.Scale} to a smaller common
         * range, while the {@link Gtk.SpinButton} would allow for the full allowed
         * range.
         * This function allows this. Obviously the {@link Gtk.Adjustment} of both
         * widgets would be synced but if the set value is out of the {@link Gtk.Scale}
         * range, the slider would simply show at one extreme.
         * 
         * If `limit_scale` is `false` though, it would sync back both widgets
         * range to the new values.
         * 
         * Note that the step and page increments are updated when the range is
         * updated according to some common usage algorithm which should work if
         * you don't have very specific needs. If you want to customize the step
         * increments yourself, you may call `gimp_label_spin_set_increments()`
         * @param lower the lower value for the whole widget if `limit_scale` is               `false`, or only for the {@link Gtk.Scale} if `true`.
         * @param upper the upper value for the whole widget if `limit_scale` is               `false`, or only for the {@link Gtk.SpinButton} if `true`.
         * @param limit_scale Whether the range should only apply to the {@link Gtk.Scale} or               if it should share its `GtkAdjustement` with the               {@link Gtk.SpinButton}. If `true`, both `lower` and `upper` must be               included in current {@link Gtk.SpinButton} range.
         */
        set_bounds(lower: number, upper: number, limit_scale: boolean): void;

        /**
         * Sets whether `entry`'s scale widget will behave in a linear
         * or logarithmic fashion. Useful when an entry has to attend large
         * ranges, but smaller selections on that range require a finer
         * adjustment.
         * @param logarithmic a boolean value to set or reset logarithmic behavior               of the scale widget
         */
        set_logarithmic(logarithmic: boolean): void;
    }


    namespace ScrolledPreview {
        // Signal signatures
        interface SignalSignatures extends Preview.SignalSignatures {
            "notify::update": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Preview.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {

        }
    }

    /**
     * A widget providing a {@link GimpUi.Preview} enhanced by scrolling capabilities.
     * @gir-type Class
     */
    abstract class ScrolledPreview extends Preview implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<ScrolledPreview>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ScrolledPreview.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ScrolledPreview.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ScrolledPreview.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ScrolledPreview.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ScrolledPreview.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ScrolledPreview.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ScrolledPreview.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ScrolledPreview.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * While the `preview` is frozen, it is not going to redraw itself in
         * response to scroll events.
         * 
         * This function should only be used to implement widgets derived from
         * {@link GimpUi.ScrolledPreview}. There is no point in calling this from a plug-in.
         */
        freeze(): void;

        get_adjustments(): [Gtk.Adjustment, Gtk.Adjustment];

        /**
         * @param hscrollbar_policy policy for horizontal scrollbar
         * @param vscrollbar_policy policy for vertical scrollbar
         */
        set_policy(hscrollbar_policy: Gtk.PolicyType, vscrollbar_policy: Gtk.PolicyType): void;

        /**
         * @param x horizontal scroll offset
         * @param y vertical scroll offset
         */
        set_position(x: number, y: number): void;

        /**
         * While the `preview` is frozen, it is not going to redraw itself in
         * response to scroll events.
         * 
         * This function should only be used to implement widgets derived from
         * {@link GimpUi.ScrolledPreview}. There is no point in calling this from a plug-in.
         */
        thaw(): void;
    }


    namespace SizeEntry {
        // Signal signatures
        interface SignalSignatures extends Gtk.Grid.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            "refval-changed": () => void;
            /**
             * @signal
             * @run-first
             */
            "unit-changed": () => void;
            /**
             * @signal
             * @run-first
             */
            "value-changed": () => void;
            "notify::baseline-row": (pspec: GObject.ParamSpec) => void;
            "notify::column-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::column-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::row-homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::row-spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Grid.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {

        }
    }

    /**
     * This widget is used to enter pixel distances/sizes and resolutions.
     * 
     * You can specify the number of fields the widget should provide. For
     * each field automatic mappings are performed between the field's
     * "reference value" and its "value".
     * 
     * There is a {@link GimpUi.UnitComboBox} right of the entry fields which lets
     * you specify the {@link Gimp.Unit} of the displayed values.
     * 
     * For each field, there can be one or two {@link Gtk.SpinButton}'s to enter
     * "value" and "reference value". If you specify `show_refval` as
     * `false` in `gimp_size_entry_new()` there will be only one
     * {@link Gtk.SpinButton} and the {@link GimpUi.UnitComboBox} will contain an item for
     * selecting GIMP_UNIT_PIXEL.
     * 
     * The "reference value" is either of GIMP_UNIT_PIXEL or dpi,
     * depending on which {@link GimpUi.SizeEntryUpdatePolicy} you specify in
     * `gimp_size_entry_new()`.  The "value" is either the size in pixels
     * mapped to the size in a real-world-unit (see {@link Gimp.Unit}) or the dpi
     * value mapped to pixels per real-world-unit.
     * @gir-type Class
     */
    class SizeEntry extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<SizeEntry>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SizeEntry.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SizeEntry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](number_of_fields: number, unit: Gimp.Unit, unit_format: string, menu_show_pixels: boolean, menu_show_percent: boolean, show_refval: boolean, spinbutton_width: number, update_policy: SizeEntryUpdatePolicy): SizeEntry;

        // Conflicted with Gtk.Grid.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof SizeEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SizeEntry.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SizeEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SizeEntry.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SizeEntry.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SizeEntry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Adds an input field to the {@link GimpUi.SizeEntry}.
         * 
         * The new input field will have the index 0. If you specified `show_refval`
         * as `true` in `gimp_size_entry_new()` you have to pass an additional
         * {@link Gtk.SpinButton} to hold the reference value. If `show_refval` was `false`,
         * `refval_spinbutton` will be ignored.
         * @param value_spinbutton The spinbutton to display the field's value.
         * @param refval_spinbutton The spinbutton to display the field's reference value.
         */
        add_field(value_spinbutton: Gtk.SpinButton, refval_spinbutton: (Gtk.SpinButton | null)): void;

        /**
         * Attaches a {@link Gtk.Label} to the {@link GimpUi.SizeEntry} (which is a {@link Gtk.Grid}).
         * @param text The text of the label.
         * @param row The row where the label will be attached.
         * @param column The column where the label will be attached.
         * @param alignment The horizontal alignment of the label.
         * @returns A pointer to the new {@link Gtk.Label} widget.
         */
        attach_label(text: string, row: number, column: number, alignment: number): Gtk.Widget;

        /**
         * You shouldn't fiddle with the internals of a {@link GimpUi.SizeEntry} but
         * if you want to set tooltips using `gimp_help_set_help_data()` you
         * can use this function to get a pointer to the spinbuttons.
         * @param field the index of the widget you want to get a pointer to
         * @returns a {@link Gtk.Widget} pointer that you can attach a tooltip to.
         */
        get_help_widget(field: number): Gtk.Widget;

        get_n_fields(): number;

        /**
         * Returns the reference value for field # `field` of the {@link GimpUi.SizeEntry}.
         * 
         * The reference value is either a distance in pixels or a resolution
         * in dpi, depending on which {@link GimpUi.SizeEntryUpdatePolicy} you chose in
         * `gimp_size_entry_new()`.
         * @param field The index of the field you want to know the reference value of.
         * @returns The reference value of the chosen `field`.
         */
        get_refval(field: number): number;

        /**
         * Returns the {@link Gimp.Unit} the user has selected in the {@link GimpUi.SizeEntry}'s
         * {@link GimpUi.UnitComboBox}.
         * @returns The sizeentry's unit.
         */
        get_unit(): Gimp.Unit;

        /**
         * @returns the size entry's {@link GimpUi.UnitComboBox}.
         */
        get_unit_combo(): UnitComboBox;

        get_update_policy(): SizeEntryUpdatePolicy;

        /**
         * Returns the value of field # `field` of the {@link GimpUi.SizeEntry}.
         * 
         * The `value` returned is a distance or resolution
         * in the {@link Gimp.Unit} the user has selected in the {@link GimpUi.SizeEntry}'s
         * {@link GimpUi.UnitComboBox}.
         * 
         * NOTE: In most cases you won't be interested in this value because the
         *       {@link GimpUi.SizeEntry}'s purpose is to shield the programmer from unit
         *       calculations. Use `gimp_size_entry_get_refval()` instead.
         * @param field The index of the field you want to know the value of.
         * @returns The value of the chosen `field`.
         */
        get_value(field: number): number;

        /**
         * This function is rather ugly and just a workaround for the fact that
         * it's impossible to implement `gtk_widget_grab_focus()` for a {@link Gtk.Grid} (is this actually true after the Table->Grid conversion?).
         */
        grab_focus(): void;

        /**
         * Iterates over all entries in the {@link GimpUi.SizeEntry} and calls
         * `gtk_entry_set_activates_default()` on them.
         * @param setting `true` to activate window's default widget on Enter keypress
         */
        set_activates_default(setting: boolean): void;

        /**
         * This function allows you set up a {@link GimpUi.SizeEntry} so that sub-pixel
         * sizes can be entered.
         * @param digits the number of digits to display for a pixel size
         */
        set_pixel_digits(digits: number): void;

        /**
         * Sets the reference value for field # `field` of the {@link GimpUi.SizeEntry}.
         * 
         * The `refval` passed is either a distance in pixels or a resolution in dpi,
         * depending on which {@link GimpUi.SizeEntryUpdatePolicy} you chose in
         * `gimp_size_entry_new()`.
         * @param field The index of the field you want to set the reference value for.
         * @param refval The new reference value for `field`.
         */
        set_refval(field: number, refval: number): void;

        /**
         * Limits the range of possible reference values which can be entered in
         * field # `field` of the {@link GimpUi.SizeEntry}.
         * 
         * The current reference value of the `field` will be clamped to fit in the
         * `field`'s new boundaries.
         * @param field The index of the field you want to set the reference value         boundaries for.
         * @param lower The new lower boundary of the reference value of the chosen `field`.
         * @param upper The new upper boundary of the reference value of the chosen `field`.
         */
        set_refval_boundaries(field: number, lower: number, upper: number): void;

        /**
         * Sets the decimal digits of field # `field` of the {@link GimpUi.SizeEntry} to
         * `digits`.
         * 
         * If you don't specify this value explicitly, the reference value's number
         * of digits will equal to 0 for #GIMP_SIZE_ENTRY_UPDATE_SIZE and to 2 for
         * #GIMP_SIZE_ENTRY_UPDATE_RESOLUTION.
         * @param field The index of the field you want to set the reference value for.
         * @param digits The new number of decimal digits for the {@link Gtk.SpinButton} which          displays `field`'s reference value.
         */
        set_refval_digits(field: number, digits: number): void;

        /**
         * Sets the resolution (in dpi) for field # `field` of the {@link GimpUi.SizeEntry}.
         * 
         * The `resolution` passed will be clamped to fit in
         * [#GIMP_MIN_RESOLUTION..#GIMP_MAX_RESOLUTION].
         * 
         * This function does nothing if the {@link GimpUi.SizeEntryUpdatePolicy} specified in
         * `gimp_size_entry_new()` doesn't equal to #GIMP_SIZE_ENTRY_UPDATE_SIZE.
         * @param field The index of the field you want to set the resolution for.
         * @param resolution The new resolution (in dpi) for the chosen `field`.
         * @param keep_size `true` if the `field`'s size in pixels should stay the same.              `false` if the `field`'s size in units should stay the same.
         */
        set_resolution(field: number, resolution: number, keep_size: boolean): void;

        /**
         * Sets the pixel values for field # `field` of the {@link GimpUi.SizeEntry}
         * which will be treated as 0% and 100%.
         * 
         * These values will be used if you specified `menu_show_percent` as `true`
         * in `gimp_size_entry_new()` and the user has selected GIMP_UNIT_PERCENT in
         * the {@link GimpUi.SizeEntry}'s {@link GimpUi.UnitComboBox}.
         * 
         * This function does nothing if the {@link GimpUi.SizeEntryUpdatePolicy} specified in
         * `gimp_size_entry_new()` doesn't equal to GIMP_SIZE_ENTRY_UPDATE_SIZE.
         * @param field The index of the field you want to set the size for.
         * @param lower The reference value which will be treated as 0%.
         * @param upper The reference value which will be treated as 100%.
         */
        set_size(field: number, lower: number, upper: number): void;

        /**
         * Sets the {@link GimpUi.SizeEntry}'s unit. The reference value for all fields will
         * stay the same but the value in units or pixels per unit will change
         * according to which {@link GimpUi.SizeEntryUpdatePolicy} you chose in
         * `gimp_size_entry_new()`.
         * @param unit The new unit.
         */
        set_unit(unit: Gimp.Unit): void;

        /**
         * Sets the value for field # `field` of the {@link GimpUi.SizeEntry}.
         * 
         * The `value` passed is treated to be a distance or resolution
         * in the {@link Gimp.Unit} the user has selected in the {@link GimpUi.SizeEntry}'s
         * {@link GimpUi.UnitComboBox}.
         * 
         * NOTE: In most cases you won't be interested in this value because the
         *       {@link GimpUi.SizeEntry}'s purpose is to shield the programmer from unit
         *       calculations. Use `gimp_size_entry_set_refval()` instead.
         * @param field The index of the field you want to set a value for.
         * @param value The new value for `field`.
         */
        set_value(field: number, value: number): void;

        /**
         * Limits the range of possible values which can be entered in field # `field`
         * of the {@link GimpUi.SizeEntry}.
         * 
         * The current value of the `field` will be clamped to fit in the `field`'s
         * new boundaries.
         * 
         * NOTE: In most cases you won't be interested in this function because the
         *       {@link GimpUi.SizeEntry}'s purpose is to shield the programmer from unit
         *       calculations. Use `gimp_size_entry_set_refval_boundaries()` instead.
         *       Whatever you do, don't mix these calls. A size entry should either
         *       be clamped by the value or the reference value.
         * @param field The index of the field you want to set value boundaries for.
         * @param lower The new lower boundary of the value of the chosen `field`.
         * @param upper The new upper boundary of the value of the chosen `field`.
         */
        set_value_boundaries(field: number, lower: number, upper: number): void;

        /**
         * Controls whether a unit menu is shown in the size entry.  If
         * `show` is `true`, the menu is shown; otherwise it is hidden.
         * @param show Boolean
         */
        show_unit_menu(show: boolean): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace SpinButton {
        // Signal signatures
        interface SignalSignatures extends Gtk.SpinButton.SignalSignatures {
            "notify::adjustment": (pspec: GObject.ParamSpec) => void;
            "notify::climb-rate": (pspec: GObject.ParamSpec) => void;
            "notify::digits": (pspec: GObject.ParamSpec) => void;
            "notify::numeric": (pspec: GObject.ParamSpec) => void;
            "notify::snap-to-ticks": (pspec: GObject.ParamSpec) => void;
            "notify::update-policy": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::wrap": (pspec: GObject.ParamSpec) => void;
            "notify::activates-default": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::caps-lock-warning": (pspec: GObject.ParamSpec) => void;
            "notify::completion": (pspec: GObject.ParamSpec) => void;
            "notify::cursor-position": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::enable-emoji-completion": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::im-module": (pspec: GObject.ParamSpec) => void;
            "notify::inner-border": (pspec: GObject.ParamSpec) => void;
            "notify::input-hints": (pspec: GObject.ParamSpec) => void;
            "notify::input-purpose": (pspec: GObject.ParamSpec) => void;
            "notify::invisible-char": (pspec: GObject.ParamSpec) => void;
            "notify::invisible-char-set": (pspec: GObject.ParamSpec) => void;
            "notify::max-length": (pspec: GObject.ParamSpec) => void;
            "notify::max-width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::overwrite-mode": (pspec: GObject.ParamSpec) => void;
            "notify::placeholder-text": (pspec: GObject.ParamSpec) => void;
            "notify::populate-all": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-activatable": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-gicon": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-stock": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-storage-type": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::progress-fraction": (pspec: GObject.ParamSpec) => void;
            "notify::progress-pulse-step": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-offset": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-activatable": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-gicon": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-stock": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-storage-type": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::selection-bound": (pspec: GObject.ParamSpec) => void;
            "notify::shadow-type": (pspec: GObject.ParamSpec) => void;
            "notify::show-emoji-icon": (pspec: GObject.ParamSpec) => void;
            "notify::tabs": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::text-length": (pspec: GObject.ParamSpec) => void;
            "notify::truncate-multiline": (pspec: GObject.ParamSpec) => void;
            "notify::visibility": (pspec: GObject.ParamSpec) => void;
            "notify::width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.SpinButton.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.Editable.ConstructorProps, Gtk.Orientable.ConstructorProps {

        }
    }

    /**
     * {@link GimpUi.SpinButton} is a drop-in replacement for {@link Gtk.SpinButton}, with the
     * following changes:
     * 
     *   - When the spin-button loses focus, its adjustment value is only
     *     updated if the entry text has been changed.
     * 
     *   - When the spin-button's "wrap" property is TRUE, values input through the
     *     entry are wrapped around.
     * 
     *   - Modifiers can be used during scrolling for smaller/bigger increments.
     * @gir-type Class
     */
    class SpinButton extends Gtk.SpinButton implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.Editable, Gtk.Orientable {
        static $gtype: GObject.GType<SpinButton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SpinButton.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SpinButton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](adjustment: (Gtk.Adjustment | null), climb_rate: number, digits: number): SpinButton;

        // Conflicted with Gtk.Entry.new
        static ["new"](...args: never[]): any;

        static new_with_range(min: number, max: number, step: number): SpinButton;

        // Signals
        /** @signal */
        connect<K extends keyof SpinButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SpinButton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SpinButton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SpinButton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SpinButton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SpinButton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    namespace SpinScale {
        // Signal signatures
        interface SignalSignatures extends SpinButton.SignalSignatures {
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::adjustment": (pspec: GObject.ParamSpec) => void;
            "notify::climb-rate": (pspec: GObject.ParamSpec) => void;
            "notify::digits": (pspec: GObject.ParamSpec) => void;
            "notify::numeric": (pspec: GObject.ParamSpec) => void;
            "notify::snap-to-ticks": (pspec: GObject.ParamSpec) => void;
            "notify::update-policy": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::wrap": (pspec: GObject.ParamSpec) => void;
            "notify::activates-default": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::caps-lock-warning": (pspec: GObject.ParamSpec) => void;
            "notify::completion": (pspec: GObject.ParamSpec) => void;
            "notify::cursor-position": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::enable-emoji-completion": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::im-module": (pspec: GObject.ParamSpec) => void;
            "notify::inner-border": (pspec: GObject.ParamSpec) => void;
            "notify::input-hints": (pspec: GObject.ParamSpec) => void;
            "notify::input-purpose": (pspec: GObject.ParamSpec) => void;
            "notify::invisible-char": (pspec: GObject.ParamSpec) => void;
            "notify::invisible-char-set": (pspec: GObject.ParamSpec) => void;
            "notify::max-length": (pspec: GObject.ParamSpec) => void;
            "notify::max-width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::overwrite-mode": (pspec: GObject.ParamSpec) => void;
            "notify::placeholder-text": (pspec: GObject.ParamSpec) => void;
            "notify::populate-all": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-activatable": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-gicon": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-stock": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-storage-type": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::progress-fraction": (pspec: GObject.ParamSpec) => void;
            "notify::progress-pulse-step": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-offset": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-activatable": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-gicon": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-stock": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-storage-type": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::selection-bound": (pspec: GObject.ParamSpec) => void;
            "notify::shadow-type": (pspec: GObject.ParamSpec) => void;
            "notify::show-emoji-icon": (pspec: GObject.ParamSpec) => void;
            "notify::tabs": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::text-length": (pspec: GObject.ParamSpec) => void;
            "notify::truncate-multiline": (pspec: GObject.ParamSpec) => void;
            "notify::visibility": (pspec: GObject.ParamSpec) => void;
            "notify::width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends SpinButton.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.Editable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            label: string;
        }
    }

    /**
     * @gir-type Class
     */
    class SpinScale extends SpinButton implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.Editable, Gtk.Orientable {
        static $gtype: GObject.GType<SpinScale>;

        // Properties
        /**
         * @default null
         */
        get label(): string;
        set label(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SpinScale.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SpinScale.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](adjustment: Gtk.Adjustment, label: string, digits: number): SpinScale;

        // Conflicted with GimpUi.SpinButton.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof SpinScale.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SpinScale.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SpinScale.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SpinScale.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SpinScale.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SpinScale.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_constrain_drag(): boolean;

        get_gamma(): number;

        get_label(): string;

        /**
         * If `scale` has been set with a mnemonic key in its label text, this function
         * returns the keyval used for the mnemonic accelerator.
         * @returns the keyval usable for accelerators, or {@link Gdk.KEY_VoidSymbol}.
         */
        get_mnemonic_keyval(): number;

        /**
         * @param lower 
         * @param upper 
         */
        get_scale_limits(lower: number, upper: number): boolean;

        /**
         * If `constrain_drag` is TRUE, dragging the scale with the pointer will
         * only result into integer values. It will still possible to set the
         * scale to fractional values (if the spin scale "digits" is above 0)
         * for instance with keyboard edit.
         * @param constrain whether constraining to integer values when dragging with             pointer.
         */
        set_constrain_drag(constrain: boolean): void;

        /**
         * @param gamma 
         */
        set_gamma(gamma: number): void;

        /**
         * @param label 
         */
        set_label(label: string): void;

        /**
         * @param lower 
         * @param upper 
         */
        set_scale_limits(lower: number, upper: number): void;

        unset_scale_limits(): void;
    }


    namespace StringComboBox {
        // Signal signatures
        interface SignalSignatures extends Gtk.ComboBox.SignalSignatures {
            "notify::ellipsize": (pspec: GObject.ParamSpec) => void;
            "notify::id-column": (pspec: GObject.ParamSpec) => void;
            "notify::label-column": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::active-id": (pspec: GObject.ParamSpec) => void;
            "notify::add-tearoffs": (pspec: GObject.ParamSpec) => void;
            "notify::button-sensitivity": (pspec: GObject.ParamSpec) => void;
            "notify::cell-area": (pspec: GObject.ParamSpec) => void;
            "notify::column-span-column": (pspec: GObject.ParamSpec) => void;
            "notify::entry-text-column": (pspec: GObject.ParamSpec) => void;
            "notify::has-entry": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::popup-fixed-width": (pspec: GObject.ParamSpec) => void;
            "notify::popup-shown": (pspec: GObject.ParamSpec) => void;
            "notify::row-span-column": (pspec: GObject.ParamSpec) => void;
            "notify::tearoff-title": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-width": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::editing-canceled": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.ComboBox.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.CellLayout.ConstructorProps {
            ellipsize: Pango.EllipsizeMode;
            id_column: number;
            idColumn: number;
            label_column: number;
            labelColumn: number;
            value: string;
        }
    }

    /**
     * A {@link Gtk.ComboBox} subclass to select strings.
     * @gir-type Class
     */
    class StringComboBox extends Gtk.ComboBox implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.CellLayout {
        static $gtype: GObject.GType<StringComboBox>;

        // Properties
        /**
         * Specifies the preferred place to ellipsize text in the combo-box,
         * if the cell renderer does not have enough room to display the
         * entire string.
         * @since 2.4
         * @default Pango.EllipsizeMode.NONE
         */
        get ellipsize(): Pango.EllipsizeMode;
        set ellipsize(val: Pango.EllipsizeMode);

        /**
         * The column in the associated GtkTreeModel that holds unique
         * string IDs.
         * @since 2.4
         * @construct-only
         * @default 0
         */
        get id_column(): number;

        /**
         * The column in the associated GtkTreeModel that holds unique
         * string IDs.
         * @since 2.4
         * @construct-only
         * @default 0
         */
        get idColumn(): number;

        /**
         * The column in the associated GtkTreeModel that holds strings to
         * be used as labels in the combo-box.
         * @since 2.4
         * @construct-only
         * @default 0
         */
        get label_column(): number;

        /**
         * The column in the associated GtkTreeModel that holds strings to
         * be used as labels in the combo-box.
         * @since 2.4
         * @construct-only
         * @default 0
         */
        get labelColumn(): number;

        /**
         * The active value (different from the "active" property of
         * GtkComboBox which is the active index).
         * @since 3.0
         * @default null
         */
        get value(): string;
        set value(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StringComboBox.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<StringComboBox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](model: Gtk.TreeModel, id_column: number, label_column: number): StringComboBox;

        // Conflicted with Gtk.ComboBox.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof StringComboBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StringComboBox.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof StringComboBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StringComboBox.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof StringComboBox.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StringComboBox.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Retrieves the value of the selected (active) item in the `combo_box`.
         * @returns newly allocated ID string or `null` if nothing was selected
         */
        get_active(): string;

        /**
         * @param args 
         */
    // Conflicted with Gtk.ComboBox.get_active
        get_active(...args: never[]): any;

        /**
         * Looks up the item that belongs to the given `id` and makes it the
         * selected item in the `combo_box`.
         * @param id the ID of the item to select
         * @returns `true` on success or `false` if there was no item for          this value.
         */
        set_active(id: string): boolean;

        /**
         * @param args 
         */
    // Conflicted with Gtk.ComboBox.set_active
        set_active(...args: never[]): any;

        /**
         * Sets a function that is used to decide about the sensitivity of
         * rows in the `combo_box`. Use this if you want to set certain rows
         * insensitive.
         * 
         * Calling `gtk_widget_queue_draw()` on the `combo_box` will cause the
         * sensitivity to be updated.
         * @param func a function that returns a boolean value, or `null` to unset
         */
        set_sensitivity(func: StringSensitivityFunc): void;

        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
          * @category Inherited from Gtk.CellEditable
         */
        get editing_canceled(): boolean;
        set editing_canceled(val: boolean);

        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
          * @category Inherited from Gtk.CellEditable
         */
        get editingCanceled(): boolean;
        set editingCanceled(val: boolean);

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         */
        editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         */
        remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         */
        start_editing(event: (Gdk.Event | null)): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         * @virtual
         */
        vfunc_editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         * @virtual
         */
        vfunc_remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         * @virtual
         */
        vfunc_start_editing(event: (Gdk.Event | null)): void;

        /**
         * Adds an attribute mapping to the list in `cell_layout`.
         * 
         * The `column` is the column of the model to get a value from, and the
         * `attribute` is the parameter on `cell` to be set from the value. So for
         * example if column 2 of the model contains strings, you could have the
         * “text” attribute of a {@link Gtk.CellRendererText} get its values from column 2.
         * @param cell a {@link Gtk.CellRenderer}
         * @param attribute an attribute on the renderer
         * @param column the column position on the model to get the attribute from
         */
        add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void;

        /**
         * Unsets all the mappings on all renderers on `cell_layout` and
         * removes all renderers from `cell_layout`.
         */
        clear(): void;

        /**
         * Clears all existing attributes previously set with
         * `gtk_cell_layout_set_attributes()`.
         * @param cell a {@link Gtk.CellRenderer} to clear the attribute mapping on
         */
        clear_attributes(cell: Gtk.CellRenderer): void;

        /**
         * Returns the underlying {@link Gtk.CellArea} which might be `cell_layout`
         * if called on a {@link Gtk.CellArea} or might be `null` if no {@link Gtk.CellArea}
         * is used by `cell_layout`.
         * @returns the cell area used by `cell_layout`, or `null` in case no cell area is used.
         */
        get_area(): (Gtk.CellArea | null);

        /**
         * Returns the cell renderers which have been added to `cell_layout`.
         * @returns a list of cell renderers. The list, but not the renderers has     been newly allocated and should be freed with `g_list_free()`     when no longer needed.
         */
        get_cells(): Gtk.CellRenderer[];

        /**
         * Adds the `cell` to the end of `cell_layout`. If `expand` is `false`, then the
         * `cell` is allocated no more space than it needs. Any unused space is
         * divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         */
        pack_end(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Packs the `cell` into the beginning of `cell_layout`. If `expand` is `false`,
         * then the `cell` is allocated no more space than it needs. Any unused space
         * is divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         */
        pack_start(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Re-inserts `cell` at `position`.
         * 
         * Note that `cell` has already to be packed into `cell_layout`
         * for this to function properly.
         * @param cell a {@link Gtk.CellRenderer} to reorder
         * @param position new position to insert `cell` at
         */
        reorder(cell: Gtk.CellRenderer, position: number): void;

        /**
         * Sets the {@link Gtk.CellLayoutDataFunc} to use for `cell_layout`.
         * 
         * This function is used instead of the standard attributes mapping
         * for setting the column value, and should set the value of `cell_layout`’s
         * cell renderer(s) as appropriate.
         * 
         * `func` may be `null` to remove a previously set function.
         * @param cell a {@link Gtk.CellRenderer}
         * @param func the {@link Gtk.CellLayoutDataFunc} to use, or `null`
         */
        set_cell_data_func(cell: Gtk.CellRenderer, func: (Gtk.CellLayoutDataFunc | null)): void;

        /**
         * Adds an attribute mapping to the list in `cell_layout`.
         * 
         * The `column` is the column of the model to get a value from, and the
         * `attribute` is the parameter on `cell` to be set from the value. So for
         * example if column 2 of the model contains strings, you could have the
         * “text” attribute of a {@link Gtk.CellRendererText} get its values from column 2.
         * @param cell a {@link Gtk.CellRenderer}
         * @param attribute an attribute on the renderer
         * @param column the column position on the model to get the attribute from
         * @virtual
         */
        vfunc_add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void;

        /**
         * Unsets all the mappings on all renderers on `cell_layout` and
         * removes all renderers from `cell_layout`.
         * @virtual
         */
        vfunc_clear(): void;

        /**
         * Clears all existing attributes previously set with
         * `gtk_cell_layout_set_attributes()`.
         * @param cell a {@link Gtk.CellRenderer} to clear the attribute mapping on
         * @virtual
         */
        vfunc_clear_attributes(cell: Gtk.CellRenderer): void;

        /**
         * Returns the underlying {@link Gtk.CellArea} which might be `cell_layout`
         * if called on a {@link Gtk.CellArea} or might be `null` if no {@link Gtk.CellArea}
         * is used by `cell_layout`.
         * @virtual
         */
        vfunc_get_area(): (Gtk.CellArea | null);

        /**
         * Returns the cell renderers which have been added to `cell_layout`.
         * @virtual
         */
        vfunc_get_cells(): Gtk.CellRenderer[];

        /**
         * Adds the `cell` to the end of `cell_layout`. If `expand` is `false`, then the
         * `cell` is allocated no more space than it needs. Any unused space is
         * divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         * @virtual
         */
        vfunc_pack_end(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Packs the `cell` into the beginning of `cell_layout`. If `expand` is `false`,
         * then the `cell` is allocated no more space than it needs. Any unused space
         * is divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         * @virtual
         */
        vfunc_pack_start(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Re-inserts `cell` at `position`.
         * 
         * Note that `cell` has already to be packed into `cell_layout`
         * for this to function properly.
         * @param cell a {@link Gtk.CellRenderer} to reorder
         * @param position new position to insert `cell` at
         * @virtual
         */
        vfunc_reorder(cell: Gtk.CellRenderer, position: number): void;

        /**
         * Sets the {@link Gtk.CellLayoutDataFunc} to use for `cell_layout`.
         * 
         * This function is used instead of the standard attributes mapping
         * for setting the column value, and should set the value of `cell_layout`’s
         * cell renderer(s) as appropriate.
         * 
         * `func` may be `null` to remove a previously set function.
         * @param cell a {@link Gtk.CellRenderer}
         * @param func the {@link Gtk.CellLayoutDataFunc} to use, or `null`
         * @virtual
         */
        vfunc_set_cell_data_func(cell: Gtk.CellRenderer, func: (Gtk.CellLayoutDataFunc | null)): void;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;

        /**
         * Returns whether the widget should grab focus when it is clicked with the mouse.
         * See `gtk_widget_set_focus_on_click()`.
         * @returns `true` if the widget should grab focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;

        /**
         * Sets whether the widget should grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the widget should grab focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
    }


    namespace UnitComboBox {
        // Signal signatures
        interface SignalSignatures extends Gtk.ComboBox.SignalSignatures {
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::active-id": (pspec: GObject.ParamSpec) => void;
            "notify::add-tearoffs": (pspec: GObject.ParamSpec) => void;
            "notify::button-sensitivity": (pspec: GObject.ParamSpec) => void;
            "notify::cell-area": (pspec: GObject.ParamSpec) => void;
            "notify::column-span-column": (pspec: GObject.ParamSpec) => void;
            "notify::entry-text-column": (pspec: GObject.ParamSpec) => void;
            "notify::has-entry": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::id-column": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::popup-fixed-width": (pspec: GObject.ParamSpec) => void;
            "notify::popup-shown": (pspec: GObject.ParamSpec) => void;
            "notify::row-span-column": (pspec: GObject.ParamSpec) => void;
            "notify::tearoff-title": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-width": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::editing-canceled": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.ComboBox.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.CellLayout.ConstructorProps {

        }
    }

    /**
     * {@link GimpUi.UnitComboBox} selects units stored in a {@link GimpUi.UnitStore}.
     * @gir-type Class
     */
    class UnitComboBox extends Gtk.ComboBox implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.CellLayout {
        static $gtype: GObject.GType<UnitComboBox>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UnitComboBox.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<UnitComboBox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): UnitComboBox;

        static new_with_model(model: UnitStore): UnitComboBox;

        // Signals
        /** @signal */
        connect<K extends keyof UnitComboBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UnitComboBox.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof UnitComboBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UnitComboBox.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof UnitComboBox.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UnitComboBox.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Returns the {@link Gimp.Unit} currently selected in the combo box.
         * @returns The selected {@link Gimp.Unit}.
         */
        get_active(): Gimp.Unit;

        /**
         * @param args 
         */
    // Conflicted with Gtk.ComboBox.get_active
        get_active(...args: never[]): any;

        /**
         * Sets `unit` as the currently selected {@link Gimp.Unit} on `combo`.
         * @param unit a {@link Gimp.Unit}
         */
        set_active(unit: Gimp.Unit): void;

        /**
         * @param args 
         */
    // Conflicted with Gtk.ComboBox.set_active
        set_active(...args: never[]): any;

        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
          * @category Inherited from Gtk.CellEditable
         */
        get editing_canceled(): boolean;
        set editing_canceled(val: boolean);

        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
          * @category Inherited from Gtk.CellEditable
         */
        get editingCanceled(): boolean;
        set editingCanceled(val: boolean);

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         */
        editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         */
        remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         */
        start_editing(event: (Gdk.Event | null)): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         * @virtual
         */
        vfunc_editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         * @virtual
         */
        vfunc_remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         * @virtual
         */
        vfunc_start_editing(event: (Gdk.Event | null)): void;

        /**
         * Adds an attribute mapping to the list in `cell_layout`.
         * 
         * The `column` is the column of the model to get a value from, and the
         * `attribute` is the parameter on `cell` to be set from the value. So for
         * example if column 2 of the model contains strings, you could have the
         * “text” attribute of a {@link Gtk.CellRendererText} get its values from column 2.
         * @param cell a {@link Gtk.CellRenderer}
         * @param attribute an attribute on the renderer
         * @param column the column position on the model to get the attribute from
         */
        add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void;

        /**
         * Unsets all the mappings on all renderers on `cell_layout` and
         * removes all renderers from `cell_layout`.
         */
        clear(): void;

        /**
         * Clears all existing attributes previously set with
         * `gtk_cell_layout_set_attributes()`.
         * @param cell a {@link Gtk.CellRenderer} to clear the attribute mapping on
         */
        clear_attributes(cell: Gtk.CellRenderer): void;

        /**
         * Returns the underlying {@link Gtk.CellArea} which might be `cell_layout`
         * if called on a {@link Gtk.CellArea} or might be `null` if no {@link Gtk.CellArea}
         * is used by `cell_layout`.
         * @returns the cell area used by `cell_layout`, or `null` in case no cell area is used.
         */
        get_area(): (Gtk.CellArea | null);

        /**
         * Returns the cell renderers which have been added to `cell_layout`.
         * @returns a list of cell renderers. The list, but not the renderers has     been newly allocated and should be freed with `g_list_free()`     when no longer needed.
         */
        get_cells(): Gtk.CellRenderer[];

        /**
         * Adds the `cell` to the end of `cell_layout`. If `expand` is `false`, then the
         * `cell` is allocated no more space than it needs. Any unused space is
         * divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         */
        pack_end(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Packs the `cell` into the beginning of `cell_layout`. If `expand` is `false`,
         * then the `cell` is allocated no more space than it needs. Any unused space
         * is divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         */
        pack_start(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Re-inserts `cell` at `position`.
         * 
         * Note that `cell` has already to be packed into `cell_layout`
         * for this to function properly.
         * @param cell a {@link Gtk.CellRenderer} to reorder
         * @param position new position to insert `cell` at
         */
        reorder(cell: Gtk.CellRenderer, position: number): void;

        /**
         * Sets the {@link Gtk.CellLayoutDataFunc} to use for `cell_layout`.
         * 
         * This function is used instead of the standard attributes mapping
         * for setting the column value, and should set the value of `cell_layout`’s
         * cell renderer(s) as appropriate.
         * 
         * `func` may be `null` to remove a previously set function.
         * @param cell a {@link Gtk.CellRenderer}
         * @param func the {@link Gtk.CellLayoutDataFunc} to use, or `null`
         */
        set_cell_data_func(cell: Gtk.CellRenderer, func: (Gtk.CellLayoutDataFunc | null)): void;

        /**
         * Adds an attribute mapping to the list in `cell_layout`.
         * 
         * The `column` is the column of the model to get a value from, and the
         * `attribute` is the parameter on `cell` to be set from the value. So for
         * example if column 2 of the model contains strings, you could have the
         * “text” attribute of a {@link Gtk.CellRendererText} get its values from column 2.
         * @param cell a {@link Gtk.CellRenderer}
         * @param attribute an attribute on the renderer
         * @param column the column position on the model to get the attribute from
         * @virtual
         */
        vfunc_add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void;

        /**
         * Unsets all the mappings on all renderers on `cell_layout` and
         * removes all renderers from `cell_layout`.
         * @virtual
         */
        vfunc_clear(): void;

        /**
         * Clears all existing attributes previously set with
         * `gtk_cell_layout_set_attributes()`.
         * @param cell a {@link Gtk.CellRenderer} to clear the attribute mapping on
         * @virtual
         */
        vfunc_clear_attributes(cell: Gtk.CellRenderer): void;

        /**
         * Returns the underlying {@link Gtk.CellArea} which might be `cell_layout`
         * if called on a {@link Gtk.CellArea} or might be `null` if no {@link Gtk.CellArea}
         * is used by `cell_layout`.
         * @virtual
         */
        vfunc_get_area(): (Gtk.CellArea | null);

        /**
         * Returns the cell renderers which have been added to `cell_layout`.
         * @virtual
         */
        vfunc_get_cells(): Gtk.CellRenderer[];

        /**
         * Adds the `cell` to the end of `cell_layout`. If `expand` is `false`, then the
         * `cell` is allocated no more space than it needs. Any unused space is
         * divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         * @virtual
         */
        vfunc_pack_end(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Packs the `cell` into the beginning of `cell_layout`. If `expand` is `false`,
         * then the `cell` is allocated no more space than it needs. Any unused space
         * is divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         * @virtual
         */
        vfunc_pack_start(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Re-inserts `cell` at `position`.
         * 
         * Note that `cell` has already to be packed into `cell_layout`
         * for this to function properly.
         * @param cell a {@link Gtk.CellRenderer} to reorder
         * @param position new position to insert `cell` at
         * @virtual
         */
        vfunc_reorder(cell: Gtk.CellRenderer, position: number): void;

        /**
         * Sets the {@link Gtk.CellLayoutDataFunc} to use for `cell_layout`.
         * 
         * This function is used instead of the standard attributes mapping
         * for setting the column value, and should set the value of `cell_layout`’s
         * cell renderer(s) as appropriate.
         * 
         * `func` may be `null` to remove a previously set function.
         * @param cell a {@link Gtk.CellRenderer}
         * @param func the {@link Gtk.CellLayoutDataFunc} to use, or `null`
         * @virtual
         */
        vfunc_set_cell_data_func(cell: Gtk.CellRenderer, func: (Gtk.CellLayoutDataFunc | null)): void;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;

        /**
         * Returns whether the widget should grab focus when it is clicked with the mouse.
         * See `gtk_widget_set_focus_on_click()`.
         * @returns `true` if the widget should grab focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;

        /**
         * Sets whether the widget should grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the widget should grab focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
    }


    namespace UnitStore {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::has-percent": (pspec: GObject.ParamSpec) => void;
            "notify::has-pixels": (pspec: GObject.ParamSpec) => void;
            "notify::long-format": (pspec: GObject.ParamSpec) => void;
            "notify::num-values": (pspec: GObject.ParamSpec) => void;
            "notify::short-format": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gtk.TreeModel.ConstructorProps {
            has_percent: boolean;
            hasPercent: boolean;
            has_pixels: boolean;
            hasPixels: boolean;
            long_format: string;
            longFormat: string;
            num_values: number;
            numValues: number;
            short_format: string;
            shortFormat: string;
        }
    }

    /**
     * A model for {@link Gimp.Unit} views
     * @gir-type Class
     */
    class UnitStore extends GObject.Object implements Gtk.TreeModel {
        static $gtype: GObject.GType<UnitStore>;

        // Properties
        /**
         * @default false
         */
        get has_percent(): boolean;
        set has_percent(val: boolean);

        /**
         * @default false
         */
        get hasPercent(): boolean;
        set hasPercent(val: boolean);

        /**
         * @default true
         */
        get has_pixels(): boolean;
        set has_pixels(val: boolean);

        /**
         * @default true
         */
        get hasPixels(): boolean;
        set hasPixels(val: boolean);

        /**
         * @default %n
         */
        get long_format(): string;
        set long_format(val: string);

        /**
         * @default %n
         */
        get longFormat(): string;
        set longFormat(val: string);

        /**
         * @construct-only
         * @default 0
         */
        get num_values(): number;

        /**
         * @construct-only
         * @default 0
         */
        get numValues(): number;

        /**
         * @default %a
         */
        get short_format(): string;
        set short_format(val: string);

        /**
         * @default %a
         */
        get shortFormat(): string;
        set shortFormat(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UnitStore.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<UnitStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](num_values: number): UnitStore;

        // Signals
        /** @signal */
        connect<K extends keyof UnitStore.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UnitStore.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof UnitStore.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UnitStore.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof UnitStore.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UnitStore.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_has_percent(): boolean;

        get_has_pixels(): boolean;

        /**
         * @param unit 
         * @param index 
         */
        get_nth_value(unit: Gimp.Unit, index: number): number;

        /**
         * @param has_percent 
         */
        set_has_percent(has_percent: boolean): void;

        /**
         * @param has_pixels 
         */
        set_has_pixels(has_pixels: boolean): void;

        /**
         * @param index 
         * @param value 
         */
        set_pixel_value(index: number, value: number): void;

        /**
         * @param index 
         * @param resolution 
         */
        set_resolution(index: number, resolution: number): void;

        /**
         * Creates a new {@link Gtk.TreeModel}, with `child_model` as the child_model
         * and `root` as the virtual root.
         * @param root A {@link Gtk.TreePath} or `null`.
         * @returns A new {@link Gtk.TreeModel}.
         */
        filter_new(root: (Gtk.TreePath | null)): Gtk.TreeModel;

        /**
         * Calls func on each node in model in a depth-first fashion.
         * 
         * If `func` returns `true`, then the tree ceases to be walked,
         * and `gtk_tree_model_foreach()` returns.
         * @param func a function to be called on each row
         */
        foreach(func: Gtk.TreeModelForeachFunc): void;

        /**
         * Returns the type of the column.
         * @param index_ the column index
         * @returns the type of the column
         */
        get_column_type(index_: number): GObject.GType;

        /**
         * Returns a set of flags supported by this interface.
         * 
         * The flags are a bitwise combination of {@link Gtk.TreeModelFlags}.
         * The flags supported should not change during the lifetime
         * of the `tree_model`.
         * @returns the flags supported by this interface
         */
        get_flags(): Gtk.TreeModelFlags;

        /**
         * Sets `iter` to a valid iterator pointing to `path`.  If `path` does
         * not exist, `iter` is set to an invalid iterator and `false` is returned.
         * @param path the {@link Gtk.TreePath}-struct
         * @returns `true`, if `iter` was set
         */
        get_iter(path: Gtk.TreePath): [boolean, Gtk.TreeIter];

        /**
         * Initializes `iter` with the first iterator in the tree
         * (the one at the path "0") and returns `true`. Returns
         * `false` if the tree is empty.
         * @returns `true`, if `iter` was set
         */
        get_iter_first(): [boolean, Gtk.TreeIter];

        /**
         * Sets `iter` to a valid iterator pointing to `path_string`, if it
         * exists. Otherwise, `iter` is left invalid and `false` is returned.
         * @param path_string a string representation of a {@link Gtk.TreePath}-struct
         * @returns `true`, if `iter` was set
         */
        get_iter_from_string(path_string: string): [boolean, Gtk.TreeIter];

        /**
         * Returns the number of columns supported by `tree_model`.
         * @returns the number of columns
         */
        get_n_columns(): number;

        /**
         * Returns a newly-created {@link Gtk.TreePath}-struct referenced by `iter`.
         * 
         * This path should be freed with `gtk_tree_path_free()`.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @returns a newly-created {@link Gtk.TreePath}-struct
         */
        get_path(iter: Gtk.TreeIter): Gtk.TreePath;

        /**
         * Generates a string representation of the iter.
         * 
         * This string is a “:” separated list of numbers.
         * For example, “4:10:0:3” would be an acceptable
         * return value for this string.
         * @param iter a {@link Gtk.TreeIter}-struct
         * @returns a newly-allocated string.     Must be freed with `g_free()`.
         */
        get_string_from_iter(iter: Gtk.TreeIter): string;

        /**
         * Initializes and sets `value` to that at `column`.
         * 
         * When done with `value`, `g_value_unset()` needs to be called
         * to free any allocated memory.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @param column the column to lookup the value at
         */
        get_value(iter: Gtk.TreeIter, column: number): unknown;

        /**
         * Sets `iter` to point to the first child of `parent`.
         * 
         * If `parent` has no children, `false` is returned and `iter` is
         * set to be invalid. `parent` will remain a valid node after this
         * function has been called.
         * 
         * If `parent` is `null` returns the first node, equivalent to
         * `gtk_tree_model_get_iter_first (tree_model, iter);`
         * @param parent the {@link Gtk.TreeIter}-struct, or `null`
         * @returns `true`, if `iter` has been set to the first child
         */
        iter_children(parent: (Gtk.TreeIter | null)): [boolean, Gtk.TreeIter];

        /**
         * Returns `true` if `iter` has children, `false` otherwise.
         * @param iter the {@link Gtk.TreeIter}-struct to test for children
         * @returns `true` if `iter` has children
         */
        iter_has_child(iter: Gtk.TreeIter): boolean;

        /**
         * Returns the number of children that `iter` has.
         * 
         * As a special case, if `iter` is `null`, then the number
         * of toplevel nodes is returned.
         * @param iter the {@link Gtk.TreeIter}-struct, or `null`
         * @returns the number of children of `iter`
         */
        iter_n_children(iter: (Gtk.TreeIter | null)): number;

        /**
         * Sets `iter` to point to the node following it at the current level.
         * 
         * If there is no next `iter`, `false` is returned and `iter` is set
         * to be invalid.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @returns `true` if `iter` has been changed to the next node
         */
        iter_next(iter: Gtk.TreeIter): boolean;

        /**
         * Sets `iter` to be the child of `parent`, using the given index.
         * 
         * The first index is 0. If `n` is too big, or `parent` has no children,
         * `iter` is set to an invalid iterator and `false` is returned. `parent`
         * will remain a valid node after this function has been called. As a
         * special case, if `parent` is `null`, then the `n`-th root node
         * is set.
         * @param parent the {@link Gtk.TreeIter}-struct to get the child from, or `null`.
         * @param n the index of the desired child
         * @returns `true`, if `parent` has an `n`-th child
         */
        iter_nth_child(parent: (Gtk.TreeIter | null), n: number): [boolean, Gtk.TreeIter];

        /**
         * Sets `iter` to be the parent of `child`.
         * 
         * If `child` is at the toplevel, and doesn’t have a parent, then
         * `iter` is set to an invalid iterator and `false` is returned.
         * `child` will remain a valid node after this function has been
         * called.
         * 
         * `iter` will be initialized before the lookup is performed, so `child`
         * and `iter` cannot point to the same memory location.
         * @param child the {@link Gtk.TreeIter}-struct
         * @returns `true`, if `iter` is set to the parent of `child`
         */
        iter_parent(child: Gtk.TreeIter): [boolean, Gtk.TreeIter];

        /**
         * Sets `iter` to point to the previous node at the current level.
         * 
         * If there is no previous `iter`, `false` is returned and `iter` is
         * set to be invalid.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @returns `true` if `iter` has been changed to the previous node
         */
        iter_previous(iter: Gtk.TreeIter): boolean;

        /**
         * Lets the tree ref the node.
         * 
         * This is an optional method for models to implement.
         * To be more specific, models may ignore this call as it exists
         * primarily for performance reasons.
         * 
         * This function is primarily meant as a way for views to let
         * caching models know when nodes are being displayed (and hence,
         * whether or not to cache that node). Being displayed means a node
         * is in an expanded branch, regardless of whether the node is currently
         * visible in the viewport. For example, a file-system based model
         * would not want to keep the entire file-hierarchy in memory,
         * just the sections that are currently being displayed by
         * every current view.
         * 
         * A model should be expected to be able to get an iter independent
         * of its reffed state.
         * @param iter the {@link Gtk.TreeIter}-struct
         */
        ref_node(iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_changed | Gtk.TreeModel::row-changed} signal on `tree_model`.
         * @param path a {@link Gtk.TreePath}-struct pointing to the changed row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the changed row
         */
        row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_deleted | Gtk.TreeModel::row-deleted} signal on `tree_model`.
         * 
         * This should be called by models after a row has been removed.
         * The location pointed to by `path` should be the location that
         * the row previously was at. It may not be a valid location anymore.
         * 
         * Nodes that are deleted are not unreffed, this means that any
         * outstanding references on the deleted node should not be released.
         * @param path a {@link Gtk.TreePath}-struct pointing to the previous location of     the deleted row
         */
        row_deleted(path: Gtk.TreePath): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_has_child_toggled | Gtk.TreeModel::row-has-child-toggled} signal on
         * `tree_model`. This should be called by models after the child
         * state of a node changes.
         * @param path a {@link Gtk.TreePath}-struct pointing to the changed row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the changed row
         */
        row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_inserted | Gtk.TreeModel::row-inserted} signal on `tree_model`.
         * @param path a {@link Gtk.TreePath}-struct pointing to the inserted row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the inserted row
         */
        row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.rows_reordered | Gtk.TreeModel::rows-reordered} signal on `tree_model`.
         * 
         * This should be called by models when their rows have been
         * reordered.
         * @param path a {@link Gtk.TreePath}-struct pointing to the tree node whose children     have been reordered
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the node     whose children have been reordered, or `null` if the depth     of `path` is 0
         * @param new_order an array of integers     mapping the current position of each child to its old     position before the re-ordering,     i.e. `new_order``[newpos] = oldpos`
         */
        rows_reordered(path: Gtk.TreePath, iter: (Gtk.TreeIter | null), new_order: number[]): void;

        /**
         * Lets the tree unref the node.
         * 
         * This is an optional method for models to implement.
         * To be more specific, models may ignore this call as it exists
         * primarily for performance reasons. For more information on what
         * this means, see `gtk_tree_model_ref_node()`.
         * 
         * Please note that nodes that are deleted are not unreffed.
         * @param iter the {@link Gtk.TreeIter}-struct
         */
        unref_node(iter: Gtk.TreeIter): void;

        /**
         * Returns the type of the column.
         * @param index_ the column index
         * @virtual
         */
        vfunc_get_column_type(index_: number): GObject.GType;

        /**
         * Returns a set of flags supported by this interface.
         * 
         * The flags are a bitwise combination of {@link Gtk.TreeModelFlags}.
         * The flags supported should not change during the lifetime
         * of the `tree_model`.
         * @virtual
         */
        vfunc_get_flags(): Gtk.TreeModelFlags;

        /**
         * Sets `iter` to a valid iterator pointing to `path`.  If `path` does
         * not exist, `iter` is set to an invalid iterator and `false` is returned.
         * @param path the {@link Gtk.TreePath}-struct
         * @virtual
         */
        vfunc_get_iter(path: Gtk.TreePath): [boolean, Gtk.TreeIter];

        /**
         * Returns the number of columns supported by `tree_model`.
         * @virtual
         */
        vfunc_get_n_columns(): number;

        /**
         * Returns a newly-created {@link Gtk.TreePath}-struct referenced by `iter`.
         * 
         * This path should be freed with `gtk_tree_path_free()`.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_get_path(iter: Gtk.TreeIter): Gtk.TreePath;

        /**
         * Initializes and sets `value` to that at `column`.
         * 
         * When done with `value`, `g_value_unset()` needs to be called
         * to free any allocated memory.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @param column the column to lookup the value at
         * @virtual
         */
        vfunc_get_value(iter: Gtk.TreeIter, column: number): GObject.Value | any;

        /**
         * Sets `iter` to point to the first child of `parent`.
         * 
         * If `parent` has no children, `false` is returned and `iter` is
         * set to be invalid. `parent` will remain a valid node after this
         * function has been called.
         * 
         * If `parent` is `null` returns the first node, equivalent to
         * `gtk_tree_model_get_iter_first (tree_model, iter);`
         * @param parent the {@link Gtk.TreeIter}-struct, or `null`
         * @virtual
         */
        vfunc_iter_children(parent: (Gtk.TreeIter | null)): [boolean, Gtk.TreeIter];

        /**
         * Returns `true` if `iter` has children, `false` otherwise.
         * @param iter the {@link Gtk.TreeIter}-struct to test for children
         * @virtual
         */
        vfunc_iter_has_child(iter: Gtk.TreeIter): boolean;

        /**
         * Returns the number of children that `iter` has.
         * 
         * As a special case, if `iter` is `null`, then the number
         * of toplevel nodes is returned.
         * @param iter the {@link Gtk.TreeIter}-struct, or `null`
         * @virtual
         */
        vfunc_iter_n_children(iter: (Gtk.TreeIter | null)): number;

        /**
         * Sets `iter` to point to the node following it at the current level.
         * 
         * If there is no next `iter`, `false` is returned and `iter` is set
         * to be invalid.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_iter_next(iter: Gtk.TreeIter): boolean;

        /**
         * Sets `iter` to be the child of `parent`, using the given index.
         * 
         * The first index is 0. If `n` is too big, or `parent` has no children,
         * `iter` is set to an invalid iterator and `false` is returned. `parent`
         * will remain a valid node after this function has been called. As a
         * special case, if `parent` is `null`, then the `n`-th root node
         * is set.
         * @param parent the {@link Gtk.TreeIter}-struct to get the child from, or `null`.
         * @param n the index of the desired child
         * @virtual
         */
        vfunc_iter_nth_child(parent: (Gtk.TreeIter | null), n: number): [boolean, Gtk.TreeIter];

        /**
         * Sets `iter` to be the parent of `child`.
         * 
         * If `child` is at the toplevel, and doesn’t have a parent, then
         * `iter` is set to an invalid iterator and `false` is returned.
         * `child` will remain a valid node after this function has been
         * called.
         * 
         * `iter` will be initialized before the lookup is performed, so `child`
         * and `iter` cannot point to the same memory location.
         * @param child the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_iter_parent(child: Gtk.TreeIter): [boolean, Gtk.TreeIter];

        /**
         * Sets `iter` to point to the previous node at the current level.
         * 
         * If there is no previous `iter`, `false` is returned and `iter` is
         * set to be invalid.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_iter_previous(iter: Gtk.TreeIter): boolean;

        /**
         * Lets the tree ref the node.
         * 
         * This is an optional method for models to implement.
         * To be more specific, models may ignore this call as it exists
         * primarily for performance reasons.
         * 
         * This function is primarily meant as a way for views to let
         * caching models know when nodes are being displayed (and hence,
         * whether or not to cache that node). Being displayed means a node
         * is in an expanded branch, regardless of whether the node is currently
         * visible in the viewport. For example, a file-system based model
         * would not want to keep the entire file-hierarchy in memory,
         * just the sections that are currently being displayed by
         * every current view.
         * 
         * A model should be expected to be able to get an iter independent
         * of its reffed state.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_ref_node(iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_changed | Gtk.TreeModel::row-changed} signal on `tree_model`.
         * @param path a {@link Gtk.TreePath}-struct pointing to the changed row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the changed row
         * @virtual
         */
        vfunc_row_changed(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_deleted | Gtk.TreeModel::row-deleted} signal on `tree_model`.
         * 
         * This should be called by models after a row has been removed.
         * The location pointed to by `path` should be the location that
         * the row previously was at. It may not be a valid location anymore.
         * 
         * Nodes that are deleted are not unreffed, this means that any
         * outstanding references on the deleted node should not be released.
         * @param path a {@link Gtk.TreePath}-struct pointing to the previous location of     the deleted row
         * @virtual
         */
        vfunc_row_deleted(path: Gtk.TreePath): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_has_child_toggled | Gtk.TreeModel::row-has-child-toggled} signal on
         * `tree_model`. This should be called by models after the child
         * state of a node changes.
         * @param path a {@link Gtk.TreePath}-struct pointing to the changed row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the changed row
         * @virtual
         */
        vfunc_row_has_child_toggled(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Emits the {@link Gtk.TreeModel.SignalSignatures.row_inserted | Gtk.TreeModel::row-inserted} signal on `tree_model`.
         * @param path a {@link Gtk.TreePath}-struct pointing to the inserted row
         * @param iter a valid {@link Gtk.TreeIter}-struct pointing to the inserted row
         * @virtual
         */
        vfunc_row_inserted(path: Gtk.TreePath, iter: Gtk.TreeIter): void;

        /**
         * Lets the tree unref the node.
         * 
         * This is an optional method for models to implement.
         * To be more specific, models may ignore this call as it exists
         * primarily for performance reasons. For more information on what
         * this means, see `gtk_tree_model_ref_node()`.
         * 
         * Please note that nodes that are deleted are not unreffed.
         * @param iter the {@link Gtk.TreeIter}-struct
         * @virtual
         */
        vfunc_unref_node(iter: Gtk.TreeIter): void;
    }


    namespace VectorLoadProcedureDialog {
        // Signal signatures
        interface SignalSignatures extends ProcedureDialog.SignalSignatures {
            "notify::config": (pspec: GObject.ParamSpec) => void;
            "notify::procedure": (pspec: GObject.ParamSpec) => void;
            "notify::help-func": (pspec: GObject.ParamSpec) => void;
            "notify::help-id": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::use-header-bar": (pspec: GObject.ParamSpec) => void;
            "notify::accept-focus": (pspec: GObject.ParamSpec) => void;
            "notify::application": (pspec: GObject.ParamSpec) => void;
            "notify::attached-to": (pspec: GObject.ParamSpec) => void;
            "notify::decorated": (pspec: GObject.ParamSpec) => void;
            "notify::default-height": (pspec: GObject.ParamSpec) => void;
            "notify::default-width": (pspec: GObject.ParamSpec) => void;
            "notify::deletable": (pspec: GObject.ParamSpec) => void;
            "notify::destroy-with-parent": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-map": (pspec: GObject.ParamSpec) => void;
            "notify::focus-visible": (pspec: GObject.ParamSpec) => void;
            "notify::gravity": (pspec: GObject.ParamSpec) => void;
            "notify::has-resize-grip": (pspec: GObject.ParamSpec) => void;
            "notify::has-toplevel-focus": (pspec: GObject.ParamSpec) => void;
            "notify::hide-titlebar-when-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-active": (pspec: GObject.ParamSpec) => void;
            "notify::is-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonics-visible": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::resizable": (pspec: GObject.ParamSpec) => void;
            "notify::resize-grip-visible": (pspec: GObject.ParamSpec) => void;
            "notify::role": (pspec: GObject.ParamSpec) => void;
            "notify::screen": (pspec: GObject.ParamSpec) => void;
            "notify::skip-pager-hint": (pspec: GObject.ParamSpec) => void;
            "notify::skip-taskbar-hint": (pspec: GObject.ParamSpec) => void;
            "notify::startup-id": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::transient-for": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::type-hint": (pspec: GObject.ParamSpec) => void;
            "notify::urgency-hint": (pspec: GObject.ParamSpec) => void;
            "notify::window-position": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends ProcedureDialog.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class VectorLoadProcedureDialog extends ProcedureDialog implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<VectorLoadProcedureDialog>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VectorLoadProcedureDialog.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<VectorLoadProcedureDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](procedure: Gimp.VectorLoadProcedure, config: Gimp.ProcedureConfig, extracted_data: (Gimp.VectorLoadData | null), file: (Gio.File | null)): VectorLoadProcedureDialog;

        // Conflicted with GimpUi.ProcedureDialog.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof VectorLoadProcedureDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VectorLoadProcedureDialog.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof VectorLoadProcedureDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VectorLoadProcedureDialog.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof VectorLoadProcedureDialog.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VectorLoadProcedureDialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace ZoomModel {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when the zoom factor of the zoom model changes.
             * @signal
             * @run-last
             */
            zoomed: (arg0: number, arg1: number) => void;
            "notify::fraction": (pspec: GObject.ParamSpec) => void;
            "notify::maximum": (pspec: GObject.ParamSpec) => void;
            "notify::minimum": (pspec: GObject.ParamSpec) => void;
            "notify::percentage": (pspec: GObject.ParamSpec) => void;
            "notify::value": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            fraction: string;
            maximum: number;
            minimum: number;
            percentage: string;
            value: number;
        }
    }

    /**
     * A model for zoom values.
     * @gir-type Class
     */
    class ZoomModel extends GObject.Object {
        static $gtype: GObject.GType<ZoomModel>;

        // Properties
        /**
         * The zoom factor expressed as a fraction.
         * @read-only
         * @default 1:1
         */
        get fraction(): string;

        /**
         * The maximum zoom factor.
         * @default 256
         */
        get maximum(): number;
        set maximum(val: number);

        /**
         * The minimum zoom factor.
         * @default 0.003906
         */
        get minimum(): number;
        set minimum(val: number);

        /**
         * The zoom factor expressed as percentage.
         * @read-only
         * @default 100%
         */
        get percentage(): string;

        /**
         * The zoom factor.
         * @default 1
         */
        get value(): number;
        set value(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ZoomModel.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ZoomModel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ZoomModel;

        // Signals
        /** @signal */
        connect<K extends keyof ZoomModel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ZoomModel.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ZoomModel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ZoomModel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ZoomModel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ZoomModel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Utility function to calculate a new scale factor.
         * @param zoom_type the zoom type
         * @param scale ignored unless `zoom_type` == `GIMP_ZOOM_TO`
         * @param delta the delta from a smooth zoom event
         */
        static zoom_step(zoom_type: ZoomType, scale: number, delta: number): number;

        // Methods
        /**
         * Retrieves the current zoom factor of `model`.
         * @returns the current scale factor Since GIMP 2.4
         */
        get_factor(): number;

        /**
         * Retrieves the current zoom factor of `model` as a fraction.
         * 
         * Since GIMP 2.4
         */
        get_fraction(): [number, number];

        /**
         * Sets the allowed range of the `model`.
         * 
         * Since GIMP 2.4
         * @param min new lower limit for zoom factor
         * @param max new upper limit for zoom factor
         */
        set_range(min: number, max: number): void;

        /**
         * Since GIMP 2.4
         * @param zoom_type the {@link GimpUi.ZoomType}
         * @param scale ignored unless `zoom_type` == `GIMP_ZOOM_TO`
         */
        zoom(zoom_type: ZoomType, scale: number): void;
    }


    namespace ZoomPreview {
        // Signal signatures
        interface SignalSignatures extends ScrolledPreview.SignalSignatures {
            "notify::drawable": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::update": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends ScrolledPreview.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            drawable: Gimp.Drawable;
            model: ZoomModel;
        }
    }

    /**
     * A drawable preview with zooming capabilities.
     * @gir-type Class
     */
    class ZoomPreview extends ScrolledPreview implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<ZoomPreview>;

        // Properties
        /**
         * @construct-only
         */
        get drawable(): Gimp.Drawable;

        /**
         * The {@link GimpUi.ZoomModel} used by this {@link GimpUi.ZoomPreview}.
         * @since 2.4
         * @construct-only
         */
        get model(): ZoomModel;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ZoomPreview.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ZoomPreview.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_from_drawable(drawable: Gimp.Drawable): ZoomPreview;

        static new_with_model_from_drawable(drawable: Gimp.Drawable, model: ZoomModel): ZoomPreview;

        // Signals
        /** @signal */
        connect<K extends keyof ZoomPreview.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ZoomPreview.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ZoomPreview.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ZoomPreview.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ZoomPreview.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ZoomPreview.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Returns the drawable the {@link GimpUi.ZoomPreview} is attached to.
         * @returns the drawable that was passed to          `gimp_zoom_preview_new_from_drawable()`.
         */
        get_drawable(): Gimp.Drawable;

        /**
         * Returns the zoom factor the preview is currently using.
         * @returns the current zoom factor
         */
        get_factor(): number;

        /**
         * Returns the {@link GimpUi.ZoomModel} the preview is using.
         * @returns a pointer to the {@link GimpUi.ZoomModel} owned          by the `preview`
         */
        get_model(): ZoomModel;

        /**
         * Returns the scaled image data of the part of the drawable the
         * {@link GimpUi.ZoomPreview} is currently showing, as a newly allocated array of guchar.
         * This function also allow to get the current width, height and bpp of the
         * {@link GimpUi.ZoomPreview}.
         * @returns newly allocated data that should be          released using `g_free()` when it is not any longer needed
         */
        get_source(): [Uint8Array, number, number, number];
    }


    /**
     * @gir-type Alias
     */
    type AspectPreviewClass = typeof AspectPreview;

    /**
     * @gir-type Alias
     */
    type BrowserClass = typeof Browser;

    /**
     * @gir-type Alias
     */
    type BrushChooserClass = typeof BrushChooser;

    /**
     * @gir-type Alias
     */
    type BusyBoxClass = typeof BusyBox;

    /**
     * @gir-type Alias
     */
    type ButtonClass = typeof Button;

    /**
     * @gir-type Alias
     */
    type CellRendererColorClass = typeof CellRendererColor;

    /**
     * @gir-type Alias
     */
    type CellRendererToggleClass = typeof CellRendererToggle;

    /**
     * @gir-type Alias
     */
    type ChainButtonClass = typeof ChainButton;

    /**
     * @gir-type Alias
     */
    type ColorAreaClass = typeof ColorArea;

    /**
     * @gir-type Alias
     */
    type ColorButtonClass = typeof ColorButton;

    /**
     * @gir-type Alias
     */
    type ColorDisplayClass = typeof ColorDisplay;

    /**
     * @gir-type Alias
     */
    type ColorDisplayStackClass = typeof ColorDisplayStack;

    /**
     * @gir-type Alias
     */
    type ColorHexEntryClass = typeof ColorHexEntry;

    /**
     * @gir-type Alias
     */
    type ColorNotebookClass = typeof ColorNotebook;

    /**
     * @gir-type Alias
     */
    type ColorProfileChooserDialogClass = typeof ColorProfileChooserDialog;

    /**
     * @gir-type Alias
     */
    type ColorProfileComboBoxClass = typeof ColorProfileComboBox;

    /**
     * @gir-type Alias
     */
    type ColorProfileStoreClass = typeof ColorProfileStore;

    /**
     * @gir-type Alias
     */
    type ColorProfileViewClass = typeof ColorProfileView;

    /**
     * @gir-type Alias
     */
    type ColorScaleClass = typeof ColorScale;

    /**
     * @gir-type Alias
     */
    type ColorScaleEntryClass = typeof ColorScaleEntry;

    /**
     * @gir-type Alias
     */
    type ColorScalesClass = typeof ColorScales;

    /**
     * @gir-type Alias
     */
    type ColorSelectClass = typeof ColorSelect;

    /**
     * @gir-type Alias
     */
    type ColorSelectionClass = typeof ColorSelection;

    /**
     * @gir-type Alias
     */
    type ColorSelectorClass = typeof ColorSelector;

    /**
     * @gir-type Struct
     */
    abstract class Controller {
        static $gtype: GObject.GType<Controller>;
    }


    /**
     * @gir-type Alias
     */
    type DialogClass = typeof Dialog;

    /**
     * @gir-type Alias
     */
    type DrawableChooserClass = typeof DrawableChooser;

    /**
     * @gir-type Alias
     */
    type DrawablePreviewClass = typeof DrawablePreview;

    /**
     * @gir-type Alias
     */
    type EnumComboBoxClass = typeof EnumComboBox;

    /**
     * @gir-type Alias
     */
    type EnumLabelClass = typeof EnumLabel;

    /**
     * @gir-type Alias
     */
    type EnumStoreClass = typeof EnumStore;

    /**
     * @gir-type Alias
     */
    type ExportProcedureDialogClass = typeof ExportProcedureDialog;

    /**
     * @gir-type Alias
     */
    type FileChooserClass = typeof FileChooser;

    /**
     * @gir-type Struct
     */
    abstract class FileEntry {
        static $gtype: GObject.GType<FileEntry>;
    }


    /**
     * @gir-type Alias
     */
    type FontChooserClass = typeof FontChooser;

    /**
     * @gir-type Alias
     */
    type FrameClass = typeof Frame;

    /**
     * @gir-type Alias
     */
    type GradientChooserClass = typeof GradientChooser;

    /**
     * @gir-type Alias
     */
    type HintBoxClass = typeof HintBox;

    /**
     * @gir-type Alias
     */
    type ImageChooserClass = typeof ImageChooser;

    /**
     * @gir-type Alias
     */
    type ImageComboBoxClass = typeof ImageComboBox;

    /**
     * @gir-type Alias
     */
    type IntComboBoxClass = typeof IntComboBox;

    /**
     * @gir-type Alias
     */
    type IntRadioFrameClass = typeof IntRadioFrame;

    /**
     * @gir-type Alias
     */
    type IntStoreClass = typeof IntStore;

    /**
     * @gir-type Alias
     */
    type ItemChooserClass = typeof ItemChooser;

    /**
     * @gir-type Alias
     */
    type LabelColorClass = typeof LabelColor;

    /**
     * @gir-type Alias
     */
    type LabelEntryClass = typeof LabelEntry;

    /**
     * @gir-type Alias
     */
    type LabelIntWidgetClass = typeof LabelIntWidget;

    /**
     * @gir-type Alias
     */
    type LabelSpinClass = typeof LabelSpin;

    /**
     * @gir-type Alias
     */
    type LabelStringWidgetClass = typeof LabelStringWidget;

    /**
     * @gir-type Alias
     */
    type LabeledClass = typeof Labeled;

    /**
     * @gir-type Alias
     */
    type MemsizeEntryClass = typeof MemsizeEntry;

    /**
     * @gir-type Alias
     */
    type NumberPairEntryClass = typeof NumberPairEntry;

    /**
     * @gir-type Alias
     */
    type OffsetAreaClass = typeof OffsetArea;

    /**
     * @gir-type Alias
     */
    type PageSelectorClass = typeof PageSelector;

    /**
     * @gir-type Alias
     */
    type PaletteChooserClass = typeof PaletteChooser;

    /**
     * @gir-type Alias
     */
    type PathEditorClass = typeof PathEditor;

    /**
     * @gir-type Alias
     */
    type PatternChooserClass = typeof PatternChooser;

    /**
     * @gir-type Alias
     */
    type PickButtonClass = typeof PickButton;

    /**
     * @gir-type Alias
     */
    type PreviewAreaClass = typeof PreviewArea;

    /**
     * @gir-type Alias
     */
    type PreviewClass = typeof Preview;

    /**
     * @gir-type Alias
     */
    type ProcBrowserDialogClass = typeof ProcBrowserDialog;

    /**
     * @gir-type Alias
     */
    type ProcedureDialogClass = typeof ProcedureDialog;

    /**
     * @gir-type Alias
     */
    type ProgressBarClass = typeof ProgressBar;

    /**
     * @gir-type Alias
     */
    type ResourceChooserClass = typeof ResourceChooser;

    /**
     * @gir-type Alias
     */
    type RulerClass = typeof Ruler;

    /**
     * @gir-type Alias
     */
    type ScaleEntryClass = typeof ScaleEntry;

    /**
     * @gir-type Alias
     */
    type ScrolledPreviewClass = typeof ScrolledPreview;

    /**
     * @gir-type Alias
     */
    type SizeEntryClass = typeof SizeEntry;

    /**
     * @gir-type Alias
     */
    type SpinButtonClass = typeof SpinButton;

    /**
     * @gir-type Alias
     */
    type SpinScaleClass = typeof SpinScale;

    /**
     * @gir-type Alias
     */
    type StringComboBoxClass = typeof StringComboBox;

    /**
     * @gir-type Alias
     */
    type UnitComboBoxClass = typeof UnitComboBox;

    /**
     * @gir-type Alias
     */
    type UnitStoreClass = typeof UnitStore;

    /**
     * @gir-type Alias
     */
    type VectorLoadProcedureDialogClass = typeof VectorLoadProcedureDialog;

    /**
     * @gir-type Alias
     */
    type ZoomModelClass = typeof ZoomModel;

    /**
     * @gir-type Alias
     */
    type ZoomPreviewClass = typeof ZoomPreview;

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

export default GimpUi;

// END
