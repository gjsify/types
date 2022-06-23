// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * LibvirtGConfig-1.0
 */

import type libxml2 from './libxml2-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

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
interface Capabilities_ConstructProps extends Object_ConstructProps {
}

interface Capabilities {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.Capabilities

    parent: Object
    priv: CapabilitiesPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.Capabilities

    /**
     * Gets the list of guest capabilities.
     */
    getGuests(): CapabilitiesGuest[]
    /**
     * Gets the host capabilities.
     */
    getHost(): CapabilitiesHost

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.Capabilities

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
}

class Capabilities extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.Capabilities

    static name: string
    static $gtype: GObject.GType<Capabilities>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.Capabilities

    constructor(config?: Capabilities_ConstructProps) 
    constructor() 
    static new(): Capabilities

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): Capabilities

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: Capabilities_ConstructProps): void
}

interface CapabilitiesCpu_ConstructProps extends Object_ConstructProps {
}

interface CapabilitiesCpu {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpu

    parent: Object
    priv: CapabilitiesCpuPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpu

    /**
     * Adds a new feature to CPU.
     * @param feature 
     */
    addFeature(feature: CapabilitiesCpuFeature): void
    getArch(): string
    /**
     * Gets the features of this CPU.
     */
    getFeatures(): CapabilitiesCpuFeature[]
    /**
     * Gets the model of the cpu.
     */
    getModel(): CapabilitiesCpuModel
    /**
     * Gets the topology of the cpu.
     */
    getTopology(): CapabilitiesCpuTopology
    /**
     * Sets the topology of the cpu.
     * @param topology 
     */
    setTopology(topology: CapabilitiesCpuTopology): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpu

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
}

class CapabilitiesCpu extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpu

    static name: string
    static $gtype: GObject.GType<CapabilitiesCpu>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpu

    constructor(config?: CapabilitiesCpu_ConstructProps) 
    _init(config?: CapabilitiesCpu_ConstructProps): void
}

interface CapabilitiesCpuFeature_ConstructProps extends Object_ConstructProps {
}

interface CapabilitiesCpuFeature {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuFeature

    parent: Object
    priv: CapabilitiesCpuFeaturePrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuFeature

    getName(): string
    setName(name: string): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuFeature

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
}

class CapabilitiesCpuFeature extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuFeature

    static name: string
    static $gtype: GObject.GType<CapabilitiesCpuFeature>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuFeature

    constructor(config?: CapabilitiesCpuFeature_ConstructProps) 
    _init(config?: CapabilitiesCpuFeature_ConstructProps): void
}

interface CapabilitiesCpuModel_ConstructProps extends Object_ConstructProps {
}

interface CapabilitiesCpuModel {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuModel

    parent: Object
    priv: CapabilitiesCpuModelPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuModel

    getName(): string
    setName(name: string): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuModel

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
}

class CapabilitiesCpuModel extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuModel

    static name: string
    static $gtype: GObject.GType<CapabilitiesCpuModel>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuModel

    constructor(config?: CapabilitiesCpuModel_ConstructProps) 
    constructor() 
    static new(): CapabilitiesCpuModel

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): CapabilitiesCpuModel

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: CapabilitiesCpuModel_ConstructProps): void
}

interface CapabilitiesCpuTopology_ConstructProps extends Object_ConstructProps {
}

interface CapabilitiesCpuTopology {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuTopology

    parent: Object
    priv: CapabilitiesCpuTopologyPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuTopology

    getCores(): number
    getSockets(): number
    getThreads(): number
    setCores(cores: number): void
    setSockets(sockets: number): void
    setThreads(threads: number): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuTopology

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
}

class CapabilitiesCpuTopology extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuTopology

    static name: string
    static $gtype: GObject.GType<CapabilitiesCpuTopology>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuTopology

    constructor(config?: CapabilitiesCpuTopology_ConstructProps) 
    constructor() 
    static new(): CapabilitiesCpuTopology

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): CapabilitiesCpuTopology

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: CapabilitiesCpuTopology_ConstructProps): void
}

interface CapabilitiesGuest_ConstructProps extends Object_ConstructProps {
}

interface CapabilitiesGuest {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuest

    parent: Object
    priv: CapabilitiesGuestPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuest

    /**
     * Gets the CPU architecture capabilities of the guest.
     */
    getArch(): CapabilitiesGuestArch
    /**
     * Gets the CPU features for this guest.
     */
    getFeatures(): CapabilitiesGuestFeature[]
    getOsType(): DomainOsType

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuest

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
}

class CapabilitiesGuest extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuest

    static name: string
    static $gtype: GObject.GType<CapabilitiesGuest>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuest

    constructor(config?: CapabilitiesGuest_ConstructProps) 
    _init(config?: CapabilitiesGuest_ConstructProps): void
}

interface CapabilitiesGuestArch_ConstructProps extends Object_ConstructProps {
}

interface CapabilitiesGuestArch {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestArch

    parent: Object
    priv: CapabilitiesGuestArchPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestArch

    /**
     * Gets the possible domains for this architecture.
     */
    getDomains(): CapabilitiesGuestDomain[]
    getEmulator(): string
    getName(): string

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestArch

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
}

class CapabilitiesGuestArch extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestArch

    static name: string
    static $gtype: GObject.GType<CapabilitiesGuestArch>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestArch

    constructor(config?: CapabilitiesGuestArch_ConstructProps) 
    _init(config?: CapabilitiesGuestArch_ConstructProps): void
}

interface CapabilitiesGuestDomain_ConstructProps extends Object_ConstructProps {
}

interface CapabilitiesGuestDomain {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestDomain

    parent: Object
    priv: CapabilitiesGuestDomainPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestDomain

    getEmulator(): string
    getVirtType(): DomainVirtType

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestDomain

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
}

class CapabilitiesGuestDomain extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestDomain

    static name: string
    static $gtype: GObject.GType<CapabilitiesGuestDomain>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestDomain

    constructor(config?: CapabilitiesGuestDomain_ConstructProps) 
    _init(config?: CapabilitiesGuestDomain_ConstructProps): void
}

interface CapabilitiesGuestFeature_ConstructProps extends Object_ConstructProps {
}

interface CapabilitiesGuestFeature {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestFeature

    parent: Object
    priv: CapabilitiesGuestFeaturePrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestFeature

    getName(): string

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestFeature

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
}

class CapabilitiesGuestFeature extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestFeature

    static name: string
    static $gtype: GObject.GType<CapabilitiesGuestFeature>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestFeature

    constructor(config?: CapabilitiesGuestFeature_ConstructProps) 
    _init(config?: CapabilitiesGuestFeature_ConstructProps): void
}

interface CapabilitiesHost_ConstructProps extends Object_ConstructProps {
}

interface CapabilitiesHost {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHost

    parent: Object
    priv: CapabilitiesHostPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHost

    /**
     * Gets the CPU capabilities of the host.
     */
    getCpu(): CapabilitiesCpu
    /**
     * Get the security models listed in `host` capabilities.
     */
    getSecmodels(): CapabilitiesHostSecModel[]
    getUuid(): string

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHost

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
}

class CapabilitiesHost extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHost

    static name: string
    static $gtype: GObject.GType<CapabilitiesHost>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHost

    constructor(config?: CapabilitiesHost_ConstructProps) 
    _init(config?: CapabilitiesHost_ConstructProps): void
}

interface CapabilitiesHostSecModel_ConstructProps extends Object_ConstructProps {
}

interface CapabilitiesHostSecModel {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHostSecModel

    parent: Object
    priv: CapabilitiesHostSecModelPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHostSecModel

    getDoi(): string
    getModel(): string

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHostSecModel

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
}

class CapabilitiesHostSecModel extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHostSecModel

    static name: string
    static $gtype: GObject.GType<CapabilitiesHostSecModel>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesHostSecModel

    constructor(config?: CapabilitiesHostSecModel_ConstructProps) 
    _init(config?: CapabilitiesHostSecModel_ConstructProps): void
}

interface Domain_ConstructProps extends Object_ConstructProps {

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

interface Domain {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.Domain

    currentMemory: number
    description: string
    features: string[]
    memory: number
    name: string
    title: string
    uuid: string
    vcpu: number

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.Domain

    parent: Object
    priv: DomainPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.Domain

