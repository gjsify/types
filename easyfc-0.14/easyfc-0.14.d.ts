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
import type fontconfig from '@girs/fontconfig-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Easyfc {
    /**
     * Easyfc-0.14
     */

    /**
     * Error code used in libeasyfc.
     * @gir-type Enum
     */
    enum Error {
        /**
         * unknown error happened.
         */
        UNKNOWN,
        /**
         * an operation is succeeded.
         */
        SUCCESS,
        /**
         * Out of memory occurred.
         */
        OOM,
        /**
         * an error happened in fontconfig.
         */
        FAIL_ON_FC,
        /**
         * no valid font is available on the system.
         */
        NO_VALID_FONT,
        /**
         * no font family name found in a class.
         */
        NO_FAMILY,
        /**
         * no valid configuration directory found.
         */
        NO_CONFIG_DIR,
        /**
         * no elements found to write.
         */
        NO_ELEMENTS,
        /**
         * no configuration file was available on the filesystem.
         */
        NO_CONFIG_FILE,
        /**
         * an error happened in libxml2.
         */
        FAIL_ON_XML,
        /**
         * an error happened in libc.
         */
        FAIL_ON_LIBC,
        /**
         * No real error, but just a terminator.
         */
        END,
    }

    /**
     * The hintstyle option to be used for `ezfc_font_set_hintstyle()`.
     * @gir-type Enum
     */
    enum FontHintstyle {
        /**
         * unknown state in the hintstyle.
         */
        UNKNOWN,
        /**
         * No use of autohinting
         */
        NONE,
        /**
         * Use slight autohinting
         */
        SLIGHT,
        /**
         * Use medium autohinting
         */
        MEDIUM,
        /**
         * Use full autohinting
         */
        FULL,
        /**
         * No real value, but just a terminator.
         */
        END,
    }

    /**
     * The sub-pixel rendering option to be used in `ezfc_font_set_subpixel_rendering()`.
     * @gir-type Enum
     */
    enum FontSubpixelRender {
        /**
         * unknown state on using the sub-pixel rendering.
         */
        UNKNOWN,
        /**
         * no use of the sub-pixel rendering
         */
        NONE,
        /**
         * Use the gray-scaled sub-pixel rendering
         */
        GRAY,
        /**
         * Use the sub-pixel rendering with the sub-pixel geometry RGB.
         */
        RGB,
        /**
         * Use the sub-pixel rendering with the sub-pixel geometry BGR.
         */
        BGR,
        /**
         * Use the sub-pixel rendering with the sub-pixel geometry VRGB.
         */
        VRGB,
        /**
         * Use the sub-pixel rendering with the sub-pixel geometry VBGR.
         */
        VBGR,
        /**
         * No real value, but just a terminator.
         */
        END,
    }

    /**
     * Obtains a {@link GLib.Quark} being used for {@link GLib.Error}.
     * @returns a {@link GLib.Quark}.
     */
    function error_get_quark(): GLib.Quark;
    /**
     * Finalize the library.
     */
    function finalize(): void;
    /**
     * Obtains the list of the config directories where fontconfig can recognizes
     * and enables the configuration files.
     * @returns a {@link GLib.List} contains a string
     */
    function font_config_get_config_dirs(): string[];
    /**
     * Obtains the list of the config directories where fontconfig can recognizes
     * and enables the configuration files from `config`.
     * @param config a {@link fontconfig.Config}.
     * @returns a {@link GLib.List} contains a string
     */
    function font_config_get_config_dirs_from(config: fontconfig.Config): string[];
    /**
     * Obtains the list of {@link Easyfc.FontConfig} to see what kind of configuration
     * files for fontconfig are installed and enabled on the system.
     * @returns a {@link GLib.List} contains {@link Easyfc.FontConfig}.
     */
    function font_config_get_list(): FontConfig[];
    /**
     * Obtains the list of {@link Easyfc.FontConfig} to see what kind of configuration
     * files for fontconfig are installed and enabled on the system from `config`.
     * @param config a {@link fontconfig.Config}.
     * @returns a {@link GLib.List} contains {@link Easyfc.FontConfig}.
     */
    function font_config_get_list_from(config: fontconfig.Config): FontConfig[];
    /**
     * Analize `pattern` and returns a alias name string according to the result.
     * @param pattern a {@link fontconfig.Pattern}.
     * @returns a {@link GLib.List} containing          a static string for the alias name.
     */
    function font_get_alias_name_from_pattern(pattern: fontconfig.Pattern): string[];
    /**
     * Obtains the fonts list being assigned to `alias_name` for `language`.
     *
     * Note that `localized_font_name` doesn't take effect yet. this is just
     * a reservation for future improvement.
     * @param language the language name fontconfig can deal with.
     * @param alias_name the alias name to obtain the fonts list for.
     * @param localized_font_name `true` to include the localized font name if available,                       `false` for English font name only.
     * @returns a {@link GLib.List} contains the font family name.          if no valid families, `null` then.
     */
    function font_get_list(language: string | null, alias_name: string | null, localized_font_name: boolean): string[];
    /**
     * Obtains {@link fontconfig.Pattern} list being assigned to `alias_name` for `language`.
     * @param language the language name fontconfig can deal with.
     * @param alias_name the alias name to obtain the fonts pettern list for.
     * @returns a {@link GLib.List} contains {@link fontconfig.Pattern}, otherwise `null`.
     */
    function font_get_pattern_list(language?: string | null, alias_name?: string | null): fontconfig.Pattern[];
    /**
     * Checks if `alias_name` is one of sans-serif, serif, monospace, cursive, fantasy,
     * emoji or math.
     * @param alias_name the alias font name
     * @returns `true` if `alias_name` is an alias font name, otherwise `false`.
     */
    function font_is_alias_font(alias_name: string): boolean;
    /**
     * Obtains the fonts list being assigned to `alias_name` for `language`.
     * @param language the language name fontconfig can deal with.
     * @param alias_name the alias name to obtain the fonts list for.
     * @returns a {@link GLib.List} contains the font family name.          if no valid families, `null` then.
     * @deprecated since 0.7: Use `ezfc_font_get_list()`.
     */
    function get_fonts_list(language?: string | null, alias_name?: string | null): string[];
    /**
     * Obtains {@link fontconfig.Pattern} list being assigned to `alias_name` for `language`.
     * @param language the language name fontconfig can deal with.
     * @param alias_name the alias name to obtain the fonts pettern list for.
     * @returns a {@link GLib.List} contains {@link fontconfig.Pattern}, otherwise `null`.
     * @deprecated since 0.7: Use `ezfc_font_get_pattern_list()`.
     */
    function get_fonts_pattern_list(language?: string | null, alias_name?: string | null): fontconfig.Pattern[];
    /**
     * Initialize the library.
     */
    function init(): void;
    /**
     * Checks if `alias_name` is one of sans-serif, serif, monospace, cursive, fantasy,
     * emoji or math.
     * @param alias_name the alias font name
     * @returns `true` if `alias_name` is an alias font name, otherwise `false`.
     * @deprecated since 0.7: Use `ezfc_font_is_alias_font()`.
     */
    function is_alias_font(alias_name: string): boolean;
    /**
     * Obtain the version of libeasyfc.
     * @returns a version string.
     */
    function version(): string;
    /**
     * All the fields in the <structname>EzfcAlias</structname>
     * structure are private to the {@link Easyfc.Alias} implementation.
     * @gir-type Struct
     */
    class Alias {
        static $gtype: GObject.GType<Alias>;

        // Constructors

        constructor(alias_name: string);

        static ['new'](alias_name: string): Alias;

        // Methods

        /**
         * Set a flag whether checking the font existence when invoking
         * `ezfc_alias_set_font()`.
         * @param flag a boolean value.
         */
        check_font_existence(flag: boolean): void;
        /**
         * Obtains the font that is set as the alias font for `alias`.
         * @returns the font name.
         */
        get_font(): string;
        /**
         * Obtains the alias font name in `alias` object.
         * @returns the alias font name.
         */
        get_name(): string;
        /**
         * Increases the reference count of `alias`.
         * @returns the same `alias`.
         */
        ref(): Alias;
        /**
         * Set `font_name` as the font family name used for the alias font.
         * @param font_name a font name.
         * @returns `true` if it successfully is set. otherwise `false`.
         */
        set_font(font_name: string): boolean;
        /**
         * Set `pattern` as the font pattern. `alias` keeps a duplicate instance of
         * `pattern`.
         * @param pattern a {@link fontconfig.Pattern}.
         * @returns `true` if it successfully is set. otherwise `false`.
         */
        set_font_pattern(pattern: fontconfig.Pattern): boolean;
        /**
         * Decreases the reference count of `alias`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         */
        unref(): void;
    }

    /**
     * All the fields in the <structname>EzfcConfig</structname>
     * structure are private to the {@link Easyfc.Config} implementation.
     * @gir-type Struct
     */
    class Config {
        static $gtype: GObject.GType<Config>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): Config;

        // Methods

        /**
         * Add a `alias` font for `language` language. if giving `null` to `language`,
         * `alias` takes effect for any languages.
         * @param language a language name to add `alias` for or `null` for global settings.
         * @param alias a {@link Easyfc.Alias}.
         * @returns `true` if it's successfully completed, otherwise `false`.
         */
        add_alias(language: string | null, alias: Alias): boolean;
        /**
         * Add a #font font to generate non-language-specific, non-alias-specific
         * rules.
         * @param font a {@link Easyfc.Font}.
         * @returns `true` if it's successfully completed, otherwise `false`.
         */
        add_font(font: Font): boolean;
        /**
         * Add a #subst font as a substitute font for `family_name`.
         * @param family_name a family name to be substituted.
         * @param subst a {@link Easyfc.Font} for substitute font
         * @returns `true` if it's successfully completed, otherwise `false`.
         */
        add_subst(family_name: string, subst: Font): boolean;
        /**
         * Output the object data to the standard output.
         */
        dump(): void;
        /**
         * Obtains the list of {@link Easyfc.Alias} in {@link Easyfc.Config} instance.
         * @param language a language name referenced to the alias
         * @returns a {@link GLib.List} contains {@link Easyfc.Alias} or `null`.
         */
        get_aliases(language?: string | null): Alias[];
        /**
         * Obtains the list of {@link Easyfc.Font} in `config`.
         * @returns a {@link GLib.List} contains {@link Easyfc.Font} or `null`.
         */
        get_fonts(): Font[];
        /**
         * Obtains the list of languages registered by `ezfc_config_add_alias()` in `config`.
         * @returns a {@link GLib.List} contains languages or `null`.
         */
        get_language_list(): string[];
        /**
         * Obtains the configuration name that is set by `ezfc_config_set_name()`.
         * @returns the configuration name.
         */
        get_name(): string;
        /**
         * Obtains the priority number in `config`.
         * @returns the priority number. if any errors happens, returns -1.
         */
        get_priority(): number;
        /**
         * Obtains the list of the family name being substituted
         * @returns a {@link GLib.List} contains languages or `null`.
         */
        get_subst_family(): string[];
        /**
         * Obtains the list of {@link Easyfc.Font} to be substituted for `family_name`.
         * @param family_name a family name being substituted.
         * @returns a {@link GLib.List} contains {@link Easyfc.Font} or `null`.
         */
        get_substs(family_name: string): Font[];
        /**
         * Read the configuration file and rebuild the object.
         * You have to invoke `ezfc_config_set_priority()` and `ezfc_config_set_name()`
         * first to read the appropriate configuration file.
         * @returns `true` if it's successfully completed, otherwise `false`.
         */
        load(): boolean;
        /**
         * Increases the refernce count of `config`.
         * @returns the same `config` object.
         */
        ref(): Config;
        /**
         * Removes `alias_name` assigned for `language` language from `config`.
         * @param language a language name to remove `alias_name` from.
         * @param alias_name a alias font name to remove.
         * @returns `true` if it's successfully removed, otherwise `false`.
         */
        remove_alias(language: string | null, alias_name: string): boolean;
        /**
         * Removes all of aliases assigned for `language` language from `config`.
         * @param language a language name to remove `alias_name` from.
         * @returns `true` if it's successfully removed, otherwise `false`.
         */
        remove_aliases(language?: string | null): boolean;
        /**
         * Remove a {@link Easyfc.Font} instance corresponding to `family`.
         * @param family a family name to be removed.
         * @returns `true` if it's successfully removed, otherwise `false`.
         */
        remove_font(family: string): boolean;
        /**
         * Remove all of fonts from `config`, which added by `ezfc_config_add_font()`.
         * @returns `true` if it's successfully removed, otherwise `false`.
         */
        remove_fonts(): boolean;
        /**
         * Remove `subst_name` from the substitute font list of `family_name`.
         * @param family_name a family name to be substituted.
         * @param subst_name a substitute font name
         * @returns `true` if it's successfully completed, otherwise `false`.
         */
        remove_subst(family_name: string, subst_name: string): boolean;
        /**
         * Remove all of substitute font list of `family_name`.
         * @param family_name a family name to be substituted.
         * @returns `true` if it's successfully completed, otherwise `false`.
         */
        remove_substs(family_name: string): boolean;
        /**
         * Write the data to the configuration file. you may want to invoke
         * `ezfc_config_set_priority()` and `ezfc_config_set_name()` first to
         * write it to the appropriate configuration file.
         * @returns `true` if it's successfully completed, otherwise `false`.
         */
        save(): boolean;
        /**
         * Write the data to the buffer.
         * @returns a {@link GLib.String} containing a xml data. `null` if fails.
         */
        save_to_buffer(): GLib.String;
        /**
         * Set a flag to migrate the configuration file on the older place to
         * the new one where XDG Base Directory Specification defines.
         * If `flag` is `true`, `ezfc_config_load()` will tries to read the config
         * file from the old path prior to new place and the old file will be
         * removed during `ezfc_config_save()`.
         *
         * This feature is enabled by default.
         * @param flag a `gboolean`.
         */
        set_migration(flag: boolean): void;
        /**
         * Set `name` as the additional configuration name. this is an optional to
         * make the change in the filename for output.
         * @param name additional configuration name.
         */
        set_name(name?: string | null): void;
        /**
         * Set `priority` to `config` instance.
         * @param priority a priority number that is used for a filename. it has to be            within 3 digits. so the maximum value is 999.
         */
        set_priority(priority: number): void;
        /**
         * Decreases the reference count of `config`. when its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         */
        unref(): void;
    }

    /**
     * All the fields in the <structname>EzfcFont</structname>
     * structure are private to the {@link Easyfc.Font} implementation.
     * @gir-type Struct
     */
    class Font {
        static $gtype: GObject.GType<Font>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): Font;

        // Static methods

        /**
         * Analize `pattern` and returns a alias name string according to the result.
         * @param pattern a {@link fontconfig.Pattern}.
         */
        static get_alias_name_from_pattern(pattern: fontconfig.Pattern): string[];
        /**
         * Obtains the fonts list being assigned to `alias_name` for `language`.
         *
         * Note that `localized_font_name` doesn't take effect yet. this is just
         * a reservation for future improvement.
         * @param language the language name fontconfig can deal with.
         * @param alias_name the alias name to obtain the fonts list for.
         * @param localized_font_name `true` to include the localized font name if available,                       `false` for English font name only.
         */
        static get_list(language: string | null, alias_name: string | null, localized_font_name: boolean): string[];
        /**
         * Obtains {@link fontconfig.Pattern} list being assigned to `alias_name` for `language`.
         * @param language the language name fontconfig can deal with.
         * @param alias_name the alias name to obtain the fonts pettern list for.
         */
        static get_pattern_list(language?: string | null, alias_name?: string | null): fontconfig.Pattern[];
        /**
         * Checks if `alias_name` is one of sans-serif, serif, monospace, cursive, fantasy,
         * emoji or math.
         * @param alias_name the alias font name
         */
        static is_alias_font(alias_name: string): boolean;

        // Methods

        /**
         * Add `font_name` as the font family name used for the font font.
         * @param font_name a font name.
         * @returns `true` if it successfully is set. otherwise `false`.
         */
        add_family(font_name: string): boolean;
        /**
         * Add `feature` font feature to `font`.
         * @param feature feature name to be added
         * @returns `true` if it's successfully completed, otherwise `false`.
         */
        add_feature(feature: string): boolean;
        /**
         * Split up `font` to {@link Easyfc.Font} that has one family name only.
         * @returns a {@link GLib.List} contains          {@link Easyfc.Font}, otherwise `null`.
         */
        canonicalize(): Font[];
        /**
         * Set a flag whether checking the font existence when invoking
         * `ezfc_font_set_family()`.
         * @param flag a boolean value.
         */
        check_existence(flag: boolean): void;
        /**
         * Check if `font` contains `font_name`.
         * @param font_name a font name.
         * @returns `true` if it contains, otherwise `false`.
         */
        find(font_name: string): boolean;
        /**
         * Analize `font` and returns a alias name string according to the result.
         * @returns a {@link GLib.List} containing          a static string for the alias name.
         */
        get_alias_name(): string[];
        /**
         * Obtain a boolean value about the anti-aliasing usage in `font`.
         * @returns `true` if the antialiasing is enabled. otherwise `false`.
         */
        get_antialiasing(): boolean;
        /**
         * Obtain a boolean value about the auto-hinting usage in `font`.
         * @returns `true` if the auto-hinting is enabled. otherwise `false`.
         */
        get_autohinting(): boolean;
        /**
         * Obtains available font features in `font`.
         * @returns a {@link GLib.List} containing          memory-allocated string of feature name that is available          in `font`. strings in {@link GLib.List} has to be freed when it isn't          needed anymore.
         */
        get_available_features(): string[];
        /**
         * Obtain a flag in `font` if it's supposed to check the font existence when invoking
         * @returns `true` if it does otherwise `false`.
         */
        get_check_existence(): boolean;
        /**
         * Obtain a boolean value about the embedded bitmap usage in `font`.
         * @returns `true` if the embedded bitmap is enabled, otherwise `false`.
         */
        get_embedded_bitmap(): boolean;
        /**
         * Obtains font family names in `font`.
         * @returns a {@link GLib.List} containing          the static string of font family names
         */
        get_families(): string[];
        /**
         * Obtains the font family name in first place in `font`.
         * @returns the font name.
         */
        get_family(): string;
        /**
         * Obtains font features list that `font` has.
         * @returns a {@link GLib.List} containing          the static string of feature name.
         */
        get_features(): string[];
        /**
         * Obtain a boolean value about the hinting usage in `font`.
         * @returns `true` if the hinting is enabled. otherwise `false`.
         */
        get_hinting(): boolean;
        /**
         * Obtain the hintstyle in `font`.
         * @returns a {@link Easyfc.FontHintstyle}.
         */
        get_hintstyle(): FontHintstyle;
        /**
         * Obtains current sub-pixel ordering in `font`.
         * @returns the sub-pixel ordering value in the integer.
         */
        get_rgba(): number;
        /**
         * Obtain current status about the sub-pixel rendering in `font`.
         * @returns current mode in the sub-pixel rendering.
         */
        get_subpixel_rendering(): FontSubpixelRender;
        /**
         * Increases the reference count of `font`.
         * @returns the same `font` object.
         */
        ref(): Font;
        /**
         * Removes all of families in `font`.
         * @returns `true` if it's successfully completed, otherwise `false`.
         */
        remove(): boolean;
        /**
         * Removes `font_name` from `font`.
         * @param font_name a font name to be removed.
         * @returns `true` if it's successfully completed, otherwise `false`.
         */
        remove_family(font_name: string): boolean;
        /**
         * Remove `feature` from `font` if available.
         * @param feature feature name to be removed
         * @returns `true` if it's successfully completed, otherwise `false`.
         */
        remove_feature(feature: string): boolean;
        /**
         * Set a flag whether the font use the antialiasing.
         * @param flag a boolean value.
         */
        set_antialiasing(flag: boolean): void;
        /**
         * Set a flag whether the font use the auto-hinting for rendering
         * @param flag a boolean value.
         */
        set_autohinting(flag: boolean): void;
        /**
         * Set a flag whether the font use the embedded bitmap.
         * Note that Enabling the embedded bitmap may causes disabling the antialias.
         * @param flag a boolean value.
         */
        set_embedded_bitmap(flag: boolean): void;
        /**
         * Set `font_name` as the font family name used for the font font.
         * @param font_name a font name.
         * @returns `true` if it successfully is set. otherwise `false`.
         */
        set_family(font_name: string): boolean;
        /**
         * Set a flag whether the font use the own hints for rendering
         * @param flag a boolean value.
         */
        set_hinting(flag: boolean): void;
        /**
         * Set a hintstyle for `font`.
         * @param hintstyle a {@link Easyfc.FontHintstyle}.
         */
        set_hintstyle(hintstyle: FontHintstyle | null): void;
        /**
         * Set `pattern` as the font pattern. `font` keeps a duplicate instance of
         * `pattern`.
         * @param pattern a {@link fontconfig.Pattern}.
         * @returns `true` if it successfully is set. otherwise `false`.
         */
        set_pattern(pattern: fontconfig.Pattern): boolean;
        /**
         * Set `val` as the sub-pixel ordering
         * @param val an integer value corresponding to FC_RGBA_*.
         */
        set_rgba(val: number): void;
        /**
         * This is just convenient to change the several configuration for subpixel
         * rendering.
         * @param mode a {@link Easyfc.FontSubpixelRender}.
         * @returns `true` if the sub-pixel rendering is enabled. otherwise `false`.
         */
        set_subpixel_rendering(mode: FontSubpixelRender | null): boolean;
        /**
         * Decreases the reference count of `font`. when its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         */
        unref(): void;
    }

    /**
     * All the fields in the <structname>EzfcFontConfig</structname>
     * structure are private to the {@link Easyfc.FontConfig} implementation.
     * @gir-type Struct
     */
    abstract class FontConfig {
        static $gtype: GObject.GType<FontConfig>;

        // Static methods

        /**
         * Obtains the list of the config directories where fontconfig can recognizes
         * and enables the configuration files.
         */
        static get_config_dirs(): string[];
        /**
         * Obtains the list of the config directories where fontconfig can recognizes
         * and enables the configuration files from `config`.
         * @param config a {@link fontconfig.Config}.
         */
        static get_config_dirs_from(config: fontconfig.Config): string[];
        /**
         * Obtains the list of {@link Easyfc.FontConfig} to see what kind of configuration
         * files for fontconfig are installed and enabled on the system.
         */
        static get_list(): FontConfig[];
        /**
         * Obtains the list of {@link Easyfc.FontConfig} to see what kind of configuration
         * files for fontconfig are installed and enabled on the system from `config`.
         * @param config a {@link fontconfig.Config}.
         */
        static get_list_from(config: fontconfig.Config): FontConfig[];

        // Methods

        /**
         * Obtain the description for the configuration
         * @returns the description string
         */
        get_description(): string;
        /**
         * Obtain the configuration name being stored in `info` object.
         * @returns the configuration filename
         */
        get_name(): string;
        /**
         * Returns `true` if the configuration is enabled in fontconfig, otherwise `false`.
         * @returns a boolean value
         */
        is_enabled(): boolean;
        /**
         * Returns `true` if the configuration is a system config otherwise `false`.
         * @returns a boolean value
         */
        is_system_conf(): boolean;
        /**
         * Returns `true` if the configuration is an user config otherwise `false`.
         * @returns a boolean value
         */
        is_user_conf(): boolean;
        /**
         * Returns `true` if the configuration is writable to be disabled/enabled otherwise `false`
         * @returns a boolean value
         */
        is_writable(): boolean;
        /**
         * Increases the reference count of `info`.
         * @returns the same `info` object.
         */
        ref(): FontConfig;
        /**
         * Enable/Disable a configuration.
         * @param flag a boolean value
         * @returns `true` if successfully enabled or disabled, otherwise `false`.
         */
        set_enable(flag: boolean): boolean;
        /**
         * Decreases the reference count of `info`. when its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         */
        unref(): void;
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

export default Easyfc;

// END
