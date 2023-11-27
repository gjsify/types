
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
enum StorageVolTargetFeatures {
    REFCOUNT,
}
function init(argv: string[] | null): /* argv */ string[] | null
function init_check(argv: string[] | null): [ /* returnType */ boolean, /* argv */ string[] | null ]
module Capabilities {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface Capabilities {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.Capabilities

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.Capabilities

    /**
     * Gets the list of guest capabilities.
     * @returns  a newly allocated #GList of #GVirConfigCapabilitiesGuest.
     */
    get_guests(): CapabilitiesGuest[]
    /**
     * Gets the host capabilities.
     * @returns a new #GVirConfigCapabilitiesHost.
     */
    get_host(): CapabilitiesHost

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.Capabilities

    connect(sigName: "notify::node", callback: (($obj: Capabilities, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: Capabilities, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: Capabilities, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: Capabilities, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Capabilities extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.Capabilities

    static name: string
    static $gtype: GObject.GType<Capabilities>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.Capabilities

    constructor(config?: Capabilities.ConstructorProperties) 
    constructor() 
    static new(): Capabilities

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): Capabilities

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: Capabilities.ConstructorProperties): void
}

module CapabilitiesCpu {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface CapabilitiesCpu {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpu

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpu

    /**
     * Adds a new feature to CPU.
     * @param feature 
     */
    add_feature(feature: CapabilitiesCpuFeature): void
    get_arch(): string | null
    /**
     * Gets the features of this CPU.
     * @returns  a newly allocated #GList of #GVirConfigCapabilitiesCpuFeature.
     */
    get_features(): CapabilitiesCpuFeature[]
    /**
     * Gets the model of the cpu.
     * @returns a new #GVirConfigCapabilitiesCpuModel.
     */
    get_model(): CapabilitiesCpuModel
    /**
     * Gets the topology of the cpu.
     * @returns a new #GVirConfigCapabilitiesCpuTopology.
     */
    get_topology(): CapabilitiesCpuTopology
    /**
     * Sets the topology of the cpu.
     * @param topology 
     */
    set_topology(topology: CapabilitiesCpuTopology): void

    // Own virtual methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpu

    /**
     * Gets the features of this CPU.
     * @virtual 
     * @returns  a newly allocated #GList of #GVirConfigCapabilitiesCpuFeature.
     */
    vfunc_get_features(): CapabilitiesCpuFeature[]

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpu

