
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './ibus-1.0-ambient.d.ts';
import './ibus-1.0-import.d.ts';
/**
 * IBus-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace IBus {

/**
 * Type enumeration of IBusText attribute.
 */
enum AttrType {
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
enum AttrUnderline {
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
enum BusRequestNameReply {
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
enum BusStartServiceByNameReply {
    /**
     * same as DBUS_START_REPLY_SUCCESS
     */
    SUCCESS,
    /**
     * same as DBUS_START_REPLY_ALREADY_RUNNING
     */
    ALREADY_RUNNING,
}
enum Error {
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
enum InputPurpose {
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
enum Orientation {
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
enum PreeditFocusMode {
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
enum PropState {
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
enum PropType {
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
enum BusNameFlag {
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
enum Capabilite {
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
enum InputHints {
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
enum ModifierType {
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
enum ObjectFlags {
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
const TODO_0: number
const TODO_1: number
const TODO_2: number
const TODO_3: number
const TODO_3270_AltCursor: number
const TODO_3270_Attn: number
const TODO_3270_BackTab: number
const TODO_3270_ChangeScreen: number
const TODO_3270_Copy: number
const TODO_3270_CursorBlink: number
const TODO_3270_CursorSelect: number
const TODO_3270_DeleteWord: number
const TODO_3270_Duplicate: number
const TODO_3270_Enter: number
const TODO_3270_EraseEOF: number
const TODO_3270_EraseInput: number
const TODO_3270_ExSelect: number
const TODO_3270_FieldMark: number
const TODO_3270_Ident: number
const TODO_3270_Jump: number
const TODO_3270_KeyClick: number
const TODO_3270_Left2: number
const TODO_3270_PA1: number
const TODO_3270_PA2: number
const TODO_3270_PA3: number
const TODO_3270_Play: number
const TODO_3270_PrintScreen: number
const TODO_3270_Quit: number
const TODO_3270_Record: number
const TODO_3270_Reset: number
const TODO_3270_Right2: number
const TODO_3270_Rule: number
const TODO_3270_Setup: number
const TODO_3270_Test: number
const TODO_4: number
const TODO_5: number
const TODO_6: number
const TODO_7: number
const TODO_8: number
const TODO_9: number
const A: number
const AE: number
const Aacute: number
const Abelowdot: number
const Abreve: number
const Abreveacute: number
const Abrevebelowdot: number
const Abrevegrave: number
const Abrevehook: number
const Abrevetilde: number
const AccessX_Enable: number
const AccessX_Feedback_Enable: number
const Acircumflex: number
const Acircumflexacute: number
const Acircumflexbelowdot: number
const Acircumflexgrave: number
const Acircumflexhook: number
const Acircumflextilde: number
const Adiaeresis: number
const Agrave: number
const Ahook: number
const Alt_L: number
const Alt_R: number
const Amacron: number
const Aogonek: number
const Arabic_0: number
const Arabic_1: number
const Arabic_2: number
const Arabic_3: number
const Arabic_4: number
const Arabic_5: number
const Arabic_6: number
const Arabic_7: number
const Arabic_8: number
const Arabic_9: number
const Arabic_ain: number
const Arabic_alef: number
const Arabic_alefmaksura: number
const Arabic_beh: number
const Arabic_comma: number
const Arabic_dad: number
const Arabic_dal: number
const Arabic_damma: number
const Arabic_dammatan: number
const Arabic_ddal: number
const Arabic_farsi_yeh: number
const Arabic_fatha: number
const Arabic_fathatan: number
const Arabic_feh: number
const Arabic_fullstop: number
const Arabic_gaf: number
const Arabic_ghain: number
const Arabic_ha: number
const Arabic_hah: number
const Arabic_hamza: number
const Arabic_hamza_above: number
const Arabic_hamza_below: number
const Arabic_hamzaonalef: number
const Arabic_hamzaonwaw: number
const Arabic_hamzaonyeh: number
const Arabic_hamzaunderalef: number
const Arabic_heh: number
const Arabic_heh_doachashmee: number
const Arabic_heh_goal: number
const Arabic_jeem: number
const Arabic_jeh: number
const Arabic_kaf: number
const Arabic_kasra: number
const Arabic_kasratan: number
const Arabic_keheh: number
const Arabic_khah: number
const Arabic_lam: number
const Arabic_madda_above: number
const Arabic_maddaonalef: number
const Arabic_meem: number
const Arabic_noon: number
const Arabic_noon_ghunna: number
const Arabic_peh: number
const Arabic_percent: number
const Arabic_qaf: number
const Arabic_question_mark: number
const Arabic_ra: number
const Arabic_rreh: number
const Arabic_sad: number
const Arabic_seen: number
const Arabic_semicolon: number
const Arabic_shadda: number
const Arabic_sheen: number
const Arabic_sukun: number
const Arabic_superscript_alef: number
const Arabic_switch: number
const Arabic_tah: number
const Arabic_tatweel: number
const Arabic_tcheh: number
const Arabic_teh: number
const Arabic_tehmarbuta: number
const Arabic_thal: number
const Arabic_theh: number
const Arabic_tteh: number
const Arabic_veh: number
const Arabic_waw: number
const Arabic_yeh: number
const Arabic_yeh_baree: number
const Arabic_zah: number
const Arabic_zain: number
const Aring: number
const Armenian_AT: number
const Armenian_AYB: number
const Armenian_BEN: number
const Armenian_CHA: number
const Armenian_DA: number
const Armenian_DZA: number
const Armenian_E: number
const Armenian_FE: number
const Armenian_GHAT: number
const Armenian_GIM: number
const Armenian_HI: number
const Armenian_HO: number
const Armenian_INI: number
const Armenian_JE: number
const Armenian_KE: number
const Armenian_KEN: number
const Armenian_KHE: number
const Armenian_LYUN: number
const Armenian_MEN: number
const Armenian_NU: number
const Armenian_O: number
const Armenian_PE: number
const Armenian_PYUR: number
const Armenian_RA: number
const Armenian_RE: number
const Armenian_SE: number
const Armenian_SHA: number
const Armenian_TCHE: number
const Armenian_TO: number
const Armenian_TSA: number
const Armenian_TSO: number
const Armenian_TYUN: number
const Armenian_VEV: number
const Armenian_VO: number
const Armenian_VYUN: number
const Armenian_YECH: number
const Armenian_ZA: number
const Armenian_ZHE: number
const Armenian_accent: number
const Armenian_amanak: number
const Armenian_apostrophe: number
const Armenian_at: number
const Armenian_ayb: number
const Armenian_ben: number
const Armenian_but: number
const Armenian_cha: number
const Armenian_da: number
const Armenian_dza: number
const Armenian_e: number
const Armenian_exclam: number
const Armenian_fe: number
const Armenian_full_stop: number
const Armenian_ghat: number
const Armenian_gim: number
const Armenian_hi: number
const Armenian_ho: number
const Armenian_hyphen: number
const Armenian_ini: number
const Armenian_je: number
const Armenian_ke: number
const Armenian_ken: number
const Armenian_khe: number
const Armenian_ligature_ew: number
const Armenian_lyun: number
const Armenian_men: number
const Armenian_nu: number
const Armenian_o: number
const Armenian_paruyk: number
const Armenian_pe: number
const Armenian_pyur: number
const Armenian_question: number
const Armenian_ra: number
const Armenian_re: number
const Armenian_se: number
const Armenian_separation_mark: number
const Armenian_sha: number
const Armenian_shesht: number
const Armenian_tche: number
const Armenian_to: number
const Armenian_tsa: number
const Armenian_tso: number
const Armenian_tyun: number
const Armenian_verjaket: number
const Armenian_vev: number
const Armenian_vo: number
const Armenian_vyun: number
const Armenian_yech: number
const Armenian_yentamna: number
const Armenian_za: number
const Armenian_zhe: number
const Atilde: number
const AudibleBell_Enable: number
const B: number
const Babovedot: number
const BackSpace: number
const Begin: number
const BounceKeys_Enable: number
const Break: number
const Byelorussian_SHORTU: number
const Byelorussian_shortu: number
const C: number
const Cabovedot: number
const Cacute: number
const Cancel: number
const Caps_Lock: number
const Ccaron: number
const Ccedilla: number
const Ccircumflex: number
const Clear: number
/**
 * International and multi-key character composition.
 */
const Codeinput: number
const ColonSign: number
const Control_L: number
const Control_R: number
const CruzeiroSign: number
const Cyrillic_A: number
const Cyrillic_BE: number
const Cyrillic_CHE: number
const Cyrillic_CHE_descender: number
const Cyrillic_CHE_vertstroke: number
const Cyrillic_DE: number
const Cyrillic_DZHE: number
const Cyrillic_E: number
const Cyrillic_EF: number
const Cyrillic_EL: number
const Cyrillic_EM: number
const Cyrillic_EN: number
const Cyrillic_EN_descender: number
const Cyrillic_ER: number
const Cyrillic_ES: number
const Cyrillic_GHE: number
const Cyrillic_GHE_bar: number
const Cyrillic_HA: number
const Cyrillic_HARDSIGN: number
const Cyrillic_HA_descender: number
const Cyrillic_I: number
const Cyrillic_IE: number
const Cyrillic_IO: number
const Cyrillic_I_macron: number
const Cyrillic_JE: number
const Cyrillic_KA: number
const Cyrillic_KA_descender: number
const Cyrillic_KA_vertstroke: number
const Cyrillic_LJE: number
const Cyrillic_NJE: number
const Cyrillic_O: number
const Cyrillic_O_bar: number
const Cyrillic_PE: number
const Cyrillic_SCHWA: number
const Cyrillic_SHA: number
const Cyrillic_SHCHA: number
const Cyrillic_SHHA: number
const Cyrillic_SHORTI: number
const Cyrillic_SOFTSIGN: number
const Cyrillic_TE: number
const Cyrillic_TSE: number
const Cyrillic_U: number
const Cyrillic_U_macron: number
const Cyrillic_U_straight: number
const Cyrillic_U_straight_bar: number
const Cyrillic_VE: number
const Cyrillic_YA: number
const Cyrillic_YERU: number
const Cyrillic_YU: number
const Cyrillic_ZE: number
const Cyrillic_ZHE: number
const Cyrillic_ZHE_descender: number
const Cyrillic_a: number
const Cyrillic_be: number
const Cyrillic_che: number
const Cyrillic_che_descender: number
const Cyrillic_che_vertstroke: number
const Cyrillic_de: number
const Cyrillic_dzhe: number
const Cyrillic_e: number
const Cyrillic_ef: number
const Cyrillic_el: number
const Cyrillic_em: number
const Cyrillic_en: number
const Cyrillic_en_descender: number
const Cyrillic_er: number
const Cyrillic_es: number
const Cyrillic_ghe: number
const Cyrillic_ghe_bar: number
const Cyrillic_ha: number
const Cyrillic_ha_descender: number
const Cyrillic_hardsign: number
const Cyrillic_i: number
const Cyrillic_i_macron: number
const Cyrillic_ie: number
const Cyrillic_io: number
const Cyrillic_je: number
const Cyrillic_ka: number
const Cyrillic_ka_descender: number
const Cyrillic_ka_vertstroke: number
const Cyrillic_lje: number
const Cyrillic_nje: number
const Cyrillic_o: number
const Cyrillic_o_bar: number
const Cyrillic_pe: number
const Cyrillic_schwa: number
const Cyrillic_sha: number
const Cyrillic_shcha: number
const Cyrillic_shha: number
const Cyrillic_shorti: number
const Cyrillic_softsign: number
const Cyrillic_te: number
const Cyrillic_tse: number
const Cyrillic_u: number
const Cyrillic_u_macron: number
const Cyrillic_u_straight: number
const Cyrillic_u_straight_bar: number
const Cyrillic_ve: number
const Cyrillic_ya: number
const Cyrillic_yeru: number
const Cyrillic_yu: number
const Cyrillic_ze: number
const Cyrillic_zhe: number
const Cyrillic_zhe_descender: number
const D: number
const Dabovedot: number
const Dcaron: number
const Delete: number
const DongSign: number
const Down: number
const Dstroke: number
const E: number
const ENG: number
const ETH: number
const Eabovedot: number
const Eacute: number
const Ebelowdot: number
const Ecaron: number
const Ecircumflex: number
const Ecircumflexacute: number
const Ecircumflexbelowdot: number
const Ecircumflexgrave: number
const Ecircumflexhook: number
const Ecircumflextilde: number
const EcuSign: number
const Ediaeresis: number
const Egrave: number
const Ehook: number
const Eisu_Shift: number
const Eisu_toggle: number
const Emacron: number
const End: number
const Eogonek: number
const Escape: number
const Eth: number
const Etilde: number
const EuroSign: number
const Execute: number
const F: number
const F1: number
const F10: number
const F11: number
const F12: number
const F13: number
const F14: number
const F15: number
const F16: number
const F17: number
const F18: number
const F19: number
const F2: number
const F20: number
const F21: number
const F22: number
const F23: number
const F24: number
const F25: number
const F26: number
const F27: number
const F28: number
const F29: number
const F3: number
const F30: number
const F31: number
const F32: number
const F33: number
const F34: number
const F35: number
const F4: number
const F5: number
const F6: number
const F7: number
const F8: number
const F9: number
const FFrancSign: number
const Fabovedot: number
const Farsi_0: number
const Farsi_1: number
const Farsi_2: number
const Farsi_3: number
const Farsi_4: number
const Farsi_5: number
const Farsi_6: number
const Farsi_7: number
const Farsi_8: number
const Farsi_9: number
const Farsi_yeh: number
const Find: number
const First_Virtual_Screen: number
const G: number
const Gabovedot: number
const Gbreve: number
const Gcaron: number
const Gcedilla: number
const Gcircumflex: number
const Georgian_an: number
const Georgian_ban: number
const Georgian_can: number
const Georgian_char: number
const Georgian_chin: number
const Georgian_cil: number
const Georgian_don: number
const Georgian_en: number
const Georgian_fi: number
const Georgian_gan: number
const Georgian_ghan: number
const Georgian_hae: number
const Georgian_har: number
const Georgian_he: number
const Georgian_hie: number
const Georgian_hoe: number
const Georgian_in: number
const Georgian_jhan: number
const Georgian_jil: number
const Georgian_kan: number
const Georgian_khar: number
const Georgian_las: number
const Georgian_man: number
const Georgian_nar: number
const Georgian_on: number
const Georgian_par: number
const Georgian_phar: number
const Georgian_qar: number
const Georgian_rae: number
const Georgian_san: number
const Georgian_shin: number
const Georgian_tan: number
const Georgian_tar: number
const Georgian_un: number
const Georgian_vin: number
const Georgian_we: number
const Georgian_xan: number
const Georgian_zen: number
const Georgian_zhar: number
const Greek_ALPHA: number
const Greek_ALPHAaccent: number
const Greek_BETA: number
const Greek_CHI: number
const Greek_DELTA: number
const Greek_EPSILON: number
const Greek_EPSILONaccent: number
const Greek_ETA: number
const Greek_ETAaccent: number
const Greek_GAMMA: number
const Greek_IOTA: number
const Greek_IOTAaccent: number
const Greek_IOTAdiaeresis: number
const Greek_IOTAdieresis: number
const Greek_KAPPA: number
const Greek_LAMBDA: number
const Greek_LAMDA: number
const Greek_MU: number
const Greek_NU: number
const Greek_OMEGA: number
const Greek_OMEGAaccent: number
const Greek_OMICRON: number
const Greek_OMICRONaccent: number
const Greek_PHI: number
const Greek_PI: number
const Greek_PSI: number
const Greek_RHO: number
const Greek_SIGMA: number
const Greek_TAU: number
const Greek_THETA: number
const Greek_UPSILON: number
const Greek_UPSILONaccent: number
const Greek_UPSILONdieresis: number
const Greek_XI: number
const Greek_ZETA: number
const Greek_accentdieresis: number
const Greek_alpha: number
const Greek_alphaaccent: number
const Greek_beta: number
const Greek_chi: number
const Greek_delta: number
const Greek_epsilon: number
const Greek_epsilonaccent: number
const Greek_eta: number
const Greek_etaaccent: number
const Greek_finalsmallsigma: number
const Greek_gamma: number
const Greek_horizbar: number
const Greek_iota: number
const Greek_iotaaccent: number
const Greek_iotaaccentdieresis: number
const Greek_iotadieresis: number
const Greek_kappa: number
const Greek_lambda: number
const Greek_lamda: number
const Greek_mu: number
const Greek_nu: number
const Greek_omega: number
const Greek_omegaaccent: number
const Greek_omicron: number
const Greek_omicronaccent: number
const Greek_phi: number
const Greek_pi: number
const Greek_psi: number
const Greek_rho: number
const Greek_sigma: number
const Greek_switch: number
const Greek_tau: number
const Greek_theta: number
const Greek_upsilon: number
const Greek_upsilonaccent: number
const Greek_upsilonaccentdieresis: number
const Greek_upsilondieresis: number
const Greek_xi: number
const Greek_zeta: number
const H: number
const Hangul: number
const Hangul_A: number
const Hangul_AE: number
const Hangul_AraeA: number
const Hangul_AraeAE: number
const Hangul_Banja: number
const Hangul_Cieuc: number
const Hangul_Codeinput: number
const Hangul_Dikeud: number
const Hangul_E: number
const Hangul_EO: number
const Hangul_EU: number
const Hangul_End: number
const Hangul_Hanja: number
const Hangul_Hieuh: number
const Hangul_I: number
const Hangul_Ieung: number
const Hangul_J_Cieuc: number
const Hangul_J_Dikeud: number
const Hangul_J_Hieuh: number
const Hangul_J_Ieung: number
const Hangul_J_Jieuj: number
const Hangul_J_Khieuq: number
const Hangul_J_Kiyeog: number
const Hangul_J_KiyeogSios: number
const Hangul_J_KkogjiDalrinIeung: number
const Hangul_J_Mieum: number
const Hangul_J_Nieun: number
const Hangul_J_NieunHieuh: number
const Hangul_J_NieunJieuj: number
const Hangul_J_PanSios: number
const Hangul_J_Phieuf: number
const Hangul_J_Pieub: number
const Hangul_J_PieubSios: number
const Hangul_J_Rieul: number
const Hangul_J_RieulHieuh: number
const Hangul_J_RieulKiyeog: number
const Hangul_J_RieulMieum: number
const Hangul_J_RieulPhieuf: number
const Hangul_J_RieulPieub: number
const Hangul_J_RieulSios: number
const Hangul_J_RieulTieut: number
const Hangul_J_Sios: number
const Hangul_J_SsangKiyeog: number
const Hangul_J_SsangSios: number
const Hangul_J_Tieut: number
const Hangul_J_YeorinHieuh: number
const Hangul_Jamo: number
const Hangul_Jeonja: number
const Hangul_Jieuj: number
const Hangul_Khieuq: number
const Hangul_Kiyeog: number
const Hangul_KiyeogSios: number
const Hangul_KkogjiDalrinIeung: number
const Hangul_Mieum: number
const Hangul_MultipleCandidate: number
const Hangul_Nieun: number
const Hangul_NieunHieuh: number
const Hangul_NieunJieuj: number
const Hangul_O: number
const Hangul_OE: number
const Hangul_PanSios: number
const Hangul_Phieuf: number
const Hangul_Pieub: number
const Hangul_PieubSios: number
const Hangul_PostHanja: number
const Hangul_PreHanja: number
const Hangul_PreviousCandidate: number
const Hangul_Rieul: number
const Hangul_RieulHieuh: number
const Hangul_RieulKiyeog: number
const Hangul_RieulMieum: number
const Hangul_RieulPhieuf: number
const Hangul_RieulPieub: number
const Hangul_RieulSios: number
const Hangul_RieulTieut: number
const Hangul_RieulYeorinHieuh: number
const Hangul_Romaja: number
const Hangul_SingleCandidate: number
const Hangul_Sios: number
const Hangul_Special: number
const Hangul_SsangDikeud: number
const Hangul_SsangJieuj: number
const Hangul_SsangKiyeog: number
const Hangul_SsangPieub: number
const Hangul_SsangSios: number
const Hangul_Start: number
const Hangul_SunkyeongeumMieum: number
const Hangul_SunkyeongeumPhieuf: number
const Hangul_SunkyeongeumPieub: number
const Hangul_Tieut: number
const Hangul_U: number
const Hangul_WA: number
const Hangul_WAE: number
const Hangul_WE: number
const Hangul_WEO: number
const Hangul_WI: number
const Hangul_YA: number
const Hangul_YAE: number
const Hangul_YE: number
const Hangul_YEO: number
const Hangul_YI: number
const Hangul_YO: number
const Hangul_YU: number
const Hangul_YeorinHieuh: number
const Hangul_switch: number
const Hankaku: number
const Hcircumflex: number
const Hebrew_switch: number
const Help: number
/**
 * Japanese keyboard support.
 */
const Henkan: number
/**
 * Japanese keyboard support.
 */
const Henkan_Mode: number
/**
 * Japanese keyboard support.
 */
const Hiragana: number
/**
 * Japanese keyboard support.
 */
const Hiragana_Katakana: number
const Home: number
const Hstroke: number
const Hyper_L: number
const Hyper_R: number
const I: number
/**
 * D-Bus interface for IBus config.
 */
const INTERFACE_CONFIG: string
/**
 * D-Bus interface for IBus engine.
 */
const INTERFACE_ENGINE: string
/**
 * D-Bus interface for IBus factory.
 */
const INTERFACE_FACTORY: string
/**
 * D-Bus interface for IBus.
 */
const INTERFACE_IBUS: string
/**
 * D-Bus interface for IBus input context.
 */
const INTERFACE_INPUT_CONTEXT: string
/**
 * D-Bus interface for IBus notifications.
 */
const INTERFACE_NOTIFICATIONS: string
/**
 * D-Bus interface for IBus panel.
 */
const INTERFACE_PANEL: string
const ISO_Center_Object: number
const ISO_Continuous_Underline: number
const ISO_Discontinuous_Underline: number
const ISO_Emphasize: number
const ISO_Enter: number
const ISO_Fast_Cursor_Down: number
const ISO_Fast_Cursor_Left: number
const ISO_Fast_Cursor_Right: number
const ISO_Fast_Cursor_Up: number
const ISO_First_Group: number
const ISO_First_Group_Lock: number
const ISO_Group_Latch: number
const ISO_Group_Lock: number
const ISO_Group_Shift: number
const ISO_Last_Group: number
const ISO_Last_Group_Lock: number
const ISO_Left_Tab: number
const ISO_Level2_Latch: number
const ISO_Level3_Latch: number
const ISO_Level3_Lock: number
const ISO_Level3_Shift: number
const ISO_Level5_Latch: number
const ISO_Level5_Lock: number
const ISO_Level5_Shift: number
const ISO_Lock: number
const ISO_Move_Line_Down: number
const ISO_Move_Line_Up: number
const ISO_Next_Group: number
const ISO_Next_Group_Lock: number
const ISO_Partial_Line_Down: number
const ISO_Partial_Line_Up: number
const ISO_Partial_Space_Left: number
const ISO_Partial_Space_Right: number
const ISO_Prev_Group: number
const ISO_Prev_Group_Lock: number
const ISO_Release_Both_Margins: number
const ISO_Release_Margin_Left: number
const ISO_Release_Margin_Right: number
const ISO_Set_Margin_Left: number
const ISO_Set_Margin_Right: number
const Iabovedot: number
const Iacute: number
const Ibelowdot: number
const Ibreve: number
const Icircumflex: number
const Idiaeresis: number
const Igrave: number
const Ihook: number
const Imacron: number
const Insert: number
const Iogonek: number
const Itilde: number
const J: number
const Jcircumflex: number
const K: number
const KEY_0: number
const KEY_1: number
const KEY_2: number
const KEY_3: number
const KEY_3270_AltCursor: number
const KEY_3270_Attn: number
const KEY_3270_BackTab: number
const KEY_3270_ChangeScreen: number
const KEY_3270_Copy: number
const KEY_3270_CursorBlink: number
const KEY_3270_CursorSelect: number
const KEY_3270_DeleteWord: number
const KEY_3270_Duplicate: number
const KEY_3270_Enter: number
const KEY_3270_EraseEOF: number
const KEY_3270_EraseInput: number
const KEY_3270_ExSelect: number
const KEY_3270_FieldMark: number
const KEY_3270_Ident: number
const KEY_3270_Jump: number
const KEY_3270_KeyClick: number
const KEY_3270_Left2: number
const KEY_3270_PA1: number
const KEY_3270_PA2: number
const KEY_3270_PA3: number
const KEY_3270_Play: number
const KEY_3270_PrintScreen: number
const KEY_3270_Quit: number
const KEY_3270_Record: number
const KEY_3270_Reset: number
const KEY_3270_Right2: number
const KEY_3270_Rule: number
const KEY_3270_Setup: number
const KEY_3270_Test: number
const KEY_4: number
const KEY_5: number
const KEY_6: number
const KEY_7: number
const KEY_8: number
const KEY_9: number
const KEY_A: number
const KEY_AE: number
const KEY_Aacute: number
const KEY_Abelowdot: number
const KEY_Abreve: number
const KEY_Abreveacute: number
const KEY_Abrevebelowdot: number
const KEY_Abrevegrave: number
const KEY_Abrevehook: number
const KEY_Abrevetilde: number
const KEY_AccessX_Enable: number
const KEY_AccessX_Feedback_Enable: number
const KEY_Acircumflex: number
const KEY_Acircumflexacute: number
const KEY_Acircumflexbelowdot: number
const KEY_Acircumflexgrave: number
const KEY_Acircumflexhook: number
const KEY_Acircumflextilde: number
const KEY_Adiaeresis: number
const KEY_Agrave: number
const KEY_Ahook: number
const KEY_Alt_L: number
const KEY_Alt_R: number
const KEY_Amacron: number
const KEY_Aogonek: number
const KEY_Arabic_0: number
const KEY_Arabic_1: number
const KEY_Arabic_2: number
const KEY_Arabic_3: number
const KEY_Arabic_4: number
const KEY_Arabic_5: number
const KEY_Arabic_6: number
const KEY_Arabic_7: number
const KEY_Arabic_8: number
const KEY_Arabic_9: number
const KEY_Arabic_ain: number
const KEY_Arabic_alef: number
const KEY_Arabic_alefmaksura: number
const KEY_Arabic_beh: number
const KEY_Arabic_comma: number
const KEY_Arabic_dad: number
const KEY_Arabic_dal: number
const KEY_Arabic_damma: number
const KEY_Arabic_dammatan: number
const KEY_Arabic_ddal: number
const KEY_Arabic_farsi_yeh: number
const KEY_Arabic_fatha: number
const KEY_Arabic_fathatan: number
const KEY_Arabic_feh: number
const KEY_Arabic_fullstop: number
const KEY_Arabic_gaf: number
const KEY_Arabic_ghain: number
const KEY_Arabic_ha: number
const KEY_Arabic_hah: number
const KEY_Arabic_hamza: number
const KEY_Arabic_hamza_above: number
const KEY_Arabic_hamza_below: number
const KEY_Arabic_hamzaonalef: number
const KEY_Arabic_hamzaonwaw: number
const KEY_Arabic_hamzaonyeh: number
const KEY_Arabic_hamzaunderalef: number
const KEY_Arabic_heh: number
const KEY_Arabic_heh_doachashmee: number
const KEY_Arabic_heh_goal: number
const KEY_Arabic_jeem: number
const KEY_Arabic_jeh: number
const KEY_Arabic_kaf: number
const KEY_Arabic_kasra: number
const KEY_Arabic_kasratan: number
const KEY_Arabic_keheh: number
const KEY_Arabic_khah: number
const KEY_Arabic_lam: number
const KEY_Arabic_madda_above: number
const KEY_Arabic_maddaonalef: number
const KEY_Arabic_meem: number
const KEY_Arabic_noon: number
const KEY_Arabic_noon_ghunna: number
const KEY_Arabic_peh: number
const KEY_Arabic_percent: number
const KEY_Arabic_qaf: number
const KEY_Arabic_question_mark: number
const KEY_Arabic_ra: number
const KEY_Arabic_rreh: number
const KEY_Arabic_sad: number
const KEY_Arabic_seen: number
const KEY_Arabic_semicolon: number
const KEY_Arabic_shadda: number
const KEY_Arabic_sheen: number
const KEY_Arabic_sukun: number
const KEY_Arabic_superscript_alef: number
const KEY_Arabic_switch: number
const KEY_Arabic_tah: number
const KEY_Arabic_tatweel: number
const KEY_Arabic_tcheh: number
const KEY_Arabic_teh: number
const KEY_Arabic_tehmarbuta: number
const KEY_Arabic_thal: number
const KEY_Arabic_theh: number
const KEY_Arabic_tteh: number
const KEY_Arabic_veh: number
const KEY_Arabic_waw: number
const KEY_Arabic_yeh: number
const KEY_Arabic_yeh_baree: number
const KEY_Arabic_zah: number
const KEY_Arabic_zain: number
const KEY_Aring: number
const KEY_Armenian_AT: number
const KEY_Armenian_AYB: number
const KEY_Armenian_BEN: number
const KEY_Armenian_CHA: number
const KEY_Armenian_DA: number
const KEY_Armenian_DZA: number
const KEY_Armenian_E: number
const KEY_Armenian_FE: number
const KEY_Armenian_GHAT: number
const KEY_Armenian_GIM: number
const KEY_Armenian_HI: number
const KEY_Armenian_HO: number
const KEY_Armenian_INI: number
const KEY_Armenian_JE: number
const KEY_Armenian_KE: number
const KEY_Armenian_KEN: number
const KEY_Armenian_KHE: number
const KEY_Armenian_LYUN: number
const KEY_Armenian_MEN: number
const KEY_Armenian_NU: number
const KEY_Armenian_O: number
const KEY_Armenian_PE: number
const KEY_Armenian_PYUR: number
const KEY_Armenian_RA: number
const KEY_Armenian_RE: number
const KEY_Armenian_SE: number
const KEY_Armenian_SHA: number
const KEY_Armenian_TCHE: number
const KEY_Armenian_TO: number
const KEY_Armenian_TSA: number
const KEY_Armenian_TSO: number
const KEY_Armenian_TYUN: number
const KEY_Armenian_VEV: number
const KEY_Armenian_VO: number
const KEY_Armenian_VYUN: number
const KEY_Armenian_YECH: number
const KEY_Armenian_ZA: number
const KEY_Armenian_ZHE: number
const KEY_Armenian_accent: number
const KEY_Armenian_amanak: number
const KEY_Armenian_apostrophe: number
const KEY_Armenian_at: number
const KEY_Armenian_ayb: number
const KEY_Armenian_ben: number
const KEY_Armenian_but: number
const KEY_Armenian_cha: number
const KEY_Armenian_da: number
const KEY_Armenian_dza: number
const KEY_Armenian_e: number
const KEY_Armenian_exclam: number
const KEY_Armenian_fe: number
const KEY_Armenian_full_stop: number
const KEY_Armenian_ghat: number
const KEY_Armenian_gim: number
const KEY_Armenian_hi: number
const KEY_Armenian_ho: number
const KEY_Armenian_hyphen: number
const KEY_Armenian_ini: number
const KEY_Armenian_je: number
const KEY_Armenian_ke: number
const KEY_Armenian_ken: number
const KEY_Armenian_khe: number
const KEY_Armenian_ligature_ew: number
const KEY_Armenian_lyun: number
const KEY_Armenian_men: number
const KEY_Armenian_nu: number
const KEY_Armenian_o: number
const KEY_Armenian_paruyk: number
const KEY_Armenian_pe: number
const KEY_Armenian_pyur: number
const KEY_Armenian_question: number
const KEY_Armenian_ra: number
const KEY_Armenian_re: number
const KEY_Armenian_se: number
const KEY_Armenian_separation_mark: number
const KEY_Armenian_sha: number
const KEY_Armenian_shesht: number
const KEY_Armenian_tche: number
const KEY_Armenian_to: number
const KEY_Armenian_tsa: number
const KEY_Armenian_tso: number
const KEY_Armenian_tyun: number
const KEY_Armenian_verjaket: number
const KEY_Armenian_vev: number
const KEY_Armenian_vo: number
const KEY_Armenian_vyun: number
const KEY_Armenian_yech: number
const KEY_Armenian_yentamna: number
const KEY_Armenian_za: number
const KEY_Armenian_zhe: number
const KEY_Atilde: number
const KEY_AudibleBell_Enable: number
const KEY_B: number
const KEY_Babovedot: number
const KEY_BackSpace: number
const KEY_Begin: number
const KEY_BounceKeys_Enable: number
const KEY_Break: number
const KEY_Byelorussian_SHORTU: number
const KEY_Byelorussian_shortu: number
const KEY_C: number
const KEY_CH: number
const KEY_C_H: number
const KEY_C_h: number
const KEY_Cabovedot: number
const KEY_Cacute: number
const KEY_Cancel: number
const KEY_Caps_Lock: number
const KEY_Ccaron: number
const KEY_Ccedilla: number
const KEY_Ccircumflex: number
const KEY_Ch: number
const KEY_Clear: number
const KEY_Codeinput: number
const KEY_ColonSign: number
const KEY_Control_L: number
const KEY_Control_R: number
const KEY_CruzeiroSign: number
const KEY_Cyrillic_A: number
const KEY_Cyrillic_BE: number
const KEY_Cyrillic_CHE: number
const KEY_Cyrillic_CHE_descender: number
const KEY_Cyrillic_CHE_vertstroke: number
const KEY_Cyrillic_DE: number
const KEY_Cyrillic_DZHE: number
const KEY_Cyrillic_E: number
const KEY_Cyrillic_EF: number
const KEY_Cyrillic_EL: number
const KEY_Cyrillic_EM: number
const KEY_Cyrillic_EN: number
const KEY_Cyrillic_EN_descender: number
const KEY_Cyrillic_ER: number
const KEY_Cyrillic_ES: number
const KEY_Cyrillic_GHE: number
const KEY_Cyrillic_GHE_bar: number
const KEY_Cyrillic_HA: number
const KEY_Cyrillic_HARDSIGN: number
const KEY_Cyrillic_HA_descender: number
const KEY_Cyrillic_I: number
const KEY_Cyrillic_IE: number
const KEY_Cyrillic_IO: number
const KEY_Cyrillic_I_macron: number
const KEY_Cyrillic_JE: number
const KEY_Cyrillic_KA: number
const KEY_Cyrillic_KA_descender: number
const KEY_Cyrillic_KA_vertstroke: number
const KEY_Cyrillic_LJE: number
const KEY_Cyrillic_NJE: number
const KEY_Cyrillic_O: number
const KEY_Cyrillic_O_bar: number
const KEY_Cyrillic_PE: number
const KEY_Cyrillic_SCHWA: number
const KEY_Cyrillic_SHA: number
const KEY_Cyrillic_SHCHA: number
const KEY_Cyrillic_SHHA: number
const KEY_Cyrillic_SHORTI: number
const KEY_Cyrillic_SOFTSIGN: number
const KEY_Cyrillic_TE: number
const KEY_Cyrillic_TSE: number
const KEY_Cyrillic_U: number
const KEY_Cyrillic_U_macron: number
const KEY_Cyrillic_U_straight: number
const KEY_Cyrillic_U_straight_bar: number
const KEY_Cyrillic_VE: number
const KEY_Cyrillic_YA: number
const KEY_Cyrillic_YERU: number
const KEY_Cyrillic_YU: number
const KEY_Cyrillic_ZE: number
const KEY_Cyrillic_ZHE: number
const KEY_Cyrillic_ZHE_descender: number
const KEY_Cyrillic_a: number
const KEY_Cyrillic_be: number
const KEY_Cyrillic_che: number
const KEY_Cyrillic_che_descender: number
const KEY_Cyrillic_che_vertstroke: number
const KEY_Cyrillic_de: number
const KEY_Cyrillic_dzhe: number
const KEY_Cyrillic_e: number
const KEY_Cyrillic_ef: number
const KEY_Cyrillic_el: number
const KEY_Cyrillic_em: number
const KEY_Cyrillic_en: number
const KEY_Cyrillic_en_descender: number
const KEY_Cyrillic_er: number
const KEY_Cyrillic_es: number
const KEY_Cyrillic_ghe: number
const KEY_Cyrillic_ghe_bar: number
const KEY_Cyrillic_ha: number
const KEY_Cyrillic_ha_descender: number
const KEY_Cyrillic_hardsign: number
const KEY_Cyrillic_i: number
const KEY_Cyrillic_i_macron: number
const KEY_Cyrillic_ie: number
const KEY_Cyrillic_io: number
const KEY_Cyrillic_je: number
const KEY_Cyrillic_ka: number
const KEY_Cyrillic_ka_descender: number
const KEY_Cyrillic_ka_vertstroke: number
const KEY_Cyrillic_lje: number
const KEY_Cyrillic_nje: number
const KEY_Cyrillic_o: number
const KEY_Cyrillic_o_bar: number
const KEY_Cyrillic_pe: number
const KEY_Cyrillic_schwa: number
const KEY_Cyrillic_sha: number
const KEY_Cyrillic_shcha: number
const KEY_Cyrillic_shha: number
const KEY_Cyrillic_shorti: number
const KEY_Cyrillic_softsign: number
const KEY_Cyrillic_te: number
const KEY_Cyrillic_tse: number
const KEY_Cyrillic_u: number
const KEY_Cyrillic_u_macron: number
const KEY_Cyrillic_u_straight: number
const KEY_Cyrillic_u_straight_bar: number
const KEY_Cyrillic_ve: number
const KEY_Cyrillic_ya: number
const KEY_Cyrillic_yeru: number
const KEY_Cyrillic_yu: number
const KEY_Cyrillic_ze: number
const KEY_Cyrillic_zhe: number
const KEY_Cyrillic_zhe_descender: number
const KEY_D: number
const KEY_Dabovedot: number
const KEY_Dcaron: number
const KEY_Delete: number
const KEY_DongSign: number
const KEY_Down: number
const KEY_Dstroke: number
const KEY_E: number
const KEY_ENG: number
const KEY_ETH: number
const KEY_EZH: number
const KEY_Eabovedot: number
const KEY_Eacute: number
const KEY_Ebelowdot: number
const KEY_Ecaron: number
const KEY_Ecircumflex: number
const KEY_Ecircumflexacute: number
const KEY_Ecircumflexbelowdot: number
const KEY_Ecircumflexgrave: number
const KEY_Ecircumflexhook: number
const KEY_Ecircumflextilde: number
const KEY_EcuSign: number
const KEY_Ediaeresis: number
const KEY_Egrave: number
const KEY_Ehook: number
const KEY_Eisu_Shift: number
const KEY_Eisu_toggle: number
const KEY_Emacron: number
const KEY_End: number
const KEY_Eogonek: number
const KEY_Escape: number
const KEY_Eth: number
const KEY_Etilde: number
const KEY_EuroSign: number
const KEY_Execute: number
const KEY_F: number
const KEY_F1: number
const KEY_F10: number
const KEY_F11: number
const KEY_F12: number
const KEY_F13: number
const KEY_F14: number
const KEY_F15: number
const KEY_F16: number
const KEY_F17: number
const KEY_F18: number
const KEY_F19: number
const KEY_F2: number
const KEY_F20: number
const KEY_F21: number
const KEY_F22: number
const KEY_F23: number
const KEY_F24: number
const KEY_F25: number
const KEY_F26: number
const KEY_F27: number
const KEY_F28: number
const KEY_F29: number
const KEY_F3: number
const KEY_F30: number
const KEY_F31: number
const KEY_F32: number
const KEY_F33: number
const KEY_F34: number
const KEY_F35: number
const KEY_F4: number
const KEY_F5: number
const KEY_F6: number
const KEY_F7: number
const KEY_F8: number
const KEY_F9: number
const KEY_FFrancSign: number
const KEY_Fabovedot: number
const KEY_Farsi_0: number
const KEY_Farsi_1: number
const KEY_Farsi_2: number
const KEY_Farsi_3: number
const KEY_Farsi_4: number
const KEY_Farsi_5: number
const KEY_Farsi_6: number
const KEY_Farsi_7: number
const KEY_Farsi_8: number
const KEY_Farsi_9: number
const KEY_Farsi_yeh: number
const KEY_Find: number
const KEY_First_Virtual_Screen: number
const KEY_G: number
const KEY_Gabovedot: number
const KEY_Gbreve: number
const KEY_Gcaron: number
const KEY_Gcedilla: number
const KEY_Gcircumflex: number
const KEY_Georgian_an: number
const KEY_Georgian_ban: number
const KEY_Georgian_can: number
const KEY_Georgian_char: number
const KEY_Georgian_chin: number
const KEY_Georgian_cil: number
const KEY_Georgian_don: number
const KEY_Georgian_en: number
const KEY_Georgian_fi: number
const KEY_Georgian_gan: number
const KEY_Georgian_ghan: number
const KEY_Georgian_hae: number
const KEY_Georgian_har: number
const KEY_Georgian_he: number
const KEY_Georgian_hie: number
const KEY_Georgian_hoe: number
const KEY_Georgian_in: number
const KEY_Georgian_jhan: number
const KEY_Georgian_jil: number
const KEY_Georgian_kan: number
const KEY_Georgian_khar: number
const KEY_Georgian_las: number
const KEY_Georgian_man: number
const KEY_Georgian_nar: number
const KEY_Georgian_on: number
const KEY_Georgian_par: number
const KEY_Georgian_phar: number
const KEY_Georgian_qar: number
const KEY_Georgian_rae: number
const KEY_Georgian_san: number
const KEY_Georgian_shin: number
const KEY_Georgian_tan: number
const KEY_Georgian_tar: number
const KEY_Georgian_un: number
const KEY_Georgian_vin: number
const KEY_Georgian_we: number
const KEY_Georgian_xan: number
const KEY_Georgian_zen: number
const KEY_Georgian_zhar: number
const KEY_Greek_ALPHA: number
const KEY_Greek_ALPHAaccent: number
const KEY_Greek_BETA: number
const KEY_Greek_CHI: number
const KEY_Greek_DELTA: number
const KEY_Greek_EPSILON: number
const KEY_Greek_EPSILONaccent: number
const KEY_Greek_ETA: number
const KEY_Greek_ETAaccent: number
const KEY_Greek_GAMMA: number
const KEY_Greek_IOTA: number
const KEY_Greek_IOTAaccent: number
const KEY_Greek_IOTAdiaeresis: number
const KEY_Greek_IOTAdieresis: number
const KEY_Greek_KAPPA: number
const KEY_Greek_LAMBDA: number
const KEY_Greek_LAMDA: number
const KEY_Greek_MU: number
const KEY_Greek_NU: number
const KEY_Greek_OMEGA: number
const KEY_Greek_OMEGAaccent: number
const KEY_Greek_OMICRON: number
const KEY_Greek_OMICRONaccent: number
const KEY_Greek_PHI: number
const KEY_Greek_PI: number
const KEY_Greek_PSI: number
const KEY_Greek_RHO: number
const KEY_Greek_SIGMA: number
const KEY_Greek_TAU: number
const KEY_Greek_THETA: number
const KEY_Greek_UPSILON: number
const KEY_Greek_UPSILONaccent: number
const KEY_Greek_UPSILONdieresis: number
const KEY_Greek_XI: number
const KEY_Greek_ZETA: number
const KEY_Greek_accentdieresis: number
const KEY_Greek_alpha: number
const KEY_Greek_alphaaccent: number
const KEY_Greek_beta: number
const KEY_Greek_chi: number
const KEY_Greek_delta: number
const KEY_Greek_epsilon: number
const KEY_Greek_epsilonaccent: number
const KEY_Greek_eta: number
const KEY_Greek_etaaccent: number
const KEY_Greek_finalsmallsigma: number
const KEY_Greek_gamma: number
const KEY_Greek_horizbar: number
const KEY_Greek_iota: number
const KEY_Greek_iotaaccent: number
const KEY_Greek_iotaaccentdieresis: number
const KEY_Greek_iotadieresis: number
const KEY_Greek_kappa: number
const KEY_Greek_lambda: number
const KEY_Greek_lamda: number
const KEY_Greek_mu: number
const KEY_Greek_nu: number
const KEY_Greek_omega: number
const KEY_Greek_omegaaccent: number
const KEY_Greek_omicron: number
const KEY_Greek_omicronaccent: number
const KEY_Greek_phi: number
const KEY_Greek_pi: number
const KEY_Greek_psi: number
const KEY_Greek_rho: number
const KEY_Greek_sigma: number
const KEY_Greek_switch: number
const KEY_Greek_tau: number
const KEY_Greek_theta: number
const KEY_Greek_upsilon: number
const KEY_Greek_upsilonaccent: number
const KEY_Greek_upsilonaccentdieresis: number
const KEY_Greek_upsilondieresis: number
const KEY_Greek_xi: number
const KEY_Greek_zeta: number
const KEY_H: number
const KEY_Hangul: number
const KEY_Hangul_A: number
const KEY_Hangul_AE: number
const KEY_Hangul_AraeA: number
const KEY_Hangul_AraeAE: number
const KEY_Hangul_Banja: number
const KEY_Hangul_Cieuc: number
const KEY_Hangul_Codeinput: number
const KEY_Hangul_Dikeud: number
const KEY_Hangul_E: number
const KEY_Hangul_EO: number
const KEY_Hangul_EU: number
const KEY_Hangul_End: number
const KEY_Hangul_Hanja: number
const KEY_Hangul_Hieuh: number
const KEY_Hangul_I: number
const KEY_Hangul_Ieung: number
const KEY_Hangul_J_Cieuc: number
const KEY_Hangul_J_Dikeud: number
const KEY_Hangul_J_Hieuh: number
const KEY_Hangul_J_Ieung: number
const KEY_Hangul_J_Jieuj: number
const KEY_Hangul_J_Khieuq: number
const KEY_Hangul_J_Kiyeog: number
const KEY_Hangul_J_KiyeogSios: number
const KEY_Hangul_J_KkogjiDalrinIeung: number
const KEY_Hangul_J_Mieum: number
const KEY_Hangul_J_Nieun: number
const KEY_Hangul_J_NieunHieuh: number
const KEY_Hangul_J_NieunJieuj: number
const KEY_Hangul_J_PanSios: number
const KEY_Hangul_J_Phieuf: number
const KEY_Hangul_J_Pieub: number
const KEY_Hangul_J_PieubSios: number
const KEY_Hangul_J_Rieul: number
const KEY_Hangul_J_RieulHieuh: number
const KEY_Hangul_J_RieulKiyeog: number
const KEY_Hangul_J_RieulMieum: number
const KEY_Hangul_J_RieulPhieuf: number
const KEY_Hangul_J_RieulPieub: number
const KEY_Hangul_J_RieulSios: number
const KEY_Hangul_J_RieulTieut: number
const KEY_Hangul_J_Sios: number
const KEY_Hangul_J_SsangKiyeog: number
const KEY_Hangul_J_SsangSios: number
const KEY_Hangul_J_Tieut: number
const KEY_Hangul_J_YeorinHieuh: number
const KEY_Hangul_Jamo: number
const KEY_Hangul_Jeonja: number
const KEY_Hangul_Jieuj: number
const KEY_Hangul_Khieuq: number
const KEY_Hangul_Kiyeog: number
const KEY_Hangul_KiyeogSios: number
const KEY_Hangul_KkogjiDalrinIeung: number
const KEY_Hangul_Mieum: number
const KEY_Hangul_MultipleCandidate: number
const KEY_Hangul_Nieun: number
const KEY_Hangul_NieunHieuh: number
const KEY_Hangul_NieunJieuj: number
const KEY_Hangul_O: number
const KEY_Hangul_OE: number
const KEY_Hangul_PanSios: number
const KEY_Hangul_Phieuf: number
const KEY_Hangul_Pieub: number
const KEY_Hangul_PieubSios: number
const KEY_Hangul_PostHanja: number
const KEY_Hangul_PreHanja: number
const KEY_Hangul_PreviousCandidate: number
const KEY_Hangul_Rieul: number
const KEY_Hangul_RieulHieuh: number
const KEY_Hangul_RieulKiyeog: number
const KEY_Hangul_RieulMieum: number
const KEY_Hangul_RieulPhieuf: number
const KEY_Hangul_RieulPieub: number
const KEY_Hangul_RieulSios: number
const KEY_Hangul_RieulTieut: number
const KEY_Hangul_RieulYeorinHieuh: number
const KEY_Hangul_Romaja: number
const KEY_Hangul_SingleCandidate: number
const KEY_Hangul_Sios: number
const KEY_Hangul_Special: number
const KEY_Hangul_SsangDikeud: number
const KEY_Hangul_SsangJieuj: number
const KEY_Hangul_SsangKiyeog: number
const KEY_Hangul_SsangPieub: number
const KEY_Hangul_SsangSios: number
const KEY_Hangul_Start: number
const KEY_Hangul_SunkyeongeumMieum: number
const KEY_Hangul_SunkyeongeumPhieuf: number
const KEY_Hangul_SunkyeongeumPieub: number
const KEY_Hangul_Tieut: number
const KEY_Hangul_U: number
const KEY_Hangul_WA: number
const KEY_Hangul_WAE: number
const KEY_Hangul_WE: number
const KEY_Hangul_WEO: number
const KEY_Hangul_WI: number
const KEY_Hangul_YA: number
const KEY_Hangul_YAE: number
const KEY_Hangul_YE: number
const KEY_Hangul_YEO: number
const KEY_Hangul_YI: number
const KEY_Hangul_YO: number
const KEY_Hangul_YU: number
const KEY_Hangul_YeorinHieuh: number
const KEY_Hangul_switch: number
const KEY_Hankaku: number
const KEY_Hcircumflex: number
const KEY_Hebrew_switch: number
const KEY_Help: number
const KEY_Henkan: number
const KEY_Henkan_Mode: number
const KEY_Hiragana: number
const KEY_Hiragana_Katakana: number
const KEY_Home: number
const KEY_Hstroke: number
const KEY_Hyper_L: number
const KEY_Hyper_R: number
const KEY_I: number
const KEY_ISO_Center_Object: number
const KEY_ISO_Continuous_Underline: number
const KEY_ISO_Discontinuous_Underline: number
const KEY_ISO_Emphasize: number
const KEY_ISO_Enter: number
const KEY_ISO_Fast_Cursor_Down: number
const KEY_ISO_Fast_Cursor_Left: number
const KEY_ISO_Fast_Cursor_Right: number
const KEY_ISO_Fast_Cursor_Up: number
const KEY_ISO_First_Group: number
const KEY_ISO_First_Group_Lock: number
const KEY_ISO_Group_Latch: number
const KEY_ISO_Group_Lock: number
const KEY_ISO_Group_Shift: number
const KEY_ISO_Last_Group: number
const KEY_ISO_Last_Group_Lock: number
const KEY_ISO_Left_Tab: number
const KEY_ISO_Level2_Latch: number
const KEY_ISO_Level3_Latch: number
const KEY_ISO_Level3_Lock: number
const KEY_ISO_Level3_Shift: number
const KEY_ISO_Level5_Latch: number
const KEY_ISO_Level5_Lock: number
const KEY_ISO_Level5_Shift: number
const KEY_ISO_Lock: number
const KEY_ISO_Move_Line_Down: number
const KEY_ISO_Move_Line_Up: number
const KEY_ISO_Next_Group: number
const KEY_ISO_Next_Group_Lock: number
const KEY_ISO_Partial_Line_Down: number
const KEY_ISO_Partial_Line_Up: number
const KEY_ISO_Partial_Space_Left: number
const KEY_ISO_Partial_Space_Right: number
const KEY_ISO_Prev_Group: number
const KEY_ISO_Prev_Group_Lock: number
const KEY_ISO_Release_Both_Margins: number
const KEY_ISO_Release_Margin_Left: number
const KEY_ISO_Release_Margin_Right: number
const KEY_ISO_Set_Margin_Left: number
const KEY_ISO_Set_Margin_Right: number
const KEY_Iabovedot: number
const KEY_Iacute: number
const KEY_Ibelowdot: number
const KEY_Ibreve: number
const KEY_Icircumflex: number
const KEY_Idiaeresis: number
const KEY_Igrave: number
const KEY_Ihook: number
const KEY_Imacron: number
const KEY_Insert: number
const KEY_Iogonek: number
const KEY_Itilde: number
const KEY_J: number
const KEY_Jcircumflex: number
const KEY_K: number
const KEY_KP_0: number
const KEY_KP_1: number
const KEY_KP_2: number
const KEY_KP_3: number
const KEY_KP_4: number
const KEY_KP_5: number
const KEY_KP_6: number
const KEY_KP_7: number
const KEY_KP_8: number
const KEY_KP_9: number
const KEY_KP_Add: number
const KEY_KP_Begin: number
const KEY_KP_Decimal: number
const KEY_KP_Delete: number
const KEY_KP_Divide: number
const KEY_KP_Down: number
const KEY_KP_End: number
const KEY_KP_Enter: number
const KEY_KP_Equal: number
const KEY_KP_F1: number
const KEY_KP_F2: number
const KEY_KP_F3: number
const KEY_KP_F4: number
const KEY_KP_Home: number
const KEY_KP_Insert: number
const KEY_KP_Left: number
const KEY_KP_Multiply: number
const KEY_KP_Next: number
const KEY_KP_Page_Down: number
const KEY_KP_Page_Up: number
const KEY_KP_Prior: number
const KEY_KP_Right: number
const KEY_KP_Separator: number
const KEY_KP_Space: number
const KEY_KP_Subtract: number
const KEY_KP_Tab: number
const KEY_KP_Up: number
const KEY_Kana_Lock: number
const KEY_Kana_Shift: number
const KEY_Kanji: number
const KEY_Kanji_Bangou: number
const KEY_Katakana: number
const KEY_Kcedilla: number
const KEY_Korean_Won: number
const KEY_L: number
const KEY_L1: number
const KEY_L10: number
const KEY_L2: number
const KEY_L3: number
const KEY_L4: number
const KEY_L5: number
const KEY_L6: number
const KEY_L7: number
const KEY_L8: number
const KEY_L9: number
const KEY_Lacute: number
const KEY_Last_Virtual_Screen: number
const KEY_Lbelowdot: number
const KEY_Lcaron: number
const KEY_Lcedilla: number
const KEY_Left: number
const KEY_Linefeed: number
const KEY_LiraSign: number
const KEY_Lstroke: number
const KEY_M: number
const KEY_Mabovedot: number
const KEY_Macedonia_DSE: number
const KEY_Macedonia_GJE: number
const KEY_Macedonia_KJE: number
const KEY_Macedonia_dse: number
const KEY_Macedonia_gje: number
const KEY_Macedonia_kje: number
const KEY_Mae_Koho: number
const KEY_Massyo: number
const KEY_Menu: number
const KEY_Meta_L: number
const KEY_Meta_R: number
const KEY_MillSign: number
const KEY_Mode_switch: number
const KEY_MouseKeys_Accel_Enable: number
const KEY_MouseKeys_Enable: number
const KEY_Muhenkan: number
const KEY_Multi_key: number
const KEY_MultipleCandidate: number
const KEY_N: number
const KEY_Nacute: number
const KEY_NairaSign: number
const KEY_Ncaron: number
const KEY_Ncedilla: number
const KEY_NewSheqelSign: number
const KEY_Next: number
const KEY_Next_Virtual_Screen: number
const KEY_Ntilde: number
const KEY_Num_Lock: number
const KEY_O: number
const KEY_OE: number
const KEY_Oacute: number
const KEY_Obarred: number
const KEY_Obelowdot: number
const KEY_Ocaron: number
const KEY_Ocircumflex: number
const KEY_Ocircumflexacute: number
const KEY_Ocircumflexbelowdot: number
const KEY_Ocircumflexgrave: number
const KEY_Ocircumflexhook: number
const KEY_Ocircumflextilde: number
const KEY_Odiaeresis: number
const KEY_Odoubleacute: number
const KEY_Ograve: number
const KEY_Ohook: number
const KEY_Ohorn: number
const KEY_Ohornacute: number
const KEY_Ohornbelowdot: number
const KEY_Ohorngrave: number
const KEY_Ohornhook: number
const KEY_Ohorntilde: number
const KEY_Omacron: number
const KEY_Ooblique: number
const KEY_Oslash: number
const KEY_Otilde: number
const KEY_Overlay1_Enable: number
const KEY_Overlay2_Enable: number
const KEY_P: number
const KEY_Pabovedot: number
const KEY_Page_Down: number
const KEY_Page_Up: number
const KEY_Pause: number
const KEY_PesetaSign: number
const KEY_Pointer_Accelerate: number
const KEY_Pointer_Button1: number
const KEY_Pointer_Button2: number
const KEY_Pointer_Button3: number
const KEY_Pointer_Button4: number
const KEY_Pointer_Button5: number
const KEY_Pointer_Button_Dflt: number
const KEY_Pointer_DblClick1: number
const KEY_Pointer_DblClick2: number
const KEY_Pointer_DblClick3: number
const KEY_Pointer_DblClick4: number
const KEY_Pointer_DblClick5: number
const KEY_Pointer_DblClick_Dflt: number
const KEY_Pointer_DfltBtnNext: number
const KEY_Pointer_DfltBtnPrev: number
const KEY_Pointer_Down: number
const KEY_Pointer_DownLeft: number
const KEY_Pointer_DownRight: number
const KEY_Pointer_Drag1: number
const KEY_Pointer_Drag2: number
const KEY_Pointer_Drag3: number
const KEY_Pointer_Drag4: number
const KEY_Pointer_Drag5: number
const KEY_Pointer_Drag_Dflt: number
const KEY_Pointer_EnableKeys: number
const KEY_Pointer_Left: number
const KEY_Pointer_Right: number
const KEY_Pointer_Up: number
const KEY_Pointer_UpLeft: number
const KEY_Pointer_UpRight: number
const KEY_Prev_Virtual_Screen: number
const KEY_PreviousCandidate: number
const KEY_Print: number
const KEY_Prior: number
const KEY_Q: number
const KEY_R: number
const KEY_R1: number
const KEY_R10: number
const KEY_R11: number
const KEY_R12: number
const KEY_R13: number
const KEY_R14: number
const KEY_R15: number
const KEY_R2: number
const KEY_R3: number
const KEY_R4: number
const KEY_R5: number
const KEY_R6: number
const KEY_R7: number
const KEY_R8: number
const KEY_R9: number
const KEY_Racute: number
const KEY_Rcaron: number
const KEY_Rcedilla: number
const KEY_Redo: number
const KEY_RepeatKeys_Enable: number
const KEY_Return: number
const KEY_Right: number
const KEY_Romaji: number
const KEY_RupeeSign: number
const KEY_S: number
const KEY_SCHWA: number
const KEY_Sabovedot: number
const KEY_Sacute: number
const KEY_Scaron: number
const KEY_Scedilla: number
const KEY_Scircumflex: number
const KEY_Scroll_Lock: number
const KEY_Select: number
const KEY_Serbian_DJE: number
const KEY_Serbian_DZE: number
const KEY_Serbian_JE: number
const KEY_Serbian_LJE: number
const KEY_Serbian_NJE: number
const KEY_Serbian_TSHE: number
const KEY_Serbian_dje: number
const KEY_Serbian_dze: number
const KEY_Serbian_je: number
const KEY_Serbian_lje: number
const KEY_Serbian_nje: number
const KEY_Serbian_tshe: number
const KEY_Shift_L: number
const KEY_Shift_Lock: number
const KEY_Shift_R: number
const KEY_SingleCandidate: number
const KEY_Sinh_a: number
const KEY_Sinh_aa: number
const KEY_Sinh_aa2: number
const KEY_Sinh_ae: number
const KEY_Sinh_ae2: number
const KEY_Sinh_aee: number
const KEY_Sinh_aee2: number
const KEY_Sinh_ai: number
const KEY_Sinh_ai2: number
const KEY_Sinh_al: number
const KEY_Sinh_au: number
const KEY_Sinh_au2: number
const KEY_Sinh_ba: number
const KEY_Sinh_bha: number
const KEY_Sinh_ca: number
const KEY_Sinh_cha: number
const KEY_Sinh_dda: number
const KEY_Sinh_ddha: number
const KEY_Sinh_dha: number
const KEY_Sinh_dhha: number
const KEY_Sinh_e: number
const KEY_Sinh_e2: number
const KEY_Sinh_ee: number
const KEY_Sinh_ee2: number
const KEY_Sinh_fa: number
const KEY_Sinh_ga: number
const KEY_Sinh_gha: number
const KEY_Sinh_h2: number
const KEY_Sinh_ha: number
const KEY_Sinh_i: number
const KEY_Sinh_i2: number
const KEY_Sinh_ii: number
const KEY_Sinh_ii2: number
const KEY_Sinh_ja: number
const KEY_Sinh_jha: number
const KEY_Sinh_jnya: number
const KEY_Sinh_ka: number
const KEY_Sinh_kha: number
const KEY_Sinh_kunddaliya: number
const KEY_Sinh_la: number
const KEY_Sinh_lla: number
const KEY_Sinh_lu: number
const KEY_Sinh_lu2: number
const KEY_Sinh_luu: number
const KEY_Sinh_luu2: number
const KEY_Sinh_ma: number
const KEY_Sinh_mba: number
const KEY_Sinh_na: number
const KEY_Sinh_ndda: number
const KEY_Sinh_ndha: number
const KEY_Sinh_ng: number
const KEY_Sinh_ng2: number
const KEY_Sinh_nga: number
const KEY_Sinh_nja: number
const KEY_Sinh_nna: number
const KEY_Sinh_nya: number
const KEY_Sinh_o: number
const KEY_Sinh_o2: number
const KEY_Sinh_oo: number
const KEY_Sinh_oo2: number
const KEY_Sinh_pa: number
const KEY_Sinh_pha: number
const KEY_Sinh_ra: number
const KEY_Sinh_ri: number
const KEY_Sinh_rii: number
const KEY_Sinh_ru2: number
const KEY_Sinh_ruu2: number
const KEY_Sinh_sa: number
const KEY_Sinh_sha: number
const KEY_Sinh_ssha: number
const KEY_Sinh_tha: number
const KEY_Sinh_thha: number
const KEY_Sinh_tta: number
const KEY_Sinh_ttha: number
const KEY_Sinh_u: number
const KEY_Sinh_u2: number
const KEY_Sinh_uu: number
const KEY_Sinh_uu2: number
const KEY_Sinh_va: number
const KEY_Sinh_ya: number
const KEY_SlowKeys_Enable: number
const KEY_StickyKeys_Enable: number
const KEY_Super_L: number
const KEY_Super_R: number
const KEY_Sys_Req: number
const KEY_T: number
const KEY_THORN: number
const KEY_Tab: number
const KEY_Tabovedot: number
const KEY_Tcaron: number
const KEY_Tcedilla: number
const KEY_Terminate_Server: number
const KEY_Thai_baht: number
const KEY_Thai_bobaimai: number
const KEY_Thai_chochan: number
const KEY_Thai_chochang: number
const KEY_Thai_choching: number
const KEY_Thai_chochoe: number
const KEY_Thai_dochada: number
const KEY_Thai_dodek: number
const KEY_Thai_fofa: number
const KEY_Thai_fofan: number
const KEY_Thai_hohip: number
const KEY_Thai_honokhuk: number
const KEY_Thai_khokhai: number
const KEY_Thai_khokhon: number
const KEY_Thai_khokhuat: number
const KEY_Thai_khokhwai: number
const KEY_Thai_khorakhang: number
const KEY_Thai_kokai: number
const KEY_Thai_lakkhangyao: number
const KEY_Thai_lekchet: number
const KEY_Thai_lekha: number
const KEY_Thai_lekhok: number
const KEY_Thai_lekkao: number
const KEY_Thai_leknung: number
const KEY_Thai_lekpaet: number
const KEY_Thai_leksam: number
const KEY_Thai_leksi: number
const KEY_Thai_leksong: number
const KEY_Thai_leksun: number
const KEY_Thai_lochula: number
const KEY_Thai_loling: number
const KEY_Thai_lu: number
const KEY_Thai_maichattawa: number
const KEY_Thai_maiek: number
const KEY_Thai_maihanakat: number
const KEY_Thai_maihanakat_maitho: number
const KEY_Thai_maitaikhu: number
const KEY_Thai_maitho: number
const KEY_Thai_maitri: number
const KEY_Thai_maiyamok: number
const KEY_Thai_moma: number
const KEY_Thai_ngongu: number
const KEY_Thai_nikhahit: number
const KEY_Thai_nonen: number
const KEY_Thai_nonu: number
const KEY_Thai_oang: number
const KEY_Thai_paiyannoi: number
const KEY_Thai_phinthu: number
const KEY_Thai_phophan: number
const KEY_Thai_phophung: number
const KEY_Thai_phosamphao: number
const KEY_Thai_popla: number
const KEY_Thai_rorua: number
const KEY_Thai_ru: number
const KEY_Thai_saraa: number
const KEY_Thai_saraaa: number
const KEY_Thai_saraae: number
const KEY_Thai_saraaimaimalai: number
const KEY_Thai_saraaimaimuan: number
const KEY_Thai_saraam: number
const KEY_Thai_sarae: number
const KEY_Thai_sarai: number
const KEY_Thai_saraii: number
const KEY_Thai_sarao: number
const KEY_Thai_sarau: number
const KEY_Thai_saraue: number
const KEY_Thai_sarauee: number
const KEY_Thai_sarauu: number
const KEY_Thai_sorusi: number
const KEY_Thai_sosala: number
const KEY_Thai_soso: number
const KEY_Thai_sosua: number
const KEY_Thai_thanthakhat: number
const KEY_Thai_thonangmontho: number
const KEY_Thai_thophuthao: number
const KEY_Thai_thothahan: number
const KEY_Thai_thothan: number
const KEY_Thai_thothong: number
const KEY_Thai_thothung: number
const KEY_Thai_topatak: number
const KEY_Thai_totao: number
const KEY_Thai_wowaen: number
const KEY_Thai_yoyak: number
const KEY_Thai_yoying: number
const KEY_Thorn: number
const KEY_Touroku: number
const KEY_Tslash: number
const KEY_U: number
const KEY_Uacute: number
const KEY_Ubelowdot: number
const KEY_Ubreve: number
const KEY_Ucircumflex: number
const KEY_Udiaeresis: number
const KEY_Udoubleacute: number
const KEY_Ugrave: number
const KEY_Uhook: number
const KEY_Uhorn: number
const KEY_Uhornacute: number
const KEY_Uhornbelowdot: number
const KEY_Uhorngrave: number
const KEY_Uhornhook: number
const KEY_Uhorntilde: number
const KEY_Ukrainian_GHE_WITH_UPTURN: number
const KEY_Ukrainian_I: number
const KEY_Ukrainian_IE: number
const KEY_Ukrainian_YI: number
const KEY_Ukrainian_ghe_with_upturn: number
const KEY_Ukrainian_i: number
const KEY_Ukrainian_ie: number
const KEY_Ukrainian_yi: number
const KEY_Ukranian_I: number
const KEY_Ukranian_JE: number
const KEY_Ukranian_YI: number
const KEY_Ukranian_i: number
const KEY_Ukranian_je: number
const KEY_Ukranian_yi: number
const KEY_Umacron: number
const KEY_Undo: number
const KEY_Uogonek: number
const KEY_Up: number
const KEY_Uring: number
const KEY_Utilde: number
const KEY_V: number
const KEY_VoidSymbol: number
const KEY_W: number
const KEY_Wacute: number
const KEY_Wcircumflex: number
const KEY_Wdiaeresis: number
const KEY_Wgrave: number
const KEY_WonSign: number
const KEY_X: number
const KEY_Xabovedot: number
const KEY_Y: number
const KEY_Yacute: number
const KEY_Ybelowdot: number
const KEY_Ycircumflex: number
const KEY_Ydiaeresis: number
const KEY_Ygrave: number
const KEY_Yhook: number
const KEY_Ytilde: number
const KEY_Z: number
const KEY_Zabovedot: number
const KEY_Zacute: number
const KEY_Zcaron: number
const KEY_Zen_Koho: number
const KEY_Zenkaku: number
const KEY_Zenkaku_Hankaku: number
const KEY_Zstroke: number
const KEY_a: number
const KEY_aacute: number
const KEY_abelowdot: number
const KEY_abovedot: number
const KEY_abreve: number
const KEY_abreveacute: number
const KEY_abrevebelowdot: number
const KEY_abrevegrave: number
const KEY_abrevehook: number
const KEY_abrevetilde: number
const KEY_acircumflex: number
const KEY_acircumflexacute: number
const KEY_acircumflexbelowdot: number
const KEY_acircumflexgrave: number
const KEY_acircumflexhook: number
const KEY_acircumflextilde: number
const KEY_acute: number
const KEY_adiaeresis: number
const KEY_ae: number
const KEY_agrave: number
const KEY_ahook: number
const KEY_amacron: number
const KEY_ampersand: number
const KEY_aogonek: number
const KEY_apostrophe: number
const KEY_approxeq: number
const KEY_approximate: number
const KEY_aring: number
const KEY_asciicircum: number
const KEY_asciitilde: number
const KEY_asterisk: number
const KEY_at: number
const KEY_atilde: number
const KEY_b: number
const KEY_babovedot: number
const KEY_backslash: number
const KEY_ballotcross: number
const KEY_bar: number
const KEY_because: number
const KEY_blank: number
const KEY_botintegral: number
const KEY_botleftparens: number
const KEY_botleftsqbracket: number
const KEY_botleftsummation: number
const KEY_botrightparens: number
const KEY_botrightsqbracket: number
const KEY_botrightsummation: number
const KEY_bott: number
const KEY_botvertsummationconnector: number
const KEY_braceleft: number
const KEY_braceright: number
const KEY_bracketleft: number
const KEY_bracketright: number
const KEY_braille_blank: number
const KEY_braille_dot_1: number
const KEY_braille_dot_10: number
const KEY_braille_dot_2: number
const KEY_braille_dot_3: number
const KEY_braille_dot_4: number
const KEY_braille_dot_5: number
const KEY_braille_dot_6: number
const KEY_braille_dot_7: number
const KEY_braille_dot_8: number
const KEY_braille_dot_9: number
const KEY_braille_dots_1: number
const KEY_braille_dots_12: number
const KEY_braille_dots_123: number
const KEY_braille_dots_1234: number
const KEY_braille_dots_12345: number
const KEY_braille_dots_123456: number
const KEY_braille_dots_1234567: number
const KEY_braille_dots_12345678: number
const KEY_braille_dots_1234568: number
const KEY_braille_dots_123457: number
const KEY_braille_dots_1234578: number
const KEY_braille_dots_123458: number
const KEY_braille_dots_12346: number
const KEY_braille_dots_123467: number
const KEY_braille_dots_1234678: number
const KEY_braille_dots_123468: number
const KEY_braille_dots_12347: number
const KEY_braille_dots_123478: number
const KEY_braille_dots_12348: number
const KEY_braille_dots_1235: number
const KEY_braille_dots_12356: number
const KEY_braille_dots_123567: number
const KEY_braille_dots_1235678: number
const KEY_braille_dots_123568: number
const KEY_braille_dots_12357: number
const KEY_braille_dots_123578: number
const KEY_braille_dots_12358: number
const KEY_braille_dots_1236: number
const KEY_braille_dots_12367: number
const KEY_braille_dots_123678: number
const KEY_braille_dots_12368: number
const KEY_braille_dots_1237: number
const KEY_braille_dots_12378: number
const KEY_braille_dots_1238: number
const KEY_braille_dots_124: number
const KEY_braille_dots_1245: number
const KEY_braille_dots_12456: number
const KEY_braille_dots_124567: number
const KEY_braille_dots_1245678: number
const KEY_braille_dots_124568: number
const KEY_braille_dots_12457: number
const KEY_braille_dots_124578: number
const KEY_braille_dots_12458: number
const KEY_braille_dots_1246: number
const KEY_braille_dots_12467: number
const KEY_braille_dots_124678: number
const KEY_braille_dots_12468: number
const KEY_braille_dots_1247: number
const KEY_braille_dots_12478: number
const KEY_braille_dots_1248: number
const KEY_braille_dots_125: number
const KEY_braille_dots_1256: number
const KEY_braille_dots_12567: number
const KEY_braille_dots_125678: number
const KEY_braille_dots_12568: number
const KEY_braille_dots_1257: number
const KEY_braille_dots_12578: number
const KEY_braille_dots_1258: number
const KEY_braille_dots_126: number
const KEY_braille_dots_1267: number
const KEY_braille_dots_12678: number
const KEY_braille_dots_1268: number
const KEY_braille_dots_127: number
const KEY_braille_dots_1278: number
const KEY_braille_dots_128: number
const KEY_braille_dots_13: number
const KEY_braille_dots_134: number
const KEY_braille_dots_1345: number
const KEY_braille_dots_13456: number
const KEY_braille_dots_134567: number
const KEY_braille_dots_1345678: number
const KEY_braille_dots_134568: number
const KEY_braille_dots_13457: number
const KEY_braille_dots_134578: number
const KEY_braille_dots_13458: number
const KEY_braille_dots_1346: number
const KEY_braille_dots_13467: number
const KEY_braille_dots_134678: number
const KEY_braille_dots_13468: number
const KEY_braille_dots_1347: number
const KEY_braille_dots_13478: number
const KEY_braille_dots_1348: number
const KEY_braille_dots_135: number
const KEY_braille_dots_1356: number
const KEY_braille_dots_13567: number
const KEY_braille_dots_135678: number
const KEY_braille_dots_13568: number
const KEY_braille_dots_1357: number
const KEY_braille_dots_13578: number
const KEY_braille_dots_1358: number
const KEY_braille_dots_136: number
const KEY_braille_dots_1367: number
const KEY_braille_dots_13678: number
const KEY_braille_dots_1368: number
const KEY_braille_dots_137: number
const KEY_braille_dots_1378: number
const KEY_braille_dots_138: number
const KEY_braille_dots_14: number
const KEY_braille_dots_145: number
const KEY_braille_dots_1456: number
const KEY_braille_dots_14567: number
const KEY_braille_dots_145678: number
const KEY_braille_dots_14568: number
const KEY_braille_dots_1457: number
const KEY_braille_dots_14578: number
const KEY_braille_dots_1458: number
const KEY_braille_dots_146: number
const KEY_braille_dots_1467: number
const KEY_braille_dots_14678: number
const KEY_braille_dots_1468: number
const KEY_braille_dots_147: number
const KEY_braille_dots_1478: number
const KEY_braille_dots_148: number
const KEY_braille_dots_15: number
const KEY_braille_dots_156: number
const KEY_braille_dots_1567: number
const KEY_braille_dots_15678: number
const KEY_braille_dots_1568: number
const KEY_braille_dots_157: number
const KEY_braille_dots_1578: number
const KEY_braille_dots_158: number
const KEY_braille_dots_16: number
const KEY_braille_dots_167: number
const KEY_braille_dots_1678: number
const KEY_braille_dots_168: number
const KEY_braille_dots_17: number
const KEY_braille_dots_178: number
const KEY_braille_dots_18: number
const KEY_braille_dots_2: number
const KEY_braille_dots_23: number
const KEY_braille_dots_234: number
const KEY_braille_dots_2345: number
const KEY_braille_dots_23456: number
const KEY_braille_dots_234567: number
const KEY_braille_dots_2345678: number
const KEY_braille_dots_234568: number
const KEY_braille_dots_23457: number
const KEY_braille_dots_234578: number
const KEY_braille_dots_23458: number
const KEY_braille_dots_2346: number
const KEY_braille_dots_23467: number
const KEY_braille_dots_234678: number
const KEY_braille_dots_23468: number
const KEY_braille_dots_2347: number
const KEY_braille_dots_23478: number
const KEY_braille_dots_2348: number
const KEY_braille_dots_235: number
const KEY_braille_dots_2356: number
const KEY_braille_dots_23567: number
const KEY_braille_dots_235678: number
const KEY_braille_dots_23568: number
const KEY_braille_dots_2357: number
const KEY_braille_dots_23578: number
const KEY_braille_dots_2358: number
const KEY_braille_dots_236: number
const KEY_braille_dots_2367: number
const KEY_braille_dots_23678: number
const KEY_braille_dots_2368: number
const KEY_braille_dots_237: number
const KEY_braille_dots_2378: number
const KEY_braille_dots_238: number
const KEY_braille_dots_24: number
const KEY_braille_dots_245: number
const KEY_braille_dots_2456: number
const KEY_braille_dots_24567: number
const KEY_braille_dots_245678: number
const KEY_braille_dots_24568: number
const KEY_braille_dots_2457: number
const KEY_braille_dots_24578: number
const KEY_braille_dots_2458: number
const KEY_braille_dots_246: number
const KEY_braille_dots_2467: number
const KEY_braille_dots_24678: number
const KEY_braille_dots_2468: number
const KEY_braille_dots_247: number
const KEY_braille_dots_2478: number
const KEY_braille_dots_248: number
const KEY_braille_dots_25: number
const KEY_braille_dots_256: number
const KEY_braille_dots_2567: number
const KEY_braille_dots_25678: number
const KEY_braille_dots_2568: number
const KEY_braille_dots_257: number
const KEY_braille_dots_2578: number
const KEY_braille_dots_258: number
const KEY_braille_dots_26: number
const KEY_braille_dots_267: number
const KEY_braille_dots_2678: number
const KEY_braille_dots_268: number
const KEY_braille_dots_27: number
const KEY_braille_dots_278: number
const KEY_braille_dots_28: number
const KEY_braille_dots_3: number
const KEY_braille_dots_34: number
const KEY_braille_dots_345: number
const KEY_braille_dots_3456: number
const KEY_braille_dots_34567: number
const KEY_braille_dots_345678: number
const KEY_braille_dots_34568: number
const KEY_braille_dots_3457: number
const KEY_braille_dots_34578: number
const KEY_braille_dots_3458: number
const KEY_braille_dots_346: number
const KEY_braille_dots_3467: number
const KEY_braille_dots_34678: number
const KEY_braille_dots_3468: number
const KEY_braille_dots_347: number
const KEY_braille_dots_3478: number
const KEY_braille_dots_348: number
const KEY_braille_dots_35: number
const KEY_braille_dots_356: number
const KEY_braille_dots_3567: number
const KEY_braille_dots_35678: number
const KEY_braille_dots_3568: number
const KEY_braille_dots_357: number
const KEY_braille_dots_3578: number
const KEY_braille_dots_358: number
const KEY_braille_dots_36: number
const KEY_braille_dots_367: number
const KEY_braille_dots_3678: number
const KEY_braille_dots_368: number
const KEY_braille_dots_37: number
const KEY_braille_dots_378: number
const KEY_braille_dots_38: number
const KEY_braille_dots_4: number
const KEY_braille_dots_45: number
const KEY_braille_dots_456: number
const KEY_braille_dots_4567: number
const KEY_braille_dots_45678: number
const KEY_braille_dots_4568: number
const KEY_braille_dots_457: number
const KEY_braille_dots_4578: number
const KEY_braille_dots_458: number
const KEY_braille_dots_46: number
const KEY_braille_dots_467: number
const KEY_braille_dots_4678: number
const KEY_braille_dots_468: number
const KEY_braille_dots_47: number
const KEY_braille_dots_478: number
const KEY_braille_dots_48: number
const KEY_braille_dots_5: number
const KEY_braille_dots_56: number
const KEY_braille_dots_567: number
const KEY_braille_dots_5678: number
const KEY_braille_dots_568: number
const KEY_braille_dots_57: number
const KEY_braille_dots_578: number
const KEY_braille_dots_58: number
const KEY_braille_dots_6: number
const KEY_braille_dots_67: number
const KEY_braille_dots_678: number
const KEY_braille_dots_68: number
const KEY_braille_dots_7: number
const KEY_braille_dots_78: number
const KEY_braille_dots_8: number
const KEY_breve: number
const KEY_brokenbar: number
const KEY_c: number
const KEY_c_h: number
const KEY_cabovedot: number
const KEY_cacute: number
const KEY_careof: number
const KEY_caret: number
const KEY_caron: number
const KEY_ccaron: number
const KEY_ccedilla: number
const KEY_ccircumflex: number
const KEY_cedilla: number
const KEY_cent: number
const KEY_ch: number
const KEY_checkerboard: number
const KEY_checkmark: number
const KEY_circle: number
const KEY_club: number
const KEY_colon: number
const KEY_comma: number
const KEY_containsas: number
const KEY_copyright: number
const KEY_cr: number
const KEY_crossinglines: number
const KEY_cuberoot: number
const KEY_currency: number
const KEY_cursor: number
const KEY_d: number
const KEY_dabovedot: number
const KEY_dagger: number
const KEY_dcaron: number
const KEY_dead_A: number
const KEY_dead_E: number
const KEY_dead_I: number
const KEY_dead_O: number
const KEY_dead_U: number
const KEY_dead_a: number
const KEY_dead_abovecomma: number
const KEY_dead_abovedot: number
const KEY_dead_abovereversedcomma: number
const KEY_dead_abovering: number
const KEY_dead_acute: number
const KEY_dead_belowbreve: number
const KEY_dead_belowcircumflex: number
const KEY_dead_belowcomma: number
const KEY_dead_belowdiaeresis: number
const KEY_dead_belowdot: number
const KEY_dead_belowmacron: number
const KEY_dead_belowring: number
const KEY_dead_belowtilde: number
const KEY_dead_breve: number
const KEY_dead_capital_schwa: number
const KEY_dead_caron: number
const KEY_dead_cedilla: number
const KEY_dead_circumflex: number
const KEY_dead_currency: number
const KEY_dead_dasia: number
const KEY_dead_diaeresis: number
const KEY_dead_doubleacute: number
const KEY_dead_doublegrave: number
const KEY_dead_e: number
const KEY_dead_grave: number
const KEY_dead_greek: number
const KEY_dead_hook: number
const KEY_dead_horn: number
const KEY_dead_i: number
const KEY_dead_invertedbreve: number
const KEY_dead_iota: number
const KEY_dead_macron: number
const KEY_dead_o: number
const KEY_dead_ogonek: number
const KEY_dead_perispomeni: number
const KEY_dead_psili: number
const KEY_dead_semivoiced_sound: number
const KEY_dead_small_schwa: number
const KEY_dead_stroke: number
const KEY_dead_tilde: number
const KEY_dead_u: number
const KEY_dead_voiced_sound: number
const KEY_decimalpoint: number
const KEY_degree: number
const KEY_diaeresis: number
const KEY_diamond: number
const KEY_digitspace: number
const KEY_dintegral: number
const KEY_division: number
const KEY_dollar: number
const KEY_doubbaselinedot: number
const KEY_doubleacute: number
const KEY_doubledagger: number
const KEY_doublelowquotemark: number
const KEY_downarrow: number
const KEY_downcaret: number
const KEY_downshoe: number
const KEY_downstile: number
const KEY_downtack: number
const KEY_dstroke: number
const KEY_e: number
const KEY_eabovedot: number
const KEY_eacute: number
const KEY_ebelowdot: number
const KEY_ecaron: number
const KEY_ecircumflex: number
const KEY_ecircumflexacute: number
const KEY_ecircumflexbelowdot: number
const KEY_ecircumflexgrave: number
const KEY_ecircumflexhook: number
const KEY_ecircumflextilde: number
const KEY_ediaeresis: number
const KEY_egrave: number
const KEY_ehook: number
const KEY_eightsubscript: number
const KEY_eightsuperior: number
const KEY_elementof: number
const KEY_ellipsis: number
const KEY_em3space: number
const KEY_em4space: number
const KEY_emacron: number
const KEY_emdash: number
const KEY_emfilledcircle: number
const KEY_emfilledrect: number
const KEY_emopencircle: number
const KEY_emopenrectangle: number
const KEY_emptyset: number
const KEY_emspace: number
const KEY_endash: number
const KEY_enfilledcircbullet: number
const KEY_enfilledsqbullet: number
const KEY_eng: number
const KEY_enopencircbullet: number
const KEY_enopensquarebullet: number
const KEY_enspace: number
const KEY_eogonek: number
const KEY_equal: number
const KEY_eth: number
const KEY_etilde: number
const KEY_exclam: number
const KEY_exclamdown: number
const KEY_ezh: number
const KEY_f: number
const KEY_fabovedot: number
const KEY_femalesymbol: number
const KEY_ff: number
const KEY_figdash: number
const KEY_filledlefttribullet: number
const KEY_filledrectbullet: number
const KEY_filledrighttribullet: number
const KEY_filledtribulletdown: number
const KEY_filledtribulletup: number
const KEY_fiveeighths: number
const KEY_fivesixths: number
const KEY_fivesubscript: number
const KEY_fivesuperior: number
const KEY_fourfifths: number
const KEY_foursubscript: number
const KEY_foursuperior: number
const KEY_fourthroot: number
const KEY_function: number
const KEY_g: number
const KEY_gabovedot: number
const KEY_gbreve: number
const KEY_gcaron: number
const KEY_gcedilla: number
const KEY_gcircumflex: number
const KEY_grave: number
const KEY_greater: number
const KEY_greaterthanequal: number
const KEY_guillemotleft: number
const KEY_guillemotright: number
const KEY_h: number
const KEY_hairspace: number
const KEY_hcircumflex: number
const KEY_heart: number
const KEY_hebrew_aleph: number
const KEY_hebrew_ayin: number
const KEY_hebrew_bet: number
const KEY_hebrew_beth: number
const KEY_hebrew_chet: number
const KEY_hebrew_dalet: number
const KEY_hebrew_daleth: number
const KEY_hebrew_doublelowline: number
const KEY_hebrew_finalkaph: number
const KEY_hebrew_finalmem: number
const KEY_hebrew_finalnun: number
const KEY_hebrew_finalpe: number
const KEY_hebrew_finalzade: number
const KEY_hebrew_finalzadi: number
const KEY_hebrew_gimel: number
const KEY_hebrew_gimmel: number
const KEY_hebrew_he: number
const KEY_hebrew_het: number
const KEY_hebrew_kaph: number
const KEY_hebrew_kuf: number
const KEY_hebrew_lamed: number
const KEY_hebrew_mem: number
const KEY_hebrew_nun: number
const KEY_hebrew_pe: number
const KEY_hebrew_qoph: number
const KEY_hebrew_resh: number
const KEY_hebrew_samech: number
const KEY_hebrew_samekh: number
const KEY_hebrew_shin: number
const KEY_hebrew_taf: number
const KEY_hebrew_taw: number
const KEY_hebrew_tet: number
const KEY_hebrew_teth: number
const KEY_hebrew_waw: number
const KEY_hebrew_yod: number
const KEY_hebrew_zade: number
const KEY_hebrew_zadi: number
const KEY_hebrew_zain: number
const KEY_hebrew_zayin: number
const KEY_hexagram: number
const KEY_horizconnector: number
const KEY_horizlinescan1: number
const KEY_horizlinescan3: number
const KEY_horizlinescan5: number
const KEY_horizlinescan7: number
const KEY_horizlinescan9: number
const KEY_hstroke: number
const KEY_ht: number
const KEY_hyphen: number
const KEY_i: number
const KEY_iacute: number
const KEY_ibelowdot: number
const KEY_ibreve: number
const KEY_icircumflex: number
const KEY_identical: number
const KEY_idiaeresis: number
const KEY_idotless: number
const KEY_ifonlyif: number
const KEY_igrave: number
const KEY_ihook: number
const KEY_imacron: number
const KEY_implies: number
const KEY_includedin: number
const KEY_includes: number
const KEY_infinity: number
const KEY_integral: number
const KEY_intersection: number
const KEY_iogonek: number
const KEY_itilde: number
const KEY_j: number
const KEY_jcircumflex: number
const KEY_jot: number
const KEY_k: number
const KEY_kana_A: number
const KEY_kana_CHI: number
const KEY_kana_E: number
const KEY_kana_FU: number
const KEY_kana_HA: number
const KEY_kana_HE: number
const KEY_kana_HI: number
const KEY_kana_HO: number
const KEY_kana_HU: number
const KEY_kana_I: number
const KEY_kana_KA: number
const KEY_kana_KE: number
const KEY_kana_KI: number
const KEY_kana_KO: number
const KEY_kana_KU: number
const KEY_kana_MA: number
const KEY_kana_ME: number
const KEY_kana_MI: number
const KEY_kana_MO: number
const KEY_kana_MU: number
const KEY_kana_N: number
const KEY_kana_NA: number
const KEY_kana_NE: number
const KEY_kana_NI: number
const KEY_kana_NO: number
const KEY_kana_NU: number
const KEY_kana_O: number
const KEY_kana_RA: number
const KEY_kana_RE: number
const KEY_kana_RI: number
const KEY_kana_RO: number
const KEY_kana_RU: number
const KEY_kana_SA: number
const KEY_kana_SE: number
const KEY_kana_SHI: number
const KEY_kana_SO: number
const KEY_kana_SU: number
const KEY_kana_TA: number
const KEY_kana_TE: number
const KEY_kana_TI: number
const KEY_kana_TO: number
const KEY_kana_TSU: number
const KEY_kana_TU: number
const KEY_kana_U: number
const KEY_kana_WA: number
const KEY_kana_WO: number
const KEY_kana_YA: number
const KEY_kana_YO: number
const KEY_kana_YU: number
const KEY_kana_a: number
const KEY_kana_closingbracket: number
const KEY_kana_comma: number
const KEY_kana_conjunctive: number
const KEY_kana_e: number
const KEY_kana_fullstop: number
const KEY_kana_i: number
const KEY_kana_middledot: number
const KEY_kana_o: number
const KEY_kana_openingbracket: number
const KEY_kana_switch: number
const KEY_kana_tsu: number
const KEY_kana_tu: number
const KEY_kana_u: number
const KEY_kana_ya: number
const KEY_kana_yo: number
const KEY_kana_yu: number
const KEY_kappa: number
const KEY_kcedilla: number
const KEY_kra: number
const KEY_l: number
const KEY_lacute: number
const KEY_latincross: number
const KEY_lbelowdot: number
const KEY_lcaron: number
const KEY_lcedilla: number
const KEY_leftanglebracket: number
const KEY_leftarrow: number
const KEY_leftcaret: number
const KEY_leftdoublequotemark: number
const KEY_leftmiddlecurlybrace: number
const KEY_leftopentriangle: number
const KEY_leftpointer: number
const KEY_leftradical: number
const KEY_leftshoe: number
const KEY_leftsinglequotemark: number
const KEY_leftt: number
const KEY_lefttack: number
const KEY_less: number
const KEY_lessthanequal: number
const KEY_lf: number
const KEY_logicaland: number
const KEY_logicalor: number
const KEY_lowleftcorner: number
const KEY_lowrightcorner: number
const KEY_lstroke: number
const KEY_m: number
const KEY_mabovedot: number
const KEY_macron: number
const KEY_malesymbol: number
const KEY_maltesecross: number
const KEY_marker: number
const KEY_masculine: number
const KEY_minus: number
const KEY_minutes: number
const KEY_mu: number
const KEY_multiply: number
const KEY_musicalflat: number
const KEY_musicalsharp: number
const KEY_n: number
const KEY_nabla: number
const KEY_nacute: number
const KEY_ncaron: number
const KEY_ncedilla: number
const KEY_ninesubscript: number
const KEY_ninesuperior: number
const KEY_nl: number
const KEY_nobreakspace: number
const KEY_notapproxeq: number
const KEY_notelementof: number
const KEY_notequal: number
const KEY_notidentical: number
const KEY_notsign: number
const KEY_ntilde: number
const KEY_numbersign: number
const KEY_numerosign: number
const KEY_o: number
const KEY_oacute: number
const KEY_obarred: number
const KEY_obelowdot: number
const KEY_ocaron: number
const KEY_ocircumflex: number
const KEY_ocircumflexacute: number
const KEY_ocircumflexbelowdot: number
const KEY_ocircumflexgrave: number
const KEY_ocircumflexhook: number
const KEY_ocircumflextilde: number
const KEY_odiaeresis: number
const KEY_odoubleacute: number
const KEY_oe: number
const KEY_ogonek: number
const KEY_ograve: number
const KEY_ohook: number
const KEY_ohorn: number
const KEY_ohornacute: number
const KEY_ohornbelowdot: number
const KEY_ohorngrave: number
const KEY_ohornhook: number
const KEY_ohorntilde: number
const KEY_omacron: number
const KEY_oneeighth: number
const KEY_onefifth: number
const KEY_onehalf: number
const KEY_onequarter: number
const KEY_onesixth: number
const KEY_onesubscript: number
const KEY_onesuperior: number
const KEY_onethird: number
const KEY_ooblique: number
const KEY_openrectbullet: number
const KEY_openstar: number
const KEY_opentribulletdown: number
const KEY_opentribulletup: number
const KEY_ordfeminine: number
const KEY_oslash: number
const KEY_otilde: number
const KEY_overbar: number
const KEY_overline: number
const KEY_p: number
const KEY_pabovedot: number
const KEY_paragraph: number
const KEY_parenleft: number
const KEY_parenright: number
const KEY_partdifferential: number
const KEY_partialderivative: number
const KEY_percent: number
const KEY_period: number
const KEY_periodcentered: number
const KEY_phonographcopyright: number
const KEY_plus: number
const KEY_plusminus: number
const KEY_prescription: number
const KEY_prolongedsound: number
const KEY_punctspace: number
const KEY_q: number
const KEY_quad: number
const KEY_question: number
const KEY_questiondown: number
const KEY_quotedbl: number
const KEY_quoteleft: number
const KEY_quoteright: number
const KEY_r: number
const KEY_racute: number
const KEY_radical: number
const KEY_rcaron: number
const KEY_rcedilla: number
const KEY_registered: number
const KEY_rightanglebracket: number
const KEY_rightarrow: number
const KEY_rightcaret: number
const KEY_rightdoublequotemark: number
const KEY_rightmiddlecurlybrace: number
const KEY_rightmiddlesummation: number
const KEY_rightopentriangle: number
const KEY_rightpointer: number
const KEY_rightshoe: number
const KEY_rightsinglequotemark: number
const KEY_rightt: number
const KEY_righttack: number
const KEY_s: number
const KEY_sabovedot: number
const KEY_sacute: number
const KEY_scaron: number
const KEY_scedilla: number
const KEY_schwa: number
const KEY_scircumflex: number
const KEY_script_switch: number
const KEY_seconds: number
const KEY_section: number
const KEY_semicolon: number
const KEY_semivoicedsound: number
const KEY_seveneighths: number
const KEY_sevensubscript: number
const KEY_sevensuperior: number
const KEY_signaturemark: number
const KEY_signifblank: number
const KEY_similarequal: number
const KEY_singlelowquotemark: number
const KEY_sixsubscript: number
const KEY_sixsuperior: number
const KEY_slash: number
const KEY_soliddiamond: number
const KEY_space: number
const KEY_squareroot: number
const KEY_ssharp: number
const KEY_sterling: number
const KEY_stricteq: number
const KEY_t: number
const KEY_tabovedot: number
const KEY_tcaron: number
const KEY_tcedilla: number
const KEY_telephone: number
const KEY_telephonerecorder: number
const KEY_therefore: number
const KEY_thinspace: number
const KEY_thorn: number
const KEY_threeeighths: number
const KEY_threefifths: number
const KEY_threequarters: number
const KEY_threesubscript: number
const KEY_threesuperior: number
const KEY_tintegral: number
const KEY_topintegral: number
const KEY_topleftparens: number
const KEY_topleftradical: number
const KEY_topleftsqbracket: number
const KEY_topleftsummation: number
const KEY_toprightparens: number
const KEY_toprightsqbracket: number
const KEY_toprightsummation: number
const KEY_topt: number
const KEY_topvertsummationconnector: number
const KEY_trademark: number
const KEY_trademarkincircle: number
const KEY_tslash: number
const KEY_twofifths: number
const KEY_twosubscript: number
const KEY_twosuperior: number
const KEY_twothirds: number
const KEY_u: number
const KEY_uacute: number
const KEY_ubelowdot: number
const KEY_ubreve: number
const KEY_ucircumflex: number
const KEY_udiaeresis: number
const KEY_udoubleacute: number
const KEY_ugrave: number
const KEY_uhook: number
const KEY_uhorn: number
const KEY_uhornacute: number
const KEY_uhornbelowdot: number
const KEY_uhorngrave: number
const KEY_uhornhook: number
const KEY_uhorntilde: number
const KEY_umacron: number
const KEY_underbar: number
const KEY_underscore: number
const KEY_union: number
const KEY_uogonek: number
const KEY_uparrow: number
const KEY_upcaret: number
const KEY_upleftcorner: number
const KEY_uprightcorner: number
const KEY_upshoe: number
const KEY_upstile: number
const KEY_uptack: number
const KEY_uring: number
const KEY_utilde: number
const KEY_v: number
const KEY_variation: number
const KEY_vertbar: number
const KEY_vertconnector: number
const KEY_voicedsound: number
const KEY_vt: number
const KEY_w: number
const KEY_wacute: number
const KEY_wcircumflex: number
const KEY_wdiaeresis: number
const KEY_wgrave: number
const KEY_x: number
const KEY_xabovedot: number
const KEY_y: number
const KEY_yacute: number
const KEY_ybelowdot: number
const KEY_ycircumflex: number
const KEY_ydiaeresis: number
const KEY_yen: number
const KEY_ygrave: number
const KEY_yhook: number
const KEY_ytilde: number
const KEY_z: number
const KEY_zabovedot: number
const KEY_zacute: number
const KEY_zcaron: number
const KEY_zerosubscript: number
const KEY_zerosuperior: number
const KEY_zstroke: number
const KP_0: number
const KP_1: number
const KP_2: number
const KP_3: number
const KP_4: number
const KP_5: number
const KP_6: number
const KP_7: number
const KP_8: number
const KP_9: number
const KP_Add: number
const KP_Begin: number
const KP_Decimal: number
const KP_Delete: number
const KP_Divide: number
const KP_Down: number
const KP_End: number
const KP_Enter: number
const KP_Equal: number
const KP_F1: number
const KP_F2: number
const KP_F3: number
const KP_F4: number
const KP_Home: number
const KP_Insert: number
const KP_Left: number
const KP_Multiply: number
const KP_Next: number
const KP_Page_Down: number
const KP_Page_Up: number
const KP_Prior: number
const KP_Right: number
const KP_Separator: number
const KP_Space: number
const KP_Subtract: number
const KP_Tab: number
const KP_Up: number
const Kana_Lock: number
const Kana_Shift: number
/**
 * Japanese keyboard support.
 */
const Kanji: number
const Kanji_Bangou: number
/**
 * Japanese keyboard support.
 */
const Katakana: number
const Kcedilla: number
const Korean_Won: number
const L: number
const L1: number
const L10: number
const L2: number
const L3: number
const L4: number
const L5: number
const L6: number
const L7: number
const L8: number
const L9: number
const Lacute: number
const Last_Virtual_Screen: number
const Lbelowdot: number
const Lcaron: number
const Lcedilla: number
const Left: number
const Linefeed: number
const LiraSign: number
const Lstroke: number
const M: number
/**
 * IBus major version.
 */
const MAJOR_VERSION: number
const MAX_COMPOSE_LEN: number
/**
 * IBus micro version.
 */
const MICRO_VERSION: number
/**
 * IBus minor version.
 */
const MINOR_VERSION: number
const Mabovedot: number
const Macedonia_DSE: number
const Macedonia_GJE: number
const Macedonia_KJE: number
const Macedonia_dse: number
const Macedonia_gje: number
const Macedonia_kje: number
const Mae_Koho: number
const Massyo: number
const Menu: number
const Meta_L: number
const Meta_R: number
const MillSign: number
const Mode_switch: number
const MouseKeys_Accel_Enable: number
const MouseKeys_Enable: number
/**
 * Japanese keyboard support.
 */
const Muhenkan: number
/**
 * Key for composing characters.
 * A.k.a. Compose Key.
 */
const Multi_key: number
const MultipleCandidate: number
const N: number
const Nacute: number
const NairaSign: number
const Ncaron: number
const Ncedilla: number
const NewSheqelSign: number
const Next: number
const Next_Virtual_Screen: number
const Ntilde: number
const Num_Lock: number
const O: number
const OE: number
const Oacute: number
const Obarred: number
const Obelowdot: number
const Ocaron: number
const Ocircumflex: number
const Ocircumflexacute: number
const Ocircumflexbelowdot: number
const Ocircumflexgrave: number
const Ocircumflexhook: number
const Ocircumflextilde: number
const Odiaeresis: number
const Odoubleacute: number
const Ograve: number
const Ohook: number
const Ohorn: number
const Ohornacute: number
const Ohornbelowdot: number
const Ohorngrave: number
const Ohornhook: number
const Ohorntilde: number
const Omacron: number
const Ooblique: number
const Oslash: number
const Otilde: number
const Overlay1_Enable: number
const Overlay2_Enable: number
const P: number
/**
 * D-Bus path for IBus config.
 */
const PATH_CONFIG: string
/**
 * D-Bus path for IBus factory.
 */
const PATH_FACTORY: string
/**
 * D-Bus path for IBus
 */
const PATH_IBUS: string
/**
 * Template of D-Bus path for IBus input context.
 */
const PATH_INPUT_CONTEXT: string
/**
 * D-Bus path for IBus notifications.
 */
const PATH_NOTIFICATIONS: string
/**
 * D-Bus path for IBus panel.
 */
const PATH_PANEL: string
const Pabovedot: number
const Page_Down: number
const Page_Up: number
const Pause: number
const PesetaSign: number
const Pointer_Accelerate: number
const Pointer_Button1: number
const Pointer_Button2: number
const Pointer_Button3: number
const Pointer_Button4: number
const Pointer_Button5: number
const Pointer_Button_Dflt: number
const Pointer_DblClick1: number
const Pointer_DblClick2: number
const Pointer_DblClick3: number
const Pointer_DblClick4: number
const Pointer_DblClick5: number
const Pointer_DblClick_Dflt: number
const Pointer_DfltBtnNext: number
const Pointer_DfltBtnPrev: number
const Pointer_Down: number
const Pointer_DownLeft: number
const Pointer_DownRight: number
const Pointer_Drag1: number
const Pointer_Drag2: number
const Pointer_Drag3: number
const Pointer_Drag4: number
const Pointer_Drag5: number
const Pointer_Drag_Dflt: number
const Pointer_EnableKeys: number
const Pointer_Left: number
const Pointer_Right: number
const Pointer_Up: number
const Pointer_UpLeft: number
const Pointer_UpRight: number
const Prev_Virtual_Screen: number
const PreviousCandidate: number
const Print: number
const Prior: number
const Q: number
const R: number
const R1: number
const R10: number
const R11: number
const R12: number
const R13: number
const R14: number
const R15: number
const R2: number
const R3: number
const R4: number
const R5: number
const R6: number
const R7: number
const R8: number
const R9: number
const Racute: number
const Rcaron: number
const Rcedilla: number
const Redo: number
const RepeatKeys_Enable: number
const Return: number
const Right: number
/**
 * Japanese keyboard support.
 */
const Romaji: number
const RupeeSign: number
const S: number
const SCHWA: number
/**
 * Address of IBus config service.
 */
const SERVICE_CONFIG: string
/**
 * Address of IBus service.
 */
const SERVICE_IBUS: string
/**
 * Address of IBus notification service.
 */
const SERVICE_NOTIFICATIONS: string
/**
 * Address of IBus panel service.
 */
const SERVICE_PANEL: string
const Sabovedot: number
const Sacute: number
const Scaron: number
const Scedilla: number
const Scircumflex: number
const Scroll_Lock: number
const Select: number
const Serbian_DJE: number
const Serbian_DZE: number
const Serbian_JE: number
const Serbian_LJE: number
const Serbian_NJE: number
const Serbian_TSHE: number
const Serbian_dje: number
const Serbian_dze: number
const Serbian_je: number
const Serbian_lje: number
const Serbian_nje: number
const Serbian_tshe: number
const Shift_L: number
const Shift_Lock: number
const Shift_R: number
const SingleCandidate: number
const SlowKeys_Enable: number
const StickyKeys_Enable: number
const Super_L: number
const Super_R: number
const Sys_Req: number
const T: number
const THORN: number
const Tab: number
const Tabovedot: number
const Tcaron: number
const Tcedilla: number
const Terminate_Server: number
const Thai_baht: number
const Thai_bobaimai: number
const Thai_chochan: number
const Thai_chochang: number
const Thai_choching: number
const Thai_chochoe: number
const Thai_dochada: number
const Thai_dodek: number
const Thai_fofa: number
const Thai_fofan: number
const Thai_hohip: number
const Thai_honokhuk: number
const Thai_khokhai: number
const Thai_khokhon: number
const Thai_khokhuat: number
const Thai_khokhwai: number
const Thai_khorakhang: number
const Thai_kokai: number
const Thai_lakkhangyao: number
const Thai_lekchet: number
const Thai_lekha: number
const Thai_lekhok: number
const Thai_lekkao: number
const Thai_leknung: number
const Thai_lekpaet: number
const Thai_leksam: number
const Thai_leksi: number
const Thai_leksong: number
const Thai_leksun: number
const Thai_lochula: number
const Thai_loling: number
const Thai_lu: number
const Thai_maichattawa: number
const Thai_maiek: number
const Thai_maihanakat: number
const Thai_maihanakat_maitho: number
const Thai_maitaikhu: number
const Thai_maitho: number
const Thai_maitri: number
const Thai_maiyamok: number
const Thai_moma: number
const Thai_ngongu: number
const Thai_nikhahit: number
const Thai_nonen: number
const Thai_nonu: number
const Thai_oang: number
const Thai_paiyannoi: number
const Thai_phinthu: number
const Thai_phophan: number
const Thai_phophung: number
const Thai_phosamphao: number
const Thai_popla: number
const Thai_rorua: number
const Thai_ru: number
const Thai_saraa: number
const Thai_saraaa: number
const Thai_saraae: number
const Thai_saraaimaimalai: number
const Thai_saraaimaimuan: number
const Thai_saraam: number
const Thai_sarae: number
const Thai_sarai: number
const Thai_saraii: number
const Thai_sarao: number
const Thai_sarau: number
const Thai_saraue: number
const Thai_sarauee: number
const Thai_sarauu: number
const Thai_sorusi: number
const Thai_sosala: number
const Thai_soso: number
const Thai_sosua: number
const Thai_thanthakhat: number
const Thai_thonangmontho: number
const Thai_thophuthao: number
const Thai_thothahan: number
const Thai_thothan: number
const Thai_thothong: number
const Thai_thothung: number
const Thai_topatak: number
const Thai_totao: number
const Thai_wowaen: number
const Thai_yoyak: number
const Thai_yoying: number
const Thorn: number
const Touroku: number
const Tslash: number
const U: number
const Uacute: number
const Ubelowdot: number
const Ubreve: number
const Ucircumflex: number
const Udiaeresis: number
const Udoubleacute: number
const Ugrave: number
const Uhook: number
const Uhorn: number
const Uhornacute: number
const Uhornbelowdot: number
const Uhorngrave: number
const Uhornhook: number
const Uhorntilde: number
const Ukrainian_GHE_WITH_UPTURN: number
const Ukrainian_I: number
const Ukrainian_IE: number
const Ukrainian_YI: number
const Ukrainian_ghe_with_upturn: number
const Ukrainian_i: number
const Ukrainian_ie: number
const Ukrainian_yi: number
const Ukranian_I: number
const Ukranian_JE: number
const Ukranian_YI: number
const Ukranian_i: number
const Ukranian_je: number
const Ukranian_yi: number
const Umacron: number
const Undo: number
const Uogonek: number
const Up: number
const Uring: number
const Utilde: number
const V: number
const VoidSymbol: number
const W: number
const Wacute: number
const Wcircumflex: number
const Wdiaeresis: number
const Wgrave: number
const WonSign: number
const X: number
const Xabovedot: number
const Y: number
const Yacute: number
const Ybelowdot: number
const Ycircumflex: number
const Ydiaeresis: number
const Ygrave: number
const Yhook: number
const Ytilde: number
const Z: number
const Zabovedot: number
const Zacute: number
const Zcaron: number
const Zen_Koho: number
const Zenkaku: number
const Zenkaku_Hankaku: number
const Zstroke: number
const a: number
const aacute: number
const abelowdot: number
const abovedot: number
const abreve: number
const abreveacute: number
const abrevebelowdot: number
const abrevegrave: number
const abrevehook: number
const abrevetilde: number
const acircumflex: number
const acircumflexacute: number
const acircumflexbelowdot: number
const acircumflexgrave: number
const acircumflexhook: number
const acircumflextilde: number
const acute: number
const adiaeresis: number
const ae: number
const agrave: number
const ahook: number
const amacron: number
const ampersand: number
const aogonek: number
const apostrophe: number
const approxeq: number
const approximate: number
const aring: number
const asciicircum: number
const asciitilde: number
const asterisk: number
const at: number
const atilde: number
const b: number
const babovedot: number
const backslash: number
const ballotcross: number
const bar: number
const because: number
const blank: number
const botintegral: number
const botleftparens: number
const botleftsqbracket: number
const botleftsummation: number
const botrightparens: number
const botrightsqbracket: number
const botrightsummation: number
const bott: number
const botvertsummationconnector: number
const braceleft: number
const braceright: number
const bracketleft: number
const bracketright: number
const braille_blank: number
const braille_dot_1: number
const braille_dot_10: number
const braille_dot_2: number
const braille_dot_3: number
const braille_dot_4: number
const braille_dot_5: number
const braille_dot_6: number
const braille_dot_7: number
const braille_dot_8: number
const braille_dot_9: number
const braille_dots_1: number
const braille_dots_12: number
const braille_dots_123: number
const braille_dots_1234: number
const braille_dots_12345: number
const braille_dots_123456: number
const braille_dots_1234567: number
const braille_dots_12345678: number
const braille_dots_1234568: number
const braille_dots_123457: number
const braille_dots_1234578: number
const braille_dots_123458: number
const braille_dots_12346: number
const braille_dots_123467: number
const braille_dots_1234678: number
const braille_dots_123468: number
const braille_dots_12347: number
const braille_dots_123478: number
const braille_dots_12348: number
const braille_dots_1235: number
const braille_dots_12356: number
const braille_dots_123567: number
const braille_dots_1235678: number
const braille_dots_123568: number
const braille_dots_12357: number
const braille_dots_123578: number
const braille_dots_12358: number
const braille_dots_1236: number
const braille_dots_12367: number
const braille_dots_123678: number
const braille_dots_12368: number
const braille_dots_1237: number
const braille_dots_12378: number
const braille_dots_1238: number
const braille_dots_124: number
const braille_dots_1245: number
const braille_dots_12456: number
const braille_dots_124567: number
const braille_dots_1245678: number
const braille_dots_124568: number
const braille_dots_12457: number
const braille_dots_124578: number
const braille_dots_12458: number
const braille_dots_1246: number
const braille_dots_12467: number
const braille_dots_124678: number
const braille_dots_12468: number
const braille_dots_1247: number
const braille_dots_12478: number
const braille_dots_1248: number
const braille_dots_125: number
const braille_dots_1256: number
const braille_dots_12567: number
const braille_dots_125678: number
const braille_dots_12568: number
const braille_dots_1257: number
const braille_dots_12578: number
const braille_dots_1258: number
const braille_dots_126: number
const braille_dots_1267: number
const braille_dots_12678: number
const braille_dots_1268: number
const braille_dots_127: number
const braille_dots_1278: number
const braille_dots_128: number
const braille_dots_13: number
const braille_dots_134: number
const braille_dots_1345: number
const braille_dots_13456: number
const braille_dots_134567: number
const braille_dots_1345678: number
const braille_dots_134568: number
const braille_dots_13457: number
const braille_dots_134578: number
const braille_dots_13458: number
const braille_dots_1346: number
const braille_dots_13467: number
const braille_dots_134678: number
const braille_dots_13468: number
const braille_dots_1347: number
const braille_dots_13478: number
const braille_dots_1348: number
const braille_dots_135: number
const braille_dots_1356: number
const braille_dots_13567: number
const braille_dots_135678: number
const braille_dots_13568: number
const braille_dots_1357: number
const braille_dots_13578: number
const braille_dots_1358: number
const braille_dots_136: number
const braille_dots_1367: number
const braille_dots_13678: number
const braille_dots_1368: number
const braille_dots_137: number
const braille_dots_1378: number
const braille_dots_138: number
const braille_dots_14: number
const braille_dots_145: number
const braille_dots_1456: number
const braille_dots_14567: number
const braille_dots_145678: number
const braille_dots_14568: number
const braille_dots_1457: number
const braille_dots_14578: number
const braille_dots_1458: number
const braille_dots_146: number
const braille_dots_1467: number
const braille_dots_14678: number
const braille_dots_1468: number
const braille_dots_147: number
const braille_dots_1478: number
const braille_dots_148: number
const braille_dots_15: number
const braille_dots_156: number
const braille_dots_1567: number
const braille_dots_15678: number
const braille_dots_1568: number
const braille_dots_157: number
const braille_dots_1578: number
const braille_dots_158: number
const braille_dots_16: number
const braille_dots_167: number
const braille_dots_1678: number
const braille_dots_168: number
const braille_dots_17: number
const braille_dots_178: number
const braille_dots_18: number
const braille_dots_2: number
const braille_dots_23: number
const braille_dots_234: number
const braille_dots_2345: number
const braille_dots_23456: number
const braille_dots_234567: number
const braille_dots_2345678: number
const braille_dots_234568: number
const braille_dots_23457: number
const braille_dots_234578: number
const braille_dots_23458: number
const braille_dots_2346: number
const braille_dots_23467: number
const braille_dots_234678: number
const braille_dots_23468: number
const braille_dots_2347: number
const braille_dots_23478: number
const braille_dots_2348: number
const braille_dots_235: number
const braille_dots_2356: number
const braille_dots_23567: number
const braille_dots_235678: number
const braille_dots_23568: number
const braille_dots_2357: number
const braille_dots_23578: number
const braille_dots_2358: number
const braille_dots_236: number
const braille_dots_2367: number
const braille_dots_23678: number
const braille_dots_2368: number
const braille_dots_237: number
const braille_dots_2378: number
const braille_dots_238: number
const braille_dots_24: number
const braille_dots_245: number
const braille_dots_2456: number
const braille_dots_24567: number
const braille_dots_245678: number
const braille_dots_24568: number
const braille_dots_2457: number
const braille_dots_24578: number
const braille_dots_2458: number
const braille_dots_246: number
const braille_dots_2467: number
const braille_dots_24678: number
const braille_dots_2468: number
const braille_dots_247: number
const braille_dots_2478: number
const braille_dots_248: number
const braille_dots_25: number
const braille_dots_256: number
const braille_dots_2567: number
const braille_dots_25678: number
const braille_dots_2568: number
const braille_dots_257: number
const braille_dots_2578: number
const braille_dots_258: number
const braille_dots_26: number
const braille_dots_267: number
const braille_dots_2678: number
const braille_dots_268: number
const braille_dots_27: number
const braille_dots_278: number
const braille_dots_28: number
const braille_dots_3: number
const braille_dots_34: number
const braille_dots_345: number
const braille_dots_3456: number
const braille_dots_34567: number
const braille_dots_345678: number
const braille_dots_34568: number
const braille_dots_3457: number
const braille_dots_34578: number
const braille_dots_3458: number
const braille_dots_346: number
const braille_dots_3467: number
const braille_dots_34678: number
const braille_dots_3468: number
const braille_dots_347: number
const braille_dots_3478: number
const braille_dots_348: number
const braille_dots_35: number
const braille_dots_356: number
const braille_dots_3567: number
const braille_dots_35678: number
const braille_dots_3568: number
const braille_dots_357: number
const braille_dots_3578: number
const braille_dots_358: number
const braille_dots_36: number
const braille_dots_367: number
const braille_dots_3678: number
const braille_dots_368: number
const braille_dots_37: number
const braille_dots_378: number
const braille_dots_38: number
const braille_dots_4: number
const braille_dots_45: number
const braille_dots_456: number
const braille_dots_4567: number
const braille_dots_45678: number
const braille_dots_4568: number
const braille_dots_457: number
const braille_dots_4578: number
const braille_dots_458: number
const braille_dots_46: number
const braille_dots_467: number
const braille_dots_4678: number
const braille_dots_468: number
const braille_dots_47: number
const braille_dots_478: number
const braille_dots_48: number
const braille_dots_5: number
const braille_dots_56: number
const braille_dots_567: number
const braille_dots_5678: number
const braille_dots_568: number
const braille_dots_57: number
const braille_dots_578: number
const braille_dots_58: number
const braille_dots_6: number
const braille_dots_67: number
const braille_dots_678: number
const braille_dots_68: number
const braille_dots_7: number
const braille_dots_78: number
const braille_dots_8: number
const breve: number
const brokenbar: number
const c: number
const cabovedot: number
const cacute: number
const careof: number
const caret: number
const caron: number
const ccaron: number
const ccedilla: number
const ccircumflex: number
const cedilla: number
const cent: number
const checkerboard: number
const checkmark: number
const circle: number
const club: number
const colon: number
const comma: number
const containsas: number
const copyright: number
const cr: number
const crossinglines: number
const cuberoot: number
const currency: number
const cursor: number
const d: number
const dabovedot: number
const dagger: number
const dcaron: number
const dead_abovecomma: number
const dead_abovedot: number
const dead_abovereversedcomma: number
const dead_abovering: number
const dead_acute: number
const dead_belowbreve: number
const dead_belowcircumflex: number
const dead_belowdiaeresis: number
const dead_belowdot: number
const dead_belowmacron: number
const dead_belowring: number
const dead_belowtilde: number
const dead_breve: number
const dead_caron: number
const dead_cedilla: number
const dead_circumflex: number
const dead_dasia: number
const dead_diaeresis: number
const dead_doubleacute: number
const dead_grave: number
const dead_hook: number
const dead_horn: number
const dead_iota: number
const dead_macron: number
const dead_ogonek: number
const dead_perispomeni: number
const dead_psili: number
const dead_semivoiced_sound: number
const dead_stroke: number
const dead_tilde: number
const dead_voiced_sound: number
const decimalpoint: number
const degree: number
const diaeresis: number
const diamond: number
const digitspace: number
const dintegral: number
const division: number
const dollar: number
const doubbaselinedot: number
const doubleacute: number
const doubledagger: number
const doublelowquotemark: number
const downarrow: number
const downcaret: number
const downshoe: number
const downstile: number
const downtack: number
const dstroke: number
const e: number
const eabovedot: number
const eacute: number
const ebelowdot: number
const ecaron: number
const ecircumflex: number
const ecircumflexacute: number
const ecircumflexbelowdot: number
const ecircumflexgrave: number
const ecircumflexhook: number
const ecircumflextilde: number
const ediaeresis: number
const egrave: number
const ehook: number
const eightsubscript: number
const eightsuperior: number
const elementof: number
const ellipsis: number
const em3space: number
const em4space: number
const emacron: number
const emdash: number
const emfilledcircle: number
const emfilledrect: number
const emopencircle: number
const emopenrectangle: number
const emptyset: number
const emspace: number
const endash: number
const enfilledcircbullet: number
const enfilledsqbullet: number
const eng: number
const enopencircbullet: number
const enopensquarebullet: number
const enspace: number
const eogonek: number
const equal: number
const eth: number
const etilde: number
const exclam: number
const exclamdown: number
const f: number
const fabovedot: number
const femalesymbol: number
const ff: number
const figdash: number
const filledlefttribullet: number
const filledrectbullet: number
const filledrighttribullet: number
const filledtribulletdown: number
const filledtribulletup: number
const fiveeighths: number
const fivesixths: number
const fivesubscript: number
const fivesuperior: number
const fourfifths: number
const foursubscript: number
const foursuperior: number
const fourthroot: number
const function_: number
const g: number
const gabovedot: number
const gbreve: number
const gcaron: number
const gcedilla: number
const gcircumflex: number
const grave: number
const greater: number
const greaterthanequal: number
const guillemotleft: number
const guillemotright: number
const h: number
const hairspace: number
const hcircumflex: number
const heart: number
const hebrew_aleph: number
const hebrew_ayin: number
const hebrew_bet: number
const hebrew_beth: number
const hebrew_chet: number
const hebrew_dalet: number
const hebrew_daleth: number
const hebrew_doublelowline: number
const hebrew_finalkaph: number
const hebrew_finalmem: number
const hebrew_finalnun: number
const hebrew_finalpe: number
const hebrew_finalzade: number
const hebrew_finalzadi: number
const hebrew_gimel: number
const hebrew_gimmel: number
const hebrew_he: number
const hebrew_het: number
const hebrew_kaph: number
const hebrew_kuf: number
const hebrew_lamed: number
const hebrew_mem: number
const hebrew_nun: number
const hebrew_pe: number
const hebrew_qoph: number
const hebrew_resh: number
const hebrew_samech: number
const hebrew_samekh: number
const hebrew_shin: number
const hebrew_taf: number
const hebrew_taw: number
const hebrew_tet: number
const hebrew_teth: number
const hebrew_waw: number
const hebrew_yod: number
const hebrew_zade: number
const hebrew_zadi: number
const hebrew_zain: number
const hebrew_zayin: number
const hexagram: number
const horizconnector: number
const horizlinescan1: number
const horizlinescan3: number
const horizlinescan5: number
const horizlinescan7: number
const horizlinescan9: number
const hstroke: number
const ht: number
const hyphen: number
const i: number
const iacute: number
const ibelowdot: number
const ibreve: number
const icircumflex: number
const identical: number
const idiaeresis: number
const idotless: number
const ifonlyif: number
const igrave: number
const ihook: number
const imacron: number
const implies: number
const includedin: number
const includes: number
const infinity: number
const integral: number
const intersection: number
const iogonek: number
const itilde: number
const j: number
const jcircumflex: number
const jot: number
const k: number
const kana_A: number
const kana_CHI: number
const kana_E: number
const kana_FU: number
const kana_HA: number
const kana_HE: number
const kana_HI: number
const kana_HO: number
const kana_HU: number
const kana_I: number
const kana_KA: number
const kana_KE: number
const kana_KI: number
const kana_KO: number
const kana_KU: number
const kana_MA: number
const kana_ME: number
const kana_MI: number
const kana_MO: number
const kana_MU: number
const kana_N: number
const kana_NA: number
const kana_NE: number
const kana_NI: number
const kana_NO: number
const kana_NU: number
const kana_O: number
const kana_RA: number
const kana_RE: number
const kana_RI: number
const kana_RO: number
const kana_RU: number
const kana_SA: number
const kana_SE: number
const kana_SHI: number
const kana_SO: number
const kana_SU: number
const kana_TA: number
const kana_TE: number
const kana_TI: number
const kana_TO: number
const kana_TSU: number
const kana_TU: number
const kana_U: number
const kana_WA: number
const kana_WO: number
const kana_YA: number
const kana_YO: number
const kana_YU: number
const kana_a: number
const kana_closingbracket: number
const kana_comma: number
const kana_conjunctive: number
const kana_e: number
const kana_fullstop: number
const kana_i: number
const kana_middledot: number
const kana_o: number
const kana_openingbracket: number
const kana_switch: number
const kana_tsu: number
const kana_tu: number
const kana_u: number
const kana_ya: number
const kana_yo: number
const kana_yu: number
const kappa: number
const kcedilla: number
const kra: number
const l: number
const lacute: number
const latincross: number
const lbelowdot: number
const lcaron: number
const lcedilla: number
const leftanglebracket: number
const leftarrow: number
const leftcaret: number
const leftdoublequotemark: number
const leftmiddlecurlybrace: number
const leftopentriangle: number
const leftpointer: number
const leftradical: number
const leftshoe: number
const leftsinglequotemark: number
const leftt: number
const lefttack: number
const less: number
const lessthanequal: number
const lf: number
const logicaland: number
const logicalor: number
const lowleftcorner: number
const lowrightcorner: number
const lstroke: number
const m: number
const mabovedot: number
const macron: number
const malesymbol: number
const maltesecross: number
const marker: number
const masculine: number
const minus: number
const minutes: number
const mu: number
const multiply: number
const musicalflat: number
const musicalsharp: number
const n: number
const nabla: number
const nacute: number
const ncaron: number
const ncedilla: number
const ninesubscript: number
const ninesuperior: number
const nl: number
const nobreakspace: number
const notapproxeq: number
const notelementof: number
const notequal: number
const notidentical: number
const notsign: number
const ntilde: number
const numbersign: number
const numerosign: number
const o: number
const oacute: number
const obarred: number
const obelowdot: number
const ocaron: number
const ocircumflex: number
const ocircumflexacute: number
const ocircumflexbelowdot: number
const ocircumflexgrave: number
const ocircumflexhook: number
const ocircumflextilde: number
const odiaeresis: number
const odoubleacute: number
const oe: number
const ogonek: number
const ograve: number
const ohook: number
const ohorn: number
const ohornacute: number
const ohornbelowdot: number
const ohorngrave: number
const ohornhook: number
const ohorntilde: number
const omacron: number
const oneeighth: number
const onefifth: number
const onehalf: number
const onequarter: number
const onesixth: number
const onesubscript: number
const onesuperior: number
const onethird: number
const ooblique: number
const openrectbullet: number
const openstar: number
const opentribulletdown: number
const opentribulletup: number
const ordfeminine: number
const oslash: number
const otilde: number
const overbar: number
const overline: number
const p: number
const pabovedot: number
const paragraph: number
const parenleft: number
const parenright: number
const partdifferential: number
const partialderivative: number
const percent: number
const period: number
const periodcentered: number
const phonographcopyright: number
const plus: number
const plusminus: number
const prescription: number
const prolongedsound: number
const punctspace: number
const q: number
const quad: number
const question: number
const questiondown: number
const quotedbl: number
const quoteleft: number
const quoteright: number
const r: number
const racute: number
const radical: number
const rcaron: number
const rcedilla: number
const registered: number
const rightanglebracket: number
const rightarrow: number
const rightcaret: number
const rightdoublequotemark: number
const rightmiddlecurlybrace: number
const rightmiddlesummation: number
const rightopentriangle: number
const rightpointer: number
const rightshoe: number
const rightsinglequotemark: number
const rightt: number
const righttack: number
const s: number
const sabovedot: number
const sacute: number
const scaron: number
const scedilla: number
const schwa: number
const scircumflex: number
const script_switch: number
const seconds: number
const section: number
const semicolon: number
const semivoicedsound: number
const seveneighths: number
const sevensubscript: number
const sevensuperior: number
const signaturemark: number
const signifblank: number
const similarequal: number
const singlelowquotemark: number
const sixsubscript: number
const sixsuperior: number
const slash: number
const soliddiamond: number
const space: number
const squareroot: number
const ssharp: number
const sterling: number
const stricteq: number
const t: number
const tabovedot: number
const tcaron: number
const tcedilla: number
const telephone: number
const telephonerecorder: number
const therefore: number
const thinspace: number
const thorn: number
const threeeighths: number
const threefifths: number
const threequarters: number
const threesubscript: number
const threesuperior: number
const tintegral: number
const topintegral: number
const topleftparens: number
const topleftradical: number
const topleftsqbracket: number
const topleftsummation: number
const toprightparens: number
const toprightsqbracket: number
const toprightsummation: number
const topt: number
const topvertsummationconnector: number
const trademark: number
const trademarkincircle: number
const tslash: number
const twofifths: number
const twosubscript: number
const twosuperior: number
const twothirds: number
const u: number
const uacute: number
const ubelowdot: number
const ubreve: number
const ucircumflex: number
const udiaeresis: number
const udoubleacute: number
const ugrave: number
const uhook: number
const uhorn: number
const uhornacute: number
const uhornbelowdot: number
const uhorngrave: number
const uhornhook: number
const uhorntilde: number
const umacron: number
const underbar: number
const underscore: number
const union: number
const uogonek: number
const uparrow: number
const upcaret: number
const upleftcorner: number
const uprightcorner: number
const upshoe: number
const upstile: number
const uptack: number
const uring: number
const utilde: number
const v: number
const variation: number
const vertbar: number
const vertconnector: number
const voicedsound: number
const vt: number
const w: number
const wacute: number
const wcircumflex: number
const wdiaeresis: number
const wgrave: number
const x: number
const xabovedot: number
const y: number
const yacute: number
const ybelowdot: number
const ycircumflex: number
const ydiaeresis: number
const yen: number
const ygrave: number
const yhook: number
const ytilde: number
const z: number
const zabovedot: number
const zacute: number
const zcaron: number
const zerosubscript: number
const zerosuperior: number
const zstroke: number
/**
 * Creates a new background #IBusAttribute.
 * @param color Color in RGB.
 * @param start_index Where attribute starts.
 * @param end_index Where attribute ends.
 * @returns A newly allocated #IBusAttribute.
 */
function attr_background_new(color: number, start_index: number, end_index: number): Attribute
/**
 * Creates a new foreground #IBusAttribute.
 * @param color Color in RGB.
 * @param start_index Where attribute starts.
 * @param end_index Where attribute ends.
 * @returns A newly allocated #IBusAttribute.
 */
function attr_foreground_new(color: number, start_index: number, end_index: number): Attribute
/**
 * Creates a new underline #IBusAttribute.
 * @param underline_type Type of underline.
 * @param start_index Where attribute starts.
 * @param end_index Where attribute ends.
 * @returns A newly allocated #IBusAttribute.
 */
function attr_underline_new(underline_type: number, start_index: number, end_index: number): Attribute
function error_quark(): GLib.Quark
/**
 * Free a list of strings.
 * @param strv List of strings.
 */
function free_strv(strv: string | null): void
/**
 * Return the D-Bus address of IBus.
 * It will find the address from following source:
 * <orderedlist>
 *    <listitem><para>Environment variable IBUS_ADDRESS</para></listitem>
 *    <listitem><para>Socket file under ~/.config/ibus/bus/</para></listitem>
 * </orderedlist>
 * @returns D-Bus address of IBus. %NULL for not found. See also: ibus_write_address().
 */
function get_address(): string
/**
 * Get UID of ibus-daemon.
 * @returns UID of ibus-daemon; or 0 if UID is not available.
 */
function get_daemon_uid(): number
function get_language_name(_locale: string): string
/**
 * Obtains the machine UUID of the machine this process is running on.
 * @returns A newly allocated string that shows the UUID of the machine.
 */
function get_local_machine_id(): string
/**
 * Get the path of socket file.
 * @returns A newly allocated string that stores the path of socket file.
 */
function get_socket_path(): string
/**
 * Get the GDBus timeout in milliseconds. The timeout is for clients (e.g.
 * im-ibus.so), not for ibus-daemon.
 * Note that the timeout for ibus-daemon could be set by --timeout command
 * line option of the daemon.
 * @returns A GDBus timeout in milliseconds. -1 when default timeout for     GDBus should be used.
 */
function get_timeout(): number
function get_untranslated_language_name(_locale: string): string
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
function get_user_name(): string
/**
 * Initialize the ibus types.
 */
function init(): void
/**
 * Parse key event string and return key symbol and modifiers.
 * @param string Key event string.
 * @param keyval Variable that hold key symbol result.
 * @param modifiers Variable that hold modifiers result.
 * @returns %TRUE for succeed; %FALSE if failed.
 */
function key_event_from_string(string: string, keyval: number, modifiers: number): boolean
/**
 * Return the name of a key symbol and modifiers.
 * 
 * For example, if press ctrl, shift, and enter, then this function returns:
 * Shift+Control+enter.
 * @param keyval Key symbol.
 * @param modifiers Modifiers such as Ctrl or Shift.
 * @returns The name of a key symbol and modifier.
 */
function key_event_to_string(keyval: number, modifiers: number): string
/**
 * Obtains the upper- and lower-case versions of the keyval `symbol`.
 * Examples of keyvals are #IBUS_KEY_a, #IBUS_KEY_Return, #IBUS_KEY_F1, etc.
 * @param symbol a keyval
 */
function keyval_convert_case(symbol: number): [ /* lower */ number, /* upper */ number ]
/**
 * Return the key symbol that associate with the key name.
 * @param keyval_name Key name in #gdk_keys_by_name.
 * @returns Corresponding key symbol.
 */
function keyval_from_name(keyval_name: string): number
/**
 * Return the name of a key symbol.
 * 
 * Note that the returned string is used internally, so don't free it.
 * @param keyval Key symbol.
 * @returns Corresponding key name. %NULL if no such key symbol.
 */
function keyval_name(keyval: number): string
/**
 * Converts a key value to lower case, if applicable.
 * @param keyval a key value.
 * @returns the lower case form of @keyval, or @keyval itself if it is already  in lower case or it is not subject to case conversion.
 */
function keyval_to_lower(keyval: number): number
/**
 * Convert from an IBus key symbol to the corresponding ISO10646 (Unicode)
 * character.
 * @param keyval an IBus key symbol
 * @returns the corresponding unicode character, or 0 if there          is no corresponding character.
 */
function keyval_to_unicode(keyval: number): string
/**
 * Converts a key value to upper case, if applicable.
 * @param keyval a key value.
 * @returns the upper case form of @keyval, or @keyval itself if it is already   in upper case or it is not subject to case conversion.
 */
function keyval_to_upper(keyval: number): number
/**
 * Runs an IBus main loop until ibus_quit() is called in the loop.
 * 
 * See also: ibus_quit().
 */
function main(): void
/**
 * Stops an IBus from running.
 * 
 * Any calls to ibus_quit() for the loop will return.
 * See also: ibus_main().
 */
function quit(): void
/**
 * Set the display address.
 * @param display Display address, as in DISPLAY environment for X.
 */
function set_display(display: string): void
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
function set_log_handler(verbose: boolean): void
/**
 * Convert from a ISO10646 character to a key symbol.
 * @param wc a ISO10646 encoded character
 * @returns the corresponding IBus key symbol, if one exists.          or, if there is no corresponding symbol,          wc | 0x01000000
 */
function unicode_to_keyval(wc: string): number
/**
 * Remove the log handler which is set by ibus_set_log_handler.
 */
function unset_log_handler(): void
/**
 * Write D-Bus address to socket file.
 * 
 * See also: ibus_get_address().
 * @param address D-Bus address of IBus.
 */
function write_address(address: string): void
/**
 * Parse a string buffer which contains an XML-formatted string,
 * and return a corresponding XML tree.
 * @param buffer Buffer to be parsed.
 * @returns Root node of parsed XML tree.
 */
function xml_parse_buffer(buffer: string): XML
/**
 * Parse an XML file and return a corresponding XML tree.
 * @param name File name to be parsed.
 * @returns Root node of parsed XML tree.
 */
function xml_parse_file(name: string): XML
/**
 * Free function prototype.
 * @callback 
 * @param object object to be freed.
 */
interface FreeFunc {
    (object: any): void
}
interface ObjectDestroyFunc {
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
interface SerializableCopyFunc {
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
interface SerializableDeserializeFunc {
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
interface SerializableSerializeFunc {
    (serializable: Serializable, builder: GLib.VariantBuilder): boolean
}
module AttrList {

