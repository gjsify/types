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

export namespace Hs {
    /**
     * Hs-1
     */

    /**
     * Supported Atari 2600 controllers.
     */

    /**
     * Supported Atari 2600 controllers.
     */
    export namespace Atari2600Controller {
        export const $gtype: GObject.GType<Atari2600Controller>;
    }

    enum Atari2600Controller {
        /**
         * No controller.
         */
        NONE,
        /**
         * Atari 2600 joystick.
         */
        JOYSTICK,
        /**
         * Sega Genesis controller.
         */
        GENESIS,
        /**
         * Joystick with three fire buttons.
         */
        THREE_BUTTON,
        /**
         * Driving controller.
         */
        DRIVING,
        /**
         * A pair of paddle controllers.
         */
        PADDLES,
    }
    /**
     * Atari 2600 difficulty switch positions.
     */

    /**
     * Atari 2600 difficulty switch positions.
     */
    export namespace Atari2600Difficulty {
        export const $gtype: GObject.GType<Atari2600Difficulty>;
    }

    enum Atari2600Difficulty {
        /**
         * Advanced (A) difficulty.
         */
        ADVANCED,
        /**
         * Beginner (B) difficulty.
         */
        BEGINNER,
    }

    export namespace Atari2600JoystickButton {
        export const $gtype: GObject.GType<Atari2600JoystickButton>;
    }

    enum Atari2600JoystickButton {
        UP,
        DOWN,
        LEFT,
        RIGHT,
        FIRE,
        FIRE_5,
        FIRE_9,
    }
    /**
     * Atari 2600 TV Type switch positions.
     */

    /**
     * Atari 2600 TV Type switch positions.
     */
    export namespace Atari2600TVType {
        export const $gtype: GObject.GType<Atari2600TVType>;
    }

    enum Atari2600TVType {
        /**
         * Color TV.
         */
        COLOR,
        /**
         * Black & white (B-W) TV.
         */
        BLACK_WHITE,
    }
    /**
     * Supported Atari 7800 controllers.
     */

    /**
     * Supported Atari 7800 controllers.
     */
    export namespace Atari7800Controller {
        export const $gtype: GObject.GType<Atari7800Controller>;
    }

    enum Atari7800Controller {
        /**
         * No controller.
         */
        NONE,
        /**
         * Atari 7800 joystick.
         */
        JOYSTICK,
        /**
         * Atari 7800 light gun.
         */
        LIGHTGUN,
    }
    /**
     * Atari 7800 difficulty switch positions.
     */

    /**
     * Atari 7800 difficulty switch positions.
     */
    export namespace Atari7800Difficulty {
        export const $gtype: GObject.GType<Atari7800Difficulty>;
    }

    enum Atari7800Difficulty {
        /**
         * Advanced (A) difficulty.
         */
        ADVANCED,
        /**
         * Beginner (B) difficulty.
         */
        BEGINNER,
    }

    export namespace Atari7800JoystickButton {
        export const $gtype: GObject.GType<Atari7800JoystickButton>;
    }

    enum Atari7800JoystickButton {
        UP,
        DOWN,
        LEFT,
        RIGHT,
        ONE,
        TWO,
    }

    export namespace AtariLynxButton {
        export const $gtype: GObject.GType<AtariLynxButton>;
    }

    enum AtariLynxButton {
        UP,
        DOWN,
        LEFT,
        RIGHT,
        A,
        B,
        OPTION1,
        OPTION2,
        PAUSE,
    }
    /**
     * An error code used in various methods in [class`Core]`.
     *
     * These errors can be used over D-Bus, mapped as:
     *
     * Error Code                            | D-Bus Error Name
     * ------------------------------------- | ------------------------------------------------------------
     * [error`Hs`.CoreError.COULDNT_LOAD_ROM] | `org.gnome.gitlab.alicem.libhighscore.Error.CouldntLoadROM`
     * [error`Hs`.CoreError.UNSUPPORTED_GAME] | `org.gnome.gitlab.alicem.libhighscore.Error.UnsupportedGame`
     * [error`Hs`.CoreError.OUT_OF_MEMORY]    | `org.gnome.gitlab.alicem.libhighscore.Error.OutOfMemory`
     * [error`Hs`.CoreError.MISSING_BIOS]     | `org.gnome.gitlab.alicem.libhighscore.Error.MissingBIOS`
     * [error`Hs`.CoreError.IO]               | `org.gnome.gitlab.alicem.libhighscore.Error.IO`
     * [error`Hs`.CoreError.INTERNAL]         | `org.gnome.gitlab.alicem.libhighscore.Error.Internal`
     */
    class CoreError extends GLib.Error {
        static $gtype: GObject.GType<CoreError>;

        // Static fields

        /**
         * Failed to load the ROM, probably invalid ROM
         */
        static COULDNT_LOAD_ROM: number;
        /**
         * The core doesn't support this game
         */
        static UNSUPPORTED_GAME: number;
        /**
         * Out of memory
         */
        static OUT_OF_MEMORY: number;
        /**
         * The core requires firmware and it's missing
         */
        static MISSING_BIOS: number;
        /**
         * Input/output errors
         */
        static IO: number;
        /**
         * Internal errors, e.g. core bugs
         */
        static INTERNAL: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        /**
         * Gets the `HsCore` error quark.
         */
        static quark(): GLib.Quark;
    }

    /**
     * An error code used in [vfunc`GLContext`.realize].
     */
    class GLContextError extends GLib.Error {
        static $gtype: GObject.GType<GLContextError>;

        // Static fields

        /**
         * incompatible GL version
         */
        static INCOMPATIBLE_VERSION: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        /**
         * Gets the GL context error quark.
         */
        static quark(): GLib.Quark;
    }

    /**
     * Describes OpenGL profiles for [iface`GLContext]`.
     */

    /**
     * Describes OpenGL profiles for [iface`GLContext]`.
     */
    export namespace GLProfile {
        export const $gtype: GObject.GType<GLProfile>;
    }

    enum GLProfile {
        /**
         * Use the core OpenGL profile
         */
        CORE,
        /**
         * Use the compatibility OpenGL profile
         */
        LEGACY,
        /**
         * Use OpenGL ES
         */
        ES,
    }

    export namespace GameBoyAdvanceButton {
        export const $gtype: GObject.GType<GameBoyAdvanceButton>;
    }

    enum GameBoyAdvanceButton {
        UP,
        DOWN,
        LEFT,
        RIGHT,
        A,
        B,
        SELECT,
        START,
        L,
        R,
    }

    export namespace GameBoyButton {
        export const $gtype: GObject.GType<GameBoyButton>;
    }

    enum GameBoyButton {
        UP,
        DOWN,
        LEFT,
        RIGHT,
        A,
        B,
        SELECT,
        START,
    }
    /**
     * Game Boy models.
     */

    /**
     * Game Boy models.
     */
    export namespace GameBoyModel {
        export const $gtype: GObject.GType<GameBoyModel>;
    }

    enum GameBoyModel {
        /**
         * Game Boy (DMG).
         */
        GAME_BOY,
        /**
         * Game Boy Pocket.
         */
        GAME_BOY_POCKET,
        /**
         * Game Boy Color.
         */
        GAME_BOY_COLOR,
        /**
         * Game Boy Advance.
         */
        GAME_BOY_ADVANCE,
        /**
         * Super Game Boy.
         */
        SUPER_GAME_BOY,
        /**
         * Super Game Boy 2.
         */
        SUPER_GAME_BOY_2,
    }

    export namespace GameGearButton {
        export const $gtype: GObject.GType<GameGearButton>;
    }

    enum GameGearButton {
        UP,
        DOWN,
        LEFT,
        RIGHT,
        ONE,
        TWO,
        START,
    }
    /**
     * Describes log levels for [method`Core`.log].
     */

    /**
     * Describes log levels for [method`Core`.log].
     */
    export namespace LogLevel {
        export const $gtype: GObject.GType<LogLevel>;
    }

    enum LogLevel {
        /**
         * Log level for debug messages.
         */
        DEBUG,
        /**
         * Log level for informational messages.
         */
        INFO,
        /**
         * Log level for messages.
         */
        MESSAGE,
        /**
         * Log level for warnings.
         */
        WARNING,
        /**
         * Log level for critical warning messages.
         */
        CRITICAL,
    }

    export namespace MasterSystemButton {
        export const $gtype: GObject.GType<MasterSystemButton>;
    }

    enum MasterSystemButton {
        UP,
        DOWN,
        LEFT,
        RIGHT,
        ONE,
        TWO,
    }

    export namespace MegaDriveButton {
        export const $gtype: GObject.GType<MegaDriveButton>;
    }

    enum MegaDriveButton {
        UP,
        DOWN,
        LEFT,
        RIGHT,
        A,
        B,
        C,
        X,
        Y,
        Z,
        START,
        MODE,
    }

    export namespace NeoGeoPocketButton {
        export const $gtype: GObject.GType<NeoGeoPocketButton>;
    }

    enum NeoGeoPocketButton {
        UP,
        DOWN,
        LEFT,
        RIGHT,
        A,
        B,
        OPTION,
    }
    /**
     * Supported NES accessories.
     */

    /**
     * Supported NES accessories.
     */
    export namespace NesAccessory {
        export const $gtype: GObject.GType<NesAccessory>;
    }

    enum NesAccessory {
        /**
         * No accessory.
         */
        NONE,
        /**
         * NES Zapper.
         */
        ZAPPER,
        /**
         * Arkanoid Vaus controller.
         */
        PADDLE,
    }

    export namespace NesButton {
        export const $gtype: GObject.GType<NesButton>;
    }

    enum NesButton {
        UP,
        DOWN,
        LEFT,
        RIGHT,
        A,
        B,
        SELECT,
        START,
    }
    /**
     * Famicom mic level.
     */

    /**
     * Famicom mic level.
     */
    export namespace NesMicLevel {
        export const $gtype: GObject.GType<NesMicLevel>;
    }

    enum NesMicLevel {
        /**
         * Quiet.
         */
        QUIET,
        /**
         * Loud.
         */
        LOUD,
    }

    export namespace Nintendo64Button {
        export const $gtype: GObject.GType<Nintendo64Button>;
    }

    enum Nintendo64Button {
        UP,
        DOWN,
        LEFT,
        RIGHT,
        A,
        B,
        C_UP,
        C_DOWN,
        C_LEFT,
        C_RIGHT,
        L,
        R,
        Z,
        START,
    }
    /**
     * Nintendo 64 controller expansions.
     */

    /**
     * Nintendo 64 controller expansions.
     */
    export namespace Nintendo64Pak {
        export const $gtype: GObject.GType<Nintendo64Pak>;
    }

    enum Nintendo64Pak {
        /**
         * No expansion.
         */
        NONE,
        /**
         * Controller Pak / Memory Pak, required for
         *     saving in some games.
         */
        MEMORY_PAK,
        /**
         * Rumble Pak, provides rumble support.
         */
        RUMBLE_PAK,
    }

    export namespace NintendoDsButton {
        export const $gtype: GObject.GType<NintendoDsButton>;
    }

    enum NintendoDsButton {
        UP,
        DOWN,
        LEFT,
        RIGHT,
        A,
        B,
        X,
        Y,
        SELECT,
        START,
        L,
        R,
    }

    export namespace PcEngineButton {
        export const $gtype: GObject.GType<PcEngineButton>;
    }

    enum PcEngineButton {
        UP,
        DOWN,
        LEFT,
        RIGHT,
        I,
        II,
        III,
        IV,
        V,
        VI,
        SELECT,
        RUN,
    }
    /**
     * TurboGrafx-16 pad mode.
     *
     * Most games only work with 2-button mode, but some have improved controls for
     * 6-button mode.
     */

