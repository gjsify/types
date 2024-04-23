/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './kkc-1.0-ambient.d.ts';

/**
 * Kkc-1.0
 */

import type GLib from '@girs/glib-2.0';
import type Gee from '@girs/gee-0.8';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type Json from '@girs/json-1.0';

export namespace Kkc {
    enum KanaMode {
        HIRAGANA,
        KATAKANA,
        HANKAKU_KATAKANA,
        LATIN,
        WIDE_LATIN,
    }
    enum PunctuationStyle {
        JA_JA,
        EN_EN,
        JA_EN,
        EN_JA,
    }
    enum DictionaryCallbackReturn {
        CONTINUE,
        REMOVE,
    }
    enum InputMode {
        HIRAGANA,
        KATAKANA,
        HANKAKU_KATAKANA,
        LATIN,
        WIDE_LATIN,
        DIRECT,
    }
    class MetadataFormatError extends GLib.Error {
        static $gtype: GObject.GType<MetadataFormatError>;

        // Static fields of Kkc.MetadataFormatError

        static MISSING_FIELD: number;
        static INVALID_FIELD: number;

        // Constructors of Kkc.MetadataFormatError

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    class LanguageModelError extends GLib.Error {
        static $gtype: GObject.GType<LanguageModelError>;

        // Static fields of Kkc.LanguageModelError

        static NOT_FOUND: number;

        // Constructors of Kkc.LanguageModelError

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    class KeyEventFormatError extends GLib.Error {
        static $gtype: GObject.GType<KeyEventFormatError>;

        // Static fields of Kkc.KeyEventFormatError

        static PARSE_FAILED: number;
        static KEYSYM_NOT_FOUND: number;

        // Constructors of Kkc.KeyEventFormatError

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    class RuleParseError extends GLib.Error {
        static $gtype: GObject.GType<RuleParseError>;

        // Static fields of Kkc.RuleParseError

        static FAILED: number;

        // Constructors of Kkc.RuleParseError

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    class DictionaryError extends GLib.Error {
        static $gtype: GObject.GType<DictionaryError>;

        // Static fields of Kkc.DictionaryError

        static NOT_READABLE: number;
        static MALFORMED_INPUT: number;

        // Constructors of Kkc.DictionaryError

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    const KeysymsVoidSymbol: number;
    const KeysymsBackSpace: number;
    const KeysymsTab: number;
    const KeysymsLinefeed: number;
    const KeysymsClear: number;
    const KeysymsReturn: number;
    const KeysymsPause: number;
    const KeysymsScroll_Lock: number;
    const KeysymsSys_Req: number;
    const KeysymsEscape: number;
    const KeysymsDelete: number;
    const KeysymsMulti_key: number;
    const KeysymsCodeinput: number;
    const KeysymsSingleCandidate: number;
    const KeysymsMultipleCandidate: number;
    const KeysymsPreviousCandidate: number;
    const KeysymsKanji: number;
    const KeysymsMuhenkan: number;
    const KeysymsHenkan_Mode: number;
    const KeysymsHenkan: number;
    const KeysymsRomaji: number;
    const KeysymsHiragana: number;
    const KeysymsKatakana: number;
    const KeysymsHiragana_Katakana: number;
    const KeysymsZenkaku: number;
    const KeysymsHankaku: number;
    const KeysymsZenkaku_Hankaku: number;
    const KeysymsTouroku: number;
    const KeysymsMassyo: number;
    const KeysymsKana_Lock: number;
    const KeysymsKana_Shift: number;
    const KeysymsEisu_Shift: number;
    const KeysymsEisu_toggle: number;
    const KeysymsKanji_Bangou: number;
    const KeysymsZen_Koho: number;
    const KeysymsMae_Koho: number;
    const KeysymsHome: number;
    const KeysymsLeft: number;
    const KeysymsUp: number;
    const KeysymsRight: number;
    const KeysymsDown: number;
    const KeysymsPrior: number;
    const KeysymsPage_Up: number;
    const KeysymsNext: number;
    const KeysymsPage_Down: number;
    const KeysymsEnd: number;
    const KeysymsBegin: number;
    const KeysymsSelect: number;
    const KeysymsPrint: number;
    const KeysymsExecute: number;
    const KeysymsInsert: number;
    const KeysymsUndo: number;
    const KeysymsRedo: number;
    const KeysymsMenu: number;
    const KeysymsFind: number;
    const KeysymsCancel: number;
    const KeysymsHelp: number;
    const KeysymsBreak: number;
    const KeysymsMode_switch: number;
    const Keysymsscript_switch: number;
    const KeysymsNum_Lock: number;
    const KeysymsKP_Space: number;
    const KeysymsKP_Tab: number;
    const KeysymsKP_Enter: number;
    const KeysymsKP_F1: number;
    const KeysymsKP_F2: number;
    const KeysymsKP_F3: number;
    const KeysymsKP_F4: number;
    const KeysymsKP_Home: number;
    const KeysymsKP_Left: number;
    const KeysymsKP_Up: number;
    const KeysymsKP_Right: number;
    const KeysymsKP_Down: number;
    const KeysymsKP_Prior: number;
    const KeysymsKP_Page_Up: number;
    const KeysymsKP_Next: number;
    const KeysymsKP_Page_Down: number;
    const KeysymsKP_End: number;
    const KeysymsKP_Begin: number;
    const KeysymsKP_Insert: number;
    const KeysymsKP_Delete: number;
    const KeysymsKP_Equal: number;
    const KeysymsKP_Multiply: number;
    const KeysymsKP_Add: number;
    const KeysymsKP_Separator: number;
    const KeysymsKP_Subtract: number;
    const KeysymsKP_Decimal: number;
    const KeysymsKP_Divide: number;
    const KeysymsKP_0: number;
    const KeysymsKP_1: number;
    const KeysymsKP_2: number;
    const KeysymsKP_3: number;
    const KeysymsKP_4: number;
    const KeysymsKP_5: number;
    const KeysymsKP_6: number;
    const KeysymsKP_7: number;
    const KeysymsKP_8: number;
    const KeysymsKP_9: number;
    const KeysymsF1: number;
    const KeysymsF2: number;
    const KeysymsF3: number;
    const KeysymsF4: number;
    const KeysymsF5: number;
    const KeysymsF6: number;
    const KeysymsF7: number;
    const KeysymsF8: number;
    const KeysymsF9: number;
    const KeysymsF10: number;
    const KeysymsF11: number;
    const KeysymsL1: number;
    const KeysymsF12: number;
    const KeysymsL2: number;
    const KeysymsF13: number;
    const KeysymsL3: number;
    const KeysymsF14: number;
    const KeysymsL4: number;
    const KeysymsF15: number;
    const KeysymsL5: number;
    const KeysymsF16: number;
    const KeysymsL6: number;
    const KeysymsF17: number;
    const KeysymsL7: number;
    const KeysymsF18: number;
    const KeysymsL8: number;
    const KeysymsF19: number;
    const KeysymsL9: number;
    const KeysymsF20: number;
    const KeysymsL10: number;
    const KeysymsF21: number;
    const KeysymsR1: number;
    const KeysymsF22: number;
    const KeysymsR2: number;
    const KeysymsF23: number;
    const KeysymsR3: number;
    const KeysymsF24: number;
    const KeysymsR4: number;
    const KeysymsF25: number;
    const KeysymsR5: number;
    const KeysymsF26: number;
    const KeysymsR6: number;
    const KeysymsF27: number;
    const KeysymsR7: number;
    const KeysymsF28: number;
    const KeysymsR8: number;
    const KeysymsF29: number;
    const KeysymsR9: number;
    const KeysymsF30: number;
    const KeysymsR10: number;
    const KeysymsF31: number;
    const KeysymsR11: number;
    const KeysymsF32: number;
    const KeysymsR12: number;
    const KeysymsF33: number;
    const KeysymsR13: number;
    const KeysymsF34: number;
    const KeysymsR14: number;
    const KeysymsF35: number;
    const KeysymsR15: number;
    const KeysymsShift_L: number;
    const KeysymsShift_R: number;
    const KeysymsControl_L: number;
    const KeysymsControl_R: number;
    const KeysymsCaps_Lock: number;
    const KeysymsShift_Lock: number;
    const KeysymsMeta_L: number;
    const KeysymsMeta_R: number;
    const KeysymsAlt_L: number;
    const KeysymsAlt_R: number;
    const KeysymsSuper_L: number;
    const KeysymsSuper_R: number;
    const KeysymsHyper_L: number;
    const KeysymsHyper_R: number;
    const KeysymsISO_Lock: number;
    const KeysymsISO_Level2_Latch: number;
    const KeysymsISO_Level3_Shift: number;
    const KeysymsISO_Level3_Latch: number;
    const KeysymsISO_Level3_Lock: number;
    const KeysymsISO_Level5_Shift: number;
    const KeysymsISO_Level5_Latch: number;
    const KeysymsISO_Level5_Lock: number;
    const KeysymsISO_Group_Shift: number;
    const KeysymsISO_Group_Latch: number;
    const KeysymsISO_Group_Lock: number;
    const KeysymsISO_Next_Group: number;
    const KeysymsISO_Next_Group_Lock: number;
    const KeysymsISO_Prev_Group: number;
    const KeysymsISO_Prev_Group_Lock: number;
    const KeysymsISO_First_Group: number;
    const KeysymsISO_First_Group_Lock: number;
    const KeysymsISO_Last_Group: number;
    const KeysymsISO_Last_Group_Lock: number;
    const KeysymsISO_Left_Tab: number;
    const KeysymsISO_Move_Line_Up: number;
    const KeysymsISO_Move_Line_Down: number;
    const KeysymsISO_Partial_Line_Up: number;
    const KeysymsISO_Partial_Line_Down: number;
    const KeysymsISO_Partial_Space_Left: number;
    const KeysymsISO_Partial_Space_Right: number;
    const KeysymsISO_Set_Margin_Left: number;
    const KeysymsISO_Set_Margin_Right: number;
    const KeysymsISO_Release_Margin_Left: number;
    const KeysymsISO_Release_Margin_Right: number;
    const KeysymsISO_Release_Both_Margins: number;
    const KeysymsISO_Fast_Cursor_Left: number;
    const KeysymsISO_Fast_Cursor_Right: number;
    const KeysymsISO_Fast_Cursor_Up: number;
    const KeysymsISO_Fast_Cursor_Down: number;
    const KeysymsISO_Continuous_Underline: number;
    const KeysymsISO_Discontinuous_Underline: number;
    const KeysymsISO_Emphasize: number;
    const KeysymsISO_Center_Object: number;
    const KeysymsISO_Enter: number;
    const Keysymsdead_grave: number;
    const Keysymsdead_acute: number;
    const Keysymsdead_circumflex: number;
    const Keysymsdead_tilde: number;
    const Keysymsdead_perispomeni: number;
    const Keysymsdead_macron: number;
    const Keysymsdead_breve: number;
    const Keysymsdead_abovedot: number;
    const Keysymsdead_diaeresis: number;
    const Keysymsdead_abovering: number;
    const Keysymsdead_doubleacute: number;
    const Keysymsdead_caron: number;
    const Keysymsdead_cedilla: number;
    const Keysymsdead_ogonek: number;
    const Keysymsdead_iota: number;
    const Keysymsdead_voiced_sound: number;
    const Keysymsdead_semivoiced_sound: number;
    const Keysymsdead_belowdot: number;
    const Keysymsdead_hook: number;
    const Keysymsdead_horn: number;
    const Keysymsdead_stroke: number;
    const Keysymsdead_abovecomma: number;
    const Keysymsdead_psili: number;
    const Keysymsdead_abovereversedcomma: number;
    const Keysymsdead_dasia: number;
    const Keysymsdead_doublegrave: number;
    const Keysymsdead_belowring: number;
    const Keysymsdead_belowmacron: number;
    const Keysymsdead_belowcircumflex: number;
    const Keysymsdead_belowtilde: number;
    const Keysymsdead_belowbreve: number;
    const Keysymsdead_belowdiaeresis: number;
    const Keysymsdead_invertedbreve: number;
    const Keysymsdead_belowcomma: number;
    const Keysymsdead_currency: number;
    const Keysymsdead_a: number;
    const Keysymsdead_A: number;
    const Keysymsdead_e: number;
    const Keysymsdead_E: number;
    const Keysymsdead_i: number;
    const Keysymsdead_I: number;
    const Keysymsdead_o: number;
    const Keysymsdead_O: number;
    const Keysymsdead_u: number;
    const Keysymsdead_U: number;
    const Keysymsdead_small_schwa: number;
    const Keysymsdead_capital_schwa: number;
    const KeysymsFirst_Virtual_Screen: number;
    const KeysymsPrev_Virtual_Screen: number;
    const KeysymsNext_Virtual_Screen: number;
    const KeysymsLast_Virtual_Screen: number;
    const KeysymsTerminate_Server: number;
    const KeysymsAccessX_Enable: number;
    const KeysymsAccessX_Feedback_Enable: number;
    const KeysymsRepeatKeys_Enable: number;
    const KeysymsSlowKeys_Enable: number;
    const KeysymsBounceKeys_Enable: number;
    const KeysymsStickyKeys_Enable: number;
    const KeysymsMouseKeys_Enable: number;
    const KeysymsMouseKeys_Accel_Enable: number;
    const KeysymsOverlay1_Enable: number;
    const KeysymsOverlay2_Enable: number;
    const KeysymsAudibleBell_Enable: number;
    const KeysymsPointer_Left: number;
    const KeysymsPointer_Right: number;
    const KeysymsPointer_Up: number;
    const KeysymsPointer_Down: number;
    const KeysymsPointer_UpLeft: number;
    const KeysymsPointer_UpRight: number;
    const KeysymsPointer_DownLeft: number;
    const KeysymsPointer_DownRight: number;
    const KeysymsPointer_Button_Dflt: number;
    const KeysymsPointer_Button1: number;
    const KeysymsPointer_Button2: number;
    const KeysymsPointer_Button3: number;
    const KeysymsPointer_Button4: number;
    const KeysymsPointer_Button5: number;
    const KeysymsPointer_DblClick_Dflt: number;
    const KeysymsPointer_DblClick1: number;
    const KeysymsPointer_DblClick2: number;
    const KeysymsPointer_DblClick3: number;
    const KeysymsPointer_DblClick4: number;
    const KeysymsPointer_DblClick5: number;
    const KeysymsPointer_Drag_Dflt: number;
    const KeysymsPointer_Drag1: number;
    const KeysymsPointer_Drag2: number;
    const KeysymsPointer_Drag3: number;
    const KeysymsPointer_Drag4: number;
    const KeysymsPointer_Drag5: number;
    const KeysymsPointer_EnableKeys: number;
    const KeysymsPointer_Accelerate: number;
    const KeysymsPointer_DfltBtnNext: number;
    const KeysymsPointer_DfltBtnPrev: number;
    const Keysyms3270_Duplicate: number;
    const Keysyms3270_FieldMark: number;
    const Keysyms3270_Right2: number;
    const Keysyms3270_Left2: number;
    const Keysyms3270_BackTab: number;
    const Keysyms3270_EraseEOF: number;
    const Keysyms3270_EraseInput: number;
    const Keysyms3270_Reset: number;
    const Keysyms3270_Quit: number;
    const Keysyms3270_PA1: number;
    const Keysyms3270_PA2: number;
    const Keysyms3270_PA3: number;
    const Keysyms3270_Test: number;
    const Keysyms3270_Attn: number;
    const Keysyms3270_CursorBlink: number;
    const Keysyms3270_AltCursor: number;
    const Keysyms3270_KeyClick: number;
    const Keysyms3270_Jump: number;
    const Keysyms3270_Ident: number;
    const Keysyms3270_Rule: number;
    const Keysyms3270_Copy: number;
    const Keysyms3270_Play: number;
    const Keysyms3270_Setup: number;
    const Keysyms3270_Record: number;
    const Keysyms3270_ChangeScreen: number;
    const Keysyms3270_DeleteWord: number;
    const Keysyms3270_ExSelect: number;
    const Keysyms3270_CursorSelect: number;
    const Keysyms3270_PrintScreen: number;
    const Keysyms3270_Enter: number;
    const Keysymsspace: number;
    const Keysymsexclam: number;
    const Keysymsquotedbl: number;
    const Keysymsnumbersign: number;
    const Keysymsdollar: number;
    const Keysymspercent: number;
    const Keysymsampersand: number;
    const Keysymsapostrophe: number;
    const Keysymsquoteright: number;
    const Keysymsparenleft: number;
    const Keysymsparenright: number;
    const Keysymsasterisk: number;
    const Keysymsplus: number;
    const Keysymscomma: number;
    const Keysymsminus: number;
    const Keysymsperiod: number;
    const Keysymsslash: number;
    const Keysyms0: number;
    const Keysyms1: number;
    const Keysyms2: number;
    const Keysyms3: number;
    const Keysyms4: number;
    const Keysyms5: number;
    const Keysyms6: number;
    const Keysyms7: number;
    const Keysyms8: number;
    const Keysyms9: number;
    const Keysymscolon: number;
    const Keysymssemicolon: number;
    const Keysymsless: number;
    const Keysymsequal: number;
    const Keysymsgreater: number;
    const Keysymsquestion: number;
    const Keysymsat: number;
    const KeysymsA: number;
    const KeysymsB: number;
    const KeysymsC: number;
    const KeysymsD: number;
    const KeysymsE: number;
    const KeysymsF: number;
    const KeysymsG: number;
    const KeysymsH: number;
    const KeysymsI: number;
    const KeysymsJ: number;
    const KeysymsK: number;
    const KeysymsL: number;
    const KeysymsM: number;
    const KeysymsN: number;
    const KeysymsO: number;
    const KeysymsP: number;
    const KeysymsQ: number;
    const KeysymsR: number;
    const KeysymsS: number;
    const KeysymsT: number;
    const KeysymsU: number;
    const KeysymsV: number;
    const KeysymsW: number;
    const KeysymsX: number;
    const KeysymsY: number;
    const KeysymsZ: number;
    const Keysymsbracketleft: number;
    const Keysymsbackslash: number;
    const Keysymsbracketright: number;
    const Keysymsasciicircum: number;
    const Keysymsunderscore: number;
    const Keysymsgrave: number;
    const Keysymsquoteleft: number;
    const Keysymsa: number;
    const Keysymsb: number;
    const Keysymsc: number;
    const Keysymsd: number;
    const Keysymse: number;
    const Keysymsf: number;
    const Keysymsg: number;
    const Keysymsh: number;
    const Keysymsi: number;
    const Keysymsj: number;
    const Keysymsk: number;
    const Keysymsl: number;
    const Keysymsm: number;
    const Keysymsn: number;
    const Keysymso: number;
    const Keysymsp: number;
    const Keysymsq: number;
    const Keysymsr: number;
    const Keysymss: number;
    const Keysymst: number;
    const Keysymsu: number;
    const Keysymsv: number;
    const Keysymsw: number;
    const Keysymsx: number;
    const Keysymsy: number;
    const Keysymsz: number;
    const Keysymsbraceleft: number;
    const Keysymsbar: number;
    const Keysymsbraceright: number;
    const Keysymsasciitilde: number;
    const Keysymsnobreakspace: number;
    const Keysymsexclamdown: number;
    const Keysymscent: number;
    const Keysymssterling: number;
    const Keysymscurrency: number;
    const Keysymsyen: number;
    const Keysymsbrokenbar: number;
    const Keysymssection: number;
    const Keysymsdiaeresis: number;
    const Keysymscopyright: number;
    const Keysymsordfeminine: number;
    const Keysymsguillemotleft: number;
    const Keysymsnotsign: number;
    const Keysymshyphen: number;
    const Keysymsregistered: number;
    const Keysymsmacron: number;
    const Keysymsdegree: number;
    const Keysymsplusminus: number;
    const Keysymstwosuperior: number;
    const Keysymsthreesuperior: number;
    const Keysymsacute: number;
    const Keysymsmu: number;
    const Keysymsparagraph: number;
    const Keysymsperiodcentered: number;
    const Keysymscedilla: number;
    const Keysymsonesuperior: number;
    const Keysymsmasculine: number;
    const Keysymsguillemotright: number;
    const Keysymsonequarter: number;
    const Keysymsonehalf: number;
    const Keysymsthreequarters: number;
    const Keysymsquestiondown: number;
    const KeysymsAgrave: number;
    const KeysymsAacute: number;
    const KeysymsAcircumflex: number;
    const KeysymsAtilde: number;
    const KeysymsAdiaeresis: number;
    const KeysymsAring: number;
    const KeysymsAE: number;
    const KeysymsCcedilla: number;
    const KeysymsEgrave: number;
    const KeysymsEacute: number;
    const KeysymsEcircumflex: number;
    const KeysymsEdiaeresis: number;
    const KeysymsIgrave: number;
    const KeysymsIacute: number;
    const KeysymsIcircumflex: number;
    const KeysymsIdiaeresis: number;
    const KeysymsETH: number;
    const KeysymsEth: number;
    const KeysymsNtilde: number;
    const KeysymsOgrave: number;
    const KeysymsOacute: number;
    const KeysymsOcircumflex: number;
    const KeysymsOtilde: number;
    const KeysymsOdiaeresis: number;
    const Keysymsmultiply: number;
    const KeysymsOslash: number;
    const KeysymsOoblique: number;
    const KeysymsUgrave: number;
    const KeysymsUacute: number;
    const KeysymsUcircumflex: number;
    const KeysymsUdiaeresis: number;
    const KeysymsYacute: number;
    const KeysymsTHORN: number;
    const KeysymsThorn: number;
    const Keysymsssharp: number;
    const Keysymsagrave: number;
    const Keysymsaacute: number;
    const Keysymsacircumflex: number;
    const Keysymsatilde: number;
    const Keysymsadiaeresis: number;
    const Keysymsaring: number;
    const Keysymsae: number;
    const Keysymsccedilla: number;
    const Keysymsegrave: number;
    const Keysymseacute: number;
    const Keysymsecircumflex: number;
    const Keysymsediaeresis: number;
    const Keysymsigrave: number;
    const Keysymsiacute: number;
    const Keysymsicircumflex: number;
    const Keysymsidiaeresis: number;
    const Keysymseth: number;
    const Keysymsntilde: number;
    const Keysymsograve: number;
    const Keysymsoacute: number;
    const Keysymsocircumflex: number;
    const Keysymsotilde: number;
    const Keysymsodiaeresis: number;
    const Keysymsdivision: number;
    const Keysymsoslash: number;
    const Keysymsooblique: number;
    const Keysymsugrave: number;
    const Keysymsuacute: number;
    const Keysymsucircumflex: number;
    const Keysymsudiaeresis: number;
    const Keysymsyacute: number;
    const Keysymsthorn: number;
    const Keysymsydiaeresis: number;
    const KeysymsAogonek: number;
    const Keysymsbreve: number;
    const KeysymsLstroke: number;
    const KeysymsLcaron: number;
    const KeysymsSacute: number;
    const KeysymsScaron: number;
    const KeysymsScedilla: number;
    const KeysymsTcaron: number;
    const KeysymsZacute: number;
    const KeysymsZcaron: number;
    const KeysymsZabovedot: number;
    const Keysymsaogonek: number;
    const Keysymsogonek: number;
    const Keysymslstroke: number;
    const Keysymslcaron: number;
    const Keysymssacute: number;
    const Keysymscaron: number;
    const Keysymsscaron: number;
    const Keysymsscedilla: number;
    const Keysymstcaron: number;
    const Keysymszacute: number;
    const Keysymsdoubleacute: number;
    const Keysymszcaron: number;
    const Keysymszabovedot: number;
    const KeysymsRacute: number;
    const KeysymsAbreve: number;
    const KeysymsLacute: number;
    const KeysymsCacute: number;
    const KeysymsCcaron: number;
    const KeysymsEogonek: number;
    const KeysymsEcaron: number;
    const KeysymsDcaron: number;
    const KeysymsDstroke: number;
    const KeysymsNacute: number;
    const KeysymsNcaron: number;
    const KeysymsOdoubleacute: number;
    const KeysymsRcaron: number;
    const KeysymsUring: number;
    const KeysymsUdoubleacute: number;
    const KeysymsTcedilla: number;
    const Keysymsracute: number;
    const Keysymsabreve: number;
    const Keysymslacute: number;
    const Keysymscacute: number;
    const Keysymsccaron: number;
    const Keysymseogonek: number;
    const Keysymsecaron: number;
    const Keysymsdcaron: number;
    const Keysymsdstroke: number;
    const Keysymsnacute: number;
    const Keysymsncaron: number;
    const Keysymsodoubleacute: number;
    const Keysymsrcaron: number;
    const Keysymsuring: number;
    const Keysymsudoubleacute: number;
    const Keysymstcedilla: number;
    const Keysymsabovedot: number;
    const KeysymsHstroke: number;
    const KeysymsHcircumflex: number;
    const KeysymsIabovedot: number;
    const KeysymsGbreve: number;
    const KeysymsJcircumflex: number;
    const Keysymshstroke: number;
    const Keysymshcircumflex: number;
    const Keysymsidotless: number;
    const Keysymsgbreve: number;
    const Keysymsjcircumflex: number;
    const KeysymsCabovedot: number;
    const KeysymsCcircumflex: number;
    const KeysymsGabovedot: number;
    const KeysymsGcircumflex: number;
    const KeysymsUbreve: number;
    const KeysymsScircumflex: number;
    const Keysymscabovedot: number;
    const Keysymsccircumflex: number;
    const Keysymsgabovedot: number;
    const Keysymsgcircumflex: number;
    const Keysymsubreve: number;
    const Keysymsscircumflex: number;
    const Keysymskra: number;
    const Keysymskappa: number;
    const KeysymsRcedilla: number;
    const KeysymsItilde: number;
    const KeysymsLcedilla: number;
    const KeysymsEmacron: number;
    const KeysymsGcedilla: number;
    const KeysymsTslash: number;
    const Keysymsrcedilla: number;
    const Keysymsitilde: number;
    const Keysymslcedilla: number;
    const Keysymsemacron: number;
    const Keysymsgcedilla: number;
    const Keysymstslash: number;
    const KeysymsENG: number;
    const Keysymseng: number;
    const KeysymsAmacron: number;
    const KeysymsIogonek: number;
    const KeysymsEabovedot: number;
    const KeysymsImacron: number;
    const KeysymsNcedilla: number;
    const KeysymsOmacron: number;
    const KeysymsKcedilla: number;
    const KeysymsUogonek: number;
    const KeysymsUtilde: number;
    const KeysymsUmacron: number;
    const Keysymsamacron: number;
    const Keysymsiogonek: number;
    const Keysymseabovedot: number;
    const Keysymsimacron: number;
    const Keysymsncedilla: number;
    const Keysymsomacron: number;
    const Keysymskcedilla: number;
    const Keysymsuogonek: number;
    const Keysymsutilde: number;
    const Keysymsumacron: number;
    const KeysymsWcircumflex: number;
    const Keysymswcircumflex: number;
    const KeysymsYcircumflex: number;
    const Keysymsycircumflex: number;
    const KeysymsBabovedot: number;
    const Keysymsbabovedot: number;
    const KeysymsDabovedot: number;
    const Keysymsdabovedot: number;
    const KeysymsFabovedot: number;
    const Keysymsfabovedot: number;
    const KeysymsMabovedot: number;
    const Keysymsmabovedot: number;
    const KeysymsPabovedot: number;
    const Keysymspabovedot: number;
    const KeysymsSabovedot: number;
    const Keysymssabovedot: number;
    const KeysymsTabovedot: number;
    const Keysymstabovedot: number;
    const KeysymsWgrave: number;
    const Keysymswgrave: number;
    const KeysymsWacute: number;
    const Keysymswacute: number;
    const KeysymsWdiaeresis: number;
    const Keysymswdiaeresis: number;
    const KeysymsYgrave: number;
    const Keysymsygrave: number;
    const KeysymsOE: number;
    const Keysymsoe: number;
    const KeysymsYdiaeresis: number;
    const Keysymsoverline: number;
    const Keysymskana_fullstop: number;
    const Keysymskana_openingbracket: number;
    const Keysymskana_closingbracket: number;
    const Keysymskana_comma: number;
    const Keysymskana_conjunctive: number;
    const Keysymskana_middledot: number;
    const Keysymskana_WO: number;
    const Keysymskana_a: number;
    const Keysymskana_i: number;
    const Keysymskana_u: number;
    const Keysymskana_e: number;
    const Keysymskana_o: number;
    const Keysymskana_ya: number;
    const Keysymskana_yu: number;
    const Keysymskana_yo: number;
    const Keysymskana_tsu: number;
    const Keysymskana_tu: number;
    const Keysymsprolongedsound: number;
    const Keysymskana_A: number;
    const Keysymskana_I: number;
    const Keysymskana_U: number;
    const Keysymskana_E: number;
    const Keysymskana_O: number;
    const Keysymskana_KA: number;
    const Keysymskana_KI: number;
    const Keysymskana_KU: number;
    const Keysymskana_KE: number;
    const Keysymskana_KO: number;
    const Keysymskana_SA: number;
    const Keysymskana_SHI: number;
    const Keysymskana_SU: number;
    const Keysymskana_SE: number;
    const Keysymskana_SO: number;
    const Keysymskana_TA: number;
    const Keysymskana_CHI: number;
    const Keysymskana_TI: number;
    const Keysymskana_TSU: number;
    const Keysymskana_TU: number;
    const Keysymskana_TE: number;
    const Keysymskana_TO: number;
    const Keysymskana_NA: number;
    const Keysymskana_NI: number;
    const Keysymskana_NU: number;
    const Keysymskana_NE: number;
    const Keysymskana_NO: number;
    const Keysymskana_HA: number;
    const Keysymskana_HI: number;
    const Keysymskana_FU: number;
    const Keysymskana_HU: number;
    const Keysymskana_HE: number;
    const Keysymskana_HO: number;
    const Keysymskana_MA: number;
    const Keysymskana_MI: number;
    const Keysymskana_MU: number;
    const Keysymskana_ME: number;
    const Keysymskana_MO: number;
    const Keysymskana_YA: number;
    const Keysymskana_YU: number;
    const Keysymskana_YO: number;
    const Keysymskana_RA: number;
    const Keysymskana_RI: number;
    const Keysymskana_RU: number;
    const Keysymskana_RE: number;
    const Keysymskana_RO: number;
    const Keysymskana_WA: number;
    const Keysymskana_N: number;
    const Keysymsvoicedsound: number;
    const Keysymssemivoicedsound: number;
    const Keysymskana_switch: number;
    const KeysymsFarsi_0: number;
    const KeysymsFarsi_1: number;
    const KeysymsFarsi_2: number;
    const KeysymsFarsi_3: number;
    const KeysymsFarsi_4: number;
    const KeysymsFarsi_5: number;
    const KeysymsFarsi_6: number;
    const KeysymsFarsi_7: number;
    const KeysymsFarsi_8: number;
    const KeysymsFarsi_9: number;
    const KeysymsArabic_percent: number;
    const KeysymsArabic_superscript_alef: number;
    const KeysymsArabic_tteh: number;
    const KeysymsArabic_peh: number;
    const KeysymsArabic_tcheh: number;
    const KeysymsArabic_ddal: number;
    const KeysymsArabic_rreh: number;
    const KeysymsArabic_comma: number;
    const KeysymsArabic_fullstop: number;
    const KeysymsArabic_0: number;
    const KeysymsArabic_1: number;
    const KeysymsArabic_2: number;
    const KeysymsArabic_3: number;
    const KeysymsArabic_4: number;
    const KeysymsArabic_5: number;
    const KeysymsArabic_6: number;
    const KeysymsArabic_7: number;
    const KeysymsArabic_8: number;
    const KeysymsArabic_9: number;
    const KeysymsArabic_semicolon: number;
    const KeysymsArabic_question_mark: number;
    const KeysymsArabic_hamza: number;
    const KeysymsArabic_maddaonalef: number;
    const KeysymsArabic_hamzaonalef: number;
    const KeysymsArabic_hamzaonwaw: number;
    const KeysymsArabic_hamzaunderalef: number;
    const KeysymsArabic_hamzaonyeh: number;
    const KeysymsArabic_alef: number;
    const KeysymsArabic_beh: number;
    const KeysymsArabic_tehmarbuta: number;
    const KeysymsArabic_teh: number;
    const KeysymsArabic_theh: number;
    const KeysymsArabic_jeem: number;
    const KeysymsArabic_hah: number;
    const KeysymsArabic_khah: number;
    const KeysymsArabic_dal: number;
    const KeysymsArabic_thal: number;
    const KeysymsArabic_ra: number;
    const KeysymsArabic_zain: number;
    const KeysymsArabic_seen: number;
    const KeysymsArabic_sheen: number;
    const KeysymsArabic_sad: number;
    const KeysymsArabic_dad: number;
    const KeysymsArabic_tah: number;
    const KeysymsArabic_zah: number;
    const KeysymsArabic_ain: number;
    const KeysymsArabic_ghain: number;
    const KeysymsArabic_tatweel: number;
    const KeysymsArabic_feh: number;
    const KeysymsArabic_qaf: number;
    const KeysymsArabic_kaf: number;
    const KeysymsArabic_lam: number;
    const KeysymsArabic_meem: number;
    const KeysymsArabic_noon: number;
    const KeysymsArabic_ha: number;
    const KeysymsArabic_heh: number;
    const KeysymsArabic_waw: number;
    const KeysymsArabic_alefmaksura: number;
    const KeysymsArabic_yeh: number;
    const KeysymsArabic_fathatan: number;
    const KeysymsArabic_dammatan: number;
    const KeysymsArabic_kasratan: number;
    const KeysymsArabic_fatha: number;
    const KeysymsArabic_damma: number;
    const KeysymsArabic_kasra: number;
    const KeysymsArabic_shadda: number;
    const KeysymsArabic_sukun: number;
    const KeysymsArabic_madda_above: number;
    const KeysymsArabic_hamza_above: number;
    const KeysymsArabic_hamza_below: number;
    const KeysymsArabic_jeh: number;
    const KeysymsArabic_veh: number;
    const KeysymsArabic_keheh: number;
    const KeysymsArabic_gaf: number;
    const KeysymsArabic_noon_ghunna: number;
    const KeysymsArabic_heh_doachashmee: number;
    const KeysymsFarsi_yeh: number;
    const KeysymsArabic_farsi_yeh: number;
    const KeysymsArabic_yeh_baree: number;
    const KeysymsArabic_heh_goal: number;
    const KeysymsArabic_switch: number;
    const KeysymsCyrillic_GHE_bar: number;
    const KeysymsCyrillic_ghe_bar: number;
    const KeysymsCyrillic_ZHE_descender: number;
    const KeysymsCyrillic_zhe_descender: number;
    const KeysymsCyrillic_KA_descender: number;
    const KeysymsCyrillic_ka_descender: number;
    const KeysymsCyrillic_KA_vertstroke: number;
    const KeysymsCyrillic_ka_vertstroke: number;
    const KeysymsCyrillic_EN_descender: number;
    const KeysymsCyrillic_en_descender: number;
    const KeysymsCyrillic_U_straight: number;
    const KeysymsCyrillic_u_straight: number;
    const KeysymsCyrillic_U_straight_bar: number;
    const KeysymsCyrillic_u_straight_bar: number;
    const KeysymsCyrillic_HA_descender: number;
    const KeysymsCyrillic_ha_descender: number;
    const KeysymsCyrillic_CHE_descender: number;
    const KeysymsCyrillic_che_descender: number;
    const KeysymsCyrillic_CHE_vertstroke: number;
    const KeysymsCyrillic_che_vertstroke: number;
    const KeysymsCyrillic_SHHA: number;
    const KeysymsCyrillic_shha: number;
    const KeysymsCyrillic_SCHWA: number;
    const KeysymsCyrillic_schwa: number;
    const KeysymsCyrillic_I_macron: number;
    const KeysymsCyrillic_i_macron: number;
    const KeysymsCyrillic_O_bar: number;
    const KeysymsCyrillic_o_bar: number;
    const KeysymsCyrillic_U_macron: number;
    const KeysymsCyrillic_u_macron: number;
    const KeysymsSerbian_dje: number;
    const KeysymsMacedonia_gje: number;
    const KeysymsCyrillic_io: number;
    const KeysymsUkrainian_ie: number;
    const KeysymsUkranian_je: number;
    const KeysymsMacedonia_dse: number;
    const KeysymsUkrainian_i: number;
    const KeysymsUkranian_i: number;
    const KeysymsUkrainian_yi: number;
    const KeysymsUkranian_yi: number;
    const KeysymsCyrillic_je: number;
    const KeysymsSerbian_je: number;
    const KeysymsCyrillic_lje: number;
    const KeysymsSerbian_lje: number;
    const KeysymsCyrillic_nje: number;
    const KeysymsSerbian_nje: number;
    const KeysymsSerbian_tshe: number;
    const KeysymsMacedonia_kje: number;
    const KeysymsUkrainian_ghe_with_upturn: number;
    const KeysymsByelorussian_shortu: number;
    const KeysymsCyrillic_dzhe: number;
    const KeysymsSerbian_dze: number;
    const Keysymsnumerosign: number;
    const KeysymsSerbian_DJE: number;
    const KeysymsMacedonia_GJE: number;
    const KeysymsCyrillic_IO: number;
    const KeysymsUkrainian_IE: number;
    const KeysymsUkranian_JE: number;
    const KeysymsMacedonia_DSE: number;
    const KeysymsUkrainian_I: number;
    const KeysymsUkranian_I: number;
    const KeysymsUkrainian_YI: number;
    const KeysymsUkranian_YI: number;
    const KeysymsCyrillic_JE: number;
    const KeysymsSerbian_JE: number;
    const KeysymsCyrillic_LJE: number;
    const KeysymsSerbian_LJE: number;
    const KeysymsCyrillic_NJE: number;
    const KeysymsSerbian_NJE: number;
    const KeysymsSerbian_TSHE: number;
    const KeysymsMacedonia_KJE: number;
    const KeysymsUkrainian_GHE_WITH_UPTURN: number;
    const KeysymsByelorussian_SHORTU: number;
    const KeysymsCyrillic_DZHE: number;
    const KeysymsSerbian_DZE: number;
    const KeysymsCyrillic_yu: number;
    const KeysymsCyrillic_a: number;
    const KeysymsCyrillic_be: number;
    const KeysymsCyrillic_tse: number;
    const KeysymsCyrillic_de: number;
    const KeysymsCyrillic_ie: number;
    const KeysymsCyrillic_ef: number;
    const KeysymsCyrillic_ghe: number;
    const KeysymsCyrillic_ha: number;
    const KeysymsCyrillic_i: number;
    const KeysymsCyrillic_shorti: number;
    const KeysymsCyrillic_ka: number;
    const KeysymsCyrillic_el: number;
    const KeysymsCyrillic_em: number;
    const KeysymsCyrillic_en: number;
    const KeysymsCyrillic_o: number;
    const KeysymsCyrillic_pe: number;
    const KeysymsCyrillic_ya: number;
    const KeysymsCyrillic_er: number;
    const KeysymsCyrillic_es: number;
    const KeysymsCyrillic_te: number;
    const KeysymsCyrillic_u: number;
    const KeysymsCyrillic_zhe: number;
    const KeysymsCyrillic_ve: number;
    const KeysymsCyrillic_softsign: number;
    const KeysymsCyrillic_yeru: number;
    const KeysymsCyrillic_ze: number;
    const KeysymsCyrillic_sha: number;
    const KeysymsCyrillic_e: number;
    const KeysymsCyrillic_shcha: number;
    const KeysymsCyrillic_che: number;
    const KeysymsCyrillic_hardsign: number;
    const KeysymsCyrillic_YU: number;
    const KeysymsCyrillic_A: number;
    const KeysymsCyrillic_BE: number;
    const KeysymsCyrillic_TSE: number;
    const KeysymsCyrillic_DE: number;
    const KeysymsCyrillic_IE: number;
    const KeysymsCyrillic_EF: number;
    const KeysymsCyrillic_GHE: number;
    const KeysymsCyrillic_HA: number;
    const KeysymsCyrillic_I: number;
    const KeysymsCyrillic_SHORTI: number;
    const KeysymsCyrillic_KA: number;
    const KeysymsCyrillic_EL: number;
    const KeysymsCyrillic_EM: number;
    const KeysymsCyrillic_EN: number;
    const KeysymsCyrillic_O: number;
    const KeysymsCyrillic_PE: number;
    const KeysymsCyrillic_YA: number;
    const KeysymsCyrillic_ER: number;
    const KeysymsCyrillic_ES: number;
    const KeysymsCyrillic_TE: number;
    const KeysymsCyrillic_U: number;
    const KeysymsCyrillic_ZHE: number;
    const KeysymsCyrillic_VE: number;
    const KeysymsCyrillic_SOFTSIGN: number;
    const KeysymsCyrillic_YERU: number;
    const KeysymsCyrillic_ZE: number;
    const KeysymsCyrillic_SHA: number;
    const KeysymsCyrillic_E: number;
    const KeysymsCyrillic_SHCHA: number;
    const KeysymsCyrillic_CHE: number;
    const KeysymsCyrillic_HARDSIGN: number;
    const KeysymsGreek_ALPHAaccent: number;
    const KeysymsGreek_EPSILONaccent: number;
    const KeysymsGreek_ETAaccent: number;
    const KeysymsGreek_IOTAaccent: number;
    const KeysymsGreek_IOTAdieresis: number;
    const KeysymsGreek_IOTAdiaeresis: number;
    const KeysymsGreek_OMICRONaccent: number;
    const KeysymsGreek_UPSILONaccent: number;
    const KeysymsGreek_UPSILONdieresis: number;
    const KeysymsGreek_OMEGAaccent: number;
    const KeysymsGreek_accentdieresis: number;
    const KeysymsGreek_horizbar: number;
    const KeysymsGreek_alphaaccent: number;
    const KeysymsGreek_epsilonaccent: number;
    const KeysymsGreek_etaaccent: number;
    const KeysymsGreek_iotaaccent: number;
    const KeysymsGreek_iotadieresis: number;
    const KeysymsGreek_iotaaccentdieresis: number;
    const KeysymsGreek_omicronaccent: number;
    const KeysymsGreek_upsilonaccent: number;
    const KeysymsGreek_upsilondieresis: number;
    const KeysymsGreek_upsilonaccentdieresis: number;
    const KeysymsGreek_omegaaccent: number;
    const KeysymsGreek_ALPHA: number;
    const KeysymsGreek_BETA: number;
    const KeysymsGreek_GAMMA: number;
    const KeysymsGreek_DELTA: number;
    const KeysymsGreek_EPSILON: number;
    const KeysymsGreek_ZETA: number;
    const KeysymsGreek_ETA: number;
    const KeysymsGreek_THETA: number;
    const KeysymsGreek_IOTA: number;
    const KeysymsGreek_KAPPA: number;
    const KeysymsGreek_LAMDA: number;
    const KeysymsGreek_LAMBDA: number;
    const KeysymsGreek_MU: number;
    const KeysymsGreek_NU: number;
    const KeysymsGreek_XI: number;
    const KeysymsGreek_OMICRON: number;
    const KeysymsGreek_PI: number;
    const KeysymsGreek_RHO: number;
    const KeysymsGreek_SIGMA: number;
    const KeysymsGreek_TAU: number;
    const KeysymsGreek_UPSILON: number;
    const KeysymsGreek_PHI: number;
    const KeysymsGreek_CHI: number;
    const KeysymsGreek_PSI: number;
    const KeysymsGreek_OMEGA: number;
    const KeysymsGreek_alpha: number;
    const KeysymsGreek_beta: number;
    const KeysymsGreek_gamma: number;
    const KeysymsGreek_delta: number;
    const KeysymsGreek_epsilon: number;
    const KeysymsGreek_zeta: number;
    const KeysymsGreek_eta: number;
    const KeysymsGreek_theta: number;
    const KeysymsGreek_iota: number;
    const KeysymsGreek_kappa: number;
    const KeysymsGreek_lamda: number;
    const KeysymsGreek_lambda: number;
    const KeysymsGreek_mu: number;
    const KeysymsGreek_nu: number;
    const KeysymsGreek_xi: number;
    const KeysymsGreek_omicron: number;
    const KeysymsGreek_pi: number;
    const KeysymsGreek_rho: number;
    const KeysymsGreek_sigma: number;
    const KeysymsGreek_finalsmallsigma: number;
    const KeysymsGreek_tau: number;
    const KeysymsGreek_upsilon: number;
    const KeysymsGreek_phi: number;
    const KeysymsGreek_chi: number;
    const KeysymsGreek_psi: number;
    const KeysymsGreek_omega: number;
    const KeysymsGreek_switch: number;
    const Keysymsleftradical: number;
    const Keysymstopleftradical: number;
    const Keysymshorizconnector: number;
    const Keysymstopintegral: number;
    const Keysymsbotintegral: number;
    const Keysymsvertconnector: number;
    const Keysymstopleftsqbracket: number;
    const Keysymsbotleftsqbracket: number;
    const Keysymstoprightsqbracket: number;
    const Keysymsbotrightsqbracket: number;
    const Keysymstopleftparens: number;
    const Keysymsbotleftparens: number;
    const Keysymstoprightparens: number;
    const Keysymsbotrightparens: number;
    const Keysymsleftmiddlecurlybrace: number;
    const Keysymsrightmiddlecurlybrace: number;
    const Keysymstopleftsummation: number;
    const Keysymsbotleftsummation: number;
    const Keysymstopvertsummationconnector: number;
    const Keysymsbotvertsummationconnector: number;
    const Keysymstoprightsummation: number;
    const Keysymsbotrightsummation: number;
    const Keysymsrightmiddlesummation: number;
    const Keysymslessthanequal: number;
    const Keysymsnotequal: number;
    const Keysymsgreaterthanequal: number;
    const Keysymsintegral: number;
    const Keysymstherefore: number;
    const Keysymsvariation: number;
    const Keysymsinfinity: number;
    const Keysymsnabla: number;
    const Keysymsapproximate: number;
    const Keysymssimilarequal: number;
    const Keysymsifonlyif: number;
    const Keysymsimplies: number;
    const Keysymsidentical: number;
    const Keysymsradical: number;
    const Keysymsincludedin: number;
    const Keysymsincludes: number;
    const Keysymsintersection: number;
    const Keysymsunion: number;
    const Keysymslogicaland: number;
    const Keysymslogicalor: number;
    const Keysymspartialderivative: number;
    const Keysymsfunction: number;
    const Keysymsleftarrow: number;
    const Keysymsuparrow: number;
    const Keysymsrightarrow: number;
    const Keysymsdownarrow: number;
    const Keysymsblank: number;
    const Keysymssoliddiamond: number;
    const Keysymscheckerboard: number;
    const Keysymsht: number;
    const Keysymsff: number;
    const Keysymscr: number;
    const Keysymslf: number;
    const Keysymsnl: number;
    const Keysymsvt: number;
    const Keysymslowrightcorner: number;
    const Keysymsuprightcorner: number;
    const Keysymsupleftcorner: number;
    const Keysymslowleftcorner: number;
    const Keysymscrossinglines: number;
    const Keysymshorizlinescan1: number;
    const Keysymshorizlinescan3: number;
    const Keysymshorizlinescan5: number;
    const Keysymshorizlinescan7: number;
    const Keysymshorizlinescan9: number;
    const Keysymsleftt: number;
    const Keysymsrightt: number;
    const Keysymsbott: number;
    const Keysymstopt: number;
    const Keysymsvertbar: number;
    const Keysymsemspace: number;
    const Keysymsenspace: number;
    const Keysymsem3space: number;
    const Keysymsem4space: number;
    const Keysymsdigitspace: number;
    const Keysymspunctspace: number;
    const Keysymsthinspace: number;
    const Keysymshairspace: number;
    const Keysymsemdash: number;
    const Keysymsendash: number;
    const Keysymssignifblank: number;
    const Keysymsellipsis: number;
    const Keysymsdoubbaselinedot: number;
    const Keysymsonethird: number;
    const Keysymstwothirds: number;
    const Keysymsonefifth: number;
    const Keysymstwofifths: number;
    const Keysymsthreefifths: number;
    const Keysymsfourfifths: number;
    const Keysymsonesixth: number;
    const Keysymsfivesixths: number;
    const Keysymscareof: number;
    const Keysymsfigdash: number;
    const Keysymsleftanglebracket: number;
    const Keysymsdecimalpoint: number;
    const Keysymsrightanglebracket: number;
    const Keysymsmarker: number;
    const Keysymsoneeighth: number;
    const Keysymsthreeeighths: number;
    const Keysymsfiveeighths: number;
    const Keysymsseveneighths: number;
    const Keysymstrademark: number;
    const Keysymssignaturemark: number;
    const Keysymstrademarkincircle: number;
    const Keysymsleftopentriangle: number;
    const Keysymsrightopentriangle: number;
    const Keysymsemopencircle: number;
    const Keysymsemopenrectangle: number;
    const Keysymsleftsinglequotemark: number;
    const Keysymsrightsinglequotemark: number;
    const Keysymsleftdoublequotemark: number;
    const Keysymsrightdoublequotemark: number;
    const Keysymsprescription: number;
    const Keysymsminutes: number;
    const Keysymsseconds: number;
    const Keysymslatincross: number;
    const Keysymshexagram: number;
    const Keysymsfilledrectbullet: number;
    const Keysymsfilledlefttribullet: number;
    const Keysymsfilledrighttribullet: number;
    const Keysymsemfilledcircle: number;
    const Keysymsemfilledrect: number;
    const Keysymsenopencircbullet: number;
    const Keysymsenopensquarebullet: number;
    const Keysymsopenrectbullet: number;
    const Keysymsopentribulletup: number;
    const Keysymsopentribulletdown: number;
    const Keysymsopenstar: number;
    const Keysymsenfilledcircbullet: number;
    const Keysymsenfilledsqbullet: number;
    const Keysymsfilledtribulletup: number;
    const Keysymsfilledtribulletdown: number;
    const Keysymsleftpointer: number;
    const Keysymsrightpointer: number;
    const Keysymsclub: number;
    const Keysymsdiamond: number;
    const Keysymsheart: number;
    const Keysymsmaltesecross: number;
    const Keysymsdagger: number;
    const Keysymsdoubledagger: number;
    const Keysymscheckmark: number;
    const Keysymsballotcross: number;
    const Keysymsmusicalsharp: number;
    const Keysymsmusicalflat: number;
    const Keysymsmalesymbol: number;
    const Keysymsfemalesymbol: number;
    const Keysymstelephone: number;
    const Keysymstelephonerecorder: number;
    const Keysymsphonographcopyright: number;
    const Keysymscaret: number;
    const Keysymssinglelowquotemark: number;
    const Keysymsdoublelowquotemark: number;
    const Keysymscursor: number;
    const Keysymsleftcaret: number;
    const Keysymsrightcaret: number;
    const Keysymsdowncaret: number;
    const Keysymsupcaret: number;
    const Keysymsoverbar: number;
    const Keysymsdowntack: number;
    const Keysymsupshoe: number;
    const Keysymsdownstile: number;
    const Keysymsunderbar: number;
    const Keysymsjot: number;
    const Keysymsquad: number;
    const Keysymsuptack: number;
    const Keysymscircle: number;
    const Keysymsupstile: number;
    const Keysymsdownshoe: number;
    const Keysymsrightshoe: number;
    const Keysymsleftshoe: number;
    const Keysymslefttack: number;
    const Keysymsrighttack: number;
    const Keysymshebrew_doublelowline: number;
    const Keysymshebrew_aleph: number;
    const Keysymshebrew_bet: number;
    const Keysymshebrew_beth: number;
    const Keysymshebrew_gimel: number;
    const Keysymshebrew_gimmel: number;
    const Keysymshebrew_dalet: number;
    const Keysymshebrew_daleth: number;
    const Keysymshebrew_he: number;
    const Keysymshebrew_waw: number;
    const Keysymshebrew_zain: number;
    const Keysymshebrew_zayin: number;
    const Keysymshebrew_chet: number;
    const Keysymshebrew_het: number;
    const Keysymshebrew_tet: number;
    const Keysymshebrew_teth: number;
    const Keysymshebrew_yod: number;
    const Keysymshebrew_finalkaph: number;
    const Keysymshebrew_kaph: number;
    const Keysymshebrew_lamed: number;
    const Keysymshebrew_finalmem: number;
    const Keysymshebrew_mem: number;
    const Keysymshebrew_finalnun: number;
    const Keysymshebrew_nun: number;
    const Keysymshebrew_samech: number;
    const Keysymshebrew_samekh: number;
    const Keysymshebrew_ayin: number;
    const Keysymshebrew_finalpe: number;
    const Keysymshebrew_pe: number;
    const Keysymshebrew_finalzade: number;
    const Keysymshebrew_finalzadi: number;
    const Keysymshebrew_zade: number;
    const Keysymshebrew_zadi: number;
    const Keysymshebrew_qoph: number;
    const Keysymshebrew_kuf: number;
    const Keysymshebrew_resh: number;
    const Keysymshebrew_shin: number;
    const Keysymshebrew_taw: number;
    const Keysymshebrew_taf: number;
    const KeysymsHebrew_switch: number;
    const KeysymsThai_kokai: number;
    const KeysymsThai_khokhai: number;
    const KeysymsThai_khokhuat: number;
    const KeysymsThai_khokhwai: number;
    const KeysymsThai_khokhon: number;
    const KeysymsThai_khorakhang: number;
    const KeysymsThai_ngongu: number;
    const KeysymsThai_chochan: number;
    const KeysymsThai_choching: number;
    const KeysymsThai_chochang: number;
    const KeysymsThai_soso: number;
    const KeysymsThai_chochoe: number;
    const KeysymsThai_yoying: number;
    const KeysymsThai_dochada: number;
    const KeysymsThai_topatak: number;
    const KeysymsThai_thothan: number;
    const KeysymsThai_thonangmontho: number;
    const KeysymsThai_thophuthao: number;
    const KeysymsThai_nonen: number;
    const KeysymsThai_dodek: number;
    const KeysymsThai_totao: number;
    const KeysymsThai_thothung: number;
    const KeysymsThai_thothahan: number;
    const KeysymsThai_thothong: number;
    const KeysymsThai_nonu: number;
    const KeysymsThai_bobaimai: number;
    const KeysymsThai_popla: number;
    const KeysymsThai_phophung: number;
    const KeysymsThai_fofa: number;
    const KeysymsThai_phophan: number;
    const KeysymsThai_fofan: number;
    const KeysymsThai_phosamphao: number;
    const KeysymsThai_moma: number;
    const KeysymsThai_yoyak: number;
    const KeysymsThai_rorua: number;
    const KeysymsThai_ru: number;
    const KeysymsThai_loling: number;
    const KeysymsThai_lu: number;
    const KeysymsThai_wowaen: number;
    const KeysymsThai_sosala: number;
    const KeysymsThai_sorusi: number;
    const KeysymsThai_sosua: number;
    const KeysymsThai_hohip: number;
    const KeysymsThai_lochula: number;
    const KeysymsThai_oang: number;
    const KeysymsThai_honokhuk: number;
    const KeysymsThai_paiyannoi: number;
    const KeysymsThai_saraa: number;
    const KeysymsThai_maihanakat: number;
    const KeysymsThai_saraaa: number;
    const KeysymsThai_saraam: number;
    const KeysymsThai_sarai: number;
    const KeysymsThai_saraii: number;
    const KeysymsThai_saraue: number;
    const KeysymsThai_sarauee: number;
    const KeysymsThai_sarau: number;
    const KeysymsThai_sarauu: number;
    const KeysymsThai_phinthu: number;
    const KeysymsThai_maihanakat_maitho: number;
    const KeysymsThai_baht: number;
    const KeysymsThai_sarae: number;
    const KeysymsThai_saraae: number;
    const KeysymsThai_sarao: number;
    const KeysymsThai_saraaimaimuan: number;
    const KeysymsThai_saraaimaimalai: number;
    const KeysymsThai_lakkhangyao: number;
    const KeysymsThai_maiyamok: number;
    const KeysymsThai_maitaikhu: number;
    const KeysymsThai_maiek: number;
    const KeysymsThai_maitho: number;
    const KeysymsThai_maitri: number;
    const KeysymsThai_maichattawa: number;
    const KeysymsThai_thanthakhat: number;
    const KeysymsThai_nikhahit: number;
    const KeysymsThai_leksun: number;
    const KeysymsThai_leknung: number;
    const KeysymsThai_leksong: number;
    const KeysymsThai_leksam: number;
    const KeysymsThai_leksi: number;
    const KeysymsThai_lekha: number;
    const KeysymsThai_lekhok: number;
    const KeysymsThai_lekchet: number;
    const KeysymsThai_lekpaet: number;
    const KeysymsThai_lekkao: number;
    const KeysymsHangul: number;
    const KeysymsHangul_Start: number;
    const KeysymsHangul_End: number;
    const KeysymsHangul_Hanja: number;
    const KeysymsHangul_Jamo: number;
    const KeysymsHangul_Romaja: number;
    const KeysymsHangul_Codeinput: number;
    const KeysymsHangul_Jeonja: number;
    const KeysymsHangul_Banja: number;
    const KeysymsHangul_PreHanja: number;
    const KeysymsHangul_PostHanja: number;
    const KeysymsHangul_SingleCandidate: number;
    const KeysymsHangul_MultipleCandidate: number;
    const KeysymsHangul_PreviousCandidate: number;
    const KeysymsHangul_Special: number;
    const KeysymsHangul_switch: number;
    const KeysymsHangul_Kiyeog: number;
    const KeysymsHangul_SsangKiyeog: number;
    const KeysymsHangul_KiyeogSios: number;
    const KeysymsHangul_Nieun: number;
    const KeysymsHangul_NieunJieuj: number;
    const KeysymsHangul_NieunHieuh: number;
    const KeysymsHangul_Dikeud: number;
    const KeysymsHangul_SsangDikeud: number;
    const KeysymsHangul_Rieul: number;
    const KeysymsHangul_RieulKiyeog: number;
    const KeysymsHangul_RieulMieum: number;
    const KeysymsHangul_RieulPieub: number;
    const KeysymsHangul_RieulSios: number;
    const KeysymsHangul_RieulTieut: number;
    const KeysymsHangul_RieulPhieuf: number;
    const KeysymsHangul_RieulHieuh: number;
    const KeysymsHangul_Mieum: number;
    const KeysymsHangul_Pieub: number;
    const KeysymsHangul_SsangPieub: number;
    const KeysymsHangul_PieubSios: number;
    const KeysymsHangul_Sios: number;
    const KeysymsHangul_SsangSios: number;
    const KeysymsHangul_Ieung: number;
    const KeysymsHangul_Jieuj: number;
    const KeysymsHangul_SsangJieuj: number;
    const KeysymsHangul_Cieuc: number;
    const KeysymsHangul_Khieuq: number;
    const KeysymsHangul_Tieut: number;
    const KeysymsHangul_Phieuf: number;
    const KeysymsHangul_Hieuh: number;
    const KeysymsHangul_A: number;
    const KeysymsHangul_AE: number;
    const KeysymsHangul_YA: number;
    const KeysymsHangul_YAE: number;
    const KeysymsHangul_EO: number;
    const KeysymsHangul_E: number;
    const KeysymsHangul_YEO: number;
    const KeysymsHangul_YE: number;
    const KeysymsHangul_O: number;
    const KeysymsHangul_WA: number;
    const KeysymsHangul_WAE: number;
    const KeysymsHangul_OE: number;
    const KeysymsHangul_YO: number;
    const KeysymsHangul_U: number;
    const KeysymsHangul_WEO: number;
    const KeysymsHangul_WE: number;
    const KeysymsHangul_WI: number;
    const KeysymsHangul_YU: number;
    const KeysymsHangul_EU: number;
    const KeysymsHangul_YI: number;
    const KeysymsHangul_I: number;
    const KeysymsHangul_J_Kiyeog: number;
    const KeysymsHangul_J_SsangKiyeog: number;
    const KeysymsHangul_J_KiyeogSios: number;
    const KeysymsHangul_J_Nieun: number;
    const KeysymsHangul_J_NieunJieuj: number;
    const KeysymsHangul_J_NieunHieuh: number;
    const KeysymsHangul_J_Dikeud: number;
    const KeysymsHangul_J_Rieul: number;
    const KeysymsHangul_J_RieulKiyeog: number;
    const KeysymsHangul_J_RieulMieum: number;
    const KeysymsHangul_J_RieulPieub: number;
    const KeysymsHangul_J_RieulSios: number;
    const KeysymsHangul_J_RieulTieut: number;
    const KeysymsHangul_J_RieulPhieuf: number;
    const KeysymsHangul_J_RieulHieuh: number;
    const KeysymsHangul_J_Mieum: number;
    const KeysymsHangul_J_Pieub: number;
    const KeysymsHangul_J_PieubSios: number;
    const KeysymsHangul_J_Sios: number;
    const KeysymsHangul_J_SsangSios: number;
    const KeysymsHangul_J_Ieung: number;
    const KeysymsHangul_J_Jieuj: number;
    const KeysymsHangul_J_Cieuc: number;
    const KeysymsHangul_J_Khieuq: number;
    const KeysymsHangul_J_Tieut: number;
    const KeysymsHangul_J_Phieuf: number;
    const KeysymsHangul_J_Hieuh: number;
    const KeysymsHangul_RieulYeorinHieuh: number;
    const KeysymsHangul_SunkyeongeumMieum: number;
    const KeysymsHangul_SunkyeongeumPieub: number;
    const KeysymsHangul_PanSios: number;
    const KeysymsHangul_KkogjiDalrinIeung: number;
    const KeysymsHangul_SunkyeongeumPhieuf: number;
    const KeysymsHangul_YeorinHieuh: number;
    const KeysymsHangul_AraeA: number;
    const KeysymsHangul_AraeAE: number;
    const KeysymsHangul_J_PanSios: number;
    const KeysymsHangul_J_KkogjiDalrinIeung: number;
    const KeysymsHangul_J_YeorinHieuh: number;
    const KeysymsKorean_Won: number;
    const KeysymsArmenian_ligature_ew: number;
    const KeysymsArmenian_full_stop: number;
    const KeysymsArmenian_verjaket: number;
    const KeysymsArmenian_separation_mark: number;
    const KeysymsArmenian_but: number;
    const KeysymsArmenian_hyphen: number;
    const KeysymsArmenian_yentamna: number;
    const KeysymsArmenian_exclam: number;
    const KeysymsArmenian_amanak: number;
    const KeysymsArmenian_accent: number;
    const KeysymsArmenian_shesht: number;
    const KeysymsArmenian_question: number;
    const KeysymsArmenian_paruyk: number;
    const KeysymsArmenian_AYB: number;
    const KeysymsArmenian_ayb: number;
    const KeysymsArmenian_BEN: number;
    const KeysymsArmenian_ben: number;
    const KeysymsArmenian_GIM: number;
    const KeysymsArmenian_gim: number;
    const KeysymsArmenian_DA: number;
    const KeysymsArmenian_da: number;
    const KeysymsArmenian_YECH: number;
    const KeysymsArmenian_yech: number;
    const KeysymsArmenian_ZA: number;
    const KeysymsArmenian_za: number;
    const KeysymsArmenian_E: number;
    const KeysymsArmenian_e: number;
    const KeysymsArmenian_AT: number;
    const KeysymsArmenian_at: number;
    const KeysymsArmenian_TO: number;
    const KeysymsArmenian_to: number;
    const KeysymsArmenian_ZHE: number;
    const KeysymsArmenian_zhe: number;
    const KeysymsArmenian_INI: number;
    const KeysymsArmenian_ini: number;
    const KeysymsArmenian_LYUN: number;
    const KeysymsArmenian_lyun: number;
    const KeysymsArmenian_KHE: number;
    const KeysymsArmenian_khe: number;
    const KeysymsArmenian_TSA: number;
    const KeysymsArmenian_tsa: number;
    const KeysymsArmenian_KEN: number;
    const KeysymsArmenian_ken: number;
    const KeysymsArmenian_HO: number;
    const KeysymsArmenian_ho: number;
    const KeysymsArmenian_DZA: number;
    const KeysymsArmenian_dza: number;
    const KeysymsArmenian_GHAT: number;
    const KeysymsArmenian_ghat: number;
    const KeysymsArmenian_TCHE: number;
    const KeysymsArmenian_tche: number;
    const KeysymsArmenian_MEN: number;
    const KeysymsArmenian_men: number;
    const KeysymsArmenian_HI: number;
    const KeysymsArmenian_hi: number;
    const KeysymsArmenian_NU: number;
    const KeysymsArmenian_nu: number;
    const KeysymsArmenian_SHA: number;
    const KeysymsArmenian_sha: number;
    const KeysymsArmenian_VO: number;
    const KeysymsArmenian_vo: number;
    const KeysymsArmenian_CHA: number;
    const KeysymsArmenian_cha: number;
    const KeysymsArmenian_PE: number;
    const KeysymsArmenian_pe: number;
    const KeysymsArmenian_JE: number;
    const KeysymsArmenian_je: number;
    const KeysymsArmenian_RA: number;
    const KeysymsArmenian_ra: number;
    const KeysymsArmenian_SE: number;
    const KeysymsArmenian_se: number;
    const KeysymsArmenian_VEV: number;
    const KeysymsArmenian_vev: number;
    const KeysymsArmenian_TYUN: number;
    const KeysymsArmenian_tyun: number;
    const KeysymsArmenian_RE: number;
    const KeysymsArmenian_re: number;
    const KeysymsArmenian_TSO: number;
    const KeysymsArmenian_tso: number;
    const KeysymsArmenian_VYUN: number;
    const KeysymsArmenian_vyun: number;
    const KeysymsArmenian_PYUR: number;
    const KeysymsArmenian_pyur: number;
    const KeysymsArmenian_KE: number;
    const KeysymsArmenian_ke: number;
    const KeysymsArmenian_O: number;
    const KeysymsArmenian_o: number;
    const KeysymsArmenian_FE: number;
    const KeysymsArmenian_fe: number;
    const KeysymsArmenian_apostrophe: number;
    const KeysymsGeorgian_an: number;
    const KeysymsGeorgian_ban: number;
    const KeysymsGeorgian_gan: number;
    const KeysymsGeorgian_don: number;
    const KeysymsGeorgian_en: number;
    const KeysymsGeorgian_vin: number;
    const KeysymsGeorgian_zen: number;
    const KeysymsGeorgian_tan: number;
    const KeysymsGeorgian_in: number;
    const KeysymsGeorgian_kan: number;
    const KeysymsGeorgian_las: number;
    const KeysymsGeorgian_man: number;
    const KeysymsGeorgian_nar: number;
    const KeysymsGeorgian_on: number;
    const KeysymsGeorgian_par: number;
    const KeysymsGeorgian_zhar: number;
    const KeysymsGeorgian_rae: number;
    const KeysymsGeorgian_san: number;
    const KeysymsGeorgian_tar: number;
    const KeysymsGeorgian_un: number;
    const KeysymsGeorgian_phar: number;
    const KeysymsGeorgian_khar: number;
    const KeysymsGeorgian_ghan: number;
    const KeysymsGeorgian_qar: number;
    const KeysymsGeorgian_shin: number;
    const KeysymsGeorgian_chin: number;
    const KeysymsGeorgian_can: number;
    const KeysymsGeorgian_jil: number;
    const KeysymsGeorgian_cil: number;
    const KeysymsGeorgian_char: number;
    const KeysymsGeorgian_xan: number;
    const KeysymsGeorgian_jhan: number;
    const KeysymsGeorgian_hae: number;
    const KeysymsGeorgian_he: number;
    const KeysymsGeorgian_hie: number;
    const KeysymsGeorgian_we: number;
    const KeysymsGeorgian_har: number;
    const KeysymsGeorgian_hoe: number;
    const KeysymsGeorgian_fi: number;
    const KeysymsXabovedot: number;
    const KeysymsIbreve: number;
    const KeysymsZstroke: number;
    const KeysymsGcaron: number;
    const KeysymsOcaron: number;
    const KeysymsObarred: number;
    const Keysymsxabovedot: number;
    const Keysymsibreve: number;
    const Keysymszstroke: number;
    const Keysymsgcaron: number;
    const Keysymsocaron: number;
    const Keysymsobarred: number;
    const KeysymsSCHWA: number;
    const Keysymsschwa: number;
    const KeysymsLbelowdot: number;
    const Keysymslbelowdot: number;
    const KeysymsAbelowdot: number;
    const Keysymsabelowdot: number;
    const KeysymsAhook: number;
    const Keysymsahook: number;
    const KeysymsAcircumflexacute: number;
    const Keysymsacircumflexacute: number;
    const KeysymsAcircumflexgrave: number;
    const Keysymsacircumflexgrave: number;
    const KeysymsAcircumflexhook: number;
    const Keysymsacircumflexhook: number;
    const KeysymsAcircumflextilde: number;
    const Keysymsacircumflextilde: number;
    const KeysymsAcircumflexbelowdot: number;
    const Keysymsacircumflexbelowdot: number;
    const KeysymsAbreveacute: number;
    const Keysymsabreveacute: number;
    const KeysymsAbrevegrave: number;
    const Keysymsabrevegrave: number;
    const KeysymsAbrevehook: number;
    const Keysymsabrevehook: number;
    const KeysymsAbrevetilde: number;
    const Keysymsabrevetilde: number;
    const KeysymsAbrevebelowdot: number;
    const Keysymsabrevebelowdot: number;
    const KeysymsEbelowdot: number;
    const Keysymsebelowdot: number;
    const KeysymsEhook: number;
    const Keysymsehook: number;
    const KeysymsEtilde: number;
    const Keysymsetilde: number;
    const KeysymsEcircumflexacute: number;
    const Keysymsecircumflexacute: number;
    const KeysymsEcircumflexgrave: number;
    const Keysymsecircumflexgrave: number;
    const KeysymsEcircumflexhook: number;
    const Keysymsecircumflexhook: number;
    const KeysymsEcircumflextilde: number;
    const Keysymsecircumflextilde: number;
    const KeysymsEcircumflexbelowdot: number;
    const Keysymsecircumflexbelowdot: number;
    const KeysymsIhook: number;
    const Keysymsihook: number;
    const KeysymsIbelowdot: number;
    const Keysymsibelowdot: number;
    const KeysymsObelowdot: number;
    const Keysymsobelowdot: number;
    const KeysymsOhook: number;
    const Keysymsohook: number;
    const KeysymsOcircumflexacute: number;
    const Keysymsocircumflexacute: number;
    const KeysymsOcircumflexgrave: number;
    const Keysymsocircumflexgrave: number;
    const KeysymsOcircumflexhook: number;
    const Keysymsocircumflexhook: number;
    const KeysymsOcircumflextilde: number;
    const Keysymsocircumflextilde: number;
    const KeysymsOcircumflexbelowdot: number;
    const Keysymsocircumflexbelowdot: number;
    const KeysymsOhornacute: number;
    const Keysymsohornacute: number;
    const KeysymsOhorngrave: number;
    const Keysymsohorngrave: number;
    const KeysymsOhornhook: number;
    const Keysymsohornhook: number;
    const KeysymsOhorntilde: number;
    const Keysymsohorntilde: number;
    const KeysymsOhornbelowdot: number;
    const Keysymsohornbelowdot: number;
    const KeysymsUbelowdot: number;
    const Keysymsubelowdot: number;
    const KeysymsUhook: number;
    const Keysymsuhook: number;
    const KeysymsUhornacute: number;
    const Keysymsuhornacute: number;
    const KeysymsUhorngrave: number;
    const Keysymsuhorngrave: number;
    const KeysymsUhornhook: number;
    const Keysymsuhornhook: number;
    const KeysymsUhorntilde: number;
    const Keysymsuhorntilde: number;
    const KeysymsUhornbelowdot: number;
    const Keysymsuhornbelowdot: number;
    const KeysymsYbelowdot: number;
    const Keysymsybelowdot: number;
    const KeysymsYhook: number;
    const Keysymsyhook: number;
    const KeysymsYtilde: number;
    const Keysymsytilde: number;
    const KeysymsOhorn: number;
    const Keysymsohorn: number;
    const KeysymsUhorn: number;
    const Keysymsuhorn: number;
    const KeysymsEcuSign: number;
    const KeysymsColonSign: number;
    const KeysymsCruzeiroSign: number;
    const KeysymsFFrancSign: number;
    const KeysymsLiraSign: number;
    const KeysymsMillSign: number;
    const KeysymsNairaSign: number;
    const KeysymsPesetaSign: number;
    const KeysymsRupeeSign: number;
    const KeysymsWonSign: number;
    const KeysymsNewSheqelSign: number;
    const KeysymsDongSign: number;
    const KeysymsEuroSign: number;
    const Keysymszerosuperior: number;
    const Keysymsfoursuperior: number;
    const Keysymsfivesuperior: number;
    const Keysymssixsuperior: number;
    const Keysymssevensuperior: number;
    const Keysymseightsuperior: number;
    const Keysymsninesuperior: number;
    const Keysymszerosubscript: number;
    const Keysymsonesubscript: number;
    const Keysymstwosubscript: number;
    const Keysymsthreesubscript: number;
    const Keysymsfoursubscript: number;
    const Keysymsfivesubscript: number;
    const Keysymssixsubscript: number;
    const Keysymssevensubscript: number;
    const Keysymseightsubscript: number;
    const Keysymsninesubscript: number;
    const Keysymspartdifferential: number;
    const Keysymsemptyset: number;
    const Keysymselementof: number;
    const Keysymsnotelementof: number;
    const Keysymscontainsas: number;
    const Keysymssquareroot: number;
    const Keysymscuberoot: number;
    const Keysymsfourthroot: number;
    const Keysymsdintegral: number;
    const Keysymstintegral: number;
    const Keysymsbecause: number;
    const Keysymsapproxeq: number;
    const Keysymsnotapproxeq: number;
    const Keysymsnotidentical: number;
    const Keysymsstricteq: number;
    const Keysymsbraille_dot_1: number;
    const Keysymsbraille_dot_2: number;
    const Keysymsbraille_dot_3: number;
    const Keysymsbraille_dot_4: number;
    const Keysymsbraille_dot_5: number;
    const Keysymsbraille_dot_6: number;
    const Keysymsbraille_dot_7: number;
    const Keysymsbraille_dot_8: number;
    const Keysymsbraille_dot_9: number;
    const Keysymsbraille_dot_10: number;
    const Keysymsbraille_blank: number;
    const Keysymsbraille_dots_1: number;
    const Keysymsbraille_dots_2: number;
    const Keysymsbraille_dots_12: number;
    const Keysymsbraille_dots_3: number;
    const Keysymsbraille_dots_13: number;
    const Keysymsbraille_dots_23: number;
    const Keysymsbraille_dots_123: number;
    const Keysymsbraille_dots_4: number;
    const Keysymsbraille_dots_14: number;
    const Keysymsbraille_dots_24: number;
    const Keysymsbraille_dots_124: number;
    const Keysymsbraille_dots_34: number;
    const Keysymsbraille_dots_134: number;
    const Keysymsbraille_dots_234: number;
    const Keysymsbraille_dots_1234: number;
    const Keysymsbraille_dots_5: number;
    const Keysymsbraille_dots_15: number;
    const Keysymsbraille_dots_25: number;
    const Keysymsbraille_dots_125: number;
    const Keysymsbraille_dots_35: number;
    const Keysymsbraille_dots_135: number;
    const Keysymsbraille_dots_235: number;
    const Keysymsbraille_dots_1235: number;
    const Keysymsbraille_dots_45: number;
    const Keysymsbraille_dots_145: number;
    const Keysymsbraille_dots_245: number;
    const Keysymsbraille_dots_1245: number;
    const Keysymsbraille_dots_345: number;
    const Keysymsbraille_dots_1345: number;
    const Keysymsbraille_dots_2345: number;
    const Keysymsbraille_dots_12345: number;
    const Keysymsbraille_dots_6: number;
    const Keysymsbraille_dots_16: number;
    const Keysymsbraille_dots_26: number;
    const Keysymsbraille_dots_126: number;
    const Keysymsbraille_dots_36: number;
    const Keysymsbraille_dots_136: number;
    const Keysymsbraille_dots_236: number;
    const Keysymsbraille_dots_1236: number;
    const Keysymsbraille_dots_46: number;
    const Keysymsbraille_dots_146: number;
    const Keysymsbraille_dots_246: number;
    const Keysymsbraille_dots_1246: number;
    const Keysymsbraille_dots_346: number;
    const Keysymsbraille_dots_1346: number;
    const Keysymsbraille_dots_2346: number;
    const Keysymsbraille_dots_12346: number;
    const Keysymsbraille_dots_56: number;
    const Keysymsbraille_dots_156: number;
    const Keysymsbraille_dots_256: number;
    const Keysymsbraille_dots_1256: number;
    const Keysymsbraille_dots_356: number;
    const Keysymsbraille_dots_1356: number;
    const Keysymsbraille_dots_2356: number;
    const Keysymsbraille_dots_12356: number;
    const Keysymsbraille_dots_456: number;
    const Keysymsbraille_dots_1456: number;
    const Keysymsbraille_dots_2456: number;
    const Keysymsbraille_dots_12456: number;
    const Keysymsbraille_dots_3456: number;
    const Keysymsbraille_dots_13456: number;
    const Keysymsbraille_dots_23456: number;
    const Keysymsbraille_dots_123456: number;
    const Keysymsbraille_dots_7: number;
    const Keysymsbraille_dots_17: number;
    const Keysymsbraille_dots_27: number;
    const Keysymsbraille_dots_127: number;
    const Keysymsbraille_dots_37: number;
    const Keysymsbraille_dots_137: number;
    const Keysymsbraille_dots_237: number;
    const Keysymsbraille_dots_1237: number;
    const Keysymsbraille_dots_47: number;
    const Keysymsbraille_dots_147: number;
    const Keysymsbraille_dots_247: number;
    const Keysymsbraille_dots_1247: number;
    const Keysymsbraille_dots_347: number;
    const Keysymsbraille_dots_1347: number;
    const Keysymsbraille_dots_2347: number;
    const Keysymsbraille_dots_12347: number;
    const Keysymsbraille_dots_57: number;
    const Keysymsbraille_dots_157: number;
    const Keysymsbraille_dots_257: number;
    const Keysymsbraille_dots_1257: number;
    const Keysymsbraille_dots_357: number;
    const Keysymsbraille_dots_1357: number;
    const Keysymsbraille_dots_2357: number;
    const Keysymsbraille_dots_12357: number;
    const Keysymsbraille_dots_457: number;
    const Keysymsbraille_dots_1457: number;
    const Keysymsbraille_dots_2457: number;
    const Keysymsbraille_dots_12457: number;
    const Keysymsbraille_dots_3457: number;
    const Keysymsbraille_dots_13457: number;
    const Keysymsbraille_dots_23457: number;
    const Keysymsbraille_dots_123457: number;
    const Keysymsbraille_dots_67: number;
    const Keysymsbraille_dots_167: number;
    const Keysymsbraille_dots_267: number;
    const Keysymsbraille_dots_1267: number;
    const Keysymsbraille_dots_367: number;
    const Keysymsbraille_dots_1367: number;
    const Keysymsbraille_dots_2367: number;
    const Keysymsbraille_dots_12367: number;
    const Keysymsbraille_dots_467: number;
    const Keysymsbraille_dots_1467: number;
    const Keysymsbraille_dots_2467: number;
    const Keysymsbraille_dots_12467: number;
    const Keysymsbraille_dots_3467: number;
    const Keysymsbraille_dots_13467: number;
    const Keysymsbraille_dots_23467: number;
    const Keysymsbraille_dots_123467: number;
    const Keysymsbraille_dots_567: number;
    const Keysymsbraille_dots_1567: number;
    const Keysymsbraille_dots_2567: number;
    const Keysymsbraille_dots_12567: number;
    const Keysymsbraille_dots_3567: number;
    const Keysymsbraille_dots_13567: number;
    const Keysymsbraille_dots_23567: number;
    const Keysymsbraille_dots_123567: number;
    const Keysymsbraille_dots_4567: number;
    const Keysymsbraille_dots_14567: number;
    const Keysymsbraille_dots_24567: number;
    const Keysymsbraille_dots_124567: number;
    const Keysymsbraille_dots_34567: number;
    const Keysymsbraille_dots_134567: number;
    const Keysymsbraille_dots_234567: number;
    const Keysymsbraille_dots_1234567: number;
    const Keysymsbraille_dots_8: number;
    const Keysymsbraille_dots_18: number;
    const Keysymsbraille_dots_28: number;
    const Keysymsbraille_dots_128: number;
    const Keysymsbraille_dots_38: number;
    const Keysymsbraille_dots_138: number;
    const Keysymsbraille_dots_238: number;
    const Keysymsbraille_dots_1238: number;
    const Keysymsbraille_dots_48: number;
    const Keysymsbraille_dots_148: number;
    const Keysymsbraille_dots_248: number;
    const Keysymsbraille_dots_1248: number;
    const Keysymsbraille_dots_348: number;
    const Keysymsbraille_dots_1348: number;
    const Keysymsbraille_dots_2348: number;
    const Keysymsbraille_dots_12348: number;
    const Keysymsbraille_dots_58: number;
    const Keysymsbraille_dots_158: number;
    const Keysymsbraille_dots_258: number;
    const Keysymsbraille_dots_1258: number;
    const Keysymsbraille_dots_358: number;
    const Keysymsbraille_dots_1358: number;
    const Keysymsbraille_dots_2358: number;
    const Keysymsbraille_dots_12358: number;
    const Keysymsbraille_dots_458: number;
    const Keysymsbraille_dots_1458: number;
    const Keysymsbraille_dots_2458: number;
    const Keysymsbraille_dots_12458: number;
    const Keysymsbraille_dots_3458: number;
    const Keysymsbraille_dots_13458: number;
    const Keysymsbraille_dots_23458: number;
    const Keysymsbraille_dots_123458: number;
    const Keysymsbraille_dots_68: number;
    const Keysymsbraille_dots_168: number;
    const Keysymsbraille_dots_268: number;
    const Keysymsbraille_dots_1268: number;
    const Keysymsbraille_dots_368: number;
    const Keysymsbraille_dots_1368: number;
    const Keysymsbraille_dots_2368: number;
    const Keysymsbraille_dots_12368: number;
    const Keysymsbraille_dots_468: number;
    const Keysymsbraille_dots_1468: number;
    const Keysymsbraille_dots_2468: number;
    const Keysymsbraille_dots_12468: number;
    const Keysymsbraille_dots_3468: number;
    const Keysymsbraille_dots_13468: number;
    const Keysymsbraille_dots_23468: number;
    const Keysymsbraille_dots_123468: number;
    const Keysymsbraille_dots_568: number;
    const Keysymsbraille_dots_1568: number;
    const Keysymsbraille_dots_2568: number;
    const Keysymsbraille_dots_12568: number;
    const Keysymsbraille_dots_3568: number;
    const Keysymsbraille_dots_13568: number;
    const Keysymsbraille_dots_23568: number;
    const Keysymsbraille_dots_123568: number;
    const Keysymsbraille_dots_4568: number;
    const Keysymsbraille_dots_14568: number;
    const Keysymsbraille_dots_24568: number;
    const Keysymsbraille_dots_124568: number;
    const Keysymsbraille_dots_34568: number;
    const Keysymsbraille_dots_134568: number;
    const Keysymsbraille_dots_234568: number;
    const Keysymsbraille_dots_1234568: number;
    const Keysymsbraille_dots_78: number;
    const Keysymsbraille_dots_178: number;
    const Keysymsbraille_dots_278: number;
    const Keysymsbraille_dots_1278: number;
    const Keysymsbraille_dots_378: number;
    const Keysymsbraille_dots_1378: number;
    const Keysymsbraille_dots_2378: number;
    const Keysymsbraille_dots_12378: number;
    const Keysymsbraille_dots_478: number;
    const Keysymsbraille_dots_1478: number;
    const Keysymsbraille_dots_2478: number;
    const Keysymsbraille_dots_12478: number;
    const Keysymsbraille_dots_3478: number;
    const Keysymsbraille_dots_13478: number;
    const Keysymsbraille_dots_23478: number;
    const Keysymsbraille_dots_123478: number;
    const Keysymsbraille_dots_578: number;
    const Keysymsbraille_dots_1578: number;
    const Keysymsbraille_dots_2578: number;
    const Keysymsbraille_dots_12578: number;
    const Keysymsbraille_dots_3578: number;
    const Keysymsbraille_dots_13578: number;
    const Keysymsbraille_dots_23578: number;
    const Keysymsbraille_dots_123578: number;
    const Keysymsbraille_dots_4578: number;
    const Keysymsbraille_dots_14578: number;
    const Keysymsbraille_dots_24578: number;
    const Keysymsbraille_dots_124578: number;
    const Keysymsbraille_dots_34578: number;
    const Keysymsbraille_dots_134578: number;
    const Keysymsbraille_dots_234578: number;
    const Keysymsbraille_dots_1234578: number;
    const Keysymsbraille_dots_678: number;
    const Keysymsbraille_dots_1678: number;
    const Keysymsbraille_dots_2678: number;
    const Keysymsbraille_dots_12678: number;
    const Keysymsbraille_dots_3678: number;
    const Keysymsbraille_dots_13678: number;
    const Keysymsbraille_dots_23678: number;
    const Keysymsbraille_dots_123678: number;
    const Keysymsbraille_dots_4678: number;
    const Keysymsbraille_dots_14678: number;
    const Keysymsbraille_dots_24678: number;
    const Keysymsbraille_dots_124678: number;
    const Keysymsbraille_dots_34678: number;
    const Keysymsbraille_dots_134678: number;
    const Keysymsbraille_dots_234678: number;
    const Keysymsbraille_dots_1234678: number;
    const Keysymsbraille_dots_5678: number;
    const Keysymsbraille_dots_15678: number;
    const Keysymsbraille_dots_25678: number;
    const Keysymsbraille_dots_125678: number;
    const Keysymsbraille_dots_35678: number;
    const Keysymsbraille_dots_135678: number;
    const Keysymsbraille_dots_235678: number;
    const Keysymsbraille_dots_1235678: number;
    const Keysymsbraille_dots_45678: number;
    const Keysymsbraille_dots_145678: number;
    const Keysymsbraille_dots_245678: number;
    const Keysymsbraille_dots_1245678: number;
    const Keysymsbraille_dots_345678: number;
    const Keysymsbraille_dots_1345678: number;
    const Keysymsbraille_dots_2345678: number;
    const Keysymsbraille_dots_12345678: number;
    const KeysymsSinh_ng: number;
    const KeysymsSinh_h2: number;
    const KeysymsSinh_a: number;
    const KeysymsSinh_aa: number;
    const KeysymsSinh_ae: number;
    const KeysymsSinh_aee: number;
    const KeysymsSinh_i: number;
    const KeysymsSinh_ii: number;
    const KeysymsSinh_u: number;
    const KeysymsSinh_uu: number;
    const KeysymsSinh_ri: number;
    const KeysymsSinh_rii: number;
    const KeysymsSinh_lu: number;
    const KeysymsSinh_luu: number;
    const KeysymsSinh_e: number;
    const KeysymsSinh_ee: number;
    const KeysymsSinh_ai: number;
    const KeysymsSinh_o: number;
    const KeysymsSinh_oo: number;
    const KeysymsSinh_au: number;
    const KeysymsSinh_ka: number;
    const KeysymsSinh_kha: number;
    const KeysymsSinh_ga: number;
    const KeysymsSinh_gha: number;
    const KeysymsSinh_ng2: number;
    const KeysymsSinh_nga: number;
    const KeysymsSinh_ca: number;
    const KeysymsSinh_cha: number;
    const KeysymsSinh_ja: number;
    const KeysymsSinh_jha: number;
    const KeysymsSinh_nya: number;
    const KeysymsSinh_jnya: number;
    const KeysymsSinh_nja: number;
    const KeysymsSinh_tta: number;
    const KeysymsSinh_ttha: number;
    const KeysymsSinh_dda: number;
    const KeysymsSinh_ddha: number;
    const KeysymsSinh_nna: number;
    const KeysymsSinh_ndda: number;
    const KeysymsSinh_tha: number;
    const KeysymsSinh_thha: number;
    const KeysymsSinh_dha: number;
    const KeysymsSinh_dhha: number;
    const KeysymsSinh_na: number;
    const KeysymsSinh_ndha: number;
    const KeysymsSinh_pa: number;
    const KeysymsSinh_pha: number;
    const KeysymsSinh_ba: number;
    const KeysymsSinh_bha: number;
    const KeysymsSinh_ma: number;
    const KeysymsSinh_mba: number;
    const KeysymsSinh_ya: number;
    const KeysymsSinh_ra: number;
    const KeysymsSinh_la: number;
    const KeysymsSinh_va: number;
    const KeysymsSinh_sha: number;
    const KeysymsSinh_ssha: number;
    const KeysymsSinh_sa: number;
    const KeysymsSinh_ha: number;
    const KeysymsSinh_lla: number;
    const KeysymsSinh_fa: number;
    const KeysymsSinh_al: number;
    const KeysymsSinh_aa2: number;
    const KeysymsSinh_ae2: number;
    const KeysymsSinh_aee2: number;
    const KeysymsSinh_i2: number;
    const KeysymsSinh_ii2: number;
    const KeysymsSinh_u2: number;
    const KeysymsSinh_uu2: number;
    const KeysymsSinh_ru2: number;
    const KeysymsSinh_e2: number;
    const KeysymsSinh_ee2: number;
    const KeysymsSinh_ai2: number;
    const KeysymsSinh_o2: number;
    const KeysymsSinh_oo2: number;
    const KeysymsSinh_au2: number;
    const KeysymsSinh_lu2: number;
    const KeysymsSinh_ruu2: number;
    const KeysymsSinh_luu2: number;
    const KeysymsSinh_kunddaliya: number;
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
        SUPER_MASK,
        HYPER_MASK,
        META_MASK,
        RELEASE_MASK,
    }
    module MetadataFile {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            name: string;
            label: string;
            description: string;
            filename: string;
        }
    }

    abstract class MetadataFile extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<MetadataFile>;

        // Own properties of Kkc.MetadataFile

        get name(): string;
        set name(val: string);
        get label(): string;
        set label(val: string);
        get description(): string;
        set description(val: string);
        get filename(): string;
        set filename(val: string);

        // Constructors of Kkc.MetadataFile

        constructor(properties?: Partial<MetadataFile.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Kkc.MetadataFile

        vfunc_parse(object: Json.Object): boolean;

        // Own methods of Kkc.MetadataFile

        parse(object: Json.Object): boolean;
        get_name(): string;
        set_name(value: string): void;
        get_label(): string;
        set_label(value: string): void;
        get_description(): string;
        set_description(value: string): void;
        get_filename(): string;
        set_filename(value: string): void;

        // Inherited methods
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [introduction][ginitable] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [introduction][ginitable] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
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
        vfunc_constructed(): void;
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        vfunc_dispose(): void;
        vfunc_finalize(): void;
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
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    abstract class TrellisNode {
        static $gtype: GObject.GType<TrellisNode>;

        // Own fields of Kkc.TrellisNode

        ref_count: number;
        previous: TrellisNode | null;
        cumulative_cost: number;

        // Constructors of Kkc.TrellisNode

        _init(...args: any[]): void;

        // Own virtual methods of Kkc.TrellisNode

        vfunc_to_string(): string;
        vfunc_get_endpos(): number;
        vfunc_get_length(): number;
        vfunc_get_input(): string;
        vfunc_get_output(): string;
        vfunc_get_entries(): LanguageModelEntry[];

        // Own methods of Kkc.TrellisNode

        to_string(): string;
        get_endpos(): number;
        get_length(): number;
        get_input(): string;
        get_output(): string;
        get_entries(): LanguageModelEntry[];
    }

    class UnigramTrellisNode extends TrellisNode {
        static $gtype: GObject.GType<UnigramTrellisNode>;

        // Constructors of Kkc.UnigramTrellisNode

        _init(...args: any[]): void;

        static ['new'](entry: LanguageModelEntry, endpos: number): UnigramTrellisNode;

        // Own methods of Kkc.UnigramTrellisNode

        get_entry(): LanguageModelEntry;
    }

    class BigramTrellisNode extends TrellisNode {
        static $gtype: GObject.GType<BigramTrellisNode>;

        // Constructors of Kkc.BigramTrellisNode

        _init(...args: any[]): void;

        static ['new'](
            left_node: UnigramTrellisNode,
            right_node: UnigramTrellisNode,
            endpos: number,
        ): BigramTrellisNode;

        // Own methods of Kkc.BigramTrellisNode

        get_left_node(): UnigramTrellisNode;
        get_right_node(): UnigramTrellisNode;
    }

    module LanguageModelMetadata {
        // Constructor properties interface

        interface ConstructorProps extends MetadataFile.ConstructorProps {
            model_type: GObject.GType;
            modelType: GObject.GType;
        }
    }

    class LanguageModelMetadata extends MetadataFile {
        static $gtype: GObject.GType<LanguageModelMetadata>;

        // Own properties of Kkc.LanguageModelMetadata

        get model_type(): GObject.GType;
        set model_type(val: GObject.GType);
        get modelType(): GObject.GType;
        set modelType(val: GObject.GType);

        // Constructors of Kkc.LanguageModelMetadata

        constructor(properties?: Partial<LanguageModelMetadata.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, filename: string): LanguageModelMetadata;

        // Own static methods of Kkc.LanguageModelMetadata

        static find(name: string): LanguageModelMetadata | null;

        // Own methods of Kkc.LanguageModelMetadata

        create_language_model(): LanguageModel | null;
        get_model_type(): GObject.GType;
        set_model_type(value: GObject.GType): void;
    }

    module LanguageModel {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            metadata: LanguageModelMetadata;
            bos: LanguageModelEntry;
            eos: LanguageModelEntry;
        }
    }

    abstract class LanguageModel extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<LanguageModel>;

        // Own properties of Kkc.LanguageModel

        get metadata(): LanguageModelMetadata;
        set metadata(val: LanguageModelMetadata);
        get bos(): LanguageModelEntry;
        get eos(): LanguageModelEntry;

        // Constructors of Kkc.LanguageModel

        constructor(properties?: Partial<LanguageModel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own static methods of Kkc.LanguageModel

        static load(name: string): LanguageModel | null;

        // Own virtual methods of Kkc.LanguageModel

        vfunc_unigram_entries(input: string): Gee.Collection;
        vfunc_entries(input: string): Gee.Collection;
        vfunc_get(input: string, output: string): LanguageModelEntry | null;
        vfunc_parse(): boolean;
        vfunc_get_bos(): LanguageModelEntry;
        vfunc_get_eos(): LanguageModelEntry;

        // Own methods of Kkc.LanguageModel

        unigram_entries(input: string): Gee.Collection;
        entries(input: string): Gee.Collection;
        get(input: string, output: string): LanguageModelEntry | null;
        parse(): boolean;
        get_metadata(): LanguageModelMetadata;
        set_metadata(value: LanguageModelMetadata): void;
        get_bos(): LanguageModelEntry;
        get_eos(): LanguageModelEntry;

        // Inherited methods
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [introduction][ginitable] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [introduction][ginitable] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
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
        vfunc_constructed(): void;
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        vfunc_dispose(): void;
        vfunc_finalize(): void;
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
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module TextBigramLanguageModel {
        // Constructor properties interface

        interface ConstructorProps
            extends LanguageModel.ConstructorProps,
                UnigramLanguageModel.ConstructorProps,
                BigramLanguageModel.ConstructorProps {}
    }

    class TextBigramLanguageModel extends LanguageModel implements UnigramLanguageModel, BigramLanguageModel {
        static $gtype: GObject.GType<TextBigramLanguageModel>;

        // Own fields of Kkc.TextBigramLanguageModel

        input_map: Gee.Map;
        cost_map: Gee.Map;
        backoff_map: Gee.Map;
        id_map: Gee.Map;

        // Constructors of Kkc.TextBigramLanguageModel

        constructor(properties?: Partial<TextBigramLanguageModel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](metadata: LanguageModelMetadata): TextBigramLanguageModel;

        // Own methods of Kkc.TextBigramLanguageModel

        get_key(ids: number[]): string;
        parse_lm(input: string): void;

        // Inherited properties
        get metadata(): LanguageModelMetadata;
        set metadata(val: LanguageModelMetadata);
        get bos(): LanguageModelEntry;
        get eos(): LanguageModelEntry;

        // Inherited methods
        unigram_cost(entry: LanguageModelEntry): number;
        unigram_backoff(entry: LanguageModelEntry): number;
        vfunc_unigram_cost(entry: LanguageModelEntry): number;
        vfunc_unigram_backoff(entry: LanguageModelEntry): number;
        has_bigram(pentry: LanguageModelEntry, entry: LanguageModelEntry): boolean;
        bigram_cost(pentry: LanguageModelEntry, entry: LanguageModelEntry): number;
        bigram_backoff(pentry: LanguageModelEntry, entry: LanguageModelEntry): number;
        bigram_backoff_cost(pentry: LanguageModelEntry, entry: LanguageModelEntry): number;
        vfunc_has_bigram(pentry: LanguageModelEntry, entry: LanguageModelEntry): boolean;
        vfunc_bigram_cost(pentry: LanguageModelEntry, entry: LanguageModelEntry): number;
        vfunc_bigram_backoff(pentry: LanguageModelEntry, entry: LanguageModelEntry): number;
        unigram_entries(input: string): Gee.Collection;
        entries(input: string): Gee.Collection;
        get(input: string, output: string): LanguageModelEntry | null;
        parse(): boolean;
        get_metadata(): LanguageModelMetadata;
        set_metadata(value: LanguageModelMetadata): void;
        get_bos(): LanguageModelEntry;
        get_eos(): LanguageModelEntry;
        vfunc_unigram_entries(input: string): Gee.Collection;
        vfunc_entries(input: string): Gee.Collection;
        vfunc_get(input: string, output: string): LanguageModelEntry | null;
        vfunc_parse(): boolean;
        vfunc_get_bos(): LanguageModelEntry;
        vfunc_get_eos(): LanguageModelEntry;
    }

    module TextTrigramLanguageModel {
        // Constructor properties interface

        interface ConstructorProps
            extends TextBigramLanguageModel.ConstructorProps,
                TrigramLanguageModel.ConstructorProps {}
    }

    class TextTrigramLanguageModel extends TextBigramLanguageModel implements TrigramLanguageModel {
        static $gtype: GObject.GType<TextTrigramLanguageModel>;

        // Constructors of Kkc.TextTrigramLanguageModel

        constructor(properties?: Partial<TextTrigramLanguageModel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](metadata: LanguageModelMetadata): TextTrigramLanguageModel;

        // Inherited methods
        has_trigram(ppentry: LanguageModelEntry, pentry: LanguageModelEntry, entry: LanguageModelEntry): boolean;
        trigram_cost(ppentry: LanguageModelEntry, pentry: LanguageModelEntry, entry: LanguageModelEntry): number;
        trigram_backoff_cost(
            ppentry: LanguageModelEntry,
            pentry: LanguageModelEntry,
            entry: LanguageModelEntry,
        ): number;
        vfunc_has_trigram(ppentry: LanguageModelEntry, pentry: LanguageModelEntry, entry: LanguageModelEntry): boolean;
        vfunc_trigram_cost(ppentry: LanguageModelEntry, pentry: LanguageModelEntry, entry: LanguageModelEntry): number;
        has_bigram(pentry: LanguageModelEntry, entry: LanguageModelEntry): boolean;
        bigram_cost(pentry: LanguageModelEntry, entry: LanguageModelEntry): number;
        bigram_backoff(pentry: LanguageModelEntry, entry: LanguageModelEntry): number;
        bigram_backoff_cost(pentry: LanguageModelEntry, entry: LanguageModelEntry): number;
        vfunc_has_bigram(pentry: LanguageModelEntry, entry: LanguageModelEntry): boolean;
        vfunc_bigram_cost(pentry: LanguageModelEntry, entry: LanguageModelEntry): number;
        vfunc_bigram_backoff(pentry: LanguageModelEntry, entry: LanguageModelEntry): number;
        unigram_cost(entry: LanguageModelEntry): number;
        unigram_backoff(entry: LanguageModelEntry): number;
        vfunc_unigram_cost(entry: LanguageModelEntry): number;
        vfunc_unigram_backoff(entry: LanguageModelEntry): number;
    }

    module SortedBigramLanguageModel {
        // Constructor properties interface

        interface ConstructorProps
            extends LanguageModel.ConstructorProps,
                UnigramLanguageModel.ConstructorProps,
                BigramLanguageModel.ConstructorProps {
            min_cost: number;
            minCost: number;
        }
    }

    class SortedBigramLanguageModel extends LanguageModel implements UnigramLanguageModel, BigramLanguageModel {
        static $gtype: GObject.GType<SortedBigramLanguageModel>;

        // Own properties of Kkc.SortedBigramLanguageModel

        get min_cost(): number;
        get minCost(): number;

        // Constructors of Kkc.SortedBigramLanguageModel

        constructor(properties?: Partial<SortedBigramLanguageModel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](metadata: LanguageModelMetadata): SortedBigramLanguageModel;

        // Own methods of Kkc.SortedBigramLanguageModel

        bigram_offset(pentry: LanguageModelEntry, entry: LanguageModelEntry): number;
        get_min_cost(): number;

        // Inherited properties
        get metadata(): LanguageModelMetadata;
        set metadata(val: LanguageModelMetadata);
        get bos(): LanguageModelEntry;
        get eos(): LanguageModelEntry;

        // Inherited methods
        unigram_cost(entry: LanguageModelEntry): number;
        unigram_backoff(entry: LanguageModelEntry): number;
        vfunc_unigram_cost(entry: LanguageModelEntry): number;
        vfunc_unigram_backoff(entry: LanguageModelEntry): number;
        has_bigram(pentry: LanguageModelEntry, entry: LanguageModelEntry): boolean;
        bigram_cost(pentry: LanguageModelEntry, entry: LanguageModelEntry): number;
        bigram_backoff(pentry: LanguageModelEntry, entry: LanguageModelEntry): number;
        bigram_backoff_cost(pentry: LanguageModelEntry, entry: LanguageModelEntry): number;
        vfunc_has_bigram(pentry: LanguageModelEntry, entry: LanguageModelEntry): boolean;
        vfunc_bigram_cost(pentry: LanguageModelEntry, entry: LanguageModelEntry): number;
        vfunc_bigram_backoff(pentry: LanguageModelEntry, entry: LanguageModelEntry): number;
        unigram_entries(input: string): Gee.Collection;
        entries(input: string): Gee.Collection;
        get(input: string, output: string): LanguageModelEntry | null;
        parse(): boolean;
        get_metadata(): LanguageModelMetadata;
        set_metadata(value: LanguageModelMetadata): void;
        get_bos(): LanguageModelEntry;
        get_eos(): LanguageModelEntry;
        vfunc_unigram_entries(input: string): Gee.Collection;
        vfunc_entries(input: string): Gee.Collection;
        vfunc_get(input: string, output: string): LanguageModelEntry | null;
        vfunc_parse(): boolean;
        vfunc_get_bos(): LanguageModelEntry;
        vfunc_get_eos(): LanguageModelEntry;
    }

    module SortedTrigramLanguageModel {
        // Constructor properties interface

        interface ConstructorProps
            extends SortedBigramLanguageModel.ConstructorProps,
                TrigramLanguageModel.ConstructorProps {}
    }

    class SortedTrigramLanguageModel extends SortedBigramLanguageModel implements TrigramLanguageModel {
        static $gtype: GObject.GType<SortedTrigramLanguageModel>;

        // Constructors of Kkc.SortedTrigramLanguageModel

        constructor(properties?: Partial<SortedTrigramLanguageModel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](metadata: LanguageModelMetadata): SortedTrigramLanguageModel;

        // Inherited methods
        has_trigram(ppentry: LanguageModelEntry, pentry: LanguageModelEntry, entry: LanguageModelEntry): boolean;
        trigram_cost(ppentry: LanguageModelEntry, pentry: LanguageModelEntry, entry: LanguageModelEntry): number;
        trigram_backoff_cost(
            ppentry: LanguageModelEntry,
            pentry: LanguageModelEntry,
            entry: LanguageModelEntry,
        ): number;
        vfunc_has_trigram(ppentry: LanguageModelEntry, pentry: LanguageModelEntry, entry: LanguageModelEntry): boolean;
        vfunc_trigram_cost(ppentry: LanguageModelEntry, pentry: LanguageModelEntry, entry: LanguageModelEntry): number;
        has_bigram(pentry: LanguageModelEntry, entry: LanguageModelEntry): boolean;
        bigram_cost(pentry: LanguageModelEntry, entry: LanguageModelEntry): number;
        bigram_backoff(pentry: LanguageModelEntry, entry: LanguageModelEntry): number;
        bigram_backoff_cost(pentry: LanguageModelEntry, entry: LanguageModelEntry): number;
        vfunc_has_bigram(pentry: LanguageModelEntry, entry: LanguageModelEntry): boolean;
        vfunc_bigram_cost(pentry: LanguageModelEntry, entry: LanguageModelEntry): number;
        vfunc_bigram_backoff(pentry: LanguageModelEntry, entry: LanguageModelEntry): number;
        unigram_cost(entry: LanguageModelEntry): number;
        unigram_backoff(entry: LanguageModelEntry): number;
        vfunc_unigram_cost(entry: LanguageModelEntry): number;
        vfunc_unigram_backoff(entry: LanguageModelEntry): number;
    }

    module Decoder {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class Decoder extends GObject.Object {
        static $gtype: GObject.GType<Decoder>;

        // Constructors of Kkc.Decoder

        constructor(properties?: Partial<Decoder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own static methods of Kkc.Decoder

        static create(model: LanguageModel): Decoder | null;

        // Own virtual methods of Kkc.Decoder

        vfunc_decode(input: string, nbest: number, constraint: number[]): Segment[];
        vfunc_decode_with_costs(
            input: string,
            nbest: number,
            constraint: number[],
            max_distance: number,
            min_path_cost: number,
        ): Segment[];

        // Own methods of Kkc.Decoder

        decode(input: string, nbest: number, constraint: number[]): Segment[];
        decode_with_costs(
            input: string,
            nbest: number,
            constraint: number[],
            max_distance: number,
            min_path_cost: number,
        ): Segment[];
    }

    module BigramDecoder {
        // Constructor properties interface

        interface ConstructorProps extends Decoder.ConstructorProps {
            model: BigramLanguageModel;
        }
    }

    class BigramDecoder extends Decoder {
        static $gtype: GObject.GType<BigramDecoder>;

        // Own properties of Kkc.BigramDecoder

        get model(): BigramLanguageModel;

        // Constructors of Kkc.BigramDecoder

        constructor(properties?: Partial<BigramDecoder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](model: BigramLanguageModel): BigramDecoder;

        // Own virtual methods of Kkc.BigramDecoder

        vfunc_path_cost(pnode: TrellisNode, node: TrellisNode, endpos: number): number;

        // Own methods of Kkc.BigramDecoder

        add_unknown_nodes(trellis: Gee.ArrayList[], input: string, constraint: number[]): void;
        build_trellis(input: string, constraint: number[]): Gee.ArrayList[];
        forward_search(trellis: Gee.ArrayList[], input: string): void;
        path_cost(pnode: TrellisNode, node: TrellisNode, endpos: number): number;
        backward_search(
            trellis: Gee.ArrayList[],
            nbest: number,
            max_distance: number,
            min_path_cost: number,
        ): Segment[];
        get_model(): BigramLanguageModel;
    }

    module TrigramDecoder {
        // Constructor properties interface

        interface ConstructorProps extends BigramDecoder.ConstructorProps {}
    }

    class TrigramDecoder extends BigramDecoder {
        static $gtype: GObject.GType<TrigramDecoder>;

        // Constructors of Kkc.TrigramDecoder

        constructor(properties?: Partial<TrigramDecoder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](model: TrigramLanguageModel): TrigramDecoder;
    }

    module SegmentList {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            cursor_pos: number;
            cursorPos: number;
            size: number;
        }
    }

    class SegmentList extends GObject.Object {
        static $gtype: GObject.GType<SegmentList>;

        // Own properties of Kkc.SegmentList

        get cursor_pos(): number;
        set cursor_pos(val: number);
        get cursorPos(): number;
        set cursorPos(val: number);
        get size(): number;

        // Constructors of Kkc.SegmentList

        constructor(properties?: Partial<SegmentList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SegmentList;

        // Own methods of Kkc.SegmentList

        clear(): void;
        add(segment: Segment): void;
        get(index: number): Segment;
        get_offset(index: number): number;
        set_segments(segment: Segment): void;
        first_segment(): boolean;
        last_segment(): boolean;
        next_segment(): void;
        previous_segment(): void;
        get_output(): string;
        get_input(): string;
        to_array(): Segment[];
        get_cursor_pos(): number;
        set_cursor_pos(value: number): void;
        get_size(): number;
    }

    module Segment {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            input: string;
            output: string;
        }
    }

    class Segment extends GObject.Object {
        static $gtype: GObject.GType<Segment>;

        // Own properties of Kkc.Segment

        get input(): string;
        set input(val: string);
        get output(): string;
        set output(val: string);

        // Own fields of Kkc.Segment

        next: Segment | null;

        // Constructors of Kkc.Segment

        constructor(properties?: Partial<Segment.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](input: string, output: string): Segment;

        // Own methods of Kkc.Segment

        get_input(): string;
        set_input(value: string): void;
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
            round: boolean;
            page_visible: boolean;
            pageVisible: boolean;
        }
    }

    class CandidateList extends GObject.Object {
        static $gtype: GObject.GType<CandidateList>;

        // Own properties of Kkc.CandidateList

        get cursor_pos(): number;
        set cursor_pos(val: number);
        get cursorPos(): number;
        set cursorPos(val: number);
        get size(): number;
        get page_start(): number;
        set page_start(val: number);
        get pageStart(): number;
        set pageStart(val: number);
        get page_size(): number;
        set page_size(val: number);
        get pageSize(): number;
        set pageSize(val: number);
        get round(): boolean;
        set round(val: boolean);
        get page_visible(): boolean;
        get pageVisible(): boolean;

        // Constructors of Kkc.CandidateList

        constructor(properties?: Partial<CandidateList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](page_start: number, page_size: number, round: boolean): CandidateList;

        // Own signals of Kkc.CandidateList

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'populated', callback: (_source: this) => void): number;
        connect_after(signal: 'populated', callback: (_source: this) => void): number;
        emit(signal: 'populated'): void;
        connect(signal: 'selected', callback: (_source: this, candidate: Candidate) => void): number;
        connect_after(signal: 'selected', callback: (_source: this, candidate: Candidate) => void): number;
        emit(signal: 'selected', candidate: Candidate): void;

        // Own virtual methods of Kkc.CandidateList

        vfunc_next(): boolean;
        vfunc_previous(): boolean;

        // Own methods of Kkc.CandidateList

        get(index: number): Candidate;
        select_at(index_in_page: number): boolean;
        select(): void;
        first(): boolean;
        next(): boolean;
        previous(): boolean;
        cursor_up(): boolean;
        cursor_down(): boolean;
        page_up(): boolean;
        page_down(): boolean;
        get_cursor_pos(): number;
        set_cursor_pos(value: number): void;
        get_size(): number;
        get_page_start(): number;
        set_page_start(value: number): void;
        get_page_size(): number;
        set_page_size(value: number): void;
        get_round(): boolean;
        set_round(value: boolean): void;
        get_page_visible(): boolean;
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

        // Own properties of Kkc.Candidate

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

        // Constructors of Kkc.Candidate

        constructor(properties?: Partial<Candidate.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            midasi: string,
            okuri: boolean,
            text: string,
            annotation?: string | null,
            output?: string | null,
        ): Candidate;

        // Own methods of Kkc.Candidate

        to_string(): string;
        get_midasi(): string;
        set_midasi(value: string): void;
        get_okuri(): boolean;
        set_okuri(value: boolean): void;
        get_text(): string;
        set_text(value: string): void;
        get_annotation(): string | null;
        set_annotation(value?: string | null): void;
        get_output(): string;
        set_output(value: string): void;
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

        // Constructors of Kkc.KeyEventFilter

        constructor(properties?: Partial<KeyEventFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own signals of Kkc.KeyEventFilter

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'forwarded', callback: (_source: this, key: KeyEvent) => void): number;
        connect_after(signal: 'forwarded', callback: (_source: this, key: KeyEvent) => void): number;
        emit(signal: 'forwarded', key: KeyEvent): void;

        // Own virtual methods of Kkc.KeyEventFilter

        vfunc_filter_key_event(key: KeyEvent): KeyEvent | null;
        vfunc_reset(): void;

        // Own methods of Kkc.KeyEventFilter

        filter_key_event(key: KeyEvent): KeyEvent | null;
        reset(): void;
    }

    module KeyEvent {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
            unicode: number;
            keyval: number;
            keycode: number;
            modifiers: ModifierType;
        }
    }

    class KeyEvent extends GObject.Object {
        static $gtype: GObject.GType<KeyEvent>;

        // Own properties of Kkc.KeyEvent

        get name(): string;
        set name(val: string);
        get unicode(): number;
        set unicode(val: number);
        get keyval(): number;
        set keyval(val: number);
        get keycode(): number;
        set keycode(val: number);
        get modifiers(): ModifierType;
        set modifiers(val: ModifierType);

        // Constructors of Kkc.KeyEvent

        constructor(properties?: Partial<KeyEvent.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static from_string(key: string): KeyEvent;

        static from_x_event(keyval: number, keycode: number, modifiers: ModifierType): KeyEvent;

        static ['new'](keyval: number, keycode: number, modifiers: ModifierType): KeyEvent;

        // Own methods of Kkc.KeyEvent

        to_string(): string;
        get_name(): string;
        set_name(value: string): void;
        get_unicode(): number;
        set_unicode(value: number): void;
        get_keyval(): number;
        set_keyval(value: number): void;
        get_keycode(): number;
        set_keycode(value: number): void;
        get_modifiers(): ModifierType;
        set_modifiers(value: ModifierType): void;
    }

    module Keymap {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            parent: Keymap;
        }
    }

    class Keymap extends GObject.Object {
        static $gtype: GObject.GType<Keymap>;

        // Own properties of Kkc.Keymap

        get parent(): Keymap;
        set parent(val: Keymap);

        // Constructors of Kkc.Keymap

        constructor(properties?: Partial<Keymap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Keymap;

        // Own static methods of Kkc.Keymap

        static commands(): string[];
        static get_command_label(command: string): string;

        // Own methods of Kkc.Keymap

        entries(): KeymapEntry[];
        local_entries(): KeymapEntry[];
        set(key: KeyEvent, command?: string | null): void;
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
        lookup_key(key: KeyEvent): string | null;
        where_is(command: string): KeyEvent | null;
        get_parent(): Keymap | null;
        set_parent(value?: Keymap | null): void;
    }

    module NicolaKeyEventFilter {
        // Constructor properties interface

        interface ConstructorProps extends KeyEventFilter.ConstructorProps {}
    }

    class NicolaKeyEventFilter extends KeyEventFilter {
        static $gtype: GObject.GType<NicolaKeyEventFilter>;

        // Own fields of Kkc.NicolaKeyEventFilter

        get_time_func: GetTime;
        get_time_func_target: any;
        get_time_func_target_destroy_notify: GLib.DestroyNotify;
        timeout: number;
        overlap: number;
        maxwait: number;

        // Constructors of Kkc.NicolaKeyEventFilter

        constructor(properties?: Partial<NicolaKeyEventFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): NicolaKeyEventFilter;
    }

    module RomKanaCharacterList {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            size: number;
        }
    }

    class RomKanaCharacterList extends GObject.Object {
        static $gtype: GObject.GType<RomKanaCharacterList>;

        // Own properties of Kkc.RomKanaCharacterList

        get size(): number;

        // Constructors of Kkc.RomKanaCharacterList

        constructor(properties?: Partial<RomKanaCharacterList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RomKanaCharacterList;

        // Own methods of Kkc.RomKanaCharacterList

        add(character: RomKanaCharacter): void;
        add_all(other: RomKanaCharacterList): void;
        insert(index: number, character: RomKanaCharacter): void;
        insert_all(index: number, other: RomKanaCharacterList): void;
        get(index: number): RomKanaCharacter;
        clear(): void;
        slice(start_char_pos: number, stop_char_pos: number): RomKanaCharacterList;
        remove_at(index: number): void;
        get_output(): string;
        get_input(): string;
        get_size(): number;
    }

    module RomKanaConverter {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            kana_mode: KanaMode;
            kanaMode: KanaMode;
            punctuation_style: PunctuationStyle;
            punctuationStyle: PunctuationStyle;
            auto_correct: boolean;
            autoCorrect: boolean;
            pending_output: string;
            pendingOutput: string;
            pending_input: string;
            pendingInput: string;
            produced: RomKanaCharacterList;
        }
    }

    class RomKanaConverter extends GObject.Object {
        static $gtype: GObject.GType<RomKanaConverter>;

        // Own properties of Kkc.RomKanaConverter

        get kana_mode(): KanaMode;
        set kana_mode(val: KanaMode);
        get kanaMode(): KanaMode;
        set kanaMode(val: KanaMode);
        get punctuation_style(): PunctuationStyle;
        set punctuation_style(val: PunctuationStyle);
        get punctuationStyle(): PunctuationStyle;
        set punctuationStyle(val: PunctuationStyle);
        get auto_correct(): boolean;
        set auto_correct(val: boolean);
        get autoCorrect(): boolean;
        set autoCorrect(val: boolean);
        get pending_output(): string;
        get pendingOutput(): string;
        get pending_input(): string;
        get pendingInput(): string;
        get produced(): RomKanaCharacterList;

        // Constructors of Kkc.RomKanaConverter

        constructor(properties?: Partial<RomKanaConverter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RomKanaConverter;

        // Own methods of Kkc.RomKanaConverter

        get_produced_output(): string;
        is_valid(uc: number): boolean;
        flush_partial(): boolean;
        append_text(text: string): void;
        append(uc: number): boolean;
        can_consume(uc: number, no_carryover: boolean): boolean;
        reset(): void;
        ['delete'](): boolean;
        get_kana_mode(): KanaMode;
        set_kana_mode(value: KanaMode): void;
        get_punctuation_style(): PunctuationStyle;
        set_punctuation_style(value: PunctuationStyle): void;
        get_auto_correct(): boolean;
        set_auto_correct(value: boolean): void;
        get_pending_output(): string;
        get_pending_input(): string;
        get_produced(): RomKanaCharacterList;
    }

    module RuleMetadata {
        // Constructor properties interface

        interface ConstructorProps extends MetadataFile.ConstructorProps {
            filter: string;
            priority: number;
        }
    }

    class RuleMetadata extends MetadataFile {
        static $gtype: GObject.GType<RuleMetadata>;

        // Own properties of Kkc.RuleMetadata

        get filter(): string;
        set filter(val: string);
        get priority(): number;
        set priority(val: number);

        // Constructors of Kkc.RuleMetadata

        constructor(properties?: Partial<RuleMetadata.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, filename: string): RuleMetadata;

        // Own static methods of Kkc.RuleMetadata

        static find(name: string): RuleMetadata | null;

        // Own methods of Kkc.RuleMetadata

        create_key_event_filter(): KeyEventFilter;
        locate_map_file(type: string, name: string): string | null;
        get_filter(): string;
        set_filter(value: string): void;
        get_priority(): number;
        set_priority(value: number): void;
    }

    module Rule {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            metadata: RuleMetadata;
            filter: KeyEventFilter;
        }
    }

    class Rule extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<Rule>;

        // Own properties of Kkc.Rule

        get metadata(): RuleMetadata;
        set metadata(val: RuleMetadata);
        get filter(): KeyEventFilter;
        set filter(val: KeyEventFilter);

        // Own fields of Kkc.Rule

        rom_kana: never;

        // Constructors of Kkc.Rule

        constructor(properties?: Partial<Rule.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](metadata: RuleMetadata): Rule;

        // Own static methods of Kkc.Rule

        static list(): RuleMetadata[];

        // Own methods of Kkc.Rule

        get_keymap(mode: InputMode): Keymap;
        get_metadata(): RuleMetadata;
        set_metadata(value: RuleMetadata): void;
        get_filter(): KeyEventFilter;
        set_filter(value: KeyEventFilter): void;

        // Inherited methods
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [introduction][ginitable] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [introduction][ginitable] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
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
        vfunc_constructed(): void;
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        vfunc_dispose(): void;
        vfunc_finalize(): void;
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
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module UserRule {
        // Constructor properties interface

        interface ConstructorProps extends Rule.ConstructorProps {}
    }

    class UserRule extends Rule {
        static $gtype: GObject.GType<UserRule>;

        // Constructors of Kkc.UserRule

        constructor(properties?: Partial<UserRule.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](parent: RuleMetadata, base_dir: string, prefix: string): UserRule;
        // Conflicted with Kkc.Rule.new

        static ['new'](...args: never[]): any;

        // Own methods of Kkc.UserRule

        write(input_mode: InputMode): void;
    }

    module Context {
        // Signal callback interfaces

        interface RequestSelectionText {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            dictionaries: DictionaryList;
            candidates: CandidateList;
            segments: SegmentList;
            input: string;
            input_cursor_pos: number;
            inputCursorPos: number;
            input_cursor_width: number;
            inputCursorWidth: number;
            input_mode: InputMode;
            inputMode: InputMode;
            punctuation_style: PunctuationStyle;
            punctuationStyle: PunctuationStyle;
            auto_correct: boolean;
            autoCorrect: boolean;
            typing_rule: Rule;
            typingRule: Rule;
            key_event_filter: KeyEventFilter;
            keyEventFilter: KeyEventFilter;
        }
    }

    class Context extends GObject.Object {
        static $gtype: GObject.GType<Context>;

        // Own properties of Kkc.Context

        get dictionaries(): DictionaryList;
        set dictionaries(val: DictionaryList);
        get candidates(): CandidateList;
        get segments(): SegmentList;
        get input(): string;
        get input_cursor_pos(): number;
        get inputCursorPos(): number;
        get input_cursor_width(): number;
        get inputCursorWidth(): number;
        get input_mode(): InputMode;
        set input_mode(val: InputMode);
        get inputMode(): InputMode;
        set inputMode(val: InputMode);
        get punctuation_style(): PunctuationStyle;
        set punctuation_style(val: PunctuationStyle);
        get punctuationStyle(): PunctuationStyle;
        set punctuationStyle(val: PunctuationStyle);
        get auto_correct(): boolean;
        set auto_correct(val: boolean);
        get autoCorrect(): boolean;
        set autoCorrect(val: boolean);
        get typing_rule(): Rule;
        set typing_rule(val: Rule);
        get typingRule(): Rule;
        set typingRule(val: Rule);
        get key_event_filter(): KeyEventFilter;
        get keyEventFilter(): KeyEventFilter;

        // Constructors of Kkc.Context

        constructor(properties?: Partial<Context.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](model: LanguageModel): Context;

        // Own signals of Kkc.Context

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'request-selection-text', callback: (_source: this) => void): number;
        connect_after(signal: 'request-selection-text', callback: (_source: this) => void): number;
        emit(signal: 'request-selection-text'): void;

        // Own methods of Kkc.Context

        set_selection_text(text?: string | null): void;
        process_key_events(keyseq: string): boolean;
        process_key_event(key: KeyEvent): boolean;
        reset(): void;
        has_output(): boolean;
        peek_output(): string;
        poll_output(): string;
        clear_output(): void;
        get_dictionaries(): DictionaryList;
        set_dictionaries(value: DictionaryList): void;
        get_candidates(): CandidateList;
        get_segments(): SegmentList;
        get_input(): string;
        get_input_cursor_pos(): number;
        get_input_cursor_width(): number;
        get_input_mode(): InputMode;
        set_input_mode(value: InputMode): void;
        get_punctuation_style(): PunctuationStyle;
        set_punctuation_style(value: PunctuationStyle): void;
        get_auto_correct(): boolean;
        set_auto_correct(value: boolean): void;
        get_typing_rule(): Rule;
        set_typing_rule(value: Rule): void;
        get_key_event_filter(): KeyEventFilter;
    }

