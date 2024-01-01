
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
 * @param startIndex Where attribute starts.
 * @param endIndex Where attribute ends.
 * @returns A newly allocated #IBusAttribute.
 */
function attrBackgroundNew(color: number, startIndex: number, endIndex: number): Attribute
/**
 * Creates a new foreground #IBusAttribute.
 * @param color Color in RGB.
 * @param startIndex Where attribute starts.
 * @param endIndex Where attribute ends.
 * @returns A newly allocated #IBusAttribute.
 */
function attrForegroundNew(color: number, startIndex: number, endIndex: number): Attribute
/**
 * Creates a new underline #IBusAttribute.
 * @param underlineType Type of underline.
 * @param startIndex Where attribute starts.
 * @param endIndex Where attribute ends.
 * @returns A newly allocated #IBusAttribute.
 */
function attrUnderlineNew(underlineType: number, startIndex: number, endIndex: number): Attribute
function errorQuark(): GLib.Quark
/**
 * Free a list of strings.
 * @param strv List of strings.
 */
function freeStrv(strv: string | null): void
/**
 * Return the D-Bus address of IBus.
 * It will find the address from following source:
 * <orderedlist>
 *    <listitem><para>Environment variable IBUS_ADDRESS</para></listitem>
 *    <listitem><para>Socket file under ~/.config/ibus/bus/</para></listitem>
 * </orderedlist>
 * @returns D-Bus address of IBus. %NULL for not found. See also: ibus_write_address().
 */
function getAddress(): string
/**
 * Get UID of ibus-daemon.
 * @returns UID of ibus-daemon; or 0 if UID is not available.
 */
function getDaemonUid(): number
function getLanguageName(locale: string): string
/**
 * Obtains the machine UUID of the machine this process is running on.
 * @returns A newly allocated string that shows the UUID of the machine.
 */
function getLocalMachineId(): string
/**
 * Get the path of socket file.
 * @returns A newly allocated string that stores the path of socket file.
 */
function getSocketPath(): string
/**
 * Get the GDBus timeout in milliseconds. The timeout is for clients (e.g.
 * im-ibus.so), not for ibus-daemon.
 * Note that the timeout for ibus-daemon could be set by --timeout command
 * line option of the daemon.
 * @returns A GDBus timeout in milliseconds. -1 when default timeout for     GDBus should be used.
 */
function getTimeout(): number
function getUntranslatedLanguageName(locale: string): string
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
function getUserName(): string
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
function keyEventFromString(string: string, keyval: number, modifiers: number): boolean
/**
 * Return the name of a key symbol and modifiers.
 * 
 * For example, if press ctrl, shift, and enter, then this function returns:
 * Shift+Control+enter.
 * @param keyval Key symbol.
 * @param modifiers Modifiers such as Ctrl or Shift.
 * @returns The name of a key symbol and modifier.
 */
function keyEventToString(keyval: number, modifiers: number): string
/**
 * Obtains the upper- and lower-case versions of the keyval `symbol`.
 * Examples of keyvals are #IBUS_KEY_a, #IBUS_KEY_Return, #IBUS_KEY_F1, etc.
 * @param symbol a keyval
 */
function keyvalConvertCase(symbol: number): [ /* lower */ number, /* upper */ number ]
/**
 * Return the key symbol that associate with the key name.
 * @param keyvalName Key name in #gdk_keys_by_name.
 * @returns Corresponding key symbol.
 */
function keyvalFromName(keyvalName: string): number
/**
 * Return the name of a key symbol.
 * 
 * Note that the returned string is used internally, so don't free it.
 * @param keyval Key symbol.
 * @returns Corresponding key name. %NULL if no such key symbol.
 */
function keyvalName(keyval: number): string
/**
 * Converts a key value to lower case, if applicable.
 * @param keyval a key value.
 * @returns the lower case form of @keyval, or @keyval itself if it is already  in lower case or it is not subject to case conversion.
 */
function keyvalToLower(keyval: number): number
/**
 * Convert from an IBus key symbol to the corresponding ISO10646 (Unicode)
 * character.
 * @param keyval an IBus key symbol
 * @returns the corresponding unicode character, or 0 if there          is no corresponding character.
 */
function keyvalToUnicode(keyval: number): string
/**
 * Converts a key value to upper case, if applicable.
 * @param keyval a key value.
 * @returns the upper case form of @keyval, or @keyval itself if it is already   in upper case or it is not subject to case conversion.
 */
function keyvalToUpper(keyval: number): number
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
function setDisplay(display: string): void
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
function setLogHandler(verbose: boolean): void
/**
 * Convert from a ISO10646 character to a key symbol.
 * @param wc a ISO10646 encoded character
 * @returns the corresponding IBus key symbol, if one exists.          or, if there is no corresponding symbol,          wc | 0x01000000
 */