    /**
     * TurboGrafx-16 pad mode.
     *
     * Most games only work with 2-button mode, but some have improved controls for
     * 6-button mode.
     */
    export namespace PcEnginePadMode {
        export const $gtype: GObject.GType<PcEnginePadMode>;
    }

    enum PcEnginePadMode {
        /**
         * Use two face buttons.
         */
        TWO_BUTTONS,
        /**
         * Use six face buttons.
         */
        SIX_BUTTONS,
    }
    /**
     * Represents the pixel formats to use for [iface`SoftwareContext]` framebuffer.
     */

    /**
     * Represents the pixel formats to use for [iface`SoftwareContext]` framebuffer.
     */
    export namespace PixelFormat {
        export const $gtype: GObject.GType<PixelFormat>;
    }

    enum PixelFormat {
        /**
         * A pixel is 24 bits long, with 8 bit for red, green
         *     and blue channels.
         */
        R8G8B8,
        /**
         * A pixel is 32 bits long, with 8 unused bits, then
         *     8 bits for red, green and blue channels each.
         */
        R8G8B8X8,
        /**
         * A pixel is 32 bits long, with 8 bits for blue,
         *     green and red channels each, followed by 8 unused bits.
         */
        B8G8R8X8,
    }
    /**
     * Represents the supported game platforms.
     */

    /**
     * Represents the supported game platforms.
     */
    export namespace Platform {
        export const $gtype: GObject.GType<Platform>;
    }

    enum Platform {
        /**
         * An unset value.
         */
        UNKNOWN,
        /**
         * Atari 2600.
         */
        ATARI_2600,
        /**
         * Atari 7800.
         */
        ATARI_7800,
        /**
         * Atari Lynx.
         */
        ATARI_LYNX,
        /**
         * Famicom Disk System, an add-on for
         *     [enum`Hs`.Platform.NES].
         */
        FAMICOM_DISK_SYSTEM,
        /**
         * Game Boy and Game Boy Color.
         */
        GAME_BOY,
        /**
         * Game Boy Advance.
         */
        GAME_BOY_ADVANCE,
        /**
         * Game Gear.
         */
        GAME_GEAR,
        /**
         * Sega Master System.
         */
        MASTER_SYSTEM,
        /**
         * Mega Drive / Sega Genesis.
         */
        MEGA_DRIVE,
        /**
         * Neo Geo Pocket and Neo Geo Pocket Color.
         */
        NEO_GEO_POCKET,
        /**
         * Nintendo Entertainment System / Famicom.
         */
        NES,
        /**
         * Nintendo 64.
         */
        NINTENDO_64,
        /**
         * Nintendo DS.
         */
        NINTENDO_DS,
        /**
         * PC Engine / TurboGrafx-16.
         */
        PC_ENGINE,
        /**
         * Super CD-ROM² / TurboGrafx-CD, an add-on for
         *     [enum`Hs`.Platform.PC_ENGINE].
         */
        PC_ENGINE_CD,
        /**
         * PlayStation.
         */
        PLAYSTATION,
        /**
         * Sega Saturn.
         */
        SEGA_SATURN,
        /**
         * SG-1000.
         */
        SG1000,
        /**
         * Super Nintendo Entertainment System / Super Famicom.
         */
        SUPER_NES,
        /**
         * Virtual Boy.
         */
        VIRTUAL_BOY,
        /**
         * WonderSwan and WonderSwan Color.
         */
        WONDERSWAN,
    }
    /**
     * BIOS type for [method`PlayStationCore`.set_bios_path].
     */

    /**
     * BIOS type for [method`PlayStationCore`.set_bios_path].
     */
    export namespace PlayStationBios {
        export const $gtype: GObject.GType<PlayStationBios>;
    }

    enum PlayStationBios {
        /**
         * Japanese BIOS (scph5500.bin)
         */
        JP,
        /**
         * US BIOS (scph5501.bin)
         */
        US,
        /**
         * European BIOS (scph5502.bin)
         */
        EU,
        N_BIOS,
    }

    export namespace PlayStationButton {
        export const $gtype: GObject.GType<PlayStationButton>;
    }

    enum PlayStationButton {
        UP,
        DOWN,
        LEFT,
        RIGHT,
        TRIANGLE,
        SQUARE,
        CIRCLE,
        CROSS,
        L1,
        L2,
        L3,
        R1,
        R2,
        R3,
        SELECT,
        START,
    }
    /**
     * DualShock modes for [method`PlayStationCore`.get_dualshock_mode] and
     * [method`PlayStationCore`.set_dualshock_mode].
     */

    /**
     * DualShock modes for [method`PlayStationCore`.get_dualshock_mode] and
     * [method`PlayStationCore`.set_dualshock_mode].
     */
    export namespace PlayStationDualShockMode {
        export const $gtype: GObject.GType<PlayStationDualShockMode>;
    }

    enum PlayStationDualShockMode {
        /**
         * Digital mode
         */
        DIGITAL,
        /**
         * Analog mode
         */
        ANALOG,
    }

    export namespace PlayStationStick {
        export const $gtype: GObject.GType<PlayStationStick>;
    }

    enum PlayStationStick {
        LEFT,
        RIGHT,
    }
    /**
     * Represents game region.
     */

    /**
     * Represents game region.
     */
    export namespace Region {
        export const $gtype: GObject.GType<Region>;
    }

    enum Region {
        /**
         * This game doesn't have a region (e.g. it's a handheld game).
         */
        UNKNOWN,
        /**
         * This game runs on NTSC TVs.
         */
        NTSC,
        /**
         * This game runs on PAL TVs.
         */
        PAL,
    }
    /**
     * Describes the controller types for the 3D Control Pad
     */

    /**
     * Describes the controller types for the 3D Control Pad
     */
    export namespace SegaSaturn3DPadMode {
        export const $gtype: GObject.GType<SegaSaturn3DPadMode>;
    }

    enum SegaSaturn3DPadMode {
        DIGITAL,
        ANALOG,
    }
    /**
     * BIOS type for [method`SegaSaturnCore`.set_bios_path].
     */

    /**
     * BIOS type for [method`SegaSaturnCore`.set_bios_path].
     */
    export namespace SegaSaturnBios {
        export const $gtype: GObject.GType<SegaSaturnBios>;
    }

    enum SegaSaturnBios {
        /**
         * Japanese BIOS (sega_101.bin)
         */
        JP,
        /**
         * International BIOS (mpr-17933.bin)
         */
        US_EU,
    }

    export namespace SegaSaturnButton {
        export const $gtype: GObject.GType<SegaSaturnButton>;
    }

    enum SegaSaturnButton {
        UP,
        DOWN,
        LEFT,
        RIGHT,
        A,
        B,
        C,
        X,
        Y,
        Z,
        L,
        R,
        START,
    }
    /**
     * Controller type for [method`SegaSaturnCore`.set_controller].
     */

    /**
     * Controller type for [method`SegaSaturnCore`.set_controller].
     */
    export namespace SegaSaturnController {
        export const $gtype: GObject.GType<SegaSaturnController>;
    }

    enum SegaSaturnController {
        CONTROL_PAD,
        '3D_CONTROL_PAD',
    }

    export namespace Sg1000Button {
        export const $gtype: GObject.GType<Sg1000Button>;
    }

    enum Sg1000Button {
        UP,
        DOWN,
        LEFT,
        RIGHT,
        ONE,
        TWO,
    }

    export namespace SuperNesButton {
        export const $gtype: GObject.GType<SuperNesButton>;
    }

    enum SuperNesButton {
        UP,
        DOWN,
        LEFT,
        RIGHT,
        A,
        B,
        X,
        Y,
        SELECT,
        START,
        L,
        R,
    }

    export namespace VirtualBoyButton {
        export const $gtype: GObject.GType<VirtualBoyButton>;
    }

    enum VirtualBoyButton {
        L_UP,
        L_DOWN,
        L_LEFT,
        L_RIGHT,
        R_UP,
        R_DOWN,
        R_LEFT,
        R_RIGHT,
        A,
        B,
        SELECT,
        START,
        L,
        R,
    }

    export namespace WonderSwanButton {
        export const $gtype: GObject.GType<WonderSwanButton>;
    }

    enum WonderSwanButton {
        X1,
        X2,
        X3,
        X4,
        Y1,
        Y2,
        Y3,
        Y4,
        A,
        B,
        START,
    }
    /**
     * The maximum number of players in Atari 2600 games.
     */
    const ATARI_2600_MAX_PLAYERS: number;
    /**
     * The maximum number of players in Atari 7800 games.
     */
    const ATARI_7800_MAX_PLAYERS: number;
    /**
     * The number of Atari Lynx buttons.
     */
    const ATARI_LYNX_N_BUTTONS: number;
    /**
     * The number of Game Boy Advance buttons.
     */
    const GAME_BOY_ADVANCE_N_BUTTONS: number;
    /**
     * The number of Game Boy buttons.
     */
    const GAME_BOY_N_BUTTONS: number;
    /**
     * The number of Game Gear buttons.
     */
    const GAME_GEAR_N_BUTTONS: number;
    /**
     * libhighscore major version component (e.g. 1 if the version is 1.2.3)
     */
    const MAJOR_VERSION: number;
    /**
     * The maximum number of players in Master System games.
     */
    const MASTER_SYSTEM_MAX_PLAYERS: number;
    /**
     * The number of Master System pad buttons.
     */
    const MASTER_SYSTEM_N_BUTTONS: number;
    /**
     * The maximum allowed duration in [method`Core`.rumble], in milliseconds.
     */
    const MAX_RUMBLE_DURATION: number;
    /**
     * The maximum number of players in Mega Drive games.
     */
    const MEGA_DRIVE_MAX_PLAYERS: number;
    /**
     * The number of Mega Drive pad buttons.
     */
    const MEGA_DRIVE_N_BUTTONS: number;
    /**
     * libhighscore micro version component (e.g. 3 if the version is 1.2.3)
     */
    const MICRO_VERSION: number;
    /**
     * libhighscore minor version component (e.g. 2 if the version is 1.2.3)
     */
    const MINOR_VERSION: number;
    /**
     * The number of Neo Geo Pocket buttons.
     */
    const NEO_GEO_POCKET_N_BUTTONS: number;
    /**
     * The maximum number of players in NES games.
     */
    const NES_MAX_PLAYERS: number;
    /**
     * The number of NES pad buttons.
     */
    const NES_N_BUTTONS: number;
    /**
     * The maximum number of players in Nintendo 64 games.
     */
    const NINTENDO_64_MAX_PLAYERS: number;
    /**
     * The number of Nintendo 64 pad buttons.
     */
    const NINTENDO_64_N_BUTTONS: number;
    /**
     * The number of Nintendo DS buttons.
     */
    const NINTENDO_DS_N_BUTTONS: number;
    /**
     * The maximum number of players in TurboGrafx-16 games.
     */
    const PC_ENGINE_MAX_PLAYERS: number;
    /**
     * The number of TurboGrafx-16 pad buttons.
     */
    const PC_ENGINE_N_BUTTONS: number;
    /**
     * The maximum number of players in PlayStation games.
     */
    const PLAYSTATION_MAX_PLAYERS: number;
    /**
     * The number of PlayStation pad buttons.
     */
    const PLAYSTATION_N_BUTTONS: number;
    /**
     * The number of PlayStation pad sticks.
     */
    const PLAYSTATION_N_STICKS: number;
    /**
     * The maximum number of players in Sega Saturn games.
     */
    const SEGA_SATURN_MAX_PLAYERS: number;
    /**
     * The number of Sega Saturn pad buttons.
     */
    const SEGA_SATURN_N_BUTTONS: number;
    /**
     * The maximum number of players in SG-1000 games.
     */
    const SG1000_MAX_PLAYERS: number;
    /**
     * The number of SG-1000 pad buttons.
     */
    const SG1000_N_BUTTONS: number;
    /**
     * The maximum number of players in Super NES games.
     */
    const SUPER_NES_MAX_PLAYERS: number;
    /**
     * The number of Super NES pad buttons.
     */
    const SUPER_NES_N_BUTTONS: number;
    /**
     * libhighscore version, encoded as a string, useful for printing and
     * concatenation.
     */
    const VERSION_S: string;
    /**
     * The number of Virtual Boy buttons.
     */
    const VIRTUAL_BOY_N_BUTTONS: number;
    /**
     * The number of WonderSwan buttons.
     */
    const WONDERSWAN_N_BUTTONS: number;
    /**
     * Gets the `HsCore` error quark.
     * @returns the quark
     */
    function core_error_quark(): GLib.Quark;
    /**
     * Gets the GL context error quark.
     * @returns a quark
     */
    function gl_context_error_quark(): GLib.Quark;
    /**
     * Gets the size of a pixel in a given format, in bytes.
     * @param format a pixel format
     * @returns the size of a pixel
     */
    function pixel_format_get_pixel_size(format: PixelFormat | null): number;
    /**
     * Gets the base platform for `platform`.
     *
     * If `platform` is an add-on for another platform, returns the other platform.
     * Specifically, it returns:
     *
     * - [enum`Hs`.Platform.NES] for [enum`Hs`.Platform.FAMICOM_DISK_SYSTEM];
     * - [enum`Hs`.Platform.PC_ENGINE] for [enum`Hs`.Platform.PC_ENGINE_CD].
     *
     * Otherwise, returns `platform`.
     * @param platform a platform
     * @returns the base platform
     */
    function platform_get_base_platform(platform: Platform | null): Platform;
    /**
     * Gets the platform matching `name`.
     *
     * The names are the same ones as returned by [func`Platform`.get_name].
     * @param name a platform name
     * @returns the platform for @name
     */
    function platform_get_from_name(name: string): Platform;
    /**
     * Gets the name of `platform`.
     *
     * The names are listed in the
     * [core descriptor documentation](core-descriptors.html#platforms).
     * @param platform a platform
     * @returns the platform name
     */
    function platform_get_name(platform: Platform | null): string;
    interface StateCallback {
        (self: Core): void;
    }
    /**
     * Flags that can be passed when creating a [iface`GLContext]`.
     */