    addDevice(device: DomainDevice): void
    /**
     * Gets the clock configuration of `domain`
     */
    getClock(): DomainClock
    /**
     * Gets the CPU configuration of `domain`
     */
    getCpu(): DomainCpu
    getCurrentMemory(): number
    getCustomXml(nsUri: string): string
    getDescription(): string
    /**
     * Gets the list of devices attached to `domain`.  The returned list should
     * be freed with g_list_free(), after its elements have been unreffed with
     * g_object_unref().
     */
    getDevices(): DomainDevice[]
    getFeatures(): string[]
    getMemory(): number
    getName(): string
    /**
     * Gets the operating system configuration of `domain`
     */
    getOs(): DomainOs
    getTitle(): string
    getUuid(): string
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
    setCustomXml(xml: string, ns: string, nsUri: string): boolean
    setCustomXmlNsChildren(xml: string, ns: string, nsUri: string): boolean
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
}

class Domain extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.Domain

    static name: string
    static $gtype: GObject.GType<Domain>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.Domain

    constructor(config?: Domain_ConstructProps) 
    constructor() 
    static new(): Domain

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): Domain

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: Domain_ConstructProps): void
}

interface DomainAddress_ConstructProps extends Object_ConstructProps {
}

interface DomainAddress {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddress

    parent: Object
    priv: DomainAddressPrivate

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddress

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
}

class DomainAddress extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddress

    static name: string
    static $gtype: GObject.GType<DomainAddress>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddress

    constructor(config?: DomainAddress_ConstructProps) 
    _init(config?: DomainAddress_ConstructProps): void
}

interface DomainAddressPci_ConstructProps extends DomainAddress_ConstructProps {
}

interface DomainAddressPci {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressPci

    parent: DomainAddress
    priv: DomainAddressPciPrivate

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
}

class DomainAddressPci extends DomainAddress {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressPci

    static name: string
    static $gtype: GObject.GType<DomainAddressPci>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressPci

    constructor(config?: DomainAddressPci_ConstructProps) 
    constructor() 
    static new(): DomainAddressPci

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainAddressPci

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainAddressPci_ConstructProps): void
}

interface DomainAddressUsb_ConstructProps extends DomainAddress_ConstructProps {
}

interface DomainAddressUsb {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressUsb

    parent: DomainAddress
    priv: DomainAddressUsbPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressUsb

    setBus(bus: number): void
    setPort(port: string): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressUsb

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
}

class DomainAddressUsb extends DomainAddress {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressUsb

    static name: string
    static $gtype: GObject.GType<DomainAddressUsb>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressUsb

    constructor(config?: DomainAddressUsb_ConstructProps) 
    constructor() 
    static new(): DomainAddressUsb

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainAddressUsb

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainAddressUsb_ConstructProps): void
}

interface DomainCapabilities_ConstructProps extends Object_ConstructProps {
}

interface DomainCapabilities {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilities

    parent: Object
    priv: DomainCapabilitiesPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilities

    /**
     * Gets the `os` associated with the `domain_caps`.
     */
    getOs(): DomainCapabilitiesOs

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilities

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
}

class DomainCapabilities extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilities

    static name: string
    static $gtype: GObject.GType<DomainCapabilities>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilities

    constructor(config?: DomainCapabilities_ConstructProps) 
    constructor() 
    static new(): DomainCapabilities

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainCapabilities

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainCapabilities_ConstructProps): void
}

interface DomainCapabilitiesOs_ConstructProps extends Object_ConstructProps {
}

interface DomainCapabilitiesOs {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesOs

    parent: Object
    priv: DomainCapabilitiesOsPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesOs

    /**
     * Gets the firmwares supported by `os`. The returned list should be freed with
     * g_list_free().
     */
    getFirmwares(): DomainOsFirmware[]

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesOs

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
}

class DomainCapabilitiesOs extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesOs

    static name: string
    static $gtype: GObject.GType<DomainCapabilitiesOs>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesOs

    constructor(config?: DomainCapabilitiesOs_ConstructProps) 
    _init(config?: DomainCapabilitiesOs_ConstructProps): void
}

interface DomainChannel_ConstructProps extends DomainChardev_ConstructProps {
}

interface DomainChannel {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChannel

    parent: DomainChardev
    priv: DomainChannelPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChannel

    getTargetName(): string
    getTargetType(): DomainChannelTargetType
    setTargetName(name: string): void
    setTargetType(type: DomainChannelTargetType): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainChannel

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
}

class DomainChannel extends DomainChardev {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChannel

    static name: string
    static $gtype: GObject.GType<DomainChannel>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainChannel

    constructor(config?: DomainChannel_ConstructProps) 
    constructor() 
    static new(): DomainChannel

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainChannel

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainChannel_ConstructProps): void
}

interface DomainChardev_ConstructProps extends DomainDevice_ConstructProps {
}

interface DomainChardev {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev

    parent: DomainDevice
    priv: DomainChardevPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev

    /**
     * Gets the source for the chardev
     */
    getSource(): DomainChardevSource
    setSource(source: DomainChardevSource): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev

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
}

class DomainChardev extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev

    static name: string
    static $gtype: GObject.GType<DomainChardev>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardev

    constructor(config?: DomainChardev_ConstructProps) 
    _init(config?: DomainChardev_ConstructProps): void
}

interface DomainChardevSource_ConstructProps extends Object_ConstructProps {
}

interface DomainChardevSource {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSource

    parent: Object
    priv: DomainChardevSourcePrivate

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSource

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
}

class DomainChardevSource extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSource

    static name: string
    static $gtype: GObject.GType<DomainChardevSource>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSource

    constructor(config?: DomainChardevSource_ConstructProps) 
    _init(config?: DomainChardevSource_ConstructProps): void
}

interface DomainChardevSourcePty_ConstructProps extends DomainChardevSource_ConstructProps {
}

interface DomainChardevSourcePty {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourcePty

    parent: DomainChardevSource
    priv: DomainChardevSourcePtyPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourcePty

    getPath(): string
    setPath(path: string): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourcePty

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
}

class DomainChardevSourcePty extends DomainChardevSource {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourcePty

    static name: string
    static $gtype: GObject.GType<DomainChardevSourcePty>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourcePty

    constructor(config?: DomainChardevSourcePty_ConstructProps) 
    constructor() 
    static new(): DomainChardevSourcePty

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainChardevSourcePty

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainChardevSourcePty_ConstructProps): void
}

interface DomainChardevSourceSpicePort_ConstructProps extends DomainChardevSource_ConstructProps {
}

interface DomainChardevSourceSpicePort {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpicePort

    parent: DomainChardevSource
    priv: DomainChardevSourceSpicePortPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpicePort

    getChannel(): string
    setChannel(channel: string): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpicePort

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
}

class DomainChardevSourceSpicePort extends DomainChardevSource {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpicePort

    static name: string
    static $gtype: GObject.GType<DomainChardevSourceSpicePort>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpicePort

    constructor(config?: DomainChardevSourceSpicePort_ConstructProps) 
    constructor() 
    static new(): DomainChardevSourceSpicePort

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainChardevSourceSpicePort

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainChardevSourceSpicePort_ConstructProps): void
}

interface DomainChardevSourceSpiceVmc_ConstructProps extends DomainChardevSource_ConstructProps {
}

interface DomainChardevSourceSpiceVmc {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpiceVmc

    parent: DomainChardevSource
    priv: DomainChardevSourceSpiceVmcPrivate

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpiceVmc

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
}

class DomainChardevSourceSpiceVmc extends DomainChardevSource {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpiceVmc

    static name: string
    static $gtype: GObject.GType<DomainChardevSourceSpiceVmc>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceSpiceVmc

    constructor(config?: DomainChardevSourceSpiceVmc_ConstructProps) 
    constructor() 
    static new(): DomainChardevSourceSpiceVmc

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainChardevSourceSpiceVmc

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainChardevSourceSpiceVmc_ConstructProps): void
}

interface DomainChardevSourceUnix_ConstructProps extends DomainChardevSource_ConstructProps {
}

interface DomainChardevSourceUnix {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceUnix

    parent: DomainChardevSource
    priv: DomainChardevSourceUnixPrivate

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceUnix

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
}