function unicodeToKeyval(wc: string): number
/**
 * Remove the log handler which is set by ibus_set_log_handler.
 */
function unsetLogHandler(): void
/**
 * Write D-Bus address to socket file.
 * 
 * See also: ibus_get_address().
 * @param address D-Bus address of IBus.
 */
function writeAddress(address: string): void
/**
 * Parse a string buffer which contains an XML-formatted string,
 * and return a corresponding XML tree.
 * @param buffer Buffer to be parsed.
 * @returns Root node of parsed XML tree.
 */
function xmlParseBuffer(buffer: string): XML
/**
 * Parse an XML file and return a corresponding XML tree.
 * @param name File name to be parsed.
 * @returns Root node of parsed XML tree.
 */
function xmlParseFile(name: string): XML
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
class AttrList extends Serializable {

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

module Attribute {

    // Constructor properties interface

    interface ConstructorProperties extends Serializable.ConstructorProperties {
    }

}

interface Attribute {

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
class Attribute extends Serializable {

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

module Bus {

    // Signal callback interfaces

    /**
     * Signal callback interface for `connected`
     */
    interface ConnectedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `disconnected`
     */
    interface DisconnectedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `global-engine-changed`
     */
    interface GlobalEngineChangedSignalCallback {
        (name: string | null): void
    }