    module EmptySegmentDictionary {
        // Constructor properties interface

        interface ConstructorProps
            extends GObject.Object.ConstructorProps,
                Dictionary.ConstructorProps,
                SegmentDictionary.ConstructorProps {}
    }

    class EmptySegmentDictionary extends GObject.Object implements Dictionary, SegmentDictionary {
        static $gtype: GObject.GType<EmptySegmentDictionary>;

        // Constructors of Kkc.EmptySegmentDictionary

        constructor(properties?: Partial<EmptySegmentDictionary.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): EmptySegmentDictionary;

        // Inherited methods
        reload(): void;
        save(): void;
        vfunc_reload(): void;
        vfunc_save(): void;
        lookup_candidates(midasi: string, okuri: boolean): [boolean, Candidate[]];
        complete(midasi: string): string[];
        select_candidate(candidate: Candidate): boolean;
        purge_candidate(candidate: Candidate): boolean;
        vfunc_lookup_candidates(midasi: string, okuri: boolean): [boolean, Candidate[]];
        vfunc_complete(midasi: string): string[];
        vfunc_select_candidate(candidate: Candidate): boolean;
        vfunc_purge_candidate(candidate: Candidate): boolean;
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
        vfunc_constructed(): void;
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        vfunc_dispose(): void;
        vfunc_finalize(): void;
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
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module SystemSegmentDictionary {
        // Constructor properties interface

        interface ConstructorProps
            extends GObject.Object.ConstructorProps,
                Dictionary.ConstructorProps,
                SegmentDictionary.ConstructorProps {}
    }

