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

export namespace Modulemd {
    /**
     * Modulemd-2.0
     */

    /**
     * @gir-type Enum
     * @since 2.8
     */
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

    /**
     * @gir-type Enum
     * @since 2.0
     */
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
         * Represents v1 of the {@link Modulemd.Defaults} metadata
         * format.
         */
        ONE,
        /**
         * Represents the highest-supported version of the
         * {@link Modulemd.Defaults} metadata format.
         */
        LATEST,
    }

    /**
     * @gir-type Struct
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

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

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * @gir-type Enum
     * @since 2.0
     * @deprecated since 2.9: Use {@link Modulemd.Error} instead.
     */
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

    /**
     * @gir-type Enum
     * @since 2.0
     */
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
         * Represents v1 of the {@link Modulemd.ModuleStream}
         * metadata format.
         */
        ONE,
        /**
         * Represents v2 of the {@link Modulemd.ModuleStream}
         * metadata format.
         */
        TWO,
        /**
         * Represents the highest-supported version of
         * the {@link Modulemd.ModuleStream} metadata format.
         */
        LATEST,
    }

    /**
     * @gir-type Enum
     * @since 2.10
     */
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
         * Represents v1 of the {@link Modulemd.Obsoletes} metadata
         * format.
         */
        ONE,
        /**
         * Represents the highest-supported version of the
         * {@link Modulemd.Obsoletes} metadata format.
         */
        LATEST,
    }

    /**
     * @gir-type Enum
     * @since 2.11
     */
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

    /**
     * @gir-type Struct
     */
    class YamlError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

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

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * @gir-type Enum
     * @since 2.0
     * @deprecated since 2.9: Use {@link Modulemd.YamlError} instead.
     */
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
     * @since 2.10
     */
    const MMD_MAXCONTEXTLEN: number;
    /**
     * The {@link Modulemd.PackagerV3} default module metadata license.
     * @since 2.11
     */
    const MMD_PACKAGER_DEFAULT_MODULE_LICENSE: string;
    /**
     * @param name The name of the compression type. Valid options are: "gz", "gzip", "bz2", "bzip2", "xz", "zck", and "zstd".
     * @returns The {@link Modulemd.CompressionTypeEnum} value corresponding to the provided string if available or #MODULEMD_COMPRESSION_TYPE_UNKNOWN_COMPRESSION if the string does not match a known type.
     * @since 2.8
     */
    function compression_type(name: string): CompressionTypeEnum;
    /**
     * @returns A {@link GLib.Quark} used to identify an error in the general modulemd domain.
     * @since 2.9
     */
    function error_quark(): GLib.Quark;
    /**
     * @returns A string describing the version of libmodulemd.
     * @since 2.0
     */
    function get_version(): string;
    /**
     * This is a convenience function that is a wrapper around
     * `modulemd_module_index_new()` and `modulemd_module_index_update_from_file()`
     * with `strict=False`.
     *
     * It will return the imported module metadata if all subdocuments are
     * parseable and valid. If any part of the document is unreadable or fails
     * validation, it will return NULL and set `error` appropriately. If you need
     * more detail about which parts of the document failed, use the lower-level
     * functions.
     * @param yaml_file A YAML file containing the module metadata and other related information such as default streams.
     * @returns A newly-allocated {@link Modulemd.ModuleIndex} object initialized with the content from `yaml_file`. Returns NULL and sets `error` if the file is not completely valid.
     * @since 2.10
     */
    function load_file(yaml_file: string): ModuleIndex;
    /**
     * This is a convenience function that is a wrapper around
     * `modulemd_module_index_new()` and `modulemd_module_index_update_from_string()`
     * with `strict=False`.
     *
     * It will return the imported module metadata if all subdocuments are
     * parseable and valid. If any part of the document is unreadable or fails
     * validation, it will return NULL and set `error` appropriately. If you need
     * more detail about which parts of the document failed, use the lower-level
     * functions.
     * @param yaml_string A YAML string containing the module metadata and other related information such as default streams.
     * @returns A newly-allocated {@link Modulemd.ModuleIndex} object initialized with the content from `yaml_string`. Returns NULL and sets `error` if the metadata is not completely valid.
     * @since 2.10
     */
    function load_string(yaml_string: string): ModuleIndex;
    /**
     * @param yaml_path A path to a YAML file containing a packager document.
     * @param module_name An optional module name to override the document on disk. Mostly useful in cases where the name is being auto-detected from git.
     * @param module_stream An optional module stream name to override the document on disk. Mostly useful in cases where the name is being auto-detected from git.
     * @returns `MODULEMD_TYPE_MODULE_STREAM_V2`, `MODULEMD_TYPE_PACKAGER_V3`, or `G_TYPE_INVALID`. Returns the matching GObject through the `object` parameter. If the return value is `G_TYPE_INVALID`, returns the reason as `error`.
     * @since 2.11
     */
    function read_packager_file(
        yaml_path: string,
        module_name?: string | null,
        module_stream?: string | null,
    ): [GObject.GType, GObject.Object];
    /**
     * @param yaml_string A YAML string containing a packager document.
     * @param module_name An optional module name to override the document on disk. Mostly useful in cases where the name is being auto-detected from git.
     * @param module_stream An optional module stream name to override the document on disk. Mostly useful in cases where the name is being auto-detected from git.
     * @returns `MODULEMD_TYPE_MODULE_STREAM_V2`, `MODULEMD_TYPE_PACKAGER_V3`, or `G_TYPE_INVALID`. Returns the matching GObject through the `object` parameter. If the return value is `G_TYPE_INVALID`, returns the reason as `error`.
     * @since 2.11
     */
    function read_packager_string(
        yaml_string: string,
        module_name?: string | null,
        module_stream?: string | null,
    ): [GObject.GType, GObject.Object];
    /**
     * @returns A {@link GLib.Quark} used to identify an error in the modulemd yaml domain.
     * @since 2.9
     */
    function yaml_error_quark(): GLib.Quark;
    /**
     * @gir-type Callback
     */
    interface ReadHandler {
        (data: any, size: number): number;
    }
    /**
     * @gir-type Callback
     */
    interface WriteHandler {
        (data: any, size: number): number;
    }
    namespace BuildConfig {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class BuildConfig extends GObject.Object {
        static $gtype: GObject.GType<BuildConfig>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BuildConfig.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BuildConfig.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BuildConfig;

        // Signals

        /** @signal */
        connect<K extends keyof BuildConfig.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BuildConfig.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BuildConfig.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BuildConfig.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BuildConfig.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BuildConfig.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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
        /**
         * @param self_2 A pointer to a {@link Modulemd.BuildConfig} object.
         * @returns Less than zero if `self_1` sorts less than `self_2`, zero for equal, greater than zero if `self_1` is greater than `self_2`.
         */
        compare(self_2: BuildConfig): number;
        /**
         * @returns A deep copy of `self`
         */
        copy(): BuildConfig;
        /**
         * @param self_2 A pointer to a {@link Modulemd.BuildConfig} object.
         * @returns TRUE, if `self_1` and `self_2` are pointers to {@link Modulemd.BuildConfig} objects containing equivalent data. FALSE, otherwise.
         */
        equals(self_2: BuildConfig): boolean;
        /**
         * @returns The build options for this module's components.
         */
        get_buildopts(): Buildopts;
        /**
         * @returns An ordered {@link GObject.Strv} list of module names that this module depends on at build-time.
         */
        get_buildtime_modules_as_strv(): string[];
        /**
         * @param module_name The name of the module this module depends on.
         * @returns The name of the stream matching this module name in the build-time dependencies.
         */
        get_buildtime_requirement_stream(module_name: string): string;
        /**
         * Get the context that this build configuration produces.
         *
         * Note: This function returns the context as stored internally. If you want to
         * be sure that it is in the correct format, call
         * `modulemd_build_config_validate()` first.
         * @returns The string representing the context that this build configuration produces.
         */
        get_context(): string;
        /**
         * Get the platform that this build configuration applies to.
         * @returns The string representing the platform that this build configuration applies to.
         */
        get_platform(): string;
        /**
         * @returns An ordered {@link GObject.Strv} list of module names that this module depends on at run-time.
         */
        get_runtime_modules_as_strv(): string[];
        /**
         * @param module_name The name of the module this module depends on.
         * @returns The name of the stream matching this module name in the run-time dependencies.
         */
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
         * @param buildopts A {@link Modulemd.Buildopts} object describing build options that apply globally to components in this module.
         */
        set_buildopts(buildopts: Buildopts): void;
        /**
         * Set the context that this build configuration produces.
         *
         * Note: For consistency in the API, this function does not validate the input
         * `context`. This validation will be performed as part of the
         * `modulemd_build_config_validate()` routine where it can be reported cleanly.
         * @param context A string of up to ten alphanumeric characters.
         */
        set_context(context: string): void;
        /**
         * Set the platform that this build configuration applies to.
         * @param platform A string of up to ten alphanumeric characters.
         */
        set_platform(platform: string): void;
        /**
         * Determine if this {@link Modulemd.BuildConfig} is valid according to the YAML
         * specification.
         * @returns TRUE if validation passes. Returns FALSE and sets `error` appropriately on validation failure.
         */
        validate(): boolean;
    }

    namespace Buildopts {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::rpm-macros': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            rpm_macros: string;
            rpmMacros: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Buildopts extends GObject.Object {
        static $gtype: GObject.GType<Buildopts>;

        // Properties

        get rpm_macros(): string;
        set rpm_macros(val: string);
        get rpmMacros(): string;
        set rpmMacros(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Buildopts.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Buildopts.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Buildopts;

        // Signals

        /** @signal */
        connect<K extends keyof Buildopts.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Buildopts.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Buildopts.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Buildopts.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Buildopts.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Buildopts.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Restrict the list of architectures for which to build this module. It may be
         * called any number of times to indicate support on additional architectures.
         * Use `modulemd_buildopts_clear_arches()` to return to "all architectures".
         * @param arch An architecture for which to build this module.
         */
        add_arch(arch: string): void;
        /**
         * @param rpm An RPM name to add to the whitelist.
         */
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
         * Create a copy of this {@link Modulemd.Buildopts} object.
         * @returns A newly-allocated {@link Modulemd.Buildopts} object that is a copy of `self`.
         */
        copy(): Buildopts;
        /**
         * Check for equality for two {@link Modulemd.Buildopts} objects.
         * @param self_2 A {@link Modulemd.Buildopts} object.
         * @returns TRUE if both objects are equal, FALSE otherwise.
         */
        equals(self_2: Buildopts): boolean;
        /**
         * @returns A {@link GObject.Strv} list of architectures for which this module should be built. If empty, this module should be built for all architectures.
         */
        get_arches(): string[];
        /**
         * @returns A string containing RPM build macros in the form that they would appear in an RPM macros file on-disk.
         */
        get_rpm_macros(): string;
        /**
         * @returns An ordered {@link GObject.Strv} list of all RPMs in the whitelist.
         */
        get_rpm_whitelist(): string[];
        /**
         * @param arch An architecture to remove from the list of architectures for which to build this module.
         */
        remove_arch(arch: string): void;
        /**
         * @param rpm An RPM name to remove from the whitelist.
         */
        remove_rpm_from_whitelist(rpm: string): void;
        /**
         * @param rpm_macros A string containing RPM build macros in the form that they would appear in an RPM macros file on-disk.
         */
        set_rpm_macros(rpm_macros: string): void;
    }

    namespace Component {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::buildonly': (pspec: GObject.ParamSpec) => void;
            'notify::buildorder': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::rationale': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buildonly: boolean;
            buildorder: number;
            name: string;
            rationale: string;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class Component extends GObject.Object {
        static $gtype: GObject.GType<Component>;

        // Properties

        get buildonly(): boolean;
        set buildonly(val: boolean);
        get buildorder(): number;
        set buildorder(val: number);
        get name(): string;
        get rationale(): string;
        set rationale(val: string);

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

        // Signals

        /** @signal */
        connect<K extends keyof Component.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Component.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Component.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Component.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Component.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Component.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param key An optional new key for the copied component which is used as the lookup key when this component is attached to a {@link Modulemd.ModuleStream}.
         * @virtual
         */
        vfunc_copy(key?: string | null): Component;
        /**
         * @param self_2 A {@link Modulemd.Component} object.
         * @virtual
         */
        vfunc_equals(self_2: Component): boolean;
        /**
         * @virtual
         */
        vfunc_get_name(): string;
        /**
         * @param name The name of this component. Note that this is different from the key used to save this component to a {@link Modulemd.ModuleStream}. If this value is set, it adds a "name:" attribute to this component. This is used in bootstrapping cases where the key is a different name used to differentiate multiple ordered builds of the same component name. This function is currently only implemented for {@link Modulemd.ComponentRpm} and has no effect on other {@link Modulemd.Component} types.
         * @virtual
         */
        vfunc_set_name(name?: string | null): void;
        /**
         * Verifies that all stored values are internally consistent and that the
         * component is sufficiently-complete for emitting. This function is called
         * implicitly before attempting to emit the contents.
         * @virtual
         */
        vfunc_validate(): boolean;

        // Methods

        /**
         * Add a build dependency of this component.
         * @param key A key representing another component in the {@link Modulemd.ModuleStream} components map.
         */
        add_buildafter(key: string): void;
        /**
         * Remove all buildafter entries for this component.
         */
        clear_buildafter(): void;
        /**
         * @param key An optional new key for the copied component which is used as the lookup key when this component is attached to a {@link Modulemd.ModuleStream}.
         * @returns A newly-allocated copy of `self`.
         */
        copy(key?: string | null): Component;
        /**
         * @param self_2 A {@link Modulemd.Component} object.
         * @returns TRUE, if both the objects are equal. FALSE, otherwise.
         */
        equals(self_2: Component): boolean;
        /**
         * @returns The set of component keys that this component depends upon.
         */
        get_buildafter(): string[];
        /**
         * @returns TRUE if this component is used only for building this module.
         */
        get_buildonly(): boolean;
        /**
         * @returns The value of the buildorder.
         */
        get_buildorder(): number;
        /**
         * @returns The name of the key used to attach this component to a {@link Modulemd.ModuleStream}.
         */
        get_key(): string;
        /**
         * @returns The name of the component. Note that this may be different from the key used to save this component to a {@link Modulemd.ModuleStream}. If you specifically need the key, use `modulemd_component_get_key()` instead.
         */
        get_name(): string;
        /**
         * @returns The rationale.
         */
        get_rationale(): string;
        /**
         * @param buildonly Whether this component is used only for building this module. If set to TRUE, the build system should add any artifacts produced by this component to the data.filters section of the output modulemd.
         */
        set_buildonly(buildonly: boolean): void;
        /**
         * @param buildorder The order this component should be built relative to others.
         */
        set_buildorder(buildorder: number): void;
        /**
         * @param name The name of this component. Note that this is different from the key used to save this component to a {@link Modulemd.ModuleStream}. If this value is set, it adds a "name:" attribute to this component. This is used in bootstrapping cases where the key is a different name used to differentiate multiple ordered builds of the same component name. This function is currently only implemented for {@link Modulemd.ComponentRpm} and has no effect on other {@link Modulemd.Component} types.
         */
        set_name(name?: string | null): void;
        /**
         * @param rationale The reason that this component is part of the stream.
         */
        set_rationale(rationale?: string | null): void;
        /**
         * Verifies that all stored values are internally consistent and that the
         * component is sufficiently-complete for emitting. This function is called
         * implicitly before attempting to emit the contents.
         * @returns TRUE if the {@link Modulemd.Component} passed validation. FALSE and sets `error` appropriately if validation fails.
         */
        validate(): boolean;
    }

    namespace ComponentModule {
        // Signal signatures
        interface SignalSignatures extends Component.SignalSignatures {
            'notify::ref': (pspec: GObject.ParamSpec) => void;
            'notify::repository': (pspec: GObject.ParamSpec) => void;
            'notify::buildonly': (pspec: GObject.ParamSpec) => void;
            'notify::buildorder': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::rationale': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Component.ConstructorProps {
            ref: string | any;
            repository: string;
        }
    }

    /**
     * @gir-type Class
     */
    class ComponentModule extends Component {
        static $gtype: GObject.GType<ComponentModule>;

        // Properties

        // This accessor conflicts with a field or function name in a parent class or interface.
        ref: string | any;
        get repository(): string;
        set repository(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ComponentModule.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ComponentModule.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](key: string): ComponentModule;

        // Signals

        /** @signal */
        connect<K extends keyof ComponentModule.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ComponentModule.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ComponentModule.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ComponentModule.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ComponentModule.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ComponentModule.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns The commit ID in the SCM repository.
         */
        get_ref(): string;
        /**
         * @returns The URI of the SCM repository.
         */
        get_repository(): string;
        /**
         * @param ref The commit ID in the SCM repository.
         */
        set_ref(ref?: string | null): void;
        /**
         * @param repository The URI of the SCM repository.
         */
        set_repository(repository?: string | null): void;
    }

    namespace ComponentRpm {
        // Signal signatures
        interface SignalSignatures extends Component.SignalSignatures {
            'notify::buildroot': (pspec: GObject.ParamSpec) => void;
            'notify::cache': (pspec: GObject.ParamSpec) => void;
            'notify::ref': (pspec: GObject.ParamSpec) => void;
            'notify::repository': (pspec: GObject.ParamSpec) => void;
            'notify::srpm-buildroot': (pspec: GObject.ParamSpec) => void;
            'notify::buildonly': (pspec: GObject.ParamSpec) => void;
            'notify::buildorder': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::rationale': (pspec: GObject.ParamSpec) => void;
        }

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

    /**
     * @gir-type Class
     */
    class ComponentRpm extends Component {
        static $gtype: GObject.GType<ComponentRpm>;

        // Properties

        get buildroot(): boolean;
        set buildroot(val: boolean);
        get cache(): string;
        set cache(val: string);
        // This accessor conflicts with a field or function name in a parent class or interface.
        ref: string | any;
        get repository(): string;
        set repository(val: string);
        get srpm_buildroot(): boolean;
        set srpm_buildroot(val: boolean);
        get srpmBuildroot(): boolean;
        set srpmBuildroot(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ComponentRpm.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ComponentRpm.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](key: string): ComponentRpm;

        // Signals

        /** @signal */
        connect<K extends keyof ComponentRpm.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ComponentRpm.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ComponentRpm.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ComponentRpm.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ComponentRpm.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ComponentRpm.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add an architecture on which this RPM will be multilib. It may be called
         * any number of times. Use `modulemd_component_rpm_clear_multilib_arches()` to
         * return to "no architectures".
         * @param arch An architecture on which this package should be multilib.
         */
        add_multilib_arch(arch: string): void;
        /**
         * Restrict the list of architectures on which this RPM will be available. It
         * may be called any number of times to indicate support on additional
         * architectures. Use `modulemd_component_rpm_clear_arches()` to return to "all
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
        /**
         * @returns A {@link GObject.Strv} list of architectures on which this RPM should be available.
         */
        get_arches(): string[];
        /**
         * @returns The {@link Modulemd.ComponentRpm.buildroot} flag.
         */
        get_buildroot(): boolean;
        /**
         * @returns The lookaside cache URL.
         */
        get_cache(): string;
        /**
         * @returns A {@link GObject.Strv} list of architectures on which multilib should be available.
         */
        get_multilib_arches(): string[];
        /**
         * @returns The commit ID in the SCM repository.
         */
        get_ref(): string;
        /**
         * @returns The URI of the SCM repository.
         */
        get_repository(): string;
        /**
         * @returns The {@link Modulemd.ComponentRpm.srpm_buildroot} flag.
         */
        get_srpm_buildroot(): boolean;
        /**
         * Indicate that this RPM component is available on all arches.
         */
        reset_arches(): void;
        /**
         * Indicate that this RPM component is multilib on no architectures.
         */
        reset_multilib_arches(): void;
        /**
         * @param buildroot The {@link Modulemd.ComponentRpm.buildroot} flag to set for `self`.
         */
        set_buildroot(buildroot: boolean): void;
        /**
         * @param cache The lookaside cache URL.
         */
        set_cache(cache?: string | null): void;
        /**
         * @param ref The commit ID in the SCM repository.
         */
        set_ref(ref?: string | null): void;
        /**
         * @param repository The URI of the SCM repository.
         */
        set_repository(repository?: string | null): void;
        /**
         * @param srpm_buildroot The {@link Modulemd.ComponentRpm.srpm_buildroot} flag to set for `self`.
         */
        set_srpm_buildroot(srpm_buildroot: boolean): void;
    }

    namespace Defaults {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::mdversion': (pspec: GObject.ParamSpec) => void;
            'notify::module-name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            mdversion: number;
            module_name: string;
            moduleName: string;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class Defaults extends GObject.Object {
        static $gtype: GObject.GType<Defaults>;

        // Properties

        get mdversion(): number;
        get module_name(): string;
        get moduleName(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Defaults.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Defaults.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](version: number, module_name: string): Defaults;

        // Signals

        /** @signal */
        connect<K extends keyof Defaults.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Defaults.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Defaults.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Defaults.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Defaults.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Defaults.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_copy(): Defaults;
        /**
         * @param self_2 A {@link Modulemd.Defaults} object
         * @virtual
         */
        vfunc_equals(self_2: Defaults): boolean;
        /**
         * @virtual
         */
        vfunc_get_mdversion(): number;
        /**
         * @virtual
         */
        vfunc_validate(): boolean;

        // Methods

        /**
         * @returns A newly-allocated copy of `self`.
         */
        copy(): Defaults;
        /**
         * @param self_2 A {@link Modulemd.Defaults} object
         * @returns TRUE if both `self_1` and `self_2` contain equal values, FALSE if they differed.
         */
        equals(self_2: Defaults): boolean;
        /**
         * @returns The metadata version of this defaults object.
         */
        get_mdversion(): number;
        /**
         * @returns The last modified time represented as a 64-bit integer (such as 201807011200)
         */
        get_modified(): number;
        /**
         * @returns The name of the module to which these defaults apply.
         */
        get_module_name(): string;
        /**
         * @param modified The last modified time represented as a 64-bit integer (such as 201807011200)
         */
        set_modified(modified: number): void;
        /**
         * @param mdversion The version to upgrade to.
         * @returns A newly-allocated copy of `self` upgraded to the requested defaults version. NULL if the upgrade cannot be performed and sets `error` appropriately. This function does not modify `self`.
         */
        upgrade(mdversion: number): Defaults;
        /**
         * @returns TRUE if validation passed, FALSE and sets `error` appropriately if validation failed.
         */
        validate(): boolean;
    }

    namespace DefaultsV1 {
        // Signal signatures
        interface SignalSignatures extends Defaults.SignalSignatures {
            'notify::mdversion': (pspec: GObject.ParamSpec) => void;
            'notify::module-name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Defaults.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DefaultsV1 extends Defaults {
        static $gtype: GObject.GType<DefaultsV1>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DefaultsV1.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DefaultsV1.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](module_name: string): DefaultsV1;
        // Conflicted with Modulemd.Defaults.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DefaultsV1.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DefaultsV1.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DefaultsV1.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DefaultsV1.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DefaultsV1.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DefaultsV1.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add a profile that will be installed for this stream if none are explicitly
         * specified by the user. This function may be called any number of times for
         * the same stream and will deduplicate input.
         * @param stream_name The name of the module stream to which to add this default profile.
         * @param profile_name The name of the default profile to add.
         * @param intent The name of the system intent to add profile defaults to. If NULL, this sets the generic fallback profiles for the stream. System intents are deprecated and calls with this non-NULL argument will become void in the future.
         */
        add_default_profile_for_stream(stream_name: string, profile_name: string, intent?: string | null): void;
        /**
         * @param stream_name The name of the string to retrieve the default profiles for.
         * @param intent The name of the system intent for which to retrieve the profile defaults for this stream. System intents are deprecated and this argument will be ignored in the future.
         * @returns A sorted {@link GObject.Strv} list of unique profiles to be installed by default for this stream. NULL, if this stream_name is not present in the defaults.
         */
        get_default_profiles_for_stream(stream_name: string, intent?: string | null): string[];
        /**
         * @param intent The name of the system intent whose default stream will be retrieved. If left NULL or the specified intent has no different default, it will return the generic default stream for this module. System intents are deprecated and this argument will be ignored in the future.
         * @returns The name of the default stream for this module.
         */
        get_default_stream(intent?: string | null): string;
        /**
         * @param intent The name of the system intent whose stream profiles will be retrieved. If left NULL or the specified intent has no separate defaults for this module, it will return the generic stream profiles. System intents are deprecated and this argument will be ignored in the future.
         * @returns A sorted {@link GObject.Strv} list of unique stream names for which default profiles have been assigned.
         */
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

    namespace Dependencies {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Dependencies extends GObject.Object {
        static $gtype: GObject.GType<Dependencies>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Dependencies.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Dependencies.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Dependencies;

        // Signals

        /** @signal */
        connect<K extends keyof Dependencies.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Dependencies.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Dependencies.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Dependencies.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Dependencies.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Dependencies.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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
         * Remove all buildtime dependencies from this {@link Modulemd.Dependencies} object.
         */
        clear_buildtime_dependencies(): void;
        /**
         * Remove all runtime dependencies from this {@link Modulemd.Dependencies} object.
         */
        clear_runtime_dependencies(): void;
        /**
         * Create a copy of this {@link Modulemd.Dependencies} object.
         * @returns The copied {@link Modulemd.Dependencies} object.
         */
        copy(): Dependencies;
        /**
         * Check if `self_1` and `self_2` are equal objects.
         * @param self_2 A {@link Modulemd.Dependencies} object.
         * @returns TRUE, if the're equal. FALSE, otherwise.
         */
        equals(self_2: Dependencies): boolean;
        /**
         * @returns An ordered {@link GObject.Strv} list of module names of build-time dependencies.
         */
        get_buildtime_modules(): string[];
        /**
         * @param module The name of the module.
         * @returns An ordered {@link GObject.Strv} list of module streams associated with the specified module that are required at build-time.
         */
        get_buildtime_streams(module: string): string[] | null;
        /**
         * @returns An ordered {@link GObject.Strv} list of module names of run-time dependencies.
         */
        get_runtime_modules(): string[];
        /**
         * @param module The name of the module.
         * @returns An ordered {@link GObject.Strv} list of module streams associated with the specified module that are required at run-time.
         */
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

    namespace Module {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::module-name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            module_name: string;
            moduleName: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Module extends GObject.Object {
        static $gtype: GObject.GType<Module>;

        // Properties

        get module_name(): string;
        get moduleName(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Module.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Module.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Module.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Module.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Module.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Module.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Module.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Module.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Iterates through all {@link Modulemd.ModuleStream} entries in this
         * {@link Modulemd.Module} and removes any XMD sections that are present. This is
         * generally done to trim down the metadata to only the portions that are
         * useful to the package manager.
         */
        clear_xmds(): void;
        /**
         * @returns A deep copy of this {@link Modulemd.Module} object.
         */
        copy(): Module;
        /**
         * @returns A list of all available stream objects associated with this module. There may be multiple streams with the same name and different version and context. The order of items in this list is not guaranteed.
         */
        get_all_streams(): ModuleStream[];
        /**
         * @returns The defaults of this module or NULL if none.
         */
        get_defaults(): Defaults;
        /**
         * @returns The module name.
         */
        get_module_name(): string;
        /**
         * @param stream The stream to look up obsoletes for.
         * @param context The stream context to look up obsoletes for.
         * @returns The newest active obsoletes attached to this module with specified stream and context (when eol_date is not set or it already occured the obsoletes is active). If no context is passed it matches obsoletes without context.
         */
        get_newest_active_obsoletes(stream: string, context?: string | null): Obsoletes;
        /**
         * @returns A list of all obsoletes attached to this module. These are pointers to the internal memory objects and must not be modified or freed.
         */
        get_obsoletes(): Obsoletes[];
        /**
         * @param stream_name The name of the stream to retrieve.
         * @param version The version of the stream to retrieve.
         * @param context The context of the stream to retrieve.
         * @returns The requested stream object or NULL if no match was found.
         */
        get_stream_by_NSVC(stream_name: string, version: number, context: string): ModuleStream;
        /**
         * @param stream_name The name of the stream to retrieve.
         * @param version The version of the stream to retrieve. If set to zero, the version is not included in the search.
         * @param context The context of the stream to retrieve. If NULL, the context is not included in the search.
         * @param arch The processor architecture of the stream to retrieve. If NULL, the architecture is not included in the search.
         * @returns The requested stream object. NULL and sets `error` appropriately if the provided information is not sufficient to return exactly one {@link Modulemd.ModuleStream} result.
         */
        get_stream_by_NSVCA(
            stream_name: string,
            version: number,
            context?: string | null,
            arch?: string | null,
        ): ModuleStream;
        /**
         * @returns An ordered {@link GObject.Strv} list of stream names in this module.
         */
        get_stream_names(): string[];
        /**
         * @param stream_name The name of the stream to retrieve.
         * @returns A list of all available stream objects associated with a particular stream name, sorted highest to lowest by the version. The same version may have more than one associated context.
         */
        get_streams_by_stream_name(stream_name: string): ModuleStream[];
        /**
         * @param stream The stream to look up translations for.
         * @returns The set of translations attached to streams.
         */
        get_translation(stream: string): Translation;
        /**
         * Remove one or more {@link Modulemd.ModuleStream} objects from this {@link Modulemd.Module}
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
        /**
         * @param stream_name The name of the stream to retrieve.
         * @param version The version of the stream to retrieve. If set to zero, the version is not included in the search.
         * @param context The context of the stream to retrieve. If NULL, the context is not included in the search.
         * @param arch The processor architecture of the stream to retrieve. If NULL, the architecture is not included in the search.
         * @returns The list of stream objects matching the requested parameters. This function cannot fail, but it may return a zero-length list if no matches were found. The returned streams will be in a predictable order, sorted first by stream name, then by version (highest to lowest), then by context and finally by architecture.
         */
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
        /**
         * @param nsvca_pattern A [glob](https://www.mankier.com/3/glob) pattern to match against the NSVCA strings of the {@link Modulemd.ModuleStream} objects in this module. If NULL, this will match all NSVCAs.
         * @returns An array of {@link Modulemd.ModuleStream} objects whose NSVCA string matches the provided pattern. This function cannot fail, but may return an array of zero entries if the pattern did not match any streams. The returned streams will be in a predictable order, sorted first by module name, then stream name, then by version (highest first), then by context and finally by architecture.
         */
        search_streams_by_nsvca_glob(nsvca_pattern?: string | null): ModuleStream[];
        /**
         * @returns TRUE if validation passed, FALSE and sets `error` if failed.
         */
        validate(): boolean;
    }

    namespace ModuleIndex {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ModuleIndex extends GObject.Object {
        static $gtype: GObject.GType<ModuleIndex>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ModuleIndex.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ModuleIndex.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ModuleIndex;

        // Signals

        /** @signal */
        connect<K extends keyof ModuleIndex.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ModuleIndex.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ModuleIndex.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ModuleIndex.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ModuleIndex.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ModuleIndex.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param defaults The {@link Modulemd.Defaults} object to add to the index.
         * @returns TRUE if the {@link Modulemd.Defaults} was added successfully. If the defaults already existed in the index, it will be replaced by the new one. On failure, returns FALSE and sets `error` appropriately.
         */
        add_defaults(defaults: Defaults): boolean;
        /**
         * Add a {@link Modulemd.ModuleStream} to the {@link Modulemd.ModuleIndex}. While being added,
         * the {@link Modulemd.ModuleStream} will be upgraded to {@link Modulemd.ModuleStreamVersionEnum.LATEST}
         * to ensure that merges done with {@link Modulemd.ModuleIndexMerger} will always occur
         * between streams of the same version. If this upgrade cannot be performed,
         * the function will return `error` set appropriately.
         * @param stream The {@link Modulemd.ModuleStream} to add to the index. The stream added must have a module name and stream name set on it or it will be rejected.
         * @returns TRUE if the {@link Modulemd.ModuleStream} was added successfully. If the stream already existed in the index, it will be replaced by the new one. On failure, returns FALSE and sets `error` appropriately.
         */
        add_module_stream(stream: ModuleStream): boolean;
        /**
         * @param obsoletes The {@link Modulemd.Obsoletes} object to add to the index.
         * @returns TRUE if the {@link Modulemd.Obsoletes} was added successfully. If the obsoletes already existed in the index, it will be replaced by the new one. On failure, returns FALSE and sets `error` appropriately.
         */
        add_obsoletes(obsoletes: Obsoletes): boolean;
        /**
         * @param translation The {@link Modulemd.Translation} object to add to the index.
         * @returns TRUE if the {@link Modulemd.Translation} was added successfully. If the translation already existed in the index, it will be replaced by the new one. On failure, returns FALSE and sets `error` appropriately.
         */
        add_translation(translation: Translation): boolean;
        /**
         * Iterates through all {@link Modulemd.ModuleStream} entries in this
         * {@link Modulemd.ModuleIndex} and removes any XMD sections that are present. This is
         * generally done to trim down the metadata to only the portions that are
         * useful to the package manager.
         */
        clear_xmds(): void;
        /**
         * @returns A YAML representation of the index as a string. In the event of an error, sets `error` appropriately and returns NULL.
         */
        dump_to_string(): string;
        /**
         * Get a dictionary of all modules in the index that have a default stream.
         *
         * This function cannot fail, but may return an empty (non-NULL) {@link GLib.HashTable}.
         * @param intent The name of the system intent whose default stream will be retrieved. If left NULL or the specified intent has no separate default, it will return the generic default stream for this module. System intents are deprecated and this argument will be ignored in the future.
         * @returns A {@link GLib.HashTable} with the module name as the key and the default stream as the value for all modules with a default stream in the index. Modules without a default stream will not appear in this table.
         */
        get_default_streams(intent?: string | null): GLib.HashTable<string, string>;
        /**
         * @returns The metadata version of {@link Modulemd.Defaults} in use for this index.
         */
        get_defaults_mdversion(): DefaultsVersionEnum;
        /**
         * @param module_name The module name to look up in the index.
         * @returns The {@link Modulemd.Module} object matching the provided module name or NULL if the key was not present in the index.
         */
        get_module(module_name: string): Module;
        /**
         * @returns An ordered list of string keys in this index.
         */
        get_module_names(): string[];
        /**
         * @returns The metadata version of {@link Modulemd.ModuleStream} in use for this index.
         */
        get_stream_mdversion(): ModuleStreamVersionEnum;
        /**
         * Remove a module, including all of its streams, its defaults and its
         * translations from a {@link Modulemd.ModuleIndex}.
         * @param module_name The name of the module to remove from the index.
         * @returns TRUE if the module name was present in the index. FALSE if it was not.
         */
        remove_module(module_name: string): boolean;
        /**
         * All arguments to this method will be compared using
         * [fnmatch(3)](https://www.mankier.com/3/fnmatch).
         * @param nevra_pattern A [glob](https://www.mankier.com/3/glob) pattern to match against the NEVRA strings of the rpm artifacts in the {@link Modulemd.ModuleStream} objects in this module.
         * @returns The list of stream objects containing an RPM that matches the `nevra_pattern`. This function cannot fail, but it may return a zero-length list if no matches were found. The returned streams will be in a predictable order, sorted first by module name, then stream name, then by version (highest first), then by context and finally by architecture.
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
        /**
         * @param nsvca_pattern A [glob](https://www.mankier.com/3/glob) pattern to match against the NSVCA strings of the {@link Modulemd.ModuleStream} objects in this module. If NULL, this will match all NSVCAs.
         * @returns The list of stream objects matching all of the requested parameters. This function cannot fail, but it may return a zero-length list if no matches were found. The returned streams will be in a predictable order, sorted first by module name, then stream name, then by version (highest first), then by context and finally by architecture.
         */
        search_streams_by_nsvca_glob(nsvca_pattern?: string | null): ModuleStream[];
        /**
         * This function will open the directory at `path` and iterate through it,
         * adding any files with the suffix ".yaml" to `self`. If `overrides_path` is
         * non-`null`, it will also open any files with the suffix ".yaml" in that
         * location and import them, overriding any conflicts with the existing
         * defaults.
         *
         * Note: If you need detailed information about what failed and why, it is
         * better to implement the directory traversal yourself and use the
         * `modulemd_module_index_update_from_file()` function, as it will return the
         * failures information.
         * @param path The path to a directory containing defaults documents.
         * @param strict Whether the parser should return failure if it encounters an unknown mapping key or a conflict in module default streams.
         * @param overrides_path If non-`null`, the path to a directory containing defaults documents that should override those in `path`.
         * @returns `true` if all ".yaml" files in the directory were imported successfully (this includes if no ".yaml" files were present). `false` if one or more files could not be read successfully and sets `error` appropriately.
         */
        update_from_defaults_directory(path: string, strict: boolean, overrides_path?: string | null): boolean;
        /**
         * @param yaml_file A name of a YAML file containing the module metadata and other related information such as default streams.
         * @param strict Whether the parser should return failure if it encounters an unknown mapping key or if it should ignore it.
         * @returns `true` if the update was successful. Returns `false` and sets `failures` appropriately if any of the YAML subdocuments were invalid or sets `error` if there was a fatal parse error.
         */
        update_from_file(yaml_file: string, strict: boolean): [boolean, SubdocumentInfo[]];
        /**
         * @param yaml_string A YAML string containing the module metadata and other related information such as default streams.
         * @param strict Whether the parser should return failure if it encounters an unknown mapping key or if it should ignore it.
         * @returns `true` if the update was successful. Returns `false` and sets `failures` appropriately if any of the YAML subdocuments were invalid or sets `error` if there was a fatal parse error.
         */
        update_from_string(yaml_string: string, strict: boolean): [boolean, SubdocumentInfo[]];
        /**
         * Upgrades all {@link Modulemd.Defaults} objects in this index to `mdversion` if they
         * are not already at that version. An attempt to downgrade or an attempt to
         * upgrade beyond the latest supported version will report an error. In the
         * case of a failure to upgrade a particular {@link Modulemd.Defaults} object of the
         * index, an error will be reported and the index will be left in an undefined
         * state.
         * @param mdversion The {@link Modulemd.Defaults} metadata version to upgrade to.
         */
        upgrade_defaults(mdversion: DefaultsVersionEnum | null): boolean;
        /**
         * Upgrades all {@link Modulemd.ModuleStream} objects in this index to `mdversion` if
         * they are not already at that version.
         * @param mdversion The {@link Modulemd.ModuleStream} metadata version to upgrade to.
         */
        upgrade_streams(mdversion: ModuleStreamVersionEnum | null): boolean;
    }

    namespace ModuleIndexMerger {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ModuleIndexMerger extends GObject.Object {
        static $gtype: GObject.GType<ModuleIndexMerger>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ModuleIndexMerger.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ModuleIndexMerger.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ModuleIndexMerger;

        // Signals

        /** @signal */
        connect<K extends keyof ModuleIndexMerger.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ModuleIndexMerger.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ModuleIndexMerger.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ModuleIndexMerger.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ModuleIndexMerger.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ModuleIndexMerger.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Enqueues a {@link Modulemd.ModuleIndex} representing the parsed metadata from a
         * repository into this {@link Modulemd.ModuleIndexMerger} for merging and
         * deduplication of other repositories.
         *
         * Once all repositories have been added, call
         * `modulemd_module_index_merger_resolve()` to perform the merge.
         * @param index A {@link Modulemd.ModuleIndex}, usually constructed by reading the module metadata from a repository with `modulemd_module_index_update_from_file()`, `modulemd_module_index_update_from_string()`, or `modulemd_module_index_update_from_stream()`. This function take a reference on `index`, so the caller must not modify it while the {@link Modulemd.ModuleIndexMerger} is in use.
         * @param priority The priority of the repository that the entries in `index` came from. This is used to determine when `index` should override rather then merge. In most cases, this will be zero. See the Description section for the {@link Modulemd.ModuleIndexMerger} class for details on the merge logic. Acceptable values are in the range of 0-1000.
         */
        associate_index(index: ModuleIndex, priority: number): void;
        /**
         * Merges all added {@link Modulemd.ModuleIndex} objects according to their priority.
         * The logic of this merge is described in the Description of
         * {@link Modulemd.ModuleIndexMerger}.
         *
         * Once this function has been called, the internal state of the
         * {@link Modulemd.ModuleIndexMerger} is undefined. The only valid action on it after
         * that point is `g_object_unref()`.
         *
         * This function is equivalent to calling
         * `modulemd_module_index_merger_resolve_ext()` with
         * `strict_default_streams=FALSE`.
         * @returns A newly-allocated {@link Modulemd.ModuleIndex} object containing the merged results. If this function encounters an unresolvable merge conflict, it will return NULL and set `error` appropriately.
         */
        resolve(): ModuleIndex;
        /**
         * Merges all added {@link Modulemd.ModuleIndex} objects according to their priority.
         * The logic of this merge is described in the Description of
         * {@link Modulemd.ModuleIndexMerger}.
         *
         * Once this function has been called, the internal state of the
         * {@link Modulemd.ModuleIndexMerger} is undefined. The only valid action on it after
         * that point is `g_object_unref()`.
         * @param strict_default_streams If TRUE, merging two {@link Modulemd.Defaults} with conflicting default streams will raise an error. If FALSE, the module will have its default stream blocked.
         * @returns A newly-allocated {@link Modulemd.ModuleIndex} object containing the merged results. If this function encounters an unresolvable merge conflict, it will return NULL and set `error` appropriately.
         */
        resolve_ext(strict_default_streams: boolean): ModuleIndex;
    }

    namespace ModuleStream {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::arch': (pspec: GObject.ParamSpec) => void;
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::mdversion': (pspec: GObject.ParamSpec) => void;
            'notify::module-name': (pspec: GObject.ParamSpec) => void;
            'notify::stream-name': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
        }

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

    /**
     * @gir-type Class
     */
    abstract class ModuleStream extends GObject.Object {
        static $gtype: GObject.GType<ModuleStream>;

        // Properties

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ModuleStream.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ModuleStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](mdversion: number, module_name?: string | null, module_stream?: string | null): ModuleStream;

        // Signals

        /** @signal */
        connect<K extends keyof ModuleStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ModuleStream.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ModuleStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ModuleStream.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ModuleStream.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ModuleStream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Create a {@link Modulemd.ModuleStream} object from a YAML file.
         *
         * Note: This function also reads modulemd-packager v2 and v3 documents, which
         * are transparently returned as {@link Modulemd.ModuleStream} (V2) objects. However,
         * if a modulemd-packager v3 document ({@link Modulemd.PackagerV3}) is encountered and
         * it uses buildopts ({@link Modulemd.Buildopts}) in one or more build configurations,
         * only the buildopts present in the first listed configuration (if any) will be
         * applied to the returned {@link Modulemd.ModuleStreamV2} object.
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
         * Create a {@link Modulemd.ModuleStream} object from a YAML string.
         *
         * Note: This function also reads modulemd-packager v2 and v3 documents, which
         * are transparently returned as {@link Modulemd.ModuleStream} (V2) objects. However,
         * if a modulemd-packager v3 document ({@link Modulemd.PackagerV3}) is encountered and
         * it uses buildopts ({@link Modulemd.Buildopts}) in one or more build configurations,
         * only the buildopts present in the first listed configuration (if any) will be
         * applied to the returned {@link Modulemd.ModuleStreamV2} object.
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

        // Virtual methods

        /**
         * @param module_name A module name.
         * @param stream_name The stream of the module.
         * @virtual
         */
        vfunc_build_depends_on_stream(module_name: string, stream_name: string): boolean;
        /**
         * Copies a {@link Modulemd.ModuleStream}, optionally assigning it a new stream name in
         * the process.
         * @param module_name An optional new name for the module of the copied stream.
         * @param module_stream An optional new name for the copied stream.
         * @virtual
         */
        vfunc_copy(module_name?: string | null, module_stream?: string | null): ModuleStream;
        /**
         * @param module_name A module name.
         * @param stream_name The stream of the module.
         * @virtual
         */
        vfunc_depends_on_stream(module_name: string, stream_name: string): boolean;
        /**
         * Checks if `self_1` and `self_2` are identical objects.
         * @param self_2 A {@link Modulemd.ModuleStream} object.
         * @virtual
         */
        vfunc_equals(self_2: ModuleStream): boolean;
        /**
         * @virtual
         */
        vfunc_get_mdversion(): number;
        /**
         * Verifies that all stored values are internally consistent and that the
         * module is sufficiently-complete for emitting. This function is called
         * implicitly before attempting to emit the contents.
         * @virtual
         */
        vfunc_validate(): boolean;

        // Methods

        /**
         * @param module_name A module name.
         * @param stream_name The stream of the module.
         * @returns TRUE if any of the {@link Modulemd.Dependencies} objects associated with this module applies to the provided module name and stream in the build-time dependencies.
         */
        build_depends_on_stream(module_name: string, stream_name: string): boolean;
        /**
         * Copies a {@link Modulemd.ModuleStream}, optionally assigning it a new stream name in
         * the process.
         * @param module_name An optional new name for the module of the copied stream.
         * @param module_stream An optional new name for the copied stream.
         * @returns A newly-allocated {@link Modulemd.ModuleStream} object that is a complete copy of `self`, optionally with a new stream name.
         */
        copy(module_name?: string | null, module_stream?: string | null): ModuleStream;
        /**
         * @param module_name A module name.
         * @param stream_name The stream of the module.
         * @returns TRUE if any of the {@link Modulemd.Dependencies} objects associated with this module applies to the provided module name and stream in the runtime dependencies.
         */
        depends_on_stream(module_name: string, stream_name: string): boolean;
        /**
         * Checks if `self_1` and `self_2` are identical objects.
         * @param self_2 A {@link Modulemd.ModuleStream} object.
         * @returns TRUE, If both objects are equal. FALSE, otherwise.
         */
        equals(self_2: ModuleStream): boolean;
        /**
         * @returns The NSVCA of this module stream. The returned format is described [here](https://docs.fedoraproject.org/en-US/modularity/architecture/consuming/naming-policy/#_forms). NULL if module name or stream stream is unknown.
         */
        get_NSVCA(): string;
        /**
         * @returns Module architecture object. Indicates to which processor architecture this {@link Modulemd.ModuleStream} applies.
         */
        get_arch(): string;
        /**
         * @returns Module context flag. The context flag serves to distinguish module builds with the same name, stream and version and plays an important role in automatic module stream name expansion.
         */
        get_context(): string;
        /**
         * @returns The metadata version of this {@link Modulemd.ModuleStream}.
         */
        get_mdversion(): number;
        /**
         * @returns The name of the module.
         */
        get_module_name(): string;
        /**
         * Retrieves a representation of the module name, stream name, version and
         * context of this {@link Modulemd.ModuleStream} in the form
         * `module_name:stream_name:version:context`. Note that this excludes the
         * architecture of the module stream and as such is not guaranteed to be unique
         * within a repository.
         * @returns The NSVC (name:stream:version[:context]) of this module stream. NULL if module name or stream stream is unknown.
         */
        get_nsvc(): string;
        /**
         * @returns The name of this stream.
         */
        get_stream_name(): string;
        /**
         * @returns The version of this {@link Modulemd.ModuleStream}.
         */
        get_version(): number;
        /**
         * @param arch Module architecture. Indicates to which processor architecture this {@link Modulemd.ModuleStream} applies.
         */
        set_arch(arch?: string | null): void;
        /**
         * @param context Module context flag. The context flag serves to distinguish module builds with the same name, stream and version and plays an important role in automatic module stream name expansion.
         */
        set_context(context?: string | null): void;
        /**
         * @param version The version of this {@link Modulemd.ModuleStream}.
         */
        set_version(version: number): void;
        /**
         * Return an upgraded copy of this object. Does not modify the original.
         * @param mdversion The metadata version to upgrade to. If zero, upgrades to the highest-supported version.
         * @returns A newly-allocated {@link Modulemd.ModuleStream} copy of this object upgraded to the requested version. Returns NULL and sets `error` appropriately if the upgrade could not be completed automatically.
         */
        upgrade(mdversion: number): ModuleStream;
        /**
         * Does not modify the original {@link Modulemd.ModuleStream} object, `from`.
         * @param mdversion The metadata version to upgrade to. If zero, upgrades to the highest-supported version.
         * @returns A newly-allocated {@link Modulemd.Module} containing a copy of this object upgraded to the requested version, possibly with multiple streams. Returns NULL and sets `error` appropriately if the upgrade could not be completed automatically.
         */
        upgrade_ext(mdversion: number): Module;
        /**
         * Verifies that all stored values are internally consistent and that the
         * module is sufficiently-complete for emitting. This function is called
         * implicitly before attempting to emit the contents.
         * @returns TRUE if the {@link Modulemd.ModuleStream} passed validation. FALSE and sets `error` appropriately if validation fails.
         */
        validate(): boolean;
    }

    namespace ModuleStreamV1 {
        // Signal signatures
        interface SignalSignatures extends ModuleStream.SignalSignatures {
            'notify::arch': (pspec: GObject.ParamSpec) => void;
            'notify::buildopts': (pspec: GObject.ParamSpec) => void;
            'notify::community': (pspec: GObject.ParamSpec) => void;
            'notify::documentation': (pspec: GObject.ParamSpec) => void;
            'notify::tracker': (pspec: GObject.ParamSpec) => void;
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::mdversion': (pspec: GObject.ParamSpec) => void;
            'notify::module-name': (pspec: GObject.ParamSpec) => void;
            'notify::stream-name': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends ModuleStream.ConstructorProps {
            arch: string;
            buildopts: Buildopts;
            community: string;
            documentation: string;
            tracker: string;
        }
    }

    /**
     * @gir-type Class
     */
    class ModuleStreamV1 extends ModuleStream {
        static $gtype: GObject.GType<ModuleStreamV1>;

        // Properties

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ModuleStreamV1.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ModuleStreamV1.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](module_name?: string | null, module_stream?: string | null): ModuleStreamV1;
        // Conflicted with Modulemd.ModuleStream.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof ModuleStreamV1.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ModuleStreamV1.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ModuleStreamV1.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ModuleStreamV1.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ModuleStreamV1.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ModuleStreamV1.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add a build-time dependency for this module.
         * @param module_name The name of the module to depend on.
         * @param module_stream The name of the module stream to depend on.
         */
        add_buildtime_requirement(module_name: string, module_stream: string): void;
        /**
         * Add a component definition to the module.
         * @param component A {@link Modulemd.Component} to be added to this module stream.
         */
        add_component(component: Component): void;
        /**
         * @param license A license under which one or more of the components of this module stream are distributed.
         */
        add_content_license(license: string): void;
        /**
         * @param license A license under which this module stream is distributed.
         */
        add_module_license(license: string): void;
        /**
         * Adds a profile definition to this module stream.
         * @param profile A {@link Modulemd.Profile} for this module stream.
         */
        add_profile(profile: Profile): void;
        /**
         * @param rpm The name of a binary RPM present in this module that is considered stable public API.
         */
        add_rpm_api(rpm: string): void;
        /**
         * @param nevr The NEVR of a binary RPM present in this module stream.
         */
        add_rpm_artifact(nevr: string): void;
        /**
         * @param rpm The name of a binary RPM to filter out of this module stream.
         */
        add_rpm_filter(rpm: string): void;
        /**
         * Add a runtime dependency for this module.
         * @param module_name The name of the module to depend on.
         * @param module_stream The name of the module stream to depend on.
         */
        add_runtime_requirement(module_name: string, module_stream: string): void;
        /**
         * Adds a servicelevel definition to this module stream.
         * @param servicelevel A {@link Modulemd.ServiceLevel} for this module stream.
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
        /**
         * @returns The module artifact architecture.
         */
        get_arch(): string;
        /**
         * @returns The build options for this module's components.
         */
        get_buildopts(): Buildopts;
        /**
         * @returns An ordered {@link GObject.Strv} list of module names that this module depends on at build-time.
         */
        get_buildtime_modules(): string[];
        /**
         * @param module_name The name of the module this module depends on.
         * @returns The name of the stream matching this module name in the build-time dependencies.
         */
        get_buildtime_requirement_stream(module_name: string): string;
        /**
         * @returns The module community website address.
         */
        get_community(): string;
        /**
         * @returns An ordered {@link GObject.Strv} list of licenses under which one or more components of this module stream are released.
         */
        get_content_licenses(): string[];
        /**
         * @param locale The name of the locale to use when translating the string. If NULL, it will determine the locale with a system call to `setlocale(LC_MESSAGES, NULL)` and return that. If the caller wants the untranslated string, they should pass `"C"` for the locale.
         * @returns The module description, translated to the requested locale if available. Translation information is managed by the {@link Modulemd.Translation} and {@link Modulemd.TranslationEntry} objects.
         */
        get_description(locale?: string | null): string;
        /**
         * @returns The module documentation website address.
         */
        get_documentation(): string;
        /**
         * Compatibility function with early iterations of modulemd v1. This function
         * is a wrapper for `modulemd_module_stream_v1_get_servicelevel("rawhide")`.
         * @returns The end-of-life date for the "rawhide" service level.
         */
        get_eol(): GLib.Date;
        /**
         * @param component_name The name of the component to retrieve.
         * @returns The module component matching `component_name` if it exists, else NULL.
         */
        get_module_component(component_name: string): ComponentModule;
        /**
         * @returns An ordered {@link GObject.Strv} list of module component names included in this stream.
         */
        get_module_component_names(): string[];
        /**
         * @returns An ordered {@link GObject.Strv} list of licenses under which this module stream is released.
         */
        get_module_licenses(): string[];
        /**
         * @param profile_name The name of a profile to retrieve.
         * @returns The requested profile definition if present in the module stream. NULL otherwise.
         */
        get_profile(profile_name: string): Profile;
        /**
         * @returns An ordered {@link GObject.Strv} list of profile names associated with this module stream.
         */
        get_profile_names(): string[];
        /**
         * @returns An ordered {@link GObject.Strv} list of binary RPM names that forms the public API of this module stream.
         */
        get_rpm_api(): string[];
        /**
         * @returns An ordered {@link GObject.Strv} list of RPM NEVRs are included in this module stream.
         */
        get_rpm_artifacts(): string[];
        /**
         * @param component_name The name of the component to retrieve.
         * @returns The RPM component matching `component_name` if it exists, else NULL.
         */
        get_rpm_component(component_name: string): ComponentRpm;
        /**
         * @returns An ordered {@link GObject.Strv} list of RPM component names included in this stream.
         */
        get_rpm_component_names(): string[];
        /**
         * @returns An ordered {@link GObject.Strv} list of binary RPM names that are filtered out of this module stream.
         */
        get_rpm_filters(): string[];
        /**
         * @returns An ordered {@link GObject.Strv} list of module names that this module depends on at runtime.
         */
        get_runtime_modules(): string[];
        /**
         * @param module_name
         */
        get_runtime_requirement_stream(module_name: string): string;
        /**
         * @param servicelevel_name The name of a servicelevel to retrieve.
         * @returns The requested servicelevel definition if present in the module stream. NULL otherwise.
         */
        get_servicelevel(servicelevel_name: string): ServiceLevel;
        /**
         * @returns An ordered {@link GObject.Strv} list of servicelevel names associated with this module stream.
         */
        get_servicelevel_names(): string[];
        /**
         * @param locale The name of the locale to use when translating the string. If NULL, it will determine the locale with a system call to `setlocale(LC_MESSAGES, NULL)` and return that. If the caller wants the untranslated string, they should pass `"C"` for the locale.
         * @returns The module summary, translated to the requested locale if available. Translation information is managed by the {@link Modulemd.Translation} and {@link Modulemd.TranslationEntry} objects.
         */
        get_summary(locale?: string | null): string;
        /**
         * @returns The module bug tracker website address.
         */
        get_tracker(): string;
        /**
         * @returns The extensible metadata block as a {@link GLib.Variant}.
         */
        get_xmd(): GLib.Variant;
        /**
         * Remove a build-time dependency for this module.
         * @param module_name The name of the module to be removed.
         */
        remove_buildtime_requirement(module_name: string): void;
        /**
         * @param license A license to remove from the list. Has no effect if the license is not present.
         */
        remove_content_license(license: string): void;
        /**
         * Remove a component from this module stream.
         * @param component_name The name of the component to remove from the module stream.
         */
        remove_module_component(component_name: string): void;
        /**
         * @param license A license to remove from the list. Has no effect if the license is not present.
         */
        remove_module_license(license: string): void;
        /**
         * @param rpm A binary RPM name to remove from the list of stable public API.
         */
        remove_rpm_api(rpm: string): void;
        /**
         * @param nevr An RPM NEVR to remove from the list of artifacts.
         */
        remove_rpm_artifact(nevr: string): void;
        /**
         * Remove a component from this module stream.
         * @param component_name The name of the component to remove from the module stream.
         */
        remove_rpm_component(component_name: string): void;
        /**
         * @param rpm A binary RPM name to remove from the filter list.
         */
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
        /**
         * @param args
         */
        // Conflicted with Modulemd.ModuleStream.set_arch
        set_arch(...args: never[]): any;
        /**
         * Set build options for this module's components.
         * @param buildopts A {@link Modulemd.Buildopts} object describing build options that apply globally to components in this module.
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
         * This function assumes ownership of the XMD {@link GLib.Variant} and thus should not be
         * freed by the caller.
         * @param xmd A {@link GLib.Variant} representing arbitrary YAML.
         */
        set_xmd(xmd: GLib.Variant): void;
    }

    namespace ModuleStreamV2 {
        // Signal signatures
        interface SignalSignatures extends ModuleStream.SignalSignatures {
            'notify::arch': (pspec: GObject.ParamSpec) => void;
            'notify::buildopts': (pspec: GObject.ParamSpec) => void;
            'notify::community': (pspec: GObject.ParamSpec) => void;
            'notify::documentation': (pspec: GObject.ParamSpec) => void;
            'notify::static-context': (pspec: GObject.ParamSpec) => void;
            'notify::tracker': (pspec: GObject.ParamSpec) => void;
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::mdversion': (pspec: GObject.ParamSpec) => void;
            'notify::module-name': (pspec: GObject.ParamSpec) => void;
            'notify::stream-name': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
        }

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

    /**
     * @gir-type Class
     */
    class ModuleStreamV2 extends ModuleStream {
        static $gtype: GObject.GType<ModuleStreamV2>;

        // Properties

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ModuleStreamV2.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ModuleStreamV2.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](module_name?: string | null, module_stream?: string | null): ModuleStreamV2;
        // Conflicted with Modulemd.ModuleStream.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof ModuleStreamV2.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ModuleStreamV2.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ModuleStreamV2.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ModuleStreamV2.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ModuleStreamV2.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ModuleStreamV2.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add a component definition to the module.
         * @param component A {@link Modulemd.Component} to be added to this module stream.
         */
        add_component(component: Component): void;
        /**
         * @param license A license under which one or more of the components of this module stream are distributed.
         */
        add_content_license(license: string): void;
        /**
         * Add a binary package name to a list of demodularized packages.
         * @param rpm A name of a binary RPM package to become non-modular.
         */
        add_demodularized_rpm(rpm: string): void;
        /**
         * Add a {@link Modulemd.Dependencies} object to the list of dependencies for this
         * module stream.
         * @param deps A {@link Modulemd.Dependencies} object to add to the list for this module stream.
         */
        add_dependencies(deps: Dependencies): void;
        /**
         * @param license A license under which this module stream is distributed.
         */
        add_module_license(license: string): void;
        /**
         * Adds a profile definition to this module stream.
         * @param profile A {@link Modulemd.Profile} for this module stream.
         */
        add_profile(profile: Profile): void;
        /**
         * @param rpm The name of a binary RPM present in this module that is considered stable public API.
         */
        add_rpm_api(rpm: string): void;
        /**
         * @param nevr The NEVR of a binary RPM present in this module stream.
         */
        add_rpm_artifact(nevr: string): void;
        /**
         * @param rpm The name of a binary RPM to filter out of this module stream.
         */
        add_rpm_filter(rpm: string): void;
        /**
         * Adds a servicelevel definition to this module stream.
         * @param servicelevel A {@link Modulemd.ServiceLevel} for this module stream.
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
         * Empties the list of dependencies for this {@link Modulemd.ModuleStream}.
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
         * Removes all XMD data from this {@link Modulemd.ModuleStreamV2}
         */
        clear_xmd(): void;
        /**
         * @returns The module artifact architecture.
         */
        get_arch(): string;
        /**
         * @returns The build options for this module's components.
         */
        get_buildopts(): Buildopts;
        /**
         * @returns The module community website address.
         */
        get_community(): string;
        /**
         * @returns An ordered {@link GObject.Strv} list of licenses under which one or more components of this module stream are released.
         */
        get_content_licenses(): string[];
        /**
         * @returns An ordered {@link GObject.Strv} list of binary RPM package names that became non-modular.
         */
        get_demodularized_rpms(): string[];
        /**
         * Return the list of {@link Modulemd.Dependencies} objects as a {@link GLib.PtrArray}.
         * @returns A list of all {@link Modulemd.Dependencies} objects associated with this module stream.
         */
        get_dependencies(): Dependencies[];
        /**
         * @param locale The name of the locale to use when translating the string. If NULL, it will determine the locale with a system call to `setlocale(LC_MESSAGES, NULL)` and return that. If the caller wants the untranslated string, they should pass `"C"` for the locale.
         * @returns The module description, translated to the requested locale if available. Translation information is managed by the {@link Modulemd.Translation} and {@link Modulemd.TranslationEntry} objects.
         */
        get_description(locale?: string | null): string;
        /**
         * @returns The module documentation website address.
         */
        get_documentation(): string;
        /**
         * @param component_name The name of the component to retrieve.
         * @returns The module component matching `component_name` if it exists, else NULL.
         */
        get_module_component(component_name: string): ComponentModule;
        /**
         * @returns An ordered {@link GObject.Strv} list of module component names included in this stream.
         */
        get_module_component_names(): string[];
        /**
         * @returns An ordered {@link GObject.Strv} list of licenses under which this module stream is released.
         */
        get_module_licenses(): string[];
        /**
         * @returns The {@link Modulemd.Obsoletes} information associated with this object. If the associated obsoletes has reset attribute set, this function doesn't return it. From outside obsoletes with reset looks like there is no obsoletes set for this stream. Every obsoletes (even with reset) can be accessed from the streams module.
         */
        get_obsoletes_resolved(): Obsoletes;
        /**
         * @param profile_name The name of a profile to retrieve.
         * @returns The requested profile definition if present in the module stream. NULL otherwise.
         */
        get_profile(profile_name: string): Profile;
        /**
         * @returns An ordered {@link GObject.Strv} list of profile names associated with this module stream.
         */
        get_profile_names(): string[];
        /**
         * @returns An ordered {@link GObject.Strv} list of binary RPM names that form the public API of this module stream.
         */
        get_rpm_api(): string[];
        /**
         * @param digest A string representing the digest algorithm used to generate the `checksum`.
         * @param checksum An RPM artifact checksum.
         * @returns The {@link Modulemd.RpmMapEntry} object associated with the provided `checksum` generated by the provided `digest`.
         */
        get_rpm_artifact_map_entry(digest: string, checksum: string): RpmMapEntry;
        /**
         * @returns An ordered {@link GObject.Strv} list of RPM NEVRs that are included in this module stream.
         */
        get_rpm_artifacts(): string[];
        /**
         * @param component_name The name of the component to retrieve.
         * @returns The RPM component matching `component_name` if it exists, else NULL.
         */
        get_rpm_component(component_name: string): ComponentRpm;
        /**
         * @returns An ordered {@link GObject.Strv} list of RPM component names included in this stream.
         */
        get_rpm_component_names(): string[];
        /**
         * @returns An ordered {@link GObject.Strv} list of binary RPM names that are filtered out of this module stream.
         */
        get_rpm_filters(): string[];
        /**
         * @param servicelevel_name The name of a servicelevel to retrieve.
         * @returns The requested servicelevel definition if present in the module stream. NULL otherwise.
         */
        get_servicelevel(servicelevel_name: string): ServiceLevel;
        /**
         * @returns An ordered {@link GObject.Strv} list of servicelevel names associated with this module stream.
         */
        get_servicelevel_names(): string[];
        /**
         * @param locale The name of the locale to use when translating the string. If NULL, it will determine the locale with a system call to `setlocale(LC_MESSAGES, NULL)` and return that. If the caller wants the untranslated string, they should pass `"C"` for the locale.
         * @returns The module summary, translated to the requested locale if available. Translation information is managed by the {@link Modulemd.Translation} and {@link Modulemd.TranslationEntry} objects.
         */
        get_summary(locale?: string | null): string;
        /**
         * @returns The module bug tracker website address.
         */
        get_tracker(): string;
        /**
         * @returns The extensible metadata block as a {@link GLib.Variant}.
         */
        get_xmd(): GLib.Variant;
        /**
         * @returns Whether the `context` attribute should be treated as static.
         */
        is_static_context(): boolean;
        /**
         * @param license A license to remove from the list. Has no effect if the license is not present.
         */
        remove_content_license(license: string): void;
        /**
         * Remove a binary package name from a list of demodularized packages.
         * @param rpm A binary RPM name to remove from a demodularized list.
         */
        remove_demodularized_rpm(rpm: string): void;
        /**
         * Removes all entries matching `deps` from the array of {@link Modulemd.Dependencies}
         * objects.
         * @param deps A {@link Modulemd.Dependencies} object to remove from the list for this module stream.
         */
        remove_dependencies(deps: Dependencies): void;
        /**
         * Remove a component from this module stream.
         * @param component_name The name of the component to remove from the module stream.
         */
        remove_module_component(component_name: string): void;
        /**
         * @param license A license to remove from the list. Has no effect if the license is not present.
         */
        remove_module_license(license: string): void;
        /**
         * @param rpm A binary RPM name to remove from the list of stable public API.
         */
        remove_rpm_api(rpm: string): void;
        /**
         * @param nevr An RPM NEVR to remove from the list of artifacts.
         */
        remove_rpm_artifact(nevr: string): void;
        /**
         * Remove a component from this module stream.
         * @param component_name The name of the component to remove from the module stream.
         */
        remove_rpm_component(component_name: string): void;
        /**
         * @param rpm A binary RPM name to remove from the filter list.
         */
        remove_rpm_filter(rpm: string): void;
        /**
         * @param profile_pattern A globbing pattern to locate one or more profiles in this {@link Modulemd.ModuleStreamV2} object. The names will be compared using [fnmatch(3)](https://www.mankier.com/3/fnmatch).
         * @returns The list of {@link Modulemd.Profile} objects whose name matched `profile_pattern`. This function cannot fail, but it may return a zero-length list if no matches were found. The returned profiles will be sorted alphabetically by profile name.
         */
        search_profiles(profile_pattern?: string | null): Profile[];
        /**
         * Set the module artifact architecture.
         * @param arch The module artifact architecture.
         */
        set_arch(arch: string): void;
        /**
         * @param args
         */
        // Conflicted with Modulemd.ModuleStream.set_arch
        set_arch(...args: never[]): any;
        /**
         * Set build options for this module's components.
         * @param buildopts A {@link Modulemd.Buildopts} object describing build options that apply globally to components in this module.
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
         * @param entry The RPM map entry to save to the stream.
         * @param digest A string representing the digest algorithm used to generate the `checksum`.
         * @param checksum An RPM artifact checksum.
         */
        set_rpm_artifact_map_entry(entry: RpmMapEntry, digest: string, checksum: string): void;
        /**
         * Marks this {@link Modulemd.ModuleStreamV2} to indicate to dependency solvers that
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
         * This function assumes ownership of the XMD {@link GLib.Variant} and thus should not be
         * freed by the caller.
         * @param xmd A {@link GLib.Variant} representing arbitrary YAML.
         */
        set_xmd(xmd: GLib.Variant): void;
        /**
         * Marks this {@link Modulemd.ModuleStreamV2} to indicate to dependency solvers that
         * they must ignore the `context` attribute as a uniqueness element.
         */
        unset_static_context(): void;
    }

    namespace Obsoletes {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::eol-date': (pspec: GObject.ParamSpec) => void;
            'notify::mdversion': (pspec: GObject.ParamSpec) => void;
            'notify::message': (pspec: GObject.ParamSpec) => void;
            'notify::modified': (pspec: GObject.ParamSpec) => void;
            'notify::module-context': (pspec: GObject.ParamSpec) => void;
            'notify::module-name': (pspec: GObject.ParamSpec) => void;
            'notify::module-stream': (pspec: GObject.ParamSpec) => void;
            'notify::obsoleted-by-module-name': (pspec: GObject.ParamSpec) => void;
            'notify::obsoleted-by-module-stream': (pspec: GObject.ParamSpec) => void;
            'notify::override-previous': (pspec: GObject.ParamSpec) => void;
        }

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

    /**
     * @gir-type Class
     */
    class Obsoletes extends GObject.Object {
        static $gtype: GObject.GType<Obsoletes>;

        // Properties

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Obsoletes.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Obsoletes.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            mdversion: number,
            modified: number,
            module_name: string,
            module_stream: string,
            message: string,
        ): Obsoletes;

        // Signals

        /** @signal */
        connect<K extends keyof Obsoletes.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Obsoletes.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Obsoletes.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Obsoletes.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Obsoletes.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Obsoletes.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Create a copy of this {@link Modulemd.Obsoletes} object.
         * @returns The copied {@link Modulemd.Obsoletes} object.
         */
        copy(): Obsoletes;
        /**
         * @returns A date represented as a 64-bit integer (such as 201807011200).
         */
        get_eol_date(): number;
        /**
         * @returns The message associated with this {@link Modulemd.Obsoletes} object
         */
        get_message(): string;
        /**
         * @returns The last modified time of this {@link Modulemd.Obsoletes} object represented as a 64-bit integer (such as 201807011200).
         */
        get_modified(): number;
        /**
         * @returns The context name to which this {@link Modulemd.Obsoletes} object applies.
         */
        get_module_context(): string;
        /**
         * @returns The module name of obsoleting stream.
         */
        get_obsoleted_by_module_name(): string;
        /**
         * @returns The module stream of obsoleting stream.
         */
        get_obsoleted_by_module_stream(): string;
        /**
         * @returns Whether this {@link Modulemd.Obsoletes} object cancels/resets all previously specified obsoletes.
         */
        get_reset(): boolean;
        /**
         * @returns If this {@link Modulemd.Obsoletes} object has eol_date set and the date has not occured yet it returns false otherwise it returns true. (When eol_date is not set or it already occured the obsoletes is active.)
         */
        is_active(): boolean;
        /**
         * @param eol_date The end-of-life date for this stream. If set to zero, the stream is EOLed immediately.
         */
        set_eol_date(eol_date: number): void;
        /**
         * @param modified The last modified time represented as a 64-bit integer (such as 201807011200).
         */
        set_modified(modified: number): void;
        /**
         * @param module_context The name of the module context to which this obsoletes applies.
         */
        set_module_context(module_context?: string | null): void;
        /**
         * Sets both obsoleted by module name and stream because having one without
         * the other is invalid.
         * @param obsoleted_by_module_name The module name of obsoleting stream.
         * @param obsoleted_by_module_stream The module stream of obsoleting stream.
         */
        set_obsoleted_by(obsoleted_by_module_name: string, obsoleted_by_module_stream: string): void;
        /**
         * Sets the reset attribute on {@link Modulemd.Obsoletes} object. With this boolean attribute set the
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

    namespace PackagerV3 {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class PackagerV3 extends GObject.Object {
        static $gtype: GObject.GType<PackagerV3>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PackagerV3.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PackagerV3.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PackagerV3;

        // Signals

        /** @signal */
        connect<K extends keyof PackagerV3.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PackagerV3.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PackagerV3.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PackagerV3.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PackagerV3.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PackagerV3.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param buildconfig A {@link Modulemd.BuildConfig} to include.
         */
        add_build_config(buildconfig: BuildConfig): void;
        /**
         * Add a component definition to the module.
         * @param component A {@link Modulemd.Component} to be added to this module stream.
         */
        add_component(component: Component): void;
        /**
         * Add a binary package name to a list of demodularized packages.
         * @param rpm A name of a binary RPM package to become non-modular.
         */
        add_demodularized_rpm(rpm: string): void;
        /**
         * @param license A license under which this module stream is distributed.
         */
        add_module_license(license: string): void;
        /**
         * Adds a {@link Modulemd.Profile} to this {@link Modulemd.PackagerV3} object.
         * @param profile The new {@link Modulemd.Profile} to add.
         */
        add_profile(profile: Profile): void;
        /**
         * @param rpm The name of a binary RPM present in this module that is considered stable public API.
         */
        add_rpm_api(rpm: string): void;
        /**
         * @param rpm The name of a binary RPM to filter out of this module stream.
         */
        add_rpm_filter(rpm: string): void;
        /**
         * Remove all added {@link Modulemd.BuildConfig} objects from `self`
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
         * Removes all {@link Modulemd.Profile} objects from this {@link Modulemd.PackagerV3} object.
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
        /**
         * @returns A newly-allocated {@link Modulemd.ModuleIndex} object containing a set of one or more {@link Modulemd.ModuleStreamV2} objects and possibly a {@link Modulemd.Defaults} object corresponding to the {@link Modulemd.PackagerV3} object `self`. NULL if there was an error doing the mapping and sets `error` appropriately. One of the errors is missing a module name or a stream name if a default profile is present.
         */
        convert_to_index(): ModuleIndex;
        /**
         * @returns A newly-allocated deep-copy of this {@link Modulemd.PackagerV3} object. This object must be freed with `g_object_unref()`.
         */
        copy(): PackagerV3;
        /**
         * @param context The context of the {@link Modulemd.BuildConfig} to retrieve from `self`.
         * @returns A {@link Modulemd.BuildConfig} with the provided `context` or NULL if it was not present.
         */
        get_build_config(context: string): BuildConfig;
        /**
         * @returns A list of contexts associated with the build configurations.
         */
        get_build_config_contexts_as_strv(): string[];
        /**
         * @returns The module community website address.
         */
        get_community(): string;
        /**
         * @returns An ordered {@link GObject.Strv} list of binary RPM package names that became non-modular.
         */
        get_demodularized_rpms(): string[];
        /**
         * @returns The long description of the module.
         */
        get_description(): string;
        /**
         * @returns The module documentation website address.
         */
        get_documentation(): string;
        /**
         * @returns The metadata version of this {@link Modulemd.PackagerV3}.
         */
        get_mdversion(): number;
        /**
         * @param component_name The name of the component to retrieve.
         * @returns The module component matching `component_name` if it exists, else NULL.
         */
        get_module_component(component_name: string): ComponentModule;
        /**
         * @returns An ordered {@link GObject.Strv} list of module component names included in this stream.
         */
        get_module_component_names(): string[];
        /**
         * @returns A {@link GObject.Strv} of module licenses associated with this module stream.
         */
        get_module_licenses_as_strv(): string[];
        /**
         * @returns The module name.
         */
        get_module_name(): string;
        /**
         * @param profile_name The name of a profile to retrieve.
         * @returns The requested profile definition if present in the {@link Modulemd.PackagerV3} object. NULL otherwise.
         */
        get_profile(profile_name: string): Profile;
        /**
         * @returns An ordered {@link GObject.Strv} list of profile names associated with this {@link Modulemd.PackagerV3} object.
         */
        get_profile_names_as_strv(): string[];
        /**
         * @returns An ordered {@link GObject.Strv} list of binary RPM names that form the public API of this module stream.
         */
        get_rpm_api_as_strv(): string[];
        /**
         * @param component_name The name of the component to retrieve.
         * @returns The RPM component matching `component_name` if it exists, else NULL.
         */
        get_rpm_component(component_name: string): ComponentRpm;
        /**
         * @returns An ordered {@link GObject.Strv} list of RPM component names included in this stream.
         */
        get_rpm_component_names(): string[];
        /**
         * @returns An ordered {@link GObject.Strv} list of binary RPM names that are filtered out of this module stream.
         */
        get_rpm_filters_as_strv(): string[];
        /**
         * @returns The module stream name.
         */
        get_stream_name(): string;
        /**
         * @returns The short description of the module.
         */
        get_summary(): string;
        /**
         * @returns The module bug tracker website address.
         */
        get_tracker(): string;
        /**
         * @returns The extensible metadata block as a {@link GLib.Variant}.
         */
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
        /**
         * @param license A license to remove from the list. Has no effect if the license is not present.
         */
        remove_module_license(license: string): void;
        /**
         * @param rpm A binary RPM name to remove from the list of stable public API.
         */
        remove_rpm_api(rpm: string): void;
        /**
         * Remove a component from this module stream.
         * @param component_name The name of the component to remove from the module stream.
         */
        remove_rpm_component(component_name: string): void;
        /**
         * @param rpm A binary RPM name to remove from the filter list.
         */
        remove_rpm_filter(rpm: string): void;
        /**
         * Any existing demodularized binary RPM package names associated with module
         * stream `self` are removed and replaced by `set`.
         * @param set A {@link GLib.HashTable} set of names of binary RPM packages to demodularize.
         */
        replace_demodularized_rpms(set: { [key: string]: any } | GLib.HashTable<any, any>): void;
        /**
         * Any existing API RPMs associated with module stream `self` are removed and
         * replaced by `set`.
         * @param set A {@link GLib.HashTable} set of binary RPMs present in this module stream that is considered stable public API.
         */
        replace_rpm_api(set: { [key: string]: any } | GLib.HashTable<any, any>): void;
        /**
         * Any existing filtered binary RPM names associated with module stream `self`
         * are removed and replaced by `set`.
         * @param set A {@link GLib.HashTable} set of names of binary RPMs to filter out of this module stream.
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
         * Sets the module name that this {@link Modulemd.PackagerV3} object references.
         * @param module_name The name of the module.
         */
        set_module_name(module_name: string): void;
        /**
         * Sets the stream name that this {@link Modulemd.PackagerV3} object references.
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
         * This function assumes ownership of the XMD {@link GLib.Variant} and thus should not be
         * freed by the caller.
         * @param xmd A {@link GLib.Variant} representing arbitrary YAML.
         */
        set_xmd(xmd: GLib.Variant): void;
    }

    namespace Profile {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Profile extends GObject.Object {
        static $gtype: GObject.GType<Profile>;

        // Properties

        get name(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Profile.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Profile.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string): Profile;

        // Signals

        /** @signal */
        connect<K extends keyof Profile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Profile.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Profile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Profile.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Profile.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Profile.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param rpm The name of a binary RPM that should be installed when this profile is selected for installation.
         */
        add_rpm(rpm: string): void;
        /**
         * Remove all RPMs from this profile.
         */
        clear_rpms(): void;
        /**
         * Create a copy of this {@link Modulemd.Profile} object.
         * @returns The copied {@link Modulemd.Profile} object.
         */
        copy(): Profile;
        /**
         * @param self_2 A {@link Modulemd.Profile} object.
         * @returns TRUE, if all elements of `self_1` and `self_2` are equal. FALSE, otherwise.
         */
        equals(self_2: Profile): boolean;
        /**
         * @param locale The name of the locale to use when translating the string. If NULL, it will determine the locale with a system call to `setlocale(LC_MESSAGES, NULL)` and return that. If the caller wants the untranslated string, they should pass `"C"` for the locale.
         * @returns The description of this profile translated into the language specified by the locale if it is available, otherwise it returns the C.UTF-8 original. Translation information is managed by the {@link Modulemd.Translation} and {@link Modulemd.TranslationEntry} objects.
         */
        get_description(locale?: string | null): string;
        /**
         * @returns The name of this profile.
         */
        get_name(): string;
        /**
         * @returns An ordered {@link GObject.Strv} list of binary RPMS that would be installed when this profile is selected for installation.
         */
        get_rpms(): string[];
        /**
         * @returns TRUE if this profile is a default for the associated stream. FALSE otherwise.
         */
        is_default(): boolean;
        /**
         * @param rpm The name of a binary RPM to remove from this profile.
         */
        remove_rpm(rpm: string): void;
        /**
         * Calling this function indicates that this profile should be considered one
         * of the default profiles for the associated stream.
         */
        set_default(): void;
        /**
         * @param description The untranslated description of this profile.
         */
        set_description(description?: string | null): void;
        /**
         * Calling this function indicates that this profile should not be considered
         * one of the default profiles for this stream. This is the normal state of
         * a {@link Modulemd.Profile} and thus this function is usually unnecessary. It has no
         * effect if `self` is already non-default.
         */
        unset_default(): void;
    }

    namespace RpmMapEntry {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::arch': (pspec: GObject.ParamSpec) => void;
            'notify::epoch': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::nevra': (pspec: GObject.ParamSpec) => void;
            'notify::release': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
        }

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

    /**
     * @gir-type Class
     */
    class RpmMapEntry extends GObject.Object {
        static $gtype: GObject.GType<RpmMapEntry>;

        // Properties

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RpmMapEntry.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RpmMapEntry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, epoch: number, version: string, release: string, arch: string): RpmMapEntry;

        // Signals

        /** @signal */
        connect<K extends keyof RpmMapEntry.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RpmMapEntry.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RpmMapEntry.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RpmMapEntry.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RpmMapEntry.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RpmMapEntry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns A deep copy of this {@link Modulemd.RpmMapEntry} object.
         */
        copy(): RpmMapEntry;
        /**
         * @param other Another {@link Modulemd.RpmMapEntry} object.
         * @returns TRUE if the two entries contain equivalent data. FALSE if they differ.
         */
        equals(other: RpmMapEntry): boolean;
        /**
         * @returns The package architecture of this RPM.
         */
        get_arch(): string;
        /**
         * @returns The package epoch of this RPM.
         */
        get_epoch(): number;
        /**
         * @returns The package name of this RPM.
         */
        get_name(): string;
        /**
         * @returns A newly-allocated string containing the complete N-E:V-R.A constructed from the component parts. NULL if any field is missing.
         */
        get_nevra(): string;
        /**
         * @returns The package release of this RPM.
         */
        get_release(): string;
        /**
         * @returns The package version of this RPM.
         */
        get_version(): string;
        /**
         * @param arch The package architecture of this RPM.
         */
        set_arch(arch: string): void;
        /**
         * @param epoch The package epoch of this RPM.
         */
        set_epoch(epoch: number): void;
        /**
         * @param name The package name of this RPM.
         */
        set_name(name: string): void;
        /**
         * @param release The package release string of this RPM.
         */
        set_release(release: string): void;
        /**
         * @param version The package version of this RPM.
         */
        set_version(version: string): void;
        validate(): boolean;
    }

    namespace ServiceLevel {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
        }
    }

    /**
     * @gir-type Class
     */
    class ServiceLevel extends GObject.Object {
        static $gtype: GObject.GType<ServiceLevel>;

        // Properties

        get name(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ServiceLevel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ServiceLevel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string): ServiceLevel;

        // Signals

        /** @signal */
        connect<K extends keyof ServiceLevel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServiceLevel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ServiceLevel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServiceLevel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ServiceLevel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ServiceLevel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Create a copy of this {@link Modulemd.ServiceLevel} object.
         * @returns The copied {@link Modulemd.ServiceLevel} object.
         */
        copy(): ServiceLevel;
        /**
         * @param self_2 A {@link Modulemd.ServiceLevel} object.
         * @returns TRUE if both the dates are either NULL or valid, FALSE otherwise.
         */
        equals(self_2: ServiceLevel): boolean;
        /**
         * @returns The end date of the service level as a {@link GLib.Date}.
         */
        get_eol(): GLib.Date;
        /**
         * @returns The end date of the service level as a string of the form "YYYY-MM-DD" or NULL if the date is unset or invalid.
         */
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
         * Sets the end date of the service level. If the {@link GLib.Date} passed in is invalid
         * or NULL, the EOL will be unset.
         * @param date The date this service level ends.
         */
        set_eol(date?: GLib.Date | null): void;
        /**
         * @param year The year this service level ends.
         * @param month The month this service level ends.
         * @param day The day of the month this service level ends.
         */
        set_eol_ymd(year: GLib.DateYear, month: GLib.DateMonth | null, day: GLib.DateDay): void;
    }

    namespace SubdocumentInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class SubdocumentInfo extends GObject.Object {
        static $gtype: GObject.GType<SubdocumentInfo>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SubdocumentInfo.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SubdocumentInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof SubdocumentInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SubdocumentInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SubdocumentInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SubdocumentInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SubdocumentInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SubdocumentInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns A {@link GLib.Error} containing an error code and message about why this subdocument failed parsing.
         */
        get_gerror(): GLib.Error;
        /**
         * @returns The associated YAML subdocument.
         */
        get_yaml(): string;
    }

    namespace Translation {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::modified': (pspec: GObject.ParamSpec) => void;
            'notify::module-name': (pspec: GObject.ParamSpec) => void;
            'notify::module-stream': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
        }

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

    /**
     * @gir-type Class
     */
    class Translation extends GObject.Object {
        static $gtype: GObject.GType<Translation>;

        // Properties

        get modified(): number;
        set modified(val: number);
        get module_name(): string;
        get moduleName(): string;
        get module_stream(): string;
        get moduleStream(): string;
        get version(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Translation.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Translation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](version: number, module_name: string, module_stream: string, modified: number): Translation;

        // Signals

        /** @signal */
        connect<K extends keyof Translation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Translation.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Translation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Translation.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Translation.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Translation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Create a copy of this {@link Modulemd.Translation} object.
         * @returns The copied {@link Modulemd.Translation} object.
         */
        copy(): Translation;
        /**
         * @returns An ordered {@link GObject.Strv} list of locales known to this {@link Modulemd.Translation}.
         */
        get_locales(): string[];
        /**
         * @param locale The locale of the translation to retrieve.
         * @returns The translation entry for the requested locale, or NULL if the locale was unknown.
         */
        get_translation_entry(locale: string): TranslationEntry;
        /**
         * @param modified The last modified time represented as a 64-bit integer (such as 201807011200).
         */
        set_modified(modified: number): void;
        /**
         * @param translation_entry A set of translations of this module stream for a particular locale.
         */
        set_translation_entry(translation_entry: TranslationEntry): void;
        /**
         * This method ensures that the translation is internally consistent for usage
         * or dumping to YAML. It will be run implicitly prior to emitting YAML. This
         * is not a complete linter, merely a sanity check that the values are not
         * impossible.
         */
        validate(): boolean;
    }

    namespace TranslationEntry {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::locale': (pspec: GObject.ParamSpec) => void;
            'notify::summary': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            description: string;
            locale: string;
            summary: string;
        }
    }

    /**
     * @gir-type Class
     */
    class TranslationEntry extends GObject.Object {
        static $gtype: GObject.GType<TranslationEntry>;

        // Properties

        get description(): string;
        set description(val: string);
        get locale(): string;
        get summary(): string;
        set summary(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TranslationEntry.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TranslationEntry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](locale: string): TranslationEntry;

        // Signals

        /** @signal */
        connect<K extends keyof TranslationEntry.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TranslationEntry.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TranslationEntry.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TranslationEntry.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TranslationEntry.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TranslationEntry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Create a copy of this {@link Modulemd.TranslationEntry} object.
         * @returns The copied {@link Modulemd.TranslationEntry} object.
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
        /**
         * @param profile_name
         */
        get_profile_description(profile_name: string): string;
        /**
         * Get a list of profiles that have descriptions.
         * @returns An ordered {@link GObject.Strv} list of profiles for which descriptions have been translated for this locale.
         */
        get_profiles(): string[];
        /**
         * Get the summary of this translation entry.
         * @returns The summary of this module stream translated into the language specified by locale.
         */
        get_summary(): string;
        /**
         * @param description The description of this module stream translated into the language specified by locale.
         */
        set_description(description?: string | null): void;
        /**
         * Adds a profile name translation.
         * @param profile_name The name of the profile.
         * @param profile_description The translated description of the profile.
         */
        set_profile_description(profile_name: string, profile_description?: string | null): void;
        /**
         * @param summary The summary of this module translated appropriately for this locale.
         */
        set_summary(summary?: string | null): void;
    }

    /**
     * @gir-type Alias
     */
    type BuildConfigClass = typeof BuildConfig;
    /**
     * @gir-type Alias
     */
    type BuildoptsClass = typeof Buildopts;
    /**
     * @gir-type Alias
     */
    type ComponentClass = typeof Component;
    /**
     * @gir-type Alias
     */
    type ComponentModuleClass = typeof ComponentModule;
    /**
     * @gir-type Alias
     */
    type ComponentRpmClass = typeof ComponentRpm;
    /**
     * @gir-type Alias
     */
    type DefaultsClass = typeof Defaults;
    /**
     * @gir-type Alias
     */
    type DefaultsV1Class = typeof DefaultsV1;
    /**
     * @gir-type Alias
     */
    type DependenciesClass = typeof Dependencies;
    /**
     * @gir-type Alias
     */
    type ModuleClass = typeof Module;
    /**
     * @gir-type Alias
     */
    type ModuleIndexClass = typeof ModuleIndex;
    /**
     * @gir-type Alias
     */
    type ModuleIndexMergerClass = typeof ModuleIndexMerger;
    /**
     * @gir-type Alias
     */
    type ModuleStreamClass = typeof ModuleStream;
    /**
     * @gir-type Alias
     */
    type ModuleStreamV1Class = typeof ModuleStreamV1;
    /**
     * @gir-type Alias
     */
    type ModuleStreamV2Class = typeof ModuleStreamV2;
    /**
     * @gir-type Alias
     */
    type ObsoletesClass = typeof Obsoletes;
    /**
     * @gir-type Alias
     */
    type PackagerV3Class = typeof PackagerV3;
    /**
     * @gir-type Alias
     */
    type ProfileClass = typeof Profile;
    /**
     * @gir-type Alias
     */
    type RpmMapEntryClass = typeof RpmMapEntry;
    /**
     * @gir-type Alias
     */
    type ServiceLevelClass = typeof ServiceLevel;
    /**
     * @gir-type Alias
     */
    type SubdocumentInfoClass = typeof SubdocumentInfo;
    /**
     * @gir-type Alias
     */
    type TranslationClass = typeof Translation;
    /**
     * @gir-type Alias
     */
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
