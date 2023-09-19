
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-libvirtgconfig-1.0-import.d.ts';
    
/**
 * LibvirtGConfig-1.0
 */

import type libxml2 from '@girs/node-libxml2-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

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
function initCheck(argv: string[] | null): [ /* returnType */ boolean, /* argv */ string[] | null ]
module Capabilities {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface Capabilities {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.Capabilities

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.Capabilities

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.Capabilities

    /**
     * Gets the list of guest capabilities.
     * @returns  a newly allocated #GList of #GVirConfigCapabilitiesGuest.
     */
    getGuests(): CapabilitiesGuest[]
    /**
     * Gets the host capabilities.
     * @returns a new #GVirConfigCapabilitiesHost.
     */
    getHost(): CapabilitiesHost

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.Capabilities

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Capabilities extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.Capabilities

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.Capabilities

    constructor(config?: Capabilities.ConstructorProperties) 
    constructor() 
    static new(): Capabilities

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): Capabilities

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: Capabilities.ConstructorProperties): void
}

module CapabilitiesCpu {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface CapabilitiesCpu {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpu

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpu

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpu

    /**
     * Adds a new feature to CPU.
     * @param feature 
     */
    addFeature(feature: CapabilitiesCpuFeature): void
    getArch(): string | null
    // Has conflict: getFeatures(): CapabilitiesCpuFeature[]
    /**
     * Gets the model of the cpu.
     * @returns a new #GVirConfigCapabilitiesCpuModel.
     */
    getModel(): CapabilitiesCpuModel
    /**
     * Gets the topology of the cpu.
     * @returns a new #GVirConfigCapabilitiesCpuTopology.
     */
    getTopology(): CapabilitiesCpuTopology
    /**
     * Sets the topology of the cpu.
     * @param topology 
     */
    setTopology(topology: CapabilitiesCpuTopology): void

    // Own virtual methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpu

    /**
     * Gets the features of this CPU.
     * @virtual 
     * @returns  a newly allocated #GList of #GVirConfigCapabilitiesCpuFeature.
     */
    getFeatures(): CapabilitiesCpuFeature[]

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpu

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CapabilitiesCpu extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpu

    static name: string

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

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuFeature

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuFeature

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuFeature

    getName(): string | null
    setName(name: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuFeature

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CapabilitiesCpuFeature extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuFeature

    static name: string

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

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuModel

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuModel

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuModel

    getName(): string | null
    setName(name: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuModel

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CapabilitiesCpuModel extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuModel

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuModel

    constructor(config?: CapabilitiesCpuModel.ConstructorProperties) 
    constructor() 
    static new(): CapabilitiesCpuModel

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): CapabilitiesCpuModel

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: CapabilitiesCpuModel.ConstructorProperties): void
}

module CapabilitiesCpuTopology {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface CapabilitiesCpuTopology {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuTopology

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuTopology

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuTopology

    getCores(): number
    getSockets(): number
    getThreads(): number
    setCores(cores: number): void
    setSockets(sockets: number): void
    setThreads(threads: number): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuTopology

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CapabilitiesCpuTopology extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuTopology

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuTopology

    constructor(config?: CapabilitiesCpuTopology.ConstructorProperties) 
    constructor() 
    static new(): CapabilitiesCpuTopology

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): CapabilitiesCpuTopology

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: CapabilitiesCpuTopology.ConstructorProperties): void
}

module CapabilitiesGuest {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface CapabilitiesGuest {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuest

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuest

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuest

    /**
     * Gets the CPU architecture capabilities of the guest.
     * @returns a new #GVirConfigCapabilitiesGuestArch.
     */
    getArch(): CapabilitiesGuestArch
    /**
     * Gets the CPU features for this guest.
     * @returns  a newly allocated #GList of #GVirConfigCapabilitiesGuestFeature.
     */
    getFeatures(): CapabilitiesGuestFeature[]
    getOsType(): DomainOsType

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuest

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CapabilitiesGuest extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuest

    static name: string

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

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestArch

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestArch

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestArch

    /**
     * Gets the possible domains for this architecture.
     * @returns  a newly allocated #GList of #GVirConfigCapabilitiesGuestDomain.
     */
    getDomains(): CapabilitiesGuestDomain[]
    getEmulator(): string | null
    getName(): string | null

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestArch

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CapabilitiesGuestArch extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestArch

    static name: string

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

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestDomain

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestDomain

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestDomain

    getEmulator(): string | null
    getVirtType(): DomainVirtType

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestDomain

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CapabilitiesGuestDomain extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestDomain

    static name: string

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

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestFeature

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestFeature

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestFeature

    getName(): string | null

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestFeature

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CapabilitiesGuestFeature extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestFeature

    static name: string

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

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHost

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHost

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHost

    /**
     * Gets the CPU capabilities of the host.
     * @returns a new #GVirConfigCapabilitiesCpu.
     */
    getCpu(): CapabilitiesCpu
    /**
     * Get the security models listed in `host` capabilities.
     * @returns  a newly allocated #GList of #GVirConfigCapabilitiesHostSecModel.
     */
    getSecmodels(): CapabilitiesHostSecModel[]
    getUuid(): string | null

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHost

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CapabilitiesHost extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHost

    static name: string

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

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHostSecModel

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHostSecModel

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHostSecModel

    getDoi(): string | null
    getModel(): string | null

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHostSecModel

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class CapabilitiesHostSecModel extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHostSecModel

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHostSecModel

    constructor(config?: CapabilitiesHostSecModel.ConstructorProperties) 
    _init(config?: CapabilitiesHostSecModel.ConstructorProperties): void
}

module Domain {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {

        // Own constructor properties of LibvirtGConfig-1.0.LibvirtGConfig.Domain

        currentMemory?: number | null
        description?: string | null
        features?: string[] | null
        memory?: number | null
        name?: string | null
        title?: string | null
        uuid?: string | null
        vcpu?: number | null
    }

}

interface Domain {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.Domain

    currentMemory: number
    description: string | null
    features: string[]
    memory: number
    name: string | null
    title: string | null
    uuid: string | null
    vcpu: number
    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.Domain

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.Domain

    addDevice(device: DomainDevice): void
    /**
     * Gets the clock configuration of `domain`
     * @returns A #GVirConfigDomainClock. The returned object should be unreffed with g_object_unref() when no longer needed.
     */
    getClock(): DomainClock
    /**
     * Gets the CPU configuration of `domain`
     * @returns A #GVirConfigDomainCpu. The returned object should be unreffed with g_object_unref() when no longer needed.
     */
    getCpu(): DomainCpu
    getCurrentMemory(): number
    getCustomXml(nsUri: string | null): string | null
    getDescription(): string | null
    /**
     * Gets the list of devices attached to `domain`.  The returned list should
     * be freed with g_list_free(), after its elements have been unreffed with
     * g_object_unref().
     * @returns  a newly allocated #GList of #GVirConfigDomainDevice.
     */
    getDevices(): DomainDevice[]
    getFeatures(): string[]
    getMemory(): number
    getName(): string | null
    /**
     * Gets the operating system configuration of `domain`
     * @returns A #GVirConfigDomainOs. The returned object should be unreffed with g_object_unref() when no longer needed.
     */
    getOs(): DomainOs
    getTitle(): string | null
    getUuid(): string | null
    getVcpus(): number
    getVirtType(): DomainVirtType
    setClock(klock: DomainClock | null): void
    setCpu(cpu: DomainCpu | null): void
    /**
     * Sets the current amount of RAM allocated to `domain` in kilobytes (i.e.
     * blocks of 1024 bytes). This can be set to less than the maximum domain
     * memory to allow to balloon the guest memory on the fly. Be aware that
     * libvirt will set it automatically if it's not explictly set, which means
     * you may need to set this value in addition to 'memory' if you want to
     * change the available domain memory after creation.
     * @param memory The current amount of RAM in kilobytes.
     */
    setCurrentMemory(memory: number): void
    setCustomXml(xml: string | null, ns: string | null, nsUri: string | null): boolean
    setCustomXmlNsChildren(xml: string | null, ns: string | null, nsUri: string | null): boolean
    setDescription(description: string | null): void
    setDevices(devices: DomainDevice[]): void
    setFeatures(features: string[]): void
    setLifecycle(event: DomainLifecycleEvent, action: DomainLifecycleAction): void
    /**
     * Sets the maximum amount of RAM allocated to `domain` in kilobytes (i.e.
     * blocks of 1024 bytes).
     * @param memory The maximum amount of RAM in kilobytes.
     */
    setMemory(memory: number): void
    setName(name: string | null): void
    setOs(os: DomainOs | null): void
    setPowerManagement(pm: DomainPowerManagement | null): void
    setSeclabel(seclabel: DomainSeclabel | null): void
    /**
     * Sets the title of the domain. This is an optional short textual description of the domain. Passing a NULL `title`
     * unsets the current domain title.
     * @param title title of the domain
     */
    setTitle(title: string | null): void
    setUuid(uuid: string | null): void
    setVcpus(vcpuCount: number): void
    setVirtType(type: DomainVirtType): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.Domain

