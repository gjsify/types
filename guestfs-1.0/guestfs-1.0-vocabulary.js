// The widget vocabulary of Guestfs-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Guestfs-1.0
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Guestfs',
    version: '1.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['Guestfs'],
    requiredVocabularies: ['@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    GuestfsAddDomain: ['allowuuid', 'cachemode', 'copyonread', 'discard', 'iface', 'libvirturi', 'live', 'readonly', 'readonlydisk'],
    GuestfsAddDrive: ['cachemode', 'copyonread', 'discard', 'format', 'iface', 'label', 'name', 'protocol', 'readonly', 'secret', 'username'],
    GuestfsAddDriveScratch: ['label', 'name'],
    GuestfsAddLibvirtDom: ['cachemode', 'copyonread', 'discard', 'iface', 'live', 'readonly', 'readonlydisk'],
    GuestfsAugTransform: ['remove'],
    GuestfsBTRFSFilesystemDefragment: ['compress', 'flush'],
    GuestfsBTRFSFilesystemResize: ['size'],
    GuestfsBTRFSImage: ['compresslevel'],
    GuestfsBTRFSSubvolumeCreate: ['qgroupid'],
    GuestfsBTRFSSubvolumeSnapshot: ['qgroupid', 'ro'],
    GuestfsBtrfsFsck: ['repair', 'superblock'],
    GuestfsCompressDeviceOut: ['level'],
    GuestfsCompressOut: ['level'],
    GuestfsCopyAttributes: ['all', 'mode', 'ownership', 'xattributes'],
    GuestfsCopyDeviceToDevice: ['append', 'destoffset', 'size', 'sparse', 'srcoffset'],
    GuestfsCopyDeviceToFile: ['append', 'destoffset', 'size', 'sparse', 'srcoffset'],
    GuestfsCopyFileToDevice: ['append', 'destoffset', 'size', 'sparse', 'srcoffset'],
    GuestfsCopyFileToFile: ['append', 'destoffset', 'size', 'sparse', 'srcoffset'],
    GuestfsCpioOut: ['format'],
    GuestfsDiskCreate: ['backingfile', 'backingformat', 'clustersize', 'compat', 'preallocation'],
    GuestfsDownloadBlocks: ['unallocated'],
    GuestfsE2fsck: ['correct', 'forceall'],
    GuestfsFstrim: ['length', 'minimumfreeextent', 'offset'],
    GuestfsGlobExpand: ['directoryslash'],
    GuestfsGrep: ['compressed', 'extended', 'fixed', 'insensitive'],
    GuestfsHivexOpen: ['debug', 'unsafe', 'verbose', 'write'],
    GuestfsInspectGetIcon: ['favicon', 'highquality'],
    GuestfsInternalTest: ['obool', 'oint', 'oint64', 'ostring'],
    GuestfsInternalTest63Optargs: ['opt1', 'opt10', 'opt11', 'opt12', 'opt13', 'opt14', 'opt15', 'opt16', 'opt17', 'opt18', 'opt19', 'opt2', 'opt20', 'opt21', 'opt22', 'opt23', 'opt24', 'opt25', 'opt26', 'opt27', 'opt28', 'opt29', 'opt3', 'opt30', 'opt31', 'opt32', 'opt33', 'opt34', 'opt35', 'opt36', 'opt37', 'opt38', 'opt39', 'opt4', 'opt40', 'opt41', 'opt42', 'opt43', 'opt44', 'opt45', 'opt46', 'opt47', 'opt48', 'opt49', 'opt5', 'opt50', 'opt51', 'opt52', 'opt53', 'opt54', 'opt55', 'opt56', 'opt57', 'opt58', 'opt59', 'opt6', 'opt60', 'opt61', 'opt62', 'opt63', 'opt7', 'opt8', 'opt9'],
    GuestfsInternalTestOnlyOptargs: ['test'],
    GuestfsIsBlockdev: ['followsymlinks'],
    GuestfsIsChardev: ['followsymlinks'],
    GuestfsIsDir: ['followsymlinks'],
    GuestfsIsFifo: ['followsymlinks'],
    GuestfsIsFile: ['followsymlinks'],
    GuestfsIsSocket: ['followsymlinks'],
    GuestfsMDCreate: ['chunk', 'level', 'missingbitmap', 'nrdevices', 'spare'],
    GuestfsMke2fs: ['blockscount', 'blocksize', 'blockspergroup', 'bytesperinode', 'creatoros', 'discard', 'extent', 'filetype', 'flexbg', 'forcecreate', 'fragsize', 'fstype', 'hasjournal', 'inodesize', 'journaldev', 'journaldevice', 'journalsize', 'label', 'largefile', 'lastmounteddir', 'lazyitableinit', 'lazyjournalinit', 'maxonlineresize', 'mmpupdateinterval', 'numberofgroups', 'numberofinodes', 'quota', 'quotatype', 'reservedblockspercentage', 'resizeinode', 'sparsesuper', 'stridesize', 'stripewidth', 'testfs', 'uninitbg', 'usagetype', 'uuid', 'writesbandgrouponly'],
    GuestfsMkfs: ['blocksize', 'features', 'inode', 'label', 'sectorsize'],
    GuestfsMkfsBtrfs: ['allocstart', 'bytecount', 'datatype', 'label', 'leafsize', 'metadata', 'nodesize', 'sectorsize'],
    GuestfsMksquashfs: ['compress'],
    GuestfsMkswap: ['label', 'uuid'],
    GuestfsMktemp: ['suffix'],
    GuestfsMount9P: ['options'],
    GuestfsMountLocal: ['cachetimeout', 'debugcalls', 'options', 'readonly'],
    GuestfsNTFSResizeOpts: ['force', 'size'],
    GuestfsNtfscloneOut: ['force', 'ignorefscheck', 'metadataonly', 'preservetimestamps', 'rescue'],
    GuestfsNtfsfix: ['clearbadsectors'],
    GuestfsRemount: ['rw'],
    GuestfsRsync: ['archive', 'deletedest'],
    GuestfsRsyncIn: ['archive', 'deletedest'],
    GuestfsRsyncOut: ['archive', 'deletedest'],
    GuestfsSelinuxRelabel: ['force'],
    GuestfsSetE2attrs: ['clear'],
    GuestfsSyslinux: ['directory'],
    GuestfsTarIn: ['acls', 'compress', 'selinux', 'xattrs'],
    GuestfsTarOut: ['acls', 'compress', 'numericowner', 'selinux', 'xattrs'],
    GuestfsTune2FS: ['errorbehavior', 'force', 'group', 'intervalbetweenchecks', 'lastmounteddirectory', 'maxmountcount', 'mountcount', 'reservedblockscount', 'reservedblockspercentage', 'user'],
    GuestfsUmount: ['force', 'lazyunmount'],
    GuestfsUmountLocal: ['retry'],
    GuestfsXfsAdmin: ['extunwritten', 'imgfile', 'label', 'lazycounter', 'projid32bit', 'uuid', 'v2log'],
    GuestfsXfsGrowfs: ['datasec', 'datasize', 'logsec', 'logsize', 'maxpct', 'rtextsize', 'rtsec', 'rtsize'],
    GuestfsXfsRepair: ['agstride', 'bhashsize', 'forcegeometry', 'forcelogzero', 'ihashsize', 'logdev', 'maxmem', 'nomodify', 'noprefetch', 'rtdev'],
};