    class SystemSegmentDictionary extends GObject.Object implements Dictionary, SegmentDictionary {
        static $gtype: GObject.GType<SystemSegmentDictionary>;

        // Constructors of Kkc.SystemSegmentDictionary

        constructor(properties?: Partial<SystemSegmentDictionary.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](path: string, encoding: string): SystemSegmentDictionary;

        // Inherited methods
        reload(): void;
        save(): void;
        vfunc_reload(): void;
        vfunc_save(): void;
        lookup_candidates(midasi: string, okuri: boolean): [boolean, Candidate[]];
        complete(midasi: string): string[];
        select_candidate(candidate: Candidate): boolean;
        purge_candidate(candidate: Candidate): boolean;
        vfunc_lookup_candidates(midasi: string, okuri: boolean): [boolean, Candidate[]];
        vfunc_complete(midasi: string): string[];
        vfunc_select_candidate(candidate: Candidate): boolean;
        vfunc_purge_candidate(candidate: Candidate): boolean;
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
        vfunc_constructed(): void;
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        vfunc_dispose(): void;
        vfunc_finalize(): void;
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
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module UserSegmentDictionary {
        // Constructor properties interface

        interface ConstructorProps
            extends GObject.Object.ConstructorProps,
                Dictionary.ConstructorProps,
                SegmentDictionary.ConstructorProps {}
    }

