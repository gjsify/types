/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type libxml2 from '@girs/libxml2-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace LibvirtGConfig {
    /**
     * LibvirtGConfig-1.0
     */

    export namespace DomainAudioBackend {
        export const $gtype: GObject.GType<DomainAudioBackend>;
    }

    enum DomainAudioBackend {
        NONE,
        ALSA,
        COREAUDIO,
        JACK,
        OSS,
        PULSEAUDIO,
        SDL,
        SPICE,
        FILE,
    }

    export namespace DomainChannelTargetType {
        export const $gtype: GObject.GType<DomainChannelTargetType>;
    }

    enum DomainChannelTargetType {
        GUESTFWD,
        VIRTIO,
        SPICEPORT,
    }

    export namespace DomainClockOffset {
        export const $gtype: GObject.GType<DomainClockOffset>;
    }

    enum DomainClockOffset {
        UTC,
        LOCALTIME,
        TIMEZONE,
        VARIABLE,
    }

    export namespace DomainConsoleTargetType {
        export const $gtype: GObject.GType<DomainConsoleTargetType>;
    }

    enum DomainConsoleTargetType {
        XEN,
        SERIAL,
        UML,
        VIRTIO,
        LXC,
        OPENVZ,
    }

    export namespace DomainControllerUsbModel {
        export const $gtype: GObject.GType<DomainControllerUsbModel>;
    }

    enum DomainControllerUsbModel {
        PIIX3_UHCI,
        PIIX4_UHCI,
        EHCI,
        ICH9_EHCI1,
        ICH9_UHCI1,
        ICH9_UHCI2,
        ICH9_UHCI3,
        VT82C686B_UHCI,
        PCI_OHCI,
        QEMU_XHCI,
    }

    export namespace DomainCpuFeaturePolicy {
        export const $gtype: GObject.GType<DomainCpuFeaturePolicy>;
    }

    enum DomainCpuFeaturePolicy {
        FORCE,
        REQUIRE,
        OPTIONAL,
        DISABLE,
        FORBID,
    }

    export namespace DomainCpuMatchPolicy {
        export const $gtype: GObject.GType<DomainCpuMatchPolicy>;
    }

    enum DomainCpuMatchPolicy {
        MINIMUM,
        EXACT,
        STRICT,
    }

    export namespace DomainCpuMode {
        export const $gtype: GObject.GType<DomainCpuMode>;
    }

    enum DomainCpuMode {
        CUSTOM,
        HOST_MODEL,
        HOST_PASSTHROUGH,
    }

    export namespace DomainDiskBus {
        export const $gtype: GObject.GType<DomainDiskBus>;
    }

    enum DomainDiskBus {
        IDE,
        FDC,
        SCSI,
        VIRTIO,
        XEN,
        USB,
        UML,
        SATA,
    }

    export namespace DomainDiskCacheType {
        export const $gtype: GObject.GType<DomainDiskCacheType>;
    }

    enum DomainDiskCacheType {
        DEFAULT,
        NONE,
        WRITETHROUGH,
        WRITEBACK,
        DIRECTSYNC,
        UNSAFE,
    }

    export namespace DomainDiskDriverDiscard {
        export const $gtype: GObject.GType<DomainDiskDriverDiscard>;
    }

    enum DomainDiskDriverDiscard {
        UNMAP,
        IGNORE,
    }

    export namespace DomainDiskDriverErrorPolicy {
        export const $gtype: GObject.GType<DomainDiskDriverErrorPolicy>;
    }

    enum DomainDiskDriverErrorPolicy {
        STOP,
        REPORT,
        IGNORE,
        ENOSPACE,
    }

    export namespace DomainDiskDriverIoPolicy {
        export const $gtype: GObject.GType<DomainDiskDriverIoPolicy>;
    }

    enum DomainDiskDriverIoPolicy {
        THREADS,
        NATIVE,
    }

    export namespace DomainDiskFormat {
        export const $gtype: GObject.GType<DomainDiskFormat>;
    }

    enum DomainDiskFormat {
        RAW,
        DIR,
        BOCHS,
        CLOOP,
        COW,
        DMG,
        ISO,
        QCOW,
        QCOW2,
        QED,
        VMDK,
        VPC,
        FAT,
        VHD,
    }

    export namespace DomainDiskGuestDeviceType {
        export const $gtype: GObject.GType<DomainDiskGuestDeviceType>;
    }

    enum DomainDiskGuestDeviceType {
        DISK,
        FLOPPY,
        CDROM,
    }

    export namespace DomainDiskSnapshotType {
        export const $gtype: GObject.GType<DomainDiskSnapshotType>;
    }

    enum DomainDiskSnapshotType {
        NO,
        INTERNAL,
        EXTERNAL,
    }

    export namespace DomainDiskStartupPolicy {
        export const $gtype: GObject.GType<DomainDiskStartupPolicy>;
    }

    enum DomainDiskStartupPolicy {
        MANDATORY,
        REQUISITE,
        OPTIONAL,
    }

    export namespace DomainDiskType {
        export const $gtype: GObject.GType<DomainDiskType>;
    }

    enum DomainDiskType {
        FILE,
        BLOCK,
        DIR,
        NETWORK,
    }

    export namespace DomainFilesysAccessType {
        export const $gtype: GObject.GType<DomainFilesysAccessType>;
    }

    enum DomainFilesysAccessType {
        PASSTHROUGH,
        MAPPED,
        SQUASH,
    }

    export namespace DomainFilesysDriverType {
        export const $gtype: GObject.GType<DomainFilesysDriverType>;
    }

    enum DomainFilesysDriverType {
        DEFAULT,
        PATH,
        HANDLE,
        LOOP,
        NBD,
        PLOOP,
    }

    export namespace DomainFilesysType {
        export const $gtype: GObject.GType<DomainFilesysType>;
    }

    enum DomainFilesysType {
        MOUNT,
        BLOCK,
        FILE,
        TEMPLATE,
        RAM,
        BIND,
    }

    export namespace DomainGraphicsSpiceImageCompression {
        export const $gtype: GObject.GType<DomainGraphicsSpiceImageCompression>;
    }

    enum DomainGraphicsSpiceImageCompression {
        AUTO_GLZ,
        AUTO_LZ,
        QUIC,
        GLZ,
        LZ,
        OFF,
    }

    export namespace DomainInputBus {
        export const $gtype: GObject.GType<DomainInputBus>;
    }

    enum DomainInputBus {
        PS2,
        USB,
        XEN,
    }

    export namespace DomainInputDeviceType {
        export const $gtype: GObject.GType<DomainInputDeviceType>;
    }

    enum DomainInputDeviceType {
        MOUSE,
        TABLET,
        KEYBOARD,
    }

    export namespace DomainInterfaceLinkState {
        export const $gtype: GObject.GType<DomainInterfaceLinkState>;
    }

    enum DomainInterfaceLinkState {
        DEFAULT,
        UP,
        DOWN,
    }

    export namespace DomainLifecycleAction {
        export const $gtype: GObject.GType<DomainLifecycleAction>;
    }

    enum DomainLifecycleAction {
        DESTROY,
        RESTART,
        PRESERVE,
        RENAME_RESTART,
        COREDUMP_DESTROY,
        COREDUMP_RESTART,
    }

    export namespace DomainLifecycleEvent {
        export const $gtype: GObject.GType<DomainLifecycleEvent>;
    }

    enum DomainLifecycleEvent {
        ON_POWEROFF,
        ON_REBOOT,
        ON_CRASH,
    }

    export namespace DomainMemballoonModel {
        export const $gtype: GObject.GType<DomainMemballoonModel>;
    }

    enum DomainMemballoonModel {
        NONE,
        VIRTIO,
    }

    export namespace DomainOsBootDevice {
        export const $gtype: GObject.GType<DomainOsBootDevice>;
    }

    enum DomainOsBootDevice {
        FD,
        HD,
        CDROM,
        NETWORK,
    }

    export namespace DomainOsFirmware {
        export const $gtype: GObject.GType<DomainOsFirmware>;
    }

    enum DomainOsFirmware {
        BIOS,
        EFI,
    }

    export namespace DomainOsSmBiosMode {
        export const $gtype: GObject.GType<DomainOsSmBiosMode>;
    }

    enum DomainOsSmBiosMode {
        EMULATE,
        HOST,
        SYSINFO,
    }

    export namespace DomainOsType {
        export const $gtype: GObject.GType<DomainOsType>;
    }

    enum DomainOsType {
        HVM,
        LINUX,
        EXE,
        XEN,
        UML,
    }

    export namespace DomainRedirdevBus {
        export const $gtype: GObject.GType<DomainRedirdevBus>;
    }

    enum DomainRedirdevBus {
        USB,
    }

    export namespace DomainSeclabelType {
        export const $gtype: GObject.GType<DomainSeclabelType>;
    }

    enum DomainSeclabelType {
        DYNAMIC,
        STATIC,
    }

    export namespace DomainSnapshotDomainState {
        export const $gtype: GObject.GType<DomainSnapshotDomainState>;
    }

    enum DomainSnapshotDomainState {
        NOSTATE,
        RUNNING,
        BLOCKED,
        PAUSED,
        SHUTDOWN,
        SHUTOFF,
        CRASHED,
        PMSUSPENDED,
        DISK_SNAPSHOT,
    }

    export namespace DomainSnapshotMemoryState {
        export const $gtype: GObject.GType<DomainSnapshotMemoryState>;
    }

    enum DomainSnapshotMemoryState {
        NONE,
        INTERNAL,
        EXTERNAL,
    }

    export namespace DomainSoundModel {
        export const $gtype: GObject.GType<DomainSoundModel>;
    }

    enum DomainSoundModel {
        SB16,
        ES1370,
        PCSPK,
        AC97,
        ICH6,
        ICH9,
    }

    export namespace DomainTimerTickPolicy {
        export const $gtype: GObject.GType<DomainTimerTickPolicy>;
    }

    enum DomainTimerTickPolicy {
        DELAY,
        CATCHUP,
        MERGE,
        DISCARD,
    }

    export namespace DomainVideoModel {
        export const $gtype: GObject.GType<DomainVideoModel>;
    }

    enum DomainVideoModel {
        VGA,
        CIRRUS,
        VMVGA,
        XEN,
        VBOX,
        QXL,
        VIRTIO,
        BOCHS,
    }

    export namespace DomainVirtType {
        export const $gtype: GObject.GType<DomainVirtType>;
    }

    enum DomainVirtType {
        QEMU,
        KQEMU,
        KVM,
        XEN,
        LXC,
        UML,
        OPENVZ,
        VSERVER,
        LDOM,
        TEST,
        VMWARE,
        HYPERV,
        VBOX,
        ONE,
        PHYP,
    }

    export namespace StoragePoolType {
        export const $gtype: GObject.GType<StoragePoolType>;
    }

    enum StoragePoolType {
        DIR,
        FS,
        NETFS,
        LOGICAL,
        DISK,
        ISCSI,
        SCSI,
        MPATH,
    }
    function init(argv?: string[] | null): string[] | null;
    function init_check(argv?: string[] | null): [boolean, string[] | null];

    export namespace StorageVolTargetFeatures {
        export const $gtype: GObject.GType<StorageVolTargetFeatures>;
    }

    enum StorageVolTargetFeatures {
        REFCOUNT,
    }
    module Capabilities {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class Capabilities extends Object {
        static $gtype: GObject.GType<Capabilities>;

        // Constructors

        constructor(properties?: Partial<Capabilities.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Capabilities;

        static new_from_xml(xml: string): Capabilities;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        /**
         * Gets the list of guest capabilities.
         * @returns a newly allocated #GList of #GVirConfigCapabilitiesGuest.
         */
        get_guests(): CapabilitiesGuest[];
        /**
         * Gets the host capabilities.
         * @returns a new #GVirConfigCapabilitiesHost.
         */
        get_host(): CapabilitiesHost;
    }

    module CapabilitiesCpu {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class CapabilitiesCpu extends Object {
        static $gtype: GObject.GType<CapabilitiesCpu>;

        // Constructors

        constructor(properties?: Partial<CapabilitiesCpu.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Virtual methods

        /**
         * Gets the features of this CPU.
         */
        vfunc_get_features(): CapabilitiesCpuFeature[];

        // Methods

        /**
         * Adds a new feature to CPU.
         * @param feature
         */
        add_feature(feature: CapabilitiesCpuFeature): void;
        get_arch(): string;
        /**
         * Gets the features of this CPU.
         * @returns a newly allocated #GList of #GVirConfigCapabilitiesCpuFeature.
         */
        get_features(): CapabilitiesCpuFeature[];
        /**
         * Gets the model of the cpu.
         * @returns a new #GVirConfigCapabilitiesCpuModel.
         */
        get_model(): CapabilitiesCpuModel;
        /**
         * Gets the topology of the cpu.
         * @returns a new #GVirConfigCapabilitiesCpuTopology.
         */
        get_topology(): CapabilitiesCpuTopology;
        /**
         * Sets the topology of the cpu.
         * @param topology
         */
        set_topology(topology: CapabilitiesCpuTopology): void;
    }

    module CapabilitiesCpuFeature {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class CapabilitiesCpuFeature extends Object {
        static $gtype: GObject.GType<CapabilitiesCpuFeature>;

        // Constructors

        constructor(properties?: Partial<CapabilitiesCpuFeature.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        get_name(): string;
        set_name(name: string): void;
    }

    module CapabilitiesCpuModel {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class CapabilitiesCpuModel extends Object {
        static $gtype: GObject.GType<CapabilitiesCpuModel>;

        // Constructors

        constructor(properties?: Partial<CapabilitiesCpuModel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CapabilitiesCpuModel;

        static new_from_xml(xml: string): CapabilitiesCpuModel;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        get_name(): string;
        set_name(name: string): void;
    }

    module CapabilitiesCpuTopology {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class CapabilitiesCpuTopology extends Object {
        static $gtype: GObject.GType<CapabilitiesCpuTopology>;

        // Constructors

        constructor(properties?: Partial<CapabilitiesCpuTopology.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CapabilitiesCpuTopology;

        static new_from_xml(xml: string): CapabilitiesCpuTopology;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        get_cores(): number;
        get_sockets(): number;
        get_threads(): number;
        set_cores(cores: number): void;
        set_sockets(sockets: number): void;
        set_threads(threads: number): void;
    }

    module CapabilitiesGuest {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class CapabilitiesGuest extends Object {
        static $gtype: GObject.GType<CapabilitiesGuest>;

        // Constructors

        constructor(properties?: Partial<CapabilitiesGuest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        /**
         * Gets the CPU architecture capabilities of the guest.
         * @returns a new #GVirConfigCapabilitiesGuestArch.
         */
        get_arch(): CapabilitiesGuestArch;
        /**
         * Gets the CPU features for this guest.
         * @returns a newly allocated #GList of #GVirConfigCapabilitiesGuestFeature.
         */
        get_features(): CapabilitiesGuestFeature[];
        get_os_type(): DomainOsType;
    }

    module CapabilitiesGuestArch {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class CapabilitiesGuestArch extends Object {
        static $gtype: GObject.GType<CapabilitiesGuestArch>;

        // Constructors

        constructor(properties?: Partial<CapabilitiesGuestArch.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        /**
         * Gets the possible domains for this architecture.
         * @returns a newly allocated #GList of #GVirConfigCapabilitiesGuestDomain.
         */
        get_domains(): CapabilitiesGuestDomain[];
        get_emulator(): string;
        get_name(): string;
    }

    module CapabilitiesGuestDomain {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class CapabilitiesGuestDomain extends Object {
        static $gtype: GObject.GType<CapabilitiesGuestDomain>;

        // Constructors

        constructor(properties?: Partial<CapabilitiesGuestDomain.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        get_emulator(): string;
        get_virt_type(): DomainVirtType;
    }

    module CapabilitiesGuestFeature {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class CapabilitiesGuestFeature extends Object {
        static $gtype: GObject.GType<CapabilitiesGuestFeature>;

        // Constructors

        constructor(properties?: Partial<CapabilitiesGuestFeature.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        get_name(): string;
    }

    module CapabilitiesHost {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class CapabilitiesHost extends Object {
        static $gtype: GObject.GType<CapabilitiesHost>;

        // Constructors

        constructor(properties?: Partial<CapabilitiesHost.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        /**
         * Gets the CPU capabilities of the host.
         * @returns a new #GVirConfigCapabilitiesCpu.
         */
        get_cpu(): CapabilitiesCpu;
        /**
         * Get the security models listed in `host` capabilities.
         * @returns a newly allocated #GList of #GVirConfigCapabilitiesHostSecModel.
         */
        get_secmodels(): CapabilitiesHostSecModel[];
        get_uuid(): string;
    }

    module CapabilitiesHostSecModel {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class CapabilitiesHostSecModel extends Object {
        static $gtype: GObject.GType<CapabilitiesHostSecModel>;

        // Constructors

        constructor(properties?: Partial<CapabilitiesHostSecModel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        get_doi(): string;
        get_model(): string;
    }

    module Domain {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {
            current_memory: number;
            currentMemory: number;
            description: string;
            features: string[];
            memory: number;
            name: string;
            title: string;
            uuid: string;
            vcpu: number;
        }
    }

    class Domain extends Object {
        static $gtype: GObject.GType<Domain>;

        // Properties

        get current_memory(): number;
        set current_memory(val: number);
        get currentMemory(): number;
        set currentMemory(val: number);
        get description(): string;
        set description(val: string);
        get features(): string[];
        set features(val: string[]);
        get memory(): number;
        set memory(val: number);
        get name(): string;
        set name(val: string);
        get title(): string;
        set title(val: string);
        get uuid(): string;
        set uuid(val: string);
        get vcpu(): number;
        set vcpu(val: number);

        // Constructors

        constructor(properties?: Partial<Domain.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Domain;

        static new_from_xml(xml: string): Domain;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        add_device(device: DomainDevice): void;
        /**
         * Gets the clock configuration of `domain`
         * @returns A #GVirConfigDomainClock. The returned object should be unreffed with g_object_unref() when no longer needed.
         */
        get_clock(): DomainClock;
        /**
         * Gets the CPU configuration of `domain`
         * @returns A #GVirConfigDomainCpu. The returned object should be unreffed with g_object_unref() when no longer needed.
         */
        get_cpu(): DomainCpu;
        get_current_memory(): number;
        get_custom_xml(ns_uri: string): string;
        get_description(): string;
        /**
         * Gets the list of devices attached to `domain`.  The returned list should
         * be freed with g_list_free(), after its elements have been unreffed with
         * g_object_unref().
         * @returns a newly allocated #GList of #GVirConfigDomainDevice.
         */
        get_devices(): DomainDevice[];
        get_features(): string[];
        get_memory(): number;
        get_name(): string;
        /**
         * Gets the operating system configuration of `domain`
         * @returns A #GVirConfigDomainOs. The returned object should be unreffed with g_object_unref() when no longer needed.
         */
        get_os(): DomainOs;
        get_title(): string;
        get_uuid(): string;
        get_vcpus(): number;
        get_virt_type(): DomainVirtType;
        set_clock(klock?: DomainClock | null): void;
        set_cpu(cpu?: DomainCpu | null): void;
        /**
         * Sets the current amount of RAM allocated to `domain` in kilobytes (i.e.
         * blocks of 1024 bytes). This can be set to less than the maximum domain
         * memory to allow to balloon the guest memory on the fly. Be aware that
         * libvirt will set it automatically if it's not explicitly set, which means
         * you may need to set this value in addition to 'memory' if you want to
         * change the available domain memory after creation.
         * @param memory The current amount of RAM in kilobytes.
         */
        set_current_memory(memory: number): void;
        set_custom_xml(xml: string, ns: string, ns_uri: string): boolean;
        set_custom_xml_ns_children(xml: string, ns: string, ns_uri: string): boolean;
        set_description(description?: string | null): void;
        set_devices(devices: DomainDevice[]): void;
        set_features(features: string[]): void;
        set_lifecycle(event: DomainLifecycleEvent, action: DomainLifecycleAction): void;
        /**
         * Sets the maximum amount of RAM allocated to `domain` in kilobytes (i.e.
         * blocks of 1024 bytes).
         * @param memory The maximum amount of RAM in kilobytes.
         */
        set_memory(memory: number): void;
        set_name(name?: string | null): void;
        set_os(os?: DomainOs | null): void;
        set_power_management(pm?: DomainPowerManagement | null): void;
        set_seclabel(seclabel?: DomainSeclabel | null): void;
        /**
         * Sets the title of the domain. This is an optional short textual description of the domain. Passing a NULL `title`
         * unsets the current domain title.
         * @param title title of the domain
         */
        set_title(title?: string | null): void;
        set_uuid(uuid?: string | null): void;
        set_vcpus(vcpu_count: number): void;
        set_virt_type(type: DomainVirtType): void;
    }

    module DomainAddress {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    abstract class DomainAddress extends Object {
        static $gtype: GObject.GType<DomainAddress>;

        // Constructors

        constructor(properties?: Partial<DomainAddress.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module DomainAddressPci {
        // Constructor properties interface

        interface ConstructorProps extends DomainAddress.ConstructorProps {}
    }

    class DomainAddressPci extends DomainAddress {
        static $gtype: GObject.GType<DomainAddressPci>;

        // Constructors

        constructor(properties?: Partial<DomainAddressPci.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainAddressPci;

        static new_from_xml(xml: string): DomainAddressPci;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        get_bus(): number;
        get_domain(): number;
        get_function(): number;
        get_multifunction(): boolean;
        get_slot(): number;
        set_bus(bus: number): void;
        set_domain(pci_domain: number): void;
        set_function(_function: number): void;
        set_multifunction(multifunction: boolean): void;
        set_slot(slot: number): void;
    }

    module DomainAddressUsb {
        // Constructor properties interface

        interface ConstructorProps extends DomainAddress.ConstructorProps {}
    }

    class DomainAddressUsb extends DomainAddress {
        static $gtype: GObject.GType<DomainAddressUsb>;

        // Constructors

        constructor(properties?: Partial<DomainAddressUsb.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainAddressUsb;

        static new_from_xml(xml: string): DomainAddressUsb;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        set_bus(bus: number): void;
        set_port(port: string): void;
    }

    module DomainAudio {
        // Constructor properties interface

        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }

    class DomainAudio extends DomainDevice {
        static $gtype: GObject.GType<DomainAudio>;

        // Constructors

        constructor(properties?: Partial<DomainAudio.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainAudio;

        static new_from_xml(xml: string): DomainAudio;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        set_backend(backend: DomainAudioBackend): void;
        set_server_name(server_name: string): void;
    }

    module DomainCapabilities {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class DomainCapabilities extends Object {
        static $gtype: GObject.GType<DomainCapabilities>;

        // Constructors

        constructor(properties?: Partial<DomainCapabilities.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainCapabilities;

        static new_from_xml(xml: string): DomainCapabilities;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        /**
         * Gets the `os` associated with the `domain_caps`.
         * @returns a new #GVirConfigDomainCapabilitiesOs.
         */
        get_os(): DomainCapabilitiesOs;
    }

    module DomainCapabilitiesOs {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class DomainCapabilitiesOs extends Object {
        static $gtype: GObject.GType<DomainCapabilitiesOs>;

        // Constructors

        constructor(properties?: Partial<DomainCapabilitiesOs.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Virtual methods

        /**
         * Gets the firmwares supported by `os`. The returned list should be freed with
         * g_list_free().
         */
        vfunc_get_firmwares(): DomainOsFirmware[];

        // Methods

        /**
         * Gets the firmwares supported by `os`. The returned list should be freed with
         * g_list_free().
         * @returns a newly allocated #GList of #GVirConfigDomainOsFirmware.
         */
        get_firmwares(): DomainOsFirmware[];
    }

    module DomainChannel {
        // Constructor properties interface

        interface ConstructorProps extends DomainChardev.ConstructorProps {}
    }

    class DomainChannel extends DomainChardev {
        static $gtype: GObject.GType<DomainChannel>;

        // Constructors

        constructor(properties?: Partial<DomainChannel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainChannel;

        static new_from_xml(xml: string): DomainChannel;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        get_target_name(): string;
        get_target_type(): DomainChannelTargetType;
        set_target_name(name: string): void;
        set_target_type(type: DomainChannelTargetType): void;
    }

    module DomainChardev {
        // Constructor properties interface

        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }

    abstract class DomainChardev extends DomainDevice {
        static $gtype: GObject.GType<DomainChardev>;

        // Constructors

        constructor(properties?: Partial<DomainChardev.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        /**
         * Gets the source for the chardev
         * @returns the chardev source
         */
        get_source(): DomainChardevSource;
        set_source(source: DomainChardevSource): void;
    }

    module DomainChardevSource {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    abstract class DomainChardevSource extends Object {
        static $gtype: GObject.GType<DomainChardevSource>;

        // Constructors

        constructor(properties?: Partial<DomainChardevSource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module DomainChardevSourcePty {
        // Constructor properties interface

        interface ConstructorProps extends DomainChardevSource.ConstructorProps {}
    }

    class DomainChardevSourcePty extends DomainChardevSource {
        static $gtype: GObject.GType<DomainChardevSourcePty>;

        // Constructors

        constructor(properties?: Partial<DomainChardevSourcePty.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainChardevSourcePty;

        static new_from_xml(xml: string): DomainChardevSourcePty;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        get_path(): string;
        set_path(path: string): void;
    }

    module DomainChardevSourceSpicePort {
        // Constructor properties interface

        interface ConstructorProps extends DomainChardevSource.ConstructorProps {}
    }

    class DomainChardevSourceSpicePort extends DomainChardevSource {
        static $gtype: GObject.GType<DomainChardevSourceSpicePort>;

        // Constructors

        constructor(properties?: Partial<DomainChardevSourceSpicePort.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainChardevSourceSpicePort;

        static new_from_xml(xml: string): DomainChardevSourceSpicePort;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        get_channel(): string;
        set_channel(channel: string): void;
    }

    module DomainChardevSourceSpiceVmc {
        // Constructor properties interface

        interface ConstructorProps extends DomainChardevSource.ConstructorProps {}
    }

    class DomainChardevSourceSpiceVmc extends DomainChardevSource {
        static $gtype: GObject.GType<DomainChardevSourceSpiceVmc>;

        // Constructors

        constructor(properties?: Partial<DomainChardevSourceSpiceVmc.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainChardevSourceSpiceVmc;

        static new_from_xml(xml: string): DomainChardevSourceSpiceVmc;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;
    }

    module DomainChardevSourceUnix {
        // Constructor properties interface

        interface ConstructorProps extends DomainChardevSource.ConstructorProps {}
    }

    class DomainChardevSourceUnix extends DomainChardevSource {
        static $gtype: GObject.GType<DomainChardevSourceUnix>;

        // Constructors

        constructor(properties?: Partial<DomainChardevSourceUnix.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainChardevSourceUnix;

        static new_from_xml(xml: string): DomainChardevSourceUnix;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;
    }

    module DomainClock {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class DomainClock extends Object {
        static $gtype: GObject.GType<DomainClock>;

        // Constructors

        constructor(properties?: Partial<DomainClock.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainClock;

        static new_from_xml(xml: string): DomainClock;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        add_timer(timer: DomainTimer): void;
        get_offset(): DomainClockOffset;
        get_timezone(): string;
        get_variable_offset(): number;
        set_offset(offset: DomainClockOffset): void;
        set_timezone(tz: string): void;
        set_variable_offset(seconds: number): void;
    }

    module DomainConsole {
        // Constructor properties interface

        interface ConstructorProps extends DomainChardev.ConstructorProps {}
    }

    class DomainConsole extends DomainChardev {
        static $gtype: GObject.GType<DomainConsole>;

        // Constructors

        constructor(properties?: Partial<DomainConsole.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainConsole;

        static new_from_xml(xml: string): DomainConsole;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        set_target_type(type: DomainConsoleTargetType): void;
    }

    module DomainController {
        // Constructor properties interface

        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }

    abstract class DomainController extends DomainDevice {
        static $gtype: GObject.GType<DomainController>;

        // Constructors

        constructor(properties?: Partial<DomainController.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        get_index(): number;
        get_ports(): number;
        set_address(address?: DomainAddress | null): void;
        set_index(index: number): void;
        set_ports(ports: number): void;
    }

    module DomainControllerUsb {
        // Constructor properties interface

        interface ConstructorProps extends DomainController.ConstructorProps {}
    }

    /**
     * The #GVirConfigDomainControllerUsb struct is an opaque data structure
     * which is used to configure USB controllers on a domain. It should only
     * be accessed via the following functions.
     */
    class DomainControllerUsb extends DomainController {
        static $gtype: GObject.GType<DomainControllerUsb>;

        // Constructors

        constructor(properties?: Partial<DomainControllerUsb.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainControllerUsb;

        static new_from_xml(xml: string): DomainControllerUsb;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        /**
         * Sets `controller` to be a companion controller of `master`. `controller`
         * will be exposed from port `startport` on `master` in the guest.
         * After this call, `controller'`s index will be set to `master'`s index.
         * @param master the master #GVirConfigDomainControllerUsb
         * @param startport the start port number
         */
        set_master(master: DomainControllerUsb, startport: number): void;
        /**
         * Sets the model of `controller` to `model`.
         * @param model the USB controller model
         */
        set_model(model: DomainControllerUsbModel): void;
    }

    module DomainCpu {
        // Constructor properties interface

        interface ConstructorProps extends CapabilitiesCpu.ConstructorProps {}
    }

    class DomainCpu extends CapabilitiesCpu {
        static $gtype: GObject.GType<DomainCpu>;

        // Constructors

        constructor(properties?: Partial<DomainCpu.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainCpu;

        static new_from_xml(xml: string): DomainCpu;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        get_match_policy(): DomainCpuMatchPolicy;
        get_mode(): DomainCpuMode;
        set_match_policy(policy: DomainCpuMatchPolicy): void;
        set_mode(mode: DomainCpuMode): void;
        set_model(model: DomainCpuModel): void;
    }

    module DomainCpuFeature {
        // Constructor properties interface

        interface ConstructorProps extends CapabilitiesCpuFeature.ConstructorProps {}
    }

    class DomainCpuFeature extends CapabilitiesCpuFeature {
        static $gtype: GObject.GType<DomainCpuFeature>;

        // Constructors

        constructor(properties?: Partial<DomainCpuFeature.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainCpuFeature;

        static new_from_xml(xml: string): DomainCpuFeature;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        get_policy(): DomainCpuFeaturePolicy;
        set_policy(policy: DomainCpuFeaturePolicy): void;
    }

    module DomainCpuModel {
        // Constructor properties interface

        interface ConstructorProps extends CapabilitiesCpuModel.ConstructorProps {}
    }

    class DomainCpuModel extends CapabilitiesCpuModel {
        static $gtype: GObject.GType<DomainCpuModel>;

        // Constructors

        constructor(properties?: Partial<DomainCpuModel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainCpuModel;

        static new_from_xml(xml: string): DomainCpuModel;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;
    }

    module DomainDevice {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class DomainDevice extends Object {
        static $gtype: GObject.GType<DomainDevice>;

        // Constructors

        constructor(properties?: Partial<DomainDevice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        get_alias(): string;
    }

    module DomainDisk {
        // Constructor properties interface

        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }

    class DomainDisk extends DomainDevice {
        static $gtype: GObject.GType<DomainDisk>;

        // Constructors

        constructor(properties?: Partial<DomainDisk.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainDisk;

        static new_from_xml(xml: string): DomainDisk;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        get_disk_type(): DomainDiskType;
        /**
         * Gets the driver configuration for `disk`.
         * @returns A #GVirConfigDomainDiskDriver. The returned object should be unreffed with g_object_unref() when no longer needed.
         */
        get_driver(): DomainDiskDriver;
        get_driver_cache(): DomainDiskCacheType;
        get_driver_format(): DomainDiskFormat;
        get_driver_name(): string;
        get_driver_type(): string;
        get_guest_device_type(): DomainDiskGuestDeviceType;
        get_snapshot_type(): DomainDiskSnapshotType;
        get_source(): string;
        get_startup_policy(): DomainDiskStartupPolicy;
        get_target_bus(): DomainDiskBus;
        get_target_dev(): string;
        /**
         * Uses `driver` as the driver configuration for `disk`.
         * @param driver a #GVirConfigDomainDiskDriver
         */
        set_driver(driver?: DomainDiskDriver | null): void;
        set_driver_cache(cache_type: DomainDiskCacheType): void;
        set_driver_format(format: DomainDiskFormat): void;
        set_driver_name(driver_name: string): void;
        set_driver_type(driver_type: string): void;
        set_guest_device_type(type: DomainDiskGuestDeviceType): void;
        set_readonly(readonly: boolean): void;
        set_snapshot_type(type: DomainDiskSnapshotType): void;
        set_source(source: string): void;
        set_startup_policy(policy: DomainDiskStartupPolicy): void;
        set_target_bus(bus: DomainDiskBus): void;
        set_target_dev(dev: string): void;
        set_type(type: DomainDiskType): void;
    }

    module DomainDiskDriver {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class DomainDiskDriver extends Object {
        static $gtype: GObject.GType<DomainDiskDriver>;

        // Constructors

        constructor(properties?: Partial<DomainDiskDriver.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainDiskDriver;

        static new_from_xml(xml: string): DomainDiskDriver;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        get_cache(): DomainDiskCacheType;
        get_copy_on_read(): boolean;
        get_discard(): DomainDiskDriverDiscard;
        get_error_policy(): DomainDiskDriverErrorPolicy;
        get_format(): DomainDiskFormat;
        get_io_policy(): DomainDiskDriverIoPolicy;
        get_name(): string;
        set_cache(cache_type: DomainDiskCacheType): void;
        set_copy_on_read(copy_on_read: boolean): void;
        set_discard(discard: DomainDiskDriverDiscard): void;
        set_error_policy(policy: DomainDiskDriverErrorPolicy): void;
        set_format(format: DomainDiskFormat): void;
        set_io_policy(policy: DomainDiskDriverIoPolicy): void;
        set_name(name: string): void;
    }

    module DomainFilesys {
        // Constructor properties interface

        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }

    class DomainFilesys extends DomainDevice {
        static $gtype: GObject.GType<DomainFilesys>;

        // Constructors

        constructor(properties?: Partial<DomainFilesys.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainFilesys;

        static new_from_xml(xml: string): DomainFilesys;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        set_access_type(type: DomainFilesysAccessType): void;
        set_driver_format(format: DomainDiskFormat): void;
        set_driver_type(type: DomainFilesysDriverType): void;
        set_ram_usage(bytes: number): void;
        set_readonly(readonly: boolean): void;
        set_source(source: string): void;
        set_target(target: string): void;
        set_type(type: DomainFilesysType): void;
    }

    module DomainGraphics {
        // Constructor properties interface

        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }

    abstract class DomainGraphics extends DomainDevice {
        static $gtype: GObject.GType<DomainGraphics>;

        // Constructors

        constructor(properties?: Partial<DomainGraphics.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module DomainGraphicsDBus {
        // Constructor properties interface

        interface ConstructorProps extends DomainGraphics.ConstructorProps {}
    }

    class DomainGraphicsDBus extends DomainGraphics {
        static $gtype: GObject.GType<DomainGraphicsDBus>;

        // Constructors

        constructor(properties?: Partial<DomainGraphicsDBus.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainGraphicsDBus;

        static new_from_xml(xml: string): DomainGraphicsDBus;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        get_address(): string;
        set_address(address: string): void;
        set_gl(gl: boolean): void;
    }

    module DomainGraphicsDesktop {
        // Constructor properties interface

        interface ConstructorProps extends DomainGraphics.ConstructorProps {}
    }

    class DomainGraphicsDesktop extends DomainGraphics {
        static $gtype: GObject.GType<DomainGraphicsDesktop>;

        // Constructors

        constructor(properties?: Partial<DomainGraphicsDesktop.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainGraphicsDesktop;

        static new_from_xml(xml: string): DomainGraphicsDesktop;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        get_display(): string;
        get_fullscreen(): boolean;
        set_display(disp: string): void;
        set_fullscreen(fullscreen: boolean): void;
    }

    module DomainGraphicsRdp {
        // Constructor properties interface

        interface ConstructorProps extends DomainGraphics.ConstructorProps {}
    }

    class DomainGraphicsRdp extends DomainGraphics {
        static $gtype: GObject.GType<DomainGraphicsRdp>;

        // Constructors

        constructor(properties?: Partial<DomainGraphicsRdp.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainGraphicsRdp;

        static new_from_xml(xml: string): DomainGraphicsRdp;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        get_multi_user(): boolean;
        get_port(): number;
        get_replace_user(): boolean;
        set_autoport(autoport: boolean): void;
        set_multi_user(multi_user: boolean): void;
        set_port(port: number): void;
        set_replace_user(replace_user: boolean): void;
    }

    module DomainGraphicsSdl {
        // Constructor properties interface

        interface ConstructorProps extends DomainGraphics.ConstructorProps {}
    }

    class DomainGraphicsSdl extends DomainGraphics {
        static $gtype: GObject.GType<DomainGraphicsSdl>;

        // Constructors

        constructor(properties?: Partial<DomainGraphicsSdl.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainGraphicsSdl;

        static new_from_xml(xml: string): DomainGraphicsSdl;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        set_display(disp: string): void;
        set_fullscreen(fullscreen: boolean): void;
        set_xauthority(path: string): void;
    }

    module DomainGraphicsSpice {
        // Constructor properties interface

        interface ConstructorProps extends DomainGraphics.ConstructorProps {}
    }

    class DomainGraphicsSpice extends DomainGraphics {
        static $gtype: GObject.GType<DomainGraphicsSpice>;

        // Constructors

        constructor(properties?: Partial<DomainGraphicsSpice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainGraphicsSpice;

        static new_from_xml(xml: string): DomainGraphicsSpice;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        get_image_compression(): DomainGraphicsSpiceImageCompression;
        get_port(): number;
        set_autoport(autoport: boolean): void;
        set_gl(gl: boolean): void;
        set_image_compression(compression: DomainGraphicsSpiceImageCompression): void;
        set_password(password: string): void;
        set_port(port: number): void;
        set_tls_port(port: number): void;
    }

    module DomainGraphicsVnc {
        // Constructor properties interface

        interface ConstructorProps extends DomainGraphics.ConstructorProps {}
    }

    class DomainGraphicsVnc extends DomainGraphics {
        static $gtype: GObject.GType<DomainGraphicsVnc>;

        // Constructors

        constructor(properties?: Partial<DomainGraphicsVnc.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainGraphicsVnc;

        static new_from_xml(xml: string): DomainGraphicsVnc;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        get_port(): number;
        get_socket(): string;
        set_autoport(autoport: boolean): void;
        set_password(password: string): void;
        set_port(port: number): void;
        set_socket(socket: string): void;
    }

    module DomainHostdev {
        // Constructor properties interface

        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }

    abstract class DomainHostdev extends DomainDevice {
        static $gtype: GObject.GType<DomainHostdev>;

        // Constructors

        constructor(properties?: Partial<DomainHostdev.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        get_boot_order(): number;
        get_readonly(): boolean;
        get_shareable(): boolean;
        /**
         * If a positive integer is passed as `order,` `hostdev` is marked bootable and
         * boot order set to `order,` otherwise `hostdev` is marked to be unbootable.
         * @param order the boot order
         */
        set_boot_order(order: number): void;
        /**
         * Set the readonly status of `hostdev` to `readonly`.
         * @param readonly the new readonly status
         */
        set_readonly(readonly: boolean): void;
        /**
         * Set whether or not `hostdev` is shared between domains.
         * @param shareable the new shareable status
         */
        set_shareable(shareable: boolean): void;
    }

    module DomainHostdevPci {
        // Constructor properties interface

        interface ConstructorProps extends DomainHostdev.ConstructorProps {}
    }

    class DomainHostdevPci extends DomainHostdev {
        static $gtype: GObject.GType<DomainHostdevPci>;

        // Constructors

        constructor(properties?: Partial<DomainHostdevPci.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainHostdevPci;

        static new_from_xml(xml: string): DomainHostdevPci;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        /**
         * Gets the address associated with `hostdev`.
         * @returns a new #GVirConfigDomainAddressPci, or NULL if no address is associated with @hostdev. The returned object should be unreffed with g_object_unref() when no longer needed.
         */
        get_address(): DomainAddressPci;
        get_managed(): boolean;
        get_rom_bar(): boolean;
        get_rom_file(): string;
        set_address(address: DomainAddressPci): void;
        set_managed(managed: boolean): void;
        set_rom_bar(bar: boolean): void;
        set_rom_file(file: string): void;
    }

    module DomainInput {
        // Constructor properties interface

        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }

    class DomainInput extends DomainDevice {
        static $gtype: GObject.GType<DomainInput>;

        // Constructors

        constructor(properties?: Partial<DomainInput.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainInput;

        static new_from_xml(xml: string): DomainInput;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        get_bus(): DomainInputBus;
        get_device_type(): DomainInputDeviceType;
        set_bus(bus: DomainInputBus): void;
        set_device_type(type: DomainInputDeviceType): void;
    }

    module DomainInterface {
        // Constructor properties interface

        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }

    abstract class DomainInterface extends DomainDevice {
        static $gtype: GObject.GType<DomainInterface>;

        // Constructors

        constructor(properties?: Partial<DomainInterface.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        /**
         * Gets the filterref associated with the `interface`
         * @returns A #GVirConfigDomainInterfaceFilterref. The returned object should be unreffed with g_object_unref() when no longer needed.
         */
        get_filterref(): DomainInterfaceFilterref;
        get_ifname(): string;
        get_link_state(): DomainInterfaceLinkState;
        get_mac(): string;
        get_model(): string;
        set_filterref(filterref?: DomainInterfaceFilterref | null): void;
        set_ifname(ifname: string): void;
        set_link_state(state: DomainInterfaceLinkState): void;
        set_mac(mac_address: string): void;
        set_model(model: string): void;
    }

    module DomainInterfaceBridge {
        // Constructor properties interface

        interface ConstructorProps extends DomainInterface.ConstructorProps {}
    }

    class DomainInterfaceBridge extends DomainInterface {
        static $gtype: GObject.GType<DomainInterfaceBridge>;

        // Constructors

        constructor(properties?: Partial<DomainInterfaceBridge.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainInterfaceBridge;

        static new_from_xml(xml: string): DomainInterfaceBridge;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        set_source(brname: string): void;
    }

    module DomainInterfaceFilterref {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class DomainInterfaceFilterref extends Object {
        static $gtype: GObject.GType<DomainInterfaceFilterref>;

        // Constructors

        constructor(properties?: Partial<DomainInterfaceFilterref.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainInterfaceFilterref;

        static new_from_xml(xml: string): DomainInterfaceFilterref;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        add_parameter(parameter: DomainInterfaceFilterrefParameter): void;
        get_name(): string;
        /**
         * Gets the list of parameters attached to `filterref`. The returned list should be
         * freed with g_list_free(), after its elements have been unreffed with
         * g_object_unref().
         * @returns a newly allocated #GList of #GVirConfigDomainInterfaceFilterrefParameter.
         */
        get_parameters(): DomainInterfaceFilterrefParameter[];
        set_name(filter: string): void;
    }

    module DomainInterfaceFilterrefParameter {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class DomainInterfaceFilterrefParameter extends Object {
        static $gtype: GObject.GType<DomainInterfaceFilterrefParameter>;

        // Constructors

        constructor(properties?: Partial<DomainInterfaceFilterrefParameter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainInterfaceFilterrefParameter;

        static new_from_xml(xml: string): DomainInterfaceFilterrefParameter;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        get_name(): string;
        get_value(): string;
        set_name(name: string): void;
        set_value(value: string): void;
    }

    module DomainInterfaceNetwork {
        // Constructor properties interface

        interface ConstructorProps extends DomainInterface.ConstructorProps {}
    }

    class DomainInterfaceNetwork extends DomainInterface {
        static $gtype: GObject.GType<DomainInterfaceNetwork>;

        // Constructors

        constructor(properties?: Partial<DomainInterfaceNetwork.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainInterfaceNetwork;

        static new_from_xml(xml: string): DomainInterfaceNetwork;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        set_source(source: string): void;
    }

    module DomainInterfaceUser {
        // Constructor properties interface

        interface ConstructorProps extends DomainInterface.ConstructorProps {}
    }

    class DomainInterfaceUser extends DomainInterface {
        static $gtype: GObject.GType<DomainInterfaceUser>;

        // Constructors

        constructor(properties?: Partial<DomainInterfaceUser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainInterfaceUser;

        static new_from_xml(xml: string): DomainInterfaceUser;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;
    }

    module DomainMemballoon {
        // Constructor properties interface

        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }

    class DomainMemballoon extends DomainDevice {
        static $gtype: GObject.GType<DomainMemballoon>;

        // Constructors

        constructor(properties?: Partial<DomainMemballoon.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainMemballoon;

        static new_from_xml(xml: string): DomainMemballoon;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        set_model(model: DomainMemballoonModel): void;
    }

    module DomainOs {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class DomainOs extends Object {
        static $gtype: GObject.GType<DomainOs>;

        // Constructors

        constructor(properties?: Partial<DomainOs.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainOs;

        static new_from_xml(xml: string): DomainOs;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        bios_enable_serial(enable: boolean): void;
        enable_boot_menu(enable: boolean): void;
        enable_firmware_feature(name: string, enable: boolean): void;
        get_arch(): string;
        /**
         * Gets the list of devices attached to `os`. The returned list should be
         * freed with g_list_free().
         * @returns a newly allocated #GList of #GVirConfigDomainOsBootDevice.
         */
        get_boot_devices(): DomainOsBootDevice[];
        get_firmware(): DomainOsFirmware;
        get_machine(): string;
        get_os_type(): DomainOsType;
        set_arch(arch: string): void;
        set_boot_devices(boot_devices: DomainOsBootDevice[]): void;
        set_cmdline(cmdline?: string | null): void;
        set_firmware(firmware: DomainOsFirmware): void;
        set_init(init?: string | null): void;
        set_kernel(kernel?: string | null): void;
        set_loader(loader?: string | null): void;
        set_machine(machine: string): void;
        set_os_type(type: DomainOsType): void;
        set_ramdisk(ramdisk?: string | null): void;
        set_smbios_mode(mode: DomainOsSmBiosMode): void;
    }

    module DomainParallel {
        // Constructor properties interface

        interface ConstructorProps extends DomainChardev.ConstructorProps {}
    }

    class DomainParallel extends DomainChardev {
        static $gtype: GObject.GType<DomainParallel>;

        // Constructors

        constructor(properties?: Partial<DomainParallel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainParallel;

        static new_from_xml(xml: string): DomainParallel;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;
    }

    module DomainPowerManagement {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class DomainPowerManagement extends Object {
        static $gtype: GObject.GType<DomainPowerManagement>;

        // Constructors

        constructor(properties?: Partial<DomainPowerManagement.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainPowerManagement;

        static new_from_xml(xml: string): DomainPowerManagement;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        set_disk_suspend_enabled(enabled: boolean): void;
        set_mem_suspend_enabled(enabled: boolean): void;
    }

    module DomainRedirdev {
        // Constructor properties interface

        interface ConstructorProps extends DomainChardev.ConstructorProps {}
    }

    class DomainRedirdev extends DomainChardev {
        static $gtype: GObject.GType<DomainRedirdev>;

        // Constructors

        constructor(properties?: Partial<DomainRedirdev.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainRedirdev;

        static new_from_xml(xml: string): DomainRedirdev;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        set_address(address?: DomainAddress | null): void;
        set_bus(bus: DomainRedirdevBus): void;
    }

    module DomainSeclabel {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class DomainSeclabel extends Object {
        static $gtype: GObject.GType<DomainSeclabel>;

        // Constructors

        constructor(properties?: Partial<DomainSeclabel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainSeclabel;

        static new_from_xml(xml: string): DomainSeclabel;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        set_baselabel(label?: string | null): void;
        set_label(label?: string | null): void;
        set_model(model: string): void;
        set_type(type: DomainSeclabelType): void;
    }

    module DomainSerial {
        // Constructor properties interface

        interface ConstructorProps extends DomainChardev.ConstructorProps {}
    }

    class DomainSerial extends DomainChardev {
        static $gtype: GObject.GType<DomainSerial>;

        // Constructors

        constructor(properties?: Partial<DomainSerial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainSerial;

        static new_from_xml(xml: string): DomainSerial;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;
    }

    module DomainSmartcard {
        // Constructor properties interface

        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }

    abstract class DomainSmartcard extends DomainDevice {
        static $gtype: GObject.GType<DomainSmartcard>;

        // Constructors

        constructor(properties?: Partial<DomainSmartcard.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Static methods

        static set_address(redirdev: DomainRedirdev, address?: DomainAddress | null): void;
    }

    module DomainSmartcardHost {
        // Constructor properties interface

        interface ConstructorProps extends DomainSmartcard.ConstructorProps {}
    }

    class DomainSmartcardHost extends DomainSmartcard {
        static $gtype: GObject.GType<DomainSmartcardHost>;

        // Constructors

        constructor(properties?: Partial<DomainSmartcardHost.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainSmartcardHost;

        static new_from_xml(xml: string): DomainSmartcardHost;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;
    }

    module DomainSmartcardHostCertificates {
        // Constructor properties interface

        interface ConstructorProps extends DomainSmartcard.ConstructorProps {}
    }

    class DomainSmartcardHostCertificates extends DomainSmartcard {
        static $gtype: GObject.GType<DomainSmartcardHostCertificates>;

        // Constructors

        constructor(properties?: Partial<DomainSmartcardHostCertificates.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainSmartcardHostCertificates;

        static new_from_xml(xml: string): DomainSmartcardHostCertificates;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        set_certificates(cert1?: string | null, cert2?: string | null, cert3?: string | null): void;
        set_database(path?: string | null): void;
    }

    module DomainSmartcardPassthrough {
        // Constructor properties interface

        interface ConstructorProps extends DomainSmartcard.ConstructorProps {}
    }

    class DomainSmartcardPassthrough extends DomainSmartcard {
        static $gtype: GObject.GType<DomainSmartcardPassthrough>;

        // Constructors

        constructor(properties?: Partial<DomainSmartcardPassthrough.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainSmartcardPassthrough;

        static new_from_xml(xml: string): DomainSmartcardPassthrough;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        set_source(source: DomainChardevSource): void;
    }

    module DomainSnapshot {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class DomainSnapshot extends Object {
        static $gtype: GObject.GType<DomainSnapshot>;

        // Constructors

        constructor(properties?: Partial<DomainSnapshot.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainSnapshot;

        static new_from_xml(xml: string): DomainSnapshot;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        add_disk(disk: DomainSnapshotDisk): void;
        get_creation_time(): never;
        get_description(): string;
        /**
         * Gets the list of disks attached to `snapshot`.  The returned list should
         * be freed with g_list_free(), after its elements have been unreffed with
         * g_object_unref().
         * @returns a newly allocated #GList of #GVirConfigDomainSnapshotDisk.
         */
        get_disks(): DomainSnapshotDisk[];
        /**
         * Gets the configuration of the domain `snapshot` is a snapshot of.
         * @returns A #GVirConfigDomain. The returned object should be unreffed with g_object_unref() when no longer needed.
         */
        get_domain(): Domain;
        get_memory_file(): string;
        get_memory_state(): DomainSnapshotMemoryState;
        get_name(): string;
        get_parent(): string;
        get_state(): DomainSnapshotDomainState;
        set_description(description: string): void;
        set_disks(disks: DomainSnapshotDisk[]): void;
        set_memory_file(filename: string): void;
        set_memory_state(state: DomainSnapshotMemoryState): void;
        set_name(name: string): void;
    }

    module DomainSnapshotDisk {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class DomainSnapshotDisk extends Object {
        static $gtype: GObject.GType<DomainSnapshotDisk>;

        // Constructors

        constructor(properties?: Partial<DomainSnapshotDisk.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainSnapshotDisk;

        static new_from_xml(xml: string): DomainSnapshotDisk;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        get_driver_format(): DomainDiskFormat;
        get_name(): string;
        get_snapshot_type(): DomainDiskSnapshotType;
        get_source_file(): string;
        set_driver_format(format: DomainDiskFormat): void;
        set_name(name: string): void;
        set_snapshot_type(type: DomainDiskSnapshotType): void;
        set_source_file(filename: string): void;
    }

    module DomainSound {
        // Constructor properties interface

        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }

    class DomainSound extends DomainDevice {
        static $gtype: GObject.GType<DomainSound>;

        // Constructors

        constructor(properties?: Partial<DomainSound.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainSound;

        static new_from_xml(xml: string): DomainSound;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        set_model(model: DomainSoundModel): void;
    }

    module DomainTimer {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    abstract class DomainTimer extends Object {
        static $gtype: GObject.GType<DomainTimer>;

        // Constructors

        constructor(properties?: Partial<DomainTimer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        get_present(): boolean;
        get_tick_policy(): DomainTimerTickPolicy;
        set_present(present: boolean): void;
        set_tick_policy(policy: DomainTimerTickPolicy): void;
    }

    module DomainTimerHpet {
        // Constructor properties interface

        interface ConstructorProps extends DomainTimer.ConstructorProps {}
    }

    class DomainTimerHpet extends DomainTimer {
        static $gtype: GObject.GType<DomainTimerHpet>;

        // Constructors

        constructor(properties?: Partial<DomainTimerHpet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainTimerHpet;

        static new_from_xml(xml: string): DomainTimerHpet;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;
    }

    module DomainTimerPit {
        // Constructor properties interface

        interface ConstructorProps extends DomainTimer.ConstructorProps {}
    }

    class DomainTimerPit extends DomainTimer {
        static $gtype: GObject.GType<DomainTimerPit>;

        // Constructors

        constructor(properties?: Partial<DomainTimerPit.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainTimerPit;

        static new_from_xml(xml: string): DomainTimerPit;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;
    }

    module DomainTimerRtc {
        // Constructor properties interface

        interface ConstructorProps extends DomainTimer.ConstructorProps {}
    }

    class DomainTimerRtc extends DomainTimer {
        static $gtype: GObject.GType<DomainTimerRtc>;

        // Constructors

        constructor(properties?: Partial<DomainTimerRtc.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainTimerRtc;

        static new_from_xml(xml: string): DomainTimerRtc;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;
    }

    module DomainVideo {
        // Constructor properties interface

        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }

    class DomainVideo extends DomainDevice {
        static $gtype: GObject.GType<DomainVideo>;

        // Constructors

        constructor(properties?: Partial<DomainVideo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainVideo;

        static new_from_xml(xml: string): DomainVideo;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        get_model(): DomainVideoModel;
        set_accel3d(accel3d: boolean): void;
        set_heads(head_count: number): void;
        set_model(model: DomainVideoModel): void;
        set_ram(kbytes: number): void;
        set_vgamem(kbytes: number): void;
        set_vram(kbytes: number): void;
    }

    module Interface {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class Interface extends Object {
        static $gtype: GObject.GType<Interface>;

        // Constructors

        constructor(properties?: Partial<Interface.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Interface;

        static new_from_xml(xml: string): Interface;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;
    }

    module Network {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class Network extends Object {
        static $gtype: GObject.GType<Network>;

        // Constructors

        constructor(properties?: Partial<Network.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Network;

        static new_from_xml(xml: string): Network;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;
    }

    module NetworkFilter {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class NetworkFilter extends Object {
        static $gtype: GObject.GType<NetworkFilter>;

        // Constructors

        constructor(properties?: Partial<NetworkFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): NetworkFilter;

        static new_from_xml(xml: string): NetworkFilter;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;
    }

    module NodeDevice {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class NodeDevice extends Object {
        static $gtype: GObject.GType<NodeDevice>;

        // Constructors

        constructor(properties?: Partial<NodeDevice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): NodeDevice;

        static new_from_xml(xml: string): NodeDevice;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;
    }

    module Object {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            node: any;
            schema: string;
        }
    }

    class Object extends GObject.Object {
        static $gtype: GObject.GType<Object>;

        // Properties

        get node(): any;
        get schema(): string;

        // Constructors

        constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](type: GObject.GType, root_name: string, schema: string): Object;

        static new_from_xml(type: GObject.GType, root_name: string, schema: string, xml: string): Object;

        // Static methods

        static error_quark(): GLib.Quark;

        // Methods

        get_schema(): string;
        to_xml(): string;
        validate(): void;
    }

    module Secret {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class Secret extends Object {
        static $gtype: GObject.GType<Secret>;

        // Constructors

        constructor(properties?: Partial<Secret.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Secret;

        static new_from_xml(xml: string): Secret;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;
    }

    module StoragePermissions {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class StoragePermissions extends Object {
        static $gtype: GObject.GType<StoragePermissions>;

        // Constructors

        constructor(properties?: Partial<StoragePermissions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StoragePermissions;

        static new_from_xml(xml: string): StoragePermissions;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        /**
         * Gets the numeric group ID associated with `perms`.
         * @returns numeric group ID
         */
        get_group(): number;
        /**
         * Gets the MAC label string associated with `perms`.
         * @returns MAC label string.
         */
        get_label(): string;
        /**
         * Gets the octal permission set associated with `perms`.
         * @returns permission set
         */
        get_mode(): number;
        /**
         * Gets the numeric user ID associated with `perms`.
         * @returns numeric user ID.
         */
        get_owner(): number;
        set_group(group: number): void;
        set_label(label?: string | null): void;
        set_mode(mode: number): void;
        set_owner(owner: number): void;
    }

    module StoragePool {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class StoragePool extends Object {
        static $gtype: GObject.GType<StoragePool>;

        // Constructors

        constructor(properties?: Partial<StoragePool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StoragePool;

        static new_from_xml(xml: string): StoragePool;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        /**
         * Gets the total storage allocation for the pool.
         * @returns total storage allocation in bytes.
         */
        get_allocation(): number;
        /**
         * Gets the free space available for allocating new volumes in the pool.
         * @returns free space available in bytes.
         */
        get_available(): number;
        /**
         * Gets the total storage capacity for the pool.
         * @returns total storage capacity in bytes.
         */
        get_capacity(): number;
        /**
         * Gets the name of the pool.
         * @returns name of @pool.
         */
        get_name(): string;
        /**
         * Gets the type of the pool.
         * @returns #Gname of @pool.
         */
        get_pool_type(): StoragePoolType;
        /**
         * Gets the source for `pool`
         * @returns a new #GVirConfigStoragePoolSource instance.
         */
        get_source(): StoragePoolSource;
        /**
         * Gets the target for `pool`
         * @returns a new #GVirConfigStoragePoolTarget instance.
         */
        get_target(): StoragePoolTarget;
        /**
         * Gets the unique identifier for `pool`.
         * @returns unique identifier for @pool.
         */
        get_uuid(): string;
        set_allocation(allocation: number): void;
        set_available(available: number): void;
        set_capacity(capacity: number): void;
        set_name(name?: string | null): void;
        set_pool_type(type: StoragePoolType): void;
        set_source(source?: StoragePoolSource | null): void;
        set_target(target?: StoragePoolTarget | null): void;
        set_uuid(uuid?: string | null): void;
    }

    module StoragePoolSource {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class StoragePoolSource extends Object {
        static $gtype: GObject.GType<StoragePoolSource>;

        // Constructors

        constructor(properties?: Partial<StoragePoolSource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StoragePoolSource;

        static new_from_xml(xml: string): StoragePoolSource;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        /**
         * For pools backed by a SCSI adapter, returns the SCSI adapter name
         * @returns the SCSI adapter name.
         */
        get_adapter(): string;
        /**
         * For pools backed by a physical device, returns the path to the block
         * device node
         * @returns fully qualified path to the block device node.
         */
        get_device_path(): string;
        /**
         * For pools backed by a directory, returns the path to the backing directory
         * @returns path to the directory backing directory.
         */
        get_directory(): string;
        /**
         * Provides information about the format of the pool. This format is
         * backend-specific but is typically used to indicate filesystem type, or
         * network filesystem type, or partition table type, or LVM metadata type.
         * @returns the storage pool format.
         */
        get_format(): string;
        /**
         * For pools backed by storage from remote server, returns the hostname
         * of the remote server.
         * @returns hostname or IP address of the remote server.
         */
        get_host(): string;
        /**
         * For pools backed by storage from a named element (for example, LV
         * groups), returns the name of the element
         * @returns name of the element used by @source
         */
        get_name(): string;
        /**
         * Gets the product name of the storage device.
         * @returns product name of the storage device.
         */
        get_product(): string;
        /**
         * Gets the vendor name of the storage device.
         * @returns vendor name of the storage device.
         */
        get_vendor(): string;
        set_adapter(adapter: string): void;
        set_device_path(device_path: string): void;
        set_directory(directory: string): void;
        set_format(format: string): void;
        set_host(host: string): void;
        set_name(name?: string | null): void;
        set_product(product: string): void;
        set_vendor(vendor: string): void;
    }

    module StoragePoolTarget {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class StoragePoolTarget extends Object {
        static $gtype: GObject.GType<StoragePoolTarget>;

        // Constructors

        constructor(properties?: Partial<StoragePoolTarget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StoragePoolTarget;

        static new_from_xml(xml: string): StoragePoolTarget;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        /**
         * Provides the location at which the storage pool associated with `target`
         * will be mapped into the local filesystem namespace.
         * @returns local filesystem path the storage pool is mapped at.
         */
        get_path(): string;
        /**
         * Gets the permissions associated with `target`
         * @returns a new #GVirConfigStoragePoolPermissions instance.
         */
        get_permissions(): StoragePermissions;
        set_path(path?: string | null): void;
        set_permissions(perms: StoragePermissions): void;
    }

    module StorageVol {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class StorageVol extends Object {
        static $gtype: GObject.GType<StorageVol>;

        // Constructors

        constructor(properties?: Partial<StorageVol.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StorageVol;

        static new_from_xml(xml: string): StorageVol;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        set_allocation(allocation: number): void;
        set_backing_store(backing_store?: StorageVolBackingStore | null): void;
        set_capacity(capacity: number): void;
        set_name(name?: string | null): void;
        set_target(target?: StorageVolTarget | null): void;
    }

    module StorageVolBackingStore {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class StorageVolBackingStore extends Object {
        static $gtype: GObject.GType<StorageVolBackingStore>;

        // Constructors

        constructor(properties?: Partial<StorageVolBackingStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StorageVolBackingStore;

        static new_from_xml(xml: string): StorageVolBackingStore;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        set_format(format: string): void;
        set_path(path?: string | null): void;
    }

    module StorageVolTarget {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class StorageVolTarget extends Object {
        static $gtype: GObject.GType<StorageVolTarget>;

        // Constructors

        constructor(properties?: Partial<StorageVolTarget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StorageVolTarget;

        static new_from_xml(xml: string): StorageVolTarget;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Methods

        set_compat(compat?: string | null): void;
        set_features(features: number): void;
        set_format(format: string): void;
        set_permissions(perms?: StoragePermissions | null): void;
    }

    type CapabilitiesClass = typeof Capabilities;
    type CapabilitiesCpuClass = typeof CapabilitiesCpu;
    type CapabilitiesCpuFeatureClass = typeof CapabilitiesCpuFeature;
    abstract class CapabilitiesCpuFeaturePrivate {
        static $gtype: GObject.GType<CapabilitiesCpuFeaturePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type CapabilitiesCpuModelClass = typeof CapabilitiesCpuModel;
    abstract class CapabilitiesCpuModelPrivate {
        static $gtype: GObject.GType<CapabilitiesCpuModelPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class CapabilitiesCpuPrivate {
        static $gtype: GObject.GType<CapabilitiesCpuPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type CapabilitiesCpuTopologyClass = typeof CapabilitiesCpuTopology;
    abstract class CapabilitiesCpuTopologyPrivate {
        static $gtype: GObject.GType<CapabilitiesCpuTopologyPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type CapabilitiesGuestArchClass = typeof CapabilitiesGuestArch;
    abstract class CapabilitiesGuestArchPrivate {
        static $gtype: GObject.GType<CapabilitiesGuestArchPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type CapabilitiesGuestClass = typeof CapabilitiesGuest;
    type CapabilitiesGuestDomainClass = typeof CapabilitiesGuestDomain;
    abstract class CapabilitiesGuestDomainPrivate {
        static $gtype: GObject.GType<CapabilitiesGuestDomainPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type CapabilitiesGuestFeatureClass = typeof CapabilitiesGuestFeature;
    abstract class CapabilitiesGuestFeaturePrivate {
        static $gtype: GObject.GType<CapabilitiesGuestFeaturePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class CapabilitiesGuestPrivate {
        static $gtype: GObject.GType<CapabilitiesGuestPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type CapabilitiesHostClass = typeof CapabilitiesHost;
    abstract class CapabilitiesHostPrivate {
        static $gtype: GObject.GType<CapabilitiesHostPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type CapabilitiesHostSecModelClass = typeof CapabilitiesHostSecModel;
    abstract class CapabilitiesHostSecModelPrivate {
        static $gtype: GObject.GType<CapabilitiesHostSecModelPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class CapabilitiesPrivate {
        static $gtype: GObject.GType<CapabilitiesPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainAddressClass = typeof DomainAddress;
    type DomainAddressPciClass = typeof DomainAddressPci;
    abstract class DomainAddressPciPrivate {
        static $gtype: GObject.GType<DomainAddressPciPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class DomainAddressPrivate {
        static $gtype: GObject.GType<DomainAddressPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainAddressUsbClass = typeof DomainAddressUsb;
    abstract class DomainAddressUsbPrivate {
        static $gtype: GObject.GType<DomainAddressUsbPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainAudioClass = typeof DomainAudio;
    abstract class DomainAudioPrivate {
        static $gtype: GObject.GType<DomainAudioPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainCapabilitiesClass = typeof DomainCapabilities;
    type DomainCapabilitiesOsClass = typeof DomainCapabilitiesOs;
    abstract class DomainCapabilitiesOsPrivate {
        static $gtype: GObject.GType<DomainCapabilitiesOsPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class DomainCapabilitiesPrivate {
        static $gtype: GObject.GType<DomainCapabilitiesPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainChannelClass = typeof DomainChannel;
    abstract class DomainChannelPrivate {
        static $gtype: GObject.GType<DomainChannelPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainChardevClass = typeof DomainChardev;
    abstract class DomainChardevPrivate {
        static $gtype: GObject.GType<DomainChardevPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainChardevSourceClass = typeof DomainChardevSource;
    abstract class DomainChardevSourcePrivate {
        static $gtype: GObject.GType<DomainChardevSourcePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainChardevSourcePtyClass = typeof DomainChardevSourcePty;
    abstract class DomainChardevSourcePtyPrivate {
        static $gtype: GObject.GType<DomainChardevSourcePtyPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainChardevSourceSpicePortClass = typeof DomainChardevSourceSpicePort;
    abstract class DomainChardevSourceSpicePortPrivate {
        static $gtype: GObject.GType<DomainChardevSourceSpicePortPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainChardevSourceSpiceVmcClass = typeof DomainChardevSourceSpiceVmc;
    abstract class DomainChardevSourceSpiceVmcPrivate {
        static $gtype: GObject.GType<DomainChardevSourceSpiceVmcPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainChardevSourceUnixClass = typeof DomainChardevSourceUnix;
    abstract class DomainChardevSourceUnixPrivate {
        static $gtype: GObject.GType<DomainChardevSourceUnixPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainClass = typeof Domain;
    type DomainClockClass = typeof DomainClock;
    abstract class DomainClockPrivate {
        static $gtype: GObject.GType<DomainClockPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainConsoleClass = typeof DomainConsole;
    abstract class DomainConsolePrivate {
        static $gtype: GObject.GType<DomainConsolePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainControllerClass = typeof DomainController;
    abstract class DomainControllerPrivate {
        static $gtype: GObject.GType<DomainControllerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainControllerUsbClass = typeof DomainControllerUsb;
    abstract class DomainControllerUsbPrivate {
        static $gtype: GObject.GType<DomainControllerUsbPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainCpuClass = typeof DomainCpu;
    type DomainCpuFeatureClass = typeof DomainCpuFeature;
    abstract class DomainCpuFeaturePrivate {
        static $gtype: GObject.GType<DomainCpuFeaturePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainCpuModelClass = typeof DomainCpuModel;
    abstract class DomainCpuModelPrivate {
        static $gtype: GObject.GType<DomainCpuModelPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class DomainCpuPrivate {
        static $gtype: GObject.GType<DomainCpuPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainDeviceClass = typeof DomainDevice;
    abstract class DomainDevicePrivate {
        static $gtype: GObject.GType<DomainDevicePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainDiskClass = typeof DomainDisk;
    type DomainDiskDriverClass = typeof DomainDiskDriver;
    abstract class DomainDiskDriverPrivate {
        static $gtype: GObject.GType<DomainDiskDriverPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class DomainDiskPrivate {
        static $gtype: GObject.GType<DomainDiskPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainFilesysClass = typeof DomainFilesys;
    abstract class DomainFilesysPrivate {
        static $gtype: GObject.GType<DomainFilesysPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainGraphicsClass = typeof DomainGraphics;
    type DomainGraphicsDBusClass = typeof DomainGraphicsDBus;
    abstract class DomainGraphicsDBusPrivate {
        static $gtype: GObject.GType<DomainGraphicsDBusPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainGraphicsDesktopClass = typeof DomainGraphicsDesktop;
    abstract class DomainGraphicsDesktopPrivate {
        static $gtype: GObject.GType<DomainGraphicsDesktopPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class DomainGraphicsPrivate {
        static $gtype: GObject.GType<DomainGraphicsPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainGraphicsRdpClass = typeof DomainGraphicsRdp;
    abstract class DomainGraphicsRdpPrivate {
        static $gtype: GObject.GType<DomainGraphicsRdpPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainGraphicsSdlClass = typeof DomainGraphicsSdl;
    abstract class DomainGraphicsSdlPrivate {
        static $gtype: GObject.GType<DomainGraphicsSdlPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainGraphicsSpiceClass = typeof DomainGraphicsSpice;
    abstract class DomainGraphicsSpicePrivate {
        static $gtype: GObject.GType<DomainGraphicsSpicePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainGraphicsVncClass = typeof DomainGraphicsVnc;
    abstract class DomainGraphicsVncPrivate {
        static $gtype: GObject.GType<DomainGraphicsVncPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainHostdevClass = typeof DomainHostdev;
    type DomainHostdevPciClass = typeof DomainHostdevPci;
    abstract class DomainHostdevPciPrivate {
        static $gtype: GObject.GType<DomainHostdevPciPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class DomainHostdevPrivate {
        static $gtype: GObject.GType<DomainHostdevPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainInputClass = typeof DomainInput;
    abstract class DomainInputPrivate {
        static $gtype: GObject.GType<DomainInputPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainInterfaceBridgeClass = typeof DomainInterfaceBridge;
    abstract class DomainInterfaceBridgePrivate {
        static $gtype: GObject.GType<DomainInterfaceBridgePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainInterfaceClass = typeof DomainInterface;
    type DomainInterfaceFilterrefClass = typeof DomainInterfaceFilterref;
    type DomainInterfaceFilterrefParameterClass = typeof DomainInterfaceFilterrefParameter;
    abstract class DomainInterfaceFilterrefParameterPrivate {
        static $gtype: GObject.GType<DomainInterfaceFilterrefParameterPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class DomainInterfaceFilterrefPrivate {
        static $gtype: GObject.GType<DomainInterfaceFilterrefPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainInterfaceNetworkClass = typeof DomainInterfaceNetwork;
    abstract class DomainInterfaceNetworkPrivate {
        static $gtype: GObject.GType<DomainInterfaceNetworkPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class DomainInterfacePrivate {
        static $gtype: GObject.GType<DomainInterfacePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainInterfaceUserClass = typeof DomainInterfaceUser;
    abstract class DomainInterfaceUserPrivate {
        static $gtype: GObject.GType<DomainInterfaceUserPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainMemballoonClass = typeof DomainMemballoon;
    abstract class DomainMemballoonPrivate {
        static $gtype: GObject.GType<DomainMemballoonPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainOsClass = typeof DomainOs;
    abstract class DomainOsPrivate {
        static $gtype: GObject.GType<DomainOsPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainParallelClass = typeof DomainParallel;
    abstract class DomainParallelPrivate {
        static $gtype: GObject.GType<DomainParallelPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainPowerManagementClass = typeof DomainPowerManagement;
    abstract class DomainPowerManagementPrivate {
        static $gtype: GObject.GType<DomainPowerManagementPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class DomainPrivate {
        static $gtype: GObject.GType<DomainPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainRedirdevClass = typeof DomainRedirdev;
    abstract class DomainRedirdevPrivate {
        static $gtype: GObject.GType<DomainRedirdevPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainSeclabelClass = typeof DomainSeclabel;
    abstract class DomainSeclabelPrivate {
        static $gtype: GObject.GType<DomainSeclabelPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainSerialClass = typeof DomainSerial;
    abstract class DomainSerialPrivate {
        static $gtype: GObject.GType<DomainSerialPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainSmartcardClass = typeof DomainSmartcard;
    type DomainSmartcardHostCertificatesClass = typeof DomainSmartcardHostCertificates;
    abstract class DomainSmartcardHostCertificatesPrivate {
        static $gtype: GObject.GType<DomainSmartcardHostCertificatesPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainSmartcardHostClass = typeof DomainSmartcardHost;
    abstract class DomainSmartcardHostPrivate {
        static $gtype: GObject.GType<DomainSmartcardHostPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainSmartcardPassthroughClass = typeof DomainSmartcardPassthrough;
    abstract class DomainSmartcardPassthroughPrivate {
        static $gtype: GObject.GType<DomainSmartcardPassthroughPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class DomainSmartcardPrivate {
        static $gtype: GObject.GType<DomainSmartcardPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainSnapshotClass = typeof DomainSnapshot;
    type DomainSnapshotDiskClass = typeof DomainSnapshotDisk;
    abstract class DomainSnapshotDiskPrivate {
        static $gtype: GObject.GType<DomainSnapshotDiskPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class DomainSnapshotPrivate {
        static $gtype: GObject.GType<DomainSnapshotPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainSoundClass = typeof DomainSound;
    abstract class DomainSoundPrivate {
        static $gtype: GObject.GType<DomainSoundPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainTimerClass = typeof DomainTimer;
    type DomainTimerHpetClass = typeof DomainTimerHpet;
    abstract class DomainTimerHpetPrivate {
        static $gtype: GObject.GType<DomainTimerHpetPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainTimerPitClass = typeof DomainTimerPit;
    abstract class DomainTimerPitPrivate {
        static $gtype: GObject.GType<DomainTimerPitPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class DomainTimerPrivate {
        static $gtype: GObject.GType<DomainTimerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainTimerRtcClass = typeof DomainTimerRtc;
    abstract class DomainTimerRtcPrivate {
        static $gtype: GObject.GType<DomainTimerRtcPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DomainVideoClass = typeof DomainVideo;
    abstract class DomainVideoPrivate {
        static $gtype: GObject.GType<DomainVideoPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type InterfaceClass = typeof Interface;
    abstract class InterfacePrivate {
        static $gtype: GObject.GType<InterfacePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type NetworkClass = typeof Network;
    type NetworkFilterClass = typeof NetworkFilter;
    abstract class NetworkFilterPrivate {
        static $gtype: GObject.GType<NetworkFilterPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class NetworkPrivate {
        static $gtype: GObject.GType<NetworkPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type NodeDeviceClass = typeof NodeDevice;
    abstract class NodeDevicePrivate {
        static $gtype: GObject.GType<NodeDevicePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ObjectClass = typeof Object;
    abstract class ObjectPrivate {
        static $gtype: GObject.GType<ObjectPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SecretClass = typeof Secret;
    abstract class SecretPrivate {
        static $gtype: GObject.GType<SecretPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type StoragePermissionsClass = typeof StoragePermissions;
    abstract class StoragePermissionsPrivate {
        static $gtype: GObject.GType<StoragePermissionsPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type StoragePoolClass = typeof StoragePool;
    abstract class StoragePoolPrivate {
        static $gtype: GObject.GType<StoragePoolPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type StoragePoolSourceClass = typeof StoragePoolSource;
    abstract class StoragePoolSourcePrivate {
        static $gtype: GObject.GType<StoragePoolSourcePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type StoragePoolTargetClass = typeof StoragePoolTarget;
    abstract class StoragePoolTargetPrivate {
        static $gtype: GObject.GType<StoragePoolTargetPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type StorageVolBackingStoreClass = typeof StorageVolBackingStore;
    abstract class StorageVolBackingStorePrivate {
        static $gtype: GObject.GType<StorageVolBackingStorePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type StorageVolClass = typeof StorageVol;
    abstract class StorageVolPrivate {
        static $gtype: GObject.GType<StorageVolPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type StorageVolTargetClass = typeof StorageVolTarget;
    abstract class StorageVolTargetPrivate {
        static $gtype: GObject.GType<StorageVolTargetPrivate>;

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

export default LibvirtGConfig;

// END
