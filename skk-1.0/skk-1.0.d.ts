/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Skk {
    /**
     * Skk-1.0
     */

    export namespace KanaMode {
        export const $gtype: GObject.GType<KanaMode>;
    }

    enum KanaMode {
        HIRAGANA,
        KATAKANA,
        HANKAKU_KATAKANA,
    }

    export namespace PeriodStyle {
        export const $gtype: GObject.GType<PeriodStyle>;
    }

    enum PeriodStyle {
        JA_JA,
        EN_EN,
        JA_EN,
        EN_JA,
    }

    export namespace InputMode {
        export const $gtype: GObject.GType<InputMode>;
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

        // Static fields

        static PARSE_FAILED: number;
        static KEYSYM_NOT_FOUND: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    class RuleParseError extends GLib.Error {
        static $gtype: GObject.GType<RuleParseError>;

        // Static fields

        static FAILED: number;

        // Constructors

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

    export namespace ModifierType {
        export const $gtype: GObject.GType<ModifierType>;
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

        // Properties

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

        // Constructors

        constructor(properties?: Partial<RomKanaConverter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RomKanaConverter;

        // Methods

        is_valid(uc: number): boolean;
        output_nn_if_any(): boolean;
        append_text(text: string): void;
        append(uc: number): boolean;
        can_consume(uc: number, preedit_only: boolean, no_carryover: boolean): boolean;
        reset(): void;
        ['delete'](): boolean;
        get_kana_mode(): KanaMode;
        set_kana_mode(value: KanaMode | null): void;
        get_period_style(): PeriodStyle;
        set_period_style(value: PeriodStyle | null): void;
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

        // Properties

        get read_only(): boolean;
        get readOnly(): boolean;

        // Constructors

        constructor(properties?: Partial<Dict.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Virtual methods

        vfunc_reload(): void;
        vfunc_lookup(midasi: string, okuri: boolean): Candidate[];
        vfunc_complete(midasi: string): string[];
        vfunc_select_candidate(candidate: Candidate): boolean;
        vfunc_purge_candidate(candidate: Candidate): boolean;
        vfunc_save(): void;
        vfunc_get_read_only(): boolean;

        // Methods

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

        // Constructors

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

        // Constructors

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

        // Constructors

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

        // Constructors

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

        // Constructors

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

        // Properties

        get name(): string;
        set name(val: string);
        get code(): number;
        set code(val: number);
        get modifiers(): ModifierType;
        set modifiers(val: ModifierType);

        // Constructors

        constructor(properties?: Partial<KeyEvent.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string | null, code: number, modifiers: ModifierType): KeyEvent;

        static from_string(key: string): KeyEvent;

        static from_x_keysym(keyval: number, modifiers: ModifierType): KeyEvent;

        // Methods

        copy(): KeyEvent;
        to_string(): string;
        base_equal(key: KeyEvent): boolean;
        get_name(): string | null;
        get_code(): number;
        get_modifiers(): ModifierType;
        set_modifiers(value: ModifierType | null): void;
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

        // Constructors

        constructor(properties?: Partial<KeyEventFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'forwarded', callback: (_source: this, key: KeyEvent) => void): number;
        connect_after(signal: 'forwarded', callback: (_source: this, key: KeyEvent) => void): number;
        emit(signal: 'forwarded', key: KeyEvent): void;

        // Virtual methods

        vfunc_filter_key_event(key: KeyEvent): KeyEvent | null;
        vfunc_reset(): void;

        // Methods

        filter_key_event(key: KeyEvent): KeyEvent | null;
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

        // Properties

        get metadata(): RuleMetadata;
        set metadata(val: RuleMetadata);

        // Fields

        keymaps: never[];
        keymaps_length1: number;
        rom_kana: never;

        // Constructors

        constructor(properties?: Partial<Rule.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string): Rule;

        // Static methods

        static find_rule(name: string): RuleMetadata | null;
        static list(): RuleMetadata[];

        // Methods

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

        // Properties

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

        // Constructors

        constructor(properties?: Partial<Context.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](dictionaries: Dict[]): Context;

        // Signals

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

        // Methods

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
        set_input_mode(value: InputMode | null): void;
        get_auto_start_henkan_keywords(): string[];
        set_auto_start_henkan_keywords(value: string[]): void;
        get_egg_like_newline(): boolean;
        set_egg_like_newline(value: boolean): void;
        get_period_style(): PeriodStyle;
        set_period_style(value: PeriodStyle | null): void;
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

        // Properties

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

        // Constructors

        constructor(properties?: Partial<Candidate.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            midasi: string,
            okuri: boolean,
            text: string,
            annotation?: string | null,
            output?: string | null,
        ): Candidate;

        // Methods

        to_string(): string;
        get_midasi(): string;
        get_okuri(): boolean;
        get_text(): string;
        set_text(value: string): void;
        get_annotation(): string | null;
        set_annotation(value?: string | null): void;
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

        // Properties

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

        // Constructors

        constructor(properties?: Partial<CandidateList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'populated', callback: (_source: this) => void): number;
        connect_after(signal: 'populated', callback: (_source: this) => void): number;
        emit(signal: 'populated'): void;
        connect(signal: 'selected', callback: (_source: this, candidate: Candidate) => void): number;
        connect_after(signal: 'selected', callback: (_source: this, candidate: Candidate) => void): number;
        emit(signal: 'selected', candidate: Candidate): void;

        // Virtual methods

        vfunc_get(index: number): Candidate;
        vfunc_clear(): void;
        vfunc_add_candidates(array: Candidate[]): void;
        vfunc_add_candidates_end(): void;
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

        // Methods

        get(index: number): Candidate;
        clear(): void;
        add_candidates(array: Candidate[]): void;
        add_candidates_end(): void;
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

        // Fields

        get_time_func: GetTime;
        get_time_func_target: any;
        get_time_func_target_destroy_notify: GLib.DestroyNotify;
        timeout: number;
        overlap: number;
        maxwait: number;
        special_doubles: string[];
        special_doubles_length1: number;

        // Constructors

        constructor(properties?: Partial<NicolaKeyEventFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): NicolaKeyEventFilter;
    }

    type RomKanaConverterClass = typeof RomKanaConverter;
    abstract class RomKanaConverterPrivate {
        static $gtype: GObject.GType<RomKanaConverterPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DictClass = typeof Dict;
    abstract class DictPrivate {
        static $gtype: GObject.GType<DictPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type EmptyDictClass = typeof EmptyDict;
    abstract class EmptyDictPrivate {
        static $gtype: GObject.GType<EmptyDictPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FileDictClass = typeof FileDict;
    abstract class FileDictPrivate {
        static $gtype: GObject.GType<FileDictPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type CdbDictClass = typeof CdbDict;
    abstract class CdbDictPrivate {
        static $gtype: GObject.GType<CdbDictPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type UserDictClass = typeof UserDict;
    abstract class UserDictPrivate {
        static $gtype: GObject.GType<UserDictPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SkkServClass = typeof SkkServ;
    abstract class SkkServPrivate {
        static $gtype: GObject.GType<SkkServPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type KeyEventClass = typeof KeyEvent;
    abstract class KeyEventPrivate {
        static $gtype: GObject.GType<KeyEventPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type KeyEventFilterClass = typeof KeyEventFilter;
    abstract class KeyEventFilterPrivate {
        static $gtype: GObject.GType<KeyEventFilterPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type RuleClass = typeof Rule;
    abstract class RulePrivate {
        static $gtype: GObject.GType<RulePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ContextClass = typeof Context;
    abstract class ContextPrivate {
        static $gtype: GObject.GType<ContextPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type CandidateClass = typeof Candidate;
    abstract class CandidatePrivate {
        static $gtype: GObject.GType<CandidatePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type CandidateListClass = typeof CandidateList;
    abstract class CandidateListPrivate {
        static $gtype: GObject.GType<CandidateListPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type NicolaKeyEventFilterClass = typeof NicolaKeyEventFilter;
    abstract class NicolaKeyEventFilterPrivate {
        static $gtype: GObject.GType<NicolaKeyEventFilterPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    class RuleMetadata {
        static $gtype: GObject.GType<RuleMetadata>;

        // Fields

        base_dir: string;
        name: string;
        label: string;
        description: string;
        filter: string;

        // Constructors

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

        // Methods

        locate_map_file(type: string, name: string): string | null;
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
