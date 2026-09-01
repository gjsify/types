
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
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace IBus {

    /**
     * IBus-1.0
     */


    /**
     * @gir-type Enum
     */
    export namespace AttrType {
        export const $gtype: GObject.GType<AttrType>;
    }

    /**
     * Type enumeration of IBusText attribute.
     * @gir-type Enum
     */
    enum AttrType {
        /**
         * Decorate with underline.
         */
        UNDERLINE = 1,
        /**
         * Foreground color.
         */
        FOREGROUND = 2,
        /**
         * Background color.
         */
        BACKGROUND = 3,
        /**
         * Use the preedit hint and each engine does not
         *                             specify the RGBA values but IBus panel or the
         *                             Wayland panel decides the actual values.
         *                             Since: 1.5.33
         */
        HINT = 4,
    }


    /**
     * @gir-type Enum
     */
    export namespace AttrUnderline {
        export const $gtype: GObject.GType<AttrUnderline>;
    }

    /**
     * Type of IBusText attribute.
     * @gir-type Enum
     */
    enum AttrUnderline {
        /**
         * No underline.
         */
        NONE = 0,
        /**
         * Single underline.
         */
        SINGLE = 1,
        /**
         * Double underline.
         */
        DOUBLE = 2,
        /**
         * Low underline ? FIXME
         */
        LOW = 3,
        /**
         * Error underline
         */
        ERROR = 4,
    }


    /**
     * @gir-type Enum
     */
    export namespace BusGlobalBindingType {
        export const $gtype: GObject.GType<BusGlobalBindingType>;
    }

    /**
     * Type enumeration of IBusBusGlobalBindingType.
     * @gir-type Enum
     * @since 1.5.29
     */
    enum BusGlobalBindingType {
        /**
         * Any types
         */
        ANY = 0,
        /**
         * IME switcher
         */
        IME_SWITCHER = 1,
        /**
         * Emoji typing
         */
        EMOJI_TYPING = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace BusRequestNameReply {
        export const $gtype: GObject.GType<BusRequestNameReply>;
    }

    /**
     * @gir-type Enum
     */
    enum BusRequestNameReply {
        /**
         * same as DBUS_REQUEST_NAME_REPLY_PRIMARY_OWNER
         */
        PRIMARY_OWNER = 1,
        /**
         * same as DBUS_REQUEST_NAME_REPLY_IN_QUEUE
         */
        IN_QUEUE = 2,
        /**
         * same as DBUS_REQUEST_NAME_REPLY_EXISTS
         */
        EXISTS = 3,
        /**
         * same as DBUS_REQUEST_NAME_REPLY_ALREADY_OWNER
         */
        ALREADY_OWNER = 4,
    }


    /**
     * @gir-type Enum
     */
    export namespace BusStartServiceByNameReply {
        export const $gtype: GObject.GType<BusStartServiceByNameReply>;
    }

    /**
     * @gir-type Enum
     */
    enum BusStartServiceByNameReply {
        /**
         * same as DBUS_START_REPLY_SUCCESS
         */
        SUCCESS = 1,
        /**
         * same as DBUS_START_REPLY_ALREADY_RUNNING
         */
        ALREADY_RUNNING = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace EngineMsgCode {
        export const $gtype: GObject.GType<EngineMsgCode>;
    }

    /**
     * Message codes in the {@link IBus.MessageDomain} domain for Engine
     * See also {@link IBus.Message}, `ibus_engine_send_message()`
     * @gir-type Enum
     * @since 1.5.33
     */
    enum EngineMsgCode {
        /**
         * Generic message for Engine
         */
        GENERAL = 0,
        /**
         * User's typing failure
         *         against the definition of the compose files.
         */
        INVALID_COMPOSE_SEQUENCE = 1,
        /**
         * Notification about new
         * behaviors or attentions when the compose table version is changed.
         */
        UPDATE_COMPOSE_TABLE = 2,
    }


    /**
     * @gir-type Struct
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        /**
         * There is no engine associated with input context.
         */
        static NO_ENGINE: number;

        /**
         * There is no config module running.
         */
        static NO_CONFIG: number;

        /**
         * General failure.
         */
        static FAILED: number;

        // Constructors
        constructor(options: { message: string; code: number });

        // Static methods
        static quark(): GLib.Quark;
    }


    /**
     * @gir-type Enum
     */
    export namespace InputPurpose {
        export const $gtype: GObject.GType<InputPurpose>;
    }

    /**
     * Describes primary purpose of the input context.  This information
     * is particularly useful to implement intelligent behavior in
     * engines, such as automatic input-mode switch and text prediction.
     * 
     * Note that the purpose is not meant to impose a totally strict rule
     * about allowed characters, and does not replace input validation.
     * It is fine for an on-screen keyboard to let the user override the
     * character set restriction that is expressed by the purpose. The
     * application is expected to validate the entry contents, even if
     * it specified a purpose.
     * 
     * The difference between `IBUS_INPUT_PURPOSE_DIGITS` and
     * `IBUS_INPUT_PURPOSE_NUMBER` is that the former accepts only digits
     * while the latter also some punctuation (like commas or points, plus,
     * minus) and “e” or “E” as in 3.14E+000.
     * 
     * This enumeration may be extended in the future; engines should
     * interpret unknown values as 'free form'.
     * @gir-type Enum
     * @since 1.5.4
     */
    enum InputPurpose {
        /**
         * Allow any character
         */
        FREE_FORM = 0,
        /**
         * Allow only alphabetic characters
         */
        ALPHA = 1,
        /**
         * Allow only digits
         */
        DIGITS = 2,
        /**
         * Edited field expects numbers
         */
        NUMBER = 3,
        /**
         * Edited field expects phone number
         */
        PHONE = 4,
        /**
         * Edited field expects URL
         */
        URL = 5,
        /**
         * Edited field expects email address
         */
        EMAIL = 6,
        /**
         * Edited field expects the name of a person
         */
        NAME = 7,
        /**
         * Like `IBUS_INPUT_PURPOSE_FREE_FORM`,
         *     but characters are hidden
         */
        PASSWORD = 8,
        /**
         * Like `IBUS_INPUT_PURPOSE_DIGITS`, but
         *     characters are hidden
         */
        PIN = 9,
        /**
         * Allow any character, in addition to control
         *     codes. Since 1.5.24
         */
        TERMINAL = 10,
        /**
         * Input a date for the Wayland text-input protocol
         *     V1/V3. Since 1.5.34
         */
        DATE = 11,
        /**
         * Input a time for the Wayland text-input protocol
         *     V1/V3. Since 1.5.34
         */
        TIME = 12,
        /**
         * Input a date and time for the Wayland
         *     text-input protocol V1/V3. Since 1.5.34
         */
        DATETIME = 13,
    }


    /**
     * @gir-type Enum
     */
    export namespace MessageDomain {
        export const $gtype: GObject.GType<MessageDomain>;
    }

    /**
     * @gir-type Enum
     * @since 1.5.33
     */
    enum MessageDomain {
        NONE = 0,
        ENGINE = 1,
        PANEL = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace Orientation {
        export const $gtype: GObject.GType<Orientation>;
    }

    /**
     * Orientation of UI.
     * @gir-type Enum
     */
    enum Orientation {
        /**
         * Horizontal orientation.
         */
        HORIZONTAL = 0,
        /**
         * Vertival orientation.
         */
        VERTICAL = 1,
        /**
         * Use ibus global orientation setup.
         */
        SYSTEM = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace PanelServiceMsgCode {
        export const $gtype: GObject.GType<PanelServiceMsgCode>;
    }

    /**
     * Message codes in the {@link IBus.MessageDomain} domain for Panel.
     * @gir-type Enum
     * @since 1.5.33
     */
    enum PanelServiceMsgCode {
        /**
         * Generic message for Panel
         */
        GENERAL = 0,
        /**
         * Progress message when the
         *         Unicode data is loading.
         */
        LOADING_UNICODE = 1,
    }


    /**
     * @gir-type Enum
     */
    export namespace PreeditFocusMode {
        export const $gtype: GObject.GType<PreeditFocusMode>;
    }

    /**
     * Pre-edit commit mode when the focus is lost.
     * @gir-type Enum
     */
    enum PreeditFocusMode {
        /**
         * pre-edit text is cleared.
         */
        CLEAR = 0,
        /**
         * pre-edit text is committed.
         */
        COMMIT = 1,
    }


    /**
     * @gir-type Enum
     */
    export namespace PreeditFormat {
        export const $gtype: GObject.GType<PreeditFormat>;
    }

    /**
     * You can set the "preedit-format" property of the constructor of
     * {@link IBus.InputContext} or {@link IBus.PanelService}.
     * @gir-type Enum
     * @since 1.5.33
     */
    enum PreeditFormat {
        /**
         * Use {@link IBus.Attribute} with the RGBA.
         *         This has been a default usage and `ibus_attribute_get_attr_type()`
         *         returns `IBUS_ATTR_TYPE_UNDERLINE`, `IBUS_ATTR_TYPE_FOREGROUND`,
         *         `IBUS_ATTR_TYPE_BACKGROUND`.
         */
        RGBA = 0,
        /**
         * Use {@link IBus.Attribute} with the hints.
         *         This let {@link IBus.PanelService} decides the actual RGBA values to follow
         *         the current desktop theme and `ibus_attribute_get_attr_type()`
         *         returns `IBUS_ATTR_TYPE_HINT`.
         */
        HINT = 1,
    }


    /**
     * @gir-type Enum
     */
    export namespace PropState {
        export const $gtype: GObject.GType<PropState>;
    }

    /**
     * State of {@link IBus.Property}. The actual effect depends on {@link IBus.PropType} of the
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
     * @gir-type Enum
     */
    enum PropState {
        /**
         * Property option is unchecked.
         */
        UNCHECKED = 0,
        /**
         * Property option is checked.
         */
        CHECKED = 1,
        /**
         * The state is inconsistent with the associated IME
         * property.
         */
        INCONSISTENT = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace PropType {
        export const $gtype: GObject.GType<PropType>;
    }

    /**
     * Type enumeration of IBusProperty.
     * @gir-type Enum
     */
    enum PropType {
        /**
         * Property is shown as normal text.
         */
        NORMAL = 0,
        /**
         * Property is shown as a toggle button.
         */
        TOGGLE = 1,
        /**
         * Property is shown as a radio selection option.
         */
        RADIO = 2,
        /**
         * Property is shown as a menu, usually imply it has sub menu
         * items.
         */
        MENU = 3,
        /**
         * A separator for menu.
         */
        SEPARATOR = 4,
    }


    /**
     * @gir-type Enum
     */
    export namespace XEventType {
        export const $gtype: GObject.GType<XEventType>;
    }

    /**
     * @gir-type Enum
     */
    enum XEventType {
        NOTHING = -1,
        KEY_PRESS = 0,
        KEY_RELEASE = 1,
        OTHER = 2,
        EVENT_LAST = 3,
    }


    /**
     * @default 48
     */
    const __0: number;

    /**
     * @default 49
     */
    const __1: number;

    /**
     * @default 50
     */
    const __2: number;

    /**
     * @default 51
     */
    const __3: number;

    /**
     * @default 64784
     */
    const __3270_AltCursor: number;

    /**
     * @default 64782
     */
    const __3270_Attn: number;

    /**
     * @default 64773
     */
    const __3270_BackTab: number;

    /**
     * @default 64793
     */
    const __3270_ChangeScreen: number;

    /**
     * @default 64789
     */
    const __3270_Copy: number;

    /**
     * @default 64783
     */
    const __3270_CursorBlink: number;

    /**
     * @default 64796
     */
    const __3270_CursorSelect: number;

    /**
     * @default 64794
     */
    const __3270_DeleteWord: number;

    /**
     * @default 64769
     */
    const __3270_Duplicate: number;

    /**
     * @default 64798
     */
    const __3270_Enter: number;

    /**
     * @default 64774
     */
    const __3270_EraseEOF: number;

    /**
     * @default 64775
     */
    const __3270_EraseInput: number;

    /**
     * @default 64795
     */
    const __3270_ExSelect: number;

    /**
     * @default 64770
     */
    const __3270_FieldMark: number;

    /**
     * @default 64787
     */
    const __3270_Ident: number;

    /**
     * @default 64786
     */
    const __3270_Jump: number;

    /**
     * @default 64785
     */
    const __3270_KeyClick: number;

    /**
     * @default 64772
     */
    const __3270_Left2: number;

    /**
     * @default 64778
     */
    const __3270_PA1: number;

    /**
     * @default 64779
     */
    const __3270_PA2: number;

    /**
     * @default 64780
     */
    const __3270_PA3: number;

    /**
     * @default 64790
     */
    const __3270_Play: number;

    /**
     * @default 64797
     */
    const __3270_PrintScreen: number;

    /**
     * @default 64777
     */
    const __3270_Quit: number;

    /**
     * @default 64792
     */
    const __3270_Record: number;

    /**
     * @default 64776
     */
    const __3270_Reset: number;

    /**
     * @default 64771
     */
    const __3270_Right2: number;

    /**
     * @default 64788
     */
    const __3270_Rule: number;

    /**
     * @default 64791
     */
    const __3270_Setup: number;

    /**
     * @default 64781
     */
    const __3270_Test: number;

    /**
     * @default 52
     */
    const __4: number;

    /**
     * @default 53
     */
    const __5: number;

    /**
     * @default 54
     */
    const __6: number;

    /**
     * @default 55
     */
    const __7: number;

    /**
     * @default 56
     */
    const __8: number;

    /**
     * @default 57
     */
    const __9: number;

    /**
     * @default 65
     */
    const A: number;

    /**
     * @default 198
     */
    const AE: number;

    /**
     * @default 193
     */
    const Aacute: number;

    /**
     * @default 16785056
     */
    const Abelowdot: number;

    /**
     * @default 451
     */
    const Abreve: number;

    /**
     * @default 16785070
     */
    const Abreveacute: number;

    /**
     * @default 16785078
     */
    const Abrevebelowdot: number;

    /**
     * @default 16785072
     */
    const Abrevegrave: number;

    /**
     * @default 16785074
     */
    const Abrevehook: number;

    /**
     * @default 16785076
     */
    const Abrevetilde: number;

    /**
     * @default 65136
     */
    const AccessX_Enable: number;

    /**
     * @default 65137
     */
    const AccessX_Feedback_Enable: number;

    /**
     * @default 194
     */
    const Acircumflex: number;

    /**
     * @default 16785060
     */
    const Acircumflexacute: number;

    /**
     * @default 16785068
     */
    const Acircumflexbelowdot: number;

    /**
     * @default 16785062
     */
    const Acircumflexgrave: number;

    /**
     * @default 16785064
     */
    const Acircumflexhook: number;

    /**
     * @default 16785066
     */
    const Acircumflextilde: number;

    /**
     * @default 196
     */
    const Adiaeresis: number;

    /**
     * @default 192
     */
    const Agrave: number;

    /**
     * @default 16785058
     */
    const Ahook: number;

    /**
     * @default 65513
     */
    const Alt_L: number;

    /**
     * @default 65514
     */
    const Alt_R: number;

    /**
     * @default 960
     */
    const Amacron: number;

    /**
     * @default 417
     */
    const Aogonek: number;

    /**
     * @default 16778848
     */
    const Arabic_0: number;

    /**
     * @default 16778849
     */
    const Arabic_1: number;

    /**
     * @default 16778850
     */
    const Arabic_2: number;

    /**
     * @default 16778851
     */
    const Arabic_3: number;

    /**
     * @default 16778852
     */
    const Arabic_4: number;

    /**
     * @default 16778853
     */
    const Arabic_5: number;

    /**
     * @default 16778854
     */
    const Arabic_6: number;

    /**
     * @default 16778855
     */
    const Arabic_7: number;

    /**
     * @default 16778856
     */
    const Arabic_8: number;

    /**
     * @default 16778857
     */
    const Arabic_9: number;

    /**
     * @default 1497
     */
    const Arabic_ain: number;

    /**
     * @default 1479
     */
    const Arabic_alef: number;

    /**
     * @default 1513
     */
    const Arabic_alefmaksura: number;

    /**
     * @default 1480
     */
    const Arabic_beh: number;

    /**
     * @default 1452
     */
    const Arabic_comma: number;

    /**
     * @default 1494
     */
    const Arabic_dad: number;

    /**
     * @default 1487
     */
    const Arabic_dal: number;

    /**
     * @default 1519
     */
    const Arabic_damma: number;

    /**
     * @default 1516
     */
    const Arabic_dammatan: number;

    /**
     * @default 16778888
     */
    const Arabic_ddal: number;

    /**
     * @default 16778956
     */
    const Arabic_farsi_yeh: number;

    /**
     * @default 1518
     */
    const Arabic_fatha: number;

    /**
     * @default 1515
     */
    const Arabic_fathatan: number;

    /**
     * @default 1505
     */
    const Arabic_feh: number;

    /**
     * @default 16778964
     */
    const Arabic_fullstop: number;

    /**
     * @default 16778927
     */
    const Arabic_gaf: number;

    /**
     * @default 1498
     */
    const Arabic_ghain: number;

    /**
     * @default 1511
     */
    const Arabic_ha: number;

    /**
     * @default 1485
     */
    const Arabic_hah: number;

    /**
     * @default 1473
     */
    const Arabic_hamza: number;

    /**
     * @default 16778836
     */
    const Arabic_hamza_above: number;

    /**
     * @default 16778837
     */
    const Arabic_hamza_below: number;

    /**
     * @default 1475
     */
    const Arabic_hamzaonalef: number;

    /**
     * @default 1476
     */
    const Arabic_hamzaonwaw: number;

    /**
     * @default 1478
     */
    const Arabic_hamzaonyeh: number;

    /**
     * @default 1477
     */
    const Arabic_hamzaunderalef: number;

    /**
     * @default 1511
     */
    const Arabic_heh: number;

    /**
     * @default 16778942
     */
    const Arabic_heh_doachashmee: number;

    /**
     * @default 16778945
     */
    const Arabic_heh_goal: number;

    /**
     * @default 1484
     */
    const Arabic_jeem: number;

    /**
     * @default 16778904
     */
    const Arabic_jeh: number;

    /**
     * @default 1507
     */
    const Arabic_kaf: number;

    /**
     * @default 1520
     */
    const Arabic_kasra: number;

    /**
     * @default 1517
     */
    const Arabic_kasratan: number;

    /**
     * @default 16778921
     */
    const Arabic_keheh: number;

    /**
     * @default 1486
     */
    const Arabic_khah: number;

    /**
     * @default 1508
     */
    const Arabic_lam: number;

    /**
     * @default 16778835
     */
    const Arabic_madda_above: number;

    /**
     * @default 1474
     */
    const Arabic_maddaonalef: number;

    /**
     * @default 1509
     */
    const Arabic_meem: number;

    /**
     * @default 1510
     */
    const Arabic_noon: number;

    /**
     * @default 16778938
     */
    const Arabic_noon_ghunna: number;

    /**
     * @default 16778878
     */
    const Arabic_peh: number;

    /**
     * @default 16778858
     */
    const Arabic_percent: number;

    /**
     * @default 1506
     */
    const Arabic_qaf: number;

    /**
     * @default 1471
     */
    const Arabic_question_mark: number;

    /**
     * @default 1489
     */
    const Arabic_ra: number;

    /**
     * @default 16778897
     */
    const Arabic_rreh: number;

    /**
     * @default 1493
     */
    const Arabic_sad: number;

    /**
     * @default 1491
     */
    const Arabic_seen: number;

    /**
     * @default 1467
     */
    const Arabic_semicolon: number;

    /**
     * @default 1521
     */
    const Arabic_shadda: number;

    /**
     * @default 1492
     */
    const Arabic_sheen: number;

    /**
     * @default 1522
     */
    const Arabic_sukun: number;

    /**
     * @default 16778864
     */
    const Arabic_superscript_alef: number;

    /**
     * @default 65406
     */
    const Arabic_switch: number;

    /**
     * @default 1495
     */
    const Arabic_tah: number;

    /**
     * @default 1504
     */
    const Arabic_tatweel: number;

    /**
     * @default 16778886
     */
    const Arabic_tcheh: number;

    /**
     * @default 1482
     */
    const Arabic_teh: number;

    /**
     * @default 1481
     */
    const Arabic_tehmarbuta: number;

    /**
     * @default 1488
     */
    const Arabic_thal: number;

    /**
     * @default 1483
     */
    const Arabic_theh: number;

    /**
     * @default 16778873
     */
    const Arabic_tteh: number;

    /**
     * @default 16778916
     */
    const Arabic_veh: number;

    /**
     * @default 1512
     */
    const Arabic_waw: number;

    /**
     * @default 1514
     */
    const Arabic_yeh: number;

    /**
     * @default 16778962
     */
    const Arabic_yeh_baree: number;

    /**
     * @default 1496
     */
    const Arabic_zah: number;

    /**
     * @default 1490
     */
    const Arabic_zain: number;

    /**
     * @default 197
     */
    const Aring: number;

    /**
     * @default 16778552
     */
    const Armenian_AT: number;

    /**
     * @default 16778545
     */
    const Armenian_AYB: number;

    /**
     * @default 16778546
     */
    const Armenian_BEN: number;

    /**
     * @default 16778569
     */
    const Armenian_CHA: number;

    /**
     * @default 16778548
     */
    const Armenian_DA: number;

    /**
     * @default 16778561
     */
    const Armenian_DZA: number;

    /**
     * @default 16778551
     */
    const Armenian_E: number;

    /**
     * @default 16778582
     */
    const Armenian_FE: number;

    /**
     * @default 16778562
     */
    const Armenian_GHAT: number;

    /**
     * @default 16778547
     */
    const Armenian_GIM: number;

    /**
     * @default 16778565
     */
    const Armenian_HI: number;

    /**
     * @default 16778560
     */
    const Armenian_HO: number;

    /**
     * @default 16778555
     */
    const Armenian_INI: number;

    /**
     * @default 16778571
     */
    const Armenian_JE: number;

    /**
     * @default 16778580
     */
    const Armenian_KE: number;

    /**
     * @default 16778559
     */
    const Armenian_KEN: number;

    /**
     * @default 16778557
     */
    const Armenian_KHE: number;

    /**
     * @default 16778556
     */
    const Armenian_LYUN: number;

    /**
     * @default 16778564
     */
    const Armenian_MEN: number;

    /**
     * @default 16778566
     */
    const Armenian_NU: number;

    /**
     * @default 16778581
     */
    const Armenian_O: number;

    /**
     * @default 16778570
     */
    const Armenian_PE: number;

    /**
     * @default 16778579
     */
    const Armenian_PYUR: number;

    /**
     * @default 16778572
     */
    const Armenian_RA: number;

    /**
     * @default 16778576
     */
    const Armenian_RE: number;

    /**
     * @default 16778573
     */
    const Armenian_SE: number;

    /**
     * @default 16778567
     */
    const Armenian_SHA: number;

    /**
     * @default 16778563
     */
    const Armenian_TCHE: number;

    /**
     * @default 16778553
     */
    const Armenian_TO: number;

    /**
     * @default 16778558
     */
    const Armenian_TSA: number;

    /**
     * @default 16778577
     */
    const Armenian_TSO: number;

    /**
     * @default 16778575
     */
    const Armenian_TYUN: number;

    /**
     * @default 16778574
     */
    const Armenian_VEV: number;

    /**
     * @default 16778568
     */
    const Armenian_VO: number;

    /**
     * @default 16778578
     */
    const Armenian_VYUN: number;

    /**
     * @default 16778549
     */
    const Armenian_YECH: number;

    /**
     * @default 16778550
     */
    const Armenian_ZA: number;

    /**
     * @default 16778554
     */
    const Armenian_ZHE: number;

    /**
     * @default 16778587
     */
    const Armenian_accent: number;

    /**
     * @default 16778588
     */
    const Armenian_amanak: number;

    /**
     * @default 16778586
     */
    const Armenian_apostrophe: number;

    /**
     * @default 16778600
     */
    const Armenian_at: number;

    /**
     * @default 16778593
     */
    const Armenian_ayb: number;

    /**
     * @default 16778594
     */
    const Armenian_ben: number;

    /**
     * @default 16778589
     */
    const Armenian_but: number;

    /**
     * @default 16778617
     */
    const Armenian_cha: number;

    /**
     * @default 16778596
     */
    const Armenian_da: number;

    /**
     * @default 16778609
     */
    const Armenian_dza: number;

    /**
     * @default 16778599
     */
    const Armenian_e: number;

    /**
     * @default 16778588
     */
    const Armenian_exclam: number;

    /**
     * @default 16778630
     */
    const Armenian_fe: number;

    /**
     * @default 16778633
     */
    const Armenian_full_stop: number;

    /**
     * @default 16778610
     */
    const Armenian_ghat: number;

    /**
     * @default 16778595
     */
    const Armenian_gim: number;

    /**
     * @default 16778613
     */
    const Armenian_hi: number;

    /**
     * @default 16778608
     */
    const Armenian_ho: number;

    /**
     * @default 16778634
     */
    const Armenian_hyphen: number;

    /**
     * @default 16778603
     */
    const Armenian_ini: number;

    /**
     * @default 16778619
     */
    const Armenian_je: number;

    /**
     * @default 16778628
     */
    const Armenian_ke: number;

    /**
     * @default 16778607
     */
    const Armenian_ken: number;

    /**
     * @default 16778605
     */
    const Armenian_khe: number;

    /**
     * @default 16778631
     */
    const Armenian_ligature_ew: number;

    /**
     * @default 16778604
     */
    const Armenian_lyun: number;

    /**
     * @default 16778612
     */
    const Armenian_men: number;

    /**
     * @default 16778614
     */
    const Armenian_nu: number;

    /**
     * @default 16778629
     */
    const Armenian_o: number;

    /**
     * @default 16778590
     */
    const Armenian_paruyk: number;

    /**
     * @default 16778618
     */
    const Armenian_pe: number;

    /**
     * @default 16778627
     */
    const Armenian_pyur: number;

    /**
     * @default 16778590
     */
    const Armenian_question: number;

    /**
     * @default 16778620
     */
    const Armenian_ra: number;

    /**
     * @default 16778624
     */
    const Armenian_re: number;

    /**
     * @default 16778621
     */
    const Armenian_se: number;

    /**
     * @default 16778589
     */
    const Armenian_separation_mark: number;

    /**
     * @default 16778615
     */
    const Armenian_sha: number;

    /**
     * @default 16778587
     */
    const Armenian_shesht: number;

    /**
     * @default 16778611
     */
    const Armenian_tche: number;

    /**
     * @default 16778601
     */
    const Armenian_to: number;

    /**
     * @default 16778606
     */
    const Armenian_tsa: number;

    /**
     * @default 16778625
     */
    const Armenian_tso: number;

    /**
     * @default 16778623
     */
    const Armenian_tyun: number;

    /**
     * @default 16778633
     */
    const Armenian_verjaket: number;

    /**
     * @default 16778622
     */
    const Armenian_vev: number;

    /**
     * @default 16778616
     */
    const Armenian_vo: number;

    /**
     * @default 16778626
     */
    const Armenian_vyun: number;

    /**
     * @default 16778597
     */
    const Armenian_yech: number;

    /**
     * @default 16778634
     */
    const Armenian_yentamna: number;

    /**
     * @default 16778598
     */
    const Armenian_za: number;

    /**
     * @default 16778602
     */
    const Armenian_zhe: number;

    /**
     * @default 195
     */
    const Atilde: number;

    /**
     * @default 65146
     */
    const AudibleBell_Enable: number;

    /**
     * @default 66
     */
    const B: number;

    /**
     * @default 16784898
     */
    const Babovedot: number;

    /**
     * @default 65288
     */
    const BackSpace: number;

    /**
     * @default 65368
     */
    const Begin: number;

    /**
     * @default 65140
     */
    const BounceKeys_Enable: number;

    /**
     * @default 65387
     */
    const Break: number;

    /**
     * @default 1726
     */
    const Byelorussian_SHORTU: number;

    /**
     * @default 1710
     */
    const Byelorussian_shortu: number;

    /**
     * @default 67
     */
    const C: number;

    /**
     * @default 709
     */
    const Cabovedot: number;

    /**
     * @default 454
     */
    const Cacute: number;

    /**
     * @default 65385
     */
    const Cancel: number;

    /**
     * @default 65509
     */
    const Caps_Lock: number;

    /**
     * @default 456
     */
    const Ccaron: number;

    /**
     * @default 199
     */
    const Ccedilla: number;

    /**
     * @default 710
     */
    const Ccircumflex: number;

    /**
     * @default 65291
     */
    const Clear: number;

    /**
     * International and multi-key character composition.
     * @default 65335
     */
    const Codeinput: number;

    /**
     * @default 16785569
     */
    const ColonSign: number;

    /**
     * @default 65507
     */
    const Control_L: number;

    /**
     * @default 65508
     */
    const Control_R: number;

    /**
     * @default 16785570
     */
    const CruzeiroSign: number;

    /**
     * @default 1761
     */
    const Cyrillic_A: number;

    /**
     * @default 1762
     */
    const Cyrillic_BE: number;

    /**
     * @default 1790
     */
    const Cyrillic_CHE: number;

    /**
     * @default 16778422
     */
    const Cyrillic_CHE_descender: number;

    /**
     * @default 16778424
     */
    const Cyrillic_CHE_vertstroke: number;

    /**
     * @default 1764
     */
    const Cyrillic_DE: number;

    /**
     * @default 1727
     */
    const Cyrillic_DZHE: number;

    /**
     * @default 1788
     */
    const Cyrillic_E: number;

    /**
     * @default 1766
     */
    const Cyrillic_EF: number;

    /**
     * @default 1772
     */
    const Cyrillic_EL: number;

    /**
     * @default 1773
     */
    const Cyrillic_EM: number;

    /**
     * @default 1774
     */
    const Cyrillic_EN: number;

    /**
     * @default 16778402
     */
    const Cyrillic_EN_descender: number;

    /**
     * @default 1778
     */
    const Cyrillic_ER: number;

    /**
     * @default 1779
     */
    const Cyrillic_ES: number;

    /**
     * @default 1767
     */
    const Cyrillic_GHE: number;

    /**
     * @default 16778386
     */
    const Cyrillic_GHE_bar: number;

    /**
     * @default 1768
     */
    const Cyrillic_HA: number;

    /**
     * @default 1791
     */
    const Cyrillic_HARDSIGN: number;

    /**
     * @default 16778418
     */
    const Cyrillic_HA_descender: number;

    /**
     * @default 1769
     */
    const Cyrillic_I: number;

    /**
     * @default 1765
     */
    const Cyrillic_IE: number;

    /**
     * @default 1715
     */
    const Cyrillic_IO: number;

    /**
     * @default 16778466
     */
    const Cyrillic_I_macron: number;

    /**
     * @default 1720
     */
    const Cyrillic_JE: number;

    /**
     * @default 1771
     */
    const Cyrillic_KA: number;

    /**
     * @default 16778394
     */
    const Cyrillic_KA_descender: number;

    /**
     * @default 16778396
     */
    const Cyrillic_KA_vertstroke: number;

    /**
     * @default 1721
     */
    const Cyrillic_LJE: number;

    /**
     * @default 1722
     */
    const Cyrillic_NJE: number;

    /**
     * @default 1775
     */
    const Cyrillic_O: number;

    /**
     * @default 16778472
     */
    const Cyrillic_O_bar: number;

    /**
     * @default 1776
     */
    const Cyrillic_PE: number;

    /**
     * @default 16778456
     */
    const Cyrillic_SCHWA: number;

    /**
     * @default 1787
     */
    const Cyrillic_SHA: number;

    /**
     * @default 1789
     */
    const Cyrillic_SHCHA: number;

    /**
     * @default 16778426
     */
    const Cyrillic_SHHA: number;

    /**
     * @default 1770
     */
    const Cyrillic_SHORTI: number;

    /**
     * @default 1784
     */
    const Cyrillic_SOFTSIGN: number;

    /**
     * @default 1780
     */
    const Cyrillic_TE: number;

    /**
     * @default 1763
     */
    const Cyrillic_TSE: number;

    /**
     * @default 1781
     */
    const Cyrillic_U: number;

    /**
     * @default 16778478
     */
    const Cyrillic_U_macron: number;

    /**
     * @default 16778414
     */
    const Cyrillic_U_straight: number;

    /**
     * @default 16778416
     */
    const Cyrillic_U_straight_bar: number;

    /**
     * @default 1783
     */
    const Cyrillic_VE: number;

    /**
     * @default 1777
     */
    const Cyrillic_YA: number;

    /**
     * @default 1785
     */
    const Cyrillic_YERU: number;

    /**
     * @default 1760
     */
    const Cyrillic_YU: number;

    /**
     * @default 1786
     */
    const Cyrillic_ZE: number;

    /**
     * @default 1782
     */
    const Cyrillic_ZHE: number;

    /**
     * @default 16778390
     */
    const Cyrillic_ZHE_descender: number;

    /**
     * @default 1729
     */
    const Cyrillic_a: number;

    /**
     * @default 1730
     */
    const Cyrillic_be: number;

    /**
     * @default 1758
     */
    const Cyrillic_che: number;

    /**
     * @default 16778423
     */
    const Cyrillic_che_descender: number;

    /**
     * @default 16778425
     */
    const Cyrillic_che_vertstroke: number;

    /**
     * @default 1732
     */
    const Cyrillic_de: number;

    /**
     * @default 1711
     */
    const Cyrillic_dzhe: number;

    /**
     * @default 1756
     */
    const Cyrillic_e: number;

    /**
     * @default 1734
     */
    const Cyrillic_ef: number;

    /**
     * @default 1740
     */
    const Cyrillic_el: number;

    /**
     * @default 1741
     */
    const Cyrillic_em: number;

    /**
     * @default 1742
     */
    const Cyrillic_en: number;

    /**
     * @default 16778403
     */
    const Cyrillic_en_descender: number;

    /**
     * @default 1746
     */
    const Cyrillic_er: number;

    /**
     * @default 1747
     */
    const Cyrillic_es: number;

    /**
     * @default 1735
     */
    const Cyrillic_ghe: number;

    /**
     * @default 16778387
     */
    const Cyrillic_ghe_bar: number;

    /**
     * @default 1736
     */
    const Cyrillic_ha: number;

    /**
     * @default 16778419
     */
    const Cyrillic_ha_descender: number;

    /**
     * @default 1759
     */
    const Cyrillic_hardsign: number;

    /**
     * @default 1737
     */
    const Cyrillic_i: number;

    /**
     * @default 16778467
     */
    const Cyrillic_i_macron: number;

    /**
     * @default 1733
     */
    const Cyrillic_ie: number;

    /**
     * @default 1699
     */
    const Cyrillic_io: number;

    /**
     * @default 1704
     */
    const Cyrillic_je: number;

    /**
     * @default 1739
     */
    const Cyrillic_ka: number;

    /**
     * @default 16778395
     */
    const Cyrillic_ka_descender: number;

    /**
     * @default 16778397
     */
    const Cyrillic_ka_vertstroke: number;

    /**
     * @default 1705
     */
    const Cyrillic_lje: number;

    /**
     * @default 1706
     */
    const Cyrillic_nje: number;

    /**
     * @default 1743
     */
    const Cyrillic_o: number;

    /**
     * @default 16778473
     */
    const Cyrillic_o_bar: number;

    /**
     * @default 1744
     */
    const Cyrillic_pe: number;

    /**
     * @default 16778457
     */
    const Cyrillic_schwa: number;

    /**
     * @default 1755
     */
    const Cyrillic_sha: number;

    /**
     * @default 1757
     */
    const Cyrillic_shcha: number;

    /**
     * @default 16778427
     */
    const Cyrillic_shha: number;

    /**
     * @default 1738
     */
    const Cyrillic_shorti: number;

    /**
     * @default 1752
     */
    const Cyrillic_softsign: number;

    /**
     * @default 1748
     */
    const Cyrillic_te: number;

    /**
     * @default 1731
     */
    const Cyrillic_tse: number;

    /**
     * @default 1749
     */
    const Cyrillic_u: number;

    /**
     * @default 16778479
     */
    const Cyrillic_u_macron: number;

    /**
     * @default 16778415
     */
    const Cyrillic_u_straight: number;

    /**
     * @default 16778417
     */
    const Cyrillic_u_straight_bar: number;

    /**
     * @default 1751
     */
    const Cyrillic_ve: number;

    /**
     * @default 1745
     */
    const Cyrillic_ya: number;

    /**
     * @default 1753
     */
    const Cyrillic_yeru: number;

    /**
     * @default 1728
     */
    const Cyrillic_yu: number;

    /**
     * @default 1754
     */
    const Cyrillic_ze: number;

    /**
     * @default 1750
     */
    const Cyrillic_zhe: number;

    /**
     * @default 16778391
     */
    const Cyrillic_zhe_descender: number;

    /**
     * @default 68
     */
    const D: number;

    /**
     * @default 16784906
     */
    const Dabovedot: number;

    /**
     * @default 463
     */
    const Dcaron: number;

    /**
     * @default 65535
     */
    const Delete: number;

    /**
     * @default 16785579
     */
    const DongSign: number;

    /**
     * @default 65364
     */
    const Down: number;

    /**
     * @default 464
     */
    const Dstroke: number;

    /**
     * @default 69
     */
    const E: number;

    /**
     * @default 957
     */
    const ENG: number;

    /**
     * @default 208
     */
    const ETH: number;

    /**
     * @default 972
     */
    const Eabovedot: number;

    /**
     * @default 201
     */
    const Eacute: number;

    /**
     * @default 16785080
     */
    const Ebelowdot: number;

    /**
     * @default 460
     */
    const Ecaron: number;

    /**
     * @default 202
     */
    const Ecircumflex: number;

    /**
     * @default 16785086
     */
    const Ecircumflexacute: number;

    /**
     * @default 16785094
     */
    const Ecircumflexbelowdot: number;

    /**
     * @default 16785088
     */
    const Ecircumflexgrave: number;

    /**
     * @default 16785090
     */
    const Ecircumflexhook: number;

    /**
     * @default 16785092
     */
    const Ecircumflextilde: number;

    /**
     * @default 16785568
     */
    const EcuSign: number;

    /**
     * @default 203
     */
    const Ediaeresis: number;

    /**
     * @default 200
     */
    const Egrave: number;

    /**
     * @default 16785082
     */
    const Ehook: number;

    /**
     * @default 65327
     */
    const Eisu_Shift: number;

    /**
     * @default 65328
     */
    const Eisu_toggle: number;

    /**
     * @default 938
     */
    const Emacron: number;

    /**
     * @default 65367
     */
    const End: number;

    /**
     * @default 458
     */
    const Eogonek: number;

    /**
     * @default 65307
     */
    const Escape: number;

    /**
     * @default 208
     */
    const Eth: number;

    /**
     * @default 16785084
     */
    const Etilde: number;

    /**
     * @default 8364
     */
    const EuroSign: number;

    /**
     * @default 65378
     */
    const Execute: number;

    /**
     * @default 70
     */
    const F: number;

    /**
     * @default 65470
     */
    const F1: number;

    /**
     * @default 65479
     */
    const F10: number;

    /**
     * @default 65480
     */
    const F11: number;

    /**
     * @default 65481
     */
    const F12: number;

    /**
     * @default 65482
     */
    const F13: number;

    /**
     * @default 65483
     */
    const F14: number;

    /**
     * @default 65484
     */
    const F15: number;

    /**
     * @default 65485
     */
    const F16: number;

    /**
     * @default 65486
     */
    const F17: number;

    /**
     * @default 65487
     */
    const F18: number;

    /**
     * @default 65488
     */
    const F19: number;

    /**
     * @default 65471
     */
    const F2: number;

    /**
     * @default 65489
     */
    const F20: number;

    /**
     * @default 65490
     */
    const F21: number;

    /**
     * @default 65491
     */
    const F22: number;

    /**
     * @default 65492
     */
    const F23: number;

    /**
     * @default 65493
     */
    const F24: number;

    /**
     * @default 65494
     */
    const F25: number;

    /**
     * @default 65495
     */
    const F26: number;

    /**
     * @default 65496
     */
    const F27: number;

    /**
     * @default 65497
     */
    const F28: number;

    /**
     * @default 65498
     */
    const F29: number;

    /**
     * @default 65472
     */
    const F3: number;

    /**
     * @default 65499
     */
    const F30: number;

    /**
     * @default 65500
     */
    const F31: number;

    /**
     * @default 65501
     */
    const F32: number;

    /**
     * @default 65502
     */
    const F33: number;

    /**
     * @default 65503
     */
    const F34: number;

    /**
     * @default 65504
     */
    const F35: number;

    /**
     * @default 65473
     */
    const F4: number;

    /**
     * @default 65474
     */
    const F5: number;

    /**
     * @default 65475
     */
    const F6: number;

    /**
     * @default 65476
     */
    const F7: number;

    /**
     * @default 65477
     */
    const F8: number;

    /**
     * @default 65478
     */
    const F9: number;

    /**
     * @default 16785571
     */
    const FFrancSign: number;

    /**
     * @default 16784926
     */
    const Fabovedot: number;

    /**
     * @default 16778992
     */
    const Farsi_0: number;

    /**
     * @default 16778993
     */
    const Farsi_1: number;

    /**
     * @default 16778994
     */
    const Farsi_2: number;

    /**
     * @default 16778995
     */
    const Farsi_3: number;

    /**
     * @default 16778996
     */
    const Farsi_4: number;

    /**
     * @default 16778997
     */
    const Farsi_5: number;

    /**
     * @default 16778998
     */
    const Farsi_6: number;

    /**
     * @default 16778999
     */
    const Farsi_7: number;

    /**
     * @default 16779000
     */
    const Farsi_8: number;

    /**
     * @default 16779001
     */
    const Farsi_9: number;

    /**
     * @default 16778956
     */
    const Farsi_yeh: number;

    /**
     * @default 65384
     */
    const Find: number;

    /**
     * @default 65232
     */
    const First_Virtual_Screen: number;

    /**
     * @default 71
     */
    const G: number;

    /**
     * @default 725
     */
    const Gabovedot: number;

    /**
     * @default 683
     */
    const Gbreve: number;

    /**
     * @default 16777702
     */
    const Gcaron: number;

    /**
     * @default 939
     */
    const Gcedilla: number;

    /**
     * @default 728
     */
    const Gcircumflex: number;

    /**
     * @default 16781520
     */
    const Georgian_an: number;

    /**
     * @default 16781521
     */
    const Georgian_ban: number;

    /**
     * @default 16781546
     */
    const Georgian_can: number;

    /**
     * @default 16781549
     */
    const Georgian_char: number;

    /**
     * @default 16781545
     */
    const Georgian_chin: number;

    /**
     * @default 16781548
     */
    const Georgian_cil: number;

    /**
     * @default 16781523
     */
    const Georgian_don: number;

    /**
     * @default 16781524
     */
    const Georgian_en: number;

    /**
     * @default 16781558
     */
    const Georgian_fi: number;

    /**
     * @default 16781522
     */
    const Georgian_gan: number;

    /**
     * @default 16781542
     */
    const Georgian_ghan: number;

    /**
     * @default 16781552
     */
    const Georgian_hae: number;

    /**
     * @default 16781556
     */
    const Georgian_har: number;

    /**
     * @default 16781553
     */
    const Georgian_he: number;

    /**
     * @default 16781554
     */
    const Georgian_hie: number;

    /**
     * @default 16781557
     */
    const Georgian_hoe: number;

    /**
     * @default 16781528
     */
    const Georgian_in: number;

    /**
     * @default 16781551
     */
    const Georgian_jhan: number;

    /**
     * @default 16781547
     */
    const Georgian_jil: number;

    /**
     * @default 16781529
     */
    const Georgian_kan: number;

    /**
     * @default 16781541
     */
    const Georgian_khar: number;

    /**
     * @default 16781530
     */
    const Georgian_las: number;

    /**
     * @default 16781531
     */
    const Georgian_man: number;

    /**
     * @default 16781532
     */
    const Georgian_nar: number;

    /**
     * @default 16781533
     */
    const Georgian_on: number;

    /**
     * @default 16781534
     */
    const Georgian_par: number;

    /**
     * @default 16781540
     */
    const Georgian_phar: number;

    /**
     * @default 16781543
     */
    const Georgian_qar: number;

    /**
     * @default 16781536
     */
    const Georgian_rae: number;

    /**
     * @default 16781537
     */
    const Georgian_san: number;

    /**
     * @default 16781544
     */
    const Georgian_shin: number;

    /**
     * @default 16781527
     */
    const Georgian_tan: number;

    /**
     * @default 16781538
     */
    const Georgian_tar: number;

    /**
     * @default 16781539
     */
    const Georgian_un: number;

    /**
     * @default 16781525
     */
    const Georgian_vin: number;

    /**
     * @default 16781555
     */
    const Georgian_we: number;

    /**
     * @default 16781550
     */
    const Georgian_xan: number;

    /**
     * @default 16781526
     */
    const Georgian_zen: number;

    /**
     * @default 16781535
     */
    const Georgian_zhar: number;

    /**
     * @default 1985
     */
    const Greek_ALPHA: number;

    /**
     * @default 1953
     */
    const Greek_ALPHAaccent: number;

    /**
     * @default 1986
     */
    const Greek_BETA: number;

    /**
     * @default 2007
     */
    const Greek_CHI: number;

    /**
     * @default 1988
     */
    const Greek_DELTA: number;

    /**
     * @default 1989
     */
    const Greek_EPSILON: number;

    /**
     * @default 1954
     */
    const Greek_EPSILONaccent: number;

    /**
     * @default 1991
     */
    const Greek_ETA: number;

    /**
     * @default 1955
     */
    const Greek_ETAaccent: number;

    /**
     * @default 1987
     */
    const Greek_GAMMA: number;

    /**
     * @default 1993
     */
    const Greek_IOTA: number;

    /**
     * @default 1956
     */
    const Greek_IOTAaccent: number;

    /**
     * @default 1957
     */
    const Greek_IOTAdiaeresis: number;

    /**
     * @default 1957
     */
    const Greek_IOTAdieresis: number;

    /**
     * @default 1994
     */
    const Greek_KAPPA: number;

    /**
     * @default 1995
     */
    const Greek_LAMBDA: number;

    /**
     * @default 1995
     */
    const Greek_LAMDA: number;

    /**
     * @default 1996
     */
    const Greek_MU: number;

    /**
     * @default 1997
     */
    const Greek_NU: number;

    /**
     * @default 2009
     */
    const Greek_OMEGA: number;

    /**
     * @default 1963
     */
    const Greek_OMEGAaccent: number;

    /**
     * @default 1999
     */
    const Greek_OMICRON: number;

    /**
     * @default 1959
     */
    const Greek_OMICRONaccent: number;

    /**
     * @default 2006
     */
    const Greek_PHI: number;

    /**
     * @default 2000
     */
    const Greek_PI: number;

    /**
     * @default 2008
     */
    const Greek_PSI: number;

    /**
     * @default 2001
     */
    const Greek_RHO: number;

    /**
     * @default 2002
     */
    const Greek_SIGMA: number;

    /**
     * @default 2004
     */
    const Greek_TAU: number;

    /**
     * @default 1992
     */
    const Greek_THETA: number;

    /**
     * @default 2005
     */
    const Greek_UPSILON: number;

    /**
     * @default 1960
     */
    const Greek_UPSILONaccent: number;

    /**
     * @default 1961
     */
    const Greek_UPSILONdieresis: number;

    /**
     * @default 1998
     */
    const Greek_XI: number;

    /**
     * @default 1990
     */
    const Greek_ZETA: number;

    /**
     * @default 1966
     */
    const Greek_accentdieresis: number;

    /**
     * @default 2017
     */
    const Greek_alpha: number;

    /**
     * @default 1969
     */
    const Greek_alphaaccent: number;

    /**
     * @default 2018
     */
    const Greek_beta: number;

    /**
     * @default 2039
     */
    const Greek_chi: number;

    /**
     * @default 2020
     */
    const Greek_delta: number;

    /**
     * @default 2021
     */
    const Greek_epsilon: number;

    /**
     * @default 1970
     */
    const Greek_epsilonaccent: number;

    /**
     * @default 2023
     */
    const Greek_eta: number;

    /**
     * @default 1971
     */
    const Greek_etaaccent: number;

    /**
     * @default 2035
     */
    const Greek_finalsmallsigma: number;

    /**
     * @default 2019
     */
    const Greek_gamma: number;

    /**
     * @default 1967
     */
    const Greek_horizbar: number;

    /**
     * @default 2025
     */
    const Greek_iota: number;

    /**
     * @default 1972
     */
    const Greek_iotaaccent: number;

    /**
     * @default 1974
     */
    const Greek_iotaaccentdieresis: number;

    /**
     * @default 1973
     */
    const Greek_iotadieresis: number;

    /**
     * @default 2026
     */
    const Greek_kappa: number;

    /**
     * @default 2027
     */
    const Greek_lambda: number;

    /**
     * @default 2027
     */
    const Greek_lamda: number;

    /**
     * @default 2028
     */
    const Greek_mu: number;

    /**
     * @default 2029
     */
    const Greek_nu: number;

    /**
     * @default 2041
     */
    const Greek_omega: number;

    /**
     * @default 1979
     */
    const Greek_omegaaccent: number;

    /**
     * @default 2031
     */
    const Greek_omicron: number;

    /**
     * @default 1975
     */
    const Greek_omicronaccent: number;

    /**
     * @default 2038
     */
    const Greek_phi: number;

    /**
     * @default 2032
     */
    const Greek_pi: number;

    /**
     * @default 2040
     */
    const Greek_psi: number;

    /**
     * @default 2033
     */
    const Greek_rho: number;

    /**
     * @default 2034
     */
    const Greek_sigma: number;

    /**
     * @default 65406
     */
    const Greek_switch: number;

    /**
     * @default 2036
     */
    const Greek_tau: number;

    /**
     * @default 2024
     */
    const Greek_theta: number;

    /**
     * @default 2037
     */
    const Greek_upsilon: number;

    /**
     * @default 1976
     */
    const Greek_upsilonaccent: number;

    /**
     * @default 1978
     */
    const Greek_upsilonaccentdieresis: number;

    /**
     * @default 1977
     */
    const Greek_upsilondieresis: number;

    /**
     * @default 2030
     */
    const Greek_xi: number;

    /**
     * @default 2022
     */
    const Greek_zeta: number;

    /**
     * @default 72
     */
    const H: number;

    /**
     * @default 65329
     */
    const Hangul: number;

    /**
     * @default 3775
     */
    const Hangul_A: number;

    /**
     * @default 3776
     */
    const Hangul_AE: number;

    /**
     * @default 3830
     */
    const Hangul_AraeA: number;

    /**
     * @default 3831
     */
    const Hangul_AraeAE: number;

    /**
     * @default 65337
     */
    const Hangul_Banja: number;

    /**
     * @default 3770
     */
    const Hangul_Cieuc: number;

    /**
     * @default 65335
     */
    const Hangul_Codeinput: number;

    /**
     * @default 3751
     */
    const Hangul_Dikeud: number;

    /**
     * @default 3780
     */
    const Hangul_E: number;

    /**
     * @default 3779
     */
    const Hangul_EO: number;

    /**
     * @default 3793
     */
    const Hangul_EU: number;

    /**
     * @default 65331
     */
    const Hangul_End: number;

    /**
     * @default 65332
     */
    const Hangul_Hanja: number;

    /**
     * @default 3774
     */
    const Hangul_Hieuh: number;

    /**
     * @default 3795
     */
    const Hangul_I: number;

    /**
     * @default 3767
     */
    const Hangul_Ieung: number;

    /**
     * @default 3818
     */
    const Hangul_J_Cieuc: number;

    /**
     * @default 3802
     */
    const Hangul_J_Dikeud: number;

    /**
     * @default 3822
     */
    const Hangul_J_Hieuh: number;

    /**
     * @default 3816
     */
    const Hangul_J_Ieung: number;

    /**
     * @default 3817
     */
    const Hangul_J_Jieuj: number;

    /**
     * @default 3819
     */
    const Hangul_J_Khieuq: number;

    /**
     * @default 3796
     */
    const Hangul_J_Kiyeog: number;

    /**
     * @default 3798
     */
    const Hangul_J_KiyeogSios: number;

    /**
     * @default 3833
     */
    const Hangul_J_KkogjiDalrinIeung: number;

    /**
     * @default 3811
     */
    const Hangul_J_Mieum: number;

    /**
     * @default 3799
     */
    const Hangul_J_Nieun: number;

    /**
     * @default 3801
     */
    const Hangul_J_NieunHieuh: number;

    /**
     * @default 3800
     */
    const Hangul_J_NieunJieuj: number;

    /**
     * @default 3832
     */
    const Hangul_J_PanSios: number;

    /**
     * @default 3821
     */
    const Hangul_J_Phieuf: number;

    /**
     * @default 3812
     */
    const Hangul_J_Pieub: number;

    /**
     * @default 3813
     */
    const Hangul_J_PieubSios: number;

    /**
     * @default 3803
     */
    const Hangul_J_Rieul: number;

    /**
     * @default 3810
     */
    const Hangul_J_RieulHieuh: number;

    /**
     * @default 3804
     */
    const Hangul_J_RieulKiyeog: number;

    /**
     * @default 3805
     */
    const Hangul_J_RieulMieum: number;

    /**
     * @default 3809
     */
    const Hangul_J_RieulPhieuf: number;

    /**
     * @default 3806
     */
    const Hangul_J_RieulPieub: number;

    /**
     * @default 3807
     */
    const Hangul_J_RieulSios: number;

    /**
     * @default 3808
     */
    const Hangul_J_RieulTieut: number;

    /**
     * @default 3814
     */
    const Hangul_J_Sios: number;

    /**
     * @default 3797
     */
    const Hangul_J_SsangKiyeog: number;

    /**
     * @default 3815
     */
    const Hangul_J_SsangSios: number;

    /**
     * @default 3820
     */
    const Hangul_J_Tieut: number;

    /**
     * @default 3834
     */
    const Hangul_J_YeorinHieuh: number;

    /**
     * @default 65333
     */
    const Hangul_Jamo: number;

    /**
     * @default 65336
     */
    const Hangul_Jeonja: number;

    /**
     * @default 3768
     */
    const Hangul_Jieuj: number;

    /**
     * @default 3771
     */
    const Hangul_Khieuq: number;

    /**
     * @default 3745
     */
    const Hangul_Kiyeog: number;

    /**
     * @default 3747
     */
    const Hangul_KiyeogSios: number;

    /**
     * @default 3827
     */
    const Hangul_KkogjiDalrinIeung: number;

    /**
     * @default 3761
     */
    const Hangul_Mieum: number;

    /**
     * @default 65341
     */
    const Hangul_MultipleCandidate: number;

    /**
     * @default 3748
     */
    const Hangul_Nieun: number;

    /**
     * @default 3750
     */
    const Hangul_NieunHieuh: number;

    /**
     * @default 3749
     */
    const Hangul_NieunJieuj: number;

    /**
     * @default 3783
     */
    const Hangul_O: number;

    /**
     * @default 3786
     */
    const Hangul_OE: number;

    /**
     * @default 3826
     */
    const Hangul_PanSios: number;

    /**
     * @default 3773
     */
    const Hangul_Phieuf: number;

    /**
     * @default 3762
     */
    const Hangul_Pieub: number;

    /**
     * @default 3764
     */
    const Hangul_PieubSios: number;

    /**
     * @default 65339
     */
    const Hangul_PostHanja: number;

    /**
     * @default 65338
     */
    const Hangul_PreHanja: number;

    /**
     * @default 65342
     */
    const Hangul_PreviousCandidate: number;

    /**
     * @default 3753
     */
    const Hangul_Rieul: number;

    /**
     * @default 3760
     */
    const Hangul_RieulHieuh: number;

    /**
     * @default 3754
     */
    const Hangul_RieulKiyeog: number;

    /**
     * @default 3755
     */
    const Hangul_RieulMieum: number;

    /**
     * @default 3759
     */
    const Hangul_RieulPhieuf: number;

    /**
     * @default 3756
     */
    const Hangul_RieulPieub: number;

    /**
     * @default 3757
     */
    const Hangul_RieulSios: number;

    /**
     * @default 3758
     */
    const Hangul_RieulTieut: number;

    /**
     * @default 3823
     */
    const Hangul_RieulYeorinHieuh: number;

    /**
     * @default 65334
     */
    const Hangul_Romaja: number;

    /**
     * @default 65340
     */
    const Hangul_SingleCandidate: number;

    /**
     * @default 3765
     */
    const Hangul_Sios: number;

    /**
     * @default 65343
     */
    const Hangul_Special: number;

    /**
     * @default 3752
     */
    const Hangul_SsangDikeud: number;

    /**
     * @default 3769
     */
    const Hangul_SsangJieuj: number;

    /**
     * @default 3746
     */
    const Hangul_SsangKiyeog: number;

    /**
     * @default 3763
     */
    const Hangul_SsangPieub: number;

    /**
     * @default 3766
     */
    const Hangul_SsangSios: number;

    /**
     * @default 65330
     */
    const Hangul_Start: number;

    /**
     * @default 3824
     */
    const Hangul_SunkyeongeumMieum: number;

    /**
     * @default 3828
     */
    const Hangul_SunkyeongeumPhieuf: number;

    /**
     * @default 3825
     */
    const Hangul_SunkyeongeumPieub: number;

    /**
     * @default 3772
     */
    const Hangul_Tieut: number;

    /**
     * @default 3788
     */
    const Hangul_U: number;

    /**
     * @default 3784
     */
    const Hangul_WA: number;

    /**
     * @default 3785
     */
    const Hangul_WAE: number;

    /**
     * @default 3790
     */
    const Hangul_WE: number;

    /**
     * @default 3789
     */
    const Hangul_WEO: number;

    /**
     * @default 3791
     */
    const Hangul_WI: number;

    /**
     * @default 3777
     */
    const Hangul_YA: number;

    /**
     * @default 3778
     */
    const Hangul_YAE: number;

    /**
     * @default 3782
     */
    const Hangul_YE: number;

    /**
     * @default 3781
     */
    const Hangul_YEO: number;

    /**
     * @default 3794
     */
    const Hangul_YI: number;

    /**
     * @default 3787
     */
    const Hangul_YO: number;

    /**
     * @default 3792
     */
    const Hangul_YU: number;

    /**
     * @default 3829
     */
    const Hangul_YeorinHieuh: number;

    /**
     * @default 65406
     */
    const Hangul_switch: number;

    /**
     * @default 65321
     */
    const Hankaku: number;

    /**
     * @default 678
     */
    const Hcircumflex: number;

    /**
     * @default 65406
     */
    const Hebrew_switch: number;

    /**
     * @default 65386
     */
    const Help: number;

    /**
     * Japanese keyboard support.
     * @default 65315
     */
    const Henkan: number;

    /**
     * Japanese keyboard support.
     * @default 65315
     */
    const Henkan_Mode: number;

    /**
     * Japanese keyboard support.
     * @default 65317
     */
    const Hiragana: number;

    /**
     * Japanese keyboard support.
     * @default 65319
     */
    const Hiragana_Katakana: number;

    /**
     * @default 65360
     */
    const Home: number;

    /**
     * @default 673
     */
    const Hstroke: number;

    /**
     * @default 65517
     */
    const Hyper_L: number;

    /**
     * @default 65518
     */
    const Hyper_R: number;

    /**
     * @default 73
     */
    const I: number;

    /**
     * D-Bus interface for IBus config.
     * @default org.freedesktop.IBus.Config
     */
    const INTERFACE_CONFIG: string;

    /**
     * D-Bus interface for IBus engine.
     * @default org.freedesktop.IBus.Engine
     */
    const INTERFACE_ENGINE: string;

    /**
     * D-Bus interface for IBus factory.
     * @default org.freedesktop.IBus.Factory
     */
    const INTERFACE_FACTORY: string;

    /**
     * D-Bus interface for IBus.
     * @default org.freedesktop.IBus
     */
    const INTERFACE_IBUS: string;

    /**
     * D-Bus interface for IBus input context.
     * @default org.freedesktop.IBus.InputContext
     */
    const INTERFACE_INPUT_CONTEXT: string;

    /**
     * D-Bus interface for IBus notifications.
     * @default org.freedesktop.IBus.Notifications
     */
    const INTERFACE_NOTIFICATIONS: string;

    /**
     * D-Bus interface for IBus panel.
     * @default org.freedesktop.IBus.Panel
     */
    const INTERFACE_PANEL: string;

    /**
     * D-Bus interface for IBus portal.
     * @default org.freedesktop.IBus.Portal
     */
    const INTERFACE_PORTAL: string;

    /**
     * @default 65075
     */
    const ISO_Center_Object: number;

    /**
     * @default 65072
     */
    const ISO_Continuous_Underline: number;

    /**
     * @default 65073
     */
    const ISO_Discontinuous_Underline: number;

    /**
     * @default 65074
     */
    const ISO_Emphasize: number;

    /**
     * @default 65076
     */
    const ISO_Enter: number;

    /**
     * @default 65071
     */
    const ISO_Fast_Cursor_Down: number;

    /**
     * @default 65068
     */
    const ISO_Fast_Cursor_Left: number;

    /**
     * @default 65069
     */
    const ISO_Fast_Cursor_Right: number;

    /**
     * @default 65070
     */
    const ISO_Fast_Cursor_Up: number;

    /**
     * @default 65036
     */
    const ISO_First_Group: number;

    /**
     * @default 65037
     */
    const ISO_First_Group_Lock: number;

    /**
     * @default 65030
     */
    const ISO_Group_Latch: number;

    /**
     * @default 65031
     */
    const ISO_Group_Lock: number;

    /**
     * @default 65406
     */
    const ISO_Group_Shift: number;

    /**
     * @default 65038
     */
    const ISO_Last_Group: number;

    /**
     * @default 65039
     */
    const ISO_Last_Group_Lock: number;

    /**
     * @default 65056
     */
    const ISO_Left_Tab: number;

    /**
     * @default 65026
     */
    const ISO_Level2_Latch: number;

    /**
     * @default 65028
     */
    const ISO_Level3_Latch: number;

    /**
     * @default 65029
     */
    const ISO_Level3_Lock: number;

    /**
     * @default 65027
     */
    const ISO_Level3_Shift: number;

    /**
     * @default 65042
     */
    const ISO_Level5_Latch: number;

    /**
     * @default 65043
     */
    const ISO_Level5_Lock: number;

    /**
     * @default 65041
     */
    const ISO_Level5_Shift: number;

    /**
     * @default 65025
     */
    const ISO_Lock: number;

    /**
     * @default 65058
     */
    const ISO_Move_Line_Down: number;

    /**
     * @default 65057
     */
    const ISO_Move_Line_Up: number;

    /**
     * @default 65032
     */
    const ISO_Next_Group: number;

    /**
     * @default 65033
     */
    const ISO_Next_Group_Lock: number;

    /**
     * @default 65060
     */
    const ISO_Partial_Line_Down: number;

    /**
     * @default 65059
     */
    const ISO_Partial_Line_Up: number;

    /**
     * @default 65061
     */
    const ISO_Partial_Space_Left: number;

    /**
     * @default 65062
     */
    const ISO_Partial_Space_Right: number;

    /**
     * @default 65034
     */
    const ISO_Prev_Group: number;

    /**
     * @default 65035
     */
    const ISO_Prev_Group_Lock: number;

    /**
     * @default 65067
     */
    const ISO_Release_Both_Margins: number;

    /**
     * @default 65065
     */
    const ISO_Release_Margin_Left: number;

    /**
     * @default 65066
     */
    const ISO_Release_Margin_Right: number;

    /**
     * @default 65063
     */
    const ISO_Set_Margin_Left: number;

    /**
     * @default 65064
     */
    const ISO_Set_Margin_Right: number;

    /**
     * @default 681
     */
    const Iabovedot: number;

    /**
     * @default 205
     */
    const Iacute: number;

    /**
     * @default 16785098
     */
    const Ibelowdot: number;

    /**
     * @default 16777516
     */
    const Ibreve: number;

    /**
     * @default 206
     */
    const Icircumflex: number;

    /**
     * @default 207
     */
    const Idiaeresis: number;

    /**
     * @default 204
     */
    const Igrave: number;

    /**
     * @default 16785096
     */
    const Ihook: number;

    /**
     * @default 975
     */
    const Imacron: number;

    /**
     * @default 65379
     */
    const Insert: number;

    /**
     * @default 967
     */
    const Iogonek: number;

    /**
     * @default 933
     */
    const Itilde: number;

    /**
     * @default 74
     */
    const J: number;

    /**
     * @default 684
     */
    const Jcircumflex: number;

    /**
     * @default 75
     */
    const K: number;

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
     * @default 269025202
     */
    const KEY_AudioMicMute: number;

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
     * @default 269025206
     */
    const KEY_AudioPreset: number;

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
     * @default 65186
     */
    const KEY_CH: number;

    /**
     * @default 65189
     */
    const KEY_C_H: number;

    /**
     * @default 65188
     */
    const KEY_C_h: number;

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
     * @default 65185
     */
    const KEY_Ch: number;

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
     * @default 16777655
     */
    const KEY_EZH: number;

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
     * @default 269025203
     */
    const KEY_Keyboard: number;

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
     * @default 269024805
     */
    const KEY_LogGrabInfo: number;

    /**
     * @default 269025121
     */
    const KEY_LogOff: number;

    /**
     * @default 269024804
     */
    const KEY_LogWindowTree: number;

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
     * @default 269025205
     */
    const KEY_RFKill: number;

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
     * @default 16780677
     */
    const KEY_Sinh_a: number;

    /**
     * @default 16780678
     */
    const KEY_Sinh_aa: number;

    /**
     * @default 16780751
     */
    const KEY_Sinh_aa2: number;

    /**
     * @default 16780679
     */
    const KEY_Sinh_ae: number;

    /**
     * @default 16780752
     */
    const KEY_Sinh_ae2: number;

    /**
     * @default 16780680
     */
    const KEY_Sinh_aee: number;

    /**
     * @default 16780753
     */
    const KEY_Sinh_aee2: number;

    /**
     * @default 16780691
     */
    const KEY_Sinh_ai: number;

    /**
     * @default 16780763
     */
    const KEY_Sinh_ai2: number;

    /**
     * @default 16780746
     */
    const KEY_Sinh_al: number;

    /**
     * @default 16780694
     */
    const KEY_Sinh_au: number;

    /**
     * @default 16780766
     */
    const KEY_Sinh_au2: number;

    /**
     * @default 16780726
     */
    const KEY_Sinh_ba: number;

    /**
     * @default 16780727
     */
    const KEY_Sinh_bha: number;

    /**
     * @default 16780704
     */
    const KEY_Sinh_ca: number;

    /**
     * @default 16780705
     */
    const KEY_Sinh_cha: number;

    /**
     * @default 16780713
     */
    const KEY_Sinh_dda: number;

    /**
     * @default 16780714
     */
    const KEY_Sinh_ddha: number;

    /**
     * @default 16780719
     */
    const KEY_Sinh_dha: number;

    /**
     * @default 16780720
     */
    const KEY_Sinh_dhha: number;

    /**
     * @default 16780689
     */
    const KEY_Sinh_e: number;

    /**
     * @default 16780761
     */
    const KEY_Sinh_e2: number;

    /**
     * @default 16780690
     */
    const KEY_Sinh_ee: number;

    /**
     * @default 16780762
     */
    const KEY_Sinh_ee2: number;

    /**
     * @default 16780742
     */
    const KEY_Sinh_fa: number;

    /**
     * @default 16780700
     */
    const KEY_Sinh_ga: number;

    /**
     * @default 16780701
     */
    const KEY_Sinh_gha: number;

    /**
     * @default 16780675
     */
    const KEY_Sinh_h2: number;

    /**
     * @default 16780740
     */
    const KEY_Sinh_ha: number;

    /**
     * @default 16780681
     */
    const KEY_Sinh_i: number;

    /**
     * @default 16780754
     */
    const KEY_Sinh_i2: number;

    /**
     * @default 16780682
     */
    const KEY_Sinh_ii: number;

    /**
     * @default 16780755
     */
    const KEY_Sinh_ii2: number;

    /**
     * @default 16780706
     */
    const KEY_Sinh_ja: number;

    /**
     * @default 16780707
     */
    const KEY_Sinh_jha: number;

    /**
     * @default 16780709
     */
    const KEY_Sinh_jnya: number;

    /**
     * @default 16780698
     */
    const KEY_Sinh_ka: number;

    /**
     * @default 16780699
     */
    const KEY_Sinh_kha: number;

    /**
     * @default 16780788
     */
    const KEY_Sinh_kunddaliya: number;

    /**
     * @default 16780733
     */
    const KEY_Sinh_la: number;

    /**
     * @default 16780741
     */
    const KEY_Sinh_lla: number;

    /**
     * @default 16780687
     */
    const KEY_Sinh_lu: number;

    /**
     * @default 16780767
     */
    const KEY_Sinh_lu2: number;

    /**
     * @default 16780688
     */
    const KEY_Sinh_luu: number;

    /**
     * @default 16780787
     */
    const KEY_Sinh_luu2: number;

    /**
     * @default 16780728
     */
    const KEY_Sinh_ma: number;

    /**
     * @default 16780729
     */
    const KEY_Sinh_mba: number;

    /**
     * @default 16780721
     */
    const KEY_Sinh_na: number;

    /**
     * @default 16780716
     */
    const KEY_Sinh_ndda: number;

    /**
     * @default 16780723
     */
    const KEY_Sinh_ndha: number;

    /**
     * @default 16780674
     */
    const KEY_Sinh_ng: number;

    /**
     * @default 16780702
     */
    const KEY_Sinh_ng2: number;

    /**
     * @default 16780703
     */
    const KEY_Sinh_nga: number;

    /**
     * @default 16780710
     */
    const KEY_Sinh_nja: number;

    /**
     * @default 16780715
     */
    const KEY_Sinh_nna: number;

    /**
     * @default 16780708
     */
    const KEY_Sinh_nya: number;

    /**
     * @default 16780692
     */
    const KEY_Sinh_o: number;

    /**
     * @default 16780764
     */
    const KEY_Sinh_o2: number;

    /**
     * @default 16780693
     */
    const KEY_Sinh_oo: number;

    /**
     * @default 16780765
     */
    const KEY_Sinh_oo2: number;

    /**
     * @default 16780724
     */
    const KEY_Sinh_pa: number;

    /**
     * @default 16780725
     */
    const KEY_Sinh_pha: number;

    /**
     * @default 16780731
     */
    const KEY_Sinh_ra: number;

    /**
     * @default 16780685
     */
    const KEY_Sinh_ri: number;

    /**
     * @default 16780686
     */
    const KEY_Sinh_rii: number;

    /**
     * @default 16780760
     */
    const KEY_Sinh_ru2: number;

    /**
     * @default 16780786
     */
    const KEY_Sinh_ruu2: number;

    /**
     * @default 16780739
     */
    const KEY_Sinh_sa: number;

    /**
     * @default 16780737
     */
    const KEY_Sinh_sha: number;

    /**
     * @default 16780738
     */
    const KEY_Sinh_ssha: number;

    /**
     * @default 16780717
     */
    const KEY_Sinh_tha: number;

    /**
     * @default 16780718
     */
    const KEY_Sinh_thha: number;

    /**
     * @default 16780711
     */
    const KEY_Sinh_tta: number;

    /**
     * @default 16780712
     */
    const KEY_Sinh_ttha: number;

    /**
     * @default 16780683
     */
    const KEY_Sinh_u: number;

    /**
     * @default 16780756
     */
    const KEY_Sinh_u2: number;

    /**
     * @default 16780684
     */
    const KEY_Sinh_uu: number;

    /**
     * @default 16780758
     */
    const KEY_Sinh_uu2: number;

    /**
     * @default 16780736
     */
    const KEY_Sinh_va: number;

    /**
     * @default 16780730
     */
    const KEY_Sinh_ya: number;

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
     * @default 269025201
     */
    const KEY_TouchpadOff: number;

    /**
     * @default 269025200
     */
    const KEY_TouchpadOn: number;

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
     * @default 269025204
     */
    const KEY_WWAN: number;

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
     * @default 65187
     */
    const KEY_c_h: number;

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
     * @default 65184
     */
    const KEY_ch: number;

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
     * @default 16777985
     */
    const KEY_combining_acute: number;

    /**
     * @default 16778019
     */
    const KEY_combining_belowdot: number;

    /**
     * @default 16777984
     */
    const KEY_combining_grave: number;

    /**
     * @default 16777993
     */
    const KEY_combining_hook: number;

    /**
     * @default 16777987
     */
    const KEY_combining_tilde: number;

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
     * @default 65163
     */
    const KEY_dead_SCHWA: number;

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
     * @default 65169
     */
    const KEY_dead_aboveverticalline: number;

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
     * @default 65170
     */
    const KEY_dead_belowverticalline: number;

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
     * @default 65164
     */
    const KEY_dead_greek: number;

    /**
     * @default 65165
     */
    const KEY_dead_hamza: number;

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
     * @default 65171
     */
    const KEY_dead_longsolidusoverlay: number;

    /**
     * @default 65168
     */
    const KEY_dead_lowline: number;

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
     * @default 65162
     */
    const KEY_dead_schwa: number;

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
     * @default 16777874
     */
    const KEY_ezh: number;

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
    const KEY_guillemetleft: number;

    /**
     * @default 187
     */
    const KEY_guillemetright: number;

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
     * @default 186
     */
    const KEY_ordmasculine: number;

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
     * @default 2773
     */
    const KEY_permille: number;

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
     * @default 65456
     */
    const KP_0: number;

    /**
     * @default 65457
     */
    const KP_1: number;

    /**
     * @default 65458
     */
    const KP_2: number;

    /**
     * @default 65459
     */
    const KP_3: number;

    /**
     * @default 65460
     */
    const KP_4: number;

    /**
     * @default 65461
     */
    const KP_5: number;

    /**
     * @default 65462
     */
    const KP_6: number;

    /**
     * @default 65463
     */
    const KP_7: number;

    /**
     * @default 65464
     */
    const KP_8: number;

    /**
     * @default 65465
     */
    const KP_9: number;

    /**
     * @default 65451
     */
    const KP_Add: number;

    /**
     * @default 65437
     */
    const KP_Begin: number;

    /**
     * @default 65454
     */
    const KP_Decimal: number;

    /**
     * @default 65439
     */
    const KP_Delete: number;

    /**
     * @default 65455
     */
    const KP_Divide: number;

    /**
     * @default 65433
     */
    const KP_Down: number;

    /**
     * @default 65436
     */
    const KP_End: number;

    /**
     * @default 65421
     */
    const KP_Enter: number;

    /**
     * @default 65469
     */
    const KP_Equal: number;

    /**
     * @default 65425
     */
    const KP_F1: number;

    /**
     * @default 65426
     */
    const KP_F2: number;

    /**
     * @default 65427
     */
    const KP_F3: number;

    /**
     * @default 65428
     */
    const KP_F4: number;

    /**
     * @default 65429
     */
    const KP_Home: number;

    /**
     * @default 65438
     */
    const KP_Insert: number;

    /**
     * @default 65430
     */
    const KP_Left: number;

    /**
     * @default 65450
     */
    const KP_Multiply: number;

    /**
     * @default 65435
     */
    const KP_Next: number;

    /**
     * @default 65435
     */
    const KP_Page_Down: number;

    /**
     * @default 65434
     */
    const KP_Page_Up: number;

    /**
     * @default 65434
     */
    const KP_Prior: number;

    /**
     * @default 65432
     */
    const KP_Right: number;

    /**
     * @default 65452
     */
    const KP_Separator: number;

    /**
     * @default 65408
     */
    const KP_Space: number;

    /**
     * @default 65453
     */
    const KP_Subtract: number;

    /**
     * @default 65417
     */
    const KP_Tab: number;

    /**
     * @default 65431
     */
    const KP_Up: number;

    /**
     * @default 65325
     */
    const Kana_Lock: number;

    /**
     * @default 65326
     */
    const Kana_Shift: number;

    /**
     * Japanese keyboard support.
     * @default 65313
     */
    const Kanji: number;

    /**
     * @default 65335
     */
    const Kanji_Bangou: number;

    /**
     * Japanese keyboard support.
     * @default 65318
     */
    const Katakana: number;

    /**
     * @default 979
     */
    const Kcedilla: number;

    /**
     * @default 3839
     */
    const Korean_Won: number;

    /**
     * @default 76
     */
    const L: number;

    /**
     * @default 65480
     */
    const L1: number;

    /**
     * @default 65489
     */
    const L10: number;

    /**
     * @default 65481
     */
    const L2: number;

    /**
     * @default 65482
     */
    const L3: number;

    /**
     * @default 65483
     */
    const L4: number;

    /**
     * @default 65484
     */
    const L5: number;

    /**
     * @default 65485
     */
    const L6: number;

    /**
     * @default 65486
     */
    const L7: number;

    /**
     * @default 65487
     */
    const L8: number;

    /**
     * @default 65488
     */
    const L9: number;

    /**
     * @default 453
     */
    const Lacute: number;

    /**
     * @default 65236
     */
    const Last_Virtual_Screen: number;

    /**
     * @default 16784950
     */
    const Lbelowdot: number;

    /**
     * @default 421
     */
    const Lcaron: number;

    /**
     * @default 934
     */
    const Lcedilla: number;

    /**
     * @default 65361
     */
    const Left: number;

    /**
     * @default 65290
     */
    const Linefeed: number;

    /**
     * @default 16785572
     */
    const LiraSign: number;

    /**
     * @default 419
     */
    const Lstroke: number;

    /**
     * @default 77
     */
    const M: number;

    /**
     * IBus major version.
     * @default 1
     */
    const MAJOR_VERSION: number;

    /**
     * @default 255
     */
    const MAX_COMPOSE_LEN: number;

    /**
     * IBus micro version.
     * @default 35
     */
    const MICRO_VERSION: number;

    /**
     * IBus minor version.
     * @default 5
     */
    const MINOR_VERSION: number;

    /**
     * This is a filter for shortcut keys.
     * @since 1.5.32
     * @default 1124073709
     */
    const MODIFIER_FILTER: number;

    /**
     * @default 16784960
     */
    const Mabovedot: number;

    /**
     * @default 1717
     */
    const Macedonia_DSE: number;

    /**
     * @default 1714
     */
    const Macedonia_GJE: number;

    /**
     * @default 1724
     */
    const Macedonia_KJE: number;

    /**
     * @default 1701
     */
    const Macedonia_dse: number;

    /**
     * @default 1698
     */
    const Macedonia_gje: number;

    /**
     * @default 1708
     */
    const Macedonia_kje: number;

    /**
     * @default 65342
     */
    const Mae_Koho: number;

    /**
     * @default 65324
     */
    const Massyo: number;

    /**
     * @default 65383
     */
    const Menu: number;

    /**
     * @default 65511
     */
    const Meta_L: number;

    /**
     * @default 65512
     */
    const Meta_R: number;

    /**
     * @default 16785573
     */
    const MillSign: number;

    /**
     * @default 65406
     */
    const Mode_switch: number;

    /**
     * @default 65143
     */
    const MouseKeys_Accel_Enable: number;

    /**
     * @default 65142
     */
    const MouseKeys_Enable: number;

    /**
     * Japanese keyboard support.
     * @default 65314
     */
    const Muhenkan: number;

    /**
     * Key for composing characters.
     * A.k.a. Compose Key.
     * @default 65312
     */
    const Multi_key: number;

    /**
     * @default 65341
     */
    const MultipleCandidate: number;

    /**
     * @default 78
     */
    const N: number;

    /**
     * @default 465
     */
    const Nacute: number;

    /**
     * @default 16785574
     */
    const NairaSign: number;

    /**
     * @default 466
     */
    const Ncaron: number;

    /**
     * @default 977
     */
    const Ncedilla: number;

    /**
     * @default 16785578
     */
    const NewSheqelSign: number;

    /**
     * @default 65366
     */
    const Next: number;

    /**
     * @default 65234
     */
    const Next_Virtual_Screen: number;

    /**
     * @default 209
     */
    const Ntilde: number;

    /**
     * @default 65407
     */
    const Num_Lock: number;

    /**
     * @default 79
     */
    const O: number;

    /**
     * @default 5052
     */
    const OE: number;

    /**
     * @default 211
     */
    const Oacute: number;

    /**
     * @default 16777631
     */
    const Obarred: number;

    /**
     * @default 16785100
     */
    const Obelowdot: number;

    /**
     * @default 16777681
     */
    const Ocaron: number;

    /**
     * @default 212
     */
    const Ocircumflex: number;

    /**
     * @default 16785104
     */
    const Ocircumflexacute: number;

    /**
     * @default 16785112
     */
    const Ocircumflexbelowdot: number;

    /**
     * @default 16785106
     */
    const Ocircumflexgrave: number;

    /**
     * @default 16785108
     */
    const Ocircumflexhook: number;

    /**
     * @default 16785110
     */
    const Ocircumflextilde: number;

    /**
     * @default 214
     */
    const Odiaeresis: number;

    /**
     * @default 469
     */
    const Odoubleacute: number;

    /**
     * @default 210
     */
    const Ograve: number;

    /**
     * @default 16785102
     */
    const Ohook: number;

    /**
     * @default 16777632
     */
    const Ohorn: number;

    /**
     * @default 16785114
     */
    const Ohornacute: number;

    /**
     * @default 16785122
     */
    const Ohornbelowdot: number;

    /**
     * @default 16785116
     */
    const Ohorngrave: number;

    /**
     * @default 16785118
     */
    const Ohornhook: number;

    /**
     * @default 16785120
     */
    const Ohorntilde: number;

    /**
     * @default 978
     */
    const Omacron: number;

    /**
     * @default 216
     */
    const Ooblique: number;

    /**
     * @default 216
     */
    const Oslash: number;

    /**
     * @default 213
     */
    const Otilde: number;

    /**
     * @default 65144
     */
    const Overlay1_Enable: number;

    /**
     * @default 65145
     */
    const Overlay2_Enable: number;

    /**
     * @default 80
     */
    const P: number;

    /**
     * D-Bus path for IBus config.
     * @default /org/freedesktop/IBus/Config
     */
    const PATH_CONFIG: string;

    /**
     * D-Bus path for IBus factory.
     * @default /org/freedesktop/IBus/Factory
     */
    const PATH_FACTORY: string;

    /**
     * D-Bus path for IBus
     * @default /org/freedesktop/IBus
     */
    const PATH_IBUS: string;

    /**
     * Template of D-Bus path for IBus input context.
     * @default /org/freedesktop/IBus/InputContext_%d
     */
    const PATH_INPUT_CONTEXT: string;

    /**
     * D-Bus path for IBus notifications.
     * @default /org/freedesktop/IBus/Notifications
     */
    const PATH_NOTIFICATIONS: string;

    /**
     * D-Bus path for IBus panel.
     * @default /org/freedesktop/IBus/Panel
     */
    const PATH_PANEL: string;

    /**
     * D-Bus path for IBus extension panel for emoji.
     * This service provides emoji, Unicode code point, Unicode name features.
     * @default /org/freedesktop/IBus/Panel/Extension/Emoji
     */
    const PATH_PANEL_EXTENSION_EMOJI: string;

    /**
     * @default 16784982
     */
    const Pabovedot: number;

    /**
     * @default 65366
     */
    const Page_Down: number;

    /**
     * @default 65365
     */
    const Page_Up: number;

    /**
     * @default 65299
     */
    const Pause: number;

    /**
     * @default 16785575
     */
    const PesetaSign: number;

    /**
     * @default 65274
     */
    const Pointer_Accelerate: number;

    /**
     * @default 65257
     */
    const Pointer_Button1: number;

    /**
     * @default 65258
     */
    const Pointer_Button2: number;

    /**
     * @default 65259
     */
    const Pointer_Button3: number;

    /**
     * @default 65260
     */
    const Pointer_Button4: number;

    /**
     * @default 65261
     */
    const Pointer_Button5: number;

    /**
     * @default 65256
     */
    const Pointer_Button_Dflt: number;

    /**
     * @default 65263
     */
    const Pointer_DblClick1: number;

    /**
     * @default 65264
     */
    const Pointer_DblClick2: number;

    /**
     * @default 65265
     */
    const Pointer_DblClick3: number;

    /**
     * @default 65266
     */
    const Pointer_DblClick4: number;

    /**
     * @default 65267
     */
    const Pointer_DblClick5: number;

    /**
     * @default 65262
     */
    const Pointer_DblClick_Dflt: number;

    /**
     * @default 65275
     */
    const Pointer_DfltBtnNext: number;

    /**
     * @default 65276
     */
    const Pointer_DfltBtnPrev: number;

    /**
     * @default 65251
     */
    const Pointer_Down: number;

    /**
     * @default 65254
     */
    const Pointer_DownLeft: number;

    /**
     * @default 65255
     */
    const Pointer_DownRight: number;

    /**
     * @default 65269
     */
    const Pointer_Drag1: number;

    /**
     * @default 65270
     */
    const Pointer_Drag2: number;

    /**
     * @default 65271
     */
    const Pointer_Drag3: number;

    /**
     * @default 65272
     */
    const Pointer_Drag4: number;

    /**
     * @default 65277
     */
    const Pointer_Drag5: number;

    /**
     * @default 65268
     */
    const Pointer_Drag_Dflt: number;

    /**
     * @default 65273
     */
    const Pointer_EnableKeys: number;

    /**
     * @default 65248
     */
    const Pointer_Left: number;

    /**
     * @default 65249
     */
    const Pointer_Right: number;

    /**
     * @default 65250
     */
    const Pointer_Up: number;

    /**
     * @default 65252
     */
    const Pointer_UpLeft: number;

    /**
     * @default 65253
     */
    const Pointer_UpRight: number;

    /**
     * @default 65233
     */
    const Prev_Virtual_Screen: number;

    /**
     * @default 65342
     */
    const PreviousCandidate: number;

    /**
     * @default 65377
     */
    const Print: number;

    /**
     * @default 65365
     */
    const Prior: number;

    /**
     * @default 81
     */
    const Q: number;

    /**
     * @default 82
     */
    const R: number;

    /**
     * @default 65490
     */
    const R1: number;

    /**
     * @default 65499
     */
    const R10: number;

    /**
     * @default 65500
     */
    const R11: number;

    /**
     * @default 65501
     */
    const R12: number;

    /**
     * @default 65502
     */
    const R13: number;

    /**
     * @default 65503
     */
    const R14: number;

    /**
     * @default 65504
     */
    const R15: number;

    /**
     * @default 65491
     */
    const R2: number;

    /**
     * @default 65492
     */
    const R3: number;

    /**
     * @default 65493
     */
    const R4: number;

    /**
     * @default 65494
     */
    const R5: number;

    /**
     * @default 65495
     */
    const R6: number;

    /**
     * @default 65496
     */
    const R7: number;

    /**
     * @default 65497
     */
    const R8: number;

    /**
     * @default 65498
     */
    const R9: number;

    /**
     * @default 448
     */
    const Racute: number;

    /**
     * @default 472
     */
    const Rcaron: number;

    /**
     * @default 931
     */
    const Rcedilla: number;

    /**
     * @default 65382
     */
    const Redo: number;

    /**
     * @default 65138
     */
    const RepeatKeys_Enable: number;

    /**
     * @default 65293
     */
    const Return: number;

    /**
     * @default 65363
     */
    const Right: number;

    /**
     * Japanese keyboard support.
     * @default 65316
     */
    const Romaji: number;

    /**
     * @default 16785576
     */
    const RupeeSign: number;

    /**
     * @default 83
     */
    const S: number;

    /**
     * @default 16777615
     */
    const SCHWA: number;

    /**
     * Address of IBus config service.
     * @default org.freedesktop.IBus.Config
     */
    const SERVICE_CONFIG: string;

    /**
     * Address of IBus service.
     * @default org.freedesktop.IBus
     */
    const SERVICE_IBUS: string;

    /**
     * Address of IBus notification service.
     * @default org.freedesktop.IBus.Notifications
     */
    const SERVICE_NOTIFICATIONS: string;

    /**
     * Address of IBus panel service.
     * @default org.freedesktop.IBus.Panel
     */
    const SERVICE_PANEL: string;

    /**
     * Address of IBus panel extension service.
     * @default org.freedesktop.IBus.Panel.Extension
     */
    const SERVICE_PANEL_EXTENSION: string;

    /**
     * Address of IBus panel extension service for emoji.
     * This service provides emoji, Unicode code point, Unicode name features.
     * @default org.freedesktop.IBus.Panel.Extension.Emoji
     */
    const SERVICE_PANEL_EXTENSION_EMOJI: string;

    /**
     * Address of IBus portalservice.
     * @default org.freedesktop.portal.IBus
     */
    const SERVICE_PORTAL: string;

    /**
     * @default 16784992
     */
    const Sabovedot: number;

    /**
     * @default 422
     */
    const Sacute: number;

    /**
     * @default 425
     */
    const Scaron: number;

    /**
     * @default 426
     */
    const Scedilla: number;

    /**
     * @default 734
     */
    const Scircumflex: number;

    /**
     * @default 65300
     */
    const Scroll_Lock: number;

    /**
     * @default 65376
     */
    const Select: number;

    /**
     * @default 1713
     */
    const Serbian_DJE: number;

    /**
     * @default 1727
     */
    const Serbian_DZE: number;

    /**
     * @default 1720
     */
    const Serbian_JE: number;

    /**
     * @default 1721
     */
    const Serbian_LJE: number;

    /**
     * @default 1722
     */
    const Serbian_NJE: number;

    /**
     * @default 1723
     */
    const Serbian_TSHE: number;

    /**
     * @default 1697
     */
    const Serbian_dje: number;

    /**
     * @default 1711
     */
    const Serbian_dze: number;

    /**
     * @default 1704
     */
    const Serbian_je: number;

    /**
     * @default 1705
     */
    const Serbian_lje: number;

    /**
     * @default 1706
     */
    const Serbian_nje: number;

    /**
     * @default 1707
     */
    const Serbian_tshe: number;

    /**
     * @default 65505
     */
    const Shift_L: number;

    /**
     * @default 65510
     */
    const Shift_Lock: number;

    /**
     * @default 65506
     */
    const Shift_R: number;

    /**
     * @default 65340
     */
    const SingleCandidate: number;

    /**
     * @default 65139
     */
    const SlowKeys_Enable: number;

    /**
     * @default 65141
     */
    const StickyKeys_Enable: number;

    /**
     * @default 65515
     */
    const Super_L: number;

    /**
     * @default 65516
     */
    const Super_R: number;

    /**
     * @default 65301
     */
    const Sys_Req: number;

    /**
     * @default 84
     */
    const T: number;

    /**
     * @default 222
     */
    const THORN: number;

    /**
     * @default 65289
     */
    const Tab: number;

    /**
     * @default 16785002
     */
    const Tabovedot: number;

    /**
     * @default 427
     */
    const Tcaron: number;

    /**
     * @default 478
     */
    const Tcedilla: number;

    /**
     * @default 65237
     */
    const Terminate_Server: number;

    /**
     * @default 3551
     */
    const Thai_baht: number;

    /**
     * @default 3514
     */
    const Thai_bobaimai: number;

    /**
     * @default 3496
     */
    const Thai_chochan: number;

    /**
     * @default 3498
     */
    const Thai_chochang: number;

    /**
     * @default 3497
     */
    const Thai_choching: number;

    /**
     * @default 3500
     */
    const Thai_chochoe: number;

    /**
     * @default 3502
     */
    const Thai_dochada: number;

    /**
     * @default 3508
     */
    const Thai_dodek: number;

    /**
     * @default 3517
     */
    const Thai_fofa: number;

    /**
     * @default 3519
     */
    const Thai_fofan: number;

    /**
     * @default 3531
     */
    const Thai_hohip: number;

    /**
     * @default 3534
     */
    const Thai_honokhuk: number;

    /**
     * @default 3490
     */
    const Thai_khokhai: number;

    /**
     * @default 3493
     */
    const Thai_khokhon: number;

    /**
     * @default 3491
     */
    const Thai_khokhuat: number;

    /**
     * @default 3492
     */
    const Thai_khokhwai: number;

    /**
     * @default 3494
     */
    const Thai_khorakhang: number;

    /**
     * @default 3489
     */
    const Thai_kokai: number;

    /**
     * @default 3557
     */
    const Thai_lakkhangyao: number;

    /**
     * @default 3575
     */
    const Thai_lekchet: number;

    /**
     * @default 3573
     */
    const Thai_lekha: number;

    /**
     * @default 3574
     */
    const Thai_lekhok: number;

    /**
     * @default 3577
     */
    const Thai_lekkao: number;

    /**
     * @default 3569
     */
    const Thai_leknung: number;

    /**
     * @default 3576
     */
    const Thai_lekpaet: number;

    /**
     * @default 3571
     */
    const Thai_leksam: number;

    /**
     * @default 3572
     */
    const Thai_leksi: number;

    /**
     * @default 3570
     */
    const Thai_leksong: number;

    /**
     * @default 3568
     */
    const Thai_leksun: number;

    /**
     * @default 3532
     */
    const Thai_lochula: number;

    /**
     * @default 3525
     */
    const Thai_loling: number;

    /**
     * @default 3526
     */
    const Thai_lu: number;

    /**
     * @default 3563
     */
    const Thai_maichattawa: number;

    /**
     * @default 3560
     */
    const Thai_maiek: number;

    /**
     * @default 3537
     */
    const Thai_maihanakat: number;

    /**
     * @default 3550
     */
    const Thai_maihanakat_maitho: number;

    /**
     * @default 3559
     */
    const Thai_maitaikhu: number;

    /**
     * @default 3561
     */
    const Thai_maitho: number;

    /**
     * @default 3562
     */
    const Thai_maitri: number;

    /**
     * @default 3558
     */
    const Thai_maiyamok: number;

    /**
     * @default 3521
     */
    const Thai_moma: number;

    /**
     * @default 3495
     */
    const Thai_ngongu: number;

    /**
     * @default 3565
     */
    const Thai_nikhahit: number;

    /**
     * @default 3507
     */
    const Thai_nonen: number;

    /**
     * @default 3513
     */
    const Thai_nonu: number;

    /**
     * @default 3533
     */
    const Thai_oang: number;

    /**
     * @default 3535
     */
    const Thai_paiyannoi: number;

    /**
     * @default 3546
     */
    const Thai_phinthu: number;

    /**
     * @default 3518
     */
    const Thai_phophan: number;

    /**
     * @default 3516
     */
    const Thai_phophung: number;

    /**
     * @default 3520
     */
    const Thai_phosamphao: number;

    /**
     * @default 3515
     */
    const Thai_popla: number;

    /**
     * @default 3523
     */
    const Thai_rorua: number;

    /**
     * @default 3524
     */
    const Thai_ru: number;

    /**
     * @default 3536
     */
    const Thai_saraa: number;

    /**
     * @default 3538
     */
    const Thai_saraaa: number;

    /**
     * @default 3553
     */
    const Thai_saraae: number;

    /**
     * @default 3556
     */
    const Thai_saraaimaimalai: number;

    /**
     * @default 3555
     */
    const Thai_saraaimaimuan: number;

    /**
     * @default 3539
     */
    const Thai_saraam: number;

    /**
     * @default 3552
     */
    const Thai_sarae: number;

    /**
     * @default 3540
     */
    const Thai_sarai: number;

    /**
     * @default 3541
     */
    const Thai_saraii: number;

    /**
     * @default 3554
     */
    const Thai_sarao: number;

    /**
     * @default 3544
     */
    const Thai_sarau: number;

    /**
     * @default 3542
     */
    const Thai_saraue: number;

    /**
     * @default 3543
     */
    const Thai_sarauee: number;

    /**
     * @default 3545
     */
    const Thai_sarauu: number;

    /**
     * @default 3529
     */
    const Thai_sorusi: number;

    /**
     * @default 3528
     */
    const Thai_sosala: number;

    /**
     * @default 3499
     */
    const Thai_soso: number;

    /**
     * @default 3530
     */
    const Thai_sosua: number;

    /**
     * @default 3564
     */
    const Thai_thanthakhat: number;

    /**
     * @default 3505
     */
    const Thai_thonangmontho: number;

    /**
     * @default 3506
     */
    const Thai_thophuthao: number;

    /**
     * @default 3511
     */
    const Thai_thothahan: number;

    /**
     * @default 3504
     */
    const Thai_thothan: number;

    /**
     * @default 3512
     */
    const Thai_thothong: number;

    /**
     * @default 3510
     */
    const Thai_thothung: number;

    /**
     * @default 3503
     */
    const Thai_topatak: number;

    /**
     * @default 3509
     */
    const Thai_totao: number;

    /**
     * @default 3527
     */
    const Thai_wowaen: number;

    /**
     * @default 3522
     */
    const Thai_yoyak: number;

    /**
     * @default 3501
     */
    const Thai_yoying: number;

    /**
     * @default 222
     */
    const Thorn: number;

    /**
     * @default 65323
     */
    const Touroku: number;

    /**
     * @default 940
     */
    const Tslash: number;

    /**
     * @default 85
     */
    const U: number;

    /**
     * @default 218
     */
    const Uacute: number;

    /**
     * @default 16785124
     */
    const Ubelowdot: number;

    /**
     * @default 733
     */
    const Ubreve: number;

    /**
     * @default 219
     */
    const Ucircumflex: number;

    /**
     * @default 220
     */
    const Udiaeresis: number;

    /**
     * @default 475
     */
    const Udoubleacute: number;

    /**
     * @default 217
     */
    const Ugrave: number;

    /**
     * @default 16785126
     */
    const Uhook: number;

    /**
     * @default 16777647
     */
    const Uhorn: number;

    /**
     * @default 16785128
     */
    const Uhornacute: number;

    /**
     * @default 16785136
     */
    const Uhornbelowdot: number;

    /**
     * @default 16785130
     */
    const Uhorngrave: number;

    /**
     * @default 16785132
     */
    const Uhornhook: number;

    /**
     * @default 16785134
     */
    const Uhorntilde: number;

    /**
     * @default 1725
     */
    const Ukrainian_GHE_WITH_UPTURN: number;

    /**
     * @default 1718
     */
    const Ukrainian_I: number;

    /**
     * @default 1716
     */
    const Ukrainian_IE: number;

    /**
     * @default 1719
     */
    const Ukrainian_YI: number;

    /**
     * @default 1709
     */
    const Ukrainian_ghe_with_upturn: number;

    /**
     * @default 1702
     */
    const Ukrainian_i: number;

    /**
     * @default 1700
     */
    const Ukrainian_ie: number;

    /**
     * @default 1703
     */
    const Ukrainian_yi: number;

    /**
     * @default 1718
     */
    const Ukranian_I: number;

    /**
     * @default 1716
     */
    const Ukranian_JE: number;

    /**
     * @default 1719
     */
    const Ukranian_YI: number;

    /**
     * @default 1702
     */
    const Ukranian_i: number;

    /**
     * @default 1700
     */
    const Ukranian_je: number;

    /**
     * @default 1703
     */
    const Ukranian_yi: number;

    /**
     * @default 990
     */
    const Umacron: number;

    /**
     * @default 65381
     */
    const Undo: number;

    /**
     * @default 985
     */
    const Uogonek: number;

    /**
     * @default 65362
     */
    const Up: number;

    /**
     * @default 473
     */
    const Uring: number;

    /**
     * @default 989
     */
    const Utilde: number;

    /**
     * @default 86
     */
    const V: number;

    /**
     * @default 1
     */
    const VERSION_MIN_REQUIRED: number;

    /**
     * @default 16777215
     */
    const VoidSymbol: number;

    /**
     * @default 87
     */
    const W: number;

    /**
     * @default 16785026
     */
    const Wacute: number;

    /**
     * @default 16777588
     */
    const Wcircumflex: number;

    /**
     * @default 16785028
     */
    const Wdiaeresis: number;

    /**
     * @default 16785024
     */
    const Wgrave: number;

    /**
     * @default 16785577
     */
    const WonSign: number;

    /**
     * @default 88
     */
    const X: number;

    /**
     * @default 16785034
     */
    const Xabovedot: number;

    /**
     * @default 89
     */
    const Y: number;

    /**
     * @default 221
     */
    const Yacute: number;

    /**
     * @default 16785140
     */
    const Ybelowdot: number;

    /**
     * @default 16777590
     */
    const Ycircumflex: number;

    /**
     * @default 5054
     */
    const Ydiaeresis: number;

    /**
     * @default 16785138
     */
    const Ygrave: number;

    /**
     * @default 16785142
     */
    const Yhook: number;

    /**
     * @default 16785144
     */
    const Ytilde: number;

    /**
     * @default 90
     */
    const Z: number;

    /**
     * @default 431
     */
    const Zabovedot: number;

    /**
     * @default 428
     */
    const Zacute: number;

    /**
     * @default 430
     */
    const Zcaron: number;

    /**
     * @default 65341
     */
    const Zen_Koho: number;

    /**
     * @default 65320
     */
    const Zenkaku: number;

    /**
     * @default 65322
     */
    const Zenkaku_Hankaku: number;

    /**
     * @default 16777653
     */
    const Zstroke: number;

    /**
     * @default 97
     */
    const a: number;

    /**
     * @default 225
     */
    const aacute: number;

    /**
     * @default 16785057
     */
    const abelowdot: number;

    /**
     * @default 511
     */
    const abovedot: number;

    /**
     * @default 483
     */
    const abreve: number;

    /**
     * @default 16785071
     */
    const abreveacute: number;

    /**
     * @default 16785079
     */
    const abrevebelowdot: number;

    /**
     * @default 16785073
     */
    const abrevegrave: number;

    /**
     * @default 16785075
     */
    const abrevehook: number;

    /**
     * @default 16785077
     */
    const abrevetilde: number;

    /**
     * @default 226
     */
    const acircumflex: number;

    /**
     * @default 16785061
     */
    const acircumflexacute: number;

    /**
     * @default 16785069
     */
    const acircumflexbelowdot: number;

    /**
     * @default 16785063
     */
    const acircumflexgrave: number;

    /**
     * @default 16785065
     */
    const acircumflexhook: number;

    /**
     * @default 16785067
     */
    const acircumflextilde: number;

    /**
     * @default 180
     */
    const acute: number;

    /**
     * @default 228
     */
    const adiaeresis: number;

    /**
     * @default 230
     */
    const ae: number;

    /**
     * @default 224
     */
    const agrave: number;

    /**
     * @default 16785059
     */
    const ahook: number;

    /**
     * @default 992
     */
    const amacron: number;

    /**
     * @default 38
     */
    const ampersand: number;

    /**
     * @default 433
     */
    const aogonek: number;

    /**
     * @default 39
     */
    const apostrophe: number;

    /**
     * @default 16785992
     */
    const approxeq: number;

    /**
     * @default 2248
     */
    const approximate: number;

    /**
     * @default 229
     */
    const aring: number;

    /**
     * @default 94
     */
    const asciicircum: number;

    /**
     * @default 126
     */
    const asciitilde: number;

    /**
     * @default 42
     */
    const asterisk: number;

    /**
     * @default 64
     */
    const at: number;

    /**
     * @default 227
     */
    const atilde: number;

    /**
     * @default 98
     */
    const b: number;

    /**
     * @default 16784899
     */
    const babovedot: number;

    /**
     * @default 92
     */
    const backslash: number;

    /**
     * @default 2804
     */
    const ballotcross: number;

    /**
     * @default 124
     */
    const bar: number;

    /**
     * @default 16785973
     */
    const because: number;

    /**
     * @default 2527
     */
    const blank: number;

    /**
     * @default 2213
     */
    const botintegral: number;

    /**
     * @default 2220
     */
    const botleftparens: number;

    /**
     * @default 2216
     */
    const botleftsqbracket: number;

    /**
     * @default 2226
     */
    const botleftsummation: number;

    /**
     * @default 2222
     */
    const botrightparens: number;

    /**
     * @default 2218
     */
    const botrightsqbracket: number;

    /**
     * @default 2230
     */
    const botrightsummation: number;

    /**
     * @default 2550
     */
    const bott: number;

    /**
     * @default 2228
     */
    const botvertsummationconnector: number;

    /**
     * @default 123
     */
    const braceleft: number;

    /**
     * @default 125
     */
    const braceright: number;

    /**
     * @default 91
     */
    const bracketleft: number;

    /**
     * @default 93
     */
    const bracketright: number;

    /**
     * @default 16787456
     */
    const braille_blank: number;

    /**
     * @default 65521
     */
    const braille_dot_1: number;

    /**
     * @default 65530
     */
    const braille_dot_10: number;

    /**
     * @default 65522
     */
    const braille_dot_2: number;

    /**
     * @default 65523
     */
    const braille_dot_3: number;

    /**
     * @default 65524
     */
    const braille_dot_4: number;

    /**
     * @default 65525
     */
    const braille_dot_5: number;

    /**
     * @default 65526
     */
    const braille_dot_6: number;

    /**
     * @default 65527
     */
    const braille_dot_7: number;

    /**
     * @default 65528
     */
    const braille_dot_8: number;

    /**
     * @default 65529
     */
    const braille_dot_9: number;

    /**
     * @default 16787457
     */
    const braille_dots_1: number;

    /**
     * @default 16787459
     */
    const braille_dots_12: number;

    /**
     * @default 16787463
     */
    const braille_dots_123: number;

    /**
     * @default 16787471
     */
    const braille_dots_1234: number;

    /**
     * @default 16787487
     */
    const braille_dots_12345: number;

    /**
     * @default 16787519
     */
    const braille_dots_123456: number;

    /**
     * @default 16787583
     */
    const braille_dots_1234567: number;

    /**
     * @default 16787711
     */
    const braille_dots_12345678: number;

    /**
     * @default 16787647
     */
    const braille_dots_1234568: number;

    /**
     * @default 16787551
     */
    const braille_dots_123457: number;

    /**
     * @default 16787679
     */
    const braille_dots_1234578: number;

    /**
     * @default 16787615
     */
    const braille_dots_123458: number;

    /**
     * @default 16787503
     */
    const braille_dots_12346: number;

    /**
     * @default 16787567
     */
    const braille_dots_123467: number;

    /**
     * @default 16787695
     */
    const braille_dots_1234678: number;

    /**
     * @default 16787631
     */
    const braille_dots_123468: number;

    /**
     * @default 16787535
     */
    const braille_dots_12347: number;

    /**
     * @default 16787663
     */
    const braille_dots_123478: number;

    /**
     * @default 16787599
     */
    const braille_dots_12348: number;

    /**
     * @default 16787479
     */
    const braille_dots_1235: number;

    /**
     * @default 16787511
     */
    const braille_dots_12356: number;

    /**
     * @default 16787575
     */
    const braille_dots_123567: number;

    /**
     * @default 16787703
     */
    const braille_dots_1235678: number;

    /**
     * @default 16787639
     */
    const braille_dots_123568: number;

    /**
     * @default 16787543
     */
    const braille_dots_12357: number;

    /**
     * @default 16787671
     */
    const braille_dots_123578: number;

    /**
     * @default 16787607
     */
    const braille_dots_12358: number;

    /**
     * @default 16787495
     */
    const braille_dots_1236: number;

    /**
     * @default 16787559
     */
    const braille_dots_12367: number;

    /**
     * @default 16787687
     */
    const braille_dots_123678: number;

    /**
     * @default 16787623
     */
    const braille_dots_12368: number;

    /**
     * @default 16787527
     */
    const braille_dots_1237: number;

    /**
     * @default 16787655
     */
    const braille_dots_12378: number;

    /**
     * @default 16787591
     */
    const braille_dots_1238: number;

    /**
     * @default 16787467
     */
    const braille_dots_124: number;

    /**
     * @default 16787483
     */
    const braille_dots_1245: number;

    /**
     * @default 16787515
     */
    const braille_dots_12456: number;

    /**
     * @default 16787579
     */
    const braille_dots_124567: number;

    /**
     * @default 16787707
     */
    const braille_dots_1245678: number;

    /**
     * @default 16787643
     */
    const braille_dots_124568: number;

    /**
     * @default 16787547
     */
    const braille_dots_12457: number;

    /**
     * @default 16787675
     */
    const braille_dots_124578: number;

    /**
     * @default 16787611
     */
    const braille_dots_12458: number;

    /**
     * @default 16787499
     */
    const braille_dots_1246: number;

    /**
     * @default 16787563
     */
    const braille_dots_12467: number;

    /**
     * @default 16787691
     */
    const braille_dots_124678: number;

    /**
     * @default 16787627
     */
    const braille_dots_12468: number;

    /**
     * @default 16787531
     */
    const braille_dots_1247: number;

    /**
     * @default 16787659
     */
    const braille_dots_12478: number;

    /**
     * @default 16787595
     */
    const braille_dots_1248: number;

    /**
     * @default 16787475
     */
    const braille_dots_125: number;

    /**
     * @default 16787507
     */
    const braille_dots_1256: number;

    /**
     * @default 16787571
     */
    const braille_dots_12567: number;

    /**
     * @default 16787699
     */
    const braille_dots_125678: number;

    /**
     * @default 16787635
     */
    const braille_dots_12568: number;

    /**
     * @default 16787539
     */
    const braille_dots_1257: number;

    /**
     * @default 16787667
     */
    const braille_dots_12578: number;

    /**
     * @default 16787603
     */
    const braille_dots_1258: number;

    /**
     * @default 16787491
     */
    const braille_dots_126: number;

    /**
     * @default 16787555
     */
    const braille_dots_1267: number;

    /**
     * @default 16787683
     */
    const braille_dots_12678: number;

    /**
     * @default 16787619
     */
    const braille_dots_1268: number;

    /**
     * @default 16787523
     */
    const braille_dots_127: number;

    /**
     * @default 16787651
     */
    const braille_dots_1278: number;

    /**
     * @default 16787587
     */
    const braille_dots_128: number;

    /**
     * @default 16787461
     */
    const braille_dots_13: number;

    /**
     * @default 16787469
     */
    const braille_dots_134: number;

    /**
     * @default 16787485
     */
    const braille_dots_1345: number;

    /**
     * @default 16787517
     */
    const braille_dots_13456: number;

    /**
     * @default 16787581
     */
    const braille_dots_134567: number;

    /**
     * @default 16787709
     */
    const braille_dots_1345678: number;

    /**
     * @default 16787645
     */
    const braille_dots_134568: number;

    /**
     * @default 16787549
     */
    const braille_dots_13457: number;

    /**
     * @default 16787677
     */
    const braille_dots_134578: number;

    /**
     * @default 16787613
     */
    const braille_dots_13458: number;

    /**
     * @default 16787501
     */
    const braille_dots_1346: number;

    /**
     * @default 16787565
     */
    const braille_dots_13467: number;

    /**
     * @default 16787693
     */
    const braille_dots_134678: number;

    /**
     * @default 16787629
     */
    const braille_dots_13468: number;

    /**
     * @default 16787533
     */
    const braille_dots_1347: number;

    /**
     * @default 16787661
     */
    const braille_dots_13478: number;

    /**
     * @default 16787597
     */
    const braille_dots_1348: number;

    /**
     * @default 16787477
     */
    const braille_dots_135: number;

    /**
     * @default 16787509
     */
    const braille_dots_1356: number;

    /**
     * @default 16787573
     */
    const braille_dots_13567: number;

    /**
     * @default 16787701
     */
    const braille_dots_135678: number;

    /**
     * @default 16787637
     */
    const braille_dots_13568: number;

    /**
     * @default 16787541
     */
    const braille_dots_1357: number;

    /**
     * @default 16787669
     */
    const braille_dots_13578: number;

    /**
     * @default 16787605
     */
    const braille_dots_1358: number;

    /**
     * @default 16787493
     */
    const braille_dots_136: number;

    /**
     * @default 16787557
     */
    const braille_dots_1367: number;

    /**
     * @default 16787685
     */
    const braille_dots_13678: number;

    /**
     * @default 16787621
     */
    const braille_dots_1368: number;

    /**
     * @default 16787525
     */
    const braille_dots_137: number;

    /**
     * @default 16787653
     */
    const braille_dots_1378: number;

    /**
     * @default 16787589
     */
    const braille_dots_138: number;

    /**
     * @default 16787465
     */
    const braille_dots_14: number;

    /**
     * @default 16787481
     */
    const braille_dots_145: number;

    /**
     * @default 16787513
     */
    const braille_dots_1456: number;

    /**
     * @default 16787577
     */
    const braille_dots_14567: number;

    /**
     * @default 16787705
     */
    const braille_dots_145678: number;

    /**
     * @default 16787641
     */
    const braille_dots_14568: number;

    /**
     * @default 16787545
     */
    const braille_dots_1457: number;

    /**
     * @default 16787673
     */
    const braille_dots_14578: number;

    /**
     * @default 16787609
     */
    const braille_dots_1458: number;

    /**
     * @default 16787497
     */
    const braille_dots_146: number;

    /**
     * @default 16787561
     */
    const braille_dots_1467: number;

    /**
     * @default 16787689
     */
    const braille_dots_14678: number;

    /**
     * @default 16787625
     */
    const braille_dots_1468: number;

    /**
     * @default 16787529
     */
    const braille_dots_147: number;

    /**
     * @default 16787657
     */
    const braille_dots_1478: number;

    /**
     * @default 16787593
     */
    const braille_dots_148: number;

    /**
     * @default 16787473
     */
    const braille_dots_15: number;

    /**
     * @default 16787505
     */
    const braille_dots_156: number;

    /**
     * @default 16787569
     */
    const braille_dots_1567: number;

    /**
     * @default 16787697
     */
    const braille_dots_15678: number;

    /**
     * @default 16787633
     */
    const braille_dots_1568: number;

    /**
     * @default 16787537
     */
    const braille_dots_157: number;

    /**
     * @default 16787665
     */
    const braille_dots_1578: number;

    /**
     * @default 16787601
     */
    const braille_dots_158: number;

    /**
     * @default 16787489
     */
    const braille_dots_16: number;

    /**
     * @default 16787553
     */
    const braille_dots_167: number;

    /**
     * @default 16787681
     */
    const braille_dots_1678: number;

    /**
     * @default 16787617
     */
    const braille_dots_168: number;

    /**
     * @default 16787521
     */
    const braille_dots_17: number;

    /**
     * @default 16787649
     */
    const braille_dots_178: number;

    /**
     * @default 16787585
     */
    const braille_dots_18: number;

    /**
     * @default 16787458
     */
    const braille_dots_2: number;

    /**
     * @default 16787462
     */
    const braille_dots_23: number;

    /**
     * @default 16787470
     */
    const braille_dots_234: number;

    /**
     * @default 16787486
     */
    const braille_dots_2345: number;

    /**
     * @default 16787518
     */
    const braille_dots_23456: number;

    /**
     * @default 16787582
     */
    const braille_dots_234567: number;

    /**
     * @default 16787710
     */
    const braille_dots_2345678: number;

    /**
     * @default 16787646
     */
    const braille_dots_234568: number;

    /**
     * @default 16787550
     */
    const braille_dots_23457: number;

    /**
     * @default 16787678
     */
    const braille_dots_234578: number;

    /**
     * @default 16787614
     */
    const braille_dots_23458: number;

    /**
     * @default 16787502
     */
    const braille_dots_2346: number;

    /**
     * @default 16787566
     */
    const braille_dots_23467: number;

    /**
     * @default 16787694
     */
    const braille_dots_234678: number;

    /**
     * @default 16787630
     */
    const braille_dots_23468: number;

    /**
     * @default 16787534
     */
    const braille_dots_2347: number;

    /**
     * @default 16787662
     */
    const braille_dots_23478: number;

    /**
     * @default 16787598
     */
    const braille_dots_2348: number;

    /**
     * @default 16787478
     */
    const braille_dots_235: number;

    /**
     * @default 16787510
     */
    const braille_dots_2356: number;

    /**
     * @default 16787574
     */
    const braille_dots_23567: number;

    /**
     * @default 16787702
     */
    const braille_dots_235678: number;

    /**
     * @default 16787638
     */
    const braille_dots_23568: number;

    /**
     * @default 16787542
     */
    const braille_dots_2357: number;

    /**
     * @default 16787670
     */
    const braille_dots_23578: number;

    /**
     * @default 16787606
     */
    const braille_dots_2358: number;

    /**
     * @default 16787494
     */
    const braille_dots_236: number;

    /**
     * @default 16787558
     */
    const braille_dots_2367: number;

    /**
     * @default 16787686
     */
    const braille_dots_23678: number;

    /**
     * @default 16787622
     */
    const braille_dots_2368: number;

    /**
     * @default 16787526
     */
    const braille_dots_237: number;

    /**
     * @default 16787654
     */
    const braille_dots_2378: number;

    /**
     * @default 16787590
     */
    const braille_dots_238: number;

    /**
     * @default 16787466
     */
    const braille_dots_24: number;

    /**
     * @default 16787482
     */
    const braille_dots_245: number;

    /**
     * @default 16787514
     */
    const braille_dots_2456: number;

    /**
     * @default 16787578
     */
    const braille_dots_24567: number;

    /**
     * @default 16787706
     */
    const braille_dots_245678: number;

    /**
     * @default 16787642
     */
    const braille_dots_24568: number;

    /**
     * @default 16787546
     */
    const braille_dots_2457: number;

    /**
     * @default 16787674
     */
    const braille_dots_24578: number;

    /**
     * @default 16787610
     */
    const braille_dots_2458: number;

    /**
     * @default 16787498
     */
    const braille_dots_246: number;

    /**
     * @default 16787562
     */
    const braille_dots_2467: number;

    /**
     * @default 16787690
     */
    const braille_dots_24678: number;

    /**
     * @default 16787626
     */
    const braille_dots_2468: number;

    /**
     * @default 16787530
     */
    const braille_dots_247: number;

    /**
     * @default 16787658
     */
    const braille_dots_2478: number;

    /**
     * @default 16787594
     */
    const braille_dots_248: number;

    /**
     * @default 16787474
     */
    const braille_dots_25: number;

    /**
     * @default 16787506
     */
    const braille_dots_256: number;

    /**
     * @default 16787570
     */
    const braille_dots_2567: number;

    /**
     * @default 16787698
     */
    const braille_dots_25678: number;

    /**
     * @default 16787634
     */
    const braille_dots_2568: number;

    /**
     * @default 16787538
     */
    const braille_dots_257: number;

    /**
     * @default 16787666
     */
    const braille_dots_2578: number;

    /**
     * @default 16787602
     */
    const braille_dots_258: number;

    /**
     * @default 16787490
     */
    const braille_dots_26: number;

    /**
     * @default 16787554
     */
    const braille_dots_267: number;

    /**
     * @default 16787682
     */
    const braille_dots_2678: number;

    /**
     * @default 16787618
     */
    const braille_dots_268: number;

    /**
     * @default 16787522
     */
    const braille_dots_27: number;

    /**
     * @default 16787650
     */
    const braille_dots_278: number;

    /**
     * @default 16787586
     */
    const braille_dots_28: number;

    /**
     * @default 16787460
     */
    const braille_dots_3: number;

    /**
     * @default 16787468
     */
    const braille_dots_34: number;

    /**
     * @default 16787484
     */
    const braille_dots_345: number;

    /**
     * @default 16787516
     */
    const braille_dots_3456: number;

    /**
     * @default 16787580
     */
    const braille_dots_34567: number;

    /**
     * @default 16787708
     */
    const braille_dots_345678: number;

    /**
     * @default 16787644
     */
    const braille_dots_34568: number;

    /**
     * @default 16787548
     */
    const braille_dots_3457: number;

    /**
     * @default 16787676
     */
    const braille_dots_34578: number;

    /**
     * @default 16787612
     */
    const braille_dots_3458: number;

    /**
     * @default 16787500
     */
    const braille_dots_346: number;

    /**
     * @default 16787564
     */
    const braille_dots_3467: number;

    /**
     * @default 16787692
     */
    const braille_dots_34678: number;

    /**
     * @default 16787628
     */
    const braille_dots_3468: number;

    /**
     * @default 16787532
     */
    const braille_dots_347: number;

    /**
     * @default 16787660
     */
    const braille_dots_3478: number;

    /**
     * @default 16787596
     */
    const braille_dots_348: number;

    /**
     * @default 16787476
     */
    const braille_dots_35: number;

    /**
     * @default 16787508
     */
    const braille_dots_356: number;

    /**
     * @default 16787572
     */
    const braille_dots_3567: number;

    /**
     * @default 16787700
     */
    const braille_dots_35678: number;

    /**
     * @default 16787636
     */
    const braille_dots_3568: number;

    /**
     * @default 16787540
     */
    const braille_dots_357: number;

    /**
     * @default 16787668
     */
    const braille_dots_3578: number;

    /**
     * @default 16787604
     */
    const braille_dots_358: number;

    /**
     * @default 16787492
     */
    const braille_dots_36: number;

    /**
     * @default 16787556
     */
    const braille_dots_367: number;

    /**
     * @default 16787684
     */
    const braille_dots_3678: number;

    /**
     * @default 16787620
     */
    const braille_dots_368: number;

    /**
     * @default 16787524
     */
    const braille_dots_37: number;

    /**
     * @default 16787652
     */
    const braille_dots_378: number;

    /**
     * @default 16787588
     */
    const braille_dots_38: number;

    /**
     * @default 16787464
     */
    const braille_dots_4: number;

    /**
     * @default 16787480
     */
    const braille_dots_45: number;

    /**
     * @default 16787512
     */
    const braille_dots_456: number;

    /**
     * @default 16787576
     */
    const braille_dots_4567: number;

    /**
     * @default 16787704
     */
    const braille_dots_45678: number;

    /**
     * @default 16787640
     */
    const braille_dots_4568: number;

    /**
     * @default 16787544
     */
    const braille_dots_457: number;

    /**
     * @default 16787672
     */
    const braille_dots_4578: number;

    /**
     * @default 16787608
     */
    const braille_dots_458: number;

    /**
     * @default 16787496
     */
    const braille_dots_46: number;

    /**
     * @default 16787560
     */
    const braille_dots_467: number;

    /**
     * @default 16787688
     */
    const braille_dots_4678: number;

    /**
     * @default 16787624
     */
    const braille_dots_468: number;

    /**
     * @default 16787528
     */
    const braille_dots_47: number;

    /**
     * @default 16787656
     */
    const braille_dots_478: number;

    /**
     * @default 16787592
     */
    const braille_dots_48: number;

    /**
     * @default 16787472
     */
    const braille_dots_5: number;

    /**
     * @default 16787504
     */
    const braille_dots_56: number;

    /**
     * @default 16787568
     */
    const braille_dots_567: number;

    /**
     * @default 16787696
     */
    const braille_dots_5678: number;

    /**
     * @default 16787632
     */
    const braille_dots_568: number;

    /**
     * @default 16787536
     */
    const braille_dots_57: number;

    /**
     * @default 16787664
     */
    const braille_dots_578: number;

    /**
     * @default 16787600
     */
    const braille_dots_58: number;

    /**
     * @default 16787488
     */
    const braille_dots_6: number;

    /**
     * @default 16787552
     */
    const braille_dots_67: number;

    /**
     * @default 16787680
     */
    const braille_dots_678: number;

    /**
     * @default 16787616
     */
    const braille_dots_68: number;

    /**
     * @default 16787520
     */
    const braille_dots_7: number;

    /**
     * @default 16787648
     */
    const braille_dots_78: number;

    /**
     * @default 16787584
     */
    const braille_dots_8: number;

    /**
     * @default 418
     */
    const breve: number;

    /**
     * @default 166
     */
    const brokenbar: number;

    /**
     * @default 99
     */
    const c: number;

    /**
     * @default 741
     */
    const cabovedot: number;

    /**
     * @default 486
     */
    const cacute: number;

    /**
     * @default 2744
     */
    const careof: number;

    /**
     * @default 2812
     */
    const caret: number;

    /**
     * @default 439
     */
    const caron: number;

    /**
     * @default 488
     */
    const ccaron: number;

    /**
     * @default 231
     */
    const ccedilla: number;

    /**
     * @default 742
     */
    const ccircumflex: number;

    /**
     * @default 184
     */
    const cedilla: number;

    /**
     * @default 162
     */
    const cent: number;

    /**
     * @default 2529
     */
    const checkerboard: number;

    /**
     * @default 2803
     */
    const checkmark: number;

    /**
     * @default 3023
     */
    const circle: number;

    /**
     * @default 2796
     */
    const club: number;

    /**
     * @default 58
     */
    const colon: number;

    /**
     * @default 44
     */
    const comma: number;

    /**
     * @default 16785931
     */
    const containsas: number;

    /**
     * @default 169
     */
    const copyright: number;

    /**
     * @default 2532
     */
    const cr: number;

    /**
     * @default 2542
     */
    const crossinglines: number;

    /**
     * @default 16785947
     */
    const cuberoot: number;

    /**
     * @default 164
     */
    const currency: number;

    /**
     * @default 2815
     */
    const cursor: number;

    /**
     * @default 100
     */
    const d: number;

    /**
     * @default 16784907
     */
    const dabovedot: number;

    /**
     * @default 2801
     */
    const dagger: number;

    /**
     * @default 495
     */
    const dcaron: number;

    /**
     * @default 65124
     */
    const dead_abovecomma: number;

    /**
     * @default 65110
     */
    const dead_abovedot: number;

    /**
     * @default 65125
     */
    const dead_abovereversedcomma: number;

    /**
     * @default 65112
     */
    const dead_abovering: number;

    /**
     * @default 65105
     */
    const dead_acute: number;

    /**
     * @default 65131
     */
    const dead_belowbreve: number;

    /**
     * @default 65129
     */
    const dead_belowcircumflex: number;

    /**
     * @default 65132
     */
    const dead_belowdiaeresis: number;

    /**
     * @default 65120
     */
    const dead_belowdot: number;

    /**
     * @default 65128
     */
    const dead_belowmacron: number;

    /**
     * @default 65127
     */
    const dead_belowring: number;

    /**
     * @default 65130
     */
    const dead_belowtilde: number;

    /**
     * @default 65109
     */
    const dead_breve: number;

    /**
     * @default 65114
     */
    const dead_caron: number;

    /**
     * @default 65115
     */
    const dead_cedilla: number;

    /**
     * @default 65106
     */
    const dead_circumflex: number;

    /**
     * @default 65125
     */
    const dead_dasia: number;

    /**
     * @default 65111
     */
    const dead_diaeresis: number;

    /**
     * @default 65113
     */
    const dead_doubleacute: number;

    /**
     * @default 65104
     */
    const dead_grave: number;

    /**
     * @default 65121
     */
    const dead_hook: number;

    /**
     * @default 65122
     */
    const dead_horn: number;

    /**
     * @default 65117
     */
    const dead_iota: number;

    /**
     * @default 65108
     */
    const dead_macron: number;

    /**
     * @default 65116
     */
    const dead_ogonek: number;

    /**
     * @default 65107
     */
    const dead_perispomeni: number;

    /**
     * @default 65124
     */
    const dead_psili: number;

    /**
     * @default 65119
     */
    const dead_semivoiced_sound: number;

    /**
     * @default 65123
     */
    const dead_stroke: number;

    /**
     * @default 65107
     */
    const dead_tilde: number;

    /**
     * @default 65118
     */
    const dead_voiced_sound: number;

    /**
     * @default 2749
     */
    const decimalpoint: number;

    /**
     * @default 176
     */
    const degree: number;

    /**
     * @default 168
     */
    const diaeresis: number;

    /**
     * @default 2797
     */
    const diamond: number;

    /**
     * @default 2725
     */
    const digitspace: number;

    /**
     * @default 16785964
     */
    const dintegral: number;

    /**
     * @default 247
     */
    const division: number;

    /**
     * @default 36
     */
    const dollar: number;

    /**
     * @default 2735
     */
    const doubbaselinedot: number;

    /**
     * @default 445
     */
    const doubleacute: number;

    /**
     * @default 2802
     */
    const doubledagger: number;

    /**
     * @default 2814
     */
    const doublelowquotemark: number;

    /**
     * @default 2302
     */
    const downarrow: number;

    /**
     * @default 2984
     */
    const downcaret: number;

    /**
     * @default 3030
     */
    const downshoe: number;

    /**
     * @default 3012
     */
    const downstile: number;

    /**
     * @default 3010
     */
    const downtack: number;

    /**
     * @default 496
     */
    const dstroke: number;

    /**
     * @default 101
     */
    const e: number;

    /**
     * @default 1004
     */
    const eabovedot: number;

    /**
     * @default 233
     */
    const eacute: number;

    /**
     * @default 16785081
     */
    const ebelowdot: number;

    /**
     * @default 492
     */
    const ecaron: number;

    /**
     * @default 234
     */
    const ecircumflex: number;

    /**
     * @default 16785087
     */
    const ecircumflexacute: number;

    /**
     * @default 16785095
     */
    const ecircumflexbelowdot: number;

    /**
     * @default 16785089
     */
    const ecircumflexgrave: number;

    /**
     * @default 16785091
     */
    const ecircumflexhook: number;

    /**
     * @default 16785093
     */
    const ecircumflextilde: number;

    /**
     * @default 235
     */
    const ediaeresis: number;

    /**
     * @default 232
     */
    const egrave: number;

    /**
     * @default 16785083
     */
    const ehook: number;

    /**
     * @default 16785544
     */
    const eightsubscript: number;

    /**
     * @default 16785528
     */
    const eightsuperior: number;

    /**
     * @default 16785928
     */
    const elementof: number;

    /**
     * @default 2734
     */
    const ellipsis: number;

    /**
     * @default 2723
     */
    const em3space: number;

    /**
     * @default 2724
     */
    const em4space: number;

    /**
     * @default 954
     */
    const emacron: number;

    /**
     * @default 2729
     */
    const emdash: number;

    /**
     * @default 2782
     */
    const emfilledcircle: number;

    /**
     * @default 2783
     */
    const emfilledrect: number;

    /**
     * @default 2766
     */
    const emopencircle: number;

    /**
     * @default 2767
     */
    const emopenrectangle: number;

    /**
     * @default 16785925
     */
    const emptyset: number;

    /**
     * @default 2721
     */
    const emspace: number;

    /**
     * @default 2730
     */
    const endash: number;

    /**
     * @default 2790
     */
    const enfilledcircbullet: number;

    /**
     * @default 2791
     */
    const enfilledsqbullet: number;

    /**
     * @default 959
     */
    const eng: number;

    /**
     * @default 2784
     */
    const enopencircbullet: number;

    /**
     * @default 2785
     */
    const enopensquarebullet: number;

    /**
     * @default 2722
     */
    const enspace: number;

    /**
     * @default 490
     */
    const eogonek: number;

    /**
     * @default 61
     */
    const equal: number;

    /**
     * @default 240
     */
    const eth: number;

    /**
     * @default 16785085
     */
    const etilde: number;

    /**
     * @default 33
     */
    const exclam: number;

    /**
     * @default 161
     */
    const exclamdown: number;

    /**
     * @default 102
     */
    const f: number;

    /**
     * @default 16784927
     */
    const fabovedot: number;

    /**
     * @default 2808
     */
    const femalesymbol: number;

    /**
     * @default 2531
     */
    const ff: number;

    /**
     * @default 2747
     */
    const figdash: number;

    /**
     * @default 2780
     */
    const filledlefttribullet: number;

    /**
     * @default 2779
     */
    const filledrectbullet: number;

    /**
     * @default 2781
     */
    const filledrighttribullet: number;

    /**
     * @default 2793
     */
    const filledtribulletdown: number;

    /**
     * @default 2792
     */
    const filledtribulletup: number;

    /**
     * @default 2757
     */
    const fiveeighths: number;

    /**
     * @default 2743
     */
    const fivesixths: number;

    /**
     * @default 16785541
     */
    const fivesubscript: number;

    /**
     * @default 16785525
     */
    const fivesuperior: number;

    /**
     * @default 2741
     */
    const fourfifths: number;

    /**
     * @default 16785540
     */
    const foursubscript: number;

    /**
     * @default 16785524
     */
    const foursuperior: number;

    /**
     * @default 16785948
     */
    const fourthroot: number;

    /**
     * @default 2294
     */
    const __function: number;

    /**
     * @default 103
     */
    const g: number;

    /**
     * @default 757
     */
    const gabovedot: number;

    /**
     * @default 699
     */
    const gbreve: number;

    /**
     * @default 16777703
     */
    const gcaron: number;

    /**
     * @default 955
     */
    const gcedilla: number;

    /**
     * @default 760
     */
    const gcircumflex: number;

    /**
     * @default 96
     */
    const grave: number;

    /**
     * @default 62
     */
    const greater: number;

    /**
     * @default 2238
     */
    const greaterthanequal: number;

    /**
     * @default 171
     */
    const guillemotleft: number;

    /**
     * @default 187
     */
    const guillemotright: number;

    /**
     * @default 104
     */
    const h: number;

    /**
     * @default 2728
     */
    const hairspace: number;

    /**
     * @default 694
     */
    const hcircumflex: number;

    /**
     * @default 2798
     */
    const heart: number;

    /**
     * @default 3296
     */
    const hebrew_aleph: number;

    /**
     * @default 3314
     */
    const hebrew_ayin: number;

    /**
     * @default 3297
     */
    const hebrew_bet: number;

    /**
     * @default 3297
     */
    const hebrew_beth: number;

    /**
     * @default 3303
     */
    const hebrew_chet: number;

    /**
     * @default 3299
     */
    const hebrew_dalet: number;

    /**
     * @default 3299
     */
    const hebrew_daleth: number;

    /**
     * @default 3295
     */
    const hebrew_doublelowline: number;

    /**
     * @default 3306
     */
    const hebrew_finalkaph: number;

    /**
     * @default 3309
     */
    const hebrew_finalmem: number;

    /**
     * @default 3311
     */
    const hebrew_finalnun: number;

    /**
     * @default 3315
     */
    const hebrew_finalpe: number;

    /**
     * @default 3317
     */
    const hebrew_finalzade: number;

    /**
     * @default 3317
     */
    const hebrew_finalzadi: number;

    /**
     * @default 3298
     */
    const hebrew_gimel: number;

    /**
     * @default 3298
     */
    const hebrew_gimmel: number;

    /**
     * @default 3300
     */
    const hebrew_he: number;

    /**
     * @default 3303
     */
    const hebrew_het: number;

    /**
     * @default 3307
     */
    const hebrew_kaph: number;

    /**
     * @default 3319
     */
    const hebrew_kuf: number;

    /**
     * @default 3308
     */
    const hebrew_lamed: number;

    /**
     * @default 3310
     */
    const hebrew_mem: number;

    /**
     * @default 3312
     */
    const hebrew_nun: number;

    /**
     * @default 3316
     */
    const hebrew_pe: number;

    /**
     * @default 3319
     */
    const hebrew_qoph: number;

    /**
     * @default 3320
     */
    const hebrew_resh: number;

    /**
     * @default 3313
     */
    const hebrew_samech: number;

    /**
     * @default 3313
     */
    const hebrew_samekh: number;

    /**
     * @default 3321
     */
    const hebrew_shin: number;

    /**
     * @default 3322
     */
    const hebrew_taf: number;

    /**
     * @default 3322
     */
    const hebrew_taw: number;

    /**
     * @default 3304
     */
    const hebrew_tet: number;

    /**
     * @default 3304
     */
    const hebrew_teth: number;

    /**
     * @default 3301
     */
    const hebrew_waw: number;

    /**
     * @default 3305
     */
    const hebrew_yod: number;

    /**
     * @default 3318
     */
    const hebrew_zade: number;

    /**
     * @default 3318
     */
    const hebrew_zadi: number;

    /**
     * @default 3302
     */
    const hebrew_zain: number;

    /**
     * @default 3302
     */
    const hebrew_zayin: number;

    /**
     * @default 2778
     */
    const hexagram: number;

    /**
     * @default 2211
     */
    const horizconnector: number;

    /**
     * @default 2543
     */
    const horizlinescan1: number;

    /**
     * @default 2544
     */
    const horizlinescan3: number;

    /**
     * @default 2545
     */
    const horizlinescan5: number;

    /**
     * @default 2546
     */
    const horizlinescan7: number;

    /**
     * @default 2547
     */
    const horizlinescan9: number;

    /**
     * @default 689
     */
    const hstroke: number;

    /**
     * @default 2530
     */
    const ht: number;

    /**
     * @default 173
     */
    const hyphen: number;

    /**
     * @default 105
     */
    const i: number;

    /**
     * @default 237
     */
    const iacute: number;

    /**
     * @default 16785099
     */
    const ibelowdot: number;

    /**
     * @default 16777517
     */
    const ibreve: number;

    /**
     * @default 238
     */
    const icircumflex: number;

    /**
     * @default 2255
     */
    const identical: number;

    /**
     * @default 239
     */
    const idiaeresis: number;

    /**
     * @default 697
     */
    const idotless: number;

    /**
     * @default 2253
     */
    const ifonlyif: number;

    /**
     * @default 236
     */
    const igrave: number;

    /**
     * @default 16785097
     */
    const ihook: number;

    /**
     * @default 1007
     */
    const imacron: number;

    /**
     * @default 2254
     */
    const implies: number;

    /**
     * @default 2266
     */
    const includedin: number;

    /**
     * @default 2267
     */
    const includes: number;

    /**
     * @default 2242
     */
    const infinity: number;

    /**
     * @default 2239
     */
    const integral: number;

    /**
     * @default 2268
     */
    const intersection: number;

    /**
     * @default 999
     */
    const iogonek: number;

    /**
     * @default 949
     */
    const itilde: number;

    /**
     * @default 106
     */
    const j: number;

    /**
     * @default 700
     */
    const jcircumflex: number;

    /**
     * @default 3018
     */
    const jot: number;

    /**
     * @default 107
     */
    const k: number;

    /**
     * @default 1201
     */
    const kana_A: number;

    /**
     * @default 1217
     */
    const kana_CHI: number;

    /**
     * @default 1204
     */
    const kana_E: number;

    /**
     * @default 1228
     */
    const kana_FU: number;

    /**
     * @default 1226
     */
    const kana_HA: number;

    /**
     * @default 1229
     */
    const kana_HE: number;

    /**
     * @default 1227
     */
    const kana_HI: number;

    /**
     * @default 1230
     */
    const kana_HO: number;

    /**
     * @default 1228
     */
    const kana_HU: number;

    /**
     * @default 1202
     */
    const kana_I: number;

    /**
     * @default 1206
     */
    const kana_KA: number;

    /**
     * @default 1209
     */
    const kana_KE: number;

    /**
     * @default 1207
     */
    const kana_KI: number;

    /**
     * @default 1210
     */
    const kana_KO: number;

    /**
     * @default 1208
     */
    const kana_KU: number;

    /**
     * @default 1231
     */
    const kana_MA: number;

    /**
     * @default 1234
     */
    const kana_ME: number;

    /**
     * @default 1232
     */
    const kana_MI: number;

    /**
     * @default 1235
     */
    const kana_MO: number;

    /**
     * @default 1233
     */
    const kana_MU: number;

    /**
     * @default 1245
     */
    const kana_N: number;

    /**
     * @default 1221
     */
    const kana_NA: number;

    /**
     * @default 1224
     */
    const kana_NE: number;

    /**
     * @default 1222
     */
    const kana_NI: number;

    /**
     * @default 1225
     */
    const kana_NO: number;

    /**
     * @default 1223
     */
    const kana_NU: number;

    /**
     * @default 1205
     */
    const kana_O: number;

    /**
     * @default 1239
     */
    const kana_RA: number;

    /**
     * @default 1242
     */
    const kana_RE: number;

    /**
     * @default 1240
     */
    const kana_RI: number;

    /**
     * @default 1243
     */
    const kana_RO: number;

    /**
     * @default 1241
     */
    const kana_RU: number;

    /**
     * @default 1211
     */
    const kana_SA: number;

    /**
     * @default 1214
     */
    const kana_SE: number;

    /**
     * @default 1212
     */
    const kana_SHI: number;

    /**
     * @default 1215
     */
    const kana_SO: number;

    /**
     * @default 1213
     */
    const kana_SU: number;

    /**
     * @default 1216
     */
    const kana_TA: number;

    /**
     * @default 1219
     */
    const kana_TE: number;

    /**
     * @default 1217
     */
    const kana_TI: number;

    /**
     * @default 1220
     */
    const kana_TO: number;

    /**
     * @default 1218
     */
    const kana_TSU: number;

    /**
     * @default 1218
     */
    const kana_TU: number;

    /**
     * @default 1203
     */
    const kana_U: number;

    /**
     * @default 1244
     */
    const kana_WA: number;

    /**
     * @default 1190
     */
    const kana_WO: number;

    /**
     * @default 1236
     */
    const kana_YA: number;

    /**
     * @default 1238
     */
    const kana_YO: number;

    /**
     * @default 1237
     */
    const kana_YU: number;

    /**
     * @default 1191
     */
    const kana_a: number;

    /**
     * @default 1187
     */
    const kana_closingbracket: number;

    /**
     * @default 1188
     */
    const kana_comma: number;

    /**
     * @default 1189
     */
    const kana_conjunctive: number;

    /**
     * @default 1194
     */
    const kana_e: number;

    /**
     * @default 1185
     */
    const kana_fullstop: number;

    /**
     * @default 1192
     */
    const kana_i: number;

    /**
     * @default 1189
     */
    const kana_middledot: number;

    /**
     * @default 1195
     */
    const kana_o: number;

    /**
     * @default 1186
     */
    const kana_openingbracket: number;

    /**
     * @default 65406
     */
    const kana_switch: number;

    /**
     * @default 1199
     */
    const kana_tsu: number;

    /**
     * @default 1199
     */
    const kana_tu: number;

    /**
     * @default 1193
     */
    const kana_u: number;

    /**
     * @default 1196
     */
    const kana_ya: number;

    /**
     * @default 1198
     */
    const kana_yo: number;

    /**
     * @default 1197
     */
    const kana_yu: number;

    /**
     * @default 930
     */
    const kappa: number;

    /**
     * @default 1011
     */
    const kcedilla: number;

    /**
     * @default 930
     */
    const kra: number;

    /**
     * @default 108
     */
    const l: number;

    /**
     * @default 485
     */
    const lacute: number;

    /**
     * @default 2777
     */
    const latincross: number;

    /**
     * @default 16784951
     */
    const lbelowdot: number;

    /**
     * @default 437
     */
    const lcaron: number;

    /**
     * @default 950
     */
    const lcedilla: number;

    /**
     * @default 2748
     */
    const leftanglebracket: number;

    /**
     * @default 2299
     */
    const leftarrow: number;

    /**
     * @default 2979
     */
    const leftcaret: number;

    /**
     * @default 2770
     */
    const leftdoublequotemark: number;

    /**
     * @default 2223
     */
    const leftmiddlecurlybrace: number;

    /**
     * @default 2764
     */
    const leftopentriangle: number;

    /**
     * @default 2794
     */
    const leftpointer: number;

    /**
     * @default 2209
     */
    const leftradical: number;

    /**
     * @default 3034
     */
    const leftshoe: number;

    /**
     * @default 2768
     */
    const leftsinglequotemark: number;

    /**
     * @default 2548
     */
    const leftt: number;

    /**
     * @default 3036
     */
    const lefttack: number;

    /**
     * @default 60
     */
    const less: number;

    /**
     * @default 2236
     */
    const lessthanequal: number;

    /**
     * @default 2533
     */
    const lf: number;

    /**
     * @default 2270
     */
    const logicaland: number;

    /**
     * @default 2271
     */
    const logicalor: number;

    /**
     * @default 2541
     */
    const lowleftcorner: number;

    /**
     * @default 2538
     */
    const lowrightcorner: number;

    /**
     * @default 435
     */
    const lstroke: number;

    /**
     * @default 109
     */
    const m: number;

    /**
     * @default 16784961
     */
    const mabovedot: number;

    /**
     * @default 175
     */
    const macron: number;

    /**
     * @default 2807
     */
    const malesymbol: number;

    /**
     * @default 2800
     */
    const maltesecross: number;

    /**
     * @default 2751
     */
    const marker: number;

    /**
     * @default 186
     */
    const masculine: number;

    /**
     * @default 45
     */
    const minus: number;

    /**
     * @default 2774
     */
    const minutes: number;

    /**
     * @default 181
     */
    const mu: number;

    /**
     * @default 215
     */
    const multiply: number;

    /**
     * @default 2806
     */
    const musicalflat: number;

    /**
     * @default 2805
     */
    const musicalsharp: number;

    /**
     * @default 110
     */
    const n: number;

    /**
     * @default 2245
     */
    const nabla: number;

    /**
     * @default 497
     */
    const nacute: number;

    /**
     * @default 498
     */
    const ncaron: number;

    /**
     * @default 1009
     */
    const ncedilla: number;

    /**
     * @default 16785545
     */
    const ninesubscript: number;

    /**
     * @default 16785529
     */
    const ninesuperior: number;

    /**
     * @default 2536
     */
    const nl: number;

    /**
     * @default 160
     */
    const nobreakspace: number;

    /**
     * @default 16785991
     */
    const notapproxeq: number;

    /**
     * @default 16785929
     */
    const notelementof: number;

    /**
     * @default 2237
     */
    const notequal: number;

    /**
     * @default 16786018
     */
    const notidentical: number;

    /**
     * @default 172
     */
    const notsign: number;

    /**
     * @default 241
     */
    const ntilde: number;

    /**
     * @default 35
     */
    const numbersign: number;

    /**
     * @default 1712
     */
    const numerosign: number;

    /**
     * @default 111
     */
    const o: number;

    /**
     * @default 243
     */
    const oacute: number;

    /**
     * @default 16777845
     */
    const obarred: number;

    /**
     * @default 16785101
     */
    const obelowdot: number;

    /**
     * @default 16777682
     */
    const ocaron: number;

    /**
     * @default 244
     */
    const ocircumflex: number;

    /**
     * @default 16785105
     */
    const ocircumflexacute: number;

    /**
     * @default 16785113
     */
    const ocircumflexbelowdot: number;

    /**
     * @default 16785107
     */
    const ocircumflexgrave: number;

    /**
     * @default 16785109
     */
    const ocircumflexhook: number;

    /**
     * @default 16785111
     */
    const ocircumflextilde: number;

    /**
     * @default 246
     */
    const odiaeresis: number;

    /**
     * @default 501
     */
    const odoubleacute: number;

    /**
     * @default 5053
     */
    const oe: number;

    /**
     * @default 434
     */
    const ogonek: number;

    /**
     * @default 242
     */
    const ograve: number;

    /**
     * @default 16785103
     */
    const ohook: number;

    /**
     * @default 16777633
     */
    const ohorn: number;

    /**
     * @default 16785115
     */
    const ohornacute: number;

    /**
     * @default 16785123
     */
    const ohornbelowdot: number;

    /**
     * @default 16785117
     */
    const ohorngrave: number;

    /**
     * @default 16785119
     */
    const ohornhook: number;

    /**
     * @default 16785121
     */
    const ohorntilde: number;

    /**
     * @default 1010
     */
    const omacron: number;

    /**
     * @default 2755
     */
    const oneeighth: number;

    /**
     * @default 2738
     */
    const onefifth: number;

    /**
     * @default 189
     */
    const onehalf: number;

    /**
     * @default 188
     */
    const onequarter: number;

    /**
     * @default 2742
     */
    const onesixth: number;

    /**
     * @default 16785537
     */
    const onesubscript: number;

    /**
     * @default 185
     */
    const onesuperior: number;

    /**
     * @default 2736
     */
    const onethird: number;

    /**
     * @default 248
     */
    const ooblique: number;

    /**
     * @default 2786
     */
    const openrectbullet: number;

    /**
     * @default 2789
     */
    const openstar: number;

    /**
     * @default 2788
     */
    const opentribulletdown: number;

    /**
     * @default 2787
     */
    const opentribulletup: number;

    /**
     * @default 170
     */
    const ordfeminine: number;

    /**
     * @default 248
     */
    const oslash: number;

    /**
     * @default 245
     */
    const otilde: number;

    /**
     * @default 3008
     */
    const overbar: number;

    /**
     * @default 1150
     */
    const overline: number;

    /**
     * @default 112
     */
    const p: number;

    /**
     * @default 16784983
     */
    const pabovedot: number;

    /**
     * @default 182
     */
    const paragraph: number;

    /**
     * @default 40
     */
    const parenleft: number;

    /**
     * @default 41
     */
    const parenright: number;

    /**
     * @default 16785922
     */
    const partdifferential: number;

    /**
     * @default 2287
     */
    const partialderivative: number;

    /**
     * @default 37
     */
    const percent: number;

    /**
     * @default 46
     */
    const period: number;

    /**
     * @default 183
     */
    const periodcentered: number;

    /**
     * @default 2811
     */
    const phonographcopyright: number;

    /**
     * @default 43
     */
    const plus: number;

    /**
     * @default 177
     */
    const plusminus: number;

    /**
     * @default 2772
     */
    const prescription: number;

    /**
     * @default 1200
     */
    const prolongedsound: number;

    /**
     * @default 2726
     */
    const punctspace: number;

    /**
     * @default 113
     */
    const q: number;

    /**
     * @default 3020
     */
    const quad: number;

    /**
     * @default 63
     */
    const question: number;

    /**
     * @default 191
     */
    const questiondown: number;

    /**
     * @default 34
     */
    const quotedbl: number;

    /**
     * @default 96
     */
    const quoteleft: number;

    /**
     * @default 39
     */
    const quoteright: number;

    /**
     * @default 114
     */
    const r: number;

    /**
     * @default 480
     */
    const racute: number;

    /**
     * @default 2262
     */
    const radical: number;

    /**
     * @default 504
     */
    const rcaron: number;

    /**
     * @default 947
     */
    const rcedilla: number;

    /**
     * @default 174
     */
    const registered: number;

    /**
     * @default 2750
     */
    const rightanglebracket: number;

    /**
     * @default 2301
     */
    const rightarrow: number;

    /**
     * @default 2982
     */
    const rightcaret: number;

    /**
     * @default 2771
     */
    const rightdoublequotemark: number;

    /**
     * @default 2224
     */
    const rightmiddlecurlybrace: number;

    /**
     * @default 2231
     */
    const rightmiddlesummation: number;

    /**
     * @default 2765
     */
    const rightopentriangle: number;

    /**
     * @default 2795
     */
    const rightpointer: number;

    /**
     * @default 3032
     */
    const rightshoe: number;

    /**
     * @default 2769
     */
    const rightsinglequotemark: number;

    /**
     * @default 2549
     */
    const rightt: number;

    /**
     * @default 3068
     */
    const righttack: number;

    /**
     * @default 115
     */
    const s: number;

    /**
     * @default 16784993
     */
    const sabovedot: number;

    /**
     * @default 438
     */
    const sacute: number;

    /**
     * @default 441
     */
    const scaron: number;

    /**
     * @default 442
     */
    const scedilla: number;

    /**
     * @default 16777817
     */
    const schwa: number;

    /**
     * @default 766
     */
    const scircumflex: number;

    /**
     * @default 65406
     */
    const script_switch: number;

    /**
     * @default 2775
     */
    const seconds: number;

    /**
     * @default 167
     */
    const section: number;

    /**
     * @default 59
     */
    const semicolon: number;

    /**
     * @default 1247
     */
    const semivoicedsound: number;

    /**
     * @default 2758
     */
    const seveneighths: number;

    /**
     * @default 16785543
     */
    const sevensubscript: number;

    /**
     * @default 16785527
     */
    const sevensuperior: number;

    /**
     * @default 2762
     */
    const signaturemark: number;

    /**
     * @default 2732
     */
    const signifblank: number;

    /**
     * @default 2249
     */
    const similarequal: number;

    /**
     * @default 2813
     */
    const singlelowquotemark: number;

    /**
     * @default 16785542
     */
    const sixsubscript: number;

    /**
     * @default 16785526
     */
    const sixsuperior: number;

    /**
     * @default 47
     */
    const slash: number;

    /**
     * @default 2528
     */
    const soliddiamond: number;

    /**
     * @default 32
     */
    const space: number;

    /**
     * @default 16785946
     */
    const squareroot: number;

    /**
     * @default 223
     */
    const ssharp: number;

    /**
     * @default 163
     */
    const sterling: number;

    /**
     * @default 16786019
     */
    const stricteq: number;

    /**
     * @default 116
     */
    const t: number;

    /**
     * @default 16785003
     */
    const tabovedot: number;

    /**
     * @default 443
     */
    const tcaron: number;

    /**
     * @default 510
     */
    const tcedilla: number;

    /**
     * @default 2809
     */
    const telephone: number;

    /**
     * @default 2810
     */
    const telephonerecorder: number;

    /**
     * @default 2240
     */
    const therefore: number;

    /**
     * @default 2727
     */
    const thinspace: number;

    /**
     * @default 254
     */
    const thorn: number;

    /**
     * @default 2756
     */
    const threeeighths: number;

    /**
     * @default 2740
     */
    const threefifths: number;

    /**
     * @default 190
     */
    const threequarters: number;

    /**
     * @default 16785539
     */
    const threesubscript: number;

    /**
     * @default 179
     */
    const threesuperior: number;

    /**
     * @default 16785965
     */
    const tintegral: number;

    /**
     * @default 2212
     */
    const topintegral: number;

    /**
     * @default 2219
     */
    const topleftparens: number;

    /**
     * @default 2210
     */
    const topleftradical: number;

    /**
     * @default 2215
     */
    const topleftsqbracket: number;

    /**
     * @default 2225
     */
    const topleftsummation: number;

    /**
     * @default 2221
     */
    const toprightparens: number;

    /**
     * @default 2217
     */
    const toprightsqbracket: number;

    /**
     * @default 2229
     */
    const toprightsummation: number;

    /**
     * @default 2551
     */
    const topt: number;

    /**
     * @default 2227
     */
    const topvertsummationconnector: number;

    /**
     * @default 2761
     */
    const trademark: number;

    /**
     * @default 2763
     */
    const trademarkincircle: number;

    /**
     * @default 956
     */
    const tslash: number;

    /**
     * @default 2739
     */
    const twofifths: number;

    /**
     * @default 16785538
     */
    const twosubscript: number;

    /**
     * @default 178
     */
    const twosuperior: number;

    /**
     * @default 2737
     */
    const twothirds: number;

    /**
     * @default 117
     */
    const u: number;

    /**
     * @default 250
     */
    const uacute: number;

    /**
     * @default 16785125
     */
    const ubelowdot: number;

    /**
     * @default 765
     */
    const ubreve: number;

    /**
     * @default 251
     */
    const ucircumflex: number;

    /**
     * @default 252
     */
    const udiaeresis: number;

    /**
     * @default 507
     */
    const udoubleacute: number;

    /**
     * @default 249
     */
    const ugrave: number;

    /**
     * @default 16785127
     */
    const uhook: number;

    /**
     * @default 16777648
     */
    const uhorn: number;

    /**
     * @default 16785129
     */
    const uhornacute: number;

    /**
     * @default 16785137
     */
    const uhornbelowdot: number;

    /**
     * @default 16785131
     */
    const uhorngrave: number;

    /**
     * @default 16785133
     */
    const uhornhook: number;

    /**
     * @default 16785135
     */
    const uhorntilde: number;

    /**
     * @default 1022
     */
    const umacron: number;

    /**
     * @default 3014
     */
    const underbar: number;

    /**
     * @default 95
     */
    const underscore: number;

    /**
     * @default 2269
     */
    const union: number;

    /**
     * @default 1017
     */
    const uogonek: number;

    /**
     * @default 2300
     */
    const uparrow: number;

    /**
     * @default 2985
     */
    const upcaret: number;

    /**
     * @default 2540
     */
    const upleftcorner: number;

    /**
     * @default 2539
     */
    const uprightcorner: number;

    /**
     * @default 3011
     */
    const upshoe: number;

    /**
     * @default 3027
     */
    const upstile: number;

    /**
     * @default 3022
     */
    const uptack: number;

    /**
     * @default 505
     */
    const uring: number;

    /**
     * @default 1021
     */
    const utilde: number;

    /**
     * @default 118
     */
    const v: number;

    /**
     * @default 2241
     */
    const variation: number;

    /**
     * @default 2552
     */
    const vertbar: number;

    /**
     * @default 2214
     */
    const vertconnector: number;

    /**
     * @default 1246
     */
    const voicedsound: number;

    /**
     * @default 2537
     */
    const vt: number;

    /**
     * @default 119
     */
    const w: number;

    /**
     * @default 16785027
     */
    const wacute: number;

    /**
     * @default 16777589
     */
    const wcircumflex: number;

    /**
     * @default 16785029
     */
    const wdiaeresis: number;

    /**
     * @default 16785025
     */
    const wgrave: number;

    /**
     * @default 120
     */
    const x: number;

    /**
     * @default 16785035
     */
    const xabovedot: number;

    /**
     * @default 121
     */
    const y: number;

    /**
     * @default 253
     */
    const yacute: number;

    /**
     * @default 16785141
     */
    const ybelowdot: number;

    /**
     * @default 16777591
     */
    const ycircumflex: number;

    /**
     * @default 255
     */
    const ydiaeresis: number;

    /**
     * @default 165
     */
    const yen: number;

    /**
     * @default 16785139
     */
    const ygrave: number;

    /**
     * @default 16785143
     */
    const yhook: number;

    /**
     * @default 16785145
     */
    const ytilde: number;

    /**
     * @default 122
     */
    const z: number;

    /**
     * @default 447
     */
    const zabovedot: number;

    /**
     * @default 444
     */
    const zacute: number;

    /**
     * @default 446
     */
    const zcaron: number;

    /**
     * @default 16785536
     */
    const zerosubscript: number;

    /**
     * @default 16785520
     */
    const zerosuperior: number;

    /**
     * @default 16777654
     */
    const zstroke: number;

    /**
     * Converts an accelerator keyval and modifier mask into a string
     * parseable by `gtk_accelerator_parse()`. For example, if you pass in
     * #IBUS_KEY_q and #IBUS_CONTROL_MASK, this function returns “&lt;Control&gt;q”.
     * 
     * If you need to display accelerators in the user interface,
     * see `gtk_accelerator_get_label()`.
     * @param accelerator_key accelerator keyval
     * @param accelerator_mods accelerator modifier mask
     * @returns a newly-allocated accelerator name
     */
    function accelerator_name(accelerator_key: number, accelerator_mods: ModifierType): string;

    /**
     * Parses a string representing an accelerator. The format looks like
     * “&lt;Control&gt;a” or “&lt;Shift&gt;&lt;Alt&gt;F1” or “&lt;Release%gt;z”
     * (the last one is for key release).
     * 
     * The parser is fairly liberal and allows lower or upper case, and also
     * abbreviations such as “&lt;Ctl&gt;” and “&lt;Ctrl&gt;”. Key names are
     * parsed using `gdk_keyval_from_name()`. For character keys the name is not the
     * symbol, but the lowercase name, e.g. one would use “&lt;Ctrl&gt;minus”
     * instead of “&lt;Ctrl&gt;-”.
     * 
     * If the parse fails, `accelerator_key` and `accelerator_mods` will
     * be set to 0 (zero).
     * @param accelerator string representing an accelerator
     * @since 1.5.18
     */
    function accelerator_parse(accelerator: string): [number, ModifierType | null];

    /**
     * Determines whether a given keyval and modifier mask constitute
     * a valid keyboard accelerator. For example, the #IBUS_KEY_a keyval
     * plus #IBUS_CONTROL_MASK is valid - this is a “Ctrl+a” accelerator.
     * But, you can't, for instance, use the #IBUS_KEY_Control_L keyval
     * as an accelerator.
     * @param keyval a GDK keyval
     * @param modifiers modifier mask
     * @returns `true` if the accelerator is valid
     */
    function accelerator_valid(keyval: number, modifiers: ModifierType): boolean;

    /**
     * Creates a new background {@link IBus.Attribute}.
     * Workaround of "transfer none" for `ibus_attr_list_append()`.
     * @param color Color in RGB.
     * @param start_index Where attribute starts.
     * @param end_index Where attribute ends.
     * @returns A newly allocated {@link IBus.Attribute}.
     * @deprecated since 1.5.33: Use `ibus_attr_hint_new()`.
     */
    function attr_background_new(color: number, start_index: number, end_index: number): Attribute;

    /**
     * Creates a new foreground {@link IBus.Attribute}.
     * Workaround of "transfer none" for `ibus_attr_list_append()`.
     * @param color Color in RGB.
     * @param start_index Where attribute starts.
     * @param end_index Where attribute ends.
     * @returns A newly allocated {@link IBus.Attribute}.
     * @deprecated since 1.5.33: Use `ibus_attr_hint_new()`.
     */
    function attr_foreground_new(color: number, start_index: number, end_index: number): Attribute;

    /**
     * Creates a new hint attribute {@link IBus.Attribute}.
     * Workaround of "transfer none" for `ibus_attr_list_append()`.
     * @param hint Only {@link IBus.AttrPreedit} is supported at present.
     * @param start_index Where attribute starts.
     * @param end_index Where attribute ends.
     * @returns A newly allocated {@link IBus.Attribute}.
     * @since 1.5.33
     */
    function attr_hint_new(hint: number, start_index: number, end_index: number): Attribute;

    /**
     * Creates a new underline {@link IBus.Attribute}.
     * Workaround of "transfer none" for `ibus_attr_list_append()`.
     * @param underline_type Type of underline.
     * @param start_index Where attribute starts.
     * @param end_index Where attribute ends.
     * @returns A newly allocated {@link IBus.Attribute}.
     * @deprecated since 1.5.33: Use `ibus_attr_hint_new()`.
     */
    function attr_underline_new(underline_type: number, start_index: number, end_index: number): Attribute;

    /**
     * @param path A path of the saved dictionary file.
     * @returns An Emoji dictionary file loaded from the saved cache file. A hash table of { emoji character, {@link IBus.EmojiData} object } is loaded from the saved cache file. Recommend to use `ibus_emoji_data_load()` instead becase GSList in GHashTable does not work with Gir and Vala. Calls `ibus_emoji_data_load()` internally.
     */
    function emoji_dict_load(path: string): { [key: string]: never };

    /**
     * @param dict An Emoji dictionary
     * @param emoji an emoji character
     * @returns An {@link IBus.EmojiData} of `emoji`. This API was prepared for the old dict foramat with Gir and Vala but no longer needed. Use `ibus_emoji_data_load()` instead.
     */
    function emoji_dict_lookup(dict: { [key: string]: EmojiData }, emoji: string): EmojiData;

    /**
     * Saves the Emoji dictionary to the cache file.
     * Recommend to use `ibus_emoji_data_save()` instead becase GSList in
     * GHashTable does not work with Gir and Vala.
     * Calls `ibus_emoji_data_save()` internally. The format of the hash table
     * changed and now is { emoji character, {@link IBus.EmojiData} object }.
     * @param path A path of the saved dictionary file.
     * @param dict An Emoji dictionary
     */
    function emoji_dict_save(path: string, dict: { [key: string]: never }): void;

    function error_quark(): GLib.Quark;

    /**
     * Free a list of strings.
     * @param strv List of strings.
     * @deprecated This function has been deprecated and should not be used in newly written code.
     */
    function free_strv(strv: string): void;

    /**
     * Return the D-Bus address of IBus.
     * It will find the address from following source:
     * <orderedlist>
     *    <listitem><para>Environment variable IBUS_ADDRESS</para></listitem>
     *    <listitem><para>Socket file under ~/.config/ibus/bus/</para></listitem>
     * </orderedlist>
     * @returns D-Bus address of IBus. `null` for not found. See also: `ibus_write_address()`.
     */
    function get_address(): string;

    /**
     * Get UID of ibus-daemon.
     * @returns UID of ibus-daemon; or 0 if UID is not available.
     * @deprecated This function has been deprecated and should not be used in newly written code.
     */
    function get_daemon_uid(): number;

    /**
     * Get the current user group name.
     * @returns A const string that stores current user group name.
     * @since 1.5.34
     */
    function get_group_name(): string;

    /**
     * @param _locale A const locale name.
     * @returns translated language name
     */
    function get_language_name(_locale: string): string;

    /**
     * Obtains the machine UUID of the machine this process is running on.
     * @returns A const string that shows the UUID of the machine.
     */
    function get_local_machine_id(): string;

    /**
     * Get the path of socket file.
     * @returns A const string that stores the path of socket file.
     */
    function get_socket_path(): string;

    /**
     * Get the GDBus timeout in milliseconds. The timeout is for clients (e.g.
     * im-ibus.so), not for ibus-daemon.
     * Note that the timeout for ibus-daemon could be set by --timeout command
     * line option of the daemon.
     * @returns A GDBus timeout in milliseconds. -1 when default timeout for     GDBus should be used.
     */
    function get_timeout(): number;

    /**
     * @param _locale A const locale name.
     * @returns untranslated language name
     */
    function get_untranslated_language_name(_locale: string): string;

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
     * @returns A const string that stores current user name.
     */
    function get_user_name(): string;

    /**
     * Initialize the ibus types.
     */
    function init(): void;

    /**
     * Parse key event string and return key symbol and modifiers.
     * @param string Key event string.
     * @returns `true` for succeed; `false` if failed.
     */
    function key_event_from_string(string: string): [boolean, number, number];

    /**
     * Return the name of a key symbol and modifiers.
     * 
     * For example, if press ctrl, shift, and enter, then this function returns:
     * Shift+Control+enter.
     * @param keyval Key symbol.
     * @param modifiers Modifiers such as Ctrl or Shift.
     * @returns The name of a key symbol and modifier.
     */
    function key_event_to_string(keyval: number, modifiers: number): string;

    /**
     * Obtains the upper- and lower-case versions of the keyval `symbol`.
     * Examples of keyvals are #IBUS_KEY_a, #IBUS_KEY_Return, #IBUS_KEY_F1, etc.
     * @param symbol a keyval
     */
    function keyval_convert_case(symbol: number): [number, number];

    /**
     * Return the key symbol that associate with the key name.
     * @param keyval_name Key name in `gdk_keys_by_name`.
     * @returns Corresponding key symbol.
     */
    function keyval_from_name(keyval_name: string): number;

    /**
     * Return the name of a key symbol.
     * 
     * Note that the returned string is used internally, so don't free it.
     * @param keyval Key symbol.
     * @returns Corresponding key name. `null` if no such key symbol.
     */
    function keyval_name(keyval: number): string;

    /**
     * Converts a key value to lower case, if applicable.
     * @param keyval a key value.
     * @returns the lower case form of `keyval`, or `keyval` itself if it is already  in lower case or it is not subject to case conversion.
     */
    function keyval_to_lower(keyval: number): number;

    /**
     * Convert from an IBus key symbol to the corresponding ISO10646 (Unicode)
     * character.
     * @param keyval an IBus key symbol
     * @returns the corresponding unicode character, or 0 if there          is no corresponding character.
     */
    function keyval_to_unicode(keyval: number): string;

    /**
     * Converts a key value to upper case, if applicable.
     * @param keyval a key value.
     * @returns the upper case form of `keyval`, or `keyval` itself if it is already   in upper case or it is not subject to case conversion.
     */
    function keyval_to_upper(keyval: number): number;

    /**
     * Runs an IBus main loop until `ibus_quit()` is called in the loop.
     * 
     * See also: `ibus_quit()`.
     */
    function main(): void;

    /**
     * Stops an IBus from running.
     * 
     * Any calls to `ibus_quit()` for the loop will return.
     * See also: `ibus_main()`.
     */
    function quit(): void;

    /**
     * Set the display address.
     * @param display Display address, as in DISPLAY environment for X.
     */
    function set_display(display: string): void;

    /**
     * Sets GLIB's log handler to ours. Our log handler adds time info
     * including hour, minute, second, and microsecond, like:
     * 
     * (ibus-daemon:7088): IBUS-DEBUG: 18:06:45.822819: ibus-daemon started
     * 
     * If `verbose` is `true`, all levels of messages will be logged. Otherwise,
     * DEBUG and WARNING messages will be ignored.  The function is used in
     * ibus-daemon, but can be useful for IBus client programs as well for
     * debugging. It's totally fine for not calling this function. If you
     * don't set a custom GLIB log handler, the default GLIB log handler will
     * be used.
     * @param verbose TRUE for verbose logging.
     */
    function set_log_handler(verbose: boolean): void;

    /**
     * Convert from a ISO10646 character to a key symbol.
     * @param wc a ISO10646 encoded character
     * @returns the corresponding IBus key symbol, if one exists.          or, if there is no corresponding symbol,          `wc | 0x01000000`
     */
    function unicode_to_keyval(wc: string): number;

    /**
     * Remove the log handler which is set by ibus_set_log_handler.
     */
    function unset_log_handler(): void;

    /**
     * Write D-Bus address to socket file.
     * 
     * See also: `ibus_get_address()`.
     * @param address D-Bus address of IBus.
     */
    function write_address(address: string): void;

    /**
     * Parse a string buffer which contains an XML-formatted string,
     * and return a corresponding XML tree.
     * @param buffer Buffer to be parsed.
     * @returns Root node of parsed XML tree.
     */
    function xml_parse_buffer(buffer: string): XML;

    /**
     * Parse an XML file and return a corresponding XML tree.
     * @param name File name to be parsed.
     * @returns Root node of parsed XML tree.
     */
    function xml_parse_file(name: string): XML;

    /**
     * @gir-type Callback
     */
    interface FreeFunc {
        (object: null): void;
    }

    /**
     * @gir-type Callback
     */
    interface ObjectDestroyFunc {
        (object: Object): void;
    }

    /**
     * @gir-type Callback
     */
    interface SerializableCopyFunc {
        (dest: Serializable, src: Serializable): boolean;
    }

    /**
     * @gir-type Callback
     */
    interface SerializableDeserializeFunc {
        (serializable: Serializable, variant: GLib.Variant): number;
    }

    /**
     * @gir-type Callback
     */
    interface SerializableSerializeFunc {
        (serializable: Serializable, builder: GLib.VariantBuilder): boolean;
    }

    /**
     * @gir-type Callback
     */
    interface UnicodeDataLoadAsyncFinish {
        (data_list: UnicodeData[]): void;
    }

    /**
     * @gir-type Flags
     */
    export namespace AttrPreedit {
        export const $gtype: GObject.GType<AttrPreedit>;
    }

    /**
     * Type of Pre-edit style as the semantic name.
     * The Wayland specs prefers to express the semantic values rather than RGB
     * values and text-input protocol version 1 defines some values:
     * https://gitlab.freedesktop.org/wayland/wayland-protocols/-/blob/main/unstable/text-input/text-input-unstable-v1.xml?ref_type=heads#L251
     * 
     * IBus compiled the values for major input method engines:
     * https://github.com/ibus/ibus/wiki/Wayland-Colors
     * @gir-type Flags
     * @since 1.5.29
     */
    enum AttrPreedit {
        /**
         * Default style for composing text and used in
         *                             the internal logic only with the Wayland
         *                             text-input protocol V1. Each {@link IBus.Engine}
         *                             should not use it with `ibus_attr_hint_new()`.
         */
        DEFAULT = 0,
        /**
         * Most language engines wish to draw underline in
         *                           the typed whole preedit string except for the
         *                           prediction string. (Chinese, Japanese,
         *                           Typing-booster)
         */
        WHOLE = 1,
        /**
         * Modifying an active segment is distinguished
         *                               against whole the preedit text. (Hangul,
         *                               Japanese)
         */
        SELECTION = 2,
        /**
         * A prediction string can be appended after the
         *                                typed string. (Typing-booster)
         */
        PREDICTION = 3,
        /**
         * A prefix string can be an informative color.
         *                            (Table)
         */
        PREFIX = 4,
        /**
         * A suffix string can be an informative color.
         *                            (Table)
         */
        SUFFIX = 5,
        /**
         * An detected typo could be an error color
         *                                    with a spelling check or the word could
         *                                    not be found in a dictionary. The
         *                                    underline color also might be more
         *                                    visible. (Typing-booster, Table)
         */
        ERROR_SPELLING = 6,
        /**
         * A wrong compose key could be an error
         *                                   color. (Typing-booster)
         */
        ERROR_COMPOSE = 7,
        /**
         * Designed for non-composing text with the Wayland
         *                             text-input protocol V1 but this is deprecated.
         */
        NONE = 256,
    }


    /**
     * @gir-type Flags
     */
    export namespace BusNameFlag {
        export const $gtype: GObject.GType<BusNameFlag>;
    }

    /**
     * @gir-type Flags
     */
    enum BusNameFlag {
        /**
         * same as DBUS_NAME_FLAG_ALLOW_REPLACEMENT
         */
        ALLOW_REPLACEMENT = 1,
        /**
         * same as DBUS_NAME_FLAG_REPLACE_EXISTING
         */
        REPLACE_EXISTING = 2,
        /**
         * same as DBUS_NAME_FLAG_DO_NOT_QUEUE
         */
        DO_NOT_QUEUE = 4,
    }


    /**
     * @gir-type Flags
     */
    export namespace Capabilite {
        export const $gtype: GObject.GType<Capabilite>;
    }

    /**
     * Capability flags of UI.
     * @gir-type Flags
     */
    enum Capabilite {
        /**
         * UI is capable to show pre-edit text.
         */
        PREEDIT_TEXT = 1,
        /**
         * UI is capable to show auxiliary text.
         */
        AUXILIARY_TEXT = 2,
        /**
         * UI is capable to show the lookup table.
         */
        LOOKUP_TABLE = 4,
        /**
         * UI is capable to get focus.
         */
        FOCUS = 8,
        /**
         * UI is capable to have property.
         */
        PROPERTY = 16,
        /**
         * Client can provide surround text,
         *  or IME can handle surround text.
         */
        SURROUNDING_TEXT = 32,
        /**
         * UI is owned by on-screen keyboard.
         */
        OSK = 64,
        /**
         * Asynchronous process key events are not
         *  supported and the `ibus_engine_forward_key_event()` should not be
         *  used for the return value of {@link IBus.Engine.SignalSignatures.process_key_event | IBus.Engine::process_key_event}().
         */
        SYNC_PROCESS_KEY = 128,
        SYNC_PROCESS_KEY_V2 = 128,
    }


    /**
     * @gir-type Flags
     */
    export namespace InputHints {
        export const $gtype: GObject.GType<InputHints>;
    }

    /**
     * Describes hints that might be taken into account by engines.  Note
     * that engines may already tailor their behaviour according to the
     * {@link IBus.InputPurpose} of the entry.
     * 
     * Some common sense is expected when using these flags - mixing
     * `IBUS_INPUT_HINT_LOWERCASE` with any of the uppercase hints makes no sense.
     * 
     * This enumeration may be extended in the future; engines should
     * ignore unknown values.
     * @gir-type Flags
     * @since 1.5.4
     */
    enum InputHints {
        /**
         * No special behaviour suggested
         */
        NONE = 0,
        /**
         * Suggest checking for typos
         */
        SPELLCHECK = 1,
        /**
         * Suggest not checking for typos
         */
        NO_SPELLCHECK = 2,
        /**
         * Suggest word completion
         */
        WORD_COMPLETION = 4,
        /**
         * Suggest to convert all text to lowercase
         */
        LOWERCASE = 8,
        /**
         * Suggest to capitalize all text
         */
        UPPERCASE_CHARS = 16,
        /**
         * Suggest to capitalize the first
         *     character of each word
         */
        UPPERCASE_WORDS = 32,
        /**
         * Suggest to capitalize the
         *     first word of each sentence
         */
        UPPERCASE_SENTENCES = 64,
        /**
         * Suggest to not show an onscreen keyboard
         *     (e.g for a calculator that already has all the keys).
         */
        INHIBIT_OSK = 128,
        /**
         * The text is vertical. Since 1.5.11
         */
        VERTICAL_WRITING = 256,
        /**
         * Suggest offering Emoji support. Since 1.5.24
         */
        EMOJI = 512,
        /**
         * Suggest not offering Emoji support. Since 1.5.24
         */
        NO_EMOJI = 1024,
        /**
         * Request that the input method should not
         *     update personalized data (like typing history). Since 1.5.26
         */
        PRIVATE = 2048,
        /**
         * The text is hidden (e.g. password fields).
         *     Since 1.5.34
         */
        HIDDEN_TEXT = 4096,
        /**
         * Just latin characters should be entered for the
         *     text-input protocol V1/V3. Since 1.5.34
         */
        LATIN = 8192,
        /**
         * Suggest the text input is multiline for the
         *     text-input protocol V1/V3. Since 1.5.34
         */
        MULTILINE = 16384,
    }


    /**
     * @gir-type Flags
     */
    export namespace ModifierType {
        export const $gtype: GObject.GType<ModifierType>;
    }

    /**
     * Handles key modifier such as control, shift and alt and release event.
     * Note that nits 15 - 25 are currently unused, while bit 29 is used internally.
     * @gir-type Flags
     */
    enum ModifierType {
        /**
         * Shift  is activated.
         */
        SHIFT_MASK = 1,
        /**
         * Cap Lock is locked.
         */
        LOCK_MASK = 2,
        /**
         * Control key is activated.
         */
        CONTROL_MASK = 4,
        /**
         * Modifier 1 (Usually Alt_L (0x40),  Alt_R (0x6c),  Meta_L (0xcd)) activated.
         */
        MOD1_MASK = 8,
        /**
         * Modifier 2 (Usually Num_Lock (0x4d)) activated.
         */
        MOD2_MASK = 16,
        /**
         * Modifier 3 activated.
         */
        MOD3_MASK = 32,
        /**
         * Modifier 4 (Usually Super_L (0xce),  Hyper_L (0xcf)) activated.
         */
        MOD4_MASK = 64,
        /**
         * Modifier 5 (ISO_Level3_Shift (0x5c),  Mode_switch (0xcb)) activated.
         */
        MOD5_MASK = 128,
        /**
         * Mouse button 1 (left) is activated.
         */
        BUTTON1_MASK = 256,
        /**
         * Mouse button 2 (middle) is activated.
         */
        BUTTON2_MASK = 512,
        /**
         * Mouse button 3 (right) is activated.
         */
        BUTTON3_MASK = 1024,
        /**
         * Mouse button 4 (scroll up) is activated.
         */
        BUTTON4_MASK = 2048,
        /**
         * Mouse button 5 (scroll down) is activated.
         */
        BUTTON5_MASK = 4096,
        /**
         * Handled mask indicates the event has been handled by ibus.
         */
        HANDLED_MASK = 16777216,
        /**
         * Forward mask indicates the event has been forward from ibus.
         */
        FORWARD_MASK = 33554432,
        /**
         * It is an alias of IBUS_FORWARD_MASK.
         */
        IGNORED_MASK = 33554432,
        /**
         * Super (Usually Win) key is activated.
         */
        SUPER_MASK = 67108864,
        /**
         * Hyper key is activated.
         */
        HYPER_MASK = 134217728,
        /**
         * Meta key is activated.
         */
        META_MASK = 268435456,
        /**
         * Key is released.
         */
        RELEASE_MASK = 1073741824,
        /**
         * Modifier mask for the all the masks above.
         */
        MODIFIER_MASK = 1593843711,
    }


    /**
     * @gir-type Flags
     */
    export namespace ObjectFlags {
        export const $gtype: GObject.GType<ObjectFlags>;
    }

    /**
     * The flags are used internally.
     * @gir-type Flags
     */
    enum ObjectFlags {
        /**
         * Used in GObjectClass::dispose
         */
        IN_DESTRUCTION = 1,
        /**
         * Used during emitting IBusObject::destroy signal.
         */
        DESTROYED = 2,
        /**
         * Reserved.
         */
        RESERVED_1 = 4,
        /**
         * Reserved.
         */
        RESERVED_2 = 8,
    }


    namespace AttrList {
        // Signal signatures
        interface SignalSignatures extends Serializable.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends Serializable.ConstructorProps {}
    }

    /**
     * Array of IBusAttribute.
     * @gir-type Class
     */
    class AttrList extends Serializable {
        static $gtype: GObject.GType<AttrList>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AttrList.SignalSignatures;

        // Fields
        attributes: null[];

        // Constructors
        constructor(properties?: Partial<AttrList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): AttrList;

        // Signals
        /** @signal */
        connect<K extends keyof AttrList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AttrList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AttrList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AttrList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AttrList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AttrList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Append an IBusAttribute to IBusAttrList, and increase reference.
         * @param attr The IBusAttribute instance to be appended.
         */
        append(attr: Attribute): void;

        /**
         * Returns {@link IBus.Attribute} at given index. Borrowed reference.
         * @param index Index of the `attr_list`.
         * @returns {@link IBus.Attribute} at given index, `null` if no such        {@link IBus.Attribute}.
         */
        get(index: number): Attribute;
    }


    namespace Attribute {
        // Signal signatures
        interface SignalSignatures extends Serializable.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends Serializable.ConstructorProps {}
    }

    /**
     * An IBusAttribute represents an attribute that associate to IBusText.
     * It decorates preedit buffer and auxiliary text with underline, foreground
     * and background colors.
     * @gir-type Class
     */
    class Attribute extends Serializable {
        static $gtype: GObject.GType<Attribute>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Attribute.SignalSignatures;

        // Fields
        type: number;

        value: number;

        start_index: number;

        end_index: number;

        // Constructors
        constructor(properties?: Partial<Attribute.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](type: number, value: number, start_index: number, end_index: number): Attribute;

        // Conflicted with IBus.Serializable.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof Attribute.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Attribute.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Attribute.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Attribute.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Attribute.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Attribute.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets an enum of {@link IBus.AttrType}.
         * @returns An enum of {@link IBus.AttrType}.
         */
        get_attr_type(): number;

        /**
         * Gets an end unsigned index
         * @returns A end unsigned index
         */
        get_end_index(): number;

        /**
         * Gets a start unsigned index
         * @returns A start unsigned index
         */
        get_start_index(): number;

        /**
         * Gets an unsigned int value relative with {@link IBus.AttrType}.
         * If the type is {@link IBus.AttrType.UNDERLINE}, the return value is
         * {@link IBus.AttrUnderline}. If the type is {@link IBus.AttrType.FOREGROUND},
         * the return value is the color RGB. if the type is {@link IBus.AttrType.HINT},
         * the return value is the value of {@link IBus.AttrPreedit}.
         * @returns An unsigned int value relative with {@link IBus.AttrType}.
         */
        get_value(): number;
    }


    namespace Bus {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            /**
             * Emitted when {@link IBus.Bus} is connected to ibus-daemon.
             * @signal
             * @run-last
             */
            connected: () => void;
            /**
             * Emitted when {@link IBus.Bus} is disconnected from ibus-daemon.
             * @signal
             * @run-last
             */
            disconnected: () => void;
            /**
             * Emitted when global engine is changed.
             * @signal
             * @run-last
             */
            "global-engine-changed": (name: string) => void;
            /**
             * Emitted when global shortcut key is responded.
             * Since 1.5.32
             * @signal
             * @run-last
             */
            "global-shortcut-key-responded": (type: number, keyval: number, keycode: number, state: number, is_backward: boolean) => void;
            /**
             * Emitted when D-Bus name owner is changed.
             * @signal
             * @run-last
             */
            "name-owner-changed": (name: string, old_owner: string, new_owner: string) => void;
            "notify::client-only": (pspec: GObject.ParamSpec) => void;
            "notify::connect-async": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {
            client_only: boolean;
            clientOnly: boolean;
            connect_async: boolean;
            connectAsync: boolean;
        }
    }

    /**
     * An IBusBus connects with IBus daemon.
     * @gir-type Class
     */
    class Bus extends Object {
        static $gtype: GObject.GType<Bus>;

        // Properties
        /**
         * Whether the {@link IBus.Bus} object is for client use only.
         * @construct-only
         * @default false
         */
        get client_only(): boolean;

        /**
         * Whether the {@link IBus.Bus} object is for client use only.
         * @construct-only
         * @default false
         */
        get clientOnly(): boolean;

        /**
         * Whether the {@link IBus.Bus} object should connect asynchronously to the bus.
         * @construct-only
         * @default false
         */
        get connect_async(): boolean;

        /**
         * Whether the {@link IBus.Bus} object should connect asynchronously to the bus.
         * @construct-only
         * @default false
         */
        get connectAsync(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Bus.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Bus.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Bus;

        static new_async(): Bus;

        static new_async_client(): Bus;

        // Signals
        /** @signal */
        connect<K extends keyof Bus.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Bus.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Bus.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Bus.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Bus.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Bus.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Add a match rule to an {@link IBus.Bus} synchronously.
         * @param rule Match rule.
         * @returns `true` if the rule is added. `false` otherwise.
         */
        add_match(rule: string): boolean;

        /**
         * Add a match rule to an {@link IBus.Bus} asynchronously.
         * @param rule Match rule.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        add_match_async(rule: string, timeout_msec: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Add a match rule to an {@link IBus.Bus} asynchronously.
         * @param rule Match rule.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied      or `null` if you don't care about the result of the method invocation.
         */
        add_match_async(rule: string, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Add a match rule to an {@link IBus.Bus} asynchronously.
         * @param rule Match rule.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied      or `null` if you don't care about the result of the method invocation.
         */
        add_match_async(rule: string, timeout_msec: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an operation started with `ibus_bus_add_match_async()`.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to   `ibus_bus_add_match_async()`.
         * @returns `true` if the rule is added. `false` otherwise.
         * @throws GLib.Error
         */
        add_match_async_finish(res: Gio.AsyncResult): boolean;

        /**
         * Create an input context for client synchronously.
         * @param client_name Name of client.
         * @returns A newly allocated {@link IBus.InputContext} if the      "CreateInputContext" call is succeeded, `null` otherwise.
         */
        create_input_context(client_name: string): InputContext;

        /**
         * Create an input context for client asynchronously.
         * @param client_name Name of client.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        create_input_context_async(client_name: string, timeout_msec: number, cancellable: Gio.Cancellable | null): globalThis.Promise<InputContext>;

        /**
         * Create an input context for client asynchronously.
         * @param client_name Name of client.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.      It should not be `null`.
         */
        create_input_context_async(client_name: string, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Create an input context for client asynchronously.
         * @param client_name Name of client.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.      It should not be `null`.
         */
        create_input_context_async(client_name: string, timeout_msec: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<InputContext> | void;

        /**
         * Finishes an operation started with `ibus_bus_create_input_context_async()`.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to   `ibus_bus_create_input_context_async()`.
         * @returns A newly allocated {@link IBus.InputContext} if the      "CreateInputContext" call is succeeded, `null` otherwise.
         * @throws GLib.Error
         */
        create_input_context_async_finish(res: Gio.AsyncResult): InputContext;

        /**
         * Get the current focused input context synchronously.
         * @returns Name of the currently focused {@link IBus.InputContext} if the          "CurrentInputContext" call succeeded, `null` otherwise. The return          value must be freed with `g_free()`.
         */
        current_input_context(): string;

        /**
         * Get the current focused input context asynchronously.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        current_input_context_async(timeout_msec: number, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;

        /**
         * Get the current focused input context asynchronously.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied      or `null` if you don't care about the result of the method invocation.
         */
        current_input_context_async(timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Get the current focused input context asynchronously.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied      or `null` if you don't care about the result of the method invocation.
         */
        current_input_context_async(timeout_msec: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;

        /**
         * Finishes an operation started with `ibus_bus_current_input_context_async()`.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to   `ibus_bus_current_input_context_async()`.
         * @returns Name of the currently focused IBusInputContext if the          "CurrentInputContext" call succeeded, `null` otherwise. The return          value must be freed with `g_free()`.
         * @throws GLib.Error
         */
        current_input_context_async_finish(res: Gio.AsyncResult): string;

        /**
         * Exit or restart ibus-daemon synchronously.
         * @param restart Whether restarting the ibus.
         * @returns `true` if the "Exit" call is successful, `false` otherwise.
         */
        exit(restart: boolean): boolean;

        /**
         * Exit or restart ibus-daemon asynchronously.
         * @param restart Whether restarting the ibus.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        exit_async(restart: boolean, timeout_msec: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Exit or restart ibus-daemon asynchronously.
         * @param restart Whether restarting the ibus.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied      or `null` if you don't care about the result of the method invocation.
         */
        exit_async(restart: boolean, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Exit or restart ibus-daemon asynchronously.
         * @param restart Whether restarting the ibus.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied      or `null` if you don't care about the result of the method invocation.
         */
        exit_async(restart: boolean, timeout_msec: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an operation started with `ibus_bus_exit_async()`.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to   `ibus_bus_exit_async()`.
         * @returns `true` if the "Exit" call is successful, `false` otherwise.
         * @throws GLib.Error
         */
        exit_async_finish(res: Gio.AsyncResult): boolean;

        /**
         * Get the config instance from {@link IBus.Bus}.
         * @returns An {@link IBus.Config} object which is configurable with `bus`.
         */
        get_config(): Config;

        /**
         * Gets a {@link Gio.DBusConnection} of an {@link IBus.Bus} instance.
         * @returns A {@link Gio.DBusConnection} of an {@link IBus.Bus} instance.
         */
        get_connection(): Gio.DBusConnection;

        /**
         * Get engines by given names synchronously. If some engine names do not exist,
         * this function will simply ignore them, and return rest of engines.
         * TODO(penghuang): add asynchronous version
         * @param names A `null`-terminated array of names.
         * @returns A `null`-terminated array of engines.
         */
        get_engines_by_names(names: string[]): EngineDesc[];

        /**
         * Get the description of current global engine synchronously.
         * @returns The description of current global engine, or `null` if there is no global engine.
         */
        get_global_engine(): EngineDesc;

        /**
         * Get the description of current global engine asynchronously.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        get_global_engine_async(timeout_msec: number, cancellable: Gio.Cancellable | null): globalThis.Promise<EngineDesc>;

        /**
         * Get the description of current global engine asynchronously.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`      if you don't care about the result of the method invocation.
         */
        get_global_engine_async(timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Get the description of current global engine asynchronously.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`      if you don't care about the result of the method invocation.
         */
        get_global_engine_async(timeout_msec: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<EngineDesc> | void;

        /**
         * Finishes an operation started with `ibus_bus_get_global_engine_async_finish()`.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to   `ibus_bus_get_global_engine_async_finish()`.
         * @returns The description of current global engine, or `null` if there is no global engine.
         * @throws GLib.Error
         */
        get_global_engine_async_finish(res: Gio.AsyncResult): EngineDesc;

        /**
         * Get org.freedesktop.DBus.Properties.
         * @param property_name property name in org.freedesktop.DBus.Properties.Get
         * @returns The value in org.freedesktop.DBus.Properties.Get           The returned value must be freed with `g_variant_unref()`.
         */
        get_ibus_property(property_name: string): GLib.Variant;

        /**
         * Get org.freedesktop.DBus.Properties asynchronously.
         * @param property_name property name in org.freedesktop.DBus.Properties.Get
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        get_ibus_property_async(property_name: string, timeout_msec: number, cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Variant>;

        /**
         * Get org.freedesktop.DBus.Properties asynchronously.
         * @param property_name property name in org.freedesktop.DBus.Properties.Get
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied      or `null` if you don't care about the result of the method invocation.
         */
        get_ibus_property_async(property_name: string, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Get org.freedesktop.DBus.Properties asynchronously.
         * @param property_name property name in org.freedesktop.DBus.Properties.Get
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied      or `null` if you don't care about the result of the method invocation.
         */
        get_ibus_property_async(property_name: string, timeout_msec: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Variant> | void;

        /**
         * Finishes an operation started with `ibus_bus_get_ibus_property_async()`.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to   `ibus_bus_get_ibus_property_async()`.
         * @returns The value in org.freedesktop.DBus.Properties.Get           The returned value must be freed with `g_variant_unref()`.
         * @throws GLib.Error
         */
        get_ibus_property_async_finish(res: Gio.AsyncResult): GLib.Variant;

        /**
         * Return the name owner synchronously.
         * @param name Name.
         * @returns Owner of the name. The returned value must be freed with `g_free()`.
         */
        get_name_owner(name: string): string;

        /**
         * Return the name owner asynchronously.
         * @param name Name.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        get_name_owner_async(name: string, timeout_msec: number, cancellable: Gio.Cancellable | null): globalThis.Promise<string>;

        /**
         * Return the name owner asynchronously.
         * @param name Name.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied      or `null` if you don't care about the result of the method invocation.
         */
        get_name_owner_async(name: string, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Return the name owner asynchronously.
         * @param name Name.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied      or `null` if you don't care about the result of the method invocation.
         */
        get_name_owner_async(name: string, timeout_msec: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;

        /**
         * Finishes an operation started with `ibus_bus_get_name_owner_async()`.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to   `ibus_bus_get_name_owner_async()`.
         * @returns Owner of the name. The returned value must be freed with `g_free()`.
         * @throws GLib.Error
         */
        get_name_owner_async_finish(res: Gio.AsyncResult): string;

        /**
         * Return the main service name to use for calls on the ibus connection.
         * @returns at dbus name.
         */
        get_service_name(): string;

        /**
         * Check if the bus's "use_global_engine" option is enabled or not
         * synchronously.
         * @returns TRUE if "use_global_engine" option is enabled.
         * @deprecated since 1.5.3: Currently global engine is always used.
         */
        get_use_global_engine(): boolean;

        /**
         * Check if the bus's "use_global_engine" option is enabled or not asynchronously.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @deprecated since 1.5.3: Currently global engine is always used.
         */
        get_use_global_engine_async(timeout_msec: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Check if the bus's "use_global_engine" option is enabled or not asynchronously.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied      or `null` if you don't care about the result of the method invocation.
         * @deprecated since 1.5.3: Currently global engine is always used.
         */
        get_use_global_engine_async(timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Check if the bus's "use_global_engine" option is enabled or not asynchronously.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied      or `null` if you don't care about the result of the method invocation.
         * @deprecated since 1.5.3: Currently global engine is always used.
         */
        get_use_global_engine_async(timeout_msec: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an operation started with `ibus_bus_get_use_global_engine_async()`.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to   `ibus_bus_get_use_global_engine_async()`.
         * @returns `true` if "use_global_engine" option is enabled.
         * @deprecated since 1.5.3: Currently global engine is always used.
         * @throws GLib.Error
         */
        get_use_global_engine_async_finish(res: Gio.AsyncResult): boolean;

        /**
         * Check if the bus's "use_sys_layout" option is enabled or not synchronously.
         * @returns `true` if "use_sys_layout" option is enabled.
         * @deprecated since 1.5.3: Read dconf value /desktop/ibus/general/use_system_keyboard_layout instead.
         */
        get_use_sys_layout(): boolean;

        /**
         * Check if the bus's "use_sys_layout" option is enabled or not asynchronously.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @deprecated since 1.5.3: Read dconf value /desktop/ibus/general/use_system_keyboard_layout instead.
         */
        get_use_sys_layout_async(timeout_msec: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Check if the bus's "use_sys_layout" option is enabled or not asynchronously.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied      or `null` if you don't care about the result of the method invocation.
         * @deprecated since 1.5.3: Read dconf value /desktop/ibus/general/use_system_keyboard_layout instead.
         */
        get_use_sys_layout_async(timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Check if the bus's "use_sys_layout" option is enabled or not asynchronously.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied      or `null` if you don't care about the result of the method invocation.
         * @deprecated since 1.5.3: Read dconf value /desktop/ibus/general/use_system_keyboard_layout instead.
         */
        get_use_sys_layout_async(timeout_msec: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an operation started with `ibus_bus_get_use_sys_layout_async()`.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to   `ibus_bus_get_use_sys_layout_async()`.
         * @returns TRUE if "use_sys_layout" option is enabled.
         * @deprecated since 1.5.3: Read dconf value /desktop/ibus/general/use_system_keyboard_layout instead.
         * @throws GLib.Error
         */
        get_use_sys_layout_async_finish(res: Gio.AsyncResult): boolean;

        /**
         * This function sends a "HELLO" message to DBus daemon,
         * which replies the unique name of current IBus process.
         * @returns The unique name of IBus process in DBus.
         */
        hello(): string;

        /**
         * Return `true` if `bus` is connected to IBus daemon.
         * @returns `true` if `bus` is connected, `false` otherwise.
         */
        is_connected(): boolean;

        /**
         * Check if the current global engine is enabled or not synchronously.
         * @returns `true` if the current global engine is enabled.
         * @deprecated since 1.5.3: Probably this would be used for Chrome OS only. Currently global engine is always used and `ibus_bus_get_global_engine()` returns NULL until the first global engine is assigned. You can use `ibus_set_log_handler()` to disable a warning when `ibus_bus_get_global_engine()` returns NULL.
         */
        is_global_engine_enabled(): boolean;

        /**
         * Check if the current global engine is enabled or not asynchronously.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @deprecated since 1.5.3: Probably this would be used for Chrome OS only. Currently global engine is always used and `ibus_bus_get_global_engine()` returns NULL until the first global engine is assigned. You can use `ibus_set_log_handler()` to disable a warning when `ibus_bus_get_global_engine()` returns NULL.
         */
        is_global_engine_enabled_async(timeout_msec: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Check if the current global engine is enabled or not asynchronously.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied      or `null` if you don't care about the result of the method invocation.
         * @deprecated since 1.5.3: Probably this would be used for Chrome OS only. Currently global engine is always used and `ibus_bus_get_global_engine()` returns NULL until the first global engine is assigned. You can use `ibus_set_log_handler()` to disable a warning when `ibus_bus_get_global_engine()` returns NULL.
         */
        is_global_engine_enabled_async(timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Check if the current global engine is enabled or not asynchronously.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied      or `null` if you don't care about the result of the method invocation.
         * @deprecated since 1.5.3: Probably this would be used for Chrome OS only. Currently global engine is always used and `ibus_bus_get_global_engine()` returns NULL until the first global engine is assigned. You can use `ibus_set_log_handler()` to disable a warning when `ibus_bus_get_global_engine()` returns NULL.
         */
        is_global_engine_enabled_async(timeout_msec: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an operation started with `ibus_bus_is_global_engine_enabled_async()`.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to   `ibus_bus_is_global_engine_enabled_async()`.
         * @returns `true` if the current global engine is enabled.
         * @deprecated since 1.5.3: Probably this would be used for Chrome OS only. Currently global engine is always used and `ibus_bus_get_global_engine()` returns NULL until the first global engine is assigned. You can use `ibus_set_log_handler()` to disable a warning when `ibus_bus_get_global_engine()` returns NULL.
         * @throws GLib.Error
         */
        is_global_engine_enabled_async_finish(res: Gio.AsyncResult): boolean;

        /**
         * List active engines synchronously.
         * @returns A List of active engines.
         * @deprecated since 1.5.3: Read dconf value /desktop/ibus/general/preload-engines instead.
         */
        list_active_engines(): EngineDesc[];

        /**
         * List active engines asynchronously.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @deprecated since 1.5.3: Read dconf value /desktop/ibus/general/preload-engines instead.
         */
        list_active_engines_async(timeout_msec: number, cancellable: Gio.Cancellable | null): globalThis.Promise<EngineDesc[]>;

        /**
         * List active engines asynchronously.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`      if you don't care about the result of the method invocation.
         * @deprecated since 1.5.3: Read dconf value /desktop/ibus/general/preload-engines instead.
         */
        list_active_engines_async(timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * List active engines asynchronously.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`      if you don't care about the result of the method invocation.
         * @deprecated since 1.5.3: Read dconf value /desktop/ibus/general/preload-engines instead.
         */
        list_active_engines_async(timeout_msec: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<EngineDesc[]> | void;

        /**
         * Finishes an operation started with `ibus_bus_list_active_engines_async()`.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to   `ibus_bus_list_active_engines_async()`.
         * @returns A List of active engines.
         * @deprecated since 1.5.3: Read dconf value /desktop/ibus/general/preload-engines instead.
         * @throws GLib.Error
         */
        list_active_engines_async_finish(res: Gio.AsyncResult): EngineDesc[];

        /**
         * List engines synchronously.
         * @returns A List of engines.
         */
        list_engines(): EngineDesc[];

        /**
         * List engines asynchronously.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        list_engines_async(timeout_msec: number, cancellable: Gio.Cancellable | null): globalThis.Promise<EngineDesc[]>;

        /**
         * List engines asynchronously.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`      if you don't care about the result of the method invocation.
         */
        list_engines_async(timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * List engines asynchronously.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`      if you don't care about the result of the method invocation.
         */
        list_engines_async(timeout_msec: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<EngineDesc[]> | void;

        /**
         * Finishes an operation started with `ibus_bus_list_engines_async()`.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to   `ibus_bus_list_engines_async()`.
         * @returns A List of engines.
         * @throws GLib.Error
         */
        list_engines_async_finish(res: Gio.AsyncResult): EngineDesc[];

        /**
         * Return lists that attached to `bus`.
         * <note><para>[FixMe] Not implemented yet, only return `null`.</para></note>
         * <note><para>[FixMe] Add async version.</para></note>
         * @returns Lists that attached to `bus`.
         */
        list_names(): string[];

        /**
         * Lists the unique bus names of connections currently queued for a bus name.
         * FIXME add an asynchronous version.
         * @param name Name to be queried.
         * @returns The unique bus names of connections currently queued for `name`.
         */
        list_queued_owners(name: string): string[];

        /**
         * Checks whether the name has owner synchronously.
         * @param name Name to be checked.
         * @returns `true` if the name has owner, `false` otherwise.
         */
        name_has_owner(name: string): boolean;

        /**
         * Checks whether the name has owner asynchronously.
         * @param name Name to be checked.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        name_has_owner_async(name: string, timeout_msec: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Checks whether the name has owner asynchronously.
         * @param name Name to be checked.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied      or `null` if you don't care about the result of the method invocation.
         */
        name_has_owner_async(name: string, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Checks whether the name has owner asynchronously.
         * @param name Name to be checked.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied      or `null` if you don't care about the result of the method invocation.
         */
        name_has_owner_async(name: string, timeout_msec: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an operation started with `ibus_bus_name_has_owner_async()`.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to   `ibus_bus_name_has_owner_async()`.
         * @returns `true` if the name has owner, `false` otherwise.
         * @throws GLib.Error
         */
        name_has_owner_async_finish(res: Gio.AsyncResult): boolean;

        /**
         * Start bus components by engine names synchronously.
         * @param names A `null`-terminated array of engine names.
         * @returns `true` if components start. `false` otherwise.
         */
        preload_engines(names: string[]): boolean;

        /**
         * Start bus components by engine names asynchronously.
         * @param names A `null`-terminated array of engine names.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        preload_engines_async(names: string[], timeout_msec: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Start bus components by engine names asynchronously.
         * @param names A `null`-terminated array of engine names.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied      or `null` if you don't care about the result of the method invocation.
         */
        preload_engines_async(names: string[], timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Start bus components by engine names asynchronously.
         * @param names A `null`-terminated array of engine names.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied      or `null` if you don't care about the result of the method invocation.
         */
        preload_engines_async(names: string[], timeout_msec: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an operation started with `ibus_bus_preload_engines_async()`.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to   `ibus_bus_preload_engines_async()`.
         * @returns `true` if component starts. `false` otherwise.
         * @throws GLib.Error
         */
        preload_engines_async_finish(res: Gio.AsyncResult): boolean;

        /**
         * Register a component to an {@link IBus.Bus} synchronously.
         * @param component A input engine component.
         * @returns `true` if the "RegisterComponent" call is successful, `false` otherwise.
         */
        register_component(component: Component): boolean;

        /**
         * Register a component to an {@link IBus.Bus} asynchronously.
         * @param component A input engine component.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        register_component_async(component: Component, timeout_msec: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Register a component to an {@link IBus.Bus} asynchronously.
         * @param component A input engine component.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied      or `null` if you don't care about the result of the method invocation.
         */
        register_component_async(component: Component, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Register a component to an {@link IBus.Bus} asynchronously.
         * @param component A input engine component.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied      or `null` if you don't care about the result of the method invocation.
         */
        register_component_async(component: Component, timeout_msec: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an operation started with `ibus_bus_register_component_async()`.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to   `ibus_bus_register_component_async()`.
         * @returns `true` if the "RegisterComponent" call is successful, `false` otherwise.
         * @throws GLib.Error
         */
        register_component_async_finish(res: Gio.AsyncResult): boolean;

        /**
         * Release a name to IBus daemon synchronously.
         * @param name Name to be released.
         * @returns 0 if failed; positive number otherwise.
         */
        release_name(name: string): number;

        /**
         * Release a name to IBus daemon asynchronously.
         * @param name Name to be released.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        release_name_async(name: string, timeout_msec: number, cancellable: Gio.Cancellable | null): globalThis.Promise<number>;

        /**
         * Release a name to IBus daemon asynchronously.
         * @param name Name to be released.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied      or `null` if you don't care about the result of the method invocation.
         */
        release_name_async(name: string, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Release a name to IBus daemon asynchronously.
         * @param name Name to be released.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied      or `null` if you don't care about the result of the method invocation.
         */
        release_name_async(name: string, timeout_msec: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<number> | void;

        /**
         * Finishes an operation started with `ibus_bus_release_name_async()`.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to   `ibus_bus_release_name_async()`.
         * @returns 0 if failed; positive number otherwise.
         * @throws GLib.Error
         */
        release_name_async_finish(res: Gio.AsyncResult): number;

        /**
         * Remove a match rule to an {@link IBus.Bus} synchronously.
         * @param rule Match rule.
         * @returns `true` if the rule is removed. `false` otherwise.
         */
        remove_match(rule: string): boolean;

        /**
         * Remove a match rule to an IBusBus asynchronously.
         * @param rule Match rule.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        remove_match_async(rule: string, timeout_msec: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Remove a match rule to an IBusBus asynchronously.
         * @param rule Match rule.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied      or `null` if you don't care about the result of the method invocation.
         */
        remove_match_async(rule: string, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Remove a match rule to an IBusBus asynchronously.
         * @param rule Match rule.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied      or `null` if you don't care about the result of the method invocation.
         */
        remove_match_async(rule: string, timeout_msec: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an operation started with `ibus_bus_remove_match_async()`.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to   `ibus_bus_remove_match_async()`.
         * @returns `true` if the rule is removed. `false` otherwise.
         * @throws GLib.Error
         */
        remove_match_async_finish(res: Gio.AsyncResult): boolean;

        /**
         * Request a name from IBus daemon synchronously.
         * @param name Name to be requested.
         * @param flags IBusBusNameFlag.
         * @returns 0 if failed; IBusBusRequestNameReply otherwise.
         */
        request_name(name: string, flags: number): number;

        /**
         * Request a name from IBus daemon asynchronously.
         * @param name Name to be requested.
         * @param flags Flags (FixMe).
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        request_name_async(name: string, flags: number, timeout_msec: number, cancellable: Gio.Cancellable | null): globalThis.Promise<number>;

        /**
         * Request a name from IBus daemon asynchronously.
         * @param name Name to be requested.
         * @param flags Flags (FixMe).
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`      if you don't care about the result of the method invocation.
         */
        request_name_async(name: string, flags: number, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Request a name from IBus daemon asynchronously.
         * @param name Name to be requested.
         * @param flags Flags (FixMe).
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`      if you don't care about the result of the method invocation.
         */
        request_name_async(name: string, flags: number, timeout_msec: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<number> | void;

        /**
         * Finishes an operation started with `ibus_bus_request_name_async()`.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to   `ibus_bus_request_name_async()`.
         * @returns 0 if failed; positive number otherwise.
         * @throws GLib.Error
         */
        request_name_async_finish(res: Gio.AsyncResult): number;

        /**
         * Set current global engine synchronously.
         * @param global_engine A new engine name.
         * @returns `true` if the global engine was set successfully.
         */
        set_global_engine(global_engine: string): boolean;

        /**
         * Set current global engine asynchronously.
         * @param global_engine A new engine name.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        set_global_engine_async(global_engine: string, timeout_msec: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Set current global engine asynchronously.
         * @param global_engine A new engine name.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied      or `null` if you don't care about the result of the method invocation.
         */
        set_global_engine_async(global_engine: string, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Set current global engine asynchronously.
         * @param global_engine A new engine name.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied      or `null` if you don't care about the result of the method invocation.
         */
        set_global_engine_async(global_engine: string, timeout_msec: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an operation started with `ibus_bus_set_global_engine_async()`.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to   `ibus_bus_set_global_engine_async()`.
         * @returns `true` if no IPC errros. `false` otherwise.
         * @throws GLib.Error
         */
        set_global_engine_async_finish(res: Gio.AsyncResult): boolean;

        /**
         * Set global shorcut keys for the Wayland session.
         * @param gtype A {@link IBus.BusGlobalBindingType}.
         * @param keys A `null`-terminated array of {@link IBus.ProcessKeyEventData}.        keycode is used for the selecting direction and the forward direction        in case of 0, otherwise the backward direction.
         * @returns `true` if the global shortcut keys are set. `false` otherwise.
         * @since 1.5.29
         */
        set_global_shortcut_keys(gtype: BusGlobalBindingType, keys: ProcessKeyEventData[]): boolean;

        /**
         * Sete global shorcut keys for the Wayland session asynchronously.
         * @param gtype A {@link IBus.BusGlobalBindingType}.
         * @param keys A `null`-terminated array of {@link IBus.ProcessKeyEventData}.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @since 1.5.29
         */
        set_global_shortcut_keys_async(gtype: BusGlobalBindingType, keys: ProcessKeyEventData[], timeout_msec: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Sete global shorcut keys for the Wayland session asynchronously.
         * @param gtype A {@link IBus.BusGlobalBindingType}.
         * @param keys A `null`-terminated array of {@link IBus.ProcessKeyEventData}.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied      or `null` if you don't care about the result of the method invocation.
         * @since 1.5.29
         */
        set_global_shortcut_keys_async(gtype: BusGlobalBindingType, keys: ProcessKeyEventData[], timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Sete global shorcut keys for the Wayland session asynchronously.
         * @param gtype A {@link IBus.BusGlobalBindingType}.
         * @param keys A `null`-terminated array of {@link IBus.ProcessKeyEventData}.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied      or `null` if you don't care about the result of the method invocation.
         * @since 1.5.29
         */
        set_global_shortcut_keys_async(gtype: BusGlobalBindingType, keys: ProcessKeyEventData[], timeout_msec: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an operation started with `ibus_bus_set_global_shortcut_keys_async()`.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to   `ibus_bus_set_global_shortcut_keys_async()`.
         * @returns `true` if the global shortcut keys are set. `false` otherwise.
         * @since 1.5.29
         * @throws GLib.Error
         */
        set_global_shortcut_keys_async_finish(res: Gio.AsyncResult): boolean;

        /**
         * Set org.freedesktop.DBus.Properties.
         * @param property_name property name in org.freedesktop.DBus.Properties.Set
         * @param value value in org.freedesktop.DBus.Properties.Set
         */
        set_ibus_property(property_name: string, value: GLib.Variant): void;

        /**
         * Set org.freedesktop.DBus.Properties asynchronously.
         * @param property_name property name in org.freedesktop.DBus.Properties.Set
         * @param value value in org.freedesktop.DBus.Properties.Set
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        set_ibus_property_async(property_name: string, value: GLib.Variant, timeout_msec: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Set org.freedesktop.DBus.Properties asynchronously.
         * @param property_name property name in org.freedesktop.DBus.Properties.Set
         * @param value value in org.freedesktop.DBus.Properties.Set
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied      or `null` if you don't care about the result of the method invocation.
         */
        set_ibus_property_async(property_name: string, value: GLib.Variant, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Set org.freedesktop.DBus.Properties asynchronously.
         * @param property_name property name in org.freedesktop.DBus.Properties.Set
         * @param value value in org.freedesktop.DBus.Properties.Set
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied      or `null` if you don't care about the result of the method invocation.
         */
        set_ibus_property_async(property_name: string, value: GLib.Variant, timeout_msec: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an operation started with `ibus_bus_set_ibus_property_async()`.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to   `ibus_bus_set_ibus_property_async()`.
         * @returns `true` if property is set with async. `false` failed.
         * @throws GLib.Error
         */
        set_ibus_property_async_finish(res: Gio.AsyncResult): boolean;

        /**
         * Start or stop watching the NameOwnerChanged DBus signal.
         * @param watch `true` if you want ibusbus to emit "name-owner-changed" signal when ibus-daemon emits the NameOwnerChanged DBus signal.
         */
        set_watch_dbus_signal(watch: boolean): void;

        /**
         * Start or stop watching the GlobalEngineChanged IBus signal.
         * @param watch `true` if you want ibusbus to emit "global-engine-changed" signal when ibus-daemon emits the GlobalEngineChanged IBus signal.
         */
        set_watch_ibus_signal(watch: boolean): void;
    }


    namespace Component {
        // Signal signatures
        interface SignalSignatures extends Serializable.SignalSignatures {
            "notify::author": (pspec: GObject.ParamSpec) => void;
            "notify::command-line": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::homepage": (pspec: GObject.ParamSpec) => void;
            "notify::license": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::textdomain": (pspec: GObject.ParamSpec) => void;
            "notify::version": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Serializable.ConstructorProps {
            author: string;
            command_line: string;
            commandLine: string;
            description: string;
            homepage: string;
            license: string;
            name: string;
            textdomain: string;
            version: string;
        }
    }

    /**
     * An IBusComponent is an executable program.
     * It provides services such as user interface, configuration,
     * and input method engine (IME).
     * 
     * It is recommended that IME developers provide
     * a component XML file and
     * load the XML file by `ibus_component_new_from_file()`.
     * 
     * The format of a component XML file is described  at
     * <ulink url="https://github.com/ibus/ibus/wiki/DevXML">https://github.com/ibus/ibus/wiki/DevXML</ulink>
     * @gir-type Class
     */
    class Component extends Serializable {
        static $gtype: GObject.GType<Component>;

        // Properties
        /**
         * The author of component
         * @construct-only
         * @default null
         */
        get author(): string;

        /**
         * The exec path of component
         * @construct-only
         * @default null
         */
        get command_line(): string;

        /**
         * The exec path of component
         * @construct-only
         * @default null
         */
        get commandLine(): string;

        /**
         * The description of component
         * @construct-only
         * @default null
         */
        get description(): string;

        /**
         * The homepage of component
         * @construct-only
         * @default null
         */
        get homepage(): string;

        /**
         * The license of component
         * @construct-only
         * @default null
         */
        get license(): string;

        /**
         * The name of component
         * @construct-only
         * @default null
         */
        get name(): string;

        /**
         * The textdomain of component
         * @construct-only
         * @default null
         */
        get textdomain(): string;

        /**
         * The version of component
         * @construct-only
         * @default null
         */
        get version(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Component.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Component.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](name: string, description: string, version: string, license: string, author: string, homepage: string, command_line: string, textdomain: string): Component;

        // Conflicted with IBus.Serializable.new
        static ["new"](...args: never[]): any;

        static new_from_file(filename: string): Component;

        static new_from_xml_node(node: XML): Component;

        // Signals
        /** @signal */
        connect<K extends keyof Component.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Component.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Component.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Component.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Component.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Component.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Add an engine to {@link IBus.Component} according to the description in `engine`.
         * @param engine A description of an engine.
         */
        add_engine(engine: EngineDesc): void;

        /**
         * Add an observed path to {@link IBus.Component}.
         * @param path Observed path to be added.
         * @param access_fs `true` for filling the file status; `false` otherwise.
         */
        add_observed_path(path: string, access_fs: boolean): void;

        /**
         * Check whether the observed paths of component is modified.
         * @returns `true` if at least one of the observed paths is modified; `false` otherwise.
         */
        check_modification(): boolean;

        /**
         * Gets the author property in {@link IBus.Component}. It should not be freed.
         * @returns author property in {@link IBus.Component}
         */
        get_author(): string;

        /**
         * Gets the description property in {@link IBus.Component}. It should not be freed.
         * @returns description property in {@link IBus.Component}
         */
        get_description(): string;

        /**
         * Gets the engines of this component.
         * @returns A newly allocated GList that contains engines.
         */
        get_engines(): EngineDesc[];

        /**
         * Gets the exec property in {@link IBus.Component}. It should not be freed.
         * @returns exec property in {@link IBus.Component}
         */
        get_exec(): string;

        /**
         * Gets the homepage property in {@link IBus.Component}. It should not be freed.
         * @returns homepage property in {@link IBus.Component}
         */
        get_homepage(): string;

        /**
         * Gets the license property in {@link IBus.Component}. It should not be freed.
         * @returns license property in {@link IBus.Component}
         */
        get_license(): string;

        /**
         * Gets the name property in {@link IBus.Component}. It should not be freed.
         * @returns name property in {@link IBus.Component}
         */
        get_name(): string;

        /**
         * Gets the observed paths of this component.
         * @returns A newly allocated GList that contains observed paths.
         */
        get_observed_paths(): ObservedPath[];

        /**
         * Gets the textdomain property in {@link IBus.Component}. It should not be freed.
         * @returns textdomain property in {@link IBus.Component}
         */
        get_textdomain(): string;

        /**
         * Gets the version property in {@link IBus.Component}. It should not be freed.
         * @returns version property in {@link IBus.Component}
         */
        get_version(): string;

        /**
         * Output {@link IBus.Component} as an XML-formatted string.
         * The output string can be then shown on the screen or written to file.
         * @param output GString that holds the result.
         * @param indent level of indent.
         */
        output(output: GLib.String, indent: number): void;

        /**
         * Output engine description  as an XML-formatted string.
         * The output string can be then shown on the screen or written to file.
         * @param output GString that holds the result.
         * @param indent level of indent.
         */
        output_engines(output: GLib.String, indent: number): void;
    }


    namespace Config {
        // Signal signatures
        interface SignalSignatures extends Proxy.SignalSignatures {
            /**
             * Emitted when configuration value is changed.
             * <note><para>Argument `user_data` is ignored in this function.</para></note>
             * @signal
             * @run-last
             */
            "value-changed": (section: string, name: string, value: GLib.Variant) => void;
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Proxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps {}
    }

    /**
     * An IBusConfig provides engine configuration methods
     * such as get and set the configure settings to configuration file.
     * 
     * Currently, IBusConfig supports gconf.
     * @gir-type Class
     */
    class Config extends Proxy implements Gio.AsyncInitable<Config>, Gio.DBusInterface, Gio.Initable {
        static $gtype: GObject.GType<Config>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Config.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Config.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](connection: Gio.DBusConnection, cancellable: Gio.Cancellable | null): Config;

        // Conflicted with Gio.DBusProxy.new
        static ["new"](...args: never[]): any;

        static new_async_finish(res: Gio.AsyncResult): Config;

        // Signals
        /** @signal */
        connect<K extends keyof Config.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Config.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Config.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Config.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Config.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Config.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * New an {@link IBus.Config} asynchronously.
         * @param connection An {@link Gio.DBusConnection}.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.      The callback should not be `null`.
         */
        static new_async(connection: Gio.DBusConnection, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Config> | null): void;

        // Methods
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
         * See also: `ibus_config_set_value()`.
         * @param section Section name of the configuration option.
         * @param name Name of the configure option.
         * @returns A {@link GLib.Variant} or `null`. Free with `g_variant_unref()`.
         */
        get_value(section: string, name: string): GLib.Variant;

        /**
         * Get the value of a configuration option asynchronously.
         * 
         * See also: `ibus_config_get_value()`.
         * @param section Section name of the configuration option.
         * @param name Name of the configure option.
         * @param timeout_ms The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        get_value_async(section: string, name: string, timeout_ms: number, cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Variant>;

        /**
         * Get the value of a configuration option asynchronously.
         * 
         * See also: `ibus_config_get_value()`.
         * @param section Section name of the configuration option.
         * @param name Name of the configure option.
         * @param timeout_ms The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback Callback function to invoke when the return value is ready.
         */
        get_value_async(section: string, name: string, timeout_ms: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Get the value of a configuration option asynchronously.
         * 
         * See also: `ibus_config_get_value()`.
         * @param section Section name of the configuration option.
         * @param name Name of the configure option.
         * @param timeout_ms The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback Callback function to invoke when the return value is ready.
         */
        get_value_async(section: string, name: string, timeout_ms: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Variant> | void;

        /**
         * Finish get value of a configuration option.
         * @param result A {@link Gio.AsyncResult}.
         * @returns A {@link GLib.Variant} or `null` if error is set. Free with `g_variant_unref()`. See also: `ibus_config_get_value_async()`.
         * @throws GLib.Error
         */
        get_value_async_finish(result: Gio.AsyncResult): GLib.Variant;

        /**
         * Get all values in a section synchronously.
         * @param section Section name of the configuration option.
         * @returns A {@link GLib.Variant} or `null`. Free with `g_variant_unref()`. See also: `ibus_config_set_value()`.
         */
        get_values(section: string): GLib.Variant;

        /**
         * Get all values in a section asynchronously.
         * 
         * See also: `ibus_config_get_values()`.
         * @param section Section name of the configuration option.
         * @param timeout_ms The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        get_values_async(section: string, timeout_ms: number, cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Variant>;

        /**
         * Get all values in a section asynchronously.
         * 
         * See also: `ibus_config_get_values()`.
         * @param section Section name of the configuration option.
         * @param timeout_ms The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback Callback function to invoke when the return value is ready.
         */
        get_values_async(section: string, timeout_ms: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Get all values in a section asynchronously.
         * 
         * See also: `ibus_config_get_values()`.
         * @param section Section name of the configuration option.
         * @param timeout_ms The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback Callback function to invoke when the return value is ready.
         */
        get_values_async(section: string, timeout_ms: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<GLib.Variant> | void;

        /**
         * Finish get values in a section.
         * @param result A {@link Gio.AsyncResult}.
         * @returns A {@link GLib.Variant} or `null` if error is set. Free with `g_variant_unref()`. See also: `ibus_config_get_values_async()`.
         * @throws GLib.Error
         */
        get_values_async_finish(result: Gio.AsyncResult): GLib.Variant;

        /**
         * Set the value of a configuration option synchronously.
         * @param section Section name of the configuration option.
         * @param name Name of the configure option its self.
         * @param value A {@link GLib.Variant} that holds the value. If the value is floating, the function takes ownership of it.
         * @returns `true` if succeed; `false` otherwise. See also: `ibus_config_get_value()`.
         */
        set_value(section: string, name: string, value: GLib.Variant): boolean;

        /**
         * Set the value of a configuration option asynchronously.
         * 
         * See also: `ibus_config_set_value()`.
         * @param section Section name of the configuration option.
         * @param name Name of the configure option.
         * @param value A {@link GLib.Variant} that holds the value. If the value is floating, the function takes ownership of it.
         * @param timeout_ms The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        set_value_async(section: string, name: string, value: GLib.Variant, timeout_ms: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Set the value of a configuration option asynchronously.
         * 
         * See also: `ibus_config_set_value()`.
         * @param section Section name of the configuration option.
         * @param name Name of the configure option.
         * @param value A {@link GLib.Variant} that holds the value. If the value is floating, the function takes ownership of it.
         * @param timeout_ms The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback Callback function to invoke when the return value is ready.
         */
        set_value_async(section: string, name: string, value: GLib.Variant, timeout_ms: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Set the value of a configuration option asynchronously.
         * 
         * See also: `ibus_config_set_value()`.
         * @param section Section name of the configuration option.
         * @param name Name of the configure option.
         * @param value A {@link GLib.Variant} that holds the value. If the value is floating, the function takes ownership of it.
         * @param timeout_ms The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback Callback function to invoke when the return value is ready.
         */
        set_value_async(section: string, name: string, value: GLib.Variant, timeout_ms: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finish set value of a configuration option.
         * @param result A {@link Gio.AsyncResult}.
         * @returns `true` or `false` if error is set. See also: `ibus_config_set_value_async()`.
         * @throws GLib.Error
         */
        set_value_async_finish(result: Gio.AsyncResult): boolean;

        /**
         * Remove an entry of a configuration option.
         * @param section Section name of the configuration option.
         * @param name Name of the configure option its self.
         * @returns `true` if succeed; `false` otherwise. See also: `ibus_config_get_value()`.
         */
        unset(section: string, name: string): boolean;

        /**
         * Unsubscribe from the configuration option change notification.
         * @param section Section name of the configuration option.
         * @param name Name of the configure option its self.
         * @returns `true` if succeed; `false` otherwise. See also: ibus_config_watch.
         */
        unwatch(section: string | null, name: string | null): boolean;

        /**
         * Subscribe to the configuration option change notification.
         * 
         * Until this function is called, every change will be notified to the
         * client through {@link IBus.Config.SignalSignatures.value_changed | IBus.Config::value-changed} signal.  Clients should
         * call `ibus_config_watch()` with the sections they are interested in,
         * to reduce the number of D-Bus messages.
         * @param section Section name of the configuration option.
         * @param name Name of the configure option its self.
         * @returns `true` if succeed; `false` otherwise. See also: `ibus_config_unwatch()`.
         */
        watch(section: string | null, name: string | null): boolean;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @since 2.22
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @since 2.22
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @since 2.22
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns `true` if successful. If an error has occurred, this function will return `false` and set `error` appropriately if present.
         * @since 2.22
         * @throws GLib.Error
         */
        init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or `null` on error.
         * @param res the {@link Gio.AsyncResult} from the callback
         * @returns a newly created {@link GObject.Object},      or `null` on error. Free with `g_object_unref()`.
         * @since 2.22
         * @throws GLib.Error
         */
        new_finish(res: Gio.AsyncResult): Config;

        /**
         * @param args 
         */
        // Conflicted with Gio.DBusProxy.new_finish
        new_finish(...args: never[]): any;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @since 2.22
         * @virtual
         */
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @since 2.22
         * @virtual
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
    }


    namespace ConfigService {
        // Signal signatures
        interface SignalSignatures extends Service.SignalSignatures {
            "notify::connection": (pspec: GObject.ParamSpec) => void;
            "notify::object-path": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Service.ConstructorProps {}
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
     * @gir-type Class
     */
    class ConfigService extends Service {
        static $gtype: GObject.GType<ConfigService>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ConfigService.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ConfigService.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](connection: Gio.DBusConnection): ConfigService;

        // Conflicted with IBus.Object.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof ConfigService.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ConfigService.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ConfigService.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ConfigService.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ConfigService.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ConfigService.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param section 
         * @param name 
         * @virtual
         */
        vfunc_get_value(section: string, name: string): GLib.Variant;

        /**
         * @param section 
         * @virtual
         */
        vfunc_get_values(section: string): GLib.Variant;

        /**
         * @param section 
         * @param name 
         * @param value 
         * @virtual
         */
        vfunc_set_value(section: string, name: string, value: GLib.Variant): boolean;

        /**
         * @param section 
         * @param name 
         * @virtual
         */
        vfunc_unset_value(section: string, name: string): boolean;

        // Methods
        /**
         * Change a value of a configuration option
         * by sending a "ValueChanged" message to IBus service.
         * @param section Section name of the configuration option.
         * @param name Name of the configure option.
         * @param value GVariant that holds the value.
         */
        value_changed(section: string, name: string, value: GLib.Variant): void;
    }


    namespace EmojiData {
        // Signal signatures
        interface SignalSignatures extends Serializable.SignalSignatures {
            "notify::annotations": (pspec: GObject.ParamSpec) => void;
            "notify::category": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::emoji": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Serializable.ConstructorProps {
            annotations: never;
            category: string;
            description: string;
            emoji: string;
        }
    }

    /**
     * Emoji data likes emoji unicode, annotations, description, category.
     * You can get extended values with g_object_get_properties.
     * @gir-type Class
     */
    class EmojiData extends Serializable {
        static $gtype: GObject.GType<EmojiData>;

        // Properties
        /**
         * The emoji annotations
         */
        get annotations(): null;
        set annotations(val: never);

        /**
         * The emoji category
         * @construct-only
         */
        get category(): string;

        /**
         * The emoji description
         */
        get description(): string;
        set description(val: string);

        /**
         * The emoji character
         * @construct-only
         * @default null
         */
        get emoji(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EmojiData.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<EmojiData.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof EmojiData.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EmojiData.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EmojiData.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EmojiData.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EmojiData.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EmojiData.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param path A path of the saved dictionary file.
         */
        static load(path: string): EmojiData[];

        /**
         * Save the list of {@link IBus.EmojiData} to the cache file.
         * @param path A path of the saved emoji data.
         * @param list A list of emoji data.
         */
        static save(path: string, list: EmojiData[]): void;

        // Methods
        /**
         * Gets the annotation list in {@link IBus.EmojiData}. It should not be freed.
         * @returns annotation list property in {@link IBus.EmojiData}
         */
        get_annotations(): string[];

        /**
         * Gets the emoji category in {@link IBus.EmojiData}. It should not be freed.
         * @returns category property in {@link IBus.EmojiData}
         */
        get_category(): string;

        /**
         * Gets the emoji description in {@link IBus.EmojiData}. It should not be freed.
         * @returns description property in {@link IBus.EmojiData}
         */
        get_description(): string;

        /**
         * Gets the emoji character in {@link IBus.EmojiData}. It should not be freed.
         * @returns emoji property in {@link IBus.EmojiData}
         */
        get_emoji(): string;

        /**
         * Sets the annotation list in {@link IBus.EmojiData}.
         * @param annotations List of emoji annotations
         */
        set_annotations(annotations: string[]): void;

        /**
         * Sets the description in {@link IBus.EmojiData}.
         * @param description An emoji description
         */
        set_description(description: string): void;
    }


    namespace Engine {
        // Signal signatures
        interface SignalSignatures extends Service.SignalSignatures {
            /**
             * Emitted when a hand writing operation is cancelled.
             * Implement the member function IBusEngineClass::cancel_hand_writing
             * in extended class to receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "cancel-hand-writing": (n_strokes: number) => void;
            /**
             * Emitted when candidate on lookup table is clicked.
             * Implement the member function IBusEngineClass::candidate_clicked
             * in extended class to receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "candidate-clicked": (index: number, button: number, state: number) => void;
            /**
             * Emitted when the down cursor button is pressed.
             * Implement the member function IBusEngineClass::cursor_down
             * in extended class to receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "cursor-down": () => void;
            /**
             * Emitted when the up cursor button is pressed.
             * Implement the member function IBusEngineClass::cursor_up
             * in extended class to receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "cursor-up": () => void;
            /**
             * Emitted when the IME is disabled.
             * Implement the member function IBusEngineClass::disable
             * in extended class to receive this signal.
             * 
             * See also:  `ibus_bus_set_global_engine()`.
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            disable: () => void;
            /**
             * Emitted when the IME is enabled.
             * Implement the member function IBusEngineClass::enable
             * in extended class to receive this signal.
             * 
             * See also:  `ibus_bus_set_global_engine()`.
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            enable: () => void;
            /**
             * Emitted when the client application get the focus.
             * Implement the member function IBusEngineClass::focus_in
             * in extended class to receive this signal.
             * 
             * See also: `ibus_input_context_focus_in()`
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "focus-in": () => void;
            /**
             * Emitted when the client application get the focus.
             * Implement the member function IBusEngineClass::focus_in
             * in extended class to receive this signal.
             * `object_path` is a unique id by input context.
             * `client` indicates a client type:
             * 'fake':    focus is on desktop background or other programs where no
             *            input is possible
             * 'xim':     old X11 programs like xterm, emacs, ...
             *            GTK3 programs in a Gnome Xorg session when GTK_IM_MODULE
             *            is unset also use xim
             * 'gtk-im:&lt;client-name&gt;':  Gtk2 input module is used
             * 'gtk3-im:&lt;client-name&gt;': Gtk3 input module is used
             * 'gtk4-im:&lt;client-name&gt;': Gtk4 input module is used
             *            In case of the Gtk input modules, the name of the
             *            client is also shown after the “:”, for example
             *            like 'gtk3-im:firefox', 'gtk4-im:gnome-text-editor', …
             * 'gnome-shell': Entries handled by gnome-shell
             *                (like the command line dialog opened with Alt+F2
             *                or the search field when pressing the Super key.)
             *                When GTK_IM_MODULE is unset in a Gnome Wayland session
             *                all programs which would show 'gtk3-im' or 'gtk4-im'
             *                with GTK_IM_MODULE=ibus then show 'gnome-shell'
             *                instead.
             * 'Qt':      Qt4 programs like keepassx-2.0.3 …
             * 'QIBusInputContext': Qt5 programs like keepassxc-2.7.1, anki-2.1.15
             *                      telegram-desktop-3.7.3,
             * 
             * You need to set {@link IBus.Engine.SignalSignatures.has_focus_id | IBus.Engine::has-focus-id} property to `true` when you
             * construct an {@link IBus.Engine} to use this class method.
             * 
             * See also: `ibus_input_context_focus_in()`
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "focus-in-id": (object_path: string, client: string) => void;
            /**
             * Emitted when the client application  lost the focus.
             * Implement the member function IBusEngineClass::focus_out
             * in extended class to receive this signal.
             * 
             * See also: `ibus_input_context_focus_out()`
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "focus-out": () => void;
            /**
             * Emitted when the client application  lost the focus.
             * Implement the member function IBusEngineClass::focus_out
             * in extended class to receive this signal.
             * `object_path` is a unique id by input context.
             * You need to set {@link IBus.Engine.SignalSignatures.has_focus_id | IBus.Engine::has-focus-id} property to `true` when you
             * construct an {@link IBus.Engine} to use this class method.
             * 
             * See also: `ibus_input_context_focus_out()`
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "focus-out-id": (object_path: string) => void;
            /**
             * Emitted when the page-down button is pressed.
             * Implement the member function IBusEngineClass::page_down
             * in extended class to receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "page-down": () => void;
            /**
             * Emitted when the page-up button is pressed.
             * Implement the member function IBusEngineClass::page_up
             * in extended class to receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "page-up": () => void;
            /**
             * Emitted when a hand writing operation is cancelled.
             * Implement the member function IBusEngineClass::cancel_hand_writing
             * in extended class to receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "process-hand-writing-event": (coordinates: null, coordinates_len: number) => void;
            /**
             * Emitted when a key event is received.
             * Implement the member function IBusEngineClass::process_key_event
             * in extended class to receive this signal.
             * Both the key symbol and keycode are passed to the member function.
             * See `ibus_input_context_process_key_event()` for further explanation of
             * key symbol, keycode and which to use.
             * @signal
             * @run-last
             */
            "process-key-event": (keyval: number, keycode: number, state: number) => boolean | void;
            /**
             * Emitted when a property is activated or change changed.
             * Implement the member function IBusEngineClass::property_activate
             * in extended class to receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "property-activate": (name: string, state: number) => void;
            /**
             * Emitted when a property is hidden.
             * Implement the member function IBusEngineClass::property_hide
             * in extended class to receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "property-hide": (name: string) => void;
            /**
             * Emitted when a property is shown.
             * Implement the member function IBusEngineClass::property_side
             * in extended class to receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "property-show": (name: string) => void;
            /**
             * Emitted when the IME is reset.
             * Implement the member function IBusEngineClass::reset
             * in extended class to receive this signal.
             * 
             * See also:  `ibus_input_context_reset()`.
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            reset: () => void;
            /**
             * Emitted when the client application capabilities is set.
             * Implement the member function IBusEngineClass::set_capabilities
             * in extended class to receive this signal.
             * 
             * See also:  `ibus_input_context_set_capabilities()`.
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "set-capabilities": (caps: number) => void;
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
             * @signal
             * @run-last
             */
            "set-content-type": (purpose: number, hints: number) => void;
            /**
             * Emitted when the location of IME is set.
             * Implement the member function IBusEngineClass::set_cursor_location
             * in extended class to receive this signal.
             * 
             * See also:  `ibus_input_context_set_cursor_location()`.
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "set-cursor-location": (x: number, y: number, w: number, h: number) => void;
            /**
             * Emitted when a surrounding text is set.
             * Implement the member function IBusEngineClass::set_surrounding_text
             * in extended class to receive this signal.
             * If anchor_pos equals to cursor_pos, it means "there are no selection"
             * or "does not support selection retrival".
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "set-surrounding-text": (text: GObject.Object, cursor_pos: number, anchor_pos: number) => void;
            "notify::active-surrounding-text": (pspec: GObject.ParamSpec) => void;
            "notify::engine-name": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus-id": (pspec: GObject.ParamSpec) => void;
            "notify::connection": (pspec: GObject.ParamSpec) => void;
            "notify::object-path": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Service.ConstructorProps {
            active_surrounding_text: boolean;
            activeSurroundingText: boolean;
            engine_name: string;
            engineName: string;
            has_focus_id: boolean;
            hasFocusId: boolean;
        }
    }

    /**
     * An IBusEngine provides infrastructure for input method engine.
     * Developers can "extend" this class for input method engine development.
     * 
     * see_also: {@link IBus.Component}, {@link IBus.EngineDesc}
     * @gir-type Class
     */
    class Engine extends Service {
        static $gtype: GObject.GType<Engine>;

        // Properties
        /**
         * When this property is set to `true`, "RequireSurroundingText" D-Bus
         * signal will be called by ibus-daemon on every focus-in/out event, with
         * no need for the engine to call `ibus_engine_get_surrounding_text()`.
         * This property can only be set at construct time.
         * @construct-only
         * @default false
         */
        get active_surrounding_text(): boolean;

        /**
         * When this property is set to `true`, "RequireSurroundingText" D-Bus
         * signal will be called by ibus-daemon on every focus-in/out event, with
         * no need for the engine to call `ibus_engine_get_surrounding_text()`.
         * This property can only be set at construct time.
         * @construct-only
         * @default false
         */
        get activeSurroundingText(): boolean;

        /**
         * Name of this IBusEngine.
         * @construct-only
         * @default noname
         */
        get engine_name(): string;

        /**
         * Name of this IBusEngine.
         * @construct-only
         * @default noname
         */
        get engineName(): string;

        /**
         * Use {@link IBus.Engine.SignalSignatures.focus_in_id | IBus.Engine::focus_in_id}()/focus_out_id() class method insteads of
         * `focus_in()`/focus_out() class methods when this property is set to `true`.
         * Otherwise, use {@link IBus.Engine.SignalSignatures.focus_in | IBus.Engine::focus_in}()/focus_out class methods.
         * This property can only be set at construct time.
         * 
         * See also: IBusEngine::focus-in-id
         * @construct-only
         * @default false
         */
        get has_focus_id(): boolean;

        /**
         * Use {@link IBus.Engine.SignalSignatures.focus_in_id | IBus.Engine::focus_in_id}()/focus_out_id() class method insteads of
         * `focus_in()`/focus_out() class methods when this property is set to `true`.
         * Otherwise, use {@link IBus.Engine.SignalSignatures.focus_in | IBus.Engine::focus_in}()/focus_out class methods.
         * This property can only be set at construct time.
         * 
         * See also: IBusEngine::focus-in-id
         * @construct-only
         * @default false
         */
        get hasFocusId(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Engine.SignalSignatures;

        // Fields
        enabled: boolean;

        has_focus: boolean;

        cursor_area: Rectangle;

        client_capabilities: number;

        // Constructors
        constructor(properties?: Partial<Engine.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](engine_name: string, object_path: string, connection: Gio.DBusConnection): Engine;

        // Conflicted with IBus.Service.new
        static ["new"](...args: never[]): any;

        static new_with_type(engine_type: GObject.GType, engine_name: string, object_path: string, connection: Gio.DBusConnection): Engine;

        // Signals
        /** @signal */
        connect<K extends keyof Engine.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Engine.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Engine.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Engine.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Engine.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Engine.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param n_strokes 
         * @virtual
         */
        vfunc_cancel_hand_writing(n_strokes: number): void;

        /**
         * @param index 
         * @param button 
         * @param state 
         * @virtual
         */
        vfunc_candidate_clicked(index: number, button: number, state: number): void;

        /**
         * @virtual
         */
        vfunc_cursor_down(): void;

        /**
         * @virtual
         */
        vfunc_cursor_up(): void;

        /**
         * @virtual
         */
        vfunc_disable(): void;

        /**
         * @virtual
         */
        vfunc_enable(): void;

        /**
         * @virtual
         */
        vfunc_focus_in(): void;

        /**
         * @param object_path 
         * @param client 
         * @virtual
         */
        vfunc_focus_in_id(object_path: string, client: string): void;

        /**
         * @virtual
         */
        vfunc_focus_out(): void;

        /**
         * @param object_path 
         * @virtual
         */
        vfunc_focus_out_id(object_path: string): void;

        /**
         * @virtual
         */
        vfunc_page_down(): void;

        /**
         * @virtual
         */
        vfunc_page_up(): void;

        /**
         * @param coordinates 
         * @param coordinates_len 
         * @virtual
         */
        vfunc_process_hand_writing_event(coordinates: number, coordinates_len: number): void;

        /**
         * @param keyval 
         * @param keycode 
         * @param state 
         * @virtual
         */
        vfunc_process_key_event(keyval: number, keycode: number, state: number): boolean;

        /**
         * @param prop_name 
         * @param prop_state 
         * @virtual
         */
        vfunc_property_activate(prop_name: string, prop_state: number): void;

        /**
         * @param prop_name 
         * @virtual
         */
        vfunc_property_hide(prop_name: string): void;

        /**
         * @param prop_name 
         * @virtual
         */
        vfunc_property_show(prop_name: string): void;

        /**
         * @virtual
         */
        vfunc_reset(): void;

        /**
         * @param caps 
         * @virtual
         */
        vfunc_set_capabilities(caps: number): void;

        /**
         * @param purpose 
         * @param hints 
         * @virtual
         */
        vfunc_set_content_type(purpose: number, hints: number): void;

        /**
         * @param x 
         * @param y 
         * @param w 
         * @param h 
         * @virtual
         */
        vfunc_set_cursor_location(x: number, y: number, w: number, h: number): void;

        /**
         * @param text 
         * @param cursor_index 
         * @param anchor_pos 
         * @virtual
         */
        vfunc_set_surrounding_text(text: Text, cursor_index: number, anchor_pos: number): void;

        // Methods
        /**
         * Commit output of input method to IBus client.
         * 
         * (Note: The text object will be released, if it is floating.
         *  If caller want to keep the object, caller should make the object
         *  sink by g_object_ref_sink.)
         * @param text String commit to IBusEngine.
         */
        commit_text(text: Text): void;

        /**
         * Delete surrounding text.
         * @param offset The offset of the first char.
         * @param nchars Number of chars to be deleted.
         */
        delete_surrounding_text(offset: number, nchars: number): void;

        /**
         * Forward the key event.
         * @param keyval KeySym.
         * @param keycode keyboard scancode.
         * @param state Key modifier flags.
         */
        forward_key_event(keyval: number, keycode: number, state: number): void;

        /**
         * Get content-type (primary purpose and hints) of the current input
         * context.
         * 
         * See also: {@link IBus.Engine.SignalSignatures.set_content_type | IBus.Engine::set-content-type}
         */
        get_content_type(): [number, number];

        /**
         * Return the name of {@link IBus.Engine}.
         * @returns Name of {@link IBus.Engine}.
         */
        get_name(): string;

        /**
         * Get surrounding text.
         * 
         * It is also used to tell the input-context that the engine will
         * utilize surrounding-text.  In that case, it must be called in
         * {@link IBus.Engine.SignalSignatures.enable | IBus.Engine::enable} handler, with both `text` and `cursor` set to
         * `null`.
         * 
         * See also: {@link IBus.Engine.SignalSignatures.set_surrounding_text | IBus.Engine::set-surrounding-text}
         */
        get_surrounding_text(): [Text | null, number, number];

        /**
         * Hide the auxiliary bar.
         */
        hide_auxiliary_text(): void;

        /**
         * Hide the lookup table.
         */
        hide_lookup_table(): void;

        /**
         * Hide the pre-edit buffer.
         */
        hide_preedit_text(): void;

        /**
         * Register and show properties in language bar.
         * 
         * (Note: The prop_list object will be released, if it is floating.
         *  If caller want to keep the object, caller should make the object
         *  sink by g_object_ref_sink.)
         * @param prop_list Property List.
         */
        register_properties(prop_list: PropList): void;

        /**
         * Send a message to the Engine for the focus-less notification popup.
         * This is used for the user errors in Wayland mainly but in Xorg too.
         * @param message An {@link IBus.Message}.
         * @since 1.5.33
         */
        send_message(message: Message): void;

        /**
         * Show the auxiliary bar.
         */
        show_auxiliary_text(): void;

        /**
         * Show the lookup table.
         */
        show_lookup_table(): void;

        /**
         * Show the pre-edit buffer.
         */
        show_preedit_text(): void;

        /**
         * Update the auxiliary bar.
         * 
         * (Note: The text object will be released, if it is floating.
         *  If caller want to keep the object, caller should make the object
         *  sink by g_object_ref_sink.)
         * @param text Update content.
         * @param visible Whether the auxiliary text bar is visible.
         */
        update_auxiliary_text(text: Text, visible: boolean): void;

        /**
         * Update the lookup table.
         * 
         * (Note: The table object will be released, if it is floating.
         *  If caller want to keep the object, caller should make the object
         *  sink by g_object_ref_sink.)
         * @param lookup_table An lookup_table.
         * @param visible Whether the lookup_table is visible.
         */
        update_lookup_table(lookup_table: LookupTable, visible: boolean): void;

        /**
         * Fast update for big lookup table.
         * 
         * If size of lookup table is not over table page size *4,
         * then it calls `ibus_engine_update_lookup_table()`.
         * 
         * (Note: The table object will be released, if it is floating.
         *  If caller want to keep the object, caller should make the object
         *  sink by g_object_ref_sink.)
         * @param lookup_table An lookup_table.
         * @param visible Whether the lookup_table is visible.
         */
        update_lookup_table_fast(lookup_table: LookupTable, visible: boolean): void;

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
        update_preedit_text(text: Text, cursor_pos: number, visible: boolean): void;

        /**
         * Update the pre-edit buffer with commit mode. Similar to
         * `ibus_engine_update_preedit_text()`, this function allows users to specify
         * the behavior on focus out when the pre-edit buffer is visible.
         * 
         * If `mode` is IBUS_ENGINE_PREEDIT_COMMIT, contents of the pre-edit buffer
         * will be committed and cleared.
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
        update_preedit_text_with_mode(text: Text, cursor_pos: number, visible: boolean, mode: PreeditFocusMode): void;

        /**
         * Update the state displayed in language bar.
         * 
         * (Note: The prop object will be released, if it is floating.
         *  If caller want to keep the object, caller should make the object
         *  sink by g_object_ref_sink.)
         * @param prop IBusProperty to be updated.
         */
        update_property(prop: Property): void;
    }


    namespace EngineDesc {
        // Signal signatures
        interface SignalSignatures extends Serializable.SignalSignatures {
            "notify::author": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::hotkeys": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-prop-key": (pspec: GObject.ParamSpec) => void;
            "notify::language": (pspec: GObject.ParamSpec) => void;
            "notify::layout": (pspec: GObject.ParamSpec) => void;
            "notify::layout-option": (pspec: GObject.ParamSpec) => void;
            "notify::layout-variant": (pspec: GObject.ParamSpec) => void;
            "notify::license": (pspec: GObject.ParamSpec) => void;
            "notify::longname": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::rank": (pspec: GObject.ParamSpec) => void;
            "notify::setup": (pspec: GObject.ParamSpec) => void;
            "notify::symbol": (pspec: GObject.ParamSpec) => void;
            "notify::textdomain": (pspec: GObject.ParamSpec) => void;
            "notify::version": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Serializable.ConstructorProps {
            author: string;
            description: string;
            hotkeys: string;
            icon: string;
            icon_prop_key: string;
            iconPropKey: string;
            language: string;
            layout: string;
            layout_option: string;
            layoutOption: string;
            layout_variant: string;
            layoutVariant: string;
            license: string;
            longname: string;
            name: string;
            rank: number;
            setup: string;
            symbol: string;
            textdomain: string;
            version: string;
        }
    }

    /**
     * An IBusEngineDesc stores description data of IBusEngine.
     * The description data can either be passed to `ibus_engine_desc_new()`,
     * or loaded from an XML node through `ibus_engine_desc_new_from_xml_node()`
     * to construct IBusEngineDesc.
     * 
     * However, the recommended way to load engine description data is
     * using `ibus_component_new_from_file()` to load a component file,
     * which also includes engine description data.
     * 
     * see_also: {@link IBus.Component}, {@link IBus.Engine}
     * @gir-type Class
     */
    class EngineDesc extends Serializable {
        static $gtype: GObject.GType<EngineDesc>;

        // Properties
        /**
         * The author of engine description
         * @construct-only
         */
        get author(): string;

        /**
         * The description of engine description
         * @construct-only
         */
        get description(): string;

        /**
         * The hotkeys of engine description
         * @construct-only
         */
        get hotkeys(): string;

        /**
         * The icon of engine description
         * @construct-only
         * @default ibus-engine
         */
        get icon(): string;

        /**
         * The key of IBusProperty to change panel icon dynamically.
         * @construct-only
         */
        get icon_prop_key(): string;

        /**
         * The key of IBusProperty to change panel icon dynamically.
         * @construct-only
         */
        get iconPropKey(): string;

        /**
         * The language of engine description
         * @construct-only
         */
        get language(): string;

        /**
         * The layout of engine description
         * @construct-only
         * @default us
         */
        get layout(): string;

        /**
         * The keyboard option of engine description
         * @construct-only
         */
        get layout_option(): string;

        /**
         * The keyboard option of engine description
         * @construct-only
         */
        get layoutOption(): string;

        /**
         * The keyboard variant of engine description
         * @construct-only
         */
        get layout_variant(): string;

        /**
         * The keyboard variant of engine description
         * @construct-only
         */
        get layoutVariant(): string;

        /**
         * The license of engine description
         * @construct-only
         */
        get license(): string;

        /**
         * The longname of engine description
         * @construct-only
         */
        get longname(): string;

        /**
         * The name of engine description
         * @construct-only
         * @default null
         */
        get name(): string;

        /**
         * The rank of engine description
         * @construct-only
         * @default 0
         */
        get rank(): number;

        /**
         * The exec lists of the engine setup command
         * @construct-only
         */
        get setup(): string;

        /**
         * The symbol chars of engine description instead of icon image
         * @construct-only
         */
        get symbol(): string;

        /**
         * The textdomain of engine description
         * @construct-only
         */
        get textdomain(): string;

        /**
         * The version number of engine description
         * @construct-only
         */
        get version(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EngineDesc.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<EngineDesc.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](name: string, longname: string, description: string, language: string, license: string, author: string, icon: string, layout: string): EngineDesc;

        // Conflicted with IBus.Serializable.new
        static ["new"](...args: never[]): any;

        static new_from_xml_node(node: XML): EngineDesc;

        // Signals
        /** @signal */
        connect<K extends keyof EngineDesc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EngineDesc.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EngineDesc.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EngineDesc.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EngineDesc.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EngineDesc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the author property in IBusEngineDesc. It should not be freed.
         * @returns author property in IBusEngineDesc
         */
        get_author(): string;

        /**
         * Gets the description property in IBusEngineDesc. It should not be freed.
         * @returns description property in IBusEngineDesc
         */
        get_description(): string;

        /**
         * Gets the hotkeys property in IBusEngineDesc. It should not be freed.
         * @returns hotkeys property in IBusEngineDesc
         */
        get_hotkeys(): string;

        /**
         * Gets the icon property in IBusEngineDesc. It should not be freed.
         * @returns icon property in IBusEngineDesc
         */
        get_icon(): string;

        /**
         * Gets the key of IBusProperty to load the panel icon dynamically
         * in IBusEngineDesc. It should not be freed.
         * @returns IBusProperty.key for dynamic panel icon in IBusEngineDesc
         */
        get_icon_prop_key(): string;

        /**
         * Gets the language property in IBusEngineDesc. It should not be freed.
         * @returns language property in IBusEngineDesc
         */
        get_language(): string;

        /**
         * Gets the layout property in IBusEngineDesc. It should not be freed.
         * @returns layout property in IBusEngineDesc
         */
        get_layout(): string;

        /**
         * Gets the keyboard option property in IBusEngineDesc. It should not be freed.
         * @returns keyboard option property in IBusEngineDesc
         */
        get_layout_option(): string;

        /**
         * Gets the keyboard variant property in IBusEngineDesc. It should not be freed.
         * @returns keyboard variant property in IBusEngineDesc
         */
        get_layout_variant(): string;

        /**
         * Gets the license property in IBusEngineDesc. It should not be freed.
         * @returns license property in IBusEngineDesc
         */
        get_license(): string;

        /**
         * Gets the longname property in IBusEngineDesc. It should not be freed.
         * @returns longname property in IBusEngineDesc
         */
        get_longname(): string;

        /**
         * Gets the name property in IBusEngineDesc. It should not be freed.
         * @returns name property in IBusEngineDesc
         */
        get_name(): string;

        /**
         * Gets the rank property in IBusEngineDesc.
         * @returns rank property in IBusEngineDesc
         */
        get_rank(): number;

        /**
         * Gets the setup property in IBusEngineDesc. It should not be freed.
         * @returns setup property in IBusEngineDesc
         */
        get_setup(): string;

        /**
         * Gets the symbol property in IBusEngineDesc. It should not be freed.
         * @returns symbol property in IBusEngineDesc
         */
        get_symbol(): string;

        /**
         * Gets the textdomain property in IBusEngineDesc. It should not be freed.
         * @returns textdomain in IBusEngineDesc
         */
        get_textdomain(): string;

        /**
         * Gets the version property in IBusEngineDesc. It should not be freed.
         * @returns version in IBusEngineDesc
         */
        get_version(): string;

        /**
         * Output XML-formatted input method engine description.
         * The result will be append to GString specified in `output`.
         * @param output XML-formatted Input method engine description.
         * @param indent Number of indent (showed as 4 spaces).
         */
        output(output: GLib.String, indent: number): void;
    }


    namespace EngineSimple {
        // Signal signatures
        interface SignalSignatures extends Engine.SignalSignatures {
            "notify::active-surrounding-text": (pspec: GObject.ParamSpec) => void;
            "notify::engine-name": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus-id": (pspec: GObject.ParamSpec) => void;
            "notify::connection": (pspec: GObject.ParamSpec) => void;
            "notify::object-path": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Engine.ConstructorProps {}
    }

    /**
     * An IBusEngineSimple provides table-based input method logic.
     * 
     * see_also: {@link IBus.Engine}
     * @gir-type Class
     */
    class EngineSimple extends Engine {
        static $gtype: GObject.GType<EngineSimple>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EngineSimple.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<EngineSimple.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof EngineSimple.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EngineSimple.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EngineSimple.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EngineSimple.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EngineSimple.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EngineSimple.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Call `ibus_engine_simple_add_table()` internally by locale.
         * @param file The compose file.
         * @returns `true` if the `file` is loaded.
         */
        add_compose_file(file: string): boolean;

        /**
         * Adds an additional table to search to the engine. Each row of the table
         * consists of max_seq_len key symbols followed by two guint16 interpreted as
         * the high and low words of a gunicode value. Tables are searched starting from
         * the last added.
         * 
         * The table must be sorted in dictionary order on the numeric value of the key
         * symbol fields. (Values beyond the length of the sequence should be zero.)
         * @param data The table which must be available      during the whole life of the simple engine.
         * @param max_seq_len Maximum length of a sequence in the table (cannot be greater      than `IBUS_MAX_COMPOSE_LEN`)
         * @param n_seqs number of sequences in the table
         */
        add_table(data: number[], max_seq_len: number, n_seqs: number): void;

        /**
         * Call `ibus_engine_simple_add_table()` internally by locale.
         * @param locale The locale name. If the locale is `null`,                        the current locale is used.
         * @returns `true` if the `locale` is matched to the table.
         */
        add_table_by_locale(locale: string | null): boolean;
    }


    namespace ExtensionEvent {
        // Signal signatures
        interface SignalSignatures extends Serializable.SignalSignatures {
            "notify::is-enabled": (pspec: GObject.ParamSpec) => void;
            "notify::is-extension": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::params": (pspec: GObject.ParamSpec) => void;
            "notify::version": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Serializable.ConstructorProps {
            is_enabled: boolean;
            isEnabled: boolean;
            is_extension: boolean;
            isExtension: boolean;
            name: string;
            params: string;
            version: number;
        }
    }

    /**
     * IBusExtensionEvent properties.
     * @gir-type Class
     */
    class ExtensionEvent extends Serializable {
        static $gtype: GObject.GType<ExtensionEvent>;

        // Properties
        /**
         * `true` if the extension is enabled in the {@link IBus.ExtensionEvent}.
         * @construct-only
         * @default false
         */
        get is_enabled(): boolean;

        /**
         * `true` if the extension is enabled in the {@link IBus.ExtensionEvent}.
         * @construct-only
         * @default false
         */
        get isEnabled(): boolean;

        /**
         * `true` if the {@link IBus.ExtensionEvent} is called by an extension.
         * `false` if the {@link IBus.ExtensionEvent} is called by an active engine or
         * panel.
         * If this value is `true`, the event is send to ibus-daemon, an active
         * engine. If it's `false`, the event is sned to ibus-daemon, panels.
         * @construct-only
         * @default false
         */
        get is_extension(): boolean;

        /**
         * `true` if the {@link IBus.ExtensionEvent} is called by an extension.
         * `false` if the {@link IBus.ExtensionEvent} is called by an active engine or
         * panel.
         * If this value is `true`, the event is send to ibus-daemon, an active
         * engine. If it's `false`, the event is sned to ibus-daemon, panels.
         * @construct-only
         * @default false
         */
        get isExtension(): boolean;

        /**
         * Name of the extension in the {@link IBus.ExtensionEvent}.
         * @construct-only
         */
        get name(): string;

        /**
         * Parameters to enable the extension in the {@link IBus.ExtensionEvent}.
         * @construct-only
         */
        get params(): string;

        /**
         * Version of the {@link IBus.ExtensionEvent}.
         * @read-only
         * @default 1
         */
        get version(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ExtensionEvent.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ExtensionEvent.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ExtensionEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ExtensionEvent.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ExtensionEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ExtensionEvent.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ExtensionEvent.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ExtensionEvent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_name(): string;

        /**
         * @returns Parameters to enable the extension for {@link IBus.XEvent}
         */
        get_params(): string;

        /**
         * @returns Version of {@link IBus.ExtensionEvent}
         */
        get_version(): number;
    }


    namespace Factory {
        // Signal signatures
        interface SignalSignatures extends Service.SignalSignatures {
            /**
             * The ::create-engine signal is a signal to create IBusEngine
             * with `engine_name`, which gets emitted when IBusFactory
             * received CreateEngine dbus method. The callback functions
             * will be called until a callback returns a non-null object
             * of IBusEngine.
             * @signal
             * @run-last
             */
            "create-engine": (engine_name: string) => Engine | null;
            "notify::connection": (pspec: GObject.ParamSpec) => void;
            "notify::object-path": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Service.ConstructorProps {}
    }

    /**
     * An IBusFactory is an {@link IBus.Service} that creates input method engine (IME) instance.
     * It provides CreateEngine remote method, which creates an IME instance by name,
     * and returns the D-Bus object path to IBus daemon.
     * 
     * see_also: {@link IBus.Engine}
     * @gir-type Class
     */
    class Factory extends Service {
        static $gtype: GObject.GType<Factory>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Factory.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Factory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](connection: Gio.DBusConnection): Factory;

        // Conflicted with IBus.Object.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof Factory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Factory.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Factory.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Factory.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Factory.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Factory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * Creates an {@link IBus.Engine} with `engine_name`.
         * @param engine_name Name of an engine.
         * @virtual
         */
        vfunc_create_engine(engine_name: string): Engine;

        // Methods
        /**
         * Add an engine to the factory.
         * @param engine_name Name of an engine.
         * @param engine_type GType of an engine.
         */
        add_engine(engine_name: string, engine_type: GObject.GType): void;

        /**
         * Creates an {@link IBus.Engine} with `engine_name`.
         * @param engine_name Name of an engine.
         * @returns {@link IBus.Engine} with `engine_name`.
         */
        create_engine(engine_name: string): Engine;
    }


    namespace HotkeyProfile {
        // Signal signatures
        interface SignalSignatures extends Serializable.SignalSignatures {
            /**
             * Emitted when a hotkey is pressed and the hotkey is in profile.
             * Implement the member function `trigger()` in extended class to receive this signal.
             * 
             * <note><para>The last parameter, user_data is not actually a valid parameter. It is displayed because of GtkDoc bug.</para></note>
             * @signal
             * @detailed
             * @run-last
             */
            trigger: (event: number, user_data: null) => void;
            [key: `trigger::${string}`]: (event: number, user_data: null) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Serializable.ConstructorProps {}
    }

    /**
     * An opaque data type representing an IBusHotkeyProfile.
     * @gir-type Class
     */
    class HotkeyProfile extends Serializable {
        static $gtype: GObject.GType<HotkeyProfile>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HotkeyProfile.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<HotkeyProfile.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): HotkeyProfile;

        // Signals
        /** @signal */
        connect<K extends keyof HotkeyProfile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HotkeyProfile.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof HotkeyProfile.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, HotkeyProfile.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof HotkeyProfile.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<HotkeyProfile.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param event 
         * @virtual
         */
        vfunc_trigger(event: GLib.Quark): void;

        // Methods
        /**
         * Adds a hotkey and its associated event to an {@link IBus.HotkeyProfile}.
         * @param keyval Keycode of the hotkey.
         * @param modifiers Modifiers of the hotkey.
         * @param event The event to be associated.
         * @returns Always `true`.
         */
        add_hotkey(keyval: number, modifiers: number, event: GLib.Quark): boolean;

        /**
         * Adds a hotkey and its associated event to an {@link IBus.HotkeyProfile}.
         * The hotkey is in string format, such like
         * <constant>Control+Shift+A</constant>.
         * @param str Key in string representation.  '+' is the separator.
         * @param event The event to be associated.
         * @returns FALSE if `str` contains invalid symbol; TRUE otherwise.
         */
        add_hotkey_from_string(str: string, event: GLib.Quark): boolean;

        /**
         * Emits a <constant>::trigger</constant> signal when a hotkey is in a profile.
         * @param keyval Keycode of the hotkey.
         * @param modifiers Modifiers of the hotkey.
         * @param prev_keyval Keycode of the hotkey.
         * @param prev_modifiers Modifiers of the hotkey.
         * @param user_data user data for signal "trigger".
         * @returns 0 if releasing a hotkey and the hotkey is not in the profile; an associated event otherwise. See also: ::trigger
         */
        filter_key_event(keyval: number, modifiers: number, prev_keyval: number, prev_modifiers: number, user_data: null): GLib.Quark;

        /**
         * @param keyval Keycode of the hotkey.
         * @param modifiers Modifiers of the hotkey.
         * @returns The event associated to the hotkey or 0 if the hotkey is not in the profile.
         */
        lookup_hotkey(keyval: number, modifiers: number): GLib.Quark;

        /**
         * Removes the hotkey for an {@link IBus.HotkeyProfile}.
         * @param keyval Keycode of the hotkey.
         * @param modifiers Modifiers of the hotkey.
         * @returns `false` if the key is not in `profile`, `true` otherwise.
         */
        remove_hotkey(keyval: number, modifiers: number): boolean;

        /**
         * Removes the hotkey for an {@link IBus.HotkeyProfile} by event.
         * @param event The associated event.
         * @returns `false` if no such event in `profile`, `true` otherwise.
         */
        remove_hotkey_by_event(event: GLib.Quark): boolean;
    }


    namespace InputContext {
        // Signal signatures
        interface SignalSignatures extends Proxy.SignalSignatures {
            /**
             * Emitted when the text is going to be committed.
             * 
             * (Note: The text object is floating, and it will be released after the
             *  signal. If signal handler wants to keep the object, the handler should
             *  use `g_object_ref_sink()` to get the ownership of the object.)
             * @signal
             * @run-last
             */
            "commit-text": (text: Text) => void;
            /**
             * Emitted to select next candidate of lookup table.
             * @signal
             * @run-last
             */
            "cursor-down-lookup-table": () => void;
            /**
             * Emitted to select previous candidate of lookup table.
             * @signal
             * @run-last
             */
            "cursor-up-lookup-table": () => void;
            /**
             * Emitted to delete surrounding text event from IME to client of IME.
             * @signal
             * @run-last
             */
            "delete-surrounding-text": (offset: number, n_chars: number) => void;
            /**
             * Emitted when an IME is disabled.
             * @signal
             * @run-last
             */
            disabled: () => void;
            /**
             * Emitted when an IME is enabled.
             * @signal
             * @run-last
             */
            enabled: () => void;
            /**
             * Emitted to forward key event from IME to client of IME.
             * @signal
             * @run-last
             */
            "forward-key-event": (keyval: number, keycode: number, modifiers: number) => void;
            /**
             * Emitted to hide auxiliary text.
             * @signal
             * @run-last
             */
            "hide-auxiliary-text": () => void;
            /**
             * Emitted to hide lookup table.
             * @signal
             * @run-last
             */
            "hide-lookup-table": () => void;
            /**
             * Emitted to hide preedit text.
             * @signal
             * @run-last
             */
            "hide-preedit-text": () => void;
            /**
             * Emitted to view the next page of lookup table.
             * @signal
             * @run-last
             */
            "page-down-lookup-table": () => void;
            /**
             * Emitted to view the previous page of lookup table.
             * @signal
             * @run-last
             */
            "page-up-lookup-table": () => void;
            /**
             * Emitted to register the properties in `props`.
             * 
             * (Note: The props object is floating, and it will be released after the
             *  signal. If signal handler wants to keep the object, the handler should
             *  use `g_object_ref_sink()` to get the ownership of the object.)
             * @signal
             * @run-last
             */
            "register-properties": (props: PropList) => void;
            /**
             * Emitted to receive the RequireSurroundingText signal from the daemon.
             * @signal
             * @run-last
             */
            "require-surrounding-text": () => void;
            /**
             * Emitted to show auxiliary text.
             * @signal
             * @run-last
             */
            "show-auxiliary-text": () => void;
            /**
             * Emitted to show lookup table.
             * @signal
             * @run-last
             */
            "show-lookup-table": () => void;
            /**
             * Emitted to show preedit text.
             * @signal
             * @run-last
             */
            "show-preedit-text": () => void;
            /**
             * Emitted to hide auxilary text.
             * 
             * (Note: The text object is floating, and it will be released after the
             *  signal. If signal handler wants to keep the object, the handler should
             *  use `g_object_ref_sink()` to get the ownership of the object.)
             * @signal
             * @run-last
             */
            "update-auxiliary-text": (text: Text, visible: boolean) => void;
            /**
             * Emitted to update lookup table.
             * 
             * (Note: The table object is floating, and it will be released after the
             *  signal. If signal handler wants to keep the object, the handler should
             *  use `g_object_ref_sink()` to get the ownership of the object.)
             * @signal
             * @run-last
             */
            "update-lookup-table": (table: LookupTable, visible: boolean) => void;
            /**
             * Emitted to update preedit text.
             * 
             * (Note: The text object is floating, and it will be released after the
             *  signal. If signal handler wants to keep the object, the handler should
             *  use `g_object_ref_sink()` to get the ownership of the object.)
             * @signal
             * @run-last
             */
            "update-preedit-text": (text: Text, cursor_pos: number, visible: boolean) => void;
            /**
             * Emitted to update preedit text with the mode.
             * 
             * (Note: The text object is floating, and it will be released after the
             *  signal. If signal handler wants to keep the object, the handler should
             *  use `g_object_ref_sink()` to get the ownership of the object.)
             * @signal
             * @run-last
             */
            "update-preedit-text-with-mode": (text: Text, cursor_pos: number, visible: boolean, mode: number) => void;
            /**
             * Emitted to update the property `prop`.
             * 
             * (Note: The prop object is floating, and it will be released after the
             *  signal. If signal handler wants to keep the object, the handler should
             *  use `g_object_ref_sink()` to get the ownership of the object.)
             * @signal
             * @run-last
             */
            "update-property": (prop: Property) => void;
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Proxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps {}
    }

    /**
     * An IBusInputContext is a proxy object of BusInputContext,
     * which manages the context for input methods that supports
     * text input in various natural languages.
     * 
     * Clients call the IBusInputContext to invoke BusInputContext,
     * through which invokes IBusEngine.
     * @gir-type Class
     */
    class InputContext extends Proxy implements Gio.AsyncInitable<InputContext>, Gio.DBusInterface, Gio.Initable {
        static $gtype: GObject.GType<InputContext>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: InputContext.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<InputContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](path: string, connection: Gio.DBusConnection, cancellable: Gio.Cancellable | null): InputContext;

        // Conflicted with Gio.DBusProxy.new
        static ["new"](...args: never[]): any;

        static new_async_finish(res: Gio.AsyncResult): InputContext;

        // Signals
        /** @signal */
        connect<K extends keyof InputContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InputContext.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof InputContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, InputContext.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof InputContext.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<InputContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Gets an existing IBusInputContext.
         * @param path The path to the object that emitting the signal.
         * @param connection A GDBusConnection.
         */
        static get_input_context(path: string, connection: Gio.DBusConnection): InputContext;

        /**
         * Gets an existing {@link IBus.InputContext} asynchronously.
         * @param path The path to the object that emitting the signal.
         * @param connection A {@link Gio.DBusConnection}.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.      The callback should not be `null`.
         */
        static get_input_context_async(path: string, connection: Gio.DBusConnection, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<InputContext> | null): void;

        /**
         * Finishes an operation started with
         * `ibus_input_context_get_input_context_async()`.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} pass to      `ibus_input_context_get_input_context_async()`.
         */
        static get_input_context_async_finish(res: Gio.AsyncResult): InputContext;

        /**
         * Creates a new {@link IBus.InputContext} asynchronously.
         * @param path The path to the object that emitting the signal.
         * @param connection A {@link Gio.DBusConnection}.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.      The callback should not be `null`.
         */
        static new_async(path: string, connection: Gio.DBusConnection, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<InputContext> | null): void;

        // Methods
        /**
         * Clear handwriting stroke(s) in the current input method engine.
         * 
         * see_also: {@link IBus.Engine.SignalSignatures.cancel_hand_writing | IBus.Engine::cancel-hand-writing}
         * @param n_strokes The number of strokes to be removed. Pass 0 to remove all.
         */
        cancel_hand_writing(n_strokes: number): void;

        /**
         * Invoked when the client application get focus. An asynchronous IPC will
         * be performed.
         * 
         * see_also: {@link IBus.Engine.SignalSignatures.focus_in | IBus.Engine::focus_in}.
         */
        focus_in(): void;

        /**
         * Invoked when the client application get focus. An asynchronous IPC will be performed.
         * 
         * see_also: {@link IBus.Engine.SignalSignatures.focus_out | IBus.Engine::focus_out}.
         */
        focus_out(): void;

        /**
         * Gets an IME engine description for the context.
         * A synchronous IPC will be performed.
         * @returns An IME engine description for the context, or NULL.
         */
        get_engine(): EngineDesc;

        /**
         * An asynchronous IPC will be performed.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        get_engine_async(timeout_msec: number, cancellable: Gio.Cancellable | null): globalThis.Promise<EngineDesc>;

        /**
         * An asynchronous IPC will be performed.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or     `null` if you don't care about the result of the method invocation.
         */
        get_engine_async(timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * An asynchronous IPC will be performed.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or     `null` if you don't care about the result of the method invocation.
         */
        get_engine_async(timeout_msec: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<EngineDesc> | void;

        /**
         * Finishes an operation started with `ibus_input_context_get_engine_async()`.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to   `ibus_input_context_get_engine_async()`.
         * @returns An IME engine description for the context, or     `null`.
         * @throws GLib.Error
         */
        get_engine_async_finish(res: Gio.AsyncResult): EngineDesc;

        /**
         * Check whether the current engine requires surrounding-text.
         * @returns `true` if surrounding-text is needed by the current engine; `false` otherwise.
         */
        needs_surrounding_text(): boolean;

        /**
         * Call this API after `ibus_input_context_process_key_event()` returns
         * to retrieve commit-text and forwar-key-event signals during
         * calling `ibus_input_context_process_key_event()`.
         * 
         * See also `ibus_input_context_set_post_process_key_event()`.
         * @since 1.5.29
         */
        post_process_key_event(): void;

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
         * see_also: {@link IBus.Engine.SignalSignatures.process_hand_writing_event | IBus.Engine::process-hand-writing-event}
         * @param coordinates An array of gdouble (0.0 to 1.0) which represents a stroke (i.e. [x1, y1, x2, y2, x3, y3, ...]).
         * @param coordinates_len The number of elements in the array. The number should be even and >= 4.
         */
        process_hand_writing_event(coordinates: number, coordinates_len: number): void;

        /**
         * Pass the key event to input method engine and wait for the reply from
         * ibus (i.e. synchronous IPC).
         * @param keyval Key symbol of a key event.
         * @param keycode Keycode of a key event.
         * @param state Key modifier flags.
         * @returns `true` for successfully process the key; `false` otherwise. See also: `ibus_input_context_process_key_event_async()`
         */
        process_key_event(keyval: number, keycode: number, state: number): boolean;

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
         * Use `ibus_keymap_lookup_keysym()` to convert keycode to keysym in given keyboard layout.
         * 
         * see_also: {@link IBus.Engine.SignalSignatures.process_key_event | IBus.Engine::process-key-event}
         * @param keyval Key symbol of a key event.
         * @param keycode Keycode of a key event.
         * @param state Key modifier flags.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A GCancellable or NULL.
         */
        process_key_event_async(keyval: number, keycode: number, state: number, timeout_msec: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

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
         * Use `ibus_keymap_lookup_keysym()` to convert keycode to keysym in given keyboard layout.
         * 
         * see_also: {@link IBus.Engine.SignalSignatures.process_key_event | IBus.Engine::process-key-event}
         * @param keyval Key symbol of a key event.
         * @param keycode Keycode of a key event.
         * @param state Key modifier flags.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A GCancellable or NULL.
         * @param callback A GAsyncReadyCallback to call when the request is satisfied or NULL      if you don't care about the result of the method invocation.
         */
        process_key_event_async(keyval: number, keycode: number, state: number, timeout_msec: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

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
         * Use `ibus_keymap_lookup_keysym()` to convert keycode to keysym in given keyboard layout.
         * 
         * see_also: {@link IBus.Engine.SignalSignatures.process_key_event | IBus.Engine::process-key-event}
         * @param keyval Key symbol of a key event.
         * @param keycode Keycode of a key event.
         * @param state Key modifier flags.
         * @param timeout_msec The timeout in milliseconds or -1 to use the default timeout.
         * @param cancellable A GCancellable or NULL.
         * @param callback A GAsyncReadyCallback to call when the request is satisfied or NULL      if you don't care about the result of the method invocation.
         */
        process_key_event_async(keyval: number, keycode: number, state: number, timeout_msec: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an operation started with
         *      `ibus_input_context_process_key_event_async()`.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to      `ibus_input_context_process_key_event_async()`.
         * @returns `true` if the key event is processed;      `false` otherwise or some errors happen and the `error` will be set.
         * @throws GLib.Error
         */
        process_key_event_async_finish(res: Gio.AsyncResult): boolean;

        /**
         * Activate the property asynchronously.
         * 
         * See also: {@link IBus.Engine.SignalSignatures.property_activate | IBus.Engine::property_activate}
         * @param prop_name A property name (e.g. "InputMode.WideLatin")
         * @param state A status of the property (e.g. PROP_STATE_CHECKED)
         */
        property_activate(prop_name: string, state: number): void;

        /**
         * Invoked when the IME is reset. An asynchronous IPC will be performed.
         * 
         * see_also: {@link IBus.Engine.SignalSignatures.reset | IBus.Engine::reset}
         */
        reset(): void;

        /**
         * Set the capabilities flags of client application asynchronously.
         * When IBUS_CAP_FOCUS is not set, IBUS_CAP_PREEDIT_TEXT, IBUS_CAP_AUXILIARY_TEXT, IBUS_CAP_LOOKUP_TABLE, and IBUS_CAP_PROPERTY have to be all set.
         * The panel component does nothing for an application that doesn't support focus.
         * 
         * see_also: {@link IBus.Engine.SignalSignatures.set_capabilities | IBus.Engine::set-capabilities}
         * @param capabilities Capabilities flags of IBusEngine, see {@link IBus.Capabilite}
         */
        set_capabilities(capabilities: number): void;

        /**
         * Set whether {@link IBus.InputContext} commits pre-edit texts or not.
         * If `true`, 'update-preedit-text-with-mode' signal is emitted
         * instead of 'update-preedit-text' signal.
         * If your client receives the 'update-preedit-text-with-mode' signal,
         * the client needs to implement `commit_text()` of pre-edit text when
         * GtkIMContextClass.focus_out() is called in case an IME desires that
         * behavior but it depends on each IME.
         * 
         * See also `ibus_engine_update_preedit_text_with_mode()`.
         * @param client_commit `true` if your input context commits pre-edit texts     with Space or Enter key events or mouse click events. `false` if     ibus-daemon commits pre-edit texts with those events.     The default is `false`. The behavior is decided with     `ibus_engine_update_preedit_text_with_mode()` to commit, clear or     keep the pre-edit text and this API is important in ibus-hangul.
         */
        set_client_commit_preedit(client_commit: boolean): void;

        /**
         * Set content-type (primary purpose and hints) of the context.  This
         * information is particularly useful to implement intelligent
         * behavior in engines, such as automatic input-mode switch and text
         * prediction.  For example, to restrict input to numbers, the client
         * can call this function with `purpose` set to
         * #IBUS_INPUT_PURPOSE_NUMBER.
         * 
         * See also: {@link IBus.Engine.SignalSignatures.set_content_type | IBus.Engine::set-content-type}
         * @param purpose Primary purpose of the input context, as an {@link IBus.InputPurpose}.
         * @param hints Hints that augment `purpose`, as an {@link IBus.InputHints}.
         */
        set_content_type(purpose: number, hints: number): void;

        /**
         * Set the cursor location of IBus input context asynchronously.
         * 
         * see_also: {@link IBus.Engine.SignalSignatures.set_cursor_location | IBus.Engine::set-cursor-location}
         * @param x X coordinate of the cursor.
         * @param y Y coordinate of the cursor.
         * @param w Width of the cursor.
         * @param h Height of the cursor.
         */
        set_cursor_location(x: number, y: number, w: number, h: number): void;

        /**
         * Set the relative cursor location of IBus input context asynchronously.
         * @param x X coordinate of the cursor.
         * @param y Y coordinate of the cursor.
         * @param w Width of the cursor.
         * @param h Height of the cursor.
         */
        set_cursor_location_relative(x: number, y: number, w: number, h: number): void;

        /**
         * Invoked when the IME engine is changed.
         * An asynchronous IPC will be performed.
         * @param name A name of the engine.
         */
        set_engine(name: string): void;

        /**
         * @param enable Can use `ibus_input_context_post_process_key_event()` to retrieve commit-text and forwar-key-event signals during calling `ibus_input_context_process_key_event()` if it's `true`.
         * @since 1.5.29
         */
        set_post_process_key_event(enable: boolean): void;

        /**
         * The pre-edit attributes follows the format and the default is
         * #IBUS_PREEDIT_FORMAT_RGBA and the types of all {@link IBus.Attribute} are should be
         * one of  #IBUS_ATTR_TYPE_UNDERLINE, #IBUS_ATTR_TYPE_FOREGROUND,
         * #IBUS_ATTR_TYPE_BACKGROUND.
         * In case that the format is #IBUS_PREEDIT_FORMAT_HINT, the types of all
         * {@link IBus.Attribute} are #IBUS_ATTR_TYPE_HINT.
         * 
         * See also `ibus_text_get_attributes()`;
         * @param format An {@link IBus.PreeditFormat}.
         * @since 1.5.33
         */
        set_preedit_format(format: PreeditFormat): void;

        /**
         * @param text An {@link IBus.Text} surrounding the current cursor on the application.
         * @param cursor_pos Current cursor position in characters in `text`.
         * @param anchor_pos Anchor position of selection in `text`.
         */
        set_surrounding_text(text: Text, cursor_pos: number, anchor_pos: number): void;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @since 2.22
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @since 2.22
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @since 2.22
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns `true` if successful. If an error has occurred, this function will return `false` and set `error` appropriately if present.
         * @since 2.22
         * @throws GLib.Error
         */
        init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or `null` on error.
         * @param res the {@link Gio.AsyncResult} from the callback
         * @returns a newly created {@link GObject.Object},      or `null` on error. Free with `g_object_unref()`.
         * @since 2.22
         * @throws GLib.Error
         */
        new_finish(res: Gio.AsyncResult): InputContext;

        /**
         * @param args 
         */
        // Conflicted with Gio.DBusProxy.new_finish
        new_finish(...args: never[]): any;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @since 2.22
         * @virtual
         */
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @since 2.22
         * @virtual
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
    }


    namespace Keymap {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
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
     * Then `ibus_keymap_lookup_keysym()` can
     * convert scancodes back to the key symbols.
     * 
     * see_also: {@link IBus.Component}, {@link IBus.EngineDesc}
     * @gir-type Class
     */
    class Keymap extends Object {
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
        name: string;

        keymap: number[];

        // Constructors
        constructor(properties?: Partial<Keymap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](name: string): Keymap;

        // Conflicted with IBus.Object.new
        static ["new"](...args: never[]): any;

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

        // Static methods
        /**
         * Get an IBusKeymap associated with the giving name.
         * 
         * This function loads the keymap file specified in `name`
         * in the IBUS_DATA_DIR/keymaps directory.
         * @param name The keymap file to be loaded, such as 'us', 'jp'.
         */
        static get(name: string): Keymap;

        // Methods
        /**
         * Converts the scancode to keysym, given the keymap.
         * @param keycode A scancode to be converted.
         * @param state Modifier flags(such as Ctrl, Shift).
         * @returns Corresponding keysym.
         */
        lookup_keysym(keycode: number, state: number): number;
    }


    namespace LookupTable {
        // Signal signatures
        interface SignalSignatures extends Serializable.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends Serializable.ConstructorProps {}
    }

    /**
     * An IBusLookuptable stores the candidate words or phrases for users to
     * choose from.
     * 
     * Use `ibus_engine_update_lookup_table()`, `ibus_engine_show_lookup_table()`,
     * and `ibus_engine_hide_lookup_table()` to update, show and hide the lookup
     * table.
     * 
     * see_also: {@link IBus.Engine}
     * @gir-type Class
     */
    class LookupTable extends Serializable {
        static $gtype: GObject.GType<LookupTable>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LookupTable.SignalSignatures;

        // Fields
        page_size: number;

        cursor_pos: number;

        cursor_visible: boolean;

        round: boolean;

        orientation: number;

        candidates: null[];

        labels: null[];

        // Constructors
        constructor(properties?: Partial<LookupTable.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](page_size: number, cursor_pos: number, cursor_visible: boolean, round: boolean): LookupTable;

        // Conflicted with IBus.Serializable.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof LookupTable.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LookupTable.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof LookupTable.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LookupTable.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof LookupTable.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<LookupTable.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Append a candidate word/phrase to IBusLookupTable, and increase reference.
         * @param text candidate word/phrase to be appended (in IBusText format).
         */
        append_candidate(text: Text): void;

        /**
         * Append a candidate word/phrase to IBusLookupTable, and increase reference.
         * This function is needed if the input method select candidate with
         * non-numeric keys such as "asdfghjkl;".
         * @param text A candidate label to be appended (in IBusText format).
         */
        append_label(text: Text): void;

        /**
         * Clear and remove all candidate from an IBusLookupTable.
         */
        clear(): void;

        /**
         * Go to next candidate of an {@link IBus.LookupTable}.
         * 
         * It returns FALSE if it is already at the last candidate,
         * unless  <code>table&gt;-round==TRUE</code>, where it will go
         * to the first candidate.
         * @returns `true` if succeed.
         */
        cursor_down(): boolean;

        /**
         * Go to previous candidate of an {@link IBus.LookupTable}.
         * 
         * It returns FALSE if it is already at the first candidate,
         * unless  <code>table&gt;-round==TRUE</code>, where it will go
         * to the last candidate.
         * @returns `true` if succeed.
         */
        cursor_up(): boolean;

        /**
         * Return {@link IBus.Text} at the given index. Borrowed reference.
         * @param index Index in the Lookup table.
         * @returns IBusText at the given index; NULL if no such         {@link IBus.Text}.
         */
        get_candidate(index: number): Text;

        /**
         * Gets the cursor position in current page of {@link IBus.LookupTable}.
         * @returns The position of cursor in current page.
         */
        get_cursor_in_page(): number;

        /**
         * Gets the cursor position of {@link IBus.LookupTable}.
         * @returns The position of cursor.
         */
        get_cursor_pos(): number;

        /**
         * Return {@link IBus.Text} at the given index. Borrowed reference.
         * @param index Index in the Lookup table.
         * @returns {@link IBus.Text} at the given index; `null` if no such         {@link IBus.Text}.
         */
        get_label(index: number): Text;

        /**
         * Return the number of candidate in the table.
         * @returns The number of candidates in the table
         */
        get_number_of_candidates(): number;

        /**
         * Returns the orientation of the {@link IBus.LookupTable}.
         * @returns The orientation of the `table`.
         */
        get_orientation(): number;

        /**
         * Gets the number of candidate shown per page.
         * @returns Page size, i.e., number of candidate shown per page. dd
         */
        get_page_size(): number;

        /**
         * Returns whether the cursor of an {@link IBus.LookupTable} is visible.
         * @returns Whether the cursor of `table` is visible.
         */
        is_cursor_visible(): boolean;

        /**
         * Returns whether the {@link IBus.LookupTable} is round.
         * @returns Whether the `table` is round.
         */
        is_round(): boolean;

        /**
         * Go to next page of an {@link IBus.LookupTable}.
         * 
         * It returns FALSE if it is already at the last page,
         * unless  <code>table&gt;-round==TRUE</code>, where it will go
         * to the first page.
         * @returns `true` if succeed.
         */
        page_down(): boolean;

        /**
         * Go to previous page of an {@link IBus.LookupTable}.
         * 
         * It returns FALSE if it is already at the first page,
         * unless  <code>table&gt;-round==TRUE</code>, where it will go
         * to the last page.
         * @returns `true` if succeed.
         */
        page_up(): boolean;

        /**
         * Set the cursor position of IBusLookupTable.
         * @param cursor_pos The position of cursor.
         */
        set_cursor_pos(cursor_pos: number): void;

        /**
         * Set whether to make the cursor of an IBusLookupTable visible or not.
         * @param visible Whether to make the cursor of `table` visible.
         */
        set_cursor_visible(visible: boolean): void;

        /**
         * Append a candidate word/phrase to IBusLookupTable, and increase reference.
         * This function is needed if the input method select candidate with
         * non-numeric keys such as "asdfghjkl;".
         * @param index Intex in the Lookup table.
         * @param text A candidate label to be appended (in IBusText format).
         */
        set_label(index: number, text: Text): void;

        /**
         * Set the orientation.
         * @param orientation .
         */
        set_orientation(orientation: number): void;

        /**
         * Set the number of candidate shown per page.
         * @param page_size number of candidate shown per page.
         */
        set_page_size(page_size: number): void;

        /**
         * Set whether to make the IBusLookupTable round or not.
         * @param round Whether to make `table` round.
         */
        set_round(round: boolean): void;
    }


    namespace Message {
        // Signal signatures
        interface SignalSignatures extends Serializable.SignalSignatures {
            "notify::code": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::domain": (pspec: GObject.ParamSpec) => void;
            "notify::progress": (pspec: GObject.ParamSpec) => void;
            "notify::serial": (pspec: GObject.ParamSpec) => void;
            "notify::timeout": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Serializable.ConstructorProps {
            code: number;
            description: string;
            domain: number;
            progress: number;
            serial: number;
            timeout: number;
            title: string;
        }
    }

    /**
     * An IBusMessage stores the message type, description, timeout.
     * The message data can generated by `ibus_message_new()`,
     * 
     * see_also: {@link IBus.Engine}, `IBuPanels`
     * @gir-type Class
     * @since 1.5.33
     */
    class Message extends Serializable {
        static $gtype: GObject.GType<Message>;

        // Properties
        /**
         * The code of message
         * @construct-only
         * @default 0
         */
        get code(): number;

        /**
         * The description of message
         * @construct-only
         */
        get description(): string;

        /**
         * The domain of message
         * @construct-only
         * @default 0
         */
        get domain(): number;

        /**
         * The progress of message
         * @construct-only
         * @default -1
         */
        get progress(): number;

        /**
         * The serial of message
         * @construct-only
         * @default 0
         */
        get serial(): number;

        /**
         * The timeout of message
         * @construct-only
         * @default -1
         */
        get timeout(): number;

        /**
         * The title of message
         * @construct-only
         * @default null
         */
        get title(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Message.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Message.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Message.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Message.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Message.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Message.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Message.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Message.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the code property in {@link IBus.Message}.
         * @returns code property in {@link IBus.Message}
         * @since 1.5.33
         */
        get_code(): number;

        /**
         * Gets the description property in {@link IBus.Message}. It should not be freed.
         * @returns description property in `IBuaMessage`
         * @since 1.5.33
         */
        get_description(): string;

        /**
         * Gets the domain property in {@link IBus.Message}.
         * @returns domain property in {@link IBus.Message}
         * @since 1.5.33
         */
        get_domain(): number;

        /**
         * Gets the progress property in {@link IBus.Message}.
         * @returns progress property in {@link IBus.Message}
         * @since 1.5.33
         */
        get_progress(): number;

        /**
         * Gets the serial property in {@link IBus.Message}.
         * @returns serial property in {@link IBus.Message}
         * @since 1.5.33
         */
        get_serial(): number;

        /**
         * Gets the timeout property in {@link IBus.Message}.
         * @returns timeout property in {@link IBus.Message}
         * @since 1.5.33
         */
        get_timeout(): number;

        /**
         * Gets the title property in {@link IBus.Message}. It should not be freed.
         * @returns title property in `IBuaMessage`
         * @since 1.5.33
         */
        get_title(): string;
    }


    namespace Object {
        // Signal signatures
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {
            /**
             * Destroy and free an IBusObject
             * 
             * See also:  `ibus_object_destroy()`.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para></note>
             * @signal
             * @run-last
             */
            destroy: () => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {}
    }

    /**
     * IBusObject is the base object for all objects in IBus.
     * @gir-type Class
     */
    class Object extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<Object>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Object.SignalSignatures;

        // Fields
        flags: number;

        // Constructors
        constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Object;

        // Signals
        /** @signal */
        connect<K extends keyof Object.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Object.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Object.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Object.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * Emit the "destroy" signal notifying all reference holders that they should
         * release the {@link IBus.Object}.
         * 
         * The memory for the object itself won't be deleted until its reference count
         * actually drops to 0; ibus_object_destroy merely asks reference holders to
         * release their references. It does not free the object.
         * @virtual
         */
        vfunc_destroy(): void;

        // Methods
        /**
         * Emit the "destroy" signal notifying all reference holders that they should
         * release the {@link IBus.Object}.
         * 
         * The memory for the object itself won't be deleted until its reference count
         * actually drops to 0; ibus_object_destroy merely asks reference holders to
         * release their references. It does not free the object.
         */
        destroy(): void;
    }


    namespace ObservedPath {
        // Signal signatures
        interface SignalSignatures extends Serializable.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends Serializable.ConstructorProps {}
    }

    /**
     * IBusObservedPath provides methods for file path manipulation,
     * such as monitor modification, directory tree traversal.
     * @gir-type Class
     */
    class ObservedPath extends Serializable {
        static $gtype: GObject.GType<ObservedPath>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ObservedPath.SignalSignatures;

        // Fields
        path: string;

        mtime: number;

        is_dir: boolean;

        is_exist: boolean;

        // Constructors
        constructor(properties?: Partial<ObservedPath.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](path: string, fill_stat: boolean): ObservedPath;

        // Conflicted with IBus.Serializable.new
        static ["new"](...args: never[]): any;

        static new_from_xml_node(node: XML, fill_stat: boolean): ObservedPath;

        // Signals
        /** @signal */
        connect<K extends keyof ObservedPath.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ObservedPath.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ObservedPath.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ObservedPath.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ObservedPath.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ObservedPath.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Checks whether the path is modified by comparing the mtime in object and
         * mtime in file system.
         * @returns `true` if imtime is changed, otherwise `false`.
         */
        check_modification(): boolean;

        /**
         * Append the observed path to a string with following format:
         * &lt;path mtime="&lt;i&gt;modified time&lt;/i&gt;" &gt;&lt;i&gt;path&lt;/i&gt;&lt;/path&gt;
         * @param output Path is appended to.
         * @param indent number of indent.
         */
        output(output: GLib.String, indent: number): void;

        /**
         * Recursively traverse the path and put the files and subdirectory in to
         * a newly allocated
         * GLists, if the `path` is a directory. Otherwise returns NULL.
         * @param dir_only Only looks for subdirs, not files
         * @returns A newly allocate GList which holds content in path; NULL if `path` is not directory.
         */
        traverse(dir_only: boolean): ObservedPath[];
    }


    namespace PanelService {
        // Signal signatures
        interface SignalSignatures extends Service.SignalSignatures {
            /**
             * Emitted when the client application get the
             * ::candidate-clicked-lookup-table.
             * Implement the member function
             * IBusPanelServiceClass::candidate_cllicked_lookup_table in extended class
             * to receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "candidate-clicked-lookup-table": (index: number, button: number, state: number) => void;
            /**
             * Emitted when the client application get the ::commit-text-received.
             * Implement the member function
             * IBusPanelServiceClass::commit_text_received in extended class to
             * receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "commit-text-received": (text: Text) => void;
            /**
             * Emitted when the client application get the ::cursor-down-lookup-table.
             * Implement the member function
             * IBusPanelServiceClass::cursor_down_lookup_table in extended
             * class to receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "cursor-down-lookup-table": () => void;
            /**
             * Emitted when the client application get the ::cursor-up-lookup-table.
             * Implement the member function
             * IBusPanelServiceClass::cursor_up_lookup_table in extended
             * class to receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "cursor-up-lookup-table": () => void;
            /**
             * Emitted when the client application destroys.
             * Implement the member function
             * IBusPanelServiceClass::destroy_context in extended class to
             * receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "destroy-context": (input_context_path: string) => void;
            /**
             * Emitted when the client application get the ::focus-in.
             * Implement the member function
             * IBusPanelServiceClass::focus_in in extended class to receive
             * this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "focus-in": (input_context_path: string) => void;
            /**
             * Emitted when the client application get the ::focus-out.
             * Implement the member function
             * IBusPanelServiceClass::focus_out in extended class to receive
             * this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "focus-out": (input_context_path: string) => void;
            /**
             * Emitted when the client application get the ::hide-auxiliary-text.
             * Implement the member function
             * IBusPanelServiceClass::hide_auxiliary_text in extended class
             * to receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "hide-auxiliary-text": () => void;
            /**
             * Emitted when the client application get the ::hide-language-bar.
             * Implement the member function
             * IBusPanelServiceClass::hide_language_bar in extended class to
             * receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "hide-language-bar": () => void;
            /**
             * Emitted when the client application get the ::hide-lookup-table.
             * Implement the member function
             * IBusPanelServiceClass::hide_lookup_table in extended class to
             * receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "hide-lookup-table": () => void;
            /**
             * Emitted when the client application get the ::hide-preedit-text.
             * Implement the member function
             * IBusPanelServiceClass::hide_preedit_text in extended class to
             * receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "hide-preedit-text": () => void;
            /**
             * Emitted when the client application get the ::page-down-lookup-table.
             * Implement the member function
             * IBusPanelServiceClass::page_down_lookup_table in extended
             * class to receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "page-down-lookup-table": () => void;
            /**
             * Emitted when the client application get the ::page-up-lookup-table.
             * Implement the member function
             * IBusPanelServiceClass::page_up_lookup_table in extended class
             * to receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "page-up-lookup-table": () => void;
            /**
             * Emitted when the client application get the ::panel-extension-received.
             * Implement the member function
             * IBusPanelServiceClass::panel_extension_received in extended class to
             * receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "panel-extension-received": (data: ExtensionEvent) => void;
            /**
             * Emitted when a key event is received.
             * Implement the member function IBusPanelServiceClass::process_key_event
             * in extended class to receive this signal.
             * Both the key symbol and keycode are passed to the member function.
             * See `ibus_input_context_process_key_event()` for further explanation of
             * key symbol, keycode and which to use.
             * @signal
             * @run-last
             */
            "process-key-event": (keyval: number, keycode: number, state: number) => boolean | void;
            /**
             * Emitted when the client application get the ::register-properties.
             * Implement the member function
             * IBusPanelServiceClass::register_properties in extended class
             * to receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "register-properties": (prop_list: PropList) => void;
            /**
             * Emitted when the client application get the ::reset.
             * Implement the member function
             * IBusPanelServiceClass::reset in extended class to receive this
             * signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            reset: () => void;
            /**
             * Emitted when the client application get the ::send-meeeage-received.
             * Implement the member function
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @since 1.5.33
             * @run-last
             */
            "send-message-received": (message: Message) => void;
            /**
             * Emitted when the client application get the ::set-content-type.
             * Implement the member function
             * IBusPanelServiceClass::set_content_type in extended class to
             * receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "set-content-type": (purpose: number, hints: number) => void;
            /**
             * Emitted when the client application get the ::set-cursor-location.
             * Implement the member function
             * IBusPanelServiceClass::set_cursor_location in extended class
             * to receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "set-cursor-location": (x: number, y: number, w: number, h: number) => void;
            /**
             * Emitted when the client application get the set-cursor-location-relative.
             * Implement the member function `set_cursor_location_relative()` in
             * extended class to receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "set-cursor-location-relative": (x: number, y: number, w: number, h: number) => void;
            /**
             * Emitted when the client application get the ::show-auxiliary-text.
             * Implement the member function
             * IBusPanelServiceClass::show_auxiliary_text in extended class
             * to receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "show-auxiliary-text": () => void;
            /**
             * Emitted when the client application get the ::show-language-bar.
             * Implement the member function
             * IBusPanelServiceClass::show_language_bar in extended class to
             * receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "show-language-bar": () => void;
            /**
             * Emitted when the client application get the ::show-lookup-table.
             * Implement the member function
             * IBusPanelServiceClass::show_lookup_table in extended class to
             * receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "show-lookup-table": () => void;
            /**
             * Emitted when the client application get the ::show-preedit-text.
             * Implement the member function
             * IBusPanelServiceClass::show_preedit_text in extended class to
             * receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "show-preedit-text": () => void;
            /**
             * Emitted when the client application get the ::start-setup.
             * Implement the member function
             * IBusPanelServiceClass::start_setup in extended class to
             * receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "start-setup": () => void;
            /**
             * Emitted when the client application get the ::state-changed.
             * Implement the member function
             * IBusPanelServiceClass::state_changed in extended class to
             * receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "state-changed": () => void;
            /**
             * Emitted when the client application get the ::update-auxiliary-text.
             * Implement the member function
             * IBusPanelServiceClass::update_auxiliary_text in extended class
             * to receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "update-auxiliary-text": (text: Text, visible: boolean) => void;
            /**
             * Emitted when the client application get the ::update-lookup-table.
             * Implement the member function
             * IBusPanelServiceClass::update_lookup_table in extended class
             * to receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "update-lookup-table": (lookup_table: LookupTable, visible: boolean) => void;
            /**
             * Emitted when the client application get the ::update-preedit-text.
             * Implement the member function
             * IBusPanelServiceClass::update_preedit_text in extended class
             * to receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "update-preedit-text": (text: Text, cursor_pos: number, visible: boolean) => void;
            /**
             * Emitted when the client application get the ::update-property.
             * Implement the member function
             * IBusPanelServiceClass::update_property in extended class to
             * receive this signal.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para>
             * </note>
             * @signal
             * @run-last
             */
            "update-property": (prop: Property) => void;
            "notify::connection": (pspec: GObject.ParamSpec) => void;
            "notify::object-path": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Service.ConstructorProps {}
    }

    /**
     * An IBusPanelService is a base class for UI services.
     * Developers can "extend" this class for panel UI development.
     * @gir-type Class
     */
    class PanelService extends Service {
        static $gtype: GObject.GType<PanelService>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PanelService.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PanelService.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](connection: Gio.DBusConnection): PanelService;

        // Conflicted with IBus.Object.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof PanelService.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PanelService.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PanelService.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PanelService.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PanelService.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PanelService.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param index 
         * @param button 
         * @param state 
         * @virtual
         */
        vfunc_candidate_clicked_lookup_table(index: number, button: number, state: number): void;

        /**
         * @param text 
         * @virtual
         */
        vfunc_commit_text_received(text: Text): void;

        /**
         * @virtual
         */
        vfunc_cursor_down_lookup_table(): void;

        /**
         * @virtual
         */
        vfunc_cursor_up_lookup_table(): void;

        /**
         * @param input_context_path 
         * @virtual
         */
        vfunc_destroy_context(input_context_path: string): void;

        /**
         * @param input_context_path 
         * @virtual
         */
        vfunc_focus_in(input_context_path: string): void;

        /**
         * @param input_context_path 
         * @virtual
         */
        vfunc_focus_out(input_context_path: string): void;

        /**
         * @virtual
         */
        vfunc_hide_auxiliary_text(): void;

        /**
         * @virtual
         */
        vfunc_hide_language_bar(): void;

        /**
         * @virtual
         */
        vfunc_hide_lookup_table(): void;

        /**
         * @virtual
         */
        vfunc_hide_preedit_text(): void;

        /**
         * @virtual
         */
        vfunc_page_down_lookup_table(): void;

        /**
         * @virtual
         */
        vfunc_page_up_lookup_table(): void;

        /**
         * @param event 
         * @virtual
         */
        vfunc_panel_extension_received(event: ExtensionEvent): void;

        /**
         * @param keyval 
         * @param keycode 
         * @param state 
         * @virtual
         */
        vfunc_process_key_event(keyval: number, keycode: number, state: number): boolean;

        /**
         * @param prop_list 
         * @virtual
         */
        vfunc_register_properties(prop_list: PropList): void;

        /**
         * @virtual
         */
        vfunc_reset(): void;

        /**
         * @param purpose 
         * @param hints 
         * @virtual
         */
        vfunc_set_content_type(purpose: number, hints: number): void;

        /**
         * @param x 
         * @param y 
         * @param w 
         * @param h 
         * @virtual
         */
        vfunc_set_cursor_location(x: number, y: number, w: number, h: number): void;

        /**
         * @param x 
         * @param y 
         * @param w 
         * @param h 
         * @virtual
         */
        vfunc_set_cursor_location_relative(x: number, y: number, w: number, h: number): void;

        /**
         * @virtual
         */
        vfunc_show_auxiliary_text(): void;

        /**
         * @virtual
         */
        vfunc_show_language_bar(): void;

        /**
         * @virtual
         */
        vfunc_show_lookup_table(): void;

        /**
         * @virtual
         */
        vfunc_show_preedit_text(): void;

        /**
         * @virtual
         */
        vfunc_start_setup(): void;

        /**
         * @virtual
         */
        vfunc_state_changed(): void;

        /**
         * @param text 
         * @param visible 
         * @virtual
         */
        vfunc_update_auxiliary_text(text: Text, visible: boolean): void;

        /**
         * @param lookup_table 
         * @param visible 
         * @virtual
         */
        vfunc_update_lookup_table(lookup_table: LookupTable, visible: boolean): void;

        /**
         * @param text 
         * @param cursor_pos 
         * @param visible 
         * @virtual
         */
        vfunc_update_preedit_text(text: Text, cursor_pos: number, visible: boolean): void;

        /**
         * @param prop 
         * @virtual
         */
        vfunc_update_property(prop: Property): void;

        // Methods
        /**
         * Notify that a candidate is clicked
         * by sending a "CandidateClicked" to IBus service.
         * @param index Index in the Lookup table
         * @param button GdkEventButton::button (1: left button, etc.)
         * @param state GdkEventButton::state (key modifier flags)
         */
        candidate_clicked(index: number, button: number, state: number): void;

        /**
         * Notify that a text is sent
         * by sending a "CommitText" message to IBus service.
         * @param text An {@link IBus.Text}
         */
        commit_text(text: Text): void;

        /**
         * Notify that the cursor is down
         * by sending a "CursorDown" to IBus service.
         */
        cursor_down(): void;

        /**
         * Notify that the cursor is up
         * by sending a "CursorUp" to IBus service.
         */
        cursor_up(): void;

        /**
         * Forward key events when an IBus popup takes the focus and the events
         * needs to be forwared to the target IBus engine.
         * @param keyval Key symbol of a key event.
         * @param keycode Keycode of a key event.
         * @param state Key modifier flags.
         * @since 1.5.32
         */
        forward_process_key_event(keyval: number, keycode: number, state: number): void;

        /**
         * Notify that the preedit is hidden by the panel extension
         */
        hide_preedit_text_received(): void;

        /**
         * Notify that the page is down
         * by sending a "PageDown" to IBus service.
         */
        page_down(): void;

        /**
         * Notify that the page is up
         * by sending a "PageUp" to IBus service.
         */
        page_up(): void;

        /**
         * Enable or disable a panel extension with {@link IBus.ExtensionEvent}.
         * Notify that a data is sent
         * by sending a "PanelExtension" message to IBus panel extension service.
         * @param event A `PanelExtensionEvent` which is sent to a                          panel extension.
         */
        panel_extension(event: ExtensionEvent): void;

        /**
         * Notify that a property is active
         * by sending a "PropertyActivate" message to IBus service.
         * @param prop_name A property name
         * @param prop_state State of the property
         */
        property_activate(prop_name: string, prop_state: number): void;

        /**
         * Notify that a property is hidden
         * by sending a "ValueChanged" message to IBus service.
         * @param prop_name A property name
         */
        property_hide(prop_name: string): void;

        /**
         * Notify that a property is shown
         * by sending a "ValueChanged" message to IBus service.
         * @param prop_name A property name
         */
        property_show(prop_name: string): void;

        /**
         * Send a message to the Panel for the focus-less notification popup.
         * This is used for the emoji component in Wayland mainly but in Xorg too.
         * @param message An {@link IBus.Message}.
         * @since 1.5.33
         */
        send_message(message: Message): void;

        /**
         * The pre-edit attributes follows the format and the default is
         * #IBUS_PREEDIT_FORMAT_RGBA and the types of all {@link IBus.Attribute} are should be
         * one of  #IBUS_ATTR_TYPE_UNDERLINE, #IBUS_ATTR_TYPE_FOREGROUND,
         * #IBUS_ATTR_TYPE_BACKGROUND.
         * In case that the format is #IBUS_PREEDIT_FORMAT_HINT, the types of all
         * {@link IBus.Attribute} are #IBUS_ATTR_TYPE_HINT.
         * 
         * See also `ibus_text_get_attributes()`;
         * @param format An {@link IBus.PreeditFormat}.
         * @since 1.5.33
         */
        set_preedit_format(format: PreeditFormat): void;

        /**
         * Notify that the preedit is shown by the panel extension
         */
        show_preedit_text_received(): void;

        /**
         * Notify that the auxilirary is updated by the panel extension.
         * 
         * (Note: The table object will be released, if it is floating.
         *  If caller want to keep the object, caller should make the object
         *  sink by g_object_ref_sink.)
         * @param text An {@link IBus.Text}
         * @param visible Whether the auxilirary text is visible.
         */
        update_auxiliary_text_received(text: Text, visible: boolean): void;

        /**
         * Notify that the lookup table is updated by the panel extension.
         * 
         * (Note: The table object will be released, if it is floating.
         *  If caller want to keep the object, caller should make the object
         *  sink by g_object_ref_sink.)
         * @param table An {@link IBus.LookupTable}
         * @param visible Whether the lookup table is visible.
         */
        update_lookup_table_received(table: LookupTable, visible: boolean): void;

        /**
         * Notify that the preedit is updated by the panel extension
         * 
         * (Note: The table object will be released, if it is floating.
         *  If caller want to keep the object, caller should make the object
         *  sink by g_object_ref_sink.)
         * @param text Update content.
         * @param cursor_pos Current position of cursor
         * @param visible Whether the pre-edit buffer is visible.
         */
        update_preedit_text_received(text: Text, cursor_pos: number, visible: boolean): void;
    }


    namespace PropList {
        // Signal signatures
        interface SignalSignatures extends Serializable.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends Serializable.ConstructorProps {}
    }

    /**
     * See_also: {@link IBus.Property}, {@link IBus.Engine}
     * @gir-type Class
     */
    class PropList extends Serializable {
        static $gtype: GObject.GType<PropList>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PropList.SignalSignatures;

        // Fields
        properties: null[];

        // Constructors
        constructor(properties?: Partial<PropList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): PropList;

        // Signals
        /** @signal */
        connect<K extends keyof PropList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PropList.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PropList.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PropList.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PropList.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PropList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Append an IBusProperty to an IBusPropList, and increase reference.
         * @param prop IBusProperty to be append to `prop_list`.
         */
        append(prop: Property): void;

        /**
         * Gets {@link IBus.Property} at given index. Borrowed reference.
         * @param index Index of an IBusPropList.
         * @returns {@link IBus.Property} at given index, `null` if no such     {@link IBus.Property}.
         */
        get(index: number): Property;

        /**
         * Update an IBusProperty in IBusPropList.
         * @param prop IBusProperty to be update.
         * @returns `true` if succeeded, `false` otherwise.
         */
        update_property(prop: Property): boolean;
    }


    namespace Property {
        // Signal signatures
        interface SignalSignatures extends Serializable.SignalSignatures {
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::key": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::prop-type": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::sub-props": (pspec: GObject.ParamSpec) => void;
            "notify::symbol": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Serializable.ConstructorProps {
            icon: string;
            key: string;
            label: Text;
            prop_type: PropType;
            propType: PropType;
            sensitive: boolean;
            state: PropState;
            sub_props: PropList;
            subProps: PropList;
            symbol: Text;
            tooltip: Text;
            visible: boolean;
        }
    }

    /**
     * An IBusProperty is an UI component like a button or a menu item
     * which shows the status of corresponding input method engine property.
     * End user can operate and see the current status of IME through these components.
     * For example, ibus-chewing users change the English/Chinese input mode by
     * pressing ctrl-space or click on the Eng/Chi switch button.
     * And the IBusProperty shows the change correspondingly.
     * 
     * see_also: {@link IBus.PropList}, {@link IBus.Engine}
     * @gir-type Class
     */
    class Property extends Serializable {
        static $gtype: GObject.GType<Property>;

        // Properties
        get icon(): string;
        set icon(val: string);

        /**
         * @construct-only
         */
        get key(): string;

        get label(): Text;
        set label(val: Text);

        /**
         * @construct-only
         * @default IBus.PropType.NORMAL
         */
        get prop_type(): PropType;

        /**
         * @construct-only
         * @default IBus.PropType.NORMAL
         */
        get propType(): PropType;

        /**
         * @default true
         */
        get sensitive(): boolean;
        set sensitive(val: boolean);

        /**
         * @default IBus.PropState.UNCHECKED
         */
        get state(): PropState;
        set state(val: PropState);

        get sub_props(): PropList;
        set sub_props(val: PropList);

        get subProps(): PropList;
        set subProps(val: PropList);

        get symbol(): Text;
        set symbol(val: Text);

        get tooltip(): Text;
        set tooltip(val: Text);

        /**
         * @default true
         */
        get visible(): boolean;
        set visible(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Property.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Property.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](key: string, type: PropType, label: Text, icon: string | null, tooltip: Text, sensitive: boolean, visible: boolean, state: PropState, prop_list: PropList | null): Property;

        // Conflicted with IBus.Serializable.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof Property.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Property.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Property.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Property.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Property.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Property.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get the icon of {@link IBus.Property}.
         * @returns the icon of {@link IBus.Property}. Should not be freed.
         */
        get_icon(): string;

        /**
         * Get the key of {@link IBus.Property}.
         * @returns the key of {@link IBus.Property}. Should not be freed.
         */
        get_key(): string;

        /**
         * Get the label of {@link IBus.Property}.
         * @returns the label of {@link IBus.Property}. Should not be freed.
         */
        get_label(): Text;

        get_prop_type(): PropType;

        /**
         * Get the sensitive of {@link IBus.Property}.
         * @returns the sensitive of {@link IBus.Property}.
         */
        get_sensitive(): boolean;

        /**
         * Get the state of {@link IBus.Property}.
         * @returns the state of {@link IBus.Property}.
         */
        get_state(): PropState;

        /**
         * Get the IBusPropList of {@link IBus.Property}.
         * @returns the IBusPropList of {@link IBus.Property}.     Should not be freed.
         */
        get_sub_props(): PropList;

        /**
         * Get the symbol of {@link IBus.Property}.
         * @returns the symbol of {@link IBus.Property}. Should not be freed.
         */
        get_symbol(): Text;

        /**
         * Get the tooltip of {@link IBus.Property}.
         * @returns the tooltip of {@link IBus.Property}. Should not be freed.
         */
        get_tooltip(): Text;

        /**
         * Get the visible of {@link IBus.Property}.
         * @returns the visible of {@link IBus.Property}.
         */
        get_visible(): boolean;

        /**
         * Set the icon of {@link IBus.Property}.
         * @param icon Icon shown in UI. It could be a full path of an icon file or an icon name.
         */
        set_icon(icon: string): void;

        /**
         * Set the label of {@link IBus.Property}.
         * @param label Text shown in UI.
         */
        set_label(label: Text): void;

        /**
         * Set whether the {@link IBus.Property} is sensitive.
         * @param sensitive Whether the {@link IBus.Property} is sensitive.
         */
        set_sensitive(sensitive: boolean): void;

        /**
         * Set the state of the {@link IBus.Property}.
         * @param state The state of the {@link IBus.Property}.
         */
        set_state(state: PropState): void;

        /**
         * Set the sub IBusProperties.
         * @param prop_list {@link IBus.PropList} that contains sub IBusProperties.
         */
        set_sub_props(prop_list: PropList): void;

        /**
         * Set the symbol of {@link IBus.Property}.
         * @param symbol Text shown in UI.
         */
        set_symbol(symbol: Text): void;

        /**
         * Set the tooltip of {@link IBus.Property}.
         * @param tooltip Text of the tooltip.
         */
        set_tooltip(tooltip: Text): void;

        /**
         * Set whether the {@link IBus.Property} is visible.
         * @param visible Whether the {@link IBus.Property} is visible.
         */
        set_visible(visible: boolean): void;

        /**
         * Update the content of an {@link IBus.Property}.
         * {@link IBus.Property} `prop_update` can either be sub-property of `prop`,
         * or holds new values for `prop`.
         * @param prop_update {@link IBus.PropList} that contains sub IBusProperties.
         * @returns TRUE if update succeeded; FALSE otherwise.
         */
        update(prop_update: Property): boolean;
    }


    namespace Proxy {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            /**
             * Destroy and free an IBusProxy
             * 
             * See also:  `ibus_proxy_destroy()`.
             * 
             * <note><para>Argument `user_data` is ignored in this function.</para></note>
             * @signal
             * @run-last
             */
            destroy: () => void;
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps {}
    }

    /**
     * An IBusProxy is the base of all proxy objects,
     * which communicate the corresponding `IBusServices` on the other end of
     * IBusConnection.
     * For example, IBus clients (such as editors, web browsers) invoke the proxy
     * object,
     * IBusInputContext to communicate with the InputContext service of the
     * ibus-daemon.
     * 
     * Almost all services have corresponding proxies, except very simple services.
     * @gir-type Class
     */
    class Proxy extends Gio.DBusProxy implements Gio.AsyncInitable<Proxy>, Gio.DBusInterface, Gio.Initable {
        static $gtype: GObject.GType<Proxy>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Proxy.SignalSignatures;

        // Fields
        flags: number;

        own: boolean;

        // Constructors
        constructor(properties?: Partial<Proxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Proxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Proxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Proxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Proxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Proxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Proxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
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
        vfunc_destroy(): void;

        // Methods
        /**
         * Dispose the proxy object. If the dbus connection is alive and the own
         * variable above is TRUE (which is the default),
         * org.freedesktop.IBus.Service.Destroy method will be called.
         * Note that "destroy" signal might be emitted when ibus_proxy_destroy is
         * called or the underlying dbus connection for the proxy is terminated.
         * In the callback of the destroy signal, you might have to call something
         * like 'g_object_unref(the_proxy);'.
         */
        destroy(): void;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @since 2.22
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @since 2.22
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @since 2.22
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns `true` if successful. If an error has occurred, this function will return `false` and set `error` appropriately if present.
         * @since 2.22
         * @throws GLib.Error
         */
        init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or `null` on error.
         * @param res the {@link Gio.AsyncResult} from the callback
         * @returns a newly created {@link GObject.Object},      or `null` on error. Free with `g_object_unref()`.
         * @since 2.22
         * @throws GLib.Error
         */
        new_finish(res: Gio.AsyncResult): Proxy;

        /**
         * @param args 
         */
        // Conflicted with Gio.DBusProxy.new_finish
        new_finish(...args: never[]): any;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @since 2.22
         * @virtual
         */
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @since 2.22
         * @virtual
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         * @since 2.32
         */
        get_object(): Gio.DBusObject | null;

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * 
         * This can return `null` if no {@link Gio.DBusInterfaceInfo} was provided during
         * construction of `interface_` and is also not made available otherwise.
         * For example, {@link Gio.DBusProxy} implements {@link Gio.DBusInterface} but allows for a `null`
         * {@link Gio.DBusInterfaceInfo}.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         * @since 2.30
         */
        get_info(): Gio.DBusInterfaceInfo | null;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @since 2.30
         */
        set_object(object: Gio.DBusObject | null): void;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @since 2.32
         * @virtual
         */
        vfunc_dup_object(): Gio.DBusObject | null;

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * 
         * This can return `null` if no {@link Gio.DBusInterfaceInfo} was provided during
         * construction of `interface_` and is also not made available otherwise.
         * For example, {@link Gio.DBusProxy} implements {@link Gio.DBusInterface} but allows for a `null`
         * {@link Gio.DBusInterfaceInfo}.
         * @since 2.30
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @since 2.30
         * @virtual
         */
        vfunc_set_object(object: Gio.DBusObject | null): void;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         * @since 2.22
         * @throws GLib.Error
         */
        init(cancellable: Gio.Cancellable | null): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @since 2.22
         * @virtual
         */
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }


    namespace Registry {
        // Signal signatures
        interface SignalSignatures extends Serializable.SignalSignatures {
            /**
             * Emitted when any observed paths are changed.
             * A method is not associated in this class. the "changed"
             * signal would be handled in other classes.
             * 
             * See also: `ibus_registry_start_monitor_changes()`.
             * @signal
             * @run-last
             */
            changed: () => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Serializable.ConstructorProps {}
    }

    /**
     * An {@link IBus.Registry} loads IBus component files and generates the cache files.
     * 
     * see_also: {@link IBus.Component}
     * @gir-type Class
     */
    class Registry extends Serializable {
        static $gtype: GObject.GType<Registry>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Registry.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Registry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Registry;

        // Signals
        /** @signal */
        connect<K extends keyof Registry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Registry.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Registry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Registry.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Registry.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Registry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Check if the registry is updated.
         * @returns `true` if mtime is changed; `false` otherwise.
         */
        check_modification(): boolean;

        /**
         * List components.
         * @returns a list of {@link IBus.Component} objects. The caller has to call `g_list_free()` for the returned list.
         */
        get_components(): Component[];

        /**
         * List observed paths.
         * @returns a list of {@link IBus.ObservedPath} objects. The caller has to call `g_list_free()` for the returned list.
         */
        get_observed_paths(): ObservedPath[];

        /**
         * Read all XML files in a IBus component directory (typically
         * /usr/share/ibus/component/ *.xml) and update the registry object.
         * IBUS_COMPONENT_PATH environment valuable is also available for
         * the custom component directories, whose delimiter is ':'.
         */
        load(): void;

        /**
         * Load the user or system registry cache.
         * @param is_user `true` if the registry cache is loaded in the user directory.
         * @returns `true` if the cache exists and is loaded successfully,           `false` otherwise.
         */
        load_cache(is_user: boolean): boolean;

        /**
         * Load the registry cache `filename`.
         * @param filename The file path of the registry cache
         * @returns `true` if the cache exists and is loaded successfully,           `false` otherwise.
         */
        load_cache_file(filename: string): boolean;

        /**
         * Read all XML files in `dirname`, create a {@link IBus.Component} object for each file,
         * and add the component objects to the registry.
         * If `dirname` is "/usr/share/ibus/component", this API and
         * `ibus_registry_load()` are same.
         * @param dirname IBus component directory which includes XML files.
         */
        load_in_dir(dirname: string): void;

        /**
         * Output {@link IBus.Registry} as an XML-formatted string.
         * The output string can be then shown on the screen or written to file.
         * @param output GString that holds the result.
         * @param indent level of indent.
         */
        output(output: GLib.String, indent: number): void;

        /**
         * Save the registry in a user directory or system directory.
         * @param is_user `true` if the registry cache is saved in the user directory.
         * @returns `true` if the cache is saved successfully, `false` otherwise.
         */
        save_cache(is_user: boolean): boolean;

        /**
         * Save the registry cache `filename`.
         * @param filename The file path of the registry cache
         * @returns `true` if the cache is saved successfully, `false` otherwise.
         */
        save_cache_file(filename: string): boolean;

        /**
         * Start to monitor observed paths.
         */
        start_monitor_changes(): void;
    }


    namespace Serializable {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * An {@link IBus.Serializable} is an IBus object which can be serialized, that is,
     * to be to and from a {@link GLib.Variant}.
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
     * @gir-type Class
     */
    class Serializable extends Object {
        static $gtype: GObject.GType<Serializable>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Serializable.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Serializable.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Serializable;

        // Signals
        /** @signal */
        connect<K extends keyof Serializable.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Serializable.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Serializable.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Serializable.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Serializable.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Serializable.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Deserialize a {@link GLib.Variant} to an {@link IBus.Serializable}/
         * The deserialize method should be implemented in extended class.
         * @param variant A {@link GLib.Variant}.
         */
        static deserialize_object(variant: GLib.Variant): Serializable;

        // Virtual methods
        /**
         * @param src 
         * @virtual
         */
        vfunc_copy(src: Serializable): boolean;

        /**
         * @param variant 
         * @virtual
         */
        vfunc_deserialize(variant: GLib.Variant): number;

        /**
         * @param builder 
         * @virtual
         */
        vfunc_serialize(builder: GLib.VariantBuilder): boolean;

        // Methods
        /**
         * Clone an {@link IBus.Serializable}.
         * The copy method should be implemented in extended class.
         * @returns A newly allocated clone object; or `null`     if `object` is not serializable. See also: IBusSerializableCopyFunc().
         */
        copy(): Serializable;

        /**
         * Gets a value from attachment of an {@link IBus.Serializable}.
         * @param key String formatted key for indexing value.
         * @returns The attached value; or `null` if fail to retrieve the value. See also: `ibus_serializable_set_attachment()`.
         */
        get_qattachment(key: GLib.Quark): GLib.Variant;

        /**
         * Remove a value from attachment of an {@link IBus.Serializable}.
         * See also: `ibus_serializable_remove_attachment()`.
         * @param key String formatted key for indexing value.
         */
        remove_qattachment(key: GLib.Quark): void;

        /**
         * Serialize an {@link IBus.Serializable} to a {@link GLib.Variant}.
         * The serialize method should be implemented in extended class.
         * @returns A {@link GLib.Variant}. See also: IBusSerializableCopyFunc().
         */
        serialize_object(): GLib.Variant;

        /**
         * Attach a value to an {@link IBus.Serializable}. If the value is floating,
         * the serializable will take the ownership.
         * 
         * See also: `ibus_serializable_set_attachment()`.
         * @param key String formatted key for indexing value.
         * @param value Value to be attached or `null` to remove any prevoius value.
         */
        set_qattachment(key: GLib.Quark, value: GLib.Variant): void;
    }


    namespace Service {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            "notify::connection": (pspec: GObject.ParamSpec) => void;
            "notify::object-path": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Object.ConstructorProps {
            connection: Gio.DBusConnection;
            object_path: string;
            objectPath: string;
        }
    }

    /**
     * An IBusService is a base class for services.
     * @gir-type Class
     */
    class Service extends Object {
        static $gtype: GObject.GType<Service>;

        // Properties
        /**
         * The connection of service object.
         */
        get connection(): Gio.DBusConnection;
        set connection(val: Gio.DBusConnection);

        /**
         * The path of service object.
         * @construct-only
         * @default null
         */
        get object_path(): string;

        /**
         * The path of service object.
         * @construct-only
         * @default null
         */
        get objectPath(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Service.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Service.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](connection: Gio.DBusConnection, path: string): Service;

        // Conflicted with IBus.Object.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof Service.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Service.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Service.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Service.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Service.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Service.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param xml_data The introspection xml data.
         */
        static add_interfaces(xml_data: string): boolean;

        /**
         * @param depth The number of D-Bus introspection interfaces.
         */
        static free_interfaces(depth: number): number;

        // Virtual methods
        /**
         * The ::service_get_property class method is to connect
         * GDBusInterfaceGetPropertyFunc().
         * @param connection A dbus connection.
         * @param sender A sender.
         * @param object_path An object path.
         * @param interface_name An interface name.
         * @param property_name A property name.
         * @virtual
         */
        vfunc_service_get_property(connection: Gio.DBusConnection, sender: string, object_path: string, interface_name: string, property_name: string): GLib.Variant | null;

        /**
         * The ::service_method_call class method is to connect
         * GDBusInterfaceMethodCallFunc().
         * @param connection A dbus connection.
         * @param sender A sender.
         * @param object_path An object path.
         * @param interface_name An interface name.
         * @param method_name A method name.
         * @param parameters A parameters.
         * @param invocation A dbus method invocation.
         * @virtual
         */
        vfunc_service_method_call(connection: Gio.DBusConnection, sender: string, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant, invocation: Gio.DBusMethodInvocation): void;

        /**
         * The ::service_set_property class method is to connect
         * GDBusInterfaceSetPropertyFunc().
         * @param connection A dbus connection.
         * @param sender A sender.
         * @param object_path An object path.
         * @param interface_name An interface name.
         * @param property_name An property name.
         * @param value An property value.
         * @virtual
         */
        vfunc_service_set_property(connection: Gio.DBusConnection, sender: string, object_path: string, interface_name: string, property_name: string, value: GLib.Variant): boolean;

        // Methods
        /**
         * @param dest_bus_name 
         * @param interface_name 
         * @param signal_name 
         * @param parameters 
         * @throws GLib.Error
         */
        emit_signal(dest_bus_name: string, interface_name: string, signal_name: string, parameters: GLib.Variant): boolean;

        /**
         * Gets a connections.
         * @returns A {@link Gio.DBusConnection} of an {@link IBus.Service} instance.
         */
        get_connection(): Gio.DBusConnection;

        /**
         * Gets the object path of an IBusService.
         * @returns The object path of `service`
         */
        get_object_path(): string;

        /**
         * Registers service to a connection.
         * @param connection A GDBusConnection the service will be registered to.
         * @returns `true` if the service was registered, `false` otherwise.
         * @throws GLib.Error
         */
        register(connection: Gio.DBusConnection): boolean;

        /**
         * Unregisters service from a connection.
         * @param connection A GDBusConnection the service was registered with.
         */
        unregister(connection: Gio.DBusConnection): void;
    }


    namespace Text {
        // Signal signatures
        interface SignalSignatures extends Serializable.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends Serializable.ConstructorProps {}
    }

    /**
     * An IBusText is the main text object in IBus.
     * The text is decorated according to associated IBusAttribute,
     * e.g. the foreground/background color, underline, and
     * applied scope.
     * 
     * see_also: {@link IBus.Attribute}
     * @gir-type Class
     */
    class Text extends Serializable {
        static $gtype: GObject.GType<Text>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Text.SignalSignatures;

        // Fields
        is_static: boolean;

        text: string;

        attrs: AttrList;

        // Constructors
        constructor(properties?: Partial<Text.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_from_string(str: string): Text;

        static new_from_ucs4(str: string): Text;

        static new_from_unichar(c: string): Text;

        // Signals
        /** @signal */
        connect<K extends keyof Text.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Text.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Text.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Text.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Text.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Text.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Append an IBusAttribute for IBusText.
         * @param type IBusAttributeType for `text`.
         * @param value Value for the type.
         * @param start_index The starting index, inclusive.
         * @param end_index The ending index, exclusive.
         */
        append_attribute(type: number, value: number, start_index: number, end_index: number): void;

        /**
         * Return the attributes in an {@link IBus.Text}. Should not be freed.
         * @returns the attrs in `text`.
         */
        get_attributes(): AttrList;

        /**
         * Return number of characters in an {@link IBus.Text}.
         * This function is based on `g_utf8_strlen()`, so unlike `strlen()`,
         * it does not count by bytes but characters instead.
         * @returns Number of character in `text`, not counted by bytes.
         */
        get_length(): number;

        /**
         * Return the text in an {@link IBus.Text}. Should not be freed.
         * @returns the text in `text`.
         */
        get_text(): string;

        /**
         * @param attrs An IBusAttrList
         */
        set_attributes(attrs: AttrList): void;
    }


    namespace UnicodeBlock {
        // Signal signatures
        interface SignalSignatures extends Serializable.SignalSignatures {
            "notify::end": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::start": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Serializable.ConstructorProps {
            end: number;
            name: string;
            start: number;
        }
    }

    /**
     * @gir-type Class
     */
    class UnicodeBlock extends Serializable {
        static $gtype: GObject.GType<UnicodeBlock>;

        // Properties
        /**
         * The Uniode end code point
         * @construct-only
         * @default 0
         */
        get end(): number;

        /**
         * The Uniode block name
         */
        get name(): string;
        set name(val: string);

        /**
         * The Uniode start code point
         * @construct-only
         * @default 0
         */
        get start(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UnicodeBlock.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<UnicodeBlock.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof UnicodeBlock.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UnicodeBlock.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof UnicodeBlock.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UnicodeBlock.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof UnicodeBlock.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UnicodeBlock.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param path A path of the saved dictionary file.
         */
        static load(path: string): UnicodeBlock[];

        /**
         * Save the list of {@link IBus.UnicodeBlock} to the cache file.
         * @param path A path of the saved Unicode block.
         * @param list A list of unicode  block.
         */
        static save(path: string, list: UnicodeBlock[]): void;

        // Methods
        /**
         * Gets the end code point in {@link IBus.UnicodeBlock}.
         * @returns end property in {@link IBus.UnicodeBlock}
         */
        get_end(): string;

        /**
         * Gets the name in {@link IBus.UnicodeBlock}. It should not be freed.
         * @returns name property in {@link IBus.UnicodeBlock}
         */
        get_name(): string;

        /**
         * Gets the start code point in {@link IBus.UnicodeBlock}.
         * @returns start property in {@link IBus.UnicodeBlock}
         */
        get_start(): string;
    }


    namespace UnicodeData {
        // Signal signatures
        interface SignalSignatures extends Serializable.SignalSignatures {
            "notify::alias": (pspec: GObject.ParamSpec) => void;
            "notify::block-name": (pspec: GObject.ParamSpec) => void;
            "notify::code": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Serializable.ConstructorProps {
            alias: string;
            block_name: string;
            blockName: string;
            code: number;
            name: string;
        }
    }

    /**
     * Unicode data likes code, name, alias, block-name.
     * You can get extended values with g_object_get_properties.
     * @gir-type Class
     */
    class UnicodeData extends Serializable {
        static $gtype: GObject.GType<UnicodeData>;

        // Properties
        /**
         * The Uniode alias name
         */
        get alias(): string;
        set alias(val: string);

        /**
         * The Uniode block name
         */
        get block_name(): string;
        set block_name(val: string);

        /**
         * The Uniode block name
         */
        get blockName(): string;
        set blockName(val: string);

        /**
         * The Uniode code point
         * @construct-only
         * @default 0
         */
        get code(): number;

        /**
         * The Uniode name
         */
        get name(): string;
        set name(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UnicodeData.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<UnicodeData.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof UnicodeData.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UnicodeData.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof UnicodeData.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UnicodeData.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof UnicodeData.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UnicodeData.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param path A path of the saved dictionary file.
         * @param object If the {@link GObject.Object} has "unicode-deserialize-progress"    signal, this function will emit (the number of desrialized    {@link IBus.UnicodeData}, * the total number of {@link IBus.UnicodeData}) of uint values    with that signal by 100 times. Otherwise `null`.
         */
        static load(path: string, object: GObject.Object | null): UnicodeData[];

        /**
         * IBusUnicodeDataLoadAsyncFinish can receive the list of {@link IBus.UnicodeData}.
         * @param path A path of the saved dictionary file.
         * @param object If the {@link GObject.Object} has "unicode-deserialize-progress"    signal, this function will emit (the number of desrialized    {@link IBus.UnicodeData}, * the total number of {@link IBus.UnicodeData}) of uint values    with that signal by 100 times. Otherwise `null`.
         * @param cancellable cancellable.
         * @param callback IBusUnicodeDataLoadAsyncFinish.
         */
        static load_async(path: string, object: GObject.Object | null, cancellable: Gio.Cancellable | null, callback: UnicodeDataLoadAsyncFinish): void;

        /**
         * Save the list of {@link IBus.UnicodeData} to the cache file.
         * @param path A path of the saved Unicode data.
         * @param list A list of unicode  data.
         */
        static save(path: string, list: UnicodeData[]): void;

        // Methods
        /**
         * Gets the alias in {@link IBus.UnicodeData}. It should not be freed.
         * @returns alias property in {@link IBus.UnicodeData}
         */
        get_alias(): string;

        /**
         * Gets the block name in {@link IBus.UnicodeData}. It should not be freed.
         * @returns block-name property in {@link IBus.UnicodeData}
         */
        get_block_name(): string;

        /**
         * Gets the code point in {@link IBus.UnicodeData}.
         * @returns code property in {@link IBus.UnicodeData}
         */
        get_code(): string;

        /**
         * Gets the name in {@link IBus.UnicodeData}. It should not be freed.
         * @returns name property in {@link IBus.UnicodeData}
         */
        get_name(): string;

        /**
         * Sets the block name in {@link IBus.UnicodeData}.
         * @param block_name A block name
         */
        set_block_name(block_name: string): void;
    }


    namespace XEvent {
        // Signal signatures
        interface SignalSignatures extends Serializable.SignalSignatures {
            "notify::event-type": (pspec: GObject.ParamSpec) => void;
            "notify::group": (pspec: GObject.ParamSpec) => void;
            "notify::hardware-keycode": (pspec: GObject.ParamSpec) => void;
            "notify::is-modifier": (pspec: GObject.ParamSpec) => void;
            "notify::keyval": (pspec: GObject.ParamSpec) => void;
            "notify::length": (pspec: GObject.ParamSpec) => void;
            "notify::purpose": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::same-screen": (pspec: GObject.ParamSpec) => void;
            "notify::send-event": (pspec: GObject.ParamSpec) => void;
            "notify::serial": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::string": (pspec: GObject.ParamSpec) => void;
            "notify::subwindow": (pspec: GObject.ParamSpec) => void;
            "notify::time": (pspec: GObject.ParamSpec) => void;
            "notify::version": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::x": (pspec: GObject.ParamSpec) => void;
            "notify::x-root": (pspec: GObject.ParamSpec) => void;
            "notify::y": (pspec: GObject.ParamSpec) => void;
            "notify::y-root": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Serializable.ConstructorProps {
            event_type: number;
            eventType: number;
            group: number;
            hardware_keycode: number;
            hardwareKeycode: number;
            is_modifier: boolean;
            isModifier: boolean;
            keyval: number;
            length: number;
            purpose: string;
            root: number;
            same_screen: boolean;
            sameScreen: boolean;
            send_event: number;
            sendEvent: number;
            serial: bigint | number;
            state: number;
            string: string;
            subwindow: number;
            time: number;
            version: number;
            window: number;
            x: number;
            x_root: number;
            xRoot: number;
            y: number;
            y_root: number;
            yRoot: number;
        }
    }

    /**
     * An IBusXEvent provides a wrapper of XEvent.
     * 
     * see_also: {@link IBus.Component}, {@link IBus.EngineDesc}
     * @gir-type Class
     */
    class XEvent extends Serializable {
        static $gtype: GObject.GType<XEvent>;

        // Properties
        /**
         * IBusXEventType of this IBusXEvent.
         * @construct-only
         * @default -1
         */
        get event_type(): number;

        /**
         * IBusXEventType of this IBusXEvent.
         * @construct-only
         * @default -1
         */
        get eventType(): number;

        /**
         * group of this IBusXEvent.
         * @construct-only
         * @default 0
         */
        get group(): number;

        /**
         * hardware keycode of this IBusXEvent.
         * @construct-only
         * @default 0
         */
        get hardware_keycode(): number;

        /**
         * hardware keycode of this IBusXEvent.
         * @construct-only
         * @default 0
         */
        get hardwareKeycode(): number;

        /**
         * is_modifier of this IBusXEvent.
         * @construct-only
         * @default false
         */
        get is_modifier(): boolean;

        /**
         * is_modifier of this IBusXEvent.
         * @construct-only
         * @default false
         */
        get isModifier(): boolean;

        /**
         * keyval of this IBusXEvent.
         * @construct-only
         * @default 0
         */
        get keyval(): number;

        /**
         * keyval of this IBusXEvent.
         * @construct-only
         * @default 0
         */
        get length(): number;

        /**
         * purpose of this IBusXEvent.
         * @construct-only
         */
        get purpose(): string;

        /**
         * root window of this IBusXEvent.
         * @construct-only
         * @default 0
         */
        get root(): number;

        /**
         * same_screen of this IBusXEvent.
         * @construct-only
         * @default true
         */
        get same_screen(): boolean;

        /**
         * same_screen of this IBusXEvent.
         * @construct-only
         * @default true
         */
        get sameScreen(): boolean;

        /**
         * send_event of this IBusXEvent.
         * @construct-only
         * @default 0
         */
        get send_event(): number;

        /**
         * send_event of this IBusXEvent.
         * @construct-only
         * @default 0
         */
        get sendEvent(): number;

        /**
         * serial of this IBusXEvent.
         * @construct-only
         * @default 0
         */
        get serial(): number;

        /**
         * state of this IBusXEvent.
         * @construct-only
         * @default 0
         */
        get state(): number;

        /**
         * string of this IBusXEvent.
         * @construct-only
         */
        get string(): string;

        /**
         * subwindow of this IBusXEvent.
         * @construct-only
         * @default 0
         */
        get subwindow(): number;

        /**
         * time of this IBusXEvent.
         * @construct-only
         * @default 0
         */
        get time(): number;

        /**
         * Version of this IBusXEvent.
         * @read-only
         * @default 1
         */
        get version(): number;

        /**
         * window of this IBusXEvent.
         * @construct-only
         * @default 0
         */
        get window(): number;

        /**
         * x of this IBusXEvent.
         * @construct-only
         * @default 0
         */
        get x(): number;

        /**
         * root-x of this IBusXEvent.
         * @construct-only
         * @default 0
         */
        get x_root(): number;

        /**
         * root-x of this IBusXEvent.
         * @construct-only
         * @default 0
         */
        get xRoot(): number;

        /**
         * x of this IBusXEvent.
         * @construct-only
         * @default 0
         */
        get y(): number;

        /**
         * root-y of this IBusXEvent.
         * @construct-only
         * @default 0
         */
        get y_root(): number;

        /**
         * root-y of this IBusXEvent.
         * @construct-only
         * @default 0
         */
        get yRoot(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: XEvent.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<XEvent.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof XEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, XEvent.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof XEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, XEvent.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof XEvent.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<XEvent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns IBusXEventType of {@link IBus.XEvent}
         */
        get_event_type(): XEventType;

        /**
         * @returns group of {@link IBus.XEvent}
         */
        get_group(): number;

        /**
         * @returns hardware keycode of {@link IBus.XEvent}
         */
        get_hardware_keycode(): number;

        /**
         * @returns is_modifier of {@link IBus.XEvent}
         */
        get_is_modifier(): boolean;

        /**
         * @returns keyval of {@link IBus.XEvent}
         */
        get_keyval(): number;

        /**
         * @returns length of {@link IBus.XEvent}
         */
        get_length(): number;

        /**
         * @returns purpose of {@link IBus.XEvent}
         */
        get_purpose(): string;

        /**
         * @returns root window of {@link IBus.XEvent}
         */
        get_root(): number;

        /**
         * @returns same_screen of {@link IBus.XEvent}
         */
        get_same_screen(): boolean;

        /**
         * @returns send_event of {@link IBus.XEvent}
         */
        get_send_event(): number;

        /**
         * @returns serial of {@link IBus.XEvent}
         */
        get_serial(): number;

        /**
         * @returns state of {@link IBus.XEvent}
         */
        get_state(): number;

        /**
         * @returns string of {@link IBus.XEvent}
         */
        get_string(): string;

        /**
         * @returns subwindow of {@link IBus.XEvent}
         */
        get_subwindow(): number;

        /**
         * @returns time of {@link IBus.XEvent}
         */
        get_time(): number;

        /**
         * @returns Version of {@link IBus.XEvent}
         */
        get_version(): number;

        /**
         * @returns XID of {@link IBus.XEvent}
         */
        get_window(): number;

        /**
         * @returns x of {@link IBus.XEvent}
         */
        get_x(): number;

        /**
         * @returns x-root of {@link IBus.XEvent}
         */
        get_x_root(): number;

        /**
         * @returns y of {@link IBus.XEvent}
         */
        get_y(): number;

        /**
         * @returns y-root of {@link IBus.XEvent}
         */
        get_y_root(): number;
    }


    /**
     * @gir-type Alias
     */
    type AttrListClass = typeof AttrList;

    /**
     * @gir-type Alias
     */
    type AttributeClass = typeof Attribute;

    /**
     * @gir-type Alias
     */
    type BusClass = typeof Bus;

    /**
     * @gir-type Struct
     */
    abstract class BusPrivate {
        static $gtype: GObject.GType<BusPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ComponentClass = typeof Component;

    /**
     * @gir-type Struct
     */
    abstract class ComponentPrivate {
        static $gtype: GObject.GType<ComponentPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ConfigClass = typeof Config;

    /**
     * @gir-type Struct
     */
    abstract class ConfigPrivate {
        static $gtype: GObject.GType<ConfigPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ConfigServiceClass = typeof ConfigService;

    /**
     * @gir-type Alias
     */
    type EmojiDataClass = typeof EmojiData;

    /**
     * @gir-type Struct
     */
    abstract class EmojiDataPrivate {
        static $gtype: GObject.GType<EmojiDataPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type EngineClass = typeof Engine;

    /**
     * @gir-type Alias
     */
    type EngineDescClass = typeof EngineDesc;

    /**
     * @gir-type Struct
     */
    abstract class EngineDescPrivate {
        static $gtype: GObject.GType<EngineDescPrivate>;
    }


    /**
     * @gir-type Struct
     */
    abstract class EnginePrivate {
        static $gtype: GObject.GType<EnginePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type EngineSimpleClass = typeof EngineSimple;

    /**
     * @gir-type Struct
     */
    abstract class EngineSimplePrivate {
        static $gtype: GObject.GType<EngineSimplePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ExtensionEventClass = typeof ExtensionEvent;

    /**
     * @gir-type Struct
     */
    abstract class ExtensionEventPrivate {
        static $gtype: GObject.GType<ExtensionEventPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type FactoryClass = typeof Factory;

    /**
     * @gir-type Struct
     */
    abstract class FactoryPrivate {
        static $gtype: GObject.GType<FactoryPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type HotkeyProfileClass = typeof HotkeyProfile;

    /**
     * @gir-type Alias
     */
    type InputContextClass = typeof InputContext;

    /**
     * @gir-type Alias
     */
    type KeymapClass = typeof Keymap;

    /**
     * @gir-type Alias
     */
    type LookupTableClass = typeof LookupTable;

    /**
     * @gir-type Alias
     */
    type MessageClass = typeof Message;

    /**
     * @gir-type Struct
     */
    abstract class MessagePrivate {
        static $gtype: GObject.GType<MessagePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ObjectClass = typeof Object;

    /**
     * @gir-type Struct
     */
    abstract class ObjectPrivate {
        static $gtype: GObject.GType<ObjectPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ObservedPathClass = typeof ObservedPath;

    /**
     * @gir-type Alias
     */
    type PanelServiceClass = typeof PanelService;

    /**
     * IBuProcessKeyEventData properties.
     * @gir-type Struct
     */
    class ProcessKeyEventData {
        static $gtype: GObject.GType<ProcessKeyEventData>;

        // Fields
        keyval: number;

        keycode: number;

        state: number;

        // Constructors

        constructor(properties?: Partial<{
            keyval: number;
            keycode: number;
            state: number;
        }>);
    }


    /**
     * @gir-type Alias
     */
    type PropListClass = typeof PropList;

    /**
     * @gir-type Alias
     */
    type PropertyClass = typeof Property;

    /**
     * @gir-type Struct
     */
    abstract class PropertyPrivate {
        static $gtype: GObject.GType<PropertyPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ProxyClass = typeof Proxy;

    /**
     * RGBA definition.
     * @gir-type Struct
     * @since 1.5.33
     */
    class RGBA {
        static $gtype: GObject.GType<RGBA>;

        // Fields
        red: number;

        green: number;

        blue: number;

        alpha: number;

        // Constructors

        constructor(properties?: Partial<{
            red: number;
            green: number;
            blue: number;
            alpha: number;
        }>);
    }


    /**
     * Rectangle definition.
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
    }


    /**
     * @gir-type Alias
     */
    type RegistryClass = typeof Registry;

    /**
     * @gir-type Struct
     */
    abstract class RegistryPrivate {
        static $gtype: GObject.GType<RegistryPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type SerializableClass = typeof Serializable;

    /**
     * @gir-type Struct
     */
    abstract class SerializablePrivate {
        static $gtype: GObject.GType<SerializablePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ServiceClass = typeof Service;

    /**
     * @gir-type Struct
     */
    abstract class ServicePrivate {
        static $gtype: GObject.GType<ServicePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type TextClass = typeof Text;

    /**
     * @gir-type Alias
     */
    type UnicodeBlockClass = typeof UnicodeBlock;

    /**
     * @gir-type Struct
     */
    abstract class UnicodeBlockPrivate {
        static $gtype: GObject.GType<UnicodeBlockPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type UnicodeDataClass = typeof UnicodeData;

    /**
     * @gir-type Struct
     */
    abstract class UnicodeDataPrivate {
        static $gtype: GObject.GType<UnicodeDataPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type XEventClass = typeof XEvent;

    /**
     * @gir-type Struct
     */
    abstract class XEventPrivate {
        static $gtype: GObject.GType<XEventPrivate>;
    }


    /**
     * IBusXML lists data structure and handling function for XML in IBus.
     * @gir-type Struct
     */
    class XML {
        static $gtype: GObject.GType<XML>;

        // Fields
        name: string;

        text: string;

        attributes: string;

        sub_nodes: null[];

        // Constructors

        constructor(properties?: Partial<{
            name: string;
            text: string;
            attributes: string;
        }>);

        // Static methods
        /**
         * Parse a string buffer which contains an XML-formatted string,
         * and return a corresponding XML tree.
         * @param buffer Buffer to be parsed.
         */
        static parse_buffer(buffer: string): XML;

        /**
         * Parse an XML file and return a corresponding XML tree.
         * @param name File name to be parsed.
         */
        static parse_file(name: string): XML;

        // Methods
        /**
         * Creates a copy of `node`, which should be freed with
         * `ibus_xml_free()`. Primarily used by language bindings,
         * not that useful otherwise (since `node` can just be copied
         * by assignment in C).
         * @returns the newly allocated {@link IBus.XML}, which should          be freed with `ibus_xml_free()`, or `null`          if `node` was `null`.
         */
        copy(): XML;

        /**
         * Free an XML tree.
         */
        free(): void;

        /**
         * Output an XML tree to a GString.
         * @param output GString which stores the output.
         */
        output(output: GLib.String): void;
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

export default IBus;

// END