    class UserSegmentDictionary extends GObject.Object implements Dictionary, SegmentDictionary {
        static $gtype: GObject.GType<UserSegmentDictionary>;

        // Constructors of Kkc.UserSegmentDictionary

        constructor(properties?: Partial<UserSegmentDictionary.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](path: string): UserSegmentDictionary;

        // Inherited methods
        reload(): void;
        save(): void;
        vfunc_reload(): void;
        vfunc_save(): void;
        lookup_candidates(midasi: string, okuri: boolean): [boolean, Candidate[]];
        complete(midasi: string): string[];
        select_candidate(candidate: Candidate): boolean;
        purge_candidate(candidate: Candidate): boolean;
        vfunc_lookup_candidates(midasi: string, okuri: boolean): [boolean, Candidate[]];
        vfunc_complete(midasi: string): string[];
        vfunc_select_candidate(candidate: Candidate): boolean;
        vfunc_purge_candidate(candidate: Candidate): boolean;
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
        vfunc_constructed(): void;
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        vfunc_dispose(): void;
        vfunc_finalize(): void;
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
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module UserSentenceDictionary {
        // Constructor properties interface

        interface ConstructorProps
            extends GObject.Object.ConstructorProps,
                Dictionary.ConstructorProps,
                SentenceDictionary.ConstructorProps {}
    }

