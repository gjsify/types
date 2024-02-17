
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-ibus-1.0-import.d.ts';
    
/**
 * IBus-1.0
 */

import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

/**
 * Type enumeration of IBusText attribute.
 */
export enum AttrType {
    /**
     * Decorate with underline.
     */
    UNDERLINE,
    /**
     * Foreground color.
     */
    FOREGROUND,
    /**
     * Background color.
     */
    BACKGROUND,
}
/**
 * Type of IBusText attribute.
 */
export enum AttrUnderline {
    /**
     * No underline.
     */
    NONE,
    /**
     * Single underline.
     */
    SINGLE,
    /**
     * Double underline.
     */
    DOUBLE,
    /**
     * Low underline ? FIXME
     */
    LOW,
    /**
     * Error underline
     */
    ERROR,
}
export enum BusRequestNameReply {
    /**
     * same as DBUS_REQUEST_NAME_REPLY_PRIMARY_OWNER
     */
    PRIMARY_OWNER,
    /**
     * same as DBUS_REQUEST_NAME_REPLY_IN_QUEUE
     */
    IN_QUEUE,
    /**
     * same as DBUS_REQUEST_NAME_REPLY_EXISTS
     */
    EXISTS,
    /**
     * same as DBUS_REQUEST_NAME_REPLY_ALREADY_OWNER
     */
    ALREADY_OWNER,
}
export enum BusStartServiceByNameReply {
    /**
     * same as DBUS_START_REPLY_SUCCESS
     */
    SUCCESS,
    /**
     * same as DBUS_START_REPLY_ALREADY_RUNNING
     */
    ALREADY_RUNNING,
}
export enum Error {
    /**
     * There is no engine associated with input context.
     */
    NO_ENGINE,
    /**
     * There is no config module running.
     */
    NO_CONFIG,
    /**
     * General failure.
     */
    FAILED,
}
/**
 * Describes primary purpose of the input context.  This information
 * is particularly useful to implement intelligent behavior in
 * engines, such as automatic input-mode switch and text prediction.
 * 
 * This enumeration may be extended in the future; engines should
 * interpret unknown values as 'free form'.
 */
export enum InputPurpose {
    /**
     * Allow any character
     */
    FREE_FORM,
    /**
     * Allow only alphabetic characters
     */
    ALPHA,
    /**
     * Allow only digits
     */
    DIGITS,
    /**
     * Edited field expects numbers
     */
    NUMBER,
    /**
     * Edited field expects phone number
     */
    PHONE,
    /**
     * Edited field expects URL
     */
    URL,
    /**
     * Edited field expects email address
     */
    EMAIL,
    /**
     * Edited field expects the name of a person
     */
    NAME,
    /**
     * Like `IBUS_INPUT_PURPOSE_FREE_FORM,`
     * but characters are hidden
     */
    PASSWORD,
    /**
     * Like `IBUS_INPUT_PURPOSE_DIGITS,` but
     * characters are hidden
     */
    PIN,
}
/**
 * Orientation of UI.
 */
export enum Orientation {
    /**
     * Horizontal orientation.
     */
    HORIZONTAL,
    /**
     * Vertival orientation.
     */
    VERTICAL,
    /**
     * Use ibus global orientation setup.
     */
    SYSTEM,
}
/**
 * Pre-edit commit mode when the focus is lost.
 */
export enum PreeditFocusMode {
    /**
     * pre-edit text is cleared.
     */
    CLEAR,
    /**
     * pre-edit text is committed.
     */
    COMMIT,
}
/**
 * State of #IBusProperty. The actual effect depends on #IBusPropType of the
 * IBusProperty.
 * 
 * <variablelist>
 *     <varlistentry>
 *         <term>PROP_TYPE_TOGGLE</term>
 *         <listitem><para>Emphasized if PROP_STATE_CHECKED, normal otherwise.</para></listitem>
 *     </varlistentry>
 *     <varlistentry>
 *         <term>PROP_TYPE_RADIO</term>
 *         <listitem><para>Option checked if PROP_STATE_CHECKED, unchecked otherwise.</para></listitem>
 *     </varlistentry>
 * </variablelist>
 * No effect on other types.
 */
export enum PropState {
    /**
     * Property option is unchecked.
     */
    UNCHECKED,
    /**
     * Property option is checked.
     */
    CHECKED,
    /**
     * The state is inconsistent with the associated IME
     * property.
     */
    INCONSISTENT,
}
/**
 * Type enumeration of IBusProperty.
 */
export enum PropType {
    /**
     * Property is shown as normal text.
     */
    NORMAL,
    /**
     * Property is shown as a toggle button.
     */
    TOGGLE,
    /**
     * Property is shown as a radio selection option.
     */
    RADIO,
    /**
     * Property is shown as a menu, usually imply it has sub menu
     * items.
     */
    MENU,
    /**
     * A separator for menu.
     */
    SEPARATOR,
}
export enum BusNameFlag {
    /**
     * same as DBUS_NAME_FLAG_ALLOW_REPLACEMENT
     */
    ALLOW_REPLACEMENT,
    /**
     * same as DBUS_NAME_FLAG_REPLACE_EXISTING
     */
    REPLACE_EXISTING,
    /**
     * same as DBUS_NAME_FLAG_DO_NOT_QUEUE
     */
    DO_NOT_QUEUE,
}
/**
 * Capability flags of UI.
 * @bitfield 
 */
export enum Capabilite {
    /**
     * UI is capable to show pre-edit text.
     */
    PREEDIT_TEXT,
    /**
     * UI is capable to show auxiliary text.
     */
    AUXILIARY_TEXT,
    /**
     * UI is capable to show the lookup table.
     */
    LOOKUP_TABLE,
    /**
     * UI is capable to get focus.
     */
    FOCUS,
    /**
     * UI is capable to have property.
     */
    PROPERTY,
    /**
     * Client can provide surround text,
     *  or IME can handle surround text.
     */
    SURROUNDING_TEXT,
}
/**
 * Describes hints that might be taken into account by engines.  Note
 * that engines may already tailor their behaviour according to the
 * #IBusInputPurpose of the entry.
 * @bitfield 
 */
export enum InputHints {
    /**
     * No special behaviour suggested
     */
    NONE,
    /**
     * Suggest checking for typos
     */
    SPELLCHECK,
    /**
     * Suggest not checking for typos
     */
    NO_SPELLCHECK,
    /**
     * Suggest word completion
     */
    WORD_COMPLETION,
    /**
     * Suggest to convert all text to lowercase
     */
    LOWERCASE,
    /**
     * Suggest to capitalize all text
     */
    UPPERCASE_CHARS,
    /**
     * Suggest to capitalize the first
     *     character of each word
     */
    UPPERCASE_WORDS,
    /**
     * Suggest to capitalize the
     *     first word of each sentence
     */
    UPPERCASE_SENTENCES,
    /**
     * Suggest to not show an onscreen keyboard
     *     (e.g for a calculator that already has all the keys).
     */
    INHIBIT_OSK,
    /**
     * The text is vertical.
     */
    VERTICAL_WRITING,
}
/**
 * Handles key modifier such as control, shift and alt and release event.
 * Note that nits 15 - 25 are currently unused, while bit 29 is used internally.
 * @bitfield 
 */
export enum ModifierType {
    /**
     * Shift  is activated.
     */
    SHIFT_MASK,
    /**
     * Cap Lock is locked.
     */
    LOCK_MASK,
    /**
     * Control key is activated.
     */
    CONTROL_MASK,
    /**
     * Modifier 1 (Usually Alt_L (0x40),  Alt_R (0x6c),  Meta_L (0xcd)) activated.
     */
    MOD1_MASK,
    /**
     * Modifier 2 (Usually Num_Lock (0x4d)) activated.
     */
    MOD2_MASK,
    /**
     * Modifier 3 activated.
     */
    MOD3_MASK,
    /**
     * Modifier 4 (Usually Super_L (0xce),  Hyper_L (0xcf)) activated.
     */
    MOD4_MASK,
    /**
     * Modifier 5 (ISO_Level3_Shift (0x5c),  Mode_switch (0xcb)) activated.
     */
    MOD5_MASK,
    /**
     * Mouse button 1 (left) is activated.
     */
    BUTTON1_MASK,
    /**
     * Mouse button 2 (middle) is activated.
     */
    BUTTON2_MASK,
    /**
     * Mouse button 3 (right) is activated.
     */
    BUTTON3_MASK,
    /**
     * Mouse button 4 (scroll up) is activated.
     */
    BUTTON4_MASK,
    /**
     * Mouse button 5 (scroll down) is activated.
     */
    BUTTON5_MASK,
    /**
     * Handled mask indicates the event has been handled by ibus.
     */
    HANDLED_MASK,
    /**
     * Forward mask indicates the event has been forward from ibus.
     */
    FORWARD_MASK,
    /**
     * It is an alias of IBUS_FORWARD_MASK.
     */
    IGNORED_MASK,
    /**
     * Super (Usually Win) key is activated.
     */
    SUPER_MASK,
    /**
     * Hyper key is activated.
     */
    HYPER_MASK,
    /**
     * Meta key is activated.
     */
    META_MASK,
    /**
     * Key is released.
     */
    RELEASE_MASK,
    /**
     * Modifier mask for the all the masks above.
     */
    MODIFIER_MASK,
}
/**
 * The flags are used internally.
 * @bitfield 
 */
export enum ObjectFlags {
    /**
     * Used in GObjectClass::dispose
     */
    IN_DESTRUCTION,
    /**
     * Used during emitting IBusObject::destroy signal.
     */
    DESTROYED,
    /**
     * Reserved.
     */
    RESERVED_1,
    /**
     * Reserved.
     */
    RESERVED_2,
}
export const TODO_0: number
export const TODO_1: number
export const TODO_2: number
export const TODO_3: number
export const TODO_3270_AltCursor: number
export const TODO_3270_Attn: number
export const TODO_3270_BackTab: number
export const TODO_3270_ChangeScreen: number
export const TODO_3270_Copy: number
export const TODO_3270_CursorBlink: number
export const TODO_3270_CursorSelect: number
export const TODO_3270_DeleteWord: number
export const TODO_3270_Duplicate: number
export const TODO_3270_Enter: number
export const TODO_3270_EraseEOF: number
export const TODO_3270_EraseInput: number
export const TODO_3270_ExSelect: number
export const TODO_3270_FieldMark: number
export const TODO_3270_Ident: number
export const TODO_3270_Jump: number
export const TODO_3270_KeyClick: number
export const TODO_3270_Left2: number
export const TODO_3270_PA1: number
export const TODO_3270_PA2: number
export const TODO_3270_PA3: number
export const TODO_3270_Play: number
export const TODO_3270_PrintScreen: number
export const TODO_3270_Quit: number
export const TODO_3270_Record: number
export const TODO_3270_Reset: number
export const TODO_3270_Right2: number
export const TODO_3270_Rule: number
export const TODO_3270_Setup: number
export const TODO_3270_Test: number
export const TODO_4: number
export const TODO_5: number
export const TODO_6: number
export const TODO_7: number
export const TODO_8: number
export const TODO_9: number
export const A: number
export const AE: number
export const Aacute: number
export const Abelowdot: number
export const Abreve: number
export const Abreveacute: number
export const Abrevebelowdot: number
export const Abrevegrave: number
export const Abrevehook: number
export const Abrevetilde: number
export const AccessX_Enable: number
export const AccessX_Feedback_Enable: number
export const Acircumflex: number
export const Acircumflexacute: number
export const Acircumflexbelowdot: number
export const Acircumflexgrave: number
export const Acircumflexhook: number
export const Acircumflextilde: number
export const Adiaeresis: number
export const Agrave: number
export const Ahook: number
export const Alt_L: number
export const Alt_R: number
export const Amacron: number
export const Aogonek: number
export const Arabic_0: number
export const Arabic_1: number
export const Arabic_2: number
export const Arabic_3: number
export const Arabic_4: number
export const Arabic_5: number
export const Arabic_6: number
export const Arabic_7: number
export const Arabic_8: number
export const Arabic_9: number
export const Arabic_ain: number
export const Arabic_alef: number
export const Arabic_alefmaksura: number
export const Arabic_beh: number
export const Arabic_comma: number
export const Arabic_dad: number
export const Arabic_dal: number
export const Arabic_damma: number
export const Arabic_dammatan: number
export const Arabic_ddal: number
export const Arabic_farsi_yeh: number
export const Arabic_fatha: number
export const Arabic_fathatan: number
export const Arabic_feh: number
export const Arabic_fullstop: number
export const Arabic_gaf: number
export const Arabic_ghain: number
export const Arabic_ha: number
export const Arabic_hah: number
export const Arabic_hamza: number
export const Arabic_hamza_above: number
export const Arabic_hamza_below: number
export const Arabic_hamzaonalef: number
export const Arabic_hamzaonwaw: number
export const Arabic_hamzaonyeh: number
export const Arabic_hamzaunderalef: number
export const Arabic_heh: number
export const Arabic_heh_doachashmee: number
export const Arabic_heh_goal: number
export const Arabic_jeem: number
export const Arabic_jeh: number
export const Arabic_kaf: number
export const Arabic_kasra: number
export const Arabic_kasratan: number
export const Arabic_keheh: number
export const Arabic_khah: number
export const Arabic_lam: number
export const Arabic_madda_above: number
export const Arabic_maddaonalef: number
export const Arabic_meem: number
export const Arabic_noon: number
export const Arabic_noon_ghunna: number
export const Arabic_peh: number
export const Arabic_percent: number
export const Arabic_qaf: number
export const Arabic_question_mark: number
export const Arabic_ra: number
export const Arabic_rreh: number
export const Arabic_sad: number
export const Arabic_seen: number
export const Arabic_semicolon: number
export const Arabic_shadda: number
export const Arabic_sheen: number
export const Arabic_sukun: number
export const Arabic_superscript_alef: number
export const Arabic_switch: number
export const Arabic_tah: number
export const Arabic_tatweel: number
export const Arabic_tcheh: number
export const Arabic_teh: number
export const Arabic_tehmarbuta: number
export const Arabic_thal: number
export const Arabic_theh: number
export const Arabic_tteh: number
export const Arabic_veh: number
export const Arabic_waw: number
export const Arabic_yeh: number
export const Arabic_yeh_baree: number
export const Arabic_zah: number
export const Arabic_zain: number
export const Aring: number
export const Armenian_AT: number
export const Armenian_AYB: number
export const Armenian_BEN: number
export const Armenian_CHA: number
export const Armenian_DA: number
export const Armenian_DZA: number
export const Armenian_E: number
export const Armenian_FE: number
export const Armenian_GHAT: number
export const Armenian_GIM: number
export const Armenian_HI: number
export const Armenian_HO: number
export const Armenian_INI: number
export const Armenian_JE: number
export const Armenian_KE: number
export const Armenian_KEN: number
export const Armenian_KHE: number
export const Armenian_LYUN: number
export const Armenian_MEN: number
export const Armenian_NU: number
export const Armenian_O: number
export const Armenian_PE: number
export const Armenian_PYUR: number
export const Armenian_RA: number
export const Armenian_RE: number
export const Armenian_SE: number
export const Armenian_SHA: number
export const Armenian_TCHE: number
export const Armenian_TO: number
export const Armenian_TSA: number
export const Armenian_TSO: number
export const Armenian_TYUN: number
export const Armenian_VEV: number
export const Armenian_VO: number
export const Armenian_VYUN: number
export const Armenian_YECH: number
export const Armenian_ZA: number
export const Armenian_ZHE: number
export const Armenian_accent: number
export const Armenian_amanak: number
export const Armenian_apostrophe: number
export const Armenian_at: number
export const Armenian_ayb: number
export const Armenian_ben: number
export const Armenian_but: number
export const Armenian_cha: number
export const Armenian_da: number
export const Armenian_dza: number
export const Armenian_e: number
export const Armenian_exclam: number
export const Armenian_fe: number
export const Armenian_full_stop: number
export const Armenian_ghat: number
export const Armenian_gim: number
export const Armenian_hi: number
export const Armenian_ho: number
export const Armenian_hyphen: number
export const Armenian_ini: number
export const Armenian_je: number
export const Armenian_ke: number
export const Armenian_ken: number
export const Armenian_khe: number
export const Armenian_ligature_ew: number
export const Armenian_lyun: number
export const Armenian_men: number
export const Armenian_nu: number
export const Armenian_o: number
export const Armenian_paruyk: number
export const Armenian_pe: number
export const Armenian_pyur: number
export const Armenian_question: number
export const Armenian_ra: number
export const Armenian_re: number
export const Armenian_se: number
export const Armenian_separation_mark: number
export const Armenian_sha: number
export const Armenian_shesht: number
export const Armenian_tche: number
export const Armenian_to: number
export const Armenian_tsa: number
export const Armenian_tso: number
export const Armenian_tyun: number
export const Armenian_verjaket: number
export const Armenian_vev: number
export const Armenian_vo: number
export const Armenian_vyun: number
export const Armenian_yech: number
export const Armenian_yentamna: number
export const Armenian_za: number
export const Armenian_zhe: number
export const Atilde: number
export const AudibleBell_Enable: number
export const B: number
export const Babovedot: number
export const BackSpace: number
export const Begin: number
export const BounceKeys_Enable: number
export const Break: number
export const Byelorussian_SHORTU: number
export const Byelorussian_shortu: number
export const C: number
export const Cabovedot: number
export const Cacute: number
export const Cancel: number
export const Caps_Lock: number
export const Ccaron: number
export const Ccedilla: number
export const Ccircumflex: number
export const Clear: number
/**
 * International and multi-key character composition.
 */
export const Codeinput: number
export const ColonSign: number
export const Control_L: number
export const Control_R: number
export const CruzeiroSign: number
export const Cyrillic_A: number
export const Cyrillic_BE: number
export const Cyrillic_CHE: number
export const Cyrillic_CHE_descender: number
export const Cyrillic_CHE_vertstroke: number
export const Cyrillic_DE: number
export const Cyrillic_DZHE: number
export const Cyrillic_E: number
export const Cyrillic_EF: number
export const Cyrillic_EL: number
export const Cyrillic_EM: number
export const Cyrillic_EN: number
export const Cyrillic_EN_descender: number
export const Cyrillic_ER: number
export const Cyrillic_ES: number
export const Cyrillic_GHE: number
export const Cyrillic_GHE_bar: number
export const Cyrillic_HA: number
export const Cyrillic_HARDSIGN: number
export const Cyrillic_HA_descender: number
export const Cyrillic_I: number
export const Cyrillic_IE: number
export const Cyrillic_IO: number
export const Cyrillic_I_macron: number
export const Cyrillic_JE: number
export const Cyrillic_KA: number
export const Cyrillic_KA_descender: number
export const Cyrillic_KA_vertstroke: number
export const Cyrillic_LJE: number
export const Cyrillic_NJE: number
export const Cyrillic_O: number
export const Cyrillic_O_bar: number
export const Cyrillic_PE: number
export const Cyrillic_SCHWA: number
export const Cyrillic_SHA: number
export const Cyrillic_SHCHA: number
export const Cyrillic_SHHA: number
export const Cyrillic_SHORTI: number
export const Cyrillic_SOFTSIGN: number
export const Cyrillic_TE: number
export const Cyrillic_TSE: number
export const Cyrillic_U: number
export const Cyrillic_U_macron: number
export const Cyrillic_U_straight: number
export const Cyrillic_U_straight_bar: number
export const Cyrillic_VE: number
export const Cyrillic_YA: number
export const Cyrillic_YERU: number
export const Cyrillic_YU: number
export const Cyrillic_ZE: number
export const Cyrillic_ZHE: number
export const Cyrillic_ZHE_descender: number
export const Cyrillic_a: number
export const Cyrillic_be: number
export const Cyrillic_che: number
export const Cyrillic_che_descender: number
export const Cyrillic_che_vertstroke: number
export const Cyrillic_de: number
export const Cyrillic_dzhe: number
export const Cyrillic_e: number
export const Cyrillic_ef: number
export const Cyrillic_el: number
export const Cyrillic_em: number
export const Cyrillic_en: number
export const Cyrillic_en_descender: number
export const Cyrillic_er: number
export const Cyrillic_es: number
export const Cyrillic_ghe: number
export const Cyrillic_ghe_bar: number
export const Cyrillic_ha: number
export const Cyrillic_ha_descender: number
export const Cyrillic_hardsign: number
export const Cyrillic_i: number
export const Cyrillic_i_macron: number
export const Cyrillic_ie: number
export const Cyrillic_io: number
export const Cyrillic_je: number
export const Cyrillic_ka: number
export const Cyrillic_ka_descender: number
export const Cyrillic_ka_vertstroke: number
export const Cyrillic_lje: number
export const Cyrillic_nje: number
export const Cyrillic_o: number
export const Cyrillic_o_bar: number
export const Cyrillic_pe: number
export const Cyrillic_schwa: number
export const Cyrillic_sha: number
export const Cyrillic_shcha: number
export const Cyrillic_shha: number
export const Cyrillic_shorti: number
export const Cyrillic_softsign: number
export const Cyrillic_te: number
export const Cyrillic_tse: number
export const Cyrillic_u: number
export const Cyrillic_u_macron: number
export const Cyrillic_u_straight: number
export const Cyrillic_u_straight_bar: number
export const Cyrillic_ve: number
export const Cyrillic_ya: number
export const Cyrillic_yeru: number
export const Cyrillic_yu: number
export const Cyrillic_ze: number
export const Cyrillic_zhe: number
export const Cyrillic_zhe_descender: number
export const D: number
export const Dabovedot: number
export const Dcaron: number
export const Delete: number
export const DongSign: number
export const Down: number
export const Dstroke: number
export const E: number
export const ENG: number
export const ETH: number
export const Eabovedot: number
export const Eacute: number
export const Ebelowdot: number
export const Ecaron: number
export const Ecircumflex: number
export const Ecircumflexacute: number
export const Ecircumflexbelowdot: number
export const Ecircumflexgrave: number
export const Ecircumflexhook: number
export const Ecircumflextilde: number
export const EcuSign: number
export const Ediaeresis: number
export const Egrave: number
export const Ehook: number
export const Eisu_Shift: number
export const Eisu_toggle: number
export const Emacron: number
export const End: number
export const Eogonek: number
export const Escape: number
export const Eth: number
export const Etilde: number
export const EuroSign: number
export const Execute: number
export const F: number
export const F1: number
export const F10: number
export const F11: number
export const F12: number
export const F13: number
export const F14: number
export const F15: number
export const F16: number
export const F17: number
export const F18: number
export const F19: number
export const F2: number
export const F20: number
export const F21: number
export const F22: number
export const F23: number
export const F24: number
export const F25: number
export const F26: number
export const F27: number
export const F28: number
export const F29: number
export const F3: number
export const F30: number
export const F31: number
export const F32: number
export const F33: number
export const F34: number
export const F35: number
export const F4: number
export const F5: number
export const F6: number
export const F7: number
export const F8: number
export const F9: number
export const FFrancSign: number
export const Fabovedot: number
export const Farsi_0: number
export const Farsi_1: number
export const Farsi_2: number
export const Farsi_3: number
export const Farsi_4: number
export const Farsi_5: number
export const Farsi_6: number
export const Farsi_7: number
export const Farsi_8: number
export const Farsi_9: number
export const Farsi_yeh: number
export const Find: number
export const First_Virtual_Screen: number
export const G: number
export const Gabovedot: number
export const Gbreve: number
export const Gcaron: number
export const Gcedilla: number
export const Gcircumflex: number
export const Georgian_an: number
export const Georgian_ban: number
export const Georgian_can: number
export const Georgian_char: number
export const Georgian_chin: number
export const Georgian_cil: number
export const Georgian_don: number
export const Georgian_en: number
export const Georgian_fi: number
export const Georgian_gan: number
export const Georgian_ghan: number
export const Georgian_hae: number
export const Georgian_har: number
export const Georgian_he: number
export const Georgian_hie: number
export const Georgian_hoe: number
export const Georgian_in: number
export const Georgian_jhan: number
export const Georgian_jil: number
export const Georgian_kan: number
export const Georgian_khar: number
export const Georgian_las: number
export const Georgian_man: number
export const Georgian_nar: number
export const Georgian_on: number
export const Georgian_par: number
export const Georgian_phar: number
export const Georgian_qar: number
export const Georgian_rae: number
export const Georgian_san: number
export const Georgian_shin: number
export const Georgian_tan: number
export const Georgian_tar: number
export const Georgian_un: number
export const Georgian_vin: number
export const Georgian_we: number
export const Georgian_xan: number
export const Georgian_zen: number
export const Georgian_zhar: number
export const Greek_ALPHA: number
export const Greek_ALPHAaccent: number
export const Greek_BETA: number
export const Greek_CHI: number
export const Greek_DELTA: number
export const Greek_EPSILON: number
export const Greek_EPSILONaccent: number
export const Greek_ETA: number
export const Greek_ETAaccent: number
export const Greek_GAMMA: number
export const Greek_IOTA: number
export const Greek_IOTAaccent: number
export const Greek_IOTAdiaeresis: number
export const Greek_IOTAdieresis: number
export const Greek_KAPPA: number
export const Greek_LAMBDA: number
export const Greek_LAMDA: number
export const Greek_MU: number
export const Greek_NU: number
export const Greek_OMEGA: number
export const Greek_OMEGAaccent: number
export const Greek_OMICRON: number
export const Greek_OMICRONaccent: number
export const Greek_PHI: number
export const Greek_PI: number
export const Greek_PSI: number
export const Greek_RHO: number
export const Greek_SIGMA: number
export const Greek_TAU: number
export const Greek_THETA: number
export const Greek_UPSILON: number
export const Greek_UPSILONaccent: number
export const Greek_UPSILONdieresis: number
export const Greek_XI: number
export const Greek_ZETA: number
export const Greek_accentdieresis: number
export const Greek_alpha: number
export const Greek_alphaaccent: number
export const Greek_beta: number
export const Greek_chi: number
export const Greek_delta: number
export const Greek_epsilon: number
export const Greek_epsilonaccent: number
export const Greek_eta: number
export const Greek_etaaccent: number
export const Greek_finalsmallsigma: number
export const Greek_gamma: number
export const Greek_horizbar: number
export const Greek_iota: number
export const Greek_iotaaccent: number
export const Greek_iotaaccentdieresis: number
export const Greek_iotadieresis: number
export const Greek_kappa: number
export const Greek_lambda: number
export const Greek_lamda: number
export const Greek_mu: number
export const Greek_nu: number
export const Greek_omega: number
export const Greek_omegaaccent: number
export const Greek_omicron: number
export const Greek_omicronaccent: number
export const Greek_phi: number
export const Greek_pi: number
export const Greek_psi: number
export const Greek_rho: number
export const Greek_sigma: number
export const Greek_switch: number
export const Greek_tau: number
export const Greek_theta: number
export const Greek_upsilon: number
export const Greek_upsilonaccent: number
export const Greek_upsilonaccentdieresis: number
export const Greek_upsilondieresis: number
export const Greek_xi: number
export const Greek_zeta: number
export const H: number
export const Hangul: number
export const Hangul_A: number
export const Hangul_AE: number
export const Hangul_AraeA: number
export const Hangul_AraeAE: number
export const Hangul_Banja: number
export const Hangul_Cieuc: number
export const Hangul_Codeinput: number
export const Hangul_Dikeud: number
export const Hangul_E: number
export const Hangul_EO: number
export const Hangul_EU: number
export const Hangul_End: number
export const Hangul_Hanja: number
export const Hangul_Hieuh: number
export const Hangul_I: number
export const Hangul_Ieung: number
export const Hangul_J_Cieuc: number
export const Hangul_J_Dikeud: number
export const Hangul_J_Hieuh: number
export const Hangul_J_Ieung: number
export const Hangul_J_Jieuj: number
export const Hangul_J_Khieuq: number
export const Hangul_J_Kiyeog: number
export const Hangul_J_KiyeogSios: number
export const Hangul_J_KkogjiDalrinIeung: number
export const Hangul_J_Mieum: number
export const Hangul_J_Nieun: number
export const Hangul_J_NieunHieuh: number
export const Hangul_J_NieunJieuj: number
export const Hangul_J_PanSios: number
export const Hangul_J_Phieuf: number
export const Hangul_J_Pieub: number
export const Hangul_J_PieubSios: number
export const Hangul_J_Rieul: number
export const Hangul_J_RieulHieuh: number
export const Hangul_J_RieulKiyeog: number
export const Hangul_J_RieulMieum: number
export const Hangul_J_RieulPhieuf: number
export const Hangul_J_RieulPieub: number
export const Hangul_J_RieulSios: number
export const Hangul_J_RieulTieut: number
export const Hangul_J_Sios: number
export const Hangul_J_SsangKiyeog: number
export const Hangul_J_SsangSios: number
export const Hangul_J_Tieut: number
export const Hangul_J_YeorinHieuh: number
export const Hangul_Jamo: number
export const Hangul_Jeonja: number
export const Hangul_Jieuj: number
export const Hangul_Khieuq: number
export const Hangul_Kiyeog: number
export const Hangul_KiyeogSios: number
export const Hangul_KkogjiDalrinIeung: number
export const Hangul_Mieum: number
export const Hangul_MultipleCandidate: number
export const Hangul_Nieun: number
export const Hangul_NieunHieuh: number
export const Hangul_NieunJieuj: number
export const Hangul_O: number
export const Hangul_OE: number
export const Hangul_PanSios: number
export const Hangul_Phieuf: number
export const Hangul_Pieub: number
export const Hangul_PieubSios: number
export const Hangul_PostHanja: number
export const Hangul_PreHanja: number
export const Hangul_PreviousCandidate: number
export const Hangul_Rieul: number
export const Hangul_RieulHieuh: number
export const Hangul_RieulKiyeog: number
export const Hangul_RieulMieum: number
export const Hangul_RieulPhieuf: number
export const Hangul_RieulPieub: number
export const Hangul_RieulSios: number
export const Hangul_RieulTieut: number
export const Hangul_RieulYeorinHieuh: number
export const Hangul_Romaja: number
export const Hangul_SingleCandidate: number
export const Hangul_Sios: number
export const Hangul_Special: number
export const Hangul_SsangDikeud: number
export const Hangul_SsangJieuj: number
export const Hangul_SsangKiyeog: number
export const Hangul_SsangPieub: number
export const Hangul_SsangSios: number
export const Hangul_Start: number
export const Hangul_SunkyeongeumMieum: number
export const Hangul_SunkyeongeumPhieuf: number
export const Hangul_SunkyeongeumPieub: number
export const Hangul_Tieut: number
export const Hangul_U: number
export const Hangul_WA: number
export const Hangul_WAE: number
export const Hangul_WE: number
export const Hangul_WEO: number
export const Hangul_WI: number
export const Hangul_YA: number
export const Hangul_YAE: number
export const Hangul_YE: number
export const Hangul_YEO: number
export const Hangul_YI: number
export const Hangul_YO: number
export const Hangul_YU: number
export const Hangul_YeorinHieuh: number
export const Hangul_switch: number
export const Hankaku: number
export const Hcircumflex: number
export const Hebrew_switch: number
export const Help: number
/**
 * Japanese keyboard support.
 */
export const Henkan: number
/**
 * Japanese keyboard support.
 */
export const Henkan_Mode: number
/**
 * Japanese keyboard support.
 */
export const Hiragana: number
/**
 * Japanese keyboard support.
 */
export const Hiragana_Katakana: number
export const Home: number
export const Hstroke: number
export const Hyper_L: number
export const Hyper_R: number
export const I: number
/**
 * D-Bus interface for IBus config.
 */
export const INTERFACE_CONFIG: string
/**
 * D-Bus interface for IBus engine.
 */
export const INTERFACE_ENGINE: string
/**
 * D-Bus interface for IBus factory.
 */
export const INTERFACE_FACTORY: string
/**
 * D-Bus interface for IBus.
 */
export const INTERFACE_IBUS: string
/**
 * D-Bus interface for IBus input context.
 */
export const INTERFACE_INPUT_CONTEXT: string
/**
 * D-Bus interface for IBus notifications.
 */