class DomainChardevSourceUnix extends DomainChardevSource {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceUnix

    static name: string
    static $gtype: GObject.GType<DomainChardevSourceUnix>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainChardevSourceUnix

    constructor(config?: DomainChardevSourceUnix_ConstructProps) 
    constructor() 
    static new(): DomainChardevSourceUnix

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainChardevSourceUnix

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainChardevSourceUnix_ConstructProps): void
}

interface DomainClock_ConstructProps extends Object_ConstructProps {
}

interface DomainClock {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainClock

    parent: Object
    priv: DomainClockPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainClock

    addTimer(timer: DomainTimer): void
    getOffset(): DomainClockOffset
    getTimezone(): string
    getVariableOffset(): number
    setOffset(offset: DomainClockOffset): void
    setTimezone(tz: string): void
    setVariableOffset(seconds: number): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainClock

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
}

class DomainClock extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainClock

    static name: string
    static $gtype: GObject.GType<DomainClock>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainClock

    constructor(config?: DomainClock_ConstructProps) 
    constructor() 
    static new(): DomainClock

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainClock

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainClock_ConstructProps): void
}

interface DomainConsole_ConstructProps extends DomainChardev_ConstructProps {
}

interface DomainConsole {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainConsole

    parent: DomainChardev
    priv: DomainConsolePrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainConsole

    setTargetType(type: DomainConsoleTargetType): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainConsole

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
}

class DomainConsole extends DomainChardev {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainConsole

    static name: string
    static $gtype: GObject.GType<DomainConsole>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainConsole

    constructor(config?: DomainConsole_ConstructProps) 
    constructor() 
    static new(): DomainConsole

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainConsole

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainConsole_ConstructProps): void
}

interface DomainController_ConstructProps extends DomainDevice_ConstructProps {
}

interface DomainController {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainController

    parent: DomainDevice
    priv: DomainControllerPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainController

    getIndex(): number
    getPorts(): number
    setAddress(address: DomainAddress | null): void
    setIndex(index: number): void
    setPorts(ports: number): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainController

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
}

class DomainController extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainController

    static name: string
    static $gtype: GObject.GType<DomainController>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainController

    constructor(config?: DomainController_ConstructProps) 
    _init(config?: DomainController_ConstructProps): void
}

interface DomainControllerUsb_ConstructProps extends DomainController_ConstructProps {
}

interface DomainControllerUsb {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainControllerUsb

    parent: DomainController
    priv: DomainControllerUsbPrivate

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

    constructor(config?: DomainControllerUsb_ConstructProps) 
    /**
     * Creates a new #GVirConfigDomainControllerUsb with a reference count of 1.
     * gvir_config_domain_controller_set_index() must be called before
     * this controller is usable.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GVirConfigDomainControllerUsb with a reference count of 1.
     * gvir_config_domain_controller_set_index() must be called before
     * this controller is usable.
     * @constructor 
     */
    static new(): DomainControllerUsb

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    /**
     * Creates a new #GVirConfigDomainControllerUsb with a reference count of 1.
     * The controller object will be created using the XML description stored
     * in `xml`. This is a fragment of libvirt domain XML whose root node is
     * &lt;controller&gt;.
     * @constructor 
     * @param xml xml data to create the controller from
     */
    static newFromXml(xml: string): DomainControllerUsb

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainControllerUsb_ConstructProps): void
}

interface DomainCpu_ConstructProps extends CapabilitiesCpu_ConstructProps {
}

interface DomainCpu {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpu

    parent: CapabilitiesCpu
    priv: DomainCpuPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpu

    getMatchPolicy(): DomainCpuMatchPolicy
    getMode(): DomainCpuMode
    setMatchPolicy(policy: DomainCpuMatchPolicy): void
    setMode(mode: DomainCpuMode): void
    setModel(model: DomainCpuModel): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpu

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
}

class DomainCpu extends CapabilitiesCpu {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpu

    static name: string
    static $gtype: GObject.GType<DomainCpu>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpu

    constructor(config?: DomainCpu_ConstructProps) 
    constructor() 
    static new(): DomainCpu

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainCpu

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainCpu_ConstructProps): void
}

interface DomainCpuFeature_ConstructProps extends CapabilitiesCpuFeature_ConstructProps {
}

interface DomainCpuFeature {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuFeature

    parent: CapabilitiesCpu
    priv: DomainCpuFeaturePrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuFeature

    getPolicy(): DomainCpuFeaturePolicy
    setPolicy(policy: DomainCpuFeaturePolicy): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuFeature

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
}

class DomainCpuFeature extends CapabilitiesCpuFeature {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuFeature

    static name: string
    static $gtype: GObject.GType<DomainCpuFeature>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuFeature

    constructor(config?: DomainCpuFeature_ConstructProps) 
    constructor() 
    static new(): DomainCpuFeature

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainCpuFeature

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainCpuFeature_ConstructProps): void
}

interface DomainCpuModel_ConstructProps extends CapabilitiesCpuModel_ConstructProps {
}

interface DomainCpuModel {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuModel

    parent: CapabilitiesCpuModel
    priv: DomainCpuModelPrivate

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuModel

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
}

class DomainCpuModel extends CapabilitiesCpuModel {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuModel

    static name: string
    static $gtype: GObject.GType<DomainCpuModel>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuModel

    constructor(config?: DomainCpuModel_ConstructProps) 
    constructor() 
    static new(): DomainCpuModel

    // Overloads of new

    static new(): CapabilitiesCpuModel
    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainCpuModel

    // Overloads of newFromXml

    static newFromXml(xml: string): CapabilitiesCpuModel
    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainCpuModel_ConstructProps): void
}

interface DomainDevice_ConstructProps extends Object_ConstructProps {
}

interface DomainDevice {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice

    parent: Object
    priv: DomainDevicePrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice

    getAlias(): string

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice

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
}

class DomainDevice extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice

    static name: string
    static $gtype: GObject.GType<DomainDevice>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainDevice

    constructor(config?: DomainDevice_ConstructProps) 
    _init(config?: DomainDevice_ConstructProps): void
}

interface DomainDisk_ConstructProps extends DomainDevice_ConstructProps {
}

interface DomainDisk {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDisk

    parent: DomainDevice
    priv: DomainDiskPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDisk

    getDiskType(): DomainDiskType
    /**
     * Gets the driver configuration for `disk`.
     */
    getDriver(): DomainDiskDriver
    getDriverCache(): DomainDiskCacheType
    getDriverFormat(): DomainDiskFormat
    getDriverName(): string
    getDriverType(): string
    getGuestDeviceType(): DomainDiskGuestDeviceType
    getSnapshotType(): DomainDiskSnapshotType
    getSource(): string
    getStartupPolicy(): DomainDiskStartupPolicy
    getTargetBus(): DomainDiskBus
    getTargetDev(): string
    /**
     * Uses `driver` as the driver configuration for `disk`.
     * @param driver a #GVirConfigDomainDiskDriver
     */
    setDriver(driver: DomainDiskDriver | null): void
    setDriverCache(cacheType: DomainDiskCacheType): void
    setDriverFormat(format: DomainDiskFormat): void
    setDriverName(driverName: string): void
    setDriverType(driverType: string): void
    setGuestDeviceType(type: DomainDiskGuestDeviceType): void
    setReadonly(readonly: boolean): void
    setSnapshotType(type: DomainDiskSnapshotType): void
    setSource(source: string): void
    setStartupPolicy(policy: DomainDiskStartupPolicy): void
    setTargetBus(bus: DomainDiskBus): void
    setTargetDev(dev: string): void
    setType(type: DomainDiskType): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainDisk

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
}

class DomainDisk extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainDisk

    static name: string
    static $gtype: GObject.GType<DomainDisk>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainDisk

    constructor(config?: DomainDisk_ConstructProps) 
    constructor() 
    static new(): DomainDisk

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainDisk

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainDisk_ConstructProps): void
}

interface DomainDiskDriver_ConstructProps extends Object_ConstructProps {
}

interface DomainDiskDriver {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskDriver

    parent: Object
    priv: DomainDiskDriverPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskDriver

