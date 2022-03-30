/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * IBus-1.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

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
function attrBackgroundNew(color: number, startIndex: number, endIndex: number): Attribute
function attrForegroundNew(color: number, startIndex: number, endIndex: number): Attribute
function attrUnderlineNew(underlineType: number, startIndex: number, endIndex: number): Attribute
function errorQuark(): GLib.Quark
function freeStrv(strv: string): void
function getAddress(): string
function getDaemonUid(): number
function getLanguageName(locale: string): string
function getLocalMachineId(): string
function getSocketPath(): string
function getTimeout(): number
function getUntranslatedLanguageName(locale: string): string
function getUserName(): string
function init(): void
function keyEventFromString(string: string, keyval: number, modifiers: number): boolean
function keyEventToString(keyval: number, modifiers: number): string
function keyvalConvertCase(symbol: number): [ /* lower */ number, /* upper */ number ]
function keyvalFromName(keyvalName: string): number
function keyvalName(keyval: number): string
function keyvalToLower(keyval: number): number
function keyvalToUnicode(keyval: number): number
function keyvalToUpper(keyval: number): number
function main(): void
function quit(): void
function setDisplay(display: string): void
function setLogHandler(verbose: boolean): void
function unicodeToKeyval(wc: number): number
function unsetLogHandler(): void
function writeAddress(address: string): void
function xmlParseBuffer(buffer: string): XML
function xmlParseFile(name: string): XML
/**
 * Free function prototype.
 */
interface FreeFunc {
    (object: object): void
}
interface ObjectDestroyFunc {
    (object: Object): void
}
/**
 * Prototype of copy function.
 * Copy function copy from source #IBusSerializable to the destination one.
 * Returns a gboolean value which indicates whether the copying is success.
 */
interface SerializableCopyFunc {
    (dest: Serializable, src: Serializable): boolean
}
/**
 * Prototype of deserialize function.
 * Deserialize function convert a #GVariant to #IBusSerializable.
 * Returns an integer value which indicates how many values in
 * the variant(tuple) are consumed.
 */
interface SerializableDeserializeFunc {
    (serializable: Serializable, variant: GLib.Variant): number
}
/**
 * Prototype of serialize function.
 * Serialize function convert an #IBusSerializable to #GVariantBuilder.
 * Returns a gboolean value which indicates whether the conversion is success.
 * Return %TRUE if succeed.
 */