export const INTERFACE_NOTIFICATIONS: string
/**
 * D-Bus interface for IBus panel.
 */
export const INTERFACE_PANEL: string
export const ISO_Center_Object: number
export const ISO_Continuous_Underline: number
export const ISO_Discontinuous_Underline: number
export const ISO_Emphasize: number
export const ISO_Enter: number
export const ISO_Fast_Cursor_Down: number
export const ISO_Fast_Cursor_Left: number
export const ISO_Fast_Cursor_Right: number
export const ISO_Fast_Cursor_Up: number
export const ISO_First_Group: number
export const ISO_First_Group_Lock: number
export const ISO_Group_Latch: number
export const ISO_Group_Lock: number
export const ISO_Group_Shift: number
export const ISO_Last_Group: number
export const ISO_Last_Group_Lock: number
export const ISO_Left_Tab: number
export const ISO_Level2_Latch: number
export const ISO_Level3_Latch: number
export const ISO_Level3_Lock: number
export const ISO_Level3_Shift: number
export const ISO_Level5_Latch: number
export const ISO_Level5_Lock: number
export const ISO_Level5_Shift: number
export const ISO_Lock: number
export const ISO_Move_Line_Down: number
export const ISO_Move_Line_Up: number
export const ISO_Next_Group: number
export const ISO_Next_Group_Lock: number
export const ISO_Partial_Line_Down: number
export const ISO_Partial_Line_Up: number
export const ISO_Partial_Space_Left: number
export const ISO_Partial_Space_Right: number
export const ISO_Prev_Group: number
export const ISO_Prev_Group_Lock: number
export const ISO_Release_Both_Margins: number
export const ISO_Release_Margin_Left: number
export const ISO_Release_Margin_Right: number
export const ISO_Set_Margin_Left: number
export const ISO_Set_Margin_Right: number
export const Iabovedot: number
export const Iacute: number
export const Ibelowdot: number
export const Ibreve: number
export const Icircumflex: number
export const Idiaeresis: number
export const Igrave: number
export const Ihook: number
export const Imacron: number
export const Insert: number
export const Iogonek: number
export const Itilde: number
export const J: number
export const Jcircumflex: number
export const K: number
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
export const KEY_Adiaeresis: number
export const KEY_Agrave: number
export const KEY_Ahook: number
export const KEY_Alt_L: number
export const KEY_Alt_R: number
export const KEY_Amacron: number
export const KEY_Aogonek: number
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
export const KEY_B: number
export const KEY_Babovedot: number
export const KEY_BackSpace: number
export const KEY_Begin: number
export const KEY_BounceKeys_Enable: number
export const KEY_Break: number
export const KEY_Byelorussian_SHORTU: number
export const KEY_Byelorussian_shortu: number
export const KEY_C: number
export const KEY_CH: number
export const KEY_C_H: number
export const KEY_C_h: number
export const KEY_Cabovedot: number
export const KEY_Cacute: number
export const KEY_Cancel: number
export const KEY_Caps_Lock: number
export const KEY_Ccaron: number
export const KEY_Ccedilla: number
export const KEY_Ccircumflex: number
export const KEY_Ch: number
export const KEY_Clear: number
export const KEY_Codeinput: number
export const KEY_ColonSign: number
export const KEY_Control_L: number
export const KEY_Control_R: number
export const KEY_CruzeiroSign: number
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
export const KEY_Dabovedot: number
export const KEY_Dcaron: number
export const KEY_Delete: number
export const KEY_DongSign: number
export const KEY_Down: number
export const KEY_Dstroke: number
export const KEY_E: number
export const KEY_ENG: number
export const KEY_ETH: number
export const KEY_EZH: number
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
export const KEY_Emacron: number
export const KEY_End: number
export const KEY_Eogonek: number
export const KEY_Escape: number
export const KEY_Eth: number
export const KEY_Etilde: number
export const KEY_EuroSign: number
export const KEY_Execute: number
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
export const KEY_Find: number
export const KEY_First_Virtual_Screen: number
export const KEY_G: number
export const KEY_Gabovedot: number
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
export const KEY_Hiragana: number
export const KEY_Hiragana_Katakana: number
export const KEY_Home: number
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
export const KEY_Lbelowdot: number
export const KEY_Lcaron: number
export const KEY_Lcedilla: number
export const KEY_Left: number
export const KEY_Linefeed: number
export const KEY_LiraSign: number
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
export const KEY_Massyo: number
export const KEY_Menu: number
export const KEY_Meta_L: number
export const KEY_Meta_R: number
export const KEY_MillSign: number
export const KEY_Mode_switch: number
export const KEY_MouseKeys_Accel_Enable: number
export const KEY_MouseKeys_Enable: number
export const KEY_Muhenkan: number
export const KEY_Multi_key: number
export const KEY_MultipleCandidate: number
export const KEY_N: number
export const KEY_Nacute: number
export const KEY_NairaSign: number
export const KEY_Ncaron: number
export const KEY_Ncedilla: number
export const KEY_NewSheqelSign: number
export const KEY_Next: number
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
export const KEY_Oslash: number
export const KEY_Otilde: number
export const KEY_Overlay1_Enable: number
export const KEY_Overlay2_Enable: number
export const KEY_P: number
export const KEY_Pabovedot: number
export const KEY_Page_Down: number
export const KEY_Page_Up: number
export const KEY_Pause: number
export const KEY_PesetaSign: number
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
export const KEY_Redo: number
export const KEY_RepeatKeys_Enable: number
export const KEY_Return: number
export const KEY_Right: number
export const KEY_Romaji: number
export const KEY_RupeeSign: number
export const KEY_S: number
export const KEY_SCHWA: number
export const KEY_Sabovedot: number
export const KEY_Sacute: number
export const KEY_Scaron: number
export const KEY_Scedilla: number
export const KEY_Scircumflex: number
export const KEY_Scroll_Lock: number
export const KEY_Select: number
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
export const KEY_SingleCandidate: number
export const KEY_Sinh_a: number
export const KEY_Sinh_aa: number
export const KEY_Sinh_aa2: number
export const KEY_Sinh_ae: number
export const KEY_Sinh_ae2: number
export const KEY_Sinh_aee: number
export const KEY_Sinh_aee2: number
export const KEY_Sinh_ai: number
export const KEY_Sinh_ai2: number
export const KEY_Sinh_al: number
export const KEY_Sinh_au: number
export const KEY_Sinh_au2: number
export const KEY_Sinh_ba: number
export const KEY_Sinh_bha: number
export const KEY_Sinh_ca: number
export const KEY_Sinh_cha: number
export const KEY_Sinh_dda: number
export const KEY_Sinh_ddha: number
export const KEY_Sinh_dha: number
export const KEY_Sinh_dhha: number
export const KEY_Sinh_e: number
export const KEY_Sinh_e2: number
export const KEY_Sinh_ee: number
export const KEY_Sinh_ee2: number
export const KEY_Sinh_fa: number
export const KEY_Sinh_ga: number
export const KEY_Sinh_gha: number
export const KEY_Sinh_h2: number
export const KEY_Sinh_ha: number
export const KEY_Sinh_i: number
export const KEY_Sinh_i2: number
export const KEY_Sinh_ii: number
export const KEY_Sinh_ii2: number
export const KEY_Sinh_ja: number
export const KEY_Sinh_jha: number
export const KEY_Sinh_jnya: number
export const KEY_Sinh_ka: number
export const KEY_Sinh_kha: number
export const KEY_Sinh_kunddaliya: number
export const KEY_Sinh_la: number
export const KEY_Sinh_lla: number
export const KEY_Sinh_lu: number
export const KEY_Sinh_lu2: number
export const KEY_Sinh_luu: number
export const KEY_Sinh_luu2: number
export const KEY_Sinh_ma: number
export const KEY_Sinh_mba: number
export const KEY_Sinh_na: number
export const KEY_Sinh_ndda: number
export const KEY_Sinh_ndha: number
export const KEY_Sinh_ng: number
export const KEY_Sinh_ng2: number
export const KEY_Sinh_nga: number
export const KEY_Sinh_nja: number
export const KEY_Sinh_nna: number
export const KEY_Sinh_nya: number
export const KEY_Sinh_o: number
export const KEY_Sinh_o2: number
export const KEY_Sinh_oo: number
export const KEY_Sinh_oo2: number
export const KEY_Sinh_pa: number
export const KEY_Sinh_pha: number
export const KEY_Sinh_ra: number
export const KEY_Sinh_ri: number
export const KEY_Sinh_rii: number
export const KEY_Sinh_ru2: number
export const KEY_Sinh_ruu2: number
export const KEY_Sinh_sa: number
export const KEY_Sinh_sha: number
export const KEY_Sinh_ssha: number
export const KEY_Sinh_tha: number
export const KEY_Sinh_thha: number
export const KEY_Sinh_tta: number
export const KEY_Sinh_ttha: number
export const KEY_Sinh_u: number
export const KEY_Sinh_u2: number
export const KEY_Sinh_uu: number
export const KEY_Sinh_uu2: number
export const KEY_Sinh_va: number
export const KEY_Sinh_ya: number
export const KEY_SlowKeys_Enable: number
export const KEY_StickyKeys_Enable: number
export const KEY_Super_L: number
export const KEY_Super_R: number
export const KEY_Sys_Req: number
export const KEY_T: number
export const KEY_THORN: number
export const KEY_Tab: number
export const KEY_Tabovedot: number
export const KEY_Tcaron: number
export const KEY_Tcedilla: number
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
export const KEY_Touroku: number
export const KEY_Tslash: number
export const KEY_U: number
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
export const KEY_Uogonek: number
export const KEY_Up: number
export const KEY_Uring: number
export const KEY_Utilde: number
export const KEY_V: number
export const KEY_VoidSymbol: number
export const KEY_W: number
export const KEY_Wacute: number
export const KEY_Wcircumflex: number
export const KEY_Wdiaeresis: number
export const KEY_Wgrave: number
export const KEY_WonSign: number
export const KEY_X: number
export const KEY_Xabovedot: number
export const KEY_Y: number
export const KEY_Yacute: number
export const KEY_Ybelowdot: number
export const KEY_Ycircumflex: number
export const KEY_Ydiaeresis: number
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
export const KEY_c_h: number
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
export const KEY_ch: number
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
export const KEY_dead_greek: number
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
export const KEY_ezh: number
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
export const KP_0: number
export const KP_1: number
export const KP_2: number
export const KP_3: number
export const KP_4: number
export const KP_5: number
export const KP_6: number
export const KP_7: number
export const KP_8: number
export const KP_9: number
export const KP_Add: number
export const KP_Begin: number
export const KP_Decimal: number
export const KP_Delete: number
export const KP_Divide: number
export const KP_Down: number
export const KP_End: number
export const KP_Enter: number
export const KP_Equal: number
export const KP_F1: number
export const KP_F2: number
export const KP_F3: number
export const KP_F4: number
export const KP_Home: number
export const KP_Insert: number
export const KP_Left: number
export const KP_Multiply: number
export const KP_Next: number
export const KP_Page_Down: number
export const KP_Page_Up: number
export const KP_Prior: number
export const KP_Right: number
export const KP_Separator: number
export const KP_Space: number
export const KP_Subtract: number
export const KP_Tab: number
export const KP_Up: number
export const Kana_Lock: number
export const Kana_Shift: number
/**
 * Japanese keyboard support.
 */
export const Kanji: number
export const Kanji_Bangou: number
/**
 * Japanese keyboard support.
 */
export const Katakana: number
export const Kcedilla: number
export const Korean_Won: number
export const L: number
export const L1: number
export const L10: number
export const L2: number
export const L3: number
export const L4: number
export const L5: number
export const L6: number
export const L7: number
export const L8: number
export const L9: number
export const Lacute: number
export const Last_Virtual_Screen: number
export const Lbelowdot: number
export const Lcaron: number
export const Lcedilla: number
export const Left: number
export const Linefeed: number
export const LiraSign: number
export const Lstroke: number
export const M: number
/**
 * IBus major version.
 */
export const MAJOR_VERSION: number
export const MAX_COMPOSE_LEN: number
/**
 * IBus micro version.
 */
export const MICRO_VERSION: number
/**
 * IBus minor version.
 */
export const MINOR_VERSION: number
export const Mabovedot: number
export const Macedonia_DSE: number
export const Macedonia_GJE: number
export const Macedonia_KJE: number
export const Macedonia_dse: number
export const Macedonia_gje: number
export const Macedonia_kje: number
export const Mae_Koho: number
export const Massyo: number
export const Menu: number
export const Meta_L: number
export const Meta_R: number
export const MillSign: number
export const Mode_switch: number
export const MouseKeys_Accel_Enable: number
export const MouseKeys_Enable: number
/**
 * Japanese keyboard support.
 */
export const Muhenkan: number
/**
 * Key for composing characters.
 * A.k.a. Compose Key.
 */
export const Multi_key: number
export const MultipleCandidate: number
export const N: number
export const Nacute: number
export const NairaSign: number
export const Ncaron: number
export const Ncedilla: number
export const NewSheqelSign: number
export const Next: number
export const Next_Virtual_Screen: number
export const Ntilde: number
export const Num_Lock: number
export const O: number
export const OE: number
export const Oacute: number
export const Obarred: number
export const Obelowdot: number
export const Ocaron: number
export const Ocircumflex: number
export const Ocircumflexacute: number
export const Ocircumflexbelowdot: number
export const Ocircumflexgrave: number
export const Ocircumflexhook: number
export const Ocircumflextilde: number
export const Odiaeresis: number
export const Odoubleacute: number
export const Ograve: number
export const Ohook: number
export const Ohorn: number
export const Ohornacute: number
export const Ohornbelowdot: number
export const Ohorngrave: number
export const Ohornhook: number
export const Ohorntilde: number
export const Omacron: number
export const Ooblique: number
export const Oslash: number
export const Otilde: number
export const Overlay1_Enable: number
export const Overlay2_Enable: number
export const P: number
/**
 * D-Bus path for IBus config.
 */
export const PATH_CONFIG: string
/**
 * D-Bus path for IBus factory.
 */
export const PATH_FACTORY: string
/**
 * D-Bus path for IBus
 */
export const PATH_IBUS: string
/**
 * Template of D-Bus path for IBus input context.
 */
export const PATH_INPUT_CONTEXT: string
/**
 * D-Bus path for IBus notifications.
 */
export const PATH_NOTIFICATIONS: string
/**
 * D-Bus path for IBus panel.
 */
export const PATH_PANEL: string
export const Pabovedot: number
export const Page_Down: number
export const Page_Up: number
export const Pause: number
export const PesetaSign: number
export const Pointer_Accelerate: number
export const Pointer_Button1: number
export const Pointer_Button2: number
export const Pointer_Button3: number
export const Pointer_Button4: number
export const Pointer_Button5: number
export const Pointer_Button_Dflt: number
export const Pointer_DblClick1: number
export const Pointer_DblClick2: number
export const Pointer_DblClick3: number
export const Pointer_DblClick4: number
export const Pointer_DblClick5: number
export const Pointer_DblClick_Dflt: number
export const Pointer_DfltBtnNext: number
export const Pointer_DfltBtnPrev: number
export const Pointer_Down: number
export const Pointer_DownLeft: number
export const Pointer_DownRight: number
export const Pointer_Drag1: number
export const Pointer_Drag2: number
export const Pointer_Drag3: number
export const Pointer_Drag4: number
export const Pointer_Drag5: number
export const Pointer_Drag_Dflt: number
export const Pointer_EnableKeys: number
export const Pointer_Left: number
export const Pointer_Right: number
export const Pointer_Up: number
export const Pointer_UpLeft: number
export const Pointer_UpRight: number
export const Prev_Virtual_Screen: number
export const PreviousCandidate: number
export const Print: number
export const Prior: number
export const Q: number
export const R: number
export const R1: number
export const R10: number
export const R11: number
export const R12: number
export const R13: number
export const R14: number
export const R15: number
export const R2: number
export const R3: number
export const R4: number
export const R5: number
export const R6: number
export const R7: number
export const R8: number
export const R9: number
export const Racute: number
export const Rcaron: number
export const Rcedilla: number
export const Redo: number
export const RepeatKeys_Enable: number
export const Return: number
export const Right: number
/**
 * Japanese keyboard support.
 */
export const Romaji: number
export const RupeeSign: number
export const S: number
export const SCHWA: number
/**
 * Address of IBus config service.
 */
export const SERVICE_CONFIG: string
/**
 * Address of IBus service.
 */
export const SERVICE_IBUS: string
/**
 * Address of IBus notification service.
 */
export const SERVICE_NOTIFICATIONS: string
/**
 * Address of IBus panel service.
 */
export const SERVICE_PANEL: string
export const Sabovedot: number
export const Sacute: number
export const Scaron: number
export const Scedilla: number
export const Scircumflex: number
export const Scroll_Lock: number
export const Select: number
export const Serbian_DJE: number
export const Serbian_DZE: number
export const Serbian_JE: number
export const Serbian_LJE: number
export const Serbian_NJE: number
export const Serbian_TSHE: number
export const Serbian_dje: number
export const Serbian_dze: number
export const Serbian_je: number
export const Serbian_lje: number
export const Serbian_nje: number
export const Serbian_tshe: number
export const Shift_L: number
export const Shift_Lock: number
export const Shift_R: number
export const SingleCandidate: number
export const SlowKeys_Enable: number
export const StickyKeys_Enable: number
export const Super_L: number
export const Super_R: number
export const Sys_Req: number
export const T: number
export const THORN: number
export const Tab: number
export const Tabovedot: number
export const Tcaron: number
export const Tcedilla: number
export const Terminate_Server: number
export const Thai_baht: number
export const Thai_bobaimai: number
export const Thai_chochan: number
export const Thai_chochang: number
export const Thai_choching: number
export const Thai_chochoe: number
export const Thai_dochada: number
export const Thai_dodek: number
export const Thai_fofa: number
export const Thai_fofan: number
export const Thai_hohip: number
export const Thai_honokhuk: number
export const Thai_khokhai: number
export const Thai_khokhon: number
export const Thai_khokhuat: number
export const Thai_khokhwai: number
export const Thai_khorakhang: number
export const Thai_kokai: number
export const Thai_lakkhangyao: number
export const Thai_lekchet: number
export const Thai_lekha: number
export const Thai_lekhok: number
export const Thai_lekkao: number
export const Thai_leknung: number
export const Thai_lekpaet: number
export const Thai_leksam: number
export const Thai_leksi: number
export const Thai_leksong: number
export const Thai_leksun: number
export const Thai_lochula: number
export const Thai_loling: number
export const Thai_lu: number
export const Thai_maichattawa: number
export const Thai_maiek: number
export const Thai_maihanakat: number
export const Thai_maihanakat_maitho: number
export const Thai_maitaikhu: number
export const Thai_maitho: number
export const Thai_maitri: number
export const Thai_maiyamok: number
export const Thai_moma: number
export const Thai_ngongu: number
export const Thai_nikhahit: number
export const Thai_nonen: number
export const Thai_nonu: number
export const Thai_oang: number
export const Thai_paiyannoi: number
export const Thai_phinthu: number
export const Thai_phophan: number
export const Thai_phophung: number
export const Thai_phosamphao: number
export const Thai_popla: number
export const Thai_rorua: number
export const Thai_ru: number
export const Thai_saraa: number
export const Thai_saraaa: number
export const Thai_saraae: number
export const Thai_saraaimaimalai: number
export const Thai_saraaimaimuan: number
export const Thai_saraam: number
export const Thai_sarae: number
export const Thai_sarai: number
export const Thai_saraii: number
export const Thai_sarao: number
export const Thai_sarau: number
export const Thai_saraue: number
export const Thai_sarauee: number
export const Thai_sarauu: number
export const Thai_sorusi: number
export const Thai_sosala: number
export const Thai_soso: number
export const Thai_sosua: number
export const Thai_thanthakhat: number
export const Thai_thonangmontho: number
export const Thai_thophuthao: number
export const Thai_thothahan: number
export const Thai_thothan: number
export const Thai_thothong: number
export const Thai_thothung: number
export const Thai_topatak: number
export const Thai_totao: number
export const Thai_wowaen: number
export const Thai_yoyak: number
export const Thai_yoying: number
export const Thorn: number
export const Touroku: number
export const Tslash: number
export const U: number
export const Uacute: number
export const Ubelowdot: number
export const Ubreve: number
export const Ucircumflex: number
export const Udiaeresis: number
export const Udoubleacute: number
export const Ugrave: number
export const Uhook: number
export const Uhorn: number
export const Uhornacute: number
export const Uhornbelowdot: number
export const Uhorngrave: number
export const Uhornhook: number
export const Uhorntilde: number
export const Ukrainian_GHE_WITH_UPTURN: number
export const Ukrainian_I: number
export const Ukrainian_IE: number
export const Ukrainian_YI: number
export const Ukrainian_ghe_with_upturn: number
export const Ukrainian_i: number
export const Ukrainian_ie: number
export const Ukrainian_yi: number
export const Ukranian_I: number
export const Ukranian_JE: number
export const Ukranian_YI: number
export const Ukranian_i: number
export const Ukranian_je: number
export const Ukranian_yi: number
export const Umacron: number
export const Undo: number
export const Uogonek: number
export const Up: number
export const Uring: number
export const Utilde: number
export const V: number
export const VoidSymbol: number
export const W: number
export const Wacute: number
export const Wcircumflex: number
export const Wdiaeresis: number
export const Wgrave: number
export const WonSign: number
export const X: number
export const Xabovedot: number
export const Y: number
export const Yacute: number
export const Ybelowdot: number
export const Ycircumflex: number
export const Ydiaeresis: number
export const Ygrave: number
export const Yhook: number
export const Ytilde: number
export const Z: number
export const Zabovedot: number
export const Zacute: number
export const Zcaron: number
export const Zen_Koho: number
export const Zenkaku: number
export const Zenkaku_Hankaku: number
export const Zstroke: number
export const a: number
export const aacute: number
export const abelowdot: number
export const abovedot: number
export const abreve: number
export const abreveacute: number
export const abrevebelowdot: number
export const abrevegrave: number
export const abrevehook: number
export const abrevetilde: number
export const acircumflex: number
export const acircumflexacute: number
export const acircumflexbelowdot: number
export const acircumflexgrave: number
export const acircumflexhook: number
export const acircumflextilde: number
export const acute: number
export const adiaeresis: number
export const ae: number
export const agrave: number
export const ahook: number
export const amacron: number
export const ampersand: number
export const aogonek: number
export const apostrophe: number
export const approxeq: number
export const approximate: number
export const aring: number
export const asciicircum: number
export const asciitilde: number
export const asterisk: number
export const at: number
export const atilde: number
export const b: number
export const babovedot: number
export const backslash: number
export const ballotcross: number
export const bar: number
export const because: number
export const blank: number
export const botintegral: number
export const botleftparens: number
export const botleftsqbracket: number
export const botleftsummation: number
export const botrightparens: number
export const botrightsqbracket: number
export const botrightsummation: number
export const bott: number
export const botvertsummationconnector: number
export const braceleft: number
export const braceright: number
export const bracketleft: number
export const bracketright: number
export const braille_blank: number
export const braille_dot_1: number
export const braille_dot_10: number
export const braille_dot_2: number
export const braille_dot_3: number
export const braille_dot_4: number
export const braille_dot_5: number
export const braille_dot_6: number
export const braille_dot_7: number
export const braille_dot_8: number
export const braille_dot_9: number
export const braille_dots_1: number
export const braille_dots_12: number
export const braille_dots_123: number
export const braille_dots_1234: number
export const braille_dots_12345: number
export const braille_dots_123456: number
export const braille_dots_1234567: number
export const braille_dots_12345678: number
export const braille_dots_1234568: number
export const braille_dots_123457: number
export const braille_dots_1234578: number
export const braille_dots_123458: number
export const braille_dots_12346: number
export const braille_dots_123467: number
export const braille_dots_1234678: number
export const braille_dots_123468: number
export const braille_dots_12347: number
export const braille_dots_123478: number
export const braille_dots_12348: number
export const braille_dots_1235: number
export const braille_dots_12356: number
export const braille_dots_123567: number
export const braille_dots_1235678: number
export const braille_dots_123568: number
export const braille_dots_12357: number
export const braille_dots_123578: number
export const braille_dots_12358: number
export const braille_dots_1236: number
export const braille_dots_12367: number
export const braille_dots_123678: number
export const braille_dots_12368: number
export const braille_dots_1237: number
export const braille_dots_12378: number
export const braille_dots_1238: number
export const braille_dots_124: number
export const braille_dots_1245: number
export const braille_dots_12456: number
export const braille_dots_124567: number
export const braille_dots_1245678: number
export const braille_dots_124568: number
export const braille_dots_12457: number
export const braille_dots_124578: number
export const braille_dots_12458: number
export const braille_dots_1246: number
export const braille_dots_12467: number
export const braille_dots_124678: number
export const braille_dots_12468: number
export const braille_dots_1247: number
export const braille_dots_12478: number
export const braille_dots_1248: number
export const braille_dots_125: number
export const braille_dots_1256: number
export const braille_dots_12567: number
export const braille_dots_125678: number
export const braille_dots_12568: number
export const braille_dots_1257: number
export const braille_dots_12578: number
export const braille_dots_1258: number
export const braille_dots_126: number
export const braille_dots_1267: number
export const braille_dots_12678: number
export const braille_dots_1268: number
export const braille_dots_127: number
export const braille_dots_1278: number
export const braille_dots_128: number
export const braille_dots_13: number
export const braille_dots_134: number
export const braille_dots_1345: number
export const braille_dots_13456: number
export const braille_dots_134567: number
export const braille_dots_1345678: number
export const braille_dots_134568: number
export const braille_dots_13457: number
export const braille_dots_134578: number
export const braille_dots_13458: number
export const braille_dots_1346: number
export const braille_dots_13467: number
export const braille_dots_134678: number
export const braille_dots_13468: number
export const braille_dots_1347: number
export const braille_dots_13478: number
export const braille_dots_1348: number
export const braille_dots_135: number
export const braille_dots_1356: number
export const braille_dots_13567: number
export const braille_dots_135678: number
export const braille_dots_13568: number
export const braille_dots_1357: number
export const braille_dots_13578: number
export const braille_dots_1358: number
export const braille_dots_136: number
export const braille_dots_1367: number
export const braille_dots_13678: number
export const braille_dots_1368: number
export const braille_dots_137: number
export const braille_dots_1378: number
export const braille_dots_138: number
export const braille_dots_14: number
export const braille_dots_145: number
export const braille_dots_1456: number
export const braille_dots_14567: number
export const braille_dots_145678: number
export const braille_dots_14568: number
export const braille_dots_1457: number
export const braille_dots_14578: number
export const braille_dots_1458: number
export const braille_dots_146: number
export const braille_dots_1467: number
export const braille_dots_14678: number
export const braille_dots_1468: number
export const braille_dots_147: number
export const braille_dots_1478: number
export const braille_dots_148: number
export const braille_dots_15: number
export const braille_dots_156: number
export const braille_dots_1567: number
export const braille_dots_15678: number
export const braille_dots_1568: number
export const braille_dots_157: number
export const braille_dots_1578: number
export const braille_dots_158: number
export const braille_dots_16: number
export const braille_dots_167: number
export const braille_dots_1678: number
export const braille_dots_168: number
export const braille_dots_17: number
export const braille_dots_178: number
export const braille_dots_18: number
export const braille_dots_2: number
export const braille_dots_23: number
export const braille_dots_234: number
export const braille_dots_2345: number
export const braille_dots_23456: number
export const braille_dots_234567: number
export const braille_dots_2345678: number
export const braille_dots_234568: number
export const braille_dots_23457: number
export const braille_dots_234578: number
export const braille_dots_23458: number
export const braille_dots_2346: number
export const braille_dots_23467: number
export const braille_dots_234678: number
export const braille_dots_23468: number
export const braille_dots_2347: number
export const braille_dots_23478: number
export const braille_dots_2348: number
export const braille_dots_235: number
export const braille_dots_2356: number
export const braille_dots_23567: number
export const braille_dots_235678: number
export const braille_dots_23568: number
export const braille_dots_2357: number
export const braille_dots_23578: number
export const braille_dots_2358: number
export const braille_dots_236: number
export const braille_dots_2367: number
export const braille_dots_23678: number
export const braille_dots_2368: number
export const braille_dots_237: number
export const braille_dots_2378: number
export const braille_dots_238: number
export const braille_dots_24: number
export const braille_dots_245: number
export const braille_dots_2456: number
export const braille_dots_24567: number
export const braille_dots_245678: number
export const braille_dots_24568: number
export const braille_dots_2457: number
export const braille_dots_24578: number
export const braille_dots_2458: number
export const braille_dots_246: number
export const braille_dots_2467: number
export const braille_dots_24678: number
export const braille_dots_2468: number
export const braille_dots_247: number
export const braille_dots_2478: number
export const braille_dots_248: number
export const braille_dots_25: number
export const braille_dots_256: number
export const braille_dots_2567: number
export const braille_dots_25678: number
export const braille_dots_2568: number
export const braille_dots_257: number
export const braille_dots_2578: number
export const braille_dots_258: number
export const braille_dots_26: number
export const braille_dots_267: number
export const braille_dots_2678: number
export const braille_dots_268: number
export const braille_dots_27: number
export const braille_dots_278: number
export const braille_dots_28: number
export const braille_dots_3: number
export const braille_dots_34: number
export const braille_dots_345: number
export const braille_dots_3456: number
export const braille_dots_34567: number
export const braille_dots_345678: number
export const braille_dots_34568: number
export const braille_dots_3457: number
export const braille_dots_34578: number
export const braille_dots_3458: number
export const braille_dots_346: number
export const braille_dots_3467: number
export const braille_dots_34678: number
export const braille_dots_3468: number
export const braille_dots_347: number
export const braille_dots_3478: number
export const braille_dots_348: number
export const braille_dots_35: number
export const braille_dots_356: number
export const braille_dots_3567: number
export const braille_dots_35678: number
export const braille_dots_3568: number
export const braille_dots_357: number
export const braille_dots_3578: number
export const braille_dots_358: number
export const braille_dots_36: number
export const braille_dots_367: number
export const braille_dots_3678: number
export const braille_dots_368: number
export const braille_dots_37: number
export const braille_dots_378: number
export const braille_dots_38: number
export const braille_dots_4: number
export const braille_dots_45: number
export const braille_dots_456: number
export const braille_dots_4567: number
export const braille_dots_45678: number
export const braille_dots_4568: number
export const braille_dots_457: number
export const braille_dots_4578: number
export const braille_dots_458: number
export const braille_dots_46: number
export const braille_dots_467: number
export const braille_dots_4678: number
export const braille_dots_468: number
export const braille_dots_47: number
export const braille_dots_478: number
export const braille_dots_48: number
export const braille_dots_5: number
export const braille_dots_56: number
export const braille_dots_567: number
export const braille_dots_5678: number
export const braille_dots_568: number
export const braille_dots_57: number
export const braille_dots_578: number
export const braille_dots_58: number
export const braille_dots_6: number
export const braille_dots_67: number
export const braille_dots_678: number
export const braille_dots_68: number
export const braille_dots_7: number
export const braille_dots_78: number
export const braille_dots_8: number
export const breve: number
export const brokenbar: number
export const c: number
export const cabovedot: number
export const cacute: number
export const careof: number
export const caret: number
export const caron: number
export const ccaron: number
export const ccedilla: number
export const ccircumflex: number
export const cedilla: number
export const cent: number
export const checkerboard: number
export const checkmark: number
export const circle: number
export const club: number
export const colon: number
export const comma: number
export const containsas: number
export const copyright: number
export const cr: number
export const crossinglines: number
export const cuberoot: number
export const currency: number
export const cursor: number
export const d: number
export const dabovedot: number
export const dagger: number
export const dcaron: number
export const dead_abovecomma: number
export const dead_abovedot: number
export const dead_abovereversedcomma: number
export const dead_abovering: number
export const dead_acute: number
export const dead_belowbreve: number
export const dead_belowcircumflex: number
export const dead_belowdiaeresis: number
export const dead_belowdot: number
export const dead_belowmacron: number
export const dead_belowring: number
export const dead_belowtilde: number
export const dead_breve: number
export const dead_caron: number
export const dead_cedilla: number
export const dead_circumflex: number
export const dead_dasia: number
export const dead_diaeresis: number
export const dead_doubleacute: number
export const dead_grave: number
export const dead_hook: number
export const dead_horn: number
export const dead_iota: number
export const dead_macron: number
export const dead_ogonek: number
export const dead_perispomeni: number
export const dead_psili: number
export const dead_semivoiced_sound: number
export const dead_stroke: number
export const dead_tilde: number
export const dead_voiced_sound: number
export const decimalpoint: number
export const degree: number
export const diaeresis: number
export const diamond: number
export const digitspace: number
export const dintegral: number
export const division: number
export const dollar: number
export const doubbaselinedot: number
export const doubleacute: number
export const doubledagger: number
export const doublelowquotemark: number
export const downarrow: number
export const downcaret: number
export const downshoe: number
export const downstile: number
export const downtack: number
export const dstroke: number
export const e: number
export const eabovedot: number
export const eacute: number
export const ebelowdot: number
export const ecaron: number
export const ecircumflex: number
export const ecircumflexacute: number
export const ecircumflexbelowdot: number
export const ecircumflexgrave: number
export const ecircumflexhook: number
export const ecircumflextilde: number
export const ediaeresis: number
export const egrave: number
export const ehook: number
export const eightsubscript: number
export const eightsuperior: number
export const elementof: number
export const ellipsis: number
export const em3space: number
export const em4space: number
export const emacron: number
export const emdash: number
export const emfilledcircle: number
export const emfilledrect: number
export const emopencircle: number
export const emopenrectangle: number
export const emptyset: number
export const emspace: number
export const endash: number
export const enfilledcircbullet: number
export const enfilledsqbullet: number
export const eng: number
export const enopencircbullet: number
export const enopensquarebullet: number
export const enspace: number
export const eogonek: number
export const equal: number
export const eth: number
export const etilde: number
export const exclam: number
export const exclamdown: number
export const f: number
export const fabovedot: number
export const femalesymbol: number
export const ff: number
export const figdash: number
export const filledlefttribullet: number
export const filledrectbullet: number
export const filledrighttribullet: number
export const filledtribulletdown: number
export const filledtribulletup: number
export const fiveeighths: number
export const fivesixths: number
export const fivesubscript: number
export const fivesuperior: number
export const fourfifths: number
export const foursubscript: number
export const foursuperior: number
export const fourthroot: number
export const function_: number
export const g: number
export const gabovedot: number
export const gbreve: number
export const gcaron: number
export const gcedilla: number
export const gcircumflex: number
export const grave: number
export const greater: number
export const greaterthanequal: number
export const guillemotleft: number
export const guillemotright: number
export const h: number
export const hairspace: number
export const hcircumflex: number
export const heart: number
export const hebrew_aleph: number
export const hebrew_ayin: number
export const hebrew_bet: number
export const hebrew_beth: number
export const hebrew_chet: number
export const hebrew_dalet: number
export const hebrew_daleth: number
export const hebrew_doublelowline: number
export const hebrew_finalkaph: number
export const hebrew_finalmem: number
export const hebrew_finalnun: number
export const hebrew_finalpe: number
export const hebrew_finalzade: number
export const hebrew_finalzadi: number
export const hebrew_gimel: number
export const hebrew_gimmel: number
export const hebrew_he: number
export const hebrew_het: number
export const hebrew_kaph: number
export const hebrew_kuf: number
export const hebrew_lamed: number
export const hebrew_mem: number
export const hebrew_nun: number
export const hebrew_pe: number
export const hebrew_qoph: number
export const hebrew_resh: number
export const hebrew_samech: number
export const hebrew_samekh: number
export const hebrew_shin: number
export const hebrew_taf: number
export const hebrew_taw: number
export const hebrew_tet: number
export const hebrew_teth: number
export const hebrew_waw: number
export const hebrew_yod: number
export const hebrew_zade: number
export const hebrew_zadi: number
export const hebrew_zain: number
export const hebrew_zayin: number
export const hexagram: number
export const horizconnector: number
export const horizlinescan1: number
export const horizlinescan3: number
export const horizlinescan5: number
export const horizlinescan7: number
export const horizlinescan9: number
export const hstroke: number
export const ht: number
export const hyphen: number
export const i: number
export const iacute: number
export const ibelowdot: number
export const ibreve: number
export const icircumflex: number
export const identical: number
export const idiaeresis: number
export const idotless: number
export const ifonlyif: number
export const igrave: number
export const ihook: number
export const imacron: number
export const implies: number
export const includedin: number
export const includes: number
export const infinity: number
export const integral: number
export const intersection: number
export const iogonek: number
export const itilde: number
export const j: number
export const jcircumflex: number
export const jot: number
export const k: number
export const kana_A: number
export const kana_CHI: number
export const kana_E: number
export const kana_FU: number
export const kana_HA: number
export const kana_HE: number
export const kana_HI: number
export const kana_HO: number
export const kana_HU: number
export const kana_I: number
export const kana_KA: number
export const kana_KE: number
export const kana_KI: number
export const kana_KO: number
export const kana_KU: number
export const kana_MA: number
export const kana_ME: number
export const kana_MI: number
export const kana_MO: number
export const kana_MU: number
export const kana_N: number
export const kana_NA: number
export const kana_NE: number
export const kana_NI: number
export const kana_NO: number
export const kana_NU: number
export const kana_O: number
export const kana_RA: number
export const kana_RE: number
export const kana_RI: number
export const kana_RO: number
export const kana_RU: number
export const kana_SA: number
export const kana_SE: number
export const kana_SHI: number
export const kana_SO: number
export const kana_SU: number
export const kana_TA: number
export const kana_TE: number
export const kana_TI: number
export const kana_TO: number
export const kana_TSU: number
export const kana_TU: number
export const kana_U: number
export const kana_WA: number
export const kana_WO: number
export const kana_YA: number
export const kana_YO: number
export const kana_YU: number
export const kana_a: number
export const kana_closingbracket: number
export const kana_comma: number
export const kana_conjunctive: number
export const kana_e: number
export const kana_fullstop: number
export const kana_i: number
export const kana_middledot: number
export const kana_o: number
export const kana_openingbracket: number
export const kana_switch: number
export const kana_tsu: number
export const kana_tu: number
export const kana_u: number
export const kana_ya: number
export const kana_yo: number
export const kana_yu: number
export const kappa: number
export const kcedilla: number
export const kra: number
export const l: number
export const lacute: number
export const latincross: number
export const lbelowdot: number
export const lcaron: number
export const lcedilla: number
export const leftanglebracket: number
export const leftarrow: number
export const leftcaret: number
export const leftdoublequotemark: number
export const leftmiddlecurlybrace: number
export const leftopentriangle: number
export const leftpointer: number
export const leftradical: number
export const leftshoe: number
export const leftsinglequotemark: number
export const leftt: number
export const lefttack: number
export const less: number
export const lessthanequal: number
export const lf: number
export const logicaland: number
export const logicalor: number
export const lowleftcorner: number
export const lowrightcorner: number
export const lstroke: number
export const m: number
export const mabovedot: number
export const macron: number
export const malesymbol: number
export const maltesecross: number
export const marker: number
export const masculine: number
export const minus: number
export const minutes: number
export const mu: number
export const multiply: number
export const musicalflat: number
export const musicalsharp: number
export const n: number
export const nabla: number
export const nacute: number
export const ncaron: number
export const ncedilla: number
export const ninesubscript: number
export const ninesuperior: number
export const nl: number
export const nobreakspace: number
export const notapproxeq: number
export const notelementof: number
export const notequal: number
export const notidentical: number
export const notsign: number
export const ntilde: number
export const numbersign: number
export const numerosign: number
export const o: number
export const oacute: number
export const obarred: number
export const obelowdot: number
export const ocaron: number
export const ocircumflex: number
export const ocircumflexacute: number
export const ocircumflexbelowdot: number
export const ocircumflexgrave: number
export const ocircumflexhook: number
export const ocircumflextilde: number
export const odiaeresis: number
export const odoubleacute: number
export const oe: number
export const ogonek: number
export const ograve: number
export const ohook: number
export const ohorn: number
export const ohornacute: number
export const ohornbelowdot: number
export const ohorngrave: number
export const ohornhook: number
export const ohorntilde: number
export const omacron: number
export const oneeighth: number
export const onefifth: number
export const onehalf: number
export const onequarter: number
export const onesixth: number
export const onesubscript: number
export const onesuperior: number
export const onethird: number
export const ooblique: number
export const openrectbullet: number
export const openstar: number
export const opentribulletdown: number
export const opentribulletup: number
export const ordfeminine: number
export const oslash: number
export const otilde: number
export const overbar: number
export const overline: number
export const p: number
export const pabovedot: number
export const paragraph: number
export const parenleft: number
export const parenright: number
export const partdifferential: number
export const partialderivative: number
export const percent: number
export const period: number
export const periodcentered: number
export const phonographcopyright: number
export const plus: number
export const plusminus: number
export const prescription: number
export const prolongedsound: number
export const punctspace: number
export const q: number
export const quad: number
export const question: number
export const questiondown: number
export const quotedbl: number
export const quoteleft: number
export const quoteright: number
export const r: number
export const racute: number
export const radical: number
export const rcaron: number
export const rcedilla: number
export const registered: number
export const rightanglebracket: number
export const rightarrow: number
export const rightcaret: number
export const rightdoublequotemark: number
export const rightmiddlecurlybrace: number
export const rightmiddlesummation: number
export const rightopentriangle: number
export const rightpointer: number
export const rightshoe: number
export const rightsinglequotemark: number
export const rightt: number
export const righttack: number
export const s: number
export const sabovedot: number
export const sacute: number
export const scaron: number
export const scedilla: number
export const schwa: number
export const scircumflex: number
export const script_switch: number
export const seconds: number
export const section: number
export const semicolon: number
export const semivoicedsound: number
export const seveneighths: number
export const sevensubscript: number
export const sevensuperior: number
export const signaturemark: number
export const signifblank: number
export const similarequal: number
export const singlelowquotemark: number
export const sixsubscript: number
export const sixsuperior: number
export const slash: number
export const soliddiamond: number
export const space: number
export const squareroot: number
export const ssharp: number
export const sterling: number
export const stricteq: number
export const t: number
export const tabovedot: number
export const tcaron: number
export const tcedilla: number
export const telephone: number
export const telephonerecorder: number
export const therefore: number
export const thinspace: number
export const thorn: number
export const threeeighths: number
export const threefifths: number
export const threequarters: number
export const threesubscript: number
export const threesuperior: number
export const tintegral: number
export const topintegral: number
export const topleftparens: number
export const topleftradical: number
export const topleftsqbracket: number
export const topleftsummation: number
export const toprightparens: number
export const toprightsqbracket: number
export const toprightsummation: number
export const topt: number
export const topvertsummationconnector: number
export const trademark: number
export const trademarkincircle: number
export const tslash: number
export const twofifths: number
export const twosubscript: number
export const twosuperior: number
export const twothirds: number
export const u: number
export const uacute: number
export const ubelowdot: number
export const ubreve: number
export const ucircumflex: number
export const udiaeresis: number
export const udoubleacute: number
export const ugrave: number
export const uhook: number
export const uhorn: number
export const uhornacute: number
export const uhornbelowdot: number
export const uhorngrave: number
export const uhornhook: number
export const uhorntilde: number
export const umacron: number
export const underbar: number
export const underscore: number
export const union: number
export const uogonek: number
export const uparrow: number
export const upcaret: number
export const upleftcorner: number
export const uprightcorner: number
export const upshoe: number
export const upstile: number
export const uptack: number
export const uring: number
export const utilde: number
export const v: number
export const variation: number
export const vertbar: number
export const vertconnector: number
export const voicedsound: number
export const vt: number
export const w: number
export const wacute: number
export const wcircumflex: number
export const wdiaeresis: number
export const wgrave: number
export const x: number
export const xabovedot: number
export const y: number
export const yacute: number
export const ybelowdot: number
export const ycircumflex: number
export const ydiaeresis: number
export const yen: number
export const ygrave: number
export const yhook: number
export const ytilde: number
export const z: number
export const zabovedot: number
export const zacute: number
export const zcaron: number
export const zerosubscript: number
export const zerosuperior: number
export const zstroke: number
/**
 * Creates a new background #IBusAttribute.
 * @param color Color in RGB.
 * @param startIndex Where attribute starts.
 * @param endIndex Where attribute ends.
 * @returns A newly allocated #IBusAttribute.
 */
