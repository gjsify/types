
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
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Skk {

    /**
     * Skk-1.0
     */


    /**
     * @gir-type Enum
     */
    export namespace KanaMode {
        export const $gtype: GObject.GType<KanaMode>;
    }

    /**
     * @gir-type Enum
     */
    enum KanaMode {
        HIRAGANA = 0,
        KATAKANA = 1,
        HANKAKU_KATAKANA = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace PeriodStyle {
        export const $gtype: GObject.GType<PeriodStyle>;
    }

    /**
     * @gir-type Enum
     */
    enum PeriodStyle {
        JA_JA = 0,
        EN_EN = 1,
        JA_EN = 2,
        EN_JA = 3,
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
        HIRAGANA,
        KATAKANA,
        HANKAKU_KATAKANA,
        LATIN = 0,
        WIDE_LATIN = 1,
        LAST = 2,
        DEFAULT,
    }


    /**
     * @gir-type Struct
     */
    class KeyEventFormatError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        static PARSE_FAILED: number;

        static KEYSYM_NOT_FOUND: number;

        // Constructors
        constructor(options: { message: string; code: number });
    }


    /**
     * @gir-type Struct
     */
    class RuleParseError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        static FAILED: number;

        // Constructors
        constructor(options: { message: string; code: number });
    }


    /**
     * @default 0xffffff
     */
    const KeysymsVoidSymbol: number;

    /**
     * @default 0xff08
     */
    const KeysymsBackSpace: number;

    /**
     * @default 0xff09
     */
    const KeysymsTab: number;

    /**
     * @default 0xff0a
     */
    const KeysymsLinefeed: number;

    /**
     * @default 0xff0b
     */
    const KeysymsClear: number;

    /**
     * @default 0xff0d
     */
    const KeysymsReturn: number;

    /**
     * @default 0xff13
     */
    const KeysymsPause: number;

    /**
     * @default 0xff14
     */
    const KeysymsScroll_Lock: number;

    /**
     * @default 0xff15
     */
    const KeysymsSys_Req: number;

    /**
     * @default 0xff1b
     */
    const KeysymsEscape: number;

    /**
     * @default 0xffff
     */
    const KeysymsDelete: number;

    /**
     * @default 0xff20
     */
    const KeysymsMulti_key: number;

    /**
     * @default 0xff37
     */
    const KeysymsCodeinput: number;

    /**
     * @default 0xff3c
     */
    const KeysymsSingleCandidate: number;

    /**
     * @default 0xff3d
     */
    const KeysymsMultipleCandidate: number;

    /**
     * @default 0xff3e
     */
    const KeysymsPreviousCandidate: number;

    /**
     * @default 0xff21
     */
    const KeysymsKanji: number;

    /**
     * @default 0xff22
     */
    const KeysymsMuhenkan: number;

    /**
     * @default 0xff23
     */
    const KeysymsHenkan_Mode: number;

    /**
     * @default 0xff23
     */
    const KeysymsHenkan: number;

    /**
     * @default 0xff24
     */
    const KeysymsRomaji: number;

    /**
     * @default 0xff25
     */
    const KeysymsHiragana: number;

    /**
     * @default 0xff26
     */
    const KeysymsKatakana: number;

    /**
     * @default 0xff27
     */
    const KeysymsHiragana_Katakana: number;

    /**
     * @default 0xff28
     */
    const KeysymsZenkaku: number;

    /**
     * @default 0xff29
     */
    const KeysymsHankaku: number;

    /**
     * @default 0xff2a
     */
    const KeysymsZenkaku_Hankaku: number;

    /**
     * @default 0xff2b
     */
    const KeysymsTouroku: number;

    /**
     * @default 0xff2c
     */
    const KeysymsMassyo: number;

    /**
     * @default 0xff2d
     */
    const KeysymsKana_Lock: number;

    /**
     * @default 0xff2e
     */
    const KeysymsKana_Shift: number;

    /**
     * @default 0xff2f
     */
    const KeysymsEisu_Shift: number;

    /**
     * @default 0xff30
     */
    const KeysymsEisu_toggle: number;

    /**
     * @default 0xff37
     */
    const KeysymsKanji_Bangou: number;

    /**
     * @default 0xff3d
     */
    const KeysymsZen_Koho: number;

    /**
     * @default 0xff3e
     */
    const KeysymsMae_Koho: number;

    /**
     * @default 0xff50
     */
    const KeysymsHome: number;

    /**
     * @default 0xff51
     */
    const KeysymsLeft: number;

    /**
     * @default 0xff52
     */
    const KeysymsUp: number;

    /**
     * @default 0xff53
     */
    const KeysymsRight: number;

    /**
     * @default 0xff54
     */
    const KeysymsDown: number;

    /**
     * @default 0xff55
     */
    const KeysymsPrior: number;

    /**
     * @default 0xff55
     */
    const KeysymsPage_Up: number;

    /**
     * @default 0xff56
     */
    const KeysymsNext: number;

    /**
     * @default 0xff56
     */
    const KeysymsPage_Down: number;

    /**
     * @default 0xff57
     */
    const KeysymsEnd: number;

    /**
     * @default 0xff58
     */
    const KeysymsBegin: number;

    /**
     * @default 0xff60
     */
    const KeysymsSelect: number;

    /**
     * @default 0xff61
     */
    const KeysymsPrint: number;

    /**
     * @default 0xff62
     */
    const KeysymsExecute: number;

    /**
     * @default 0xff63
     */
    const KeysymsInsert: number;

    /**
     * @default 0xff65
     */
    const KeysymsUndo: number;

    /**
     * @default 0xff66
     */
    const KeysymsRedo: number;

    /**
     * @default 0xff67
     */
    const KeysymsMenu: number;

    /**
     * @default 0xff68
     */
    const KeysymsFind: number;

    /**
     * @default 0xff69
     */
    const KeysymsCancel: number;

    /**
     * @default 0xff6a
     */
    const KeysymsHelp: number;

    /**
     * @default 0xff6b
     */
    const KeysymsBreak: number;

    /**
     * @default 0xff7e
     */
    const KeysymsMode_switch: number;

    /**
     * @default 0xff7e
     */
    const Keysymsscript_switch: number;

    /**
     * @default 0xff7f
     */
    const KeysymsNum_Lock: number;

    /**
     * @default 0xff80
     */
    const KeysymsKP_Space: number;

    /**
     * @default 0xff89
     */
    const KeysymsKP_Tab: number;

    /**
     * @default 0xff8d
     */
    const KeysymsKP_Enter: number;

    /**
     * @default 0xff91
     */
    const KeysymsKP_F1: number;

    /**
     * @default 0xff92
     */
    const KeysymsKP_F2: number;

    /**
     * @default 0xff93
     */
    const KeysymsKP_F3: number;

    /**
     * @default 0xff94
     */
    const KeysymsKP_F4: number;

    /**
     * @default 0xff95
     */
    const KeysymsKP_Home: number;

    /**
     * @default 0xff96
     */
    const KeysymsKP_Left: number;

    /**
     * @default 0xff97
     */
    const KeysymsKP_Up: number;

    /**
     * @default 0xff98
     */
    const KeysymsKP_Right: number;

    /**
     * @default 0xff99
     */
    const KeysymsKP_Down: number;

    /**
     * @default 0xff9a
     */
    const KeysymsKP_Prior: number;

    /**
     * @default 0xff9a
     */
    const KeysymsKP_Page_Up: number;

    /**
     * @default 0xff9b
     */
    const KeysymsKP_Next: number;

    /**
     * @default 0xff9b
     */
    const KeysymsKP_Page_Down: number;

    /**
     * @default 0xff9c
     */
    const KeysymsKP_End: number;

    /**
     * @default 0xff9d
     */
    const KeysymsKP_Begin: number;

    /**
     * @default 0xff9e
     */
    const KeysymsKP_Insert: number;

    /**
     * @default 0xff9f
     */
    const KeysymsKP_Delete: number;

    /**
     * @default 0xffbd
     */
    const KeysymsKP_Equal: number;

    /**
     * @default 0xffaa
     */
    const KeysymsKP_Multiply: number;

    /**
     * @default 0xffab
     */
    const KeysymsKP_Add: number;

    /**
     * @default 0xffac
     */
    const KeysymsKP_Separator: number;

    /**
     * @default 0xffad
     */
    const KeysymsKP_Subtract: number;

    /**
     * @default 0xffae
     */
    const KeysymsKP_Decimal: number;

    /**
     * @default 0xffaf
     */
    const KeysymsKP_Divide: number;

    /**
     * @default 0xffb0
     */
    const KeysymsKP_0: number;

    /**
     * @default 0xffb1
     */
    const KeysymsKP_1: number;

    /**
     * @default 0xffb2
     */
    const KeysymsKP_2: number;

    /**
     * @default 0xffb3
     */
    const KeysymsKP_3: number;

    /**
     * @default 0xffb4
     */
    const KeysymsKP_4: number;

    /**
     * @default 0xffb5
     */
    const KeysymsKP_5: number;

    /**
     * @default 0xffb6
     */
    const KeysymsKP_6: number;

    /**
     * @default 0xffb7
     */
    const KeysymsKP_7: number;

    /**
     * @default 0xffb8
     */
    const KeysymsKP_8: number;

    /**
     * @default 0xffb9
     */
    const KeysymsKP_9: number;

    /**
     * @default 0xffbe
     */
    const KeysymsF1: number;

    /**
     * @default 0xffbf
     */
    const KeysymsF2: number;

    /**
     * @default 0xffc0
     */
    const KeysymsF3: number;

    /**
     * @default 0xffc1
     */
    const KeysymsF4: number;

    /**
     * @default 0xffc2
     */
    const KeysymsF5: number;

    /**
     * @default 0xffc3
     */
    const KeysymsF6: number;

    /**
     * @default 0xffc4
     */
    const KeysymsF7: number;

    /**
     * @default 0xffc5
     */
    const KeysymsF8: number;

    /**
     * @default 0xffc6
     */
    const KeysymsF9: number;

    /**
     * @default 0xffc7
     */
    const KeysymsF10: number;

    /**
     * @default 0xffc8
     */
    const KeysymsF11: number;

    /**
     * @default 0xffc8
     */
    const KeysymsL1: number;

    /**
     * @default 0xffc9
     */
    const KeysymsF12: number;

    /**
     * @default 0xffc9
     */
    const KeysymsL2: number;

    /**
     * @default 0xffca
     */
    const KeysymsF13: number;

    /**
     * @default 0xffca
     */
    const KeysymsL3: number;

    /**
     * @default 0xffcb
     */
    const KeysymsF14: number;

    /**
     * @default 0xffcb
     */
    const KeysymsL4: number;

    /**
     * @default 0xffcc
     */
    const KeysymsF15: number;

    /**
     * @default 0xffcc
     */
    const KeysymsL5: number;

    /**
     * @default 0xffcd
     */
    const KeysymsF16: number;

    /**
     * @default 0xffcd
     */
    const KeysymsL6: number;

    /**
     * @default 0xffce
     */
    const KeysymsF17: number;

    /**
     * @default 0xffce
     */
    const KeysymsL7: number;

    /**
     * @default 0xffcf
     */
    const KeysymsF18: number;

    /**
     * @default 0xffcf
     */
    const KeysymsL8: number;

    /**
     * @default 0xffd0
     */
    const KeysymsF19: number;

    /**
     * @default 0xffd0
     */
    const KeysymsL9: number;

    /**
     * @default 0xffd1
     */
    const KeysymsF20: number;

    /**
     * @default 0xffd1
     */
    const KeysymsL10: number;

    /**
     * @default 0xffd2
     */
    const KeysymsF21: number;

    /**
     * @default 0xffd2
     */
    const KeysymsR1: number;

    /**
     * @default 0xffd3
     */
    const KeysymsF22: number;

    /**
     * @default 0xffd3
     */
    const KeysymsR2: number;

    /**
     * @default 0xffd4
     */
    const KeysymsF23: number;

    /**
     * @default 0xffd4
     */
    const KeysymsR3: number;

    /**
     * @default 0xffd5
     */
    const KeysymsF24: number;

    /**
     * @default 0xffd5
     */
    const KeysymsR4: number;

    /**
     * @default 0xffd6
     */
    const KeysymsF25: number;

    /**
     * @default 0xffd6
     */
    const KeysymsR5: number;

    /**
     * @default 0xffd7
     */
    const KeysymsF26: number;

    /**
     * @default 0xffd7
     */
    const KeysymsR6: number;

    /**
     * @default 0xffd8
     */
    const KeysymsF27: number;

    /**
     * @default 0xffd8
     */
    const KeysymsR7: number;

    /**
     * @default 0xffd9
     */
    const KeysymsF28: number;

    /**
     * @default 0xffd9
     */
    const KeysymsR8: number;

    /**
     * @default 0xffda
     */
    const KeysymsF29: number;

    /**
     * @default 0xffda
     */
    const KeysymsR9: number;

    /**
     * @default 0xffdb
     */
    const KeysymsF30: number;

    /**
     * @default 0xffdb
     */
    const KeysymsR10: number;

    /**
     * @default 0xffdc
     */
    const KeysymsF31: number;

    /**
     * @default 0xffdc
     */
    const KeysymsR11: number;

    /**
     * @default 0xffdd
     */
    const KeysymsF32: number;

    /**
     * @default 0xffdd
     */
    const KeysymsR12: number;

    /**
     * @default 0xffde
     */
    const KeysymsF33: number;

    /**
     * @default 0xffde
     */
    const KeysymsR13: number;

    /**
     * @default 0xffdf
     */
    const KeysymsF34: number;

    /**
     * @default 0xffdf
     */
    const KeysymsR14: number;

    /**
     * @default 0xffe0
     */
    const KeysymsF35: number;

    /**
     * @default 0xffe0
     */
    const KeysymsR15: number;

    /**
     * @default 0xffe1
     */
    const KeysymsShift_L: number;

    /**
     * @default 0xffe2
     */
    const KeysymsShift_R: number;

    /**
     * @default 0xffe3
     */
    const KeysymsControl_L: number;

    /**
     * @default 0xffe4
     */
    const KeysymsControl_R: number;

    /**
     * @default 0xffe5
     */
    const KeysymsCaps_Lock: number;

    /**
     * @default 0xffe6
     */
    const KeysymsShift_Lock: number;

    /**
     * @default 0xffe7
     */
    const KeysymsMeta_L: number;

    /**
     * @default 0xffe8
     */
    const KeysymsMeta_R: number;

    /**
     * @default 0xffe9
     */
    const KeysymsAlt_L: number;

    /**
     * @default 0xffea
     */
    const KeysymsAlt_R: number;

    /**
     * @default 0xffeb
     */
    const KeysymsSuper_L: number;

    /**
     * @default 0xffec
     */
    const KeysymsSuper_R: number;

    /**
     * @default 0xffed
     */
    const KeysymsHyper_L: number;

    /**
     * @default 0xffee
     */
    const KeysymsHyper_R: number;

    /**
     * @default 0xfe01
     */
    const KeysymsISO_Lock: number;

    /**
     * @default 0xfe02
     */
    const KeysymsISO_Level2_Latch: number;

    /**
     * @default 0xfe03
     */
    const KeysymsISO_Level3_Shift: number;

    /**
     * @default 0xfe04
     */
    const KeysymsISO_Level3_Latch: number;

    /**
     * @default 0xfe05
     */
    const KeysymsISO_Level3_Lock: number;

    /**
     * @default 0xfe11
     */
    const KeysymsISO_Level5_Shift: number;

    /**
     * @default 0xfe12
     */
    const KeysymsISO_Level5_Latch: number;

    /**
     * @default 0xfe13
     */
    const KeysymsISO_Level5_Lock: number;

    /**
     * @default 0xff7e
     */
    const KeysymsISO_Group_Shift: number;

    /**
     * @default 0xfe06
     */
    const KeysymsISO_Group_Latch: number;

    /**
     * @default 0xfe07
     */
    const KeysymsISO_Group_Lock: number;

    /**
     * @default 0xfe08
     */
    const KeysymsISO_Next_Group: number;

    /**
     * @default 0xfe09
     */
    const KeysymsISO_Next_Group_Lock: number;

    /**
     * @default 0xfe0a
     */
    const KeysymsISO_Prev_Group: number;

    /**
     * @default 0xfe0b
     */
    const KeysymsISO_Prev_Group_Lock: number;

    /**
     * @default 0xfe0c
     */
    const KeysymsISO_First_Group: number;

    /**
     * @default 0xfe0d
     */
    const KeysymsISO_First_Group_Lock: number;

    /**
     * @default 0xfe0e
     */
    const KeysymsISO_Last_Group: number;

    /**
     * @default 0xfe0f
     */
    const KeysymsISO_Last_Group_Lock: number;

    /**
     * @default 0xfe20
     */
    const KeysymsISO_Left_Tab: number;

    /**
     * @default 0xfe21
     */
    const KeysymsISO_Move_Line_Up: number;

    /**
     * @default 0xfe22
     */
    const KeysymsISO_Move_Line_Down: number;

    /**
     * @default 0xfe23
     */
    const KeysymsISO_Partial_Line_Up: number;

    /**
     * @default 0xfe24
     */
    const KeysymsISO_Partial_Line_Down: number;

    /**
     * @default 0xfe25
     */
    const KeysymsISO_Partial_Space_Left: number;

    /**
     * @default 0xfe26
     */
    const KeysymsISO_Partial_Space_Right: number;

    /**
     * @default 0xfe27
     */
    const KeysymsISO_Set_Margin_Left: number;

    /**
     * @default 0xfe28
     */
    const KeysymsISO_Set_Margin_Right: number;

    /**
     * @default 0xfe29
     */
    const KeysymsISO_Release_Margin_Left: number;

    /**
     * @default 0xfe2a
     */
    const KeysymsISO_Release_Margin_Right: number;

    /**
     * @default 0xfe2b
     */
    const KeysymsISO_Release_Both_Margins: number;

    /**
     * @default 0xfe2c
     */
    const KeysymsISO_Fast_Cursor_Left: number;

    /**
     * @default 0xfe2d
     */
    const KeysymsISO_Fast_Cursor_Right: number;

    /**
     * @default 0xfe2e
     */
    const KeysymsISO_Fast_Cursor_Up: number;

    /**
     * @default 0xfe2f
     */
    const KeysymsISO_Fast_Cursor_Down: number;

    /**
     * @default 0xfe30
     */
    const KeysymsISO_Continuous_Underline: number;

    /**
     * @default 0xfe31
     */
    const KeysymsISO_Discontinuous_Underline: number;

    /**
     * @default 0xfe32
     */
    const KeysymsISO_Emphasize: number;

    /**
     * @default 0xfe33
     */
    const KeysymsISO_Center_Object: number;

    /**
     * @default 0xfe34
     */
    const KeysymsISO_Enter: number;

    /**
     * @default 0xfe50
     */
    const Keysymsdead_grave: number;

    /**
     * @default 0xfe51
     */
    const Keysymsdead_acute: number;

    /**
     * @default 0xfe52
     */
    const Keysymsdead_circumflex: number;

    /**
     * @default 0xfe53
     */
    const Keysymsdead_tilde: number;

    /**
     * @default 0xfe53
     */
    const Keysymsdead_perispomeni: number;

    /**
     * @default 0xfe54
     */
    const Keysymsdead_macron: number;

    /**
     * @default 0xfe55
     */
    const Keysymsdead_breve: number;

    /**
     * @default 0xfe56
     */
    const Keysymsdead_abovedot: number;

    /**
     * @default 0xfe57
     */
    const Keysymsdead_diaeresis: number;

    /**
     * @default 0xfe58
     */
    const Keysymsdead_abovering: number;

    /**
     * @default 0xfe59
     */
    const Keysymsdead_doubleacute: number;

    /**
     * @default 0xfe5a
     */
    const Keysymsdead_caron: number;

    /**
     * @default 0xfe5b
     */
    const Keysymsdead_cedilla: number;

    /**
     * @default 0xfe5c
     */
    const Keysymsdead_ogonek: number;

    /**
     * @default 0xfe5d
     */
    const Keysymsdead_iota: number;

    /**
     * @default 0xfe5e
     */
    const Keysymsdead_voiced_sound: number;

    /**
     * @default 0xfe5f
     */
    const Keysymsdead_semivoiced_sound: number;

    /**
     * @default 0xfe60
     */
    const Keysymsdead_belowdot: number;

    /**
     * @default 0xfe61
     */
    const Keysymsdead_hook: number;

    /**
     * @default 0xfe62
     */
    const Keysymsdead_horn: number;

    /**
     * @default 0xfe63
     */
    const Keysymsdead_stroke: number;

    /**
     * @default 0xfe64
     */
    const Keysymsdead_abovecomma: number;

    /**
     * @default 0xfe64
     */
    const Keysymsdead_psili: number;

    /**
     * @default 0xfe65
     */
    const Keysymsdead_abovereversedcomma: number;

    /**
     * @default 0xfe65
     */
    const Keysymsdead_dasia: number;

    /**
     * @default 0xfe66
     */
    const Keysymsdead_doublegrave: number;

    /**
     * @default 0xfe67
     */
    const Keysymsdead_belowring: number;

    /**
     * @default 0xfe68
     */
    const Keysymsdead_belowmacron: number;

    /**
     * @default 0xfe69
     */
    const Keysymsdead_belowcircumflex: number;

    /**
     * @default 0xfe6a
     */
    const Keysymsdead_belowtilde: number;

    /**
     * @default 0xfe6b
     */
    const Keysymsdead_belowbreve: number;

    /**
     * @default 0xfe6c
     */
    const Keysymsdead_belowdiaeresis: number;

    /**
     * @default 0xfe6d
     */
    const Keysymsdead_invertedbreve: number;

    /**
     * @default 0xfe6e
     */
    const Keysymsdead_belowcomma: number;

    /**
     * @default 0xfe6f
     */
    const Keysymsdead_currency: number;

    /**
     * @default 0xfe80
     */
    const Keysymsdead_a: number;

    /**
     * @default 0xfe81
     */
    const Keysymsdead_A: number;

    /**
     * @default 0xfe82
     */
    const Keysymsdead_e: number;

    /**
     * @default 0xfe83
     */
    const Keysymsdead_E: number;

    /**
     * @default 0xfe84
     */
    const Keysymsdead_i: number;

    /**
     * @default 0xfe85
     */
    const Keysymsdead_I: number;

    /**
     * @default 0xfe86
     */
    const Keysymsdead_o: number;

    /**
     * @default 0xfe87
     */
    const Keysymsdead_O: number;

    /**
     * @default 0xfe88
     */
    const Keysymsdead_u: number;

    /**
     * @default 0xfe89
     */
    const Keysymsdead_U: number;

    /**
     * @default 0xfe8a
     */
    const Keysymsdead_small_schwa: number;

    /**
     * @default 0xfe8b
     */
    const Keysymsdead_capital_schwa: number;

    /**
     * @default 0xfed0
     */
    const KeysymsFirst_Virtual_Screen: number;

    /**
     * @default 0xfed1
     */
    const KeysymsPrev_Virtual_Screen: number;

    /**
     * @default 0xfed2
     */
    const KeysymsNext_Virtual_Screen: number;

    /**
     * @default 0xfed4
     */
    const KeysymsLast_Virtual_Screen: number;

    /**
     * @default 0xfed5
     */
    const KeysymsTerminate_Server: number;

    /**
     * @default 0xfe70
     */
    const KeysymsAccessX_Enable: number;

    /**
     * @default 0xfe71
     */
    const KeysymsAccessX_Feedback_Enable: number;

    /**
     * @default 0xfe72
     */
    const KeysymsRepeatKeys_Enable: number;

    /**
     * @default 0xfe73
     */
    const KeysymsSlowKeys_Enable: number;

    /**
     * @default 0xfe74
     */
    const KeysymsBounceKeys_Enable: number;

    /**
     * @default 0xfe75
     */
    const KeysymsStickyKeys_Enable: number;

    /**
     * @default 0xfe76
     */
    const KeysymsMouseKeys_Enable: number;

    /**
     * @default 0xfe77
     */
    const KeysymsMouseKeys_Accel_Enable: number;

    /**
     * @default 0xfe78
     */
    const KeysymsOverlay1_Enable: number;

    /**
     * @default 0xfe79
     */
    const KeysymsOverlay2_Enable: number;

    /**
     * @default 0xfe7a
     */
    const KeysymsAudibleBell_Enable: number;

    /**
     * @default 0xfee0
     */
    const KeysymsPointer_Left: number;

    /**
     * @default 0xfee1
     */
    const KeysymsPointer_Right: number;

    /**
     * @default 0xfee2
     */
    const KeysymsPointer_Up: number;

    /**
     * @default 0xfee3
     */
    const KeysymsPointer_Down: number;

    /**
     * @default 0xfee4
     */
    const KeysymsPointer_UpLeft: number;

    /**
     * @default 0xfee5
     */
    const KeysymsPointer_UpRight: number;

    /**
     * @default 0xfee6
     */
    const KeysymsPointer_DownLeft: number;

    /**
     * @default 0xfee7
     */
    const KeysymsPointer_DownRight: number;

    /**
     * @default 0xfee8
     */
    const KeysymsPointer_Button_Dflt: number;

    /**
     * @default 0xfee9
     */
    const KeysymsPointer_Button1: number;

    /**
     * @default 0xfeea
     */
    const KeysymsPointer_Button2: number;

    /**
     * @default 0xfeeb
     */
    const KeysymsPointer_Button3: number;

    /**
     * @default 0xfeec
     */
    const KeysymsPointer_Button4: number;

    /**
     * @default 0xfeed
     */
    const KeysymsPointer_Button5: number;

    /**
     * @default 0xfeee
     */
    const KeysymsPointer_DblClick_Dflt: number;

    /**
     * @default 0xfeef
     */
    const KeysymsPointer_DblClick1: number;

    /**
     * @default 0xfef0
     */
    const KeysymsPointer_DblClick2: number;

    /**
     * @default 0xfef1
     */
    const KeysymsPointer_DblClick3: number;

    /**
     * @default 0xfef2
     */
    const KeysymsPointer_DblClick4: number;

    /**
     * @default 0xfef3
     */
    const KeysymsPointer_DblClick5: number;

    /**
     * @default 0xfef4
     */
    const KeysymsPointer_Drag_Dflt: number;

    /**
     * @default 0xfef5
     */
    const KeysymsPointer_Drag1: number;

    /**
     * @default 0xfef6
     */
    const KeysymsPointer_Drag2: number;

    /**
     * @default 0xfef7
     */
    const KeysymsPointer_Drag3: number;

    /**
     * @default 0xfef8
     */
    const KeysymsPointer_Drag4: number;

    /**
     * @default 0xfefd
     */
    const KeysymsPointer_Drag5: number;

    /**
     * @default 0xfef9
     */
    const KeysymsPointer_EnableKeys: number;

    /**
     * @default 0xfefa
     */
    const KeysymsPointer_Accelerate: number;

    /**
     * @default 0xfefb
     */
    const KeysymsPointer_DfltBtnNext: number;

    /**
     * @default 0xfefc
     */
    const KeysymsPointer_DfltBtnPrev: number;

    /**
     * @default 0xfd01
     */
    const Keysyms3270_Duplicate: number;

    /**
     * @default 0xfd02
     */
    const Keysyms3270_FieldMark: number;

    /**
     * @default 0xfd03
     */
    const Keysyms3270_Right2: number;

    /**
     * @default 0xfd04
     */
    const Keysyms3270_Left2: number;

    /**
     * @default 0xfd05
     */
    const Keysyms3270_BackTab: number;

    /**
     * @default 0xfd06
     */
    const Keysyms3270_EraseEOF: number;

    /**
     * @default 0xfd07
     */
    const Keysyms3270_EraseInput: number;

    /**
     * @default 0xfd08
     */
    const Keysyms3270_Reset: number;

    /**
     * @default 0xfd09
     */
    const Keysyms3270_Quit: number;

    /**
     * @default 0xfd0a
     */
    const Keysyms3270_PA1: number;

    /**
     * @default 0xfd0b
     */
    const Keysyms3270_PA2: number;

    /**
     * @default 0xfd0c
     */
    const Keysyms3270_PA3: number;

    /**
     * @default 0xfd0d
     */
    const Keysyms3270_Test: number;

    /**
     * @default 0xfd0e
     */
    const Keysyms3270_Attn: number;

    /**
     * @default 0xfd0f
     */
    const Keysyms3270_CursorBlink: number;

    /**
     * @default 0xfd10
     */
    const Keysyms3270_AltCursor: number;

    /**
     * @default 0xfd11
     */
    const Keysyms3270_KeyClick: number;

    /**
     * @default 0xfd12
     */
    const Keysyms3270_Jump: number;

    /**
     * @default 0xfd13
     */
    const Keysyms3270_Ident: number;

    /**
     * @default 0xfd14
     */
    const Keysyms3270_Rule: number;

    /**
     * @default 0xfd15
     */
    const Keysyms3270_Copy: number;

    /**
     * @default 0xfd16
     */
    const Keysyms3270_Play: number;

    /**
     * @default 0xfd17
     */
    const Keysyms3270_Setup: number;

    /**
     * @default 0xfd18
     */
    const Keysyms3270_Record: number;

    /**
     * @default 0xfd19
     */
    const Keysyms3270_ChangeScreen: number;

    /**
     * @default 0xfd1a
     */
    const Keysyms3270_DeleteWord: number;

    /**
     * @default 0xfd1b
     */
    const Keysyms3270_ExSelect: number;

    /**
     * @default 0xfd1c
     */
    const Keysyms3270_CursorSelect: number;

    /**
     * @default 0xfd1d
     */
    const Keysyms3270_PrintScreen: number;

    /**
     * @default 0xfd1e
     */
    const Keysyms3270_Enter: number;

    /**
     * @default 0x0020
     */
    const Keysymsspace: number;

    /**
     * @default 0x0021
     */
    const Keysymsexclam: number;

    /**
     * @default 0x0022
     */
    const Keysymsquotedbl: number;

    /**
     * @default 0x0023
     */
    const Keysymsnumbersign: number;

    /**
     * @default 0x0024
     */
    const Keysymsdollar: number;

    /**
     * @default 0x0025
     */
    const Keysymspercent: number;

    /**
     * @default 0x0026
     */
    const Keysymsampersand: number;

    /**
     * @default 0x0027
     */
    const Keysymsapostrophe: number;

    /**
     * @default 0x0027
     */
    const Keysymsquoteright: number;

    /**
     * @default 0x0028
     */
    const Keysymsparenleft: number;

    /**
     * @default 0x0029
     */
    const Keysymsparenright: number;

    /**
     * @default 0x002a
     */
    const Keysymsasterisk: number;

    /**
     * @default 0x002b
     */
    const Keysymsplus: number;

    /**
     * @default 0x002c
     */
    const Keysymscomma: number;

    /**
     * @default 0x002d
     */
    const Keysymsminus: number;

    /**
     * @default 0x002e
     */
    const Keysymsperiod: number;

    /**
     * @default 0x002f
     */
    const Keysymsslash: number;

    /**
     * @default 0x0030
     */
    const Keysyms0: number;

    /**
     * @default 0x0031
     */
    const Keysyms1: number;

    /**
     * @default 0x0032
     */
    const Keysyms2: number;

    /**
     * @default 0x0033
     */
    const Keysyms3: number;

    /**
     * @default 0x0034
     */
    const Keysyms4: number;

    /**
     * @default 0x0035
     */
    const Keysyms5: number;

    /**
     * @default 0x0036
     */
    const Keysyms6: number;

    /**
     * @default 0x0037
     */
    const Keysyms7: number;

    /**
     * @default 0x0038
     */
    const Keysyms8: number;

    /**
     * @default 0x0039
     */
    const Keysyms9: number;

    /**
     * @default 0x003a
     */
    const Keysymscolon: number;

    /**
     * @default 0x003b
     */
    const Keysymssemicolon: number;

    /**
     * @default 0x003c
     */
    const Keysymsless: number;

    /**
     * @default 0x003d
     */
    const Keysymsequal: number;

    /**
     * @default 0x003e
     */
    const Keysymsgreater: number;

    /**
     * @default 0x003f
     */
    const Keysymsquestion: number;

    /**
     * @default 0x0040
     */
    const Keysymsat: number;

    /**
     * @default 0x0041
     */
    const KeysymsA: number;

    /**
     * @default 0x0042
     */
    const KeysymsB: number;

    /**
     * @default 0x0043
     */
    const KeysymsC: number;

    /**
     * @default 0x0044
     */
    const KeysymsD: number;

    /**
     * @default 0x0045
     */
    const KeysymsE: number;

    /**
     * @default 0x0046
     */
    const KeysymsF: number;

    /**
     * @default 0x0047
     */
    const KeysymsG: number;

    /**
     * @default 0x0048
     */
    const KeysymsH: number;

    /**
     * @default 0x0049
     */
    const KeysymsI: number;

    /**
     * @default 0x004a
     */
    const KeysymsJ: number;

    /**
     * @default 0x004b
     */
    const KeysymsK: number;

    /**
     * @default 0x004c
     */
    const KeysymsL: number;

    /**
     * @default 0x004d
     */
    const KeysymsM: number;

    /**
     * @default 0x004e
     */
    const KeysymsN: number;

    /**
     * @default 0x004f
     */
    const KeysymsO: number;

    /**
     * @default 0x0050
     */
    const KeysymsP: number;

    /**
     * @default 0x0051
     */
    const KeysymsQ: number;

    /**
     * @default 0x0052
     */
    const KeysymsR: number;

    /**
     * @default 0x0053
     */
    const KeysymsS: number;

    /**
     * @default 0x0054
     */
    const KeysymsT: number;

    /**
     * @default 0x0055
     */
    const KeysymsU: number;

    /**
     * @default 0x0056
     */
    const KeysymsV: number;

    /**
     * @default 0x0057
     */
    const KeysymsW: number;

    /**
     * @default 0x0058
     */
    const KeysymsX: number;

    /**
     * @default 0x0059
     */
    const KeysymsY: number;

    /**
     * @default 0x005a
     */
    const KeysymsZ: number;

    /**
     * @default 0x005b
     */
    const Keysymsbracketleft: number;

    /**
     * @default 0x005c
     */
    const Keysymsbackslash: number;

    /**
     * @default 0x005d
     */
    const Keysymsbracketright: number;

    /**
     * @default 0x005e
     */
    const Keysymsasciicircum: number;

    /**
     * @default 0x005f
     */
    const Keysymsunderscore: number;

    /**
     * @default 0x0060
     */
    const Keysymsgrave: number;

    /**
     * @default 0x0060
     */
    const Keysymsquoteleft: number;

    /**
     * @default 0x0061
     */
    const Keysymsa: number;

    /**
     * @default 0x0062
     */
    const Keysymsb: number;

    /**
     * @default 0x0063
     */
    const Keysymsc: number;

    /**
     * @default 0x0064
     */
    const Keysymsd: number;

    /**
     * @default 0x0065
     */
    const Keysymse: number;

    /**
     * @default 0x0066
     */
    const Keysymsf: number;

    /**
     * @default 0x0067
     */
    const Keysymsg: number;

    /**
     * @default 0x0068
     */
    const Keysymsh: number;

    /**
     * @default 0x0069
     */
    const Keysymsi: number;

    /**
     * @default 0x006a
     */
    const Keysymsj: number;

    /**
     * @default 0x006b
     */
    const Keysymsk: number;

    /**
     * @default 0x006c
     */
    const Keysymsl: number;

    /**
     * @default 0x006d
     */
    const Keysymsm: number;

    /**
     * @default 0x006e
     */
    const Keysymsn: number;

    /**
     * @default 0x006f
     */
    const Keysymso: number;

    /**
     * @default 0x0070
     */
    const Keysymsp: number;

    /**
     * @default 0x0071
     */
    const Keysymsq: number;

    /**
     * @default 0x0072
     */
    const Keysymsr: number;

    /**
     * @default 0x0073
     */
    const Keysymss: number;

    /**
     * @default 0x0074
     */
    const Keysymst: number;

    /**
     * @default 0x0075
     */
    const Keysymsu: number;

    /**
     * @default 0x0076
     */
    const Keysymsv: number;

    /**
     * @default 0x0077
     */
    const Keysymsw: number;

    /**
     * @default 0x0078
     */
    const Keysymsx: number;

    /**
     * @default 0x0079
     */
    const Keysymsy: number;

    /**
     * @default 0x007a
     */
    const Keysymsz: number;

    /**
     * @default 0x007b
     */
    const Keysymsbraceleft: number;

    /**
     * @default 0x007c
     */
    const Keysymsbar: number;

    /**
     * @default 0x007d
     */
    const Keysymsbraceright: number;

    /**
     * @default 0x007e
     */
    const Keysymsasciitilde: number;

    /**
     * @default 0x00a0
     */
    const Keysymsnobreakspace: number;

    /**
     * @default 0x00a1
     */
    const Keysymsexclamdown: number;

    /**
     * @default 0x00a2
     */
    const Keysymscent: number;

    /**
     * @default 0x00a3
     */
    const Keysymssterling: number;

    /**
     * @default 0x00a4
     */
    const Keysymscurrency: number;

    /**
     * @default 0x00a5
     */
    const Keysymsyen: number;

    /**
     * @default 0x00a6
     */
    const Keysymsbrokenbar: number;

    /**
     * @default 0x00a7
     */
    const Keysymssection: number;

    /**
     * @default 0x00a8
     */
    const Keysymsdiaeresis: number;

    /**
     * @default 0x00a9
     */
    const Keysymscopyright: number;

    /**
     * @default 0x00aa
     */
    const Keysymsordfeminine: number;

    /**
     * @default 0x00ab
     */
    const Keysymsguillemotleft: number;

    /**
     * @default 0x00ac
     */
    const Keysymsnotsign: number;

    /**
     * @default 0x00ad
     */
    const Keysymshyphen: number;

    /**
     * @default 0x00ae
     */
    const Keysymsregistered: number;

    /**
     * @default 0x00af
     */
    const Keysymsmacron: number;

    /**
     * @default 0x00b0
     */
    const Keysymsdegree: number;

    /**
     * @default 0x00b1
     */
    const Keysymsplusminus: number;

    /**
     * @default 0x00b2
     */
    const Keysymstwosuperior: number;

    /**
     * @default 0x00b3
     */
    const Keysymsthreesuperior: number;

    /**
     * @default 0x00b4
     */
    const Keysymsacute: number;

    /**
     * @default 0x00b5
     */
    const Keysymsmu: number;

    /**
     * @default 0x00b6
     */
    const Keysymsparagraph: number;

    /**
     * @default 0x00b7
     */
    const Keysymsperiodcentered: number;

    /**
     * @default 0x00b8
     */
    const Keysymscedilla: number;

    /**
     * @default 0x00b9
     */
    const Keysymsonesuperior: number;

    /**
     * @default 0x00ba
     */
    const Keysymsmasculine: number;

    /**
     * @default 0x00bb
     */
    const Keysymsguillemotright: number;

    /**
     * @default 0x00bc
     */
    const Keysymsonequarter: number;

    /**
     * @default 0x00bd
     */
    const Keysymsonehalf: number;

    /**
     * @default 0x00be
     */
    const Keysymsthreequarters: number;

    /**
     * @default 0x00bf
     */
    const Keysymsquestiondown: number;

    /**
     * @default 0x00c0
     */
    const KeysymsAgrave: number;

    /**
     * @default 0x00c1
     */
    const KeysymsAacute: number;

    /**
     * @default 0x00c2
     */
    const KeysymsAcircumflex: number;

    /**
     * @default 0x00c3
     */
    const KeysymsAtilde: number;

    /**
     * @default 0x00c4
     */
    const KeysymsAdiaeresis: number;

    /**
     * @default 0x00c5
     */
    const KeysymsAring: number;

    /**
     * @default 0x00c6
     */
    const KeysymsAE: number;

    /**
     * @default 0x00c7
     */
    const KeysymsCcedilla: number;

    /**
     * @default 0x00c8
     */
    const KeysymsEgrave: number;

    /**
     * @default 0x00c9
     */
    const KeysymsEacute: number;

    /**
     * @default 0x00ca
     */
    const KeysymsEcircumflex: number;

    /**
     * @default 0x00cb
     */
    const KeysymsEdiaeresis: number;

    /**
     * @default 0x00cc
     */
    const KeysymsIgrave: number;

    /**
     * @default 0x00cd
     */
    const KeysymsIacute: number;

    /**
     * @default 0x00ce
     */
    const KeysymsIcircumflex: number;

    /**
     * @default 0x00cf
     */
    const KeysymsIdiaeresis: number;

    /**
     * @default 0x00d0
     */
    const KeysymsETH: number;

    /**
     * @default 0x00d0
     */
    const KeysymsEth: number;

    /**
     * @default 0x00d1
     */
    const KeysymsNtilde: number;

    /**
     * @default 0x00d2
     */
    const KeysymsOgrave: number;

    /**
     * @default 0x00d3
     */
    const KeysymsOacute: number;

    /**
     * @default 0x00d4
     */
    const KeysymsOcircumflex: number;

    /**
     * @default 0x00d5
     */
    const KeysymsOtilde: number;

    /**
     * @default 0x00d6
     */
    const KeysymsOdiaeresis: number;

    /**
     * @default 0x00d7
     */
    const Keysymsmultiply: number;

    /**
     * @default 0x00d8
     */
    const KeysymsOslash: number;

    /**
     * @default 0x00d8
     */
    const KeysymsOoblique: number;

    /**
     * @default 0x00d9
     */
    const KeysymsUgrave: number;

    /**
     * @default 0x00da
     */
    const KeysymsUacute: number;

    /**
     * @default 0x00db
     */
    const KeysymsUcircumflex: number;

    /**
     * @default 0x00dc
     */
    const KeysymsUdiaeresis: number;

    /**
     * @default 0x00dd
     */
    const KeysymsYacute: number;

    /**
     * @default 0x00de
     */
    const KeysymsTHORN: number;

    /**
     * @default 0x00de
     */
    const KeysymsThorn: number;

    /**
     * @default 0x00df
     */
    const Keysymsssharp: number;

    /**
     * @default 0x00e0
     */
    const Keysymsagrave: number;

    /**
     * @default 0x00e1
     */
    const Keysymsaacute: number;

    /**
     * @default 0x00e2
     */
    const Keysymsacircumflex: number;

    /**
     * @default 0x00e3
     */
    const Keysymsatilde: number;

    /**
     * @default 0x00e4
     */
    const Keysymsadiaeresis: number;

    /**
     * @default 0x00e5
     */
    const Keysymsaring: number;

    /**
     * @default 0x00e6
     */
    const Keysymsae: number;

    /**
     * @default 0x00e7
     */
    const Keysymsccedilla: number;

    /**
     * @default 0x00e8
     */
    const Keysymsegrave: number;

    /**
     * @default 0x00e9
     */
    const Keysymseacute: number;

    /**
     * @default 0x00ea
     */
    const Keysymsecircumflex: number;

    /**
     * @default 0x00eb
     */
    const Keysymsediaeresis: number;

    /**
     * @default 0x00ec
     */
    const Keysymsigrave: number;

    /**
     * @default 0x00ed
     */
    const Keysymsiacute: number;

    /**
     * @default 0x00ee
     */
    const Keysymsicircumflex: number;

    /**
     * @default 0x00ef
     */
    const Keysymsidiaeresis: number;

    /**
     * @default 0x00f0
     */
    const Keysymseth: number;

    /**
     * @default 0x00f1
     */
    const Keysymsntilde: number;

    /**
     * @default 0x00f2
     */
    const Keysymsograve: number;

    /**
     * @default 0x00f3
     */
    const Keysymsoacute: number;

    /**
     * @default 0x00f4
     */
    const Keysymsocircumflex: number;

    /**
     * @default 0x00f5
     */
    const Keysymsotilde: number;

    /**
     * @default 0x00f6
     */
    const Keysymsodiaeresis: number;

    /**
     * @default 0x00f7
     */
    const Keysymsdivision: number;

    /**
     * @default 0x00f8
     */
    const Keysymsoslash: number;

    /**
     * @default 0x00f8
     */
    const Keysymsooblique: number;

    /**
     * @default 0x00f9
     */
    const Keysymsugrave: number;

    /**
     * @default 0x00fa
     */
    const Keysymsuacute: number;

    /**
     * @default 0x00fb
     */
    const Keysymsucircumflex: number;

    /**
     * @default 0x00fc
     */
    const Keysymsudiaeresis: number;

    /**
     * @default 0x00fd
     */
    const Keysymsyacute: number;

    /**
     * @default 0x00fe
     */
    const Keysymsthorn: number;

    /**
     * @default 0x00ff
     */
    const Keysymsydiaeresis: number;

    /**
     * @default 0x01a1
     */
    const KeysymsAogonek: number;

    /**
     * @default 0x01a2
     */
    const Keysymsbreve: number;

    /**
     * @default 0x01a3
     */
    const KeysymsLstroke: number;

    /**
     * @default 0x01a5
     */
    const KeysymsLcaron: number;

    /**
     * @default 0x01a6
     */
    const KeysymsSacute: number;

    /**
     * @default 0x01a9
     */
    const KeysymsScaron: number;

    /**
     * @default 0x01aa
     */
    const KeysymsScedilla: number;

    /**
     * @default 0x01ab
     */
    const KeysymsTcaron: number;

    /**
     * @default 0x01ac
     */
    const KeysymsZacute: number;

    /**
     * @default 0x01ae
     */
    const KeysymsZcaron: number;

    /**
     * @default 0x01af
     */
    const KeysymsZabovedot: number;

    /**
     * @default 0x01b1
     */
    const Keysymsaogonek: number;

    /**
     * @default 0x01b2
     */
    const Keysymsogonek: number;

    /**
     * @default 0x01b3
     */
    const Keysymslstroke: number;

    /**
     * @default 0x01b5
     */
    const Keysymslcaron: number;

    /**
     * @default 0x01b6
     */
    const Keysymssacute: number;

    /**
     * @default 0x01b7
     */
    const Keysymscaron: number;

    /**
     * @default 0x01b9
     */
    const Keysymsscaron: number;

    /**
     * @default 0x01ba
     */
    const Keysymsscedilla: number;

    /**
     * @default 0x01bb
     */
    const Keysymstcaron: number;

    /**
     * @default 0x01bc
     */
    const Keysymszacute: number;

    /**
     * @default 0x01bd
     */
    const Keysymsdoubleacute: number;

    /**
     * @default 0x01be
     */
    const Keysymszcaron: number;

    /**
     * @default 0x01bf
     */
    const Keysymszabovedot: number;

    /**
     * @default 0x01c0
     */
    const KeysymsRacute: number;

    /**
     * @default 0x01c3
     */
    const KeysymsAbreve: number;

    /**
     * @default 0x01c5
     */
    const KeysymsLacute: number;

    /**
     * @default 0x01c6
     */
    const KeysymsCacute: number;

    /**
     * @default 0x01c8
     */
    const KeysymsCcaron: number;

    /**
     * @default 0x01ca
     */
    const KeysymsEogonek: number;

    /**
     * @default 0x01cc
     */
    const KeysymsEcaron: number;

    /**
     * @default 0x01cf
     */
    const KeysymsDcaron: number;

    /**
     * @default 0x01d0
     */
    const KeysymsDstroke: number;

    /**
     * @default 0x01d1
     */
    const KeysymsNacute: number;

    /**
     * @default 0x01d2
     */
    const KeysymsNcaron: number;

    /**
     * @default 0x01d5
     */
    const KeysymsOdoubleacute: number;

    /**
     * @default 0x01d8
     */
    const KeysymsRcaron: number;

    /**
     * @default 0x01d9
     */
    const KeysymsUring: number;

    /**
     * @default 0x01db
     */
    const KeysymsUdoubleacute: number;

    /**
     * @default 0x01de
     */
    const KeysymsTcedilla: number;

    /**
     * @default 0x01e0
     */
    const Keysymsracute: number;

    /**
     * @default 0x01e3
     */
    const Keysymsabreve: number;

    /**
     * @default 0x01e5
     */
    const Keysymslacute: number;

    /**
     * @default 0x01e6
     */
    const Keysymscacute: number;

    /**
     * @default 0x01e8
     */
    const Keysymsccaron: number;

    /**
     * @default 0x01ea
     */
    const Keysymseogonek: number;

    /**
     * @default 0x01ec
     */
    const Keysymsecaron: number;

    /**
     * @default 0x01ef
     */
    const Keysymsdcaron: number;

    /**
     * @default 0x01f0
     */
    const Keysymsdstroke: number;

    /**
     * @default 0x01f1
     */
    const Keysymsnacute: number;

    /**
     * @default 0x01f2
     */
    const Keysymsncaron: number;

    /**
     * @default 0x01f5
     */
    const Keysymsodoubleacute: number;

    /**
     * @default 0x01f8
     */
    const Keysymsrcaron: number;

    /**
     * @default 0x01f9
     */
    const Keysymsuring: number;

    /**
     * @default 0x01fb
     */
    const Keysymsudoubleacute: number;

    /**
     * @default 0x01fe
     */
    const Keysymstcedilla: number;

    /**
     * @default 0x01ff
     */
    const Keysymsabovedot: number;

    /**
     * @default 0x02a1
     */
    const KeysymsHstroke: number;

    /**
     * @default 0x02a6
     */
    const KeysymsHcircumflex: number;

    /**
     * @default 0x02a9
     */
    const KeysymsIabovedot: number;

    /**
     * @default 0x02ab
     */
    const KeysymsGbreve: number;

    /**
     * @default 0x02ac
     */
    const KeysymsJcircumflex: number;

    /**
     * @default 0x02b1
     */
    const Keysymshstroke: number;

    /**
     * @default 0x02b6
     */
    const Keysymshcircumflex: number;

    /**
     * @default 0x02b9
     */
    const Keysymsidotless: number;

    /**
     * @default 0x02bb
     */
    const Keysymsgbreve: number;

    /**
     * @default 0x02bc
     */
    const Keysymsjcircumflex: number;

    /**
     * @default 0x02c5
     */
    const KeysymsCabovedot: number;

    /**
     * @default 0x02c6
     */
    const KeysymsCcircumflex: number;

    /**
     * @default 0x02d5
     */
    const KeysymsGabovedot: number;

    /**
     * @default 0x02d8
     */
    const KeysymsGcircumflex: number;

    /**
     * @default 0x02dd
     */
    const KeysymsUbreve: number;

    /**
     * @default 0x02de
     */
    const KeysymsScircumflex: number;

    /**
     * @default 0x02e5
     */
    const Keysymscabovedot: number;

    /**
     * @default 0x02e6
     */
    const Keysymsccircumflex: number;

    /**
     * @default 0x02f5
     */
    const Keysymsgabovedot: number;

    /**
     * @default 0x02f8
     */
    const Keysymsgcircumflex: number;

    /**
     * @default 0x02fd
     */
    const Keysymsubreve: number;

    /**
     * @default 0x02fe
     */
    const Keysymsscircumflex: number;

    /**
     * @default 0x03a2
     */
    const Keysymskra: number;

    /**
     * @default 0x03a2
     */
    const Keysymskappa: number;

    /**
     * @default 0x03a3
     */
    const KeysymsRcedilla: number;

    /**
     * @default 0x03a5
     */
    const KeysymsItilde: number;

    /**
     * @default 0x03a6
     */
    const KeysymsLcedilla: number;

    /**
     * @default 0x03aa
     */
    const KeysymsEmacron: number;

    /**
     * @default 0x03ab
     */
    const KeysymsGcedilla: number;

    /**
     * @default 0x03ac
     */
    const KeysymsTslash: number;

    /**
     * @default 0x03b3
     */
    const Keysymsrcedilla: number;

    /**
     * @default 0x03b5
     */
    const Keysymsitilde: number;

    /**
     * @default 0x03b6
     */
    const Keysymslcedilla: number;

    /**
     * @default 0x03ba
     */
    const Keysymsemacron: number;

    /**
     * @default 0x03bb
     */
    const Keysymsgcedilla: number;

    /**
     * @default 0x03bc
     */
    const Keysymstslash: number;

    /**
     * @default 0x03bd
     */
    const KeysymsENG: number;

    /**
     * @default 0x03bf
     */
    const Keysymseng: number;

    /**
     * @default 0x03c0
     */
    const KeysymsAmacron: number;

    /**
     * @default 0x03c7
     */
    const KeysymsIogonek: number;

    /**
     * @default 0x03cc
     */
    const KeysymsEabovedot: number;

    /**
     * @default 0x03cf
     */
    const KeysymsImacron: number;

    /**
     * @default 0x03d1
     */
    const KeysymsNcedilla: number;

    /**
     * @default 0x03d2
     */
    const KeysymsOmacron: number;

    /**
     * @default 0x03d3
     */
    const KeysymsKcedilla: number;

    /**
     * @default 0x03d9
     */
    const KeysymsUogonek: number;

    /**
     * @default 0x03dd
     */
    const KeysymsUtilde: number;

    /**
     * @default 0x03de
     */
    const KeysymsUmacron: number;

    /**
     * @default 0x03e0
     */
    const Keysymsamacron: number;

    /**
     * @default 0x03e7
     */
    const Keysymsiogonek: number;

    /**
     * @default 0x03ec
     */
    const Keysymseabovedot: number;

    /**
     * @default 0x03ef
     */
    const Keysymsimacron: number;

    /**
     * @default 0x03f1
     */
    const Keysymsncedilla: number;

    /**
     * @default 0x03f2
     */
    const Keysymsomacron: number;

    /**
     * @default 0x03f3
     */
    const Keysymskcedilla: number;

    /**
     * @default 0x03f9
     */
    const Keysymsuogonek: number;

    /**
     * @default 0x03fd
     */
    const Keysymsutilde: number;

    /**
     * @default 0x03fe
     */
    const Keysymsumacron: number;

    /**
     * @default 0x1000174
     */
    const KeysymsWcircumflex: number;

    /**
     * @default 0x1000175
     */
    const Keysymswcircumflex: number;

    /**
     * @default 0x1000176
     */
    const KeysymsYcircumflex: number;

    /**
     * @default 0x1000177
     */
    const Keysymsycircumflex: number;

    /**
     * @default 0x1001e02
     */
    const KeysymsBabovedot: number;

    /**
     * @default 0x1001e03
     */
    const Keysymsbabovedot: number;

    /**
     * @default 0x1001e0a
     */
    const KeysymsDabovedot: number;

    /**
     * @default 0x1001e0b
     */
    const Keysymsdabovedot: number;

    /**
     * @default 0x1001e1e
     */
    const KeysymsFabovedot: number;

    /**
     * @default 0x1001e1f
     */
    const Keysymsfabovedot: number;

    /**
     * @default 0x1001e40
     */
    const KeysymsMabovedot: number;

    /**
     * @default 0x1001e41
     */
    const Keysymsmabovedot: number;

    /**
     * @default 0x1001e56
     */
    const KeysymsPabovedot: number;

    /**
     * @default 0x1001e57
     */
    const Keysymspabovedot: number;

    /**
     * @default 0x1001e60
     */
    const KeysymsSabovedot: number;

    /**
     * @default 0x1001e61
     */
    const Keysymssabovedot: number;

    /**
     * @default 0x1001e6a
     */
    const KeysymsTabovedot: number;

    /**
     * @default 0x1001e6b
     */
    const Keysymstabovedot: number;

    /**
     * @default 0x1001e80
     */
    const KeysymsWgrave: number;

    /**
     * @default 0x1001e81
     */
    const Keysymswgrave: number;

    /**
     * @default 0x1001e82
     */
    const KeysymsWacute: number;

    /**
     * @default 0x1001e83
     */
    const Keysymswacute: number;

    /**
     * @default 0x1001e84
     */
    const KeysymsWdiaeresis: number;

    /**
     * @default 0x1001e85
     */
    const Keysymswdiaeresis: number;

    /**
     * @default 0x1001ef2
     */
    const KeysymsYgrave: number;

    /**
     * @default 0x1001ef3
     */
    const Keysymsygrave: number;

    /**
     * @default 0x13bc
     */
    const KeysymsOE: number;

    /**
     * @default 0x13bd
     */
    const Keysymsoe: number;

    /**
     * @default 0x13be
     */
    const KeysymsYdiaeresis: number;

    /**
     * @default 0x047e
     */
    const Keysymsoverline: number;

    /**
     * @default 0x04a1
     */
    const Keysymskana_fullstop: number;

    /**
     * @default 0x04a2
     */
    const Keysymskana_openingbracket: number;

    /**
     * @default 0x04a3
     */
    const Keysymskana_closingbracket: number;

    /**
     * @default 0x04a4
     */
    const Keysymskana_comma: number;

    /**
     * @default 0x04a5
     */
    const Keysymskana_conjunctive: number;

    /**
     * @default 0x04a5
     */
    const Keysymskana_middledot: number;

    /**
     * @default 0x04a6
     */
    const Keysymskana_WO: number;

    /**
     * @default 0x04a7
     */
    const Keysymskana_a: number;

    /**
     * @default 0x04a8
     */
    const Keysymskana_i: number;

    /**
     * @default 0x04a9
     */
    const Keysymskana_u: number;

    /**
     * @default 0x04aa
     */
    const Keysymskana_e: number;

    /**
     * @default 0x04ab
     */
    const Keysymskana_o: number;

    /**
     * @default 0x04ac
     */
    const Keysymskana_ya: number;

    /**
     * @default 0x04ad
     */
    const Keysymskana_yu: number;

    /**
     * @default 0x04ae
     */
    const Keysymskana_yo: number;

    /**
     * @default 0x04af
     */
    const Keysymskana_tsu: number;

    /**
     * @default 0x04af
     */
    const Keysymskana_tu: number;

    /**
     * @default 0x04b0
     */
    const Keysymsprolongedsound: number;

    /**
     * @default 0x04b1
     */
    const Keysymskana_A: number;

    /**
     * @default 0x04b2
     */
    const Keysymskana_I: number;

    /**
     * @default 0x04b3
     */
    const Keysymskana_U: number;

    /**
     * @default 0x04b4
     */
    const Keysymskana_E: number;

    /**
     * @default 0x04b5
     */
    const Keysymskana_O: number;

    /**
     * @default 0x04b6
     */
    const Keysymskana_KA: number;

    /**
     * @default 0x04b7
     */
    const Keysymskana_KI: number;

    /**
     * @default 0x04b8
     */
    const Keysymskana_KU: number;

    /**
     * @default 0x04b9
     */
    const Keysymskana_KE: number;

    /**
     * @default 0x04ba
     */
    const Keysymskana_KO: number;

    /**
     * @default 0x04bb
     */
    const Keysymskana_SA: number;

    /**
     * @default 0x04bc
     */
    const Keysymskana_SHI: number;

    /**
     * @default 0x04bd
     */
    const Keysymskana_SU: number;

    /**
     * @default 0x04be
     */
    const Keysymskana_SE: number;

    /**
     * @default 0x04bf
     */
    const Keysymskana_SO: number;

    /**
     * @default 0x04c0
     */
    const Keysymskana_TA: number;

    /**
     * @default 0x04c1
     */
    const Keysymskana_CHI: number;

    /**
     * @default 0x04c1
     */
    const Keysymskana_TI: number;

    /**
     * @default 0x04c2
     */
    const Keysymskana_TSU: number;

    /**
     * @default 0x04c2
     */
    const Keysymskana_TU: number;

    /**
     * @default 0x04c3
     */
    const Keysymskana_TE: number;

    /**
     * @default 0x04c4
     */
    const Keysymskana_TO: number;

    /**
     * @default 0x04c5
     */
    const Keysymskana_NA: number;

    /**
     * @default 0x04c6
     */
    const Keysymskana_NI: number;

    /**
     * @default 0x04c7
     */
    const Keysymskana_NU: number;

    /**
     * @default 0x04c8
     */
    const Keysymskana_NE: number;

    /**
     * @default 0x04c9
     */
    const Keysymskana_NO: number;

    /**
     * @default 0x04ca
     */
    const Keysymskana_HA: number;

    /**
     * @default 0x04cb
     */
    const Keysymskana_HI: number;

    /**
     * @default 0x04cc
     */
    const Keysymskana_FU: number;

    /**
     * @default 0x04cc
     */
    const Keysymskana_HU: number;

    /**
     * @default 0x04cd
     */
    const Keysymskana_HE: number;

    /**
     * @default 0x04ce
     */
    const Keysymskana_HO: number;

    /**
     * @default 0x04cf
     */
    const Keysymskana_MA: number;

    /**
     * @default 0x04d0
     */
    const Keysymskana_MI: number;

    /**
     * @default 0x04d1
     */
    const Keysymskana_MU: number;

    /**
     * @default 0x04d2
     */
    const Keysymskana_ME: number;

    /**
     * @default 0x04d3
     */
    const Keysymskana_MO: number;

    /**
     * @default 0x04d4
     */
    const Keysymskana_YA: number;

    /**
     * @default 0x04d5
     */
    const Keysymskana_YU: number;

    /**
     * @default 0x04d6
     */
    const Keysymskana_YO: number;

    /**
     * @default 0x04d7
     */
    const Keysymskana_RA: number;

    /**
     * @default 0x04d8
     */
    const Keysymskana_RI: number;

    /**
     * @default 0x04d9
     */
    const Keysymskana_RU: number;

    /**
     * @default 0x04da
     */
    const Keysymskana_RE: number;

    /**
     * @default 0x04db
     */
    const Keysymskana_RO: number;

    /**
     * @default 0x04dc
     */
    const Keysymskana_WA: number;

    /**
     * @default 0x04dd
     */
    const Keysymskana_N: number;

    /**
     * @default 0x04de
     */
    const Keysymsvoicedsound: number;

    /**
     * @default 0x04df
     */
    const Keysymssemivoicedsound: number;

    /**
     * @default 0xff7e
     */
    const Keysymskana_switch: number;

    /**
     * @default 0x10006f0
     */
    const KeysymsFarsi_0: number;

    /**
     * @default 0x10006f1
     */
    const KeysymsFarsi_1: number;

    /**
     * @default 0x10006f2
     */
    const KeysymsFarsi_2: number;

    /**
     * @default 0x10006f3
     */
    const KeysymsFarsi_3: number;

    /**
     * @default 0x10006f4
     */
    const KeysymsFarsi_4: number;

    /**
     * @default 0x10006f5
     */
    const KeysymsFarsi_5: number;

    /**
     * @default 0x10006f6
     */
    const KeysymsFarsi_6: number;

    /**
     * @default 0x10006f7
     */
    const KeysymsFarsi_7: number;

    /**
     * @default 0x10006f8
     */
    const KeysymsFarsi_8: number;

    /**
     * @default 0x10006f9
     */
    const KeysymsFarsi_9: number;

    /**
     * @default 0x100066a
     */
    const KeysymsArabic_percent: number;

    /**
     * @default 0x1000670
     */
    const KeysymsArabic_superscript_alef: number;

    /**
     * @default 0x1000679
     */
    const KeysymsArabic_tteh: number;

    /**
     * @default 0x100067e
     */
    const KeysymsArabic_peh: number;

    /**
     * @default 0x1000686
     */
    const KeysymsArabic_tcheh: number;

    /**
     * @default 0x1000688
     */
    const KeysymsArabic_ddal: number;

    /**
     * @default 0x1000691
     */
    const KeysymsArabic_rreh: number;

    /**
     * @default 0x05ac
     */
    const KeysymsArabic_comma: number;

    /**
     * @default 0x10006d4
     */
    const KeysymsArabic_fullstop: number;

    /**
     * @default 0x1000660
     */
    const KeysymsArabic_0: number;

    /**
     * @default 0x1000661
     */
    const KeysymsArabic_1: number;

    /**
     * @default 0x1000662
     */
    const KeysymsArabic_2: number;

    /**
     * @default 0x1000663
     */
    const KeysymsArabic_3: number;

    /**
     * @default 0x1000664
     */
    const KeysymsArabic_4: number;

    /**
     * @default 0x1000665
     */
    const KeysymsArabic_5: number;

    /**
     * @default 0x1000666
     */
    const KeysymsArabic_6: number;

    /**
     * @default 0x1000667
     */
    const KeysymsArabic_7: number;

    /**
     * @default 0x1000668
     */
    const KeysymsArabic_8: number;

    /**
     * @default 0x1000669
     */
    const KeysymsArabic_9: number;

    /**
     * @default 0x05bb
     */
    const KeysymsArabic_semicolon: number;

    /**
     * @default 0x05bf
     */
    const KeysymsArabic_question_mark: number;

    /**
     * @default 0x05c1
     */
    const KeysymsArabic_hamza: number;

    /**
     * @default 0x05c2
     */
    const KeysymsArabic_maddaonalef: number;

    /**
     * @default 0x05c3
     */
    const KeysymsArabic_hamzaonalef: number;

    /**
     * @default 0x05c4
     */
    const KeysymsArabic_hamzaonwaw: number;

    /**
     * @default 0x05c5
     */
    const KeysymsArabic_hamzaunderalef: number;

    /**
     * @default 0x05c6
     */
    const KeysymsArabic_hamzaonyeh: number;

    /**
     * @default 0x05c7
     */
    const KeysymsArabic_alef: number;

    /**
     * @default 0x05c8
     */
    const KeysymsArabic_beh: number;

    /**
     * @default 0x05c9
     */
    const KeysymsArabic_tehmarbuta: number;

    /**
     * @default 0x05ca
     */
    const KeysymsArabic_teh: number;

    /**
     * @default 0x05cb
     */
    const KeysymsArabic_theh: number;

    /**
     * @default 0x05cc
     */
    const KeysymsArabic_jeem: number;

    /**
     * @default 0x05cd
     */
    const KeysymsArabic_hah: number;

    /**
     * @default 0x05ce
     */
    const KeysymsArabic_khah: number;

    /**
     * @default 0x05cf
     */
    const KeysymsArabic_dal: number;

    /**
     * @default 0x05d0
     */
    const KeysymsArabic_thal: number;

    /**
     * @default 0x05d1
     */
    const KeysymsArabic_ra: number;

    /**
     * @default 0x05d2
     */
    const KeysymsArabic_zain: number;

    /**
     * @default 0x05d3
     */
    const KeysymsArabic_seen: number;

    /**
     * @default 0x05d4
     */
    const KeysymsArabic_sheen: number;

    /**
     * @default 0x05d5
     */
    const KeysymsArabic_sad: number;

    /**
     * @default 0x05d6
     */
    const KeysymsArabic_dad: number;

    /**
     * @default 0x05d7
     */
    const KeysymsArabic_tah: number;

    /**
     * @default 0x05d8
     */
    const KeysymsArabic_zah: number;

    /**
     * @default 0x05d9
     */
    const KeysymsArabic_ain: number;

    /**
     * @default 0x05da
     */
    const KeysymsArabic_ghain: number;

    /**
     * @default 0x05e0
     */
    const KeysymsArabic_tatweel: number;

    /**
     * @default 0x05e1
     */
    const KeysymsArabic_feh: number;

    /**
     * @default 0x05e2
     */
    const KeysymsArabic_qaf: number;

    /**
     * @default 0x05e3
     */
    const KeysymsArabic_kaf: number;

    /**
     * @default 0x05e4
     */
    const KeysymsArabic_lam: number;

    /**
     * @default 0x05e5
     */
    const KeysymsArabic_meem: number;

    /**
     * @default 0x05e6
     */
    const KeysymsArabic_noon: number;

    /**
     * @default 0x05e7
     */
    const KeysymsArabic_ha: number;

    /**
     * @default 0x05e7
     */
    const KeysymsArabic_heh: number;

    /**
     * @default 0x05e8
     */
    const KeysymsArabic_waw: number;

    /**
     * @default 0x05e9
     */
    const KeysymsArabic_alefmaksura: number;

    /**
     * @default 0x05ea
     */
    const KeysymsArabic_yeh: number;

    /**
     * @default 0x05eb
     */
    const KeysymsArabic_fathatan: number;

    /**
     * @default 0x05ec
     */
    const KeysymsArabic_dammatan: number;

    /**
     * @default 0x05ed
     */
    const KeysymsArabic_kasratan: number;

    /**
     * @default 0x05ee
     */
    const KeysymsArabic_fatha: number;

    /**
     * @default 0x05ef
     */
    const KeysymsArabic_damma: number;

    /**
     * @default 0x05f0
     */
    const KeysymsArabic_kasra: number;

    /**
     * @default 0x05f1
     */
    const KeysymsArabic_shadda: number;

    /**
     * @default 0x05f2
     */
    const KeysymsArabic_sukun: number;

    /**
     * @default 0x1000653
     */
    const KeysymsArabic_madda_above: number;

    /**
     * @default 0x1000654
     */
    const KeysymsArabic_hamza_above: number;

    /**
     * @default 0x1000655
     */
    const KeysymsArabic_hamza_below: number;

    /**
     * @default 0x1000698
     */
    const KeysymsArabic_jeh: number;

    /**
     * @default 0x10006a4
     */
    const KeysymsArabic_veh: number;

    /**
     * @default 0x10006a9
     */
    const KeysymsArabic_keheh: number;

    /**
     * @default 0x10006af
     */
    const KeysymsArabic_gaf: number;

    /**
     * @default 0x10006ba
     */
    const KeysymsArabic_noon_ghunna: number;

    /**
     * @default 0x10006be
     */
    const KeysymsArabic_heh_doachashmee: number;

    /**
     * @default 0x10006cc
     */
    const KeysymsFarsi_yeh: number;

    /**
     * @default 0x10006cc
     */
    const KeysymsArabic_farsi_yeh: number;

    /**
     * @default 0x10006d2
     */
    const KeysymsArabic_yeh_baree: number;

    /**
     * @default 0x10006c1
     */
    const KeysymsArabic_heh_goal: number;

    /**
     * @default 0xff7e
     */
    const KeysymsArabic_switch: number;

    /**
     * @default 0x1000492
     */
    const KeysymsCyrillic_GHE_bar: number;

    /**
     * @default 0x1000493
     */
    const KeysymsCyrillic_ghe_bar: number;

    /**
     * @default 0x1000496
     */
    const KeysymsCyrillic_ZHE_descender: number;

    /**
     * @default 0x1000497
     */
    const KeysymsCyrillic_zhe_descender: number;

    /**
     * @default 0x100049a
     */
    const KeysymsCyrillic_KA_descender: number;

    /**
     * @default 0x100049b
     */
    const KeysymsCyrillic_ka_descender: number;

    /**
     * @default 0x100049c
     */
    const KeysymsCyrillic_KA_vertstroke: number;

    /**
     * @default 0x100049d
     */
    const KeysymsCyrillic_ka_vertstroke: number;

    /**
     * @default 0x10004a2
     */
    const KeysymsCyrillic_EN_descender: number;

    /**
     * @default 0x10004a3
     */
    const KeysymsCyrillic_en_descender: number;

    /**
     * @default 0x10004ae
     */
    const KeysymsCyrillic_U_straight: number;

    /**
     * @default 0x10004af
     */
    const KeysymsCyrillic_u_straight: number;

    /**
     * @default 0x10004b0
     */
    const KeysymsCyrillic_U_straight_bar: number;

    /**
     * @default 0x10004b1
     */
    const KeysymsCyrillic_u_straight_bar: number;

    /**
     * @default 0x10004b2
     */
    const KeysymsCyrillic_HA_descender: number;

    /**
     * @default 0x10004b3
     */
    const KeysymsCyrillic_ha_descender: number;

    /**
     * @default 0x10004b6
     */
    const KeysymsCyrillic_CHE_descender: number;

    /**
     * @default 0x10004b7
     */
    const KeysymsCyrillic_che_descender: number;

    /**
     * @default 0x10004b8
     */
    const KeysymsCyrillic_CHE_vertstroke: number;

    /**
     * @default 0x10004b9
     */
    const KeysymsCyrillic_che_vertstroke: number;

    /**
     * @default 0x10004ba
     */
    const KeysymsCyrillic_SHHA: number;

    /**
     * @default 0x10004bb
     */
    const KeysymsCyrillic_shha: number;

    /**
     * @default 0x10004d8
     */
    const KeysymsCyrillic_SCHWA: number;

    /**
     * @default 0x10004d9
     */
    const KeysymsCyrillic_schwa: number;

    /**
     * @default 0x10004e2
     */
    const KeysymsCyrillic_I_macron: number;

    /**
     * @default 0x10004e3
     */
    const KeysymsCyrillic_i_macron: number;

    /**
     * @default 0x10004e8
     */
    const KeysymsCyrillic_O_bar: number;

    /**
     * @default 0x10004e9
     */
    const KeysymsCyrillic_o_bar: number;

    /**
     * @default 0x10004ee
     */
    const KeysymsCyrillic_U_macron: number;

    /**
     * @default 0x10004ef
     */
    const KeysymsCyrillic_u_macron: number;

    /**
     * @default 0x06a1
     */
    const KeysymsSerbian_dje: number;

    /**
     * @default 0x06a2
     */
    const KeysymsMacedonia_gje: number;

    /**
     * @default 0x06a3
     */
    const KeysymsCyrillic_io: number;

    /**
     * @default 0x06a4
     */
    const KeysymsUkrainian_ie: number;

    /**
     * @default 0x06a4
     */
    const KeysymsUkranian_je: number;

    /**
     * @default 0x06a5
     */
    const KeysymsMacedonia_dse: number;

    /**
     * @default 0x06a6
     */
    const KeysymsUkrainian_i: number;

    /**
     * @default 0x06a6
     */
    const KeysymsUkranian_i: number;

    /**
     * @default 0x06a7
     */
    const KeysymsUkrainian_yi: number;

    /**
     * @default 0x06a7
     */
    const KeysymsUkranian_yi: number;

    /**
     * @default 0x06a8
     */
    const KeysymsCyrillic_je: number;

    /**
     * @default 0x06a8
     */
    const KeysymsSerbian_je: number;

    /**
     * @default 0x06a9
     */
    const KeysymsCyrillic_lje: number;

    /**
     * @default 0x06a9
     */
    const KeysymsSerbian_lje: number;

    /**
     * @default 0x06aa
     */
    const KeysymsCyrillic_nje: number;

    /**
     * @default 0x06aa
     */
    const KeysymsSerbian_nje: number;

    /**
     * @default 0x06ab
     */
    const KeysymsSerbian_tshe: number;

    /**
     * @default 0x06ac
     */
    const KeysymsMacedonia_kje: number;

    /**
     * @default 0x06ad
     */
    const KeysymsUkrainian_ghe_with_upturn: number;

    /**
     * @default 0x06ae
     */
    const KeysymsByelorussian_shortu: number;

    /**
     * @default 0x06af
     */
    const KeysymsCyrillic_dzhe: number;

    /**
     * @default 0x06af
     */
    const KeysymsSerbian_dze: number;

    /**
     * @default 0x06b0
     */
    const Keysymsnumerosign: number;

    /**
     * @default 0x06b1
     */
    const KeysymsSerbian_DJE: number;

    /**
     * @default 0x06b2
     */
    const KeysymsMacedonia_GJE: number;

    /**
     * @default 0x06b3
     */
    const KeysymsCyrillic_IO: number;

    /**
     * @default 0x06b4
     */
    const KeysymsUkrainian_IE: number;

    /**
     * @default 0x06b4
     */
    const KeysymsUkranian_JE: number;

    /**
     * @default 0x06b5
     */
    const KeysymsMacedonia_DSE: number;

    /**
     * @default 0x06b6
     */
    const KeysymsUkrainian_I: number;

    /**
     * @default 0x06b6
     */
    const KeysymsUkranian_I: number;

    /**
     * @default 0x06b7
     */
    const KeysymsUkrainian_YI: number;

    /**
     * @default 0x06b7
     */
    const KeysymsUkranian_YI: number;

    /**
     * @default 0x06b8
     */
    const KeysymsCyrillic_JE: number;

    /**
     * @default 0x06b8
     */
    const KeysymsSerbian_JE: number;

    /**
     * @default 0x06b9
     */
    const KeysymsCyrillic_LJE: number;

    /**
     * @default 0x06b9
     */
    const KeysymsSerbian_LJE: number;

    /**
     * @default 0x06ba
     */
    const KeysymsCyrillic_NJE: number;

    /**
     * @default 0x06ba
     */
    const KeysymsSerbian_NJE: number;

    /**
     * @default 0x06bb
     */
    const KeysymsSerbian_TSHE: number;

    /**
     * @default 0x06bc
     */
    const KeysymsMacedonia_KJE: number;

    /**
     * @default 0x06bd
     */
    const KeysymsUkrainian_GHE_WITH_UPTURN: number;

    /**
     * @default 0x06be
     */
    const KeysymsByelorussian_SHORTU: number;

    /**
     * @default 0x06bf
     */
    const KeysymsCyrillic_DZHE: number;

    /**
     * @default 0x06bf
     */
    const KeysymsSerbian_DZE: number;

    /**
     * @default 0x06c0
     */
    const KeysymsCyrillic_yu: number;

    /**
     * @default 0x06c1
     */
    const KeysymsCyrillic_a: number;

    /**
     * @default 0x06c2
     */
    const KeysymsCyrillic_be: number;

    /**
     * @default 0x06c3
     */
    const KeysymsCyrillic_tse: number;

    /**
     * @default 0x06c4
     */
    const KeysymsCyrillic_de: number;

    /**
     * @default 0x06c5
     */
    const KeysymsCyrillic_ie: number;

    /**
     * @default 0x06c6
     */
    const KeysymsCyrillic_ef: number;

    /**
     * @default 0x06c7
     */
    const KeysymsCyrillic_ghe: number;

    /**
     * @default 0x06c8
     */
    const KeysymsCyrillic_ha: number;

    /**
     * @default 0x06c9
     */
    const KeysymsCyrillic_i: number;

    /**
     * @default 0x06ca
     */
    const KeysymsCyrillic_shorti: number;

    /**
     * @default 0x06cb
     */
    const KeysymsCyrillic_ka: number;

    /**
     * @default 0x06cc
     */
    const KeysymsCyrillic_el: number;

    /**
     * @default 0x06cd
     */
    const KeysymsCyrillic_em: number;

    /**
     * @default 0x06ce
     */
    const KeysymsCyrillic_en: number;

    /**
     * @default 0x06cf
     */
    const KeysymsCyrillic_o: number;

    /**
     * @default 0x06d0
     */
    const KeysymsCyrillic_pe: number;

    /**
     * @default 0x06d1
     */
    const KeysymsCyrillic_ya: number;

    /**
     * @default 0x06d2
     */
    const KeysymsCyrillic_er: number;

    /**
     * @default 0x06d3
     */
    const KeysymsCyrillic_es: number;

    /**
     * @default 0x06d4
     */
    const KeysymsCyrillic_te: number;

    /**
     * @default 0x06d5
     */
    const KeysymsCyrillic_u: number;

    /**
     * @default 0x06d6
     */
    const KeysymsCyrillic_zhe: number;

    /**
     * @default 0x06d7
     */
    const KeysymsCyrillic_ve: number;

    /**
     * @default 0x06d8
     */
    const KeysymsCyrillic_softsign: number;

    /**
     * @default 0x06d9
     */
    const KeysymsCyrillic_yeru: number;

    /**
     * @default 0x06da
     */
    const KeysymsCyrillic_ze: number;

    /**
     * @default 0x06db
     */
    const KeysymsCyrillic_sha: number;

    /**
     * @default 0x06dc
     */
    const KeysymsCyrillic_e: number;

    /**
     * @default 0x06dd
     */
    const KeysymsCyrillic_shcha: number;

    /**
     * @default 0x06de
     */
    const KeysymsCyrillic_che: number;

    /**
     * @default 0x06df
     */
    const KeysymsCyrillic_hardsign: number;

    /**
     * @default 0x06e0
     */
    const KeysymsCyrillic_YU: number;

    /**
     * @default 0x06e1
     */
    const KeysymsCyrillic_A: number;

    /**
     * @default 0x06e2
     */
    const KeysymsCyrillic_BE: number;

    /**
     * @default 0x06e3
     */
    const KeysymsCyrillic_TSE: number;

    /**
     * @default 0x06e4
     */
    const KeysymsCyrillic_DE: number;

    /**
     * @default 0x06e5
     */
    const KeysymsCyrillic_IE: number;

    /**
     * @default 0x06e6
     */
    const KeysymsCyrillic_EF: number;

    /**
     * @default 0x06e7
     */
    const KeysymsCyrillic_GHE: number;

    /**
     * @default 0x06e8
     */
    const KeysymsCyrillic_HA: number;

    /**
     * @default 0x06e9
     */
    const KeysymsCyrillic_I: number;

    /**
     * @default 0x06ea
     */
    const KeysymsCyrillic_SHORTI: number;

    /**
     * @default 0x06eb
     */
    const KeysymsCyrillic_KA: number;

    /**
     * @default 0x06ec
     */
    const KeysymsCyrillic_EL: number;

    /**
     * @default 0x06ed
     */
    const KeysymsCyrillic_EM: number;

    /**
     * @default 0x06ee
     */
    const KeysymsCyrillic_EN: number;

    /**
     * @default 0x06ef
     */
    const KeysymsCyrillic_O: number;

    /**
     * @default 0x06f0
     */
    const KeysymsCyrillic_PE: number;

    /**
     * @default 0x06f1
     */
    const KeysymsCyrillic_YA: number;

    /**
     * @default 0x06f2
     */
    const KeysymsCyrillic_ER: number;

    /**
     * @default 0x06f3
     */
    const KeysymsCyrillic_ES: number;

    /**
     * @default 0x06f4
     */
    const KeysymsCyrillic_TE: number;

    /**
     * @default 0x06f5
     */
    const KeysymsCyrillic_U: number;

    /**
     * @default 0x06f6
     */
    const KeysymsCyrillic_ZHE: number;

    /**
     * @default 0x06f7
     */
    const KeysymsCyrillic_VE: number;

    /**
     * @default 0x06f8
     */
    const KeysymsCyrillic_SOFTSIGN: number;

    /**
     * @default 0x06f9
     */
    const KeysymsCyrillic_YERU: number;

    /**
     * @default 0x06fa
     */
    const KeysymsCyrillic_ZE: number;

    /**
     * @default 0x06fb
     */
    const KeysymsCyrillic_SHA: number;

    /**
     * @default 0x06fc
     */
    const KeysymsCyrillic_E: number;

    /**
     * @default 0x06fd
     */
    const KeysymsCyrillic_SHCHA: number;

    /**
     * @default 0x06fe
     */
    const KeysymsCyrillic_CHE: number;

    /**
     * @default 0x06ff
     */
    const KeysymsCyrillic_HARDSIGN: number;

    /**
     * @default 0x07a1
     */
    const KeysymsGreek_ALPHAaccent: number;

    /**
     * @default 0x07a2
     */
    const KeysymsGreek_EPSILONaccent: number;

    /**
     * @default 0x07a3
     */
    const KeysymsGreek_ETAaccent: number;

    /**
     * @default 0x07a4
     */
    const KeysymsGreek_IOTAaccent: number;

    /**
     * @default 0x07a5
     */
    const KeysymsGreek_IOTAdieresis: number;

    /**
     * @default 0x07a5
     */
    const KeysymsGreek_IOTAdiaeresis: number;

    /**
     * @default 0x07a7
     */
    const KeysymsGreek_OMICRONaccent: number;

    /**
     * @default 0x07a8
     */
    const KeysymsGreek_UPSILONaccent: number;

    /**
     * @default 0x07a9
     */
    const KeysymsGreek_UPSILONdieresis: number;

    /**
     * @default 0x07ab
     */
    const KeysymsGreek_OMEGAaccent: number;

    /**
     * @default 0x07ae
     */
    const KeysymsGreek_accentdieresis: number;

    /**
     * @default 0x07af
     */
    const KeysymsGreek_horizbar: number;

    /**
     * @default 0x07b1
     */
    const KeysymsGreek_alphaaccent: number;

    /**
     * @default 0x07b2
     */
    const KeysymsGreek_epsilonaccent: number;

    /**
     * @default 0x07b3
     */
    const KeysymsGreek_etaaccent: number;

    /**
     * @default 0x07b4
     */
    const KeysymsGreek_iotaaccent: number;

    /**
     * @default 0x07b5
     */
    const KeysymsGreek_iotadieresis: number;

    /**
     * @default 0x07b6
     */
    const KeysymsGreek_iotaaccentdieresis: number;

    /**
     * @default 0x07b7
     */
    const KeysymsGreek_omicronaccent: number;

    /**
     * @default 0x07b8
     */
    const KeysymsGreek_upsilonaccent: number;

    /**
     * @default 0x07b9
     */
    const KeysymsGreek_upsilondieresis: number;

    /**
     * @default 0x07ba
     */
    const KeysymsGreek_upsilonaccentdieresis: number;

    /**
     * @default 0x07bb
     */
    const KeysymsGreek_omegaaccent: number;

    /**
     * @default 0x07c1
     */
    const KeysymsGreek_ALPHA: number;

    /**
     * @default 0x07c2
     */
    const KeysymsGreek_BETA: number;

    /**
     * @default 0x07c3
     */
    const KeysymsGreek_GAMMA: number;

    /**
     * @default 0x07c4
     */
    const KeysymsGreek_DELTA: number;

    /**
     * @default 0x07c5
     */
    const KeysymsGreek_EPSILON: number;

    /**
     * @default 0x07c6
     */
    const KeysymsGreek_ZETA: number;

    /**
     * @default 0x07c7
     */
    const KeysymsGreek_ETA: number;

    /**
     * @default 0x07c8
     */
    const KeysymsGreek_THETA: number;

    /**
     * @default 0x07c9
     */
    const KeysymsGreek_IOTA: number;

    /**
     * @default 0x07ca
     */
    const KeysymsGreek_KAPPA: number;

    /**
     * @default 0x07cb
     */
    const KeysymsGreek_LAMDA: number;

    /**
     * @default 0x07cb
     */
    const KeysymsGreek_LAMBDA: number;

    /**
     * @default 0x07cc
     */
    const KeysymsGreek_MU: number;

    /**
     * @default 0x07cd
     */
    const KeysymsGreek_NU: number;

    /**
     * @default 0x07ce
     */
    const KeysymsGreek_XI: number;

    /**
     * @default 0x07cf
     */
    const KeysymsGreek_OMICRON: number;

    /**
     * @default 0x07d0
     */
    const KeysymsGreek_PI: number;

    /**
     * @default 0x07d1
     */
    const KeysymsGreek_RHO: number;

    /**
     * @default 0x07d2
     */
    const KeysymsGreek_SIGMA: number;

    /**
     * @default 0x07d4
     */
    const KeysymsGreek_TAU: number;

    /**
     * @default 0x07d5
     */
    const KeysymsGreek_UPSILON: number;

    /**
     * @default 0x07d6
     */
    const KeysymsGreek_PHI: number;

    /**
     * @default 0x07d7
     */
    const KeysymsGreek_CHI: number;

    /**
     * @default 0x07d8
     */
    const KeysymsGreek_PSI: number;

    /**
     * @default 0x07d9
     */
    const KeysymsGreek_OMEGA: number;

    /**
     * @default 0x07e1
     */
    const KeysymsGreek_alpha: number;

    /**
     * @default 0x07e2
     */
    const KeysymsGreek_beta: number;

    /**
     * @default 0x07e3
     */
    const KeysymsGreek_gamma: number;

    /**
     * @default 0x07e4
     */
    const KeysymsGreek_delta: number;

    /**
     * @default 0x07e5
     */
    const KeysymsGreek_epsilon: number;

    /**
     * @default 0x07e6
     */
    const KeysymsGreek_zeta: number;

    /**
     * @default 0x07e7
     */
    const KeysymsGreek_eta: number;

    /**
     * @default 0x07e8
     */
    const KeysymsGreek_theta: number;

    /**
     * @default 0x07e9
     */
    const KeysymsGreek_iota: number;

    /**
     * @default 0x07ea
     */
    const KeysymsGreek_kappa: number;

    /**
     * @default 0x07eb
     */
    const KeysymsGreek_lamda: number;

    /**
     * @default 0x07eb
     */
    const KeysymsGreek_lambda: number;

    /**
     * @default 0x07ec
     */
    const KeysymsGreek_mu: number;

    /**
     * @default 0x07ed
     */
    const KeysymsGreek_nu: number;

    /**
     * @default 0x07ee
     */
    const KeysymsGreek_xi: number;

    /**
     * @default 0x07ef
     */
    const KeysymsGreek_omicron: number;

    /**
     * @default 0x07f0
     */
    const KeysymsGreek_pi: number;

    /**
     * @default 0x07f1
     */
    const KeysymsGreek_rho: number;

    /**
     * @default 0x07f2
     */
    const KeysymsGreek_sigma: number;

    /**
     * @default 0x07f3
     */
    const KeysymsGreek_finalsmallsigma: number;

    /**
     * @default 0x07f4
     */
    const KeysymsGreek_tau: number;

    /**
     * @default 0x07f5
     */
    const KeysymsGreek_upsilon: number;

    /**
     * @default 0x07f6
     */
    const KeysymsGreek_phi: number;

    /**
     * @default 0x07f7
     */
    const KeysymsGreek_chi: number;

    /**
     * @default 0x07f8
     */
    const KeysymsGreek_psi: number;

    /**
     * @default 0x07f9
     */
    const KeysymsGreek_omega: number;

    /**
     * @default 0xff7e
     */
    const KeysymsGreek_switch: number;

    /**
     * @default 0x08a1
     */
    const Keysymsleftradical: number;

    /**
     * @default 0x08a2
     */
    const Keysymstopleftradical: number;

    /**
     * @default 0x08a3
     */
    const Keysymshorizconnector: number;

    /**
     * @default 0x08a4
     */
    const Keysymstopintegral: number;

    /**
     * @default 0x08a5
     */
    const Keysymsbotintegral: number;

    /**
     * @default 0x08a6
     */
    const Keysymsvertconnector: number;

    /**
     * @default 0x08a7
     */
    const Keysymstopleftsqbracket: number;

    /**
     * @default 0x08a8
     */
    const Keysymsbotleftsqbracket: number;

    /**
     * @default 0x08a9
     */
    const Keysymstoprightsqbracket: number;

    /**
     * @default 0x08aa
     */
    const Keysymsbotrightsqbracket: number;

    /**
     * @default 0x08ab
     */
    const Keysymstopleftparens: number;

    /**
     * @default 0x08ac
     */
    const Keysymsbotleftparens: number;

    /**
     * @default 0x08ad
     */
    const Keysymstoprightparens: number;

    /**
     * @default 0x08ae
     */
    const Keysymsbotrightparens: number;

    /**
     * @default 0x08af
     */
    const Keysymsleftmiddlecurlybrace: number;

    /**
     * @default 0x08b0
     */
    const Keysymsrightmiddlecurlybrace: number;

    /**
     * @default 0x08b1
     */
    const Keysymstopleftsummation: number;

    /**
     * @default 0x08b2
     */
    const Keysymsbotleftsummation: number;

    /**
     * @default 0x08b3
     */
    const Keysymstopvertsummationconnector: number;

    /**
     * @default 0x08b4
     */
    const Keysymsbotvertsummationconnector: number;

    /**
     * @default 0x08b5
     */
    const Keysymstoprightsummation: number;

    /**
     * @default 0x08b6
     */
    const Keysymsbotrightsummation: number;

    /**
     * @default 0x08b7
     */
    const Keysymsrightmiddlesummation: number;

    /**
     * @default 0x08bc
     */
    const Keysymslessthanequal: number;

    /**
     * @default 0x08bd
     */
    const Keysymsnotequal: number;

    /**
     * @default 0x08be
     */
    const Keysymsgreaterthanequal: number;

    /**
     * @default 0x08bf
     */
    const Keysymsintegral: number;

    /**
     * @default 0x08c0
     */
    const Keysymstherefore: number;

    /**
     * @default 0x08c1
     */
    const Keysymsvariation: number;

    /**
     * @default 0x08c2
     */
    const Keysymsinfinity: number;

    /**
     * @default 0x08c5
     */
    const Keysymsnabla: number;

    /**
     * @default 0x08c8
     */
    const Keysymsapproximate: number;

    /**
     * @default 0x08c9
     */
    const Keysymssimilarequal: number;

    /**
     * @default 0x08cd
     */
    const Keysymsifonlyif: number;

    /**
     * @default 0x08ce
     */
    const Keysymsimplies: number;

    /**
     * @default 0x08cf
     */
    const Keysymsidentical: number;

    /**
     * @default 0x08d6
     */
    const Keysymsradical: number;

    /**
     * @default 0x08da
     */
    const Keysymsincludedin: number;

    /**
     * @default 0x08db
     */
    const Keysymsincludes: number;

    /**
     * @default 0x08dc
     */
    const Keysymsintersection: number;

    /**
     * @default 0x08dd
     */
    const Keysymsunion: number;

    /**
     * @default 0x08de
     */
    const Keysymslogicaland: number;

    /**
     * @default 0x08df
     */
    const Keysymslogicalor: number;

    /**
     * @default 0x08ef
     */
    const Keysymspartialderivative: number;

    /**
     * @default 0x08f6
     */
    const Keysymsfunction: number;

    /**
     * @default 0x08fb
     */
    const Keysymsleftarrow: number;

    /**
     * @default 0x08fc
     */
    const Keysymsuparrow: number;

    /**
     * @default 0x08fd
     */
    const Keysymsrightarrow: number;

    /**
     * @default 0x08fe
     */
    const Keysymsdownarrow: number;

    /**
     * @default 0x09df
     */
    const Keysymsblank: number;

    /**
     * @default 0x09e0
     */
    const Keysymssoliddiamond: number;

    /**
     * @default 0x09e1
     */
    const Keysymscheckerboard: number;

    /**
     * @default 0x09e2
     */
    const Keysymsht: number;

    /**
     * @default 0x09e3
     */
    const Keysymsff: number;

    /**
     * @default 0x09e4
     */
    const Keysymscr: number;

    /**
     * @default 0x09e5
     */
    const Keysymslf: number;

    /**
     * @default 0x09e8
     */
    const Keysymsnl: number;

    /**
     * @default 0x09e9
     */
    const Keysymsvt: number;

    /**
     * @default 0x09ea
     */
    const Keysymslowrightcorner: number;

    /**
     * @default 0x09eb
     */
    const Keysymsuprightcorner: number;

    /**
     * @default 0x09ec
     */
    const Keysymsupleftcorner: number;

    /**
     * @default 0x09ed
     */
    const Keysymslowleftcorner: number;

    /**
     * @default 0x09ee
     */
    const Keysymscrossinglines: number;

    /**
     * @default 0x09ef
     */
    const Keysymshorizlinescan1: number;

    /**
     * @default 0x09f0
     */
    const Keysymshorizlinescan3: number;

    /**
     * @default 0x09f1
     */
    const Keysymshorizlinescan5: number;

    /**
     * @default 0x09f2
     */
    const Keysymshorizlinescan7: number;

    /**
     * @default 0x09f3
     */
    const Keysymshorizlinescan9: number;

    /**
     * @default 0x09f4
     */
    const Keysymsleftt: number;

    /**
     * @default 0x09f5
     */
    const Keysymsrightt: number;

    /**
     * @default 0x09f6
     */
    const Keysymsbott: number;

    /**
     * @default 0x09f7
     */
    const Keysymstopt: number;

    /**
     * @default 0x09f8
     */
    const Keysymsvertbar: number;

    /**
     * @default 0x0aa1
     */
    const Keysymsemspace: number;

    /**
     * @default 0x0aa2
     */
    const Keysymsenspace: number;

    /**
     * @default 0x0aa3
     */
    const Keysymsem3space: number;

    /**
     * @default 0x0aa4
     */
    const Keysymsem4space: number;

    /**
     * @default 0x0aa5
     */
    const Keysymsdigitspace: number;

    /**
     * @default 0x0aa6
     */
    const Keysymspunctspace: number;

    /**
     * @default 0x0aa7
     */
    const Keysymsthinspace: number;

    /**
     * @default 0x0aa8
     */
    const Keysymshairspace: number;

    /**
     * @default 0x0aa9
     */
    const Keysymsemdash: number;

    /**
     * @default 0x0aaa
     */
    const Keysymsendash: number;

    /**
     * @default 0x0aac
     */
    const Keysymssignifblank: number;

    /**
     * @default 0x0aae
     */
    const Keysymsellipsis: number;

    /**
     * @default 0x0aaf
     */
    const Keysymsdoubbaselinedot: number;

    /**
     * @default 0x0ab0
     */
    const Keysymsonethird: number;

    /**
     * @default 0x0ab1
     */
    const Keysymstwothirds: number;

    /**
     * @default 0x0ab2
     */
    const Keysymsonefifth: number;

    /**
     * @default 0x0ab3
     */
    const Keysymstwofifths: number;

    /**
     * @default 0x0ab4
     */
    const Keysymsthreefifths: number;

    /**
     * @default 0x0ab5
     */
    const Keysymsfourfifths: number;

    /**
     * @default 0x0ab6
     */
    const Keysymsonesixth: number;

    /**
     * @default 0x0ab7
     */
    const Keysymsfivesixths: number;

    /**
     * @default 0x0ab8
     */
    const Keysymscareof: number;

    /**
     * @default 0x0abb
     */
    const Keysymsfigdash: number;

    /**
     * @default 0x0abc
     */
    const Keysymsleftanglebracket: number;

    /**
     * @default 0x0abd
     */
    const Keysymsdecimalpoint: number;

    /**
     * @default 0x0abe
     */
    const Keysymsrightanglebracket: number;

    /**
     * @default 0x0abf
     */
    const Keysymsmarker: number;

    /**
     * @default 0x0ac3
     */
    const Keysymsoneeighth: number;

    /**
     * @default 0x0ac4
     */
    const Keysymsthreeeighths: number;

    /**
     * @default 0x0ac5
     */
    const Keysymsfiveeighths: number;

    /**
     * @default 0x0ac6
     */
    const Keysymsseveneighths: number;

    /**
     * @default 0x0ac9
     */
    const Keysymstrademark: number;

    /**
     * @default 0x0aca
     */
    const Keysymssignaturemark: number;

    /**
     * @default 0x0acb
     */
    const Keysymstrademarkincircle: number;

    /**
     * @default 0x0acc
     */
    const Keysymsleftopentriangle: number;

    /**
     * @default 0x0acd
     */
    const Keysymsrightopentriangle: number;

    /**
     * @default 0x0ace
     */
    const Keysymsemopencircle: number;

    /**
     * @default 0x0acf
     */
    const Keysymsemopenrectangle: number;

    /**
     * @default 0x0ad0
     */
    const Keysymsleftsinglequotemark: number;

    /**
     * @default 0x0ad1
     */
    const Keysymsrightsinglequotemark: number;

    /**
     * @default 0x0ad2
     */
    const Keysymsleftdoublequotemark: number;

    /**
     * @default 0x0ad3
     */
    const Keysymsrightdoublequotemark: number;

    /**
     * @default 0x0ad4
     */
    const Keysymsprescription: number;

    /**
     * @default 0x0ad6
     */
    const Keysymsminutes: number;

    /**
     * @default 0x0ad7
     */
    const Keysymsseconds: number;

    /**
     * @default 0x0ad9
     */
    const Keysymslatincross: number;

    /**
     * @default 0x0ada
     */
    const Keysymshexagram: number;

    /**
     * @default 0x0adb
     */
    const Keysymsfilledrectbullet: number;

    /**
     * @default 0x0adc
     */
    const Keysymsfilledlefttribullet: number;

    /**
     * @default 0x0add
     */
    const Keysymsfilledrighttribullet: number;

    /**
     * @default 0x0ade
     */
    const Keysymsemfilledcircle: number;

    /**
     * @default 0x0adf
     */
    const Keysymsemfilledrect: number;

    /**
     * @default 0x0ae0
     */
    const Keysymsenopencircbullet: number;

    /**
     * @default 0x0ae1
     */
    const Keysymsenopensquarebullet: number;

    /**
     * @default 0x0ae2
     */
    const Keysymsopenrectbullet: number;

    /**
     * @default 0x0ae3
     */
    const Keysymsopentribulletup: number;

    /**
     * @default 0x0ae4
     */
    const Keysymsopentribulletdown: number;

    /**
     * @default 0x0ae5
     */
    const Keysymsopenstar: number;

    /**
     * @default 0x0ae6
     */
    const Keysymsenfilledcircbullet: number;

    /**
     * @default 0x0ae7
     */
    const Keysymsenfilledsqbullet: number;

    /**
     * @default 0x0ae8
     */
    const Keysymsfilledtribulletup: number;

    /**
     * @default 0x0ae9
     */
    const Keysymsfilledtribulletdown: number;

    /**
     * @default 0x0aea
     */
    const Keysymsleftpointer: number;

    /**
     * @default 0x0aeb
     */
    const Keysymsrightpointer: number;

    /**
     * @default 0x0aec
     */
    const Keysymsclub: number;

    /**
     * @default 0x0aed
     */
    const Keysymsdiamond: number;

    /**
     * @default 0x0aee
     */
    const Keysymsheart: number;

    /**
     * @default 0x0af0
     */
    const Keysymsmaltesecross: number;

    /**
     * @default 0x0af1
     */
    const Keysymsdagger: number;

    /**
     * @default 0x0af2
     */
    const Keysymsdoubledagger: number;

    /**
     * @default 0x0af3
     */
    const Keysymscheckmark: number;

    /**
     * @default 0x0af4
     */
    const Keysymsballotcross: number;

    /**
     * @default 0x0af5
     */
    const Keysymsmusicalsharp: number;

    /**
     * @default 0x0af6
     */
    const Keysymsmusicalflat: number;

    /**
     * @default 0x0af7
     */
    const Keysymsmalesymbol: number;

    /**
     * @default 0x0af8
     */
    const Keysymsfemalesymbol: number;

    /**
     * @default 0x0af9
     */
    const Keysymstelephone: number;

    /**
     * @default 0x0afa
     */
    const Keysymstelephonerecorder: number;

    /**
     * @default 0x0afb
     */
    const Keysymsphonographcopyright: number;

    /**
     * @default 0x0afc
     */
    const Keysymscaret: number;

    /**
     * @default 0x0afd
     */
    const Keysymssinglelowquotemark: number;

    /**
     * @default 0x0afe
     */
    const Keysymsdoublelowquotemark: number;

    /**
     * @default 0x0aff
     */
    const Keysymscursor: number;

    /**
     * @default 0x0ba3
     */
    const Keysymsleftcaret: number;

    /**
     * @default 0x0ba6
     */
    const Keysymsrightcaret: number;

    /**
     * @default 0x0ba8
     */
    const Keysymsdowncaret: number;

    /**
     * @default 0x0ba9
     */
    const Keysymsupcaret: number;

    /**
     * @default 0x0bc0
     */
    const Keysymsoverbar: number;

    /**
     * @default 0x0bc2
     */
    const Keysymsdowntack: number;

    /**
     * @default 0x0bc3
     */
    const Keysymsupshoe: number;

    /**
     * @default 0x0bc4
     */
    const Keysymsdownstile: number;

    /**
     * @default 0x0bc6
     */
    const Keysymsunderbar: number;

    /**
     * @default 0x0bca
     */
    const Keysymsjot: number;

    /**
     * @default 0x0bcc
     */
    const Keysymsquad: number;

    /**
     * @default 0x0bce
     */
    const Keysymsuptack: number;

    /**
     * @default 0x0bcf
     */
    const Keysymscircle: number;

    /**
     * @default 0x0bd3
     */
    const Keysymsupstile: number;

    /**
     * @default 0x0bd6
     */
    const Keysymsdownshoe: number;

    /**
     * @default 0x0bd8
     */
    const Keysymsrightshoe: number;

    /**
     * @default 0x0bda
     */
    const Keysymsleftshoe: number;

    /**
     * @default 0x0bdc
     */
    const Keysymslefttack: number;

    /**
     * @default 0x0bfc
     */
    const Keysymsrighttack: number;

    /**
     * @default 0x0cdf
     */
    const Keysymshebrew_doublelowline: number;

    /**
     * @default 0x0ce0
     */
    const Keysymshebrew_aleph: number;

    /**
     * @default 0x0ce1
     */
    const Keysymshebrew_bet: number;

    /**
     * @default 0x0ce1
     */
    const Keysymshebrew_beth: number;

    /**
     * @default 0x0ce2
     */
    const Keysymshebrew_gimel: number;

    /**
     * @default 0x0ce2
     */
    const Keysymshebrew_gimmel: number;

    /**
     * @default 0x0ce3
     */
    const Keysymshebrew_dalet: number;

    /**
     * @default 0x0ce3
     */
    const Keysymshebrew_daleth: number;

    /**
     * @default 0x0ce4
     */
    const Keysymshebrew_he: number;

    /**
     * @default 0x0ce5
     */
    const Keysymshebrew_waw: number;

    /**
     * @default 0x0ce6
     */
    const Keysymshebrew_zain: number;

    /**
     * @default 0x0ce6
     */
    const Keysymshebrew_zayin: number;

    /**
     * @default 0x0ce7
     */
    const Keysymshebrew_chet: number;

    /**
     * @default 0x0ce7
     */
    const Keysymshebrew_het: number;

    /**
     * @default 0x0ce8
     */
    const Keysymshebrew_tet: number;

    /**
     * @default 0x0ce8
     */
    const Keysymshebrew_teth: number;

    /**
     * @default 0x0ce9
     */
    const Keysymshebrew_yod: number;

    /**
     * @default 0x0cea
     */
    const Keysymshebrew_finalkaph: number;

    /**
     * @default 0x0ceb
     */
    const Keysymshebrew_kaph: number;

    /**
     * @default 0x0cec
     */
    const Keysymshebrew_lamed: number;

    /**
     * @default 0x0ced
     */
    const Keysymshebrew_finalmem: number;

    /**
     * @default 0x0cee
     */
    const Keysymshebrew_mem: number;

    /**
     * @default 0x0cef
     */
    const Keysymshebrew_finalnun: number;

    /**
     * @default 0x0cf0
     */
    const Keysymshebrew_nun: number;

    /**
     * @default 0x0cf1
     */
    const Keysymshebrew_samech: number;

    /**
     * @default 0x0cf1
     */
    const Keysymshebrew_samekh: number;

    /**
     * @default 0x0cf2
     */
    const Keysymshebrew_ayin: number;

    /**
     * @default 0x0cf3
     */
    const Keysymshebrew_finalpe: number;

    /**
     * @default 0x0cf4
     */
    const Keysymshebrew_pe: number;

    /**
     * @default 0x0cf5
     */
    const Keysymshebrew_finalzade: number;

    /**
     * @default 0x0cf5
     */
    const Keysymshebrew_finalzadi: number;

    /**
     * @default 0x0cf6
     */
    const Keysymshebrew_zade: number;

    /**
     * @default 0x0cf6
     */
    const Keysymshebrew_zadi: number;

    /**
     * @default 0x0cf7
     */
    const Keysymshebrew_qoph: number;

    /**
     * @default 0x0cf7
     */
    const Keysymshebrew_kuf: number;

    /**
     * @default 0x0cf8
     */
    const Keysymshebrew_resh: number;

    /**
     * @default 0x0cf9
     */
    const Keysymshebrew_shin: number;

    /**
     * @default 0x0cfa
     */
    const Keysymshebrew_taw: number;

    /**
     * @default 0x0cfa
     */
    const Keysymshebrew_taf: number;

    /**
     * @default 0xff7e
     */
    const KeysymsHebrew_switch: number;

    /**
     * @default 0x0da1
     */
    const KeysymsThai_kokai: number;

    /**
     * @default 0x0da2
     */
    const KeysymsThai_khokhai: number;

    /**
     * @default 0x0da3
     */
    const KeysymsThai_khokhuat: number;

    /**
     * @default 0x0da4
     */
    const KeysymsThai_khokhwai: number;

    /**
     * @default 0x0da5
     */
    const KeysymsThai_khokhon: number;

    /**
     * @default 0x0da6
     */
    const KeysymsThai_khorakhang: number;

    /**
     * @default 0x0da7
     */
    const KeysymsThai_ngongu: number;

    /**
     * @default 0x0da8
     */
    const KeysymsThai_chochan: number;

    /**
     * @default 0x0da9
     */
    const KeysymsThai_choching: number;

    /**
     * @default 0x0daa
     */
    const KeysymsThai_chochang: number;

    /**
     * @default 0x0dab
     */
    const KeysymsThai_soso: number;

    /**
     * @default 0x0dac
     */
    const KeysymsThai_chochoe: number;

    /**
     * @default 0x0dad
     */
    const KeysymsThai_yoying: number;

    /**
     * @default 0x0dae
     */
    const KeysymsThai_dochada: number;

    /**
     * @default 0x0daf
     */
    const KeysymsThai_topatak: number;

    /**
     * @default 0x0db0
     */
    const KeysymsThai_thothan: number;

    /**
     * @default 0x0db1
     */
    const KeysymsThai_thonangmontho: number;

    /**
     * @default 0x0db2
     */
    const KeysymsThai_thophuthao: number;

    /**
     * @default 0x0db3
     */
    const KeysymsThai_nonen: number;

    /**
     * @default 0x0db4
     */
    const KeysymsThai_dodek: number;

    /**
     * @default 0x0db5
     */
    const KeysymsThai_totao: number;

    /**
     * @default 0x0db6
     */
    const KeysymsThai_thothung: number;

    /**
     * @default 0x0db7
     */
    const KeysymsThai_thothahan: number;

    /**
     * @default 0x0db8
     */
    const KeysymsThai_thothong: number;

    /**
     * @default 0x0db9
     */
    const KeysymsThai_nonu: number;

    /**
     * @default 0x0dba
     */
    const KeysymsThai_bobaimai: number;

    /**
     * @default 0x0dbb
     */
    const KeysymsThai_popla: number;

    /**
     * @default 0x0dbc
     */
    const KeysymsThai_phophung: number;

    /**
     * @default 0x0dbd
     */
    const KeysymsThai_fofa: number;

    /**
     * @default 0x0dbe
     */
    const KeysymsThai_phophan: number;

    /**
     * @default 0x0dbf
     */
    const KeysymsThai_fofan: number;

    /**
     * @default 0x0dc0
     */
    const KeysymsThai_phosamphao: number;

    /**
     * @default 0x0dc1
     */
    const KeysymsThai_moma: number;

    /**
     * @default 0x0dc2
     */
    const KeysymsThai_yoyak: number;

    /**
     * @default 0x0dc3
     */
    const KeysymsThai_rorua: number;

    /**
     * @default 0x0dc4
     */
    const KeysymsThai_ru: number;

    /**
     * @default 0x0dc5
     */
    const KeysymsThai_loling: number;

    /**
     * @default 0x0dc6
     */
    const KeysymsThai_lu: number;

    /**
     * @default 0x0dc7
     */
    const KeysymsThai_wowaen: number;

    /**
     * @default 0x0dc8
     */
    const KeysymsThai_sosala: number;

    /**
     * @default 0x0dc9
     */
    const KeysymsThai_sorusi: number;

    /**
     * @default 0x0dca
     */
    const KeysymsThai_sosua: number;

    /**
     * @default 0x0dcb
     */
    const KeysymsThai_hohip: number;

    /**
     * @default 0x0dcc
     */
    const KeysymsThai_lochula: number;

    /**
     * @default 0x0dcd
     */
    const KeysymsThai_oang: number;

    /**
     * @default 0x0dce
     */
    const KeysymsThai_honokhuk: number;

    /**
     * @default 0x0dcf
     */
    const KeysymsThai_paiyannoi: number;

    /**
     * @default 0x0dd0
     */
    const KeysymsThai_saraa: number;

    /**
     * @default 0x0dd1
     */
    const KeysymsThai_maihanakat: number;

    /**
     * @default 0x0dd2
     */
    const KeysymsThai_saraaa: number;

    /**
     * @default 0x0dd3
     */
    const KeysymsThai_saraam: number;

    /**
     * @default 0x0dd4
     */
    const KeysymsThai_sarai: number;

    /**
     * @default 0x0dd5
     */
    const KeysymsThai_saraii: number;

    /**
     * @default 0x0dd6
     */
    const KeysymsThai_saraue: number;

    /**
     * @default 0x0dd7
     */
    const KeysymsThai_sarauee: number;

    /**
     * @default 0x0dd8
     */
    const KeysymsThai_sarau: number;

    /**
     * @default 0x0dd9
     */
    const KeysymsThai_sarauu: number;

    /**
     * @default 0x0dda
     */
    const KeysymsThai_phinthu: number;

    /**
     * @default 0x0dde
     */
    const KeysymsThai_maihanakat_maitho: number;

    /**
     * @default 0x0ddf
     */
    const KeysymsThai_baht: number;

    /**
     * @default 0x0de0
     */
    const KeysymsThai_sarae: number;

    /**
     * @default 0x0de1
     */
    const KeysymsThai_saraae: number;

    /**
     * @default 0x0de2
     */
    const KeysymsThai_sarao: number;

    /**
     * @default 0x0de3
     */
    const KeysymsThai_saraaimaimuan: number;

    /**
     * @default 0x0de4
     */
    const KeysymsThai_saraaimaimalai: number;

    /**
     * @default 0x0de5
     */
    const KeysymsThai_lakkhangyao: number;

    /**
     * @default 0x0de6
     */
    const KeysymsThai_maiyamok: number;

    /**
     * @default 0x0de7
     */
    const KeysymsThai_maitaikhu: number;

    /**
     * @default 0x0de8
     */
    const KeysymsThai_maiek: number;

    /**
     * @default 0x0de9
     */
    const KeysymsThai_maitho: number;

    /**
     * @default 0x0dea
     */
    const KeysymsThai_maitri: number;

    /**
     * @default 0x0deb
     */
    const KeysymsThai_maichattawa: number;

    /**
     * @default 0x0dec
     */
    const KeysymsThai_thanthakhat: number;

    /**
     * @default 0x0ded
     */
    const KeysymsThai_nikhahit: number;

    /**
     * @default 0x0df0
     */
    const KeysymsThai_leksun: number;

    /**
     * @default 0x0df1
     */
    const KeysymsThai_leknung: number;

    /**
     * @default 0x0df2
     */
    const KeysymsThai_leksong: number;

    /**
     * @default 0x0df3
     */
    const KeysymsThai_leksam: number;

    /**
     * @default 0x0df4
     */
    const KeysymsThai_leksi: number;

    /**
     * @default 0x0df5
     */
    const KeysymsThai_lekha: number;

    /**
     * @default 0x0df6
     */
    const KeysymsThai_lekhok: number;

    /**
     * @default 0x0df7
     */
    const KeysymsThai_lekchet: number;

    /**
     * @default 0x0df8
     */
    const KeysymsThai_lekpaet: number;

    /**
     * @default 0x0df9
     */
    const KeysymsThai_lekkao: number;

    /**
     * @default 0xff31
     */
    const KeysymsHangul: number;

    /**
     * @default 0xff32
     */
    const KeysymsHangul_Start: number;

    /**
     * @default 0xff33
     */
    const KeysymsHangul_End: number;

    /**
     * @default 0xff34
     */
    const KeysymsHangul_Hanja: number;

    /**
     * @default 0xff35
     */
    const KeysymsHangul_Jamo: number;

    /**
     * @default 0xff36
     */
    const KeysymsHangul_Romaja: number;

    /**
     * @default 0xff37
     */
    const KeysymsHangul_Codeinput: number;

    /**
     * @default 0xff38
     */
    const KeysymsHangul_Jeonja: number;

    /**
     * @default 0xff39
     */
    const KeysymsHangul_Banja: number;

    /**
     * @default 0xff3a
     */
    const KeysymsHangul_PreHanja: number;

    /**
     * @default 0xff3b
     */
    const KeysymsHangul_PostHanja: number;

    /**
     * @default 0xff3c
     */
    const KeysymsHangul_SingleCandidate: number;

    /**
     * @default 0xff3d
     */
    const KeysymsHangul_MultipleCandidate: number;

    /**
     * @default 0xff3e
     */
    const KeysymsHangul_PreviousCandidate: number;

    /**
     * @default 0xff3f
     */
    const KeysymsHangul_Special: number;

    /**
     * @default 0xff7e
     */
    const KeysymsHangul_switch: number;

    /**
     * @default 0x0ea1
     */
    const KeysymsHangul_Kiyeog: number;

    /**
     * @default 0x0ea2
     */
    const KeysymsHangul_SsangKiyeog: number;

    /**
     * @default 0x0ea3
     */
    const KeysymsHangul_KiyeogSios: number;

    /**
     * @default 0x0ea4
     */
    const KeysymsHangul_Nieun: number;

    /**
     * @default 0x0ea5
     */
    const KeysymsHangul_NieunJieuj: number;

    /**
     * @default 0x0ea6
     */
    const KeysymsHangul_NieunHieuh: number;

    /**
     * @default 0x0ea7
     */
    const KeysymsHangul_Dikeud: number;

    /**
     * @default 0x0ea8
     */
    const KeysymsHangul_SsangDikeud: number;

    /**
     * @default 0x0ea9
     */
    const KeysymsHangul_Rieul: number;

    /**
     * @default 0x0eaa
     */
    const KeysymsHangul_RieulKiyeog: number;

    /**
     * @default 0x0eab
     */
    const KeysymsHangul_RieulMieum: number;

    /**
     * @default 0x0eac
     */
    const KeysymsHangul_RieulPieub: number;

    /**
     * @default 0x0ead
     */
    const KeysymsHangul_RieulSios: number;

    /**
     * @default 0x0eae
     */
    const KeysymsHangul_RieulTieut: number;

    /**
     * @default 0x0eaf
     */
    const KeysymsHangul_RieulPhieuf: number;

    /**
     * @default 0x0eb0
     */
    const KeysymsHangul_RieulHieuh: number;

    /**
     * @default 0x0eb1
     */
    const KeysymsHangul_Mieum: number;

    /**
     * @default 0x0eb2
     */
    const KeysymsHangul_Pieub: number;

    /**
     * @default 0x0eb3
     */
    const KeysymsHangul_SsangPieub: number;

    /**
     * @default 0x0eb4
     */
    const KeysymsHangul_PieubSios: number;

    /**
     * @default 0x0eb5
     */
    const KeysymsHangul_Sios: number;

    /**
     * @default 0x0eb6
     */
    const KeysymsHangul_SsangSios: number;

    /**
     * @default 0x0eb7
     */
    const KeysymsHangul_Ieung: number;

    /**
     * @default 0x0eb8
     */
    const KeysymsHangul_Jieuj: number;

    /**
     * @default 0x0eb9
     */
    const KeysymsHangul_SsangJieuj: number;

    /**
     * @default 0x0eba
     */
    const KeysymsHangul_Cieuc: number;

    /**
     * @default 0x0ebb
     */
    const KeysymsHangul_Khieuq: number;

    /**
     * @default 0x0ebc
     */
    const KeysymsHangul_Tieut: number;

    /**
     * @default 0x0ebd
     */
    const KeysymsHangul_Phieuf: number;

    /**
     * @default 0x0ebe
     */
    const KeysymsHangul_Hieuh: number;

    /**
     * @default 0x0ebf
     */
    const KeysymsHangul_A: number;

    /**
     * @default 0x0ec0
     */
    const KeysymsHangul_AE: number;

    /**
     * @default 0x0ec1
     */
    const KeysymsHangul_YA: number;

    /**
     * @default 0x0ec2
     */
    const KeysymsHangul_YAE: number;

    /**
     * @default 0x0ec3
     */
    const KeysymsHangul_EO: number;

    /**
     * @default 0x0ec4
     */
    const KeysymsHangul_E: number;

    /**
     * @default 0x0ec5
     */
    const KeysymsHangul_YEO: number;

    /**
     * @default 0x0ec6
     */
    const KeysymsHangul_YE: number;

    /**
     * @default 0x0ec7
     */
    const KeysymsHangul_O: number;

    /**
     * @default 0x0ec8
     */
    const KeysymsHangul_WA: number;

    /**
     * @default 0x0ec9
     */
    const KeysymsHangul_WAE: number;

    /**
     * @default 0x0eca
     */
    const KeysymsHangul_OE: number;

    /**
     * @default 0x0ecb
     */
    const KeysymsHangul_YO: number;

    /**
     * @default 0x0ecc
     */
    const KeysymsHangul_U: number;

    /**
     * @default 0x0ecd
     */
    const KeysymsHangul_WEO: number;

    /**
     * @default 0x0ece
     */
    const KeysymsHangul_WE: number;

    /**
     * @default 0x0ecf
     */
    const KeysymsHangul_WI: number;

    /**
     * @default 0x0ed0
     */
    const KeysymsHangul_YU: number;

    /**
     * @default 0x0ed1
     */
    const KeysymsHangul_EU: number;

    /**
     * @default 0x0ed2
     */
    const KeysymsHangul_YI: number;

    /**
     * @default 0x0ed3
     */
    const KeysymsHangul_I: number;

    /**
     * @default 0x0ed4
     */
    const KeysymsHangul_J_Kiyeog: number;

    /**
     * @default 0x0ed5
     */
    const KeysymsHangul_J_SsangKiyeog: number;

    /**
     * @default 0x0ed6
     */
    const KeysymsHangul_J_KiyeogSios: number;

    /**
     * @default 0x0ed7
     */
    const KeysymsHangul_J_Nieun: number;

    /**
     * @default 0x0ed8
     */
    const KeysymsHangul_J_NieunJieuj: number;

    /**
     * @default 0x0ed9
     */
    const KeysymsHangul_J_NieunHieuh: number;

    /**
     * @default 0x0eda
     */
    const KeysymsHangul_J_Dikeud: number;

    /**
     * @default 0x0edb
     */
    const KeysymsHangul_J_Rieul: number;

    /**
     * @default 0x0edc
     */
    const KeysymsHangul_J_RieulKiyeog: number;

    /**
     * @default 0x0edd
     */
    const KeysymsHangul_J_RieulMieum: number;

    /**
     * @default 0x0ede
     */
    const KeysymsHangul_J_RieulPieub: number;

    /**
     * @default 0x0edf
     */
    const KeysymsHangul_J_RieulSios: number;

    /**
     * @default 0x0ee0
     */
    const KeysymsHangul_J_RieulTieut: number;

    /**
     * @default 0x0ee1
     */
    const KeysymsHangul_J_RieulPhieuf: number;

    /**
     * @default 0x0ee2
     */
    const KeysymsHangul_J_RieulHieuh: number;

    /**
     * @default 0x0ee3
     */
    const KeysymsHangul_J_Mieum: number;

    /**
     * @default 0x0ee4
     */
    const KeysymsHangul_J_Pieub: number;

    /**
     * @default 0x0ee5
     */
    const KeysymsHangul_J_PieubSios: number;

    /**
     * @default 0x0ee6
     */
    const KeysymsHangul_J_Sios: number;

    /**
     * @default 0x0ee7
     */
    const KeysymsHangul_J_SsangSios: number;

    /**
     * @default 0x0ee8
     */
    const KeysymsHangul_J_Ieung: number;

    /**
     * @default 0x0ee9
     */
    const KeysymsHangul_J_Jieuj: number;

    /**
     * @default 0x0eea
     */
    const KeysymsHangul_J_Cieuc: number;

    /**
     * @default 0x0eeb
     */
    const KeysymsHangul_J_Khieuq: number;

    /**
     * @default 0x0eec
     */
    const KeysymsHangul_J_Tieut: number;

    /**
     * @default 0x0eed
     */
    const KeysymsHangul_J_Phieuf: number;

    /**
     * @default 0x0eee
     */
    const KeysymsHangul_J_Hieuh: number;

    /**
     * @default 0x0eef
     */
    const KeysymsHangul_RieulYeorinHieuh: number;

    /**
     * @default 0x0ef0
     */
    const KeysymsHangul_SunkyeongeumMieum: number;

    /**
     * @default 0x0ef1
     */
    const KeysymsHangul_SunkyeongeumPieub: number;

    /**
     * @default 0x0ef2
     */
    const KeysymsHangul_PanSios: number;

    /**
     * @default 0x0ef3
     */
    const KeysymsHangul_KkogjiDalrinIeung: number;

    /**
     * @default 0x0ef4
     */
    const KeysymsHangul_SunkyeongeumPhieuf: number;

    /**
     * @default 0x0ef5
     */
    const KeysymsHangul_YeorinHieuh: number;

    /**
     * @default 0x0ef6
     */
    const KeysymsHangul_AraeA: number;

    /**
     * @default 0x0ef7
     */
    const KeysymsHangul_AraeAE: number;

    /**
     * @default 0x0ef8
     */
    const KeysymsHangul_J_PanSios: number;

    /**
     * @default 0x0ef9
     */
    const KeysymsHangul_J_KkogjiDalrinIeung: number;

    /**
     * @default 0x0efa
     */
    const KeysymsHangul_J_YeorinHieuh: number;

    /**
     * @default 0x0eff
     */
    const KeysymsKorean_Won: number;

    /**
     * @default 0x1000587
     */
    const KeysymsArmenian_ligature_ew: number;

    /**
     * @default 0x1000589
     */
    const KeysymsArmenian_full_stop: number;

    /**
     * @default 0x1000589
     */
    const KeysymsArmenian_verjaket: number;

    /**
     * @default 0x100055d
     */
    const KeysymsArmenian_separation_mark: number;

    /**
     * @default 0x100055d
     */
    const KeysymsArmenian_but: number;

    /**
     * @default 0x100058a
     */
    const KeysymsArmenian_hyphen: number;

    /**
     * @default 0x100058a
     */
    const KeysymsArmenian_yentamna: number;

    /**
     * @default 0x100055c
     */
    const KeysymsArmenian_exclam: number;

    /**
     * @default 0x100055c
     */
    const KeysymsArmenian_amanak: number;

    /**
     * @default 0x100055b
     */
    const KeysymsArmenian_accent: number;

    /**
     * @default 0x100055b
     */
    const KeysymsArmenian_shesht: number;

    /**
     * @default 0x100055e
     */
    const KeysymsArmenian_question: number;

    /**
     * @default 0x100055e
     */
    const KeysymsArmenian_paruyk: number;

    /**
     * @default 0x1000531
     */
    const KeysymsArmenian_AYB: number;

    /**
     * @default 0x1000561
     */
    const KeysymsArmenian_ayb: number;

    /**
     * @default 0x1000532
     */
    const KeysymsArmenian_BEN: number;

    /**
     * @default 0x1000562
     */
    const KeysymsArmenian_ben: number;

    /**
     * @default 0x1000533
     */
    const KeysymsArmenian_GIM: number;

    /**
     * @default 0x1000563
     */
    const KeysymsArmenian_gim: number;

    /**
     * @default 0x1000534
     */
    const KeysymsArmenian_DA: number;

    /**
     * @default 0x1000564
     */
    const KeysymsArmenian_da: number;

    /**
     * @default 0x1000535
     */
    const KeysymsArmenian_YECH: number;

    /**
     * @default 0x1000565
     */
    const KeysymsArmenian_yech: number;

    /**
     * @default 0x1000536
     */
    const KeysymsArmenian_ZA: number;

    /**
     * @default 0x1000566
     */
    const KeysymsArmenian_za: number;

    /**
     * @default 0x1000537
     */
    const KeysymsArmenian_E: number;

    /**
     * @default 0x1000567
     */
    const KeysymsArmenian_e: number;

    /**
     * @default 0x1000538
     */
    const KeysymsArmenian_AT: number;

    /**
     * @default 0x1000568
     */
    const KeysymsArmenian_at: number;

    /**
     * @default 0x1000539
     */
    const KeysymsArmenian_TO: number;

    /**
     * @default 0x1000569
     */
    const KeysymsArmenian_to: number;

    /**
     * @default 0x100053a
     */
    const KeysymsArmenian_ZHE: number;

    /**
     * @default 0x100056a
     */
    const KeysymsArmenian_zhe: number;

    /**
     * @default 0x100053b
     */
    const KeysymsArmenian_INI: number;

    /**
     * @default 0x100056b
     */
    const KeysymsArmenian_ini: number;

    /**
     * @default 0x100053c
     */
    const KeysymsArmenian_LYUN: number;

    /**
     * @default 0x100056c
     */
    const KeysymsArmenian_lyun: number;

    /**
     * @default 0x100053d
     */
    const KeysymsArmenian_KHE: number;

    /**
     * @default 0x100056d
     */
    const KeysymsArmenian_khe: number;

    /**
     * @default 0x100053e
     */
    const KeysymsArmenian_TSA: number;

    /**
     * @default 0x100056e
     */
    const KeysymsArmenian_tsa: number;

    /**
     * @default 0x100053f
     */
    const KeysymsArmenian_KEN: number;

    /**
     * @default 0x100056f
     */
    const KeysymsArmenian_ken: number;

    /**
     * @default 0x1000540
     */
    const KeysymsArmenian_HO: number;

    /**
     * @default 0x1000570
     */
    const KeysymsArmenian_ho: number;

    /**
     * @default 0x1000541
     */
    const KeysymsArmenian_DZA: number;

    /**
     * @default 0x1000571
     */
    const KeysymsArmenian_dza: number;

    /**
     * @default 0x1000542
     */
    const KeysymsArmenian_GHAT: number;

    /**
     * @default 0x1000572
     */
    const KeysymsArmenian_ghat: number;

    /**
     * @default 0x1000543
     */
    const KeysymsArmenian_TCHE: number;

    /**
     * @default 0x1000573
     */
    const KeysymsArmenian_tche: number;

    /**
     * @default 0x1000544
     */
    const KeysymsArmenian_MEN: number;

    /**
     * @default 0x1000574
     */
    const KeysymsArmenian_men: number;

    /**
     * @default 0x1000545
     */
    const KeysymsArmenian_HI: number;

    /**
     * @default 0x1000575
     */
    const KeysymsArmenian_hi: number;

    /**
     * @default 0x1000546
     */
    const KeysymsArmenian_NU: number;

    /**
     * @default 0x1000576
     */
    const KeysymsArmenian_nu: number;

    /**
     * @default 0x1000547
     */
    const KeysymsArmenian_SHA: number;

    /**
     * @default 0x1000577
     */
    const KeysymsArmenian_sha: number;

    /**
     * @default 0x1000548
     */
    const KeysymsArmenian_VO: number;

    /**
     * @default 0x1000578
     */
    const KeysymsArmenian_vo: number;

    /**
     * @default 0x1000549
     */
    const KeysymsArmenian_CHA: number;

    /**
     * @default 0x1000579
     */
    const KeysymsArmenian_cha: number;

    /**
     * @default 0x100054a
     */
    const KeysymsArmenian_PE: number;

    /**
     * @default 0x100057a
     */
    const KeysymsArmenian_pe: number;

    /**
     * @default 0x100054b
     */
    const KeysymsArmenian_JE: number;

    /**
     * @default 0x100057b
     */
    const KeysymsArmenian_je: number;

    /**
     * @default 0x100054c
     */
    const KeysymsArmenian_RA: number;

    /**
     * @default 0x100057c
     */
    const KeysymsArmenian_ra: number;

    /**
     * @default 0x100054d
     */
    const KeysymsArmenian_SE: number;

    /**
     * @default 0x100057d
     */
    const KeysymsArmenian_se: number;

    /**
     * @default 0x100054e
     */
    const KeysymsArmenian_VEV: number;

    /**
     * @default 0x100057e
     */
    const KeysymsArmenian_vev: number;

    /**
     * @default 0x100054f
     */
    const KeysymsArmenian_TYUN: number;

    /**
     * @default 0x100057f
     */
    const KeysymsArmenian_tyun: number;

    /**
     * @default 0x1000550
     */
    const KeysymsArmenian_RE: number;

    /**
     * @default 0x1000580
     */
    const KeysymsArmenian_re: number;

    /**
     * @default 0x1000551
     */
    const KeysymsArmenian_TSO: number;

    /**
     * @default 0x1000581
     */
    const KeysymsArmenian_tso: number;

    /**
     * @default 0x1000552
     */
    const KeysymsArmenian_VYUN: number;

    /**
     * @default 0x1000582
     */
    const KeysymsArmenian_vyun: number;

    /**
     * @default 0x1000553
     */
    const KeysymsArmenian_PYUR: number;

    /**
     * @default 0x1000583
     */
    const KeysymsArmenian_pyur: number;

    /**
     * @default 0x1000554
     */
    const KeysymsArmenian_KE: number;

    /**
     * @default 0x1000584
     */
    const KeysymsArmenian_ke: number;

    /**
     * @default 0x1000555
     */
    const KeysymsArmenian_O: number;

    /**
     * @default 0x1000585
     */
    const KeysymsArmenian_o: number;

    /**
     * @default 0x1000556
     */
    const KeysymsArmenian_FE: number;

    /**
     * @default 0x1000586
     */
    const KeysymsArmenian_fe: number;

    /**
     * @default 0x100055a
     */
    const KeysymsArmenian_apostrophe: number;

    /**
     * @default 0x10010d0
     */
    const KeysymsGeorgian_an: number;

    /**
     * @default 0x10010d1
     */
    const KeysymsGeorgian_ban: number;

    /**
     * @default 0x10010d2
     */
    const KeysymsGeorgian_gan: number;

    /**
     * @default 0x10010d3
     */
    const KeysymsGeorgian_don: number;

    /**
     * @default 0x10010d4
     */
    const KeysymsGeorgian_en: number;

    /**
     * @default 0x10010d5
     */
    const KeysymsGeorgian_vin: number;

    /**
     * @default 0x10010d6
     */
    const KeysymsGeorgian_zen: number;

    /**
     * @default 0x10010d7
     */
    const KeysymsGeorgian_tan: number;

    /**
     * @default 0x10010d8
     */
    const KeysymsGeorgian_in: number;

    /**
     * @default 0x10010d9
     */
    const KeysymsGeorgian_kan: number;

    /**
     * @default 0x10010da
     */
    const KeysymsGeorgian_las: number;

    /**
     * @default 0x10010db
     */
    const KeysymsGeorgian_man: number;

    /**
     * @default 0x10010dc
     */
    const KeysymsGeorgian_nar: number;

    /**
     * @default 0x10010dd
     */
    const KeysymsGeorgian_on: number;

    /**
     * @default 0x10010de
     */
    const KeysymsGeorgian_par: number;

    /**
     * @default 0x10010df
     */
    const KeysymsGeorgian_zhar: number;

    /**
     * @default 0x10010e0
     */
    const KeysymsGeorgian_rae: number;

    /**
     * @default 0x10010e1
     */
    const KeysymsGeorgian_san: number;

    /**
     * @default 0x10010e2
     */
    const KeysymsGeorgian_tar: number;

    /**
     * @default 0x10010e3
     */
    const KeysymsGeorgian_un: number;

    /**
     * @default 0x10010e4
     */
    const KeysymsGeorgian_phar: number;

    /**
     * @default 0x10010e5
     */
    const KeysymsGeorgian_khar: number;

    /**
     * @default 0x10010e6
     */
    const KeysymsGeorgian_ghan: number;

    /**
     * @default 0x10010e7
     */
    const KeysymsGeorgian_qar: number;

    /**
     * @default 0x10010e8
     */
    const KeysymsGeorgian_shin: number;

    /**
     * @default 0x10010e9
     */
    const KeysymsGeorgian_chin: number;

    /**
     * @default 0x10010ea
     */
    const KeysymsGeorgian_can: number;

    /**
     * @default 0x10010eb
     */
    const KeysymsGeorgian_jil: number;

    /**
     * @default 0x10010ec
     */
    const KeysymsGeorgian_cil: number;

    /**
     * @default 0x10010ed
     */
    const KeysymsGeorgian_char: number;

    /**
     * @default 0x10010ee
     */
    const KeysymsGeorgian_xan: number;

    /**
     * @default 0x10010ef
     */
    const KeysymsGeorgian_jhan: number;

    /**
     * @default 0x10010f0
     */
    const KeysymsGeorgian_hae: number;

    /**
     * @default 0x10010f1
     */
    const KeysymsGeorgian_he: number;

    /**
     * @default 0x10010f2
     */
    const KeysymsGeorgian_hie: number;

    /**
     * @default 0x10010f3
     */
    const KeysymsGeorgian_we: number;

    /**
     * @default 0x10010f4
     */
    const KeysymsGeorgian_har: number;

    /**
     * @default 0x10010f5
     */
    const KeysymsGeorgian_hoe: number;

    /**
     * @default 0x10010f6
     */
    const KeysymsGeorgian_fi: number;

    /**
     * @default 0x1001e8a
     */
    const KeysymsXabovedot: number;

    /**
     * @default 0x100012c
     */
    const KeysymsIbreve: number;

    /**
     * @default 0x10001b5
     */
    const KeysymsZstroke: number;

    /**
     * @default 0x10001e6
     */
    const KeysymsGcaron: number;

    /**
     * @default 0x10001d1
     */
    const KeysymsOcaron: number;

    /**
     * @default 0x100019f
     */
    const KeysymsObarred: number;

    /**
     * @default 0x1001e8b
     */
    const Keysymsxabovedot: number;

    /**
     * @default 0x100012d
     */
    const Keysymsibreve: number;

    /**
     * @default 0x10001b6
     */
    const Keysymszstroke: number;

    /**
     * @default 0x10001e7
     */
    const Keysymsgcaron: number;

    /**
     * @default 0x10001d2
     */
    const Keysymsocaron: number;

    /**
     * @default 0x1000275
     */
    const Keysymsobarred: number;

    /**
     * @default 0x100018f
     */
    const KeysymsSCHWA: number;

    /**
     * @default 0x1000259
     */
    const Keysymsschwa: number;

    /**
     * @default 0x1001e36
     */
    const KeysymsLbelowdot: number;

    /**
     * @default 0x1001e37
     */
    const Keysymslbelowdot: number;

    /**
     * @default 0x1001ea0
     */
    const KeysymsAbelowdot: number;

    /**
     * @default 0x1001ea1
     */
    const Keysymsabelowdot: number;

    /**
     * @default 0x1001ea2
     */
    const KeysymsAhook: number;

    /**
     * @default 0x1001ea3
     */
    const Keysymsahook: number;

    /**
     * @default 0x1001ea4
     */
    const KeysymsAcircumflexacute: number;

    /**
     * @default 0x1001ea5
     */
    const Keysymsacircumflexacute: number;

    /**
     * @default 0x1001ea6
     */
    const KeysymsAcircumflexgrave: number;

    /**
     * @default 0x1001ea7
     */
    const Keysymsacircumflexgrave: number;

    /**
     * @default 0x1001ea8
     */
    const KeysymsAcircumflexhook: number;

    /**
     * @default 0x1001ea9
     */
    const Keysymsacircumflexhook: number;

    /**
     * @default 0x1001eaa
     */
    const KeysymsAcircumflextilde: number;

    /**
     * @default 0x1001eab
     */
    const Keysymsacircumflextilde: number;

    /**
     * @default 0x1001eac
     */
    const KeysymsAcircumflexbelowdot: number;

    /**
     * @default 0x1001ead
     */
    const Keysymsacircumflexbelowdot: number;

    /**
     * @default 0x1001eae
     */
    const KeysymsAbreveacute: number;

    /**
     * @default 0x1001eaf
     */
    const Keysymsabreveacute: number;

    /**
     * @default 0x1001eb0
     */
    const KeysymsAbrevegrave: number;

    /**
     * @default 0x1001eb1
     */
    const Keysymsabrevegrave: number;

    /**
     * @default 0x1001eb2
     */
    const KeysymsAbrevehook: number;

    /**
     * @default 0x1001eb3
     */
    const Keysymsabrevehook: number;

    /**
     * @default 0x1001eb4
     */
    const KeysymsAbrevetilde: number;

    /**
     * @default 0x1001eb5
     */
    const Keysymsabrevetilde: number;

    /**
     * @default 0x1001eb6
     */
    const KeysymsAbrevebelowdot: number;

    /**
     * @default 0x1001eb7
     */
    const Keysymsabrevebelowdot: number;

    /**
     * @default 0x1001eb8
     */
    const KeysymsEbelowdot: number;

    /**
     * @default 0x1001eb9
     */
    const Keysymsebelowdot: number;

    /**
     * @default 0x1001eba
     */
    const KeysymsEhook: number;

    /**
     * @default 0x1001ebb
     */
    const Keysymsehook: number;

    /**
     * @default 0x1001ebc
     */
    const KeysymsEtilde: number;

    /**
     * @default 0x1001ebd
     */
    const Keysymsetilde: number;

    /**
     * @default 0x1001ebe
     */
    const KeysymsEcircumflexacute: number;

    /**
     * @default 0x1001ebf
     */
    const Keysymsecircumflexacute: number;

    /**
     * @default 0x1001ec0
     */
    const KeysymsEcircumflexgrave: number;

    /**
     * @default 0x1001ec1
     */
    const Keysymsecircumflexgrave: number;

    /**
     * @default 0x1001ec2
     */
    const KeysymsEcircumflexhook: number;

    /**
     * @default 0x1001ec3
     */
    const Keysymsecircumflexhook: number;

    /**
     * @default 0x1001ec4
     */
    const KeysymsEcircumflextilde: number;

    /**
     * @default 0x1001ec5
     */
    const Keysymsecircumflextilde: number;

    /**
     * @default 0x1001ec6
     */
    const KeysymsEcircumflexbelowdot: number;

    /**
     * @default 0x1001ec7
     */
    const Keysymsecircumflexbelowdot: number;

    /**
     * @default 0x1001ec8
     */
    const KeysymsIhook: number;

    /**
     * @default 0x1001ec9
     */
    const Keysymsihook: number;

    /**
     * @default 0x1001eca
     */
    const KeysymsIbelowdot: number;

    /**
     * @default 0x1001ecb
     */
    const Keysymsibelowdot: number;

    /**
     * @default 0x1001ecc
     */
    const KeysymsObelowdot: number;

    /**
     * @default 0x1001ecd
     */
    const Keysymsobelowdot: number;

    /**
     * @default 0x1001ece
     */
    const KeysymsOhook: number;

    /**
     * @default 0x1001ecf
     */
    const Keysymsohook: number;

    /**
     * @default 0x1001ed0
     */
    const KeysymsOcircumflexacute: number;

    /**
     * @default 0x1001ed1
     */
    const Keysymsocircumflexacute: number;

    /**
     * @default 0x1001ed2
     */
    const KeysymsOcircumflexgrave: number;

    /**
     * @default 0x1001ed3
     */
    const Keysymsocircumflexgrave: number;

    /**
     * @default 0x1001ed4
     */
    const KeysymsOcircumflexhook: number;

    /**
     * @default 0x1001ed5
     */
    const Keysymsocircumflexhook: number;

    /**
     * @default 0x1001ed6
     */
    const KeysymsOcircumflextilde: number;

    /**
     * @default 0x1001ed7
     */
    const Keysymsocircumflextilde: number;

    /**
     * @default 0x1001ed8
     */
    const KeysymsOcircumflexbelowdot: number;

    /**
     * @default 0x1001ed9
     */
    const Keysymsocircumflexbelowdot: number;

    /**
     * @default 0x1001eda
     */
    const KeysymsOhornacute: number;

    /**
     * @default 0x1001edb
     */
    const Keysymsohornacute: number;

    /**
     * @default 0x1001edc
     */
    const KeysymsOhorngrave: number;

    /**
     * @default 0x1001edd
     */
    const Keysymsohorngrave: number;

    /**
     * @default 0x1001ede
     */
    const KeysymsOhornhook: number;

    /**
     * @default 0x1001edf
     */
    const Keysymsohornhook: number;

    /**
     * @default 0x1001ee0
     */
    const KeysymsOhorntilde: number;

    /**
     * @default 0x1001ee1
     */
    const Keysymsohorntilde: number;

    /**
     * @default 0x1001ee2
     */
    const KeysymsOhornbelowdot: number;

    /**
     * @default 0x1001ee3
     */
    const Keysymsohornbelowdot: number;

    /**
     * @default 0x1001ee4
     */
    const KeysymsUbelowdot: number;

    /**
     * @default 0x1001ee5
     */
    const Keysymsubelowdot: number;

    /**
     * @default 0x1001ee6
     */
    const KeysymsUhook: number;

    /**
     * @default 0x1001ee7
     */
    const Keysymsuhook: number;

    /**
     * @default 0x1001ee8
     */
    const KeysymsUhornacute: number;

    /**
     * @default 0x1001ee9
     */
    const Keysymsuhornacute: number;

    /**
     * @default 0x1001eea
     */
    const KeysymsUhorngrave: number;

    /**
     * @default 0x1001eeb
     */
    const Keysymsuhorngrave: number;

    /**
     * @default 0x1001eec
     */
    const KeysymsUhornhook: number;

    /**
     * @default 0x1001eed
     */
    const Keysymsuhornhook: number;

    /**
     * @default 0x1001eee
     */
    const KeysymsUhorntilde: number;

    /**
     * @default 0x1001eef
     */
    const Keysymsuhorntilde: number;

    /**
     * @default 0x1001ef0
     */
    const KeysymsUhornbelowdot: number;

    /**
     * @default 0x1001ef1
     */
    const Keysymsuhornbelowdot: number;

    /**
     * @default 0x1001ef4
     */
    const KeysymsYbelowdot: number;

    /**
     * @default 0x1001ef5
     */
    const Keysymsybelowdot: number;

    /**
     * @default 0x1001ef6
     */
    const KeysymsYhook: number;

    /**
     * @default 0x1001ef7
     */
    const Keysymsyhook: number;

    /**
     * @default 0x1001ef8
     */
    const KeysymsYtilde: number;

    /**
     * @default 0x1001ef9
     */
    const Keysymsytilde: number;

    /**
     * @default 0x10001a0
     */
    const KeysymsOhorn: number;

    /**
     * @default 0x10001a1
     */
    const Keysymsohorn: number;

    /**
     * @default 0x10001af
     */
    const KeysymsUhorn: number;

    /**
     * @default 0x10001b0
     */
    const Keysymsuhorn: number;

    /**
     * @default 0x10020a0
     */
    const KeysymsEcuSign: number;

    /**
     * @default 0x10020a1
     */
    const KeysymsColonSign: number;

    /**
     * @default 0x10020a2
     */
    const KeysymsCruzeiroSign: number;

    /**
     * @default 0x10020a3
     */
    const KeysymsFFrancSign: number;

    /**
     * @default 0x10020a4
     */
    const KeysymsLiraSign: number;

    /**
     * @default 0x10020a5
     */
    const KeysymsMillSign: number;

    /**
     * @default 0x10020a6
     */
    const KeysymsNairaSign: number;

    /**
     * @default 0x10020a7
     */
    const KeysymsPesetaSign: number;

    /**
     * @default 0x10020a8
     */
    const KeysymsRupeeSign: number;

    /**
     * @default 0x10020a9
     */
    const KeysymsWonSign: number;

    /**
     * @default 0x10020aa
     */
    const KeysymsNewSheqelSign: number;

    /**
     * @default 0x10020ab
     */
    const KeysymsDongSign: number;

    /**
     * @default 0x20ac
     */
    const KeysymsEuroSign: number;

    /**
     * @default 0x1002070
     */
    const Keysymszerosuperior: number;

    /**
     * @default 0x1002074
     */
    const Keysymsfoursuperior: number;

    /**
     * @default 0x1002075
     */
    const Keysymsfivesuperior: number;

    /**
     * @default 0x1002076
     */
    const Keysymssixsuperior: number;

    /**
     * @default 0x1002077
     */
    const Keysymssevensuperior: number;

    /**
     * @default 0x1002078
     */
    const Keysymseightsuperior: number;

    /**
     * @default 0x1002079
     */
    const Keysymsninesuperior: number;

    /**
     * @default 0x1002080
     */
    const Keysymszerosubscript: number;

    /**
     * @default 0x1002081
     */
    const Keysymsonesubscript: number;

    /**
     * @default 0x1002082
     */
    const Keysymstwosubscript: number;

    /**
     * @default 0x1002083
     */
    const Keysymsthreesubscript: number;

    /**
     * @default 0x1002084
     */
    const Keysymsfoursubscript: number;

    /**
     * @default 0x1002085
     */
    const Keysymsfivesubscript: number;

    /**
     * @default 0x1002086
     */
    const Keysymssixsubscript: number;

    /**
     * @default 0x1002087
     */
    const Keysymssevensubscript: number;

    /**
     * @default 0x1002088
     */
    const Keysymseightsubscript: number;

    /**
     * @default 0x1002089
     */
    const Keysymsninesubscript: number;

    /**
     * @default 0x1002202
     */
    const Keysymspartdifferential: number;

    /**
     * @default 0x1002205
     */
    const Keysymsemptyset: number;

    /**
     * @default 0x1002208
     */
    const Keysymselementof: number;

    /**
     * @default 0x1002209
     */
    const Keysymsnotelementof: number;

    /**
     * @default 0x100220B
     */
    const Keysymscontainsas: number;

    /**
     * @default 0x100221A
     */
    const Keysymssquareroot: number;

    /**
     * @default 0x100221B
     */
    const Keysymscuberoot: number;

    /**
     * @default 0x100221C
     */
    const Keysymsfourthroot: number;

    /**
     * @default 0x100222C
     */
    const Keysymsdintegral: number;

    /**
     * @default 0x100222D
     */
    const Keysymstintegral: number;

    /**
     * @default 0x1002235
     */
    const Keysymsbecause: number;

    /**
     * @default 0x1002248
     */
    const Keysymsapproxeq: number;

    /**
     * @default 0x1002247
     */
    const Keysymsnotapproxeq: number;

    /**
     * @default 0x1002262
     */
    const Keysymsnotidentical: number;

    /**
     * @default 0x1002263
     */
    const Keysymsstricteq: number;

    /**
     * @default 0xfff1
     */
    const Keysymsbraille_dot_1: number;

    /**
     * @default 0xfff2
     */
    const Keysymsbraille_dot_2: number;

    /**
     * @default 0xfff3
     */
    const Keysymsbraille_dot_3: number;

    /**
     * @default 0xfff4
     */
    const Keysymsbraille_dot_4: number;

    /**
     * @default 0xfff5
     */
    const Keysymsbraille_dot_5: number;

    /**
     * @default 0xfff6
     */
    const Keysymsbraille_dot_6: number;

    /**
     * @default 0xfff7
     */
    const Keysymsbraille_dot_7: number;

    /**
     * @default 0xfff8
     */
    const Keysymsbraille_dot_8: number;

    /**
     * @default 0xfff9
     */
    const Keysymsbraille_dot_9: number;

    /**
     * @default 0xfffa
     */
    const Keysymsbraille_dot_10: number;

    /**
     * @default 0x1002800
     */
    const Keysymsbraille_blank: number;

    /**
     * @default 0x1002801
     */
    const Keysymsbraille_dots_1: number;

    /**
     * @default 0x1002802
     */
    const Keysymsbraille_dots_2: number;

    /**
     * @default 0x1002803
     */
    const Keysymsbraille_dots_12: number;

    /**
     * @default 0x1002804
     */
    const Keysymsbraille_dots_3: number;

    /**
     * @default 0x1002805
     */
    const Keysymsbraille_dots_13: number;

    /**
     * @default 0x1002806
     */
    const Keysymsbraille_dots_23: number;

    /**
     * @default 0x1002807
     */
    const Keysymsbraille_dots_123: number;

    /**
     * @default 0x1002808
     */
    const Keysymsbraille_dots_4: number;

    /**
     * @default 0x1002809
     */
    const Keysymsbraille_dots_14: number;

    /**
     * @default 0x100280a
     */
    const Keysymsbraille_dots_24: number;

    /**
     * @default 0x100280b
     */
    const Keysymsbraille_dots_124: number;

    /**
     * @default 0x100280c
     */
    const Keysymsbraille_dots_34: number;

    /**
     * @default 0x100280d
     */
    const Keysymsbraille_dots_134: number;

    /**
     * @default 0x100280e
     */
    const Keysymsbraille_dots_234: number;

    /**
     * @default 0x100280f
     */
    const Keysymsbraille_dots_1234: number;

    /**
     * @default 0x1002810
     */
    const Keysymsbraille_dots_5: number;

    /**
     * @default 0x1002811
     */
    const Keysymsbraille_dots_15: number;

    /**
     * @default 0x1002812
     */
    const Keysymsbraille_dots_25: number;

    /**
     * @default 0x1002813
     */
    const Keysymsbraille_dots_125: number;

    /**
     * @default 0x1002814
     */
    const Keysymsbraille_dots_35: number;

    /**
     * @default 0x1002815
     */
    const Keysymsbraille_dots_135: number;

    /**
     * @default 0x1002816
     */
    const Keysymsbraille_dots_235: number;

    /**
     * @default 0x1002817
     */
    const Keysymsbraille_dots_1235: number;

    /**
     * @default 0x1002818
     */
    const Keysymsbraille_dots_45: number;

    /**
     * @default 0x1002819
     */
    const Keysymsbraille_dots_145: number;

    /**
     * @default 0x100281a
     */
    const Keysymsbraille_dots_245: number;

    /**
     * @default 0x100281b
     */
    const Keysymsbraille_dots_1245: number;

    /**
     * @default 0x100281c
     */
    const Keysymsbraille_dots_345: number;

    /**
     * @default 0x100281d
     */
    const Keysymsbraille_dots_1345: number;

    /**
     * @default 0x100281e
     */
    const Keysymsbraille_dots_2345: number;

    /**
     * @default 0x100281f
     */
    const Keysymsbraille_dots_12345: number;

    /**
     * @default 0x1002820
     */
    const Keysymsbraille_dots_6: number;

    /**
     * @default 0x1002821
     */
    const Keysymsbraille_dots_16: number;

    /**
     * @default 0x1002822
     */
    const Keysymsbraille_dots_26: number;

    /**
     * @default 0x1002823
     */
    const Keysymsbraille_dots_126: number;

    /**
     * @default 0x1002824
     */
    const Keysymsbraille_dots_36: number;

    /**
     * @default 0x1002825
     */
    const Keysymsbraille_dots_136: number;

    /**
     * @default 0x1002826
     */
    const Keysymsbraille_dots_236: number;

    /**
     * @default 0x1002827
     */
    const Keysymsbraille_dots_1236: number;

    /**
     * @default 0x1002828
     */
    const Keysymsbraille_dots_46: number;

    /**
     * @default 0x1002829
     */
    const Keysymsbraille_dots_146: number;

    /**
     * @default 0x100282a
     */
    const Keysymsbraille_dots_246: number;

    /**
     * @default 0x100282b
     */
    const Keysymsbraille_dots_1246: number;

    /**
     * @default 0x100282c
     */
    const Keysymsbraille_dots_346: number;

    /**
     * @default 0x100282d
     */
    const Keysymsbraille_dots_1346: number;

    /**
     * @default 0x100282e
     */
    const Keysymsbraille_dots_2346: number;

    /**
     * @default 0x100282f
     */
    const Keysymsbraille_dots_12346: number;

    /**
     * @default 0x1002830
     */
    const Keysymsbraille_dots_56: number;

    /**
     * @default 0x1002831
     */
    const Keysymsbraille_dots_156: number;

    /**
     * @default 0x1002832
     */
    const Keysymsbraille_dots_256: number;

    /**
     * @default 0x1002833
     */
    const Keysymsbraille_dots_1256: number;

    /**
     * @default 0x1002834
     */
    const Keysymsbraille_dots_356: number;

    /**
     * @default 0x1002835
     */
    const Keysymsbraille_dots_1356: number;

    /**
     * @default 0x1002836
     */
    const Keysymsbraille_dots_2356: number;

    /**
     * @default 0x1002837
     */
    const Keysymsbraille_dots_12356: number;

    /**
     * @default 0x1002838
     */
    const Keysymsbraille_dots_456: number;

    /**
     * @default 0x1002839
     */
    const Keysymsbraille_dots_1456: number;

    /**
     * @default 0x100283a
     */
    const Keysymsbraille_dots_2456: number;

    /**
     * @default 0x100283b
     */
    const Keysymsbraille_dots_12456: number;

    /**
     * @default 0x100283c
     */
    const Keysymsbraille_dots_3456: number;

    /**
     * @default 0x100283d
     */
    const Keysymsbraille_dots_13456: number;

    /**
     * @default 0x100283e
     */
    const Keysymsbraille_dots_23456: number;

    /**
     * @default 0x100283f
     */
    const Keysymsbraille_dots_123456: number;

    /**
     * @default 0x1002840
     */
    const Keysymsbraille_dots_7: number;

    /**
     * @default 0x1002841
     */
    const Keysymsbraille_dots_17: number;

    /**
     * @default 0x1002842
     */
    const Keysymsbraille_dots_27: number;

    /**
     * @default 0x1002843
     */
    const Keysymsbraille_dots_127: number;

    /**
     * @default 0x1002844
     */
    const Keysymsbraille_dots_37: number;

    /**
     * @default 0x1002845
     */
    const Keysymsbraille_dots_137: number;

    /**
     * @default 0x1002846
     */
    const Keysymsbraille_dots_237: number;

    /**
     * @default 0x1002847
     */
    const Keysymsbraille_dots_1237: number;

    /**
     * @default 0x1002848
     */
    const Keysymsbraille_dots_47: number;

    /**
     * @default 0x1002849
     */
    const Keysymsbraille_dots_147: number;

    /**
     * @default 0x100284a
     */
    const Keysymsbraille_dots_247: number;

    /**
     * @default 0x100284b
     */
    const Keysymsbraille_dots_1247: number;

    /**
     * @default 0x100284c
     */
    const Keysymsbraille_dots_347: number;

    /**
     * @default 0x100284d
     */
    const Keysymsbraille_dots_1347: number;

    /**
     * @default 0x100284e
     */
    const Keysymsbraille_dots_2347: number;

    /**
     * @default 0x100284f
     */
    const Keysymsbraille_dots_12347: number;

    /**
     * @default 0x1002850
     */
    const Keysymsbraille_dots_57: number;

    /**
     * @default 0x1002851
     */
    const Keysymsbraille_dots_157: number;

    /**
     * @default 0x1002852
     */
    const Keysymsbraille_dots_257: number;

    /**
     * @default 0x1002853
     */
    const Keysymsbraille_dots_1257: number;

    /**
     * @default 0x1002854
     */
    const Keysymsbraille_dots_357: number;

    /**
     * @default 0x1002855
     */
    const Keysymsbraille_dots_1357: number;

    /**
     * @default 0x1002856
     */
    const Keysymsbraille_dots_2357: number;

    /**
     * @default 0x1002857
     */
    const Keysymsbraille_dots_12357: number;

    /**
     * @default 0x1002858
     */
    const Keysymsbraille_dots_457: number;

    /**
     * @default 0x1002859
     */
    const Keysymsbraille_dots_1457: number;

    /**
     * @default 0x100285a
     */
    const Keysymsbraille_dots_2457: number;

    /**
     * @default 0x100285b
     */
    const Keysymsbraille_dots_12457: number;

    /**
     * @default 0x100285c
     */
    const Keysymsbraille_dots_3457: number;

    /**
     * @default 0x100285d
     */
    const Keysymsbraille_dots_13457: number;

    /**
     * @default 0x100285e
     */
    const Keysymsbraille_dots_23457: number;

    /**
     * @default 0x100285f
     */
    const Keysymsbraille_dots_123457: number;

    /**
     * @default 0x1002860
     */
    const Keysymsbraille_dots_67: number;

    /**
     * @default 0x1002861
     */
    const Keysymsbraille_dots_167: number;

    /**
     * @default 0x1002862
     */
    const Keysymsbraille_dots_267: number;

    /**
     * @default 0x1002863
     */
    const Keysymsbraille_dots_1267: number;

    /**
     * @default 0x1002864
     */
    const Keysymsbraille_dots_367: number;

    /**
     * @default 0x1002865
     */
    const Keysymsbraille_dots_1367: number;

    /**
     * @default 0x1002866
     */
    const Keysymsbraille_dots_2367: number;

    /**
     * @default 0x1002867
     */
    const Keysymsbraille_dots_12367: number;

    /**
     * @default 0x1002868
     */
    const Keysymsbraille_dots_467: number;

    /**
     * @default 0x1002869
     */
    const Keysymsbraille_dots_1467: number;

    /**
     * @default 0x100286a
     */
    const Keysymsbraille_dots_2467: number;

    /**
     * @default 0x100286b
     */
    const Keysymsbraille_dots_12467: number;

    /**
     * @default 0x100286c
     */
    const Keysymsbraille_dots_3467: number;

    /**
     * @default 0x100286d
     */
    const Keysymsbraille_dots_13467: number;

    /**
     * @default 0x100286e
     */
    const Keysymsbraille_dots_23467: number;

    /**
     * @default 0x100286f
     */
    const Keysymsbraille_dots_123467: number;

    /**
     * @default 0x1002870
     */
    const Keysymsbraille_dots_567: number;

    /**
     * @default 0x1002871
     */
    const Keysymsbraille_dots_1567: number;

    /**
     * @default 0x1002872
     */
    const Keysymsbraille_dots_2567: number;

    /**
     * @default 0x1002873
     */
    const Keysymsbraille_dots_12567: number;

    /**
     * @default 0x1002874
     */
    const Keysymsbraille_dots_3567: number;

    /**
     * @default 0x1002875
     */
    const Keysymsbraille_dots_13567: number;

    /**
     * @default 0x1002876
     */
    const Keysymsbraille_dots_23567: number;

    /**
     * @default 0x1002877
     */
    const Keysymsbraille_dots_123567: number;

    /**
     * @default 0x1002878
     */
    const Keysymsbraille_dots_4567: number;

    /**
     * @default 0x1002879
     */
    const Keysymsbraille_dots_14567: number;

    /**
     * @default 0x100287a
     */
    const Keysymsbraille_dots_24567: number;

    /**
     * @default 0x100287b
     */
    const Keysymsbraille_dots_124567: number;

    /**
     * @default 0x100287c
     */
    const Keysymsbraille_dots_34567: number;

    /**
     * @default 0x100287d
     */
    const Keysymsbraille_dots_134567: number;

    /**
     * @default 0x100287e
     */
    const Keysymsbraille_dots_234567: number;

    /**
     * @default 0x100287f
     */
    const Keysymsbraille_dots_1234567: number;

    /**
     * @default 0x1002880
     */
    const Keysymsbraille_dots_8: number;

    /**
     * @default 0x1002881
     */
    const Keysymsbraille_dots_18: number;

    /**
     * @default 0x1002882
     */
    const Keysymsbraille_dots_28: number;

    /**
     * @default 0x1002883
     */
    const Keysymsbraille_dots_128: number;

    /**
     * @default 0x1002884
     */
    const Keysymsbraille_dots_38: number;

    /**
     * @default 0x1002885
     */
    const Keysymsbraille_dots_138: number;

    /**
     * @default 0x1002886
     */
    const Keysymsbraille_dots_238: number;

    /**
     * @default 0x1002887
     */
    const Keysymsbraille_dots_1238: number;

    /**
     * @default 0x1002888
     */
    const Keysymsbraille_dots_48: number;

    /**
     * @default 0x1002889
     */
    const Keysymsbraille_dots_148: number;

    /**
     * @default 0x100288a
     */
    const Keysymsbraille_dots_248: number;

    /**
     * @default 0x100288b
     */
    const Keysymsbraille_dots_1248: number;

    /**
     * @default 0x100288c
     */
    const Keysymsbraille_dots_348: number;

    /**
     * @default 0x100288d
     */
    const Keysymsbraille_dots_1348: number;

    /**
     * @default 0x100288e
     */
    const Keysymsbraille_dots_2348: number;

    /**
     * @default 0x100288f
     */
    const Keysymsbraille_dots_12348: number;

    /**
     * @default 0x1002890
     */
    const Keysymsbraille_dots_58: number;

    /**
     * @default 0x1002891
     */
    const Keysymsbraille_dots_158: number;

    /**
     * @default 0x1002892
     */
    const Keysymsbraille_dots_258: number;

    /**
     * @default 0x1002893
     */
    const Keysymsbraille_dots_1258: number;

    /**
     * @default 0x1002894
     */
    const Keysymsbraille_dots_358: number;

    /**
     * @default 0x1002895
     */
    const Keysymsbraille_dots_1358: number;

    /**
     * @default 0x1002896
     */
    const Keysymsbraille_dots_2358: number;

    /**
     * @default 0x1002897
     */
    const Keysymsbraille_dots_12358: number;

    /**
     * @default 0x1002898
     */
    const Keysymsbraille_dots_458: number;

    /**
     * @default 0x1002899
     */
    const Keysymsbraille_dots_1458: number;

    /**
     * @default 0x100289a
     */
    const Keysymsbraille_dots_2458: number;

    /**
     * @default 0x100289b
     */
    const Keysymsbraille_dots_12458: number;

    /**
     * @default 0x100289c
     */
    const Keysymsbraille_dots_3458: number;

    /**
     * @default 0x100289d
     */
    const Keysymsbraille_dots_13458: number;

    /**
     * @default 0x100289e
     */
    const Keysymsbraille_dots_23458: number;

    /**
     * @default 0x100289f
     */
    const Keysymsbraille_dots_123458: number;

    /**
     * @default 0x10028a0
     */
    const Keysymsbraille_dots_68: number;

    /**
     * @default 0x10028a1
     */
    const Keysymsbraille_dots_168: number;

    /**
     * @default 0x10028a2
     */
    const Keysymsbraille_dots_268: number;

    /**
     * @default 0x10028a3
     */
    const Keysymsbraille_dots_1268: number;

    /**
     * @default 0x10028a4
     */
    const Keysymsbraille_dots_368: number;

    /**
     * @default 0x10028a5
     */
    const Keysymsbraille_dots_1368: number;

    /**
     * @default 0x10028a6
     */
    const Keysymsbraille_dots_2368: number;

    /**
     * @default 0x10028a7
     */
    const Keysymsbraille_dots_12368: number;

    /**
     * @default 0x10028a8
     */
    const Keysymsbraille_dots_468: number;

    /**
     * @default 0x10028a9
     */
    const Keysymsbraille_dots_1468: number;

    /**
     * @default 0x10028aa
     */
    const Keysymsbraille_dots_2468: number;

    /**
     * @default 0x10028ab
     */
    const Keysymsbraille_dots_12468: number;

    /**
     * @default 0x10028ac
     */
    const Keysymsbraille_dots_3468: number;

    /**
     * @default 0x10028ad
     */
    const Keysymsbraille_dots_13468: number;

    /**
     * @default 0x10028ae
     */
    const Keysymsbraille_dots_23468: number;

    /**
     * @default 0x10028af
     */
    const Keysymsbraille_dots_123468: number;

    /**
     * @default 0x10028b0
     */
    const Keysymsbraille_dots_568: number;

    /**
     * @default 0x10028b1
     */
    const Keysymsbraille_dots_1568: number;

    /**
     * @default 0x10028b2
     */
    const Keysymsbraille_dots_2568: number;

    /**
     * @default 0x10028b3
     */
    const Keysymsbraille_dots_12568: number;

    /**
     * @default 0x10028b4
     */
    const Keysymsbraille_dots_3568: number;

    /**
     * @default 0x10028b5
     */
    const Keysymsbraille_dots_13568: number;

    /**
     * @default 0x10028b6
     */
    const Keysymsbraille_dots_23568: number;

    /**
     * @default 0x10028b7
     */
    const Keysymsbraille_dots_123568: number;

    /**
     * @default 0x10028b8
     */
    const Keysymsbraille_dots_4568: number;

    /**
     * @default 0x10028b9
     */
    const Keysymsbraille_dots_14568: number;

    /**
     * @default 0x10028ba
     */
    const Keysymsbraille_dots_24568: number;

    /**
     * @default 0x10028bb
     */
    const Keysymsbraille_dots_124568: number;

    /**
     * @default 0x10028bc
     */
    const Keysymsbraille_dots_34568: number;

    /**
     * @default 0x10028bd
     */
    const Keysymsbraille_dots_134568: number;

    /**
     * @default 0x10028be
     */
    const Keysymsbraille_dots_234568: number;

    /**
     * @default 0x10028bf
     */
    const Keysymsbraille_dots_1234568: number;

    /**
     * @default 0x10028c0
     */
    const Keysymsbraille_dots_78: number;

    /**
     * @default 0x10028c1
     */
    const Keysymsbraille_dots_178: number;

    /**
     * @default 0x10028c2
     */
    const Keysymsbraille_dots_278: number;

    /**
     * @default 0x10028c3
     */
    const Keysymsbraille_dots_1278: number;

    /**
     * @default 0x10028c4
     */
    const Keysymsbraille_dots_378: number;

    /**
     * @default 0x10028c5
     */
    const Keysymsbraille_dots_1378: number;

    /**
     * @default 0x10028c6
     */
    const Keysymsbraille_dots_2378: number;

    /**
     * @default 0x10028c7
     */
    const Keysymsbraille_dots_12378: number;

    /**
     * @default 0x10028c8
     */
    const Keysymsbraille_dots_478: number;

    /**
     * @default 0x10028c9
     */
    const Keysymsbraille_dots_1478: number;

    /**
     * @default 0x10028ca
     */
    const Keysymsbraille_dots_2478: number;

    /**
     * @default 0x10028cb
     */
    const Keysymsbraille_dots_12478: number;

    /**
     * @default 0x10028cc
     */
    const Keysymsbraille_dots_3478: number;

    /**
     * @default 0x10028cd
     */
    const Keysymsbraille_dots_13478: number;

    /**
     * @default 0x10028ce
     */
    const Keysymsbraille_dots_23478: number;

    /**
     * @default 0x10028cf
     */
    const Keysymsbraille_dots_123478: number;

    /**
     * @default 0x10028d0
     */
    const Keysymsbraille_dots_578: number;

    /**
     * @default 0x10028d1
     */
    const Keysymsbraille_dots_1578: number;

    /**
     * @default 0x10028d2
     */
    const Keysymsbraille_dots_2578: number;

    /**
     * @default 0x10028d3
     */
    const Keysymsbraille_dots_12578: number;

    /**
     * @default 0x10028d4
     */
    const Keysymsbraille_dots_3578: number;

    /**
     * @default 0x10028d5
     */
    const Keysymsbraille_dots_13578: number;

    /**
     * @default 0x10028d6
     */
    const Keysymsbraille_dots_23578: number;

    /**
     * @default 0x10028d7
     */
    const Keysymsbraille_dots_123578: number;

    /**
     * @default 0x10028d8
     */
    const Keysymsbraille_dots_4578: number;

    /**
     * @default 0x10028d9
     */
    const Keysymsbraille_dots_14578: number;

    /**
     * @default 0x10028da
     */
    const Keysymsbraille_dots_24578: number;

    /**
     * @default 0x10028db
     */
    const Keysymsbraille_dots_124578: number;

    /**
     * @default 0x10028dc
     */
    const Keysymsbraille_dots_34578: number;

    /**
     * @default 0x10028dd
     */
    const Keysymsbraille_dots_134578: number;

    /**
     * @default 0x10028de
     */
    const Keysymsbraille_dots_234578: number;

    /**
     * @default 0x10028df
     */
    const Keysymsbraille_dots_1234578: number;

    /**
     * @default 0x10028e0
     */
    const Keysymsbraille_dots_678: number;

    /**
     * @default 0x10028e1
     */
    const Keysymsbraille_dots_1678: number;

    /**
     * @default 0x10028e2
     */
    const Keysymsbraille_dots_2678: number;

    /**
     * @default 0x10028e3
     */
    const Keysymsbraille_dots_12678: number;

    /**
     * @default 0x10028e4
     */
    const Keysymsbraille_dots_3678: number;

    /**
     * @default 0x10028e5
     */
    const Keysymsbraille_dots_13678: number;

    /**
     * @default 0x10028e6
     */
    const Keysymsbraille_dots_23678: number;

    /**
     * @default 0x10028e7
     */
    const Keysymsbraille_dots_123678: number;

    /**
     * @default 0x10028e8
     */
    const Keysymsbraille_dots_4678: number;

    /**
     * @default 0x10028e9
     */
    const Keysymsbraille_dots_14678: number;

    /**
     * @default 0x10028ea
     */
    const Keysymsbraille_dots_24678: number;

    /**
     * @default 0x10028eb
     */
    const Keysymsbraille_dots_124678: number;

    /**
     * @default 0x10028ec
     */
    const Keysymsbraille_dots_34678: number;

    /**
     * @default 0x10028ed
     */
    const Keysymsbraille_dots_134678: number;

    /**
     * @default 0x10028ee
     */
    const Keysymsbraille_dots_234678: number;

    /**
     * @default 0x10028ef
     */
    const Keysymsbraille_dots_1234678: number;

    /**
     * @default 0x10028f0
     */
    const Keysymsbraille_dots_5678: number;

    /**
     * @default 0x10028f1
     */
    const Keysymsbraille_dots_15678: number;

    /**
     * @default 0x10028f2
     */
    const Keysymsbraille_dots_25678: number;

    /**
     * @default 0x10028f3
     */
    const Keysymsbraille_dots_125678: number;

    /**
     * @default 0x10028f4
     */
    const Keysymsbraille_dots_35678: number;

    /**
     * @default 0x10028f5
     */
    const Keysymsbraille_dots_135678: number;

    /**
     * @default 0x10028f6
     */
    const Keysymsbraille_dots_235678: number;

    /**
     * @default 0x10028f7
     */
    const Keysymsbraille_dots_1235678: number;

    /**
     * @default 0x10028f8
     */
    const Keysymsbraille_dots_45678: number;

    /**
     * @default 0x10028f9
     */
    const Keysymsbraille_dots_145678: number;

    /**
     * @default 0x10028fa
     */
    const Keysymsbraille_dots_245678: number;

    /**
     * @default 0x10028fb
     */
    const Keysymsbraille_dots_1245678: number;

    /**
     * @default 0x10028fc
     */
    const Keysymsbraille_dots_345678: number;

    /**
     * @default 0x10028fd
     */
    const Keysymsbraille_dots_1345678: number;

    /**
     * @default 0x10028fe
     */
    const Keysymsbraille_dots_2345678: number;

    /**
     * @default 0x10028ff
     */
    const Keysymsbraille_dots_12345678: number;

    /**
     * @default 0x1000d82
     */
    const KeysymsSinh_ng: number;

    /**
     * @default 0x1000d83
     */
    const KeysymsSinh_h2: number;

    /**
     * @default 0x1000d85
     */
    const KeysymsSinh_a: number;

    /**
     * @default 0x1000d86
     */
    const KeysymsSinh_aa: number;

    /**
     * @default 0x1000d87
     */
    const KeysymsSinh_ae: number;

    /**
     * @default 0x1000d88
     */
    const KeysymsSinh_aee: number;

    /**
     * @default 0x1000d89
     */
    const KeysymsSinh_i: number;

    /**
     * @default 0x1000d8a
     */
    const KeysymsSinh_ii: number;

    /**
     * @default 0x1000d8b
     */
    const KeysymsSinh_u: number;

    /**
     * @default 0x1000d8c
     */
    const KeysymsSinh_uu: number;

    /**
     * @default 0x1000d8d
     */
    const KeysymsSinh_ri: number;

    /**
     * @default 0x1000d8e
     */
    const KeysymsSinh_rii: number;

    /**
     * @default 0x1000d8f
     */
    const KeysymsSinh_lu: number;

    /**
     * @default 0x1000d90
     */
    const KeysymsSinh_luu: number;

    /**
     * @default 0x1000d91
     */
    const KeysymsSinh_e: number;

    /**
     * @default 0x1000d92
     */
    const KeysymsSinh_ee: number;

    /**
     * @default 0x1000d93
     */
    const KeysymsSinh_ai: number;

    /**
     * @default 0x1000d94
     */
    const KeysymsSinh_o: number;

    /**
     * @default 0x1000d95
     */
    const KeysymsSinh_oo: number;

    /**
     * @default 0x1000d96
     */
    const KeysymsSinh_au: number;

    /**
     * @default 0x1000d9a
     */
    const KeysymsSinh_ka: number;

    /**
     * @default 0x1000d9b
     */
    const KeysymsSinh_kha: number;

    /**
     * @default 0x1000d9c
     */
    const KeysymsSinh_ga: number;

    /**
     * @default 0x1000d9d
     */
    const KeysymsSinh_gha: number;

    /**
     * @default 0x1000d9e
     */
    const KeysymsSinh_ng2: number;

    /**
     * @default 0x1000d9f
     */
    const KeysymsSinh_nga: number;

    /**
     * @default 0x1000da0
     */
    const KeysymsSinh_ca: number;

    /**
     * @default 0x1000da1
     */
    const KeysymsSinh_cha: number;

    /**
     * @default 0x1000da2
     */
    const KeysymsSinh_ja: number;

    /**
     * @default 0x1000da3
     */
    const KeysymsSinh_jha: number;

    /**
     * @default 0x1000da4
     */
    const KeysymsSinh_nya: number;

    /**
     * @default 0x1000da5
     */
    const KeysymsSinh_jnya: number;

    /**
     * @default 0x1000da6
     */
    const KeysymsSinh_nja: number;

    /**
     * @default 0x1000da7
     */
    const KeysymsSinh_tta: number;

    /**
     * @default 0x1000da8
     */
    const KeysymsSinh_ttha: number;

    /**
     * @default 0x1000da9
     */
    const KeysymsSinh_dda: number;

    /**
     * @default 0x1000daa
     */
    const KeysymsSinh_ddha: number;

    /**
     * @default 0x1000dab
     */
    const KeysymsSinh_nna: number;

    /**
     * @default 0x1000dac
     */
    const KeysymsSinh_ndda: number;

    /**
     * @default 0x1000dad
     */
    const KeysymsSinh_tha: number;

    /**
     * @default 0x1000dae
     */
    const KeysymsSinh_thha: number;

    /**
     * @default 0x1000daf
     */
    const KeysymsSinh_dha: number;

    /**
     * @default 0x1000db0
     */
    const KeysymsSinh_dhha: number;

    /**
     * @default 0x1000db1
     */
    const KeysymsSinh_na: number;

    /**
     * @default 0x1000db3
     */
    const KeysymsSinh_ndha: number;

    /**
     * @default 0x1000db4
     */
    const KeysymsSinh_pa: number;

    /**
     * @default 0x1000db5
     */
    const KeysymsSinh_pha: number;

    /**
     * @default 0x1000db6
     */
    const KeysymsSinh_ba: number;

    /**
     * @default 0x1000db7
     */
    const KeysymsSinh_bha: number;

    /**
     * @default 0x1000db8
     */
    const KeysymsSinh_ma: number;

    /**
     * @default 0x1000db9
     */
    const KeysymsSinh_mba: number;

    /**
     * @default 0x1000dba
     */
    const KeysymsSinh_ya: number;

    /**
     * @default 0x1000dbb
     */
    const KeysymsSinh_ra: number;

    /**
     * @default 0x1000dbd
     */
    const KeysymsSinh_la: number;

    /**
     * @default 0x1000dc0
     */
    const KeysymsSinh_va: number;

    /**
     * @default 0x1000dc1
     */
    const KeysymsSinh_sha: number;

    /**
     * @default 0x1000dc2
     */
    const KeysymsSinh_ssha: number;

    /**
     * @default 0x1000dc3
     */
    const KeysymsSinh_sa: number;

    /**
     * @default 0x1000dc4
     */
    const KeysymsSinh_ha: number;

    /**
     * @default 0x1000dc5
     */
    const KeysymsSinh_lla: number;

    /**
     * @default 0x1000dc6
     */
    const KeysymsSinh_fa: number;

    /**
     * @default 0x1000dca
     */
    const KeysymsSinh_al: number;

    /**
     * @default 0x1000dcf
     */
    const KeysymsSinh_aa2: number;

    /**
     * @default 0x1000dd0
     */
    const KeysymsSinh_ae2: number;

    /**
     * @default 0x1000dd1
     */
    const KeysymsSinh_aee2: number;

    /**
     * @default 0x1000dd2
     */
    const KeysymsSinh_i2: number;

    /**
     * @default 0x1000dd3
     */
    const KeysymsSinh_ii2: number;

    /**
     * @default 0x1000dd4
     */
    const KeysymsSinh_u2: number;

    /**
     * @default 0x1000dd6
     */
    const KeysymsSinh_uu2: number;

    /**
     * @default 0x1000dd8
     */
    const KeysymsSinh_ru2: number;

    /**
     * @default 0x1000dd9
     */
    const KeysymsSinh_e2: number;

    /**
     * @default 0x1000dda
     */
    const KeysymsSinh_ee2: number;

    /**
     * @default 0x1000ddb
     */
    const KeysymsSinh_ai2: number;

    /**
     * @default 0x1000ddc
     */
    const KeysymsSinh_o2: number;

    /**
     * @default 0x1000ddd
     */
    const KeysymsSinh_oo2: number;

    /**
     * @default 0x1000dde
     */
    const KeysymsSinh_au2: number;

    /**
     * @default 0x1000ddf
     */
    const KeysymsSinh_lu2: number;

    /**
     * @default 0x1000df2
     */
    const KeysymsSinh_ruu2: number;

    /**
     * @default 0x1000df3
     */
    const KeysymsSinh_luu2: number;

    /**
     * @default 0x1000df4
     */
    const KeysymsSinh_kunddaliya: number;

    function init(): void;

    /**
     * @gir-type Callback
     */
    interface GetTime {
        (): bigint | number;
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
        NONE = 0,
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


    namespace RomKanaConverter {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::kana-mode": (pspec: GObject.ParamSpec) => void;
            "notify::period-style": (pspec: GObject.ParamSpec) => void;
            "notify::output": (pspec: GObject.ParamSpec) => void;
            "notify::preedit": (pspec: GObject.ParamSpec) => void;
        }

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

    /**
     * @gir-type Class
     */
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

        /**
         * @read-only
         */
        get preedit(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RomKanaConverter.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<RomKanaConverter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): RomKanaConverter;

        // Signals
        /** @signal */
        connect<K extends keyof RomKanaConverter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RomKanaConverter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof RomKanaConverter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, RomKanaConverter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof RomKanaConverter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<RomKanaConverter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param uc 
         */
        is_valid(uc: string): boolean;

        output_nn_if_any(): boolean;

        /**
         * @param text 
         */
        append_text(text: string): void;

        /**
         * @param uc 
         */
        append(uc: string): boolean;

        /**
         * @param uc 
         * @param preedit_only 
         * @param no_carryover 
         */
        can_consume(uc: string, preedit_only: boolean, no_carryover: boolean): boolean;

        reset(): void;

        ["delete"](): boolean;

        get_kana_mode(): KanaMode;

        /**
         * @param value 
         */
        set_kana_mode(value: KanaMode): void;

        get_period_style(): PeriodStyle;

        /**
         * @param value 
         */
        set_period_style(value: PeriodStyle): void;

        get_output(): string;

        get_preedit(): string;
    }


    namespace Dict {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            read_only: boolean;
            readOnly: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class Dict extends GObject.Object {
        static $gtype: GObject.GType<Dict>;

        // Properties
        /**
         * @read-only
         */
        get read_only(): boolean;

        /**
         * @read-only
         */
        get readOnly(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Dict.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Dict.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Dict.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Dict.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Dict.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Dict.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Dict.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Dict.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_reload(): void;

        /**
         * @param midasi 
         * @param okuri 
         * @virtual
         */
        vfunc_lookup(midasi: string, okuri: boolean): Candidate[];

        /**
         * @param midasi 
         * @virtual
         */
        vfunc_complete(midasi: string): string[];

        /**
         * @param candidate 
         * @virtual
         */
        vfunc_select_candidate(candidate: Candidate): boolean;

        /**
         * @param candidate 
         * @virtual
         */
        vfunc_purge_candidate(candidate: Candidate): boolean;

        /**
         * @virtual
         */
        vfunc_save(): void;

        /**
         * @virtual
         */
        vfunc_get_read_only(): boolean;

        // Methods
        /**
         * @param midasi 
         * @param okuri 
         * @param line 
         */
        split_candidates(midasi: string, okuri: boolean, line: string): Candidate[];

        /**
         * @param candidates 
         */
        join_candidates(candidates: Candidate[]): string;

        /**
         * @throws GLib.Error
         */
        reload(): void;

        /**
         * @param midasi 
         * @param okuri 
         */
        lookup(midasi: string, okuri: boolean): Candidate[];

        /**
         * @param midasi 
         */
        complete(midasi: string): string[];

        /**
         * @param candidate 
         */
        select_candidate(candidate: Candidate): boolean;

        /**
         * @param candidate 
         */
        purge_candidate(candidate: Candidate): boolean;

        /**
         * @throws GLib.Error
         */
        save(): void;

        get_read_only(): boolean;
    }


    namespace EmptyDict {
        // Signal signatures
        interface SignalSignatures extends Dict.SignalSignatures {
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Dict.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class EmptyDict extends Dict {
        static $gtype: GObject.GType<EmptyDict>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EmptyDict.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<EmptyDict.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): EmptyDict;

        // Signals
        /** @signal */
        connect<K extends keyof EmptyDict.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EmptyDict.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EmptyDict.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EmptyDict.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EmptyDict.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EmptyDict.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace FileDict {
        // Signal signatures
        interface SignalSignatures extends Dict.SignalSignatures {
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Dict.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class FileDict extends Dict {
        static $gtype: GObject.GType<FileDict>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileDict.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<FileDict.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](path: string, encoding: string): FileDict;

        // Signals
        /** @signal */
        connect<K extends keyof FileDict.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileDict.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FileDict.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileDict.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FileDict.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FileDict.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace CdbDict {
        // Signal signatures
        interface SignalSignatures extends Dict.SignalSignatures {
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Dict.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class CdbDict extends Dict {
        static $gtype: GObject.GType<CdbDict>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CdbDict.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<CdbDict.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](path: string, encoding: string): CdbDict;

        // Signals
        /** @signal */
        connect<K extends keyof CdbDict.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CdbDict.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CdbDict.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CdbDict.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CdbDict.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CdbDict.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace UserDict {
        // Signal signatures
        interface SignalSignatures extends Dict.SignalSignatures {
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Dict.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class UserDict extends Dict {
        static $gtype: GObject.GType<UserDict>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UserDict.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<UserDict.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](path: string, encoding: string): UserDict;

        // Signals
        /** @signal */
        connect<K extends keyof UserDict.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UserDict.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof UserDict.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UserDict.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof UserDict.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UserDict.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace SkkServ {
        // Signal signatures
        interface SignalSignatures extends Dict.SignalSignatures {
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Dict.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class SkkServ extends Dict {
        static $gtype: GObject.GType<SkkServ>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SkkServ.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SkkServ.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](host: string, port: number, encoding: string): SkkServ;

        // Signals
        /** @signal */
        connect<K extends keyof SkkServ.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SkkServ.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SkkServ.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SkkServ.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SkkServ.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SkkServ.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace KeyEvent {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::code": (pspec: GObject.ParamSpec) => void;
            "notify::modifiers": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string | null;
            code: string;
            modifiers: ModifierType;
        }
    }

    /**
     * @gir-type Class
     */
    class KeyEvent extends GObject.Object {
        static $gtype: GObject.GType<KeyEvent>;

        // Properties
        get name(): string | null;
        set name(val: string | null);

        get code(): string;
        set code(val: string);

        get modifiers(): ModifierType;
        set modifiers(val: ModifierType);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: KeyEvent.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<KeyEvent.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](name: string | null, code: string, modifiers: ModifierType): KeyEvent;

        static from_string(key: string): KeyEvent;

        static from_x_keysym(keyval: number, modifiers: ModifierType): KeyEvent;

        // Signals
        /** @signal */
        connect<K extends keyof KeyEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, KeyEvent.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof KeyEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, KeyEvent.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof KeyEvent.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<KeyEvent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        copy(): KeyEvent;

        to_string(): string;

        /**
         * @param key 
         */
        base_equal(key: KeyEvent): boolean;

        get_name(): string | null;

        get_code(): string;

        get_modifiers(): ModifierType;

        /**
         * @param value 
         */
        set_modifiers(value: ModifierType): void;
    }


    namespace KeyEventFilter {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            forwarded: (key: KeyEvent) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class KeyEventFilter extends GObject.Object {
        static $gtype: GObject.GType<KeyEventFilter>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: KeyEventFilter.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<KeyEventFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof KeyEventFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, KeyEventFilter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof KeyEventFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, KeyEventFilter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof KeyEventFilter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<KeyEventFilter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param key 
         * @virtual
         */
        vfunc_filter_key_event(key: KeyEvent): KeyEvent | null;

        /**
         * @virtual
         */
        vfunc_reset(): void;

        // Methods
        /**
         * @param key 
         */
        filter_key_event(key: KeyEvent): KeyEvent | null;

        reset(): void;
    }


    namespace Rule {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::metadata": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            metadata: RuleMetadata;
        }
    }

    /**
     * @gir-type Class
     */
    class Rule extends GObject.Object {
        static $gtype: GObject.GType<Rule>;

        // Properties
        get metadata(): RuleMetadata;
        set metadata(val: RuleMetadata);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Rule.SignalSignatures;

        // Fields
        keymaps: never[];

        keymaps_length1: number;

        rom_kana: never;

        // Constructors
        constructor(properties?: Partial<Rule.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](name: string): Rule;

        // Signals
        /** @signal */
        connect<K extends keyof Rule.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Rule.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Rule.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Rule.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Rule.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Rule.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param name 
         */
        static find_rule(name: string): RuleMetadata | null;

        static list(): RuleMetadata[];

        // Methods
        get_metadata(): RuleMetadata;
    }


    namespace Context {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            "retrieve-surrounding-text": (text: string, cursor_pos: number) => boolean | void;
            /**
             * @signal
             */
            "delete-surrounding-text": (offset: number, nchars: number) => boolean | void;
            /**
             * @signal
             */
            "request-selection-text": () => void;
            "notify::candidates": (pspec: GObject.ParamSpec) => void;
            "notify::input-mode": (pspec: GObject.ParamSpec) => void;
            "notify::auto-start-henkan-keywords": (pspec: GObject.ParamSpec) => void;
            "notify::egg-like-newline": (pspec: GObject.ParamSpec) => void;
            "notify::period-style": (pspec: GObject.ParamSpec) => void;
            "notify::typing-rule": (pspec: GObject.ParamSpec) => void;
            "notify::key-event-filter": (pspec: GObject.ParamSpec) => void;
            "notify::preedit": (pspec: GObject.ParamSpec) => void;
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

    /**
     * @gir-type Class
     */
    class Context extends GObject.Object {
        static $gtype: GObject.GType<Context>;

        // Properties
        /**
         * @read-only
         */
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

        /**
         * @read-only
         */
        get key_event_filter(): KeyEventFilter;

        /**
         * @read-only
         */
        get keyEventFilter(): KeyEventFilter;

        get preedit(): string;
        set preedit(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Context.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Context.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](dictionaries: Dict[]): Context;

        // Signals
        /** @signal */
        connect<K extends keyof Context.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Context.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Context.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Context.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Context.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Context.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param dict 
         */
        add_dictionary(dict: Dict): void;

        /**
         * @param dict 
         */
        remove_dictionary(dict: Dict): void;

        /**
         * @param text 
         */
        set_selection_text(text: string | null): void;

        /**
         * @param keyseq 
         */
        process_key_events(keyseq: string): boolean;

        /**
         * @param key 
         */
        process_key_event(key: KeyEvent): boolean;

        reset(): void;

        get_output(): string;

        peek_output(): string;

        poll_output(): string;

        clear_output(): void;

        get_preedit_underline(): [number, number];

        /**
         * @throws GLib.Error
         */
        save_dictionaries(): void;

        /**
         * @param mode 
         * @param sources 
         */
        set_completion_order(mode: string, sources: CompletionSource[]): void;

        get_dictionaries(): Dict[];

        /**
         * @param value 
         */
        set_dictionaries(value: Dict[]): void;

        get_candidates(): CandidateList;

        get_input_mode(): InputMode;

        /**
         * @param value 
         */
        set_input_mode(value: InputMode): void;

        get_auto_start_henkan_keywords(): string[];

        /**
         * @param value 
         */
        set_auto_start_henkan_keywords(value: string[]): void;

        get_egg_like_newline(): boolean;

        /**
         * @param value 
         */
        set_egg_like_newline(value: boolean): void;

        get_period_style(): PeriodStyle;

        /**
         * @param value 
         */
        set_period_style(value: PeriodStyle): void;

        get_typing_rule(): Rule;

        /**
         * @param value 
         */
        set_typing_rule(value: Rule): void;

        get_key_event_filter(): KeyEventFilter;

        get_preedit(): string;
    }


    namespace Candidate {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::midasi": (pspec: GObject.ParamSpec) => void;
            "notify::okuri": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::annotation": (pspec: GObject.ParamSpec) => void;
            "notify::output": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            midasi: string;
            okuri: boolean;
            text: string;
            annotation: string | null;
            output: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Candidate extends GObject.Object {
        static $gtype: GObject.GType<Candidate>;

        // Properties
        get midasi(): string;
        set midasi(val: string);

        get okuri(): boolean;
        set okuri(val: boolean);

        get text(): string;
        set text(val: string);

        get annotation(): string | null;
        set annotation(val: string | null);

        get output(): string;
        set output(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Candidate.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Candidate.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](midasi: string, okuri: boolean, text: string, annotation: string | null, output: string | null): Candidate;

        // Signals
        /** @signal */
        connect<K extends keyof Candidate.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Candidate.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Candidate.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Candidate.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Candidate.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Candidate.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        to_string(): string;

        get_midasi(): string;

        get_okuri(): boolean;

        get_text(): string;

        /**
         * @param value 
         */
        set_text(value: string): void;

        get_annotation(): string | null;

        /**
         * @param value 
         */
        set_annotation(value: string | null): void;

        get_output(): string;

        /**
         * @param value 
         */
        set_output(value: string): void;
    }


    namespace CandidateList {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            populated: () => void;
            /**
             * @signal
             */
            selected: (candidate: Candidate) => void;
            "notify::cursor-pos": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::page-start": (pspec: GObject.ParamSpec) => void;
            "notify::page-size": (pspec: GObject.ParamSpec) => void;
            "notify::page-visible": (pspec: GObject.ParamSpec) => void;
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

    /**
     * @gir-type Class
     */
    abstract class CandidateList extends GObject.Object {
        static $gtype: GObject.GType<CandidateList>;

        // Properties
        /**
         * @read-only
         */
        get cursor_pos(): number;

        /**
         * @read-only
         */
        get cursorPos(): number;

        /**
         * @read-only
         */
        get size(): number;

        get page_start(): number;
        set page_start(val: number);

        get pageStart(): number;
        set pageStart(val: number);

        get page_size(): number;
        set page_size(val: number);

        get pageSize(): number;
        set pageSize(val: number);

        /**
         * @read-only
         */
        get page_visible(): boolean;

        /**
         * @read-only
         */
        get pageVisible(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CandidateList.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<CandidateList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof CandidateList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CandidateList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CandidateList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CandidateList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CandidateList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CandidateList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param index 
         * @virtual
         */
        vfunc_get(index: number): Candidate;

        /**
         * @virtual
         */
        vfunc_clear(): void;

        /**
         * @param array 
         * @virtual
         */
        vfunc_add_candidates(array: Candidate[]): void;

        /**
         * @virtual
         */
        vfunc_add_candidates_end(): void;

        /**
         * @virtual
         */
        vfunc_cursor_up(): boolean;

        /**
         * @virtual
         */
        vfunc_cursor_down(): boolean;

        /**
         * @virtual
         */
        vfunc_page_up(): boolean;

        /**
         * @virtual
         */
        vfunc_page_down(): boolean;

        /**
         * @virtual
         */
        vfunc_next(): boolean;

        /**
         * @virtual
         */
        vfunc_previous(): boolean;

        /**
         * @param index_in_page 
         * @virtual
         */
        vfunc_select_at(index_in_page: number): boolean;

        /**
         * @virtual
         */
        vfunc_select(): void;

        /**
         * @virtual
         */
        vfunc_get_cursor_pos(): number;

        /**
         * @virtual
         */
        vfunc_get_size(): number;

        /**
         * @virtual
         */
        vfunc_get_page_start(): number;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_page_start(value: number): void;

        /**
         * @virtual
         */
        vfunc_get_page_size(): number;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_page_size(value: number): void;

        /**
         * @virtual
         */
        vfunc_get_page_visible(): boolean;

        // Methods
        /**
         * @param index 
         */
        get(index: number): Candidate;

        clear(): void;

        /**
         * @param array 
         */
        add_candidates(array: Candidate[]): void;

        add_candidates_end(): void;

        cursor_up(): boolean;

        cursor_down(): boolean;

        page_up(): boolean;

        page_down(): boolean;

        next(): boolean;

        previous(): boolean;

        get_page_start_cursor_pos(): number;

        /**
         * @param index_in_page 
         */
        select_at(index_in_page: number): boolean;

        select(): void;

        get_cursor_pos(): number;

        get_size(): number;

        get_page_start(): number;

        /**
         * @param value 
         */
        set_page_start(value: number): void;

        get_page_size(): number;

        /**
         * @param value 
         */
        set_page_size(value: number): void;

        get_page_visible(): boolean;
    }


    namespace NicolaKeyEventFilter {
        // Signal signatures
        interface SignalSignatures extends KeyEventFilter.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends KeyEventFilter.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class NicolaKeyEventFilter extends KeyEventFilter {
        static $gtype: GObject.GType<NicolaKeyEventFilter>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: NicolaKeyEventFilter.SignalSignatures;

        // Fields
        get_time_func: GetTime;

        get_time_func_target: null;

        get_time_func_target_destroy_notify: GLib.DestroyNotify;

        timeout: number;

        overlap: number;

        maxwait: number;

        special_doubles: string[];

        special_doubles_length1: number;

        // Constructors
        constructor(properties?: Partial<NicolaKeyEventFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): NicolaKeyEventFilter;

        // Signals
        /** @signal */
        connect<K extends keyof NicolaKeyEventFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NicolaKeyEventFilter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof NicolaKeyEventFilter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, NicolaKeyEventFilter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof NicolaKeyEventFilter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<NicolaKeyEventFilter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace CompletionSource {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::priority": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            priority: number;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class CompletionSource extends GObject.Object {
        static $gtype: GObject.GType<CompletionSource>;

        // Properties
        get priority(): number;
        set priority(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CompletionSource.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<CompletionSource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof CompletionSource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompletionSource.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CompletionSource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompletionSource.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CompletionSource.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CompletionSource.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param midasi 
         * @virtual
         */
        vfunc_get_completions(midasi: string): string[];

        // Methods
        /**
         * @param midasi 
         */
        get_completions(midasi: string): string[];

        get_priority(): number;

        /**
         * @param value 
         */
        set_priority(value: number): void;
    }


    namespace DictCompletionSource {
        // Signal signatures
        interface SignalSignatures extends CompletionSource.SignalSignatures {
            "notify::priority": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends CompletionSource.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DictCompletionSource extends CompletionSource {
        static $gtype: GObject.GType<DictCompletionSource>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DictCompletionSource.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DictCompletionSource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](dict: Dict, priority: number): DictCompletionSource;

        // Signals
        /** @signal */
        connect<K extends keyof DictCompletionSource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DictCompletionSource.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DictCompletionSource.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DictCompletionSource.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DictCompletionSource.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DictCompletionSource.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace CompletionService {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }

    /**
     * @gir-type Class
     */
    class CompletionService {
        static $gtype: GObject.GType<CompletionService>;

        // Fields
        ref_count: number;

        // Constructors
        _init(...args: any[]): void;

        static ["new"](): CompletionService;

        // Signals
        /** @signal */
        connect<K extends keyof CompletionService.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompletionService.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CompletionService.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CompletionService.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CompletionService.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CompletionService.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param source_object 
         * @param priority 
         */
        add_source(source_object: GObject.Object, priority: number): void;

        /**
         * @param midasi 
         */
        get_completions(midasi: string): string[];
    }


    /**
     * @gir-type Alias
     */
    type RomKanaConverterClass = typeof RomKanaConverter;

    /**
     * @gir-type Struct
     */
    abstract class RomKanaConverterPrivate {
        static $gtype: GObject.GType<RomKanaConverterPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type DictClass = typeof Dict;

    /**
     * @gir-type Struct
     */
    abstract class DictPrivate {
        static $gtype: GObject.GType<DictPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type EmptyDictClass = typeof EmptyDict;

    /**
     * @gir-type Struct
     */
    abstract class EmptyDictPrivate {
        static $gtype: GObject.GType<EmptyDictPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type FileDictClass = typeof FileDict;

    /**
     * @gir-type Struct
     */
    abstract class FileDictPrivate {
        static $gtype: GObject.GType<FileDictPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type CdbDictClass = typeof CdbDict;

    /**
     * @gir-type Struct
     */
    abstract class CdbDictPrivate {
        static $gtype: GObject.GType<CdbDictPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type UserDictClass = typeof UserDict;

    /**
     * @gir-type Struct
     */
    abstract class UserDictPrivate {
        static $gtype: GObject.GType<UserDictPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type SkkServClass = typeof SkkServ;

    /**
     * @gir-type Struct
     */
    abstract class SkkServPrivate {
        static $gtype: GObject.GType<SkkServPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type KeyEventClass = typeof KeyEvent;

    /**
     * @gir-type Struct
     */
    abstract class KeyEventPrivate {
        static $gtype: GObject.GType<KeyEventPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type KeyEventFilterClass = typeof KeyEventFilter;

    /**
     * @gir-type Struct
     */
    abstract class KeyEventFilterPrivate {
        static $gtype: GObject.GType<KeyEventFilterPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type RuleClass = typeof Rule;

    /**
     * @gir-type Struct
     */
    abstract class RulePrivate {
        static $gtype: GObject.GType<RulePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ContextClass = typeof Context;

    /**
     * @gir-type Struct
     */
    abstract class ContextPrivate {
        static $gtype: GObject.GType<ContextPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type CandidateClass = typeof Candidate;

    /**
     * @gir-type Struct
     */
    abstract class CandidatePrivate {
        static $gtype: GObject.GType<CandidatePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type CandidateListClass = typeof CandidateList;

    /**
     * @gir-type Struct
     */
    abstract class CandidateListPrivate {
        static $gtype: GObject.GType<CandidateListPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type NicolaKeyEventFilterClass = typeof NicolaKeyEventFilter;

    /**
     * @gir-type Struct
     */
    abstract class NicolaKeyEventFilterPrivate {
        static $gtype: GObject.GType<NicolaKeyEventFilterPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type CompletionSourceClass = typeof CompletionSource;

    /**
     * @gir-type Struct
     */
    abstract class CompletionSourcePrivate {
        static $gtype: GObject.GType<CompletionSourcePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type DictCompletionSourceClass = typeof DictCompletionSource;

    /**
     * @gir-type Struct
     */
    abstract class DictCompletionSourcePrivate {
        static $gtype: GObject.GType<DictCompletionSourcePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type CompletionServiceClass = typeof CompletionService;

    /**
     * @gir-type Struct
     */
    abstract class CompletionServicePrivate {
        static $gtype: GObject.GType<CompletionServicePrivate>;
    }


    /**
     * @gir-type Struct
     */
    class RuleMetadata {
        static $gtype: GObject.GType<RuleMetadata>;

        // Fields
        base_dir: string;

        name: string;

        label: string;

        description: string;

        filter: string;

        // Constructors

        constructor(properties?: Partial<{
            base_dir: string;
            name: string;
            label: string;
            description: string;
            filter: string;
        }>);

        // Methods
        /**
         * @param type 
         * @param name 
         */
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