    connect(sigName: "notify::current-memory", callback: (...args: any[]) => void): number
    on(sigName: "notify::current-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::current-memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::current-memory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::current-memory", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::features", callback: (...args: any[]) => void): number
    on(sigName: "notify::features", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::features", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::features", ...args: any[]): void
    connect(sigName: "notify::memory", callback: (...args: any[]) => void): number
    on(sigName: "notify::memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::memory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::memory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::memory", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::uuid", callback: (...args: any[]) => void): number
    on(sigName: "notify::uuid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uuid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uuid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uuid", ...args: any[]): void
    connect(sigName: "notify::vcpu", callback: (...args: any[]) => void): number
    on(sigName: "notify::vcpu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vcpu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vcpu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vcpu", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Domain extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.Domain

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.Domain

    constructor(config?: Domain.ConstructorProperties) 
    constructor() 
    static new(): Domain

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): Domain

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: Domain.ConstructorProperties): void
}

module DomainAddress {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface DomainAddress {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddress

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddress

    parent: Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddress

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainAddress extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddress

    static name: string

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

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressPci

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressPci

    parent: DomainAddress & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressPci

    getBus(): number
    getDomain(): number
    getFunction(): number
    getMultifunction(): boolean
    getSlot(): number
    setBus(bus: number): void
    setDomain(pciDomain: number): void
    setFunction(function_: number): void
    setMultifunction(multifunction: boolean): void
    setSlot(slot: number): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressPci

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainAddressPci extends DomainAddress {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressPci

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressPci

    constructor(config?: DomainAddressPci.ConstructorProperties) 
    constructor() 
    static new(): DomainAddressPci

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainAddressPci

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainAddressPci.ConstructorProperties): void
}

module DomainAddressUsb {

    // Constructor properties interface

    interface ConstructorProperties extends DomainAddress.ConstructorProperties {
    }

}

interface DomainAddressUsb {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressUsb

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressUsb

    parent: DomainAddress & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressUsb

    setBus(bus: number): void
    setPort(port: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressUsb

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainAddressUsb extends DomainAddress {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressUsb

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressUsb

    constructor(config?: DomainAddressUsb.ConstructorProperties) 
    constructor() 
    static new(): DomainAddressUsb

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainAddressUsb

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainAddressUsb.ConstructorProperties): void
}

module DomainCapabilities {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface DomainCapabilities {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilities

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilities

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilities

    /**
     * Gets the `os` associated with the `domain_caps`.
     * @returns a new #GVirConfigDomainCapabilitiesOs.
     */
    getOs(): DomainCapabilitiesOs

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilities

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainCapabilities extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilities

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilities

    constructor(config?: DomainCapabilities.ConstructorProperties) 
    constructor() 
    static new(): DomainCapabilities

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainCapabilities

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainCapabilities.ConstructorProperties): void
}

module DomainCapabilitiesOs {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface DomainCapabilitiesOs {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesOs

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesOs

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesOs

    // Has conflict: getFirmwares(): DomainOsFirmware[]

    // Own virtual methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesOs

    /**
     * Gets the firmwares supported by `os`. The returned list should be freed with
     * g_list_free().
     * @virtual 
     * @returns  a newly allocated #GList of #GVirConfigDomainOsFirmware.
     */
    getFirmwares(): DomainOsFirmware[]

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesOs

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainCapabilitiesOs extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesOs

    static name: string

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

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChannel

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChannel

    parent: DomainChardev & DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChannel

    getTargetName(): string | null
    getTargetType(): DomainChannelTargetType
    setTargetName(name: string | null): void
    setTargetType(type: DomainChannelTargetType): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainChannel

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainChannel extends DomainChardev {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChannel

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainChannel

    constructor(config?: DomainChannel.ConstructorProperties) 
    constructor() 
    static new(): DomainChannel

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainChannel

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainChannel.ConstructorProperties): void
}

module DomainChardev {

    // Constructor properties interface

    interface ConstructorProperties extends DomainDevice.ConstructorProperties {
    }

}

interface DomainChardev {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev

    parent: DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev

    /**
     * Gets the source for the chardev
     * @returns the chardev source
     */
    getSource(): DomainChardevSource
    setSource(source: DomainChardevSource): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainChardev extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev

    static name: string

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

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSource

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSource

    parent: Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSource

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainChardevSource extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSource

    static name: string

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

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourcePty

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourcePty

    parent: DomainChardevSource & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourcePty

    getPath(): string | null
    setPath(path: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourcePty

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainChardevSourcePty extends DomainChardevSource {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourcePty

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourcePty

    constructor(config?: DomainChardevSourcePty.ConstructorProperties) 
    constructor() 
    static new(): DomainChardevSourcePty

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainChardevSourcePty

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainChardevSourcePty.ConstructorProperties): void
}

module DomainChardevSourceSpicePort {

    // Constructor properties interface

    interface ConstructorProperties extends DomainChardevSource.ConstructorProperties {
    }

}

interface DomainChardevSourceSpicePort {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpicePort

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpicePort

    parent: DomainChardevSource & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpicePort

    getChannel(): string | null
    setChannel(channel: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpicePort

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainChardevSourceSpicePort extends DomainChardevSource {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpicePort

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpicePort

    constructor(config?: DomainChardevSourceSpicePort.ConstructorProperties) 
    constructor() 
    static new(): DomainChardevSourceSpicePort

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainChardevSourceSpicePort

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainChardevSourceSpicePort.ConstructorProperties): void
}

module DomainChardevSourceSpiceVmc {

    // Constructor properties interface

    interface ConstructorProperties extends DomainChardevSource.ConstructorProperties {
    }

}

interface DomainChardevSourceSpiceVmc {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpiceVmc

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpiceVmc

    parent: DomainChardevSource & Object & GObject.Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpiceVmc

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainChardevSourceSpiceVmc extends DomainChardevSource {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpiceVmc

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpiceVmc

    constructor(config?: DomainChardevSourceSpiceVmc.ConstructorProperties) 
    constructor() 
    static new(): DomainChardevSourceSpiceVmc

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainChardevSourceSpiceVmc

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainChardevSourceSpiceVmc.ConstructorProperties): void
}

module DomainChardevSourceUnix {

    // Constructor properties interface

    interface ConstructorProperties extends DomainChardevSource.ConstructorProperties {
    }

}

interface DomainChardevSourceUnix {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceUnix

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceUnix

    parent: DomainChardevSource & Object & GObject.Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceUnix

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainChardevSourceUnix extends DomainChardevSource {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceUnix

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceUnix

    constructor(config?: DomainChardevSourceUnix.ConstructorProperties) 
    constructor() 
    static new(): DomainChardevSourceUnix

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainChardevSourceUnix

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainChardevSourceUnix.ConstructorProperties): void
}

module DomainClock {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface DomainClock {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainClock

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainClock

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainClock

    addTimer(timer: DomainTimer): void
    getOffset(): DomainClockOffset
    getTimezone(): string | null
    getVariableOffset(): number
    setOffset(offset: DomainClockOffset): void
    setTimezone(tz: string | null): void
    setVariableOffset(seconds: number): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainClock

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainClock extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainClock

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainClock

    constructor(config?: DomainClock.ConstructorProperties) 
    constructor() 
    static new(): DomainClock

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainClock

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainClock.ConstructorProperties): void
}

module DomainConsole {

    // Constructor properties interface

    interface ConstructorProperties extends DomainChardev.ConstructorProperties {
    }

}

interface DomainConsole {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainConsole

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainConsole

    parent: DomainChardev & DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainConsole

    setTargetType(type: DomainConsoleTargetType): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainConsole

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainConsole extends DomainChardev {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainConsole

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainConsole

    constructor(config?: DomainConsole.ConstructorProperties) 
    constructor() 
    static new(): DomainConsole

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainConsole

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainConsole.ConstructorProperties): void
}

module DomainController {

    // Constructor properties interface

    interface ConstructorProperties extends DomainDevice.ConstructorProperties {
    }

}

interface DomainController {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainController

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainController

    parent: DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainController

    getIndex(): number
    getPorts(): number
    setAddress(address: DomainAddress | null): void
    setIndex(index: number): void
    setPorts(ports: number): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainController

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainController extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainController

    static name: string

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

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainControllerUsb

    __gtype__: number

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
    setMaster(master: DomainControllerUsb, startport: number): void
    /**
     * Sets the model of `controller` to `model`.
     * @param model the USB controller model
     */
    setModel(model: DomainControllerUsbModel): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainControllerUsb

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    /**
     * Creates a new #GVirConfigDomainControllerUsb with a reference count of 1.
     * The controller object will be created using the XML description stored
     * in `xml`. This is a fragment of libvirt domain XML whose root node is
     * &lt;controller&gt;.
     * @constructor 
     * @param xml xml data to create the controller from
     * @returns a new #GVirConfigDomainControllerUsb, or NULL if @xml failed to be parsed.
     */
    static newFromXml(xml: string | null): DomainControllerUsb

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainControllerUsb.ConstructorProperties): void
}

module DomainCpu {

    // Constructor properties interface

    interface ConstructorProperties extends CapabilitiesCpu.ConstructorProperties {
    }

}

interface DomainCpu {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpu

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpu

    parent: CapabilitiesCpu & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpu

    getMatchPolicy(): DomainCpuMatchPolicy
    getMode(): DomainCpuMode
    setMatchPolicy(policy: DomainCpuMatchPolicy): void
    setMode(mode: DomainCpuMode): void
    setModel(model: DomainCpuModel): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpu

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainCpu extends CapabilitiesCpu {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpu

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpu

    constructor(config?: DomainCpu.ConstructorProperties) 
    constructor() 
    static new(): DomainCpu

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainCpu

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainCpu.ConstructorProperties): void
}

module DomainCpuFeature {

    // Constructor properties interface

    interface ConstructorProperties extends CapabilitiesCpuFeature.ConstructorProperties {
    }

}

interface DomainCpuFeature {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuFeature

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuFeature

    parent: CapabilitiesCpu & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuFeature

    getPolicy(): DomainCpuFeaturePolicy
    setPolicy(policy: DomainCpuFeaturePolicy): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuFeature

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainCpuFeature extends CapabilitiesCpuFeature {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuFeature

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuFeature

    constructor(config?: DomainCpuFeature.ConstructorProperties) 
    constructor() 
    static new(): DomainCpuFeature

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainCpuFeature

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainCpuFeature.ConstructorProperties): void
}

module DomainCpuModel {

    // Constructor properties interface

    interface ConstructorProperties extends CapabilitiesCpuModel.ConstructorProperties {
    }

}

interface DomainCpuModel {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuModel

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuModel

    parent: CapabilitiesCpuModel & Object & GObject.Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuModel

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainCpuModel extends CapabilitiesCpuModel {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuModel

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuModel

    constructor(config?: DomainCpuModel.ConstructorProperties) 
    constructor() 
    static new(): DomainCpuModel

    // Overloads of new

    static new(): CapabilitiesCpuModel
    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainCpuModel

    // Overloads of newFromXml

    static newFromXml(xml: string | null): CapabilitiesCpuModel
    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainCpuModel.ConstructorProperties): void
}

module DomainDevice {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice

    getAlias(): string | null

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainDevice extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice

    static name: string

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

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainDisk

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDisk

    parent: DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDisk

    getDiskType(): DomainDiskType
    /**
     * Gets the driver configuration for `disk`.
     * @returns A #GVirConfigDomainDiskDriver. The returned object should be unreffed with g_object_unref() when no longer needed.
     */
    getDriver(): DomainDiskDriver
    getDriverCache(): DomainDiskCacheType
    getDriverFormat(): DomainDiskFormat
    getDriverName(): string | null
    getDriverType(): string | null
    getGuestDeviceType(): DomainDiskGuestDeviceType
    getSnapshotType(): DomainDiskSnapshotType
    getSource(): string | null
    getStartupPolicy(): DomainDiskStartupPolicy
    getTargetBus(): DomainDiskBus
    getTargetDev(): string | null
    /**
     * Uses `driver` as the driver configuration for `disk`.
     * @param driver a #GVirConfigDomainDiskDriver
     */
    setDriver(driver: DomainDiskDriver | null): void
    setDriverCache(cacheType: DomainDiskCacheType): void
    setDriverFormat(format: DomainDiskFormat): void
    setDriverName(driverName: string | null): void
    setDriverType(driverType: string | null): void
    setGuestDeviceType(type: DomainDiskGuestDeviceType): void
    setReadonly(readonly: boolean): void
    setSnapshotType(type: DomainDiskSnapshotType): void
    setSource(source: string | null): void
    setStartupPolicy(policy: DomainDiskStartupPolicy): void
    setTargetBus(bus: DomainDiskBus): void
    setTargetDev(dev: string | null): void
    setType(type: DomainDiskType): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainDisk

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainDisk extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainDisk

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainDisk

    constructor(config?: DomainDisk.ConstructorProperties) 
    constructor() 
    static new(): DomainDisk

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainDisk

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainDisk.ConstructorProperties): void
}

module DomainDiskDriver {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface DomainDiskDriver {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskDriver

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskDriver

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskDriver

    getCache(): DomainDiskCacheType
    getCopyOnRead(): boolean
    getDiscard(): DomainDiskDriverDiscard
    getErrorPolicy(): DomainDiskDriverErrorPolicy
    getFormat(): DomainDiskFormat
    getIoPolicy(): DomainDiskDriverIoPolicy
    getName(): string | null
    setCache(cacheType: DomainDiskCacheType): void
    setCopyOnRead(copyOnRead: boolean): void
    setDiscard(discard: DomainDiskDriverDiscard): void
    setErrorPolicy(policy: DomainDiskDriverErrorPolicy): void
    setFormat(format: DomainDiskFormat): void
    setIoPolicy(policy: DomainDiskDriverIoPolicy): void
    setName(name: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskDriver

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainDiskDriver extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskDriver

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskDriver

    constructor(config?: DomainDiskDriver.ConstructorProperties) 
    constructor() 
    static new(): DomainDiskDriver

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainDiskDriver

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainDiskDriver.ConstructorProperties): void
}

module DomainFilesys {

