// The widget vocabulary of UDisks-2.0 as runtime data.
//
// GENERATED — do not edit. Provenance: UDisks-2.0 — library 2.11.2 — inlined base(s) their owner's vocabulary does not emit: Gio.DBusInterfaceSkeleton
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'UDisks',
    version: '2.0',
    libraryVersion: '2.11.2',
    childHolders: 0,
    droppedBases: [],
    inlinedBases: ['Gio.DBusInterfaceSkeleton'],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['UDisks'],
    requiredVocabularies: ['@girs/gio-2.0/vocabulary', '@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    GDBusInterfaceSkeleton: ['g-flags'],
    UDisksBlock: ['configuration', 'crypto-backing-device', 'device', 'device-number', 'drive', 'hint-auto', 'hint-icon-name', 'hint-ignore', 'hint-name', 'hint-partitionable', 'hint-symbolic-icon-name', 'hint-system', 'id', 'id-label', 'id-type', 'id-usage', 'id-uuid', 'id-version', 'mdraid', 'mdraid-member', 'preferred-device', 'read-only', 'size', 'symlinks', 'userspace-mount-options'],
    UDisksBlockLVM2: ['logical-volume'],
    UDisksClient: ['bus-connection'],
    UDisksDrive: ['can-power-off', 'configuration', 'connection-bus', 'ejectable', 'id', 'media', 'media-available', 'media-change-detected', 'media-compatibility', 'media-removable', 'model', 'optical', 'optical-blank', 'optical-num-audio-tracks', 'optical-num-data-tracks', 'optical-num-sessions', 'optical-num-tracks', 'removable', 'revision', 'rotation-rate', 'seat', 'serial', 'sibling-id', 'size', 'sort-key', 'time-detected', 'time-media-detected', 'vendor', 'wwn'],
    UDisksDriveAta: ['aam-enabled', 'aam-supported', 'aam-vendor-recommended-value', 'apm-enabled', 'apm-supported', 'pm-enabled', 'pm-supported', 'read-lookahead-enabled', 'read-lookahead-supported', 'security-enhanced-erase-unit-minutes', 'security-erase-unit-minutes', 'security-frozen', 'smart-enabled', 'smart-failing', 'smart-num-attributes-failed-in-the-past', 'smart-num-attributes-failing', 'smart-num-bad-sectors', 'smart-power-on-seconds', 'smart-selftest-percent-remaining', 'smart-selftest-status', 'smart-supported', 'smart-temperature', 'smart-updated', 'write-cache-enabled', 'write-cache-supported'],
    UDisksDriveLSM: ['is-ok', 'is-raid-degraded', 'is-raid-error', 'is-raid-reconstructing', 'is-raid-verifying', 'min-io-size', 'opt-io-size', 'raid-disk-count', 'raid-type', 'status-info'],
    UDisksEncrypted: ['child-configuration', 'cleartext-device', 'hint-encryption-type', 'metadata-size'],
    UDisksFilesystem: ['mount-points', 'size'],
    UDisksFilesystemBTRFS: ['label', 'num-devices', 'used', 'uuid'],
    UDisksISCSISession: ['abort-timeout', 'address', 'lu-reset-timeout', 'persistent-address', 'persistent-port', 'port', 'recovery-timeout', 'target-name', 'tgt-reset-timeout', 'tpgt'],
    UDisksJob: ['bytes', 'cancelable', 'expected-end-time', 'objects', 'operation', 'progress', 'progress-valid', 'rate', 'start-time', 'started-by-uid'],
    UDisksLogicalVolume: ['active', 'block-device', 'child-configuration', 'data-allocated-ratio', 'layout', 'metadata-allocated-ratio', 'name', 'origin', 'size', 'structure', 'sync-ratio', 'thin-pool', 'type', 'uuid', 'volume-group'],
    UDisksLoop: ['autoclear', 'backing-file', 'setup-by-uid'],
    UDisksMDRaid: ['active-devices', 'bitmap-location', 'child-configuration', 'chunk-size', 'consistency-policy', 'degraded', 'level', 'name', 'num-devices', 'running', 'size', 'sync-action', 'sync-completed', 'sync-rate', 'sync-remaining-time', 'uuid'],
    UDisksManager: ['default-encryption-type', 'supported-encryption-types', 'supported-filesystems', 'version'],
    UDisksManagerISCSIInitiator: ['sessions-supported'],
    UDisksManagerNVMe: ['host-id', 'host-nqn'],
    UDisksNVMeController: ['controller-id', 'fguid', 'nvme-revision', 'sanitize-percent-remaining', 'sanitize-status', 'smart-critical-warning', 'smart-power-on-hours', 'smart-selftest-percent-remaining', 'smart-selftest-status', 'smart-temperature', 'smart-updated', 'state', 'subsystem-nqn', 'unallocated-capacity'],
    UDisksNVMeFabrics: ['host-id', 'host-nqn', 'transport', 'transport-address'],
    UDisksNVMeNamespace: ['eui64', 'format-percent-remaining', 'formatted-lbasize', 'lbaformats', 'namespace-capacity', 'namespace-size', 'namespace-utilization', 'nguid', 'nsid', 'uuid', 'wwn'],
    UDisksObject: ['block', 'block-lvm2', 'drive', 'drive-ata', 'drive-lsm', 'drive-lsm-local', 'encrypted', 'filesystem', 'filesystem-btrfs', 'iscsi-session', 'job', 'logical-volume', 'loop', 'manager', 'manager-btrfs', 'manager-iscsi-initiator', 'manager-lvm2', 'manager-nvme', 'mdraid', 'nvme-controller', 'nvme-fabrics', 'nvme-namespace', 'partition', 'partition-table', 'physical-volume', 'swapspace', 'vdo-volume', 'volume-group'],
    UDisksPartition: ['flags', 'is-contained', 'is-container', 'name', 'number', 'offset', 'size', 'table', 'type', 'uuid'],
    UDisksPartitionTable: ['partitions', 'type'],
    UDisksPhysicalVolume: ['free-size', 'size', 'volume-group'],
    UDisksSwapspace: ['active'],
    UDisksVDOVolume: ['compression', 'compression-state', 'deduplication', 'index-state', 'operating-mode', 'used-size', 'vdo-pool'],
    UDisksVolumeGroup: ['extent-size', 'free-size', 'missing-physical-volumes', 'name', 'needs-polling', 'size', 'uuid'],
};