    // Constructor properties interface

    interface ConstructorProperties extends Serializable.ConstructorProperties {
    }

}

interface AttrList {

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

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Array of IBusAttribute.
 * @class 
 */
class AttrList extends Serializable {

    // Own properties of IBus-1.0.IBus.AttrList

    static name: string
    static $gtype: GObject.GType<AttrList>

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

module Attribute {

    // Constructor properties interface

    interface ConstructorProperties extends Serializable.ConstructorProperties {
    }

}

interface Attribute {

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
    start_index: number
    /**
     * The ending index, exclusive.
     * @field 
     */
    end_index: number

    // Owm methods of IBus-1.0.IBus.Attribute

    /**
     * Gets an enum of #IBusAttrType.
     * @returns An enum of #IBusAttrType.
     */
    get_attr_type(): number
    /**
     * Gets an end unsigned index
     * @returns A end unsigned index
     */
    get_end_index(): number
    /**
     * Gets a start unsigned index
     * @returns A start unsigned index
     */
    get_start_index(): number
    /**
     * Gets an unsigned int value relative with #IBusAttrType.
     * If the type is %IBUS_ATTR_TYPE_UNDERLINE, the return value is
     * #IBusAttrUnderline. If the type is %IBUS_ATTR_TYPE_FOREGROUND,
     * the return value is the color RGB.
     * @returns An unsigned int value relative with #IBusAttrType.
     */
    get_value(): number

