
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gdk-2.0-ambient.d.ts';
import './gdk-2.0-import.d.ts';
/**
 * Gdk-2.0
 */

import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';

export enum AxisUse {
    IGNORE,
    X,
    Y,
    PRESSURE,
    XTILT,
    YTILT,
    WHEEL,
    LAST,
}
export enum ByteOrder {
    LSB_FIRST,
    MSB_FIRST,
}
export enum CapStyle {
    NOT_LAST,
    BUTT,
    ROUND,
    PROJECTING,
}
export enum CrossingMode {
    NORMAL,
    GRAB,
    UNGRAB,
    GTK_GRAB,
    GTK_UNGRAB,
    STATE_CHANGED,
}
export enum CursorType {
    X_CURSOR,
    ARROW,
    BASED_ARROW_DOWN,
    BASED_ARROW_UP,
    BOAT,
    BOGOSITY,
    BOTTOM_LEFT_CORNER,
    BOTTOM_RIGHT_CORNER,
    BOTTOM_SIDE,
    BOTTOM_TEE,
    BOX_SPIRAL,
    CENTER_PTR,
    CIRCLE,
    CLOCK,
    COFFEE_MUG,
    CROSS,
    CROSS_REVERSE,
    CROSSHAIR,
    DIAMOND_CROSS,
    DOT,
    DOTBOX,
    DOUBLE_ARROW,
    DRAFT_LARGE,
    DRAFT_SMALL,
    DRAPED_BOX,
    EXCHANGE,
    FLEUR,
    GOBBLER,
    GUMBY,
    HAND1,
    HAND2,
    HEART,
    ICON,
    IRON_CROSS,
    LEFT_PTR,
    LEFT_SIDE,
    LEFT_TEE,
    LEFTBUTTON,
    LL_ANGLE,
    LR_ANGLE,
    MAN,
    MIDDLEBUTTON,
    MOUSE,
    PENCIL,
    PIRATE,
    PLUS,
    QUESTION_ARROW,
    RIGHT_PTR,
    RIGHT_SIDE,
    RIGHT_TEE,
    RIGHTBUTTON,
    RTL_LOGO,
    SAILBOAT,
    SB_DOWN_ARROW,
    SB_H_DOUBLE_ARROW,
    SB_LEFT_ARROW,
    SB_RIGHT_ARROW,
    SB_UP_ARROW,
    SB_V_DOUBLE_ARROW,
    SHUTTLE,
    SIZING,
    SPIDER,
    SPRAYCAN,
    STAR,
    TARGET,
    TCROSS,
    TOP_LEFT_ARROW,
    TOP_LEFT_CORNER,
    TOP_RIGHT_CORNER,
    TOP_SIDE,
    TOP_TEE,
    TREK,
    UL_ANGLE,
    UMBRELLA,
    UR_ANGLE,
    WATCH,
    XTERM,
    LAST_CURSOR,
    BLANK_CURSOR,
    CURSOR_IS_PIXMAP,
}
export enum DragProtocol {
    MOTIF,
    XDND,
    ROOTWIN,
    NONE,
    WIN32_DROPFILES,
    OLE2,
    LOCAL,
}
export enum EventType {
    NOTHING,
    DELETE,
    DESTROY,
    EXPOSE,
    MOTION_NOTIFY,
    BUTTON_PRESS,
    TODO_2BUTTON_PRESS,
    TODO_3BUTTON_PRESS,
    BUTTON_RELEASE,
    KEY_PRESS,
    KEY_RELEASE,
    ENTER_NOTIFY,
    LEAVE_NOTIFY,
    FOCUS_CHANGE,
    CONFIGURE,
    MAP,
    UNMAP,
    PROPERTY_NOTIFY,
    SELECTION_CLEAR,
    SELECTION_REQUEST,
    SELECTION_NOTIFY,
    PROXIMITY_IN,
    PROXIMITY_OUT,
    DRAG_ENTER,
    DRAG_LEAVE,
    DRAG_MOTION,
    DRAG_STATUS,
    DROP_START,
    DROP_FINISHED,
    CLIENT_EVENT,
    VISIBILITY_NOTIFY,
    NO_EXPOSE,
    SCROLL,
    WINDOW_STATE,
    SETTING,
    OWNER_CHANGE,
    GRAB_BROKEN,
    DAMAGE,
    EVENT_LAST,
}
export enum ExtensionMode {
    NONE,
    ALL,
    CURSOR,
}
export enum Fill {
    SOLID,
    TILED,
    STIPPLED,
    OPAQUE_STIPPLED,
}
export enum FillRule {
    EVEN_ODD_RULE,
    WINDING_RULE,
}
export enum FilterReturn {
    CONTINUE,
    TRANSLATE,
    REMOVE,
}
export enum FontType {
    FONT,
    FONTSET,
}
export enum Function {
    COPY,
    INVERT,
    XOR,
    CLEAR,
    AND,
    AND_REVERSE,
    AND_INVERT,
    NOOP,
    OR,
    EQUIV,
    OR_REVERSE,
    COPY_INVERT,
    OR_INVERT,
    NAND,
    NOR,
    SET,
}
export enum GrabStatus {
    SUCCESS,
    ALREADY_GRABBED,
    INVALID_TIME,
    NOT_VIEWABLE,
    FROZEN,
}
export enum Gravity {
    NORTH_WEST,
    NORTH,
    NORTH_EAST,
    WEST,
    CENTER,
    EAST,
    SOUTH_WEST,
    SOUTH,
    SOUTH_EAST,
    STATIC,
}
export enum ImageType {
    NORMAL,
    SHARED,
    FASTEST,
}
export enum InputMode {
    DISABLED,
    SCREEN,
    WINDOW,
}
export enum InputSource {
    MOUSE,
    PEN,
    ERASER,
    CURSOR,
}
export enum JoinStyle {
    MITER,
    ROUND,
    BEVEL,
}
export enum LineStyle {
    SOLID,
    ON_OFF_DASH,
    DOUBLE_DASH,
}
export enum NotifyType {
    ANCESTOR,
    VIRTUAL,
    INFERIOR,
    NONLINEAR,
    NONLINEAR_VIRTUAL,
    UNKNOWN,
}
export enum OverlapType {
    IN,
    OUT,
    PART,
}
export enum OwnerChange {
    NEW_OWNER,
    DESTROY,
    CLOSE,
}
export enum PropMode {
    REPLACE,
    PREPEND,
    APPEND,
}
export enum PropertyState {
    NEW_VALUE,
    DELETE,
}
export enum RgbDither {
    NONE,
    NORMAL,
    MAX,
}
export enum ScrollDirection {
    UP,
    DOWN,
    LEFT,
    RIGHT,
}
export enum SettingAction {
    NEW,
    CHANGED,
    DELETED,
}
export enum Status {
    OK,
    ERROR,
    ERROR_PARAM,
    ERROR_FILE,
    ERROR_MEM,
}
export enum SubwindowMode {
    CLIP_BY_CHILDREN,
    INCLUDE_INFERIORS,
}
export enum VisibilityState {
    UNOBSCURED,
    PARTIAL,
    FULLY_OBSCURED,
}
export enum VisualType {
    STATIC_GRAY,
    GRAYSCALE,
    STATIC_COLOR,
    PSEUDO_COLOR,
    TRUE_COLOR,
    DIRECT_COLOR,
}
export enum WindowClass {
    OUTPUT,
    ONLY,
}
export enum WindowEdge {
    NORTH_WEST,
    NORTH,
    NORTH_EAST,
    WEST,
    EAST,
    SOUTH_WEST,
    SOUTH,
    SOUTH_EAST,
}
export enum WindowType {
    ROOT,
    TOPLEVEL,
    CHILD,
    DIALOG,
    TEMP,
    FOREIGN,
    OFFSCREEN,
}
export enum WindowTypeHint {
    NORMAL,
    DIALOG,
    MENU,
    TOOLBAR,
    SPLASHSCREEN,
    UTILITY,
    DOCK,
    DESKTOP,
    DROPDOWN_MENU,
    POPUP_MENU,
    TOOLTIP,
    NOTIFICATION,
    COMBO,
    DND,
}
export enum DragAction {
    DEFAULT,
    COPY,
    MOVE,
    LINK,
    PRIVATE,
    ASK,
}
export enum EventMask {
    EXPOSURE_MASK,
    POINTER_MOTION_MASK,
    POINTER_MOTION_HINT_MASK,
    BUTTON_MOTION_MASK,
    BUTTON1_MOTION_MASK,
    BUTTON2_MOTION_MASK,
    BUTTON3_MOTION_MASK,
    BUTTON_PRESS_MASK,
    BUTTON_RELEASE_MASK,
    KEY_PRESS_MASK,
    KEY_RELEASE_MASK,
    ENTER_NOTIFY_MASK,
    LEAVE_NOTIFY_MASK,
    FOCUS_CHANGE_MASK,
    STRUCTURE_MASK,
    PROPERTY_CHANGE_MASK,
    VISIBILITY_NOTIFY_MASK,
    PROXIMITY_IN_MASK,
    PROXIMITY_OUT_MASK,
    SUBSTRUCTURE_MASK,
    SCROLL_MASK,
    ALL_EVENTS_MASK,
}
export enum GCValuesMask {
    FOREGROUND,
    BACKGROUND,
    FONT,
    FUNCTION,
    FILL,
    TILE,
    STIPPLE,
    CLIP_MASK,
    SUBWINDOW,
    TS_X_ORIGIN,
    TS_Y_ORIGIN,
    CLIP_X_ORIGIN,
    CLIP_Y_ORIGIN,
    EXPOSURES,
    LINE_WIDTH,
    LINE_STYLE,
    CAP_STYLE,
    JOIN_STYLE,
}
export enum InputCondition {
    READ,
    WRITE,
    EXCEPTION,
}
export enum ModifierType {
    SHIFT_MASK,
    LOCK_MASK,
    CONTROL_MASK,
    MOD1_MASK,
    MOD2_MASK,
    MOD3_MASK,
    MOD4_MASK,
    MOD5_MASK,
    BUTTON1_MASK,
    BUTTON2_MASK,
    BUTTON3_MASK,
    BUTTON4_MASK,
    BUTTON5_MASK,
    SUPER_MASK,
    HYPER_MASK,
    META_MASK,
    RELEASE_MASK,
    MODIFIER_MASK,
}
export enum WMDecoration {
    ALL,
    BORDER,
    RESIZEH,
    TITLE,
    MENU,
    MINIMIZE,
    MAXIMIZE,
}
export enum WMFunction {
    ALL,
    RESIZE,
    MOVE,
    MINIMIZE,
    MAXIMIZE,
    CLOSE,
}
export enum WindowAttributesType {
    TITLE,
    X,
    Y,
    CURSOR,
    COLORMAP,
    VISUAL,
    WMCLASS,
    NOREDIR,
    TYPE_HINT,
}
export enum WindowHints {
    POS,
    MIN_SIZE,
    MAX_SIZE,
    BASE_SIZE,
    ASPECT,
    RESIZE_INC,
    WIN_GRAVITY,
    USER_POS,
    USER_SIZE,
}
export enum WindowState {
    WITHDRAWN,
    ICONIFIED,
    MAXIMIZED,
    STICKY,
    FULLSCREEN,
    ABOVE,
    BELOW,
}
export const CURRENT_TIME: number
export const KEY_0: number
export const KEY_1: number
export const KEY_2: number
export const KEY_3: number
export const KEY_3270_AltCursor: number
export const KEY_3270_Attn: number
export const KEY_3270_BackTab: number
export const KEY_3270_ChangeScreen: number
export const KEY_3270_Copy: number
export const KEY_3270_CursorBlink: number
export const KEY_3270_CursorSelect: number
export const KEY_3270_DeleteWord: number
export const KEY_3270_Duplicate: number
export const KEY_3270_Enter: number
export const KEY_3270_EraseEOF: number
export const KEY_3270_EraseInput: number
export const KEY_3270_ExSelect: number
export const KEY_3270_FieldMark: number
export const KEY_3270_Ident: number
export const KEY_3270_Jump: number
export const KEY_3270_KeyClick: number
export const KEY_3270_Left2: number
export const KEY_3270_PA1: number
export const KEY_3270_PA2: number
export const KEY_3270_PA3: number
export const KEY_3270_Play: number
export const KEY_3270_PrintScreen: number
export const KEY_3270_Quit: number
export const KEY_3270_Record: number
export const KEY_3270_Reset: number
export const KEY_3270_Right2: number
export const KEY_3270_Rule: number
export const KEY_3270_Setup: number
export const KEY_3270_Test: number
export const KEY_4: number
export const KEY_5: number
export const KEY_6: number
export const KEY_7: number
export const KEY_8: number
export const KEY_9: number
export const KEY_A: number
export const KEY_AE: number
export const KEY_Aacute: number
export const KEY_Abelowdot: number
export const KEY_Abreve: number
export const KEY_Abreveacute: number
export const KEY_Abrevebelowdot: number
export const KEY_Abrevegrave: number
export const KEY_Abrevehook: number
export const KEY_Abrevetilde: number
export const KEY_AccessX_Enable: number
export const KEY_AccessX_Feedback_Enable: number
export const KEY_Acircumflex: number
export const KEY_Acircumflexacute: number
export const KEY_Acircumflexbelowdot: number
export const KEY_Acircumflexgrave: number
export const KEY_Acircumflexhook: number
export const KEY_Acircumflextilde: number
export const KEY_AddFavorite: number
export const KEY_Adiaeresis: number
export const KEY_Agrave: number
export const KEY_Ahook: number
export const KEY_Alt_L: number
export const KEY_Alt_R: number
export const KEY_Amacron: number
export const KEY_Aogonek: number
export const KEY_ApplicationLeft: number
export const KEY_ApplicationRight: number
export const KEY_Arabic_0: number
export const KEY_Arabic_1: number
export const KEY_Arabic_2: number
export const KEY_Arabic_3: number
export const KEY_Arabic_4: number
export const KEY_Arabic_5: number
export const KEY_Arabic_6: number
export const KEY_Arabic_7: number
export const KEY_Arabic_8: number
export const KEY_Arabic_9: number
export const KEY_Arabic_ain: number
export const KEY_Arabic_alef: number
export const KEY_Arabic_alefmaksura: number
export const KEY_Arabic_beh: number
export const KEY_Arabic_comma: number
export const KEY_Arabic_dad: number
export const KEY_Arabic_dal: number
export const KEY_Arabic_damma: number
export const KEY_Arabic_dammatan: number
export const KEY_Arabic_ddal: number
export const KEY_Arabic_farsi_yeh: number
export const KEY_Arabic_fatha: number
export const KEY_Arabic_fathatan: number
export const KEY_Arabic_feh: number
export const KEY_Arabic_fullstop: number
export const KEY_Arabic_gaf: number
export const KEY_Arabic_ghain: number
export const KEY_Arabic_ha: number
export const KEY_Arabic_hah: number
export const KEY_Arabic_hamza: number
export const KEY_Arabic_hamza_above: number
export const KEY_Arabic_hamza_below: number
export const KEY_Arabic_hamzaonalef: number
export const KEY_Arabic_hamzaonwaw: number
export const KEY_Arabic_hamzaonyeh: number
export const KEY_Arabic_hamzaunderalef: number
export const KEY_Arabic_heh: number
export const KEY_Arabic_heh_doachashmee: number
export const KEY_Arabic_heh_goal: number
export const KEY_Arabic_jeem: number
export const KEY_Arabic_jeh: number
export const KEY_Arabic_kaf: number
export const KEY_Arabic_kasra: number
export const KEY_Arabic_kasratan: number
export const KEY_Arabic_keheh: number
export const KEY_Arabic_khah: number
export const KEY_Arabic_lam: number
export const KEY_Arabic_madda_above: number
export const KEY_Arabic_maddaonalef: number
export const KEY_Arabic_meem: number
export const KEY_Arabic_noon: number
export const KEY_Arabic_noon_ghunna: number
export const KEY_Arabic_peh: number
export const KEY_Arabic_percent: number
export const KEY_Arabic_qaf: number
export const KEY_Arabic_question_mark: number
export const KEY_Arabic_ra: number
export const KEY_Arabic_rreh: number
export const KEY_Arabic_sad: number
export const KEY_Arabic_seen: number
export const KEY_Arabic_semicolon: number
export const KEY_Arabic_shadda: number
export const KEY_Arabic_sheen: number
export const KEY_Arabic_sukun: number
export const KEY_Arabic_superscript_alef: number
export const KEY_Arabic_switch: number
export const KEY_Arabic_tah: number
export const KEY_Arabic_tatweel: number
export const KEY_Arabic_tcheh: number
export const KEY_Arabic_teh: number
export const KEY_Arabic_tehmarbuta: number
export const KEY_Arabic_thal: number
export const KEY_Arabic_theh: number
export const KEY_Arabic_tteh: number
export const KEY_Arabic_veh: number
export const KEY_Arabic_waw: number
export const KEY_Arabic_yeh: number
export const KEY_Arabic_yeh_baree: number
export const KEY_Arabic_zah: number
export const KEY_Arabic_zain: number
export const KEY_Aring: number
export const KEY_Armenian_AT: number
export const KEY_Armenian_AYB: number
export const KEY_Armenian_BEN: number
export const KEY_Armenian_CHA: number
export const KEY_Armenian_DA: number
export const KEY_Armenian_DZA: number
export const KEY_Armenian_E: number
export const KEY_Armenian_FE: number
export const KEY_Armenian_GHAT: number
export const KEY_Armenian_GIM: number
export const KEY_Armenian_HI: number
export const KEY_Armenian_HO: number
export const KEY_Armenian_INI: number
export const KEY_Armenian_JE: number
export const KEY_Armenian_KE: number
export const KEY_Armenian_KEN: number
export const KEY_Armenian_KHE: number
export const KEY_Armenian_LYUN: number
export const KEY_Armenian_MEN: number
export const KEY_Armenian_NU: number
export const KEY_Armenian_O: number
export const KEY_Armenian_PE: number
export const KEY_Armenian_PYUR: number
export const KEY_Armenian_RA: number
export const KEY_Armenian_RE: number
export const KEY_Armenian_SE: number
export const KEY_Armenian_SHA: number
export const KEY_Armenian_TCHE: number
export const KEY_Armenian_TO: number
export const KEY_Armenian_TSA: number
export const KEY_Armenian_TSO: number
export const KEY_Armenian_TYUN: number
export const KEY_Armenian_VEV: number
export const KEY_Armenian_VO: number
export const KEY_Armenian_VYUN: number
export const KEY_Armenian_YECH: number
export const KEY_Armenian_ZA: number
export const KEY_Armenian_ZHE: number
export const KEY_Armenian_accent: number
export const KEY_Armenian_amanak: number
export const KEY_Armenian_apostrophe: number
export const KEY_Armenian_at: number
export const KEY_Armenian_ayb: number
export const KEY_Armenian_ben: number
export const KEY_Armenian_but: number
export const KEY_Armenian_cha: number
export const KEY_Armenian_da: number
export const KEY_Armenian_dza: number
export const KEY_Armenian_e: number
export const KEY_Armenian_exclam: number
export const KEY_Armenian_fe: number
export const KEY_Armenian_full_stop: number
export const KEY_Armenian_ghat: number
export const KEY_Armenian_gim: number
export const KEY_Armenian_hi: number
export const KEY_Armenian_ho: number
export const KEY_Armenian_hyphen: number
export const KEY_Armenian_ini: number
export const KEY_Armenian_je: number
export const KEY_Armenian_ke: number
export const KEY_Armenian_ken: number
export const KEY_Armenian_khe: number
export const KEY_Armenian_ligature_ew: number
export const KEY_Armenian_lyun: number
export const KEY_Armenian_men: number
export const KEY_Armenian_nu: number
export const KEY_Armenian_o: number
export const KEY_Armenian_paruyk: number
export const KEY_Armenian_pe: number
export const KEY_Armenian_pyur: number
export const KEY_Armenian_question: number
export const KEY_Armenian_ra: number
export const KEY_Armenian_re: number
export const KEY_Armenian_se: number
export const KEY_Armenian_separation_mark: number
export const KEY_Armenian_sha: number
export const KEY_Armenian_shesht: number
export const KEY_Armenian_tche: number
export const KEY_Armenian_to: number
export const KEY_Armenian_tsa: number
export const KEY_Armenian_tso: number
export const KEY_Armenian_tyun: number
export const KEY_Armenian_verjaket: number
export const KEY_Armenian_vev: number
export const KEY_Armenian_vo: number
export const KEY_Armenian_vyun: number
export const KEY_Armenian_yech: number
export const KEY_Armenian_yentamna: number
export const KEY_Armenian_za: number
export const KEY_Armenian_zhe: number
export const KEY_Atilde: number
export const KEY_AudibleBell_Enable: number
export const KEY_AudioCycleTrack: number
export const KEY_AudioForward: number
export const KEY_AudioLowerVolume: number
export const KEY_AudioMedia: number
export const KEY_AudioMute: number
export const KEY_AudioNext: number
export const KEY_AudioPause: number
export const KEY_AudioPlay: number
export const KEY_AudioPrev: number
export const KEY_AudioRaiseVolume: number
export const KEY_AudioRandomPlay: number
export const KEY_AudioRecord: number
export const KEY_AudioRepeat: number
export const KEY_AudioRewind: number
export const KEY_AudioStop: number
export const KEY_Away: number
export const KEY_B: number
export const KEY_Babovedot: number
export const KEY_Back: number
export const KEY_BackForward: number
export const KEY_BackSpace: number
export const KEY_Battery: number
export const KEY_Begin: number
export const KEY_Blue: number
export const KEY_Bluetooth: number
export const KEY_Book: number
export const KEY_BounceKeys_Enable: number
export const KEY_Break: number
export const KEY_BrightnessAdjust: number
export const KEY_Byelorussian_SHORTU: number
export const KEY_Byelorussian_shortu: number
export const KEY_C: number
export const KEY_CD: number
export const KEY_Cabovedot: number
export const KEY_Cacute: number
export const KEY_Calculator: number
export const KEY_Calendar: number
export const KEY_Cancel: number
export const KEY_Caps_Lock: number
export const KEY_Ccaron: number
export const KEY_Ccedilla: number
export const KEY_Ccircumflex: number
export const KEY_Clear: number
export const KEY_ClearGrab: number
export const KEY_Close: number
export const KEY_Codeinput: number
export const KEY_ColonSign: number
export const KEY_Community: number
export const KEY_ContrastAdjust: number
export const KEY_Control_L: number
export const KEY_Control_R: number
export const KEY_Copy: number
export const KEY_CruzeiroSign: number
export const KEY_Cut: number
export const KEY_CycleAngle: number
export const KEY_Cyrillic_A: number
export const KEY_Cyrillic_BE: number
export const KEY_Cyrillic_CHE: number
export const KEY_Cyrillic_CHE_descender: number
export const KEY_Cyrillic_CHE_vertstroke: number
export const KEY_Cyrillic_DE: number
export const KEY_Cyrillic_DZHE: number
export const KEY_Cyrillic_E: number
export const KEY_Cyrillic_EF: number
export const KEY_Cyrillic_EL: number
export const KEY_Cyrillic_EM: number
export const KEY_Cyrillic_EN: number
export const KEY_Cyrillic_EN_descender: number
export const KEY_Cyrillic_ER: number
export const KEY_Cyrillic_ES: number
export const KEY_Cyrillic_GHE: number
export const KEY_Cyrillic_GHE_bar: number
export const KEY_Cyrillic_HA: number
export const KEY_Cyrillic_HARDSIGN: number
export const KEY_Cyrillic_HA_descender: number
export const KEY_Cyrillic_I: number
export const KEY_Cyrillic_IE: number
export const KEY_Cyrillic_IO: number
export const KEY_Cyrillic_I_macron: number
export const KEY_Cyrillic_JE: number
export const KEY_Cyrillic_KA: number
export const KEY_Cyrillic_KA_descender: number
export const KEY_Cyrillic_KA_vertstroke: number
export const KEY_Cyrillic_LJE: number
export const KEY_Cyrillic_NJE: number
export const KEY_Cyrillic_O: number
export const KEY_Cyrillic_O_bar: number
export const KEY_Cyrillic_PE: number
export const KEY_Cyrillic_SCHWA: number
export const KEY_Cyrillic_SHA: number
export const KEY_Cyrillic_SHCHA: number
export const KEY_Cyrillic_SHHA: number
export const KEY_Cyrillic_SHORTI: number
export const KEY_Cyrillic_SOFTSIGN: number
export const KEY_Cyrillic_TE: number
export const KEY_Cyrillic_TSE: number
export const KEY_Cyrillic_U: number
export const KEY_Cyrillic_U_macron: number
export const KEY_Cyrillic_U_straight: number
export const KEY_Cyrillic_U_straight_bar: number
export const KEY_Cyrillic_VE: number
export const KEY_Cyrillic_YA: number
export const KEY_Cyrillic_YERU: number
export const KEY_Cyrillic_YU: number
export const KEY_Cyrillic_ZE: number
export const KEY_Cyrillic_ZHE: number
export const KEY_Cyrillic_ZHE_descender: number
export const KEY_Cyrillic_a: number
export const KEY_Cyrillic_be: number
export const KEY_Cyrillic_che: number
export const KEY_Cyrillic_che_descender: number
export const KEY_Cyrillic_che_vertstroke: number
export const KEY_Cyrillic_de: number
export const KEY_Cyrillic_dzhe: number
export const KEY_Cyrillic_e: number
export const KEY_Cyrillic_ef: number
export const KEY_Cyrillic_el: number
export const KEY_Cyrillic_em: number
export const KEY_Cyrillic_en: number
export const KEY_Cyrillic_en_descender: number
export const KEY_Cyrillic_er: number
export const KEY_Cyrillic_es: number
export const KEY_Cyrillic_ghe: number
export const KEY_Cyrillic_ghe_bar: number
export const KEY_Cyrillic_ha: number
export const KEY_Cyrillic_ha_descender: number
export const KEY_Cyrillic_hardsign: number
export const KEY_Cyrillic_i: number
export const KEY_Cyrillic_i_macron: number
export const KEY_Cyrillic_ie: number
export const KEY_Cyrillic_io: number
export const KEY_Cyrillic_je: number
export const KEY_Cyrillic_ka: number
export const KEY_Cyrillic_ka_descender: number
export const KEY_Cyrillic_ka_vertstroke: number
export const KEY_Cyrillic_lje: number
export const KEY_Cyrillic_nje: number
export const KEY_Cyrillic_o: number
export const KEY_Cyrillic_o_bar: number
export const KEY_Cyrillic_pe: number
export const KEY_Cyrillic_schwa: number
export const KEY_Cyrillic_sha: number
export const KEY_Cyrillic_shcha: number
export const KEY_Cyrillic_shha: number
export const KEY_Cyrillic_shorti: number
export const KEY_Cyrillic_softsign: number
export const KEY_Cyrillic_te: number
export const KEY_Cyrillic_tse: number
export const KEY_Cyrillic_u: number
export const KEY_Cyrillic_u_macron: number
export const KEY_Cyrillic_u_straight: number
export const KEY_Cyrillic_u_straight_bar: number
export const KEY_Cyrillic_ve: number
export const KEY_Cyrillic_ya: number
export const KEY_Cyrillic_yeru: number
export const KEY_Cyrillic_yu: number
export const KEY_Cyrillic_ze: number
export const KEY_Cyrillic_zhe: number
export const KEY_Cyrillic_zhe_descender: number
export const KEY_D: number
export const KEY_DOS: number
export const KEY_Dabovedot: number
export const KEY_Dcaron: number
export const KEY_Delete: number
export const KEY_Display: number
export const KEY_Documents: number
export const KEY_DongSign: number
export const KEY_Down: number
export const KEY_Dstroke: number
export const KEY_E: number
export const KEY_ENG: number
export const KEY_ETH: number
export const KEY_Eabovedot: number
export const KEY_Eacute: number
export const KEY_Ebelowdot: number
export const KEY_Ecaron: number
export const KEY_Ecircumflex: number
export const KEY_Ecircumflexacute: number
export const KEY_Ecircumflexbelowdot: number
export const KEY_Ecircumflexgrave: number
export const KEY_Ecircumflexhook: number
export const KEY_Ecircumflextilde: number
export const KEY_EcuSign: number
export const KEY_Ediaeresis: number
export const KEY_Egrave: number
export const KEY_Ehook: number
export const KEY_Eisu_Shift: number
export const KEY_Eisu_toggle: number
export const KEY_Eject: number
export const KEY_Emacron: number
export const KEY_End: number
export const KEY_Eogonek: number
export const KEY_Escape: number
export const KEY_Eth: number
export const KEY_Etilde: number
export const KEY_EuroSign: number
export const KEY_Excel: number
export const KEY_Execute: number
export const KEY_Explorer: number
export const KEY_F: number
export const KEY_F1: number
export const KEY_F10: number
export const KEY_F11: number
export const KEY_F12: number
export const KEY_F13: number
export const KEY_F14: number
export const KEY_F15: number
export const KEY_F16: number
export const KEY_F17: number
export const KEY_F18: number
export const KEY_F19: number
export const KEY_F2: number
export const KEY_F20: number
export const KEY_F21: number
export const KEY_F22: number
export const KEY_F23: number
export const KEY_F24: number
export const KEY_F25: number
export const KEY_F26: number
export const KEY_F27: number
export const KEY_F28: number
export const KEY_F29: number
export const KEY_F3: number
export const KEY_F30: number
export const KEY_F31: number
export const KEY_F32: number
export const KEY_F33: number
export const KEY_F34: number
export const KEY_F35: number
export const KEY_F4: number
export const KEY_F5: number
export const KEY_F6: number
export const KEY_F7: number
export const KEY_F8: number
export const KEY_F9: number
export const KEY_FFrancSign: number
export const KEY_Fabovedot: number
export const KEY_Farsi_0: number
export const KEY_Farsi_1: number
export const KEY_Farsi_2: number
export const KEY_Farsi_3: number
export const KEY_Farsi_4: number
export const KEY_Farsi_5: number
export const KEY_Farsi_6: number
export const KEY_Farsi_7: number
export const KEY_Farsi_8: number
export const KEY_Farsi_9: number
export const KEY_Farsi_yeh: number
export const KEY_Favorites: number
export const KEY_Finance: number
export const KEY_Find: number
export const KEY_First_Virtual_Screen: number
export const KEY_Forward: number
export const KEY_FrameBack: number
export const KEY_FrameForward: number
export const KEY_G: number
export const KEY_Gabovedot: number
export const KEY_Game: number
export const KEY_Gbreve: number
export const KEY_Gcaron: number
export const KEY_Gcedilla: number
export const KEY_Gcircumflex: number
export const KEY_Georgian_an: number
export const KEY_Georgian_ban: number
export const KEY_Georgian_can: number
export const KEY_Georgian_char: number
export const KEY_Georgian_chin: number
export const KEY_Georgian_cil: number
export const KEY_Georgian_don: number
export const KEY_Georgian_en: number
export const KEY_Georgian_fi: number
export const KEY_Georgian_gan: number
export const KEY_Georgian_ghan: number
export const KEY_Georgian_hae: number
export const KEY_Georgian_har: number
export const KEY_Georgian_he: number
export const KEY_Georgian_hie: number
export const KEY_Georgian_hoe: number
export const KEY_Georgian_in: number
export const KEY_Georgian_jhan: number
export const KEY_Georgian_jil: number
export const KEY_Georgian_kan: number
export const KEY_Georgian_khar: number
export const KEY_Georgian_las: number
export const KEY_Georgian_man: number
export const KEY_Georgian_nar: number
export const KEY_Georgian_on: number
export const KEY_Georgian_par: number
export const KEY_Georgian_phar: number
export const KEY_Georgian_qar: number
export const KEY_Georgian_rae: number
export const KEY_Georgian_san: number
export const KEY_Georgian_shin: number
export const KEY_Georgian_tan: number
export const KEY_Georgian_tar: number
export const KEY_Georgian_un: number
export const KEY_Georgian_vin: number
export const KEY_Georgian_we: number
export const KEY_Georgian_xan: number
export const KEY_Georgian_zen: number
export const KEY_Georgian_zhar: number
export const KEY_Go: number
export const KEY_Greek_ALPHA: number
export const KEY_Greek_ALPHAaccent: number
export const KEY_Greek_BETA: number
export const KEY_Greek_CHI: number
export const KEY_Greek_DELTA: number
export const KEY_Greek_EPSILON: number
export const KEY_Greek_EPSILONaccent: number
export const KEY_Greek_ETA: number
export const KEY_Greek_ETAaccent: number
export const KEY_Greek_GAMMA: number
export const KEY_Greek_IOTA: number
export const KEY_Greek_IOTAaccent: number
export const KEY_Greek_IOTAdiaeresis: number
export const KEY_Greek_IOTAdieresis: number
export const KEY_Greek_KAPPA: number
export const KEY_Greek_LAMBDA: number
export const KEY_Greek_LAMDA: number
export const KEY_Greek_MU: number
export const KEY_Greek_NU: number
export const KEY_Greek_OMEGA: number
export const KEY_Greek_OMEGAaccent: number
export const KEY_Greek_OMICRON: number
export const KEY_Greek_OMICRONaccent: number
export const KEY_Greek_PHI: number
export const KEY_Greek_PI: number
export const KEY_Greek_PSI: number
export const KEY_Greek_RHO: number
export const KEY_Greek_SIGMA: number
export const KEY_Greek_TAU: number
export const KEY_Greek_THETA: number
export const KEY_Greek_UPSILON: number
export const KEY_Greek_UPSILONaccent: number
export const KEY_Greek_UPSILONdieresis: number
export const KEY_Greek_XI: number
export const KEY_Greek_ZETA: number
export const KEY_Greek_accentdieresis: number
export const KEY_Greek_alpha: number
export const KEY_Greek_alphaaccent: number
export const KEY_Greek_beta: number
export const KEY_Greek_chi: number
export const KEY_Greek_delta: number
export const KEY_Greek_epsilon: number
export const KEY_Greek_epsilonaccent: number
export const KEY_Greek_eta: number
export const KEY_Greek_etaaccent: number
export const KEY_Greek_finalsmallsigma: number
export const KEY_Greek_gamma: number
export const KEY_Greek_horizbar: number
export const KEY_Greek_iota: number
export const KEY_Greek_iotaaccent: number
export const KEY_Greek_iotaaccentdieresis: number
export const KEY_Greek_iotadieresis: number
export const KEY_Greek_kappa: number
export const KEY_Greek_lambda: number
export const KEY_Greek_lamda: number
export const KEY_Greek_mu: number
export const KEY_Greek_nu: number
export const KEY_Greek_omega: number
export const KEY_Greek_omegaaccent: number
export const KEY_Greek_omicron: number
export const KEY_Greek_omicronaccent: number
export const KEY_Greek_phi: number
export const KEY_Greek_pi: number
export const KEY_Greek_psi: number
export const KEY_Greek_rho: number
export const KEY_Greek_sigma: number
export const KEY_Greek_switch: number
export const KEY_Greek_tau: number
export const KEY_Greek_theta: number
export const KEY_Greek_upsilon: number
export const KEY_Greek_upsilonaccent: number
export const KEY_Greek_upsilonaccentdieresis: number
export const KEY_Greek_upsilondieresis: number
export const KEY_Greek_xi: number
export const KEY_Greek_zeta: number
export const KEY_Green: number
export const KEY_H: number
export const KEY_Hangul: number
export const KEY_Hangul_A: number
export const KEY_Hangul_AE: number
export const KEY_Hangul_AraeA: number
export const KEY_Hangul_AraeAE: number
export const KEY_Hangul_Banja: number
export const KEY_Hangul_Cieuc: number
export const KEY_Hangul_Codeinput: number
export const KEY_Hangul_Dikeud: number
export const KEY_Hangul_E: number
export const KEY_Hangul_EO: number
export const KEY_Hangul_EU: number
export const KEY_Hangul_End: number
export const KEY_Hangul_Hanja: number
export const KEY_Hangul_Hieuh: number
export const KEY_Hangul_I: number
export const KEY_Hangul_Ieung: number
export const KEY_Hangul_J_Cieuc: number
export const KEY_Hangul_J_Dikeud: number
export const KEY_Hangul_J_Hieuh: number
export const KEY_Hangul_J_Ieung: number
export const KEY_Hangul_J_Jieuj: number
export const KEY_Hangul_J_Khieuq: number
export const KEY_Hangul_J_Kiyeog: number
export const KEY_Hangul_J_KiyeogSios: number
export const KEY_Hangul_J_KkogjiDalrinIeung: number
export const KEY_Hangul_J_Mieum: number
export const KEY_Hangul_J_Nieun: number
export const KEY_Hangul_J_NieunHieuh: number
export const KEY_Hangul_J_NieunJieuj: number
export const KEY_Hangul_J_PanSios: number
export const KEY_Hangul_J_Phieuf: number
export const KEY_Hangul_J_Pieub: number
export const KEY_Hangul_J_PieubSios: number
export const KEY_Hangul_J_Rieul: number
export const KEY_Hangul_J_RieulHieuh: number
export const KEY_Hangul_J_RieulKiyeog: number
export const KEY_Hangul_J_RieulMieum: number
export const KEY_Hangul_J_RieulPhieuf: number
export const KEY_Hangul_J_RieulPieub: number
export const KEY_Hangul_J_RieulSios: number
export const KEY_Hangul_J_RieulTieut: number
export const KEY_Hangul_J_Sios: number
export const KEY_Hangul_J_SsangKiyeog: number
export const KEY_Hangul_J_SsangSios: number
export const KEY_Hangul_J_Tieut: number
export const KEY_Hangul_J_YeorinHieuh: number
export const KEY_Hangul_Jamo: number
export const KEY_Hangul_Jeonja: number
export const KEY_Hangul_Jieuj: number
export const KEY_Hangul_Khieuq: number
export const KEY_Hangul_Kiyeog: number
export const KEY_Hangul_KiyeogSios: number
export const KEY_Hangul_KkogjiDalrinIeung: number
export const KEY_Hangul_Mieum: number
export const KEY_Hangul_MultipleCandidate: number
export const KEY_Hangul_Nieun: number
export const KEY_Hangul_NieunHieuh: number
export const KEY_Hangul_NieunJieuj: number
export const KEY_Hangul_O: number
export const KEY_Hangul_OE: number
export const KEY_Hangul_PanSios: number
export const KEY_Hangul_Phieuf: number
export const KEY_Hangul_Pieub: number
export const KEY_Hangul_PieubSios: number
export const KEY_Hangul_PostHanja: number
export const KEY_Hangul_PreHanja: number
export const KEY_Hangul_PreviousCandidate: number
export const KEY_Hangul_Rieul: number
export const KEY_Hangul_RieulHieuh: number
export const KEY_Hangul_RieulKiyeog: number
export const KEY_Hangul_RieulMieum: number
export const KEY_Hangul_RieulPhieuf: number
export const KEY_Hangul_RieulPieub: number
export const KEY_Hangul_RieulSios: number
export const KEY_Hangul_RieulTieut: number
export const KEY_Hangul_RieulYeorinHieuh: number
export const KEY_Hangul_Romaja: number
export const KEY_Hangul_SingleCandidate: number
export const KEY_Hangul_Sios: number
export const KEY_Hangul_Special: number
export const KEY_Hangul_SsangDikeud: number
export const KEY_Hangul_SsangJieuj: number
export const KEY_Hangul_SsangKiyeog: number
export const KEY_Hangul_SsangPieub: number
export const KEY_Hangul_SsangSios: number
export const KEY_Hangul_Start: number
export const KEY_Hangul_SunkyeongeumMieum: number
export const KEY_Hangul_SunkyeongeumPhieuf: number
export const KEY_Hangul_SunkyeongeumPieub: number
export const KEY_Hangul_Tieut: number
export const KEY_Hangul_U: number
export const KEY_Hangul_WA: number
export const KEY_Hangul_WAE: number
export const KEY_Hangul_WE: number
export const KEY_Hangul_WEO: number
export const KEY_Hangul_WI: number
export const KEY_Hangul_YA: number
export const KEY_Hangul_YAE: number
export const KEY_Hangul_YE: number
export const KEY_Hangul_YEO: number
export const KEY_Hangul_YI: number
export const KEY_Hangul_YO: number
export const KEY_Hangul_YU: number
export const KEY_Hangul_YeorinHieuh: number
export const KEY_Hangul_switch: number
export const KEY_Hankaku: number
export const KEY_Hcircumflex: number
export const KEY_Hebrew_switch: number
export const KEY_Help: number
export const KEY_Henkan: number
export const KEY_Henkan_Mode: number
export const KEY_Hibernate: number
export const KEY_Hiragana: number
export const KEY_Hiragana_Katakana: number
export const KEY_History: number
export const KEY_Home: number
export const KEY_HomePage: number
export const KEY_HotLinks: number
export const KEY_Hstroke: number
export const KEY_Hyper_L: number
export const KEY_Hyper_R: number
export const KEY_I: number
export const KEY_ISO_Center_Object: number
export const KEY_ISO_Continuous_Underline: number
export const KEY_ISO_Discontinuous_Underline: number
export const KEY_ISO_Emphasize: number
export const KEY_ISO_Enter: number
export const KEY_ISO_Fast_Cursor_Down: number
export const KEY_ISO_Fast_Cursor_Left: number
export const KEY_ISO_Fast_Cursor_Right: number
export const KEY_ISO_Fast_Cursor_Up: number
export const KEY_ISO_First_Group: number
export const KEY_ISO_First_Group_Lock: number
export const KEY_ISO_Group_Latch: number
export const KEY_ISO_Group_Lock: number
export const KEY_ISO_Group_Shift: number
export const KEY_ISO_Last_Group: number
export const KEY_ISO_Last_Group_Lock: number
export const KEY_ISO_Left_Tab: number
export const KEY_ISO_Level2_Latch: number
export const KEY_ISO_Level3_Latch: number
export const KEY_ISO_Level3_Lock: number
export const KEY_ISO_Level3_Shift: number
export const KEY_ISO_Level5_Latch: number
export const KEY_ISO_Level5_Lock: number
export const KEY_ISO_Level5_Shift: number
export const KEY_ISO_Lock: number
export const KEY_ISO_Move_Line_Down: number
export const KEY_ISO_Move_Line_Up: number
export const KEY_ISO_Next_Group: number
export const KEY_ISO_Next_Group_Lock: number
export const KEY_ISO_Partial_Line_Down: number
export const KEY_ISO_Partial_Line_Up: number
export const KEY_ISO_Partial_Space_Left: number
export const KEY_ISO_Partial_Space_Right: number
export const KEY_ISO_Prev_Group: number
export const KEY_ISO_Prev_Group_Lock: number
export const KEY_ISO_Release_Both_Margins: number
export const KEY_ISO_Release_Margin_Left: number
export const KEY_ISO_Release_Margin_Right: number
export const KEY_ISO_Set_Margin_Left: number
export const KEY_ISO_Set_Margin_Right: number
export const KEY_Iabovedot: number
export const KEY_Iacute: number
export const KEY_Ibelowdot: number
export const KEY_Ibreve: number
export const KEY_Icircumflex: number
export const KEY_Idiaeresis: number
export const KEY_Igrave: number
export const KEY_Ihook: number
export const KEY_Imacron: number
export const KEY_Insert: number
export const KEY_Iogonek: number
export const KEY_Itilde: number
export const KEY_J: number
export const KEY_Jcircumflex: number
export const KEY_K: number
export const KEY_KP_0: number
export const KEY_KP_1: number
export const KEY_KP_2: number
export const KEY_KP_3: number
export const KEY_KP_4: number
export const KEY_KP_5: number
export const KEY_KP_6: number
export const KEY_KP_7: number
export const KEY_KP_8: number
export const KEY_KP_9: number
export const KEY_KP_Add: number
export const KEY_KP_Begin: number
export const KEY_KP_Decimal: number
export const KEY_KP_Delete: number
export const KEY_KP_Divide: number
export const KEY_KP_Down: number
export const KEY_KP_End: number
export const KEY_KP_Enter: number
export const KEY_KP_Equal: number
export const KEY_KP_F1: number
export const KEY_KP_F2: number
export const KEY_KP_F3: number
export const KEY_KP_F4: number
export const KEY_KP_Home: number
export const KEY_KP_Insert: number
export const KEY_KP_Left: number
export const KEY_KP_Multiply: number
export const KEY_KP_Next: number
export const KEY_KP_Page_Down: number
export const KEY_KP_Page_Up: number
export const KEY_KP_Prior: number
export const KEY_KP_Right: number
export const KEY_KP_Separator: number
export const KEY_KP_Space: number
export const KEY_KP_Subtract: number
export const KEY_KP_Tab: number
export const KEY_KP_Up: number
export const KEY_Kana_Lock: number
export const KEY_Kana_Shift: number
export const KEY_Kanji: number
export const KEY_Kanji_Bangou: number
export const KEY_Katakana: number
export const KEY_KbdBrightnessDown: number
export const KEY_KbdBrightnessUp: number
export const KEY_KbdLightOnOff: number
export const KEY_Kcedilla: number
export const KEY_Korean_Won: number
export const KEY_L: number
export const KEY_L1: number
export const KEY_L10: number
export const KEY_L2: number
export const KEY_L3: number
export const KEY_L4: number
export const KEY_L5: number
export const KEY_L6: number
export const KEY_L7: number
export const KEY_L8: number
export const KEY_L9: number
export const KEY_Lacute: number
export const KEY_Last_Virtual_Screen: number
export const KEY_Launch0: number
export const KEY_Launch1: number
export const KEY_Launch2: number
export const KEY_Launch3: number
export const KEY_Launch4: number
export const KEY_Launch5: number
export const KEY_Launch6: number
export const KEY_Launch7: number
export const KEY_Launch8: number
export const KEY_Launch9: number
export const KEY_LaunchA: number
export const KEY_LaunchB: number
export const KEY_LaunchC: number
export const KEY_LaunchD: number
export const KEY_LaunchE: number
export const KEY_LaunchF: number
export const KEY_Lbelowdot: number
export const KEY_Lcaron: number
export const KEY_Lcedilla: number
export const KEY_Left: number
export const KEY_LightBulb: number
export const KEY_Linefeed: number
export const KEY_LiraSign: number
export const KEY_LogOff: number
export const KEY_Lstroke: number
export const KEY_M: number
export const KEY_Mabovedot: number
export const KEY_Macedonia_DSE: number
export const KEY_Macedonia_GJE: number
export const KEY_Macedonia_KJE: number
export const KEY_Macedonia_dse: number
export const KEY_Macedonia_gje: number
export const KEY_Macedonia_kje: number
export const KEY_Mae_Koho: number
export const KEY_Mail: number
export const KEY_MailForward: number
export const KEY_Market: number
export const KEY_Massyo: number
export const KEY_Meeting: number
export const KEY_Memo: number
export const KEY_Menu: number
export const KEY_MenuKB: number
export const KEY_MenuPB: number
export const KEY_Messenger: number
export const KEY_Meta_L: number
export const KEY_Meta_R: number
export const KEY_MillSign: number
export const KEY_ModeLock: number
export const KEY_Mode_switch: number
export const KEY_MonBrightnessDown: number
export const KEY_MonBrightnessUp: number
export const KEY_MouseKeys_Accel_Enable: number
export const KEY_MouseKeys_Enable: number
export const KEY_Muhenkan: number
export const KEY_Multi_key: number
export const KEY_MultipleCandidate: number
export const KEY_Music: number
export const KEY_MyComputer: number
export const KEY_MySites: number
export const KEY_N: number
export const KEY_Nacute: number
export const KEY_NairaSign: number
export const KEY_Ncaron: number
export const KEY_Ncedilla: number
export const KEY_New: number
export const KEY_NewSheqelSign: number
export const KEY_News: number
export const KEY_Next: number
export const KEY_Next_VMode: number
export const KEY_Next_Virtual_Screen: number
export const KEY_Ntilde: number
export const KEY_Num_Lock: number
export const KEY_O: number
export const KEY_OE: number
export const KEY_Oacute: number
export const KEY_Obarred: number
export const KEY_Obelowdot: number
export const KEY_Ocaron: number
export const KEY_Ocircumflex: number
export const KEY_Ocircumflexacute: number
export const KEY_Ocircumflexbelowdot: number
export const KEY_Ocircumflexgrave: number
export const KEY_Ocircumflexhook: number
export const KEY_Ocircumflextilde: number
export const KEY_Odiaeresis: number
export const KEY_Odoubleacute: number
export const KEY_OfficeHome: number
export const KEY_Ograve: number
export const KEY_Ohook: number
export const KEY_Ohorn: number
export const KEY_Ohornacute: number
export const KEY_Ohornbelowdot: number
export const KEY_Ohorngrave: number
export const KEY_Ohornhook: number
export const KEY_Ohorntilde: number
export const KEY_Omacron: number
export const KEY_Ooblique: number
export const KEY_Open: number
export const KEY_OpenURL: number
export const KEY_Option: number
export const KEY_Oslash: number
export const KEY_Otilde: number
export const KEY_Overlay1_Enable: number
export const KEY_Overlay2_Enable: number
export const KEY_P: number
export const KEY_Pabovedot: number
export const KEY_Page_Down: number
export const KEY_Page_Up: number
export const KEY_Paste: number
export const KEY_Pause: number
export const KEY_PesetaSign: number
export const KEY_Phone: number
export const KEY_Pictures: number
export const KEY_Pointer_Accelerate: number
export const KEY_Pointer_Button1: number
export const KEY_Pointer_Button2: number
export const KEY_Pointer_Button3: number
export const KEY_Pointer_Button4: number
export const KEY_Pointer_Button5: number
export const KEY_Pointer_Button_Dflt: number
export const KEY_Pointer_DblClick1: number
export const KEY_Pointer_DblClick2: number
export const KEY_Pointer_DblClick3: number
export const KEY_Pointer_DblClick4: number
export const KEY_Pointer_DblClick5: number
export const KEY_Pointer_DblClick_Dflt: number
export const KEY_Pointer_DfltBtnNext: number
export const KEY_Pointer_DfltBtnPrev: number
export const KEY_Pointer_Down: number
export const KEY_Pointer_DownLeft: number
export const KEY_Pointer_DownRight: number
export const KEY_Pointer_Drag1: number
export const KEY_Pointer_Drag2: number
export const KEY_Pointer_Drag3: number
export const KEY_Pointer_Drag4: number
export const KEY_Pointer_Drag5: number
export const KEY_Pointer_Drag_Dflt: number
export const KEY_Pointer_EnableKeys: number
export const KEY_Pointer_Left: number
export const KEY_Pointer_Right: number
export const KEY_Pointer_Up: number
export const KEY_Pointer_UpLeft: number
export const KEY_Pointer_UpRight: number
export const KEY_PowerDown: number
export const KEY_PowerOff: number
export const KEY_Prev_VMode: number
export const KEY_Prev_Virtual_Screen: number
export const KEY_PreviousCandidate: number
export const KEY_Print: number
export const KEY_Prior: number
export const KEY_Q: number
export const KEY_R: number
export const KEY_R1: number
export const KEY_R10: number
export const KEY_R11: number
export const KEY_R12: number
export const KEY_R13: number
export const KEY_R14: number
export const KEY_R15: number
export const KEY_R2: number
export const KEY_R3: number
export const KEY_R4: number
export const KEY_R5: number
export const KEY_R6: number
export const KEY_R7: number
export const KEY_R8: number
export const KEY_R9: number
export const KEY_Racute: number
export const KEY_Rcaron: number
export const KEY_Rcedilla: number
export const KEY_Red: number
export const KEY_Redo: number
export const KEY_Refresh: number
export const KEY_Reload: number
export const KEY_RepeatKeys_Enable: number
export const KEY_Reply: number
export const KEY_Return: number
export const KEY_Right: number
export const KEY_RockerDown: number
export const KEY_RockerEnter: number
export const KEY_RockerUp: number
export const KEY_Romaji: number
export const KEY_RotateWindows: number
export const KEY_RotationKB: number
export const KEY_RotationPB: number
export const KEY_RupeeSign: number
export const KEY_S: number
export const KEY_SCHWA: number
export const KEY_Sabovedot: number
export const KEY_Sacute: number
export const KEY_Save: number
export const KEY_Scaron: number
export const KEY_Scedilla: number
export const KEY_Scircumflex: number
export const KEY_ScreenSaver: number
export const KEY_ScrollClick: number
export const KEY_ScrollDown: number
export const KEY_ScrollUp: number
export const KEY_Scroll_Lock: number
export const KEY_Search: number
export const KEY_Select: number
export const KEY_SelectButton: number
export const KEY_Send: number
export const KEY_Serbian_DJE: number
export const KEY_Serbian_DZE: number
export const KEY_Serbian_JE: number
export const KEY_Serbian_LJE: number
export const KEY_Serbian_NJE: number
export const KEY_Serbian_TSHE: number
export const KEY_Serbian_dje: number
export const KEY_Serbian_dze: number
export const KEY_Serbian_je: number
export const KEY_Serbian_lje: number
export const KEY_Serbian_nje: number
export const KEY_Serbian_tshe: number
export const KEY_Shift_L: number
export const KEY_Shift_Lock: number
export const KEY_Shift_R: number
export const KEY_Shop: number
export const KEY_SingleCandidate: number
export const KEY_Sleep: number
export const KEY_SlowKeys_Enable: number
export const KEY_Spell: number
export const KEY_SplitScreen: number
export const KEY_Standby: number
export const KEY_Start: number
export const KEY_StickyKeys_Enable: number
export const KEY_Stop: number
export const KEY_Subtitle: number
export const KEY_Super_L: number
export const KEY_Super_R: number
export const KEY_Support: number
export const KEY_Suspend: number
export const KEY_Switch_VT_1: number
export const KEY_Switch_VT_10: number
export const KEY_Switch_VT_11: number
export const KEY_Switch_VT_12: number
export const KEY_Switch_VT_2: number
export const KEY_Switch_VT_3: number
export const KEY_Switch_VT_4: number
export const KEY_Switch_VT_5: number
export const KEY_Switch_VT_6: number
export const KEY_Switch_VT_7: number
export const KEY_Switch_VT_8: number
export const KEY_Switch_VT_9: number
export const KEY_Sys_Req: number
export const KEY_T: number
export const KEY_THORN: number
export const KEY_Tab: number
export const KEY_Tabovedot: number
export const KEY_TaskPane: number
export const KEY_Tcaron: number
export const KEY_Tcedilla: number
export const KEY_Terminal: number
export const KEY_Terminate_Server: number
export const KEY_Thai_baht: number
export const KEY_Thai_bobaimai: number
export const KEY_Thai_chochan: number
export const KEY_Thai_chochang: number
export const KEY_Thai_choching: number
export const KEY_Thai_chochoe: number
export const KEY_Thai_dochada: number
export const KEY_Thai_dodek: number
export const KEY_Thai_fofa: number
export const KEY_Thai_fofan: number
export const KEY_Thai_hohip: number
export const KEY_Thai_honokhuk: number
export const KEY_Thai_khokhai: number
export const KEY_Thai_khokhon: number
export const KEY_Thai_khokhuat: number
export const KEY_Thai_khokhwai: number
export const KEY_Thai_khorakhang: number
export const KEY_Thai_kokai: number
export const KEY_Thai_lakkhangyao: number
export const KEY_Thai_lekchet: number
export const KEY_Thai_lekha: number
export const KEY_Thai_lekhok: number
export const KEY_Thai_lekkao: number
export const KEY_Thai_leknung: number
export const KEY_Thai_lekpaet: number
export const KEY_Thai_leksam: number
export const KEY_Thai_leksi: number
export const KEY_Thai_leksong: number
export const KEY_Thai_leksun: number
export const KEY_Thai_lochula: number
export const KEY_Thai_loling: number
export const KEY_Thai_lu: number
export const KEY_Thai_maichattawa: number
export const KEY_Thai_maiek: number
export const KEY_Thai_maihanakat: number
export const KEY_Thai_maihanakat_maitho: number
export const KEY_Thai_maitaikhu: number
export const KEY_Thai_maitho: number
export const KEY_Thai_maitri: number
export const KEY_Thai_maiyamok: number
export const KEY_Thai_moma: number
export const KEY_Thai_ngongu: number
export const KEY_Thai_nikhahit: number
export const KEY_Thai_nonen: number
export const KEY_Thai_nonu: number
export const KEY_Thai_oang: number
export const KEY_Thai_paiyannoi: number
export const KEY_Thai_phinthu: number
export const KEY_Thai_phophan: number
export const KEY_Thai_phophung: number
export const KEY_Thai_phosamphao: number
export const KEY_Thai_popla: number
export const KEY_Thai_rorua: number
export const KEY_Thai_ru: number
export const KEY_Thai_saraa: number
export const KEY_Thai_saraaa: number
export const KEY_Thai_saraae: number
export const KEY_Thai_saraaimaimalai: number
export const KEY_Thai_saraaimaimuan: number
export const KEY_Thai_saraam: number
export const KEY_Thai_sarae: number
export const KEY_Thai_sarai: number
export const KEY_Thai_saraii: number
export const KEY_Thai_sarao: number
export const KEY_Thai_sarau: number
export const KEY_Thai_saraue: number
export const KEY_Thai_sarauee: number
export const KEY_Thai_sarauu: number
export const KEY_Thai_sorusi: number
export const KEY_Thai_sosala: number
export const KEY_Thai_soso: number
export const KEY_Thai_sosua: number
export const KEY_Thai_thanthakhat: number
export const KEY_Thai_thonangmontho: number
export const KEY_Thai_thophuthao: number
export const KEY_Thai_thothahan: number
export const KEY_Thai_thothan: number
export const KEY_Thai_thothong: number
export const KEY_Thai_thothung: number
export const KEY_Thai_topatak: number
export const KEY_Thai_totao: number
export const KEY_Thai_wowaen: number
export const KEY_Thai_yoyak: number
export const KEY_Thai_yoying: number
export const KEY_Thorn: number
export const KEY_Time: number
export const KEY_ToDoList: number
export const KEY_Tools: number
export const KEY_TopMenu: number
export const KEY_TouchpadToggle: number
export const KEY_Touroku: number
export const KEY_Travel: number
export const KEY_Tslash: number
export const KEY_U: number
export const KEY_UWB: number
export const KEY_Uacute: number
export const KEY_Ubelowdot: number
export const KEY_Ubreve: number
export const KEY_Ucircumflex: number
export const KEY_Udiaeresis: number
export const KEY_Udoubleacute: number
export const KEY_Ugrave: number
export const KEY_Uhook: number
export const KEY_Uhorn: number
export const KEY_Uhornacute: number
export const KEY_Uhornbelowdot: number
export const KEY_Uhorngrave: number
export const KEY_Uhornhook: number
export const KEY_Uhorntilde: number
export const KEY_Ukrainian_GHE_WITH_UPTURN: number
export const KEY_Ukrainian_I: number
export const KEY_Ukrainian_IE: number
export const KEY_Ukrainian_YI: number
export const KEY_Ukrainian_ghe_with_upturn: number
export const KEY_Ukrainian_i: number
export const KEY_Ukrainian_ie: number
export const KEY_Ukrainian_yi: number
export const KEY_Ukranian_I: number
export const KEY_Ukranian_JE: number
export const KEY_Ukranian_YI: number
export const KEY_Ukranian_i: number
export const KEY_Ukranian_je: number
export const KEY_Ukranian_yi: number
export const KEY_Umacron: number
export const KEY_Undo: number
export const KEY_Ungrab: number
export const KEY_Uogonek: number
export const KEY_Up: number
export const KEY_Uring: number
export const KEY_User1KB: number
export const KEY_User2KB: number
export const KEY_UserPB: number
export const KEY_Utilde: number
export const KEY_V: number
export const KEY_VendorHome: number
export const KEY_Video: number
export const KEY_View: number
export const KEY_VoidSymbol: number
export const KEY_W: number
export const KEY_WLAN: number
export const KEY_WWW: number
export const KEY_Wacute: number
export const KEY_WakeUp: number
export const KEY_Wcircumflex: number
export const KEY_Wdiaeresis: number
export const KEY_WebCam: number
export const KEY_Wgrave: number
export const KEY_WheelButton: number
export const KEY_WindowClear: number
export const KEY_WonSign: number
export const KEY_Word: number
export const KEY_X: number
export const KEY_Xabovedot: number
export const KEY_Xfer: number
export const KEY_Y: number
export const KEY_Yacute: number
export const KEY_Ybelowdot: number
export const KEY_Ycircumflex: number
export const KEY_Ydiaeresis: number
export const KEY_Yellow: number
export const KEY_Ygrave: number
export const KEY_Yhook: number
export const KEY_Ytilde: number
export const KEY_Z: number
export const KEY_Zabovedot: number
export const KEY_Zacute: number
export const KEY_Zcaron: number
export const KEY_Zen_Koho: number
export const KEY_Zenkaku: number
export const KEY_Zenkaku_Hankaku: number
export const KEY_ZoomIn: number
export const KEY_ZoomOut: number
export const KEY_Zstroke: number
export const KEY_a: number
export const KEY_aacute: number
export const KEY_abelowdot: number
export const KEY_abovedot: number
export const KEY_abreve: number
export const KEY_abreveacute: number
export const KEY_abrevebelowdot: number
export const KEY_abrevegrave: number
export const KEY_abrevehook: number
export const KEY_abrevetilde: number
export const KEY_acircumflex: number
export const KEY_acircumflexacute: number
export const KEY_acircumflexbelowdot: number
export const KEY_acircumflexgrave: number
export const KEY_acircumflexhook: number
export const KEY_acircumflextilde: number
export const KEY_acute: number
export const KEY_adiaeresis: number
export const KEY_ae: number
export const KEY_agrave: number
export const KEY_ahook: number
export const KEY_amacron: number
export const KEY_ampersand: number
export const KEY_aogonek: number
export const KEY_apostrophe: number
export const KEY_approxeq: number
export const KEY_approximate: number
export const KEY_aring: number
export const KEY_asciicircum: number
export const KEY_asciitilde: number
export const KEY_asterisk: number
export const KEY_at: number
export const KEY_atilde: number
export const KEY_b: number
export const KEY_babovedot: number
export const KEY_backslash: number
export const KEY_ballotcross: number
export const KEY_bar: number
export const KEY_because: number
export const KEY_blank: number
export const KEY_botintegral: number
export const KEY_botleftparens: number
export const KEY_botleftsqbracket: number
export const KEY_botleftsummation: number
export const KEY_botrightparens: number
export const KEY_botrightsqbracket: number
export const KEY_botrightsummation: number
export const KEY_bott: number
export const KEY_botvertsummationconnector: number
export const KEY_braceleft: number
export const KEY_braceright: number
export const KEY_bracketleft: number
export const KEY_bracketright: number
export const KEY_braille_blank: number
export const KEY_braille_dot_1: number
export const KEY_braille_dot_10: number
export const KEY_braille_dot_2: number
export const KEY_braille_dot_3: number
export const KEY_braille_dot_4: number
export const KEY_braille_dot_5: number
export const KEY_braille_dot_6: number
export const KEY_braille_dot_7: number
export const KEY_braille_dot_8: number
export const KEY_braille_dot_9: number
export const KEY_braille_dots_1: number
export const KEY_braille_dots_12: number
export const KEY_braille_dots_123: number
export const KEY_braille_dots_1234: number
export const KEY_braille_dots_12345: number
export const KEY_braille_dots_123456: number
export const KEY_braille_dots_1234567: number
export const KEY_braille_dots_12345678: number
export const KEY_braille_dots_1234568: number
export const KEY_braille_dots_123457: number
export const KEY_braille_dots_1234578: number
export const KEY_braille_dots_123458: number
export const KEY_braille_dots_12346: number
export const KEY_braille_dots_123467: number
export const KEY_braille_dots_1234678: number
export const KEY_braille_dots_123468: number
export const KEY_braille_dots_12347: number
export const KEY_braille_dots_123478: number
export const KEY_braille_dots_12348: number
export const KEY_braille_dots_1235: number
export const KEY_braille_dots_12356: number
export const KEY_braille_dots_123567: number
export const KEY_braille_dots_1235678: number
export const KEY_braille_dots_123568: number
export const KEY_braille_dots_12357: number
export const KEY_braille_dots_123578: number
export const KEY_braille_dots_12358: number
export const KEY_braille_dots_1236: number
export const KEY_braille_dots_12367: number
export const KEY_braille_dots_123678: number
export const KEY_braille_dots_12368: number
export const KEY_braille_dots_1237: number
export const KEY_braille_dots_12378: number
export const KEY_braille_dots_1238: number
export const KEY_braille_dots_124: number
export const KEY_braille_dots_1245: number
export const KEY_braille_dots_12456: number
export const KEY_braille_dots_124567: number
export const KEY_braille_dots_1245678: number
export const KEY_braille_dots_124568: number
export const KEY_braille_dots_12457: number
export const KEY_braille_dots_124578: number
export const KEY_braille_dots_12458: number
export const KEY_braille_dots_1246: number
export const KEY_braille_dots_12467: number
export const KEY_braille_dots_124678: number
export const KEY_braille_dots_12468: number
export const KEY_braille_dots_1247: number
export const KEY_braille_dots_12478: number
export const KEY_braille_dots_1248: number
export const KEY_braille_dots_125: number
export const KEY_braille_dots_1256: number
export const KEY_braille_dots_12567: number
export const KEY_braille_dots_125678: number
export const KEY_braille_dots_12568: number
export const KEY_braille_dots_1257: number
export const KEY_braille_dots_12578: number
export const KEY_braille_dots_1258: number
export const KEY_braille_dots_126: number
export const KEY_braille_dots_1267: number
export const KEY_braille_dots_12678: number
export const KEY_braille_dots_1268: number
export const KEY_braille_dots_127: number
export const KEY_braille_dots_1278: number
export const KEY_braille_dots_128: number
export const KEY_braille_dots_13: number
export const KEY_braille_dots_134: number
export const KEY_braille_dots_1345: number
export const KEY_braille_dots_13456: number
export const KEY_braille_dots_134567: number
export const KEY_braille_dots_1345678: number
export const KEY_braille_dots_134568: number
export const KEY_braille_dots_13457: number
export const KEY_braille_dots_134578: number
export const KEY_braille_dots_13458: number
export const KEY_braille_dots_1346: number
export const KEY_braille_dots_13467: number
export const KEY_braille_dots_134678: number
export const KEY_braille_dots_13468: number
export const KEY_braille_dots_1347: number
export const KEY_braille_dots_13478: number
export const KEY_braille_dots_1348: number
export const KEY_braille_dots_135: number
export const KEY_braille_dots_1356: number
export const KEY_braille_dots_13567: number
export const KEY_braille_dots_135678: number
export const KEY_braille_dots_13568: number
export const KEY_braille_dots_1357: number
export const KEY_braille_dots_13578: number
export const KEY_braille_dots_1358: number
export const KEY_braille_dots_136: number
export const KEY_braille_dots_1367: number
export const KEY_braille_dots_13678: number
export const KEY_braille_dots_1368: number
export const KEY_braille_dots_137: number
export const KEY_braille_dots_1378: number
export const KEY_braille_dots_138: number
export const KEY_braille_dots_14: number
export const KEY_braille_dots_145: number
export const KEY_braille_dots_1456: number
export const KEY_braille_dots_14567: number
export const KEY_braille_dots_145678: number
export const KEY_braille_dots_14568: number
export const KEY_braille_dots_1457: number
export const KEY_braille_dots_14578: number
export const KEY_braille_dots_1458: number
export const KEY_braille_dots_146: number
export const KEY_braille_dots_1467: number
export const KEY_braille_dots_14678: number
export const KEY_braille_dots_1468: number
export const KEY_braille_dots_147: number
export const KEY_braille_dots_1478: number
export const KEY_braille_dots_148: number
export const KEY_braille_dots_15: number
export const KEY_braille_dots_156: number
export const KEY_braille_dots_1567: number
export const KEY_braille_dots_15678: number
export const KEY_braille_dots_1568: number
export const KEY_braille_dots_157: number
export const KEY_braille_dots_1578: number
export const KEY_braille_dots_158: number
export const KEY_braille_dots_16: number
export const KEY_braille_dots_167: number
export const KEY_braille_dots_1678: number
export const KEY_braille_dots_168: number
export const KEY_braille_dots_17: number
export const KEY_braille_dots_178: number
export const KEY_braille_dots_18: number
export const KEY_braille_dots_2: number
export const KEY_braille_dots_23: number
export const KEY_braille_dots_234: number
export const KEY_braille_dots_2345: number
export const KEY_braille_dots_23456: number
export const KEY_braille_dots_234567: number
export const KEY_braille_dots_2345678: number
export const KEY_braille_dots_234568: number
export const KEY_braille_dots_23457: number
export const KEY_braille_dots_234578: number
export const KEY_braille_dots_23458: number
export const KEY_braille_dots_2346: number
export const KEY_braille_dots_23467: number
export const KEY_braille_dots_234678: number
export const KEY_braille_dots_23468: number
export const KEY_braille_dots_2347: number
export const KEY_braille_dots_23478: number
export const KEY_braille_dots_2348: number
export const KEY_braille_dots_235: number
export const KEY_braille_dots_2356: number
export const KEY_braille_dots_23567: number
export const KEY_braille_dots_235678: number
export const KEY_braille_dots_23568: number
export const KEY_braille_dots_2357: number
export const KEY_braille_dots_23578: number
export const KEY_braille_dots_2358: number
export const KEY_braille_dots_236: number
export const KEY_braille_dots_2367: number
export const KEY_braille_dots_23678: number
export const KEY_braille_dots_2368: number
export const KEY_braille_dots_237: number
export const KEY_braille_dots_2378: number
export const KEY_braille_dots_238: number
export const KEY_braille_dots_24: number
export const KEY_braille_dots_245: number
export const KEY_braille_dots_2456: number
export const KEY_braille_dots_24567: number
export const KEY_braille_dots_245678: number
export const KEY_braille_dots_24568: number
export const KEY_braille_dots_2457: number
export const KEY_braille_dots_24578: number
export const KEY_braille_dots_2458: number
export const KEY_braille_dots_246: number
export const KEY_braille_dots_2467: number
export const KEY_braille_dots_24678: number
export const KEY_braille_dots_2468: number
export const KEY_braille_dots_247: number
export const KEY_braille_dots_2478: number
export const KEY_braille_dots_248: number
export const KEY_braille_dots_25: number
export const KEY_braille_dots_256: number
export const KEY_braille_dots_2567: number
export const KEY_braille_dots_25678: number
export const KEY_braille_dots_2568: number
export const KEY_braille_dots_257: number
export const KEY_braille_dots_2578: number
export const KEY_braille_dots_258: number
export const KEY_braille_dots_26: number
export const KEY_braille_dots_267: number
export const KEY_braille_dots_2678: number
export const KEY_braille_dots_268: number
export const KEY_braille_dots_27: number
export const KEY_braille_dots_278: number
export const KEY_braille_dots_28: number
export const KEY_braille_dots_3: number
export const KEY_braille_dots_34: number
export const KEY_braille_dots_345: number
export const KEY_braille_dots_3456: number
export const KEY_braille_dots_34567: number
export const KEY_braille_dots_345678: number
export const KEY_braille_dots_34568: number
export const KEY_braille_dots_3457: number
export const KEY_braille_dots_34578: number
export const KEY_braille_dots_3458: number
export const KEY_braille_dots_346: number
export const KEY_braille_dots_3467: number
export const KEY_braille_dots_34678: number
export const KEY_braille_dots_3468: number
export const KEY_braille_dots_347: number
export const KEY_braille_dots_3478: number
export const KEY_braille_dots_348: number
export const KEY_braille_dots_35: number
export const KEY_braille_dots_356: number
export const KEY_braille_dots_3567: number
export const KEY_braille_dots_35678: number
export const KEY_braille_dots_3568: number
export const KEY_braille_dots_357: number
export const KEY_braille_dots_3578: number
export const KEY_braille_dots_358: number
export const KEY_braille_dots_36: number
export const KEY_braille_dots_367: number
export const KEY_braille_dots_3678: number
export const KEY_braille_dots_368: number
export const KEY_braille_dots_37: number
export const KEY_braille_dots_378: number
export const KEY_braille_dots_38: number
export const KEY_braille_dots_4: number
export const KEY_braille_dots_45: number
export const KEY_braille_dots_456: number
export const KEY_braille_dots_4567: number
export const KEY_braille_dots_45678: number
export const KEY_braille_dots_4568: number
export const KEY_braille_dots_457: number
export const KEY_braille_dots_4578: number
export const KEY_braille_dots_458: number
export const KEY_braille_dots_46: number
export const KEY_braille_dots_467: number
export const KEY_braille_dots_4678: number
export const KEY_braille_dots_468: number
export const KEY_braille_dots_47: number
export const KEY_braille_dots_478: number
export const KEY_braille_dots_48: number
export const KEY_braille_dots_5: number
export const KEY_braille_dots_56: number
export const KEY_braille_dots_567: number
export const KEY_braille_dots_5678: number
export const KEY_braille_dots_568: number
export const KEY_braille_dots_57: number
export const KEY_braille_dots_578: number
export const KEY_braille_dots_58: number
export const KEY_braille_dots_6: number
export const KEY_braille_dots_67: number
export const KEY_braille_dots_678: number
export const KEY_braille_dots_68: number
export const KEY_braille_dots_7: number
export const KEY_braille_dots_78: number
export const KEY_braille_dots_8: number
export const KEY_breve: number
export const KEY_brokenbar: number
export const KEY_c: number
export const KEY_cabovedot: number
export const KEY_cacute: number
export const KEY_careof: number
export const KEY_caret: number
export const KEY_caron: number
export const KEY_ccaron: number
export const KEY_ccedilla: number
export const KEY_ccircumflex: number
export const KEY_cedilla: number
export const KEY_cent: number
export const KEY_checkerboard: number
export const KEY_checkmark: number
export const KEY_circle: number
export const KEY_club: number
export const KEY_colon: number
export const KEY_comma: number
export const KEY_containsas: number
export const KEY_copyright: number
export const KEY_cr: number
export const KEY_crossinglines: number
export const KEY_cuberoot: number
export const KEY_currency: number
export const KEY_cursor: number
export const KEY_d: number
export const KEY_dabovedot: number
export const KEY_dagger: number
export const KEY_dcaron: number
export const KEY_dead_A: number
export const KEY_dead_E: number
export const KEY_dead_I: number
export const KEY_dead_O: number
export const KEY_dead_U: number
export const KEY_dead_a: number
export const KEY_dead_abovecomma: number
export const KEY_dead_abovedot: number
export const KEY_dead_abovereversedcomma: number
export const KEY_dead_abovering: number
export const KEY_dead_acute: number
export const KEY_dead_belowbreve: number
export const KEY_dead_belowcircumflex: number
export const KEY_dead_belowcomma: number
export const KEY_dead_belowdiaeresis: number
export const KEY_dead_belowdot: number
export const KEY_dead_belowmacron: number
export const KEY_dead_belowring: number
export const KEY_dead_belowtilde: number
export const KEY_dead_breve: number
export const KEY_dead_capital_schwa: number
export const KEY_dead_caron: number
export const KEY_dead_cedilla: number
export const KEY_dead_circumflex: number
export const KEY_dead_currency: number
export const KEY_dead_dasia: number
export const KEY_dead_diaeresis: number
export const KEY_dead_doubleacute: number
export const KEY_dead_doublegrave: number
export const KEY_dead_e: number
export const KEY_dead_grave: number
export const KEY_dead_hook: number
export const KEY_dead_horn: number
export const KEY_dead_i: number
export const KEY_dead_invertedbreve: number
export const KEY_dead_iota: number
export const KEY_dead_macron: number
export const KEY_dead_o: number
export const KEY_dead_ogonek: number
export const KEY_dead_perispomeni: number
export const KEY_dead_psili: number
export const KEY_dead_semivoiced_sound: number
export const KEY_dead_small_schwa: number
export const KEY_dead_stroke: number
export const KEY_dead_tilde: number
export const KEY_dead_u: number
export const KEY_dead_voiced_sound: number
export const KEY_decimalpoint: number
export const KEY_degree: number
export const KEY_diaeresis: number
export const KEY_diamond: number
export const KEY_digitspace: number
export const KEY_dintegral: number
export const KEY_division: number
export const KEY_dollar: number
export const KEY_doubbaselinedot: number
export const KEY_doubleacute: number
export const KEY_doubledagger: number
export const KEY_doublelowquotemark: number
export const KEY_downarrow: number
export const KEY_downcaret: number
export const KEY_downshoe: number
export const KEY_downstile: number
export const KEY_downtack: number
export const KEY_dstroke: number
export const KEY_e: number
export const KEY_eabovedot: number
export const KEY_eacute: number
export const KEY_ebelowdot: number
export const KEY_ecaron: number
export const KEY_ecircumflex: number
export const KEY_ecircumflexacute: number
export const KEY_ecircumflexbelowdot: number
export const KEY_ecircumflexgrave: number
export const KEY_ecircumflexhook: number
export const KEY_ecircumflextilde: number
export const KEY_ediaeresis: number
export const KEY_egrave: number
export const KEY_ehook: number
export const KEY_eightsubscript: number
export const KEY_eightsuperior: number
export const KEY_elementof: number
export const KEY_ellipsis: number
export const KEY_em3space: number
export const KEY_em4space: number
export const KEY_emacron: number
export const KEY_emdash: number
export const KEY_emfilledcircle: number
export const KEY_emfilledrect: number
export const KEY_emopencircle: number
export const KEY_emopenrectangle: number
export const KEY_emptyset: number
export const KEY_emspace: number
export const KEY_endash: number
export const KEY_enfilledcircbullet: number
export const KEY_enfilledsqbullet: number
export const KEY_eng: number
export const KEY_enopencircbullet: number
export const KEY_enopensquarebullet: number
export const KEY_enspace: number
export const KEY_eogonek: number
export const KEY_equal: number
export const KEY_eth: number
export const KEY_etilde: number
export const KEY_exclam: number
export const KEY_exclamdown: number
export const KEY_f: number
export const KEY_fabovedot: number
export const KEY_femalesymbol: number
export const KEY_ff: number
export const KEY_figdash: number
export const KEY_filledlefttribullet: number
export const KEY_filledrectbullet: number
export const KEY_filledrighttribullet: number
export const KEY_filledtribulletdown: number
export const KEY_filledtribulletup: number
export const KEY_fiveeighths: number
export const KEY_fivesixths: number
export const KEY_fivesubscript: number
export const KEY_fivesuperior: number
export const KEY_fourfifths: number
export const KEY_foursubscript: number
export const KEY_foursuperior: number
export const KEY_fourthroot: number
export const KEY_function: number
export const KEY_g: number
export const KEY_gabovedot: number
export const KEY_gbreve: number
export const KEY_gcaron: number
export const KEY_gcedilla: number
export const KEY_gcircumflex: number
export const KEY_grave: number
export const KEY_greater: number
export const KEY_greaterthanequal: number
export const KEY_guillemotleft: number
export const KEY_guillemotright: number
export const KEY_h: number
export const KEY_hairspace: number
export const KEY_hcircumflex: number
export const KEY_heart: number
export const KEY_hebrew_aleph: number
export const KEY_hebrew_ayin: number
export const KEY_hebrew_bet: number
export const KEY_hebrew_beth: number
export const KEY_hebrew_chet: number
export const KEY_hebrew_dalet: number
export const KEY_hebrew_daleth: number
export const KEY_hebrew_doublelowline: number
export const KEY_hebrew_finalkaph: number
export const KEY_hebrew_finalmem: number
export const KEY_hebrew_finalnun: number
export const KEY_hebrew_finalpe: number
export const KEY_hebrew_finalzade: number
export const KEY_hebrew_finalzadi: number
export const KEY_hebrew_gimel: number
export const KEY_hebrew_gimmel: number
export const KEY_hebrew_he: number
export const KEY_hebrew_het: number
export const KEY_hebrew_kaph: number
export const KEY_hebrew_kuf: number
export const KEY_hebrew_lamed: number
export const KEY_hebrew_mem: number
export const KEY_hebrew_nun: number
export const KEY_hebrew_pe: number
export const KEY_hebrew_qoph: number
export const KEY_hebrew_resh: number
export const KEY_hebrew_samech: number
export const KEY_hebrew_samekh: number
export const KEY_hebrew_shin: number
export const KEY_hebrew_taf: number
export const KEY_hebrew_taw: number
export const KEY_hebrew_tet: number
export const KEY_hebrew_teth: number
export const KEY_hebrew_waw: number
export const KEY_hebrew_yod: number
export const KEY_hebrew_zade: number
export const KEY_hebrew_zadi: number
export const KEY_hebrew_zain: number
export const KEY_hebrew_zayin: number
export const KEY_hexagram: number
export const KEY_horizconnector: number
export const KEY_horizlinescan1: number
export const KEY_horizlinescan3: number
export const KEY_horizlinescan5: number
export const KEY_horizlinescan7: number
export const KEY_horizlinescan9: number
export const KEY_hstroke: number
export const KEY_ht: number
export const KEY_hyphen: number
export const KEY_i: number
export const KEY_iTouch: number
export const KEY_iacute: number
export const KEY_ibelowdot: number
export const KEY_ibreve: number
export const KEY_icircumflex: number
export const KEY_identical: number
export const KEY_idiaeresis: number
export const KEY_idotless: number
export const KEY_ifonlyif: number
export const KEY_igrave: number
export const KEY_ihook: number
export const KEY_imacron: number
export const KEY_implies: number
export const KEY_includedin: number
export const KEY_includes: number
export const KEY_infinity: number
export const KEY_integral: number
export const KEY_intersection: number
export const KEY_iogonek: number
export const KEY_itilde: number
export const KEY_j: number
export const KEY_jcircumflex: number
export const KEY_jot: number
export const KEY_k: number
export const KEY_kana_A: number
export const KEY_kana_CHI: number
export const KEY_kana_E: number
export const KEY_kana_FU: number
export const KEY_kana_HA: number
export const KEY_kana_HE: number
export const KEY_kana_HI: number
export const KEY_kana_HO: number
export const KEY_kana_HU: number
export const KEY_kana_I: number
export const KEY_kana_KA: number
export const KEY_kana_KE: number
export const KEY_kana_KI: number
export const KEY_kana_KO: number
export const KEY_kana_KU: number
export const KEY_kana_MA: number
export const KEY_kana_ME: number
export const KEY_kana_MI: number
export const KEY_kana_MO: number
export const KEY_kana_MU: number
export const KEY_kana_N: number
export const KEY_kana_NA: number
export const KEY_kana_NE: number
export const KEY_kana_NI: number
export const KEY_kana_NO: number
export const KEY_kana_NU: number
export const KEY_kana_O: number
export const KEY_kana_RA: number
export const KEY_kana_RE: number
export const KEY_kana_RI: number
export const KEY_kana_RO: number
export const KEY_kana_RU: number
export const KEY_kana_SA: number
export const KEY_kana_SE: number
export const KEY_kana_SHI: number
export const KEY_kana_SO: number
export const KEY_kana_SU: number
export const KEY_kana_TA: number
export const KEY_kana_TE: number
export const KEY_kana_TI: number
export const KEY_kana_TO: number
export const KEY_kana_TSU: number
export const KEY_kana_TU: number
export const KEY_kana_U: number
export const KEY_kana_WA: number
export const KEY_kana_WO: number
export const KEY_kana_YA: number
export const KEY_kana_YO: number
export const KEY_kana_YU: number
export const KEY_kana_a: number
export const KEY_kana_closingbracket: number
export const KEY_kana_comma: number
export const KEY_kana_conjunctive: number
export const KEY_kana_e: number
export const KEY_kana_fullstop: number
export const KEY_kana_i: number
export const KEY_kana_middledot: number
export const KEY_kana_o: number
export const KEY_kana_openingbracket: number
export const KEY_kana_switch: number
export const KEY_kana_tsu: number
export const KEY_kana_tu: number
export const KEY_kana_u: number
export const KEY_kana_ya: number
export const KEY_kana_yo: number
export const KEY_kana_yu: number
export const KEY_kappa: number
export const KEY_kcedilla: number
export const KEY_kra: number
export const KEY_l: number
export const KEY_lacute: number
export const KEY_latincross: number
export const KEY_lbelowdot: number
export const KEY_lcaron: number
export const KEY_lcedilla: number
export const KEY_leftanglebracket: number
export const KEY_leftarrow: number
export const KEY_leftcaret: number
export const KEY_leftdoublequotemark: number
export const KEY_leftmiddlecurlybrace: number
export const KEY_leftopentriangle: number
export const KEY_leftpointer: number
export const KEY_leftradical: number
export const KEY_leftshoe: number
export const KEY_leftsinglequotemark: number
export const KEY_leftt: number
export const KEY_lefttack: number
export const KEY_less: number
export const KEY_lessthanequal: number
export const KEY_lf: number
export const KEY_logicaland: number
export const KEY_logicalor: number
export const KEY_lowleftcorner: number
export const KEY_lowrightcorner: number
export const KEY_lstroke: number
export const KEY_m: number
export const KEY_mabovedot: number
export const KEY_macron: number
export const KEY_malesymbol: number
export const KEY_maltesecross: number
export const KEY_marker: number
export const KEY_masculine: number
export const KEY_minus: number
export const KEY_minutes: number
export const KEY_mu: number
export const KEY_multiply: number
export const KEY_musicalflat: number
export const KEY_musicalsharp: number
export const KEY_n: number
export const KEY_nabla: number
export const KEY_nacute: number
export const KEY_ncaron: number
export const KEY_ncedilla: number
export const KEY_ninesubscript: number
export const KEY_ninesuperior: number
export const KEY_nl: number
export const KEY_nobreakspace: number
export const KEY_notapproxeq: number
export const KEY_notelementof: number
export const KEY_notequal: number
export const KEY_notidentical: number
export const KEY_notsign: number
export const KEY_ntilde: number
export const KEY_numbersign: number
export const KEY_numerosign: number
export const KEY_o: number
export const KEY_oacute: number
export const KEY_obarred: number
export const KEY_obelowdot: number
export const KEY_ocaron: number
export const KEY_ocircumflex: number
export const KEY_ocircumflexacute: number
export const KEY_ocircumflexbelowdot: number
export const KEY_ocircumflexgrave: number
export const KEY_ocircumflexhook: number
export const KEY_ocircumflextilde: number
export const KEY_odiaeresis: number
export const KEY_odoubleacute: number
export const KEY_oe: number
export const KEY_ogonek: number
export const KEY_ograve: number
export const KEY_ohook: number
export const KEY_ohorn: number
export const KEY_ohornacute: number
export const KEY_ohornbelowdot: number
export const KEY_ohorngrave: number
export const KEY_ohornhook: number
export const KEY_ohorntilde: number
export const KEY_omacron: number
export const KEY_oneeighth: number
export const KEY_onefifth: number
export const KEY_onehalf: number
export const KEY_onequarter: number
export const KEY_onesixth: number
export const KEY_onesubscript: number
export const KEY_onesuperior: number
export const KEY_onethird: number
export const KEY_ooblique: number
export const KEY_openrectbullet: number
export const KEY_openstar: number
export const KEY_opentribulletdown: number
export const KEY_opentribulletup: number
export const KEY_ordfeminine: number
export const KEY_oslash: number
export const KEY_otilde: number
export const KEY_overbar: number
export const KEY_overline: number
export const KEY_p: number
export const KEY_pabovedot: number
export const KEY_paragraph: number
export const KEY_parenleft: number
export const KEY_parenright: number
export const KEY_partdifferential: number
export const KEY_partialderivative: number
export const KEY_percent: number
export const KEY_period: number
export const KEY_periodcentered: number
export const KEY_phonographcopyright: number
export const KEY_plus: number
export const KEY_plusminus: number
export const KEY_prescription: number
export const KEY_prolongedsound: number
export const KEY_punctspace: number
export const KEY_q: number
export const KEY_quad: number
export const KEY_question: number
export const KEY_questiondown: number
export const KEY_quotedbl: number
export const KEY_quoteleft: number
export const KEY_quoteright: number
export const KEY_r: number
export const KEY_racute: number
export const KEY_radical: number
export const KEY_rcaron: number
export const KEY_rcedilla: number
export const KEY_registered: number
export const KEY_rightanglebracket: number
export const KEY_rightarrow: number
export const KEY_rightcaret: number
export const KEY_rightdoublequotemark: number
export const KEY_rightmiddlecurlybrace: number
export const KEY_rightmiddlesummation: number
export const KEY_rightopentriangle: number
export const KEY_rightpointer: number
export const KEY_rightshoe: number
export const KEY_rightsinglequotemark: number
export const KEY_rightt: number
export const KEY_righttack: number
export const KEY_s: number
export const KEY_sabovedot: number
export const KEY_sacute: number
export const KEY_scaron: number
export const KEY_scedilla: number
export const KEY_schwa: number
export const KEY_scircumflex: number
export const KEY_script_switch: number
export const KEY_seconds: number
export const KEY_section: number
export const KEY_semicolon: number
export const KEY_semivoicedsound: number
export const KEY_seveneighths: number
export const KEY_sevensubscript: number
export const KEY_sevensuperior: number
export const KEY_signaturemark: number
export const KEY_signifblank: number
export const KEY_similarequal: number
export const KEY_singlelowquotemark: number
export const KEY_sixsubscript: number
export const KEY_sixsuperior: number
export const KEY_slash: number
export const KEY_soliddiamond: number
export const KEY_space: number
export const KEY_squareroot: number
export const KEY_ssharp: number
export const KEY_sterling: number
export const KEY_stricteq: number
export const KEY_t: number
export const KEY_tabovedot: number
export const KEY_tcaron: number
export const KEY_tcedilla: number
export const KEY_telephone: number
export const KEY_telephonerecorder: number
export const KEY_therefore: number
export const KEY_thinspace: number
export const KEY_thorn: number
export const KEY_threeeighths: number
export const KEY_threefifths: number
export const KEY_threequarters: number
export const KEY_threesubscript: number
export const KEY_threesuperior: number
export const KEY_tintegral: number
export const KEY_topintegral: number
export const KEY_topleftparens: number
export const KEY_topleftradical: number
export const KEY_topleftsqbracket: number
export const KEY_topleftsummation: number
export const KEY_toprightparens: number
export const KEY_toprightsqbracket: number
export const KEY_toprightsummation: number
export const KEY_topt: number
export const KEY_topvertsummationconnector: number
export const KEY_trademark: number
export const KEY_trademarkincircle: number
export const KEY_tslash: number
export const KEY_twofifths: number
export const KEY_twosubscript: number
export const KEY_twosuperior: number
export const KEY_twothirds: number
export const KEY_u: number
export const KEY_uacute: number
export const KEY_ubelowdot: number
export const KEY_ubreve: number
export const KEY_ucircumflex: number
export const KEY_udiaeresis: number
export const KEY_udoubleacute: number
export const KEY_ugrave: number
export const KEY_uhook: number
export const KEY_uhorn: number
export const KEY_uhornacute: number
export const KEY_uhornbelowdot: number
export const KEY_uhorngrave: number
export const KEY_uhornhook: number
export const KEY_uhorntilde: number
export const KEY_umacron: number
export const KEY_underbar: number
export const KEY_underscore: number
export const KEY_union: number
export const KEY_uogonek: number
export const KEY_uparrow: number
export const KEY_upcaret: number
export const KEY_upleftcorner: number
export const KEY_uprightcorner: number
export const KEY_upshoe: number
export const KEY_upstile: number
export const KEY_uptack: number
export const KEY_uring: number
export const KEY_utilde: number
export const KEY_v: number
export const KEY_variation: number
export const KEY_vertbar: number
export const KEY_vertconnector: number
export const KEY_voicedsound: number
export const KEY_vt: number
export const KEY_w: number
export const KEY_wacute: number
export const KEY_wcircumflex: number
export const KEY_wdiaeresis: number
export const KEY_wgrave: number
export const KEY_x: number
export const KEY_xabovedot: number
export const KEY_y: number
export const KEY_yacute: number
export const KEY_ybelowdot: number
export const KEY_ycircumflex: number
export const KEY_ydiaeresis: number
export const KEY_yen: number
export const KEY_ygrave: number
export const KEY_yhook: number
export const KEY_ytilde: number
export const KEY_z: number
export const KEY_zabovedot: number
export const KEY_zacute: number
export const KEY_zcaron: number
export const KEY_zerosubscript: number
export const KEY_zerosuperior: number
export const KEY_zstroke: number
export const MAX_TIMECOORD_AXES: number
export const NO_BG: Pixmap
export const PARENT_RELATIVE: number
export const PARENT_RELATIVE_BG: Pixmap
export const PRIORITY_REDRAW: number
/**
 * Appends gdk option entries to the passed in option group. This is
 * not public API and must not be used by applications.
 * @param group An option group.
 */
export function add_option_entries_libgtk_only(group: GLib.OptionGroup): void
/**
 * Emits a short beep on the default display.
 */
export function beep(): void
/**
 * Creates a Cairo context for drawing to `drawable`.
 * 
 * <note><para>
 * Note that due to double-buffering, Cairo contexts created
 * in a GTK+ expose event handler cannot be cached and reused
 * between different expose events.
 * </para></note>
 * @param drawable a #GdkDrawable
 * @returns A newly created Cairo context. Free with  cairo_destroy() when you are done drawing.
 */
export function cairo_create(drawable: Drawable): cairo.Context
/**
 * Adds the given rectangle to the current path of `cr`.
 * @param cr a #cairo_t
 * @param rectangle a #GdkRectangle
 */
export function cairo_rectangle(cr: cairo.Context, rectangle: Rectangle): void
/**
 * Adds the given region to the current path of `cr`.
 * @param cr a #cairo_t
 * @param region a #GdkRegion
 */
export function cairo_region(cr: cairo.Context, region: Region): void
/**
 * Resets the clip region for a Cairo context created by gdk_cairo_create().
 * 
 * This resets the clip region to the "empty" state for the given drawable.
 * This is required for non-native windows since a direct call to
 * cairo_reset_clip() would unset the clip region inherited from the
 * drawable (i.e. the window clip region), and thus let you e.g.
 * draw outside your window.
 * 
 * This is rarely needed though, since most code just create a new cairo_t
 * using gdk_cairo_create() each time they want to draw something.
 * @param cr a #cairo_t
 * @param drawable a #GdkDrawable
 */
export function cairo_reset_clip(cr: cairo.Context, drawable: Drawable): void
/**
 * Sets the specified #GdkColor as the source color of `cr`.
 * @param cr a #cairo_t
 * @param color a #GdkColor
 */
export function cairo_set_source_color(cr: cairo.Context, color: Color): void
/**
 * Sets the given pixbuf as the source pattern for the Cairo context.
 * The pattern has an extend mode of %CAIRO_EXTEND_NONE and is aligned
 * so that the origin of `pixbuf` is `pixbuf_x,` `pixbuf_y`
 * @param cr a #Cairo context
 * @param pixbuf a #GdkPixbuf
 * @param pixbuf_x X coordinate of location to place upper left corner of `pixbuf`
 * @param pixbuf_y Y coordinate of location to place upper left corner of `pixbuf`
 */
export function cairo_set_source_pixbuf(cr: cairo.Context, pixbuf: GdkPixbuf.Pixbuf, pixbuf_x: number, pixbuf_y: number): void
/**
 * Sets the given pixmap as the source pattern for the Cairo context.
 * The pattern has an extend mode of %CAIRO_EXTEND_NONE and is aligned
 * so that the origin of `pixmap` is `pixmap_x,` `pixmap_y`
 * @param cr a #Cairo context
 * @param pixmap a #GdkPixmap
 * @param pixmap_x X coordinate of location to place upper left corner of `pixmap`
 * @param pixmap_y Y coordinate of location to place upper left corner of `pixmap`
 */
export function cairo_set_source_pixmap(cr: cairo.Context, pixmap: Pixmap, pixmap_x: number, pixmap_y: number): void
/**
 * Sets the given window as the source pattern for the Cairo context.
 * The pattern has an extend mode of %CAIRO_EXTEND_NONE and is aligned
 * so that the origin of `window` is `x,` `y`. The window contains all its
 * subwindows when rendering.
 * 
 * Note that the contents of `window` are undefined outside of the
 * visible part of `window,` so use this function with care.
 * @param cr a #Cairo context
 * @param window a #GdkWindow
 * @param x X coordinate of location to place upper left corner of `window`
 * @param y Y coordinate of location to place upper left corner of `window`
 */
export function cairo_set_source_window(cr: cairo.Context, window: Window, x: number, y: number): void
/**
 * Determines the total height of a given character.
 * This value is not generally useful, because you cannot
 * determine how this total height will be drawn in
 * relation to the baseline. See gdk_text_extents().
 * @param font a #GdkFont
 * @param character the character to measure.
 * @returns the height of the character in pixels.
 */
export function char_height(font: Font, character: number): number
/**
 * Determines the distance from the origin to the rightmost
 * portion of a character when drawn. This is not the
 * correct value for determining the origin of the next
 * portion when drawing text in multiple pieces.
 * @param font a #GdkFont
 * @param character the character to measure.
 * @returns the right bearing of the character in pixels.
 */
export function char_measure(font: Font, character: number): number
/**
 * Determines the width of a given character.
 * @param font a #GdkFont
 * @param character the character to measure.
 * @returns the width of the character in pixels.
 */
export function char_width(font: Font, character: number): number
/**
 * Determines the width of a given wide character. (Encoded
 * in the wide-character encoding of the current locale).
 * @param font a #GdkFont
 * @param character the character to measure.
 * @returns the width of the character in pixels.
 */
export function char_width_wc(font: Font, character: WChar): number
/**
 * Allocates a single color from a colormap.
 * @param colormap a #GdkColormap.
 * @param color The color to allocate. On return, the    <structfield>pixel</structfield> field will be filled in.
 * @returns %TRUE if the allocation succeeded.
 */
export function color_alloc(colormap: Colormap, color: Color): number
/**
 * Returns the black color for a given colormap. The resulting
 * value has already been allocated.
 * @param colormap a #GdkColormap.
 * @param color the location to store the color.
 * @returns %TRUE if the allocation succeeded.
 */
export function color_black(colormap: Colormap, color: Color): number
/**
 * Changes the value of a color that has already
 * been allocated. If `colormap` is not a private
 * colormap, then the color must have been allocated
 * using gdk_colormap_alloc_colors() with the
 * `writeable` set to %TRUE.
 * @param colormap a #GdkColormap.
 * @param color a #GdkColor, with the color to change in the <structfield>pixel</structfield> field, and the new value in the remaining fields.
 * @returns %TRUE if the color was successfully changed.
 */
export function color_change(colormap: Colormap, color: Color): number
/**
 * Parses a textual specification of a color and fill in the
 * <structfield>red</structfield>, <structfield>green</structfield>,
 * and <structfield>blue</structfield> fields of a #GdkColor
 * structure. The color is <emphasis>not</emphasis> allocated, you
 * must call gdk_colormap_alloc_color() yourself. The string can
 * either one of a large set of standard names. (Taken from the X11
 * <filename>rgb.txt</filename> file), or it can be a hex value in the
 * form '&num;rgb' '&num;rrggbb' '&num;rrrgggbbb' or
 * '&num;rrrrggggbbbb' where 'r', 'g' and 'b' are hex digits of the
 * red, green, and blue components of the color, respectively. (White
 * in the four forms is '&num;fff' '&num;ffffff' '&num;fffffffff' and
 * '&num;ffffffffffff')
 * @param spec the string specifying the color.
 * @returns %TRUE if the parsing succeeded.
 */
export function color_parse(spec: string | null): [ /* returnType */ boolean, /* color */ Color ]
/**
 * Returns the white color for a given colormap. The resulting
 * value has already allocated been allocated.
 * @param colormap a #GdkColormap.
 * @param color the location to store the color.
 * @returns %TRUE if the allocation succeeded.
 */
export function color_white(colormap: Colormap, color: Color): number
/**
 * Allocates colors from a colormap. This function
 * is obsolete. See gdk_colormap_alloc_colors().
 * For full documentation of the fields, see
 * the Xlib documentation for <function>XAllocColorCells()</function>.
 * @param colormap a #GdkColormap.
 * @param contiguous if %TRUE, the colors should be allocated    in contiguous color cells.
 * @param planes an array in which to store the plane masks.
 * @param nplanes the number of planes to allocate. (Or zero,    to indicate that the color allocation should not be planar.)
 * @param pixels an array into which to store allocated pixel values.
 * @param npixels the number of pixels in each plane to allocate.
 * @returns %TRUE if the allocation was successful
 */
export function colors_alloc(colormap: Colormap, contiguous: boolean, planes: number, nplanes: number, pixels: number, npixels: number): number
/**
 * Frees colors allocated with gdk_colors_alloc(). This
 * function is obsolete. See gdk_colormap_free_colors().
 * @param colormap a #GdkColormap.
 * @param pixels the pixel values of the colors to free.
 * @param npixels the number of values in `pixels`.
 * @param planes the plane masks for all planes to free, OR'd together.
 */
export function colors_free(colormap: Colormap, pixels: number, npixels: number, planes: number): void
/**
 * Changes the value of the first `ncolors` colors in
 * a private colormap. This function is obsolete and
 * should not be used. See gdk_color_change().
 * @param colormap a #GdkColormap.
 * @param colors the new color values.
 * @param ncolors the number of colors to change.
 */
export function colors_store(colormap: Colormap, colors: Color, ncolors: number): void
/**
 * Returns the list of available input devices for the default display.
 * The list is statically allocated and should not be freed.
 * @returns a list of #GdkDevice
 */
export function devices_list(): Device[]
/**
 * Aborts a drag without dropping.
 * 
 * This function is called by the drag source.
 * @param context a #GdkDragContext.
 * @param time_ the timestamp for this operation.
 */
export function drag_abort(context: DragContext, time_: number): void
/**
 * Drops on the current destination.
 * 
 * This function is called by the drag source.
 * @param context a #GdkDragContext.
 * @param time_ the timestamp for this operation.
 */
export function drag_drop(context: DragContext, time_: number): void
/**
 * Returns whether the dropped data has been successfully
 * transferred. This function is intended to be used while
 * handling a %GDK_DROP_FINISHED event, its return value is
 * meaningless at other times.
 * @param context a #GdkDragContext
 * @returns %TRUE if the drop was successful.
 */
export function drag_drop_succeeded(context: DragContext): boolean
/**
 * Finds the destination window and DND protocol to use at the
 * given pointer position.
 * 
 * This function is called by the drag source to obtain the
 * `dest_window` and `protocol` parameters for gdk_drag_motion().
 * @param context a #GdkDragContext.
 * @param drag_window a window which may be at the pointer position, but      should be ignored, since it is put up by the drag source as an icon.
 * @param x_root the x position of the pointer in root coordinates.
 * @param y_root the y position of the pointer in root coordinates.
 */
export function drag_find_window(context: DragContext, drag_window: Window, x_root: number, y_root: number): [ /* dest_window */ Window, /* protocol */ DragProtocol ]
/**
 * Finds the destination window and DND protocol to use at the
 * given pointer position.
 * 
 * This function is called by the drag source to obtain the
 * `dest_window` and `protocol` parameters for gdk_drag_motion().
 * @param context a #GdkDragContext
 * @param drag_window a window which may be at the pointer position, but should be ignored, since it is put up by the drag source as an icon.
 * @param screen the screen where the destination window is sought.
 * @param x_root the x position of the pointer in root coordinates.
 * @param y_root the y position of the pointer in root coordinates.
 */
export function drag_find_window_for_screen(context: DragContext, drag_window: Window, screen: Screen, x_root: number, y_root: number): [ /* dest_window */ Window, /* protocol */ DragProtocol ]
/**
 * Finds out the DND protocol supported by a window.
 * @param xid the windowing system id of the destination window.
 * @param protocol location where the supported DND protocol is returned.
 * @returns the windowing system specific id for the window where    the drop should happen. This may be @xid or the id of a proxy    window, or zero if @xid doesn't support Drag and Drop.
 */
export function drag_get_protocol(xid: NativeWindow, protocol: DragProtocol): NativeWindow
/**
 * Finds out the DND protocol supported by a window.
 * @param display the #GdkDisplay where the destination window resides
 * @param xid the windowing system id of the destination window.
 * @param protocol location where the supported DND protocol is returned.
 * @returns the windowing system id of the window where the drop should happen. This     may be @xid or the id of a proxy window, or zero if @xid doesn't     support Drag and Drop.
 */
export function drag_get_protocol_for_display(display: Display, xid: NativeWindow, protocol: DragProtocol): NativeWindow
/**
 * Updates the drag context when the pointer moves or the
 * set of actions changes.
 * 
 * This function is called by the drag source.
 * @param context a #GdkDragContext.
 * @param dest_window the new destination window, obtained by     gdk_drag_find_window().
 * @param protocol the DND protocol in use, obtained by gdk_drag_find_window().
 * @param x_root the x position of the pointer in root coordinates.
 * @param y_root the y position of the pointer in root coordinates.
 * @param suggested_action the suggested action.
 * @param possible_actions the possible actions.
 * @param time_ the timestamp for this operation.
 * @returns FIXME
 */
export function drag_motion(context: DragContext, dest_window: Window, protocol: DragProtocol, x_root: number, y_root: number, suggested_action: DragAction, possible_actions: DragAction, time_: number): boolean
/**
 * Selects one of the actions offered by the drag source.
 * 
 * This function is called by the drag destination in response to
 * gdk_drag_motion() called by the drag source.
 * @param context a #GdkDragContext.
 * @param action the selected action which will be taken when a drop happens,    or 0 to indicate that a drop will not be accepted.
 * @param time_ the timestamp for this operation.
 */
export function drag_status(context: DragContext, action: DragAction, time_: number): void
/**
 * Draws an arc or a filled 'pie slice'. The arc is defined by the bounding
 * rectangle of the entire ellipse, and the start and end angles of the part
 * of the ellipse to be drawn.
 * @param drawable a #GdkDrawable (a #GdkWindow or a #GdkPixmap).
 * @param gc a #GdkGC.
 * @param filled %TRUE if the arc should be filled, producing a 'pie slice'.
 * @param x the x coordinate of the left edge of the bounding rectangle.
 * @param y the y coordinate of the top edge of the bounding rectangle.
 * @param width the width of the bounding rectangle.
 * @param height the height of the bounding rectangle.
 * @param angle1 the start angle of the arc, relative to the 3 o'clock position,     counter-clockwise, in 1/64ths of a degree.
 * @param angle2 the end angle of the arc, relative to `angle1`, in 1/64ths     of a degree.
 */
export function draw_arc(drawable: Drawable, gc: GC, filled: boolean, x: number, y: number, width: number, height: number, angle1: number, angle2: number): void
/**
 * Copies the `width` x `height` region of `src` at coordinates (`xsrc,`
 * `ysrc)` to coordinates (`xdest,` `ydest)` in `drawable`.
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
 * the stipple on the #GdkGC, set the fill mode to %GDK_STIPPLED, and
 * then draw the rectangle.
 * @param drawable a #GdkDrawable
 * @param gc a #GdkGC sharing the drawable's visual and colormap
 * @param src the source #GdkDrawable, which may be the same as `drawable`
 * @param xsrc X position in `src` of rectangle to draw
 * @param ysrc Y position in `src` of rectangle to draw
 * @param xdest X position in `drawable` where the rectangle should be drawn
 * @param ydest Y position in `drawable` where the rectangle should be drawn
 * @param width width of rectangle to draw, or -1 for entire `src` width
 * @param height height of rectangle to draw, or -1 for entire `src` height
 */
export function draw_drawable(drawable: Drawable, gc: GC, src: Drawable, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number): void
/**
 * This is a low-level function; 99% of text rendering should be done
 * using gdk_draw_layout() instead.
 * 
 * A glyph is a single image in a font. This function draws a sequence of
 * glyphs.  To obtain a sequence of glyphs you have to understand a
 * lot about internationalized text handling, which you don't want to
 * understand; thus, use gdk_draw_layout() instead of this function,
 * gdk_draw_layout() handles the details.
 * @param drawable a #GdkDrawable
 * @param gc a #GdkGC
 * @param font font to be used
 * @param x X coordinate of baseline origin
 * @param y Y coordinate of baseline origin
 * @param glyphs the glyph string to draw
 */
export function draw_glyphs(drawable: Drawable, gc: GC, font: Pango.Font, x: number, y: number, glyphs: Pango.GlyphString): void
/**
 * Renders a #PangoGlyphString onto a drawable, possibly
 * transforming the layed-out coordinates through a transformation
 * matrix. Note that the transformation matrix for `font` is not
 * changed, so to produce correct rendering results, the `font`
 * must have been loaded using a #PangoContext with an identical
 * transformation matrix to that passed in to this function.
 * 
 * See also gdk_draw_glyphs(), gdk_draw_layout().
 * @param drawable a #GdkDrawable
 * @param gc a #GdkGC
 * @param matrix a #PangoMatrix, or %NULL to use an identity transformation
 * @param font the font in which to draw the string
 * @param x the x position of the start of the string (in Pango           units in user space coordinates)
 * @param y the y position of the baseline (in Pango units           in user space coordinates)
 * @param glyphs the glyph string to draw
 */
export function draw_glyphs_transformed(drawable: Drawable, gc: GC, matrix: Pango.Matrix | null, font: Pango.Font, x: number, y: number, glyphs: Pango.GlyphString): void
export function draw_gray_image(drawable: Drawable, gc: GC, x: number, y: number, width: number, height: number, dith: RgbDither, buf: number, rowstride: number): void
/**
 * Draws a #GdkImage onto a drawable.
 * The depth of the #GdkImage must match the depth of the #GdkDrawable.
 * @param drawable a #GdkDrawable (a #GdkWindow or a #GdkPixmap).
 * @param gc a #GdkGC.
 * @param image the #GdkImage to draw.
 * @param xsrc the left edge of the source rectangle within `image`.
 * @param ysrc the top of the source rectangle within `image`.
 * @param xdest the x coordinate of the destination within `drawable`.
 * @param ydest the y coordinate of the destination within `drawable`.
 * @param width the width of the area to be copied, or -1 to make the area     extend to the right edge of `image`.
 * @param height the height of the area to be copied, or -1 to make the area     extend to the bottom edge of `image`.
 */
export function draw_image(drawable: Drawable, gc: GC, image: Image, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number): void
export function draw_indexed_image(drawable: Drawable, gc: GC, x: number, y: number, width: number, height: number, dith: RgbDither, buf: number, rowstride: number, cmap: RgbCmap): void
/**
 * Render a #PangoLayout onto a GDK drawable
 * 
 * If the layout's #PangoContext has a transformation matrix set, then
 * `x` and `y` specify the position of the top left corner of the
 * bounding box (in device space) of the transformed layout.
 * 
 * If you're using GTK+, the usual way to obtain a #PangoLayout
 * is gtk_widget_create_pango_layout().
 * @param drawable the drawable on which to draw string
 * @param gc base graphics context to use
 * @param x the X position of the left of the layout (in pixels)
 * @param y the Y position of the top of the layout (in pixels)
 * @param layout a #PangoLayout
 */
export function draw_layout(drawable: Drawable, gc: GC, x: number, y: number, layout: Pango.Layout): void
/**
 * Render a #PangoLayoutLine onto an GDK drawable
 * 
 * If the layout's #PangoContext has a transformation matrix set, then
 * `x` and `y` specify the position of the left edge of the baseline
 * (left is in before-tranform user coordinates) in after-transform
 * device coordinates.
 * @param drawable the drawable on which to draw the line
 * @param gc base graphics to use
 * @param x the x position of start of string (in pixels)
 * @param y the y position of baseline (in pixels)
 * @param line a #PangoLayoutLine
 */
export function draw_layout_line(drawable: Drawable, gc: GC, x: number, y: number, line: Pango.LayoutLine): void
/**
 * Render a #PangoLayoutLine onto a #GdkDrawable, overriding the
 * layout's normal colors with `foreground` and/or `background`.
 * `foreground` and `background` need not be allocated.
 * 
 * If the layout's #PangoContext has a transformation matrix set, then
 * `x` and `y` specify the position of the left edge of the baseline
 * (left is in before-tranform user coordinates) in after-transform
 * device coordinates.
 * @param drawable the drawable on which to draw the line
 * @param gc base graphics to use
 * @param x the x position of start of string (in pixels)
 * @param y the y position of baseline (in pixels)
 * @param line a #PangoLayoutLine
 * @param foreground foreground override color, or %NULL for none
 * @param background background override color, or %NULL for none
 */
export function draw_layout_line_with_colors(drawable: Drawable, gc: GC, x: number, y: number, line: Pango.LayoutLine, foreground: Color | null, background: Color | null): void
/**
 * Render a #PangoLayout onto a #GdkDrawable, overriding the
 * layout's normal colors with `foreground` and/or `background`.
 * `foreground` and `background` need not be allocated.
 * 
 * If the layout's #PangoContext has a transformation matrix set, then
 * `x` and `y` specify the position of the top left corner of the
 * bounding box (in device space) of the transformed layout.
 * 
 * If you're using GTK+, the ususal way to obtain a #PangoLayout
 * is gtk_widget_create_pango_layout().
 * @param drawable the drawable on which to draw string
 * @param gc base graphics context to use
 * @param x the X position of the left of the layout (in pixels)
 * @param y the Y position of the top of the layout (in pixels)
 * @param layout a #PangoLayout
 * @param foreground foreground override color, or %NULL for none
 * @param background background override color, or %NULL for none
 */
export function draw_layout_with_colors(drawable: Drawable, gc: GC, x: number, y: number, layout: Pango.Layout, foreground: Color | null, background: Color | null): void
/**
 * Draws a line, using the foreground color and other attributes of
 * the #GdkGC.
 * @param drawable a #GdkDrawable (a #GdkWindow or a #GdkPixmap).
 * @param gc a #GdkGC.
 * @param x1_ the x coordinate of the start point.
 * @param y1_ the y coordinate of the start point.
 * @param x2_ the x coordinate of the end point.
 * @param y2_ the y coordinate of the end point.
 */
export function draw_line(drawable: Drawable, gc: GC, x1_: number, y1_: number, x2_: number, y2_: number): void
/**
 * Draws a series of lines connecting the given points.
 * The way in which joins between lines are draw is determined by the
 * #GdkCapStyle value in the #GdkGC. This can be set with
 * gdk_gc_set_line_attributes().
 * @param drawable a #GdkDrawable (a #GdkWindow or a #GdkPixmap).
 * @param gc a #GdkGC.
 * @param points an array of #GdkPoint structures specifying the endpoints of the
 * @param n_points the size of the `points` array.
 */
export function draw_lines(drawable: Drawable, gc: GC, points: Point, n_points: number): void
/**
 * Renders a rectangular portion of a pixbuf to a drawable.  The destination
 * drawable must have a colormap. All windows have a colormap, however, pixmaps
 * only have colormap by default if they were created with a non-%NULL window
 * argument. Otherwise a colormap must be set on them with
 * gdk_drawable_set_colormap().
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
 * @param gc a #GdkGC, used for clipping, or %NULL
 * @param pixbuf a #GdkPixbuf
 * @param src_x Source X coordinate within pixbuf.
 * @param src_y Source Y coordinates within pixbuf.
 * @param dest_x Destination X coordinate within drawable.
 * @param dest_y Destination Y coordinate within drawable.
 * @param width Width of region to render, in pixels, or -1 to use pixbuf width.
 * @param height Height of region to render, in pixels, or -1 to use pixbuf height.
 * @param dither Dithering mode for #GdkRGB.
 * @param x_dither X offset for dither.
 * @param y_dither Y offset for dither.
 */
export function draw_pixbuf(drawable: Drawable, gc: GC | null, pixbuf: GdkPixbuf.Pixbuf, src_x: number, src_y: number, dest_x: number, dest_y: number, width: number, height: number, dither: RgbDither, x_dither: number, y_dither: number): void
/**
 * Draws a point, using the foreground color and other attributes of
 * the #GdkGC.
 * @param drawable a #GdkDrawable (a #GdkWindow or a #GdkPixmap).
 * @param gc a #GdkGC.
 * @param x the x coordinate of the point.
 * @param y the y coordinate of the point.
 */
export function draw_point(drawable: Drawable, gc: GC, x: number, y: number): void
/**
 * Draws a number of points, using the foreground color and other
 * attributes of the #GdkGC.
 * @param drawable a #GdkDrawable (a #GdkWindow or a #GdkPixmap).
 * @param gc a #GdkGC.
 * @param points an array of #GdkPoint structures.
 * @param n_points the number of points to be drawn.
 */
export function draw_points(drawable: Drawable, gc: GC, points: Point, n_points: number): void
/**
 * Draws an outlined or filled polygon.
 * @param drawable a #GdkDrawable (a #GdkWindow or a #GdkPixmap).
 * @param gc a #GdkGC.
 * @param filled %TRUE if the polygon should be filled. The polygon is closed     automatically, connecting the last point to the first point if     necessary.
 * @param points an array of #GdkPoint structures specifying the points making     up the polygon.
 * @param n_points the number of points.
 */
export function draw_polygon(drawable: Drawable, gc: GC, filled: boolean, points: Point, n_points: number): void
/**
 * Draws a rectangular outline or filled rectangle, using the foreground color
 * and other attributes of the #GdkGC.
 * 
 * A rectangle drawn filled is 1 pixel smaller in both dimensions than a
 * rectangle outlined. Calling
 * <literal>gdk_draw_rectangle (window, gc, TRUE, 0, 0, 20, 20)</literal>
 * results in a filled rectangle 20 pixels wide and 20 pixels high. Calling
 * <literal>gdk_draw_rectangle (window, gc, FALSE, 0, 0, 20, 20)</literal>
 * results in an outlined rectangle with corners at (0, 0), (0, 20), (20, 20),
 * and (20, 0), which makes it 21 pixels wide and 21 pixels high.
 * @param drawable a #GdkDrawable (a #GdkWindow or a #GdkPixmap).
 * @param gc a #GdkGC.
 * @param filled %TRUE if the rectangle should be filled.
 * @param x the x coordinate of the left edge of the rectangle.
 * @param y the y coordinate of the top edge of the rectangle.
 * @param width the width of the rectangle.
 * @param height the height of the rectangle.
 */
export function draw_rectangle(drawable: Drawable, gc: GC, filled: boolean, x: number, y: number, width: number, height: number): void
export function draw_rgb_32_image(drawable: Drawable, gc: GC, x: number, y: number, width: number, height: number, dith: RgbDither, buf: number, rowstride: number): void
/**
 * Like gdk_draw_rgb_32_image(), but allows you to specify the dither
 * offsets. See gdk_draw_rgb_image_dithalign() for more details.
 * @param drawable a #GdkDrawable
 * @param gc a #GdkGC
 * @param x X coordinate on `drawable` where image should go
 * @param y Y coordinate on `drawable` where image should go
 * @param width width of area of image to draw
 * @param height height of area of image to draw
 * @param dith dithering mode
 * @param buf RGB image data
 * @param rowstride rowstride of RGB image data
 * @param xdith X dither offset
 * @param ydith Y dither offset
 */
export function draw_rgb_32_image_dithalign(drawable: Drawable, gc: GC, x: number, y: number, width: number, height: number, dith: RgbDither, buf: number, rowstride: number, xdith: number, ydith: number): void
export function draw_rgb_image(drawable: Drawable, gc: GC, x: number, y: number, width: number, height: number, dith: RgbDither, rgb_buf: number, rowstride: number): void
export function draw_rgb_image_dithalign(drawable: Drawable, gc: GC, x: number, y: number, width: number, height: number, dith: RgbDither, rgb_buf: number, rowstride: number, xdith: number, ydith: number): void
/**
 * Draws a number of unconnected lines.
 * @param drawable a #GdkDrawable (a #GdkWindow or a #GdkPixmap).
 * @param gc a #GdkGC.
 * @param segs an array of #GdkSegment structures specifying the start and   end points of the lines to be drawn.
 * @param n_segs the number of line segments to draw, i.e. the size of the   `segs` array.
 */
export function draw_segments(drawable: Drawable, gc: GC, segs: Segment, n_segs: number): void
/**
 * Draws a string of characters in the given font or fontset.
 * @param drawable a #GdkDrawable (a #GdkWindow or a #GdkPixmap).
 * @param font a #GdkFont.
 * @param gc a #GdkGC.
 * @param x the x coordinate of the left edge of the text.
 * @param y the y coordinate of the baseline of the text.
 * @param string the string of characters to draw.
 */
export function draw_string(drawable: Drawable, font: Font, gc: GC, x: number, y: number, string: string | null): void
/**
 * Draws a number of characters in the given font or fontset.
 * @param drawable a #GdkDrawable (a #GdkWindow or a #GdkPixmap).
 * @param font a #GdkFont.
 * @param gc a #GdkGC.
 * @param x the x coordinate of the left edge of the text.
 * @param y the y coordinate of the baseline of the text.
 * @param text the characters to draw.
 * @param text_length the number of characters of `text` to draw.
 */
export function draw_text(drawable: Drawable, font: Font, gc: GC, x: number, y: number, text: string | null, text_length: number): void
/**
 * Draws a number of wide characters using the given font of fontset.
 * If the font is a 1-byte font, the string is converted into 1-byte
 * characters (discarding the high bytes) before output.
 * @param drawable a #GdkDrawable (a #GdkWindow or a #GdkPixmap).
 * @param font a #GdkFont.
 * @param gc a #GdkGC.
 * @param x the x coordinate of the left edge of the text.
 * @param y the y coordinate of the baseline of the text.
 * @param text the wide characters to draw.
 * @param text_length the number of characters to draw.
 */
export function draw_text_wc(drawable: Drawable, font: Font, gc: GC, x: number, y: number, text: WChar, text_length: number): void
/**
 * Draws a set of anti-aliased trapezoids. The trapezoids are
 * combined using saturation addition, then drawn over the background
 * as a set. This is low level functionality used internally to implement
 * rotated underlines and backgrouds when rendering a PangoLayout and is
 * likely not useful for applications.
 * @param drawable a #GdkDrawable
 * @param gc a #GdkGC
 * @param trapezoids an array of #GdkTrapezoid structures
 * @param n_trapezoids the number of trapezoids to draw
 */
export function draw_trapezoids(drawable: Drawable, gc: GC, trapezoids: Trapezoid, n_trapezoids: number): void
/**
 * Ends the drag operation after a drop.
 * 
 * This function is called by the drag destination.
 * @param context a #GtkDragContext.
 * @param success %TRUE if the data was successfully received.
 * @param time_ the timestamp for this operation.
 */
export function drop_finish(context: DragContext, success: boolean, time_: number): void
/**
 * Accepts or rejects a drop.
 * 
 * This function is called by the drag destination in response
 * to a drop initiated by the drag source.
 * @param context a #GdkDragContext.
 * @param ok %TRUE if the drop is accepted.
 * @param time_ the timestamp for this operation.
 */
export function drop_reply(context: DragContext, ok: boolean, time_: number): void
export function error_trap_pop(): number
export function error_trap_push(): void
/**
 * Checks all open displays for a #GdkEvent to process,to be processed
 * on, fetching events from the windowing system if necessary.
 * See gdk_display_get_event().
 * @returns the next #GdkEvent to be processed, or %NULL if no events are pending. The returned #GdkEvent should be freed with gdk_event_free().
 */
export function event_get(): Event
export function event_get_graphics_expose(window: Window): Event
/**
 * Sets the function to call to handle all events from GDK.
 * 
 * Note that GTK+ uses this to install its own event handler, so it is
 * usually not useful for GTK+ applications. (Although an application
 * can call this function then call gtk_main_do_event() to pass
 * events to GTK+.)
 * @param func the function to call to handle events from GDK.
 */
export function event_handler_set(func: EventFunc): void
/**
 * If there is an event waiting in the event queue of some open
 * display, returns a copy of it. See gdk_display_peek_event().
 * @returns a copy of the first #GdkEvent on some event queue, or %NULL if no events are in any queues. The returned #GdkEvent should be freed with gdk_event_free().
 */
export function event_peek(): Event
/**
 * Request more motion notifies if `event` is a motion notify hint event.
 * This function should be used instead of gdk_window_get_pointer() to
 * request further motion notifies, because it also works for extension
 * events where motion notifies are provided for devices other than the
 * core pointer. Coordinate extraction, processing and requesting more
 * motion events from a %GDK_MOTION_NOTIFY event usually works like this:
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
 * @param event a valid #GdkEvent
 */
export function event_request_motions(event: EventMotion): void
export function event_send_client_message_for_display(display: Display, event: Event, winid: NativeWindow): boolean
export function events_pending(): boolean
export function exit(error_code: number): void
export function flush(): void
/**
 * Load a #GdkFont based on a Pango font description. This font will
 * only be an approximation of the Pango font, and
 * internationalization will not be handled correctly. This function
 * should only be used for legacy code that cannot be easily converted
 * to use Pango. Using Pango directly will produce better results.
 * @param font_desc a #PangoFontDescription.
 * @returns the newly loaded font, or %NULL if the font cannot be loaded.
 */
export function font_from_description(font_desc: Pango.FontDescription): Font
export function font_from_description_for_display(display: Display, font_desc: Pango.FontDescription): Font
/**
 * Loads a font.
 * 
 * The font may be newly loaded or looked up the font in a cache.
 * You should make no assumptions about the initial reference count.
 * @param font_name a XLFD describing the font to load.
 * @returns a #GdkFont, or %NULL if the font could not be loaded.
 */
export function font_load(font_name: string | null): Font
export function font_load_for_display(display: Display, font_name: string | null): Font
export function fontset_load(fontset_name: string | null): Font
export function fontset_load_for_display(display: Display, fontset_name: string | null): Font
export function free_compound_text(ctext: number): void
export function free_text_list(list: string | null): void
export function get_display(): string | null
/**
 * Gets the display name specified in the command line arguments passed
 * to gdk_init() or gdk_parse_args(), if any.
 * @returns the display name, if specified explicitely, otherwise %NULL   this string is owned by GTK+ and must not be modified or freed.
 */
export function get_display_arg_name(): string | null
export function get_program_class(): string | null
/**
 * Gets whether event debugging output is enabled.
 * @returns %TRUE if event debugging output is enabled.
 */
export function get_show_events(): boolean
export function get_use_xshm(): boolean
export function init(argv: string[]): /* argv */ string[]
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
export function init_check(argv: string[]): [ /* returnType */ boolean, /* argv */ string[] ]
/**
 * Establish a callback when a condition becomes true on
 * a file descriptor.
 * @param source a file descriptor.
 * @param condition the condition.
 * @param function_ the callback function.
 * @returns a tag that can later be used as an argument to gdk_input_remove().
 */
export function input_add_full(source: number, condition: InputCondition, function_: InputFunction): number
export function input_remove(tag: number): void
export function input_set_extension_events(window: Window, mask: number, mode: ExtensionMode): void
export function keyboard_grab(window: Window, owner_events: boolean, time_: number): GrabStatus
/**
 * Determines information about the current keyboard grab.
 * This is not public API and must not be used by applications.
 * @param display the display for which to get the grab information
 * @param grab_window location to store current grab window
 * @param owner_events location to store boolean indicating whether   the `owner_events` flag to gdk_keyboard_grab() was %TRUE.
 * @returns %TRUE if this application currently has the  keyboard grabbed.
 */
export function keyboard_grab_info_libgtk_only(display: Display, grab_window: Window, owner_events: boolean): boolean
/**
 * Ungrabs the keyboard on the default display, if it is grabbed by this
 * application.
 * @param time_ a timestamp from a #GdkEvent, or %GDK_CURRENT_TIME if no        timestamp is available.
 */
export function keyboard_ungrab(time_: number): void
/**
 * Obtains the upper- and lower-case versions of the keyval `symbol`.
 * Examples of keyvals are #GDK_a, #GDK_Enter, #GDK_F1, etc.
 * @param symbol a keyval
 */
export function keyval_convert_case(symbol: number): [ /* lower */ number, /* upper */ number ]
/**
 * Converts a key name to a key value.
 * 
 * The names are the same as those in the
 * <filename>&lt;gdk/gdkkeysyms.h&gt;</filename> header file
 * but without the leading "GDK_KEY_".
 * @param keyval_name a key name
 * @returns the corresponding key value, or %GDK_KEY_VoidSymbol     if the key name is not a valid key
 */
export function keyval_from_name(keyval_name: string | null): number
export function keyval_is_lower(keyval: number): boolean
export function keyval_is_upper(keyval: number): boolean
/**
 * Converts a key value into a symbolic name.
 * 
 * The names are the same as those in the
 * <filename>&lt;gdk/gdkkeysyms.h&gt;</filename> header file
 * but without the leading "GDK_KEY_".
 * @param keyval a key value
 * @returns a string containing the name of the key,     or %NULL if @keyval is not a valid key. The string should not be     modified.
 */
export function keyval_name(keyval: number): string | null
export function keyval_to_lower(keyval: number): number
/**
 * Convert from a GDK key symbol to the corresponding ISO10646 (Unicode)
 * character.
 * @param keyval a GDK key symbol
 * @returns the corresponding unicode character, or 0 if there               is no corresponding character.
 */
export function keyval_to_unicode(keyval: number): number
export function keyval_to_upper(keyval: number): number
/**
 * Lists the available visuals for the default screen.
 * (See gdk_screen_list_visuals())
 * A visual describes a hardware image data format.
 * For example, a visual might support 24-bit color, or 8-bit color,
 * and might expect pixels to be in a certain format.
 * 
 * Call g_list_free() on the return value when you're finished with it.
 * @returns      a list of visuals; the list must be freed, but not its contents
 */
export function list_visuals(): Visual[]
/**
 * Converts a multi-byte string to a wide character string.
 * (The function name comes from an acronym of 'Multi-Byte String TO Wide
 * Character String').
 * @param dest the space to place the converted wide character string into.
 * @param src the multi-byte string to convert, which must be nul-terminated.
 * @param dest_max the maximum number of wide characters to place in `dest`.
 * @returns the number of wide characters written into @dest, or -1 if   the conversion failed.
 */
export function mbstowcs(dest: WChar, src: string | null, dest_max: number): number
/**
 * Indicates to the GUI environment that the application has finished
 * loading. If the applications opens windows, this function is
 * normally called after opening the application's initial set of
 * windows.
 * 
 * GTK+ will call this function automatically after opening the first
 * #GtkWindow unless gtk_window_set_auto_startup_notification() is called
 * to disable that feature.
 */
export function notify_startup_complete(): void
/**
 * Indicates to the GUI environment that the application has finished
 * loading, using a given identifier.
 * 
 * GTK+ will call this function automatically for #GtkWindow with custom
 * startup-notification identifier unless
 * gtk_window_set_auto_startup_notification() is called to disable
 * that feature.
 * @param startup_id a startup-notification identifier, for which notification              process should be completed
 */
export function notify_startup_complete_with_id(startup_id: string | null): void
/**
 * Sets `window` to be embedded in `embedder`.
 * 
 * To fully embed an offscreen window, in addition to calling this
 * function, it is also necessary to handle the #GdkWindow::pick-embedded-child
 * signal on the `embedder` and the #GdkWindow::to-embedder and
 * #GdkWindow::from-embedder signals on `window`.
 * @param window a #GdkWindow
 * @param embedder the #GdkWindow that `window` gets embedded in
 */
export function offscreen_window_set_embedder(window: Window, embedder: Window): void
/**
 * Creates a new attribute specifying the color to emboss text with.
 * @param color a GdkColor representing the color to emboss with
 * @returns new #PangoAttribute
 */
export function pango_attr_emboss_color_new(color: Color): Pango.Attribute
/**
 * Creates a new attribute flagging a region as embossed or not.
 * @param embossed if the region should be embossed
 * @returns new #PangoAttribute
 */
export function pango_attr_embossed_new(embossed: boolean): Pango.Attribute
/**
 * Creates a new attribute containing a stipple bitmap to be used when
 * rendering the text.
 * @param stipple a bitmap to be set as stipple
 * @returns new #PangoAttribute
 */
export function pango_attr_stipple_new(stipple: Bitmap): Pango.Attribute
/**
 * This function used to set the colormap to be used for drawing with
 * `context`. The colormap is now always derived from the graphics
 * context used for drawing, so calling this function is no longer
 * necessary.
 * @param context a #PangoContext
 * @param colormap a #GdkColormap
 */
export function pango_context_set_colormap(context: Pango.Context, colormap: Colormap): void
/**
 * Parse command line arguments, and store for future
 * use by calls to gdk_display_open().
 * 
 * Any arguments used by GDK are removed from the array and `argc` and `argv` are
 * updated accordingly.
 * 
 * You shouldn't call this function explicitely if you are using
 * gtk_init(), gtk_init_check(), gdk_init(), or gdk_init_check().
 * @param argv the array of command line arguments.
 */
export function parse_args(argv: string[]): /* argv */ string[]
/**
 * Creates a pixmap and a mask bitmap which are returned in the `pixmap_return`
 * and `mask_return` arguments, respectively, and renders a pixbuf and its
 * corresponding thresholded alpha mask to them.  This is merely a convenience
 * function; applications that need to render pixbufs with dither offsets or to
 * given drawables should use gdk_draw_pixbuf() and gdk_pixbuf_render_threshold_alpha().
 * 
 * The pixmap that is created is created for the colormap returned
 * by gdk_rgb_get_colormap(). You normally will want to instead use
 * the actual colormap for a widget, and use
 * gdk_pixbuf_render_pixmap_and_mask_for_colormap().
 * 
 * If the pixbuf does not have an alpha channel, then *`mask_return` will be set
 * to %NULL.
 * @param pixbuf A pixbuf.
 * @param pixmap_return Location to store a pointer to the created pixmap,   or %NULL if the pixmap is not needed.
 * @param mask_return Location to store a pointer to the created mask,   or %NULL if the mask is not needed.
 * @param alpha_threshold Threshold value for opacity values.
 */
export function pixbuf_render_pixmap_and_mask(pixbuf: GdkPixbuf.Pixbuf, pixmap_return: Pixmap, mask_return: Bitmap, alpha_threshold: number): void
/**
 * Creates a pixmap and a mask bitmap which are returned in the `pixmap_return`
 * and `mask_return` arguments, respectively, and renders a pixbuf and its
 * corresponding tresholded alpha mask to them.  This is merely a convenience
 * function; applications that need to render pixbufs with dither offsets or to
 * given drawables should use gdk_draw_pixbuf(), and gdk_pixbuf_render_threshold_alpha().
 * 
 * The pixmap that is created uses the #GdkColormap specified by `colormap`.
 * This colormap must match the colormap of the window where the pixmap
 * will eventually be used or an error will result.
 * 
 * If the pixbuf does not have an alpha channel, then *`mask_return` will be set
 * to %NULL.
 * @param pixbuf A pixbuf.
 * @param colormap A #GdkColormap
 * @param pixmap_return Location to store a pointer to the created pixmap,   or %NULL if the pixmap is not needed.
 * @param mask_return Location to store a pointer to the created mask,   or %NULL if the mask is not needed.
 * @param alpha_threshold Threshold value for opacity values.
 */
export function pixbuf_render_pixmap_and_mask_for_colormap(pixbuf: GdkPixbuf.Pixbuf, colormap: Colormap, pixmap_return: Pixmap, mask_return: Bitmap, alpha_threshold: number): void
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
export function pixbuf_render_threshold_alpha(pixbuf: GdkPixbuf.Pixbuf, bitmap: Bitmap, src_x: number, src_y: number, dest_x: number, dest_y: number, width: number, height: number, alpha_threshold: number): void
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
 */
export function pixbuf_render_to_drawable(pixbuf: GdkPixbuf.Pixbuf, drawable: Drawable, gc: GC, src_x: number, src_y: number, dest_x: number, dest_y: number, width: number, height: number, dither: RgbDither, x_dither: number, y_dither: number): void
/**
 * Renders a rectangular portion of a pixbuf to a drawable.  The destination
 * drawable must have a colormap. All windows have a colormap, however, pixmaps
 * only have colormap by default if they were created with a non-%NULL window argument.
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
 */
export function pixbuf_render_to_drawable_alpha(pixbuf: GdkPixbuf.Pixbuf, drawable: Drawable, src_x: number, src_y: number, dest_x: number, dest_y: number, width: number, height: number, alpha_mode: GdkPixbuf.PixbufAlphaMode, alpha_threshold: number, dither: RgbDither, x_dither: number, y_dither: number): void
export function pointer_grab(window: Window, owner_events: boolean, event_mask: EventMask, confine_to: Window, cursor: Cursor, time_: number): GrabStatus
/**
 * Determines information about the current pointer grab.
 * This is not public API and must not be used by applications.
 * @param display the #GdkDisplay for which to get the grab information
 * @param grab_window location to store current grab window
 * @param owner_events location to store boolean indicating whether   the `owner_events` flag to gdk_pointer_grab() was %TRUE.
 * @returns %TRUE if this application currently has the  pointer grabbed.
 */
export function pointer_grab_info_libgtk_only(display: Display, grab_window: Window, owner_events: boolean): boolean
/**
 * Returns %TRUE if the pointer on the default display is currently
 * grabbed by this application.
 * 
 * Note that this does not take the inmplicit pointer grab on button
 * presses into account.
 * @returns %TRUE if the pointer is currently grabbed by this application.*
 */
export function pointer_is_grabbed(): boolean
/**
 * Ungrabs the pointer on the default display, if it is grabbed by this
 * application.
 * @param time_ a timestamp from a #GdkEvent, or %GDK_CURRENT_TIME if no  timestamp is available.
 */
export function pointer_ungrab(time_: number): void
export function pre_parse_libgtk_only(): void
export function property_change(window: Window, property: Atom, type: Atom, format: number, mode: PropMode, data: number, nelements: number): void
export function property_delete(window: Window, property: Atom): void
export function property_get(window: Window, property: Atom, type: Atom, offset: number, length: number, pdelete: number, actual_property_type: Atom, actual_format: number, actual_length: number, data: number): boolean
/**
 * This function returns the available bit depths for the default
 * screen. It's equivalent to listing the visuals
 * (gdk_list_visuals()) and then looking at the depth field in each
 * visual, removing duplicates.
 * 
 * The array returned by this function should not be freed.
 */
export function query_depths(): [ /* depths */ number[], /* count */ number ]
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
export function query_visual_types(visual_types: VisualType, count: number): void
export function rgb_colormap_ditherable(cmap: Colormap): boolean
export function rgb_ditherable(): boolean
/**
 * `colormap` should be the colormap for the graphics context and
 * drawable you're using to draw. If you're drawing to a #GtkWidget,
 * call gtk_widget_get_colormap().
 * 
 * `color` should have its %red, %green, and %blue fields initialized;
 * gdk_rgb_find_color() will fill in the %pixel field with the best
 * matching pixel from a color cube. The color is then ready to be
 * used for drawing, e.g. you can call gdk_gc_set_foreground() which
 * expects %pixel to be initialized.
 * 
 * In many cases, you can avoid this whole issue by calling
 * gdk_gc_set_rgb_fg_color() or gdk_gc_set_rgb_bg_color(), which
 * do not expect %pixel to be initialized in advance. If you use those
 * functions, there's no need for gdk_rgb_find_color().
 * @param colormap a #GdkColormap
 * @param color a #GdkColor
 */
export function rgb_find_color(colormap: Colormap, color: Color): void
export function rgb_gc_set_background(gc: GC, rgb: number): void
export function rgb_gc_set_foreground(gc: GC, rgb: number): void
/**
 * Get the preferred colormap for rendering image data.  Not a
 * very useful function; historically, GDK could only render RGB image
 * data to one colormap and visual, but in the current version it can
 * render to any colormap and visual. So there's no need to call this
 * function.
 * @returns the preferred colormap
 */
export function rgb_get_colormap(): Colormap
/**
 * Gets a "preferred visual" chosen by GdkRGB for rendering image data
 * on the default screen. In previous versions of GDK, this was the
 * only visual GdkRGB could use for rendering. In current versions,
 * it's simply the visual GdkRGB would have chosen as the optimal one
 * in those previous versions. GdkRGB can now render to drawables with
 * any visual.
 * @returns The #GdkVisual chosen by GdkRGB.
 */
export function rgb_get_visual(): Visual
export function rgb_init(): void
export function rgb_set_install(install: boolean): void
export function rgb_set_min_colors(min_colors: number): void
export function rgb_set_verbose(verbose: boolean): void
export function rgb_xpixel_from_rgb(rgb: number): number
export function selection_convert(requestor: Window, selection: Atom, target: Atom, time_: number): void
export function selection_owner_set(owner: Window, selection: Atom, time_: number, send_event: boolean): boolean
/**
 * Sets the #GdkWindow `owner` as the current owner of the selection `selection`.
 * @param display the #GdkDisplay.
 * @param owner a #GdkWindow or %NULL to indicate that the owner for         the given should be unset.
 * @param selection an atom identifying a selection.
 * @param time_ timestamp to use when setting the selection.         If this is older than the timestamp given last time the owner was         set for the given selection, the request will be ignored.
 * @param send_event if %TRUE, and the new owner is different from the current              owner, the current owner will be sent a SelectionClear event.
 * @returns %TRUE if the selection owner was successfully changed to owner,     otherwise %FALSE.
 */
export function selection_owner_set_for_display(display: Display, owner: Window, selection: Atom, time_: number, send_event: boolean): boolean
/**
 * Retrieves selection data that was stored by the selection
 * data in response to a call to gdk_selection_convert(). This function
 * will not be used by applications, who should use the #GtkClipboard
 * API instead.
 * @param requestor the window on which the data is stored
 * @param data location to store a pointer to the retrieved data.        If the retrieval failed, %NULL we be stored here, otherwise, it        will be non-%NULL and the returned data should be freed with g_free()        when you are finished using it. The length of the        allocated memory is one more than the length        of the returned data, and the final byte will always        be zero, to ensure nul-termination of strings.
 * @param prop_type location to store the type of the property.
 * @param prop_format location to store the format of the property.
 * @returns the length of the retrieved data.
 */
export function selection_property_get(requestor: Window, data: number, prop_type: Atom, prop_format: number): number
export function selection_send_notify(requestor: NativeWindow, selection: Atom, target: Atom, property: Atom, time_: number): void
/**
 * Send a response to SelectionRequest event.
 * @param display the #GdkDisplay where `requestor` is realized
 * @param requestor window to which to deliver response.
 * @param selection selection that was requested.
 * @param target target that was selected.
 * @param property property in which the selection owner stored the data,            or %GDK_NONE to indicate that the request was rejected.
 * @param time_ timestamp.
 */
export function selection_send_notify_for_display(display: Display, requestor: NativeWindow, selection: Atom, target: Atom, property: Atom, time_: number): void
/**
 * Set the double click time for the default display. See
 * gdk_display_set_double_click_time().
 * See also gdk_display_set_double_click_distance().
 * Applications should <emphasis>not</emphasis> set this, it is a
 * global user-configured setting.
 * @param msec double click time in milliseconds (thousandths of a second)
 */
export function set_double_click_time(msec: number): void
export function set_locale(): string | null
export function set_program_class(program_class: string | null): void
/**
 * Sets whether a trace of received events is output.
 * Note that GTK+ must be compiled with debugging (that is,
 * configured using the <option>--enable-debug</option> option)
 * to use this option.
 * @param show_events %TRUE to output event debugging information.
 */
export function set_show_events(show_events: boolean): void
/**
 * Sets the <literal>SM_CLIENT_ID</literal> property on the application's leader window so that
 * the window manager can save the application's state using the X11R6 ICCCM
 * session management protocol.
 * 
 * See the X Session Management Library documentation for more information on
 * session management and the Inter-Client Communication Conventions Manual
 * (ICCCM) for information on the <literal>WM_CLIENT_LEADER</literal> property.
 * (Both documents are part of the X Window System distribution.)
 * @param sm_client_id the client id assigned by the session manager when the    connection was opened, or %NULL to remove the property.
 */
export function set_sm_client_id(sm_client_id: string | null): void
export function set_use_xshm(use_xshm: boolean): void
/**
 * Obtains a desktop-wide setting, such as the double-click time,
 * for the default screen. See gdk_screen_get_setting().
 * @param name the name of the setting.
 * @param value location to store the value of the setting.
 * @returns %TRUE if the setting existed and a value was stored   in @value, %FALSE otherwise.
 */
export function setting_get(name: string | null, value: any): boolean
/**
 * Like g_spawn_command_line_async(), except the child process is
 * spawned in such an environment that on calling gdk_display_open()
 * it would be returned a #GdkDisplay with `screen` as the default
 * screen.
 * 
 * This is useful for applications which wish to launch an application
 * on a specific screen.
 * @param screen a #GdkScreen
 * @param command_line a command line
 * @returns %TRUE on success, %FALSE if error is set.
 */
export function spawn_command_line_on_screen(screen: Screen, command_line: string | null): boolean
/**
 * Gets the metrics of a nul-terminated string.
 * @param font a #GdkFont.
 * @param string the nul-terminated string to measure.
 * @param lbearing the left bearing of the string.
 * @param rbearing the right bearing of the string.
 * @param width the width of the string.
 * @param ascent the ascent of the string.
 * @param descent the descent of the string.
 */
export function string_extents(font: Font, string: string | null, lbearing: number, rbearing: number, width: number, ascent: number, descent: number): void
/**
 * Determines the total height of a given nul-terminated
 * string. This value is not generally useful, because you
 * cannot determine how this total height will be drawn in
 * relation to the baseline. See gdk_string_extents().
 * @param font a #GdkFont
 * @param string the nul-terminated string to measure.
 * @returns the height of the string in pixels.
 */
export function string_height(font: Font, string: string | null): number
/**
 * Determines the distance from the origin to the rightmost
 * portion of a nul-terminated string when drawn. This is not the
 * correct value for determining the origin of the next
 * portion when drawing text in multiple pieces.
 * See gdk_string_width().
 * @param font a #GdkFont
 * @param string the nul-terminated string to measure.
 * @returns the right bearing of the string in pixels.
 */
export function string_measure(font: Font, string: string | null): number
export function string_to_compound_text(str: string | null, encoding: Atom, format: number, ctext: number, length: number): number
/**
 * Convert a string from the encoding of the current
 * locale into a form suitable for storing in a window property.
 * @param display the #GdkDisplay where the encoding is defined.
 * @param str a nul-terminated string.
 * @param encoding location to store the encoding atom       (to be used as the type for the property).
 * @param format location to store the format of the property
 * @param ctext location to store newly allocated data for the property.
 * @param length the length of `text,` in bytes
 * @returns 0 upon success, non-zero upon failure.
 */
export function string_to_compound_text_for_display(display: Display, str: string | null, encoding: Atom, format: number, ctext: number, length: number): number
/**
 * Determines the width of a nul-terminated string.
 * (The distance from the origin of the string to the
 * point where the next string in a sequence of strings
 * should be drawn)
 * @param font a #GdkFont
 * @param string the nul-terminated string to measure
 * @returns the width of the string in pixels.
 */
export function string_width(font: Font, string: string | null): number
export function synthesize_window_state(window: Window, unset_flags: WindowState, set_flags: WindowState): void
/**
 * This function retrieves a pixel from `window` to force the windowing
 * system to carry out any pending rendering commands.
 * This function is intended to be used to syncronize with rendering
 * pipelines, to benchmark windowing system rendering operations.
 * @param window a mapped #GdkWindow
 */
export function test_render_sync(window: Window): void
/**
 * This function is intended to be used in GTK+ test programs.
 * It will warp the mouse pointer to the given (`x,``y)` corrdinates
 * within `window` and simulate a button press or release event.
 * Because the mouse pointer needs to be warped to the target
 * location, use of this function outside of test programs that
 * run in their own virtual windowing system (e.g. Xvfb) is not
 * recommended.
 * 
 * Also, gtk_test_simulate_button() is a fairly low level function,
 * for most testing purposes, gtk_test_widget_click() is the right
 * function to call which will generate a button press event followed
 * by its accompanying button release event.
 * @param window a #GdkWindow to simulate a button event for.
 * @param x x coordinate within `window` for the button event.
 * @param y y coordinate within `window` for the button event.
 * @param button Number of the pointer button for the event, usually 1, 2 or 3.
 * @param modifiers Keyboard modifiers the event is setup with.
 * @param button_pressrelease either %GDK_BUTTON_PRESS or %GDK_BUTTON_RELEASE
 * @returns whether all actions neccessary for a button event simulation     were carried out successfully.
 */
export function test_simulate_button(window: Window, x: number, y: number, button: number, modifiers: ModifierType, button_pressrelease: EventType): boolean
/**
 * This function is intended to be used in GTK+ test programs.
 * If (`x,``y)` are > (-1,-1), it will warp the mouse pointer to
 * the given (`x,``y)` corrdinates within `window` and simulate a
 * key press or release event.
 * 
 * When the mouse pointer is warped to the target location, use
 * of this function outside of test programs that run in their
 * own virtual windowing system (e.g. Xvfb) is not recommended.
 * If (`x,``y)` are passed as (-1,-1), the mouse pointer will not
 * be warped and `window` origin will be used as mouse pointer
 * location for the event.
 * 
 * Also, gtk_test_simulate_key() is a fairly low level function,
 * for most testing purposes, gtk_test_widget_send_key() is the
 * right function to call which will generate a key press event
 * followed by its accompanying key release event.
 * @param window a #GdkWindow to simulate a key event for.
 * @param x x coordinate within `window` for the key event.
 * @param y y coordinate within `window` for the key event.
 * @param keyval A GDK keyboard value.
 * @param modifiers Keyboard modifiers the event is setup with.
 * @param key_pressrelease either %GDK_KEY_PRESS or %GDK_KEY_RELEASE
 * @returns whether all actions neccessary for a key event simulation     were carried out successfully.
 */
export function test_simulate_key(window: Window, x: number, y: number, keyval: number, modifiers: ModifierType, key_pressrelease: EventType): boolean
export function text_extents(font: Font, text: string | null, text_length: number, lbearing: number, rbearing: number, width: number, ascent: number, descent: number): void
export function text_extents_wc(font: Font, text: WChar, text_length: number, lbearing: number, rbearing: number, width: number, ascent: number, descent: number): void
/**
 * Determines the total height of a given string.
 * This value is not generally useful, because you cannot
 * determine how this total height will be drawn in
 * relation to the baseline. See gdk_text_extents().
 * @param font a #GdkFont
 * @param text the text to measure.
 * @param text_length the length of the text in bytes.
 * @returns the height of the string in pixels.
 */
export function text_height(font: Font, text: string | null, text_length: number): number
/**
 * Determines the distance from the origin to the rightmost
 * portion of a string when drawn. This is not the
 * correct value for determining the origin of the next
 * portion when drawing text in multiple pieces.
 * See gdk_text_width().
 * @param font a #GdkFont
 * @param text the text to measure.
 * @param text_length the length of the text in bytes.
 * @returns the right bearing of the string in pixels.
 */
export function text_measure(font: Font, text: string | null, text_length: number): number
export function text_property_to_text_list(encoding: Atom, format: number, text: number, length: number, list: string | null): number
/**
 * Convert a text string from the encoding as it is stored
 * in a property into an array of strings in the encoding of
 * the current locale. (The elements of the array represent the
 * nul-separated elements of the original text string.)
 * @param display The #GdkDisplay where the encoding is defined.
 * @param encoding an atom representing the encoding. The most    common values for this are STRING, or COMPOUND_TEXT.    This is value used as the type for the property.
 * @param format the format of the property.
 * @param text The text data.
 * @param length The number of items to transform.
 * @param list location to store a terminated array of strings in    the encoding of the current locale. This array should be    freed using gdk_free_text_list().
 * @returns the number of strings stored in list, or 0, if the conversion failed.
 */
export function text_property_to_text_list_for_display(display: Display, encoding: Atom, format: number, text: number, length: number, list: string | null): number
/**
 * Convert a text property in the giving encoding to
 * a list of UTF-8 strings.
 * @param encoding an atom representing the encoding of the text
 * @param format the format of the property
 * @param text the text to convert
 * @param length the length of `text,` in bytes
 * @param list location to store the list of strings or %NULL. The            list should be freed with g_strfreev().
 * @returns the number of strings in the resulting               list.
 */
export function text_property_to_utf8_list(encoding: Atom, format: number, text: number, length: number, list: string | null): number
/**
 * Converts a text property in the given encoding to
 * a list of UTF-8 strings.
 * @param display a #GdkDisplay
 * @param encoding an atom representing the encoding of the text
 * @param format the format of the property
 * @param text the text to convert
 * @param length the length of `text,` in bytes
 * @param list location to store the list of strings or %NULL. The            list should be freed with g_strfreev().
 * @returns the number of strings in the resulting               list.
 */
export function text_property_to_utf8_list_for_display(display: Display, encoding: Atom, format: number, text: number, length: number, list: string | null): number
export function text_width(font: Font, text: string | null, text_length: number): number
export function text_width_wc(font: Font, text: WChar, text_length: number): number
/**
 * Adds a function to be called whenever there are no higher priority
 * events pending.  If the function returns %FALSE it is automatically
 * removed from the list of event sources and will not be called again.
 * 
 * This variant of g_idle_add_full() calls `function` with the GDK lock
 * held. It can be thought of a MT-safe version for GTK+ widgets for the
 * following use case, where you have to worry about idle_callback()
 * running in thread A and accessing `self` after it has been finalized
 * in thread B:
 * 
 * 
 * ```
 * static gboolean
 * idle_callback (gpointer data)
 * {
 *    /&ast; gdk_threads_enter(); would be needed for g_idle_add() &ast;/
 * 
 *    SomeWidget *self = data;
 *    /&ast; do stuff with self &ast;/
 * 
 *    self->idle_id = 0;
 * 
 *    /&ast; gdk_threads_leave(); would be needed for g_idle_add() &ast;/
 *    return FALSE;
 * }
 * 
 * static void
 * some_widget_do_stuff_later (SomeWidget *self)
 * {
 *    self->idle_id = gdk_threads_add_idle (idle_callback, self)
 *    /&ast; using g_idle_add() here would require thread protection in the callback &ast;/
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
 * @param function_ function to call
 * @returns the ID (greater than 0) of the event source.
 */
export function threads_add_idle_full(priority: number, function_: GLib.SourceFunc): number
/**
 * Sets a function to be called at regular intervals holding the GDK lock,
 * with the given priority.  The function is called repeatedly until it
 * returns %FALSE, at which point the timeout is automatically destroyed
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
 * This variant of g_timeout_add_full() can be thought of a MT-safe version
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
 * @param function_ function to call
 * @returns the ID (greater than 0) of the event source.
 */
export function threads_add_timeout_full(priority: number, interval: number, function_: GLib.SourceFunc): number
/**
 * A variant of gdk_threads_add_timout_full() with second-granularity.
 * See g_timeout_add_seconds_full() for a discussion of why it is
 * a good idea to use this function if you don't need finer granularity.
 * 
 *  Return value: the ID (greater than 0) of the event source.
 * @param priority the priority of the timeout source. Typically this will be in the            range between #G_PRIORITY_DEFAULT_IDLE and #G_PRIORITY_HIGH_IDLE.
 * @param interval the time between calls to the function, in seconds
 * @param function_ function to call
 */
export function threads_add_timeout_seconds_full(priority: number, interval: number, function_: GLib.SourceFunc): number
export function threads_enter(): void
/**
 * Initializes GDK so that it can be used from multiple threads
 * in conjunction with gdk_threads_enter() and gdk_threads_leave().
 * g_thread_init() must be called previous to this function.
 * 
 * This call must be made before any use of the main loop from
 * GTK+; to be safe, call it before gtk_init().
 */
export function threads_init(): void
export function threads_leave(): void
/**
 * Convert from a ISO10646 character to a key symbol.
 * @param wc a ISO10646 encoded character
 * @returns the corresponding GDK key symbol, if one exists.               or, if there is no corresponding symbol,               wc | 0x01000000
 */
export function unicode_to_keyval(wc: number): number
/**
 * Convert from UTF-8 to compound text.
 * @param str a UTF-8 string
 * @param encoding location to store resulting encoding
 * @param format location to store format of the result
 * @param ctext location to store the data of the result
 * @param length location to store the length of the data            stored in `ctext`
 * @returns %TRUE if the conversion succeeded, otherwise               false.
 */
export function utf8_to_compound_text(str: string | null, encoding: Atom, format: number, ctext: number, length: number): boolean
/**
 * Converts from UTF-8 to compound text.
 * @param display a #GdkDisplay
 * @param str a UTF-8 string
 * @param encoding location to store resulting encoding
 * @param format location to store format of the result
 * @param ctext location to store the data of the result
 * @param length location to store the length of the data            stored in `ctext`
 * @returns %TRUE if the conversion succeeded, otherwise               %FALSE.
 */
export function utf8_to_compound_text_for_display(display: Display, str: string | null, encoding: Atom, format: number, ctext: number, length: number): boolean
/**
 * Converts an UTF-8 string into the best possible representation
 * as a STRING. The representation of characters not in STRING
 * is not specified; it may be as pseudo-escape sequences
 * \x{ABCD}, or it may be in some other form of approximation.
 * @param str a UTF-8 string
 * @returns the newly-allocated string, or %NULL if the               conversion failed. (It should not fail for               any properly formed UTF-8 string unless system               limits like memory or file descriptors are exceeded.)
 */
export function utf8_to_string_target(str: string | null): string | null
/**
 * Converts a wide character string to a multi-byte string.
 * (The function name comes from an acronym of 'Wide Character String TO
 * Multi-Byte String').
 * @param src a wide character string.
 * @returns the multi-byte string corresponding to @src, or %NULL if the conversion failed. The returned string should be freed with g_free() when no longer needed.
 */
export function wcstombs(src: WChar): string | null
/**
 * Obtains the window underneath the mouse pointer, returning the
 * location of that window in `win_x,` `win_y`. Returns %NULL if the
 * window under the mouse pointer is not known to GDK (if the window
 * belongs to another application and a #GdkWindow hasn't been created
 * for it with gdk_window_foreign_new())
 * 
 * NOTE: For multihead-aware widgets or applications use
 * gdk_display_get_window_at_pointer() instead.
 * @returns window under the mouse pointer
 */
export function window_at_pointer(): [ /* returnType */ Window, /* win_x */ number, /* win_y */ number ]
/**
 * Constrains a desired width and height according to a
 * set of geometry hints (such as minimum and maximum size).
 * @param geometry a #GdkGeometry structure
 * @param flags a mask indicating what portions of `geometry` are set
 * @param width desired width of window
 * @param height desired height of the window
 */
export function window_constrain_size(geometry: Geometry, flags: number, width: number, height: number): [ /* new_width */ number, /* new_height */ number ]
/**
 * Calls gdk_window_process_updates() for all windows (see #GdkWindow)
 * in the application.
 */
export function window_process_all_updates(): void
/**
 * With update debugging enabled, calls to
 * gdk_window_invalidate_region() clear the invalidated region of the
 * screen to a noticeable color, and GDK pauses for a short time
 * before sending exposes to windows during
 * gdk_window_process_updates().  The net effect is that you can see
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
 * usually more useful than calling gdk_window_set_debug_updates()
 * yourself, though you might want to use this function to enable
 * updates sometime after application startup time.
 * @param setting %TRUE to turn on update debugging
 */
export function window_set_debug_updates(setting: boolean): void
export interface DestroyNotify {
    (data: any | null): void
}
export interface EventFunc {
    (event: Event, data: any | null): void
}
export interface FilterFunc {
    (xevent: XEvent, event: Event, data: any | null): FilterReturn
}
export interface InputFunction {
    (data: any | null, source: number, condition: InputCondition): void
}
export interface SpanFunc {
    (span: Span, data: any | null): void
}
export module AppLaunchContext {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AppLaunchContext.ConstructorProperties {
    }

}

export interface AppLaunchContext {

    // Own fields of Gdk-2.0.Gdk.AppLaunchContext

    parent_instance: Gio.AppLaunchContext & GObject.Object
    priv: AppLaunchContextPrivate

    // Owm methods of Gdk-2.0.Gdk.AppLaunchContext

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
     */
    set_desktop(desktop: number): void
    /**
     * Sets the display on which applications will be launched when
     * using this context. See also gdk_app_launch_context_set_screen().
     * @param display a #GdkDisplay
     */
    set_display(display: Display): void
    /**
     * Sets the icon for applications that are launched with this
     * context.
     * 
     * Window Managers can use this information when displaying startup
     * notification.
     * 
     * See also gdk_app_launch_context_set_icon_name().
     * @param icon a #GIcon, or %NULL
     */
    set_icon(icon: Gio.Icon | null): void
    /**
     * Sets the icon for applications that are launched with this context.
     * The `icon_name` will be interpreted in the same way as the Icon field
     * in desktop files. See also gdk_app_launch_context_set_icon().
     * 
     * If both `icon` and `icon_name` are set, the `icon_name` takes priority.
     * If neither `icon` or `icon_name` is set, the icon is taken from either
     * the file that is passed to launched application or from the #GAppInfo
     * for the launched application itself.
     * @param icon_name an icon name, or %NULL
     */
    set_icon_name(icon_name: string | null): void
    /**
     * Sets the screen on which applications will be launched when
     * using this context. See also gdk_app_launch_context_set_display().
     * 
     * If both `screen` and `display` are set, the `screen` takes priority.
     * If neither `screen` or `display` are set, the default screen and
     * display are used.
     * @param screen a #GdkScreen
     */
    set_screen(screen: Screen): void
    /**
     * Sets the timestamp of `context`. The timestamp should ideally
     * be taken from the event that triggered the launch.
     * 
     * Window managers can use this information to avoid moving the
     * focus to the newly launched application when the user is busy
     * typing in another window. This is also known as 'focus stealing
     * prevention'.
     * @param timestamp a timestamp
     */
    set_timestamp(timestamp: number): void

    // Class property signals of Gdk-2.0.Gdk.AppLaunchContext

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class AppLaunchContext extends Gio.AppLaunchContext {

    // Own properties of Gdk-2.0.Gdk.AppLaunchContext

    static name: string
    static $gtype: GObject.GType<AppLaunchContext>

    // Constructors of Gdk-2.0.Gdk.AppLaunchContext

    constructor(config?: AppLaunchContext.ConstructorProperties) 
    /**
     * Creates a new #GdkAppLaunchContext.
     * @constructor 
     * @returns a new #GdkAppLaunchContext
     */
    constructor() 
    /**
     * Creates a new #GdkAppLaunchContext.
     * @constructor 
     * @returns a new #GdkAppLaunchContext
     */
    static new(): AppLaunchContext

    // Overloads of new

    /**
     * Creates a new application launch context. This is not normally used,
     * instead you instantiate a subclass of this, such as #GdkAppLaunchContext.
     * @constructor 
     * @returns a #GAppLaunchContext.
     */
    static new(): Gio.AppLaunchContext
    _init(config?: AppLaunchContext.ConstructorProperties): void
}

export module Colormap {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Colormap {

    // Own fields of Gdk-2.0.Gdk.Colormap

    size: number
    colors: Color

    // Owm methods of Gdk-2.0.Gdk.Colormap

    /**
     * Allocates a single color from a colormap.
     * @param color the color to allocate. On return the    <structfield>pixel</structfield> field will be    filled in if allocation succeeds.
     * @param writeable If %TRUE, the color is allocated writeable    (their values can later be changed using gdk_color_change()).    Writeable colors cannot be shared between applications.
     * @param best_match If %TRUE, GDK will attempt to do matching against    existing colors if the color cannot be allocated as requested.
     * @returns %TRUE if the allocation succeeded.
     */
    alloc_color(color: Color, writeable: boolean, best_match: boolean): boolean
    /**
     * Allocates colors from a colormap.
     * @param colors The color values to allocate. On return, the pixel    values for allocated colors will be filled in.
     * @param n_colors The number of colors in `colors`.
     * @param writeable If %TRUE, the colors are allocated writeable    (their values can later be changed using gdk_color_change()).    Writeable colors cannot be shared between applications.
     * @param best_match If %TRUE, GDK will attempt to do matching against    existing colors if the colors cannot be allocated as requested.
     * @param success An array of length `ncolors`. On return, this   indicates whether the corresponding color in `colors` was   successfully allocated or not.
     * @returns The number of colors that were not successfully allocated.
     */
    alloc_colors(colors: Color, n_colors: number, writeable: boolean, best_match: boolean, success: boolean): number
    /**
     * Changes the value of the first `ncolors` in a private colormap
     * to match the values in the <structfield>colors</structfield>
     * array in the colormap. This function is obsolete and
     * should not be used. See gdk_color_change().
     * @param ncolors the number of colors to change.
     */
    change(ncolors: number): void
    /**
     * Frees previously allocated colors.
     * @param colors the colors to free.
     * @param n_colors the number of colors in `colors`.
     */
    free_colors(colors: Color, n_colors: number): void
    /**
     * Locates the RGB color in `colormap` corresponding to the given
     * hardware pixel `pixel`. `pixel` must be a valid pixel in the
     * colormap; it's a programmer error to call this function with a
     * pixel which is not in the colormap. Hardware pixels are normally
     * obtained from gdk_colormap_alloc_colors(), or from a #GdkImage. (A
     * #GdkImage contains image data in hardware format, a #GdkPixbuf
     * contains image data in a canonical 24-bit RGB format.)
     * 
     * This function is rarely useful; it's used for example to
     * implement the eyedropper feature in #GtkColorSelection.
     * @param pixel pixel value in hardware display format
     * @param result #GdkColor with red, green, blue fields initialized
     */
    query_color(pixel: number, result: Color): void
    /**
     * Deprecated function; use g_object_unref() instead.
     */
    unref(): void

    // Class property signals of Gdk-2.0.Gdk.Colormap

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Colormap extends GObject.Object {

    // Own properties of Gdk-2.0.Gdk.Colormap

    static name: string
    static $gtype: GObject.GType<Colormap>

    // Constructors of Gdk-2.0.Gdk.Colormap

    constructor(config?: Colormap.ConstructorProperties) 
    /**
     * Creates a new colormap for the given visual.
     * @constructor 
     * @param visual a #GdkVisual.
     * @param allocate if %TRUE, the newly created colormap will be a private colormap, and all colors in it will be allocated for the applications use.
     * @returns the new #GdkColormap.
     */
    constructor(visual: Visual, allocate: boolean) 
    /**
     * Creates a new colormap for the given visual.
     * @constructor 
     * @param visual a #GdkVisual.
     * @param allocate if %TRUE, the newly created colormap will be a private colormap, and all colors in it will be allocated for the applications use.
     * @returns the new #GdkColormap.
     */
    static new(visual: Visual, allocate: boolean): Colormap
    _init(config?: Colormap.ConstructorProperties): void
    /**
     * Returns the size of the system's default colormap.
     * (See the description of struct #GdkColormap for an
     * explanation of the size of a colormap.)
     * @returns the size of the system's default colormap.
     */
    static get_system_size(): number
}

export module Device {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Device {

    // Own fields of Gdk-2.0.Gdk.Device

    parent_instance: GObject.Object
    name: string | null
    source: InputSource
    mode: InputMode
    has_cursor: boolean
    num_axes: number
    axes: DeviceAxis
    num_keys: number
    keys: DeviceKey

    // Owm methods of Gdk-2.0.Gdk.Device

    /**
     * Interprets an array of double as axis values for a given device,
     * and locates the value in the array for a given axis use.
     * @param axes pointer to an array of axes
     * @param use the use to look for
     * @param value location to store the found value.
     * @returns %TRUE if the given axis use was found, otherwise %FALSE
     */
    get_axis(axes: number, use: AxisUse, value: number): boolean
    /**
     * Returns the axis use for `index`.
     * @param index the index of the axis.
     * @returns a #GdkAxisUse specifying how the axis is used.
     */
    get_axis_use(index: number): AxisUse
    /**
     * Determines whether the pointer follows device motion.
     * @returns %TRUE if the pointer follows device motion
     */
    get_has_cursor(): boolean
    /**
     * Obtains the motion history for a device; given a starting and
     * ending timestamp, return all events in the motion history for
     * the device in the given range of time. Some windowing systems
     * do not support motion history, in which case, %FALSE will
     * be returned. (This is not distinguishable from the case where
     * motion history is supported and no events were found.)
     * @param window the window with respect to which which the event coordinates will be reported
     * @param start starting timestamp for range of events to return
     * @param stop ending timestamp for the range of events to return
     * @returns %TRUE if the windowing system supports motion history and  at least one event was found.
     */
    get_history(window: Window, start: number, stop: number): [ /* returnType */ boolean, /* events */ TimeCoord[] ]
    /**
     * If `index` has a valid keyval, this function will
     * fill in `keyval` and `modifiers` with the keyval settings.
     * @param index the index of the macro button to get.
     * @param keyval return value for the keyval.
     * @param modifiers return value for modifiers.
     */
    get_key(index: number, keyval: number, modifiers: ModifierType): void
    /**
     * Determines the mode of the device.
     * @returns a #GdkInputSource
     */
    get_mode(): InputMode
    /**
     * Gets the number of axes of a device.
     * @returns the number of axes of @device
     */
    get_n_axes(): number
    /**
     * Gets the number of keys of a device.
     * @returns the number of keys of @device
     */
    get_n_keys(): number
    /**
     * Determines the name of the device.
     * @returns a name
     */
    get_name(): string | null
    /**
     * Determines the type of the device.
     * @returns a #GdkInputSource
     */
    get_source(): InputSource
    get_state(window: Window, axes: number, mask: ModifierType): void
    set_axis_use(index_: number, use: AxisUse): void
    set_key(index_: number, keyval: number, modifiers: ModifierType): void
    set_mode(mode: InputMode): boolean
    set_source(source: InputSource): void

    // Class property signals of Gdk-2.0.Gdk.Device

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Device extends GObject.Object {

    // Own properties of Gdk-2.0.Gdk.Device

    static name: string
    static $gtype: GObject.GType<Device>

    // Constructors of Gdk-2.0.Gdk.Device

    constructor(config?: Device.ConstructorProperties) 
    _init(config?: Device.ConstructorProperties): void
    /**
     * Frees an array of #GdkTimeCoord that was returned by gdk_device_get_history().
     * @param events an array of #GdkTimeCoord.
     * @param n_events the length of the array.
     */
    static free_history(events: TimeCoord, n_events: number): /* events */ TimeCoord
}

export module Display {

    // Signal callback interfaces

    /**
     * Signal callback interface for `closed`
     */
    export interface ClosedSignalCallback {
        ($obj: Display, is_error: boolean): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Display {

    // Own fields of Gdk-2.0.Gdk.Display

    parent_instance: GObject.Object

    // Owm methods of Gdk-2.0.Gdk.Display

    /**
     * Emits a short beep on `display`
     */
    beep(): void
    /**
     * Closes the connection to the windowing system for the given display,
     * and cleans up associated resources.
     */
    close(): void
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
     */
    flush(): void
    /**
     * Returns the default size to use for cursors on `display`.
     * @returns the default cursor size.
     */
    get_default_cursor_size(): number
    /**
     * Gets the next #GdkEvent to be processed for `display,` fetching events from the
     * windowing system if necessary.
     * @returns the next #GdkEvent to be processed, or %NULL if no events are pending. The returned #GdkEvent should be freed with gdk_event_free().
     */
    get_event(): Event
    /**
     * Gets the maximal size to use for cursors on `display`.
     */
    get_maximal_cursor_size(): [ /* width */ number, /* height */ number ]
    /**
     * Gets the number of screen managed by the `display`.
     * @returns number of screens.
     */
    get_n_screens(): number
    /**
     * Gets the name of the display.
     * @returns a string representing the display name. This string is owned by GDK and should not be modified or freed.
     */
    get_name(): string | null
    /**
     * Gets the current location of the pointer and the current modifier
     * mask for a given display.
     */
    get_pointer(): [ /* screen */ Screen, /* x */ number, /* y */ number, /* mask */ ModifierType ]
    /**
     * Obtains the window underneath the mouse pointer, returning the location
     * of the pointer in that window in `win_x,` `win_y` for `screen`. Returns %NULL
     * if the window under the mouse pointer is not known to GDK (for example,
     * belongs to another application).
     * @returns the window under the mouse pointer, or %NULL
     */
    get_window_at_pointer(): [ /* returnType */ Window, /* win_x */ number, /* win_y */ number ]
    /**
     * Finds out if the display has been closed.
     * @returns %TRUE if the display is closed.
     */
    is_closed(): boolean
    /**
     * Release any keyboard grab
     * @param time_ a timestap (e.g #GDK_CURRENT_TIME).
     */
    keyboard_ungrab(time_: number): void
    /**
     * Gets a copy of the first #GdkEvent in the `display'`s event queue, without
     * removing the event from the queue.  (Note that this function will
     * not get more events from the windowing system.  It only checks the events
     * that have already been moved to the GDK event queue.)
     * @returns a copy of the first #GdkEvent on the event queue, or %NULL if no events are in the queue. The returned #GdkEvent should be freed with gdk_event_free().
     */
    peek_event(): Event
    /**
     * Test if the pointer is grabbed.
     * @returns %TRUE if an active X pointer grab is in effect
     */
    pointer_is_grabbed(): boolean
    /**
     * Release any pointer grab.
     * @param time_ a timestap (e.g. %GDK_CURRENT_TIME).
     */
    pointer_ungrab(time_: number): void
    /**
     * Appends a copy of the given event onto the front of the event
     * queue for `display`.
     * @param event a #GdkEvent.
     */
    put_event(event: Event): void
    /**
     * Request #GdkEventOwnerChange events for ownership changes
     * of the selection named by the given atom.
     * @param selection the #GdkAtom naming the selection for which             ownership change notification is requested
     * @returns whether #GdkEventOwnerChange events will               be sent.
     */
    request_selection_notification(selection: Atom): boolean
    /**
     * Sets the double click distance (two clicks within this distance
     * count as a double click and result in a #GDK_2BUTTON_PRESS event).
     * See also gdk_display_set_double_click_time().
     * Applications should <emphasis>not</emphasis> set this, it is a global
     * user-configured setting.
     * @param distance distance in pixels
     */
    set_double_click_distance(distance: number): void
    /**
     * Sets the double click time (two clicks within this time interval
     * count as a double click and result in a #GDK_2BUTTON_PRESS event).
     * Applications should <emphasis>not</emphasis> set this, it is a global
     * user-configured setting.
     * @param msec double click time in milliseconds (thousandths of a second)
     */
    set_double_click_time(msec: number): void
    /**
     * Issues a request to the clipboard manager to store the
     * clipboard data. On X11, this is a special program that works
     * according to the freedesktop clipboard specification, available at
     * <ulink url="http://www.freedesktop.org/Standards/clipboard-manager-spec">
     * http://www.freedesktop.org/Standards/clipboard-manager-spec</ulink>.
     * @param clipboard_window a #GdkWindow belonging to the clipboard owner
     * @param time_ a timestamp
     * @param targets an array of targets that should be saved, or %NULL                    if all available targets should be saved.
     * @param n_targets length of the `targets` array
     */
    store_clipboard(clipboard_window: Window, time_: number, targets: Atom, n_targets: number): void
    /**
     * Returns whether the speicifed display supports clipboard
     * persistance; i.e. if it's possible to store the clipboard data after an
     * application has quit. On X11 this checks if a clipboard daemon is
     * running.
     * @returns %TRUE if the display supports clipboard persistance.
     */
    supports_clipboard_persistence(): boolean
    /**
     * Returns %TRUE if gdk_window_set_composited() can be used
     * to redirect drawing on the window using compositing.
     * 
     * Currently this only works on X11 with XComposite and
     * XDamage extensions available.
     * @returns %TRUE if windows may be composited.
     */
    supports_composite(): boolean
    /**
     * Returns %TRUE if cursors can use an 8bit alpha channel
     * on `display`. Otherwise, cursors are restricted to bilevel
     * alpha (i.e. a mask).
     * @returns whether cursors can have alpha channels.
     */
    supports_cursor_alpha(): boolean
    /**
     * Returns %TRUE if multicolored cursors are supported
     * on `display`. Otherwise, cursors have only a forground
     * and a background color.
     * @returns whether cursors can have multiple colors.
     */
    supports_cursor_color(): boolean
    /**
     * Returns %TRUE if gdk_window_input_shape_combine_mask() can
     * be used to modify the input shape of windows on `display`.
     * @returns %TRUE if windows with modified input shape are supported
     */
    supports_input_shapes(): boolean
    /**
     * Returns whether #GdkEventOwnerChange events will be
     * sent when the owner of a selection changes.
     * @returns whether #GdkEventOwnerChange events will               be sent.
     */
    supports_selection_notification(): boolean
    /**
     * Returns %TRUE if gdk_window_shape_combine_mask() can
     * be used to create shaped windows on `display`.
     * @returns %TRUE if shaped windows are supported
     */
    supports_shapes(): boolean
    /**
     * Flushes any requests queued for the windowing system and waits until all
     * requests have been handled. This is often used for making sure that the
     * display is synchronized with the current state of the program. Calling
     * gdk_display_sync() before gdk_error_trap_pop() makes sure that any errors
     * generated from earlier requests are handled before the error trap is
     * removed.
     * 
     * This is most useful for X11. On windowing systems where requests are
     * handled synchronously, this function will do nothing.
     */
    sync(): void
    /**
     * Warps the pointer of `display` to the point `x,``y` on
     * the screen `screen,` unless the pointer is confined
     * to a window by a grab, in which case it will be moved
     * as far as allowed by the grab. Warping the pointer
     * creates events as if the user had moved the mouse
     * instantaneously to the destination.
     * 
     * Note that the pointer should normally be under the
     * control of the user. This function was added to cover
     * some rare use cases like keyboard navigation support
     * for the color picker in the #GtkColorSelectionDialog.
     * @param screen the screen of `display` to warp the pointer to
     * @param x the x coordinate of the destination
     * @param y the y coordinate of the destination
     */
    warp_pointer(screen: Screen, x: number, y: number): void

    // Own virtual methods of Gdk-2.0.Gdk.Display

    vfunc_closed(is_error: boolean): void
    vfunc_get_display_name(): string | null
    /**
     * Gets the number of screen managed by the `display`.
     * @virtual 
     * @returns number of screens.
     */
    vfunc_get_n_screens(): number

    // Own signals of Gdk-2.0.Gdk.Display

    connect(sigName: "closed", callback: Display.ClosedSignalCallback): number
    connect_after(sigName: "closed", callback: Display.ClosedSignalCallback): number
    emit(sigName: "closed", is_error: boolean, ...args: any[]): void

    // Class property signals of Gdk-2.0.Gdk.Display

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Display extends GObject.Object {

    // Own properties of Gdk-2.0.Gdk.Display

    static name: string
    static $gtype: GObject.GType<Display>

    // Constructors of Gdk-2.0.Gdk.Display

    constructor(config?: Display.ConstructorProperties) 
    _init(config?: Display.ConstructorProperties): void
    /**
     * Gets the default #GdkDisplay. This is a convenience
     * function for
     * <literal>gdk_display_manager_get_default_display (gdk_display_manager_get ())</literal>.
     * @returns a #GdkDisplay, or %NULL if there is no default   display.
     */
    static get_default(): Display
}

export module DisplayManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `display-opened`
     */
    export interface DisplayOpenedSignalCallback {
        ($obj: DisplayManager, display: Display): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gdk-2.0.Gdk.DisplayManager

        default_display?: Display | null
    }

}

export interface DisplayManager {

    // Own properties of Gdk-2.0.Gdk.DisplayManager

    default_display: Display

    // Owm methods of Gdk-2.0.Gdk.DisplayManager

    /**
     * Gets the default #GdkDisplay.
     * @returns a #GdkDisplay, or %NULL if there is no default   display.
     */
    get_default_display(): Display
    /**
     * List all currently open displays.
     * @returns a newly allocated #GSList of #GdkDisplay objects. Free this list with g_slist_free() when you are done with it.
     */
    list_displays(): Display[]
    /**
     * Sets `display` as the default display.
     * @param display a #GdkDisplay
     */
    set_default_display(display: Display): void

    // Own virtual methods of Gdk-2.0.Gdk.DisplayManager

    vfunc_display_opened(display: Display): void

    // Own signals of Gdk-2.0.Gdk.DisplayManager

    connect(sigName: "display-opened", callback: DisplayManager.DisplayOpenedSignalCallback): number
    connect_after(sigName: "display-opened", callback: DisplayManager.DisplayOpenedSignalCallback): number
    emit(sigName: "display-opened", display: Display, ...args: any[]): void

    // Class property signals of Gdk-2.0.Gdk.DisplayManager

    connect(sigName: "notify::default-display", callback: (($obj: DisplayManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-display", callback: (($obj: DisplayManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-display", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DisplayManager extends GObject.Object {

    // Own properties of Gdk-2.0.Gdk.DisplayManager

    static name: string
    static $gtype: GObject.GType<DisplayManager>

    // Constructors of Gdk-2.0.Gdk.DisplayManager

    constructor(config?: DisplayManager.ConstructorProperties) 
    _init(config?: DisplayManager.ConstructorProperties): void
    /**
     * Gets the singleton #GdkDisplayManager object.
     * @returns The global #GdkDisplayManager singleton; gdk_parse_pargs(), gdk_init(), or gdk_init_check() must have been called first.
     */
    static get(): DisplayManager
}

export module DragContext {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DragContext {

    // Own fields of Gdk-2.0.Gdk.DragContext

    parent_instance: GObject.Object
    protocol: DragProtocol
    is_source: boolean
    source_window: Window
    dest_window: Window
    targets: any[]
    actions: DragAction
    suggested_action: DragAction
    action: DragAction
    start_time: number

    // Owm methods of Gdk-2.0.Gdk.DragContext

    /**
     * Determines the bitmask of actions proposed by the source if
     * gdk_drag_context_suggested_action() returns GDK_ACTION_ASK.
     * @returns the #GdkDragAction flags
     */
    get_actions(): DragAction
    /**
     * Returns the destination windw for the DND operation.
     * @returns a #GdkWindow
     */
    get_dest_window(): Window
    /**
     * Returns the drag protocol thats used by this context.
     * @returns the drag protocol
     */
    get_protocol(): DragProtocol
    /**
     * Determines the action chosen by the drag destination.
     * @returns a #GdkDragAction value
     */
    get_selected_action(): DragAction
    /**
     * Returns the #GdkWindow where the DND operation started.
     * @returns a #GdkWindow
     */
    get_source_window(): Window
    /**
     * Determines the suggested drag action of the context.
     * @returns a #GdkDragAction value
     */
    get_suggested_action(): DragAction
    /**
     * Retrieves the list of targets of the context.
     * @returns a #GList of targets
     */
    list_targets(): Atom[]
    /**
     * Deprecated function; use g_object_ref() instead.
     */
    ref(): void

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Deprecated function; use g_object_unref() instead.
     */
    unref(): void

    // Class property signals of Gdk-2.0.Gdk.DragContext

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class DragContext extends GObject.Object {

    // Own properties of Gdk-2.0.Gdk.DragContext

    static name: string
    static $gtype: GObject.GType<DragContext>

    // Constructors of Gdk-2.0.Gdk.DragContext

    constructor(config?: DragContext.ConstructorProperties) 
    /**
     * Creates a new #GdkDragContext.
     * @constructor 
     * @returns the newly created #GdkDragContext.
     */
    constructor() 
    /**
     * Creates a new #GdkDragContext.
     * @constructor 
     * @returns the newly created #GdkDragContext.
     */
    static new(): DragContext
    _init(config?: DragContext.ConstructorProperties): void
}

export module Drawable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Drawable {

    // Own fields of Gdk-2.0.Gdk.Drawable

    parent_instance: GObject.Object

    // Owm methods of Gdk-2.0.Gdk.Drawable

    /**
     * Equivalent to g_object_get_data(); the #GObject variant should be
     * used instead.
     * @param key name the data was stored under
     * @returns the data stored at @key
     */
    get_data(key: string | null): any | null
    /**
     * Obtains the bit depth of the drawable, that is, the number of bits
     * that make up a pixel in the drawable's visual. Examples are 8 bits
     * per pixel, 24 bits per pixel, etc.
     * @returns number of bits per pixel
     */
    get_depth(): number
    /**
     * Fills *`width` and *`height` with the size of `drawable`.
     * `width` or `height` can be %NULL if you only want the other one.
     * 
     * On the X11 platform, if `drawable` is a #GdkWindow, the returned
     * size is the size reported in the most-recently-processed configure
     * event, rather than the current size on the X server.
     */
    get_size(): [ /* width */ number, /* height */ number ]
    /**
     * Sets the colormap associated with `drawable`. Normally this will
     * happen automatically when the drawable is created; you only need to
     * use this function if the drawable-creating function did not have a
     * way to determine the colormap, and you then use drawable operations
     * that require a colormap. The colormap for all drawables and
     * graphics contexts you intend to use together should match. i.e.
     * when using a #GdkGC to draw to a drawable, or copying one drawable
     * to another, the colormaps should match.
     * @param colormap a #GdkColormap
     */
    set_colormap(colormap: Colormap): void
    /**
     * This function is equivalent to g_object_set_data(),
     * the #GObject variant should be used instead.
     * @param key name to store the data under
     * @param data arbitrary data
     * @param destroy_func function to free `data,` or %NULL
     */
    set_data(key: string | null, data: any | null, destroy_func: GLib.DestroyNotify | null): void

    // Overloads of set_data

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
    set_data(key: string | null, data: any | null): void
    /**
     * Deprecated equivalent of calling g_object_unref() on `drawable`.
     */
    unref(): void

    // Own virtual methods of Gdk-2.0.Gdk.Drawable

    vfunc_create_cairo_surface(width: number, height: number): cairo.Surface
    vfunc_draw_arc(gc: GC, filled: boolean, x: number, y: number, width: number, height: number, angle1: number, angle2: number): void
    vfunc_draw_drawable(gc: GC, src: Drawable, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number): void
    vfunc_draw_drawable_with_src(gc: GC, src: Drawable, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number, original_src: Drawable): void
    vfunc_draw_glyphs(gc: GC, font: Pango.Font, x: number, y: number, glyphs: Pango.GlyphString): void
    vfunc_draw_glyphs_transformed(gc: GC, matrix: Pango.Matrix, font: Pango.Font, x: number, y: number, glyphs: Pango.GlyphString): void
    vfunc_draw_image(gc: GC, image: Image, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number): void
    vfunc_draw_lines(gc: GC, points: Point, npoints: number): void
    vfunc_draw_pixbuf(gc: GC, pixbuf: GdkPixbuf.Pixbuf, src_x: number, src_y: number, dest_x: number, dest_y: number, width: number, height: number, dither: RgbDither, x_dither: number, y_dither: number): void
    vfunc_draw_points(gc: GC, points: Point, npoints: number): void
    vfunc_draw_polygon(gc: GC, filled: boolean, points: Point, npoints: number): void
    vfunc_draw_rectangle(gc: GC, filled: boolean, x: number, y: number, width: number, height: number): void
    vfunc_draw_segments(gc: GC, segs: Segment, nsegs: number): void
    vfunc_draw_text(font: Font, gc: GC, x: number, y: number, text: string | null, text_length: number): void
    vfunc_draw_text_wc(font: Font, gc: GC, x: number, y: number, text: WChar, text_length: number): void
    vfunc_draw_trapezoids(gc: GC, trapezoids: Trapezoid, n_trapezoids: number): void
    /**
     * Obtains the bit depth of the drawable, that is, the number of bits
     * that make up a pixel in the drawable's visual. Examples are 8 bits
     * per pixel, 24 bits per pixel, etc.
     * @virtual 
     * @returns number of bits per pixel
     */
    vfunc_get_depth(): number
    /**
     * Fills *`width` and *`height` with the size of `drawable`.
     * `width` or `height` can be %NULL if you only want the other one.
     * 
     * On the X11 platform, if `drawable` is a #GdkWindow, the returned
     * size is the size reported in the most-recently-processed configure
     * event, rather than the current size on the X server.
     * @virtual 
     */
    vfunc_get_size(): [ /* width */ number, /* height */ number ]
    vfunc_ref_cairo_surface(): cairo.Surface
    vfunc_set_cairo_clip(cr: cairo.Context): void
    /**
     * Sets the colormap associated with `drawable`. Normally this will
     * happen automatically when the drawable is created; you only need to
     * use this function if the drawable-creating function did not have a
     * way to determine the colormap, and you then use drawable operations
     * that require a colormap. The colormap for all drawables and
     * graphics contexts you intend to use together should match. i.e.
     * when using a #GdkGC to draw to a drawable, or copying one drawable
     * to another, the colormaps should match.
     * @virtual 
     * @param cmap 
     */
    vfunc_set_colormap(cmap: Colormap): void

    // Class property signals of Gdk-2.0.Gdk.Drawable

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Drawable extends GObject.Object {

    // Own properties of Gdk-2.0.Gdk.Drawable

    static name: string
    static $gtype: GObject.GType<Drawable>

    // Constructors of Gdk-2.0.Gdk.Drawable

    constructor(config?: Drawable.ConstructorProperties) 
    _init(config?: Drawable.ConstructorProperties): void
}

export module GC {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface GC {

    // Own fields of Gdk-2.0.Gdk.GC

    parent_instance: GObject.Object
    clip_x_origin: number
    clip_y_origin: number
    ts_x_origin: number
    ts_y_origin: number
    colormap: Colormap

    // Owm methods of Gdk-2.0.Gdk.GC

    /**
     * Copy the set of values from one graphics context
     * onto another graphics context.
     * @param src_gc the source graphics context.
     */
    copy(src_gc: GC): void
    /**
     * Retrieves the current values from a graphics context. Note that
     * only the pixel values of the `values->`foreground and `values->`background
     * are filled, use gdk_colormap_query_color() to obtain the rgb values
     * if you need them.
     * @param values the #GdkGCValues structure in which to store the results.
     */
    get_values(values: GCValues): void
    /**
     * Offset attributes such as the clip and tile-stipple origins
     * of the GC so that drawing at x - x_offset, y - y_offset with
     * the offset GC  has the same effect as drawing at x, y with the original
     * GC.
     * @param x_offset amount by which to offset the GC in the X direction
     * @param y_offset amount by which to offset the GC in the Y direction
     */
    offset(x_offset: number, y_offset: number): void
    /**
     * Sets the background color for a graphics context.
     * Note that this function uses `color->`pixel, use
     * gdk_gc_set_rgb_bg_color() to specify the background
     * color as red, green, blue components.
     * @param color the new background color.
     */
    set_background(color: Color): void
    /**
     * Sets the clip mask for a graphics context from a bitmap.
     * The clip mask is interpreted relative to the clip
     * origin. (See gdk_gc_set_clip_origin()).
     * @param mask a bitmap.
     */
    set_clip_mask(mask: Bitmap): void
    /**
     * Sets the origin of the clip mask. The coordinates are
     * interpreted relative to the upper-left corner of
     * the destination drawable of the current operation.
     * @param x the x-coordinate of the origin.
     * @param y the y-coordinate of the origin.
     */
    set_clip_origin(x: number, y: number): void
    /**
     * Sets the clip mask for a graphics context from a
     * rectangle. The clip mask is interpreted relative to the clip
     * origin. (See gdk_gc_set_clip_origin()).
     * @param rectangle the rectangle to clip to.
     */
    set_clip_rectangle(rectangle: Rectangle): void
    /**
     * Sets the clip mask for a graphics context from a region structure.
     * The clip mask is interpreted relative to the clip origin. (See
     * gdk_gc_set_clip_origin()).
     * @param region the #GdkRegion.
     */
    set_clip_region(region: Region): void
    /**
     * Sets the colormap for the GC to the given colormap. The depth
     * of the colormap's visual must match the depth of the drawable
     * for which the GC was created.
     * @param colormap a #GdkColormap
     */
    set_colormap(colormap: Colormap): void
    /**
     * Sets the way dashed-lines are drawn. Lines will be
     * drawn with alternating on and off segments of the
     * lengths specified in `dash_list`. The manner in
     * which the on and off segments are drawn is determined
     * by the `line_style` value of the GC. (This can
     * be changed with gdk_gc_set_line_attributes().)
     * 
     * The `dash_offset` defines the phase of the pattern,
     * specifying how many pixels into the dash-list the pattern
     * should actually begin.
     * @param dash_offset the phase of the dash pattern.
     * @param dash_list an array of dash lengths.
     * @param n the number of elements in `dash_list`.
     */
    set_dashes(dash_offset: number, dash_list: number, n: number): void
    /**
     * Sets whether copying non-visible portions of a drawable
     * using this graphics context generate exposure events
     * for the corresponding regions of the destination
     * drawable. (See gdk_draw_drawable()).
     * @param exposures if %TRUE, exposure events will be generated.
     */
    set_exposures(exposures: boolean): void
    /**
     * Set the fill mode for a graphics context.
     * @param fill the new fill mode.
     */
    set_fill(fill: Fill): void
    /**
     * Sets the font for a graphics context. (Note that
     * all text-drawing functions in GDK take a `font`
     * argument; the value set here is used when that
     * argument is %NULL.)
     * @param font the new font.
     */
    set_font(font: Font): void
    /**
     * Sets the foreground color for a graphics context.
     * Note that this function uses `color->`pixel, use
     * gdk_gc_set_rgb_fg_color() to specify the foreground
     * color as red, green, blue components.
     * @param color the new foreground color.
     */
    set_foreground(color: Color): void
    /**
     * Determines how the current pixel values and the
     * pixel values being drawn are combined to produce
     * the final pixel values.
     * @param function_ the #GdkFunction to use
     */
    set_function(function_: Function): void
    /**
     * Sets various attributes of how lines are drawn. See
     * the corresponding members of #GdkGCValues for full
     * explanations of the arguments.
     * @param line_width the width of lines.
     * @param line_style the dash-style for lines.
     * @param cap_style the manner in which the ends of lines are drawn.
     * @param join_style the in which lines are joined together.
     */
    set_line_attributes(line_width: number, line_style: LineStyle, cap_style: CapStyle, join_style: JoinStyle): void
    /**
     * Set the background color of a GC using an unallocated color. The
     * pixel value for the color will be determined using GdkRGB. If the
     * colormap for the GC has not previously been initialized for GdkRGB,
     * then for pseudo-color colormaps (colormaps with a small modifiable
     * number of colors), a colorcube will be allocated in the colormap.
     * 
     * Calling this function for a GC without a colormap is an error.
     * @param color an unallocated #GdkColor.
     */
    set_rgb_bg_color(color: Color): void
    /**
     * Set the foreground color of a GC using an unallocated color. The
     * pixel value for the color will be determined using GdkRGB. If the
     * colormap for the GC has not previously been initialized for GdkRGB,
     * then for pseudo-color colormaps (colormaps with a small modifiable
     * number of colors), a colorcube will be allocated in the colormap.
     * 
     * Calling this function for a GC without a colormap is an error.
     * @param color an unallocated #GdkColor.
     */
    set_rgb_fg_color(color: Color): void
    /**
     * Set the stipple bitmap for a graphics context. The
     * stipple will only be used if the fill mode is
     * %GDK_STIPPLED or %GDK_OPAQUE_STIPPLED.
     * @param stipple the new stipple bitmap.
     */
    set_stipple(stipple: Pixmap): void
    /**
     * Sets how drawing with this GC on a window will affect child
     * windows of that window.
     * @param mode the subwindow mode.
     */
    set_subwindow(mode: SubwindowMode): void
    /**
     * Set a tile pixmap for a graphics context.
     * This will only be used if the fill mode
     * is %GDK_TILED.
     * @param tile the new tile pixmap.
     */
    set_tile(tile: Pixmap): void
    /**
     * Set the origin when using tiles or stipples with
     * the GC. The tile or stipple will be aligned such
     * that the upper left corner of the tile or stipple
     * will coincide with this point.
     * @param x the x-coordinate of the origin.
     * @param y the y-coordinate of the origin.
     */
    set_ts_origin(x: number, y: number): void
    /**
     * Sets attributes of a graphics context in bulk. For each flag set in
     * `values_mask,` the corresponding field will be read from `values` and
     * set as the new value for `gc`. If you're only setting a few values
     * on `gc,` calling individual "setter" functions is likely more
     * convenient.
     * @param values struct containing the new values
     * @param values_mask mask indicating which struct fields are to be used
     */
    set_values(values: GCValues, values_mask: GCValuesMask): void
    /**
     * Decrement the reference count of `gc`.
     */
    unref(): void

    // Own virtual methods of Gdk-2.0.Gdk.GC

    /**
     * Retrieves the current values from a graphics context. Note that
     * only the pixel values of the `values->`foreground and `values->`background
     * are filled, use gdk_colormap_query_color() to obtain the rgb values
     * if you need them.
     * @virtual 
     * @param values the #GdkGCValues structure in which to store the results.
     */
    vfunc_get_values(values: GCValues): void
    /**
     * Sets the way dashed-lines are drawn. Lines will be
     * drawn with alternating on and off segments of the
     * lengths specified in `dash_list`. The manner in
     * which the on and off segments are drawn is determined
     * by the `line_style` value of the GC. (This can
     * be changed with gdk_gc_set_line_attributes().)
     * 
     * The `dash_offset` defines the phase of the pattern,
     * specifying how many pixels into the dash-list the pattern
     * should actually begin.
     * @virtual 
     * @param dash_offset the phase of the dash pattern.
     * @param dash_list an array of dash lengths.
     * @param n the number of elements in `dash_list`.
     */
    vfunc_set_dashes(dash_offset: number, dash_list: number, n: number): void
    /**
     * Sets attributes of a graphics context in bulk. For each flag set in
     * `values_mask,` the corresponding field will be read from `values` and
     * set as the new value for `gc`. If you're only setting a few values
     * on `gc,` calling individual "setter" functions is likely more
     * convenient.
     * @virtual 
     * @param values struct containing the new values
     * @param mask 
     */
    vfunc_set_values(values: GCValues, mask: GCValuesMask): void

    // Class property signals of Gdk-2.0.Gdk.GC

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class GC extends GObject.Object {

    // Own properties of Gdk-2.0.Gdk.GC

    static name: string
    static $gtype: GObject.GType<GC>

    // Constructors of Gdk-2.0.Gdk.GC

    constructor(config?: GC.ConstructorProperties) 
    /**
     * Create a new graphics context with default values.
     * @constructor 
     * @param drawable a #GdkDrawable. The created GC must always be used   with drawables of the same depth as this one.
     * @returns the new graphics context.
     */
    constructor(drawable: Drawable) 
    /**
     * Create a new graphics context with default values.
     * @constructor 
     * @param drawable a #GdkDrawable. The created GC must always be used   with drawables of the same depth as this one.
     * @returns the new graphics context.
     */
    static new(drawable: Drawable): GC
    /**
     * Create a new GC with the given initial values.
     * @constructor 
     * @param drawable a #GdkDrawable. The created GC must always be used   with drawables of the same depth as this one.
     * @param values a structure containing initial values for the GC.
     * @param values_mask a bit mask indicating which fields in `values`   are set.
     * @returns the new graphics context.
     */
    static new_with_values(drawable: Drawable, values: GCValues, values_mask: GCValuesMask): GC
    _init(config?: GC.ConstructorProperties): void
}

export module Image {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Image {

    // Own fields of Gdk-2.0.Gdk.Image

    parent_instance: GObject.Object
    type: ImageType
    visual: Visual
    byte_order: ByteOrder
    width: number
    height: number
    depth: number
    bpp: number
    bpl: number
    bits_per_pixel: number
    mem: any
    colormap: Colormap

    // Owm methods of Gdk-2.0.Gdk.Image

    /**
     * Determines the number of bits per pixel of the image.
     * @returns the bits per pixel
     */
    get_bits_per_pixel(): number
    /**
     * Determines the byte order of the image.
     * @returns a #GdkVisual
     */
    get_byte_order(): ByteOrder
    /**
     * Determines the number of bytes per line of the image.
     * @returns the bytes per line
     */
    get_bytes_per_line(): number
    /**
     * Determines the number of bytes per pixel of the image.
     * @returns the bytes per pixel
     */
    get_bytes_per_pixel(): number
    /**
     * Determines the depth of the image.
     * @returns the depth
     */
    get_depth(): number
    /**
     * Determines the height of the image.
     * @returns the height
     */
    get_height(): number
    /**
     * Determines the type of a given image.
     * @returns the #GdkImageType of the image
     */
    get_image_type(): ImageType
    get_pixel(x: number, y: number): number
    /**
     * Returns a pointer to the pixel data of the image.
     * @returns the pixel data of the image
     */
    get_pixels(): any | null
    /**
     * Determines the width of the image.
     * @returns the width
     */
    get_width(): number
    put_pixel(x: number, y: number, pixel: number): void
    /**
     * Sets the colormap for the image to the given colormap.  Normally
     * there's no need to use this function, images are created with the
     * correct colormap if you get the image from a drawable. If you
     * create the image from scratch, use the colormap of the drawable you
     * intend to render the image to.
     * @param colormap a #GdkColormap
     */
    set_colormap(colormap: Colormap): void
    /**
     * Deprecated function; use g_object_unref() instead.
     */
    unref(): void

    // Class property signals of Gdk-2.0.Gdk.Image

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Image extends GObject.Object {

    // Own properties of Gdk-2.0.Gdk.Image

    static name: string
    static $gtype: GObject.GType<Image>

    // Constructors of Gdk-2.0.Gdk.Image

    constructor(config?: Image.ConstructorProperties) 
    constructor(type: ImageType, visual: Visual, width: number, height: number) 
    static new(type: ImageType, visual: Visual, width: number, height: number): Image
    _init(config?: Image.ConstructorProperties): void
}

export module Keymap {

    // Signal callback interfaces

    /**
     * Signal callback interface for `direction-changed`
     */
    export interface DirectionChangedSignalCallback {
        ($obj: Keymap): void
    }

    /**
     * Signal callback interface for `keys-changed`
     */
    export interface KeysChangedSignalCallback {
        ($obj: Keymap): void
    }

    /**
     * Signal callback interface for `state-changed`
     */
    export interface StateChangedSignalCallback {
        ($obj: Keymap): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Keymap {

    // Own fields of Gdk-2.0.Gdk.Keymap

    parent_instance: GObject.Object
    display: Display

    // Owm methods of Gdk-2.0.Gdk.Keymap

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
     */
    add_virtual_modifiers(state: ModifierType): void
    /**
     * Returns whether the Caps Lock modifer is locked.
     * @returns %TRUE if Caps Lock is on
     */
    get_caps_lock_state(): boolean
    /**
     * Returns the direction of effective layout of the keymap.
     * 
     * Note that passing %NULL for `keymap` is deprecated and will stop
     * to work in GTK+ 3.0. Use gdk_keymap_get_for_display() instead.
     * @returns %PANGO_DIRECTION_LTR or %PANGO_DIRECTION_RTL   if it can determine the direction. %PANGO_DIRECTION_NEUTRAL   otherwise.
     */
    get_direction(): Pango.Direction
    /**
     * Returns the keyvals bound to `hardware_keycode`.
     * The Nth #GdkKeymapKey in `keys` is bound to the Nth
     * keyval in `keyvals`. Free the returned arrays with g_free().
     * When a keycode is pressed by the user, the keyval from
     * this list of entries is selected by considering the effective
     * keyboard group and level. See gdk_keymap_translate_keyboard_state().
     * 
     * Note that passing %NULL for `keymap` is deprecated and will stop
     * to work in GTK+ 3.0. Use gdk_keymap_get_for_display() instead.
     * @param hardware_keycode a keycode
     * @param n_entries length of `keys` and `keyvals`
     * @returns %TRUE if there were any entries
     */
    get_entries_for_keycode(hardware_keycode: number, n_entries: number): [ /* returnType */ boolean, /* keys */ KeymapKey, /* keyvals */ number ]
    /**
     * Obtains a list of keycode/group/level combinations that will
     * generate `keyval`. Groups and levels are two kinds of keyboard mode;
     * in general, the level determines whether the top or bottom symbol
     * on a key is used, and the group determines whether the left or
     * right symbol is used. On US keyboards, the shift key changes the
     * keyboard level, and there are no groups. A group switch key might
     * convert a keyboard between Hebrew to English modes, for example.
     * #GdkEventKey contains a %group field that indicates the active
     * keyboard group. The level is computed from the modifier mask.
     * The returned array should be freed
     * with g_free().
     * 
     * Note that passing %NULL for `keymap` is deprecated and will stop
     * to work in GTK+ 3.0. Use gdk_keymap_get_for_display() instead.
     * @param keyval a keyval, such as %GDK_a, %GDK_Up, %GDK_Return, etc.
     * @returns %TRUE if keys were found and returned
     */
    get_entries_for_keyval(keyval: number): [ /* returnType */ boolean, /* keys */ KeymapKey, /* n_keys */ number ]
    /**
     * Determines if keyboard layouts for both right-to-left and left-to-right
     * languages are in use.
     * 
     * Note that passing %NULL for `keymap` is deprecated and will stop
     * to work in GTK+ 3.0. Use gdk_keymap_get_for_display() instead.
     * @returns %TRUE if there are layouts in both directions, %FALSE otherwise
     */
    have_bidi_layouts(): boolean
    /**
     * Looks up the keyval mapped to a keycode/group/level triplet.
     * If no keyval is bound to `key,` returns 0. For normal user input,
     * you want to use gdk_keymap_translate_keyboard_state() instead of
     * this function, since the effective group/level may not be
     * the same as the current keyboard state.
     * 
     * Note that passing %NULL for `keymap` is deprecated and will stop
     * to work in GTK+ 3.0. Use gdk_keymap_get_for_display() instead.
     * @param key a #GdkKeymapKey with keycode, group, and level initialized
     * @returns a keyval, or 0 if none was mapped to the given @key
     */
    lookup_key(key: KeymapKey): number
    /**
     * Maps the virtual modifiers (i.e. Super, Hyper and Meta) which
     * are set in `state` to their non-virtual counterparts (i.e. Mod2,
     * Mod3,...) and set the corresponding bits in `state`.
     * 
     * This function is useful when matching key events against
     * accelerators.
     * @param state pointer to the modifier state to map
     * @returns %TRUE if no virtual modifiers were mapped to the     same non-virtual modifier. Note that %FALSE is also returned     if a virtual modifier is mapped to a non-virtual modifier that     was already set in @state.
     */
    map_virtual_modifiers(state: ModifierType): boolean
    /**
     * Translates the contents of a #GdkEventKey into a keyval, effective
     * group, and level. Modifiers that affected the translation and
     * are thus unavailable for application use are returned in
     * `consumed_modifiers`.  See <xref linkend="key-group-explanation"/> for an explanation of
     * groups and levels.  The `effective_group` is the group that was
     * actually used for the translation; some keys such as Enter are not
     * affected by the active keyboard group. The `level` is derived from
     * `state`. For convenience, #GdkEventKey already contains the translated
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
     * be returned in `consumed_modifiers;` multi-modifier combinations
     * are returned only when actually found in `state`. When you store
     * accelerators, you should always store them with consumed modifiers
     * removed. Store <literal>&lt;Control&gt;plus</literal>,
     * not <literal>&lt;Control&gt;&lt;Shift&gt;plus</literal>,
     * </para></note>
     * 
     * Note that passing %NULL for `keymap` is deprecated and will stop
     * to work in GTK+ 3.0. Use gdk_keymap_get_for_display() instead.
     * @param hardware_keycode a keycode
     * @param state a modifier state
     * @param group active keyboard group
     * @returns %TRUE if there was a keyval bound to the keycode/state/group
     */
    translate_keyboard_state(hardware_keycode: number, state: ModifierType, group: number): [ /* returnType */ boolean, /* keyval */ number, /* effective_group */ number, /* level */ number, /* consumed_modifiers */ ModifierType ]

    // Own virtual methods of Gdk-2.0.Gdk.Keymap

    vfunc_direction_changed(): void
    vfunc_keys_changed(): void
    vfunc_state_changed(): void

    // Own signals of Gdk-2.0.Gdk.Keymap

    connect(sigName: "direction-changed", callback: Keymap.DirectionChangedSignalCallback): number
    connect_after(sigName: "direction-changed", callback: Keymap.DirectionChangedSignalCallback): number
    emit(sigName: "direction-changed", ...args: any[]): void
    connect(sigName: "keys-changed", callback: Keymap.KeysChangedSignalCallback): number
    connect_after(sigName: "keys-changed", callback: Keymap.KeysChangedSignalCallback): number
    emit(sigName: "keys-changed", ...args: any[]): void
    connect(sigName: "state-changed", callback: Keymap.StateChangedSignalCallback): number
    connect_after(sigName: "state-changed", callback: Keymap.StateChangedSignalCallback): number
    emit(sigName: "state-changed", ...args: any[]): void

    // Class property signals of Gdk-2.0.Gdk.Keymap

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Keymap extends GObject.Object {

    // Own properties of Gdk-2.0.Gdk.Keymap

    static name: string
    static $gtype: GObject.GType<Keymap>

    // Constructors of Gdk-2.0.Gdk.Keymap

    constructor(config?: Keymap.ConstructorProperties) 
    _init(config?: Keymap.ConstructorProperties): void
}

export module PangoRenderer {

    // Constructor properties interface

    export interface ConstructorProperties extends Pango.Renderer.ConstructorProperties {

        // Own constructor properties of Gdk-2.0.Gdk.PangoRenderer

        screen?: Screen | null
    }

}

export interface PangoRenderer {

    // Own properties of Gdk-2.0.Gdk.PangoRenderer

    readonly screen: Screen

    // Owm methods of Gdk-2.0.Gdk.PangoRenderer

    /**
     * Sets the drawable the renderer draws to.
     * @param drawable the new target drawable, or %NULL
     */
    set_drawable(drawable: Drawable | null): void
    /**
     * Sets the GC the renderer draws with. Note that the GC must not be
     * modified until it is unset by calling the function again with
     * %NULL for the `gc` parameter, since GDK may make internal copies
     * of the GC which won't be updated to follow changes to the
     * original GC.
     * @param gc the new GC to use for drawing, or %NULL
     */
    set_gc(gc: GC | null): void
    /**
     * Sets the color for a particular render part (foreground,
     * background, underline, etc.), overriding any attributes on the layouts
     * renderered with this renderer.
     * @param part the part to render to set the color of
     * @param color the color to use, or %NULL to unset a previously         set override color.
     */
    set_override_color(part: Pango.RenderPart, color: Color | null): void
    /**
     * Sets the stipple for one render part (foreground, background, underline,
     * etc.) Note that this is overwritten when iterating through the individual
     * styled runs of a #PangoLayout or #PangoLayoutLine. This function is thus
     * only useful when you call low level functions like pango_renderer_draw_glyphs()
     * directly, or in the 'prepare_run' virtual function of a subclass of
     * #GdkPangoRenderer.
     * @param part the part to render with the stipple
     * @param stipple the new stipple value.
     */
    set_stipple(part: Pango.RenderPart, stipple: Bitmap): void

    // Class property signals of Gdk-2.0.Gdk.PangoRenderer

    connect(sigName: "notify::screen", callback: (($obj: PangoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: PangoRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GdkPangoRenderer is a subclass of #PangoRenderer used for rendering
 * Pango objects into GDK drawables. The default renderer for a particular
 * screen is obtained with gdk_pango_renderer_get_default(); Pango
 * functions like pango_renderer_draw_layout() and
 * pango_renderer_draw_layout_line() are then used to draw objects with
 * the renderer.
 * 
 * In most simple cases, applications can just use gdk_draw_layout(), and
 * don't need to directly use #GdkPangoRenderer at all. Using the
 * #GdkPangoRenderer directly is most useful when working with a
 * transformation such as a rotation, because the Pango drawing functions
 * take user space coordinates (coordinates before the transformation)
 * instead of device coordinates.
 * 
 * In certain cases it can be useful to subclass #GdkPangoRenderer. Examples
 * of reasons to do this are to add handling of custom attributes by
 * overriding 'prepare_run' or to do custom drawing of embedded objects
 * by overriding 'draw_shape'.
 * @class 
 */
export class PangoRenderer extends Pango.Renderer {

    // Own properties of Gdk-2.0.Gdk.PangoRenderer

    static name: string
    static $gtype: GObject.GType<PangoRenderer>

    // Constructors of Gdk-2.0.Gdk.PangoRenderer

    constructor(config?: PangoRenderer.ConstructorProperties) 
    /**
     * Creates a new #PangoRenderer for `screen`. Normally you can use the
     * results of gdk_pango_renderer_get_default() rather than creating a new
     * renderer.
     * @constructor 
     * @param screen a #GdkScreen
     * @returns a newly created #PangoRenderer. Free with g_object_unref().
     */
    constructor(screen: Screen) 
    /**
     * Creates a new #PangoRenderer for `screen`. Normally you can use the
     * results of gdk_pango_renderer_get_default() rather than creating a new
     * renderer.
     * @constructor 
     * @param screen a #GdkScreen
     * @returns a newly created #PangoRenderer. Free with g_object_unref().
     */
    static new(screen: Screen): PangoRenderer
    _init(config?: PangoRenderer.ConstructorProperties): void
}

export module Pixmap {

    // Constructor properties interface

    export interface ConstructorProperties extends Drawable.ConstructorProperties {
    }

}

export interface Pixmap {

    // Own fields of Gdk-2.0.Gdk.Pixmap

    parent_instance: GObject.Object

    // Owm methods of Gdk-2.0.Gdk.Pixmap

    /**
     * This function is purely to make it possible to query the size of pixmaps
     * even when compiling without deprecated symbols and you must use pixmaps.
     * It is identical to gdk_drawable_get_size(), but for pixmaps.
     */
    get_size(): [ /* width */ number, /* height */ number ]

    // Conflicting methods

    /**
     * This function is equivalent to g_object_set_data(),
     * the #GObject variant should be used instead.
     * @param key name to store the data under
     * @param data arbitrary data
     * @param destroy_func function to free `data,` or %NULL
     */
    set_data(key: string | null, data: any | null, destroy_func: GLib.DestroyNotify | null): void

    // Overloads of set_data

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
    set_data(key: string | null, data: any | null): void
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
    set_data(key: string | null, data: any | null): void

    // Class property signals of Gdk-2.0.Gdk.Pixmap

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Pixmap extends Drawable {

    // Own properties of Gdk-2.0.Gdk.Pixmap

    static name: string
    static $gtype: GObject.GType<Pixmap>

    // Constructors of Gdk-2.0.Gdk.Pixmap

    constructor(config?: Pixmap.ConstructorProperties) 
    /**
     * Wraps a native window for the default display in a #GdkPixmap.
     * This may fail if the pixmap has been destroyed.
     * 
     * For example in the X backend, a native pixmap handle is an Xlib
     * <type>XID</type>.
     * @constructor 
     * @param anid a native pixmap handle.
     * @returns the newly-created #GdkPixmap wrapper for the    native pixmap or %NULL if the pixmap has been destroyed.
     */
    static foreign_new(anid: NativeWindow): Pixmap
    /**
     * Wraps a native pixmap in a #GdkPixmap.
     * This may fail if the pixmap has been destroyed.
     * 
     * For example in the X backend, a native pixmap handle is an Xlib
     * <type>XID</type>.
     * @constructor 
     * @param display The #GdkDisplay where `anid` is located.
     * @param anid a native pixmap handle.
     * @returns the newly-created #GdkPixmap wrapper for the    native pixmap or %NULL if the pixmap has been destroyed.
     */
    static foreign_new_for_display(display: Display, anid: NativeWindow): Pixmap
    /**
     * Wraps a native pixmap in a #GdkPixmap.
     * This may fail if the pixmap has been destroyed.
     * 
     * For example in the X backend, a native pixmap handle is an Xlib
     * <type>XID</type>.
     * 
     * This function is an alternative to gdk_pixmap_foreign_new_for_display()
     * for cases where the dimensions of the pixmap are known. For the X
     * backend, this avoids a roundtrip to the server.
     * @constructor 
     * @param screen a #GdkScreen
     * @param anid a native pixmap handle
     * @param width the width of the pixmap identified by `anid`
     * @param height the height of the pixmap identified by `anid`
     * @param depth the depth of the pixmap identified by `anid`
     * @returns the newly-created #GdkPixmap wrapper for the    native pixmap or %NULL if the pixmap has been destroyed.
     */
    static foreign_new_for_screen(screen: Screen, anid: NativeWindow, width: number, height: number, depth: number): Pixmap
    constructor(drawable: Drawable, width: number, height: number, depth: number) 
    static new(drawable: Drawable, width: number, height: number, depth: number): Pixmap
    _init(config?: Pixmap.ConstructorProperties): void
    /**
     * Create a pixmap from a XPM file using a particular colormap.
     * @param drawable a #GdkDrawable, used to determine default values for the new pixmap. Can be %NULL if `colormap` is given.
     * @param colormap the #GdkColormap that the new pixmap will be use. If omitted, the colormap for `window` will be used.
     * @param mask a pointer to a place to store a bitmap representing the transparency mask of the XPM file. Can be %NULL, in which case transparency will be ignored.
     * @param transparent_color the color to be used for the pixels that are transparent in the input file. Can be %NULL, in which case a default color will be used.
     * @param filename the filename of a file containing XPM data.
     * @returns the #GdkPixmap.
     */
    static colormap_create_from_xpm(drawable: Drawable, colormap: Colormap, mask: Bitmap, transparent_color: Color, filename: string | null): Pixmap
    /**
     * Create a pixmap from data in XPM format using a particular
     * colormap.
     * @param drawable a #GdkDrawable, used to determine default values     for the new pixmap. Can be %NULL if `colormap` is given.
     * @param colormap the #GdkColormap that the new pixmap will be use.     If omitted, the colormap for `window` will be used.
     * @param mask a pointer to a place to store a bitmap representing     the transparency mask of the XPM file. Can be %NULL,     in which case transparency will be ignored.
     * @param transparent_color the color to be used for the pixels     that are transparent in the input file. Can be %NULL,     in which case a default color will be used.
     * @param data Pointer to a string containing the XPM data.
     * @returns the #GdkPixmap.
     */
    static colormap_create_from_xpm_d(drawable: Drawable, colormap: Colormap, mask: Bitmap, transparent_color: Color, data: string | null): Pixmap
    /**
     * Create a pixmap from a XPM file.
     * @param drawable a #GdkDrawable, used to determine default values for the new pixmap.
     * @param transparent_color the color to be used for the pixels that are transparent in the input file. Can be %NULL, in which case a default color will be used.
     * @param filename the filename of a file containing XPM data.
     * @returns the #GdkPixmap
     */
    static create_from_xpm(drawable: Drawable, transparent_color: Color, filename: string | null): [ /* returnType */ Pixmap, /* mask */ Bitmap ]
    /**
     * Create a pixmap from data in XPM format.
     * @param drawable a #GdkDrawable, used to determine default values     for the new pixmap.
     * @param transparent_color This color will be used for the pixels     that are transparent in the input file. Can be %NULL     in which case a default color will be used.
     * @param data Pointer to a string containing the XPM data.
     * @returns the #GdkPixmap.
     */
    static create_from_xpm_d(drawable: Drawable, transparent_color: Color, data: string | null): [ /* returnType */ Pixmap, /* mask */ Bitmap ]
}

export module Screen {

    // Signal callback interfaces

    /**
     * Signal callback interface for `composited-changed`
     */
    export interface CompositedChangedSignalCallback {
        ($obj: Screen): void
    }

    /**
     * Signal callback interface for `monitors-changed`
     */
    export interface MonitorsChangedSignalCallback {
        ($obj: Screen): void
    }

    /**
     * Signal callback interface for `size-changed`
     */
    export interface SizeChangedSignalCallback {
        ($obj: Screen): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gdk-2.0.Gdk.Screen

        font_options?: any | null
        resolution?: number | null
    }

}

export interface Screen {

    // Own fields of Gdk-2.0.Gdk.Screen

    parent_instance: GObject.Object
    closed: number
    normal_gcs: GC[]
    exposure_gcs: GC[]
    subwindow_gcs: GC[]
    font_options: cairo.FontOptions
    resolution: number

    // Owm methods of Gdk-2.0.Gdk.Screen

    broadcast_client_message(event: Event): void
    /**
     * Gets the default colormap for `screen`.
     * @returns the default #GdkColormap.
     */
    get_default_colormap(): Colormap
    /**
     * Gets any options previously set with gdk_screen_set_font_options().
     * @returns the current font options, or %NULL if no default  font options have been set.
     */
    get_font_options(): cairo.FontOptions
    /**
     * Gets the height of `screen` in pixels
     * @returns the height of @screen in pixels.
     */
    get_height(): number
    /**
     * Returns the height of `screen` in millimeters.
     * Note that on some X servers this value will not be correct.
     * @returns the heigth of @screen in millimeters.
     */
    get_height_mm(): number
    /**
     * Returns the monitor number in which the point (`x,``y)` is located.
     * @param x the x coordinate in the virtual screen.
     * @param y the y coordinate in the virtual screen.
     * @returns the monitor number in which the point (@x,@y) lies, or   a monitor close to (@x,@y) if the point is not in any monitor.
     */
    get_monitor_at_point(x: number, y: number): number
    /**
     * Returns the number of the monitor in which the largest area of the
     * bounding rectangle of `window` resides.
     * @param window a #GdkWindow
     * @returns the monitor number in which most of @window is located,           or if @window does not intersect any monitors, a monitor,           close to @window.
     */
    get_monitor_at_window(window: Window): number
    /**
     * Retrieves the #GdkRectangle representing the size and position of
     * the individual monitor within the entire screen area.
     * 
     * Note that the size of the entire screen area can be retrieved via
     * gdk_screen_get_width() and gdk_screen_get_height().
     * @param monitor_num the monitor number, between 0 and gdk_screen_get_n_monitors (screen)
     * @param dest a #GdkRectangle to be filled with the monitor geometry
     */
    get_monitor_geometry(monitor_num: number, dest: Rectangle): void
    /**
     * Gets the height in millimeters of the specified monitor.
     * @param monitor_num number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)
     * @returns the height of the monitor, or -1 if not available
     */
    get_monitor_height_mm(monitor_num: number): number
    /**
     * Returns the output name of the specified monitor.
     * Usually something like VGA, DVI, or TV, not the actual
     * product name of the display device.
     * @param monitor_num number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)
     * @returns a newly-allocated string containing the name of the monitor,   or %NULL if the name cannot be determined
     */
    get_monitor_plug_name(monitor_num: number): string | null
    /**
     * Gets the width in millimeters of the specified monitor, if available.
     * @param monitor_num number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)
     * @returns the width of the monitor, or -1 if not available
     */
    get_monitor_width_mm(monitor_num: number): number
    /**
     * Returns the number of monitors which `screen` consists of.
     * @returns number of monitors which @screen consists of
     */
    get_n_monitors(): number
    /**
     * Gets the index of `screen` among the screens in the display
     * to which it belongs. (See gdk_screen_get_display())
     * @returns the index
     */
    get_number(): number
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
     */
    get_primary_monitor(): number
    /**
     * Gets the resolution for font handling on the screen; see
     * gdk_screen_set_resolution() for full details.
     * @returns the current resolution, or -1 if no resolution has been set.
     */
    get_resolution(): number
    /**
     * Gets the preferred colormap for rendering image data on `screen`.
     * Not a very useful function; historically, GDK could only render RGB
     * image data to one colormap and visual, but in the current version
     * it can render to any colormap and visual. So there's no need to
     * call this function.
     * @returns the preferred colormap
     */
    get_rgb_colormap(): Colormap
    /**
     * Gets a "preferred visual" chosen by GdkRGB for rendering image data
     * on `screen`. In previous versions of
     * GDK, this was the only visual GdkRGB could use for rendering. In
     * current versions, it's simply the visual GdkRGB would have chosen as
     * the optimal one in those previous versions. GdkRGB can now render to
     * drawables with any visual.
     * @returns The #GdkVisual chosen by GdkRGB.
     */
    get_rgb_visual(): Visual
    /**
     * Gets a colormap to use for creating windows or pixmaps with an
     * alpha channel. The windowing system on which GTK+ is running
     * may not support this capability, in which case %NULL will
     * be returned. Even if a non-%NULL value is returned, its
     * possible that the window's alpha channel won't be honored
     * when displaying the window on the screen: in particular, for
     * X an appropriate windowing manager and compositing manager
     * must be running to provide appropriate display.
     * 
     * This functionality is not implemented in the Windows backend.
     * 
     * For setting an overall opacity for a top-level window, see
     * gdk_window_set_opacity().
     * @returns a colormap to use for windows with     an alpha channel or %NULL if the capability is not available.
     */
    get_rgba_colormap(): Colormap
    /**
     * Gets a visual to use for creating windows or pixmaps with an
     * alpha channel. See the docs for gdk_screen_get_rgba_colormap()
     * for caveats.
     * @returns a visual to use for windows with an     alpha channel or %NULL if the capability is not available.
     */
    get_rgba_visual(): Visual
    /**
     * Gets the root window of `screen`.
     * @returns the root window
     */
    get_root_window(): Window
    get_setting(name: string | null, value: any): boolean
    /**
     * Gets the system's default colormap for `screen`
     * @returns the default colormap for @screen.
     */
    get_system_colormap(): Colormap
    /**
     * Get the system's default visual for `screen`.
     * This is the visual for the root window of the display.
     * The return value should not be freed.
     * @returns the system visual
     */
    get_system_visual(): Visual
    /**
     * Obtains a list of all toplevel windows known to GDK on the screen `screen`.
     * A toplevel window is a child of the root window (see
     * gdk_get_default_root_window()).
     * 
     * The returned list should be freed with g_list_free(), but
     * its elements need not be freed.
     * @returns      list of toplevel windows, free with g_list_free()
     */
    get_toplevel_windows(): Window[]
    /**
     * Gets the width of `screen` in pixels
     * @returns the width of @screen in pixels.
     */
    get_width(): number
    /**
     * Gets the width of `screen` in millimeters.
     * Note that on some X servers this value will not be correct.
     * @returns the width of @screen in millimeters.
     */
    get_width_mm(): number
    /**
     * Returns a #GList of #GdkWindow<!-- -->s representing the current
     * window stack.
     * 
     * On X11, this is done by inspecting the _NET_CLIENT_LIST_STACKING
     * property on the root window, as described in the <ulink
     * url="http://www.freedesktop.org/Standards/wm-spec">Extended Window
     * Manager Hints</ulink>. If the window manager does not support the
     * _NET_CLIENT_LIST_STACKING hint, this function returns %NULL.
     * 
     * On other platforms, this function may return %NULL, depending on whether
     * it is implementable on that platform.
     * 
     * The returned list is newly allocated and owns references to the
     * windows it contains, so it should be freed using g_list_free() and
     * its windows unrefed using g_object_unref() when no longer needed.
     * @returns      a list of #GdkWindow<!-- -->s for the current window stack,               or %NULL.
     */
    get_window_stack(): Window[]
    /**
     * Returns whether windows with an RGBA visual can reasonably
     * be expected to have their alpha channel drawn correctly on
     * the screen.
     * 
     * On X11 this function returns whether a compositing manager is
     * compositing `screen`.
     * @returns Whether windows with RGBA visuals can reasonably be expected to have their alpha channels drawn correctly on the screen.
     */
    is_composited(): boolean
    /**
     * Lists the available visuals for the specified `screen`.
     * A visual describes a hardware image data format.
     * For example, a visual might support 24-bit color, or 8-bit color,
     * and might expect pixels to be in a certain format.
     * 
     * Call g_list_free() on the return value when you're finished with it.
     * @returns      a list of visuals; the list must be freed, but not its contents
     */
    list_visuals(): Visual[]
    /**
     * Determines the name to pass to gdk_display_open() to get
     * a #GdkDisplay with this screen as the default screen.
     * @returns a newly allocated string, free with g_free()
     */
    make_display_name(): string | null
    /**
     * Sets the default `colormap` for `screen`.
     * @param colormap a #GdkColormap
     */
    set_default_colormap(colormap: Colormap): void
    /**
     * Sets the default font options for the screen. These
     * options will be set on any #PangoContext's newly created
     * with gdk_pango_context_get_for_screen(). Changing the
     * default set of font options does not affect contexts that
     * have already been created.
     * @param options a #cairo_font_options_t, or %NULL to unset any   previously set default font options.
     */
    set_font_options(options: cairo.FontOptions | null): void
    /**
     * Sets the resolution for font handling on the screen. This is a
     * scale factor between points specified in a #PangoFontDescription
     * and cairo units. The default value is 96, meaning that a 10 point
     * font will be 13 units high. (10 * 96. / 72. = 13.3).
     * @param dpi the resolution in "dots per inch". (Physical inches aren't actually   involved; the terminology is conventional.)
     */
    set_resolution(dpi: number): void

    // Own virtual methods of Gdk-2.0.Gdk.Screen

    vfunc_composited_changed(): void
    vfunc_monitors_changed(): void
    vfunc_size_changed(): void

    // Own signals of Gdk-2.0.Gdk.Screen

    connect(sigName: "composited-changed", callback: Screen.CompositedChangedSignalCallback): number
    connect_after(sigName: "composited-changed", callback: Screen.CompositedChangedSignalCallback): number
    emit(sigName: "composited-changed", ...args: any[]): void
    connect(sigName: "monitors-changed", callback: Screen.MonitorsChangedSignalCallback): number
    connect_after(sigName: "monitors-changed", callback: Screen.MonitorsChangedSignalCallback): number
    emit(sigName: "monitors-changed", ...args: any[]): void
    connect(sigName: "size-changed", callback: Screen.SizeChangedSignalCallback): number
    connect_after(sigName: "size-changed", callback: Screen.SizeChangedSignalCallback): number
    emit(sigName: "size-changed", ...args: any[]): void

    // Class property signals of Gdk-2.0.Gdk.Screen

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Screen extends GObject.Object {

    // Own properties of Gdk-2.0.Gdk.Screen

    static name: string
    static $gtype: GObject.GType<Screen>

    // Constructors of Gdk-2.0.Gdk.Screen

    constructor(config?: Screen.ConstructorProperties) 
    _init(config?: Screen.ConstructorProperties): void
    /**
     * Gets the default screen for the default display. (See
     * gdk_display_get_default ()).
     * @returns a #GdkScreen, or %NULL if there is no default display.
     */
    static get_default(): Screen
    /**
     * Returns the height of the default screen in pixels.
     * @returns the height of the default screen in pixels.
     */
    static height(): number
    /**
     * Returns the height of the default screen in millimeters.
     * Note that on many X servers this value will not be correct.
     * @returns the height of the default screen in millimeters, though it is not always correct.
     */
    static height_mm(): number
    /**
     * Returns the width of the default screen in pixels.
     * @returns the width of the default screen in pixels.
     */
    static width(): number
    /**
     * Returns the width of the default screen in millimeters.
     * Note that on many X servers this value will not be correct.
     * @returns the width of the default screen in millimeters, though it is not always correct.
     */
    static width_mm(): number
}

export module Visual {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Visual {

    // Own fields of Gdk-2.0.Gdk.Visual

    parent_instance: GObject.Object
    type: VisualType
    depth: number
    byte_order: ByteOrder
    colormap_size: number
    bits_per_rgb: number
    red_mask: number
    red_shift: number
    red_prec: number
    green_mask: number
    green_shift: number
    green_prec: number
    blue_mask: number
    blue_shift: number
    blue_prec: number

    // Owm methods of Gdk-2.0.Gdk.Visual

    /**
     * Returns the number of significant bits per red, green and blue value.
     * @returns The number of significant bits per color value for @visual.
     */
    get_bits_per_rgb(): number
    /**
     * Obtains values that are needed to calculate blue pixel values in TrueColor
     * and DirectColor.  The "mask" is the significant bits within the pixel.
     * The "shift" is the number of bits left we must shift a primary for it
     * to be in position (according to the "mask").  Finally, "precision" refers
     * to how much precision the pixel value contains for a particular primary.
     */
    get_blue_pixel_details(): [ /* mask */ number, /* shift */ number, /* precision */ number ]
    /**
     * Returns the byte order of this visual.
     * @returns A #GdkByteOrder stating the byte order of @visual.
     */
    get_byte_order(): ByteOrder
    /**
     * Returns the size of a colormap for this visual.
     * @returns The size of a colormap that is suitable for @visual.
     */
    get_colormap_size(): number
    /**
     * Returns the bit depth of this visual.
     * @returns The bit depth of this visual.
     */
    get_depth(): number
    /**
     * Obtains values that are needed to calculate green pixel values in TrueColor
     * and DirectColor.  The "mask" is the significant bits within the pixel.
     * The "shift" is the number of bits left we must shift a primary for it
     * to be in position (according to the "mask").  Finally, "precision" refers
     * to how much precision the pixel value contains for a particular primary.
     */
    get_green_pixel_details(): [ /* mask */ number, /* shift */ number, /* precision */ number ]
    /**
     * Obtains values that are needed to calculate red pixel values in TrueColor
     * and DirectColor.  The "mask" is the significant bits within the pixel.
     * The "shift" is the number of bits left we must shift a primary for it
     * to be in position (according to the "mask").  Finally, "precision" refers
     * to how much precision the pixel value contains for a particular primary.
     */
    get_red_pixel_details(): [ /* mask */ number, /* shift */ number, /* precision */ number ]
    /**
     * Gets the screen to which this visual belongs
     * @returns the screen to which this visual belongs.
     */
    get_screen(): Screen
    /**
     * Returns the type of visual this is (PseudoColor, TrueColor, etc).
     * @returns A #GdkVisualType stating the type of @visual.
     */
    get_visual_type(): VisualType

    // Class property signals of Gdk-2.0.Gdk.Visual

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Visual extends GObject.Object {

    // Own properties of Gdk-2.0.Gdk.Visual

    static name: string
    static $gtype: GObject.GType<Visual>

    // Constructors of Gdk-2.0.Gdk.Visual

    constructor(config?: Visual.ConstructorProperties) 
    _init(config?: Visual.ConstructorProperties): void
    /**
     * Get the visual with the most available colors for the default
     * GDK screen. The return value should not be freed.
     * @returns best visual
     */
    static get_best(): Visual
    /**
     * Get the best available depth for the default GDK screen.  "Best"
     * means "largest," i.e. 32 preferred over 24 preferred over 8 bits
     * per pixel.
     * @returns best available depth
     */
    static get_best_depth(): number
    /**
     * Return the best available visual type for the default GDK screen.
     * @returns best visual type
     */
    static get_best_type(): VisualType
    /**
     * Combines gdk_visual_get_best_with_depth() and gdk_visual_get_best_with_type().
     * @param depth a bit depth
     * @param visual_type a visual type
     * @returns best visual with both @depth and     @visual_type, or %NULL if none
     */
    static get_best_with_both(depth: number, visual_type: VisualType): Visual
    /**
     * Get the best visual with depth `depth` for the default GDK screen.
     * Color visuals and visuals with mutable colormaps are preferred
     * over grayscale or fixed-colormap visuals. The return value should not
     * be freed. %NULL may be returned if no visual supports `depth`.
     * @param depth a bit depth
     * @returns best visual for the given depth
     */
    static get_best_with_depth(depth: number): Visual
    /**
     * Get the best visual of the given `visual_type` for the default GDK screen.
     * Visuals with higher color depths are considered better. The return value
     * should not be freed. %NULL may be returned if no visual has type
     * `visual_type`.
     * @param visual_type a visual type
     * @returns best visual of the given type
     */
    static get_best_with_type(visual_type: VisualType): Visual
    /**
     * Get the system's default visual for the default GDK screen.
     * This is the visual for the root window of the display.
     * The return value should not be freed.
     * @returns system visual
     */
    static get_system(): Visual
}

export module Window {

    // Signal callback interfaces

    /**
     * Signal callback interface for `from-embedder`
     */
    export interface FromEmbedderSignalCallback {
        ($obj: Window, embedder_x: number, embedder_y: number): void
    }

    /**
     * Signal callback interface for `pick-embedded-child`
     */
    export interface PickEmbeddedChildSignalCallback {
        ($obj: Window, x: number, y: number): Window
    }

    /**
     * Signal callback interface for `to-embedder`
     */
    export interface ToEmbedderSignalCallback {
        ($obj: Window, offscreen_x: number, offscreen_y: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Drawable.ConstructorProperties {

        // Own constructor properties of Gdk-2.0.Gdk.Window

        /**
         * The mouse pointer for a #GdkWindow. See gdk_window_set_cursor() and
         * gdk_window_get_cursor() for details.
         */
        cursor?: Cursor | null
    }

}

export interface Window {

    // Own properties of Gdk-2.0.Gdk.Window

    /**
     * The mouse pointer for a #GdkWindow. See gdk_window_set_cursor() and
     * gdk_window_get_cursor() for details.
     */
    cursor: Cursor

    // Own fields of Gdk-2.0.Gdk.Window

    parent_instance: GObject.Object

    // Owm methods of Gdk-2.0.Gdk.Window

    /**
     * Emits a short beep associated to `window` in the appropriate
     * display, if supported. Otherwise, emits a short beep on
     * the display just as gdk_display_beep().
     */
    beep(): void
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
    begin_move_drag(button: number, root_x: number, root_y: number, timestamp: number): void
    /**
     * A convenience wrapper around gdk_window_begin_paint_region() which
     * creates a rectangular region for you. See
     * gdk_window_begin_paint_region() for details.
     * @param rectangle rectangle you intend to draw to
     */
    begin_paint_rect(rectangle: Rectangle): void
    /**
     * Indicates that you are beginning the process of redrawing `region`.
     * A backing store (offscreen buffer) large enough to contain `region`
     * will be created. The backing store will be initialized with the
     * background color or background pixmap for `window`. Then, all
     * drawing operations performed on `window` will be diverted to the
     * backing store.  When you call gdk_window_end_paint(), the backing
     * store will be copied to `window,` making it visible onscreen. Only
     * the part of `window` contained in `region` will be modified; that is,
     * drawing operations are clipped to `region`.
     * 
     * The net result of all this is to remove flicker, because the user
     * sees the finished product appear all at once when you call
     * gdk_window_end_paint(). If you draw to `window` directly without
     * calling gdk_window_begin_paint_region(), the user may see flicker
     * as individual drawing operations are performed in sequence.  The
     * clipping and background-initializing features of
     * gdk_window_begin_paint_region() are conveniences for the
     * programmer, so you can avoid doing that work yourself.
     * 
     * When using GTK+, the widget system automatically places calls to
     * gdk_window_begin_paint_region() and gdk_window_end_paint() around
     * emissions of the expose_event signal. That is, if you're writing an
     * expose event handler, you can assume that the exposed area in
     * #GdkEventExpose has already been cleared to the window background,
     * is already set as the clip region, and already has a backing store.
     * Therefore in most cases, application code need not call
     * gdk_window_begin_paint_region(). (You can disable the automatic
     * calls around expose events on a widget-by-widget basis by calling
     * gtk_widget_set_double_buffered().)
     * 
     * If you call this function multiple times before calling the
     * matching gdk_window_end_paint(), the backing stores are pushed onto
     * a stack. gdk_window_end_paint() copies the topmost backing store
     * onscreen, subtracts the topmost region from all other regions in
     * the stack, and pops the stack. All drawing operations affect only
     * the topmost backing store in the stack. One matching call to
     * gdk_window_end_paint() is required for each call to
     * gdk_window_begin_paint_region().
     * @param region region you intend to draw to
     */
    begin_paint_region(region: Region): void
    /**
     * Begins a window resize operation (for a toplevel window).
     * You might use this function to implement a "window resize grip," for
     * example; in fact #GtkStatusbar uses it. The function works best
     * with window managers that support the <ulink url="http://www.freedesktop.org/Standards/wm-spec">Extended Window Manager Hints</ulink>, but has a
     * fallback implementation for other window managers.
     * @param edge the edge or corner from which the drag is started
     * @param button the button being used to drag
     * @param root_x root window X coordinate of mouse click that began the drag
     * @param root_y root window Y coordinate of mouse click that began the drag
     * @param timestamp timestamp of mouse click that began the drag (use gdk_event_get_time())
     */
    begin_resize_drag(edge: WindowEdge, button: number, root_x: number, root_y: number, timestamp: number): void
    /**
     * Clears an entire `window` to the background color or background pixmap.
     */
    clear(): void
    /**
     * Clears an area of `window` to the background color or background pixmap.
     * @param x x coordinate of rectangle to clear
     * @param y y coordinate of rectangle to clear
     * @param width width of rectangle to clear
     * @param height height of rectangle to clear
     */
    clear_area(x: number, y: number, width: number, height: number): void
    /**
     * Like gdk_window_clear_area(), but also generates an expose event for
     * the cleared area.
     * 
     * This function has a stupid name because it dates back to the mists
     * time, pre-GDK-1.0.
     * @param x x coordinate of rectangle to clear
     * @param y y coordinate of rectangle to clear
     * @param width width of rectangle to clear
     * @param height height of rectangle to clear
     */
    clear_area_e(x: number, y: number, width: number, height: number): void
    /**
     * Signal to the window system that the application has finished
     * handling Configure events it has received. Window Managers can
     * use this to better synchronize the frame repaint with the
     * application. GTK+ applications will automatically call this
     * function when appropriate.
     * 
     * This function can only be called if gdk_window_enable_synchronized_configure()
     * was called previously.
     */
    configure_finished(): void
    /**
     * Transforms window coordinates from a parent window to a child
     * window, where the parent window is the normal parent as returned by
     * gdk_window_get_parent() for normal windows, and the window's
     * embedder as returned by gdk_offscreen_window_get_embedder() for
     * offscreen windows.
     * 
     * For normal windows, calling this function is equivalent to subtracting
     * the return values of gdk_window_get_position() from the parent coordinates.
     * For offscreen windows however (which can be arbitrarily transformed),
     * this function calls the GdkWindow::from-embedder: signal to translate
     * the coordinates.
     * 
     * You should always use this function when writing generic code that
     * walks down a window hierarchy.
     * 
     * See also: gdk_window_coords_to_parent()
     * @param parent_x X coordinate in parent's coordinate system
     * @param parent_y Y coordinate in parent's coordinate system
     */
    coords_from_parent(parent_x: number, parent_y: number): [ /* x */ number, /* y */ number ]
    /**
     * Transforms window coordinates from a child window to its parent
     * window, where the parent window is the normal parent as returned by
     * gdk_window_get_parent() for normal windows, and the window's
     * embedder as returned by gdk_offscreen_window_get_embedder() for
     * offscreen windows.
     * 
     * For normal windows, calling this function is equivalent to adding
     * the return values of gdk_window_get_position() to the child coordinates.
     * For offscreen windows however (which can be arbitrarily transformed),
     * this function calls the GdkWindow::to-embedder: signal to translate
     * the coordinates.
     * 
     * You should always use this function when writing generic code that
     * walks up a window hierarchy.
     * 
     * See also: gdk_window_coords_from_parent()
     * @param x X coordinate in child's coordinate system
     * @param y Y coordinate in child's coordinate system
     */
    coords_to_parent(x: number, y: number): [ /* parent_x */ number, /* parent_y */ number ]
    /**
     * Create a new surface that is as compatible as possible with the
     * given `window`. For example the new surface will have the same
     * fallback resolution and font options as `window`. Generally, the new
     * surface will also use the same backend as `window,` unless that is
     * not possible for some reason. The type of the returned surface may
     * be examined with cairo_surface_get_type().
     * 
     * Initially the surface contents are all 0 (transparent if contents
     * have transparency, black otherwise.)
     * @param content the content for the new surface
     * @param width width of the new surface
     * @param height height of the new surface
     * @returns a pointer to the newly allocated surface. The caller owns the surface and should call cairo_surface_destroy() when done with it. This function always returns a valid pointer, but it will return a pointer to a "nil" surface if @other is already in an error state or any other error occurs.
     */
    create_similar_surface(content: cairo.Content, width: number, height: number): cairo.Surface
    /**
     * Attempt to deiconify (unminimize) `window`. On X11 the window manager may
     * choose to ignore the request to deiconify. When using GTK+,
     * use gtk_window_deiconify() instead of the #GdkWindow variant. Or better yet,
     * you probably want to use gtk_window_present(), which raises the window, focuses it,
     * unminimizes it, and puts it on the current desktop.
     */
    deiconify(): void
    /**
     * Destroys the window system resources associated with `window` and decrements `window'`s
     * reference count. The window system resources for all children of `window` are also
     * destroyed, but the children's reference counts are not decremented.
     * 
     * Note that a window will not be destroyed automatically when its reference count
     * reaches zero. You must call this function yourself before that happens.
     */
    destroy(): void
    destroy_notify(): void
    /**
     * Indicates that the application will cooperate with the window
     * system in synchronizing the window repaint with the window
     * manager during resizing operations. After an application calls
     * this function, it must call gdk_window_configure_finished() every
     * time it has finished all processing associated with a set of
     * Configure events. Toplevel GTK+ windows automatically use this
     * protocol.
     * 
     * On X, calling this function makes `window` participate in the
     * _NET_WM_SYNC_REQUEST window manager protocol.
     */
    enable_synchronized_configure(): void
    /**
     * Indicates that the backing store created by the most recent call to
     * gdk_window_begin_paint_region() should be copied onscreen and
     * deleted, leaving the next-most-recent backing store or no backing
     * store at all as the active paint region. See
     * gdk_window_begin_paint_region() for full details. It is an error to
     * call this function without a matching
     * gdk_window_begin_paint_region() first.
     */
    end_paint(): void
    /**
     * Tries to ensure that there is a window-system native window for this
     * GdkWindow. This may fail in some situations, returning %FALSE.
     * 
     * Offscreen window and children of them can never have native windows.
     * 
     * Some backends may not support native child windows.
     * @returns %TRUE if the window has a native window, %FALSE otherwise
     */
    ensure_native(): boolean
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
     */
    flush(): void
    /**
     * Sets keyboard focus to `window`. In most cases, gtk_window_present()
     * should be used on a #GtkWindow, rather than calling this function.
     * @param timestamp timestamp of the event triggering the window focus
     */
    focus(timestamp: number): void
    /**
     * Temporarily freezes a window and all its descendants such that it won't
     * receive expose events.  The window will begin receiving expose events
     * again when gdk_window_thaw_toplevel_updates_libgtk_only() is called. If
     * gdk_window_freeze_toplevel_updates_libgtk_only()
     * has been called more than once,
     * gdk_window_thaw_toplevel_updates_libgtk_only() must be called
     * an equal number of times to begin processing exposes.
     * 
     * This function is not part of the GDK public API and is only
     * for use by GTK+.
     */
    freeze_toplevel_updates_libgtk_only(): void
    /**
     * Temporarily freezes a window such that it won't receive expose
     * events.  The window will begin receiving expose events again when
     * gdk_window_thaw_updates() is called. If gdk_window_freeze_updates()
     * has been called more than once, gdk_window_thaw_updates() must be called
     * an equal number of times to begin processing exposes.
     */
    freeze_updates(): void
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
     */
    fullscreen(): void
    /**
     * This function informs GDK that the geometry of an embedded
     * offscreen window has changed. This is necessary for GDK to keep
     * track of which offscreen window the pointer is in.
     */
    geometry_changed(): void
    /**
     * Determines whether or not the desktop environment shuld be hinted that
     * the window does not want to receive input focus.
     * @returns whether or not the window should receive input focus.
     */
    get_accept_focus(): boolean
    /**
     * Gets the pattern used to clear the background on `window`. If `window`
     * does not have its own background and reuses the parent's, %NULL is
     * returned and you'll have to query it yourself.
     * @returns The pattern to use for the background or     %NULL to use the parent's background.
     */
    get_background_pattern(): cairo.Pattern
    /**
     * Gets the list of children of `window` known to GDK.
     * This function only returns children created via GDK,
     * so for example it's useless when used with the root window;
     * it only returns windows an application created itself.
     * 
     * The returned list must be freed, but the elements in the
     * list need not be.
     * @returns      list of child windows inside @window
     */
    get_children(): Window[]
    /**
     * Determines whether `window` is composited.
     * 
     * See gdk_window_set_composited().
     * @returns %TRUE if the window is composited.
     */
    get_composited(): boolean
    /**
     * Retrieves a #GdkCursor pointer for the cursor currently set on the
     * specified #GdkWindow, or %NULL.  If the return value is %NULL then
     * there is no custom cursor set on the specified window, and it is
     * using the cursor for its parent window.
     * @returns a #GdkCursor, or %NULL. The returned   object is owned by the #GdkWindow and should not be unreferenced   directly. Use gdk_window_set_cursor() to unset the cursor of the   window
     */
    get_cursor(): Cursor
    /**
     * Returns the decorations set on the GdkWindow with #gdk_window_set_decorations
     * @param decorations The window decorations will be written here
     * @returns TRUE if the window has decorations set, FALSE otherwise.
     */
    get_decorations(decorations: WMDecoration): boolean
    /**
     * This gets the origin of a #GdkWindow relative to
     * an Enlightenment-window-manager desktop. As long as you don't
     * assume that the user's desktop/workspace covers the entire
     * root window (i.e. you don't assume that the desktop begins
     * at root window coordinate 0,0) this function is not necessary.
     * It's deprecated for that reason.
     * @param x return location for X coordinate
     * @param y return location for Y coordinate
     * @returns not meaningful
     */
    get_deskrelative_origin(x: number, y: number): boolean
    /**
     * Gets the event mask for `window`. See gdk_window_set_events().
     * @returns event mask for @window
     */
    get_events(): EventMask
    /**
     * Determines whether or not the desktop environment should be hinted that the
     * window does not want to receive input focus when it is mapped.
     * @returns whether or not the window wants to receive input focus when it is mapped.
     */
    get_focus_on_map(): boolean
    /**
     * Obtains the bounding box of the window, including window manager
     * titlebar/borders if any. The frame position is given in root window
     * coordinates. To get the position of the window itself (rather than
     * the frame) in root window coordinates, use gdk_window_get_origin().
     * @param rect rectangle to fill with bounding box of the window frame
     */
    get_frame_extents(rect: Rectangle): void
    /**
     * Any of the return location arguments to this function may be %NULL,
     * if you aren't interested in getting the value of that field.
     * 
     * The X and Y coordinates returned are relative to the parent window
     * of `window,` which for toplevels usually means relative to the
     * window decorations (titlebar, etc.) rather than relative to the
     * root window (screen-size background window).
     * 
     * On the X11 platform, the geometry is obtained from the X server,
     * so reflects the latest position of `window;` this may be out-of-sync
     * with the position of `window` delivered in the most-recently-processed
     * #GdkEventConfigure. gdk_window_get_position() in contrast gets the
     * position from the most recent configure event.
     * 
     * <note>
     * If `window` is not a toplevel, it is <emphasis>much</emphasis> better
     * to call gdk_window_get_position() and gdk_drawable_get_size() instead,
     * because it avoids the roundtrip to the X server and because
     * gdk_drawable_get_size() supports the full 32-bit coordinate space,
     * whereas gdk_window_get_geometry() is restricted to the 16-bit
     * coordinates of X11.
     * </note>
     * @param x return location for X coordinate of window (relative to its parent)
     * @param y return location for Y coordinate of window (relative to its parent)
     * @param width return location for width of window
     * @param height return location for height of window
     * @param depth return location for bit depth of window
     */
    get_geometry(x: number, y: number, width: number, height: number, depth: number): void
    /**
     * Returns the height of the given `window`.
     * 
     * On the X11 platform the returned size is the size reported in the
     * most-recently-processed configure event, rather than the current
     * size on the X server.
     * @returns The height of @window
     */
    get_height(): number
    /**
     * If you bypass the GDK layer and use windowing system primitives to
     * draw directly onto a #GdkWindow, then you need to deal with two
     * details: there may be an offset between GDK coordinates and windowing
     * system coordinates, and GDK may have redirected drawing to a offscreen
     * pixmap as the result of a gdk_window_begin_paint_region() calls.
     * This function allows retrieving the information you need to compensate
     * for these effects.
     * 
     * This function exposes details of the GDK implementation, and is thus
     * likely to change in future releases of GDK.
     */
    get_internal_paint_info(): [ /* real_drawable */ Drawable, /* x_offset */ number, /* y_offset */ number ]
    /**
     * Determines whether or not the window manager is hinted that `window`
     * has modal behaviour.
     * @returns whether or not the window has the modal hint set.
     */
    get_modal_hint(): boolean
    /**
     * Obtains the position of a window in root window coordinates.
     * (Compare with gdk_window_get_position() and
     * gdk_window_get_geometry() which return the position of a window
     * relative to its parent window.)
     * @param x return location for X coordinate
     * @param y return location for Y coordinate
     * @returns not meaningful, ignore
     */
    get_origin(x: number, y: number): number
    /**
     * Obtains the current pointer position and modifier state.
     * The position is given in coordinates relative to the upper left
     * corner of `window`.
     * @returns the window containing the pointer (as with gdk_window_at_pointer()), or %NULL if the window containing the pointer isn't known to GDK
     */
    get_pointer(): [ /* returnType */ Window, /* x */ number, /* y */ number, /* mask */ ModifierType ]
    /**
     * Obtains the position of the window as reported in the
     * most-recently-processed #GdkEventConfigure. Contrast with
     * gdk_window_get_geometry() which queries the X server for the
     * current window position, regardless of which events have been
     * received or processed.
     * 
     * The position coordinates are relative to the window's parent window.
     */
    get_position(): [ /* x */ number, /* y */ number ]
    /**
     * Obtains the position of a window position in root
     * window coordinates. This is similar to
     * gdk_window_get_origin() but allows you go pass
     * in any position in the window, not just the origin.
     * @param x X coordinate in window
     * @param y Y coordinate in window
     */
    get_root_coords(x: number, y: number): [ /* root_x */ number, /* root_y */ number ]
    /**
     * Obtains the top-left corner of the window manager frame in root
     * window coordinates.
     * @param x return location for X position of window frame
     * @param y return location for Y position of window frame
     */
    get_root_origin(x: number, y: number): void
    /**
     * Gets the bitwise OR of the currently active window state flags,
     * from the #GdkWindowState enumeration.
     * @returns window state bitfield
     */
    get_state(): WindowState
    /**
     * This function returns the type hint set for a window.
     * @returns The type hint set for @window
     */
    get_type_hint(): WindowTypeHint
    /**
     * Retrieves the user data for `window,` which is normally the widget
     * that `window` belongs to. See gdk_window_set_user_data().
     */
    get_user_data(): /* data */ any | null
    /**
     * Returns the width of the given `window`.
     * 
     * On the X11 platform the returned size is the size reported in the
     * most-recently-processed configure event, rather than the current
     * size on the X server.
     * @returns The width of @window
     */
    get_width(): number
    /**
     * Gets the type of the window. See #GdkWindowType.
     * @returns type of window
     */
    get_window_type(): WindowType
    /**
     * Checks whether the window has a native window or not. Note that
     * you can use gdk_window_ensure_native() if a native window is needed.
     * @returns %TRUE if the %window has a native window, %FALSE otherwise.
     */
    has_native(): boolean
    /**
     * For toplevel windows, withdraws them, so they will no longer be
     * known to the window manager; for all windows, unmaps them, so
     * they won't be displayed. Normally done automatically as
     * part of gtk_widget_hide().
     */
    hide(): void
    /**
     * Asks to iconify (minimize) `window`. The window manager may choose
     * to ignore the request, but normally will honor it. Using
     * gtk_window_iconify() is preferred, if you have a #GtkWindow widget.
     * 
     * This function only makes sense when `window` is a toplevel window.
     */
    iconify(): void
    /**
     * Like gdk_window_shape_combine_mask(), but the shape applies
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
     * @param mask shape mask, or %NULL
     * @param x X position of shape mask with respect to `window`
     * @param y Y position of shape mask with respect to `window`
     */
    input_shape_combine_mask(mask: Bitmap | null, x: number, y: number): void
    /**
     * Like gdk_window_shape_combine_region(), but the shape applies
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
     */
    input_shape_combine_region(shape_region: Region, offset_x: number, offset_y: number): void
    /**
     * Adds `region` to the update area for `window`. The update area is the
     * region that needs to be redrawn, or "dirty region." The call
     * gdk_window_process_updates() sends one or more expose events to the
     * window, which together cover the entire update area. An
     * application would normally redraw the contents of `window` in
     * response to those expose events.
     * 
     * GDK will call gdk_window_process_all_updates() on your behalf
     * whenever your program returns to the main loop and becomes idle, so
     * normally there's no need to do that manually, you just need to
     * invalidate regions that you know should be redrawn.
     * 
     * The `child_func` parameter controls whether the region of
     * each child window that intersects `region` will also be invalidated.
     * Only children for which `child_func` returns TRUE will have the area
     * invalidated.
     * @param region a #GdkRegion
     * @param child_func function to use to decide if to recurse to a child,              %NULL means never recurse.
     * @param user_data data passed to `child_func`
     */
    invalidate_maybe_recurse(region: Region, child_func: any | null, user_data: any | null): void
    /**
     * A convenience wrapper around gdk_window_invalidate_region() which
     * invalidates a rectangular region. See
     * gdk_window_invalidate_region() for details.
     * @param rect rectangle to invalidate or %NULL to invalidate the whole      window
     * @param invalidate_children whether to also invalidate child windows
     */
    invalidate_rect(rect: Rectangle | null, invalidate_children: boolean): void
    /**
     * Adds `region` to the update area for `window`. The update area is the
     * region that needs to be redrawn, or "dirty region." The call
     * gdk_window_process_updates() sends one or more expose events to the
     * window, which together cover the entire update area. An
     * application would normally redraw the contents of `window` in
     * response to those expose events.
     * 
     * GDK will call gdk_window_process_all_updates() on your behalf
     * whenever your program returns to the main loop and becomes idle, so
     * normally there's no need to do that manually, you just need to
     * invalidate regions that you know should be redrawn.
     * 
     * The `invalidate_children` parameter controls whether the region of
     * each child window that intersects `region` will also be invalidated.
     * If %FALSE, then the update area for child windows will remain
     * unaffected. See gdk_window_invalidate_maybe_recurse if you need
     * fine grained control over which children are invalidated.
     * @param region a #GdkRegion
     * @param invalidate_children %TRUE to also invalidate child windows
     */
    invalidate_region(region: Region, invalidate_children: boolean): void
    /**
     * Check to see if a window is destroyed..
     * @returns %TRUE if the window is destroyed
     */
    is_destroyed(): boolean
    /**
     * Determines whether or not the window is an input only window.
     * @returns %TRUE if @window is input only
     */
    is_input_only(): boolean
    /**
     * Determines whether or not the window is shaped.
     * @returns %TRUE if @window is shaped
     */
    is_shaped(): boolean
    /**
     * Check if the window and all ancestors of the window are
     * mapped. (This is not necessarily "viewable" in the X sense, since
     * we only check as far as we have GDK window parents, not to the root
     * window.)
     * @returns %TRUE if the window is viewable
     */
    is_viewable(): boolean
    /**
     * Checks whether the window has been mapped (with gdk_window_show() or
     * gdk_window_show_unraised()).
     * @returns %TRUE if the window is mapped
     */
    is_visible(): boolean
    /**
     * Lowers `window` to the bottom of the Z-order (stacking order), so that
     * other windows with the same parent window appear above `window`.
     * This is true whether or not the other windows are visible.
     * 
     * If `window` is a toplevel, the window manager may choose to deny the
     * request to move the window in the Z-order, gdk_window_lower() only
     * requests the restack, does not guarantee it.
     * 
     * Note that gdk_window_show() raises the window again, so don't call this
     * function before gdk_window_show(). (Try gdk_window_show_unraised().)
     */
    lower(): void
    /**
     * Maximizes the window. If the window was already maximized, then
     * this function does nothing.
     * 
     * On X11, asks the window manager to maximize `window,` if the window
     * manager supports this operation. Not all window managers support
     * this, and some deliberately ignore it or don't have a concept of
     * "maximized"; so you can't rely on the maximization actually
     * happening. But it will happen with most standard window managers,
     * and GDK makes a best effort to get it to happen.
     * 
     * On Windows, reliably maximizes the window.
     */
    maximize(): void
    /**
     * Merges the input shape masks for any child windows into the
     * input shape mask for `window`. i.e. the union of all input masks
     * for `window` and its children will become the new input mask
     * for `window`. See gdk_window_input_shape_combine_mask().
     * 
     * This function is distinct from gdk_window_set_child_input_shapes()
     * because it includes `window'`s input shape mask in the set of
     * shapes to be merged.
     */
    merge_child_input_shapes(): void
    /**
     * Merges the shape masks for any child windows into the
     * shape mask for `window`. i.e. the union of all masks
     * for `window` and its children will become the new mask
     * for `window`. See gdk_window_shape_combine_mask().
     * 
     * This function is distinct from gdk_window_set_child_shapes()
     * because it includes `window'`s shape mask in the set of shapes to
     * be merged.
     */
    merge_child_shapes(): void
    /**
     * Repositions a window relative to its parent window.
     * For toplevel windows, window managers may ignore or modify the move;
     * you should probably use gtk_window_move() on a #GtkWindow widget
     * anyway, instead of using GDK functions. For child windows,
     * the move will reliably succeed.
     * 
     * If you're also planning to resize the window, use gdk_window_move_resize()
     * to both move and resize simultaneously, for a nicer visual effect.
     * @param x X coordinate relative to window's parent
     * @param y Y coordinate relative to window's parent
     */
    move(x: number, y: number): void
    /**
     * Move the part of `window` indicated by `region` by `dy` pixels in the Y
     * direction and `dx` pixels in the X direction. The portions of `region`
     * that not covered by the new position of `region` are invalidated.
     * 
     * Child windows are not moved.
     * @param region The #GdkRegion to move
     * @param dx Amount to move in the X direction
     * @param dy Amount to move in the Y direction
     */
    move_region(region: Region, dx: number, dy: number): void
    /**
     * Equivalent to calling gdk_window_move() and gdk_window_resize(),
     * except that both operations are performed at once, avoiding strange
     * visual effects. (i.e. the user may be able to see the window first
     * move, then resize, if you don't use gdk_window_move_resize().)
     * @param x new X position relative to window's parent
     * @param y new Y position relative to window's parent
     * @param width new width
     * @param height new height
     */
    move_resize(x: number, y: number, width: number, height: number): void
    /**
     * Creates a new #GdkWindow using the attributes from
     * `attributes`. See #GdkWindowAttr and #GdkWindowAttributesType for
     * more details.  Note: to use this on displays other than the default
     * display, `parent` must be specified.
     * @param attributes attributes of the new window
     * @param attributes_mask mask indicating which fields in `attributes` are valid
     * @returns the new #GdkWindow
     */
    new(attributes: WindowAttr, attributes_mask: number): Window
    /**
     * Like gdk_window_get_children(), but does not copy the list of
     * children, so the list does not need to be freed.
     * @returns      a reference to the list of child windows in @window
     */
    peek_children(): Window[]
    /**
     * Sends one or more expose events to `window`. The areas in each
     * expose event will cover the entire update area for the window (see
     * gdk_window_invalidate_region() for details). Normally GDK calls
     * gdk_window_process_all_updates() on your behalf, so there's no
     * need to call this function unless you want to force expose events
     * to be delivered immediately and synchronously (vs. the usual
     * case, where GDK delivers them in an idle handler). Occasionally
     * this is useful to produce nicer scrolling behavior, for example.
     * @param update_children whether to also process updates for child windows
     */
    process_updates(update_children: boolean): void
    /**
     * Raises `window` to the top of the Z-order (stacking order), so that
     * other windows with the same parent window appear below `window`.
     * This is true whether or not the windows are visible.
     * 
     * If `window` is a toplevel, the window manager may choose to deny the
     * request to move the window in the Z-order, gdk_window_raise() only
     * requests the restack, does not guarantee it.
     */
    raise(): void
    /**
     * Redirects drawing into `window` so that drawing to the
     * window in the rectangle specified by `src_x,` `src_y,`
     * `width` and `height` is also drawn into `drawable` at
     * `dest_x,` `dest_y`.
     * 
     * Only drawing between gdk_window_begin_paint_region() or
     * gdk_window_begin_paint_rect() and gdk_window_end_paint() is
     * redirected.
     * 
     * Redirection is active until gdk_window_remove_redirection()
     * is called.
     * @param drawable a #GdkDrawable
     * @param src_x x position in `window`
     * @param src_y y position in `window`
     * @param dest_x x position in `drawable`
     * @param dest_y y position in `drawable`
     * @param width width of redirection, or -1 to use the width of `window`
     * @param height height of redirection or -1 to use the height of `window`
     */
    redirect_to_drawable(drawable: Drawable, src_x: number, src_y: number, dest_x: number, dest_y: number, width: number, height: number): void
    register_dnd(): void
    /**
     * Removes any active redirection started by
     * gdk_window_redirect_to_drawable().
     */
    remove_redirection(): void
    /**
     * Reparents `window` into the given `new_parent`. The window being
     * reparented will be unmapped as a side effect.
     * @param new_parent new parent to move `window` into
     * @param x X location inside the new parent
     * @param y Y location inside the new parent
     */
    reparent(new_parent: Window, x: number, y: number): void
    /**
     * Resizes `window;` for toplevel windows, asks the window manager to resize
     * the window. The window manager may not allow the resize. When using GTK+,
     * use gtk_window_resize() instead of this low-level GDK function.
     * 
     * Windows may not be resized below 1x1.
     * 
     * If you're also planning to move the window, use gdk_window_move_resize()
     * to both move and resize simultaneously, for a nicer visual effect.
     * @param width new width of the window
     * @param height new height of the window
     */
    resize(width: number, height: number): void
    /**
     * Changes the position of  `window` in the Z-order (stacking order), so that
     * it is above `sibling` (if `above` is %TRUE) or below `sibling` (if `above` is
     * %FALSE).
     * 
     * If `sibling` is %NULL, then this either raises (if `above` is %TRUE) or
     * lowers the window.
     * 
     * If `window` is a toplevel, the window manager may choose to deny the
     * request to move the window in the Z-order, gdk_window_restack() only
     * requests the restack, does not guarantee it.
     * @param sibling a #GdkWindow that is a sibling of `window,` or %NULL
     * @param above a boolean
     */
    restack(sibling: Window | null, above: boolean): void
    /**
     * Scroll the contents of `window,` both pixels and children, by the
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
    scroll(dx: number, dy: number): void
    /**
     * Setting `accept_focus` to %FALSE hints the desktop environment that the
     * window doesn't want to receive input focus.
     * 
     * On X, it is the responsibility of the window manager to interpret this
     * hint. ICCCM-compliant window manager usually respect it.
     * @param accept_focus %TRUE if the window should receive input focus
     */
    set_accept_focus(accept_focus: boolean): void
    /**
     * Sets the background pixmap of `window`. May also be used to set a
     * background of "None" on `window,` by setting a background pixmap
     * of %NULL.
     * 
     * A background pixmap will be tiled, positioning the first tile at
     * the origin of `window,` or if `parent_relative` is %TRUE, the tiling
     * will be done based on the origin of the parent window (useful to
     * align tiles in a parent with tiles in a child).
     * 
     * A background pixmap of %NULL means that the window will have no
     * background.  A window with no background will never have its
     * background filled by the windowing system, instead the window will
     * contain whatever pixels were already in the corresponding area of
     * the display.
     * 
     * The windowing system will normally fill a window with its background
     * when the window is obscured then exposed, and when you call
     * gdk_window_clear().
     * @param pixmap a #GdkPixmap, or %NULL
     * @param parent_relative whether the tiling origin is at the origin of   `window'`s parent
     */
    set_back_pixmap(pixmap: Pixmap | null, parent_relative: boolean): void
    /**
     * Sets the background color of `window`. (However, when using GTK+,
     * set the background of a widget with gtk_widget_modify_bg() - if
     * you're an application - or gtk_style_set_background() - if you're
     * implementing a custom widget.)
     * 
     * The `color` must be allocated; gdk_rgb_find_color() is the best way
     * to allocate a color.
     * 
     * See also gdk_window_set_back_pixmap().
     * @param color an allocated #GdkColor
     */
    set_background(color: Color): void
    /**
     * Sets the input shape mask of `window` to the union of input shape masks
     * for all children of `window,` ignoring the input shape mask of `window`
     * itself. Contrast with gdk_window_merge_child_input_shapes() which includes
     * the input shape mask of `window` in the masks to be merged.
     */
    set_child_input_shapes(): void
    /**
     * Sets the shape mask of `window` to the union of shape masks
     * for all children of `window,` ignoring the shape mask of `window`
     * itself. Contrast with gdk_window_merge_child_shapes() which includes
     * the shape mask of `window` in the masks to be merged.
     */
    set_child_shapes(): void
    /**
     * Sets a #GdkWindow as composited, or unsets it. Composited
     * windows do not automatically have their contents drawn to
     * the screen. Drawing is redirected to an offscreen buffer
     * and an expose event is emitted on the parent of the composited
     * window. It is the responsibility of the parent's expose handler
     * to manually merge the off-screen content onto the screen in
     * whatever way it sees fit. See <xref linkend="composited-window-example"/>
     * for an example.
     * 
     * It only makes sense for child windows to be composited; see
     * gdk_window_set_opacity() if you need translucent toplevel
     * windows.
     * 
     * An additional effect of this call is that the area of this
     * window is no longer clipped from regions marked for
     * invalidation on its parent. Draws done on the parent
     * window are also no longer clipped by the child.
     * 
     * This call is only supported on some systems (currently,
     * only X11 with new enough Xcomposite and Xdamage extensions).
     * You must call gdk_display_supports_composite() to check if
     * setting a window as composited is supported before
     * attempting to do so.
     * @param composited %TRUE to set the window as composited
     */
    set_composited(composited: boolean): void
    /**
     * Sets the mouse pointer for a #GdkWindow. Use gdk_cursor_new_for_display()
     * or gdk_cursor_new_from_pixmap() to create the cursor. To make the cursor
     * invisible, use %GDK_BLANK_CURSOR. Passing %NULL for the `cursor` argument
     * to gdk_window_set_cursor() means that `window` will use the cursor of its
     * parent window. Most windows should use this default.
     * @param cursor a cursor
     */
    set_cursor(cursor: Cursor | null): void
    /**
     * "Decorations" are the features the window manager adds to a toplevel #GdkWindow.
     * This function sets the traditional Motif window manager hints that tell the
     * window manager which decorations you would like your window to have.
     * Usually you should use gtk_window_set_decorated() on a #GtkWindow instead of
     * using the GDK function directly.
     * 
     * The `decorations` argument is the logical OR of the fields in
     * the #GdkWMDecoration enumeration. If #GDK_DECOR_ALL is included in the
     * mask, the other bits indicate which decorations should be turned off.
     * If #GDK_DECOR_ALL is not included, then the other bits indicate
     * which decorations should be turned on.
     * 
     * Most window managers honor a decorations hint of 0 to disable all decorations,
     * but very few honor all possible combinations of bits.
     * @param decorations decoration hint mask
     */
    set_decorations(decorations: WMDecoration): void
    /**
     * The event mask for a window determines which events will be reported
     * for that window. For example, an event mask including #GDK_BUTTON_PRESS_MASK
     * means the window should report button press events. The event mask
     * is the bitwise OR of values from the #GdkEventMask enumeration.
     * @param event_mask event mask for `window`
     */
    set_events(event_mask: EventMask): void
    /**
     * Setting `focus_on_map` to %FALSE hints the desktop environment that the
     * window doesn't want to receive input focus when it is mapped.
     * focus_on_map should be turned off for windows that aren't triggered
     * interactively (such as popups from network activity).
     * 
     * On X, it is the responsibility of the window manager to interpret
     * this hint. Window managers following the freedesktop.org window
     * manager extension specification should respect it.
     * @param focus_on_map %TRUE if the window should receive input focus when mapped
     */
    set_focus_on_map(focus_on_map: boolean): void
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
     * #GdkWMFunction enumeration. If the bitmask includes #GDK_FUNC_ALL,
     * then the other bits indicate which functions to disable; if
     * it doesn't include #GDK_FUNC_ALL, it indicates which functions to
     * enable.
     * @param functions bitmask of operations to allow on `window`
     */
    set_functions(functions: WMFunction): void
    /**
     * Sets the geometry hints for `window`. Hints flagged in `geom_mask`
     * are set, hints not flagged in `geom_mask` are unset.
     * To unset all hints, use a `geom_mask` of 0 and a `geometry` of %NULL.
     * 
     * This function provides hints to the windowing system about
     * acceptable sizes for a toplevel window. The purpose of
     * this is to constrain user resizing, but the windowing system
     * will typically  (but is not required to) also constrain the
     * current size of the window to the provided values and
     * constrain programatic resizing via gdk_window_resize() or
     * gdk_window_move_resize().
     * 
     * Note that on X11, this effect has no effect on windows
     * of type %GDK_WINDOW_TEMP or windows where override redirect
     * has been turned on via gdk_window_set_override_redirect()
     * since these windows are not resizable by the user.
     * 
     * Since you can't count on the windowing system doing the
     * constraints for programmatic resizes, you should generally
     * call gdk_window_constrain_size() yourself to determine
     * appropriate sizes.
     * @param geometry geometry hints
     * @param geom_mask bitmask indicating fields of `geometry` to pay attention to
     */
    set_geometry_hints(geometry: Geometry, geom_mask: WindowHints): void
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
     * @param leader group leader window, or %NULL to restore the default group leader window
     */
    set_group(leader: Window): void
    /**
     * This function is broken and useless and you should ignore it.
     * If using GTK+, use functions such as gtk_window_resize(), gtk_window_set_size_request(),
     * gtk_window_move(), gtk_window_parse_geometry(), and gtk_window_set_geometry_hints(),
     * depending on what you're trying to do.
     * 
     * If using GDK directly, use gdk_window_set_geometry_hints().
     * @param x ignored field, does not matter
     * @param y ignored field, does not matter
     * @param min_width minimum width hint
     * @param min_height minimum height hint
     * @param max_width max width hint
     * @param max_height max height hint
     * @param flags logical OR of GDK_HINT_POS, GDK_HINT_MIN_SIZE, and/or GDK_HINT_MAX_SIZE
     */
    set_hints(x: number, y: number, min_width: number, min_height: number, max_width: number, max_height: number, flags: number): void
    /**
     * Sets the icon of `window` as a pixmap or window. If using GTK+, investigate
     * gtk_window_set_default_icon_list() first, and then gtk_window_set_icon_list()
     * and gtk_window_set_icon(). If those don't meet your needs, look at
     * gdk_window_set_icon_list(). Only if all those are too high-level do you
     * want to fall back to gdk_window_set_icon().
     * @param icon_window a #GdkWindow to use for the icon, or %NULL to unset
     * @param pixmap a #GdkPixmap to use as the icon, or %NULL to unset
     * @param mask a 1-bit pixmap (#GdkBitmap) to use as mask for `pixmap,` or %NULL to have none
     */
    set_icon(icon_window: Window, pixmap: Pixmap, mask: Bitmap): void
    /**
     * Sets a list of icons for the window. One of these will be used
     * to represent the window when it has been iconified. The icon is
     * usually shown in an icon box or some sort of task bar. Which icon
     * size is shown depends on the window manager. The window manager
     * can scale the icon  but setting several size icons can give better
     * image quality since the window manager may only need to scale the
     * icon by a small amount or not at all.
     * @param pixbufs      A list of pixbufs, of different sizes.
     */
    set_icon_list(pixbufs: GdkPixbuf.Pixbuf[]): void
    /**
     * Windows may have a name used while minimized, distinct from the
     * name they display in their titlebar. Most of the time this is a bad
     * idea from a user interface standpoint. But you can set such a name
     * with this function, if you like.
     * 
     * After calling this with a non-%NULL `name,` calls to gdk_window_set_title()
     * will not update the icon title.
     * 
     * Using %NULL for `name` unsets the icon title; further calls to
     * gdk_window_set_title() will again update the icon title as well.
     * @param name name of window while iconified (minimized)
     */
    set_icon_name(name: string | null): void
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
     */
    set_keep_above(setting: boolean): void
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
     */
    set_keep_below(setting: boolean): void
    /**
     * The application can use this hint to tell the window manager
     * that a certain window has modal behaviour. The window manager
     * can use this information to handle modal windows in a special
     * way.
     * 
     * You should only use this on windows for which you have
     * previously called gdk_window_set_transient_for()
     * @param modal %TRUE if the window is modal, %FALSE otherwise.
     */
    set_modal_hint(modal: boolean): void
    /**
     * Request the windowing system to make `window` partially transparent,
     * with opacity 0 being fully transparent and 1 fully opaque. (Values
     * of the opacity parameter are clamped to the [0,1] range.)
     * 
     * On X11, this works only on X screens with a compositing manager
     * running.
     * 
     * For setting up per-pixel alpha, see gdk_screen_get_rgba_colormap().
     * For making non-toplevel windows translucent, see
     * gdk_window_set_composited().
     * @param opacity opacity
     */
    set_opacity(opacity: number): void
    /**
     * An override redirect window is not under the control of the window manager.
     * This means it won't have a titlebar, won't be minimizable, etc. - it will
     * be entirely under the control of the application. The window manager
     * can't see the override redirect window at all.
     * 
     * Override redirect should only be used for short-lived temporary
     * windows, such as popup menus. #GtkMenu uses an override redirect
     * window in its implementation, for example.
     * @param override_redirect %TRUE if window should be override redirect
     */
    set_override_redirect(override_redirect: boolean): void
    /**
     * When using GTK+, typically you should use gtk_window_set_role() instead
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
    set_role(role: string | null): void
    /**
     * Toggles whether a window should appear in a pager (workspace
     * switcher, or other desktop utility program that displays a small
     * thumbnail representation of the windows on the desktop). If a
     * window's semantic type as specified with gdk_window_set_type_hint()
     * already fully describes the window, this function should
     * <emphasis>not</emphasis> be called in addition, instead you should
     * allow the window to be treated according to standard policy for
     * its semantic type.
     * @param skips_pager %TRUE to skip the pager
     */
    set_skip_pager_hint(skips_pager: boolean): void
    /**
     * Toggles whether a window should appear in a task list or window
     * list. If a window's semantic type as specified with
     * gdk_window_set_type_hint() already fully describes the window, this
     * function should <emphasis>not</emphasis> be called in addition,
     * instead you should allow the window to be treated according to
     * standard policy for its semantic type.
     * @param skips_taskbar %TRUE to skip the taskbar
     */
    set_skip_taskbar_hint(skips_taskbar: boolean): void
    /**
     * When using GTK+, typically you should use gtk_window_set_startup_id()
     * instead of this low-level function.
     * @param startup_id a string with startup-notification identifier
     */
    set_startup_id(startup_id: string | null): void
    /**
     * Set the bit gravity of the given window to static, and flag it so
     * all children get static subwindow gravity. This is used if you are
     * implementing scary features that involve deep knowledge of the
     * windowing system. Don't worry about it unless you have to.
     * @param use_static %TRUE to turn on static gravity
     * @returns %TRUE if the server supports static gravity
     */
    set_static_gravities(use_static: boolean): boolean
    /**
     * Sets the title of a toplevel window, to be displayed in the titlebar.
     * If you haven't explicitly set the icon name for the window
     * (using gdk_window_set_icon_name()), the icon name will be set to
     * `title` as well. `title` must be in UTF-8 encoding (as with all
     * user-readable strings in GDK/GTK+). `title` may not be %NULL.
     * @param title title of `window`
     */
    set_title(title: string | null): void
    /**
     * Indicates to the window manager that `window` is a transient dialog
     * associated with the application window `parent`. This allows the
     * window manager to do things like center `window` on `parent` and
     * keep `window` above `parent`.
     * 
     * See gtk_window_set_transient_for() if you're using #GtkWindow or
     * #GtkDialog.
     * @param parent another toplevel #GdkWindow
     */
    set_transient_for(parent: Window): void
    /**
     * The application can use this call to provide a hint to the window
     * manager about the functionality of a window. The window manager
     * can use this information when determining the decoration and behaviour
     * of the window.
     * 
     * The hint must be set before the window is mapped.
     * @param hint A hint of the function this window will have
     */
    set_type_hint(hint: WindowTypeHint): void
    /**
     * Toggles whether a window needs the user's
     * urgent attention.
     * @param urgent %TRUE if the window is urgent
     */
    set_urgency_hint(urgent: boolean): void
    /**
     * For most purposes this function is deprecated in favor of
     * g_object_set_data(). However, for historical reasons GTK+ stores
     * the #GtkWidget that owns a #GdkWindow as user data on the
     * #GdkWindow. So, custom widget implementations should use
     * this function for that. If GTK+ receives an event for a #GdkWindow,
     * and the user data for the window is non-%NULL, GTK+ will assume the
     * user data is a #GtkWidget, and forward the event to that widget.
     * @param user_data user data
     */
    set_user_data(user_data: any | null): void
    /**
     * Applies a shape mask to `window`. Pixels in `window` corresponding to
     * set bits in the `mask` will be visible; pixels in `window`
     * corresponding to unset bits in the `mask` will be transparent. This
     * gives a non-rectangular window.
     * 
     * If `mask` is %NULL, the shape mask will be unset, and the `x/``y`
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
    shape_combine_mask(mask: Bitmap, x: number, y: number): void
    /**
     * Makes pixels in `window` outside `shape_region` be transparent,
     * so that the window may be nonrectangular. See also
     * gdk_window_shape_combine_mask() to use a bitmap as the mask.
     * 
     * If `shape_region` is %NULL, the shape will be unset, so the whole
     * window will be opaque again. `offset_x` and `offset_y` are ignored
     * if `shape_region` is %NULL.
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
    shape_combine_region(shape_region: Region, offset_x: number, offset_y: number): void
    /**
     * Like gdk_window_show_unraised(), but also raises the window to the
     * top of the window stack (moves the window to the front of the
     * Z-order).
     * 
     * This function maps a window so it's visible onscreen. Its opposite
     * is gdk_window_hide().
     * 
     * When implementing a #GtkWidget, you should call this function on the widget's
     * #GdkWindow as part of the "map" method.
     */
    show(): void
    /**
     * Shows a #GdkWindow onscreen, but does not modify its stacking
     * order. In contrast, gdk_window_show() will raise the window
     * to the top of the window stack.
     * 
     * On the X11 platform, in Xlib terms, this function calls
     * XMapWindow() (it also updates some internal GDK state, which means
     * that you can't really use XMapWindow() directly on a GDK window).
     */
    show_unraised(): void
    /**
     * "Pins" a window such that it's on all workspaces and does not scroll
     * with viewports, for window managers that have scrollable viewports.
     * (When using #GtkWindow, gtk_window_stick() may be more useful.)
     * 
     * On the X11 platform, this function depends on window manager
     * support, so may have no effect with many window managers. However,
     * GDK will do the best it can to convince the window manager to stick
     * the window. For window managers that don't support this operation,
     * there's nothing you can do to force it to happen.
     */
    stick(): void
    /**
     * Thaws a window frozen with
     * gdk_window_freeze_toplevel_updates_libgtk_only().
     * 
     * This function is not part of the GDK public API and is only
     * for use by GTK+.
     */
    thaw_toplevel_updates_libgtk_only(): void
    /**
     * Thaws a window frozen with gdk_window_freeze_updates().
     */
    thaw_updates(): void
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
     */
    unfullscreen(): void
    /**
     * Unmaximizes the window. If the window wasn't maximized, then this
     * function does nothing.
     * 
     * On X11, asks the window manager to unmaximize `window,` if the
     * window manager supports this operation. Not all window managers
     * support this, and some deliberately ignore it or don't have a
     * concept of "maximized"; so you can't rely on the unmaximization
     * actually happening. But it will happen with most standard window
     * managers, and GDK makes a best effort to get it to happen.
     * 
     * On Windows, reliably unmaximizes the window.
     */
    unmaximize(): void
    /**
     * Reverse operation for gdk_window_stick(); see gdk_window_stick(),
     * and gtk_window_unstick().
     */
    unstick(): void
    /**
     * Withdraws a window (unmaps it and asks the window manager to forget about it).
     * This function is not really useful as gdk_window_hide() automatically
     * withdraws toplevel windows before hiding them.
     */
    withdraw(): void

    // Conflicting methods

    /**
     * This function is equivalent to g_object_set_data(),
     * the #GObject variant should be used instead.
     * @param key name to store the data under
     * @param data arbitrary data
     * @param destroy_func function to free `data,` or %NULL
     */
    set_data(key: string | null, data: any | null, destroy_func: GLib.DestroyNotify | null): void

    // Overloads of set_data

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
    set_data(key: string | null, data: any | null): void
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
    set_data(key: string | null, data: any | null): void

    // Own signals of Gdk-2.0.Gdk.Window

    connect(sigName: "from-embedder", callback: Window.FromEmbedderSignalCallback): number
    connect_after(sigName: "from-embedder", callback: Window.FromEmbedderSignalCallback): number
    emit(sigName: "from-embedder", embedder_x: number, embedder_y: number, ...args: any[]): void
    connect(sigName: "pick-embedded-child", callback: Window.PickEmbeddedChildSignalCallback): number
    connect_after(sigName: "pick-embedded-child", callback: Window.PickEmbeddedChildSignalCallback): number
    emit(sigName: "pick-embedded-child", x: number, y: number, ...args: any[]): void
    connect(sigName: "to-embedder", callback: Window.ToEmbedderSignalCallback): number
    connect_after(sigName: "to-embedder", callback: Window.ToEmbedderSignalCallback): number
    emit(sigName: "to-embedder", offscreen_x: number, offscreen_y: number, ...args: any[]): void

    // Class property signals of Gdk-2.0.Gdk.Window

    connect(sigName: "notify::cursor", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Window extends Drawable {

    // Own properties of Gdk-2.0.Gdk.Window

    static name: string
    static $gtype: GObject.GType<Window>

    // Constructors of Gdk-2.0.Gdk.Window

    constructor(config?: Window.ConstructorProperties) 
    _init(config?: Window.ConstructorProperties): void
}

export interface AppLaunchContextClass {

    // Own fields of Gdk-2.0.Gdk.AppLaunchContextClass

    parent_class: Gio.AppLaunchContextClass
}

export abstract class AppLaunchContextClass {

    // Own properties of Gdk-2.0.Gdk.AppLaunchContextClass

    static name: string
}

export interface AppLaunchContextPrivate {
}

export class AppLaunchContextPrivate {

    // Own properties of Gdk-2.0.Gdk.AppLaunchContextPrivate

    static name: string
}

export interface Atom {

    // Owm methods of Gdk-2.0.Gdk.Atom

    name(): string | null
}

export class Atom {

    // Own properties of Gdk-2.0.Gdk.Atom

    static name: string
}

export interface Bitmap {

    // Own fields of Gdk-2.0.Gdk.Bitmap

    parent_instance: GObject.Object
}

export class Bitmap {

    // Own properties of Gdk-2.0.Gdk.Bitmap

    static name: string
}

export interface Color {

    // Own fields of Gdk-2.0.Gdk.Color

    pixel: number
    red: number
    green: number
    blue: number

    // Owm methods of Gdk-2.0.Gdk.Color

    /**
     * Makes a copy of a color structure. The result
     * must be freed using gdk_color_free().
     * @returns a copy of @color.
     */
    copy(): Color
    /**
     * Compares two colors.
     * @param colorb another #GdkColor.
     * @returns %TRUE if the two colors compare equal
     */
    equal(colorb: Color): boolean
    /**
     * Frees a color structure created with
     * gdk_color_copy().
     */
    free(): void
    /**
     * A hash function suitable for using for a hash
     * table that stores #GdkColor's.
     * @returns The hash function applied to @colora
     */
    hash(): number
    /**
     * Returns a textual specification of `color` in the hexadecimal form
     * <literal>&num;rrrrggggbbbb</literal>, where <literal>r</literal>,
     * <literal>g</literal> and <literal>b</literal> are hex digits
     * representing the red, green and blue components respectively.
     * @returns a newly-allocated text string
     */
    to_string(): string | null
}

export class Color {

    // Own properties of Gdk-2.0.Gdk.Color

    static name: string

    // Constructors of Gdk-2.0.Gdk.Color

    /**
     * Allocates a single color from a colormap.
     * @param colormap a #GdkColormap.
     * @param color The color to allocate. On return, the    <structfield>pixel</structfield> field will be filled in.
     * @returns %TRUE if the allocation succeeded.
     */
    static alloc(colormap: Colormap, color: Color): number
    /**
     * Returns the black color for a given colormap. The resulting
     * value has already been allocated.
     * @param colormap a #GdkColormap.
     * @param color the location to store the color.
     * @returns %TRUE if the allocation succeeded.
     */
    static black(colormap: Colormap, color: Color): number
    /**
     * Changes the value of a color that has already
     * been allocated. If `colormap` is not a private
     * colormap, then the color must have been allocated
     * using gdk_colormap_alloc_colors() with the
     * `writeable` set to %TRUE.
     * @param colormap a #GdkColormap.
     * @param color a #GdkColor, with the color to change in the <structfield>pixel</structfield> field, and the new value in the remaining fields.
     * @returns %TRUE if the color was successfully changed.
     */
    static change(colormap: Colormap, color: Color): number
    /**
     * Parses a textual specification of a color and fill in the
     * <structfield>red</structfield>, <structfield>green</structfield>,
     * and <structfield>blue</structfield> fields of a #GdkColor
     * structure. The color is <emphasis>not</emphasis> allocated, you
     * must call gdk_colormap_alloc_color() yourself. The string can
     * either one of a large set of standard names. (Taken from the X11
     * <filename>rgb.txt</filename> file), or it can be a hex value in the
     * form '&num;rgb' '&num;rrggbb' '&num;rrrgggbbb' or
     * '&num;rrrrggggbbbb' where 'r', 'g' and 'b' are hex digits of the
     * red, green, and blue components of the color, respectively. (White
     * in the four forms is '&num;fff' '&num;ffffff' '&num;fffffffff' and
     * '&num;ffffffffffff')
     * @param spec the string specifying the color.
     * @returns %TRUE if the parsing succeeded.
     */
    static parse(spec: string | null): [ /* returnType */ boolean, /* color */ Color ]
    /**
     * Returns the white color for a given colormap. The resulting
     * value has already allocated been allocated.
     * @param colormap a #GdkColormap.
     * @param color the location to store the color.
     * @returns %TRUE if the allocation succeeded.
     */
    static white(colormap: Colormap, color: Color): number
}

export interface ColormapClass {

    // Own fields of Gdk-2.0.Gdk.ColormapClass

    parent_class: GObject.ObjectClass
}

export abstract class ColormapClass {

    // Own properties of Gdk-2.0.Gdk.ColormapClass

    static name: string
}

export interface Cursor {

    // Own fields of Gdk-2.0.Gdk.Cursor

    type: CursorType

    // Owm methods of Gdk-2.0.Gdk.Cursor

    /**
     * Returns the cursor type for this cursor.
     * @returns a #GdkCursorType
     */
    get_cursor_type(): CursorType
    /**
     * Adds a reference to `cursor`.
     * @returns Same @cursor that was passed in
     */
    ref(): Cursor
    /**
     * Removes a reference from `cursor,` deallocating the cursor
     * if no references remain.
     */
    unref(): void
}

export class Cursor {

    // Own properties of Gdk-2.0.Gdk.Cursor

    static name: string

    // Constructors of Gdk-2.0.Gdk.Cursor

    /**
     * Creates a new cursor from the set of builtin cursors for the default display.
     * See gdk_cursor_new_for_display().
     * 
     * To make the cursor invisible, use %GDK_BLANK_CURSOR.
     * @constructor 
     * @param cursor_type cursor to create
     * @returns a new #GdkCursor
     */
    constructor(cursor_type: CursorType) 
    /**
     * Creates a new cursor from the set of builtin cursors for the default display.
     * See gdk_cursor_new_for_display().
     * 
     * To make the cursor invisible, use %GDK_BLANK_CURSOR.
     * @constructor 
     * @param cursor_type cursor to create
     * @returns a new #GdkCursor
     */
    static new(cursor_type: CursorType): Cursor
    /**
     * Creates a new cursor from the set of builtin cursors.
     * Some useful ones are:
     * <itemizedlist>
     * <listitem><para>
     *  <inlinegraphic format="PNG" fileref="right_ptr.png"></inlinegraphic> #GDK_RIGHT_PTR (right-facing arrow)
     * </para></listitem>
     * <listitem><para>
     *  <inlinegraphic format="PNG" fileref="crosshair.png"></inlinegraphic> #GDK_CROSSHAIR (crosshair)
     * </para></listitem>
     * <listitem><para>
     *  <inlinegraphic format="PNG" fileref="xterm.png"></inlinegraphic> #GDK_XTERM (I-beam)
     * </para></listitem>
     * <listitem><para>
     * <inlinegraphic format="PNG" fileref="watch.png"></inlinegraphic> #GDK_WATCH (busy)
     * </para></listitem>
     * <listitem><para>
     * <inlinegraphic format="PNG" fileref="fleur.png"></inlinegraphic> #GDK_FLEUR (for moving objects)
     * </para></listitem>
     * <listitem><para>
     * <inlinegraphic format="PNG" fileref="hand1.png"></inlinegraphic> #GDK_HAND1 (a right-pointing hand)
     * </para></listitem>
     * <listitem><para>
     * <inlinegraphic format="PNG" fileref="hand2.png"></inlinegraphic> #GDK_HAND2 (a left-pointing hand)
     * </para></listitem>
     * <listitem><para>
     * <inlinegraphic format="PNG" fileref="left_side.png"></inlinegraphic> #GDK_LEFT_SIDE (resize left side)
     * </para></listitem>
     * <listitem><para>
     * <inlinegraphic format="PNG" fileref="right_side.png"></inlinegraphic> #GDK_RIGHT_SIDE (resize right side)
     * </para></listitem>
     * <listitem><para>
     * <inlinegraphic format="PNG" fileref="top_left_corner.png"></inlinegraphic> #GDK_TOP_LEFT_CORNER (resize northwest corner)
     * </para></listitem>
     * <listitem><para>
     * <inlinegraphic format="PNG" fileref="top_right_corner.png"></inlinegraphic> #GDK_TOP_RIGHT_CORNER (resize northeast corner)
     * </para></listitem>
     * <listitem><para>
     * <inlinegraphic format="PNG" fileref="bottom_left_corner.png"></inlinegraphic> #GDK_BOTTOM_LEFT_CORNER (resize southwest corner)
     * </para></listitem>
     * <listitem><para>
     * <inlinegraphic format="PNG" fileref="bottom_right_corner.png"></inlinegraphic> #GDK_BOTTOM_RIGHT_CORNER (resize southeast corner)
     * </para></listitem>
     * <listitem><para>
     * <inlinegraphic format="PNG" fileref="top_side.png"></inlinegraphic> #GDK_TOP_SIDE (resize top side)
     * </para></listitem>
     * <listitem><para>
     * <inlinegraphic format="PNG" fileref="bottom_side.png"></inlinegraphic> #GDK_BOTTOM_SIDE (resize bottom side)
     * </para></listitem>
     * <listitem><para>
     * <inlinegraphic format="PNG" fileref="sb_h_double_arrow.png"></inlinegraphic> #GDK_SB_H_DOUBLE_ARROW (move vertical splitter)
     * </para></listitem>
     * <listitem><para>
     * <inlinegraphic format="PNG" fileref="sb_v_double_arrow.png"></inlinegraphic> #GDK_SB_V_DOUBLE_ARROW (move horizontal splitter)
     * </para></listitem>
     * <listitem><para>
     * #GDK_BLANK_CURSOR (Blank cursor). Since 2.16
     * </para></listitem>
     * </itemizedlist>
     * @constructor 
     * @param display the #GdkDisplay for which the cursor will be created
     * @param cursor_type cursor to create
     * @returns a new #GdkCursor
     */
    static new_for_display(display: Display, cursor_type: CursorType): Cursor
    /**
     * Creates a new cursor by looking up `name` in the current cursor
     * theme.
     * @constructor 
     * @param display the #GdkDisplay for which the cursor will be created
     * @param name the name of the cursor
     * @returns a new #GdkCursor, or %NULL if there is no cursor with   the given name
     */
    static new_from_name(display: Display, name: string | null): Cursor
    /**
     * Creates a new cursor from a pixbuf.
     * 
     * Not all GDK backends support RGBA cursors. If they are not
     * supported, a monochrome approximation will be displayed.
     * The functions gdk_display_supports_cursor_alpha() and
     * gdk_display_supports_cursor_color() can be used to determine
     * whether RGBA cursors are supported;
     * gdk_display_get_default_cursor_size() and
     * gdk_display_get_maximal_cursor_size() give information about
     * cursor sizes.
     * 
     * If `x` or `y` are <literal>-1</literal>, the pixbuf must have
     * options named "x_hot" and "y_hot", resp., containing
     * integer values between %0 and the width resp. height of
     * the pixbuf. (Since: 3.0)
     * 
     * On the X backend, support for RGBA cursors requires a
     * sufficently new version of the X Render extension.
     * @constructor 
     * @param display the #GdkDisplay for which the cursor will be created
     * @param pixbuf the #GdkPixbuf containing the cursor image
     * @param x the horizontal offset of the 'hotspot' of the cursor.
     * @param y the vertical offset of the 'hotspot' of the cursor.
     * @returns a new #GdkCursor.
     */
    static new_from_pixbuf(display: Display, pixbuf: GdkPixbuf.Pixbuf, x: number, y: number): Cursor
    /**
     * Creates a new cursor from a given pixmap and mask. Both the pixmap and mask
     * must have a depth of 1 (i.e. each pixel has only 2 values - on or off).
     * The standard cursor size is 16 by 16 pixels. You can create a bitmap
     * from inline data as in the below example.
     * 
     * <example><title>Creating a custom cursor</title>
     * <programlisting>
     * /<!-- -->* This data is in X bitmap format, and can be created with the 'bitmap'
     *    utility. *<!-- -->/
     * &num;define cursor1_width 16
     * &num;define cursor1_height 16
     * static unsigned char cursor1_bits[] = {
     *   0x80, 0x01, 0x40, 0x02, 0x20, 0x04, 0x10, 0x08, 0x08, 0x10, 0x04, 0x20,
     *   0x82, 0x41, 0x41, 0x82, 0x41, 0x82, 0x82, 0x41, 0x04, 0x20, 0x08, 0x10,
     *   0x10, 0x08, 0x20, 0x04, 0x40, 0x02, 0x80, 0x01};
     *  
     * static unsigned char cursor1mask_bits[] = {
     *   0x80, 0x01, 0xc0, 0x03, 0x60, 0x06, 0x30, 0x0c, 0x18, 0x18, 0x8c, 0x31,
     *   0xc6, 0x63, 0x63, 0xc6, 0x63, 0xc6, 0xc6, 0x63, 0x8c, 0x31, 0x18, 0x18,
     *   0x30, 0x0c, 0x60, 0x06, 0xc0, 0x03, 0x80, 0x01};
     *  
     *  
     *  GdkCursor *cursor;
     *  GdkPixmap *source, *mask;
     *  GdkColor fg = { 0, 65535, 0, 0 }; /<!-- -->* Red. *<!-- -->/
     *  GdkColor bg = { 0, 0, 0, 65535 }; /<!-- -->* Blue. *<!-- -->/
     *  
     *  
     *  source = gdk_bitmap_create_from_data (NULL, cursor1_bits,
     *                                        cursor1_width, cursor1_height);
     *  mask = gdk_bitmap_create_from_data (NULL, cursor1mask_bits,
     *                                      cursor1_width, cursor1_height);
     *  cursor = gdk_cursor_new_from_pixmap (source, mask, &amp;fg, &amp;bg, 8, 8);
     *  g_object_unref (source);
     *  g_object_unref (mask);
     *  
     *  
     *  gdk_window_set_cursor (widget->window, cursor);
     * </programlisting>
     * </example>
     * @constructor 
     * @param source the pixmap specifying the cursor.
     * @param mask the pixmap specifying the mask, which must be the same size as    `source`.
     * @param fg the foreground color, used for the bits in the source which are 1.    The color does not have to be allocated first.
     * @param bg the background color, used for the bits in the source which are 0.    The color does not have to be allocated first.
     * @param x the horizontal offset of the 'hotspot' of the cursor.
     * @param y the vertical offset of the 'hotspot' of the cursor.
     * @returns a new #GdkCursor.
     */
    static new_from_pixmap(source: Pixmap, mask: Pixmap, fg: Color, bg: Color, x: number, y: number): Cursor
}

export interface DeviceAxis {

    // Own fields of Gdk-2.0.Gdk.DeviceAxis

    use: AxisUse
    min: number
    max: number
}

export class DeviceAxis {

    // Own properties of Gdk-2.0.Gdk.DeviceAxis

    static name: string
}

export interface DeviceClass {
}

export abstract class DeviceClass {

    // Own properties of Gdk-2.0.Gdk.DeviceClass

    static name: string
}

export interface DeviceKey {

    // Own fields of Gdk-2.0.Gdk.DeviceKey

    keyval: number
    modifiers: ModifierType
}

export class DeviceKey {

    // Own properties of Gdk-2.0.Gdk.DeviceKey

    static name: string
}

export interface DisplayClass {

    // Own fields of Gdk-2.0.Gdk.DisplayClass

    parent_class: GObject.ObjectClass
    get_display_name: (display: Display) => string | null
    get_n_screens: (display: Display) => number
    closed: (display: Display, is_error: boolean) => void
}

export abstract class DisplayClass {

    // Own properties of Gdk-2.0.Gdk.DisplayClass

    static name: string
}

export interface DisplayManagerClass {

    // Own fields of Gdk-2.0.Gdk.DisplayManagerClass

    parent_class: GObject.ObjectClass
    display_opened: (display_manager: DisplayManager, display: Display) => void
}

export abstract class DisplayManagerClass {

    // Own properties of Gdk-2.0.Gdk.DisplayManagerClass

    static name: string
}

export interface DisplayPointerHooks {

    // Own fields of Gdk-2.0.Gdk.DisplayPointerHooks

    get_pointer: (display: Display, screen: Screen, x: number, y: number, mask: ModifierType) => void
}

export class DisplayPointerHooks {

    // Own properties of Gdk-2.0.Gdk.DisplayPointerHooks

    static name: string
}

export interface DragContextClass {

    // Own fields of Gdk-2.0.Gdk.DragContextClass

    parent_class: GObject.ObjectClass
}

export abstract class DragContextClass {

    // Own properties of Gdk-2.0.Gdk.DragContextClass

    static name: string
}

export interface DrawableClass {

    // Own fields of Gdk-2.0.Gdk.DrawableClass

    parent_class: GObject.ObjectClass
    draw_rectangle: (drawable: Drawable, gc: GC, filled: boolean, x: number, y: number, width: number, height: number) => void
    draw_arc: (drawable: Drawable, gc: GC, filled: boolean, x: number, y: number, width: number, height: number, angle1: number, angle2: number) => void
    draw_polygon: (drawable: Drawable, gc: GC, filled: boolean, points: Point, npoints: number) => void
    draw_text: (drawable: Drawable, font: Font, gc: GC, x: number, y: number, text: string | null, text_length: number) => void
    draw_text_wc: (drawable: Drawable, font: Font, gc: GC, x: number, y: number, text: WChar, text_length: number) => void
    draw_drawable: (drawable: Drawable, gc: GC, src: Drawable, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number) => void
    draw_points: (drawable: Drawable, gc: GC, points: Point, npoints: number) => void
    draw_segments: (drawable: Drawable, gc: GC, segs: Segment, nsegs: number) => void
    draw_lines: (drawable: Drawable, gc: GC, points: Point, npoints: number) => void
    draw_glyphs: (drawable: Drawable, gc: GC, font: Pango.Font, x: number, y: number, glyphs: Pango.GlyphString) => void
    draw_image: (drawable: Drawable, gc: GC, image: Image, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number) => void
    get_depth: (drawable: Drawable) => number
    get_size: (drawable: Drawable) => [ /* width */ number, /* height */ number ]
    set_colormap: (drawable: Drawable, cmap: Colormap) => void
    draw_pixbuf: (drawable: Drawable, gc: GC, pixbuf: GdkPixbuf.Pixbuf, src_x: number, src_y: number, dest_x: number, dest_y: number, width: number, height: number, dither: RgbDither, x_dither: number, y_dither: number) => void
    draw_glyphs_transformed: (drawable: Drawable, gc: GC, matrix: Pango.Matrix, font: Pango.Font, x: number, y: number, glyphs: Pango.GlyphString) => void
    draw_trapezoids: (drawable: Drawable, gc: GC, trapezoids: Trapezoid, n_trapezoids: number) => void
    ref_cairo_surface: (drawable: Drawable) => cairo.Surface
    set_cairo_clip: (drawable: Drawable, cr: cairo.Context) => void
    create_cairo_surface: (drawable: Drawable, width: number, height: number) => cairo.Surface
    draw_drawable_with_src: (drawable: Drawable, gc: GC, src: Drawable, xsrc: number, ysrc: number, xdest: number, ydest: number, width: number, height: number, original_src: Drawable) => void
}

export abstract class DrawableClass {

    // Own properties of Gdk-2.0.Gdk.DrawableClass

    static name: string
}

export interface EventAny {

    // Own fields of Gdk-2.0.Gdk.EventAny

    type: EventType
    window: Window
    send_event: number
}

export class EventAny {

    // Own properties of Gdk-2.0.Gdk.EventAny

    static name: string
}

export interface EventButton {

    // Own fields of Gdk-2.0.Gdk.EventButton

    type: EventType
    window: Window
    send_event: number
    time: number
    x: number
    y: number
    axes: number
    state: number
    button: number
    device: Device
    x_root: number
    y_root: number
}

export class EventButton {

    // Own properties of Gdk-2.0.Gdk.EventButton

    static name: string
}

export interface EventClient {

    // Own fields of Gdk-2.0.Gdk.EventClient

    type: EventType
    window: Window
    send_event: number
    message_type: Atom
    data_format: number
}

export class EventClient {

    // Own properties of Gdk-2.0.Gdk.EventClient

    static name: string
}

export interface EventConfigure {

    // Own fields of Gdk-2.0.Gdk.EventConfigure

    type: EventType
    window: Window
    send_event: number
    x: number
    y: number
    width: number
    height: number
}

export class EventConfigure {

    // Own properties of Gdk-2.0.Gdk.EventConfigure

    static name: string
}

export interface EventCrossing {

    // Own fields of Gdk-2.0.Gdk.EventCrossing

    type: EventType
    window: Window
    send_event: number
    subwindow: Window
    time: number
    x: number
    y: number
    x_root: number
    y_root: number
    mode: CrossingMode
    detail: NotifyType
    focus: boolean
    state: number
}

export class EventCrossing {

    // Own properties of Gdk-2.0.Gdk.EventCrossing

    static name: string
}

export interface EventDND {

    // Own fields of Gdk-2.0.Gdk.EventDND

    type: EventType
    window: Window
    send_event: number
    context: DragContext
    time: number
    x_root: number
    y_root: number
}

export class EventDND {

    // Own properties of Gdk-2.0.Gdk.EventDND

    static name: string
}

export interface EventExpose {

    // Own fields of Gdk-2.0.Gdk.EventExpose

    type: EventType
    window: Window
    send_event: number
    area: Rectangle
    region: Region
    count: number
}

export class EventExpose {

    // Own properties of Gdk-2.0.Gdk.EventExpose

    static name: string
}

export interface EventFocus {

    // Own fields of Gdk-2.0.Gdk.EventFocus

    type: EventType
    window: Window
    send_event: number
    in_: number
}

export class EventFocus {

    // Own properties of Gdk-2.0.Gdk.EventFocus

    static name: string
}

export interface EventGrabBroken {

    // Own fields of Gdk-2.0.Gdk.EventGrabBroken

    type: EventType
    window: Window
    send_event: number
    keyboard: boolean
    implicit: boolean
    grab_window: Window
}

export class EventGrabBroken {

    // Own properties of Gdk-2.0.Gdk.EventGrabBroken

    static name: string
}

export interface EventKey {

    // Own fields of Gdk-2.0.Gdk.EventKey

    type: EventType
    window: Window
    send_event: number
    time: number
    state: number
    keyval: number
    length: number
    string: string | null
    hardware_keycode: number
    group: number
    is_modifier: number
}

export class EventKey {

    // Own properties of Gdk-2.0.Gdk.EventKey

    static name: string
}

export interface EventMotion {

    // Own fields of Gdk-2.0.Gdk.EventMotion

    type: EventType
    window: Window
    send_event: number
    time: number
    x: number
    y: number
    axes: number
    state: number
    is_hint: number
    device: Device
    x_root: number
    y_root: number
}

export class EventMotion {

    // Own properties of Gdk-2.0.Gdk.EventMotion

    static name: string
}

export interface EventNoExpose {

    // Own fields of Gdk-2.0.Gdk.EventNoExpose

    type: EventType
    window: Window
    send_event: number
}

export class EventNoExpose {

    // Own properties of Gdk-2.0.Gdk.EventNoExpose

    static name: string
}

export interface EventOwnerChange {

    // Own fields of Gdk-2.0.Gdk.EventOwnerChange

    type: EventType
    window: Window
    send_event: number
    owner: NativeWindow
    reason: OwnerChange
    selection: Atom
    time: number
    selection_time: number
}

export class EventOwnerChange {

    // Own properties of Gdk-2.0.Gdk.EventOwnerChange

    static name: string
}

export interface EventProperty {

    // Own fields of Gdk-2.0.Gdk.EventProperty

    type: EventType
    window: Window
    send_event: number
    atom: Atom
    time: number
    state: number
}

export class EventProperty {

    // Own properties of Gdk-2.0.Gdk.EventProperty

    static name: string
}

export interface EventProximity {

    // Own fields of Gdk-2.0.Gdk.EventProximity

    type: EventType
    window: Window
    send_event: number
    time: number
    device: Device
}

export class EventProximity {

    // Own properties of Gdk-2.0.Gdk.EventProximity

    static name: string
}

export interface EventScroll {

    // Own fields of Gdk-2.0.Gdk.EventScroll

    type: EventType
    window: Window
    send_event: number
    time: number
    x: number
    y: number
    state: number
    direction: ScrollDirection
    device: Device
    x_root: number
    y_root: number
}

export class EventScroll {

    // Own properties of Gdk-2.0.Gdk.EventScroll

    static name: string
}

export interface EventSelection {

    // Own fields of Gdk-2.0.Gdk.EventSelection

    type: EventType
    window: Window
    send_event: number
    selection: Atom
    target: Atom
    property: Atom
    time: number
    requestor: NativeWindow
}

export class EventSelection {

    // Own properties of Gdk-2.0.Gdk.EventSelection

    static name: string
}

export interface EventSetting {

    // Own fields of Gdk-2.0.Gdk.EventSetting

    type: EventType
    window: Window
    send_event: number
    action: SettingAction
    name: string | null
}

export class EventSetting {

    // Own properties of Gdk-2.0.Gdk.EventSetting

    static name: string
}

export interface EventVisibility {

    // Own fields of Gdk-2.0.Gdk.EventVisibility

    type: EventType
    window: Window
    send_event: number
    state: VisibilityState
}

export class EventVisibility {

    // Own properties of Gdk-2.0.Gdk.EventVisibility

    static name: string
}

export interface EventWindowState {

    // Own fields of Gdk-2.0.Gdk.EventWindowState

    type: EventType
    window: Window
    send_event: number
    changed_mask: WindowState
    new_window_state: WindowState
}

export class EventWindowState {

    // Own properties of Gdk-2.0.Gdk.EventWindowState

    static name: string
}

export interface Font {

    // Own fields of Gdk-2.0.Gdk.Font

    type: FontType
    ascent: number
    descent: number

    // Owm methods of Gdk-2.0.Gdk.Font

    equal(fontb: Font): boolean
    id(): number
    /**
     * Increases the reference count of a font by one.
     * @returns @font
     */
    ref(): Font
    /**
     * Decreases the reference count of a font by one.
     * If the result is zero, destroys the font.
     */
    unref(): void
}

export class Font {

    // Own properties of Gdk-2.0.Gdk.Font

    static name: string

    // Constructors of Gdk-2.0.Gdk.Font

    /**
     * Load a #GdkFont based on a Pango font description. This font will
     * only be an approximation of the Pango font, and
     * internationalization will not be handled correctly. This function
     * should only be used for legacy code that cannot be easily converted
     * to use Pango. Using Pango directly will produce better results.
     * @param font_desc a #PangoFontDescription.
     * @returns the newly loaded font, or %NULL if the font cannot be loaded.
     */
    static from_description(font_desc: Pango.FontDescription): Font
    static from_description_for_display(display: Display, font_desc: Pango.FontDescription): Font
    /**
     * Loads a font.
     * 
     * The font may be newly loaded or looked up the font in a cache.
     * You should make no assumptions about the initial reference count.
     * @param font_name a XLFD describing the font to load.
     * @returns a #GdkFont, or %NULL if the font could not be loaded.
     */
    static load(font_name: string | null): Font
    static load_for_display(display: Display, font_name: string | null): Font
}

export interface GCClass {

    // Own fields of Gdk-2.0.Gdk.GCClass

    parent_class: GObject.ObjectClass
    get_values: (gc: GC, values: GCValues) => void
    set_values: (gc: GC, values: GCValues, mask: GCValuesMask) => void
    set_dashes: (gc: GC, dash_offset: number, dash_list: number, n: number) => void
}

export abstract class GCClass {

    // Own properties of Gdk-2.0.Gdk.GCClass

    static name: string
}

export interface GCValues {

    // Own fields of Gdk-2.0.Gdk.GCValues

    foreground: Color
    background: Color
    font: Font
    function_: Function
    fill: Fill
    tile: Pixmap
    stipple: Pixmap
    clip_mask: Pixmap
    subwindow_mode: SubwindowMode
    ts_x_origin: number
    ts_y_origin: number
    clip_x_origin: number
    clip_y_origin: number
    graphics_exposures: number
    line_width: number
    line_style: LineStyle
    cap_style: CapStyle
    join_style: JoinStyle
}

export class GCValues {

    // Own properties of Gdk-2.0.Gdk.GCValues

    static name: string
}

export interface Geometry {

    // Own fields of Gdk-2.0.Gdk.Geometry

    min_width: number
    min_height: number
    max_width: number
    max_height: number
    base_width: number
    base_height: number
    width_inc: number
    height_inc: number
    min_aspect: number
    max_aspect: number
    win_gravity: Gravity
}

export class Geometry {

    // Own properties of Gdk-2.0.Gdk.Geometry

    static name: string
}

export interface ImageClass {

    // Own fields of Gdk-2.0.Gdk.ImageClass

    parent_class: GObject.ObjectClass
}

export abstract class ImageClass {

    // Own properties of Gdk-2.0.Gdk.ImageClass

    static name: string
}

export interface KeyboardGrabInfo {

    // Own fields of Gdk-2.0.Gdk.KeyboardGrabInfo

    window: Window
    native_window: Window
    serial: number
    owner_events: boolean
    time: number
}

export class KeyboardGrabInfo {

    // Own properties of Gdk-2.0.Gdk.KeyboardGrabInfo

    static name: string

    // Constructors of Gdk-2.0.Gdk.KeyboardGrabInfo

    /**
     * Determines information about the current keyboard grab.
     * This is not public API and must not be used by applications.
     * @param display the display for which to get the grab information
     * @param grab_window location to store current grab window
     * @param owner_events location to store boolean indicating whether   the `owner_events` flag to gdk_keyboard_grab() was %TRUE.
     * @returns %TRUE if this application currently has the  keyboard grabbed.
     */
    static libgtk_only(display: Display, grab_window: Window, owner_events: boolean): boolean
}

export interface KeymapClass {

    // Own fields of Gdk-2.0.Gdk.KeymapClass

    parent_class: GObject.ObjectClass
    direction_changed: (keymap: Keymap) => void
    keys_changed: (keymap: Keymap) => void
    state_changed: (keymap: Keymap) => void
}

export abstract class KeymapClass {

    // Own properties of Gdk-2.0.Gdk.KeymapClass

    static name: string
}

export interface KeymapKey {

    // Own fields of Gdk-2.0.Gdk.KeymapKey

    keycode: number
    group: number
    level: number
}

export class KeymapKey {

    // Own properties of Gdk-2.0.Gdk.KeymapKey

    static name: string
}

export interface PangoAttrEmbossColor {

    // Own fields of Gdk-2.0.Gdk.PangoAttrEmbossColor

    attr: Pango.Attribute
    color: Pango.Color
}

export class PangoAttrEmbossColor {

    // Own properties of Gdk-2.0.Gdk.PangoAttrEmbossColor

    static name: string

    // Constructors of Gdk-2.0.Gdk.PangoAttrEmbossColor

    /**
     * Creates a new attribute specifying the color to emboss text with.
     * @param color a GdkColor representing the color to emboss with
     * @returns new #PangoAttribute
     */
    static new(color: Color): Pango.Attribute
}

export interface PangoAttrEmbossed {

    // Own fields of Gdk-2.0.Gdk.PangoAttrEmbossed

    attr: Pango.Attribute
    embossed: boolean
}

export class PangoAttrEmbossed {

    // Own properties of Gdk-2.0.Gdk.PangoAttrEmbossed

    static name: string

    // Constructors of Gdk-2.0.Gdk.PangoAttrEmbossed

    /**
     * Creates a new attribute flagging a region as embossed or not.
     * @param embossed if the region should be embossed
     * @returns new #PangoAttribute
     */
    static new(embossed: boolean): Pango.Attribute
}

export interface PangoAttrStipple {

    // Own fields of Gdk-2.0.Gdk.PangoAttrStipple

    attr: Pango.Attribute
    stipple: Bitmap
}

export class PangoAttrStipple {

    // Own properties of Gdk-2.0.Gdk.PangoAttrStipple

    static name: string

    // Constructors of Gdk-2.0.Gdk.PangoAttrStipple

    /**
     * Creates a new attribute containing a stipple bitmap to be used when
     * rendering the text.
     * @param stipple a bitmap to be set as stipple
     * @returns new #PangoAttribute
     */
    static new(stipple: Bitmap): Pango.Attribute
}

export interface PangoRendererClass {
}

/**
 * #GdkPangoRenderer is the class structure for #GdkPangoRenderer.
 * @record 
 */
export abstract class PangoRendererClass {

    // Own properties of Gdk-2.0.Gdk.PangoRendererClass

    static name: string
}

export interface PangoRendererPrivate {
}

export class PangoRendererPrivate {

    // Own properties of Gdk-2.0.Gdk.PangoRendererPrivate

    static name: string
}

export interface PixmapObject {

    // Own fields of Gdk-2.0.Gdk.PixmapObject

    parent_instance: Drawable
    impl: Drawable
    depth: number
}

export class PixmapObject {

    // Own properties of Gdk-2.0.Gdk.PixmapObject

    static name: string
}

export interface PixmapObjectClass {

    // Own fields of Gdk-2.0.Gdk.PixmapObjectClass

    parent_class: DrawableClass
}

export class PixmapObjectClass {

    // Own properties of Gdk-2.0.Gdk.PixmapObjectClass

    static name: string
}

export interface Point {

    // Own fields of Gdk-2.0.Gdk.Point

    x: number
    y: number
}

export class Point {

    // Own properties of Gdk-2.0.Gdk.Point

    static name: string
}

export interface PointerHooks {
}

export class PointerHooks {

    // Own properties of Gdk-2.0.Gdk.PointerHooks

    static name: string
}

export interface PointerWindowInfo {

    // Own fields of Gdk-2.0.Gdk.PointerWindowInfo

    toplevel_under_pointer: Window
    window_under_pointer: Window
    toplevel_x: number
    toplevel_y: number
    state: number
    button: number
    motion_hint_serial: number
}

export class PointerWindowInfo {

    // Own properties of Gdk-2.0.Gdk.PointerWindowInfo

    static name: string
}

export interface Rectangle {

    // Own fields of Gdk-2.0.Gdk.Rectangle

    x: number
    y: number
    width: number
    height: number

    // Owm methods of Gdk-2.0.Gdk.Rectangle

    /**
     * Calculates the intersection of two rectangles. It is allowed for
     * `dest` to be the same as either `src1` or `src2`. If the rectangles
     * do not intersect, `dest'`s width and height is set to 0 and its x
     * and y values are undefined. If you are only interested in whether
     * the rectangles intersect, but not in the intersecting area itself,
     * pass %NULL for `dest`.
     * @param src2 a #GdkRectangle
     * @returns %TRUE if the rectangles intersect.
     */
    intersect(src2: Rectangle): [ /* returnType */ boolean, /* dest */ Rectangle ]
    /**
     * Calculates the union of two rectangles.
     * The union of rectangles `src1` and `src2` is the smallest rectangle which
     * includes both `src1` and `src2` within it.
     * It is allowed for `dest` to be the same as either `src1` or `src2`.
     * @param src2 a #GdkRectangle
     */
    union(src2: Rectangle): /* dest */ Rectangle
}

export class Rectangle {

    // Own properties of Gdk-2.0.Gdk.Rectangle

    static name: string
}

export interface Region {

    // Owm methods of Gdk-2.0.Gdk.Region

    /**
     * Destroys a #GdkRegion.
     */
    destroy(): void
    /**
     * Finds out if the #GdkRegion is empty.
     * @returns %TRUE if @region is empty.
     */
    empty(): boolean
    /**
     * Finds out if the two regions are the same.
     * @param region2 a #GdkRegion
     * @returns %TRUE if @region1 and @region2 are equal.
     */
    equal(region2: Region): boolean
    /**
     * Obtains the smallest rectangle which includes the entire #GdkRegion.
     * @param rectangle return location for the clipbox
     */
    get_clipbox(rectangle: Rectangle): void
    /**
     * Obtains the area covered by the region as a list of rectangles.
     * The array returned in `rectangles` must be freed with g_free().
     * @param rectangles return location for an array of rectangles
     */
    get_rectangles(rectangles: Rectangle[]): void
    /**
     * Sets the area of `source1` to the intersection of the areas of `source1`
     * and `source2`. The resulting area is the set of pixels contained in
     * both `source1` and `source2`.
     * @param source2 another #GdkRegion
     */
    intersect(source2: Region): void
    /**
     * Moves a region the specified distance.
     * @param dx the distance to move the region horizontally
     * @param dy the distance to move the region vertically
     */
    offset(dx: number, dy: number): void
    /**
     * Finds out if a point is in a region.
     * @param x the x coordinate of a point
     * @param y the y coordinate of a point
     * @returns %TRUE if the point is in @region.
     */
    point_in(x: number, y: number): boolean
    /**
     * Finds out if a regions is the same as a rectangle.
     * @param rectangle a #GdkRectangle
     * @returns %TRUE if @region and @rectangle are equal.
     */
    rect_equal(rectangle: Rectangle): boolean
    /**
     * Tests whether a rectangle is within a region.
     * @param rectangle a #GdkRectangle.
     * @returns %GDK_OVERLAP_RECTANGLE_IN, %GDK_OVERLAP_RECTANGLE_OUT, or   %GDK_OVERLAP_RECTANGLE_PART, depending on whether the rectangle is inside,   outside, or partly inside the #GdkRegion, respectively.
     */
    rect_in(rectangle: Rectangle): OverlapType
    /**
     * Resizes a region by the specified amount.
     * Positive values shrink the region. Negative values expand it.
     * @param dx the number of pixels to shrink the region horizontally
     * @param dy the number of pixels to shrink the region vertically
     */
    shrink(dx: number, dy: number): void
    /**
     * Subtracts the area of `source2` from the area `source1`. The resulting
     * area is the set of pixels contained in `source1` but not in `source2`.
     * @param source2 another #GdkRegion
     */
    subtract(source2: Region): void
    /**
     * Sets the area of `source1` to the union of the areas of `source1` and
     * `source2`. The resulting area is the set of pixels contained in
     * either `source1` or `source2`.
     * @param source2 a #GdkRegion
     */
    union(source2: Region): void
    /**
     * Sets the area of `region` to the union of the areas of `region` and
     * `rect`. The resulting area is the set of pixels contained in
     * either `region` or `rect`.
     * @param rect a #GdkRectangle.
     */
    union_with_rect(rect: Rectangle): void
    /**
     * Sets the area of `source1` to the exclusive-OR of the areas of `source1`
     * and `source2`. The resulting area is the set of pixels contained in one
     * or the other of the two sources but not in both.
     * @param source2 another #GdkRegion
     */
    xor(source2: Region): void
}

export class Region {

    // Own properties of Gdk-2.0.Gdk.Region

    static name: string
}

export interface RgbCmap {

    // Own fields of Gdk-2.0.Gdk.RgbCmap

    colors: number[]
    n_colors: number

    // Owm methods of Gdk-2.0.Gdk.RgbCmap

    free(): void
}

export class RgbCmap {

    // Own properties of Gdk-2.0.Gdk.RgbCmap

    static name: string
}

export interface ScreenClass {

    // Own fields of Gdk-2.0.Gdk.ScreenClass

    parent_class: GObject.ObjectClass
    size_changed: (screen: Screen) => void
    composited_changed: (screen: Screen) => void
    monitors_changed: (screen: Screen) => void
}

export abstract class ScreenClass {

    // Own properties of Gdk-2.0.Gdk.ScreenClass

    static name: string
}

export interface Segment {

    // Own fields of Gdk-2.0.Gdk.Segment

    x1: number
    y1: number
    x2: number
    y2: number
}

export class Segment {

    // Own properties of Gdk-2.0.Gdk.Segment

    static name: string
}

export interface Span {

    // Own fields of Gdk-2.0.Gdk.Span

    x: number
    y: number
    width: number
}

export class Span {

    // Own properties of Gdk-2.0.Gdk.Span

    static name: string
}

export interface TimeCoord {

    // Own fields of Gdk-2.0.Gdk.TimeCoord

    time: number
    axes: number[]
}

export class TimeCoord {

    // Own properties of Gdk-2.0.Gdk.TimeCoord

    static name: string
}

export interface Trapezoid {

    // Own fields of Gdk-2.0.Gdk.Trapezoid

    y1: number
    x11: number
    x21: number
    y2: number
    x12: number
    x22: number
}

export class Trapezoid {

    // Own properties of Gdk-2.0.Gdk.Trapezoid

    static name: string
}

export interface VisualClass {
}

export abstract class VisualClass {

    // Own properties of Gdk-2.0.Gdk.VisualClass

    static name: string
}

export interface WindowAttr {

    // Own fields of Gdk-2.0.Gdk.WindowAttr

    title: string | null
    event_mask: number
    x: number
    y: number
    width: number
    height: number
    wclass: WindowClass
    visual: Visual
    colormap: Colormap
    window_type: WindowType
    cursor: Cursor
    wmclass_name: string | null
    wmclass_class: string | null
    override_redirect: boolean
    type_hint: WindowTypeHint
}

export class WindowAttr {

    // Own properties of Gdk-2.0.Gdk.WindowAttr

    static name: string
}

export interface WindowObject {
}

export class WindowObject {

    // Own properties of Gdk-2.0.Gdk.WindowObject

    static name: string
}

export interface WindowObjectClass {

    // Own fields of Gdk-2.0.Gdk.WindowObjectClass

    parent_class: DrawableClass
}

export class WindowObjectClass {

    // Own properties of Gdk-2.0.Gdk.WindowObjectClass

    static name: string
}

export interface WindowRedirect {
}

export class WindowRedirect {

    // Own properties of Gdk-2.0.Gdk.WindowRedirect

    static name: string
}

export interface Event {

    // Own fields of Gdk-2.0.Gdk.Event

    type: EventType
    any: EventAny
    expose: EventExpose
    no_expose: EventNoExpose
    visibility: EventVisibility
    motion: EventMotion
    button: EventButton
    scroll: EventScroll
    key: EventKey
    crossing: EventCrossing
    focus_change: EventFocus
    configure: EventConfigure
    property: EventProperty
    selection: EventSelection
    owner_change: EventOwnerChange
    proximity: EventProximity
    client: EventClient
    dnd: EventDND
    window_state: EventWindowState
    setting: EventSetting
    grab_broken: EventGrabBroken

    // Owm methods of Gdk-2.0.Gdk.Event

    /**
     * Copies a #GdkEvent, copying or incrementing the reference count of the
     * resources associated with it (e.g. #GdkWindow's and strings).
     * @returns a copy of @event. The returned #GdkEvent should be freed with gdk_event_free().
     */
    copy(): Event
    /**
     * Frees a #GdkEvent, freeing or decrementing any resources associated with it.
     * Note that this function should only be called with events returned from
     * functions such as gdk_event_peek(), gdk_event_get(),
     * gdk_event_get_graphics_expose() and gdk_event_copy() and gdk_event_new().
     */
    free(): void
    /**
     * Extract the axis value for a particular axis use from
     * an event structure.
     * @param axis_use the axis use to look for
     * @returns %TRUE if the specified axis was found, otherwise %FALSE
     */
    get_axis(axis_use: AxisUse): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Extract the event window relative x/y coordinates from an event.
     * @returns %TRUE if the event delivered event window coordinates
     */
    get_coords(): [ /* returnType */ boolean, /* x_win */ number, /* y_win */ number ]
    /**
     * Extract the root window relative x/y coordinates from an event.
     * @returns %TRUE if the event delivered root window coordinates
     */
    get_root_coords(): [ /* returnType */ boolean, /* x_root */ number, /* y_root */ number ]
    /**
     * If the event contains a "state" field, puts that field in `state`. Otherwise
     * stores an empty state (0). Returns %TRUE if there was a state field
     * in the event. `event` may be %NULL, in which case it's treated
     * as if the event had no state field.
     * @returns %TRUE if there was a state field in the event
     */
    get_state(): [ /* returnType */ boolean, /* state */ ModifierType ]
    /**
     * Returns the time stamp from `event,` if there is one; otherwise
     * returns #GDK_CURRENT_TIME. If `event` is %NULL, returns #GDK_CURRENT_TIME.
     * @returns time stamp field from @event
     */
    get_time(): number
    /**
     * Appends a copy of the given event onto the front of the event
     * queue for event->any.window's display, or the default event
     * queue if event->any.window is %NULL. See gdk_display_put_event().
     */
    put(): void
    /**
     * Sends an X ClientMessage event to a given window (which must be
     * on the default #GdkDisplay.)
     * This could be used for communicating between different applications,
     * though the amount of data is limited to 20 bytes.
     * @param winid the window to send the X ClientMessage event to.
     * @returns non-zero on success.
     */
    send_client_message(winid: NativeWindow): boolean
    /**
     * Sends an X ClientMessage event to all toplevel windows on the default
     * #GdkScreen.
     * 
     * Toplevel windows are determined by checking for the WM_STATE property, as
     * described in the Inter-Client Communication Conventions Manual (ICCCM).
     * If no windows are found with the WM_STATE property set, the message is sent
     * to all children of the root window.
     */
    send_clientmessage_toall(): void
    /**
     * Sets the screen for `event` to `screen`. The event must
     * have been allocated by GTK+, for instance, by
     * gdk_event_copy().
     * @param screen a #GdkScreen
     */
    set_screen(screen: Screen): void
}

export class Event {

    // Own properties of Gdk-2.0.Gdk.Event

    static name: string

    // Constructors of Gdk-2.0.Gdk.Event

    /**
     * Creates a new event of the given type. All fields are set to 0.
     * @constructor 
     * @param type a #GdkEventType
     * @returns a newly-allocated #GdkEvent. The returned #GdkEvent should be freed with gdk_event_free().
     */
    constructor(type: EventType) 
    /**
     * Creates a new event of the given type. All fields are set to 0.
     * @constructor 
     * @param type a #GdkEventType
     * @returns a newly-allocated #GdkEvent. The returned #GdkEvent should be freed with gdk_event_free().
     */
    static new(type: EventType): Event
    /**
     * Checks all open displays for a #GdkEvent to process,to be processed
     * on, fetching events from the windowing system if necessary.
     * See gdk_display_get_event().
     * @returns the next #GdkEvent to be processed, or %NULL if no events are pending. The returned #GdkEvent should be freed with gdk_event_free().
     */
    static get(): Event
    static get_graphics_expose(window: Window): Event
    /**
     * Sets the function to call to handle all events from GDK.
     * 
     * Note that GTK+ uses this to install its own event handler, so it is
     * usually not useful for GTK+ applications. (Although an application
     * can call this function then call gtk_main_do_event() to pass
     * events to GTK+.)
     * @param func the function to call to handle events from GDK.
     */
    static handler_set(func: EventFunc): void
    /**
     * If there is an event waiting in the event queue of some open
     * display, returns a copy of it. See gdk_display_peek_event().
     * @returns a copy of the first #GdkEvent on some event queue, or %NULL if no events are in any queues. The returned #GdkEvent should be freed with gdk_event_free().
     */
    static peek(): Event
    /**
     * Request more motion notifies if `event` is a motion notify hint event.
     * This function should be used instead of gdk_window_get_pointer() to
     * request further motion notifies, because it also works for extension
     * events where motion notifies are provided for devices other than the
     * core pointer. Coordinate extraction, processing and requesting more
     * motion events from a %GDK_MOTION_NOTIFY event usually works like this:
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
     * @param event a valid #GdkEvent
     */
    static request_motions(event: EventMotion): void
    static send_client_message_for_display(display: Display, event: Event, winid: NativeWindow): boolean
}

    export type NativeWindow = number
    export type Selection = Atom
    export type SelectionType = Atom
    export type Target = Atom
    export type WChar = number
    export type XEvent = void
/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END