    getCache(): DomainDiskCacheType
    getCopyOnRead(): boolean
    getDiscard(): DomainDiskDriverDiscard
    getErrorPolicy(): DomainDiskDriverErrorPolicy
    getFormat(): DomainDiskFormat
    getIoPolicy(): DomainDiskDriverIoPolicy
    getName(): string
    setCache(cacheType: DomainDiskCacheType): void
    setCopyOnRead(copyOnRead: boolean): void
    setDiscard(discard: DomainDiskDriverDiscard): void
    setErrorPolicy(policy: DomainDiskDriverErrorPolicy): void
    setFormat(format: DomainDiskFormat): void
    setIoPolicy(policy: DomainDiskDriverIoPolicy): void
    setName(name: string): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskDriver

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
}

class DomainDiskDriver extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskDriver

    static name: string
    static $gtype: GObject.GType<DomainDiskDriver>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskDriver

    constructor(config?: DomainDiskDriver_ConstructProps) 
    constructor() 
    static new(): DomainDiskDriver

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainDiskDriver

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainDiskDriver_ConstructProps): void
}

interface DomainFilesys_ConstructProps extends DomainDevice_ConstructProps {
}

interface DomainFilesys {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainFilesys

    parent: DomainDevice
    priv: DomainFilesysPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainFilesys

    setAccessType(type: DomainFilesysAccessType): void
    setDriverFormat(format: DomainDiskFormat): void
    setDriverType(type: DomainFilesysDriverType): void
    setRamUsage(bytes: number): void
    setReadonly(readonly: boolean): void
    setSource(source: string): void
    setTarget(target: string): void
    setType(type: DomainFilesysType): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainFilesys

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
}

class DomainFilesys extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainFilesys

    static name: string
    static $gtype: GObject.GType<DomainFilesys>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainFilesys

    constructor(config?: DomainFilesys_ConstructProps) 
    constructor() 
    static new(): DomainFilesys

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainFilesys

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainFilesys_ConstructProps): void
}

interface DomainGraphics_ConstructProps extends DomainDevice_ConstructProps {
}

interface DomainGraphics {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphics

    parent: DomainDevice
    priv: DomainGraphicsPrivate

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphics

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
}

class DomainGraphics extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphics

    static name: string
    static $gtype: GObject.GType<DomainGraphics>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphics

    constructor(config?: DomainGraphics_ConstructProps) 
    _init(config?: DomainGraphics_ConstructProps): void
}

interface DomainGraphicsDesktop_ConstructProps extends DomainGraphics_ConstructProps {
}

interface DomainGraphicsDesktop {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsDesktop

    parent: DomainGraphics
    priv: DomainGraphicsDesktopPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsDesktop

    getDisplay(): string
    getFullscreen(): boolean
    setDisplay(disp: string): void
    setFullscreen(fullscreen: boolean): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsDesktop

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
}

class DomainGraphicsDesktop extends DomainGraphics {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsDesktop

    static name: string
    static $gtype: GObject.GType<DomainGraphicsDesktop>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsDesktop

    constructor(config?: DomainGraphicsDesktop_ConstructProps) 
    constructor() 
    static new(): DomainGraphicsDesktop

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainGraphicsDesktop

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainGraphicsDesktop_ConstructProps): void
}

interface DomainGraphicsRdp_ConstructProps extends DomainGraphics_ConstructProps {
}

interface DomainGraphicsRdp {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsRdp

    parent: DomainGraphics
    priv: DomainGraphicsRdpPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsRdp

    getMultiUser(): boolean
    getPort(): number
    getReplaceUser(): boolean
    setAutoport(autoport: boolean): void
    setMultiUser(multiUser: boolean): void
    setPort(port: number): void
    setReplaceUser(replaceUser: boolean): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsRdp

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
}

class DomainGraphicsRdp extends DomainGraphics {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsRdp

    static name: string
    static $gtype: GObject.GType<DomainGraphicsRdp>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsRdp

    constructor(config?: DomainGraphicsRdp_ConstructProps) 
    constructor() 
    static new(): DomainGraphicsRdp

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainGraphicsRdp

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainGraphicsRdp_ConstructProps): void
}

interface DomainGraphicsSdl_ConstructProps extends DomainGraphics_ConstructProps {
}

interface DomainGraphicsSdl {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSdl

    parent: DomainGraphics
    priv: DomainGraphicsSdlPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSdl

    setDisplay(disp: string): void
    setFullscreen(fullscreen: boolean): void
    setXauthority(path: string): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSdl

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
}

class DomainGraphicsSdl extends DomainGraphics {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSdl

    static name: string
    static $gtype: GObject.GType<DomainGraphicsSdl>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSdl

    constructor(config?: DomainGraphicsSdl_ConstructProps) 
    constructor() 
    static new(): DomainGraphicsSdl

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainGraphicsSdl

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainGraphicsSdl_ConstructProps): void
}

interface DomainGraphicsSpice_ConstructProps extends DomainGraphics_ConstructProps {
}

interface DomainGraphicsSpice {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSpice

    parent: DomainGraphics
    priv: DomainGraphicsSpicePrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSpice

    getImageCompression(): DomainGraphicsSpiceImageCompression
    getPort(): number
    setAutoport(autoport: boolean): void
    setGl(gl: boolean): void
    setImageCompression(compression: DomainGraphicsSpiceImageCompression): void
    setPassword(password: string): void
    setPort(port: number): void
    setTlsPort(port: number): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSpice

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
}

class DomainGraphicsSpice extends DomainGraphics {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSpice

    static name: string
    static $gtype: GObject.GType<DomainGraphicsSpice>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsSpice

    constructor(config?: DomainGraphicsSpice_ConstructProps) 
    constructor() 
    static new(): DomainGraphicsSpice

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainGraphicsSpice

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainGraphicsSpice_ConstructProps): void
}

interface DomainGraphicsVnc_ConstructProps extends DomainGraphics_ConstructProps {
}

interface DomainGraphicsVnc {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsVnc

    parent: DomainGraphics
    priv: DomainGraphicsVncPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsVnc

    getPort(): number
    getSocket(): string
    setAutoport(autoport: boolean): void
    setPassword(password: string): void
    setPort(port: number): void
    setSocket(socket: string): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsVnc

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
}

class DomainGraphicsVnc extends DomainGraphics {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsVnc

    static name: string
    static $gtype: GObject.GType<DomainGraphicsVnc>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsVnc

    constructor(config?: DomainGraphicsVnc_ConstructProps) 
    constructor() 
    static new(): DomainGraphicsVnc

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainGraphicsVnc

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainGraphicsVnc_ConstructProps): void
}

interface DomainHostdev_ConstructProps extends DomainDevice_ConstructProps {
}

interface DomainHostdev {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdev

    parent: DomainDevice
    priv: DomainHostdevPrivate

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
}

class DomainHostdev extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdev

    static name: string
    static $gtype: GObject.GType<DomainHostdev>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdev

    constructor(config?: DomainHostdev_ConstructProps) 
    _init(config?: DomainHostdev_ConstructProps): void
}

interface DomainHostdevPci_ConstructProps extends DomainHostdev_ConstructProps {
}

interface DomainHostdevPci {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevPci

    parent: DomainHostdev
    priv: DomainHostdevPciPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevPci

    /**
     * Gets the address associated with `hostdev`.
     */
    getAddress(): DomainAddressPci
    getManaged(): boolean
    getRomBar(): boolean
    getRomFile(): string
    setAddress(address: DomainAddressPci): void
    setManaged(managed: boolean): void
    setRomBar(bar: boolean): void
    setRomFile(file: string): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevPci

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
}

class DomainHostdevPci extends DomainHostdev {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevPci

    static name: string
    static $gtype: GObject.GType<DomainHostdevPci>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevPci

    constructor(config?: DomainHostdevPci_ConstructProps) 
    /**
     * Creates a new #GVirConfigDomainHostdevPci.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GVirConfigDomainHostdevPci.
     * @constructor 
     */
    static new(): DomainHostdevPci

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    /**
     * Creates a new #GVirConfigDomainHostdevPci. The host device object will be
     * created using the XML description stored in `xml`. This is a fragment of
     * libvirt domain XML whose root node is &lt;hostdev&gt;.
     * @constructor 
     * @param xml xml data to create the host device from
     */
    static newFromXml(xml: string): DomainHostdevPci

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainHostdevPci_ConstructProps): void
}