    // Class property signals of IBus-1.0.IBus.Attribute

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An IBusAttribute represents an attribute that associate to IBusText.
 * It decorates preedit buffer and auxiliary text with underline, foreground
 * and background colors.
 * @class 
 */
class Attribute extends Serializable {

    // Own properties of IBus-1.0.IBus.Attribute

    static name: string
    static $gtype: GObject.GType<Attribute>

    // Constructors of IBus-1.0.IBus.Attribute

    constructor(config?: Attribute.ConstructorProperties) 
    /**
     * Creates a new IBusAttribute.
     * @constructor 
     * @param type Type of the attribute.
     * @param value Value of the attribute.
     * @param start_index Where attribute starts.
     * @param end_index Where attribute ends.
     * @returns A newly allocated IBusAttribute.
     */
    constructor(type: number, value: number, start_index: number, end_index: number) 
    /**
     * Creates a new IBusAttribute.
     * @constructor 
     * @param type Type of the attribute.
     * @param value Value of the attribute.
     * @param start_index Where attribute starts.
     * @param end_index Where attribute ends.
     * @returns A newly allocated IBusAttribute.
     */
    static new(type: number, value: number, start_index: number, end_index: number): Attribute

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

module Bus {

    // Signal callback interfaces

    /**
     * Signal callback interface for `connected`
     */
    interface ConnectedSignalCallback {
        ($obj: Bus): void
    }

