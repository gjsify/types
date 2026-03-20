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
import type libxml2 from '@girs/libxml2-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace LibvirtGConfig {
    /**
     * LibvirtGConfig-1.0
     */

    /**
     * @gir-type Enum
     */
    export namespace DomainAudioBackend {
        export const $gtype: GObject.GType<DomainAudioBackend>;
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    export namespace DomainChannelTargetType {
        export const $gtype: GObject.GType<DomainChannelTargetType>;
    }

    /**
     * @gir-type Enum
     */
    enum DomainChannelTargetType {
        GUESTFWD,
        VIRTIO,
        SPICEPORT,
    }

    /**
     * @gir-type Enum
     */
    export namespace DomainClockOffset {
        export const $gtype: GObject.GType<DomainClockOffset>;
    }

    /**
     * @gir-type Enum
     */
    enum DomainClockOffset {
        UTC,
        LOCALTIME,
        TIMEZONE,
        VARIABLE,
    }

    /**
     * @gir-type Enum
     */
    export namespace DomainConsoleTargetType {
        export const $gtype: GObject.GType<DomainConsoleTargetType>;
    }

    /**
     * @gir-type Enum
     */
    enum DomainConsoleTargetType {
        XEN,
        SERIAL,
        UML,
        VIRTIO,
        LXC,
        OPENVZ,
    }

    /**
     * @gir-type Enum
     */
    export namespace DomainControllerUsbModel {
        export const $gtype: GObject.GType<DomainControllerUsbModel>;
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    export namespace DomainCpuFeaturePolicy {
        export const $gtype: GObject.GType<DomainCpuFeaturePolicy>;
    }

    /**
     * @gir-type Enum
     */
    enum DomainCpuFeaturePolicy {
        FORCE,
        REQUIRE,
        OPTIONAL,
        DISABLE,
        FORBID,
    }

    /**
     * @gir-type Enum
     */
    export namespace DomainCpuMatchPolicy {
        export const $gtype: GObject.GType<DomainCpuMatchPolicy>;
    }

    /**
     * @gir-type Enum
     */
    enum DomainCpuMatchPolicy {
        MINIMUM,
        EXACT,
        STRICT,
    }

    /**
     * @gir-type Enum
     */
    export namespace DomainCpuMode {
        export const $gtype: GObject.GType<DomainCpuMode>;
    }

    /**
     * @gir-type Enum
     */
    enum DomainCpuMode {
        CUSTOM,
        HOST_MODEL,
        HOST_PASSTHROUGH,
    }

    /**
     * @gir-type Enum
     */
    export namespace DomainDiskBus {
        export const $gtype: GObject.GType<DomainDiskBus>;
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    export namespace DomainDiskCacheType {
        export const $gtype: GObject.GType<DomainDiskCacheType>;
    }

    /**
     * @gir-type Enum
     */
    enum DomainDiskCacheType {
        DEFAULT,
        NONE,
        WRITETHROUGH,
        WRITEBACK,
        DIRECTSYNC,
        UNSAFE,
    }

    /**
     * @gir-type Enum
     */
    export namespace DomainDiskDriverDiscard {
        export const $gtype: GObject.GType<DomainDiskDriverDiscard>;
    }

    /**
     * @gir-type Enum
     */
    enum DomainDiskDriverDiscard {
        UNMAP,
        IGNORE,
    }

    /**
     * @gir-type Enum
     */
    export namespace DomainDiskDriverErrorPolicy {
        export const $gtype: GObject.GType<DomainDiskDriverErrorPolicy>;
    }

    /**
     * @gir-type Enum
     */
    enum DomainDiskDriverErrorPolicy {
        STOP,
        REPORT,
        IGNORE,
        ENOSPACE,
    }

    /**
     * @gir-type Enum
     */
    export namespace DomainDiskDriverIoPolicy {
        export const $gtype: GObject.GType<DomainDiskDriverIoPolicy>;
    }

    /**
     * @gir-type Enum
     */
    enum DomainDiskDriverIoPolicy {
        THREADS,
        NATIVE,
    }

    /**
     * @gir-type Enum
     */
    export namespace DomainDiskFormat {
        export const $gtype: GObject.GType<DomainDiskFormat>;
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    export namespace DomainDiskGuestDeviceType {
        export const $gtype: GObject.GType<DomainDiskGuestDeviceType>;
    }

    /**
     * @gir-type Enum
     */
    enum DomainDiskGuestDeviceType {
        DISK,
        FLOPPY,
        CDROM,
    }

    /**
     * @gir-type Enum
     */
    export namespace DomainDiskSnapshotType {
        export const $gtype: GObject.GType<DomainDiskSnapshotType>;
    }

    /**
     * @gir-type Enum
     */
    enum DomainDiskSnapshotType {
        NO,
        INTERNAL,
        EXTERNAL,
    }

    /**
     * @gir-type Enum
     */
    export namespace DomainDiskStartupPolicy {
        export const $gtype: GObject.GType<DomainDiskStartupPolicy>;
    }

    /**
     * @gir-type Enum
     */
    enum DomainDiskStartupPolicy {
        MANDATORY,
        REQUISITE,
        OPTIONAL,
    }

    /**
     * @gir-type Enum
     */
    export namespace DomainDiskType {
        export const $gtype: GObject.GType<DomainDiskType>;
    }

    /**
     * @gir-type Enum
     */
    enum DomainDiskType {
        FILE,
        BLOCK,
        DIR,
        NETWORK,
    }

    /**
     * @gir-type Enum
     */
    export namespace DomainFilesysAccessType {
        export const $gtype: GObject.GType<DomainFilesysAccessType>;
    }

    /**
     * @gir-type Enum
     */
    enum DomainFilesysAccessType {
        PASSTHROUGH,
        MAPPED,
        SQUASH,
    }

    /**
     * @gir-type Enum
     */
    export namespace DomainFilesysDriverType {
        export const $gtype: GObject.GType<DomainFilesysDriverType>;
    }

    /**
     * @gir-type Enum
     */
    enum DomainFilesysDriverType {
        DEFAULT,
        PATH,
        HANDLE,
        LOOP,
        NBD,
        PLOOP,
    }

    /**
     * @gir-type Enum
     */
    export namespace DomainFilesysType {
        export const $gtype: GObject.GType<DomainFilesysType>;
    }

    /**
     * @gir-type Enum
     */
    enum DomainFilesysType {
        MOUNT,
        BLOCK,
        FILE,
        TEMPLATE,
        RAM,
        BIND,
    }

    /**
     * @gir-type Enum
     */
    export namespace DomainGraphicsSpiceImageCompression {
        export const $gtype: GObject.GType<DomainGraphicsSpiceImageCompression>;
    }

    /**
     * @gir-type Enum
     */
    enum DomainGraphicsSpiceImageCompression {
        AUTO_GLZ,
        AUTO_LZ,
        QUIC,
        GLZ,
        LZ,
        OFF,
    }

    /**
     * @gir-type Enum
     */
    export namespace DomainInputBus {
        export const $gtype: GObject.GType<DomainInputBus>;
    }

    /**
     * @gir-type Enum
     */
    enum DomainInputBus {
        PS2,
        USB,
        XEN,
    }

    /**
     * @gir-type Enum
     */
    export namespace DomainInputDeviceType {
        export const $gtype: GObject.GType<DomainInputDeviceType>;
    }

    /**
     * @gir-type Enum
     */
    enum DomainInputDeviceType {
        MOUSE,
        TABLET,
        KEYBOARD,
    }

    /**
     * @gir-type Enum
     */
    export namespace DomainInterfaceLinkState {
        export const $gtype: GObject.GType<DomainInterfaceLinkState>;
    }

    /**
     * @gir-type Enum
     */
    enum DomainInterfaceLinkState {
        DEFAULT,
        UP,
        DOWN,
    }

    /**
     * @gir-type Enum
     */
    export namespace DomainLifecycleAction {
        export const $gtype: GObject.GType<DomainLifecycleAction>;
    }

    /**
     * @gir-type Enum
     */
    enum DomainLifecycleAction {
        DESTROY,
        RESTART,
        PRESERVE,
        RENAME_RESTART,
        COREDUMP_DESTROY,
        COREDUMP_RESTART,
    }

    /**
     * @gir-type Enum
     */
    export namespace DomainLifecycleEvent {
        export const $gtype: GObject.GType<DomainLifecycleEvent>;
    }

    /**
     * @gir-type Enum
     */
    enum DomainLifecycleEvent {
        ON_POWEROFF,
        ON_REBOOT,
        ON_CRASH,
    }

    /**
     * @gir-type Enum
     */
    export namespace DomainMemballoonModel {
        export const $gtype: GObject.GType<DomainMemballoonModel>;
    }

    /**
     * @gir-type Enum
     */
    enum DomainMemballoonModel {
        NONE,
        VIRTIO,
    }

    /**
     * @gir-type Enum
     */
    export namespace DomainOsBootDevice {
        export const $gtype: GObject.GType<DomainOsBootDevice>;
    }

    /**
     * @gir-type Enum
     */
    enum DomainOsBootDevice {
        FD,
        HD,
        CDROM,
        NETWORK,
    }

    /**
     * @gir-type Enum
     */
    export namespace DomainOsFirmware {
        export const $gtype: GObject.GType<DomainOsFirmware>;
    }

    /**
     * @gir-type Enum
     */
    enum DomainOsFirmware {
        BIOS,
        EFI,
    }

    /**
     * @gir-type Enum
     */
    export namespace DomainOsSmBiosMode {
        export const $gtype: GObject.GType<DomainOsSmBiosMode>;
    }

    /**
     * @gir-type Enum
     */
    enum DomainOsSmBiosMode {
        EMULATE,
        HOST,
        SYSINFO,
    }

    /**
     * @gir-type Enum
     */
    export namespace DomainOsType {
        export const $gtype: GObject.GType<DomainOsType>;
    }

    /**
     * @gir-type Enum
     */
    enum DomainOsType {
        HVM,
        LINUX,
        EXE,
        XEN,
        UML,
    }

    /**
     * @gir-type Enum
     */
    export namespace DomainRedirdevBus {
        export const $gtype: GObject.GType<DomainRedirdevBus>;
    }

    /**
     * @gir-type Enum
     */
    enum DomainRedirdevBus {
        USB,
    }

    /**
     * @gir-type Enum
     */
    export namespace DomainSeclabelType {
        export const $gtype: GObject.GType<DomainSeclabelType>;
    }

    /**
     * @gir-type Enum
     */
    enum DomainSeclabelType {
        DYNAMIC,
        STATIC,
    }

    /**
     * @gir-type Enum
     */
    export namespace DomainSnapshotDomainState {
        export const $gtype: GObject.GType<DomainSnapshotDomainState>;
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    export namespace DomainSnapshotMemoryState {
        export const $gtype: GObject.GType<DomainSnapshotMemoryState>;
    }

    /**
     * @gir-type Enum
     */
    enum DomainSnapshotMemoryState {
        NONE,
        INTERNAL,
        EXTERNAL,
    }

    /**
     * @gir-type Enum
     */
    export namespace DomainSoundModel {
        export const $gtype: GObject.GType<DomainSoundModel>;
    }

    /**
     * @gir-type Enum
     */
    enum DomainSoundModel {
        SB16,
        ES1370,
        PCSPK,
        AC97,
        ICH6,
        ICH9,
    }

    /**
     * @gir-type Enum
     */
    export namespace DomainTimerTickPolicy {
        export const $gtype: GObject.GType<DomainTimerTickPolicy>;
    }

    /**
     * @gir-type Enum
     */
    enum DomainTimerTickPolicy {
        DELAY,
        CATCHUP,
        MERGE,
        DISCARD,
    }

    /**
     * @gir-type Enum
     */
    export namespace DomainVideoModel {
        export const $gtype: GObject.GType<DomainVideoModel>;
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    export namespace DomainVirtType {
        export const $gtype: GObject.GType<DomainVirtType>;
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    export namespace StoragePoolType {
        export const $gtype: GObject.GType<StoragePoolType>;
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @param argv pointer to application's argv
     */
    function init(argv?: string[] | null): string[] | null;
    /**
     * @param argv pointer to application's argv
     */
    function init_check(argv?: string[] | null): [boolean, string[] | null];
    /**
     * @gir-type Flags
     */
    export namespace StorageVolTargetFeatures {
        export const $gtype: GObject.GType<StorageVolTargetFeatures>;
    }

    /**
     * @gir-type Flags
     */
    enum StorageVolTargetFeatures {
        REFCOUNT,
    }

    namespace Capabilities {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Capabilities extends Object {
        static $gtype: GObject.GType<Capabilities>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Capabilities.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Capabilities.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Capabilities;

        static new_from_xml(xml: string): Capabilities;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof Capabilities.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Capabilities.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Capabilities.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Capabilities.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Capabilities.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Capabilities.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the list of guest capabilities.
         * @returns a newly allocated {@link GLib.List} of {@link LibvirtGConfig.CapabilitiesGuest}.
         */
        get_guests(): CapabilitiesGuest[];
        /**
         * Gets the host capabilities.
         * @returns a new {@link LibvirtGConfig.CapabilitiesHost}.
         */
        get_host(): CapabilitiesHost;
    }

    namespace CapabilitiesCpu {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class CapabilitiesCpu extends Object {
        static $gtype: GObject.GType<CapabilitiesCpu>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CapabilitiesCpu.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CapabilitiesCpu.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof CapabilitiesCpu.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CapabilitiesCpu.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CapabilitiesCpu.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CapabilitiesCpu.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CapabilitiesCpu.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CapabilitiesCpu.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Gets the features of this CPU.
         * @virtual
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
         * @returns a newly allocated {@link GLib.List} of {@link LibvirtGConfig.CapabilitiesCpuFeature}.
         */
        get_features(): CapabilitiesCpuFeature[];
        /**
         * Gets the model of the cpu.
         * @returns a new {@link LibvirtGConfig.CapabilitiesCpuModel}.
         */
        get_model(): CapabilitiesCpuModel;
        /**
         * Gets the topology of the cpu.
         * @returns a new {@link LibvirtGConfig.CapabilitiesCpuTopology}.
         */
        get_topology(): CapabilitiesCpuTopology;
        /**
         * Sets the topology of the cpu.
         * @param topology
         */
        set_topology(topology: CapabilitiesCpuTopology): void;
    }

    namespace CapabilitiesCpuFeature {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class CapabilitiesCpuFeature extends Object {
        static $gtype: GObject.GType<CapabilitiesCpuFeature>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CapabilitiesCpuFeature.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CapabilitiesCpuFeature.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof CapabilitiesCpuFeature.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CapabilitiesCpuFeature.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CapabilitiesCpuFeature.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CapabilitiesCpuFeature.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CapabilitiesCpuFeature.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CapabilitiesCpuFeature.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_name(): string;
        /**
         * @param name
         */
        set_name(name: string): void;
    }

    namespace CapabilitiesCpuModel {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class CapabilitiesCpuModel extends Object {
        static $gtype: GObject.GType<CapabilitiesCpuModel>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CapabilitiesCpuModel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CapabilitiesCpuModel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CapabilitiesCpuModel;

        static new_from_xml(xml: string): CapabilitiesCpuModel;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof CapabilitiesCpuModel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CapabilitiesCpuModel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CapabilitiesCpuModel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CapabilitiesCpuModel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CapabilitiesCpuModel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CapabilitiesCpuModel.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_name(): string;
        /**
         * @param name
         */
        set_name(name: string): void;
    }

    namespace CapabilitiesCpuTopology {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class CapabilitiesCpuTopology extends Object {
        static $gtype: GObject.GType<CapabilitiesCpuTopology>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CapabilitiesCpuTopology.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CapabilitiesCpuTopology.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CapabilitiesCpuTopology;

        static new_from_xml(xml: string): CapabilitiesCpuTopology;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof CapabilitiesCpuTopology.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CapabilitiesCpuTopology.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CapabilitiesCpuTopology.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CapabilitiesCpuTopology.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CapabilitiesCpuTopology.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CapabilitiesCpuTopology.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_cores(): number;
        get_sockets(): number;
        get_threads(): number;
        /**
         * @param cores
         */
        set_cores(cores: number): void;
        /**
         * @param sockets
         */
        set_sockets(sockets: number): void;
        /**
         * @param threads
         */
        set_threads(threads: number): void;
    }

    namespace CapabilitiesGuest {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class CapabilitiesGuest extends Object {
        static $gtype: GObject.GType<CapabilitiesGuest>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CapabilitiesGuest.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CapabilitiesGuest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof CapabilitiesGuest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CapabilitiesGuest.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CapabilitiesGuest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CapabilitiesGuest.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CapabilitiesGuest.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CapabilitiesGuest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the CPU architecture capabilities of the guest.
         * @returns a new {@link LibvirtGConfig.CapabilitiesGuestArch}.
         */
        get_arch(): CapabilitiesGuestArch;
        /**
         * Gets the CPU features for this guest.
         * @returns a newly allocated {@link GLib.List} of {@link LibvirtGConfig.CapabilitiesGuestFeature}.
         */
        get_features(): CapabilitiesGuestFeature[];
        get_os_type(): DomainOsType;
    }

    namespace CapabilitiesGuestArch {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class CapabilitiesGuestArch extends Object {
        static $gtype: GObject.GType<CapabilitiesGuestArch>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CapabilitiesGuestArch.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CapabilitiesGuestArch.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof CapabilitiesGuestArch.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CapabilitiesGuestArch.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CapabilitiesGuestArch.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CapabilitiesGuestArch.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CapabilitiesGuestArch.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CapabilitiesGuestArch.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the possible domains for this architecture.
         * @returns a newly allocated {@link GLib.List} of {@link LibvirtGConfig.CapabilitiesGuestDomain}.
         */
        get_domains(): CapabilitiesGuestDomain[];
        get_emulator(): string;
        get_name(): string;
    }

    namespace CapabilitiesGuestDomain {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class CapabilitiesGuestDomain extends Object {
        static $gtype: GObject.GType<CapabilitiesGuestDomain>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CapabilitiesGuestDomain.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CapabilitiesGuestDomain.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof CapabilitiesGuestDomain.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CapabilitiesGuestDomain.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CapabilitiesGuestDomain.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CapabilitiesGuestDomain.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CapabilitiesGuestDomain.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CapabilitiesGuestDomain.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_emulator(): string;
        get_virt_type(): DomainVirtType;
    }

    namespace CapabilitiesGuestFeature {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class CapabilitiesGuestFeature extends Object {
        static $gtype: GObject.GType<CapabilitiesGuestFeature>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CapabilitiesGuestFeature.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CapabilitiesGuestFeature.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof CapabilitiesGuestFeature.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CapabilitiesGuestFeature.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CapabilitiesGuestFeature.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CapabilitiesGuestFeature.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CapabilitiesGuestFeature.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CapabilitiesGuestFeature.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_name(): string;
    }

    namespace CapabilitiesHost {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class CapabilitiesHost extends Object {
        static $gtype: GObject.GType<CapabilitiesHost>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CapabilitiesHost.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CapabilitiesHost.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof CapabilitiesHost.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CapabilitiesHost.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CapabilitiesHost.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CapabilitiesHost.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CapabilitiesHost.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CapabilitiesHost.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the CPU capabilities of the host.
         * @returns a new {@link LibvirtGConfig.CapabilitiesCpu}.
         */
        get_cpu(): CapabilitiesCpu;
        /**
         * Get the security models listed in `host` capabilities.
         * @returns a newly allocated {@link GLib.List} of {@link LibvirtGConfig.CapabilitiesHostSecModel}.
         */
        get_secmodels(): CapabilitiesHostSecModel[];
        get_uuid(): string;
    }

    namespace CapabilitiesHostSecModel {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class CapabilitiesHostSecModel extends Object {
        static $gtype: GObject.GType<CapabilitiesHostSecModel>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CapabilitiesHostSecModel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CapabilitiesHostSecModel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof CapabilitiesHostSecModel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CapabilitiesHostSecModel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CapabilitiesHostSecModel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CapabilitiesHostSecModel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CapabilitiesHostSecModel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CapabilitiesHostSecModel.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_doi(): string;
        get_model(): string;
    }

    namespace Domain {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::current-memory': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::features': (pspec: GObject.ParamSpec) => void;
            'notify::memory': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::uuid': (pspec: GObject.ParamSpec) => void;
            'notify::vcpu': (pspec: GObject.ParamSpec) => void;
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

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

    /**
     * @gir-type Class
     */
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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Domain.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Domain.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Domain;

        static new_from_xml(xml: string): Domain;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof Domain.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Domain.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Domain.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Domain.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Domain.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Domain.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param device
         */
        add_device(device: DomainDevice): void;
        /**
         * Gets the clock configuration of `domain`
         * @returns A {@link LibvirtGConfig.DomainClock}. The returned object should be unreffed with `g_object_unref()` when no longer needed.
         */
        get_clock(): DomainClock;
        /**
         * Gets the CPU configuration of `domain`
         * @returns A {@link LibvirtGConfig.DomainCpu}. The returned object should be unreffed with `g_object_unref()` when no longer needed.
         */
        get_cpu(): DomainCpu;
        /**
         * @returns current amount of RAM in kilobytes (i.e. blocks of 1024 bytes).
         */
        get_current_memory(): number;
        /**
         * @param ns_uri
         */
        get_custom_xml(ns_uri: string): string;
        get_description(): string;
        /**
         * Gets the list of devices attached to `domain`.  The returned list should
         * be freed with `g_list_free()`, after its elements have been unreffed with
         * `g_object_unref()`.
         * @returns a newly allocated {@link GLib.List} of {@link LibvirtGConfig.DomainDevice}.
         */
        get_devices(): DomainDevice[];
        /**
         * @returns The returned list should be freed with `g_strfreev()` when no longer needed.
         */
        get_features(): string[];
        /**
         * @returns maximum amount of RAM in kilobytes (i.e. blocks of 1024 bytes).
         */
        get_memory(): number;
        get_name(): string;
        /**
         * Gets the operating system configuration of `domain`
         * @returns A {@link LibvirtGConfig.DomainOs}. The returned object should be unreffed with `g_object_unref()` when no longer needed.
         */
        get_os(): DomainOs;
        get_title(): string;
        get_uuid(): string;
        get_vcpus(): number;
        get_virt_type(): DomainVirtType;
        /**
         * @param klock
         */
        set_clock(klock?: DomainClock | null): void;
        /**
         * @param cpu
         */
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
        /**
         * @param xml
         * @param ns
         * @param ns_uri
         */
        set_custom_xml(xml: string, ns: string, ns_uri: string): boolean;
        /**
         * @param xml
         * @param ns
         * @param ns_uri
         */
        set_custom_xml_ns_children(xml: string, ns: string, ns_uri: string): boolean;
        /**
         * @param description
         */
        set_description(description?: string | null): void;
        /**
         * @param devices
         */
        set_devices(devices: DomainDevice[]): void;
        /**
         * @param features
         */
        set_features(features: string[]): void;
        /**
         * @param event
         * @param action
         */
        set_lifecycle(event: DomainLifecycleEvent | null, action: DomainLifecycleAction | null): void;
        /**
         * Sets the maximum amount of RAM allocated to `domain` in kilobytes (i.e.
         * blocks of 1024 bytes).
         * @param memory The maximum amount of RAM in kilobytes.
         */
        set_memory(memory: number): void;
        /**
         * @param name
         */
        set_name(name?: string | null): void;
        /**
         * @param os the os configuration to set
         */
        set_os(os?: DomainOs | null): void;
        /**
         * @param pm a `GVirPowerManagement` instance
         */
        set_power_management(pm?: DomainPowerManagement | null): void;
        /**
         * @param seclabel the security label configuration to set
         */
        set_seclabel(seclabel?: DomainSeclabel | null): void;
        /**
         * Sets the title of the domain. This is an optional short textual description of the domain. Passing a NULL `title`
         * unsets the current domain title.
         * @param title title of the domain
         */
        set_title(title?: string | null): void;
        /**
         * @param uuid
         */
        set_uuid(uuid?: string | null): void;
        /**
         * @param vcpu_count
         */
        set_vcpus(vcpu_count: number): void;
        /**
         * @param type
         */
        set_virt_type(type: DomainVirtType | null): void;
    }

    namespace DomainAddress {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class DomainAddress extends Object {
        static $gtype: GObject.GType<DomainAddress>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainAddress.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainAddress.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DomainAddress.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainAddress.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainAddress.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainAddress.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainAddress.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainAddress.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace DomainAddressPci {
        // Signal signatures
        interface SignalSignatures extends DomainAddress.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainAddress.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainAddressPci extends DomainAddress {
        static $gtype: GObject.GType<DomainAddressPci>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainAddressPci.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainAddressPci.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainAddressPci;

        static new_from_xml(xml: string): DomainAddressPci;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainAddressPci.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainAddressPci.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainAddressPci.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainAddressPci.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainAddressPci.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainAddressPci.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_bus(): number;
        get_domain(): number;
        get_function(): number;
        get_multifunction(): boolean;
        get_slot(): number;
        /**
         * @param bus
         */
        set_bus(bus: number): void;
        /**
         * @param pci_domain
         */
        set_domain(pci_domain: number): void;
        /**
         * @param _function
         */
        set_function(_function: number): void;
        /**
         * @param multifunction
         */
        set_multifunction(multifunction: boolean): void;
        /**
         * @param slot
         */
        set_slot(slot: number): void;
    }

    namespace DomainAddressUsb {
        // Signal signatures
        interface SignalSignatures extends DomainAddress.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainAddress.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainAddressUsb extends DomainAddress {
        static $gtype: GObject.GType<DomainAddressUsb>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainAddressUsb.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainAddressUsb.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainAddressUsb;

        static new_from_xml(xml: string): DomainAddressUsb;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainAddressUsb.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainAddressUsb.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainAddressUsb.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainAddressUsb.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainAddressUsb.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainAddressUsb.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param bus
         */
        set_bus(bus: number): void;
        /**
         * @param port
         */
        set_port(port: string): void;
    }

    namespace DomainAudio {
        // Signal signatures
        interface SignalSignatures extends DomainDevice.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainAudio extends DomainDevice {
        static $gtype: GObject.GType<DomainAudio>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainAudio.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainAudio.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainAudio;

        static new_from_xml(xml: string): DomainAudio;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainAudio.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainAudio.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainAudio.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainAudio.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainAudio.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainAudio.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param backend
         */
        set_backend(backend: DomainAudioBackend | null): void;
        /**
         * @param server_name
         */
        set_server_name(server_name: string): void;
    }

    namespace DomainCapabilities {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainCapabilities extends Object {
        static $gtype: GObject.GType<DomainCapabilities>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainCapabilities.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainCapabilities.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainCapabilities;

        static new_from_xml(xml: string): DomainCapabilities;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainCapabilities.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainCapabilities.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainCapabilities.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainCapabilities.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainCapabilities.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainCapabilities.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the `os` associated with the `domain_caps`.
         * @returns a new {@link LibvirtGConfig.DomainCapabilitiesOs}.
         */
        get_os(): DomainCapabilitiesOs;
    }

    namespace DomainCapabilitiesOs {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainCapabilitiesOs extends Object {
        static $gtype: GObject.GType<DomainCapabilitiesOs>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainCapabilitiesOs.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainCapabilitiesOs.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DomainCapabilitiesOs.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainCapabilitiesOs.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainCapabilitiesOs.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainCapabilitiesOs.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainCapabilitiesOs.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainCapabilitiesOs.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Gets the firmwares supported by `os`. The returned list should be freed with
         * `g_list_free()`.
         * @virtual
         */
        vfunc_get_firmwares(): DomainOsFirmware[];

        // Methods

        /**
         * Gets the firmwares supported by `os`. The returned list should be freed with
         * `g_list_free()`.
         * @returns a newly allocated {@link GLib.List} of {@link LibvirtGConfig.DomainOsFirmware}.
         */
        get_firmwares(): DomainOsFirmware[];
    }

    namespace DomainChannel {
        // Signal signatures
        interface SignalSignatures extends DomainChardev.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainChardev.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainChannel extends DomainChardev {
        static $gtype: GObject.GType<DomainChannel>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainChannel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainChannel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainChannel;

        static new_from_xml(xml: string): DomainChannel;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainChannel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainChannel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainChannel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainChannel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainChannel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainChannel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_target_name(): string;
        get_target_type(): DomainChannelTargetType;
        /**
         * @param name
         */
        set_target_name(name: string): void;
        /**
         * @param type
         */
        set_target_type(type: DomainChannelTargetType | null): void;
    }

    namespace DomainChardev {
        // Signal signatures
        interface SignalSignatures extends DomainDevice.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class DomainChardev extends DomainDevice {
        static $gtype: GObject.GType<DomainChardev>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainChardev.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainChardev.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DomainChardev.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainChardev.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainChardev.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainChardev.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainChardev.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainChardev.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the source for the chardev
         * @returns the chardev source
         */
        get_source(): DomainChardevSource;
        /**
         * @param source
         */
        set_source(source: DomainChardevSource): void;
    }

    namespace DomainChardevSource {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class DomainChardevSource extends Object {
        static $gtype: GObject.GType<DomainChardevSource>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainChardevSource.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainChardevSource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DomainChardevSource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainChardevSource.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainChardevSource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainChardevSource.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainChardevSource.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainChardevSource.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace DomainChardevSourcePty {
        // Signal signatures
        interface SignalSignatures extends DomainChardevSource.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainChardevSource.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainChardevSourcePty extends DomainChardevSource {
        static $gtype: GObject.GType<DomainChardevSourcePty>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainChardevSourcePty.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainChardevSourcePty.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainChardevSourcePty;

        static new_from_xml(xml: string): DomainChardevSourcePty;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainChardevSourcePty.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainChardevSourcePty.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainChardevSourcePty.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainChardevSourcePty.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainChardevSourcePty.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainChardevSourcePty.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_path(): string;
        /**
         * @param path
         */
        set_path(path: string): void;
    }

    namespace DomainChardevSourceSpicePort {
        // Signal signatures
        interface SignalSignatures extends DomainChardevSource.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainChardevSource.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainChardevSourceSpicePort extends DomainChardevSource {
        static $gtype: GObject.GType<DomainChardevSourceSpicePort>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainChardevSourceSpicePort.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainChardevSourceSpicePort.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainChardevSourceSpicePort;

        static new_from_xml(xml: string): DomainChardevSourceSpicePort;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainChardevSourceSpicePort.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainChardevSourceSpicePort.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainChardevSourceSpicePort.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainChardevSourceSpicePort.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainChardevSourceSpicePort.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainChardevSourceSpicePort.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_channel(): string;
        /**
         * @param channel
         */
        set_channel(channel: string): void;
    }

    namespace DomainChardevSourceSpiceVmc {
        // Signal signatures
        interface SignalSignatures extends DomainChardevSource.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainChardevSource.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainChardevSourceSpiceVmc extends DomainChardevSource {
        static $gtype: GObject.GType<DomainChardevSourceSpiceVmc>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainChardevSourceSpiceVmc.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainChardevSourceSpiceVmc.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainChardevSourceSpiceVmc;

        static new_from_xml(xml: string): DomainChardevSourceSpiceVmc;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainChardevSourceSpiceVmc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainChardevSourceSpiceVmc.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainChardevSourceSpiceVmc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainChardevSourceSpiceVmc.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainChardevSourceSpiceVmc.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainChardevSourceSpiceVmc.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace DomainChardevSourceUnix {
        // Signal signatures
        interface SignalSignatures extends DomainChardevSource.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainChardevSource.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainChardevSourceUnix extends DomainChardevSource {
        static $gtype: GObject.GType<DomainChardevSourceUnix>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainChardevSourceUnix.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainChardevSourceUnix.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainChardevSourceUnix;

        static new_from_xml(xml: string): DomainChardevSourceUnix;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainChardevSourceUnix.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainChardevSourceUnix.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainChardevSourceUnix.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainChardevSourceUnix.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainChardevSourceUnix.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainChardevSourceUnix.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace DomainClock {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainClock extends Object {
        static $gtype: GObject.GType<DomainClock>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainClock.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainClock.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainClock;

        static new_from_xml(xml: string): DomainClock;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainClock.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainClock.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainClock.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainClock.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainClock.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainClock.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param timer
         */
        add_timer(timer: DomainTimer): void;
        get_offset(): DomainClockOffset;
        get_timezone(): string;
        get_variable_offset(): number;
        /**
         * @param offset
         */
        set_offset(offset: DomainClockOffset | null): void;
        /**
         * @param tz
         */
        set_timezone(tz: string): void;
        /**
         * @param seconds
         */
        set_variable_offset(seconds: number): void;
    }

    namespace DomainConsole {
        // Signal signatures
        interface SignalSignatures extends DomainChardev.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainChardev.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainConsole extends DomainChardev {
        static $gtype: GObject.GType<DomainConsole>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainConsole.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainConsole.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainConsole;

        static new_from_xml(xml: string): DomainConsole;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainConsole.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainConsole.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainConsole.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainConsole.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainConsole.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainConsole.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param type
         */
        set_target_type(type: DomainConsoleTargetType | null): void;
    }

    namespace DomainController {
        // Signal signatures
        interface SignalSignatures extends DomainDevice.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class DomainController extends DomainDevice {
        static $gtype: GObject.GType<DomainController>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainController.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainController.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DomainController.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainController.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainController.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainController.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainController.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainController.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_index(): number;
        get_ports(): number;
        /**
         * @param address
         */
        set_address(address?: DomainAddress | null): void;
        /**
         * @param index
         */
        set_index(index: number): void;
        /**
         * @param ports
         */
        set_ports(ports: number): void;
    }

    namespace DomainControllerUsb {
        // Signal signatures
        interface SignalSignatures extends DomainController.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainController.ConstructorProps {}
    }

    /**
     * The {@link LibvirtGConfig.DomainControllerUsb} struct is an opaque data structure
     * which is used to configure USB controllers on a domain. It should only
     * be accessed via the following functions.
     * @gir-type Class
     */
    class DomainControllerUsb extends DomainController {
        static $gtype: GObject.GType<DomainControllerUsb>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainControllerUsb.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainControllerUsb.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainControllerUsb;

        static new_from_xml(xml: string): DomainControllerUsb;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainControllerUsb.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainControllerUsb.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainControllerUsb.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainControllerUsb.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainControllerUsb.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainControllerUsb.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Sets `controller` to be a companion controller of `master`. `controller`
         * will be exposed from port `startport` on `master` in the guest.
         * After this call, `controller`'s index will be set to `master`'s index.
         * @param master the master {@link LibvirtGConfig.DomainControllerUsb}
         * @param startport the start port number
         */
        set_master(master: DomainControllerUsb, startport: number): void;
        /**
         * Sets the model of `controller` to `model`.
         * @param model the USB controller model
         */
        set_model(model: DomainControllerUsbModel | null): void;
    }

    namespace DomainCpu {
        // Signal signatures
        interface SignalSignatures extends CapabilitiesCpu.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends CapabilitiesCpu.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainCpu extends CapabilitiesCpu {
        static $gtype: GObject.GType<DomainCpu>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainCpu.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainCpu.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainCpu;

        static new_from_xml(xml: string): DomainCpu;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainCpu.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainCpu.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainCpu.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainCpu.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainCpu.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainCpu.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_match_policy(): DomainCpuMatchPolicy;
        get_mode(): DomainCpuMode;
        /**
         * @param policy
         */
        set_match_policy(policy: DomainCpuMatchPolicy | null): void;
        /**
         * @param mode
         */
        set_mode(mode: DomainCpuMode | null): void;
        /**
         * @param model
         */
        set_model(model: DomainCpuModel): void;
    }

    namespace DomainCpuFeature {
        // Signal signatures
        interface SignalSignatures extends CapabilitiesCpuFeature.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends CapabilitiesCpuFeature.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainCpuFeature extends CapabilitiesCpuFeature {
        static $gtype: GObject.GType<DomainCpuFeature>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainCpuFeature.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainCpuFeature.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainCpuFeature;

        static new_from_xml(xml: string): DomainCpuFeature;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainCpuFeature.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainCpuFeature.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainCpuFeature.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainCpuFeature.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainCpuFeature.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainCpuFeature.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_policy(): DomainCpuFeaturePolicy;
        /**
         * @param policy
         */
        set_policy(policy: DomainCpuFeaturePolicy | null): void;
    }

    namespace DomainCpuModel {
        // Signal signatures
        interface SignalSignatures extends CapabilitiesCpuModel.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends CapabilitiesCpuModel.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainCpuModel extends CapabilitiesCpuModel {
        static $gtype: GObject.GType<DomainCpuModel>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainCpuModel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainCpuModel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainCpuModel;

        static new_from_xml(xml: string): DomainCpuModel;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainCpuModel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainCpuModel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainCpuModel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainCpuModel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainCpuModel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainCpuModel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace DomainDevice {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainDevice extends Object {
        static $gtype: GObject.GType<DomainDevice>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainDevice.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainDevice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DomainDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainDevice.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainDevice.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainDevice.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainDevice.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_alias(): string;
    }

    namespace DomainDisk {
        // Signal signatures
        interface SignalSignatures extends DomainDevice.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainDisk extends DomainDevice {
        static $gtype: GObject.GType<DomainDisk>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainDisk.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainDisk.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainDisk;

        static new_from_xml(xml: string): DomainDisk;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainDisk.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainDisk.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainDisk.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainDisk.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainDisk.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainDisk.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_disk_type(): DomainDiskType;
        /**
         * Gets the driver configuration for `disk`.
         * @returns A {@link LibvirtGConfig.DomainDiskDriver}. The returned object should be unreffed with `g_object_unref()` when no longer needed.
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
         * @param driver a {@link LibvirtGConfig.DomainDiskDriver}
         */
        set_driver(driver?: DomainDiskDriver | null): void;
        /**
         * @param cache_type
         */
        set_driver_cache(cache_type: DomainDiskCacheType | null): void;
        /**
         * @param format
         */
        set_driver_format(format: DomainDiskFormat | null): void;
        /**
         * @param driver_name
         */
        set_driver_name(driver_name: string): void;
        /**
         * @param driver_type
         */
        set_driver_type(driver_type: string): void;
        /**
         * @param type
         */
        set_guest_device_type(type: DomainDiskGuestDeviceType | null): void;
        /**
         * @param readonly
         */
        set_readonly(readonly: boolean): void;
        /**
         * @param type
         */
        set_snapshot_type(type: DomainDiskSnapshotType | null): void;
        /**
         * @param source
         */
        set_source(source: string): void;
        /**
         * @param policy
         */
        set_startup_policy(policy: DomainDiskStartupPolicy | null): void;
        /**
         * @param bus
         */
        set_target_bus(bus: DomainDiskBus | null): void;
        /**
         * @param dev
         */
        set_target_dev(dev: string): void;
        /**
         * @param type
         */
        set_type(type: DomainDiskType | null): void;
    }

    namespace DomainDiskDriver {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainDiskDriver extends Object {
        static $gtype: GObject.GType<DomainDiskDriver>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainDiskDriver.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainDiskDriver.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainDiskDriver;

        static new_from_xml(xml: string): DomainDiskDriver;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainDiskDriver.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainDiskDriver.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainDiskDriver.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainDiskDriver.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainDiskDriver.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainDiskDriver.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_cache(): DomainDiskCacheType;
        get_copy_on_read(): boolean;
        get_discard(): DomainDiskDriverDiscard;
        get_error_policy(): DomainDiskDriverErrorPolicy;
        get_format(): DomainDiskFormat;
        get_io_policy(): DomainDiskDriverIoPolicy;
        get_name(): string;
        /**
         * @param cache_type
         */
        set_cache(cache_type: DomainDiskCacheType | null): void;
        /**
         * @param copy_on_read
         */
        set_copy_on_read(copy_on_read: boolean): void;
        /**
         * @param discard
         */
        set_discard(discard: DomainDiskDriverDiscard | null): void;
        /**
         * @param policy
         */
        set_error_policy(policy: DomainDiskDriverErrorPolicy | null): void;
        /**
         * @param format
         */
        set_format(format: DomainDiskFormat | null): void;
        /**
         * @param policy
         */
        set_io_policy(policy: DomainDiskDriverIoPolicy | null): void;
        /**
         * @param name
         */
        set_name(name: string): void;
    }

    namespace DomainFilesys {
        // Signal signatures
        interface SignalSignatures extends DomainDevice.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainFilesys extends DomainDevice {
        static $gtype: GObject.GType<DomainFilesys>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainFilesys.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainFilesys.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainFilesys;

        static new_from_xml(xml: string): DomainFilesys;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainFilesys.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainFilesys.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainFilesys.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainFilesys.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainFilesys.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainFilesys.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param type
         */
        set_access_type(type: DomainFilesysAccessType | null): void;
        /**
         * @param format
         */
        set_driver_format(format: DomainDiskFormat | null): void;
        /**
         * @param type
         */
        set_driver_type(type: DomainFilesysDriverType | null): void;
        /**
         * @param bytes
         */
        set_ram_usage(bytes: number): void;
        /**
         * @param readonly
         */
        set_readonly(readonly: boolean): void;
        /**
         * @param source
         */
        set_source(source: string): void;
        /**
         * @param target
         */
        set_target(target: string): void;
        /**
         * @param type
         */
        set_type(type: DomainFilesysType | null): void;
    }

    namespace DomainGraphics {
        // Signal signatures
        interface SignalSignatures extends DomainDevice.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class DomainGraphics extends DomainDevice {
        static $gtype: GObject.GType<DomainGraphics>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainGraphics.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainGraphics.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DomainGraphics.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainGraphics.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainGraphics.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainGraphics.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainGraphics.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainGraphics.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace DomainGraphicsDBus {
        // Signal signatures
        interface SignalSignatures extends DomainGraphics.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainGraphics.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainGraphicsDBus extends DomainGraphics {
        static $gtype: GObject.GType<DomainGraphicsDBus>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainGraphicsDBus.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainGraphicsDBus.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainGraphicsDBus;

        static new_from_xml(xml: string): DomainGraphicsDBus;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainGraphicsDBus.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainGraphicsDBus.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainGraphicsDBus.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainGraphicsDBus.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainGraphicsDBus.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainGraphicsDBus.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_address(): string;
        /**
         * @param address
         */
        set_address(address: string): void;
        /**
         * @param gl
         */
        set_gl(gl: boolean): void;
    }

    namespace DomainGraphicsDesktop {
        // Signal signatures
        interface SignalSignatures extends DomainGraphics.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainGraphics.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainGraphicsDesktop extends DomainGraphics {
        static $gtype: GObject.GType<DomainGraphicsDesktop>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainGraphicsDesktop.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainGraphicsDesktop.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainGraphicsDesktop;

        static new_from_xml(xml: string): DomainGraphicsDesktop;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainGraphicsDesktop.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainGraphicsDesktop.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainGraphicsDesktop.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainGraphicsDesktop.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainGraphicsDesktop.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainGraphicsDesktop.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_display(): string;
        get_fullscreen(): boolean;
        /**
         * @param disp
         */
        set_display(disp: string): void;
        /**
         * @param fullscreen
         */
        set_fullscreen(fullscreen: boolean): void;
    }

    namespace DomainGraphicsRdp {
        // Signal signatures
        interface SignalSignatures extends DomainGraphics.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainGraphics.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainGraphicsRdp extends DomainGraphics {
        static $gtype: GObject.GType<DomainGraphicsRdp>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainGraphicsRdp.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainGraphicsRdp.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainGraphicsRdp;

        static new_from_xml(xml: string): DomainGraphicsRdp;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainGraphicsRdp.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainGraphicsRdp.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainGraphicsRdp.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainGraphicsRdp.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainGraphicsRdp.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainGraphicsRdp.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_multi_user(): boolean;
        get_port(): number;
        get_replace_user(): boolean;
        /**
         * @param autoport
         */
        set_autoport(autoport: boolean): void;
        /**
         * @param multi_user
         */
        set_multi_user(multi_user: boolean): void;
        /**
         * @param port
         */
        set_port(port: number): void;
        /**
         * @param replace_user
         */
        set_replace_user(replace_user: boolean): void;
    }

    namespace DomainGraphicsSdl {
        // Signal signatures
        interface SignalSignatures extends DomainGraphics.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainGraphics.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainGraphicsSdl extends DomainGraphics {
        static $gtype: GObject.GType<DomainGraphicsSdl>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainGraphicsSdl.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainGraphicsSdl.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainGraphicsSdl;

        static new_from_xml(xml: string): DomainGraphicsSdl;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainGraphicsSdl.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainGraphicsSdl.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainGraphicsSdl.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainGraphicsSdl.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainGraphicsSdl.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainGraphicsSdl.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param disp
         */
        set_display(disp: string): void;
        /**
         * @param fullscreen
         */
        set_fullscreen(fullscreen: boolean): void;
        /**
         * @param path
         */
        set_xauthority(path: string): void;
    }

    namespace DomainGraphicsSpice {
        // Signal signatures
        interface SignalSignatures extends DomainGraphics.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainGraphics.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainGraphicsSpice extends DomainGraphics {
        static $gtype: GObject.GType<DomainGraphicsSpice>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainGraphicsSpice.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainGraphicsSpice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainGraphicsSpice;

        static new_from_xml(xml: string): DomainGraphicsSpice;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainGraphicsSpice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainGraphicsSpice.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainGraphicsSpice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainGraphicsSpice.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainGraphicsSpice.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainGraphicsSpice.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns image compression configuration of `graphics`
         */
        get_image_compression(): DomainGraphicsSpiceImageCompression;
        get_port(): number;
        /**
         * @param autoport
         */
        set_autoport(autoport: boolean): void;
        /**
         * @param gl
         */
        set_gl(gl: boolean): void;
        /**
         * @param compression
         */
        set_image_compression(compression: DomainGraphicsSpiceImageCompression | null): void;
        /**
         * @param password
         */
        set_password(password: string): void;
        /**
         * @param port
         */
        set_port(port: number): void;
        /**
         * @param port
         */
        set_tls_port(port: number): void;
    }

    namespace DomainGraphicsVnc {
        // Signal signatures
        interface SignalSignatures extends DomainGraphics.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainGraphics.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainGraphicsVnc extends DomainGraphics {
        static $gtype: GObject.GType<DomainGraphicsVnc>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainGraphicsVnc.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainGraphicsVnc.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainGraphicsVnc;

        static new_from_xml(xml: string): DomainGraphicsVnc;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainGraphicsVnc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainGraphicsVnc.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainGraphicsVnc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainGraphicsVnc.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainGraphicsVnc.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainGraphicsVnc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_port(): number;
        get_socket(): string;
        /**
         * @param autoport
         */
        set_autoport(autoport: boolean): void;
        /**
         * @param password
         */
        set_password(password: string): void;
        /**
         * @param port
         */
        set_port(port: number): void;
        /**
         * @param socket
         */
        set_socket(socket: string): void;
    }

    namespace DomainHostdev {
        // Signal signatures
        interface SignalSignatures extends DomainDevice.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class DomainHostdev extends DomainDevice {
        static $gtype: GObject.GType<DomainHostdev>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainHostdev.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainHostdev.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DomainHostdev.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainHostdev.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainHostdev.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainHostdev.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainHostdev.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainHostdev.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns The boot order if `hostdev` is bootable, otherwise a negative integer.
         */
        get_boot_order(): number;
        /**
         * @returns `true` if `hostdev` is readonly, `false` otherwise.
         */
        get_readonly(): boolean;
        /**
         * @returns `true` if `hostdev` is shared between domains, `false` otherwise.
         */
        get_shareable(): boolean;
        /**
         * If a positive integer is passed as `order`, `hostdev` is marked bootable and
         * boot order set to `order`, otherwise `hostdev` is marked to be unbootable.
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

    namespace DomainHostdevPci {
        // Signal signatures
        interface SignalSignatures extends DomainHostdev.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainHostdev.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainHostdevPci extends DomainHostdev {
        static $gtype: GObject.GType<DomainHostdevPci>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainHostdevPci.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainHostdevPci.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainHostdevPci;

        static new_from_xml(xml: string): DomainHostdevPci;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainHostdevPci.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainHostdevPci.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainHostdevPci.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainHostdevPci.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainHostdevPci.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainHostdevPci.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the address associated with `hostdev`.
         * @returns a new {@link LibvirtGConfig.DomainAddressPci}, or NULL if no address is associated with `hostdev`. The returned object should be unreffed with `g_object_unref()` when no longer needed.
         */
        get_address(): DomainAddressPci;
        get_managed(): boolean;
        get_rom_bar(): boolean;
        get_rom_file(): string;
        /**
         * @param address
         */
        set_address(address: DomainAddressPci): void;
        /**
         * @param managed
         */
        set_managed(managed: boolean): void;
        /**
         * @param bar
         */
        set_rom_bar(bar: boolean): void;
        /**
         * @param file
         */
        set_rom_file(file: string): void;
    }

    namespace DomainInput {
        // Signal signatures
        interface SignalSignatures extends DomainDevice.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainInput extends DomainDevice {
        static $gtype: GObject.GType<DomainInput>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainInput.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainInput.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainInput;

        static new_from_xml(xml: string): DomainInput;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainInput.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainInput.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainInput.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainInput.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainInput.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainInput.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_bus(): DomainInputBus;
        get_device_type(): DomainInputDeviceType;
        /**
         * @param bus
         */
        set_bus(bus: DomainInputBus | null): void;
        /**
         * @param type
         */
        set_device_type(type: DomainInputDeviceType | null): void;
    }

    namespace DomainInterface {
        // Signal signatures
        interface SignalSignatures extends DomainDevice.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class DomainInterface extends DomainDevice {
        static $gtype: GObject.GType<DomainInterface>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainInterface.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainInterface.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DomainInterface.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainInterface.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainInterface.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainInterface.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainInterface.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainInterface.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the filterref associated with the `interface`
         * @returns A {@link LibvirtGConfig.DomainInterfaceFilterref}. The returned object should be unreffed with `g_object_unref()` when no longer needed.
         */
        get_filterref(): DomainInterfaceFilterref;
        get_ifname(): string;
        get_link_state(): DomainInterfaceLinkState;
        get_mac(): string;
        get_model(): string;
        /**
         * @param filterref the filterref to set
         */
        set_filterref(filterref?: DomainInterfaceFilterref | null): void;
        /**
         * @param ifname
         */
        set_ifname(ifname: string): void;
        /**
         * @param state
         */
        set_link_state(state: DomainInterfaceLinkState | null): void;
        /**
         * @param mac_address
         */
        set_mac(mac_address: string): void;
        /**
         * @param model
         */
        set_model(model: string): void;
    }

    namespace DomainInterfaceBridge {
        // Signal signatures
        interface SignalSignatures extends DomainInterface.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainInterface.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainInterfaceBridge extends DomainInterface {
        static $gtype: GObject.GType<DomainInterfaceBridge>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainInterfaceBridge.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainInterfaceBridge.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainInterfaceBridge;

        static new_from_xml(xml: string): DomainInterfaceBridge;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainInterfaceBridge.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainInterfaceBridge.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainInterfaceBridge.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainInterfaceBridge.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainInterfaceBridge.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainInterfaceBridge.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param brname
         */
        set_source(brname: string): void;
    }

    namespace DomainInterfaceFilterref {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainInterfaceFilterref extends Object {
        static $gtype: GObject.GType<DomainInterfaceFilterref>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainInterfaceFilterref.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainInterfaceFilterref.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainInterfaceFilterref;

        static new_from_xml(xml: string): DomainInterfaceFilterref;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainInterfaceFilterref.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainInterfaceFilterref.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainInterfaceFilterref.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainInterfaceFilterref.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainInterfaceFilterref.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainInterfaceFilterref.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param parameter
         */
        add_parameter(parameter: DomainInterfaceFilterrefParameter): void;
        get_name(): string;
        /**
         * Gets the list of parameters attached to `filterref`. The returned list should be
         * freed with `g_list_free()`, after its elements have been unreffed with
         * `g_object_unref()`.
         * @returns a newly allocated {@link GLib.List} of {@link LibvirtGConfig.DomainInterfaceFilterrefParameter}.
         */
        get_parameters(): DomainInterfaceFilterrefParameter[];
        /**
         * @param filter
         */
        set_name(filter: string): void;
    }

    namespace DomainInterfaceFilterrefParameter {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainInterfaceFilterrefParameter extends Object {
        static $gtype: GObject.GType<DomainInterfaceFilterrefParameter>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainInterfaceFilterrefParameter.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainInterfaceFilterrefParameter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainInterfaceFilterrefParameter;

        static new_from_xml(xml: string): DomainInterfaceFilterrefParameter;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainInterfaceFilterrefParameter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainInterfaceFilterrefParameter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainInterfaceFilterrefParameter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainInterfaceFilterrefParameter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainInterfaceFilterrefParameter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainInterfaceFilterrefParameter.SignalSignatures[K]> extends [
                any,
                ...infer Q,
            ]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_name(): string;
        get_value(): string;
        /**
         * @param name
         */
        set_name(name: string): void;
        /**
         * @param value
         */
        set_value(value: string): void;
    }

    namespace DomainInterfaceNetwork {
        // Signal signatures
        interface SignalSignatures extends DomainInterface.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainInterface.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainInterfaceNetwork extends DomainInterface {
        static $gtype: GObject.GType<DomainInterfaceNetwork>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainInterfaceNetwork.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainInterfaceNetwork.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainInterfaceNetwork;

        static new_from_xml(xml: string): DomainInterfaceNetwork;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainInterfaceNetwork.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainInterfaceNetwork.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainInterfaceNetwork.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainInterfaceNetwork.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainInterfaceNetwork.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainInterfaceNetwork.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param source
         */
        set_source(source: string): void;
    }

    namespace DomainInterfaceUser {
        // Signal signatures
        interface SignalSignatures extends DomainInterface.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainInterface.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainInterfaceUser extends DomainInterface {
        static $gtype: GObject.GType<DomainInterfaceUser>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainInterfaceUser.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainInterfaceUser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainInterfaceUser;

        static new_from_xml(xml: string): DomainInterfaceUser;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainInterfaceUser.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainInterfaceUser.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainInterfaceUser.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainInterfaceUser.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainInterfaceUser.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainInterfaceUser.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace DomainMemballoon {
        // Signal signatures
        interface SignalSignatures extends DomainDevice.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainMemballoon extends DomainDevice {
        static $gtype: GObject.GType<DomainMemballoon>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainMemballoon.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainMemballoon.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainMemballoon;

        static new_from_xml(xml: string): DomainMemballoon;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainMemballoon.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainMemballoon.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainMemballoon.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainMemballoon.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainMemballoon.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainMemballoon.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param model
         */
        set_model(model: DomainMemballoonModel | null): void;
    }

    namespace DomainOs {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainOs extends Object {
        static $gtype: GObject.GType<DomainOs>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainOs.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainOs.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainOs;

        static new_from_xml(xml: string): DomainOs;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainOs.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainOs.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainOs.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainOs.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainOs.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainOs.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param enable
         */
        bios_enable_serial(enable: boolean): void;
        /**
         * @param enable
         */
        enable_boot_menu(enable: boolean): void;
        /**
         * @param name
         * @param enable
         */
        enable_firmware_feature(name: string, enable: boolean): void;
        get_arch(): string;
        /**
         * Gets the list of devices attached to `os`. The returned list should be
         * freed with `g_list_free()`.
         * @returns a newly allocated {@link GLib.List} of {@link LibvirtGConfig.DomainOsBootDevice}.
         */
        get_boot_devices(): DomainOsBootDevice[];
        get_firmware(): DomainOsFirmware;
        get_machine(): string;
        get_os_type(): DomainOsType;
        /**
         * @param arch
         */
        set_arch(arch: string): void;
        /**
         * @param boot_devices
         */
        set_boot_devices(boot_devices: DomainOsBootDevice[] | null): void;
        /**
         * @param cmdline The direct boot commandline
         */
        set_cmdline(cmdline?: string | null): void;
        /**
         * @param firmware
         */
        set_firmware(firmware: DomainOsFirmware | null): void;
        /**
         * @param init
         */
        set_init(init?: string | null): void;
        /**
         * @param kernel The kernel path
         */
        set_kernel(kernel?: string | null): void;
        /**
         * @param loader
         */
        set_loader(loader?: string | null): void;
        /**
         * @param machine
         */
        set_machine(machine: string): void;
        /**
         * @param type
         */
        set_os_type(type: DomainOsType | null): void;
        /**
         * @param ramdisk The ramdisk path
         */
        set_ramdisk(ramdisk?: string | null): void;
        /**
         * @param mode
         */
        set_smbios_mode(mode: DomainOsSmBiosMode | null): void;
    }

    namespace DomainParallel {
        // Signal signatures
        interface SignalSignatures extends DomainChardev.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainChardev.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainParallel extends DomainChardev {
        static $gtype: GObject.GType<DomainParallel>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainParallel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainParallel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainParallel;

        static new_from_xml(xml: string): DomainParallel;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainParallel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainParallel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainParallel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainParallel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainParallel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainParallel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace DomainPowerManagement {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainPowerManagement extends Object {
        static $gtype: GObject.GType<DomainPowerManagement>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainPowerManagement.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainPowerManagement.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainPowerManagement;

        static new_from_xml(xml: string): DomainPowerManagement;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainPowerManagement.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainPowerManagement.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainPowerManagement.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainPowerManagement.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainPowerManagement.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainPowerManagement.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param enabled
         */
        set_disk_suspend_enabled(enabled: boolean): void;
        /**
         * @param enabled
         */
        set_mem_suspend_enabled(enabled: boolean): void;
    }

    namespace DomainRedirdev {
        // Signal signatures
        interface SignalSignatures extends DomainChardev.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainChardev.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainRedirdev extends DomainChardev {
        static $gtype: GObject.GType<DomainRedirdev>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainRedirdev.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainRedirdev.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainRedirdev;

        static new_from_xml(xml: string): DomainRedirdev;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainRedirdev.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainRedirdev.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainRedirdev.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainRedirdev.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainRedirdev.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainRedirdev.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param address
         */
        set_address(address?: DomainAddress | null): void;
        /**
         * @param bus
         */
        set_bus(bus: DomainRedirdevBus | null): void;
    }

    namespace DomainSeclabel {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainSeclabel extends Object {
        static $gtype: GObject.GType<DomainSeclabel>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainSeclabel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainSeclabel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainSeclabel;

        static new_from_xml(xml: string): DomainSeclabel;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainSeclabel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainSeclabel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainSeclabel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainSeclabel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainSeclabel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainSeclabel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param label
         */
        set_baselabel(label?: string | null): void;
        /**
         * @param label
         */
        set_label(label?: string | null): void;
        /**
         * @param model
         */
        set_model(model: string): void;
        /**
         * @param type
         */
        set_type(type: DomainSeclabelType | null): void;
    }

    namespace DomainSerial {
        // Signal signatures
        interface SignalSignatures extends DomainChardev.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainChardev.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainSerial extends DomainChardev {
        static $gtype: GObject.GType<DomainSerial>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainSerial.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainSerial.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainSerial;

        static new_from_xml(xml: string): DomainSerial;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainSerial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainSerial.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainSerial.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainSerial.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainSerial.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainSerial.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace DomainSmartcard {
        // Signal signatures
        interface SignalSignatures extends DomainDevice.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class DomainSmartcard extends DomainDevice {
        static $gtype: GObject.GType<DomainSmartcard>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainSmartcard.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainSmartcard.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DomainSmartcard.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainSmartcard.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainSmartcard.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainSmartcard.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainSmartcard.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainSmartcard.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param redirdev
         * @param address
         */
        static set_address(redirdev: DomainRedirdev, address?: DomainAddress | null): void;
    }

    namespace DomainSmartcardHost {
        // Signal signatures
        interface SignalSignatures extends DomainSmartcard.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainSmartcard.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainSmartcardHost extends DomainSmartcard {
        static $gtype: GObject.GType<DomainSmartcardHost>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainSmartcardHost.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainSmartcardHost.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainSmartcardHost;

        static new_from_xml(xml: string): DomainSmartcardHost;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainSmartcardHost.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainSmartcardHost.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainSmartcardHost.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainSmartcardHost.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainSmartcardHost.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainSmartcardHost.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace DomainSmartcardHostCertificates {
        // Signal signatures
        interface SignalSignatures extends DomainSmartcard.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainSmartcard.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainSmartcardHostCertificates extends DomainSmartcard {
        static $gtype: GObject.GType<DomainSmartcardHostCertificates>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainSmartcardHostCertificates.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainSmartcardHostCertificates.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainSmartcardHostCertificates;

        static new_from_xml(xml: string): DomainSmartcardHostCertificates;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainSmartcardHostCertificates.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainSmartcardHostCertificates.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainSmartcardHostCertificates.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainSmartcardHostCertificates.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainSmartcardHostCertificates.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainSmartcardHostCertificates.SignalSignatures[K]> extends [
                any,
                ...infer Q,
            ]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param cert1
         * @param cert2
         * @param cert3
         */
        set_certificates(cert1?: string | null, cert2?: string | null, cert3?: string | null): void;
        /**
         * @param path
         */
        set_database(path?: string | null): void;
    }

    namespace DomainSmartcardPassthrough {
        // Signal signatures
        interface SignalSignatures extends DomainSmartcard.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainSmartcard.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainSmartcardPassthrough extends DomainSmartcard {
        static $gtype: GObject.GType<DomainSmartcardPassthrough>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainSmartcardPassthrough.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainSmartcardPassthrough.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainSmartcardPassthrough;

        static new_from_xml(xml: string): DomainSmartcardPassthrough;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainSmartcardPassthrough.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainSmartcardPassthrough.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainSmartcardPassthrough.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainSmartcardPassthrough.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainSmartcardPassthrough.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainSmartcardPassthrough.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param source
         */
        set_source(source: DomainChardevSource): void;
    }

    namespace DomainSnapshot {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainSnapshot extends Object {
        static $gtype: GObject.GType<DomainSnapshot>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainSnapshot.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainSnapshot.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainSnapshot;

        static new_from_xml(xml: string): DomainSnapshot;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainSnapshot.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainSnapshot.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainSnapshot.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainSnapshot.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainSnapshot.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainSnapshot.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param disk
         */
        add_disk(disk: DomainSnapshotDisk): void;
        get_creation_time(): number;
        get_description(): string;
        /**
         * Gets the list of disks attached to `snapshot`.  The returned list should
         * be freed with `g_list_free()`, after its elements have been unreffed with
         * `g_object_unref()`.
         * @returns a newly allocated {@link GLib.List} of {@link LibvirtGConfig.DomainSnapshotDisk}.
         */
        get_disks(): DomainSnapshotDisk[];
        /**
         * Gets the configuration of the domain `snapshot` is a snapshot of.
         * @returns A {@link LibvirtGConfig.Domain}. The returned object should be unreffed with `g_object_unref()` when no longer needed.
         */
        get_domain(): Domain;
        get_memory_file(): string;
        get_memory_state(): DomainSnapshotMemoryState;
        get_name(): string;
        get_parent(): string;
        get_state(): DomainSnapshotDomainState;
        /**
         * @param description
         */
        set_description(description: string): void;
        /**
         * @param disks
         */
        set_disks(disks: DomainSnapshotDisk[]): void;
        /**
         * @param filename
         */
        set_memory_file(filename: string): void;
        /**
         * @param state
         */
        set_memory_state(state: DomainSnapshotMemoryState | null): void;
        /**
         * @param name
         */
        set_name(name: string): void;
    }

    namespace DomainSnapshotDisk {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainSnapshotDisk extends Object {
        static $gtype: GObject.GType<DomainSnapshotDisk>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainSnapshotDisk.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainSnapshotDisk.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainSnapshotDisk;

        static new_from_xml(xml: string): DomainSnapshotDisk;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainSnapshotDisk.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainSnapshotDisk.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainSnapshotDisk.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainSnapshotDisk.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainSnapshotDisk.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainSnapshotDisk.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_driver_format(): DomainDiskFormat;
        get_name(): string;
        get_snapshot_type(): DomainDiskSnapshotType;
        get_source_file(): string;
        /**
         * @param format
         */
        set_driver_format(format: DomainDiskFormat | null): void;
        /**
         * @param name
         */
        set_name(name: string): void;
        /**
         * @param type
         */
        set_snapshot_type(type: DomainDiskSnapshotType | null): void;
        /**
         * @param filename
         */
        set_source_file(filename: string): void;
    }

    namespace DomainSound {
        // Signal signatures
        interface SignalSignatures extends DomainDevice.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainSound extends DomainDevice {
        static $gtype: GObject.GType<DomainSound>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainSound.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainSound.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainSound;

        static new_from_xml(xml: string): DomainSound;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainSound.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainSound.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainSound.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainSound.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainSound.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainSound.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param model
         */
        set_model(model: DomainSoundModel | null): void;
    }

    namespace DomainTimer {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class DomainTimer extends Object {
        static $gtype: GObject.GType<DomainTimer>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainTimer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainTimer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DomainTimer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainTimer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainTimer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainTimer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainTimer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainTimer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_present(): boolean;
        get_tick_policy(): DomainTimerTickPolicy;
        /**
         * @param present
         */
        set_present(present: boolean): void;
        /**
         * @param policy
         */
        set_tick_policy(policy: DomainTimerTickPolicy | null): void;
    }

    namespace DomainTimerHpet {
        // Signal signatures
        interface SignalSignatures extends DomainTimer.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainTimer.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainTimerHpet extends DomainTimer {
        static $gtype: GObject.GType<DomainTimerHpet>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainTimerHpet.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainTimerHpet.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainTimerHpet;

        static new_from_xml(xml: string): DomainTimerHpet;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainTimerHpet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainTimerHpet.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainTimerHpet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainTimerHpet.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainTimerHpet.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainTimerHpet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace DomainTimerPit {
        // Signal signatures
        interface SignalSignatures extends DomainTimer.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainTimer.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainTimerPit extends DomainTimer {
        static $gtype: GObject.GType<DomainTimerPit>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainTimerPit.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainTimerPit.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainTimerPit;

        static new_from_xml(xml: string): DomainTimerPit;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainTimerPit.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainTimerPit.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainTimerPit.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainTimerPit.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainTimerPit.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainTimerPit.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace DomainTimerRtc {
        // Signal signatures
        interface SignalSignatures extends DomainTimer.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainTimer.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainTimerRtc extends DomainTimer {
        static $gtype: GObject.GType<DomainTimerRtc>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainTimerRtc.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainTimerRtc.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainTimerRtc;

        static new_from_xml(xml: string): DomainTimerRtc;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainTimerRtc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainTimerRtc.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainTimerRtc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainTimerRtc.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainTimerRtc.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainTimerRtc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace DomainVideo {
        // Signal signatures
        interface SignalSignatures extends DomainDevice.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DomainDevice.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DomainVideo extends DomainDevice {
        static $gtype: GObject.GType<DomainVideo>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DomainVideo.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DomainVideo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DomainVideo;

        static new_from_xml(xml: string): DomainVideo;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof DomainVideo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainVideo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DomainVideo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DomainVideo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DomainVideo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DomainVideo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_model(): DomainVideoModel;
        /**
         * @param accel3d
         */
        set_accel3d(accel3d: boolean): void;
        /**
         * @param head_count
         */
        set_heads(head_count: number): void;
        /**
         * @param model
         */
        set_model(model: DomainVideoModel | null): void;
        /**
         * @param kbytes
         */
        set_ram(kbytes: number): void;
        /**
         * @param kbytes
         */
        set_vgamem(kbytes: number): void;
        /**
         * @param kbytes
         */
        set_vram(kbytes: number): void;
    }

    namespace Interface {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Interface extends Object {
        static $gtype: GObject.GType<Interface>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Interface.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Interface.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Interface;

        static new_from_xml(xml: string): Interface;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof Interface.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Interface.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Interface.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Interface.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Interface.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Interface.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Network {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Network extends Object {
        static $gtype: GObject.GType<Network>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Network.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Network.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Network;

        static new_from_xml(xml: string): Network;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof Network.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Network.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Network.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Network.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Network.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Network.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace NetworkFilter {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class NetworkFilter extends Object {
        static $gtype: GObject.GType<NetworkFilter>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: NetworkFilter.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<NetworkFilter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): NetworkFilter;

        static new_from_xml(xml: string): NetworkFilter;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof NetworkFilter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NetworkFilter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof NetworkFilter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NetworkFilter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof NetworkFilter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<NetworkFilter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace NodeDevice {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class NodeDevice extends Object {
        static $gtype: GObject.GType<NodeDevice>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: NodeDevice.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<NodeDevice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): NodeDevice;

        static new_from_xml(xml: string): NodeDevice;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof NodeDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NodeDevice.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof NodeDevice.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NodeDevice.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof NodeDevice.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<NodeDevice.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Object {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            node: any;
            schema: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Object extends GObject.Object {
        static $gtype: GObject.GType<Object>;

        // Properties

        /**
         * @construct-only
         */
        get node(): any;
        /**
         * @construct-only
         */
        get schema(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Object.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Object.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](type: GObject.GType, root_name: string, schema: string): Object;

        static new_from_xml(type: GObject.GType, root_name: string, schema: string, xml: string): Object;

        // Signals

        /** @signal */
        connect<K extends keyof Object.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Object.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Object.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Object.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static error_quark(): GLib.Quark;

        // Methods

        get_schema(): string;
        to_xml(): string;
        validate(): void;
    }

    namespace Secret {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Secret extends Object {
        static $gtype: GObject.GType<Secret>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Secret.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Secret.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Secret;

        static new_from_xml(xml: string): Secret;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof Secret.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Secret.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Secret.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Secret.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Secret.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Secret.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace StoragePermissions {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class StoragePermissions extends Object {
        static $gtype: GObject.GType<StoragePermissions>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StoragePermissions.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StoragePermissions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StoragePermissions;

        static new_from_xml(xml: string): StoragePermissions;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof StoragePermissions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StoragePermissions.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StoragePermissions.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StoragePermissions.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StoragePermissions.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StoragePermissions.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

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
        /**
         * @param group
         */
        set_group(group: number): void;
        /**
         * @param label
         */
        set_label(label?: string | null): void;
        /**
         * @param mode
         */
        set_mode(mode: number): void;
        /**
         * @param owner
         */
        set_owner(owner: number): void;
    }

    namespace StoragePool {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class StoragePool extends Object {
        static $gtype: GObject.GType<StoragePool>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StoragePool.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StoragePool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StoragePool;

        static new_from_xml(xml: string): StoragePool;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof StoragePool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StoragePool.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StoragePool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StoragePool.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StoragePool.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StoragePool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

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
         * @returns name of `pool`.
         */
        get_name(): string;
        /**
         * Gets the type of the pool.
         * @returns `Gname` of `pool`.
         */
        get_pool_type(): StoragePoolType;
        /**
         * Gets the source for `pool`
         * @returns a new {@link LibvirtGConfig.StoragePoolSource} instance.
         */
        get_source(): StoragePoolSource;
        /**
         * Gets the target for `pool`
         * @returns a new {@link LibvirtGConfig.StoragePoolTarget} instance.
         */
        get_target(): StoragePoolTarget;
        /**
         * Gets the unique identifier for `pool`.
         * @returns unique identifier for `pool`.
         */
        get_uuid(): string;
        /**
         * @param allocation
         */
        set_allocation(allocation: number): void;
        /**
         * @param available
         */
        set_available(available: number): void;
        /**
         * @param capacity
         */
        set_capacity(capacity: number): void;
        /**
         * @param name
         */
        set_name(name?: string | null): void;
        /**
         * @param type
         */
        set_pool_type(type: StoragePoolType | null): void;
        /**
         * @param source
         */
        set_source(source?: StoragePoolSource | null): void;
        /**
         * @param target
         */
        set_target(target?: StoragePoolTarget | null): void;
        /**
         * @param uuid
         */
        set_uuid(uuid?: string | null): void;
    }

    namespace StoragePoolSource {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class StoragePoolSource extends Object {
        static $gtype: GObject.GType<StoragePoolSource>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StoragePoolSource.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StoragePoolSource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StoragePoolSource;

        static new_from_xml(xml: string): StoragePoolSource;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof StoragePoolSource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StoragePoolSource.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StoragePoolSource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StoragePoolSource.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StoragePoolSource.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StoragePoolSource.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

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
         * @returns name of the element used by `source`
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
        /**
         * @param adapter
         */
        set_adapter(adapter: string): void;
        /**
         * @param device_path
         */
        set_device_path(device_path: string): void;
        /**
         * @param directory
         */
        set_directory(directory: string): void;
        /**
         * @param format
         */
        set_format(format: string): void;
        /**
         * @param host
         */
        set_host(host: string): void;
        /**
         * @param name
         */
        set_name(name?: string | null): void;
        /**
         * @param product
         */
        set_product(product: string): void;
        /**
         * @param vendor
         */
        set_vendor(vendor: string): void;
    }

    namespace StoragePoolTarget {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class StoragePoolTarget extends Object {
        static $gtype: GObject.GType<StoragePoolTarget>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StoragePoolTarget.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StoragePoolTarget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StoragePoolTarget;

        static new_from_xml(xml: string): StoragePoolTarget;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof StoragePoolTarget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StoragePoolTarget.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StoragePoolTarget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StoragePoolTarget.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StoragePoolTarget.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StoragePoolTarget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Provides the location at which the storage pool associated with `target`
         * will be mapped into the local filesystem namespace.
         * @returns local filesystem path the storage pool is mapped at.
         */
        get_path(): string;
        /**
         * Gets the permissions associated with `target`
         * @returns a new `GVirConfigStoragePoolPermissions` instance.
         */
        get_permissions(): StoragePermissions;
        /**
         * @param path
         */
        set_path(path?: string | null): void;
        /**
         * @param perms
         */
        set_permissions(perms: StoragePermissions): void;
    }

    namespace StorageVol {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class StorageVol extends Object {
        static $gtype: GObject.GType<StorageVol>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StorageVol.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StorageVol.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StorageVol;

        static new_from_xml(xml: string): StorageVol;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof StorageVol.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StorageVol.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StorageVol.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StorageVol.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StorageVol.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StorageVol.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param allocation
         */
        set_allocation(allocation: number): void;
        /**
         * @param backing_store
         */
        set_backing_store(backing_store?: StorageVolBackingStore | null): void;
        /**
         * @param capacity
         */
        set_capacity(capacity: number): void;
        /**
         * @param name
         */
        set_name(name?: string | null): void;
        /**
         * @param target
         */
        set_target(target?: StorageVolTarget | null): void;
    }

    namespace StorageVolBackingStore {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class StorageVolBackingStore extends Object {
        static $gtype: GObject.GType<StorageVolBackingStore>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StorageVolBackingStore.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StorageVolBackingStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StorageVolBackingStore;

        static new_from_xml(xml: string): StorageVolBackingStore;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof StorageVolBackingStore.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StorageVolBackingStore.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StorageVolBackingStore.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StorageVolBackingStore.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StorageVolBackingStore.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StorageVolBackingStore.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param format
         */
        set_format(format: string): void;
        /**
         * @param path
         */
        set_path(path?: string | null): void;
    }

    namespace StorageVolTarget {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {
            'notify::node': (pspec: GObject.ParamSpec) => void;
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class StorageVolTarget extends Object {
        static $gtype: GObject.GType<StorageVolTarget>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StorageVolTarget.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StorageVolTarget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StorageVolTarget;

        static new_from_xml(xml: string): StorageVolTarget;
        // Conflicted with LibvirtGConfig.Object.new_from_xml

        static new_from_xml(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof StorageVolTarget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StorageVolTarget.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StorageVolTarget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StorageVolTarget.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StorageVolTarget.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StorageVolTarget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param compat
         */
        set_compat(compat?: string | null): void;
        /**
         * @param features
         */
        set_features(features: number): void;
        /**
         * @param format
         */
        set_format(format: string): void;
        /**
         * @param perms
         */
        set_permissions(perms?: StoragePermissions | null): void;
    }

    /**
     * @gir-type Alias
     */
    type CapabilitiesClass = typeof Capabilities;
    /**
     * @gir-type Alias
     */
    type CapabilitiesCpuClass = typeof CapabilitiesCpu;
    /**
     * @gir-type Alias
     */
    type CapabilitiesCpuFeatureClass = typeof CapabilitiesCpuFeature;
    /**
     * @gir-type Struct
     */
    abstract class CapabilitiesCpuFeaturePrivate {
        static $gtype: GObject.GType<CapabilitiesCpuFeaturePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type CapabilitiesCpuModelClass = typeof CapabilitiesCpuModel;
    /**
     * @gir-type Struct
     */
    abstract class CapabilitiesCpuModelPrivate {
        static $gtype: GObject.GType<CapabilitiesCpuModelPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class CapabilitiesCpuPrivate {
        static $gtype: GObject.GType<CapabilitiesCpuPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type CapabilitiesCpuTopologyClass = typeof CapabilitiesCpuTopology;
    /**
     * @gir-type Struct
     */
    abstract class CapabilitiesCpuTopologyPrivate {
        static $gtype: GObject.GType<CapabilitiesCpuTopologyPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type CapabilitiesGuestArchClass = typeof CapabilitiesGuestArch;
    /**
     * @gir-type Struct
     */
    abstract class CapabilitiesGuestArchPrivate {
        static $gtype: GObject.GType<CapabilitiesGuestArchPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type CapabilitiesGuestClass = typeof CapabilitiesGuest;
    /**
     * @gir-type Alias
     */
    type CapabilitiesGuestDomainClass = typeof CapabilitiesGuestDomain;
    /**
     * @gir-type Struct
     */
    abstract class CapabilitiesGuestDomainPrivate {
        static $gtype: GObject.GType<CapabilitiesGuestDomainPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type CapabilitiesGuestFeatureClass = typeof CapabilitiesGuestFeature;
    /**
     * @gir-type Struct
     */
    abstract class CapabilitiesGuestFeaturePrivate {
        static $gtype: GObject.GType<CapabilitiesGuestFeaturePrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class CapabilitiesGuestPrivate {
        static $gtype: GObject.GType<CapabilitiesGuestPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type CapabilitiesHostClass = typeof CapabilitiesHost;
    /**
     * @gir-type Struct
     */
    abstract class CapabilitiesHostPrivate {
        static $gtype: GObject.GType<CapabilitiesHostPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type CapabilitiesHostSecModelClass = typeof CapabilitiesHostSecModel;
    /**
     * @gir-type Struct
     */
    abstract class CapabilitiesHostSecModelPrivate {
        static $gtype: GObject.GType<CapabilitiesHostSecModelPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class CapabilitiesPrivate {
        static $gtype: GObject.GType<CapabilitiesPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainAddressClass = typeof DomainAddress;
    /**
     * @gir-type Alias
     */
    type DomainAddressPciClass = typeof DomainAddressPci;
    /**
     * @gir-type Struct
     */
    abstract class DomainAddressPciPrivate {
        static $gtype: GObject.GType<DomainAddressPciPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class DomainAddressPrivate {
        static $gtype: GObject.GType<DomainAddressPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainAddressUsbClass = typeof DomainAddressUsb;
    /**
     * @gir-type Struct
     */
    abstract class DomainAddressUsbPrivate {
        static $gtype: GObject.GType<DomainAddressUsbPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainAudioClass = typeof DomainAudio;
    /**
     * @gir-type Struct
     */
    abstract class DomainAudioPrivate {
        static $gtype: GObject.GType<DomainAudioPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainCapabilitiesClass = typeof DomainCapabilities;
    /**
     * @gir-type Alias
     */
    type DomainCapabilitiesOsClass = typeof DomainCapabilitiesOs;
    /**
     * @gir-type Struct
     */
    abstract class DomainCapabilitiesOsPrivate {
        static $gtype: GObject.GType<DomainCapabilitiesOsPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class DomainCapabilitiesPrivate {
        static $gtype: GObject.GType<DomainCapabilitiesPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainChannelClass = typeof DomainChannel;
    /**
     * @gir-type Struct
     */
    abstract class DomainChannelPrivate {
        static $gtype: GObject.GType<DomainChannelPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainChardevClass = typeof DomainChardev;
    /**
     * @gir-type Struct
     */
    abstract class DomainChardevPrivate {
        static $gtype: GObject.GType<DomainChardevPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainChardevSourceClass = typeof DomainChardevSource;
    /**
     * @gir-type Struct
     */
    abstract class DomainChardevSourcePrivate {
        static $gtype: GObject.GType<DomainChardevSourcePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainChardevSourcePtyClass = typeof DomainChardevSourcePty;
    /**
     * @gir-type Struct
     */
    abstract class DomainChardevSourcePtyPrivate {
        static $gtype: GObject.GType<DomainChardevSourcePtyPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainChardevSourceSpicePortClass = typeof DomainChardevSourceSpicePort;
    /**
     * @gir-type Struct
     */
    abstract class DomainChardevSourceSpicePortPrivate {
        static $gtype: GObject.GType<DomainChardevSourceSpicePortPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainChardevSourceSpiceVmcClass = typeof DomainChardevSourceSpiceVmc;
    /**
     * @gir-type Struct
     */
    abstract class DomainChardevSourceSpiceVmcPrivate {
        static $gtype: GObject.GType<DomainChardevSourceSpiceVmcPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainChardevSourceUnixClass = typeof DomainChardevSourceUnix;
    /**
     * @gir-type Struct
     */
    abstract class DomainChardevSourceUnixPrivate {
        static $gtype: GObject.GType<DomainChardevSourceUnixPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainClass = typeof Domain;
    /**
     * @gir-type Alias
     */
    type DomainClockClass = typeof DomainClock;
    /**
     * @gir-type Struct
     */
    abstract class DomainClockPrivate {
        static $gtype: GObject.GType<DomainClockPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainConsoleClass = typeof DomainConsole;
    /**
     * @gir-type Struct
     */
    abstract class DomainConsolePrivate {
        static $gtype: GObject.GType<DomainConsolePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainControllerClass = typeof DomainController;
    /**
     * @gir-type Struct
     */
    abstract class DomainControllerPrivate {
        static $gtype: GObject.GType<DomainControllerPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainControllerUsbClass = typeof DomainControllerUsb;
    /**
     * @gir-type Struct
     */
    abstract class DomainControllerUsbPrivate {
        static $gtype: GObject.GType<DomainControllerUsbPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainCpuClass = typeof DomainCpu;
    /**
     * @gir-type Alias
     */
    type DomainCpuFeatureClass = typeof DomainCpuFeature;
    /**
     * @gir-type Struct
     */
    abstract class DomainCpuFeaturePrivate {
        static $gtype: GObject.GType<DomainCpuFeaturePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainCpuModelClass = typeof DomainCpuModel;
    /**
     * @gir-type Struct
     */
    abstract class DomainCpuModelPrivate {
        static $gtype: GObject.GType<DomainCpuModelPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class DomainCpuPrivate {
        static $gtype: GObject.GType<DomainCpuPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainDeviceClass = typeof DomainDevice;
    /**
     * @gir-type Struct
     */
    abstract class DomainDevicePrivate {
        static $gtype: GObject.GType<DomainDevicePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainDiskClass = typeof DomainDisk;
    /**
     * @gir-type Alias
     */
    type DomainDiskDriverClass = typeof DomainDiskDriver;
    /**
     * @gir-type Struct
     */
    abstract class DomainDiskDriverPrivate {
        static $gtype: GObject.GType<DomainDiskDriverPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class DomainDiskPrivate {
        static $gtype: GObject.GType<DomainDiskPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainFilesysClass = typeof DomainFilesys;
    /**
     * @gir-type Struct
     */
    abstract class DomainFilesysPrivate {
        static $gtype: GObject.GType<DomainFilesysPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainGraphicsClass = typeof DomainGraphics;
    /**
     * @gir-type Alias
     */
    type DomainGraphicsDBusClass = typeof DomainGraphicsDBus;
    /**
     * @gir-type Struct
     */
    abstract class DomainGraphicsDBusPrivate {
        static $gtype: GObject.GType<DomainGraphicsDBusPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainGraphicsDesktopClass = typeof DomainGraphicsDesktop;
    /**
     * @gir-type Struct
     */
    abstract class DomainGraphicsDesktopPrivate {
        static $gtype: GObject.GType<DomainGraphicsDesktopPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class DomainGraphicsPrivate {
        static $gtype: GObject.GType<DomainGraphicsPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainGraphicsRdpClass = typeof DomainGraphicsRdp;
    /**
     * @gir-type Struct
     */
    abstract class DomainGraphicsRdpPrivate {
        static $gtype: GObject.GType<DomainGraphicsRdpPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainGraphicsSdlClass = typeof DomainGraphicsSdl;
    /**
     * @gir-type Struct
     */
    abstract class DomainGraphicsSdlPrivate {
        static $gtype: GObject.GType<DomainGraphicsSdlPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainGraphicsSpiceClass = typeof DomainGraphicsSpice;
    /**
     * @gir-type Struct
     */
    abstract class DomainGraphicsSpicePrivate {
        static $gtype: GObject.GType<DomainGraphicsSpicePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainGraphicsVncClass = typeof DomainGraphicsVnc;
    /**
     * @gir-type Struct
     */
    abstract class DomainGraphicsVncPrivate {
        static $gtype: GObject.GType<DomainGraphicsVncPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainHostdevClass = typeof DomainHostdev;
    /**
     * @gir-type Alias
     */
    type DomainHostdevPciClass = typeof DomainHostdevPci;
    /**
     * @gir-type Struct
     */
    abstract class DomainHostdevPciPrivate {
        static $gtype: GObject.GType<DomainHostdevPciPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class DomainHostdevPrivate {
        static $gtype: GObject.GType<DomainHostdevPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainInputClass = typeof DomainInput;
    /**
     * @gir-type Struct
     */
    abstract class DomainInputPrivate {
        static $gtype: GObject.GType<DomainInputPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainInterfaceBridgeClass = typeof DomainInterfaceBridge;
    /**
     * @gir-type Struct
     */
    abstract class DomainInterfaceBridgePrivate {
        static $gtype: GObject.GType<DomainInterfaceBridgePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainInterfaceClass = typeof DomainInterface;
    /**
     * @gir-type Alias
     */
    type DomainInterfaceFilterrefClass = typeof DomainInterfaceFilterref;
    /**
     * @gir-type Alias
     */
    type DomainInterfaceFilterrefParameterClass = typeof DomainInterfaceFilterrefParameter;
    /**
     * @gir-type Struct
     */
    abstract class DomainInterfaceFilterrefParameterPrivate {
        static $gtype: GObject.GType<DomainInterfaceFilterrefParameterPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class DomainInterfaceFilterrefPrivate {
        static $gtype: GObject.GType<DomainInterfaceFilterrefPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainInterfaceNetworkClass = typeof DomainInterfaceNetwork;
    /**
     * @gir-type Struct
     */
    abstract class DomainInterfaceNetworkPrivate {
        static $gtype: GObject.GType<DomainInterfaceNetworkPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class DomainInterfacePrivate {
        static $gtype: GObject.GType<DomainInterfacePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainInterfaceUserClass = typeof DomainInterfaceUser;
    /**
     * @gir-type Struct
     */
    abstract class DomainInterfaceUserPrivate {
        static $gtype: GObject.GType<DomainInterfaceUserPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainMemballoonClass = typeof DomainMemballoon;
    /**
     * @gir-type Struct
     */
    abstract class DomainMemballoonPrivate {
        static $gtype: GObject.GType<DomainMemballoonPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainOsClass = typeof DomainOs;
    /**
     * @gir-type Struct
     */
    abstract class DomainOsPrivate {
        static $gtype: GObject.GType<DomainOsPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainParallelClass = typeof DomainParallel;
    /**
     * @gir-type Struct
     */
    abstract class DomainParallelPrivate {
        static $gtype: GObject.GType<DomainParallelPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainPowerManagementClass = typeof DomainPowerManagement;
    /**
     * @gir-type Struct
     */
    abstract class DomainPowerManagementPrivate {
        static $gtype: GObject.GType<DomainPowerManagementPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class DomainPrivate {
        static $gtype: GObject.GType<DomainPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainRedirdevClass = typeof DomainRedirdev;
    /**
     * @gir-type Struct
     */
    abstract class DomainRedirdevPrivate {
        static $gtype: GObject.GType<DomainRedirdevPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainSeclabelClass = typeof DomainSeclabel;
    /**
     * @gir-type Struct
     */
    abstract class DomainSeclabelPrivate {
        static $gtype: GObject.GType<DomainSeclabelPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainSerialClass = typeof DomainSerial;
    /**
     * @gir-type Struct
     */
    abstract class DomainSerialPrivate {
        static $gtype: GObject.GType<DomainSerialPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainSmartcardClass = typeof DomainSmartcard;
    /**
     * @gir-type Alias
     */
    type DomainSmartcardHostCertificatesClass = typeof DomainSmartcardHostCertificates;
    /**
     * @gir-type Struct
     */
    abstract class DomainSmartcardHostCertificatesPrivate {
        static $gtype: GObject.GType<DomainSmartcardHostCertificatesPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainSmartcardHostClass = typeof DomainSmartcardHost;
    /**
     * @gir-type Struct
     */
    abstract class DomainSmartcardHostPrivate {
        static $gtype: GObject.GType<DomainSmartcardHostPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainSmartcardPassthroughClass = typeof DomainSmartcardPassthrough;
    /**
     * @gir-type Struct
     */
    abstract class DomainSmartcardPassthroughPrivate {
        static $gtype: GObject.GType<DomainSmartcardPassthroughPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class DomainSmartcardPrivate {
        static $gtype: GObject.GType<DomainSmartcardPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainSnapshotClass = typeof DomainSnapshot;
    /**
     * @gir-type Alias
     */
    type DomainSnapshotDiskClass = typeof DomainSnapshotDisk;
    /**
     * @gir-type Struct
     */
    abstract class DomainSnapshotDiskPrivate {
        static $gtype: GObject.GType<DomainSnapshotDiskPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class DomainSnapshotPrivate {
        static $gtype: GObject.GType<DomainSnapshotPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainSoundClass = typeof DomainSound;
    /**
     * @gir-type Struct
     */
    abstract class DomainSoundPrivate {
        static $gtype: GObject.GType<DomainSoundPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainTimerClass = typeof DomainTimer;
    /**
     * @gir-type Alias
     */
    type DomainTimerHpetClass = typeof DomainTimerHpet;
    /**
     * @gir-type Struct
     */
    abstract class DomainTimerHpetPrivate {
        static $gtype: GObject.GType<DomainTimerHpetPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainTimerPitClass = typeof DomainTimerPit;
    /**
     * @gir-type Struct
     */
    abstract class DomainTimerPitPrivate {
        static $gtype: GObject.GType<DomainTimerPitPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class DomainTimerPrivate {
        static $gtype: GObject.GType<DomainTimerPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainTimerRtcClass = typeof DomainTimerRtc;
    /**
     * @gir-type Struct
     */
    abstract class DomainTimerRtcPrivate {
        static $gtype: GObject.GType<DomainTimerRtcPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DomainVideoClass = typeof DomainVideo;
    /**
     * @gir-type Struct
     */
    abstract class DomainVideoPrivate {
        static $gtype: GObject.GType<DomainVideoPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type InterfaceClass = typeof Interface;
    /**
     * @gir-type Struct
     */
    abstract class InterfacePrivate {
        static $gtype: GObject.GType<InterfacePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type NetworkClass = typeof Network;
    /**
     * @gir-type Alias
     */
    type NetworkFilterClass = typeof NetworkFilter;
    /**
     * @gir-type Struct
     */
    abstract class NetworkFilterPrivate {
        static $gtype: GObject.GType<NetworkFilterPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class NetworkPrivate {
        static $gtype: GObject.GType<NetworkPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type NodeDeviceClass = typeof NodeDevice;
    /**
     * @gir-type Struct
     */
    abstract class NodeDevicePrivate {
        static $gtype: GObject.GType<NodeDevicePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ObjectClass = typeof Object;
    /**
     * @gir-type Struct
     */
    abstract class ObjectPrivate {
        static $gtype: GObject.GType<ObjectPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type SecretClass = typeof Secret;
    /**
     * @gir-type Struct
     */
    abstract class SecretPrivate {
        static $gtype: GObject.GType<SecretPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type StoragePermissionsClass = typeof StoragePermissions;
    /**
     * @gir-type Struct
     */
    abstract class StoragePermissionsPrivate {
        static $gtype: GObject.GType<StoragePermissionsPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type StoragePoolClass = typeof StoragePool;
    /**
     * @gir-type Struct
     */
    abstract class StoragePoolPrivate {
        static $gtype: GObject.GType<StoragePoolPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type StoragePoolSourceClass = typeof StoragePoolSource;
    /**
     * @gir-type Struct
     */
    abstract class StoragePoolSourcePrivate {
        static $gtype: GObject.GType<StoragePoolSourcePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type StoragePoolTargetClass = typeof StoragePoolTarget;
    /**
     * @gir-type Struct
     */
    abstract class StoragePoolTargetPrivate {
        static $gtype: GObject.GType<StoragePoolTargetPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type StorageVolBackingStoreClass = typeof StorageVolBackingStore;
    /**
     * @gir-type Struct
     */
    abstract class StorageVolBackingStorePrivate {
        static $gtype: GObject.GType<StorageVolBackingStorePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type StorageVolClass = typeof StorageVol;
    /**
     * @gir-type Struct
     */
    abstract class StorageVolPrivate {
        static $gtype: GObject.GType<StorageVolPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type StorageVolTargetClass = typeof StorageVolTarget;
    /**
     * @gir-type Struct
     */
    abstract class StorageVolTargetPrivate {
        static $gtype: GObject.GType<StorageVolTargetPrivate>;
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