interface DomainInput_ConstructProps extends DomainDevice_ConstructProps {
}

interface DomainInput {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInput

    parent: DomainDevice
    priv: DomainInputPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInput

    getBus(): DomainInputBus
    getDeviceType(): DomainInputDeviceType
    setBus(bus: DomainInputBus): void
    setDeviceType(type: DomainInputDeviceType): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainInput

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
}

class DomainInput extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInput

    static name: string
    static $gtype: GObject.GType<DomainInput>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainInput

    constructor(config?: DomainInput_ConstructProps) 
    constructor() 
    static new(): DomainInput

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainInput

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainInput_ConstructProps): void
}

interface DomainInterface_ConstructProps extends DomainDevice_ConstructProps {
}

interface DomainInterface {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterface

    parent: DomainDevice
    priv: DomainInterfacePrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterface

    /**
     * Gets the filterref associated with the `interface`
     */
    getFilterref(): DomainInterfaceFilterref
    getIfname(): string
    getLinkState(): DomainInterfaceLinkState
    getMac(): string
    getModel(): string
    setFilterref(filterref: DomainInterfaceFilterref | null): void
    setIfname(ifname: string): void
    setLinkState(state: DomainInterfaceLinkState): void
    setMac(macAddress: string): void
    setModel(model: string): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterface

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
}

class DomainInterface extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterface

    static name: string
    static $gtype: GObject.GType<DomainInterface>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterface

    constructor(config?: DomainInterface_ConstructProps) 
    _init(config?: DomainInterface_ConstructProps): void
}

interface DomainInterfaceBridge_ConstructProps extends DomainInterface_ConstructProps {
}

interface DomainInterfaceBridge {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceBridge

    parent: DomainInterface
    priv: DomainInterfaceBridgePrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceBridge

    setSource(brname: string): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceBridge

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
}

class DomainInterfaceBridge extends DomainInterface {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceBridge

    static name: string
    static $gtype: GObject.GType<DomainInterfaceBridge>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceBridge

    constructor(config?: DomainInterfaceBridge_ConstructProps) 
    constructor() 
    static new(): DomainInterfaceBridge

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainInterfaceBridge

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainInterfaceBridge_ConstructProps): void
}

interface DomainInterfaceFilterref_ConstructProps extends Object_ConstructProps {
}

interface DomainInterfaceFilterref {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterref

    parent: Object
    priv: DomainInterfaceFilterrefPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterref

    addParameter(parameter: DomainInterfaceFilterrefParameter): void
    getName(): string
    /**
     * Gets the list of parameters attached to `filterref`. The returned list should be
     * freed with g_list_free(), after its elements have been unreffed with
     * g_object_unref().
     */
    getParameters(): DomainInterfaceFilterrefParameter[]
    setName(filter: string): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterref

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
}

class DomainInterfaceFilterref extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterref

    static name: string
    static $gtype: GObject.GType<DomainInterfaceFilterref>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterref

    constructor(config?: DomainInterfaceFilterref_ConstructProps) 
    constructor() 
    static new(): DomainInterfaceFilterref

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainInterfaceFilterref

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainInterfaceFilterref_ConstructProps): void
}

interface DomainInterfaceFilterrefParameter_ConstructProps extends Object_ConstructProps {
}

interface DomainInterfaceFilterrefParameter {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefParameter

    parent: Object
    priv: DomainInterfaceFilterrefParameterPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefParameter

    getName(): string
    getValue(): string
    setName(name: string): void
    setValue(value: string): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefParameter

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
}

class DomainInterfaceFilterrefParameter extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefParameter

    static name: string
    static $gtype: GObject.GType<DomainInterfaceFilterrefParameter>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefParameter

    constructor(config?: DomainInterfaceFilterrefParameter_ConstructProps) 
    constructor() 
    static new(): DomainInterfaceFilterrefParameter

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainInterfaceFilterrefParameter

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainInterfaceFilterrefParameter_ConstructProps): void
}

interface DomainInterfaceNetwork_ConstructProps extends DomainInterface_ConstructProps {
}

interface DomainInterfaceNetwork {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceNetwork

    parent: DomainInterface
    priv: DomainInterfaceNetworkPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceNetwork

    setSource(source: string): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceNetwork

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
}

class DomainInterfaceNetwork extends DomainInterface {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceNetwork

    static name: string
    static $gtype: GObject.GType<DomainInterfaceNetwork>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceNetwork

    constructor(config?: DomainInterfaceNetwork_ConstructProps) 
    constructor() 
    static new(): DomainInterfaceNetwork

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainInterfaceNetwork

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainInterfaceNetwork_ConstructProps): void
}

interface DomainInterfaceUser_ConstructProps extends DomainInterface_ConstructProps {
}

interface DomainInterfaceUser {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceUser

    parent: DomainInterface
    priv: DomainInterfaceUserPrivate

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceUser

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
}

class DomainInterfaceUser extends DomainInterface {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceUser

    static name: string
    static $gtype: GObject.GType<DomainInterfaceUser>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceUser

    constructor(config?: DomainInterfaceUser_ConstructProps) 
    constructor() 
    static new(): DomainInterfaceUser

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainInterfaceUser

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainInterfaceUser_ConstructProps): void
}

interface DomainMemballoon_ConstructProps extends DomainDevice_ConstructProps {
}

interface DomainMemballoon {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainMemballoon

    parent: DomainDevice
    priv: DomainMemballoonPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainMemballoon

    setModel(model: DomainMemballoonModel): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainMemballoon

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
}

class DomainMemballoon extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainMemballoon

    static name: string
    static $gtype: GObject.GType<DomainMemballoon>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainMemballoon

    constructor(config?: DomainMemballoon_ConstructProps) 
    constructor() 
    static new(): DomainMemballoon

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainMemballoon

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainMemballoon_ConstructProps): void
}

interface DomainOs_ConstructProps extends Object_ConstructProps {
}

interface DomainOs {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainOs

    parent: Object
    priv: DomainOsPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainOs

    biosEnableSerial(enable: boolean): void
    enableBootMenu(enable: boolean): void
    getArch(): string
    /**
     * Gets the list of devices attached to `os`. The returned list should be
     * freed with g_list_free().
     */
    getBootDevices(): DomainOsBootDevice[]
    getFirmware(): DomainOsFirmware
    getMachine(): string
    getOsType(): DomainOsType
    setArch(arch: string): void
    setBootDevices(bootDevices: DomainOsBootDevice[]): void
    setCmdline(cmdline: string | null): void
    setFirmware(firmware: DomainOsFirmware): void
    setInit(init: string | null): void
    setKernel(kernel: string | null): void
    setLoader(loader: string | null): void
    setMachine(machine: string): void
    setOsType(type: DomainOsType): void
    setRamdisk(ramdisk: string | null): void
    setSmbiosMode(mode: DomainOsSmBiosMode): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainOs

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
}

class DomainOs extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainOs

    static name: string
    static $gtype: GObject.GType<DomainOs>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainOs

    constructor(config?: DomainOs_ConstructProps) 
    constructor() 
    static new(): DomainOs

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainOs

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainOs_ConstructProps): void
}

interface DomainParallel_ConstructProps extends DomainChardev_ConstructProps {
}

interface DomainParallel {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainParallel

    parent: DomainChardev
    priv: DomainParallelPrivate

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainParallel

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
}

class DomainParallel extends DomainChardev {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainParallel

    static name: string
    static $gtype: GObject.GType<DomainParallel>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainParallel

    constructor(config?: DomainParallel_ConstructProps) 
    constructor() 
    static new(): DomainParallel

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainParallel

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainParallel_ConstructProps): void
}

interface DomainPowerManagement_ConstructProps extends Object_ConstructProps {
}

interface DomainPowerManagement {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainPowerManagement

    parent: Object
    priv: DomainPowerManagementPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainPowerManagement

    setDiskSuspendEnabled(enabled: boolean): void
    setMemSuspendEnabled(enabled: boolean): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainPowerManagement

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
}

