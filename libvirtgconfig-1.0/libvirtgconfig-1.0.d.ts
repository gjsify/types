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
    function init(argv?: string[] | null): void;
    function init_check(argv?: string[] | null): boolean;
    enum StorageVolTargetFeatures {
        REFCOUNT,
    }
    module Capabilities {
        // Constructor properties interface
    }

    class Capabilities extends Object {
        // Constructors of LibvirtGConfig-1.0.Capabilities

        static ['new'](): Capabilities;

        static new_from_xml(xml: string): Capabilities;

        // Owm methods of LibvirtGConfig-1.0.Capabilities

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
    }

    class CapabilitiesCpu extends Object {
        // Owm methods of LibvirtGConfig-1.0.CapabilitiesCpu

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
    }

    class CapabilitiesCpuFeature extends Object {
        // Owm methods of LibvirtGConfig-1.0.CapabilitiesCpuFeature

        get_name(): string;
        set_name(name: string): void;
    }

    module CapabilitiesCpuModel {
        // Constructor properties interface
    }

    class CapabilitiesCpuModel extends Object {
        // Constructors of LibvirtGConfig-1.0.CapabilitiesCpuModel

        static ['new'](): CapabilitiesCpuModel;

        static new_from_xml(xml: string): CapabilitiesCpuModel;

        // Owm methods of LibvirtGConfig-1.0.CapabilitiesCpuModel

        get_name(): string;
        set_name(name: string): void;
    }

    module CapabilitiesCpuTopology {
        // Constructor properties interface
    }

    class CapabilitiesCpuTopology extends Object {
        // Constructors of LibvirtGConfig-1.0.CapabilitiesCpuTopology

        static ['new'](): CapabilitiesCpuTopology;

        static new_from_xml(xml: string): CapabilitiesCpuTopology;

        // Owm methods of LibvirtGConfig-1.0.CapabilitiesCpuTopology

        get_cores(): number;
        get_sockets(): number;
        get_threads(): number;
        set_cores(cores: number): void;
        set_sockets(sockets: number): void;
        set_threads(threads: number): void;
    }

    module CapabilitiesGuest {
        // Constructor properties interface
    }

    class CapabilitiesGuest extends Object {
        // Owm methods of LibvirtGConfig-1.0.CapabilitiesGuest

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
    }

    class CapabilitiesGuestArch extends Object {
        // Owm methods of LibvirtGConfig-1.0.CapabilitiesGuestArch

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
    }

    class CapabilitiesGuestDomain extends Object {
        // Owm methods of LibvirtGConfig-1.0.CapabilitiesGuestDomain

        get_emulator(): string;
        get_virt_type(): DomainVirtType;
    }

    module CapabilitiesGuestFeature {
        // Constructor properties interface
    }

    class CapabilitiesGuestFeature extends Object {
        // Owm methods of LibvirtGConfig-1.0.CapabilitiesGuestFeature

        get_name(): string;
    }

    module CapabilitiesHost {
        // Constructor properties interface
    }

    class CapabilitiesHost extends Object {
        // Owm methods of LibvirtGConfig-1.0.CapabilitiesHost

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
    }

    class CapabilitiesHostSecModel extends Object {
        // Owm methods of LibvirtGConfig-1.0.CapabilitiesHostSecModel

        get_doi(): string;
        get_model(): string;
    }

    module Domain {
        // Constructor properties interface
    }

    class Domain extends Object {
        // Own properties of LibvirtGConfig-1.0.Domain

        current_memory: number;
        currentMemory: number;
        description: string;
        features: string[];
        memory: number;
        name: string;
        title: string;
        uuid: string;
        vcpu: number;

        // Constructors of LibvirtGConfig-1.0.Domain

        static ['new'](): Domain;

        static new_from_xml(xml: string): Domain;

        // Owm methods of LibvirtGConfig-1.0.Domain

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
    }

    abstract class DomainAddress extends Object {}

    module DomainAddressPci {
        // Constructor properties interface
    }

    class DomainAddressPci extends DomainAddress {
        // Constructors of LibvirtGConfig-1.0.DomainAddressPci

        static ['new'](): DomainAddressPci;

        static new_from_xml(xml: string): DomainAddressPci;

        // Owm methods of LibvirtGConfig-1.0.DomainAddressPci

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
    }

    class DomainAddressUsb extends DomainAddress {
        // Constructors of LibvirtGConfig-1.0.DomainAddressUsb

        static ['new'](): DomainAddressUsb;

        static new_from_xml(xml: string): DomainAddressUsb;

        // Owm methods of LibvirtGConfig-1.0.DomainAddressUsb

        set_bus(bus: number): void;
        set_port(port: string): void;
    }

    module DomainAudio {
        // Constructor properties interface
    }

    class DomainAudio extends DomainDevice {
        // Constructors of LibvirtGConfig-1.0.DomainAudio

        static ['new'](): DomainAudio;

        static new_from_xml(xml: string): DomainAudio;

        // Owm methods of LibvirtGConfig-1.0.DomainAudio

        set_backend(backend: DomainAudioBackend): void;
        set_server_name(server_name: string): void;
    }

    module DomainCapabilities {
        // Constructor properties interface
    }

    class DomainCapabilities extends Object {
        // Constructors of LibvirtGConfig-1.0.DomainCapabilities

        static ['new'](): DomainCapabilities;

        static new_from_xml(xml: string): DomainCapabilities;

        // Owm methods of LibvirtGConfig-1.0.DomainCapabilities

        /**
         * Gets the `os` associated with the `domain_caps`.
         * @returns a new #GVirConfigDomainCapabilitiesOs.
         */
        get_os(): DomainCapabilitiesOs;
    }

    module DomainCapabilitiesOs {
        // Constructor properties interface
    }

    class DomainCapabilitiesOs extends Object {
        // Owm methods of LibvirtGConfig-1.0.DomainCapabilitiesOs

        /**
         * Gets the firmwares supported by `os`. The returned list should be freed with
         * g_list_free().
         * @returns a newly allocated #GList of #GVirConfigDomainOsFirmware.
         */
        get_firmwares(): DomainOsFirmware[];
    }

    module DomainChannel {
        // Constructor properties interface
    }

    class DomainChannel extends DomainChardev {
        // Constructors of LibvirtGConfig-1.0.DomainChannel

        static ['new'](): DomainChannel;

        static new_from_xml(xml: string): DomainChannel;

        // Owm methods of LibvirtGConfig-1.0.DomainChannel

        get_target_name(): string;
        get_target_type(): DomainChannelTargetType;
        set_target_name(name: string): void;
        set_target_type(type: DomainChannelTargetType): void;
    }

    module DomainChardev {
        // Constructor properties interface
    }

    abstract class DomainChardev extends DomainDevice {
        // Owm methods of LibvirtGConfig-1.0.DomainChardev

        /**
         * Gets the source for the chardev
         * @returns the chardev source
         */
        get_source(): DomainChardevSource;
        set_source(source: DomainChardevSource): void;
    }

    module DomainChardevSource {
        // Constructor properties interface
    }

    abstract class DomainChardevSource extends Object {}

    module DomainChardevSourcePty {
        // Constructor properties interface
    }

    class DomainChardevSourcePty extends DomainChardevSource {
        // Constructors of LibvirtGConfig-1.0.DomainChardevSourcePty

        static ['new'](): DomainChardevSourcePty;

        static new_from_xml(xml: string): DomainChardevSourcePty;

        // Owm methods of LibvirtGConfig-1.0.DomainChardevSourcePty

        get_path(): string;
        set_path(path: string): void;
    }

    module DomainChardevSourceSpicePort {
        // Constructor properties interface
    }

    class DomainChardevSourceSpicePort extends DomainChardevSource {
        // Constructors of LibvirtGConfig-1.0.DomainChardevSourceSpicePort

        static ['new'](): DomainChardevSourceSpicePort;

        static new_from_xml(xml: string): DomainChardevSourceSpicePort;

        // Owm methods of LibvirtGConfig-1.0.DomainChardevSourceSpicePort

        get_channel(): string;
        set_channel(channel: string): void;
    }

    module DomainChardevSourceSpiceVmc {
        // Constructor properties interface
    }

    class DomainChardevSourceSpiceVmc extends DomainChardevSource {
        // Constructors of LibvirtGConfig-1.0.DomainChardevSourceSpiceVmc

        static ['new'](): DomainChardevSourceSpiceVmc;

        static new_from_xml(xml: string): DomainChardevSourceSpiceVmc;
    }

    module DomainChardevSourceUnix {
        // Constructor properties interface
    }

    class DomainChardevSourceUnix extends DomainChardevSource {
        // Constructors of LibvirtGConfig-1.0.DomainChardevSourceUnix

        static ['new'](): DomainChardevSourceUnix;

        static new_from_xml(xml: string): DomainChardevSourceUnix;
    }

    module DomainClock {
        // Constructor properties interface
    }

    class DomainClock extends Object {
        // Constructors of LibvirtGConfig-1.0.DomainClock

        static ['new'](): DomainClock;

        static new_from_xml(xml: string): DomainClock;

        // Owm methods of LibvirtGConfig-1.0.DomainClock

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
    }

    class DomainConsole extends DomainChardev {
        // Constructors of LibvirtGConfig-1.0.DomainConsole

        static ['new'](): DomainConsole;

        static new_from_xml(xml: string): DomainConsole;

        // Owm methods of LibvirtGConfig-1.0.DomainConsole

        set_target_type(type: DomainConsoleTargetType): void;
    }

    module DomainController {
        // Constructor properties interface
    }

    abstract class DomainController extends DomainDevice {
        // Owm methods of LibvirtGConfig-1.0.DomainController

        get_index(): number;
        get_ports(): number;
        set_address(address?: DomainAddress | null): void;
        set_index(index: number): void;
        set_ports(ports: number): void;
    }

    module DomainControllerUsb {
        // Constructor properties interface
    }

    /**
     * The #GVirConfigDomainControllerUsb struct is an opaque data structure
     * which is used to configure USB controllers on a domain. It should only
     * be accessed via the following functions.
     */
    class DomainControllerUsb extends DomainController {
        // Constructors of LibvirtGConfig-1.0.DomainControllerUsb

        static ['new'](): DomainControllerUsb;

        static new_from_xml(xml: string): DomainControllerUsb;

        // Owm methods of LibvirtGConfig-1.0.DomainControllerUsb

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
    }

    class DomainCpu extends CapabilitiesCpu {
        // Constructors of LibvirtGConfig-1.0.DomainCpu

        static ['new'](): DomainCpu;

        static new_from_xml(xml: string): DomainCpu;

        // Owm methods of LibvirtGConfig-1.0.DomainCpu

        get_match_policy(): DomainCpuMatchPolicy;
        get_mode(): DomainCpuMode;
        set_match_policy(policy: DomainCpuMatchPolicy): void;
        set_mode(mode: DomainCpuMode): void;
        set_model(model: DomainCpuModel): void;
    }

    module DomainCpuFeature {
        // Constructor properties interface
    }

    class DomainCpuFeature extends CapabilitiesCpuFeature {
        // Constructors of LibvirtGConfig-1.0.DomainCpuFeature

        static ['new'](): DomainCpuFeature;

        static new_from_xml(xml: string): DomainCpuFeature;

        // Owm methods of LibvirtGConfig-1.0.DomainCpuFeature

        get_policy(): DomainCpuFeaturePolicy;
        set_policy(policy: DomainCpuFeaturePolicy): void;
    }

    module DomainCpuModel {
        // Constructor properties interface
    }

    class DomainCpuModel extends CapabilitiesCpuModel {
        // Constructors of LibvirtGConfig-1.0.DomainCpuModel

        static ['new'](): DomainCpuModel;

        static new_from_xml(xml: string): DomainCpuModel;
    }

    module DomainDevice {
        // Constructor properties interface
    }

    class DomainDevice extends Object {
        // Owm methods of LibvirtGConfig-1.0.DomainDevice

        get_alias(): string;
    }

    module DomainDisk {
        // Constructor properties interface
    }

    class DomainDisk extends DomainDevice {
        // Constructors of LibvirtGConfig-1.0.DomainDisk

        static ['new'](): DomainDisk;

        static new_from_xml(xml: string): DomainDisk;

        // Owm methods of LibvirtGConfig-1.0.DomainDisk

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
    }

    class DomainDiskDriver extends Object {
        // Constructors of LibvirtGConfig-1.0.DomainDiskDriver

        static ['new'](): DomainDiskDriver;

        static new_from_xml(xml: string): DomainDiskDriver;

        // Owm methods of LibvirtGConfig-1.0.DomainDiskDriver

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
    }

    class DomainFilesys extends DomainDevice {
        // Constructors of LibvirtGConfig-1.0.DomainFilesys

        static ['new'](): DomainFilesys;

        static new_from_xml(xml: string): DomainFilesys;

        // Owm methods of LibvirtGConfig-1.0.DomainFilesys

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
    }

    abstract class DomainGraphics extends DomainDevice {}

    module DomainGraphicsDBus {
        // Constructor properties interface
    }

    class DomainGraphicsDBus extends DomainGraphics {
        // Constructors of LibvirtGConfig-1.0.DomainGraphicsDBus

        static ['new'](): DomainGraphicsDBus;

        static new_from_xml(xml: string): DomainGraphicsDBus;

        // Owm methods of LibvirtGConfig-1.0.DomainGraphicsDBus

        get_address(): string;
        set_address(address: string): void;
        set_gl(gl: boolean): void;
    }

    module DomainGraphicsDesktop {
        // Constructor properties interface
    }

    class DomainGraphicsDesktop extends DomainGraphics {
        // Constructors of LibvirtGConfig-1.0.DomainGraphicsDesktop

        static ['new'](): DomainGraphicsDesktop;

        static new_from_xml(xml: string): DomainGraphicsDesktop;

        // Owm methods of LibvirtGConfig-1.0.DomainGraphicsDesktop

        get_display(): string;
        get_fullscreen(): boolean;
        set_display(disp: string): void;
        set_fullscreen(fullscreen: boolean): void;
    }

    module DomainGraphicsRdp {
        // Constructor properties interface
    }

    class DomainGraphicsRdp extends DomainGraphics {
        // Constructors of LibvirtGConfig-1.0.DomainGraphicsRdp

        static ['new'](): DomainGraphicsRdp;

        static new_from_xml(xml: string): DomainGraphicsRdp;

        // Owm methods of LibvirtGConfig-1.0.DomainGraphicsRdp

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
    }

    class DomainGraphicsSdl extends DomainGraphics {
        // Constructors of LibvirtGConfig-1.0.DomainGraphicsSdl

        static ['new'](): DomainGraphicsSdl;

        static new_from_xml(xml: string): DomainGraphicsSdl;

        // Owm methods of LibvirtGConfig-1.0.DomainGraphicsSdl

        set_display(disp: string): void;
        set_fullscreen(fullscreen: boolean): void;
        set_xauthority(path: string): void;
    }

    module DomainGraphicsSpice {
        // Constructor properties interface
    }

    class DomainGraphicsSpice extends DomainGraphics {
        // Constructors of LibvirtGConfig-1.0.DomainGraphicsSpice

        static ['new'](): DomainGraphicsSpice;

        static new_from_xml(xml: string): DomainGraphicsSpice;

        // Owm methods of LibvirtGConfig-1.0.DomainGraphicsSpice

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
    }

    class DomainGraphicsVnc extends DomainGraphics {
        // Constructors of LibvirtGConfig-1.0.DomainGraphicsVnc

        static ['new'](): DomainGraphicsVnc;

        static new_from_xml(xml: string): DomainGraphicsVnc;

        // Owm methods of LibvirtGConfig-1.0.DomainGraphicsVnc

        get_port(): number;
        get_socket(): string;
        set_autoport(autoport: boolean): void;
        set_password(password: string): void;
        set_port(port: number): void;
        set_socket(socket: string): void;
    }

    module DomainHostdev {
        // Constructor properties interface
    }

    abstract class DomainHostdev extends DomainDevice {
        // Owm methods of LibvirtGConfig-1.0.DomainHostdev

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
    }

    class DomainHostdevPci extends DomainHostdev {
        // Constructors of LibvirtGConfig-1.0.DomainHostdevPci

        static ['new'](): DomainHostdevPci;

        static new_from_xml(xml: string): DomainHostdevPci;

        // Owm methods of LibvirtGConfig-1.0.DomainHostdevPci

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
    }

    class DomainInput extends DomainDevice {
        // Constructors of LibvirtGConfig-1.0.DomainInput

        static ['new'](): DomainInput;

        static new_from_xml(xml: string): DomainInput;

        // Owm methods of LibvirtGConfig-1.0.DomainInput

        get_bus(): DomainInputBus;
        get_device_type(): DomainInputDeviceType;
        set_bus(bus: DomainInputBus): void;
        set_device_type(type: DomainInputDeviceType): void;
    }

    module DomainInterface {
        // Constructor properties interface
    }

    abstract class DomainInterface extends DomainDevice {
        // Owm methods of LibvirtGConfig-1.0.DomainInterface

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
    }

    class DomainInterfaceBridge extends DomainInterface {
        // Constructors of LibvirtGConfig-1.0.DomainInterfaceBridge

        static ['new'](): DomainInterfaceBridge;

        static new_from_xml(xml: string): DomainInterfaceBridge;

        // Owm methods of LibvirtGConfig-1.0.DomainInterfaceBridge

        set_source(brname: string): void;
    }

    module DomainInterfaceFilterref {
        // Constructor properties interface
    }

    class DomainInterfaceFilterref extends Object {
        // Constructors of LibvirtGConfig-1.0.DomainInterfaceFilterref

        static ['new'](): DomainInterfaceFilterref;

        static new_from_xml(xml: string): DomainInterfaceFilterref;

        // Owm methods of LibvirtGConfig-1.0.DomainInterfaceFilterref

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
    }

    class DomainInterfaceFilterrefParameter extends Object {
        // Constructors of LibvirtGConfig-1.0.DomainInterfaceFilterrefParameter

        static ['new'](): DomainInterfaceFilterrefParameter;

        static new_from_xml(xml: string): DomainInterfaceFilterrefParameter;

        // Owm methods of LibvirtGConfig-1.0.DomainInterfaceFilterrefParameter

        get_name(): string;
        get_value(): string;
        set_name(name: string): void;
        set_value(value: string): void;
    }

    module DomainInterfaceNetwork {
        // Constructor properties interface
    }

    class DomainInterfaceNetwork extends DomainInterface {
        // Constructors of LibvirtGConfig-1.0.DomainInterfaceNetwork

        static ['new'](): DomainInterfaceNetwork;

        static new_from_xml(xml: string): DomainInterfaceNetwork;

        // Owm methods of LibvirtGConfig-1.0.DomainInterfaceNetwork

        set_source(source: string): void;
    }

    module DomainInterfaceUser {
        // Constructor properties interface
    }

    class DomainInterfaceUser extends DomainInterface {
        // Constructors of LibvirtGConfig-1.0.DomainInterfaceUser

        static ['new'](): DomainInterfaceUser;

        static new_from_xml(xml: string): DomainInterfaceUser;
    }

    module DomainMemballoon {
        // Constructor properties interface
    }

    class DomainMemballoon extends DomainDevice {
        // Constructors of LibvirtGConfig-1.0.DomainMemballoon

        static ['new'](): DomainMemballoon;

        static new_from_xml(xml: string): DomainMemballoon;

        // Owm methods of LibvirtGConfig-1.0.DomainMemballoon

        set_model(model: DomainMemballoonModel): void;
    }

    module DomainOs {
        // Constructor properties interface
    }

    class DomainOs extends Object {
        // Constructors of LibvirtGConfig-1.0.DomainOs

        static ['new'](): DomainOs;

        static new_from_xml(xml: string): DomainOs;

        // Owm methods of LibvirtGConfig-1.0.DomainOs

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
    }

    class DomainParallel extends DomainChardev {
        // Constructors of LibvirtGConfig-1.0.DomainParallel

        static ['new'](): DomainParallel;

        static new_from_xml(xml: string): DomainParallel;
    }

    module DomainPowerManagement {
        // Constructor properties interface
    }

    class DomainPowerManagement extends Object {
        // Constructors of LibvirtGConfig-1.0.DomainPowerManagement

        static ['new'](): DomainPowerManagement;

        static new_from_xml(xml: string): DomainPowerManagement;

        // Owm methods of LibvirtGConfig-1.0.DomainPowerManagement

        set_disk_suspend_enabled(enabled: boolean): void;
        set_mem_suspend_enabled(enabled: boolean): void;
    }

    module DomainRedirdev {
        // Constructor properties interface
    }

    class DomainRedirdev extends DomainChardev {
        // Constructors of LibvirtGConfig-1.0.DomainRedirdev

        static ['new'](): DomainRedirdev;

        static new_from_xml(xml: string): DomainRedirdev;

        // Owm methods of LibvirtGConfig-1.0.DomainRedirdev

        set_address(address?: DomainAddress | null): void;
        set_bus(bus: DomainRedirdevBus): void;
    }

    module DomainSeclabel {
        // Constructor properties interface
    }

    class DomainSeclabel extends Object {
        // Constructors of LibvirtGConfig-1.0.DomainSeclabel

        static ['new'](): DomainSeclabel;

        static new_from_xml(xml: string): DomainSeclabel;

        // Owm methods of LibvirtGConfig-1.0.DomainSeclabel

        set_baselabel(label?: string | null): void;
        set_label(label?: string | null): void;
        set_model(model: string): void;
        set_type(type: DomainSeclabelType): void;
    }

    module DomainSerial {
        // Constructor properties interface
    }

    class DomainSerial extends DomainChardev {
        // Constructors of LibvirtGConfig-1.0.DomainSerial

        static ['new'](): DomainSerial;

        static new_from_xml(xml: string): DomainSerial;
    }

    module DomainSmartcard {
        // Constructor properties interface
    }

    abstract class DomainSmartcard extends DomainDevice {
        // Owm methods of LibvirtGConfig-1.0.DomainSmartcard

        static set_address(redirdev: DomainRedirdev, address?: DomainAddress | null): void;
    }

    module DomainSmartcardHost {
        // Constructor properties interface
    }

    class DomainSmartcardHost extends DomainSmartcard {
        // Constructors of LibvirtGConfig-1.0.DomainSmartcardHost

        static ['new'](): DomainSmartcardHost;

        static new_from_xml(xml: string): DomainSmartcardHost;
    }

    module DomainSmartcardHostCertificates {
        // Constructor properties interface
    }

    class DomainSmartcardHostCertificates extends DomainSmartcard {
        // Constructors of LibvirtGConfig-1.0.DomainSmartcardHostCertificates

        static ['new'](): DomainSmartcardHostCertificates;

        static new_from_xml(xml: string): DomainSmartcardHostCertificates;

        // Owm methods of LibvirtGConfig-1.0.DomainSmartcardHostCertificates

        set_certificates(cert1?: string | null, cert2?: string | null, cert3?: string | null): void;
        set_database(path?: string | null): void;
    }

    module DomainSmartcardPassthrough {
        // Constructor properties interface
    }

    class DomainSmartcardPassthrough extends DomainSmartcard {
        // Constructors of LibvirtGConfig-1.0.DomainSmartcardPassthrough

        static ['new'](): DomainSmartcardPassthrough;

        static new_from_xml(xml: string): DomainSmartcardPassthrough;

        // Owm methods of LibvirtGConfig-1.0.DomainSmartcardPassthrough

        set_source(source: DomainChardevSource): void;
    }

    module DomainSnapshot {
        // Constructor properties interface
    }

    class DomainSnapshot extends Object {
        // Constructors of LibvirtGConfig-1.0.DomainSnapshot

        static ['new'](): DomainSnapshot;

        static new_from_xml(xml: string): DomainSnapshot;

        // Owm methods of LibvirtGConfig-1.0.DomainSnapshot

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
    }

    class DomainSnapshotDisk extends Object {
        // Constructors of LibvirtGConfig-1.0.DomainSnapshotDisk

        static ['new'](): DomainSnapshotDisk;

        static new_from_xml(xml: string): DomainSnapshotDisk;

        // Owm methods of LibvirtGConfig-1.0.DomainSnapshotDisk

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
    }

    class DomainSound extends DomainDevice {
        // Constructors of LibvirtGConfig-1.0.DomainSound

        static ['new'](): DomainSound;

        static new_from_xml(xml: string): DomainSound;

        // Owm methods of LibvirtGConfig-1.0.DomainSound

        set_model(model: DomainSoundModel): void;
    }

    module DomainTimer {
        // Constructor properties interface
    }

    abstract class DomainTimer extends Object {
        // Owm methods of LibvirtGConfig-1.0.DomainTimer

        get_present(): boolean;
        get_tick_policy(): DomainTimerTickPolicy;
        set_present(present: boolean): void;
        set_tick_policy(policy: DomainTimerTickPolicy): void;
    }

    module DomainTimerHpet {
        // Constructor properties interface
    }

    class DomainTimerHpet extends DomainTimer {
        // Constructors of LibvirtGConfig-1.0.DomainTimerHpet

        static ['new'](): DomainTimerHpet;

        static new_from_xml(xml: string): DomainTimerHpet;
    }

    module DomainTimerPit {
        // Constructor properties interface
    }

    class DomainTimerPit extends DomainTimer {
        // Constructors of LibvirtGConfig-1.0.DomainTimerPit

        static ['new'](): DomainTimerPit;

        static new_from_xml(xml: string): DomainTimerPit;
    }

    module DomainTimerRtc {
        // Constructor properties interface
    }

    class DomainTimerRtc extends DomainTimer {
        // Constructors of LibvirtGConfig-1.0.DomainTimerRtc

        static ['new'](): DomainTimerRtc;

        static new_from_xml(xml: string): DomainTimerRtc;
    }

    module DomainVideo {
        // Constructor properties interface
    }

    class DomainVideo extends DomainDevice {
        // Constructors of LibvirtGConfig-1.0.DomainVideo

        static ['new'](): DomainVideo;

        static new_from_xml(xml: string): DomainVideo;

        // Owm methods of LibvirtGConfig-1.0.DomainVideo

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
    }

    class Interface extends Object {
        // Constructors of LibvirtGConfig-1.0.Interface

        static ['new'](): Interface;

        static new_from_xml(xml: string): Interface;
    }

    module Network {
        // Constructor properties interface
    }

    class Network extends Object {
        // Constructors of LibvirtGConfig-1.0.Network

        static ['new'](): Network;

        static new_from_xml(xml: string): Network;
    }

    module NetworkFilter {
        // Constructor properties interface
    }

    class NetworkFilter extends Object {
        // Constructors of LibvirtGConfig-1.0.NetworkFilter

        static ['new'](): NetworkFilter;

        static new_from_xml(xml: string): NetworkFilter;
    }

    module NodeDevice {
        // Constructor properties interface
    }

    class NodeDevice extends Object {
        // Constructors of LibvirtGConfig-1.0.NodeDevice

        static ['new'](): NodeDevice;

        static new_from_xml(xml: string): NodeDevice;
    }

    module Object {
        // Constructor properties interface
    }

    class Object extends GObject.Object {
        // Own properties of LibvirtGConfig-1.0.Object

        node: any;
        schema: string;

        // Constructors of LibvirtGConfig-1.0.Object

        static ['new'](type: GObject.GType, root_name: string, schema: string): Object;

        static new_from_xml(type: GObject.GType, root_name: string, schema: string, xml: string): Object;

        // Owm methods of LibvirtGConfig-1.0.Object

        static error_quark(): GLib.Quark;

        // Owm methods of LibvirtGConfig-1.0.Object

        get_schema(): string;
        to_xml(): string;
        validate(): void;
    }

    module Secret {
        // Constructor properties interface
    }

    class Secret extends Object {
        // Constructors of LibvirtGConfig-1.0.Secret

        static ['new'](): Secret;

        static new_from_xml(xml: string): Secret;
    }

    module StoragePermissions {
        // Constructor properties interface
    }

    class StoragePermissions extends Object {
        // Constructors of LibvirtGConfig-1.0.StoragePermissions

        static ['new'](): StoragePermissions;

        static new_from_xml(xml: string): StoragePermissions;

        // Owm methods of LibvirtGConfig-1.0.StoragePermissions

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
    }

    class StoragePool extends Object {
        // Constructors of LibvirtGConfig-1.0.StoragePool

        static ['new'](): StoragePool;

        static new_from_xml(xml: string): StoragePool;

        // Owm methods of LibvirtGConfig-1.0.StoragePool

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
    }

    class StoragePoolSource extends Object {
        // Constructors of LibvirtGConfig-1.0.StoragePoolSource

        static ['new'](): StoragePoolSource;

        static new_from_xml(xml: string): StoragePoolSource;

        // Owm methods of LibvirtGConfig-1.0.StoragePoolSource

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
    }

    class StoragePoolTarget extends Object {
        // Constructors of LibvirtGConfig-1.0.StoragePoolTarget

        static ['new'](): StoragePoolTarget;

        static new_from_xml(xml: string): StoragePoolTarget;

        // Owm methods of LibvirtGConfig-1.0.StoragePoolTarget

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
    }

    class StorageVol extends Object {
        // Constructors of LibvirtGConfig-1.0.StorageVol

        static ['new'](): StorageVol;

        static new_from_xml(xml: string): StorageVol;

        // Owm methods of LibvirtGConfig-1.0.StorageVol

        set_allocation(allocation: number): void;
        set_backing_store(backing_store?: StorageVolBackingStore | null): void;
        set_capacity(capacity: number): void;
        set_name(name?: string | null): void;
        set_target(target?: StorageVolTarget | null): void;
    }

    module StorageVolBackingStore {
        // Constructor properties interface
    }

    class StorageVolBackingStore extends Object {
        // Constructors of LibvirtGConfig-1.0.StorageVolBackingStore

        static ['new'](): StorageVolBackingStore;

        static new_from_xml(xml: string): StorageVolBackingStore;

        // Owm methods of LibvirtGConfig-1.0.StorageVolBackingStore

        set_format(format: string): void;
        set_path(path?: string | null): void;
    }

    module StorageVolTarget {
        // Constructor properties interface
    }

    class StorageVolTarget extends Object {
        // Constructors of LibvirtGConfig-1.0.StorageVolTarget

        static ['new'](): StorageVolTarget;

        static new_from_xml(xml: string): StorageVolTarget;

        // Owm methods of LibvirtGConfig-1.0.StorageVolTarget

        set_compat(compat?: string | null): void;
        set_features(features: number): void;
        set_format(format: string): void;
        set_permissions(perms?: StoragePermissions | null): void;
    }

    class CapabilitiesClass {
        // Own fields of LibvirtGConfig-1.0.CapabilitiesClass

        padding: any[];
    }

    class CapabilitiesCpuClass {
        // Own fields of LibvirtGConfig-1.0.CapabilitiesCpuClass

        padding: any[];
    }

    class CapabilitiesCpuFeatureClass {
        // Own fields of LibvirtGConfig-1.0.CapabilitiesCpuFeatureClass

        padding: any[];
    }

    class CapabilitiesCpuFeaturePrivate {}

    class CapabilitiesCpuModelClass {
        // Own fields of LibvirtGConfig-1.0.CapabilitiesCpuModelClass

        padding: any[];
    }

    class CapabilitiesCpuModelPrivate {}

    class CapabilitiesCpuPrivate {}

    class CapabilitiesCpuTopologyClass {
        // Own fields of LibvirtGConfig-1.0.CapabilitiesCpuTopologyClass

        padding: any[];
    }

    class CapabilitiesCpuTopologyPrivate {}

    class CapabilitiesGuestArchClass {
        // Own fields of LibvirtGConfig-1.0.CapabilitiesGuestArchClass

        padding: any[];
    }

    class CapabilitiesGuestArchPrivate {}

    class CapabilitiesGuestClass {
        // Own fields of LibvirtGConfig-1.0.CapabilitiesGuestClass

        padding: any[];
    }

    class CapabilitiesGuestDomainClass {
        // Own fields of LibvirtGConfig-1.0.CapabilitiesGuestDomainClass

        padding: any[];
    }

    class CapabilitiesGuestDomainPrivate {}

    class CapabilitiesGuestFeatureClass {
        // Own fields of LibvirtGConfig-1.0.CapabilitiesGuestFeatureClass

        padding: any[];
    }

    class CapabilitiesGuestFeaturePrivate {}

    class CapabilitiesGuestPrivate {}

    class CapabilitiesHostClass {
        // Own fields of LibvirtGConfig-1.0.CapabilitiesHostClass

        padding: any[];
    }

    class CapabilitiesHostPrivate {}

    class CapabilitiesHostSecModelClass {
        // Own fields of LibvirtGConfig-1.0.CapabilitiesHostSecModelClass

        padding: any[];
    }

    class CapabilitiesHostSecModelPrivate {}

    class CapabilitiesPrivate {}

    class DomainAddressClass {
        // Own fields of LibvirtGConfig-1.0.DomainAddressClass

        padding: any[];
    }

    class DomainAddressPciClass {
        // Own fields of LibvirtGConfig-1.0.DomainAddressPciClass

        padding: any[];
    }

    class DomainAddressPciPrivate {}

    class DomainAddressPrivate {}

    class DomainAddressUsbClass {
        // Own fields of LibvirtGConfig-1.0.DomainAddressUsbClass

        padding: any[];
    }

    class DomainAddressUsbPrivate {}

    class DomainAudioClass {
        // Own fields of LibvirtGConfig-1.0.DomainAudioClass

        padding: any[];
    }

    class DomainAudioPrivate {}

    class DomainCapabilitiesClass {
        // Own fields of LibvirtGConfig-1.0.DomainCapabilitiesClass

        padding: any[];
    }

    class DomainCapabilitiesOsClass {
        // Own fields of LibvirtGConfig-1.0.DomainCapabilitiesOsClass

        padding: any[];
    }

    class DomainCapabilitiesOsPrivate {}

    class DomainCapabilitiesPrivate {}

    class DomainChannelClass {
        // Own fields of LibvirtGConfig-1.0.DomainChannelClass

        padding: any[];
    }

    class DomainChannelPrivate {}

    class DomainChardevClass {
        // Own fields of LibvirtGConfig-1.0.DomainChardevClass

        padding: any[];
    }

    class DomainChardevPrivate {}

    class DomainChardevSourceClass {
        // Own fields of LibvirtGConfig-1.0.DomainChardevSourceClass

        padding: any[];
    }

    class DomainChardevSourcePrivate {}

    class DomainChardevSourcePtyClass {
        // Own fields of LibvirtGConfig-1.0.DomainChardevSourcePtyClass

        padding: any[];
    }

    class DomainChardevSourcePtyPrivate {}

    class DomainChardevSourceSpicePortClass {
        // Own fields of LibvirtGConfig-1.0.DomainChardevSourceSpicePortClass

        padding: any[];
    }

    class DomainChardevSourceSpicePortPrivate {}

    class DomainChardevSourceSpiceVmcClass {
        // Own fields of LibvirtGConfig-1.0.DomainChardevSourceSpiceVmcClass

        padding: any[];
    }

    class DomainChardevSourceSpiceVmcPrivate {}

    class DomainChardevSourceUnixClass {
        // Own fields of LibvirtGConfig-1.0.DomainChardevSourceUnixClass

        padding: any[];
    }

    class DomainChardevSourceUnixPrivate {}

    class DomainClass {
        // Own fields of LibvirtGConfig-1.0.DomainClass

        padding: any[];
    }

    class DomainClockClass {
        // Own fields of LibvirtGConfig-1.0.DomainClockClass

        padding: any[];
    }

    class DomainClockPrivate {}

    class DomainConsoleClass {
        // Own fields of LibvirtGConfig-1.0.DomainConsoleClass

        padding: any[];
    }

    class DomainConsolePrivate {}

    class DomainControllerClass {
        // Own fields of LibvirtGConfig-1.0.DomainControllerClass

        padding: any[];
    }

    class DomainControllerPrivate {}

    class DomainControllerUsbClass {
        // Own fields of LibvirtGConfig-1.0.DomainControllerUsbClass

        padding: any[];
    }

    class DomainControllerUsbPrivate {}

    class DomainCpuClass {
        // Own fields of LibvirtGConfig-1.0.DomainCpuClass

        padding: any[];
    }

    class DomainCpuFeatureClass {
        // Own fields of LibvirtGConfig-1.0.DomainCpuFeatureClass

        padding: any[];
    }

    class DomainCpuFeaturePrivate {}

    class DomainCpuModelClass {
        // Own fields of LibvirtGConfig-1.0.DomainCpuModelClass

        padding: any[];
    }

    class DomainCpuModelPrivate {}

    class DomainCpuPrivate {}

    class DomainDeviceClass {
        // Own fields of LibvirtGConfig-1.0.DomainDeviceClass

        padding: any[];
    }

    class DomainDevicePrivate {}

    class DomainDiskClass {
        // Own fields of LibvirtGConfig-1.0.DomainDiskClass

        padding: any[];
    }

    class DomainDiskDriverClass {
        // Own fields of LibvirtGConfig-1.0.DomainDiskDriverClass

        padding: any[];
    }

    class DomainDiskDriverPrivate {}

    class DomainDiskPrivate {}

    class DomainFilesysClass {
        // Own fields of LibvirtGConfig-1.0.DomainFilesysClass

        padding: any[];
    }

    class DomainFilesysPrivate {}

    class DomainGraphicsClass {
        // Own fields of LibvirtGConfig-1.0.DomainGraphicsClass

        padding: any[];
    }

    class DomainGraphicsDBusClass {
        // Own fields of LibvirtGConfig-1.0.DomainGraphicsDBusClass

        padding: any[];
    }

    class DomainGraphicsDBusPrivate {}

    class DomainGraphicsDesktopClass {
        // Own fields of LibvirtGConfig-1.0.DomainGraphicsDesktopClass

        padding: any[];
    }

    class DomainGraphicsDesktopPrivate {}

    class DomainGraphicsPrivate {}

    class DomainGraphicsRdpClass {
        // Own fields of LibvirtGConfig-1.0.DomainGraphicsRdpClass

        padding: any[];
    }

    class DomainGraphicsRdpPrivate {}

    class DomainGraphicsSdlClass {
        // Own fields of LibvirtGConfig-1.0.DomainGraphicsSdlClass

        padding: any[];
    }

    class DomainGraphicsSdlPrivate {}

    class DomainGraphicsSpiceClass {
        // Own fields of LibvirtGConfig-1.0.DomainGraphicsSpiceClass

        padding: any[];
    }

    class DomainGraphicsSpicePrivate {}

    class DomainGraphicsVncClass {
        // Own fields of LibvirtGConfig-1.0.DomainGraphicsVncClass

        padding: any[];
    }

    class DomainGraphicsVncPrivate {}

    class DomainHostdevClass {
        // Own fields of LibvirtGConfig-1.0.DomainHostdevClass

        padding: any[];
    }

    class DomainHostdevPciClass {
        // Own fields of LibvirtGConfig-1.0.DomainHostdevPciClass

        padding: any[];
    }

    class DomainHostdevPciPrivate {}

    class DomainHostdevPrivate {}

    class DomainInputClass {
        // Own fields of LibvirtGConfig-1.0.DomainInputClass

        padding: any[];
    }

    class DomainInputPrivate {}

    class DomainInterfaceBridgeClass {
        // Own fields of LibvirtGConfig-1.0.DomainInterfaceBridgeClass

        padding: any[];
    }

    class DomainInterfaceBridgePrivate {}

    class DomainInterfaceClass {
        // Own fields of LibvirtGConfig-1.0.DomainInterfaceClass

        padding: any[];
    }

    class DomainInterfaceFilterrefClass {
        // Own fields of LibvirtGConfig-1.0.DomainInterfaceFilterrefClass

        padding: any[];
    }

    class DomainInterfaceFilterrefParameterClass {
        // Own fields of LibvirtGConfig-1.0.DomainInterfaceFilterrefParameterClass

        padding: any[];
    }

    class DomainInterfaceFilterrefParameterPrivate {}

    class DomainInterfaceFilterrefPrivate {}

    class DomainInterfaceNetworkClass {
        // Own fields of LibvirtGConfig-1.0.DomainInterfaceNetworkClass

        padding: any[];
    }

    class DomainInterfaceNetworkPrivate {}

    class DomainInterfacePrivate {}

    class DomainInterfaceUserClass {
        // Own fields of LibvirtGConfig-1.0.DomainInterfaceUserClass

        padding: any[];
    }

    class DomainInterfaceUserPrivate {}

    class DomainMemballoonClass {
        // Own fields of LibvirtGConfig-1.0.DomainMemballoonClass

        padding: any[];
    }

    class DomainMemballoonPrivate {}

    class DomainOsClass {
        // Own fields of LibvirtGConfig-1.0.DomainOsClass

        padding: any[];
    }

    class DomainOsPrivate {}

    class DomainParallelClass {
        // Own fields of LibvirtGConfig-1.0.DomainParallelClass

        padding: any[];
    }

    class DomainParallelPrivate {}

    class DomainPowerManagementClass {
        // Own fields of LibvirtGConfig-1.0.DomainPowerManagementClass

        padding: any[];
    }

    class DomainPowerManagementPrivate {}

    class DomainPrivate {}

    class DomainRedirdevClass {
        // Own fields of LibvirtGConfig-1.0.DomainRedirdevClass

        padding: any[];
    }

    class DomainRedirdevPrivate {}

    class DomainSeclabelClass {
        // Own fields of LibvirtGConfig-1.0.DomainSeclabelClass

        padding: any[];
    }

    class DomainSeclabelPrivate {}

    class DomainSerialClass {
        // Own fields of LibvirtGConfig-1.0.DomainSerialClass

        padding: any[];
    }

    class DomainSerialPrivate {}

    class DomainSmartcardClass {
        // Own fields of LibvirtGConfig-1.0.DomainSmartcardClass

        padding: any[];
    }

    class DomainSmartcardHostCertificatesClass {
        // Own fields of LibvirtGConfig-1.0.DomainSmartcardHostCertificatesClass

        padding: any[];
    }

    class DomainSmartcardHostCertificatesPrivate {}

    class DomainSmartcardHostClass {
        // Own fields of LibvirtGConfig-1.0.DomainSmartcardHostClass

        padding: any[];
    }

    class DomainSmartcardHostPrivate {}

    class DomainSmartcardPassthroughClass {
        // Own fields of LibvirtGConfig-1.0.DomainSmartcardPassthroughClass

        padding: any[];
    }

    class DomainSmartcardPassthroughPrivate {}

    class DomainSmartcardPrivate {}

    class DomainSnapshotClass {
        // Own fields of LibvirtGConfig-1.0.DomainSnapshotClass

        padding: any[];
    }

    class DomainSnapshotDiskClass {
        // Own fields of LibvirtGConfig-1.0.DomainSnapshotDiskClass

        padding: any[];
    }

    class DomainSnapshotDiskPrivate {}

    class DomainSnapshotPrivate {}

    class DomainSoundClass {
        // Own fields of LibvirtGConfig-1.0.DomainSoundClass

        padding: any[];
    }

    class DomainSoundPrivate {}

    class DomainTimerClass {
        // Own fields of LibvirtGConfig-1.0.DomainTimerClass

        padding: any[];
    }

    class DomainTimerHpetClass {
        // Own fields of LibvirtGConfig-1.0.DomainTimerHpetClass

        padding: any[];
    }

    class DomainTimerHpetPrivate {}

    class DomainTimerPitClass {
        // Own fields of LibvirtGConfig-1.0.DomainTimerPitClass

        padding: any[];
    }

    class DomainTimerPitPrivate {}

    class DomainTimerPrivate {}

    class DomainTimerRtcClass {
        // Own fields of LibvirtGConfig-1.0.DomainTimerRtcClass

        padding: any[];
    }

    class DomainTimerRtcPrivate {}

    class DomainVideoClass {
        // Own fields of LibvirtGConfig-1.0.DomainVideoClass

        padding: any[];
    }

    class DomainVideoPrivate {}

    class InterfaceClass {
        // Own fields of LibvirtGConfig-1.0.InterfaceClass

        padding: any[];
    }

    class InterfacePrivate {}

    class NetworkClass {
        // Own fields of LibvirtGConfig-1.0.NetworkClass

        padding: any[];
    }

    class NetworkFilterClass {
        // Own fields of LibvirtGConfig-1.0.NetworkFilterClass

        padding: any[];
    }

    class NetworkFilterPrivate {}

    class NetworkPrivate {}

    class NodeDeviceClass {
        // Own fields of LibvirtGConfig-1.0.NodeDeviceClass

        padding: any[];
    }

    class NodeDevicePrivate {}

    class ObjectClass {
        // Own fields of LibvirtGConfig-1.0.ObjectClass

        padding: any[];
    }

    class ObjectPrivate {}

    class SecretClass {
        // Own fields of LibvirtGConfig-1.0.SecretClass

        padding: any[];
    }

    class SecretPrivate {}

    class StoragePermissionsClass {
        // Own fields of LibvirtGConfig-1.0.StoragePermissionsClass

        padding: any[];
    }

    class StoragePermissionsPrivate {}

    class StoragePoolClass {
        // Own fields of LibvirtGConfig-1.0.StoragePoolClass

        padding: any[];
    }

    class StoragePoolPrivate {}

    class StoragePoolSourceClass {
        // Own fields of LibvirtGConfig-1.0.StoragePoolSourceClass

        padding: any[];
    }

    class StoragePoolSourcePrivate {}

    class StoragePoolTargetClass {
        // Own fields of LibvirtGConfig-1.0.StoragePoolTargetClass

        padding: any[];
    }

    class StoragePoolTargetPrivate {}

    class StorageVolBackingStoreClass {
        // Own fields of LibvirtGConfig-1.0.StorageVolBackingStoreClass

        padding: any[];
    }

    class StorageVolBackingStorePrivate {}

    class StorageVolClass {
        // Own fields of LibvirtGConfig-1.0.StorageVolClass

        padding: any[];
    }

    class StorageVolPrivate {}

    class StorageVolTargetClass {
        // Own fields of LibvirtGConfig-1.0.StorageVolTargetClass

        padding: any[];
    }

    class StorageVolTargetPrivate {}

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
