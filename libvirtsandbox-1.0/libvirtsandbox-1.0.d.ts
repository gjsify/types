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
import type LibvirtGObject from '@girs/libvirtgobject-1.0';
import type LibvirtGLib from '@girs/libvirtglib-1.0';
import type GLib from '@girs/glib-2.0';
import type LibvirtGConfig from '@girs/libvirtgconfig-1.0';
import type libxml2 from '@girs/libxml2-2.0';
import type GObject from '@girs/gobject-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace LibvirtSandbox {
    /**
     * LibvirtSandbox-1.0
     */

    function init(argv?: string[] | null): string[] | null;
    function init_check(argv?: string[] | null): [boolean, string[] | null];
    function util_disk_format_from_str(value: string): number;
    function util_guess_image_format(path: string): number;
    namespace Builder {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            connection: LibvirtGObject.Connection;
        }
    }

    abstract class Builder extends GObject.Object {
        static $gtype: GObject.GType<Builder>;

        // Properties

        get connection(): LibvirtGObject.Connection;

        // Constructors

        constructor(properties?: Partial<Builder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Static methods

        /**
         * Find and instantiate a suitable builder for sandboxes to be hosted
         * under the `connection`.
         * @param connection the connection to host the sandbox
         */
        static for_connection(connection: LibvirtGObject.Connection): Builder;

        // Virtual methods

        /**
         * Cleanup temporary files which are not required once the sandbox
         * has been started.
         * @param config the sandbox configuration
         * @param statedir
         */
        vfunc_clean_post_start(config: Config, statedir: string): boolean;
        /**
         * Cleanup temporary files which are not required once the sandbox
         * has been started.
         * @param config the sandbox configuration
         * @param statedir
         */
        vfunc_clean_post_stop(config: Config, statedir: string): boolean;
        vfunc_construct_basic(config: Config, statedir: string, domain: LibvirtGConfig.Domain): boolean;
        vfunc_construct_devices(config: Config, statedir: string, domain: LibvirtGConfig.Domain): boolean;
        vfunc_construct_domain(config: Config, statedir: string, domain: LibvirtGConfig.Domain): boolean;
        vfunc_construct_features(config: Config, statedir: string, domain: LibvirtGConfig.Domain): boolean;
        vfunc_construct_os(config: Config, statedir: string, domain: LibvirtGConfig.Domain): boolean;
        vfunc_construct_security(config: Config, statedir: string, domain: LibvirtGConfig.Domain): boolean;
        vfunc_get_disk_prefix(config: Config, disk: ConfigDisk): string;

        // Methods

        /**
         * Cleanup temporary files which are not required once the sandbox
         * has been started.
         * @param config the sandbox configuration
         * @param statedir
         * @returns TRUE on success, FALSE on error
         */
        clean_post_start(config: Config, statedir: string): boolean;
        /**
         * Cleanup temporary files which are not required once the sandbox
         * has been started.
         * @param config the sandbox configuration
         * @param statedir
         * @returns TRUE on success, FALSE on error
         */
        clean_post_stop(config: Config, statedir: string): boolean;
        /**
         * Create a domain configuration from the sandbox configuration
         * @param config the sandbox configuration
         * @param statedir
         * @returns the newly built domain configuration
         */
        construct(config: Config, statedir: string): LibvirtGConfig.Domain;
        /**
         * Retrieves the sandbox connection
         * @returns the current connection
         */
        get_connection(): LibvirtGObject.Connection;
        set_filterref(iface: LibvirtGConfig.DomainInterface, filterref: ConfigNetworkFilterref): void;
    }

    namespace BuilderContainer {
        // Constructor properties interface

        interface ConstructorProps extends Builder.ConstructorProps {}
    }

    class BuilderContainer extends Builder {
        static $gtype: GObject.GType<BuilderContainer>;

        // Constructors

        constructor(properties?: Partial<BuilderContainer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](connection: LibvirtGObject.Connection): BuilderContainer;
    }

    namespace BuilderInitrd {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class BuilderInitrd extends GObject.Object {
        static $gtype: GObject.GType<BuilderInitrd>;

        // Constructors

        constructor(properties?: Partial<BuilderInitrd.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BuilderInitrd;

        // Methods

        construct(config: ConfigInitrd, outputfile: string): boolean;
    }

    namespace BuilderMachine {
        // Constructor properties interface

        interface ConstructorProps extends Builder.ConstructorProps {}
    }

    class BuilderMachine extends Builder {
        static $gtype: GObject.GType<BuilderMachine>;

        // Constructors

        constructor(properties?: Partial<BuilderMachine.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](connection: LibvirtGObject.Connection): BuilderMachine;
    }

    namespace Config {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            arch: string;
            gid: number;
            homedir: string;
            kernpath: string;
            kernrelease: string;
            kmodpath: string;
            name: string;
            root: string;
            security_dynamic: boolean;
            securityDynamic: boolean;
            security_label: string;
            securityLabel: string;
            shell: string;
            uid: number;
            username: string;
            uuid: string;
        }
    }

    abstract class Config extends GObject.Object {
        static $gtype: GObject.GType<Config>;

        // Properties

        get arch(): string;
        set arch(val: string);
        get gid(): number;
        set gid(val: number);
        get homedir(): string;
        set homedir(val: string);
        get kernpath(): string;
        set kernpath(val: string);
        get kernrelease(): string;
        set kernrelease(val: string);
        get kmodpath(): string;
        set kmodpath(val: string);
        get name(): string;
        get root(): string;
        set root(val: string);
        get security_dynamic(): boolean;
        set security_dynamic(val: boolean);
        get securityDynamic(): boolean;
        set securityDynamic(val: boolean);
        get security_label(): string;
        set security_label(val: string);
        get securityLabel(): string;
        set securityLabel(val: string);
        get shell(): string;
        set shell(val: string);
        get uid(): number;
        set uid(val: number);
        get username(): string;
        set username(val: string);
        get uuid(): string;

        // Constructors

        constructor(properties?: Partial<Config.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Static methods

        static load_from_data(data: string): Config;
        static load_from_path(path: string): Config;

        // Virtual methods

        /**
         * Retrieve the sandbox command and arguments
         */
        vfunc_get_command(): string[];
        vfunc_load_config(file: GLib.KeyFile): boolean;
        vfunc_save_config(file: GLib.KeyFile): void;

        // Methods

        /**
         * Adds a new custom disk to the sandbox
         * @param dsk the disk configuration
         */
        add_disk(dsk: ConfigDisk): void;
        /**
         * Parses `disk` in the format TYPE:TAG=SOURCE,format=FORMAT
         * creating #GVirSandboxConfigDisk instances for each element. For
         * example
         *
         * - file:cache=/var/lib/sandbox/demo/tmp.qcow2,format=qcow2
         * @param disk the disk config
         */
        add_disk_opts(disk: string): boolean;
        /**
         * Parses `disks` whose elements are in the format TYPE:TAG=SOURCE,format=FORMAT
         * creating #GVirSandboxConfigMount instances for each element. For
         * example
         *
         * - file:cache=/var/lib/sandbox/demo/tmp.qcow2,format=qcow2
         * @param disks the list of disks
         */
        add_disk_strv(disks: string[]): boolean;
        /**
         * Adds a new environment variable to the sandbox
         * @param key the key for environment variable
         * @param value the value for environment variable
         */
        add_env(key: string, value: string): void;
        /**
         * Parses `env` in the format KEY=VALUE
         * creating #GVirSandboxConfigEnv instances for each element. For
         * example
         *
         * --env KEY=VALUE
         * @param env the env config
         */
        add_env_opts(env: string): boolean;
        /**
         * Parses `envs` whose elements are in the format KEY=VALUE
         *
         * --env KEY=VALUE
         * @param envs the list of environment variables
         */
        add_env_strv(envs: string[]): boolean;
        add_host_include_file(includefile: string): boolean;
        /**
         * Parses `includes` whose elements are in the format
         * GUEST-TARGET=ROOT-PATH. If ROOT_PATH is omitted,
         * then it is assumed to be the same as GUEST-TARGET
         * @param includes the list of includes
         */
        add_host_include_strv(includes: string[]): boolean;
        /**
         * Adds a new custom mount to the sandbox, to override part of the
         * host filesystem
         * @param mnt the mount configuration
         */
        add_mount(mnt: ConfigMount): void;
        /**
         * Parses `mount` whose elements are in the format TYPE:TARGET=SOURCE
         * creating #GVirSandboxConfigMount instances for each element. For
         * example
         *
         * - host-bind:/tmp=/var/lib/sandbox/demo/tmp
         * - host-image:/=/var/lib/sandbox/demo.img
         * - host-image:/=/var/lib/sandbox/demo.qcow2,format=qcow2
         * - guest-bind:/home=/tmp/home
         * - ram:/tmp=500M
         * @param mount the mount config
         */
        add_mount_opts(mount: string): boolean;
        /**
         * Parses `mounts` whose elements are in the format TYPE:TARGET=SOURCE
         * creating #GVirSandboxConfigMount instances for each element. For
         * example
         *
         * - host-bind:/tmp=/var/lib/sandbox/demo/tmp
         * - host-image:/=/var/lib/sandbox/demo.img
         * - guest-bind:/home=/tmp/home
         * @param mounts the list of mounts
         */
        add_mount_strv(mounts: string[]): boolean;
        /**
         * Adds a new network connection to the sandbox
         * @param network the network configuration
         */
        add_network(network: ConfigNetwork): void;
        /**
         * Parses `network` whose elements are in the format
         * KEY=VALUE, creating #GVirSandboxConfigNetwork
         * instances for each element.
         *
         *  dhcp,source=default
         *  source=private,address=192.168.122.1/24%192.168.122.255,
         *  address=192.168.122.1/24%192.168.122.255,address=2001:212::204:2/64
         *  route=192.168.122.255/24%192.168.1.1
         *  filter=clean-traffic
         *  filter.ip=192.168.122.1
         * @param network the network config
         */
        add_network_opts(network: string): boolean;
        /**
         * Parses `networks` whose elements are in the format
         * KEY=VALUE, creating #GVirSandboxConfigNetwork
         * instances for each element.
         * @param networks the list of networks
         */
        add_network_strv(networks: string[]): boolean;
        /**
         * Finds the #GVirSandboxConfigMount object corresponding to a guest
         * path of `target`.
         * @param target the guest target path
         * @returns a mount object or NULL
         */
        find_mount(target: string): ConfigMount | null;
        /**
         * Retrieves the sandbox binary architecture
         * @returns the current architecture
         */
        get_arch(): string;
        /**
         * Retrieve the sandbox command and arguments
         * @returns the command path and arguments
         */
        get_command(): string[];
        /**
         * Retrieves the sandbox debug flag
         * @returns the debug flag
         */
        get_debug(): boolean;
        /**
         * Retrieves the list of custom disks in the sandbox
         * @returns the list of disks
         */
        get_disks(): ConfigMount[];
        /**
         * Retrieves the hashtable of custom environment variables in the sandbox
         * @returns the hashtable of environment variables
         */
        get_envs(): GLib.HashTable<number, number>;
        /**
         * Get the group ID to invoke the sandbox application under.
         * @returns the group ID
         */
        get_groupid(): number;
        /**
         * Get the home directory associated with the sandbox user ID
         * @returns the home directory
         */
        get_homedir(): string;
        /**
         * Retrieves the sandbox kernel image path
         * @returns the current kernel image path
         */
        get_kernpath(): string;
        /**
         * Retrieves the sandbox kernel release version
         * @returns the current kernel release version
         */
        get_kernrelease(): string;
        /**
         * Retrieves the sandbox kernel modules path
         * @returns the current kernel modules path
         */
        get_kmodpath(): string;
        /**
         * Retrieves the list of custom mounts in the sandbox
         * @returns the list of mounts
         */
        get_mounts(): ConfigMount[];
        /**
         * Retrieves the list of custom mounts in the sandbox
         * @param type
         * @returns the list of mounts
         */
        get_mounts_with_type(type: GObject.GType): ConfigMount[];
        /**
         * Retrieves the sandbox name
         * @returns the current name
         */
        get_name(): string;
        /**
         * Retrieves the list of custom networks in the sandbox
         * @returns the list of networks
         */
        get_networks(): ConfigNetwork[];
        /**
         * Retrieves the sandbox root directory
         * @returns the current root
         */
        get_root(): string;
        /**
         * Retrieve the sandbox security mode
         * @returns the security mode
         */
        get_security_dynamic(): boolean;
        /**
         * Retrieve the sandbox security label
         * @returns the security label
         */
        get_security_label(): string;
        /**
         * Retrieves the sandbox shell flag
         * @returns the shell flag
         */
        get_shell(): boolean;
        /**
         * Get the user ID to invoke the sandbox application under.
         * @returns the user ID
         */
        get_userid(): number;
        /**
         * Get the user name to invoke the sandbox application under.
         * @returns the user name
         */
        get_username(): string;
        /**
         * Retrieves the sandbox UUID
         * @returns the current uuid
         */
        get_uuid(): string;
        /**
         * Retrieves the sandbox verbose flag
         * @returns the verbose flag
         */
        get_verbose(): boolean;
        has_disks(): boolean;
        has_envs(): boolean;
        has_mounts(): boolean;
        has_mounts_with_type(type: GObject.GType): boolean;
        has_networks(): boolean;
        has_root_mount(): boolean;
        save_to_data(): string;
        save_to_path(path: string): boolean;
        /**
         * Set the architecture to use in the sandbox. If none is provided,
         * it will default to matching the host architecture.
         * @param arch the host directory
         */
        set_arch(arch: string): void;
        /**
         * Set whether the container init should print debugging messages.
         * @param debug true if the container init should print debugging messages
         */
        set_debug(debug: boolean): void;
        /**
         * Set the group ID to invoke the sandbox application under.
         * Defaults to the group ID of the current program.
         * @param gid the sandbox group ID
         */
        set_groupid(gid: number): void;
        /**
         * Set the home directory associated with the sandbox user ID.
         * Defaults to the home directory of the current program.
         * @param homedir the sandbox home directory
         */
        set_homedir(homedir: string): void;
        /**
         * Set the kernel image path to use in the sandbox. If none is provided,
         * it will default to matching /boot/vmlinuz-[kernel release].
         * @param kernpath the host directory
         */
        set_kernpath(kernpath: string): void;
        /**
         * Set the kernel release version to use in the sandbox. If none is provided,
         * it will default to matching the current running kernel.
         * @param kernrelease the host directory
         */
        set_kernrelease(kernrelease: string): void;
        /**
         * Sets the generic path to the kernel modules directory.
         * It will default to "/lib/modules", modules being searched in
         * /lib/modules/[kernel release]. If "/path" is given as argument
         * modules will be searched in /path/[kernel release]
         * @param kmodpath the kernel modules path
         */
        set_kmodpath(kmodpath: string): void;
        /**
         * Set the host directory to use as the root for the sandbox. The
         * defualt root is "/".
         * @param hostdir the host directory
         */
        set_root(hostdir: string): void;
        /**
         * Set the SELinux security dynamic for the sandbox. The default
         * dynamic is "svirt_sandbox_t"
         * @param dynamic the security mode
         */
        set_security_dynamic(dynamic: boolean): void;
        /**
         * Set the sandbox security label. By default a dynamic security label
         * is chosen. A static security label must be specified if any
         * custom mounts are added
         * @param label the host directory
         */
        set_security_label(label: string): void;
        set_security_opts(optstr: string): boolean;
        /**
         * Set whether the container console should have a interactive shell.
         * @param shell true if the container should have a shell
         */
        set_shell(shell: boolean): void;
        /**
         * Set the user ID to invoke the sandbox application under.
         * Defaults to the user ID of the current program.
         * @param uid the sandbox user ID
         */
        set_userid(uid: number): void;
        /**
         * Set the user name associated with the sandbox user ID.
         * Defaults to the user name of the current program.
         * @param username the sandbox user name
         */
        set_username(username: string): void;
        /**
         * Set the UUID for the container, to overide the automatically
         * generated value.
         * @param uuid the uuid in string format
         */
        set_uuid(uuid: string): void;
        /**
         * Set whether the container init should be verbose.
         * @param verbose true if the container init should be verbose
         */
        set_verbose(verbose: boolean): void;
    }

    namespace ConfigDisk {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            format: LibvirtGConfig.DomainDiskFormat;
            source: string;
            tag: string;
            type: LibvirtGConfig.DomainDiskType;
        }
    }

    class ConfigDisk extends GObject.Object {
        static $gtype: GObject.GType<ConfigDisk>;

        // Properties

        get format(): LibvirtGConfig.DomainDiskFormat;
        get source(): string;
        get tag(): string;
        get type(): LibvirtGConfig.DomainDiskType;

        // Constructors

        constructor(properties?: Partial<ConfigDisk.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        /**
         * Retrieves the type property for the custom disk
         * @returns the type property of disk
         */
        get_disk_type(): LibvirtGConfig.DomainDiskType;
        /**
         * Retrieves the format property for the custom disk
         * @returns the format property of disk
         */
        get_format(): LibvirtGConfig.DomainDiskFormat;
        /**
         * Retrieves the source property for the custom disk
         * @returns the source property
         */
        get_source(): string;
        /**
         * Retrieves the tag property for the custom disk
         * @returns the tag property path
         */
        get_tag(): string;
    }

    namespace ConfigInitrd {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            init: string;
            kmoddir: string;
            kver: string;
        }
    }

    class ConfigInitrd extends GObject.Object {
        static $gtype: GObject.GType<ConfigInitrd>;

        // Properties

        get init(): string;
        set init(val: string);
        get kmoddir(): string;
        set kmoddir(val: string);
        get kver(): string;
        set kver(val: string);

        // Constructors

        constructor(properties?: Partial<ConfigInitrd.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ConfigInitrd;

        // Methods

        /**
         * Request that the kernel module `modname` is included in the initrd,
         * along with any depedent modules
         * @param modname the kernel module name
         */
        add_module(modname: string): void;
        /**
         * Retrieves the path of the init binary
         * @returns the init binary path
         */
        get_init(): string;
        /**
         * Retrieves the current kernel modules directory
         * @returns the full path to the kernel modules directory
         */
        get_kmoddir(): string;
        /**
         * Retrieves the path of the kver binary
         * @returns the kver binary path
         */
        get_kver(): string;
        /**
         * Retrieves the list of all modules
         * @returns the module names
         */
        get_modules(): string[];
        /**
         * Sets the host binary to be used as the init program inside
         * the initrd. This defaults to /usr/bin/libvirt-sandbox-init-qemu
         * @param hostpath the init binary path
         */
        set_init(hostpath: string): void;
        /**
         * Sets the full path to where the kernel modules will be looked up
         * @param kmoddir the full path to the kernel modules directory
         */
        set_kmoddir(kmoddir: string): void;
        /**
         * Sets the host kernel version to use for populating the initrd with modules.
         * This defaults to the currently running kernel version
         * @param version the kernel version
         */
        set_kver(version: string): void;
    }

    namespace ConfigInteractive {
        // Constructor properties interface

        interface ConstructorProps extends Config.ConstructorProps {
            tty: string;
        }
    }

    class ConfigInteractive extends Config {
        static $gtype: GObject.GType<ConfigInteractive>;

        // Properties

        get tty(): string;
        set tty(val: string);

        // Constructors

        constructor(properties?: Partial<ConfigInteractive.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string): ConfigInteractive;

        // Methods

        /**
         * Retrieves the sandbox tty flag
         * @returns the tty flag
         */
        get_tty(): boolean;
        /**
         * Set the path of the command to be run and its arguments. The `argv` should
         * be a NULL terminated list
         * @param argv the command path and arguments
         */
        set_command(argv: string[]): void;
        /**
         * Set whether the container console should have a interactive tty.
         * @param tty true if the container should have a tty
         */
        set_tty(tty: boolean): void;
    }

    namespace ConfigMount {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            target: string;
        }
    }

    abstract class ConfigMount extends GObject.Object {
        static $gtype: GObject.GType<ConfigMount>;

        // Properties

        get target(): string;

        // Constructors

        constructor(properties?: Partial<ConfigMount.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        /**
         * Request that the file `srcpath` from the host OS is to be copied
         * to `dstpath,` relative to the `target` path in the sandbox.
         * @param srcpath a file on the host
         * @param dstpath a path within the mount
         */
        add_include(srcpath: string, dstpath: string): void;
        /**
         * Retrieves the list of all include files
         * @returns the include files
         */
        get_includes(): GLib.HashTable<string, string>;
        /**
         * Retrieves the target directory for the custom mount
         * @returns the target directory path
         */
        get_target(): string;
    }

    namespace ConfigMountFile {
        // Constructor properties interface

        interface ConstructorProps extends ConfigMount.ConstructorProps {
            source: string;
        }
    }

    abstract class ConfigMountFile extends ConfigMount {
        static $gtype: GObject.GType<ConfigMountFile>;

        // Properties

        get source(): string;
        set source(val: string);

        // Constructors

        constructor(properties?: Partial<ConfigMountFile.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        /**
         * Retrieves the directory mapped to the mount (if any)
         * @returns the source directory
         */
        get_source(): string;
        /**
         * Sets the directory to map to the custom mount. If no
         * directory is specified, an empty temporary directory will
         * be created
         * @param source the host directory
         */
        set_source(source: string): void;
    }

    namespace ConfigMountGuestBind {
        // Constructor properties interface

        interface ConstructorProps extends ConfigMountFile.ConstructorProps {}
    }

    class ConfigMountGuestBind extends ConfigMountFile {
        static $gtype: GObject.GType<ConfigMountGuestBind>;

        // Constructors

        constructor(properties?: Partial<ConfigMountGuestBind.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](source: string, targetdir: string): ConfigMountGuestBind;
    }

    namespace ConfigMountHostBind {
        // Constructor properties interface

        interface ConstructorProps extends ConfigMountFile.ConstructorProps {}
    }

    class ConfigMountHostBind extends ConfigMountFile {
        static $gtype: GObject.GType<ConfigMountHostBind>;

        // Constructors

        constructor(properties?: Partial<ConfigMountHostBind.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](source: string, targetdir: string): ConfigMountHostBind;
    }

    namespace ConfigMountHostImage {
        // Constructor properties interface

        interface ConstructorProps extends ConfigMountFile.ConstructorProps {
            format: LibvirtGConfig.DomainDiskFormat;
        }
    }

    class ConfigMountHostImage extends ConfigMountFile {
        static $gtype: GObject.GType<ConfigMountHostImage>;

        // Properties

        get format(): LibvirtGConfig.DomainDiskFormat;

        // Constructors

        constructor(properties?: Partial<ConfigMountHostImage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            source: string,
            targetdir: string,
            format: LibvirtGConfig.DomainDiskFormat,
        ): ConfigMountHostImage;

        // Methods

        /**
         * Retrieves the image format of the host-image filesystem.
         * @returns the imave format
         */
        get_format(): LibvirtGConfig.DomainDiskFormat;
    }

    namespace ConfigMountRam {
        // Constructor properties interface

        interface ConstructorProps extends ConfigMount.ConstructorProps {
            usage: number;
        }
    }

    class ConfigMountRam extends ConfigMount {
        static $gtype: GObject.GType<ConfigMountRam>;

        // Properties

        get usage(): number;

        // Constructors

        constructor(properties?: Partial<ConfigMountRam.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](targetdir: string, usage: number): ConfigMountRam;

        // Methods

        /**
         * Retrieves the memory usage limit for the RAM filesystem in Kibibytes
         * @returns the usage limit
         */
        get_usage(): number;
        /**
         * Sets the memory usage limit for the RAM filesystem in Kibibytes
         * @param usage the memory usage limit in KiB
         */
        set_usage(usage: number): void;
    }

    namespace ConfigNetwork {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            dhcp: boolean;
            mac: string;
            source: string;
        }
    }

    class ConfigNetwork extends GObject.Object {
        static $gtype: GObject.GType<ConfigNetwork>;

        // Properties

        get dhcp(): boolean;
        set dhcp(val: boolean);
        get mac(): string;
        set mac(val: string);
        get source(): string;
        set source(val: string);

        // Constructors

        constructor(properties?: Partial<ConfigNetwork.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ConfigNetwork;

        // Methods

        /**
         * Add a network interface address. This will be ignored unless
         * DHCP has been disabled
         * @param addr the network address
         */
        add_address(addr: ConfigNetworkAddress): void;
        /**
         * Add a network interface route. This will be ignored unless
         * DHCP has been disabled
         * @param addr the network route
         */
        add_route(addr: ConfigNetworkRoute): void;
        /**
         * Retrieve the list of network interface addresses
         * @returns the address list
         */
        get_addresses(): ConfigNetworkAddress[];
        get_dhcp(): boolean;
        /**
         * Retrieve the associated filter reference.
         * @returns The associated filter reference.
         */
        get_filterref(): ConfigNetworkFilterref;
        get_mac(): string;
        /**
         * Retrieve the list of network interface routes
         * @returns the route list
         */
        get_routes(): ConfigNetworkRoute[];
        get_source(): string;
        set_dhcp(dhcp: boolean): void;
        /**
         * Set a network filterref for the given network.
         * @param ref the network filterref
         */
        set_filterref(ref: ConfigNetworkFilterref): void;
        set_mac(mac: string): void;
        set_source(network: string): void;
    }

    namespace ConfigNetworkAddress {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            broadcast: Gio.InetAddress;
            prefix: number;
            primary: Gio.InetAddress;
        }
    }

    class ConfigNetworkAddress extends GObject.Object {
        static $gtype: GObject.GType<ConfigNetworkAddress>;

        // Properties

        get broadcast(): Gio.InetAddress;
        get prefix(): number;
        get primary(): Gio.InetAddress;

        // Constructors

        constructor(properties?: Partial<ConfigNetworkAddress.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](primary: Gio.InetAddress, prefix: number, broadcast: Gio.InetAddress): ConfigNetworkAddress;

        // Methods

        /**
         * Retrieves the broadcast address
         * @returns the broadcast address
         */
        get_broadcast(): Gio.InetAddress;
        /**
         * Retrieves the network prefix
         * @returns the network prefix
         */
        get_prefix(): number;
        /**
         * Retrieves the primary address
         * @returns the primary address
         */
        get_primary(): Gio.InetAddress;
        /**
         * Sets the interface broadcast address
         * @param addr the broadcast address
         */
        set_broadcast(addr: Gio.InetAddress): void;
        /**
         * Sets the interface network prefix
         * @param prefix the prefix length
         */
        set_prefix(prefix: number): void;
        /**
         * Sets the interface primary address
         * @param addr the primary address
         */
        set_primary(addr: Gio.InetAddress): void;
    }

    namespace ConfigNetworkFilterref {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
        }
    }

    class ConfigNetworkFilterref extends GObject.Object {
        static $gtype: GObject.GType<ConfigNetworkFilterref>;

        // Properties

        get name(): string;
        set name(val: string);

        // Constructors

        constructor(properties?: Partial<ConfigNetworkFilterref.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ConfigNetworkFilterref;

        // Methods

        /**
         * Add a parameter to a network filter reference.
         * @param param the filter parameter
         */
        add_parameter(param: ConfigNetworkFilterrefParameter): void;
        /**
         * Retrieves the network filter reference name.
         * @returns the network filter reference name.
         */
        get_name(): string;
        /**
         * Retrieve the list of parameters associated with a network filter reference
         * @returns the parameter list
         */
        get_parameters(): ConfigNetworkFilterrefParameter[];
        set_name(name: string): void;
    }

    namespace ConfigNetworkFilterrefParameter {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
            value: string;
        }
    }

    class ConfigNetworkFilterrefParameter extends GObject.Object {
        static $gtype: GObject.GType<ConfigNetworkFilterrefParameter>;

        // Properties

        get name(): string;
        set name(val: string);
        get value(): string;
        set value(val: string);

        // Constructors

        constructor(properties?: Partial<ConfigNetworkFilterrefParameter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ConfigNetworkFilterrefParameter;

        // Methods

        get_name(): string;
        get_value(): string;
        set_name(name: string): void;
        set_value(value: string): void;
    }

    namespace ConfigNetworkRoute {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            gateway: Gio.InetAddress;
            prefix: number;
            target: Gio.InetAddress;
        }
    }

    class ConfigNetworkRoute extends GObject.Object {
        static $gtype: GObject.GType<ConfigNetworkRoute>;

        // Properties

        get gateway(): Gio.InetAddress;
        get prefix(): number;
        get target(): Gio.InetAddress;

        // Constructors

        constructor(properties?: Partial<ConfigNetworkRoute.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](target: Gio.InetAddress, prefix: number, gateway: Gio.InetAddress): ConfigNetworkRoute;

        // Methods

        /**
         * Retrieves the network gateway address
         * @returns the gateway address
         */
        get_gateway(): Gio.InetAddress;
        /**
         * Retrieves the prefix length of the route
         * @returns the prefix length
         */
        get_prefix(): number;
        /**
         * Retrieves the route target address
         * @returns the target address
         */
        get_target(): Gio.InetAddress;
        /**
         * Sets the interface gateway device
         * @param addr the gateway device
         */
        set_gateway(addr: Gio.InetAddress): void;
        /**
         * Sets the prefix for an interface route
         * @param prefix prefix length
         */
        set_prefix(prefix: number): void;
        /**
         * Sets the interface route target address
         * @param addr the target address
         */
        set_target(addr: Gio.InetAddress): void;
    }

    namespace ConfigService {
        // Constructor properties interface

        interface ConstructorProps extends Config.ConstructorProps {}
    }

    abstract class ConfigService extends Config {
        static $gtype: GObject.GType<ConfigService>;

        // Constructors

        constructor(properties?: Partial<ConfigService.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    namespace ConfigServiceGeneric {
        // Constructor properties interface

        interface ConstructorProps extends ConfigService.ConstructorProps {}
    }

    class ConfigServiceGeneric extends ConfigService {
        static $gtype: GObject.GType<ConfigServiceGeneric>;

        // Constructors

        constructor(properties?: Partial<ConfigServiceGeneric.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string): ConfigServiceGeneric;

        // Methods

        /**
         * Set the path of the command to be run and its arguments. The `argv` should
         * be a NULL terminated list
         * @param argv the command path and arguments
         */
        set_command(argv: string[]): void;
    }

    namespace ConfigServiceSystemd {
        // Constructor properties interface

        interface ConstructorProps extends ConfigService.ConstructorProps {}
    }

    class ConfigServiceSystemd extends ConfigService {
        static $gtype: GObject.GType<ConfigServiceSystemd>;

        // Constructors

        constructor(properties?: Partial<ConfigServiceSystemd.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string): ConfigServiceSystemd;

        // Methods

        get_boot_target(): string;
        set_boot_target(target: string): void;
    }

    namespace Console {
        // Signal callback interfaces

        interface Closed {
            (object: boolean): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            connection: LibvirtGObject.Connection;
            devname: string;
            direct: boolean;
            domain: LibvirtGObject.Domain;
            escape: number;
        }
    }

    abstract class Console extends GObject.Object {
        static $gtype: GObject.GType<Console>;

        // Properties

        get connection(): LibvirtGObject.Connection;
        get devname(): string;
        get direct(): boolean;
        get domain(): LibvirtGObject.Domain;
        get escape(): number;

        // Constructors

        constructor(properties?: Partial<Console.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'closed', callback: (_source: this, object: boolean) => void): number;
        connect_after(signal: 'closed', callback: (_source: this, object: boolean) => void): number;
        emit(signal: 'closed', object: boolean): void;

        // Virtual methods

        vfunc_attach(
            localStdin: Gio.UnixInputStream,
            localStdout: Gio.UnixOutputStream,
            localStderr: Gio.UnixOutputStream,
        ): boolean;
        vfunc_closed(err: boolean): void;
        vfunc_detach(): boolean;

        // Methods

        attach(
            localStdin: Gio.UnixInputStream,
            localStdout: Gio.UnixOutputStream,
            localStderr: Gio.UnixOutputStream,
        ): boolean;
        attach_stderr(): boolean;
        attach_stdio(): boolean;
        detach(): boolean;
        get_direct(): boolean;
        get_escape(): number;
        isolate(): boolean;
        set_direct(direct: boolean): void;
        set_escape(escape: number): void;
    }

    namespace ConsoleRaw {
        // Constructor properties interface

        interface ConstructorProps extends Console.ConstructorProps {}
    }

    class ConsoleRaw extends Console {
        static $gtype: GObject.GType<ConsoleRaw>;

        // Constructors

        constructor(properties?: Partial<ConsoleRaw.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            connection: LibvirtGObject.Connection,
            domain: LibvirtGObject.Domain,
            devname: string,
        ): ConsoleRaw;

        // Virtual methods

        vfunc_closed(err: boolean): void;
    }

    namespace ConsoleRpc {
        // Signal callback interfaces

        interface Exited {
            (object: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Console.ConstructorProps {}
    }

    class ConsoleRpc extends Console {
        static $gtype: GObject.GType<ConsoleRpc>;

        // Constructors

        constructor(properties?: Partial<ConsoleRpc.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            connection: LibvirtGObject.Connection,
            domain: LibvirtGObject.Domain,
            devname: string,
        ): ConsoleRpc;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'exited', callback: (_source: this, object: number) => void): number;
        connect_after(signal: 'exited', callback: (_source: this, object: number) => void): number;
        emit(signal: 'exited', object: number): void;

        // Virtual methods

        vfunc_closed(err: boolean): void;
        vfunc_exited(status: number): void;
    }

    namespace Context {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            config: Config;
            connection: LibvirtGObject.Connection;
            domain: LibvirtGObject.Domain;
        }
    }

    abstract class Context extends GObject.Object {
        static $gtype: GObject.GType<Context>;

        // Properties

        get config(): Config;
        get connection(): LibvirtGObject.Connection;
        get domain(): LibvirtGObject.Domain;
        set domain(val: LibvirtGObject.Domain);

        // Constructors

        constructor(properties?: Partial<Context.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Virtual methods

        vfunc_attach(): boolean;
        vfunc_detach(): boolean;
        vfunc_start(): boolean;
        vfunc_stop(): boolean;

        // Methods

        attach(): boolean;
        detach(): boolean;
        /**
         * Retrieves the sandbox configuration
         * @returns the current configuration
         */
        get_config(): Config;
        /**
         * Retrieves the sandbox connection
         * @returns the current connection or NULL
         */
        get_connection(): LibvirtGObject.Connection;
        /**
         * Retrieves the sandbox domain (if running)
         * @returns the current domain or NULL
         */
        get_domain(): LibvirtGObject.Domain;
        get_log_console(): Console | null;
        get_shell_console(): Console | null;
        is_attached(): boolean;
        start(): boolean;
        stop(): boolean;
    }

    namespace ContextInteractive {
        // Constructor properties interface

        interface ConstructorProps extends Context.ConstructorProps {}
    }

    class ContextInteractive extends Context {
        static $gtype: GObject.GType<ContextInteractive>;

        // Constructors

        constructor(properties?: Partial<ContextInteractive.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](connection: LibvirtGObject.Connection, config: ConfigInteractive): ContextInteractive;

        // Methods

        get_app_console(): Console | null;
    }

    namespace ContextService {
        // Constructor properties interface

        interface ConstructorProps extends Context.ConstructorProps {}
    }

    class ContextService extends Context {
        static $gtype: GObject.GType<ContextService>;

        // Constructors

        constructor(properties?: Partial<ContextService.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](connection: LibvirtGObject.Connection, config: ConfigService): ContextService;

        // Virtual methods

        vfunc_define(): boolean;
        vfunc_undefine(): boolean;

        // Methods

        define(): boolean;
        undefine(): boolean;
    }

    type BuilderClass = typeof Builder;
    type BuilderContainerClass = typeof BuilderContainer;
    abstract class BuilderContainerPrivate {
        static $gtype: GObject.GType<BuilderContainerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type BuilderInitrdClass = typeof BuilderInitrd;
    abstract class BuilderInitrdPrivate {
        static $gtype: GObject.GType<BuilderInitrdPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type BuilderMachineClass = typeof BuilderMachine;
    abstract class BuilderMachinePrivate {
        static $gtype: GObject.GType<BuilderMachinePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class BuilderPrivate {
        static $gtype: GObject.GType<BuilderPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ConfigClass = typeof Config;
    type ConfigDiskClass = typeof ConfigDisk;
    abstract class ConfigDiskPrivate {
        static $gtype: GObject.GType<ConfigDiskPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ConfigInitrdClass = typeof ConfigInitrd;
    abstract class ConfigInitrdPrivate {
        static $gtype: GObject.GType<ConfigInitrdPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ConfigInteractiveClass = typeof ConfigInteractive;
    abstract class ConfigInteractivePrivate {
        static $gtype: GObject.GType<ConfigInteractivePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ConfigMountClass = typeof ConfigMount;
    type ConfigMountFileClass = typeof ConfigMountFile;
    abstract class ConfigMountFilePrivate {
        static $gtype: GObject.GType<ConfigMountFilePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ConfigMountGuestBindClass = typeof ConfigMountGuestBind;
    abstract class ConfigMountGuestBindPrivate {
        static $gtype: GObject.GType<ConfigMountGuestBindPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ConfigMountHostBindClass = typeof ConfigMountHostBind;
    abstract class ConfigMountHostBindPrivate {
        static $gtype: GObject.GType<ConfigMountHostBindPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ConfigMountHostImageClass = typeof ConfigMountHostImage;
    abstract class ConfigMountHostImagePrivate {
        static $gtype: GObject.GType<ConfigMountHostImagePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class ConfigMountPrivate {
        static $gtype: GObject.GType<ConfigMountPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ConfigMountRamClass = typeof ConfigMountRam;
    abstract class ConfigMountRamPrivate {
        static $gtype: GObject.GType<ConfigMountRamPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ConfigNetworkAddressClass = typeof ConfigNetworkAddress;
    abstract class ConfigNetworkAddressPrivate {
        static $gtype: GObject.GType<ConfigNetworkAddressPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ConfigNetworkClass = typeof ConfigNetwork;
    type ConfigNetworkFilterrefClass = typeof ConfigNetworkFilterref;
    type ConfigNetworkFilterrefParameterClass = typeof ConfigNetworkFilterrefParameter;
    abstract class ConfigNetworkFilterrefParameterPrivate {
        static $gtype: GObject.GType<ConfigNetworkFilterrefParameterPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class ConfigNetworkFilterrefPrivate {
        static $gtype: GObject.GType<ConfigNetworkFilterrefPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class ConfigNetworkPrivate {
        static $gtype: GObject.GType<ConfigNetworkPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ConfigNetworkRouteClass = typeof ConfigNetworkRoute;
    abstract class ConfigNetworkRoutePrivate {
        static $gtype: GObject.GType<ConfigNetworkRoutePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class ConfigPrivate {
        static $gtype: GObject.GType<ConfigPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ConfigServiceClass = typeof ConfigService;
    type ConfigServiceGenericClass = typeof ConfigServiceGeneric;
    abstract class ConfigServiceGenericPrivate {
        static $gtype: GObject.GType<ConfigServiceGenericPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class ConfigServicePrivate {
        static $gtype: GObject.GType<ConfigServicePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ConfigServiceSystemdClass = typeof ConfigServiceSystemd;
    abstract class ConfigServiceSystemdPrivate {
        static $gtype: GObject.GType<ConfigServiceSystemdPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ConsoleClass = typeof Console;
    abstract class ConsolePrivate {
        static $gtype: GObject.GType<ConsolePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ConsoleRawClass = typeof ConsoleRaw;
    abstract class ConsoleRawPrivate {
        static $gtype: GObject.GType<ConsoleRawPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ConsoleRpcClass = typeof ConsoleRpc;
    abstract class ConsoleRpcPrivate {
        static $gtype: GObject.GType<ConsoleRpcPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ContextClass = typeof Context;
    type ContextInteractiveClass = typeof ContextInteractive;
    abstract class ContextInteractivePrivate {
        static $gtype: GObject.GType<ContextInteractivePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class ContextPrivate {
        static $gtype: GObject.GType<ContextPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ContextServiceClass = typeof ContextService;
    abstract class ContextServicePrivate {
        static $gtype: GObject.GType<ContextServicePrivate>;

        // Constructors

        _init(...args: any[]): void;
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

export default LibvirtSandbox;

// END