    class UserSentenceDictionary extends GObject.Object implements Dictionary, SentenceDictionary {
        static $gtype: GObject.GType<UserSentenceDictionary>;

        // Constructors of Kkc.UserSentenceDictionary

        constructor(properties?: Partial<UserSentenceDictionary.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](path: string): UserSentenceDictionary;

        // Inherited methods
        reload(): void;
        save(): void;
        vfunc_reload(): void;
        vfunc_save(): void;
        lookup_constraint(input: string): [boolean, number[]];
        lookup_phrase(input: string[]): [boolean, string[]];
        select_segments(input: Segment[]): boolean;
        vfunc_lookup_constraint(input: string): [boolean, number[]];
        vfunc_lookup_phrase(input: string[]): [boolean, string[]];
        vfunc_select_segments(input: Segment[]): boolean;
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
        vfunc_constructed(): void;
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        vfunc_dispose(): void;
        vfunc_finalize(): void;
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
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module UserDictionary {
        // Constructor properties interface

        interface ConstructorProps
            extends GObject.Object.ConstructorProps,
                Dictionary.ConstructorProps,
                SegmentDictionary.ConstructorProps,
                SentenceDictionary.ConstructorProps {}
    }

    class UserDictionary extends GObject.Object implements Dictionary, SegmentDictionary, SentenceDictionary {
        static $gtype: GObject.GType<UserDictionary>;