class DomainPowerManagement extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainPowerManagement

    static name: string
    static $gtype: GObject.GType<DomainPowerManagement>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainPowerManagement

    constructor(config?: DomainPowerManagement_ConstructProps) 
    constructor() 
    static new(): DomainPowerManagement

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainPowerManagement

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainPowerManagement_ConstructProps): void
}

interface DomainRedirdev_ConstructProps extends DomainChardev_ConstructProps {
}

interface DomainRedirdev {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainRedirdev

    parent: DomainChardev
    priv: DomainRedirdevPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainRedirdev

    setAddress(address: DomainAddress | null): void
    setBus(bus: DomainRedirdevBus): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainRedirdev

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
}

class DomainRedirdev extends DomainChardev {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainRedirdev

    static name: string
    static $gtype: GObject.GType<DomainRedirdev>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainRedirdev

    constructor(config?: DomainRedirdev_ConstructProps) 
    constructor() 
    static new(): DomainRedirdev

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainRedirdev

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainRedirdev_ConstructProps): void
}

interface DomainSeclabel_ConstructProps extends Object_ConstructProps {
}

interface DomainSeclabel {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSeclabel

    parent: Object
    priv: DomainSeclabelPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSeclabel

    setBaselabel(label: string | null): void
    setLabel(label: string | null): void
    setModel(model: string): void
    setType(type: DomainSeclabelType): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainSeclabel

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
}

class DomainSeclabel extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSeclabel

    static name: string
    static $gtype: GObject.GType<DomainSeclabel>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainSeclabel

    constructor(config?: DomainSeclabel_ConstructProps) 
    constructor() 
    static new(): DomainSeclabel

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainSeclabel

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainSeclabel_ConstructProps): void
}

interface DomainSerial_ConstructProps extends DomainChardev_ConstructProps {
}

interface DomainSerial {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSerial

    parent: DomainChardev
    priv: DomainSerialPrivate

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainSerial

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
}

class DomainSerial extends DomainChardev {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSerial

    static name: string
    static $gtype: GObject.GType<DomainSerial>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainSerial

    constructor(config?: DomainSerial_ConstructProps) 
    constructor() 
    static new(): DomainSerial

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainSerial

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainSerial_ConstructProps): void
}

interface DomainSmartcard_ConstructProps extends DomainDevice_ConstructProps {
}

interface DomainSmartcard {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcard

    parent: DomainDevice
    priv: DomainSmartcardPrivate

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcard

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
}

class DomainSmartcard extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcard

    static name: string
    static $gtype: GObject.GType<DomainSmartcard>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcard

    constructor(config?: DomainSmartcard_ConstructProps) 
    _init(config?: DomainSmartcard_ConstructProps): void
    static setAddress(redirdev: DomainRedirdev, address: DomainAddress | null): void
}

interface DomainSmartcardHost_ConstructProps extends DomainSmartcard_ConstructProps {
}

interface DomainSmartcardHost {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHost

    parent: DomainSmartcard
    priv: DomainSmartcardHostPrivate

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHost

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
}

class DomainSmartcardHost extends DomainSmartcard {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHost

    static name: string
    static $gtype: GObject.GType<DomainSmartcardHost>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHost

    constructor(config?: DomainSmartcardHost_ConstructProps) 
    constructor() 
    static new(): DomainSmartcardHost

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainSmartcardHost

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainSmartcardHost_ConstructProps): void
}

interface DomainSmartcardHostCertificates_ConstructProps extends DomainSmartcard_ConstructProps {
}

interface DomainSmartcardHostCertificates {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHostCertificates

    parent: DomainSmartcard
    priv: DomainSmartcardHostCertificatesPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHostCertificates

    setCertificates(cert1: string | null, cert2: string | null, cert3: string | null): void
    setDatabase(path: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHostCertificates

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
}

class DomainSmartcardHostCertificates extends DomainSmartcard {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHostCertificates

    static name: string
    static $gtype: GObject.GType<DomainSmartcardHostCertificates>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHostCertificates

    constructor(config?: DomainSmartcardHostCertificates_ConstructProps) 
    constructor() 
    static new(): DomainSmartcardHostCertificates

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainSmartcardHostCertificates

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainSmartcardHostCertificates_ConstructProps): void
}

interface DomainSmartcardPassthrough_ConstructProps extends DomainSmartcard_ConstructProps {
}

interface DomainSmartcardPassthrough {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardPassthrough

    parent: DomainSmartcard
    priv: DomainSmartcardPassthroughPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardPassthrough

    setSource(source: DomainChardevSource): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardPassthrough

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
}

class DomainSmartcardPassthrough extends DomainSmartcard {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardPassthrough

    static name: string
    static $gtype: GObject.GType<DomainSmartcardPassthrough>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardPassthrough

    constructor(config?: DomainSmartcardPassthrough_ConstructProps) 
    constructor() 
    static new(): DomainSmartcardPassthrough

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainSmartcardPassthrough

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainSmartcardPassthrough_ConstructProps): void
}

interface DomainSnapshot_ConstructProps extends Object_ConstructProps {
}

interface DomainSnapshot {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshot

    parent: Object
    priv: DomainSnapshotPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshot

    addDisk(disk: DomainSnapshotDisk): void
    getCreationTime(): number
    getDescription(): string
    /**
     * Gets the list of disks attached to `snapshot`.  The returned list should
     * be freed with g_list_free(), after its elements have been unreffed with
     * g_object_unref().
     */
    getDisks(): DomainSnapshotDisk[]
    /**
     * Gets the configuration of the domain `snapshot` is a snapshot of.
     */
    getDomain(): Domain
    getMemoryFile(): string
    getMemoryState(): DomainSnapshotMemoryState
    getName(): string
    getParent(): string
    getState(): DomainSnapshotDomainState
    setDescription(description: string): void
    setDisks(disks: DomainSnapshotDisk[]): void
    setMemoryFile(filename: string): void
    setMemoryState(state: DomainSnapshotMemoryState): void
    setName(name: string): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshot

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
}

class DomainSnapshot extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshot

    static name: string
    static $gtype: GObject.GType<DomainSnapshot>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshot

    constructor(config?: DomainSnapshot_ConstructProps) 
    constructor() 
    static new(): DomainSnapshot

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainSnapshot

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainSnapshot_ConstructProps): void
}

interface DomainSnapshotDisk_ConstructProps extends Object_ConstructProps {
}

interface DomainSnapshotDisk {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotDisk

    parent: Object
    priv: DomainSnapshotDiskPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotDisk

    getDriverFormat(): DomainDiskFormat
    getName(): string
    getSnapshotType(): DomainDiskSnapshotType
    getSourceFile(): string
    setDriverFormat(format: DomainDiskFormat): void
    setName(name: string): void
    setSnapshotType(type: DomainDiskSnapshotType): void
    setSourceFile(filename: string): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotDisk

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
}

class DomainSnapshotDisk extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotDisk

    static name: string
    static $gtype: GObject.GType<DomainSnapshotDisk>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotDisk

    constructor(config?: DomainSnapshotDisk_ConstructProps) 
    constructor() 
    static new(): DomainSnapshotDisk

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainSnapshotDisk

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainSnapshotDisk_ConstructProps): void
}

interface DomainSound_ConstructProps extends DomainDevice_ConstructProps {
}

interface DomainSound {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSound

    parent: DomainDevice
    priv: DomainSoundPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainSound

    setModel(model: DomainSoundModel): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainSound

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
}

class DomainSound extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSound

    static name: string
    static $gtype: GObject.GType<DomainSound>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainSound

    constructor(config?: DomainSound_ConstructProps) 
    constructor() 
    static new(): DomainSound

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainSound

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainSound_ConstructProps): void
}

interface DomainTimer_ConstructProps extends Object_ConstructProps {
}

interface DomainTimer {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimer

    parent: Object
    priv: DomainTimerPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimer

    getPresent(): boolean
    getTickPolicy(): DomainTimerTickPolicy
    setPresent(present: boolean): void
    setTickPolicy(policy: DomainTimerTickPolicy): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimer

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
}

class DomainTimer extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimer

    static name: string
    static $gtype: GObject.GType<DomainTimer>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimer

    constructor(config?: DomainTimer_ConstructProps) 
    _init(config?: DomainTimer_ConstructProps): void
}

