/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './libvirtgconfig-1.0-ambient.d.ts';
import './libvirtgconfig-1.0-import.d.ts';
/**
 * LibvirtGConfig-1.0
 */

import type libxml2 from '@girs/libxml2-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace LibvirtGConfig {
    enum DomainChannelTargetType {
        GUESTFWD,
        VIRTIO,
        SPICEPORT,
    }
    enum DomainClockOffset {
        UTC,
        LOCALTIME,
        TIMEZONE,
        VARIABLE,
    }
    enum DomainConsoleTargetType {
        XEN,
        SERIAL,
        UML,
        VIRTIO,
        LXC,
        OPENVZ,
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
    enum DomainCpuFeaturePolicy {
        FORCE,
        REQUIRE,
        OPTIONAL,
        DISABLE,
        FORBID,
    }
    enum DomainCpuMatchPolicy {
        MINIMUM,
        EXACT,
        STRICT,
    }
    enum DomainCpuMode {
        CUSTOM,
        HOST_MODEL,
        HOST_PASSTHROUGH,
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
    enum DomainDiskCacheType {
        DEFAULT,
        NONE,
        WRITETHROUGH,
        WRITEBACK,
        DIRECTSYNC,
        UNSAFE,
    }
    enum DomainDiskDriverDiscard {
        UNMAP,
        IGNORE,
    }
    enum DomainDiskDriverErrorPolicy {
        STOP,
        REPORT,
        IGNORE,
        ENOSPACE,
    }
    enum DomainDiskDriverIoPolicy {
        THREADS,
        NATIVE,
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
    enum DomainDiskGuestDeviceType {
        DISK,
        FLOPPY,
        CDROM,
    }
    enum DomainDiskSnapshotType {
        NO,
        INTERNAL,
        EXTERNAL,
    }
    enum DomainDiskStartupPolicy {
        MANDATORY,
        REQUISITE,
        OPTIONAL,
    }
    enum DomainDiskType {
        FILE,
        BLOCK,
        DIR,
        NETWORK,
    }
    enum DomainFilesysAccessType {
        PASSTHROUGH,
        MAPPED,
        SQUASH,
    }
    enum DomainFilesysDriverType {
        DEFAULT,
        PATH,
        HANDLE,
        LOOP,
        NBD,
        PLOOP,
    }
    enum DomainFilesysType {
        MOUNT,
        BLOCK,
        FILE,
        TEMPLATE,
        RAM,
        BIND,
    }
    enum DomainGraphicsSpiceImageCompression {
        AUTO_GLZ,
        AUTO_LZ,
        QUIC,
        GLZ,
        LZ,
        OFF,
    }
    enum DomainInputBus {
        PS2,
        USB,
        XEN,
    }
    enum DomainInputDeviceType {
        MOUSE,
        TABLET,
        KEYBOARD,
    }
    enum DomainInterfaceLinkState {
        DEFAULT,
        UP,
        DOWN,
    }
    enum DomainLifecycleAction {
        DESTROY,
        RESTART,
        PRESERVE,
        RENAME_RESTART,
        COREDUMP_DESTROY,
        COREDUMP_RESTART,
    }
    enum DomainLifecycleEvent {
        ON_POWEROFF,
        ON_REBOOT,
        ON_CRASH,
    }
    enum DomainMemballoonModel {
        NONE,
        VIRTIO,
    }
    enum DomainOsBootDevice {
        FD,
        HD,
        CDROM,
        NETWORK,
    }
    enum DomainOsFirmware {
        BIOS,
        EFI,
    }
    enum DomainOsSmBiosMode {
        EMULATE,
        HOST,
        SYSINFO,
    }
    enum DomainOsType {
        HVM,
        LINUX,
        EXE,
        XEN,
        UML,
    }
    enum DomainRedirdevBus {
        USB,
    }
    enum DomainSeclabelType {
        DYNAMIC,
        STATIC,
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
    enum DomainSnapshotMemoryState {
        NONE,
        INTERNAL,
        EXTERNAL,
    }
    enum DomainSoundModel {
        SB16,
        ES1370,
        PCSPK,
        AC97,
        ICH6,
        ICH9,
    }
    enum DomainTimerTickPolicy {
        DELAY,
        CATCHUP,
        MERGE,
        DISCARD,
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
    enum StorageVolTargetFeatures {
        REFCOUNT,
    }
    module Capabilities {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class Capabilities extends Object {
        // Constructors of LibvirtGConfig.Capabilities

        constructor(properties?: Partial<Capabilities.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Capabilities;

        static new_from_xml(xml: string): Capabilities;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.Capabilities

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
        // Constructors of LibvirtGConfig.CapabilitiesCpu

        constructor(properties?: Partial<CapabilitiesCpu.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of LibvirtGConfig.CapabilitiesCpu

        /**
         * Gets the features of this CPU.
         */
        vfunc_get_features(): CapabilitiesCpuFeature[];

        // Own methods of LibvirtGConfig.CapabilitiesCpu

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
        // Constructors of LibvirtGConfig.CapabilitiesCpuFeature

        constructor(properties?: Partial<CapabilitiesCpuFeature.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of LibvirtGConfig.CapabilitiesCpuFeature

        get_name(): string;
        set_name(name: string): void;
    }

    module CapabilitiesCpuModel {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class CapabilitiesCpuModel extends Object {
        // Constructors of LibvirtGConfig.CapabilitiesCpuModel

        constructor(properties?: Partial<CapabilitiesCpuModel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CapabilitiesCpuModel;

        static new_from_xml(xml: string): CapabilitiesCpuModel;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.CapabilitiesCpuModel

        get_name(): string;
        set_name(name: string): void;
    }

    module CapabilitiesCpuTopology {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class CapabilitiesCpuTopology extends Object {
        // Constructors of LibvirtGConfig.CapabilitiesCpuTopology

        constructor(properties?: Partial<CapabilitiesCpuTopology.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CapabilitiesCpuTopology;

        static new_from_xml(xml: string): CapabilitiesCpuTopology;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.CapabilitiesCpuTopology

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
        // Constructors of LibvirtGConfig.CapabilitiesGuest

        constructor(properties?: Partial<CapabilitiesGuest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of LibvirtGConfig.CapabilitiesGuest

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
        // Constructors of LibvirtGConfig.CapabilitiesGuestArch

        constructor(properties?: Partial<CapabilitiesGuestArch.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of LibvirtGConfig.CapabilitiesGuestArch

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
        // Constructors of LibvirtGConfig.CapabilitiesGuestDomain

        constructor(properties?: Partial<CapabilitiesGuestDomain.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of LibvirtGConfig.CapabilitiesGuestDomain

        get_emulator(): string;
        get_virt_type(): DomainVirtType;
    }

    module CapabilitiesGuestFeature {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class CapabilitiesGuestFeature extends Object {
        // Constructors of LibvirtGConfig.CapabilitiesGuestFeature

        constructor(properties?: Partial<CapabilitiesGuestFeature.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of LibvirtGConfig.CapabilitiesGuestFeature

        get_name(): string;
    }

    module CapabilitiesHost {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class CapabilitiesHost extends Object {
        // Constructors of LibvirtGConfig.CapabilitiesHost

        constructor(properties?: Partial<CapabilitiesHost.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of LibvirtGConfig.CapabilitiesHost

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
        // Constructors of LibvirtGConfig.CapabilitiesHostSecModel

        constructor(properties?: Partial<CapabilitiesHostSecModel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of LibvirtGConfig.CapabilitiesHostSecModel

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
        // Own properties of LibvirtGConfig.Domain

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

        // Constructors of LibvirtGConfig.Domain

        constructor(properties?: Partial<Domain.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Domain;

        static new_from_xml(xml: string): Domain;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.Domain

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
         * libvirt will set it automatically if it's not explictly set, which means
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
        // Constructors of LibvirtGConfig.DomainAddress

        constructor(properties?: Partial<DomainAddress.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module DomainAddressPci {
        // Constructor properties interface

        interface ConstructorProps extends DomainAddress.ConstructorProps {}
    }

    class DomainAddressPci extends DomainAddress {
        // Constructors of LibvirtGConfig.DomainAddressPci

        constructor(properties?: Partial<DomainAddressPci.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainAddressPci;

        static new_from_xml(xml: string): DomainAddressPci;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainAddressPci

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
        // Constructors of LibvirtGConfig.DomainAddressUsb

        constructor(properties?: Partial<DomainAddressUsb.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainAddressUsb;

        static new_from_xml(xml: string): DomainAddressUsb;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainAddressUsb

        set_bus(bus: number): void;
        set_port(port: string): void;
    }

    module DomainCapabilities {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class DomainCapabilities extends Object {
        // Constructors of LibvirtGConfig.DomainCapabilities

        constructor(properties?: Partial<DomainCapabilities.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainCapabilities;

        static new_from_xml(xml: string): DomainCapabilities;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainCapabilities

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
        // Constructors of LibvirtGConfig.DomainCapabilitiesOs

        constructor(properties?: Partial<DomainCapabilitiesOs.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of LibvirtGConfig.DomainCapabilitiesOs

        /**
         * Gets the firmwares supported by `os`. The returned list should be freed with
         * g_list_free().
         */
        vfunc_get_firmwares(): DomainOsFirmware[];

        // Own methods of LibvirtGConfig.DomainCapabilitiesOs

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
        // Constructors of LibvirtGConfig.DomainChannel

        constructor(properties?: Partial<DomainChannel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainChannel;

        static new_from_xml(xml: string): DomainChannel;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainChannel

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
        // Constructors of LibvirtGConfig.DomainChardev

        constructor(properties?: Partial<DomainChardev.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of LibvirtGConfig.DomainChardev

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
        // Constructors of LibvirtGConfig.DomainChardevSource

        constructor(properties?: Partial<DomainChardevSource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module DomainChardevSourcePty {
        // Constructor properties interface

        interface ConstructorProps extends DomainChardevSource.ConstructorProps {}
    }

    class DomainChardevSourcePty extends DomainChardevSource {
        // Constructors of LibvirtGConfig.DomainChardevSourcePty

        constructor(properties?: Partial<DomainChardevSourcePty.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainChardevSourcePty;

        static new_from_xml(xml: string): DomainChardevSourcePty;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainChardevSourcePty

        get_path(): string;
        set_path(path: string): void;
    }

    module DomainChardevSourceSpicePort {
        // Constructor properties interface

        interface ConstructorProps extends DomainChardevSource.ConstructorProps {}
    }

    class DomainChardevSourceSpicePort extends DomainChardevSource {
        // Constructors of LibvirtGConfig.DomainChardevSourceSpicePort

        constructor(properties?: Partial<DomainChardevSourceSpicePort.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainChardevSourceSpicePort;

        static new_from_xml(xml: string): DomainChardevSourceSpicePort;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainChardevSourceSpicePort

        get_channel(): string;
        set_channel(channel: string): void;
    }

    module DomainChardevSourceSpiceVmc {
        // Constructor properties interface

        interface ConstructorProps extends DomainChardevSource.ConstructorProps {}
    }

    class DomainChardevSourceSpiceVmc extends DomainChardevSource {
        // Constructors of LibvirtGConfig.DomainChardevSourceSpiceVmc

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
        // Constructors of LibvirtGConfig.DomainChardevSourceUnix

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
        // Constructors of LibvirtGConfig.DomainClock

        constructor(properties?: Partial<DomainClock.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainClock;

        static new_from_xml(xml: string): DomainClock;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainClock

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
        // Constructors of LibvirtGConfig.DomainConsole

        constructor(properties?: Partial<DomainConsole.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainConsole;

        static new_from_xml(xml: string): DomainConsole;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainConsole

        set_target_type(type: DomainConsoleTargetType): void;
    }

    module DomainController {
        // Constructor properties interface

        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }

    abstract class DomainController extends DomainDevice {
        // Constructors of LibvirtGConfig.DomainController

        constructor(properties?: Partial<DomainController.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of LibvirtGConfig.DomainController

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
        // Constructors of LibvirtGConfig.DomainControllerUsb

        constructor(properties?: Partial<DomainControllerUsb.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainControllerUsb;

        static new_from_xml(xml: string): DomainControllerUsb;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainControllerUsb

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
        // Constructors of LibvirtGConfig.DomainCpu

        constructor(properties?: Partial<DomainCpu.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainCpu;

        static new_from_xml(xml: string): DomainCpu;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainCpu

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
        // Constructors of LibvirtGConfig.DomainCpuFeature

        constructor(properties?: Partial<DomainCpuFeature.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainCpuFeature;

        static new_from_xml(xml: string): DomainCpuFeature;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainCpuFeature

        get_policy(): DomainCpuFeaturePolicy;
        set_policy(policy: DomainCpuFeaturePolicy): void;
    }

    module DomainCpuModel {
        // Constructor properties interface

        interface ConstructorProps extends CapabilitiesCpuModel.ConstructorProps {}
    }

    class DomainCpuModel extends CapabilitiesCpuModel {
        // Constructors of LibvirtGConfig.DomainCpuModel

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
        // Constructors of LibvirtGConfig.DomainDevice

        constructor(properties?: Partial<DomainDevice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of LibvirtGConfig.DomainDevice

        get_alias(): string;
    }

    module DomainDisk {
        // Constructor properties interface

        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }

    class DomainDisk extends DomainDevice {
        // Constructors of LibvirtGConfig.DomainDisk

        constructor(properties?: Partial<DomainDisk.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainDisk;

        static new_from_xml(xml: string): DomainDisk;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainDisk

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
        // Constructors of LibvirtGConfig.DomainDiskDriver

        constructor(properties?: Partial<DomainDiskDriver.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainDiskDriver;

        static new_from_xml(xml: string): DomainDiskDriver;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainDiskDriver

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
        // Constructors of LibvirtGConfig.DomainFilesys

        constructor(properties?: Partial<DomainFilesys.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainFilesys;

        static new_from_xml(xml: string): DomainFilesys;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainFilesys

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
        // Constructors of LibvirtGConfig.DomainGraphics

        constructor(properties?: Partial<DomainGraphics.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module DomainGraphicsDesktop {
        // Constructor properties interface

        interface ConstructorProps extends DomainGraphics.ConstructorProps {}
    }

    class DomainGraphicsDesktop extends DomainGraphics {
        // Constructors of LibvirtGConfig.DomainGraphicsDesktop

        constructor(properties?: Partial<DomainGraphicsDesktop.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainGraphicsDesktop;

        static new_from_xml(xml: string): DomainGraphicsDesktop;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainGraphicsDesktop

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
        // Constructors of LibvirtGConfig.DomainGraphicsRdp

        constructor(properties?: Partial<DomainGraphicsRdp.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainGraphicsRdp;

        static new_from_xml(xml: string): DomainGraphicsRdp;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainGraphicsRdp

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
        // Constructors of LibvirtGConfig.DomainGraphicsSdl

        constructor(properties?: Partial<DomainGraphicsSdl.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainGraphicsSdl;

        static new_from_xml(xml: string): DomainGraphicsSdl;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainGraphicsSdl

        set_display(disp: string): void;
        set_fullscreen(fullscreen: boolean): void;
        set_xauthority(path: string): void;
    }

    module DomainGraphicsSpice {
        // Constructor properties interface

        interface ConstructorProps extends DomainGraphics.ConstructorProps {}
    }

    class DomainGraphicsSpice extends DomainGraphics {
        // Constructors of LibvirtGConfig.DomainGraphicsSpice

        constructor(properties?: Partial<DomainGraphicsSpice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainGraphicsSpice;

        static new_from_xml(xml: string): DomainGraphicsSpice;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainGraphicsSpice

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
        // Constructors of LibvirtGConfig.DomainGraphicsVnc

        constructor(properties?: Partial<DomainGraphicsVnc.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainGraphicsVnc;

        static new_from_xml(xml: string): DomainGraphicsVnc;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainGraphicsVnc

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
        // Constructors of LibvirtGConfig.DomainHostdev

        constructor(properties?: Partial<DomainHostdev.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of LibvirtGConfig.DomainHostdev

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
        // Constructors of LibvirtGConfig.DomainHostdevPci

        constructor(properties?: Partial<DomainHostdevPci.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainHostdevPci;

        static new_from_xml(xml: string): DomainHostdevPci;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainHostdevPci

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
        // Constructors of LibvirtGConfig.DomainInput

        constructor(properties?: Partial<DomainInput.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainInput;

        static new_from_xml(xml: string): DomainInput;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainInput

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
        // Constructors of LibvirtGConfig.DomainInterface

        constructor(properties?: Partial<DomainInterface.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of LibvirtGConfig.DomainInterface

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
        // Constructors of LibvirtGConfig.DomainInterfaceBridge

        constructor(properties?: Partial<DomainInterfaceBridge.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainInterfaceBridge;

        static new_from_xml(xml: string): DomainInterfaceBridge;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainInterfaceBridge

        set_source(brname: string): void;
    }

    module DomainInterfaceFilterref {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class DomainInterfaceFilterref extends Object {
        // Constructors of LibvirtGConfig.DomainInterfaceFilterref

        constructor(properties?: Partial<DomainInterfaceFilterref.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainInterfaceFilterref;

        static new_from_xml(xml: string): DomainInterfaceFilterref;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainInterfaceFilterref

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
        // Constructors of LibvirtGConfig.DomainInterfaceFilterrefParameter

        constructor(properties?: Partial<DomainInterfaceFilterrefParameter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainInterfaceFilterrefParameter;

        static new_from_xml(xml: string): DomainInterfaceFilterrefParameter;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainInterfaceFilterrefParameter

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
        // Constructors of LibvirtGConfig.DomainInterfaceNetwork

        constructor(properties?: Partial<DomainInterfaceNetwork.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainInterfaceNetwork;

        static new_from_xml(xml: string): DomainInterfaceNetwork;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainInterfaceNetwork

        set_source(source: string): void;
    }

    module DomainInterfaceUser {
        // Constructor properties interface

        interface ConstructorProps extends DomainInterface.ConstructorProps {}
    }

    class DomainInterfaceUser extends DomainInterface {
        // Constructors of LibvirtGConfig.DomainInterfaceUser

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
        // Constructors of LibvirtGConfig.DomainMemballoon

        constructor(properties?: Partial<DomainMemballoon.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainMemballoon;

        static new_from_xml(xml: string): DomainMemballoon;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainMemballoon

        set_model(model: DomainMemballoonModel): void;
    }

    module DomainOs {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class DomainOs extends Object {
        // Constructors of LibvirtGConfig.DomainOs

        constructor(properties?: Partial<DomainOs.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainOs;

        static new_from_xml(xml: string): DomainOs;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainOs

        bios_enable_serial(enable: boolean): void;
        enable_boot_menu(enable: boolean): void;
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
        // Constructors of LibvirtGConfig.DomainParallel

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
        // Constructors of LibvirtGConfig.DomainPowerManagement

        constructor(properties?: Partial<DomainPowerManagement.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainPowerManagement;

        static new_from_xml(xml: string): DomainPowerManagement;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainPowerManagement

        set_disk_suspend_enabled(enabled: boolean): void;
        set_mem_suspend_enabled(enabled: boolean): void;
    }

    module DomainRedirdev {
        // Constructor properties interface

        interface ConstructorProps extends DomainChardev.ConstructorProps {}
    }

    class DomainRedirdev extends DomainChardev {
        // Constructors of LibvirtGConfig.DomainRedirdev

        constructor(properties?: Partial<DomainRedirdev.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainRedirdev;

        static new_from_xml(xml: string): DomainRedirdev;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainRedirdev

        set_address(address?: DomainAddress | null): void;
        set_bus(bus: DomainRedirdevBus): void;
    }

    module DomainSeclabel {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class DomainSeclabel extends Object {
        // Constructors of LibvirtGConfig.DomainSeclabel

        constructor(properties?: Partial<DomainSeclabel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainSeclabel;

        static new_from_xml(xml: string): DomainSeclabel;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainSeclabel

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
        // Constructors of LibvirtGConfig.DomainSerial

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
        // Constructors of LibvirtGConfig.DomainSmartcard

        constructor(properties?: Partial<DomainSmartcard.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own static methods of LibvirtGConfig.DomainSmartcard

        static set_address(redirdev: DomainRedirdev, address?: DomainAddress | null): void;
    }

    module DomainSmartcardHost {
        // Constructor properties interface

        interface ConstructorProps extends DomainSmartcard.ConstructorProps {}
    }

    class DomainSmartcardHost extends DomainSmartcard {
        // Constructors of LibvirtGConfig.DomainSmartcardHost

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
        // Constructors of LibvirtGConfig.DomainSmartcardHostCertificates

        constructor(properties?: Partial<DomainSmartcardHostCertificates.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainSmartcardHostCertificates;

        static new_from_xml(xml: string): DomainSmartcardHostCertificates;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainSmartcardHostCertificates

        set_certificates(cert1?: string | null, cert2?: string | null, cert3?: string | null): void;
        set_database(path?: string | null): void;
    }

    module DomainSmartcardPassthrough {
        // Constructor properties interface

        interface ConstructorProps extends DomainSmartcard.ConstructorProps {}
    }

    class DomainSmartcardPassthrough extends DomainSmartcard {
        // Constructors of LibvirtGConfig.DomainSmartcardPassthrough

        constructor(properties?: Partial<DomainSmartcardPassthrough.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainSmartcardPassthrough;

        static new_from_xml(xml: string): DomainSmartcardPassthrough;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainSmartcardPassthrough

        set_source(source: DomainChardevSource): void;
    }

    module DomainSnapshot {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class DomainSnapshot extends Object {
        // Constructors of LibvirtGConfig.DomainSnapshot

        constructor(properties?: Partial<DomainSnapshot.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainSnapshot;

        static new_from_xml(xml: string): DomainSnapshot;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainSnapshot

        add_disk(disk: DomainSnapshotDisk): void;
        get_creation_time(): number;
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
        // Constructors of LibvirtGConfig.DomainSnapshotDisk

        constructor(properties?: Partial<DomainSnapshotDisk.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainSnapshotDisk;

        static new_from_xml(xml: string): DomainSnapshotDisk;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainSnapshotDisk

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
        // Constructors of LibvirtGConfig.DomainSound

        constructor(properties?: Partial<DomainSound.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainSound;

        static new_from_xml(xml: string): DomainSound;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainSound

        set_model(model: DomainSoundModel): void;
    }

    module DomainTimer {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    abstract class DomainTimer extends Object {
        // Constructors of LibvirtGConfig.DomainTimer

        constructor(properties?: Partial<DomainTimer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of LibvirtGConfig.DomainTimer

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
        // Constructors of LibvirtGConfig.DomainTimerHpet

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
        // Constructors of LibvirtGConfig.DomainTimerPit

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
        // Constructors of LibvirtGConfig.DomainTimerRtc

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
        // Constructors of LibvirtGConfig.DomainVideo

        constructor(properties?: Partial<DomainVideo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainVideo;

        static new_from_xml(xml: string): DomainVideo;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.DomainVideo

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
        // Constructors of LibvirtGConfig.Interface

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
        // Constructors of LibvirtGConfig.Network

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
        // Constructors of LibvirtGConfig.NetworkFilter

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
        // Constructors of LibvirtGConfig.NodeDevice

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
        // Own properties of LibvirtGConfig.Object

        get node(): any;
        get schema(): string;

        // Constructors of LibvirtGConfig.Object

        constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](type: GObject.GType, root_name: string, schema: string): Object;

        static new_from_xml(type: GObject.GType, root_name: string, schema: string, xml: string): Object;

        // Own static methods of LibvirtGConfig.Object

        static error_quark(): GLib.Quark;

        // Own methods of LibvirtGConfig.Object

        get_schema(): string;
        to_xml(): string;
        validate(): void;
    }

    module Secret {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class Secret extends Object {
        // Constructors of LibvirtGConfig.Secret

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
        // Constructors of LibvirtGConfig.StoragePermissions

        constructor(properties?: Partial<StoragePermissions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StoragePermissions;

        static new_from_xml(xml: string): StoragePermissions;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.StoragePermissions

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
        // Constructors of LibvirtGConfig.StoragePool

        constructor(properties?: Partial<StoragePool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StoragePool;

        static new_from_xml(xml: string): StoragePool;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.StoragePool

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
        // Constructors of LibvirtGConfig.StoragePoolSource

        constructor(properties?: Partial<StoragePoolSource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StoragePoolSource;

        static new_from_xml(xml: string): StoragePoolSource;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.StoragePoolSource

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
        // Constructors of LibvirtGConfig.StoragePoolTarget

        constructor(properties?: Partial<StoragePoolTarget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StoragePoolTarget;

        static new_from_xml(xml: string): StoragePoolTarget;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.StoragePoolTarget

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
        // Constructors of LibvirtGConfig.StorageVol

        constructor(properties?: Partial<StorageVol.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StorageVol;

        static new_from_xml(xml: string): StorageVol;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.StorageVol

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
        // Constructors of LibvirtGConfig.StorageVolBackingStore

        constructor(properties?: Partial<StorageVolBackingStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StorageVolBackingStore;

        static new_from_xml(xml: string): StorageVolBackingStore;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.StorageVolBackingStore

        set_format(format: string): void;
        set_path(path?: string | null): void;
    }

    module StorageVolTarget {
        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    class StorageVolTarget extends Object {
        // Constructors of LibvirtGConfig.StorageVolTarget

        constructor(properties?: Partial<StorageVolTarget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StorageVolTarget;

        static new_from_xml(xml: string): StorageVolTarget;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Own methods of LibvirtGConfig.StorageVolTarget

        set_compat(compat?: string | null): void;
        set_features(features: number): void;
        set_format(format: string): void;
        set_permissions(perms?: StoragePermissions | null): void;
    }

    type CapabilitiesClass = typeof Capabilities;
    type CapabilitiesCpuClass = typeof CapabilitiesCpu;
    type CapabilitiesCpuFeatureClass = typeof CapabilitiesCpuFeature;
    abstract class CapabilitiesCpuFeaturePrivate {
        // Constructors of LibvirtGConfig.CapabilitiesCpuFeaturePrivate

        _init(...args: any[]): void;
    }

    type CapabilitiesCpuModelClass = typeof CapabilitiesCpuModel;
    abstract class CapabilitiesCpuModelPrivate {
        // Constructors of LibvirtGConfig.CapabilitiesCpuModelPrivate

        _init(...args: any[]): void;
    }

    abstract class CapabilitiesCpuPrivate {
        // Constructors of LibvirtGConfig.CapabilitiesCpuPrivate

        _init(...args: any[]): void;
    }

    type CapabilitiesCpuTopologyClass = typeof CapabilitiesCpuTopology;
    abstract class CapabilitiesCpuTopologyPrivate {
        // Constructors of LibvirtGConfig.CapabilitiesCpuTopologyPrivate

        _init(...args: any[]): void;
    }

    type CapabilitiesGuestArchClass = typeof CapabilitiesGuestArch;
    abstract class CapabilitiesGuestArchPrivate {
        // Constructors of LibvirtGConfig.CapabilitiesGuestArchPrivate

        _init(...args: any[]): void;
    }

    type CapabilitiesGuestClass = typeof CapabilitiesGuest;
    type CapabilitiesGuestDomainClass = typeof CapabilitiesGuestDomain;
    abstract class CapabilitiesGuestDomainPrivate {
        // Constructors of LibvirtGConfig.CapabilitiesGuestDomainPrivate

        _init(...args: any[]): void;
    }

    type CapabilitiesGuestFeatureClass = typeof CapabilitiesGuestFeature;
    abstract class CapabilitiesGuestFeaturePrivate {
        // Constructors of LibvirtGConfig.CapabilitiesGuestFeaturePrivate

        _init(...args: any[]): void;
    }

    abstract class CapabilitiesGuestPrivate {
        // Constructors of LibvirtGConfig.CapabilitiesGuestPrivate

        _init(...args: any[]): void;
    }

    type CapabilitiesHostClass = typeof CapabilitiesHost;
    abstract class CapabilitiesHostPrivate {
        // Constructors of LibvirtGConfig.CapabilitiesHostPrivate

        _init(...args: any[]): void;
    }

    type CapabilitiesHostSecModelClass = typeof CapabilitiesHostSecModel;
    abstract class CapabilitiesHostSecModelPrivate {
        // Constructors of LibvirtGConfig.CapabilitiesHostSecModelPrivate

        _init(...args: any[]): void;
    }

    abstract class CapabilitiesPrivate {
        // Constructors of LibvirtGConfig.CapabilitiesPrivate

        _init(...args: any[]): void;
    }

    type DomainAddressClass = typeof DomainAddress;
    type DomainAddressPciClass = typeof DomainAddressPci;
    abstract class DomainAddressPciPrivate {
        // Constructors of LibvirtGConfig.DomainAddressPciPrivate

        _init(...args: any[]): void;
    }

    abstract class DomainAddressPrivate {
        // Constructors of LibvirtGConfig.DomainAddressPrivate

        _init(...args: any[]): void;
    }

    type DomainAddressUsbClass = typeof DomainAddressUsb;
    abstract class DomainAddressUsbPrivate {
        // Constructors of LibvirtGConfig.DomainAddressUsbPrivate

        _init(...args: any[]): void;
    }

    type DomainCapabilitiesClass = typeof DomainCapabilities;
    type DomainCapabilitiesOsClass = typeof DomainCapabilitiesOs;
    abstract class DomainCapabilitiesOsPrivate {
        // Constructors of LibvirtGConfig.DomainCapabilitiesOsPrivate

        _init(...args: any[]): void;
    }

    abstract class DomainCapabilitiesPrivate {
        // Constructors of LibvirtGConfig.DomainCapabilitiesPrivate

        _init(...args: any[]): void;
    }

    type DomainChannelClass = typeof DomainChannel;
    abstract class DomainChannelPrivate {
        // Constructors of LibvirtGConfig.DomainChannelPrivate

        _init(...args: any[]): void;
    }

    type DomainChardevClass = typeof DomainChardev;
    abstract class DomainChardevPrivate {
        // Constructors of LibvirtGConfig.DomainChardevPrivate

        _init(...args: any[]): void;
    }

    type DomainChardevSourceClass = typeof DomainChardevSource;
    abstract class DomainChardevSourcePrivate {
        // Constructors of LibvirtGConfig.DomainChardevSourcePrivate

        _init(...args: any[]): void;
    }

    type DomainChardevSourcePtyClass = typeof DomainChardevSourcePty;
    abstract class DomainChardevSourcePtyPrivate {
        // Constructors of LibvirtGConfig.DomainChardevSourcePtyPrivate

        _init(...args: any[]): void;
    }

    type DomainChardevSourceSpicePortClass = typeof DomainChardevSourceSpicePort;
    abstract class DomainChardevSourceSpicePortPrivate {
        // Constructors of LibvirtGConfig.DomainChardevSourceSpicePortPrivate

        _init(...args: any[]): void;
    }

    type DomainChardevSourceSpiceVmcClass = typeof DomainChardevSourceSpiceVmc;
    abstract class DomainChardevSourceSpiceVmcPrivate {
        // Constructors of LibvirtGConfig.DomainChardevSourceSpiceVmcPrivate

        _init(...args: any[]): void;
    }

    type DomainChardevSourceUnixClass = typeof DomainChardevSourceUnix;
    abstract class DomainChardevSourceUnixPrivate {
        // Constructors of LibvirtGConfig.DomainChardevSourceUnixPrivate

        _init(...args: any[]): void;
    }

    type DomainClass = typeof Domain;
    type DomainClockClass = typeof DomainClock;
    abstract class DomainClockPrivate {
        // Constructors of LibvirtGConfig.DomainClockPrivate

        _init(...args: any[]): void;
    }

    type DomainConsoleClass = typeof DomainConsole;
    abstract class DomainConsolePrivate {
        // Constructors of LibvirtGConfig.DomainConsolePrivate

        _init(...args: any[]): void;
    }

    type DomainControllerClass = typeof DomainController;
    abstract class DomainControllerPrivate {
        // Constructors of LibvirtGConfig.DomainControllerPrivate

        _init(...args: any[]): void;
    }

    type DomainControllerUsbClass = typeof DomainControllerUsb;
    abstract class DomainControllerUsbPrivate {
        // Constructors of LibvirtGConfig.DomainControllerUsbPrivate

        _init(...args: any[]): void;
    }

    type DomainCpuClass = typeof DomainCpu;
    type DomainCpuFeatureClass = typeof DomainCpuFeature;
    abstract class DomainCpuFeaturePrivate {
        // Constructors of LibvirtGConfig.DomainCpuFeaturePrivate

        _init(...args: any[]): void;
    }

    type DomainCpuModelClass = typeof DomainCpuModel;
    abstract class DomainCpuModelPrivate {
        // Constructors of LibvirtGConfig.DomainCpuModelPrivate

        _init(...args: any[]): void;
    }

    abstract class DomainCpuPrivate {
        // Constructors of LibvirtGConfig.DomainCpuPrivate

        _init(...args: any[]): void;
    }

    type DomainDeviceClass = typeof DomainDevice;
    abstract class DomainDevicePrivate {
        // Constructors of LibvirtGConfig.DomainDevicePrivate

        _init(...args: any[]): void;
    }

    type DomainDiskClass = typeof DomainDisk;
    type DomainDiskDriverClass = typeof DomainDiskDriver;
    abstract class DomainDiskDriverPrivate {
        // Constructors of LibvirtGConfig.DomainDiskDriverPrivate

        _init(...args: any[]): void;
    }

    abstract class DomainDiskPrivate {
        // Constructors of LibvirtGConfig.DomainDiskPrivate

        _init(...args: any[]): void;
    }

    type DomainFilesysClass = typeof DomainFilesys;
    abstract class DomainFilesysPrivate {
        // Constructors of LibvirtGConfig.DomainFilesysPrivate

        _init(...args: any[]): void;
    }

    type DomainGraphicsClass = typeof DomainGraphics;
    type DomainGraphicsDesktopClass = typeof DomainGraphicsDesktop;
    abstract class DomainGraphicsDesktopPrivate {
        // Constructors of LibvirtGConfig.DomainGraphicsDesktopPrivate

        _init(...args: any[]): void;
    }

    abstract class DomainGraphicsPrivate {
        // Constructors of LibvirtGConfig.DomainGraphicsPrivate

        _init(...args: any[]): void;
    }

    type DomainGraphicsRdpClass = typeof DomainGraphicsRdp;
    abstract class DomainGraphicsRdpPrivate {
        // Constructors of LibvirtGConfig.DomainGraphicsRdpPrivate

        _init(...args: any[]): void;
    }

    type DomainGraphicsSdlClass = typeof DomainGraphicsSdl;
    abstract class DomainGraphicsSdlPrivate {
        // Constructors of LibvirtGConfig.DomainGraphicsSdlPrivate

        _init(...args: any[]): void;
    }

    type DomainGraphicsSpiceClass = typeof DomainGraphicsSpice;
    abstract class DomainGraphicsSpicePrivate {
        // Constructors of LibvirtGConfig.DomainGraphicsSpicePrivate

        _init(...args: any[]): void;
    }

    type DomainGraphicsVncClass = typeof DomainGraphicsVnc;
    abstract class DomainGraphicsVncPrivate {
        // Constructors of LibvirtGConfig.DomainGraphicsVncPrivate

        _init(...args: any[]): void;
    }

    type DomainHostdevClass = typeof DomainHostdev;
    type DomainHostdevPciClass = typeof DomainHostdevPci;
    abstract class DomainHostdevPciPrivate {
        // Constructors of LibvirtGConfig.DomainHostdevPciPrivate

        _init(...args: any[]): void;
    }

    abstract class DomainHostdevPrivate {
        // Constructors of LibvirtGConfig.DomainHostdevPrivate

        _init(...args: any[]): void;
    }

    type DomainInputClass = typeof DomainInput;
    abstract class DomainInputPrivate {
        // Constructors of LibvirtGConfig.DomainInputPrivate

        _init(...args: any[]): void;
    }

    type DomainInterfaceBridgeClass = typeof DomainInterfaceBridge;
    abstract class DomainInterfaceBridgePrivate {
        // Constructors of LibvirtGConfig.DomainInterfaceBridgePrivate

        _init(...args: any[]): void;
    }

    type DomainInterfaceClass = typeof DomainInterface;
    type DomainInterfaceFilterrefClass = typeof DomainInterfaceFilterref;
    type DomainInterfaceFilterrefParameterClass = typeof DomainInterfaceFilterrefParameter;
    abstract class DomainInterfaceFilterrefParameterPrivate {
        // Constructors of LibvirtGConfig.DomainInterfaceFilterrefParameterPrivate

        _init(...args: any[]): void;
    }

    abstract class DomainInterfaceFilterrefPrivate {
        // Constructors of LibvirtGConfig.DomainInterfaceFilterrefPrivate

        _init(...args: any[]): void;
    }

    type DomainInterfaceNetworkClass = typeof DomainInterfaceNetwork;
    abstract class DomainInterfaceNetworkPrivate {
        // Constructors of LibvirtGConfig.DomainInterfaceNetworkPrivate

        _init(...args: any[]): void;
    }

    abstract class DomainInterfacePrivate {
        // Constructors of LibvirtGConfig.DomainInterfacePrivate

        _init(...args: any[]): void;
    }

    type DomainInterfaceUserClass = typeof DomainInterfaceUser;
    abstract class DomainInterfaceUserPrivate {
        // Constructors of LibvirtGConfig.DomainInterfaceUserPrivate

        _init(...args: any[]): void;
    }

    type DomainMemballoonClass = typeof DomainMemballoon;
    abstract class DomainMemballoonPrivate {
        // Constructors of LibvirtGConfig.DomainMemballoonPrivate

        _init(...args: any[]): void;
    }

    type DomainOsClass = typeof DomainOs;
    abstract class DomainOsPrivate {
        // Constructors of LibvirtGConfig.DomainOsPrivate

        _init(...args: any[]): void;
    }

    type DomainParallelClass = typeof DomainParallel;
    abstract class DomainParallelPrivate {
        // Constructors of LibvirtGConfig.DomainParallelPrivate

        _init(...args: any[]): void;
    }

    type DomainPowerManagementClass = typeof DomainPowerManagement;
    abstract class DomainPowerManagementPrivate {
        // Constructors of LibvirtGConfig.DomainPowerManagementPrivate

        _init(...args: any[]): void;
    }

    abstract class DomainPrivate {
        // Constructors of LibvirtGConfig.DomainPrivate

        _init(...args: any[]): void;
    }

    type DomainRedirdevClass = typeof DomainRedirdev;
    abstract class DomainRedirdevPrivate {
        // Constructors of LibvirtGConfig.DomainRedirdevPrivate

        _init(...args: any[]): void;
    }

    type DomainSeclabelClass = typeof DomainSeclabel;
    abstract class DomainSeclabelPrivate {
        // Constructors of LibvirtGConfig.DomainSeclabelPrivate

        _init(...args: any[]): void;
    }

    type DomainSerialClass = typeof DomainSerial;
    abstract class DomainSerialPrivate {
        // Constructors of LibvirtGConfig.DomainSerialPrivate

        _init(...args: any[]): void;
    }

    type DomainSmartcardClass = typeof DomainSmartcard;
    type DomainSmartcardHostCertificatesClass = typeof DomainSmartcardHostCertificates;
    abstract class DomainSmartcardHostCertificatesPrivate {
        // Constructors of LibvirtGConfig.DomainSmartcardHostCertificatesPrivate

        _init(...args: any[]): void;
    }

    type DomainSmartcardHostClass = typeof DomainSmartcardHost;
    abstract class DomainSmartcardHostPrivate {
        // Constructors of LibvirtGConfig.DomainSmartcardHostPrivate

        _init(...args: any[]): void;
    }

    type DomainSmartcardPassthroughClass = typeof DomainSmartcardPassthrough;
    abstract class DomainSmartcardPassthroughPrivate {
        // Constructors of LibvirtGConfig.DomainSmartcardPassthroughPrivate

        _init(...args: any[]): void;
    }

    abstract class DomainSmartcardPrivate {
        // Constructors of LibvirtGConfig.DomainSmartcardPrivate

        _init(...args: any[]): void;
    }

    type DomainSnapshotClass = typeof DomainSnapshot;
    type DomainSnapshotDiskClass = typeof DomainSnapshotDisk;
    abstract class DomainSnapshotDiskPrivate {
        // Constructors of LibvirtGConfig.DomainSnapshotDiskPrivate

        _init(...args: any[]): void;
    }

    abstract class DomainSnapshotPrivate {
        // Constructors of LibvirtGConfig.DomainSnapshotPrivate

        _init(...args: any[]): void;
    }

    type DomainSoundClass = typeof DomainSound;
    abstract class DomainSoundPrivate {
        // Constructors of LibvirtGConfig.DomainSoundPrivate

        _init(...args: any[]): void;
    }

    type DomainTimerClass = typeof DomainTimer;
    type DomainTimerHpetClass = typeof DomainTimerHpet;
    abstract class DomainTimerHpetPrivate {
        // Constructors of LibvirtGConfig.DomainTimerHpetPrivate

        _init(...args: any[]): void;
    }

    type DomainTimerPitClass = typeof DomainTimerPit;
    abstract class DomainTimerPitPrivate {
        // Constructors of LibvirtGConfig.DomainTimerPitPrivate

        _init(...args: any[]): void;
    }

    abstract class DomainTimerPrivate {
        // Constructors of LibvirtGConfig.DomainTimerPrivate

        _init(...args: any[]): void;
    }

    type DomainTimerRtcClass = typeof DomainTimerRtc;
    abstract class DomainTimerRtcPrivate {
        // Constructors of LibvirtGConfig.DomainTimerRtcPrivate

        _init(...args: any[]): void;
    }

    type DomainVideoClass = typeof DomainVideo;
    abstract class DomainVideoPrivate {
        // Constructors of LibvirtGConfig.DomainVideoPrivate

        _init(...args: any[]): void;
    }

    type InterfaceClass = typeof Interface;
    abstract class InterfacePrivate {
        // Constructors of LibvirtGConfig.InterfacePrivate

        _init(...args: any[]): void;
    }

    type NetworkClass = typeof Network;
    type NetworkFilterClass = typeof NetworkFilter;
    abstract class NetworkFilterPrivate {
        // Constructors of LibvirtGConfig.NetworkFilterPrivate

        _init(...args: any[]): void;
    }

    abstract class NetworkPrivate {
        // Constructors of LibvirtGConfig.NetworkPrivate

        _init(...args: any[]): void;
    }

    type NodeDeviceClass = typeof NodeDevice;
    abstract class NodeDevicePrivate {
        // Constructors of LibvirtGConfig.NodeDevicePrivate

        _init(...args: any[]): void;
    }

    type ObjectClass = typeof Object;
    abstract class ObjectPrivate {
        // Constructors of LibvirtGConfig.ObjectPrivate

        _init(...args: any[]): void;
    }

    type SecretClass = typeof Secret;
    abstract class SecretPrivate {
        // Constructors of LibvirtGConfig.SecretPrivate

        _init(...args: any[]): void;
    }

    type StoragePermissionsClass = typeof StoragePermissions;
    abstract class StoragePermissionsPrivate {
        // Constructors of LibvirtGConfig.StoragePermissionsPrivate

        _init(...args: any[]): void;
    }

    type StoragePoolClass = typeof StoragePool;
    abstract class StoragePoolPrivate {
        // Constructors of LibvirtGConfig.StoragePoolPrivate

        _init(...args: any[]): void;
    }

    type StoragePoolSourceClass = typeof StoragePoolSource;
    abstract class StoragePoolSourcePrivate {
        // Constructors of LibvirtGConfig.StoragePoolSourcePrivate

        _init(...args: any[]): void;
    }

    type StoragePoolTargetClass = typeof StoragePoolTarget;
    abstract class StoragePoolTargetPrivate {
        // Constructors of LibvirtGConfig.StoragePoolTargetPrivate

        _init(...args: any[]): void;
    }

    type StorageVolBackingStoreClass = typeof StorageVolBackingStore;
    abstract class StorageVolBackingStorePrivate {
        // Constructors of LibvirtGConfig.StorageVolBackingStorePrivate

        _init(...args: any[]): void;
    }

    type StorageVolClass = typeof StorageVol;
    abstract class StorageVolPrivate {
        // Constructors of LibvirtGConfig.StorageVolPrivate

        _init(...args: any[]): void;
    }

    type StorageVolTargetClass = typeof StorageVolTarget;
    abstract class StorageVolTargetPrivate {
        // Constructors of LibvirtGConfig.StorageVolTargetPrivate

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