    // Constructor properties interface

    interface ConstructorProperties extends DomainDevice.ConstructorProperties {
    }

}

interface DomainFilesys {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainFilesys

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainFilesys

    parent: DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainFilesys

    setAccessType(type: DomainFilesysAccessType): void
    setDriverFormat(format: DomainDiskFormat): void
    setDriverType(type: DomainFilesysDriverType): void
    setRamUsage(bytes: number): void
    setReadonly(readonly: boolean): void
    setSource(source: string | null): void
    setTarget(target: string | null): void
    setType(type: DomainFilesysType): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainFilesys

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainFilesys extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainFilesys

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainFilesys

    constructor(config?: DomainFilesys.ConstructorProperties) 
    constructor() 
    static new(): DomainFilesys

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainFilesys

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainFilesys.ConstructorProperties): void
}

module DomainGraphics {

    // Constructor properties interface

    interface ConstructorProperties extends DomainDevice.ConstructorProperties {
    }

}

interface DomainGraphics {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphics

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphics

    parent: DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphics

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainGraphics extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphics

    static name: string

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

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsDesktop

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsDesktop

    parent: DomainGraphics & DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsDesktop

    getDisplay(): string | null
    getFullscreen(): boolean
    setDisplay(disp: string | null): void
    setFullscreen(fullscreen: boolean): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsDesktop

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainGraphicsDesktop extends DomainGraphics {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsDesktop

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsDesktop

    constructor(config?: DomainGraphicsDesktop.ConstructorProperties) 
    constructor() 
    static new(): DomainGraphicsDesktop

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainGraphicsDesktop

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainGraphicsDesktop.ConstructorProperties): void
}

module DomainGraphicsRdp {

    // Constructor properties interface

    interface ConstructorProperties extends DomainGraphics.ConstructorProperties {
    }

}

interface DomainGraphicsRdp {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsRdp

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsRdp

    parent: DomainGraphics & DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsRdp

    getMultiUser(): boolean
    getPort(): number
    getReplaceUser(): boolean
    setAutoport(autoport: boolean): void
    setMultiUser(multiUser: boolean): void
    setPort(port: number): void
    setReplaceUser(replaceUser: boolean): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsRdp

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainGraphicsRdp extends DomainGraphics {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsRdp

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsRdp

    constructor(config?: DomainGraphicsRdp.ConstructorProperties) 
    constructor() 
    static new(): DomainGraphicsRdp

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainGraphicsRdp

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainGraphicsRdp.ConstructorProperties): void
}

module DomainGraphicsSdl {

    // Constructor properties interface

    interface ConstructorProperties extends DomainGraphics.ConstructorProperties {
    }

}

interface DomainGraphicsSdl {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSdl

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSdl

    parent: DomainGraphics & DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSdl

    setDisplay(disp: string | null): void
    setFullscreen(fullscreen: boolean): void
    setXauthority(path: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSdl

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainGraphicsSdl extends DomainGraphics {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSdl

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSdl

    constructor(config?: DomainGraphicsSdl.ConstructorProperties) 
    constructor() 
    static new(): DomainGraphicsSdl

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainGraphicsSdl

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainGraphicsSdl.ConstructorProperties): void
}

module DomainGraphicsSpice {

    // Constructor properties interface

    interface ConstructorProperties extends DomainGraphics.ConstructorProperties {
    }

}

interface DomainGraphicsSpice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSpice

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSpice

    parent: DomainGraphics & DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSpice

    getImageCompression(): DomainGraphicsSpiceImageCompression
    getPort(): number
    setAutoport(autoport: boolean): void
    setGl(gl: boolean): void
    setImageCompression(compression: DomainGraphicsSpiceImageCompression): void
    setPassword(password: string | null): void
    setPort(port: number): void
    setTlsPort(port: number): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSpice

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainGraphicsSpice extends DomainGraphics {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSpice

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSpice

    constructor(config?: DomainGraphicsSpice.ConstructorProperties) 
    constructor() 
    static new(): DomainGraphicsSpice

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainGraphicsSpice

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainGraphicsSpice.ConstructorProperties): void
}

module DomainGraphicsVnc {

    // Constructor properties interface

    interface ConstructorProperties extends DomainGraphics.ConstructorProperties {
    }

}

interface DomainGraphicsVnc {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsVnc

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsVnc

    parent: DomainGraphics & DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsVnc

    getPort(): number
    getSocket(): string | null
    setAutoport(autoport: boolean): void
    setPassword(password: string | null): void
    setPort(port: number): void
    setSocket(socket: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsVnc

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainGraphicsVnc extends DomainGraphics {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsVnc

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsVnc

    constructor(config?: DomainGraphicsVnc.ConstructorProperties) 
    constructor() 
    static new(): DomainGraphicsVnc

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainGraphicsVnc

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainGraphicsVnc.ConstructorProperties): void
}

module DomainHostdev {

    // Constructor properties interface

    interface ConstructorProperties extends DomainDevice.ConstructorProperties {
    }

}

interface DomainHostdev {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdev

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdev

    parent: DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdev

    getBootOrder(): number
    getReadonly(): boolean
    getShareable(): boolean
    /**
     * If a positive integer is passed as `order,` `hostdev` is marked bootable and
     * boot order set to `order,` otherwise `hostdev` is marked to be unbootable.
     * @param order the boot order
     */
    setBootOrder(order: number): void
    /**
     * Set the readonly status of `hostdev` to `readonly`.
     * @param readonly the new readonly status
     */
    setReadonly(readonly: boolean): void
    /**
     * Set whether or not `hostdev` is shared between domains.
     * @param shareable the new shareable status
     */
    setShareable(shareable: boolean): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdev

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainHostdev extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdev

    static name: string

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

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevPci

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevPci

    parent: DomainHostdev & DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevPci

    /**
     * Gets the address associated with `hostdev`.
     * @returns a new #GVirConfigDomainAddressPci, or NULL if no address is associated with @hostdev. The returned object should be unreffed with g_object_unref() when no longer needed.
     */
    getAddress(): DomainAddressPci
    getManaged(): boolean
    getRomBar(): boolean
    getRomFile(): string | null
    setAddress(address: DomainAddressPci): void
    setManaged(managed: boolean): void
    setRomBar(bar: boolean): void
    setRomFile(file: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevPci

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainHostdevPci extends DomainHostdev {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevPci

    static name: string

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

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    /**
     * Creates a new #GVirConfigDomainHostdevPci. The host device object will be
     * created using the XML description stored in `xml`. This is a fragment of
     * libvirt domain XML whose root node is &lt;hostdev&gt;.
     * @constructor 
     * @param xml xml data to create the host device from
     * @returns a new #GVirConfigDomainHostdevPci, or NULL if @xml failed to be parsed. The returned object should be unreffed with g_object_unref() when no longer needed.
     */
    static newFromXml(xml: string | null): DomainHostdevPci

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainHostdevPci.ConstructorProperties): void
}

module DomainInput {

    // Constructor properties interface

    interface ConstructorProperties extends DomainDevice.ConstructorProperties {
    }

}

interface DomainInput {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInput

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInput

    parent: DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInput

    getBus(): DomainInputBus
    getDeviceType(): DomainInputDeviceType
    setBus(bus: DomainInputBus): void
    setDeviceType(type: DomainInputDeviceType): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainInput

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainInput extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInput

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainInput

    constructor(config?: DomainInput.ConstructorProperties) 
    constructor() 
    static new(): DomainInput

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainInput

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainInput.ConstructorProperties): void
}

module DomainInterface {

    // Constructor properties interface

    interface ConstructorProperties extends DomainDevice.ConstructorProperties {
    }

}

interface DomainInterface {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterface

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterface

    parent: DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterface

    /**
     * Gets the filterref associated with the `interface`
     * @returns A #GVirConfigDomainInterfaceFilterref. The returned object should be unreffed with g_object_unref() when no longer needed.
     */
    getFilterref(): DomainInterfaceFilterref
    getIfname(): string | null
    getLinkState(): DomainInterfaceLinkState
    getMac(): string | null
    getModel(): string | null
    setFilterref(filterref: DomainInterfaceFilterref | null): void
    setIfname(ifname: string | null): void
    setLinkState(state: DomainInterfaceLinkState): void
    setMac(macAddress: string | null): void
    setModel(model: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterface

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainInterface extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterface

    static name: string

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

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceBridge

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceBridge

    parent: DomainInterface & DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceBridge

    setSource(brname: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceBridge

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainInterfaceBridge extends DomainInterface {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceBridge

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceBridge

    constructor(config?: DomainInterfaceBridge.ConstructorProperties) 
    constructor() 
    static new(): DomainInterfaceBridge

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainInterfaceBridge

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainInterfaceBridge.ConstructorProperties): void
}

module DomainInterfaceFilterref {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface DomainInterfaceFilterref {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterref

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterref

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterref

    addParameter(parameter: DomainInterfaceFilterrefParameter): void
    getName(): string | null
    /**
     * Gets the list of parameters attached to `filterref`. The returned list should be
     * freed with g_list_free(), after its elements have been unreffed with
     * g_object_unref().
     * @returns  a newly allocated #GList of #GVirConfigDomainInterfaceFilterrefParameter.
     */
    getParameters(): DomainInterfaceFilterrefParameter[]
    setName(filter: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterref

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainInterfaceFilterref extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterref

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterref

    constructor(config?: DomainInterfaceFilterref.ConstructorProperties) 
    constructor() 
    static new(): DomainInterfaceFilterref

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainInterfaceFilterref

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainInterfaceFilterref.ConstructorProperties): void
}

module DomainInterfaceFilterrefParameter {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface DomainInterfaceFilterrefParameter {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefParameter

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefParameter

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefParameter

    getName(): string | null
    getValue(): string | null
    setName(name: string | null): void
    setValue(value: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefParameter

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainInterfaceFilterrefParameter extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefParameter

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefParameter

    constructor(config?: DomainInterfaceFilterrefParameter.ConstructorProperties) 
    constructor() 
    static new(): DomainInterfaceFilterrefParameter

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainInterfaceFilterrefParameter

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainInterfaceFilterrefParameter.ConstructorProperties): void
}

module DomainInterfaceNetwork {

    // Constructor properties interface

    interface ConstructorProperties extends DomainInterface.ConstructorProperties {
    }

}

interface DomainInterfaceNetwork {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceNetwork

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceNetwork

    parent: DomainInterface & DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceNetwork

    setSource(source: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceNetwork

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainInterfaceNetwork extends DomainInterface {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceNetwork

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceNetwork

    constructor(config?: DomainInterfaceNetwork.ConstructorProperties) 
    constructor() 
    static new(): DomainInterfaceNetwork

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainInterfaceNetwork

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainInterfaceNetwork.ConstructorProperties): void
}

module DomainInterfaceUser {

    // Constructor properties interface

    interface ConstructorProperties extends DomainInterface.ConstructorProperties {
    }

}

interface DomainInterfaceUser {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceUser

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceUser

    parent: DomainInterface & DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceUser

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainInterfaceUser extends DomainInterface {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceUser

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceUser

    constructor(config?: DomainInterfaceUser.ConstructorProperties) 
    constructor() 
    static new(): DomainInterfaceUser

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainInterfaceUser

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainInterfaceUser.ConstructorProperties): void
}

module DomainMemballoon {

    // Constructor properties interface

    interface ConstructorProperties extends DomainDevice.ConstructorProperties {
    }

}

interface DomainMemballoon {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainMemballoon

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainMemballoon

    parent: DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainMemballoon

    setModel(model: DomainMemballoonModel): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainMemballoon

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainMemballoon extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainMemballoon

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainMemballoon

    constructor(config?: DomainMemballoon.ConstructorProperties) 
    constructor() 
    static new(): DomainMemballoon

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainMemballoon

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainMemballoon.ConstructorProperties): void
}

module DomainOs {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface DomainOs {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainOs

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainOs

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainOs

    biosEnableSerial(enable: boolean): void
    enableBootMenu(enable: boolean): void
    getArch(): string | null
    /**
     * Gets the list of devices attached to `os`. The returned list should be
     * freed with g_list_free().
     * @returns  a newly allocated #GList of #GVirConfigDomainOsBootDevice.
     */
    getBootDevices(): DomainOsBootDevice[]
    getFirmware(): DomainOsFirmware
    getMachine(): string | null
    getOsType(): DomainOsType
    setArch(arch: string | null): void
    setBootDevices(bootDevices: DomainOsBootDevice[]): void
    setCmdline(cmdline: string | null): void
    setFirmware(firmware: DomainOsFirmware): void
    setInit(init: string | null): void
    setKernel(kernel: string | null): void
    setLoader(loader: string | null): void
    setMachine(machine: string | null): void
    setOsType(type: DomainOsType): void
    setRamdisk(ramdisk: string | null): void
    setSmbiosMode(mode: DomainOsSmBiosMode): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainOs

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainOs extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainOs

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainOs

    constructor(config?: DomainOs.ConstructorProperties) 
    constructor() 
    static new(): DomainOs

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainOs

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainOs.ConstructorProperties): void
}

module DomainParallel {

    // Constructor properties interface

    interface ConstructorProperties extends DomainChardev.ConstructorProperties {
    }

}

interface DomainParallel {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainParallel

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainParallel

    parent: DomainChardev & DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainParallel

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainParallel extends DomainChardev {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainParallel

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainParallel

    constructor(config?: DomainParallel.ConstructorProperties) 
    constructor() 
    static new(): DomainParallel

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainParallel

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainParallel.ConstructorProperties): void
}

module DomainPowerManagement {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface DomainPowerManagement {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainPowerManagement

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainPowerManagement

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainPowerManagement

    setDiskSuspendEnabled(enabled: boolean): void
    setMemSuspendEnabled(enabled: boolean): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainPowerManagement

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainPowerManagement extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainPowerManagement

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainPowerManagement

    constructor(config?: DomainPowerManagement.ConstructorProperties) 
    constructor() 
    static new(): DomainPowerManagement

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainPowerManagement

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainPowerManagement.ConstructorProperties): void
}

module DomainRedirdev {

    // Constructor properties interface

    interface ConstructorProperties extends DomainChardev.ConstructorProperties {
    }

}

interface DomainRedirdev {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainRedirdev

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainRedirdev

    parent: DomainChardev & DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainRedirdev

    setAddress(address: DomainAddress | null): void
    setBus(bus: DomainRedirdevBus): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainRedirdev

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainRedirdev extends DomainChardev {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainRedirdev

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainRedirdev

    constructor(config?: DomainRedirdev.ConstructorProperties) 
    constructor() 
    static new(): DomainRedirdev

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainRedirdev

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainRedirdev.ConstructorProperties): void
}

module DomainSeclabel {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface DomainSeclabel {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSeclabel

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSeclabel

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSeclabel

    setBaselabel(label: string | null): void
    setLabel(label: string | null): void
    setModel(model: string | null): void
    setType(type: DomainSeclabelType): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainSeclabel

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainSeclabel extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSeclabel

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainSeclabel

    constructor(config?: DomainSeclabel.ConstructorProperties) 
    constructor() 
    static new(): DomainSeclabel

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainSeclabel

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainSeclabel.ConstructorProperties): void
}

module DomainSerial {

    // Constructor properties interface

    interface ConstructorProperties extends DomainChardev.ConstructorProperties {
    }

}

interface DomainSerial {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSerial

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSerial

    parent: DomainChardev & DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainSerial

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainSerial extends DomainChardev {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSerial

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainSerial

    constructor(config?: DomainSerial.ConstructorProperties) 
    constructor() 
    static new(): DomainSerial

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainSerial

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainSerial.ConstructorProperties): void
}

module DomainSmartcard {

    // Constructor properties interface

    interface ConstructorProperties extends DomainDevice.ConstructorProperties {
    }

}

interface DomainSmartcard {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcard

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcard

    parent: DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcard

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainSmartcard extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcard

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcard

    constructor(config?: DomainSmartcard.ConstructorProperties) 
    _init(config?: DomainSmartcard.ConstructorProperties): void
    static setAddress(redirdev: DomainRedirdev, address: DomainAddress | null): void
}

module DomainSmartcardHost {

    // Constructor properties interface

    interface ConstructorProperties extends DomainSmartcard.ConstructorProperties {
    }

}

interface DomainSmartcardHost {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHost

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHost

    parent: DomainSmartcard & DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHost

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainSmartcardHost extends DomainSmartcard {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHost

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHost

    constructor(config?: DomainSmartcardHost.ConstructorProperties) 
    constructor() 
    static new(): DomainSmartcardHost

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainSmartcardHost

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainSmartcardHost.ConstructorProperties): void
}

module DomainSmartcardHostCertificates {

    // Constructor properties interface

    interface ConstructorProperties extends DomainSmartcard.ConstructorProperties {
    }

}

interface DomainSmartcardHostCertificates {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHostCertificates

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHostCertificates

    parent: DomainSmartcard & DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHostCertificates

    setCertificates(cert1: string | null, cert2: string | null, cert3: string | null): void
    setDatabase(path: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHostCertificates

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainSmartcardHostCertificates extends DomainSmartcard {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHostCertificates

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHostCertificates

    constructor(config?: DomainSmartcardHostCertificates.ConstructorProperties) 
    constructor() 
    static new(): DomainSmartcardHostCertificates

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainSmartcardHostCertificates

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainSmartcardHostCertificates.ConstructorProperties): void
}

module DomainSmartcardPassthrough {

    // Constructor properties interface

    interface ConstructorProperties extends DomainSmartcard.ConstructorProperties {
    }

}

interface DomainSmartcardPassthrough {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardPassthrough

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardPassthrough

    parent: DomainSmartcard & DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardPassthrough

    setSource(source: DomainChardevSource): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardPassthrough

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainSmartcardPassthrough extends DomainSmartcard {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardPassthrough

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardPassthrough

    constructor(config?: DomainSmartcardPassthrough.ConstructorProperties) 
    constructor() 
    static new(): DomainSmartcardPassthrough

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainSmartcardPassthrough

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainSmartcardPassthrough.ConstructorProperties): void
}

module DomainSnapshot {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface DomainSnapshot {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshot

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshot

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshot

    addDisk(disk: DomainSnapshotDisk): void
    getCreationTime(): number
    getDescription(): string | null
    /**
     * Gets the list of disks attached to `snapshot`.  The returned list should
     * be freed with g_list_free(), after its elements have been unreffed with
     * g_object_unref().
     * @returns  a newly allocated #GList of #GVirConfigDomainSnapshotDisk.
     */
    getDisks(): DomainSnapshotDisk[]
    /**
     * Gets the configuration of the domain `snapshot` is a snapshot of.
     * @returns A #GVirConfigDomain. The returned object should be unreffed with g_object_unref() when no longer needed.
     */
    getDomain(): Domain
    getMemoryFile(): string | null
    getMemoryState(): DomainSnapshotMemoryState
    getName(): string | null
    getParent(): string | null
    getState(): DomainSnapshotDomainState
    setDescription(description: string | null): void
    setDisks(disks: DomainSnapshotDisk[]): void
    setMemoryFile(filename: string | null): void
    setMemoryState(state: DomainSnapshotMemoryState): void
    setName(name: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshot

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainSnapshot extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshot

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshot

    constructor(config?: DomainSnapshot.ConstructorProperties) 
    constructor() 
    static new(): DomainSnapshot

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainSnapshot

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainSnapshot.ConstructorProperties): void
}

module DomainSnapshotDisk {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface DomainSnapshotDisk {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotDisk

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotDisk

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotDisk

    getDriverFormat(): DomainDiskFormat
    getName(): string | null
    getSnapshotType(): DomainDiskSnapshotType
    getSourceFile(): string | null
    setDriverFormat(format: DomainDiskFormat): void
    setName(name: string | null): void
    setSnapshotType(type: DomainDiskSnapshotType): void
    setSourceFile(filename: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotDisk

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainSnapshotDisk extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotDisk

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotDisk

    constructor(config?: DomainSnapshotDisk.ConstructorProperties) 
    constructor() 
    static new(): DomainSnapshotDisk

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainSnapshotDisk

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainSnapshotDisk.ConstructorProperties): void
}

module DomainSound {

    // Constructor properties interface

    interface ConstructorProperties extends DomainDevice.ConstructorProperties {
    }

}

interface DomainSound {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSound

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSound

    parent: DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSound

    setModel(model: DomainSoundModel): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainSound

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainSound extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSound

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainSound

    constructor(config?: DomainSound.ConstructorProperties) 
    constructor() 
    static new(): DomainSound

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainSound

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainSound.ConstructorProperties): void
}

module DomainTimer {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface DomainTimer {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimer

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimer

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimer

    getPresent(): boolean
    getTickPolicy(): DomainTimerTickPolicy
    setPresent(present: boolean): void
    setTickPolicy(policy: DomainTimerTickPolicy): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimer

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainTimer extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimer

    static name: string

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

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerHpet

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerHpet

    parent: DomainTimer & Object & GObject.Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerHpet

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainTimerHpet extends DomainTimer {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerHpet

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerHpet

    constructor(config?: DomainTimerHpet.ConstructorProperties) 
    constructor() 
    static new(): DomainTimerHpet

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainTimerHpet

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainTimerHpet.ConstructorProperties): void
}

module DomainTimerPit {

    // Constructor properties interface

    interface ConstructorProperties extends DomainTimer.ConstructorProperties {
    }

}

interface DomainTimerPit {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerPit

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerPit

    parent: DomainTimer & Object & GObject.Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerPit

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainTimerPit extends DomainTimer {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerPit

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerPit

    constructor(config?: DomainTimerPit.ConstructorProperties) 
    constructor() 
    static new(): DomainTimerPit

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainTimerPit

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainTimerPit.ConstructorProperties): void
}

module DomainTimerRtc {

    // Constructor properties interface

    interface ConstructorProperties extends DomainTimer.ConstructorProperties {
    }

}

interface DomainTimerRtc {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerRtc

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerRtc

    parent: DomainTimer & Object & GObject.Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerRtc

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainTimerRtc extends DomainTimer {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerRtc

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerRtc

    constructor(config?: DomainTimerRtc.ConstructorProperties) 
    constructor() 
    static new(): DomainTimerRtc

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainTimerRtc

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainTimerRtc.ConstructorProperties): void
}

module DomainVideo {

    // Constructor properties interface

    interface ConstructorProperties extends DomainDevice.ConstructorProperties {
    }

}

interface DomainVideo {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainVideo

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainVideo

    parent: DomainDevice & Object & GObject.Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainVideo

    getModel(): DomainVideoModel
    setAccel3d(accel3d: boolean): void
    setHeads(headCount: number): void
    setModel(model: DomainVideoModel): void
    setRam(kbytes: number): void
    setVgamem(kbytes: number): void
    setVram(kbytes: number): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainVideo

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DomainVideo extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainVideo

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainVideo

    constructor(config?: DomainVideo.ConstructorProperties) 
    constructor() 
    static new(): DomainVideo

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): DomainVideo

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: DomainVideo.ConstructorProperties): void
}

module Interface {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface Interface {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.Interface

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.Interface

    parent: Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.Interface

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Interface extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.Interface

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.Interface

    constructor(config?: Interface.ConstructorProperties) 
    constructor() 
    static new(): Interface

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): Interface

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: Interface.ConstructorProperties): void
}

module Network {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface Network {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.Network

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.Network

    parent: Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.Network

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Network extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.Network

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.Network

    constructor(config?: Network.ConstructorProperties) 
    constructor() 
    static new(): Network

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): Network

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: Network.ConstructorProperties): void
}

module NetworkFilter {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface NetworkFilter {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.NetworkFilter

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.NetworkFilter

    parent: Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.NetworkFilter

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class NetworkFilter extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.NetworkFilter

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.NetworkFilter

    constructor(config?: NetworkFilter.ConstructorProperties) 
    constructor() 
    static new(): NetworkFilter

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): NetworkFilter

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: NetworkFilter.ConstructorProperties): void
}

module NodeDevice {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface NodeDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.NodeDevice

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.NodeDevice

    parent: Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.NodeDevice

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class NodeDevice extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.NodeDevice

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.NodeDevice

    constructor(config?: NodeDevice.ConstructorProperties) 
    constructor() 
    static new(): NodeDevice

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): NodeDevice

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
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
    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.Object

    parent: GObject.Object
    priv: ObjectPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.Object

    getSchema(): string | null
    toXml(): string | null
    validate(): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.Object

    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Object extends GObject.Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.Object

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.Object

    constructor(config?: Object.ConstructorProperties) 
    constructor(type: GObject.GType, rootName: string | null, schema: string | null) 
    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: Object.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

module Secret {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface Secret {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.Secret

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.Secret

    parent: Object & GObject.Object
    priv: any

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.Secret

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Secret extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.Secret

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.Secret

    constructor(config?: Secret.ConstructorProperties) 
    constructor() 
    static new(): Secret

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): Secret

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: Secret.ConstructorProperties): void
}

module StoragePermissions {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface StoragePermissions {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StoragePermissions

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePermissions

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.StoragePermissions