        // Constructors of Kkc.UserDictionary

        constructor(properties?: Partial<UserDictionary.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](basedir: string): UserDictionary;

        // Inherited methods
        reload(): void;
        save(): void;
        vfunc_reload(): void;
        vfunc_save(): void;
        lookup_candidates(midasi: string, okuri: boolean): [boolean, Candidate[]];
        complete(midasi: string): string[];
        select_candidate(candidate: Candidate): boolean;
        purge_candidate(candidate: Candidate): boolean;
        vfunc_lookup_candidates(midasi: string, okuri: boolean): [boolean, Candidate[]];
        vfunc_complete(midasi: string): string[];
        vfunc_select_candidate(candidate: Candidate): boolean;
        vfunc_purge_candidate(candidate: Candidate): boolean;
        lookup_constraint(input: string): [boolean, number[]];
        lookup_phrase(input: string[]): [boolean, string[]];
        select_segments(input: Segment[]): boolean;
        vfunc_lookup_constraint(input: string): [boolean, number[]];
        vfunc_lookup_phrase(input: string[]): [boolean, string[]];
        vfunc_select_segments(input: Segment[]): boolean;
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
        vfunc_constructed(): void;
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        vfunc_dispose(): void;
        vfunc_finalize(): void;
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
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module DictionaryList {
        interface DictionaryCallback {
            (dictionary: Dictionary): DictionaryCallbackReturn;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            size: number;
        }
    }

