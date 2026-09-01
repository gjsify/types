
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
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';

export namespace Gdk {

    /**
     * Gdk-2.0
     */


    /**
     * @gir-type Enum
     */
    export namespace AxisUse {
        export const $gtype: GObject.GType<AxisUse>;
    }

    /**
     * @gir-type Enum
     */
    enum AxisUse {
        IGNORE = 0,
        X = 1,
        Y = 2,
        PRESSURE = 3,
        XTILT = 4,
        YTILT = 5,
        WHEEL = 6,
        LAST = 7,
    }


    /**
     * @gir-type Enum
     */
    export namespace ByteOrder {
        export const $gtype: GObject.GType<ByteOrder>;
    }

    /**
     * @gir-type Enum
     */
    enum ByteOrder {
        LSB_FIRST = 0,
        MSB_FIRST = 1,
    }


    /**
     * @gir-type Enum
     */
    export namespace CapStyle {
        export const $gtype: GObject.GType<CapStyle>;
    }

    /**
     * @gir-type Enum
     */
    enum CapStyle {
        NOT_LAST = 0,
        BUTT = 1,
        ROUND = 2,
        PROJECTING = 3,
    }


    /**
     * @gir-type Enum
     */
    export namespace CrossingMode {
        export const $gtype: GObject.GType<CrossingMode>;
    }

    /**
     * @gir-type Enum
     */
    enum CrossingMode {
        NORMAL = 0,
        GRAB = 1,
        UNGRAB = 2,
        GTK_GRAB = 3,
        GTK_UNGRAB = 4,
        STATE_CHANGED = 5,
    }


    /**
     * @gir-type Enum
     */
    export namespace CursorType {
        export const $gtype: GObject.GType<CursorType>;
    }

    /**
     * @gir-type Enum
     */
    enum CursorType {
        X_CURSOR = 0,
        ARROW = 2,
        BASED_ARROW_DOWN = 4,
        BASED_ARROW_UP = 6,
        BOAT = 8,
        BOGOSITY = 10,
        BOTTOM_LEFT_CORNER = 12,
        BOTTOM_RIGHT_CORNER = 14,
        BOTTOM_SIDE = 16,
        BOTTOM_TEE = 18,
        BOX_SPIRAL = 20,
        CENTER_PTR = 22,
        CIRCLE = 24,
        CLOCK = 26,
        COFFEE_MUG = 28,
        CROSS = 30,
        CROSS_REVERSE = 32,
        CROSSHAIR = 34,
        DIAMOND_CROSS = 36,
        DOT = 38,
        DOTBOX = 40,
        DOUBLE_ARROW = 42,
        DRAFT_LARGE = 44,
        DRAFT_SMALL = 46,
        DRAPED_BOX = 48,
        EXCHANGE = 50,
        FLEUR = 52,
        GOBBLER = 54,
        GUMBY = 56,
        HAND1 = 58,
        HAND2 = 60,
        HEART = 62,
        ICON = 64,
        IRON_CROSS = 66,
        LEFT_PTR = 68,
        LEFT_SIDE = 70,
        LEFT_TEE = 72,
        LEFTBUTTON = 74,
        LL_ANGLE = 76,
        LR_ANGLE = 78,
        MAN = 80,
        MIDDLEBUTTON = 82,
        MOUSE = 84,
        PENCIL = 86,
        PIRATE = 88,
        PLUS = 90,
        QUESTION_ARROW = 92,
        RIGHT_PTR = 94,
        RIGHT_SIDE = 96,
        RIGHT_TEE = 98,
        RIGHTBUTTON = 100,
        RTL_LOGO = 102,
        SAILBOAT = 104,
        SB_DOWN_ARROW = 106,
        SB_H_DOUBLE_ARROW = 108,
        SB_LEFT_ARROW = 110,
        SB_RIGHT_ARROW = 112,
        SB_UP_ARROW = 114,
        SB_V_DOUBLE_ARROW = 116,
        SHUTTLE = 118,
        SIZING = 120,
        SPIDER = 122,
        SPRAYCAN = 124,
        STAR = 126,
        TARGET = 128,
        TCROSS = 130,
        TOP_LEFT_ARROW = 132,
        TOP_LEFT_CORNER = 134,
        TOP_RIGHT_CORNER = 136,
        TOP_SIDE = 138,
        TOP_TEE = 140,
        TREK = 142,
        UL_ANGLE = 144,
        UMBRELLA = 146,
        UR_ANGLE = 148,
        WATCH = 150,
        XTERM = 152,
        LAST_CURSOR = 153,
        BLANK_CURSOR = -2,
        CURSOR_IS_PIXMAP = -1,
    }


    /**
     * @gir-type Enum
     */
    export namespace DragProtocol {
        export const $gtype: GObject.GType<DragProtocol>;
    }

    /**
     * @gir-type Enum
     */
    enum DragProtocol {
        MOTIF = 0,
        XDND = 1,
        ROOTWIN = 2,
        NONE = 3,
        WIN32_DROPFILES = 4,
        OLE2 = 5,
        LOCAL = 6,
    }


    /**
     * @gir-type Enum
     */
    export namespace EventType {
        export const $gtype: GObject.GType<EventType>;
    }

    /**
     * @gir-type Enum
     */
    enum EventType {
        NOTHING = -1,
        DELETE = 0,
        DESTROY = 1,
        EXPOSE = 2,
        MOTION_NOTIFY = 3,
        BUTTON_PRESS = 4,
        "2BUTTON_PRESS" = 5,
        "3BUTTON_PRESS" = 6,
        BUTTON_RELEASE = 7,
        KEY_PRESS = 8,
        KEY_RELEASE = 9,
        ENTER_NOTIFY = 10,
        LEAVE_NOTIFY = 11,
        FOCUS_CHANGE = 12,
        CONFIGURE = 13,
        MAP = 14,
        UNMAP = 15,
        PROPERTY_NOTIFY = 16,
        SELECTION_CLEAR = 17,
        SELECTION_REQUEST = 18,
        SELECTION_NOTIFY = 19,
        PROXIMITY_IN = 20,
        PROXIMITY_OUT = 21,
        DRAG_ENTER = 22,
        DRAG_LEAVE = 23,
        DRAG_MOTION = 24,
        DRAG_STATUS = 25,
        DROP_START = 26,
        DROP_FINISHED = 27,
        CLIENT_EVENT = 28,
        VISIBILITY_NOTIFY = 29,
        NO_EXPOSE = 30,
        SCROLL = 31,
        WINDOW_STATE = 32,
        SETTING = 33,
        OWNER_CHANGE = 34,
        GRAB_BROKEN = 35,
        DAMAGE = 36,
        EVENT_LAST = 37,
    }


    /**
     * @gir-type Enum
     */
    export namespace ExtensionMode {
        export const $gtype: GObject.GType<ExtensionMode>;
    }

    /**
     * @gir-type Enum
     */
    enum ExtensionMode {
        NONE = 0,
        ALL = 1,
        CURSOR = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace Fill {
        export const $gtype: GObject.GType<Fill>;
    }

    /**
     * @gir-type Enum
     */
    enum Fill {
        SOLID = 0,
        TILED = 1,
        STIPPLED = 2,
        OPAQUE_STIPPLED = 3,
    }


    /**
     * @gir-type Enum
     */
    export namespace FillRule {
        export const $gtype: GObject.GType<FillRule>;
    }

    /**
     * @gir-type Enum
     */
    enum FillRule {
        EVEN_ODD_RULE = 0,
        WINDING_RULE = 1,
    }


    /**
     * @gir-type Enum
     */
    export namespace FilterReturn {
        export const $gtype: GObject.GType<FilterReturn>;
    }

    /**
     * @gir-type Enum
     */
    enum FilterReturn {
        CONTINUE = 0,
        TRANSLATE = 1,
        REMOVE = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace FontType {
        export const $gtype: GObject.GType<FontType>;
    }

    /**
     * @gir-type Enum
     */
    enum FontType {
        FONT = 0,
        FONTSET = 1,
    }


    /**
     * @gir-type Enum
     */
    export namespace Function {
        export const $gtype: GObject.GType<Function>;
    }

    /**
     * @gir-type Enum
     */
    enum Function {
        COPY = 0,
        INVERT = 1,
        XOR = 2,
        CLEAR = 3,
        AND = 4,
        AND_REVERSE = 5,
        AND_INVERT = 6,
        NOOP = 7,
        OR = 8,
        EQUIV = 9,
        OR_REVERSE = 10,
        COPY_INVERT = 11,
        OR_INVERT = 12,
        NAND = 13,
        NOR = 14,
        SET = 15,
    }


    /**
     * @gir-type Enum
     */
    export namespace GrabStatus {
        export const $gtype: GObject.GType<GrabStatus>;
    }

    /**
     * @gir-type Enum
     */
    enum GrabStatus {
        SUCCESS = 0,
        ALREADY_GRABBED = 1,
        INVALID_TIME = 2,
        NOT_VIEWABLE = 3,
        FROZEN = 4,
    }


    /**
     * @gir-type Enum
     */
    export namespace Gravity {
        export const $gtype: GObject.GType<Gravity>;
    }

    /**
     * @gir-type Enum
     */
    enum Gravity {
        NORTH_WEST = 1,
        NORTH = 2,
        NORTH_EAST = 3,
        WEST = 4,
        CENTER = 5,
        EAST = 6,
        SOUTH_WEST = 7,
        SOUTH = 8,
        SOUTH_EAST = 9,
        STATIC = 10,
    }


    /**
     * @gir-type Enum
     */
    export namespace ImageType {
        export const $gtype: GObject.GType<ImageType>;
    }

    /**
     * @gir-type Enum
     */
    enum ImageType {
        NORMAL = 0,
        SHARED = 1,
        FASTEST = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace InputMode {
        export const $gtype: GObject.GType<InputMode>;
    }

    /**
     * @gir-type Enum
     */
    enum InputMode {
        DISABLED = 0,
        SCREEN = 1,
        WINDOW = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace InputSource {
        export const $gtype: GObject.GType<InputSource>;
    }

    /**
     * @gir-type Enum
     */
    enum InputSource {
        MOUSE = 0,
        PEN = 1,
        ERASER = 2,
        CURSOR = 3,
    }


    /**
     * @gir-type Enum
     */
    export namespace JoinStyle {
        export const $gtype: GObject.GType<JoinStyle>;
    }

    /**
     * @gir-type Enum
     */
    enum JoinStyle {
        MITER = 0,
        ROUND = 1,
        BEVEL = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace LineStyle {
        export const $gtype: GObject.GType<LineStyle>;
    }

    /**
     * @gir-type Enum
     */
    enum LineStyle {
        SOLID = 0,
        ON_OFF_DASH = 1,
        DOUBLE_DASH = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace NotifyType {
        export const $gtype: GObject.GType<NotifyType>;
    }

    /**
     * @gir-type Enum
     */
    enum NotifyType {
        ANCESTOR = 0,
        VIRTUAL = 1,
        INFERIOR = 2,
        NONLINEAR = 3,
        NONLINEAR_VIRTUAL = 4,
        UNKNOWN = 5,
    }


    /**
     * @gir-type Enum
     */
    export namespace OverlapType {
        export const $gtype: GObject.GType<OverlapType>;
    }

    /**
     * @gir-type Enum
     */
    enum OverlapType {
        IN = 0,
        OUT = 1,
        PART = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace OwnerChange {
        export const $gtype: GObject.GType<OwnerChange>;
    }

    /**
     * @gir-type Enum
     */
    enum OwnerChange {
        NEW_OWNER = 0,
        DESTROY = 1,
        CLOSE = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace PropMode {
        export const $gtype: GObject.GType<PropMode>;
    }

    /**
     * @gir-type Enum
     */
    enum PropMode {
        REPLACE = 0,
        PREPEND = 1,
        APPEND = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace PropertyState {
        export const $gtype: GObject.GType<PropertyState>;
    }

    /**
     * @gir-type Enum
     */
    enum PropertyState {
        NEW_VALUE = 0,
        DELETE = 1,
    }


    /**
     * @gir-type Enum
     */
    export namespace RgbDither {
        export const $gtype: GObject.GType<RgbDither>;
    }

    /**
     * @gir-type Enum
     */
    enum RgbDither {
        NONE = 0,
        NORMAL = 1,
        MAX = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace ScrollDirection {
        export const $gtype: GObject.GType<ScrollDirection>;
    }

    /**
     * @gir-type Enum
     */
    enum ScrollDirection {
        UP = 0,
        DOWN = 1,
        LEFT = 2,
        RIGHT = 3,
    }


    /**
     * @gir-type Enum
     */
    export namespace SettingAction {
        export const $gtype: GObject.GType<SettingAction>;
    }

    /**
     * @gir-type Enum
     */
    enum SettingAction {
        NEW = 0,
        CHANGED = 1,
        DELETED = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace Status {
        export const $gtype: GObject.GType<Status>;
    }

    /**
     * @gir-type Enum
     */
    enum Status {
        OK = 0,
        ERROR = -1,
        ERROR_PARAM = -2,
        ERROR_FILE = -3,
        ERROR_MEM = -4,
    }


    /**
     * @gir-type Enum
     */
    export namespace SubwindowMode {
        export const $gtype: GObject.GType<SubwindowMode>;
    }

    /**
     * @gir-type Enum
     */
    enum SubwindowMode {
        CLIP_BY_CHILDREN = 0,
        INCLUDE_INFERIORS = 1,
    }


    /**
     * @gir-type Enum
     */
    export namespace VisibilityState {
        export const $gtype: GObject.GType<VisibilityState>;
    }

    /**
     * @gir-type Enum
     */
    enum VisibilityState {
        UNOBSCURED = 0,
        PARTIAL = 1,
        FULLY_OBSCURED = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace VisualType {
        export const $gtype: GObject.GType<VisualType>;
    }

    /**
     * @gir-type Enum
     */
    enum VisualType {
        STATIC_GRAY = 0,
        GRAYSCALE = 1,
        STATIC_COLOR = 2,
        PSEUDO_COLOR = 3,
        TRUE_COLOR = 4,
        DIRECT_COLOR = 5,
    }


    /**
     * @gir-type Enum
     */
    export namespace WindowClass {
        export const $gtype: GObject.GType<WindowClass>;
    }

    /**
     * @gir-type Enum
     */
    enum WindowClass {
        OUTPUT = 0,
        ONLY = 1,
    }


    /**
     * @gir-type Enum
     */
    export namespace WindowEdge {
        export const $gtype: GObject.GType<WindowEdge>;
    }

    /**
     * @gir-type Enum
     */
    enum WindowEdge {
        NORTH_WEST = 0,
        NORTH = 1,
        NORTH_EAST = 2,
        WEST = 3,
        EAST = 4,
        SOUTH_WEST = 5,
        SOUTH = 6,
        SOUTH_EAST = 7,
    }


    /**
     * @gir-type Enum
     */
    export namespace WindowType {
        export const $gtype: GObject.GType<WindowType>;
    }

    /**
     * @gir-type Enum
     */
    enum WindowType {
        ROOT = 0,
        TOPLEVEL = 1,
        CHILD = 2,
        DIALOG = 3,
        TEMP = 4,
        FOREIGN = 5,
        OFFSCREEN = 6,
    }


    /**
     * @gir-type Enum
     */
    export namespace WindowTypeHint {
        export const $gtype: GObject.GType<WindowTypeHint>;
    }

    /**
     * @gir-type Enum
     */
    enum WindowTypeHint {
        NORMAL = 0,
        DIALOG = 1,
        MENU = 2,
        TOOLBAR = 3,
        SPLASHSCREEN = 4,
        UTILITY = 5,
        DOCK = 6,
        DESKTOP = 7,
        DROPDOWN_MENU = 8,
        POPUP_MENU = 9,
        TOOLTIP = 10,
        NOTIFICATION = 11,
        COMBO = 12,
        DND = 13,
    }


    /**
     * @default 0
     */
    const CURRENT_TIME: number;

    /**
     * @default 48
     */
    const KEY_0: number;

    /**
     * @default 49
     */
    const KEY_1: number;

    /**
     * @default 50
     */
    const KEY_2: number;

    /**
     * @default 51
     */
    const KEY_3: number;

    /**
     * @default 64784
     */
    const KEY_3270_AltCursor: number;

    /**
     * @default 64782
     */
    const KEY_3270_Attn: number;

    /**
     * @default 64773
     */
    const KEY_3270_BackTab: number;

    /**
     * @default 64793
     */
    const KEY_3270_ChangeScreen: number;

    /**
     * @default 64789
     */
    const KEY_3270_Copy: number;

    /**
     * @default 64783
     */
    const KEY_3270_CursorBlink: number;

    /**
     * @default 64796
     */
    const KEY_3270_CursorSelect: number;

    /**
     * @default 64794
     */
    const KEY_3270_DeleteWord: number;

    /**
     * @default 64769
     */
    const KEY_3270_Duplicate: number;

    /**
     * @default 64798
     */
    const KEY_3270_Enter: number;

    /**
     * @default 64774
     */
    const KEY_3270_EraseEOF: number;

    /**
     * @default 64775
     */
    const KEY_3270_EraseInput: number;

    /**
     * @default 64795
     */
    const KEY_3270_ExSelect: number;

    /**
     * @default 64770
     */
    const KEY_3270_FieldMark: number;

    /**
     * @default 64787
     */
    const KEY_3270_Ident: number;

    /**
     * @default 64786
     */
    const KEY_3270_Jump: number;

    /**
     * @default 64785
     */
    const KEY_3270_KeyClick: number;

    /**
     * @default 64772
     */
    const KEY_3270_Left2: number;

    /**
     * @default 64778
     */
    const KEY_3270_PA1: number;

    /**
     * @default 64779
     */
    const KEY_3270_PA2: number;

    /**
     * @default 64780
     */
    const KEY_3270_PA3: number;

    /**
     * @default 64790
     */
    const KEY_3270_Play: number;

    /**
     * @default 64797
     */
    const KEY_3270_PrintScreen: number;

    /**
     * @default 64777
     */
    const KEY_3270_Quit: number;

    /**
     * @default 64792
     */
    const KEY_3270_Record: number;

    /**
     * @default 64776
     */
    const KEY_3270_Reset: number;

    /**
     * @default 64771
     */
    const KEY_3270_Right2: number;

    /**
     * @default 64788
     */
    const KEY_3270_Rule: number;

    /**
     * @default 64791
     */
    const KEY_3270_Setup: number;

    /**
     * @default 64781
     */
    const KEY_3270_Test: number;

    /**
     * @default 52
     */
    const KEY_4: number;

    /**
     * @default 53
     */
    const KEY_5: number;

    /**
     * @default 54
     */
    const KEY_6: number;

    /**
     * @default 55
     */
    const KEY_7: number;

    /**
     * @default 56
     */
    const KEY_8: number;

    /**
     * @default 57
     */
    const KEY_9: number;

    /**
     * @default 65
     */
    const KEY_A: number;

    /**
     * @default 198
     */
    const KEY_AE: number;

    /**
     * @default 193
     */
    const KEY_Aacute: number;

    /**
     * @default 16785056
     */
    const KEY_Abelowdot: number;

    /**
     * @default 451
     */
    const KEY_Abreve: number;

    /**
     * @default 16785070
     */
    const KEY_Abreveacute: number;

    /**
     * @default 16785078
     */
    const KEY_Abrevebelowdot: number;

    /**
     * @default 16785072
     */
    const KEY_Abrevegrave: number;

    /**
     * @default 16785074
     */
    const KEY_Abrevehook: number;

    /**
     * @default 16785076
     */
    const KEY_Abrevetilde: number;

    /**
     * @default 65136
     */
    const KEY_AccessX_Enable: number;

    /**
     * @default 65137
     */
    const KEY_AccessX_Feedback_Enable: number;

    /**
     * @default 194
     */
    const KEY_Acircumflex: number;

    /**
     * @default 16785060
     */
    const KEY_Acircumflexacute: number;

    /**
     * @default 16785068
     */
    const KEY_Acircumflexbelowdot: number;

    /**
     * @default 16785062
     */
    const KEY_Acircumflexgrave: number;

    /**
     * @default 16785064
     */
    const KEY_Acircumflexhook: number;

    /**
     * @default 16785066
     */
    const KEY_Acircumflextilde: number;

    /**
     * @default 269025081
     */
    const KEY_AddFavorite: number;

    /**
     * @default 196
     */
    const KEY_Adiaeresis: number;

    /**
     * @default 192
     */
    const KEY_Agrave: number;

    /**
     * @default 16785058
     */
    const KEY_Ahook: number;

    /**
     * @default 65513
     */
    const KEY_Alt_L: number;

    /**
     * @default 65514
     */
    const KEY_Alt_R: number;

    /**
     * @default 960
     */
    const KEY_Amacron: number;

    /**
     * @default 417
     */
    const KEY_Aogonek: number;

    /**
     * @default 269025104
     */
    const KEY_ApplicationLeft: number;

    /**
     * @default 269025105
     */
    const KEY_ApplicationRight: number;

    /**
     * @default 16778848
     */
    const KEY_Arabic_0: number;

    /**
     * @default 16778849
     */
    const KEY_Arabic_1: number;

    /**
     * @default 16778850
     */
    const KEY_Arabic_2: number;

    /**
     * @default 16778851
     */
    const KEY_Arabic_3: number;

    /**
     * @default 16778852
     */
    const KEY_Arabic_4: number;

    /**
     * @default 16778853
     */
    const KEY_Arabic_5: number;

    /**
     * @default 16778854
     */
    const KEY_Arabic_6: number;

    /**
     * @default 16778855
     */
    const KEY_Arabic_7: number;

    /**
     * @default 16778856
     */
    const KEY_Arabic_8: number;

    /**
     * @default 16778857
     */
    const KEY_Arabic_9: number;

    /**
     * @default 1497
     */
    const KEY_Arabic_ain: number;

    /**
     * @default 1479
     */
    const KEY_Arabic_alef: number;

    /**
     * @default 1513
     */
    const KEY_Arabic_alefmaksura: number;

    /**
     * @default 1480
     */
    const KEY_Arabic_beh: number;

    /**
     * @default 1452
     */
    const KEY_Arabic_comma: number;

    /**
     * @default 1494
     */
    const KEY_Arabic_dad: number;

    /**
     * @default 1487
     */
    const KEY_Arabic_dal: number;

    /**
     * @default 1519
     */
    const KEY_Arabic_damma: number;

    /**
     * @default 1516
     */
    const KEY_Arabic_dammatan: number;

    /**
     * @default 16778888
     */
    const KEY_Arabic_ddal: number;

    /**
     * @default 16778956
     */
    const KEY_Arabic_farsi_yeh: number;

    /**
     * @default 1518
     */
    const KEY_Arabic_fatha: number;

    /**
     * @default 1515
     */
    const KEY_Arabic_fathatan: number;

    /**
     * @default 1505
     */
    const KEY_Arabic_feh: number;

    /**
     * @default 16778964
     */
    const KEY_Arabic_fullstop: number;

    /**
     * @default 16778927
     */
    const KEY_Arabic_gaf: number;

    /**
     * @default 1498
     */
    const KEY_Arabic_ghain: number;

    /**
     * @default 1511
     */
    const KEY_Arabic_ha: number;

    /**
     * @default 1485
     */
    const KEY_Arabic_hah: number;

    /**
     * @default 1473
     */
    const KEY_Arabic_hamza: number;

    /**
     * @default 16778836
     */
    const KEY_Arabic_hamza_above: number;

    /**
     * @default 16778837
     */
    const KEY_Arabic_hamza_below: number;

    /**
     * @default 1475
     */
    const KEY_Arabic_hamzaonalef: number;

    /**
     * @default 1476
     */
    const KEY_Arabic_hamzaonwaw: number;

    /**
     * @default 1478
     */
    const KEY_Arabic_hamzaonyeh: number;

    /**
     * @default 1477
     */
    const KEY_Arabic_hamzaunderalef: number;

    /**
     * @default 1511
     */
    const KEY_Arabic_heh: number;

    /**
     * @default 16778942
     */
    const KEY_Arabic_heh_doachashmee: number;

    /**
     * @default 16778945
     */
    const KEY_Arabic_heh_goal: number;

    /**
     * @default 1484
     */
    const KEY_Arabic_jeem: number;

    /**
     * @default 16778904
     */
    const KEY_Arabic_jeh: number;

    /**
     * @default 1507
     */
    const KEY_Arabic_kaf: number;

    /**
     * @default 1520
     */
    const KEY_Arabic_kasra: number;

    /**
     * @default 1517
     */
    const KEY_Arabic_kasratan: number;

    /**
     * @default 16778921
     */
    const KEY_Arabic_keheh: number;

    /**
     * @default 1486
     */
    const KEY_Arabic_khah: number;

    /**
     * @default 1508
     */
    const KEY_Arabic_lam: number;

    /**
     * @default 16778835
     */
    const KEY_Arabic_madda_above: number;

    /**
     * @default 1474
     */
    const KEY_Arabic_maddaonalef: number;

    /**
     * @default 1509
     */
    const KEY_Arabic_meem: number;

    /**
     * @default 1510
     */
    const KEY_Arabic_noon: number;

    /**
     * @default 16778938
     */
    const KEY_Arabic_noon_ghunna: number;

    /**
     * @default 16778878
     */
    const KEY_Arabic_peh: number;

    /**
     * @default 16778858
     */
    const KEY_Arabic_percent: number;

    /**
     * @default 1506
     */
    const KEY_Arabic_qaf: number;

    /**
     * @default 1471
     */
    const KEY_Arabic_question_mark: number;

    /**
     * @default 1489
     */
    const KEY_Arabic_ra: number;

    /**
     * @default 16778897
     */
    const KEY_Arabic_rreh: number;

    /**
     * @default 1493
     */
    const KEY_Arabic_sad: number;

    /**
     * @default 1491
     */
    const KEY_Arabic_seen: number;

    /**
     * @default 1467
     */
    const KEY_Arabic_semicolon: number;

    /**
     * @default 1521
     */
    const KEY_Arabic_shadda: number;

    /**
     * @default 1492
     */
    const KEY_Arabic_sheen: number;

    /**
     * @default 1522
     */
    const KEY_Arabic_sukun: number;

    /**
     * @default 16778864
     */
    const KEY_Arabic_superscript_alef: number;

    /**
     * @default 65406
     */
    const KEY_Arabic_switch: number;

    /**
     * @default 1495
     */
    const KEY_Arabic_tah: number;

    /**
     * @default 1504
     */
    const KEY_Arabic_tatweel: number;

    /**
     * @default 16778886
     */
    const KEY_Arabic_tcheh: number;

    /**
     * @default 1482
     */
    const KEY_Arabic_teh: number;

    /**
     * @default 1481
     */
    const KEY_Arabic_tehmarbuta: number;

    /**
     * @default 1488
     */
    const KEY_Arabic_thal: number;

    /**
     * @default 1483
     */
    const KEY_Arabic_theh: number;

    /**
     * @default 16778873
     */
    const KEY_Arabic_tteh: number;

    /**
     * @default 16778916
     */
    const KEY_Arabic_veh: number;

    /**
     * @default 1512
     */
    const KEY_Arabic_waw: number;

    /**
     * @default 1514
     */
    const KEY_Arabic_yeh: number;

    /**
     * @default 16778962
     */
    const KEY_Arabic_yeh_baree: number;

    /**
     * @default 1496
     */
    const KEY_Arabic_zah: number;

    /**
     * @default 1490
     */
    const KEY_Arabic_zain: number;

    /**
     * @default 197
     */
    const KEY_Aring: number;

    /**
     * @default 16778552
     */
    const KEY_Armenian_AT: number;

    /**
     * @default 16778545
     */
    const KEY_Armenian_AYB: number;

    /**
     * @default 16778546
     */
    const KEY_Armenian_BEN: number;

    /**
     * @default 16778569
     */
    const KEY_Armenian_CHA: number;

    /**
     * @default 16778548
     */
    const KEY_Armenian_DA: number;

    /**
     * @default 16778561
     */
    const KEY_Armenian_DZA: number;

    /**
     * @default 16778551
     */
    const KEY_Armenian_E: number;

    /**
     * @default 16778582
     */
    const KEY_Armenian_FE: number;

    /**
     * @default 16778562
     */
    const KEY_Armenian_GHAT: number;

    /**
     * @default 16778547
     */
    const KEY_Armenian_GIM: number;

    /**
     * @default 16778565
     */
    const KEY_Armenian_HI: number;

    /**
     * @default 16778560
     */
    const KEY_Armenian_HO: number;

    /**
     * @default 16778555
     */
    const KEY_Armenian_INI: number;

    /**
     * @default 16778571
     */
    const KEY_Armenian_JE: number;

    /**
     * @default 16778580
     */
    const KEY_Armenian_KE: number;

    /**
     * @default 16778559
     */
    const KEY_Armenian_KEN: number;

    /**
     * @default 16778557
     */
    const KEY_Armenian_KHE: number;

    /**
     * @default 16778556
     */
    const KEY_Armenian_LYUN: number;

    /**
     * @default 16778564
     */
    const KEY_Armenian_MEN: number;

    /**
     * @default 16778566
     */
    const KEY_Armenian_NU: number;

    /**
     * @default 16778581
     */
    const KEY_Armenian_O: number;

    /**
     * @default 16778570
     */
    const KEY_Armenian_PE: number;

    /**
     * @default 16778579
     */
    const KEY_Armenian_PYUR: number;

    /**
     * @default 16778572
     */
    const KEY_Armenian_RA: number;

    /**
     * @default 16778576
     */
    const KEY_Armenian_RE: number;

    /**
     * @default 16778573
     */
    const KEY_Armenian_SE: number;

    /**
     * @default 16778567
     */
    const KEY_Armenian_SHA: number;

    /**
     * @default 16778563
     */
    const KEY_Armenian_TCHE: number;

    /**
     * @default 16778553
     */
    const KEY_Armenian_TO: number;

    /**
     * @default 16778558
     */
    const KEY_Armenian_TSA: number;

    /**
     * @default 16778577
     */
    const KEY_Armenian_TSO: number;

    /**
     * @default 16778575
     */
    const KEY_Armenian_TYUN: number;

    /**
     * @default 16778574
     */
    const KEY_Armenian_VEV: number;

    /**
     * @default 16778568
     */
    const KEY_Armenian_VO: number;

    /**
     * @default 16778578
     */
    const KEY_Armenian_VYUN: number;

    /**
     * @default 16778549
     */
    const KEY_Armenian_YECH: number;

    /**
     * @default 16778550
     */
    const KEY_Armenian_ZA: number;

    /**
     * @default 16778554
     */
    const KEY_Armenian_ZHE: number;

    /**
     * @default 16778587
     */
    const KEY_Armenian_accent: number;

    /**
     * @default 16778588
     */
    const KEY_Armenian_amanak: number;

    /**
     * @default 16778586
     */
    const KEY_Armenian_apostrophe: number;

    /**
     * @default 16778600
     */
    const KEY_Armenian_at: number;

    /**
     * @default 16778593
     */
    const KEY_Armenian_ayb: number;

    /**
     * @default 16778594
     */
    const KEY_Armenian_ben: number;

    /**
     * @default 16778589
     */
    const KEY_Armenian_but: number;

    /**
     * @default 16778617
     */
    const KEY_Armenian_cha: number;

    /**
     * @default 16778596
     */
    const KEY_Armenian_da: number;

    /**
     * @default 16778609
     */
    const KEY_Armenian_dza: number;

    /**
     * @default 16778599
     */
    const KEY_Armenian_e: number;

    /**
     * @default 16778588
     */
    const KEY_Armenian_exclam: number;

    /**
     * @default 16778630
     */
    const KEY_Armenian_fe: number;

    /**
     * @default 16778633
     */
    const KEY_Armenian_full_stop: number;

    /**
     * @default 16778610
     */
    const KEY_Armenian_ghat: number;

    /**
     * @default 16778595
     */
    const KEY_Armenian_gim: number;

    /**
     * @default 16778613
     */
    const KEY_Armenian_hi: number;

    /**
     * @default 16778608
     */
    const KEY_Armenian_ho: number;

    /**
     * @default 16778634
     */
    const KEY_Armenian_hyphen: number;

    /**
     * @default 16778603
     */
    const KEY_Armenian_ini: number;

    /**
     * @default 16778619
     */
    const KEY_Armenian_je: number;

    /**
     * @default 16778628
     */
    const KEY_Armenian_ke: number;

    /**
     * @default 16778607
     */
    const KEY_Armenian_ken: number;

    /**
     * @default 16778605
     */
    const KEY_Armenian_khe: number;

    /**
     * @default 16778631
     */
    const KEY_Armenian_ligature_ew: number;

    /**
     * @default 16778604
     */
    const KEY_Armenian_lyun: number;

    /**
     * @default 16778612
     */
    const KEY_Armenian_men: number;

    /**
     * @default 16778614
     */
    const KEY_Armenian_nu: number;

    /**
     * @default 16778629
     */
    const KEY_Armenian_o: number;

    /**
     * @default 16778590
     */
    const KEY_Armenian_paruyk: number;

    /**
     * @default 16778618
     */
    const KEY_Armenian_pe: number;

    /**
     * @default 16778627
     */
    const KEY_Armenian_pyur: number;

    /**
     * @default 16778590
     */
    const KEY_Armenian_question: number;

    /**
     * @default 16778620
     */
    const KEY_Armenian_ra: number;

    /**
     * @default 16778624
     */
    const KEY_Armenian_re: number;

    /**
     * @default 16778621
     */
    const KEY_Armenian_se: number;

    /**
     * @default 16778589
     */
    const KEY_Armenian_separation_mark: number;

    /**
     * @default 16778615
     */
    const KEY_Armenian_sha: number;

    /**
     * @default 16778587
     */
    const KEY_Armenian_shesht: number;

    /**
     * @default 16778611
     */
    const KEY_Armenian_tche: number;

    /**
     * @default 16778601
     */
    const KEY_Armenian_to: number;

    /**
     * @default 16778606
     */
    const KEY_Armenian_tsa: number;

    /**
     * @default 16778625
     */
    const KEY_Armenian_tso: number;

    /**
     * @default 16778623
     */
    const KEY_Armenian_tyun: number;

    /**
     * @default 16778633
     */
    const KEY_Armenian_verjaket: number;

    /**
     * @default 16778622
     */
    const KEY_Armenian_vev: number;

    /**
     * @default 16778616
     */
    const KEY_Armenian_vo: number;

    /**
     * @default 16778626
     */
    const KEY_Armenian_vyun: number;

    /**
     * @default 16778597
     */
    const KEY_Armenian_yech: number;

    /**
     * @default 16778634
     */
    const KEY_Armenian_yentamna: number;

    /**
     * @default 16778598
     */
    const KEY_Armenian_za: number;

    /**
     * @default 16778602
     */
    const KEY_Armenian_zhe: number;

    /**
     * @default 195
     */
    const KEY_Atilde: number;

    /**
     * @default 65146
     */
    const KEY_AudibleBell_Enable: number;

    /**
     * @default 269025179
     */
    const KEY_AudioCycleTrack: number;

    /**
     * @default 269025175
     */
    const KEY_AudioForward: number;

    /**
     * @default 269025041
     */
    const KEY_AudioLowerVolume: number;

    /**
     * @default 269025074
     */
    const KEY_AudioMedia: number;

    /**
     * @default 269025042
     */
    const KEY_AudioMute: number;

    /**
     * @default 269025047
     */
    const KEY_AudioNext: number;

    /**
     * @default 269025073
     */
    const KEY_AudioPause: number;

    /**
     * @default 269025044
     */
    const KEY_AudioPlay: number;

    /**
     * @default 269025046
     */
    const KEY_AudioPrev: number;

    /**
     * @default 269025043
     */
    const KEY_AudioRaiseVolume: number;

    /**
     * @default 269025177
     */
    const KEY_AudioRandomPlay: number;

    /**
     * @default 269025052
     */
    const KEY_AudioRecord: number;

    /**
     * @default 269025176
     */
    const KEY_AudioRepeat: number;

    /**
     * @default 269025086
     */
    const KEY_AudioRewind: number;

    /**
     * @default 269025045
     */
    const KEY_AudioStop: number;

    /**
     * @default 269025165
     */
    const KEY_Away: number;

    /**
     * @default 66
     */
    const KEY_B: number;

    /**
     * @default 16784898
     */
    const KEY_Babovedot: number;

    /**
     * @default 269025062
     */
    const KEY_Back: number;

    /**
     * @default 269025087
     */
    const KEY_BackForward: number;

    /**
     * @default 65288
     */
    const KEY_BackSpace: number;

    /**
     * @default 269025171
     */
    const KEY_Battery: number;

    /**
     * @default 65368
     */
    const KEY_Begin: number;

    /**
     * @default 269025190
     */
    const KEY_Blue: number;

    /**
     * @default 269025172
     */
    const KEY_Bluetooth: number;

    /**
     * @default 269025106
     */
    const KEY_Book: number;

    /**
     * @default 65140
     */
    const KEY_BounceKeys_Enable: number;

    /**
     * @default 65387
     */
    const KEY_Break: number;

    /**
     * @default 269025083
     */
    const KEY_BrightnessAdjust: number;

    /**
     * @default 1726
     */
    const KEY_Byelorussian_SHORTU: number;

    /**
     * @default 1710
     */
    const KEY_Byelorussian_shortu: number;

    /**
     * @default 67
     */
    const KEY_C: number;

    /**
     * @default 269025107
     */
    const KEY_CD: number;

    /**
     * @default 709
     */
    const KEY_Cabovedot: number;

    /**
     * @default 454
     */
    const KEY_Cacute: number;

    /**
     * @default 269025053
     */
    const KEY_Calculator: number;

    /**
     * @default 269025056
     */
    const KEY_Calendar: number;

    /**
     * @default 65385
     */
    const KEY_Cancel: number;

    /**
     * @default 65509
     */
    const KEY_Caps_Lock: number;

    /**
     * @default 456
     */
    const KEY_Ccaron: number;

    /**
     * @default 199
     */
    const KEY_Ccedilla: number;

    /**
     * @default 710
     */
    const KEY_Ccircumflex: number;

    /**
     * @default 65291
     */
    const KEY_Clear: number;

    /**
     * @default 269024801
     */
    const KEY_ClearGrab: number;

    /**
     * @default 269025110
     */
    const KEY_Close: number;

    /**
     * @default 65335
     */
    const KEY_Codeinput: number;

    /**
     * @default 16785569
     */
    const KEY_ColonSign: number;

    /**
     * @default 269025085
     */
    const KEY_Community: number;

    /**
     * @default 269025058
     */
    const KEY_ContrastAdjust: number;

    /**
     * @default 65507
     */
    const KEY_Control_L: number;

    /**
     * @default 65508
     */
    const KEY_Control_R: number;

    /**
     * @default 269025111
     */
    const KEY_Copy: number;

    /**
     * @default 16785570
     */
    const KEY_CruzeiroSign: number;

    /**
     * @default 269025112
     */
    const KEY_Cut: number;

    /**
     * @default 269025180
     */
    const KEY_CycleAngle: number;

    /**
     * @default 1761
     */
    const KEY_Cyrillic_A: number;

    /**
     * @default 1762
     */
    const KEY_Cyrillic_BE: number;

    /**
     * @default 1790
     */
    const KEY_Cyrillic_CHE: number;

    /**
     * @default 16778422
     */
    const KEY_Cyrillic_CHE_descender: number;

    /**
     * @default 16778424
     */
    const KEY_Cyrillic_CHE_vertstroke: number;

    /**
     * @default 1764
     */
    const KEY_Cyrillic_DE: number;

    /**
     * @default 1727
     */
    const KEY_Cyrillic_DZHE: number;

    /**
     * @default 1788
     */
    const KEY_Cyrillic_E: number;

    /**
     * @default 1766
     */
    const KEY_Cyrillic_EF: number;

    /**
     * @default 1772
     */
    const KEY_Cyrillic_EL: number;

    /**
     * @default 1773
     */
    const KEY_Cyrillic_EM: number;

    /**
     * @default 1774
     */
    const KEY_Cyrillic_EN: number;

    /**
     * @default 16778402
     */
    const KEY_Cyrillic_EN_descender: number;

    /**
     * @default 1778
     */
    const KEY_Cyrillic_ER: number;

    /**
     * @default 1779
     */
    const KEY_Cyrillic_ES: number;

    /**
     * @default 1767
     */
    const KEY_Cyrillic_GHE: number;

    /**
     * @default 16778386
     */
    const KEY_Cyrillic_GHE_bar: number;

    /**
     * @default 1768
     */
    const KEY_Cyrillic_HA: number;

    /**
     * @default 1791
     */
    const KEY_Cyrillic_HARDSIGN: number;

    /**
     * @default 16778418
     */
    const KEY_Cyrillic_HA_descender: number;

    /**
     * @default 1769
     */
    const KEY_Cyrillic_I: number;

    /**
     * @default 1765
     */
    const KEY_Cyrillic_IE: number;

    /**
     * @default 1715
     */
    const KEY_Cyrillic_IO: number;

    /**
     * @default 16778466
     */
    const KEY_Cyrillic_I_macron: number;

    /**
     * @default 1720
     */
    const KEY_Cyrillic_JE: number;

    /**
     * @default 1771
     */
    const KEY_Cyrillic_KA: number;

    /**
     * @default 16778394
     */
    const KEY_Cyrillic_KA_descender: number;

    /**
     * @default 16778396
     */
    const KEY_Cyrillic_KA_vertstroke: number;

    /**
     * @default 1721
     */
    const KEY_Cyrillic_LJE: number;

    /**
     * @default 1722
     */
    const KEY_Cyrillic_NJE: number;

    /**
     * @default 1775
     */
    const KEY_Cyrillic_O: number;

    /**
     * @default 16778472
     */
    const KEY_Cyrillic_O_bar: number;

    /**
     * @default 1776
     */
    const KEY_Cyrillic_PE: number;

    /**
     * @default 16778456
     */
    const KEY_Cyrillic_SCHWA: number;

    /**
     * @default 1787
     */
    const KEY_Cyrillic_SHA: number;

    /**
     * @default 1789
     */
    const KEY_Cyrillic_SHCHA: number;

    /**
     * @default 16778426
     */
    const KEY_Cyrillic_SHHA: number;

    /**
     * @default 1770
     */
    const KEY_Cyrillic_SHORTI: number;

    /**
     * @default 1784
     */
    const KEY_Cyrillic_SOFTSIGN: number;

    /**
     * @default 1780
     */
    const KEY_Cyrillic_TE: number;

    /**
     * @default 1763
     */
    const KEY_Cyrillic_TSE: number;

    /**
     * @default 1781
     */
    const KEY_Cyrillic_U: number;

    /**
     * @default 16778478
     */
    const KEY_Cyrillic_U_macron: number;

    /**
     * @default 16778414
     */
    const KEY_Cyrillic_U_straight: number;

    /**
     * @default 16778416
     */
    const KEY_Cyrillic_U_straight_bar: number;

    /**
     * @default 1783
     */
    const KEY_Cyrillic_VE: number;

    /**
     * @default 1777
     */
    const KEY_Cyrillic_YA: number;

    /**
     * @default 1785
     */
    const KEY_Cyrillic_YERU: number;

    /**
     * @default 1760
     */
    const KEY_Cyrillic_YU: number;

    /**
     * @default 1786
     */
    const KEY_Cyrillic_ZE: number;

    /**
     * @default 1782
     */
    const KEY_Cyrillic_ZHE: number;

    /**
     * @default 16778390
     */
    const KEY_Cyrillic_ZHE_descender: number;

    /**
     * @default 1729
     */
    const KEY_Cyrillic_a: number;

    /**
     * @default 1730
     */
    const KEY_Cyrillic_be: number;

    /**
     * @default 1758
     */
    const KEY_Cyrillic_che: number;

    /**
     * @default 16778423
     */
    const KEY_Cyrillic_che_descender: number;

    /**
     * @default 16778425
     */
    const KEY_Cyrillic_che_vertstroke: number;

    /**
     * @default 1732
     */
    const KEY_Cyrillic_de: number;

    /**
     * @default 1711
     */
    const KEY_Cyrillic_dzhe: number;

    /**
     * @default 1756
     */
    const KEY_Cyrillic_e: number;

    /**
     * @default 1734
     */
    const KEY_Cyrillic_ef: number;

    /**
     * @default 1740
     */
    const KEY_Cyrillic_el: number;

    /**
     * @default 1741
     */
    const KEY_Cyrillic_em: number;

    /**
     * @default 1742
     */
    const KEY_Cyrillic_en: number;

    /**
     * @default 16778403
     */
    const KEY_Cyrillic_en_descender: number;

    /**
     * @default 1746
     */
    const KEY_Cyrillic_er: number;

    /**
     * @default 1747
     */
    const KEY_Cyrillic_es: number;

    /**
     * @default 1735
     */
    const KEY_Cyrillic_ghe: number;

    /**
     * @default 16778387
     */
    const KEY_Cyrillic_ghe_bar: number;

    /**
     * @default 1736
     */
    const KEY_Cyrillic_ha: number;

    /**
     * @default 16778419
     */
    const KEY_Cyrillic_ha_descender: number;

    /**
     * @default 1759
     */
    const KEY_Cyrillic_hardsign: number;

    /**
     * @default 1737
     */
    const KEY_Cyrillic_i: number;

    /**
     * @default 16778467
     */
    const KEY_Cyrillic_i_macron: number;

    /**
     * @default 1733
     */
    const KEY_Cyrillic_ie: number;

    /**
     * @default 1699
     */
    const KEY_Cyrillic_io: number;

    /**
     * @default 1704
     */
    const KEY_Cyrillic_je: number;

    /**
     * @default 1739
     */
    const KEY_Cyrillic_ka: number;

    /**
     * @default 16778395
     */
    const KEY_Cyrillic_ka_descender: number;

    /**
     * @default 16778397
     */
    const KEY_Cyrillic_ka_vertstroke: number;

    /**
     * @default 1705
     */
    const KEY_Cyrillic_lje: number;

    /**
     * @default 1706
     */
    const KEY_Cyrillic_nje: number;

    /**
     * @default 1743
     */
    const KEY_Cyrillic_o: number;

    /**
     * @default 16778473
     */
    const KEY_Cyrillic_o_bar: number;

    /**
     * @default 1744
     */
    const KEY_Cyrillic_pe: number;

    /**
     * @default 16778457
     */
    const KEY_Cyrillic_schwa: number;

    /**
     * @default 1755
     */
    const KEY_Cyrillic_sha: number;

    /**
     * @default 1757
     */
    const KEY_Cyrillic_shcha: number;

    /**
     * @default 16778427
     */
    const KEY_Cyrillic_shha: number;

    /**
     * @default 1738
     */
    const KEY_Cyrillic_shorti: number;

    /**
     * @default 1752
     */
    const KEY_Cyrillic_softsign: number;

    /**
     * @default 1748
     */
    const KEY_Cyrillic_te: number;

    /**
     * @default 1731
     */
    const KEY_Cyrillic_tse: number;

    /**
     * @default 1749
     */
    const KEY_Cyrillic_u: number;

    /**
     * @default 16778479
     */
    const KEY_Cyrillic_u_macron: number;

    /**
     * @default 16778415
     */
    const KEY_Cyrillic_u_straight: number;

    /**
     * @default 16778417
     */
    const KEY_Cyrillic_u_straight_bar: number;

    /**
     * @default 1751
     */
    const KEY_Cyrillic_ve: number;

    /**
     * @default 1745
     */
    const KEY_Cyrillic_ya: number;

    /**
     * @default 1753
     */
    const KEY_Cyrillic_yeru: number;

    /**
     * @default 1728
     */
    const KEY_Cyrillic_yu: number;

    /**
     * @default 1754
     */
    const KEY_Cyrillic_ze: number;

    /**
     * @default 1750
     */
    const KEY_Cyrillic_zhe: number;

    /**
     * @default 16778391
     */
    const KEY_Cyrillic_zhe_descender: number;

    /**
     * @default 68
     */
    const KEY_D: number;

    /**
     * @default 269025114
     */
    const KEY_DOS: number;

    /**
     * @default 16784906
     */
    const KEY_Dabovedot: number;

    /**
     * @default 463
     */
    const KEY_Dcaron: number;

    /**
     * @default 65535
     */
    const KEY_Delete: number;

    /**
     * @default 269025113
     */
    const KEY_Display: number;

    /**
     * @default 269025115
     */
    const KEY_Documents: number;

    /**
     * @default 16785579
     */
    const KEY_DongSign: number;

    /**
     * @default 65364
     */
    const KEY_Down: number;

    /**
     * @default 464
     */
    const KEY_Dstroke: number;

    /**
     * @default 69
     */
    const KEY_E: number;

    /**
     * @default 957
     */
    const KEY_ENG: number;

    /**
     * @default 208
     */
    const KEY_ETH: number;

    /**
     * @default 972
     */
    const KEY_Eabovedot: number;

    /**
     * @default 201
     */
    const KEY_Eacute: number;

    /**
     * @default 16785080
     */
    const KEY_Ebelowdot: number;

    /**
     * @default 460
     */
    const KEY_Ecaron: number;

    /**
     * @default 202
     */
    const KEY_Ecircumflex: number;

    /**
     * @default 16785086
     */
    const KEY_Ecircumflexacute: number;

    /**
     * @default 16785094
     */
    const KEY_Ecircumflexbelowdot: number;

    /**
     * @default 16785088
     */
    const KEY_Ecircumflexgrave: number;

    /**
     * @default 16785090
     */
    const KEY_Ecircumflexhook: number;

    /**
     * @default 16785092
     */
    const KEY_Ecircumflextilde: number;

    /**
     * @default 16785568
     */
    const KEY_EcuSign: number;

    /**
     * @default 203
     */
    const KEY_Ediaeresis: number;

    /**
     * @default 200
     */
    const KEY_Egrave: number;

    /**
     * @default 16785082
     */
    const KEY_Ehook: number;

    /**
     * @default 65327
     */
    const KEY_Eisu_Shift: number;

    /**
     * @default 65328
     */
    const KEY_Eisu_toggle: number;

    /**
     * @default 269025068
     */
    const KEY_Eject: number;

    /**
     * @default 938
     */
    const KEY_Emacron: number;

    /**
     * @default 65367
     */
    const KEY_End: number;

    /**
     * @default 458
     */
    const KEY_Eogonek: number;

    /**
     * @default 65307
     */
    const KEY_Escape: number;

    /**
     * @default 208
     */
    const KEY_Eth: number;

    /**
     * @default 16785084
     */
    const KEY_Etilde: number;

    /**
     * @default 8364
     */
    const KEY_EuroSign: number;

    /**
     * @default 269025116
     */
    const KEY_Excel: number;

    /**
     * @default 65378
     */
    const KEY_Execute: number;

    /**
     * @default 269025117
     */
    const KEY_Explorer: number;

    /**
     * @default 70
     */
    const KEY_F: number;

    /**
     * @default 65470
     */
    const KEY_F1: number;

    /**
     * @default 65479
     */
    const KEY_F10: number;

    /**
     * @default 65480
     */
    const KEY_F11: number;

    /**
     * @default 65481
     */
    const KEY_F12: number;

    /**
     * @default 65482
     */
    const KEY_F13: number;

    /**
     * @default 65483
     */
    const KEY_F14: number;

    /**
     * @default 65484
     */
    const KEY_F15: number;

    /**
     * @default 65485
     */
    const KEY_F16: number;

    /**
     * @default 65486
     */
    const KEY_F17: number;

    /**
     * @default 65487
     */
    const KEY_F18: number;

    /**
     * @default 65488
     */
    const KEY_F19: number;

    /**
     * @default 65471
     */
    const KEY_F2: number;

    /**
     * @default 65489
     */
    const KEY_F20: number;

    /**
     * @default 65490
     */
    const KEY_F21: number;

    /**
     * @default 65491
     */
    const KEY_F22: number;

    /**
     * @default 65492
     */
    const KEY_F23: number;

    /**
     * @default 65493
     */
    const KEY_F24: number;

    /**
     * @default 65494
     */
    const KEY_F25: number;

    /**
     * @default 65495
     */
    const KEY_F26: number;

    /**
     * @default 65496
     */
    const KEY_F27: number;

    /**
     * @default 65497
     */
    const KEY_F28: number;

    /**
     * @default 65498
     */
    const KEY_F29: number;

    /**
     * @default 65472
     */
    const KEY_F3: number;

    /**
     * @default 65499
     */
    const KEY_F30: number;

    /**
     * @default 65500
     */
    const KEY_F31: number;

    /**
     * @default 65501
     */
    const KEY_F32: number;

    /**
     * @default 65502
     */
    const KEY_F33: number;

    /**
     * @default 65503
     */
    const KEY_F34: number;

    /**
     * @default 65504
     */
    const KEY_F35: number;

    /**
     * @default 65473
     */
    const KEY_F4: number;

    /**
     * @default 65474
     */
    const KEY_F5: number;

    /**
     * @default 65475
     */
    const KEY_F6: number;

    /**
     * @default 65476
     */
    const KEY_F7: number;

    /**
     * @default 65477
     */
    const KEY_F8: number;

    /**
     * @default 65478
     */
    const KEY_F9: number;

    /**
     * @default 16785571
     */
    const KEY_FFrancSign: number;

    /**
     * @default 16784926
     */
    const KEY_Fabovedot: number;

    /**
     * @default 16778992
     */
    const KEY_Farsi_0: number;

    /**
     * @default 16778993
     */
    const KEY_Farsi_1: number;

    /**
     * @default 16778994
     */
    const KEY_Farsi_2: number;

    /**
     * @default 16778995
     */
    const KEY_Farsi_3: number;

    /**
     * @default 16778996
     */
    const KEY_Farsi_4: number;

    /**
     * @default 16778997
     */
    const KEY_Farsi_5: number;

    /**
     * @default 16778998
     */
    const KEY_Farsi_6: number;

    /**
     * @default 16778999
     */
    const KEY_Farsi_7: number;

    /**
     * @default 16779000
     */
    const KEY_Farsi_8: number;

    /**
     * @default 16779001
     */
    const KEY_Farsi_9: number;

    /**
     * @default 16778956
     */
    const KEY_Farsi_yeh: number;

    /**
     * @default 269025072
     */
    const KEY_Favorites: number;

    /**
     * @default 269025084
     */
    const KEY_Finance: number;

    /**
     * @default 65384
     */
    const KEY_Find: number;

    /**
     * @default 65232
     */
    const KEY_First_Virtual_Screen: number;

    /**
     * @default 269025063
     */
    const KEY_Forward: number;

    /**
     * @default 269025181
     */
    const KEY_FrameBack: number;

    /**
     * @default 269025182
     */
    const KEY_FrameForward: number;

    /**
     * @default 71
     */
    const KEY_G: number;

    /**
     * @default 725
     */
    const KEY_Gabovedot: number;

    /**
     * @default 269025118
     */
    const KEY_Game: number;

    /**
     * @default 683
     */
    const KEY_Gbreve: number;

    /**
     * @default 16777702
     */
    const KEY_Gcaron: number;

    /**
     * @default 939
     */
    const KEY_Gcedilla: number;

    /**
     * @default 728
     */
    const KEY_Gcircumflex: number;

    /**
     * @default 16781520
     */
    const KEY_Georgian_an: number;

    /**
     * @default 16781521
     */
    const KEY_Georgian_ban: number;

    /**
     * @default 16781546
     */
    const KEY_Georgian_can: number;

    /**
     * @default 16781549
     */
    const KEY_Georgian_char: number;

    /**
     * @default 16781545
     */
    const KEY_Georgian_chin: number;

    /**
     * @default 16781548
     */
    const KEY_Georgian_cil: number;

    /**
     * @default 16781523
     */
    const KEY_Georgian_don: number;

    /**
     * @default 16781524
     */
    const KEY_Georgian_en: number;

    /**
     * @default 16781558
     */
    const KEY_Georgian_fi: number;

    /**
     * @default 16781522
     */
    const KEY_Georgian_gan: number;

    /**
     * @default 16781542
     */
    const KEY_Georgian_ghan: number;

    /**
     * @default 16781552
     */
    const KEY_Georgian_hae: number;

    /**
     * @default 16781556
     */
    const KEY_Georgian_har: number;

    /**
     * @default 16781553
     */
    const KEY_Georgian_he: number;

    /**
     * @default 16781554
     */
    const KEY_Georgian_hie: number;

    /**
     * @default 16781557
     */
    const KEY_Georgian_hoe: number;

    /**
     * @default 16781528
     */
    const KEY_Georgian_in: number;

    /**
     * @default 16781551
     */
    const KEY_Georgian_jhan: number;

    /**
     * @default 16781547
     */
    const KEY_Georgian_jil: number;

    /**
     * @default 16781529
     */
    const KEY_Georgian_kan: number;

    /**
     * @default 16781541
     */
    const KEY_Georgian_khar: number;

    /**
     * @default 16781530
     */
    const KEY_Georgian_las: number;

    /**
     * @default 16781531
     */
    const KEY_Georgian_man: number;

    /**
     * @default 16781532
     */
    const KEY_Georgian_nar: number;

    /**
     * @default 16781533
     */
    const KEY_Georgian_on: number;

    /**
     * @default 16781534
     */
    const KEY_Georgian_par: number;

    /**
     * @default 16781540
     */
    const KEY_Georgian_phar: number;

    /**
     * @default 16781543
     */
    const KEY_Georgian_qar: number;

    /**
     * @default 16781536
     */
    const KEY_Georgian_rae: number;

    /**
     * @default 16781537
     */
    const KEY_Georgian_san: number;

    /**
     * @default 16781544
     */
    const KEY_Georgian_shin: number;

    /**
     * @default 16781527
     */
    const KEY_Georgian_tan: number;

    /**
     * @default 16781538
     */
    const KEY_Georgian_tar: number;

    /**
     * @default 16781539
     */
    const KEY_Georgian_un: number;

    /**
     * @default 16781525
     */
    const KEY_Georgian_vin: number;

    /**
     * @default 16781555
     */
    const KEY_Georgian_we: number;

    /**
     * @default 16781550
     */
    const KEY_Georgian_xan: number;

    /**
     * @default 16781526
     */
    const KEY_Georgian_zen: number;

    /**
     * @default 16781535
     */
    const KEY_Georgian_zhar: number;

    /**
     * @default 269025119
     */
    const KEY_Go: number;

    /**
     * @default 1985
     */
    const KEY_Greek_ALPHA: number;

    /**
     * @default 1953
     */
    const KEY_Greek_ALPHAaccent: number;

    /**
     * @default 1986
     */
    const KEY_Greek_BETA: number;

    /**
     * @default 2007
     */
    const KEY_Greek_CHI: number;

    /**
     * @default 1988
     */
    const KEY_Greek_DELTA: number;

    /**
     * @default 1989
     */
    const KEY_Greek_EPSILON: number;

    /**
     * @default 1954
     */
    const KEY_Greek_EPSILONaccent: number;

    /**
     * @default 1991
     */
    const KEY_Greek_ETA: number;

    /**
     * @default 1955
     */
    const KEY_Greek_ETAaccent: number;

    /**
     * @default 1987
     */
    const KEY_Greek_GAMMA: number;

    /**
     * @default 1993
     */
    const KEY_Greek_IOTA: number;

    /**
     * @default 1956
     */
    const KEY_Greek_IOTAaccent: number;

    /**
     * @default 1957
     */
    const KEY_Greek_IOTAdiaeresis: number;

    /**
     * @default 1957
     */
    const KEY_Greek_IOTAdieresis: number;

    /**
     * @default 1994
     */
    const KEY_Greek_KAPPA: number;

    /**
     * @default 1995
     */
    const KEY_Greek_LAMBDA: number;

    /**
     * @default 1995
     */
    const KEY_Greek_LAMDA: number;

    /**
     * @default 1996
     */
    const KEY_Greek_MU: number;

    /**
     * @default 1997
     */
    const KEY_Greek_NU: number;

    /**
     * @default 2009
     */
    const KEY_Greek_OMEGA: number;

    /**
     * @default 1963
     */
    const KEY_Greek_OMEGAaccent: number;

    /**
     * @default 1999
     */
    const KEY_Greek_OMICRON: number;

    /**
     * @default 1959
     */
    const KEY_Greek_OMICRONaccent: number;

    /**
     * @default 2006
     */
    const KEY_Greek_PHI: number;

    /**
     * @default 2000
     */
    const KEY_Greek_PI: number;

    /**
     * @default 2008
     */
    const KEY_Greek_PSI: number;

    /**
     * @default 2001
     */
    const KEY_Greek_RHO: number;

    /**
     * @default 2002
     */
    const KEY_Greek_SIGMA: number;

    /**
     * @default 2004
     */
    const KEY_Greek_TAU: number;

    /**
     * @default 1992
     */
    const KEY_Greek_THETA: number;

    /**
     * @default 2005
     */
    const KEY_Greek_UPSILON: number;

    /**
     * @default 1960
     */
    const KEY_Greek_UPSILONaccent: number;

    /**
     * @default 1961
     */
    const KEY_Greek_UPSILONdieresis: number;

    /**
     * @default 1998
     */
    const KEY_Greek_XI: number;

    /**
     * @default 1990
     */
    const KEY_Greek_ZETA: number;

    /**
     * @default 1966
     */
    const KEY_Greek_accentdieresis: number;

    /**
     * @default 2017
     */
    const KEY_Greek_alpha: number;

    /**
     * @default 1969
     */
    const KEY_Greek_alphaaccent: number;

    /**
     * @default 2018
     */
    const KEY_Greek_beta: number;

    /**
     * @default 2039
     */
    const KEY_Greek_chi: number;

    /**
     * @default 2020
     */
    const KEY_Greek_delta: number;

    /**
     * @default 2021
     */
    const KEY_Greek_epsilon: number;

    /**
     * @default 1970
     */
    const KEY_Greek_epsilonaccent: number;

    /**
     * @default 2023
     */
    const KEY_Greek_eta: number;

    /**
     * @default 1971
     */
    const KEY_Greek_etaaccent: number;

    /**
     * @default 2035
     */
    const KEY_Greek_finalsmallsigma: number;

    /**
     * @default 2019
     */
    const KEY_Greek_gamma: number;

    /**
     * @default 1967
     */
    const KEY_Greek_horizbar: number;

    /**
     * @default 2025
     */
    const KEY_Greek_iota: number;

    /**
     * @default 1972
     */
    const KEY_Greek_iotaaccent: number;

    /**
     * @default 1974
     */
    const KEY_Greek_iotaaccentdieresis: number;

    /**
     * @default 1973
     */
    const KEY_Greek_iotadieresis: number;

    /**
     * @default 2026
     */
    const KEY_Greek_kappa: number;

    /**
     * @default 2027
     */
    const KEY_Greek_lambda: number;

    /**
     * @default 2027
     */
    const KEY_Greek_lamda: number;

    /**
     * @default 2028
     */
    const KEY_Greek_mu: number;

    /**
     * @default 2029
     */
    const KEY_Greek_nu: number;

    /**
     * @default 2041
     */
    const KEY_Greek_omega: number;

    /**
     * @default 1979
     */
    const KEY_Greek_omegaaccent: number;

    /**
     * @default 2031
     */
    const KEY_Greek_omicron: number;

    /**
     * @default 1975
     */
    const KEY_Greek_omicronaccent: number;

    /**
     * @default 2038
     */
    const KEY_Greek_phi: number;

    /**
     * @default 2032
     */
    const KEY_Greek_pi: number;

    /**
     * @default 2040
     */
    const KEY_Greek_psi: number;

    /**
     * @default 2033
     */
    const KEY_Greek_rho: number;

    /**
     * @default 2034
     */
    const KEY_Greek_sigma: number;

    /**
     * @default 65406
     */
    const KEY_Greek_switch: number;

    /**
     * @default 2036
     */
    const KEY_Greek_tau: number;

    /**
     * @default 2024
     */
    const KEY_Greek_theta: number;

    /**
     * @default 2037
     */
    const KEY_Greek_upsilon: number;

    /**
     * @default 1976
     */
    const KEY_Greek_upsilonaccent: number;

    /**
     * @default 1978
     */
    const KEY_Greek_upsilonaccentdieresis: number;

    /**
     * @default 1977
     */
    const KEY_Greek_upsilondieresis: number;

    /**
     * @default 2030
     */
    const KEY_Greek_xi: number;

    /**
     * @default 2022
     */
    const KEY_Greek_zeta: number;

    /**
     * @default 269025188
     */
    const KEY_Green: number;

    /**
     * @default 72
     */
    const KEY_H: number;

    /**
     * @default 65329
     */
    const KEY_Hangul: number;

    /**
     * @default 3775
     */
    const KEY_Hangul_A: number;

    /**
     * @default 3776
     */
    const KEY_Hangul_AE: number;

    /**
     * @default 3830
     */
    const KEY_Hangul_AraeA: number;

    /**
     * @default 3831
     */
    const KEY_Hangul_AraeAE: number;

    /**
     * @default 65337
     */
    const KEY_Hangul_Banja: number;

    /**
     * @default 3770
     */
    const KEY_Hangul_Cieuc: number;

    /**
     * @default 65335
     */
    const KEY_Hangul_Codeinput: number;

    /**
     * @default 3751
     */
    const KEY_Hangul_Dikeud: number;

    /**
     * @default 3780
     */
    const KEY_Hangul_E: number;

    /**
     * @default 3779
     */
    const KEY_Hangul_EO: number;

    /**
     * @default 3793
     */
    const KEY_Hangul_EU: number;

    /**
     * @default 65331
     */
    const KEY_Hangul_End: number;

    /**
     * @default 65332
     */
    const KEY_Hangul_Hanja: number;

    /**
     * @default 3774
     */
    const KEY_Hangul_Hieuh: number;

    /**
     * @default 3795
     */
    const KEY_Hangul_I: number;

    /**
     * @default 3767
     */
    const KEY_Hangul_Ieung: number;

    /**
     * @default 3818
     */
    const KEY_Hangul_J_Cieuc: number;

    /**
     * @default 3802
     */
    const KEY_Hangul_J_Dikeud: number;

    /**
     * @default 3822
     */
    const KEY_Hangul_J_Hieuh: number;

    /**
     * @default 3816
     */
    const KEY_Hangul_J_Ieung: number;

    /**
     * @default 3817
     */
    const KEY_Hangul_J_Jieuj: number;

    /**
     * @default 3819
     */
    const KEY_Hangul_J_Khieuq: number;

    /**
     * @default 3796
     */
    const KEY_Hangul_J_Kiyeog: number;

    /**
     * @default 3798
     */
    const KEY_Hangul_J_KiyeogSios: number;

    /**
     * @default 3833
     */
    const KEY_Hangul_J_KkogjiDalrinIeung: number;

    /**
     * @default 3811
     */
    const KEY_Hangul_J_Mieum: number;

    /**
     * @default 3799
     */
    const KEY_Hangul_J_Nieun: number;

    /**
     * @default 3801
     */
    const KEY_Hangul_J_NieunHieuh: number;

    /**
     * @default 3800
     */
    const KEY_Hangul_J_NieunJieuj: number;

    /**
     * @default 3832
     */
    const KEY_Hangul_J_PanSios: number;

    /**
     * @default 3821
     */
    const KEY_Hangul_J_Phieuf: number;

    /**
     * @default 3812
     */
    const KEY_Hangul_J_Pieub: number;

    /**
     * @default 3813
     */
    const KEY_Hangul_J_PieubSios: number;

    /**
     * @default 3803
     */
    const KEY_Hangul_J_Rieul: number;

    /**
     * @default 3810
     */
    const KEY_Hangul_J_RieulHieuh: number;

    /**
     * @default 3804
     */
    const KEY_Hangul_J_RieulKiyeog: number;

    /**
     * @default 3805
     */
    const KEY_Hangul_J_RieulMieum: number;

    /**
     * @default 3809
     */
    const KEY_Hangul_J_RieulPhieuf: number;

    /**
     * @default 3806
     */
    const KEY_Hangul_J_RieulPieub: number;

    /**
     * @default 3807
     */
    const KEY_Hangul_J_RieulSios: number;

    /**
     * @default 3808
     */
    const KEY_Hangul_J_RieulTieut: number;

    /**
     * @default 3814
     */
    const KEY_Hangul_J_Sios: number;

    /**
     * @default 3797
     */
    const KEY_Hangul_J_SsangKiyeog: number;

    /**
     * @default 3815
     */
    const KEY_Hangul_J_SsangSios: number;

    /**
     * @default 3820
     */
    const KEY_Hangul_J_Tieut: number;

    /**
     * @default 3834
     */
    const KEY_Hangul_J_YeorinHieuh: number;

    /**
     * @default 65333
     */
    const KEY_Hangul_Jamo: number;

    /**
     * @default 65336
     */
    const KEY_Hangul_Jeonja: number;

    /**
     * @default 3768
     */
    const KEY_Hangul_Jieuj: number;

    /**
     * @default 3771
     */
    const KEY_Hangul_Khieuq: number;

    /**
     * @default 3745
     */
    const KEY_Hangul_Kiyeog: number;

    /**
     * @default 3747
     */
    const KEY_Hangul_KiyeogSios: number;

    /**
     * @default 3827
     */
    const KEY_Hangul_KkogjiDalrinIeung: number;

    /**
     * @default 3761
     */
    const KEY_Hangul_Mieum: number;

    /**
     * @default 65341
     */
    const KEY_Hangul_MultipleCandidate: number;

    /**
     * @default 3748
     */
    const KEY_Hangul_Nieun: number;

    /**
     * @default 3750
     */
    const KEY_Hangul_NieunHieuh: number;

    /**
     * @default 3749
     */
    const KEY_Hangul_NieunJieuj: number;

    /**
     * @default 3783
     */
    const KEY_Hangul_O: number;

    /**
     * @default 3786
     */
    const KEY_Hangul_OE: number;

    /**
     * @default 3826
     */
    const KEY_Hangul_PanSios: number;

    /**
     * @default 3773
     */
    const KEY_Hangul_Phieuf: number;

    /**
     * @default 3762
     */
    const KEY_Hangul_Pieub: number;

    /**
     * @default 3764
     */
    const KEY_Hangul_PieubSios: number;

    /**
     * @default 65339
     */
    const KEY_Hangul_PostHanja: number;

    /**
     * @default 65338
     */
    const KEY_Hangul_PreHanja: number;

    /**
     * @default 65342
     */
    const KEY_Hangul_PreviousCandidate: number;

    /**
     * @default 3753
     */
    const KEY_Hangul_Rieul: number;

    /**
     * @default 3760
     */
    const KEY_Hangul_RieulHieuh: number;

    /**
     * @default 3754
     */
    const KEY_Hangul_RieulKiyeog: number;

    /**
     * @default 3755
     */
    const KEY_Hangul_RieulMieum: number;

    /**
     * @default 3759
     */
    const KEY_Hangul_RieulPhieuf: number;

    /**
     * @default 3756
     */
    const KEY_Hangul_RieulPieub: number;

    /**
     * @default 3757
     */
    const KEY_Hangul_RieulSios: number;

    /**
     * @default 3758
     */
    const KEY_Hangul_RieulTieut: number;

    /**
     * @default 3823
     */
    const KEY_Hangul_RieulYeorinHieuh: number;

    /**
     * @default 65334
     */
    const KEY_Hangul_Romaja: number;

    /**
     * @default 65340
     */
    const KEY_Hangul_SingleCandidate: number;

    /**
     * @default 3765
     */
    const KEY_Hangul_Sios: number;

    /**
     * @default 65343
     */
    const KEY_Hangul_Special: number;

    /**
     * @default 3752
     */
    const KEY_Hangul_SsangDikeud: number;

    /**
     * @default 3769
     */
    const KEY_Hangul_SsangJieuj: number;

    /**
     * @default 3746
     */
    const KEY_Hangul_SsangKiyeog: number;

    /**
     * @default 3763
     */
    const KEY_Hangul_SsangPieub: number;

    /**
     * @default 3766
     */
    const KEY_Hangul_SsangSios: number;

    /**
     * @default 65330
     */
    const KEY_Hangul_Start: number;

    /**
     * @default 3824
     */
    const KEY_Hangul_SunkyeongeumMieum: number;

    /**
     * @default 3828
     */
    const KEY_Hangul_SunkyeongeumPhieuf: number;

    /**
     * @default 3825
     */
    const KEY_Hangul_SunkyeongeumPieub: number;

    /**
     * @default 3772
     */
    const KEY_Hangul_Tieut: number;

    /**
     * @default 3788
     */
    const KEY_Hangul_U: number;

    /**
     * @default 3784
     */
    const KEY_Hangul_WA: number;

    /**
     * @default 3785
     */
    const KEY_Hangul_WAE: number;

    /**
     * @default 3790
     */
    const KEY_Hangul_WE: number;

    /**
     * @default 3789
     */
    const KEY_Hangul_WEO: number;

    /**
     * @default 3791
     */
    const KEY_Hangul_WI: number;

    /**
     * @default 3777
     */
    const KEY_Hangul_YA: number;

    /**
     * @default 3778
     */
    const KEY_Hangul_YAE: number;

    /**
     * @default 3782
     */
    const KEY_Hangul_YE: number;

    /**
     * @default 3781
     */
    const KEY_Hangul_YEO: number;

    /**
     * @default 3794
     */
    const KEY_Hangul_YI: number;

    /**
     * @default 3787
     */
    const KEY_Hangul_YO: number;

    /**
     * @default 3792
     */
    const KEY_Hangul_YU: number;

    /**
     * @default 3829
     */
    const KEY_Hangul_YeorinHieuh: number;

    /**
     * @default 65406
     */
    const KEY_Hangul_switch: number;

    /**
     * @default 65321
     */
    const KEY_Hankaku: number;

    /**
     * @default 678
     */
    const KEY_Hcircumflex: number;

    /**
     * @default 65406
     */
    const KEY_Hebrew_switch: number;

    /**
     * @default 65386
     */
    const KEY_Help: number;

    /**
     * @default 65315
     */
    const KEY_Henkan: number;

    /**
     * @default 65315
     */
    const KEY_Henkan_Mode: number;

    /**
     * @default 269025192
     */
    const KEY_Hibernate: number;

    /**
     * @default 65317
     */
    const KEY_Hiragana: number;

    /**
     * @default 65319
     */
    const KEY_Hiragana_Katakana: number;

    /**
     * @default 269025079
     */
    const KEY_History: number;

    /**
     * @default 65360
     */
    const KEY_Home: number;

    /**
     * @default 269025048
     */
    const KEY_HomePage: number;

    /**
     * @default 269025082
     */
    const KEY_HotLinks: number;

    /**
     * @default 673
     */
    const KEY_Hstroke: number;

    /**
     * @default 65517
     */
    const KEY_Hyper_L: number;

    /**
     * @default 65518
     */
    const KEY_Hyper_R: number;

    /**
     * @default 73
     */
    const KEY_I: number;

    /**
     * @default 65075
     */
    const KEY_ISO_Center_Object: number;

    /**
     * @default 65072
     */
    const KEY_ISO_Continuous_Underline: number;

    /**
     * @default 65073
     */
    const KEY_ISO_Discontinuous_Underline: number;

    /**
     * @default 65074
     */
    const KEY_ISO_Emphasize: number;

    /**
     * @default 65076
     */
    const KEY_ISO_Enter: number;

    /**
     * @default 65071
     */
    const KEY_ISO_Fast_Cursor_Down: number;

    /**
     * @default 65068
     */
    const KEY_ISO_Fast_Cursor_Left: number;

    /**
     * @default 65069
     */
    const KEY_ISO_Fast_Cursor_Right: number;

    /**
     * @default 65070
     */
    const KEY_ISO_Fast_Cursor_Up: number;

    /**
     * @default 65036
     */
    const KEY_ISO_First_Group: number;

    /**
     * @default 65037
     */
    const KEY_ISO_First_Group_Lock: number;

    /**
     * @default 65030
     */
    const KEY_ISO_Group_Latch: number;

    /**
     * @default 65031
     */
    const KEY_ISO_Group_Lock: number;

    /**
     * @default 65406
     */
    const KEY_ISO_Group_Shift: number;

    /**
     * @default 65038
     */
    const KEY_ISO_Last_Group: number;

    /**
     * @default 65039
     */
    const KEY_ISO_Last_Group_Lock: number;

    /**
     * @default 65056
     */
    const KEY_ISO_Left_Tab: number;

    /**
     * @default 65026
     */
    const KEY_ISO_Level2_Latch: number;

    /**
     * @default 65028
     */
    const KEY_ISO_Level3_Latch: number;

    /**
     * @default 65029
     */
    const KEY_ISO_Level3_Lock: number;

    /**
     * @default 65027
     */
    const KEY_ISO_Level3_Shift: number;

    /**
     * @default 65042
     */
    const KEY_ISO_Level5_Latch: number;

    /**
     * @default 65043
     */
    const KEY_ISO_Level5_Lock: number;

    /**
     * @default 65041
     */
    const KEY_ISO_Level5_Shift: number;

    /**
     * @default 65025
     */
    const KEY_ISO_Lock: number;

    /**
     * @default 65058
     */
    const KEY_ISO_Move_Line_Down: number;

    /**
     * @default 65057
     */
    const KEY_ISO_Move_Line_Up: number;

    /**
     * @default 65032
     */
    const KEY_ISO_Next_Group: number;

    /**
     * @default 65033
     */
    const KEY_ISO_Next_Group_Lock: number;

    /**
     * @default 65060
     */
    const KEY_ISO_Partial_Line_Down: number;

    /**
     * @default 65059
     */
    const KEY_ISO_Partial_Line_Up: number;

    /**
     * @default 65061
     */
    const KEY_ISO_Partial_Space_Left: number;

    /**
     * @default 65062
     */
    const KEY_ISO_Partial_Space_Right: number;

    /**
     * @default 65034
     */
    const KEY_ISO_Prev_Group: number;

    /**
     * @default 65035
     */
    const KEY_ISO_Prev_Group_Lock: number;

    /**
     * @default 65067
     */
    const KEY_ISO_Release_Both_Margins: number;

    /**
     * @default 65065
     */
    const KEY_ISO_Release_Margin_Left: number;

    /**
     * @default 65066
     */
    const KEY_ISO_Release_Margin_Right: number;

    /**
     * @default 65063
     */
    const KEY_ISO_Set_Margin_Left: number;

    /**
     * @default 65064
     */
    const KEY_ISO_Set_Margin_Right: number;

    /**
     * @default 681
     */
    const KEY_Iabovedot: number;

    /**
     * @default 205
     */
    const KEY_Iacute: number;

    /**
     * @default 16785098
     */
    const KEY_Ibelowdot: number;

    /**
     * @default 16777516
     */
    const KEY_Ibreve: number;

    /**
     * @default 206
     */
    const KEY_Icircumflex: number;

    /**
     * @default 207
     */
    const KEY_Idiaeresis: number;

    /**
     * @default 204
     */
    const KEY_Igrave: number;

    /**
     * @default 16785096
     */
    const KEY_Ihook: number;

    /**
     * @default 975
     */
    const KEY_Imacron: number;

    /**
     * @default 65379
     */
    const KEY_Insert: number;

    /**
     * @default 967
     */
    const KEY_Iogonek: number;

    /**
     * @default 933
     */
    const KEY_Itilde: number;

    /**
     * @default 74
     */
    const KEY_J: number;

    /**
     * @default 684
     */
    const KEY_Jcircumflex: number;

    /**
     * @default 75
     */
    const KEY_K: number;

    /**
     * @default 65456
     */
    const KEY_KP_0: number;

    /**
     * @default 65457
     */
    const KEY_KP_1: number;

    /**
     * @default 65458
     */
    const KEY_KP_2: number;

    /**
     * @default 65459
     */
    const KEY_KP_3: number;

    /**
     * @default 65460
     */
    const KEY_KP_4: number;

    /**
     * @default 65461
     */
    const KEY_KP_5: number;

    /**
     * @default 65462
     */
    const KEY_KP_6: number;

    /**
     * @default 65463
     */
    const KEY_KP_7: number;

    /**
     * @default 65464
     */
    const KEY_KP_8: number;

    /**
     * @default 65465
     */
    const KEY_KP_9: number;

    /**
     * @default 65451
     */
    const KEY_KP_Add: number;

    /**
     * @default 65437
     */
    const KEY_KP_Begin: number;

    /**
     * @default 65454
     */
    const KEY_KP_Decimal: number;

    /**
     * @default 65439
     */
    const KEY_KP_Delete: number;

    /**
     * @default 65455
     */
    const KEY_KP_Divide: number;

    /**
     * @default 65433
     */
    const KEY_KP_Down: number;

    /**
     * @default 65436
     */
    const KEY_KP_End: number;

    /**
     * @default 65421
     */
    const KEY_KP_Enter: number;

    /**
     * @default 65469
     */
    const KEY_KP_Equal: number;

    /**
     * @default 65425
     */
    const KEY_KP_F1: number;

    /**
     * @default 65426
     */
    const KEY_KP_F2: number;

    /**
     * @default 65427
     */
    const KEY_KP_F3: number;

    /**
     * @default 65428
     */
    const KEY_KP_F4: number;

    /**
     * @default 65429
     */
    const KEY_KP_Home: number;

    /**
     * @default 65438
     */
    const KEY_KP_Insert: number;

    /**
     * @default 65430
     */
    const KEY_KP_Left: number;

    /**
     * @default 65450
     */
    const KEY_KP_Multiply: number;

    /**
     * @default 65435
     */
    const KEY_KP_Next: number;

    /**
     * @default 65435
     */
    const KEY_KP_Page_Down: number;

    /**
     * @default 65434
     */
    const KEY_KP_Page_Up: number;

    /**
     * @default 65434
     */
    const KEY_KP_Prior: number;

    /**
     * @default 65432
     */
    const KEY_KP_Right: number;

    /**
     * @default 65452
     */
    const KEY_KP_Separator: number;

    /**
     * @default 65408
     */
    const KEY_KP_Space: number;

    /**
     * @default 65453
     */
    const KEY_KP_Subtract: number;

    /**
     * @default 65417
     */
    const KEY_KP_Tab: number;

    /**
     * @default 65431
     */
    const KEY_KP_Up: number;

    /**
     * @default 65325
     */
    const KEY_Kana_Lock: number;

    /**
     * @default 65326
     */
    const KEY_Kana_Shift: number;

    /**
     * @default 65313
     */
    const KEY_Kanji: number;

    /**
     * @default 65335
     */
    const KEY_Kanji_Bangou: number;

    /**
     * @default 65318
     */
    const KEY_Katakana: number;

    /**
     * @default 269025030
     */
    const KEY_KbdBrightnessDown: number;

    /**
     * @default 269025029
     */
    const KEY_KbdBrightnessUp: number;

    /**
     * @default 269025028
     */
    const KEY_KbdLightOnOff: number;

    /**
     * @default 979
     */
    const KEY_Kcedilla: number;

    /**
     * @default 3839
     */
    const KEY_Korean_Won: number;

    /**
     * @default 76
     */
    const KEY_L: number;

    /**
     * @default 65480
     */
    const KEY_L1: number;

    /**
     * @default 65489
     */
    const KEY_L10: number;

    /**
     * @default 65481
     */
    const KEY_L2: number;

    /**
     * @default 65482
     */
    const KEY_L3: number;

    /**
     * @default 65483
     */
    const KEY_L4: number;

    /**
     * @default 65484
     */
    const KEY_L5: number;

    /**
     * @default 65485
     */
    const KEY_L6: number;

    /**
     * @default 65486
     */
    const KEY_L7: number;

    /**
     * @default 65487
     */
    const KEY_L8: number;

    /**
     * @default 65488
     */
    const KEY_L9: number;

    /**
     * @default 453
     */
    const KEY_Lacute: number;

    /**
     * @default 65236
     */
    const KEY_Last_Virtual_Screen: number;

    /**
     * @default 269025088
     */
    const KEY_Launch0: number;

    /**
     * @default 269025089
     */
    const KEY_Launch1: number;

    /**
     * @default 269025090
     */
    const KEY_Launch2: number;

    /**
     * @default 269025091
     */
    const KEY_Launch3: number;

    /**
     * @default 269025092
     */
    const KEY_Launch4: number;

    /**
     * @default 269025093
     */
    const KEY_Launch5: number;

    /**
     * @default 269025094
     */
    const KEY_Launch6: number;

    /**
     * @default 269025095
     */
    const KEY_Launch7: number;

    /**
     * @default 269025096
     */
    const KEY_Launch8: number;

    /**
     * @default 269025097
     */
    const KEY_Launch9: number;

    /**
     * @default 269025098
     */
    const KEY_LaunchA: number;

    /**
     * @default 269025099
     */
    const KEY_LaunchB: number;

    /**
     * @default 269025100
     */
    const KEY_LaunchC: number;

    /**
     * @default 269025101
     */
    const KEY_LaunchD: number;

    /**
     * @default 269025102
     */
    const KEY_LaunchE: number;

    /**
     * @default 269025103
     */
    const KEY_LaunchF: number;

    /**
     * @default 16784950
     */
    const KEY_Lbelowdot: number;

    /**
     * @default 421
     */
    const KEY_Lcaron: number;

    /**
     * @default 934
     */
    const KEY_Lcedilla: number;

    /**
     * @default 65361
     */
    const KEY_Left: number;

    /**
     * @default 269025077
     */
    const KEY_LightBulb: number;

    /**
     * @default 65290
     */
    const KEY_Linefeed: number;

    /**
     * @default 16785572
     */
    const KEY_LiraSign: number;

    /**
     * @default 269025121
     */
    const KEY_LogOff: number;

    /**
     * @default 419
     */
    const KEY_Lstroke: number;

    /**
     * @default 77
     */
    const KEY_M: number;

    /**
     * @default 16784960
     */
    const KEY_Mabovedot: number;

    /**
     * @default 1717
     */
    const KEY_Macedonia_DSE: number;

    /**
     * @default 1714
     */
    const KEY_Macedonia_GJE: number;

    /**
     * @default 1724
     */
    const KEY_Macedonia_KJE: number;

    /**
     * @default 1701
     */
    const KEY_Macedonia_dse: number;

    /**
     * @default 1698
     */
    const KEY_Macedonia_gje: number;

    /**
     * @default 1708
     */
    const KEY_Macedonia_kje: number;

    /**
     * @default 65342
     */
    const KEY_Mae_Koho: number;

    /**
     * @default 269025049
     */
    const KEY_Mail: number;

    /**
     * @default 269025168
     */
    const KEY_MailForward: number;

    /**
     * @default 269025122
     */
    const KEY_Market: number;

    /**
     * @default 65324
     */
    const KEY_Massyo: number;

    /**
     * @default 269025123
     */
    const KEY_Meeting: number;

    /**
     * @default 269025054
     */
    const KEY_Memo: number;

    /**
     * @default 65383
     */
    const KEY_Menu: number;

    /**
     * @default 269025125
     */
    const KEY_MenuKB: number;

    /**
     * @default 269025126
     */
    const KEY_MenuPB: number;

    /**
     * @default 269025166
     */
    const KEY_Messenger: number;

    /**
     * @default 65511
     */
    const KEY_Meta_L: number;

    /**
     * @default 65512
     */
    const KEY_Meta_R: number;

    /**
     * @default 16785573
     */
    const KEY_MillSign: number;

    /**
     * @default 269025025
     */
    const KEY_ModeLock: number;

    /**
     * @default 65406
     */
    const KEY_Mode_switch: number;

    /**
     * @default 269025027
     */
    const KEY_MonBrightnessDown: number;

    /**
     * @default 269025026
     */
    const KEY_MonBrightnessUp: number;

    /**
     * @default 65143
     */
    const KEY_MouseKeys_Accel_Enable: number;

    /**
     * @default 65142
     */
    const KEY_MouseKeys_Enable: number;

    /**
     * @default 65314
     */
    const KEY_Muhenkan: number;

    /**
     * @default 65312
     */
    const KEY_Multi_key: number;

    /**
     * @default 65341
     */
    const KEY_MultipleCandidate: number;

    /**
     * @default 269025170
     */
    const KEY_Music: number;

    /**
     * @default 269025075
     */
    const KEY_MyComputer: number;

    /**
     * @default 269025127
     */
    const KEY_MySites: number;

    /**
     * @default 78
     */
    const KEY_N: number;

    /**
     * @default 465
     */
    const KEY_Nacute: number;

    /**
     * @default 16785574
     */
    const KEY_NairaSign: number;

    /**
     * @default 466
     */
    const KEY_Ncaron: number;

    /**
     * @default 977
     */
    const KEY_Ncedilla: number;

    /**
     * @default 269025128
     */
    const KEY_New: number;

    /**
     * @default 16785578
     */
    const KEY_NewSheqelSign: number;

    /**
     * @default 269025129
     */
    const KEY_News: number;

    /**
     * @default 65366
     */
    const KEY_Next: number;

    /**
     * @default 269024802
     */
    const KEY_Next_VMode: number;

    /**
     * @default 65234
     */
    const KEY_Next_Virtual_Screen: number;

    /**
     * @default 209
     */
    const KEY_Ntilde: number;

    /**
     * @default 65407
     */
    const KEY_Num_Lock: number;

    /**
     * @default 79
     */
    const KEY_O: number;

    /**
     * @default 5052
     */
    const KEY_OE: number;

    /**
     * @default 211
     */
    const KEY_Oacute: number;

    /**
     * @default 16777631
     */
    const KEY_Obarred: number;

    /**
     * @default 16785100
     */
    const KEY_Obelowdot: number;

    /**
     * @default 16777681
     */
    const KEY_Ocaron: number;

    /**
     * @default 212
     */
    const KEY_Ocircumflex: number;

    /**
     * @default 16785104
     */
    const KEY_Ocircumflexacute: number;

    /**
     * @default 16785112
     */
    const KEY_Ocircumflexbelowdot: number;

    /**
     * @default 16785106
     */
    const KEY_Ocircumflexgrave: number;

    /**
     * @default 16785108
     */
    const KEY_Ocircumflexhook: number;

    /**
     * @default 16785110
     */
    const KEY_Ocircumflextilde: number;

    /**
     * @default 214
     */
    const KEY_Odiaeresis: number;

    /**
     * @default 469
     */
    const KEY_Odoubleacute: number;

    /**
     * @default 269025130
     */
    const KEY_OfficeHome: number;

    /**
     * @default 210
     */
    const KEY_Ograve: number;

    /**
     * @default 16785102
     */
    const KEY_Ohook: number;

    /**
     * @default 16777632
     */
    const KEY_Ohorn: number;

    /**
     * @default 16785114
     */
    const KEY_Ohornacute: number;

    /**
     * @default 16785122
     */
    const KEY_Ohornbelowdot: number;

    /**
     * @default 16785116
     */
    const KEY_Ohorngrave: number;

    /**
     * @default 16785118
     */
    const KEY_Ohornhook: number;

    /**
     * @default 16785120
     */
    const KEY_Ohorntilde: number;

    /**
     * @default 978
     */
    const KEY_Omacron: number;

    /**
     * @default 216
     */
    const KEY_Ooblique: number;

    /**
     * @default 269025131
     */
    const KEY_Open: number;

    /**
     * @default 269025080
     */
    const KEY_OpenURL: number;

    /**
     * @default 269025132
     */
    const KEY_Option: number;

    /**
     * @default 216
     */
    const KEY_Oslash: number;

    /**
     * @default 213
     */
    const KEY_Otilde: number;

    /**
     * @default 65144
     */
    const KEY_Overlay1_Enable: number;

    /**
     * @default 65145
     */
    const KEY_Overlay2_Enable: number;

    /**
     * @default 80
     */
    const KEY_P: number;

    /**
     * @default 16784982
     */
    const KEY_Pabovedot: number;

    /**
     * @default 65366
     */
    const KEY_Page_Down: number;

    /**
     * @default 65365
     */
    const KEY_Page_Up: number;

    /**
     * @default 269025133
     */
    const KEY_Paste: number;

    /**
     * @default 65299
     */
    const KEY_Pause: number;

    /**
     * @default 16785575
     */
    const KEY_PesetaSign: number;

    /**
     * @default 269025134
     */
    const KEY_Phone: number;

    /**
     * @default 269025169
     */
    const KEY_Pictures: number;

    /**
     * @default 65274
     */
    const KEY_Pointer_Accelerate: number;

    /**
     * @default 65257
     */
    const KEY_Pointer_Button1: number;

    /**
     * @default 65258
     */
    const KEY_Pointer_Button2: number;

    /**
     * @default 65259
     */
    const KEY_Pointer_Button3: number;

    /**
     * @default 65260
     */
    const KEY_Pointer_Button4: number;

    /**
     * @default 65261
     */
    const KEY_Pointer_Button5: number;

    /**
     * @default 65256
     */
    const KEY_Pointer_Button_Dflt: number;

    /**
     * @default 65263
     */
    const KEY_Pointer_DblClick1: number;

    /**
     * @default 65264
     */
    const KEY_Pointer_DblClick2: number;

    /**
     * @default 65265
     */
    const KEY_Pointer_DblClick3: number;

    /**
     * @default 65266
     */
    const KEY_Pointer_DblClick4: number;

    /**
     * @default 65267
     */
    const KEY_Pointer_DblClick5: number;

    /**
     * @default 65262
     */
    const KEY_Pointer_DblClick_Dflt: number;

    /**
     * @default 65275
     */
    const KEY_Pointer_DfltBtnNext: number;

    /**
     * @default 65276
     */
    const KEY_Pointer_DfltBtnPrev: number;

    /**
     * @default 65251
     */
    const KEY_Pointer_Down: number;

    /**
     * @default 65254
     */
    const KEY_Pointer_DownLeft: number;

    /**
     * @default 65255
     */
    const KEY_Pointer_DownRight: number;

    /**
     * @default 65269
     */
    const KEY_Pointer_Drag1: number;

    /**
     * @default 65270
     */
    const KEY_Pointer_Drag2: number;

    /**
     * @default 65271
     */
    const KEY_Pointer_Drag3: number;

    /**
     * @default 65272
     */
    const KEY_Pointer_Drag4: number;

    /**
     * @default 65277
     */
    const KEY_Pointer_Drag5: number;

    /**
     * @default 65268
     */
    const KEY_Pointer_Drag_Dflt: number;

    /**
     * @default 65273
     */
    const KEY_Pointer_EnableKeys: number;

    /**
     * @default 65248
     */
    const KEY_Pointer_Left: number;

    /**
     * @default 65249
     */
    const KEY_Pointer_Right: number;

    /**
     * @default 65250
     */
    const KEY_Pointer_Up: number;

    /**
     * @default 65252
     */
    const KEY_Pointer_UpLeft: number;

    /**
     * @default 65253
     */
    const KEY_Pointer_UpRight: number;

    /**
     * @default 269025057
     */
    const KEY_PowerDown: number;

    /**
     * @default 269025066
     */
    const KEY_PowerOff: number;

    /**
     * @default 269024803
     */
    const KEY_Prev_VMode: number;

    /**
     * @default 65233
     */
    const KEY_Prev_Virtual_Screen: number;

    /**
     * @default 65342
     */
    const KEY_PreviousCandidate: number;

    /**
     * @default 65377
     */
    const KEY_Print: number;

    /**
     * @default 65365
     */
    const KEY_Prior: number;

    /**
     * @default 81
     */
    const KEY_Q: number;

    /**
     * @default 82
     */
    const KEY_R: number;

    /**
     * @default 65490
     */
    const KEY_R1: number;

    /**
     * @default 65499
     */
    const KEY_R10: number;

    /**
     * @default 65500
     */
    const KEY_R11: number;

    /**
     * @default 65501
     */
    const KEY_R12: number;

    /**
     * @default 65502
     */
    const KEY_R13: number;

    /**
     * @default 65503
     */
    const KEY_R14: number;

    /**
     * @default 65504
     */
    const KEY_R15: number;

    /**
     * @default 65491
     */
    const KEY_R2: number;

    /**
     * @default 65492
     */
    const KEY_R3: number;

    /**
     * @default 65493
     */
    const KEY_R4: number;

    /**
     * @default 65494
     */
    const KEY_R5: number;

    /**
     * @default 65495
     */
    const KEY_R6: number;

    /**
     * @default 65496
     */
    const KEY_R7: number;

    /**
     * @default 65497
     */
    const KEY_R8: number;

    /**
     * @default 65498
     */
    const KEY_R9: number;

    /**
     * @default 448
     */
    const KEY_Racute: number;

    /**
     * @default 472
     */
    const KEY_Rcaron: number;

    /**
     * @default 931
     */
    const KEY_Rcedilla: number;

    /**
     * @default 269025187
     */
    const KEY_Red: number;

    /**
     * @default 65382
     */
    const KEY_Redo: number;

    /**
     * @default 269025065
     */
    const KEY_Refresh: number;

    /**
     * @default 269025139
     */
    const KEY_Reload: number;

    /**
     * @default 65138
     */
    const KEY_RepeatKeys_Enable: number;

    /**
     * @default 269025138
     */
    const KEY_Reply: number;

    /**
     * @default 65293
     */
    const KEY_Return: number;

    /**
     * @default 65363
     */
    const KEY_Right: number;

    /**
     * @default 269025060
     */
    const KEY_RockerDown: number;

    /**
     * @default 269025061
     */
    const KEY_RockerEnter: number;

    /**
     * @default 269025059
     */
    const KEY_RockerUp: number;

    /**
     * @default 65316
     */
    const KEY_Romaji: number;

    /**
     * @default 269025140
     */
    const KEY_RotateWindows: number;

    /**
     * @default 269025142
     */
    const KEY_RotationKB: number;

    /**
     * @default 269025141
     */
    const KEY_RotationPB: number;

    /**
     * @default 16785576
     */
    const KEY_RupeeSign: number;

    /**
     * @default 83
     */
    const KEY_S: number;

    /**
     * @default 16777615
     */
    const KEY_SCHWA: number;

    /**
     * @default 16784992
     */
    const KEY_Sabovedot: number;

    /**
     * @default 422
     */
    const KEY_Sacute: number;

    /**
     * @default 269025143
     */
    const KEY_Save: number;

    /**
     * @default 425
     */
    const KEY_Scaron: number;

    /**
     * @default 426
     */
    const KEY_Scedilla: number;

    /**
     * @default 734
     */
    const KEY_Scircumflex: number;

    /**
     * @default 269025069
     */
    const KEY_ScreenSaver: number;

    /**
     * @default 269025146
     */
    const KEY_ScrollClick: number;

    /**
     * @default 269025145
     */
    const KEY_ScrollDown: number;

    /**
     * @default 269025144
     */
    const KEY_ScrollUp: number;

    /**
     * @default 65300
     */
    const KEY_Scroll_Lock: number;

    /**
     * @default 269025051
     */
    const KEY_Search: number;

    /**
     * @default 65376
     */
    const KEY_Select: number;

    /**
     * @default 269025184
     */
    const KEY_SelectButton: number;

    /**
     * @default 269025147
     */
    const KEY_Send: number;

    /**
     * @default 1713
     */
    const KEY_Serbian_DJE: number;

    /**
     * @default 1727
     */
    const KEY_Serbian_DZE: number;

    /**
     * @default 1720
     */
    const KEY_Serbian_JE: number;

    /**
     * @default 1721
     */
    const KEY_Serbian_LJE: number;

    /**
     * @default 1722
     */
    const KEY_Serbian_NJE: number;

    /**
     * @default 1723
     */
    const KEY_Serbian_TSHE: number;

    /**
     * @default 1697
     */
    const KEY_Serbian_dje: number;

    /**
     * @default 1711
     */
    const KEY_Serbian_dze: number;

    /**
     * @default 1704
     */
    const KEY_Serbian_je: number;

    /**
     * @default 1705
     */
    const KEY_Serbian_lje: number;

    /**
     * @default 1706
     */
    const KEY_Serbian_nje: number;

    /**
     * @default 1707
     */
    const KEY_Serbian_tshe: number;

    /**
     * @default 65505
     */
    const KEY_Shift_L: number;

    /**
     * @default 65510
     */
    const KEY_Shift_Lock: number;

    /**
     * @default 65506
     */
    const KEY_Shift_R: number;

    /**
     * @default 269025078
     */
    const KEY_Shop: number;

    /**
     * @default 65340
     */
    const KEY_SingleCandidate: number;

    /**
     * @default 269025071
     */
    const KEY_Sleep: number;

    /**
     * @default 65139
     */
    const KEY_SlowKeys_Enable: number;

    /**
     * @default 269025148
     */
    const KEY_Spell: number;

    /**
     * @default 269025149
     */
    const KEY_SplitScreen: number;

    /**
     * @default 269025040
     */
    const KEY_Standby: number;

    /**
     * @default 269025050
     */
    const KEY_Start: number;

    /**
     * @default 65141
     */
    const KEY_StickyKeys_Enable: number;

    /**
     * @default 269025064
     */
    const KEY_Stop: number;

    /**
     * @default 269025178
     */
    const KEY_Subtitle: number;

    /**
     * @default 65515
     */
    const KEY_Super_L: number;

    /**
     * @default 65516
     */
    const KEY_Super_R: number;

    /**
     * @default 269025150
     */
    const KEY_Support: number;

    /**
     * @default 269025191
     */
    const KEY_Suspend: number;

    /**
     * @default 269024769
     */
    const KEY_Switch_VT_1: number;

    /**
     * @default 269024778
     */
    const KEY_Switch_VT_10: number;

    /**
     * @default 269024779
     */
    const KEY_Switch_VT_11: number;

    /**
     * @default 269024780
     */
    const KEY_Switch_VT_12: number;

    /**
     * @default 269024770
     */
    const KEY_Switch_VT_2: number;

    /**
     * @default 269024771
     */
    const KEY_Switch_VT_3: number;

    /**
     * @default 269024772
     */
    const KEY_Switch_VT_4: number;

    /**
     * @default 269024773
     */
    const KEY_Switch_VT_5: number;

    /**
     * @default 269024774
     */
    const KEY_Switch_VT_6: number;

    /**
     * @default 269024775
     */
    const KEY_Switch_VT_7: number;

    /**
     * @default 269024776
     */
    const KEY_Switch_VT_8: number;

    /**
     * @default 269024777
     */
    const KEY_Switch_VT_9: number;

    /**
     * @default 65301
     */
    const KEY_Sys_Req: number;

    /**
     * @default 84
     */
    const KEY_T: number;

    /**
     * @default 222
     */
    const KEY_THORN: number;

    /**
     * @default 65289
     */
    const KEY_Tab: number;

    /**
     * @default 16785002
     */
    const KEY_Tabovedot: number;

    /**
     * @default 269025151
     */
    const KEY_TaskPane: number;

    /**
     * @default 427
     */
    const KEY_Tcaron: number;

    /**
     * @default 478
     */
    const KEY_Tcedilla: number;

    /**
     * @default 269025152
     */
    const KEY_Terminal: number;

    /**
     * @default 65237
     */
    const KEY_Terminate_Server: number;

    /**
     * @default 3551
     */
    const KEY_Thai_baht: number;

    /**
     * @default 3514
     */
    const KEY_Thai_bobaimai: number;

    /**
     * @default 3496
     */
    const KEY_Thai_chochan: number;

    /**
     * @default 3498
     */
    const KEY_Thai_chochang: number;

    /**
     * @default 3497
     */
    const KEY_Thai_choching: number;

    /**
     * @default 3500
     */
    const KEY_Thai_chochoe: number;

    /**
     * @default 3502
     */
    const KEY_Thai_dochada: number;

    /**
     * @default 3508
     */
    const KEY_Thai_dodek: number;

    /**
     * @default 3517
     */
    const KEY_Thai_fofa: number;

    /**
     * @default 3519
     */
    const KEY_Thai_fofan: number;

    /**
     * @default 3531
     */
    const KEY_Thai_hohip: number;

    /**
     * @default 3534
     */
    const KEY_Thai_honokhuk: number;

    /**
     * @default 3490
     */
    const KEY_Thai_khokhai: number;

    /**
     * @default 3493
     */
    const KEY_Thai_khokhon: number;

    /**
     * @default 3491
     */
    const KEY_Thai_khokhuat: number;

    /**
     * @default 3492
     */
    const KEY_Thai_khokhwai: number;

    /**
     * @default 3494
     */
    const KEY_Thai_khorakhang: number;

    /**
     * @default 3489
     */
    const KEY_Thai_kokai: number;

    /**
     * @default 3557
     */
    const KEY_Thai_lakkhangyao: number;

    /**
     * @default 3575
     */
    const KEY_Thai_lekchet: number;

    /**
     * @default 3573
     */
    const KEY_Thai_lekha: number;

    /**
     * @default 3574
     */
    const KEY_Thai_lekhok: number;

    /**
     * @default 3577
     */
    const KEY_Thai_lekkao: number;

    /**
     * @default 3569
     */
    const KEY_Thai_leknung: number;

    /**
     * @default 3576
     */
    const KEY_Thai_lekpaet: number;

    /**
     * @default 3571
     */
    const KEY_Thai_leksam: number;

    /**
     * @default 3572
     */
    const KEY_Thai_leksi: number;

    /**
     * @default 3570
     */
    const KEY_Thai_leksong: number;

    /**
     * @default 3568
     */
    const KEY_Thai_leksun: number;

    /**
     * @default 3532
     */
    const KEY_Thai_lochula: number;

    /**
     * @default 3525
     */
    const KEY_Thai_loling: number;

    /**
     * @default 3526
     */
    const KEY_Thai_lu: number;

    /**
     * @default 3563
     */
    const KEY_Thai_maichattawa: number;

    /**
     * @default 3560
     */
    const KEY_Thai_maiek: number;

    /**
     * @default 3537
     */
    const KEY_Thai_maihanakat: number;

    /**
     * @default 3550
     */
    const KEY_Thai_maihanakat_maitho: number;

    /**
     * @default 3559
     */
    const KEY_Thai_maitaikhu: number;

    /**
     * @default 3561
     */
    const KEY_Thai_maitho: number;

    /**
     * @default 3562
     */
    const KEY_Thai_maitri: number;

    /**
     * @default 3558
     */
    const KEY_Thai_maiyamok: number;

    /**
     * @default 3521
     */
    const KEY_Thai_moma: number;

    /**
     * @default 3495
     */
    const KEY_Thai_ngongu: number;

    /**
     * @default 3565
     */
    const KEY_Thai_nikhahit: number;

    /**
     * @default 3507
     */
    const KEY_Thai_nonen: number;

    /**
     * @default 3513
     */
    const KEY_Thai_nonu: number;

    /**
     * @default 3533
     */
    const KEY_Thai_oang: number;

    /**
     * @default 3535
     */
    const KEY_Thai_paiyannoi: number;

    /**
     * @default 3546
     */
    const KEY_Thai_phinthu: number;

    /**
     * @default 3518
     */
    const KEY_Thai_phophan: number;

    /**
     * @default 3516
     */
    const KEY_Thai_phophung: number;

    /**
     * @default 3520
     */
    const KEY_Thai_phosamphao: number;

    /**
     * @default 3515
     */
    const KEY_Thai_popla: number;

    /**
     * @default 3523
     */
    const KEY_Thai_rorua: number;

    /**
     * @default 3524
     */
    const KEY_Thai_ru: number;

    /**
     * @default 3536
     */
    const KEY_Thai_saraa: number;

    /**
     * @default 3538
     */
    const KEY_Thai_saraaa: number;

    /**
     * @default 3553
     */
    const KEY_Thai_saraae: number;

    /**
     * @default 3556
     */
    const KEY_Thai_saraaimaimalai: number;

    /**
     * @default 3555
     */
    const KEY_Thai_saraaimaimuan: number;

    /**
     * @default 3539
     */
    const KEY_Thai_saraam: number;

    /**
     * @default 3552
     */
    const KEY_Thai_sarae: number;

    /**
     * @default 3540
     */
    const KEY_Thai_sarai: number;

    /**
     * @default 3541
     */
    const KEY_Thai_saraii: number;

    /**
     * @default 3554
     */
    const KEY_Thai_sarao: number;

    /**
     * @default 3544
     */
    const KEY_Thai_sarau: number;

    /**
     * @default 3542
     */
    const KEY_Thai_saraue: number;

    /**
     * @default 3543
     */
    const KEY_Thai_sarauee: number;

    /**
     * @default 3545
     */
    const KEY_Thai_sarauu: number;

    /**
     * @default 3529
     */
    const KEY_Thai_sorusi: number;

    /**
     * @default 3528
     */
    const KEY_Thai_sosala: number;

    /**
     * @default 3499
     */
    const KEY_Thai_soso: number;

    /**
     * @default 3530
     */
    const KEY_Thai_sosua: number;

    /**
     * @default 3564
     */
    const KEY_Thai_thanthakhat: number;

    /**
     * @default 3505
     */
    const KEY_Thai_thonangmontho: number;

    /**
     * @default 3506
     */
    const KEY_Thai_thophuthao: number;

    /**
     * @default 3511
     */
    const KEY_Thai_thothahan: number;

    /**
     * @default 3504
     */
    const KEY_Thai_thothan: number;

    /**
     * @default 3512
     */
    const KEY_Thai_thothong: number;

    /**
     * @default 3510
     */
    const KEY_Thai_thothung: number;

    /**
     * @default 3503
     */
    const KEY_Thai_topatak: number;

    /**
     * @default 3509
     */
    const KEY_Thai_totao: number;

    /**
     * @default 3527
     */
    const KEY_Thai_wowaen: number;

    /**
     * @default 3522
     */
    const KEY_Thai_yoyak: number;

    /**
     * @default 3501
     */
    const KEY_Thai_yoying: number;

    /**
     * @default 222
     */
    const KEY_Thorn: number;

    /**
     * @default 269025183
     */
    const KEY_Time: number;

    /**
     * @default 269025055
     */
    const KEY_ToDoList: number;

    /**
     * @default 269025153
     */
    const KEY_Tools: number;

    /**
     * @default 269025186
     */
    const KEY_TopMenu: number;

    /**
     * @default 269025193
     */
    const KEY_TouchpadToggle: number;

    /**
     * @default 65323
     */
    const KEY_Touroku: number;

    /**
     * @default 269025154
     */
    const KEY_Travel: number;

    /**
     * @default 940
     */
    const KEY_Tslash: number;

    /**
     * @default 85
     */
    const KEY_U: number;

    /**
     * @default 269025174
     */
    const KEY_UWB: number;

    /**
     * @default 218
     */
    const KEY_Uacute: number;

    /**
     * @default 16785124
     */
    const KEY_Ubelowdot: number;

    /**
     * @default 733
     */
    const KEY_Ubreve: number;

    /**
     * @default 219
     */
    const KEY_Ucircumflex: number;

    /**
     * @default 220
     */
    const KEY_Udiaeresis: number;

    /**
     * @default 475
     */
    const KEY_Udoubleacute: number;

    /**
     * @default 217
     */
    const KEY_Ugrave: number;

    /**
     * @default 16785126
     */
    const KEY_Uhook: number;

    /**
     * @default 16777647
     */
    const KEY_Uhorn: number;

    /**
     * @default 16785128
     */
    const KEY_Uhornacute: number;

    /**
     * @default 16785136
     */
    const KEY_Uhornbelowdot: number;

    /**
     * @default 16785130
     */
    const KEY_Uhorngrave: number;

    /**
     * @default 16785132
     */
    const KEY_Uhornhook: number;

    /**
     * @default 16785134
     */
    const KEY_Uhorntilde: number;

    /**
     * @default 1725
     */
    const KEY_Ukrainian_GHE_WITH_UPTURN: number;

    /**
     * @default 1718
     */
    const KEY_Ukrainian_I: number;

    /**
     * @default 1716
     */
    const KEY_Ukrainian_IE: number;

    /**
     * @default 1719
     */
    const KEY_Ukrainian_YI: number;

    /**
     * @default 1709
     */
    const KEY_Ukrainian_ghe_with_upturn: number;

    /**
     * @default 1702
     */
    const KEY_Ukrainian_i: number;

    /**
     * @default 1700
     */
    const KEY_Ukrainian_ie: number;

    /**
     * @default 1703
     */
    const KEY_Ukrainian_yi: number;

    /**
     * @default 1718
     */
    const KEY_Ukranian_I: number;

    /**
     * @default 1716
     */
    const KEY_Ukranian_JE: number;

    /**
     * @default 1719
     */
    const KEY_Ukranian_YI: number;

    /**
     * @default 1702
     */
    const KEY_Ukranian_i: number;

    /**
     * @default 1700
     */
    const KEY_Ukranian_je: number;

    /**
     * @default 1703
     */
    const KEY_Ukranian_yi: number;

    /**
     * @default 990
     */
    const KEY_Umacron: number;

    /**
     * @default 65381
     */
    const KEY_Undo: number;

    /**
     * @default 269024800
     */
    const KEY_Ungrab: number;

    /**
     * @default 985
     */
    const KEY_Uogonek: number;

    /**
     * @default 65362
     */
    const KEY_Up: number;

    /**
     * @default 473
     */
    const KEY_Uring: number;

    /**
     * @default 269025157
     */
    const KEY_User1KB: number;

    /**
     * @default 269025158
     */
    const KEY_User2KB: number;

    /**
     * @default 269025156
     */
    const KEY_UserPB: number;

    /**
     * @default 989
     */
    const KEY_Utilde: number;

    /**
     * @default 86
     */
    const KEY_V: number;

    /**
     * @default 269025076
     */
    const KEY_VendorHome: number;

    /**
     * @default 269025159
     */
    const KEY_Video: number;

    /**
     * @default 269025185
     */
    const KEY_View: number;

    /**
     * @default 16777215
     */
    const KEY_VoidSymbol: number;

    /**
     * @default 87
     */
    const KEY_W: number;

    /**
     * @default 269025173
     */
    const KEY_WLAN: number;

    /**
     * @default 269025070
     */
    const KEY_WWW: number;

    /**
     * @default 16785026
     */
    const KEY_Wacute: number;

    /**
     * @default 269025067
     */
    const KEY_WakeUp: number;

    /**
     * @default 16777588
     */
    const KEY_Wcircumflex: number;

    /**
     * @default 16785028
     */
    const KEY_Wdiaeresis: number;

    /**
     * @default 269025167
     */
    const KEY_WebCam: number;

    /**
     * @default 16785024
     */
    const KEY_Wgrave: number;

    /**
     * @default 269025160
     */
    const KEY_WheelButton: number;

    /**
     * @default 269025109
     */
    const KEY_WindowClear: number;

    /**
     * @default 16785577
     */
    const KEY_WonSign: number;

    /**
     * @default 269025161
     */
    const KEY_Word: number;

    /**
     * @default 88
     */
    const KEY_X: number;

    /**
     * @default 16785034
     */
    const KEY_Xabovedot: number;

    /**
     * @default 269025162
     */
    const KEY_Xfer: number;

    /**
     * @default 89
     */
    const KEY_Y: number;

    /**
     * @default 221
     */
    const KEY_Yacute: number;

    /**
     * @default 16785140
     */
    const KEY_Ybelowdot: number;

    /**
     * @default 16777590
     */
    const KEY_Ycircumflex: number;

    /**
     * @default 5054
     */
    const KEY_Ydiaeresis: number;

    /**
     * @default 269025189
     */
    const KEY_Yellow: number;

    /**
     * @default 16785138
     */
    const KEY_Ygrave: number;

    /**
     * @default 16785142
     */
    const KEY_Yhook: number;

    /**
     * @default 16785144
     */
    const KEY_Ytilde: number;

    /**
     * @default 90
     */
    const KEY_Z: number;

    /**
     * @default 431
     */
    const KEY_Zabovedot: number;

    /**
     * @default 428
     */
    const KEY_Zacute: number;

    /**
     * @default 430
     */
    const KEY_Zcaron: number;

    /**
     * @default 65341
     */
    const KEY_Zen_Koho: number;

    /**
     * @default 65320
     */
    const KEY_Zenkaku: number;

    /**
     * @default 65322
     */
    const KEY_Zenkaku_Hankaku: number;

    /**
     * @default 269025163
     */
    const KEY_ZoomIn: number;

    /**
     * @default 269025164
     */
    const KEY_ZoomOut: number;

    /**
     * @default 16777653
     */
    const KEY_Zstroke: number;

    /**
     * @default 97
     */
    const KEY_a: number;

    /**
     * @default 225
     */
    const KEY_aacute: number;

    /**
     * @default 16785057
     */
    const KEY_abelowdot: number;

    /**
     * @default 511
     */
    const KEY_abovedot: number;

    /**
     * @default 483
     */
    const KEY_abreve: number;

    /**
     * @default 16785071
     */
    const KEY_abreveacute: number;

    /**
     * @default 16785079
     */
    const KEY_abrevebelowdot: number;

    /**
     * @default 16785073
     */
    const KEY_abrevegrave: number;

    /**
     * @default 16785075
     */
    const KEY_abrevehook: number;

    /**
     * @default 16785077
     */
    const KEY_abrevetilde: number;

    /**
     * @default 226
     */
    const KEY_acircumflex: number;

    /**
     * @default 16785061
     */
    const KEY_acircumflexacute: number;

    /**
     * @default 16785069
     */
    const KEY_acircumflexbelowdot: number;

    /**
     * @default 16785063
     */
    const KEY_acircumflexgrave: number;

    /**
     * @default 16785065
     */
    const KEY_acircumflexhook: number;

    /**
     * @default 16785067
     */
    const KEY_acircumflextilde: number;

    /**
     * @default 180
     */
    const KEY_acute: number;

    /**
     * @default 228
     */
    const KEY_adiaeresis: number;

    /**
     * @default 230
     */
    const KEY_ae: number;

    /**
     * @default 224
     */
    const KEY_agrave: number;

    /**
     * @default 16785059
     */
    const KEY_ahook: number;

    /**
     * @default 992
     */
    const KEY_amacron: number;

    /**
     * @default 38
     */
    const KEY_ampersand: number;

    /**
     * @default 433
     */
    const KEY_aogonek: number;

    /**
     * @default 39
     */
    const KEY_apostrophe: number;

    /**
     * @default 16785992
     */
    const KEY_approxeq: number;

    /**
     * @default 2248
     */
    const KEY_approximate: number;

    /**
     * @default 229
     */
    const KEY_aring: number;

    /**
     * @default 94
     */
    const KEY_asciicircum: number;

    /**
     * @default 126
     */
    const KEY_asciitilde: number;

    /**
     * @default 42
     */
    const KEY_asterisk: number;

    /**
     * @default 64
     */
    const KEY_at: number;

    /**
     * @default 227
     */
    const KEY_atilde: number;

    /**
     * @default 98
     */
    const KEY_b: number;

    /**
     * @default 16784899
     */
    const KEY_babovedot: number;

    /**
     * @default 92
     */
    const KEY_backslash: number;

    /**
     * @default 2804
     */
    const KEY_ballotcross: number;

    /**
     * @default 124
     */
    const KEY_bar: number;

    /**
     * @default 16785973
     */
    const KEY_because: number;

    /**
     * @default 2527
     */
    const KEY_blank: number;

    /**
     * @default 2213
     */
    const KEY_botintegral: number;

    /**
     * @default 2220
     */
    const KEY_botleftparens: number;

    /**
     * @default 2216
     */
    const KEY_botleftsqbracket: number;

    /**
     * @default 2226
     */
    const KEY_botleftsummation: number;

    /**
     * @default 2222
     */
    const KEY_botrightparens: number;

    /**
     * @default 2218
     */
    const KEY_botrightsqbracket: number;

    /**
     * @default 2230
     */
    const KEY_botrightsummation: number;

    /**
     * @default 2550
     */
    const KEY_bott: number;

    /**
     * @default 2228
     */
    const KEY_botvertsummationconnector: number;

    /**
     * @default 123
     */
    const KEY_braceleft: number;

    /**
     * @default 125
     */
    const KEY_braceright: number;

    /**
     * @default 91
     */
    const KEY_bracketleft: number;

    /**
     * @default 93
     */
    const KEY_bracketright: number;

    /**
     * @default 16787456
     */
    const KEY_braille_blank: number;

    /**
     * @default 65521
     */
    const KEY_braille_dot_1: number;

    /**
     * @default 65530
     */
    const KEY_braille_dot_10: number;

    /**
     * @default 65522
     */
    const KEY_braille_dot_2: number;

    /**
     * @default 65523
     */
    const KEY_braille_dot_3: number;

    /**
     * @default 65524
     */
    const KEY_braille_dot_4: number;

    /**
     * @default 65525
     */
    const KEY_braille_dot_5: number;

    /**
     * @default 65526
     */
    const KEY_braille_dot_6: number;

    /**
     * @default 65527
     */
    const KEY_braille_dot_7: number;

    /**
     * @default 65528
     */
    const KEY_braille_dot_8: number;

    /**
     * @default 65529
     */
    const KEY_braille_dot_9: number;

    /**
     * @default 16787457
     */
    const KEY_braille_dots_1: number;

    /**
     * @default 16787459
     */
    const KEY_braille_dots_12: number;

    /**
     * @default 16787463
     */
    const KEY_braille_dots_123: number;

    /**
     * @default 16787471
     */
    const KEY_braille_dots_1234: number;

    /**
     * @default 16787487
     */
    const KEY_braille_dots_12345: number;

    /**
     * @default 16787519
     */
    const KEY_braille_dots_123456: number;

    /**
     * @default 16787583
     */
    const KEY_braille_dots_1234567: number;

    /**
     * @default 16787711
     */
    const KEY_braille_dots_12345678: number;

    /**
     * @default 16787647
     */
    const KEY_braille_dots_1234568: number;

    /**
     * @default 16787551
     */
    const KEY_braille_dots_123457: number;

    /**
     * @default 16787679
     */
    const KEY_braille_dots_1234578: number;

    /**
     * @default 16787615
     */
    const KEY_braille_dots_123458: number;

    /**
     * @default 16787503
     */
    const KEY_braille_dots_12346: number;

    /**
     * @default 16787567
     */
    const KEY_braille_dots_123467: number;

    /**
     * @default 16787695
     */
    const KEY_braille_dots_1234678: number;

    /**
     * @default 16787631
     */
    const KEY_braille_dots_123468: number;

    /**
     * @default 16787535
     */
    const KEY_braille_dots_12347: number;

    /**
     * @default 16787663
     */
    const KEY_braille_dots_123478: number;

    /**
     * @default 16787599
     */
    const KEY_braille_dots_12348: number;

    /**
     * @default 16787479
     */
    const KEY_braille_dots_1235: number;

    /**
     * @default 16787511
     */
    const KEY_braille_dots_12356: number;

    /**
     * @default 16787575
     */
    const KEY_braille_dots_123567: number;

    /**
     * @default 16787703
     */
    const KEY_braille_dots_1235678: number;

    /**
     * @default 16787639
     */
    const KEY_braille_dots_123568: number;

    /**
     * @default 16787543
     */
    const KEY_braille_dots_12357: number;

    /**
     * @default 16787671
     */
    const KEY_braille_dots_123578: number;

    /**
     * @default 16787607
     */
    const KEY_braille_dots_12358: number;

    /**
     * @default 16787495
     */
    const KEY_braille_dots_1236: number;

    /**
     * @default 16787559
     */
    const KEY_braille_dots_12367: number;

    /**
     * @default 16787687
     */
    const KEY_braille_dots_123678: number;

    /**
     * @default 16787623
     */
    const KEY_braille_dots_12368: number;

    /**
     * @default 16787527
     */
    const KEY_braille_dots_1237: number;

    /**
     * @default 16787655
     */
    const KEY_braille_dots_12378: number;

    /**
     * @default 16787591
     */
    const KEY_braille_dots_1238: number;

    /**
     * @default 16787467
     */
    const KEY_braille_dots_124: number;

    /**
     * @default 16787483
     */
    const KEY_braille_dots_1245: number;

    /**
     * @default 16787515
     */
    const KEY_braille_dots_12456: number;

    /**
     * @default 16787579
     */
    const KEY_braille_dots_124567: number;

    /**
     * @default 16787707
     */
    const KEY_braille_dots_1245678: number;

    /**
     * @default 16787643
     */
    const KEY_braille_dots_124568: number;

    /**
     * @default 16787547
     */
    const KEY_braille_dots_12457: number;

    /**
     * @default 16787675
     */
    const KEY_braille_dots_124578: number;

    /**
     * @default 16787611
     */
    const KEY_braille_dots_12458: number;

    /**
     * @default 16787499
     */
    const KEY_braille_dots_1246: number;

    /**
     * @default 16787563
     */
    const KEY_braille_dots_12467: number;

    /**
     * @default 16787691
     */
    const KEY_braille_dots_124678: number;

    /**
     * @default 16787627
     */
    const KEY_braille_dots_12468: number;

    /**
     * @default 16787531
     */
    const KEY_braille_dots_1247: number;

    /**
     * @default 16787659
     */
    const KEY_braille_dots_12478: number;

    /**
     * @default 16787595
     */
    const KEY_braille_dots_1248: number;

    /**
     * @default 16787475
     */
    const KEY_braille_dots_125: number;

    /**
     * @default 16787507
     */
    const KEY_braille_dots_1256: number;

    /**
     * @default 16787571
     */
    const KEY_braille_dots_12567: number;

    /**
     * @default 16787699
     */
    const KEY_braille_dots_125678: number;

    /**
     * @default 16787635
     */
    const KEY_braille_dots_12568: number;

    /**
     * @default 16787539
     */
    const KEY_braille_dots_1257: number;

    /**
     * @default 16787667
     */
    const KEY_braille_dots_12578: number;

    /**
     * @default 16787603
     */
    const KEY_braille_dots_1258: number;

    /**
     * @default 16787491
     */
    const KEY_braille_dots_126: number;

    /**
     * @default 16787555
     */
    const KEY_braille_dots_1267: number;

    /**
     * @default 16787683
     */
    const KEY_braille_dots_12678: number;

    /**
     * @default 16787619
     */
    const KEY_braille_dots_1268: number;

    /**
     * @default 16787523
     */
    const KEY_braille_dots_127: number;

    /**
     * @default 16787651
     */
    const KEY_braille_dots_1278: number;

    /**
     * @default 16787587
     */
    const KEY_braille_dots_128: number;

    /**
     * @default 16787461
     */
    const KEY_braille_dots_13: number;

    /**
     * @default 16787469
     */
    const KEY_braille_dots_134: number;

    /**
     * @default 16787485
     */
    const KEY_braille_dots_1345: number;

    /**
     * @default 16787517
     */
    const KEY_braille_dots_13456: number;

    /**
     * @default 16787581
     */
    const KEY_braille_dots_134567: number;

    /**
     * @default 16787709
     */
    const KEY_braille_dots_1345678: number;

    /**
     * @default 16787645
     */
    const KEY_braille_dots_134568: number;

    /**
     * @default 16787549
     */
    const KEY_braille_dots_13457: number;

    /**
     * @default 16787677
     */
    const KEY_braille_dots_134578: number;

    /**
     * @default 16787613
     */
    const KEY_braille_dots_13458: number;

    /**
     * @default 16787501
     */
    const KEY_braille_dots_1346: number;

    /**
     * @default 16787565
     */
    const KEY_braille_dots_13467: number;

    /**
     * @default 16787693
     */
    const KEY_braille_dots_134678: number;

    /**
     * @default 16787629
     */
    const KEY_braille_dots_13468: number;

    /**
     * @default 16787533
     */
    const KEY_braille_dots_1347: number;

    /**
     * @default 16787661
     */
    const KEY_braille_dots_13478: number;

    /**
     * @default 16787597
     */
    const KEY_braille_dots_1348: number;

    /**
     * @default 16787477
     */
    const KEY_braille_dots_135: number;

    /**
     * @default 16787509
     */
    const KEY_braille_dots_1356: number;

    /**
     * @default 16787573
     */
    const KEY_braille_dots_13567: number;

    /**
     * @default 16787701
     */
    const KEY_braille_dots_135678: number;

    /**
     * @default 16787637
     */
    const KEY_braille_dots_13568: number;

    /**
     * @default 16787541
     */
    const KEY_braille_dots_1357: number;

    /**
     * @default 16787669
     */
    const KEY_braille_dots_13578: number;

    /**
     * @default 16787605
     */
    const KEY_braille_dots_1358: number;

    /**
     * @default 16787493
     */
    const KEY_braille_dots_136: number;

    /**
     * @default 16787557
     */
    const KEY_braille_dots_1367: number;

    /**
     * @default 16787685
     */
    const KEY_braille_dots_13678: number;

    /**
     * @default 16787621
     */
    const KEY_braille_dots_1368: number;

    /**
     * @default 16787525
     */
    const KEY_braille_dots_137: number;

    /**
     * @default 16787653
     */
    const KEY_braille_dots_1378: number;

    /**
     * @default 16787589
     */
    const KEY_braille_dots_138: number;

    /**
     * @default 16787465
     */
    const KEY_braille_dots_14: number;

    /**
     * @default 16787481
     */
    const KEY_braille_dots_145: number;

    /**
     * @default 16787513
     */
    const KEY_braille_dots_1456: number;

    /**
     * @default 16787577
     */
    const KEY_braille_dots_14567: number;

    /**
     * @default 16787705
     */
    const KEY_braille_dots_145678: number;

    /**
     * @default 16787641
     */
    const KEY_braille_dots_14568: number;

    /**
     * @default 16787545
     */
    const KEY_braille_dots_1457: number;

    /**
     * @default 16787673
     */
    const KEY_braille_dots_14578: number;

    /**
     * @default 16787609
     */
    const KEY_braille_dots_1458: number;

    /**
     * @default 16787497
     */
    const KEY_braille_dots_146: number;

    /**
     * @default 16787561
     */
    const KEY_braille_dots_1467: number;

    /**
     * @default 16787689
     */
    const KEY_braille_dots_14678: number;

    /**
     * @default 16787625
     */
    const KEY_braille_dots_1468: number;

    /**
     * @default 16787529
     */
    const KEY_braille_dots_147: number;

    /**
     * @default 16787657
     */
    const KEY_braille_dots_1478: number;

    /**
     * @default 16787593
     */
    const KEY_braille_dots_148: number;

    /**
     * @default 16787473
     */
    const KEY_braille_dots_15: number;

    /**
     * @default 16787505
     */
    const KEY_braille_dots_156: number;

    /**
     * @default 16787569
     */
    const KEY_braille_dots_1567: number;

    /**
     * @default 16787697
     */
    const KEY_braille_dots_15678: number;

    /**
     * @default 16787633
     */
    const KEY_braille_dots_1568: number;

    /**
     * @default 16787537
     */
    const KEY_braille_dots_157: number;

    /**
     * @default 16787665
     */
    const KEY_braille_dots_1578: number;

    /**
     * @default 16787601
     */
    const KEY_braille_dots_158: number;

    /**
     * @default 16787489
     */
    const KEY_braille_dots_16: number;

    /**
     * @default 16787553
     */
    const KEY_braille_dots_167: number;

    /**
     * @default 16787681
     */
    const KEY_braille_dots_1678: number;

    /**
     * @default 16787617
     */
    const KEY_braille_dots_168: number;

    /**
     * @default 16787521
     */
    const KEY_braille_dots_17: number;

    /**
     * @default 16787649
     */
    const KEY_braille_dots_178: number;

    /**
     * @default 16787585
     */
    const KEY_braille_dots_18: number;

    /**
     * @default 16787458
     */
    const KEY_braille_dots_2: number;

    /**
     * @default 16787462
     */
    const KEY_braille_dots_23: number;

    /**
     * @default 16787470
     */
    const KEY_braille_dots_234: number;

    /**
     * @default 16787486
     */
    const KEY_braille_dots_2345: number;

    /**
     * @default 16787518
     */
    const KEY_braille_dots_23456: number;

    /**
     * @default 16787582
     */
    const KEY_braille_dots_234567: number;

    /**
     * @default 16787710
     */
    const KEY_braille_dots_2345678: number;

    /**
     * @default 16787646
     */
    const KEY_braille_dots_234568: number;

    /**
     * @default 16787550
     */
    const KEY_braille_dots_23457: number;

    /**
     * @default 16787678
     */
    const KEY_braille_dots_234578: number;

    /**
     * @default 16787614
     */
    const KEY_braille_dots_23458: number;

    /**
     * @default 16787502
     */
    const KEY_braille_dots_2346: number;

    /**
     * @default 16787566
     */
    const KEY_braille_dots_23467: number;

    /**
     * @default 16787694
     */
    const KEY_braille_dots_234678: number;

    /**
     * @default 16787630
     */
    const KEY_braille_dots_23468: number;

    /**
     * @default 16787534
     */
    const KEY_braille_dots_2347: number;

    /**
     * @default 16787662
     */
    const KEY_braille_dots_23478: number;

    /**
     * @default 16787598
     */
    const KEY_braille_dots_2348: number;

    /**
     * @default 16787478
     */
    const KEY_braille_dots_235: number;

    /**
     * @default 16787510
     */
    const KEY_braille_dots_2356: number;

    /**
     * @default 16787574
     */
    const KEY_braille_dots_23567: number;

    /**
     * @default 16787702
     */
    const KEY_braille_dots_235678: number;

    /**
     * @default 16787638
     */
    const KEY_braille_dots_23568: number;

    /**
     * @default 16787542
     */
    const KEY_braille_dots_2357: number;

    /**
     * @default 16787670
     */
    const KEY_braille_dots_23578: number;

    /**
     * @default 16787606
     */
    const KEY_braille_dots_2358: number;

    /**
     * @default 16787494
     */
    const KEY_braille_dots_236: number;

    /**
     * @default 16787558
     */
    const KEY_braille_dots_2367: number;

    /**
     * @default 16787686
     */
    const KEY_braille_dots_23678: number;

    /**
     * @default 16787622
     */
    const KEY_braille_dots_2368: number;

    /**
     * @default 16787526
     */
    const KEY_braille_dots_237: number;

    /**
     * @default 16787654
     */
    const KEY_braille_dots_2378: number;

    /**
     * @default 16787590
     */
    const KEY_braille_dots_238: number;

    /**
     * @default 16787466
     */
    const KEY_braille_dots_24: number;

    /**
     * @default 16787482
     */
    const KEY_braille_dots_245: number;

    /**
     * @default 16787514
     */
    const KEY_braille_dots_2456: number;

    /**
     * @default 16787578
     */
    const KEY_braille_dots_24567: number;

    /**
     * @default 16787706
     */
    const KEY_braille_dots_245678: number;

    /**
     * @default 16787642
     */
    const KEY_braille_dots_24568: number;

    /**
     * @default 16787546
     */
    const KEY_braille_dots_2457: number;

    /**
     * @default 16787674
     */
    const KEY_braille_dots_24578: number;

    /**
     * @default 16787610
     */
    const KEY_braille_dots_2458: number;

    /**
     * @default 16787498
     */
    const KEY_braille_dots_246: number;

    /**
     * @default 16787562
     */
    const KEY_braille_dots_2467: number;

    /**
     * @default 16787690
     */
    const KEY_braille_dots_24678: number;

    /**
     * @default 16787626
     */
    const KEY_braille_dots_2468: number;

    /**
     * @default 16787530
     */
    const KEY_braille_dots_247: number;

    /**
     * @default 16787658
     */
    const KEY_braille_dots_2478: number;

    /**
     * @default 16787594
     */
    const KEY_braille_dots_248: number;

    /**
     * @default 16787474
     */
    const KEY_braille_dots_25: number;

    /**
     * @default 16787506
     */
    const KEY_braille_dots_256: number;

    /**
     * @default 16787570
     */
    const KEY_braille_dots_2567: number;

    /**
     * @default 16787698
     */
    const KEY_braille_dots_25678: number;

    /**
     * @default 16787634
     */
    const KEY_braille_dots_2568: number;

    /**
     * @default 16787538
     */
    const KEY_braille_dots_257: number;

    /**
     * @default 16787666
     */
    const KEY_braille_dots_2578: number;

    /**
     * @default 16787602
     */
    const KEY_braille_dots_258: number;

    /**
     * @default 16787490
     */
    const KEY_braille_dots_26: number;

    /**
     * @default 16787554
     */
    const KEY_braille_dots_267: number;

    /**
     * @default 16787682
     */
    const KEY_braille_dots_2678: number;

    /**
     * @default 16787618
     */
    const KEY_braille_dots_268: number;

    /**
     * @default 16787522
     */
    const KEY_braille_dots_27: number;

    /**
     * @default 16787650
     */
    const KEY_braille_dots_278: number;

    /**
     * @default 16787586
     */
    const KEY_braille_dots_28: number;

    /**
     * @default 16787460
     */
    const KEY_braille_dots_3: number;

    /**
     * @default 16787468
     */
    const KEY_braille_dots_34: number;

    /**
     * @default 16787484
     */
    const KEY_braille_dots_345: number;

    /**
     * @default 16787516
     */
    const KEY_braille_dots_3456: number;

    /**
     * @default 16787580
     */
    const KEY_braille_dots_34567: number;

    /**
     * @default 16787708
     */
    const KEY_braille_dots_345678: number;

    /**
     * @default 16787644
     */
    const KEY_braille_dots_34568: number;

    /**
     * @default 16787548
     */
    const KEY_braille_dots_3457: number;

    /**
     * @default 16787676
     */
    const KEY_braille_dots_34578: number;

    /**
     * @default 16787612
     */
    const KEY_braille_dots_3458: number;

    /**
     * @default 16787500
     */
    const KEY_braille_dots_346: number;

    /**
     * @default 16787564
     */
    const KEY_braille_dots_3467: number;

    /**
     * @default 16787692
     */
    const KEY_braille_dots_34678: number;

    /**
     * @default 16787628
     */
    const KEY_braille_dots_3468: number;

    /**
     * @default 16787532
     */
    const KEY_braille_dots_347: number;

    /**
     * @default 16787660
     */
    const KEY_braille_dots_3478: number;

    /**
     * @default 16787596
     */
    const KEY_braille_dots_348: number;

    /**
     * @default 16787476
     */
    const KEY_braille_dots_35: number;

    /**
     * @default 16787508
     */
    const KEY_braille_dots_356: number;

    /**
     * @default 16787572
     */
    const KEY_braille_dots_3567: number;

    /**
     * @default 16787700
     */
    const KEY_braille_dots_35678: number;

    /**
     * @default 16787636
     */
    const KEY_braille_dots_3568: number;

    /**
     * @default 16787540
     */
    const KEY_braille_dots_357: number;

    /**
     * @default 16787668
     */
    const KEY_braille_dots_3578: number;

    /**
     * @default 16787604
     */
    const KEY_braille_dots_358: number;

    /**
     * @default 16787492
     */
    const KEY_braille_dots_36: number;

    /**
     * @default 16787556
     */
    const KEY_braille_dots_367: number;

    /**
     * @default 16787684
     */
    const KEY_braille_dots_3678: number;

    /**
     * @default 16787620
     */
    const KEY_braille_dots_368: number;

    /**
     * @default 16787524
     */
    const KEY_braille_dots_37: number;

    /**
     * @default 16787652
     */
    const KEY_braille_dots_378: number;

    /**
     * @default 16787588
     */
    const KEY_braille_dots_38: number;

    /**
     * @default 16787464
     */
    const KEY_braille_dots_4: number;

    /**
     * @default 16787480
     */
    const KEY_braille_dots_45: number;

    /**
     * @default 16787512
     */
    const KEY_braille_dots_456: number;

    /**
     * @default 16787576
     */
    const KEY_braille_dots_4567: number;

    /**
     * @default 16787704
     */
    const KEY_braille_dots_45678: number;

    /**
     * @default 16787640
     */
    const KEY_braille_dots_4568: number;

    /**
     * @default 16787544
     */
    const KEY_braille_dots_457: number;

    /**
     * @default 16787672
     */
    const KEY_braille_dots_4578: number;

    /**
     * @default 16787608
     */
    const KEY_braille_dots_458: number;

    /**
     * @default 16787496
     */
    const KEY_braille_dots_46: number;

    /**
     * @default 16787560
     */
    const KEY_braille_dots_467: number;

    /**
     * @default 16787688
     */
    const KEY_braille_dots_4678: number;

    /**
     * @default 16787624
     */
    const KEY_braille_dots_468: number;

    /**
     * @default 16787528
     */
    const KEY_braille_dots_47: number;

    /**
     * @default 16787656
     */
    const KEY_braille_dots_478: number;

    /**
     * @default 16787592
     */
    const KEY_braille_dots_48: number;

    /**
     * @default 16787472
     */
    const KEY_braille_dots_5: number;

    /**
     * @default 16787504
     */
    const KEY_braille_dots_56: number;

    /**
     * @default 16787568
     */
    const KEY_braille_dots_567: number;

    /**
     * @default 16787696
     */
    const KEY_braille_dots_5678: number;

    /**
     * @default 16787632
     */
    const KEY_braille_dots_568: number;

    /**
     * @default 16787536
     */
    const KEY_braille_dots_57: number;

    /**
     * @default 16787664
     */
    const KEY_braille_dots_578: number;

    /**
     * @default 16787600
     */
    const KEY_braille_dots_58: number;

    /**
     * @default 16787488
     */
    const KEY_braille_dots_6: number;

    /**
     * @default 16787552
     */
    const KEY_braille_dots_67: number;

    /**
     * @default 16787680
     */
    const KEY_braille_dots_678: number;

    /**
     * @default 16787616
     */
    const KEY_braille_dots_68: number;

    /**
     * @default 16787520
     */
    const KEY_braille_dots_7: number;

    /**
     * @default 16787648
     */
    const KEY_braille_dots_78: number;

    /**
     * @default 16787584
     */
    const KEY_braille_dots_8: number;

    /**
     * @default 418
     */
    const KEY_breve: number;

    /**
     * @default 166
     */
    const KEY_brokenbar: number;

    /**
     * @default 99
     */
    const KEY_c: number;

    /**
     * @default 741
     */
    const KEY_cabovedot: number;

    /**
     * @default 486
     */
    const KEY_cacute: number;

    /**
     * @default 2744
     */
    const KEY_careof: number;

    /**
     * @default 2812
     */
    const KEY_caret: number;

    /**
     * @default 439
     */
    const KEY_caron: number;

    /**
     * @default 488
     */
    const KEY_ccaron: number;

    /**
     * @default 231
     */
    const KEY_ccedilla: number;

    /**
     * @default 742
     */
    const KEY_ccircumflex: number;

    /**
     * @default 184
     */
    const KEY_cedilla: number;

    /**
     * @default 162
     */
    const KEY_cent: number;

    /**
     * @default 2529
     */
    const KEY_checkerboard: number;

    /**
     * @default 2803
     */
    const KEY_checkmark: number;

    /**
     * @default 3023
     */
    const KEY_circle: number;

    /**
     * @default 2796
     */
    const KEY_club: number;

    /**
     * @default 58
     */
    const KEY_colon: number;

    /**
     * @default 44
     */
    const KEY_comma: number;

    /**
     * @default 16785931
     */
    const KEY_containsas: number;

    /**
     * @default 169
     */
    const KEY_copyright: number;

    /**
     * @default 2532
     */
    const KEY_cr: number;

    /**
     * @default 2542
     */
    const KEY_crossinglines: number;

    /**
     * @default 16785947
     */
    const KEY_cuberoot: number;

    /**
     * @default 164
     */
    const KEY_currency: number;

    /**
     * @default 2815
     */
    const KEY_cursor: number;

    /**
     * @default 100
     */
    const KEY_d: number;

    /**
     * @default 16784907
     */
    const KEY_dabovedot: number;

    /**
     * @default 2801
     */
    const KEY_dagger: number;

    /**
     * @default 495
     */
    const KEY_dcaron: number;

    /**
     * @default 65153
     */
    const KEY_dead_A: number;

    /**
     * @default 65155
     */
    const KEY_dead_E: number;

    /**
     * @default 65157
     */
    const KEY_dead_I: number;

    /**
     * @default 65159
     */
    const KEY_dead_O: number;

    /**
     * @default 65161
     */
    const KEY_dead_U: number;

    /**
     * @default 65152
     */
    const KEY_dead_a: number;

    /**
     * @default 65124
     */
    const KEY_dead_abovecomma: number;

    /**
     * @default 65110
     */
    const KEY_dead_abovedot: number;

    /**
     * @default 65125
     */
    const KEY_dead_abovereversedcomma: number;

    /**
     * @default 65112
     */
    const KEY_dead_abovering: number;

    /**
     * @default 65105
     */
    const KEY_dead_acute: number;

    /**
     * @default 65131
     */
    const KEY_dead_belowbreve: number;

    /**
     * @default 65129
     */
    const KEY_dead_belowcircumflex: number;

    /**
     * @default 65134
     */
    const KEY_dead_belowcomma: number;

    /**
     * @default 65132
     */
    const KEY_dead_belowdiaeresis: number;

    /**
     * @default 65120
     */
    const KEY_dead_belowdot: number;

    /**
     * @default 65128
     */
    const KEY_dead_belowmacron: number;

    /**
     * @default 65127
     */
    const KEY_dead_belowring: number;

    /**
     * @default 65130
     */
    const KEY_dead_belowtilde: number;

    /**
     * @default 65109
     */
    const KEY_dead_breve: number;

    /**
     * @default 65163
     */
    const KEY_dead_capital_schwa: number;

    /**
     * @default 65114
     */
    const KEY_dead_caron: number;

    /**
     * @default 65115
     */
    const KEY_dead_cedilla: number;

    /**
     * @default 65106
     */
    const KEY_dead_circumflex: number;

    /**
     * @default 65135
     */
    const KEY_dead_currency: number;

    /**
     * @default 65125
     */
    const KEY_dead_dasia: number;

    /**
     * @default 65111
     */
    const KEY_dead_diaeresis: number;

    /**
     * @default 65113
     */
    const KEY_dead_doubleacute: number;

    /**
     * @default 65126
     */
    const KEY_dead_doublegrave: number;

    /**
     * @default 65154
     */
    const KEY_dead_e: number;

    /**
     * @default 65104
     */
    const KEY_dead_grave: number;

    /**
     * @default 65121
     */
    const KEY_dead_hook: number;

    /**
     * @default 65122
     */
    const KEY_dead_horn: number;

    /**
     * @default 65156
     */
    const KEY_dead_i: number;

    /**
     * @default 65133
     */
    const KEY_dead_invertedbreve: number;

    /**
     * @default 65117
     */
    const KEY_dead_iota: number;

    /**
     * @default 65108
     */
    const KEY_dead_macron: number;

    /**
     * @default 65158
     */
    const KEY_dead_o: number;

    /**
     * @default 65116
     */
    const KEY_dead_ogonek: number;

    /**
     * @default 65107
     */
    const KEY_dead_perispomeni: number;

    /**
     * @default 65124
     */
    const KEY_dead_psili: number;

    /**
     * @default 65119
     */
    const KEY_dead_semivoiced_sound: number;

    /**
     * @default 65162
     */
    const KEY_dead_small_schwa: number;

    /**
     * @default 65123
     */
    const KEY_dead_stroke: number;

    /**
     * @default 65107
     */
    const KEY_dead_tilde: number;

    /**
     * @default 65160
     */
    const KEY_dead_u: number;

    /**
     * @default 65118
     */
    const KEY_dead_voiced_sound: number;

    /**
     * @default 2749
     */
    const KEY_decimalpoint: number;

    /**
     * @default 176
     */
    const KEY_degree: number;

    /**
     * @default 168
     */
    const KEY_diaeresis: number;

    /**
     * @default 2797
     */
    const KEY_diamond: number;

    /**
     * @default 2725
     */
    const KEY_digitspace: number;

    /**
     * @default 16785964
     */
    const KEY_dintegral: number;

    /**
     * @default 247
     */
    const KEY_division: number;

    /**
     * @default 36
     */
    const KEY_dollar: number;

    /**
     * @default 2735
     */
    const KEY_doubbaselinedot: number;

    /**
     * @default 445
     */
    const KEY_doubleacute: number;

    /**
     * @default 2802
     */
    const KEY_doubledagger: number;

    /**
     * @default 2814
     */
    const KEY_doublelowquotemark: number;

    /**
     * @default 2302
     */
    const KEY_downarrow: number;

    /**
     * @default 2984
     */
    const KEY_downcaret: number;

    /**
     * @default 3030
     */
    const KEY_downshoe: number;

    /**
     * @default 3012
     */
    const KEY_downstile: number;

    /**
     * @default 3010
     */
    const KEY_downtack: number;

    /**
     * @default 496
     */
    const KEY_dstroke: number;

    /**
     * @default 101
     */
    const KEY_e: number;

    /**
     * @default 1004
     */
    const KEY_eabovedot: number;

    /**
     * @default 233
     */
    const KEY_eacute: number;

    /**
     * @default 16785081
     */
    const KEY_ebelowdot: number;

    /**
     * @default 492
     */
    const KEY_ecaron: number;

    /**
     * @default 234
     */
    const KEY_ecircumflex: number;

    /**
     * @default 16785087
     */
    const KEY_ecircumflexacute: number;

    /**
     * @default 16785095
     */
    const KEY_ecircumflexbelowdot: number;

    /**
     * @default 16785089
     */
    const KEY_ecircumflexgrave: number;

    /**
     * @default 16785091
     */
    const KEY_ecircumflexhook: number;

    /**
     * @default 16785093
     */
    const KEY_ecircumflextilde: number;

    /**
     * @default 235
     */
    const KEY_ediaeresis: number;

    /**
     * @default 232
     */
    const KEY_egrave: number;

    /**
     * @default 16785083
     */
    const KEY_ehook: number;

    /**
     * @default 16785544
     */
    const KEY_eightsubscript: number;

    /**
     * @default 16785528
     */
    const KEY_eightsuperior: number;

    /**
     * @default 16785928
     */
    const KEY_elementof: number;

    /**
     * @default 2734
     */
    const KEY_ellipsis: number;

    /**
     * @default 2723
     */
    const KEY_em3space: number;

    /**
     * @default 2724
     */
    const KEY_em4space: number;

    /**
     * @default 954
     */
    const KEY_emacron: number;

    /**
     * @default 2729
     */
    const KEY_emdash: number;

    /**
     * @default 2782
     */
    const KEY_emfilledcircle: number;

    /**
     * @default 2783
     */
    const KEY_emfilledrect: number;

    /**
     * @default 2766
     */
    const KEY_emopencircle: number;

    /**
     * @default 2767
     */
    const KEY_emopenrectangle: number;

    /**
     * @default 16785925
     */
    const KEY_emptyset: number;

    /**
     * @default 2721
     */
    const KEY_emspace: number;

    /**
     * @default 2730
     */
    const KEY_endash: number;

    /**
     * @default 2790
     */
    const KEY_enfilledcircbullet: number;

    /**
     * @default 2791
     */
    const KEY_enfilledsqbullet: number;

    /**
     * @default 959
     */
    const KEY_eng: number;

    /**
     * @default 2784
     */
    const KEY_enopencircbullet: number;

    /**
     * @default 2785
     */
    const KEY_enopensquarebullet: number;

    /**
     * @default 2722
     */
    const KEY_enspace: number;

    /**
     * @default 490
     */
    const KEY_eogonek: number;

    /**
     * @default 61
     */
    const KEY_equal: number;

    /**
     * @default 240
     */
    const KEY_eth: number;

    /**
     * @default 16785085
     */
    const KEY_etilde: number;

    /**
     * @default 33
     */
    const KEY_exclam: number;

    /**
     * @default 161
     */
    const KEY_exclamdown: number;

    /**
     * @default 102
     */
    const KEY_f: number;

    /**
     * @default 16784927
     */
    const KEY_fabovedot: number;

    /**
     * @default 2808
     */
    const KEY_femalesymbol: number;

    /**
     * @default 2531
     */
    const KEY_ff: number;

    /**
     * @default 2747
     */
    const KEY_figdash: number;

    /**
     * @default 2780
     */
    const KEY_filledlefttribullet: number;

    /**
     * @default 2779
     */
    const KEY_filledrectbullet: number;

    /**
     * @default 2781
     */
    const KEY_filledrighttribullet: number;

    /**
     * @default 2793
     */
    const KEY_filledtribulletdown: number;

    /**
     * @default 2792
     */
    const KEY_filledtribulletup: number;

    /**
     * @default 2757
     */
    const KEY_fiveeighths: number;

    /**
     * @default 2743
     */
    const KEY_fivesixths: number;

    /**
     * @default 16785541
     */
    const KEY_fivesubscript: number;

    /**
     * @default 16785525
     */
    const KEY_fivesuperior: number;

    /**
     * @default 2741
     */
    const KEY_fourfifths: number;

    /**
     * @default 16785540
     */
    const KEY_foursubscript: number;

    /**
     * @default 16785524
     */
    const KEY_foursuperior: number;

    /**
     * @default 16785948
     */
    const KEY_fourthroot: number;

    /**
     * @default 2294
     */
    const KEY_function: number;

    /**
     * @default 103
     */
    const KEY_g: number;

    /**
     * @default 757
     */
    const KEY_gabovedot: number;

    /**
     * @default 699
     */
    const KEY_gbreve: number;

    /**
     * @default 16777703
     */
    const KEY_gcaron: number;

    /**
     * @default 955
     */
    const KEY_gcedilla: number;

    /**
     * @default 760
     */
    const KEY_gcircumflex: number;

    /**
     * @default 96
     */
    const KEY_grave: number;

    /**
     * @default 62
     */
    const KEY_greater: number;

    /**
     * @default 2238
     */
    const KEY_greaterthanequal: number;

    /**
     * @default 171
     */
    const KEY_guillemotleft: number;

    /**
     * @default 187
     */
    const KEY_guillemotright: number;

    /**
     * @default 104
     */
    const KEY_h: number;

    /**
     * @default 2728
     */
    const KEY_hairspace: number;

    /**
     * @default 694
     */
    const KEY_hcircumflex: number;

    /**
     * @default 2798
     */
    const KEY_heart: number;

    /**
     * @default 3296
     */
    const KEY_hebrew_aleph: number;

    /**
     * @default 3314
     */
    const KEY_hebrew_ayin: number;

    /**
     * @default 3297
     */
    const KEY_hebrew_bet: number;

    /**
     * @default 3297
     */
    const KEY_hebrew_beth: number;

    /**
     * @default 3303
     */
    const KEY_hebrew_chet: number;

    /**
     * @default 3299
     */
    const KEY_hebrew_dalet: number;

    /**
     * @default 3299
     */
    const KEY_hebrew_daleth: number;

    /**
     * @default 3295
     */
    const KEY_hebrew_doublelowline: number;

    /**
     * @default 3306
     */
    const KEY_hebrew_finalkaph: number;

    /**
     * @default 3309
     */
    const KEY_hebrew_finalmem: number;

    /**
     * @default 3311
     */
    const KEY_hebrew_finalnun: number;

    /**
     * @default 3315
     */
    const KEY_hebrew_finalpe: number;

    /**
     * @default 3317
     */
    const KEY_hebrew_finalzade: number;

    /**
     * @default 3317
     */
    const KEY_hebrew_finalzadi: number;

    /**
     * @default 3298
     */
    const KEY_hebrew_gimel: number;

    /**
     * @default 3298
     */
    const KEY_hebrew_gimmel: number;

    /**
     * @default 3300
     */
    const KEY_hebrew_he: number;

    /**
     * @default 3303
     */
    const KEY_hebrew_het: number;

    /**
     * @default 3307
     */
    const KEY_hebrew_kaph: number;

    /**
     * @default 3319
     */
    const KEY_hebrew_kuf: number;

    /**
     * @default 3308
     */
    const KEY_hebrew_lamed: number;

    /**
     * @default 3310
     */
    const KEY_hebrew_mem: number;

    /**
     * @default 3312
     */
    const KEY_hebrew_nun: number;

    /**
     * @default 3316
     */
    const KEY_hebrew_pe: number;

    /**
     * @default 3319
     */
    const KEY_hebrew_qoph: number;

    /**
     * @default 3320
     */
    const KEY_hebrew_resh: number;

    /**
     * @default 3313
     */
    const KEY_hebrew_samech: number;

    /**
     * @default 3313
     */
    const KEY_hebrew_samekh: number;

    /**
     * @default 3321
     */
    const KEY_hebrew_shin: number;

    /**
     * @default 3322
     */
    const KEY_hebrew_taf: number;

    /**
     * @default 3322
     */
    const KEY_hebrew_taw: number;

    /**
     * @default 3304
     */
    const KEY_hebrew_tet: number;

    /**
     * @default 3304
     */
    const KEY_hebrew_teth: number;

    /**
     * @default 3301
     */
    const KEY_hebrew_waw: number;

    /**
     * @default 3305
     */
    const KEY_hebrew_yod: number;

    /**
     * @default 3318
     */
    const KEY_hebrew_zade: number;

    /**
     * @default 3318
     */
    const KEY_hebrew_zadi: number;

    /**
     * @default 3302
     */
    const KEY_hebrew_zain: number;

    /**
     * @default 3302
     */
    const KEY_hebrew_zayin: number;

    /**
     * @default 2778
     */
    const KEY_hexagram: number;

    /**
     * @default 2211
     */
    const KEY_horizconnector: number;

    /**
     * @default 2543
     */
    const KEY_horizlinescan1: number;

    /**
     * @default 2544
     */
    const KEY_horizlinescan3: number;

    /**
     * @default 2545
     */
    const KEY_horizlinescan5: number;

    /**
     * @default 2546
     */
    const KEY_horizlinescan7: number;

    /**
     * @default 2547
     */
    const KEY_horizlinescan9: number;

    /**
     * @default 689
     */
    const KEY_hstroke: number;

    /**
     * @default 2530
     */
    const KEY_ht: number;

    /**
     * @default 173
     */
    const KEY_hyphen: number;

    /**
     * @default 105
     */
    const KEY_i: number;

    /**
     * @default 269025120
     */
    const KEY_iTouch: number;

    /**
     * @default 237
     */
    const KEY_iacute: number;

    /**
     * @default 16785099
     */
    const KEY_ibelowdot: number;

    /**
     * @default 16777517
     */
    const KEY_ibreve: number;

    /**
     * @default 238
     */
    const KEY_icircumflex: number;

    /**
     * @default 2255
     */
    const KEY_identical: number;

    /**
     * @default 239
     */
    const KEY_idiaeresis: number;

    /**
     * @default 697
     */
    const KEY_idotless: number;

    /**
     * @default 2253
     */
    const KEY_ifonlyif: number;

    /**
     * @default 236
     */
    const KEY_igrave: number;

    /**
     * @default 16785097
     */
    const KEY_ihook: number;

    /**
     * @default 1007
     */
    const KEY_imacron: number;

    /**
     * @default 2254
     */
    const KEY_implies: number;

    /**
     * @default 2266
     */
    const KEY_includedin: number;

    /**
     * @default 2267
     */
    const KEY_includes: number;

    /**
     * @default 2242
     */
    const KEY_infinity: number;

    /**
     * @default 2239
     */
    const KEY_integral: number;

    /**
     * @default 2268
     */
    const KEY_intersection: number;

    /**
     * @default 999
     */
    const KEY_iogonek: number;

    /**
     * @default 949
     */
    const KEY_itilde: number;

    /**
     * @default 106
     */
    const KEY_j: number;

    /**
     * @default 700
     */
    const KEY_jcircumflex: number;

    /**
     * @default 3018
     */
    const KEY_jot: number;

    /**
     * @default 107
     */
    const KEY_k: number;

    /**
     * @default 1201
     */
    const KEY_kana_A: number;

    /**
     * @default 1217
     */
    const KEY_kana_CHI: number;

    /**
     * @default 1204
     */
    const KEY_kana_E: number;

    /**
     * @default 1228
     */
    const KEY_kana_FU: number;

    /**
     * @default 1226
     */
    const KEY_kana_HA: number;

    /**
     * @default 1229
     */
    const KEY_kana_HE: number;

    /**
     * @default 1227
     */
    const KEY_kana_HI: number;

    /**
     * @default 1230
     */
    const KEY_kana_HO: number;

    /**
     * @default 1228
     */
    const KEY_kana_HU: number;

    /**
     * @default 1202
     */
    const KEY_kana_I: number;

    /**
     * @default 1206
     */
    const KEY_kana_KA: number;

    /**
     * @default 1209
     */
    const KEY_kana_KE: number;

    /**
     * @default 1207
     */
    const KEY_kana_KI: number;

    /**
     * @default 1210
     */
    const KEY_kana_KO: number;

    /**
     * @default 1208
     */
    const KEY_kana_KU: number;

    /**
     * @default 1231
     */
    const KEY_kana_MA: number;

    /**
     * @default 1234
     */
    const KEY_kana_ME: number;

    /**
     * @default 1232
     */
    const KEY_kana_MI: number;

    /**
     * @default 1235
     */
    const KEY_kana_MO: number;

    /**
     * @default 1233
     */
    const KEY_kana_MU: number;

    /**
     * @default 1245
     */
    const KEY_kana_N: number;

    /**
     * @default 1221
     */
    const KEY_kana_NA: number;

    /**
     * @default 1224
     */
    const KEY_kana_NE: number;

    /**
     * @default 1222
     */
    const KEY_kana_NI: number;

    /**
     * @default 1225
     */
    const KEY_kana_NO: number;

    /**
     * @default 1223
     */
    const KEY_kana_NU: number;

    /**
     * @default 1205
     */
    const KEY_kana_O: number;

    /**
     * @default 1239
     */
    const KEY_kana_RA: number;

    /**
     * @default 1242
     */
    const KEY_kana_RE: number;

    /**
     * @default 1240
     */
    const KEY_kana_RI: number;

    /**
     * @default 1243
     */
    const KEY_kana_RO: number;

    /**
     * @default 1241
     */
    const KEY_kana_RU: number;

    /**
     * @default 1211
     */
    const KEY_kana_SA: number;

    /**
     * @default 1214
     */
    const KEY_kana_SE: number;

    /**
     * @default 1212
     */
    const KEY_kana_SHI: number;

    /**
     * @default 1215
     */
    const KEY_kana_SO: number;

    /**
     * @default 1213
     */
    const KEY_kana_SU: number;

    /**
     * @default 1216
     */
    const KEY_kana_TA: number;

    /**
     * @default 1219
     */
    const KEY_kana_TE: number;

    /**
     * @default 1217
     */
    const KEY_kana_TI: number;

    /**
     * @default 1220
     */
    const KEY_kana_TO: number;

    /**
     * @default 1218
     */
    const KEY_kana_TSU: number;

    /**
     * @default 1218
     */
    const KEY_kana_TU: number;

    /**
     * @default 1203
     */
    const KEY_kana_U: number;

    /**
     * @default 1244
     */
    const KEY_kana_WA: number;

    /**
     * @default 1190
     */
    const KEY_kana_WO: number;

    /**
     * @default 1236
     */
    const KEY_kana_YA: number;

    /**
     * @default 1238
     */
    const KEY_kana_YO: number;

    /**
     * @default 1237
     */
    const KEY_kana_YU: number;

    /**
     * @default 1191
     */
    const KEY_kana_a: number;

    /**
     * @default 1187
     */
    const KEY_kana_closingbracket: number;

    /**
     * @default 1188
     */
    const KEY_kana_comma: number;

    /**
     * @default 1189
     */
    const KEY_kana_conjunctive: number;

    /**
     * @default 1194
     */
    const KEY_kana_e: number;

    /**
     * @default 1185
     */
    const KEY_kana_fullstop: number;

    /**
     * @default 1192
     */
    const KEY_kana_i: number;

    /**
     * @default 1189
     */
    const KEY_kana_middledot: number;

    /**
     * @default 1195
     */
    const KEY_kana_o: number;

    /**
     * @default 1186
     */
    const KEY_kana_openingbracket: number;

    /**
     * @default 65406
     */
    const KEY_kana_switch: number;

    /**
     * @default 1199
     */
    const KEY_kana_tsu: number;

    /**
     * @default 1199
     */
    const KEY_kana_tu: number;

    /**
     * @default 1193
     */
    const KEY_kana_u: number;

    /**
     * @default 1196
     */
    const KEY_kana_ya: number;

    /**
     * @default 1198
     */
    const KEY_kana_yo: number;

    /**
     * @default 1197
     */
    const KEY_kana_yu: number;

    /**
     * @default 930
     */
    const KEY_kappa: number;

    /**
     * @default 1011
     */
    const KEY_kcedilla: number;

    /**
     * @default 930
     */
    const KEY_kra: number;

    /**
     * @default 108
     */
    const KEY_l: number;

    /**
     * @default 485
     */
    const KEY_lacute: number;

    /**
     * @default 2777
     */
    const KEY_latincross: number;

    /**
     * @default 16784951
     */
    const KEY_lbelowdot: number;

    /**
     * @default 437
     */
    const KEY_lcaron: number;

    /**
     * @default 950
     */
    const KEY_lcedilla: number;

    /**
     * @default 2748
     */
    const KEY_leftanglebracket: number;

    /**
     * @default 2299
     */
    const KEY_leftarrow: number;

    /**
     * @default 2979
     */
    const KEY_leftcaret: number;

    /**
     * @default 2770
     */
    const KEY_leftdoublequotemark: number;

    /**
     * @default 2223
     */
    const KEY_leftmiddlecurlybrace: number;

    /**
     * @default 2764
     */
    const KEY_leftopentriangle: number;

    /**
     * @default 2794
     */
    const KEY_leftpointer: number;

    /**
     * @default 2209
     */
    const KEY_leftradical: number;

    /**
     * @default 3034
     */
    const KEY_leftshoe: number;

    /**
     * @default 2768
     */
    const KEY_leftsinglequotemark: number;

    /**
     * @default 2548
     */
    const KEY_leftt: number;

    /**
     * @default 3036
     */
    const KEY_lefttack: number;

    /**
     * @default 60
     */
    const KEY_less: number;

    /**
     * @default 2236
     */
    const KEY_lessthanequal: number;

    /**
     * @default 2533
     */
    const KEY_lf: number;

    /**
     * @default 2270
     */
    const KEY_logicaland: number;

    /**
     * @default 2271
     */
    const KEY_logicalor: number;

    /**
     * @default 2541
     */
    const KEY_lowleftcorner: number;

    /**
     * @default 2538
     */
    const KEY_lowrightcorner: number;

    /**
     * @default 435
     */
    const KEY_lstroke: number;

    /**
     * @default 109
     */
    const KEY_m: number;

    /**
     * @default 16784961
     */
    const KEY_mabovedot: number;

    /**
     * @default 175
     */
    const KEY_macron: number;

    /**
     * @default 2807
     */
    const KEY_malesymbol: number;

    /**
     * @default 2800
     */
    const KEY_maltesecross: number;

    /**
     * @default 2751
     */
    const KEY_marker: number;

    /**
     * @default 186
     */
    const KEY_masculine: number;

    /**
     * @default 45
     */
    const KEY_minus: number;

    /**
     * @default 2774
     */
    const KEY_minutes: number;

    /**
     * @default 181
     */
    const KEY_mu: number;

    /**
     * @default 215
     */
    const KEY_multiply: number;

    /**
     * @default 2806
     */
    const KEY_musicalflat: number;

    /**
     * @default 2805
     */
    const KEY_musicalsharp: number;

    /**
     * @default 110
     */
    const KEY_n: number;

    /**
     * @default 2245
     */
    const KEY_nabla: number;

    /**
     * @default 497
     */
    const KEY_nacute: number;

    /**
     * @default 498
     */
    const KEY_ncaron: number;

    /**
     * @default 1009
     */
    const KEY_ncedilla: number;

    /**
     * @default 16785545
     */
    const KEY_ninesubscript: number;

    /**
     * @default 16785529
     */
    const KEY_ninesuperior: number;

    /**
     * @default 2536
     */
    const KEY_nl: number;

    /**
     * @default 160
     */
    const KEY_nobreakspace: number;

    /**
     * @default 16785991
     */
    const KEY_notapproxeq: number;

    /**
     * @default 16785929
     */
    const KEY_notelementof: number;

    /**
     * @default 2237
     */
    const KEY_notequal: number;

    /**
     * @default 16786018
     */
    const KEY_notidentical: number;

    /**
     * @default 172
     */
    const KEY_notsign: number;

    /**
     * @default 241
     */
    const KEY_ntilde: number;

    /**
     * @default 35
     */
    const KEY_numbersign: number;

    /**
     * @default 1712
     */
    const KEY_numerosign: number;

    /**
     * @default 111
     */
    const KEY_o: number;

    /**
     * @default 243
     */
    const KEY_oacute: number;

    /**
     * @default 16777845
     */
    const KEY_obarred: number;

    /**
     * @default 16785101
     */
    const KEY_obelowdot: number;

    /**
     * @default 16777682
     */
    const KEY_ocaron: number;

    /**
     * @default 244
     */
    const KEY_ocircumflex: number;

    /**
     * @default 16785105
     */
    const KEY_ocircumflexacute: number;

    /**
     * @default 16785113
     */
    const KEY_ocircumflexbelowdot: number;

    /**
     * @default 16785107
     */
    const KEY_ocircumflexgrave: number;

    /**
     * @default 16785109
     */
    const KEY_ocircumflexhook: number;

    /**
     * @default 16785111
     */
    const KEY_ocircumflextilde: number;

    /**
     * @default 246
     */
    const KEY_odiaeresis: number;

    /**
     * @default 501
     */
    const KEY_odoubleacute: number;

    /**
     * @default 5053
     */
    const KEY_oe: number;

    /**
     * @default 434
     */
    const KEY_ogonek: number;

    /**
     * @default 242
     */
    const KEY_ograve: number;

    /**
     * @default 16785103
     */
    const KEY_ohook: number;

    /**
     * @default 16777633
     */
    const KEY_ohorn: number;

    /**
     * @default 16785115
     */
    const KEY_ohornacute: number;

    /**
     * @default 16785123
     */
    const KEY_ohornbelowdot: number;

    /**
     * @default 16785117
     */
    const KEY_ohorngrave: number;

    /**
     * @default 16785119
     */
    const KEY_ohornhook: number;

    /**
     * @default 16785121
     */
    const KEY_ohorntilde: number;

    /**
     * @default 1010
     */
    const KEY_omacron: number;

    /**
     * @default 2755
     */
    const KEY_oneeighth: number;

    /**
     * @default 2738
     */
    const KEY_onefifth: number;

    /**
     * @default 189
     */
    const KEY_onehalf: number;

    /**
     * @default 188
     */
    const KEY_onequarter: number;

    /**
     * @default 2742
     */
    const KEY_onesixth: number;

    /**
     * @default 16785537
     */
    const KEY_onesubscript: number;

    /**
     * @default 185
     */
    const KEY_onesuperior: number;

    /**
     * @default 2736
     */
    const KEY_onethird: number;

    /**
     * @default 248
     */
    const KEY_ooblique: number;

    /**
     * @default 2786
     */
    const KEY_openrectbullet: number;

    /**
     * @default 2789
     */
    const KEY_openstar: number;

    /**
     * @default 2788
     */
    const KEY_opentribulletdown: number;

    /**
     * @default 2787
     */
    const KEY_opentribulletup: number;

    /**
     * @default 170
     */
    const KEY_ordfeminine: number;

    /**
     * @default 248
     */
    const KEY_oslash: number;

    /**
     * @default 245
     */
    const KEY_otilde: number;

    /**
     * @default 3008
     */
    const KEY_overbar: number;

    /**
     * @default 1150
     */
    const KEY_overline: number;

    /**
     * @default 112
     */
    const KEY_p: number;

    /**
     * @default 16784983
     */
    const KEY_pabovedot: number;

    /**
     * @default 182
     */
    const KEY_paragraph: number;

    /**
     * @default 40
     */
    const KEY_parenleft: number;

    /**
     * @default 41
     */
    const KEY_parenright: number;

    /**
     * @default 16785922
     */
    const KEY_partdifferential: number;

    /**
     * @default 2287
     */
    const KEY_partialderivative: number;

    /**
     * @default 37
     */
    const KEY_percent: number;

    /**
     * @default 46
     */
    const KEY_period: number;

    /**
     * @default 183
     */
    const KEY_periodcentered: number;

    /**
     * @default 2811
     */
    const KEY_phonographcopyright: number;

    /**
     * @default 43
     */
    const KEY_plus: number;

    /**
     * @default 177
     */
    const KEY_plusminus: number;

    /**
     * @default 2772
     */
    const KEY_prescription: number;

    /**
     * @default 1200
     */
    const KEY_prolongedsound: number;

    /**
     * @default 2726
     */
    const KEY_punctspace: number;

    /**
     * @default 113
     */
    const KEY_q: number;

    /**
     * @default 3020
     */
    const KEY_quad: number;

    /**
     * @default 63
     */
    const KEY_question: number;

    /**
     * @default 191
     */
    const KEY_questiondown: number;

    /**
     * @default 34
     */
    const KEY_quotedbl: number;

    /**
     * @default 96
     */
    const KEY_quoteleft: number;

    /**
     * @default 39
     */
    const KEY_quoteright: number;

    /**
     * @default 114
     */
    const KEY_r: number;

    /**
     * @default 480
     */
    const KEY_racute: number;

    /**
     * @default 2262
     */
    const KEY_radical: number;

    /**
     * @default 504
     */
    const KEY_rcaron: number;

    /**
     * @default 947
     */
    const KEY_rcedilla: number;

    /**
     * @default 174
     */
    const KEY_registered: number;

    /**
     * @default 2750
     */
    const KEY_rightanglebracket: number;

    /**
     * @default 2301
     */
    const KEY_rightarrow: number;

    /**
     * @default 2982
     */
    const KEY_rightcaret: number;

    /**
     * @default 2771
     */
    const KEY_rightdoublequotemark: number;

    /**
     * @default 2224
     */
    const KEY_rightmiddlecurlybrace: number;

    /**
     * @default 2231
     */
    const KEY_rightmiddlesummation: number;

    /**
     * @default 2765
     */
    const KEY_rightopentriangle: number;

    /**
     * @default 2795
     */
    const KEY_rightpointer: number;

    /**
     * @default 3032
     */
    const KEY_rightshoe: number;

    /**
     * @default 2769
     */
    const KEY_rightsinglequotemark: number;

    /**
     * @default 2549
     */
    const KEY_rightt: number;

    /**
     * @default 3068
     */
    const KEY_righttack: number;

    /**
     * @default 115
     */
    const KEY_s: number;

    /**
     * @default 16784993
     */
    const KEY_sabovedot: number;

    /**
     * @default 438
     */
    const KEY_sacute: number;

    /**
     * @default 441
     */
    const KEY_scaron: number;

    /**
     * @default 442
     */
    const KEY_scedilla: number;

    /**
     * @default 16777817
     */
    const KEY_schwa: number;

    /**
     * @default 766
     */
    const KEY_scircumflex: number;

    /**
     * @default 65406
     */
    const KEY_script_switch: number;

    /**
     * @default 2775
     */
    const KEY_seconds: number;

    /**
     * @default 167
     */
    const KEY_section: number;

    /**
     * @default 59
     */
    const KEY_semicolon: number;

    /**
     * @default 1247
     */
    const KEY_semivoicedsound: number;

    /**
     * @default 2758
     */
    const KEY_seveneighths: number;

    /**
     * @default 16785543
     */
    const KEY_sevensubscript: number;

    /**
     * @default 16785527
     */
    const KEY_sevensuperior: number;

    /**
     * @default 2762
     */
    const KEY_signaturemark: number;

    /**
     * @default 2732
     */
    const KEY_signifblank: number;

    /**
     * @default 2249
     */
    const KEY_similarequal: number;

    /**
     * @default 2813
     */
    const KEY_singlelowquotemark: number;

    /**
     * @default 16785542
     */
    const KEY_sixsubscript: number;

    /**
     * @default 16785526
     */
    const KEY_sixsuperior: number;

    /**
     * @default 47
     */
    const KEY_slash: number;

    /**
     * @default 2528
     */
    const KEY_soliddiamond: number;

    /**
     * @default 32
     */
    const KEY_space: number;

    /**
     * @default 16785946
     */
    const KEY_squareroot: number;

    /**
     * @default 223
     */
    const KEY_ssharp: number;

    /**
     * @default 163
     */
    const KEY_sterling: number;

    /**
     * @default 16786019
     */
    const KEY_stricteq: number;

    /**
     * @default 116
     */
    const KEY_t: number;

    /**
     * @default 16785003
     */
    const KEY_tabovedot: number;

    /**
     * @default 443
     */
    const KEY_tcaron: number;

    /**
     * @default 510
     */
    const KEY_tcedilla: number;

    /**
     * @default 2809
     */
    const KEY_telephone: number;

    /**
     * @default 2810
     */
    const KEY_telephonerecorder: number;

    /**
     * @default 2240
     */
    const KEY_therefore: number;

    /**
     * @default 2727
     */
    const KEY_thinspace: number;

    /**
     * @default 254
     */
    const KEY_thorn: number;

    /**
     * @default 2756
     */
    const KEY_threeeighths: number;

    /**
     * @default 2740
     */
    const KEY_threefifths: number;

    /**
     * @default 190
     */
    const KEY_threequarters: number;

    /**
     * @default 16785539
     */
    const KEY_threesubscript: number;

    /**
     * @default 179
     */
    const KEY_threesuperior: number;

    /**
     * @default 16785965
     */
    const KEY_tintegral: number;

    /**
     * @default 2212
     */
    const KEY_topintegral: number;

    /**
     * @default 2219
     */
    const KEY_topleftparens: number;

    /**
     * @default 2210
     */
    const KEY_topleftradical: number;

    /**
     * @default 2215
     */
    const KEY_topleftsqbracket: number;

    /**
     * @default 2225
     */
    const KEY_topleftsummation: number;

    /**
     * @default 2221
     */
    const KEY_toprightparens: number;

    /**
     * @default 2217
     */
    const KEY_toprightsqbracket: number;

    /**
     * @default 2229
     */
    const KEY_toprightsummation: number;

    /**
     * @default 2551
     */
    const KEY_topt: number;

    /**
     * @default 2227
     */
    const KEY_topvertsummationconnector: number;

    /**
     * @default 2761
     */
    const KEY_trademark: number;

    /**
     * @default 2763
     */
    const KEY_trademarkincircle: number;

    /**
     * @default 956
     */
    const KEY_tslash: number;

    /**
     * @default 2739
     */
    const KEY_twofifths: number;

    /**
     * @default 16785538
     */
    const KEY_twosubscript: number;

    /**
     * @default 178
     */
    const KEY_twosuperior: number;

    /**
     * @default 2737
     */
    const KEY_twothirds: number;

    /**
     * @default 117
     */
    const KEY_u: number;

    /**
     * @default 250
     */
    const KEY_uacute: number;

    /**
     * @default 16785125
     */
    const KEY_ubelowdot: number;

    /**
     * @default 765
     */
    const KEY_ubreve: number;

    /**
     * @default 251
     */
    const KEY_ucircumflex: number;

    /**
     * @default 252
     */
    const KEY_udiaeresis: number;

    /**
     * @default 507
     */
    const KEY_udoubleacute: number;

    /**
     * @default 249
     */
    const KEY_ugrave: number;

    /**
     * @default 16785127
     */
    const KEY_uhook: number;

    /**
     * @default 16777648
     */
    const KEY_uhorn: number;

    /**
     * @default 16785129
     */
    const KEY_uhornacute: number;

    /**
     * @default 16785137
     */
    const KEY_uhornbelowdot: number;

    /**
     * @default 16785131
     */
    const KEY_uhorngrave: number;

    /**
     * @default 16785133
     */
    const KEY_uhornhook: number;

    /**
     * @default 16785135
     */
    const KEY_uhorntilde: number;

    /**
     * @default 1022
     */
    const KEY_umacron: number;

    /**
     * @default 3014
     */
    const KEY_underbar: number;

    /**
     * @default 95
     */
    const KEY_underscore: number;

    /**
     * @default 2269
     */
    const KEY_union: number;

    /**
     * @default 1017
     */
    const KEY_uogonek: number;

    /**
     * @default 2300
     */
    const KEY_uparrow: number;

    /**
     * @default 2985
     */
    const KEY_upcaret: number;

    /**
     * @default 2540
     */
    const KEY_upleftcorner: number;

    /**
     * @default 2539
     */
    const KEY_uprightcorner: number;

    /**
     * @default 3011
     */
    const KEY_upshoe: number;

    /**
     * @default 3027
     */
    const KEY_upstile: number;

    /**
     * @default 3022
     */
    const KEY_uptack: number;

    /**
     * @default 505
     */
    const KEY_uring: number;

    /**
     * @default 1021
     */
    const KEY_utilde: number;

    /**
     * @default 118
     */
    const KEY_v: number;

    /**
     * @default 2241
     */
    const KEY_variation: number;

    /**
     * @default 2552
     */
    const KEY_vertbar: number;

    /**
     * @default 2214
     */
    const KEY_vertconnector: number;

    /**
     * @default 1246
     */
    const KEY_voicedsound: number;

    /**
     * @default 2537
     */
    const KEY_vt: number;

    /**
     * @default 119
     */
    const KEY_w: number;

    /**
     * @default 16785027
     */
    const KEY_wacute: number;

    /**
     * @default 16777589
     */
    const KEY_wcircumflex: number;

    /**
     * @default 16785029
     */
    const KEY_wdiaeresis: number;

    /**
     * @default 16785025
     */
    const KEY_wgrave: number;

    /**
     * @default 120
     */
    const KEY_x: number;

    /**
     * @default 16785035
     */
    const KEY_xabovedot: number;

    /**
     * @default 121
     */
    const KEY_y: number;

    /**
     * @default 253
     */
    const KEY_yacute: number;

    /**
     * @default 16785141
     */
    const KEY_ybelowdot: number;

    /**
     * @default 16777591
     */
    const KEY_ycircumflex: number;

    /**
     * @default 255
     */
    const KEY_ydiaeresis: number;

    /**
     * @default 165
     */
    const KEY_yen: number;

    /**
     * @default 16785139
     */
    const KEY_ygrave: number;

    /**
     * @default 16785143
     */
    const KEY_yhook: number;

    /**
     * @default 16785145
     */
    const KEY_ytilde: number;

    /**
     * @default 122
     */
    const KEY_z: number;

    /**
     * @default 447
     */
    const KEY_zabovedot: number;

    /**
     * @default 444
     */
    const KEY_zacute: number;

    /**
     * @default 446
     */
    const KEY_zcaron: number;

    /**
     * @default 16785536
     */
    const KEY_zerosubscript: number;

    /**
     * @default 16785520
     */
    const KEY_zerosuperior: number;

    /**
     * @default 16777654
     */
    const KEY_zstroke: number;

    /**
     * @default 128
     */
    const MAX_TIMECOORD_AXES: number;

    /**
     * @default 2
     */
    const NO_BG: Pixmap;

    /**
     * @default 1
     */
    const PARENT_RELATIVE: number;

    /**
     * @default 1
     */
    const PARENT_RELATIVE_BG: Pixmap;

    /**
     * @default 20
     */
    const PRIORITY_REDRAW: number;

    /**
     * Appends gdk option entries to the passed in option group. This is
     * not public API and must not be used by applications.
     * @param group An option group.
     */
    function add_option_entries_libgtk_only(group: GLib.OptionGroup): void;

    /**
     * Emits a short beep on the default display.
     */
    function beep(): void;

    /**
     * Creates a Cairo context for drawing to `drawable`.
     * 
     * <note><para>
     * Note that due to double-buffering, Cairo contexts created
     * in a GTK+ expose event handler cannot be cached and reused
     * between different expose events.
     * </para></note>
     * @param drawable a {@link Gdk.Drawable}
     * @returns A newly created Cairo context. Free with  `cairo_destroy()` when you are done drawing.
     * @since 2.8
     */
    function cairo_create(drawable: Drawable): cairo.Context;

    /**
     * Adds the given rectangle to the current path of `cr`.
     * @param cr a {@link cairo.Context}
     * @param rectangle a {@link Gdk.Rectangle}
     * @since 2.8
     */
    function cairo_rectangle(cr: cairo.Context, rectangle: Rectangle): void;

    /**
     * Adds the given region to the current path of `cr`.
     * @param cr a {@link cairo.Context}
     * @param region a {@link Gdk.Region}
     * @since 2.8
     */
    function cairo_region(cr: cairo.Context, region: Region): void;

    /**
     * Resets the clip region for a Cairo context created by `gdk_cairo_create()`.
     * 
     * This resets the clip region to the "empty" state for the given drawable.
     * This is required for non-native windows since a direct call to
     * `cairo_reset_clip()` would unset the clip region inherited from the
     * drawable (i.e. the window clip region), and thus let you e.g.
     * draw outside your window.
     * 
     * This is rarely needed though, since most code just create a new cairo_t
     * using `gdk_cairo_create()` each time they want to draw something.
     * @param cr a {@link cairo.Context}
     * @param drawable a {@link Gdk.Drawable}
     * @since 2.18
     */
    function cairo_reset_clip(cr: cairo.Context, drawable: Drawable): void;

    /**
     * Sets the specified {@link Gdk.Color} as the source color of `cr`.
     * @param cr a {@link cairo.Context}
     * @param color a {@link Gdk.Color}
     * @since 2.8
     */
    function cairo_set_source_color(cr: cairo.Context, color: Color): void;

    /**
     * Sets the given pixbuf as the source pattern for the Cairo context.
     * The pattern has an extend mode of {@link cairo.Extend.NONE} and is aligned
     * so that the origin of `pixbuf` is `pixbuf_x`, `pixbuf_y`
     * @param cr a `Cairo` context
     * @param pixbuf a {@link GdkPixbuf.Pixbuf}
     * @param pixbuf_x X coordinate of location to place upper left corner of `pixbuf`
     * @param pixbuf_y Y coordinate of location to place upper left corner of `pixbuf`
     * @since 2.8
     */
    function cairo_set_source_pixbuf(cr: cairo.Context, pixbuf: GdkPixbuf.Pixbuf, pixbuf_x: number, pixbuf_y: number): void;

    /**
     * Sets the given pixmap as the source pattern for the Cairo context.
     * The pattern has an extend mode of {@link cairo.Extend.NONE} and is aligned
     * so that the origin of `pixmap` is `pixmap_x`, `pixmap_y`
     * @param cr a `Cairo` context
     * @param pixmap a {@link Gdk.Pixmap}
     * @param pixmap_x X coordinate of location to place upper left corner of `pixmap`
     * @param pixmap_y Y coordinate of location to place upper left corner of `pixmap`
     * @since 2.10
     * @deprecated since 2.24: This function is being removed in GTK+ 3 (together     with {@link Gdk.Pixmap}). Instead, use `gdk_cairo_set_source_window()` where     appropriate.
     */
    function cairo_set_source_pixmap(cr: cairo.Context, pixmap: Pixmap, pixmap_x: number, pixmap_y: number): void;

    /**
     * Sets the given window as the source pattern for the Cairo context.
     * The pattern has an extend mode of {@link cairo.Extend.NONE} and is aligned
     * so that the origin of `window` is `x`, `y`. The window contains all its
     * subwindows when rendering.
     * 
     * Note that the contents of `window` are undefined outside of the
     * visible part of `window`, so use this function with care.
     * @param cr a `Cairo` context
     * @param window a {@link Gdk.Window}
     * @param x X coordinate of location to place upper left corner of `window`
     * @param y Y coordinate of location to place upper left corner of `window`
     * @since 2.24
     */
    function cairo_set_source_window(cr: cairo.Context, window: Window, x: number, y: number): void;

    /**
     * Determines the total height of a given character.
     * This value is not generally useful, because you cannot
     * determine how this total height will be drawn in
     * relation to the baseline. See `gdk_text_extents()`.
     * @param font a {@link Gdk.Font}
     * @param character the character to measure.
     * @returns the height of the character in pixels.
     * @deprecated since 2.2: Use `gdk_text_extents()` instead.
     */
    function char_height(font: Font, character: number): number;

    /**
     * Determines the distance from the origin to the rightmost
     * portion of a character when drawn. This is not the
     * correct value for determining the origin of the next
     * portion when drawing text in multiple pieces.
     * @param font a {@link Gdk.Font}
     * @param character the character to measure.
     * @returns the right bearing of the character in pixels.
     */
    function char_measure(font: Font, character: number): number;

    /**
     * Determines the width of a given character.
     * @param font a {@link Gdk.Font}
     * @param character the character to measure.
     * @returns the width of the character in pixels.
     * @deprecated since 2.2: Use `gdk_text_extents()` instead.
     */
    function char_width(font: Font, character: number): number;

    /**
     * Determines the width of a given wide character. (Encoded
     * in the wide-character encoding of the current locale).
     * @param font a {@link Gdk.Font}
     * @param character the character to measure.
     * @returns the width of the character in pixels.
     */
    function char_width_wc(font: Font, character: WChar): number;

    /**
     * Allocates a single color from a colormap.
     * @param colormap a {@link Gdk.Colormap}.
     * @param color The color to allocate. On return, the    <structfield>pixel</structfield> field will be filled in.
     * @returns `true` if the allocation succeeded.
     * @deprecated since 2.2: Use `gdk_colormap_alloc_color()` instead.
     */
    function color_alloc(colormap: Colormap, color: Color): number;

    /**
     * Returns the black color for a given colormap. The resulting
     * value has already been allocated.
     * @param colormap a {@link Gdk.Colormap}.
     * @param color the location to store the color.
     * @returns `true` if the allocation succeeded.
     */
    function color_black(colormap: Colormap, color: Color): number;

    /**
     * Changes the value of a color that has already
     * been allocated. If `colormap` is not a private
     * colormap, then the color must have been allocated
     * using `gdk_colormap_alloc_colors()` with the
     * `writeable` set to `true`.
     * @param colormap a {@link Gdk.Colormap}.
     * @param color a {@link Gdk.Color}, with the color to change in the <structfield>pixel</structfield> field, and the new value in the remaining fields.
     * @returns `true` if the color was successfully changed.
     */
    function color_change(colormap: Colormap, color: Color): number;

    /**
     * Parses a textual specification of a color and fill in the
     * <structfield>red</structfield>, <structfield>green</structfield>,
     * and <structfield>blue</structfield> fields of a {@link Gdk.Color}
     * structure. The color is <emphasis>not</emphasis> allocated, you
     * must call `gdk_colormap_alloc_color()` yourself. The string can
     * either one of a large set of standard names. (Taken from the X11
     * <filename>rgb.txt</filename> file), or it can be a hex value in the
     * form '&num;rgb' '&num;rrggbb' '&num;rrrgggbbb' or
     * '&num;rrrrggggbbbb' where 'r', 'g' and 'b' are hex digits of the
     * red, green, and blue components of the color, respectively. (White
     * in the four forms is '&num;fff' '&num;ffffff' '&num;fffffffff' and
     * '&num;ffffffffffff')
     * @param spec the string specifying the color.
     * @returns `true` if the parsing succeeded.
     */
    function color_parse(spec: string): [boolean, Color];

    /**
     * Returns the white color for a given colormap. The resulting
     * value has already allocated been allocated.
     * @param colormap a {@link Gdk.Colormap}.
     * @param color the location to store the color.
     * @returns `true` if the allocation succeeded.
     */
    function color_white(colormap: Colormap, color: Color): number;

    /**
     * Allocates colors from a colormap. This function
     * is obsolete. See `gdk_colormap_alloc_colors()`.
     * For full documentation of the fields, see
     * the Xlib documentation for <function>XAllocColorCells()</function>.
     * @param colormap a {@link Gdk.Colormap}.
     * @param contiguous if `true`, the colors should be allocated    in contiguous color cells.
     * @param planes an array in which to store the plane masks.
     * @param nplanes the number of planes to allocate. (Or zero,    to indicate that the color allocation should not be planar.)
     * @param pixels an array into which to store allocated pixel values.
     * @param npixels the number of pixels in each plane to allocate.
     * @returns `true` if the allocation was successful
     */
    function colors_alloc(colormap: Colormap, contiguous: boolean, planes: bigint | number, nplanes: number, pixels: bigint | number, npixels: number): number;

    /**
     * Frees colors allocated with `gdk_colors_alloc()`. This
     * function is obsolete. See `gdk_colormap_free_colors()`.
     * @param colormap a {@link Gdk.Colormap}.
     * @param pixels the pixel values of the colors to free.
     * @param npixels the number of values in `pixels`.
     * @param planes the plane masks for all planes to free, OR'd together.
     */
    function colors_free(colormap: Colormap, pixels: bigint | number, npixels: number, planes: bigint | number): void;

    /**
     * Changes the value of the first `ncolors` colors in
     * a private colormap. This function is obsolete and
     * should not be used. See `gdk_color_change()`.
     * @param colormap a {@link Gdk.Colormap}.
     * @param colors the new color values.
     * @param ncolors the number of colors to change.
     */
    function colors_store(colormap: Colormap, colors: Color, ncolors: number): void;

    /**
     * Returns the list of available input devices for the default display.
     * The list is statically allocated and should not be freed.
     * @returns a list of {@link Gdk.Device}
     */
    function devices_list(): Device[];

    /**
     * Aborts a drag without dropping.
     * 
     * This function is called by the drag source.
     * @param context a {@link Gdk.DragContext}.
     * @param time_ the timestamp for this operation.
     */
    function drag_abort(context: DragContext, time_: number): void;

    /**
     * Drops on the current destination.
     * 
     * This function is called by the drag source.
     * @param context a {@link Gdk.DragContext}.
     * @param time_ the timestamp for this operation.
     */
    function drag_drop(context: DragContext, time_: number): void;

    /**
     * Returns whether the dropped data has been successfully
     * transferred. This function is intended to be used while
     * handling a {@link Gdk.EventType.DROP_FINISHED} event, its return value is
     * meaningless at other times.
     * @param context a {@link Gdk.DragContext}
     * @returns `true` if the drop was successful.
     * @since 2.6
     */
    function drag_drop_succeeded(context: DragContext): boolean;

    /**
     * Finds the destination window and DND protocol to use at the
     * given pointer position.
     * 
     * This function is called by the drag source to obtain the
     * `dest_window` and `protocol` parameters for `gdk_drag_motion()`.
     * @param context a {@link Gdk.DragContext}.
     * @param drag_window a window which may be at the pointer position, but      should be ignored, since it is put up by the drag source as an icon.
     * @param x_root the x position of the pointer in root coordinates.
     * @param y_root the y position of the pointer in root coordinates.
     * @deprecated since 2.24: Use `gdk_drag_find_window_for_screen()` instead.
     */
    function drag_find_window(context: DragContext, drag_window: Window, x_root: number, y_root: number): [Window, DragProtocol];

    /**
     * Finds the destination window and DND protocol to use at the
     * given pointer position.
     * 
     * This function is called by the drag source to obtain the
     * `dest_window` and `protocol` parameters for `gdk_drag_motion()`.
     * @param context a {@link Gdk.DragContext}
     * @param drag_window a window which may be at the pointer position, but should be ignored, since it is put up by the drag source as an icon.
     * @param screen the screen where the destination window is sought.
     * @param x_root the x position of the pointer in root coordinates.
     * @param y_root the y position of the pointer in root coordinates.
     * @since 2.2
     */
    function drag_find_window_for_screen(context: DragContext, drag_window: Window, screen: Screen, x_root: number, y_root: number): [Window, DragProtocol];

    /**
     * Finds out the DND protocol supported by a window.
     * @param xid the windowing system id of the destination window.
     * @param protocol location where the supported DND protocol is returned.
     * @returns the windowing system specific id for the window where    the drop should happen. This may be `xid` or the id of a proxy    window, or zero if `xid` doesn't support Drag and Drop.
     * @deprecated since 2.24: Use `gdk_drag_get_protocol_for_display()` instead
     */
    function drag_get_protocol(xid: NativeWindow, protocol: DragProtocol): NativeWindow;

    /**
     * Finds out the DND protocol supported by a window.
     * @param display the {@link Gdk.Display} where the destination window resides
     * @param xid the windowing system id of the destination window.
     * @param protocol location where the supported DND protocol is returned.
     * @returns the windowing system id of the window where the drop should happen. This     may be `xid` or the id of a proxy window, or zero if `xid` doesn't     support Drag and Drop.
     * @since 2.2
     */
    function drag_get_protocol_for_display(display: Display, xid: NativeWindow, protocol: DragProtocol): NativeWindow;

    /**
     * Updates the drag context when the pointer moves or the
     * set of actions changes.
     * 
     * This function is called by the drag source.
     * @param context a {@link Gdk.DragContext}.
     * @param dest_window the new destination window, obtained by     `gdk_drag_find_window()`.
     * @param protocol the DND protocol in use, obtained by `gdk_drag_find_window()`.
     * @param x_root the x position of the pointer in root coordinates.
     * @param y_root the y position of the pointer in root coordinates.
     * @param suggested_action the suggested action.
     * @param possible_actions the possible actions.
     * @param time_ the timestamp for this operation.
     * @returns FIXME
     */
    function drag_motion(context: DragContext, dest_window: Window, protocol: DragProtocol, x_root: number, y_root: number, suggested_action: DragAction, possible_actions: DragAction, time_: number): boolean;

    /**
     * Selects one of the actions offered by the drag source.
     * 
     * This function is called by the drag destination in response to
     * `gdk_drag_motion()` called by the drag source.
     * @param context a {@link Gdk.DragContext}.
     * @param action the selected action which will be taken when a drop happens,    or 0 to indicate that a drop will not be accepted.
     * @param time_ the timestamp for this operation.
     */
    function drag_status(context: DragContext, action: DragAction, time_: number): void;

    /**
     * Draws an arc or a filled 'pie slice'. The arc is defined by the bounding
     * rectangle of the entire ellipse, and the start and end angles of the part
     * of the ellipse to be drawn.
     * @param drawable a {@link Gdk.Drawable} (a {@link Gdk.Window} or a {@link Gdk.Pixmap}).
     * @param gc a {@link Gdk.GC}.
     * @param filled `true` if the arc should be filled, producing a 'pie slice'.
     * @param x the x coordinate of the left edge of the bounding rectangle.
     * @param y the y coordinate of the top edge of the bounding rectangle.
     * @param width the width of the bounding rectangle.
     * @param height the height of the bounding rectangle.
     * @param angle1 the start angle of the arc, relative to the 3 o'clock position,     counter-clockwise, in 1/64ths of a degree.
     * @param angle2 the end angle of the arc, relative to `angle1`, in 1/64ths     of a degree.
     * @deprecated since 2.22: Use `cairo_arc()` and `cairo_fill()` or `cairo_stroke()` instead. Note that arcs just like any drawing operation in Cairo are antialiased unless you call `cairo_set_antialias()`.
     */
    function draw_arc(drawable: Drawable, gc: GC, filled: boolean, x: number, y: number, width: number, height: number, angle1: number, angle2: number): void;

    /**
     * Copies the `width` x `height` region of `src` at coordinates (`xsrc`,
     * `ysrc`) to coordinates (`xdest`, `ydest`) in `drawable`.
     * `width` and/or `height` may be given as -1, in which case the entire
     * `src` drawable will be copied.
     * 
     * Most fields in `gc` are not used for this operation, but notably the
     * clip mask or clip region will be honored.
     * 
     * The source and destination drawables must have the same visual and
     * colormap, or errors will result. (On X11, failure to match
     * visual/colormap results in a BadMatch error from the X server.)
     * A common cause of this problem is an attempt to draw a bitmap to
     * a color drawable. The way to draw a bitmap is to set the bitmap as
     * the stipple on the {@link Gdk.GC}, set the fill mode to {@link Gdk.Fill.STIPPLED}, and
     * then draw the rectangle.
     * @param drawable a {@link Gdk.Drawable}
     * @param gc a {@link Gdk.GC} sharing the drawable's visual and colormap
     * @param src the source {@link Gdk.Drawable}, which may be the same as `drawable`
     * @param xsrc X position in `src` of rectangle to draw
     * @param ysrc Y position in `src` of rectangle to draw
     * @param xdest X position in `drawable` where the rectangle should be drawn
     * @param ydest Y position in `drawable` where the rectangle should be drawn
     * @param width width of rectangle to draw, or -1 for entire `src` width
     * @param height height of rectangle to draw, or -1 for entire `src` height
     * @deprecated since 2.22: Use `gdk_cairo_set_source_pixmap()`, `cairo_rectangle()` and `cairo_fill()` to draw pixmap on top of other drawables. Also keep in mind that the limitations on allowed sources do not apply to Cairo.
     */
    function draw_drawable(drawable: Drawable, gc: GC, src: Drawable, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number): void;

    /**
     * This is a low-level function; 99% of text rendering should be done
     * using `gdk_draw_layout()` instead.
     * 
     * A glyph is a single image in a font. This function draws a sequence of
     * glyphs.  To obtain a sequence of glyphs you have to understand a
     * lot about internationalized text handling, which you don't want to
     * understand; thus, use `gdk_draw_layout()` instead of this function,
     * `gdk_draw_layout()` handles the details.
     * @param drawable a {@link Gdk.Drawable}
     * @param gc a {@link Gdk.GC}
     * @param font font to be used
     * @param x X coordinate of baseline origin
     * @param y Y coordinate of baseline origin
     * @param glyphs the glyph string to draw
     * @deprecated since 2.22: Use `pango_cairo_show_glyphs()` instead.
     */
    function draw_glyphs(drawable: Drawable, gc: GC, font: Pango.Font, x: number, y: number, glyphs: Pango.GlyphString): void;

    /**
     * Renders a {@link Pango.GlyphString} onto a drawable, possibly
     * transforming the layed-out coordinates through a transformation
     * matrix. Note that the transformation matrix for `font` is not
     * changed, so to produce correct rendering results, the `font`
     * must have been loaded using a {@link Pango.Context} with an identical
     * transformation matrix to that passed in to this function.
     * 
     * See also `gdk_draw_glyphs()`, `gdk_draw_layout()`.
     * @param drawable a {@link Gdk.Drawable}
     * @param gc a {@link Gdk.GC}
     * @param matrix a {@link Pango.Matrix}, or `null` to use an identity transformation
     * @param font the font in which to draw the string
     * @param x the x position of the start of the string (in Pango           units in user space coordinates)
     * @param y the y position of the baseline (in Pango units           in user space coordinates)
     * @param glyphs the glyph string to draw
     * @since 2.6
     * @deprecated since 2.22: Use `pango_cairo_show_glyphs()` instead.
     */
    function draw_glyphs_transformed(drawable: Drawable, gc: GC, matrix: Pango.Matrix | null, font: Pango.Font, x: number, y: number, glyphs: Pango.GlyphString): void;

    /**
     * @param drawable 
     * @param gc 
     * @param x 
     * @param y 
     * @param width 
     * @param height 
     * @param dith 
     * @param buf 
     * @param rowstride 
     */
    function draw_gray_image(drawable: Drawable, gc: GC, x: number, y: number, width: number, height: number, dith: RgbDither, buf: number, rowstride: number): void;

    /**
     * Draws a {@link Gdk.Image} onto a drawable.
     * The depth of the {@link Gdk.Image} must match the depth of the {@link Gdk.Drawable}.
     * @param drawable a {@link Gdk.Drawable} (a {@link Gdk.Window} or a {@link Gdk.Pixmap}).
     * @param gc a {@link Gdk.GC}.
     * @param image the {@link Gdk.Image} to draw.
     * @param xsrc the left edge of the source rectangle within `image`.
     * @param ysrc the top of the source rectangle within `image`.
     * @param xdest the x coordinate of the destination within `drawable`.
     * @param ydest the y coordinate of the destination within `drawable`.
     * @param width the width of the area to be copied, or -1 to make the area     extend to the right edge of `image`.
     * @param height the height of the area to be copied, or -1 to make the area     extend to the bottom edge of `image`.
     * @deprecated since 2.22: Do not use {@link Gdk.Image} anymore, instead use Cairo image surfaces.
     */
    function draw_image(drawable: Drawable, gc: GC, image: Image, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number): void;

    /**
     * @param drawable 
     * @param gc 
     * @param x 
     * @param y 
     * @param width 
     * @param height 
     * @param dith 
     * @param buf 
     * @param rowstride 
     * @param cmap 
     */
    function draw_indexed_image(drawable: Drawable, gc: GC, x: number, y: number, width: number, height: number, dith: RgbDither, buf: number, rowstride: number, cmap: RgbCmap): void;

    /**
     * Render a {@link Pango.Layout} onto a GDK drawable
     * 
     * If the layout's {@link Pango.Context} has a transformation matrix set, then
     * `x` and `y` specify the position of the top left corner of the
     * bounding box (in device space) of the transformed layout.
     * 
     * If you're using GTK+, the usual way to obtain a {@link Pango.Layout}
     * is `gtk_widget_create_pango_layout()`.
     * @param drawable the drawable on which to draw string
     * @param gc base graphics context to use
     * @param x the X position of the left of the layout (in pixels)
     * @param y the Y position of the top of the layout (in pixels)
     * @param layout a {@link Pango.Layout}
     */
    function draw_layout(drawable: Drawable, gc: GC, x: number, y: number, layout: Pango.Layout): void;

    /**
     * Render a {@link Pango.LayoutLine} onto an GDK drawable
     * 
     * If the layout's {@link Pango.Context} has a transformation matrix set, then
     * `x` and `y` specify the position of the left edge of the baseline
     * (left is in before-tranform user coordinates) in after-transform
     * device coordinates.
     * @param drawable the drawable on which to draw the line
     * @param gc base graphics to use
     * @param x the x position of start of string (in pixels)
     * @param y the y position of baseline (in pixels)
     * @param line a {@link Pango.LayoutLine}
     */
    function draw_layout_line(drawable: Drawable, gc: GC, x: number, y: number, line: Pango.LayoutLine): void;

    /**
     * Render a {@link Pango.LayoutLine} onto a {@link Gdk.Drawable}, overriding the
     * layout's normal colors with `foreground` and/or `background`.
     * `foreground` and `background` need not be allocated.
     * 
     * If the layout's {@link Pango.Context} has a transformation matrix set, then
     * `x` and `y` specify the position of the left edge of the baseline
     * (left is in before-tranform user coordinates) in after-transform
     * device coordinates.
     * @param drawable the drawable on which to draw the line
     * @param gc base graphics to use
     * @param x the x position of start of string (in pixels)
     * @param y the y position of baseline (in pixels)
     * @param line a {@link Pango.LayoutLine}
     * @param foreground foreground override color, or `null` for none
     * @param background background override color, or `null` for none
     */
    function draw_layout_line_with_colors(drawable: Drawable, gc: GC, x: number, y: number, line: Pango.LayoutLine, foreground: Color | null, background: Color | null): void;

    /**
     * Render a {@link Pango.Layout} onto a {@link Gdk.Drawable}, overriding the
     * layout's normal colors with `foreground` and/or `background`.
     * `foreground` and `background` need not be allocated.
     * 
     * If the layout's {@link Pango.Context} has a transformation matrix set, then
     * `x` and `y` specify the position of the top left corner of the
     * bounding box (in device space) of the transformed layout.
     * 
     * If you're using GTK+, the ususal way to obtain a {@link Pango.Layout}
     * is `gtk_widget_create_pango_layout()`.
     * @param drawable the drawable on which to draw string
     * @param gc base graphics context to use
     * @param x the X position of the left of the layout (in pixels)
     * @param y the Y position of the top of the layout (in pixels)
     * @param layout a {@link Pango.Layout}
     * @param foreground foreground override color, or `null` for none
     * @param background background override color, or `null` for none
     */
    function draw_layout_with_colors(drawable: Drawable, gc: GC, x: number, y: number, layout: Pango.Layout, foreground: Color | null, background: Color | null): void;

    /**
     * Draws a line, using the foreground color and other attributes of
     * the {@link Gdk.GC}.
     * @param drawable a {@link Gdk.Drawable} (a {@link Gdk.Window} or a {@link Gdk.Pixmap}).
     * @param gc a {@link Gdk.GC}.
     * @param x1_ the x coordinate of the start point.
     * @param y1_ the y coordinate of the start point.
     * @param x2_ the x coordinate of the end point.
     * @param y2_ the y coordinate of the end point.
     * @deprecated since 2.22: Use `cairo_line_to()` and `cairo_stroke()` instead. Be aware that the default line width in Cairo is 2 pixels and that your coordinates need to describe the center of the line. To draw a single pixel wide pixel-aligned line, you would use: |[cairo_set_line_width (cr, 1.0); cairo_set_line_cap (cr, CAIRO_LINE_CAP_SQUARE); cairo_move_to (cr, 0.5, 0.5); cairo_line_to (cr, 9.5, 0.5); cairo_stroke (cr);]| See also <ulink url="http://cairographics.org/FAQ/`sharp_lines`">the Cairo FAQ</ulink> on this topic.
     */
    function draw_line(drawable: Drawable, gc: GC, x1_: number, y1_: number, x2_: number, y2_: number): void;

    /**
     * Draws a series of lines connecting the given points.
     * The way in which joins between lines are draw is determined by the
     * {@link Gdk.CapStyle} value in the {@link Gdk.GC}. This can be set with
     * `gdk_gc_set_line_attributes()`.
     * @param drawable a {@link Gdk.Drawable} (a {@link Gdk.Window} or a {@link Gdk.Pixmap}).
     * @param gc a {@link Gdk.GC}.
     * @param points an array of {@link Gdk.Point} structures specifying the endpoints of the
     * @param n_points the size of the `points` array.
     * @deprecated since 2.22: Use `cairo_line_to()` and `cairo_stroke()` instead. See the documentation of `gdk_draw_line()` for notes on line drawing with Cairo.
     */
    function draw_lines(drawable: Drawable, gc: GC, points: Point, n_points: number): void;

    /**
     * Renders a rectangular portion of a pixbuf to a drawable.  The destination
     * drawable must have a colormap. All windows have a colormap, however, pixmaps
     * only have colormap by default if they were created with a non-`null` window
     * argument. Otherwise a colormap must be set on them with
     * `gdk_drawable_set_colormap()`.
     * 
     * On older X servers, rendering pixbufs with an alpha channel involves round
     * trips to the X server, and may be somewhat slow.
     * 
     * If GDK is built with the Sun mediaLib library, the gdk_draw_pixbuf
     * function is accelerated using mediaLib, which provides hardware
     * acceleration on Intel, AMD, and Sparc chipsets.  If desired, mediaLib
     * support can be turned off by setting the GDK_DISABLE_MEDIALIB environment
     * variable.
     * @param drawable Destination drawable.
     * @param gc a {@link Gdk.GC}, used for clipping, or `null`
     * @param pixbuf a {@link GdkPixbuf.Pixbuf}
     * @param src_x Source X coordinate within pixbuf.
     * @param src_y Source Y coordinates within pixbuf.
     * @param dest_x Destination X coordinate within drawable.
     * @param dest_y Destination Y coordinate within drawable.
     * @param width Width of region to render, in pixels, or -1 to use pixbuf width.
     * @param height Height of region to render, in pixels, or -1 to use pixbuf height.
     * @param dither Dithering mode for `GdkRGB`.
     * @param x_dither X offset for dither.
     * @param y_dither Y offset for dither.
     * @since 2.2
     * @deprecated since 2.22: Use `gdk_cairo_set_source_pixbuf()` and `cairo_paint()` or `cairo_rectangle()` and `cairo_fill()` instead.
     */
    function draw_pixbuf(drawable: Drawable, gc: GC | null, pixbuf: GdkPixbuf.Pixbuf, src_x: number, src_y: number, dest_x: number, dest_y: number, width: number, height: number, dither: RgbDither, x_dither: number, y_dither: number): void;

    /**
     * Draws a point, using the foreground color and other attributes of
     * the {@link Gdk.GC}.
     * @param drawable a {@link Gdk.Drawable} (a {@link Gdk.Window} or a {@link Gdk.Pixmap}).
     * @param gc a {@link Gdk.GC}.
     * @param x the x coordinate of the point.
     * @param y the y coordinate of the point.
     * @deprecated since 2.22: Use `cairo_rectangle()` and `cairo_fill()` or `cairo_move_to()` and `cairo_stroke()` instead.
     */
    function draw_point(drawable: Drawable, gc: GC, x: number, y: number): void;

    /**
     * Draws a number of points, using the foreground color and other
     * attributes of the {@link Gdk.GC}.
     * @param drawable a {@link Gdk.Drawable} (a {@link Gdk.Window} or a {@link Gdk.Pixmap}).
     * @param gc a {@link Gdk.GC}.
     * @param points an array of {@link Gdk.Point} structures.
     * @param n_points the number of points to be drawn.
     * @deprecated since 2.22: Use `n_points` calls to `cairo_rectangle()` and `cairo_fill()` instead.
     */
    function draw_points(drawable: Drawable, gc: GC, points: Point, n_points: number): void;

    /**
     * Draws an outlined or filled polygon.
     * @param drawable a {@link Gdk.Drawable} (a {@link Gdk.Window} or a {@link Gdk.Pixmap}).
     * @param gc a {@link Gdk.GC}.
     * @param filled `true` if the polygon should be filled. The polygon is closed     automatically, connecting the last point to the first point if     necessary.
     * @param points an array of {@link Gdk.Point} structures specifying the points making     up the polygon.
     * @param n_points the number of points.
     * @deprecated since 2.22: Use `cairo_line_to()` or `cairo_append_path()` and `cairo_fill()` or `cairo_stroke()` instead.
     */
    function draw_polygon(drawable: Drawable, gc: GC, filled: boolean, points: Point, n_points: number): void;

    /**
     * Draws a rectangular outline or filled rectangle, using the foreground color
     * and other attributes of the {@link Gdk.GC}.
     * 
     * A rectangle drawn filled is 1 pixel smaller in both dimensions than a
     * rectangle outlined. Calling
     * <literal>gdk_draw_rectangle (window, gc, TRUE, 0, 0, 20, 20)</literal>
     * results in a filled rectangle 20 pixels wide and 20 pixels high. Calling
     * <literal>gdk_draw_rectangle (window, gc, FALSE, 0, 0, 20, 20)</literal>
     * results in an outlined rectangle with corners at (0, 0), (0, 20), (20, 20),
     * and (20, 0), which makes it 21 pixels wide and 21 pixels high.
     * @param drawable a {@link Gdk.Drawable} (a {@link Gdk.Window} or a {@link Gdk.Pixmap}).
     * @param gc a {@link Gdk.GC}.
     * @param filled `true` if the rectangle should be filled.
     * @param x the x coordinate of the left edge of the rectangle.
     * @param y the y coordinate of the top edge of the rectangle.
     * @param width the width of the rectangle.
     * @param height the height of the rectangle.
     * @deprecated since 2.22: Use `cairo_rectangle()` and `cairo_fill()` or `cairo_stroke()` instead. For stroking, the same caveats for converting code apply as for `gdk_draw_line()`.
     */
    function draw_rectangle(drawable: Drawable, gc: GC, filled: boolean, x: number, y: number, width: number, height: number): void;

    /**
     * @param drawable 
     * @param gc 
     * @param x 
     * @param y 
     * @param width 
     * @param height 
     * @param dith 
     * @param buf 
     * @param rowstride 
     */
    function draw_rgb_32_image(drawable: Drawable, gc: GC, x: number, y: number, width: number, height: number, dith: RgbDither, buf: number, rowstride: number): void;

    /**
     * Like `gdk_draw_rgb_32_image()`, but allows you to specify the dither
     * offsets. See `gdk_draw_rgb_image_dithalign()` for more details.
     * @param drawable a {@link Gdk.Drawable}
     * @param gc a {@link Gdk.GC}
     * @param x X coordinate on `drawable` where image should go
     * @param y Y coordinate on `drawable` where image should go
     * @param width width of area of image to draw
     * @param height height of area of image to draw
     * @param dith dithering mode
     * @param buf RGB image data
     * @param rowstride rowstride of RGB image data
     * @param xdith X dither offset
     * @param ydith Y dither offset
     * @deprecated since 2.22: Cairo handles colors automatically.
     */
    function draw_rgb_32_image_dithalign(drawable: Drawable, gc: GC, x: number, y: number, width: number, height: number, dith: RgbDither, buf: number, rowstride: number, xdith: number, ydith: number): void;

    /**
     * @param drawable 
     * @param gc 
     * @param x 
     * @param y 
     * @param width 
     * @param height 
     * @param dith 
     * @param rgb_buf 
     * @param rowstride 
     */
    function draw_rgb_image(drawable: Drawable, gc: GC, x: number, y: number, width: number, height: number, dith: RgbDither, rgb_buf: number, rowstride: number): void;

    /**
     * @param drawable 
     * @param gc 
     * @param x 
     * @param y 
     * @param width 
     * @param height 
     * @param dith 
     * @param rgb_buf 
     * @param rowstride 
     * @param xdith 
     * @param ydith 
     */
    function draw_rgb_image_dithalign(drawable: Drawable, gc: GC, x: number, y: number, width: number, height: number, dith: RgbDither, rgb_buf: number, rowstride: number, xdith: number, ydith: number): void;

    /**
     * Draws a number of unconnected lines.
     * @param drawable a {@link Gdk.Drawable} (a {@link Gdk.Window} or a {@link Gdk.Pixmap}).
     * @param gc a {@link Gdk.GC}.
     * @param segs an array of {@link Gdk.Segment} structures specifying the start and   end points of the lines to be drawn.
     * @param n_segs the number of line segments to draw, i.e. the size of the   `segs` array.
     * @deprecated since 2.22: Use `cairo_move_to()`, `cairo_line_to()` and `cairo_stroke()` instead. See the documentation of `gdk_draw_line()` for notes on line drawing with Cairo.
     */
    function draw_segments(drawable: Drawable, gc: GC, segs: Segment, n_segs: number): void;

    /**
     * Draws a string of characters in the given font or fontset.
     * @param drawable a {@link Gdk.Drawable} (a {@link Gdk.Window} or a {@link Gdk.Pixmap}).
     * @param font a {@link Gdk.Font}.
     * @param gc a {@link Gdk.GC}.
     * @param x the x coordinate of the left edge of the text.
     * @param y the y coordinate of the baseline of the text.
     * @param string the string of characters to draw.
     * @deprecated since 2.4: Use `gdk_draw_layout()` instead.
     */
    function draw_string(drawable: Drawable, font: Font, gc: GC, x: number, y: number, string: string): void;

    /**
     * Draws a number of characters in the given font or fontset.
     * @param drawable a {@link Gdk.Drawable} (a {@link Gdk.Window} or a {@link Gdk.Pixmap}).
     * @param font a {@link Gdk.Font}.
     * @param gc a {@link Gdk.GC}.
     * @param x the x coordinate of the left edge of the text.
     * @param y the y coordinate of the baseline of the text.
     * @param text the characters to draw.
     * @param text_length the number of characters of `text` to draw.
     * @deprecated since 2.4: Use `gdk_draw_layout()` instead.
     */
    function draw_text(drawable: Drawable, font: Font, gc: GC, x: number, y: number, text: string, text_length: number): void;

    /**
     * Draws a number of wide characters using the given font of fontset.
     * If the font is a 1-byte font, the string is converted into 1-byte
     * characters (discarding the high bytes) before output.
     * @param drawable a {@link Gdk.Drawable} (a {@link Gdk.Window} or a {@link Gdk.Pixmap}).
     * @param font a {@link Gdk.Font}.
     * @param gc a {@link Gdk.GC}.
     * @param x the x coordinate of the left edge of the text.
     * @param y the y coordinate of the baseline of the text.
     * @param text the wide characters to draw.
     * @param text_length the number of characters to draw.
     * @deprecated since 2.4: Use `gdk_draw_layout()` instead.
     */
    function draw_text_wc(drawable: Drawable, font: Font, gc: GC, x: number, y: number, text: WChar, text_length: number): void;

    /**
     * Draws a set of anti-aliased trapezoids. The trapezoids are
     * combined using saturation addition, then drawn over the background
     * as a set. This is low level functionality used internally to implement
     * rotated underlines and backgrouds when rendering a PangoLayout and is
     * likely not useful for applications.
     * @param drawable a {@link Gdk.Drawable}
     * @param gc a {@link Gdk.GC}
     * @param trapezoids an array of {@link Gdk.Trapezoid} structures
     * @param n_trapezoids the number of trapezoids to draw
     * @since 2.6
     * @deprecated since 2.22: Use Cairo path contruction functions and `cairo_fill()` instead.
     */
    function draw_trapezoids(drawable: Drawable, gc: GC, trapezoids: Trapezoid, n_trapezoids: number): void;

    /**
     * Ends the drag operation after a drop.
     * 
     * This function is called by the drag destination.
     * @param context a `GtkDragContext`.
     * @param success `true` if the data was successfully received.
     * @param time_ the timestamp for this operation.
     */
    function drop_finish(context: DragContext, success: boolean, time_: number): void;

    /**
     * Accepts or rejects a drop.
     * 
     * This function is called by the drag destination in response
     * to a drop initiated by the drag source.
     * @param context a {@link Gdk.DragContext}.
     * @param ok `true` if the drop is accepted.
     * @param time_ the timestamp for this operation.
     */
    function drop_reply(context: DragContext, ok: boolean, time_: number): void;

    function error_trap_pop(): number;

    function error_trap_push(): void;

    /**
     * Checks all open displays for a {@link Gdk.Event} to process,to be processed
     * on, fetching events from the windowing system if necessary.
     * See `gdk_display_get_event()`.
     * @returns the next {@link Gdk.Event} to be processed, or `null` if no events are pending. The returned {@link Gdk.Event} should be freed with `gdk_event_free()`.
     */
    function event_get(): Event;

    /**
     * @param window 
     */
    function event_get_graphics_expose(window: Window): Event;

    /**
     * Sets the function to call to handle all events from GDK.
     * 
     * Note that GTK+ uses this to install its own event handler, so it is
     * usually not useful for GTK+ applications. (Although an application
     * can call this function then call `gtk_main_do_event()` to pass
     * events to GTK+.)
     * @param func the function to call to handle events from GDK.
     */
    function event_handler_set(func: EventFunc): void;

    /**
     * If there is an event waiting in the event queue of some open
     * display, returns a copy of it. See `gdk_display_peek_event()`.
     * @returns a copy of the first {@link Gdk.Event} on some event queue, or `null` if no events are in any queues. The returned {@link Gdk.Event} should be freed with `gdk_event_free()`.
     */
    function event_peek(): Event;

    /**
     * Request more motion notifies if `event` is a motion notify hint event.
     * This function should be used instead of `gdk_window_get_pointer()` to
     * request further motion notifies, because it also works for extension
     * events where motion notifies are provided for devices other than the
     * core pointer. Coordinate extraction, processing and requesting more
     * motion events from a {@link Gdk.EventType.MOTION_NOTIFY} event usually works like this:
     * 
     * 
     * ```
     * {
     *   /&ast; motion_event handler &ast;/
     *   x = motion_event->x;
     *   y = motion_event->y;
     *   /&ast; handle (x,y) motion &ast;/
     *   gdk_event_request_motions (motion_event); /&ast; handles is_hint events &ast;/
     * }
     * ```
     * 
     * @param event a valid {@link Gdk.Event}
     * @since 2.12
     */
    function event_request_motions(event: EventMotion): void;

    /**
     * @param display 
     * @param event 
     * @param winid 
     */
    function event_send_client_message_for_display(display: Display, event: Event, winid: NativeWindow): boolean;

    function events_pending(): boolean;

    /**
     * @param error_code 
     */
    function exit(error_code: number): void;

    function flush(): void;

    /**
     * Load a {@link Gdk.Font} based on a Pango font description. This font will
     * only be an approximation of the Pango font, and
     * internationalization will not be handled correctly. This function
     * should only be used for legacy code that cannot be easily converted
     * to use Pango. Using Pango directly will produce better results.
     * @param font_desc a {@link Pango.FontDescription}.
     * @returns the newly loaded font, or `null` if the font cannot be loaded.
     */
    function font_from_description(font_desc: Pango.FontDescription): Font;

    /**
     * @param display 
     * @param font_desc 
     */
    function font_from_description_for_display(display: Display, font_desc: Pango.FontDescription): Font;

    /**
     * Loads a font.
     * 
     * The font may be newly loaded or looked up the font in a cache.
     * You should make no assumptions about the initial reference count.
     * @param font_name a XLFD describing the font to load.
     * @returns a {@link Gdk.Font}, or `null` if the font could not be loaded.
     */
    function font_load(font_name: string): Font;

    /**
     * @param display 
     * @param font_name 
     */
    function font_load_for_display(display: Display, font_name: string): Font;

    /**
     * @param fontset_name 
     */
    function fontset_load(fontset_name: string): Font;

    /**
     * @param display 
     * @param fontset_name 
     */
    function fontset_load_for_display(display: Display, fontset_name: string): Font;

    /**
     * @param ctext 
     */
    function free_compound_text(ctext: number): void;

    /**
     * @param list 
     */
    function free_text_list(list: string): void;

    function get_display(): string;

    /**
     * Gets the display name specified in the command line arguments passed
     * to `gdk_init()` or `gdk_parse_args()`, if any.
     * @returns the display name, if specified explicitely, otherwise `null`   this string is owned by GTK+ and must not be modified or freed.
     * @since 2.2
     */
    function get_display_arg_name(): string;

    function get_program_class(): string;

    /**
     * Gets whether event debugging output is enabled.
     * @returns `true` if event debugging output is enabled.
     */
    function get_show_events(): boolean;

    function get_use_xshm(): boolean;

    /**
     * @param argv 
     */
    function init(argv: string[]): string[];

    /**
     * Initialize the library for use.
     * 
     * Arguments:
     *   "argc" is the number of arguments.
     *   "argv" is an array of strings.
     * 
     * Results:
     *   "argc" and "argv" are modified to reflect any arguments
     *   which were not handled. (Such arguments should either
     *   be handled by the application or dismissed). If initialization
     *   fails, returns FALSE, otherwise TRUE.
     * 
     * Side effects:
     *   The library is initialized.
     * 
     * --------------------------------------------------------------
     * @param argv 
     */
    function init_check(argv: string[]): [boolean, string[]];

    /**
     * Establish a callback when a condition becomes true on
     * a file descriptor.
     * @param source a file descriptor.
     * @param condition the condition.
     * @param _function the callback function.
     * @returns a tag that can later be used as an argument to `gdk_input_remove()`.
     * @deprecated since 2.14: Use `g_io_add_watch_full()` on a {@link GLib.IOChannel}
     */
    function input_add_full(source: number, condition: InputCondition, _function: InputFunction): number;

    /**
     * @param tag 
     */
    function input_remove(tag: number): void;

    /**
     * @param window 
     * @param mask 
     * @param mode 
     */
    function input_set_extension_events(window: Window, mask: number, mode: ExtensionMode): void;

    /**
     * @param window 
     * @param owner_events 
     * @param time_ 
     */
    function keyboard_grab(window: Window, owner_events: boolean, time_: number): GrabStatus;

    /**
     * Determines information about the current keyboard grab.
     * This is not public API and must not be used by applications.
     * @param display the display for which to get the grab information
     * @param grab_window location to store current grab window
     * @param owner_events location to store boolean indicating whether   the `owner_events` flag to `gdk_keyboard_grab()` was `true`.
     * @returns `true` if this application currently has the  keyboard grabbed.
     */
    function keyboard_grab_info_libgtk_only(display: Display, grab_window: Window, owner_events: boolean): boolean;

    /**
     * Ungrabs the keyboard on the default display, if it is grabbed by this
     * application.
     * @param time_ a timestamp from a {@link Gdk.Event}, or `GDK_CURRENT_TIME` if no        timestamp is available.
     */
    function keyboard_ungrab(time_: number): void;

    /**
     * Obtains the upper- and lower-case versions of the keyval `symbol`.
     * Examples of keyvals are #GDK_a, #GDK_Enter, #GDK_F1, etc.
     * @param symbol a keyval
     */
    function keyval_convert_case(symbol: number): [number, number];

    /**
     * Converts a key name to a key value.
     * 
     * The names are the same as those in the
     * <filename>&lt;gdk/gdkkeysyms.h&gt;</filename> header file
     * but without the leading "GDK_KEY_".
     * @param keyval_name a key name
     * @returns the corresponding key value, or %GDK_KEY_VoidSymbol     if the key name is not a valid key
     */
    function keyval_from_name(keyval_name: string): number;

    /**
     * @param keyval 
     */
    function keyval_is_lower(keyval: number): boolean;

    /**
     * @param keyval 
     */
    function keyval_is_upper(keyval: number): boolean;

    /**
     * Converts a key value into a symbolic name.
     * 
     * The names are the same as those in the
     * <filename>&lt;gdk/gdkkeysyms.h&gt;</filename> header file
     * but without the leading "GDK_KEY_".
     * @param keyval a key value
     * @returns a string containing the name of the key,     or `null` if `keyval` is not a valid key. The string should not be     modified.
     */
    function keyval_name(keyval: number): string;

    /**
     * @param keyval 
     */
    function keyval_to_lower(keyval: number): number;

    /**
     * Convert from a GDK key symbol to the corresponding ISO10646 (Unicode)
     * character.
     * @param keyval a GDK key symbol
     * @returns the corresponding unicode character, or 0 if there               is no corresponding character.
     */
    function keyval_to_unicode(keyval: number): number;

    /**
     * @param keyval 
     */
    function keyval_to_upper(keyval: number): number;

    /**
     * Lists the available visuals for the default screen.
     * (See `gdk_screen_list_visuals()`)
     * A visual describes a hardware image data format.
     * For example, a visual might support 24-bit color, or 8-bit color,
     * and might expect pixels to be in a certain format.
     * 
     * Call `g_list_free()` on the return value when you're finished with it.
     * @returns a list of visuals; the list must be freed, but not its contents
     */
    function list_visuals(): Visual[];

    /**
     * Converts a multi-byte string to a wide character string.
     * (The function name comes from an acronym of 'Multi-Byte String TO Wide
     * Character String').
     * @param dest the space to place the converted wide character string into.
     * @param src the multi-byte string to convert, which must be nul-terminated.
     * @param dest_max the maximum number of wide characters to place in `dest`.
     * @returns the number of wide characters written into `dest`, or -1 if   the conversion failed.
     */
    function mbstowcs(dest: WChar, src: string, dest_max: number): number;

    /**
     * Indicates to the GUI environment that the application has finished
     * loading. If the applications opens windows, this function is
     * normally called after opening the application's initial set of
     * windows.
     * 
     * GTK+ will call this function automatically after opening the first
     * `GtkWindow` unless `gtk_window_set_auto_startup_notification()` is called
     * to disable that feature.
     * @since 2.2
     */
    function notify_startup_complete(): void;

    /**
     * Indicates to the GUI environment that the application has finished
     * loading, using a given identifier.
     * 
     * GTK+ will call this function automatically for `GtkWindow` with custom
     * startup-notification identifier unless
     * `gtk_window_set_auto_startup_notification()` is called to disable
     * that feature.
     * @param startup_id a startup-notification identifier, for which notification              process should be completed
     * @since 2.12
     */
    function notify_startup_complete_with_id(startup_id: string): void;

    /**
     * Sets `window` to be embedded in `embedder`.
     * 
     * To fully embed an offscreen window, in addition to calling this
     * function, it is also necessary to handle the {@link Gdk.Window.SignalSignatures.pick_embedded_child | Gdk.Window::pick-embedded-child}
     * signal on the `embedder` and the {@link Gdk.Window.SignalSignatures.to_embedder | Gdk.Window::to-embedder} and
     * {@link Gdk.Window.SignalSignatures.from_embedder | Gdk.Window::from-embedder} signals on `window`.
     * @param window a {@link Gdk.Window}
     * @param embedder the {@link Gdk.Window} that `window` gets embedded in
     * @since 2.18
     */
    function offscreen_window_set_embedder(window: Window, embedder: Window): void;

    /**
     * Creates a new attribute specifying the color to emboss text with.
     * @param color a GdkColor representing the color to emboss with
     * @returns new {@link Pango.Attribute}
     * @since 2.12
     */
    function pango_attr_emboss_color_new(color: Color): Pango.Attribute;

    /**
     * Creates a new attribute flagging a region as embossed or not.
     * @param embossed if the region should be embossed
     * @returns new {@link Pango.Attribute}
     */
    function pango_attr_embossed_new(embossed: boolean): Pango.Attribute;

    /**
     * Creates a new attribute containing a stipple bitmap to be used when
     * rendering the text.
     * @param stipple a bitmap to be set as stipple
     * @returns new {@link Pango.Attribute}
     */
    function pango_attr_stipple_new(stipple: Bitmap): Pango.Attribute;

    /**
     * This function used to set the colormap to be used for drawing with
     * `context`. The colormap is now always derived from the graphics
     * context used for drawing, so calling this function is no longer
     * necessary.
     * @param context a {@link Pango.Context}
     * @param colormap a {@link Gdk.Colormap}
     */
    function pango_context_set_colormap(context: Pango.Context, colormap: Colormap): void;

    /**
     * Parse command line arguments, and store for future
     * use by calls to `gdk_display_open()`.
     * 
     * Any arguments used by GDK are removed from the array and `argc` and `argv` are
     * updated accordingly.
     * 
     * You shouldn't call this function explicitely if you are using
     * `gtk_init()`, `gtk_init_check()`, `gdk_init()`, or `gdk_init_check()`.
     * @param argv the array of command line arguments.
     * @since 2.2
     */
    function parse_args(argv: string[]): string[];

    /**
     * Creates a pixmap and a mask bitmap which are returned in the `pixmap_return`
     * and `mask_return` arguments, respectively, and renders a pixbuf and its
     * corresponding thresholded alpha mask to them.  This is merely a convenience
     * function; applications that need to render pixbufs with dither offsets or to
     * given drawables should use `gdk_draw_pixbuf()` and `gdk_pixbuf_render_threshold_alpha()`.
     * 
     * The pixmap that is created is created for the colormap returned
     * by `gdk_rgb_get_colormap()`. You normally will want to instead use
     * the actual colormap for a widget, and use
     * `gdk_pixbuf_render_pixmap_and_mask_for_colormap()`.
     * 
     * If the pixbuf does not have an alpha channel, then *`mask_return` will be set
     * to `null`.
     * @param pixbuf A pixbuf.
     * @param pixmap_return Location to store a pointer to the created pixmap,   or `null` if the pixmap is not needed.
     * @param mask_return Location to store a pointer to the created mask,   or `null` if the mask is not needed.
     * @param alpha_threshold Threshold value for opacity values.
     */
    function pixbuf_render_pixmap_and_mask(pixbuf: GdkPixbuf.Pixbuf, pixmap_return: Pixmap, mask_return: Bitmap, alpha_threshold: number): void;

    /**
     * Creates a pixmap and a mask bitmap which are returned in the `pixmap_return`
     * and `mask_return` arguments, respectively, and renders a pixbuf and its
     * corresponding tresholded alpha mask to them.  This is merely a convenience
     * function; applications that need to render pixbufs with dither offsets or to
     * given drawables should use `gdk_draw_pixbuf()`, and `gdk_pixbuf_render_threshold_alpha()`.
     * 
     * The pixmap that is created uses the {@link Gdk.Colormap} specified by `colormap`.
     * This colormap must match the colormap of the window where the pixmap
     * will eventually be used or an error will result.
     * 
     * If the pixbuf does not have an alpha channel, then *`mask_return` will be set
     * to `null`.
     * @param pixbuf A pixbuf.
     * @param colormap A {@link Gdk.Colormap}
     * @param pixmap_return Location to store a pointer to the created pixmap,   or `null` if the pixmap is not needed.
     * @param mask_return Location to store a pointer to the created mask,   or `null` if the mask is not needed.
     * @param alpha_threshold Threshold value for opacity values.
     */
    function pixbuf_render_pixmap_and_mask_for_colormap(pixbuf: GdkPixbuf.Pixbuf, colormap: Colormap, pixmap_return: Pixmap, mask_return: Bitmap, alpha_threshold: number): void;

    /**
     * Takes the opacity values in a rectangular portion of a pixbuf and thresholds
     * them to produce a bi-level alpha mask that can be used as a clipping mask for
     * a drawable.
     * @param pixbuf A pixbuf.
     * @param bitmap Bitmap where the bilevel mask will be painted to.
     * @param src_x Source X coordinate.
     * @param src_y source Y coordinate.
     * @param dest_x Destination X coordinate.
     * @param dest_y Destination Y coordinate.
     * @param width Width of region to threshold, or -1 to use pixbuf width
     * @param height Height of region to threshold, or -1 to use pixbuf height
     * @param alpha_threshold Opacity values below this will be painted as zero; all other values will be painted as one.
     */
    function pixbuf_render_threshold_alpha(pixbuf: GdkPixbuf.Pixbuf, bitmap: Bitmap, src_x: number, src_y: number, dest_x: number, dest_y: number, width: number, height: number, alpha_threshold: number): void;

    /**
     * Renders a rectangular portion of a pixbuf to a drawable while using the
     * specified GC.  This is done using GdkRGB, so the specified drawable must have
     * the GdkRGB visual and colormap.  Note that this function will ignore the
     * opacity information for images with an alpha channel; the GC must already
     * have the clipping mask set if you want transparent regions to show through.
     * 
     * For an explanation of dither offsets, see the GdkRGB documentation.  In
     * brief, the dither offset is important when re-rendering partial regions of an
     * image to a rendered version of the full image, or for when the offsets to a
     * base position change, as in scrolling.  The dither matrix has to be shifted
     * for consistent visual results.  If you do not have any of these cases, the
     * dither offsets can be both zero.
     * @param pixbuf A pixbuf.
     * @param drawable Destination drawable.
     * @param gc GC used for rendering.
     * @param src_x Source X coordinate within pixbuf.
     * @param src_y Source Y coordinate within pixbuf.
     * @param dest_x Destination X coordinate within drawable.
     * @param dest_y Destination Y coordinate within drawable.
     * @param width Width of region to render, in pixels, or -1 to use pixbuf width
     * @param height Height of region to render, in pixels, or -1 to use pixbuf height
     * @param dither Dithering mode for GdkRGB.
     * @param x_dither X offset for dither.
     * @param y_dither Y offset for dither.
     * @deprecated since 2.4: This function is obsolete. Use `gdk_draw_pixbuf()` instead.
     */
    function pixbuf_render_to_drawable(pixbuf: GdkPixbuf.Pixbuf, drawable: Drawable, gc: GC, src_x: number, src_y: number, dest_x: number, dest_y: number, width: number, height: number, dither: RgbDither, x_dither: number, y_dither: number): void;

    /**
     * Renders a rectangular portion of a pixbuf to a drawable.  The destination
     * drawable must have a colormap. All windows have a colormap, however, pixmaps
     * only have colormap by default if they were created with a non-`null` window argument.
     * Otherwise a colormap must be set on them with gdk_drawable_set_colormap.
     * 
     * On older X servers, rendering pixbufs with an alpha channel involves round trips
     * to the X server, and may be somewhat slow.
     * @param pixbuf A pixbuf.
     * @param drawable Destination drawable.
     * @param src_x Source X coordinate within pixbuf.
     * @param src_y Source Y coordinates within pixbuf.
     * @param dest_x Destination X coordinate within drawable.
     * @param dest_y Destination Y coordinate within drawable.
     * @param width Width of region to render, in pixels, or -1 to use pixbuf width.
     * @param height Height of region to render, in pixels, or -1 to use pixbuf height.
     * @param alpha_mode Ignored. Present for backwards compatibility.
     * @param alpha_threshold Ignored. Present for backwards compatibility
     * @param dither Dithering mode for GdkRGB.
     * @param x_dither X offset for dither.
     * @param y_dither Y offset for dither.
     * @deprecated since 2.4: This function is obsolete. Use `gdk_draw_pixbuf()` instead.
     */
    function pixbuf_render_to_drawable_alpha(pixbuf: GdkPixbuf.Pixbuf, drawable: Drawable, src_x: number, src_y: number, dest_x: number, dest_y: number, width: number, height: number, alpha_mode: GdkPixbuf.PixbufAlphaMode, alpha_threshold: number, dither: RgbDither, x_dither: number, y_dither: number): void;

    /**
     * @param window 
     * @param owner_events 
     * @param event_mask 
     * @param confine_to 
     * @param cursor 
     * @param time_ 
     */
    function pointer_grab(window: Window, owner_events: boolean, event_mask: EventMask, confine_to: Window, cursor: Cursor, time_: number): GrabStatus;

    /**
     * Determines information about the current pointer grab.
     * This is not public API and must not be used by applications.
     * @param display the {@link Gdk.Display} for which to get the grab information
     * @param grab_window location to store current grab window
     * @param owner_events location to store boolean indicating whether   the `owner_events` flag to `gdk_pointer_grab()` was `true`.
     * @returns `true` if this application currently has the  pointer grabbed.
     */
    function pointer_grab_info_libgtk_only(display: Display, grab_window: Window, owner_events: boolean): boolean;

    /**
     * Returns `true` if the pointer on the default display is currently
     * grabbed by this application.
     * 
     * Note that this does not take the inmplicit pointer grab on button
     * presses into account.
     * @returns `true` if the pointer is currently grabbed by this application.*
     */
    function pointer_is_grabbed(): boolean;

    /**
     * Ungrabs the pointer on the default display, if it is grabbed by this
     * application.
     * @param time_ a timestamp from a {@link Gdk.Event}, or `GDK_CURRENT_TIME` if no  timestamp is available.
     */
    function pointer_ungrab(time_: number): void;

    function pre_parse_libgtk_only(): void;

    /**
     * @param window 
     * @param property 
     * @param type 
     * @param format 
     * @param mode 
     * @param data 
     * @param nelements 
     */
    function property_change(window: Window, property: Atom, type: Atom, format: number, mode: PropMode, data: number, nelements: number): void;

    /**
     * @param window 
     * @param property 
     */
    function property_delete(window: Window, property: Atom): void;

    /**
     * @param window 
     * @param property 
     * @param type 
     * @param offset 
     * @param length 
     * @param pdelete 
     * @param actual_property_type 
     * @param actual_format 
     * @param actual_length 
     * @param data 
     */
    function property_get(window: Window, property: Atom, type: Atom, offset: bigint | number, length: bigint | number, pdelete: number, actual_property_type: Atom, actual_format: number, actual_length: number, data: number): boolean;

    /**
     * This function returns the available bit depths for the default
     * screen. It's equivalent to listing the visuals
     * (gdk_list_visuals()) and then looking at the depth field in each
     * visual, removing duplicates.
     * 
     * The array returned by this function should not be freed.
     */
    function query_depths(): [number[], number];

    /**
     * This function returns the available visual types for the default
     * screen. It's equivalent to listing the visuals
     * (gdk_list_visuals()) and then looking at the type field in each
     * visual, removing duplicates.
     * 
     * The array returned by this function should not be freed.
     * @param visual_types return location for the available visual types
     * @param count return location for the number of available visual types
     */
    function query_visual_types(visual_types: VisualType, count: number): void;

    /**
     * @param cmap 
     */
    function rgb_colormap_ditherable(cmap: Colormap): boolean;

    function rgb_ditherable(): boolean;

    /**
     * `colormap` should be the colormap for the graphics context and
     * drawable you're using to draw. If you're drawing to a `GtkWidget`,
     * call `gtk_widget_get_colormap()`.
     * 
     * `color` should have its %red, %green, and %blue fields initialized;
     * `gdk_rgb_find_color()` will fill in the %pixel field with the best
     * matching pixel from a color cube. The color is then ready to be
     * used for drawing, e.g. you can call `gdk_gc_set_foreground()` which
     * expects %pixel to be initialized.
     * 
     * In many cases, you can avoid this whole issue by calling
     * `gdk_gc_set_rgb_fg_color()` or `gdk_gc_set_rgb_bg_color()`, which
     * do not expect %pixel to be initialized in advance. If you use those
     * functions, there's no need for `gdk_rgb_find_color()`.
     * @param colormap a {@link Gdk.Colormap}
     * @param color a {@link Gdk.Color}
     * @deprecated since 2.22: Cairo handles colors automatically.
     */
    function rgb_find_color(colormap: Colormap, color: Color): void;

    /**
     * @param gc 
     * @param rgb 
     */
    function rgb_gc_set_background(gc: GC, rgb: number): void;

    /**
     * @param gc 
     * @param rgb 
     */
    function rgb_gc_set_foreground(gc: GC, rgb: number): void;

    /**
     * Get the preferred colormap for rendering image data.  Not a
     * very useful function; historically, GDK could only render RGB image
     * data to one colormap and visual, but in the current version it can
     * render to any colormap and visual. So there's no need to call this
     * function.
     * @returns the preferred colormap
     * @deprecated since 2.22: Use gdk_screen_get_system_colormap (gdk_screen_get_default ()) instead.
     */
    function rgb_get_colormap(): Colormap;

    /**
     * Gets a "preferred visual" chosen by GdkRGB for rendering image data
     * on the default screen. In previous versions of GDK, this was the
     * only visual GdkRGB could use for rendering. In current versions,
     * it's simply the visual GdkRGB would have chosen as the optimal one
     * in those previous versions. GdkRGB can now render to drawables with
     * any visual.
     * @returns The {@link Gdk.Visual} chosen by GdkRGB.
     * @deprecated since 2.22: Use gdk_visual_get_system_visual (gdk_screen_get_default ()) instead.
     */
    function rgb_get_visual(): Visual;

    function rgb_init(): void;

    /**
     * @param install 
     */
    function rgb_set_install(install: boolean): void;

    /**
     * @param min_colors 
     */
    function rgb_set_min_colors(min_colors: number): void;

    /**
     * @param verbose 
     */
    function rgb_set_verbose(verbose: boolean): void;

    /**
     * @param rgb 
     */
    function rgb_xpixel_from_rgb(rgb: number): number;

    /**
     * @param requestor 
     * @param selection 
     * @param target 
     * @param time_ 
     */
    function selection_convert(requestor: Window, selection: Atom, target: Atom, time_: number): void;

    /**
     * @param owner 
     * @param selection 
     * @param time_ 
     * @param send_event 
     */
    function selection_owner_set(owner: Window, selection: Atom, time_: number, send_event: boolean): boolean;

    /**
     * Sets the {@link Gdk.Window} `owner` as the current owner of the selection `selection`.
     * @param display the {@link Gdk.Display}.
     * @param owner a {@link Gdk.Window} or `null` to indicate that the owner for         the given should be unset.
     * @param selection an atom identifying a selection.
     * @param time_ timestamp to use when setting the selection.         If this is older than the timestamp given last time the owner was         set for the given selection, the request will be ignored.
     * @param send_event if `true`, and the new owner is different from the current              owner, the current owner will be sent a SelectionClear event.
     * @returns `true` if the selection owner was successfully changed to owner,     otherwise `false`.
     * @since 2.2
     */
    function selection_owner_set_for_display(display: Display, owner: Window, selection: Atom, time_: number, send_event: boolean): boolean;

    /**
     * Retrieves selection data that was stored by the selection
     * data in response to a call to `gdk_selection_convert()`. This function
     * will not be used by applications, who should use the `GtkClipboard`
     * API instead.
     * @param requestor the window on which the data is stored
     * @param data location to store a pointer to the retrieved data.        If the retrieval failed, `null` we be stored here, otherwise, it        will be non-`null` and the returned data should be freed with `g_free()`        when you are finished using it. The length of the        allocated memory is one more than the length        of the returned data, and the final byte will always        be zero, to ensure nul-termination of strings.
     * @param prop_type location to store the type of the property.
     * @param prop_format location to store the format of the property.
     * @returns the length of the retrieved data.
     */
    function selection_property_get(requestor: Window, data: number, prop_type: Atom, prop_format: number): number;

    /**
     * @param requestor 
     * @param selection 
     * @param target 
     * @param property 
     * @param time_ 
     */
    function selection_send_notify(requestor: NativeWindow, selection: Atom, target: Atom, property: Atom, time_: number): void;

    /**
     * Send a response to SelectionRequest event.
     * @param display the {@link Gdk.Display} where `requestor` is realized
     * @param requestor window to which to deliver response.
     * @param selection selection that was requested.
     * @param target target that was selected.
     * @param property property in which the selection owner stored the data,            or `GDK_NONE` to indicate that the request was rejected.
     * @param time_ timestamp.
     * @since 2.2
     */
    function selection_send_notify_for_display(display: Display, requestor: NativeWindow, selection: Atom, target: Atom, property: Atom, time_: number): void;

    /**
     * Set the double click time for the default display. See
     * `gdk_display_set_double_click_time()`.
     * See also `gdk_display_set_double_click_distance()`.
     * Applications should <emphasis>not</emphasis> set this, it is a
     * global user-configured setting.
     * @param msec double click time in milliseconds (thousandths of a second)
     */
    function set_double_click_time(msec: number): void;

    function set_locale(): string;

    /**
     * @param program_class 
     */
    function set_program_class(program_class: string): void;

    /**
     * Sets whether a trace of received events is output.
     * Note that GTK+ must be compiled with debugging (that is,
     * configured using the <option>--enable-debug</option> option)
     * to use this option.
     * @param show_events `true` to output event debugging information.
     */
    function set_show_events(show_events: boolean): void;

    /**
     * Sets the <literal>SM_CLIENT_ID</literal> property on the application's leader window so that
     * the window manager can save the application's state using the X11R6 ICCCM
     * session management protocol.
     * 
     * See the X Session Management Library documentation for more information on
     * session management and the Inter-Client Communication Conventions Manual
     * (ICCCM) for information on the <literal>WM_CLIENT_LEADER</literal> property.
     * (Both documents are part of the X Window System distribution.)
     * @param sm_client_id the client id assigned by the session manager when the    connection was opened, or `null` to remove the property.
     * @deprecated since 2.24: Use `gdk_x11_set_sm_client_id()` instead
     */
    function set_sm_client_id(sm_client_id: string): void;

    /**
     * @param use_xshm 
     */
    function set_use_xshm(use_xshm: boolean): void;

    /**
     * Obtains a desktop-wide setting, such as the double-click time,
     * for the default screen. See `gdk_screen_get_setting()`.
     * @param name the name of the setting.
     * @param value location to store the value of the setting.
     * @returns `true` if the setting existed and a value was stored   in `value`, `false` otherwise.
     */
    function setting_get(name: string, value: GObject.Value | any): boolean;

    /**
     * Like `g_spawn_command_line_async()`, except the child process is
     * spawned in such an environment that on calling `gdk_display_open()`
     * it would be returned a {@link Gdk.Display} with `screen` as the default
     * screen.
     * 
     * This is useful for applications which wish to launch an application
     * on a specific screen.
     * @param screen a {@link Gdk.Screen}
     * @param command_line a command line
     * @returns `true` on success, `false` if error is set.
     * @since 2.4
     * @deprecated since 2.24: This function is being removed in 3.0. Use     either `g_spawn_command_line_sync()`, `g_spawn_command_line_async()` or     {@link Gdk.AppLaunchContext} instead.
     * @throws GLib.Error
     */
    function spawn_command_line_on_screen(screen: Screen, command_line: string): boolean;

    /**
     * Gets the metrics of a nul-terminated string.
     * @param font a {@link Gdk.Font}.
     * @param string the nul-terminated string to measure.
     * @param lbearing the left bearing of the string.
     * @param rbearing the right bearing of the string.
     * @param width the width of the string.
     * @param ascent the ascent of the string.
     * @param descent the descent of the string.
     */
    function string_extents(font: Font, string: string, lbearing: number, rbearing: number, width: number, ascent: number, descent: number): void;

    /**
     * Determines the total height of a given nul-terminated
     * string. This value is not generally useful, because you
     * cannot determine how this total height will be drawn in
     * relation to the baseline. See `gdk_string_extents()`.
     * @param font a {@link Gdk.Font}
     * @param string the nul-terminated string to measure.
     * @returns the height of the string in pixels.
     */
    function string_height(font: Font, string: string): number;

    /**
     * Determines the distance from the origin to the rightmost
     * portion of a nul-terminated string when drawn. This is not the
     * correct value for determining the origin of the next
     * portion when drawing text in multiple pieces.
     * See `gdk_string_width()`.
     * @param font a {@link Gdk.Font}
     * @param string the nul-terminated string to measure.
     * @returns the right bearing of the string in pixels.
     */
    function string_measure(font: Font, string: string): number;

    /**
     * @param str 
     * @param encoding 
     * @param format 
     * @param ctext 
     * @param length 
     */
    function string_to_compound_text(str: string, encoding: Atom, format: number, ctext: number, length: number): number;

    /**
     * Convert a string from the encoding of the current
     * locale into a form suitable for storing in a window property.
     * @param display the {@link Gdk.Display} where the encoding is defined.
     * @param str a nul-terminated string.
     * @param encoding location to store the encoding atom       (to be used as the type for the property).
     * @param format location to store the format of the property
     * @param ctext location to store newly allocated data for the property.
     * @param length the length of `text`, in bytes
     * @returns 0 upon success, non-zero upon failure.
     * @since 2.2
     * @deprecated since 2.24: Use `gdk_x11_display_string_to_compound_text()`
     */
    function string_to_compound_text_for_display(display: Display, str: string, encoding: Atom, format: number, ctext: number, length: number): number;

    /**
     * Determines the width of a nul-terminated string.
     * (The distance from the origin of the string to the
     * point where the next string in a sequence of strings
     * should be drawn)
     * @param font a {@link Gdk.Font}
     * @param string the nul-terminated string to measure
     * @returns the width of the string in pixels.
     */
    function string_width(font: Font, string: string): number;

    /**
     * @param window 
     * @param unset_flags 
     * @param set_flags 
     */
    function synthesize_window_state(window: Window, unset_flags: WindowState, set_flags: WindowState): void;

    /**
     * This function retrieves a pixel from `window` to force the windowing
     * system to carry out any pending rendering commands.
     * This function is intended to be used to syncronize with rendering
     * pipelines, to benchmark windowing system rendering operations.
     * @param window a mapped {@link Gdk.Window}
     * @since 2.14
     */
    function test_render_sync(window: Window): void;

    /**
     * This function is intended to be used in GTK+ test programs.
     * It will warp the mouse pointer to the given (`x`,`y`) corrdinates
     * within `window` and simulate a button press or release event.
     * Because the mouse pointer needs to be warped to the target
     * location, use of this function outside of test programs that
     * run in their own virtual windowing system (e.g. Xvfb) is not
     * recommended.
     * 
     * Also, `gtk_test_simulate_button()` is a fairly low level function,
     * for most testing purposes, `gtk_test_widget_click()` is the right
     * function to call which will generate a button press event followed
     * by its accompanying button release event.
     * @param window a {@link Gdk.Window} to simulate a button event for.
     * @param x x coordinate within `window` for the button event.
     * @param y y coordinate within `window` for the button event.
     * @param button Number of the pointer button for the event, usually 1, 2 or 3.
     * @param modifiers Keyboard modifiers the event is setup with.
     * @param button_pressrelease either {@link Gdk.EventType.BUTTON_PRESS} or {@link Gdk.EventType.BUTTON_RELEASE}
     * @returns whether all actions neccessary for a button event simulation     were carried out successfully.
     * @since 2.14
     */
    function test_simulate_button(window: Window, x: number, y: number, button: number, modifiers: ModifierType, button_pressrelease: EventType): boolean;

    /**
     * This function is intended to be used in GTK+ test programs.
     * If (`x`,`y`) are > (-1,-1), it will warp the mouse pointer to
     * the given (`x`,`y`) corrdinates within `window` and simulate a
     * key press or release event.
     * 
     * When the mouse pointer is warped to the target location, use
     * of this function outside of test programs that run in their
     * own virtual windowing system (e.g. Xvfb) is not recommended.
     * If (`x`,`y`) are passed as (-1,-1), the mouse pointer will not
     * be warped and `window` origin will be used as mouse pointer
     * location for the event.
     * 
     * Also, `gtk_test_simulate_key()` is a fairly low level function,
     * for most testing purposes, `gtk_test_widget_send_key()` is the
     * right function to call which will generate a key press event
     * followed by its accompanying key release event.
     * @param window a {@link Gdk.Window} to simulate a key event for.
     * @param x x coordinate within `window` for the key event.
     * @param y y coordinate within `window` for the key event.
     * @param keyval A GDK keyboard value.
     * @param modifiers Keyboard modifiers the event is setup with.
     * @param key_pressrelease either {@link Gdk.EventType.KEY_PRESS} or {@link Gdk.EventType.KEY_RELEASE}
     * @returns whether all actions neccessary for a key event simulation     were carried out successfully.
     * @since 2.14
     */
    function test_simulate_key(window: Window, x: number, y: number, keyval: number, modifiers: ModifierType, key_pressrelease: EventType): boolean;

    /**
     * @param font 
     * @param text 
     * @param text_length 
     * @param lbearing 
     * @param rbearing 
     * @param width 
     * @param ascent 
     * @param descent 
     */
    function text_extents(font: Font, text: string, text_length: number, lbearing: number, rbearing: number, width: number, ascent: number, descent: number): void;

    /**
     * @param font 
     * @param text 
     * @param text_length 
     * @param lbearing 
     * @param rbearing 
     * @param width 
     * @param ascent 
     * @param descent 
     */
    function text_extents_wc(font: Font, text: WChar, text_length: number, lbearing: number, rbearing: number, width: number, ascent: number, descent: number): void;

    /**
     * Determines the total height of a given string.
     * This value is not generally useful, because you cannot
     * determine how this total height will be drawn in
     * relation to the baseline. See `gdk_text_extents()`.
     * @param font a {@link Gdk.Font}
     * @param text the text to measure.
     * @param text_length the length of the text in bytes.
     * @returns the height of the string in pixels.
     */
    function text_height(font: Font, text: string, text_length: number): number;

    /**
     * Determines the distance from the origin to the rightmost
     * portion of a string when drawn. This is not the
     * correct value for determining the origin of the next
     * portion when drawing text in multiple pieces.
     * See `gdk_text_width()`.
     * @param font a {@link Gdk.Font}
     * @param text the text to measure.
     * @param text_length the length of the text in bytes.
     * @returns the right bearing of the string in pixels.
     */
    function text_measure(font: Font, text: string, text_length: number): number;

    /**
     * @param encoding 
     * @param format 
     * @param text 
     * @param length 
     * @param list 
     */
    function text_property_to_text_list(encoding: Atom, format: number, text: number, length: number, list: string): number;

    /**
     * Convert a text string from the encoding as it is stored
     * in a property into an array of strings in the encoding of
     * the current locale. (The elements of the array represent the
     * nul-separated elements of the original text string.)
     * @param display The {@link Gdk.Display} where the encoding is defined.
     * @param encoding an atom representing the encoding. The most    common values for this are STRING, or COMPOUND_TEXT.    This is value used as the type for the property.
     * @param format the format of the property.
     * @param text The text data.
     * @param length The number of items to transform.
     * @param list location to store a terminated array of strings in    the encoding of the current locale. This array should be    freed using `gdk_free_text_list()`.
     * @returns the number of strings stored in list, or 0, if the conversion failed.
     * @since 2.2
     * @deprecated since 2.24: Use `gdk_x11_display_text_property_to_text_list()`
     */
    function text_property_to_text_list_for_display(display: Display, encoding: Atom, format: number, text: number, length: number, list: string): number;

    /**
     * Convert a text property in the giving encoding to
     * a list of UTF-8 strings.
     * @param encoding an atom representing the encoding of the text
     * @param format the format of the property
     * @param text the text to convert
     * @param length the length of `text`, in bytes
     * @param list location to store the list of strings or `null`. The            list should be freed with `g_strfreev()`.
     * @returns the number of strings in the resulting               list.
     */
    function text_property_to_utf8_list(encoding: Atom, format: number, text: number, length: number, list: string | null): number;

    /**
     * Converts a text property in the given encoding to
     * a list of UTF-8 strings.
     * @param display a {@link Gdk.Display}
     * @param encoding an atom representing the encoding of the text
     * @param format the format of the property
     * @param text the text to convert
     * @param length the length of `text`, in bytes
     * @param list location to store the list of strings or `null`. The            list should be freed with `g_strfreev()`.
     * @returns the number of strings in the resulting               list.
     * @since 2.2
     */
    function text_property_to_utf8_list_for_display(display: Display, encoding: Atom, format: number, text: number, length: number, list: string): number;

    /**
     * @param font 
     * @param text 
     * @param text_length 
     */
    function text_width(font: Font, text: string, text_length: number): number;

    /**
     * @param font 
     * @param text 
     * @param text_length 
     */
    function text_width_wc(font: Font, text: WChar, text_length: number): number;

    /**
     * Adds a function to be called whenever there are no higher priority
     * events pending.  If the function returns `false` it is automatically
     * removed from the list of event sources and will not be called again.
     * 
     * This variant of `g_idle_add_full()` calls `function` with the GDK lock
     * held. It can be thought of a MT-safe version for GTK+ widgets for the
     * following use case, where you have to worry about `idle_callback()`
     * running in thread A and accessing `self` after it has been finalized
     * in thread B:
     * 
     * 
     * ```
     * static gboolean
     * idle_callback (gpointer data)
     * {
     *    /&ast; `gdk_threads_enter()`; would be needed for `g_idle_add()` &ast;/
     * 
     *    SomeWidget *self = data;
     *    /&ast; do stuff with self &ast;/
     * 
     *    self->idle_id = 0;
     * 
     *    /&ast; `gdk_threads_leave()`; would be needed for `g_idle_add()` &ast;/
     *    return FALSE;
     * }
     * 
     * static void
     * some_widget_do_stuff_later (SomeWidget *self)
     * {
     *    self->idle_id = gdk_threads_add_idle (idle_callback, self)
     *    /&ast; using `g_idle_add()` here would require thread protection in the callback &ast;/
     * }
     * 
     * static void
     * some_widget_finalize (GObject *object)
     * {
     *    SomeWidget *self = SOME_WIDGET (object);
     *    if (self->idle_id)
     *      g_source_remove (self->idle_id);
     *    G_OBJECT_CLASS (parent_class)->finalize (object);
     * }
     * ```
     * 
     * @param priority the priority of the idle source. Typically this will be in the            range btweeen #G_PRIORITY_DEFAULT_IDLE and #G_PRIORITY_HIGH_IDLE
     * @param _function function to call
     * @returns the ID (greater than 0) of the event source.
     * @since 2.12
     */
    function threads_add_idle_full(priority: number, _function: GLib.SourceFunc): number;

    /**
     * Sets a function to be called at regular intervals holding the GDK lock,
     * with the given priority.  The function is called repeatedly until it
     * returns `false`, at which point the timeout is automatically destroyed
     * and the function will not be called again.  The `notify` function is
     * called when the timeout is destroyed.  The first call to the
     * function will be at the end of the first `interval`.
     * 
     * Note that timeout functions may be delayed, due to the processing of other
     * event sources. Thus they should not be relied on for precise timing.
     * After each call to the timeout function, the time of the next
     * timeout is recalculated based on the current time and the given interval
     * (it does not try to 'catch up' time lost in delays).
     * 
     * This variant of `g_timeout_add_full()` can be thought of a MT-safe version
     * for GTK+ widgets for the following use case:
     * 
     * 
     * ```
     * static gboolean timeout_callback (gpointer data)
     * {
     *    SomeWidget *self = data;
     *    
     *    /&ast; do stuff with self &ast;/
     *    
     *    self->timeout_id = 0;
     *    
     *    return FALSE;
     * }
     *  
     * static void some_widget_do_stuff_later (SomeWidget *self)
     * {
     *    self->timeout_id = g_timeout_add (timeout_callback, self)
     * }
     *  
     * static void some_widget_finalize (GObject *object)
     * {
     *    SomeWidget *self = SOME_WIDGET (object);
     *    
     *    if (self->timeout_id)
     *      g_source_remove (self->timeout_id);
     *    
     *    G_OBJECT_CLASS (parent_class)->finalize (object);
     * }
     * ```
     * 
     * @param priority the priority of the timeout source. Typically this will be in the            range between #G_PRIORITY_DEFAULT_IDLE and #G_PRIORITY_HIGH_IDLE.
     * @param interval the time between calls to the function, in milliseconds             (1/1000ths of a second)
     * @param _function function to call
     * @returns the ID (greater than 0) of the event source.
     * @since 2.12
     */
    function threads_add_timeout_full(priority: number, interval: number, _function: GLib.SourceFunc): number;

    /**
     * A variant of `gdk_threads_add_timout_full()` with second-granularity.
     * See `g_timeout_add_seconds_full()` for a discussion of why it is
     * a good idea to use this function if you don't need finer granularity.
     * 
     *  Return value: the ID (greater than 0) of the event source.
     * @param priority the priority of the timeout source. Typically this will be in the            range between #G_PRIORITY_DEFAULT_IDLE and #G_PRIORITY_HIGH_IDLE.
     * @param interval the time between calls to the function, in seconds
     * @param _function function to call
     * @since 2.14
     */
    function threads_add_timeout_seconds_full(priority: number, interval: number, _function: GLib.SourceFunc): number;

    function threads_enter(): void;

    /**
     * Initializes GDK so that it can be used from multiple threads
     * in conjunction with `gdk_threads_enter()` and `gdk_threads_leave()`.
     * `g_thread_init()` must be called previous to this function.
     * 
     * This call must be made before any use of the main loop from
     * GTK+; to be safe, call it before `gtk_init()`.
     */
    function threads_init(): void;

    function threads_leave(): void;

    /**
     * Convert from a ISO10646 character to a key symbol.
     * @param wc a ISO10646 encoded character
     * @returns the corresponding GDK key symbol, if one exists.               or, if there is no corresponding symbol,               wc | 0x01000000
     */
    function unicode_to_keyval(wc: number): number;

    /**
     * Convert from UTF-8 to compound text.
     * @param str a UTF-8 string
     * @param encoding location to store resulting encoding
     * @param format location to store format of the result
     * @param ctext location to store the data of the result
     * @param length location to store the length of the data            stored in `ctext`
     * @returns `true` if the conversion succeeded, otherwise               false.
     */
    function utf8_to_compound_text(str: string, encoding: Atom, format: number, ctext: number, length: number): boolean;

    /**
     * Converts from UTF-8 to compound text.
     * @param display a {@link Gdk.Display}
     * @param str a UTF-8 string
     * @param encoding location to store resulting encoding
     * @param format location to store format of the result
     * @param ctext location to store the data of the result
     * @param length location to store the length of the data            stored in `ctext`
     * @returns `true` if the conversion succeeded, otherwise               `false`.
     * @since 2.2
     * @deprecated since 2.24: Use `gdk_x11_display_utf8_to_compound_text()`
     */
    function utf8_to_compound_text_for_display(display: Display, str: string, encoding: Atom, format: number, ctext: number, length: number): boolean;

    /**
     * Converts an UTF-8 string into the best possible representation
     * as a STRING. The representation of characters not in STRING
     * is not specified; it may be as pseudo-escape sequences
     * \x{ABCD}, or it may be in some other form of approximation.
     * @param str a UTF-8 string
     * @returns the newly-allocated string, or `null` if the               conversion failed. (It should not fail for               any properly formed UTF-8 string unless system               limits like memory or file descriptors are exceeded.)
     */
    function utf8_to_string_target(str: string): string;

    /**
     * Converts a wide character string to a multi-byte string.
     * (The function name comes from an acronym of 'Wide Character String TO
     * Multi-Byte String').
     * @param src a wide character string.
     * @returns the multi-byte string corresponding to `src`, or `null` if the conversion failed. The returned string should be freed with `g_free()` when no longer needed.
     */
    function wcstombs(src: WChar): string;

    /**
     * Obtains the window underneath the mouse pointer, returning the
     * location of that window in `win_x`, `win_y`. Returns `null` if the
     * window under the mouse pointer is not known to GDK (if the window
     * belongs to another application and a {@link Gdk.Window} hasn't been created
     * for it with `gdk_window_foreign_new()`)
     * 
     * NOTE: For multihead-aware widgets or applications use
     * `gdk_display_get_window_at_pointer()` instead.
     * @returns window under the mouse pointer
     */
    function window_at_pointer(): [Window, number, number];

    /**
     * Constrains a desired width and height according to a
     * set of geometry hints (such as minimum and maximum size).
     * @param geometry a {@link Gdk.Geometry} structure
     * @param flags a mask indicating what portions of `geometry` are set
     * @param width desired width of window
     * @param height desired height of the window
     */
    function window_constrain_size(geometry: Geometry, flags: number, width: number, height: number): [number, number];

    /**
     * Calls `gdk_window_process_updates()` for all windows (see {@link Gdk.Window})
     * in the application.
     */
    function window_process_all_updates(): void;

    /**
     * With update debugging enabled, calls to
     * `gdk_window_invalidate_region()` clear the invalidated region of the
     * screen to a noticeable color, and GDK pauses for a short time
     * before sending exposes to windows during
     * `gdk_window_process_updates()`.  The net effect is that you can see
     * the invalid region for each window and watch redraws as they
     * occur. This allows you to diagnose inefficiencies in your application.
     * 
     * In essence, because the GDK rendering model prevents all flicker,
     * if you are redrawing the same region 400 times you may never
     * notice, aside from noticing a speed problem. Enabling update
     * debugging causes GTK to flicker slowly and noticeably, so you can
     * see exactly what's being redrawn when, in what order.
     * 
     * The --gtk-debug=updates command line option passed to GTK+ programs
     * enables this debug option at application startup time. That's
     * usually more useful than calling `gdk_window_set_debug_updates()`
     * yourself, though you might want to use this function to enable
     * updates sometime after application startup time.
     * @param setting `true` to turn on update debugging
     */
    function window_set_debug_updates(setting: boolean): void;

    /**
     * @gir-type Callback
     */
    interface DestroyNotify {
        (data: null): void;
    }

    /**
     * @gir-type Callback
     */
    interface EventFunc {
        (event: Event, data: null): void;
    }

    /**
     * @gir-type Callback
     */
    interface FilterFunc {
        (xevent: XEvent, event: Event, data: null): FilterReturn;
    }

    /**
     * @gir-type Callback
     */
    interface InputFunction {
        (data: null, source: number, condition: InputCondition): void;
    }

    /**
     * @gir-type Callback
     */
    interface SpanFunc {
        (span: Span, data: null): void;
    }

    /**
     * @gir-type Flags
     */
    export namespace DragAction {
        export const $gtype: GObject.GType<DragAction>;
    }

    /**
     * @gir-type Flags
     */
    enum DragAction {
        DEFAULT = 1,
        COPY = 2,
        MOVE = 4,
        LINK = 8,
        PRIVATE = 16,
        ASK = 32,
    }


    /**
     * @gir-type Flags
     */
    export namespace EventMask {
        export const $gtype: GObject.GType<EventMask>;
    }

    /**
     * @gir-type Flags
     */
    enum EventMask {
        EXPOSURE_MASK = 2,
        POINTER_MOTION_MASK = 4,
        POINTER_MOTION_HINT_MASK = 8,
        BUTTON_MOTION_MASK = 16,
        BUTTON1_MOTION_MASK = 32,
        BUTTON2_MOTION_MASK = 64,
        BUTTON3_MOTION_MASK = 128,
        BUTTON_PRESS_MASK = 256,
        BUTTON_RELEASE_MASK = 512,
        KEY_PRESS_MASK = 1024,
        KEY_RELEASE_MASK = 2048,
        ENTER_NOTIFY_MASK = 4096,
        LEAVE_NOTIFY_MASK = 8192,
        FOCUS_CHANGE_MASK = 16384,
        STRUCTURE_MASK = 32768,
        PROPERTY_CHANGE_MASK = 65536,
        VISIBILITY_NOTIFY_MASK = 131072,
        PROXIMITY_IN_MASK = 262144,
        PROXIMITY_OUT_MASK = 524288,
        SUBSTRUCTURE_MASK = 1048576,
        SCROLL_MASK = 2097152,
        ALL_EVENTS_MASK = 4194302,
    }


    /**
     * @gir-type Flags
     */
    export namespace GCValuesMask {
        export const $gtype: GObject.GType<GCValuesMask>;
    }

    /**
     * @gir-type Flags
     */
    enum GCValuesMask {
        FOREGROUND = 1,
        BACKGROUND = 2,
        FONT = 4,
        FUNCTION = 8,
        FILL = 16,
        TILE = 32,
        STIPPLE = 64,
        CLIP_MASK = 128,
        SUBWINDOW = 256,
        TS_X_ORIGIN = 512,
        TS_Y_ORIGIN = 1024,
        CLIP_X_ORIGIN = 2048,
        CLIP_Y_ORIGIN = 4096,
        EXPOSURES = 8192,
        LINE_WIDTH = 16384,
        LINE_STYLE = 32768,
        CAP_STYLE = 65536,
        JOIN_STYLE = 131072,
    }


    /**
     * @gir-type Flags
     */
    export namespace InputCondition {
        export const $gtype: GObject.GType<InputCondition>;
    }

    /**
     * @gir-type Flags
     */
    enum InputCondition {
        READ = 1,
        WRITE = 2,
        EXCEPTION = 4,
    }


    /**
     * @gir-type Flags
     */
    export namespace ModifierType {
        export const $gtype: GObject.GType<ModifierType>;
    }

    /**
     * @gir-type Flags
     */
    enum ModifierType {
        SHIFT_MASK = 1,
        LOCK_MASK = 2,
        CONTROL_MASK = 4,
        MOD1_MASK = 8,
        MOD2_MASK = 16,
        MOD3_MASK = 32,
        MOD4_MASK = 64,
        MOD5_MASK = 128,
        BUTTON1_MASK = 256,
        BUTTON2_MASK = 512,
        BUTTON3_MASK = 1024,
        BUTTON4_MASK = 2048,
        BUTTON5_MASK = 4096,
        SUPER_MASK = 67108864,
        HYPER_MASK = 134217728,
        META_MASK = 268435456,
        RELEASE_MASK = 1073741824,
        MODIFIER_MASK = 1543512063,
    }


    /**
     * @gir-type Flags
     */
    export namespace WMDecoration {
        export const $gtype: GObject.GType<WMDecoration>;
    }

    /**
     * @gir-type Flags
     */
    enum WMDecoration {
        ALL = 1,
        BORDER = 2,
        RESIZEH = 4,
        TITLE = 8,
        MENU = 16,
        MINIMIZE = 32,
        MAXIMIZE = 64,
    }


    /**
     * @gir-type Flags
     */
    export namespace WMFunction {
        export const $gtype: GObject.GType<WMFunction>;
    }

    /**
     * @gir-type Flags
     */
    enum WMFunction {
        ALL = 1,
        RESIZE = 2,
        MOVE = 4,
        MINIMIZE = 8,
        MAXIMIZE = 16,
        CLOSE = 32,
    }


    /**
     * @gir-type Flags
     */
    export namespace WindowAttributesType {
        export const $gtype: GObject.GType<WindowAttributesType>;
    }

    /**
     * @gir-type Flags
     */
    enum WindowAttributesType {
        TITLE = 2,
        X = 4,
        Y = 8,
        CURSOR = 16,
        COLORMAP = 32,
        VISUAL = 64,
        WMCLASS = 128,
        NOREDIR = 256,
        TYPE_HINT = 512,
    }


    /**
     * @gir-type Flags
     */
    export namespace WindowHints {
        export const $gtype: GObject.GType<WindowHints>;
    }

    /**
     * @gir-type Flags
     */
    enum WindowHints {
        POS = 1,
        MIN_SIZE = 2,
        MAX_SIZE = 4,
        BASE_SIZE = 8,
        ASPECT = 16,
        RESIZE_INC = 32,
        WIN_GRAVITY = 64,
        USER_POS = 128,
        USER_SIZE = 256,
    }


    /**
     * @gir-type Flags
     */
    export namespace WindowState {
        export const $gtype: GObject.GType<WindowState>;
    }

    /**
     * @gir-type Flags
     */
    enum WindowState {
        WITHDRAWN = 1,
        ICONIFIED = 2,
        MAXIMIZED = 4,
        STICKY = 8,
        FULLSCREEN = 16,
        ABOVE = 32,
        BELOW = 64,
    }


    namespace AppLaunchContext {
        // Signal signatures
        interface SignalSignatures extends Gio.AppLaunchContext.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends Gio.AppLaunchContext.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class AppLaunchContext extends Gio.AppLaunchContext {
        static $gtype: GObject.GType<AppLaunchContext>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AppLaunchContext.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AppLaunchContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): AppLaunchContext;

        // Signals
        /** @signal */
        connect<K extends keyof AppLaunchContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AppLaunchContext.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AppLaunchContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AppLaunchContext.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AppLaunchContext.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AppLaunchContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Sets the workspace on which applications will be launched when
         * using this context when running under a window manager that
         * supports multiple workspaces, as described in the
         * <ulink url="http://www.freedesktop.org/Standards/wm-spec">Extended
         * Window Manager Hints</ulink>.
         * 
         * When the workspace is not specified or `desktop` is set to -1,
         * it is up to the window manager to pick one, typically it will
         * be the current workspace.
         * @param desktop the number of a workspace, or -1
         * @since 2.14
         */
        set_desktop(desktop: number): void;

        /**
         * Sets the display on which applications will be launched when
         * using this context. See also `gdk_app_launch_context_set_screen()`.
         * @param display a {@link Gdk.Display}
         * @since 2.14
         */
        set_display(display: Display): void;

        /**
         * Sets the icon for applications that are launched with this
         * context.
         * 
         * Window Managers can use this information when displaying startup
         * notification.
         * 
         * See also `gdk_app_launch_context_set_icon_name()`.
         * @param icon a {@link Gio.Icon}, or `null`
         * @since 2.14
         */
        set_icon(icon: Gio.Icon | null): void;

        /**
         * Sets the icon for applications that are launched with this context.
         * The `icon_name` will be interpreted in the same way as the Icon field
         * in desktop files. See also `gdk_app_launch_context_set_icon()`.
         * 
         * If both `icon` and `icon_name` are set, the `icon_name` takes priority.
         * If neither `icon` or `icon_name` is set, the icon is taken from either
         * the file that is passed to launched application or from the {@link Gio.AppInfo}
         * for the launched application itself.
         * @param icon_name an icon name, or `null`
         * @since 2.14
         */
        set_icon_name(icon_name: string | null): void;

        /**
         * Sets the screen on which applications will be launched when
         * using this context. See also `gdk_app_launch_context_set_display()`.
         * 
         * If both `screen` and `display` are set, the `screen` takes priority.
         * If neither `screen` or `display` are set, the default screen and
         * display are used.
         * @param screen a {@link Gdk.Screen}
         * @since 2.14
         */
        set_screen(screen: Screen): void;

        /**
         * Sets the timestamp of `context`. The timestamp should ideally
         * be taken from the event that triggered the launch.
         * 
         * Window managers can use this information to avoid moving the
         * focus to the newly launched application when the user is busy
         * typing in another window. This is also known as 'focus stealing
         * prevention'.
         * @param timestamp a timestamp
         * @since 2.14
         */
        set_timestamp(timestamp: number): void;
    }


    namespace Colormap {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Colormap extends GObject.Object {
        static $gtype: GObject.GType<Colormap>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Colormap.SignalSignatures;

        // Fields
        size: number;

        colors: Color;

        // Constructors
        constructor(properties?: Partial<Colormap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](visual: Visual, allocate: boolean): Colormap;

        // Signals
        /** @signal */
        connect<K extends keyof Colormap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Colormap.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Colormap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Colormap.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Colormap.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Colormap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Returns the size of the system's default colormap.
         * (See the description of struct {@link Gdk.Colormap} for an
         * explanation of the size of a colormap.)
         */
        static get_system_size(): number;

        // Methods
        /**
         * Allocates a single color from a colormap.
         * @param color the color to allocate. On return the    <structfield>pixel</structfield> field will be    filled in if allocation succeeds.
         * @param writeable If `true`, the color is allocated writeable    (their values can later be changed using `gdk_color_change()`).    Writeable colors cannot be shared between applications.
         * @param best_match If `true`, GDK will attempt to do matching against    existing colors if the color cannot be allocated as requested.
         * @returns `true` if the allocation succeeded.
         */
        alloc_color(color: Color, writeable: boolean, best_match: boolean): boolean;

        /**
         * Allocates colors from a colormap.
         * @param colors The color values to allocate. On return, the pixel    values for allocated colors will be filled in.
         * @param n_colors The number of colors in `colors`.
         * @param writeable If `true`, the colors are allocated writeable    (their values can later be changed using `gdk_color_change()`).    Writeable colors cannot be shared between applications.
         * @param best_match If `true`, GDK will attempt to do matching against    existing colors if the colors cannot be allocated as requested.
         * @param success An array of length `ncolors`. On return, this   indicates whether the corresponding color in `colors` was   successfully allocated or not.
         * @returns The number of colors that were not successfully allocated.
         */
        alloc_colors(colors: Color, n_colors: number, writeable: boolean, best_match: boolean, success: boolean): number;

        /**
         * Changes the value of the first `ncolors` in a private colormap
         * to match the values in the <structfield>colors</structfield>
         * array in the colormap. This function is obsolete and
         * should not be used. See `gdk_color_change()`.
         * @param ncolors the number of colors to change.
         */
        change(ncolors: number): void;

        /**
         * Frees previously allocated colors.
         * @param colors the colors to free.
         * @param n_colors the number of colors in `colors`.
         */
        free_colors(colors: Color, n_colors: number): void;

        /**
         * Locates the RGB color in `colormap` corresponding to the given
         * hardware pixel `pixel`. `pixel` must be a valid pixel in the
         * colormap; it's a programmer error to call this function with a
         * pixel which is not in the colormap. Hardware pixels are normally
         * obtained from `gdk_colormap_alloc_colors()`, or from a {@link Gdk.Image}. (A
         * {@link Gdk.Image} contains image data in hardware format, a {@link GdkPixbuf.Pixbuf}
         * contains image data in a canonical 24-bit RGB format.)
         * 
         * This function is rarely useful; it's used for example to
         * implement the eyedropper feature in `GtkColorSelection`.
         * @param pixel pixel value in hardware display format
         * @param result {@link Gdk.Color} with red, green, blue fields initialized
         */
        query_color(pixel: bigint | number, result: Color): void;

        /**
         * Deprecated function; use `g_object_unref()` instead.
         * @deprecated since 2.0: Use `g_object_unref()` instead.
         */
        unref(): void;
    }


    namespace Device {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Device extends GObject.Object {
        static $gtype: GObject.GType<Device>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Device.SignalSignatures;

        // Fields
        name: string;

        source: InputSource;

        mode: InputMode;

        has_cursor: boolean;

        num_axes: number;

        num_keys: number;

        // Constructors
        constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Device.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Device.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Frees an array of {@link Gdk.TimeCoord} that was returned by `gdk_device_get_history()`.
         * @param events an array of {@link Gdk.TimeCoord}.
         * @param n_events the length of the array.
         */
        static free_history(events: TimeCoord, n_events: number): TimeCoord;

        // Methods
        /**
         * Interprets an array of double as axis values for a given device,
         * and locates the value in the array for a given axis use.
         * @param axes pointer to an array of axes
         * @param use the use to look for
         * @param value location to store the found value.
         * @returns `true` if the given axis use was found, otherwise `false`
         */
        get_axis(axes: number, use: AxisUse, value: number): boolean;

        /**
         * Returns the axis use for `index`.
         * @param index the index of the axis.
         * @returns a {@link Gdk.AxisUse} specifying how the axis is used.
         * @since 2.22
         */
        get_axis_use(index: number): AxisUse;

        /**
         * Determines whether the pointer follows device motion.
         * @returns `true` if the pointer follows device motion
         * @since 2.22
         */
        get_has_cursor(): boolean;

        /**
         * Obtains the motion history for a device; given a starting and
         * ending timestamp, return all events in the motion history for
         * the device in the given range of time. Some windowing systems
         * do not support motion history, in which case, `false` will
         * be returned. (This is not distinguishable from the case where
         * motion history is supported and no events were found.)
         * @param window the window with respect to which which the event coordinates will be reported
         * @param start starting timestamp for range of events to return
         * @param stop ending timestamp for the range of events to return
         * @returns `true` if the windowing system supports motion history and  at least one event was found.
         */
        get_history(window: Window, start: number, stop: number): [boolean, TimeCoord[]];

        /**
         * If `index` has a valid keyval, this function will
         * fill in `keyval` and `modifiers` with the keyval settings.
         * @param index the index of the macro button to get.
         * @param keyval return value for the keyval.
         * @param modifiers return value for modifiers.
         * @since 2.22
         */
        get_key(index: number, keyval: number, modifiers: ModifierType): void;

        /**
         * Determines the mode of the device.
         * @returns a {@link Gdk.InputSource}
         * @since 2.22
         */
        get_mode(): InputMode;

        /**
         * Gets the number of axes of a device.
         * @returns the number of axes of `device`
         * @since 2.22
         */
        get_n_axes(): number;

        /**
         * Gets the number of keys of a device.
         * @returns the number of keys of `device`
         * @since 2.24
         */
        get_n_keys(): number;

        /**
         * Determines the name of the device.
         * @returns a name
         * @since 2.22
         */
        get_name(): string;

        /**
         * Determines the type of the device.
         * @returns a {@link Gdk.InputSource}
         * @since 2.22
         */
        get_source(): InputSource;

        /**
         * @param window 
         * @param axes 
         * @param mask 
         */
        get_state(window: Window, axes: number, mask: ModifierType): void;

        /**
         * @param index_ 
         * @param use 
         */
        set_axis_use(index_: number, use: AxisUse): void;

        /**
         * @param index_ 
         * @param keyval 
         * @param modifiers 
         */
        set_key(index_: number, keyval: number, modifiers: ModifierType): void;

        /**
         * @param mode 
         */
        set_mode(mode: InputMode): boolean;

        /**
         * @param source 
         */
        set_source(source: InputSource): void;
    }


    namespace Display {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::closed signal is emitted when the connection to the windowing
             * system for `display` is closed.
             * @signal
             * @since 2.2
             * @run-last
             */
            closed: (is_error: boolean) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Display extends GObject.Object {
        static $gtype: GObject.GType<Display>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Display.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Display.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Display.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Display.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Display.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Display.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Display.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Display.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Gets the default {@link Gdk.Display}. This is a convenience
         * function for
         * <literal>gdk_display_manager_get_default_display (gdk_display_manager_get ())</literal>.
         * @since 2.2
         */
        static get_default(): Display;

        // Virtual methods
        /**
         * @param is_error 
         * @virtual
         */
        vfunc_closed(is_error: boolean): void;

        /**
         * @virtual
         */
        vfunc_get_display_name(): string;

        /**
         * Gets the number of screen managed by the `display`.
         * @since 2.2
         * @virtual
         */
        vfunc_get_n_screens(): number;

        // Methods
        /**
         * Emits a short beep on `display`
         * @since 2.2
         */
        beep(): void;

        /**
         * Closes the connection to the windowing system for the given display,
         * and cleans up associated resources.
         * @since 2.2
         */
        close(): void;

        /**
         * Flushes any requests queued for the windowing system; this happens automatically
         * when the main loop blocks waiting for new events, but if your application
         * is drawing without returning control to the main loop, you may need
         * to call this function explicitely. A common case where this function
         * needs to be called is when an application is executing drawing commands
         * from a thread other than the thread where the main loop is running.
         * 
         * This is most useful for X11. On windowing systems where requests are
         * handled synchronously, this function will do nothing.
         * @since 2.4
         */
        flush(): void;

        /**
         * Returns the default size to use for cursors on `display`.
         * @returns the default cursor size.
         * @since 2.4
         */
        get_default_cursor_size(): number;

        /**
         * Gets the next {@link Gdk.Event} to be processed for `display`, fetching events from the
         * windowing system if necessary.
         * @returns the next {@link Gdk.Event} to be processed, or `null` if no events are pending. The returned {@link Gdk.Event} should be freed with `gdk_event_free()`.
         * @since 2.2
         */
        get_event(): Event;

        /**
         * Gets the maximal size to use for cursors on `display`.
         * @since 2.4
         */
        get_maximal_cursor_size(): [number, number];

        /**
         * Gets the number of screen managed by the `display`.
         * @returns number of screens.
         * @since 2.2
         */
        get_n_screens(): number;

        /**
         * Gets the name of the display.
         * @returns a string representing the display name. This string is owned by GDK and should not be modified or freed.
         * @since 2.2
         */
        get_name(): string;

        /**
         * Gets the current location of the pointer and the current modifier
         * mask for a given display.
         * @since 2.2
         */
        get_pointer(): [Screen | null, number, number, ModifierType | null];

        /**
         * Obtains the window underneath the mouse pointer, returning the location
         * of the pointer in that window in `win_x`, `win_y` for `screen`. Returns `null`
         * if the window under the mouse pointer is not known to GDK (for example,
         * belongs to another application).
         * @returns the window under the mouse pointer, or `null`
         * @since 2.2
         */
        get_window_at_pointer(): [Window, number, number];

        /**
         * Finds out if the display has been closed.
         * @returns `true` if the display is closed.
         * @since 2.22
         */
        is_closed(): boolean;

        /**
         * Release any keyboard grab
         * @param time_ a timestap (e.g #GDK_CURRENT_TIME).
         * @since 2.2
         */
        keyboard_ungrab(time_: number): void;

        /**
         * Gets a copy of the first {@link Gdk.Event} in the `display`'s event queue, without
         * removing the event from the queue.  (Note that this function will
         * not get more events from the windowing system.  It only checks the events
         * that have already been moved to the GDK event queue.)
         * @returns a copy of the first {@link Gdk.Event} on the event queue, or `null` if no events are in the queue. The returned {@link Gdk.Event} should be freed with `gdk_event_free()`.
         * @since 2.2
         */
        peek_event(): Event;

        /**
         * Test if the pointer is grabbed.
         * @returns `true` if an active X pointer grab is in effect
         * @since 2.2
         */
        pointer_is_grabbed(): boolean;

        /**
         * Release any pointer grab.
         * @param time_ a timestap (e.g. `GDK_CURRENT_TIME`).
         * @since 2.2
         */
        pointer_ungrab(time_: number): void;

        /**
         * Appends a copy of the given event onto the front of the event
         * queue for `display`.
         * @param event a {@link Gdk.Event}.
         * @since 2.2
         */
        put_event(event: Event): void;

        /**
         * Request {@link Gdk.EventOwnerChange} events for ownership changes
         * of the selection named by the given atom.
         * @param selection the {@link Gdk.Atom} naming the selection for which             ownership change notification is requested
         * @returns whether {@link Gdk.EventOwnerChange} events will               be sent.
         * @since 2.6
         */
        request_selection_notification(selection: Atom): boolean;

        /**
         * Sets the double click distance (two clicks within this distance
         * count as a double click and result in a #GDK_2BUTTON_PRESS event).
         * See also `gdk_display_set_double_click_time()`.
         * Applications should <emphasis>not</emphasis> set this, it is a global
         * user-configured setting.
         * @param distance distance in pixels
         * @since 2.4
         */
        set_double_click_distance(distance: number): void;

        /**
         * Sets the double click time (two clicks within this time interval
         * count as a double click and result in a #GDK_2BUTTON_PRESS event).
         * Applications should <emphasis>not</emphasis> set this, it is a global
         * user-configured setting.
         * @param msec double click time in milliseconds (thousandths of a second)
         * @since 2.2
         */
        set_double_click_time(msec: number): void;

        /**
         * Issues a request to the clipboard manager to store the
         * clipboard data. On X11, this is a special program that works
         * according to the freedesktop clipboard specification, available at
         * <ulink url="http://www.freedesktop.org/Standards/clipboard-manager-spec">
         * http://www.freedesktop.org/Standards/clipboard-manager-spec</ulink>.
         * @param clipboard_window a {@link Gdk.Window} belonging to the clipboard owner
         * @param time_ a timestamp
         * @param targets an array of targets that should be saved, or `null`                    if all available targets should be saved.
         * @param n_targets length of the `targets` array
         * @since 2.6
         */
        store_clipboard(clipboard_window: Window, time_: number, targets: Atom, n_targets: number): void;

        /**
         * Returns whether the speicifed display supports clipboard
         * persistance; i.e. if it's possible to store the clipboard data after an
         * application has quit. On X11 this checks if a clipboard daemon is
         * running.
         * @returns `true` if the display supports clipboard persistance.
         * @since 2.6
         */
        supports_clipboard_persistence(): boolean;

        /**
         * Returns `true` if `gdk_window_set_composited()` can be used
         * to redirect drawing on the window using compositing.
         * 
         * Currently this only works on X11 with XComposite and
         * XDamage extensions available.
         * @returns `true` if windows may be composited.
         * @since 2.12
         */
        supports_composite(): boolean;

        /**
         * Returns `true` if cursors can use an 8bit alpha channel
         * on `display`. Otherwise, cursors are restricted to bilevel
         * alpha (i.e. a mask).
         * @returns whether cursors can have alpha channels.
         * @since 2.4
         */
        supports_cursor_alpha(): boolean;

        /**
         * Returns `true` if multicolored cursors are supported
         * on `display`. Otherwise, cursors have only a forground
         * and a background color.
         * @returns whether cursors can have multiple colors.
         * @since 2.4
         */
        supports_cursor_color(): boolean;

        /**
         * Returns `true` if `gdk_window_input_shape_combine_mask()` can
         * be used to modify the input shape of windows on `display`.
         * @returns `true` if windows with modified input shape are supported
         * @since 2.10
         */
        supports_input_shapes(): boolean;

        /**
         * Returns whether {@link Gdk.EventOwnerChange} events will be
         * sent when the owner of a selection changes.
         * @returns whether {@link Gdk.EventOwnerChange} events will               be sent.
         * @since 2.6
         */
        supports_selection_notification(): boolean;

        /**
         * Returns `true` if `gdk_window_shape_combine_mask()` can
         * be used to create shaped windows on `display`.
         * @returns `true` if shaped windows are supported
         * @since 2.10
         */
        supports_shapes(): boolean;

        /**
         * Flushes any requests queued for the windowing system and waits until all
         * requests have been handled. This is often used for making sure that the
         * display is synchronized with the current state of the program. Calling
         * `gdk_display_sync()` before `gdk_error_trap_pop()` makes sure that any errors
         * generated from earlier requests are handled before the error trap is
         * removed.
         * 
         * This is most useful for X11. On windowing systems where requests are
         * handled synchronously, this function will do nothing.
         * @since 2.2
         */
        sync(): void;

        /**
         * Warps the pointer of `display` to the point `x`,`y` on
         * the screen `screen`, unless the pointer is confined
         * to a window by a grab, in which case it will be moved
         * as far as allowed by the grab. Warping the pointer
         * creates events as if the user had moved the mouse
         * instantaneously to the destination.
         * 
         * Note that the pointer should normally be under the
         * control of the user. This function was added to cover
         * some rare use cases like keyboard navigation support
         * for the color picker in the `GtkColorSelectionDialog`.
         * @param screen the screen of `display` to warp the pointer to
         * @param x the x coordinate of the destination
         * @param y the y coordinate of the destination
         * @since 2.8
         */
        warp_pointer(screen: Screen, x: number, y: number): void;
    }


    namespace DisplayManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::display_opened signal is emitted when a display is opened.
             * @signal
             * @since 2.2
             * @run-last
             */
            "display-opened": (display: Display) => void;
            "notify::default-display": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            default_display: Display;
            defaultDisplay: Display;
        }
    }

    /**
     * @gir-type Class
     */
    class DisplayManager extends GObject.Object {
        static $gtype: GObject.GType<DisplayManager>;

        // Properties
        get default_display(): Display;
        set default_display(val: Display);

        get defaultDisplay(): Display;
        set defaultDisplay(val: Display);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DisplayManager.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DisplayManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof DisplayManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DisplayManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DisplayManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DisplayManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DisplayManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DisplayManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Gets the singleton {@link Gdk.DisplayManager} object.
         * @since 2.2
         */
        static get(): DisplayManager;

        // Virtual methods
        /**
         * @param display 
         * @virtual
         */
        vfunc_display_opened(display: Display): void;

        // Methods
        /**
         * Gets the default {@link Gdk.Display}.
         * @returns a {@link Gdk.Display}, or `null` if there is no default   display.
         * @since 2.2
         */
        get_default_display(): Display;

        /**
         * List all currently open displays.
         * @returns a newly allocated {@link GLib.SList} of {@link Gdk.Display} objects. Free this list with `g_slist_free()` when you are done with it.
         * @since 2.2
         */
        list_displays(): Display[];

        /**
         * Sets `display` as the default display.
         * @param display a {@link Gdk.Display}
         * @since 2.2
         */
        set_default_display(display: Display): void;
    }


    namespace DragContext {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DragContext extends GObject.Object {
        static $gtype: GObject.GType<DragContext>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DragContext.SignalSignatures;

        // Fields
        protocol: DragProtocol;

        is_source: boolean;

        source_window: Window;

        dest_window: Window;

        targets: null[];

        actions: DragAction;

        suggested_action: DragAction;

        action: DragAction;

        start_time: number;

        // Constructors
        constructor(properties?: Partial<DragContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): DragContext;

        // Signals
        /** @signal */
        connect<K extends keyof DragContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DragContext.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DragContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DragContext.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DragContext.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DragContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Determines the bitmask of actions proposed by the source if
         * `gdk_drag_context_suggested_action()` returns GDK_ACTION_ASK.
         * @returns the {@link Gdk.DragAction} flags
         * @since 2.22
         */
        get_actions(): DragAction;

        /**
         * Returns the destination windw for the DND operation.
         * @returns a {@link Gdk.Window}
         * @since 2.24
         */
        get_dest_window(): Window;

        /**
         * Returns the drag protocol thats used by this context.
         * @returns the drag protocol
         * @since 2.24
         */
        get_protocol(): DragProtocol;

        /**
         * Determines the action chosen by the drag destination.
         * @returns a {@link Gdk.DragAction} value
         * @since 2.22
         */
        get_selected_action(): DragAction;

        /**
         * Returns the {@link Gdk.Window} where the DND operation started.
         * @returns a {@link Gdk.Window}
         * @since 2.22
         */
        get_source_window(): Window;

        /**
         * Determines the suggested drag action of the context.
         * @returns a {@link Gdk.DragAction} value
         * @since 2.22
         */
        get_suggested_action(): DragAction;

        /**
         * Retrieves the list of targets of the context.
         * @returns a {@link GLib.List} of targets
         * @since 2.22
         */
        list_targets(): Atom[];

        /**
         * Deprecated function; use `g_object_ref()` instead.
         * @deprecated since 2.2: Use `g_object_ref()` instead.
         */
        ref(): void;

        /**
         * @param args 
         */
    // Conflicted with GObject.Object.ref
        ref(...args: never[]): any;

        /**
         * Deprecated function; use `g_object_unref()` instead.
         * @deprecated since 2.2: Use `g_object_unref()` instead.
         */
        unref(): void;
    }


    namespace Drawable {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class Drawable extends GObject.Object {
        static $gtype: GObject.GType<Drawable>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Drawable.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Drawable.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Drawable.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Drawable.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Drawable.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Drawable.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Drawable.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Drawable.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param width 
         * @param height 
         * @virtual
         */
        vfunc_create_cairo_surface(width: number, height: number): cairo.Surface;

        /**
         * @param gc 
         * @param filled 
         * @param x 
         * @param y 
         * @param width 
         * @param height 
         * @param angle1 
         * @param angle2 
         * @virtual
         */
        vfunc_draw_arc(gc: GC, filled: boolean, x: number, y: number, width: number, height: number, angle1: number, angle2: number): void;

        /**
         * @param gc 
         * @param src 
         * @param xsrc 
         * @param ysrc 
         * @param xdest 
         * @param ydest 
         * @param width 
         * @param height 
         * @virtual
         */
        vfunc_draw_drawable(gc: GC, src: Drawable, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number): void;

        /**
         * @param gc 
         * @param src 
         * @param xsrc 
         * @param ysrc 
         * @param xdest 
         * @param ydest 
         * @param width 
         * @param height 
         * @param original_src 
         * @virtual
         */
        vfunc_draw_drawable_with_src(gc: GC, src: Drawable, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number, original_src: Drawable): void;

        /**
         * @param gc 
         * @param font 
         * @param x 
         * @param y 
         * @param glyphs 
         * @virtual
         */
        vfunc_draw_glyphs(gc: GC, font: Pango.Font, x: number, y: number, glyphs: Pango.GlyphString): void;

        /**
         * @param gc 
         * @param matrix 
         * @param font 
         * @param x 
         * @param y 
         * @param glyphs 
         * @virtual
         */
        vfunc_draw_glyphs_transformed(gc: GC, matrix: Pango.Matrix, font: Pango.Font, x: number, y: number, glyphs: Pango.GlyphString): void;

        /**
         * @param gc 
         * @param image 
         * @param xsrc 
         * @param ysrc 
         * @param xdest 
         * @param ydest 
         * @param width 
         * @param height 
         * @virtual
         */
        vfunc_draw_image(gc: GC, image: Image, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number): void;

        /**
         * @param gc 
         * @param points 
         * @param npoints 
         * @virtual
         */
        vfunc_draw_lines(gc: GC, points: Point, npoints: number): void;

        /**
         * @param gc 
         * @param pixbuf 
         * @param src_x 
         * @param src_y 
         * @param dest_x 
         * @param dest_y 
         * @param width 
         * @param height 
         * @param dither 
         * @param x_dither 
         * @param y_dither 
         * @virtual
         */
        vfunc_draw_pixbuf(gc: GC, pixbuf: GdkPixbuf.Pixbuf, src_x: number, src_y: number, dest_x: number, dest_y: number, width: number, height: number, dither: RgbDither, x_dither: number, y_dither: number): void;

        /**
         * @param gc 
         * @param points 
         * @param npoints 
         * @virtual
         */
        vfunc_draw_points(gc: GC, points: Point, npoints: number): void;

        /**
         * @param gc 
         * @param filled 
         * @param points 
         * @param npoints 
         * @virtual
         */
        vfunc_draw_polygon(gc: GC, filled: boolean, points: Point, npoints: number): void;

        /**
         * @param gc 
         * @param filled 
         * @param x 
         * @param y 
         * @param width 
         * @param height 
         * @virtual
         */
        vfunc_draw_rectangle(gc: GC, filled: boolean, x: number, y: number, width: number, height: number): void;

        /**
         * @param gc 
         * @param segs 
         * @param nsegs 
         * @virtual
         */
        vfunc_draw_segments(gc: GC, segs: Segment, nsegs: number): void;

        /**
         * @param font 
         * @param gc 
         * @param x 
         * @param y 
         * @param text 
         * @param text_length 
         * @virtual
         */
        vfunc_draw_text(font: Font, gc: GC, x: number, y: number, text: string, text_length: number): void;

        /**
         * @param font 
         * @param gc 
         * @param x 
         * @param y 
         * @param text 
         * @param text_length 
         * @virtual
         */
        vfunc_draw_text_wc(font: Font, gc: GC, x: number, y: number, text: WChar, text_length: number): void;

        /**
         * @param gc 
         * @param trapezoids 
         * @param n_trapezoids 
         * @virtual
         */
        vfunc_draw_trapezoids(gc: GC, trapezoids: Trapezoid, n_trapezoids: number): void;

        /**
         * Obtains the bit depth of the drawable, that is, the number of bits
         * that make up a pixel in the drawable's visual. Examples are 8 bits
         * per pixel, 24 bits per pixel, etc.
         * @virtual
         */
        vfunc_get_depth(): number;

        /**
         * Fills *`width` and *`height` with the size of `drawable`.
         * `width` or `height` can be `null` if you only want the other one.
         * 
         * On the X11 platform, if `drawable` is a {@link Gdk.Window}, the returned
         * size is the size reported in the most-recently-processed configure
         * event, rather than the current size on the X server.
         * @deprecated since 2.24: Use `gdk_window_get_width()` and `gdk_window_get_height()` for             `GdkWindows`. Use `gdk_pixmap_get_size()` for `GdkPixmaps`.
         * @virtual
         */
        vfunc_get_size(): [number, number];

        /**
         * @virtual
         */
        vfunc_ref_cairo_surface(): cairo.Surface;

        /**
         * @param cr 
         * @virtual
         */
        vfunc_set_cairo_clip(cr: cairo.Context): void;

        /**
         * Sets the colormap associated with `drawable`. Normally this will
         * happen automatically when the drawable is created; you only need to
         * use this function if the drawable-creating function did not have a
         * way to determine the colormap, and you then use drawable operations
         * that require a colormap. The colormap for all drawables and
         * graphics contexts you intend to use together should match. i.e.
         * when using a {@link Gdk.GC} to draw to a drawable, or copying one drawable
         * to another, the colormaps should match.
         * @param cmap 
         * @virtual
         */
        vfunc_set_colormap(cmap: Colormap): void;

        // Methods
        /**
         * Equivalent to `g_object_get_data()`; the {@link GObject.Object} variant should be
         * used instead.
         * @param key name the data was stored under
         * @returns the data stored at `key`
         */
        get_data(key: string): null;

        /**
         * Obtains the bit depth of the drawable, that is, the number of bits
         * that make up a pixel in the drawable's visual. Examples are 8 bits
         * per pixel, 24 bits per pixel, etc.
         * @returns number of bits per pixel
         */
        get_depth(): number;

        /**
         * Fills *`width` and *`height` with the size of `drawable`.
         * `width` or `height` can be `null` if you only want the other one.
         * 
         * On the X11 platform, if `drawable` is a {@link Gdk.Window}, the returned
         * size is the size reported in the most-recently-processed configure
         * event, rather than the current size on the X server.
         * @deprecated since 2.24: Use `gdk_window_get_width()` and `gdk_window_get_height()` for             `GdkWindows`. Use `gdk_pixmap_get_size()` for `GdkPixmaps`.
         */
        get_size(): [number, number];

        /**
         * Sets the colormap associated with `drawable`. Normally this will
         * happen automatically when the drawable is created; you only need to
         * use this function if the drawable-creating function did not have a
         * way to determine the colormap, and you then use drawable operations
         * that require a colormap. The colormap for all drawables and
         * graphics contexts you intend to use together should match. i.e.
         * when using a {@link Gdk.GC} to draw to a drawable, or copying one drawable
         * to another, the colormaps should match.
         * @param colormap a {@link Gdk.Colormap}
         */
        set_colormap(colormap: Colormap): void;

        /**
         * This function is equivalent to `g_object_set_data()`,
         * the {@link GObject.Object} variant should be used instead.
         * @param key name to store the data under
         * @param data arbitrary data
         */
        set_data(key: string, data: null): void;

        /**
         * Deprecated equivalent of calling `g_object_unref()` on `drawable`.
         * @deprecated since 2.0: Use `g_object_unref()` instead.
         */
        unref(): void;
    }


    namespace GC {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GC extends GObject.Object {
        static $gtype: GObject.GType<GC>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GC.SignalSignatures;

        // Fields
        clip_x_origin: number;

        clip_y_origin: number;

        ts_x_origin: number;

        ts_y_origin: number;

        colormap: Colormap;

        // Constructors
        constructor(properties?: Partial<GC.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](drawable: Drawable): GC;

        static new_with_values(drawable: Drawable, values: GCValues, values_mask: GCValuesMask): GC;

        // Signals
        /** @signal */
        connect<K extends keyof GC.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GC.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GC.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GC.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GC.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GC.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * Retrieves the current values from a graphics context. Note that
         * only the pixel values of the `values`->foreground and `values`->background
         * are filled, use `gdk_colormap_query_color()` to obtain the rgb values
         * if you need them.
         * @param values the {@link Gdk.GCValues} structure in which to store the results.
         * @deprecated since 2.22: Use Cairo for rendering.
         * @virtual
         */
        vfunc_get_values(values: GCValues): void;

        /**
         * Sets the way dashed-lines are drawn. Lines will be
         * drawn with alternating on and off segments of the
         * lengths specified in `dash_list`. The manner in
         * which the on and off segments are drawn is determined
         * by the `line_style` value of the GC. (This can
         * be changed with `gdk_gc_set_line_attributes()`.)
         * 
         * The `dash_offset` defines the phase of the pattern,
         * specifying how many pixels into the dash-list the pattern
         * should actually begin.
         * @param dash_offset the phase of the dash pattern.
         * @param dash_list an array of dash lengths.
         * @param n the number of elements in `dash_list`.
         * @deprecated since 2.22: Use `cairo_set_dash()` to set the dash in Cairo.
         * @virtual
         */
        vfunc_set_dashes(dash_offset: number, dash_list: number, n: number): void;

        /**
         * Sets attributes of a graphics context in bulk. For each flag set in
         * `values_mask`, the corresponding field will be read from `values` and
         * set as the new value for `gc`. If you're only setting a few values
         * on `gc`, calling individual "setter" functions is likely more
         * convenient.
         * @param values struct containing the new values
         * @param mask 
         * @deprecated since 2.22: Use Cairo for rendering.
         * @virtual
         */
        vfunc_set_values(values: GCValues, mask: GCValuesMask): void;

        // Methods
        /**
         * Copy the set of values from one graphics context
         * onto another graphics context.
         * @param src_gc the source graphics context.
         * @deprecated since 2.22: Use Cairo for drawing. `cairo_save()` and `cairo_restore()` can be helpful in cases where you'd have copied a {@link Gdk.GC}.
         */
        copy(src_gc: GC): void;

        /**
         * Retrieves the current values from a graphics context. Note that
         * only the pixel values of the `values`->foreground and `values`->background
         * are filled, use `gdk_colormap_query_color()` to obtain the rgb values
         * if you need them.
         * @param values the {@link Gdk.GCValues} structure in which to store the results.
         * @deprecated since 2.22: Use Cairo for rendering.
         */
        get_values(values: GCValues): void;

        /**
         * Offset attributes such as the clip and tile-stipple origins
         * of the GC so that drawing at x - x_offset, y - y_offset with
         * the offset GC  has the same effect as drawing at x, y with the original
         * GC.
         * @param x_offset amount by which to offset the GC in the X direction
         * @param y_offset amount by which to offset the GC in the Y direction
         * @deprecated since 2.22: There is no direct replacement, as this is just a convenience function for gdk_gc_set_ts_origin and `gdk_gc_set_clip_origin()`.
         */
        offset(x_offset: number, y_offset: number): void;

        /**
         * Sets the background color for a graphics context.
         * Note that this function uses `color`->pixel, use
         * `gdk_gc_set_rgb_bg_color()` to specify the background
         * color as red, green, blue components.
         * @param color the new background color.
         * @deprecated since 2.22: Use `gdk_cairo_set_source_color()` to use a {@link Gdk.Color} as the source in Cairo. Note that if you want to draw a background and a foreground in Cairo, you need to call drawing functions (like `cairo_fill()`) twice.
         */
        set_background(color: Color): void;

        /**
         * Sets the clip mask for a graphics context from a bitmap.
         * The clip mask is interpreted relative to the clip
         * origin. (See `gdk_gc_set_clip_origin()`).
         * @param mask a bitmap.
         * @deprecated since 2.22: Use `cairo_mask()` instead.
         */
        set_clip_mask(mask: Bitmap): void;

        /**
         * Sets the origin of the clip mask. The coordinates are
         * interpreted relative to the upper-left corner of
         * the destination drawable of the current operation.
         * @param x the x-coordinate of the origin.
         * @param y the y-coordinate of the origin.
         * @deprecated since 2.22: Use `cairo_translate()` before applying the clip path in Cairo.
         */
        set_clip_origin(x: number, y: number): void;

        /**
         * Sets the clip mask for a graphics context from a
         * rectangle. The clip mask is interpreted relative to the clip
         * origin. (See `gdk_gc_set_clip_origin()`).
         * @param rectangle the rectangle to clip to.
         * @deprecated since 2.22: Use `cairo_rectangle()` and `cairo_clip()` in Cairo.
         */
        set_clip_rectangle(rectangle: Rectangle): void;

        /**
         * Sets the clip mask for a graphics context from a region structure.
         * The clip mask is interpreted relative to the clip origin. (See
         * `gdk_gc_set_clip_origin()`).
         * @param region the {@link Gdk.Region}.
         * @deprecated since 2.22: Use `gdk_cairo_region()` and `cairo_clip()` in Cairo.
         */
        set_clip_region(region: Region): void;

        /**
         * Sets the colormap for the GC to the given colormap. The depth
         * of the colormap's visual must match the depth of the drawable
         * for which the GC was created.
         * @param colormap a {@link Gdk.Colormap}
         * @deprecated since 2.22: There is no replacement. Cairo handles colormaps automatically, so there is no need to care about them.
         */
        set_colormap(colormap: Colormap): void;

        /**
         * Sets the way dashed-lines are drawn. Lines will be
         * drawn with alternating on and off segments of the
         * lengths specified in `dash_list`. The manner in
         * which the on and off segments are drawn is determined
         * by the `line_style` value of the GC. (This can
         * be changed with `gdk_gc_set_line_attributes()`.)
         * 
         * The `dash_offset` defines the phase of the pattern,
         * specifying how many pixels into the dash-list the pattern
         * should actually begin.
         * @param dash_offset the phase of the dash pattern.
         * @param dash_list an array of dash lengths.
         * @param n the number of elements in `dash_list`.
         * @deprecated since 2.22: Use `cairo_set_dash()` to set the dash in Cairo.
         */
        set_dashes(dash_offset: number, dash_list: number, n: number): void;

        /**
         * Sets whether copying non-visible portions of a drawable
         * using this graphics context generate exposure events
         * for the corresponding regions of the destination
         * drawable. (See `gdk_draw_drawable()`).
         * @param exposures if `true`, exposure events will be generated.
         * @deprecated since 2.22: There is no replacement. If you need to control exposures, you must use drawing operations of the underlying window system or use `gdk_window_invalidate_rect()`. Cairo will never generate exposures.
         */
        set_exposures(exposures: boolean): void;

        /**
         * Set the fill mode for a graphics context.
         * @param fill the new fill mode.
         * @deprecated since 2.22: You can achieve tiling in Cairo by using `cairo_pattern_set_extend()` on the source. For stippling, see the deprecation comments on `gdk_gc_set_stipple()`.
         */
        set_fill(fill: Fill): void;

        /**
         * Sets the font for a graphics context. (Note that
         * all text-drawing functions in GDK take a `font`
         * argument; the value set here is used when that
         * argument is `null`.)
         * @param font the new font.
         */
        set_font(font: Font): void;

        /**
         * Sets the foreground color for a graphics context.
         * Note that this function uses `color`->pixel, use
         * `gdk_gc_set_rgb_fg_color()` to specify the foreground
         * color as red, green, blue components.
         * @param color the new foreground color.
         * @deprecated since 2.22: Use `gdk_cairo_set_source_color()` to use a {@link Gdk.Color} as the source in Cairo.
         */
        set_foreground(color: Color): void;

        /**
         * Determines how the current pixel values and the
         * pixel values being drawn are combined to produce
         * the final pixel values.
         * @param _function the {@link Gdk.Function} to use
         * @deprecated since 2.22: Use `cairo_set_operator()` with Cairo.
         */
        set_function(_function: Function): void;

        /**
         * Sets various attributes of how lines are drawn. See
         * the corresponding members of {@link Gdk.GCValues} for full
         * explanations of the arguments.
         * @param line_width the width of lines.
         * @param line_style the dash-style for lines.
         * @param cap_style the manner in which the ends of lines are drawn.
         * @param join_style the in which lines are joined together.
         * @deprecated since 2.22: Use the Cairo functions `cairo_set_line_width()`, `cairo_set_line_join()`, `cairo_set_line_cap()` and `cairo_set_dash()` to affect the stroking behavior in Cairo. Keep in mind that the default attributes of a {@link cairo.Context} are different from the default attributes of a {@link Gdk.GC}.
         */
        set_line_attributes(line_width: number, line_style: LineStyle, cap_style: CapStyle, join_style: JoinStyle): void;

        /**
         * Set the background color of a GC using an unallocated color. The
         * pixel value for the color will be determined using GdkRGB. If the
         * colormap for the GC has not previously been initialized for GdkRGB,
         * then for pseudo-color colormaps (colormaps with a small modifiable
         * number of colors), a colorcube will be allocated in the colormap.
         * 
         * Calling this function for a GC without a colormap is an error.
         * @param color an unallocated {@link Gdk.Color}.
         * @deprecated since 2.22: Use `gdk_cairo_set_source_color()` instead.
         */
        set_rgb_bg_color(color: Color): void;

        /**
         * Set the foreground color of a GC using an unallocated color. The
         * pixel value for the color will be determined using GdkRGB. If the
         * colormap for the GC has not previously been initialized for GdkRGB,
         * then for pseudo-color colormaps (colormaps with a small modifiable
         * number of colors), a colorcube will be allocated in the colormap.
         * 
         * Calling this function for a GC without a colormap is an error.
         * @param color an unallocated {@link Gdk.Color}.
         * @deprecated since 2.22: Use `gdk_cairo_set_source_color()` instead.
         */
        set_rgb_fg_color(color: Color): void;

        /**
         * Set the stipple bitmap for a graphics context. The
         * stipple will only be used if the fill mode is
         * {@link Gdk.Fill.STIPPLED} or {@link Gdk.Fill.OPAQUE_STIPPLED}.
         * @param stipple the new stipple bitmap.
         * @deprecated since 2.22: Stippling has no direct replacement in Cairo. If you want to achieve an identical look, you can use the stipple bitmap as a mask. Most likely, this involves rendering the source to an intermediate surface using `cairo_push_group()` first, so that you can then use `cairo_mask()` to achieve the stippled look.
         */
        set_stipple(stipple: Pixmap): void;

        /**
         * Sets how drawing with this GC on a window will affect child
         * windows of that window.
         * @param mode the subwindow mode.
         * @deprecated since 2.22: There is no replacement. If you need to control subwindows, you must use drawing operations of the underlying window system manually. Cairo will always use {@link Gdk.SubwindowMode.INCLUDE_INFERIORS} on sources and masks and {@link Gdk.SubwindowMode.CLIP_BY_CHILDREN} on targets.
         */
        set_subwindow(mode: SubwindowMode): void;

        /**
         * Set a tile pixmap for a graphics context.
         * This will only be used if the fill mode
         * is {@link Gdk.Fill.TILED}.
         * @param tile the new tile pixmap.
         * @deprecated since 2.22: The following code snippet sets a tiling {@link Gdk.Pixmap} as the source in Cairo: |[gdk_cairo_set_source_pixmap (cr, tile, ts_origin_x, ts_origin_y); cairo_pattern_set_extend (cairo_get_source (cr), CAIRO_EXTEND_REPEAT);]|
         */
        set_tile(tile: Pixmap): void;

        /**
         * Set the origin when using tiles or stipples with
         * the GC. The tile or stipple will be aligned such
         * that the upper left corner of the tile or stipple
         * will coincide with this point.
         * @param x the x-coordinate of the origin.
         * @param y the y-coordinate of the origin.
         * @deprecated since 2.22: You can set the origin for tiles and stipples in Cairo by changing the source's matrix using `cairo_pattern_set_matrix()`. Or you can specify it with `gdk_cairo_set_source_pixmap()` as shown in the example for `gdk_gc_set_tile()`.
         */
        set_ts_origin(x: number, y: number): void;

        /**
         * Sets attributes of a graphics context in bulk. For each flag set in
         * `values_mask`, the corresponding field will be read from `values` and
         * set as the new value for `gc`. If you're only setting a few values
         * on `gc`, calling individual "setter" functions is likely more
         * convenient.
         * @param values struct containing the new values
         * @param values_mask mask indicating which struct fields are to be used
         * @deprecated since 2.22: Use Cairo for rendering.
         */
        set_values(values: GCValues, values_mask: GCValuesMask): void;

        /**
         * Decrement the reference count of `gc`.
         * @deprecated since 2.0: Use `g_object_unref()` instead.
         */
        unref(): void;
    }


    namespace Image {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Image extends GObject.Object {
        static $gtype: GObject.GType<Image>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Image.SignalSignatures;

        // Fields
        type: ImageType;

        visual: Visual;

        byte_order: ByteOrder;

        width: number;

        height: number;

        depth: number;

        bpp: number;

        bpl: number;

        bits_per_pixel: number;

        mem: null;

        colormap: Colormap;

        // Constructors
        constructor(properties?: Partial<Image.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](type: ImageType, visual: Visual, width: number, height: number): Image;

        // Signals
        /** @signal */
        connect<K extends keyof Image.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Image.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Image.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Image.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Image.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Image.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Determines the number of bits per pixel of the image.
         * @returns the bits per pixel
         * @since 2.22
         * @deprecated since 2.22: {@link Gdk.Image} should not be used anymore.
         */
        get_bits_per_pixel(): number;

        /**
         * Determines the byte order of the image.
         * @returns a {@link Gdk.Visual}
         * @since 2.22
         * @deprecated since 2.22: {@link Gdk.Image} should not be used anymore.
         */
        get_byte_order(): ByteOrder;

        /**
         * Determines the number of bytes per line of the image.
         * @returns the bytes per line
         * @since 2.22
         * @deprecated since 2.22: {@link Gdk.Image} should not be used anymore.
         */
        get_bytes_per_line(): number;

        /**
         * Determines the number of bytes per pixel of the image.
         * @returns the bytes per pixel
         * @since 2.22
         * @deprecated since 2.22: {@link Gdk.Image} should not be used anymore.
         */
        get_bytes_per_pixel(): number;

        /**
         * Determines the depth of the image.
         * @returns the depth
         * @since 2.22
         * @deprecated since 2.22: {@link Gdk.Image} should not be used anymore.
         */
        get_depth(): number;

        /**
         * Determines the height of the image.
         * @returns the height
         * @since 2.22
         * @deprecated since 2.22: {@link Gdk.Image} should not be used anymore.
         */
        get_height(): number;

        /**
         * Determines the type of a given image.
         * @returns the {@link Gdk.ImageType} of the image
         * @since 2.22
         * @deprecated since 2.22: {@link Gdk.Image} should not be used anymore.
         */
        get_image_type(): ImageType;

        /**
         * @param x 
         * @param y 
         */
        get_pixel(x: number, y: number): number;

        /**
         * Returns a pointer to the pixel data of the image.
         * @returns the pixel data of the image
         * @since 2.22
         * @deprecated since 2.22: {@link Gdk.Image} should not be used anymore.
         */
        get_pixels(): null;

        /**
         * Determines the width of the image.
         * @returns the width
         * @since 2.22
         * @deprecated since 2.22: {@link Gdk.Image} should not be used anymore.
         */
        get_width(): number;

        /**
         * @param x 
         * @param y 
         * @param pixel 
         */
        put_pixel(x: number, y: number, pixel: number): void;

        /**
         * Sets the colormap for the image to the given colormap.  Normally
         * there's no need to use this function, images are created with the
         * correct colormap if you get the image from a drawable. If you
         * create the image from scratch, use the colormap of the drawable you
         * intend to render the image to.
         * @param colormap a {@link Gdk.Colormap}
         * @deprecated since 2.22: {@link Gdk.Image} should not be used anymore.
         */
        set_colormap(colormap: Colormap): void;

        /**
         * Deprecated function; use `g_object_unref()` instead.
         * @deprecated since 2.0: Use `g_object_unref()` instead.
         */
        unref(): void;
    }


    namespace Keymap {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::direction-changed signal gets emitted when the direction of
             * the keymap changes.
             * @signal
             * @since 2.0
             * @run-last
             */
            "direction-changed": () => void;
            /**
             * The ::keys-changed signal is emitted when the mapping represented by
             * `keymap` changes.
             * @signal
             * @since 2.2
             * @run-last
             */
            "keys-changed": () => void;
            /**
             * The ::state-changed signal is emitted when the state of the
             * keyboard changes, e.g when Caps Lock is turned on or off.
             * See `gdk_keymap_get_caps_lock_state()`.
             * @signal
             * @since 2.16
             * @run-last
             */
            "state-changed": () => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Keymap extends GObject.Object {
        static $gtype: GObject.GType<Keymap>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Keymap.SignalSignatures;

        // Fields
        display: Display;

        // Constructors
        constructor(properties?: Partial<Keymap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Keymap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Keymap.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Keymap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Keymap.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Keymap.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Keymap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_direction_changed(): void;

        /**
         * @virtual
         */
        vfunc_keys_changed(): void;

        /**
         * @virtual
         */
        vfunc_state_changed(): void;

        // Methods
        /**
         * Adds virtual modifiers (i.e. Super, Hyper and Meta) which correspond
         * to the real modifiers (i.e Mod2, Mod3, ...) in `modifiers`.
         * are set in `state` to their non-virtual counterparts (i.e. Mod2,
         * Mod3,...) and set the corresponding bits in `state`.
         * 
         * GDK already does this before delivering key events, but for
         * compatibility reasons, it only sets the first virtual modifier
         * it finds, whereas this function sets all matching virtual modifiers.
         * 
         * This function is useful when matching key events against
         * accelerators.
         * @param state pointer to the modifier mask to change
         * @since 2.20
         */
        add_virtual_modifiers(state: ModifierType): void;

        /**
         * Returns whether the Caps Lock modifer is locked.
         * @returns `true` if Caps Lock is on
         * @since 2.16
         */
        get_caps_lock_state(): boolean;

        /**
         * Returns the direction of effective layout of the keymap.
         * 
         * Note that passing `null` for `keymap` is deprecated and will stop
         * to work in GTK+ 3.0. Use `gdk_keymap_get_for_display()` instead.
         * @returns {@link Pango.Direction.LTR} or {@link Pango.Direction.RTL}   if it can determine the direction. {@link Pango.Direction.NEUTRAL}   otherwise.
         */
        get_direction(): Pango.Direction;

        /**
         * Returns the keyvals bound to `hardware_keycode`.
         * The Nth {@link Gdk.KeymapKey} in `keys` is bound to the Nth
         * keyval in `keyvals`. Free the returned arrays with `g_free()`.
         * When a keycode is pressed by the user, the keyval from
         * this list of entries is selected by considering the effective
         * keyboard group and level. See `gdk_keymap_translate_keyboard_state()`.
         * 
         * Note that passing `null` for `keymap` is deprecated and will stop
         * to work in GTK+ 3.0. Use `gdk_keymap_get_for_display()` instead.
         * @param hardware_keycode a keycode
         * @param n_entries length of `keys` and `keyvals`
         * @returns `true` if there were any entries
         */
        get_entries_for_keycode(hardware_keycode: number, n_entries: number): [boolean, KeymapKey, number];

        /**
         * Obtains a list of keycode/group/level combinations that will
         * generate `keyval`. Groups and levels are two kinds of keyboard mode;
         * in general, the level determines whether the top or bottom symbol
         * on a key is used, and the group determines whether the left or
         * right symbol is used. On US keyboards, the shift key changes the
         * keyboard level, and there are no groups. A group switch key might
         * convert a keyboard between Hebrew to English modes, for example.
         * {@link Gdk.EventKey} contains a %group field that indicates the active
         * keyboard group. The level is computed from the modifier mask.
         * The returned array should be freed
         * with `g_free()`.
         * 
         * Note that passing `null` for `keymap` is deprecated and will stop
         * to work in GTK+ 3.0. Use `gdk_keymap_get_for_display()` instead.
         * @param keyval a keyval, such as %GDK_a, %GDK_Up, %GDK_Return, etc.
         * @returns `true` if keys were found and returned
         */
        get_entries_for_keyval(keyval: number): [boolean, KeymapKey, number];

        /**
         * Determines if keyboard layouts for both right-to-left and left-to-right
         * languages are in use.
         * 
         * Note that passing `null` for `keymap` is deprecated and will stop
         * to work in GTK+ 3.0. Use `gdk_keymap_get_for_display()` instead.
         * @returns `true` if there are layouts in both directions, `false` otherwise
         * @since 2.12
         */
        have_bidi_layouts(): boolean;

        /**
         * Looks up the keyval mapped to a keycode/group/level triplet.
         * If no keyval is bound to `key`, returns 0. For normal user input,
         * you want to use `gdk_keymap_translate_keyboard_state()` instead of
         * this function, since the effective group/level may not be
         * the same as the current keyboard state.
         * 
         * Note that passing `null` for `keymap` is deprecated and will stop
         * to work in GTK+ 3.0. Use `gdk_keymap_get_for_display()` instead.
         * @param key a {@link Gdk.KeymapKey} with keycode, group, and level initialized
         * @returns a keyval, or 0 if none was mapped to the given `key`
         */
        lookup_key(key: KeymapKey): number;

        /**
         * Maps the virtual modifiers (i.e. Super, Hyper and Meta) which
         * are set in `state` to their non-virtual counterparts (i.e. Mod2,
         * Mod3,...) and set the corresponding bits in `state`.
         * 
         * This function is useful when matching key events against
         * accelerators.
         * @param state pointer to the modifier state to map
         * @returns `true` if no virtual modifiers were mapped to the     same non-virtual modifier. Note that `false` is also returned     if a virtual modifier is mapped to a non-virtual modifier that     was already set in `state`.
         * @since 2.20
         */
        map_virtual_modifiers(state: ModifierType): boolean;

        /**
         * Translates the contents of a {@link Gdk.EventKey} into a keyval, effective
         * group, and level. Modifiers that affected the translation and
         * are thus unavailable for application use are returned in
         * `consumed_modifiers`.  See <xref linkend="key-group-explanation"/> for an explanation of
         * groups and levels.  The `effective_group` is the group that was
         * actually used for the translation; some keys such as Enter are not
         * affected by the active keyboard group. The `level` is derived from
         * `state`. For convenience, {@link Gdk.EventKey} already contains the translated
         * keyval, so this function isn't as useful as you might think.
         * 
         * <note><para>
         * `consumed_modifiers` gives modifiers that should be masked out
         * from `state` when comparing this key press to a hot key. For
         * instance, on a US keyboard, the <literal>plus</literal>
         * symbol is shifted, so when comparing a key press to a
         * <literal>&lt;Control&gt;plus</literal> accelerator &lt;Shift&gt; should
         * be masked out.
         * </para>
         * <informalexample><programlisting>
         * &sol;* We want to ignore irrelevant modifiers like ScrollLock *&sol;
         * &num;define ALL_ACCELS_MASK (GDK_CONTROL_MASK | GDK_SHIFT_MASK | GDK_MOD1_MASK)
         * gdk_keymap_translate_keyboard_state (keymap, event->hardware_keycode,
         *                                      event->state, event->group,
         *                                      &amp;keyval, NULL, NULL, &amp;consumed);
         * if (keyval == GDK_PLUS &&
         *     (event->state &amp; ~consumed &amp; ALL_ACCELS_MASK) == GDK_CONTROL_MASK)
         *   &sol;* Control was pressed *&sol;
         * </programlisting></informalexample>
         * <para>
         * An older interpretation `consumed_modifiers` was that it contained
         * all modifiers that might affect the translation of the key;
         * this allowed accelerators to be stored with irrelevant consumed
         * modifiers, by doing:</para>
         * <informalexample><programlisting>
         * &sol;* XXX Don't do this XXX *&sol;
         * if (keyval == accel_keyval &&
         *     (event->state &amp; ~consumed &amp; ALL_ACCELS_MASK) == (accel_mods &amp; ~consumed))
         *   &sol;* Accelerator was pressed *&sol;
         * </programlisting></informalexample>
         * <para>
         * However, this did not work if multi-modifier combinations were
         * used in the keymap, since, for instance, <literal>&lt;Control&gt;</literal>
         * would be masked out even if only <literal>&lt;Control&gt;&lt;Alt&gt;</literal>
         * was used in the keymap. To support this usage as well as well as
         * possible, all <emphasis>single modifier</emphasis> combinations
         * that could affect the key for any combination of modifiers will
         * be returned in `consumed_modifiers`; multi-modifier combinations
         * are returned only when actually found in `state`. When you store
         * accelerators, you should always store them with consumed modifiers
         * removed. Store <literal>&lt;Control&gt;plus</literal>,
         * not <literal>&lt;Control&gt;&lt;Shift&gt;plus</literal>,
         * </para></note>
         * 
         * Note that passing `null` for `keymap` is deprecated and will stop
         * to work in GTK+ 3.0. Use `gdk_keymap_get_for_display()` instead.
         * @param hardware_keycode a keycode
         * @param state a modifier state
         * @param group active keyboard group
         * @returns `true` if there was a keyval bound to the keycode/state/group
         */
        translate_keyboard_state(hardware_keycode: number, state: ModifierType, group: number): [boolean, number, number, number, ModifierType | null];
    }


    namespace PangoRenderer {
        // Signal signatures
        interface SignalSignatures extends Pango.Renderer.SignalSignatures {
            "notify::screen": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Pango.Renderer.ConstructorProps {
            screen: Screen;
        }
    }

    /**
     * {@link Gdk.PangoRenderer} is a subclass of {@link Gdk.PangoRenderer} used for rendering
     * Pango objects into GDK drawables. The default renderer for a particular
     * screen is obtained with `gdk_pango_renderer_get_default()`; Pango
     * functions like `pango_renderer_draw_layout()` and
     * `pango_renderer_draw_layout_line()` are then used to draw objects with
     * the renderer.
     * 
     * In most simple cases, applications can just use `gdk_draw_layout()`, and
     * don't need to directly use {@link Gdk.PangoRenderer} at all. Using the
     * {@link Gdk.PangoRenderer} directly is most useful when working with a
     * transformation such as a rotation, because the Pango drawing functions
     * take user space coordinates (coordinates before the transformation)
     * instead of device coordinates.
     * 
     * In certain cases it can be useful to subclass {@link Gdk.PangoRenderer}. Examples
     * of reasons to do this are to add handling of custom attributes by
     * overriding 'prepare_run' or to do custom drawing of embedded objects
     * by overriding 'draw_shape'.
     * @gir-type Class
     * @since 2.6
     */
    class PangoRenderer extends Pango.Renderer {
        static $gtype: GObject.GType<PangoRenderer>;

        // Properties
        /**
         * @construct-only
         */
        get screen(): Screen;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PangoRenderer.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PangoRenderer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](screen: Screen): PangoRenderer;

        // Signals
        /** @signal */
        connect<K extends keyof PangoRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PangoRenderer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PangoRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PangoRenderer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PangoRenderer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PangoRenderer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Sets the drawable the renderer draws to.
         * @param drawable the new target drawable, or `null`
         * @since 2.6
         */
        set_drawable(drawable: Drawable | null): void;

        /**
         * Sets the GC the renderer draws with. Note that the GC must not be
         * modified until it is unset by calling the function again with
         * `null` for the `gc` parameter, since GDK may make internal copies
         * of the GC which won't be updated to follow changes to the
         * original GC.
         * @param gc the new GC to use for drawing, or `null`
         * @since 2.6
         */
        set_gc(gc: GC | null): void;

        /**
         * Sets the color for a particular render part (foreground,
         * background, underline, etc.), overriding any attributes on the layouts
         * renderered with this renderer.
         * @param part the part to render to set the color of
         * @param color the color to use, or `null` to unset a previously         set override color.
         * @since 2.6
         */
        set_override_color(part: Pango.RenderPart, color: Color | null): void;

        /**
         * Sets the stipple for one render part (foreground, background, underline,
         * etc.) Note that this is overwritten when iterating through the individual
         * styled runs of a {@link Pango.Layout} or {@link Pango.LayoutLine}. This function is thus
         * only useful when you call low level functions like `pango_renderer_draw_glyphs()`
         * directly, or in the 'prepare_run' virtual function of a subclass of
         * {@link Gdk.PangoRenderer}.
         * @param part the part to render with the stipple
         * @param stipple the new stipple value.
         * @since 2.6
         */
        set_stipple(part: Pango.RenderPart, stipple: Bitmap): void;
    }


    namespace Pixmap {
        // Signal signatures
        interface SignalSignatures extends Drawable.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends Drawable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Pixmap extends Drawable {
        static $gtype: GObject.GType<Pixmap>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Pixmap.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Pixmap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static foreign_new(anid: NativeWindow): Pixmap;

        static foreign_new_for_display(display: Display, anid: NativeWindow): Pixmap;

        static foreign_new_for_screen(screen: Screen, anid: NativeWindow, width: number, height: number, depth: number): Pixmap;

        static ["new"](drawable: Drawable, width: number, height: number, depth: number): Pixmap;

        // Signals
        /** @signal */
        connect<K extends keyof Pixmap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Pixmap.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Pixmap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Pixmap.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Pixmap.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Pixmap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Create a pixmap from a XPM file using a particular colormap.
         * @param drawable a {@link Gdk.Drawable}, used to determine default values for the new pixmap. Can be `null` if `colormap` is given.
         * @param colormap the {@link Gdk.Colormap} that the new pixmap will be use. If omitted, the colormap for `window` will be used.
         * @param mask a pointer to a place to store a bitmap representing the transparency mask of the XPM file. Can be `null`, in which case transparency will be ignored.
         * @param transparent_color the color to be used for the pixels that are transparent in the input file. Can be `null`, in which case a default color will be used.
         * @param filename the filename of a file containing XPM data.
         * @deprecated since 2.22: Use a {@link GdkPixbuf.Pixbuf} instead. You can use `gdk_pixbuf_new_from_file()` to create it. If you must use a pixmap, use `gdk_pixmap_new()` to create it and Cairo to draw the pixbuf onto it.
         */
        static colormap_create_from_xpm(drawable: Drawable, colormap: Colormap, mask: Bitmap, transparent_color: Color, filename: string): Pixmap;

        /**
         * Create a pixmap from data in XPM format using a particular
         * colormap.
         * @param drawable a {@link Gdk.Drawable}, used to determine default values     for the new pixmap. Can be `null` if `colormap` is given.
         * @param colormap the {@link Gdk.Colormap} that the new pixmap will be use.     If omitted, the colormap for `window` will be used.
         * @param mask a pointer to a place to store a bitmap representing     the transparency mask of the XPM file. Can be `null`,     in which case transparency will be ignored.
         * @param transparent_color the color to be used for the pixels     that are transparent in the input file. Can be `null`,     in which case a default color will be used.
         * @param data Pointer to a string containing the XPM data.
         * @deprecated since 2.22: Use a {@link GdkPixbuf.Pixbuf} instead. You can use `gdk_pixbuf_new_from_xpm_data()` to create it. If you must use a pixmap, use `gdk_pixmap_new()` to create it and Cairo to draw the pixbuf onto it.
         */
        static colormap_create_from_xpm_d(drawable: Drawable, colormap: Colormap, mask: Bitmap, transparent_color: Color, data: string): Pixmap;

        /**
         * Create a pixmap from a XPM file.
         * @param drawable a {@link Gdk.Drawable}, used to determine default values for the new pixmap.
         * @param transparent_color the color to be used for the pixels that are transparent in the input file. Can be `null`, in which case a default color will be used.
         * @param filename the filename of a file containing XPM data.
         * @deprecated since 2.22: Use a {@link GdkPixbuf.Pixbuf} instead. You can use `gdk_pixbuf_new_from_file()` to create it. If you must use a pixmap, use `gdk_pixmap_new()` to create it and Cairo to draw the pixbuf onto it.
         */
        static create_from_xpm(drawable: Drawable, transparent_color: Color, filename: string): [Pixmap, Bitmap];

        /**
         * Create a pixmap from data in XPM format.
         * @param drawable a {@link Gdk.Drawable}, used to determine default values     for the new pixmap.
         * @param transparent_color This color will be used for the pixels     that are transparent in the input file. Can be `null`     in which case a default color will be used.
         * @param data Pointer to a string containing the XPM data.
         * @deprecated since 2.22: Use a {@link GdkPixbuf.Pixbuf} instead. You can use `gdk_pixbuf_new_from_xpm_data()` to create it. If you must use a pixmap, use `gdk_pixmap_new()` to create it and Cairo to draw the pixbuf onto it.
         */
        static create_from_xpm_d(drawable: Drawable, transparent_color: Color, data: string): [Pixmap, Bitmap];

        // Methods
        /**
         * This function is purely to make it possible to query the size of pixmaps
         * even when compiling without deprecated symbols and you must use pixmaps.
         * It is identical to `gdk_drawable_get_size()`, but for pixmaps.
         * @since 2.24
         */
        get_size(): [number, number];
    }


    namespace Screen {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::composited-changed signal is emitted when the composited
             * status of the screen changes
             * @signal
             * @since 2.10
             * @run-last
             */
            "composited-changed": () => void;
            /**
             * The ::monitors-changed signal is emitted when the number, size
             * or position of the monitors attached to the screen change.
             * 
             * Only for X11 and OS X for now. A future implementation for Win32
             * may be a possibility.
             * @signal
             * @since 2.14
             * @run-last
             */
            "monitors-changed": () => void;
            /**
             * The ::size-changed signal is emitted when the pixel width or
             * height of a screen changes.
             * @signal
             * @since 2.2
             * @run-last
             */
            "size-changed": () => void;
            "notify::font-options": (pspec: GObject.ParamSpec) => void;
            "notify::resolution": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            font_options: never;
            fontOptions: never;
            resolution: number;
        }
    }

    /**
     * @gir-type Class
     */
    class Screen extends GObject.Object {
        static $gtype: GObject.GType<Screen>;

        // Properties
        get font_options(): null;
        set font_options(val: never);

        get fontOptions(): null;
        set fontOptions(val: never);

        /**
         * @default -1
         */
        get resolution(): number;
        set resolution(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Screen.SignalSignatures;

        // Fields
        closed: number;

        normal_gcs: GC[];

        exposure_gcs: GC[];

        subwindow_gcs: GC[];

        // Constructors
        constructor(properties?: Partial<Screen.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Screen.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Screen.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Screen.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Screen.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Screen.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Screen.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Gets the default screen for the default display. (See
         * gdk_display_get_default ()).
         * @since 2.2
         */
        static get_default(): Screen;

        /**
         * Returns the height of the default screen in pixels.
         */
        static height(): number;

        /**
         * Returns the height of the default screen in millimeters.
         * Note that on many X servers this value will not be correct.
         */
        static height_mm(): number;

        /**
         * Returns the width of the default screen in pixels.
         */
        static width(): number;

        /**
         * Returns the width of the default screen in millimeters.
         * Note that on many X servers this value will not be correct.
         */
        static width_mm(): number;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_composited_changed(): void;

        /**
         * @virtual
         */
        vfunc_monitors_changed(): void;

        /**
         * @virtual
         */
        vfunc_size_changed(): void;

        // Methods
        /**
         * @param event 
         */
        broadcast_client_message(event: Event): void;

        /**
         * Gets the default colormap for `screen`.
         * @returns the default {@link Gdk.Colormap}.
         * @since 2.2
         */
        get_default_colormap(): Colormap;

        /**
         * Gets any options previously set with `gdk_screen_set_font_options()`.
         * @returns the current font options, or `null` if no default  font options have been set.
         * @since 2.10
         */
        get_font_options(): cairo.FontOptions;

        /**
         * Gets the height of `screen` in pixels
         * @returns the height of `screen` in pixels.
         * @since 2.2
         */
        get_height(): number;

        /**
         * Returns the height of `screen` in millimeters.
         * Note that on some X servers this value will not be correct.
         * @returns the heigth of `screen` in millimeters.
         * @since 2.2
         */
        get_height_mm(): number;

        /**
         * Returns the monitor number in which the point (`x`,`y`) is located.
         * @param x the x coordinate in the virtual screen.
         * @param y the y coordinate in the virtual screen.
         * @returns the monitor number in which the point (`x`,`y`) lies, or   a monitor close to (`x`,`y`) if the point is not in any monitor.
         * @since 2.2
         */
        get_monitor_at_point(x: number, y: number): number;

        /**
         * Returns the number of the monitor in which the largest area of the
         * bounding rectangle of `window` resides.
         * @param window a {@link Gdk.Window}
         * @returns the monitor number in which most of `window` is located,           or if `window` does not intersect any monitors, a monitor,           close to `window`.
         * @since 2.2
         */
        get_monitor_at_window(window: Window): number;

        /**
         * Retrieves the {@link Gdk.Rectangle} representing the size and position of
         * the individual monitor within the entire screen area.
         * 
         * Note that the size of the entire screen area can be retrieved via
         * `gdk_screen_get_width()` and `gdk_screen_get_height()`.
         * @param monitor_num the monitor number, between 0 and gdk_screen_get_n_monitors (screen)
         * @param dest a {@link Gdk.Rectangle} to be filled with the monitor geometry
         * @since 2.2
         */
        get_monitor_geometry(monitor_num: number, dest: Rectangle): void;

        /**
         * Gets the height in millimeters of the specified monitor.
         * @param monitor_num number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)
         * @returns the height of the monitor, or -1 if not available
         * @since 2.14
         */
        get_monitor_height_mm(monitor_num: number): number;

        /**
         * Returns the output name of the specified monitor.
         * Usually something like VGA, DVI, or TV, not the actual
         * product name of the display device.
         * @param monitor_num number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)
         * @returns a newly-allocated string containing the name of the monitor,   or `null` if the name cannot be determined
         * @since 2.14
         */
        get_monitor_plug_name(monitor_num: number): string;

        /**
         * Gets the width in millimeters of the specified monitor, if available.
         * @param monitor_num number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)
         * @returns the width of the monitor, or -1 if not available
         * @since 2.14
         */
        get_monitor_width_mm(monitor_num: number): number;

        /**
         * Returns the number of monitors which `screen` consists of.
         * @returns number of monitors which `screen` consists of
         * @since 2.2
         */
        get_n_monitors(): number;

        /**
         * Gets the index of `screen` among the screens in the display
         * to which it belongs. (See `gdk_screen_get_display()`)
         * @returns the index
         * @since 2.2
         */
        get_number(): number;

        /**
         * Gets the primary monitor for `screen`.  The primary monitor
         * is considered the monitor where the 'main desktop' lives.
         * While normal application windows typically allow the window
         * manager to place the windows, specialized desktop applications
         * such as panels should place themselves on the primary monitor.
         * 
         * If no primary monitor is configured by the user, the return value
         * will be 0, defaulting to the first monitor.
         * @returns An integer index for the primary monitor, or 0 if none is configured.
         * @since 2.20
         */
        get_primary_monitor(): number;

        /**
         * Gets the resolution for font handling on the screen; see
         * `gdk_screen_set_resolution()` for full details.
         * @returns the current resolution, or -1 if no resolution has been set.
         * @since 2.10
         */
        get_resolution(): number;

        /**
         * Gets the preferred colormap for rendering image data on `screen`.
         * Not a very useful function; historically, GDK could only render RGB
         * image data to one colormap and visual, but in the current version
         * it can render to any colormap and visual. So there's no need to
         * call this function.
         * @returns the preferred colormap
         * @since 2.2
         * @deprecated since 2.22: Use `gdk_screen_get_system_colormap()`
         */
        get_rgb_colormap(): Colormap;

        /**
         * Gets a "preferred visual" chosen by GdkRGB for rendering image data
         * on `screen`. In previous versions of
         * GDK, this was the only visual GdkRGB could use for rendering. In
         * current versions, it's simply the visual GdkRGB would have chosen as
         * the optimal one in those previous versions. GdkRGB can now render to
         * drawables with any visual.
         * @returns The {@link Gdk.Visual} chosen by GdkRGB.
         * @since 2.2
         * @deprecated since 2.22: Use `gdk_screen_get_system_visual()`
         */
        get_rgb_visual(): Visual;

        /**
         * Gets a colormap to use for creating windows or pixmaps with an
         * alpha channel. The windowing system on which GTK+ is running
         * may not support this capability, in which case `null` will
         * be returned. Even if a non-`null` value is returned, its
         * possible that the window's alpha channel won't be honored
         * when displaying the window on the screen: in particular, for
         * X an appropriate windowing manager and compositing manager
         * must be running to provide appropriate display.
         * 
         * This functionality is not implemented in the Windows backend.
         * 
         * For setting an overall opacity for a top-level window, see
         * `gdk_window_set_opacity()`.
         * @returns a colormap to use for windows with     an alpha channel or `null` if the capability is not available.
         * @since 2.8
         */
        get_rgba_colormap(): Colormap;

        /**
         * Gets a visual to use for creating windows or pixmaps with an
         * alpha channel. See the docs for `gdk_screen_get_rgba_colormap()`
         * for caveats.
         * @returns a visual to use for windows with an     alpha channel or `null` if the capability is not available.
         * @since 2.8
         */
        get_rgba_visual(): Visual;

        /**
         * Gets the root window of `screen`.
         * @returns the root window
         * @since 2.2
         */
        get_root_window(): Window;

        /**
         * @param name 
         * @param value 
         */
        get_setting(name: string, value: GObject.Value | any): boolean;

        /**
         * Gets the system's default colormap for `screen`
         * @returns the default colormap for `screen`.
         * @since 2.2
         */
        get_system_colormap(): Colormap;

        /**
         * Get the system's default visual for `screen`.
         * This is the visual for the root window of the display.
         * The return value should not be freed.
         * @returns the system visual
         * @since 2.2
         */
        get_system_visual(): Visual;

        /**
         * Obtains a list of all toplevel windows known to GDK on the screen `screen`.
         * A toplevel window is a child of the root window (see
         * `gdk_get_default_root_window()`).
         * 
         * The returned list should be freed with `g_list_free()`, but
         * its elements need not be freed.
         * @returns list of toplevel windows, free with `g_list_free()`
         * @since 2.2
         */
        get_toplevel_windows(): Window[];

        /**
         * Gets the width of `screen` in pixels
         * @returns the width of `screen` in pixels.
         * @since 2.2
         */
        get_width(): number;

        /**
         * Gets the width of `screen` in millimeters.
         * Note that on some X servers this value will not be correct.
         * @returns the width of `screen` in millimeters.
         * @since 2.2
         */
        get_width_mm(): number;

        /**
         * Returns a {@link GLib.List} of {@link Gdk.Window}<!-- -->s representing the current
         * window stack.
         * 
         * On X11, this is done by inspecting the _NET_CLIENT_LIST_STACKING
         * property on the root window, as described in the <ulink
         * url="http://www.freedesktop.org/Standards/wm-spec">Extended Window
         * Manager Hints</ulink>. If the window manager does not support the
         * _NET_CLIENT_LIST_STACKING hint, this function returns `null`.
         * 
         * On other platforms, this function may return `null`, depending on whether
         * it is implementable on that platform.
         * 
         * The returned list is newly allocated and owns references to the
         * windows it contains, so it should be freed using `g_list_free()` and
         * its windows unrefed using `g_object_unref()` when no longer needed.
         * @returns a list of {@link Gdk.Window}<!-- -->s for the current window stack,               or `null`.
         * @since 2.10
         */
        get_window_stack(): Window[];

        /**
         * Returns whether windows with an RGBA visual can reasonably
         * be expected to have their alpha channel drawn correctly on
         * the screen.
         * 
         * On X11 this function returns whether a compositing manager is
         * compositing `screen`.
         * @returns Whether windows with RGBA visuals can reasonably be expected to have their alpha channels drawn correctly on the screen.
         * @since 2.10
         */
        is_composited(): boolean;

        /**
         * Lists the available visuals for the specified `screen`.
         * A visual describes a hardware image data format.
         * For example, a visual might support 24-bit color, or 8-bit color,
         * and might expect pixels to be in a certain format.
         * 
         * Call `g_list_free()` on the return value when you're finished with it.
         * @returns a list of visuals; the list must be freed, but not its contents
         * @since 2.2
         */
        list_visuals(): Visual[];

        /**
         * Determines the name to pass to `gdk_display_open()` to get
         * a {@link Gdk.Display} with this screen as the default screen.
         * @returns a newly allocated string, free with `g_free()`
         * @since 2.2
         */
        make_display_name(): string;

        /**
         * Sets the default `colormap` for `screen`.
         * @param colormap a {@link Gdk.Colormap}
         * @since 2.2
         */
        set_default_colormap(colormap: Colormap): void;

        /**
         * Sets the default font options for the screen. These
         * options will be set on any {@link Pango.Context}'s newly created
         * with `gdk_pango_context_get_for_screen()`. Changing the
         * default set of font options does not affect contexts that
         * have already been created.
         * @param options a {@link cairo.FontOptions}, or `null` to unset any   previously set default font options.
         * @since 2.10
         */
        set_font_options(options: cairo.FontOptions | null): void;

        /**
         * Sets the resolution for font handling on the screen. This is a
         * scale factor between points specified in a {@link Pango.FontDescription}
         * and cairo units. The default value is 96, meaning that a 10 point
         * font will be 13 units high. (10 * 96. / 72. = 13.3).
         * @param dpi the resolution in "dots per inch". (Physical inches aren't actually   involved; the terminology is conventional.)
         * @since 2.10
         */
        set_resolution(dpi: number): void;
    }


    namespace Visual {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Visual extends GObject.Object {
        static $gtype: GObject.GType<Visual>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Visual.SignalSignatures;

        // Fields
        type: VisualType;

        depth: number;

        byte_order: ByteOrder;

        colormap_size: number;

        bits_per_rgb: number;

        red_mask: number;

        red_shift: number;

        red_prec: number;

        green_mask: number;

        green_shift: number;

        green_prec: number;

        blue_mask: number;

        blue_shift: number;

        blue_prec: number;

        // Constructors
        constructor(properties?: Partial<Visual.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Visual.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Visual.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Visual.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Visual.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Visual.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Visual.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Get the visual with the most available colors for the default
         * GDK screen. The return value should not be freed.
         */
        static get_best(): Visual;

        /**
         * Get the best available depth for the default GDK screen.  "Best"
         * means "largest," i.e. 32 preferred over 24 preferred over 8 bits
         * per pixel.
         */
        static get_best_depth(): number;

        /**
         * Return the best available visual type for the default GDK screen.
         */
        static get_best_type(): VisualType;

        /**
         * Combines `gdk_visual_get_best_with_depth()` and `gdk_visual_get_best_with_type()`.
         * @param depth a bit depth
         * @param visual_type a visual type
         */
        static get_best_with_both(depth: number, visual_type: VisualType): Visual;

        /**
         * Get the best visual with depth `depth` for the default GDK screen.
         * Color visuals and visuals with mutable colormaps are preferred
         * over grayscale or fixed-colormap visuals. The return value should not
         * be freed. `null` may be returned if no visual supports `depth`.
         * @param depth a bit depth
         */
        static get_best_with_depth(depth: number): Visual;

        /**
         * Get the best visual of the given `visual_type` for the default GDK screen.
         * Visuals with higher color depths are considered better. The return value
         * should not be freed. `null` may be returned if no visual has type
         * `visual_type`.
         * @param visual_type a visual type
         */
        static get_best_with_type(visual_type: VisualType): Visual;

        /**
         * Get the system's default visual for the default GDK screen.
         * This is the visual for the root window of the display.
         * The return value should not be freed.
         */
        static get_system(): Visual;

        // Methods
        /**
         * Returns the number of significant bits per red, green and blue value.
         * @returns The number of significant bits per color value for `visual`.
         * @since 2.22
         */
        get_bits_per_rgb(): number;

        /**
         * Obtains values that are needed to calculate blue pixel values in TrueColor
         * and DirectColor.  The "mask" is the significant bits within the pixel.
         * The "shift" is the number of bits left we must shift a primary for it
         * to be in position (according to the "mask").  Finally, "precision" refers
         * to how much precision the pixel value contains for a particular primary.
         * @since 2.22
         */
        get_blue_pixel_details(): [number, number, number];

        /**
         * Returns the byte order of this visual.
         * @returns A {@link Gdk.ByteOrder} stating the byte order of `visual`.
         * @since 2.22
         */
        get_byte_order(): ByteOrder;

        /**
         * Returns the size of a colormap for this visual.
         * @returns The size of a colormap that is suitable for `visual`.
         * @since 2.22
         */
        get_colormap_size(): number;

        /**
         * Returns the bit depth of this visual.
         * @returns The bit depth of this visual.
         * @since 2.22
         */
        get_depth(): number;

        /**
         * Obtains values that are needed to calculate green pixel values in TrueColor
         * and DirectColor.  The "mask" is the significant bits within the pixel.
         * The "shift" is the number of bits left we must shift a primary for it
         * to be in position (according to the "mask").  Finally, "precision" refers
         * to how much precision the pixel value contains for a particular primary.
         * @since 2.22
         */
        get_green_pixel_details(): [number, number, number];

        /**
         * Obtains values that are needed to calculate red pixel values in TrueColor
         * and DirectColor.  The "mask" is the significant bits within the pixel.
         * The "shift" is the number of bits left we must shift a primary for it
         * to be in position (according to the "mask").  Finally, "precision" refers
         * to how much precision the pixel value contains for a particular primary.
         * @since 2.22
         */
        get_red_pixel_details(): [number, number, number];

        /**
         * Gets the screen to which this visual belongs
         * @returns the screen to which this visual belongs.
         * @since 2.2
         */
        get_screen(): Screen;

        /**
         * Returns the type of visual this is (PseudoColor, TrueColor, etc).
         * @returns A {@link Gdk.VisualType} stating the type of `visual`.
         * @since 2.22
         */
        get_visual_type(): VisualType;
    }


    namespace Window {
        // Signal signatures
        interface SignalSignatures extends Drawable.SignalSignatures {
            /**
             * The ::from-embedder signal is emitted to translate coordinates
             * in the embedder of an offscreen window to the offscreen window.
             * 
             * See also `GtkWindow::to-embedder`.
             * @signal
             * @since 2.18
             * @run-last
             */
            "from-embedder": (embedder_x: number, embedder_y: number, offscreen_x: number, offscreen_y: number) => void;
            /**
             * The ::pick-embedded-child signal is emitted to find an embedded
             * child at the given position.
             * @signal
             * @since 2.18
             * @run-last
             */
            "pick-embedded-child": (x: number, y: number) => Window;
            /**
             * The ::to-embedder signal is emitted to translate coordinates
             * in an offscreen window to its embedder.
             * 
             * See also `GtkWindow::from-embedder`.
             * @signal
             * @since 2.18
             * @run-last
             */
            "to-embedder": (offscreen_x: number, offscreen_y: number, embedder_x: number, embedder_y: number) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Drawable.ConstructorProps {
            cursor: Cursor;
        }
    }

    /**
     * @gir-type Class
     */
    class Window extends Drawable {
        static $gtype: GObject.GType<Window>;

        // Properties
        /**
         * The mouse pointer for a {@link Gdk.Window}. See `gdk_window_set_cursor()` and
         * `gdk_window_get_cursor()` for details.
         * @since 2.18
         */
        get cursor(): Cursor;
        set cursor(val: Cursor);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Window.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Window.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Window.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Window.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Window.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Window.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Window.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Window.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Emits a short beep associated to `window` in the appropriate
         * display, if supported. Otherwise, emits a short beep on
         * the display just as `gdk_display_beep()`.
         * @since 2.12
         */
        beep(): void;

        /**
         * Begins a window move operation (for a toplevel window).  You might
         * use this function to implement a "window move grip," for
         * example. The function works best with window managers that support
         * the <ulink url="http://www.freedesktop.org/Standards/wm-spec">Extended
         * Window Manager Hints</ulink>, but has a fallback implementation for
         * other window managers.
         * @param button the button being used to drag
         * @param root_x root window X coordinate of mouse click that began the drag
         * @param root_y root window Y coordinate of mouse click that began the drag
         * @param timestamp timestamp of mouse click that began the drag
         */
        begin_move_drag(button: number, root_x: number, root_y: number, timestamp: number): void;

        /**
         * A convenience wrapper around `gdk_window_begin_paint_region()` which
         * creates a rectangular region for you. See
         * `gdk_window_begin_paint_region()` for details.
         * @param rectangle rectangle you intend to draw to
         */
        begin_paint_rect(rectangle: Rectangle): void;

        /**
         * Indicates that you are beginning the process of redrawing `region`.
         * A backing store (offscreen buffer) large enough to contain `region`
         * will be created. The backing store will be initialized with the
         * background color or background pixmap for `window`. Then, all
         * drawing operations performed on `window` will be diverted to the
         * backing store.  When you call `gdk_window_end_paint()`, the backing
         * store will be copied to `window`, making it visible onscreen. Only
         * the part of `window` contained in `region` will be modified; that is,
         * drawing operations are clipped to `region`.
         * 
         * The net result of all this is to remove flicker, because the user
         * sees the finished product appear all at once when you call
         * `gdk_window_end_paint()`. If you draw to `window` directly without
         * calling `gdk_window_begin_paint_region()`, the user may see flicker
         * as individual drawing operations are performed in sequence.  The
         * clipping and background-initializing features of
         * `gdk_window_begin_paint_region()` are conveniences for the
         * programmer, so you can avoid doing that work yourself.
         * 
         * When using GTK+, the widget system automatically places calls to
         * `gdk_window_begin_paint_region()` and `gdk_window_end_paint()` around
         * emissions of the expose_event signal. That is, if you're writing an
         * expose event handler, you can assume that the exposed area in
         * {@link Gdk.EventExpose} has already been cleared to the window background,
         * is already set as the clip region, and already has a backing store.
         * Therefore in most cases, application code need not call
         * `gdk_window_begin_paint_region()`. (You can disable the automatic
         * calls around expose events on a widget-by-widget basis by calling
         * `gtk_widget_set_double_buffered()`.)
         * 
         * If you call this function multiple times before calling the
         * matching `gdk_window_end_paint()`, the backing stores are pushed onto
         * a stack. `gdk_window_end_paint()` copies the topmost backing store
         * onscreen, subtracts the topmost region from all other regions in
         * the stack, and pops the stack. All drawing operations affect only
         * the topmost backing store in the stack. One matching call to
         * `gdk_window_end_paint()` is required for each call to
         * `gdk_window_begin_paint_region()`.
         * @param region region you intend to draw to
         */
        begin_paint_region(region: Region): void;

        /**
         * Begins a window resize operation (for a toplevel window).
         * You might use this function to implement a "window resize grip," for
         * example; in fact `GtkStatusbar` uses it. The function works best
         * with window managers that support the <ulink url="http://www.freedesktop.org/Standards/wm-spec">Extended Window Manager Hints</ulink>, but has a
         * fallback implementation for other window managers.
         * @param edge the edge or corner from which the drag is started
         * @param button the button being used to drag
         * @param root_x root window X coordinate of mouse click that began the drag
         * @param root_y root window Y coordinate of mouse click that began the drag
         * @param timestamp timestamp of mouse click that began the drag (use `gdk_event_get_time()`)
         */
        begin_resize_drag(edge: WindowEdge, button: number, root_x: number, root_y: number, timestamp: number): void;

        /**
         * Clears an entire `window` to the background color or background pixmap.
         */
        clear(): void;

        /**
         * Clears an area of `window` to the background color or background pixmap.
         * @param x x coordinate of rectangle to clear
         * @param y y coordinate of rectangle to clear
         * @param width width of rectangle to clear
         * @param height height of rectangle to clear
         */
        clear_area(x: number, y: number, width: number, height: number): void;

        /**
         * Like `gdk_window_clear_area()`, but also generates an expose event for
         * the cleared area.
         * 
         * This function has a stupid name because it dates back to the mists
         * time, pre-GDK-1.0.
         * @param x x coordinate of rectangle to clear
         * @param y y coordinate of rectangle to clear
         * @param width width of rectangle to clear
         * @param height height of rectangle to clear
         */
        clear_area_e(x: number, y: number, width: number, height: number): void;

        /**
         * Signal to the window system that the application has finished
         * handling Configure events it has received. Window Managers can
         * use this to better synchronize the frame repaint with the
         * application. GTK+ applications will automatically call this
         * function when appropriate.
         * 
         * This function can only be called if `gdk_window_enable_synchronized_configure()`
         * was called previously.
         * @since 2.6
         */
        configure_finished(): void;

        /**
         * Transforms window coordinates from a parent window to a child
         * window, where the parent window is the normal parent as returned by
         * `gdk_window_get_parent()` for normal windows, and the window's
         * embedder as returned by `gdk_offscreen_window_get_embedder()` for
         * offscreen windows.
         * 
         * For normal windows, calling this function is equivalent to subtracting
         * the return values of `gdk_window_get_position()` from the parent coordinates.
         * For offscreen windows however (which can be arbitrarily transformed),
         * this function calls the GdkWindow::from-embedder: signal to translate
         * the coordinates.
         * 
         * You should always use this function when writing generic code that
         * walks down a window hierarchy.
         * 
         * See also: `gdk_window_coords_to_parent()`
         * @param parent_x X coordinate in parent's coordinate system
         * @param parent_y Y coordinate in parent's coordinate system
         * @since 2.22
         */
        coords_from_parent(parent_x: number, parent_y: number): [number, number];

        /**
         * Transforms window coordinates from a child window to its parent
         * window, where the parent window is the normal parent as returned by
         * `gdk_window_get_parent()` for normal windows, and the window's
         * embedder as returned by `gdk_offscreen_window_get_embedder()` for
         * offscreen windows.
         * 
         * For normal windows, calling this function is equivalent to adding
         * the return values of `gdk_window_get_position()` to the child coordinates.
         * For offscreen windows however (which can be arbitrarily transformed),
         * this function calls the GdkWindow::to-embedder: signal to translate
         * the coordinates.
         * 
         * You should always use this function when writing generic code that
         * walks up a window hierarchy.
         * 
         * See also: `gdk_window_coords_from_parent()`
         * @param x X coordinate in child's coordinate system
         * @param y Y coordinate in child's coordinate system
         * @since 2.22
         */
        coords_to_parent(x: number, y: number): [number, number];

        /**
         * Create a new surface that is as compatible as possible with the
         * given `window`. For example the new surface will have the same
         * fallback resolution and font options as `window`. Generally, the new
         * surface will also use the same backend as `window`, unless that is
         * not possible for some reason. The type of the returned surface may
         * be examined with `cairo_surface_get_type()`.
         * 
         * Initially the surface contents are all 0 (transparent if contents
         * have transparency, black otherwise.)
         * @param content the content for the new surface
         * @param width width of the new surface
         * @param height height of the new surface
         * @returns a pointer to the newly allocated surface. The caller owns the surface and should call `cairo_surface_destroy()` when done with it. This function always returns a valid pointer, but it will return a pointer to a "nil" surface if `other` is already in an error state or any other error occurs.
         * @since 2.22
         */
        create_similar_surface(content: cairo.Content, width: number, height: number): cairo.Surface;

        /**
         * Attempt to deiconify (unminimize) `window`. On X11 the window manager may
         * choose to ignore the request to deiconify. When using GTK+,
         * use `gtk_window_deiconify()` instead of the {@link Gdk.Window} variant. Or better yet,
         * you probably want to use `gtk_window_present()`, which raises the window, focuses it,
         * unminimizes it, and puts it on the current desktop.
         */
        deiconify(): void;

        /**
         * Destroys the window system resources associated with `window` and decrements `window`'s
         * reference count. The window system resources for all children of `window` are also
         * destroyed, but the children's reference counts are not decremented.
         * 
         * Note that a window will not be destroyed automatically when its reference count
         * reaches zero. You must call this function yourself before that happens.
         */
        destroy(): void;

        destroy_notify(): void;

        /**
         * Indicates that the application will cooperate with the window
         * system in synchronizing the window repaint with the window
         * manager during resizing operations. After an application calls
         * this function, it must call `gdk_window_configure_finished()` every
         * time it has finished all processing associated with a set of
         * Configure events. Toplevel GTK+ windows automatically use this
         * protocol.
         * 
         * On X, calling this function makes `window` participate in the
         * _NET_WM_SYNC_REQUEST window manager protocol.
         * @since 2.6
         */
        enable_synchronized_configure(): void;

        /**
         * Indicates that the backing store created by the most recent call to
         * `gdk_window_begin_paint_region()` should be copied onscreen and
         * deleted, leaving the next-most-recent backing store or no backing
         * store at all as the active paint region. See
         * `gdk_window_begin_paint_region()` for full details. It is an error to
         * call this function without a matching
         * `gdk_window_begin_paint_region()` first.
         */
        end_paint(): void;

        /**
         * Tries to ensure that there is a window-system native window for this
         * GdkWindow. This may fail in some situations, returning `false`.
         * 
         * Offscreen window and children of them can never have native windows.
         * 
         * Some backends may not support native child windows.
         * @returns `true` if the window has a native window, `false` otherwise
         * @since 2.18
         */
        ensure_native(): boolean;

        /**
         * Flush all outstanding cached operations on a window, leaving the
         * window in a state which reflects all that has been drawn before.
         * 
         * Gdk uses multiple kinds of caching to get better performance and
         * nicer drawing. For instance, during exposes all paints to a window
         * using double buffered rendering are keep on a pixmap until the last
         * window has been exposed. It also delays window moves/scrolls until
         * as long as possible until next update to avoid tearing when moving
         * windows.
         * 
         * Normally this should be completely invisible to applications, as
         * we automatically flush the windows when required, but this might
         * be needed if you for instance mix direct native drawing with
         * gdk drawing. For Gtk widgets that don't use double buffering this
         * will be called automatically before sending the expose event.
         * @since 2.18
         */
        flush(): void;

        /**
         * Sets keyboard focus to `window`. In most cases, `gtk_window_present()`
         * should be used on a `GtkWindow`, rather than calling this function.
         * @param timestamp timestamp of the event triggering the window focus
         */
        focus(timestamp: number): void;

        /**
         * Temporarily freezes a window and all its descendants such that it won't
         * receive expose events.  The window will begin receiving expose events
         * again when `gdk_window_thaw_toplevel_updates_libgtk_only()` is called. If
         * `gdk_window_freeze_toplevel_updates_libgtk_only()`
         * has been called more than once,
         * `gdk_window_thaw_toplevel_updates_libgtk_only()` must be called
         * an equal number of times to begin processing exposes.
         * 
         * This function is not part of the GDK public API and is only
         * for use by GTK+.
         */
        freeze_toplevel_updates_libgtk_only(): void;

        /**
         * Temporarily freezes a window such that it won't receive expose
         * events.  The window will begin receiving expose events again when
         * `gdk_window_thaw_updates()` is called. If `gdk_window_freeze_updates()`
         * has been called more than once, `gdk_window_thaw_updates()` must be called
         * an equal number of times to begin processing exposes.
         */
        freeze_updates(): void;

        /**
         * Moves the window into fullscreen mode. This means the
         * window covers the entire screen and is above any panels
         * or task bars.
         * 
         * If the window was already fullscreen, then this function does nothing.
         * 
         * On X11, asks the window manager to put `window` in a fullscreen
         * state, if the window manager supports this operation. Not all
         * window managers support this, and some deliberately ignore it or
         * don't have a concept of "fullscreen"; so you can't rely on the
         * fullscreenification actually happening. But it will happen with
         * most standard window managers, and GDK makes a best effort to get
         * it to happen.
         * @since 2.2
         */
        fullscreen(): void;

        /**
         * This function informs GDK that the geometry of an embedded
         * offscreen window has changed. This is necessary for GDK to keep
         * track of which offscreen window the pointer is in.
         * @since 2.18
         */
        geometry_changed(): void;

        /**
         * Determines whether or not the desktop environment shuld be hinted that
         * the window does not want to receive input focus.
         * @returns whether or not the window should receive input focus.
         * @since 2.22
         */
        get_accept_focus(): boolean;

        /**
         * Gets the pattern used to clear the background on `window`. If `window`
         * does not have its own background and reuses the parent's, `null` is
         * returned and you'll have to query it yourself.
         * @returns The pattern to use for the background or     `null` to use the parent's background.
         * @since 2.22
         */
        get_background_pattern(): cairo.Pattern;

        /**
         * Gets the list of children of `window` known to GDK.
         * This function only returns children created via GDK,
         * so for example it's useless when used with the root window;
         * it only returns windows an application created itself.
         * 
         * The returned list must be freed, but the elements in the
         * list need not be.
         * @returns list of child windows inside `window`
         */
        get_children(): Window[];

        /**
         * Determines whether `window` is composited.
         * 
         * See `gdk_window_set_composited()`.
         * @returns `true` if the window is composited.
         * @since 2.22
         */
        get_composited(): boolean;

        /**
         * Retrieves a {@link Gdk.Cursor} pointer for the cursor currently set on the
         * specified {@link Gdk.Window}, or `null`.  If the return value is `null` then
         * there is no custom cursor set on the specified window, and it is
         * using the cursor for its parent window.
         * @returns a {@link Gdk.Cursor}, or `null`. The returned   object is owned by the {@link Gdk.Window} and should not be unreferenced   directly. Use `gdk_window_set_cursor()` to unset the cursor of the   window
         * @since 2.18
         */
        get_cursor(): Cursor;

        /**
         * Returns the decorations set on the GdkWindow with `gdk_window_set_decorations`
         * @param decorations The window decorations will be written here
         * @returns TRUE if the window has decorations set, FALSE otherwise.
         */
        get_decorations(decorations: WMDecoration): boolean;

        /**
         * This gets the origin of a {@link Gdk.Window} relative to
         * an Enlightenment-window-manager desktop. As long as you don't
         * assume that the user's desktop/workspace covers the entire
         * root window (i.e. you don't assume that the desktop begins
         * at root window coordinate 0,0) this function is not necessary.
         * It's deprecated for that reason.
         * @param x return location for X coordinate
         * @param y return location for Y coordinate
         * @returns not meaningful
         */
        get_deskrelative_origin(x: number, y: number): boolean;

        /**
         * Gets the event mask for `window`. See `gdk_window_set_events()`.
         * @returns event mask for `window`
         */
        get_events(): EventMask;

        /**
         * Determines whether or not the desktop environment should be hinted that the
         * window does not want to receive input focus when it is mapped.
         * @returns whether or not the window wants to receive input focus when it is mapped.
         * @since 2.22
         */
        get_focus_on_map(): boolean;

        /**
         * Obtains the bounding box of the window, including window manager
         * titlebar/borders if any. The frame position is given in root window
         * coordinates. To get the position of the window itself (rather than
         * the frame) in root window coordinates, use `gdk_window_get_origin()`.
         * @param rect rectangle to fill with bounding box of the window frame
         */
        get_frame_extents(rect: Rectangle): void;

        /**
         * Any of the return location arguments to this function may be `null`,
         * if you aren't interested in getting the value of that field.
         * 
         * The X and Y coordinates returned are relative to the parent window
         * of `window`, which for toplevels usually means relative to the
         * window decorations (titlebar, etc.) rather than relative to the
         * root window (screen-size background window).
         * 
         * On the X11 platform, the geometry is obtained from the X server,
         * so reflects the latest position of `window`; this may be out-of-sync
         * with the position of `window` delivered in the most-recently-processed
         * {@link Gdk.EventConfigure}. `gdk_window_get_position()` in contrast gets the
         * position from the most recent configure event.
         * 
         * <note>
         * If `window` is not a toplevel, it is <emphasis>much</emphasis> better
         * to call `gdk_window_get_position()` and `gdk_drawable_get_size()` instead,
         * because it avoids the roundtrip to the X server and because
         * `gdk_drawable_get_size()` supports the full 32-bit coordinate space,
         * whereas `gdk_window_get_geometry()` is restricted to the 16-bit
         * coordinates of X11.
         * </note>
         * @param x return location for X coordinate of window (relative to its parent)
         * @param y return location for Y coordinate of window (relative to its parent)
         * @param width return location for width of window
         * @param height return location for height of window
         * @param depth return location for bit depth of window
         */
        get_geometry(x: number, y: number, width: number, height: number, depth: number): void;

        /**
         * Returns the height of the given `window`.
         * 
         * On the X11 platform the returned size is the size reported in the
         * most-recently-processed configure event, rather than the current
         * size on the X server.
         * @returns The height of `window`
         * @since 2.24
         */
        get_height(): number;

        /**
         * If you bypass the GDK layer and use windowing system primitives to
         * draw directly onto a {@link Gdk.Window}, then you need to deal with two
         * details: there may be an offset between GDK coordinates and windowing
         * system coordinates, and GDK may have redirected drawing to a offscreen
         * pixmap as the result of a `gdk_window_begin_paint_region()` calls.
         * This function allows retrieving the information you need to compensate
         * for these effects.
         * 
         * This function exposes details of the GDK implementation, and is thus
         * likely to change in future releases of GDK.
         */
        get_internal_paint_info(): [Drawable, number, number];

        /**
         * Determines whether or not the window manager is hinted that `window`
         * has modal behaviour.
         * @returns whether or not the window has the modal hint set.
         * @since 2.22
         */
        get_modal_hint(): boolean;

        /**
         * Obtains the position of a window in root window coordinates.
         * (Compare with `gdk_window_get_position()` and
         * `gdk_window_get_geometry()` which return the position of a window
         * relative to its parent window.)
         * @param x return location for X coordinate
         * @param y return location for Y coordinate
         * @returns not meaningful, ignore
         */
        get_origin(x: number, y: number): number;

        /**
         * Obtains the current pointer position and modifier state.
         * The position is given in coordinates relative to the upper left
         * corner of `window`.
         * @returns the window containing the pointer (as with `gdk_window_at_pointer()`), or `null` if the window containing the pointer isn't known to GDK
         */
        get_pointer(): [Window, number, number, ModifierType | null];

        /**
         * Obtains the position of the window as reported in the
         * most-recently-processed {@link Gdk.EventConfigure}. Contrast with
         * `gdk_window_get_geometry()` which queries the X server for the
         * current window position, regardless of which events have been
         * received or processed.
         * 
         * The position coordinates are relative to the window's parent window.
         */
        get_position(): [number, number];

        /**
         * Obtains the position of a window position in root
         * window coordinates. This is similar to
         * `gdk_window_get_origin()` but allows you go pass
         * in any position in the window, not just the origin.
         * @param x X coordinate in window
         * @param y Y coordinate in window
         * @since 2.18
         */
        get_root_coords(x: number, y: number): [number, number];

        /**
         * Obtains the top-left corner of the window manager frame in root
         * window coordinates.
         * @param x return location for X position of window frame
         * @param y return location for Y position of window frame
         */
        get_root_origin(x: number, y: number): void;

        /**
         * Gets the bitwise OR of the currently active window state flags,
         * from the {@link Gdk.WindowState} enumeration.
         * @returns window state bitfield
         */
        get_state(): WindowState;

        /**
         * This function returns the type hint set for a window.
         * @returns The type hint set for `window`
         * @since 2.10
         */
        get_type_hint(): WindowTypeHint;

        /**
         * Retrieves the user data for `window`, which is normally the widget
         * that `window` belongs to. See `gdk_window_set_user_data()`.
         */
        get_user_data(): null;

        /**
         * Returns the width of the given `window`.
         * 
         * On the X11 platform the returned size is the size reported in the
         * most-recently-processed configure event, rather than the current
         * size on the X server.
         * @returns The width of `window`
         * @since 2.24
         */
        get_width(): number;

        /**
         * Gets the type of the window. See {@link Gdk.WindowType}.
         * @returns type of window
         */
        get_window_type(): WindowType;

        /**
         * Checks whether the window has a native window or not. Note that
         * you can use `gdk_window_ensure_native()` if a native window is needed.
         * @returns `true` if the %window has a native window, `false` otherwise.
         * @since 2.22
         */
        has_native(): boolean;

        /**
         * For toplevel windows, withdraws them, so they will no longer be
         * known to the window manager; for all windows, unmaps them, so
         * they won't be displayed. Normally done automatically as
         * part of `gtk_widget_hide()`.
         */
        hide(): void;

        /**
         * Asks to iconify (minimize) `window`. The window manager may choose
         * to ignore the request, but normally will honor it. Using
         * `gtk_window_iconify()` is preferred, if you have a `GtkWindow` widget.
         * 
         * This function only makes sense when `window` is a toplevel window.
         */
        iconify(): void;

        /**
         * Like `gdk_window_shape_combine_mask()`, but the shape applies
         * only to event handling. Mouse events which happen while
         * the pointer position corresponds to an unset bit in the
         * mask will be passed on the window below `window`.
         * 
         * An input shape is typically used with RGBA windows.
         * The alpha channel of the window defines which pixels are
         * invisible and allows for nicely antialiased borders,
         * and the input shape controls where the window is
         * "clickable".
         * 
         * On the X11 platform, this requires version 1.1 of the
         * shape extension.
         * 
         * On the Win32 platform, this functionality is not present and the
         * function does nothing.
         * @param mask shape mask, or `null`
         * @param x X position of shape mask with respect to `window`
         * @param y Y position of shape mask with respect to `window`
         * @since 2.10
         */
        input_shape_combine_mask(mask: Bitmap | null, x: number, y: number): void;

        /**
         * Like `gdk_window_shape_combine_region()`, but the shape applies
         * only to event handling. Mouse events which happen while
         * the pointer position corresponds to an unset bit in the
         * mask will be passed on the window below `window`.
         * 
         * An input shape is typically used with RGBA windows.
         * The alpha channel of the window defines which pixels are
         * invisible and allows for nicely antialiased borders,
         * and the input shape controls where the window is
         * "clickable".
         * 
         * On the X11 platform, this requires version 1.1 of the
         * shape extension.
         * 
         * On the Win32 platform, this functionality is not present and the
         * function does nothing.
         * @param shape_region region of window to be non-transparent
         * @param offset_x X position of `shape_region` in `window` coordinates
         * @param offset_y Y position of `shape_region` in `window` coordinates
         * @since 2.10
         */
        input_shape_combine_region(shape_region: Region, offset_x: number, offset_y: number): void;

        /**
         * Adds `region` to the update area for `window`. The update area is the
         * region that needs to be redrawn, or "dirty region." The call
         * `gdk_window_process_updates()` sends one or more expose events to the
         * window, which together cover the entire update area. An
         * application would normally redraw the contents of `window` in
         * response to those expose events.
         * 
         * GDK will call `gdk_window_process_all_updates()` on your behalf
         * whenever your program returns to the main loop and becomes idle, so
         * normally there's no need to do that manually, you just need to
         * invalidate regions that you know should be redrawn.
         * 
         * The `child_func` parameter controls whether the region of
         * each child window that intersects `region` will also be invalidated.
         * Only children for which `child_func` returns TRUE will have the area
         * invalidated.
         * @param region a {@link Gdk.Region}
         * @param child_func function to use to decide if to recurse to a child,              `null` means never recurse.
         * @param user_data data passed to `child_func`
         */
        invalidate_maybe_recurse(region: Region, child_func: null, user_data: null): void;

        /**
         * A convenience wrapper around `gdk_window_invalidate_region()` which
         * invalidates a rectangular region. See
         * `gdk_window_invalidate_region()` for details.
         * @param rect rectangle to invalidate or `null` to invalidate the whole      window
         * @param invalidate_children whether to also invalidate child windows
         */
        invalidate_rect(rect: Rectangle | null, invalidate_children: boolean): void;

        /**
         * Adds `region` to the update area for `window`. The update area is the
         * region that needs to be redrawn, or "dirty region." The call
         * `gdk_window_process_updates()` sends one or more expose events to the
         * window, which together cover the entire update area. An
         * application would normally redraw the contents of `window` in
         * response to those expose events.
         * 
         * GDK will call `gdk_window_process_all_updates()` on your behalf
         * whenever your program returns to the main loop and becomes idle, so
         * normally there's no need to do that manually, you just need to
         * invalidate regions that you know should be redrawn.
         * 
         * The `invalidate_children` parameter controls whether the region of
         * each child window that intersects `region` will also be invalidated.
         * If `false`, then the update area for child windows will remain
         * unaffected. See gdk_window_invalidate_maybe_recurse if you need
         * fine grained control over which children are invalidated.
         * @param region a {@link Gdk.Region}
         * @param invalidate_children `true` to also invalidate child windows
         */
        invalidate_region(region: Region, invalidate_children: boolean): void;

        /**
         * Check to see if a window is destroyed..
         * @returns `true` if the window is destroyed
         * @since 2.18
         */
        is_destroyed(): boolean;

        /**
         * Determines whether or not the window is an input only window.
         * @returns `true` if `window` is input only
         * @since 2.22
         */
        is_input_only(): boolean;

        /**
         * Determines whether or not the window is shaped.
         * @returns `true` if `window` is shaped
         * @since 2.22
         */
        is_shaped(): boolean;

        /**
         * Check if the window and all ancestors of the window are
         * mapped. (This is not necessarily "viewable" in the X sense, since
         * we only check as far as we have GDK window parents, not to the root
         * window.)
         * @returns `true` if the window is viewable
         */
        is_viewable(): boolean;

        /**
         * Checks whether the window has been mapped (with `gdk_window_show()` or
         * `gdk_window_show_unraised()`).
         * @returns `true` if the window is mapped
         */
        is_visible(): boolean;

        /**
         * Lowers `window` to the bottom of the Z-order (stacking order), so that
         * other windows with the same parent window appear above `window`.
         * This is true whether or not the other windows are visible.
         * 
         * If `window` is a toplevel, the window manager may choose to deny the
         * request to move the window in the Z-order, `gdk_window_lower()` only
         * requests the restack, does not guarantee it.
         * 
         * Note that `gdk_window_show()` raises the window again, so don't call this
         * function before `gdk_window_show()`. (Try `gdk_window_show_unraised()`.)
         */
        lower(): void;

        /**
         * Maximizes the window. If the window was already maximized, then
         * this function does nothing.
         * 
         * On X11, asks the window manager to maximize `window`, if the window
         * manager supports this operation. Not all window managers support
         * this, and some deliberately ignore it or don't have a concept of
         * "maximized"; so you can't rely on the maximization actually
         * happening. But it will happen with most standard window managers,
         * and GDK makes a best effort to get it to happen.
         * 
         * On Windows, reliably maximizes the window.
         */
        maximize(): void;

        /**
         * Merges the input shape masks for any child windows into the
         * input shape mask for `window`. i.e. the union of all input masks
         * for `window` and its children will become the new input mask
         * for `window`. See `gdk_window_input_shape_combine_mask()`.
         * 
         * This function is distinct from `gdk_window_set_child_input_shapes()`
         * because it includes `window`'s input shape mask in the set of
         * shapes to be merged.
         * @since 2.10
         */
        merge_child_input_shapes(): void;

        /**
         * Merges the shape masks for any child windows into the
         * shape mask for `window`. i.e. the union of all masks
         * for `window` and its children will become the new mask
         * for `window`. See `gdk_window_shape_combine_mask()`.
         * 
         * This function is distinct from `gdk_window_set_child_shapes()`
         * because it includes `window`'s shape mask in the set of shapes to
         * be merged.
         */
        merge_child_shapes(): void;

        /**
         * Repositions a window relative to its parent window.
         * For toplevel windows, window managers may ignore or modify the move;
         * you should probably use `gtk_window_move()` on a `GtkWindow` widget
         * anyway, instead of using GDK functions. For child windows,
         * the move will reliably succeed.
         * 
         * If you're also planning to resize the window, use `gdk_window_move_resize()`
         * to both move and resize simultaneously, for a nicer visual effect.
         * @param x X coordinate relative to window's parent
         * @param y Y coordinate relative to window's parent
         */
        move(x: number, y: number): void;

        /**
         * Move the part of `window` indicated by `region` by `dy` pixels in the Y
         * direction and `dx` pixels in the X direction. The portions of `region`
         * that not covered by the new position of `region` are invalidated.
         * 
         * Child windows are not moved.
         * @param region The {@link Gdk.Region} to move
         * @param dx Amount to move in the X direction
         * @param dy Amount to move in the Y direction
         * @since 2.8
         */
        move_region(region: Region, dx: number, dy: number): void;

        /**
         * Equivalent to calling `gdk_window_move()` and `gdk_window_resize()`,
         * except that both operations are performed at once, avoiding strange
         * visual effects. (i.e. the user may be able to see the window first
         * move, then resize, if you don't use `gdk_window_move_resize()`.)
         * @param x new X position relative to window's parent
         * @param y new Y position relative to window's parent
         * @param width new width
         * @param height new height
         */
        move_resize(x: number, y: number, width: number, height: number): void;

        /**
         * Creates a new {@link Gdk.Window} using the attributes from
         * `attributes`. See {@link Gdk.WindowAttr} and {@link Gdk.WindowAttributesType} for
         * more details.  Note: to use this on displays other than the default
         * display, `parent` must be specified.
         * @param attributes attributes of the new window
         * @param attributes_mask mask indicating which fields in `attributes` are valid
         * @returns the new {@link Gdk.Window}
         */
        ["new"](attributes: WindowAttr, attributes_mask: number): Window;

        /**
         * Like `gdk_window_get_children()`, but does not copy the list of
         * children, so the list does not need to be freed.
         * @returns a reference to the list of child windows in `window`
         */
        peek_children(): Window[];

        /**
         * Sends one or more expose events to `window`. The areas in each
         * expose event will cover the entire update area for the window (see
         * `gdk_window_invalidate_region()` for details). Normally GDK calls
         * `gdk_window_process_all_updates()` on your behalf, so there's no
         * need to call this function unless you want to force expose events
         * to be delivered immediately and synchronously (vs. the usual
         * case, where GDK delivers them in an idle handler). Occasionally
         * this is useful to produce nicer scrolling behavior, for example.
         * @param update_children whether to also process updates for child windows
         */
        process_updates(update_children: boolean): void;

        /**
         * Raises `window` to the top of the Z-order (stacking order), so that
         * other windows with the same parent window appear below `window`.
         * This is true whether or not the windows are visible.
         * 
         * If `window` is a toplevel, the window manager may choose to deny the
         * request to move the window in the Z-order, `gdk_window_raise()` only
         * requests the restack, does not guarantee it.
         */
        raise(): void;

        /**
         * Redirects drawing into `window` so that drawing to the
         * window in the rectangle specified by `src_x`, `src_y`,
         * `width` and `height` is also drawn into `drawable` at
         * `dest_x`, `dest_y`.
         * 
         * Only drawing between `gdk_window_begin_paint_region()` or
         * `gdk_window_begin_paint_rect()` and `gdk_window_end_paint()` is
         * redirected.
         * 
         * Redirection is active until `gdk_window_remove_redirection()`
         * is called.
         * @param drawable a {@link Gdk.Drawable}
         * @param src_x x position in `window`
         * @param src_y y position in `window`
         * @param dest_x x position in `drawable`
         * @param dest_y y position in `drawable`
         * @param width width of redirection, or -1 to use the width of `window`
         * @param height height of redirection or -1 to use the height of `window`
         * @since 2.14
         */
        redirect_to_drawable(drawable: Drawable, src_x: number, src_y: number, dest_x: number, dest_y: number, width: number, height: number): void;

        register_dnd(): void;

        /**
         * Removes any active redirection started by
         * `gdk_window_redirect_to_drawable()`.
         * @since 2.14
         */
        remove_redirection(): void;

        /**
         * Reparents `window` into the given `new_parent`. The window being
         * reparented will be unmapped as a side effect.
         * @param new_parent new parent to move `window` into
         * @param x X location inside the new parent
         * @param y Y location inside the new parent
         */
        reparent(new_parent: Window, x: number, y: number): void;

        /**
         * Resizes `window`; for toplevel windows, asks the window manager to resize
         * the window. The window manager may not allow the resize. When using GTK+,
         * use `gtk_window_resize()` instead of this low-level GDK function.
         * 
         * Windows may not be resized below 1x1.
         * 
         * If you're also planning to move the window, use `gdk_window_move_resize()`
         * to both move and resize simultaneously, for a nicer visual effect.
         * @param width new width of the window
         * @param height new height of the window
         */
        resize(width: number, height: number): void;

        /**
         * Changes the position of  `window` in the Z-order (stacking order), so that
         * it is above `sibling` (if `above` is `true`) or below `sibling` (if `above` is
         * `false`).
         * 
         * If `sibling` is `null`, then this either raises (if `above` is `true`) or
         * lowers the window.
         * 
         * If `window` is a toplevel, the window manager may choose to deny the
         * request to move the window in the Z-order, `gdk_window_restack()` only
         * requests the restack, does not guarantee it.
         * @param sibling a {@link Gdk.Window} that is a sibling of `window`, or `null`
         * @param above a boolean
         * @since 2.18
         */
        restack(sibling: Window | null, above: boolean): void;

        /**
         * Scroll the contents of `window`, both pixels and children, by the
         * given amount. `window` itself does not move. Portions of the window
         * that the scroll operation brings in from offscreen areas are
         * invalidated. The invalidated region may be bigger than what would
         * strictly be necessary.
         * 
         * For X11, a minimum area will be invalidated if the window has no
         * subwindows, or if the edges of the window's parent do not extend
         * beyond the edges of the window. In other cases, a multi-step process
         * is used to scroll the window which may produce temporary visual
         * artifacts and unnecessary invalidations.
         * @param dx Amount to scroll in the X direction
         * @param dy Amount to scroll in the Y direction
         */
        scroll(dx: number, dy: number): void;

        /**
         * Setting `accept_focus` to `false` hints the desktop environment that the
         * window doesn't want to receive input focus.
         * 
         * On X, it is the responsibility of the window manager to interpret this
         * hint. ICCCM-compliant window manager usually respect it.
         * @param accept_focus `true` if the window should receive input focus
         * @since 2.4
         */
        set_accept_focus(accept_focus: boolean): void;

        /**
         * Sets the background pixmap of `window`. May also be used to set a
         * background of "None" on `window`, by setting a background pixmap
         * of `null`.
         * 
         * A background pixmap will be tiled, positioning the first tile at
         * the origin of `window`, or if `parent_relative` is `true`, the tiling
         * will be done based on the origin of the parent window (useful to
         * align tiles in a parent with tiles in a child).
         * 
         * A background pixmap of `null` means that the window will have no
         * background.  A window with no background will never have its
         * background filled by the windowing system, instead the window will
         * contain whatever pixels were already in the corresponding area of
         * the display.
         * 
         * The windowing system will normally fill a window with its background
         * when the window is obscured then exposed, and when you call
         * `gdk_window_clear()`.
         * @param pixmap a {@link Gdk.Pixmap}, or `null`
         * @param parent_relative whether the tiling origin is at the origin of   `window`'s parent
         */
        set_back_pixmap(pixmap: Pixmap | null, parent_relative: boolean): void;

        /**
         * Sets the background color of `window`. (However, when using GTK+,
         * set the background of a widget with `gtk_widget_modify_bg()` - if
         * you're an application - or `gtk_style_set_background()` - if you're
         * implementing a custom widget.)
         * 
         * The `color` must be allocated; `gdk_rgb_find_color()` is the best way
         * to allocate a color.
         * 
         * See also `gdk_window_set_back_pixmap()`.
         * @param color an allocated {@link Gdk.Color}
         */
        set_background(color: Color): void;

        /**
         * Sets the input shape mask of `window` to the union of input shape masks
         * for all children of `window`, ignoring the input shape mask of `window`
         * itself. Contrast with `gdk_window_merge_child_input_shapes()` which includes
         * the input shape mask of `window` in the masks to be merged.
         * @since 2.10
         */
        set_child_input_shapes(): void;

        /**
         * Sets the shape mask of `window` to the union of shape masks
         * for all children of `window`, ignoring the shape mask of `window`
         * itself. Contrast with `gdk_window_merge_child_shapes()` which includes
         * the shape mask of `window` in the masks to be merged.
         */
        set_child_shapes(): void;

        /**
         * Sets a {@link Gdk.Window} as composited, or unsets it. Composited
         * windows do not automatically have their contents drawn to
         * the screen. Drawing is redirected to an offscreen buffer
         * and an expose event is emitted on the parent of the composited
         * window. It is the responsibility of the parent's expose handler
         * to manually merge the off-screen content onto the screen in
         * whatever way it sees fit. See <xref linkend="composited-window-example"/>
         * for an example.
         * 
         * It only makes sense for child windows to be composited; see
         * `gdk_window_set_opacity()` if you need translucent toplevel
         * windows.
         * 
         * An additional effect of this call is that the area of this
         * window is no longer clipped from regions marked for
         * invalidation on its parent. Draws done on the parent
         * window are also no longer clipped by the child.
         * 
         * This call is only supported on some systems (currently,
         * only X11 with new enough Xcomposite and Xdamage extensions).
         * You must call `gdk_display_supports_composite()` to check if
         * setting a window as composited is supported before
         * attempting to do so.
         * @param composited `true` to set the window as composited
         * @since 2.12
         */
        set_composited(composited: boolean): void;

        /**
         * Sets the mouse pointer for a {@link Gdk.Window}. Use `gdk_cursor_new_for_display()`
         * or `gdk_cursor_new_from_pixmap()` to create the cursor. To make the cursor
         * invisible, use {@link Gdk.CursorType.BLANK_CURSOR}. Passing `null` for the `cursor` argument
         * to `gdk_window_set_cursor()` means that `window` will use the cursor of its
         * parent window. Most windows should use this default.
         * @param cursor a cursor
         */
        set_cursor(cursor: Cursor | null): void;

        /**
         * "Decorations" are the features the window manager adds to a toplevel {@link Gdk.Window}.
         * This function sets the traditional Motif window manager hints that tell the
         * window manager which decorations you would like your window to have.
         * Usually you should use `gtk_window_set_decorated()` on a `GtkWindow` instead of
         * using the GDK function directly.
         * 
         * The `decorations` argument is the logical OR of the fields in
         * the {@link Gdk.WMDecoration} enumeration. If #GDK_DECOR_ALL is included in the
         * mask, the other bits indicate which decorations should be turned off.
         * If #GDK_DECOR_ALL is not included, then the other bits indicate
         * which decorations should be turned on.
         * 
         * Most window managers honor a decorations hint of 0 to disable all decorations,
         * but very few honor all possible combinations of bits.
         * @param decorations decoration hint mask
         */
        set_decorations(decorations: WMDecoration): void;

        /**
         * The event mask for a window determines which events will be reported
         * for that window. For example, an event mask including #GDK_BUTTON_PRESS_MASK
         * means the window should report button press events. The event mask
         * is the bitwise OR of values from the {@link Gdk.EventMask} enumeration.
         * @param event_mask event mask for `window`
         */
        set_events(event_mask: EventMask): void;

        /**
         * Setting `focus_on_map` to `false` hints the desktop environment that the
         * window doesn't want to receive input focus when it is mapped.
         * focus_on_map should be turned off for windows that aren't triggered
         * interactively (such as popups from network activity).
         * 
         * On X, it is the responsibility of the window manager to interpret
         * this hint. Window managers following the freedesktop.org window
         * manager extension specification should respect it.
         * @param focus_on_map `true` if the window should receive input focus when mapped
         * @since 2.6
         */
        set_focus_on_map(focus_on_map: boolean): void;

        /**
         * Sets hints about the window management functions to make available
         * via buttons on the window frame.
         * 
         * On the X backend, this function sets the traditional Motif window
         * manager hint for this purpose. However, few window managers do
         * anything reliable or interesting with this hint. Many ignore it
         * entirely.
         * 
         * The `functions` argument is the logical OR of values from the
         * {@link Gdk.WMFunction} enumeration. If the bitmask includes #GDK_FUNC_ALL,
         * then the other bits indicate which functions to disable; if
         * it doesn't include #GDK_FUNC_ALL, it indicates which functions to
         * enable.
         * @param functions bitmask of operations to allow on `window`
         */
        set_functions(functions: WMFunction): void;

        /**
         * Sets the geometry hints for `window`. Hints flagged in `geom_mask`
         * are set, hints not flagged in `geom_mask` are unset.
         * To unset all hints, use a `geom_mask` of 0 and a `geometry` of `null`.
         * 
         * This function provides hints to the windowing system about
         * acceptable sizes for a toplevel window. The purpose of
         * this is to constrain user resizing, but the windowing system
         * will typically  (but is not required to) also constrain the
         * current size of the window to the provided values and
         * constrain programatic resizing via `gdk_window_resize()` or
         * `gdk_window_move_resize()`.
         * 
         * Note that on X11, this effect has no effect on windows
         * of type {@link Gdk.WindowType.TEMP} or windows where override redirect
         * has been turned on via `gdk_window_set_override_redirect()`
         * since these windows are not resizable by the user.
         * 
         * Since you can't count on the windowing system doing the
         * constraints for programmatic resizes, you should generally
         * call `gdk_window_constrain_size()` yourself to determine
         * appropriate sizes.
         * @param geometry geometry hints
         * @param geom_mask bitmask indicating fields of `geometry` to pay attention to
         */
        set_geometry_hints(geometry: Geometry, geom_mask: WindowHints): void;

        /**
         * Sets the group leader window for `window`. By default,
         * GDK sets the group leader for all toplevel windows
         * to a global window implicitly created by GDK. With this function
         * you can override this default.
         * 
         * The group leader window allows the window manager to distinguish
         * all windows that belong to a single application. It may for example
         * allow users to minimize/unminimize all windows belonging to an
         * application at once. You should only set a non-default group window
         * if your application pretends to be multiple applications.
         * @param leader group leader window, or `null` to restore the default group leader window
         */
        set_group(leader: Window): void;

        /**
         * This function is broken and useless and you should ignore it.
         * If using GTK+, use functions such as `gtk_window_resize()`, `gtk_window_set_size_request()`,
         * `gtk_window_move()`, `gtk_window_parse_geometry()`, and `gtk_window_set_geometry_hints()`,
         * depending on what you're trying to do.
         * 
         * If using GDK directly, use `gdk_window_set_geometry_hints()`.
         * @param x ignored field, does not matter
         * @param y ignored field, does not matter
         * @param min_width minimum width hint
         * @param min_height minimum height hint
         * @param max_width max width hint
         * @param max_height max height hint
         * @param flags logical OR of GDK_HINT_POS, GDK_HINT_MIN_SIZE, and/or GDK_HINT_MAX_SIZE
         */
        set_hints(x: number, y: number, min_width: number, min_height: number, max_width: number, max_height: number, flags: number): void;

        /**
         * Sets the icon of `window` as a pixmap or window. If using GTK+, investigate
         * `gtk_window_set_default_icon_list()` first, and then `gtk_window_set_icon_list()`
         * and `gtk_window_set_icon()`. If those don't meet your needs, look at
         * `gdk_window_set_icon_list()`. Only if all those are too high-level do you
         * want to fall back to `gdk_window_set_icon()`.
         * @param icon_window a {@link Gdk.Window} to use for the icon, or `null` to unset
         * @param pixmap a {@link Gdk.Pixmap} to use as the icon, or `null` to unset
         * @param mask a 1-bit pixmap ({@link Gdk.Bitmap}) to use as mask for `pixmap`, or `null` to have none
         */
        set_icon(icon_window: Window, pixmap: Pixmap, mask: Bitmap): void;

        /**
         * Sets a list of icons for the window. One of these will be used
         * to represent the window when it has been iconified. The icon is
         * usually shown in an icon box or some sort of task bar. Which icon
         * size is shown depends on the window manager. The window manager
         * can scale the icon  but setting several size icons can give better
         * image quality since the window manager may only need to scale the
         * icon by a small amount or not at all.
         * @param pixbufs A list of pixbufs, of different sizes.
         */
        set_icon_list(pixbufs: GdkPixbuf.Pixbuf[]): void;

        /**
         * Windows may have a name used while minimized, distinct from the
         * name they display in their titlebar. Most of the time this is a bad
         * idea from a user interface standpoint. But you can set such a name
         * with this function, if you like.
         * 
         * After calling this with a non-`null` `name`, calls to `gdk_window_set_title()`
         * will not update the icon title.
         * 
         * Using `null` for `name` unsets the icon title; further calls to
         * `gdk_window_set_title()` will again update the icon title as well.
         * @param name name of window while iconified (minimized)
         */
        set_icon_name(name: string): void;

        /**
         * Set if `window` must be kept above other windows. If the
         * window was already above, then this function does nothing.
         * 
         * On X11, asks the window manager to keep `window` above, if the window
         * manager supports this operation. Not all window managers support
         * this, and some deliberately ignore it or don't have a concept of
         * "keep above"; so you can't rely on the window being kept above.
         * But it will happen with most standard window managers,
         * and GDK makes a best effort to get it to happen.
         * @param setting whether to keep `window` above other windows
         * @since 2.4
         */
        set_keep_above(setting: boolean): void;

        /**
         * Set if `window` must be kept below other windows. If the
         * window was already below, then this function does nothing.
         * 
         * On X11, asks the window manager to keep `window` below, if the window
         * manager supports this operation. Not all window managers support
         * this, and some deliberately ignore it or don't have a concept of
         * "keep below"; so you can't rely on the window being kept below.
         * But it will happen with most standard window managers,
         * and GDK makes a best effort to get it to happen.
         * @param setting whether to keep `window` below other windows
         * @since 2.4
         */
        set_keep_below(setting: boolean): void;

        /**
         * The application can use this hint to tell the window manager
         * that a certain window has modal behaviour. The window manager
         * can use this information to handle modal windows in a special
         * way.
         * 
         * You should only use this on windows for which you have
         * previously called `gdk_window_set_transient_for()`
         * @param modal `true` if the window is modal, `false` otherwise.
         */
        set_modal_hint(modal: boolean): void;

        /**
         * Request the windowing system to make `window` partially transparent,
         * with opacity 0 being fully transparent and 1 fully opaque. (Values
         * of the opacity parameter are clamped to the [0,1] range.)
         * 
         * On X11, this works only on X screens with a compositing manager
         * running.
         * 
         * For setting up per-pixel alpha, see `gdk_screen_get_rgba_colormap()`.
         * For making non-toplevel windows translucent, see
         * `gdk_window_set_composited()`.
         * @param opacity opacity
         * @since 2.12
         */
        set_opacity(opacity: number): void;

        /**
         * An override redirect window is not under the control of the window manager.
         * This means it won't have a titlebar, won't be minimizable, etc. - it will
         * be entirely under the control of the application. The window manager
         * can't see the override redirect window at all.
         * 
         * Override redirect should only be used for short-lived temporary
         * windows, such as popup menus. `GtkMenu` uses an override redirect
         * window in its implementation, for example.
         * @param override_redirect `true` if window should be override redirect
         */
        set_override_redirect(override_redirect: boolean): void;

        /**
         * When using GTK+, typically you should use `gtk_window_set_role()` instead
         * of this low-level function.
         * 
         * The window manager and session manager use a window's role to
         * distinguish it from other kinds of window in the same application.
         * When an application is restarted after being saved in a previous
         * session, all windows with the same title and role are treated as
         * interchangeable.  So if you have two windows with the same title
         * that should be distinguished for session management purposes, you
         * should set the role on those windows. It doesn't matter what string
         * you use for the role, as long as you have a different role for each
         * non-interchangeable kind of window.
         * @param role a string indicating its role
         */
        set_role(role: string): void;

        /**
         * Toggles whether a window should appear in a pager (workspace
         * switcher, or other desktop utility program that displays a small
         * thumbnail representation of the windows on the desktop). If a
         * window's semantic type as specified with `gdk_window_set_type_hint()`
         * already fully describes the window, this function should
         * <emphasis>not</emphasis> be called in addition, instead you should
         * allow the window to be treated according to standard policy for
         * its semantic type.
         * @param skips_pager `true` to skip the pager
         * @since 2.2
         */
        set_skip_pager_hint(skips_pager: boolean): void;

        /**
         * Toggles whether a window should appear in a task list or window
         * list. If a window's semantic type as specified with
         * `gdk_window_set_type_hint()` already fully describes the window, this
         * function should <emphasis>not</emphasis> be called in addition,
         * instead you should allow the window to be treated according to
         * standard policy for its semantic type.
         * @param skips_taskbar `true` to skip the taskbar
         * @since 2.2
         */
        set_skip_taskbar_hint(skips_taskbar: boolean): void;

        /**
         * When using GTK+, typically you should use `gtk_window_set_startup_id()`
         * instead of this low-level function.
         * @param startup_id a string with startup-notification identifier
         * @since 2.12
         */
        set_startup_id(startup_id: string): void;

        /**
         * Set the bit gravity of the given window to static, and flag it so
         * all children get static subwindow gravity. This is used if you are
         * implementing scary features that involve deep knowledge of the
         * windowing system. Don't worry about it unless you have to.
         * @param use_static `true` to turn on static gravity
         * @returns `true` if the server supports static gravity
         */
        set_static_gravities(use_static: boolean): boolean;

        /**
         * Sets the title of a toplevel window, to be displayed in the titlebar.
         * If you haven't explicitly set the icon name for the window
         * (using `gdk_window_set_icon_name()`), the icon name will be set to
         * `title` as well. `title` must be in UTF-8 encoding (as with all
         * user-readable strings in GDK/GTK+). `title` may not be `null`.
         * @param title title of `window`
         */
        set_title(title: string): void;

        /**
         * Indicates to the window manager that `window` is a transient dialog
         * associated with the application window `parent`. This allows the
         * window manager to do things like center `window` on `parent` and
         * keep `window` above `parent`.
         * 
         * See `gtk_window_set_transient_for()` if you're using `GtkWindow` or
         * `GtkDialog`.
         * @param parent another toplevel {@link Gdk.Window}
         */
        set_transient_for(parent: Window): void;

        /**
         * The application can use this call to provide a hint to the window
         * manager about the functionality of a window. The window manager
         * can use this information when determining the decoration and behaviour
         * of the window.
         * 
         * The hint must be set before the window is mapped.
         * @param hint A hint of the function this window will have
         */
        set_type_hint(hint: WindowTypeHint): void;

        /**
         * Toggles whether a window needs the user's
         * urgent attention.
         * @param urgent `true` if the window is urgent
         * @since 2.8
         */
        set_urgency_hint(urgent: boolean): void;

        /**
         * For most purposes this function is deprecated in favor of
         * `g_object_set_data()`. However, for historical reasons GTK+ stores
         * the `GtkWidget` that owns a {@link Gdk.Window} as user data on the
         * {@link Gdk.Window}. So, custom widget implementations should use
         * this function for that. If GTK+ receives an event for a {@link Gdk.Window},
         * and the user data for the window is non-`null`, GTK+ will assume the
         * user data is a `GtkWidget`, and forward the event to that widget.
         * @param user_data user data
         */
        set_user_data(user_data: null): void;

        /**
         * Applies a shape mask to `window`. Pixels in `window` corresponding to
         * set bits in the `mask` will be visible; pixels in `window`
         * corresponding to unset bits in the `mask` will be transparent. This
         * gives a non-rectangular window.
         * 
         * If `mask` is `null`, the shape mask will be unset, and the `x`/`y`
         * parameters are not used.
         * 
         * On the X11 platform, this uses an X server extension which is
         * widely available on most common platforms, but not available on
         * very old X servers, and occasionally the implementation will be
         * buggy. On servers without the shape extension, this function
         * will do nothing.
         * 
         * This function works on both toplevel and child windows.
         * @param mask shape mask
         * @param x X position of shape mask with respect to `window`
         * @param y Y position of shape mask with respect to `window`
         */
        shape_combine_mask(mask: Bitmap, x: number, y: number): void;

        /**
         * Makes pixels in `window` outside `shape_region` be transparent,
         * so that the window may be nonrectangular. See also
         * `gdk_window_shape_combine_mask()` to use a bitmap as the mask.
         * 
         * If `shape_region` is `null`, the shape will be unset, so the whole
         * window will be opaque again. `offset_x` and `offset_y` are ignored
         * if `shape_region` is `null`.
         * 
         * On the X11 platform, this uses an X server extension which is
         * widely available on most common platforms, but not available on
         * very old X servers, and occasionally the implementation will be
         * buggy. On servers without the shape extension, this function
         * will do nothing.
         * 
         * This function works on both toplevel and child windows.
         * @param shape_region region of window to be non-transparent
         * @param offset_x X position of `shape_region` in `window` coordinates
         * @param offset_y Y position of `shape_region` in `window` coordinates
         */
        shape_combine_region(shape_region: Region, offset_x: number, offset_y: number): void;

        /**
         * Like `gdk_window_show_unraised()`, but also raises the window to the
         * top of the window stack (moves the window to the front of the
         * Z-order).
         * 
         * This function maps a window so it's visible onscreen. Its opposite
         * is `gdk_window_hide()`.
         * 
         * When implementing a `GtkWidget`, you should call this function on the widget's
         * {@link Gdk.Window} as part of the "map" method.
         */
        show(): void;

        /**
         * Shows a {@link Gdk.Window} onscreen, but does not modify its stacking
         * order. In contrast, `gdk_window_show()` will raise the window
         * to the top of the window stack.
         * 
         * On the X11 platform, in Xlib terms, this function calls
         * XMapWindow() (it also updates some internal GDK state, which means
         * that you can't really use XMapWindow() directly on a GDK window).
         */
        show_unraised(): void;

        /**
         * "Pins" a window such that it's on all workspaces and does not scroll
         * with viewports, for window managers that have scrollable viewports.
         * (When using `GtkWindow`, `gtk_window_stick()` may be more useful.)
         * 
         * On the X11 platform, this function depends on window manager
         * support, so may have no effect with many window managers. However,
         * GDK will do the best it can to convince the window manager to stick
         * the window. For window managers that don't support this operation,
         * there's nothing you can do to force it to happen.
         */
        stick(): void;

        /**
         * Thaws a window frozen with
         * `gdk_window_freeze_toplevel_updates_libgtk_only()`.
         * 
         * This function is not part of the GDK public API and is only
         * for use by GTK+.
         */
        thaw_toplevel_updates_libgtk_only(): void;

        /**
         * Thaws a window frozen with `gdk_window_freeze_updates()`.
         */
        thaw_updates(): void;

        /**
         * Moves the window out of fullscreen mode. If the window was not
         * fullscreen, does nothing.
         * 
         * On X11, asks the window manager to move `window` out of the fullscreen
         * state, if the window manager supports this operation. Not all
         * window managers support this, and some deliberately ignore it or
         * don't have a concept of "fullscreen"; so you can't rely on the
         * unfullscreenification actually happening. But it will happen with
         * most standard window managers, and GDK makes a best effort to get
         * it to happen.
         * @since 2.2
         */
        unfullscreen(): void;

        /**
         * Unmaximizes the window. If the window wasn't maximized, then this
         * function does nothing.
         * 
         * On X11, asks the window manager to unmaximize `window`, if the
         * window manager supports this operation. Not all window managers
         * support this, and some deliberately ignore it or don't have a
         * concept of "maximized"; so you can't rely on the unmaximization
         * actually happening. But it will happen with most standard window
         * managers, and GDK makes a best effort to get it to happen.
         * 
         * On Windows, reliably unmaximizes the window.
         */
        unmaximize(): void;

        /**
         * Reverse operation for `gdk_window_stick()`; see `gdk_window_stick()`,
         * and `gtk_window_unstick()`.
         */
        unstick(): void;

        /**
         * Withdraws a window (unmaps it and asks the window manager to forget about it).
         * This function is not really useful as `gdk_window_hide()` automatically
         * withdraws toplevel windows before hiding them.
         */
        withdraw(): void;
    }


    /**
     * @gir-type Alias
     */
    type AppLaunchContextClass = typeof AppLaunchContext;

    /**
     * @gir-type Struct
     */
    abstract class AppLaunchContextPrivate {
        static $gtype: GObject.GType<AppLaunchContextPrivate>;
    }


    /**
     * @gir-type Struct
     */
    abstract class Atom {
        static $gtype: GObject.GType<Atom>;

        // Methods
        name(): string;
    }


    /**
     * @gir-type Struct
     */
    class Bitmap {
        static $gtype: GObject.GType<Bitmap>;
    }


    /**
     * @gir-type Struct
     */
    class Color {
        static $gtype: GObject.GType<Color>;

        // Fields
        pixel: number;

        red: number;

        green: number;

        blue: number;

        // Constructors

        constructor(properties?: Partial<{
            pixel: number;
            red: number;
            green: number;
            blue: number;
        }>);

        // Static methods
        /**
         * Allocates a single color from a colormap.
         * @param colormap a {@link Gdk.Colormap}.
         * @param color The color to allocate. On return, the    <structfield>pixel</structfield> field will be filled in.
         * @deprecated since 2.2: Use `gdk_colormap_alloc_color()` instead.
         */
        static alloc(colormap: Colormap, color: Color): number;

        /**
         * Returns the black color for a given colormap. The resulting
         * value has already been allocated.
         * @param colormap a {@link Gdk.Colormap}.
         * @param color the location to store the color.
         */
        static black(colormap: Colormap, color: Color): number;

        /**
         * Changes the value of a color that has already
         * been allocated. If `colormap` is not a private
         * colormap, then the color must have been allocated
         * using `gdk_colormap_alloc_colors()` with the
         * `writeable` set to `true`.
         * @param colormap a {@link Gdk.Colormap}.
         * @param color a {@link Gdk.Color}, with the color to change in the <structfield>pixel</structfield> field, and the new value in the remaining fields.
         */
        static change(colormap: Colormap, color: Color): number;

        /**
         * Parses a textual specification of a color and fill in the
         * <structfield>red</structfield>, <structfield>green</structfield>,
         * and <structfield>blue</structfield> fields of a {@link Gdk.Color}
         * structure. The color is <emphasis>not</emphasis> allocated, you
         * must call `gdk_colormap_alloc_color()` yourself. The string can
         * either one of a large set of standard names. (Taken from the X11
         * <filename>rgb.txt</filename> file), or it can be a hex value in the
         * form '&num;rgb' '&num;rrggbb' '&num;rrrgggbbb' or
         * '&num;rrrrggggbbbb' where 'r', 'g' and 'b' are hex digits of the
         * red, green, and blue components of the color, respectively. (White
         * in the four forms is '&num;fff' '&num;ffffff' '&num;fffffffff' and
         * '&num;ffffffffffff')
         * @param spec the string specifying the color.
         */
        static parse(spec: string): [boolean, Color];

        /**
         * Returns the white color for a given colormap. The resulting
         * value has already allocated been allocated.
         * @param colormap a {@link Gdk.Colormap}.
         * @param color the location to store the color.
         */
        static white(colormap: Colormap, color: Color): number;

        // Methods
        /**
         * Makes a copy of a color structure. The result
         * must be freed using `gdk_color_free()`.
         * @returns a copy of `color`.
         */
        copy(): Color;

        /**
         * Compares two colors.
         * @param colorb another {@link Gdk.Color}.
         * @returns `true` if the two colors compare equal
         */
        equal(colorb: Color): boolean;

        /**
         * Frees a color structure created with
         * `gdk_color_copy()`.
         */
        free(): void;

        /**
         * A hash function suitable for using for a hash
         * table that stores {@link Gdk.Color}'s.
         * @returns The hash function applied to `colora`
         */
        hash(): number;

        /**
         * Returns a textual specification of `color` in the hexadecimal form
         * <literal>&num;rrrrggggbbbb</literal>, where <literal>r</literal>,
         * <literal>g</literal> and <literal>b</literal> are hex digits
         * representing the red, green and blue components respectively.
         * @returns a newly-allocated text string
         * @since 2.12
         */
        to_string(): string;
    }


    /**
     * @gir-type Alias
     */
    type ColormapClass = typeof Colormap;

    /**
     * @gir-type Struct
     */
    class Cursor {
        static $gtype: GObject.GType<Cursor>;

        // Fields
        type: CursorType;

        // Constructors
        constructor(cursor_type: CursorType);

        static ["new"](cursor_type: CursorType): Cursor;

        static new_for_display(display: Display, cursor_type: CursorType): Cursor;

        static new_from_name(display: Display, name: string): Cursor;

        static new_from_pixbuf(display: Display, pixbuf: GdkPixbuf.Pixbuf, x: number, y: number): Cursor;

        static new_from_pixmap(source: Pixmap, mask: Pixmap, fg: Color, bg: Color, x: number, y: number): Cursor;

        // Methods
        /**
         * Returns the cursor type for this cursor.
         * @returns a {@link Gdk.CursorType}
         * @since 2.22
         */
        get_cursor_type(): CursorType;

        /**
         * Adds a reference to `cursor`.
         * @returns Same `cursor` that was passed in
         */
        ref(): Cursor;

        /**
         * Removes a reference from `cursor`, deallocating the cursor
         * if no references remain.
         */
        unref(): void;
    }


    /**
     * @gir-type Struct
     */
    class DeviceAxis {
        static $gtype: GObject.GType<DeviceAxis>;

        // Fields
        use: AxisUse;

        min: number;

        max: number;
    }


    /**
     * @gir-type Alias
     */
    type DeviceClass = typeof Device;

    /**
     * @gir-type Struct
     */
    class DeviceKey {
        static $gtype: GObject.GType<DeviceKey>;

        // Fields
        keyval: number;

        modifiers: ModifierType;
    }


    /**
     * @gir-type Alias
     */
    type DisplayClass = typeof Display;

    /**
     * @gir-type Alias
     */
    type DisplayManagerClass = typeof DisplayManager;

    /**
     * @gir-type Struct
     */
    class DisplayPointerHooks {
        static $gtype: GObject.GType<DisplayPointerHooks>;
    }


    /**
     * @gir-type Alias
     */
    type DragContextClass = typeof DragContext;

    /**
     * @gir-type Alias
     */
    type DrawableClass = typeof Drawable;

    /**
     * @gir-type Struct
     */
    class EventAny {
        static $gtype: GObject.GType<EventAny>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;
    }


    /**
     * @gir-type Struct
     */
    class EventButton {
        static $gtype: GObject.GType<EventButton>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        time: number;

        x: number;

        y: number;

        axes: number;

        state: number;

        button: number;

        device: Device;

        x_root: number;

        y_root: number;
    }


    /**
     * @gir-type Struct
     */
    class EventClient {
        static $gtype: GObject.GType<EventClient>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        data_format: number;
    }


    /**
     * @gir-type Struct
     */
    class EventConfigure {
        static $gtype: GObject.GType<EventConfigure>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        x: number;

        y: number;

        width: number;

        height: number;
    }


    /**
     * @gir-type Struct
     */
    class EventCrossing {
        static $gtype: GObject.GType<EventCrossing>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        subwindow: Window;

        time: number;

        x: number;

        y: number;

        x_root: number;

        y_root: number;

        mode: CrossingMode;

        detail: NotifyType;

        focus: boolean;

        state: number;
    }


    /**
     * @gir-type Struct
     */
    class EventDND {
        static $gtype: GObject.GType<EventDND>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        context: DragContext;

        time: number;

        x_root: number;

        y_root: number;
    }


    /**
     * @gir-type Struct
     */
    class EventExpose {
        static $gtype: GObject.GType<EventExpose>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        area: Rectangle;

        count: number;
    }


    /**
     * @gir-type Struct
     */
    class EventFocus {
        static $gtype: GObject.GType<EventFocus>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        "in": number;
    }


    /**
     * @gir-type Struct
     */
    class EventGrabBroken {
        static $gtype: GObject.GType<EventGrabBroken>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        keyboard: boolean;

        implicit: boolean;

        grab_window: Window;
    }


    /**
     * @gir-type Struct
     */
    class EventKey {
        static $gtype: GObject.GType<EventKey>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        time: number;

        state: number;

        keyval: number;

        length: number;

        string: string;

        hardware_keycode: number;

        group: number;

        is_modifier: number;
    }


    /**
     * @gir-type Struct
     */
    class EventMotion {
        static $gtype: GObject.GType<EventMotion>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        time: number;

        x: number;

        y: number;

        axes: number;

        state: number;

        is_hint: number;

        device: Device;

        x_root: number;

        y_root: number;
    }


    /**
     * @gir-type Struct
     */
    class EventNoExpose {
        static $gtype: GObject.GType<EventNoExpose>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;
    }


    /**
     * @gir-type Struct
     */
    class EventOwnerChange {
        static $gtype: GObject.GType<EventOwnerChange>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        owner: NativeWindow;

        reason: OwnerChange;

        time: number;

        selection_time: number;
    }


    /**
     * @gir-type Struct
     */
    class EventProperty {
        static $gtype: GObject.GType<EventProperty>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        time: number;

        state: number;
    }


    /**
     * @gir-type Struct
     */
    class EventProximity {
        static $gtype: GObject.GType<EventProximity>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        time: number;

        device: Device;
    }


    /**
     * @gir-type Struct
     */
    class EventScroll {
        static $gtype: GObject.GType<EventScroll>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        time: number;

        x: number;

        y: number;

        state: number;

        direction: ScrollDirection;

        device: Device;

        x_root: number;

        y_root: number;
    }


    /**
     * @gir-type Struct
     */
    class EventSelection {
        static $gtype: GObject.GType<EventSelection>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        time: number;

        requestor: NativeWindow;
    }


    /**
     * @gir-type Struct
     */
    class EventSetting {
        static $gtype: GObject.GType<EventSetting>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        action: SettingAction;

        name: string;
    }


    /**
     * @gir-type Struct
     */
    class EventVisibility {
        static $gtype: GObject.GType<EventVisibility>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        state: VisibilityState;
    }


    /**
     * @gir-type Struct
     */
    class EventWindowState {
        static $gtype: GObject.GType<EventWindowState>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        changed_mask: WindowState;

        new_window_state: WindowState;
    }


    /**
     * @gir-type Struct
     */
    class Font {
        static $gtype: GObject.GType<Font>;

        // Fields
        type: FontType;

        ascent: number;

        descent: number;

        // Static methods
        /**
         * Load a {@link Gdk.Font} based on a Pango font description. This font will
         * only be an approximation of the Pango font, and
         * internationalization will not be handled correctly. This function
         * should only be used for legacy code that cannot be easily converted
         * to use Pango. Using Pango directly will produce better results.
         * @param font_desc a {@link Pango.FontDescription}.
         */
        static from_description(font_desc: Pango.FontDescription): Font;

        /**
         * @param display 
         * @param font_desc 
         */
        static from_description_for_display(display: Display, font_desc: Pango.FontDescription): Font;

        /**
         * Loads a font.
         * 
         * The font may be newly loaded or looked up the font in a cache.
         * You should make no assumptions about the initial reference count.
         * @param font_name a XLFD describing the font to load.
         */
        static load(font_name: string): Font;

        /**
         * @param display 
         * @param font_name 
         */
        static load_for_display(display: Display, font_name: string): Font;

        // Methods
        /**
         * @param fontb 
         */
        equal(fontb: Font): boolean;

        id(): number;

        /**
         * Increases the reference count of a font by one.
         * @returns `font`
         */
        ref(): Font;

        /**
         * Decreases the reference count of a font by one.
         * If the result is zero, destroys the font.
         */
        unref(): void;
    }


    /**
     * @gir-type Alias
     */
    type GCClass = typeof GC;

    /**
     * @gir-type Struct
     */
    class GCValues {
        static $gtype: GObject.GType<GCValues>;

        // Fields
        foreground: Color;

        background: Color;

        "function": Function;

        fill: Fill;

        tile: Pixmap;

        stipple: Pixmap;

        clip_mask: Pixmap;

        subwindow_mode: SubwindowMode;

        ts_x_origin: number;

        ts_y_origin: number;

        clip_x_origin: number;

        clip_y_origin: number;

        graphics_exposures: number;

        line_width: number;

        line_style: LineStyle;

        cap_style: CapStyle;

        join_style: JoinStyle;
    }


    /**
     * @gir-type Struct
     */
    class Geometry {
        static $gtype: GObject.GType<Geometry>;

        // Fields
        min_width: number;

        min_height: number;

        max_width: number;

        max_height: number;

        base_width: number;

        base_height: number;

        width_inc: number;

        height_inc: number;

        min_aspect: number;

        max_aspect: number;

        win_gravity: Gravity;
    }


    /**
     * @gir-type Alias
     */
    type ImageClass = typeof Image;

    /**
     * @gir-type Struct
     */
    class KeyboardGrabInfo {
        static $gtype: GObject.GType<KeyboardGrabInfo>;

        // Fields
        window: Window;

        native_window: Window;

        serial: number;

        owner_events: boolean;

        time: number;

        // Static methods
        /**
         * Determines information about the current keyboard grab.
         * This is not public API and must not be used by applications.
         * @param display the display for which to get the grab information
         * @param grab_window location to store current grab window
         * @param owner_events location to store boolean indicating whether   the `owner_events` flag to `gdk_keyboard_grab()` was `true`.
         */
        static libgtk_only(display: Display, grab_window: Window, owner_events: boolean): boolean;
    }


    /**
     * @gir-type Alias
     */
    type KeymapClass = typeof Keymap;

    /**
     * @gir-type Struct
     */
    class KeymapKey {
        static $gtype: GObject.GType<KeymapKey>;

        // Fields
        keycode: number;

        group: number;

        level: number;

        // Constructors

        constructor(properties?: Partial<{
            keycode: number;
            group: number;
            level: number;
        }>);
    }


    /**
     * @gir-type Struct
     */
    class PangoAttrEmbossColor {
        static $gtype: GObject.GType<PangoAttrEmbossColor>;

        // Fields
        color: Pango.Color;

        // Static methods
        /**
         * Creates a new attribute specifying the color to emboss text with.
         * @param color a GdkColor representing the color to emboss with
         * @since 2.12
         */
        static ["new"](color: Color): Pango.Attribute;
    }


    /**
     * @gir-type Struct
     */
    class PangoAttrEmbossed {
        static $gtype: GObject.GType<PangoAttrEmbossed>;

        // Fields
        embossed: boolean;

        // Static methods
        /**
         * Creates a new attribute flagging a region as embossed or not.
         * @param embossed if the region should be embossed
         */
        static ["new"](embossed: boolean): Pango.Attribute;
    }


    /**
     * @gir-type Struct
     */
    class PangoAttrStipple {
        static $gtype: GObject.GType<PangoAttrStipple>;

        // Static methods
        /**
         * Creates a new attribute containing a stipple bitmap to be used when
         * rendering the text.
         * @param stipple a bitmap to be set as stipple
         */
        static ["new"](stipple: Bitmap): Pango.Attribute;
    }


    /**
     * @gir-type Alias
     */
    type PangoRendererClass = typeof PangoRenderer;

    /**
     * @gir-type Struct
     */
    abstract class PangoRendererPrivate {
        static $gtype: GObject.GType<PangoRendererPrivate>;
    }


    /**
     * @gir-type Struct
     */
    class PixmapObject {
        static $gtype: GObject.GType<PixmapObject>;

        // Fields
        impl: Drawable;

        depth: number;
    }


    /**
     * @gir-type Struct
     */
    class PixmapObjectClass {
        static $gtype: GObject.GType<PixmapObjectClass>;
    }


    /**
     * @gir-type Struct
     */
    class Point {
        static $gtype: GObject.GType<Point>;

        // Fields
        x: number;

        y: number;

        // Constructors

        constructor(properties?: Partial<{
            x: number;
            y: number;
        }>);
    }


    /**
     * @gir-type Struct
     */
    class PointerHooks {
        static $gtype: GObject.GType<PointerHooks>;
    }


    /**
     * @gir-type Struct
     */
    class PointerWindowInfo {
        static $gtype: GObject.GType<PointerWindowInfo>;

        // Fields
        toplevel_under_pointer: Window;

        window_under_pointer: Window;

        toplevel_x: number;

        toplevel_y: number;

        state: number;

        button: number;

        motion_hint_serial: number;
    }


    /**
     * @gir-type Struct
     */
    class Rectangle {
        static $gtype: GObject.GType<Rectangle>;

        // Fields
        x: number;

        y: number;

        width: number;

        height: number;

        // Constructors

        constructor(properties?: Partial<{
            x: number;
            y: number;
            width: number;
            height: number;
        }>);

        // Methods
        /**
         * Calculates the intersection of two rectangles. It is allowed for
         * `dest` to be the same as either `src1` or `src2`. If the rectangles
         * do not intersect, `dest`'s width and height is set to 0 and its x
         * and y values are undefined. If you are only interested in whether
         * the rectangles intersect, but not in the intersecting area itself,
         * pass `null` for `dest`.
         * @param src2 a {@link Gdk.Rectangle}
         * @returns `true` if the rectangles intersect.
         */
        intersect(src2: Rectangle): [boolean, Rectangle | null];

        /**
         * Calculates the union of two rectangles.
         * The union of rectangles `src1` and `src2` is the smallest rectangle which
         * includes both `src1` and `src2` within it.
         * It is allowed for `dest` to be the same as either `src1` or `src2`.
         * @param src2 a {@link Gdk.Rectangle}
         */
        union(src2: Rectangle): Rectangle;
    }


    /**
     * @gir-type Struct
     */
    abstract class Region {
        static $gtype: GObject.GType<Region>;

        // Methods
        /**
         * Copies `region`, creating an identical new region.
         * @returns a new region identical to `region`
         */
        copy(): Region;

        /**
         * Destroys a {@link Gdk.Region}.
         */
        destroy(): void;

        /**
         * Finds out if the {@link Gdk.Region} is empty.
         * @returns `true` if `region` is empty.
         */
        empty(): boolean;

        /**
         * Finds out if the two regions are the same.
         * @param region2 a {@link Gdk.Region}
         * @returns `true` if `region1` and `region2` are equal.
         */
        equal(region2: Region): boolean;

        /**
         * Obtains the smallest rectangle which includes the entire {@link Gdk.Region}.
         * @param rectangle return location for the clipbox
         */
        get_clipbox(rectangle: Rectangle): void;

        /**
         * Obtains the area covered by the region as a list of rectangles.
         * The array returned in `rectangles` must be freed with `g_free()`.
         * @param rectangles return location for an array of rectangles
         */
        get_rectangles(rectangles: Rectangle[]): void;

        /**
         * Sets the area of `source1` to the intersection of the areas of `source1`
         * and `source2`. The resulting area is the set of pixels contained in
         * both `source1` and `source2`.
         * @param source2 another {@link Gdk.Region}
         */
        intersect(source2: Region): void;

        /**
         * Moves a region the specified distance.
         * @param dx the distance to move the region horizontally
         * @param dy the distance to move the region vertically
         */
        offset(dx: number, dy: number): void;

        /**
         * Finds out if a point is in a region.
         * @param x the x coordinate of a point
         * @param y the y coordinate of a point
         * @returns `true` if the point is in `region`.
         */
        point_in(x: number, y: number): boolean;

        /**
         * Finds out if a regions is the same as a rectangle.
         * @param rectangle a {@link Gdk.Rectangle}
         * @returns `true` if `region` and `rectangle` are equal.
         * @since 2.18
         * @deprecated since 2.22: Use `gdk_region_new_rect()` and `gdk_region_equal()` to             achieve the same effect.
         */
        rect_equal(rectangle: Rectangle): boolean;

        /**
         * Tests whether a rectangle is within a region.
         * @param rectangle a {@link Gdk.Rectangle}.
         * @returns {@link Gdk.OverlapType.IN}, {@link Gdk.OverlapType.OUT}, or   {@link Gdk.OverlapType.PART}, depending on whether the rectangle is inside,   outside, or partly inside the {@link Gdk.Region}, respectively.
         */
        rect_in(rectangle: Rectangle): OverlapType;

        /**
         * Resizes a region by the specified amount.
         * Positive values shrink the region. Negative values expand it.
         * @param dx the number of pixels to shrink the region horizontally
         * @param dy the number of pixels to shrink the region vertically
         * @deprecated since 2.22: There is no replacement for this function.
         */
        shrink(dx: number, dy: number): void;

        /**
         * Subtracts the area of `source2` from the area `source1`. The resulting
         * area is the set of pixels contained in `source1` but not in `source2`.
         * @param source2 another {@link Gdk.Region}
         */
        subtract(source2: Region): void;

        /**
         * Sets the area of `source1` to the union of the areas of `source1` and
         * `source2`. The resulting area is the set of pixels contained in
         * either `source1` or `source2`.
         * @param source2 a {@link Gdk.Region}
         */
        union(source2: Region): void;

        /**
         * Sets the area of `region` to the union of the areas of `region` and
         * `rect`. The resulting area is the set of pixels contained in
         * either `region` or `rect`.
         * @param rect a {@link Gdk.Rectangle}.
         */
        union_with_rect(rect: Rectangle): void;

        /**
         * Sets the area of `source1` to the exclusive-OR of the areas of `source1`
         * and `source2`. The resulting area is the set of pixels contained in one
         * or the other of the two sources but not in both.
         * @param source2 another {@link Gdk.Region}
         */
        xor(source2: Region): void;
    }


    /**
     * @gir-type Struct
     */
    class RgbCmap {
        static $gtype: GObject.GType<RgbCmap>;

        // Fields
        colors: number[];

        n_colors: number;

        // Constructors

        constructor(properties?: Partial<{
            colors: number[];
            n_colors: number;
        }>);

        // Methods
        free(): void;
    }


    /**
     * @gir-type Alias
     */
    type ScreenClass = typeof Screen;

    /**
     * @gir-type Struct
     */
    class Segment {
        static $gtype: GObject.GType<Segment>;

        // Fields
        x1: number;

        y1: number;

        x2: number;

        y2: number;

        // Constructors

        constructor(properties?: Partial<{
            x1: number;
            y1: number;
            x2: number;
            y2: number;
        }>);
    }


    /**
     * @gir-type Struct
     */
    class Span {
        static $gtype: GObject.GType<Span>;

        // Fields
        x: number;

        y: number;

        width: number;

        // Constructors

        constructor(properties?: Partial<{
            x: number;
            y: number;
            width: number;
        }>);
    }


    /**
     * @gir-type Struct
     */
    class TimeCoord {
        static $gtype: GObject.GType<TimeCoord>;

        // Fields
        time: number;

        axes: number[];

        // Constructors

        constructor(properties?: Partial<{
            time: number;
            axes: number[];
        }>);
    }


    /**
     * @gir-type Struct
     */
    class Trapezoid {
        static $gtype: GObject.GType<Trapezoid>;

        // Fields
        y1: number;

        x11: number;

        x21: number;

        y2: number;

        x12: number;

        x22: number;

        // Constructors

        constructor(properties?: Partial<{
            y1: number;
            x11: number;
            x21: number;
            y2: number;
            x12: number;
            x22: number;
        }>);
    }


    /**
     * @gir-type Alias
     */
    type VisualClass = typeof Visual;

    /**
     * @gir-type Struct
     */
    class WindowAttr {
        static $gtype: GObject.GType<WindowAttr>;

        // Fields
        title: string;

        event_mask: number;

        x: number;

        y: number;

        width: number;

        height: number;

        wclass: WindowClass;

        visual: Visual;

        colormap: Colormap;

        window_type: WindowType;

        wmclass_name: string;

        wmclass_class: string;

        override_redirect: boolean;

        type_hint: WindowTypeHint;
    }


    /**
     * @gir-type Struct
     */
    abstract class WindowObject {
        static $gtype: GObject.GType<WindowObject>;
    }


    /**
     * @gir-type Struct
     */
    class WindowObjectClass {
        static $gtype: GObject.GType<WindowObjectClass>;
    }


    /**
     * @gir-type Struct
     */
    abstract class WindowRedirect {
        static $gtype: GObject.GType<WindowRedirect>;
    }


    /**
     * @gir-type Struct
     */
    class Event {
        static $gtype: GObject.GType<Event>;

        // Fields
        type: EventType;

        // Constructors
        constructor(type: EventType);

        static ["new"](type: EventType): Event;

        // Static methods
        /**
         * Checks all open displays for a {@link Gdk.Event} to process,to be processed
         * on, fetching events from the windowing system if necessary.
         * See `gdk_display_get_event()`.
         */
        static get(): Event;

        /**
         * @param window 
         */
        static get_graphics_expose(window: Window): Event;

        /**
         * Sets the function to call to handle all events from GDK.
         * 
         * Note that GTK+ uses this to install its own event handler, so it is
         * usually not useful for GTK+ applications. (Although an application
         * can call this function then call `gtk_main_do_event()` to pass
         * events to GTK+.)
         * @param func the function to call to handle events from GDK.
         */
        static handler_set(func: EventFunc): void;

        /**
         * If there is an event waiting in the event queue of some open
         * display, returns a copy of it. See `gdk_display_peek_event()`.
         */
        static peek(): Event;

        /**
         * Request more motion notifies if `event` is a motion notify hint event.
         * This function should be used instead of `gdk_window_get_pointer()` to
         * request further motion notifies, because it also works for extension
         * events where motion notifies are provided for devices other than the
         * core pointer. Coordinate extraction, processing and requesting more
         * motion events from a {@link Gdk.EventType.MOTION_NOTIFY} event usually works like this:
         * 
         * 
         * ```
         * {
         *   /&ast; motion_event handler &ast;/
         *   x = motion_event->x;
         *   y = motion_event->y;
         *   /&ast; handle (x,y) motion &ast;/
         *   gdk_event_request_motions (motion_event); /&ast; handles is_hint events &ast;/
         * }
         * ```
         * 
         * @param event a valid {@link Gdk.Event}
         * @since 2.12
         */
        static request_motions(event: EventMotion): void;

        /**
         * @param display 
         * @param event 
         * @param winid 
         */
        static send_client_message_for_display(display: Display, event: Event, winid: NativeWindow): boolean;

        // Methods
        /**
         * Copies a {@link Gdk.Event}, copying or incrementing the reference count of the
         * resources associated with it (e.g. {@link Gdk.Window}'s and strings).
         * @returns a copy of `event`. The returned {@link Gdk.Event} should be freed with `gdk_event_free()`.
         */
        copy(): Event;

        /**
         * Frees a {@link Gdk.Event}, freeing or decrementing any resources associated with it.
         * Note that this function should only be called with events returned from
         * functions such as `gdk_event_peek()`, `gdk_event_get()`,
         * `gdk_event_get_graphics_expose()` and `gdk_event_copy()` and `gdk_event_new()`.
         */
        free(): void;

        /**
         * Extract the axis value for a particular axis use from
         * an event structure.
         * @param axis_use the axis use to look for
         * @returns `true` if the specified axis was found, otherwise `false`
         */
        get_axis(axis_use: AxisUse): [boolean, number];

        /**
         * Extract the event window relative x/y coordinates from an event.
         * @returns `true` if the event delivered event window coordinates
         */
        get_coords(): [boolean, number, number];

        /**
         * Extract the root window relative x/y coordinates from an event.
         * @returns `true` if the event delivered root window coordinates
         */
        get_root_coords(): [boolean, number, number];

        /**
         * If the event contains a "state" field, puts that field in `state`. Otherwise
         * stores an empty state (0). Returns `true` if there was a state field
         * in the event. `event` may be `null`, in which case it's treated
         * as if the event had no state field.
         * @returns `true` if there was a state field in the event
         */
        get_state(): [boolean, ModifierType];

        /**
         * Returns the time stamp from `event`, if there is one; otherwise
         * returns #GDK_CURRENT_TIME. If `event` is `null`, returns #GDK_CURRENT_TIME.
         * @returns time stamp field from `event`
         */
        get_time(): number;

        /**
         * Appends a copy of the given event onto the front of the event
         * queue for event->any.window's display, or the default event
         * queue if event->any.window is `null`. See `gdk_display_put_event()`.
         */
        put(): void;

        /**
         * Sends an X ClientMessage event to a given window (which must be
         * on the default {@link Gdk.Display}.)
         * This could be used for communicating between different applications,
         * though the amount of data is limited to 20 bytes.
         * @param winid the window to send the X ClientMessage event to.
         * @returns non-zero on success.
         */
        send_client_message(winid: NativeWindow): boolean;

        /**
         * Sends an X ClientMessage event to all toplevel windows on the default
         * {@link Gdk.Screen}.
         * 
         * Toplevel windows are determined by checking for the WM_STATE property, as
         * described in the Inter-Client Communication Conventions Manual (ICCCM).
         * If no windows are found with the WM_STATE property set, the message is sent
         * to all children of the root window.
         */
        send_clientmessage_toall(): void;

        /**
         * Sets the screen for `event` to `screen`. The event must
         * have been allocated by GTK+, for instance, by
         * `gdk_event_copy()`.
         * @param screen a {@link Gdk.Screen}
         * @since 2.2
         */
        set_screen(screen: Screen): void;
    }


    /**
     * @gir-type Alias
     */
    type NativeWindow = number;

    /**
     * @gir-type Alias
     */
    type Selection = Atom;

    /**
     * @gir-type Alias
     */
    type SelectionType = Atom;

    /**
     * @gir-type Alias
     */
    type Target = Atom;

    /**
     * @gir-type Alias
     */
    type WChar = number;

    /**
     * @gir-type Alias
     */
    type XEvent = void;

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

export default Gdk;

// END