interface DomainTimerHpet_ConstructProps extends DomainTimer_ConstructProps {
}

interface DomainTimerHpet {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerHpet

    parent: DomainTimer
    priv: DomainTimerHpetPrivate

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerHpet

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
}

class DomainTimerHpet extends DomainTimer {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerHpet

    static name: string
    static $gtype: GObject.GType<DomainTimerHpet>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerHpet

    constructor(config?: DomainTimerHpet_ConstructProps) 
    constructor() 
    static new(): DomainTimerHpet

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainTimerHpet

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainTimerHpet_ConstructProps): void
}

interface DomainTimerPit_ConstructProps extends DomainTimer_ConstructProps {
}

interface DomainTimerPit {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerPit

    parent: DomainTimer
    priv: DomainTimerPitPrivate

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerPit

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
}

class DomainTimerPit extends DomainTimer {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerPit

    static name: string
    static $gtype: GObject.GType<DomainTimerPit>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerPit

    constructor(config?: DomainTimerPit_ConstructProps) 
    constructor() 
    static new(): DomainTimerPit

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainTimerPit

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainTimerPit_ConstructProps): void
}

interface DomainTimerRtc_ConstructProps extends DomainTimer_ConstructProps {
}

interface DomainTimerRtc {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerRtc

    parent: DomainTimer
    priv: DomainTimerRtcPrivate

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerRtc

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
}

class DomainTimerRtc extends DomainTimer {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerRtc

    static name: string
    static $gtype: GObject.GType<DomainTimerRtc>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerRtc

    constructor(config?: DomainTimerRtc_ConstructProps) 
    constructor() 
    static new(): DomainTimerRtc

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainTimerRtc

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainTimerRtc_ConstructProps): void
}

interface DomainVideo_ConstructProps extends DomainDevice_ConstructProps {
}

interface DomainVideo {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainVideo

    parent: DomainDevice
    priv: DomainVideoPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.DomainVideo

    getModel(): DomainVideoModel
    setAccel3d(accel3d: boolean): void
    setHeads(headCount: number): void
    setModel(model: DomainVideoModel): void
    setRam(kbytes: number): void
    setVgamem(kbytes: number): void
    setVram(kbytes: number): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.DomainVideo

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
}

class DomainVideo extends DomainDevice {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainVideo

    static name: string
    static $gtype: GObject.GType<DomainVideo>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.DomainVideo

    constructor(config?: DomainVideo_ConstructProps) 
    constructor() 
    static new(): DomainVideo

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): DomainVideo

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: DomainVideo_ConstructProps): void
}

interface Interface_ConstructProps extends Object_ConstructProps {
}

interface Interface {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.Interface

    parent: Object
    priv: InterfacePrivate

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.Interface

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
}

class Interface extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.Interface

    static name: string
    static $gtype: GObject.GType<Interface>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.Interface

    constructor(config?: Interface_ConstructProps) 
    constructor() 
    static new(): Interface

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): Interface

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: Interface_ConstructProps): void
}

interface Network_ConstructProps extends Object_ConstructProps {
}

interface Network {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.Network

    parent: Object
    priv: NetworkPrivate

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.Network

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
}

class Network extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.Network

    static name: string
    static $gtype: GObject.GType<Network>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.Network

    constructor(config?: Network_ConstructProps) 
    constructor() 
    static new(): Network

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): Network

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: Network_ConstructProps): void
}

interface NetworkFilter_ConstructProps extends Object_ConstructProps {
}

interface NetworkFilter {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.NetworkFilter

    parent: Object
    priv: NetworkFilterPrivate

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.NetworkFilter

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
}

class NetworkFilter extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.NetworkFilter

    static name: string
    static $gtype: GObject.GType<NetworkFilter>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.NetworkFilter

    constructor(config?: NetworkFilter_ConstructProps) 
    constructor() 
    static new(): NetworkFilter

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): NetworkFilter

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: NetworkFilter_ConstructProps): void
}

interface NodeDevice_ConstructProps extends Object_ConstructProps {
}

interface NodeDevice {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.NodeDevice

    parent: Object
    priv: NodeDevicePrivate

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.NodeDevice

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
}

class NodeDevice extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.NodeDevice

    static name: string
    static $gtype: GObject.GType<NodeDevice>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.NodeDevice

    constructor(config?: NodeDevice_ConstructProps) 
    constructor() 
    static new(): NodeDevice

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): NodeDevice

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: NodeDevice_ConstructProps): void
}

interface Object_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of LibvirtGConfig-1.0.LibvirtGConfig.Object

    node?: object | null
    schema?: string | null
}

interface Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.Object

    readonly node: object
    readonly schema: string

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.Object

    parent: GObject.Object
    priv: ObjectPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.Object

    getSchema(): string
    toXml(): string
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Object extends GObject.Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.Object

    static name: string
    static $gtype: GObject.GType<Object>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.Object

    constructor(config?: Object_ConstructProps) 
    constructor(type: GObject.GType, rootName: string, schema: string) 
    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: Object_ConstructProps): void
    static errorQuark(): GLib.Quark
}

interface Secret_ConstructProps extends Object_ConstructProps {
}

interface Secret {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.Secret

    parent: Object
    priv: SecretPrivate

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.Secret

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
}

class Secret extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.Secret

    static name: string
    static $gtype: GObject.GType<Secret>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.Secret

    constructor(config?: Secret_ConstructProps) 
    constructor() 
    static new(): Secret

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): Secret

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: Secret_ConstructProps): void
}

interface StoragePermissions_ConstructProps extends Object_ConstructProps {
}

interface StoragePermissions {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePermissions

    parent: Object
    priv: StoragePermissionsPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.StoragePermissions

    /**
     * Gets the numeric group ID associated with `perms`.
     */
    getGroup(): number
    /**
     * Gets the MAC label string associated with `perms`.
     */
    getLabel(): string
    /**
     * Gets the octal permission set associated with `perms`.
     */
    getMode(): number
    /**
     * Gets the numeric user ID associated with `perms`.
     */
    getOwner(): number
    setGroup(group: number): void
    setLabel(label: string | null): void
    setMode(mode: number): void
    setOwner(owner: number): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.StoragePermissions

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
}

class StoragePermissions extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StoragePermissions

    static name: string
    static $gtype: GObject.GType<StoragePermissions>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.StoragePermissions

    constructor(config?: StoragePermissions_ConstructProps) 
    constructor() 
    static new(): StoragePermissions

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): StoragePermissions

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: StoragePermissions_ConstructProps): void
}

interface StoragePool_ConstructProps extends Object_ConstructProps {
}

interface StoragePool {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePool

    parent: Object
    priv: StoragePoolPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.StoragePool

    /**
     * Gets the total storage allocation for the pool.
     */
    getAllocation(): number
    /**
     * Gets the free space available for allocating new volumes in the pool.
     */
    getAvailable(): number
    /**
     * Gets the total storage capacity for the pool.
     */
    getCapacity(): number
    /**
     * Gets the name of the pool.
     */
    getName(): string
    /**
     * Gets the type of the pool.
     */
    getPoolType(): StoragePoolType
    /**
     * Gets the source for `pool`
     */
    getSource(): StoragePoolSource
    /**
     * Gets the target for `pool`
     */
    getTarget(): StoragePoolTarget
    /**
     * Gets the unique identifier for `pool`.
     */
    getUuid(): string
    setAllocation(allocation: number): void
    setAvailable(available: number): void
    setCapacity(capacity: number): void
    setName(name: string | null): void
    setPoolType(type: StoragePoolType): void
    setSource(source: StoragePoolSource | null): void
    setTarget(target: StoragePoolTarget | null): void
    setUuid(uuid: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.StoragePool

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
}

class StoragePool extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StoragePool

    static name: string
    static $gtype: GObject.GType<StoragePool>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.StoragePool

    constructor(config?: StoragePool_ConstructProps) 
    constructor() 
    static new(): StoragePool

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): StoragePool

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: StoragePool_ConstructProps): void
}

interface StoragePoolSource_ConstructProps extends Object_ConstructProps {
}

interface StoragePoolSource {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolSource

    parent: Object
    priv: StoragePoolSourcePrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolSource

    /**
     * For pools backed by a SCSI adapter, returns the SCSI adapter name
     */
    getAdapter(): string
    /**
     * For pools backed by a physical device, returns the path to the block
     * device node
     */
    getDevicePath(): string
    /**
     * For pools backed by a directory, returns the path to the backing directory
     */
    getDirectory(): string
    /**
     * Provides information about the format of the pool. This format is
     * backend-specific but is typically used to indicate filesystem type, or
     * network filesystem type, or partition table type, or LVM metadata type.
     */
    getFormat(): string
    /**
     * For pools backed by storage from remote server, returns the hostname
     * of the remote server.
     */
    getHost(): string
    /**
     * For pools backed by storage from a named element (for example, LV
     * groups), returns the name of the element
     */
    getName(): string
    /**
     * Gets the product name of the storage device.
     */
    getProduct(): string
    /**
     * Gets the vendor name of the storage device.
     */
    getVendor(): string
    setAdapter(adapter: string): void
    setDevicePath(devicePath: string): void
    setDirectory(directory: string): void
    setFormat(format: string): void
    setHost(host: string): void
    setName(name: string | null): void
    setProduct(product: string): void
    setVendor(vendor: string): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolSource

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
}

class StoragePoolSource extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolSource

    static name: string
    static $gtype: GObject.GType<StoragePoolSource>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolSource

    constructor(config?: StoragePoolSource_ConstructProps) 
    constructor() 
    static new(): StoragePoolSource

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): StoragePoolSource

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: StoragePoolSource_ConstructProps): void
}

interface StoragePoolTarget_ConstructProps extends Object_ConstructProps {
}

interface StoragePoolTarget {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolTarget

    parent: Object
    priv: StoragePoolTargetPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolTarget

    /**
     * Provides the location at which the storage pool associated with `target`
     * will be mapped into the local filesystem namespace.
     */
    getPath(): string
    /**
     * Gets the permissions associated with `target`
     */
    getPermissions(): StoragePermissions
    setPath(path: string | null): void
    setPermissions(perms: StoragePermissions): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolTarget

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
}

class StoragePoolTarget extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolTarget

    static name: string
    static $gtype: GObject.GType<StoragePoolTarget>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.StoragePoolTarget

    constructor(config?: StoragePoolTarget_ConstructProps) 
    constructor() 
    static new(): StoragePoolTarget

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): StoragePoolTarget

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: StoragePoolTarget_ConstructProps): void
}

interface StorageVol_ConstructProps extends Object_ConstructProps {
}

interface StorageVol {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.StorageVol

    parent: Object
    priv: StorageVolPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.StorageVol

    setAllocation(allocation: number): void
    setBackingStore(backingStore: StorageVolBackingStore | null): void
    setCapacity(capacity: number): void
    setName(name: string | null): void
    setTarget(target: StorageVolTarget | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.StorageVol

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
}

class StorageVol extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StorageVol

    static name: string
    static $gtype: GObject.GType<StorageVol>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.StorageVol

    constructor(config?: StorageVol_ConstructProps) 
    constructor() 
    static new(): StorageVol

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): StorageVol

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: StorageVol_ConstructProps): void
}

interface StorageVolBackingStore_ConstructProps extends Object_ConstructProps {
}

interface StorageVolBackingStore {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolBackingStore

    parent: Object
    priv: StorageVolBackingStorePrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolBackingStore

    setFormat(format: string): void
    setPath(path: string | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolBackingStore

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
}

class StorageVolBackingStore extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolBackingStore

    static name: string
    static $gtype: GObject.GType<StorageVolBackingStore>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolBackingStore

    constructor(config?: StorageVolBackingStore_ConstructProps) 
    constructor() 
    static new(): StorageVolBackingStore

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): StorageVolBackingStore

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: StorageVolBackingStore_ConstructProps): void
}

interface StorageVolTarget_ConstructProps extends Object_ConstructProps {
}

interface StorageVolTarget {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolTarget

    parent: Object
    priv: StorageVolTargetPrivate

    // Owm methods of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolTarget

    setCompat(compat: string | null): void
    setFeatures(features: number): void
    setFormat(format: string): void
    setPermissions(perms: StoragePermissions | null): void

    // Class property signals of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolTarget

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
}

class StorageVolTarget extends Object {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolTarget

    static name: string
    static $gtype: GObject.GType<StorageVolTarget>

    // Constructors of LibvirtGConfig-1.0.LibvirtGConfig.StorageVolTarget

    constructor(config?: StorageVolTarget_ConstructProps) 
    constructor() 
    static new(): StorageVolTarget

    // Overloads of new

    static new(type: GObject.GType, rootName: string, schema: string): Object
    static newFromXml(xml: string): StorageVolTarget

    // Overloads of newFromXml

    static newFromXml(type: GObject.GType, rootName: string, schema: string, xml: string): Object
    _init(config?: StorageVolTarget_ConstructProps): void
}

interface CapabilitiesClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesClass

    parentClass: ObjectClass
    padding: object[]
}

abstract class CapabilitiesClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesClass

    static name: string
}

interface CapabilitiesCpuClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuClass

    parentClass: ObjectClass
    getFeatures: (cpu: CapabilitiesCpu) => CapabilitiesCpuFeature[]
    padding: object[]
}

abstract class CapabilitiesCpuClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuClass

    static name: string
}

interface CapabilitiesCpuFeatureClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesCpuFeatureClass

    parentClass: ObjectClass
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
}

abstract class CapabilitiesGuestClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestClass

    static name: string
}

interface CapabilitiesGuestDomainClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.CapabilitiesGuestDomainClass

    parentClass: ObjectClass
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
}

abstract class DomainAddressClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressClass

    static name: string
}

interface DomainAddressPciClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainAddressPciClass

    parentClass: DomainAddressClass
    padding: object[]
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
    padding: object[]
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
    padding: object[]
}

abstract class DomainCapabilitiesClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesClass

    static name: string
}

interface DomainCapabilitiesOsClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCapabilitiesOsClass

    parentClass: ObjectClass
    getFirmwares: (os: DomainCapabilitiesOs) => DomainOsFirmware[]
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
}

abstract class DomainClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainClass

    static name: string
}

interface DomainClockClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainClockClass

    parentClass: ObjectClass
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
}

abstract class DomainCpuClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuClass

    static name: string
}

interface DomainCpuFeatureClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainCpuFeatureClass

    parentClass: CapabilitiesCpuClass
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
}

abstract class DomainDiskClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskClass

    static name: string
}

interface DomainDiskDriverClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainDiskDriverClass

    parentClass: ObjectClass
    padding: object[]
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
    padding: object[]
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
    padding: object[]
}

abstract class DomainGraphicsClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsClass

    static name: string
}

interface DomainGraphicsDesktopClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainGraphicsDesktopClass

    parentClass: DomainGraphicsClass
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
}

abstract class DomainHostdevClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevClass

    static name: string
}

interface DomainHostdevPciClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainHostdevPciClass

    parentClass: DomainHostdevClass
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
}

abstract class DomainInterfaceClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceClass

    static name: string
}

interface DomainInterfaceFilterrefClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefClass

    parentClass: ObjectClass
    padding: object[]
}

abstract class DomainInterfaceFilterrefClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefClass

    static name: string
}

interface DomainInterfaceFilterrefParameterClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainInterfaceFilterrefParameterClass

    parentClass: ObjectClass
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
}

abstract class DomainSmartcardClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardClass

    static name: string
}

interface DomainSmartcardHostCertificatesClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSmartcardHostCertificatesClass

    parentClass: DomainSmartcardClass
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
}

abstract class DomainSnapshotClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotClass

    static name: string
}

interface DomainSnapshotDiskClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainSnapshotDiskClass

    parentClass: ObjectClass
    padding: object[]
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
    padding: object[]
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
    padding: object[]
}

abstract class DomainTimerClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerClass

    static name: string
}

interface DomainTimerHpetClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.DomainTimerHpetClass

    parentClass: DomainTimerClass
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
}

abstract class NetworkClass {

    // Own properties of LibvirtGConfig-1.0.LibvirtGConfig.NetworkClass

    static name: string
}

interface NetworkFilterClass {

    // Own fields of LibvirtGConfig-1.0.LibvirtGConfig.NetworkFilterClass

    parentClass: ObjectClass
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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
    padding: object[]
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