    /**
     * Signal callback interface for `disconnected`
     */
    interface DisconnectedSignalCallback {
        ($obj: Bus): void
    }

    /**
     * Signal callback interface for `global-engine-changed`
     */
    interface GlobalEngineChangedSignalCallback {
        ($obj: Bus, name: string | null): void
    }

    /**
     * Signal callback interface for `name-owner-changed`
     */
    interface NameOwnerChangedSignalCallback {
        ($obj: Bus, name: string | null, old_owner: string | null, new_owner: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {

        // Own constructor properties of IBus-1.0.IBus.Bus

        /**
         * Whether the #IBusBus object should connect asynchronously to the bus.
         */
        connect_async?: boolean | null
        /**
         * Whether the #IBusBus object should connect asynchronously to the bus.
         */
        connectAsync?: boolean | null
    }

}

interface Bus {

    // Own properties of IBus-1.0.IBus.Bus

    /**
     * Whether the #IBusBus object should connect asynchronously to the bus.
     */
    readonly connect_async: boolean
    /**
     * Whether the #IBusBus object should connect asynchronously to the bus.
     */
    readonly connectAsync: boolean

    // Own fields of IBus-1.0.IBus.Bus

    parent: Object & GObject.InitiallyUnowned
    priv: any

    // Owm methods of IBus-1.0.IBus.Bus

