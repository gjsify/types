/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './modulemd-2.0-ambient.d.ts';

/**
 * Modulemd-2.0
 */

import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Modulemd {
    enum CompressionTypeEnum {
        /**
         * Zstandard compression; since 2.15
         */
        ZSTD_COMPRESSION,
        /**
         * Autodetection failure
         */
        DETECTION_FAILED,
        /**
         * Unknown compression
         */
        UNKNOWN_COMPRESSION,
        /**
         * No compression
         */
        NO_COMPRESSION,
        /**
         * gzip compression
         */
        GZ_COMPRESSION,
        /**
         * bzip2 compression
         */
        BZ2_COMPRESSION,
        /**
         * LZMA compression
         */
        XZ_COMPRESSION,
        /**
         * zchunk compression
         */
        ZCK_COMPRESSION,
        /**
         * Enum list terminator
         */
        SENTINEL,
    }
    enum DefaultsVersionEnum {
        /**
         * Represents an error handling mdversion.
         */
        ERROR,
        /**
         * Represents an unset mdversion.
         */
        UNSET,
        /**
         * Represents v1 of the #ModulemdDefaults metadata
         * format.
         */
        ONE,
        /**
         * Represents the highest-supported version of the
         * #ModulemdDefaults metadata format.
         */
        LATEST,
    }
    class Error extends GLib.Error {
        static $gtype: GObject.GType<Error>;

        // Static fields of Modulemd.Error

        /**
         * Represents an error encountered while upgrading the
         * metadata version of a module stream or module defaults.
         */
        static UPGRADE: number;
        /**
         * Represents an error encountered while validating
         * module metadata.
         */
        static VALIDATE: number;
        /**
         * Represents an error encountered when attempting
         * to access a file.
         */
        static FILE_ACCESS: number;
        /**
         * Represents an error indicating that no streams
         * matched when searching for a specific module stream.
         */
        static NO_MATCHES: number;
        /**
         * Represents an error indicating that
         * multiple streams matched when searching for a specific module
         * stream.
         */
        static TOO_MANY_MATCHES: number;
        /**
         * Could not detect the mime type of a file for
         * automatic detection of compression format.
         */
        static MAGIC: number;
        /**
         * The requested function is not implemented
         * on this platform, likely due to needing a newer version of a dependency
         * library.
         */
        static NOT_IMPLEMENTED: number;
        /**
         * The object is missing some data necessary
         * for proper operation.
         */
        static MISSING_REQUIRED: number;

        // Constructors of Modulemd.Error

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    enum ErrorEnum {
        /**
         * Represents an error encountered while upgrading the
         * metadata version of a module stream or module defaults.
         */
        UPGRADE,
        /**
         * Represents an error encountered while validating
         * module metadata.
         */
        VALIDATE,
        /**
         * Represents an error encountered when attempting
         * to access a file.
         */
        FILE_ACCESS,
        /**
         * Represents an error indicating that no streams
         * matched when searching for a specific module stream. Since: 2.2
         */
        NO_MATCHES,
        /**
         * Represents an error indicating that
         * multiple streams matched when searching for a specific module
         * stream. Since: 2.2
         */
        TOO_MANY_MATCHES,
        /**
         * Could not detect the mime type of a file for
         * automatic detection of compression format. Since: 2.8
         */
        MAGIC,
        /**
         * The requested function is not implemented
         * on this platform, likely due to needing a newer version of a dependency
         * library. Since: 2.8
         */
        NOT_IMPLEMENTED,
    }
    enum ModuleStreamVersionEnum {
        /**
         * Represents an error handling module stream
         * version.
         */
        ERROR,
        /**
         * Represents an unset module stream version.
         */
        UNSET,
        /**
         * Represents v1 of the #ModulemdModuleStream
         * metadata format.
         */
        ONE,
        /**
         * Represents v2 of the #ModulemdModuleStream
         * metadata format.
         */
        TWO,
        /**
         * Represents the highest-supported version of
         * the #ModulemdModuleStream metadata format.
         */
        LATEST,
    }
    enum ObsoletesVersionEnum {
        /**
         * Represents an error handling mdversion.
         */
        ERROR,
        /**
         * Represents an unset mdversion.
         */
        UNSET,
        /**
         * Represents v1 of the #ModulemdObsoletes metadata
         * format.
         */
        ONE,
        /**
         * Represents the highest-supported version of the
         * #ModulemdObsoletes metadata format.
         */
        LATEST,
    }
    enum PackagerVersionEnum {
        /**
         * Represents an error handling module stream
         * version.
         */
        ERROR,
        /**
         * Represents an unset module stream version.
         */
        UNSET,
        /**
         * Represents v2 of the ModulePackager
         * metadata format. Since: 2.11
         */
        TWO,
        /**
         * Represents v3 of the ModulePackager
         * metadata format. Since: 2.11
         */
        THREE,
        /**
         * Represents the highest-supported version of
         * the ModulePackager metadata format.
         */
        LATEST,
    }
    class YamlError extends GLib.Error {
        static $gtype: GObject.GType<YamlError>;

        // Static fields of Modulemd.YamlError

        /**
         * Represents an error encountered while opening a
         * YAML file.
         */
        static OPEN: number;
        /**
         * Represents an internal programming error
         * encountered while parsing a YAML document.
         */
        static PROGRAMMING: number;
        /**
         * Represents an error indicating that
         * unexpected data or some other parsing error that violates the YAML spec
         * was encountered while parsing a YAML document.
         */
        static UNPARSEABLE: number;
        /**
         * Represents an error indicating invalid data
         * violating the modulemd YAML spec was encountered while parsing a YAML
         * document.
         */
        static PARSE: number;
        /**
         * Represents an error encountered while writing a
         * YAML file.
         */
        static EMIT: number;
        /**
         * Represents an error indicating that
         * required elements are missing while parsing a YAML document.
         */
        static MISSING_REQUIRED: number;
        /**
         * Represents an error indicating that a YAML
         * output event could not be initialized.
         */
        static EVENT_INIT: number;
        /**
         * Represents a data inconsistency error
         * encountered while parsing a YAML document.
         */
        static INCONSISTENT: number;
        static UNKNOWN_ATTR: number;

        // Constructors of Modulemd.YamlError

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    enum YamlErrorEnum {
        /**
         * Represents an error encountered while opening a
         * YAML file.
         */
        OPEN,
        /**
         * Represents an internal programming error
         * encountered while parsing a YAML document.
         */
        PROGRAMMING,
        /**
         * Represents an error indicating that
         * unexpected data or some other parsing error was encountered while parsing a
         * YAML document.
         */
        UNPARSEABLE,
        /**
         * Represents an error indicating invalid data was
         * encountered while parsing a YAML document.
         */
        PARSE,
        /**
         * Represents an error encountered while writing a
         * YAML file.
         */
        EMIT,
        /**
         * Represents an error indicating that
         * required elements are missing while parsing a YAML document.
         */
        MISSING_REQUIRED,
        /**
         * Represents an error indicating that a YAML
         * output event could not be initialized.
         */
        EVENT_INIT,
        /**
         * Represents a data inconsistency error
         * encountered while parsing a YAML document.
         */
        INCONSISTENT,
    }
    /**
     * The ModuleStream v3 specification defines the maximum lenth of the context
     * field.
     */
    const MMD_MAXCONTEXTLEN: number;
    /**
     * The #ModulemdPackagerV3 default module metadata license.
     */
    const MMD_PACKAGER_DEFAULT_MODULE_LICENSE: string;
    function compression_type(name: string): CompressionTypeEnum;
    function error_quark(): GLib.Quark;
    function get_version(): string;
    /**
     * This is a convenience function that is a wrapper around
     * modulemd_module_index_new() and modulemd_module_index_update_from_file()
     * with `strict=False`.
     *
     * It will return the imported module metadata if all subdocuments are
     * parseable and valid. If any part of the document is unreadable or fails
     * validation, it will return NULL and set `error` appropriately. If you need
     * more detail about which parts of the document failed, use the lower-level
     * functions.
     * @param yaml_file A YAML file containing the module metadata and other related information such as default streams.
     * @returns A newly-allocated #ModulemdModuleIndex object initialized with the content from @yaml_file. Returns NULL and sets @error if the file is not completely valid.
     */
    function load_file(yaml_file: string): ModuleIndex;
    /**
     * This is a convenience function that is a wrapper around
     * modulemd_module_index_new() and modulemd_module_index_update_from_string()
     * with `strict=False`.
     *
     * It will return the imported module metadata if all subdocuments are
     * parseable and valid. If any part of the document is unreadable or fails
     * validation, it will return NULL and set `error` appropriately. If you need
     * more detail about which parts of the document failed, use the lower-level
     * functions.
     * @param yaml_string A YAML string containing the module metadata and other related information such as default streams.
     * @returns A newly-allocated #ModulemdModuleIndex object initialized with the content from @yaml_string. Returns NULL and sets @error if the metadata is not completely valid.
     */
    function load_string(yaml_string: string): ModuleIndex;
    function read_packager_file(
        yaml_path: string,
        module_name?: string | null,
        module_stream?: string | null,
    ): [GObject.GType, GObject.Object];
    function read_packager_string(
        yaml_string: string,
        module_name?: string | null,
        module_stream?: string | null,
    ): [GObject.GType, GObject.Object];
    function yaml_error_quark(): GLib.Quark;
    interface ReadHandler {
        (data: any, size: number): number;
    }
    interface WriteHandler {
        (data: any, size: number): number;
    }
    module BuildConfig {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class BuildConfig extends GObject.Object {
        static $gtype: GObject.GType<BuildConfig>;

        // Constructors of Modulemd.BuildConfig

        constructor(properties?: Partial<BuildConfig.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BuildConfig;

        // Own methods of Modulemd.BuildConfig

        /**
         * Add a build-time dependency for this module.
         * @param module_name The name of the module to depend on.
         * @param stream_name The name of the module stream to depend on.
         */
        add_buildtime_requirement(module_name: string, stream_name: string): void;
        /**
         * Add a build-time dependency for this module.
         * @param module_name The name of the module to depend on.
         * @param stream_name The name of the module stream to depend on.
         */
        add_runtime_requirement(module_name: string, stream_name: string): void;
        /**
         * Remove all build-time dependencies for this module.
         */
        clear_buildtime_requirements(): void;
        /**
         * Remove all run-time dependencies for this module.
         */
        clear_runtime_requirements(): void;
        compare(self_2: BuildConfig): number;
        copy(): BuildConfig;
        equals(self_2: BuildConfig): boolean;
        get_buildopts(): Buildopts;
        get_buildtime_modules_as_strv(): string[];
        get_buildtime_requirement_stream(module_name: string): string;
        /**
         * Get the context that this build configuration produces.
         *
         * Note: This function returns the context as stored internally. If you want to
         * be sure that it is in the correct format, call
         * modulemd_build_config_validate() first.
         * @returns The string representing the context that this build configuration produces.
         */
        get_context(): string;
        /**
         * Get the platform that this build configuration applies to.
         * @returns The string representing the platform that this build configuration applies to.
         */
        get_platform(): string;
        get_runtime_modules_as_strv(): string[];
        get_runtime_requirement_stream(module_name: string): string;
        /**
         * Remove a build-time dependency for this module.
         * @param module_name The name of the module to be removed.
         */
        remove_buildtime_requirement(module_name: string): void;
        /**
         * Remove a run-time dependency for this module.
         * @param module_name The name of the module to be removed.
         */
        remove_runtime_requirement(module_name: string): void;
        /**
         * Set build options for this module's components.
         * @param buildopts A #ModulemdBuildopts object describing build options that apply globally to components in this module.
         */
        set_buildopts(buildopts: Buildopts): void;
        /**
         * Set the context that this build configuration produces.
         *
         * Note: For consistency in the API, this function does not validate the input
         * `context`. This validation will be performed as part of the
         * modulemd_build_config_validate() routine where it can be reported cleanly.
         * @param context A string of up to ten alphanumeric characters.
         */
        set_context(context: string): void;
        /**
         * Set the platform that this build configuration applies to.
         * @param platform A string of up to ten alphanumeric characters.
         */
        set_platform(platform: string): void;
        /**
         * Determine if this #ModulemdBuildConfig is valid according to the YAML
         * specification.
         * @returns TRUE if validation passes. Returns FALSE and sets @error appropriately on validation failure.
         */
        validate(): boolean;
    }

    module Buildopts {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            rpm_macros: string;
            rpmMacros: string;
        }
    }

    class Buildopts extends GObject.Object {
        static $gtype: GObject.GType<Buildopts>;

        // Own properties of Modulemd.Buildopts

        get rpm_macros(): string;
        set rpm_macros(val: string);
        get rpmMacros(): string;
        set rpmMacros(val: string);

        // Constructors of Modulemd.Buildopts

        constructor(properties?: Partial<Buildopts.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Buildopts;

        // Own methods of Modulemd.Buildopts

        /**
         * Restrict the list of architectures for which to build this module. It may be
         * called any number of times to indicate support on additional architectures.
         * Use modulemd_buildopts_clear_arches() to return to "all architectures".
         * @param arch An architecture for which to build this module.
         */
        add_arch(arch: string): void;
        add_rpm_to_whitelist(rpm: string): void;
        /**
         * Indicate that this module should be built for all architectures.
         */
        clear_arches(): void;
        /**
         * Remove all RPMs from the whitelist.
         */
        clear_rpm_whitelist(): void;
        /**
         * Create a copy of this #ModulemdBuildopts object.
         * @returns A newly-allocated #ModulemdBuildopts object that is a copy of @self.
         */
        copy(): Buildopts;
        /**
         * Check for equality for two #ModulemdBuildopts objects.
         * @param self_2 A #ModulemdBuildopts object.
         * @returns TRUE if both objects are equal, FALSE otherwise.
         */
        equals(self_2: Buildopts): boolean;
        get_arches(): string[];
        get_rpm_macros(): string;
        get_rpm_whitelist(): string[];
        remove_arch(arch: string): void;
        remove_rpm_from_whitelist(rpm: string): void;
        set_rpm_macros(rpm_macros: string): void;
    }

    module Component {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buildonly: boolean;
            buildorder: number;
            name: string;
            rationale: string;
        }
    }

    abstract class Component extends GObject.Object {
        static $gtype: GObject.GType<Component>;

        // Own properties of Modulemd.Component

        get buildonly(): boolean;
        set buildonly(val: boolean);
        get buildorder(): number;
        set buildorder(val: number);
        get name(): string;
        get rationale(): string;
        set rationale(val: string);

        // Constructors of Modulemd.Component

        constructor(properties?: Partial<Component.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Modulemd.Component

        vfunc_copy(key?: string | null): Component;
        vfunc_equals(self_2: Component): boolean;
        vfunc_get_name(): string;
        vfunc_set_name(name?: string | null): void;
        /**
         * Verifies that all stored values are internally consistent and that the
         * component is sufficiently-complete for emitting. This function is called
         * implicitly before attempting to emit the contents.
         */
        vfunc_validate(): boolean;

        // Own methods of Modulemd.Component

        /**
         * Add a build dependency of this component.
         * @param key A key representing another component in the #ModulemdModuleStream components map.
         */
        add_buildafter(key: string): void;
        /**
         * Remove all buildafter entries for this component.
         */
        clear_buildafter(): void;
        copy(key?: string | null): Component;
        equals(self_2: Component): boolean;
        get_buildafter(): string[];
        get_buildonly(): boolean;
        get_buildorder(): number;
        get_key(): string;
        get_name(): string;
        get_rationale(): string;
        set_buildonly(buildonly: boolean): void;
        set_buildorder(buildorder: number): void;
        set_name(name?: string | null): void;
        set_rationale(rationale?: string | null): void;
        /**
         * Verifies that all stored values are internally consistent and that the
         * component is sufficiently-complete for emitting. This function is called
         * implicitly before attempting to emit the contents.
         * @returns TRUE if the #ModulemdComponent passed validation. FALSE and sets @error appropriately if validation fails.
         */
        validate(): boolean;
    }

    module ComponentModule {
        // Constructor properties interface

        interface ConstructorProps extends Component.ConstructorProps {
            ref: string | any;
            repository: string;
        }
    }

    class ComponentModule extends Component {
        static $gtype: GObject.GType<ComponentModule>;

        // Own properties of Modulemd.ComponentModule

        // This accessor conflicts with a property or field in a parent class or interface.
        ref: string | any;
        get repository(): string;
        set repository(val: string);

        // Constructors of Modulemd.ComponentModule

        constructor(properties?: Partial<ComponentModule.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](key: string): ComponentModule;

        // Own methods of Modulemd.ComponentModule

        get_ref(): string;
        get_repository(): string;
        set_ref(ref?: string | null): void;
        set_repository(repository?: string | null): void;
    }

    module ComponentRpm {
        // Constructor properties interface

        interface ConstructorProps extends Component.ConstructorProps {
            buildroot: boolean;
            cache: string;
            ref: string | any;
            repository: string;
            srpm_buildroot: boolean;
            srpmBuildroot: boolean;
        }
    }

    class ComponentRpm extends Component {
        static $gtype: GObject.GType<ComponentRpm>;

        // Own properties of Modulemd.ComponentRpm

        get buildroot(): boolean;
        set buildroot(val: boolean);
        get cache(): string;
        set cache(val: string);
        // This accessor conflicts with a property or field in a parent class or interface.
        ref: string | any;
        get repository(): string;
        set repository(val: string);
        get srpm_buildroot(): boolean;
        set srpm_buildroot(val: boolean);
        get srpmBuildroot(): boolean;
        set srpmBuildroot(val: boolean);

        // Constructors of Modulemd.ComponentRpm

        constructor(properties?: Partial<ComponentRpm.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](key: string): ComponentRpm;

        // Own methods of Modulemd.ComponentRpm

        /**
         * Add an architecture on which this RPM will be multilib. It may be called
         * any number of times. Use modulemd_component_rpm_clear_multilib_arches() to
         * return to "no architectures".
         * @param arch An architecture on which this package should be multilib.
         */
        add_multilib_arch(arch: string): void;
        /**
         * Restrict the list of architectures on which this RPM will be available. It
         * may be called any number of times to indicate support on additional
         * architectures. Use modulemd_component_rpm_clear_arches() to return to "all
         * architectures".
         * @param arch An architecture on which this package should be available.
         */
        add_restricted_arch(arch: string): void;
        /**
         * Indicate that this RPM component is available on all arches.
         */
        clear_arches(): void;
        /**
         * Indicate that this RPM component is multilib on no architectures.
         */
        clear_multilib_arches(): void;
        get_arches(): string[];
        get_buildroot(): boolean;
        get_cache(): string;
        get_multilib_arches(): string[];
        get_ref(): string;
        get_repository(): string;
        get_srpm_buildroot(): boolean;
        /**
         * Indicate that this RPM component is available on all arches.
         */
        reset_arches(): void;
        /**
         * Indicate that this RPM component is multilib on no architectures.
         */
        reset_multilib_arches(): void;
        set_buildroot(buildroot: boolean): void;
        set_cache(cache?: string | null): void;
        set_ref(ref?: string | null): void;
        set_repository(repository?: string | null): void;
        set_srpm_buildroot(srpm_buildroot: boolean): void;
    }

    module Defaults {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            mdversion: number;
            module_name: string;
            moduleName: string;
        }
    }

    abstract class Defaults extends GObject.Object {
        static $gtype: GObject.GType<Defaults>;

        // Own properties of Modulemd.Defaults

        get mdversion(): number;
        get module_name(): string;
        get moduleName(): string;

        // Constructors of Modulemd.Defaults

        constructor(properties?: Partial<Defaults.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](version: number, module_name: string): Defaults;

        // Own virtual methods of Modulemd.Defaults

        vfunc_copy(): Defaults;
        vfunc_equals(self_2: Defaults): boolean;
        vfunc_get_mdversion(): number;
        vfunc_validate(): boolean;

        // Own methods of Modulemd.Defaults

        copy(): Defaults;
        equals(self_2: Defaults): boolean;
        get_mdversion(): number;
        get_modified(): number;
        get_module_name(): string;
        set_modified(modified: number): void;
        upgrade(mdversion: number): Defaults;
        validate(): boolean;
    }

    module DefaultsV1 {
        // Constructor properties interface

        interface ConstructorProps extends Defaults.ConstructorProps {}
    }

    class DefaultsV1 extends Defaults {
        static $gtype: GObject.GType<DefaultsV1>;

        // Constructors of Modulemd.DefaultsV1

        constructor(properties?: Partial<DefaultsV1.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](module_name: string): DefaultsV1;
        // Conflicted with Modulemd.Defaults.new

        static ['new'](...args: never[]): any;

        // Own methods of Modulemd.DefaultsV1

        /**
         * Add a profile that will be installed for this stream if none are explicitly
         * specified by the user. This function may be called any number of times for
         * the same stream and will deduplicate input.
         * @param stream_name The name of the module stream to which to add this default profile.
         * @param profile_name The name of the default profile to add.
         * @param intent The name of the system intent to add profile defaults to. If NULL, this sets the generic fallback profiles for the stream. System intents are deprecated and calls with this non-NULL argument will become void in the future.
         */
        add_default_profile_for_stream(stream_name: string, profile_name: string, intent?: string | null): void;
        get_default_profiles_for_stream(stream_name: string, intent?: string | null): string[];
        get_default_stream(intent?: string | null): string;
        get_streams_with_default_profiles(intent?: string | null): string[];
        /**
         * Removes this stream from the list of profiles entirely. It will not appear
         * in the output document.
         * @param stream_name The name of the module stream from which to remove default profiles.
         * @param intent The name of the system intent from which to remove the profile defaults for this stream. System intents are deprecated and calls with this non-NULL arugment will become void in the future.
         */
        remove_default_profiles_for_stream(stream_name: string, intent?: string | null): void;
        /**
         * Set the default stream for this module.
         * @param default_stream The name of the default stream for this module. If NULL, it will remove the default stream.
         * @param intent If non-NULL, this indicates the system intent to apply this default stream. If NULL, it will be added as common defaults. System intents are deprecated and calls with this non-NULL argument will become void in the future.
         */
        set_default_stream(default_stream?: string | null, intent?: string | null): void;
        /**
         * Sets the default profiles for `stream_name` to the empty set. When output to
         * a file, it will appear as `stream_name: []`.
         * @param stream_name The name of the module stream for which to empty default profiles.
         * @param intent The name of the system intent from which to clear the profile defaults for this stream. System intents are deprecated and calls with this non-NULL argument will become void in the future.
         */
        set_empty_default_profiles_for_stream(stream_name: string, intent?: string | null): void;
    }

    module Dependencies {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Dependencies extends GObject.Object {
        static $gtype: GObject.GType<Dependencies>;

        // Constructors of Modulemd.Dependencies

        constructor(properties?: Partial<Dependencies.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Dependencies;

        // Own methods of Modulemd.Dependencies

        /**
         * Add a single stream of a module that is required to build another dependent
         * module. The matrix of streams and module names will be calculated by the
         * build-system. If the provided module name is already present, the streams
         * will be added (with deduplication).
         * @param module_name The name of the module to depend on.
         * @param module_stream The name of the module stream to depend on.
         */
        add_buildtime_stream(module_name: string, module_stream: string): void;
        /**
         * Adds a module and its stream that is required at runtime by a dependent
         * module. The matrix of streams and module names will be calculated by the
         * build-system. If the listed provided module name is already present, the
         * streams will be added (with deduplication).
         * @param module_name The name of the module to depend on.
         * @param module_stream The name of the module stream to depend on.
         */
        add_runtime_stream(module_name: string, module_stream: string): void;
        /**
         * Remove all buildtime dependencies from this #ModulemdDependencies object.
         */
        clear_buildtime_dependencies(): void;
        /**
         * Remove all runtime dependencies from this #ModulemdDependencies object.
         */
        clear_runtime_dependencies(): void;
        /**
         * Create a copy of this #ModulemdDependencies object.
         * @returns The copied #ModulemdDependencies object.
         */
        copy(): Dependencies;
        /**
         * Check if `self_1` and `self_2` are equal objects.
         * @param self_2 A #ModulemdDependencies object.
         * @returns TRUE, if the're equal. FALSE, otherwise.
         */
        equals(self_2: Dependencies): boolean;
        get_buildtime_modules(): string[];
        get_buildtime_streams(module: string): string[] | null;
        get_runtime_modules(): string[];
        get_runtime_streams(module: string): string[] | null;
        /**
         * Adds a module and inserts an empty list for it as buildtime dependency.
         * @param module_name The name of the module to add dependencies on.
         */
        set_empty_buildtime_dependencies_for_module(module_name: string): void;
        /**
         * Adds a module and inserts an empty list for it as runtime dependency.
         * @param module_name The name of the module to add dependencies on.
         */
        set_empty_runtime_dependencies_for_module(module_name: string): void;
    }

    module Module {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            module_name: string;
            moduleName: string;
        }
    }

    class Module extends GObject.Object {
        static $gtype: GObject.GType<Module>;

        // Own properties of Modulemd.Module

        get module_name(): string;
        get moduleName(): string;

        // Constructors of Modulemd.Module

        constructor(properties?: Partial<Module.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Modulemd.Module

        /**
         * Iterates through all #ModulemdModuleStream entries in this
         * #ModulemdModule and removes any XMD sections that are present. This is
         * generally done to trim down the metadata to only the portions that are
         * useful to the package manager.
         */
        clear_xmds(): void;
        copy(): Module;
        get_all_streams(): ModuleStream[];
        get_defaults(): Defaults;
        get_module_name(): string;
        get_newest_active_obsoletes(stream: string, context?: string | null): Obsoletes;
        get_obsoletes(): Obsoletes[];
        get_stream_by_NSVC(stream_name: string, version: number, context: string): ModuleStream;
        get_stream_by_NSVCA(
            stream_name: string,
            version: number,
            context?: string | null,
            arch?: string | null,
        ): ModuleStream;
        get_stream_names(): string[];
        get_streams_by_stream_name(stream_name: string): ModuleStream[];
        get_translation(stream: string): Translation;
        /**
         * Remove one or more #ModulemdModuleStream objects from this #ModulemdModule
         * that match the provided parameters.
         * @param stream_name The name of the stream to remove.
         * @param version The version of the stream to remove. If set to zero, matches all versions.
         * @param context The context of the stream to remove. If NULL, matches all stream contexts.
         * @param arch The processor architecture of the stream to remove. If NULL, matches all architectures.
         */
        remove_streams_by_NSVCA(
            stream_name: string,
            version: number,
            context?: string | null,
            arch?: string | null,
        ): void;
        search_streams(
            stream_name: string,
            version: number,
            context?: string | null,
            arch?: string | null,
        ): ModuleStream[];
        /**
         * All arguments to this method will be compared using
         * [fnmatch(3)](https://www.mankier.com/3/fnmatch).
         * @param stream_name The name of the stream to retrieve. If NULL, will search all streams.
         * @param version The version of the stream to retrieve. If NULL, will search all versions.
         * @param context The context of the stream to retrieve. If NULL, will search all contexts.
         * @param arch The processor architecture of the stream to retrieve. If NULL, the architecture is not included in the search.
         * @returns The list of stream objects matching all of the requested parameters. This function cannot fail, but it may return a zero-length list if no matches were found. The returned streams will be in a predictable order, sorted first by module name, then stream name, then by version (highest first), then by context and finally by architecture.
         */
        search_streams_by_glob(
            stream_name?: string | null,
            version?: string | null,
            context?: string | null,
            arch?: string | null,
        ): ModuleStream[];
        search_streams_by_nsvca_glob(nsvca_pattern?: string | null): ModuleStream[];
        validate(): boolean;
    }

    module ModuleIndex {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class ModuleIndex extends GObject.Object {
        static $gtype: GObject.GType<ModuleIndex>;

        // Constructors of Modulemd.ModuleIndex

        constructor(properties?: Partial<ModuleIndex.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ModuleIndex;

        // Own methods of Modulemd.ModuleIndex

        add_defaults(defaults: Defaults): boolean;
        /**
         * Add a #ModulemdModuleStream to the #ModulemdModuleIndex. While being added,
         * the #ModulemdModuleStream will be upgraded to %MD_MODULESTREAM_VERSION_LATEST
         * to ensure that merges done with #ModulemdModuleIndexMerger will always occur
         * between streams of the same version. If this upgrade cannot be performed,
         * the function will return `error` set appropriately.
         * @param stream The #ModulemdModuleStream to add to the index. The stream added must have a module name and stream name set on it or it will be rejected.
         * @returns TRUE if the #ModulemdModuleStream was added successfully. If the stream already existed in the index, it will be replaced by the new one. On failure, returns FALSE and sets @error appropriately.
         */
        add_module_stream(stream: ModuleStream): boolean;
        add_obsoletes(obsoletes: Obsoletes): boolean;
        add_translation(translation: Translation): boolean;
        /**
         * Iterates through all #ModulemdModuleStream entries in this
         * #ModulemdModuleIndex and removes any XMD sections that are present. This is
         * generally done to trim down the metadata to only the portions that are
         * useful to the package manager.
         */
        clear_xmds(): void;
        dump_to_string(): string;
        /**
         * Get a dictionary of all modules in the index that have a default stream.
         *
         * This function cannot fail, but may return an empty (non-NULL) #GHashTable.
         * @param intent The name of the system intent whose default stream will be retrieved. If left NULL or the specified intent has no separate default, it will return the generic default stream for this module. System intents are deprecated and this argument will be ignored in the future.
         * @returns A #GHashTable with the module name as the key and the default stream as the value for all modules with a default stream in the index. Modules without a default stream will not appear in this table.
         */
        get_default_streams(intent?: string | null): GLib.HashTable<string, string>;
        get_defaults_mdversion(): DefaultsVersionEnum;
        get_module(module_name: string): Module;
        get_module_names(): string[];
        get_stream_mdversion(): ModuleStreamVersionEnum;
        /**
         * Remove a module, including all of its streams, its defaults and its
         * translations from a #ModulemdModuleIndex.
         * @param module_name The name of the module to remove from the index.
         * @returns TRUE if the module name was present in the index. FALSE if it was not.
         */
        remove_module(module_name: string): boolean;
        /**
         * All arguments to this method will be compared using
         * [fnmatch(3)](https://www.mankier.com/3/fnmatch).
         * @param nevra_pattern A [glob](https://www.mankier.com/3/glob) pattern to match against the NEVRA strings of the rpm artifacts in the #ModulemdModuleStream objects in this module.
         * @returns The list of stream objects containing an RPM that matches the @nevra_pattern. This function cannot fail, but it may return a zero-length list if no matches were found. The returned streams will be in a predictable order, sorted first by module name, then stream name, then by version (highest first), then by context and finally by architecture.
         */
        search_rpms(nevra_pattern: string): ModuleStream[];
        /**
         * All arguments to this method will be compared using
         * [fnmatch(3)](https://www.mankier.com/3/fnmatch).
         * @param module_name The name of the module to retrieve. If NULL, will search all modules in the index.
         * @param stream_name The name of the stream to retrieve. If NULL, will search all streams in a module.
         * @param version The version of the stream to retrieve. If NULL, will search all versions.
         * @param context The context of the stream to retrieve. If NULL, will search all contexts.
         * @param arch The processor architecture of the stream to retrieve. If NULL, the architecture is not included in the search.
         * @returns The list of stream objects matching all of the requested parameters. This function cannot fail, but it may return a zero-length list if no matches were found. The returned streams will be in a predictable order, sorted first by module name, then stream name, then by version (highest first), then by context and finally by architecture.
         */
        search_streams(
            module_name?: string | null,
            stream_name?: string | null,
            version?: string | null,
            context?: string | null,
            arch?: string | null,
        ): ModuleStream[];
        search_streams_by_nsvca_glob(nsvca_pattern?: string | null): ModuleStream[];
        /**
         * This function will open the directory at `path` and iterate through it,
         * adding any files with the suffix ".yaml" to `self`. If `overrides_path` is
         * non-%NULL, it will also open any files with the suffix ".yaml" in that
         * location and import them, overriding any conflicts with the existing
         * defaults.
         *
         * Note: If you need detailed information about what failed and why, it is
         * better to implement the directory traversal yourself and use the
         * modulemd_module_index_update_from_file() function, as it will return the
         * failures information.
         * @param path The path to a directory containing defaults documents.
         * @param strict Whether the parser should return failure if it encounters an unknown mapping key or a conflict in module default streams.
         * @param overrides_path If non-%NULL, the path to a directory containing defaults documents that should override those in @path.
         * @returns %TRUE if all ".yaml" files in the directory were imported successfully (this includes if no ".yaml" files were present). %FALSE if one or more files could not be read successfully and sets @error appropriately.
         */
        update_from_defaults_directory(path: string, strict: boolean, overrides_path?: string | null): boolean;
        update_from_file(yaml_file: string, strict: boolean): [boolean, SubdocumentInfo[]];
        update_from_string(yaml_string: string, strict: boolean): [boolean, SubdocumentInfo[]];
        /**
         * Upgrades all #ModulemdDefaults objects in this index to `mdversion` if they
         * are not already at that version. An attempt to downgrade or an attempt to
         * upgrade beyond the latest supported version will report an error. In the
         * case of a failure to upgrade a particular #ModulemdDefaults object of the
         * index, an error will be reported and the index will be left in an undefined
         * state.
         * @param mdversion The #ModulemdDefaults metadata version to upgrade to.
         */
        upgrade_defaults(mdversion: DefaultsVersionEnum): boolean;
        /**
         * Upgrades all #ModulemdModuleStream objects in this index to `mdversion` if
         * they are not already at that version.
         * @param mdversion The #ModulemdModuleStream metadata version to upgrade to.
         */
        upgrade_streams(mdversion: ModuleStreamVersionEnum): boolean;
    }

    module ModuleIndexMerger {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class ModuleIndexMerger extends GObject.Object {
        static $gtype: GObject.GType<ModuleIndexMerger>;

        // Constructors of Modulemd.ModuleIndexMerger

        constructor(properties?: Partial<ModuleIndexMerger.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ModuleIndexMerger;

        // Own methods of Modulemd.ModuleIndexMerger

        /**
         * Enqueues a #ModulemdModuleIndex representing the parsed metadata from a
         * repository into this #ModulemdModuleIndexMerger for merging and
         * deduplication of other repositories.
         *
         * Once all repositories have been added, call
         * modulemd_module_index_merger_resolve() to perform the merge.
         * @param index A #ModulemdModuleIndex, usually constructed by reading the module metadata from a repository with modulemd_module_index_update_from_file(), modulemd_module_index_update_from_string(), or `modulemd_module_index_update_from_stream()`. This function take a reference on @index, so the caller must not modify it while the #ModulemdModuleIndexMerger is in use.
         * @param priority The priority of the repository that the entries in @index came from. This is used to determine when @index should override rather then merge. In most cases, this will be zero. See the Description section for the #ModulemdModuleIndexMerger class for details on the merge logic. Acceptable values are in the range of 0-1000.
         */
        associate_index(index: ModuleIndex, priority: number): void;
        /**
         * Merges all added #ModulemdModuleIndex objects according to their priority.
         * The logic of this merge is described in the Description of
         * #ModulemdModuleIndexMerger.
         *
         * Once this function has been called, the internal state of the
         * #ModulemdModuleIndexMerger is undefined. The only valid action on it after
         * that point is g_object_unref().
         *
         * This function is equivalent to calling
         * modulemd_module_index_merger_resolve_ext() with
         * `strict_default_streams=FALSE`.
         * @returns A newly-allocated #ModulemdModuleIndex object containing the merged results. If this function encounters an unresolvable merge conflict, it will return NULL and set @error appropriately.
         */
        resolve(): ModuleIndex;
        /**
         * Merges all added #ModulemdModuleIndex objects according to their priority.
         * The logic of this merge is described in the Description of
         * #ModulemdModuleIndexMerger.
         *
         * Once this function has been called, the internal state of the
         * #ModulemdModuleIndexMerger is undefined. The only valid action on it after
         * that point is g_object_unref().
         * @param strict_default_streams If TRUE, merging two #ModulemdDefaults with conflicting default streams will raise an error. If FALSE, the module will have its default stream blocked.
         * @returns A newly-allocated #ModulemdModuleIndex object containing the merged results. If this function encounters an unresolvable merge conflict, it will return NULL and set @error appropriately.
         */
        resolve_ext(strict_default_streams: boolean): ModuleIndex;
    }

    module ModuleStream {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            arch: string;
            context: string;
            mdversion: number;
            module_name: string;
            moduleName: string;
            stream_name: string;
            streamName: string;
            version: number;
        }
    }

    abstract class ModuleStream extends GObject.Object {
        static $gtype: GObject.GType<ModuleStream>;

        // Own properties of Modulemd.ModuleStream

        get arch(): string;
        set arch(val: string);
        get context(): string;
        set context(val: string);
        get mdversion(): number;
        get module_name(): string;
        get moduleName(): string;
        get stream_name(): string;
        get streamName(): string;
        get version(): number;
        set version(val: number);

        // Constructors of Modulemd.ModuleStream

        constructor(properties?: Partial<ModuleStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](mdversion: number, module_name?: string | null, module_stream?: string | null): ModuleStream;

        // Own static methods of Modulemd.ModuleStream

        /**
         * Create a #ModulemdModuleStream object from a YAML file.
         *
         * Note: This function also reads modulemd-packager v2 and v3 documents, which
         * are transparently returned as #ModulemdModuleStream (V2) objects. However,
         * if a modulemd-packager v3 document (#ModulemdPackagerV3) is encountered and
         * it uses buildopts (#ModulemdBuildopts) in one or more build configurations,
         * only the buildopts present in the first listed configuration (if any) will be
         * applied to the returned #ModulemdModuleStreamV2 object.
         * @param path The path to a YAML document containing a module stream definition.
         * @param strict Whether the parser should return failure if it encounters an unknown mapping key or if it should ignore it.
         * @param module_name An optional module name to override the document on disk. Mostly useful in cases where the name is being auto-detected from git.
         * @param module_stream An optional module stream name to override the document on disk. Mostly useful in cases where the name is being auto-detected from git.
         */
        static read_file(
            path: string,
            strict: boolean,
            module_name?: string | null,
            module_stream?: string | null,
        ): ModuleStream;
        /**
         * Create a #ModulemdModuleStream object from a YAML string.
         *
         * Note: This function also reads modulemd-packager v2 and v3 documents, which
         * are transparently returned as #ModulemdModuleStream (V2) objects. However,
         * if a modulemd-packager v3 document (#ModulemdPackagerV3) is encountered and
         * it uses buildopts (#ModulemdBuildopts) in one or more build configurations,
         * only the buildopts present in the first listed configuration (if any) will be
         * applied to the returned #ModulemdModuleStreamV2 object.
         * @param yaml_string A YAML document string containing a module stream definition.
         * @param strict Whether the parser should return failure if it encounters an unknown mapping key or if it should ignore it.
         * @param module_name An optional module name to override the document on disk. Mostly useful in cases where the name is being auto-detected from git.
         * @param module_stream An optional module stream name to override the document on disk. Mostly useful in cases where the name is being auto-detected from git.
         */
        static read_string(
            yaml_string: string,
            strict: boolean,
            module_name?: string | null,
            module_stream?: string | null,
        ): ModuleStream;

        // Own virtual methods of Modulemd.ModuleStream

        vfunc_build_depends_on_stream(module_name: string, stream_name: string): boolean;
        /**
         * Copies a #ModulemdModuleStream, optionally assigning it a new stream name in
         * the process.
         * @param module_name An optional new name for the module of the copied stream.
         * @param module_stream An optional new name for the copied stream.
         */
        vfunc_copy(module_name?: string | null, module_stream?: string | null): ModuleStream;
        vfunc_depends_on_stream(module_name: string, stream_name: string): boolean;
        /**
         * Checks if `self_1` and `self_2` are identical objects.
         * @param self_2 A #ModulemdModuleStream object.
         */
        vfunc_equals(self_2: ModuleStream): boolean;
        vfunc_get_mdversion(): number;
        /**
         * Verifies that all stored values are internally consistent and that the
         * module is sufficiently-complete for emitting. This function is called
         * implicitly before attempting to emit the contents.
         */
        vfunc_validate(): boolean;

        // Own methods of Modulemd.ModuleStream

        build_depends_on_stream(module_name: string, stream_name: string): boolean;
        /**
         * Copies a #ModulemdModuleStream, optionally assigning it a new stream name in
         * the process.
         * @param module_name An optional new name for the module of the copied stream.
         * @param module_stream An optional new name for the copied stream.
         * @returns A newly-allocated #ModulemdModuleStream object that is a complete copy of @self, optionally with a new stream name.
         */
        copy(module_name?: string | null, module_stream?: string | null): ModuleStream;
        depends_on_stream(module_name: string, stream_name: string): boolean;
        /**
         * Checks if `self_1` and `self_2` are identical objects.
         * @param self_2 A #ModulemdModuleStream object.
         * @returns TRUE, If both objects are equal. FALSE, otherwise.
         */
        equals(self_2: ModuleStream): boolean;
        get_NSVCA(): string;
        get_arch(): string;
        get_context(): string;
        get_mdversion(): number;
        get_module_name(): string;
        /**
         * Retrieves a representation of the module name, stream name, version and
         * context of this #ModulemdModuleStream in the form
         * `module_name:stream_name:version:context`. Note that this excludes the
         * architecture of the module stream and as such is not guaranteed to be unique
         * within a repository.
         * @returns The NSVC (name:stream:version[:context]) of this module stream. NULL if module name or stream stream is unknown.
         */
        get_nsvc(): string;
        get_stream_name(): string;
        get_version(): number;
        set_arch(arch?: string | null): void;
        set_context(context?: string | null): void;
        set_version(version: number): void;
        /**
         * Return an upgraded copy of this object. Does not modify the original.
         * @param mdversion The metadata version to upgrade to. If zero, upgrades to the highest-supported version.
         * @returns A newly-allocated #ModulemdModuleStream copy of this object upgraded to the requested version. Returns NULL and sets @error appropriately if the upgrade could not be completed automatically.
         */
        upgrade(mdversion: number): ModuleStream;
        /**
         * Does not modify the original #ModulemdModuleStream object, `from`.
         * @param mdversion The metadata version to upgrade to. If zero, upgrades to the highest-supported version.
         * @returns A newly-allocated #ModulemdModule containing a copy of this object upgraded to the requested version, possibly with multiple streams. Returns NULL and sets @error appropriately if the upgrade could not be completed automatically.
         */
        upgrade_ext(mdversion: number): Module;
        /**
         * Verifies that all stored values are internally consistent and that the
         * module is sufficiently-complete for emitting. This function is called
         * implicitly before attempting to emit the contents.
         * @returns TRUE if the #ModulemdModuleStream passed validation. FALSE and sets @error appropriately if validation fails.
         */
        validate(): boolean;
    }

    module ModuleStreamV1 {
        // Constructor properties interface

        interface ConstructorProps extends ModuleStream.ConstructorProps {
            arch: string;
            buildopts: Buildopts;
            community: string;
            documentation: string;
            tracker: string;
        }
    }

    class ModuleStreamV1 extends ModuleStream {
        static $gtype: GObject.GType<ModuleStreamV1>;

        // Own properties of Modulemd.ModuleStreamV1

        get arch(): string;
        set arch(val: string);
        get buildopts(): Buildopts;
        set buildopts(val: Buildopts);
        get community(): string;
        set community(val: string);
        get documentation(): string;
        set documentation(val: string);
        get tracker(): string;
        set tracker(val: string);

        // Constructors of Modulemd.ModuleStreamV1

        constructor(properties?: Partial<ModuleStreamV1.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](module_name?: string | null, module_stream?: string | null): ModuleStreamV1;
        // Conflicted with Modulemd.ModuleStream.new

        static ['new'](...args: never[]): any;

        // Own methods of Modulemd.ModuleStreamV1

        /**
         * Add a build-time dependency for this module.
         * @param module_name The name of the module to depend on.
         * @param module_stream The name of the module stream to depend on.
         */
        add_buildtime_requirement(module_name: string, module_stream: string): void;
        /**
         * Add a component definition to the module.
         * @param component A #ModulemdComponent to be added to this module stream.
         */
        add_component(component: Component): void;
        add_content_license(license: string): void;
        add_module_license(license: string): void;
        /**
         * Adds a profile definition to this module stream.
         * @param profile A #ModulemdProfile for this module stream.
         */
        add_profile(profile: Profile): void;
        add_rpm_api(rpm: string): void;
        add_rpm_artifact(nevr: string): void;
        add_rpm_filter(rpm: string): void;
        /**
         * Add a runtime dependency for this module.
         * @param module_name The name of the module to depend on.
         * @param module_stream The name of the module stream to depend on.
         */
        add_runtime_requirement(module_name: string, module_stream: string): void;
        /**
         * Adds a servicelevel definition to this module stream.
         * @param servicelevel A #ModulemdServiceLevel for this module stream.
         */
        add_servicelevel(servicelevel: ServiceLevel): void;
        /**
         * Remove all buildtime dependencies for this module.
         */
        clear_buildtime_requirements(): void;
        /**
         * Remove all content licenses.
         */
        clear_content_licenses(): void;
        /**
         * Remove all module components from this module stream.
         */
        clear_module_components(): void;
        /**
         * Remove all module licenses.
         */
        clear_module_licenses(): void;
        /**
         * Remove all profiles from this module stream.
         */
        clear_profiles(): void;
        /**
         * Remove all RPMs from the list of stable public API.
         */
        clear_rpm_api(): void;
        /**
         * Remove all RPM NEVRs from the list of artifacts.
         */
        clear_rpm_artifacts(): void;
        /**
         * Remove all RPM components from this module stream.
         */
        clear_rpm_components(): void;
        /**
         * Remove all RPMs from the filter list.
         */
        clear_rpm_filters(): void;
        /**
         * Remove all runtime dependencies for this module.
         */
        clear_runtime_requirements(): void;
        /**
         * Remove all servicelevels from this module stream.
         */
        clear_servicelevels(): void;
        get_arch(): string;
        get_buildopts(): Buildopts;
        get_buildtime_modules(): string[];
        get_buildtime_requirement_stream(module_name: string): string;
        get_community(): string;
        get_content_licenses(): string[];
        get_description(locale?: string | null): string;
        get_documentation(): string;
        /**
         * Compatibility function with early iterations of modulemd v1. This function
         * is a wrapper for `modulemd_module_stream_v1_get_servicelevel("rawhide")`.
         * @returns The end-of-life date for the "rawhide" service level.
         */
        get_eol(): GLib.Date;
        get_module_component(component_name: string): ComponentModule;
        get_module_component_names(): string[];
        get_module_licenses(): string[];
        get_profile(profile_name: string): Profile;
        get_profile_names(): string[];
        get_rpm_api(): string[];
        get_rpm_artifacts(): string[];
        get_rpm_component(component_name: string): ComponentRpm;
        get_rpm_component_names(): string[];
        get_rpm_filters(): string[];
        get_runtime_modules(): string[];
        get_runtime_requirement_stream(module_name: string): string;
        get_servicelevel(servicelevel_name: string): ServiceLevel;
        get_servicelevel_names(): string[];
        get_summary(locale?: string | null): string;
        get_tracker(): string;
        get_xmd(): GLib.Variant;
        /**
         * Remove a build-time dependency for this module.
         * @param module_name The name of the module to be removed.
         */
        remove_buildtime_requirement(module_name: string): void;
        remove_content_license(license: string): void;
        /**
         * Remove a component from this module stream.
         * @param component_name The name of the component to remove from the module stream.
         */
        remove_module_component(component_name: string): void;
        remove_module_license(license: string): void;
        remove_rpm_api(rpm: string): void;
        remove_rpm_artifact(nevr: string): void;
        /**
         * Remove a component from this module stream.
         * @param component_name The name of the component to remove from the module stream.
         */
        remove_rpm_component(component_name: string): void;
        remove_rpm_filter(rpm: string): void;
        /**
         * Remove a runtime dependency for this module.
         * @param module_name The name of the module to be removed.
         */
        remove_runtime_requirement(module_name: string): void;
        /**
         * Set the module artifact architecture.
         * @param arch The module artifact architecture.
         */
        set_arch(arch: string): void;
        // Conflicted with Modulemd.ModuleStream.set_arch
        set_arch(...args: never[]): any;
        /**
         * Set build options for this module's components.
         * @param buildopts A #ModulemdBuildopts object describing build options that apply globally to components in this module.
         */
        set_buildopts(buildopts: Buildopts): void;
        /**
         * Set the module community website address.
         * @param community The upstream community website for this module.
         */
        set_community(community: string): void;
        /**
         * Set the module description.
         * @param description The untranslated description of this module.
         */
        set_description(description?: string | null): void;
        /**
         * Set the module documentation website address.
         * @param documentation The upstream documentation website for this module.
         */
        set_documentation(documentation: string): void;
        /**
         * Comptibility function with early iterations of modulemd v1. This function is
         * a wrapper for `modulemd_module_stream_v1_add_servicelevel("rawhide", eol)`.
         * @param eol The end-of-life date for the "rawhide" service level.
         */
        set_eol(eol: GLib.Date): void;
        /**
         * Set the module summary.
         * @param summary The untranslated summary of this module.
         */
        set_summary(summary?: string | null): void;
        /**
         * Set the module bug tracker website address.
         * @param tracker The upstream bug tracker website for this module.
         */
        set_tracker(tracker: string): void;
        /**
         * Sets the eXtensible MetaData (XMD) for this module. XMD is arbitrary YAML
         * data that will be set and returned as-is (with the exception that the
         * ordering of mapping keys is not defined). Useful for carrying private data.
         *
         * This function assumes ownership of the XMD #GVariant and thus should not be
         * freed by the caller.
         * @param xmd A #GVariant representing arbitrary YAML.
         */
        set_xmd(xmd: GLib.Variant): void;
    }

    module ModuleStreamV2 {
        // Constructor properties interface

        interface ConstructorProps extends ModuleStream.ConstructorProps {
            arch: string;
            buildopts: Buildopts;
            community: string;
            documentation: string;
            static_context: boolean;
            staticContext: boolean;
            tracker: string;
        }
    }

    class ModuleStreamV2 extends ModuleStream {
        static $gtype: GObject.GType<ModuleStreamV2>;

        // Own properties of Modulemd.ModuleStreamV2

        get arch(): string;
        set arch(val: string);
        get buildopts(): Buildopts;
        set buildopts(val: Buildopts);
        get community(): string;
        set community(val: string);
        get documentation(): string;
        set documentation(val: string);
        get static_context(): boolean;
        set static_context(val: boolean);
        get staticContext(): boolean;
        set staticContext(val: boolean);
        get tracker(): string;
        set tracker(val: string);

        // Constructors of Modulemd.ModuleStreamV2

        constructor(properties?: Partial<ModuleStreamV2.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](module_name?: string | null, module_stream?: string | null): ModuleStreamV2;
        // Conflicted with Modulemd.ModuleStream.new

        static ['new'](...args: never[]): any;

        // Own methods of Modulemd.ModuleStreamV2

        /**
         * Add a component definition to the module.
         * @param component A #ModulemdComponent to be added to this module stream.
         */
        add_component(component: Component): void;
        add_content_license(license: string): void;
        /**
         * Add a binary package name to a list of demodularized packages.
         * @param rpm A name of a binary RPM package to become non-modular.
         */
        add_demodularized_rpm(rpm: string): void;
        /**
         * Add a #ModulemdDependencies object to the list of dependencies for this
         * module stream.
         * @param deps A #ModulemdDependencies object to add to the list for this module stream.
         */
        add_dependencies(deps: Dependencies): void;
        add_module_license(license: string): void;
        /**
         * Adds a profile definition to this module stream.
         * @param profile A #ModulemdProfile for this module stream.
         */
        add_profile(profile: Profile): void;
        add_rpm_api(rpm: string): void;
        add_rpm_artifact(nevr: string): void;
        add_rpm_filter(rpm: string): void;
        /**
         * Adds a servicelevel definition to this module stream.
         * @param servicelevel A #ModulemdServiceLevel for this module stream.
         */
        add_servicelevel(servicelevel: ServiceLevel): void;
        /**
         * Remove all content licenses.
         */
        clear_content_licenses(): void;
        /**
         * Remove all RPM packages from a demodularized list of the object.
         */
        clear_demodularized_rpms(): void;
        /**
         * Empties the list of dependencies for this #ModulemdModuleStream.
         */
        clear_dependencies(): void;
        /**
         * Remove all module components from this module stream.
         */
        clear_module_components(): void;
        /**
         * Remove all module licenses.
         */
        clear_module_licenses(): void;
        /**
         * Remove all profiles from this module stream.
         */
        clear_profiles(): void;
        /**
         * Remove all RPMs from the list of stable public API.
         */
        clear_rpm_api(): void;
        /**
         * Remove all NPM NEVRs from the list of artifacts.
         */
        clear_rpm_artifacts(): void;
        /**
         * Remove all RPM components from this module stream.
         */
        clear_rpm_components(): void;
        /**
         * Remove all RPMs from the filter list.
         */
        clear_rpm_filters(): void;
        /**
         * Remove all servicelevels from this module stream.
         */
        clear_servicelevels(): void;
        /**
         * Removes all XMD data from this #ModulemdModuleStreamV2
         */
        clear_xmd(): void;
        get_arch(): string;
        get_buildopts(): Buildopts;
        get_community(): string;
        get_content_licenses(): string[];
        get_demodularized_rpms(): string[];
        /**
         * Return the list of #ModulemdDependencies objects as a #GPtrArray.
         * @returns A list of all #ModulemdDependencies objects associated with this module stream.
         */
        get_dependencies(): Dependencies[];
        get_description(locale?: string | null): string;
        get_documentation(): string;
        get_module_component(component_name: string): ComponentModule;
        get_module_component_names(): string[];
        get_module_licenses(): string[];
        get_obsoletes_resolved(): Obsoletes;
        get_profile(profile_name: string): Profile;
        get_profile_names(): string[];
        get_rpm_api(): string[];
        get_rpm_artifact_map_entry(digest: string, checksum: string): RpmMapEntry;
        get_rpm_artifacts(): string[];
        get_rpm_component(component_name: string): ComponentRpm;
        get_rpm_component_names(): string[];
        get_rpm_filters(): string[];
        get_servicelevel(servicelevel_name: string): ServiceLevel;
        get_servicelevel_names(): string[];
        get_summary(locale?: string | null): string;
        get_tracker(): string;
        get_xmd(): GLib.Variant;
        is_static_context(): boolean;
        remove_content_license(license: string): void;
        /**
         * Remove a binary package name from a list of demodularized packages.
         * @param rpm A binary RPM name to remove from a demodularized list.
         */
        remove_demodularized_rpm(rpm: string): void;
        /**
         * Removes all entries matching `deps` from the array of #ModulemdDependencies
         * objects.
         * @param deps A #ModulemdDependencies object to remove from the list for this module stream.
         */
        remove_dependencies(deps: Dependencies): void;
        /**
         * Remove a component from this module stream.
         * @param component_name The name of the component to remove from the module stream.
         */
        remove_module_component(component_name: string): void;
        remove_module_license(license: string): void;
        remove_rpm_api(rpm: string): void;
        remove_rpm_artifact(nevr: string): void;
        /**
         * Remove a component from this module stream.
         * @param component_name The name of the component to remove from the module stream.
         */
        remove_rpm_component(component_name: string): void;
        remove_rpm_filter(rpm: string): void;
        search_profiles(profile_pattern?: string | null): Profile[];
        /**
         * Set the module artifact architecture.
         * @param arch The module artifact architecture.
         */
        set_arch(arch: string): void;
        // Conflicted with Modulemd.ModuleStream.set_arch
        set_arch(...args: never[]): any;
        /**
         * Set build options for this module's components.
         * @param buildopts A #ModulemdBuildopts object describing build options that apply globally to components in this module.
         */
        set_buildopts(buildopts: Buildopts): void;
        /**
         * Set the module community website address.
         * @param community The upstream community website for this module.
         */
        set_community(community: string): void;
        /**
         * Set the module description.
         * @param description The untranslated description of this module.
         */
        set_description(description?: string | null): void;
        /**
         * Set the module documentation website address.
         * @param documentation The upstream documentation website for this module.
         */
        set_documentation(documentation: string): void;
        set_rpm_artifact_map_entry(entry: RpmMapEntry, digest: string, checksum: string): void;
        /**
         * Marks this #ModulemdModuleStreamV2 to indicate to dependency solvers that
         * they must treat the `context` attribute as informative.
         */
        set_static_context(): void;
        /**
         * Set the module summary.
         * @param summary The untranslated summary of this module.
         */
        set_summary(summary?: string | null): void;
        /**
         * Set the module bug tracker website address.
         * @param tracker The upstream bug tracker website for this module.
         */
        set_tracker(tracker: string): void;
        /**
         * Sets the eXtensible MetaData (XMD) for this module. XMD is arbitrary YAML
         * data that will be set and returned as-is (with the exception that the
         * ordering of mapping keys is not defined). Useful for carrying private data.
         *
         * This function assumes ownership of the XMD #GVariant and thus should not be
         * freed by the caller.
         * @param xmd A #GVariant representing arbitrary YAML.
         */
        set_xmd(xmd: GLib.Variant): void;
        /**
         * Marks this #ModulemdModuleStreamV2 to indicate to dependency solvers that
         * they must ignore the `context` attribute as a uniqueness element.
         */
        unset_static_context(): void;
    }

    module Obsoletes {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            eol_date: number;
            eolDate: number;
            mdversion: number;
            message: string;
            modified: number;
            module_context: string;
            moduleContext: string;
            module_name: string;
            moduleName: string;
            module_stream: string;
            moduleStream: string;
            obsoleted_by_module_name: string;
            obsoletedByModuleName: string;
            obsoleted_by_module_stream: string;
            obsoletedByModuleStream: string;
            override_previous: boolean;
            overridePrevious: boolean;
        }
    }

    class Obsoletes extends GObject.Object {
        static $gtype: GObject.GType<Obsoletes>;

        // Own properties of Modulemd.Obsoletes

        get eol_date(): number;
        set eol_date(val: number);
        get eolDate(): number;
        set eolDate(val: number);
        get mdversion(): number;
        get message(): string;
        get modified(): number;
        set modified(val: number);
        get module_context(): string;
        set module_context(val: string);
        get moduleContext(): string;
        set moduleContext(val: string);
        get module_name(): string;
        get moduleName(): string;
        get module_stream(): string;
        get moduleStream(): string;
        get obsoleted_by_module_name(): string;
        set obsoleted_by_module_name(val: string);
        get obsoletedByModuleName(): string;
        set obsoletedByModuleName(val: string);
        get obsoleted_by_module_stream(): string;
        set obsoleted_by_module_stream(val: string);
        get obsoletedByModuleStream(): string;
        set obsoletedByModuleStream(val: string);
        get override_previous(): boolean;
        set override_previous(val: boolean);
        get overridePrevious(): boolean;
        set overridePrevious(val: boolean);

        // Constructors of Modulemd.Obsoletes

        constructor(properties?: Partial<Obsoletes.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            mdversion: number,
            modified: number,
            module_name: string,
            module_stream: string,
            message: string,
        ): Obsoletes;

        // Own methods of Modulemd.Obsoletes

        /**
         * Create a copy of this #ModulemdObsoletes object.
         * @returns The copied #ModulemdObsoletes object.
         */
        copy(): Obsoletes;
        get_eol_date(): number;
        get_message(): string;
        get_modified(): number;
        get_module_context(): string;
        get_obsoleted_by_module_name(): string;
        get_obsoleted_by_module_stream(): string;
        get_reset(): boolean;
        is_active(): boolean;
        set_eol_date(eol_date: number): void;
        set_modified(modified: number): void;
        set_module_context(module_context?: string | null): void;
        /**
         * Sets both obsoleted by module name and stream because having one without
         * the other is invalid.
         * @param obsoleted_by_module_name The module name of obsoleting stream.
         * @param obsoleted_by_module_stream The module stream of obsoleting stream.
         */
        set_obsoleted_by(obsoleted_by_module_name: string, obsoleted_by_module_stream: string): void;
        /**
         * Sets the reset attribute on #ModulemdObsoletes object. With this boolean attribute set the
         * obsoletes resets (cancels out) all previously specified obsoletes.
         * @param reset Whether to reset/cancel all previously specified obsoletes.
         */
        set_reset(reset: boolean): void;
        /**
         * This method ensures that the obsoletes is internally consistent for usage
         * or dumping to YAML. It will be run implicitly prior to emitting YAML. This
         * is not a complete linter, merely a sanity check that the values are not
         * impossible.
         */
        validate(): boolean;
    }

    module PackagerV3 {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class PackagerV3 extends GObject.Object {
        static $gtype: GObject.GType<PackagerV3>;

        // Constructors of Modulemd.PackagerV3

        constructor(properties?: Partial<PackagerV3.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PackagerV3;

        // Own methods of Modulemd.PackagerV3

        add_build_config(buildconfig: BuildConfig): void;
        /**
         * Add a component definition to the module.
         * @param component A #ModulemdComponent to be added to this module stream.
         */
        add_component(component: Component): void;
        /**
         * Add a binary package name to a list of demodularized packages.
         * @param rpm A name of a binary RPM package to become non-modular.
         */
        add_demodularized_rpm(rpm: string): void;
        add_module_license(license: string): void;
        /**
         * Adds a #ModulemdProfile to this #ModulemdPackagerV3 object.
         * @param profile The new #ModulemdProfile to add.
         */
        add_profile(profile: Profile): void;
        add_rpm_api(rpm: string): void;
        add_rpm_filter(rpm: string): void;
        /**
         * Remove all added #ModulemdBuildConfig objects from `self`
         */
        clear_build_configs(): void;
        /**
         * Remove all RPM packages from a demodularized list of the object.
         */
        clear_demodularized_rpms(): void;
        /**
         * Remove all module components from this module stream.
         */
        clear_module_components(): void;
        /**
         * Remove all module licenses from `self`
         */
        clear_module_licenses(): void;
        /**
         * Removes all #ModulemdProfile objects from this #ModulemdPackagerV3 object.
         */
        clear_profiles(): void;
        /**
         * Remove all RPMs from the list of stable public API.
         */
        clear_rpm_api(): void;
        /**
         * Remove all RPM components from this module stream.
         */
        clear_rpm_components(): void;
        /**
         * Remove all RPMs from the filter list.
         */
        clear_rpm_filters(): void;
        convert_to_index(): ModuleIndex;
        copy(): PackagerV3;
        get_build_config(context: string): BuildConfig;
        get_build_config_contexts_as_strv(): string[];
        get_community(): string;
        get_demodularized_rpms(): string[];
        get_description(): string;
        get_documentation(): string;
        get_mdversion(): number;
        get_module_component(component_name: string): ComponentModule;
        get_module_component_names(): string[];
        get_module_licenses_as_strv(): string[];
        get_module_name(): string;
        get_profile(profile_name: string): Profile;
        get_profile_names_as_strv(): string[];
        get_rpm_api_as_strv(): string[];
        get_rpm_component(component_name: string): ComponentRpm;
        get_rpm_component_names(): string[];
        get_rpm_filters_as_strv(): string[];
        get_stream_name(): string;
        get_summary(): string;
        get_tracker(): string;
        get_xmd(): GLib.Variant;
        /**
         * Remove a binary package name from a list of demodularized packages.
         * @param rpm A binary RPM package name to remove from a demodularized list.
         */
        remove_demodularized_rpm(rpm: string): void;
        /**
         * Remove a component from this module stream.
         * @param component_name The name of the component to remove from the module stream.
         */
        remove_module_component(component_name: string): void;
        remove_module_license(license: string): void;
        remove_rpm_api(rpm: string): void;
        /**
         * Remove a component from this module stream.
         * @param component_name The name of the component to remove from the module stream.
         */
        remove_rpm_component(component_name: string): void;
        remove_rpm_filter(rpm: string): void;
        /**
         * Any existing demodularized binary RPM package names associated with module
         * stream `self` are removed and replaced by `set`.
         * @param set A #GHashTable set of names of binary RPM packages to demodularize.
         */
        replace_demodularized_rpms(set: { [key: string]: any } | GLib.HashTable<any, any>): void;
        /**
         * Any existing API RPMs associated with module stream `self` are removed and
         * replaced by `set`.
         * @param set A #GHashTable set of binary RPMs present in this module stream that is considered stable public API.
         */
        replace_rpm_api(set: { [key: string]: any } | GLib.HashTable<any, any>): void;
        /**
         * Any existing filtered binary RPM names associated with module stream `self`
         * are removed and replaced by `set`.
         * @param set A #GHashTable set of names of binary RPMs to filter out of this module stream.
         */
        replace_rpm_filters(set: { [key: string]: any } | GLib.HashTable<any, any>): void;
        /**
         * Set the module community website address.
         * @param community The upstream community website for this module.
         */
        set_community(community: string): void;
        /**
         * Sets the module's long description.
         * @param description A complete description of the module.
         */
        set_description(description?: string | null): void;
        /**
         * Set the module documentation website address.
         * @param documentation The upstream documentation website for this module.
         */
        set_documentation(documentation: string): void;
        /**
         * Sets the module name that this #ModulemdPackagerV3 object references.
         * @param module_name The name of the module.
         */
        set_module_name(module_name: string): void;
        /**
         * Sets the stream name that this #ModulemdPackagerV3 object references.
         * @param stream_name The name of the module.
         */
        set_stream_name(stream_name: string): void;
        /**
         * Sets the module's short description.
         * @param summary A short description of the module.
         */
        set_summary(summary?: string | null): void;
        /**
         * Set the module bug tracker website address.
         * @param tracker The upstream bug tracker website for this module.
         */
        set_tracker(tracker: string): void;
        /**
         * Sets the eXtensible MetaData (XMD) for this module. XMD is arbitrary YAML
         * data that will be set and returned as-is (with the exception that the
         * ordering of mapping keys is not defined). Useful for carrying private data.
         *
         * This function assumes ownership of the XMD #GVariant and thus should not be
         * freed by the caller.
         * @param xmd A #GVariant representing arbitrary YAML.
         */
        set_xmd(xmd: GLib.Variant): void;
    }

    module Profile {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
        }
    }

    class Profile extends GObject.Object {
        static $gtype: GObject.GType<Profile>;

        // Own properties of Modulemd.Profile

        get name(): string;

        // Constructors of Modulemd.Profile

        constructor(properties?: Partial<Profile.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string): Profile;

        // Own methods of Modulemd.Profile

        add_rpm(rpm: string): void;
        /**
         * Remove all RPMs from this profile.
         */
        clear_rpms(): void;
        /**
         * Create a copy of this #ModulemdProfile object.
         * @returns The copied #ModulemdProfile object.
         */
        copy(): Profile;
        equals(self_2: Profile): boolean;
        get_description(locale?: string | null): string;
        get_name(): string;
        get_rpms(): string[];
        is_default(): boolean;
        remove_rpm(rpm: string): void;
        /**
         * Calling this function indicates that this profile should be considered one
         * of the default profiles for the associated stream.
         */
        set_default(): void;
        set_description(description?: string | null): void;
        /**
         * Calling this function indicates that this profile should not be considered
         * one of the default profiles for this stream. This is the normal state of
         * a #ModulemdProfile and thus this function is usually unnecessary. It has no
         * effect if `self` is already non-default.
         */
        unset_default(): void;
    }

    module RpmMapEntry {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            arch: string;
            epoch: number;
            name: string;
            nevra: string;
            release: string;
            version: string;
        }
    }

    class RpmMapEntry extends GObject.Object {
        static $gtype: GObject.GType<RpmMapEntry>;

        // Own properties of Modulemd.RpmMapEntry

        get arch(): string;
        set arch(val: string);
        get epoch(): number;
        set epoch(val: number);
        get name(): string;
        set name(val: string);
        get nevra(): string;
        get release(): string;
        set release(val: string);
        get version(): string;
        set version(val: string);

        // Constructors of Modulemd.RpmMapEntry

        constructor(properties?: Partial<RpmMapEntry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, epoch: number, version: string, release: string, arch: string): RpmMapEntry;

        // Own methods of Modulemd.RpmMapEntry

        copy(): RpmMapEntry;
        equals(other: RpmMapEntry): boolean;
        get_arch(): string;
        get_epoch(): number;
        get_name(): string;
        get_nevra(): string;
        get_release(): string;
        get_version(): string;
        set_arch(arch: string): void;
        set_epoch(epoch: number): void;
        set_name(name: string): void;
        set_release(release: string): void;
        set_version(version: string): void;
        validate(): boolean;
    }

    module ServiceLevel {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
        }
    }

    class ServiceLevel extends GObject.Object {
        static $gtype: GObject.GType<ServiceLevel>;

        // Own properties of Modulemd.ServiceLevel

        get name(): string;

        // Constructors of Modulemd.ServiceLevel

        constructor(properties?: Partial<ServiceLevel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string): ServiceLevel;

        // Own methods of Modulemd.ServiceLevel

        /**
         * Create a copy of this #ModulemdServiceLevel object.
         * @returns The copied #ModulemdServiceLevel object.
         */
        copy(): ServiceLevel;
        equals(self_2: ServiceLevel): boolean;
        get_eol(): GLib.Date;
        get_eol_as_string(): string | null;
        /**
         * Get the name of this service level.
         * @returns The name of this service level. This is a pointer to the internal memory location and must not be freed.
         */
        get_name(): string;
        /**
         * Remove the EOL from this Service Level.
         */
        remove_eol(): void;
        /**
         * Sets the end date of the service level. If the #GDate passed in is invalid
         * or NULL, the EOL will be unset.
         * @param date The date this service level ends.
         */
        set_eol(date?: GLib.Date | null): void;
        set_eol_ymd(year: GLib.DateYear, month: GLib.DateMonth, day: GLib.DateDay): void;
    }

    module SubdocumentInfo {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class SubdocumentInfo extends GObject.Object {
        static $gtype: GObject.GType<SubdocumentInfo>;

        // Constructors of Modulemd.SubdocumentInfo

        constructor(properties?: Partial<SubdocumentInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Modulemd.SubdocumentInfo

        get_gerror(): GLib.Error;
        get_yaml(): string;
    }

    module Translation {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            modified: number;
            module_name: string;
            moduleName: string;
            module_stream: string;
            moduleStream: string;
            version: number;
        }
    }

    class Translation extends GObject.Object {
        static $gtype: GObject.GType<Translation>;

        // Own properties of Modulemd.Translation

        get modified(): number;
        set modified(val: number);
        get module_name(): string;
        get moduleName(): string;
        get module_stream(): string;
        get moduleStream(): string;
        get version(): number;

        // Constructors of Modulemd.Translation

        constructor(properties?: Partial<Translation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](version: number, module_name: string, module_stream: string, modified: number): Translation;

        // Own methods of Modulemd.Translation

        /**
         * Create a copy of this #ModulemdTranslation object.
         * @returns The copied #ModulemdTranslation object.
         */
        copy(): Translation;
        get_locales(): string[];
        get_translation_entry(locale: string): TranslationEntry;
        set_modified(modified: number): void;
        set_translation_entry(translation_entry: TranslationEntry): void;
        /**
         * This method ensures that the translation is internally consistent for usage
         * or dumping to YAML. It will be run implicitly prior to emitting YAML. This
         * is not a complete linter, merely a sanity check that the values are not
         * impossible.
         */
        validate(): boolean;
    }

    module TranslationEntry {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            description: string;
            locale: string;
            summary: string;
        }
    }

    class TranslationEntry extends GObject.Object {
        static $gtype: GObject.GType<TranslationEntry>;

        // Own properties of Modulemd.TranslationEntry

        get description(): string;
        set description(val: string);
        get locale(): string;
        get summary(): string;
        set summary(val: string);

        // Constructors of Modulemd.TranslationEntry

        constructor(properties?: Partial<TranslationEntry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](locale: string): TranslationEntry;

        // Own methods of Modulemd.TranslationEntry

        /**
         * Create a copy of this #ModulemdTranslationEntry object.
         * @returns The copied #ModulemdTranslationEntry object.
         */
        copy(): TranslationEntry;
        /**
         * Get the description of this translation entry.
         * @returns The description of this module stream translated into the language specified by locale.
         */
        get_description(): string;
        /**
         * Get the locale of this translation entry.
         * @returns The locale of this translation entry. This is a pointer to the internal memory location and must not be freed.
         */
        get_locale(): string;
        get_profile_description(profile_name: string): string;
        /**
         * Get a list of profiles that have descriptions.
         * @returns An ordered #GStrv list of profiles for which descriptions have been translated for this locale.
         */
        get_profiles(): string[];
        /**
         * Get the summary of this translation entry.
         * @returns The summary of this module stream translated into the language specified by locale.
         */
        get_summary(): string;
        set_description(description?: string | null): void;
        /**
         * Adds a profile name translation.
         * @param profile_name The name of the profile.
         * @param profile_description The translated description of the profile.
         */
        set_profile_description(profile_name: string, profile_description?: string | null): void;
        set_summary(summary?: string | null): void;
    }

    type BuildConfigClass = typeof BuildConfig;
    type BuildoptsClass = typeof Buildopts;
    type ComponentClass = typeof Component;
    type ComponentModuleClass = typeof ComponentModule;
    type ComponentRpmClass = typeof ComponentRpm;
    type DefaultsClass = typeof Defaults;
    type DefaultsV1Class = typeof DefaultsV1;
    type DependenciesClass = typeof Dependencies;
    type ModuleClass = typeof Module;
    type ModuleIndexClass = typeof ModuleIndex;
    type ModuleIndexMergerClass = typeof ModuleIndexMerger;
    type ModuleStreamClass = typeof ModuleStream;
    type ModuleStreamV1Class = typeof ModuleStreamV1;
    type ModuleStreamV2Class = typeof ModuleStreamV2;
    type ObsoletesClass = typeof Obsoletes;
    type PackagerV3Class = typeof PackagerV3;
    type ProfileClass = typeof Profile;
    type RpmMapEntryClass = typeof RpmMapEntry;
    type ServiceLevelClass = typeof ServiceLevel;
    type SubdocumentInfoClass = typeof SubdocumentInfo;
    type TranslationClass = typeof Translation;
    type TranslationEntryClass = typeof TranslationEntry;
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

export default Modulemd;
// END