export function attrBackgroundNew(color: number, startIndex: number, endIndex: number): Attribute
/**
 * Creates a new foreground #IBusAttribute.
 * @param color Color in RGB.
 * @param startIndex Where attribute starts.
 * @param endIndex Where attribute ends.
 * @returns A newly allocated #IBusAttribute.
 */
export function attrForegroundNew(color: number, startIndex: number, endIndex: number): Attribute
/**
 * Creates a new underline #IBusAttribute.
 * @param underlineType Type of underline.
 * @param startIndex Where attribute starts.
 * @param endIndex Where attribute ends.
 * @returns A newly allocated #IBusAttribute.
 */
export function attrUnderlineNew(underlineType: number, startIndex: number, endIndex: number): Attribute
export function errorQuark(): GLib.Quark
/**
 * Free a list of strings.
 * @param strv List of strings.
 */
export function freeStrv(strv: string | null): void
/**
 * Return the D-Bus address of IBus.
 * It will find the address from following source:
 * <orderedlist>
 *    <listitem><para>Environment variable IBUS_ADDRESS</para></listitem>
 *    <listitem><para>Socket file under ~/.config/ibus/bus/</para></listitem>
 * </orderedlist>
 * @returns D-Bus address of IBus. %NULL for not found. See also: ibus_write_address().
 */
export function getAddress(): string
/**
 * Get UID of ibus-daemon.
 * @returns UID of ibus-daemon; or 0 if UID is not available.
 */
export function getDaemonUid(): number
export function getLanguageName(locale: string): string
/**
 * Obtains the machine UUID of the machine this process is running on.
 * @returns A newly allocated string that shows the UUID of the machine.
 */
export function getLocalMachineId(): string
/**
 * Get the path of socket file.
 * @returns A newly allocated string that stores the path of socket file.
 */
export function getSocketPath(): string
/**
 * Get the GDBus timeout in milliseconds. The timeout is for clients (e.g.
 * im-ibus.so), not for ibus-daemon.
 * Note that the timeout for ibus-daemon could be set by --timeout command
 * line option of the daemon.
 * @returns A GDBus timeout in milliseconds. -1 when default timeout for     GDBus should be used.
 */
export function getTimeout(): number
export function getUntranslatedLanguageName(locale: string): string
/**
 * Get the current user name.
 * It is determined by:
 * <orderedlist>
 *    <listitem><para>getlogin()</para></listitem>
 *    <listitem><para>Environment variable SUDO_USER</para></listitem>
 *    <listitem><para>Environment variable USERHELPER_UID</para></listitem>
 *    <listitem><para>Environment variable USERNAME</para></listitem>
 *    <listitem><para>Environment variable LOGNAME</para></listitem>
 *    <listitem><para>Environment variable USER</para></listitem>
 *    <listitem><para>Environment variable LNAME</para></listitem>
 * </orderedlist>
 * @returns A newly allocated string that stores current user name.
 */
export function getUserName(): string
/**
 * Initialize the ibus types.
 */
export function init(): void
/**
 * Parse key event string and return key symbol and modifiers.
 * @param string Key event string.
 * @param keyval Variable that hold key symbol result.
 * @param modifiers Variable that hold modifiers result.
 * @returns %TRUE for succeed; %FALSE if failed.
 */
export function keyEventFromString(string: string, keyval: number, modifiers: number): boolean
/**
 * Return the name of a key symbol and modifiers.
 * 
 * For example, if press ctrl, shift, and enter, then this function returns:
 * Shift+Control+enter.
 * @param keyval Key symbol.
 * @param modifiers Modifiers such as Ctrl or Shift.
 * @returns The name of a key symbol and modifier.
 */
export function keyEventToString(keyval: number, modifiers: number): string
/**
 * Obtains the upper- and lower-case versions of the keyval `symbol`.
 * Examples of keyvals are #IBUS_KEY_a, #IBUS_KEY_Return, #IBUS_KEY_F1, etc.
 * @param symbol a keyval
 */
export function keyvalConvertCase(symbol: number): [ /* lower */ number, /* upper */ number ]
/**
 * Return the key symbol that associate with the key name.
 * @param keyvalName Key name in #gdk_keys_by_name.
 * @returns Corresponding key symbol.
 */
export function keyvalFromName(keyvalName: string): number
/**
 * Return the name of a key symbol.
 * 
 * Note that the returned string is used internally, so don't free it.
 * @param keyval Key symbol.
 * @returns Corresponding key name. %NULL if no such key symbol.
 */
export function keyvalName(keyval: number): string
/**
 * Converts a key value to lower case, if applicable.
 * @param keyval a key value.
 * @returns the lower case form of @keyval, or @keyval itself if it is already  in lower case or it is not subject to case conversion.
 */
export function keyvalToLower(keyval: number): number
/**
 * Convert from an IBus key symbol to the corresponding ISO10646 (Unicode)
 * character.
 * @param keyval an IBus key symbol
 * @returns the corresponding unicode character, or 0 if there          is no corresponding character.
 */
export function keyvalToUnicode(keyval: number): string
/**
 * Converts a key value to upper case, if applicable.
 * @param keyval a key value.
 * @returns the upper case form of @keyval, or @keyval itself if it is already   in upper case or it is not subject to case conversion.
 */
export function keyvalToUpper(keyval: number): number
/**
 * Runs an IBus main loop until ibus_quit() is called in the loop.
 * 
 * See also: ibus_quit().
 */
export function main(): void
/**
 * Stops an IBus from running.
 * 
 * Any calls to ibus_quit() for the loop will return.
 * See also: ibus_main().
 */
export function quit(): void
/**
 * Set the display address.
 * @param display Display address, as in DISPLAY environment for X.
 */
export function setDisplay(display: string): void
/**
 * Sets GLIB's log handler to ours. Our log handler adds time info
 * including hour, minute, second, and microsecond, like:
 * 
 * (ibus-daemon:7088): IBUS-DEBUG: 18:06:45.822819: ibus-daemon started
 * 
 * If `verbose` is %TRUE, all levels of messages will be logged. Otherwise,
 * DEBUG and WARNING messages will be ignored.  The function is used in
 * ibus-daemon, but can be useful for IBus client programs as well for
 * debugging. It's totally fine for not calling this function. If you
 * don't set a custom GLIB log handler, the default GLIB log handler will
 * be used.
 * @param verbose TRUE for verbose logging.
 */
export function setLogHandler(verbose: boolean): void
/**
 * Convert from a ISO10646 character to a key symbol.
 * @param wc a ISO10646 encoded character
 * @returns the corresponding IBus key symbol, if one exists.          or, if there is no corresponding symbol,          wc | 0x01000000
 */
export function unicodeToKeyval(wc: string): number
/**
 * Remove the log handler which is set by ibus_set_log_handler.
 */
export function unsetLogHandler(): void
/**
 * Write D-Bus address to socket file.
 * 
 * See also: ibus_get_address().
 * @param address D-Bus address of IBus.
 */
export function writeAddress(address: string): void
/**
 * Parse a string buffer which contains an XML-formatted string,
 * and return a corresponding XML tree.
 * @param buffer Buffer to be parsed.
 * @returns Root node of parsed XML tree.
 */
export function xmlParseBuffer(buffer: string): XML
/**
 * Parse an XML file and return a corresponding XML tree.
 * @param name File name to be parsed.
 * @returns Root node of parsed XML tree.
 */
export function xmlParseFile(name: string): XML
/**
 * Free function prototype.
 * @callback 
 * @param object object to be freed.
 */
export interface FreeFunc {
    (object: any): void
}
export interface ObjectDestroyFunc {
    (object: Object): void
}
/**
 * Prototype of copy function.
 * Copy function copy from source #IBusSerializable to the destination one.
 * Returns a gboolean value which indicates whether the copying is success.
 * @callback 
 * @param dest The destination #IBusSerializable.
 * @param src A source #IBusSerializable.
 * @returns %TRUE if succeed; %FALSE otherwise.
 */
export interface SerializableCopyFunc {
    (dest: Serializable, src: Serializable): boolean
}
/**
 * Prototype of deserialize function.
 * Deserialize function convert a #GVariant to #IBusSerializable.
 * Returns an integer value which indicates how many values in
 * the variant(tuple) are consumed.
 * @callback 
 * @param serializable An #IBusSerializable.
 * @param variant A #GVariant contains a tuple.
 * @returns The number of values in the variant(tuple) are consumed.
 */
export interface SerializableDeserializeFunc {
    (serializable: Serializable, variant: GLib.Variant): number
}
/**
 * Prototype of serialize function.
 * Serialize function convert an #IBusSerializable to #GVariantBuilder.
 * Returns a gboolean value which indicates whether the conversion is success.
 * Return %TRUE if succeed.
 * @callback 
 * @param serializable An #IBusSerializable.
 * @param builder A #GVariantBuilder.
 * @returns %TRUE if succeed; %FALSE otherwise.
 */
export interface SerializableSerializeFunc {
    (serializable: Serializable, builder: GLib.VariantBuilder): boolean
}
export module AttrList {

    // Constructor properties interface

    export interface ConstructorProperties extends Serializable.ConstructorProperties {
    }

}

export interface AttrList {

    // Own properties of IBus-1.0.IBus.AttrList

    __gtype__: number

    // Own fields of IBus-1.0.IBus.AttrList

    parent: Serializable & GObject.InitiallyUnowned
    /**
     * GArray that holds #IBusAttribute.
     * @field 
     */
    attributes: any[]

    // Owm methods of IBus-1.0.IBus.AttrList

    /**
     * Append an IBusAttribute to IBusAttrList, and increase reference.
     * @param attr The IBusAttribute instance to be appended.
     */
    append(attr: Attribute): void
    /**
     * Returns #IBusAttribute at given index. Borrowed reference.
     * @param index Index of the `attr_list`.
     * @returns #IBusAttribute at given index, %NULL if no such        #IBusAttribute.
     */
    get(index: number): Attribute

    // Class property signals of IBus-1.0.IBus.AttrList

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Array of IBusAttribute.
 * @class 
 */
export class AttrList extends Serializable {

    // Own properties of IBus-1.0.IBus.AttrList

    static name: string

    // Constructors of IBus-1.0.IBus.AttrList

    constructor(config?: AttrList.ConstructorProperties) 
    /**
     * Creates an new #IBusAttrList.
     * @constructor 
     * @returns A newly allocated #IBusAttrList.
     */
    constructor() 
    /**
     * Creates an new #IBusAttrList.
     * @constructor 
     * @returns A newly allocated #IBusAttrList.
     */
    static new(): AttrList

    // Overloads of new

    /**
     * Creates a new instance of an #IBusSerializable.
     * @constructor 
     * @returns a new instance of #IBusSerializable.
     */
    static new(): Serializable
    /**
     * Creates  a new #IBusObject.
     * @constructor 
     * @returns A newly allocated #IBusObject
     */
    static new(): Object
    _init(config?: AttrList.ConstructorProperties): void
}

export module Attribute {

    // Constructor properties interface

    export interface ConstructorProperties extends Serializable.ConstructorProperties {
    }

}

export interface Attribute {

    // Own properties of IBus-1.0.IBus.Attribute

    __gtype__: number

    // Own fields of IBus-1.0.IBus.Attribute

    parent: Serializable & GObject.InitiallyUnowned
    /**
     * IBusAttributeType
     * @field 
     */
    type: number
    /**
     * Value for the type.
     * @field 
     */
    value: number
    /**
     * The starting index, inclusive.
     * @field 
     */
    startIndex: number
    /**
     * The ending index, exclusive.
     * @field 
     */
    endIndex: number

    // Owm methods of IBus-1.0.IBus.Attribute

    /**
     * Gets an enum of #IBusAttrType.
     * @returns An enum of #IBusAttrType.
     */
    getAttrType(): number
    /**
     * Gets an end unsigned index
     * @returns A end unsigned index
     */
    getEndIndex(): number
    /**
     * Gets a start unsigned index
     * @returns A start unsigned index
     */
    getStartIndex(): number
    /**
     * Gets an unsigned int value relative with #IBusAttrType.
     * If the type is %IBUS_ATTR_TYPE_UNDERLINE, the return value is
     * #IBusAttrUnderline. If the type is %IBUS_ATTR_TYPE_FOREGROUND,
     * the return value is the color RGB.
     * @returns An unsigned int value relative with #IBusAttrType.
     */
    getValue(): number

    // Class property signals of IBus-1.0.IBus.Attribute

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An IBusAttribute represents an attribute that associate to IBusText.
 * It decorates preedit buffer and auxiliary text with underline, foreground
 * and background colors.
 * @class 
 */
export class Attribute extends Serializable {

    // Own properties of IBus-1.0.IBus.Attribute

    static name: string

    // Constructors of IBus-1.0.IBus.Attribute

    constructor(config?: Attribute.ConstructorProperties) 
    /**
     * Creates a new IBusAttribute.
     * @constructor 
     * @param type Type of the attribute.
     * @param value Value of the attribute.
     * @param startIndex Where attribute starts.
     * @param endIndex Where attribute ends.
     * @returns A newly allocated IBusAttribute.
     */
    constructor(type: number, value: number, startIndex: number, endIndex: number) 
    /**
     * Creates a new IBusAttribute.
     * @constructor 
     * @param type Type of the attribute.
     * @param value Value of the attribute.
     * @param startIndex Where attribute starts.
     * @param endIndex Where attribute ends.
     * @returns A newly allocated IBusAttribute.
     */
    static new(type: number, value: number, startIndex: number, endIndex: number): Attribute

    // Overloads of new

    /**
     * Creates a new instance of an #IBusSerializable.
     * @constructor 
     * @returns a new instance of #IBusSerializable.
     */
    static new(): Serializable
    /**
     * Creates  a new #IBusObject.
     * @constructor 
     * @returns A newly allocated #IBusObject
     */
    static new(): Object
    _init(config?: Attribute.ConstructorProperties): void
}

export module Bus {

    // Signal callback interfaces

    /**
     * Signal callback interface for `connected`
     */
    export interface ConnectedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `disconnected`
     */
    export interface DisconnectedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `global-engine-changed`
     */
    export interface GlobalEngineChangedSignalCallback {
        (name: string | null): void
    }

    /**
     * Signal callback interface for `name-owner-changed`
     */
    export interface NameOwnerChangedSignalCallback {
        (name: string | null, oldOwner: string | null, newOwner: string | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Object.ConstructorProperties {

        // Own constructor properties of IBus-1.0.IBus.Bus

        /**
         * Whether the #IBusBus object should connect asynchronously to the bus.
         */
        connect_async?: boolean | null
    }

}

export interface Bus {

    // Own properties of IBus-1.0.IBus.Bus

    /**
     * Whether the #IBusBus object should connect asynchronously to the bus.
     */
    readonly connectAsync: boolean
    __gtype__: number

    // Own fields of IBus-1.0.IBus.Bus

    parent: Object & GObject.InitiallyUnowned
    priv: any

    // Owm methods of IBus-1.0.IBus.Bus