    connect(sigName: "notify::node", callback: (($obj: CapabilitiesCpu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: CapabilitiesCpu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: CapabilitiesCpu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: CapabilitiesCpu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CapabilitiesCpu extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpu

    static name: string
    static $gtype: GObject.GType<CapabilitiesCpu>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpu

    constructor(config?: CapabilitiesCpu.ConstructorProperties) 
    _init(config?: CapabilitiesCpu.ConstructorProperties): void
}

module CapabilitiesCpuFeature {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface CapabilitiesCpuFeature {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuFeature

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuFeature

    get_name(): string | null
    set_name(name: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuFeature

    connect(sigName: "notify::node", callback: (($obj: CapabilitiesCpuFeature, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: CapabilitiesCpuFeature, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: CapabilitiesCpuFeature, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: CapabilitiesCpuFeature, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CapabilitiesCpuFeature extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuFeature

    static name: string
    static $gtype: GObject.GType<CapabilitiesCpuFeature>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuFeature

    constructor(config?: CapabilitiesCpuFeature.ConstructorProperties) 
    _init(config?: CapabilitiesCpuFeature.ConstructorProperties): void
}

module CapabilitiesCpuModel {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface CapabilitiesCpuModel {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuModel

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuModel

    get_name(): string | null
    set_name(name: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuModel

    connect(sigName: "notify::node", callback: (($obj: CapabilitiesCpuModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: CapabilitiesCpuModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: CapabilitiesCpuModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: CapabilitiesCpuModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CapabilitiesCpuModel extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuModel

    static name: string
    static $gtype: GObject.GType<CapabilitiesCpuModel>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuModel

    constructor(config?: CapabilitiesCpuModel.ConstructorProperties) 
    constructor() 
    static new(): CapabilitiesCpuModel

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): CapabilitiesCpuModel

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: CapabilitiesCpuModel.ConstructorProperties): void
}

module CapabilitiesCpuTopology {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface CapabilitiesCpuTopology {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuTopology

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuTopology

    get_cores(): number
    get_sockets(): number
    get_threads(): number
    set_cores(cores: number): void
    set_sockets(sockets: number): void
    set_threads(threads: number): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuTopology

    connect(sigName: "notify::node", callback: (($obj: CapabilitiesCpuTopology, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: CapabilitiesCpuTopology, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: CapabilitiesCpuTopology, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: CapabilitiesCpuTopology, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CapabilitiesCpuTopology extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuTopology

    static name: string
    static $gtype: GObject.GType<CapabilitiesCpuTopology>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuTopology

    constructor(config?: CapabilitiesCpuTopology.ConstructorProperties) 
    constructor() 
    static new(): CapabilitiesCpuTopology

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): CapabilitiesCpuTopology

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: CapabilitiesCpuTopology.ConstructorProperties): void
}

module CapabilitiesGuest {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface CapabilitiesGuest {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuest

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuest

    /**
     * Gets the CPU architecture capabilities of the guest.
     * @returns a new #GVirConfigCapabilitiesGuestArch.
     */
    get_arch(): CapabilitiesGuestArch
    /**
     * Gets the CPU features for this guest.
     * @returns  a newly allocated #GList of #GVirConfigCapabilitiesGuestFeature.
     */
    get_features(): CapabilitiesGuestFeature[]
    get_os_type(): DomainOsType

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuest

    connect(sigName: "notify::node", callback: (($obj: CapabilitiesGuest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: CapabilitiesGuest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: CapabilitiesGuest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: CapabilitiesGuest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CapabilitiesGuest extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuest

    static name: string
    static $gtype: GObject.GType<CapabilitiesGuest>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuest

    constructor(config?: CapabilitiesGuest.ConstructorProperties) 
    _init(config?: CapabilitiesGuest.ConstructorProperties): void
}

module CapabilitiesGuestArch {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface CapabilitiesGuestArch {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestArch

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestArch

    /**
     * Gets the possible domains for this architecture.
     * @returns  a newly allocated #GList of #GVirConfigCapabilitiesGuestDomain.
     */
    get_domains(): CapabilitiesGuestDomain[]
    get_emulator(): string | null
    get_name(): string | null

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestArch

    connect(sigName: "notify::node", callback: (($obj: CapabilitiesGuestArch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: CapabilitiesGuestArch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: CapabilitiesGuestArch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: CapabilitiesGuestArch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CapabilitiesGuestArch extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestArch

    static name: string
    static $gtype: GObject.GType<CapabilitiesGuestArch>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestArch

    constructor(config?: CapabilitiesGuestArch.ConstructorProperties) 
    _init(config?: CapabilitiesGuestArch.ConstructorProperties): void
}

module CapabilitiesGuestDomain {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface CapabilitiesGuestDomain {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestDomain

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestDomain

    get_emulator(): string | null
    get_virt_type(): DomainVirtType

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestDomain

    connect(sigName: "notify::node", callback: (($obj: CapabilitiesGuestDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: CapabilitiesGuestDomain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: CapabilitiesGuestDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: CapabilitiesGuestDomain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CapabilitiesGuestDomain extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestDomain

    static name: string
    static $gtype: GObject.GType<CapabilitiesGuestDomain>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestDomain

    constructor(config?: CapabilitiesGuestDomain.ConstructorProperties) 
    _init(config?: CapabilitiesGuestDomain.ConstructorProperties): void
}

module CapabilitiesGuestFeature {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface CapabilitiesGuestFeature {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestFeature

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestFeature

    get_name(): string | null

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestFeature

    connect(sigName: "notify::node", callback: (($obj: CapabilitiesGuestFeature, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: CapabilitiesGuestFeature, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: CapabilitiesGuestFeature, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: CapabilitiesGuestFeature, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CapabilitiesGuestFeature extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestFeature

    static name: string
    static $gtype: GObject.GType<CapabilitiesGuestFeature>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestFeature

    constructor(config?: CapabilitiesGuestFeature.ConstructorProperties) 
    _init(config?: CapabilitiesGuestFeature.ConstructorProperties): void
}

module CapabilitiesHost {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface CapabilitiesHost {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHost

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHost

    /**
     * Gets the CPU capabilities of the host.
     * @returns a new #GVirConfigCapabilitiesCpu.
     */
    get_cpu(): CapabilitiesCpu
    /**
     * Get the security models listed in `host` capabilities.
     * @returns  a newly allocated #GList of #GVirConfigCapabilitiesHostSecModel.
     */
    get_secmodels(): CapabilitiesHostSecModel[]
    get_uuid(): string | null

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHost

    connect(sigName: "notify::node", callback: (($obj: CapabilitiesHost, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: CapabilitiesHost, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: CapabilitiesHost, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: CapabilitiesHost, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CapabilitiesHost extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHost

    static name: string
    static $gtype: GObject.GType<CapabilitiesHost>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHost

    constructor(config?: CapabilitiesHost.ConstructorProperties) 
    _init(config?: CapabilitiesHost.ConstructorProperties): void
}

module CapabilitiesHostSecModel {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface CapabilitiesHostSecModel {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHostSecModel

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHostSecModel

    get_doi(): string | null
    get_model(): string | null

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHostSecModel

    connect(sigName: "notify::node", callback: (($obj: CapabilitiesHostSecModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: CapabilitiesHostSecModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: CapabilitiesHostSecModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: CapabilitiesHostSecModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CapabilitiesHostSecModel extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHostSecModel

    static name: string
    static $gtype: GObject.GType<CapabilitiesHostSecModel>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHostSecModel

    constructor(config?: CapabilitiesHostSecModel.ConstructorProperties) 
    _init(config?: CapabilitiesHostSecModel.ConstructorProperties): void
}

module Domain {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {

        // Own constructor properties of LibvirtGConfig-1.0.LibvirtGConfig.Domain

        current_memory?: number | null
        description?: string | null
        features?: string[] | null
        memory?: number | null
        name?: string | null
        title?: string | null
        uuid?: string | null
        vcpu?: number | null
        currentMemory?: number | null
    }

}

interface Domain {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.Domain

    current_memory: number
    currentMemory: number
    description: string | null
    features: string[]
    memory: number
    name: string | null
    title: string | null
    uuid: string | null
    vcpu: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.Domain

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.Domain

    add_device(device: DomainDevice): void
    /**
     * Gets the clock configuration of `domain`
     * @returns A #GVirConfigDomainClock. The returned object should be unreffed with g_object_unref() when no longer needed.
     */
    get_clock(): DomainClock
    /**
     * Gets the CPU configuration of `domain`
     * @returns A #GVirConfigDomainCpu. The returned object should be unreffed with g_object_unref() when no longer needed.
     */
    get_cpu(): DomainCpu
    get_current_memory(): number
    get_custom_xml(ns_uri: string | null): string | null
    get_description(): string | null
    /**
     * Gets the list of devices attached to `domain`.  The returned list should
     * be freed with g_list_free(), after its elements have been unreffed with
     * g_object_unref().
     * @returns  a newly allocated #GList of #GVirConfigDomainDevice.
     */
    get_devices(): DomainDevice[]
    get_features(): string[]
    get_memory(): number
    get_name(): string | null
    /**
     * Gets the operating system configuration of `domain`
     * @returns A #GVirConfigDomainOs. The returned object should be unreffed with g_object_unref() when no longer needed.
     */
    get_os(): DomainOs
    get_title(): string | null
    get_uuid(): string | null
    get_vcpus(): number
    get_virt_type(): DomainVirtType
    set_clock(klock: DomainClock | null): void
    set_cpu(cpu: DomainCpu | null): void
    /**
     * Sets the current amount of RAM allocated to `domain` in kilobytes (i.e.
     * blocks of 1024 bytes). This can be set to less than the maximum domain
     * memory to allow to balloon the guest memory on the fly. Be aware that
     * libvirt will set it automatically if it's not explictly set, which means
     * you may need to set this value in addition to 'memory' if you want to
     * change the available domain memory after creation.
     * @param memory The current amount of RAM in kilobytes.
     */
    set_current_memory(memory: number): void
    set_custom_xml(xml: string | null, ns: string | null, ns_uri: string | null): boolean
    set_custom_xml_ns_children(xml: string | null, ns: string | null, ns_uri: string | null): boolean
    set_description(description: string | null): void
    set_devices(devices: DomainDevice[]): void
    set_features(features: string[]): void
    set_lifecycle(event: DomainLifecycleEvent, action: DomainLifecycleAction): void
    /**
     * Sets the maximum amount of RAM allocated to `domain` in kilobytes (i.e.
     * blocks of 1024 bytes).
     * @param memory The maximum amount of RAM in kilobytes.
     */
    set_memory(memory: number): void
    set_name(name: string | null): void
    set_os(os: DomainOs | null): void
    set_power_management(pm: DomainPowerManagement | null): void
    set_seclabel(seclabel: DomainSeclabel | null): void
    /**
     * Sets the title of the domain. This is an optional short textual description of the domain. Passing a NULL `title`
     * unsets the current domain title.
     * @param title title of the domain
     */
    set_title(title: string | null): void
    set_uuid(uuid: string | null): void
    set_vcpus(vcpu_count: number): void
    set_virt_type(type: DomainVirtType): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.Domain

    connect(sigName: "notify::current-memory", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-memory", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-memory", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::features", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::features", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::features", ...args: any[]): void
    connect(sigName: "notify::memory", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::memory", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::memory", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::uuid", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uuid", ...args: any[]): void
    connect(sigName: "notify::vcpu", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vcpu", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vcpu", ...args: any[]): void
    connect(sigName: "notify::node", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: Domain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Domain extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.Domain

    static name: string
    static $gtype: GObject.GType<Domain>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.Domain

    constructor(config?: Domain.ConstructorProperties) 
    constructor() 
    static new(): Domain

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): Domain

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: Domain.ConstructorProperties): void
}

module DomainAddress {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface DomainAddress {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddress

    parent: Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddress

    connect(sigName: "notify::node", callback: (($obj: DomainAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainAddress, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainAddress, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainAddress extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddress

    static name: string
    static $gtype: GObject.GType<DomainAddress>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddress

    constructor(config?: DomainAddress.ConstructorProperties) 
    _init(config?: DomainAddress.ConstructorProperties): void
}

module DomainAddressPci {

    // Constructor properties interface

    interface ConstructorProperties extends DomainAddress.ConstructorProperties {
    }

}

interface DomainAddressPci {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressPci

    parent: DomainAddress & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressPci

    get_bus(): number
    get_domain(): number
    get_function(): number
    get_multifunction(): boolean
    get_slot(): number
    set_bus(bus: number): void
    set_domain(pci_domain: number): void
    set_function(function_: number): void
    set_multifunction(multifunction: boolean): void
    set_slot(slot: number): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressPci

    connect(sigName: "notify::node", callback: (($obj: DomainAddressPci, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainAddressPci, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainAddressPci, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainAddressPci, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainAddressPci extends DomainAddress {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressPci

    static name: string
    static $gtype: GObject.GType<DomainAddressPci>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressPci

    constructor(config?: DomainAddressPci.ConstructorProperties) 
    constructor() 
    static new(): DomainAddressPci

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainAddressPci

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainAddressPci.ConstructorProperties): void
}

module DomainAddressUsb {

    // Constructor properties interface

    interface ConstructorProperties extends DomainAddress.ConstructorProperties {
    }

}

interface DomainAddressUsb {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressUsb

    parent: DomainAddress & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressUsb

    set_bus(bus: number): void
    set_port(port: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressUsb

    connect(sigName: "notify::node", callback: (($obj: DomainAddressUsb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainAddressUsb, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainAddressUsb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainAddressUsb, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainAddressUsb extends DomainAddress {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressUsb

    static name: string
    static $gtype: GObject.GType<DomainAddressUsb>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressUsb

    constructor(config?: DomainAddressUsb.ConstructorProperties) 
    constructor() 
    static new(): DomainAddressUsb

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainAddressUsb

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainAddressUsb.ConstructorProperties): void
}

module DomainCapabilities {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface DomainCapabilities {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilities

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilities

    /**
     * Gets the `os` associated with the `domain_caps`.
     * @returns a new #GVirConfigDomainCapabilitiesOs.
     */
    get_os(): DomainCapabilitiesOs

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilities

    connect(sigName: "notify::node", callback: (($obj: DomainCapabilities, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainCapabilities, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainCapabilities, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainCapabilities, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainCapabilities extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilities

    static name: string
    static $gtype: GObject.GType<DomainCapabilities>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilities

    constructor(config?: DomainCapabilities.ConstructorProperties) 
    constructor() 
    static new(): DomainCapabilities

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainCapabilities

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainCapabilities.ConstructorProperties): void
}

module DomainCapabilitiesOs {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface DomainCapabilitiesOs {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesOs

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesOs

    /**
     * Gets the firmwares supported by `os`. The returned list should be freed with
     * g_list_free().
     * @returns  a newly allocated #GList of #GVirConfigDomainOsFirmware.
     */
    get_firmwares(): DomainOsFirmware[]

    // Own virtual methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesOs

    /**
     * Gets the firmwares supported by `os`. The returned list should be freed with
     * g_list_free().
     * @virtual 
     * @returns  a newly allocated #GList of #GVirConfigDomainOsFirmware.
     */
    vfunc_get_firmwares(): DomainOsFirmware[]

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesOs

    connect(sigName: "notify::node", callback: (($obj: DomainCapabilitiesOs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainCapabilitiesOs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainCapabilitiesOs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainCapabilitiesOs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainCapabilitiesOs extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesOs

    static name: string
    static $gtype: GObject.GType<DomainCapabilitiesOs>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesOs

    constructor(config?: DomainCapabilitiesOs.ConstructorProperties) 
    _init(config?: DomainCapabilitiesOs.ConstructorProperties): void
}

module DomainChannel {

    // Constructor properties interface

    interface ConstructorProperties extends DomainChardev.ConstructorProperties {
    }

}

interface DomainChannel {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChannel

    parent: DomainChardev & DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChannel

    get_target_name(): string | null
    get_target_type(): DomainChannelTargetType
    set_target_name(name: string | null): void
    set_target_type(type: DomainChannelTargetType): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainChannel

    connect(sigName: "notify::node", callback: (($obj: DomainChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainChannel extends DomainChardev {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChannel

    static name: string
    static $gtype: GObject.GType<DomainChannel>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainChannel

    constructor(config?: DomainChannel.ConstructorProperties) 
    constructor() 
    static new(): DomainChannel

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainChannel

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainChannel.ConstructorProperties): void
}

module DomainChardev {

    // Constructor properties interface

    interface ConstructorProperties extends DomainDevice.ConstructorProperties {
    }

}

interface DomainChardev {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev

    parent: DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev

    /**
     * Gets the source for the chardev
     * @returns the chardev source
     */
    get_source(): DomainChardevSource
    set_source(source: DomainChardevSource): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev

    connect(sigName: "notify::node", callback: (($obj: DomainChardev, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainChardev, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainChardev, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainChardev, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainChardev extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev

    static name: string
    static $gtype: GObject.GType<DomainChardev>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev

    constructor(config?: DomainChardev.ConstructorProperties) 
    _init(config?: DomainChardev.ConstructorProperties): void
}

module DomainChardevSource {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface DomainChardevSource {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSource

    parent: Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSource

    connect(sigName: "notify::node", callback: (($obj: DomainChardevSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainChardevSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainChardevSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainChardevSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainChardevSource extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSource

    static name: string
    static $gtype: GObject.GType<DomainChardevSource>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSource

    constructor(config?: DomainChardevSource.ConstructorProperties) 
    _init(config?: DomainChardevSource.ConstructorProperties): void
}

module DomainChardevSourcePty {

    // Constructor properties interface

    interface ConstructorProperties extends DomainChardevSource.ConstructorProperties {
    }

}

interface DomainChardevSourcePty {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourcePty

    parent: DomainChardevSource & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourcePty

    get_path(): string | null
    set_path(path: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourcePty

    connect(sigName: "notify::node", callback: (($obj: DomainChardevSourcePty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainChardevSourcePty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainChardevSourcePty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainChardevSourcePty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainChardevSourcePty extends DomainChardevSource {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourcePty

    static name: string
    static $gtype: GObject.GType<DomainChardevSourcePty>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourcePty

    constructor(config?: DomainChardevSourcePty.ConstructorProperties) 
    constructor() 
    static new(): DomainChardevSourcePty

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainChardevSourcePty

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainChardevSourcePty.ConstructorProperties): void
}

module DomainChardevSourceSpicePort {

    // Constructor properties interface

    interface ConstructorProperties extends DomainChardevSource.ConstructorProperties {
    }

}

interface DomainChardevSourceSpicePort {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpicePort

    parent: DomainChardevSource & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpicePort

    get_channel(): string | null
    set_channel(channel: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpicePort

    connect(sigName: "notify::node", callback: (($obj: DomainChardevSourceSpicePort, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainChardevSourceSpicePort, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainChardevSourceSpicePort, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainChardevSourceSpicePort, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainChardevSourceSpicePort extends DomainChardevSource {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpicePort

    static name: string
    static $gtype: GObject.GType<DomainChardevSourceSpicePort>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpicePort

    constructor(config?: DomainChardevSourceSpicePort.ConstructorProperties) 
    constructor() 
    static new(): DomainChardevSourceSpicePort

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainChardevSourceSpicePort

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainChardevSourceSpicePort.ConstructorProperties): void
}

module DomainChardevSourceSpiceVmc {

    // Constructor properties interface

    interface ConstructorProperties extends DomainChardevSource.ConstructorProperties {
    }

}

interface DomainChardevSourceSpiceVmc {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpiceVmc

    parent: DomainChardevSource & Object & GObject.Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpiceVmc

    connect(sigName: "notify::node", callback: (($obj: DomainChardevSourceSpiceVmc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainChardevSourceSpiceVmc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainChardevSourceSpiceVmc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainChardevSourceSpiceVmc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainChardevSourceSpiceVmc extends DomainChardevSource {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpiceVmc

    static name: string
    static $gtype: GObject.GType<DomainChardevSourceSpiceVmc>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpiceVmc

    constructor(config?: DomainChardevSourceSpiceVmc.ConstructorProperties) 
    constructor() 
    static new(): DomainChardevSourceSpiceVmc

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainChardevSourceSpiceVmc

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainChardevSourceSpiceVmc.ConstructorProperties): void
}

module DomainChardevSourceUnix {

    // Constructor properties interface

    interface ConstructorProperties extends DomainChardevSource.ConstructorProperties {
    }

}

interface DomainChardevSourceUnix {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceUnix

    parent: DomainChardevSource & Object & GObject.Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceUnix

    connect(sigName: "notify::node", callback: (($obj: DomainChardevSourceUnix, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainChardevSourceUnix, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainChardevSourceUnix, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainChardevSourceUnix, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainChardevSourceUnix extends DomainChardevSource {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceUnix

    static name: string
    static $gtype: GObject.GType<DomainChardevSourceUnix>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceUnix

    constructor(config?: DomainChardevSourceUnix.ConstructorProperties) 
    constructor() 
    static new(): DomainChardevSourceUnix

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainChardevSourceUnix

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainChardevSourceUnix.ConstructorProperties): void
}

module DomainClock {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface DomainClock {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainClock

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainClock

    add_timer(timer: DomainTimer): void
    get_offset(): DomainClockOffset
    get_timezone(): string | null
    get_variable_offset(): number
    set_offset(offset: DomainClockOffset): void
    set_timezone(tz: string | null): void
    set_variable_offset(seconds: number): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainClock

    connect(sigName: "notify::node", callback: (($obj: DomainClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainClock extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainClock

    static name: string
    static $gtype: GObject.GType<DomainClock>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainClock

    constructor(config?: DomainClock.ConstructorProperties) 
    constructor() 
    static new(): DomainClock

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainClock

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainClock.ConstructorProperties): void
}

module DomainConsole {

    // Constructor properties interface

    interface ConstructorProperties extends DomainChardev.ConstructorProperties {
    }

}

interface DomainConsole {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainConsole

    parent: DomainChardev & DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainConsole

    set_target_type(type: DomainConsoleTargetType): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainConsole

    connect(sigName: "notify::node", callback: (($obj: DomainConsole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainConsole, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainConsole, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainConsole, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainConsole extends DomainChardev {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainConsole

    static name: string
    static $gtype: GObject.GType<DomainConsole>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainConsole

    constructor(config?: DomainConsole.ConstructorProperties) 
    constructor() 
    static new(): DomainConsole

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainConsole

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainConsole.ConstructorProperties): void
}

module DomainController {

    // Constructor properties interface

    interface ConstructorProperties extends DomainDevice.ConstructorProperties {
    }

}

interface DomainController {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainController

    parent: DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainController

    get_index(): number
    get_ports(): number
    set_address(address: DomainAddress | null): void
    set_index(index: number): void
    set_ports(ports: number): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainController

    connect(sigName: "notify::node", callback: (($obj: DomainController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainController, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainController, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainController extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainController

    static name: string
    static $gtype: GObject.GType<DomainController>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainController

    constructor(config?: DomainController.ConstructorProperties) 
    _init(config?: DomainController.ConstructorProperties): void
}

module DomainControllerUsb {

    // Constructor properties interface

    interface ConstructorProperties extends DomainController.ConstructorProperties {
    }

}

interface DomainControllerUsb {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainControllerUsb

    parent: DomainController & DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainControllerUsb

    /**
     * Sets `controller` to be a companion controller of `master`. `controller`
     * will be exposed from port `startport` on `master` in the guest.
     * After this call, `controller'`s index will be set to `master'`s index.
     * @param master the master #GVirConfigDomainControllerUsb
     * @param startport the start port number
     */
    set_master(master: DomainControllerUsb, startport: number): void
    /**
     * Sets the model of `controller` to `model`.
     * @param model the USB controller model
     */
    set_model(model: DomainControllerUsbModel): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainControllerUsb

    connect(sigName: "notify::node", callback: (($obj: DomainControllerUsb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainControllerUsb, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainControllerUsb, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainControllerUsb, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GVirConfigDomainControllerUsb struct is an opaque data structure
 * which is used to configure USB controllers on a domain. It should only
 * be accessed via the following functions.
 * @class 
 */
class DomainControllerUsb extends DomainController {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainControllerUsb

    static name: string
    static $gtype: GObject.GType<DomainControllerUsb>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainControllerUsb

    constructor(config?: DomainControllerUsb.ConstructorProperties) 
    /**
     * Creates a new #GVirConfigDomainControllerUsb with a reference count of 1.
     * gvir_config_domain_controller_set_index() must be called before
     * this controller is usable.
     * @constructor 
     * @returns a new #GVirConfigDomainControllerUsb
     */
    constructor() 
    /**
     * Creates a new #GVirConfigDomainControllerUsb with a reference count of 1.
     * gvir_config_domain_controller_set_index() must be called before
     * this controller is usable.
     * @constructor 
     * @returns a new #GVirConfigDomainControllerUsb
     */
    static new(): DomainControllerUsb

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    /**
     * Creates a new #GVirConfigDomainControllerUsb with a reference count of 1.
     * The controller object will be created using the XML description stored
     * in `xml`. This is a fragment of libvirt domain XML whose root node is
     * &lt;controller&gt;.
     * @constructor 
     * @param xml xml data to create the controller from
     * @returns a new #GVirConfigDomainControllerUsb, or NULL if @xml failed to be parsed.
     */
    static new_from_xml(xml: string | null): DomainControllerUsb

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainControllerUsb.ConstructorProperties): void
}

module DomainCpu {

    // Constructor properties interface

    interface ConstructorProperties extends CapabilitiesCpu.ConstructorProperties {
    }

}

interface DomainCpu {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpu

    parent: CapabilitiesCpu & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpu

    get_match_policy(): DomainCpuMatchPolicy
    get_mode(): DomainCpuMode
    set_match_policy(policy: DomainCpuMatchPolicy): void
    set_mode(mode: DomainCpuMode): void
    set_model(model: DomainCpuModel): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpu

    connect(sigName: "notify::node", callback: (($obj: DomainCpu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainCpu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainCpu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainCpu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainCpu extends CapabilitiesCpu {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpu

    static name: string
    static $gtype: GObject.GType<DomainCpu>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpu

    constructor(config?: DomainCpu.ConstructorProperties) 
    constructor() 
    static new(): DomainCpu

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainCpu

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainCpu.ConstructorProperties): void
}

module DomainCpuFeature {

    // Constructor properties interface

    interface ConstructorProperties extends CapabilitiesCpuFeature.ConstructorProperties {
    }

}

interface DomainCpuFeature {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuFeature

    parent: CapabilitiesCpu & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuFeature

    get_policy(): DomainCpuFeaturePolicy
    set_policy(policy: DomainCpuFeaturePolicy): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuFeature

    connect(sigName: "notify::node", callback: (($obj: DomainCpuFeature, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainCpuFeature, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainCpuFeature, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainCpuFeature, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainCpuFeature extends CapabilitiesCpuFeature {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuFeature

    static name: string
    static $gtype: GObject.GType<DomainCpuFeature>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuFeature

    constructor(config?: DomainCpuFeature.ConstructorProperties) 
    constructor() 
    static new(): DomainCpuFeature

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainCpuFeature

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainCpuFeature.ConstructorProperties): void
}

module DomainCpuModel {

    // Constructor properties interface

    interface ConstructorProperties extends CapabilitiesCpuModel.ConstructorProperties {
    }

}

interface DomainCpuModel {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuModel

    parent: CapabilitiesCpuModel & Object & GObject.Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuModel

    connect(sigName: "notify::node", callback: (($obj: DomainCpuModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainCpuModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainCpuModel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainCpuModel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainCpuModel extends CapabilitiesCpuModel {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuModel

    static name: string
    static $gtype: GObject.GType<DomainCpuModel>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuModel

    constructor(config?: DomainCpuModel.ConstructorProperties) 
    constructor() 
    static new(): DomainCpuModel

    // Overloads of new

    static new(): CapabilitiesCpuModel
    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainCpuModel

    // Overloads of new_from_xml

    static new_from_xml(xml: string | null): CapabilitiesCpuModel
    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainCpuModel.ConstructorProperties): void
}

module DomainDevice {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface DomainDevice {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice

    get_alias(): string | null

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice

    connect(sigName: "notify::node", callback: (($obj: DomainDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainDevice extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice

    static name: string
    static $gtype: GObject.GType<DomainDevice>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice

    constructor(config?: DomainDevice.ConstructorProperties) 
    _init(config?: DomainDevice.ConstructorProperties): void
}

module DomainDisk {

    // Constructor properties interface

    interface ConstructorProperties extends DomainDevice.ConstructorProperties {
    }

}

interface DomainDisk {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDisk

    parent: DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDisk

    get_disk_type(): DomainDiskType
    /**
     * Gets the driver configuration for `disk`.
     * @returns A #GVirConfigDomainDiskDriver. The returned object should be unreffed with g_object_unref() when no longer needed.
     */
    get_driver(): DomainDiskDriver
    get_driver_cache(): DomainDiskCacheType
    get_driver_format(): DomainDiskFormat
    get_driver_name(): string | null
    get_driver_type(): string | null
    get_guest_device_type(): DomainDiskGuestDeviceType
    get_snapshot_type(): DomainDiskSnapshotType
    get_source(): string | null
    get_startup_policy(): DomainDiskStartupPolicy
    get_target_bus(): DomainDiskBus
    get_target_dev(): string | null
    /**
     * Uses `driver` as the driver configuration for `disk`.
     * @param driver a #GVirConfigDomainDiskDriver
     */
    set_driver(driver: DomainDiskDriver | null): void
    set_driver_cache(cache_type: DomainDiskCacheType): void
    set_driver_format(format: DomainDiskFormat): void
    set_driver_name(driver_name: string | null): void
    set_driver_type(driver_type: string | null): void
    set_guest_device_type(type: DomainDiskGuestDeviceType): void
    set_readonly(readonly: boolean): void
    set_snapshot_type(type: DomainDiskSnapshotType): void
    set_source(source: string | null): void
    set_startup_policy(policy: DomainDiskStartupPolicy): void
    set_target_bus(bus: DomainDiskBus): void
    set_target_dev(dev: string | null): void
    set_type(type: DomainDiskType): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainDisk

    connect(sigName: "notify::node", callback: (($obj: DomainDisk, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainDisk, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainDisk, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainDisk, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainDisk extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainDisk

    static name: string
    static $gtype: GObject.GType<DomainDisk>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainDisk

    constructor(config?: DomainDisk.ConstructorProperties) 
    constructor() 
    static new(): DomainDisk

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainDisk

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainDisk.ConstructorProperties): void
}

module DomainDiskDriver {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface DomainDiskDriver {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskDriver

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskDriver

    get_cache(): DomainDiskCacheType
    get_copy_on_read(): boolean
    get_discard(): DomainDiskDriverDiscard
    get_error_policy(): DomainDiskDriverErrorPolicy
    get_format(): DomainDiskFormat
    get_io_policy(): DomainDiskDriverIoPolicy
    get_name(): string | null
    set_cache(cache_type: DomainDiskCacheType): void
    set_copy_on_read(copy_on_read: boolean): void
    set_discard(discard: DomainDiskDriverDiscard): void
    set_error_policy(policy: DomainDiskDriverErrorPolicy): void
    set_format(format: DomainDiskFormat): void
    set_io_policy(policy: DomainDiskDriverIoPolicy): void
    set_name(name: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskDriver

    connect(sigName: "notify::node", callback: (($obj: DomainDiskDriver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainDiskDriver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainDiskDriver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainDiskDriver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainDiskDriver extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskDriver

    static name: string
    static $gtype: GObject.GType<DomainDiskDriver>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskDriver

    constructor(config?: DomainDiskDriver.ConstructorProperties) 
    constructor() 
    static new(): DomainDiskDriver

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainDiskDriver

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainDiskDriver.ConstructorProperties): void
}

module DomainFilesys {

    // Constructor properties interface

    interface ConstructorProperties extends DomainDevice.ConstructorProperties {
    }

}

interface DomainFilesys {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainFilesys

    parent: DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainFilesys

    set_access_type(type: DomainFilesysAccessType): void
    set_driver_format(format: DomainDiskFormat): void
    set_driver_type(type: DomainFilesysDriverType): void
    set_ram_usage(bytes: number): void
    set_readonly(readonly: boolean): void
    set_source(source: string | null): void
    set_target(target: string | null): void
    set_type(type: DomainFilesysType): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainFilesys

    connect(sigName: "notify::node", callback: (($obj: DomainFilesys, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainFilesys, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainFilesys, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainFilesys, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainFilesys extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainFilesys

    static name: string
    static $gtype: GObject.GType<DomainFilesys>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainFilesys

    constructor(config?: DomainFilesys.ConstructorProperties) 
    constructor() 
    static new(): DomainFilesys

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainFilesys

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainFilesys.ConstructorProperties): void
}

module DomainGraphics {

    // Constructor properties interface

    interface ConstructorProperties extends DomainDevice.ConstructorProperties {
    }

}

interface DomainGraphics {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphics

    parent: DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphics

    connect(sigName: "notify::node", callback: (($obj: DomainGraphics, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainGraphics, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainGraphics, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainGraphics, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainGraphics extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphics

    static name: string
    static $gtype: GObject.GType<DomainGraphics>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphics

    constructor(config?: DomainGraphics.ConstructorProperties) 
    _init(config?: DomainGraphics.ConstructorProperties): void
}

module DomainGraphicsDesktop {

    // Constructor properties interface

    interface ConstructorProperties extends DomainGraphics.ConstructorProperties {
    }

}

interface DomainGraphicsDesktop {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsDesktop

    parent: DomainGraphics & DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsDesktop

    get_display(): string | null
    get_fullscreen(): boolean
    set_display(disp: string | null): void
    set_fullscreen(fullscreen: boolean): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsDesktop

    connect(sigName: "notify::node", callback: (($obj: DomainGraphicsDesktop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainGraphicsDesktop, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainGraphicsDesktop, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainGraphicsDesktop, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainGraphicsDesktop extends DomainGraphics {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsDesktop

    static name: string
    static $gtype: GObject.GType<DomainGraphicsDesktop>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsDesktop

    constructor(config?: DomainGraphicsDesktop.ConstructorProperties) 
    constructor() 
    static new(): DomainGraphicsDesktop

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainGraphicsDesktop

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainGraphicsDesktop.ConstructorProperties): void
}

module DomainGraphicsRdp {

    // Constructor properties interface

    interface ConstructorProperties extends DomainGraphics.ConstructorProperties {
    }

}

interface DomainGraphicsRdp {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsRdp

    parent: DomainGraphics & DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsRdp

    get_multi_user(): boolean
    get_port(): number
    get_replace_user(): boolean
    set_autoport(autoport: boolean): void
    set_multi_user(multi_user: boolean): void
    set_port(port: number): void
    set_replace_user(replace_user: boolean): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsRdp

    connect(sigName: "notify::node", callback: (($obj: DomainGraphicsRdp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainGraphicsRdp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainGraphicsRdp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainGraphicsRdp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainGraphicsRdp extends DomainGraphics {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsRdp

    static name: string
    static $gtype: GObject.GType<DomainGraphicsRdp>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsRdp

    constructor(config?: DomainGraphicsRdp.ConstructorProperties) 
    constructor() 
    static new(): DomainGraphicsRdp

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainGraphicsRdp

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainGraphicsRdp.ConstructorProperties): void
}

module DomainGraphicsSdl {

    // Constructor properties interface

    interface ConstructorProperties extends DomainGraphics.ConstructorProperties {
    }

}

interface DomainGraphicsSdl {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSdl

    parent: DomainGraphics & DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSdl

    set_display(disp: string | null): void
    set_fullscreen(fullscreen: boolean): void
    set_xauthority(path: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSdl

    connect(sigName: "notify::node", callback: (($obj: DomainGraphicsSdl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainGraphicsSdl, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainGraphicsSdl, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainGraphicsSdl, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainGraphicsSdl extends DomainGraphics {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSdl

    static name: string
    static $gtype: GObject.GType<DomainGraphicsSdl>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSdl

    constructor(config?: DomainGraphicsSdl.ConstructorProperties) 
    constructor() 
    static new(): DomainGraphicsSdl

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainGraphicsSdl

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainGraphicsSdl.ConstructorProperties): void
}

module DomainGraphicsSpice {

    // Constructor properties interface

    interface ConstructorProperties extends DomainGraphics.ConstructorProperties {
    }

}

interface DomainGraphicsSpice {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSpice

    parent: DomainGraphics & DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSpice

    get_image_compression(): DomainGraphicsSpiceImageCompression
    get_port(): number
    set_autoport(autoport: boolean): void
    set_gl(gl: boolean): void
    set_image_compression(compression: DomainGraphicsSpiceImageCompression): void
    set_password(password: string | null): void
    set_port(port: number): void
    set_tls_port(port: number): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSpice

    connect(sigName: "notify::node", callback: (($obj: DomainGraphicsSpice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainGraphicsSpice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainGraphicsSpice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainGraphicsSpice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainGraphicsSpice extends DomainGraphics {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSpice

    static name: string
    static $gtype: GObject.GType<DomainGraphicsSpice>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSpice

    constructor(config?: DomainGraphicsSpice.ConstructorProperties) 
    constructor() 
    static new(): DomainGraphicsSpice

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainGraphicsSpice

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainGraphicsSpice.ConstructorProperties): void
}

module DomainGraphicsVnc {

    // Constructor properties interface

    interface ConstructorProperties extends DomainGraphics.ConstructorProperties {
    }

}

interface DomainGraphicsVnc {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsVnc

    parent: DomainGraphics & DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsVnc

    get_port(): number
    get_socket(): string | null
    set_autoport(autoport: boolean): void
    set_password(password: string | null): void
    set_port(port: number): void
    set_socket(socket: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsVnc

    connect(sigName: "notify::node", callback: (($obj: DomainGraphicsVnc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainGraphicsVnc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainGraphicsVnc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainGraphicsVnc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainGraphicsVnc extends DomainGraphics {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsVnc

    static name: string
    static $gtype: GObject.GType<DomainGraphicsVnc>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsVnc

    constructor(config?: DomainGraphicsVnc.ConstructorProperties) 
    constructor() 
    static new(): DomainGraphicsVnc

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainGraphicsVnc

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainGraphicsVnc.ConstructorProperties): void
}

module DomainHostdev {

    // Constructor properties interface

    interface ConstructorProperties extends DomainDevice.ConstructorProperties {
    }

}

interface DomainHostdev {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdev

    parent: DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdev

    get_boot_order(): number
    get_readonly(): boolean
    get_shareable(): boolean
    /**
     * If a positive integer is passed as `order,` `hostdev` is marked bootable and
     * boot order set to `order,` otherwise `hostdev` is marked to be unbootable.
     * @param order the boot order
     */
    set_boot_order(order: number): void
    /**
     * Set the readonly status of `hostdev` to `readonly`.
     * @param readonly the new readonly status
     */
    set_readonly(readonly: boolean): void
    /**
     * Set whether or not `hostdev` is shared between domains.
     * @param shareable the new shareable status
     */
    set_shareable(shareable: boolean): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdev

    connect(sigName: "notify::node", callback: (($obj: DomainHostdev, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainHostdev, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainHostdev, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainHostdev, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainHostdev extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdev

    static name: string
    static $gtype: GObject.GType<DomainHostdev>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdev

    constructor(config?: DomainHostdev.ConstructorProperties) 
    _init(config?: DomainHostdev.ConstructorProperties): void
}

module DomainHostdevPci {

    // Constructor properties interface

    interface ConstructorProperties extends DomainHostdev.ConstructorProperties {
    }

}

interface DomainHostdevPci {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevPci

    parent: DomainHostdev & DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevPci

    /**
     * Gets the address associated with `hostdev`.
     * @returns a new #GVirConfigDomainAddressPci, or NULL if no address is associated with @hostdev. The returned object should be unreffed with g_object_unref() when no longer needed.
     */
    get_address(): DomainAddressPci
    get_managed(): boolean
    get_rom_bar(): boolean
    get_rom_file(): string | null
    set_address(address: DomainAddressPci): void
    set_managed(managed: boolean): void
    set_rom_bar(bar: boolean): void
    set_rom_file(file: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevPci

    connect(sigName: "notify::node", callback: (($obj: DomainHostdevPci, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainHostdevPci, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainHostdevPci, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainHostdevPci, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainHostdevPci extends DomainHostdev {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevPci

    static name: string
    static $gtype: GObject.GType<DomainHostdevPci>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevPci

    constructor(config?: DomainHostdevPci.ConstructorProperties) 
    /**
     * Creates a new #GVirConfigDomainHostdevPci.
     * @constructor 
     * @returns a new #GVirConfigDomainHostdevPci. The returned object should be unreffed with g_object_unref() when no longer needed.
     */
    constructor() 
    /**
     * Creates a new #GVirConfigDomainHostdevPci.
     * @constructor 
     * @returns a new #GVirConfigDomainHostdevPci. The returned object should be unreffed with g_object_unref() when no longer needed.
     */
    static new(): DomainHostdevPci

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    /**
     * Creates a new #GVirConfigDomainHostdevPci. The host device object will be
     * created using the XML description stored in `xml`. This is a fragment of
     * libvirt domain XML whose root node is &lt;hostdev&gt;.
     * @constructor 
     * @param xml xml data to create the host device from
     * @returns a new #GVirConfigDomainHostdevPci, or NULL if @xml failed to be parsed. The returned object should be unreffed with g_object_unref() when no longer needed.
     */
    static new_from_xml(xml: string | null): DomainHostdevPci

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainHostdevPci.ConstructorProperties): void
}

module DomainInput {

    // Constructor properties interface

    interface ConstructorProperties extends DomainDevice.ConstructorProperties {
    }

}

interface DomainInput {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInput

    parent: DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInput

    get_bus(): DomainInputBus
    get_device_type(): DomainInputDeviceType
    set_bus(bus: DomainInputBus): void
    set_device_type(type: DomainInputDeviceType): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainInput

    connect(sigName: "notify::node", callback: (($obj: DomainInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainInput, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainInput, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainInput, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainInput extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInput

    static name: string
    static $gtype: GObject.GType<DomainInput>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainInput

    constructor(config?: DomainInput.ConstructorProperties) 
    constructor() 
    static new(): DomainInput

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainInput

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainInput.ConstructorProperties): void
}

module DomainInterface {

    // Constructor properties interface

    interface ConstructorProperties extends DomainDevice.ConstructorProperties {
    }

}

interface DomainInterface {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterface

    parent: DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterface

    /**
     * Gets the filterref associated with the `interface`
     * @returns A #GVirConfigDomainInterfaceFilterref. The returned object should be unreffed with g_object_unref() when no longer needed.
     */
    get_filterref(): DomainInterfaceFilterref
    get_ifname(): string | null
    get_link_state(): DomainInterfaceLinkState
    get_mac(): string | null
    get_model(): string | null
    set_filterref(filterref: DomainInterfaceFilterref | null): void
    set_ifname(ifname: string | null): void
    set_link_state(state: DomainInterfaceLinkState): void
    set_mac(mac_address: string | null): void
    set_model(model: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterface

    connect(sigName: "notify::node", callback: (($obj: DomainInterface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainInterface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainInterface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainInterface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainInterface extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterface

    static name: string
    static $gtype: GObject.GType<DomainInterface>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterface

    constructor(config?: DomainInterface.ConstructorProperties) 
    _init(config?: DomainInterface.ConstructorProperties): void
}

module DomainInterfaceBridge {

    // Constructor properties interface

    interface ConstructorProperties extends DomainInterface.ConstructorProperties {
    }

}

interface DomainInterfaceBridge {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceBridge

    parent: DomainInterface & DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceBridge

    set_source(brname: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceBridge

    connect(sigName: "notify::node", callback: (($obj: DomainInterfaceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainInterfaceBridge, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainInterfaceBridge, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainInterfaceBridge, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainInterfaceBridge extends DomainInterface {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceBridge

    static name: string
    static $gtype: GObject.GType<DomainInterfaceBridge>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceBridge

    constructor(config?: DomainInterfaceBridge.ConstructorProperties) 
    constructor() 
    static new(): DomainInterfaceBridge

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainInterfaceBridge

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainInterfaceBridge.ConstructorProperties): void
}

module DomainInterfaceFilterref {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface DomainInterfaceFilterref {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterref

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterref

    add_parameter(parameter: DomainInterfaceFilterrefParameter): void
    get_name(): string | null
    /**
     * Gets the list of parameters attached to `filterref`. The returned list should be
     * freed with g_list_free(), after its elements have been unreffed with
     * g_object_unref().
     * @returns  a newly allocated #GList of #GVirConfigDomainInterfaceFilterrefParameter.
     */
    get_parameters(): DomainInterfaceFilterrefParameter[]
    set_name(filter: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterref

    connect(sigName: "notify::node", callback: (($obj: DomainInterfaceFilterref, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainInterfaceFilterref, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainInterfaceFilterref, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainInterfaceFilterref, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainInterfaceFilterref extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterref

    static name: string
    static $gtype: GObject.GType<DomainInterfaceFilterref>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterref

    constructor(config?: DomainInterfaceFilterref.ConstructorProperties) 
    constructor() 
    static new(): DomainInterfaceFilterref

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainInterfaceFilterref

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainInterfaceFilterref.ConstructorProperties): void
}

module DomainInterfaceFilterrefParameter {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface DomainInterfaceFilterrefParameter {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefParameter

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefParameter

    get_name(): string | null
    get_value(): string | null
    set_name(name: string | null): void
    set_value(value: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefParameter

    connect(sigName: "notify::node", callback: (($obj: DomainInterfaceFilterrefParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainInterfaceFilterrefParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainInterfaceFilterrefParameter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainInterfaceFilterrefParameter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainInterfaceFilterrefParameter extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefParameter

    static name: string
    static $gtype: GObject.GType<DomainInterfaceFilterrefParameter>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefParameter

    constructor(config?: DomainInterfaceFilterrefParameter.ConstructorProperties) 
    constructor() 
    static new(): DomainInterfaceFilterrefParameter

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainInterfaceFilterrefParameter

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainInterfaceFilterrefParameter.ConstructorProperties): void
}

module DomainInterfaceNetwork {

    // Constructor properties interface

    interface ConstructorProperties extends DomainInterface.ConstructorProperties {
    }

}

interface DomainInterfaceNetwork {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceNetwork

    parent: DomainInterface & DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceNetwork

    set_source(source: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceNetwork

    connect(sigName: "notify::node", callback: (($obj: DomainInterfaceNetwork, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainInterfaceNetwork, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainInterfaceNetwork, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainInterfaceNetwork, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainInterfaceNetwork extends DomainInterface {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceNetwork

    static name: string
    static $gtype: GObject.GType<DomainInterfaceNetwork>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceNetwork

    constructor(config?: DomainInterfaceNetwork.ConstructorProperties) 
    constructor() 
    static new(): DomainInterfaceNetwork

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainInterfaceNetwork

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainInterfaceNetwork.ConstructorProperties): void
}

module DomainInterfaceUser {

    // Constructor properties interface

    interface ConstructorProperties extends DomainInterface.ConstructorProperties {
    }

}

interface DomainInterfaceUser {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceUser

    parent: DomainInterface & DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceUser

    connect(sigName: "notify::node", callback: (($obj: DomainInterfaceUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainInterfaceUser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainInterfaceUser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainInterfaceUser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainInterfaceUser extends DomainInterface {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceUser

    static name: string
    static $gtype: GObject.GType<DomainInterfaceUser>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceUser

    constructor(config?: DomainInterfaceUser.ConstructorProperties) 
    constructor() 
    static new(): DomainInterfaceUser

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainInterfaceUser

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainInterfaceUser.ConstructorProperties): void
}

module DomainMemballoon {

    // Constructor properties interface

    interface ConstructorProperties extends DomainDevice.ConstructorProperties {
    }

}

interface DomainMemballoon {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainMemballoon

    parent: DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainMemballoon

    set_model(model: DomainMemballoonModel): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainMemballoon

    connect(sigName: "notify::node", callback: (($obj: DomainMemballoon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainMemballoon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainMemballoon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainMemballoon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainMemballoon extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainMemballoon

    static name: string
    static $gtype: GObject.GType<DomainMemballoon>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainMemballoon

    constructor(config?: DomainMemballoon.ConstructorProperties) 
    constructor() 
    static new(): DomainMemballoon

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainMemballoon

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainMemballoon.ConstructorProperties): void
}

module DomainOs {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface DomainOs {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainOs

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainOs

    bios_enable_serial(enable: boolean): void
    enable_boot_menu(enable: boolean): void
    get_arch(): string | null
    /**
     * Gets the list of devices attached to `os`. The returned list should be
     * freed with g_list_free().
     * @returns  a newly allocated #GList of #GVirConfigDomainOsBootDevice.
     */
    get_boot_devices(): DomainOsBootDevice[]
    get_firmware(): DomainOsFirmware
    get_machine(): string | null
    get_os_type(): DomainOsType
    set_arch(arch: string | null): void
    set_boot_devices(boot_devices: DomainOsBootDevice[]): void
    set_cmdline(cmdline: string | null): void
    set_firmware(firmware: DomainOsFirmware): void
    set_init(init: string | null): void
    set_kernel(kernel: string | null): void
    set_loader(loader: string | null): void
    set_machine(machine: string | null): void
    set_os_type(type: DomainOsType): void
    set_ramdisk(ramdisk: string | null): void
    set_smbios_mode(mode: DomainOsSmBiosMode): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainOs

    connect(sigName: "notify::node", callback: (($obj: DomainOs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainOs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainOs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainOs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainOs extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainOs

    static name: string
    static $gtype: GObject.GType<DomainOs>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainOs

    constructor(config?: DomainOs.ConstructorProperties) 
    constructor() 
    static new(): DomainOs

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainOs

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainOs.ConstructorProperties): void
}

module DomainParallel {

    // Constructor properties interface

    interface ConstructorProperties extends DomainChardev.ConstructorProperties {
    }

}

interface DomainParallel {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainParallel

    parent: DomainChardev & DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainParallel

    connect(sigName: "notify::node", callback: (($obj: DomainParallel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainParallel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainParallel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainParallel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainParallel extends DomainChardev {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainParallel

    static name: string
    static $gtype: GObject.GType<DomainParallel>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainParallel

    constructor(config?: DomainParallel.ConstructorProperties) 
    constructor() 
    static new(): DomainParallel

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainParallel

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainParallel.ConstructorProperties): void
}

module DomainPowerManagement {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface DomainPowerManagement {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainPowerManagement

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainPowerManagement

    set_disk_suspend_enabled(enabled: boolean): void
    set_mem_suspend_enabled(enabled: boolean): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainPowerManagement

    connect(sigName: "notify::node", callback: (($obj: DomainPowerManagement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainPowerManagement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainPowerManagement, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainPowerManagement, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainPowerManagement extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainPowerManagement

    static name: string
    static $gtype: GObject.GType<DomainPowerManagement>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainPowerManagement

    constructor(config?: DomainPowerManagement.ConstructorProperties) 
    constructor() 
    static new(): DomainPowerManagement

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainPowerManagement

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainPowerManagement.ConstructorProperties): void
}

module DomainRedirdev {

    // Constructor properties interface

    interface ConstructorProperties extends DomainChardev.ConstructorProperties {
    }

}

interface DomainRedirdev {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainRedirdev

    parent: DomainChardev & DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainRedirdev

    set_address(address: DomainAddress | null): void
    set_bus(bus: DomainRedirdevBus): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainRedirdev

    connect(sigName: "notify::node", callback: (($obj: DomainRedirdev, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainRedirdev, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainRedirdev, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainRedirdev, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainRedirdev extends DomainChardev {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainRedirdev

    static name: string
    static $gtype: GObject.GType<DomainRedirdev>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainRedirdev

    constructor(config?: DomainRedirdev.ConstructorProperties) 
    constructor() 
    static new(): DomainRedirdev

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainRedirdev

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainRedirdev.ConstructorProperties): void
}

module DomainSeclabel {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface DomainSeclabel {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSeclabel

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSeclabel

    set_baselabel(label: string | null): void
    set_label(label: string | null): void
    set_model(model: string | null): void
    set_type(type: DomainSeclabelType): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainSeclabel

    connect(sigName: "notify::node", callback: (($obj: DomainSeclabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainSeclabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainSeclabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainSeclabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainSeclabel extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSeclabel

    static name: string
    static $gtype: GObject.GType<DomainSeclabel>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainSeclabel

    constructor(config?: DomainSeclabel.ConstructorProperties) 
    constructor() 
    static new(): DomainSeclabel

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainSeclabel

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainSeclabel.ConstructorProperties): void
}

module DomainSerial {

    // Constructor properties interface

    interface ConstructorProperties extends DomainChardev.ConstructorProperties {
    }

}

interface DomainSerial {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSerial

    parent: DomainChardev & DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainSerial

    connect(sigName: "notify::node", callback: (($obj: DomainSerial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainSerial, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainSerial, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainSerial, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainSerial extends DomainChardev {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSerial

    static name: string
    static $gtype: GObject.GType<DomainSerial>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainSerial

    constructor(config?: DomainSerial.ConstructorProperties) 
    constructor() 
    static new(): DomainSerial

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainSerial

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainSerial.ConstructorProperties): void
}

module DomainSmartcard {

    // Constructor properties interface

    interface ConstructorProperties extends DomainDevice.ConstructorProperties {
    }

}

interface DomainSmartcard {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcard

    parent: DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcard

    connect(sigName: "notify::node", callback: (($obj: DomainSmartcard, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainSmartcard, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainSmartcard, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainSmartcard, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainSmartcard extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcard

    static name: string
    static $gtype: GObject.GType<DomainSmartcard>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcard

    constructor(config?: DomainSmartcard.ConstructorProperties) 
    _init(config?: DomainSmartcard.ConstructorProperties): void
    static set_address(redirdev: DomainRedirdev, address: DomainAddress | null): void
}

module DomainSmartcardHost {

    // Constructor properties interface

    interface ConstructorProperties extends DomainSmartcard.ConstructorProperties {
    }

}

interface DomainSmartcardHost {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHost

    parent: DomainSmartcard & DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHost

    connect(sigName: "notify::node", callback: (($obj: DomainSmartcardHost, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainSmartcardHost, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainSmartcardHost, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainSmartcardHost, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainSmartcardHost extends DomainSmartcard {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHost

    static name: string
    static $gtype: GObject.GType<DomainSmartcardHost>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHost

    constructor(config?: DomainSmartcardHost.ConstructorProperties) 
    constructor() 
    static new(): DomainSmartcardHost

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainSmartcardHost

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainSmartcardHost.ConstructorProperties): void
}

module DomainSmartcardHostCertificates {

    // Constructor properties interface

    interface ConstructorProperties extends DomainSmartcard.ConstructorProperties {
    }

}

interface DomainSmartcardHostCertificates {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHostCertificates

    parent: DomainSmartcard & DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHostCertificates

    set_certificates(cert1: string | null, cert2: string | null, cert3: string | null): void
    set_database(path: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHostCertificates

    connect(sigName: "notify::node", callback: (($obj: DomainSmartcardHostCertificates, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainSmartcardHostCertificates, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainSmartcardHostCertificates, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainSmartcardHostCertificates, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainSmartcardHostCertificates extends DomainSmartcard {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHostCertificates

    static name: string
    static $gtype: GObject.GType<DomainSmartcardHostCertificates>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHostCertificates

    constructor(config?: DomainSmartcardHostCertificates.ConstructorProperties) 
    constructor() 
    static new(): DomainSmartcardHostCertificates

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainSmartcardHostCertificates

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainSmartcardHostCertificates.ConstructorProperties): void
}

module DomainSmartcardPassthrough {

    // Constructor properties interface

    interface ConstructorProperties extends DomainSmartcard.ConstructorProperties {
    }

}

interface DomainSmartcardPassthrough {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardPassthrough

    parent: DomainSmartcard & DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardPassthrough

    set_source(source: DomainChardevSource): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardPassthrough

    connect(sigName: "notify::node", callback: (($obj: DomainSmartcardPassthrough, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainSmartcardPassthrough, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainSmartcardPassthrough, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainSmartcardPassthrough, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainSmartcardPassthrough extends DomainSmartcard {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardPassthrough

    static name: string
    static $gtype: GObject.GType<DomainSmartcardPassthrough>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardPassthrough

    constructor(config?: DomainSmartcardPassthrough.ConstructorProperties) 
    constructor() 
    static new(): DomainSmartcardPassthrough

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainSmartcardPassthrough

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainSmartcardPassthrough.ConstructorProperties): void
}

module DomainSnapshot {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface DomainSnapshot {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshot

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshot

    add_disk(disk: DomainSnapshotDisk): void
    get_creation_time(): number
    get_description(): string | null
    /**
     * Gets the list of disks attached to `snapshot`.  The returned list should
     * be freed with g_list_free(), after its elements have been unreffed with
     * g_object_unref().
     * @returns  a newly allocated #GList of #GVirConfigDomainSnapshotDisk.
     */
    get_disks(): DomainSnapshotDisk[]
    /**
     * Gets the configuration of the domain `snapshot` is a snapshot of.
     * @returns A #GVirConfigDomain. The returned object should be unreffed with g_object_unref() when no longer needed.
     */
    get_domain(): Domain
    get_memory_file(): string | null
    get_memory_state(): DomainSnapshotMemoryState
    get_name(): string | null
    get_parent(): string | null
    get_state(): DomainSnapshotDomainState
    set_description(description: string | null): void
    set_disks(disks: DomainSnapshotDisk[]): void
    set_memory_file(filename: string | null): void
    set_memory_state(state: DomainSnapshotMemoryState): void
    set_name(name: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshot

    connect(sigName: "notify::node", callback: (($obj: DomainSnapshot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainSnapshot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainSnapshot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainSnapshot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainSnapshot extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshot

    static name: string
    static $gtype: GObject.GType<DomainSnapshot>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshot

    constructor(config?: DomainSnapshot.ConstructorProperties) 
    constructor() 
    static new(): DomainSnapshot

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainSnapshot

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainSnapshot.ConstructorProperties): void
}

module DomainSnapshotDisk {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface DomainSnapshotDisk {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotDisk

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotDisk

    get_driver_format(): DomainDiskFormat
    get_name(): string | null
    get_snapshot_type(): DomainDiskSnapshotType
    get_source_file(): string | null
    set_driver_format(format: DomainDiskFormat): void
    set_name(name: string | null): void
    set_snapshot_type(type: DomainDiskSnapshotType): void
    set_source_file(filename: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotDisk

    connect(sigName: "notify::node", callback: (($obj: DomainSnapshotDisk, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainSnapshotDisk, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainSnapshotDisk, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainSnapshotDisk, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainSnapshotDisk extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotDisk

    static name: string
    static $gtype: GObject.GType<DomainSnapshotDisk>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotDisk

    constructor(config?: DomainSnapshotDisk.ConstructorProperties) 
    constructor() 
    static new(): DomainSnapshotDisk

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainSnapshotDisk

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainSnapshotDisk.ConstructorProperties): void
}

module DomainSound {

    // Constructor properties interface

    interface ConstructorProperties extends DomainDevice.ConstructorProperties {
    }

}

interface DomainSound {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSound

    parent: DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSound

    set_model(model: DomainSoundModel): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainSound

    connect(sigName: "notify::node", callback: (($obj: DomainSound, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainSound, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainSound, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainSound, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainSound extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSound

    static name: string
    static $gtype: GObject.GType<DomainSound>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainSound

    constructor(config?: DomainSound.ConstructorProperties) 
    constructor() 
    static new(): DomainSound

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainSound

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainSound.ConstructorProperties): void
}

module DomainTimer {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface DomainTimer {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimer

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimer

    get_present(): boolean
    get_tick_policy(): DomainTimerTickPolicy
    set_present(present: boolean): void
    set_tick_policy(policy: DomainTimerTickPolicy): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimer

    connect(sigName: "notify::node", callback: (($obj: DomainTimer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainTimer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainTimer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainTimer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainTimer extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimer

    static name: string
    static $gtype: GObject.GType<DomainTimer>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimer

    constructor(config?: DomainTimer.ConstructorProperties) 
    _init(config?: DomainTimer.ConstructorProperties): void
}

module DomainTimerHpet {

    // Constructor properties interface

    interface ConstructorProperties extends DomainTimer.ConstructorProperties {
    }

}

interface DomainTimerHpet {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerHpet

    parent: DomainTimer & Object & GObject.Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerHpet

    connect(sigName: "notify::node", callback: (($obj: DomainTimerHpet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainTimerHpet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainTimerHpet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainTimerHpet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainTimerHpet extends DomainTimer {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerHpet

    static name: string
    static $gtype: GObject.GType<DomainTimerHpet>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerHpet

    constructor(config?: DomainTimerHpet.ConstructorProperties) 
    constructor() 
    static new(): DomainTimerHpet

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainTimerHpet

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainTimerHpet.ConstructorProperties): void
}

module DomainTimerPit {

    // Constructor properties interface

    interface ConstructorProperties extends DomainTimer.ConstructorProperties {
    }

}

interface DomainTimerPit {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerPit

    parent: DomainTimer & Object & GObject.Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerPit

    connect(sigName: "notify::node", callback: (($obj: DomainTimerPit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainTimerPit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainTimerPit, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainTimerPit, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainTimerPit extends DomainTimer {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerPit

    static name: string
    static $gtype: GObject.GType<DomainTimerPit>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerPit

    constructor(config?: DomainTimerPit.ConstructorProperties) 
    constructor() 
    static new(): DomainTimerPit

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainTimerPit

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainTimerPit.ConstructorProperties): void
}

module DomainTimerRtc {

    // Constructor properties interface

    interface ConstructorProperties extends DomainTimer.ConstructorProperties {
    }

}

interface DomainTimerRtc {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerRtc

    parent: DomainTimer & Object & GObject.Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerRtc

    connect(sigName: "notify::node", callback: (($obj: DomainTimerRtc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainTimerRtc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainTimerRtc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainTimerRtc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainTimerRtc extends DomainTimer {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerRtc

    static name: string
    static $gtype: GObject.GType<DomainTimerRtc>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerRtc

    constructor(config?: DomainTimerRtc.ConstructorProperties) 
    constructor() 
    static new(): DomainTimerRtc

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainTimerRtc

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainTimerRtc.ConstructorProperties): void
}

module DomainVideo {

    // Constructor properties interface

    interface ConstructorProperties extends DomainDevice.ConstructorProperties {
    }

}

interface DomainVideo {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainVideo

    parent: DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainVideo

    get_model(): DomainVideoModel
    set_accel3d(accel3d: boolean): void
    set_heads(head_count: number): void
    set_model(model: DomainVideoModel): void
    set_ram(kbytes: number): void
    set_vgamem(kbytes: number): void
    set_vram(kbytes: number): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainVideo

    connect(sigName: "notify::node", callback: (($obj: DomainVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: DomainVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: DomainVideo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: DomainVideo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainVideo extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainVideo

    static name: string
    static $gtype: GObject.GType<DomainVideo>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainVideo

    constructor(config?: DomainVideo.ConstructorProperties) 
    constructor() 
    static new(): DomainVideo

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): DomainVideo

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainVideo.ConstructorProperties): void
}

module Interface {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface Interface {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.Interface

    parent: Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.Interface

    connect(sigName: "notify::node", callback: (($obj: Interface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: Interface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: Interface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: Interface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Interface extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.Interface

    static name: string
    static $gtype: GObject.GType<Interface>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.Interface

    constructor(config?: Interface.ConstructorProperties) 
    constructor() 
    static new(): Interface

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): Interface

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: Interface.ConstructorProperties): void
}

module Network {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface Network {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.Network

    parent: Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.Network

    connect(sigName: "notify::node", callback: (($obj: Network, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: Network, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: Network, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: Network, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Network extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.Network

    static name: string
    static $gtype: GObject.GType<Network>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.Network

    constructor(config?: Network.ConstructorProperties) 
    constructor() 
    static new(): Network

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): Network

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: Network.ConstructorProperties): void
}

module NetworkFilter {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface NetworkFilter {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.NetworkFilter

    parent: Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.NetworkFilter

    connect(sigName: "notify::node", callback: (($obj: NetworkFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: NetworkFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: NetworkFilter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: NetworkFilter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class NetworkFilter extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.NetworkFilter

    static name: string
    static $gtype: GObject.GType<NetworkFilter>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.NetworkFilter

    constructor(config?: NetworkFilter.ConstructorProperties) 
    constructor() 
    static new(): NetworkFilter

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): NetworkFilter

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: NetworkFilter.ConstructorProperties): void
}

module NodeDevice {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface NodeDevice {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.NodeDevice

    parent: Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.NodeDevice

    connect(sigName: "notify::node", callback: (($obj: NodeDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: NodeDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: NodeDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: NodeDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class NodeDevice extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.NodeDevice

    static name: string
    static $gtype: GObject.GType<NodeDevice>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.NodeDevice

    constructor(config?: NodeDevice.ConstructorProperties) 
    constructor() 
    static new(): NodeDevice

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): NodeDevice

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: NodeDevice.ConstructorProperties): void
}

module Object {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of LibvirtGConfig-1.0.LibvirtGConfig.Object

        node?: any | null
        schema?: string | null
    }

}

interface Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.Object

    readonly node: any
    readonly schema: string | null

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.Object

    parent: GObject.Object
    priv: ObjectPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.Object

    get_schema(): string | null
    to_xml(): string | null
    validate(): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.Object

    connect(sigName: "notify::node", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Object extends GObject.Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.Object

    static name: string
    static $gtype: GObject.GType<Object>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.Object

    constructor(config?: Object.ConstructorProperties) 
    constructor(type: GObject.GType, root_name: string | null, schema: string | null) 
    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: Object.ConstructorProperties): void
    static error_quark(): GLib.Quark
}

module Secret {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface Secret {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.Secret

    parent: Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.Secret

    connect(sigName: "notify::node", callback: (($obj: Secret, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: Secret, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: Secret, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: Secret, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Secret extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.Secret

    static name: string
    static $gtype: GObject.GType<Secret>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.Secret

    constructor(config?: Secret.ConstructorProperties) 
    constructor() 
    static new(): Secret

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): Secret

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: Secret.ConstructorProperties): void
}

module StoragePermissions {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface StoragePermissions {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePermissions

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.StoragePermissions

    /**
     * Gets the numeric group ID associated with `perms`.
     * @returns numeric group ID
     */
    get_group(): number
    /**
     * Gets the MAC label string associated with `perms`.
     * @returns MAC label string.
     */
    get_label(): string | null
    /**
     * Gets the octal permission set associated with `perms`.
     * @returns permission set
     */
    get_mode(): number
    /**
     * Gets the numeric user ID associated with `perms`.
     * @returns numeric user ID.
     */
    get_owner(): number
    set_group(group: number): void
    set_label(label: string | null): void
    set_mode(mode: number): void
    set_owner(owner: number): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.StoragePermissions

    connect(sigName: "notify::node", callback: (($obj: StoragePermissions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: StoragePermissions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: StoragePermissions, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: StoragePermissions, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StoragePermissions extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StoragePermissions

    static name: string
    static $gtype: GObject.GType<StoragePermissions>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.StoragePermissions

    constructor(config?: StoragePermissions.ConstructorProperties) 
    constructor() 
    static new(): StoragePermissions

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): StoragePermissions

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: StoragePermissions.ConstructorProperties): void
}

module StoragePool {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface StoragePool {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePool

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.StoragePool

    /**
     * Gets the total storage allocation for the pool.
     * @returns total storage allocation in bytes.
     */
    get_allocation(): number
    /**
     * Gets the free space available for allocating new volumes in the pool.
     * @returns free space available in bytes.
     */
    get_available(): number
    /**
     * Gets the total storage capacity for the pool.
     * @returns total storage capacity in bytes.
     */
    get_capacity(): number
    /**
     * Gets the name of the pool.
     * @returns name of @pool.
     */
    get_name(): string | null
    /**
     * Gets the type of the pool.
     * @returns #Gname of @pool.
     */
    get_pool_type(): StoragePoolType
    /**
     * Gets the source for `pool`
     * @returns a new #GVirConfigStoragePoolSource instance.
     */
    get_source(): StoragePoolSource
    /**
     * Gets the target for `pool`
     * @returns a new #GVirConfigStoragePoolTarget instance.
     */
    get_target(): StoragePoolTarget
    /**
     * Gets the unique identifier for `pool`.
     * @returns unique identifier for @pool.
     */
    get_uuid(): string | null
    set_allocation(allocation: number): void
    set_available(available: number): void
    set_capacity(capacity: number): void
    set_name(name: string | null): void
    set_pool_type(type: StoragePoolType): void
    set_source(source: StoragePoolSource | null): void
    set_target(target: StoragePoolTarget | null): void
    set_uuid(uuid: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.StoragePool

    connect(sigName: "notify::node", callback: (($obj: StoragePool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: StoragePool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: StoragePool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: StoragePool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StoragePool extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StoragePool

    static name: string
    static $gtype: GObject.GType<StoragePool>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.StoragePool

    constructor(config?: StoragePool.ConstructorProperties) 
    constructor() 
    static new(): StoragePool

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): StoragePool

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: StoragePool.ConstructorProperties): void
}

module StoragePoolSource {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface StoragePoolSource {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolSource

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolSource

    /**
     * For pools backed by a SCSI adapter, returns the SCSI adapter name
     * @returns the SCSI adapter name.
     */
    get_adapter(): string | null
    /**
     * For pools backed by a physical device, returns the path to the block
     * device node
     * @returns fully qualified path to the block device node.
     */
    get_device_path(): string | null
    /**
     * For pools backed by a directory, returns the path to the backing directory
     * @returns path to the directory backing directory.
     */
    get_directory(): string | null
    /**
     * Provides information about the format of the pool. This format is
     * backend-specific but is typically used to indicate filesystem type, or
     * network filesystem type, or partition table type, or LVM metadata type.
     * @returns the storage pool format.
     */
    get_format(): string | null
    /**
     * For pools backed by storage from remote server, returns the hostname
     * of the remote server.
     * @returns hostname or IP address of the remote server.
     */
    get_host(): string | null
    /**
     * For pools backed by storage from a named element (for example, LV
     * groups), returns the name of the element
     * @returns name of the element used by @source
     */
    get_name(): string | null
    /**
     * Gets the product name of the storage device.
     * @returns product name of the storage device.
     */
    get_product(): string | null
    /**
     * Gets the vendor name of the storage device.
     * @returns vendor name of the storage device.
     */
    get_vendor(): string | null
    set_adapter(adapter: string | null): void
    set_device_path(device_path: string | null): void
    set_directory(directory: string | null): void
    set_format(format: string | null): void
    set_host(host: string | null): void
    set_name(name: string | null): void
    set_product(product: string | null): void
    set_vendor(vendor: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolSource

    connect(sigName: "notify::node", callback: (($obj: StoragePoolSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: StoragePoolSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: StoragePoolSource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: StoragePoolSource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StoragePoolSource extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolSource

    static name: string
    static $gtype: GObject.GType<StoragePoolSource>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolSource

    constructor(config?: StoragePoolSource.ConstructorProperties) 
    constructor() 
    static new(): StoragePoolSource

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): StoragePoolSource

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: StoragePoolSource.ConstructorProperties): void
}

module StoragePoolTarget {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface StoragePoolTarget {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolTarget

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolTarget

    /**
     * Provides the location at which the storage pool associated with `target`
     * will be mapped into the local filesystem namespace.
     * @returns local filesystem path the storage pool is mapped at.
     */
    get_path(): string | null
    /**
     * Gets the permissions associated with `target`
     * @returns a new #GVirConfigStoragePoolPermissions instance.
     */
    get_permissions(): StoragePermissions
    set_path(path: string | null): void
    set_permissions(perms: StoragePermissions): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolTarget

    connect(sigName: "notify::node", callback: (($obj: StoragePoolTarget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: StoragePoolTarget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: StoragePoolTarget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: StoragePoolTarget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StoragePoolTarget extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolTarget

    static name: string
    static $gtype: GObject.GType<StoragePoolTarget>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolTarget

    constructor(config?: StoragePoolTarget.ConstructorProperties) 
    constructor() 
    static new(): StoragePoolTarget

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): StoragePoolTarget

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: StoragePoolTarget.ConstructorProperties): void
}

module StorageVol {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface StorageVol {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.StorageVol

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.StorageVol

    set_allocation(allocation: number): void
    set_backing_store(backing_store: StorageVolBackingStore | null): void
    set_capacity(capacity: number): void
    set_name(name: string | null): void
    set_target(target: StorageVolTarget | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.StorageVol

    connect(sigName: "notify::node", callback: (($obj: StorageVol, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: StorageVol, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: StorageVol, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: StorageVol, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StorageVol extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StorageVol

    static name: string
    static $gtype: GObject.GType<StorageVol>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.StorageVol

    constructor(config?: StorageVol.ConstructorProperties) 
    constructor() 
    static new(): StorageVol

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): StorageVol

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: StorageVol.ConstructorProperties): void
}

module StorageVolBackingStore {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface StorageVolBackingStore {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolBackingStore

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolBackingStore

    set_format(format: string | null): void
    set_path(path: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolBackingStore

    connect(sigName: "notify::node", callback: (($obj: StorageVolBackingStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: StorageVolBackingStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: StorageVolBackingStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: StorageVolBackingStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StorageVolBackingStore extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolBackingStore

    static name: string
    static $gtype: GObject.GType<StorageVolBackingStore>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolBackingStore

    constructor(config?: StorageVolBackingStore.ConstructorProperties) 
    constructor() 
    static new(): StorageVolBackingStore

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): StorageVolBackingStore

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: StorageVolBackingStore.ConstructorProperties): void
}

module StorageVolTarget {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface StorageVolTarget {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolTarget

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolTarget

    set_compat(compat: string | null): void
    set_features(features: number): void
    set_format(format: string | null): void
    set_permissions(perms: StoragePermissions | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolTarget

    connect(sigName: "notify::node", callback: (($obj: StorageVolTarget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node", callback: (($obj: StorageVolTarget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (($obj: StorageVolTarget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::schema", callback: (($obj: StorageVolTarget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StorageVolTarget extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolTarget

    static name: string
    static $gtype: GObject.GType<StorageVolTarget>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolTarget

    constructor(config?: StorageVolTarget.ConstructorProperties) 
    constructor() 
    static new(): StorageVolTarget

    // Overloads of new

    static new(type: GObject.GType, root_name: string | null, schema: string | null): Object
    static new_from_xml(xml: string | null): StorageVolTarget

    // Overloads of new_from_xml

    static new_from_xml(type: GObject.GType, root_name: string | null, schema: string | null, xml: string | null): Object
    _init(config?: StorageVolTarget.ConstructorProperties): void
}

interface CapabilitiesClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class CapabilitiesClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesClass

    static name: string
}

interface CapabilitiesCpuClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuClass

    parent_class: ObjectClass
    get_features: (cpu: CapabilitiesCpu) => CapabilitiesCpuFeature[]
    padding: any[]
}

abstract class CapabilitiesCpuClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuClass

    static name: string
}

interface CapabilitiesCpuFeatureClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuFeatureClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class CapabilitiesCpuFeatureClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuFeatureClass

    static name: string
}

interface CapabilitiesCpuFeaturePrivate {
}

class CapabilitiesCpuFeaturePrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuFeaturePrivate

    static name: string
}

interface CapabilitiesCpuModelClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuModelClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class CapabilitiesCpuModelClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuModelClass

    static name: string
}

interface CapabilitiesCpuModelPrivate {
}

class CapabilitiesCpuModelPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuModelPrivate

    static name: string
}

interface CapabilitiesCpuPrivate {
}

class CapabilitiesCpuPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuPrivate

    static name: string
}

interface CapabilitiesCpuTopologyClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuTopologyClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class CapabilitiesCpuTopologyClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuTopologyClass

    static name: string
}

interface CapabilitiesCpuTopologyPrivate {
}

class CapabilitiesCpuTopologyPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuTopologyPrivate

    static name: string
}

interface CapabilitiesGuestArchClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestArchClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class CapabilitiesGuestArchClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestArchClass

    static name: string
}

interface CapabilitiesGuestArchPrivate {
}

class CapabilitiesGuestArchPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestArchPrivate

    static name: string
}

interface CapabilitiesGuestClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class CapabilitiesGuestClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestClass

    static name: string
}

interface CapabilitiesGuestDomainClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestDomainClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class CapabilitiesGuestDomainClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestDomainClass

    static name: string
}

interface CapabilitiesGuestDomainPrivate {
}

class CapabilitiesGuestDomainPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestDomainPrivate

    static name: string
}

interface CapabilitiesGuestFeatureClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestFeatureClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class CapabilitiesGuestFeatureClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestFeatureClass

    static name: string
}

interface CapabilitiesGuestFeaturePrivate {
}

class CapabilitiesGuestFeaturePrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestFeaturePrivate

    static name: string
}

interface CapabilitiesGuestPrivate {
}

class CapabilitiesGuestPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestPrivate

    static name: string
}

interface CapabilitiesHostClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHostClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class CapabilitiesHostClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHostClass

    static name: string
}

interface CapabilitiesHostPrivate {
}

class CapabilitiesHostPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHostPrivate

    static name: string
}

interface CapabilitiesHostSecModelClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHostSecModelClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class CapabilitiesHostSecModelClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHostSecModelClass

    static name: string
}

interface CapabilitiesHostSecModelPrivate {
}

class CapabilitiesHostSecModelPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHostSecModelPrivate

    static name: string
}

interface CapabilitiesPrivate {
}

class CapabilitiesPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesPrivate

    static name: string
}

interface DomainAddressClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class DomainAddressClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressClass

    static name: string
}

interface DomainAddressPciClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressPciClass

    parent_class: DomainAddressClass
    padding: any[]
}

abstract class DomainAddressPciClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressPciClass

    static name: string
}

interface DomainAddressPciPrivate {
}

class DomainAddressPciPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressPciPrivate

    static name: string
}

interface DomainAddressPrivate {
}

class DomainAddressPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressPrivate

    static name: string
}

interface DomainAddressUsbClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressUsbClass

    parent_class: DomainAddressClass
    padding: any[]
}

abstract class DomainAddressUsbClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressUsbClass

    static name: string
}

interface DomainAddressUsbPrivate {
}

class DomainAddressUsbPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressUsbPrivate

    static name: string
}

interface DomainCapabilitiesClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class DomainCapabilitiesClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesClass

    static name: string
}

interface DomainCapabilitiesOsClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesOsClass

    parent_class: ObjectClass
    get_firmwares: (os: DomainCapabilitiesOs) => DomainOsFirmware[]
    padding: any[]
}

abstract class DomainCapabilitiesOsClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesOsClass

    static name: string
}

interface DomainCapabilitiesOsPrivate {
}

class DomainCapabilitiesOsPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesOsPrivate

    static name: string
}

interface DomainCapabilitiesPrivate {
}

class DomainCapabilitiesPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesPrivate

    static name: string
}

interface DomainChannelClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChannelClass

    parent_class: DomainChardevClass
    padding: any[]
}

abstract class DomainChannelClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChannelClass

    static name: string
}

interface DomainChannelPrivate {
}

class DomainChannelPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChannelPrivate

    static name: string
}

interface DomainChardevClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevClass

    parent_class: DomainDeviceClass
    padding: any[]
}

abstract class DomainChardevClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevClass

    static name: string
}

interface DomainChardevPrivate {
}

class DomainChardevPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevPrivate

    static name: string
}

interface DomainChardevSourceClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class DomainChardevSourceClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceClass

    static name: string
}

interface DomainChardevSourcePrivate {
}

class DomainChardevSourcePrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourcePrivate

    static name: string
}

interface DomainChardevSourcePtyClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourcePtyClass

    parent_class: DomainChardevSourceClass
    padding: any[]
}

abstract class DomainChardevSourcePtyClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourcePtyClass

    static name: string
}

interface DomainChardevSourcePtyPrivate {
}

class DomainChardevSourcePtyPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourcePtyPrivate

    static name: string
}

interface DomainChardevSourceSpicePortClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpicePortClass

    parent_class: DomainChardevSourceClass
    padding: any[]
}

abstract class DomainChardevSourceSpicePortClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpicePortClass

    static name: string
}

interface DomainChardevSourceSpicePortPrivate {
}

class DomainChardevSourceSpicePortPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpicePortPrivate

    static name: string
}

interface DomainChardevSourceSpiceVmcClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpiceVmcClass

    parent_class: DomainChardevSourceClass
    padding: any[]
}

abstract class DomainChardevSourceSpiceVmcClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpiceVmcClass

    static name: string
}

interface DomainChardevSourceSpiceVmcPrivate {
}

class DomainChardevSourceSpiceVmcPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpiceVmcPrivate

    static name: string
}

interface DomainChardevSourceUnixClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceUnixClass

    parent_class: DomainChardevSourceClass
    padding: any[]
}

abstract class DomainChardevSourceUnixClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceUnixClass

    static name: string
}

interface DomainChardevSourceUnixPrivate {
}

class DomainChardevSourceUnixPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceUnixPrivate

    static name: string
}

interface DomainClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class DomainClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainClass

    static name: string
}

interface DomainClockClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainClockClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class DomainClockClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainClockClass

    static name: string
}

interface DomainClockPrivate {
}

class DomainClockPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainClockPrivate

    static name: string
}

interface DomainConsoleClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainConsoleClass

    parent_class: DomainChardevClass
    padding: any[]
}

abstract class DomainConsoleClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainConsoleClass

    static name: string
}

interface DomainConsolePrivate {
}

class DomainConsolePrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainConsolePrivate

    static name: string
}

interface DomainControllerClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainControllerClass

    parent_class: DomainDeviceClass
    padding: any[]
}

abstract class DomainControllerClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainControllerClass

    static name: string
}

interface DomainControllerPrivate {
}

class DomainControllerPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainControllerPrivate

    static name: string
}

interface DomainControllerUsbClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainControllerUsbClass

    parent_class: DomainControllerClass
    padding: any[]
}

abstract class DomainControllerUsbClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainControllerUsbClass

    static name: string
}

interface DomainControllerUsbPrivate {
}

class DomainControllerUsbPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainControllerUsbPrivate

    static name: string
}

interface DomainCpuClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuClass

    parent_class: CapabilitiesCpuClass
    padding: any[]
}

abstract class DomainCpuClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuClass

    static name: string
}

interface DomainCpuFeatureClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuFeatureClass

    parent_class: CapabilitiesCpuClass
    padding: any[]
}

abstract class DomainCpuFeatureClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuFeatureClass

    static name: string
}

interface DomainCpuFeaturePrivate {
}

class DomainCpuFeaturePrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuFeaturePrivate

    static name: string
}

interface DomainCpuModelClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuModelClass

    parent_class: CapabilitiesCpuModelClass
    padding: any[]
}

abstract class DomainCpuModelClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuModelClass

    static name: string
}

interface DomainCpuModelPrivate {
}

class DomainCpuModelPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuModelPrivate

    static name: string
}

interface DomainCpuPrivate {
}

class DomainCpuPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuPrivate

    static name: string
}

interface DomainDeviceClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDeviceClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class DomainDeviceClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainDeviceClass

    static name: string
}

interface DomainDevicePrivate {
}

class DomainDevicePrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevicePrivate

    static name: string
}

interface DomainDiskClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskClass

    parent_class: DomainDeviceClass
    padding: any[]
}

abstract class DomainDiskClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskClass

    static name: string
}

interface DomainDiskDriverClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskDriverClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class DomainDiskDriverClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskDriverClass

    static name: string
}

interface DomainDiskDriverPrivate {
}

class DomainDiskDriverPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskDriverPrivate

    static name: string
}

interface DomainDiskPrivate {
}

class DomainDiskPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskPrivate

    static name: string
}

interface DomainFilesysClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainFilesysClass

    parent_class: DomainDeviceClass
    padding: any[]
}

abstract class DomainFilesysClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainFilesysClass

    static name: string
}

interface DomainFilesysPrivate {
}

class DomainFilesysPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainFilesysPrivate

    static name: string
}

interface DomainGraphicsClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsClass

    parent_class: DomainDeviceClass
    padding: any[]
}

abstract class DomainGraphicsClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsClass

    static name: string
}

interface DomainGraphicsDesktopClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsDesktopClass

    parent_class: DomainGraphicsClass
    padding: any[]
}

abstract class DomainGraphicsDesktopClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsDesktopClass

    static name: string
}

interface DomainGraphicsDesktopPrivate {
}

class DomainGraphicsDesktopPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsDesktopPrivate

    static name: string
}

interface DomainGraphicsPrivate {
}

class DomainGraphicsPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsPrivate

    static name: string
}

interface DomainGraphicsRdpClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsRdpClass

    parent_class: DomainGraphicsClass
    padding: any[]
}

abstract class DomainGraphicsRdpClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsRdpClass

    static name: string
}

interface DomainGraphicsRdpPrivate {
}

class DomainGraphicsRdpPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsRdpPrivate

    static name: string
}

interface DomainGraphicsSdlClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSdlClass

    parent_class: DomainGraphicsClass
    padding: any[]
}

abstract class DomainGraphicsSdlClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSdlClass

    static name: string
}

interface DomainGraphicsSdlPrivate {
}

class DomainGraphicsSdlPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSdlPrivate

    static name: string
}

interface DomainGraphicsSpiceClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSpiceClass

    parent_class: DomainGraphicsClass
    padding: any[]
}

abstract class DomainGraphicsSpiceClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSpiceClass

    static name: string
}

interface DomainGraphicsSpicePrivate {
}

class DomainGraphicsSpicePrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSpicePrivate

    static name: string
}

interface DomainGraphicsVncClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsVncClass

    parent_class: DomainGraphicsClass
    padding: any[]
}

abstract class DomainGraphicsVncClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsVncClass

    static name: string
}

interface DomainGraphicsVncPrivate {
}

class DomainGraphicsVncPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsVncPrivate

    static name: string
}

interface DomainHostdevClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevClass

    parent_class: DomainDeviceClass
    padding: any[]
}

abstract class DomainHostdevClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevClass

    static name: string
}

interface DomainHostdevPciClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevPciClass

    parent_class: DomainHostdevClass
    padding: any[]
}

abstract class DomainHostdevPciClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevPciClass

    static name: string
}

interface DomainHostdevPciPrivate {
}

class DomainHostdevPciPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevPciPrivate

    static name: string
}

interface DomainHostdevPrivate {
}

class DomainHostdevPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevPrivate

    static name: string
}

interface DomainInputClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInputClass

    parent_class: DomainDeviceClass
    padding: any[]
}

abstract class DomainInputClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInputClass

    static name: string
}

interface DomainInputPrivate {
}

class DomainInputPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInputPrivate

    static name: string
}

interface DomainInterfaceBridgeClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceBridgeClass

    parent_class: DomainInterfaceClass
    padding: any[]
}

abstract class DomainInterfaceBridgeClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceBridgeClass

    static name: string
}

interface DomainInterfaceBridgePrivate {
}

class DomainInterfaceBridgePrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceBridgePrivate

    static name: string
}

interface DomainInterfaceClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceClass

    parent_class: DomainDeviceClass
    padding: any[]
}

abstract class DomainInterfaceClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceClass

    static name: string
}

interface DomainInterfaceFilterrefClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class DomainInterfaceFilterrefClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefClass

    static name: string
}

interface DomainInterfaceFilterrefParameterClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefParameterClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class DomainInterfaceFilterrefParameterClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefParameterClass

    static name: string
}

interface DomainInterfaceFilterrefParameterPrivate {
}

class DomainInterfaceFilterrefParameterPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefParameterPrivate

    static name: string
}

interface DomainInterfaceFilterrefPrivate {
}

class DomainInterfaceFilterrefPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefPrivate

    static name: string
}

interface DomainInterfaceNetworkClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceNetworkClass

    parent_class: DomainInterfaceClass
    padding: any[]
}

abstract class DomainInterfaceNetworkClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceNetworkClass

    static name: string
}

interface DomainInterfaceNetworkPrivate {
}

class DomainInterfaceNetworkPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceNetworkPrivate

    static name: string
}

interface DomainInterfacePrivate {
}

class DomainInterfacePrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfacePrivate

    static name: string
}

interface DomainInterfaceUserClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceUserClass

    parent_class: DomainInterfaceClass
    padding: any[]
}

abstract class DomainInterfaceUserClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceUserClass

    static name: string
}

interface DomainInterfaceUserPrivate {
}

class DomainInterfaceUserPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceUserPrivate

    static name: string
}

interface DomainMemballoonClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainMemballoonClass

    parent_class: DomainDeviceClass
    padding: any[]
}

abstract class DomainMemballoonClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainMemballoonClass

    static name: string
}

interface DomainMemballoonPrivate {
}

class DomainMemballoonPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainMemballoonPrivate

    static name: string
}

interface DomainOsClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainOsClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class DomainOsClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainOsClass

    static name: string
}

interface DomainOsPrivate {
}

class DomainOsPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainOsPrivate

    static name: string
}

interface DomainParallelClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainParallelClass

    parent_class: DomainChardevClass
    padding: any[]
}

abstract class DomainParallelClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainParallelClass

    static name: string
}

interface DomainParallelPrivate {
}

class DomainParallelPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainParallelPrivate

    static name: string
}

interface DomainPowerManagementClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainPowerManagementClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class DomainPowerManagementClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainPowerManagementClass

    static name: string
}

interface DomainPowerManagementPrivate {
}

class DomainPowerManagementPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainPowerManagementPrivate

    static name: string
}

interface DomainPrivate {
}

class DomainPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainPrivate

    static name: string
}

interface DomainRedirdevClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainRedirdevClass

    parent_class: DomainChardevClass
    padding: any[]
}

abstract class DomainRedirdevClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainRedirdevClass

    static name: string
}

interface DomainRedirdevPrivate {
}

class DomainRedirdevPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainRedirdevPrivate

    static name: string
}

interface DomainSeclabelClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSeclabelClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class DomainSeclabelClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSeclabelClass

    static name: string
}

interface DomainSeclabelPrivate {
}

class DomainSeclabelPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSeclabelPrivate

    static name: string
}

interface DomainSerialClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSerialClass

    parent_class: DomainChardevClass
    padding: any[]
}

abstract class DomainSerialClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSerialClass

    static name: string
}

interface DomainSerialPrivate {
}

class DomainSerialPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSerialPrivate

    static name: string
}

interface DomainSmartcardClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardClass

    parent_class: DomainDeviceClass
    padding: any[]
}

abstract class DomainSmartcardClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardClass

    static name: string
}

interface DomainSmartcardHostCertificatesClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHostCertificatesClass

    parent_class: DomainSmartcardClass
    padding: any[]
}

abstract class DomainSmartcardHostCertificatesClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHostCertificatesClass

    static name: string
}

interface DomainSmartcardHostCertificatesPrivate {
}

class DomainSmartcardHostCertificatesPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHostCertificatesPrivate

    static name: string
}

interface DomainSmartcardHostClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHostClass

    parent_class: DomainSmartcardClass
    padding: any[]
}

abstract class DomainSmartcardHostClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHostClass

    static name: string
}

interface DomainSmartcardHostPrivate {
}

class DomainSmartcardHostPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHostPrivate

    static name: string
}

interface DomainSmartcardPassthroughClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardPassthroughClass

    parent_class: DomainSmartcardClass
    padding: any[]
}

abstract class DomainSmartcardPassthroughClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardPassthroughClass

    static name: string
}

interface DomainSmartcardPassthroughPrivate {
}

class DomainSmartcardPassthroughPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardPassthroughPrivate

    static name: string
}

interface DomainSmartcardPrivate {
}

class DomainSmartcardPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardPrivate

    static name: string
}

interface DomainSnapshotClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class DomainSnapshotClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotClass

    static name: string
}

interface DomainSnapshotDiskClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotDiskClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class DomainSnapshotDiskClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotDiskClass

    static name: string
}

interface DomainSnapshotDiskPrivate {
}

class DomainSnapshotDiskPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotDiskPrivate

    static name: string
}

interface DomainSnapshotPrivate {
}

class DomainSnapshotPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotPrivate

    static name: string
}

interface DomainSoundClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSoundClass

    parent_class: DomainDeviceClass
    padding: any[]
}

abstract class DomainSoundClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSoundClass

    static name: string
}

interface DomainSoundPrivate {
}

class DomainSoundPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSoundPrivate

    static name: string
}

interface DomainTimerClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class DomainTimerClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerClass

    static name: string
}

interface DomainTimerHpetClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerHpetClass

    parent_class: DomainTimerClass
    padding: any[]
}

abstract class DomainTimerHpetClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerHpetClass

    static name: string
}

interface DomainTimerHpetPrivate {
}

class DomainTimerHpetPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerHpetPrivate

    static name: string
}

interface DomainTimerPitClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerPitClass

    parent_class: DomainTimerClass
    padding: any[]
}

abstract class DomainTimerPitClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerPitClass

    static name: string
}

interface DomainTimerPitPrivate {
}

class DomainTimerPitPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerPitPrivate

    static name: string
}

interface DomainTimerPrivate {
}

class DomainTimerPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerPrivate

    static name: string
}

interface DomainTimerRtcClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerRtcClass

    parent_class: DomainTimerClass
    padding: any[]
}

abstract class DomainTimerRtcClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerRtcClass

    static name: string
}

interface DomainTimerRtcPrivate {
}

class DomainTimerRtcPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerRtcPrivate

    static name: string
}

interface DomainVideoClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainVideoClass

    parent_class: DomainDeviceClass
    padding: any[]
}

abstract class DomainVideoClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainVideoClass

    static name: string
}

interface DomainVideoPrivate {
}

class DomainVideoPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainVideoPrivate

    static name: string
}

interface InterfaceClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.InterfaceClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class InterfaceClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.InterfaceClass

    static name: string
}

interface InterfacePrivate {
}

class InterfacePrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.InterfacePrivate

    static name: string
}

interface NetworkClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.NetworkClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class NetworkClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.NetworkClass

    static name: string
}

interface NetworkFilterClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.NetworkFilterClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class NetworkFilterClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.NetworkFilterClass

    static name: string
}

interface NetworkFilterPrivate {
}

class NetworkFilterPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.NetworkFilterPrivate

    static name: string
}

interface NetworkPrivate {
}

class NetworkPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.NetworkPrivate

    static name: string
}

interface NodeDeviceClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.NodeDeviceClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class NodeDeviceClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.NodeDeviceClass

    static name: string
}

interface NodeDevicePrivate {
}

class NodeDevicePrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.NodeDevicePrivate

    static name: string
}

interface ObjectClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.ObjectClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

abstract class ObjectClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.ObjectClass

    static name: string
}

interface ObjectPrivate {
}

class ObjectPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.ObjectPrivate

    static name: string
}

interface SecretClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.SecretClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class SecretClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.SecretClass

    static name: string
}

interface SecretPrivate {
}

class SecretPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.SecretPrivate

    static name: string
}

interface StoragePermissionsClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePermissionsClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class StoragePermissionsClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StoragePermissionsClass

    static name: string
}

interface StoragePermissionsPrivate {
}

class StoragePermissionsPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StoragePermissionsPrivate

    static name: string
}

interface StoragePoolClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class StoragePoolClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolClass

    static name: string
}

interface StoragePoolPrivate {
}

class StoragePoolPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolPrivate

    static name: string
}

interface StoragePoolSourceClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolSourceClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class StoragePoolSourceClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolSourceClass

    static name: string
}

interface StoragePoolSourcePrivate {
}

class StoragePoolSourcePrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolSourcePrivate

    static name: string
}

interface StoragePoolTargetClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolTargetClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class StoragePoolTargetClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolTargetClass

    static name: string
}

interface StoragePoolTargetPrivate {
}

class StoragePoolTargetPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolTargetPrivate

    static name: string
}

interface StorageVolBackingStoreClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolBackingStoreClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class StorageVolBackingStoreClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolBackingStoreClass

    static name: string
}

interface StorageVolBackingStorePrivate {
}

class StorageVolBackingStorePrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolBackingStorePrivate

    static name: string
}

interface StorageVolClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class StorageVolClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolClass

    static name: string
}

interface StorageVolPrivate {
}

class StorageVolPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolPrivate

    static name: string
}

interface StorageVolTargetClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolTargetClass

    parent_class: ObjectClass
    padding: any[]
}

abstract class StorageVolTargetClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolTargetClass

    static name: string
}

interface StorageVolTargetPrivate {
}

class StorageVolTargetPrivate {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolTargetPrivate

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default LibvirtGConfig;
// END