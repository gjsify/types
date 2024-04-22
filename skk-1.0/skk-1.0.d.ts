/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './skk-1.0-ambient.d.ts';

/**
 * Skk-1.0
 */

import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Skk {
    enum KanaMode {
        HIRAGANA,
        KATAKANA,
        HANKAKU_KATAKANA,
    }
    enum PeriodStyle {
        JA_JA,
        EN_EN,
        JA_EN,
        EN_JA,
    }
    enum InputMode {
        HIRAGANA,
        KATAKANA,
        HANKAKU_KATAKANA,
        LATIN,
        WIDE_LATIN,
        LAST,
        DEFAULT,
    }
    class KeyEventFormatError extends GLib.Error {
        static $gtype: GObject.GType<KeyEventFormatError>;

        // Static fields of Skk.KeyEventFormatError

        static PARSE_FAILED: number;
        static KEYSYM_NOT_FOUND: number;

        // Constructors of Skk.KeyEventFormatError

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    class RuleParseError extends GLib.Error {
        static $gtype: GObject.GType<RuleParseError>;

        // Static fields of Skk.RuleParseError

        static FAILED: number;

        // Constructors of Skk.RuleParseError

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    const VoidSymbol: number;
    const BackSpace: number;
    const Tab: number;
    const Linefeed: number;
    const Clear: number;
    const Return: number;
    const Pause: number;
    const Scroll_Lock: number;
    const Sys_Req: number;
    const Escape: number;
    const Delete: number;
    const Multi_key: number;
    const Codeinput: number;
    const SingleCandidate: number;
    const MultipleCandidate: number;
    const PreviousCandidate: number;
    const Kanji: number;
    const Muhenkan: number;
    const Henkan_Mode: number;
    const Henkan: number;
    const Romaji: number;
    const Hiragana: number;
    const Katakana: number;
    const Hiragana_Katakana: number;
    const Zenkaku: number;
    const Hankaku: number;
    const Zenkaku_Hankaku: number;
    const Touroku: number;
    const Massyo: number;
    const Kana_Lock: number;
    const Kana_Shift: number;
    const Eisu_Shift: number;
    const Eisu_toggle: number;
    const Kanji_Bangou: number;
    const Zen_Koho: number;
    const Mae_Koho: number;
    const Home: number;
    const Left: number;
    const Up: number;
    const Right: number;
    const Down: number;
    const Prior: number;
    const Page_Up: number;
    const Next: number;
    const Page_Down: number;
    const End: number;
    const Begin: number;
    const Select: number;
    const Print: number;
    const Execute: number;
    const Insert: number;
    const Undo: number;
    const Redo: number;
    const Menu: number;
    const Find: number;
    const Cancel: number;
    const Help: number;
    const Break: number;
    const Mode_switch: number;
    const script_switch: number;
    const Num_Lock: number;
    const KP_Space: number;
    const KP_Tab: number;
    const KP_Enter: number;
    const KP_F1: number;
    const KP_F2: number;
    const KP_F3: number;
    const KP_F4: number;
    const KP_Home: number;
    const KP_Left: number;
    const KP_Up: number;
    const KP_Right: number;
    const KP_Down: number;
    const KP_Prior: number;
    const KP_Page_Up: number;
    const KP_Next: number;
    const KP_Page_Down: number;
    const KP_End: number;
    const KP_Begin: number;
    const KP_Insert: number;
    const KP_Delete: number;
    const KP_Equal: number;
    const KP_Multiply: number;
    const KP_Add: number;
    const KP_Separator: number;
    const KP_Subtract: number;
    const KP_Decimal: number;
    const KP_Divide: number;
    const KP_0: number;
    const KP_1: number;
    const KP_2: number;
    const KP_3: number;
    const KP_4: number;
    const KP_5: number;
    const KP_6: number;
    const KP_7: number;
    const KP_8: number;
    const KP_9: number;
    const F1: number;
    const F2: number;
    const F3: number;
    const F4: number;
    const F5: number;
    const F6: number;
    const F7: number;
    const F8: number;
    const F9: number;
    const F10: number;
    const F11: number;
    const L1: number;
    const F12: number;
    const L2: number;
    const F13: number;
    const L3: number;
    const F14: number;
    const L4: number;
    const F15: number;
    const L5: number;
    const F16: number;
    const L6: number;
    const F17: number;
    const L7: number;
    const F18: number;
    const L8: number;
    const F19: number;
    const L9: number;
    const F20: number;
    const L10: number;
    const F21: number;
    const R1: number;
    const F22: number;
    const R2: number;
    const F23: number;
    const R3: number;
    const F24: number;
    const R4: number;
    const F25: number;
    const R5: number;
    const F26: number;
    const R6: number;
    const F27: number;
    const R7: number;
    const F28: number;
    const R8: number;
    const F29: number;
    const R9: number;
    const F30: number;
    const R10: number;
    const F31: number;
    const R11: number;
    const F32: number;
    const R12: number;
    const F33: number;
    const R13: number;
    const F34: number;
    const R14: number;
    const F35: number;
    const R15: number;
    const Shift_L: number;
    const Shift_R: number;
    const Control_L: number;
    const Control_R: number;
    const Caps_Lock: number;
    const Shift_Lock: number;
    const Meta_L: number;
    const Meta_R: number;
    const Alt_L: number;
    const Alt_R: number;
    const Super_L: number;
    const Super_R: number;
    const Hyper_L: number;
    const Hyper_R: number;
    const ISO_Lock: number;
    const ISO_Level2_Latch: number;
    const ISO_Level3_Shift: number;
    const ISO_Level3_Latch: number;
    const ISO_Level3_Lock: number;
    const ISO_Level5_Shift: number;
    const ISO_Level5_Latch: number;
    const ISO_Level5_Lock: number;
    const ISO_Group_Shift: number;
    const ISO_Group_Latch: number;
    const ISO_Group_Lock: number;
    const ISO_Next_Group: number;
    const ISO_Next_Group_Lock: number;
    const ISO_Prev_Group: number;
    const ISO_Prev_Group_Lock: number;
    const ISO_First_Group: number;
    const ISO_First_Group_Lock: number;
    const ISO_Last_Group: number;
    const ISO_Last_Group_Lock: number;
    const ISO_Left_Tab: number;
    const ISO_Move_Line_Up: number;
    const ISO_Move_Line_Down: number;
    const ISO_Partial_Line_Up: number;
    const ISO_Partial_Line_Down: number;
    const ISO_Partial_Space_Left: number;
    const ISO_Partial_Space_Right: number;
    const ISO_Set_Margin_Left: number;
    const ISO_Set_Margin_Right: number;
    const ISO_Release_Margin_Left: number;
    const ISO_Release_Margin_Right: number;
    const ISO_Release_Both_Margins: number;
    const ISO_Fast_Cursor_Left: number;
    const ISO_Fast_Cursor_Right: number;
    const ISO_Fast_Cursor_Up: number;
    const ISO_Fast_Cursor_Down: number;
    const ISO_Continuous_Underline: number;
    const ISO_Discontinuous_Underline: number;
    const ISO_Emphasize: number;
    const ISO_Center_Object: number;
    const ISO_Enter: number;
    const dead_grave: number;
    const dead_acute: number;
    const dead_circumflex: number;
    const dead_tilde: number;
    const dead_perispomeni: number;
    const dead_macron: number;
    const dead_breve: number;
    const dead_abovedot: number;
    const dead_diaeresis: number;
    const dead_abovering: number;
    const dead_doubleacute: number;
    const dead_caron: number;
    const dead_cedilla: number;
    const dead_ogonek: number;
    const dead_iota: number;
    const dead_voiced_sound: number;
    const dead_semivoiced_sound: number;
    const dead_belowdot: number;
    const dead_hook: number;
    const dead_horn: number;
    const dead_stroke: number;
    const dead_abovecomma: number;
    const dead_psili: number;
    const dead_abovereversedcomma: number;
    const dead_dasia: number;
    const dead_doublegrave: number;
    const dead_belowring: number;
    const dead_belowmacron: number;
    const dead_belowcircumflex: number;
    const dead_belowtilde: number;
    const dead_belowbreve: number;
    const dead_belowdiaeresis: number;
    const dead_invertedbreve: number;
    const dead_belowcomma: number;
    const dead_currency: number;
    const dead_a: number;
    const dead_A: number;
    const dead_e: number;
    const dead_E: number;
    const dead_i: number;
    const dead_I: number;
    const dead_o: number;
    const dead_O: number;
    const dead_u: number;
    const dead_U: number;
    const dead_small_schwa: number;
    const dead_capital_schwa: number;
    const First_Virtual_Screen: number;
    const Prev_Virtual_Screen: number;
    const Next_Virtual_Screen: number;
    const Last_Virtual_Screen: number;
    const Terminate_Server: number;
    const AccessX_Enable: number;
    const AccessX_Feedback_Enable: number;
    const RepeatKeys_Enable: number;
    const SlowKeys_Enable: number;
    const BounceKeys_Enable: number;
    const StickyKeys_Enable: number;
    const MouseKeys_Enable: number;
    const MouseKeys_Accel_Enable: number;
    const Overlay1_Enable: number;
    const Overlay2_Enable: number;
    const AudibleBell_Enable: number;
    const Pointer_Left: number;
    const Pointer_Right: number;
    const Pointer_Up: number;
    const Pointer_Down: number;
    const Pointer_UpLeft: number;
    const Pointer_UpRight: number;
    const Pointer_DownLeft: number;
    const Pointer_DownRight: number;
    const Pointer_Button_Dflt: number;
    const Pointer_Button1: number;
    const Pointer_Button2: number;
    const Pointer_Button3: number;
    const Pointer_Button4: number;
    const Pointer_Button5: number;
    const Pointer_DblClick_Dflt: number;
    const Pointer_DblClick1: number;
    const Pointer_DblClick2: number;
    const Pointer_DblClick3: number;
    const Pointer_DblClick4: number;
    const Pointer_DblClick5: number;
    const Pointer_Drag_Dflt: number;
    const Pointer_Drag1: number;
    const Pointer_Drag2: number;
    const Pointer_Drag3: number;
    const Pointer_Drag4: number;
    const Pointer_Drag5: number;
    const Pointer_EnableKeys: number;
    const Pointer_Accelerate: number;
    const Pointer_DfltBtnNext: number;
    const Pointer_DfltBtnPrev: number;
    const __3270_Duplicate: number;
    const __3270_FieldMark: number;
    const __3270_Right2: number;
    const __3270_Left2: number;
    const __3270_BackTab: number;
    const __3270_EraseEOF: number;
    const __3270_EraseInput: number;
    const __3270_Reset: number;
    const __3270_Quit: number;
    const __3270_PA1: number;
    const __3270_PA2: number;
    const __3270_PA3: number;
    const __3270_Test: number;
    const __3270_Attn: number;
    const __3270_CursorBlink: number;
    const __3270_AltCursor: number;
    const __3270_KeyClick: number;
    const __3270_Jump: number;
    const __3270_Ident: number;
    const __3270_Rule: number;
    const __3270_Copy: number;
    const __3270_Play: number;
    const __3270_Setup: number;
    const __3270_Record: number;
    const __3270_ChangeScreen: number;
    const __3270_DeleteWord: number;
    const __3270_ExSelect: number;
    const __3270_CursorSelect: number;
    const __3270_PrintScreen: number;
    const __3270_Enter: number;
    const space: number;
    const exclam: number;
    const quotedbl: number;
    const numbersign: number;
    const dollar: number;
    const percent: number;
    const ampersand: number;
    const apostrophe: number;
    const quoteright: number;
    const parenleft: number;
    const parenright: number;
    const asterisk: number;
    const plus: number;
    const comma: number;
    const minus: number;
    const period: number;
    const slash: number;
    const __0: number;
    const __1: number;
    const __2: number;
    const __3: number;
    const __4: number;
    const __5: number;
    const __6: number;
    const __7: number;
    const __8: number;
    const __9: number;
    const colon: number;
    const semicolon: number;
    const less: number;
    const equal: number;
    const greater: number;
    const question: number;
    const at: number;
    const A: number;
    const B: number;
    const C: number;
    const D: number;
    const E: number;
    const F: number;
    const G: number;
    const H: number;
    const I: number;
    const J: number;
    const K: number;
    const L: number;
    const M: number;
    const N: number;
    const O: number;
    const P: number;
    const Q: number;
    const R: number;
    const S: number;
    const T: number;
    const U: number;
    const V: number;
    const W: number;
    const X: number;
    const Y: number;
    const Z: number;
    const bracketleft: number;
    const backslash: number;
    const bracketright: number;
    const asciicircum: number;
    const underscore: number;
    const grave: number;
    const quoteleft: number;
    const a: number;
    const b: number;
    const c: number;
    const d: number;
    const e: number;
    const f: number;
    const g: number;
    const h: number;
    const i: number;
    const j: number;
    const k: number;
    const l: number;
    const m: number;
    const n: number;
    const o: number;
    const p: number;
    const q: number;
    const r: number;
    const s: number;
    const t: number;
    const u: number;
    const v: number;
    const w: number;
    const x: number;
    const y: number;
    const z: number;
    const braceleft: number;
    const bar: number;
    const braceright: number;
    const asciitilde: number;
    const nobreakspace: number;
    const exclamdown: number;
    const cent: number;
    const sterling: number;
    const currency: number;
    const yen: number;
    const brokenbar: number;
    const section: number;
    const diaeresis: number;
    const copyright: number;
    const ordfeminine: number;
    const guillemotleft: number;
    const notsign: number;
    const hyphen: number;
    const registered: number;
    const macron: number;
    const degree: number;
    const plusminus: number;
    const twosuperior: number;
    const threesuperior: number;
    const acute: number;
    const mu: number;
    const paragraph: number;
    const periodcentered: number;
    const cedilla: number;
    const onesuperior: number;
    const masculine: number;
    const guillemotright: number;
    const onequarter: number;
    const onehalf: number;
    const threequarters: number;
    const questiondown: number;
    const Agrave: number;
    const Aacute: number;
    const Acircumflex: number;
    const Atilde: number;
    const Adiaeresis: number;
    const Aring: number;
    const AE: number;
    const Ccedilla: number;
    const Egrave: number;
    const Eacute: number;
    const Ecircumflex: number;
    const Ediaeresis: number;
    const Igrave: number;
    const Iacute: number;
    const Icircumflex: number;
    const Idiaeresis: number;
    const ETH: number;
    const Eth: number;
    const Ntilde: number;
    const Ograve: number;
    const Oacute: number;
    const Ocircumflex: number;
    const Otilde: number;
    const Odiaeresis: number;
    const multiply: number;
    const Oslash: number;
    const Ooblique: number;
    const Ugrave: number;
    const Uacute: number;
    const Ucircumflex: number;
    const Udiaeresis: number;
    const Yacute: number;
    const THORN: number;
    const Thorn: number;
    const ssharp: number;
    const agrave: number;
    const aacute: number;
    const acircumflex: number;
    const atilde: number;
    const adiaeresis: number;
    const aring: number;
    const ae: number;
    const ccedilla: number;
    const egrave: number;
    const eacute: number;
    const ecircumflex: number;
    const ediaeresis: number;
    const igrave: number;
    const iacute: number;
    const icircumflex: number;
    const idiaeresis: number;
    const eth: number;
    const ntilde: number;
    const ograve: number;
    const oacute: number;
    const ocircumflex: number;
    const otilde: number;
    const odiaeresis: number;
    const division: number;
    const oslash: number;
    const ooblique: number;
    const ugrave: number;
    const uacute: number;
    const ucircumflex: number;
    const udiaeresis: number;
    const yacute: number;
    const thorn: number;
    const ydiaeresis: number;
    const Aogonek: number;
    const breve: number;
    const Lstroke: number;
    const Lcaron: number;
    const Sacute: number;
    const Scaron: number;
    const Scedilla: number;
    const Tcaron: number;
    const Zacute: number;
    const Zcaron: number;
    const Zabovedot: number;
    const aogonek: number;
    const ogonek: number;
    const lstroke: number;
    const lcaron: number;
    const sacute: number;
    const caron: number;
    const scaron: number;
    const scedilla: number;
    const tcaron: number;
    const zacute: number;
    const doubleacute: number;
    const zcaron: number;
    const zabovedot: number;
    const Racute: number;
    const Abreve: number;
    const Lacute: number;
    const Cacute: number;
    const Ccaron: number;
    const Eogonek: number;
    const Ecaron: number;
    const Dcaron: number;
    const Dstroke: number;
    const Nacute: number;
    const Ncaron: number;
    const Odoubleacute: number;
    const Rcaron: number;
    const Uring: number;
    const Udoubleacute: number;
    const Tcedilla: number;
    const racute: number;
    const abreve: number;
    const lacute: number;
    const cacute: number;
    const ccaron: number;
    const eogonek: number;
    const ecaron: number;
    const dcaron: number;
    const dstroke: number;
    const nacute: number;
    const ncaron: number;
    const odoubleacute: number;
    const rcaron: number;
    const uring: number;
    const udoubleacute: number;
    const tcedilla: number;
    const abovedot: number;
    const Hstroke: number;
    const Hcircumflex: number;
    const Iabovedot: number;
    const Gbreve: number;
    const Jcircumflex: number;
    const hstroke: number;
    const hcircumflex: number;
    const idotless: number;
    const gbreve: number;
    const jcircumflex: number;
    const Cabovedot: number;
    const Ccircumflex: number;
    const Gabovedot: number;
    const Gcircumflex: number;
    const Ubreve: number;
    const Scircumflex: number;
    const cabovedot: number;
    const ccircumflex: number;
    const gabovedot: number;
    const gcircumflex: number;
    const ubreve: number;
    const scircumflex: number;
    const kra: number;
    const kappa: number;
    const Rcedilla: number;
    const Itilde: number;
    const Lcedilla: number;
    const Emacron: number;
    const Gcedilla: number;
    const Tslash: number;
    const rcedilla: number;
    const itilde: number;
    const lcedilla: number;
    const emacron: number;
    const gcedilla: number;
    const tslash: number;
    const ENG: number;
    const eng: number;
    const Amacron: number;
    const Iogonek: number;
    const Eabovedot: number;
    const Imacron: number;
    const Ncedilla: number;
    const Omacron: number;
    const Kcedilla: number;
    const Uogonek: number;
    const Utilde: number;
    const Umacron: number;
    const amacron: number;
    const iogonek: number;
    const eabovedot: number;
    const imacron: number;
    const ncedilla: number;
    const omacron: number;
    const kcedilla: number;
    const uogonek: number;
    const utilde: number;
    const umacron: number;
    const Wcircumflex: number;
    const wcircumflex: number;
    const Ycircumflex: number;
    const ycircumflex: number;
    const Babovedot: number;
    const babovedot: number;
    const Dabovedot: number;
    const dabovedot: number;
    const Fabovedot: number;
    const fabovedot: number;
    const Mabovedot: number;
    const mabovedot: number;
    const Pabovedot: number;
    const pabovedot: number;
    const Sabovedot: number;
    const sabovedot: number;
    const Tabovedot: number;
    const tabovedot: number;
    const Wgrave: number;
    const wgrave: number;
    const Wacute: number;
    const wacute: number;
    const Wdiaeresis: number;
    const wdiaeresis: number;
    const Ygrave: number;
    const ygrave: number;
    const OE: number;
    const oe: number;
    const Ydiaeresis: number;
    const overline: number;
    const kana_fullstop: number;
    const kana_openingbracket: number;
    const kana_closingbracket: number;
    const kana_comma: number;
    const kana_conjunctive: number;
    const kana_middledot: number;
    const kana_WO: number;
    const kana_a: number;
    const kana_i: number;
    const kana_u: number;
    const kana_e: number;
    const kana_o: number;
    const kana_ya: number;
    const kana_yu: number;
    const kana_yo: number;
    const kana_tsu: number;
    const kana_tu: number;
    const prolongedsound: number;
    const kana_A: number;
    const kana_I: number;
    const kana_U: number;
    const kana_E: number;
    const kana_O: number;
    const kana_KA: number;
    const kana_KI: number;
    const kana_KU: number;
    const kana_KE: number;
    const kana_KO: number;
    const kana_SA: number;
    const kana_SHI: number;
    const kana_SU: number;
    const kana_SE: number;
    const kana_SO: number;
    const kana_TA: number;
    const kana_CHI: number;
    const kana_TI: number;
    const kana_TSU: number;
    const kana_TU: number;
    const kana_TE: number;
    const kana_TO: number;
    const kana_NA: number;
    const kana_NI: number;
    const kana_NU: number;
    const kana_NE: number;
    const kana_NO: number;
    const kana_HA: number;
    const kana_HI: number;
    const kana_FU: number;
    const kana_HU: number;
    const kana_HE: number;
    const kana_HO: number;
    const kana_MA: number;
    const kana_MI: number;
    const kana_MU: number;
    const kana_ME: number;
    const kana_MO: number;
    const kana_YA: number;
    const kana_YU: number;
    const kana_YO: number;
    const kana_RA: number;
    const kana_RI: number;
    const kana_RU: number;
    const kana_RE: number;
    const kana_RO: number;
    const kana_WA: number;
    const kana_N: number;
    const voicedsound: number;
    const semivoicedsound: number;
    const kana_switch: number;
    const Farsi_0: number;
    const Farsi_1: number;
    const Farsi_2: number;
    const Farsi_3: number;
    const Farsi_4: number;
    const Farsi_5: number;
    const Farsi_6: number;
    const Farsi_7: number;
    const Farsi_8: number;
    const Farsi_9: number;
    const Arabic_percent: number;
    const Arabic_superscript_alef: number;
    const Arabic_tteh: number;
    const Arabic_peh: number;
    const Arabic_tcheh: number;
    const Arabic_ddal: number;
    const Arabic_rreh: number;
    const Arabic_comma: number;
    const Arabic_fullstop: number;
    const Arabic_0: number;
    const Arabic_1: number;
    const Arabic_2: number;
    const Arabic_3: number;
    const Arabic_4: number;
    const Arabic_5: number;
    const Arabic_6: number;
    const Arabic_7: number;
    const Arabic_8: number;
    const Arabic_9: number;
    const Arabic_semicolon: number;
    const Arabic_question_mark: number;
    const Arabic_hamza: number;
    const Arabic_maddaonalef: number;
    const Arabic_hamzaonalef: number;
    const Arabic_hamzaonwaw: number;
    const Arabic_hamzaunderalef: number;
    const Arabic_hamzaonyeh: number;
    const Arabic_alef: number;
    const Arabic_beh: number;
    const Arabic_tehmarbuta: number;
    const Arabic_teh: number;
    const Arabic_theh: number;
    const Arabic_jeem: number;
    const Arabic_hah: number;
    const Arabic_khah: number;
    const Arabic_dal: number;
    const Arabic_thal: number;
    const Arabic_ra: number;
    const Arabic_zain: number;
    const Arabic_seen: number;
    const Arabic_sheen: number;
    const Arabic_sad: number;
    const Arabic_dad: number;
    const Arabic_tah: number;
    const Arabic_zah: number;
    const Arabic_ain: number;
    const Arabic_ghain: number;
    const Arabic_tatweel: number;
    const Arabic_feh: number;
    const Arabic_qaf: number;
    const Arabic_kaf: number;
    const Arabic_lam: number;
    const Arabic_meem: number;
    const Arabic_noon: number;
    const Arabic_ha: number;
    const Arabic_heh: number;
    const Arabic_waw: number;
    const Arabic_alefmaksura: number;
    const Arabic_yeh: number;
    const Arabic_fathatan: number;
    const Arabic_dammatan: number;
    const Arabic_kasratan: number;
    const Arabic_fatha: number;
    const Arabic_damma: number;
    const Arabic_kasra: number;
    const Arabic_shadda: number;
    const Arabic_sukun: number;
    const Arabic_madda_above: number;
    const Arabic_hamza_above: number;
    const Arabic_hamza_below: number;
    const Arabic_jeh: number;
    const Arabic_veh: number;
    const Arabic_keheh: number;
    const Arabic_gaf: number;
    const Arabic_noon_ghunna: number;
    const Arabic_heh_doachashmee: number;
    const Farsi_yeh: number;
    const Arabic_farsi_yeh: number;
    const Arabic_yeh_baree: number;
    const Arabic_heh_goal: number;
    const Arabic_switch: number;
    const Cyrillic_GHE_bar: number;
    const Cyrillic_ghe_bar: number;
    const Cyrillic_ZHE_descender: number;
    const Cyrillic_zhe_descender: number;
    const Cyrillic_KA_descender: number;
    const Cyrillic_ka_descender: number;
    const Cyrillic_KA_vertstroke: number;
    const Cyrillic_ka_vertstroke: number;
    const Cyrillic_EN_descender: number;
    const Cyrillic_en_descender: number;
    const Cyrillic_U_straight: number;
    const Cyrillic_u_straight: number;
    const Cyrillic_U_straight_bar: number;
    const Cyrillic_u_straight_bar: number;
    const Cyrillic_HA_descender: number;
    const Cyrillic_ha_descender: number;
    const Cyrillic_CHE_descender: number;
    const Cyrillic_che_descender: number;
    const Cyrillic_CHE_vertstroke: number;
    const Cyrillic_che_vertstroke: number;
    const Cyrillic_SHHA: number;
    const Cyrillic_shha: number;
    const Cyrillic_SCHWA: number;
    const Cyrillic_schwa: number;
    const Cyrillic_I_macron: number;
    const Cyrillic_i_macron: number;
    const Cyrillic_O_bar: number;
    const Cyrillic_o_bar: number;
    const Cyrillic_U_macron: number;
    const Cyrillic_u_macron: number;
    const Serbian_dje: number;
    const Macedonia_gje: number;
    const Cyrillic_io: number;
    const Ukrainian_ie: number;
    const Ukranian_je: number;
    const Macedonia_dse: number;
    const Ukrainian_i: number;
    const Ukranian_i: number;
    const Ukrainian_yi: number;
    const Ukranian_yi: number;
    const Cyrillic_je: number;
    const Serbian_je: number;
    const Cyrillic_lje: number;
    const Serbian_lje: number;
    const Cyrillic_nje: number;
    const Serbian_nje: number;
    const Serbian_tshe: number;
    const Macedonia_kje: number;
    const Ukrainian_ghe_with_upturn: number;
    const Byelorussian_shortu: number;
    const Cyrillic_dzhe: number;
    const Serbian_dze: number;
    const numerosign: number;
    const Serbian_DJE: number;
    const Macedonia_GJE: number;
    const Cyrillic_IO: number;
    const Ukrainian_IE: number;
    const Ukranian_JE: number;
    const Macedonia_DSE: number;
    const Ukrainian_I: number;
    const Ukranian_I: number;
    const Ukrainian_YI: number;
    const Ukranian_YI: number;
    const Cyrillic_JE: number;
    const Serbian_JE: number;
    const Cyrillic_LJE: number;
    const Serbian_LJE: number;
    const Cyrillic_NJE: number;
    const Serbian_NJE: number;
    const Serbian_TSHE: number;
    const Macedonia_KJE: number;
    const Ukrainian_GHE_WITH_UPTURN: number;
    const Byelorussian_SHORTU: number;
    const Cyrillic_DZHE: number;
    const Serbian_DZE: number;
    const Cyrillic_yu: number;
    const Cyrillic_a: number;
    const Cyrillic_be: number;
    const Cyrillic_tse: number;
    const Cyrillic_de: number;
    const Cyrillic_ie: number;
    const Cyrillic_ef: number;
    const Cyrillic_ghe: number;
    const Cyrillic_ha: number;
    const Cyrillic_i: number;
    const Cyrillic_shorti: number;
    const Cyrillic_ka: number;
    const Cyrillic_el: number;
    const Cyrillic_em: number;
    const Cyrillic_en: number;
    const Cyrillic_o: number;
    const Cyrillic_pe: number;
    const Cyrillic_ya: number;
    const Cyrillic_er: number;
    const Cyrillic_es: number;
    const Cyrillic_te: number;
    const Cyrillic_u: number;
    const Cyrillic_zhe: number;
    const Cyrillic_ve: number;
    const Cyrillic_softsign: number;
    const Cyrillic_yeru: number;
    const Cyrillic_ze: number;
    const Cyrillic_sha: number;
    const Cyrillic_e: number;
    const Cyrillic_shcha: number;
    const Cyrillic_che: number;
    const Cyrillic_hardsign: number;
    const Cyrillic_YU: number;
    const Cyrillic_A: number;
    const Cyrillic_BE: number;
    const Cyrillic_TSE: number;
    const Cyrillic_DE: number;
    const Cyrillic_IE: number;
    const Cyrillic_EF: number;
    const Cyrillic_GHE: number;
    const Cyrillic_HA: number;
    const Cyrillic_I: number;
    const Cyrillic_SHORTI: number;
    const Cyrillic_KA: number;
    const Cyrillic_EL: number;
    const Cyrillic_EM: number;
    const Cyrillic_EN: number;
    const Cyrillic_O: number;
    const Cyrillic_PE: number;
    const Cyrillic_YA: number;
    const Cyrillic_ER: number;
    const Cyrillic_ES: number;
    const Cyrillic_TE: number;
    const Cyrillic_U: number;
    const Cyrillic_ZHE: number;
    const Cyrillic_VE: number;
    const Cyrillic_SOFTSIGN: number;
    const Cyrillic_YERU: number;
    const Cyrillic_ZE: number;
    const Cyrillic_SHA: number;
    const Cyrillic_E: number;
    const Cyrillic_SHCHA: number;
    const Cyrillic_CHE: number;
    const Cyrillic_HARDSIGN: number;
    const Greek_ALPHAaccent: number;
    const Greek_EPSILONaccent: number;
    const Greek_ETAaccent: number;
    const Greek_IOTAaccent: number;
    const Greek_IOTAdieresis: number;
    const Greek_IOTAdiaeresis: number;
    const Greek_OMICRONaccent: number;
    const Greek_UPSILONaccent: number;
    const Greek_UPSILONdieresis: number;
    const Greek_OMEGAaccent: number;
    const Greek_accentdieresis: number;
    const Greek_horizbar: number;
    const Greek_alphaaccent: number;
    const Greek_epsilonaccent: number;
    const Greek_etaaccent: number;
    const Greek_iotaaccent: number;
    const Greek_iotadieresis: number;
    const Greek_iotaaccentdieresis: number;
    const Greek_omicronaccent: number;
    const Greek_upsilonaccent: number;
    const Greek_upsilondieresis: number;
    const Greek_upsilonaccentdieresis: number;
    const Greek_omegaaccent: number;
    const Greek_ALPHA: number;
    const Greek_BETA: number;
    const Greek_GAMMA: number;
    const Greek_DELTA: number;
    const Greek_EPSILON: number;
    const Greek_ZETA: number;
    const Greek_ETA: number;
    const Greek_THETA: number;
    const Greek_IOTA: number;
    const Greek_KAPPA: number;
    const Greek_LAMDA: number;
    const Greek_LAMBDA: number;
    const Greek_MU: number;
    const Greek_NU: number;
    const Greek_XI: number;
    const Greek_OMICRON: number;
    const Greek_PI: number;
    const Greek_RHO: number;
    const Greek_SIGMA: number;
    const Greek_TAU: number;
    const Greek_UPSILON: number;
    const Greek_PHI: number;
    const Greek_CHI: number;
    const Greek_PSI: number;
    const Greek_OMEGA: number;
    const Greek_alpha: number;
    const Greek_beta: number;
    const Greek_gamma: number;
    const Greek_delta: number;
    const Greek_epsilon: number;
    const Greek_zeta: number;
    const Greek_eta: number;
    const Greek_theta: number;
    const Greek_iota: number;
    const Greek_kappa: number;
    const Greek_lamda: number;
    const Greek_lambda: number;
    const Greek_mu: number;
    const Greek_nu: number;
    const Greek_xi: number;
    const Greek_omicron: number;
    const Greek_pi: number;
    const Greek_rho: number;
    const Greek_sigma: number;
    const Greek_finalsmallsigma: number;
    const Greek_tau: number;
    const Greek_upsilon: number;
    const Greek_phi: number;
    const Greek_chi: number;
    const Greek_psi: number;
    const Greek_omega: number;
    const Greek_switch: number;
    const leftradical: number;
    const topleftradical: number;
    const horizconnector: number;
    const topintegral: number;
    const botintegral: number;
    const vertconnector: number;
    const topleftsqbracket: number;
    const botleftsqbracket: number;
    const toprightsqbracket: number;
    const botrightsqbracket: number;
    const topleftparens: number;
    const botleftparens: number;
    const toprightparens: number;
    const botrightparens: number;
    const leftmiddlecurlybrace: number;
    const rightmiddlecurlybrace: number;
    const topleftsummation: number;
    const botleftsummation: number;
    const topvertsummationconnector: number;
    const botvertsummationconnector: number;
    const toprightsummation: number;
    const botrightsummation: number;
    const rightmiddlesummation: number;
    const lessthanequal: number;
    const notequal: number;
    const greaterthanequal: number;
    const integral: number;
    const therefore: number;
    const variation: number;
    const infinity: number;
    const nabla: number;
    const approximate: number;
    const similarequal: number;
    const ifonlyif: number;
    const implies: number;
    const identical: number;
    const radical: number;
    const includedin: number;
    const includes: number;
    const intersection: number;
    const union: number;
    const logicaland: number;
    const logicalor: number;
    const partialderivative: number;
    const __function: number;
    const leftarrow: number;
    const uparrow: number;
    const rightarrow: number;
    const downarrow: number;
    const blank: number;
    const soliddiamond: number;
    const checkerboard: number;
    const ht: number;
    const ff: number;
    const cr: number;
    const lf: number;
    const nl: number;
    const vt: number;
    const lowrightcorner: number;
    const uprightcorner: number;
    const upleftcorner: number;
    const lowleftcorner: number;
    const crossinglines: number;
    const horizlinescan1: number;
    const horizlinescan3: number;
    const horizlinescan5: number;
    const horizlinescan7: number;
    const horizlinescan9: number;
    const leftt: number;
    const rightt: number;
    const bott: number;
    const topt: number;
    const vertbar: number;
    const emspace: number;
    const enspace: number;
    const em3space: number;
    const em4space: number;
    const digitspace: number;
    const punctspace: number;
    const thinspace: number;
    const hairspace: number;
    const emdash: number;
    const endash: number;
    const signifblank: number;
    const ellipsis: number;
    const doubbaselinedot: number;
    const onethird: number;
    const twothirds: number;
    const onefifth: number;
    const twofifths: number;
    const threefifths: number;
    const fourfifths: number;
    const onesixth: number;
    const fivesixths: number;
    const careof: number;
    const figdash: number;
    const leftanglebracket: number;
    const decimalpoint: number;
    const rightanglebracket: number;
    const marker: number;
    const oneeighth: number;
    const threeeighths: number;
    const fiveeighths: number;
    const seveneighths: number;
    const trademark: number;
    const signaturemark: number;
    const trademarkincircle: number;
    const leftopentriangle: number;
    const rightopentriangle: number;
    const emopencircle: number;
    const emopenrectangle: number;
    const leftsinglequotemark: number;
    const rightsinglequotemark: number;
    const leftdoublequotemark: number;
    const rightdoublequotemark: number;
    const prescription: number;
    const minutes: number;
    const seconds: number;
    const latincross: number;
    const hexagram: number;
    const filledrectbullet: number;
    const filledlefttribullet: number;
    const filledrighttribullet: number;
    const emfilledcircle: number;
    const emfilledrect: number;
    const enopencircbullet: number;
    const enopensquarebullet: number;
    const openrectbullet: number;
    const opentribulletup: number;
    const opentribulletdown: number;
    const openstar: number;
    const enfilledcircbullet: number;
    const enfilledsqbullet: number;
    const filledtribulletup: number;
    const filledtribulletdown: number;
    const leftpointer: number;
    const rightpointer: number;
    const club: number;
    const diamond: number;
    const heart: number;
    const maltesecross: number;
    const dagger: number;
    const doubledagger: number;
    const checkmark: number;
    const ballotcross: number;
    const musicalsharp: number;
    const musicalflat: number;
    const malesymbol: number;
    const femalesymbol: number;
    const telephone: number;
    const telephonerecorder: number;
    const phonographcopyright: number;
    const caret: number;
    const singlelowquotemark: number;
    const doublelowquotemark: number;
    const cursor: number;
    const leftcaret: number;
    const rightcaret: number;
    const downcaret: number;
    const upcaret: number;
    const overbar: number;
    const downtack: number;
    const upshoe: number;
    const downstile: number;
    const underbar: number;
    const jot: number;
    const quad: number;
    const uptack: number;
    const circle: number;
    const upstile: number;
    const downshoe: number;
    const rightshoe: number;
    const leftshoe: number;
    const lefttack: number;
    const righttack: number;
    const hebrew_doublelowline: number;
    const hebrew_aleph: number;
    const hebrew_bet: number;
    const hebrew_beth: number;
    const hebrew_gimel: number;
    const hebrew_gimmel: number;
    const hebrew_dalet: number;
    const hebrew_daleth: number;
    const hebrew_he: number;
    const hebrew_waw: number;
    const hebrew_zain: number;
    const hebrew_zayin: number;
    const hebrew_chet: number;
    const hebrew_het: number;
    const hebrew_tet: number;
    const hebrew_teth: number;
    const hebrew_yod: number;
    const hebrew_finalkaph: number;
    const hebrew_kaph: number;
    const hebrew_lamed: number;
    const hebrew_finalmem: number;
    const hebrew_mem: number;
    const hebrew_finalnun: number;
    const hebrew_nun: number;
    const hebrew_samech: number;
    const hebrew_samekh: number;
    const hebrew_ayin: number;
    const hebrew_finalpe: number;
    const hebrew_pe: number;
    const hebrew_finalzade: number;
    const hebrew_finalzadi: number;
    const hebrew_zade: number;
    const hebrew_zadi: number;
    const hebrew_qoph: number;
    const hebrew_kuf: number;
    const hebrew_resh: number;
    const hebrew_shin: number;
    const hebrew_taw: number;
    const hebrew_taf: number;
    const Hebrew_switch: number;
    const Thai_kokai: number;
    const Thai_khokhai: number;
    const Thai_khokhuat: number;
    const Thai_khokhwai: number;
    const Thai_khokhon: number;
    const Thai_khorakhang: number;
    const Thai_ngongu: number;
    const Thai_chochan: number;
    const Thai_choching: number;
    const Thai_chochang: number;
    const Thai_soso: number;
    const Thai_chochoe: number;
    const Thai_yoying: number;
    const Thai_dochada: number;
    const Thai_topatak: number;
    const Thai_thothan: number;
    const Thai_thonangmontho: number;
    const Thai_thophuthao: number;
    const Thai_nonen: number;
    const Thai_dodek: number;
    const Thai_totao: number;
    const Thai_thothung: number;
    const Thai_thothahan: number;
    const Thai_thothong: number;
    const Thai_nonu: number;
    const Thai_bobaimai: number;
    const Thai_popla: number;
    const Thai_phophung: number;
    const Thai_fofa: number;
    const Thai_phophan: number;
    const Thai_fofan: number;
    const Thai_phosamphao: number;
    const Thai_moma: number;
    const Thai_yoyak: number;
    const Thai_rorua: number;
    const Thai_ru: number;
    const Thai_loling: number;
    const Thai_lu: number;
    const Thai_wowaen: number;
    const Thai_sosala: number;
    const Thai_sorusi: number;
    const Thai_sosua: number;
    const Thai_hohip: number;
    const Thai_lochula: number;
    const Thai_oang: number;
    const Thai_honokhuk: number;
    const Thai_paiyannoi: number;
    const Thai_saraa: number;
    const Thai_maihanakat: number;
    const Thai_saraaa: number;
    const Thai_saraam: number;
    const Thai_sarai: number;
    const Thai_saraii: number;
    const Thai_saraue: number;
    const Thai_sarauee: number;
    const Thai_sarau: number;
    const Thai_sarauu: number;
    const Thai_phinthu: number;
    const Thai_maihanakat_maitho: number;
    const Thai_baht: number;
    const Thai_sarae: number;
    const Thai_saraae: number;
    const Thai_sarao: number;
    const Thai_saraaimaimuan: number;
    const Thai_saraaimaimalai: number;
    const Thai_lakkhangyao: number;
    const Thai_maiyamok: number;
    const Thai_maitaikhu: number;
    const Thai_maiek: number;
    const Thai_maitho: number;
    const Thai_maitri: number;
    const Thai_maichattawa: number;
    const Thai_thanthakhat: number;
    const Thai_nikhahit: number;
    const Thai_leksun: number;
    const Thai_leknung: number;
    const Thai_leksong: number;
    const Thai_leksam: number;
    const Thai_leksi: number;
    const Thai_lekha: number;
    const Thai_lekhok: number;
    const Thai_lekchet: number;
    const Thai_lekpaet: number;
    const Thai_lekkao: number;
    const Hangul: number;
    const Hangul_Start: number;
    const Hangul_End: number;
    const Hangul_Hanja: number;
    const Hangul_Jamo: number;
    const Hangul_Romaja: number;
    const Hangul_Codeinput: number;
    const Hangul_Jeonja: number;
    const Hangul_Banja: number;
    const Hangul_PreHanja: number;
    const Hangul_PostHanja: number;
    const Hangul_SingleCandidate: number;
    const Hangul_MultipleCandidate: number;
    const Hangul_PreviousCandidate: number;
    const Hangul_Special: number;
    const Hangul_switch: number;
    const Hangul_Kiyeog: number;
    const Hangul_SsangKiyeog: number;
    const Hangul_KiyeogSios: number;
    const Hangul_Nieun: number;
    const Hangul_NieunJieuj: number;
    const Hangul_NieunHieuh: number;
    const Hangul_Dikeud: number;
    const Hangul_SsangDikeud: number;
    const Hangul_Rieul: number;
    const Hangul_RieulKiyeog: number;
    const Hangul_RieulMieum: number;
    const Hangul_RieulPieub: number;
    const Hangul_RieulSios: number;
    const Hangul_RieulTieut: number;
    const Hangul_RieulPhieuf: number;
    const Hangul_RieulHieuh: number;
    const Hangul_Mieum: number;
    const Hangul_Pieub: number;
    const Hangul_SsangPieub: number;
    const Hangul_PieubSios: number;
    const Hangul_Sios: number;
    const Hangul_SsangSios: number;
    const Hangul_Ieung: number;
    const Hangul_Jieuj: number;
    const Hangul_SsangJieuj: number;
    const Hangul_Cieuc: number;
    const Hangul_Khieuq: number;
    const Hangul_Tieut: number;
    const Hangul_Phieuf: number;
    const Hangul_Hieuh: number;
    const Hangul_A: number;
    const Hangul_AE: number;
    const Hangul_YA: number;
    const Hangul_YAE: number;
    const Hangul_EO: number;
    const Hangul_E: number;
    const Hangul_YEO: number;
    const Hangul_YE: number;
    const Hangul_O: number;
    const Hangul_WA: number;
    const Hangul_WAE: number;
    const Hangul_OE: number;
    const Hangul_YO: number;
    const Hangul_U: number;
    const Hangul_WEO: number;
    const Hangul_WE: number;
    const Hangul_WI: number;
    const Hangul_YU: number;
    const Hangul_EU: number;
    const Hangul_YI: number;
    const Hangul_I: number;
    const Hangul_J_Kiyeog: number;
    const Hangul_J_SsangKiyeog: number;
    const Hangul_J_KiyeogSios: number;
    const Hangul_J_Nieun: number;
    const Hangul_J_NieunJieuj: number;
    const Hangul_J_NieunHieuh: number;
    const Hangul_J_Dikeud: number;
    const Hangul_J_Rieul: number;
    const Hangul_J_RieulKiyeog: number;
    const Hangul_J_RieulMieum: number;
    const Hangul_J_RieulPieub: number;
    const Hangul_J_RieulSios: number;
    const Hangul_J_RieulTieut: number;
    const Hangul_J_RieulPhieuf: number;
    const Hangul_J_RieulHieuh: number;
    const Hangul_J_Mieum: number;
    const Hangul_J_Pieub: number;
    const Hangul_J_PieubSios: number;
    const Hangul_J_Sios: number;
    const Hangul_J_SsangSios: number;
    const Hangul_J_Ieung: number;
    const Hangul_J_Jieuj: number;
    const Hangul_J_Cieuc: number;
    const Hangul_J_Khieuq: number;
    const Hangul_J_Tieut: number;
    const Hangul_J_Phieuf: number;
    const Hangul_J_Hieuh: number;
    const Hangul_RieulYeorinHieuh: number;
    const Hangul_SunkyeongeumMieum: number;
    const Hangul_SunkyeongeumPieub: number;
    const Hangul_PanSios: number;
    const Hangul_KkogjiDalrinIeung: number;
    const Hangul_SunkyeongeumPhieuf: number;
    const Hangul_YeorinHieuh: number;
    const Hangul_AraeA: number;
    const Hangul_AraeAE: number;
    const Hangul_J_PanSios: number;
    const Hangul_J_KkogjiDalrinIeung: number;
    const Hangul_J_YeorinHieuh: number;
    const Korean_Won: number;
    const Armenian_ligature_ew: number;
    const Armenian_full_stop: number;
    const Armenian_verjaket: number;
    const Armenian_separation_mark: number;
    const Armenian_but: number;
    const Armenian_hyphen: number;
    const Armenian_yentamna: number;
    const Armenian_exclam: number;
    const Armenian_amanak: number;
    const Armenian_accent: number;
    const Armenian_shesht: number;
    const Armenian_question: number;
    const Armenian_paruyk: number;
    const Armenian_AYB: number;
    const Armenian_ayb: number;
    const Armenian_BEN: number;
    const Armenian_ben: number;
    const Armenian_GIM: number;
    const Armenian_gim: number;
    const Armenian_DA: number;
    const Armenian_da: number;
    const Armenian_YECH: number;
    const Armenian_yech: number;
    const Armenian_ZA: number;
    const Armenian_za: number;
    const Armenian_E: number;
    const Armenian_e: number;
    const Armenian_AT: number;
    const Armenian_at: number;
    const Armenian_TO: number;
    const Armenian_to: number;
    const Armenian_ZHE: number;
    const Armenian_zhe: number;
    const Armenian_INI: number;
    const Armenian_ini: number;
    const Armenian_LYUN: number;
    const Armenian_lyun: number;
    const Armenian_KHE: number;
    const Armenian_khe: number;
    const Armenian_TSA: number;
    const Armenian_tsa: number;
    const Armenian_KEN: number;
    const Armenian_ken: number;
    const Armenian_HO: number;
    const Armenian_ho: number;
    const Armenian_DZA: number;
    const Armenian_dza: number;
    const Armenian_GHAT: number;
    const Armenian_ghat: number;
    const Armenian_TCHE: number;
    const Armenian_tche: number;
    const Armenian_MEN: number;
    const Armenian_men: number;
    const Armenian_HI: number;
    const Armenian_hi: number;
    const Armenian_NU: number;
    const Armenian_nu: number;
    const Armenian_SHA: number;
    const Armenian_sha: number;
    const Armenian_VO: number;
    const Armenian_vo: number;
    const Armenian_CHA: number;
    const Armenian_cha: number;
    const Armenian_PE: number;
    const Armenian_pe: number;
    const Armenian_JE: number;
    const Armenian_je: number;
    const Armenian_RA: number;
    const Armenian_ra: number;
    const Armenian_SE: number;
    const Armenian_se: number;
    const Armenian_VEV: number;
    const Armenian_vev: number;
    const Armenian_TYUN: number;
    const Armenian_tyun: number;
    const Armenian_RE: number;
    const Armenian_re: number;
    const Armenian_TSO: number;
    const Armenian_tso: number;
    const Armenian_VYUN: number;
    const Armenian_vyun: number;
    const Armenian_PYUR: number;
    const Armenian_pyur: number;
    const Armenian_KE: number;
    const Armenian_ke: number;
    const Armenian_O: number;
    const Armenian_o: number;
    const Armenian_FE: number;
    const Armenian_fe: number;
    const Armenian_apostrophe: number;
    const Georgian_an: number;
    const Georgian_ban: number;
    const Georgian_gan: number;
    const Georgian_don: number;
    const Georgian_en: number;
    const Georgian_vin: number;
    const Georgian_zen: number;
    const Georgian_tan: number;
    const Georgian_in: number;
    const Georgian_kan: number;
    const Georgian_las: number;
    const Georgian_man: number;
    const Georgian_nar: number;
    const Georgian_on: number;
    const Georgian_par: number;
    const Georgian_zhar: number;
    const Georgian_rae: number;
    const Georgian_san: number;
    const Georgian_tar: number;
    const Georgian_un: number;
    const Georgian_phar: number;
    const Georgian_khar: number;
    const Georgian_ghan: number;
    const Georgian_qar: number;
    const Georgian_shin: number;
    const Georgian_chin: number;
    const Georgian_can: number;
    const Georgian_jil: number;
    const Georgian_cil: number;
    const Georgian_char: number;
    const Georgian_xan: number;
    const Georgian_jhan: number;
    const Georgian_hae: number;
    const Georgian_he: number;
    const Georgian_hie: number;
    const Georgian_we: number;
    const Georgian_har: number;
    const Georgian_hoe: number;
    const Georgian_fi: number;
    const Xabovedot: number;
    const Ibreve: number;
    const Zstroke: number;
    const Gcaron: number;
    const Ocaron: number;
    const Obarred: number;
    const xabovedot: number;
    const ibreve: number;
    const zstroke: number;
    const gcaron: number;
    const ocaron: number;
    const obarred: number;
    const SCHWA: number;
    const schwa: number;
    const Lbelowdot: number;
    const lbelowdot: number;
    const Abelowdot: number;
    const abelowdot: number;
    const Ahook: number;
    const ahook: number;
    const Acircumflexacute: number;
    const acircumflexacute: number;
    const Acircumflexgrave: number;
    const acircumflexgrave: number;
    const Acircumflexhook: number;
    const acircumflexhook: number;
    const Acircumflextilde: number;
    const acircumflextilde: number;
    const Acircumflexbelowdot: number;
    const acircumflexbelowdot: number;
    const Abreveacute: number;
    const abreveacute: number;
    const Abrevegrave: number;
    const abrevegrave: number;
    const Abrevehook: number;
    const abrevehook: number;
    const Abrevetilde: number;
    const abrevetilde: number;
    const Abrevebelowdot: number;
    const abrevebelowdot: number;
    const Ebelowdot: number;
    const ebelowdot: number;
    const Ehook: number;
    const ehook: number;
    const Etilde: number;
    const etilde: number;
    const Ecircumflexacute: number;
    const ecircumflexacute: number;
    const Ecircumflexgrave: number;
    const ecircumflexgrave: number;
    const Ecircumflexhook: number;
    const ecircumflexhook: number;
    const Ecircumflextilde: number;
    const ecircumflextilde: number;
    const Ecircumflexbelowdot: number;
    const ecircumflexbelowdot: number;
    const Ihook: number;
    const ihook: number;
    const Ibelowdot: number;
    const ibelowdot: number;
    const Obelowdot: number;
    const obelowdot: number;
    const Ohook: number;
    const ohook: number;
    const Ocircumflexacute: number;
    const ocircumflexacute: number;
    const Ocircumflexgrave: number;
    const ocircumflexgrave: number;
    const Ocircumflexhook: number;
    const ocircumflexhook: number;
    const Ocircumflextilde: number;
    const ocircumflextilde: number;
    const Ocircumflexbelowdot: number;
    const ocircumflexbelowdot: number;
    const Ohornacute: number;
    const ohornacute: number;
    const Ohorngrave: number;
    const ohorngrave: number;
    const Ohornhook: number;
    const ohornhook: number;
    const Ohorntilde: number;
    const ohorntilde: number;
    const Ohornbelowdot: number;
    const ohornbelowdot: number;
    const Ubelowdot: number;
    const ubelowdot: number;
    const Uhook: number;
    const uhook: number;
    const Uhornacute: number;
    const uhornacute: number;
    const Uhorngrave: number;
    const uhorngrave: number;
    const Uhornhook: number;
    const uhornhook: number;
    const Uhorntilde: number;
    const uhorntilde: number;
    const Uhornbelowdot: number;
    const uhornbelowdot: number;
    const Ybelowdot: number;
    const ybelowdot: number;
    const Yhook: number;
    const yhook: number;
    const Ytilde: number;
    const ytilde: number;
    const Ohorn: number;
    const ohorn: number;
    const Uhorn: number;
    const uhorn: number;
    const EcuSign: number;
    const ColonSign: number;
    const CruzeiroSign: number;
    const FFrancSign: number;
    const LiraSign: number;
    const MillSign: number;
    const NairaSign: number;
    const PesetaSign: number;
    const RupeeSign: number;
    const WonSign: number;
    const NewSheqelSign: number;
    const DongSign: number;
    const EuroSign: number;
    const zerosuperior: number;
    const foursuperior: number;
    const fivesuperior: number;
    const sixsuperior: number;
    const sevensuperior: number;
    const eightsuperior: number;
    const ninesuperior: number;
    const zerosubscript: number;
    const onesubscript: number;
    const twosubscript: number;
    const threesubscript: number;
    const foursubscript: number;
    const fivesubscript: number;
    const sixsubscript: number;
    const sevensubscript: number;
    const eightsubscript: number;
    const ninesubscript: number;
    const partdifferential: number;
    const emptyset: number;
    const elementof: number;
    const notelementof: number;
    const containsas: number;
    const squareroot: number;
    const cuberoot: number;
    const fourthroot: number;
    const dintegral: number;
    const tintegral: number;
    const because: number;
    const approxeq: number;
    const notapproxeq: number;
    const notidentical: number;
    const stricteq: number;
    const braille_dot_1: number;
    const braille_dot_2: number;
    const braille_dot_3: number;
    const braille_dot_4: number;
    const braille_dot_5: number;
    const braille_dot_6: number;
    const braille_dot_7: number;
    const braille_dot_8: number;
    const braille_dot_9: number;
    const braille_dot_10: number;
    const braille_blank: number;
    const braille_dots_1: number;
    const braille_dots_2: number;
    const braille_dots_12: number;
    const braille_dots_3: number;
    const braille_dots_13: number;
    const braille_dots_23: number;
    const braille_dots_123: number;
    const braille_dots_4: number;
    const braille_dots_14: number;
    const braille_dots_24: number;
    const braille_dots_124: number;
    const braille_dots_34: number;
    const braille_dots_134: number;
    const braille_dots_234: number;
    const braille_dots_1234: number;
    const braille_dots_5: number;
    const braille_dots_15: number;
    const braille_dots_25: number;
    const braille_dots_125: number;
    const braille_dots_35: number;
    const braille_dots_135: number;
    const braille_dots_235: number;
    const braille_dots_1235: number;
    const braille_dots_45: number;
    const braille_dots_145: number;
    const braille_dots_245: number;
    const braille_dots_1245: number;
    const braille_dots_345: number;
    const braille_dots_1345: number;
    const braille_dots_2345: number;
    const braille_dots_12345: number;
    const braille_dots_6: number;
    const braille_dots_16: number;
    const braille_dots_26: number;
    const braille_dots_126: number;
    const braille_dots_36: number;
    const braille_dots_136: number;
    const braille_dots_236: number;
    const braille_dots_1236: number;
    const braille_dots_46: number;
    const braille_dots_146: number;
    const braille_dots_246: number;
    const braille_dots_1246: number;
    const braille_dots_346: number;
    const braille_dots_1346: number;
    const braille_dots_2346: number;
    const braille_dots_12346: number;
    const braille_dots_56: number;
    const braille_dots_156: number;
    const braille_dots_256: number;
    const braille_dots_1256: number;
    const braille_dots_356: number;
    const braille_dots_1356: number;
    const braille_dots_2356: number;
    const braille_dots_12356: number;
    const braille_dots_456: number;
    const braille_dots_1456: number;
    const braille_dots_2456: number;
    const braille_dots_12456: number;
    const braille_dots_3456: number;
    const braille_dots_13456: number;
    const braille_dots_23456: number;
    const braille_dots_123456: number;
    const braille_dots_7: number;
    const braille_dots_17: number;
    const braille_dots_27: number;
    const braille_dots_127: number;
    const braille_dots_37: number;
    const braille_dots_137: number;
    const braille_dots_237: number;
    const braille_dots_1237: number;
    const braille_dots_47: number;
    const braille_dots_147: number;
    const braille_dots_247: number;
    const braille_dots_1247: number;
    const braille_dots_347: number;
    const braille_dots_1347: number;
    const braille_dots_2347: number;
    const braille_dots_12347: number;
    const braille_dots_57: number;
    const braille_dots_157: number;
    const braille_dots_257: number;
    const braille_dots_1257: number;
    const braille_dots_357: number;
    const braille_dots_1357: number;
    const braille_dots_2357: number;
    const braille_dots_12357: number;
    const braille_dots_457: number;
    const braille_dots_1457: number;
    const braille_dots_2457: number;
    const braille_dots_12457: number;
    const braille_dots_3457: number;
    const braille_dots_13457: number;
    const braille_dots_23457: number;
    const braille_dots_123457: number;
    const braille_dots_67: number;
    const braille_dots_167: number;
    const braille_dots_267: number;
    const braille_dots_1267: number;
    const braille_dots_367: number;
    const braille_dots_1367: number;
    const braille_dots_2367: number;
    const braille_dots_12367: number;
    const braille_dots_467: number;
    const braille_dots_1467: number;
    const braille_dots_2467: number;
    const braille_dots_12467: number;
    const braille_dots_3467: number;
    const braille_dots_13467: number;
    const braille_dots_23467: number;
    const braille_dots_123467: number;
    const braille_dots_567: number;
    const braille_dots_1567: number;
    const braille_dots_2567: number;
    const braille_dots_12567: number;
    const braille_dots_3567: number;
    const braille_dots_13567: number;
    const braille_dots_23567: number;
    const braille_dots_123567: number;
    const braille_dots_4567: number;
    const braille_dots_14567: number;
    const braille_dots_24567: number;
    const braille_dots_124567: number;
    const braille_dots_34567: number;
    const braille_dots_134567: number;
    const braille_dots_234567: number;
    const braille_dots_1234567: number;
    const braille_dots_8: number;
    const braille_dots_18: number;
    const braille_dots_28: number;
    const braille_dots_128: number;
    const braille_dots_38: number;
    const braille_dots_138: number;
    const braille_dots_238: number;
    const braille_dots_1238: number;
    const braille_dots_48: number;
    const braille_dots_148: number;
    const braille_dots_248: number;
    const braille_dots_1248: number;
    const braille_dots_348: number;
    const braille_dots_1348: number;
    const braille_dots_2348: number;
    const braille_dots_12348: number;
    const braille_dots_58: number;
    const braille_dots_158: number;
    const braille_dots_258: number;
    const braille_dots_1258: number;
    const braille_dots_358: number;
    const braille_dots_1358: number;
    const braille_dots_2358: number;
    const braille_dots_12358: number;
    const braille_dots_458: number;
    const braille_dots_1458: number;
    const braille_dots_2458: number;
    const braille_dots_12458: number;
    const braille_dots_3458: number;
    const braille_dots_13458: number;
    const braille_dots_23458: number;
    const braille_dots_123458: number;
    const braille_dots_68: number;
    const braille_dots_168: number;
    const braille_dots_268: number;
    const braille_dots_1268: number;
    const braille_dots_368: number;
    const braille_dots_1368: number;
    const braille_dots_2368: number;
    const braille_dots_12368: number;
    const braille_dots_468: number;
    const braille_dots_1468: number;
    const braille_dots_2468: number;
    const braille_dots_12468: number;
    const braille_dots_3468: number;
    const braille_dots_13468: number;
    const braille_dots_23468: number;
    const braille_dots_123468: number;
    const braille_dots_568: number;
    const braille_dots_1568: number;
    const braille_dots_2568: number;
    const braille_dots_12568: number;
    const braille_dots_3568: number;
    const braille_dots_13568: number;
    const braille_dots_23568: number;
    const braille_dots_123568: number;
    const braille_dots_4568: number;
    const braille_dots_14568: number;
    const braille_dots_24568: number;
    const braille_dots_124568: number;
    const braille_dots_34568: number;
    const braille_dots_134568: number;
    const braille_dots_234568: number;
    const braille_dots_1234568: number;
    const braille_dots_78: number;
    const braille_dots_178: number;
    const braille_dots_278: number;
    const braille_dots_1278: number;
    const braille_dots_378: number;
    const braille_dots_1378: number;
    const braille_dots_2378: number;
    const braille_dots_12378: number;
    const braille_dots_478: number;
    const braille_dots_1478: number;
    const braille_dots_2478: number;
    const braille_dots_12478: number;
    const braille_dots_3478: number;
    const braille_dots_13478: number;
    const braille_dots_23478: number;
    const braille_dots_123478: number;
    const braille_dots_578: number;
    const braille_dots_1578: number;
    const braille_dots_2578: number;
    const braille_dots_12578: number;
    const braille_dots_3578: number;
    const braille_dots_13578: number;
    const braille_dots_23578: number;
    const braille_dots_123578: number;
    const braille_dots_4578: number;
    const braille_dots_14578: number;
    const braille_dots_24578: number;
    const braille_dots_124578: number;
    const braille_dots_34578: number;
    const braille_dots_134578: number;
    const braille_dots_234578: number;
    const braille_dots_1234578: number;
    const braille_dots_678: number;
    const braille_dots_1678: number;
    const braille_dots_2678: number;
    const braille_dots_12678: number;
    const braille_dots_3678: number;
    const braille_dots_13678: number;
    const braille_dots_23678: number;
    const braille_dots_123678: number;
    const braille_dots_4678: number;
    const braille_dots_14678: number;
    const braille_dots_24678: number;
    const braille_dots_124678: number;
    const braille_dots_34678: number;
    const braille_dots_134678: number;
    const braille_dots_234678: number;
    const braille_dots_1234678: number;
    const braille_dots_5678: number;
    const braille_dots_15678: number;
    const braille_dots_25678: number;
    const braille_dots_125678: number;
    const braille_dots_35678: number;
    const braille_dots_135678: number;
    const braille_dots_235678: number;
    const braille_dots_1235678: number;
    const braille_dots_45678: number;
    const braille_dots_145678: number;
    const braille_dots_245678: number;
    const braille_dots_1245678: number;
    const braille_dots_345678: number;
    const braille_dots_1345678: number;
    const braille_dots_2345678: number;
    const braille_dots_12345678: number;
    const Sinh_ng: number;
    const Sinh_h2: number;
    const Sinh_a: number;
    const Sinh_aa: number;
    const Sinh_ae: number;
    const Sinh_aee: number;
    const Sinh_i: number;
    const Sinh_ii: number;
    const Sinh_u: number;
    const Sinh_uu: number;
    const Sinh_ri: number;
    const Sinh_rii: number;
    const Sinh_lu: number;
    const Sinh_luu: number;
    const Sinh_e: number;
    const Sinh_ee: number;
    const Sinh_ai: number;
    const Sinh_o: number;
    const Sinh_oo: number;
    const Sinh_au: number;
    const Sinh_ka: number;
    const Sinh_kha: number;
    const Sinh_ga: number;
    const Sinh_gha: number;
    const Sinh_ng2: number;
    const Sinh_nga: number;
    const Sinh_ca: number;
    const Sinh_cha: number;
    const Sinh_ja: number;
    const Sinh_jha: number;
    const Sinh_nya: number;
    const Sinh_jnya: number;
    const Sinh_nja: number;
    const Sinh_tta: number;
    const Sinh_ttha: number;
    const Sinh_dda: number;
    const Sinh_ddha: number;
    const Sinh_nna: number;
    const Sinh_ndda: number;
    const Sinh_tha: number;
    const Sinh_thha: number;
    const Sinh_dha: number;
    const Sinh_dhha: number;
    const Sinh_na: number;
    const Sinh_ndha: number;
    const Sinh_pa: number;
    const Sinh_pha: number;
    const Sinh_ba: number;
    const Sinh_bha: number;
    const Sinh_ma: number;
    const Sinh_mba: number;
    const Sinh_ya: number;
    const Sinh_ra: number;
    const Sinh_la: number;
    const Sinh_va: number;
    const Sinh_sha: number;
    const Sinh_ssha: number;
    const Sinh_sa: number;
    const Sinh_ha: number;
    const Sinh_lla: number;
    const Sinh_fa: number;
    const Sinh_al: number;
    const Sinh_aa2: number;
    const Sinh_ae2: number;
    const Sinh_aee2: number;
    const Sinh_i2: number;
    const Sinh_ii2: number;
    const Sinh_u2: number;
    const Sinh_uu2: number;
    const Sinh_ru2: number;
    const Sinh_e2: number;
    const Sinh_ee2: number;
    const Sinh_ai2: number;
    const Sinh_o2: number;
    const Sinh_oo2: number;
    const Sinh_au2: number;
    const Sinh_lu2: number;
    const Sinh_ruu2: number;
    const Sinh_luu2: number;
    const Sinh_kunddaliya: number;
    function init(): void;
    interface GetTime {
        (): number;
    }
    enum ModifierType {
        NONE,
        SHIFT_MASK,
        LOCK_MASK,
        CONTROL_MASK,
        MOD1_MASK,
        MOD2_MASK,
        MOD3_MASK,
        MOD4_MASK,
        MOD5_MASK,
        LSHIFT_MASK,
        RSHIFT_MASK,
        USLEEP_MASK,
        SUPER_MASK,
        HYPER_MASK,
        META_MASK,
        RELEASE_MASK,
    }
    module RomKanaConverter {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            kana_mode: KanaMode;
            kanaMode: KanaMode;
            period_style: PeriodStyle;
            periodStyle: PeriodStyle;
            output: string;
            preedit: string;
        }
    }

    class RomKanaConverter extends GObject.Object {
        static $gtype: GObject.GType<RomKanaConverter>;

        // Own properties of Skk.RomKanaConverter

        get kana_mode(): KanaMode;
        set kana_mode(val: KanaMode);
        get kanaMode(): KanaMode;
        set kanaMode(val: KanaMode);
        get period_style(): PeriodStyle;
        set period_style(val: PeriodStyle);
        get periodStyle(): PeriodStyle;
        set periodStyle(val: PeriodStyle);
        get output(): string;
        set output(val: string);
        get preedit(): string;

        // Constructors of Skk.RomKanaConverter

        constructor(properties?: Partial<RomKanaConverter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RomKanaConverter;

        // Own methods of Skk.RomKanaConverter

        is_valid(uc: number): boolean;
        output_nn_if_any(): boolean;
        append_text(text: string): void;
        append(uc: number): boolean;
        can_consume(uc: number, preedit_only: boolean, no_carryover: boolean): boolean;
        reset(): void;
        ['delete'](): boolean;
        get_kana_mode(): KanaMode;
        set_kana_mode(value: KanaMode): void;
        get_period_style(): PeriodStyle;
        set_period_style(value: PeriodStyle): void;
        get_output(): string;
        get_preedit(): string;
    }

    module Dict {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            read_only: boolean;
            readOnly: boolean;
        }
    }

    abstract class Dict extends GObject.Object {
        static $gtype: GObject.GType<Dict>;

        // Own properties of Skk.Dict

        get read_only(): boolean;
        get readOnly(): boolean;

        // Constructors of Skk.Dict

        constructor(properties?: Partial<Dict.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Skk.Dict

        vfunc_reload(): void;
        vfunc_lookup(midasi: string, okuri: boolean): Candidate[];
        vfunc_complete(midasi: string): string[];
        vfunc_select_candidate(candidate: Candidate): boolean;
        vfunc_purge_candidate(candidate: Candidate): boolean;
        vfunc_save(): void;
        vfunc_get_read_only(): boolean;

        // Own methods of Skk.Dict

        split_candidates(midasi: string, okuri: boolean, line: string): Candidate[];
        join_candidates(candidates: Candidate[]): string;
        reload(): void;
        lookup(midasi: string, okuri: boolean): Candidate[];
        complete(midasi: string): string[];
        select_candidate(candidate: Candidate): boolean;
        purge_candidate(candidate: Candidate): boolean;
        save(): void;
        get_read_only(): boolean;
    }

    module EmptyDict {
        // Constructor properties interface

        interface ConstructorProps extends Dict.ConstructorProps {}
    }

    class EmptyDict extends Dict {
        static $gtype: GObject.GType<EmptyDict>;

        // Constructors of Skk.EmptyDict

        constructor(properties?: Partial<EmptyDict.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): EmptyDict;
    }

    module FileDict {
        // Constructor properties interface

        interface ConstructorProps extends Dict.ConstructorProps {}
    }

    class FileDict extends Dict {
        static $gtype: GObject.GType<FileDict>;

        // Constructors of Skk.FileDict

        constructor(properties?: Partial<FileDict.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](path: string, encoding: string): FileDict;
    }

    module CdbDict {
        // Constructor properties interface

        interface ConstructorProps extends Dict.ConstructorProps {}
    }

    class CdbDict extends Dict {
        static $gtype: GObject.GType<CdbDict>;

        // Constructors of Skk.CdbDict

        constructor(properties?: Partial<CdbDict.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](path: string, encoding: string): CdbDict;
    }

    module UserDict {
        // Constructor properties interface

        interface ConstructorProps extends Dict.ConstructorProps {}
    }

    class UserDict extends Dict {
        static $gtype: GObject.GType<UserDict>;

        // Constructors of Skk.UserDict

        constructor(properties?: Partial<UserDict.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](path: string, encoding: string): UserDict;
    }

    module SkkServ {
        // Constructor properties interface

        interface ConstructorProps extends Dict.ConstructorProps {}
    }

    class SkkServ extends Dict {
        static $gtype: GObject.GType<SkkServ>;

        // Constructors of Skk.SkkServ

        constructor(properties?: Partial<SkkServ.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](host: string, port: number, encoding: string): SkkServ;
    }

    module KeyEvent {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
            code: number;
            modifiers: ModifierType;
        }
    }

    class KeyEvent extends GObject.Object {
        static $gtype: GObject.GType<KeyEvent>;

        // Own properties of Skk.KeyEvent

        get name(): string;
        set name(val: string);
        get code(): number;
        set code(val: number);
        get modifiers(): ModifierType;
        set modifiers(val: ModifierType);

        // Constructors of Skk.KeyEvent

        constructor(properties?: Partial<KeyEvent.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, code: number, modifiers: ModifierType): KeyEvent;

        static from_string(key: string): KeyEvent;

        static from_x_keysym(keyval: number, modifiers: ModifierType): KeyEvent;

        // Own methods of Skk.KeyEvent

        copy(): KeyEvent;
        to_string(): string;
        base_equal(key: KeyEvent): boolean;
        get_name(): string;
        get_code(): number;
        get_modifiers(): ModifierType;
        set_modifiers(value: ModifierType): void;
    }

    module KeyEventFilter {
        // Signal callback interfaces

        interface Forwarded {
            (key: KeyEvent): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class KeyEventFilter extends GObject.Object {
        static $gtype: GObject.GType<KeyEventFilter>;

        // Constructors of Skk.KeyEventFilter

        constructor(properties?: Partial<KeyEventFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of Skk.KeyEventFilter

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'forwarded', callback: (_source: this, key: KeyEvent) => void): number;
        connect_after(signal: 'forwarded', callback: (_source: this, key: KeyEvent) => void): number;
        emit(signal: 'forwarded', key: KeyEvent): void;

        // Own virtual methods of Skk.KeyEventFilter

        vfunc_filter_key_event(key: KeyEvent): KeyEvent;
        vfunc_reset(): void;

        // Own methods of Skk.KeyEventFilter

        filter_key_event(key: KeyEvent): KeyEvent;
        reset(): void;
    }

    module Rule {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            metadata: RuleMetadata;
        }
    }

    class Rule extends GObject.Object {
        static $gtype: GObject.GType<Rule>;

        // Own properties of Skk.Rule

        get metadata(): RuleMetadata;
        set metadata(val: RuleMetadata);

        // Constructors of Skk.Rule

        constructor(properties?: Partial<Rule.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string): Rule;

        // Own static methods of Skk.Rule

        static find_rule(name: string): RuleMetadata;
        static list(): RuleMetadata[];

        // Own methods of Skk.Rule

        get_metadata(): RuleMetadata;
    }

    module Context {
        // Signal callback interfaces

        interface RetrieveSurroundingText {
            (text: string, cursor_pos: number): boolean;
        }

        interface DeleteSurroundingText {
            (offset: number, nchars: number): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            dictionaries: Dict[];
            candidates: CandidateList;
            input_mode: InputMode;
            inputMode: InputMode;
            auto_start_henkan_keywords: string[];
            autoStartHenkanKeywords: string[];
            egg_like_newline: boolean;
            eggLikeNewline: boolean;
            period_style: PeriodStyle;
            periodStyle: PeriodStyle;
            typing_rule: Rule;
            typingRule: Rule;
            key_event_filter: KeyEventFilter;
            keyEventFilter: KeyEventFilter;
            preedit: string;
        }
    }

    class Context extends GObject.Object {
        static $gtype: GObject.GType<Context>;

        // Own properties of Skk.Context

        get dictionaries(): Dict[];
        set dictionaries(val: Dict[]);
        get candidates(): CandidateList;
        get input_mode(): InputMode;
        set input_mode(val: InputMode);
        get inputMode(): InputMode;
        set inputMode(val: InputMode);
        get auto_start_henkan_keywords(): string[];
        set auto_start_henkan_keywords(val: string[]);
        get autoStartHenkanKeywords(): string[];
        set autoStartHenkanKeywords(val: string[]);
        get egg_like_newline(): boolean;
        set egg_like_newline(val: boolean);
        get eggLikeNewline(): boolean;
        set eggLikeNewline(val: boolean);
        get period_style(): PeriodStyle;
        set period_style(val: PeriodStyle);
        get periodStyle(): PeriodStyle;
        set periodStyle(val: PeriodStyle);
        get typing_rule(): Rule;
        set typing_rule(val: Rule);
        get typingRule(): Rule;
        set typingRule(val: Rule);
        get key_event_filter(): KeyEventFilter;
        get keyEventFilter(): KeyEventFilter;
        get preedit(): string;
        set preedit(val: string);

        // Constructors of Skk.Context

        constructor(properties?: Partial<Context.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](dictionaries: Dict[]): Context;

        // Own signals of Skk.Context

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(
            signal: 'retrieve-surrounding-text',
            callback: (_source: this, text: string, cursor_pos: number) => boolean,
        ): number;
        connect_after(
            signal: 'retrieve-surrounding-text',
            callback: (_source: this, text: string, cursor_pos: number) => boolean,
        ): number;
        emit(signal: 'retrieve-surrounding-text', text: string, cursor_pos: number): void;
        connect(
            signal: 'delete-surrounding-text',
            callback: (_source: this, offset: number, nchars: number) => boolean,
        ): number;
        connect_after(
            signal: 'delete-surrounding-text',
            callback: (_source: this, offset: number, nchars: number) => boolean,
        ): number;
        emit(signal: 'delete-surrounding-text', offset: number, nchars: number): void;

        // Own methods of Skk.Context

        add_dictionary(dict: Dict): void;
        remove_dictionary(dict: Dict): void;
        process_key_events(keyseq: string): boolean;
        process_key_event(key: KeyEvent): boolean;
        reset(): void;
        get_output(): string;
        peek_output(): string;
        poll_output(): string;
        clear_output(): void;
        get_preedit_underline(): [number, number];
        save_dictionaries(): void;
        get_dictionaries(): Dict[];
        set_dictionaries(value: Dict[]): void;
        get_candidates(): CandidateList;
        get_input_mode(): InputMode;
        set_input_mode(value: InputMode): void;
        get_auto_start_henkan_keywords(): string[];
        set_auto_start_henkan_keywords(value: string[]): void;
        get_egg_like_newline(): boolean;
        set_egg_like_newline(value: boolean): void;
        get_period_style(): PeriodStyle;
        set_period_style(value: PeriodStyle): void;
        get_typing_rule(): Rule;
        set_typing_rule(value: Rule): void;
        get_key_event_filter(): KeyEventFilter;
        get_preedit(): string;
    }

    module Candidate {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            midasi: string;
            okuri: boolean;
            text: string;
            annotation: string;
            output: string;
        }
    }

    class Candidate extends GObject.Object {
        static $gtype: GObject.GType<Candidate>;

        // Own properties of Skk.Candidate

        get midasi(): string;
        set midasi(val: string);
        get okuri(): boolean;
        set okuri(val: boolean);
        get text(): string;
        set text(val: string);
        get annotation(): string;
        set annotation(val: string);
        get output(): string;
        set output(val: string);

        // Constructors of Skk.Candidate

        constructor(properties?: Partial<Candidate.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](midasi: string, okuri: boolean, text: string, annotation: string, output: string): Candidate;

        // Own methods of Skk.Candidate

        to_string(): string;
        get_midasi(): string;
        get_okuri(): boolean;
        get_text(): string;
        set_text(value: string): void;
        get_annotation(): string;
        set_annotation(value: string): void;
        get_output(): string;
        set_output(value: string): void;
    }

    module CandidateList {
        // Signal callback interfaces

        interface Populated {
            (): void;
        }

        interface Selected {
            (candidate: Candidate): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            cursor_pos: number;
            cursorPos: number;
            size: number;
            page_start: number;
            pageStart: number;
            page_size: number;
            pageSize: number;
            page_visible: boolean;
            pageVisible: boolean;
        }
    }

    abstract class CandidateList extends GObject.Object {
        static $gtype: GObject.GType<CandidateList>;

        // Own properties of Skk.CandidateList

        get cursor_pos(): number;
        get cursorPos(): number;
        get size(): number;
        get page_start(): number;
        set page_start(val: number);
        get pageStart(): number;
        set pageStart(val: number);
        get page_size(): number;
        set page_size(val: number);
        get pageSize(): number;
        set pageSize(val: number);
        get page_visible(): boolean;
        get pageVisible(): boolean;

        // Constructors of Skk.CandidateList

        constructor(properties?: Partial<CandidateList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of Skk.CandidateList

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'populated', callback: (_source: this) => void): number;
        connect_after(signal: 'populated', callback: (_source: this) => void): number;
        emit(signal: 'populated'): void;
        connect(signal: 'selected', callback: (_source: this, candidate: Candidate) => void): number;
        connect_after(signal: 'selected', callback: (_source: this, candidate: Candidate) => void): number;
        emit(signal: 'selected', candidate: Candidate): void;

        // Own virtual methods of Skk.CandidateList

        vfunc_get(index: number): Candidate;
        vfunc_cursor_up(): boolean;
        vfunc_cursor_down(): boolean;
        vfunc_page_up(): boolean;
        vfunc_page_down(): boolean;
        vfunc_next(): boolean;
        vfunc_previous(): boolean;
        vfunc_select_at(index_in_page: number): boolean;
        vfunc_select(): void;
        vfunc_get_cursor_pos(): number;
        vfunc_get_size(): number;
        vfunc_get_page_start(): number;
        vfunc_set_page_start(value: number): void;
        vfunc_get_page_size(): number;
        vfunc_set_page_size(value: number): void;
        vfunc_get_page_visible(): boolean;

        // Own methods of Skk.CandidateList

        get(index: number): Candidate;
        cursor_up(): boolean;
        cursor_down(): boolean;
        page_up(): boolean;
        page_down(): boolean;
        next(): boolean;
        previous(): boolean;
        get_page_start_cursor_pos(): number;
        select_at(index_in_page: number): boolean;
        select(): void;
        get_cursor_pos(): number;
        get_size(): number;
        get_page_start(): number;
        set_page_start(value: number): void;
        get_page_size(): number;
        set_page_size(value: number): void;
        get_page_visible(): boolean;
    }

    module NicolaKeyEventFilter {
        // Constructor properties interface

        interface ConstructorProps extends KeyEventFilter.ConstructorProps {}
    }

    class NicolaKeyEventFilter extends KeyEventFilter {
        static $gtype: GObject.GType<NicolaKeyEventFilter>;

        // Own fields of Skk.NicolaKeyEventFilter

        get_time_func: GetTime;
        timeout: number;
        overlap: number;
        maxwait: number;
        special_doubles: string[];

        // Constructors of Skk.NicolaKeyEventFilter

        constructor(properties?: Partial<NicolaKeyEventFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): NicolaKeyEventFilter;
    }

    type RomKanaConverterClass = typeof RomKanaConverter;
    abstract class RomKanaConverterPrivate {
        static $gtype: GObject.GType<RomKanaConverterPrivate>;

        // Constructors of Skk.RomKanaConverterPrivate

        _init(...args: any[]): void;
    }

    type DictClass = typeof Dict;
    abstract class DictPrivate {
        static $gtype: GObject.GType<DictPrivate>;

        // Constructors of Skk.DictPrivate

        _init(...args: any[]): void;
    }

    type EmptyDictClass = typeof EmptyDict;
    abstract class EmptyDictPrivate {
        static $gtype: GObject.GType<EmptyDictPrivate>;

        // Constructors of Skk.EmptyDictPrivate

        _init(...args: any[]): void;
    }

    type FileDictClass = typeof FileDict;
    abstract class FileDictPrivate {
        static $gtype: GObject.GType<FileDictPrivate>;

        // Constructors of Skk.FileDictPrivate

        _init(...args: any[]): void;
    }

    type CdbDictClass = typeof CdbDict;
    abstract class CdbDictPrivate {
        static $gtype: GObject.GType<CdbDictPrivate>;

        // Constructors of Skk.CdbDictPrivate

        _init(...args: any[]): void;
    }

    type UserDictClass = typeof UserDict;
    abstract class UserDictPrivate {
        static $gtype: GObject.GType<UserDictPrivate>;

        // Constructors of Skk.UserDictPrivate

        _init(...args: any[]): void;
    }

    type SkkServClass = typeof SkkServ;
    abstract class SkkServPrivate {
        static $gtype: GObject.GType<SkkServPrivate>;

        // Constructors of Skk.SkkServPrivate

        _init(...args: any[]): void;
    }

    type KeyEventClass = typeof KeyEvent;
    abstract class KeyEventPrivate {
        static $gtype: GObject.GType<KeyEventPrivate>;

        // Constructors of Skk.KeyEventPrivate

        _init(...args: any[]): void;
    }

    type KeyEventFilterClass = typeof KeyEventFilter;
    abstract class KeyEventFilterPrivate {
        static $gtype: GObject.GType<KeyEventFilterPrivate>;

        // Constructors of Skk.KeyEventFilterPrivate

        _init(...args: any[]): void;
    }

    type RuleClass = typeof Rule;
    abstract class RulePrivate {
        static $gtype: GObject.GType<RulePrivate>;

        // Constructors of Skk.RulePrivate

        _init(...args: any[]): void;
    }

    type ContextClass = typeof Context;
    abstract class ContextPrivate {
        static $gtype: GObject.GType<ContextPrivate>;

        // Constructors of Skk.ContextPrivate

        _init(...args: any[]): void;
    }

    type CandidateClass = typeof Candidate;
    abstract class CandidatePrivate {
        static $gtype: GObject.GType<CandidatePrivate>;

        // Constructors of Skk.CandidatePrivate

        _init(...args: any[]): void;
    }

    type CandidateListClass = typeof CandidateList;
    abstract class CandidateListPrivate {
        static $gtype: GObject.GType<CandidateListPrivate>;

        // Constructors of Skk.CandidateListPrivate

        _init(...args: any[]): void;
    }

    type NicolaKeyEventFilterClass = typeof NicolaKeyEventFilter;
    abstract class NicolaKeyEventFilterPrivate {
        static $gtype: GObject.GType<NicolaKeyEventFilterPrivate>;

        // Constructors of Skk.NicolaKeyEventFilterPrivate

        _init(...args: any[]): void;
    }

    class RuleMetadata {
        static $gtype: GObject.GType<RuleMetadata>;

        // Own fields of Skk.RuleMetadata

        base_dir: string;
        name: string;
        label: string;
        description: string;
        filter: string;

        // Constructors of Skk.RuleMetadata

        constructor(
            properties?: Partial<{
                base_dir: string;
                name: string;
                label: string;
                description: string;
                filter: string;
            }>,
        );
        _init(...args: any[]): void;

        // Own methods of Skk.RuleMetadata

        locate_map_file(type: string, name: string): string;
    }

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

export default Skk;
// END