    class DictionaryList extends GObject.Object {
        static $gtype: GObject.GType<DictionaryList>;

        // Own properties of Kkc.DictionaryList

        get size(): number;

        // Constructors of Kkc.DictionaryList

        constructor(properties?: Partial<DictionaryList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DictionaryList;

        // Own methods of Kkc.DictionaryList

        add(dictionary: Dictionary): void;
        remove(dictionary: Dictionary): void;
        clear(): void;
        call(type: GObject.GType | null, callback: DictionaryList.DictionaryCallback): void;
        save(): void;
        get_size(): number;
    }

    module DBusCandidateList {
        // Signal callback interfaces

        interface Populated {
            (): void;
        }

        interface Selected {
            (midasi: string, okuri: boolean, text: string, annotation: string): void;
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
            round: boolean;
            page_visible: boolean;
            pageVisible: boolean;
        }
    }

    class DBusCandidateList extends GObject.Object {
        static $gtype: GObject.GType<DBusCandidateList>;

        // Own properties of Kkc.DBusCandidateList

        get cursor_pos(): number;
        get cursorPos(): number;
        get size(): number;
        get page_start(): number;
        get pageStart(): number;
        get page_size(): number;
        get pageSize(): number;
        get round(): boolean;
        get page_visible(): boolean;
        get pageVisible(): boolean;

        // Constructors of Kkc.DBusCandidateList

        constructor(properties?: Partial<DBusCandidateList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            connection: Gio.DBusConnection,
            object_path: string,
            candidates: CandidateList,
        ): DBusCandidateList;

        // Own signals of Kkc.DBusCandidateList

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'populated', callback: (_source: this) => void): number;
        connect_after(signal: 'populated', callback: (_source: this) => void): number;
        emit(signal: 'populated'): void;
        connect(
            signal: 'selected',
            callback: (_source: this, midasi: string, okuri: boolean, text: string, annotation: string) => void,
        ): number;
        connect_after(
            signal: 'selected',
            callback: (_source: this, midasi: string, okuri: boolean, text: string, annotation: string) => void,
        ): number;
        emit(signal: 'selected', midasi: string, okuri: boolean, text: string, annotation: string): void;

        // Own methods of Kkc.DBusCandidateList

        select_at(index_in_page: number): boolean;
        select(): void;
        first(): boolean;
        next(): boolean;
        previous(): boolean;
        cursor_up(): boolean;
        cursor_down(): boolean;
        page_up(): boolean;
        page_down(): boolean;
        get(index: number): [string, boolean, string, string];
        get_cursor_pos(): number;
        get_size(): number;
        get_page_start(): number;
        get_page_size(): number;
        get_round(): boolean;
        get_page_visible(): boolean;
    }

    module DBusSegmentList {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            cursor_pos: number;
            cursorPos: number;
            size: number;
        }
    }

    class DBusSegmentList extends GObject.Object {
        static $gtype: GObject.GType<DBusSegmentList>;

        // Own properties of Kkc.DBusSegmentList

        get cursor_pos(): number;
        get cursorPos(): number;
        get size(): number;

        // Constructors of Kkc.DBusSegmentList

        constructor(properties?: Partial<DBusSegmentList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](connection: Gio.DBusConnection, object_path: string, segments: SegmentList): DBusSegmentList;

        // Own methods of Kkc.DBusSegmentList

        get(index: number): [string, string];
        first_segment(): boolean;
        last_segment(): boolean;
        next_segment(): void;
        previous_segment(): void;
        get_output(): string;
        get_input(): string;
        get_cursor_pos(): number;
        get_size(): number;
    }