interface SerializableSerializeFunc {
    (serializable: Serializable, builder: GLib.VariantBuilder): boolean
}
interface AttrList_ConstructProps extends Serializable_ConstructProps {
}
class AttrList {
    /* Fields of IBus-1.0.IBus.Object */
    parent: GObject.InitiallyUnowned
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.AttrList */
    /**
     * Append an IBusAttribute to IBusAttrList, and increase reference.
     * @param attr The IBusAttribute instance to be appended.
     */
    append(attr: Attribute): void
    /**
     * Returns #IBusAttribute at given index. Borrowed reference.
     * @param index Index of the `attr_list`.
     */
    get(index: number): Attribute
    /* Methods of IBus-1.0.IBus.Serializable */
    /**
     * Clone an #IBusSerializable.
     * The copy method should be implemented in extended class.
     */
    copy(): Serializable
    /**
     * Gets a value from attachment of an #IBusSerializable.
     * @param key String formatted key for indexing value.
     */
    getQattachment(key: GLib.Quark): GLib.Variant
    /**
     * Remove a value from attachment of an #IBusSerializable.
     * See also: ibus_serializable_remove_attachment().
     * @param key String formatted key for indexing value.
     */
    removeQattachment(key: GLib.Quark): void
    /**
     * Serialize an #IBusSerializable to a #GVariant.
     * The serialize method should be implemented in extended class.
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
    setQattachment(key: GLib.Quark, value: GLib.Variant): void
    /* Methods of IBus-1.0.IBus.Object */
    /**
     * Emit the "destory" signal notifying all reference holders that they should
     * release the #IBusObject.
     * 
     * The memory for the object itself won't be deleted until its reference count
     * actually drops to 0; ibus_object_destroy merely asks reference holders to
     * release their references. It does not free the object.
     */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of IBus-1.0.IBus.Object */
    /**
     * Destroy and free an IBusObject
     * 
     * See also:  ibus_object_destroy().
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AttrList_ConstructProps)
    _init (config?: AttrList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AttrList
    /* Function overloads */
    static new(): AttrList
    static new(): AttrList
    static $gtype: GObject.Type
}
interface Attribute_ConstructProps extends Serializable_ConstructProps {
}
class Attribute {
    /* Fields of IBus-1.0.IBus.Object */
    parent: GObject.InitiallyUnowned
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.Attribute */
    /**
     * Gets an enum of #IBusAttrType.
     */
    getAttrType(): number
    /**
     * Gets an end unsigned index
     */
    getEndIndex(): number
    /**
     * Gets a start unsigned index
     */
    getStartIndex(): number
    /**
     * Gets an unsigned int value relative with #IBusAttrType.
     * If the type is %IBUS_ATTR_TYPE_UNDERLINE, the return value is
     * #IBusAttrUnderline. If the type is %IBUS_ATTR_TYPE_FOREGROUND,
     * the return value is the color RGB.
     */
    getValue(): number
    /* Methods of IBus-1.0.IBus.Serializable */
    /**
     * Clone an #IBusSerializable.
     * The copy method should be implemented in extended class.
     */
    copy(): Serializable
    /**
     * Gets a value from attachment of an #IBusSerializable.
     * @param key String formatted key for indexing value.
     */
    getQattachment(key: GLib.Quark): GLib.Variant
    /**
     * Remove a value from attachment of an #IBusSerializable.
     * See also: ibus_serializable_remove_attachment().
     * @param key String formatted key for indexing value.
     */
    removeQattachment(key: GLib.Quark): void
    /**
     * Serialize an #IBusSerializable to a #GVariant.
     * The serialize method should be implemented in extended class.
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
    setQattachment(key: GLib.Quark, value: GLib.Variant): void
    /* Methods of IBus-1.0.IBus.Object */
    /**
     * Emit the "destory" signal notifying all reference holders that they should
     * release the #IBusObject.
     * 
     * The memory for the object itself won't be deleted until its reference count
     * actually drops to 0; ibus_object_destroy merely asks reference holders to
     * release their references. It does not free the object.
     */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of IBus-1.0.IBus.Object */
    /**
     * Destroy and free an IBusObject
     * 
     * See also:  ibus_object_destroy().
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Attribute_ConstructProps)
    _init (config?: Attribute_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(type: number, value: number, startIndex: number, endIndex: number): Attribute
    /* Function overloads */
    static new(): Attribute
    static new(): Attribute
    static $gtype: GObject.Type
}
interface Bus_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of IBus-1.0.IBus.Bus */
    /**
     * Whether the #IBusBus object should connect asynchronously to the bus.
     */
    connectAsync?: boolean
}
class Bus {
    /* Properties of IBus-1.0.IBus.Bus */
    /**
     * Whether the #IBusBus object should connect asynchronously to the bus.
     */
    readonly connectAsync: boolean
    /* Fields of IBus-1.0.IBus.Object */
    parent: GObject.InitiallyUnowned
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.Bus */
    /**
     * Add a match rule to an #IBusBus synchronously.
     * @param rule Match rule.
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
     */
    addMatchAsyncFinish(res: Gio.AsyncResult): boolean
    /**
     * Create an input context for client synchronously.
     * @param clientName Name of client.      "CreateInputContext" call is suceeded, %NULL otherwise.
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
     */
    createInputContextAsyncFinish(res: Gio.AsyncResult): InputContext
    /**
     * Get the current focused input context synchronously.
     */
    currentInputContext(): string
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
     */
    currentInputContextAsyncFinish(res: Gio.AsyncResult): string
    /**
     * Exit or restart ibus-daemon synchronously.
     * @param restart Whether restarting the ibus.
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
     */
    exitAsyncFinish(res: Gio.AsyncResult): boolean
    /**
     * Get the config instance from #IBusBus.
     */
    getConfig(): Config
    /**
     * Gets a #GDBusConnection of an #IBusBus instance.
     */
    getConnection(): Gio.DBusConnection
    /**
     * Get engines by given names synchronously. If some engine names do not exist,
     * this function will simply ignore them, and return rest of engines.
     * TODO(penghuang): add asynchronous version
     * @param names A %NULL-terminated array of names.
     */
    getEnginesByNames(names: string[]): EngineDesc[]
    /**
     * Get the description of current global engine synchronously.
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
     */
    getGlobalEngineAsyncFinish(res: Gio.AsyncResult): EngineDesc
    /**
     * Get org.freedesktop.DBus.Properties.
     * @param propertyName property name in org.freedesktop.DBus.Properties.Get
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
     */
    getIbusPropertyAsyncFinish(res: Gio.AsyncResult): GLib.Variant
    /**
     * Return the name owner synchronously.
     * @param name Name.
     */
    getNameOwner(name: string): string
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
     */
    getNameOwnerAsyncFinish(res: Gio.AsyncResult): string
    /**
     * Check if the bus's "use_global_engine" option is enabled or not
     * synchronously.
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
     */
    getUseGlobalEngineAsyncFinish(res: Gio.AsyncResult): boolean
    /**
     * Check if the bus's "use_sys_layout" option is enabled or not synchronously.
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
     */
    getUseSysLayoutAsyncFinish(res: Gio.AsyncResult): boolean
    /**
     * This function sends a "HELLO" message to DBus daemon,
     * which replies the unique name of current IBus process.
     */
    hello(): string
    /**
     * Return %TRUE if `bus` is connected to IBus daemon.
     */
    isConnected(): boolean
    /**
     * Check if the current global engine is enabled or not synchronously.
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
     */
    isGlobalEngineEnabledAsyncFinish(res: Gio.AsyncResult): boolean
    /**
     * List active engines synchronously.
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
     */
    listActiveEnginesAsyncFinish(res: Gio.AsyncResult): EngineDesc[]
    /**
     * List engines synchronously.
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
     */
    listEnginesAsyncFinish(res: Gio.AsyncResult): EngineDesc[]
    /**
     * Return lists that attached to `bus`.
     * <note><para>[FixMe] Not implemented yet, only return %NULL.</para></note>
     * <note><para>[FixMe] Add async version.</para></note>
     */
    listNames(): string[]
    /**
     * Lists the unique bus names of connections currently queued for a bus name.
     * FIXME add an asynchronous version.
     * @param name Name to be queried.
     */
    listQueuedOwners(name: string): string[]
    /**
     * Checks whether the name has owner synchronously.
     * @param name Name to be checked.
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
     */
    nameHasOwnerAsyncFinish(res: Gio.AsyncResult): boolean
    /**
     * Start bus components by engine names synchronously.
     * @param names A %NULL-terminated array of engine names.
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
     */
    preloadEnginesAsyncFinish(res: Gio.AsyncResult): boolean
    /**
     * Register a componet to an #IBusBus synchronously.
     * @param component A input engine component.
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
     */
    registerComponentAsyncFinish(res: Gio.AsyncResult): boolean
    /**
     * Release a name to IBus daemon synchronously.
     * @param name Name to be released.
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
     */
    releaseNameAsyncFinish(res: Gio.AsyncResult): number
    /**
     * Remove a match rule to an #IBusBus synchronously.
     * @param rule Match rule.
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
     */
    removeMatchAsyncFinish(res: Gio.AsyncResult): boolean
    /**
     * Request a name from IBus daemon synchronously.
     * @param name Name to be requested.
     * @param flags IBusBusNameFlag.
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
     */
    requestNameAsyncFinish(res: Gio.AsyncResult): number
    /**
     * Set current global engine synchronously.
     * @param globalEngine A new engine name.
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
    /* Methods of IBus-1.0.IBus.Object */
    /**
     * Emit the "destory" signal notifying all reference holders that they should
     * release the #IBusObject.
     * 
     * The memory for the object itself won't be deleted until its reference count
     * actually drops to 0; ibus_object_destroy merely asks reference holders to
     * release their references. It does not free the object.
     */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of IBus-1.0.IBus.Bus */
    /**
     * Emitted when #IBusBus is connected to ibus-daemon.
     */
    connect(sigName: "connected", callback: (() => void)): number
    on(sigName: "connected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connected", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "connected"): void
    /**
     * Emitted when #IBusBus is disconnected from ibus-daemon.
     */
    connect(sigName: "disconnected", callback: (() => void)): number
    on(sigName: "disconnected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "disconnected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "disconnected", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "disconnected"): void
    /**
     * Emitted when global engine is changed.
     * @param name The name of the new global engine.
     */
    connect(sigName: "global-engine-changed", callback: ((name: string) => void)): number
    on(sigName: "global-engine-changed", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "global-engine-changed", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "global-engine-changed", callback: (name: string) => void): NodeJS.EventEmitter
    emit(sigName: "global-engine-changed", name: string): void
    /**
     * Emitted when D-Bus name owner is changed.
     * @param name The name which ower is changed.
     * @param oldOwner The unique bus name of the old owner.
     * @param newOwner The unique bus name of the new owner.
     */
    connect(sigName: "name-owner-changed", callback: ((name: string, oldOwner: string, newOwner: string) => void)): number
    on(sigName: "name-owner-changed", callback: (name: string, oldOwner: string, newOwner: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "name-owner-changed", callback: (name: string, oldOwner: string, newOwner: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "name-owner-changed", callback: (name: string, oldOwner: string, newOwner: string) => void): NodeJS.EventEmitter
    emit(sigName: "name-owner-changed", name: string, oldOwner: string, newOwner: string): void
    /* Signals of IBus-1.0.IBus.Object */
    /**
     * Destroy and free an IBusObject
     * 
     * See also:  ibus_object_destroy().
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::connect-async", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connect-async", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connect-async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connect-async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connect-async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Bus_ConstructProps)
    _init (config?: Bus_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Bus
    /* Function overloads */
    static new(): Bus
    static newAsync(): Bus
    static $gtype: GObject.Type
}
interface Component_ConstructProps extends Serializable_ConstructProps {
    /* Constructor properties of IBus-1.0.IBus.Component */
    /**
     * The author of component
     */
    author?: string
    /**
     * The exec path of component
     */
    commandLine?: string
    /**
     * The description of component
     */
    description?: string
    /**
     * The homepage of component
     */
    homepage?: string
    /**
     * The license of component
     */
    license?: string
    /**
     * The name of component
     */
    name?: string
    /**
     * The textdomain of component
     */
    textdomain?: string
    /**
     * The version of component
     */
    version?: string
}
class Component {
    /* Properties of IBus-1.0.IBus.Component */
    /**
     * The author of component
     */
    readonly author: string
    /**
     * The exec path of component
     */
    readonly commandLine: string
    /**
     * The description of component
     */
    readonly description: string
    /**
     * The homepage of component
     */
    readonly homepage: string
    /**
     * The license of component
     */
    readonly license: string
    /**
     * The name of component
     */
    readonly name: string
    /**
     * The textdomain of component
     */
    readonly textdomain: string
    /**
     * The version of component
     */
    readonly version: string
    /* Fields of IBus-1.0.IBus.Object */
    parent: GObject.InitiallyUnowned
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.Component */
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
     */
    checkModification(): boolean
    /**
     * Gets the author property in #IBusComponent. It should not be freed.
     */
    getAuthor(): string
    /**
     * Gets the description property in #IBusComponent. It should not be freed.
     */
    getDescription(): string
    /**
     * Gets the engines of this component.
     */
    getEngines(): EngineDesc[]
    /**
     * Gets the exec property in #IBusComponent. It should not be freed.
     */
    getExec(): string
    /**
     * Gets the homepage property in #IBusComponent. It should not be freed.
     */
    getHomepage(): string
    /**
     * Gets the license property in #IBusComponent. It should not be freed.
     */
    getLicense(): string
    /**
     * Gets the name property in #IBusComponent. It should not be freed.
     */
    getName(): string
    /**
     * Gets the observed paths of this component.
     */
    getObservedPaths(): ObservedPath[]
    /**
     * Gets the textdomain property in #IBusComponent. It should not be freed.
     */
    getTextdomain(): string
    /**
     * Gets the version property in #IBusComponent. It should not be freed.
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
    /* Methods of IBus-1.0.IBus.Serializable */
    /**
     * Clone an #IBusSerializable.
     * The copy method should be implemented in extended class.
     */
    copy(): Serializable
    /**
     * Gets a value from attachment of an #IBusSerializable.
     * @param key String formatted key for indexing value.
     */
    getQattachment(key: GLib.Quark): GLib.Variant
    /**
     * Remove a value from attachment of an #IBusSerializable.
     * See also: ibus_serializable_remove_attachment().
     * @param key String formatted key for indexing value.
     */
    removeQattachment(key: GLib.Quark): void
    /**
     * Serialize an #IBusSerializable to a #GVariant.
     * The serialize method should be implemented in extended class.
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
    setQattachment(key: GLib.Quark, value: GLib.Variant): void
    /* Methods of IBus-1.0.IBus.Object */
    /**
     * Emit the "destory" signal notifying all reference holders that they should
     * release the #IBusObject.
     * 
     * The memory for the object itself won't be deleted until its reference count
     * actually drops to 0; ibus_object_destroy merely asks reference holders to
     * release their references. It does not free the object.
     */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of IBus-1.0.IBus.Object */
    /**
     * Destroy and free an IBusObject
     * 
     * See also:  ibus_object_destroy().
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::author", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::command-line", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::command-line", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::command-line", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::command-line", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::command-line", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::homepage", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homepage", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::homepage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::homepage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::homepage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::license", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::textdomain", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::textdomain", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::textdomain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::textdomain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::textdomain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Component_ConstructProps)
    _init (config?: Component_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, description: string, version: string, license: string, author: string, homepage: string, commandLine: string, textdomain: string): Component
    /* Function overloads */
    static new(): Component
    static new(): Component
    static newFromFile(filename: string): Component
    static newFromXmlNode(node: XML): Component
    static $gtype: GObject.Type
}
interface Config_ConstructProps extends Proxy_ConstructProps {
}
class Config {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    /**
     * If this property is not %G_BUS_TYPE_NONE, then
     * #GDBusProxy:g-connection must be %NULL and will be set to the
     * #GDBusConnection obtained by calling g_bus_get() with the value
     * of this property.
     */
    readonly gBusType: Gio.BusType
    /**
     * The #GDBusConnection the proxy is for.
     */
    readonly gConnection: Gio.DBusConnection
    /**
     * The timeout to use if -1 (specifying default timeout) is passed
     * as `timeout_msec` in the g_dbus_proxy_call() and
     * g_dbus_proxy_call_sync() functions.
     * 
     * This allows applications to set a proxy-wide timeout for all
     * remote method invocations on the proxy. If this property is -1,
     * the default timeout (typically 25 seconds) is used. If set to
     * %G_MAXINT, then no timeout is used.
     */
    gDefaultTimeout: number
    /**
     * Flags from the #GDBusProxyFlags enumeration.
     */
    readonly gFlags: Gio.DBusProxyFlags
    /**
     * Ensure that interactions with this proxy conform to the given
     * interface. This is mainly to ensure that malformed data received
     * from the other peer is ignored. The given #GDBusInterfaceInfo is
     * said to be the "expected interface".
     * 
     * The checks performed are:
     * - When completing a method call, if the type signature of
     *   the reply message isn't what's expected, the reply is
     *   discarded and the #GError is set to %G_IO_ERROR_INVALID_ARGUMENT.
     * 
     * - Received signals that have a type signature mismatch are dropped and
     *   a warning is logged via g_warning().
     * 
     * - Properties received via the initial `GetAll()` call or via the
     *   `::PropertiesChanged` signal (on the
     *   [org.freedesktop.DBus.Properties](http://dbus.freedesktop.org/doc/dbus-specification.html#standard-interfaces-properties)
     *   interface) or set using g_dbus_proxy_set_cached_property()
     *   with a type signature mismatch are ignored and a warning is
     *   logged via g_warning().
     * 
     * Note that these checks are never done on methods, signals and
     * properties that are not referenced in the given
     * #GDBusInterfaceInfo, since extending a D-Bus interface on the
     * service-side is not considered an ABI break.
     */
    gInterfaceInfo: Gio.DBusInterfaceInfo
    /**
     * The D-Bus interface name the proxy is for.
     */
    readonly gInterfaceName: string
    /**
     * The well-known or unique name that the proxy is for.
     */
    readonly gName: string
    /**
     * The unique name that owns #GDBusProxy:g-name or %NULL if no-one
     * currently owns that name. You may connect to #GObject::notify signal to
     * track changes to this property.
     */
    readonly gNameOwner: string
    /**
     * The object path the proxy is for.
     */
    readonly gObjectPath: string
    /* Fields of IBus-1.0.IBus.Proxy */
    parent: Gio.DBusProxy
    flags: number
    own: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.Config */
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
     */
    getValueAsyncFinish(result: Gio.AsyncResult): GLib.Variant
    /**
     * Get all values in a section synchronously.
     * @param section Section name of the configuration option.
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
     */
    getValuesAsyncFinish(result: Gio.AsyncResult): GLib.Variant
    /**
     * Set the value of a configuration option synchronously.
     * @param section Section name of the configuration option.
     * @param name Name of the configure option its self.
     * @param value A #GVariant that holds the value. If the value is floating, the function takes ownership of it.
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
     */
    setValueAsyncFinish(result: Gio.AsyncResult): boolean
    /**
     * Remove an entry of a configuration option.
     * @param section Section name of the configuration option.
     * @param name Name of the configure option its self.
     */
    unset(section: string, name: string): boolean
    /**
     * Unsubscribe from the configuration option change notification.
     * @param section Section name of the configuration option.
     * @param name Name of the configure option its self.
     */
    unwatch(section?: string | null, name?: string | null): boolean
    /**
     * Subscribe to the configuration option change notification.
     * 
     * Until this function is called, every change will be notified to the
     * client through #IBusConfig::value-changed signal.  Clients should
     * call ibus_config_watch() with the sections they are interested in,
     * to reduce the number of D-Bus messages.
     * @param section Section name of the configuration option.
     * @param name Name of the configure option its self.
     */
    watch(section?: string | null, name?: string | null): boolean
    /* Methods of IBus-1.0.IBus.Proxy */
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
    /* Methods of Gio-2.0.Gio.DBusProxy */
    /**
     * Asynchronously invokes the `method_name` method on `proxy`.
     * 
     * If `method_name` contains any dots, then `name` is split into interface and
     * method name parts. This allows using `proxy` for invoking methods on
     * other interfaces.
     * 
     * If the #GDBusConnection associated with `proxy` is closed then
     * the operation will fail with %G_IO_ERROR_CLOSED. If
     * `cancellable` is canceled, the operation will fail with
     * %G_IO_ERROR_CANCELLED. If `parameters` contains a value not
     * compatible with the D-Bus protocol, the operation fails with
     * %G_IO_ERROR_INVALID_ARGUMENT.
     * 
     * If the `parameters` #GVariant is floating, it is consumed. This allows
     * convenient 'inline' use of g_variant_new(), e.g.:
     * 
     * ```c
     *  g_dbus_proxy_call (proxy,
     *                     "TwoStrings",
     *                     g_variant_new ("(ss)",
     *                                    "Thing One",
     *                                    "Thing Two"),
     *                     G_DBUS_CALL_FLAGS_NONE,
     *                     -1,
     *                     NULL,
     *                     (GAsyncReadyCallback) two_strings_done,
     *                     &data);
     * ```
     * 
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `method_name` is referenced by it,
     * then the return value is checked against the return type.
     * 
     * This is an asynchronous method. When the operation is finished,
     * `callback` will be invoked in the
     * [thread-default main context][g-main-context-push-thread-default]
     * of the thread you are calling this method from.
     * You can then call g_dbus_proxy_call_finish() to get the result of
     * the operation. See g_dbus_proxy_call_sync() for the synchronous
     * version of this method.
     * 
     * If `callback` is %NULL then the D-Bus method call message will be sent with
     * the %G_DBUS_MESSAGE_FLAGS_NO_REPLY_EXPECTED flag set.
     * @param methodName Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeoutMsec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
     */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with g_dbus_proxy_call().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to g_dbus_proxy_call().
     */
    callFinish(res: Gio.AsyncResult): GLib.Variant
    /**
     * Synchronously invokes the `method_name` method on `proxy`.
     * 
     * If `method_name` contains any dots, then `name` is split into interface and
     * method name parts. This allows using `proxy` for invoking methods on
     * other interfaces.
     * 
     * If the #GDBusConnection associated with `proxy` is disconnected then
     * the operation will fail with %G_IO_ERROR_CLOSED. If
     * `cancellable` is canceled, the operation will fail with
     * %G_IO_ERROR_CANCELLED. If `parameters` contains a value not
     * compatible with the D-Bus protocol, the operation fails with
     * %G_IO_ERROR_INVALID_ARGUMENT.
     * 
     * If the `parameters` #GVariant is floating, it is consumed. This allows
     * convenient 'inline' use of g_variant_new(), e.g.:
     * 
     * ```c
     *  g_dbus_proxy_call_sync (proxy,
     *                          "TwoStrings",
     *                          g_variant_new ("(ss)",
     *                                         "Thing One",
     *                                         "Thing Two"),
     *                          G_DBUS_CALL_FLAGS_NONE,
     *                          -1,
     *                          NULL,
     *                          &error);
     * ```
     * 
     * 
     * The calling thread is blocked until a reply is received. See
     * g_dbus_proxy_call() for the asynchronous version of this
     * method.
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `method_name` is referenced by it,
     * then the return value is checked against the return type.
     * @param methodName Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal              or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeoutMsec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param cancellable A #GCancellable or %NULL.
     */
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    /**
     * Like g_dbus_proxy_call() but also takes a #GUnixFDList object.
     * 
     * This method is only available on UNIX.
     * @param methodName Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeoutMsec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param fdList A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
     */
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with g_dbus_proxy_call_with_unix_fd_list().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to g_dbus_proxy_call_with_unix_fd_list().
     */
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    /**
     * Like g_dbus_proxy_call_sync() but also takes and returns #GUnixFDList objects.
     * 
     * This method is only available on UNIX.
     * @param methodName Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal              or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeoutMsec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param fdList A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     */
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    /**
     * Looks up the value for a property from the cache. This call does no
     * blocking IO.
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `property_name` is referenced by
     * it, then `value` is checked against the type of the property.
     * @param propertyName Property name.
     */
    getCachedProperty(propertyName: string): GLib.Variant | null
    /**
     * Gets the names of all cached properties on `proxy`.
     */
    getCachedPropertyNames(): string[] | null
    /**
     * Gets the connection `proxy` is for.
     */
    getConnection(): Gio.DBusConnection
    /**
     * Gets the timeout to use if -1 (specifying default timeout) is
     * passed as `timeout_msec` in the g_dbus_proxy_call() and
     * g_dbus_proxy_call_sync() functions.
     * 
     * See the #GDBusProxy:g-default-timeout property for more details.
     */
    getDefaultTimeout(): number
    /**
     * Gets the flags that `proxy` was constructed with.
     */
    getFlags(): Gio.DBusProxyFlags
    /**
     * Returns the #GDBusInterfaceInfo, if any, specifying the interface
     * that `proxy` conforms to. See the #GDBusProxy:g-interface-info
     * property for more details.
     */
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    /**
     * Gets the D-Bus interface name `proxy` is for.
     */
    getInterfaceName(): string
    /**
     * Gets the name that `proxy` was constructed for.
     * 
     * When connected to a message bus, this will usually be non-%NULL.
     * However, it may be %NULL for a proxy that communicates using a peer-to-peer
     * pattern.
     */
    getName(): string | null
    /**
     * The unique name that owns the name that `proxy` is for or %NULL if
     * no-one currently owns that name. You may connect to the
     * #GObject::notify signal to track changes to the
     * #GDBusProxy:g-name-owner property.
     */
    getNameOwner(): string | null
    /**
     * Gets the object path `proxy` is for.
     */
    getObjectPath(): string
    /**
     * If `value` is not %NULL, sets the cached value for the property with
     * name `property_name` to the value in `value`.
     * 
     * If `value` is %NULL, then the cached value is removed from the
     * property cache.
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `property_name` is referenced by
     * it, then `value` is checked against the type of the property.
     * 
     * If the `value` #GVariant is floating, it is consumed. This allows
     * convenient 'inline' use of g_variant_new(), e.g.
     * 
     * ```c
     *  g_dbus_proxy_set_cached_property (proxy,
     *                                    "SomeProperty",
     *                                    g_variant_new ("(si)",
     *                                                  "A String",
     *                                                  42));
     * ```
     * 
     * 
     * Normally you will not need to use this method since `proxy`
     * is tracking changes using the
     * `org.freedesktop.DBus.Properties.PropertiesChanged`
     * D-Bus signal. However, for performance reasons an object may
     * decide to not use this signal for some properties and instead
     * use a proprietary out-of-band mechanism to transmit changes.
     * 
     * As a concrete example, consider an object with a property
     * `ChatroomParticipants` which is an array of strings. Instead of
     * transmitting the same (long) array every time the property changes,
     * it is more efficient to only transmit the delta using e.g. signals
     * `ChatroomParticipantJoined(String name)` and
     * `ChatroomParticipantParted(String name)`.
     * @param propertyName Property name.
     * @param value Value for the property or %NULL to remove it from the cache.
     */
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    /**
     * Sets the timeout to use if -1 (specifying default timeout) is
     * passed as `timeout_msec` in the g_dbus_proxy_call() and
     * g_dbus_proxy_call_sync() functions.
     * 
     * See the #GDBusProxy:g-default-timeout property for more details.
     * @param timeoutMsec Timeout in milliseconds.
     */
    setDefaultTimeout(timeoutMsec: number): void
    /**
     * Ensure that interactions with `proxy` conform to the given
     * interface. See the #GDBusProxy:g-interface-info property for more
     * details.
     * @param info Minimum interface this proxy conforms to    or %NULL to unset.
     */
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @param ioPriority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes asynchronous initialization and returns the result.
     * See g_async_initable_init_async().
     * @param res a #GAsyncResult.
     */
    initFinish(res: Gio.AsyncResult): boolean
    /**
     * Finishes the async construction for the various g_async_initable_new
     * calls, returning the created object or %NULL on error.
     * @param res the #GAsyncResult from the callback
     */
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    /**
     * Gets the #GDBusObject that `interface_` belongs to, if any.
     */
    getObject(): Gio.DBusObject | null
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     */
    getInfo(): Gio.DBusInterfaceInfo
    /**
     * Sets the #GDBusObject for `interface_` to `object`.
     * 
     * Note that `interface_` will hold a weak reference to `object`.
     * @param object A #GDBusObject or %NULL.
     */
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
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
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of IBus-1.0.IBus.Config */
    /**
     * Emitted when configuration value is changed.
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     * @param section Section name.
     * @param name Name of the property.
     * @param value Value.
     */
    connect(sigName: "value-changed", callback: ((section: string, name: string, value: GLib.Variant) => void)): number
    on(sigName: "value-changed", callback: (section: string, name: string, value: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "value-changed", callback: (section: string, name: string, value: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "value-changed", callback: (section: string, name: string, value: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "value-changed", section: string, name: string, value: GLib.Variant): void
    /* Signals of IBus-1.0.IBus.Proxy */
    /**
     * Destroy and free an IBusProxy
     * 
     * See also:  ibus_proxy_destroy().
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    /**
     * Emitted when one or more D-Bus properties on `proxy` changes. The
     * local cache has already been updated when this signal fires. Note
     * that both `changed_properties` and `invalidated_properties` are
     * guaranteed to never be %NULL (either may be empty though).
     * 
     * If the proxy has the flag
     * %G_DBUS_PROXY_FLAGS_GET_INVALIDATED_PROPERTIES set, then
     * `invalidated_properties` will always be empty.
     * 
     * This signal corresponds to the
     * `PropertiesChanged` D-Bus signal on the
     * `org.freedesktop.DBus.Properties` interface.
     * @param changedProperties A #GVariant containing the properties that changed (type: `a{sv}`)
     * @param invalidatedProperties A %NULL terminated array of properties that was invalidated
     */
    connect(sigName: "g-properties-changed", callback: ((changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    on(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    /**
     * Emitted when a signal from the remote object and interface that `proxy` is for, has been received.
     * 
     * Since 2.72 this signal supports detailed connections. You can connect to
     * the detailed signal `g-signal::x` in order to receive callbacks only when
     * signal `x` is received from the remote object.
     * @param senderName The sender of the signal or %NULL if the connection is not a bus connection.
     * @param signalName The name of the signal.
     * @param parameters A #GVariant tuple with parameters for the signal.
     */
    connect(sigName: "g-signal", callback: ((senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    on(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-bus-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-object-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Config_ConstructProps)
    _init (config?: Config_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: Gio.DBusConnection, cancellable?: Gio.Cancellable | null): Config
    static newAsyncFinish(res: Gio.AsyncResult): Config
    /**
     * New an #IBusConfig asynchronously.
     * @param connection An #GDBusConnection.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.      The callback should not be %NULL.
     */
    static newAsync(connection: Gio.DBusConnection, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Helper function for constructing #GAsyncInitable object. This is
     * similar to g_object_newv() but also initializes the object asynchronously.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_new_finish() to get the new object and check
     * for any errors.
     * @param objectType a #GType supporting #GAsyncInitable.
     * @param nParameters the number of parameters in `parameters`
     * @param parameters the parameters to use to construct the object
     * @param ioPriority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the initialization is     finished
     */
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     * @param objectType a #GType supporting #GInitable.
     * @param parameters the parameters to use to construct the object
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface ConfigService_ConstructProps extends Service_ConstructProps {
}
class ConfigService {
    /* Properties of IBus-1.0.IBus.Service */
    /**
     * The connection of service object.
     */
    readonly connection: Gio.DBusConnection
    /**
     * The path of service object.
     */
    readonly objectPath: string
    /* Fields of IBus-1.0.IBus.Object */
    parent: GObject.InitiallyUnowned
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.ConfigService */
    /**
     * Change a value of a configuration option
     * by sending a "ValueChanged" message to IBus service.
     * @param section Section name of the configuration option.
     * @param name Name of the configure option.
     * @param value GVariant that holds the value.
     */
    valueChanged(section: string, name: string, value: GLib.Variant): void
    /* Methods of IBus-1.0.IBus.Service */
    emitSignal(destBusName: string, interfaceName: string, signalName: string, parameters: GLib.Variant): boolean
    /**
     * Gets a connections.
     */
    getConnection(): Gio.DBusConnection
    /**
     * Gets the object path of an IBusService.
     */
    getObjectPath(): string
    /**
     * Registers service to a connection.
     * @param connection A GDBusConnection the service will be registered to.
     */
    register(connection: Gio.DBusConnection): boolean
    /**
     * Unregisters service from a connection.
     * @param connection A GDBusConnection the service was registered with.
     */
    unregister(connection: Gio.DBusConnection): void
    /* Methods of IBus-1.0.IBus.Object */
    /**
     * Emit the "destory" signal notifying all reference holders that they should
     * release the #IBusObject.
     * 
     * The memory for the object itself won't be deleted until its reference count
     * actually drops to 0; ibus_object_destroy merely asks reference holders to
     * release their references. It does not free the object.
     */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of IBus-1.0.IBus.Object */
    /**
     * Destroy and free an IBusObject
     * 
     * See also:  ibus_object_destroy().
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::object-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ConfigService_ConstructProps)
    _init (config?: ConfigService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: Gio.DBusConnection): ConfigService
    /* Function overloads */
    static new(connection: Gio.DBusConnection, path: string): ConfigService
    static new(): ConfigService
    static $gtype: GObject.Type
}
interface Engine_ConstructProps extends Service_ConstructProps {
    /* Constructor properties of IBus-1.0.IBus.Engine */
    engineName?: string
}
class Engine {
    /* Properties of IBus-1.0.IBus.Engine */
    readonly engineName: string
    /* Properties of IBus-1.0.IBus.Service */
    /**
     * The connection of service object.
     */
    readonly connection: Gio.DBusConnection
    /**
     * The path of service object.
     */
    readonly objectPath: string
    /* Fields of IBus-1.0.IBus.Object */
    parent: GObject.InitiallyUnowned
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.Engine */
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
    getContentType(): [ /* purpose */ number | null, /* hints */ number | null ]
    /**
     * Return the name of #IBusEngine.
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
    getSurroundingText(): [ /* text */ Text | null, /* cursorPos */ number | null, /* anchorPos */ number | null ]
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
    /* Methods of IBus-1.0.IBus.Service */
    emitSignal(destBusName: string, interfaceName: string, signalName: string, parameters: GLib.Variant): boolean
    /**
     * Gets a connections.
     */
    getConnection(): Gio.DBusConnection
    /**
     * Gets the object path of an IBusService.
     */
    getObjectPath(): string
    /**
     * Registers service to a connection.
     * @param connection A GDBusConnection the service will be registered to.
     */
    register(connection: Gio.DBusConnection): boolean
    /**
     * Unregisters service from a connection.
     * @param connection A GDBusConnection the service was registered with.
     */
    unregister(connection: Gio.DBusConnection): void
    /* Methods of IBus-1.0.IBus.Object */
    /**
     * Emit the "destory" signal notifying all reference holders that they should
     * release the #IBusObject.
     * 
     * The memory for the object itself won't be deleted until its reference count
     * actually drops to 0; ibus_object_destroy merely asks reference holders to
     * release their references. It does not free the object.
     */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of IBus-1.0.IBus.Engine */
    /**
     * Emitted when a hand writing operation is cancelled.
     * Implement the member function IBusEngineClass::cancel_hand_writing
     * in extended class to receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     * @param nStrokes The number of strokes to be removed. 0 means "remove all".
     */
    connect(sigName: "cancel-hand-writing", callback: ((nStrokes: number) => void)): number
    on(sigName: "cancel-hand-writing", callback: (nStrokes: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cancel-hand-writing", callback: (nStrokes: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cancel-hand-writing", callback: (nStrokes: number) => void): NodeJS.EventEmitter
    emit(sigName: "cancel-hand-writing", nStrokes: number): void
    /**
     * Emitted when candidate on lookup table is clicked.
     * Implement the member function IBusEngineClass::candidate_clicked
     * in extended class to receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     * @param index Index of candidate be clicked.
     * @param button Mouse button.
     * @param state Keyboard state.
     */
    connect(sigName: "candidate-clicked", callback: ((index: number, button: number, state: number) => void)): number
    on(sigName: "candidate-clicked", callback: (index: number, button: number, state: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "candidate-clicked", callback: (index: number, button: number, state: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "candidate-clicked", callback: (index: number, button: number, state: number) => void): NodeJS.EventEmitter
    emit(sigName: "candidate-clicked", index: number, button: number, state: number): void
    /**
     * Emitted when the down cursor button is pressed.
     * Implement the member function IBusEngineClass::cursor_down
     * in extended class to receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "cursor-down", callback: (() => void)): number
    on(sigName: "cursor-down", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-down", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-down", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-down"): void
    /**
     * Emitted when the up cursor button is pressed.
     * Implement the member function IBusEngineClass::cursor_up
     * in extended class to receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "cursor-up", callback: (() => void)): number
    on(sigName: "cursor-up", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-up", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-up", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-up"): void
    /**
     * Emitted when the IME is disabled.
     * Implement the member function IBusEngineClass::disable
     * in extended class to receive this signal.
     * 
     * See also:  ibus_bus_set_global_engine().
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "disable", callback: (() => void)): number
    on(sigName: "disable", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "disable", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "disable", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "disable"): void
    /**
     * Emitted when the IME is enabled.
     * Implement the member function IBusEngineClass::enable
     * in extended class to receive this signal.
     * 
     * See also:  ibus_bus_set_global_engine().
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "enable", callback: (() => void)): number
    on(sigName: "enable", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enable", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enable", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "enable"): void
    /**
     * Emitted when the client application get the focus.
     * Implement the member function IBusEngineClass::focus_in
     * in extended class to receive this signal.
     * 
     * See also: ibus_input_context_focus_in()
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "focus-in", callback: (() => void)): number
    on(sigName: "focus-in", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-in", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-in", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "focus-in"): void
    /**
     * Emitted when the client application  lost the focus.
     * Implement the member function IBusEngineClass::focus_out
     * in extended class to receive this signal.
     * 
     * See also: ibus_input_context_focus_out()
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "focus-out", callback: (() => void)): number
    on(sigName: "focus-out", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-out", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-out", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "focus-out"): void
    /**
     * Emitted when the page-down button is pressed.
     * Implement the member function IBusEngineClass::page_down
     * in extended class to receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "page-down", callback: (() => void)): number
    on(sigName: "page-down", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "page-down", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "page-down", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "page-down"): void
    /**
     * Emitted when the page-up button is pressed.
     * Implement the member function IBusEngineClass::page_up
     * in extended class to receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "page-up", callback: (() => void)): number
    on(sigName: "page-up", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "page-up", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "page-up", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "page-up"): void
    /**
     * Emitted when a hand writing operation is cancelled.
     * Implement the member function IBusEngineClass::cancel_hand_writing
     * in extended class to receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     * @param coordinates An array of double (0.0 to 1.0) which represents a stroke (i.e. [x1, y1, x2, y2, x3, y3, ...]).
     * @param coordinatesLen The number of elements in the array.
     */
    connect(sigName: "process-hand-writing-event", callback: ((coordinates: object, coordinatesLen: number) => void)): number
    on(sigName: "process-hand-writing-event", callback: (coordinates: object, coordinatesLen: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "process-hand-writing-event", callback: (coordinates: object, coordinatesLen: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "process-hand-writing-event", callback: (coordinates: object, coordinatesLen: number) => void): NodeJS.EventEmitter
    emit(sigName: "process-hand-writing-event", coordinates: object, coordinatesLen: number): void
    /**
     * Emitted when a key event is received.
     * Implement the member function IBusEngineClass::process_key_event
     * in extended class to receive this signal.
     * Both the key symbol and keycode are passed to the member function.
     * See ibus_input_context_process_key_event() for further explanation of
     * key symbol, keycode and which to use.
     * @param keyval Key symbol of the key press.
     * @param keycode KeyCode of the key press.
     * @param state Key modifier flags.
     */
    connect(sigName: "process-key-event", callback: ((keyval: number, keycode: number, state: number) => boolean)): number
    on(sigName: "process-key-event", callback: (keyval: number, keycode: number, state: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "process-key-event", callback: (keyval: number, keycode: number, state: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "process-key-event", callback: (keyval: number, keycode: number, state: number) => void): NodeJS.EventEmitter
    emit(sigName: "process-key-event", keyval: number, keycode: number, state: number): void
    /**
     * Emitted when a property is activated or change changed.
     * Implement the member function IBusEngineClass::property_activate
     * in extended class to receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     * @param name Property name.
     * @param state Property state.
     */
    connect(sigName: "property-activate", callback: ((name: string, state: number) => void)): number
    on(sigName: "property-activate", callback: (name: string, state: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-activate", callback: (name: string, state: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-activate", callback: (name: string, state: number) => void): NodeJS.EventEmitter
    emit(sigName: "property-activate", name: string, state: number): void
    /**
     * Emitted when a property is hidden.
     * Implement the member function IBusEngineClass::property_hide
     * in extended class to receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     * @param name Property name.
     */
    connect(sigName: "property-hide", callback: ((name: string) => void)): number
    on(sigName: "property-hide", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-hide", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-hide", callback: (name: string) => void): NodeJS.EventEmitter
    emit(sigName: "property-hide", name: string): void
    /**
     * Emitted when a property is shown.
     * Implement the member function IBusEngineClass::property_side
     * in extended class to receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     * @param name Property name.
     */
    connect(sigName: "property-show", callback: ((name: string) => void)): number
    on(sigName: "property-show", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-show", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-show", callback: (name: string) => void): NodeJS.EventEmitter
    emit(sigName: "property-show", name: string): void
    /**
     * Emitted when the IME is reset.
     * Implement the member function IBusEngineClass::reset
     * in extended class to receive this signal.
     * 
     * See also:  ibus_input_context_reset().
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "reset", callback: (() => void)): number
    on(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reset", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "reset"): void
    /**
     * Emitted when the client application capabilities is set.
     * Implement the member function IBusEngineClass::set_capabilities
     * in extended class to receive this signal.
     * 
     * See also:  ibus_input_context_set_capabilities().
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     * @param caps Capabilities flags of IBusEngine, see #IBusCapabilite
     */
    connect(sigName: "set-capabilities", callback: ((caps: number) => void)): number
    on(sigName: "set-capabilities", callback: (caps: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-capabilities", callback: (caps: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-capabilities", callback: (caps: number) => void): NodeJS.EventEmitter
    emit(sigName: "set-capabilities", caps: number): void
    /**
     * Emitted when the client application content-type (primary
     * purpose and hints) is set.  The engine could change the
     * behavior according to the content-type.  Implement the member
     * function IBusEngineClass::set_content_type
     * in extended class to receive this signal.
     * 
     * For example, if the client application wants to restrict input
     * to numbers, this signal will be emitted with `purpose` set to
     * #IBUS_INPUT_PURPOSE_NUMBER, so the engine can switch the input
     * mode to latin.
     * 
     * <note><para>Argument `user_data` is ignored in this
     * function.</para></note>
     * @param purpose Primary purpose of the input context, as an #IBusInputPurpose.
     * @param hints Hints that augment `purpose,` as an #IBusInputHints.
     */
    connect(sigName: "set-content-type", callback: ((purpose: number, hints: number) => void)): number
    on(sigName: "set-content-type", callback: (purpose: number, hints: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-content-type", callback: (purpose: number, hints: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-content-type", callback: (purpose: number, hints: number) => void): NodeJS.EventEmitter
    emit(sigName: "set-content-type", purpose: number, hints: number): void
    /**
     * Emitted when the location of IME is set.
     * Implement the member function IBusEngineClass::set_cursor_location
     * in extended class to receive this signal.
     * 
     * See also:  ibus_input_context_set_cursor_location().
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     * @param x X coordinate of the cursor.
     * @param y Y coordinate of the cursor.
     * @param w Width of the cursor.
     * @param h Height of the cursor.
     */
    connect(sigName: "set-cursor-location", callback: ((x: number, y: number, w: number, h: number) => void)): number
    on(sigName: "set-cursor-location", callback: (x: number, y: number, w: number, h: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-cursor-location", callback: (x: number, y: number, w: number, h: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-cursor-location", callback: (x: number, y: number, w: number, h: number) => void): NodeJS.EventEmitter
    emit(sigName: "set-cursor-location", x: number, y: number, w: number, h: number): void
    /**
     * Emitted when a surrounding text is set.
     * Implement the member function IBusEngineClass::set_surrounding_text
     * in extended class to receive this signal.
     * If anchor_pos equals to cursor_pos, it means "there are no selection"
     * or "does not support selection retrival".
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     * @param text The surrounding text.
     * @param cursorPos The cursor position on surrounding text.
     * @param anchorPos The anchor position on selection area.
     */
    connect(sigName: "set-surrounding-text", callback: ((text: GObject.Object, cursorPos: number, anchorPos: number) => void)): number
    on(sigName: "set-surrounding-text", callback: (text: GObject.Object, cursorPos: number, anchorPos: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-surrounding-text", callback: (text: GObject.Object, cursorPos: number, anchorPos: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-surrounding-text", callback: (text: GObject.Object, cursorPos: number, anchorPos: number) => void): NodeJS.EventEmitter
    emit(sigName: "set-surrounding-text", text: GObject.Object, cursorPos: number, anchorPos: number): void
    /* Signals of IBus-1.0.IBus.Object */
    /**
     * Destroy and free an IBusObject
     * 
     * See also:  ibus_object_destroy().
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::engine-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::engine-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::engine-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::engine-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::engine-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::object-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Engine_ConstructProps)
    _init (config?: Engine_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(engineName: string, objectPath: string, connection: Gio.DBusConnection): Engine
    /* Function overloads */
    static new(connection: Gio.DBusConnection, path: string): Engine
    static new(): Engine
    static newWithType(engineType: GObject.Type, engineName: string, objectPath: string, connection: Gio.DBusConnection): Engine
    static $gtype: GObject.Type
}
interface EngineDesc_ConstructProps extends Serializable_ConstructProps {
    /* Constructor properties of IBus-1.0.IBus.EngineDesc */
    /**
     * The author of engine description
     */
    author?: string
    /**
     * The description of engine description
     */
    description?: string
    /**
     * The hotkeys of engine description
     */
    hotkeys?: string
    /**
     * The icon of engine description
     */
    icon?: string
    /**
     * The key of IBusProperty to change panel icon dynamically.
     */
    iconPropKey?: string
    /**
     * The language of engine description
     */
    language?: string
    /**
     * The layout of engine description
     */
    layout?: string
    /**
     * The keyboard option of engine description
     */
    layoutOption?: string
    /**
     * The keyboard variant of engine description
     */
    layoutVariant?: string
    /**
     * The license of engine description
     */
    license?: string
    /**
     * The longname of engine description
     */
    longname?: string
    /**
     * The name of engine description
     */
    name?: string
    /**
     * The rank of engine description
     */
    rank?: number
    /**
     * The exec lists of the engine setup command
     */
    setup?: string
    /**
     * The symbol chars of engine description instead of icon image
     */
    symbol?: string
    /**
     * The textdomain of engine description
     */
    textdomain?: string
    /**
     * The version number of engine description
     */
    version?: string
}
class EngineDesc {
    /* Properties of IBus-1.0.IBus.EngineDesc */
    /**
     * The author of engine description
     */
    readonly author: string
    /**
     * The description of engine description
     */
    readonly description: string
    /**
     * The hotkeys of engine description
     */
    readonly hotkeys: string
    /**
     * The icon of engine description
     */
    readonly icon: string
    /**
     * The key of IBusProperty to change panel icon dynamically.
     */
    readonly iconPropKey: string
    /**
     * The language of engine description
     */
    readonly language: string
    /**
     * The layout of engine description
     */
    readonly layout: string
    /**
     * The keyboard option of engine description
     */
    readonly layoutOption: string
    /**
     * The keyboard variant of engine description
     */
    readonly layoutVariant: string
    /**
     * The license of engine description
     */
    readonly license: string
    /**
     * The longname of engine description
     */
    readonly longname: string
    /**
     * The name of engine description
     */
    readonly name: string
    /**
     * The rank of engine description
     */
    readonly rank: number
    /**
     * The exec lists of the engine setup command
     */
    readonly setup: string
    /**
     * The symbol chars of engine description instead of icon image
     */
    readonly symbol: string
    /**
     * The textdomain of engine description
     */
    readonly textdomain: string
    /**
     * The version number of engine description
     */
    readonly version: string
    /* Fields of IBus-1.0.IBus.Object */
    parent: GObject.InitiallyUnowned
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.EngineDesc */
    /**
     * Gets the author property in IBusEngineDesc. It should not be freed.
     */
    getAuthor(): string
    /**
     * Gets the description property in IBusEngineDesc. It should not be freed.
     */
    getDescription(): string
    /**
     * Gets the hotkeys property in IBusEngineDesc. It should not be freed.
     */
    getHotkeys(): string
    /**
     * Gets the icon property in IBusEngineDesc. It should not be freed.
     */
    getIcon(): string
    /**
     * Gets the key of IBusProperty to load the panel icon dynamically
     * in IBusEngineDesc. It should not be freed.
     */
    getIconPropKey(): string
    /**
     * Gets the language property in IBusEngineDesc. It should not be freed.
     */
    getLanguage(): string
    /**
     * Gets the layout property in IBusEngineDesc. It should not be freed.
     */
    getLayout(): string
    /**
     * Gets the keyboard option property in IBusEngineDesc. It should not be freed.
     */
    getLayoutOption(): string
    /**
     * Gets the keyboard variant property in IBusEngineDesc. It should not be freed.
     */
    getLayoutVariant(): string
    /**
     * Gets the license property in IBusEngineDesc. It should not be freed.
     */
    getLicense(): string
    /**
     * Gets the longname property in IBusEngineDesc. It should not be freed.
     */
    getLongname(): string
    /**
     * Gets the name property in IBusEngineDesc. It should not be freed.
     */
    getName(): string
    /**
     * Gets the rank property in IBusEngineDesc.
     */
    getRank(): number
    /**
     * Gets the setup property in IBusEngineDesc. It should not be freed.
     */
    getSetup(): string
    /**
     * Gets the symbol property in IBusEngineDesc. It should not be freed.
     */
    getSymbol(): string
    /**
     * Gets the textdomain property in IBusEngineDesc. It should not be freed.
     */
    getTextdomain(): string
    /**
     * Gets the version property in IBusEngineDesc. It should not be freed.
     */
    getVersion(): string
    /**
     * Output XML-formatted input method engine description.
     * The result will be append to GString specified in `output`.
     * @param output XML-formatted Input method engine description.
     * @param indent Number of indent (showed as 4 spaces).
     */
    output(output: GLib.String, indent: number): void
    /* Methods of IBus-1.0.IBus.Serializable */
    /**
     * Clone an #IBusSerializable.
     * The copy method should be implemented in extended class.
     */
    copy(): Serializable
    /**
     * Gets a value from attachment of an #IBusSerializable.
     * @param key String formatted key for indexing value.
     */
    getQattachment(key: GLib.Quark): GLib.Variant
    /**
     * Remove a value from attachment of an #IBusSerializable.
     * See also: ibus_serializable_remove_attachment().
     * @param key String formatted key for indexing value.
     */
    removeQattachment(key: GLib.Quark): void
    /**
     * Serialize an #IBusSerializable to a #GVariant.
     * The serialize method should be implemented in extended class.
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
    setQattachment(key: GLib.Quark, value: GLib.Variant): void
    /* Methods of IBus-1.0.IBus.Object */
    /**
     * Emit the "destory" signal notifying all reference holders that they should
     * release the #IBusObject.
     * 
     * The memory for the object itself won't be deleted until its reference count
     * actually drops to 0; ibus_object_destroy merely asks reference holders to
     * release their references. It does not free the object.
     */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of IBus-1.0.IBus.Object */
    /**
     * Destroy and free an IBusObject
     * 
     * See also:  ibus_object_destroy().
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::author", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::author", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::author", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::hotkeys", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hotkeys", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::hotkeys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::hotkeys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::hotkeys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-prop-key", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-prop-key", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-prop-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-prop-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-prop-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::language", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-option", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-option", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-option", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-option", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-option", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-variant", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-variant", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-variant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-variant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-variant", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::license", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::longname", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::longname", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::longname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::longname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::longname", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rank", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rank", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rank", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rank", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rank", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::setup", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::setup", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::setup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::setup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::setup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::symbol", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::symbol", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::symbol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::symbol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::symbol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::textdomain", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::textdomain", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::textdomain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::textdomain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::textdomain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::version", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: EngineDesc_ConstructProps)
    _init (config?: EngineDesc_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, longname: string, description: string, language: string, license: string, author: string, icon: string, layout: string): EngineDesc
    /* Function overloads */
    static new(): EngineDesc
    static new(): EngineDesc
    static newFromXmlNode(node: XML): EngineDesc
    static $gtype: GObject.Type
}
interface EngineSimple_ConstructProps extends Engine_ConstructProps {
}
class EngineSimple {
    /* Properties of IBus-1.0.IBus.Engine */
    readonly engineName: string
    /* Properties of IBus-1.0.IBus.Service */
    /**
     * The connection of service object.
     */
    readonly connection: Gio.DBusConnection
    /**
     * The path of service object.
     */
    readonly objectPath: string
    /* Fields of IBus-1.0.IBus.Engine */
    /**
     * Whether the engine is enabled.
     */
    enabled: boolean
    /**
     * Whether the engine has focus.
     */
    hasFocus: boolean
    /**
     * Area of cursor.
     */
    cursorArea: Rectangle
    /**
     * IBusCapabilite (client capabilities) flags.
     */
    clientCapabilities: number
    /* Fields of IBus-1.0.IBus.Object */
    parent: GObject.InitiallyUnowned
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.EngineSimple */
    /**
     * Call ibus_engine_simple_add_table() internally by locale.
     * @param file The compose file. If the `file` is %NULL,        the current locale is used.
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
     */
    addTableByLocale(locale?: string | null): boolean
    /* Methods of IBus-1.0.IBus.Engine */
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
    getContentType(): [ /* purpose */ number | null, /* hints */ number | null ]
    /**
     * Return the name of #IBusEngine.
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
    getSurroundingText(): [ /* text */ Text | null, /* cursorPos */ number | null, /* anchorPos */ number | null ]
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
    /* Methods of IBus-1.0.IBus.Service */
    emitSignal(destBusName: string, interfaceName: string, signalName: string, parameters: GLib.Variant): boolean
    /**
     * Gets a connections.
     */
    getConnection(): Gio.DBusConnection
    /**
     * Gets the object path of an IBusService.
     */
    getObjectPath(): string
    /**
     * Registers service to a connection.
     * @param connection A GDBusConnection the service will be registered to.
     */
    register(connection: Gio.DBusConnection): boolean
    /**
     * Unregisters service from a connection.
     * @param connection A GDBusConnection the service was registered with.
     */
    unregister(connection: Gio.DBusConnection): void
    /* Methods of IBus-1.0.IBus.Object */
    /**
     * Emit the "destory" signal notifying all reference holders that they should
     * release the #IBusObject.
     * 
     * The memory for the object itself won't be deleted until its reference count
     * actually drops to 0; ibus_object_destroy merely asks reference holders to
     * release their references. It does not free the object.
     */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of IBus-1.0.IBus.Engine */
    /**
     * Emitted when a hand writing operation is cancelled.
     * Implement the member function IBusEngineClass::cancel_hand_writing
     * in extended class to receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     * @param nStrokes The number of strokes to be removed. 0 means "remove all".
     */
    connect(sigName: "cancel-hand-writing", callback: ((nStrokes: number) => void)): number
    on(sigName: "cancel-hand-writing", callback: (nStrokes: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cancel-hand-writing", callback: (nStrokes: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cancel-hand-writing", callback: (nStrokes: number) => void): NodeJS.EventEmitter
    emit(sigName: "cancel-hand-writing", nStrokes: number): void
    /**
     * Emitted when candidate on lookup table is clicked.
     * Implement the member function IBusEngineClass::candidate_clicked
     * in extended class to receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     * @param index Index of candidate be clicked.
     * @param button Mouse button.
     * @param state Keyboard state.
     */
    connect(sigName: "candidate-clicked", callback: ((index: number, button: number, state: number) => void)): number
    on(sigName: "candidate-clicked", callback: (index: number, button: number, state: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "candidate-clicked", callback: (index: number, button: number, state: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "candidate-clicked", callback: (index: number, button: number, state: number) => void): NodeJS.EventEmitter
    emit(sigName: "candidate-clicked", index: number, button: number, state: number): void
    /**
     * Emitted when the down cursor button is pressed.
     * Implement the member function IBusEngineClass::cursor_down
     * in extended class to receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "cursor-down", callback: (() => void)): number
    on(sigName: "cursor-down", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-down", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-down", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-down"): void
    /**
     * Emitted when the up cursor button is pressed.
     * Implement the member function IBusEngineClass::cursor_up
     * in extended class to receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "cursor-up", callback: (() => void)): number
    on(sigName: "cursor-up", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-up", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-up", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-up"): void
    /**
     * Emitted when the IME is disabled.
     * Implement the member function IBusEngineClass::disable
     * in extended class to receive this signal.
     * 
     * See also:  ibus_bus_set_global_engine().
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "disable", callback: (() => void)): number
    on(sigName: "disable", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "disable", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "disable", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "disable"): void
    /**
     * Emitted when the IME is enabled.
     * Implement the member function IBusEngineClass::enable
     * in extended class to receive this signal.
     * 
     * See also:  ibus_bus_set_global_engine().
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "enable", callback: (() => void)): number
    on(sigName: "enable", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enable", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enable", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "enable"): void
    /**
     * Emitted when the client application get the focus.
     * Implement the member function IBusEngineClass::focus_in
     * in extended class to receive this signal.
     * 
     * See also: ibus_input_context_focus_in()
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "focus-in", callback: (() => void)): number
    on(sigName: "focus-in", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-in", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-in", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "focus-in"): void
    /**
     * Emitted when the client application  lost the focus.
     * Implement the member function IBusEngineClass::focus_out
     * in extended class to receive this signal.
     * 
     * See also: ibus_input_context_focus_out()
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "focus-out", callback: (() => void)): number
    on(sigName: "focus-out", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-out", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-out", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "focus-out"): void
    /**
     * Emitted when the page-down button is pressed.
     * Implement the member function IBusEngineClass::page_down
     * in extended class to receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "page-down", callback: (() => void)): number
    on(sigName: "page-down", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "page-down", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "page-down", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "page-down"): void
    /**
     * Emitted when the page-up button is pressed.
     * Implement the member function IBusEngineClass::page_up
     * in extended class to receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "page-up", callback: (() => void)): number
    on(sigName: "page-up", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "page-up", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "page-up", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "page-up"): void
    /**
     * Emitted when a hand writing operation is cancelled.
     * Implement the member function IBusEngineClass::cancel_hand_writing
     * in extended class to receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     * @param coordinates An array of double (0.0 to 1.0) which represents a stroke (i.e. [x1, y1, x2, y2, x3, y3, ...]).
     * @param coordinatesLen The number of elements in the array.
     */
    connect(sigName: "process-hand-writing-event", callback: ((coordinates: object, coordinatesLen: number) => void)): number
    on(sigName: "process-hand-writing-event", callback: (coordinates: object, coordinatesLen: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "process-hand-writing-event", callback: (coordinates: object, coordinatesLen: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "process-hand-writing-event", callback: (coordinates: object, coordinatesLen: number) => void): NodeJS.EventEmitter
    emit(sigName: "process-hand-writing-event", coordinates: object, coordinatesLen: number): void
    /**
     * Emitted when a key event is received.
     * Implement the member function IBusEngineClass::process_key_event
     * in extended class to receive this signal.
     * Both the key symbol and keycode are passed to the member function.
     * See ibus_input_context_process_key_event() for further explanation of
     * key symbol, keycode and which to use.
     * @param keyval Key symbol of the key press.
     * @param keycode KeyCode of the key press.
     * @param state Key modifier flags.
     */
    connect(sigName: "process-key-event", callback: ((keyval: number, keycode: number, state: number) => boolean)): number
    on(sigName: "process-key-event", callback: (keyval: number, keycode: number, state: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "process-key-event", callback: (keyval: number, keycode: number, state: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "process-key-event", callback: (keyval: number, keycode: number, state: number) => void): NodeJS.EventEmitter
    emit(sigName: "process-key-event", keyval: number, keycode: number, state: number): void
    /**
     * Emitted when a property is activated or change changed.
     * Implement the member function IBusEngineClass::property_activate
     * in extended class to receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     * @param name Property name.
     * @param state Property state.
     */
    connect(sigName: "property-activate", callback: ((name: string, state: number) => void)): number
    on(sigName: "property-activate", callback: (name: string, state: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-activate", callback: (name: string, state: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-activate", callback: (name: string, state: number) => void): NodeJS.EventEmitter
    emit(sigName: "property-activate", name: string, state: number): void
    /**
     * Emitted when a property is hidden.
     * Implement the member function IBusEngineClass::property_hide
     * in extended class to receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     * @param name Property name.
     */
    connect(sigName: "property-hide", callback: ((name: string) => void)): number
    on(sigName: "property-hide", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-hide", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-hide", callback: (name: string) => void): NodeJS.EventEmitter
    emit(sigName: "property-hide", name: string): void
    /**
     * Emitted when a property is shown.
     * Implement the member function IBusEngineClass::property_side
     * in extended class to receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     * @param name Property name.
     */
    connect(sigName: "property-show", callback: ((name: string) => void)): number
    on(sigName: "property-show", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "property-show", callback: (name: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "property-show", callback: (name: string) => void): NodeJS.EventEmitter
    emit(sigName: "property-show", name: string): void
    /**
     * Emitted when the IME is reset.
     * Implement the member function IBusEngineClass::reset
     * in extended class to receive this signal.
     * 
     * See also:  ibus_input_context_reset().
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "reset", callback: (() => void)): number
    on(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reset", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "reset"): void
    /**
     * Emitted when the client application capabilities is set.
     * Implement the member function IBusEngineClass::set_capabilities
     * in extended class to receive this signal.
     * 
     * See also:  ibus_input_context_set_capabilities().
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     * @param caps Capabilities flags of IBusEngine, see #IBusCapabilite
     */
    connect(sigName: "set-capabilities", callback: ((caps: number) => void)): number
    on(sigName: "set-capabilities", callback: (caps: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-capabilities", callback: (caps: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-capabilities", callback: (caps: number) => void): NodeJS.EventEmitter
    emit(sigName: "set-capabilities", caps: number): void
    /**
     * Emitted when the client application content-type (primary
     * purpose and hints) is set.  The engine could change the
     * behavior according to the content-type.  Implement the member
     * function IBusEngineClass::set_content_type
     * in extended class to receive this signal.
     * 
     * For example, if the client application wants to restrict input
     * to numbers, this signal will be emitted with `purpose` set to
     * #IBUS_INPUT_PURPOSE_NUMBER, so the engine can switch the input
     * mode to latin.
     * 
     * <note><para>Argument `user_data` is ignored in this
     * function.</para></note>
     * @param purpose Primary purpose of the input context, as an #IBusInputPurpose.
     * @param hints Hints that augment `purpose,` as an #IBusInputHints.
     */
    connect(sigName: "set-content-type", callback: ((purpose: number, hints: number) => void)): number
    on(sigName: "set-content-type", callback: (purpose: number, hints: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-content-type", callback: (purpose: number, hints: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-content-type", callback: (purpose: number, hints: number) => void): NodeJS.EventEmitter
    emit(sigName: "set-content-type", purpose: number, hints: number): void
    /**
     * Emitted when the location of IME is set.
     * Implement the member function IBusEngineClass::set_cursor_location
     * in extended class to receive this signal.
     * 
     * See also:  ibus_input_context_set_cursor_location().
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     * @param x X coordinate of the cursor.
     * @param y Y coordinate of the cursor.
     * @param w Width of the cursor.
     * @param h Height of the cursor.
     */
    connect(sigName: "set-cursor-location", callback: ((x: number, y: number, w: number, h: number) => void)): number
    on(sigName: "set-cursor-location", callback: (x: number, y: number, w: number, h: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-cursor-location", callback: (x: number, y: number, w: number, h: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-cursor-location", callback: (x: number, y: number, w: number, h: number) => void): NodeJS.EventEmitter
    emit(sigName: "set-cursor-location", x: number, y: number, w: number, h: number): void
    /**
     * Emitted when a surrounding text is set.
     * Implement the member function IBusEngineClass::set_surrounding_text
     * in extended class to receive this signal.
     * If anchor_pos equals to cursor_pos, it means "there are no selection"
     * or "does not support selection retrival".
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     * @param text The surrounding text.
     * @param cursorPos The cursor position on surrounding text.
     * @param anchorPos The anchor position on selection area.
     */
    connect(sigName: "set-surrounding-text", callback: ((text: GObject.Object, cursorPos: number, anchorPos: number) => void)): number
    on(sigName: "set-surrounding-text", callback: (text: GObject.Object, cursorPos: number, anchorPos: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-surrounding-text", callback: (text: GObject.Object, cursorPos: number, anchorPos: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-surrounding-text", callback: (text: GObject.Object, cursorPos: number, anchorPos: number) => void): NodeJS.EventEmitter
    emit(sigName: "set-surrounding-text", text: GObject.Object, cursorPos: number, anchorPos: number): void
    /* Signals of IBus-1.0.IBus.Object */
    /**
     * Destroy and free an IBusObject
     * 
     * See also:  ibus_object_destroy().
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::engine-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::engine-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::engine-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::engine-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::engine-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::object-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: EngineSimple_ConstructProps)
    _init (config?: EngineSimple_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(engineName: string, objectPath: string, connection: Gio.DBusConnection): EngineSimple
    /* Function overloads */
    static new(connection: Gio.DBusConnection, path: string): EngineSimple
    static new(): EngineSimple
    static $gtype: GObject.Type
}
interface Factory_ConstructProps extends Service_ConstructProps {
}
class Factory {
    /* Properties of IBus-1.0.IBus.Service */
    /**
     * The connection of service object.
     */
    readonly connection: Gio.DBusConnection
    /**
     * The path of service object.
     */
    readonly objectPath: string
    /* Fields of IBus-1.0.IBus.Object */
    parent: GObject.InitiallyUnowned
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.Factory */
    /**
     * Add an engine to the factory.
     * @param engineName Name of an engine.
     * @param engineType GType of an engine.
     */
    addEngine(engineName: string, engineType: GObject.Type): void
    /**
     * Creates an #IBusEngine with `engine_name`.
     * @param engineName Name of an engine.
     */
    createEngine(engineName: string): Engine
    /* Methods of IBus-1.0.IBus.Service */
    emitSignal(destBusName: string, interfaceName: string, signalName: string, parameters: GLib.Variant): boolean
    /**
     * Gets a connections.
     */
    getConnection(): Gio.DBusConnection
    /**
     * Gets the object path of an IBusService.
     */
    getObjectPath(): string
    /**
     * Registers service to a connection.
     * @param connection A GDBusConnection the service will be registered to.
     */
    register(connection: Gio.DBusConnection): boolean
    /**
     * Unregisters service from a connection.
     * @param connection A GDBusConnection the service was registered with.
     */
    unregister(connection: Gio.DBusConnection): void
    /* Methods of IBus-1.0.IBus.Object */
    /**
     * Emit the "destory" signal notifying all reference holders that they should
     * release the #IBusObject.
     * 
     * The memory for the object itself won't be deleted until its reference count
     * actually drops to 0; ibus_object_destroy merely asks reference holders to
     * release their references. It does not free the object.
     */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of IBus-1.0.IBus.Factory */
    /**
     * The ::create-engine signal is a signal to create IBusEngine
     * with `engine_name,` which gets emitted when IBusFactory
     * received CreateEngine dbus method. The callback functions
     * will be called until a callback returns a non-null object
     * of IBusEngine.
     * @param engineName the engine_name which received the signal
     */
    connect(sigName: "create-engine", callback: ((engineName: string) => Engine | null)): number
    on(sigName: "create-engine", callback: (engineName: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "create-engine", callback: (engineName: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "create-engine", callback: (engineName: string) => void): NodeJS.EventEmitter
    emit(sigName: "create-engine", engineName: string): void
    /* Signals of IBus-1.0.IBus.Object */
    /**
     * Destroy and free an IBusObject
     * 
     * See also:  ibus_object_destroy().
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::object-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Factory_ConstructProps)
    _init (config?: Factory_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: Gio.DBusConnection): Factory
    /* Function overloads */
    static new(connection: Gio.DBusConnection, path: string): Factory
    static new(): Factory
    static $gtype: GObject.Type
}
interface HotkeyProfile_ConstructProps extends Serializable_ConstructProps {
}
class HotkeyProfile {
    /* Fields of IBus-1.0.IBus.Object */
    parent: GObject.InitiallyUnowned
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.HotkeyProfile */
    /**
     * Adds a hotkey and its associated event to an #IBusHotkeyProfile.
     * @param keyval Keycode of the hotkey.
     * @param modifiers Modifiers of the hotkey.
     * @param event The event to be associated.
     */
    addHotkey(keyval: number, modifiers: number, event: GLib.Quark): boolean
    /**
     * Adds a hotkey and its associated event to an #IBusHotkeyProfile.
     * The hotkey is in string format, such like
     * <constant>Control+Shift+A</constant>.
     * @param str Key in string representation.  '+' is the separator.
     * @param event The event to be associated.
     */
    addHotkeyFromString(str: string, event: GLib.Quark): boolean
    /**
     * Emits a <constant>::trigger</constant> signal when a hotkey is in a profile.
     * @param keyval Keycode of the hotkey.
     * @param modifiers Modifiers of the hotkey.
     * @param prevKeyval Keycode of the hotkey.
     * @param prevModifiers Modifiers of the hotkey.
     * @param userData user data for signal "trigger".
     */
    filterKeyEvent(keyval: number, modifiers: number, prevKeyval: number, prevModifiers: number, userData: object): GLib.Quark
    lookupHotkey(keyval: number, modifiers: number): GLib.Quark
    /**
     * Removes the hotkey for an #IBusHotkeyProfile.
     * @param keyval Keycode of the hotkey.
     * @param modifiers Modifiers of the hotkey.
     */
    removeHotkey(keyval: number, modifiers: number): boolean
    /**
     * Removes the hotkey for an #IBusHotkeyProfile by event.
     * @param event The associated event.
     */
    removeHotkeyByEvent(event: GLib.Quark): boolean
    /* Methods of IBus-1.0.IBus.Serializable */
    /**
     * Clone an #IBusSerializable.
     * The copy method should be implemented in extended class.
     */
    copy(): Serializable
    /**
     * Gets a value from attachment of an #IBusSerializable.
     * @param key String formatted key for indexing value.
     */
    getQattachment(key: GLib.Quark): GLib.Variant
    /**
     * Remove a value from attachment of an #IBusSerializable.
     * See also: ibus_serializable_remove_attachment().
     * @param key String formatted key for indexing value.
     */
    removeQattachment(key: GLib.Quark): void
    /**
     * Serialize an #IBusSerializable to a #GVariant.
     * The serialize method should be implemented in extended class.
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
    setQattachment(key: GLib.Quark, value: GLib.Variant): void
    /* Methods of IBus-1.0.IBus.Object */
    /**
     * Emit the "destory" signal notifying all reference holders that they should
     * release the #IBusObject.
     * 
     * The memory for the object itself won't be deleted until its reference count
     * actually drops to 0; ibus_object_destroy merely asks reference holders to
     * release their references. It does not free the object.
     */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of IBus-1.0.IBus.HotkeyProfile */
    /**
     * Emitted when a hotkey is pressed and the hotkey is in profile.
     * Implement the member function trigger() in extended class to receive this signal.
     * 
     * <note><para>The last parameter, user_data is not actually a valid parameter. It is displayed because of GtkDoc bug.</para></note>
     * @param event An event in GQuark.
     * @param userData User data for callback.
     */
    connect(sigName: "trigger", callback: ((event: number, userData: object) => void)): number
    on(sigName: "trigger", callback: (event: number, userData: object) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "trigger", callback: (event: number, userData: object) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "trigger", callback: (event: number, userData: object) => void): NodeJS.EventEmitter
    emit(sigName: "trigger", event: number, userData: object): void
    /* Signals of IBus-1.0.IBus.Object */
    /**
     * Destroy and free an IBusObject
     * 
     * See also:  ibus_object_destroy().
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: HotkeyProfile_ConstructProps)
    _init (config?: HotkeyProfile_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): HotkeyProfile
    /* Function overloads */
    static new(): HotkeyProfile
    static new(): HotkeyProfile
    static $gtype: GObject.Type
}
interface InputContext_ConstructProps extends Proxy_ConstructProps {
}
class InputContext {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    /**
     * If this property is not %G_BUS_TYPE_NONE, then
     * #GDBusProxy:g-connection must be %NULL and will be set to the
     * #GDBusConnection obtained by calling g_bus_get() with the value
     * of this property.
     */
    readonly gBusType: Gio.BusType
    /**
     * The #GDBusConnection the proxy is for.
     */
    readonly gConnection: Gio.DBusConnection
    /**
     * The timeout to use if -1 (specifying default timeout) is passed
     * as `timeout_msec` in the g_dbus_proxy_call() and
     * g_dbus_proxy_call_sync() functions.
     * 
     * This allows applications to set a proxy-wide timeout for all
     * remote method invocations on the proxy. If this property is -1,
     * the default timeout (typically 25 seconds) is used. If set to
     * %G_MAXINT, then no timeout is used.
     */
    gDefaultTimeout: number
    /**
     * Flags from the #GDBusProxyFlags enumeration.
     */
    readonly gFlags: Gio.DBusProxyFlags
    /**
     * Ensure that interactions with this proxy conform to the given
     * interface. This is mainly to ensure that malformed data received
     * from the other peer is ignored. The given #GDBusInterfaceInfo is
     * said to be the "expected interface".
     * 
     * The checks performed are:
     * - When completing a method call, if the type signature of
     *   the reply message isn't what's expected, the reply is
     *   discarded and the #GError is set to %G_IO_ERROR_INVALID_ARGUMENT.
     * 
     * - Received signals that have a type signature mismatch are dropped and
     *   a warning is logged via g_warning().
     * 
     * - Properties received via the initial `GetAll()` call or via the
     *   `::PropertiesChanged` signal (on the
     *   [org.freedesktop.DBus.Properties](http://dbus.freedesktop.org/doc/dbus-specification.html#standard-interfaces-properties)
     *   interface) or set using g_dbus_proxy_set_cached_property()
     *   with a type signature mismatch are ignored and a warning is
     *   logged via g_warning().
     * 
     * Note that these checks are never done on methods, signals and
     * properties that are not referenced in the given
     * #GDBusInterfaceInfo, since extending a D-Bus interface on the
     * service-side is not considered an ABI break.
     */
    gInterfaceInfo: Gio.DBusInterfaceInfo
    /**
     * The D-Bus interface name the proxy is for.
     */
    readonly gInterfaceName: string
    /**
     * The well-known or unique name that the proxy is for.
     */
    readonly gName: string
    /**
     * The unique name that owns #GDBusProxy:g-name or %NULL if no-one
     * currently owns that name. You may connect to #GObject::notify signal to
     * track changes to this property.
     */
    readonly gNameOwner: string
    /**
     * The object path the proxy is for.
     */
    readonly gObjectPath: string
    /* Fields of IBus-1.0.IBus.Proxy */
    parent: Gio.DBusProxy
    flags: number
    own: boolean
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.InputContext */
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
     */
    getEngineAsyncFinish(res: Gio.AsyncResult): EngineDesc
    /**
     * Check whether the current engine requires surrounding-text.
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
    /* Methods of IBus-1.0.IBus.Proxy */
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
    /* Methods of Gio-2.0.Gio.DBusProxy */
    /**
     * Asynchronously invokes the `method_name` method on `proxy`.
     * 
     * If `method_name` contains any dots, then `name` is split into interface and
     * method name parts. This allows using `proxy` for invoking methods on
     * other interfaces.
     * 
     * If the #GDBusConnection associated with `proxy` is closed then
     * the operation will fail with %G_IO_ERROR_CLOSED. If
     * `cancellable` is canceled, the operation will fail with
     * %G_IO_ERROR_CANCELLED. If `parameters` contains a value not
     * compatible with the D-Bus protocol, the operation fails with
     * %G_IO_ERROR_INVALID_ARGUMENT.
     * 
     * If the `parameters` #GVariant is floating, it is consumed. This allows
     * convenient 'inline' use of g_variant_new(), e.g.:
     * 
     * ```c
     *  g_dbus_proxy_call (proxy,
     *                     "TwoStrings",
     *                     g_variant_new ("(ss)",
     *                                    "Thing One",
     *                                    "Thing Two"),
     *                     G_DBUS_CALL_FLAGS_NONE,
     *                     -1,
     *                     NULL,
     *                     (GAsyncReadyCallback) two_strings_done,
     *                     &data);
     * ```
     * 
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `method_name` is referenced by it,
     * then the return value is checked against the return type.
     * 
     * This is an asynchronous method. When the operation is finished,
     * `callback` will be invoked in the
     * [thread-default main context][g-main-context-push-thread-default]
     * of the thread you are calling this method from.
     * You can then call g_dbus_proxy_call_finish() to get the result of
     * the operation. See g_dbus_proxy_call_sync() for the synchronous
     * version of this method.
     * 
     * If `callback` is %NULL then the D-Bus method call message will be sent with
     * the %G_DBUS_MESSAGE_FLAGS_NO_REPLY_EXPECTED flag set.
     * @param methodName Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeoutMsec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
     */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with g_dbus_proxy_call().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to g_dbus_proxy_call().
     */
    callFinish(res: Gio.AsyncResult): GLib.Variant
    /**
     * Synchronously invokes the `method_name` method on `proxy`.
     * 
     * If `method_name` contains any dots, then `name` is split into interface and
     * method name parts. This allows using `proxy` for invoking methods on
     * other interfaces.
     * 
     * If the #GDBusConnection associated with `proxy` is disconnected then
     * the operation will fail with %G_IO_ERROR_CLOSED. If
     * `cancellable` is canceled, the operation will fail with
     * %G_IO_ERROR_CANCELLED. If `parameters` contains a value not
     * compatible with the D-Bus protocol, the operation fails with
     * %G_IO_ERROR_INVALID_ARGUMENT.
     * 
     * If the `parameters` #GVariant is floating, it is consumed. This allows
     * convenient 'inline' use of g_variant_new(), e.g.:
     * 
     * ```c
     *  g_dbus_proxy_call_sync (proxy,
     *                          "TwoStrings",
     *                          g_variant_new ("(ss)",
     *                                         "Thing One",
     *                                         "Thing Two"),
     *                          G_DBUS_CALL_FLAGS_NONE,
     *                          -1,
     *                          NULL,
     *                          &error);
     * ```
     * 
     * 
     * The calling thread is blocked until a reply is received. See
     * g_dbus_proxy_call() for the asynchronous version of this
     * method.
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `method_name` is referenced by it,
     * then the return value is checked against the return type.
     * @param methodName Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal              or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeoutMsec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param cancellable A #GCancellable or %NULL.
     */
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    /**
     * Like g_dbus_proxy_call() but also takes a #GUnixFDList object.
     * 
     * This method is only available on UNIX.
     * @param methodName Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeoutMsec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param fdList A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
     */
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with g_dbus_proxy_call_with_unix_fd_list().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to g_dbus_proxy_call_with_unix_fd_list().
     */
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    /**
     * Like g_dbus_proxy_call_sync() but also takes and returns #GUnixFDList objects.
     * 
     * This method is only available on UNIX.
     * @param methodName Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal              or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeoutMsec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param fdList A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     */
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    /**
     * Looks up the value for a property from the cache. This call does no
     * blocking IO.
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `property_name` is referenced by
     * it, then `value` is checked against the type of the property.
     * @param propertyName Property name.
     */
    getCachedProperty(propertyName: string): GLib.Variant | null
    /**
     * Gets the names of all cached properties on `proxy`.
     */
    getCachedPropertyNames(): string[] | null
    /**
     * Gets the connection `proxy` is for.
     */
    getConnection(): Gio.DBusConnection
    /**
     * Gets the timeout to use if -1 (specifying default timeout) is
     * passed as `timeout_msec` in the g_dbus_proxy_call() and
     * g_dbus_proxy_call_sync() functions.
     * 
     * See the #GDBusProxy:g-default-timeout property for more details.
     */
    getDefaultTimeout(): number
    /**
     * Gets the flags that `proxy` was constructed with.
     */
    getFlags(): Gio.DBusProxyFlags
    /**
     * Returns the #GDBusInterfaceInfo, if any, specifying the interface
     * that `proxy` conforms to. See the #GDBusProxy:g-interface-info
     * property for more details.
     */
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    /**
     * Gets the D-Bus interface name `proxy` is for.
     */
    getInterfaceName(): string
    /**
     * Gets the name that `proxy` was constructed for.
     * 
     * When connected to a message bus, this will usually be non-%NULL.
     * However, it may be %NULL for a proxy that communicates using a peer-to-peer
     * pattern.
     */
    getName(): string | null
    /**
     * The unique name that owns the name that `proxy` is for or %NULL if
     * no-one currently owns that name. You may connect to the
     * #GObject::notify signal to track changes to the
     * #GDBusProxy:g-name-owner property.
     */
    getNameOwner(): string | null
    /**
     * Gets the object path `proxy` is for.
     */
    getObjectPath(): string
    /**
     * If `value` is not %NULL, sets the cached value for the property with
     * name `property_name` to the value in `value`.
     * 
     * If `value` is %NULL, then the cached value is removed from the
     * property cache.
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `property_name` is referenced by
     * it, then `value` is checked against the type of the property.
     * 
     * If the `value` #GVariant is floating, it is consumed. This allows
     * convenient 'inline' use of g_variant_new(), e.g.
     * 
     * ```c
     *  g_dbus_proxy_set_cached_property (proxy,
     *                                    "SomeProperty",
     *                                    g_variant_new ("(si)",
     *                                                  "A String",
     *                                                  42));
     * ```
     * 
     * 
     * Normally you will not need to use this method since `proxy`
     * is tracking changes using the
     * `org.freedesktop.DBus.Properties.PropertiesChanged`
     * D-Bus signal. However, for performance reasons an object may
     * decide to not use this signal for some properties and instead
     * use a proprietary out-of-band mechanism to transmit changes.
     * 
     * As a concrete example, consider an object with a property
     * `ChatroomParticipants` which is an array of strings. Instead of
     * transmitting the same (long) array every time the property changes,
     * it is more efficient to only transmit the delta using e.g. signals
     * `ChatroomParticipantJoined(String name)` and
     * `ChatroomParticipantParted(String name)`.
     * @param propertyName Property name.
     * @param value Value for the property or %NULL to remove it from the cache.
     */
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    /**
     * Sets the timeout to use if -1 (specifying default timeout) is
     * passed as `timeout_msec` in the g_dbus_proxy_call() and
     * g_dbus_proxy_call_sync() functions.
     * 
     * See the #GDBusProxy:g-default-timeout property for more details.
     * @param timeoutMsec Timeout in milliseconds.
     */
    setDefaultTimeout(timeoutMsec: number): void
    /**
     * Ensure that interactions with `proxy` conform to the given
     * interface. See the #GDBusProxy:g-interface-info property for more
     * details.
     * @param info Minimum interface this proxy conforms to    or %NULL to unset.
     */
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @param ioPriority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes asynchronous initialization and returns the result.
     * See g_async_initable_init_async().
     * @param res a #GAsyncResult.
     */
    initFinish(res: Gio.AsyncResult): boolean
    /**
     * Finishes the async construction for the various g_async_initable_new
     * calls, returning the created object or %NULL on error.
     * @param res the #GAsyncResult from the callback
     */
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    /**
     * Gets the #GDBusObject that `interface_` belongs to, if any.
     */
    getObject(): Gio.DBusObject | null
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     */
    getInfo(): Gio.DBusInterfaceInfo
    /**
     * Sets the #GDBusObject for `interface_` to `object`.
     * 
     * Note that `interface_` will hold a weak reference to `object`.
     * @param object A #GDBusObject or %NULL.
     */
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
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
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of IBus-1.0.IBus.InputContext */
    /**
     * Emitted when the text is going to be committed.
     * 
     * (Note: The text object is floating, and it will be released after the
     *  signal. If signal handler wants to keep the object, the handler should
     *  use g_object_ref_sink() to get the ownership of the object.)
     * @param text Text to be committed.
     */
    connect(sigName: "commit-text", callback: ((text: Text) => void)): number
    on(sigName: "commit-text", callback: (text: Text) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "commit-text", callback: (text: Text) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "commit-text", callback: (text: Text) => void): NodeJS.EventEmitter
    emit(sigName: "commit-text", text: Text): void
    /**
     * Emitted to select next candidate of lookup table.
     */
    connect(sigName: "cursor-down-lookup-table", callback: (() => void)): number
    on(sigName: "cursor-down-lookup-table", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-down-lookup-table", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-down-lookup-table", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-down-lookup-table"): void
    /**
     * Emitted to select previous candidate of lookup table.
     */
    connect(sigName: "cursor-up-lookup-table", callback: (() => void)): number
    on(sigName: "cursor-up-lookup-table", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-up-lookup-table", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-up-lookup-table", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-up-lookup-table"): void
    /**
     * Emitted to delete surrounding text event from IME to client of IME.
     * @param offset the character offset from the cursor position of the text to be deleted.   A negative value indicates a position before the cursor.
     * @param nChars the number of characters to be deleted.
     */
    connect(sigName: "delete-surrounding-text", callback: ((offset: number, nChars: number) => void)): number
    on(sigName: "delete-surrounding-text", callback: (offset: number, nChars: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "delete-surrounding-text", callback: (offset: number, nChars: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "delete-surrounding-text", callback: (offset: number, nChars: number) => void): NodeJS.EventEmitter
    emit(sigName: "delete-surrounding-text", offset: number, nChars: number): void
    /**
     * Emitted when an IME is disabled.
     */
    connect(sigName: "disabled", callback: (() => void)): number
    on(sigName: "disabled", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "disabled", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "disabled", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "disabled"): void
    /**
     * Emitted when an IME is enabled.
     */
    connect(sigName: "enabled", callback: (() => void)): number
    on(sigName: "enabled", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enabled", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enabled", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "enabled"): void
    /**
     * Emitted to forward key event from IME to client of IME.
     * @param keyval Key symbol of the keyboard event.
     * @param keycode Key symbol of the keyboard event.
     * @param modifiers Key modifier flags.
     */
    connect(sigName: "forward-key-event", callback: ((keyval: number, keycode: number, modifiers: number) => void)): number
    on(sigName: "forward-key-event", callback: (keyval: number, keycode: number, modifiers: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "forward-key-event", callback: (keyval: number, keycode: number, modifiers: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "forward-key-event", callback: (keyval: number, keycode: number, modifiers: number) => void): NodeJS.EventEmitter
    emit(sigName: "forward-key-event", keyval: number, keycode: number, modifiers: number): void
    /**
     * Emitted to hide auxiliary text.
     */
    connect(sigName: "hide-auxiliary-text", callback: (() => void)): number
    on(sigName: "hide-auxiliary-text", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide-auxiliary-text", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide-auxiliary-text", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hide-auxiliary-text"): void
    /**
     * Emitted to hide lookup table.
     */
    connect(sigName: "hide-lookup-table", callback: (() => void)): number
    on(sigName: "hide-lookup-table", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide-lookup-table", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide-lookup-table", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hide-lookup-table"): void
    /**
     * Emitted to hide preedit text.
     */
    connect(sigName: "hide-preedit-text", callback: (() => void)): number
    on(sigName: "hide-preedit-text", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide-preedit-text", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide-preedit-text", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hide-preedit-text"): void
    /**
     * Emitted to view the next page of lookup table.
     */
    connect(sigName: "page-down-lookup-table", callback: (() => void)): number
    on(sigName: "page-down-lookup-table", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "page-down-lookup-table", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "page-down-lookup-table", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "page-down-lookup-table"): void
    /**
     * Emitted to view the previous page of lookup table.
     */
    connect(sigName: "page-up-lookup-table", callback: (() => void)): number
    on(sigName: "page-up-lookup-table", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "page-up-lookup-table", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "page-up-lookup-table", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "page-up-lookup-table"): void
    /**
     * Emitted to register the properties in `props`.
     * 
     * (Note: The props object is floating, and it will be released after the
     *  signal. If signal handler wants to keep the object, the handler should
     *  use g_object_ref_sink() to get the ownership of the object.)
     * @param props An IBusPropList that contains properties.
     */
    connect(sigName: "register-properties", callback: ((props: PropList) => void)): number
    on(sigName: "register-properties", callback: (props: PropList) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "register-properties", callback: (props: PropList) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "register-properties", callback: (props: PropList) => void): NodeJS.EventEmitter
    emit(sigName: "register-properties", props: PropList): void
    /**
     * Emitted to show auxiliary text.
     */
    connect(sigName: "show-auxiliary-text", callback: (() => void)): number
    on(sigName: "show-auxiliary-text", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-auxiliary-text", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-auxiliary-text", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show-auxiliary-text"): void
    /**
     * Emitted to show lookup table.
     */
    connect(sigName: "show-lookup-table", callback: (() => void)): number
    on(sigName: "show-lookup-table", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-lookup-table", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-lookup-table", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show-lookup-table"): void
    /**
     * Emitted to show preedit text.
     */
    connect(sigName: "show-preedit-text", callback: (() => void)): number
    on(sigName: "show-preedit-text", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-preedit-text", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-preedit-text", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show-preedit-text"): void
    /**
     * Emitted to hide auxilary text.
     * 
     * (Note: The text object is floating, and it will be released after the
     *  signal. If signal handler wants to keep the object, the handler should
     *  use g_object_ref_sink() to get the ownership of the object.)
     * @param text An auxiliary text
     * @param visible The visibility of `text`
     */
    connect(sigName: "update-auxiliary-text", callback: ((text: Text, visible: boolean) => void)): number
    on(sigName: "update-auxiliary-text", callback: (text: Text, visible: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "update-auxiliary-text", callback: (text: Text, visible: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "update-auxiliary-text", callback: (text: Text, visible: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "update-auxiliary-text", text: Text, visible: boolean): void
    /**
     * Emitted to update lookup table.
     * 
     * (Note: The table object is floating, and it will be released after the
     *  signal. If signal handler wants to keep the object, the handler should
     *  use g_object_ref_sink() to get the ownership of the object.)
     * @param table An IBusLookupTable to be updated.
     * @param visible Whether the table should be visible.
     */
    connect(sigName: "update-lookup-table", callback: ((table: LookupTable, visible: boolean) => void)): number
    on(sigName: "update-lookup-table", callback: (table: LookupTable, visible: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "update-lookup-table", callback: (table: LookupTable, visible: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "update-lookup-table", callback: (table: LookupTable, visible: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "update-lookup-table", table: LookupTable, visible: boolean): void
    /**
     * Emitted to update preedit text.
     * 
     * (Note: The text object is floating, and it will be released after the
     *  signal. If signal handler wants to keep the object, the handler should
     *  use g_object_ref_sink() to get the ownership of the object.)
     * @param text Text to be updated.
     * @param cursorPos Cursor position.
     * @param visible Whether the update is visible.
     */
    connect(sigName: "update-preedit-text", callback: ((text: Text, cursorPos: number, visible: boolean) => void)): number
    on(sigName: "update-preedit-text", callback: (text: Text, cursorPos: number, visible: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "update-preedit-text", callback: (text: Text, cursorPos: number, visible: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "update-preedit-text", callback: (text: Text, cursorPos: number, visible: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "update-preedit-text", text: Text, cursorPos: number, visible: boolean): void
    /**
     * Emitted to update the property `prop`.
     * 
     * (Note: The prop object is floating, and it will be released after the
     *  signal. If signal handler wants to keep the object, the handler should
     *  use g_object_ref_sink() to get the ownership of the object.)
     * @param prop The IBusProperty to be updated.
     */
    connect(sigName: "update-property", callback: ((prop: Property) => void)): number
    on(sigName: "update-property", callback: (prop: Property) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "update-property", callback: (prop: Property) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "update-property", callback: (prop: Property) => void): NodeJS.EventEmitter
    emit(sigName: "update-property", prop: Property): void
    /* Signals of IBus-1.0.IBus.Proxy */
    /**
     * Destroy and free an IBusProxy
     * 
     * See also:  ibus_proxy_destroy().
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    /**
     * Emitted when one or more D-Bus properties on `proxy` changes. The
     * local cache has already been updated when this signal fires. Note
     * that both `changed_properties` and `invalidated_properties` are
     * guaranteed to never be %NULL (either may be empty though).
     * 
     * If the proxy has the flag
     * %G_DBUS_PROXY_FLAGS_GET_INVALIDATED_PROPERTIES set, then
     * `invalidated_properties` will always be empty.
     * 
     * This signal corresponds to the
     * `PropertiesChanged` D-Bus signal on the
     * `org.freedesktop.DBus.Properties` interface.
     * @param changedProperties A #GVariant containing the properties that changed (type: `a{sv}`)
     * @param invalidatedProperties A %NULL terminated array of properties that was invalidated
     */
    connect(sigName: "g-properties-changed", callback: ((changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    on(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    /**
     * Emitted when a signal from the remote object and interface that `proxy` is for, has been received.
     * 
     * Since 2.72 this signal supports detailed connections. You can connect to
     * the detailed signal `g-signal::x` in order to receive callbacks only when
     * signal `x` is received from the remote object.
     * @param senderName The sender of the signal or %NULL if the connection is not a bus connection.
     * @param signalName The name of the signal.
     * @param parameters A #GVariant tuple with parameters for the signal.
     */
    connect(sigName: "g-signal", callback: ((senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    on(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-bus-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-object-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: InputContext_ConstructProps)
    _init (config?: InputContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: string, connection: Gio.DBusConnection, cancellable?: Gio.Cancellable | null): InputContext
    static newAsyncFinish(res: Gio.AsyncResult): InputContext
    /**
     * Gets an existing IBusInputContext.
     * @param path The path to the object that emitting the signal.
     * @param connection A GDBusConnection.
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
     */
    static getInputContextAsyncFinish(res: Gio.AsyncResult): InputContext
    /**
     * Creates a new #IBusInputContext asynchronously.
     * @param path The path to the object that emitting the signal.
     * @param connection A #GDBusConnection.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.      The callback should not be %NULL.
     */
    static newAsync(path: string, connection: Gio.DBusConnection, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Helper function for constructing #GAsyncInitable object. This is
     * similar to g_object_newv() but also initializes the object asynchronously.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_new_finish() to get the new object and check
     * for any errors.
     * @param objectType a #GType supporting #GAsyncInitable.
     * @param nParameters the number of parameters in `parameters`
     * @param parameters the parameters to use to construct the object
     * @param ioPriority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the initialization is     finished
     */
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     * @param objectType a #GType supporting #GInitable.
     * @param parameters the parameters to use to construct the object
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface Keymap_ConstructProps extends Object_ConstructProps {
}
class Keymap {
    /* Fields of IBus-1.0.IBus.Object */
    parent: GObject.InitiallyUnowned
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.Keymap */
    /**
     * Converts the scancode to keysym, given the keymap.
     * @param keycode A scancode to be converted.
     * @param state Modifier flags(such as Ctrl, Shift).
     */
    lookupKeysym(keycode: number, state: number): number
    /* Methods of IBus-1.0.IBus.Object */
    /**
     * Emit the "destory" signal notifying all reference holders that they should
     * release the #IBusObject.
     * 
     * The memory for the object itself won't be deleted until its reference count
     * actually drops to 0; ibus_object_destroy merely asks reference holders to
     * release their references. It does not free the object.
     */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of IBus-1.0.IBus.Object */
    /**
     * Destroy and free an IBusObject
     * 
     * See also:  ibus_object_destroy().
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Keymap_ConstructProps)
    _init (config?: Keymap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string): Keymap
    /* Function overloads */
    static new(): Keymap
    /**
     * Get an IBusKeymap associated with the giving name.
     * 
     * This function loads the keymap file specified in `name`
     * in the IBUS_DATA_DIR/keymaps directory.
     * @param name The keymap file to be loaded, such as 'us', 'jp'.
     */
    static get(name: string): Keymap
    static $gtype: GObject.Type
}
interface LookupTable_ConstructProps extends Serializable_ConstructProps {
}
class LookupTable {
    /* Fields of IBus-1.0.IBus.Object */
    parent: GObject.InitiallyUnowned
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.LookupTable */
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
     */
    cursorDown(): boolean
    /**
     * Go to previous candidate of an #IBusLookupTable.
     * 
     * It returns FALSE if it is already at the first candidate,
     * unless  <code>table&gt;-round==TRUE</code>, where it will go
     * to the last candidate.
     */
    cursorUp(): boolean
    /**
     * Return #IBusText at the given index. Borrowed reference.
     * @param index Index in the Lookup table.
     */
    getCandidate(index: number): Text
    /**
     * Gets the cursor position in current page of #IBusLookupTable.
     */
    getCursorInPage(): number
    /**
     * Gets the cursor position of #IBusLookupTable.
     */
    getCursorPos(): number
    /**
     * Return #IBusText at the given index. Borrowed reference.
     * @param index Index in the Lookup table.
     */
    getLabel(index: number): Text
    /**
     * Return the number of candidate in the table.
     */
    getNumberOfCandidates(): number
    /**
     * Returns the orientation of the #IBusLookupTable.
     */
    getOrientation(): number
    /**
     * Gets the number of candidate shown per page.
     */
    getPageSize(): number
    /**
     * Returns whether the cursor of an #IBusLookupTable is visible.
     */
    isCursorVisible(): boolean
    /**
     * Returns whether the #IBusLookupTable is round.
     */
    isRound(): boolean
    /**
     * Go to next page of an #IBusLookupTable.
     * 
     * It returns FALSE if it is already at the last page,
     * unless  <code>table&gt;-round==TRUE</code>, where it will go
     * to the first page.
     */
    pageDown(): boolean
    /**
     * Go to previous page of an #IBusLookupTable.
     * 
     * It returns FALSE if it is already at the first page,
     * unless  <code>table&gt;-round==TRUE</code>, where it will go
     * to the last page.
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
    /* Methods of IBus-1.0.IBus.Serializable */
    /**
     * Clone an #IBusSerializable.
     * The copy method should be implemented in extended class.
     */
    copy(): Serializable
    /**
     * Gets a value from attachment of an #IBusSerializable.
     * @param key String formatted key for indexing value.
     */
    getQattachment(key: GLib.Quark): GLib.Variant
    /**
     * Remove a value from attachment of an #IBusSerializable.
     * See also: ibus_serializable_remove_attachment().
     * @param key String formatted key for indexing value.
     */
    removeQattachment(key: GLib.Quark): void
    /**
     * Serialize an #IBusSerializable to a #GVariant.
     * The serialize method should be implemented in extended class.
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
    setQattachment(key: GLib.Quark, value: GLib.Variant): void
    /* Methods of IBus-1.0.IBus.Object */
    /**
     * Emit the "destory" signal notifying all reference holders that they should
     * release the #IBusObject.
     * 
     * The memory for the object itself won't be deleted until its reference count
     * actually drops to 0; ibus_object_destroy merely asks reference holders to
     * release their references. It does not free the object.
     */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of IBus-1.0.IBus.Object */
    /**
     * Destroy and free an IBusObject
     * 
     * See also:  ibus_object_destroy().
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: LookupTable_ConstructProps)
    _init (config?: LookupTable_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(pageSize: number, cursorPos: number, cursorVisible: boolean, round: boolean): LookupTable
    /* Function overloads */
    static new(): LookupTable
    static new(): LookupTable
    static $gtype: GObject.Type
}
interface Object_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
}
class Object {
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.Object */
    /**
     * Emit the "destory" signal notifying all reference holders that they should
     * release the #IBusObject.
     * 
     * The memory for the object itself won't be deleted until its reference count
     * actually drops to 0; ibus_object_destroy merely asks reference holders to
     * release their references. It does not free the object.
     */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of IBus-1.0.IBus.Object */
    /**
     * Destroy and free an IBusObject
     * 
     * See also:  ibus_object_destroy().
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Object
    static $gtype: GObject.Type
}
interface ObservedPath_ConstructProps extends Serializable_ConstructProps {
}
class ObservedPath {
    /* Fields of IBus-1.0.IBus.Object */
    parent: GObject.InitiallyUnowned
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.ObservedPath */
    /**
     * Checks whether the path is modified by comparing the mtime in object and
     * mtime in file system.
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
     */
    traverse(dirOnly: boolean): ObservedPath[]
    /* Methods of IBus-1.0.IBus.Serializable */
    /**
     * Clone an #IBusSerializable.
     * The copy method should be implemented in extended class.
     */
    copy(): Serializable
    /**
     * Gets a value from attachment of an #IBusSerializable.
     * @param key String formatted key for indexing value.
     */
    getQattachment(key: GLib.Quark): GLib.Variant
    /**
     * Remove a value from attachment of an #IBusSerializable.
     * See also: ibus_serializable_remove_attachment().
     * @param key String formatted key for indexing value.
     */
    removeQattachment(key: GLib.Quark): void
    /**
     * Serialize an #IBusSerializable to a #GVariant.
     * The serialize method should be implemented in extended class.
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
    setQattachment(key: GLib.Quark, value: GLib.Variant): void
    /* Methods of IBus-1.0.IBus.Object */
    /**
     * Emit the "destory" signal notifying all reference holders that they should
     * release the #IBusObject.
     * 
     * The memory for the object itself won't be deleted until its reference count
     * actually drops to 0; ibus_object_destroy merely asks reference holders to
     * release their references. It does not free the object.
     */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of IBus-1.0.IBus.Object */
    /**
     * Destroy and free an IBusObject
     * 
     * See also:  ibus_object_destroy().
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ObservedPath_ConstructProps)
    _init (config?: ObservedPath_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(path: string, fillStat: boolean): ObservedPath
    /* Function overloads */
    static new(): ObservedPath
    static new(): ObservedPath
    static newFromXmlNode(node: XML, fillStat: boolean): ObservedPath
    static $gtype: GObject.Type
}
interface PanelService_ConstructProps extends Service_ConstructProps {
}
class PanelService {
    /* Properties of IBus-1.0.IBus.Service */
    /**
     * The connection of service object.
     */
    readonly connection: Gio.DBusConnection
    /**
     * The path of service object.
     */
    readonly objectPath: string
    /* Fields of IBus-1.0.IBus.Object */
    parent: GObject.InitiallyUnowned
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.PanelService */
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
    /* Methods of IBus-1.0.IBus.Service */
    emitSignal(destBusName: string, interfaceName: string, signalName: string, parameters: GLib.Variant): boolean
    /**
     * Gets a connections.
     */
    getConnection(): Gio.DBusConnection
    /**
     * Gets the object path of an IBusService.
     */
    getObjectPath(): string
    /**
     * Registers service to a connection.
     * @param connection A GDBusConnection the service will be registered to.
     */
    register(connection: Gio.DBusConnection): boolean
    /**
     * Unregisters service from a connection.
     * @param connection A GDBusConnection the service was registered with.
     */
    unregister(connection: Gio.DBusConnection): void
    /* Methods of IBus-1.0.IBus.Object */
    /**
     * Emit the "destory" signal notifying all reference holders that they should
     * release the #IBusObject.
     * 
     * The memory for the object itself won't be deleted until its reference count
     * actually drops to 0; ibus_object_destroy merely asks reference holders to
     * release their references. It does not free the object.
     */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of IBus-1.0.IBus.PanelService */
    /**
     * Emitted when the client application get the ::cursor-down-lookup-table.
     * Implement the member function
     * IBusPanelServiceClass::cursor_down_lookup_table in extended
     * class to receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para>
     * </note>
     */
    connect(sigName: "cursor-down-lookup-table", callback: (() => void)): number
    on(sigName: "cursor-down-lookup-table", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-down-lookup-table", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-down-lookup-table", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-down-lookup-table"): void
    /**
     * Emitted when the client application get the ::cursor-up-lookup-table.
     * Implement the member function
     * IBusPanelServiceClass::cursor_up_lookup_table in extended
     * class to receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para>
     * </note>
     */
    connect(sigName: "cursor-up-lookup-table", callback: (() => void)): number
    on(sigName: "cursor-up-lookup-table", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-up-lookup-table", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-up-lookup-table", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "cursor-up-lookup-table"): void
    /**
     * Emitted when the client application destroys.
     * Implement the member function
     * IBusPanelServiceClass::destroy_context in extended class to
     * receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para>
     * </note>
     * @param inputContextPath Object path of InputContext.
     */
    connect(sigName: "destroy-context", callback: ((inputContextPath: string) => void)): number
    on(sigName: "destroy-context", callback: (inputContextPath: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy-context", callback: (inputContextPath: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy-context", callback: (inputContextPath: string) => void): NodeJS.EventEmitter
    emit(sigName: "destroy-context", inputContextPath: string): void
    /**
     * Emitted when the client application get the ::focus-in.
     * Implement the member function
     * IBusPanelServiceClass::focus_in in extended class to receive
     * this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para>
     * </note>
     * @param inputContextPath Object path of InputContext.
     */
    connect(sigName: "focus-in", callback: ((inputContextPath: string) => void)): number
    on(sigName: "focus-in", callback: (inputContextPath: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-in", callback: (inputContextPath: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-in", callback: (inputContextPath: string) => void): NodeJS.EventEmitter
    emit(sigName: "focus-in", inputContextPath: string): void
    /**
     * Emitted when the client application get the ::focus-out.
     * Implement the member function
     * IBusPanelServiceClass::focus_out in extended class to receive
     * this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para>
     * </note>
     * @param inputContextPath Object path of InputContext.
     */
    connect(sigName: "focus-out", callback: ((inputContextPath: string) => void)): number
    on(sigName: "focus-out", callback: (inputContextPath: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus-out", callback: (inputContextPath: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus-out", callback: (inputContextPath: string) => void): NodeJS.EventEmitter
    emit(sigName: "focus-out", inputContextPath: string): void
    /**
     * Emitted when the client application get the ::hide-auxiliary-text.
     * Implement the member function
     * IBusPanelServiceClass::hide_auxiliary_text in extended class
     * to receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para>
     * </note>
     */
    connect(sigName: "hide-auxiliary-text", callback: (() => void)): number
    on(sigName: "hide-auxiliary-text", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide-auxiliary-text", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide-auxiliary-text", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hide-auxiliary-text"): void
    /**
     * Emitted when the client application get the ::hide-language-bar.
     * Implement the member function
     * IBusPanelServiceClass::hide_language_bar in extended class to
     * receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para>
     * </note>
     */
    connect(sigName: "hide-language-bar", callback: (() => void)): number
    on(sigName: "hide-language-bar", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide-language-bar", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide-language-bar", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hide-language-bar"): void
    /**
     * Emitted when the client application get the ::hide-lookup-table.
     * Implement the member function
     * IBusPanelServiceClass::hide_lookup_table in extended class to
     * receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para>
     * </note>
     */
    connect(sigName: "hide-lookup-table", callback: (() => void)): number
    on(sigName: "hide-lookup-table", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide-lookup-table", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide-lookup-table", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hide-lookup-table"): void
    /**
     * Emitted when the client application get the ::hide-preedit-text.
     * Implement the member function
     * IBusPanelServiceClass::hide_preedit_text in extended class to
     * receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para>
     * </note>
     */
    connect(sigName: "hide-preedit-text", callback: (() => void)): number
    on(sigName: "hide-preedit-text", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide-preedit-text", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide-preedit-text", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hide-preedit-text"): void
    /**
     * Emitted when the client application get the ::page-down-lookup-table.
     * Implement the member function
     * IBusPanelServiceClass::page_down_lookup_table in extended
     * class to receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para>
     * </note>
     */
    connect(sigName: "page-down-lookup-table", callback: (() => void)): number
    on(sigName: "page-down-lookup-table", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "page-down-lookup-table", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "page-down-lookup-table", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "page-down-lookup-table"): void
    /**
     * Emitted when the client application get the ::page-up-lookup-table.
     * Implement the member function
     * IBusPanelServiceClass::page_up_lookup_table in extended class
     * to receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para>
     * </note>
     */
    connect(sigName: "page-up-lookup-table", callback: (() => void)): number
    on(sigName: "page-up-lookup-table", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "page-up-lookup-table", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "page-up-lookup-table", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "page-up-lookup-table"): void
    /**
     * Emitted when the client application get the ::register-properties.
     * Implement the member function
     * IBusPanelServiceClass::register_properties in extended class
     * to receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para>
     * </note>
     * @param propList An IBusPropList that contains properties.
     */
    connect(sigName: "register-properties", callback: ((propList: PropList) => void)): number
    on(sigName: "register-properties", callback: (propList: PropList) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "register-properties", callback: (propList: PropList) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "register-properties", callback: (propList: PropList) => void): NodeJS.EventEmitter
    emit(sigName: "register-properties", propList: PropList): void
    /**
     * Emitted when the client application get the ::reset.
     * Implement the member function
     * IBusPanelServiceClass::reset in extended class to receive this
     * signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para>
     * </note>
     */
    connect(sigName: "reset", callback: (() => void)): number
    on(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reset", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reset", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "reset"): void
    /**
     * Emitted when the client application get the ::set-content-type.
     * Implement the member function
     * IBusPanelServiceClass::set_content_type in extended class to
     * receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para>
     * </note>
     * @param purpose Input purpose.
     * @param hints Input hints.
     */
    connect(sigName: "set-content-type", callback: ((purpose: number, hints: number) => void)): number
    on(sigName: "set-content-type", callback: (purpose: number, hints: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-content-type", callback: (purpose: number, hints: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-content-type", callback: (purpose: number, hints: number) => void): NodeJS.EventEmitter
    emit(sigName: "set-content-type", purpose: number, hints: number): void
    /**
     * Emitted when the client application get the ::set-cursor-location.
     * Implement the member function
     * IBusPanelServiceClass::set_cursor_location in extended class
     * to receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para>
     * </note>
     * @param x X coordinate of the cursor.
     * @param y Y coordinate of the cursor.
     * @param w Width of the cursor.
     * @param h Height of the cursor.
     */
    connect(sigName: "set-cursor-location", callback: ((x: number, y: number, w: number, h: number) => void)): number
    on(sigName: "set-cursor-location", callback: (x: number, y: number, w: number, h: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-cursor-location", callback: (x: number, y: number, w: number, h: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-cursor-location", callback: (x: number, y: number, w: number, h: number) => void): NodeJS.EventEmitter
    emit(sigName: "set-cursor-location", x: number, y: number, w: number, h: number): void
    /**
     * Emitted when the client application get the ::show-auxiliary-text.
     * Implement the member function
     * IBusPanelServiceClass::show_auxiliary_text in extended class
     * to receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para>
     * </note>
     */
    connect(sigName: "show-auxiliary-text", callback: (() => void)): number
    on(sigName: "show-auxiliary-text", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-auxiliary-text", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-auxiliary-text", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show-auxiliary-text"): void
    /**
     * Emitted when the client application get the ::show-language-bar.
     * Implement the member function
     * IBusPanelServiceClass::show_language_bar in extended class to
     * receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para>
     * </note>
     */
    connect(sigName: "show-language-bar", callback: (() => void)): number
    on(sigName: "show-language-bar", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-language-bar", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-language-bar", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show-language-bar"): void
    /**
     * Emitted when the client application get the ::show-lookup-table.
     * Implement the member function
     * IBusPanelServiceClass::show_lookup_table in extended class to
     * receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para>
     * </note>
     */
    connect(sigName: "show-lookup-table", callback: (() => void)): number
    on(sigName: "show-lookup-table", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-lookup-table", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-lookup-table", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show-lookup-table"): void
    /**
     * Emitted when the client application get the ::show-preedit-text.
     * Implement the member function
     * IBusPanelServiceClass::show_preedit_text in extended class to
     * receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para>
     * </note>
     */
    connect(sigName: "show-preedit-text", callback: (() => void)): number
    on(sigName: "show-preedit-text", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-preedit-text", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-preedit-text", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show-preedit-text"): void
    /**
     * Emitted when the client application get the ::start-setup.
     * Implement the member function
     * IBusPanelServiceClass::start_setup in extended class to
     * receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para>
     * </note>
     */
    connect(sigName: "start-setup", callback: (() => void)): number
    on(sigName: "start-setup", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "start-setup", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "start-setup", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "start-setup"): void
    /**
     * Emitted when the client application get the ::state-changed.
     * Implement the member function
     * IBusPanelServiceClass::state_changed in extended class to
     * receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para>
     * </note>
     */
    connect(sigName: "state-changed", callback: (() => void)): number
    on(sigName: "state-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "state-changed"): void
    /**
     * Emitted when the client application get the ::update-auxiliary-text.
     * Implement the member function
     * IBusPanelServiceClass::update_auxiliary_text in extended class
     * to receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para>
     * </note>
     * @param text A preedit text to be updated.
     * @param visible Whether the update is visible.
     */
    connect(sigName: "update-auxiliary-text", callback: ((text: Text, visible: boolean) => void)): number
    on(sigName: "update-auxiliary-text", callback: (text: Text, visible: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "update-auxiliary-text", callback: (text: Text, visible: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "update-auxiliary-text", callback: (text: Text, visible: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "update-auxiliary-text", text: Text, visible: boolean): void
    /**
     * Emitted when the client application get the ::update-lookup-table.
     * Implement the member function
     * IBusPanelServiceClass::update_lookup_table in extended class
     * to receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para>
     * </note>
     * @param lookupTable A lookup table to be updated.
     * @param visible Whether the update is visible.
     */
    connect(sigName: "update-lookup-table", callback: ((lookupTable: LookupTable, visible: boolean) => void)): number
    on(sigName: "update-lookup-table", callback: (lookupTable: LookupTable, visible: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "update-lookup-table", callback: (lookupTable: LookupTable, visible: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "update-lookup-table", callback: (lookupTable: LookupTable, visible: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "update-lookup-table", lookupTable: LookupTable, visible: boolean): void
    /**
     * Emitted when the client application get the ::update-preedit-text.
     * Implement the member function
     * IBusPanelServiceClass::update_preedit_text in extended class
     * to receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para>
     * </note>
     * @param text A preedit text to be updated.
     * @param cursorPos The cursor position of the text.
     * @param visible Whether the update is visible.
     */
    connect(sigName: "update-preedit-text", callback: ((text: Text, cursorPos: number, visible: boolean) => void)): number
    on(sigName: "update-preedit-text", callback: (text: Text, cursorPos: number, visible: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "update-preedit-text", callback: (text: Text, cursorPos: number, visible: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "update-preedit-text", callback: (text: Text, cursorPos: number, visible: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "update-preedit-text", text: Text, cursorPos: number, visible: boolean): void
    /**
     * Emitted when the client application get the ::update-property.
     * Implement the member function
     * IBusPanelServiceClass::update_property in extended class to
     * receive this signal.
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para>
     * </note>
     * @param prop The IBusProperty to be updated.
     */
    connect(sigName: "update-property", callback: ((prop: Property) => void)): number
    on(sigName: "update-property", callback: (prop: Property) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "update-property", callback: (prop: Property) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "update-property", callback: (prop: Property) => void): NodeJS.EventEmitter
    emit(sigName: "update-property", prop: Property): void
    /* Signals of IBus-1.0.IBus.Object */
    /**
     * Destroy and free an IBusObject
     * 
     * See also:  ibus_object_destroy().
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::object-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PanelService_ConstructProps)
    _init (config?: PanelService_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: Gio.DBusConnection): PanelService
    /* Function overloads */
    static new(connection: Gio.DBusConnection, path: string): PanelService
    static new(): PanelService
    static $gtype: GObject.Type
}
interface PropList_ConstructProps extends Serializable_ConstructProps {
}
class PropList {
    /* Fields of IBus-1.0.IBus.Object */
    parent: GObject.InitiallyUnowned
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.PropList */
    /**
     * Append an IBusProperty to an IBusPropList, and increase reference.
     * @param prop IBusProperty to be append to `prop_list`.
     */
    append(prop: Property): void
    /**
     * Gets #IBusProperty at given index. Borrowed reference.
     * @param index Index of an IBusPropList.
     */
    get(index: number): Property
    /**
     * Update an IBusProperty in IBusPropList.
     * @param prop IBusProperty to be update.
     */
    updateProperty(prop: Property): boolean
    /* Methods of IBus-1.0.IBus.Serializable */
    /**
     * Clone an #IBusSerializable.
     * The copy method should be implemented in extended class.
     */
    copy(): Serializable
    /**
     * Gets a value from attachment of an #IBusSerializable.
     * @param key String formatted key for indexing value.
     */
    getQattachment(key: GLib.Quark): GLib.Variant
    /**
     * Remove a value from attachment of an #IBusSerializable.
     * See also: ibus_serializable_remove_attachment().
     * @param key String formatted key for indexing value.
     */
    removeQattachment(key: GLib.Quark): void
    /**
     * Serialize an #IBusSerializable to a #GVariant.
     * The serialize method should be implemented in extended class.
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
    setQattachment(key: GLib.Quark, value: GLib.Variant): void
    /* Methods of IBus-1.0.IBus.Object */
    /**
     * Emit the "destory" signal notifying all reference holders that they should
     * release the #IBusObject.
     * 
     * The memory for the object itself won't be deleted until its reference count
     * actually drops to 0; ibus_object_destroy merely asks reference holders to
     * release their references. It does not free the object.
     */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of IBus-1.0.IBus.Object */
    /**
     * Destroy and free an IBusObject
     * 
     * See also:  ibus_object_destroy().
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: PropList_ConstructProps)
    _init (config?: PropList_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PropList
    /* Function overloads */
    static new(): PropList
    static new(): PropList
    static $gtype: GObject.Type
}
interface Property_ConstructProps extends Serializable_ConstructProps {
    /* Constructor properties of IBus-1.0.IBus.Property */
    icon?: string
    key?: string
    label?: Text
    propType?: PropType
    sensitive?: boolean
    state?: PropState
    subProps?: PropList
    symbol?: Text
    tooltip?: Text
    visible?: boolean
}
class Property {
    /* Properties of IBus-1.0.IBus.Property */
    icon: string
    readonly key: string
    label: Text
    readonly propType: PropType
    sensitive: boolean
    state: PropState
    subProps: PropList
    symbol: Text
    tooltip: Text
    visible: boolean
    /* Fields of IBus-1.0.IBus.Object */
    parent: GObject.InitiallyUnowned
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.Property */
    /**
     * Get the icon of #IBusProperty.
     */
    getIcon(): string
    /**
     * Get the key of #IBusProperty.
     */
    getKey(): string
    /**
     * Get the label of #IBusProperty.
     */
    getLabel(): Text
    getPropType(): PropType
    /**
     * Get the sensitive of #IBusProperty.
     */
    getSensitive(): boolean
    /**
     * Get the state of #IBusProperty.
     */
    getState(): PropState
    /**
     * Get the IBusPropList of #IBusProperty.
     */
    getSubProps(): PropList
    /**
     * Get the symbol of #IBusProperty.
     */
    getSymbol(): Text
    /**
     * Get the tooltip of #IBusProperty.
     */
    getTooltip(): Text
    /**
     * Get the visible of #IBusProperty.
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
     */
    update(propUpdate: Property): boolean
    /* Methods of IBus-1.0.IBus.Serializable */
    /**
     * Clone an #IBusSerializable.
     * The copy method should be implemented in extended class.
     */
    copy(): Serializable
    /**
     * Gets a value from attachment of an #IBusSerializable.
     * @param key String formatted key for indexing value.
     */
    getQattachment(key: GLib.Quark): GLib.Variant
    /**
     * Remove a value from attachment of an #IBusSerializable.
     * See also: ibus_serializable_remove_attachment().
     * @param key String formatted key for indexing value.
     */
    removeQattachment(key: GLib.Quark): void
    /**
     * Serialize an #IBusSerializable to a #GVariant.
     * The serialize method should be implemented in extended class.
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
    setQattachment(key: GLib.Quark, value: GLib.Variant): void
    /* Methods of IBus-1.0.IBus.Object */
    /**
     * Emit the "destory" signal notifying all reference holders that they should
     * release the #IBusObject.
     * 
     * The memory for the object itself won't be deleted until its reference count
     * actually drops to 0; ibus_object_destroy merely asks reference holders to
     * release their references. It does not free the object.
     */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of IBus-1.0.IBus.Object */
    /**
     * Destroy and free an IBusObject
     * 
     * See also:  ibus_object_destroy().
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::key", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::prop-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prop-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::prop-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::prop-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::prop-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sub-props", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sub-props", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sub-props", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sub-props", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sub-props", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::symbol", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::symbol", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::symbol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::symbol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::symbol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Property_ConstructProps)
    _init (config?: Property_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(key: string, type: PropType, label: Text, icon: string | null, tooltip: Text, sensitive: boolean, visible: boolean, state: PropState, propList?: PropList | null): Property
    /* Function overloads */
    static new(): Property
    static new(): Property
    static $gtype: GObject.Type
}
interface Proxy_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
class Proxy {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    /**
     * If this property is not %G_BUS_TYPE_NONE, then
     * #GDBusProxy:g-connection must be %NULL and will be set to the
     * #GDBusConnection obtained by calling g_bus_get() with the value
     * of this property.
     */
    readonly gBusType: Gio.BusType
    /**
     * The #GDBusConnection the proxy is for.
     */
    readonly gConnection: Gio.DBusConnection
    /**
     * The timeout to use if -1 (specifying default timeout) is passed
     * as `timeout_msec` in the g_dbus_proxy_call() and
     * g_dbus_proxy_call_sync() functions.
     * 
     * This allows applications to set a proxy-wide timeout for all
     * remote method invocations on the proxy. If this property is -1,
     * the default timeout (typically 25 seconds) is used. If set to
     * %G_MAXINT, then no timeout is used.
     */
    gDefaultTimeout: number
    /**
     * Flags from the #GDBusProxyFlags enumeration.
     */
    readonly gFlags: Gio.DBusProxyFlags
    /**
     * Ensure that interactions with this proxy conform to the given
     * interface. This is mainly to ensure that malformed data received
     * from the other peer is ignored. The given #GDBusInterfaceInfo is
     * said to be the "expected interface".
     * 
     * The checks performed are:
     * - When completing a method call, if the type signature of
     *   the reply message isn't what's expected, the reply is
     *   discarded and the #GError is set to %G_IO_ERROR_INVALID_ARGUMENT.
     * 
     * - Received signals that have a type signature mismatch are dropped and
     *   a warning is logged via g_warning().
     * 
     * - Properties received via the initial `GetAll()` call or via the
     *   `::PropertiesChanged` signal (on the
     *   [org.freedesktop.DBus.Properties](http://dbus.freedesktop.org/doc/dbus-specification.html#standard-interfaces-properties)
     *   interface) or set using g_dbus_proxy_set_cached_property()
     *   with a type signature mismatch are ignored and a warning is
     *   logged via g_warning().
     * 
     * Note that these checks are never done on methods, signals and
     * properties that are not referenced in the given
     * #GDBusInterfaceInfo, since extending a D-Bus interface on the
     * service-side is not considered an ABI break.
     */
    gInterfaceInfo: Gio.DBusInterfaceInfo
    /**
     * The D-Bus interface name the proxy is for.
     */
    readonly gInterfaceName: string
    /**
     * The well-known or unique name that the proxy is for.
     */
    readonly gName: string
    /**
     * The unique name that owns #GDBusProxy:g-name or %NULL if no-one
     * currently owns that name. You may connect to #GObject::notify signal to
     * track changes to this property.
     */
    readonly gNameOwner: string
    /**
     * The object path the proxy is for.
     */
    readonly gObjectPath: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.Proxy */
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
    /* Methods of Gio-2.0.Gio.DBusProxy */
    /**
     * Asynchronously invokes the `method_name` method on `proxy`.
     * 
     * If `method_name` contains any dots, then `name` is split into interface and
     * method name parts. This allows using `proxy` for invoking methods on
     * other interfaces.
     * 
     * If the #GDBusConnection associated with `proxy` is closed then
     * the operation will fail with %G_IO_ERROR_CLOSED. If
     * `cancellable` is canceled, the operation will fail with
     * %G_IO_ERROR_CANCELLED. If `parameters` contains a value not
     * compatible with the D-Bus protocol, the operation fails with
     * %G_IO_ERROR_INVALID_ARGUMENT.
     * 
     * If the `parameters` #GVariant is floating, it is consumed. This allows
     * convenient 'inline' use of g_variant_new(), e.g.:
     * 
     * ```c
     *  g_dbus_proxy_call (proxy,
     *                     "TwoStrings",
     *                     g_variant_new ("(ss)",
     *                                    "Thing One",
     *                                    "Thing Two"),
     *                     G_DBUS_CALL_FLAGS_NONE,
     *                     -1,
     *                     NULL,
     *                     (GAsyncReadyCallback) two_strings_done,
     *                     &data);
     * ```
     * 
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `method_name` is referenced by it,
     * then the return value is checked against the return type.
     * 
     * This is an asynchronous method. When the operation is finished,
     * `callback` will be invoked in the
     * [thread-default main context][g-main-context-push-thread-default]
     * of the thread you are calling this method from.
     * You can then call g_dbus_proxy_call_finish() to get the result of
     * the operation. See g_dbus_proxy_call_sync() for the synchronous
     * version of this method.
     * 
     * If `callback` is %NULL then the D-Bus method call message will be sent with
     * the %G_DBUS_MESSAGE_FLAGS_NO_REPLY_EXPECTED flag set.
     * @param methodName Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeoutMsec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
     */
    call(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with g_dbus_proxy_call().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to g_dbus_proxy_call().
     */
    callFinish(res: Gio.AsyncResult): GLib.Variant
    /**
     * Synchronously invokes the `method_name` method on `proxy`.
     * 
     * If `method_name` contains any dots, then `name` is split into interface and
     * method name parts. This allows using `proxy` for invoking methods on
     * other interfaces.
     * 
     * If the #GDBusConnection associated with `proxy` is disconnected then
     * the operation will fail with %G_IO_ERROR_CLOSED. If
     * `cancellable` is canceled, the operation will fail with
     * %G_IO_ERROR_CANCELLED. If `parameters` contains a value not
     * compatible with the D-Bus protocol, the operation fails with
     * %G_IO_ERROR_INVALID_ARGUMENT.
     * 
     * If the `parameters` #GVariant is floating, it is consumed. This allows
     * convenient 'inline' use of g_variant_new(), e.g.:
     * 
     * ```c
     *  g_dbus_proxy_call_sync (proxy,
     *                          "TwoStrings",
     *                          g_variant_new ("(ss)",
     *                                         "Thing One",
     *                                         "Thing Two"),
     *                          G_DBUS_CALL_FLAGS_NONE,
     *                          -1,
     *                          NULL,
     *                          &error);
     * ```
     * 
     * 
     * The calling thread is blocked until a reply is received. See
     * g_dbus_proxy_call() for the asynchronous version of this
     * method.
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `method_name` is referenced by it,
     * then the return value is checked against the return type.
     * @param methodName Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal              or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeoutMsec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param cancellable A #GCancellable or %NULL.
     */
    callSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    /**
     * Like g_dbus_proxy_call() but also takes a #GUnixFDList object.
     * 
     * This method is only available on UNIX.
     * @param methodName Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeoutMsec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param fdList A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
     */
    callWithUnixFdList(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with g_dbus_proxy_call_with_unix_fd_list().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to g_dbus_proxy_call_with_unix_fd_list().
     */
    callWithUnixFdListFinish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    /**
     * Like g_dbus_proxy_call_sync() but also takes and returns #GUnixFDList objects.
     * 
     * This method is only available on UNIX.
     * @param methodName Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal              or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeoutMsec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param fdList A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     */
    callWithUnixFdListSync(methodName: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* outFdList */ Gio.UnixFDList | null ]
    /**
     * Looks up the value for a property from the cache. This call does no
     * blocking IO.
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `property_name` is referenced by
     * it, then `value` is checked against the type of the property.
     * @param propertyName Property name.
     */
    getCachedProperty(propertyName: string): GLib.Variant | null
    /**
     * Gets the names of all cached properties on `proxy`.
     */
    getCachedPropertyNames(): string[] | null
    /**
     * Gets the connection `proxy` is for.
     */
    getConnection(): Gio.DBusConnection
    /**
     * Gets the timeout to use if -1 (specifying default timeout) is
     * passed as `timeout_msec` in the g_dbus_proxy_call() and
     * g_dbus_proxy_call_sync() functions.
     * 
     * See the #GDBusProxy:g-default-timeout property for more details.
     */
    getDefaultTimeout(): number
    /**
     * Gets the flags that `proxy` was constructed with.
     */
    getFlags(): Gio.DBusProxyFlags
    /**
     * Returns the #GDBusInterfaceInfo, if any, specifying the interface
     * that `proxy` conforms to. See the #GDBusProxy:g-interface-info
     * property for more details.
     */
    getInterfaceInfo(): Gio.DBusInterfaceInfo | null
    /**
     * Gets the D-Bus interface name `proxy` is for.
     */
    getInterfaceName(): string
    /**
     * Gets the name that `proxy` was constructed for.
     * 
     * When connected to a message bus, this will usually be non-%NULL.
     * However, it may be %NULL for a proxy that communicates using a peer-to-peer
     * pattern.
     */
    getName(): string | null
    /**
     * The unique name that owns the name that `proxy` is for or %NULL if
     * no-one currently owns that name. You may connect to the
     * #GObject::notify signal to track changes to the
     * #GDBusProxy:g-name-owner property.
     */
    getNameOwner(): string | null
    /**
     * Gets the object path `proxy` is for.
     */
    getObjectPath(): string
    /**
     * If `value` is not %NULL, sets the cached value for the property with
     * name `property_name` to the value in `value`.
     * 
     * If `value` is %NULL, then the cached value is removed from the
     * property cache.
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `property_name` is referenced by
     * it, then `value` is checked against the type of the property.
     * 
     * If the `value` #GVariant is floating, it is consumed. This allows
     * convenient 'inline' use of g_variant_new(), e.g.
     * 
     * ```c
     *  g_dbus_proxy_set_cached_property (proxy,
     *                                    "SomeProperty",
     *                                    g_variant_new ("(si)",
     *                                                  "A String",
     *                                                  42));
     * ```
     * 
     * 
     * Normally you will not need to use this method since `proxy`
     * is tracking changes using the
     * `org.freedesktop.DBus.Properties.PropertiesChanged`
     * D-Bus signal. However, for performance reasons an object may
     * decide to not use this signal for some properties and instead
     * use a proprietary out-of-band mechanism to transmit changes.
     * 
     * As a concrete example, consider an object with a property
     * `ChatroomParticipants` which is an array of strings. Instead of
     * transmitting the same (long) array every time the property changes,
     * it is more efficient to only transmit the delta using e.g. signals
     * `ChatroomParticipantJoined(String name)` and
     * `ChatroomParticipantParted(String name)`.
     * @param propertyName Property name.
     * @param value Value for the property or %NULL to remove it from the cache.
     */
    setCachedProperty(propertyName: string, value?: GLib.Variant | null): void
    /**
     * Sets the timeout to use if -1 (specifying default timeout) is
     * passed as `timeout_msec` in the g_dbus_proxy_call() and
     * g_dbus_proxy_call_sync() functions.
     * 
     * See the #GDBusProxy:g-default-timeout property for more details.
     * @param timeoutMsec Timeout in milliseconds.
     */
    setDefaultTimeout(timeoutMsec: number): void
    /**
     * Ensure that interactions with `proxy` conform to the given
     * interface. See the #GDBusProxy:g-interface-info property for more
     * details.
     * @param info Minimum interface this proxy conforms to    or %NULL to unset.
     */
    setInterfaceInfo(info?: Gio.DBusInterfaceInfo | null): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @param ioPriority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes asynchronous initialization and returns the result.
     * See g_async_initable_init_async().
     * @param res a #GAsyncResult.
     */
    initFinish(res: Gio.AsyncResult): boolean
    /**
     * Finishes the async construction for the various g_async_initable_new
     * calls, returning the created object or %NULL on error.
     * @param res the #GAsyncResult from the callback
     */
    newFinish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    /**
     * Gets the #GDBusObject that `interface_` belongs to, if any.
     */
    getObject(): Gio.DBusObject | null
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     */
    getInfo(): Gio.DBusInterfaceInfo
    /**
     * Sets the #GDBusObject for `interface_` to `object`.
     * 
     * Note that `interface_` will hold a weak reference to `object`.
     * @param object A #GDBusObject or %NULL.
     */
    setObject(object?: Gio.DBusObject | null): void
    /* Methods of Gio-2.0.Gio.Initable */
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
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of IBus-1.0.IBus.Proxy */
    /**
     * Destroy and free an IBusProxy
     * 
     * See also:  ibus_proxy_destroy().
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    /* Signals of Gio-2.0.Gio.DBusProxy */
    /**
     * Emitted when one or more D-Bus properties on `proxy` changes. The
     * local cache has already been updated when this signal fires. Note
     * that both `changed_properties` and `invalidated_properties` are
     * guaranteed to never be %NULL (either may be empty though).
     * 
     * If the proxy has the flag
     * %G_DBUS_PROXY_FLAGS_GET_INVALIDATED_PROPERTIES set, then
     * `invalidated_properties` will always be empty.
     * 
     * This signal corresponds to the
     * `PropertiesChanged` D-Bus signal on the
     * `org.freedesktop.DBus.Properties` interface.
     * @param changedProperties A #GVariant containing the properties that changed (type: `a{sv}`)
     * @param invalidatedProperties A %NULL terminated array of properties that was invalidated
     */
    connect(sigName: "g-properties-changed", callback: ((changedProperties: GLib.Variant, invalidatedProperties: string[]) => void)): number
    on(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-properties-changed", callback: (changedProperties: GLib.Variant, invalidatedProperties: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "g-properties-changed", changedProperties: GLib.Variant, invalidatedProperties: string[]): void
    /**
     * Emitted when a signal from the remote object and interface that `proxy` is for, has been received.
     * 
     * Since 2.72 this signal supports detailed connections. You can connect to
     * the detailed signal `g-signal::x` in order to receive callbacks only when
     * signal `x` is received from the remote object.
     * @param senderName The sender of the signal or %NULL if the connection is not a bus connection.
     * @param signalName The name of the signal.
     * @param parameters A #GVariant tuple with parameters for the signal.
     */
    connect(sigName: "g-signal", callback: ((senderName: string | null, signalName: string, parameters: GLib.Variant) => void)): number
    on(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "g-signal", callback: (senderName: string | null, signalName: string, parameters: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "g-signal", senderName: string | null, signalName: string, parameters: GLib.Variant): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-bus-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-interface-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::g-object-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Proxy_ConstructProps)
    _init (config?: Proxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Helper function for constructing #GAsyncInitable object. This is
     * similar to g_object_newv() but also initializes the object asynchronously.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_new_finish() to get the new object and check
     * for any errors.
     * @param objectType a #GType supporting #GAsyncInitable.
     * @param nParameters the number of parameters in `parameters`
     * @param parameters the parameters to use to construct the object
     * @param ioPriority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the initialization is     finished
     */
    static newvAsync(objectType: GObject.Type, nParameters: number, parameters: GObject.Parameter, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     * @param objectType a #GType supporting #GInitable.
     * @param parameters the parameters to use to construct the object
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface Registry_ConstructProps extends Serializable_ConstructProps {
}
class Registry {
    /* Fields of IBus-1.0.IBus.Object */
    parent: GObject.InitiallyUnowned
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.Registry */
    /**
     * Check if the registry is updated.
     */
    checkModification(): boolean
    /**
     * List components.
     */
    getComponents(): Component[]
    /**
     * List observed paths.
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
     */
    loadCache(isUser: boolean): boolean
    /**
     * Load the registry cache `filename`.
     * @param filename The file path of the registry cache
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
     */
    saveCache(isUser: boolean): boolean
    /**
     * Save the registry cache `filename`.
     * @param filename The file path of the registry cache
     */
    saveCacheFile(filename: string): boolean
    /**
     * Start to monitor observed paths.
     */
    startMonitorChanges(): void
    /* Methods of IBus-1.0.IBus.Serializable */
    /**
     * Clone an #IBusSerializable.
     * The copy method should be implemented in extended class.
     */
    copy(): Serializable
    /**
     * Gets a value from attachment of an #IBusSerializable.
     * @param key String formatted key for indexing value.
     */
    getQattachment(key: GLib.Quark): GLib.Variant
    /**
     * Remove a value from attachment of an #IBusSerializable.
     * See also: ibus_serializable_remove_attachment().
     * @param key String formatted key for indexing value.
     */
    removeQattachment(key: GLib.Quark): void
    /**
     * Serialize an #IBusSerializable to a #GVariant.
     * The serialize method should be implemented in extended class.
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
    setQattachment(key: GLib.Quark, value: GLib.Variant): void
    /* Methods of IBus-1.0.IBus.Object */
    /**
     * Emit the "destory" signal notifying all reference holders that they should
     * release the #IBusObject.
     * 
     * The memory for the object itself won't be deleted until its reference count
     * actually drops to 0; ibus_object_destroy merely asks reference holders to
     * release their references. It does not free the object.
     */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of IBus-1.0.IBus.Registry */
    /**
     * Emitted when any observed paths are changed.
     * A method is not associated in this class. the "changed"
     * signal would be handled in other classes.
     * 
     * See also: ibus_registry_start_monitor_changes().
     */
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    /* Signals of IBus-1.0.IBus.Object */
    /**
     * Destroy and free an IBusObject
     * 
     * See also:  ibus_object_destroy().
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Registry_ConstructProps)
    _init (config?: Registry_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Registry
    /* Function overloads */
    static new(): Registry
    static new(): Registry
    static $gtype: GObject.Type
}
interface Serializable_ConstructProps extends Object_ConstructProps {
}
class Serializable {
    /* Fields of IBus-1.0.IBus.Object */
    parent: GObject.InitiallyUnowned
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.Serializable */
    /**
     * Clone an #IBusSerializable.
     * The copy method should be implemented in extended class.
     */
    copy(): Serializable
    /**
     * Gets a value from attachment of an #IBusSerializable.
     * @param key String formatted key for indexing value.
     */
    getQattachment(key: GLib.Quark): GLib.Variant
    /**
     * Remove a value from attachment of an #IBusSerializable.
     * See also: ibus_serializable_remove_attachment().
     * @param key String formatted key for indexing value.
     */
    removeQattachment(key: GLib.Quark): void
    /**
     * Serialize an #IBusSerializable to a #GVariant.
     * The serialize method should be implemented in extended class.
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
    setQattachment(key: GLib.Quark, value: GLib.Variant): void
    /* Methods of IBus-1.0.IBus.Object */
    /**
     * Emit the "destory" signal notifying all reference holders that they should
     * release the #IBusObject.
     * 
     * The memory for the object itself won't be deleted until its reference count
     * actually drops to 0; ibus_object_destroy merely asks reference holders to
     * release their references. It does not free the object.
     */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of IBus-1.0.IBus.Object */
    /**
     * Destroy and free an IBusObject
     * 
     * See also:  ibus_object_destroy().
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Serializable_ConstructProps)
    _init (config?: Serializable_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Serializable
    /* Function overloads */
    static new(): Serializable
    /**
     * Deserialize a #GVariant to an #IBusSerializable/
     * The deserialize method should be implemented in extended class.
     * @param variant A #GVariant.
     */
    static deserialize(variant: GLib.Variant): Serializable
    static $gtype: GObject.Type
}
interface Service_ConstructProps extends Object_ConstructProps {
    /* Constructor properties of IBus-1.0.IBus.Service */
    /**
     * The connection of service object.
     */
    connection?: Gio.DBusConnection
    /**
     * The path of service object.
     */
    objectPath?: string
}
class Service {
    /* Properties of IBus-1.0.IBus.Service */
    /**
     * The connection of service object.
     */
    readonly connection: Gio.DBusConnection
    /**
     * The path of service object.
     */
    readonly objectPath: string
    /* Fields of IBus-1.0.IBus.Object */
    parent: GObject.InitiallyUnowned
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.Service */
    emitSignal(destBusName: string, interfaceName: string, signalName: string, parameters: GLib.Variant): boolean
    /**
     * Gets a connections.
     */
    getConnection(): Gio.DBusConnection
    /**
     * Gets the object path of an IBusService.
     */
    getObjectPath(): string
    /**
     * Registers service to a connection.
     * @param connection A GDBusConnection the service will be registered to.
     */
    register(connection: Gio.DBusConnection): boolean
    /**
     * Unregisters service from a connection.
     * @param connection A GDBusConnection the service was registered with.
     */
    unregister(connection: Gio.DBusConnection): void
    /* Methods of IBus-1.0.IBus.Object */
    /**
     * Emit the "destory" signal notifying all reference holders that they should
     * release the #IBusObject.
     * 
     * The memory for the object itself won't be deleted until its reference count
     * actually drops to 0; ibus_object_destroy merely asks reference holders to
     * release their references. It does not free the object.
     */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of IBus-1.0.IBus.Object */
    /**
     * Destroy and free an IBusObject
     * 
     * See also:  ibus_object_destroy().
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::object-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Service_ConstructProps)
    _init (config?: Service_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(connection: Gio.DBusConnection, path: string): Service
    /* Function overloads */
    static new(): Service
    /**
     * Set the interface introspection information with the service class.
     * @param xmlData The introspection xml data.
     */
    static addInterfaces(klass: Service | Function | GObject.Type, xmlData: string): boolean
    static $gtype: GObject.Type
}
interface Text_ConstructProps extends Serializable_ConstructProps {
}
class Text {
    /* Fields of IBus-1.0.IBus.Object */
    parent: GObject.InitiallyUnowned
    flags: number
    priv: ObjectPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of IBus-1.0.IBus.Text */
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
     */
    getAttributes(): AttrList
    /**
     * Return number of characters in an #IBusText.
     * This function is based on g_utf8_strlen(), so unlike strlen(),
     * it does not count by bytes but characters instead.
     */
    getLength(): number
    /**
     * Return the text in an #IBusText. Should not be freed.
     */
    getText(): string
    setAttributes(attrs: AttrList): void
    /* Methods of IBus-1.0.IBus.Serializable */
    /**
     * Clone an #IBusSerializable.
     * The copy method should be implemented in extended class.
     */
    copy(): Serializable
    /**
     * Gets a value from attachment of an #IBusSerializable.
     * @param key String formatted key for indexing value.
     */
    getQattachment(key: GLib.Quark): GLib.Variant
    /**
     * Remove a value from attachment of an #IBusSerializable.
     * See also: ibus_serializable_remove_attachment().
     * @param key String formatted key for indexing value.
     */
    removeQattachment(key: GLib.Quark): void
    /**
     * Serialize an #IBusSerializable to a #GVariant.
     * The serialize method should be implemented in extended class.
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
    setQattachment(key: GLib.Quark, value: GLib.Variant): void
    /* Methods of IBus-1.0.IBus.Object */
    /**
     * Emit the "destory" signal notifying all reference holders that they should
     * release the #IBusObject.
     * 
     * The memory for the object itself won't be deleted until its reference count
     * actually drops to 0; ibus_object_destroy merely asks reference holders to
     * release their references. It does not free the object.
     */
    destroy(): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watchClosure(closure: Function): void
    /* Signals of IBus-1.0.IBus.Object */
    /**
     * Destroy and free an IBusObject
     * 
     * See also:  ibus_object_destroy().
     * 
     * <note><para>Argument `user_data` is ignored in this function.</para></note>
     */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Text_ConstructProps)
    _init (config?: Text_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFromString(str: string): Text
    static newFromUcs4(str: number): Text
    static newFromUnichar(c: number): Text
    static new(): Text
    /* Function overloads */
    static new(): Text
    static $gtype: GObject.Type
}
abstract class AttrListClass {
    /* Fields of IBus-1.0.IBus.AttrListClass */
    parent: SerializableClass
    static name: string
}
abstract class AttributeClass {
    /* Fields of IBus-1.0.IBus.AttributeClass */
    parent: SerializableClass
    static name: string
}
abstract class BusClass {
    /* Fields of IBus-1.0.IBus.BusClass */
    parent: ObjectClass
    static name: string
}
class BusPrivate {
    static name: string
}
abstract class ComponentClass {
    /* Fields of IBus-1.0.IBus.ComponentClass */
    parent: SerializableClass
    static name: string
}
class ComponentPrivate {
    static name: string
}
abstract class ConfigClass {
    static name: string
}
class ConfigPrivate {
    static name: string
}
abstract class ConfigServiceClass {
    /* Fields of IBus-1.0.IBus.ConfigServiceClass */
    setValue: (config: ConfigService, section: string, name: string, value: GLib.Variant) => boolean
    getValue: (config: ConfigService, section: string, name: string) => GLib.Variant
    unsetValue: (config: ConfigService, section: string, name: string) => boolean
    getValues: (config: ConfigService, section: string) => GLib.Variant
    static name: string
}
abstract class EngineClass {
    /* Fields of IBus-1.0.IBus.EngineClass */
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
    static name: string
}
abstract class EngineDescClass {
    /* Fields of IBus-1.0.IBus.EngineDescClass */
    parent: SerializableClass
    static name: string
}
class EngineDescPrivate {
    static name: string
}
class EnginePrivate {
    static name: string
}
abstract class EngineSimpleClass {
    static name: string
}
class EngineSimplePrivate {
    static name: string
}
abstract class FactoryClass {
    /* Fields of IBus-1.0.IBus.FactoryClass */
    createEngine: (factory: Factory, engineName: string) => Engine
    static name: string
}
class FactoryPrivate {
    static name: string
}
abstract class HotkeyProfileClass {
    /* Fields of IBus-1.0.IBus.HotkeyProfileClass */
    parent: SerializableClass
    trigger: (profile: HotkeyProfile, event: GLib.Quark) => void
    static name: string
}
abstract class InputContextClass {
    /* Fields of IBus-1.0.IBus.InputContextClass */
    parent: ProxyClass
    static name: string
}
abstract class KeymapClass {
    /* Fields of IBus-1.0.IBus.KeymapClass */
    parent: ObjectClass
    static name: string
}
abstract class LookupTableClass {
    /* Fields of IBus-1.0.IBus.LookupTableClass */
    parent: SerializableClass
    static name: string
}
abstract class ObjectClass {
    /* Fields of IBus-1.0.IBus.ObjectClass */
    parent: GObject.InitiallyUnownedClass
    destroy: (object: Object) => void
    static name: string
}
class ObjectPrivate {
    static name: string
}
abstract class ObservedPathClass {
    /* Fields of IBus-1.0.IBus.ObservedPathClass */
    parent: SerializableClass
    static name: string
}
abstract class PanelServiceClass {
    /* Fields of IBus-1.0.IBus.PanelServiceClass */
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
    static name: string
}
abstract class PropListClass {
    /* Fields of IBus-1.0.IBus.PropListClass */
    /**
     * The parent class.
     */
    parent: SerializableClass
    static name: string
}
abstract class PropertyClass {
    /* Fields of IBus-1.0.IBus.PropertyClass */
    parent: SerializableClass
    static name: string
}
class PropertyPrivate {
    static name: string
}
abstract class ProxyClass {
    /* Fields of IBus-1.0.IBus.ProxyClass */
    parent: Gio.DBusProxyClass
    destroy: (proxy: Proxy) => void
    static name: string
}
class Rectangle {
    /* Fields of IBus-1.0.IBus.Rectangle */
    /**
     * x coordinate.
     */
    x: number
    /**
     * y coordinate.
     */
    y: number
    /**
     * width of the rectangle.
     */
    width: number
    /**
     * height of the renctangl.
     */
    height: number
    static name: string
}
abstract class RegistryClass {
    static name: string
}
class RegistryPrivate {
    static name: string
}
abstract class SerializableClass {
    /* Fields of IBus-1.0.IBus.SerializableClass */
    serialize: (object: Serializable, builder: GLib.VariantBuilder) => boolean
    deserialize: (object: Serializable, variant: GLib.Variant) => number
    copy: (dest: Serializable, src: Serializable) => boolean
    static name: string
}
class SerializablePrivate {
    static name: string
}
abstract class ServiceClass {
    /* Fields of IBus-1.0.IBus.ServiceClass */
    serviceMethodCall: (service: Service, connection: Gio.DBusConnection, sender: string, objectPath: string, interfaceName: string, methodName: string, parameters: GLib.Variant, invocation: Gio.DBusMethodInvocation) => void
    serviceGetProperty: (service: Service, connection: Gio.DBusConnection, sender: string, objectPath: string, interfaceName: string, propertyName: string) => GLib.Variant | null
    serviceSetProperty: (service: Service, connection: Gio.DBusConnection, sender: string, objectPath: string, interfaceName: string, propertyName: string, value: GLib.Variant) => boolean
    /* Methods of IBus-1.0.IBus.ServiceClass */
    /**
     * Set the interface introspection information with the service class.
     * @param xmlData The introspection xml data.
     */
    static addInterfaces(klass: Service | Function | GObject.Type, xmlData: string): boolean
    static name: string
}
class ServicePrivate {
    static name: string
}
abstract class TextClass {
    /* Fields of IBus-1.0.IBus.TextClass */
    parent: SerializableClass
    static name: string
}
class XML {
    /* Fields of IBus-1.0.IBus.XML */
    /**
     * Name of XML tag.
     */
    name: string
    /**
     * Text enclosed by XML start tag and end tag. i.e. <tag>text</tag>.
     */
    text: string
    /**
     * Attributes of the XML node.
     */
    attributes: string
    /**
     * Children node of this XML node.
     */
    subNodes: object[]
    /* Methods of IBus-1.0.IBus.XML */
    /**
     * Creates a copy of `node,` which should be freed with
     * ibus_xml_free(). Primarily used by language bindings,
     * not that useful otherwise (since `node` can just be copied
     * by assignment in C).
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
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Parse a string buffer which contains an XML-formatted string,
     * and return a corresponding XML tree.
     * @param buffer Buffer to be parsed.
     */
    static parseBuffer(buffer: string): XML
    /**
     * Parse an XML file and return a corresponding XML tree.
     * @param name File name to be parsed.
     */
    static parseFile(name: string): XML
}
}
export default IBus;