export const OWN_SIGNALS = {
    GDBusInterfaceSkeleton: ['g-authorize-method'],
    UDisksBlock: ['handle-add-configuration-item', 'handle-format', 'handle-get-secret-configuration', 'handle-open-device', 'handle-open-for-backup', 'handle-open-for-benchmark', 'handle-open-for-restore', 'handle-remove-configuration-item', 'handle-rescan', 'handle-restore-encrypted-header', 'handle-update-configuration-item'],
    UDisksClient: ['changed'],
    UDisksDrive: ['handle-eject', 'handle-power-off', 'handle-set-configuration'],
    UDisksDriveAta: ['handle-pm-get-state', 'handle-pm-standby', 'handle-pm-wakeup', 'handle-security-erase-unit', 'handle-smart-get-attributes', 'handle-smart-selftest-abort', 'handle-smart-selftest-start', 'handle-smart-set-enabled', 'handle-smart-update'],
    UDisksDriveLsmLocal: ['handle-turn-fault-ledoff', 'handle-turn-fault-ledon', 'handle-turn-ident-ledoff', 'handle-turn-ident-ledon'],
    UDisksEncrypted: ['handle-change-passphrase', 'handle-convert', 'handle-header-backup', 'handle-lock', 'handle-resize', 'handle-unlock'],
    UDisksFilesystem: ['handle-check', 'handle-mount', 'handle-repair', 'handle-resize', 'handle-set-label', 'handle-set-uuid', 'handle-take-ownership', 'handle-unmount'],
    UDisksFilesystemBTRFS: ['handle-add-device', 'handle-create-snapshot', 'handle-create-subvolume', 'handle-get-default-subvolume-id', 'handle-get-subvolumes', 'handle-remove-device', 'handle-remove-subvolume', 'handle-repair', 'handle-resize', 'handle-set-default-subvolume-id', 'handle-set-label'],
    UDisksISCSISession: ['handle-logout', 'handle-logout-interface'],
    UDisksJob: ['completed', 'handle-cancel'],
    UDisksLogicalVolume: ['handle-activate', 'handle-cache-attach', 'handle-cache-detach', 'handle-cache-split', 'handle-create-snapshot', 'handle-deactivate', 'handle-delete', 'handle-rename', 'handle-repair', 'handle-resize'],
    UDisksLoop: ['handle-delete', 'handle-set-autoclear', 'handle-set-capacity'],
    UDisksMDRaid: ['handle-add-device', 'handle-delete', 'handle-remove-device', 'handle-request-sync-action', 'handle-set-bitmap-location', 'handle-start', 'handle-stop'],
    UDisksManager: ['handle-can-check', 'handle-can-format', 'handle-can-repair', 'handle-can-resize', 'handle-enable-module', 'handle-enable-modules', 'handle-get-block-devices', 'handle-get-drives', 'handle-loop-setup', 'handle-mdraid-create', 'handle-resolve-device'],
    UDisksManagerBTRFS: ['handle-create-volume'],
    UDisksManagerISCSIInitiator: ['handle-discover-firmware', 'handle-discover-send-targets', 'handle-get-firmware-initiator-name', 'handle-get-initiator-name', 'handle-get-initiator-name-raw', 'handle-login', 'handle-logout', 'handle-set-initiator-name'],
    UDisksManagerLVM2: ['handle-volume-group-create'],
    UDisksManagerNVMe: ['handle-connect', 'handle-set-host-id', 'handle-set-host-nqn'],
    UDisksNVMeController: ['handle-sanitize-start', 'handle-smart-get-attributes', 'handle-smart-selftest-abort', 'handle-smart-selftest-start', 'handle-smart-update'],
    UDisksNVMeFabrics: ['handle-disconnect'],
    UDisksNVMeNamespace: ['handle-format-namespace'],
    UDisksPartition: ['handle-delete', 'handle-resize', 'handle-set-flags', 'handle-set-name', 'handle-set-type', 'handle-set-uuid'],
    UDisksPartitionTable: ['handle-create-partition', 'handle-create-partition-and-format'],
    UDisksSwapspace: ['handle-set-label', 'handle-set-uuid', 'handle-start', 'handle-stop'],
    UDisksVDOVolume: ['handle-enable-compression', 'handle-enable-deduplication', 'handle-get-statistics', 'handle-resize-logical', 'handle-resize-physical'],
    UDisksVolumeGroup: ['handle-add-device', 'handle-create-plain-volume', 'handle-create-plain-volume-with-layout', 'handle-create-thin-pool-volume', 'handle-create-thin-volume', 'handle-create-vdo-volume', 'handle-delete', 'handle-empty-device', 'handle-poll', 'handle-remove-device', 'handle-remove-missing-physical-volumes', 'handle-rename'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    UDisksBlockLVM2Proxy: ['UDisksBlockLVM2Proxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'UDisksBlockLVM2'],
    UDisksBlockLVM2Skeleton: ['UDisksBlockLVM2Skeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'UDisksBlockLVM2'],
    UDisksBlockProxy: ['UDisksBlockProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'UDisksBlock'],
    UDisksBlockSkeleton: ['UDisksBlockSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'UDisksBlock'],
    UDisksClient: ['UDisksClient', 'GObject', 'GAsyncInitable', 'GInitable'],
    UDisksDriveAtaProxy: ['UDisksDriveAtaProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'UDisksDriveAta'],
    UDisksDriveAtaSkeleton: ['UDisksDriveAtaSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'UDisksDriveAta'],
    UDisksDriveLSMProxy: ['UDisksDriveLSMProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'UDisksDriveLSM'],
    UDisksDriveLSMSkeleton: ['UDisksDriveLSMSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'UDisksDriveLSM'],
    UDisksDriveLsmLocalProxy: ['UDisksDriveLsmLocalProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'UDisksDriveLsmLocal'],
    UDisksDriveLsmLocalSkeleton: ['UDisksDriveLsmLocalSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'UDisksDriveLsmLocal'],
    UDisksDriveProxy: ['UDisksDriveProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'UDisksDrive'],
    UDisksDriveSkeleton: ['UDisksDriveSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'UDisksDrive'],
    UDisksEncryptedProxy: ['UDisksEncryptedProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'UDisksEncrypted'],
    UDisksEncryptedSkeleton: ['UDisksEncryptedSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'UDisksEncrypted'],
    UDisksFilesystemBTRFSProxy: ['UDisksFilesystemBTRFSProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'UDisksFilesystemBTRFS'],
    UDisksFilesystemBTRFSSkeleton: ['UDisksFilesystemBTRFSSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'UDisksFilesystemBTRFS'],
    UDisksFilesystemProxy: ['UDisksFilesystemProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'UDisksFilesystem'],
    UDisksFilesystemSkeleton: ['UDisksFilesystemSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'UDisksFilesystem'],
    UDisksISCSISessionProxy: ['UDisksISCSISessionProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'UDisksISCSISession'],
    UDisksISCSISessionSkeleton: ['UDisksISCSISessionSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'UDisksISCSISession'],
    UDisksJobProxy: ['UDisksJobProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'UDisksJob'],
    UDisksJobSkeleton: ['UDisksJobSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'UDisksJob'],
    UDisksLogicalVolumeProxy: ['UDisksLogicalVolumeProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'UDisksLogicalVolume'],
    UDisksLogicalVolumeSkeleton: ['UDisksLogicalVolumeSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'UDisksLogicalVolume'],
    UDisksLoopProxy: ['UDisksLoopProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'UDisksLoop'],
    UDisksLoopSkeleton: ['UDisksLoopSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'UDisksLoop'],
    UDisksMDRaidProxy: ['UDisksMDRaidProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'UDisksMDRaid'],
    UDisksMDRaidSkeleton: ['UDisksMDRaidSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'UDisksMDRaid'],
    UDisksManagerBTRFSProxy: ['UDisksManagerBTRFSProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'UDisksManagerBTRFS'],
    UDisksManagerBTRFSSkeleton: ['UDisksManagerBTRFSSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'UDisksManagerBTRFS'],
    UDisksManagerISCSIInitiatorProxy: ['UDisksManagerISCSIInitiatorProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'UDisksManagerISCSIInitiator'],
    UDisksManagerISCSIInitiatorSkeleton: ['UDisksManagerISCSIInitiatorSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'UDisksManagerISCSIInitiator'],
    UDisksManagerLVM2Proxy: ['UDisksManagerLVM2Proxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'UDisksManagerLVM2'],
    UDisksManagerLVM2Skeleton: ['UDisksManagerLVM2Skeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'UDisksManagerLVM2'],
    UDisksManagerNVMeProxy: ['UDisksManagerNVMeProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'UDisksManagerNVMe'],
    UDisksManagerNVMeSkeleton: ['UDisksManagerNVMeSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'UDisksManagerNVMe'],
    UDisksManagerProxy: ['UDisksManagerProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'UDisksManager'],
    UDisksManagerSkeleton: ['UDisksManagerSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'UDisksManager'],
    UDisksNVMeControllerProxy: ['UDisksNVMeControllerProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'UDisksNVMeController'],
    UDisksNVMeControllerSkeleton: ['UDisksNVMeControllerSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'UDisksNVMeController'],
    UDisksNVMeFabricsProxy: ['UDisksNVMeFabricsProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'UDisksNVMeFabrics'],
    UDisksNVMeFabricsSkeleton: ['UDisksNVMeFabricsSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'UDisksNVMeFabrics'],
    UDisksNVMeNamespaceProxy: ['UDisksNVMeNamespaceProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'UDisksNVMeNamespace'],
    UDisksNVMeNamespaceSkeleton: ['UDisksNVMeNamespaceSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'UDisksNVMeNamespace'],
    UDisksObjectInfo: ['UDisksObjectInfo', 'GObject'],
    UDisksObjectManagerClient: ['UDisksObjectManagerClient', 'GDBusObjectManagerClient', 'GObject', 'GAsyncInitable', 'GDBusObjectManager', 'GInitable'],
    UDisksObjectProxy: ['UDisksObjectProxy', 'GDBusObjectProxy', 'GObject', 'GDBusObject', 'UDisksObject'],
    UDisksObjectSkeleton: ['UDisksObjectSkeleton', 'GDBusObjectSkeleton', 'GObject', 'GDBusObject', 'UDisksObject'],
    UDisksPartitionProxy: ['UDisksPartitionProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'UDisksPartition'],
    UDisksPartitionSkeleton: ['UDisksPartitionSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'UDisksPartition'],
    UDisksPartitionTableProxy: ['UDisksPartitionTableProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'UDisksPartitionTable'],
    UDisksPartitionTableSkeleton: ['UDisksPartitionTableSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'UDisksPartitionTable'],
    UDisksPhysicalVolumeProxy: ['UDisksPhysicalVolumeProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'UDisksPhysicalVolume'],
    UDisksPhysicalVolumeSkeleton: ['UDisksPhysicalVolumeSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'UDisksPhysicalVolume'],
    UDisksSwapspaceProxy: ['UDisksSwapspaceProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'UDisksSwapspace'],
    UDisksSwapspaceSkeleton: ['UDisksSwapspaceSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'UDisksSwapspace'],
    UDisksVDOVolumeProxy: ['UDisksVDOVolumeProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'UDisksVDOVolume'],
    UDisksVDOVolumeSkeleton: ['UDisksVDOVolumeSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'UDisksVDOVolume'],
    UDisksVolumeGroupProxy: ['UDisksVolumeGroupProxy', 'GDBusProxy', 'GObject', 'GAsyncInitable', 'GDBusInterface', 'GInitable', 'UDisksVolumeGroup'],
    UDisksVolumeGroupSkeleton: ['UDisksVolumeGroupSkeleton', 'GDBusInterfaceSkeleton', 'GObject', 'GDBusInterface', 'UDisksVolumeGroup'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {};

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
export const ENUM_VALUES = {};

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
    'GDBusInterfaceSkeletonFlags.handle-method-invocations-in-thread': 1,
    'GDBusInterfaceSkeletonFlags.none': 0,
    'UDisksPartitionTypeInfoFlags.create-only': 8,
    'UDisksPartitionTypeInfoFlags.hidden': 4,
    'UDisksPartitionTypeInfoFlags.none': 0,
    'UDisksPartitionTypeInfoFlags.raid': 2,
    'UDisksPartitionTypeInfoFlags.swap': 1,
    'UDisksPartitionTypeInfoFlags.system': 16,
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
export const PROP_ENUMS = {
    'GDBusInterfaceSkeleton.g-flags': 'GDBusInterfaceSkeletonFlags',
};

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

export const SINCE = {
    'GDBusInterfaceSkeleton': '2.30',
    'GDBusInterfaceSkeleton.g-flags': '2.30',
    'GDBusInterfaceSkeleton::g-authorize-method': '2.30',
    'UDisksBlock::handle-open-device': '2.7.3',
    'UDisksBlock::handle-restore-encrypted-header': '2.11.0',
    'UDisksBlockLVM2': '2.0.0',
    'UDisksBlockLVM2.logical-volume': '2.0.0',
    'UDisksBlockLVM2Proxy': '2.0.0',
    'UDisksBlockLVM2Skeleton': '2.0.0',
    'UDisksClient.bus-connection': '2.9.0',
    'UDisksDrive::handle-power-off': '2.0.0',
    'UDisksDriveAta::handle-smart-set-enabled': '2.0.0',
    'UDisksDriveLSM': '2.3.0',
    'UDisksDriveLSM.is-ok': '2.3.0',
    'UDisksDriveLSM.is-raid-degraded': '2.3.0',
    'UDisksDriveLSM.is-raid-error': '2.3.0',
    'UDisksDriveLSM.is-raid-reconstructing': '2.3.0',
    'UDisksDriveLSM.is-raid-verifying': '2.3.0',
    'UDisksDriveLSM.min-io-size': '2.3.0',
    'UDisksDriveLSM.opt-io-size': '2.3.0',
    'UDisksDriveLSM.raid-disk-count': '2.3.0',
    'UDisksDriveLSM.raid-type': '2.3.0',
    'UDisksDriveLSM.status-info': '2.3.0',
    'UDisksDriveLSMProxy': '2.3.0',
    'UDisksDriveLSMSkeleton': '2.3.0',
    'UDisksDriveLsmLocal::handle-turn-fault-ledoff': '2.6.3',
    'UDisksDriveLsmLocal::handle-turn-fault-ledon': '2.6.3',
    'UDisksDriveLsmLocal::handle-turn-ident-ledoff': '2.6.3',
    'UDisksDriveLsmLocal::handle-turn-ident-ledon': '2.6.3',
    'UDisksEncrypted::handle-convert': '2.11.0',
    'UDisksEncrypted::handle-header-backup': '2.11.0',
    'UDisksEncrypted::handle-resize': '2.8.0',
    'UDisksFilesystem::handle-resize': '2.7.2',
    'UDisksFilesystem::handle-set-uuid': '2.10.0',
    'UDisksFilesystemBTRFS': '2.1.3',
    'UDisksFilesystemBTRFS.label': '2.1.3',
    'UDisksFilesystemBTRFS.num-devices': '2.1.3',
    'UDisksFilesystemBTRFS.used': '2.1.3',
    'UDisksFilesystemBTRFS.uuid': '2.1.3',
    'UDisksFilesystemBTRFS::handle-add-device': '2.3.0',
    'UDisksFilesystemBTRFS::handle-create-snapshot': '2.1.3',
    'UDisksFilesystemBTRFS::handle-create-subvolume': '2.1.3',
    'UDisksFilesystemBTRFS::handle-get-default-subvolume-id': '2.11.0',
    'UDisksFilesystemBTRFS::handle-get-subvolumes': '2.1.3',
    'UDisksFilesystemBTRFS::handle-remove-device': '2.3.0',
    'UDisksFilesystemBTRFS::handle-remove-subvolume': '2.1.3',
    'UDisksFilesystemBTRFS::handle-repair': '2.3.0',
    'UDisksFilesystemBTRFS::handle-resize': '2.3.0',
    'UDisksFilesystemBTRFS::handle-set-default-subvolume-id': '2.11.0',
    'UDisksFilesystemBTRFS::handle-set-label': '2.1.3',
    'UDisksFilesystemBTRFSProxy': '2.1.3',
    'UDisksFilesystemBTRFSSkeleton': '2.1.3',
    'UDisksISCSISession::handle-logout': '2.1.3',
    'UDisksISCSISession::handle-logout-interface': '2.1.3',
    'UDisksLogicalVolume': '2.0.0',
    'UDisksLogicalVolume.active': '2.0.0',
    'UDisksLogicalVolume.block-device': '2.0.0',
    'UDisksLogicalVolume.child-configuration': '2.0.0',
    'UDisksLogicalVolume.data-allocated-ratio': '2.0.0',
    'UDisksLogicalVolume.layout': '2.0.0',
    'UDisksLogicalVolume.metadata-allocated-ratio': '2.0.0',
    'UDisksLogicalVolume.name': '2.0.0',
    'UDisksLogicalVolume.origin': '2.0.0',
    'UDisksLogicalVolume.size': '2.0.0',
    'UDisksLogicalVolume.structure': '2.0.0',
    'UDisksLogicalVolume.sync-ratio': '2.0.0',
    'UDisksLogicalVolume.thin-pool': '2.0.0',
    'UDisksLogicalVolume.type': '2.0.0',
    'UDisksLogicalVolume.uuid': '2.0.0',
    'UDisksLogicalVolume.volume-group': '2.0.0',
    'UDisksLogicalVolume::handle-activate': '2.0.0',
    'UDisksLogicalVolume::handle-cache-attach': '2.0.0',
    'UDisksLogicalVolume::handle-cache-detach': '2.0.0',
    'UDisksLogicalVolume::handle-cache-split': '2.0.0',
    'UDisksLogicalVolume::handle-create-snapshot': '2.0.0',
    'UDisksLogicalVolume::handle-deactivate': '2.0.0',
    'UDisksLogicalVolume::handle-delete': '2.0.0',
    'UDisksLogicalVolume::handle-rename': '2.0.0',
    'UDisksLogicalVolume::handle-repair': '2.0.0',
    'UDisksLogicalVolume::handle-resize': '2.0.0',
    'UDisksLogicalVolumeProxy': '2.0.0',
    'UDisksLogicalVolumeSkeleton': '2.0.0',
    'UDisksLoop::handle-set-capacity': '2.11.0',
    'UDisksMDRaid': '2.0.0',
    'UDisksMDRaid.active-devices': '2.0.0',
    'UDisksMDRaid.bitmap-location': '2.0.0',
    'UDisksMDRaid.child-configuration': '2.0.0',
    'UDisksMDRaid.chunk-size': '2.0.0',
    'UDisksMDRaid.consistency-policy': '2.0.0',
    'UDisksMDRaid.degraded': '2.0.0',
    'UDisksMDRaid.level': '2.0.0',
    'UDisksMDRaid.name': '2.0.0',
    'UDisksMDRaid.num-devices': '2.0.0',
    'UDisksMDRaid.running': '2.0.0',
    'UDisksMDRaid.size': '2.0.0',
    'UDisksMDRaid.sync-action': '2.0.0',
    'UDisksMDRaid.sync-completed': '2.0.0',
    'UDisksMDRaid.sync-rate': '2.0.0',
    'UDisksMDRaid.sync-remaining-time': '2.0.0',
    'UDisksMDRaid.uuid': '2.0.0',
    'UDisksMDRaid::handle-add-device': '2.0.0',
    'UDisksMDRaid::handle-delete': '2.0.0',
    'UDisksMDRaid::handle-remove-device': '2.0.0',
    'UDisksMDRaid::handle-request-sync-action': '2.0.0',
    'UDisksMDRaid::handle-set-bitmap-location': '2.0.0',
    'UDisksMDRaid::handle-start': '2.0.0',
    'UDisksMDRaid::handle-stop': '2.0.0',
    'UDisksMDRaidProxy': '2.0.0',
    'UDisksMDRaidSkeleton': '2.0.0',
    'UDisksManager.default-encryption-type': '2.8.3',
    'UDisksManager.supported-encryption-types': '2.8.3',
    'UDisksManager::handle-can-check': '2.7.2',
    'UDisksManager::handle-can-format': '2.7.2',
    'UDisksManager::handle-can-repair': '2.7.2',
    'UDisksManager::handle-can-resize': '2.7.2',
    'UDisksManager::handle-enable-module': '2.9.0',
    'UDisksManager::handle-get-block-devices': '2.7.2',
    'UDisksManager::handle-get-drives': '2.11',
    'UDisksManager::handle-mdraid-create': '2.0.0',
    'UDisksManager::handle-resolve-device': '2.7.3',
    'UDisksManagerBTRFS': '2.1.3',
    'UDisksManagerBTRFS::handle-create-volume': '2.3.0',
    'UDisksManagerBTRFSProxy': '2.1.3',
    'UDisksManagerBTRFSSkeleton': '2.1.3',
    'UDisksManagerISCSIInitiator': '2.0.1',
    'UDisksManagerISCSIInitiator.sessions-supported': '2.0.1',
    'UDisksManagerISCSIInitiator::handle-discover-firmware': '2.1.3',
    'UDisksManagerISCSIInitiator::handle-discover-send-targets': '2.3.1',
    'UDisksManagerISCSIInitiator::handle-get-firmware-initiator-name': '2.4.0',
    'UDisksManagerISCSIInitiator::handle-get-initiator-name': '2.0.1',
    'UDisksManagerISCSIInitiator::handle-get-initiator-name-raw': '2.8.3',
    'UDisksManagerISCSIInitiator::handle-login': '2.1.3',
    'UDisksManagerISCSIInitiator::handle-logout': '2.1.3',
    'UDisksManagerISCSIInitiator::handle-set-initiator-name': '2.1.3',
    'UDisksManagerISCSIInitiatorProxy': '2.0.1',
    'UDisksManagerISCSIInitiatorSkeleton': '2.0.1',
    'UDisksManagerLVM2': '2.0.0',
    'UDisksManagerLVM2::handle-volume-group-create': '2.0.0',
    'UDisksManagerLVM2Proxy': '2.0.0',
    'UDisksManagerLVM2Skeleton': '2.0.0',
    'UDisksManagerNVMe::handle-connect': '2.10.0',
    'UDisksManagerNVMe::handle-set-host-id': '2.10.0',
    'UDisksManagerNVMe::handle-set-host-nqn': '2.10.0',
    'UDisksNVMeController.sanitize-percent-remaining': '2.10.0',
    'UDisksNVMeController.smart-selftest-percent-remaining': '2.10.0',
    'UDisksNVMeController::handle-sanitize-start': '2.10.0',
    'UDisksNVMeController::handle-smart-get-attributes': '2.10.0',
    'UDisksNVMeController::handle-smart-selftest-abort': '2.10.0',
    'UDisksNVMeController::handle-smart-selftest-start': '2.10.0',
    'UDisksNVMeController::handle-smart-update': '2.10.0',
    'UDisksNVMeFabrics::handle-disconnect': '2.10.0',
    'UDisksNVMeNamespace.format-percent-remaining': '2.10.0',
    'UDisksNVMeNamespace::handle-format-namespace': '2.10.0',
    'UDisksObject.block-lvm2': '2.0.0',
    'UDisksObject.drive-lsm': '2.3.0',
    'UDisksObject.filesystem-btrfs': '2.1.3',
    'UDisksObject.logical-volume': '2.0.0',
    'UDisksObject.manager-btrfs': '2.1.3',
    'UDisksObject.manager-iscsi-initiator': '2.0.1',
    'UDisksObject.manager-lvm2': '2.0.0',
    'UDisksObject.mdraid': '2.0.0',
    'UDisksObject.physical-volume': '2.0.0',
    'UDisksObject.vdo-volume': '2.9.0',
    'UDisksObject.volume-group': '2.0.0',
    'UDisksObjectInfo': '2.1',
    'UDisksPartition::handle-set-uuid': '2.10.0',
    'UDisksPhysicalVolume': '2.0.0',
    'UDisksPhysicalVolume.free-size': '2.0.0',
    'UDisksPhysicalVolume.size': '2.0.0',
    'UDisksPhysicalVolume.volume-group': '2.0.0',
    'UDisksPhysicalVolumeProxy': '2.0.0',
    'UDisksPhysicalVolumeSkeleton': '2.0.0',
    'UDisksSwapspace::handle-set-uuid': '2.10.0',
    'UDisksVDOVolume': '2.9.0',
    'UDisksVDOVolume.compression': '2.9.0',
    'UDisksVDOVolume.compression-state': '2.9.0',
    'UDisksVDOVolume.deduplication': '2.9.0',
    'UDisksVDOVolume.index-state': '2.9.0',
    'UDisksVDOVolume.operating-mode': '2.9.0',
    'UDisksVDOVolume.used-size': '2.9.0',
    'UDisksVDOVolume.vdo-pool': '2.9.0',
    'UDisksVDOVolume::handle-enable-compression': '2.9.0',
    'UDisksVDOVolume::handle-enable-deduplication': '2.9.0',
    'UDisksVDOVolume::handle-get-statistics': '2.9.0',
    'UDisksVDOVolume::handle-resize-logical': '2.9.0',
    'UDisksVDOVolume::handle-resize-physical': '2.9.0',
    'UDisksVDOVolumeProxy': '2.9.0',
    'UDisksVDOVolumeSkeleton': '2.9.0',
    'UDisksVolumeGroup': '2.0.0',
    'UDisksVolumeGroup.extent-size': '2.0.0',
    'UDisksVolumeGroup.free-size': '2.0.0',
    'UDisksVolumeGroup.missing-physical-volumes': '2.0.0',
    'UDisksVolumeGroup.name': '2.0.0',
    'UDisksVolumeGroup.needs-polling': '2.0.0',
    'UDisksVolumeGroup.size': '2.0.0',
    'UDisksVolumeGroup.uuid': '2.0.0',
    'UDisksVolumeGroup::handle-add-device': '2.0.0',
    'UDisksVolumeGroup::handle-create-plain-volume': '2.0.0',
    'UDisksVolumeGroup::handle-create-plain-volume-with-layout': '2.0.0',
    'UDisksVolumeGroup::handle-create-thin-pool-volume': '2.0.0',
    'UDisksVolumeGroup::handle-create-thin-volume': '2.0.0',
    'UDisksVolumeGroup::handle-create-vdo-volume': '2.0.0',
    'UDisksVolumeGroup::handle-delete': '2.0.0',
    'UDisksVolumeGroup::handle-empty-device': '2.0.0',
    'UDisksVolumeGroup::handle-poll': '2.0.0',
    'UDisksVolumeGroup::handle-remove-device': '2.0.0',
    'UDisksVolumeGroup::handle-remove-missing-physical-volumes': '2.0.0',
    'UDisksVolumeGroup::handle-rename': '2.0.0',
    'UDisksVolumeGroupProxy': '2.0.0',
    'UDisksVolumeGroupSkeleton': '2.0.0',
};