    module DBusContext {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            input: string;
            input_cursor_pos: number;
            inputCursorPos: number;
            input_mode: number;
            inputMode: number;
            punctuation_style: number;
            punctuationStyle: number;
            auto_correct: boolean;
            autoCorrect: boolean;
        }
    }

    class DBusContext extends GObject.Object {
        static $gtype: GObject.GType<DBusContext>;

        // Own properties of Kkc.DBusContext

        get input(): string;
        get input_cursor_pos(): number;
        get inputCursorPos(): number;
        get input_mode(): number;
        set input_mode(val: number);
        get inputMode(): number;
        set inputMode(val: number);
        get punctuation_style(): number;
        set punctuation_style(val: number);
        get punctuationStyle(): number;
        set punctuationStyle(val: number);
        get auto_correct(): boolean;
        set auto_correct(val: boolean);
        get autoCorrect(): boolean;
        set autoCorrect(val: boolean);

        // Constructors of Kkc.DBusContext

        constructor(properties?: Partial<DBusContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](connection: Gio.DBusConnection, object_path: string, context: Context): DBusContext;

        // Own methods of Kkc.DBusContext

        process_key_event(keyval: number, keycode: number, modifiers: number): boolean;
        process_command_event(command: string): boolean;
        reset(): void;
        has_output(): boolean;
        peek_output(): string;
        poll_output(): string;
        clear_output(): void;
        get_input(): string;
        get_input_cursor_pos(): number;
        get_input_mode(): number;
        set_input_mode(value: number): void;
        get_punctuation_style(): number;
        set_punctuation_style(value: number): void;
        get_auto_correct(): boolean;
        set_auto_correct(value: boolean): void;
    }

    module DBusServer {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class DBusServer extends GObject.Object {
        static $gtype: GObject.GType<DBusServer>;

        // Constructors of Kkc.DBusServer

        constructor(properties?: Partial<DBusServer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            connection: Gio.DBusConnection,
            model: LanguageModel,
            dictionaries: DictionaryList,
            typing_rule?: Rule | null,
        ): DBusServer;

        // Own methods of Kkc.DBusServer

        create_context(sender: never): string;
        destroy_context(object_path: string): void;
    }

    type MetadataFileClass = typeof MetadataFile;
    abstract class MetadataFilePrivate {
        static $gtype: GObject.GType<MetadataFilePrivate>;

        // Constructors of Kkc.MetadataFilePrivate

        _init(...args: any[]): void;
    }

    type TrellisNodeClass = typeof TrellisNode;
    abstract class TrellisNodePrivate {
        static $gtype: GObject.GType<TrellisNodePrivate>;

        // Constructors of Kkc.TrellisNodePrivate

        _init(...args: any[]): void;
    }

    type UnigramTrellisNodeClass = typeof UnigramTrellisNode;
    abstract class UnigramTrellisNodePrivate {
        static $gtype: GObject.GType<UnigramTrellisNodePrivate>;

        // Constructors of Kkc.UnigramTrellisNodePrivate

        _init(...args: any[]): void;
    }

    type BigramTrellisNodeClass = typeof BigramTrellisNode;
    abstract class BigramTrellisNodePrivate {
        static $gtype: GObject.GType<BigramTrellisNodePrivate>;

        // Constructors of Kkc.BigramTrellisNodePrivate

        _init(...args: any[]): void;
    }

    type LanguageModelMetadataClass = typeof LanguageModelMetadata;
    abstract class LanguageModelMetadataPrivate {
        static $gtype: GObject.GType<LanguageModelMetadataPrivate>;

        // Constructors of Kkc.LanguageModelMetadataPrivate

        _init(...args: any[]): void;
    }

    type LanguageModelClass = typeof LanguageModel;
    abstract class LanguageModelPrivate {
        static $gtype: GObject.GType<LanguageModelPrivate>;

        // Constructors of Kkc.LanguageModelPrivate

        _init(...args: any[]): void;
    }

    type TextBigramLanguageModelClass = typeof TextBigramLanguageModel;
    abstract class TextBigramLanguageModelPrivate {
        static $gtype: GObject.GType<TextBigramLanguageModelPrivate>;

        // Constructors of Kkc.TextBigramLanguageModelPrivate

        _init(...args: any[]): void;
    }

    type TextTrigramLanguageModelClass = typeof TextTrigramLanguageModel;
    abstract class TextTrigramLanguageModelPrivate {
        static $gtype: GObject.GType<TextTrigramLanguageModelPrivate>;

        // Constructors of Kkc.TextTrigramLanguageModelPrivate

        _init(...args: any[]): void;
    }

    type SortedBigramLanguageModelClass = typeof SortedBigramLanguageModel;
    abstract class SortedBigramLanguageModelPrivate {
        static $gtype: GObject.GType<SortedBigramLanguageModelPrivate>;

        // Constructors of Kkc.SortedBigramLanguageModelPrivate

        _init(...args: any[]): void;
    }

    type SortedTrigramLanguageModelClass = typeof SortedTrigramLanguageModel;
    abstract class SortedTrigramLanguageModelPrivate {
        static $gtype: GObject.GType<SortedTrigramLanguageModelPrivate>;

        // Constructors of Kkc.SortedTrigramLanguageModelPrivate

        _init(...args: any[]): void;
    }

    type DecoderClass = typeof Decoder;
    abstract class DecoderPrivate {
        static $gtype: GObject.GType<DecoderPrivate>;

        // Constructors of Kkc.DecoderPrivate

        _init(...args: any[]): void;
    }

    type BigramDecoderClass = typeof BigramDecoder;
    abstract class BigramDecoderPrivate {
        static $gtype: GObject.GType<BigramDecoderPrivate>;

        // Constructors of Kkc.BigramDecoderPrivate

        _init(...args: any[]): void;
    }

    type TrigramDecoderClass = typeof TrigramDecoder;
    abstract class TrigramDecoderPrivate {
        static $gtype: GObject.GType<TrigramDecoderPrivate>;

        // Constructors of Kkc.TrigramDecoderPrivate

        _init(...args: any[]): void;
    }

    type SegmentListClass = typeof SegmentList;
    abstract class SegmentListPrivate {
        static $gtype: GObject.GType<SegmentListPrivate>;

        // Constructors of Kkc.SegmentListPrivate

        _init(...args: any[]): void;
    }

    type SegmentClass = typeof Segment;
    abstract class SegmentPrivate {
        static $gtype: GObject.GType<SegmentPrivate>;

        // Constructors of Kkc.SegmentPrivate

        _init(...args: any[]): void;
    }

    type CandidateListClass = typeof CandidateList;
    abstract class CandidateListPrivate {
        static $gtype: GObject.GType<CandidateListPrivate>;

        // Constructors of Kkc.CandidateListPrivate

        _init(...args: any[]): void;
    }

    type CandidateClass = typeof Candidate;
    abstract class CandidatePrivate {
        static $gtype: GObject.GType<CandidatePrivate>;

        // Constructors of Kkc.CandidatePrivate

        _init(...args: any[]): void;
    }

    type KeyEventFilterClass = typeof KeyEventFilter;
    abstract class KeyEventFilterPrivate {
        static $gtype: GObject.GType<KeyEventFilterPrivate>;

        // Constructors of Kkc.KeyEventFilterPrivate

        _init(...args: any[]): void;
    }

    type KeyEventClass = typeof KeyEvent;
    abstract class KeyEventPrivate {
        static $gtype: GObject.GType<KeyEventPrivate>;

        // Constructors of Kkc.KeyEventPrivate

        _init(...args: any[]): void;
    }

    type KeymapClass = typeof Keymap;
    abstract class KeymapPrivate {
        static $gtype: GObject.GType<KeymapPrivate>;

        // Constructors of Kkc.KeymapPrivate

        _init(...args: any[]): void;
    }

    type NicolaKeyEventFilterClass = typeof NicolaKeyEventFilter;
    abstract class NicolaKeyEventFilterPrivate {
        static $gtype: GObject.GType<NicolaKeyEventFilterPrivate>;

        // Constructors of Kkc.NicolaKeyEventFilterPrivate

        _init(...args: any[]): void;
    }

    type RomKanaCharacterListClass = typeof RomKanaCharacterList;
    abstract class RomKanaCharacterListPrivate {
        static $gtype: GObject.GType<RomKanaCharacterListPrivate>;

        // Constructors of Kkc.RomKanaCharacterListPrivate

        _init(...args: any[]): void;
    }

    type RomKanaConverterClass = typeof RomKanaConverter;
    abstract class RomKanaConverterPrivate {
        static $gtype: GObject.GType<RomKanaConverterPrivate>;

        // Constructors of Kkc.RomKanaConverterPrivate

        _init(...args: any[]): void;
    }

    type RuleMetadataClass = typeof RuleMetadata;
    abstract class RuleMetadataPrivate {
        static $gtype: GObject.GType<RuleMetadataPrivate>;

        // Constructors of Kkc.RuleMetadataPrivate

        _init(...args: any[]): void;
    }

    type RuleClass = typeof Rule;
    abstract class RulePrivate {
        static $gtype: GObject.GType<RulePrivate>;

        // Constructors of Kkc.RulePrivate

        _init(...args: any[]): void;
    }

    type UserRuleClass = typeof UserRule;
    abstract class UserRulePrivate {
        static $gtype: GObject.GType<UserRulePrivate>;

        // Constructors of Kkc.UserRulePrivate

        _init(...args: any[]): void;
    }

    type ContextClass = typeof Context;
    abstract class ContextPrivate {
        static $gtype: GObject.GType<ContextPrivate>;

        // Constructors of Kkc.ContextPrivate

        _init(...args: any[]): void;
    }

    type EmptySegmentDictionaryClass = typeof EmptySegmentDictionary;
    abstract class EmptySegmentDictionaryPrivate {
        static $gtype: GObject.GType<EmptySegmentDictionaryPrivate>;

        // Constructors of Kkc.EmptySegmentDictionaryPrivate

        _init(...args: any[]): void;
    }

    type SystemSegmentDictionaryClass = typeof SystemSegmentDictionary;
    abstract class SystemSegmentDictionaryPrivate {
        static $gtype: GObject.GType<SystemSegmentDictionaryPrivate>;

        // Constructors of Kkc.SystemSegmentDictionaryPrivate

        _init(...args: any[]): void;
    }

    type UserSegmentDictionaryClass = typeof UserSegmentDictionary;
    abstract class UserSegmentDictionaryPrivate {
        static $gtype: GObject.GType<UserSegmentDictionaryPrivate>;

        // Constructors of Kkc.UserSegmentDictionaryPrivate

        _init(...args: any[]): void;
    }

    type UserSentenceDictionaryClass = typeof UserSentenceDictionary;
    abstract class UserSentenceDictionaryPrivate {
        static $gtype: GObject.GType<UserSentenceDictionaryPrivate>;

        // Constructors of Kkc.UserSentenceDictionaryPrivate

        _init(...args: any[]): void;
    }

    type UserDictionaryClass = typeof UserDictionary;
    abstract class UserDictionaryPrivate {
        static $gtype: GObject.GType<UserDictionaryPrivate>;

        // Constructors of Kkc.UserDictionaryPrivate

        _init(...args: any[]): void;
    }

    type DictionaryListClass = typeof DictionaryList;
    abstract class DictionaryListPrivate {
        static $gtype: GObject.GType<DictionaryListPrivate>;

        // Constructors of Kkc.DictionaryListPrivate

        _init(...args: any[]): void;
    }

    type DBusCandidateListClass = typeof DBusCandidateList;
    abstract class DBusCandidateListPrivate {
        static $gtype: GObject.GType<DBusCandidateListPrivate>;

        // Constructors of Kkc.DBusCandidateListPrivate

        _init(...args: any[]): void;
    }

    type DBusSegmentListClass = typeof DBusSegmentList;
    abstract class DBusSegmentListPrivate {
        static $gtype: GObject.GType<DBusSegmentListPrivate>;

        // Constructors of Kkc.DBusSegmentListPrivate

        _init(...args: any[]): void;
    }

    type DBusContextClass = typeof DBusContext;
    abstract class DBusContextPrivate {
        static $gtype: GObject.GType<DBusContextPrivate>;

        // Constructors of Kkc.DBusContextPrivate

        _init(...args: any[]): void;
    }

    type DBusServerClass = typeof DBusServer;
    abstract class DBusServerPrivate {
        static $gtype: GObject.GType<DBusServerPrivate>;

        // Constructors of Kkc.DBusServerPrivate

        _init(...args: any[]): void;
    }

    type UnigramLanguageModelIface = typeof UnigramLanguageModel;
    type BigramLanguageModelIface = typeof BigramLanguageModel;
    type TrigramLanguageModelIface = typeof TrigramLanguageModel;
    type DictionaryIface = typeof Dictionary;
    type SegmentDictionaryIface = typeof SegmentDictionary;
    type SentenceDictionaryIface = typeof SentenceDictionary;
    class LanguageModelEntry {
        static $gtype: GObject.GType<LanguageModelEntry>;

        // Own fields of Kkc.LanguageModelEntry

        input: string;
        output: string;
        id: number;

        // Constructors of Kkc.LanguageModelEntry

        constructor(
            properties?: Partial<{
                input: string;
                output: string;
                id: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    class KeymapEntry {
        static $gtype: GObject.GType<KeymapEntry>;

        // Own fields of Kkc.KeymapEntry

        key: KeyEvent;
        command: string | null;

        // Constructors of Kkc.KeymapEntry

        _init(...args: any[]): void;
    }

    class RomKanaCharacter {
        static $gtype: GObject.GType<RomKanaCharacter>;

        // Own fields of Kkc.RomKanaCharacter

        output: string;
        input: string;

        // Constructors of Kkc.RomKanaCharacter

        constructor(
            properties?: Partial<{
                output: string;
                input: string;
            }>,
        );
        _init(...args: any[]): void;
    }

    module UnigramLanguageModel {
        // Constructor properties interface

        interface ConstructorProps extends LanguageModel.ConstructorProps {}
    }

    export interface UnigramLanguageModelNamespace {
        $gtype: GObject.GType<UnigramLanguageModel>;
        prototype: UnigramLanguageModel;
    }
    interface UnigramLanguageModel extends LanguageModel {
        // Own methods of Kkc.UnigramLanguageModel

        unigram_cost(entry: LanguageModelEntry): number;
        unigram_backoff(entry: LanguageModelEntry): number;

        // Own virtual methods of Kkc.UnigramLanguageModel

        vfunc_unigram_cost(entry: LanguageModelEntry): number;
        vfunc_unigram_backoff(entry: LanguageModelEntry): number;
    }

    export const UnigramLanguageModel: UnigramLanguageModelNamespace;

    module BigramLanguageModel {
        // Constructor properties interface

        interface ConstructorProps extends UnigramLanguageModel.ConstructorProps {}
    }

    export interface BigramLanguageModelNamespace {
        $gtype: GObject.GType<BigramLanguageModel>;
        prototype: BigramLanguageModel;
    }
    interface BigramLanguageModel extends UnigramLanguageModel {
        // Own methods of Kkc.BigramLanguageModel

        has_bigram(pentry: LanguageModelEntry, entry: LanguageModelEntry): boolean;
        bigram_cost(pentry: LanguageModelEntry, entry: LanguageModelEntry): number;
        bigram_backoff(pentry: LanguageModelEntry, entry: LanguageModelEntry): number;
        bigram_backoff_cost(pentry: LanguageModelEntry, entry: LanguageModelEntry): number;

        // Own virtual methods of Kkc.BigramLanguageModel

        vfunc_has_bigram(pentry: LanguageModelEntry, entry: LanguageModelEntry): boolean;
        vfunc_bigram_cost(pentry: LanguageModelEntry, entry: LanguageModelEntry): number;
        vfunc_bigram_backoff(pentry: LanguageModelEntry, entry: LanguageModelEntry): number;
    }

    export const BigramLanguageModel: BigramLanguageModelNamespace;

    module TrigramLanguageModel {
        // Constructor properties interface

        interface ConstructorProps extends BigramLanguageModel.ConstructorProps {}
    }

    export interface TrigramLanguageModelNamespace {
        $gtype: GObject.GType<TrigramLanguageModel>;
        prototype: TrigramLanguageModel;
    }
    interface TrigramLanguageModel extends BigramLanguageModel {
        // Own methods of Kkc.TrigramLanguageModel

        has_trigram(ppentry: LanguageModelEntry, pentry: LanguageModelEntry, entry: LanguageModelEntry): boolean;
        trigram_cost(ppentry: LanguageModelEntry, pentry: LanguageModelEntry, entry: LanguageModelEntry): number;
        trigram_backoff_cost(
            ppentry: LanguageModelEntry,
            pentry: LanguageModelEntry,
            entry: LanguageModelEntry,
        ): number;

        // Own virtual methods of Kkc.TrigramLanguageModel

        vfunc_has_trigram(ppentry: LanguageModelEntry, pentry: LanguageModelEntry, entry: LanguageModelEntry): boolean;
        vfunc_trigram_cost(ppentry: LanguageModelEntry, pentry: LanguageModelEntry, entry: LanguageModelEntry): number;
    }

    export const TrigramLanguageModel: TrigramLanguageModelNamespace;

    module Dictionary {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DictionaryNamespace {
        $gtype: GObject.GType<Dictionary>;
        prototype: Dictionary;
    }
    interface Dictionary extends GObject.Object {
        // Own methods of Kkc.Dictionary

        reload(): void;
        save(): void;

        // Own virtual methods of Kkc.Dictionary

        vfunc_reload(): void;
        vfunc_save(): void;
    }

    export const Dictionary: DictionaryNamespace;

    module SegmentDictionary {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface SegmentDictionaryNamespace {
        $gtype: GObject.GType<SegmentDictionary>;
        prototype: SegmentDictionary;
    }
    interface SegmentDictionary extends GObject.Object {
        // Own methods of Kkc.SegmentDictionary

        lookup_candidates(midasi: string, okuri: boolean): [boolean, Candidate[]];
        complete(midasi: string): string[];
        select_candidate(candidate: Candidate): boolean;
        purge_candidate(candidate: Candidate): boolean;

        // Own virtual methods of Kkc.SegmentDictionary

        vfunc_lookup_candidates(midasi: string, okuri: boolean): [boolean, Candidate[]];
        vfunc_complete(midasi: string): string[];
        vfunc_select_candidate(candidate: Candidate): boolean;
        vfunc_purge_candidate(candidate: Candidate): boolean;
    }

    export const SegmentDictionary: SegmentDictionaryNamespace;

    module SentenceDictionary {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface SentenceDictionaryNamespace {
        $gtype: GObject.GType<SentenceDictionary>;
        prototype: SentenceDictionary;
    }
    interface SentenceDictionary extends GObject.Object {
        // Own methods of Kkc.SentenceDictionary

        lookup_constraint(input: string): [boolean, number[]];
        lookup_phrase(input: string[]): [boolean, string[]];
        select_segments(input: Segment[]): boolean;

        // Own virtual methods of Kkc.SentenceDictionary

        vfunc_lookup_constraint(input: string): [boolean, number[]];
        vfunc_lookup_phrase(input: string[]): [boolean, string[]];
        vfunc_select_segments(input: Segment[]): boolean;
    }

    export const SentenceDictionary: SentenceDictionaryNamespace;

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

export default Kkc;
// END