    /**
     * Add a match rule to an #IBusBus synchronously.
     * @param rule Match rule.
     * @returns %TRUE if the rule is added. %FALSE otherwise.
     */
    add_match(rule: string): boolean
    /**
     * Add a match rule to an #IBusBus asynchronously.
     * @param rule Match rule.
     * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied      or %NULL if you don't care about the result of the method invocation.
     */
    add_match_async(rule: string, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with ibus_bus_add_match_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_add_match_async().
     * @returns %TRUE if the rule is added. %FALSE otherwise.
     */
    add_match_async_finish(res: Gio.AsyncResult): boolean
    /**
     * Create an input context for client synchronously.
     * @param client_name Name of client.      "CreateInputContext" call is suceeded, %NULL otherwise.
     * @returns An newly allocated #IBusInputContext if the
     */
    create_input_context(client_name: string): InputContext
    /**
     * Create an input context for client asynchronously.
     * @param client_name Name of client.
     * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.      It should not be %NULL.
     */
    create_input_context_async(client_name: string, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with ibus_bus_create_input_context_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_create_input_context_async().
     * @returns An newly allocated #IBusInputContext if the      "CreateInputContext" call is suceeded, %NULL otherwise.
     */
    create_input_context_async_finish(res: Gio.AsyncResult): InputContext
    /**
     * Get the current focused input context synchronously.
     * @returns The named of currently focued #IBusInputContext if the          "CurrentInputContext" call suceeded, %NULL otherwise. The return          value must be freed with g_free().
     */
    current_input_context(): string | null
    /**
     * Get the current focused input context asynchronously.
     * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied      or %NULL if you don't care about the result of the method invocation.
     */
    current_input_context_async(timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with ibus_bus_current_input_context_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_current_input_context_async().
     * @returns The named of currently focued IBusInputContext if the          "CurrentInputContext" call suceeded, %NULL otherwise. The return          value must be freed with g_free().
     */
    current_input_context_async_finish(res: Gio.AsyncResult): string | null
    /**
     * Exit or restart ibus-daemon synchronously.
     * @param restart Whether restarting the ibus.
     * @returns %TRUE if the "Exit" call is suceeded, %FALSE otherwise.
     */
    exit(restart: boolean): boolean
    /**
     * Exit or restart ibus-daemon asynchronously.
     * @param restart Whether restarting the ibus.
     * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied      or %NULL if you don't care about the result of the method invocation.
     */
    exit_async(restart: boolean, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with ibus_bus_exit_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_exit_async().
     * @returns %TRUE if the "Exit" call is suceeded, %FALSE otherwise.
     */
    exit_async_finish(res: Gio.AsyncResult): boolean
    /**
     * Get the config instance from #IBusBus.
     * @returns An #IBusConfig object which is configurable with @bus.
     */
    get_config(): Config
    /**
     * Gets a #GDBusConnection of an #IBusBus instance.
     * @returns A #GDBusConnection of an #IBusBus instance.
     */
    get_connection(): Gio.DBusConnection
    /**
     * Get engines by given names synchronously. If some engine names do not exist,
     * this function will simply ignore them, and return rest of engines.
     * TODO(penghuang): add asynchronous version
     * @param names A %NULL-terminated array of names.
     * @returns          A %NULL-terminated array of engines.
     */
    get_engines_by_names(names: string[]): EngineDesc[]
    /**
     * Get the description of current global engine synchronously.
     * @returns The description of current global engine, or %NULL if there is no global engine.
     */
    get_global_engine(): EngineDesc
    /**
     * Get the description of current global engine asynchronously.
     * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL      if you don't care about the result of the method invocation.
     */
    get_global_engine_async(timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with ibus_bus_get_global_engine_async_finish().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_get_global_engine_async_finish().
     * @returns The description of current global engine, or %NULL if there is no global engine.
     */
    get_global_engine_async_finish(res: Gio.AsyncResult): EngineDesc
    /**
     * Get org.freedesktop.DBus.Properties.
     * @param property_name property name in org.freedesktop.DBus.Properties.Get
     * @returns The value in org.freedesktop.DBus.Properties.Get           The returned value must be freed with g_variant_unref().
     */
    get_ibus_property(property_name: string): GLib.Variant
    /**
     * Get org.freedesktop.DBus.Properties asynchronously.
     * @param property_name property name in org.freedesktop.DBus.Properties.Get
     * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied      or %NULL if you don't care about the result of the method invocation.
     */
    get_ibus_property_async(property_name: string, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with ibus_bus_get_ibus_property_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_get_ibus_property_async().
     * @returns The value in org.freedesktop.DBus.Properties.Get           The returned value must be freed with g_variant_unref().
     */
    get_ibus_property_async_finish(res: Gio.AsyncResult): GLib.Variant
    /**
     * Return the name owner synchronously.
     * @param name Name.
     * @returns Owner of the name. The returned value must be freed with g_free().
     */
    get_name_owner(name: string): string | null
    /**
     * Return the name owner asynchronously.
     * @param name Name.
     * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied      or %NULL if you don't care about the result of the method invocation.
     */
    get_name_owner_async(name: string, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with ibus_bus_get_name_owner_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_get_name_owner_async().
     * @returns Owner of the name. The returned value must be freed with g_free().
     */
    get_name_owner_async_finish(res: Gio.AsyncResult): string | null
    /**
     * Check if the bus's "use_global_engine" option is enabled or not
     * synchronously.
     * @returns TRUE if "use_global_engine" option is enabled.
     */
    get_use_global_engine(): boolean
    /**
     * Check if the bus's "use_global_engine" option is enabled or not asynchronously.
     * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied      or %NULL if you don't care about the result of the method invocation.
     */
    get_use_global_engine_async(timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with ibus_bus_get_use_global_engine_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_get_use_global_engine_async().
     * @returns %TRUE if "use_global_engine" option is enabled.
     */
    get_use_global_engine_async_finish(res: Gio.AsyncResult): boolean
    /**
     * Check if the bus's "use_sys_layout" option is enabled or not synchronously.
     * @returns %TRUE if "use_sys_layout" option is enabled.
     */
    get_use_sys_layout(): boolean
    /**
     * Check if the bus's "use_sys_layout" option is enabled or not asynchronously.
     * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied      or %NULL if you don't care about the result of the method invocation.
     */
    get_use_sys_layout_async(timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with ibus_bus_get_use_sys_layout_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_get_use_sys_layout_async().
     * @returns TRUE if "use_sys_layout" option is enabled.
     */
    get_use_sys_layout_async_finish(res: Gio.AsyncResult): boolean
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
    is_connected(): boolean
    /**
     * Check if the current global engine is enabled or not synchronously.
     * @returns %TRUE if the current global engine is enabled.
     */
    is_global_engine_enabled(): boolean
    /**
     * Check if the current global engine is enabled or not asynchronously.
     * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied      or %NULL if you don't care about the result of the method invocation.
     */
    is_global_engine_enabled_async(timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with ibus_bus_is_global_engine_enabled_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_is_global_engine_enabled_async().
     * @returns %TRUE if the current global engine is enabled.
     */
    is_global_engine_enabled_async_finish(res: Gio.AsyncResult): boolean
    /**
     * List active engines synchronously.
     * @returns         A List of active engines.
     */
    list_active_engines(): EngineDesc[]
    /**
     * List active engines asynchronously.
     * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL      if you don't care about the result of the method invocation.
     */
    list_active_engines_async(timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with ibus_bus_list_active_engines_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_list_active_engines_async().
     * @returns          A List of active engines.
     */
    list_active_engines_async_finish(res: Gio.AsyncResult): EngineDesc[]
    /**
     * List engines synchronously.
     * @returns          A List of engines.
     */
    list_engines(): EngineDesc[]
    /**
     * List engines asynchronously.
     * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL      if you don't care about the result of the method invocation.
     */
    list_engines_async(timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with ibus_bus_list_engines_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_list_engines_async().
     * @returns          A List of engines.
     */
    list_engines_async_finish(res: Gio.AsyncResult): EngineDesc[]
    /**
     * Return lists that attached to `bus`.
     * <note><para>[FixMe] Not implemented yet, only return %NULL.</para></note>
     * <note><para>[FixMe] Add async version.</para></note>
     * @returns Lists that attached to @bus.
     */
    list_names(): string[]
    /**
     * Lists the unique bus names of connections currently queued for a bus name.
     * FIXME add an asynchronous version.
     * @param name Name to be queried.
     * @returns            The unique bus names of connections currently queued for @name.
     */
    list_queued_owners(name: string): string[]
    /**
     * Checks whether the name has owner synchronously.
     * @param name Name to be checked.
     * @returns %TRUE if the name has owner, %FALSE otherwise.
     */
    name_has_owner(name: string): boolean
    /**
     * Checks whether the name has owner asynchronously.
     * @param name Name to be checked.
     * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied      or %NULL if you don't care about the result of the method invocation.
     */
    name_has_owner_async(name: string, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with ibus_bus_name_has_owner_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_name_has_owner_async().
     * @returns %TRUE if the name has owner, %FALSE otherwise.
     */
    name_has_owner_async_finish(res: Gio.AsyncResult): boolean
    /**
     * Start bus components by engine names synchronously.
     * @param names A %NULL-terminated array of engine names.
     * @returns %TRUE if components start. %FALSE otherwise.
     */
    preload_engines(names: string[]): boolean
    /**
     * Start bus components by engine names asynchronously.
     * @param names A %NULL-terminated array of engine names.
     * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied      or %NULL if you don't care about the result of the method invocation.
     */
    preload_engines_async(names: string[], timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with ibus_bus_preload_engines_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_preload_engines_async().
     * @returns %TRUE if component starts. %FALSE otherwise.
     */
    preload_engines_async_finish(res: Gio.AsyncResult): boolean
    /**
     * Register a componet to an #IBusBus synchronously.
     * @param component A input engine component.
     * @returns %TRUE if the "RegisterComponent" call is suceeded, %FALSE otherwise.
     */
    register_component(component: Component): boolean
    /**
     * Register a componet to an #IBusBus asynchronously.
     * @param component A input engine component.
     * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied      or %NULL if you don't care about the result of the method invocation.
     */
    register_component_async(component: Component, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with ibus_bus_register_component_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_register_component_async().
     * @returns %TRUE if the "RegisterComponent" call is suceeded, %FALSE otherwise.
     */
    register_component_async_finish(res: Gio.AsyncResult): boolean
    /**
     * Release a name to IBus daemon synchronously.
     * @param name Name to be released.
     * @returns 0 if failed; positive number otherwise.
     */
    release_name(name: string): number
    /**
     * Release a name to IBus daemon asynchronously.
     * @param name Name to be released.
     * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied      or %NULL if you don't care about the result of the method invocation.
     */
    release_name_async(name: string, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with ibus_bus_release_name_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_release_name_async().
     * @returns 0 if failed; positive number otherwise.
     */
    release_name_async_finish(res: Gio.AsyncResult): number
    /**
     * Remove a match rule to an #IBusBus synchronously.
     * @param rule Match rule.
     * @returns %TRUE if the rule is removed. %FALSE otherwise.
     */
    remove_match(rule: string): boolean
    /**
     * Remove a match rule to an IBusBus asynchronously.
     * @param rule Match rule.
     * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied      or %NULL if you don't care about the result of the method invocation.
     */
    remove_match_async(rule: string, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with ibus_bus_remove_match_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_remove_match_async().
     * @returns %TRUE if the rule is removed. %FALSE otherwise.
     */
    remove_match_async_finish(res: Gio.AsyncResult): boolean
    /**
     * Request a name from IBus daemon synchronously.
     * @param name Name to be requested.
     * @param flags IBusBusNameFlag.
     * @returns 0 if failed; IBusBusRequestNameReply otherwise.
     */
    request_name(name: string, flags: number): number
    /**
     * Request a name from IBus daemon asynchronously.
     * @param name Name to be requested.
     * @param flags Flags (FixMe).
     * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL      if you don't care about the result of the method invocation.
     */
    request_name_async(name: string, flags: number, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with ibus_bus_request_name_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_request_name_async().
     * @returns 0 if failed; positive number otherwise.
     */
    request_name_async_finish(res: Gio.AsyncResult): number
    /**
     * Set current global engine synchronously.
     * @param global_engine A new engine name.
     * @returns %TRUE if the global engine was set successfully.
     */
    set_global_engine(global_engine: string): boolean
    /**
     * Set current global engine asynchronously.
     * @param global_engine A new engine name.
     * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied      or %NULL if you don't care about the result of the method invocation.
     */
    set_global_engine_async(global_engine: string, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with ibus_bus_set_global_engine_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_set_global_engine_async().
     * @returns %TRUE if no IPC errros. %FALSE otherwise.
     */
    set_global_engine_async_finish(res: Gio.AsyncResult): boolean
    /**
     * Set org.freedesktop.DBus.Properties.
     * @param property_name property name in org.freedesktop.DBus.Properties.Set
     * @param value value in org.freedesktop.DBus.Properties.Set
     */
    set_ibus_property(property_name: string, value: GLib.Variant): void
    /**
     * Set org.freedesktop.DBus.Properties asynchronously.
     * @param property_name property name in org.freedesktop.DBus.Properties.Set
     * @param value value in org.freedesktop.DBus.Properties.Set
     * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied      or %NULL if you don't care about the result of the method invocation.
     */
    set_ibus_property_async(property_name: string, value: GLib.Variant, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with ibus_bus_set_ibus_property_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_bus_set_ibus_property_async().
     * @returns %TRUE if property is set with async. %FALSE failed.
     */
    set_ibus_property_async_finish(res: Gio.AsyncResult): boolean
    /**
     * Start or stop watching the NameOwnerChanged DBus signal.
     * @param watch %TRUE if you want ibusbus to emit "name-owner-changed" signal when ibus-daemon emits the NameOwnerChanged DBus signal.
     */
    set_watch_dbus_signal(watch: boolean): void
    /**
     * Start or stop watching the GlobalEngineChanged IBus signal.
     * @param watch %TRUE if you want ibusbus to emit "global-engine-changed" signal when ibus-daemon emits the GlobalEngineChanged IBus signal.
     */
    set_watch_ibus_signal(watch: boolean): void

    // Own signals of IBus-1.0.IBus.Bus

    connect(sigName: "connected", callback: Bus.ConnectedSignalCallback): number
    connect_after(sigName: "connected", callback: Bus.ConnectedSignalCallback): number
    emit(sigName: "connected", ...args: any[]): void
    connect(sigName: "disconnected", callback: Bus.DisconnectedSignalCallback): number
    connect_after(sigName: "disconnected", callback: Bus.DisconnectedSignalCallback): number
    emit(sigName: "disconnected", ...args: any[]): void
    connect(sigName: "global-engine-changed", callback: Bus.GlobalEngineChangedSignalCallback): number
    connect_after(sigName: "global-engine-changed", callback: Bus.GlobalEngineChangedSignalCallback): number
    emit(sigName: "global-engine-changed", name: string | null, ...args: any[]): void
    connect(sigName: "name-owner-changed", callback: Bus.NameOwnerChangedSignalCallback): number
    connect_after(sigName: "name-owner-changed", callback: Bus.NameOwnerChangedSignalCallback): number
    emit(sigName: "name-owner-changed", name: string | null, old_owner: string | null, new_owner: string | null, ...args: any[]): void

    // Class property signals of IBus-1.0.IBus.Bus

    connect(sigName: "notify::connect-async", callback: (($obj: Bus, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connect-async", callback: (($obj: Bus, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connect-async", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An IBusBus connects with IBus daemon.
 * @class 
 */
class Bus extends Object {

    // Own properties of IBus-1.0.IBus.Bus

    static name: string
    static $gtype: GObject.GType<Bus>

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
    static new_async(): Bus
    _init(config?: Bus.ConstructorProperties): void
}

module Component {

    // Constructor properties interface

    interface ConstructorProperties extends Serializable.ConstructorProperties {

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
        /**
         * The exec path of component
         */
        commandLine?: string | null
    }

}

interface Component {

    // Own properties of IBus-1.0.IBus.Component

    /**
     * The author of component
     */
    readonly author: string | null
    /**
     * The exec path of component
     */
    readonly command_line: string | null
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

    // Owm methods of IBus-1.0.IBus.Component

    /**
     * Add an engine to #IBusComponent according to the description in `engine`.
     * @param engine A description of an engine.
     */
    add_engine(engine: EngineDesc): void
    /**
     * Add an observed path to #IBusComponent.
     * @param path Observed path to be added.
     * @param access_fs %TRUE for filling the file status; %FALSE otherwise.
     */
    add_observed_path(path: string, access_fs: boolean): void
    /**
     * Check whether the observed paths of component is modified.
     * @returns %TRUE if at least one of the observed paths is modified; %FALSE otherwise.
     */
    check_modification(): boolean
    /**
     * Gets the author property in #IBusComponent. It should not be freed.
     * @returns author property in #IBusComponent
     */
    get_author(): string
    /**
     * Gets the description property in #IBusComponent. It should not be freed.
     * @returns description property in #IBusComponent
     */
    get_description(): string
    /**
     * Gets the engines of this component.
     * @returns  A newly allocated GList that contains engines.
     */
    get_engines(): EngineDesc[]
    /**
     * Gets the exec property in #IBusComponent. It should not be freed.
     * @returns exec property in #IBusComponent
     */
    get_exec(): string
    /**
     * Gets the homepage property in #IBusComponent. It should not be freed.
     * @returns homepage property in #IBusComponent
     */
    get_homepage(): string
    /**
     * Gets the license property in #IBusComponent. It should not be freed.
     * @returns license property in #IBusComponent
     */
    get_license(): string
    /**
     * Gets the name property in #IBusComponent. It should not be freed.
     * @returns name property in #IBusComponent
     */
    get_name(): string
    /**
     * Gets the observed paths of this component.
     * @returns A newly allocated GList that contains observed paths.
     */
    get_observed_paths(): ObservedPath[]
    /**
     * Gets the textdomain property in #IBusComponent. It should not be freed.
     * @returns textdomain property in #IBusComponent
     */
    get_textdomain(): string
    /**
     * Gets the version property in #IBusComponent. It should not be freed.
     * @returns version property in #IBusComponent
     */
    get_version(): string
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
    output_engines(output: GLib.String, indent: number): void

    // Class property signals of IBus-1.0.IBus.Component

    connect(sigName: "notify::author", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::author", ...args: any[]): void
    connect(sigName: "notify::command-line", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::command-line", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::command-line", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::homepage", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homepage", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homepage", ...args: any[]): void
    connect(sigName: "notify::license", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::textdomain", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::textdomain", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::textdomain", ...args: any[]): void
    connect(sigName: "notify::version", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
class Component extends Serializable {

    // Own properties of IBus-1.0.IBus.Component

    static name: string
    static $gtype: GObject.GType<Component>

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
     * @param command_line path to component executable.
     * @param textdomain Domain name for dgettext()
     * @returns A newly allocated #IBusComponent.
     */
    constructor(name: string, description: string, version: string, license: string, author: string, homepage: string, command_line: string, textdomain: string) 
    /**
     * Creates a new #IBusComponent.
     * @constructor 
     * @param name Name of the component.
     * @param description Detailed description of component.
     * @param version Component version.
     * @param license Distribution license of this component.
     * @param author Author(s) of the component.
     * @param homepage Homepage of the component.
     * @param command_line path to component executable.
     * @param textdomain Domain name for dgettext()
     * @returns A newly allocated #IBusComponent.
     */
    static new(name: string, description: string, version: string, license: string, author: string, homepage: string, command_line: string, textdomain: string): Component

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
    static new_from_file(filename: string): Component
    /**
     * Creates a new #IBusComponent from an XML tree.
     * @constructor 
     * @param node Root node of component XML tree.
     * @returns A newly allocated #IBusComponent.
     */
    static new_from_xml_node(node: XML): Component
    _init(config?: Component.ConstructorProperties): void
}

module Config {

    // Signal callback interfaces

    /**
     * Signal callback interface for `value-changed`
     */
    interface ValueChangedSignalCallback {
        ($obj: Config, section: string | null, name: string | null, value: GLib.Variant): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Proxy.ConstructorProperties {
    }

}

interface Config extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

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
    get_value(section: string, name: string): GLib.Variant
    /**
     * Get the value of a configuration option asynchronously.
     * 
     * See also: ibus_config_get_value().
     * @param section Section name of the configuration option.
     * @param name Name of the configure option.
     * @param timeout_ms The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the return value is ready.
     */
    get_value_async(section: string, name: string, timeout_ms: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finish get value of a configuration option.
     * @param result A #GAsyncResult.
     * @returns A #GVariant or %NULL if error is set. Free with g_variant_unref(). See also: ibus_config_get_value_async().
     */
    get_value_async_finish(result: Gio.AsyncResult): GLib.Variant
    /**
     * Get all values in a section synchronously.
     * @param section Section name of the configuration option.
     * @returns A #GVariant or %NULL. Free with g_variant_unref(). See also: ibus_config_set_value().
     */
    get_values(section: string): GLib.Variant
    /**
     * Get all values in a section asynchronously.
     * 
     * See also: ibus_config_get_values().
     * @param section Section name of the configuration option.
     * @param timeout_ms The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the return value is ready.
     */
    get_values_async(section: string, timeout_ms: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finish get values in a section.
     * @param result A #GAsyncResult.
     * @returns A #GVariant or %NULL if error is set. Free with g_variant_unref(). See also: ibus_config_get_values_async().
     */
    get_values_async_finish(result: Gio.AsyncResult): GLib.Variant
    /**
     * Set the value of a configuration option synchronously.
     * @param section Section name of the configuration option.
     * @param name Name of the configure option its self.
     * @param value A #GVariant that holds the value. If the value is floating, the function takes ownership of it.
     * @returns %TRUE if succeed; %FALSE otherwise. See also: ibus_config_get_value().
     */
    set_value(section: string, name: string, value: GLib.Variant): boolean
    /**
     * Set the value of a configuration option asynchronously.
     * 
     * See also: ibus_config_set_value().
     * @param section Section name of the configuration option.
     * @param name Name of the configure option.
     * @param value A #GVariant that holds the value. If the value is floating, the function takes ownership of it.
     * @param timeout_ms The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the return value is ready.
     */
    set_value_async(section: string, name: string, value: GLib.Variant, timeout_ms: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finish set value of a configuration option.
     * @param result A #GAsyncResult.
     * @returns %TRUE or %FALSE if error is set. See also: ibus_config_set_value_async().
     */
    set_value_async_finish(result: Gio.AsyncResult): boolean
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
    connect_after(sigName: "value-changed", callback: Config.ValueChangedSignalCallback): number
    emit(sigName: "value-changed", section: string | null, name: string | null, value: GLib.Variant, ...args: any[]): void

    // Class property signals of IBus-1.0.IBus.Config

    connect(sigName: "notify::g-bus-type", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: Config, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
class Config extends Proxy {

    // Own properties of IBus-1.0.IBus.Config

    static name: string
    static $gtype: GObject.GType<Config>

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
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
    /**
     * Finishes an operation started with ibus_config_new_async().
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback pass to      ibus_config_new_async().
     * @returns A newly allocated #IBusConfig.
     */
    static new_async_finish(res: Gio.AsyncResult): Config
    _init(config?: Config.ConstructorProperties): void
    /**
     * New an #IBusConfig asynchronously.
     * @param connection An #GDBusConnection.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.      The callback should not be %NULL.
     */
    static new_async(connection: Gio.DBusConnection, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Config> | null): void
}

module ConfigService {

    // Constructor properties interface

    interface ConstructorProperties extends Service.ConstructorProperties {
    }

}

interface ConfigService {

    // Owm methods of IBus-1.0.IBus.ConfigService

    /**
     * Change a value of a configuration option
     * by sending a "ValueChanged" message to IBus service.
     * @param section Section name of the configuration option.
     * @param name Name of the configure option.
     * @param value GVariant that holds the value.
     */
    value_changed(section: string, name: string, value: GLib.Variant): void

    // Own virtual methods of IBus-1.0.IBus.ConfigService

    vfunc_get_value(section: string, name: string): GLib.Variant
    vfunc_get_values(section: string): GLib.Variant
    vfunc_set_value(section: string, name: string, value: GLib.Variant): boolean
    vfunc_unset_value(section: string, name: string): boolean

    // Class property signals of IBus-1.0.IBus.ConfigService

    connect(sigName: "notify::connection", callback: (($obj: ConfigService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: ConfigService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (($obj: ConfigService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: ConfigService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
class ConfigService extends Service {

    // Own properties of IBus-1.0.IBus.ConfigService

    static name: string
    static $gtype: GObject.GType<ConfigService>

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

module Engine {

    // Signal callback interfaces

    /**
     * Signal callback interface for `cancel-hand-writing`
     */
    interface CancelHandWritingSignalCallback {
        ($obj: Engine, n_strokes: number): void
    }

    /**
     * Signal callback interface for `candidate-clicked`
     */
    interface CandidateClickedSignalCallback {
        ($obj: Engine, index: number, button: number, state: number): void
    }

    /**
     * Signal callback interface for `cursor-down`
     */
    interface CursorDownSignalCallback {
        ($obj: Engine): void
    }

    /**
     * Signal callback interface for `cursor-up`
     */
    interface CursorUpSignalCallback {
        ($obj: Engine): void
    }

    /**
     * Signal callback interface for `disable`
     */
    interface DisableSignalCallback {
        ($obj: Engine): void
    }

    /**
     * Signal callback interface for `enable`
     */
    interface EnableSignalCallback {
        ($obj: Engine): void
    }

    /**
     * Signal callback interface for `focus-in`
     */
    interface FocusInSignalCallback {
        ($obj: Engine): void
    }

    /**
     * Signal callback interface for `focus-out`
     */
    interface FocusOutSignalCallback {
        ($obj: Engine): void
    }

    /**
     * Signal callback interface for `page-down`
     */
    interface PageDownSignalCallback {
        ($obj: Engine): void
    }

    /**
     * Signal callback interface for `page-up`
     */
    interface PageUpSignalCallback {
        ($obj: Engine): void
    }

    /**
     * Signal callback interface for `process-hand-writing-event`
     */
    interface ProcessHandWritingEventSignalCallback {
        ($obj: Engine, coordinates: any, coordinates_len: number): void
    }

    /**
     * Signal callback interface for `process-key-event`
     */
    interface ProcessKeyEventSignalCallback {
        ($obj: Engine, keyval: number, keycode: number, state: number): boolean
    }

    /**
     * Signal callback interface for `property-activate`
     */
    interface PropertyActivateSignalCallback {
        ($obj: Engine, name: string | null, state: number): void
    }

    /**
     * Signal callback interface for `property-hide`
     */
    interface PropertyHideSignalCallback {
        ($obj: Engine, name: string | null): void
    }

    /**
     * Signal callback interface for `property-show`
     */
    interface PropertyShowSignalCallback {
        ($obj: Engine, name: string | null): void
    }

    /**
     * Signal callback interface for `reset`
     */
    interface ResetSignalCallback {
        ($obj: Engine): void
    }

    /**
     * Signal callback interface for `set-capabilities`
     */
    interface SetCapabilitiesSignalCallback {
        ($obj: Engine, caps: number): void
    }

    /**
     * Signal callback interface for `set-content-type`
     */
    interface SetContentTypeSignalCallback {
        ($obj: Engine, purpose: number, hints: number): void
    }

    /**
     * Signal callback interface for `set-cursor-location`
     */
    interface SetCursorLocationSignalCallback {
        ($obj: Engine, x: number, y: number, w: number, h: number): void
    }

    /**
     * Signal callback interface for `set-surrounding-text`
     */
    interface SetSurroundingTextSignalCallback {
        ($obj: Engine, text: GObject.Object, cursor_pos: number, anchor_pos: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Service.ConstructorProperties {

        // Own constructor properties of IBus-1.0.IBus.Engine

        engine_name?: string | null
        engineName?: string | null
    }

}

interface Engine {

    // Own properties of IBus-1.0.IBus.Engine

    readonly engine_name: string | null
    readonly engineName: string | null

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
    has_focus: boolean
    /**
     * Area of cursor.
     * @field 
     */
    cursor_area: Rectangle
    /**
     * IBusCapabilite (client capabilities) flags.
     * @field 
     */
    client_capabilities: number

    // Owm methods of IBus-1.0.IBus.Engine

    /**
     * Commit output of input method to IBus client.
     * 
     * (Note: The text object will be released, if it is floating.
     *  If caller want to keep the object, caller should make the object
     *  sink by g_object_ref_sink.)
     * @param text String commit to IBusEngine.
     */
    commit_text(text: Text): void
    /**
     * Delete surrounding text.
     * @param offset The offset of the first char.
     * @param nchars Number of chars to be deleted.
     */
    delete_surrounding_text(offset: number, nchars: number): void
    /**
     * Forward the key event.
     * @param keyval KeySym.
     * @param keycode keyboard scancode.
     * @param state Key modifier flags.
     */
    forward_key_event(keyval: number, keycode: number, state: number): void
    /**
     * Get content-type (primary purpose and hints) of the current input
     * context.
     * 
     * See also: #IBusEngine::set-content-type
     */
    get_content_type(): [ /* purpose */ number, /* hints */ number ]
    /**
     * Return the name of #IBusEngine.
     * @returns Name of #IBusEngine.
     */
    get_name(): string
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
    get_surrounding_text(): [ /* text */ Text, /* cursor_pos */ number, /* anchor_pos */ number ]
    /**
     * Hide the auxiliary bar.
     */
    hide_auxiliary_text(): void
    /**
     * Hide the lookup table.
     */
    hide_lookup_table(): void
    /**
     * Hide the pre-edit buffer.
     */
    hide_preedit_text(): void
    /**
     * Register and show properties in language bar.
     * 
     * (Note: The prop_list object will be released, if it is floating.
     *  If caller want to keep the object, caller should make the object
     *  sink by g_object_ref_sink.)
     * @param prop_list Property List.
     */
    register_properties(prop_list: PropList): void
    /**
     * Show the auxiliary bar.
     */
    show_auxiliary_text(): void
    /**
     * Show the lookup table.
     */
    show_lookup_table(): void
    /**
     * Show the pre-edit buffer.
     */
    show_preedit_text(): void
    /**
     * Update the auxiliary bar.
     * 
     * (Note: The text object will be released, if it is floating.
     *  If caller want to keep the object, caller should make the object
     *  sink by g_object_ref_sink.)
     * @param text Update content.
     * @param visible Whether the auxiliary text bar is visible.
     */
    update_auxiliary_text(text: Text, visible: boolean): void
    /**
     * Update the lookup table.
     * 
     * (Note: The table object will be released, if it is floating.
     *  If caller want to keep the object, caller should make the object
     *  sink by g_object_ref_sink.)
     * @param lookup_table An lookup_table.
     * @param visible Whether the lookup_table is visible.
     */
    update_lookup_table(lookup_table: LookupTable, visible: boolean): void
    /**
     * Fast update for big lookup table.
     * 
     * If size of lookup table is not over table page size *4,
     * then it calls ibus_engine_update_lookup_table().
     * 
     * (Note: The table object will be released, if it is floating.
     *  If caller want to keep the object, caller should make the object
     *  sink by g_object_ref_sink.)
     * @param lookup_table An lookup_table.
     * @param visible Whether the lookup_table is visible.
     */
    update_lookup_table_fast(lookup_table: LookupTable, visible: boolean): void
    /**
     * Update the pre-edit buffer.
     * 
     * (Note: The text object will be released, if it is floating.
     *  If caller want to keep the object, caller should make the object
     *  sink by g_object_ref_sink.)
     * @param text Update content.
     * @param cursor_pos Current position of cursor
     * @param visible Whether the pre-edit buffer is visible.
     */
    update_preedit_text(text: Text, cursor_pos: number, visible: boolean): void
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
     * @param cursor_pos Current position of cursor
     * @param visible Whether the pre-edit buffer is visible.
     * @param mode Pre-edit commit mode when the focus is lost.
     */
    update_preedit_text_with_mode(text: Text, cursor_pos: number, visible: boolean, mode: PreeditFocusMode): void
    /**
     * Update the state displayed in language bar.
     * 
     * (Note: The prop object will be released, if it is floating.
     *  If caller want to keep the object, caller should make the object
     *  sink by g_object_ref_sink.)
     * @param prop IBusProperty to be updated.
     */
    update_property(prop: Property): void

    // Own virtual methods of IBus-1.0.IBus.Engine

    vfunc_cancel_hand_writing(n_strokes: number): void
    vfunc_candidate_clicked(index: number, button: number, state: number): void
    vfunc_cursor_down(): void
    vfunc_cursor_up(): void
    vfunc_disable(): void
    vfunc_enable(): void
    vfunc_focus_in(): void
    vfunc_focus_out(): void
    vfunc_page_down(): void
    vfunc_page_up(): void
    vfunc_process_hand_writing_event(coordinates: number, coordinates_len: number): void
    vfunc_process_key_event(keyval: number, keycode: number, state: number): boolean
    vfunc_property_activate(prop_name: string, prop_state: number): void
    vfunc_property_hide(prop_name: string): void
    vfunc_property_show(prop_name: string): void
    vfunc_reset(): void
    vfunc_set_capabilities(caps: number): void
    vfunc_set_content_type(purpose: number, hints: number): void
    vfunc_set_cursor_location(x: number, y: number, w: number, h: number): void
    vfunc_set_surrounding_text(text: Text, cursor_index: number, anchor_pos: number): void

    // Own signals of IBus-1.0.IBus.Engine

    connect(sigName: "cancel-hand-writing", callback: Engine.CancelHandWritingSignalCallback): number
    connect_after(sigName: "cancel-hand-writing", callback: Engine.CancelHandWritingSignalCallback): number
    emit(sigName: "cancel-hand-writing", n_strokes: number, ...args: any[]): void
    connect(sigName: "candidate-clicked", callback: Engine.CandidateClickedSignalCallback): number
    connect_after(sigName: "candidate-clicked", callback: Engine.CandidateClickedSignalCallback): number
    emit(sigName: "candidate-clicked", index: number, button: number, state: number, ...args: any[]): void
    connect(sigName: "cursor-down", callback: Engine.CursorDownSignalCallback): number
    connect_after(sigName: "cursor-down", callback: Engine.CursorDownSignalCallback): number
    emit(sigName: "cursor-down", ...args: any[]): void
    connect(sigName: "cursor-up", callback: Engine.CursorUpSignalCallback): number
    connect_after(sigName: "cursor-up", callback: Engine.CursorUpSignalCallback): number
    emit(sigName: "cursor-up", ...args: any[]): void
    connect(sigName: "disable", callback: Engine.DisableSignalCallback): number
    connect_after(sigName: "disable", callback: Engine.DisableSignalCallback): number
    emit(sigName: "disable", ...args: any[]): void
    connect(sigName: "enable", callback: Engine.EnableSignalCallback): number
    connect_after(sigName: "enable", callback: Engine.EnableSignalCallback): number
    emit(sigName: "enable", ...args: any[]): void
    connect(sigName: "focus-in", callback: Engine.FocusInSignalCallback): number
    connect_after(sigName: "focus-in", callback: Engine.FocusInSignalCallback): number
    emit(sigName: "focus-in", ...args: any[]): void
    connect(sigName: "focus-out", callback: Engine.FocusOutSignalCallback): number
    connect_after(sigName: "focus-out", callback: Engine.FocusOutSignalCallback): number
    emit(sigName: "focus-out", ...args: any[]): void
    connect(sigName: "page-down", callback: Engine.PageDownSignalCallback): number
    connect_after(sigName: "page-down", callback: Engine.PageDownSignalCallback): number
    emit(sigName: "page-down", ...args: any[]): void
    connect(sigName: "page-up", callback: Engine.PageUpSignalCallback): number
    connect_after(sigName: "page-up", callback: Engine.PageUpSignalCallback): number
    emit(sigName: "page-up", ...args: any[]): void
    connect(sigName: "process-hand-writing-event", callback: Engine.ProcessHandWritingEventSignalCallback): number
    connect_after(sigName: "process-hand-writing-event", callback: Engine.ProcessHandWritingEventSignalCallback): number
    emit(sigName: "process-hand-writing-event", coordinates: any, coordinates_len: number, ...args: any[]): void
    connect(sigName: "process-key-event", callback: Engine.ProcessKeyEventSignalCallback): number
    connect_after(sigName: "process-key-event", callback: Engine.ProcessKeyEventSignalCallback): number
    emit(sigName: "process-key-event", keyval: number, keycode: number, state: number, ...args: any[]): void
    connect(sigName: "property-activate", callback: Engine.PropertyActivateSignalCallback): number
    connect_after(sigName: "property-activate", callback: Engine.PropertyActivateSignalCallback): number
    emit(sigName: "property-activate", name: string | null, state: number, ...args: any[]): void
    connect(sigName: "property-hide", callback: Engine.PropertyHideSignalCallback): number
    connect_after(sigName: "property-hide", callback: Engine.PropertyHideSignalCallback): number
    emit(sigName: "property-hide", name: string | null, ...args: any[]): void
    connect(sigName: "property-show", callback: Engine.PropertyShowSignalCallback): number
    connect_after(sigName: "property-show", callback: Engine.PropertyShowSignalCallback): number
    emit(sigName: "property-show", name: string | null, ...args: any[]): void
    connect(sigName: "reset", callback: Engine.ResetSignalCallback): number
    connect_after(sigName: "reset", callback: Engine.ResetSignalCallback): number
    emit(sigName: "reset", ...args: any[]): void
    connect(sigName: "set-capabilities", callback: Engine.SetCapabilitiesSignalCallback): number
    connect_after(sigName: "set-capabilities", callback: Engine.SetCapabilitiesSignalCallback): number
    emit(sigName: "set-capabilities", caps: number, ...args: any[]): void
    connect(sigName: "set-content-type", callback: Engine.SetContentTypeSignalCallback): number
    connect_after(sigName: "set-content-type", callback: Engine.SetContentTypeSignalCallback): number
    emit(sigName: "set-content-type", purpose: number, hints: number, ...args: any[]): void
    connect(sigName: "set-cursor-location", callback: Engine.SetCursorLocationSignalCallback): number
    connect_after(sigName: "set-cursor-location", callback: Engine.SetCursorLocationSignalCallback): number
    emit(sigName: "set-cursor-location", x: number, y: number, w: number, h: number, ...args: any[]): void
    connect(sigName: "set-surrounding-text", callback: Engine.SetSurroundingTextSignalCallback): number
    connect_after(sigName: "set-surrounding-text", callback: Engine.SetSurroundingTextSignalCallback): number
    emit(sigName: "set-surrounding-text", text: GObject.Object, cursor_pos: number, anchor_pos: number, ...args: any[]): void

    // Class property signals of IBus-1.0.IBus.Engine

    connect(sigName: "notify::engine-name", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::engine-name", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::engine-name", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: Engine, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
class Engine extends Service {

    // Own properties of IBus-1.0.IBus.Engine

    static name: string
    static $gtype: GObject.GType<Engine>

    // Constructors of IBus-1.0.IBus.Engine

    constructor(config?: Engine.ConstructorProperties) 
    /**
     * Create a new #IBusEngine.
     * @constructor 
     * @param engine_name Name of the IBusObject.
     * @param object_path Path for IBusService.
     * @param connection An opened GDBusConnection.
     * @returns A newly allocated IBusEngine.
     */
    constructor(engine_name: string, object_path: string, connection: Gio.DBusConnection) 
    /**
     * Create a new #IBusEngine.
     * @constructor 
     * @param engine_name Name of the IBusObject.
     * @param object_path Path for IBusService.
     * @param connection An opened GDBusConnection.
     * @returns A newly allocated IBusEngine.
     */
    static new(engine_name: string, object_path: string, connection: Gio.DBusConnection): Engine

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
     * @param engine_type GType of #IBusEngine.
     * @param engine_name Name of the IBusObject.
     * @param object_path Path for IBusService.
     * @param connection An opened GDBusConnection.
     * @returns A newly allocated IBusEngine.
     */
    static new_with_type(engine_type: GObject.GType, engine_name: string, object_path: string, connection: Gio.DBusConnection): Engine
    _init(config?: Engine.ConstructorProperties): void
}

module EngineDesc {

    // Constructor properties interface

    interface ConstructorProperties extends Serializable.ConstructorProperties {

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
        /**
         * The key of IBusProperty to change panel icon dynamically.
         */
        iconPropKey?: string | null
        /**
         * The keyboard option of engine description
         */
        layoutOption?: string | null
        /**
         * The keyboard variant of engine description
         */
        layoutVariant?: string | null
    }

}

interface EngineDesc {

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
    readonly icon_prop_key: string | null
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
    readonly layout_option: string | null
    /**
     * The keyboard option of engine description
     */
    readonly layoutOption: string | null
    /**
     * The keyboard variant of engine description
     */
    readonly layout_variant: string | null
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

    // Own fields of IBus-1.0.IBus.EngineDesc

    parent: Serializable & GObject.InitiallyUnowned

    // Owm methods of IBus-1.0.IBus.EngineDesc

    /**
     * Gets the author property in IBusEngineDesc. It should not be freed.
     * @returns author property in IBusEngineDesc
     */
    get_author(): string
    /**
     * Gets the description property in IBusEngineDesc. It should not be freed.
     * @returns description property in IBusEngineDesc
     */
    get_description(): string
    /**
     * Gets the hotkeys property in IBusEngineDesc. It should not be freed.
     * @returns hotkeys property in IBusEngineDesc
     */
    get_hotkeys(): string
    /**
     * Gets the icon property in IBusEngineDesc. It should not be freed.
     * @returns icon property in IBusEngineDesc
     */
    get_icon(): string
    /**
     * Gets the key of IBusProperty to load the panel icon dynamically
     * in IBusEngineDesc. It should not be freed.
     * @returns IBusProperty.key for dynamic panel icon in IBusEngineDesc
     */
    get_icon_prop_key(): string
    /**
     * Gets the language property in IBusEngineDesc. It should not be freed.
     * @returns language property in IBusEngineDesc
     */
    get_language(): string
    /**
     * Gets the layout property in IBusEngineDesc. It should not be freed.
     * @returns layout property in IBusEngineDesc
     */
    get_layout(): string
    /**
     * Gets the keyboard option property in IBusEngineDesc. It should not be freed.
     * @returns keyboard option property in IBusEngineDesc
     */
    get_layout_option(): string
    /**
     * Gets the keyboard variant property in IBusEngineDesc. It should not be freed.
     * @returns keyboard variant property in IBusEngineDesc
     */
    get_layout_variant(): string
    /**
     * Gets the license property in IBusEngineDesc. It should not be freed.
     * @returns license property in IBusEngineDesc
     */
    get_license(): string
    /**
     * Gets the longname property in IBusEngineDesc. It should not be freed.
     * @returns longname property in IBusEngineDesc
     */
    get_longname(): string
    /**
     * Gets the name property in IBusEngineDesc. It should not be freed.
     * @returns name property in IBusEngineDesc
     */
    get_name(): string
    /**
     * Gets the rank property in IBusEngineDesc.
     * @returns rank property in IBusEngineDesc
     */
    get_rank(): number
    /**
     * Gets the setup property in IBusEngineDesc. It should not be freed.
     * @returns setup property in IBusEngineDesc
     */
    get_setup(): string
    /**
     * Gets the symbol property in IBusEngineDesc. It should not be freed.
     * @returns symbol property in IBusEngineDesc
     */
    get_symbol(): string
    /**
     * Gets the textdomain property in IBusEngineDesc. It should not be freed.
     * @returns textdomain in IBusEngineDesc
     */
    get_textdomain(): string
    /**
     * Gets the version property in IBusEngineDesc. It should not be freed.
     * @returns version in IBusEngineDesc
     */
    get_version(): string
    /**
     * Output XML-formatted input method engine description.
     * The result will be append to GString specified in `output`.
     * @param output XML-formatted Input method engine description.
     * @param indent Number of indent (showed as 4 spaces).
     */
    output(output: GLib.String, indent: number): void

    // Class property signals of IBus-1.0.IBus.EngineDesc

    connect(sigName: "notify::author", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::author", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::hotkeys", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hotkeys", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hotkeys", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::icon-prop-key", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-prop-key", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-prop-key", ...args: any[]): void
    connect(sigName: "notify::language", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::language", ...args: any[]): void
    connect(sigName: "notify::layout", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout", ...args: any[]): void
    connect(sigName: "notify::layout-option", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-option", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-option", ...args: any[]): void
    connect(sigName: "notify::layout-variant", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-variant", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-variant", ...args: any[]): void
    connect(sigName: "notify::license", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::longname", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longname", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::longname", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::rank", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rank", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rank", ...args: any[]): void
    connect(sigName: "notify::setup", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::setup", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::setup", ...args: any[]): void
    connect(sigName: "notify::symbol", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::symbol", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::symbol", ...args: any[]): void
    connect(sigName: "notify::textdomain", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::textdomain", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::textdomain", ...args: any[]): void
    connect(sigName: "notify::version", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: EngineDesc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
class EngineDesc extends Serializable {

    // Own properties of IBus-1.0.IBus.EngineDesc

    static name: string
    static $gtype: GObject.GType<EngineDesc>

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
    static new_from_xml_node(node: XML): EngineDesc
    _init(config?: EngineDesc.ConstructorProperties): void
}

module EngineSimple {

    // Constructor properties interface

    interface ConstructorProperties extends Engine.ConstructorProperties {
    }

}

interface EngineSimple {

    // Owm methods of IBus-1.0.IBus.EngineSimple

    /**
     * Call ibus_engine_simple_add_table() internally by locale.
     * @param file The compose file. If the `file` is %NULL,        the current locale is used.
     * @returns %TRUE if the @file is loaded.
     */
    add_compose_file(file: string): boolean
    /**
     * Adds an additional table to search to the engine. Each row of the table
     * consists of max_seq_len key symbols followed by two guint16 interpreted as
     * the high and low words of a gunicode value. Tables are searched starting from
     * the last added.
     * 
     * The table must be sorted in dictionary order on the numeric value of the key
     * symbol fields. (Values beyond the length of the sequence should be zero.)
     * @param data The table which must be available      during the whole life of the simple engine.
     * @param max_seq_len Maximum length of a swquence in the table (cannot be greater      than %IBUS_MAX_COMPOSE_LEN)
     * @param n_seqs number of sequences in the table
     */
    add_table(data: number[], max_seq_len: number, n_seqs: number): void
    /**
     * Call ibus_engine_simple_add_table() internally by locale.
     * @param locale The locale name. If the locale is %NULL,                        the current locale is used.
     * @returns %TRUE if the @locale is matched to the table.
     */
    add_table_by_locale(locale: string | null): boolean

    // Class property signals of IBus-1.0.IBus.EngineSimple

    connect(sigName: "notify::engine-name", callback: (($obj: EngineSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::engine-name", callback: (($obj: EngineSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::engine-name", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: EngineSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: EngineSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (($obj: EngineSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: EngineSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An IBusEngineSimple provides table-based input method logic.
 * 
 * see_also: #IBusEngine
 * @class 
 */
class EngineSimple extends Engine {

    // Own properties of IBus-1.0.IBus.EngineSimple

    static name: string
    static $gtype: GObject.GType<EngineSimple>

    // Constructors of IBus-1.0.IBus.EngineSimple

    constructor(config?: EngineSimple.ConstructorProperties) 
    _init(config?: EngineSimple.ConstructorProperties): void

    // Conflicting static methods

    static new(...args: any[]): any
}

module Factory {

    // Signal callback interfaces

    /**
     * Signal callback interface for `create-engine`
     */
    interface CreateEngineSignalCallback {
        ($obj: Factory, engine_name: string | null): Engine | null
    }


    // Constructor properties interface

    interface ConstructorProperties extends Service.ConstructorProperties {
    }

}

interface Factory {

    // Owm methods of IBus-1.0.IBus.Factory

    /**
     * Add an engine to the factory.
     * @param engine_name Name of an engine.
     * @param engine_type GType of an engine.
     */
    add_engine(engine_name: string, engine_type: GObject.GType): void
    /**
     * Creates an #IBusEngine with `engine_name`.
     * @param engine_name Name of an engine.
     * @returns #IBusEngine with @engine_name.
     */
    create_engine(engine_name: string): Engine

    // Own virtual methods of IBus-1.0.IBus.Factory

    /**
     * Creates an #IBusEngine with `engine_name`.
     * @virtual 
     * @param engine_name Name of an engine.
     * @returns #IBusEngine with @engine_name.
     */
    vfunc_create_engine(engine_name: string): Engine

    // Own signals of IBus-1.0.IBus.Factory

    connect(sigName: "create-engine", callback: Factory.CreateEngineSignalCallback): number
    connect_after(sigName: "create-engine", callback: Factory.CreateEngineSignalCallback): number
    emit(sigName: "create-engine", engine_name: string | null, ...args: any[]): void

    // Class property signals of IBus-1.0.IBus.Factory

    connect(sigName: "notify::connection", callback: (($obj: Factory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: Factory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (($obj: Factory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: Factory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
class Factory extends Service {

    // Own properties of IBus-1.0.IBus.Factory

    static name: string
    static $gtype: GObject.GType<Factory>

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

module HotkeyProfile {

    // Signal callback interfaces

    /**
     * Signal callback interface for `trigger`
     */
    interface TriggerSignalCallback {
        ($obj: HotkeyProfile, event: number, user_data: any): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Serializable.ConstructorProperties {
    }

}

interface HotkeyProfile {

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
    add_hotkey(keyval: number, modifiers: number, event: GLib.Quark): boolean
    /**
     * Adds a hotkey and its associated event to an #IBusHotkeyProfile.
     * The hotkey is in string format, such like
     * <constant>Control+Shift+A</constant>.
     * @param str Key in string representation.  '+' is the separator.
     * @param event The event to be associated.
     * @returns FALSE if @str contains invalid symbol; TRUE otherwise.
     */
    add_hotkey_from_string(str: string, event: GLib.Quark): boolean
    /**
     * Emits a <constant>::trigger</constant> signal when a hotkey is in a profile.
     * @param keyval Keycode of the hotkey.
     * @param modifiers Modifiers of the hotkey.
     * @param prev_keyval Keycode of the hotkey.
     * @param prev_modifiers Modifiers of the hotkey.
     * @param user_data user data for signal "trigger".
     * @returns 0 if releasing a hotkey and the hotkey is not in the profile; an associated event otherwise. See also: ::trigger
     */
    filter_key_event(keyval: number, modifiers: number, prev_keyval: number, prev_modifiers: number, user_data: any): GLib.Quark
    lookup_hotkey(keyval: number, modifiers: number): GLib.Quark
    /**
     * Removes the hotkey for an #IBusHotkeyProfile.
     * @param keyval Keycode of the hotkey.
     * @param modifiers Modifiers of the hotkey.
     * @returns %FALSE if the key is not in @profile, %TRUE otherwise.
     */
    remove_hotkey(keyval: number, modifiers: number): boolean
    /**
     * Removes the hotkey for an #IBusHotkeyProfile by event.
     * @param event The associated event.
     * @returns %FALSE if no such event in @profile, %TRUE otherwise.
     */
    remove_hotkey_by_event(event: GLib.Quark): boolean

    // Own virtual methods of IBus-1.0.IBus.HotkeyProfile

    vfunc_trigger(event: GLib.Quark): void

    // Own signals of IBus-1.0.IBus.HotkeyProfile

    connect(sigName: "trigger", callback: HotkeyProfile.TriggerSignalCallback): number
    connect_after(sigName: "trigger", callback: HotkeyProfile.TriggerSignalCallback): number
    emit(sigName: "trigger", event: number, user_data: any, ...args: any[]): void

    // Class property signals of IBus-1.0.IBus.HotkeyProfile

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An opaque data type representing an IBusHotkeyProfile.
 * @class 
 */
class HotkeyProfile extends Serializable {

    // Own properties of IBus-1.0.IBus.HotkeyProfile

    static name: string
    static $gtype: GObject.GType<HotkeyProfile>

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

module InputContext {

    // Signal callback interfaces

    /**
     * Signal callback interface for `commit-text`
     */
    interface CommitTextSignalCallback {
        ($obj: InputContext, text: Text): void
    }

    /**
     * Signal callback interface for `cursor-down-lookup-table`
     */
    interface CursorDownLookupTableSignalCallback {
        ($obj: InputContext): void
    }

    /**
     * Signal callback interface for `cursor-up-lookup-table`
     */
    interface CursorUpLookupTableSignalCallback {
        ($obj: InputContext): void
    }

    /**
     * Signal callback interface for `delete-surrounding-text`
     */
    interface DeleteSurroundingTextSignalCallback {
        ($obj: InputContext, offset: number, n_chars: number): void
    }

    /**
     * Signal callback interface for `disabled`
     */
    interface DisabledSignalCallback {
        ($obj: InputContext): void
    }

    /**
     * Signal callback interface for `enabled`
     */
    interface EnabledSignalCallback {
        ($obj: InputContext): void
    }

    /**
     * Signal callback interface for `forward-key-event`
     */
    interface ForwardKeyEventSignalCallback {
        ($obj: InputContext, keyval: number, keycode: number, modifiers: number): void
    }

    /**
     * Signal callback interface for `hide-auxiliary-text`
     */
    interface HideAuxiliaryTextSignalCallback {
        ($obj: InputContext): void
    }

    /**
     * Signal callback interface for `hide-lookup-table`
     */
    interface HideLookupTableSignalCallback {
        ($obj: InputContext): void
    }

    /**
     * Signal callback interface for `hide-preedit-text`
     */
    interface HidePreeditTextSignalCallback {
        ($obj: InputContext): void
    }

    /**
     * Signal callback interface for `page-down-lookup-table`
     */
    interface PageDownLookupTableSignalCallback {
        ($obj: InputContext): void
    }

    /**
     * Signal callback interface for `page-up-lookup-table`
     */
    interface PageUpLookupTableSignalCallback {
        ($obj: InputContext): void
    }

    /**
     * Signal callback interface for `register-properties`
     */
    interface RegisterPropertiesSignalCallback {
        ($obj: InputContext, props: PropList): void
    }

    /**
     * Signal callback interface for `show-auxiliary-text`
     */
    interface ShowAuxiliaryTextSignalCallback {
        ($obj: InputContext): void
    }

    /**
     * Signal callback interface for `show-lookup-table`
     */
    interface ShowLookupTableSignalCallback {
        ($obj: InputContext): void
    }

    /**
     * Signal callback interface for `show-preedit-text`
     */
    interface ShowPreeditTextSignalCallback {
        ($obj: InputContext): void
    }

    /**
     * Signal callback interface for `update-auxiliary-text`
     */
    interface UpdateAuxiliaryTextSignalCallback {
        ($obj: InputContext, text: Text, visible: boolean): void
    }

    /**
     * Signal callback interface for `update-lookup-table`
     */
    interface UpdateLookupTableSignalCallback {
        ($obj: InputContext, table: LookupTable, visible: boolean): void
    }

    /**
     * Signal callback interface for `update-preedit-text`
     */
    interface UpdatePreeditTextSignalCallback {
        ($obj: InputContext, text: Text, cursor_pos: number, visible: boolean): void
    }

    /**
     * Signal callback interface for `update-property`
     */
    interface UpdatePropertySignalCallback {
        ($obj: InputContext, prop: Property): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Proxy.ConstructorProperties {
    }

}

interface InputContext extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Own fields of IBus-1.0.IBus.InputContext

    parent: Proxy & Gio.DBusProxy

    // Owm methods of IBus-1.0.IBus.InputContext

    /**
     * Clear handwriting stroke(s) in the current input method engine.
     * 
     * see_also: #IBusEngine::cancel-hand-writing
     * @param n_strokes The number of strokes to be removed. Pass 0 to remove all.
     */
    cancel_hand_writing(n_strokes: number): void
    /**
     * Invoked when the client application get focus. An asynchronous IPC will
     * be performed.
     * 
     * see_also: #IBusEngine::focus_in.
     */
    focus_in(): void
    /**
     * Invoked when the client application get focus. An asynchronous IPC will be performed.
     * 
     * see_also: #IBusEngine::focus_out.
     */
    focus_out(): void
    /**
     * Gets an IME engine description for the context.
     * A synchronous IPC will be performed.
     * @returns An IME engine description for the context, or NULL.
     */
    get_engine(): EngineDesc
    /**
     * An asynchronous IPC will be performed.
     * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or     %NULL if you don't care about the result of the method invocation.
     */
    get_engine_async(timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with ibus_input_context_get_engine_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to   ibus_input_context_get_engine_async().
     * @returns An IME engine description for the context, or     %NULL.
     */
    get_engine_async_finish(res: Gio.AsyncResult): EngineDesc
    /**
     * Check whether the current engine requires surrounding-text.
     * @returns %TRUE if surrounding-text is needed by the current engine; %FALSE otherwise.
     */
    needs_surrounding_text(): boolean
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
     * @param coordinates_len The number of elements in the array. The number should be even and >= 4.
     */
    process_hand_writing_event(coordinates: number, coordinates_len: number): void
    /**
     * Pass the key event to input method engine and wait for the reply from
     * ibus (i.e. synchronous IPC).
     * @param keyval Key symbol of a key event.
     * @param keycode Keycode of a key event.
     * @param state Key modifier flags.
     * @returns %TRUE for successfully process the key; %FALSE otherwise. See also: ibus_input_context_process_key_event_async()
     */
    process_key_event(keyval: number, keycode: number, state: number): boolean
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
     * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
     * @param cancellable A GCancellable or NULL.
     * @param callback A GAsyncReadyCallback to call when the request is satisfied or NULL      if you don't care about the result of the method invocation.
     */
    process_key_event_async(keyval: number, keycode: number, state: number, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with
     *      ibus_input_context_process_key_event_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to      ibus_input_context_process_key_event_async().
     * @returns %TRUE if the key event is processed;      %FALSE otherwise or some errors happen and the @error will be set.
     */
    process_key_event_async_finish(res: Gio.AsyncResult): boolean
    /**
     * Activate the property asynchronously.
     * 
     * See also: #IBusEngine::property_activate
     * @param prop_name A property name (e.g. "InputMode.WideLatin")
     * @param state A status of the property (e.g. PROP_STATE_CHECKED)
     */
    property_activate(prop_name: string, state: number): void
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
    set_capabilities(capabilities: number): void
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
    set_content_type(purpose: number, hints: number): void
    /**
     * Set the cursor location of IBus input context asynchronously.
     * 
     * see_also: #IBusEngine::set-cursor-location
     * @param x X coordinate of the cursor.
     * @param y Y coordinate of the cursor.
     * @param w Width of the cursor.
     * @param h Height of the cursor.
     */
    set_cursor_location(x: number, y: number, w: number, h: number): void
    /**
     * Invoked when the IME engine is changed.
     * An asynchronous IPC will be performed.
     * @param name A name of the engine.
     */
    set_engine(name: string): void
    set_surrounding_text(text: Text, cursor_pos: number, anchor_pos: number): void

    // Own signals of IBus-1.0.IBus.InputContext

    connect(sigName: "commit-text", callback: InputContext.CommitTextSignalCallback): number
    connect_after(sigName: "commit-text", callback: InputContext.CommitTextSignalCallback): number
    emit(sigName: "commit-text", text: Text, ...args: any[]): void
    connect(sigName: "cursor-down-lookup-table", callback: InputContext.CursorDownLookupTableSignalCallback): number
    connect_after(sigName: "cursor-down-lookup-table", callback: InputContext.CursorDownLookupTableSignalCallback): number
    emit(sigName: "cursor-down-lookup-table", ...args: any[]): void
    connect(sigName: "cursor-up-lookup-table", callback: InputContext.CursorUpLookupTableSignalCallback): number
    connect_after(sigName: "cursor-up-lookup-table", callback: InputContext.CursorUpLookupTableSignalCallback): number
    emit(sigName: "cursor-up-lookup-table", ...args: any[]): void
    connect(sigName: "delete-surrounding-text", callback: InputContext.DeleteSurroundingTextSignalCallback): number
    connect_after(sigName: "delete-surrounding-text", callback: InputContext.DeleteSurroundingTextSignalCallback): number
    emit(sigName: "delete-surrounding-text", offset: number, n_chars: number, ...args: any[]): void
    connect(sigName: "disabled", callback: InputContext.DisabledSignalCallback): number
    connect_after(sigName: "disabled", callback: InputContext.DisabledSignalCallback): number
    emit(sigName: "disabled", ...args: any[]): void
    connect(sigName: "enabled", callback: InputContext.EnabledSignalCallback): number
    connect_after(sigName: "enabled", callback: InputContext.EnabledSignalCallback): number
    emit(sigName: "enabled", ...args: any[]): void
    connect(sigName: "forward-key-event", callback: InputContext.ForwardKeyEventSignalCallback): number
    connect_after(sigName: "forward-key-event", callback: InputContext.ForwardKeyEventSignalCallback): number
    emit(sigName: "forward-key-event", keyval: number, keycode: number, modifiers: number, ...args: any[]): void
    connect(sigName: "hide-auxiliary-text", callback: InputContext.HideAuxiliaryTextSignalCallback): number
    connect_after(sigName: "hide-auxiliary-text", callback: InputContext.HideAuxiliaryTextSignalCallback): number
    emit(sigName: "hide-auxiliary-text", ...args: any[]): void
    connect(sigName: "hide-lookup-table", callback: InputContext.HideLookupTableSignalCallback): number
    connect_after(sigName: "hide-lookup-table", callback: InputContext.HideLookupTableSignalCallback): number
    emit(sigName: "hide-lookup-table", ...args: any[]): void
    connect(sigName: "hide-preedit-text", callback: InputContext.HidePreeditTextSignalCallback): number
    connect_after(sigName: "hide-preedit-text", callback: InputContext.HidePreeditTextSignalCallback): number
    emit(sigName: "hide-preedit-text", ...args: any[]): void
    connect(sigName: "page-down-lookup-table", callback: InputContext.PageDownLookupTableSignalCallback): number
    connect_after(sigName: "page-down-lookup-table", callback: InputContext.PageDownLookupTableSignalCallback): number
    emit(sigName: "page-down-lookup-table", ...args: any[]): void
    connect(sigName: "page-up-lookup-table", callback: InputContext.PageUpLookupTableSignalCallback): number
    connect_after(sigName: "page-up-lookup-table", callback: InputContext.PageUpLookupTableSignalCallback): number
    emit(sigName: "page-up-lookup-table", ...args: any[]): void
    connect(sigName: "register-properties", callback: InputContext.RegisterPropertiesSignalCallback): number
    connect_after(sigName: "register-properties", callback: InputContext.RegisterPropertiesSignalCallback): number
    emit(sigName: "register-properties", props: PropList, ...args: any[]): void
    connect(sigName: "show-auxiliary-text", callback: InputContext.ShowAuxiliaryTextSignalCallback): number
    connect_after(sigName: "show-auxiliary-text", callback: InputContext.ShowAuxiliaryTextSignalCallback): number
    emit(sigName: "show-auxiliary-text", ...args: any[]): void
    connect(sigName: "show-lookup-table", callback: InputContext.ShowLookupTableSignalCallback): number
    connect_after(sigName: "show-lookup-table", callback: InputContext.ShowLookupTableSignalCallback): number
    emit(sigName: "show-lookup-table", ...args: any[]): void
    connect(sigName: "show-preedit-text", callback: InputContext.ShowPreeditTextSignalCallback): number
    connect_after(sigName: "show-preedit-text", callback: InputContext.ShowPreeditTextSignalCallback): number
    emit(sigName: "show-preedit-text", ...args: any[]): void
    connect(sigName: "update-auxiliary-text", callback: InputContext.UpdateAuxiliaryTextSignalCallback): number
    connect_after(sigName: "update-auxiliary-text", callback: InputContext.UpdateAuxiliaryTextSignalCallback): number
    emit(sigName: "update-auxiliary-text", text: Text, visible: boolean, ...args: any[]): void
    connect(sigName: "update-lookup-table", callback: InputContext.UpdateLookupTableSignalCallback): number
    connect_after(sigName: "update-lookup-table", callback: InputContext.UpdateLookupTableSignalCallback): number
    emit(sigName: "update-lookup-table", table: LookupTable, visible: boolean, ...args: any[]): void
    connect(sigName: "update-preedit-text", callback: InputContext.UpdatePreeditTextSignalCallback): number
    connect_after(sigName: "update-preedit-text", callback: InputContext.UpdatePreeditTextSignalCallback): number
    emit(sigName: "update-preedit-text", text: Text, cursor_pos: number, visible: boolean, ...args: any[]): void
    connect(sigName: "update-property", callback: InputContext.UpdatePropertySignalCallback): number
    connect_after(sigName: "update-property", callback: InputContext.UpdatePropertySignalCallback): number
    emit(sigName: "update-property", prop: Property, ...args: any[]): void

    // Class property signals of IBus-1.0.IBus.InputContext

    connect(sigName: "notify::g-bus-type", callback: (($obj: InputContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: InputContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: InputContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: InputContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: InputContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: InputContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: InputContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: InputContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: InputContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: InputContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: InputContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: InputContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: InputContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: InputContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: InputContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: InputContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: InputContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: InputContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
class InputContext extends Proxy {

    // Own properties of IBus-1.0.IBus.InputContext

    static name: string
    static $gtype: GObject.GType<InputContext>

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
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
    /**
     * Finishes an operation started with ibus_input_context_new_async().
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback pass to      ibus_input_context_new_async().
     * @returns A newly allocated #IBusInputContext.
     */
    static new_async_finish(res: Gio.AsyncResult): InputContext
    _init(config?: InputContext.ConstructorProperties): void
    /**
     * Creates a new #IBusInputContext asynchronously.
     * @param path The path to the object that emitting the signal.
     * @param connection A #GDBusConnection.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.      The callback should not be %NULL.
     */
    static new_async(path: string, connection: Gio.DBusConnection, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<InputContext> | null): void
    /**
     * Gets an existing IBusInputContext.
     * @param path The path to the object that emitting the signal.
     * @param connection A GDBusConnection.
     * @returns An existing #IBusInputContext.
     */
    static get_input_context(path: string, connection: Gio.DBusConnection): InputContext
    /**
     * Gets an existing #IBusInputContext asynchronously.
     * @param path The path to the object that emitting the signal.
     * @param connection A #GDBusConnection.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.      The callback should not be %NULL.
     */
    static get_input_context_async(path: string, connection: Gio.DBusConnection, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<InputContext> | null): void
    /**
     * Finishes an operation started with
     * ibus_input_context_get_input_context_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback pass to      ibus_input_context_get_input_context_async().
     * @returns An existing #IBusInputContext.
     */
    static get_input_context_async_finish(res: Gio.AsyncResult): InputContext
}

module Keymap {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface Keymap {

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
    lookup_keysym(keycode: number, state: number): number

    // Class property signals of IBus-1.0.IBus.Keymap

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
class Keymap extends Object {

    // Own properties of IBus-1.0.IBus.Keymap

    static name: string
    static $gtype: GObject.GType<Keymap>

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

module LookupTable {

    // Constructor properties interface

    interface ConstructorProperties extends Serializable.ConstructorProperties {
    }

}

interface LookupTable {

    // Own fields of IBus-1.0.IBus.LookupTable

    parent: Serializable & GObject.InitiallyUnowned
    /**
     * number of candidate shown per page.
     * @field 
     */
    page_size: number
    /**
     * position index of cursor.
     * @field 
     */
    cursor_pos: number
    /**
     * whether the cursor is visible.
     * @field 
     */
    cursor_visible: boolean
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
    append_candidate(text: Text): void
    /**
     * Append a candidate word/phrase to IBusLookupTable, and increase reference.
     * This function is needed if the input method select candidate with
     * non-numeric keys such as "asdfghjkl;".
     * @param text A candidate label to be appended (in IBusText format).
     */
    append_label(text: Text): void
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
    cursor_down(): boolean
    /**
     * Go to previous candidate of an #IBusLookupTable.
     * 
     * It returns FALSE if it is already at the first candidate,
     * unless  <code>table&gt;-round==TRUE</code>, where it will go
     * to the last candidate.
     * @returns %TRUE if succeed.
     */
    cursor_up(): boolean
    /**
     * Return #IBusText at the given index. Borrowed reference.
     * @param index Index in the Lookup table.
     * @returns IBusText at the given index; NULL if no such         #IBusText.
     */
    get_candidate(index: number): Text
    /**
     * Gets the cursor position in current page of #IBusLookupTable.
     * @returns The position of cursor in current page.
     */
    get_cursor_in_page(): number
    /**
     * Gets the cursor position of #IBusLookupTable.
     * @returns The position of cursor.
     */
    get_cursor_pos(): number
    /**
     * Return #IBusText at the given index. Borrowed reference.
     * @param index Index in the Lookup table.
     * @returns #IBusText at the given index; %NULL if no such         #IBusText.
     */
    get_label(index: number): Text
    /**
     * Return the number of candidate in the table.
     * @returns The number of candidates in the table
     */
    get_number_of_candidates(): number
    /**
     * Returns the orientation of the #IBusLookupTable.
     * @returns The orientation of the @table.
     */
    get_orientation(): number
    /**
     * Gets the number of candidate shown per page.
     * @returns Page size, i.e., number of candidate shown per page. dd
     */
    get_page_size(): number
    /**
     * Returns whether the cursor of an #IBusLookupTable is visible.
     * @returns Whether the cursor of @table is visible.
     */
    is_cursor_visible(): boolean
    /**
     * Returns whether the #IBusLookupTable is round.
     * @returns Whether the @table is round.
     */
    is_round(): boolean
    /**
     * Go to next page of an #IBusLookupTable.
     * 
     * It returns FALSE if it is already at the last page,
     * unless  <code>table&gt;-round==TRUE</code>, where it will go
     * to the first page.
     * @returns %TRUE if succeed.
     */
    page_down(): boolean
    /**
     * Go to previous page of an #IBusLookupTable.
     * 
     * It returns FALSE if it is already at the first page,
     * unless  <code>table&gt;-round==TRUE</code>, where it will go
     * to the last page.
     * @returns %TRUE if succeed.
     */
    page_up(): boolean
    /**
     * Set the cursor position of IBusLookupTable.
     * @param cursor_pos The position of cursor.
     */
    set_cursor_pos(cursor_pos: number): void
    /**
     * Set whether to make the cursor of an IBusLookupTable visible or not.
     * @param visible Whether to make the cursor of `table` visible.
     */
    set_cursor_visible(visible: boolean): void
    /**
     * Append a candidate word/phrase to IBusLookupTable, and increase reference.
     * This function is needed if the input method select candidate with
     * non-numeric keys such as "asdfghjkl;".
     * @param index Intex in the Lookup table.
     * @param text A candidate label to be appended (in IBusText format).
     */
    set_label(index: number, text: Text): void
    /**
     * Set the orientation.
     * @param orientation .
     */
    set_orientation(orientation: number): void
    /**
     * Set the number of candidate shown per page.
     * @param page_size number of candidate shown per page.
     */
    set_page_size(page_size: number): void
    /**
     * Set whether to make the IBusLookupTable round or not.
     * @param round Whether to make `table` round.
     */
    set_round(round: boolean): void

    // Class property signals of IBus-1.0.IBus.LookupTable

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
class LookupTable extends Serializable {

    // Own properties of IBus-1.0.IBus.LookupTable

    static name: string
    static $gtype: GObject.GType<LookupTable>

    // Constructors of IBus-1.0.IBus.LookupTable

    constructor(config?: LookupTable.ConstructorProperties) 
    /**
     * Craetes a new #IBusLookupTable.
     * @constructor 
     * @param page_size number of candidate shown per page, the max value is 16.
     * @param cursor_pos position index of cursor.
     * @param cursor_visible whether the cursor is visible.
     * @param round TRUE for lookup table wrap around.
     * @returns A newly allocated #IBusLookupTable.
     */
    constructor(page_size: number, cursor_pos: number, cursor_visible: boolean, round: boolean) 
    /**
     * Craetes a new #IBusLookupTable.
     * @constructor 
     * @param page_size number of candidate shown per page, the max value is 16.
     * @param cursor_pos position index of cursor.
     * @param cursor_visible whether the cursor is visible.
     * @param round TRUE for lookup table wrap around.
     * @returns A newly allocated #IBusLookupTable.
     */
    static new(page_size: number, cursor_pos: number, cursor_visible: boolean, round: boolean): LookupTable

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

module Object {

    // Signal callback interfaces

    /**
     * Signal callback interface for `destroy`
     */
    interface DestroySignalCallback {
        ($obj: Object): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
    }

}

interface Object {

    // Own fields of IBus-1.0.IBus.Object

    parent: GObject.InitiallyUnowned
    flags: number
    priv: ObjectPrivate

    // Owm methods of IBus-1.0.IBus.Object

    /**
     * Emit the "destory" signal notifying all reference holders that they should
     * release the #IBusObject.
     * 
     * The memory for the object itself won't be deleted until its reference count
     * actually drops to 0; ibus_object_destroy merely asks reference holders to
     * release their references. It does not free the object.
     */
    destroy(): void

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
    vfunc_destroy(): void

    // Own signals of IBus-1.0.IBus.Object

    connect(sigName: "destroy", callback: Object.DestroySignalCallback): number
    connect_after(sigName: "destroy", callback: Object.DestroySignalCallback): number
    emit(sigName: "destroy", ...args: any[]): void

    // Class property signals of IBus-1.0.IBus.Object

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * IBusObject is the base object for all objects in IBus.
 * @class 
 */
class Object extends GObject.InitiallyUnowned {

    // Own properties of IBus-1.0.IBus.Object

    static name: string
    static $gtype: GObject.GType<Object>

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

module ObservedPath {

    // Constructor properties interface

    interface ConstructorProperties extends Serializable.ConstructorProperties {
    }

}

interface ObservedPath {

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
    is_dir: boolean
    /**
     * Whether the file exists.
     * @field 
     */
    is_exist: boolean

    // Owm methods of IBus-1.0.IBus.ObservedPath

    /**
     * Checks whether the path is modified by comparing the mtime in object and
     * mtime in file system.
     * @returns %TRUE if imtime is changed, otherwise %FALSE.
     */
    check_modification(): boolean
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
     * @param dir_only Only looks for subdirs, not files
     * @returns A newly allocate GList which holds content in path; NULL if @path is not directory.
     */
    traverse(dir_only: boolean): ObservedPath[]

    // Class property signals of IBus-1.0.IBus.ObservedPath

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * IBusObservedPath provides methods for file path manipulation,
 * such as monitor modification, directory tree traversal.
 * @class 
 */
class ObservedPath extends Serializable {

    // Own properties of IBus-1.0.IBus.ObservedPath

    static name: string
    static $gtype: GObject.GType<ObservedPath>

    // Constructors of IBus-1.0.IBus.ObservedPath

    constructor(config?: ObservedPath.ConstructorProperties) 
    /**
     * Creates a new #IBusObservedPath from an XML node.
     * @constructor 
     * @param path The path string.
     * @param fill_stat Auto-fill the path status.
     * @returns A newly allocated #IBusObservedPath.
     */
    constructor(path: string, fill_stat: boolean) 
    /**
     * Creates a new #IBusObservedPath from an XML node.
     * @constructor 
     * @param path The path string.
     * @param fill_stat Auto-fill the path status.
     * @returns A newly allocated #IBusObservedPath.
     */
    static new(path: string, fill_stat: boolean): ObservedPath

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
     * @param fill_stat Auto-fill the path status.
     * @returns A newly allocated #IBusObservedPath.
     */
    static new_from_xml_node(node: XML, fill_stat: boolean): ObservedPath
    _init(config?: ObservedPath.ConstructorProperties): void
}

module PanelService {

    // Signal callback interfaces

    /**
     * Signal callback interface for `cursor-down-lookup-table`
     */
    interface CursorDownLookupTableSignalCallback {
        ($obj: PanelService): void
    }

    /**
     * Signal callback interface for `cursor-up-lookup-table`
     */
    interface CursorUpLookupTableSignalCallback {
        ($obj: PanelService): void
    }

    /**
     * Signal callback interface for `destroy-context`
     */
    interface DestroyContextSignalCallback {
        ($obj: PanelService, input_context_path: string | null): void
    }

    /**
     * Signal callback interface for `focus-in`
     */
    interface FocusInSignalCallback {
        ($obj: PanelService, input_context_path: string | null): void
    }

    /**
     * Signal callback interface for `focus-out`
     */
    interface FocusOutSignalCallback {
        ($obj: PanelService, input_context_path: string | null): void
    }

    /**
     * Signal callback interface for `hide-auxiliary-text`
     */
    interface HideAuxiliaryTextSignalCallback {
        ($obj: PanelService): void
    }

    /**
     * Signal callback interface for `hide-language-bar`
     */
    interface HideLanguageBarSignalCallback {
        ($obj: PanelService): void
    }

    /**
     * Signal callback interface for `hide-lookup-table`
     */
    interface HideLookupTableSignalCallback {
        ($obj: PanelService): void
    }

    /**
     * Signal callback interface for `hide-preedit-text`
     */
    interface HidePreeditTextSignalCallback {
        ($obj: PanelService): void
    }

    /**
     * Signal callback interface for `page-down-lookup-table`
     */
    interface PageDownLookupTableSignalCallback {
        ($obj: PanelService): void
    }

    /**
     * Signal callback interface for `page-up-lookup-table`
     */
    interface PageUpLookupTableSignalCallback {
        ($obj: PanelService): void
    }

    /**
     * Signal callback interface for `register-properties`
     */
    interface RegisterPropertiesSignalCallback {
        ($obj: PanelService, prop_list: PropList): void
    }

    /**
     * Signal callback interface for `reset`
     */
    interface ResetSignalCallback {
        ($obj: PanelService): void
    }

    /**
     * Signal callback interface for `set-content-type`
     */
    interface SetContentTypeSignalCallback {
        ($obj: PanelService, purpose: number, hints: number): void
    }

    /**
     * Signal callback interface for `set-cursor-location`
     */
    interface SetCursorLocationSignalCallback {
        ($obj: PanelService, x: number, y: number, w: number, h: number): void
    }

    /**
     * Signal callback interface for `show-auxiliary-text`
     */
    interface ShowAuxiliaryTextSignalCallback {
        ($obj: PanelService): void
    }

    /**
     * Signal callback interface for `show-language-bar`
     */
    interface ShowLanguageBarSignalCallback {
        ($obj: PanelService): void
    }

    /**
     * Signal callback interface for `show-lookup-table`
     */
    interface ShowLookupTableSignalCallback {
        ($obj: PanelService): void
    }

    /**
     * Signal callback interface for `show-preedit-text`
     */
    interface ShowPreeditTextSignalCallback {
        ($obj: PanelService): void
    }

    /**
     * Signal callback interface for `start-setup`
     */
    interface StartSetupSignalCallback {
        ($obj: PanelService): void
    }

    /**
     * Signal callback interface for `state-changed`
     */
    interface StateChangedSignalCallback {
        ($obj: PanelService): void
    }

    /**
     * Signal callback interface for `update-auxiliary-text`
     */
    interface UpdateAuxiliaryTextSignalCallback {
        ($obj: PanelService, text: Text, visible: boolean): void
    }

    /**
     * Signal callback interface for `update-lookup-table`
     */
    interface UpdateLookupTableSignalCallback {
        ($obj: PanelService, lookup_table: LookupTable, visible: boolean): void
    }

    /**
     * Signal callback interface for `update-preedit-text`
     */
    interface UpdatePreeditTextSignalCallback {
        ($obj: PanelService, text: Text, cursor_pos: number, visible: boolean): void
    }

    /**
     * Signal callback interface for `update-property`
     */
    interface UpdatePropertySignalCallback {
        ($obj: PanelService, prop: Property): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Service.ConstructorProperties {
    }

}

interface PanelService {

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
    candidate_clicked(index: number, button: number, state: number): void
    /**
     * Notify that the cursor is down
     * by sending a "CursorDown" to IBus service.
     */
    cursor_down(): void
    /**
     * Notify that the cursor is up
     * by sending a "CursorUp" to IBus service.
     */
    cursor_up(): void
    /**
     * Notify that the page is down
     * by sending a "PageDown" to IBus service.
     */
    page_down(): void
    /**
     * Notify that the page is up
     * by sending a "PageUp" to IBus service.
     */
    page_up(): void
    /**
     * Notify that a property is active
     * by sending a "PropertyActivate" message to IBus service.
     * @param prop_name A property name
     * @param prop_state State of the property
     */
    property_activate(prop_name: string, prop_state: number): void
    /**
     * Notify that a property is hidden
     * by sending a "ValueChanged" message to IBus service.
     * @param prop_name A property name
     */
    property_hide(prop_name: string): void
    /**
     * Notify that a property is shown
     * by sending a "ValueChanged" message to IBus service.
     * @param prop_name A property name
     */
    property_show(prop_name: string): void

    // Own virtual methods of IBus-1.0.IBus.PanelService

    vfunc_cursor_down_lookup_table(): void
    vfunc_cursor_up_lookup_table(): void
    vfunc_destroy_context(input_context_path: string): void
    vfunc_focus_in(input_context_path: string): void
    vfunc_focus_out(input_context_path: string): void
    vfunc_hide_auxiliary_text(): void
    vfunc_hide_language_bar(): void
    vfunc_hide_lookup_table(): void
    vfunc_hide_preedit_text(): void
    vfunc_page_down_lookup_table(): void
    vfunc_page_up_lookup_table(): void
    vfunc_register_properties(prop_list: PropList): void
    vfunc_reset(): void
    vfunc_set_content_type(purpose: number, hints: number): void
    vfunc_set_cursor_location(x: number, y: number, w: number, h: number): void
    vfunc_show_auxiliary_text(): void
    vfunc_show_language_bar(): void
    vfunc_show_lookup_table(): void
    vfunc_show_preedit_text(): void
    vfunc_start_setup(): void
    vfunc_state_changed(): void
    vfunc_update_auxiliary_text(text: Text, visible: boolean): void
    vfunc_update_lookup_table(lookup_table: LookupTable, visible: boolean): void
    vfunc_update_preedit_text(text: Text, cursor_pos: number, visible: boolean): void
    vfunc_update_property(prop: Property): void

    // Own signals of IBus-1.0.IBus.PanelService

    connect(sigName: "cursor-down-lookup-table", callback: PanelService.CursorDownLookupTableSignalCallback): number
    connect_after(sigName: "cursor-down-lookup-table", callback: PanelService.CursorDownLookupTableSignalCallback): number
    emit(sigName: "cursor-down-lookup-table", ...args: any[]): void
    connect(sigName: "cursor-up-lookup-table", callback: PanelService.CursorUpLookupTableSignalCallback): number
    connect_after(sigName: "cursor-up-lookup-table", callback: PanelService.CursorUpLookupTableSignalCallback): number
    emit(sigName: "cursor-up-lookup-table", ...args: any[]): void
    connect(sigName: "destroy-context", callback: PanelService.DestroyContextSignalCallback): number
    connect_after(sigName: "destroy-context", callback: PanelService.DestroyContextSignalCallback): number
    emit(sigName: "destroy-context", input_context_path: string | null, ...args: any[]): void
    connect(sigName: "focus-in", callback: PanelService.FocusInSignalCallback): number
    connect_after(sigName: "focus-in", callback: PanelService.FocusInSignalCallback): number
    emit(sigName: "focus-in", input_context_path: string | null, ...args: any[]): void
    connect(sigName: "focus-out", callback: PanelService.FocusOutSignalCallback): number
    connect_after(sigName: "focus-out", callback: PanelService.FocusOutSignalCallback): number
    emit(sigName: "focus-out", input_context_path: string | null, ...args: any[]): void
    connect(sigName: "hide-auxiliary-text", callback: PanelService.HideAuxiliaryTextSignalCallback): number
    connect_after(sigName: "hide-auxiliary-text", callback: PanelService.HideAuxiliaryTextSignalCallback): number
    emit(sigName: "hide-auxiliary-text", ...args: any[]): void
    connect(sigName: "hide-language-bar", callback: PanelService.HideLanguageBarSignalCallback): number
    connect_after(sigName: "hide-language-bar", callback: PanelService.HideLanguageBarSignalCallback): number
    emit(sigName: "hide-language-bar", ...args: any[]): void
    connect(sigName: "hide-lookup-table", callback: PanelService.HideLookupTableSignalCallback): number
    connect_after(sigName: "hide-lookup-table", callback: PanelService.HideLookupTableSignalCallback): number
    emit(sigName: "hide-lookup-table", ...args: any[]): void
    connect(sigName: "hide-preedit-text", callback: PanelService.HidePreeditTextSignalCallback): number
    connect_after(sigName: "hide-preedit-text", callback: PanelService.HidePreeditTextSignalCallback): number
    emit(sigName: "hide-preedit-text", ...args: any[]): void
    connect(sigName: "page-down-lookup-table", callback: PanelService.PageDownLookupTableSignalCallback): number
    connect_after(sigName: "page-down-lookup-table", callback: PanelService.PageDownLookupTableSignalCallback): number
    emit(sigName: "page-down-lookup-table", ...args: any[]): void
    connect(sigName: "page-up-lookup-table", callback: PanelService.PageUpLookupTableSignalCallback): number
    connect_after(sigName: "page-up-lookup-table", callback: PanelService.PageUpLookupTableSignalCallback): number
    emit(sigName: "page-up-lookup-table", ...args: any[]): void
    connect(sigName: "register-properties", callback: PanelService.RegisterPropertiesSignalCallback): number
    connect_after(sigName: "register-properties", callback: PanelService.RegisterPropertiesSignalCallback): number
    emit(sigName: "register-properties", prop_list: PropList, ...args: any[]): void
    connect(sigName: "reset", callback: PanelService.ResetSignalCallback): number
    connect_after(sigName: "reset", callback: PanelService.ResetSignalCallback): number
    emit(sigName: "reset", ...args: any[]): void
    connect(sigName: "set-content-type", callback: PanelService.SetContentTypeSignalCallback): number
    connect_after(sigName: "set-content-type", callback: PanelService.SetContentTypeSignalCallback): number
    emit(sigName: "set-content-type", purpose: number, hints: number, ...args: any[]): void
    connect(sigName: "set-cursor-location", callback: PanelService.SetCursorLocationSignalCallback): number
    connect_after(sigName: "set-cursor-location", callback: PanelService.SetCursorLocationSignalCallback): number
    emit(sigName: "set-cursor-location", x: number, y: number, w: number, h: number, ...args: any[]): void
    connect(sigName: "show-auxiliary-text", callback: PanelService.ShowAuxiliaryTextSignalCallback): number
    connect_after(sigName: "show-auxiliary-text", callback: PanelService.ShowAuxiliaryTextSignalCallback): number
    emit(sigName: "show-auxiliary-text", ...args: any[]): void
    connect(sigName: "show-language-bar", callback: PanelService.ShowLanguageBarSignalCallback): number
    connect_after(sigName: "show-language-bar", callback: PanelService.ShowLanguageBarSignalCallback): number
    emit(sigName: "show-language-bar", ...args: any[]): void
    connect(sigName: "show-lookup-table", callback: PanelService.ShowLookupTableSignalCallback): number
    connect_after(sigName: "show-lookup-table", callback: PanelService.ShowLookupTableSignalCallback): number
    emit(sigName: "show-lookup-table", ...args: any[]): void
    connect(sigName: "show-preedit-text", callback: PanelService.ShowPreeditTextSignalCallback): number
    connect_after(sigName: "show-preedit-text", callback: PanelService.ShowPreeditTextSignalCallback): number
    emit(sigName: "show-preedit-text", ...args: any[]): void
    connect(sigName: "start-setup", callback: PanelService.StartSetupSignalCallback): number
    connect_after(sigName: "start-setup", callback: PanelService.StartSetupSignalCallback): number
    emit(sigName: "start-setup", ...args: any[]): void
    connect(sigName: "state-changed", callback: PanelService.StateChangedSignalCallback): number
    connect_after(sigName: "state-changed", callback: PanelService.StateChangedSignalCallback): number
    emit(sigName: "state-changed", ...args: any[]): void
    connect(sigName: "update-auxiliary-text", callback: PanelService.UpdateAuxiliaryTextSignalCallback): number
    connect_after(sigName: "update-auxiliary-text", callback: PanelService.UpdateAuxiliaryTextSignalCallback): number
    emit(sigName: "update-auxiliary-text", text: Text, visible: boolean, ...args: any[]): void
    connect(sigName: "update-lookup-table", callback: PanelService.UpdateLookupTableSignalCallback): number
    connect_after(sigName: "update-lookup-table", callback: PanelService.UpdateLookupTableSignalCallback): number
    emit(sigName: "update-lookup-table", lookup_table: LookupTable, visible: boolean, ...args: any[]): void
    connect(sigName: "update-preedit-text", callback: PanelService.UpdatePreeditTextSignalCallback): number
    connect_after(sigName: "update-preedit-text", callback: PanelService.UpdatePreeditTextSignalCallback): number
    emit(sigName: "update-preedit-text", text: Text, cursor_pos: number, visible: boolean, ...args: any[]): void
    connect(sigName: "update-property", callback: PanelService.UpdatePropertySignalCallback): number
    connect_after(sigName: "update-property", callback: PanelService.UpdatePropertySignalCallback): number
    emit(sigName: "update-property", prop: Property, ...args: any[]): void

    // Class property signals of IBus-1.0.IBus.PanelService

    connect(sigName: "notify::connection", callback: (($obj: PanelService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: PanelService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (($obj: PanelService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: PanelService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An IBusPanelService is a base class for UI services.
 * Developers can "extend" this class for panel UI development.
 * @class 
 */
class PanelService extends Service {

    // Own properties of IBus-1.0.IBus.PanelService

    static name: string
    static $gtype: GObject.GType<PanelService>

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

module PropList {

    // Constructor properties interface

    interface ConstructorProperties extends Serializable.ConstructorProperties {
    }

}

interface PropList {

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
    update_property(prop: Property): boolean

    // Class property signals of IBus-1.0.IBus.PropList

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * See_also: #IBusProperty, #IBusEngine
 * @class 
 */
class PropList extends Serializable {

    // Own properties of IBus-1.0.IBus.PropList

    static name: string
    static $gtype: GObject.GType<PropList>

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

module Property {

    // Constructor properties interface

    interface ConstructorProperties extends Serializable.ConstructorProperties {

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
        propType?: PropType | null
        subProps?: PropList | null
    }

}

interface Property {

    // Own properties of IBus-1.0.IBus.Property

    icon: string | null
    readonly key: string | null
    label: Text
    readonly prop_type: PropType
    readonly propType: PropType
    sensitive: boolean
    state: PropState
    sub_props: PropList
    subProps: PropList
    symbol: Text
    tooltip: Text
    visible: boolean

    // Owm methods of IBus-1.0.IBus.Property

    /**
     * Get the icon of #IBusProperty.
     * @returns the icon of #IBusProperty. Should not be freed.
     */
    get_icon(): string
    /**
     * Get the key of #IBusProperty.
     * @returns the key of #IBusProperty. Should not be freed.
     */
    get_key(): string
    /**
     * Get the label of #IBusProperty.
     * @returns the label of #IBusProperty. Should not be freed.
     */
    get_label(): Text
    get_prop_type(): PropType
    /**
     * Get the sensitive of #IBusProperty.
     * @returns the sensitive of #IBusProperty.
     */
    get_sensitive(): boolean
    /**
     * Get the state of #IBusProperty.
     * @returns the state of #IBusProperty.
     */
    get_state(): PropState
    /**
     * Get the IBusPropList of #IBusProperty.
     * @returns the IBusPropList of #IBusProperty.     Should not be freed.
     */
    get_sub_props(): PropList
    /**
     * Get the symbol of #IBusProperty.
     * @returns the symbol of #IBusProperty. Should not be freed.
     */
    get_symbol(): Text
    /**
     * Get the tooltip of #IBusProperty.
     * @returns the tooltip of #IBusProperty. Should not be freed.
     */
    get_tooltip(): Text
    /**
     * Get the visible of #IBusProperty.
     * @returns the visible of #IBusProperty.
     */
    get_visible(): boolean
    /**
     * Set the icon of #IBusProperty.
     * @param icon Icon shown in UI. It could be a full path of an icon file or an icon name.
     */
    set_icon(icon: string): void
    /**
     * Set the label of #IBusProperty.
     * @param label Text shown in UI.
     */
    set_label(label: Text): void
    /**
     * Set whether the #IBusProperty is sensitive.
     * @param sensitive Whether the #IBusProperty is sensitive.
     */
    set_sensitive(sensitive: boolean): void
    /**
     * Set the state of the #IBusProperty.
     * @param state The state of the #IBusProperty.
     */
    set_state(state: PropState): void
    /**
     * Set the sub IBusProperties.
     * @param prop_list #IBusPropList that contains sub IBusProperties.
     */
    set_sub_props(prop_list: PropList): void
    /**
     * Set the symbol of #IBusProperty.
     * @param symbol Text shown in UI.
     */
    set_symbol(symbol: Text): void
    /**
     * Set the tooltip of #IBusProperty.
     * @param tooltip Text of the tooltip.
     */
    set_tooltip(tooltip: Text): void
    /**
     * Set whether the #IBusProperty is visible.
     * @param visible Whether the #IBusProperty is visible.
     */
    set_visible(visible: boolean): void
    /**
     * Update the content of an #IBusProperty.
     * #IBusProperty `prop_update` can either be sub-property of `prop,`
     * or holds new values for `prop`.
     * @param prop_update #IBusPropList that contains sub IBusProperties.
     * @returns TRUE for update suceeded; FALSE otherwise.
     */
    update(prop_update: Property): boolean

    // Class property signals of IBus-1.0.IBus.Property

    connect(sigName: "notify::icon", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::key", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::key", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::prop-type", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prop-type", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prop-type", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::sub-props", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sub-props", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sub-props", ...args: any[]): void
    connect(sigName: "notify::symbol", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::symbol", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::symbol", ...args: any[]): void
    connect(sigName: "notify::tooltip", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Property, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
class Property extends Serializable {

    // Own properties of IBus-1.0.IBus.Property

    static name: string
    static $gtype: GObject.GType<Property>

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
     * @param prop_list #IBusPropList that contains sub IBusProperties.
     * @returns A newly allocated #IBusProperty.
     */
    constructor(key: string, type: PropType, label: Text, icon: string | null, tooltip: Text, sensitive: boolean, visible: boolean, state: PropState, prop_list: PropList | null) 
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
     * @param prop_list #IBusPropList that contains sub IBusProperties.
     * @returns A newly allocated #IBusProperty.
     */
    static new(key: string, type: PropType, label: Text, icon: string | null, tooltip: Text, sensitive: boolean, visible: boolean, state: PropState, prop_list: PropList | null): Property

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

module Proxy {

    // Signal callback interfaces

    /**
     * Signal callback interface for `destroy`
     */
    interface DestroySignalCallback {
        ($obj: Proxy): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface Proxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Own fields of IBus-1.0.IBus.Proxy

    parent: Gio.DBusProxy
    flags: number
    own: boolean

    // Owm methods of IBus-1.0.IBus.Proxy

    /**
     * Dispose the proxy object. If the dbus connection is alive and the own
     * variable above is TRUE (which is the default),
     * org.freedesktop.IBus.Service.Destroy method will be called.
     * Note that "destroy" signal might be emitted when ibus_proxy_destroy is
     * called or the underlying dbus connection for the proxy is terminated.
     * In the callback of the destroy signal, you might have to call something
     * like 'g_object_unref(the_proxy);'.
     */
    destroy(): void

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
    vfunc_destroy(): void

    // Own signals of IBus-1.0.IBus.Proxy

    connect(sigName: "destroy", callback: Proxy.DestroySignalCallback): number
    connect_after(sigName: "destroy", callback: Proxy.DestroySignalCallback): number
    emit(sigName: "destroy", ...args: any[]): void

    // Class property signals of IBus-1.0.IBus.Proxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: Proxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
class Proxy extends Gio.DBusProxy {

    // Own properties of IBus-1.0.IBus.Proxy

    static name: string
    static $gtype: GObject.GType<Proxy>

    // Constructors of IBus-1.0.IBus.Proxy

    constructor(config?: Proxy.ConstructorProperties) 
    _init(config?: Proxy.ConstructorProperties): void
}

module Registry {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        ($obj: Registry): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Serializable.ConstructorProperties {
    }

}

interface Registry {

    // Owm methods of IBus-1.0.IBus.Registry

    /**
     * Check if the registry is updated.
     * @returns %TRUE if mtime is changed; %FALSE otherwise.
     */
    check_modification(): boolean
    /**
     * List components.
     * @returns  a list of #IBusComponent objects. The caller has to call g_list_free() for the returned list.
     */
    get_components(): Component[]
    /**
     * List observed paths.
     * @returns  a list of #IBusObservedPath objects. The caller has to call g_list_free() for the returned list.
     */
    get_observed_paths(): ObservedPath[]
    /**
     * Read all XML files in a IBus component directory (typically
     * /usr/share/ibus/component/ *.xml) and update the registry object.
     * IBUS_COMPONENT_PATH environment valuable is also available for
     * the custom component directories, whose delimiter is ':'.
     */
    load(): void
    /**
     * Load the user or system registry cache.
     * @param is_user %TRUE if the registry cache is loaded in the user directory.
     * @returns %TRUE if the cache exists and is loaded successfully,           %FALSE otherwise.
     */
    load_cache(is_user: boolean): boolean
    /**
     * Load the registry cache `filename`.
     * @param filename The file path of the registry cache
     * @returns %TRUE if the cache exists and is loaded successfully,           %FALSE otherwise.
     */
    load_cache_file(filename: string): boolean
    /**
     * Read all XML files in `dirname,` create a #IBusComponent object for each file,
     * and add the component objects to the registry.
     * If `dirname` is "/usr/share/ibus/component", this API and
     * ibus_registry_load() are same.
     * @param dirname IBus component directory which includes XML files.
     */
    load_in_dir(dirname: string): void
    /**
     * Output #IBusRegistry as an XML-formatted string.
     * The output string can be then shown on the screen or written to file.
     * @param output GString that holds the result.
     * @param indent level of indent.
     */
    output(output: GLib.String, indent: number): void
    /**
     * Save the registry in a user directory or system directory.
     * @param is_user %TRUE if the registry cache is saved in the user directory.
     * @returns %TRUE if the cache is saved successfully, %FALSE otherwise.
     */
    save_cache(is_user: boolean): boolean
    /**
     * Save the registry cache `filename`.
     * @param filename The file path of the registry cache
     * @returns %TRUE if the cache is saved successfully, %FALSE otherwise.
     */
    save_cache_file(filename: string): boolean
    /**
     * Start to monitor observed paths.
     */
    start_monitor_changes(): void

    // Own signals of IBus-1.0.IBus.Registry

    connect(sigName: "changed", callback: Registry.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Registry.ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of IBus-1.0.IBus.Registry

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An #IBusRegistry loads IBus component files and generates the cache files.
 * 
 * see_also: #IBusComponent
 * @class 
 */
class Registry extends Serializable {

    // Own properties of IBus-1.0.IBus.Registry

    static name: string
    static $gtype: GObject.GType<Registry>

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

module Serializable {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface Serializable {

    // Owm methods of IBus-1.0.IBus.Serializable

    /**
     * Clone an #IBusSerializable.
     * The copy method should be implemented in extended class.
     * @returns A newly allocated clone object; or %NULL     if @object is not serializable. See also: IBusSerializableCopyFunc().
     */
    copy(): Serializable
    /**
     * Gets a value from attachment of an #IBusSerializable.
     * @param key String formatted key for indexing value.
     * @returns The attached value; or %NULL if fail to retrieve the value. See also: ibus_serializable_set_attachment().
     */
    get_qattachment(key: GLib.Quark): GLib.Variant
    /**
     * Remove a value from attachment of an #IBusSerializable.
     * See also: ibus_serializable_remove_attachment().
     * @param key String formatted key for indexing value.
     */
    remove_qattachment(key: GLib.Quark): void
    /**
     * Serialize an #IBusSerializable to a #GVariant.
     * The serialize method should be implemented in extended class.
     * @returns A #GVariant. See also: IBusSerializableCopyFunc().
     */
    serialize(): GLib.Variant
    /**
     * Attach a value to an #IBusSerializable. If the value is floating,
     * the serializable will take the ownership.
     * 
     * See also: ibus_serializable_set_attachment().
     * @param key String formatted key for indexing value.
     * @param value Value to be attached or %NULL to remove any prevoius value.
     */
    set_qattachment(key: GLib.Quark, value: GLib.Variant): void

    // Own virtual methods of IBus-1.0.IBus.Serializable

    vfunc_copy(src: Serializable): boolean
    vfunc_deserialize(variant: GLib.Variant): number
    vfunc_serialize(builder: GLib.VariantBuilder): boolean

    // Class property signals of IBus-1.0.IBus.Serializable

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
class Serializable extends Object {

    // Own properties of IBus-1.0.IBus.Serializable

    static name: string
    static $gtype: GObject.GType<Serializable>

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

module Service {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {

        // Own constructor properties of IBus-1.0.IBus.Service

        /**
         * The connection of service object.
         */
        connection?: Gio.DBusConnection | null
        /**
         * The path of service object.
         */
        object_path?: string | null
        /**
         * The path of service object.
         */
        objectPath?: string | null
    }

}

interface Service {

    // Own properties of IBus-1.0.IBus.Service

    /**
     * The connection of service object.
     */
    readonly connection: Gio.DBusConnection
    /**
     * The path of service object.
     */
    readonly object_path: string | null
    /**
     * The path of service object.
     */
    readonly objectPath: string | null

    // Owm methods of IBus-1.0.IBus.Service

    emit_signal(dest_bus_name: string, interface_name: string, signal_name: string, parameters: GLib.Variant): boolean
    /**
     * Gets a connections.
     * @returns A #GDBusConnection of an #IBusService instance.
     */
    get_connection(): Gio.DBusConnection
    /**
     * Gets the object path of an IBusService.
     * @returns The object path of @service
     */
    get_object_path(): string
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
     * @param object_path An object path.
     * @param interface_name An interface name.
     * @param property_name A property name.
     * @returns A variant.
     */
    vfunc_service_get_property(connection: Gio.DBusConnection, sender: string, object_path: string, interface_name: string, property_name: string): GLib.Variant | null
    /**
     * The ::service_method_call class method is to connect
     * GDBusInterfaceMethodCallFunc().
     * @virtual 
     * @param connection A dbus connection.
     * @param sender A sender.
     * @param object_path An object path.
     * @param interface_name An interface name.
     * @param method_name A method name.
     * @param parameters A parameters.
     * @param invocation A dbus method invocation.
     */
    vfunc_service_method_call(connection: Gio.DBusConnection, sender: string, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant, invocation: Gio.DBusMethodInvocation): void
    /**
     * The ::service_set_property class method is to connect
     * GDBusInterfaceSetPropertyFunc().
     * @virtual 
     * @param connection A dbus connection.
     * @param sender A sender.
     * @param object_path An object path.
     * @param interface_name An interface name.
     * @param property_name An property name.
     * @param value An property value.
     * @returns %TRUE if set the value else %FALSE.
     */
    vfunc_service_set_property(connection: Gio.DBusConnection, sender: string, object_path: string, interface_name: string, property_name: string, value: GLib.Variant): boolean

    // Class property signals of IBus-1.0.IBus.Service

    connect(sigName: "notify::connection", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An IBusService is a base class for services.
 * @class 
 */
class Service extends Object {

    // Own properties of IBus-1.0.IBus.Service

    static name: string
    static $gtype: GObject.GType<Service>

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
     * @param xml_data The introspection xml data.
     * @returns %TRUE if @xml_data is valid and succeeded to be added;          %FALSE otherwise.
     */
    static add_interfaces(klass: Service | Function | GObject.GType, xml_data: string): boolean
}

module Text {

    // Constructor properties interface

    interface ConstructorProperties extends Serializable.ConstructorProperties {
    }

}

interface Text {

    // Own fields of IBus-1.0.IBus.Text

    parent: Serializable & GObject.InitiallyUnowned
    /**
     * Whether `text` is static, i.e., no need and will not be freed. Only TRUE if IBusText is newed from ibus_text_new_from_static_string().
     * @field 
     */
    is_static: boolean
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
     * @param start_index The starting index, inclusive.
     * @param end_index The ending index, exclusive.
     */
    append_attribute(type: number, value: number, start_index: number, end_index: number): void
    /**
     * Return the attributes in an #IBusText. Should not be freed.
     * @returns the attrs in @text.
     */
    get_attributes(): AttrList
    /**
     * Return number of characters in an #IBusText.
     * This function is based on g_utf8_strlen(), so unlike strlen(),
     * it does not count by bytes but characters instead.
     * @returns Number of character in @text, not counted by bytes.
     */
    get_length(): number
    /**
     * Return the text in an #IBusText. Should not be freed.
     * @returns the text in @text.
     */
    get_text(): string
    set_attributes(attrs: AttrList): void

    // Class property signals of IBus-1.0.IBus.Text

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
class Text extends Serializable {

    // Own properties of IBus-1.0.IBus.Text

    static name: string
    static $gtype: GObject.GType<Text>

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
    static new_from_string(str: string): Text
    /**
     * Creates a new #IBusText from an UCS-4 encoded string.
     * `str` will be duplicated in IBusText, so feel free to free `str` after this
     * function.
     * @constructor 
     * @param str An text string to be set.
     * @returns A newly allocated #IBusText.
     */
    static new_from_ucs4(str: string): Text
    /**
     * Creates a new #IBusText from a single UCS4-encoded character.
     * @constructor 
     * @param c A single UCS4-encoded character.
     * @returns A newly allocated #IBusText.
     */
    static new_from_unichar(c: string): Text
    _init(config?: Text.ConstructorProperties): void

    // Conflicting static methods

    static new(...args: any[]): any
}

interface AttrListClass {

    // Own fields of IBus-1.0.IBus.AttrListClass

    parent: SerializableClass
}

abstract class AttrListClass {

    // Own properties of IBus-1.0.IBus.AttrListClass

    static name: string
}

interface AttributeClass {

    // Own fields of IBus-1.0.IBus.AttributeClass

    parent: SerializableClass
}

abstract class AttributeClass {

    // Own properties of IBus-1.0.IBus.AttributeClass

    static name: string
}

interface BusClass {

    // Own fields of IBus-1.0.IBus.BusClass

    parent: ObjectClass
}

abstract class BusClass {

    // Own properties of IBus-1.0.IBus.BusClass

    static name: string
}

interface BusPrivate {
}

class BusPrivate {

    // Own properties of IBus-1.0.IBus.BusPrivate

    static name: string
}

interface ComponentClass {

    // Own fields of IBus-1.0.IBus.ComponentClass

    parent: SerializableClass
}

abstract class ComponentClass {

    // Own properties of IBus-1.0.IBus.ComponentClass

    static name: string
}

interface ComponentPrivate {
}

class ComponentPrivate {

    // Own properties of IBus-1.0.IBus.ComponentPrivate

    static name: string
}

interface ConfigClass {
}

abstract class ConfigClass {

    // Own properties of IBus-1.0.IBus.ConfigClass

    static name: string
}

interface ConfigPrivate {
}

class ConfigPrivate {

    // Own properties of IBus-1.0.IBus.ConfigPrivate

    static name: string
}

interface ConfigServiceClass {

    // Own fields of IBus-1.0.IBus.ConfigServiceClass

    set_value: (config: ConfigService, section: string, name: string, value: GLib.Variant) => boolean
    get_value: (config: ConfigService, section: string, name: string) => GLib.Variant
    unset_value: (config: ConfigService, section: string, name: string) => boolean
    get_values: (config: ConfigService, section: string) => GLib.Variant
}

abstract class ConfigServiceClass {

    // Own properties of IBus-1.0.IBus.ConfigServiceClass

    static name: string
}

interface EngineClass {

    // Own fields of IBus-1.0.IBus.EngineClass

    process_key_event: (engine: Engine, keyval: number, keycode: number, state: number) => boolean
    focus_in: (engine: Engine) => void
    focus_out: (engine: Engine) => void
    reset: (engine: Engine) => void
    enable: (engine: Engine) => void
    disable: (engine: Engine) => void
    set_cursor_location: (engine: Engine, x: number, y: number, w: number, h: number) => void
    set_capabilities: (engine: Engine, caps: number) => void
    page_up: (engine: Engine) => void
    page_down: (engine: Engine) => void
    cursor_up: (engine: Engine) => void
    cursor_down: (engine: Engine) => void
    property_activate: (engine: Engine, prop_name: string, prop_state: number) => void
    property_show: (engine: Engine, prop_name: string) => void
    property_hide: (engine: Engine, prop_name: string) => void
    candidate_clicked: (engine: Engine, index: number, button: number, state: number) => void
    set_surrounding_text: (engine: Engine, text: Text, cursor_index: number, anchor_pos: number) => void
    process_hand_writing_event: (engine: Engine, coordinates: number, coordinates_len: number) => void
    cancel_hand_writing: (engine: Engine, n_strokes: number) => void
    set_content_type: (engine: Engine, purpose: number, hints: number) => void
}

abstract class EngineClass {

    // Own properties of IBus-1.0.IBus.EngineClass

    static name: string
}

interface EngineDescClass {

    // Own fields of IBus-1.0.IBus.EngineDescClass

    parent: SerializableClass
}

abstract class EngineDescClass {

    // Own properties of IBus-1.0.IBus.EngineDescClass

    static name: string
}

interface EngineDescPrivate {
}

class EngineDescPrivate {

    // Own properties of IBus-1.0.IBus.EngineDescPrivate

    static name: string
}

interface EnginePrivate {
}

class EnginePrivate {

    // Own properties of IBus-1.0.IBus.EnginePrivate

    static name: string
}

interface EngineSimpleClass {
}

abstract class EngineSimpleClass {

    // Own properties of IBus-1.0.IBus.EngineSimpleClass

    static name: string
}

interface EngineSimplePrivate {
}

class EngineSimplePrivate {

    // Own properties of IBus-1.0.IBus.EngineSimplePrivate

    static name: string
}

interface FactoryClass {

    // Own fields of IBus-1.0.IBus.FactoryClass

    create_engine: (factory: Factory, engine_name: string) => Engine
}

abstract class FactoryClass {

    // Own properties of IBus-1.0.IBus.FactoryClass

    static name: string
}

interface FactoryPrivate {
}

class FactoryPrivate {

    // Own properties of IBus-1.0.IBus.FactoryPrivate

    static name: string
}

interface HotkeyProfileClass {

    // Own fields of IBus-1.0.IBus.HotkeyProfileClass

    parent: SerializableClass
    trigger: (profile: HotkeyProfile, event: GLib.Quark) => void
}

abstract class HotkeyProfileClass {

    // Own properties of IBus-1.0.IBus.HotkeyProfileClass

    static name: string
}

interface InputContextClass {

    // Own fields of IBus-1.0.IBus.InputContextClass

    parent: ProxyClass
}

abstract class InputContextClass {

    // Own properties of IBus-1.0.IBus.InputContextClass

    static name: string
}

interface KeymapClass {

    // Own fields of IBus-1.0.IBus.KeymapClass

    parent: ObjectClass
}

abstract class KeymapClass {

    // Own properties of IBus-1.0.IBus.KeymapClass

    static name: string
}

interface LookupTableClass {

    // Own fields of IBus-1.0.IBus.LookupTableClass

    parent: SerializableClass
}

abstract class LookupTableClass {

    // Own properties of IBus-1.0.IBus.LookupTableClass

    static name: string
}

interface ObjectClass {

    // Own fields of IBus-1.0.IBus.ObjectClass

    parent: GObject.InitiallyUnownedClass
    destroy: (object: Object) => void
}

abstract class ObjectClass {

    // Own properties of IBus-1.0.IBus.ObjectClass

    static name: string
}

interface ObjectPrivate {
}

class ObjectPrivate {

    // Own properties of IBus-1.0.IBus.ObjectPrivate

    static name: string
}

interface ObservedPathClass {

    // Own fields of IBus-1.0.IBus.ObservedPathClass

    parent: SerializableClass
}

abstract class ObservedPathClass {

    // Own properties of IBus-1.0.IBus.ObservedPathClass

    static name: string
}

interface PanelServiceClass {

    // Own fields of IBus-1.0.IBus.PanelServiceClass

    parent: ServiceClass
    focus_in: (panel: PanelService, input_context_path: string) => void
    focus_out: (panel: PanelService, input_context_path: string) => void
    register_properties: (panel: PanelService, prop_list: PropList) => void
    set_cursor_location: (panel: PanelService, x: number, y: number, w: number, h: number) => void
    update_auxiliary_text: (panel: PanelService, text: Text, visible: boolean) => void
    update_lookup_table: (panel: PanelService, lookup_table: LookupTable, visible: boolean) => void
    update_preedit_text: (panel: PanelService, text: Text, cursor_pos: number, visible: boolean) => void
    update_property: (panel: PanelService, prop: Property) => void
    cursor_down_lookup_table: (panel: PanelService) => void
    cursor_up_lookup_table: (panel: PanelService) => void
    hide_auxiliary_text: (panel: PanelService) => void
    hide_language_bar: (panel: PanelService) => void
    hide_lookup_table: (panel: PanelService) => void
    hide_preedit_text: (panel: PanelService) => void
    page_down_lookup_table: (panel: PanelService) => void
    page_up_lookup_table: (panel: PanelService) => void
    reset: (panel: PanelService) => void
    show_auxiliary_text: (panel: PanelService) => void
    show_language_bar: (panel: PanelService) => void
    show_lookup_table: (panel: PanelService) => void
    show_preedit_text: (panel: PanelService) => void
    start_setup: (panel: PanelService) => void
    state_changed: (panel: PanelService) => void
    destroy_context: (panel: PanelService, input_context_path: string) => void
    set_content_type: (panel: PanelService, purpose: number, hints: number) => void
}

abstract class PanelServiceClass {

    // Own properties of IBus-1.0.IBus.PanelServiceClass

    static name: string
}

interface PropListClass {

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
abstract class PropListClass {

    // Own properties of IBus-1.0.IBus.PropListClass

    static name: string
}

interface PropertyClass {

    // Own fields of IBus-1.0.IBus.PropertyClass

    parent: SerializableClass
}

abstract class PropertyClass {

    // Own properties of IBus-1.0.IBus.PropertyClass

    static name: string
}

interface PropertyPrivate {
}

class PropertyPrivate {

    // Own properties of IBus-1.0.IBus.PropertyPrivate

    static name: string
}

interface ProxyClass {

    // Own fields of IBus-1.0.IBus.ProxyClass

    parent: Gio.DBusProxyClass
    destroy: (proxy: Proxy) => void
}

abstract class ProxyClass {

    // Own properties of IBus-1.0.IBus.ProxyClass

    static name: string
}

interface Rectangle {

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
class Rectangle {

    // Own properties of IBus-1.0.IBus.Rectangle

    static name: string
}

interface RegistryClass {
}

abstract class RegistryClass {

    // Own properties of IBus-1.0.IBus.RegistryClass

    static name: string
}

interface RegistryPrivate {
}

class RegistryPrivate {

    // Own properties of IBus-1.0.IBus.RegistryPrivate

    static name: string
}

interface SerializableClass {

    // Own fields of IBus-1.0.IBus.SerializableClass

    serialize: (object: Serializable, builder: GLib.VariantBuilder) => boolean
    deserialize: (object: Serializable, variant: GLib.Variant) => number
    copy: (dest: Serializable, src: Serializable) => boolean
}

abstract class SerializableClass {

    // Own properties of IBus-1.0.IBus.SerializableClass

    static name: string
}

interface SerializablePrivate {
}

class SerializablePrivate {

    // Own properties of IBus-1.0.IBus.SerializablePrivate

    static name: string
}

interface ServiceClass {

    // Own fields of IBus-1.0.IBus.ServiceClass

    service_method_call: (service: Service, connection: Gio.DBusConnection, sender: string, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant, invocation: Gio.DBusMethodInvocation) => void
    service_get_property: (service: Service, connection: Gio.DBusConnection, sender: string, object_path: string, interface_name: string, property_name: string) => GLib.Variant | null
    service_set_property: (service: Service, connection: Gio.DBusConnection, sender: string, object_path: string, interface_name: string, property_name: string, value: GLib.Variant) => boolean
}

abstract class ServiceClass {

    // Own properties of IBus-1.0.IBus.ServiceClass

    static name: string

    // Owm static methods of IBus-1.0.IBus.ServiceClass

    /**
     * Set the interface introspection information with the service class.
     * @param xml_data The introspection xml data.
     * @returns %TRUE if @xml_data is valid and succeeded to be added;          %FALSE otherwise.
     */
    static add_interfaces(klass: Service | Function | GObject.GType, xml_data: string): boolean
}

interface ServicePrivate {
}

class ServicePrivate {

    // Own properties of IBus-1.0.IBus.ServicePrivate

    static name: string
}

interface TextClass {

    // Own fields of IBus-1.0.IBus.TextClass

    parent: SerializableClass
}

abstract class TextClass {

    // Own properties of IBus-1.0.IBus.TextClass

    static name: string
}

interface XML {

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
    sub_nodes: any[]

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
class XML {

    // Own properties of IBus-1.0.IBus.XML

    static name: string

    // Constructors of IBus-1.0.IBus.XML

    /**
     * Parse a string buffer which contains an XML-formatted string,
     * and return a corresponding XML tree.
     * @param buffer Buffer to be parsed.
     * @returns Root node of parsed XML tree.
     */
    static parse_buffer(buffer: string): XML
    /**
     * Parse an XML file and return a corresponding XML tree.
     * @param name File name to be parsed.
     * @returns Root node of parsed XML tree.
     */
    static parse_file(name: string): XML
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default IBus;
// END