export const OWN_SIGNALS = {
    GuestfsSession: ['appliance', 'close', 'enter', 'launch-done', 'library', 'libvirt-auth', 'progress', 'subprocess-quit', 'trace', 'warning'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    GuestfsAddDomain: ['GuestfsAddDomain', 'GObject'],
    GuestfsAddDrive: ['GuestfsAddDrive', 'GObject'],
    GuestfsAddDriveScratch: ['GuestfsAddDriveScratch', 'GObject'],
    GuestfsAddLibvirtDom: ['GuestfsAddLibvirtDom', 'GObject'],
    GuestfsAugTransform: ['GuestfsAugTransform', 'GObject'],
    GuestfsBTRFSFilesystemDefragment: ['GuestfsBTRFSFilesystemDefragment', 'GObject'],
    GuestfsBTRFSFilesystemResize: ['GuestfsBTRFSFilesystemResize', 'GObject'],
    GuestfsBTRFSImage: ['GuestfsBTRFSImage', 'GObject'],
    GuestfsBTRFSSubvolumeCreate: ['GuestfsBTRFSSubvolumeCreate', 'GObject'],
    GuestfsBTRFSSubvolumeSnapshot: ['GuestfsBTRFSSubvolumeSnapshot', 'GObject'],
    GuestfsBtrfsFsck: ['GuestfsBtrfsFsck', 'GObject'],
    GuestfsCompressDeviceOut: ['GuestfsCompressDeviceOut', 'GObject'],
    GuestfsCompressOut: ['GuestfsCompressOut', 'GObject'],
    GuestfsCopyAttributes: ['GuestfsCopyAttributes', 'GObject'],
    GuestfsCopyDeviceToDevice: ['GuestfsCopyDeviceToDevice', 'GObject'],
    GuestfsCopyDeviceToFile: ['GuestfsCopyDeviceToFile', 'GObject'],
    GuestfsCopyFileToDevice: ['GuestfsCopyFileToDevice', 'GObject'],
    GuestfsCopyFileToFile: ['GuestfsCopyFileToFile', 'GObject'],
    GuestfsCpioOut: ['GuestfsCpioOut', 'GObject'],
    GuestfsDiskCreate: ['GuestfsDiskCreate', 'GObject'],
    GuestfsDownloadBlocks: ['GuestfsDownloadBlocks', 'GObject'],
    GuestfsE2fsck: ['GuestfsE2fsck', 'GObject'],
    GuestfsFstrim: ['GuestfsFstrim', 'GObject'],
    GuestfsGlobExpand: ['GuestfsGlobExpand', 'GObject'],
    GuestfsGrep: ['GuestfsGrep', 'GObject'],
    GuestfsHivexOpen: ['GuestfsHivexOpen', 'GObject'],
    GuestfsInspectGetIcon: ['GuestfsInspectGetIcon', 'GObject'],
    GuestfsInternalTest: ['GuestfsInternalTest', 'GObject'],
    GuestfsInternalTest63Optargs: ['GuestfsInternalTest63Optargs', 'GObject'],
    GuestfsInternalTestOnlyOptargs: ['GuestfsInternalTestOnlyOptargs', 'GObject'],
    GuestfsIsBlockdev: ['GuestfsIsBlockdev', 'GObject'],
    GuestfsIsChardev: ['GuestfsIsChardev', 'GObject'],
    GuestfsIsDir: ['GuestfsIsDir', 'GObject'],
    GuestfsIsFifo: ['GuestfsIsFifo', 'GObject'],
    GuestfsIsFile: ['GuestfsIsFile', 'GObject'],
    GuestfsIsSocket: ['GuestfsIsSocket', 'GObject'],
    GuestfsMDCreate: ['GuestfsMDCreate', 'GObject'],
    GuestfsMke2fs: ['GuestfsMke2fs', 'GObject'],
    GuestfsMkfs: ['GuestfsMkfs', 'GObject'],
    GuestfsMkfsBtrfs: ['GuestfsMkfsBtrfs', 'GObject'],
    GuestfsMksquashfs: ['GuestfsMksquashfs', 'GObject'],
    GuestfsMkswap: ['GuestfsMkswap', 'GObject'],
    GuestfsMktemp: ['GuestfsMktemp', 'GObject'],
    GuestfsMount9P: ['GuestfsMount9P', 'GObject'],
    GuestfsMountLocal: ['GuestfsMountLocal', 'GObject'],
    GuestfsNTFSResizeOpts: ['GuestfsNTFSResizeOpts', 'GObject'],
    GuestfsNtfscloneOut: ['GuestfsNtfscloneOut', 'GObject'],
    GuestfsNtfsfix: ['GuestfsNtfsfix', 'GObject'],
    GuestfsRemount: ['GuestfsRemount', 'GObject'],
    GuestfsRsync: ['GuestfsRsync', 'GObject'],
    GuestfsRsyncIn: ['GuestfsRsyncIn', 'GObject'],
    GuestfsRsyncOut: ['GuestfsRsyncOut', 'GObject'],
    GuestfsSelinuxRelabel: ['GuestfsSelinuxRelabel', 'GObject'],
    GuestfsSession: ['GuestfsSession', 'GObject'],
    GuestfsSetE2attrs: ['GuestfsSetE2attrs', 'GObject'],
    GuestfsSyslinux: ['GuestfsSyslinux', 'GObject'],
    GuestfsTarIn: ['GuestfsTarIn', 'GObject'],
    GuestfsTarOut: ['GuestfsTarOut', 'GObject'],
    GuestfsTune2FS: ['GuestfsTune2FS', 'GObject'],
    GuestfsUmount: ['GuestfsUmount', 'GObject'],
    GuestfsUmountLocal: ['GuestfsUmountLocal', 'GObject'],
    GuestfsXfsAdmin: ['GuestfsXfsAdmin', 'GObject'],
    GuestfsXfsGrowfs: ['GuestfsXfsGrowfs', 'GObject'],
    GuestfsXfsRepair: ['GuestfsXfsRepair', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GuestfsSessionEvent: ['close', 'subprocess_quit', 'launch_done', 'progress', 'appliance', 'library', 'trace', 'enter', 'libvirt_auth', 'warning'],
    GuestfsTristate: ['false', 'true', 'none'],
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
    'GuestfsSessionEvent.appliance': 4,
    'GuestfsSessionEvent.close': 0,
    'GuestfsSessionEvent.enter': 7,
    'GuestfsSessionEvent.launch_done': 2,
    'GuestfsSessionEvent.library': 5,
    'GuestfsSessionEvent.libvirt_auth': 8,
    'GuestfsSessionEvent.progress': 3,
    'GuestfsSessionEvent.subprocess_quit': 1,
    'GuestfsSessionEvent.trace': 6,
    'GuestfsSessionEvent.warning': 9,
    'GuestfsTristate.false': 0,
    'GuestfsTristate.none': 2,
    'GuestfsTristate.true': 1,
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
export const FLAG_VALUES = {};

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
    'GuestfsAddDomain.allowuuid': 'GuestfsTristate',
    'GuestfsAddDomain.copyonread': 'GuestfsTristate',
    'GuestfsAddDomain.live': 'GuestfsTristate',
    'GuestfsAddDomain.readonly': 'GuestfsTristate',
    'GuestfsAddDrive.copyonread': 'GuestfsTristate',
    'GuestfsAddDrive.readonly': 'GuestfsTristate',
    'GuestfsAddLibvirtDom.copyonread': 'GuestfsTristate',
    'GuestfsAddLibvirtDom.live': 'GuestfsTristate',
    'GuestfsAddLibvirtDom.readonly': 'GuestfsTristate',
    'GuestfsAugTransform.remove': 'GuestfsTristate',
    'GuestfsBTRFSFilesystemDefragment.flush': 'GuestfsTristate',
    'GuestfsBTRFSSubvolumeSnapshot.ro': 'GuestfsTristate',
    'GuestfsBtrfsFsck.repair': 'GuestfsTristate',
    'GuestfsCopyAttributes.all': 'GuestfsTristate',
    'GuestfsCopyAttributes.mode': 'GuestfsTristate',
    'GuestfsCopyAttributes.ownership': 'GuestfsTristate',
    'GuestfsCopyAttributes.xattributes': 'GuestfsTristate',
    'GuestfsCopyDeviceToDevice.append': 'GuestfsTristate',
    'GuestfsCopyDeviceToDevice.sparse': 'GuestfsTristate',
    'GuestfsCopyDeviceToFile.append': 'GuestfsTristate',
    'GuestfsCopyDeviceToFile.sparse': 'GuestfsTristate',
    'GuestfsCopyFileToDevice.append': 'GuestfsTristate',
    'GuestfsCopyFileToDevice.sparse': 'GuestfsTristate',
    'GuestfsCopyFileToFile.append': 'GuestfsTristate',
    'GuestfsCopyFileToFile.sparse': 'GuestfsTristate',
    'GuestfsDownloadBlocks.unallocated': 'GuestfsTristate',
    'GuestfsE2fsck.correct': 'GuestfsTristate',
    'GuestfsE2fsck.forceall': 'GuestfsTristate',
    'GuestfsGlobExpand.directoryslash': 'GuestfsTristate',
    'GuestfsGrep.compressed': 'GuestfsTristate',
    'GuestfsGrep.extended': 'GuestfsTristate',
    'GuestfsGrep.fixed': 'GuestfsTristate',
    'GuestfsGrep.insensitive': 'GuestfsTristate',
    'GuestfsHivexOpen.debug': 'GuestfsTristate',
    'GuestfsHivexOpen.unsafe': 'GuestfsTristate',
    'GuestfsHivexOpen.verbose': 'GuestfsTristate',
    'GuestfsHivexOpen.write': 'GuestfsTristate',
    'GuestfsInspectGetIcon.favicon': 'GuestfsTristate',
    'GuestfsInspectGetIcon.highquality': 'GuestfsTristate',
    'GuestfsInternalTest.obool': 'GuestfsTristate',
    'GuestfsIsBlockdev.followsymlinks': 'GuestfsTristate',
    'GuestfsIsChardev.followsymlinks': 'GuestfsTristate',
    'GuestfsIsDir.followsymlinks': 'GuestfsTristate',
    'GuestfsIsFifo.followsymlinks': 'GuestfsTristate',
    'GuestfsIsFile.followsymlinks': 'GuestfsTristate',
    'GuestfsIsSocket.followsymlinks': 'GuestfsTristate',
    'GuestfsMke2fs.discard': 'GuestfsTristate',
    'GuestfsMke2fs.extent': 'GuestfsTristate',
    'GuestfsMke2fs.filetype': 'GuestfsTristate',
    'GuestfsMke2fs.flexbg': 'GuestfsTristate',
    'GuestfsMke2fs.forcecreate': 'GuestfsTristate',
    'GuestfsMke2fs.hasjournal': 'GuestfsTristate',
    'GuestfsMke2fs.journaldev': 'GuestfsTristate',
    'GuestfsMke2fs.largefile': 'GuestfsTristate',
    'GuestfsMke2fs.lazyitableinit': 'GuestfsTristate',
    'GuestfsMke2fs.lazyjournalinit': 'GuestfsTristate',
    'GuestfsMke2fs.quota': 'GuestfsTristate',
    'GuestfsMke2fs.quotatype': 'GuestfsTristate',
    'GuestfsMke2fs.resizeinode': 'GuestfsTristate',
    'GuestfsMke2fs.sparsesuper': 'GuestfsTristate',
    'GuestfsMke2fs.testfs': 'GuestfsTristate',
    'GuestfsMke2fs.uninitbg': 'GuestfsTristate',
    'GuestfsMke2fs.writesbandgrouponly': 'GuestfsTristate',
    'GuestfsMountLocal.debugcalls': 'GuestfsTristate',
    'GuestfsMountLocal.readonly': 'GuestfsTristate',
    'GuestfsNTFSResizeOpts.force': 'GuestfsTristate',
    'GuestfsNtfscloneOut.force': 'GuestfsTristate',
    'GuestfsNtfscloneOut.ignorefscheck': 'GuestfsTristate',
    'GuestfsNtfscloneOut.metadataonly': 'GuestfsTristate',
    'GuestfsNtfscloneOut.preservetimestamps': 'GuestfsTristate',
    'GuestfsNtfscloneOut.rescue': 'GuestfsTristate',
    'GuestfsNtfsfix.clearbadsectors': 'GuestfsTristate',
    'GuestfsRemount.rw': 'GuestfsTristate',
    'GuestfsRsync.archive': 'GuestfsTristate',
    'GuestfsRsync.deletedest': 'GuestfsTristate',
    'GuestfsRsyncIn.archive': 'GuestfsTristate',
    'GuestfsRsyncIn.deletedest': 'GuestfsTristate',
    'GuestfsRsyncOut.archive': 'GuestfsTristate',
    'GuestfsRsyncOut.deletedest': 'GuestfsTristate',
    'GuestfsSelinuxRelabel.force': 'GuestfsTristate',
    'GuestfsSetE2attrs.clear': 'GuestfsTristate',
    'GuestfsTarIn.acls': 'GuestfsTristate',
    'GuestfsTarIn.selinux': 'GuestfsTristate',
    'GuestfsTarIn.xattrs': 'GuestfsTristate',
    'GuestfsTarOut.acls': 'GuestfsTristate',
    'GuestfsTarOut.numericowner': 'GuestfsTristate',
    'GuestfsTarOut.selinux': 'GuestfsTristate',
    'GuestfsTarOut.xattrs': 'GuestfsTristate',
    'GuestfsTune2FS.force': 'GuestfsTristate',
    'GuestfsUmount.force': 'GuestfsTristate',
    'GuestfsUmount.lazyunmount': 'GuestfsTristate',
    'GuestfsUmountLocal.retry': 'GuestfsTristate',
    'GuestfsXfsAdmin.extunwritten': 'GuestfsTristate',
    'GuestfsXfsAdmin.imgfile': 'GuestfsTristate',
    'GuestfsXfsAdmin.lazycounter': 'GuestfsTristate',
    'GuestfsXfsAdmin.projid32bit': 'GuestfsTristate',
    'GuestfsXfsAdmin.v2log': 'GuestfsTristate',
    'GuestfsXfsGrowfs.datasec': 'GuestfsTristate',
    'GuestfsXfsGrowfs.logsec': 'GuestfsTristate',
    'GuestfsXfsGrowfs.rtsec': 'GuestfsTristate',
    'GuestfsXfsRepair.forcegeometry': 'GuestfsTristate',
    'GuestfsXfsRepair.forcelogzero': 'GuestfsTristate',
    'GuestfsXfsRepair.nomodify': 'GuestfsTristate',
    'GuestfsXfsRepair.noprefetch': 'GuestfsTristate',
};

// `<declaration GType>.<property>` -> the GType of that property's own type.
//
// `PROP_ENUMS` one case wider, and a SEPARATE table on purpose. That one is a join with a
// contract — the GType it names has numbers, in this vocabulary or the owner's — and folding a
// plain type table in would mix "resolvable to numbers" with "not" and hand the distinction to
// the consumer. `ARIA_VALUE_ENUMS` beside `ARIA_VALUE_TYPES` is the same split.
//
// A row is ABSENT where no GType can be stated: a fundamental spelling outside the generator's
// closed map, a registered type with no `glib:type-name`, or a property with no `<type>`
// child. Absence therefore reads as "unknown" and never as "scalar".
export const PROP_TYPES = {
    'GuestfsAddDomain.allowuuid': 'GuestfsTristate',
    'GuestfsAddDomain.cachemode': 'gchararray',
    'GuestfsAddDomain.copyonread': 'GuestfsTristate',
    'GuestfsAddDomain.discard': 'gchararray',
    'GuestfsAddDomain.iface': 'gchararray',
    'GuestfsAddDomain.libvirturi': 'gchararray',
    'GuestfsAddDomain.live': 'GuestfsTristate',
    'GuestfsAddDomain.readonly': 'GuestfsTristate',
    'GuestfsAddDomain.readonlydisk': 'gchararray',
    'GuestfsAddDrive.cachemode': 'gchararray',
    'GuestfsAddDrive.copyonread': 'GuestfsTristate',
    'GuestfsAddDrive.discard': 'gchararray',
    'GuestfsAddDrive.format': 'gchararray',
    'GuestfsAddDrive.iface': 'gchararray',
    'GuestfsAddDrive.label': 'gchararray',
    'GuestfsAddDrive.name': 'gchararray',
    'GuestfsAddDrive.protocol': 'gchararray',
    'GuestfsAddDrive.readonly': 'GuestfsTristate',
    'GuestfsAddDrive.secret': 'gchararray',
    'GuestfsAddDrive.username': 'gchararray',
    'GuestfsAddDriveScratch.label': 'gchararray',
    'GuestfsAddDriveScratch.name': 'gchararray',
    'GuestfsAddLibvirtDom.cachemode': 'gchararray',
    'GuestfsAddLibvirtDom.copyonread': 'GuestfsTristate',
    'GuestfsAddLibvirtDom.discard': 'gchararray',
    'GuestfsAddLibvirtDom.iface': 'gchararray',
    'GuestfsAddLibvirtDom.live': 'GuestfsTristate',
    'GuestfsAddLibvirtDom.readonly': 'GuestfsTristate',
    'GuestfsAddLibvirtDom.readonlydisk': 'gchararray',
    'GuestfsAugTransform.remove': 'GuestfsTristate',
    'GuestfsBTRFSFilesystemDefragment.compress': 'gchararray',
    'GuestfsBTRFSFilesystemDefragment.flush': 'GuestfsTristate',
    'GuestfsBTRFSFilesystemResize.size': 'gint64',
    'GuestfsBTRFSImage.compresslevel': 'gint',
    'GuestfsBTRFSSubvolumeCreate.qgroupid': 'gchararray',
    'GuestfsBTRFSSubvolumeSnapshot.qgroupid': 'gchararray',
    'GuestfsBTRFSSubvolumeSnapshot.ro': 'GuestfsTristate',
    'GuestfsBtrfsFsck.repair': 'GuestfsTristate',
    'GuestfsBtrfsFsck.superblock': 'gint64',
    'GuestfsCompressDeviceOut.level': 'gint',
    'GuestfsCompressOut.level': 'gint',
    'GuestfsCopyAttributes.all': 'GuestfsTristate',
    'GuestfsCopyAttributes.mode': 'GuestfsTristate',
    'GuestfsCopyAttributes.ownership': 'GuestfsTristate',
    'GuestfsCopyAttributes.xattributes': 'GuestfsTristate',
    'GuestfsCopyDeviceToDevice.append': 'GuestfsTristate',
    'GuestfsCopyDeviceToDevice.destoffset': 'gint64',
    'GuestfsCopyDeviceToDevice.size': 'gint64',
    'GuestfsCopyDeviceToDevice.sparse': 'GuestfsTristate',
    'GuestfsCopyDeviceToDevice.srcoffset': 'gint64',
    'GuestfsCopyDeviceToFile.append': 'GuestfsTristate',
    'GuestfsCopyDeviceToFile.destoffset': 'gint64',
    'GuestfsCopyDeviceToFile.size': 'gint64',
    'GuestfsCopyDeviceToFile.sparse': 'GuestfsTristate',
    'GuestfsCopyDeviceToFile.srcoffset': 'gint64',
    'GuestfsCopyFileToDevice.append': 'GuestfsTristate',
    'GuestfsCopyFileToDevice.destoffset': 'gint64',
    'GuestfsCopyFileToDevice.size': 'gint64',
    'GuestfsCopyFileToDevice.sparse': 'GuestfsTristate',
    'GuestfsCopyFileToDevice.srcoffset': 'gint64',
    'GuestfsCopyFileToFile.append': 'GuestfsTristate',
    'GuestfsCopyFileToFile.destoffset': 'gint64',
    'GuestfsCopyFileToFile.size': 'gint64',
    'GuestfsCopyFileToFile.sparse': 'GuestfsTristate',
    'GuestfsCopyFileToFile.srcoffset': 'gint64',
    'GuestfsCpioOut.format': 'gchararray',
    'GuestfsDiskCreate.backingfile': 'gchararray',
    'GuestfsDiskCreate.backingformat': 'gchararray',
    'GuestfsDiskCreate.clustersize': 'gint',
    'GuestfsDiskCreate.compat': 'gchararray',
    'GuestfsDiskCreate.preallocation': 'gchararray',
    'GuestfsDownloadBlocks.unallocated': 'GuestfsTristate',
    'GuestfsE2fsck.correct': 'GuestfsTristate',
    'GuestfsE2fsck.forceall': 'GuestfsTristate',
    'GuestfsFstrim.length': 'gint64',
    'GuestfsFstrim.minimumfreeextent': 'gint64',
    'GuestfsFstrim.offset': 'gint64',
    'GuestfsGlobExpand.directoryslash': 'GuestfsTristate',
    'GuestfsGrep.compressed': 'GuestfsTristate',
    'GuestfsGrep.extended': 'GuestfsTristate',
    'GuestfsGrep.fixed': 'GuestfsTristate',
    'GuestfsGrep.insensitive': 'GuestfsTristate',
    'GuestfsHivexOpen.debug': 'GuestfsTristate',
    'GuestfsHivexOpen.unsafe': 'GuestfsTristate',
    'GuestfsHivexOpen.verbose': 'GuestfsTristate',
    'GuestfsHivexOpen.write': 'GuestfsTristate',
    'GuestfsInspectGetIcon.favicon': 'GuestfsTristate',
    'GuestfsInspectGetIcon.highquality': 'GuestfsTristate',
    'GuestfsInternalTest.obool': 'GuestfsTristate',
    'GuestfsInternalTest.oint': 'gint',
    'GuestfsInternalTest.oint64': 'gint64',
    'GuestfsInternalTest.ostring': 'gchararray',
    'GuestfsInternalTest63Optargs.opt1': 'gint',
    'GuestfsInternalTest63Optargs.opt10': 'gint',
    'GuestfsInternalTest63Optargs.opt11': 'gint',
    'GuestfsInternalTest63Optargs.opt12': 'gint',
    'GuestfsInternalTest63Optargs.opt13': 'gint',
    'GuestfsInternalTest63Optargs.opt14': 'gint',
    'GuestfsInternalTest63Optargs.opt15': 'gint',
    'GuestfsInternalTest63Optargs.opt16': 'gint',
    'GuestfsInternalTest63Optargs.opt17': 'gint',
    'GuestfsInternalTest63Optargs.opt18': 'gint',
    'GuestfsInternalTest63Optargs.opt19': 'gint',
    'GuestfsInternalTest63Optargs.opt2': 'gint',
    'GuestfsInternalTest63Optargs.opt20': 'gint',
    'GuestfsInternalTest63Optargs.opt21': 'gint',
    'GuestfsInternalTest63Optargs.opt22': 'gint',
    'GuestfsInternalTest63Optargs.opt23': 'gint',
    'GuestfsInternalTest63Optargs.opt24': 'gint',
    'GuestfsInternalTest63Optargs.opt25': 'gint',
    'GuestfsInternalTest63Optargs.opt26': 'gint',
    'GuestfsInternalTest63Optargs.opt27': 'gint',
    'GuestfsInternalTest63Optargs.opt28': 'gint',
    'GuestfsInternalTest63Optargs.opt29': 'gint',
    'GuestfsInternalTest63Optargs.opt3': 'gint',
    'GuestfsInternalTest63Optargs.opt30': 'gint',
    'GuestfsInternalTest63Optargs.opt31': 'gint',
    'GuestfsInternalTest63Optargs.opt32': 'gint',
    'GuestfsInternalTest63Optargs.opt33': 'gint',
    'GuestfsInternalTest63Optargs.opt34': 'gint',
    'GuestfsInternalTest63Optargs.opt35': 'gint',
    'GuestfsInternalTest63Optargs.opt36': 'gint',
    'GuestfsInternalTest63Optargs.opt37': 'gint',
    'GuestfsInternalTest63Optargs.opt38': 'gint',
    'GuestfsInternalTest63Optargs.opt39': 'gint',
    'GuestfsInternalTest63Optargs.opt4': 'gint',
    'GuestfsInternalTest63Optargs.opt40': 'gint',
    'GuestfsInternalTest63Optargs.opt41': 'gint',
    'GuestfsInternalTest63Optargs.opt42': 'gint',
    'GuestfsInternalTest63Optargs.opt43': 'gint',
    'GuestfsInternalTest63Optargs.opt44': 'gint',
    'GuestfsInternalTest63Optargs.opt45': 'gint',
    'GuestfsInternalTest63Optargs.opt46': 'gint',
    'GuestfsInternalTest63Optargs.opt47': 'gint',
    'GuestfsInternalTest63Optargs.opt48': 'gint',
    'GuestfsInternalTest63Optargs.opt49': 'gint',
    'GuestfsInternalTest63Optargs.opt5': 'gint',
    'GuestfsInternalTest63Optargs.opt50': 'gint',
    'GuestfsInternalTest63Optargs.opt51': 'gint',
    'GuestfsInternalTest63Optargs.opt52': 'gint',
    'GuestfsInternalTest63Optargs.opt53': 'gint',
    'GuestfsInternalTest63Optargs.opt54': 'gint',
    'GuestfsInternalTest63Optargs.opt55': 'gint',
    'GuestfsInternalTest63Optargs.opt56': 'gint',
    'GuestfsInternalTest63Optargs.opt57': 'gint',
    'GuestfsInternalTest63Optargs.opt58': 'gint',
    'GuestfsInternalTest63Optargs.opt59': 'gint',
    'GuestfsInternalTest63Optargs.opt6': 'gint',
    'GuestfsInternalTest63Optargs.opt60': 'gint',
    'GuestfsInternalTest63Optargs.opt61': 'gint',
    'GuestfsInternalTest63Optargs.opt62': 'gint',
    'GuestfsInternalTest63Optargs.opt63': 'gint',
    'GuestfsInternalTest63Optargs.opt7': 'gint',
    'GuestfsInternalTest63Optargs.opt8': 'gint',
    'GuestfsInternalTest63Optargs.opt9': 'gint',
    'GuestfsInternalTestOnlyOptargs.test': 'gint',
    'GuestfsIsBlockdev.followsymlinks': 'GuestfsTristate',
    'GuestfsIsChardev.followsymlinks': 'GuestfsTristate',
    'GuestfsIsDir.followsymlinks': 'GuestfsTristate',
    'GuestfsIsFifo.followsymlinks': 'GuestfsTristate',
    'GuestfsIsFile.followsymlinks': 'GuestfsTristate',
    'GuestfsIsSocket.followsymlinks': 'GuestfsTristate',
    'GuestfsMDCreate.chunk': 'gint64',
    'GuestfsMDCreate.level': 'gchararray',
    'GuestfsMDCreate.missingbitmap': 'gint64',
    'GuestfsMDCreate.nrdevices': 'gint',
    'GuestfsMDCreate.spare': 'gint',
    'GuestfsMke2fs.blockscount': 'gint64',
    'GuestfsMke2fs.blocksize': 'gint64',
    'GuestfsMke2fs.blockspergroup': 'gint64',
    'GuestfsMke2fs.bytesperinode': 'gint64',
    'GuestfsMke2fs.creatoros': 'gchararray',
    'GuestfsMke2fs.discard': 'GuestfsTristate',
    'GuestfsMke2fs.extent': 'GuestfsTristate',
    'GuestfsMke2fs.filetype': 'GuestfsTristate',
    'GuestfsMke2fs.flexbg': 'GuestfsTristate',
    'GuestfsMke2fs.forcecreate': 'GuestfsTristate',
    'GuestfsMke2fs.fragsize': 'gint64',
    'GuestfsMke2fs.fstype': 'gchararray',
    'GuestfsMke2fs.hasjournal': 'GuestfsTristate',
    'GuestfsMke2fs.inodesize': 'gint64',
    'GuestfsMke2fs.journaldev': 'GuestfsTristate',
    'GuestfsMke2fs.journaldevice': 'gchararray',
    'GuestfsMke2fs.journalsize': 'gint64',
    'GuestfsMke2fs.label': 'gchararray',
    'GuestfsMke2fs.largefile': 'GuestfsTristate',
    'GuestfsMke2fs.lastmounteddir': 'gchararray',
    'GuestfsMke2fs.lazyitableinit': 'GuestfsTristate',
    'GuestfsMke2fs.lazyjournalinit': 'GuestfsTristate',
    'GuestfsMke2fs.maxonlineresize': 'gint64',
    'GuestfsMke2fs.mmpupdateinterval': 'gint',
    'GuestfsMke2fs.numberofgroups': 'gint64',
    'GuestfsMke2fs.numberofinodes': 'gint64',
    'GuestfsMke2fs.quota': 'GuestfsTristate',
    'GuestfsMke2fs.quotatype': 'GuestfsTristate',
    'GuestfsMke2fs.reservedblockspercentage': 'gint',
    'GuestfsMke2fs.resizeinode': 'GuestfsTristate',
    'GuestfsMke2fs.sparsesuper': 'GuestfsTristate',
    'GuestfsMke2fs.stridesize': 'gint64',
    'GuestfsMke2fs.stripewidth': 'gint64',
    'GuestfsMke2fs.testfs': 'GuestfsTristate',
    'GuestfsMke2fs.uninitbg': 'GuestfsTristate',
    'GuestfsMke2fs.usagetype': 'gchararray',
    'GuestfsMke2fs.uuid': 'gchararray',
    'GuestfsMke2fs.writesbandgrouponly': 'GuestfsTristate',
    'GuestfsMkfs.blocksize': 'gint',
    'GuestfsMkfs.features': 'gchararray',
    'GuestfsMkfs.inode': 'gint',
    'GuestfsMkfs.label': 'gchararray',
    'GuestfsMkfs.sectorsize': 'gint',
    'GuestfsMkfsBtrfs.allocstart': 'gint64',
    'GuestfsMkfsBtrfs.bytecount': 'gint64',
    'GuestfsMkfsBtrfs.datatype': 'gchararray',
    'GuestfsMkfsBtrfs.label': 'gchararray',
    'GuestfsMkfsBtrfs.leafsize': 'gint',
    'GuestfsMkfsBtrfs.metadata': 'gchararray',
    'GuestfsMkfsBtrfs.nodesize': 'gint',
    'GuestfsMkfsBtrfs.sectorsize': 'gint',
    'GuestfsMksquashfs.compress': 'gchararray',
    'GuestfsMkswap.label': 'gchararray',
    'GuestfsMkswap.uuid': 'gchararray',
    'GuestfsMktemp.suffix': 'gchararray',
    'GuestfsMount9P.options': 'gchararray',
    'GuestfsMountLocal.cachetimeout': 'gint',
    'GuestfsMountLocal.debugcalls': 'GuestfsTristate',
    'GuestfsMountLocal.options': 'gchararray',
    'GuestfsMountLocal.readonly': 'GuestfsTristate',
    'GuestfsNTFSResizeOpts.force': 'GuestfsTristate',
    'GuestfsNTFSResizeOpts.size': 'gint64',
    'GuestfsNtfscloneOut.force': 'GuestfsTristate',
    'GuestfsNtfscloneOut.ignorefscheck': 'GuestfsTristate',
    'GuestfsNtfscloneOut.metadataonly': 'GuestfsTristate',
    'GuestfsNtfscloneOut.preservetimestamps': 'GuestfsTristate',
    'GuestfsNtfscloneOut.rescue': 'GuestfsTristate',
    'GuestfsNtfsfix.clearbadsectors': 'GuestfsTristate',
    'GuestfsRemount.rw': 'GuestfsTristate',
    'GuestfsRsync.archive': 'GuestfsTristate',
    'GuestfsRsync.deletedest': 'GuestfsTristate',
    'GuestfsRsyncIn.archive': 'GuestfsTristate',
    'GuestfsRsyncIn.deletedest': 'GuestfsTristate',
    'GuestfsRsyncOut.archive': 'GuestfsTristate',
    'GuestfsRsyncOut.deletedest': 'GuestfsTristate',
    'GuestfsSelinuxRelabel.force': 'GuestfsTristate',
    'GuestfsSetE2attrs.clear': 'GuestfsTristate',
    'GuestfsSyslinux.directory': 'gchararray',
    'GuestfsTarIn.acls': 'GuestfsTristate',
    'GuestfsTarIn.compress': 'gchararray',
    'GuestfsTarIn.selinux': 'GuestfsTristate',
    'GuestfsTarIn.xattrs': 'GuestfsTristate',
    'GuestfsTarOut.acls': 'GuestfsTristate',
    'GuestfsTarOut.compress': 'gchararray',
    'GuestfsTarOut.numericowner': 'GuestfsTristate',
    'GuestfsTarOut.selinux': 'GuestfsTristate',
    'GuestfsTarOut.xattrs': 'GuestfsTristate',
    'GuestfsTune2FS.errorbehavior': 'gchararray',
    'GuestfsTune2FS.force': 'GuestfsTristate',
    'GuestfsTune2FS.group': 'gint64',
    'GuestfsTune2FS.intervalbetweenchecks': 'gint',
    'GuestfsTune2FS.lastmounteddirectory': 'gchararray',
    'GuestfsTune2FS.maxmountcount': 'gint',
    'GuestfsTune2FS.mountcount': 'gint',
    'GuestfsTune2FS.reservedblockscount': 'gint64',
    'GuestfsTune2FS.reservedblockspercentage': 'gint',
    'GuestfsTune2FS.user': 'gint64',
    'GuestfsUmount.force': 'GuestfsTristate',
    'GuestfsUmount.lazyunmount': 'GuestfsTristate',
    'GuestfsUmountLocal.retry': 'GuestfsTristate',
    'GuestfsXfsAdmin.extunwritten': 'GuestfsTristate',
    'GuestfsXfsAdmin.imgfile': 'GuestfsTristate',
    'GuestfsXfsAdmin.label': 'gchararray',
    'GuestfsXfsAdmin.lazycounter': 'GuestfsTristate',
    'GuestfsXfsAdmin.projid32bit': 'GuestfsTristate',
    'GuestfsXfsAdmin.uuid': 'gchararray',
    'GuestfsXfsAdmin.v2log': 'GuestfsTristate',
    'GuestfsXfsGrowfs.datasec': 'GuestfsTristate',
    'GuestfsXfsGrowfs.datasize': 'gint64',
    'GuestfsXfsGrowfs.logsec': 'GuestfsTristate',
    'GuestfsXfsGrowfs.logsize': 'gint64',
    'GuestfsXfsGrowfs.maxpct': 'gint',
    'GuestfsXfsGrowfs.rtextsize': 'gint64',
    'GuestfsXfsGrowfs.rtsec': 'GuestfsTristate',
    'GuestfsXfsGrowfs.rtsize': 'gint64',
    'GuestfsXfsRepair.agstride': 'gint64',
    'GuestfsXfsRepair.bhashsize': 'gint64',
    'GuestfsXfsRepair.forcegeometry': 'GuestfsTristate',
    'GuestfsXfsRepair.forcelogzero': 'GuestfsTristate',
    'GuestfsXfsRepair.ihashsize': 'gint64',
    'GuestfsXfsRepair.logdev': 'gchararray',
    'GuestfsXfsRepair.maxmem': 'gint64',
    'GuestfsXfsRepair.nomodify': 'GuestfsTristate',
    'GuestfsXfsRepair.noprefetch': 'GuestfsTristate',
    'GuestfsXfsRepair.rtdev': 'gchararray',
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

export const SINCE = {};
