// The widget vocabulary of LibvirtGConfig-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: LibvirtGConfig-1.0 — prop(s) no TypeScript value satisfies: LibvirtGConfig.Object.node
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'LibvirtGConfig',
    version: '1.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: ['LibvirtGConfig.Object.node'],
    unresolvedProps: [],
    identifierPrefixes: ['GVirConfig'],
    requiredVocabularies: ['@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    GVirConfigDomain: ['current-memory', 'description', 'features', 'memory', 'name', 'title', 'uuid', 'vcpu'],
    GVirConfigObject: ['node', 'schema'],
};

export const OWN_SIGNALS = {};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    GVirConfigCapabilities: ['GVirConfigCapabilities', 'GVirConfigObject', 'GObject'],
    GVirConfigCapabilitiesCpu: ['GVirConfigCapabilitiesCpu', 'GVirConfigObject', 'GObject'],
    GVirConfigCapabilitiesCpuFeature: ['GVirConfigCapabilitiesCpuFeature', 'GVirConfigObject', 'GObject'],
    GVirConfigCapabilitiesCpuModel: ['GVirConfigCapabilitiesCpuModel', 'GVirConfigObject', 'GObject'],
    GVirConfigCapabilitiesCpuTopology: ['GVirConfigCapabilitiesCpuTopology', 'GVirConfigObject', 'GObject'],
    GVirConfigCapabilitiesGuest: ['GVirConfigCapabilitiesGuest', 'GVirConfigObject', 'GObject'],
    GVirConfigCapabilitiesGuestArch: ['GVirConfigCapabilitiesGuestArch', 'GVirConfigObject', 'GObject'],
    GVirConfigCapabilitiesGuestDomain: ['GVirConfigCapabilitiesGuestDomain', 'GVirConfigObject', 'GObject'],
    GVirConfigCapabilitiesGuestFeature: ['GVirConfigCapabilitiesGuestFeature', 'GVirConfigObject', 'GObject'],
    GVirConfigCapabilitiesHost: ['GVirConfigCapabilitiesHost', 'GVirConfigObject', 'GObject'],
    GVirConfigCapabilitiesHostSecModel: ['GVirConfigCapabilitiesHostSecModel', 'GVirConfigObject', 'GObject'],
    GVirConfigDomain: ['GVirConfigDomain', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainAddressPci: ['GVirConfigDomainAddressPci', 'GVirConfigDomainAddress', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainAddressUsb: ['GVirConfigDomainAddressUsb', 'GVirConfigDomainAddress', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainAudio: ['GVirConfigDomainAudio', 'GVirConfigDomainDevice', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainCapabilities: ['GVirConfigDomainCapabilities', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainCapabilitiesOs: ['GVirConfigDomainCapabilitiesOs', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainChannel: ['GVirConfigDomainChannel', 'GVirConfigDomainChardev', 'GVirConfigDomainDevice', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainChardevSourcePty: ['GVirConfigDomainChardevSourcePty', 'GVirConfigDomainChardevSource', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainChardevSourceSpicePort: ['GVirConfigDomainChardevSourceSpicePort', 'GVirConfigDomainChardevSource', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainChardevSourceSpiceVmc: ['GVirConfigDomainChardevSourceSpiceVmc', 'GVirConfigDomainChardevSource', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainChardevSourceUnix: ['GVirConfigDomainChardevSourceUnix', 'GVirConfigDomainChardevSource', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainClock: ['GVirConfigDomainClock', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainConsole: ['GVirConfigDomainConsole', 'GVirConfigDomainChardev', 'GVirConfigDomainDevice', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainControllerUsb: ['GVirConfigDomainControllerUsb', 'GVirConfigDomainController', 'GVirConfigDomainDevice', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainCpu: ['GVirConfigDomainCpu', 'GVirConfigCapabilitiesCpu', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainCpuFeature: ['GVirConfigDomainCpuFeature', 'GVirConfigCapabilitiesCpuFeature', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainCpuModel: ['GVirConfigDomainCpuModel', 'GVirConfigCapabilitiesCpuModel', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainDevice: ['GVirConfigDomainDevice', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainDisk: ['GVirConfigDomainDisk', 'GVirConfigDomainDevice', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainDiskDriver: ['GVirConfigDomainDiskDriver', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainFilesys: ['GVirConfigDomainFilesys', 'GVirConfigDomainDevice', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainGraphicsDBus: ['GVirConfigDomainGraphicsDBus', 'GVirConfigDomainGraphics', 'GVirConfigDomainDevice', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainGraphicsDesktop: ['GVirConfigDomainGraphicsDesktop', 'GVirConfigDomainGraphics', 'GVirConfigDomainDevice', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainGraphicsRdp: ['GVirConfigDomainGraphicsRdp', 'GVirConfigDomainGraphics', 'GVirConfigDomainDevice', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainGraphicsSdl: ['GVirConfigDomainGraphicsSdl', 'GVirConfigDomainGraphics', 'GVirConfigDomainDevice', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainGraphicsSpice: ['GVirConfigDomainGraphicsSpice', 'GVirConfigDomainGraphics', 'GVirConfigDomainDevice', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainGraphicsVnc: ['GVirConfigDomainGraphicsVnc', 'GVirConfigDomainGraphics', 'GVirConfigDomainDevice', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainHostdevPci: ['GVirConfigDomainHostdevPci', 'GVirConfigDomainHostdev', 'GVirConfigDomainDevice', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainInput: ['GVirConfigDomainInput', 'GVirConfigDomainDevice', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainInterfaceBridge: ['GVirConfigDomainInterfaceBridge', 'GVirConfigDomainInterface', 'GVirConfigDomainDevice', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainInterfaceFilterref: ['GVirConfigDomainInterfaceFilterref', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainInterfaceFilterrefParameter: ['GVirConfigDomainInterfaceFilterrefParameter', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainInterfaceNetwork: ['GVirConfigDomainInterfaceNetwork', 'GVirConfigDomainInterface', 'GVirConfigDomainDevice', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainInterfaceUser: ['GVirConfigDomainInterfaceUser', 'GVirConfigDomainInterface', 'GVirConfigDomainDevice', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainMemballoon: ['GVirConfigDomainMemballoon', 'GVirConfigDomainDevice', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainOs: ['GVirConfigDomainOs', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainParallel: ['GVirConfigDomainParallel', 'GVirConfigDomainChardev', 'GVirConfigDomainDevice', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainPowerManagement: ['GVirConfigDomainPowerManagement', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainRedirdev: ['GVirConfigDomainRedirdev', 'GVirConfigDomainChardev', 'GVirConfigDomainDevice', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainSeclabel: ['GVirConfigDomainSeclabel', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainSerial: ['GVirConfigDomainSerial', 'GVirConfigDomainChardev', 'GVirConfigDomainDevice', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainSmartcardHost: ['GVirConfigDomainSmartcardHost', 'GVirConfigDomainSmartcard', 'GVirConfigDomainDevice', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainSmartcardHostCertificates: ['GVirConfigDomainSmartcardHostCertificates', 'GVirConfigDomainSmartcard', 'GVirConfigDomainDevice', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainSmartcardPassthrough: ['GVirConfigDomainSmartcardPassthrough', 'GVirConfigDomainSmartcard', 'GVirConfigDomainDevice', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainSnapshot: ['GVirConfigDomainSnapshot', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainSnapshotDisk: ['GVirConfigDomainSnapshotDisk', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainSound: ['GVirConfigDomainSound', 'GVirConfigDomainDevice', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainTimerHpet: ['GVirConfigDomainTimerHpet', 'GVirConfigDomainTimer', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainTimerPit: ['GVirConfigDomainTimerPit', 'GVirConfigDomainTimer', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainTimerRtc: ['GVirConfigDomainTimerRtc', 'GVirConfigDomainTimer', 'GVirConfigObject', 'GObject'],
    GVirConfigDomainVideo: ['GVirConfigDomainVideo', 'GVirConfigDomainDevice', 'GVirConfigObject', 'GObject'],
    GVirConfigInterface: ['GVirConfigInterface', 'GVirConfigObject', 'GObject'],
    GVirConfigNetwork: ['GVirConfigNetwork', 'GVirConfigObject', 'GObject'],
    GVirConfigNetworkFilter: ['GVirConfigNetworkFilter', 'GVirConfigObject', 'GObject'],
    GVirConfigNodeDevice: ['GVirConfigNodeDevice', 'GVirConfigObject', 'GObject'],
    GVirConfigObject: ['GVirConfigObject', 'GObject'],
    GVirConfigSecret: ['GVirConfigSecret', 'GVirConfigObject', 'GObject'],
    GVirConfigStoragePermissions: ['GVirConfigStoragePermissions', 'GVirConfigObject', 'GObject'],
    GVirConfigStoragePool: ['GVirConfigStoragePool', 'GVirConfigObject', 'GObject'],
    GVirConfigStoragePoolSource: ['GVirConfigStoragePoolSource', 'GVirConfigObject', 'GObject'],
    GVirConfigStoragePoolTarget: ['GVirConfigStoragePoolTarget', 'GVirConfigObject', 'GObject'],
    GVirConfigStorageVol: ['GVirConfigStorageVol', 'GVirConfigObject', 'GObject'],
    GVirConfigStorageVolBackingStore: ['GVirConfigStorageVolBackingStore', 'GVirConfigObject', 'GObject'],
    GVirConfigStorageVolTarget: ['GVirConfigStorageVolTarget', 'GVirConfigObject', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GVirConfigDomainAudioBackend: ['none', 'alsa', 'coreaudio', 'jack', 'oss', 'pulseaudio', 'sdl', 'spice', 'file'],
    GVirConfigDomainChannelTargetType: ['guestfwd', 'virtio', 'spiceport'],
    GVirConfigDomainClockOffset: ['utc', 'localtime', 'timezone', 'variable'],
    GVirConfigDomainConsoleTargetType: ['xen', 'serial', 'uml', 'virtio', 'lxc', 'openvz'],
    GVirConfigDomainControllerUsbModel: ['piix3-uhci', 'piix4-uhci', 'ehci', 'ich9-ehci1', 'ich9-uhci1', 'ich9-uhci2', 'ich9-uhci3', 'vt82c686b-uhci', 'pci-ohci', 'qemu-xhci'],
    GVirConfigDomainCpuFeaturePolicy: ['force', 'require', 'optional', 'disable', 'forbid'],
    GVirConfigDomainCpuMatchPolicy: ['minimum', 'exact', 'strict'],
    GVirConfigDomainCpuMode: ['custom', 'host-model', 'host-passthrough'],
    GVirConfigDomainDiskBus: ['ide', 'fdc', 'scsi', 'virtio', 'xen', 'usb', 'uml', 'sata'],
    GVirConfigDomainDiskCacheType: ['default', 'none', 'writethrough', 'writeback', 'directsync', 'unsafe'],
    GVirConfigDomainDiskDriverDiscard: ['unmap', 'ignore'],
    GVirConfigDomainDiskDriverErrorPolicy: ['stop', 'report', 'ignore', 'enospace'],
    GVirConfigDomainDiskDriverIoPolicy: ['threads', 'native'],
    GVirConfigDomainDiskFormat: ['raw', 'dir', 'bochs', 'cloop', 'cow', 'dmg', 'iso', 'qcow', 'qcow2', 'qed', 'vmdk', 'vpc', 'fat', 'vhd'],
    GVirConfigDomainDiskGuestDeviceType: ['disk', 'floppy', 'cdrom'],
    GVirConfigDomainDiskSnapshotType: ['no', 'internal', 'external'],
    GVirConfigDomainDiskStartupPolicy: ['mandatory', 'requisite', 'optional'],
    GVirConfigDomainDiskType: ['file', 'block', 'dir', 'network'],
    GVirConfigDomainFilesysAccessType: ['passthrough', 'mapped', 'squash'],
    GVirConfigDomainFilesysDriverType: ['default', 'path', 'handle', 'loop', 'nbd', 'ploop'],
    GVirConfigDomainFilesysType: ['mount', 'block', 'file', 'template', 'ram', 'bind'],
    GVirConfigDomainGraphicsSpiceImageCompression: ['auto_glz', 'auto_lz', 'quic', 'glz', 'lz', 'off'],
    GVirConfigDomainInputBus: ['ps2', 'usb', 'xen'],
    GVirConfigDomainInputDeviceType: ['mouse', 'tablet', 'keyboard'],
    GVirConfigDomainInterfaceLinkState: ['default', 'up', 'down'],
    GVirConfigDomainLifecycleAction: ['destroy', 'restart', 'preserve', 'rename-restart', 'coredump-destroy', 'coredump-restart'],
    GVirConfigDomainLifecycleEvent: ['on_poweroff', 'on_reboot', 'on_crash'],
    GVirConfigDomainMemballoonModel: ['none', 'virtio'],
    GVirConfigDomainOsBootDevice: ['fd', 'hd', 'cdrom', 'network'],
    GVirConfigDomainOsFirmware: ['bios', 'efi'],
    GVirConfigDomainOsSmBiosMode: ['emulate', 'host', 'sysinfo'],
    GVirConfigDomainOsType: ['hvm', 'linux', 'exe', 'xen', 'uml'],
    GVirConfigDomainRedirdevBus: ['usb'],
    GVirConfigDomainSeclabelType: ['dynamic', 'static'],
    GVirConfigDomainSnapshotDomainState: ['nostate', 'running', 'blocked', 'paused', 'shutdown', 'shutoff', 'crashed', 'pmsuspended', 'disk-snapshot'],
    GVirConfigDomainSnapshotMemoryState: ['none', 'internal', 'external'],
    GVirConfigDomainSoundModel: ['sb16', 'es1370', 'pcspk', 'ac97', 'ich6', 'ich9'],
    GVirConfigDomainTimerTickPolicy: ['delay', 'catchup', 'merge', 'discard'],
    GVirConfigDomainVideoModel: ['vga', 'cirrus', 'vmvga', 'xen', 'vbox', 'qxl', 'virtio', 'bochs'],
    GVirConfigDomainVirtType: ['qemu', 'kqemu', 'kvm', 'xen', 'lxc', 'uml', 'openvz', 'vserver', 'ldom', 'test', 'vmware', 'hyperv', 'vbox', 'one', 'phyp'],
    GVirConfigStoragePoolType: ['dir', 'fs', 'netfs', 'logical', 'disk', 'iscsi', 'scsi', 'mpath'],
};

// The number behind each of those nicks, read from GIR's own `value` attribute.
//
// It ships because position in `ENUM_NICKS` is not the value and a consumer with no
// typelib has no other way to learn it: a surface without GI still has to hand GObject an
// integer. The alternative a consumer reaches for first is counting, and counting is wrong
// on 6 of the 137 enums a GTK 4 vocabulary carries (112 in Gtk-4.0, 25 in Adw-1) --
// `GtkResponseType` runs -1 down to
// -11, `GtkTextWindowType` starts at 1, and `GtkConstraintStrength.required` is
// 1001001000 where counting answers 0.
//
// Same provenance as the nicks above, which is the point: a consumer that reads the numbers
// from an INSTALLED library instead gets two provenances for one table, and a member the
// vocabulary describes but the host predates then looks like a missing number rather than a
// version gap.
export const ENUM_VALUES = {
    'GVirConfigDomainAudioBackend.alsa': 1,
    'GVirConfigDomainAudioBackend.coreaudio': 2,
    'GVirConfigDomainAudioBackend.file': 8,
    'GVirConfigDomainAudioBackend.jack': 3,
    'GVirConfigDomainAudioBackend.none': 0,
    'GVirConfigDomainAudioBackend.oss': 4,
    'GVirConfigDomainAudioBackend.pulseaudio': 5,
    'GVirConfigDomainAudioBackend.sdl': 6,
    'GVirConfigDomainAudioBackend.spice': 7,
    'GVirConfigDomainChannelTargetType.guestfwd': 0,
    'GVirConfigDomainChannelTargetType.spiceport': 2,
    'GVirConfigDomainChannelTargetType.virtio': 1,
    'GVirConfigDomainClockOffset.localtime': 1,
    'GVirConfigDomainClockOffset.timezone': 2,
    'GVirConfigDomainClockOffset.utc': 0,
    'GVirConfigDomainClockOffset.variable': 3,
    'GVirConfigDomainConsoleTargetType.lxc': 4,
    'GVirConfigDomainConsoleTargetType.openvz': 5,
    'GVirConfigDomainConsoleTargetType.serial': 1,
    'GVirConfigDomainConsoleTargetType.uml': 2,
    'GVirConfigDomainConsoleTargetType.virtio': 3,
    'GVirConfigDomainConsoleTargetType.xen': 0,
    'GVirConfigDomainControllerUsbModel.ehci': 2,
    'GVirConfigDomainControllerUsbModel.ich9-ehci1': 3,
    'GVirConfigDomainControllerUsbModel.ich9-uhci1': 4,
    'GVirConfigDomainControllerUsbModel.ich9-uhci2': 5,
    'GVirConfigDomainControllerUsbModel.ich9-uhci3': 6,
    'GVirConfigDomainControllerUsbModel.pci-ohci': 8,
    'GVirConfigDomainControllerUsbModel.piix3-uhci': 0,
    'GVirConfigDomainControllerUsbModel.piix4-uhci': 1,
    'GVirConfigDomainControllerUsbModel.qemu-xhci': 9,
    'GVirConfigDomainControllerUsbModel.vt82c686b-uhci': 7,
    'GVirConfigDomainCpuFeaturePolicy.disable': 3,
    'GVirConfigDomainCpuFeaturePolicy.forbid': 4,
    'GVirConfigDomainCpuFeaturePolicy.force': 0,
    'GVirConfigDomainCpuFeaturePolicy.optional': 2,
    'GVirConfigDomainCpuFeaturePolicy.require': 1,
    'GVirConfigDomainCpuMatchPolicy.exact': 1,
    'GVirConfigDomainCpuMatchPolicy.minimum': 0,
    'GVirConfigDomainCpuMatchPolicy.strict': 2,
    'GVirConfigDomainCpuMode.custom': 0,
    'GVirConfigDomainCpuMode.host-model': 1,
    'GVirConfigDomainCpuMode.host-passthrough': 2,
    'GVirConfigDomainDiskBus.fdc': 1,
    'GVirConfigDomainDiskBus.ide': 0,
    'GVirConfigDomainDiskBus.sata': 7,
    'GVirConfigDomainDiskBus.scsi': 2,
    'GVirConfigDomainDiskBus.uml': 6,
    'GVirConfigDomainDiskBus.usb': 5,
    'GVirConfigDomainDiskBus.virtio': 3,
    'GVirConfigDomainDiskBus.xen': 4,
    'GVirConfigDomainDiskCacheType.default': 0,
    'GVirConfigDomainDiskCacheType.directsync': 4,
    'GVirConfigDomainDiskCacheType.none': 1,
    'GVirConfigDomainDiskCacheType.unsafe': 5,
    'GVirConfigDomainDiskCacheType.writeback': 3,
    'GVirConfigDomainDiskCacheType.writethrough': 2,
    'GVirConfigDomainDiskDriverDiscard.ignore': 1,
    'GVirConfigDomainDiskDriverDiscard.unmap': 0,
    'GVirConfigDomainDiskDriverErrorPolicy.enospace': 3,
    'GVirConfigDomainDiskDriverErrorPolicy.ignore': 2,
    'GVirConfigDomainDiskDriverErrorPolicy.report': 1,
    'GVirConfigDomainDiskDriverErrorPolicy.stop': 0,
    'GVirConfigDomainDiskDriverIoPolicy.native': 1,
    'GVirConfigDomainDiskDriverIoPolicy.threads': 0,
    'GVirConfigDomainDiskFormat.bochs': 2,
    'GVirConfigDomainDiskFormat.cloop': 3,
    'GVirConfigDomainDiskFormat.cow': 4,
    'GVirConfigDomainDiskFormat.dir': 1,
    'GVirConfigDomainDiskFormat.dmg': 5,
    'GVirConfigDomainDiskFormat.fat': 12,
    'GVirConfigDomainDiskFormat.iso': 6,
    'GVirConfigDomainDiskFormat.qcow': 7,
    'GVirConfigDomainDiskFormat.qcow2': 8,
    'GVirConfigDomainDiskFormat.qed': 9,
    'GVirConfigDomainDiskFormat.raw': 0,
    'GVirConfigDomainDiskFormat.vhd': 13,
    'GVirConfigDomainDiskFormat.vmdk': 10,
    'GVirConfigDomainDiskFormat.vpc': 11,
    'GVirConfigDomainDiskGuestDeviceType.cdrom': 2,
    'GVirConfigDomainDiskGuestDeviceType.disk': 0,
    'GVirConfigDomainDiskGuestDeviceType.floppy': 1,
    'GVirConfigDomainDiskSnapshotType.external': 2,
    'GVirConfigDomainDiskSnapshotType.internal': 1,
    'GVirConfigDomainDiskSnapshotType.no': 0,
    'GVirConfigDomainDiskStartupPolicy.mandatory': 0,
    'GVirConfigDomainDiskStartupPolicy.optional': 2,
    'GVirConfigDomainDiskStartupPolicy.requisite': 1,
    'GVirConfigDomainDiskType.block': 1,
    'GVirConfigDomainDiskType.dir': 2,
    'GVirConfigDomainDiskType.file': 0,
    'GVirConfigDomainDiskType.network': 3,
    'GVirConfigDomainFilesysAccessType.mapped': 1,
    'GVirConfigDomainFilesysAccessType.passthrough': 0,
    'GVirConfigDomainFilesysAccessType.squash': 2,
    'GVirConfigDomainFilesysDriverType.default': 0,
    'GVirConfigDomainFilesysDriverType.handle': 2,
    'GVirConfigDomainFilesysDriverType.loop': 3,
    'GVirConfigDomainFilesysDriverType.nbd': 4,
    'GVirConfigDomainFilesysDriverType.path': 1,
    'GVirConfigDomainFilesysDriverType.ploop': 5,
    'GVirConfigDomainFilesysType.bind': 5,
    'GVirConfigDomainFilesysType.block': 1,
    'GVirConfigDomainFilesysType.file': 2,
    'GVirConfigDomainFilesysType.mount': 0,
    'GVirConfigDomainFilesysType.ram': 4,
    'GVirConfigDomainFilesysType.template': 3,
    'GVirConfigDomainGraphicsSpiceImageCompression.auto_glz': 0,
    'GVirConfigDomainGraphicsSpiceImageCompression.auto_lz': 1,
    'GVirConfigDomainGraphicsSpiceImageCompression.glz': 3,
    'GVirConfigDomainGraphicsSpiceImageCompression.lz': 4,
    'GVirConfigDomainGraphicsSpiceImageCompression.off': 5,
    'GVirConfigDomainGraphicsSpiceImageCompression.quic': 2,
    'GVirConfigDomainInputBus.ps2': 0,
    'GVirConfigDomainInputBus.usb': 1,
    'GVirConfigDomainInputBus.xen': 2,
    'GVirConfigDomainInputDeviceType.keyboard': 2,
    'GVirConfigDomainInputDeviceType.mouse': 0,
    'GVirConfigDomainInputDeviceType.tablet': 1,
    'GVirConfigDomainInterfaceLinkState.default': 0,
    'GVirConfigDomainInterfaceLinkState.down': 2,
    'GVirConfigDomainInterfaceLinkState.up': 1,
    'GVirConfigDomainLifecycleAction.coredump-destroy': 4,
    'GVirConfigDomainLifecycleAction.coredump-restart': 5,
    'GVirConfigDomainLifecycleAction.destroy': 0,
    'GVirConfigDomainLifecycleAction.preserve': 2,
    'GVirConfigDomainLifecycleAction.rename-restart': 3,
    'GVirConfigDomainLifecycleAction.restart': 1,
    'GVirConfigDomainLifecycleEvent.on_crash': 2,
    'GVirConfigDomainLifecycleEvent.on_poweroff': 0,
    'GVirConfigDomainLifecycleEvent.on_reboot': 1,
    'GVirConfigDomainMemballoonModel.none': 0,
    'GVirConfigDomainMemballoonModel.virtio': 1,
    'GVirConfigDomainOsBootDevice.cdrom': 2,
    'GVirConfigDomainOsBootDevice.fd': 0,
    'GVirConfigDomainOsBootDevice.hd': 1,
    'GVirConfigDomainOsBootDevice.network': 3,
    'GVirConfigDomainOsFirmware.bios': 0,
    'GVirConfigDomainOsFirmware.efi': 1,
    'GVirConfigDomainOsSmBiosMode.emulate': 0,
    'GVirConfigDomainOsSmBiosMode.host': 1,
    'GVirConfigDomainOsSmBiosMode.sysinfo': 2,
    'GVirConfigDomainOsType.exe': 2,
    'GVirConfigDomainOsType.hvm': 0,
    'GVirConfigDomainOsType.linux': 1,
    'GVirConfigDomainOsType.uml': 4,
    'GVirConfigDomainOsType.xen': 3,
    'GVirConfigDomainRedirdevBus.usb': 0,
    'GVirConfigDomainSeclabelType.dynamic': 0,
    'GVirConfigDomainSeclabelType.static': 1,
    'GVirConfigDomainSnapshotDomainState.blocked': 2,
    'GVirConfigDomainSnapshotDomainState.crashed': 6,
    'GVirConfigDomainSnapshotDomainState.disk-snapshot': 100,
    'GVirConfigDomainSnapshotDomainState.nostate': 0,
    'GVirConfigDomainSnapshotDomainState.paused': 3,
    'GVirConfigDomainSnapshotDomainState.pmsuspended': 7,
    'GVirConfigDomainSnapshotDomainState.running': 1,
    'GVirConfigDomainSnapshotDomainState.shutdown': 4,
    'GVirConfigDomainSnapshotDomainState.shutoff': 5,
    'GVirConfigDomainSnapshotMemoryState.external': 2,
    'GVirConfigDomainSnapshotMemoryState.internal': 1,
    'GVirConfigDomainSnapshotMemoryState.none': 0,
    'GVirConfigDomainSoundModel.ac97': 3,
    'GVirConfigDomainSoundModel.es1370': 1,
    'GVirConfigDomainSoundModel.ich6': 4,
    'GVirConfigDomainSoundModel.ich9': 5,
    'GVirConfigDomainSoundModel.pcspk': 2,
    'GVirConfigDomainSoundModel.sb16': 0,
    'GVirConfigDomainTimerTickPolicy.catchup': 1,
    'GVirConfigDomainTimerTickPolicy.delay': 0,
    'GVirConfigDomainTimerTickPolicy.discard': 3,
    'GVirConfigDomainTimerTickPolicy.merge': 2,
    'GVirConfigDomainVideoModel.bochs': 7,
    'GVirConfigDomainVideoModel.cirrus': 1,
    'GVirConfigDomainVideoModel.qxl': 5,
    'GVirConfigDomainVideoModel.vbox': 4,
    'GVirConfigDomainVideoModel.vga': 0,
    'GVirConfigDomainVideoModel.virtio': 6,
    'GVirConfigDomainVideoModel.vmvga': 2,
    'GVirConfigDomainVideoModel.xen': 3,
    'GVirConfigDomainVirtType.hyperv': 11,
    'GVirConfigDomainVirtType.kqemu': 1,
    'GVirConfigDomainVirtType.kvm': 2,
    'GVirConfigDomainVirtType.ldom': 8,
    'GVirConfigDomainVirtType.lxc': 4,
    'GVirConfigDomainVirtType.one': 13,
    'GVirConfigDomainVirtType.openvz': 6,
    'GVirConfigDomainVirtType.phyp': 14,
    'GVirConfigDomainVirtType.qemu': 0,
    'GVirConfigDomainVirtType.test': 9,
    'GVirConfigDomainVirtType.uml': 5,
    'GVirConfigDomainVirtType.vbox': 12,
    'GVirConfigDomainVirtType.vmware': 10,
    'GVirConfigDomainVirtType.vserver': 7,
    'GVirConfigDomainVirtType.xen': 3,
    'GVirConfigStoragePoolType.dir': 0,
    'GVirConfigStoragePoolType.disk': 4,
    'GVirConfigStoragePoolType.fs': 1,
    'GVirConfigStoragePoolType.iscsi': 5,
    'GVirConfigStoragePoolType.logical': 3,
    'GVirConfigStoragePoolType.mpath': 7,
    'GVirConfigStoragePoolType.netfs': 2,
    'GVirConfigStoragePoolType.scsi': 6,
};

// The nicks GIR marks `deprecated="1"`.
//
// Two members of one enum may share a value -- that is how GObject spells an alias, and
// `GTK_ALIGN_BASELINE` and `GTK_ALIGN_BASELINE_FILL` are both 4. `ENUM_VALUES` keeps
// both names, so nothing is lost, and this is what says which of the two a number should be
// spelled back as. Stated rather than derived: the pairing is visible in the values, the
// DIRECTION is not.
//
// Read it as evidence, not as a negative: 4 registered-enum members in the 718 GIRs carry
// the attribute at all, and 179 of the 182 value-sharing pairs carry it on neither half.
// A nick missing from here is a nick GIR says nothing about, not a nick GIR calls current.
export const ENUM_DEPRECATED = [];

// The declared remainder: nicks whose GIR `value` is not a number this can carry.
//
// Every nick in `ENUM_NICKS` is in `ENUM_VALUES` or here -- a nick in neither would be a
// silent drop. GIR carries two shapes no integer holds: a symbolic or absent value (Vala
// writes `(null)`, a char enum writes a letter) and an integer past
// `Number.MAX_SAFE_INTEGER`. The value kept here is the raw attribute, so the entry says
// WHAT was unreadable rather than only that something was. Measured over the 718 GIRs in
// ts-for-gir's `girs/`: 32 of 34096 registered-enum members, none in Gtk, Adw, GLib or Gio.
export const ENUM_VALUES_UNREADABLE = {};

// The number behind each member of a registered BITFIELD, keyed the same way.
//
// `ENUM_NICKS` refuses a bitfield because GObject cannot resolve a nick SET, and that
// reason says nothing about one member's number. 23 settable properties in Gtk-4.0 and
// Adw-1 are bitfield-typed -- `GtkEntry:input-hints`, `GtkPopoverMenu:flags`,
// `AdwTabView:shortcuts`, `GtkDropTarget:actions`, ... -- and they are typed bare
// `number`, so a host without GI has nothing to compute one from. Counting is worst
// exactly here: 119 of the 156 Gtk-4.0 bitfield members this vocabulary carries disagree
// with their declaration position, against 29 of 672 enumeration members.
//
// A table of its own rather than more rows in `ENUM_VALUES`, so that "every nick in
// `ENUM_NICKS` has a number or a declared reason" stays a claim about one set.
export const FLAG_VALUES = {
    'GVirConfigStorageVolTargetFeatures.refcount': 1,
};

// The same declared remainder for the bitfields. Every one of the 13 members in ts-for-gir's
// `girs/` whose value is past `Number.MAX_SAFE_INTEGER` is a bitfield member (Fwupd, Qmi),
// so this is the table that shape actually reaches.
export const FLAG_VALUES_UNREADABLE = {};

// Declaration GType + property name -> the GType of that property's enum or bitfield.
//
// Without it the value tables above are half an answer. A host with no GI knows it must set
// `orientation` to the number behind the nick `vertical`; `ENUM_VALUES` is keyed
// `GtkOrientation.vertical`, and nothing else says that `orientation` is a
// `GtkOrientation`. Deriving it is not available: `never` is a member of several Gtk enums,
// and choosing between them produces a wrong number rather than a missing one.
//
// Only where the property's OWN type is the enum. An array of them and a union that mentions
// one are both entries a consumer would resolve wrongly, so neither is written.
//
// A GType named here has numbers in SOME vocabulary, not necessarily this one: the namespace
// that OWNS an enum publishes it, so 83 of the 909 entries a full run emits want the owner's
// vocabulary loaded too. Owners that emit none (Gdk, Pango) are inlined into the tables above.
export const PROP_ENUMS = {};

// `<enum GType>.<nick>` -> the kind of value that ARIA slot takes.
//
// The one table here that is not about a ParamSpec. A GtkBuilder or Blueprint
// `accessibility { … }` block is typed by GTK's ARIA table instead, and the two disagree
// where it matters: `orientation` is settable on a `GtkLabel` that implements no
// `GtkOrientable` and has no such property, and `checked` is a `GtkAccessibleTristate`, so
// `checked: true` means the number 1 and not the boolean. A consumer typing those slots
// from the widget gets both wrong, silently.
//
// Read from each member's own documentation, which is where GTK keeps the table --
// `gtk_accessible_property_init_value()` is the C half and is not introspectable, the
// sentence is. Complete or absent, never partial: a member whose documentation states no
// value type fails generation and names itself, because a missing row is indistinguishable
// from "GTK has no such name" and the plausible fallback emits `true` where GTK means 1.
export const ARIA_VALUE_TYPES = {};

// The same keys, for the `'enum'` rows only -> the GType of the enum.
//
// The join on from a kind to a number, and a table of its own for the reason `PROP_ENUMS`
// is one: folding the GType into `ARIA_VALUE_TYPES` would make its values a mix of six
// reserved words and arbitrary GTypes, and telling them apart would be the consumer's
// problem. With this, `ARIA_VALUE_TYPES[k] === 'enum'` is the whole test, and
// `ENUM_NICKS[ARIA_VALUE_ENUMS[k]]` is the nick list.
export const ARIA_VALUE_ENUMS = {};

export const SLOT_CANDIDATES = {};

export const SINCE = {};