    /**
     * Gets the numeric group ID associated with `perms`.
     * @returns numeric group ID
     */
    getGroup(): number
    /**
     * Gets the MAC label string associated with `perms`.
     * @returns MAC label string.
     */
    getLabel(): string | null
    /**
     * Gets the octal permission set associated with `perms`.
     * @returns permission set
     */
    getMode(): number
    /**
     * Gets the numeric user ID associated with `perms`.
     * @returns numeric user ID.
     */
    getOwner(): number
    setGroup(group: number): void
    setLabel(label: string | null): void
    setMode(mode: number): void
    setOwner(owner: number): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.StoragePermissions

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StoragePermissions extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StoragePermissions

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.StoragePermissions

    constructor(config?: StoragePermissions.ConstructorProperties) 
    constructor() 
    static new(): StoragePermissions

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): StoragePermissions

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: StoragePermissions.ConstructorProperties): void
}

module StoragePool {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface StoragePool {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StoragePool

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePool

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.StoragePool

    /**
     * Gets the total storage allocation for the pool.
     * @returns total storage allocation in bytes.
     */
    getAllocation(): number
    /**
     * Gets the free space available for allocating new volumes in the pool.
     * @returns free space available in bytes.
     */
    getAvailable(): number
    /**
     * Gets the total storage capacity for the pool.
     * @returns total storage capacity in bytes.
     */
    getCapacity(): number
    /**
     * Gets the name of the pool.
     * @returns name of @pool.
     */
    getName(): string | null
    /**
     * Gets the type of the pool.
     * @returns #Gname of @pool.
     */
    getPoolType(): StoragePoolType
    /**
     * Gets the source for `pool`
     * @returns a new #GVirConfigStoragePoolSource instance.
     */
    getSource(): StoragePoolSource
    /**
     * Gets the target for `pool`
     * @returns a new #GVirConfigStoragePoolTarget instance.
     */
    getTarget(): StoragePoolTarget
    /**
     * Gets the unique identifier for `pool`.
     * @returns unique identifier for @pool.
     */
    getUuid(): string | null
    setAllocation(allocation: number): void
    setAvailable(available: number): void
    setCapacity(capacity: number): void
    setName(name: string | null): void
    setPoolType(type: StoragePoolType): void
    setSource(source: StoragePoolSource | null): void
    setTarget(target: StoragePoolTarget | null): void
    setUuid(uuid: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.StoragePool

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StoragePool extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StoragePool

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.StoragePool

    constructor(config?: StoragePool.ConstructorProperties) 
    constructor() 
    static new(): StoragePool

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): StoragePool

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: StoragePool.ConstructorProperties): void
}

module StoragePoolSource {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface StoragePoolSource {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolSource

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolSource

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolSource

    /**
     * For pools backed by a SCSI adapter, returns the SCSI adapter name
     * @returns the SCSI adapter name.
     */
    getAdapter(): string | null
    /**
     * For pools backed by a physical device, returns the path to the block
     * device node
     * @returns fully qualified path to the block device node.
     */
    getDevicePath(): string | null
    /**
     * For pools backed by a directory, returns the path to the backing directory
     * @returns path to the directory backing directory.
     */
    getDirectory(): string | null
    /**
     * Provides information about the format of the pool. This format is
     * backend-specific but is typically used to indicate filesystem type, or
     * network filesystem type, or partition table type, or LVM metadata type.
     * @returns the storage pool format.
     */
    getFormat(): string | null
    /**
     * For pools backed by storage from remote server, returns the hostname
     * of the remote server.
     * @returns hostname or IP address of the remote server.
     */
    getHost(): string | null
    /**
     * For pools backed by storage from a named element (for example, LV
     * groups), returns the name of the element
     * @returns name of the element used by @source
     */
    getName(): string | null
    /**
     * Gets the product name of the storage device.
     * @returns product name of the storage device.
     */
    getProduct(): string | null
    /**
     * Gets the vendor name of the storage device.
     * @returns vendor name of the storage device.
     */
    getVendor(): string | null
    setAdapter(adapter: string | null): void
    setDevicePath(devicePath: string | null): void
    setDirectory(directory: string | null): void
    setFormat(format: string | null): void
    setHost(host: string | null): void
    setName(name: string | null): void
    setProduct(product: string | null): void
    setVendor(vendor: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolSource

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StoragePoolSource extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolSource

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolSource

    constructor(config?: StoragePoolSource.ConstructorProperties) 
    constructor() 
    static new(): StoragePoolSource

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): StoragePoolSource

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: StoragePoolSource.ConstructorProperties): void
}

module StoragePoolTarget {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface StoragePoolTarget {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolTarget

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolTarget

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolTarget

    /**
     * Provides the location at which the storage pool associated with `target`
     * will be mapped into the local filesystem namespace.
     * @returns local filesystem path the storage pool is mapped at.
     */
    getPath(): string | null
    /**
     * Gets the permissions associated with `target`
     * @returns a new #GVirConfigStoragePoolPermissions instance.
     */
    getPermissions(): StoragePermissions
    setPath(path: string | null): void
    setPermissions(perms: StoragePermissions): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolTarget

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StoragePoolTarget extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolTarget

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolTarget

    constructor(config?: StoragePoolTarget.ConstructorProperties) 
    constructor() 
    static new(): StoragePoolTarget

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): StoragePoolTarget

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: StoragePoolTarget.ConstructorProperties): void
}

module StorageVol {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface StorageVol {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StorageVol

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.StorageVol

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.StorageVol