    /**
     * Flags that can be passed when creating a [iface`GLContext]`.
     */
    export namespace GLFlags {
        export const $gtype: GObject.GType<GLFlags>;
    }

    enum GLFlags {
        /**
         * Default flags.
         */
        DEFAULT,
        /**
         * Attach a depth buffer to the default framebuffer.
         */
        DEPTH,
        /**
         * Attach a stencil buffer to the default framebuffer.
         */
        STENCIL,
        /**
         * The output will be flipped and frontend must flip it
         *     back before displaying.
         */
        FLIPPED,
        /**
         * The core will download the data from GPU and
         *     needs direct access to a software buffer.
         * ::: important
         *     Direct framebuffer access prevents some optimizations in the frontend and
         *     should only be used as the last resort.
         */
        DIRECT_FB_ACCESS,
    }
    namespace Core {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::current-media': (pspec: GObject.ParamSpec) => void;
            'notify::frontend': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::platform': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            current_media: number;
            currentMedia: number;
            frontend: Frontend;
            name: string;
            platform: Platform;
        }
    }

    /**
     * Base class for the cores.
     *
     * To register the core in the frontend, it must have an exported function
     * `GType hs_get_core_type (void)`, returning the [alias`GObject`.Type] of the
     * core class.
     *
     * Subclasses must override the following virtual methods:
     *
     * - [vfunc`Core`.load_rom]
     * - [vfunc`Core`.poll_input]
     * - [vfunc`Core`.run_frame]
     * - [vfunc`Core`.reset]
     * - [vfunc`Core`.reload_save]
     * - [vfunc`Core`.load_state]
     * - [vfunc`Core`.save_state]
     * - [vfunc`Core`.get_frame_rate]
     * - [vfunc`Core`.get_aspect_ratio]
     * - [vfunc`Core`.get_sample_rate]
     *
     * Everything else is optional and should be overridden as needed for the
     * particular core.
     *
     * `HsCore` also provides methods proxying to [iface`Frontend]`, such as
     * [method`Core`.play_samples]. This is done just for convenience, so that cores
     * don't have to use [method`Core`.get_frontend] manually.
     *
     * ## Platform Support
     *
     * Every platform has its own interface for platform-specific methods:
     * [iface`NesCore]` for NES and so on. Cores must implement the corresponding
     * interfaces for their supported platforms.
     *
     * ## Running the Game
     *
     * Every core must override the [vfunc`Core`.load_rom] method and load the
     * provided game, as well as initialize input and output within it.
     *
     * After that, the game can be started using the [vfunc`Core`.start] method, and
     * stopped with [vfunc`Core`.stop]. When pausing and unpausing the game,
     * [vfunc`Core`.pause] and [vfunc`Core`.resume] will be called respectively. All
     * of these methods are optional, for example a single-threaded core doesn't
     * need to override `pause()` and `resume()`.
     *
     * On every frame, the frontend calls [vfunc`Core`.run_frame]. The core is
     * expected to run a single frame of emulation in it, as well as output video
     * and audio as appropriate.
     *
     * The game can be reset with [vfunc`Core`.reset].
     *
     * ## Region
     *
     * Cores should override the [vfunc`Core`.get_region] method to signal their
     * region (NTSC/PAL) where appropriate. The frontend may use this info for e.g.
     * deciding which video filter to use.
     *
     * ## Input
     *
     * The core must override the [vfunc`Core`.poll_input] method and read input from
     * the provided [struct`InputState]`.
     *
     * `HsInputState` contains input data for every platform, and the core must only
     * access the state from its current platform. If the core supports multiple
     * platforms, it must query the current platform first. Accessing any other
     * platform will result in undefined behavior.
     *
     * The specific layout of the input data will differ depending on the platform,
     * see the corresponding documentation - for example, [struct`NesInputState]` for
     * NES.
     *
     * ::: note
     *     Add-on platforms do not have their own input state and reuse the one from
     *     their base platform.
     *
     * ### Rumble
     *
     * To use gamepad rumble, call [method`Core`.rumble].
     *
     * ## Audio Output
     *
     * Cores must override the [vfunc`Core`.get_sample_rate] method, providing their
     * audio sample rate. Optionally, [vfunc`Core`.get_channels] can be overridden as
     * well, providing the number of audio channels the core uses. If not
     * overridden, frontend will assume 2 channels.
     *
     * To play audio, the core should call [method`Core`.play_samples]. The number
     * of samples should be consistent with the framerate.
     *
     * ## Video Output
     *
     * Every core must override the [vfunc`Core`.get_frame_rate] and
     * [vfunc`Core`.get_aspect_ratio] methods, reporting their current framerate and
     * aspect ratio.
     *
     * ### Software Rendering
     *
     * To use software rendering, the core must create a context using
     * [method`Core`.create_software_context] within `load_rom()`.
     *
     * For software contexts, the size and format of the framebuffer must be
     * provided right away and cannot be changed later, though the core is allowed
     * to recreate the context later. If the core can use multiple resolutions and
     * it's not known at the creation time, provide the maximum size, and then use a
     * smaller area via [method`SoftwareContext`.set_area] and/or
     * [method`SoftwareContext`.set_row_stride].
     *
     * To output the data, call [method`SoftwareContext`.get_framebuffer] and write
     * your pixel data into that buffer. This must be done in
     * [vfunc`Core`.run_frame].
     *
     * ### OpenGL Rendering
     *
     * To use OpenGL, the core must create a context using
     * [method`Core`.create_gl_context] within `load_rom()`.
     *
     * GL contexts need to be realized before being used, using
     * [method`GLContext`.realize]. This can fail, for example if the core requested
     * an unavailable profile or version. If that happens, the core should try a
     * different configuration or software rendering if possible, before failing to
     * load entirely.
     *
     * After that, the context needs to be resized using [method`GLContext`.set_size].
     * This can be done at any time.
     *
     * The core must render its output into the default framebuffer, provided by the
     * frontend and accessed with [method`GLContext`.get_default_framebuffer]. The
     * framebuffer will have a color attachment, as well as depth and stencil
     * attachment according to the flags passed into `create_gl_context()`.
     *
     * Use [method`GLContext`.get_proc_address] to retrieve OpenGL symbols if the
     * core doesn't have a way to do it on its own.
     *
     * After rendering each frame, the core must call
     * [method`GLContext`.swap_buffers].
     *
     * OpenGL core output will often be vertically flipped. Pass
     * [flags`Hs`.GLFlags.FLIPPED] flag when creating the context to let the frontend
     * know that this is the case.
     *
     * In some cases, the output data will be pre-downloaded and post-processed on
     * CPU. Instead of uploading it back to GPU, pass the
     * [flags`Hs`.GLFlags.DIRECT_FB_ACCESS] flag when creating the context, and then
     * use [method`GLContext`.acquire_framebuffer] and
     * [method`GLContext`.release_framebuffer] to access the underlying framebuffer.
     *
     * ::: important
     *     Using direct framebuffer access prevents some optimizations in the
     *     frontend and should only be used as the last resort.
     *
     * Before disposing the context, [method`GLContext`.unrealize] must be called.
     *
     * ## Save Data
     *
     * The save data is stored in the save location, received as the `save_path`
     * parameter in [vfunc`Core`.load_rom] and [vfunc`Core`.reload_save].
     *
     * The core can either save its data directly into that location, or create a
     * folder there and have save data inside it.
     *
     * The frontend provides no guarantees about the ROM filenames, so the core must
     * not base its save data filenames on the ROM filename. Instead, use names like
     * `save`, `save.dat`, or base it on the game's internal identifiers.
     *
     * The core does not have to monitor the save location for changes - when the
     * frontend changes the save data, it must call [vfunc`Core`.reload_save] to
     * request that. Note that the save path may be different with every
     * `reload_save()` call, and the core needs to switch to the new path and forget
     * about the previous location.
     *
     * Some cores update their save data as soon as possible, whenever the game
     * modifies it. Those cores that don't do that must implement
     * [vfunc`Core`.sync_save] and save it there.
     *
     * ## Save States
     *
     * Cores must override two methods: [vfunc`Core`.load_state] and
     * [vfunc`Core`.save_state]. Both of these methods are asynchronous and don't
     * have to be completed right away.
     *
     * ## Multiple Media
     *
     * Some games come on multiple media, e.g. multiple CDs on PlayStation. In that
     * case, [vfunc`Core`.load_rom] will receive multiple filenames in `rom_paths`
     * and the core will need to switch which disc is currently active.
     *
     * For this, the core must implement [vfunc`Core`.get_current_media] and
     * [vfunc`Core`.set_current_media]. They will be called by the frontend to query
     * and change the current media respectively.
     *
     * When changing the current media from the core (both within
     * `set_current_media()` and otherwise), the core must call
     * [method`Core`.notify_current_media].
     *
     * The frontend can access [property`Core:`current-media] for convenience.
     *
     * ## Logging
     *
     * To log information, use [method`Core`.log]. It's `printf()`-formatted and has
     * [method`Core`.log_valist] and [method`Core`.log_literal] variants as well.
     *
     * Cores should not output anything directly to standard output.
     *
     * ## Cache
     *
     * Some cores need a location for temporary files, shader cache etc. Use
     * [method`Core`.get_cache_path] to get the cache location. Cores should not use
     * any other directories for this purpose.
     *
     * The core is responsible for creating the cache file/directory if it doesn't
     * exist.
     *
     * ::: note
     *     The frontend may use a shared directory for everything or a separate
     *     directory for each game. Do not store per-game data like saves in the
     *     cache location.
     */
    abstract class Core extends GObject.Object {
        static $gtype: GObject.GType<Core>;

        // Properties

        /**
         * Index of the current media (e.g. a CD on PlayStation).
         *
         * To use it, cores must implement [vfunc`Core`.get_current_media] and
         * [vfunc`Core`.set_current_media]. Otherwise, it's always set to 0.
         *
         * To notify this property, use [method`Core`.notify_current_media].
         */
        get current_media(): number;
        set current_media(val: number);
        /**
         * Index of the current media (e.g. a CD on PlayStation).
         *
         * To use it, cores must implement [vfunc`Core`.get_current_media] and
         * [vfunc`Core`.set_current_media]. Otherwise, it's always set to 0.
         *
         * To notify this property, use [method`Core`.notify_current_media].
         */
        get currentMedia(): number;
        set currentMedia(val: number);
        /**
         * The `HsFrontend` instance, set by the frontend.
         *
         * Cores shouldn't touch this property directly, but instead use methods like
         * [method`Core`.play_samples].
         */
        get frontend(): Frontend;
        set frontend(val: Frontend);
        /**
         * The core name, set by the frontend.
         *
         * Matches the `Name` key from the descriptor file.
         */
        get name(): string;
        /**
         * The game platform, set by the frontend.
         *
         * Cores that support multiple platforms can query it to determine the current
         * platform.
         */
        get platform(): Platform;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Core.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Core.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Core.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Core.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Core.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Core.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Core.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Core.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Gets the aspect ratio of `self`.
         */
        vfunc_get_aspect_ratio(): number;
        /**
         * Gets the number of audio channels `self` uses.
         *
         * If not implemented, assumes 2 channel.
         */
        vfunc_get_channels(): number;
        /**
         * Gets index of the current media (e.g. a CD on PlayStation).
         */
        vfunc_get_current_media(): number;
        /**
         * Gets the frame rate of `self` in frames per second.
         */
        vfunc_get_frame_rate(): number;
        /**
         * Gets the region of the current game.
         *
         * If not implemented, assumes `[enum`Hs`.Region.UNKNOWN].
         */
        vfunc_get_region(): Region;
        /**
         * Gets the sample rate of `self`.
         */
        vfunc_get_sample_rate(): number;
        /**
         * Loads a game from `rom_paths,` with the save data at `save_path`.
         *
         * If the save data exists, it's guaranteed to be present at `save_path` by the
         * time this method is called.
         *
         * The core should initialize the emulation, as well as audio and video output
         * here.
         * @param rom_paths an array of file paths
         * @param save_path path of the save location
         */
        vfunc_load_rom(rom_paths: string[], save_path: string): boolean;
        /**
         * Called when `self` is paused.
         *
         * Multi-threaded cores should pause the background threads here.
         */
        vfunc_pause(): void;
        /**
         * Reads input from `input_state`.
         *
         * Frontend will call this before [vfunc`Core`.run_frame]. Cores must read the
         * provided input from `input_state` here, corresponding to their current
         * platform.
         *
         * ::: note
         *     Add-on platforms do not have their own input state and reuse the one from
         *     their base platform.
         * @param input_state a snapshot of the current input state
         */
        vfunc_poll_input(input_state: InputState): void;
        /**
         * Reloads the save data from `save_path`.
         *
         * The core must switch its save data location to `save_path` and forget about
         * the previous location.
         *
         * If the save data exists, it's guaranteed to be present at `save_path` by the
         * time this method is called.
         * @param save_path path of the save location
         */
        vfunc_reload_save(save_path: string): boolean;
        /**
         * Resets the game running in `self`.
         *
         * If `hard` is `TRUE`, performs a hard reset (turning the system off and back
         * on), otherwise a soft reset if available (pressing the reset button).
         * @param hard whether to perform a hard reset
         */
        vfunc_reset(hard: boolean): void;
        /**
         * Called when `self` is resumed from a pause.
         *
         * Multi-threaded cores should unpause the background threads here.
         */
        vfunc_resume(): void;
        /**
         * Runs a single frame of emulation.
         *
         * When using software rendering, the cores are expected to access
         * [method`SoftwareContext`.get_framebuffer] here and nowhere else.
         */
        vfunc_run_frame(): void;
        /**
         * Sets index of the current media (e.g. a CD on PlayStation).
         * @param media index of the newly selected media
         */
        vfunc_set_current_media(media: number): void;
        /**
         * Starts the game.
         *
         * The game must have already been loaded in the [vfunc`Core`.load_rom] function.
         */
        vfunc_start(): void;
        /**
         * Stops the running the game.
         *
         * The game must have already been loaded in the [vfunc`Core`.load_rom] function
         * and started with [vfunc`Core`.start].
         *
         * The core should undo everything created in `load_rom()`. When using GL
         * rendering, [method`GLContext`.unrealize] should be called before disposing
         * the context.
         */
        vfunc_stop(): void;
        /**
         * Syncs the save data.
         *
         * Cores that don't sync it as soon as the game modifies it must do it here
         * instead.
         */
        vfunc_sync_save(): boolean;

        // Methods

        /**
         * Creates an OpenGL context for `self`.
         *
         * The context will use the provided profile and version.
         *
         * The context must be realized before use, using [method`GLContext`.realize].
         * `realize()` can fail, for example if the requested profile and/or version is
         * not available.
         * @param profile the OpenGL profile
         * @param major_version major version, e.g. 3 in 3.2
         * @param minor_version minor version, e.g. 2 in 3.2
         * @param flags additional parameters for the context
         * @returns a newly created OpenGL context
         */
        create_gl_context(
            profile: GLProfile | null,
            major_version: number,
            minor_version: number,
            flags: GLFlags | null,
        ): GLContext;
        /**
         * Creates a software rendering context for `self`.
         *
         * The context will have a framebuffer with the size `width` × `height,` with the
         * pixel format defined by `format`. The size and format cannot be changed later,
         * though the core is allowed to recreate the context.
         *
         * If the core can use multiple resolutions and it's not known at the creation
         * time, provide the maximum size, and then use a smaller area via
         * [method`SoftwareContext`.set_area] and/or
         * [method`SoftwareContext`.set_row_stride].
         * @param width framebuffer width
         * @param height framebuffer height
         * @param format the pixel format
         * @returns a newly created software rendering context
         */
        create_software_context(width: number, height: number, format: PixelFormat | null): SoftwareContext;
        /**
         * Gets the aspect ratio of `self`.
         * @returns the aspect ratio
         */
        get_aspect_ratio(): number;
        /**
         * Gets the path to the cache location.
         *
         * It can be used for temporary files, cache and so on. Cores should not use
         * any other directories for this purpose.
         *
         * The core is responsible for creating the cache file/directory if it doesn't
         * exist.
         *
         * ::: note
         *     The frontend may use a shared directory for everything or a separate
         *     directory for each game. Do not store per-game data like saves in the
         *     cache location.
         * @returns the cache path
         */
        get_cache_path(): string;
        /**
         * Gets the number of audio channels `self` uses.
         *
         * If not implemented, assumes 2 channel.
         * @returns the number of channels.
         */
        get_channels(): number;
        /**
         * Gets index of the current media (e.g. a CD on PlayStation).
         * @returns index of the current media
         */
        get_current_media(): number;
        /**
         * Gets the frame rate of `self` in frames per second.
         * @returns the frame rate
         */
        get_frame_rate(): number;
        /**
         * Gets the `HsFrontend` instance.
         *
         * Cores shouldn't call this method directly, but instead use methods like
         * [method`Core`.play_samples].
         * @returns the frontend instance
         */
        get_frontend(): Frontend | null;
        /**
         * Gets the name of `self`.
         *
         * Matches the `Name` key from the descriptor file.
         */
        get_name(): string;
        /**
         * Gets the current game platform.
         *
         * Cores that support multiple platforms can query it to determine the current
         * platform.
         */
        get_platform(): Platform;
        /**
         * Gets the region of the current game.
         *
         * If not implemented, assumes `[enum`Hs`.Region.UNKNOWN].
         * @returns the region
         */
        get_region(): Region;
        /**
         * Gets the sample rate of `self`.
         * @returns the sample rate
         */
        get_sample_rate(): number;
        /**
         * Loads a game from `rom_paths,` with the save data at `save_path`.
         *
         * If the save data exists, it's guaranteed to be present at `save_path` by the
         * time this method is called.
         *
         * The core should initialize the emulation, as well as audio and video output
         * here.
         * @param rom_paths an array of file paths
         * @param save_path path of the save location
         * @returns `TRUE` on successful load, `FALSE` on error
         */
        load_rom(rom_paths: string[], save_path: string): boolean;
        /**
         * Loads a save state from `path`.
         * @param path path to the save state file
         * @param cancellable an optional cancellable object
         */
        load_state(path: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Loads a save state from `path`.
         * @param path path to the save state file
         * @param cancellable an optional cancellable object
         * @param callback the async callback to call when     the load is finished
         */
        load_state(
            path: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Loads a save state from `path`.
         * @param path path to the save state file
         * @param cancellable an optional cancellable object
         * @param callback the async callback to call when     the load is finished
         */
        load_state(
            path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an asynchronous save state loading operation started with
         * [method`Core`.load_state].
         * @param result a `GAsyncResult`
         * @returns `TRUE` on successful load, `FALSE` on error
         */
        load_state_finish(result: Gio.AsyncResult): boolean;
        /**
         * Logs `message` with the log level `level`.
         *
         * Cores should not output anything directly to stdout.
         * @param level the log level
         * @param message the message to log
         */
        log_literal(level: LogLevel | null, message: string): void;
        /**
         * Called when the current media index changes.
         *
         * Notifies [property`Core:`current-media].
         */
        notify_current_media(): void;
        /**
         * Called when `self` is paused.
         *
         * Multi-threaded cores should pause the background threads here.
         */
        pause(): void;
        /**
         * Plays provided audio samples.
         *
         * The samples must be 16 bit, signed, interleaved.
         * @param samples the sample data
         */
        play_samples(samples: number[]): void;
        /**
         * Reads input from `input_state`.
         *
         * Frontend will call this before [vfunc`Core`.run_frame]. Cores must read the
         * provided input from `input_state` here, corresponding to their current
         * platform.
         *
         * ::: note
         *     Add-on platforms do not have their own input state and reuse the one from
         *     their base platform.
         * @param input_state a snapshot of the current input state
         */
        poll_input(input_state: InputState): void;
        /**
         * Reloads the save data from `save_path`.
         *
         * The core must switch its save data location to `save_path` and forget about
         * the previous location.
         *
         * If the save data exists, it's guaranteed to be present at `save_path` by the
         * time this method is called.
         * @param save_path path of the save location
         * @returns `TRUE` on success, `FALSE` if there was an error.
         */
        reload_save(save_path: string): boolean;
        /**
         * Resets the game running in `self`.
         *
         * If `hard` is `TRUE`, performs a hard reset (turning the system off and back
         * on), otherwise a soft reset if available (pressing the reset button).
         * @param hard whether to perform a hard reset
         */
        reset(hard: boolean): void;
        /**
         * Called when `self` is resumed from a pause.
         *
         * Multi-threaded cores should unpause the background threads here.
         */
        resume(): void;
        /**
         * Makes `player'`s controller rumble for `milliseconds`.
         *
         * The heavy and light motors will rumble at their respectively defined
         * magnitudes, in the [0-1] range, 0 meaning no rumble, 1 meaning very strong
         * rumble.
         *
         * `milliseconds` cannot exceed [const`MAX_RUMBLE_DURATION]`.
         * @param player the player to do rumble for
         * @param strong_magnitude the magnitude for the heavy motor
         * @param weak_magnitude the magnitude for the light motor
         * @param milliseconds the rumble effect play time in milliseconds
         */
        rumble(player: number, strong_magnitude: number, weak_magnitude: number, milliseconds: number): void;
        /**
         * Runs a single frame of emulation.
         *
         * When using software rendering, the cores are expected to access
         * [method`SoftwareContext`.get_framebuffer] here and nowhere else.
         */
        run_frame(): void;
        /**
         * Saves the current state into `path`.
         * @param path path to the save state location
         * @param cancellable an optional cancellable object
         */
        save_state(path: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Saves the current state into `path`.
         * @param path path to the save state location
         * @param cancellable an optional cancellable object
         * @param callback the async callback to call when     the save is finished
         */
        save_state(
            path: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Saves the current state into `path`.
         * @param path path to the save state location
         * @param cancellable an optional cancellable object
         * @param callback the async callback to call when     the save is finished
         */
        save_state(
            path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an asynchronous state saving operation started with
         * [method`Core`.save_state].
         * @param result a `GAsyncResult`
         * @returns `TRUE` on successful load, `FALSE` on error
         */
        save_state_finish(result: Gio.AsyncResult): boolean;
        /**
         * Sets index of the current media (e.g. a CD on PlayStation).
         * @param media index of the newly selected media
         */
        set_current_media(media: number): void;
        /**
         * Sets the `HsFrontend` instance.
         *
         * This should be called from the frontend to enable methods like
         * [method`Core`.play_samples] to work.
         *
         * Cores must never call this function.
         * @param frontend the new frontend instance
         */
        set_frontend(frontend?: Frontend | null): void;
        /**
         * Starts the game.
         *
         * The game must have already been loaded in the [vfunc`Core`.load_rom] function.
         */
        start(): void;
        /**
         * Stops the running the game.
         *
         * The game must have already been loaded in the [vfunc`Core`.load_rom] function
         * and started with [vfunc`Core`.start].
         *
         * The core should undo everything created in `load_rom()`. When using GL
         * rendering, [method`GLContext`.unrealize] should be called before disposing
         * the context.
         */
        stop(): void;
        /**
         * Syncs the save data.
         *
         * Cores that don't sync it as soon as the game modifies it must do it here
         * instead.
         * @returns `TRUE` on success, `FALSE` if there was an error.
         */
        sync_save(): boolean;
    }

    type Atari2600CoreInterface = typeof Atari2600Core;
    class Atari2600InputState {
        static $gtype: GObject.GType<Atari2600InputState>;

        // Fields

        joystick: number[];
        driving_axis: number[];
        driving_fire: boolean[];
        paddle_axis: number[];
        paddle_speed: number[];
        paddle_fire: boolean[];
        tv_type: Atari2600TVType;
        difficulty: Atari2600Difficulty[];
        select_switch: boolean;
    }

    type Atari7800CoreInterface = typeof Atari7800Core;
    class Atari7800InputState {
        static $gtype: GObject.GType<Atari7800InputState>;

        // Fields

        joystick: number[];
        lightgun_fire: boolean;
        lightgun_x: number;
        lightgun_y: number;
        difficulty: Atari7800Difficulty[];
        pause_button: boolean;
        select_button: boolean;
    }

    type AtariLynxCoreInterface = typeof AtariLynxCore;
    class AtariLynxInputState {
        static $gtype: GObject.GType<AtariLynxInputState>;

        // Fields

        buttons: number;

        // Constructors

        constructor(
            properties?: Partial<{
                buttons: number;
            }>,
        );
    }

    type CoreClass = typeof Core;
    type FdsCoreInterface = typeof FdsCore;
    type FrontendInterface = typeof Frontend;
    type GLContextInterface = typeof GLContext;
    type GameBoyAdvanceCoreInterface = typeof GameBoyAdvanceCore;
    class GameBoyAdvanceInputState {
        static $gtype: GObject.GType<GameBoyAdvanceInputState>;

        // Fields

        buttons: number;

        // Constructors

        constructor(
            properties?: Partial<{
                buttons: number;
            }>,
        );
    }

    type GameBoyCoreInterface = typeof GameBoyCore;
    class GameBoyInputState {
        static $gtype: GObject.GType<GameBoyInputState>;

        // Fields

        buttons: number;

        // Constructors

        constructor(
            properties?: Partial<{
                buttons: number;
            }>,
        );
    }

    type GameGearCoreInterface = typeof GameGearCore;
    class GameGearInputState {
        static $gtype: GObject.GType<GameGearInputState>;

        // Fields

        buttons: number;

        // Constructors

        constructor(
            properties?: Partial<{
                buttons: number;
            }>,
        );
    }

    type MasterSystemCoreInterface = typeof MasterSystemCore;
    class MasterSystemInputState {
        static $gtype: GObject.GType<MasterSystemInputState>;

        // Fields

        pad_buttons: number[];
        pause_button: boolean;
        light_phaser_fire: boolean;
        light_phaser_x: number;
        light_phaser_y: number;

        // Constructors

        constructor(
            properties?: Partial<{
                pad_buttons: number[];
                pause_button: boolean;
                light_phaser_fire: boolean;
                light_phaser_x: number;
                light_phaser_y: number;
            }>,
        );
    }

    type MegaDriveCoreInterface = typeof MegaDriveCore;
    class MegaDriveInputState {
        static $gtype: GObject.GType<MegaDriveInputState>;

        // Fields

        pad_buttons: number[];

        // Constructors

        constructor(
            properties?: Partial<{
                pad_buttons: number[];
            }>,
        );
    }

    type NeoGeoPocketCoreInterface = typeof NeoGeoPocketCore;
    class NeoGeoPocketInputState {
        static $gtype: GObject.GType<NeoGeoPocketInputState>;

        // Fields

        buttons: number;

        // Constructors

        constructor(
            properties?: Partial<{
                buttons: number;
            }>,
        );
    }

    type NesCoreInterface = typeof NesCore;
    class NesInputState {
        static $gtype: GObject.GType<NesInputState>;

        // Fields

        pad_buttons: number[];
        mic_level: NesMicLevel;
        zapper_fire: boolean;
        zapper_x: number;
        zapper_y: number;
        paddle_position: number;
        paddle_speed: number;
        paddle_button: boolean;
    }

    type Nintendo64CoreInterface = typeof Nintendo64Core;
    class Nintendo64InputState {
        static $gtype: GObject.GType<Nintendo64InputState>;

        // Fields

        pad_buttons: number[];
        pad_control_stick_x: number[];
        pad_control_stick_y: number[];

        // Constructors

        constructor(
            properties?: Partial<{
                pad_buttons: number[];
                pad_control_stick_x: number[];
                pad_control_stick_y: number[];
            }>,
        );
    }

    type NintendoDsCoreInterface = typeof NintendoDsCore;
    class NintendoDsInputState {
        static $gtype: GObject.GType<NintendoDsInputState>;

        // Fields

        buttons: number;
        touch_pressed: boolean;
        touch_x: number;
        touch_y: number;
        mic_active: boolean;

        // Constructors

        constructor(
            properties?: Partial<{
                buttons: number;
                touch_pressed: boolean;
                touch_x: number;
                touch_y: number;
                mic_active: boolean;
            }>,
        );
    }

    type PcEngineCdCoreInterface = typeof PcEngineCdCore;
    type PcEngineCoreInterface = typeof PcEngineCore;
    class PcEngineInputState {
        static $gtype: GObject.GType<PcEngineInputState>;

        // Fields

        pad_buttons: number[];
        pad_mode: PcEnginePadMode[];
    }

    type PlayStationCoreInterface = typeof PlayStationCore;
    class PlayStationInputState {
        static $gtype: GObject.GType<PlayStationInputState>;

        // Fields

        pad_buttons: number[];
        pad_sticks_x: number[];
        pad_sticks_y: number[];

        // Constructors

        constructor(
            properties?: Partial<{
                pad_buttons: number[];
                pad_sticks_x: number[];
                pad_sticks_y: number[];
            }>,
        );
    }

    /**
     * An integer rectangle.
     *
     * Used for [method`SoftwareContext`.set_area].
     */
    class Rectangle {
        static $gtype: GObject.GType<Rectangle>;

        // Fields

        x: number;
        y: number;
        width: number;
        height: number;

        // Constructors

        constructor(
            properties?: Partial<{
                x: number;
                y: number;
                width: number;
                height: number;
            }>,
        );

        // Methods

        /**
         * Copies `self`.
         * @returns a copy of @self
         */
        copy(): Rectangle;
        /**
         * Frees `self`.
         */
        free(): void;
        /**
         * Initializes the given rectangle with the given values.
         * @param x the X coordinate of the top left corner
         * @param y the Y coordinate of the top left corner
         * @param width the width of the rectangle
         * @param height the height of the rectangle
         */
        init(x: number, y: number, width: number, height: number): void;
    }

    type SegaSaturnCoreInterface = typeof SegaSaturnCore;
    class SegaSaturnInputState {
        static $gtype: GObject.GType<SegaSaturnInputState>;

        // Fields

        pad_buttons: number[];
        pad_mode: SegaSaturn3DPadMode[];
        pad_stick_x: number[];
        pad_stick_y: number[];
        pad_left_trigger: number[];
        pad_right_trigger: number[];
    }

    type Sg1000CoreInterface = typeof Sg1000Core;
    class Sg1000InputState {
        static $gtype: GObject.GType<Sg1000InputState>;

        // Fields

        pad_buttons: number[];
        pause_button: boolean;

        // Constructors

        constructor(
            properties?: Partial<{
                pad_buttons: number[];
                pause_button: boolean;
            }>,
        );
    }

    type SoftwareContextInterface = typeof SoftwareContext;
    type SuperNesCoreInterface = typeof SuperNesCore;
    class SuperNesInputState {
        static $gtype: GObject.GType<SuperNesInputState>;

        // Fields

        pad_buttons: number[];

        // Constructors

        constructor(
            properties?: Partial<{
                pad_buttons: number[];
            }>,
        );
    }

    type VirtualBoyCoreInterface = typeof VirtualBoyCore;
    class VirtualBoyInputState {
        static $gtype: GObject.GType<VirtualBoyInputState>;

        // Fields

        buttons: number;

        // Constructors

        constructor(
            properties?: Partial<{
                buttons: number;
            }>,
        );
    }

    type WonderSwanCoreInterface = typeof WonderSwanCore;
    class WonderSwanInputState {
        static $gtype: GObject.GType<WonderSwanInputState>;

        // Fields

        buttons: number;

        // Constructors

        constructor(
            properties?: Partial<{
                buttons: number;
            }>,
        );
    }

    /**
     * A union of input states from the different platforms.
     *
     * Cores should access it from [vfunc`Core`.poll_input], only for their current
     * platform.
     * *
     * ::: note
     *     Add-on platforms do not have their own input state and reuse the one from
     *     their base platform.
     */
    class InputState {
        static $gtype: GObject.GType<InputState>;

        // Fields

        atari_lynx: AtariLynxInputState;
        game_boy: GameBoyInputState;
        game_boy_advance: GameBoyAdvanceInputState;
        game_gear: GameGearInputState;
        master_system: MasterSystemInputState;
        mega_drive: MegaDriveInputState;
        neo_geo_pocket: NeoGeoPocketInputState;
        nintendo_64: Nintendo64InputState;
        nintendo_ds: NintendoDsInputState;
        psx: PlayStationInputState;
        sg1000: Sg1000InputState;
        super_nes: SuperNesInputState;
        virtual_boy: VirtualBoyInputState;
        wonderswan: WonderSwanInputState;
    }

    namespace Atari2600Core {
        /**
         * Interface for implementing Atari2600Core.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Gets the current controller for `player`.
             * @param player the player
             */
            vfunc_get_controller(player: number): Atari2600Controller;
            /**
             * Gets the default difficulty for `player`.
             *
             * Player 0 corresponds to the left difficulty switch, player 2 to the right
             * difficulty switch.
             * @param player the player
             */
            vfunc_get_default_difficulty(player: number): Atari2600Difficulty;
        }

        // Constructor properties interface

        interface ConstructorProps extends Core.ConstructorProps {}
    }

    export interface Atari2600CoreNamespace {
        $gtype: GObject.GType<Atari2600Core>;
        prototype: Atari2600Core;
    }
    interface Atari2600Core extends Core, Atari2600Core.Interface {
        // Methods

        /**
         * Gets the current controller for `player`.
         * @param player the player
         * @returns the controller
         */
        get_controller(player: number): Atari2600Controller;
        /**
         * Gets the default difficulty for `player`.
         *
         * Player 0 corresponds to the left difficulty switch, player 2 to the right
         * difficulty switch.
         * @param player the player
         * @returns the controller
         */
        get_default_difficulty(player: number): Atari2600Difficulty;
    }

    export const Atari2600Core: Atari2600CoreNamespace & {
        new (): Atari2600Core; // This allows `obj instanceof Atari2600Core`
    };

    namespace Atari7800Core {
        /**
         * Interface for implementing Atari7800Core.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Gets the current controller for `player`.
             * @param player the player
             */
            vfunc_get_controller(player: number): Atari7800Controller;
            /**
             * Gets the default difficulty for `player`.
             *
             * Player 0 corresponds to the left difficulty switch, player 2 to the right
             * difficulty switch.
             * @param player the player
             */
            vfunc_get_default_difficulty(player: number): Atari7800Difficulty;
        }

        // Constructor properties interface

        interface ConstructorProps extends Core.ConstructorProps {}
    }

    export interface Atari7800CoreNamespace {
        $gtype: GObject.GType<Atari7800Core>;
        prototype: Atari7800Core;
    }
    interface Atari7800Core extends Core, Atari7800Core.Interface {
        // Methods

        /**
         * Gets the current controller for `player`.
         * @param player the player
         * @returns the controller
         */
        get_controller(player: number): Atari7800Controller;
        /**
         * Gets the default difficulty for `player`.
         *
         * Player 0 corresponds to the left difficulty switch, player 2 to the right
         * difficulty switch.
         * @param player the player
         * @returns the controller
         */
        get_default_difficulty(player: number): Atari7800Difficulty;
    }

    export const Atari7800Core: Atari7800CoreNamespace & {
        new (): Atari7800Core; // This allows `obj instanceof Atari7800Core`
    };

    namespace AtariLynxCore {
        /**
         * Interface for implementing AtariLynxCore.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Sets the path to the Lynx boot ROM.
             * @param path the path to the BIOS
             */
            vfunc_set_bios_path(path: string): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Core.ConstructorProps {}
    }

    export interface AtariLynxCoreNamespace {
        $gtype: GObject.GType<AtariLynxCore>;
        prototype: AtariLynxCore;
    }
    interface AtariLynxCore extends Core, AtariLynxCore.Interface {
        // Methods

        /**
         * Sets the path to the Lynx boot ROM.
         * @param path the path to the BIOS
         */
        set_bios_path(path: string): void;
    }

    export const AtariLynxCore: AtariLynxCoreNamespace & {
        new (): AtariLynxCore; // This allows `obj instanceof AtariLynxCore`
    };

    namespace FdsCore {
        /**
         * Interface for implementing FdsCore.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Gets the number of disk sides.
             *
             * For multi-disk games, the number of sides may go above 2. For example, if a
             * game consists of 3 disks, the number of sides will be 6.
             */
            vfunc_get_n_sides(): number;
            /**
             * Gets the current disk side.
             *
             * Side A corresponds to 0, side B to 1.
             *
             * If a game consists of multiple disks, disk 2 side A corresponds to 3, and so
             * on.
             */
            vfunc_get_side(): number;
            /**
             * Sets the path to the Famicom Disk System BIOS.
             * @param path the path to the BIOS
             */
            vfunc_set_bios_path(path: string): void;
            /**
             * Sets the current disk side.
             *
             * Side A corresponds to 0, side B to 1.
             *
             * If a game consists of multiple disks, disk 2 side A corresponds to 3, and so
             * on.
             * @param side the new disk side
             */
            vfunc_set_side(side: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Core.ConstructorProps {}
    }

    export interface FdsCoreNamespace {
        $gtype: GObject.GType<FdsCore>;
        prototype: FdsCore;
    }
    interface FdsCore extends Core, FdsCore.Interface {
        // Methods

        /**
         * Gets the number of disk sides.
         *
         * For multi-disk games, the number of sides may go above 2. For example, if a
         * game consists of 3 disks, the number of sides will be 6.
         * @returns the number of disk sides
         */
        get_n_sides(): number;
        /**
         * Gets the current disk side.
         *
         * Side A corresponds to 0, side B to 1.
         *
         * If a game consists of multiple disks, disk 2 side A corresponds to 3, and so
         * on.
         * @returns the current side
         */
        get_side(): number;
        /**
         * Sets the path to the Famicom Disk System BIOS.
         * @param path the path to the BIOS
         */
        set_bios_path(path: string): void;
        /**
         * Sets the current disk side.
         *
         * Side A corresponds to 0, side B to 1.
         *
         * If a game consists of multiple disks, disk 2 side A corresponds to 3, and so
         * on.
         * @param side the new disk side
         */
        set_side(side: number): void;
    }

    export const FdsCore: FdsCoreNamespace & {
        new (): FdsCore; // This allows `obj instanceof FdsCore`
    };

    namespace Frontend {
        /**
         * Interface for implementing Frontend.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Creates an OpenGL context.
             *
             * The context will use the provided profile and version.
             *
             * The context must be realized before use, using [method`GLContext`.realize].
             * `realize()` can fail, for example if the requested profile and/or version is
             * not available.
             * @param profile the OpenGL profile
             * @param major_version major version, e.g. 3 in 3.2
             * @param minor_version minor version, e.g. 2 in 3.2
             * @param flags additional parameters for the context
             */
            vfunc_create_gl_context(
                profile: GLProfile,
                major_version: number,
                minor_version: number,
                flags: GLFlags,
            ): GLContext;
            /**
             * Creates a software rendering context.
             *
             * The context will have a framebuffer with the size `width` × `height,` with the
             * pixel format defined by `format`. The size and format cannot be changed later,
             * though the core is allowed to recreate the context.
             *
             * If the core can use multiple resolutions and it's not known at the creation
             * time, provide the maximum size, and then use a smaller area via
             * [method`SoftwareContext`.set_area] and/or
             * [method`SoftwareContext`.set_row_stride].
             * @param width framebuffer width
             * @param height framebuffer height
             * @param format the pixel format
             */
            vfunc_create_software_context(width: number, height: number, format: PixelFormat): SoftwareContext;
            /**
             * Gets the path to the cache location.
             *
             * It can be used for temporary files, cache and so on. Cores should not use
             * any other directories for this purpose.
             *
             * The core is responsible for creating the cache file/directory if it doesn't
             * exist.
             *
             * The frontend is allowed to use a shared directory for everything or a
             * separate directory for each game.
             */
            vfunc_get_cache_path(): string;
            /**
             * Logs `message` with the log level `level`.
             *
             * Cores should not output anything directly to stdout.
             * @param level the log level
             * @param message the message to log
             */
            vfunc_log(level: LogLevel, message: string): void;
            /**
             * Plays provided audio samples.
             *
             * The samples must be 16 bit, signed, interleaved.
             * @param samples the sample data
             */
            vfunc_play_samples(samples: number[]): void;
            /**
             * Makes `player'`s controller rumble for `milliseconds`.
             *
             * The heavy and light motors will rumble at their respectively defined
             * magnitudes, in the [0-1] range, 0 meaning no rumble, 1 meaning very strong
             * rumble.
             *
             * `milliseconds` cannot exceed [const`MAX_RUMBLE_DURATION]`.
             * @param player the player to do rumble for
             * @param strong_magnitude the magnitude for the heavy motor
             * @param weak_magnitude the magnitude for the light motor
             * @param milliseconds the rumble effect play time in milliseconds
             */
            vfunc_rumble(player: number, strong_magnitude: number, weak_magnitude: number, milliseconds: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface FrontendNamespace {
        $gtype: GObject.GType<Frontend>;
        prototype: Frontend;
    }
    interface Frontend extends GObject.Object, Frontend.Interface {
        // Methods

        /**
         * Creates an OpenGL context.
         *
         * The context will use the provided profile and version.
         *
         * The context must be realized before use, using [method`GLContext`.realize].
         * `realize()` can fail, for example if the requested profile and/or version is
         * not available.
         * @param profile the OpenGL profile
         * @param major_version major version, e.g. 3 in 3.2
         * @param minor_version minor version, e.g. 2 in 3.2
         * @param flags additional parameters for the context
         * @returns a newly created OpenGL context
         */
        create_gl_context(
            profile: GLProfile | null,
            major_version: number,
            minor_version: number,
            flags: GLFlags | null,
        ): GLContext;
        /**
         * Creates a software rendering context.
         *
         * The context will have a framebuffer with the size `width` × `height,` with the
         * pixel format defined by `format`. The size and format cannot be changed later,
         * though the core is allowed to recreate the context.
         *
         * If the core can use multiple resolutions and it's not known at the creation
         * time, provide the maximum size, and then use a smaller area via
         * [method`SoftwareContext`.set_area] and/or
         * [method`SoftwareContext`.set_row_stride].
         * @param width framebuffer width
         * @param height framebuffer height
         * @param format the pixel format
         * @returns a newly created software rendering context
         */
        create_software_context(width: number, height: number, format: PixelFormat | null): SoftwareContext;
        /**
         * Gets the path to the cache location.
         *
         * It can be used for temporary files, cache and so on. Cores should not use
         * any other directories for this purpose.
         *
         * The core is responsible for creating the cache file/directory if it doesn't
         * exist.
         *
         * The frontend is allowed to use a shared directory for everything or a
         * separate directory for each game.
         * @returns the cache path
         */
        get_cache_path(): string;
        /**
         * Logs `message` with the log level `level`.
         *
         * Cores should not output anything directly to stdout.
         * @param level the log level
         * @param message the message to log
         */
        log(level: LogLevel | null, message: string): void;
        /**
         * Plays provided audio samples.
         *
         * The samples must be 16 bit, signed, interleaved.
         * @param samples the sample data
         */
        play_samples(samples: number[]): void;
        /**
         * Makes `player'`s controller rumble for `milliseconds`.
         *
         * The heavy and light motors will rumble at their respectively defined
         * magnitudes, in the [0-1] range, 0 meaning no rumble, 1 meaning very strong
         * rumble.
         *
         * `milliseconds` cannot exceed [const`MAX_RUMBLE_DURATION]`.
         * @param player the player to do rumble for
         * @param strong_magnitude the magnitude for the heavy motor
         * @param weak_magnitude the magnitude for the light motor
         * @param milliseconds the rumble effect play time in milliseconds
         */
        rumble(player: number, strong_magnitude: number, weak_magnitude: number, milliseconds: number): void;
    }

    export const Frontend: FrontendNamespace & {
        new (): Frontend; // This allows `obj instanceof Frontend`
    };

    namespace GLContext {
        /**
         * Interface for implementing GLContext.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Locks and returns the software framebuffer for direct rendering.
             *
             * Can only be called if [flags`Hs`.GLFlags.DIRECT_FB_ACCESS] is set.
             */
            vfunc_acquire_framebuffer(): any | null;
            /**
             * Gets the name of the default framebuffer object.
             *
             * The cores must render into this framebuffer, unless
             * [flags`Hs`.GLFlags.DIRECT_FB_ACCESS] is set.
             */
            vfunc_get_default_framebuffer(): number;
            /**
             * Retrieves a GL symbol with the name `name`.
             * @param name name of a GL symbol
             */
            vfunc_get_proc_address(name: string): any | null;
            /**
             * Initializes GL resources for `self`.
             *
             * [error`Hs`.GLContextError.INCOMPATIBLE_VERSION] will be returned if the core
             * requested an unavailable version. If this happens, the core should dispose
             * `self` and try to create a context for a lower version, or otherwise fall back
             * to software rendering or fail entirely.
             *
             * Frontend is responsible for automatically unrealizing the context if an error
             * happens here.
             */
            vfunc_realize(): boolean;
            /**
             * Unlocks the software framebuffer.
             *
             * Can only be called if [flags`Hs`.GLFlags.DIRECT_FB_ACCESS] is set.
             */
            vfunc_release_framebuffer(): void;
            /**
             * Resizes the default framebuffer to `width` × `height`.
             * @param width the framebuffer width
             * @param height the framebuffer height
             */
            vfunc_set_size(width: number, height: number): void;
            /**
             * Swap buffers and end the current frame.
             *
             * Cores must call this at the end of each frame.
             */
            vfunc_swap_buffers(): void;
            /**
             * Destroys GL resources for `self`.
             *
             * Must be called by the core before disposing the context.
             */
            vfunc_unrealize(): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface GLContextNamespace {
        $gtype: GObject.GType<GLContext>;
        prototype: GLContext;
    }
    interface GLContext extends GObject.Object, GLContext.Interface {
        // Methods

        /**
         * Locks and returns the software framebuffer for direct rendering.
         *
         * Can only be called if [flags`Hs`.GLFlags.DIRECT_FB_ACCESS] is set.
         * @returns location of the software framebuffer
         */
        acquire_framebuffer(): any | null;
        /**
         * Gets the name of the default framebuffer object.
         *
         * The cores must render into this framebuffer, unless
         * [flags`Hs`.GLFlags.DIRECT_FB_ACCESS] is set.
         */
        get_default_framebuffer(): number;
        /**
         * Retrieves a GL symbol with the name `name`.
         * @param name name of a GL symbol
         * @returns location of the symbol
         */
        get_proc_address(name: string): any | null;
        /**
         * Initializes GL resources for `self`.
         *
         * [error`Hs`.GLContextError.INCOMPATIBLE_VERSION] will be returned if the core
         * requested an unavailable version. If this happens, the core should dispose
         * `self` and try to create a context for a lower version, or otherwise fall back
         * to software rendering or fail entirely.
         *
         * Frontend is responsible for automatically unrealizing the context if an error
         * happens here.
         * @returns `TRUE` is @self was successfully realized, `FALSE` on error
         */
        realize(): boolean;
        /**
         * Unlocks the software framebuffer.
         *
         * Can only be called if [flags`Hs`.GLFlags.DIRECT_FB_ACCESS] is set.
         */
        release_framebuffer(): void;
        /**
         * Resizes the default framebuffer to `width` × `height`.
         * @param width the framebuffer width
         * @param height the framebuffer height
         */
        set_size(width: number, height: number): void;
        /**
         * Swap buffers and end the current frame.
         *
         * Cores must call this at the end of each frame.
         */
        swap_buffers(): void;
        /**
         * Destroys GL resources for `self`.
         *
         * Must be called by the core before disposing the context.
         */
        unrealize(): void;
    }

    export const GLContext: GLContextNamespace & {
        new (): GLContext; // This allows `obj instanceof GLContext`
    };

    namespace GameBoyAdvanceCore {
        // Constructor properties interface

        interface ConstructorProps extends Core.ConstructorProps {}
    }

    export interface GameBoyAdvanceCoreNamespace {
        $gtype: GObject.GType<GameBoyAdvanceCore>;
        prototype: GameBoyAdvanceCore;
    }
    interface GameBoyAdvanceCore extends Core {}

    export const GameBoyAdvanceCore: GameBoyAdvanceCoreNamespace & {
        new (): GameBoyAdvanceCore; // This allows `obj instanceof GameBoyAdvanceCore`
    };

    namespace GameBoyCore {
        /**
         * Interface for implementing GameBoyCore.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Sets the Game Boy model.
             * @param model the new model
             */
            vfunc_set_model(model: GameBoyModel): void;
            /**
             * Sets a palette to use for Game Boy games.
             *
             * `n_colors` must be either 4 or 12.
             *
             * Each of the colors in `colors` is an sRGB color in the hex representation.
             *
             * Does not affect Game Boy Color and Super Game Boy games.
             * @param colors colors
             */
            vfunc_set_palette(colors: number[]): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Core.ConstructorProps {}
    }

    export interface GameBoyCoreNamespace {
        $gtype: GObject.GType<GameBoyCore>;
        prototype: GameBoyCore;
    }
    interface GameBoyCore extends Core, GameBoyCore.Interface {
        // Methods

        /**
         * Sets the Game Boy model.
         * @param model the new model
         */
        set_model(model: GameBoyModel | null): void;
        /**
         * Sets a palette to use for Game Boy games.
         *
         * `n_colors` must be either 4 or 12.
         *
         * Each of the colors in `colors` is an sRGB color in the hex representation.
         *
         * Does not affect Game Boy Color and Super Game Boy games.
         * @param colors colors
         */
        set_palette(colors: number[]): void;
    }

    export const GameBoyCore: GameBoyCoreNamespace & {
        new (): GameBoyCore; // This allows `obj instanceof GameBoyCore`
    };

    namespace GameGearCore {
        // Constructor properties interface

        interface ConstructorProps extends Core.ConstructorProps {}
    }

    export interface GameGearCoreNamespace {
        $gtype: GObject.GType<GameGearCore>;
        prototype: GameGearCore;
    }
    interface GameGearCore extends Core {}

    export const GameGearCore: GameGearCoreNamespace & {
        new (): GameGearCore; // This allows `obj instanceof GameGearCore`
    };

    namespace MasterSystemCore {
        /**
         * Interface for implementing MasterSystemCore.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Gets the number of players in the current game.
             *
             * If not overridden, returns [const`MASTER_SYSTEM_MAX_PLAYERS]`.
             */
            vfunc_get_players(): number;
            /**
             * Sets whether to use FM audio.
             *
             * Only works for games that support the FM Sound Unit.
             * @param enable_fm_audio whether to use FM audio
             */
            vfunc_set_enable_fm_audio(enable_fm_audio: boolean): void;
            /**
             * Sets whether to use Light Phaser.
             *
             * Only works for games that support Light Phaser.
             * @param enable_light_phaser whether to use Light Phaser
             */
            vfunc_set_enable_light_phaser(enable_light_phaser: boolean): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Core.ConstructorProps {}
    }

    export interface MasterSystemCoreNamespace {
        $gtype: GObject.GType<MasterSystemCore>;
        prototype: MasterSystemCore;
    }
    interface MasterSystemCore extends Core, MasterSystemCore.Interface {
        // Methods

        /**
         * Gets the number of players in the current game.
         *
         * If not overridden, returns [const`MASTER_SYSTEM_MAX_PLAYERS]`.
         * @returns the number of players
         */
        get_players(): number;
        /**
         * Sets whether to use FM audio.
         *
         * Only works for games that support the FM Sound Unit.
         * @param enable_fm_audio whether to use FM audio
         */
        set_enable_fm_audio(enable_fm_audio: boolean): void;
        /**
         * Sets whether to use Light Phaser.
         *
         * Only works for games that support Light Phaser.
         * @param enable_light_phaser whether to use Light Phaser
         */
        set_enable_light_phaser(enable_light_phaser: boolean): void;
    }

    export const MasterSystemCore: MasterSystemCoreNamespace & {
        new (): MasterSystemCore; // This allows `obj instanceof MasterSystemCore`
    };

    namespace MegaDriveCore {
        /**
         * Interface for implementing MegaDriveCore.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Gets the number of players in the current game.
             *
             * If not overridden, returns [const`MEGA_DRIVE_MAX_PLAYERS]`.
             */
            vfunc_get_players(): number;
        }

        // Constructor properties interface

        interface ConstructorProps extends Core.ConstructorProps {}
    }

    export interface MegaDriveCoreNamespace {
        $gtype: GObject.GType<MegaDriveCore>;
        prototype: MegaDriveCore;
    }
    interface MegaDriveCore extends Core, MegaDriveCore.Interface {
        // Methods

        /**
         * Gets the number of players in the current game.
         *
         * If not overridden, returns [const`MEGA_DRIVE_MAX_PLAYERS]`.
         * @returns the number of players
         */
        get_players(): number;
    }

    export const MegaDriveCore: MegaDriveCoreNamespace & {
        new (): MegaDriveCore; // This allows `obj instanceof MegaDriveCore`
    };

    namespace NeoGeoPocketCore {
        // Constructor properties interface

        interface ConstructorProps extends Core.ConstructorProps {}
    }

    export interface NeoGeoPocketCoreNamespace {
        $gtype: GObject.GType<NeoGeoPocketCore>;
        prototype: NeoGeoPocketCore;
    }
    interface NeoGeoPocketCore extends Core {}

    export const NeoGeoPocketCore: NeoGeoPocketCoreNamespace & {
        new (): NeoGeoPocketCore; // This allows `obj instanceof NeoGeoPocketCore`
    };

    namespace NesCore {
        /**
         * Interface for implementing NesCore.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Gets the current accessory, if any.
             */
            vfunc_get_accessory(): NesAccessory;
            /**
             * Gets whether the current game supports mic input.
             */
            vfunc_get_has_mic(): boolean;
            /**
             * Gets the number of players in the current game.
             *
             * If not overridden, returns [const`NES_MAX_PLAYERS]`.
             */
            vfunc_get_players(): number;
        }

        // Constructor properties interface

        interface ConstructorProps extends Core.ConstructorProps {}
    }

    export interface NesCoreNamespace {
        $gtype: GObject.GType<NesCore>;
        prototype: NesCore;
    }
    interface NesCore extends Core, NesCore.Interface {
        // Methods

        /**
         * Gets the current accessory, if any.
         * @returns the current accessory, or `HS_NES_ACCESSORY_NONE`
         */
        get_accessory(): NesAccessory;
        /**
         * Gets whether the current game supports mic input.
         * @returns whether the current game supports mic
         */
        get_has_mic(): boolean;
        /**
         * Gets the number of players in the current game.
         *
         * If not overridden, returns [const`NES_MAX_PLAYERS]`.
         * @returns the number of players
         */
        get_players(): number;
    }

    export const NesCore: NesCoreNamespace & {
        new (): NesCore; // This allows `obj instanceof NesCore`
    };

    namespace Nintendo64Core {
        /**
         * Interface for implementing Nintendo64Core.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Gets the number of players in the current game.
             */
            vfunc_get_players(): number;
            /**
             * Sets the controller for `player`.
             * @param player the player
             * @param present whether a controller is plugged in
             * @param pak the extension plugged into the controller
             */
            vfunc_set_controller(player: number, present: boolean, pak: Nintendo64Pak): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Core.ConstructorProps {}
    }

    export interface Nintendo64CoreNamespace {
        $gtype: GObject.GType<Nintendo64Core>;
        prototype: Nintendo64Core;
    }
    interface Nintendo64Core extends Core, Nintendo64Core.Interface {
        // Methods

        /**
         * Gets the number of players in the current game.
         * @returns the number of players
         */
        get_players(): number;
        /**
         * Sets the controller for `player`.
         * @param player the player
         * @param present whether a controller is plugged in
         * @param pak the extension plugged into the controller
         */
        set_controller(player: number, present: boolean, pak: Nintendo64Pak | null): void;
    }

    export const Nintendo64Core: Nintendo64CoreNamespace & {
        new (): Nintendo64Core; // This allows `obj instanceof Nintendo64Core`
    };

    namespace NintendoDsCore {
        // Constructor properties interface

        interface ConstructorProps extends Core.ConstructorProps {}
    }

    export interface NintendoDsCoreNamespace {
        $gtype: GObject.GType<NintendoDsCore>;
        prototype: NintendoDsCore;
    }
    interface NintendoDsCore extends Core {}

    export const NintendoDsCore: NintendoDsCoreNamespace & {
        new (): NintendoDsCore; // This allows `obj instanceof NintendoDsCore`
    };

    namespace PcEngineCdCore {
        /**
         * Interface for implementing PcEngineCdCore.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Sets the path to the System Card 3.
             * @param path the path to the BIOS
             */
            vfunc_set_bios_path(path: string): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Core.ConstructorProps {}
    }

    export interface PcEngineCdCoreNamespace {
        $gtype: GObject.GType<PcEngineCdCore>;
        prototype: PcEngineCdCore;
    }
    interface PcEngineCdCore extends Core, PcEngineCdCore.Interface {
        // Methods

        /**
         * Sets the path to the System Card 3.
         * @param path the path to the BIOS
         */
        set_bios_path(path: string): void;
    }

    export const PcEngineCdCore: PcEngineCdCoreNamespace & {
        new (): PcEngineCdCore; // This allows `obj instanceof PcEngineCdCore`
    };

    namespace PcEngineCore {
        /**
         * Interface for implementing PcEngineCore.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Gets the number of players in the current game.
             *
             * If not overridden, returns [const`PC_ENGINE_MAX_PLAYERS]`.
             */
            vfunc_get_players(): number;
        }

        // Constructor properties interface

        interface ConstructorProps extends Core.ConstructorProps {}
    }

    export interface PcEngineCoreNamespace {
        $gtype: GObject.GType<PcEngineCore>;
        prototype: PcEngineCore;
    }
    interface PcEngineCore extends Core, PcEngineCore.Interface {
        // Methods

        /**
         * Gets the number of players in the current game.
         *
         * If not overridden, returns [const`PC_ENGINE_MAX_PLAYERS]`.
         * @returns the number of players
         */
        get_players(): number;
    }

    export const PcEngineCore: PcEngineCoreNamespace & {
        new (): PcEngineCore; // This allows `obj instanceof PcEngineCore`
    };

    namespace PlayStationCore {
        /**
         * Interface for implementing PlayStationCore.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Gets the mode DualShock is using for `player`.
             *
             * If not using DualShock, returns [enum`Hs`.PlayStationDualShockMode.DIGITAL].
             * @param player the player
             */
            vfunc_get_dualshock_mode(player: number): PlayStationDualShockMode;
            /**
             * Gets the number of players in the current game.
             *
             * If not overridden, returns [const`PLAYSTATION_MAX_PLAYERS]`.
             */
            vfunc_get_players(): number;
            /**
             * Gets the currently used PlayStation BIOS type.
             */
            vfunc_get_used_bios(): PlayStationBios;
            /**
             * Sets the path to the PlayStation BIOS specified by `type`.
             * @param type The BIOS type
             * @param path the path to the BIOS
             */
            vfunc_set_bios_path(type: PlayStationBios, path: string): void;
            /**
             * Sets the mode DualShock is using for `player`.
             *
             * This can fail if the game doesn't allow to change modes.
             * @param player the player
             * @param mode the new mode
             */
            vfunc_set_dualshock_mode(player: number, mode: PlayStationDualShockMode): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends Core.ConstructorProps {}
    }

    export interface PlayStationCoreNamespace {
        $gtype: GObject.GType<PlayStationCore>;
        prototype: PlayStationCore;
    }
    interface PlayStationCore extends Core, PlayStationCore.Interface {
        // Methods

        /**
         * Notifies frontend when DualShock mode changes for `player`.
         *
         * See [method`PlayStationCore`.set_dualshock_mode].
         * @param player the player
         */
        emit_dualshock_mode_changed(player: number): void;
        /**
         * Gets the mode DualShock is using for `player`.
         *
         * If not using DualShock, returns [enum`Hs`.PlayStationDualShockMode.DIGITAL].
         * @param player the player
         * @returns the DualShock mode
         */
        get_dualshock_mode(player: number): PlayStationDualShockMode;
        /**
         * Gets the number of players in the current game.
         *
         * If not overridden, returns [const`PLAYSTATION_MAX_PLAYERS]`.
         * @returns the number of players
         */
        get_players(): number;
        /**
         * Gets the currently used PlayStation BIOS type.
         * @returns the BIOS type
         */
        get_used_bios(): PlayStationBios;
        /**
         * Sets the path to the PlayStation BIOS specified by `type`.
         * @param type The BIOS type
         * @param path the path to the BIOS
         */
        set_bios_path(type: PlayStationBios | null, path: string): void;
        /**
         * Sets the mode DualShock is using for `player`.
         *
         * This can fail if the game doesn't allow to change modes.
         * @param player the player
         * @param mode the new mode
         * @returns whether the mode was changed
         */
        set_dualshock_mode(player: number, mode: PlayStationDualShockMode | null): boolean;
    }

    export const PlayStationCore: PlayStationCoreNamespace & {
        new (): PlayStationCore; // This allows `obj instanceof PlayStationCore`
    };

    namespace SegaSaturnCore {
        /**
         * Interface for implementing SegaSaturnCore.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Gets the number of players in the current game.
             *
             * If not overridden, returns [const`SEGA_SATURN_MAX_PLAYERS]`.
             */
            vfunc_get_players(): number;
            /**
             * Gets the currently used Sega Saturn BIOS type.
             */
            vfunc_get_used_bios(): SegaSaturnBios;
            /**
             * Sets the path to the Sega Saturn BIOS specified by `type`.
             * @param type The BIOS type
             * @param path the path to the BIOS
             */
            vfunc_set_bios_path(type: SegaSaturnBios, path: string): void;
            /**
             * Sets the controller for `player`.
             * @param player the player
             * @param controller the controller to use for this player
             */
            vfunc_set_controller(player: number, controller: SegaSaturnController): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Core.ConstructorProps {}
    }

    export interface SegaSaturnCoreNamespace {
        $gtype: GObject.GType<SegaSaturnCore>;
        prototype: SegaSaturnCore;
    }
    interface SegaSaturnCore extends Core, SegaSaturnCore.Interface {
        // Methods

        /**
         * Gets the number of players in the current game.
         *
         * If not overridden, returns [const`SEGA_SATURN_MAX_PLAYERS]`.
         * @returns the number of players
         */
        get_players(): number;
        /**
         * Gets the currently used Sega Saturn BIOS type.
         * @returns the BIOS type
         */
        get_used_bios(): SegaSaturnBios;
        /**
         * Sets the path to the Sega Saturn BIOS specified by `type`.
         * @param type The BIOS type
         * @param path the path to the BIOS
         */
        set_bios_path(type: SegaSaturnBios | null, path: string): void;
        /**
         * Sets the controller for `player`.
         * @param player the player
         * @param controller the controller to use for this player
         */
        set_controller(player: number, controller: SegaSaturnController | null): void;
    }

    export const SegaSaturnCore: SegaSaturnCoreNamespace & {
        new (): SegaSaturnCore; // This allows `obj instanceof SegaSaturnCore`
    };

    namespace Sg1000Core {
        /**
         * Interface for implementing Sg1000Core.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Gets the number of players in the current game.
             *
             * If not overridden, returns [const`SG1`000_MAX_PLAYERS].
             */
            vfunc_get_players(): number;
        }

        // Constructor properties interface

        interface ConstructorProps extends Core.ConstructorProps {}
    }

    export interface Sg1000CoreNamespace {
        $gtype: GObject.GType<Sg1000Core>;
        prototype: Sg1000Core;
    }
    interface Sg1000Core extends Core, Sg1000Core.Interface {
        // Methods

        /**
         * Gets the number of players in the current game.
         *
         * If not overridden, returns [const`SG1`000_MAX_PLAYERS].
         * @returns the number of players
         */
        get_players(): number;
    }

    export const Sg1000Core: Sg1000CoreNamespace & {
        new (): Sg1000Core; // This allows `obj instanceof Sg1000Core`
    };

    namespace SoftwareContext {
        /**
         * Interface for implementing SoftwareContext.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Retrieves the framebuffer to render into.
             */
            vfunc_get_framebuffer(): any | null;
            /**
             * Sets the usable area within the framebuffer.
             *
             * The frontend will display this area and ignore the rest of the buffer.
             * @param area the new area
             */
            vfunc_set_area(area: Rectangle): void;
            /**
             * Sets the row stride for `self`.
             *
             * By default the row stride is equal to width multiplied by the size of a
             * single pixel.
             * @param row_stride the new row stride
             */
            vfunc_set_row_stride(row_stride: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface SoftwareContextNamespace {
        $gtype: GObject.GType<SoftwareContext>;
        prototype: SoftwareContext;
    }
    interface SoftwareContext extends GObject.Object, SoftwareContext.Interface {
        // Methods

        /**
         * Retrieves the framebuffer to render into.
         * @returns location of the framebuffer
         */
        get_framebuffer(): any | null;
        /**
         * Sets the usable area within the framebuffer.
         *
         * The frontend will display this area and ignore the rest of the buffer.
         * @param area the new area
         */
        set_area(area: Rectangle): void;
        /**
         * Sets the row stride for `self`.
         *
         * By default the row stride is equal to width multiplied by the size of a
         * single pixel.
         * @param row_stride the new row stride
         */
        set_row_stride(row_stride: number): void;
    }

    export const SoftwareContext: SoftwareContextNamespace & {
        new (): SoftwareContext; // This allows `obj instanceof SoftwareContext`
    };

    namespace SuperNesCore {
        /**
         * Interface for implementing SuperNesCore.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Gets the number of players in the current game.
             *
             * If not overridden, returns [const`SUPER_NES_MAX_PLAYERS]`.
             */
            vfunc_get_players(): number;
        }

        // Constructor properties interface

        interface ConstructorProps extends Core.ConstructorProps {}
    }

    export interface SuperNesCoreNamespace {
        $gtype: GObject.GType<SuperNesCore>;
        prototype: SuperNesCore;
    }
    interface SuperNesCore extends Core, SuperNesCore.Interface {
        // Methods

        /**
         * Gets the number of players in the current game.
         *
         * If not overridden, returns [const`SUPER_NES_MAX_PLAYERS]`.
         * @returns the number of players
         */
        get_players(): number;
    }

    export const SuperNesCore: SuperNesCoreNamespace & {
        new (): SuperNesCore; // This allows `obj instanceof SuperNesCore`
    };

    namespace VirtualBoyCore {
        // Constructor properties interface

        interface ConstructorProps extends Core.ConstructorProps {}
    }

    export interface VirtualBoyCoreNamespace {
        $gtype: GObject.GType<VirtualBoyCore>;
        prototype: VirtualBoyCore;
    }
    interface VirtualBoyCore extends Core {}

    export const VirtualBoyCore: VirtualBoyCoreNamespace & {
        new (): VirtualBoyCore; // This allows `obj instanceof VirtualBoyCore`
    };

    namespace WonderSwanCore {
        // Constructor properties interface

        interface ConstructorProps extends Core.ConstructorProps {}
    }

    export interface WonderSwanCoreNamespace {
        $gtype: GObject.GType<WonderSwanCore>;
        prototype: WonderSwanCore;
    }
    interface WonderSwanCore extends Core {}

    export const WonderSwanCore: WonderSwanCoreNamespace & {
        new (): WonderSwanCore; // This allows `obj instanceof WonderSwanCore`
    };

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

export default Hs;

// END
