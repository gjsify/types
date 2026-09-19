/**
 * The GIR-derived widget VOCABULARY for Guestfs-1.0.
 *
 * GENERATED — do not edit. Provenance: Guestfs-1.0
 *
 * 64 instantiable GTypes (of which 0 concrete widgets), 64 declarations, 2 enum nick unions, 0 slot candidates.
 *
 * Module-scoped exports only. There is no `JSX` namespace here, no tag spelling and
 * no `on<Signal>` prop name: those are DIALECT, and every framework answers them
 * differently. The shape to avoid is the GLOBAL AUGMENT — a `declare global` on
 * `React.JSX` collides with every other library on a shared tag — while a
 * module-scoped `JSX` behind a `jsxImportSource` does not. This package is used by
 * projects that want nothing to do with JSX, so it emits neither; a consumer declaring
 * a module-scoped namespace over these names is doing it right.
 *
 * Three things this is and `ConstructorProps` is not: WRITABLE-only (measured on
 * Gtk-4.0, `ConstructorProps` offers 150 read-only properties across 68 classes as
 * settable, and GTK's failure mode for writing one is exit 0), OPTIONAL, and keyed
 * by the name GObject actually REGISTERED — the dashed spelling `g_object_set`,
 * GtkBuilder XML and Blueprint all use.
 *
 * Signal handler types are not re-derived: `X.SignalSignatures`, which this package
 * already emits for every class with the parent chain, every implemented interface
 * and the `notify::` keys folded in, is what `Widgets[G]['signals']` points at.
 */