    /**
     * Signal callback interface for `name-owner-changed`
     */
    interface NameOwnerChangedSignalCallback {
        (name: string | null, oldOwner: string | null, newOwner: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {

        // Own constructor properties of IBus-1.0.IBus.Bus

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
class Bus extends Object {

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
        commandLine?: string | null
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

interface Component {

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
class Component extends Serializable {

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

module Config {

    // Signal callback interfaces

    /**
     * Signal callback interface for `value-changed`
     */
    interface ValueChangedSignalCallback {
        (section: string | null, name: string | null, value: GLib.Variant): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Proxy.ConstructorProperties {
    }

}

interface Config extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

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
class Config extends Proxy {

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

module ConfigService {

    // Constructor properties interface

    interface ConstructorProperties extends Service.ConstructorProperties {
    }

}

interface ConfigService {

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
class ConfigService extends Service {

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

module Engine {

    // Signal callback interfaces

    /**
     * Signal callback interface for `cancel-hand-writing`
     */
    interface CancelHandWritingSignalCallback {
        (nStrokes: number): void
    }

    /**
     * Signal callback interface for `candidate-clicked`
     */
    interface CandidateClickedSignalCallback {
        (index: number, button: number, state: number): void
    }

    /**
     * Signal callback interface for `cursor-down`
     */
    interface CursorDownSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `cursor-up`
     */
    interface CursorUpSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `disable`
     */
    interface DisableSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `enable`
     */
    interface EnableSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `focus-in`
     */
    interface FocusInSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `focus-out`
     */
    interface FocusOutSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `page-down`
     */
    interface PageDownSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `page-up`
     */
    interface PageUpSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `process-hand-writing-event`
     */
    interface ProcessHandWritingEventSignalCallback {
        (coordinates: any, coordinatesLen: number): void
    }

    /**
     * Signal callback interface for `process-key-event`
     */
    interface ProcessKeyEventSignalCallback {
        (keyval: number, keycode: number, state: number): boolean
    }

    /**
     * Signal callback interface for `property-activate`
     */
    interface PropertyActivateSignalCallback {
        (name: string | null, state: number): void
    }

    /**
     * Signal callback interface for `property-hide`
     */
    interface PropertyHideSignalCallback {
        (name: string | null): void
    }

    /**
     * Signal callback interface for `property-show`
     */
    interface PropertyShowSignalCallback {
        (name: string | null): void
    }

    /**
     * Signal callback interface for `reset`
     */
    interface ResetSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `set-capabilities`
     */
    interface SetCapabilitiesSignalCallback {
        (caps: number): void
    }

    /**
     * Signal callback interface for `set-content-type`
     */
    interface SetContentTypeSignalCallback {
        (purpose: number, hints: number): void
    }

    /**
     * Signal callback interface for `set-cursor-location`
     */
    interface SetCursorLocationSignalCallback {
        (x: number, y: number, w: number, h: number): void
    }

    /**
     * Signal callback interface for `set-surrounding-text`
     */
    interface SetSurroundingTextSignalCallback {
        (text: GObject.Object, cursorPos: number, anchorPos: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Service.ConstructorProperties {

        // Own constructor properties of IBus-1.0.IBus.Engine

        engineName?: string | null
    }

}

interface Engine {

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
class Engine extends Service {

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
        iconPropKey?: string | null
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
        layoutOption?: string | null
        /**
         * The keyboard variant of engine description
         */
        layoutVariant?: string | null
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
class EngineDesc extends Serializable {

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

module EngineSimple {

    // Constructor properties interface

    interface ConstructorProperties extends Engine.ConstructorProperties {
    }

}

interface EngineSimple {

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
class EngineSimple extends Engine {

    // Own properties of IBus-1.0.IBus.EngineSimple

    static name: string

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
        (engineName: string | null): Engine | null
    }


    // Constructor properties interface

    interface ConstructorProperties extends Service.ConstructorProperties {
    }

}

interface Factory {

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
class Factory extends Service {

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

module HotkeyProfile {

    // Signal callback interfaces

    /**
     * Signal callback interface for `trigger`
     */
    interface TriggerSignalCallback {
        (event: number, userData: any): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Serializable.ConstructorProperties {
    }

}

interface HotkeyProfile {

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
class HotkeyProfile extends Serializable {

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

module InputContext {

    // Signal callback interfaces

    /**
     * Signal callback interface for `commit-text`
     */
    interface CommitTextSignalCallback {
        (text: Text): void
    }

    /**
     * Signal callback interface for `cursor-down-lookup-table`
     */
    interface CursorDownLookupTableSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `cursor-up-lookup-table`
     */
    interface CursorUpLookupTableSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `delete-surrounding-text`
     */
    interface DeleteSurroundingTextSignalCallback {
        (offset: number, nChars: number): void
    }

    /**
     * Signal callback interface for `disabled`
     */
    interface DisabledSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `enabled`
     */
    interface EnabledSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `forward-key-event`
     */
    interface ForwardKeyEventSignalCallback {
        (keyval: number, keycode: number, modifiers: number): void
    }

    /**
     * Signal callback interface for `hide-auxiliary-text`
     */
    interface HideAuxiliaryTextSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `hide-lookup-table`
     */
    interface HideLookupTableSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `hide-preedit-text`
     */
    interface HidePreeditTextSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `page-down-lookup-table`
     */
    interface PageDownLookupTableSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `page-up-lookup-table`
     */
    interface PageUpLookupTableSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `register-properties`
     */
    interface RegisterPropertiesSignalCallback {
        (props: PropList): void
    }

    /**
     * Signal callback interface for `show-auxiliary-text`
     */
    interface ShowAuxiliaryTextSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `show-lookup-table`
     */
    interface ShowLookupTableSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `show-preedit-text`
     */
    interface ShowPreeditTextSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `update-auxiliary-text`
     */
    interface UpdateAuxiliaryTextSignalCallback {
        (text: Text, visible: boolean): void
    }

    /**
     * Signal callback interface for `update-lookup-table`
     */
    interface UpdateLookupTableSignalCallback {
        (table: LookupTable, visible: boolean): void
    }

    /**
     * Signal callback interface for `update-preedit-text`
     */
    interface UpdatePreeditTextSignalCallback {
        (text: Text, cursorPos: number, visible: boolean): void
    }

    /**
     * Signal callback interface for `update-property`
     */
    interface UpdatePropertySignalCallback {
        (prop: Property): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Proxy.ConstructorProperties {
    }

}

interface InputContext extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

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
class InputContext extends Proxy {

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

module Keymap {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface Keymap {

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
class Keymap extends Object {

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

module LookupTable {

    // Constructor properties interface

    interface ConstructorProperties extends Serializable.ConstructorProperties {
    }

}

interface LookupTable {

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
class LookupTable extends Serializable {

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

module Object {

    // Signal callback interfaces

    /**
     * Signal callback interface for `destroy`
     */
    interface DestroySignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
    }

}

interface Object {

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
class Object extends GObject.InitiallyUnowned {

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

module ObservedPath {

    // Constructor properties interface

    interface ConstructorProperties extends Serializable.ConstructorProperties {
    }

}

interface ObservedPath {

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
class ObservedPath extends Serializable {

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

module PanelService {

    // Signal callback interfaces

    /**
     * Signal callback interface for `cursor-down-lookup-table`
     */
    interface CursorDownLookupTableSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `cursor-up-lookup-table`
     */
    interface CursorUpLookupTableSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `destroy-context`
     */
    interface DestroyContextSignalCallback {
        (inputContextPath: string | null): void
    }

    /**
     * Signal callback interface for `focus-in`
     */
    interface FocusInSignalCallback {
        (inputContextPath: string | null): void
    }

    /**
     * Signal callback interface for `focus-out`
     */
    interface FocusOutSignalCallback {
        (inputContextPath: string | null): void
    }

    /**
     * Signal callback interface for `hide-auxiliary-text`
     */
    interface HideAuxiliaryTextSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `hide-language-bar`
     */
    interface HideLanguageBarSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `hide-lookup-table`
     */
    interface HideLookupTableSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `hide-preedit-text`
     */
    interface HidePreeditTextSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `page-down-lookup-table`
     */
    interface PageDownLookupTableSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `page-up-lookup-table`
     */
    interface PageUpLookupTableSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `register-properties`
     */
    interface RegisterPropertiesSignalCallback {
        (propList: PropList): void
    }

    /**
     * Signal callback interface for `reset`
     */
    interface ResetSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `set-content-type`
     */
    interface SetContentTypeSignalCallback {
        (purpose: number, hints: number): void
    }

    /**
     * Signal callback interface for `set-cursor-location`
     */
    interface SetCursorLocationSignalCallback {
        (x: number, y: number, w: number, h: number): void
    }

    /**
     * Signal callback interface for `show-auxiliary-text`
     */
    interface ShowAuxiliaryTextSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `show-language-bar`
     */
    interface ShowLanguageBarSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `show-lookup-table`
     */
    interface ShowLookupTableSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `show-preedit-text`
     */
    interface ShowPreeditTextSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `start-setup`
     */
    interface StartSetupSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `state-changed`
     */
    interface StateChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `update-auxiliary-text`
     */
    interface UpdateAuxiliaryTextSignalCallback {
        (text: Text, visible: boolean): void
    }

    /**
     * Signal callback interface for `update-lookup-table`
     */
    interface UpdateLookupTableSignalCallback {
        (lookupTable: LookupTable, visible: boolean): void
    }

    /**
     * Signal callback interface for `update-preedit-text`
     */
    interface UpdatePreeditTextSignalCallback {
        (text: Text, cursorPos: number, visible: boolean): void
    }

    /**
     * Signal callback interface for `update-property`
     */
    interface UpdatePropertySignalCallback {
        (prop: Property): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Service.ConstructorProperties {
    }

}

interface PanelService {

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
class PanelService extends Service {

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

module PropList {

    // Constructor properties interface

    interface ConstructorProperties extends Serializable.ConstructorProperties {
    }

}

interface PropList {

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
class PropList extends Serializable {

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

module Property {

    // Constructor properties interface

    interface ConstructorProperties extends Serializable.ConstructorProperties {

        // Own constructor properties of IBus-1.0.IBus.Property

        icon?: string | null
        key?: string | null
        label?: Text | null
        propType?: PropType | null
        sensitive?: boolean | null
        state?: PropState | null
        subProps?: PropList | null
        symbol?: Text | null
        tooltip?: Text | null
        visible?: boolean | null
    }

}

interface Property {

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
class Property extends Serializable {

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

module Proxy {

    // Signal callback interfaces

    /**
     * Signal callback interface for `destroy`
     */
    interface DestroySignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface Proxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

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
class Proxy extends Gio.DBusProxy {

    // Own properties of IBus-1.0.IBus.Proxy

    static name: string

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
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Serializable.ConstructorProperties {
    }

}

interface Registry {

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
class Registry extends Serializable {

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

module Serializable {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface Serializable {

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
class Serializable extends Object {

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
class Service extends Object {

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

module Text {

    // Constructor properties interface

    interface ConstructorProperties extends Serializable.ConstructorProperties {
    }

}

interface Text {

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
class Text extends Serializable {

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

    setValue: (config: ConfigService, section: string, name: string, value: GLib.Variant) => boolean
    getValue: (config: ConfigService, section: string, name: string) => GLib.Variant
    unsetValue: (config: ConfigService, section: string, name: string) => boolean
    getValues: (config: ConfigService, section: string) => GLib.Variant
}

abstract class ConfigServiceClass {

    // Own properties of IBus-1.0.IBus.ConfigServiceClass

    static name: string
}

interface EngineClass {

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

    createEngine: (factory: Factory, engineName: string) => Engine
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

    serviceMethodCall: (service: Service, connection: Gio.DBusConnection, sender: string, objectPath: string, interfaceName: string, methodName: string, parameters: GLib.Variant, invocation: Gio.DBusMethodInvocation) => void
    serviceGetProperty: (service: Service, connection: Gio.DBusConnection, sender: string, objectPath: string, interfaceName: string, propertyName: string) => GLib.Variant | null
    serviceSetProperty: (service: Service, connection: Gio.DBusConnection, sender: string, objectPath: string, interfaceName: string, propertyName: string, value: GLib.Variant) => boolean
}

abstract class ServiceClass {

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
    static parseBuffer(buffer: string): XML
    /**
     * Parse an XML file and return a corresponding XML tree.
     * @param name File name to be parsed.
     * @returns Root node of parsed XML tree.
     */
    static parseFile(name: string): XML
}

}

export default IBus;
// END