    /**
     * Add a match rule to an #IBusBus synchronously.
     * @param rule Match rule.
     * @returns %TRUE if the rule is added. %FALSE otherwise.
     */
    addMatch(rule: string): boolean
    /**
     * Add a match rule to an #IBusBus asynchronously.
     * @param rule Match rule.
     * @param timeoutMsec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied      or %NULL if you don't care about the result of the method invocation.
     */
    addMatchAsync(rule: string, timeoutMsec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with ibus_bus_add_match_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_add_match_async().
     * @returns %TRUE if the rule is added. %FALSE otherwise.
     */
    addMatchAsyncFinish(res: Gio.AsyncResult): boolean
    /**
     * Create an input context for client synchronously.
     * @param clientName Name of client.      "CreateInputContext" call is suceeded, %NULL otherwise.
     * @returns An newly allocated #IBusInputContext if the
     */
    createInputContext(clientName: string): InputContext
    /**
     * Create an input context for client asynchronously.
     * @param clientName Name of client.
     * @param timeoutMsec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.      It should not be %NULL.
     */
    createInputContextAsync(clientName: string, timeoutMsec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with ibus_bus_create_input_context_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_create_input_context_async().
     * @returns An newly allocated #IBusInputContext if the      "CreateInputContext" call is suceeded, %NULL otherwise.
     */
    createInputContextAsyncFinish(res: Gio.AsyncResult): InputContext
    /**
     * Get the current focused input context synchronously.
     * @returns The named of currently focued #IBusInputContext if the          "CurrentInputContext" call suceeded, %NULL otherwise. The return          value must be freed with g_free().
     */
    currentInputContext(): string | null
    /**
     * Get the current focused input context asynchronously.
     * @param timeoutMsec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied      or %NULL if you don't care about the result of the method invocation.
     */
    currentInputContextAsync(timeoutMsec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with ibus_bus_current_input_context_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_current_input_context_async().
     * @returns The named of currently focued IBusInputContext if the          "CurrentInputContext" call suceeded, %NULL otherwise. The return          value must be freed with g_free().
     */
    currentInputContextAsyncFinish(res: Gio.AsyncResult): string | null
    /**
     * Exit or restart ibus-daemon synchronously.
     * @param restart Whether restarting the ibus.
     * @returns %TRUE if the "Exit" call is suceeded, %FALSE otherwise.
     */
    exit(restart: boolean): boolean
    /**
     * Exit or restart ibus-daemon asynchronously.
     * @param restart Whether restarting the ibus.
     * @param timeoutMsec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied      or %NULL if you don't care about the result of the method invocation.
     */
    exitAsync(restart: boolean, timeoutMsec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with ibus_bus_exit_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_exit_async().
     * @returns %TRUE if the "Exit" call is suceeded, %FALSE otherwise.
     */
    exitAsyncFinish(res: Gio.AsyncResult): boolean
    /**
     * Get the config instance from #IBusBus.
     * @returns An #IBusConfig object which is configurable with @bus.
     */
    getConfig(): Config
    /**
     * Gets a #GDBusConnection of an #IBusBus instance.
     * @returns A #GDBusConnection of an #IBusBus instance.
     */
    getConnection(): Gio.DBusConnection
    /**
     * Get engines by given names synchronously. If some engine names do not exist,
     * this function will simply ignore them, and return rest of engines.
     * TODO(penghuang): add asynchronous version
     * @param names A %NULL-terminated array of names.
     * @returns          A %NULL-terminated array of engines.
     */
    getEnginesByNames(names: string[]): EngineDesc[]
    /**
     * Get the description of current global engine synchronously.
     * @returns The description of current global engine, or %NULL if there is no global engine.
     */
    getGlobalEngine(): EngineDesc
    /**
     * Get the description of current global engine asynchronously.
     * @param timeoutMsec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL      if you don't care about the result of the method invocation.
     */
    getGlobalEngineAsync(timeoutMsec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with ibus_bus_get_global_engine_async_finish().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_get_global_engine_async_finish().
     * @returns The description of current global engine, or %NULL if there is no global engine.
     */
    getGlobalEngineAsyncFinish(res: Gio.AsyncResult): EngineDesc
    /**
     * Get org.freedesktop.DBus.Properties.
     * @param propertyName property name in org.freedesktop.DBus.Properties.Get
     * @returns The value in org.freedesktop.DBus.Properties.Get           The returned value must be freed with g_variant_unref().
     */
    getIbusProperty(propertyName: string): GLib.Variant
    /**
     * Get org.freedesktop.DBus.Properties asynchronously.
     * @param propertyName property name in org.freedesktop.DBus.Properties.Get
     * @param timeoutMsec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied      or %NULL if you don't care about the result of the method invocation.
     */
    getIbusPropertyAsync(propertyName: string, timeoutMsec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with ibus_bus_get_ibus_property_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_get_ibus_property_async().
     * @returns The value in org.freedesktop.DBus.Properties.Get           The returned value must be freed with g_variant_unref().
     */
    getIbusPropertyAsyncFinish(res: Gio.AsyncResult): GLib.Variant
    /**
     * Return the name owner synchronously.
     * @param name Name.
     * @returns Owner of the name. The returned value must be freed with g_free().
     */
    getNameOwner(name: string): string | null
    /**
     * Return the name owner asynchronously.
     * @param name Name.
     * @param timeoutMsec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied      or %NULL if you don't care about the result of the method invocation.
     */
    getNameOwnerAsync(name: string, timeoutMsec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with ibus_bus_get_name_owner_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_get_name_owner_async().
     * @returns Owner of the name. The returned value must be freed with g_free().
     */
    getNameOwnerAsyncFinish(res: Gio.AsyncResult): string | null
    /**
     * Check if the bus's "use_global_engine" option is enabled or not
     * synchronously.
     * @returns TRUE if "use_global_engine" option is enabled.
     */
    getUseGlobalEngine(): boolean
    /**
     * Check if the bus's "use_global_engine" option is enabled or not asynchronously.
     * @param timeoutMsec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied      or %NULL if you don't care about the result of the method invocation.
     */
    getUseGlobalEngineAsync(timeoutMsec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with ibus_bus_get_use_global_engine_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_get_use_global_engine_async().
     * @returns %TRUE if "use_global_engine" option is enabled.
     */
    getUseGlobalEngineAsyncFinish(res: Gio.AsyncResult): boolean
    /**
     * Check if the bus's "use_sys_layout" option is enabled or not synchronously.
     * @returns %TRUE if "use_sys_layout" option is enabled.
     */
    getUseSysLayout(): boolean
    /**
     * Check if the bus's "use_sys_layout" option is enabled or not asynchronously.
     * @param timeoutMsec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied      or %NULL if you don't care about the result of the method invocation.
     */
    getUseSysLayoutAsync(timeoutMsec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with ibus_bus_get_use_sys_layout_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_get_use_sys_layout_async().
     * @returns TRUE if "use_sys_layout" option is enabled.
     */
    getUseSysLayoutAsyncFinish(res: Gio.AsyncResult): boolean
    /**
     * This function sends a "HELLO" message to DBus daemon,
     * which replies the unique name of current IBus process.
     * @returns The unique name of IBus process in DBus.
     */
    hello(): string
    /**
     * Return %TRUE if `bus` is connected to IBus daemon.
     * @returns %TRUE if @bus is connected, %FALSE otherwise.
     */
    isConnected(): boolean
    /**
     * Check if the current global engine is enabled or not synchronously.
     * @returns %TRUE if the current global engine is enabled.
     */
    isGlobalEngineEnabled(): boolean
    /**
     * Check if the current global engine is enabled or not asynchronously.
     * @param timeoutMsec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied      or %NULL if you don't care about the result of the method invocation.
     */
    isGlobalEngineEnabledAsync(timeoutMsec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with ibus_bus_is_global_engine_enabled_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_is_global_engine_enabled_async().
     * @returns %TRUE if the current global engine is enabled.
     */
    isGlobalEngineEnabledAsyncFinish(res: Gio.AsyncResult): boolean
    /**
     * List active engines synchronously.
     * @returns         A List of active engines.
     */
    listActiveEngines(): EngineDesc[]
    /**
     * List active engines asynchronously.
     * @param timeoutMsec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL      if you don't care about the result of the method invocation.
     */
    listActiveEnginesAsync(timeoutMsec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with ibus_bus_list_active_engines_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_list_active_engines_async().
     * @returns          A List of active engines.
     */
    listActiveEnginesAsyncFinish(res: Gio.AsyncResult): EngineDesc[]
    /**
     * List engines synchronously.
     * @returns          A List of engines.
     */
    listEngines(): EngineDesc[]
    /**
     * List engines asynchronously.
     * @param timeoutMsec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL      if you don't care about the result of the method invocation.
     */
    listEnginesAsync(timeoutMsec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with ibus_bus_list_engines_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_list_engines_async().
     * @returns          A List of engines.
     */
    listEnginesAsyncFinish(res: Gio.AsyncResult): EngineDesc[]
    /**
     * Return lists that attached to `bus`.
     * <note><para>[FixMe] Not implemented yet, only return %NULL.</para></note>
     * <note><para>[FixMe] Add async version.</para></note>
     * @returns Lists that attached to @bus.
     */
    listNames(): string[]
    /**
     * Lists the unique bus names of connections currently queued for a bus name.
     * FIXME add an asynchronous version.
     * @param name Name to be queried.
     * @returns            The unique bus names of connections currently queued for @name.
     */
    listQueuedOwners(name: string): string[]
    /**
     * Checks whether the name has owner synchronously.
     * @param name Name to be checked.
     * @returns %TRUE if the name has owner, %FALSE otherwise.
     */
    nameHasOwner(name: string): boolean
    /**
     * Checks whether the name has owner asynchronously.
     * @param name Name to be checked.
     * @param timeoutMsec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied      or %NULL if you don't care about the result of the method invocation.
     */
    nameHasOwnerAsync(name: string, timeoutMsec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with ibus_bus_name_has_owner_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_name_has_owner_async().
     * @returns %TRUE if the name has owner, %FALSE otherwise.
     */
    nameHasOwnerAsyncFinish(res: Gio.AsyncResult): boolean
    /**
     * Start bus components by engine names synchronously.
     * @param names A %NULL-terminated array of engine names.
     * @returns %TRUE if components start. %FALSE otherwise.
     */
    preloadEngines(names: string[]): boolean
    /**
     * Start bus components by engine names asynchronously.
     * @param names A %NULL-terminated array of engine names.
     * @param timeoutMsec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied      or %NULL if you don't care about the result of the method invocation.
     */
    preloadEnginesAsync(names: string[], timeoutMsec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with ibus_bus_preload_engines_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_preload_engines_async().
     * @returns %TRUE if component starts. %FALSE otherwise.
     */
    preloadEnginesAsyncFinish(res: Gio.AsyncResult): boolean
    /**
     * Register a componet to an #IBusBus synchronously.
     * @param component A input engine component.
     * @returns %TRUE if the "RegisterComponent" call is suceeded, %FALSE otherwise.
     */
    registerComponent(component: Component): boolean
    /**
     * Register a componet to an #IBusBus asynchronously.
     * @param component A input engine component.
     * @param timeoutMsec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied      or %NULL if you don't care about the result of the method invocation.
     */
    registerComponentAsync(component: Component, timeoutMsec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with ibus_bus_register_component_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_register_component_async().
     * @returns %TRUE if the "RegisterComponent" call is suceeded, %FALSE otherwise.
     */
    registerComponentAsyncFinish(res: Gio.AsyncResult): boolean
    /**
     * Release a name to IBus daemon synchronously.
     * @param name Name to be released.
     * @returns 0 if failed; positive number otherwise.
     */
    releaseName(name: string): number
    /**
     * Release a name to IBus daemon asynchronously.
     * @param name Name to be released.
     * @param timeoutMsec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied      or %NULL if you don't care about the result of the method invocation.
     */
    releaseNameAsync(name: string, timeoutMsec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with ibus_bus_release_name_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_release_name_async().
     * @returns 0 if failed; positive number otherwise.
     */
    releaseNameAsyncFinish(res: Gio.AsyncResult): number
    /**
     * Remove a match rule to an #IBusBus synchronously.
     * @param rule Match rule.
     * @returns %TRUE if the rule is removed. %FALSE otherwise.
     */
    removeMatch(rule: string): boolean
    /**
     * Remove a match rule to an IBusBus asynchronously.
     * @param rule Match rule.
     * @param timeoutMsec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied      or %NULL if you don't care about the result of the method invocation.
     */
    removeMatchAsync(rule: string, timeoutMsec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with ibus_bus_remove_match_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_remove_match_async().
     * @returns %TRUE if the rule is removed. %FALSE otherwise.
     */
    removeMatchAsyncFinish(res: Gio.AsyncResult): boolean
    /**
     * Request a name from IBus daemon synchronously.
     * @param name Name to be requested.
     * @param flags IBusBusNameFlag.
     * @returns 0 if failed; IBusBusRequestNameReply otherwise.
     */
    requestName(name: string, flags: number): number
    /**
     * Request a name from IBus daemon asynchronously.
     * @param name Name to be requested.
     * @param flags Flags (FixMe).
     * @param timeoutMsec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL      if you don't care about the result of the method invocation.
     */
    requestNameAsync(name: string, flags: number, timeoutMsec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with ibus_bus_request_name_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_request_name_async().
     * @returns 0 if failed; positive number otherwise.
     */
    requestNameAsyncFinish(res: Gio.AsyncResult): number
    /**
     * Set current global engine synchronously.
     * @param globalEngine A new engine name.
     * @returns %TRUE if the global engine was set successfully.
     */
    setGlobalEngine(globalEngine: string): boolean
    /**
     * Set current global engine asynchronously.
     * @param globalEngine A new engine name.
     * @param timeoutMsec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied      or %NULL if you don't care about the result of the method invocation.
     */
    setGlobalEngineAsync(globalEngine: string, timeoutMsec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with ibus_bus_set_global_engine_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_set_global_engine_async().
     * @returns %TRUE if no IPC errros. %FALSE otherwise.
     */
    setGlobalEngineAsyncFinish(res: Gio.AsyncResult): boolean
    /**
     * Set org.freedesktop.DBus.Properties.
     * @param propertyName property name in org.freedesktop.DBus.Properties.Set
     * @param value value in org.freedesktop.DBus.Properties.Set
     */
    setIbusProperty(propertyName: string, value: GLib.Variant): void
    /**
     * Set org.freedesktop.DBus.Properties asynchronously.
     * @param propertyName property name in org.freedesktop.DBus.Properties.Set
     * @param value value in org.freedesktop.DBus.Properties.Set
     * @param timeoutMsec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied      or %NULL if you don't care about the result of the method invocation.
     */
    setIbusPropertyAsync(propertyName: string, value: GLib.Variant, timeoutMsec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with ibus_bus_set_ibus_property_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_set_ibus_property_async().
     * @returns %TRUE if property is set with async. %FALSE failed.
     */
    setIbusPropertyAsyncFinish(res: Gio.AsyncResult): boolean
    /**
     * Start or stop watching the NameOwnerChanged DBus signal.
     * @param watch %TRUE if you want ibusbus to emit "name-owner-changed" signal when ibus-daemon emits the NameOwnerChanged DBus signal.
     */
    setWatchDbusSignal(watch: boolean): void
    /**
     * Start or stop watching the GlobalEngineChanged IBus signal.
     * @param watch %TRUE if you want ibusbus to emit "global-engine-changed" signal when ibus-daemon emits the GlobalEngineChanged IBus signal.
     */
    setWatchIbusSignal(watch: boolean): void

    // Own signals of IBus-1.0.IBus.Bus

    connect(sigName: "connected", callback: Bus.ConnectedSignalCallback): number
    on(sigName: "connected", callback: Bus.ConnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connected", callback: Bus.ConnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connected", callback: Bus.ConnectedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "connected", ...args: any[]): void
    connect(sigName: "disconnected", callback: Bus.DisconnectedSignalCallback): number
    on(sigName: "disconnected", callback: Bus.DisconnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "disconnected", callback: Bus.DisconnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "disconnected", callback: Bus.DisconnectedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "disconnected", ...args: any[]): void
    connect(sigName: "global-engine-changed", callback: Bus.GlobalEngineChangedSignalCallback): number
    on(sigName: "global-engine-changed", callback: Bus.GlobalEngineChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "global-engine-changed", callback: Bus.GlobalEngineChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "global-engine-changed", callback: Bus.GlobalEngineChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "global-engine-changed", ...args: any[]): void
    connect(sigName: "name-owner-changed", callback: Bus.NameOwnerChangedSignalCallback): number
    on(sigName: "name-owner-changed", callback: Bus.NameOwnerChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "name-owner-changed", callback: Bus.NameOwnerChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "name-owner-changed", callback: Bus.NameOwnerChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "name-owner-changed", oldOwner: string | null, newOwner: string | null, ...args: any[]): void

    // Class property signals of IBus-1.0.IBus.Bus

    connect(sigName: "notify::connect-async", callback: (...args: any[]) => void): number
    on(sigName: "notify::connect-async", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connect-async", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connect-async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connect-async", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An IBusBus connects with IBus daemon.
 * @class 
 */
export class Bus extends Object {

    // Own properties of IBus-1.0.IBus.Bus

    static name: string

    // Constructors of IBus-1.0.IBus.Bus

    constructor(config?: Bus.ConstructorProperties) 
    /**
     * Creates a new #IBusBus instance.
     * @constructor 
     * @returns A newly allocated #IBusBus instance, and the instance is not floating.
     */
    constructor() 
    /**
     * Creates a new #IBusBus instance.
     * @constructor 
     * @returns A newly allocated #IBusBus instance, and the instance is not floating.
     */
    static new(): Bus

    // Overloads of new

    /**
     * Creates  a new #IBusObject.
     * @constructor 
     * @returns A newly allocated #IBusObject
     */
    static new(): Object
    /**
     * Creates a new #IBusBus instance. The instance will asynchronously connect
     * to the IBus daemon.
     * @constructor 
     * @returns A newly allocated #IBusBus instance, and the instance is not floating.
     */
    static newAsync(): Bus
    _init(config?: Bus.ConstructorProperties): void
}

export module Component {

    // Constructor properties interface

    export interface ConstructorProperties extends Serializable.ConstructorProperties {

        // Own constructor properties of IBus-1.0.IBus.Component

        /**
         * The author of component
         */
        author?: string | null
        /**
         * The exec path of component
         */
        command_line?: string | null
        /**
         * The description of component
         */
        description?: string | null
        /**
         * The homepage of component
         */
        homepage?: string | null
        /**
         * The license of component
         */
        license?: string | null
        /**
         * The name of component
         */
        name?: string | null
        /**
         * The textdomain of component
         */
        textdomain?: string | null
        /**
         * The version of component
         */
        version?: string | null
    }

}

export interface Component {

    // Own properties of IBus-1.0.IBus.Component

    /**
     * The author of component
     */
    readonly author: string | null
    /**
     * The exec path of component
     */
    readonly commandLine: string | null
    /**
     * The description of component
     */
    readonly description: string | null
    /**
     * The homepage of component
     */
    readonly homepage: string | null
    /**
     * The license of component
     */
    readonly license: string | null
    /**
     * The name of component
     */
    readonly name: string | null
    /**
     * The textdomain of component
     */
    readonly textdomain: string | null
    /**
     * The version of component
     */
    readonly version: string | null
    __gtype__: number

    // Owm methods of IBus-1.0.IBus.Component

    /**
     * Add an engine to #IBusComponent according to the description in `engine`.
     * @param engine A description of an engine.
     */
    addEngine(engine: EngineDesc): void
    /**
     * Add an observed path to #IBusComponent.
     * @param path Observed path to be added.
     * @param accessFs %TRUE for filling the file status; %FALSE otherwise.
     */
    addObservedPath(path: string, accessFs: boolean): void
    /**
     * Check whether the observed paths of component is modified.
     * @returns %TRUE if at least one of the observed paths is modified; %FALSE otherwise.
     */
    checkModification(): boolean
    /**
     * Gets the author property in #IBusComponent. It should not be freed.
     * @returns author property in #IBusComponent
     */
    getAuthor(): string
    /**
     * Gets the description property in #IBusComponent. It should not be freed.
     * @returns description property in #IBusComponent
     */
    getDescription(): string
    /**
     * Gets the engines of this component.
     * @returns  A newly allocated GList that contains engines.
     */
    getEngines(): EngineDesc[]
    /**
     * Gets the exec property in #IBusComponent. It should not be freed.
     * @returns exec property in #IBusComponent
     */
    getExec(): string
    /**
     * Gets the homepage property in #IBusComponent. It should not be freed.
     * @returns homepage property in #IBusComponent
     */
    getHomepage(): string
    /**
     * Gets the license property in #IBusComponent. It should not be freed.
     * @returns license property in #IBusComponent
     */
    getLicense(): string
    /**
     * Gets the name property in #IBusComponent. It should not be freed.
     * @returns name property in #IBusComponent
     */
    getName(): string
    /**
     * Gets the observed paths of this component.
     * @returns A newly allocated GList that contains observed paths.
     */
    getObservedPaths(): ObservedPath[]
    /**
     * Gets the textdomain property in #IBusComponent. It should not be freed.
     * @returns textdomain property in #IBusComponent
     */
    getTextdomain(): string
    /**
     * Gets the version property in #IBusComponent. It should not be freed.
     * @returns version property in #IBusComponent
     */
    getVersion(): string
    /**
     * Output #IBusComponent as an XML-formatted string.
     * The output string can be then shown on the screen or written to file.
     * @param output GString that holds the result.
     * @param indent level of indent.
     */
    output(output: GLib.String, indent: number): void
    /**
     * Output engine description  as an XML-formatted string.
     * The output string can be then shown on the screen or written to file.
     * @param output GString that holds the result.
     * @param indent level of indent.
     */
    outputEngines(output: GLib.String, indent: number): void

    // Class property signals of IBus-1.0.IBus.Component

    connect(sigName: "notify::author", callback: (...args: any[]) => void): number
    on(sigName: "notify::author", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::author", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::author", ...args: any[]): void
    connect(sigName: "notify::command-line", callback: (...args: any[]) => void): number
    on(sigName: "notify::command-line", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::command-line", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::command-line", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::command-line", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::homepage", callback: (...args: any[]) => void): number
    on(sigName: "notify::homepage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::homepage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::homepage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::homepage", ...args: any[]): void
    connect(sigName: "notify::license", callback: (...args: any[]) => void): number
    on(sigName: "notify::license", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::license", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::textdomain", callback: (...args: any[]) => void): number
    on(sigName: "notify::textdomain", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::textdomain", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::textdomain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::textdomain", ...args: any[]): void
    connect(sigName: "notify::version", callback: (...args: any[]) => void): number
    on(sigName: "notify::version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An IBusComponent is an executable program.
 * It provides services such as user interface, configuration,
 * and input method engine (IME).
 * 
 * It is recommended that IME developers provide
 * a component XML file and
 * load the XML file by ibus_component_new_from_file().
 * 
 * The format of a component XML file is described  at
 * <ulink url="https://github.com/ibus/ibus/wiki/DevXML">https://github.com/ibus/ibus/wiki/DevXML</ulink>
 * @class 
 */
export class Component extends Serializable {

    // Own properties of IBus-1.0.IBus.Component

    static name: string

    // Constructors of IBus-1.0.IBus.Component

    constructor(config?: Component.ConstructorProperties) 
    /**
     * Creates a new #IBusComponent.
     * @constructor 
     * @param name Name of the component.
     * @param description Detailed description of component.
     * @param version Component version.
     * @param license Distribution license of this component.
     * @param author Author(s) of the component.
     * @param homepage Homepage of the component.
     * @param commandLine path to component executable.
     * @param textdomain Domain name for dgettext()
     * @returns A newly allocated #IBusComponent.
     */
    constructor(name: string, description: string, version: string, license: string, author: string, homepage: string, commandLine: string, textdomain: string) 
    /**
     * Creates a new #IBusComponent.
     * @constructor 
     * @param name Name of the component.
     * @param description Detailed description of component.
     * @param version Component version.
     * @param license Distribution license of this component.
     * @param author Author(s) of the component.
     * @param homepage Homepage of the component.
     * @param commandLine path to component executable.
     * @param textdomain Domain name for dgettext()
     * @returns A newly allocated #IBusComponent.
     */
    static new(name: string, description: string, version: string, license: string, author: string, homepage: string, commandLine: string, textdomain: string): Component

    // Overloads of new

    /**
     * Creates a new instance of an #IBusSerializable.
     * @constructor 
     * @returns a new instance of #IBusSerializable.
     */
    static new(): Serializable
    /**
     * Creates  a new #IBusObject.
     * @constructor 
     * @returns A newly allocated #IBusObject
     */
    static new(): Object
    /**
     * Creates a new #IBusComponent from an XML file.
     * Note that a component file usually contains engine descriptions,
     * if it does, ibus_engine_desc_new_from_xml_node() will be called
     * to load the engine descriptions.
     * @constructor 
     * @param filename An XML file that contains component information.
     * @returns A newly allocated #IBusComponent.
     */
    static newFromFile(filename: string): Component
    /**
     * Creates a new #IBusComponent from an XML tree.
     * @constructor 
     * @param node Root node of component XML tree.
     * @returns A newly allocated #IBusComponent.
     */
    static newFromXmlNode(node: XML): Component
    _init(config?: Component.ConstructorProperties): void
}

export module Config {

    // Signal callback interfaces

    /**
     * Signal callback interface for `value-changed`
     */
    export interface ValueChangedSignalCallback {
        (section: string | null, name: string | null, value: GLib.Variant): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Proxy.ConstructorProperties {
    }

}

export interface Config extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Own properties of IBus-1.0.IBus.Config

    __gtype__: number

    // Owm methods of IBus-1.0.IBus.Config

    /**
     * Get the value of a configuration option synchronously.
     * 
     * GConf stores configure options in a tree-like structure,
     * and the IBus related setting is at /desktop/ibus,
     * thus, `section` here is a path from there,
     * while `name` is the key of that configuration option.
     * 
     * ibus-chewing, for example, stores its setting in /desktop/ibus/engine/Chewing,
     * so the section name for it is "engine/Chewing".
     * See also: ibus_config_set_value().
     * @param section Section name of the configuration option.
     * @param name Name of the configure option.
     * @returns A #GVariant or %NULL. Free with g_variant_unref().
     */
    getValue(section: string, name: string): GLib.Variant
    /**
     * Get the value of a configuration option asynchronously.
     * 
     * See also: ibus_config_get_value().
     * @param section Section name of the configuration option.
     * @param name Name of the configure option.
     * @param timeoutMs The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the return value is ready.
     */
    getValueAsync(section: string, name: string, timeoutMs: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish get value of a configuration option.
     * @param result A #GAsyncResult.
     * @returns A #GVariant or %NULL if error is set. Free with g_variant_unref(). See also: ibus_config_get_value_async().
     */
    getValueAsyncFinish(result: Gio.AsyncResult): GLib.Variant
    /**
     * Get all values in a section synchronously.
     * @param section Section name of the configuration option.
     * @returns A #GVariant or %NULL. Free with g_variant_unref(). See also: ibus_config_set_value().
     */
    getValues(section: string): GLib.Variant
    /**
     * Get all values in a section asynchronously.
     * 
     * See also: ibus_config_get_values().
     * @param section Section name of the configuration option.
     * @param timeoutMs The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the return value is ready.
     */
    getValuesAsync(section: string, timeoutMs: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish get values in a section.
     * @param result A #GAsyncResult.
     * @returns A #GVariant or %NULL if error is set. Free with g_variant_unref(). See also: ibus_config_get_values_async().
     */
    getValuesAsyncFinish(result: Gio.AsyncResult): GLib.Variant
    /**
     * Set the value of a configuration option synchronously.
     * @param section Section name of the configuration option.
     * @param name Name of the configure option its self.
     * @param value A #GVariant that holds the value. If the value is floating, the function takes ownership of it.
     * @returns %TRUE if succeed; %FALSE otherwise. See also: ibus_config_get_value().
     */
    setValue(section: string, name: string, value: GLib.Variant): boolean
    /**
     * Set the value of a configuration option asynchronously.
     * 
     * See also: ibus_config_set_value().
     * @param section Section name of the configuration option.
     * @param name Name of the configure option.
     * @param value A #GVariant that holds the value. If the value is floating, the function takes ownership of it.
     * @param timeoutMs The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the return value is ready.
     */
    setValueAsync(section: string, name: string, value: GLib.Variant, timeoutMs: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish set value of a configuration option.
     * @param result A #GAsyncResult.
     * @returns %TRUE or %FALSE if error is set. See also: ibus_config_set_value_async().
     */
    setValueAsyncFinish(result: Gio.AsyncResult): boolean
    /**
     * Remove an entry of a configuration option.
     * @param section Section name of the configuration option.
     * @param name Name of the configure option its self.
     * @returns %TRUE if succeed; %FALSE otherwise. See also: ibus_config_get_value().
     */
    unset(section: string, name: string): boolean
    /**
     * Unsubscribe from the configuration option change notification.
     * @param section Section name of the configuration option.
     * @param name Name of the configure option its self.
     * @returns %TRUE if succeed; %FALSE otherwise. See also: ibus_config_watch.
     */
    unwatch(section: string | null, name: string | null): boolean
    /**
     * Subscribe to the configuration option change notification.
     * 
     * Until this function is called, every change will be notified to the
     * client through #IBusConfig::value-changed signal.  Clients should
     * call ibus_config_watch() with the sections they are interested in,
     * to reduce the number of D-Bus messages.
     * @param section Section name of the configuration option.
     * @param name Name of the configure option its self.
     * @returns %TRUE if succeed; %FALSE otherwise. See also: ibus_config_unwatch().
     */
    watch(section: string | null, name: string | null): boolean

    // Own signals of IBus-1.0.IBus.Config

    connect(sigName: "value-changed", callback: Config.ValueChangedSignalCallback): number
    on(sigName: "value-changed", callback: Config.ValueChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: Config.ValueChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: Config.ValueChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "value-changed", name: string | null, value: GLib.Variant, ...args: any[]): void

    // Class property signals of IBus-1.0.IBus.Config

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An IBusConfig provides engine configuration methods
 * such as get and set the configure settings to configuration file.
 * 
 * Currently, IBusConfig supports gconf.
 * @class 
 */
export class Config extends Proxy {

    // Own properties of IBus-1.0.IBus.Config

    static name: string

    // Constructors of IBus-1.0.IBus.Config

    constructor(config?: Config.ConstructorProperties) 
    /**
     * Create a new #IBusConfig from existing #GDBusConnection.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A newly allocated #IBusConfig corresponding to @connection.
     */
    constructor(connection: Gio.DBusConnection, cancellable: Gio.Cancellable | null) 
    /**
     * Create a new #IBusConfig from existing #GDBusConnection.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A newly allocated #IBusConfig corresponding to @connection.
     */
    static new(connection: Gio.DBusConnection, cancellable: Gio.Cancellable | null): Config

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with ibus_config_new_async().
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback pass to      ibus_config_new_async().
     * @returns A newly allocated #IBusConfig.
     */
    static newAsyncFinish(res: Gio.AsyncResult): Config
    _init(config?: Config.ConstructorProperties): void
    /**
     * New an #IBusConfig asynchronously.
     * @param connection An #GDBusConnection.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.      The callback should not be %NULL.
     */
    static newAsync(connection: Gio.DBusConnection, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
}

export module ConfigService {

    // Constructor properties interface

    export interface ConstructorProperties extends Service.ConstructorProperties {
    }

}

export interface ConfigService {

    // Own properties of IBus-1.0.IBus.ConfigService

    __gtype__: number

    // Owm methods of IBus-1.0.IBus.ConfigService

    /**
     * Change a value of a configuration option
     * by sending a "ValueChanged" message to IBus service.
     * @param section Section name of the configuration option.
     * @param name Name of the configure option.
     * @param value GVariant that holds the value.
     */
    valueChanged(section: string, name: string, value: GLib.Variant): void

    // Own virtual methods of IBus-1.0.IBus.ConfigService

    getValue(section: string, name: string): GLib.Variant
    getValues(section: string): GLib.Variant
    setValue(section: string, name: string, value: GLib.Variant): boolean
    unsetValue(section: string, name: string): boolean

    // Class property signals of IBus-1.0.IBus.ConfigService

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An IBusConfigService is a base class for other configuration services such as GConf.
 * Currently, directly known sub class is IBusConfigGConf.
 * 
 * IBusConfigServiceClass has following member functions:
 * <itemizedlist>
 *     <listitem>
 *         <para>gboolean set_value(IBusConfigService *config, const gchar *section, const gchar *name,
 *             const GValue *value, IBusError **error)
 *         </para>
 *         <variablelist>
 *             <varlistentry>
 *                 <term>config:</term>
 *                 <listitem>A configure service</listitem>
 *             </varlistentry>
 *             <varlistentry>
 *                 <term>section:</term>
 *                 <listitem>Section name of the configuration option.</listitem>
 *             </varlistentry>
 *             <varlistentry>
 *                 <term>name:</term>
 *                 <listitem>Name of the configuration option.</listitem>
 *             </varlistentry>
 *             <varlistentry>
 *                 <term>value:</term>
 *                 <listitem>GValue that holds the value.</listitem>
 *             </varlistentry>
 *             <varlistentry>
 *                 <term>error:</term>
 *                 <listitem>Error outputs here.</listitem>
 *             </varlistentry>
 *             <varlistentry>
 *                 <term>Returns:</term>
 *                 <listitem>TRUE if succeed; FALSE otherwise.</listitem>
 *             </varlistentry>
 *         </variablelist>
 *         <para>Set a value to a configuration option.
 *         </para>
 *     </listitem>
 *     <listitem>
 *         <para>gboolean get_value(IBusConfigService *config, const gchar *section, const gchar *name,
 *             GValue *value, IBusError **error)
 *         </para>
 *         <variablelist>
 *             <varlistentry>
 *                 <term>config:</term>
 *                 <listitem>A configure service</listitem>
 *             </varlistentry>
 *             <varlistentry>
 *                 <term>section:</term>
 *                 <listitem>Section name of the configuration option.</listitem>
 *             </varlistentry>
 *             <varlistentry>
 *                 <term>name:</term>
 *                 <listitem>Name of the configuration option.</listitem>
 *             </varlistentry>
 *             <varlistentry>
 *                 <term>value:</term>
 *                 <listitem>GValue that holds the value.</listitem>
 *             </varlistentry>
 *             <varlistentry>
 *                 <term>error:</term>
 *                 <listitem>Error outputs here.</listitem>
 *             </varlistentry>
 *             <varlistentry>
 *                 <term>Returns:</term>
 *                 <listitem>TRUE if succeed; FALSE otherwise.</listitem>
 *             </varlistentry>
 *        </variablelist>
 *        <para>Get value of a configuration option.
 *        </para>
 *     </listitem>
 *     <listitem>
 *         <para>gboolean unset(IBusConfigService *config, const gchar *section, const gchar *name,
 *             IBusError **error)
 *         </para>
 *         <variablelist>
 *             <varlistentry>
 *                 <term>config:</term>
 *                 <listitem>A configure service</listitem>
 *             </varlistentry>
 *             <varlistentry>
 *                 <term>section:</term>
 *                 <listitem>Section name of the configuration option.</listitem>
 *             </varlistentry>
 *             <varlistentry>
 *                 <term>name:</term>
 *                 <listitem>Name of the configuration option.</listitem>
 *             </varlistentry>
 *             <varlistentry>
 *                 <term>error:</term>
 *                 <listitem>Error outputs here.</listitem>
 *             </varlistentry>
 *             <varlistentry>
 *                 <term>Returns:</term>
 *                 <listitem>TRUE if succeed; FALSE otherwise.</listitem>
 *             </varlistentry>
 *         </variablelist>
 *         <para>Remove an entry to a configuration option.
 *         </para>
 *     </listitem>
 * </itemizedlist>
 * @class 
 */
export class ConfigService extends Service {

    // Own properties of IBus-1.0.IBus.ConfigService

    static name: string

    // Constructors of IBus-1.0.IBus.ConfigService

    constructor(config?: ConfigService.ConstructorProperties) 
    /**
     * Creates an new #IBusConfigService from an #GDBusConnection.
     * @constructor 
     * @param connection An #GDBusConnection.
     * @returns A newly allocated #IBusConfigServices.
     */
    constructor(connection: Gio.DBusConnection) 
    /**
     * Creates an new #IBusConfigService from an #GDBusConnection.
     * @constructor 
     * @param connection An #GDBusConnection.
     * @returns A newly allocated #IBusConfigServices.
     */
    static new(connection: Gio.DBusConnection): ConfigService

    // Overloads of new

    /**
     * Creantes a new #IBusService.
     * @constructor 
     * @param connection A GDBusConnection.
     * @param path Object path.
     * @returns A newly allocated #IBusService
     */
    static new(connection: Gio.DBusConnection, path: string): Service
    /**
     * Creates  a new #IBusObject.
     * @constructor 
     * @returns A newly allocated #IBusObject
     */
    static new(): Object
    _init(config?: ConfigService.ConstructorProperties): void
}

export module Engine {

    // Signal callback interfaces

    /**
     * Signal callback interface for `cancel-hand-writing`
     */
    export interface CancelHandWritingSignalCallback {
        (nStrokes: number): void
    }

    /**
     * Signal callback interface for `candidate-clicked`
     */
    export interface CandidateClickedSignalCallback {
        (index: number, button: number, state: number): void
    }

    /**
     * Signal callback interface for `cursor-down`
     */
    export interface CursorDownSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `cursor-up`
     */
    export interface CursorUpSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `disable`
     */
    export interface DisableSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `enable`
     */
    export interface EnableSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `focus-in`
     */
    export interface FocusInSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `focus-out`
     */
    export interface FocusOutSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `page-down`
     */
    export interface PageDownSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `page-up`
     */
    export interface PageUpSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `process-hand-writing-event`
     */
    export interface ProcessHandWritingEventSignalCallback {
        (coordinates: any, coordinatesLen: number): void
    }

    /**
     * Signal callback interface for `process-key-event`
     */
    export interface ProcessKeyEventSignalCallback {
        (keyval: number, keycode: number, state: number): boolean
    }

    /**
     * Signal callback interface for `property-activate`
     */
    export interface PropertyActivateSignalCallback {
        (name: string | null, state: number): void
    }

    /**
     * Signal callback interface for `property-hide`
     */
    export interface PropertyHideSignalCallback {
        (name: string | null): void
    }

    /**
     * Signal callback interface for `property-show`
     */
    export interface PropertyShowSignalCallback {
        (name: string | null): void
    }

    /**
     * Signal callback interface for `reset`
     */
    export interface ResetSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `set-capabilities`
     */
    export interface SetCapabilitiesSignalCallback {
        (caps: number): void
    }

    /**
     * Signal callback interface for `set-content-type`
     */
    export interface SetContentTypeSignalCallback {
        (purpose: number, hints: number): void
    }

    /**
     * Signal callback interface for `set-cursor-location`
     */
    export interface SetCursorLocationSignalCallback {
        (x: number, y: number, w: number, h: number): void
    }

    /**
     * Signal callback interface for `set-surrounding-text`
     */
    export interface SetSurroundingTextSignalCallback {
        (text: GObject.Object, cursorPos: number, anchorPos: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Service.ConstructorProperties {

        // Own constructor properties of IBus-1.0.IBus.Engine

        engine_name?: string | null
    }

}

export interface Engine {

    // Own properties of IBus-1.0.IBus.Engine

    readonly engineName: string | null
    __gtype__: number

    // Own fields of IBus-1.0.IBus.Engine

    /**
     * Whether the engine is enabled.
     * @field 
     */
    enabled: boolean
    /**
     * Whether the engine has focus.
     * @field 
     */
    hasFocus: boolean
    /**
     * Area of cursor.
     * @field 
     */
    cursorArea: Rectangle
    /**
     * IBusCapabilite (client capabilities) flags.
     * @field 
     */
    clientCapabilities: number

    // Owm methods of IBus-1.0.IBus.Engine

    /**
     * Commit output of input method to IBus client.
     * 
     * (Note: The text object will be released, if it is floating.
     *  If caller want to keep the object, caller should make the object
     *  sink by g_object_ref_sink.)
     * @param text String commit to IBusEngine.
     */
    commitText(text: Text): void
    /**
     * Delete surrounding text.
     * @param offset The offset of the first char.
     * @param nchars Number of chars to be deleted.
     */
    deleteSurroundingText(offset: number, nchars: number): void
    /**
     * Forward the key event.
     * @param keyval KeySym.
     * @param keycode keyboard scancode.
     * @param state Key modifier flags.
     */
    forwardKeyEvent(keyval: number, keycode: number, state: number): void
    /**
     * Get content-type (primary purpose and hints) of the current input
     * context.
     * 
     * See also: #IBusEngine::set-content-type
     */
    getContentType(): [ /* purpose */ number, /* hints */ number ]
    /**
     * Return the name of #IBusEngine.
     * @returns Name of #IBusEngine.
     */
    getName(): string
    /**
     * Get surrounding text.
     * 
     * It is also used to tell the input-context that the engine will
     * utilize surrounding-text.  In that case, it must be called in
     * #IBusEngine::enable handler, with both `text` and `cursor` set to
     * %NULL.
     * 
     * See also: #IBusEngine::set-surrounding-text
     */
    getSurroundingText(): [ /* text */ Text, /* cursorPos */ number, /* anchorPos */ number ]
    /**
     * Hide the auxiliary bar.
     */
    hideAuxiliaryText(): void
    /**
     * Hide the lookup table.
     */
    hideLookupTable(): void
    /**
     * Hide the pre-edit buffer.
     */
    hidePreeditText(): void
    /**
     * Register and show properties in language bar.
     * 
     * (Note: The prop_list object will be released, if it is floating.
     *  If caller want to keep the object, caller should make the object
     *  sink by g_object_ref_sink.)
     * @param propList Property List.
     */
    registerProperties(propList: PropList): void
    /**
     * Show the auxiliary bar.
     */
    showAuxiliaryText(): void
    /**
     * Show the lookup table.
     */
    showLookupTable(): void
    /**
     * Show the pre-edit buffer.
     */
    showPreeditText(): void
    /**
     * Update the auxiliary bar.
     * 
     * (Note: The text object will be released, if it is floating.
     *  If caller want to keep the object, caller should make the object
     *  sink by g_object_ref_sink.)
     * @param text Update content.
     * @param visible Whether the auxiliary text bar is visible.
     */
    updateAuxiliaryText(text: Text, visible: boolean): void
    /**
     * Update the lookup table.
     * 
     * (Note: The table object will be released, if it is floating.
     *  If caller want to keep the object, caller should make the object
     *  sink by g_object_ref_sink.)
     * @param lookupTable An lookup_table.
     * @param visible Whether the lookup_table is visible.
     */
    updateLookupTable(lookupTable: LookupTable, visible: boolean): void
    /**
     * Fast update for big lookup table.
     * 
     * If size of lookup table is not over table page size *4,
     * then it calls ibus_engine_update_lookup_table().
     * 
     * (Note: The table object will be released, if it is floating.
     *  If caller want to keep the object, caller should make the object
     *  sink by g_object_ref_sink.)
     * @param lookupTable An lookup_table.
     * @param visible Whether the lookup_table is visible.
     */
    updateLookupTableFast(lookupTable: LookupTable, visible: boolean): void
    /**
     * Update the pre-edit buffer.
     * 
     * (Note: The text object will be released, if it is floating.
     *  If caller want to keep the object, caller should make the object
     *  sink by g_object_ref_sink.)
     * @param text Update content.
     * @param cursorPos Current position of cursor
     * @param visible Whether the pre-edit buffer is visible.
     */
    updatePreeditText(text: Text, cursorPos: number, visible: boolean): void
    /**
     * Update the pre-edit buffer with commit mode. Similar to
     * ibus_engine_update_preedit_text(), this function allows users to specify
     * the behavior on focus out when the pre-edit buffer is visible.
     * 
     * If `mode` is IBUS_ENGINE_PREEDIT_COMMIT, contents of the pre-edit buffer
     * will be comitted and cleared.
     * If `mode` is IBUS_ENGINE_PREEDIT_CLEAR, contents of the pre-edit buffer
     * will be cleared only.
     * 
     * (Note: The text object will be released, if it is floating.
     *  If caller want to keep the object, caller should make the object
     *  sink by g_object_ref_sink.)
     * @param text Update content.
     * @param cursorPos Current position of cursor
     * @param visible Whether the pre-edit buffer is visible.
     * @param mode Pre-edit commit mode when the focus is lost.
     */
    updatePreeditTextWithMode(text: Text, cursorPos: number, visible: boolean, mode: PreeditFocusMode): void
    /**
     * Update the state displayed in language bar.
     * 
     * (Note: The prop object will be released, if it is floating.
     *  If caller want to keep the object, caller should make the object
     *  sink by g_object_ref_sink.)
     * @param prop IBusProperty to be updated.
     */
    updateProperty(prop: Property): void

    // Own virtual methods of IBus-1.0.IBus.Engine

    cancelHandWriting(nStrokes: number): void
    candidateClicked(index: number, button: number, state: number): void
    cursorDown(): void
    cursorUp(): void
    disable(): void
    enable(): void
    focusIn(): void
    focusOut(): void
    pageDown(): void
    pageUp(): void
    processHandWritingEvent(coordinates: number, coordinatesLen: number): void
    processKeyEvent(keyval: number, keycode: number, state: number): boolean
    propertyActivate(propName: string, propState: number): void
    propertyHide(propName: string): void
    propertyShow(propName: string): void
    reset(): void
    setCapabilities(caps: number): void
    setContentType(purpose: number, hints: number): void
    setCursorLocation(x: number, y: number, w: number, h: number): void
    setSurroundingText(text: Text, cursorIndex: number, anchorPos: number): void

    // Own signals of IBus-1.0.IBus.Engine

    connect(sigName: "cancel-hand-writing", callback: Engine.CancelHandWritingSignalCallback): number
    on(sigName: "cancel-hand-writing", callback: Engine.CancelHandWritingSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cancel-hand-writing", callback: Engine.CancelHandWritingSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cancel-hand-writing", callback: Engine.CancelHandWritingSignalCallback): NodeJS.EventEmitter
    emit(sigName: "cancel-hand-writing", ...args: any[]): void
    connect(sigName: "candidate-clicked", callback: Engine.CandidateClickedSignalCallback): number
    on(sigName: "candidate-clicked", callback: Engine.CandidateClickedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "candidate-clicked", callback: Engine.CandidateClickedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "candidate-clicked", callback: Engine.CandidateClickedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "candidate-clicked", button: number, state: number, ...args: any[]): void
    connect(sigName: "cursor-down", callback: Engine.CursorDownSignalCallback): number
    on(sigName: "cursor-down", callback: Engine.CursorDownSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-down", callback: Engine.CursorDownSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-down", callback: Engine.CursorDownSignalCallback): NodeJS.EventEmitter
    emit(sigName: "cursor-down", ...args: any[]): void
    connect(sigName: "cursor-up", callback: Engine.CursorUpSignalCallback): number
    on(sigName: "cursor-up", callback: Engine.CursorUpSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-up", callback: Engine.CursorUpSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-up", callback: Engine.CursorUpSignalCallback): NodeJS.EventEmitter
    emit(sigName: "cursor-up", ...args: any[]): void
    connect(sigName: "disable", callback: Engine.DisableSignalCallback): number
    on(sigName: "disable", callback: Engine.DisableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "disable", callback: Engine.DisableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "disable", callback: Engine.DisableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "disable", ...args: any[]): void
    connect(sigName: "enable", callback: Engine.EnableSignalCallback): number
    on(sigName: "enable", callback: Engine.EnableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enable", callback: Engine.EnableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enable", callback: Engine.EnableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "enable", ...args: any[]): void
    connect(sigName: "focus-in", callback: Engine.FocusInSignalCallback): number
    on(sigName: "focus-in", callback: Engine.FocusInSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-in", callback: Engine.FocusInSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-in", callback: Engine.FocusInSignalCallback): NodeJS.EventEmitter
    emit(sigName: "focus-in", ...args: any[]): void
    connect(sigName: "focus-out", callback: Engine.FocusOutSignalCallback): number
    on(sigName: "focus-out", callback: Engine.FocusOutSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-out", callback: Engine.FocusOutSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-out", callback: Engine.FocusOutSignalCallback): NodeJS.EventEmitter
    emit(sigName: "focus-out", ...args: any[]): void
    connect(sigName: "page-down", callback: Engine.PageDownSignalCallback): number
    on(sigName: "page-down", callback: Engine.PageDownSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "page-down", callback: Engine.PageDownSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "page-down", callback: Engine.PageDownSignalCallback): NodeJS.EventEmitter
    emit(sigName: "page-down", ...args: any[]): void
    connect(sigName: "page-up", callback: Engine.PageUpSignalCallback): number
    on(sigName: "page-up", callback: Engine.PageUpSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "page-up", callback: Engine.PageUpSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "page-up", callback: Engine.PageUpSignalCallback): NodeJS.EventEmitter
    emit(sigName: "page-up", ...args: any[]): void
    connect(sigName: "process-hand-writing-event", callback: Engine.ProcessHandWritingEventSignalCallback): number
    on(sigName: "process-hand-writing-event", callback: Engine.ProcessHandWritingEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "process-hand-writing-event", callback: Engine.ProcessHandWritingEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "process-hand-writing-event", callback: Engine.ProcessHandWritingEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "process-hand-writing-event", coordinatesLen: number, ...args: any[]): void
    connect(sigName: "process-key-event", callback: Engine.ProcessKeyEventSignalCallback): number
    on(sigName: "process-key-event", callback: Engine.ProcessKeyEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "process-key-event", callback: Engine.ProcessKeyEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "process-key-event", callback: Engine.ProcessKeyEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "process-key-event", keycode: number, state: number, ...args: any[]): void
    connect(sigName: "property-activate", callback: Engine.PropertyActivateSignalCallback): number
    on(sigName: "property-activate", callback: Engine.PropertyActivateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-activate", callback: Engine.PropertyActivateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-activate", callback: Engine.PropertyActivateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "property-activate", state: number, ...args: any[]): void
    connect(sigName: "property-hide", callback: Engine.PropertyHideSignalCallback): number
    on(sigName: "property-hide", callback: Engine.PropertyHideSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-hide", callback: Engine.PropertyHideSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-hide", callback: Engine.PropertyHideSignalCallback): NodeJS.EventEmitter
    emit(sigName: "property-hide", ...args: any[]): void
    connect(sigName: "property-show", callback: Engine.PropertyShowSignalCallback): number
    on(sigName: "property-show", callback: Engine.PropertyShowSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-show", callback: Engine.PropertyShowSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-show", callback: Engine.PropertyShowSignalCallback): NodeJS.EventEmitter
    emit(sigName: "property-show", ...args: any[]): void
    connect(sigName: "reset", callback: Engine.ResetSignalCallback): number
    on(sigName: "reset", callback: Engine.ResetSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reset", callback: Engine.ResetSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reset", callback: Engine.ResetSignalCallback): NodeJS.EventEmitter
    emit(sigName: "reset", ...args: any[]): void
    connect(sigName: "set-capabilities", callback: Engine.SetCapabilitiesSignalCallback): number
    on(sigName: "set-capabilities", callback: Engine.SetCapabilitiesSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-capabilities", callback: Engine.SetCapabilitiesSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-capabilities", callback: Engine.SetCapabilitiesSignalCallback): NodeJS.EventEmitter
    emit(sigName: "set-capabilities", ...args: any[]): void
    connect(sigName: "set-content-type", callback: Engine.SetContentTypeSignalCallback): number
    on(sigName: "set-content-type", callback: Engine.SetContentTypeSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-content-type", callback: Engine.SetContentTypeSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-content-type", callback: Engine.SetContentTypeSignalCallback): NodeJS.EventEmitter
    emit(sigName: "set-content-type", hints: number, ...args: any[]): void
    connect(sigName: "set-cursor-location", callback: Engine.SetCursorLocationSignalCallback): number
    on(sigName: "set-cursor-location", callback: Engine.SetCursorLocationSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-cursor-location", callback: Engine.SetCursorLocationSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-cursor-location", callback: Engine.SetCursorLocationSignalCallback): NodeJS.EventEmitter
    emit(sigName: "set-cursor-location", y: number, w: number, h: number, ...args: any[]): void
    connect(sigName: "set-surrounding-text", callback: Engine.SetSurroundingTextSignalCallback): number
    on(sigName: "set-surrounding-text", callback: Engine.SetSurroundingTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-surrounding-text", callback: Engine.SetSurroundingTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-surrounding-text", callback: Engine.SetSurroundingTextSignalCallback): NodeJS.EventEmitter
    emit(sigName: "set-surrounding-text", cursorPos: number, anchorPos: number, ...args: any[]): void

    // Class property signals of IBus-1.0.IBus.Engine

    connect(sigName: "notify::engine-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::engine-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::engine-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::engine-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::engine-name", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An IBusEngine provides infrastructure for input method engine.
 * Developers can "extend" this class for input method engine development.
 * 
 * see_also: #IBusComponent, #IBusEngineDesc
 * @class 
 */
export class Engine extends Service {

    // Own properties of IBus-1.0.IBus.Engine

    static name: string

    // Constructors of IBus-1.0.IBus.Engine

    constructor(config?: Engine.ConstructorProperties) 
    /**
     * Create a new #IBusEngine.
     * @constructor 
     * @param engineName Name of the IBusObject.
     * @param objectPath Path for IBusService.
     * @param connection An opened GDBusConnection.
     * @returns A newly allocated IBusEngine.
     */
    constructor(engineName: string, objectPath: string, connection: Gio.DBusConnection) 
    /**
     * Create a new #IBusEngine.
     * @constructor 
     * @param engineName Name of the IBusObject.
     * @param objectPath Path for IBusService.
     * @param connection An opened GDBusConnection.
     * @returns A newly allocated IBusEngine.
     */
    static new(engineName: string, objectPath: string, connection: Gio.DBusConnection): Engine

    // Overloads of new

    /**
     * Creantes a new #IBusService.
     * @constructor 
     * @param connection A GDBusConnection.
     * @param path Object path.
     * @returns A newly allocated #IBusService
     */
    static new(connection: Gio.DBusConnection, path: string): Service
    /**
     * Creates  a new #IBusObject.
     * @constructor 
     * @returns A newly allocated #IBusObject
     */
    static new(): Object
    /**
     * Create a new #IBusEngine.
     * @constructor 
     * @param engineType GType of #IBusEngine.
     * @param engineName Name of the IBusObject.
     * @param objectPath Path for IBusService.
     * @param connection An opened GDBusConnection.
     * @returns A newly allocated IBusEngine.
     */
    static newWithType(engineType: GObject.GType, engineName: string, objectPath: string, connection: Gio.DBusConnection): Engine
    _init(config?: Engine.ConstructorProperties): void
}

export module EngineDesc {

    // Constructor properties interface

    export interface ConstructorProperties extends Serializable.ConstructorProperties {

        // Own constructor properties of IBus-1.0.IBus.EngineDesc

        /**
         * The author of engine description
         */
        author?: string | null
        /**
         * The description of engine description
         */
        description?: string | null
        /**
         * The hotkeys of engine description
         */
        hotkeys?: string | null
        /**
         * The icon of engine description
         */
        icon?: string | null
        /**
         * The key of IBusProperty to change panel icon dynamically.
         */
        icon_prop_key?: string | null
        /**
         * The language of engine description
         */
        language?: string | null
        /**
         * The layout of engine description
         */
        layout?: string | null
        /**
         * The keyboard option of engine description
         */
        layout_option?: string | null
        /**
         * The keyboard variant of engine description
         */
        layout_variant?: string | null
        /**
         * The license of engine description
         */
        license?: string | null
        /**
         * The longname of engine description
         */
        longname?: string | null
        /**
         * The name of engine description
         */
        name?: string | null
        /**
         * The rank of engine description
         */
        rank?: number | null
        /**
         * The exec lists of the engine setup command
         */
        setup?: string | null
        /**
         * The symbol chars of engine description instead of icon image
         */
        symbol?: string | null
        /**
         * The textdomain of engine description
         */
        textdomain?: string | null
        /**
         * The version number of engine description
         */
        version?: string | null
    }

}

export interface EngineDesc {

    // Own properties of IBus-1.0.IBus.EngineDesc

    /**
     * The author of engine description
     */
    readonly author: string | null
    /**
     * The description of engine description
     */
    readonly description: string | null
    /**
     * The hotkeys of engine description
     */
    readonly hotkeys: string | null
    /**
     * The icon of engine description
     */
    readonly icon: string | null
    /**
     * The key of IBusProperty to change panel icon dynamically.
     */
    readonly iconPropKey: string | null
    /**
     * The language of engine description
     */
    readonly language: string | null
    /**
     * The layout of engine description
     */
    readonly layout: string | null
    /**
     * The keyboard option of engine description
     */
    readonly layoutOption: string | null
    /**
     * The keyboard variant of engine description
     */
    readonly layoutVariant: string | null
    /**
     * The license of engine description
     */
    readonly license: string | null
    /**
     * The longname of engine description
     */
    readonly longname: string | null
    /**
     * The name of engine description
     */
    readonly name: string | null
    /**
     * The rank of engine description
     */
    readonly rank: number
    /**
     * The exec lists of the engine setup command
     */
    readonly setup: string | null
    /**
     * The symbol chars of engine description instead of icon image
     */
    readonly symbol: string | null
    /**
     * The textdomain of engine description
     */
    readonly textdomain: string | null
    /**
     * The version number of engine description
     */
    readonly version: string | null
    __gtype__: number

    // Own fields of IBus-1.0.IBus.EngineDesc

    parent: Serializable & GObject.InitiallyUnowned

    // Owm methods of IBus-1.0.IBus.EngineDesc

    /**
     * Gets the author property in IBusEngineDesc. It should not be freed.
     * @returns author property in IBusEngineDesc
     */
    getAuthor(): string
    /**
     * Gets the description property in IBusEngineDesc. It should not be freed.
     * @returns description property in IBusEngineDesc
     */
    getDescription(): string
    /**
     * Gets the hotkeys property in IBusEngineDesc. It should not be freed.
     * @returns hotkeys property in IBusEngineDesc
     */
    getHotkeys(): string
    /**
     * Gets the icon property in IBusEngineDesc. It should not be freed.
     * @returns icon property in IBusEngineDesc
     */
    getIcon(): string
    /**
     * Gets the key of IBusProperty to load the panel icon dynamically
     * in IBusEngineDesc. It should not be freed.
     * @returns IBusProperty.key for dynamic panel icon in IBusEngineDesc
     */
    getIconPropKey(): string
    /**
     * Gets the language property in IBusEngineDesc. It should not be freed.
     * @returns language property in IBusEngineDesc
     */
    getLanguage(): string
    /**
     * Gets the layout property in IBusEngineDesc. It should not be freed.
     * @returns layout property in IBusEngineDesc
     */
    getLayout(): string
    /**
     * Gets the keyboard option property in IBusEngineDesc. It should not be freed.
     * @returns keyboard option property in IBusEngineDesc
     */
    getLayoutOption(): string
    /**
     * Gets the keyboard variant property in IBusEngineDesc. It should not be freed.
     * @returns keyboard variant property in IBusEngineDesc
     */
    getLayoutVariant(): string
    /**
     * Gets the license property in IBusEngineDesc. It should not be freed.
     * @returns license property in IBusEngineDesc
     */
    getLicense(): string
    /**
     * Gets the longname property in IBusEngineDesc. It should not be freed.
     * @returns longname property in IBusEngineDesc
     */
    getLongname(): string
    /**
     * Gets the name property in IBusEngineDesc. It should not be freed.
     * @returns name property in IBusEngineDesc
     */
    getName(): string
    /**
     * Gets the rank property in IBusEngineDesc.
     * @returns rank property in IBusEngineDesc
     */
    getRank(): number
    /**
     * Gets the setup property in IBusEngineDesc. It should not be freed.
     * @returns setup property in IBusEngineDesc
     */
    getSetup(): string
    /**
     * Gets the symbol property in IBusEngineDesc. It should not be freed.
     * @returns symbol property in IBusEngineDesc
     */
    getSymbol(): string
    /**
     * Gets the textdomain property in IBusEngineDesc. It should not be freed.
     * @returns textdomain in IBusEngineDesc
     */
    getTextdomain(): string
    /**
     * Gets the version property in IBusEngineDesc. It should not be freed.
     * @returns version in IBusEngineDesc
     */
    getVersion(): string
    /**
     * Output XML-formatted input method engine description.
     * The result will be append to GString specified in `output`.
     * @param output XML-formatted Input method engine description.
     * @param indent Number of indent (showed as 4 spaces).
     */
    output(output: GLib.String, indent: number): void

    // Class property signals of IBus-1.0.IBus.EngineDesc

    connect(sigName: "notify::author", callback: (...args: any[]) => void): number
    on(sigName: "notify::author", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::author", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::author", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::hotkeys", callback: (...args: any[]) => void): number
    on(sigName: "notify::hotkeys", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hotkeys", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hotkeys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hotkeys", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::icon-prop-key", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-prop-key", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-prop-key", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-prop-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-prop-key", ...args: any[]): void
    connect(sigName: "notify::language", callback: (...args: any[]) => void): number
    on(sigName: "notify::language", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::language", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::language", ...args: any[]): void
    connect(sigName: "notify::layout", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout", ...args: any[]): void
    connect(sigName: "notify::layout-option", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-option", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-option", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-option", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-option", ...args: any[]): void
    connect(sigName: "notify::layout-variant", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-variant", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-variant", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-variant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-variant", ...args: any[]): void
    connect(sigName: "notify::license", callback: (...args: any[]) => void): number
    on(sigName: "notify::license", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::license", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::longname", callback: (...args: any[]) => void): number
    on(sigName: "notify::longname", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::longname", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::longname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::longname", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::rank", callback: (...args: any[]) => void): number
    on(sigName: "notify::rank", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rank", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rank", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rank", ...args: any[]): void
    connect(sigName: "notify::setup", callback: (...args: any[]) => void): number
    on(sigName: "notify::setup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::setup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::setup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::setup", ...args: any[]): void
    connect(sigName: "notify::symbol", callback: (...args: any[]) => void): number
    on(sigName: "notify::symbol", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::symbol", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::symbol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::symbol", ...args: any[]): void
    connect(sigName: "notify::textdomain", callback: (...args: any[]) => void): number
    on(sigName: "notify::textdomain", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::textdomain", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::textdomain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::textdomain", ...args: any[]): void
    connect(sigName: "notify::version", callback: (...args: any[]) => void): number
    on(sigName: "notify::version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An IBusEngineDesc stores description data of IBusEngine.
 * The description data can either be passed to ibus_engine_desc_new(),
 * or loaded from an XML node through ibus_engine_desc_new_from_xml_node()
 * to construct IBusEngineDesc.
 * 
 * However, the recommended way to load engine description data is
 * using ibus_component_new_from_file() to load a component file,
 * which also includes engine description data.
 * 
 * see_also: #IBusComponent, #IBusEngine
 * @class 
 */
export class EngineDesc extends Serializable {

    // Own properties of IBus-1.0.IBus.EngineDesc

    static name: string

    // Constructors of IBus-1.0.IBus.EngineDesc

    constructor(config?: EngineDesc.ConstructorProperties) 
    /**
     * Creates a new #IBusEngineDesc.
     * @constructor 
     * @param name Name of the engine.
     * @param longname Long name of the input method engine.
     * @param description Input method engine description.
     * @param language Language (e.g. zh, jp) supported by this input method engine.
     * @param license License of the input method engine.
     * @param author Author of the input method engine.
     * @param icon Icon file of this engine.
     * @param layout Keyboard layout
     * @returns A newly allocated IBusEngineDesc.
     */
    constructor(name: string, longname: string, description: string, language: string, license: string, author: string, icon: string, layout: string) 
    /**
     * Creates a new #IBusEngineDesc.
     * @constructor 
     * @param name Name of the engine.
     * @param longname Long name of the input method engine.
     * @param description Input method engine description.
     * @param language Language (e.g. zh, jp) supported by this input method engine.
     * @param license License of the input method engine.
     * @param author Author of the input method engine.
     * @param icon Icon file of this engine.
     * @param layout Keyboard layout
     * @returns A newly allocated IBusEngineDesc.
     */
    static new(name: string, longname: string, description: string, language: string, license: string, author: string, icon: string, layout: string): EngineDesc

    // Overloads of new

    /**
     * Creates a new instance of an #IBusSerializable.
     * @constructor 
     * @returns a new instance of #IBusSerializable.
     */
    static new(): Serializable
    /**
     * Creates  a new #IBusObject.
     * @constructor 
     * @returns A newly allocated #IBusObject
     */
    static new(): Object
    /**
     * Creates a new IBusEngineDesc from an XML node.
     * <note><para>This function is called by ibus_component_new_from_file(),
     *  so developers normally do not need to call it directly.
     * </para></note>
     * @constructor 
     * @param node An XML node
     * @returns A newly allocated IBusEngineDesc that contains description from @node.
     */
    static newFromXmlNode(node: XML): EngineDesc
    _init(config?: EngineDesc.ConstructorProperties): void
}

export module EngineSimple {

    // Constructor properties interface

    export interface ConstructorProperties extends Engine.ConstructorProperties {
    }

}

export interface EngineSimple {

    // Own properties of IBus-1.0.IBus.EngineSimple

    __gtype__: number

    // Owm methods of IBus-1.0.IBus.EngineSimple

    /**
     * Call ibus_engine_simple_add_table() internally by locale.
     * @param file The compose file. If the `file` is %NULL,        the current locale is used.
     * @returns %TRUE if the @file is loaded.
     */
    addComposeFile(file: string): boolean
    /**
     * Adds an additional table to search to the engine. Each row of the table
     * consists of max_seq_len key symbols followed by two guint16 interpreted as
     * the high and low words of a gunicode value. Tables are searched starting from
     * the last added.
     * 
     * The table must be sorted in dictionary order on the numeric value of the key
     * symbol fields. (Values beyond the length of the sequence should be zero.)
     * @param data The table which must be available      during the whole life of the simple engine.
     * @param maxSeqLen Maximum length of a swquence in the table (cannot be greater      than %IBUS_MAX_COMPOSE_LEN)
     * @param nSeqs number of sequences in the table
     */
    addTable(data: number[], maxSeqLen: number, nSeqs: number): void
    /**
     * Call ibus_engine_simple_add_table() internally by locale.
     * @param locale The locale name. If the locale is %NULL,                        the current locale is used.
     * @returns %TRUE if the @locale is matched to the table.
     */
    addTableByLocale(locale: string | null): boolean

    // Class property signals of IBus-1.0.IBus.EngineSimple

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::engine-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::engine-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::engine-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::engine-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::engine-name", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An IBusEngineSimple provides table-based input method logic.
 * 
 * see_also: #IBusEngine
 * @class 
 */
export class EngineSimple extends Engine {

    // Own properties of IBus-1.0.IBus.EngineSimple

    static name: string

    // Constructors of IBus-1.0.IBus.EngineSimple

    constructor(config?: EngineSimple.ConstructorProperties) 
    _init(config?: EngineSimple.ConstructorProperties): void

    // Conflicting static methods

    static new(...args: any[]): any
}

export module Factory {

    // Signal callback interfaces

    /**
     * Signal callback interface for `create-engine`
     */
    export interface CreateEngineSignalCallback {
        (engineName: string | null): Engine | null
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Service.ConstructorProperties {
    }

}

export interface Factory {

    // Own properties of IBus-1.0.IBus.Factory

    __gtype__: number

    // Owm methods of IBus-1.0.IBus.Factory

    /**
     * Add an engine to the factory.
     * @param engineName Name of an engine.
     * @param engineType GType of an engine.
     */
    addEngine(engineName: string, engineType: GObject.GType): void
    // Has conflict: createEngine(engineName: string): Engine

    // Own virtual methods of IBus-1.0.IBus.Factory

    /**
     * Creates an #IBusEngine with `engine_name`.
     * @virtual 
     * @param engineName Name of an engine.
     * @returns #IBusEngine with @engine_name.
     */
    createEngine(engineName: string): Engine

    // Own signals of IBus-1.0.IBus.Factory

    connect(sigName: "create-engine", callback: Factory.CreateEngineSignalCallback): number
    on(sigName: "create-engine", callback: Factory.CreateEngineSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "create-engine", callback: Factory.CreateEngineSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "create-engine", callback: Factory.CreateEngineSignalCallback): NodeJS.EventEmitter
    emit(sigName: "create-engine", ...args: any[]): void

    // Class property signals of IBus-1.0.IBus.Factory

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An IBusFactory is an #IBusService that creates input method engine (IME) instance.
 * It provides CreateEngine remote method, which creates an IME instance by name,
 * and returns the D-Bus object path to IBus daemon.
 * 
 * see_also: #IBusEngine
 * @class 
 */
export class Factory extends Service {

    // Own properties of IBus-1.0.IBus.Factory

    static name: string

    // Constructors of IBus-1.0.IBus.Factory

    constructor(config?: Factory.ConstructorProperties) 
    /**
     * Creates a new #IBusFactory.
     * @constructor 
     * @param connection An GDBusConnection.
     * @returns A newly allocated #IBusFactory.
     */
    constructor(connection: Gio.DBusConnection) 
    /**
     * Creates a new #IBusFactory.
     * @constructor 
     * @param connection An GDBusConnection.
     * @returns A newly allocated #IBusFactory.
     */
    static new(connection: Gio.DBusConnection): Factory

    // Overloads of new

    /**
     * Creantes a new #IBusService.
     * @constructor 
     * @param connection A GDBusConnection.
     * @param path Object path.
     * @returns A newly allocated #IBusService
     */
    static new(connection: Gio.DBusConnection, path: string): Service
    /**
     * Creates  a new #IBusObject.
     * @constructor 
     * @returns A newly allocated #IBusObject
     */
    static new(): Object
    _init(config?: Factory.ConstructorProperties): void
}

export module HotkeyProfile {

    // Signal callback interfaces

    /**
     * Signal callback interface for `trigger`
     */
    export interface TriggerSignalCallback {
        (event: number, userData: any): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Serializable.ConstructorProperties {
    }

}

export interface HotkeyProfile {

    // Own properties of IBus-1.0.IBus.HotkeyProfile

    __gtype__: number

    // Own fields of IBus-1.0.IBus.HotkeyProfile

    parent: Serializable & GObject.InitiallyUnowned

    // Owm methods of IBus-1.0.IBus.HotkeyProfile

    /**
     * Adds a hotkey and its associated event to an #IBusHotkeyProfile.
     * @param keyval Keycode of the hotkey.
     * @param modifiers Modifiers of the hotkey.
     * @param event The event to be associated.
     * @returns Always %TRUE.
     */
    addHotkey(keyval: number, modifiers: number, event: GLib.Quark): boolean
    /**
     * Adds a hotkey and its associated event to an #IBusHotkeyProfile.
     * The hotkey is in string format, such like
     * <constant>Control+Shift+A</constant>.
     * @param str Key in string representation.  '+' is the separator.
     * @param event The event to be associated.
     * @returns FALSE if @str contains invalid symbol; TRUE otherwise.
     */
    addHotkeyFromString(str: string, event: GLib.Quark): boolean
    /**
     * Emits a <constant>::trigger</constant> signal when a hotkey is in a profile.
     * @param keyval Keycode of the hotkey.
     * @param modifiers Modifiers of the hotkey.
     * @param prevKeyval Keycode of the hotkey.
     * @param prevModifiers Modifiers of the hotkey.
     * @param userData user data for signal "trigger".
     * @returns 0 if releasing a hotkey and the hotkey is not in the profile; an associated event otherwise. See also: ::trigger
     */
    filterKeyEvent(keyval: number, modifiers: number, prevKeyval: number, prevModifiers: number, userData: any): GLib.Quark
    lookupHotkey(keyval: number, modifiers: number): GLib.Quark
    /**
     * Removes the hotkey for an #IBusHotkeyProfile.
     * @param keyval Keycode of the hotkey.
     * @param modifiers Modifiers of the hotkey.
     * @returns %FALSE if the key is not in @profile, %TRUE otherwise.
     */
    removeHotkey(keyval: number, modifiers: number): boolean
    /**
     * Removes the hotkey for an #IBusHotkeyProfile by event.
     * @param event The associated event.
     * @returns %FALSE if no such event in @profile, %TRUE otherwise.
     */
    removeHotkeyByEvent(event: GLib.Quark): boolean

    // Own virtual methods of IBus-1.0.IBus.HotkeyProfile

    trigger(event: GLib.Quark): void

    // Own signals of IBus-1.0.IBus.HotkeyProfile

    connect(sigName: "trigger", callback: HotkeyProfile.TriggerSignalCallback): number
    on(sigName: "trigger", callback: HotkeyProfile.TriggerSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "trigger", callback: HotkeyProfile.TriggerSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "trigger", callback: HotkeyProfile.TriggerSignalCallback): NodeJS.EventEmitter
    emit(sigName: "trigger", userData: any, ...args: any[]): void

    // Class property signals of IBus-1.0.IBus.HotkeyProfile

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An opaque data type representing an IBusHotkeyProfile.
 * @class 
 */
export class HotkeyProfile extends Serializable {

    // Own properties of IBus-1.0.IBus.HotkeyProfile

    static name: string

    // Constructors of IBus-1.0.IBus.HotkeyProfile

    constructor(config?: HotkeyProfile.ConstructorProperties) 
    /**
     * Creates a new #IBusHotkeyProfile.
     * @constructor 
     * @returns A newly allocated #IBusHotkeyProfile.
     */
    constructor() 
    /**
     * Creates a new #IBusHotkeyProfile.
     * @constructor 
     * @returns A newly allocated #IBusHotkeyProfile.
     */
    static new(): HotkeyProfile

    // Overloads of new

    /**
     * Creates a new instance of an #IBusSerializable.
     * @constructor 
     * @returns a new instance of #IBusSerializable.
     */
    static new(): Serializable
    /**
     * Creates  a new #IBusObject.
     * @constructor 
     * @returns A newly allocated #IBusObject
     */
    static new(): Object
    _init(config?: HotkeyProfile.ConstructorProperties): void
}

export module InputContext {

    // Signal callback interfaces

    /**
     * Signal callback interface for `commit-text`
     */
    export interface CommitTextSignalCallback {
        (text: Text): void
    }

    /**
     * Signal callback interface for `cursor-down-lookup-table`
     */
    export interface CursorDownLookupTableSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `cursor-up-lookup-table`
     */
    export interface CursorUpLookupTableSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `delete-surrounding-text`
     */
    export interface DeleteSurroundingTextSignalCallback {
        (offset: number, nChars: number): void
    }

    /**
     * Signal callback interface for `disabled`
     */
    export interface DisabledSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `enabled`
     */
    export interface EnabledSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `forward-key-event`
     */
    export interface ForwardKeyEventSignalCallback {
        (keyval: number, keycode: number, modifiers: number): void
    }

    /**
     * Signal callback interface for `hide-auxiliary-text`
     */
    export interface HideAuxiliaryTextSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `hide-lookup-table`
     */
    export interface HideLookupTableSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `hide-preedit-text`
     */
    export interface HidePreeditTextSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `page-down-lookup-table`
     */
    export interface PageDownLookupTableSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `page-up-lookup-table`
     */
    export interface PageUpLookupTableSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `register-properties`
     */
    export interface RegisterPropertiesSignalCallback {
        (props: PropList): void
    }

    /**
     * Signal callback interface for `show-auxiliary-text`
     */
    export interface ShowAuxiliaryTextSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `show-lookup-table`
     */
    export interface ShowLookupTableSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `show-preedit-text`
     */
    export interface ShowPreeditTextSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `update-auxiliary-text`
     */
    export interface UpdateAuxiliaryTextSignalCallback {
        (text: Text, visible: boolean): void
    }

    /**
     * Signal callback interface for `update-lookup-table`
     */
    export interface UpdateLookupTableSignalCallback {
        (table: LookupTable, visible: boolean): void
    }

    /**
     * Signal callback interface for `update-preedit-text`
     */
    export interface UpdatePreeditTextSignalCallback {
        (text: Text, cursorPos: number, visible: boolean): void
    }

    /**
     * Signal callback interface for `update-property`
     */
    export interface UpdatePropertySignalCallback {
        (prop: Property): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Proxy.ConstructorProperties {
    }

}

export interface InputContext extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Own properties of IBus-1.0.IBus.InputContext

    __gtype__: number

    // Own fields of IBus-1.0.IBus.InputContext

    parent: Proxy & Gio.DBusProxy

    // Owm methods of IBus-1.0.IBus.InputContext

    /**
     * Clear handwriting stroke(s) in the current input method engine.
     * 
     * see_also: #IBusEngine::cancel-hand-writing
     * @param nStrokes The number of strokes to be removed. Pass 0 to remove all.
     */
    cancelHandWriting(nStrokes: number): void
    /**
     * Invoked when the client application get focus. An asynchronous IPC will
     * be performed.
     * 
     * see_also: #IBusEngine::focus_in.
     */
    focusIn(): void
    /**
     * Invoked when the client application get focus. An asynchronous IPC will be performed.
     * 
     * see_also: #IBusEngine::focus_out.
     */
    focusOut(): void
    /**
     * Gets an IME engine description for the context.
     * A synchronous IPC will be performed.
     * @returns An IME engine description for the context, or NULL.
     */
    getEngine(): EngineDesc
    /**
     * An asynchronous IPC will be performed.
     * @param timeoutMsec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or     %NULL if you don't care about the result of the method invocation.
     */
    getEngineAsync(timeoutMsec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with ibus_input_context_get_engine_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_input_context_get_engine_async().
     * @returns An IME engine description for the context, or     %NULL.
     */
    getEngineAsyncFinish(res: Gio.AsyncResult): EngineDesc
    /**
     * Check whether the current engine requires surrounding-text.
     * @returns %TRUE if surrounding-text is needed by the current engine; %FALSE otherwise.
     */
    needsSurroundingText(): boolean
    /**
     * Pass a handwriting stroke to an input method engine.
     * 
     * In this API, a coordinate (0.0, 0.0) represents the top-left corner of an area for
     * handwriting, and (1.0, 1.0) does the bottom-right. Therefore, for example, if
     * a user writes a character 'L', the array would be something like [0.0, 0.0, 0.0, 1.0, 1.0, 1.0]
     * and coordinates_len would be 6.
     * 
     * The function is usually called when a user releases the mouse button in a hand
     * writing area.
     * 
     * see_also: #IBusEngine::process-hand-writing-event
     * @param coordinates An array of gdouble (0.0 to 1.0) which represents a stroke (i.e. [x1, y1, x2, y2, x3, y3, ...]).
     * @param coordinatesLen The number of elements in the array. The number should be even and >= 4.
     */
    processHandWritingEvent(coordinates: number, coordinatesLen: number): void
    /**
     * Pass the key event to input method engine and wait for the reply from
     * ibus (i.e. synchronous IPC).
     * @param keyval Key symbol of a key event.
     * @param keycode Keycode of a key event.
     * @param state Key modifier flags.
     * @returns %TRUE for successfully process the key; %FALSE otherwise. See also: ibus_input_context_process_key_event_async()
     */
    processKeyEvent(keyval: number, keycode: number, state: number): boolean
    /**
     * Pass the key event to input method engine.
     * 
     * Key symbols are characters/symbols produced by key press, for example,
     * pressing "s" generates key symbol "s"; pressing shift-"s" generates key symbol "S".
     * Same key on keyboard may produce different key symbols on different keyboard layout.
     * e.g., "s" key on QWERTY keyboard produces "o" in DVORAK layout.
     * 
     * Unlike key symbol, keycode is only determined by the location of the key, and
     * irrelevant of the keyboard layout.
     * 
     * Briefly speaking, input methods that expect certain keyboard layout should use
     * keycode; otherwise keyval is sufficient.
     * For example, Chewing, Cangjie, Wubi expect an en-US QWERTY keyboard, these should
     * use keycode; while pinyin can rely on keyval only, as it is less sensitive to
     * the keyboard layout change, DVORAK users can still use DVORAK layout to input pinyin.
     * 
     * Use ibus_keymap_lookup_keysym() to convert keycode to keysym in given keyboard layout.
     * 
     * see_also: #IBusEngine::process-key-event
     * @param keyval Key symbol of a key event.
     * @param keycode Keycode of a key event.
     * @param state Key modifier flags.
     * @param timeoutMsec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A GCancellable or NULL.
     * @param callback A GAsyncReadyCallback to call when the request is satisfied or NULL      if you don't care about the result of the method invocation.
     */
    processKeyEventAsync(keyval: number, keycode: number, state: number, timeoutMsec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with
     *      ibus_input_context_process_key_event_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to      ibus_input_context_process_key_event_async().
     * @returns %TRUE if the key event is processed;      %FALSE otherwise or some errors happen and the @error will be set.
     */
    processKeyEventAsyncFinish(res: Gio.AsyncResult): boolean
    /**
     * Activate the property asynchronously.
     * 
     * See also: #IBusEngine::property_activate
     * @param propName A property name (e.g. "InputMode.WideLatin")
     * @param state A status of the property (e.g. PROP_STATE_CHECKED)
     */
    propertyActivate(propName: string, state: number): void
    /**
     * Invoked when the IME is reset. An asynchronous IPC will be performed.
     * 
     * see_also: #IBusEngine::reset
     */
    reset(): void
    /**
     * Set the capabilities flags of client application asynchronously.
     * When IBUS_CAP_FOCUS is not set, IBUS_CAP_PREEDIT_TEXT, IBUS_CAP_AUXILIARY_TEXT, IBUS_CAP_LOOKUP_TABLE, and IBUS_CAP_PROPERTY have to be all set.
     * The panel component does nothing for an application that doesn't support focus.
     * 
     * see_also: #IBusEngine::set-capabilities
     * @param capabilities Capabilities flags of IBusEngine, see #IBusCapabilite
     */
    setCapabilities(capabilities: number): void
    /**
     * Set content-type (primary purpose and hints) of the context.  This
     * information is particularly useful to implement intelligent
     * behavior in engines, such as automatic input-mode switch and text
     * prediction.  For example, to restrict input to numbers, the client
     * can call this function with `purpose` set to
     * #IBUS_INPUT_PURPOSE_NUMBER.
     * 
     * See also: #IBusEngine::set-content-type
     * @param purpose Primary purpose of the input context, as an #IBusInputPurpose.
     * @param hints Hints that augment `purpose,` as an #IBusInputHints.
     */
    setContentType(purpose: number, hints: number): void
    /**
     * Set the cursor location of IBus input context asynchronously.
     * 
     * see_also: #IBusEngine::set-cursor-location
     * @param x X coordinate of the cursor.
     * @param y Y coordinate of the cursor.
     * @param w Width of the cursor.
     * @param h Height of the cursor.
     */
    setCursorLocation(x: number, y: number, w: number, h: number): void
    /**
     * Invoked when the IME engine is changed.
     * An asynchronous IPC will be performed.
     * @param name A name of the engine.
     */
    setEngine(name: string): void
    setSurroundingText(text: Text, cursorPos: number, anchorPos: number): void

    // Own signals of IBus-1.0.IBus.InputContext

    connect(sigName: "commit-text", callback: InputContext.CommitTextSignalCallback): number
    on(sigName: "commit-text", callback: InputContext.CommitTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "commit-text", callback: InputContext.CommitTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "commit-text", callback: InputContext.CommitTextSignalCallback): NodeJS.EventEmitter
    emit(sigName: "commit-text", ...args: any[]): void
    connect(sigName: "cursor-down-lookup-table", callback: InputContext.CursorDownLookupTableSignalCallback): number
    on(sigName: "cursor-down-lookup-table", callback: InputContext.CursorDownLookupTableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-down-lookup-table", callback: InputContext.CursorDownLookupTableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-down-lookup-table", callback: InputContext.CursorDownLookupTableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "cursor-down-lookup-table", ...args: any[]): void
    connect(sigName: "cursor-up-lookup-table", callback: InputContext.CursorUpLookupTableSignalCallback): number
    on(sigName: "cursor-up-lookup-table", callback: InputContext.CursorUpLookupTableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-up-lookup-table", callback: InputContext.CursorUpLookupTableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-up-lookup-table", callback: InputContext.CursorUpLookupTableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "cursor-up-lookup-table", ...args: any[]): void
    connect(sigName: "delete-surrounding-text", callback: InputContext.DeleteSurroundingTextSignalCallback): number
    on(sigName: "delete-surrounding-text", callback: InputContext.DeleteSurroundingTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "delete-surrounding-text", callback: InputContext.DeleteSurroundingTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "delete-surrounding-text", callback: InputContext.DeleteSurroundingTextSignalCallback): NodeJS.EventEmitter
    emit(sigName: "delete-surrounding-text", nChars: number, ...args: any[]): void
    connect(sigName: "disabled", callback: InputContext.DisabledSignalCallback): number
    on(sigName: "disabled", callback: InputContext.DisabledSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "disabled", callback: InputContext.DisabledSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "disabled", callback: InputContext.DisabledSignalCallback): NodeJS.EventEmitter
    emit(sigName: "disabled", ...args: any[]): void
    connect(sigName: "enabled", callback: InputContext.EnabledSignalCallback): number
    on(sigName: "enabled", callback: InputContext.EnabledSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enabled", callback: InputContext.EnabledSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enabled", callback: InputContext.EnabledSignalCallback): NodeJS.EventEmitter
    emit(sigName: "enabled", ...args: any[]): void
    connect(sigName: "forward-key-event", callback: InputContext.ForwardKeyEventSignalCallback): number
    on(sigName: "forward-key-event", callback: InputContext.ForwardKeyEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "forward-key-event", callback: InputContext.ForwardKeyEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "forward-key-event", callback: InputContext.ForwardKeyEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "forward-key-event", keycode: number, modifiers: number, ...args: any[]): void
    connect(sigName: "hide-auxiliary-text", callback: InputContext.HideAuxiliaryTextSignalCallback): number
    on(sigName: "hide-auxiliary-text", callback: InputContext.HideAuxiliaryTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide-auxiliary-text", callback: InputContext.HideAuxiliaryTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide-auxiliary-text", callback: InputContext.HideAuxiliaryTextSignalCallback): NodeJS.EventEmitter
    emit(sigName: "hide-auxiliary-text", ...args: any[]): void
    connect(sigName: "hide-lookup-table", callback: InputContext.HideLookupTableSignalCallback): number
    on(sigName: "hide-lookup-table", callback: InputContext.HideLookupTableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide-lookup-table", callback: InputContext.HideLookupTableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide-lookup-table", callback: InputContext.HideLookupTableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "hide-lookup-table", ...args: any[]): void
    connect(sigName: "hide-preedit-text", callback: InputContext.HidePreeditTextSignalCallback): number
    on(sigName: "hide-preedit-text", callback: InputContext.HidePreeditTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide-preedit-text", callback: InputContext.HidePreeditTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide-preedit-text", callback: InputContext.HidePreeditTextSignalCallback): NodeJS.EventEmitter
    emit(sigName: "hide-preedit-text", ...args: any[]): void
    connect(sigName: "page-down-lookup-table", callback: InputContext.PageDownLookupTableSignalCallback): number
    on(sigName: "page-down-lookup-table", callback: InputContext.PageDownLookupTableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "page-down-lookup-table", callback: InputContext.PageDownLookupTableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "page-down-lookup-table", callback: InputContext.PageDownLookupTableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "page-down-lookup-table", ...args: any[]): void
    connect(sigName: "page-up-lookup-table", callback: InputContext.PageUpLookupTableSignalCallback): number
    on(sigName: "page-up-lookup-table", callback: InputContext.PageUpLookupTableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "page-up-lookup-table", callback: InputContext.PageUpLookupTableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "page-up-lookup-table", callback: InputContext.PageUpLookupTableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "page-up-lookup-table", ...args: any[]): void
    connect(sigName: "register-properties", callback: InputContext.RegisterPropertiesSignalCallback): number
    on(sigName: "register-properties", callback: InputContext.RegisterPropertiesSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "register-properties", callback: InputContext.RegisterPropertiesSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "register-properties", callback: InputContext.RegisterPropertiesSignalCallback): NodeJS.EventEmitter
    emit(sigName: "register-properties", ...args: any[]): void
    connect(sigName: "show-auxiliary-text", callback: InputContext.ShowAuxiliaryTextSignalCallback): number
    on(sigName: "show-auxiliary-text", callback: InputContext.ShowAuxiliaryTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-auxiliary-text", callback: InputContext.ShowAuxiliaryTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-auxiliary-text", callback: InputContext.ShowAuxiliaryTextSignalCallback): NodeJS.EventEmitter
    emit(sigName: "show-auxiliary-text", ...args: any[]): void
    connect(sigName: "show-lookup-table", callback: InputContext.ShowLookupTableSignalCallback): number
    on(sigName: "show-lookup-table", callback: InputContext.ShowLookupTableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-lookup-table", callback: InputContext.ShowLookupTableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-lookup-table", callback: InputContext.ShowLookupTableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "show-lookup-table", ...args: any[]): void
    connect(sigName: "show-preedit-text", callback: InputContext.ShowPreeditTextSignalCallback): number
    on(sigName: "show-preedit-text", callback: InputContext.ShowPreeditTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-preedit-text", callback: InputContext.ShowPreeditTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-preedit-text", callback: InputContext.ShowPreeditTextSignalCallback): NodeJS.EventEmitter
    emit(sigName: "show-preedit-text", ...args: any[]): void
    connect(sigName: "update-auxiliary-text", callback: InputContext.UpdateAuxiliaryTextSignalCallback): number
    on(sigName: "update-auxiliary-text", callback: InputContext.UpdateAuxiliaryTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "update-auxiliary-text", callback: InputContext.UpdateAuxiliaryTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "update-auxiliary-text", callback: InputContext.UpdateAuxiliaryTextSignalCallback): NodeJS.EventEmitter
    emit(sigName: "update-auxiliary-text", visible: boolean, ...args: any[]): void
    connect(sigName: "update-lookup-table", callback: InputContext.UpdateLookupTableSignalCallback): number
    on(sigName: "update-lookup-table", callback: InputContext.UpdateLookupTableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "update-lookup-table", callback: InputContext.UpdateLookupTableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "update-lookup-table", callback: InputContext.UpdateLookupTableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "update-lookup-table", visible: boolean, ...args: any[]): void
    connect(sigName: "update-preedit-text", callback: InputContext.UpdatePreeditTextSignalCallback): number
    on(sigName: "update-preedit-text", callback: InputContext.UpdatePreeditTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "update-preedit-text", callback: InputContext.UpdatePreeditTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "update-preedit-text", callback: InputContext.UpdatePreeditTextSignalCallback): NodeJS.EventEmitter
    emit(sigName: "update-preedit-text", cursorPos: number, visible: boolean, ...args: any[]): void
    connect(sigName: "update-property", callback: InputContext.UpdatePropertySignalCallback): number
    on(sigName: "update-property", callback: InputContext.UpdatePropertySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "update-property", callback: InputContext.UpdatePropertySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "update-property", callback: InputContext.UpdatePropertySignalCallback): NodeJS.EventEmitter
    emit(sigName: "update-property", ...args: any[]): void

    // Class property signals of IBus-1.0.IBus.InputContext

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An IBusInputContext is a proxy object of BusInputContext,
 * which manages the context for input methods that supports
 * text input in various natural languages.
 * 
 * Clients call the IBusInputContext to invoke BusInputContext,
 * through which invokes IBusEngine.
 * @class 
 */
export class InputContext extends Proxy {

    // Own properties of IBus-1.0.IBus.InputContext

    static name: string

    // Constructors of IBus-1.0.IBus.InputContext

    constructor(config?: InputContext.ConstructorProperties) 
    /**
     * Creates a new #IBusInputContext.
     * @constructor 
     * @param path The path to the object that emitting the signal.
     * @param connection A #GDBusConnection.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A newly allocated #IBusInputContext.
     */
    constructor(path: string, connection: Gio.DBusConnection, cancellable: Gio.Cancellable | null) 
    /**
     * Creates a new #IBusInputContext.
     * @constructor 
     * @param path The path to the object that emitting the signal.
     * @param connection A #GDBusConnection.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A newly allocated #IBusInputContext.
     */
    static new(path: string, connection: Gio.DBusConnection, cancellable: Gio.Cancellable | null): InputContext

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with ibus_input_context_new_async().
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback pass to      ibus_input_context_new_async().
     * @returns A newly allocated #IBusInputContext.
     */
    static newAsyncFinish(res: Gio.AsyncResult): InputContext
    _init(config?: InputContext.ConstructorProperties): void
    /**
     * Creates a new #IBusInputContext asynchronously.
     * @param path The path to the object that emitting the signal.
     * @param connection A #GDBusConnection.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.      The callback should not be %NULL.
     */
    static newAsync(path: string, connection: Gio.DBusConnection, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets an existing IBusInputContext.
     * @param path The path to the object that emitting the signal.
     * @param connection A GDBusConnection.
     * @returns An existing #IBusInputContext.
     */
    static getInputContext(path: string, connection: Gio.DBusConnection): InputContext
    /**
     * Gets an existing #IBusInputContext asynchronously.
     * @param path The path to the object that emitting the signal.
     * @param connection A #GDBusConnection.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.      The callback should not be %NULL.
     */
    static getInputContextAsync(path: string, connection: Gio.DBusConnection, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with
     * ibus_input_context_get_input_context_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback pass to      ibus_input_context_get_input_context_async().
     * @returns An existing #IBusInputContext.
     */
    static getInputContextAsyncFinish(res: Gio.AsyncResult): InputContext
}

export module Keymap {

    // Constructor properties interface

    export interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

export interface Keymap {

    // Own properties of IBus-1.0.IBus.Keymap

    __gtype__: number

    // Own fields of IBus-1.0.IBus.Keymap

    /**
     * The name of the keymap, such as 'us', 'jp'.
     * @field 
     */
    name: string | null
    /**
     * Keymap table. IME developers normally don have to touch this.
     * @field 
     */
    keymap: number[]

    // Owm methods of IBus-1.0.IBus.Keymap

    /**
     * Converts the scancode to keysym, given the keymap.
     * @param keycode A scancode to be converted.
     * @param state Modifier flags(such as Ctrl, Shift).
     * @returns Corresponding keysym.
     */
    lookupKeysym(keycode: number, state: number): number

    // Class property signals of IBus-1.0.IBus.Keymap

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An IBusKeymap defines the mapping between keyboard scancodes and
 * keyboard symbols such as numbers, alphabets, and punctuation marks.
 * 
 * Some input methods assume certain keyboard layout
 * (such as Chewing and Wubi requires an US-QWERTY layout),
 * and expect key symbols to be arranged in that order.
 * These input methods should new an IBusKeymap
 * instance and define the keyboard layout.
 * Then ibus_keymap_lookup_keysym() can
 * convert scancodes back to the key symbols.
 * 
 * see_also: #IBusComponent, #IBusEngineDesc
 * @class 
 */
export class Keymap extends Object {

    // Own properties of IBus-1.0.IBus.Keymap

    static name: string

    // Constructors of IBus-1.0.IBus.Keymap

    constructor(config?: Keymap.ConstructorProperties) 
    /**
     * Get an #IBusKeymap associated with the giving name.
     * 
     * This function loads the keymap file specified in `name`
     * in the IBUS_DATA_DIR/keymaps directory.
     * @constructor 
     * @param name The keymap file to be loaded, such as 'us', 'jp'.
     * @returns An #IBusKeymap associated with the giving name; or %NULL if failed.
     */
    constructor(name: string) 
    /**
     * Get an #IBusKeymap associated with the giving name.
     * 
     * This function loads the keymap file specified in `name`
     * in the IBUS_DATA_DIR/keymaps directory.
     * @constructor 
     * @param name The keymap file to be loaded, such as 'us', 'jp'.
     * @returns An #IBusKeymap associated with the giving name; or %NULL if failed.
     */
    static new(name: string): Keymap

    // Overloads of new

    /**
     * Creates  a new #IBusObject.
     * @constructor 
     * @returns A newly allocated #IBusObject
     */
    static new(): Object
    _init(config?: Keymap.ConstructorProperties): void
    /**
     * Get an IBusKeymap associated with the giving name.
     * 
     * This function loads the keymap file specified in `name`
     * in the IBUS_DATA_DIR/keymaps directory.
     * @param name The keymap file to be loaded, such as 'us', 'jp'.
     * @returns An #IBusKeymap associated with the giving name; or %NULL if failed.
     */
    static get(name: string): Keymap
}

export module LookupTable {

    // Constructor properties interface

    export interface ConstructorProperties extends Serializable.ConstructorProperties {
    }

}

export interface LookupTable {

    // Own properties of IBus-1.0.IBus.LookupTable

    __gtype__: number

    // Own fields of IBus-1.0.IBus.LookupTable

    parent: Serializable & GObject.InitiallyUnowned
    /**
     * number of candidate shown per page.
     * @field 
     */
    pageSize: number
    /**
     * position index of cursor.
     * @field 
     */
    cursorPos: number
    /**
     * whether the cursor is visible.
     * @field 
     */
    cursorVisible: boolean
    /**
     * TRUE for lookup table wrap around.
     * @field 
     */
    round: boolean
    /**
     * orientation of the table.
     * @field 
     */
    orientation: number
    /**
     * Candidate words/phrases.
     * @field 
     */
    candidates: any[]
    /**
     * Candidate labels which identify individual candidates in the same page. Default is 1, 2, 3, 4 ...
     * @field 
     */
    labels: any[]

    // Owm methods of IBus-1.0.IBus.LookupTable

    /**
     * Append a candidate word/phrase to IBusLookupTable, and increase reference.
     * @param text candidate word/phrase to be appended (in IBusText format).
     */
    appendCandidate(text: Text): void
    /**
     * Append a candidate word/phrase to IBusLookupTable, and increase reference.
     * This function is needed if the input method select candidate with
     * non-numeric keys such as "asdfghjkl;".
     * @param text A candidate label to be appended (in IBusText format).
     */
    appendLabel(text: Text): void
    /**
     * Clear and remove all candidate from an IBusLookupTable.
     */
    clear(): void
    /**
     * Go to next candidate of an #IBusLookupTable.
     * 
     * It returns FALSE if it is already at the last candidate,
     * unless  <code>table&gt;-round==TRUE</code>, where it will go
     * to the first candidate.
     * @returns %TRUE if succeed.
     */
    cursorDown(): boolean
    /**
     * Go to previous candidate of an #IBusLookupTable.
     * 
     * It returns FALSE if it is already at the first candidate,
     * unless  <code>table&gt;-round==TRUE</code>, where it will go
     * to the last candidate.
     * @returns %TRUE if succeed.
     */
    cursorUp(): boolean
    /**
     * Return #IBusText at the given index. Borrowed reference.
     * @param index Index in the Lookup table.
     * @returns IBusText at the given index; NULL if no such         #IBusText.
     */
    getCandidate(index: number): Text
    /**
     * Gets the cursor position in current page of #IBusLookupTable.
     * @returns The position of cursor in current page.
     */
    getCursorInPage(): number
    /**
     * Gets the cursor position of #IBusLookupTable.
     * @returns The position of cursor.
     */
    getCursorPos(): number
    /**
     * Return #IBusText at the given index. Borrowed reference.
     * @param index Index in the Lookup table.
     * @returns #IBusText at the given index; %NULL if no such         #IBusText.
     */
    getLabel(index: number): Text
    /**
     * Return the number of candidate in the table.
     * @returns The number of candidates in the table
     */
    getNumberOfCandidates(): number
    /**
     * Returns the orientation of the #IBusLookupTable.
     * @returns The orientation of the @table.
     */
    getOrientation(): number
    /**
     * Gets the number of candidate shown per page.
     * @returns Page size, i.e., number of candidate shown per page. dd
     */
    getPageSize(): number
    /**
     * Returns whether the cursor of an #IBusLookupTable is visible.
     * @returns Whether the cursor of @table is visible.
     */
    isCursorVisible(): boolean
    /**
     * Returns whether the #IBusLookupTable is round.
     * @returns Whether the @table is round.
     */
    isRound(): boolean
    /**
     * Go to next page of an #IBusLookupTable.
     * 
     * It returns FALSE if it is already at the last page,
     * unless  <code>table&gt;-round==TRUE</code>, where it will go
     * to the first page.
     * @returns %TRUE if succeed.
     */
    pageDown(): boolean
    /**
     * Go to previous page of an #IBusLookupTable.
     * 
     * It returns FALSE if it is already at the first page,
     * unless  <code>table&gt;-round==TRUE</code>, where it will go
     * to the last page.
     * @returns %TRUE if succeed.
     */
    pageUp(): boolean
    /**
     * Set the cursor position of IBusLookupTable.
     * @param cursorPos The position of cursor.
     */
    setCursorPos(cursorPos: number): void
    /**
     * Set whether to make the cursor of an IBusLookupTable visible or not.
     * @param visible Whether to make the cursor of `table` visible.
     */
    setCursorVisible(visible: boolean): void
    /**
     * Append a candidate word/phrase to IBusLookupTable, and increase reference.
     * This function is needed if the input method select candidate with
     * non-numeric keys such as "asdfghjkl;".
     * @param index Intex in the Lookup table.
     * @param text A candidate label to be appended (in IBusText format).
     */
    setLabel(index: number, text: Text): void
    /**
     * Set the orientation.
     * @param orientation .
     */
    setOrientation(orientation: number): void
    /**
     * Set the number of candidate shown per page.
     * @param pageSize number of candidate shown per page.
     */
    setPageSize(pageSize: number): void
    /**
     * Set whether to make the IBusLookupTable round or not.
     * @param round Whether to make `table` round.
     */
    setRound(round: boolean): void

    // Class property signals of IBus-1.0.IBus.LookupTable

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An IBusLookuptable stores the candidate words or phrases for users to
 * choose from.
 * 
 * Use ibus_engine_update_lookup_table(), ibus_engine_show_lookup_table(),
 * and ibus_engine_hide_lookup_table() to update, show and hide the lookup
 * table.
 * 
 * see_also: #IBusEngine
 * @class 
 */
export class LookupTable extends Serializable {

    // Own properties of IBus-1.0.IBus.LookupTable

    static name: string

    // Constructors of IBus-1.0.IBus.LookupTable

    constructor(config?: LookupTable.ConstructorProperties) 
    /**
     * Craetes a new #IBusLookupTable.
     * @constructor 
     * @param pageSize number of candidate shown per page, the max value is 16.
     * @param cursorPos position index of cursor.
     * @param cursorVisible whether the cursor is visible.
     * @param round TRUE for lookup table wrap around.
     * @returns A newly allocated #IBusLookupTable.
     */
    constructor(pageSize: number, cursorPos: number, cursorVisible: boolean, round: boolean) 
    /**
     * Craetes a new #IBusLookupTable.
     * @constructor 
     * @param pageSize number of candidate shown per page, the max value is 16.
     * @param cursorPos position index of cursor.
     * @param cursorVisible whether the cursor is visible.
     * @param round TRUE for lookup table wrap around.
     * @returns A newly allocated #IBusLookupTable.
     */
    static new(pageSize: number, cursorPos: number, cursorVisible: boolean, round: boolean): LookupTable

    // Overloads of new

    /**
     * Creates a new instance of an #IBusSerializable.
     * @constructor 
     * @returns a new instance of #IBusSerializable.
     */
    static new(): Serializable
    /**
     * Creates  a new #IBusObject.
     * @constructor 
     * @returns A newly allocated #IBusObject
     */
    static new(): Object
    _init(config?: LookupTable.ConstructorProperties): void
}

export module Object {

    // Signal callback interfaces

    /**
     * Signal callback interface for `destroy`
     */
    export interface DestroySignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
    }

}

export interface Object {

    // Own properties of IBus-1.0.IBus.Object

    __gtype__: number

    // Own fields of IBus-1.0.IBus.Object

    parent: GObject.InitiallyUnowned
    flags: number
    priv: ObjectPrivate

    // Owm methods of IBus-1.0.IBus.Object

    // Has conflict: destroy(): void

    // Own virtual methods of IBus-1.0.IBus.Object

    /**
     * Emit the "destory" signal notifying all reference holders that they should
     * release the #IBusObject.
     * 
     * The memory for the object itself won't be deleted until its reference count
     * actually drops to 0; ibus_object_destroy merely asks reference holders to
     * release their references. It does not free the object.
     * @virtual 
     */
    destroy(): void

    // Own signals of IBus-1.0.IBus.Object

    connect(sigName: "destroy", callback: Object.DestroySignalCallback): number
    on(sigName: "destroy", callback: Object.DestroySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: Object.DestroySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: Object.DestroySignalCallback): NodeJS.EventEmitter
    emit(sigName: "destroy", ...args: any[]): void

    // Class property signals of IBus-1.0.IBus.Object

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * IBusObject is the base object for all objects in IBus.
 * @class 
 */
export class Object extends GObject.InitiallyUnowned {

    // Own properties of IBus-1.0.IBus.Object

    static name: string

    // Constructors of IBus-1.0.IBus.Object

    constructor(config?: Object.ConstructorProperties) 
    /**
     * Creates  a new #IBusObject.
     * @constructor 
     * @returns A newly allocated #IBusObject
     */
    constructor() 
    /**
     * Creates  a new #IBusObject.
     * @constructor 
     * @returns A newly allocated #IBusObject
     */
    static new(): Object
    _init(config?: Object.ConstructorProperties): void
}

export module ObservedPath {

    // Constructor properties interface

    export interface ConstructorProperties extends Serializable.ConstructorProperties {
    }

}

export interface ObservedPath {

    // Own properties of IBus-1.0.IBus.ObservedPath

    __gtype__: number

    // Own fields of IBus-1.0.IBus.ObservedPath

    parent: Serializable & GObject.InitiallyUnowned
    /**
     * Path to be handled.
     * @field 
     */
    path: string | null
    /**
     * Modified time.
     * @field 
     */
    mtime: number
    /**
     * Whether the file is the path directory.
     * @field 
     */
    isDir: boolean
    /**
     * Whether the file exists.
     * @field 
     */
    isExist: boolean

    // Owm methods of IBus-1.0.IBus.ObservedPath

    /**
     * Checks whether the path is modified by comparing the mtime in object and
     * mtime in file system.
     * @returns %TRUE if imtime is changed, otherwise %FALSE.
     */
    checkModification(): boolean
    /**
     * Append the observed path to a string with following format:
     * &lt;path mtime="&lt;i&gt;modified time&lt;/i&gt;" &gt;&lt;i&gt;path&lt;/i&gt;&lt;/path&gt;
     * @param output Path is appended to.
     * @param indent number of indent.
     */
    output(output: GLib.String, indent: number): void
    /**
     * Recursively traverse the path and put the files and subdirectory in to
     * a newly allocated
     * GLists, if the `path` is a directory. Otherwise returns NULL.
     * @param dirOnly Only looks for subdirs, not files
     * @returns A newly allocate GList which holds content in path; NULL if @path is not directory.
     */
    traverse(dirOnly: boolean): ObservedPath[]

    // Class property signals of IBus-1.0.IBus.ObservedPath

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * IBusObservedPath provides methods for file path manipulation,
 * such as monitor modification, directory tree traversal.
 * @class 
 */
export class ObservedPath extends Serializable {

    // Own properties of IBus-1.0.IBus.ObservedPath

    static name: string

    // Constructors of IBus-1.0.IBus.ObservedPath

    constructor(config?: ObservedPath.ConstructorProperties) 
    /**
     * Creates a new #IBusObservedPath from an XML node.
     * @constructor 
     * @param path The path string.
     * @param fillStat Auto-fill the path status.
     * @returns A newly allocated #IBusObservedPath.
     */
    constructor(path: string, fillStat: boolean) 
    /**
     * Creates a new #IBusObservedPath from an XML node.
     * @constructor 
     * @param path The path string.
     * @param fillStat Auto-fill the path status.
     * @returns A newly allocated #IBusObservedPath.
     */
    static new(path: string, fillStat: boolean): ObservedPath

    // Overloads of new

    /**
     * Creates a new instance of an #IBusSerializable.
     * @constructor 
     * @returns a new instance of #IBusSerializable.
     */
    static new(): Serializable
    /**
     * Creates  a new #IBusObject.
     * @constructor 
     * @returns A newly allocated #IBusObject
     */
    static new(): Object
    /**
     * Creates an new #IBusObservedPath from an XML node.
     * @constructor 
     * @param node An XML node that contain path.
     * @param fillStat Auto-fill the path status.
     * @returns A newly allocated #IBusObservedPath.
     */
    static newFromXmlNode(node: XML, fillStat: boolean): ObservedPath
    _init(config?: ObservedPath.ConstructorProperties): void
}

export module PanelService {

    // Signal callback interfaces

    /**
     * Signal callback interface for `cursor-down-lookup-table`
     */
    export interface CursorDownLookupTableSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `cursor-up-lookup-table`
     */
    export interface CursorUpLookupTableSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `destroy-context`
     */
    export interface DestroyContextSignalCallback {
        (inputContextPath: string | null): void
    }

    /**
     * Signal callback interface for `focus-in`
     */
    export interface FocusInSignalCallback {
        (inputContextPath: string | null): void
    }

    /**
     * Signal callback interface for `focus-out`
     */
    export interface FocusOutSignalCallback {
        (inputContextPath: string | null): void
    }

    /**
     * Signal callback interface for `hide-auxiliary-text`
     */
    export interface HideAuxiliaryTextSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `hide-language-bar`
     */
    export interface HideLanguageBarSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `hide-lookup-table`
     */
    export interface HideLookupTableSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `hide-preedit-text`
     */
    export interface HidePreeditTextSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `page-down-lookup-table`
     */
    export interface PageDownLookupTableSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `page-up-lookup-table`
     */
    export interface PageUpLookupTableSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `register-properties`
     */
    export interface RegisterPropertiesSignalCallback {
        (propList: PropList): void
    }

    /**
     * Signal callback interface for `reset`
     */
    export interface ResetSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `set-content-type`
     */
    export interface SetContentTypeSignalCallback {
        (purpose: number, hints: number): void
    }

    /**
     * Signal callback interface for `set-cursor-location`
     */
    export interface SetCursorLocationSignalCallback {
        (x: number, y: number, w: number, h: number): void
    }

    /**
     * Signal callback interface for `show-auxiliary-text`
     */
    export interface ShowAuxiliaryTextSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `show-language-bar`
     */
    export interface ShowLanguageBarSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `show-lookup-table`
     */
    export interface ShowLookupTableSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `show-preedit-text`
     */
    export interface ShowPreeditTextSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `start-setup`
     */
    export interface StartSetupSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `state-changed`
     */
    export interface StateChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `update-auxiliary-text`
     */
    export interface UpdateAuxiliaryTextSignalCallback {
        (text: Text, visible: boolean): void
    }

    /**
     * Signal callback interface for `update-lookup-table`
     */
    export interface UpdateLookupTableSignalCallback {
        (lookupTable: LookupTable, visible: boolean): void
    }

    /**
     * Signal callback interface for `update-preedit-text`
     */
    export interface UpdatePreeditTextSignalCallback {
        (text: Text, cursorPos: number, visible: boolean): void
    }

    /**
     * Signal callback interface for `update-property`
     */
    export interface UpdatePropertySignalCallback {
        (prop: Property): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Service.ConstructorProperties {
    }

}

export interface PanelService {

    // Own properties of IBus-1.0.IBus.PanelService

    __gtype__: number

    // Own fields of IBus-1.0.IBus.PanelService

    parent: Service & GObject.InitiallyUnowned

    // Owm methods of IBus-1.0.IBus.PanelService

    /**
     * Notify that a candidate is clicked
     * by sending a "CandidateClicked" to IBus service.
     * @param index Index in the Lookup table
     * @param button GdkEventButton::button (1: left button, etc.)
     * @param state GdkEventButton::state (key modifier flags)
     */
    candidateClicked(index: number, button: number, state: number): void
    /**
     * Notify that the cursor is down
     * by sending a "CursorDown" to IBus service.
     */
    cursorDown(): void
    /**
     * Notify that the cursor is up
     * by sending a "CursorUp" to IBus service.
     */
    cursorUp(): void
    /**
     * Notify that the page is down
     * by sending a "PageDown" to IBus service.
     */
    pageDown(): void
    /**
     * Notify that the page is up
     * by sending a "PageUp" to IBus service.
     */
    pageUp(): void
    /**
     * Notify that a property is active
     * by sending a "PropertyActivate" message to IBus service.
     * @param propName A property name
     * @param propState State of the property
     */
    propertyActivate(propName: string, propState: number): void
    /**
     * Notify that a property is hidden
     * by sending a "ValueChanged" message to IBus service.
     * @param propName A property name
     */
    propertyHide(propName: string): void
    /**
     * Notify that a property is shown
     * by sending a "ValueChanged" message to IBus service.
     * @param propName A property name
     */
    propertyShow(propName: string): void

    // Own virtual methods of IBus-1.0.IBus.PanelService

    cursorDownLookupTable(): void
    cursorUpLookupTable(): void
    destroyContext(inputContextPath: string): void
    focusIn(inputContextPath: string): void
    focusOut(inputContextPath: string): void
    hideAuxiliaryText(): void
    hideLanguageBar(): void
    hideLookupTable(): void
    hidePreeditText(): void
    pageDownLookupTable(): void
    pageUpLookupTable(): void
    registerProperties(propList: PropList): void
    reset(): void
    setContentType(purpose: number, hints: number): void
    setCursorLocation(x: number, y: number, w: number, h: number): void
    showAuxiliaryText(): void
    showLanguageBar(): void
    showLookupTable(): void
    showPreeditText(): void
    startSetup(): void
    stateChanged(): void
    updateAuxiliaryText(text: Text, visible: boolean): void
    updateLookupTable(lookupTable: LookupTable, visible: boolean): void
    updatePreeditText(text: Text, cursorPos: number, visible: boolean): void
    updateProperty(prop: Property): void

    // Own signals of IBus-1.0.IBus.PanelService

    connect(sigName: "cursor-down-lookup-table", callback: PanelService.CursorDownLookupTableSignalCallback): number
    on(sigName: "cursor-down-lookup-table", callback: PanelService.CursorDownLookupTableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-down-lookup-table", callback: PanelService.CursorDownLookupTableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-down-lookup-table", callback: PanelService.CursorDownLookupTableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "cursor-down-lookup-table", ...args: any[]): void
    connect(sigName: "cursor-up-lookup-table", callback: PanelService.CursorUpLookupTableSignalCallback): number
    on(sigName: "cursor-up-lookup-table", callback: PanelService.CursorUpLookupTableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-up-lookup-table", callback: PanelService.CursorUpLookupTableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-up-lookup-table", callback: PanelService.CursorUpLookupTableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "cursor-up-lookup-table", ...args: any[]): void
    connect(sigName: "destroy-context", callback: PanelService.DestroyContextSignalCallback): number
    on(sigName: "destroy-context", callback: PanelService.DestroyContextSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy-context", callback: PanelService.DestroyContextSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy-context", callback: PanelService.DestroyContextSignalCallback): NodeJS.EventEmitter
    emit(sigName: "destroy-context", ...args: any[]): void
    connect(sigName: "focus-in", callback: PanelService.FocusInSignalCallback): number
    on(sigName: "focus-in", callback: PanelService.FocusInSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-in", callback: PanelService.FocusInSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-in", callback: PanelService.FocusInSignalCallback): NodeJS.EventEmitter
    emit(sigName: "focus-in", ...args: any[]): void
    connect(sigName: "focus-out", callback: PanelService.FocusOutSignalCallback): number
    on(sigName: "focus-out", callback: PanelService.FocusOutSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-out", callback: PanelService.FocusOutSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-out", callback: PanelService.FocusOutSignalCallback): NodeJS.EventEmitter
    emit(sigName: "focus-out", ...args: any[]): void
    connect(sigName: "hide-auxiliary-text", callback: PanelService.HideAuxiliaryTextSignalCallback): number
    on(sigName: "hide-auxiliary-text", callback: PanelService.HideAuxiliaryTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide-auxiliary-text", callback: PanelService.HideAuxiliaryTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide-auxiliary-text", callback: PanelService.HideAuxiliaryTextSignalCallback): NodeJS.EventEmitter
    emit(sigName: "hide-auxiliary-text", ...args: any[]): void
    connect(sigName: "hide-language-bar", callback: PanelService.HideLanguageBarSignalCallback): number
    on(sigName: "hide-language-bar", callback: PanelService.HideLanguageBarSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide-language-bar", callback: PanelService.HideLanguageBarSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide-language-bar", callback: PanelService.HideLanguageBarSignalCallback): NodeJS.EventEmitter
    emit(sigName: "hide-language-bar", ...args: any[]): void
    connect(sigName: "hide-lookup-table", callback: PanelService.HideLookupTableSignalCallback): number
    on(sigName: "hide-lookup-table", callback: PanelService.HideLookupTableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide-lookup-table", callback: PanelService.HideLookupTableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide-lookup-table", callback: PanelService.HideLookupTableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "hide-lookup-table", ...args: any[]): void
    connect(sigName: "hide-preedit-text", callback: PanelService.HidePreeditTextSignalCallback): number
    on(sigName: "hide-preedit-text", callback: PanelService.HidePreeditTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide-preedit-text", callback: PanelService.HidePreeditTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide-preedit-text", callback: PanelService.HidePreeditTextSignalCallback): NodeJS.EventEmitter
    emit(sigName: "hide-preedit-text", ...args: any[]): void
    connect(sigName: "page-down-lookup-table", callback: PanelService.PageDownLookupTableSignalCallback): number
    on(sigName: "page-down-lookup-table", callback: PanelService.PageDownLookupTableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "page-down-lookup-table", callback: PanelService.PageDownLookupTableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "page-down-lookup-table", callback: PanelService.PageDownLookupTableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "page-down-lookup-table", ...args: any[]): void
    connect(sigName: "page-up-lookup-table", callback: PanelService.PageUpLookupTableSignalCallback): number
    on(sigName: "page-up-lookup-table", callback: PanelService.PageUpLookupTableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "page-up-lookup-table", callback: PanelService.PageUpLookupTableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "page-up-lookup-table", callback: PanelService.PageUpLookupTableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "page-up-lookup-table", ...args: any[]): void
    connect(sigName: "register-properties", callback: PanelService.RegisterPropertiesSignalCallback): number
    on(sigName: "register-properties", callback: PanelService.RegisterPropertiesSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "register-properties", callback: PanelService.RegisterPropertiesSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "register-properties", callback: PanelService.RegisterPropertiesSignalCallback): NodeJS.EventEmitter
    emit(sigName: "register-properties", ...args: any[]): void
    connect(sigName: "reset", callback: PanelService.ResetSignalCallback): number
    on(sigName: "reset", callback: PanelService.ResetSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reset", callback: PanelService.ResetSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reset", callback: PanelService.ResetSignalCallback): NodeJS.EventEmitter
    emit(sigName: "reset", ...args: any[]): void
    connect(sigName: "set-content-type", callback: PanelService.SetContentTypeSignalCallback): number
    on(sigName: "set-content-type", callback: PanelService.SetContentTypeSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-content-type", callback: PanelService.SetContentTypeSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-content-type", callback: PanelService.SetContentTypeSignalCallback): NodeJS.EventEmitter
    emit(sigName: "set-content-type", hints: number, ...args: any[]): void
    connect(sigName: "set-cursor-location", callback: PanelService.SetCursorLocationSignalCallback): number
    on(sigName: "set-cursor-location", callback: PanelService.SetCursorLocationSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-cursor-location", callback: PanelService.SetCursorLocationSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-cursor-location", callback: PanelService.SetCursorLocationSignalCallback): NodeJS.EventEmitter
    emit(sigName: "set-cursor-location", y: number, w: number, h: number, ...args: any[]): void
    connect(sigName: "show-auxiliary-text", callback: PanelService.ShowAuxiliaryTextSignalCallback): number
    on(sigName: "show-auxiliary-text", callback: PanelService.ShowAuxiliaryTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-auxiliary-text", callback: PanelService.ShowAuxiliaryTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-auxiliary-text", callback: PanelService.ShowAuxiliaryTextSignalCallback): NodeJS.EventEmitter
    emit(sigName: "show-auxiliary-text", ...args: any[]): void
    connect(sigName: "show-language-bar", callback: PanelService.ShowLanguageBarSignalCallback): number
    on(sigName: "show-language-bar", callback: PanelService.ShowLanguageBarSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-language-bar", callback: PanelService.ShowLanguageBarSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-language-bar", callback: PanelService.ShowLanguageBarSignalCallback): NodeJS.EventEmitter
    emit(sigName: "show-language-bar", ...args: any[]): void
    connect(sigName: "show-lookup-table", callback: PanelService.ShowLookupTableSignalCallback): number
    on(sigName: "show-lookup-table", callback: PanelService.ShowLookupTableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-lookup-table", callback: PanelService.ShowLookupTableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-lookup-table", callback: PanelService.ShowLookupTableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "show-lookup-table", ...args: any[]): void
    connect(sigName: "show-preedit-text", callback: PanelService.ShowPreeditTextSignalCallback): number
    on(sigName: "show-preedit-text", callback: PanelService.ShowPreeditTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-preedit-text", callback: PanelService.ShowPreeditTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-preedit-text", callback: PanelService.ShowPreeditTextSignalCallback): NodeJS.EventEmitter
    emit(sigName: "show-preedit-text", ...args: any[]): void
    connect(sigName: "start-setup", callback: PanelService.StartSetupSignalCallback): number
    on(sigName: "start-setup", callback: PanelService.StartSetupSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "start-setup", callback: PanelService.StartSetupSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "start-setup", callback: PanelService.StartSetupSignalCallback): NodeJS.EventEmitter
    emit(sigName: "start-setup", ...args: any[]): void
    connect(sigName: "state-changed", callback: PanelService.StateChangedSignalCallback): number
    on(sigName: "state-changed", callback: PanelService.StateChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: PanelService.StateChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: PanelService.StateChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "state-changed", ...args: any[]): void
    connect(sigName: "update-auxiliary-text", callback: PanelService.UpdateAuxiliaryTextSignalCallback): number
    on(sigName: "update-auxiliary-text", callback: PanelService.UpdateAuxiliaryTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "update-auxiliary-text", callback: PanelService.UpdateAuxiliaryTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "update-auxiliary-text", callback: PanelService.UpdateAuxiliaryTextSignalCallback): NodeJS.EventEmitter
    emit(sigName: "update-auxiliary-text", visible: boolean, ...args: any[]): void
    connect(sigName: "update-lookup-table", callback: PanelService.UpdateLookupTableSignalCallback): number
    on(sigName: "update-lookup-table", callback: PanelService.UpdateLookupTableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "update-lookup-table", callback: PanelService.UpdateLookupTableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "update-lookup-table", callback: PanelService.UpdateLookupTableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "update-lookup-table", visible: boolean, ...args: any[]): void
    connect(sigName: "update-preedit-text", callback: PanelService.UpdatePreeditTextSignalCallback): number
    on(sigName: "update-preedit-text", callback: PanelService.UpdatePreeditTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "update-preedit-text", callback: PanelService.UpdatePreeditTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "update-preedit-text", callback: PanelService.UpdatePreeditTextSignalCallback): NodeJS.EventEmitter
    emit(sigName: "update-preedit-text", cursorPos: number, visible: boolean, ...args: any[]): void
    connect(sigName: "update-property", callback: PanelService.UpdatePropertySignalCallback): number
    on(sigName: "update-property", callback: PanelService.UpdatePropertySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "update-property", callback: PanelService.UpdatePropertySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "update-property", callback: PanelService.UpdatePropertySignalCallback): NodeJS.EventEmitter
    emit(sigName: "update-property", ...args: any[]): void

    // Class property signals of IBus-1.0.IBus.PanelService

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An IBusPanelService is a base class for UI services.
 * Developers can "extend" this class for panel UI development.
 * @class 
 */
export class PanelService extends Service {

    // Own properties of IBus-1.0.IBus.PanelService

    static name: string

    // Constructors of IBus-1.0.IBus.PanelService

    constructor(config?: PanelService.ConstructorProperties) 
    /**
     * Creates a new #IBusPanelService from an #GDBusConnection.
     * @constructor 
     * @param connection An GDBusConnection.
     * @returns A newly allocated #IBusPanelService.
     */
    constructor(connection: Gio.DBusConnection) 
    /**
     * Creates a new #IBusPanelService from an #GDBusConnection.
     * @constructor 
     * @param connection An GDBusConnection.
     * @returns A newly allocated #IBusPanelService.
     */
    static new(connection: Gio.DBusConnection): PanelService

    // Overloads of new

    /**
     * Creantes a new #IBusService.
     * @constructor 
     * @param connection A GDBusConnection.
     * @param path Object path.
     * @returns A newly allocated #IBusService
     */
    static new(connection: Gio.DBusConnection, path: string): Service
    /**
     * Creates  a new #IBusObject.
     * @constructor 
     * @returns A newly allocated #IBusObject
     */
    static new(): Object
    _init(config?: PanelService.ConstructorProperties): void
}

export module PropList {

    // Constructor properties interface

    export interface ConstructorProperties extends Serializable.ConstructorProperties {
    }

}

export interface PropList {

    // Own properties of IBus-1.0.IBus.PropList

    __gtype__: number

    // Own fields of IBus-1.0.IBus.PropList

    parent: Serializable & GObject.InitiallyUnowned
    /**
     * GArray that holds IBusProperties.
     * @field 
     */
    properties: any[]

    // Owm methods of IBus-1.0.IBus.PropList

    /**
     * Append an IBusProperty to an IBusPropList, and increase reference.
     * @param prop IBusProperty to be append to `prop_list`.
     */
    append(prop: Property): void
    /**
     * Gets #IBusProperty at given index. Borrowed reference.
     * @param index Index of an IBusPropList.
     * @returns #IBusProperty at given index, %NULL if no such     #IBusProperty.
     */
    get(index: number): Property
    /**
     * Update an IBusProperty in IBusPropList.
     * @param prop IBusProperty to be update.
     * @returns %TRUE if succeeded, %FALSE otherwise.
     */
    updateProperty(prop: Property): boolean

    // Class property signals of IBus-1.0.IBus.PropList

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * See_also: #IBusProperty, #IBusEngine
 * @class 
 */
export class PropList extends Serializable {

    // Own properties of IBus-1.0.IBus.PropList

    static name: string

    // Constructors of IBus-1.0.IBus.PropList

    constructor(config?: PropList.ConstructorProperties) 
    /**
     * Create a new #IBusPropList.
     * @constructor 
     * @returns A newly allocated #IBusPropList.
     */
    constructor() 
    /**
     * Create a new #IBusPropList.
     * @constructor 
     * @returns A newly allocated #IBusPropList.
     */
    static new(): PropList

    // Overloads of new

    /**
     * Creates a new instance of an #IBusSerializable.
     * @constructor 
     * @returns a new instance of #IBusSerializable.
     */
    static new(): Serializable
    /**
     * Creates  a new #IBusObject.
     * @constructor 
     * @returns A newly allocated #IBusObject
     */
    static new(): Object
    _init(config?: PropList.ConstructorProperties): void
}

export module Property {

    // Constructor properties interface

    export interface ConstructorProperties extends Serializable.ConstructorProperties {

        // Own constructor properties of IBus-1.0.IBus.Property

        icon?: string | null
        key?: string | null
        label?: Text | null
        prop_type?: PropType | null
        sensitive?: boolean | null
        state?: PropState | null
        sub_props?: PropList | null
        symbol?: Text | null
        tooltip?: Text | null
        visible?: boolean | null
    }

}

export interface Property {

    // Own properties of IBus-1.0.IBus.Property

    icon: string | null
    readonly key: string | null
    label: Text
    readonly propType: PropType
    sensitive: boolean
    state: PropState
    subProps: PropList
    symbol: Text
    tooltip: Text
    visible: boolean
    __gtype__: number

    // Owm methods of IBus-1.0.IBus.Property

    /**
     * Get the icon of #IBusProperty.
     * @returns the icon of #IBusProperty. Should not be freed.
     */
    getIcon(): string
    /**
     * Get the key of #IBusProperty.
     * @returns the key of #IBusProperty. Should not be freed.
     */
    getKey(): string
    /**
     * Get the label of #IBusProperty.
     * @returns the label of #IBusProperty. Should not be freed.
     */
    getLabel(): Text
    getPropType(): PropType
    /**
     * Get the sensitive of #IBusProperty.
     * @returns the sensitive of #IBusProperty.
     */
    getSensitive(): boolean
    /**
     * Get the state of #IBusProperty.
     * @returns the state of #IBusProperty.
     */
    getState(): PropState
    /**
     * Get the IBusPropList of #IBusProperty.
     * @returns the IBusPropList of #IBusProperty.     Should not be freed.
     */
    getSubProps(): PropList
    /**
     * Get the symbol of #IBusProperty.
     * @returns the symbol of #IBusProperty. Should not be freed.
     */
    getSymbol(): Text
    /**
     * Get the tooltip of #IBusProperty.
     * @returns the tooltip of #IBusProperty. Should not be freed.
     */
    getTooltip(): Text
    /**
     * Get the visible of #IBusProperty.
     * @returns the visible of #IBusProperty.
     */
    getVisible(): boolean
    /**
     * Set the icon of #IBusProperty.
     * @param icon Icon shown in UI. It could be a full path of an icon file or an icon name.
     */
    setIcon(icon: string): void
    /**
     * Set the label of #IBusProperty.
     * @param label Text shown in UI.
     */
    setLabel(label: Text): void
    /**
     * Set whether the #IBusProperty is sensitive.
     * @param sensitive Whether the #IBusProperty is sensitive.
     */
    setSensitive(sensitive: boolean): void
    /**
     * Set the state of the #IBusProperty.
     * @param state The state of the #IBusProperty.
     */
    setState(state: PropState): void
    /**
     * Set the sub IBusProperties.
     * @param propList #IBusPropList that contains sub IBusProperties.
     */
    setSubProps(propList: PropList): void
    /**
     * Set the symbol of #IBusProperty.
     * @param symbol Text shown in UI.
     */
    setSymbol(symbol: Text): void
    /**
     * Set the tooltip of #IBusProperty.
     * @param tooltip Text of the tooltip.
     */
    setTooltip(tooltip: Text): void
    /**
     * Set whether the #IBusProperty is visible.
     * @param visible Whether the #IBusProperty is visible.
     */
    setVisible(visible: boolean): void
    /**
     * Update the content of an #IBusProperty.
     * #IBusProperty `prop_update` can either be sub-property of `prop,`
     * or holds new values for `prop`.
     * @param propUpdate #IBusPropList that contains sub IBusProperties.
     * @returns TRUE for update suceeded; FALSE otherwise.
     */
    update(propUpdate: Property): boolean

    // Class property signals of IBus-1.0.IBus.Property

    connect(sigName: "notify::icon", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::key", callback: (...args: any[]) => void): number
    on(sigName: "notify::key", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::key", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::key", ...args: any[]): void
    connect(sigName: "notify::label", callback: (...args: any[]) => void): number
    on(sigName: "notify::label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::prop-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::prop-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::prop-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::prop-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::prop-type", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (...args: any[]) => void): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::sub-props", callback: (...args: any[]) => void): number
    on(sigName: "notify::sub-props", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sub-props", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sub-props", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sub-props", ...args: any[]): void
    connect(sigName: "notify::symbol", callback: (...args: any[]) => void): number
    on(sigName: "notify::symbol", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::symbol", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::symbol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::symbol", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An IBusProperty is an UI component like a button or a menu item
 * which shows the status of corresponding input method engine property.
 * End user can operate and see the current status of IME through these components.
 * For example, ibus-chewing users change the English/Chinese input mode by
 * pressing ctrl-space or click on the Eng/Chi switch button.
 * And the IBusProperty shows the change correspondingly.
 * 
 * see_also: #IBusPropList, #IBusEngine
 * @class 
 */
export class Property extends Serializable {

    // Own properties of IBus-1.0.IBus.Property

    static name: string

    // Constructors of IBus-1.0.IBus.Property

    constructor(config?: Property.ConstructorProperties) 
    /**
     * Creates a new #IBusProperty.
     * @constructor 
     * @param key Unique Identity for the #IBusProperty.
     * @param type #IBusPropType of #IBusProperty.
     * @param label Text shown in UI.
     * @param icon Icon file for the #IBusProperty.
     * @param tooltip Message shown if mouse hovered the  #IBusProperty.
     * @param sensitive Whether the #IBusProperty is sensitive to keyboard and mouse event.
     * @param visible Whether the #IBusProperty is visible.
     * @param state IBusPropState of #IBusProperty.
     * @param propList #IBusPropList that contains sub IBusProperties.
     * @returns A newly allocated #IBusProperty.
     */
    constructor(key: string, type: PropType, label: Text, icon: string | null, tooltip: Text, sensitive: boolean, visible: boolean, state: PropState, propList: PropList | null) 
    /**
     * Creates a new #IBusProperty.
     * @constructor 
     * @param key Unique Identity for the #IBusProperty.
     * @param type #IBusPropType of #IBusProperty.
     * @param label Text shown in UI.
     * @param icon Icon file for the #IBusProperty.
     * @param tooltip Message shown if mouse hovered the  #IBusProperty.
     * @param sensitive Whether the #IBusProperty is sensitive to keyboard and mouse event.
     * @param visible Whether the #IBusProperty is visible.
     * @param state IBusPropState of #IBusProperty.
     * @param propList #IBusPropList that contains sub IBusProperties.
     * @returns A newly allocated #IBusProperty.
     */
    static new(key: string, type: PropType, label: Text, icon: string | null, tooltip: Text, sensitive: boolean, visible: boolean, state: PropState, propList: PropList | null): Property

    // Overloads of new

    /**
     * Creates a new instance of an #IBusSerializable.
     * @constructor 
     * @returns a new instance of #IBusSerializable.
     */
    static new(): Serializable
    /**
     * Creates  a new #IBusObject.
     * @constructor 
     * @returns A newly allocated #IBusObject
     */
    static new(): Object
    _init(config?: Property.ConstructorProperties): void
}

export module Proxy {

    // Signal callback interfaces

    /**
     * Signal callback interface for `destroy`
     */
    export interface DestroySignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface Proxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Own properties of IBus-1.0.IBus.Proxy

    __gtype__: number

    // Own fields of IBus-1.0.IBus.Proxy

    parent: Gio.DBusProxy
    flags: number
    own: boolean

    // Owm methods of IBus-1.0.IBus.Proxy

    // Has conflict: destroy(): void

    // Own virtual methods of IBus-1.0.IBus.Proxy

    /**
     * Dispose the proxy object. If the dbus connection is alive and the own
     * variable above is TRUE (which is the default),
     * org.freedesktop.IBus.Service.Destroy method will be called.
     * Note that "destroy" signal might be emitted when ibus_proxy_destroy is
     * called or the underlying dbus connection for the proxy is terminated.
     * In the callback of the destroy signal, you might have to call something
     * like 'g_object_unref(the_proxy);'.
     * @virtual 
     */
    destroy(): void

    // Own signals of IBus-1.0.IBus.Proxy

    connect(sigName: "destroy", callback: Proxy.DestroySignalCallback): number
    on(sigName: "destroy", callback: Proxy.DestroySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: Proxy.DestroySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: Proxy.DestroySignalCallback): NodeJS.EventEmitter
    emit(sigName: "destroy", ...args: any[]): void

    // Class property signals of IBus-1.0.IBus.Proxy

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An IBusProxy is the base of all proxy objects,
 * which communicate the corresponding #IBusServices on the other end of
 * IBusConnection.
 * For example, IBus clients (such as editors, web browsers) invoke the proxy
 * object,
 * IBusInputContext to communicate with the InputContext service of the
 * ibus-daemon.
 * 
 * Almost all services have corresponding proxies, except very simple services.
 * @class 
 */
export class Proxy extends Gio.DBusProxy {

    // Own properties of IBus-1.0.IBus.Proxy

    static name: string

    // Constructors of IBus-1.0.IBus.Proxy

    constructor(config?: Proxy.ConstructorProperties) 
    _init(config?: Proxy.ConstructorProperties): void
}

export module Registry {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Serializable.ConstructorProperties {
    }

}

export interface Registry {

    // Own properties of IBus-1.0.IBus.Registry

    __gtype__: number

    // Owm methods of IBus-1.0.IBus.Registry

    /**
     * Check if the registry is updated.
     * @returns %TRUE if mtime is changed; %FALSE otherwise.
     */
    checkModification(): boolean
    /**
     * List components.
     * @returns  a list of #IBusComponent objects. The caller has to call g_list_free() for the returned list.
     */
    getComponents(): Component[]
    /**
     * List observed paths.
     * @returns  a list of #IBusObservedPath objects. The caller has to call g_list_free() for the returned list.
     */
    getObservedPaths(): ObservedPath[]
    /**
     * Read all XML files in a IBus component directory (typically
     * /usr/share/ibus/component/ *.xml) and update the registry object.
     * IBUS_COMPONENT_PATH environment valuable is also available for
     * the custom component directories, whose delimiter is ':'.
     */
    load(): void
    /**
     * Load the user or system registry cache.
     * @param isUser %TRUE if the registry cache is loaded in the user directory.
     * @returns %TRUE if the cache exists and is loaded successfully,           %FALSE otherwise.
     */
    loadCache(isUser: boolean): boolean
    /**
     * Load the registry cache `filename`.
     * @param filename The file path of the registry cache
     * @returns %TRUE if the cache exists and is loaded successfully,           %FALSE otherwise.
     */
    loadCacheFile(filename: string): boolean
    /**
     * Read all XML files in `dirname,` create a #IBusComponent object for each file,
     * and add the component objects to the registry.
     * If `dirname` is "/usr/share/ibus/component", this API and
     * ibus_registry_load() are same.
     * @param dirname IBus component directory which includes XML files.
     */
    loadInDir(dirname: string): void
    /**
     * Output #IBusRegistry as an XML-formatted string.
     * The output string can be then shown on the screen or written to file.
     * @param output GString that holds the result.
     * @param indent level of indent.
     */
    output(output: GLib.String, indent: number): void
    /**
     * Save the registry in a user directory or system directory.
     * @param isUser %TRUE if the registry cache is saved in the user directory.
     * @returns %TRUE if the cache is saved successfully, %FALSE otherwise.
     */
    saveCache(isUser: boolean): boolean
    /**
     * Save the registry cache `filename`.
     * @param filename The file path of the registry cache
     * @returns %TRUE if the cache is saved successfully, %FALSE otherwise.
     */
    saveCacheFile(filename: string): boolean
    /**
     * Start to monitor observed paths.
     */
    startMonitorChanges(): void

    // Own signals of IBus-1.0.IBus.Registry

    connect(sigName: "changed", callback: Registry.ChangedSignalCallback): number
    on(sigName: "changed", callback: Registry.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: Registry.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: Registry.ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of IBus-1.0.IBus.Registry

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An #IBusRegistry loads IBus component files and generates the cache files.
 * 
 * see_also: #IBusComponent
 * @class 
 */
export class Registry extends Serializable {

    // Own properties of IBus-1.0.IBus.Registry

    static name: string

    // Constructors of IBus-1.0.IBus.Registry

    constructor(config?: Registry.ConstructorProperties) 
    /**
     * Creates a new #IBusRegistry
     * @constructor 
     * @returns A newly allocated #IBusRegistry.
     */
    constructor() 
    /**
     * Creates a new #IBusRegistry
     * @constructor 
     * @returns A newly allocated #IBusRegistry.
     */
    static new(): Registry

    // Overloads of new

    /**
     * Creates a new instance of an #IBusSerializable.
     * @constructor 
     * @returns a new instance of #IBusSerializable.
     */
    static new(): Serializable
    /**
     * Creates  a new #IBusObject.
     * @constructor 
     * @returns A newly allocated #IBusObject
     */
    static new(): Object
    _init(config?: Registry.ConstructorProperties): void
}

export module Serializable {

    // Constructor properties interface

    export interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

export interface Serializable {

    // Own properties of IBus-1.0.IBus.Serializable

    __gtype__: number

    // Owm methods of IBus-1.0.IBus.Serializable

    // Has conflict: copy(): Serializable
    /**
     * Gets a value from attachment of an #IBusSerializable.
     * @param key String formatted key for indexing value.
     * @returns The attached value; or %NULL if fail to retrieve the value. See also: ibus_serializable_set_attachment().
     */
    getQattachment(key: GLib.Quark): GLib.Variant
    /**
     * Remove a value from attachment of an #IBusSerializable.
     * See also: ibus_serializable_remove_attachment().
     * @param key String formatted key for indexing value.
     */
    removeQattachment(key: GLib.Quark): void
    // Has conflict: serialize(): GLib.Variant
    /**
     * Attach a value to an #IBusSerializable. If the value is floating,
     * the serializable will take the ownership.
     * 
     * See also: ibus_serializable_set_attachment().
     * @param key String formatted key for indexing value.
     * @param value Value to be attached or %NULL to remove any prevoius value.
     */
    setQattachment(key: GLib.Quark, value: GLib.Variant): void

    // Own virtual methods of IBus-1.0.IBus.Serializable

    copy(src: Serializable): boolean
    deserialize(variant: GLib.Variant): number
    serialize(builder: GLib.VariantBuilder): boolean

    // Class property signals of IBus-1.0.IBus.Serializable

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An #IBusSerializable is an IBus object which can be serialized, that is,
 * to be to and from a #GVariant.
 * 
 * This class is to be extended by other class that requires serialization.
 * An extended class should overrides following methods:
 * <itemizedlist>
 *    <listitem>
 *       <para><function>serialize(object,iter)</function>: for serialize.</para>
 *    </listitem>
 *    <listitem>
 *       <para><function>deserialize(object,iter)</function>: for deserialize.</para>
 *    </listitem>
 *    <listitem>
 *       <para><function>copy(desc,src)</function>: for copy between IBusSerializable.</para>
 *    </listitem>
 * </itemizedlist>
 * See IBusSerializableSerializeFunc(), IBusSerializableDeserializeFunc(), IBusSerializableCopyFunc()
 * for function prototype.
 * @class 
 */
export class Serializable extends Object {

    // Own properties of IBus-1.0.IBus.Serializable

    static name: string

    // Constructors of IBus-1.0.IBus.Serializable

    constructor(config?: Serializable.ConstructorProperties) 
    /**
     * Creates a new instance of an #IBusSerializable.
     * @constructor 
     * @returns a new instance of #IBusSerializable.
     */
    constructor() 
    /**
     * Creates a new instance of an #IBusSerializable.
     * @constructor 
     * @returns a new instance of #IBusSerializable.
     */
    static new(): Serializable

    // Overloads of new

    /**
     * Creates  a new #IBusObject.
     * @constructor 
     * @returns A newly allocated #IBusObject
     */
    static new(): Object
    _init(config?: Serializable.ConstructorProperties): void
    /**
     * Deserialize a #GVariant to an #IBusSerializable/
     * The deserialize method should be implemented in extended class.
     * @param variant A #GVariant.
     * @returns The deserialized #IBusSerializable. See also: IBusSerializableCopyFunc().
     */
    static deserialize(variant: GLib.Variant): Serializable
}

export module Service {

    // Constructor properties interface

    export interface ConstructorProperties extends Object.ConstructorProperties {

        // Own constructor properties of IBus-1.0.IBus.Service

        /**
         * The connection of service object.
         */
        connection?: Gio.DBusConnection | null
        /**
         * The path of service object.
         */
        object_path?: string | null
    }

}

export interface Service {

    // Own properties of IBus-1.0.IBus.Service

    /**
     * The connection of service object.
     */
    readonly connection: Gio.DBusConnection
    /**
     * The path of service object.
     */
    readonly objectPath: string | null
    __gtype__: number

    // Owm methods of IBus-1.0.IBus.Service

    emitSignal(destBusName: string, interfaceName: string, signalName: string, parameters: GLib.Variant): boolean
    /**
     * Gets a connections.
     * @returns A #GDBusConnection of an #IBusService instance.
     */
    getConnection(): Gio.DBusConnection
    /**
     * Gets the object path of an IBusService.
     * @returns The object path of @service
     */
    getObjectPath(): string
    /**
     * Registers service to a connection.
     * @param connection A GDBusConnection the service will be registered to.
     * @returns %TRUE if the service was registered, %FALSE otherwise.
     */
    register(connection: Gio.DBusConnection): boolean
    /**
     * Unregisters service from a connection.
     * @param connection A GDBusConnection the service was registered with.
     */
    unregister(connection: Gio.DBusConnection): void

    // Own virtual methods of IBus-1.0.IBus.Service

    /**
     * The ::service_get_property class method is to connect
     * GDBusInterfaceGetPropertyFunc().
     * @virtual 
     * @param connection A dbus connection.
     * @param sender A sender.
     * @param objectPath An object path.
     * @param interfaceName An interface name.
     * @param propertyName A property name.
     * @returns A variant.
     */
    serviceGetProperty(connection: Gio.DBusConnection, sender: string, objectPath: string, interfaceName: string, propertyName: string): GLib.Variant | null
    /**
     * The ::service_method_call class method is to connect
     * GDBusInterfaceMethodCallFunc().
     * @virtual 
     * @param connection A dbus connection.
     * @param sender A sender.
     * @param objectPath An object path.
     * @param interfaceName An interface name.
     * @param methodName A method name.
     * @param parameters A parameters.
     * @param invocation A dbus method invocation.
     */
    serviceMethodCall(connection: Gio.DBusConnection, sender: string, objectPath: string, interfaceName: string, methodName: string, parameters: GLib.Variant, invocation: Gio.DBusMethodInvocation): void
    /**
     * The ::service_set_property class method is to connect
     * GDBusInterfaceSetPropertyFunc().
     * @virtual 
     * @param connection A dbus connection.
     * @param sender A sender.
     * @param objectPath An object path.
     * @param interfaceName An interface name.
     * @param propertyName An property name.
     * @param value An property value.
     * @returns %TRUE if set the value else %FALSE.
     */
    serviceSetProperty(connection: Gio.DBusConnection, sender: string, objectPath: string, interfaceName: string, propertyName: string, value: GLib.Variant): boolean

    // Class property signals of IBus-1.0.IBus.Service

    connect(sigName: "notify::connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An IBusService is a base class for services.
 * @class 
 */
export class Service extends Object {

    // Own properties of IBus-1.0.IBus.Service

    static name: string

    // Constructors of IBus-1.0.IBus.Service

    constructor(config?: Service.ConstructorProperties) 
    /**
     * Creantes a new #IBusService.
     * @constructor 
     * @param connection A GDBusConnection.
     * @param path Object path.
     * @returns A newly allocated #IBusService
     */
    constructor(connection: Gio.DBusConnection, path: string) 
    /**
     * Creantes a new #IBusService.
     * @constructor 
     * @param connection A GDBusConnection.
     * @param path Object path.
     * @returns A newly allocated #IBusService
     */
    static new(connection: Gio.DBusConnection, path: string): Service

    // Overloads of new

    /**
     * Creates  a new #IBusObject.
     * @constructor 
     * @returns A newly allocated #IBusObject
     */
    static new(): Object
    _init(config?: Service.ConstructorProperties): void
    /**
     * Set the interface introspection information with the service class.
     * @param xmlData The introspection xml data.
     * @returns %TRUE if @xml_data is valid and succeeded to be added;          %FALSE otherwise.
     */
    static addInterfaces(klass: Service | Function | GObject.GType, xmlData: string): boolean
}

export module Text {

    // Constructor properties interface

    export interface ConstructorProperties extends Serializable.ConstructorProperties {
    }

}

export interface Text {

    // Own properties of IBus-1.0.IBus.Text

    __gtype__: number

    // Own fields of IBus-1.0.IBus.Text

    parent: Serializable & GObject.InitiallyUnowned
    /**
     * Whether `text` is static, i.e., no need and will not be freed. Only TRUE if IBusText is newed from ibus_text_new_from_static_string().
     * @field 
     */
    isStatic: boolean
    /**
     * The string content of IBusText in UTF-8.
     * @field 
     */
    text: string | null
    /**
     * Associated IBusAttributes.
     * @field 
     */
    attrs: AttrList

    // Owm methods of IBus-1.0.IBus.Text

    /**
     * Append an IBusAttribute for IBusText.
     * @param type IBusAttributeType for `text`.
     * @param value Value for the type.
     * @param startIndex The starting index, inclusive.
     * @param endIndex The ending index, exclusive.
     */
    appendAttribute(type: number, value: number, startIndex: number, endIndex: number): void
    /**
     * Return the attributes in an #IBusText. Should not be freed.
     * @returns the attrs in @text.
     */
    getAttributes(): AttrList
    /**
     * Return number of characters in an #IBusText.
     * This function is based on g_utf8_strlen(), so unlike strlen(),
     * it does not count by bytes but characters instead.
     * @returns Number of character in @text, not counted by bytes.
     */
    getLength(): number
    /**
     * Return the text in an #IBusText. Should not be freed.
     * @returns the text in @text.
     */
    getText(): string
    setAttributes(attrs: AttrList): void

    // Class property signals of IBus-1.0.IBus.Text

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An IBusText is the main text object in IBus.
 * The text is decorated according to associated IBusAttribute,
 * e.g. the foreground/background color, underline, and
 * applied scope.
 * 
 * see_also: #IBusAttribute
 * @class 
 */
export class Text extends Serializable {

    // Own properties of IBus-1.0.IBus.Text

    static name: string

    // Constructors of IBus-1.0.IBus.Text

    constructor(config?: Text.ConstructorProperties) 
    /**
     * Creates a new #IBusText from a string.
     * `str` will be duplicated in #IBusText, so feel free to free `str` after this
     * function.
     * @constructor 
     * @param str An text string to be set.
     * @returns A newly allocated #IBusText.
     */
    static newFromString(str: string): Text
    /**
     * Creates a new #IBusText from an UCS-4 encoded string.
     * `str` will be duplicated in IBusText, so feel free to free `str` after this
     * function.
     * @constructor 
     * @param str An text string to be set.
     * @returns A newly allocated #IBusText.
     */
    static newFromUcs4(str: string): Text
    /**
     * Creates a new #IBusText from a single UCS4-encoded character.
     * @constructor 
     * @param c A single UCS4-encoded character.
     * @returns A newly allocated #IBusText.
     */
    static newFromUnichar(c: string): Text
    _init(config?: Text.ConstructorProperties): void

    // Conflicting static methods

    static new(...args: any[]): any
}

export interface AttrListClass {

    // Own fields of IBus-1.0.IBus.AttrListClass

    parent: SerializableClass
}

export abstract class AttrListClass {

    // Own properties of IBus-1.0.IBus.AttrListClass

    static name: string
}

export interface AttributeClass {

    // Own fields of IBus-1.0.IBus.AttributeClass

    parent: SerializableClass
}

export abstract class AttributeClass {

    // Own properties of IBus-1.0.IBus.AttributeClass

    static name: string
}

export interface BusClass {

    // Own fields of IBus-1.0.IBus.BusClass

    parent: ObjectClass
}

export abstract class BusClass {

    // Own properties of IBus-1.0.IBus.BusClass

    static name: string
}

export interface BusPrivate {
}

export class BusPrivate {

    // Own properties of IBus-1.0.IBus.BusPrivate

    static name: string
}

export interface ComponentClass {

    // Own fields of IBus-1.0.IBus.ComponentClass

    parent: SerializableClass
}

export abstract class ComponentClass {

    // Own properties of IBus-1.0.IBus.ComponentClass

    static name: string
}

export interface ComponentPrivate {
}

export class ComponentPrivate {

    // Own properties of IBus-1.0.IBus.ComponentPrivate

    static name: string
}

export interface ConfigClass {
}

export abstract class ConfigClass {

    // Own properties of IBus-1.0.IBus.ConfigClass

    static name: string
}

export interface ConfigPrivate {
}

export class ConfigPrivate {

    // Own properties of IBus-1.0.IBus.ConfigPrivate

    static name: string
}

export interface ConfigServiceClass {

    // Own fields of IBus-1.0.IBus.ConfigServiceClass

    setValue: (config: ConfigService, section: string, name: string, value: GLib.Variant) => boolean
    getValue: (config: ConfigService, section: string, name: string) => GLib.Variant
    unsetValue: (config: ConfigService, section: string, name: string) => boolean
    getValues: (config: ConfigService, section: string) => GLib.Variant
}

export abstract class ConfigServiceClass {

    // Own properties of IBus-1.0.IBus.ConfigServiceClass

    static name: string
}

export interface EngineClass {

    // Own fields of IBus-1.0.IBus.EngineClass

    processKeyEvent: (engine: Engine, keyval: number, keycode: number, state: number) => boolean
    focusIn: (engine: Engine) => void
    focusOut: (engine: Engine) => void
    reset: (engine: Engine) => void
    enable: (engine: Engine) => void
    disable: (engine: Engine) => void
    setCursorLocation: (engine: Engine, x: number, y: number, w: number, h: number) => void
    setCapabilities: (engine: Engine, caps: number) => void
    pageUp: (engine: Engine) => void
    pageDown: (engine: Engine) => void
    cursorUp: (engine: Engine) => void
    cursorDown: (engine: Engine) => void
    propertyActivate: (engine: Engine, propName: string, propState: number) => void
    propertyShow: (engine: Engine, propName: string) => void
    propertyHide: (engine: Engine, propName: string) => void
    candidateClicked: (engine: Engine, index: number, button: number, state: number) => void
    setSurroundingText: (engine: Engine, text: Text, cursorIndex: number, anchorPos: number) => void
    processHandWritingEvent: (engine: Engine, coordinates: number, coordinatesLen: number) => void
    cancelHandWriting: (engine: Engine, nStrokes: number) => void
    setContentType: (engine: Engine, purpose: number, hints: number) => void
}

export abstract class EngineClass {

    // Own properties of IBus-1.0.IBus.EngineClass

    static name: string
}

export interface EngineDescClass {

    // Own fields of IBus-1.0.IBus.EngineDescClass

    parent: SerializableClass
}

export abstract class EngineDescClass {

    // Own properties of IBus-1.0.IBus.EngineDescClass

    static name: string
}

export interface EngineDescPrivate {
}

export class EngineDescPrivate {

    // Own properties of IBus-1.0.IBus.EngineDescPrivate

    static name: string
}

export interface EnginePrivate {
}

export class EnginePrivate {

    // Own properties of IBus-1.0.IBus.EnginePrivate

    static name: string
}

export interface EngineSimpleClass {
}

export abstract class EngineSimpleClass {

    // Own properties of IBus-1.0.IBus.EngineSimpleClass

    static name: string
}

export interface EngineSimplePrivate {
}

export class EngineSimplePrivate {

    // Own properties of IBus-1.0.IBus.EngineSimplePrivate

    static name: string
}

export interface FactoryClass {

    // Own fields of IBus-1.0.IBus.FactoryClass

    createEngine: (factory: Factory, engineName: string) => Engine
}

export abstract class FactoryClass {

    // Own properties of IBus-1.0.IBus.FactoryClass

    static name: string
}

export interface FactoryPrivate {
}

export class FactoryPrivate {

    // Own properties of IBus-1.0.IBus.FactoryPrivate

    static name: string
}

export interface HotkeyProfileClass {

    // Own fields of IBus-1.0.IBus.HotkeyProfileClass

    parent: SerializableClass
    trigger: (profile: HotkeyProfile, event: GLib.Quark) => void
}

export abstract class HotkeyProfileClass {

    // Own properties of IBus-1.0.IBus.HotkeyProfileClass

    static name: string
}

export interface InputContextClass {

    // Own fields of IBus-1.0.IBus.InputContextClass

    parent: ProxyClass
}

export abstract class InputContextClass {

    // Own properties of IBus-1.0.IBus.InputContextClass

    static name: string
}

export interface KeymapClass {

    // Own fields of IBus-1.0.IBus.KeymapClass

    parent: ObjectClass
}

export abstract class KeymapClass {

    // Own properties of IBus-1.0.IBus.KeymapClass

    static name: string
}

export interface LookupTableClass {

    // Own fields of IBus-1.0.IBus.LookupTableClass

    parent: SerializableClass
}

export abstract class LookupTableClass {

    // Own properties of IBus-1.0.IBus.LookupTableClass

    static name: string
}

export interface ObjectClass {

    // Own fields of IBus-1.0.IBus.ObjectClass

    parent: GObject.InitiallyUnownedClass
    destroy: (object: Object) => void
}

export abstract class ObjectClass {

    // Own properties of IBus-1.0.IBus.ObjectClass

    static name: string
}

export interface ObjectPrivate {
}

export class ObjectPrivate {

    // Own properties of IBus-1.0.IBus.ObjectPrivate

    static name: string
}

export interface ObservedPathClass {

    // Own fields of IBus-1.0.IBus.ObservedPathClass

    parent: SerializableClass
}

export abstract class ObservedPathClass {

    // Own properties of IBus-1.0.IBus.ObservedPathClass

    static name: string
}

export interface PanelServiceClass {

    // Own fields of IBus-1.0.IBus.PanelServiceClass

    parent: ServiceClass
    focusIn: (panel: PanelService, inputContextPath: string) => void
    focusOut: (panel: PanelService, inputContextPath: string) => void
    registerProperties: (panel: PanelService, propList: PropList) => void
    setCursorLocation: (panel: PanelService, x: number, y: number, w: number, h: number) => void
    updateAuxiliaryText: (panel: PanelService, text: Text, visible: boolean) => void
    updateLookupTable: (panel: PanelService, lookupTable: LookupTable, visible: boolean) => void
    updatePreeditText: (panel: PanelService, text: Text, cursorPos: number, visible: boolean) => void
    updateProperty: (panel: PanelService, prop: Property) => void
    cursorDownLookupTable: (panel: PanelService) => void
    cursorUpLookupTable: (panel: PanelService) => void
    hideAuxiliaryText: (panel: PanelService) => void
    hideLanguageBar: (panel: PanelService) => void
    hideLookupTable: (panel: PanelService) => void
    hidePreeditText: (panel: PanelService) => void
    pageDownLookupTable: (panel: PanelService) => void
    pageUpLookupTable: (panel: PanelService) => void
    reset: (panel: PanelService) => void
    showAuxiliaryText: (panel: PanelService) => void
    showLanguageBar: (panel: PanelService) => void
    showLookupTable: (panel: PanelService) => void
    showPreeditText: (panel: PanelService) => void
    startSetup: (panel: PanelService) => void
    stateChanged: (panel: PanelService) => void
    destroyContext: (panel: PanelService, inputContextPath: string) => void
    setContentType: (panel: PanelService, purpose: number, hints: number) => void
}

export abstract class PanelServiceClass {

    // Own properties of IBus-1.0.IBus.PanelServiceClass

    static name: string
}

export interface PropListClass {

    // Own fields of IBus-1.0.IBus.PropListClass

    /**
     * The parent class.
     * @field 
     */
    parent: SerializableClass
}

/**
 * Class structure for #IBusPropList.
 * @record 
 */
export abstract class PropListClass {

    // Own properties of IBus-1.0.IBus.PropListClass

    static name: string
}

export interface PropertyClass {

    // Own fields of IBus-1.0.IBus.PropertyClass

    parent: SerializableClass
}

export abstract class PropertyClass {

    // Own properties of IBus-1.0.IBus.PropertyClass

    static name: string
}

export interface PropertyPrivate {
}

export class PropertyPrivate {

    // Own properties of IBus-1.0.IBus.PropertyPrivate

    static name: string
}

export interface ProxyClass {

    // Own fields of IBus-1.0.IBus.ProxyClass

    parent: Gio.DBusProxyClass
    destroy: (proxy: Proxy) => void
}

export abstract class ProxyClass {

    // Own properties of IBus-1.0.IBus.ProxyClass

    static name: string
}

export interface Rectangle {

    // Own fields of IBus-1.0.IBus.Rectangle

    /**
     * x coordinate.
     * @field 
     */
    x: number
    /**
     * y coordinate.
     * @field 
     */
    y: number
    /**
     * width of the rectangle.
     * @field 
     */
    width: number
    /**
     * height of the renctangl.
     * @field 
     */
    height: number
}

/**
 * Rectangle definition.
 * @record 
 */
export class Rectangle {

    // Own properties of IBus-1.0.IBus.Rectangle

    static name: string
}

export interface RegistryClass {
}

export abstract class RegistryClass {

    // Own properties of IBus-1.0.IBus.RegistryClass

    static name: string
}

export interface RegistryPrivate {
}

export class RegistryPrivate {

    // Own properties of IBus-1.0.IBus.RegistryPrivate

    static name: string
}

export interface SerializableClass {

    // Own fields of IBus-1.0.IBus.SerializableClass

    serialize: (object: Serializable, builder: GLib.VariantBuilder) => boolean
    deserialize: (object: Serializable, variant: GLib.Variant) => number
    copy: (dest: Serializable, src: Serializable) => boolean
}

export abstract class SerializableClass {

    // Own properties of IBus-1.0.IBus.SerializableClass

    static name: string
}

export interface SerializablePrivate {
}

export class SerializablePrivate {

    // Own properties of IBus-1.0.IBus.SerializablePrivate

    static name: string
}

export interface ServiceClass {

    // Own fields of IBus-1.0.IBus.ServiceClass

    serviceMethodCall: (service: Service, connection: Gio.DBusConnection, sender: string, objectPath: string, interfaceName: string, methodName: string, parameters: GLib.Variant, invocation: Gio.DBusMethodInvocation) => void
    serviceGetProperty: (service: Service, connection: Gio.DBusConnection, sender: string, objectPath: string, interfaceName: string, propertyName: string) => GLib.Variant | null
    serviceSetProperty: (service: Service, connection: Gio.DBusConnection, sender: string, objectPath: string, interfaceName: string, propertyName: string, value: GLib.Variant) => boolean
}

export abstract class ServiceClass {

    // Own properties of IBus-1.0.IBus.ServiceClass

    static name: string

    // Owm static methods of IBus-1.0.IBus.ServiceClass

    /**
     * Set the interface introspection information with the service class.
     * @param xmlData The introspection xml data.
     * @returns %TRUE if @xml_data is valid and succeeded to be added;          %FALSE otherwise.
     */
    static addInterfaces(klass: Service | Function | GObject.GType, xmlData: string): boolean
}

export interface ServicePrivate {
}

export class ServicePrivate {

    // Own properties of IBus-1.0.IBus.ServicePrivate

    static name: string
}

export interface TextClass {

    // Own fields of IBus-1.0.IBus.TextClass

    parent: SerializableClass
}

export abstract class TextClass {

    // Own properties of IBus-1.0.IBus.TextClass

    static name: string
}

export interface XML {

    // Own fields of IBus-1.0.IBus.XML

    /**
     * Name of XML tag.
     * @field 
     */
    name: string | null
    /**
     * Text enclosed by XML start tag and end tag. i.e. <tag>text</tag>.
     * @field 
     */
    text: string | null
    /**
     * Attributes of the XML node.
     * @field 
     */
    attributes: string | null
    /**
     * Children node of this XML node.
     * @field 
     */
    subNodes: any[]

    // Owm methods of IBus-1.0.IBus.XML

    /**
     * Creates a copy of `node,` which should be freed with
     * ibus_xml_free(). Primarily used by language bindings,
     * not that useful otherwise (since `node` can just be copied
     * by assignment in C).
     * @returns the newly allocated #IBusXML, which should          be freed with ibus_xml_free(), or %NULL          if @node was %NULL.
     */
    copy(): XML
    /**
     * Free an XML tree.
     */
    free(): void
    /**
     * Output an XML tree to a GString.
     * @param output GString which stores the output.
     */
    output(output: GLib.String): void
}

/**
 * IBusXML lists data structure and handling function for XML in IBus.
 * @record 
 */
export class XML {

    // Own properties of IBus-1.0.IBus.XML

    static name: string

    // Constructors of IBus-1.0.IBus.XML

    /**
     * Parse a string buffer which contains an XML-formatted string,
     * and return a corresponding XML tree.
     * @param buffer Buffer to be parsed.
     * @returns Root node of parsed XML tree.
     */
    static parseBuffer(buffer: string): XML
    /**
     * Parse an XML file and return a corresponding XML tree.
     * @param name File name to be parsed.
     * @returns Root node of parsed XML tree.
     */
    static parseFile(name: string): XML
}

// END