import type Guestfs from './guestfs-1.0.js';
import type { GObjectConstructOnly, GObjectProps } from '@girs/gobject-2.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type GuestfsSessionEventNick = 'close' | 'subprocess_quit' | 'launch_done' | 'progress' | 'appliance' | 'library' | 'trace' | 'enter' | 'libvirt_auth' | 'warning';
export type GuestfsTristateNick = 'false' | 'true' | 'none';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** An object encapsulating optional arguments for guestfs_session_add_domain. */
export interface GuestfsAddDomainProps extends GObjectProps {
    /** A boolean. */
    allowuuid?: GuestfsTristateNick | Guestfs.Tristate;
    /** A string. */
    cachemode?: string;
    /** A boolean. */
    copyonread?: GuestfsTristateNick | Guestfs.Tristate;
    /** A string. */
    discard?: string;
    /** A string. */
    iface?: string;
    /** A string. */
    libvirturi?: string;
    /** A boolean. */
    live?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    readonly?: GuestfsTristateNick | Guestfs.Tristate;
    /** A string. */
    readonlydisk?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsAddDomainConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_add_drive. */
export interface GuestfsAddDriveProps extends GObjectProps {
    /** A string. */
    cachemode?: string;
    /** A boolean. */
    copyonread?: GuestfsTristateNick | Guestfs.Tristate;
    /** A string. */
    discard?: string;
    /** A string. */
    format?: string;
    /** A string. */
    iface?: string;
    /** A string. */
    label?: string;
    /** A string. */
    name?: string;
    /** A string. */
    protocol?: string;
    /** A boolean. */
    readonly?: GuestfsTristateNick | Guestfs.Tristate;
    /** A string. */
    secret?: string;
    /** A string. */
    username?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsAddDriveConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_add_drive_scratch. */
export interface GuestfsAddDriveScratchProps extends GObjectProps {
    /** A string. */
    label?: string;
    /** A string. */
    name?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsAddDriveScratchConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_add_libvirt_dom. */
export interface GuestfsAddLibvirtDomProps extends GObjectProps {
    /** A string. */
    cachemode?: string;
    /** A boolean. */
    copyonread?: GuestfsTristateNick | Guestfs.Tristate;
    /** A string. */
    discard?: string;
    /** A string. */
    iface?: string;
    /** A boolean. */
    live?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    readonly?: GuestfsTristateNick | Guestfs.Tristate;
    /** A string. */
    readonlydisk?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsAddLibvirtDomConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_aug_transform. */
export interface GuestfsAugTransformProps extends GObjectProps {
    /** A boolean. */
    remove?: GuestfsTristateNick | Guestfs.Tristate;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsAugTransformConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_btrfs_filesystem_defragment. */
export interface GuestfsBTRFSFilesystemDefragmentProps extends GObjectProps {
    /** A string. */
    compress?: string;
    /** A boolean. */
    flush?: GuestfsTristateNick | Guestfs.Tristate;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsBTRFSFilesystemDefragmentConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_btrfs_filesystem_resize. */
export interface GuestfsBTRFSFilesystemResizeProps extends GObjectProps {
    /** A 64-bit integer. */
    size?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsBTRFSFilesystemResizeConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_btrfs_image. */
export interface GuestfsBTRFSImageProps extends GObjectProps {
    /** A 32-bit integer. */
    compresslevel?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsBTRFSImageConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_btrfs_subvolume_create. */
export interface GuestfsBTRFSSubvolumeCreateProps extends GObjectProps {
    /** A string. */
    qgroupid?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsBTRFSSubvolumeCreateConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_btrfs_subvolume_snapshot. */
export interface GuestfsBTRFSSubvolumeSnapshotProps extends GObjectProps {
    /** A string. */
    qgroupid?: string;
    /** A boolean. */
    ro?: GuestfsTristateNick | Guestfs.Tristate;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsBTRFSSubvolumeSnapshotConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_btrfs_fsck. */
export interface GuestfsBtrfsFsckProps extends GObjectProps {
    /** A boolean. */
    repair?: GuestfsTristateNick | Guestfs.Tristate;
    /** A 64-bit integer. */
    superblock?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsBtrfsFsckConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_compress_device_out. */
export interface GuestfsCompressDeviceOutProps extends GObjectProps {
    /** A 32-bit integer. */
    level?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsCompressDeviceOutConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_compress_out. */
export interface GuestfsCompressOutProps extends GObjectProps {
    /** A 32-bit integer. */
    level?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsCompressOutConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_copy_attributes. */
export interface GuestfsCopyAttributesProps extends GObjectProps {
    /** A boolean. */
    all?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    mode?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    ownership?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    xattributes?: GuestfsTristateNick | Guestfs.Tristate;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsCopyAttributesConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_copy_device_to_device. */
export interface GuestfsCopyDeviceToDeviceProps extends GObjectProps {
    /** A boolean. */
    append?: GuestfsTristateNick | Guestfs.Tristate;
    /** A 64-bit integer. */
    destoffset?: bigint | number;
    /** A 64-bit integer. */
    size?: bigint | number;
    /** A boolean. */
    sparse?: GuestfsTristateNick | Guestfs.Tristate;
    /** A 64-bit integer. */
    srcoffset?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsCopyDeviceToDeviceConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_copy_device_to_file. */
export interface GuestfsCopyDeviceToFileProps extends GObjectProps {
    /** A boolean. */
    append?: GuestfsTristateNick | Guestfs.Tristate;
    /** A 64-bit integer. */
    destoffset?: bigint | number;
    /** A 64-bit integer. */
    size?: bigint | number;
    /** A boolean. */
    sparse?: GuestfsTristateNick | Guestfs.Tristate;
    /** A 64-bit integer. */
    srcoffset?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsCopyDeviceToFileConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_copy_file_to_device. */
export interface GuestfsCopyFileToDeviceProps extends GObjectProps {
    /** A boolean. */
    append?: GuestfsTristateNick | Guestfs.Tristate;
    /** A 64-bit integer. */
    destoffset?: bigint | number;
    /** A 64-bit integer. */
    size?: bigint | number;
    /** A boolean. */
    sparse?: GuestfsTristateNick | Guestfs.Tristate;
    /** A 64-bit integer. */
    srcoffset?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsCopyFileToDeviceConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_copy_file_to_file. */
export interface GuestfsCopyFileToFileProps extends GObjectProps {
    /** A boolean. */
    append?: GuestfsTristateNick | Guestfs.Tristate;
    /** A 64-bit integer. */
    destoffset?: bigint | number;
    /** A 64-bit integer. */
    size?: bigint | number;
    /** A boolean. */
    sparse?: GuestfsTristateNick | Guestfs.Tristate;
    /** A 64-bit integer. */
    srcoffset?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsCopyFileToFileConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_cpio_out. */
export interface GuestfsCpioOutProps extends GObjectProps {
    /** A string. */
    format?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsCpioOutConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_disk_create. */
export interface GuestfsDiskCreateProps extends GObjectProps {
    /** A string. */
    backingfile?: string;
    /** A string. */
    backingformat?: string;
    /** A 32-bit integer. */
    clustersize?: number;
    /** A string. */
    compat?: string;
    /** A string. */
    preallocation?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsDiskCreateConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_download_blocks. */
export interface GuestfsDownloadBlocksProps extends GObjectProps {
    /** A boolean. */
    unallocated?: GuestfsTristateNick | Guestfs.Tristate;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsDownloadBlocksConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_e2fsck. */
export interface GuestfsE2fsckProps extends GObjectProps {
    /** A boolean. */
    correct?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    forceall?: GuestfsTristateNick | Guestfs.Tristate;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsE2fsckConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_fstrim. */
export interface GuestfsFstrimProps extends GObjectProps {
    /** A 64-bit integer. */
    length?: bigint | number;
    /** A 64-bit integer. */
    minimumfreeextent?: bigint | number;
    /** A 64-bit integer. */
    offset?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsFstrimConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_glob_expand. */
export interface GuestfsGlobExpandProps extends GObjectProps {
    /** A boolean. */
    directoryslash?: GuestfsTristateNick | Guestfs.Tristate;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsGlobExpandConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_grep. */
export interface GuestfsGrepProps extends GObjectProps {
    /** A boolean. */
    compressed?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    extended?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    fixed?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    insensitive?: GuestfsTristateNick | Guestfs.Tristate;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsGrepConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_hivex_open. */
export interface GuestfsHivexOpenProps extends GObjectProps {
    /** A boolean. */
    debug?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    unsafe?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    verbose?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    write?: GuestfsTristateNick | Guestfs.Tristate;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsHivexOpenConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_inspect_get_icon. */
export interface GuestfsInspectGetIconProps extends GObjectProps {
    /** A boolean. */
    favicon?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    highquality?: GuestfsTristateNick | Guestfs.Tristate;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsInspectGetIconConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_internal_test. */
export interface GuestfsInternalTestProps extends GObjectProps {
    /** A boolean. */
    obool?: GuestfsTristateNick | Guestfs.Tristate;
    /** A 32-bit integer. */
    oint?: number;
    /** A 64-bit integer. */
    oint64?: bigint | number;
    /** A string. */
    ostring?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsInternalTestConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_internal_test_63_optargs. */
export interface GuestfsInternalTest63OptargsProps extends GObjectProps {
    /** A 32-bit integer. */
    opt1?: number;
    /** A 32-bit integer. */
    opt10?: number;
    /** A 32-bit integer. */
    opt11?: number;
    /** A 32-bit integer. */
    opt12?: number;
    /** A 32-bit integer. */
    opt13?: number;
    /** A 32-bit integer. */
    opt14?: number;
    /** A 32-bit integer. */
    opt15?: number;
    /** A 32-bit integer. */
    opt16?: number;
    /** A 32-bit integer. */
    opt17?: number;
    /** A 32-bit integer. */
    opt18?: number;
    /** A 32-bit integer. */
    opt19?: number;
    /** A 32-bit integer. */
    opt2?: number;
    /** A 32-bit integer. */
    opt20?: number;
    /** A 32-bit integer. */
    opt21?: number;
    /** A 32-bit integer. */
    opt22?: number;
    /** A 32-bit integer. */
    opt23?: number;
    /** A 32-bit integer. */
    opt24?: number;
    /** A 32-bit integer. */
    opt25?: number;
    /** A 32-bit integer. */
    opt26?: number;
    /** A 32-bit integer. */
    opt27?: number;
    /** A 32-bit integer. */
    opt28?: number;
    /** A 32-bit integer. */
    opt29?: number;
    /** A 32-bit integer. */
    opt3?: number;
    /** A 32-bit integer. */
    opt30?: number;
    /** A 32-bit integer. */
    opt31?: number;
    /** A 32-bit integer. */
    opt32?: number;
    /** A 32-bit integer. */
    opt33?: number;
    /** A 32-bit integer. */
    opt34?: number;
    /** A 32-bit integer. */
    opt35?: number;
    /** A 32-bit integer. */
    opt36?: number;
    /** A 32-bit integer. */
    opt37?: number;
    /** A 32-bit integer. */
    opt38?: number;
    /** A 32-bit integer. */
    opt39?: number;
    /** A 32-bit integer. */
    opt4?: number;
    /** A 32-bit integer. */
    opt40?: number;
    /** A 32-bit integer. */
    opt41?: number;
    /** A 32-bit integer. */
    opt42?: number;
    /** A 32-bit integer. */
    opt43?: number;
    /** A 32-bit integer. */
    opt44?: number;
    /** A 32-bit integer. */
    opt45?: number;
    /** A 32-bit integer. */
    opt46?: number;
    /** A 32-bit integer. */
    opt47?: number;
    /** A 32-bit integer. */
    opt48?: number;
    /** A 32-bit integer. */
    opt49?: number;
    /** A 32-bit integer. */
    opt5?: number;
    /** A 32-bit integer. */
    opt50?: number;
    /** A 32-bit integer. */
    opt51?: number;
    /** A 32-bit integer. */
    opt52?: number;
    /** A 32-bit integer. */
    opt53?: number;
    /** A 32-bit integer. */
    opt54?: number;
    /** A 32-bit integer. */
    opt55?: number;
    /** A 32-bit integer. */
    opt56?: number;
    /** A 32-bit integer. */
    opt57?: number;
    /** A 32-bit integer. */
    opt58?: number;
    /** A 32-bit integer. */
    opt59?: number;
    /** A 32-bit integer. */
    opt6?: number;
    /** A 32-bit integer. */
    opt60?: number;
    /** A 32-bit integer. */
    opt61?: number;
    /** A 32-bit integer. */
    opt62?: number;
    /** A 32-bit integer. */
    opt63?: number;
    /** A 32-bit integer. */
    opt7?: number;
    /** A 32-bit integer. */
    opt8?: number;
    /** A 32-bit integer. */
    opt9?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsInternalTest63OptargsConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_internal_test_only_optargs. */
export interface GuestfsInternalTestOnlyOptargsProps extends GObjectProps {
    /** A 32-bit integer. */
    test?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsInternalTestOnlyOptargsConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_is_blockdev. */
export interface GuestfsIsBlockdevProps extends GObjectProps {
    /** A boolean. */
    followsymlinks?: GuestfsTristateNick | Guestfs.Tristate;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsIsBlockdevConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_is_chardev. */
export interface GuestfsIsChardevProps extends GObjectProps {
    /** A boolean. */
    followsymlinks?: GuestfsTristateNick | Guestfs.Tristate;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsIsChardevConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_is_dir. */
export interface GuestfsIsDirProps extends GObjectProps {
    /** A boolean. */
    followsymlinks?: GuestfsTristateNick | Guestfs.Tristate;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsIsDirConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_is_fifo. */
export interface GuestfsIsFifoProps extends GObjectProps {
    /** A boolean. */
    followsymlinks?: GuestfsTristateNick | Guestfs.Tristate;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsIsFifoConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_is_file. */
export interface GuestfsIsFileProps extends GObjectProps {
    /** A boolean. */
    followsymlinks?: GuestfsTristateNick | Guestfs.Tristate;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsIsFileConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_is_socket. */
export interface GuestfsIsSocketProps extends GObjectProps {
    /** A boolean. */
    followsymlinks?: GuestfsTristateNick | Guestfs.Tristate;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsIsSocketConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_md_create. */
export interface GuestfsMDCreateProps extends GObjectProps {
    /** A 64-bit integer. */
    chunk?: bigint | number;
    /** A string. */
    level?: string;
    /** A 64-bit integer. */
    missingbitmap?: bigint | number;
    /** A 32-bit integer. */
    nrdevices?: number;
    /** A 32-bit integer. */
    spare?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsMDCreateConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_mke2fs. */
export interface GuestfsMke2fsProps extends GObjectProps {
    /** A 64-bit integer. */
    blockscount?: bigint | number;
    /** A 64-bit integer. */
    blocksize?: bigint | number;
    /** A 64-bit integer. */
    blockspergroup?: bigint | number;
    /** A 64-bit integer. */
    bytesperinode?: bigint | number;
    /** A string. */
    creatoros?: string;
    /** A boolean. */
    discard?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    extent?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    filetype?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    flexbg?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    forcecreate?: GuestfsTristateNick | Guestfs.Tristate;
    /** A 64-bit integer. */
    fragsize?: bigint | number;
    /** A string. */
    fstype?: string;
    /** A boolean. */
    hasjournal?: GuestfsTristateNick | Guestfs.Tristate;
    /** A 64-bit integer. */
    inodesize?: bigint | number;
    /** A boolean. */
    journaldev?: GuestfsTristateNick | Guestfs.Tristate;
    /** A string. */
    journaldevice?: string;
    /** A 64-bit integer. */
    journalsize?: bigint | number;
    /** A string. */
    label?: string;
    /** A boolean. */
    largefile?: GuestfsTristateNick | Guestfs.Tristate;
    /** A string. */
    lastmounteddir?: string;
    /** A boolean. */
    lazyitableinit?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    lazyjournalinit?: GuestfsTristateNick | Guestfs.Tristate;
    /** A 64-bit integer. */
    maxonlineresize?: bigint | number;
    /** A 32-bit integer. */
    mmpupdateinterval?: number;
    /** A 64-bit integer. */
    numberofgroups?: bigint | number;
    /** A 64-bit integer. */
    numberofinodes?: bigint | number;
    /** A boolean. */
    quota?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    quotatype?: GuestfsTristateNick | Guestfs.Tristate;
    /** A 32-bit integer. */
    reservedblockspercentage?: number;
    /** A boolean. */
    resizeinode?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    sparsesuper?: GuestfsTristateNick | Guestfs.Tristate;
    /** A 64-bit integer. */
    stridesize?: bigint | number;
    /** A 64-bit integer. */
    stripewidth?: bigint | number;
    /** A boolean. */
    testfs?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    uninitbg?: GuestfsTristateNick | Guestfs.Tristate;
    /** A string. */
    usagetype?: string;
    /** A string. */
    uuid?: string;
    /** A boolean. */
    writesbandgrouponly?: GuestfsTristateNick | Guestfs.Tristate;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsMke2fsConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_mkfs. */
export interface GuestfsMkfsProps extends GObjectProps {
    /** A 32-bit integer. */
    blocksize?: number;
    /** A string. */
    features?: string;
    /** A 32-bit integer. */
    inode?: number;
    /** A string. */
    label?: string;
    /** A 32-bit integer. */
    sectorsize?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsMkfsConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_mkfs_btrfs. */
export interface GuestfsMkfsBtrfsProps extends GObjectProps {
    /** A 64-bit integer. */
    allocstart?: bigint | number;
    /** A 64-bit integer. */
    bytecount?: bigint | number;
    /** A string. */
    datatype?: string;
    /** A string. */
    label?: string;
    /** A 32-bit integer. */
    leafsize?: number;
    /** A string. */
    metadata?: string;
    /** A 32-bit integer. */
    nodesize?: number;
    /** A 32-bit integer. */
    sectorsize?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsMkfsBtrfsConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_mksquashfs. */
export interface GuestfsMksquashfsProps extends GObjectProps {
    /** A string. */
    compress?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsMksquashfsConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_mkswap. */
export interface GuestfsMkswapProps extends GObjectProps {
    /** A string. */
    label?: string;
    /** A string. */
    uuid?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsMkswapConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_mktemp. */
export interface GuestfsMktempProps extends GObjectProps {
    /** A string. */
    suffix?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsMktempConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_mount_9p. */
export interface GuestfsMount9PProps extends GObjectProps {
    /** A string. */
    options?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsMount9PConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_mount_local. */
export interface GuestfsMountLocalProps extends GObjectProps {
    /** A 32-bit integer. */
    cachetimeout?: number;
    /** A boolean. */
    debugcalls?: GuestfsTristateNick | Guestfs.Tristate;
    /** A string. */
    options?: string;
    /** A boolean. */
    readonly?: GuestfsTristateNick | Guestfs.Tristate;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsMountLocalConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_ntfsresize. */
export interface GuestfsNTFSResizeOptsProps extends GObjectProps {
    /** A boolean. */
    force?: GuestfsTristateNick | Guestfs.Tristate;
    /** A 64-bit integer. */
    size?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsNTFSResizeOptsConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_ntfsclone_out. */
export interface GuestfsNtfscloneOutProps extends GObjectProps {
    /** A boolean. */
    force?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    ignorefscheck?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    metadataonly?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    preservetimestamps?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    rescue?: GuestfsTristateNick | Guestfs.Tristate;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsNtfscloneOutConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_ntfsfix. */
export interface GuestfsNtfsfixProps extends GObjectProps {
    /** A boolean. */
    clearbadsectors?: GuestfsTristateNick | Guestfs.Tristate;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsNtfsfixConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_remount. */
export interface GuestfsRemountProps extends GObjectProps {
    /** A boolean. */
    rw?: GuestfsTristateNick | Guestfs.Tristate;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsRemountConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_rsync. */
export interface GuestfsRsyncProps extends GObjectProps {
    /** A boolean. */
    archive?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    deletedest?: GuestfsTristateNick | Guestfs.Tristate;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsRsyncConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_rsync_in. */
export interface GuestfsRsyncInProps extends GObjectProps {
    /** A boolean. */
    archive?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    deletedest?: GuestfsTristateNick | Guestfs.Tristate;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsRsyncInConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_rsync_out. */
export interface GuestfsRsyncOutProps extends GObjectProps {
    /** A boolean. */
    archive?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    deletedest?: GuestfsTristateNick | Guestfs.Tristate;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsRsyncOutConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_selinux_relabel. */
export interface GuestfsSelinuxRelabelProps extends GObjectProps {
    /** A boolean. */
    force?: GuestfsTristateNick | Guestfs.Tristate;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsSelinuxRelabelConstructOnly = GObjectConstructOnly;

/** A libguestfs session, encapsulating a single libguestfs handle. */
export interface GuestfsSessionProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsSessionConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_set_e2attrs. */
export interface GuestfsSetE2attrsProps extends GObjectProps {
    /** A boolean. */
    clear?: GuestfsTristateNick | Guestfs.Tristate;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsSetE2attrsConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_syslinux. */
export interface GuestfsSyslinuxProps extends GObjectProps {
    /** A string. */
    directory?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsSyslinuxConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_tar_in. */
export interface GuestfsTarInProps extends GObjectProps {
    /** A boolean. */
    acls?: GuestfsTristateNick | Guestfs.Tristate;
    /** A string. */
    compress?: string;
    /** A boolean. */
    selinux?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    xattrs?: GuestfsTristateNick | Guestfs.Tristate;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsTarInConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_tar_out. */
export interface GuestfsTarOutProps extends GObjectProps {
    /** A boolean. */
    acls?: GuestfsTristateNick | Guestfs.Tristate;
    /** A string. */
    compress?: string;
    /** A boolean. */
    numericowner?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    selinux?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    xattrs?: GuestfsTristateNick | Guestfs.Tristate;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsTarOutConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_tune2fs. */
export interface GuestfsTune2FSProps extends GObjectProps {
    /** A string. */
    errorbehavior?: string;
    /** A boolean. */
    force?: GuestfsTristateNick | Guestfs.Tristate;
    /** A 64-bit integer. */
    group?: bigint | number;
    /** A 32-bit integer. */
    intervalbetweenchecks?: number;
    /** A string. */
    lastmounteddirectory?: string;
    /** A 32-bit integer. */
    maxmountcount?: number;
    /** A 32-bit integer. */
    mountcount?: number;
    /** A 64-bit integer. */
    reservedblockscount?: bigint | number;
    /** A 32-bit integer. */
    reservedblockspercentage?: number;
    /** A 64-bit integer. */
    user?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsTune2FSConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_umount. */
export interface GuestfsUmountProps extends GObjectProps {
    /** A boolean. */
    force?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    lazyunmount?: GuestfsTristateNick | Guestfs.Tristate;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsUmountConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_umount_local. */
export interface GuestfsUmountLocalProps extends GObjectProps {
    /** A boolean. */
    retry?: GuestfsTristateNick | Guestfs.Tristate;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsUmountLocalConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_xfs_admin. */
export interface GuestfsXfsAdminProps extends GObjectProps {
    /** A boolean. */
    extunwritten?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    imgfile?: GuestfsTristateNick | Guestfs.Tristate;
    /** A string. */
    label?: string;
    /** A boolean. */
    lazycounter?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    projid32bit?: GuestfsTristateNick | Guestfs.Tristate;
    /** A string. */
    uuid?: string;
    /** A boolean. */
    v2log?: GuestfsTristateNick | Guestfs.Tristate;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsXfsAdminConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_xfs_growfs. */
export interface GuestfsXfsGrowfsProps extends GObjectProps {
    /** A boolean. */
    datasec?: GuestfsTristateNick | Guestfs.Tristate;
    /** A 64-bit integer. */
    datasize?: bigint | number;
    /** A boolean. */
    logsec?: GuestfsTristateNick | Guestfs.Tristate;
    /** A 64-bit integer. */
    logsize?: bigint | number;
    /** A 32-bit integer. */
    maxpct?: number;
    /** A 64-bit integer. */
    rtextsize?: bigint | number;
    /** A boolean. */
    rtsec?: GuestfsTristateNick | Guestfs.Tristate;
    /** A 64-bit integer. */
    rtsize?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsXfsGrowfsConstructOnly = GObjectConstructOnly;

/** An object encapsulating optional arguments for guestfs_session_xfs_repair. */
export interface GuestfsXfsRepairProps extends GObjectProps {
    /** A 64-bit integer. */
    agstride?: bigint | number;
    /** A 64-bit integer. */
    bhashsize?: bigint | number;
    /** A boolean. */
    forcegeometry?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    forcelogzero?: GuestfsTristateNick | Guestfs.Tristate;
    /** A 64-bit integer. */
    ihashsize?: bigint | number;
    /** A string. */
    logdev?: string;
    /** A 64-bit integer. */
    maxmem?: bigint | number;
    /** A boolean. */
    nomodify?: GuestfsTristateNick | Guestfs.Tristate;
    /** A boolean. */
    noprefetch?: GuestfsTristateNick | Guestfs.Tristate;
    /** A string. */
    rtdev?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GuestfsXfsRepairConstructOnly = GObjectConstructOnly;

// ---------------------------------------------------------------------------
// The GType-keyed widget map.
//
// Keyed by GType because that is also the GtkBuilder XML key and the typelib key. A
// consumer maps GTypes to tags in ITS convention — kebab for JSX intrinsics, Pascal
// for a Vue `GlobalComponents`, the class itself for a renderer whose element type
// is the class. None of those is baked in here.
//
// `slotCandidates` is a candidate list and never an answer: derived from methods
// taking exactly one widget argument. The GIR cannot tell adoption from reference —
// `set_title_widget` parents its argument and `set_activatable_widget` does not, and
// both are `void f(GtkWidget*)` at `transfer-ownership="none"`. Curation decides;
// this is what notices when a release adds a candidate.
// ---------------------------------------------------------------------------

export interface Widgets {

}

/**
 * Every GType this namespace can create AND put on screen. A consumer derives its own
 * tag map. For everything a UI file can instantiate — layout managers, event
 * controllers, cell renderers, `GtkSizeGroup` — read `DECLS` below.
 */
export type WidgetGType = keyof Widgets;

// ---------------------------------------------------------------------------
// Child holders — the same shape, for objects that CARRY a widget without being one.
//
// `GtkListItem`, `GtkListHeader`, `GtkColumnViewCell` and `AdwToggle` descend from
// `GObject.Object` and hold a widget through `set_child`/`get_child`. A renderer places
// them exactly like a container, so they belong in the vocabulary; a check asking "is
// this a widget" must still be able to say no. Hence a sibling table rather than four
// more rows in `Widgets`: concatenate them when you mean both.
// ---------------------------------------------------------------------------

export interface ChildHolders {

}

/** Every GType this namespace holds a child in without it being a widget. */
export type ChildHolderGType = keyof ChildHolders;

/** The writable, optional, GObject-keyed property surface of one GType. */
export type PropsOf<G extends WidgetGType> = Widgets[G]['props'];

/** The signal table this package already emits, reached by GType. */
export type SignalsOf<G extends WidgetGType> = Widgets[G]['signals'];

/** The instance type — what a `ref`-shaped prop should infer. */
export type InstanceOf<G extends WidgetGType> = Widgets[G]['class'];

/** Property names that can only be set at construction. */
export type ConstructOnlyOf<G extends WidgetGType> = Widgets[G]['constructOnly'];

/** Candidate child slots — see the note above; curation decides. */
export type SlotCandidatesOf<G extends WidgetGType> = keyof Widgets[G]['slotCandidates'];

/**
 * The same facts as runtime data, for a consumer that CHECKS them.
 *
 * Types are erased, so a spec that asks the installed GTK whether every property
 * here is a writable ParamSpec, every signal resolvable by `GObject.signal_lookup`
 * and every nick resolvable through an enum lookup cannot read the interfaces
 * above. Emitted headlessly with no GTK present, which is exactly why the checking
 * belongs to the consumer and the DATA belongs here.
 */
export const PROVENANCE: {
    readonly namespace: string;
    readonly version: string;
    /** The version the LIBRARY states, or null where it states none. Never the namespace's. */
    readonly libraryVersion: string | null;
    readonly childHolders: number;
    readonly droppedBases: readonly string[];
    readonly inlinedBases: readonly string[];
    /** `<decl>.<prop>` for every property printed `never` because TypeScript has no value for it. */
    readonly unsettableProps: readonly string[];
    /**
     * `<decl>.<prop>: <Ns>.<Name>` for every property printed `never` because the model
     * could not resolve its type across a namespace boundary — two independently released
     * GIRs disagreeing, which is what the main emitter answers `never` for as well.
     */
    readonly unresolvedProps: readonly string[];
    /**
     * `c:identifier-prefixes` from the GIR, verbatim and in order — `['G']` for Gio.
     *
     * The C prefix a type REFERENCE needs: resolving `Gio.Icon` means producing `GIcon`,
     * and nothing else in this package states that `Gio` spells itself `G`. Carried rather
     * than derived because GIR carries it, and a derivation over the `DECLS` keys is wrong
     * wherever the C prefix is not a prefix of the type NAMES: gdkx11-4.0 and gdkwayland-4.0
     * both state `Gdk` while every key they declare begins `GdkX11`/`GdkWayland`.
     *
     * Empty where the GIR states none — 17 of the 627 emitting namespaces — because
     * inventing the namespace name there is a confident wrong answer in place of a missing
     * one. A LIST because 20 of them state more than one, which no single string expresses.
     */
    readonly identifierPrefixes: readonly string[];
    /**
     * Sibling vocabularies this one's DECLARATIONS come from, as import specifiers.
     *
     * A chain link with no `OWN_PROPS` row is ambiguous on its own — `GtkSeparator` has no
     * settable property, `GApplication` has its properties in another package — and this
     * list is what tells the two apart. Enum and bitfield NUMBERS are not here: those are
     * carried in this file, because a `PROP_ENUMS` row naming a foreign GType gives a
     * consumer nothing to load and a `.ui` file using the property never names its owner.
     */
    readonly requiredVocabularies: readonly string[];
};

/** Declaration GType -> its own settable properties, as GObject registered them. */
export const OWN_PROPS: Readonly<Record<string, readonly string[]>>;

/**
 * Declaration GType -> the signals it registers itself, never its parents'.
 *
 * Keyed like `OWN_PROPS`, so both are read at every link of a `DECLS` chain. An
 * abstract base has no `Widgets` row and still owns signals — `GtkWidget` owns 13.
 */
export const OWN_SIGNALS: Readonly<Record<string, readonly string[]>>;

/**
 * Instantiable GType -> every declaration its members come from, self first.
 *
 * The key set is what a UI description file can NAME: every registered, non-abstract
 * class this namespace declares. GtkBuilder resolves a `<object class="…">` through
 * `g_type_from_name`, which knows nothing about widgets, so this is wider than
 * `Widgets` by design — `GtkSizeGroup`, `GtkTextTag`, every `GtkEventController`
 * and every `GtkCellRenderer` are here and are not widgets.
 *
 * `Widgets` and `CHILD_HOLDERS` are the narrower questions and answer them unchanged.
 */
export const DECLS: Readonly<Record<string, readonly string[]>>;

/** The GTypes in `DECLS` that hold a widget without being one — see `ChildHolders`. */
export const CHILD_HOLDERS: readonly string[];

/** Enum GType -> the nicks this surface offers. */
export const ENUM_NICKS: Readonly<Record<string, readonly string[]>>;

/**
 * `<enum GType>.<nick>` -> the integer GObject registers for it, from GIR's `value`.
 *
 * Position in `ENUM_NICKS` is NOT this number. Counting is wrong on 6 of the 137 enums a
 * GTK 4 vocabulary carries -- 112 in Gtk-4.0 and 25 in Adw-1: `GtkResponseType` runs -1 to -11, `GtkTextWindowType` starts
 * at 1, `GtkOrdering` and `GtkConstraintRelation` are -1/0/1, `GtkAlign` has two names
 * on one value, and `GtkConstraintStrength.required` is 1001001000 where counting says 0.
 *
 * Read from the same GIR as the nicks, deliberately. A consumer reading the numbers off an
 * installed typelib instead has two provenances for one table, and then cannot tell a
 * missing number from a host older than the vocabulary.
 */
export const ENUM_VALUES: Readonly<Record<string, number>>;

/**
 * The `<enum GType>.<nick>` entries GIR marks `deprecated="1"`.
 *
 * Two names on one value is how GObject spells an alias -- `GTK_ALIGN_BASELINE` and
 * `GTK_ALIGN_BASELINE_FILL` are both 4, and both keep a `ENUM_VALUES` entry. The pairing
 * is visible in the numbers; which name is the old one is not, and this is that fact --
 * where GIR states it. It usually does not: 4 registered-enum members across the 718 GIRs
 * carry the attribute, and 179 of the 182 value-sharing pairs carry it on neither half, so
 * absence from this list means GIR is silent, not that the nick is the current one.
 */
export const ENUM_DEPRECATED: readonly string[];

/**
 * `<enum GType>.<nick>` -> the raw GIR `value` no number could be read from.
 *
 * The declared remainder, so that every nick in `ENUM_NICKS` is in `ENUM_VALUES` or in
 * here and a drop cannot be silent. Two shapes reach it: a symbolic or absent value (Vala
 * writes `(null)`, a char enum writes a letter) and an integer past
 * `Number.MAX_SAFE_INTEGER`, where a literal would lose precision and stop being the
 * GIR's number. Empty for Gtk, Adw, GLib and Gio.
 */
export const ENUM_VALUES_UNREADABLE: Readonly<Record<string, string>>;

/**
 * `<bitfield GType>.<nick>` -> the integer GObject registers for that one member.
 *
 * `ENUM_NICKS` carries no bitfield, because GObject cannot resolve a nick SET; that says
 * nothing about a single member's number, and the number is what a host without GI needs.
 * 23 settable properties in Gtk-4.0 and Adw-1 are bitfield-typed and are declared bare
 * `number` -- `GtkEntry:input-hints`, `GtkPopoverMenu:flags`, `AdwTabView:shortcuts`,
 * `GtkDropTarget:actions` among them. Counting is worst here: 119 of the 156 Gtk-4.0
 * bitfield members this vocabulary carries disagree with their declaration position,
 * against 29 of 672 enumeration members.
 *
 * Combine with `|` as GObject does. There is no nick table to pair this with, so a name
 * here is resolvable and a SET still is not.
 */
export const FLAG_VALUES: Readonly<Record<string, number>>;

/** `<bitfield GType>.<nick>` -> the raw GIR `value` no number could be read from. */
export const FLAG_VALUES_UNREADABLE: Readonly<Record<string, string>>;

/**
 * `<declaration GType>.<property>` -> the GType of that property's enum or bitfield.
 *
 * The join the value tables need and nothing else here carries. A host with no GI has a
 * property name and a nick and needs a number; `ENUM_VALUES` is keyed by ENUM GType, and
 * only this says which enum a property is. Keyed by DECLARATION like `OWN_PROPS`, so it is
 * read at every link of a `DECLS` chain — `orientation` belongs to `GtkOrientable`, not
 * to the `GtkBox` a caller starts from.
 *
 * Present only where the property's OWN type is the enum: an array of them, or a union that
 * merely mentions one, would be an entry a consumer resolves wrongly.
 *
 * The GType named here is not always one THIS module gives numbers for. A nick vocabulary is
 * emitted once, by the namespace that owns the enum, so `AdwComboRow.search-match-mode` names
 * `GtkStringFilterMatchMode` and its rows are in `@girs/gtk-4.0/vocabulary` — 83 of the 909
 * entries in a full run resolve only with the owner's vocabulary loaded beside this one. An
 * owner with no vocabulary of its own (Gdk, Pango) is inlined here instead, so every entry
 * resolves against SOME module.
 */
export const PROP_ENUMS: Readonly<Record<string, string>>;

/**
 * The kinds of value a GTK accessible property, relation or state takes.
 *
 * `enum` is the one that needs a second lookup: `ARIA_VALUE_ENUMS` names the enum GType,
 * and `ENUM_NICKS` and `ENUM_VALUES` answer from there.
 */
export type AriaValueType = 'string' | 'integer' | 'double' | 'boolean' | 'reference' | 'enum';

/**
 * `<enum GType>.<nick>` -> the kind of value that ARIA slot takes.
 *
 * The one table in this file that is not a fact about a ParamSpec. A GtkBuilder or
 * Blueprint `accessibility { … }` block is typed by GTK's ARIA table, not by the widget,
 * and the two disagree where it costs most: `orientation` is settable on a `GtkLabel`
 * that implements no `GtkOrientable`, and `checked` is a `GtkAccessibleTristate`, so
 * `checked: true` is the number 1 rather than a boolean. Typing those slots from the
 * widget's properties gets both wrong and raises nothing.
 *
 * Keyed like `ENUM_VALUES` because the ARIA names ARE enum members — of
 * `GtkAccessibleProperty`, `GtkAccessibleRelation` and `GtkAccessibleState` — so
 * `ENUM_NICKS` already lists them and one key parser reads both.
 *
 * Read from each member's own GIR documentation. `gtk_accessible_property_init_value()`
 * is the C half of this table and is not introspectable; the doc sentence is, and states
 * the type for 52 of the 53 members in gtk4 4.23.3. Complete or absent, never partial: a
 * member the generator cannot answer for fails the build and names itself.
 */
export const ARIA_VALUE_TYPES: Readonly<Record<string, AriaValueType>>;

/**
 * The same keys, for the `'enum'` rows only -> the GType of that enum.
 *
 * A table of its own for the reason `PROP_ENUMS` is one: folded in, the values of
 * `ARIA_VALUE_TYPES` would be six reserved words mixed with arbitrary GTypes and telling
 * them apart would be the consumer's problem. Apart, `ARIA_VALUE_TYPES[k] === 'enum'` is
 * the whole test and `ENUM_NICKS[ARIA_VALUE_ENUMS[k]]` is the nick list.
 */
export const ARIA_VALUE_ENUMS: Readonly<Record<string, string>>;

/** Widget GType -> slot name -> the method that may adopt a child there. */
export const SLOT_CANDIDATES: Readonly<Record<string, Readonly<Record<string, string>>>>;

/**
 * `Type`, `Type.property` and `Type::signal` -> the release that introduced it.
 *
 * What keeps a runtime cross-check honest across a version gap without an
 * allowlist: a name the installed library lacks is a defect UNLESS the version
 * here is newer than the one running.
 *
 * ALL THREE key shapes, because that test only works for the names it covers. A
 * property-only map leaves a consumer no way to explain a missing SIGNAL, which is
 * a correct vocabulary reported as 18 defects; a member-only map leaves it no way to
 * explain a missing CLASS, and that one fails as a bare
 * `TypeError: can't access property "$gtype", ctor() is undefined` that does not
 * even name the GType.
 *
 * A key is present only where the GIR states a version — sparse by nature (`version`
 * sits on 29 of the 301 classes and interfaces in Gtk-4.0), never inferred.
 */
export const SINCE: Readonly<Record<string, string>>;