    setAllocation(allocation: number): void
    setBackingStore(backingStore: StorageVolBackingStore | null): void
    setCapacity(capacity: number): void
    setName(name: string | null): void
    setTarget(target: StorageVolTarget | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.StorageVol

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StorageVol extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StorageVol

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.StorageVol

    constructor(config?: StorageVol.ConstructorProperties) 
    constructor() 
    static new(): StorageVol

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): StorageVol

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: StorageVol.ConstructorProperties): void
}

module StorageVolBackingStore {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface StorageVolBackingStore {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolBackingStore

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolBackingStore

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolBackingStore

    setFormat(format: string | null): void
    setPath(path: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolBackingStore

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StorageVolBackingStore extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolBackingStore

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolBackingStore

    constructor(config?: StorageVolBackingStore.ConstructorProperties) 
    constructor() 
    static new(): StorageVolBackingStore

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): StorageVolBackingStore

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: StorageVolBackingStore.ConstructorProperties): void
}

module StorageVolTarget {

    // Constructor properties interface

    interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

interface StorageVolTarget {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolTarget

    __gtype__: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolTarget

    parent: Object & GObject.Object
    priv: any

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolTarget

    setCompat(compat: string | null): void
    setFeatures(features: number): void
    setFormat(format: string | null): void
    setPermissions(perms: StoragePermissions | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolTarget

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::node", callback: (...args: any[]) => void): number
    on(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::schema", callback: (...args: any[]) => void): number
    on(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::schema", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::schema", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class StorageVolTarget extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolTarget

    static name: string

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolTarget

    constructor(config?: StorageVolTarget.ConstructorProperties) 
    constructor() 
    static new(): StorageVolTarget

    // Overloads of new

    static new(type: GObject.GType, rootName: string | null, schema: string | null): Object
    static newFromXml(xml: string | null): StorageVolTarget

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string | null, schema: string | null, xml: string | null): Object
    _init(config?: StorageVolTarget.ConstructorProperties): void
}

interface CapabilitiesClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesClass

    parentClass: ObjectClass
    padding: any[]
}

abstract class CapabilitiesClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesClass

    static name: string
}

interface CapabilitiesCpuClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuClass

    parentClass: ObjectClass
    getFeatures: (cpu: CapabilitiesCpu) => CapabilitiesCpuFeature[]
    padding: any[]
}

abstract class CapabilitiesCpuClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuClass

    static name: string
}

interface CapabilitiesCpuFeatureClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuFeatureClass

    parentClass: ObjectClass
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

    parentClass: ObjectClass
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

    parentClass: ObjectClass
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

    parentClass: ObjectClass
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

    parentClass: ObjectClass
    padding: any[]
}

abstract class CapabilitiesGuestClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestClass

    static name: string
}

interface CapabilitiesGuestDomainClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestDomainClass

    parentClass: ObjectClass
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

    parentClass: ObjectClass
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

    parentClass: ObjectClass
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

    parentClass: ObjectClass
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

    parentClass: ObjectClass
    padding: any[]
}

abstract class DomainAddressClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressClass

    static name: string
}

interface DomainAddressPciClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressPciClass

    parentClass: DomainAddressClass
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

    parentClass: DomainAddressClass
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

    parentClass: ObjectClass
    padding: any[]
}

abstract class DomainCapabilitiesClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesClass

    static name: string
}

interface DomainCapabilitiesOsClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesOsClass

    parentClass: ObjectClass
    getFirmwares: (os: DomainCapabilitiesOs) => DomainOsFirmware[]
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

    parentClass: DomainChardevClass
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

    parentClass: DomainDeviceClass
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

    parentClass: ObjectClass
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

    parentClass: DomainChardevSourceClass
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

    parentClass: DomainChardevSourceClass
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

    parentClass: DomainChardevSourceClass
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

    parentClass: DomainChardevSourceClass
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

    parentClass: ObjectClass
    padding: any[]
}

abstract class DomainClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainClass

    static name: string
}

interface DomainClockClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainClockClass

    parentClass: ObjectClass
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

    parentClass: DomainChardevClass
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

    parentClass: DomainDeviceClass
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

    parentClass: DomainControllerClass
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

    parentClass: CapabilitiesCpuClass
    padding: any[]
}

abstract class DomainCpuClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuClass

    static name: string
}

interface DomainCpuFeatureClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuFeatureClass

    parentClass: CapabilitiesCpuClass
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

    parentClass: CapabilitiesCpuModelClass
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

    parentClass: ObjectClass
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

    parentClass: DomainDeviceClass
    padding: any[]
}

abstract class DomainDiskClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskClass

    static name: string
}

interface DomainDiskDriverClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskDriverClass

    parentClass: ObjectClass
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

    parentClass: DomainDeviceClass
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

    parentClass: DomainDeviceClass
    padding: any[]
}

abstract class DomainGraphicsClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsClass

    static name: string
}

interface DomainGraphicsDesktopClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsDesktopClass

    parentClass: DomainGraphicsClass
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

    parentClass: DomainGraphicsClass
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

    parentClass: DomainGraphicsClass
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

    parentClass: DomainGraphicsClass
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

    parentClass: DomainGraphicsClass
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

    parentClass: DomainDeviceClass
    padding: any[]
}

abstract class DomainHostdevClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevClass

    static name: string
}

interface DomainHostdevPciClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevPciClass

    parentClass: DomainHostdevClass
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

    parentClass: DomainDeviceClass
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

    parentClass: DomainInterfaceClass
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

    parentClass: DomainDeviceClass
    padding: any[]
}

abstract class DomainInterfaceClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceClass

    static name: string
}

interface DomainInterfaceFilterrefClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefClass

    parentClass: ObjectClass
    padding: any[]
}

abstract class DomainInterfaceFilterrefClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefClass

    static name: string
}

interface DomainInterfaceFilterrefParameterClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefParameterClass

    parentClass: ObjectClass
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

    parentClass: DomainInterfaceClass
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

    parentClass: DomainInterfaceClass
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

    parentClass: DomainDeviceClass
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

    parentClass: ObjectClass
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

    parentClass: DomainChardevClass
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

    parentClass: ObjectClass
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

    parentClass: DomainChardevClass
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

    parentClass: ObjectClass
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

    parentClass: DomainChardevClass
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

    parentClass: DomainDeviceClass
    padding: any[]
}

abstract class DomainSmartcardClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardClass

    static name: string
}

interface DomainSmartcardHostCertificatesClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHostCertificatesClass

    parentClass: DomainSmartcardClass
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

    parentClass: DomainSmartcardClass
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

    parentClass: DomainSmartcardClass
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

    parentClass: ObjectClass
    padding: any[]
}

abstract class DomainSnapshotClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotClass

    static name: string
}

interface DomainSnapshotDiskClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotDiskClass

    parentClass: ObjectClass
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

    parentClass: DomainDeviceClass
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

    parentClass: ObjectClass
    padding: any[]
}

abstract class DomainTimerClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerClass

    static name: string
}

interface DomainTimerHpetClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerHpetClass

    parentClass: DomainTimerClass
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

    parentClass: DomainTimerClass
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

    parentClass: DomainTimerClass
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

    parentClass: DomainDeviceClass
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

    parentClass: ObjectClass
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

    parentClass: ObjectClass
    padding: any[]
}

abstract class NetworkClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.NetworkClass

    static name: string
}

interface NetworkFilterClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.NetworkFilterClass

    parentClass: ObjectClass
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

    parentClass: ObjectClass
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

    parentClass: GObject.ObjectClass
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

    parentClass: ObjectClass
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

    parentClass: ObjectClass
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

    parentClass: ObjectClass
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

    parentClass: ObjectClass
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

    parentClass: ObjectClass
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

    parentClass: ObjectClass
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

    parentClass: ObjectClass
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

    parentClass: ObjectClass
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

}

export default LibvirtGConfig;
// END