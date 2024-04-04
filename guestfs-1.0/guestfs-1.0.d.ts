/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './guestfs-1.0-ambient.d.ts';

/**
 * Guestfs-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Guestfs {
    /**
     * For more detail on libguestfs events, see "SETTING CALLBACKS TO HANDLE
     * EVENTS" in guestfs(3).
     */
    enum SessionEvent {
        /**
         * The close event
         */
        CLOSE,
        /**
         * The subprocess_quit event
         */
        SUBPROCESS_QUIT,
        /**
         * The launch_done event
         */
        LAUNCH_DONE,
        /**
         * The progress event
         */
        PROGRESS,
        /**
         * The appliance event
         */
        APPLIANCE,
        /**
         * The library event
         */
        LIBRARY,
        /**
         * The trace event
         */
        TRACE,
        /**
         * The enter event
         */
        ENTER,
        /**
         * The libvirt_auth event
         */
        LIBVIRT_AUTH,
        /**
         * The warning event
         */
        WARNING,
    }
    /**
     * An object representing a tristate: i.e. true, false, or unset. If a language
     * binding has a native concept of true and false which also correspond to the
     * integer values 1 and 0 respectively, these will also correspond to
     * GUESTFS_TRISTATE_TRUE and GUESTFS_TRISTATE_FALSE.
     */
    enum Tristate {
        /**
         * False
         */
        FALSE,
        /**
         * True
         */
        TRUE,
        /**
         * Unset
         */
        NONE,
    }
    module AddDomain {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            allowuuid: Tristate;
            cachemode: string;
            copyonread: Tristate;
            discard: string;
            iface: string;
            libvirturi: string;
            live: Tristate;
            readonly: Tristate;
            readonlydisk: string;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_add_domain.
     */
    class AddDomain extends GObject.Object {
        static $gtype: GObject.GType<AddDomain>;

        // Own properties of Guestfs.AddDomain

        /**
         * A boolean.
         */
        get allowuuid(): Tristate;
        set allowuuid(val: Tristate);
        /**
         * A string.
         */
        get cachemode(): string;
        set cachemode(val: string);
        /**
         * A boolean.
         */
        get copyonread(): Tristate;
        set copyonread(val: Tristate);
        /**
         * A string.
         */
        get discard(): string;
        set discard(val: string);
        /**
         * A string.
         */
        get iface(): string;
        set iface(val: string);
        /**
         * A string.
         */
        get libvirturi(): string;
        set libvirturi(val: string);
        /**
         * A boolean.
         */
        get live(): Tristate;
        set live(val: Tristate);
        /**
         * A boolean.
         */
        get readonly(): Tristate;
        set readonly(val: Tristate);
        /**
         * A string.
         */
        get readonlydisk(): string;
        set readonlydisk(val: string);

        // Constructors of Guestfs.AddDomain

        constructor(properties?: Partial<AddDomain.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): AddDomain;
    }

    module AddDrive {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            blocksize: number;
            cachemode: string;
            copyonread: Tristate;
            discard: string;
            format: string;
            iface: string;
            label: string;
            name: string;
            protocol: string;
            readonly: Tristate;
            secret: string;
            username: string;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_add_drive.
     */
    class AddDrive extends GObject.Object {
        static $gtype: GObject.GType<AddDrive>;

        // Own properties of Guestfs.AddDrive

        /**
         * A 32-bit integer.
         */
        get blocksize(): number;
        set blocksize(val: number);
        /**
         * A string.
         */
        get cachemode(): string;
        set cachemode(val: string);
        /**
         * A boolean.
         */
        get copyonread(): Tristate;
        set copyonread(val: Tristate);
        /**
         * A string.
         */
        get discard(): string;
        set discard(val: string);
        /**
         * A string.
         */
        get format(): string;
        set format(val: string);
        /**
         * A string.
         */
        get iface(): string;
        set iface(val: string);
        /**
         * A string.
         */
        get label(): string;
        set label(val: string);
        /**
         * A string.
         */
        get name(): string;
        set name(val: string);
        /**
         * A string.
         */
        get protocol(): string;
        set protocol(val: string);
        /**
         * A boolean.
         */
        get readonly(): Tristate;
        set readonly(val: Tristate);
        /**
         * A string.
         */
        get secret(): string;
        set secret(val: string);
        /**
         * A string.
         */
        get username(): string;
        set username(val: string);

        // Constructors of Guestfs.AddDrive

        constructor(properties?: Partial<AddDrive.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): AddDrive;
    }

    module AddDriveScratch {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            blocksize: number;
            label: string;
            name: string;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_add_drive_scratch.
     */
    class AddDriveScratch extends GObject.Object {
        static $gtype: GObject.GType<AddDriveScratch>;

        // Own properties of Guestfs.AddDriveScratch

        /**
         * A 32-bit integer.
         */
        get blocksize(): number;
        set blocksize(val: number);
        /**
         * A string.
         */
        get label(): string;
        set label(val: string);
        /**
         * A string.
         */
        get name(): string;
        set name(val: string);

        // Constructors of Guestfs.AddDriveScratch

        constructor(properties?: Partial<AddDriveScratch.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): AddDriveScratch;
    }

    module AddLibvirtDom {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            cachemode: string;
            copyonread: Tristate;
            discard: string;
            iface: string;
            live: Tristate;
            readonly: Tristate;
            readonlydisk: string;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_add_libvirt_dom.
     */
    class AddLibvirtDom extends GObject.Object {
        static $gtype: GObject.GType<AddLibvirtDom>;

        // Own properties of Guestfs.AddLibvirtDom

        /**
         * A string.
         */
        get cachemode(): string;
        set cachemode(val: string);
        /**
         * A boolean.
         */
        get copyonread(): Tristate;
        set copyonread(val: Tristate);
        /**
         * A string.
         */
        get discard(): string;
        set discard(val: string);
        /**
         * A string.
         */
        get iface(): string;
        set iface(val: string);
        /**
         * A boolean.
         */
        get live(): Tristate;
        set live(val: Tristate);
        /**
         * A boolean.
         */
        get readonly(): Tristate;
        set readonly(val: Tristate);
        /**
         * A string.
         */
        get readonlydisk(): string;
        set readonlydisk(val: string);

        // Constructors of Guestfs.AddLibvirtDom

        constructor(properties?: Partial<AddLibvirtDom.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): AddLibvirtDom;
    }

    module AugTransform {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            remove: Tristate;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_aug_transform.
     */
    class AugTransform extends GObject.Object {
        static $gtype: GObject.GType<AugTransform>;

        // Own properties of Guestfs.AugTransform

        /**
         * A boolean.
         */
        get remove(): Tristate;
        set remove(val: Tristate);

        // Constructors of Guestfs.AugTransform

        constructor(properties?: Partial<AugTransform.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): AugTransform;
    }

    module BTRFSFilesystemDefragment {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            compress: string;
            flush: Tristate;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_btrfs_filesystem_defragment.
     */
    class BTRFSFilesystemDefragment extends GObject.Object {
        static $gtype: GObject.GType<BTRFSFilesystemDefragment>;

        // Own properties of Guestfs.BTRFSFilesystemDefragment

        /**
         * A string.
         */
        get compress(): string;
        set compress(val: string);
        /**
         * A boolean.
         */
        get flush(): Tristate;
        set flush(val: Tristate);

        // Constructors of Guestfs.BTRFSFilesystemDefragment

        constructor(properties?: Partial<BTRFSFilesystemDefragment.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BTRFSFilesystemDefragment;
    }

    module BTRFSFilesystemResize {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            size: number;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_btrfs_filesystem_resize.
     */
    class BTRFSFilesystemResize extends GObject.Object {
        static $gtype: GObject.GType<BTRFSFilesystemResize>;

        // Own properties of Guestfs.BTRFSFilesystemResize

        /**
         * A 64-bit integer.
         */
        get size(): number;
        set size(val: number);

        // Constructors of Guestfs.BTRFSFilesystemResize

        constructor(properties?: Partial<BTRFSFilesystemResize.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BTRFSFilesystemResize;
    }

    module BTRFSImage {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            compresslevel: number;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_btrfs_image.
     */
    class BTRFSImage extends GObject.Object {
        static $gtype: GObject.GType<BTRFSImage>;

        // Own properties of Guestfs.BTRFSImage

        /**
         * A 32-bit integer.
         */
        get compresslevel(): number;
        set compresslevel(val: number);

        // Constructors of Guestfs.BTRFSImage

        constructor(properties?: Partial<BTRFSImage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BTRFSImage;
    }

    module BTRFSSubvolumeCreate {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            qgroupid: string;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_btrfs_subvolume_create.
     */
    class BTRFSSubvolumeCreate extends GObject.Object {
        static $gtype: GObject.GType<BTRFSSubvolumeCreate>;

        // Own properties of Guestfs.BTRFSSubvolumeCreate

        /**
         * A string.
         */
        get qgroupid(): string;
        set qgroupid(val: string);

        // Constructors of Guestfs.BTRFSSubvolumeCreate

        constructor(properties?: Partial<BTRFSSubvolumeCreate.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BTRFSSubvolumeCreate;
    }

    module BTRFSSubvolumeSnapshot {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            qgroupid: string;
            ro: Tristate;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_btrfs_subvolume_snapshot.
     */
    class BTRFSSubvolumeSnapshot extends GObject.Object {
        static $gtype: GObject.GType<BTRFSSubvolumeSnapshot>;

        // Own properties of Guestfs.BTRFSSubvolumeSnapshot

        /**
         * A string.
         */
        get qgroupid(): string;
        set qgroupid(val: string);
        /**
         * A boolean.
         */
        get ro(): Tristate;
        set ro(val: Tristate);

        // Constructors of Guestfs.BTRFSSubvolumeSnapshot

        constructor(properties?: Partial<BTRFSSubvolumeSnapshot.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BTRFSSubvolumeSnapshot;
    }

    module BtrfsFsck {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            repair: Tristate;
            superblock: number;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_btrfs_fsck.
     */
    class BtrfsFsck extends GObject.Object {
        static $gtype: GObject.GType<BtrfsFsck>;

        // Own properties of Guestfs.BtrfsFsck

        /**
         * A boolean.
         */
        get repair(): Tristate;
        set repair(val: Tristate);
        /**
         * A 64-bit integer.
         */
        get superblock(): number;
        set superblock(val: number);

        // Constructors of Guestfs.BtrfsFsck

        constructor(properties?: Partial<BtrfsFsck.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BtrfsFsck;
    }

    module CompressDeviceOut {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            level: number;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_compress_device_out.
     */
    class CompressDeviceOut extends GObject.Object {
        static $gtype: GObject.GType<CompressDeviceOut>;

        // Own properties of Guestfs.CompressDeviceOut

        /**
         * A 32-bit integer.
         */
        get level(): number;
        set level(val: number);

        // Constructors of Guestfs.CompressDeviceOut

        constructor(properties?: Partial<CompressDeviceOut.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CompressDeviceOut;
    }

    module CompressOut {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            level: number;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_compress_out.
     */
    class CompressOut extends GObject.Object {
        static $gtype: GObject.GType<CompressOut>;

        // Own properties of Guestfs.CompressOut

        /**
         * A 32-bit integer.
         */
        get level(): number;
        set level(val: number);

        // Constructors of Guestfs.CompressOut

        constructor(properties?: Partial<CompressOut.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CompressOut;
    }

    module CopyAttributes {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            all: Tristate;
            mode: Tristate;
            ownership: Tristate;
            xattributes: Tristate;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_copy_attributes.
     */
    class CopyAttributes extends GObject.Object {
        static $gtype: GObject.GType<CopyAttributes>;

        // Own properties of Guestfs.CopyAttributes

        /**
         * A boolean.
         */
        get all(): Tristate;
        set all(val: Tristate);
        /**
         * A boolean.
         */
        get mode(): Tristate;
        set mode(val: Tristate);
        /**
         * A boolean.
         */
        get ownership(): Tristate;
        set ownership(val: Tristate);
        /**
         * A boolean.
         */
        get xattributes(): Tristate;
        set xattributes(val: Tristate);

        // Constructors of Guestfs.CopyAttributes

        constructor(properties?: Partial<CopyAttributes.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CopyAttributes;
    }

    module CopyDeviceToDevice {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            append: Tristate;
            destoffset: number;
            size: number;
            sparse: Tristate;
            srcoffset: number;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_copy_device_to_device.
     */
    class CopyDeviceToDevice extends GObject.Object {
        static $gtype: GObject.GType<CopyDeviceToDevice>;

        // Own properties of Guestfs.CopyDeviceToDevice

        /**
         * A boolean.
         */
        get append(): Tristate;
        set append(val: Tristate);
        /**
         * A 64-bit integer.
         */
        get destoffset(): number;
        set destoffset(val: number);
        /**
         * A 64-bit integer.
         */
        get size(): number;
        set size(val: number);
        /**
         * A boolean.
         */
        get sparse(): Tristate;
        set sparse(val: Tristate);
        /**
         * A 64-bit integer.
         */
        get srcoffset(): number;
        set srcoffset(val: number);

        // Constructors of Guestfs.CopyDeviceToDevice

        constructor(properties?: Partial<CopyDeviceToDevice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CopyDeviceToDevice;
    }

    module CopyDeviceToFile {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            append: Tristate;
            destoffset: number;
            size: number;
            sparse: Tristate;
            srcoffset: number;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_copy_device_to_file.
     */
    class CopyDeviceToFile extends GObject.Object {
        static $gtype: GObject.GType<CopyDeviceToFile>;

        // Own properties of Guestfs.CopyDeviceToFile

        /**
         * A boolean.
         */
        get append(): Tristate;
        set append(val: Tristate);
        /**
         * A 64-bit integer.
         */
        get destoffset(): number;
        set destoffset(val: number);
        /**
         * A 64-bit integer.
         */
        get size(): number;
        set size(val: number);
        /**
         * A boolean.
         */
        get sparse(): Tristate;
        set sparse(val: Tristate);
        /**
         * A 64-bit integer.
         */
        get srcoffset(): number;
        set srcoffset(val: number);

        // Constructors of Guestfs.CopyDeviceToFile

        constructor(properties?: Partial<CopyDeviceToFile.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CopyDeviceToFile;
    }

    module CopyFileToDevice {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            append: Tristate;
            destoffset: number;
            size: number;
            sparse: Tristate;
            srcoffset: number;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_copy_file_to_device.
     */
    class CopyFileToDevice extends GObject.Object {
        static $gtype: GObject.GType<CopyFileToDevice>;

        // Own properties of Guestfs.CopyFileToDevice

        /**
         * A boolean.
         */
        get append(): Tristate;
        set append(val: Tristate);
        /**
         * A 64-bit integer.
         */
        get destoffset(): number;
        set destoffset(val: number);
        /**
         * A 64-bit integer.
         */
        get size(): number;
        set size(val: number);
        /**
         * A boolean.
         */
        get sparse(): Tristate;
        set sparse(val: Tristate);
        /**
         * A 64-bit integer.
         */
        get srcoffset(): number;
        set srcoffset(val: number);

        // Constructors of Guestfs.CopyFileToDevice

        constructor(properties?: Partial<CopyFileToDevice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CopyFileToDevice;
    }

    module CopyFileToFile {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            append: Tristate;
            destoffset: number;
            size: number;
            sparse: Tristate;
            srcoffset: number;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_copy_file_to_file.
     */
    class CopyFileToFile extends GObject.Object {
        static $gtype: GObject.GType<CopyFileToFile>;

        // Own properties of Guestfs.CopyFileToFile

        /**
         * A boolean.
         */
        get append(): Tristate;
        set append(val: Tristate);
        /**
         * A 64-bit integer.
         */
        get destoffset(): number;
        set destoffset(val: number);
        /**
         * A 64-bit integer.
         */
        get size(): number;
        set size(val: number);
        /**
         * A boolean.
         */
        get sparse(): Tristate;
        set sparse(val: Tristate);
        /**
         * A 64-bit integer.
         */
        get srcoffset(): number;
        set srcoffset(val: number);

        // Constructors of Guestfs.CopyFileToFile

        constructor(properties?: Partial<CopyFileToFile.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CopyFileToFile;
    }

    module CpioOut {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            format: string;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_cpio_out.
     */
    class CpioOut extends GObject.Object {
        static $gtype: GObject.GType<CpioOut>;

        // Own properties of Guestfs.CpioOut

        /**
         * A string.
         */
        get format(): string;
        set format(val: string);

        // Constructors of Guestfs.CpioOut

        constructor(properties?: Partial<CpioOut.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CpioOut;
    }

    module CryptsetupOpen {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            crypttype: string;
            readonly: Tristate;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_cryptsetup_open.
     */
    class CryptsetupOpen extends GObject.Object {
        static $gtype: GObject.GType<CryptsetupOpen>;

        // Own properties of Guestfs.CryptsetupOpen

        /**
         * A string.
         */
        get crypttype(): string;
        set crypttype(val: string);
        /**
         * A boolean.
         */
        get readonly(): Tristate;
        set readonly(val: Tristate);

        // Constructors of Guestfs.CryptsetupOpen

        constructor(properties?: Partial<CryptsetupOpen.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CryptsetupOpen;
    }

    module DiskCreate {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            backingfile: string;
            backingformat: string;
            clustersize: number;
            compat: string;
            preallocation: string;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_disk_create.
     */
    class DiskCreate extends GObject.Object {
        static $gtype: GObject.GType<DiskCreate>;

        // Own properties of Guestfs.DiskCreate

        /**
         * A string.
         */
        get backingfile(): string;
        set backingfile(val: string);
        /**
         * A string.
         */
        get backingformat(): string;
        set backingformat(val: string);
        /**
         * A 32-bit integer.
         */
        get clustersize(): number;
        set clustersize(val: number);
        /**
         * A string.
         */
        get compat(): string;
        set compat(val: string);
        /**
         * A string.
         */
        get preallocation(): string;
        set preallocation(val: string);

        // Constructors of Guestfs.DiskCreate

        constructor(properties?: Partial<DiskCreate.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DiskCreate;
    }

    module DownloadBlocks {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            unallocated: Tristate;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_download_blocks.
     */
    class DownloadBlocks extends GObject.Object {
        static $gtype: GObject.GType<DownloadBlocks>;

        // Own properties of Guestfs.DownloadBlocks

        /**
         * A boolean.
         */
        get unallocated(): Tristate;
        set unallocated(val: Tristate);

        // Constructors of Guestfs.DownloadBlocks

        constructor(properties?: Partial<DownloadBlocks.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DownloadBlocks;
    }

    module E2fsck {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            correct: Tristate;
            forceall: Tristate;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_e2fsck.
     */
    class E2fsck extends GObject.Object {
        static $gtype: GObject.GType<E2fsck>;

        // Own properties of Guestfs.E2fsck

        /**
         * A boolean.
         */
        get correct(): Tristate;
        set correct(val: Tristate);
        /**
         * A boolean.
         */
        get forceall(): Tristate;
        set forceall(val: Tristate);

        // Constructors of Guestfs.E2fsck

        constructor(properties?: Partial<E2fsck.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): E2fsck;
    }

    module Fstrim {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            length: number;
            minimumfreeextent: number;
            offset: number;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_fstrim.
     */
    class Fstrim extends GObject.Object {
        static $gtype: GObject.GType<Fstrim>;

        // Own properties of Guestfs.Fstrim

        /**
         * A 64-bit integer.
         */
        get length(): number;
        set length(val: number);
        /**
         * A 64-bit integer.
         */
        get minimumfreeextent(): number;
        set minimumfreeextent(val: number);
        /**
         * A 64-bit integer.
         */
        get offset(): number;
        set offset(val: number);

        // Constructors of Guestfs.Fstrim

        constructor(properties?: Partial<Fstrim.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Fstrim;
    }

    module GlobExpand {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            directoryslash: Tristate;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_glob_expand.
     */
    class GlobExpand extends GObject.Object {
        static $gtype: GObject.GType<GlobExpand>;

        // Own properties of Guestfs.GlobExpand

        /**
         * A boolean.
         */
        get directoryslash(): Tristate;
        set directoryslash(val: Tristate);

        // Constructors of Guestfs.GlobExpand

        constructor(properties?: Partial<GlobExpand.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): GlobExpand;
    }

    module Grep {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            compressed: Tristate;
            extended: Tristate;
            fixed: Tristate;
            insensitive: Tristate;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_grep.
     */
    class Grep extends GObject.Object {
        static $gtype: GObject.GType<Grep>;

        // Own properties of Guestfs.Grep

        /**
         * A boolean.
         */
        get compressed(): Tristate;
        set compressed(val: Tristate);
        /**
         * A boolean.
         */
        get extended(): Tristate;
        set extended(val: Tristate);
        /**
         * A boolean.
         */
        get fixed(): Tristate;
        set fixed(val: Tristate);
        /**
         * A boolean.
         */
        get insensitive(): Tristate;
        set insensitive(val: Tristate);

        // Constructors of Guestfs.Grep

        constructor(properties?: Partial<Grep.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Grep;
    }

    module HivexOpen {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            debug: Tristate;
            unsafe: Tristate;
            verbose: Tristate;
            write: Tristate;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_hivex_open.
     */
    class HivexOpen extends GObject.Object {
        static $gtype: GObject.GType<HivexOpen>;

        // Own properties of Guestfs.HivexOpen

        /**
         * A boolean.
         */
        get debug(): Tristate;
        set debug(val: Tristate);
        /**
         * A boolean.
         */
        get unsafe(): Tristate;
        set unsafe(val: Tristate);
        /**
         * A boolean.
         */
        get verbose(): Tristate;
        set verbose(val: Tristate);
        /**
         * A boolean.
         */
        get write(): Tristate;
        set write(val: Tristate);

        // Constructors of Guestfs.HivexOpen

        constructor(properties?: Partial<HivexOpen.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): HivexOpen;
    }

    module InspectGetIcon {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            favicon: Tristate;
            highquality: Tristate;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_inspect_get_icon.
     */
    class InspectGetIcon extends GObject.Object {
        static $gtype: GObject.GType<InspectGetIcon>;

        // Own properties of Guestfs.InspectGetIcon

        /**
         * A boolean.
         */
        get favicon(): Tristate;
        set favicon(val: Tristate);
        /**
         * A boolean.
         */
        get highquality(): Tristate;
        set highquality(val: Tristate);

        // Constructors of Guestfs.InspectGetIcon

        constructor(properties?: Partial<InspectGetIcon.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): InspectGetIcon;
    }

    module InternalTest {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            obool: Tristate;
            oint: number;
            oint64: number;
            ostring: string;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_internal_test.
     */
    class InternalTest extends GObject.Object {
        static $gtype: GObject.GType<InternalTest>;

        // Own properties of Guestfs.InternalTest

        /**
         * A boolean.
         */
        get obool(): Tristate;
        set obool(val: Tristate);
        /**
         * A 32-bit integer.
         */
        get oint(): number;
        set oint(val: number);
        /**
         * A 64-bit integer.
         */
        get oint64(): number;
        set oint64(val: number);
        /**
         * A string.
         */
        get ostring(): string;
        set ostring(val: string);

        // Constructors of Guestfs.InternalTest

        constructor(properties?: Partial<InternalTest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): InternalTest;
    }

    module InternalTest63Optargs {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            opt1: number;
            opt10: number;
            opt11: number;
            opt12: number;
            opt13: number;
            opt14: number;
            opt15: number;
            opt16: number;
            opt17: number;
            opt18: number;
            opt19: number;
            opt2: number;
            opt20: number;
            opt21: number;
            opt22: number;
            opt23: number;
            opt24: number;
            opt25: number;
            opt26: number;
            opt27: number;
            opt28: number;
            opt29: number;
            opt3: number;
            opt30: number;
            opt31: number;
            opt32: number;
            opt33: number;
            opt34: number;
            opt35: number;
            opt36: number;
            opt37: number;
            opt38: number;
            opt39: number;
            opt4: number;
            opt40: number;
            opt41: number;
            opt42: number;
            opt43: number;
            opt44: number;
            opt45: number;
            opt46: number;
            opt47: number;
            opt48: number;
            opt49: number;
            opt5: number;
            opt50: number;
            opt51: number;
            opt52: number;
            opt53: number;
            opt54: number;
            opt55: number;
            opt56: number;
            opt57: number;
            opt58: number;
            opt59: number;
            opt6: number;
            opt60: number;
            opt61: number;
            opt62: number;
            opt63: number;
            opt7: number;
            opt8: number;
            opt9: number;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_internal_test_63_optargs.
     */
    class InternalTest63Optargs extends GObject.Object {
        static $gtype: GObject.GType<InternalTest63Optargs>;

        // Own properties of Guestfs.InternalTest63Optargs

        /**
         * A 32-bit integer.
         */
        get opt1(): number;
        set opt1(val: number);
        /**
         * A 32-bit integer.
         */
        get opt10(): number;
        set opt10(val: number);
        /**
         * A 32-bit integer.
         */
        get opt11(): number;
        set opt11(val: number);
        /**
         * A 32-bit integer.
         */
        get opt12(): number;
        set opt12(val: number);
        /**
         * A 32-bit integer.
         */
        get opt13(): number;
        set opt13(val: number);
        /**
         * A 32-bit integer.
         */
        get opt14(): number;
        set opt14(val: number);
        /**
         * A 32-bit integer.
         */
        get opt15(): number;
        set opt15(val: number);
        /**
         * A 32-bit integer.
         */
        get opt16(): number;
        set opt16(val: number);
        /**
         * A 32-bit integer.
         */
        get opt17(): number;
        set opt17(val: number);
        /**
         * A 32-bit integer.
         */
        get opt18(): number;
        set opt18(val: number);
        /**
         * A 32-bit integer.
         */
        get opt19(): number;
        set opt19(val: number);
        /**
         * A 32-bit integer.
         */
        get opt2(): number;
        set opt2(val: number);
        /**
         * A 32-bit integer.
         */
        get opt20(): number;
        set opt20(val: number);
        /**
         * A 32-bit integer.
         */
        get opt21(): number;
        set opt21(val: number);
        /**
         * A 32-bit integer.
         */
        get opt22(): number;
        set opt22(val: number);
        /**
         * A 32-bit integer.
         */
        get opt23(): number;
        set opt23(val: number);
        /**
         * A 32-bit integer.
         */
        get opt24(): number;
        set opt24(val: number);
        /**
         * A 32-bit integer.
         */
        get opt25(): number;
        set opt25(val: number);
        /**
         * A 32-bit integer.
         */
        get opt26(): number;
        set opt26(val: number);
        /**
         * A 32-bit integer.
         */
        get opt27(): number;
        set opt27(val: number);
        /**
         * A 32-bit integer.
         */
        get opt28(): number;
        set opt28(val: number);
        /**
         * A 32-bit integer.
         */
        get opt29(): number;
        set opt29(val: number);
        /**
         * A 32-bit integer.
         */
        get opt3(): number;
        set opt3(val: number);
        /**
         * A 32-bit integer.
         */
        get opt30(): number;
        set opt30(val: number);
        /**
         * A 32-bit integer.
         */
        get opt31(): number;
        set opt31(val: number);
        /**
         * A 32-bit integer.
         */
        get opt32(): number;
        set opt32(val: number);
        /**
         * A 32-bit integer.
         */
        get opt33(): number;
        set opt33(val: number);
        /**
         * A 32-bit integer.
         */
        get opt34(): number;
        set opt34(val: number);
        /**
         * A 32-bit integer.
         */
        get opt35(): number;
        set opt35(val: number);
        /**
         * A 32-bit integer.
         */
        get opt36(): number;
        set opt36(val: number);
        /**
         * A 32-bit integer.
         */
        get opt37(): number;
        set opt37(val: number);
        /**
         * A 32-bit integer.
         */
        get opt38(): number;
        set opt38(val: number);
        /**
         * A 32-bit integer.
         */
        get opt39(): number;
        set opt39(val: number);
        /**
         * A 32-bit integer.
         */
        get opt4(): number;
        set opt4(val: number);
        /**
         * A 32-bit integer.
         */
        get opt40(): number;
        set opt40(val: number);
        /**
         * A 32-bit integer.
         */
        get opt41(): number;
        set opt41(val: number);
        /**
         * A 32-bit integer.
         */
        get opt42(): number;
        set opt42(val: number);
        /**
         * A 32-bit integer.
         */
        get opt43(): number;
        set opt43(val: number);
        /**
         * A 32-bit integer.
         */
        get opt44(): number;
        set opt44(val: number);
        /**
         * A 32-bit integer.
         */
        get opt45(): number;
        set opt45(val: number);
        /**
         * A 32-bit integer.
         */
        get opt46(): number;
        set opt46(val: number);
        /**
         * A 32-bit integer.
         */
        get opt47(): number;
        set opt47(val: number);
        /**
         * A 32-bit integer.
         */
        get opt48(): number;
        set opt48(val: number);
        /**
         * A 32-bit integer.
         */
        get opt49(): number;
        set opt49(val: number);
        /**
         * A 32-bit integer.
         */
        get opt5(): number;
        set opt5(val: number);
        /**
         * A 32-bit integer.
         */
        get opt50(): number;
        set opt50(val: number);
        /**
         * A 32-bit integer.
         */
        get opt51(): number;
        set opt51(val: number);
        /**
         * A 32-bit integer.
         */
        get opt52(): number;
        set opt52(val: number);
        /**
         * A 32-bit integer.
         */
        get opt53(): number;
        set opt53(val: number);
        /**
         * A 32-bit integer.
         */
        get opt54(): number;
        set opt54(val: number);
        /**
         * A 32-bit integer.
         */
        get opt55(): number;
        set opt55(val: number);
        /**
         * A 32-bit integer.
         */
        get opt56(): number;
        set opt56(val: number);
        /**
         * A 32-bit integer.
         */
        get opt57(): number;
        set opt57(val: number);
        /**
         * A 32-bit integer.
         */
        get opt58(): number;
        set opt58(val: number);
        /**
         * A 32-bit integer.
         */
        get opt59(): number;
        set opt59(val: number);
        /**
         * A 32-bit integer.
         */
        get opt6(): number;
        set opt6(val: number);
        /**
         * A 32-bit integer.
         */
        get opt60(): number;
        set opt60(val: number);
        /**
         * A 32-bit integer.
         */
        get opt61(): number;
        set opt61(val: number);
        /**
         * A 32-bit integer.
         */
        get opt62(): number;
        set opt62(val: number);
        /**
         * A 32-bit integer.
         */
        get opt63(): number;
        set opt63(val: number);
        /**
         * A 32-bit integer.
         */
        get opt7(): number;
        set opt7(val: number);
        /**
         * A 32-bit integer.
         */
        get opt8(): number;
        set opt8(val: number);
        /**
         * A 32-bit integer.
         */
        get opt9(): number;
        set opt9(val: number);

        // Constructors of Guestfs.InternalTest63Optargs

        constructor(properties?: Partial<InternalTest63Optargs.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): InternalTest63Optargs;
    }

    module InternalTestOnlyOptargs {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            test: number;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_internal_test_only_optargs.
     */
    class InternalTestOnlyOptargs extends GObject.Object {
        static $gtype: GObject.GType<InternalTestOnlyOptargs>;

        // Own properties of Guestfs.InternalTestOnlyOptargs

        /**
         * A 32-bit integer.
         */
        get test(): number;
        set test(val: number);

        // Constructors of Guestfs.InternalTestOnlyOptargs

        constructor(properties?: Partial<InternalTestOnlyOptargs.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): InternalTestOnlyOptargs;
    }

    module IsBlockdev {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            followsymlinks: Tristate;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_is_blockdev.
     */
    class IsBlockdev extends GObject.Object {
        static $gtype: GObject.GType<IsBlockdev>;

        // Own properties of Guestfs.IsBlockdev

        /**
         * A boolean.
         */
        get followsymlinks(): Tristate;
        set followsymlinks(val: Tristate);

        // Constructors of Guestfs.IsBlockdev

        constructor(properties?: Partial<IsBlockdev.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): IsBlockdev;
    }

    module IsChardev {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            followsymlinks: Tristate;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_is_chardev.
     */
    class IsChardev extends GObject.Object {
        static $gtype: GObject.GType<IsChardev>;

        // Own properties of Guestfs.IsChardev

        /**
         * A boolean.
         */
        get followsymlinks(): Tristate;
        set followsymlinks(val: Tristate);

        // Constructors of Guestfs.IsChardev

        constructor(properties?: Partial<IsChardev.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): IsChardev;
    }

    module IsDir {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            followsymlinks: Tristate;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_is_dir.
     */
    class IsDir extends GObject.Object {
        static $gtype: GObject.GType<IsDir>;

        // Own properties of Guestfs.IsDir

        /**
         * A boolean.
         */
        get followsymlinks(): Tristate;
        set followsymlinks(val: Tristate);

        // Constructors of Guestfs.IsDir

        constructor(properties?: Partial<IsDir.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): IsDir;
    }

    module IsFifo {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            followsymlinks: Tristate;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_is_fifo.
     */
    class IsFifo extends GObject.Object {
        static $gtype: GObject.GType<IsFifo>;

        // Own properties of Guestfs.IsFifo

        /**
         * A boolean.
         */
        get followsymlinks(): Tristate;
        set followsymlinks(val: Tristate);

        // Constructors of Guestfs.IsFifo

        constructor(properties?: Partial<IsFifo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): IsFifo;
    }

    module IsFile {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            followsymlinks: Tristate;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_is_file.
     */
    class IsFile extends GObject.Object {
        static $gtype: GObject.GType<IsFile>;

        // Own properties of Guestfs.IsFile

        /**
         * A boolean.
         */
        get followsymlinks(): Tristate;
        set followsymlinks(val: Tristate);

        // Constructors of Guestfs.IsFile

        constructor(properties?: Partial<IsFile.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): IsFile;
    }

    module IsSocket {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            followsymlinks: Tristate;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_is_socket.
     */
    class IsSocket extends GObject.Object {
        static $gtype: GObject.GType<IsSocket>;

        // Own properties of Guestfs.IsSocket

        /**
         * A boolean.
         */
        get followsymlinks(): Tristate;
        set followsymlinks(val: Tristate);

        // Constructors of Guestfs.IsSocket

        constructor(properties?: Partial<IsSocket.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): IsSocket;
    }

    module MDCreate {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            chunk: number;
            level: string;
            missingbitmap: number;
            nrdevices: number;
            spare: number;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_md_create.
     */
    class MDCreate extends GObject.Object {
        static $gtype: GObject.GType<MDCreate>;

        // Own properties of Guestfs.MDCreate

        /**
         * A 64-bit integer.
         */
        get chunk(): number;
        set chunk(val: number);
        /**
         * A string.
         */
        get level(): string;
        set level(val: string);
        /**
         * A 64-bit integer.
         */
        get missingbitmap(): number;
        set missingbitmap(val: number);
        /**
         * A 32-bit integer.
         */
        get nrdevices(): number;
        set nrdevices(val: number);
        /**
         * A 32-bit integer.
         */
        get spare(): number;
        set spare(val: number);

        // Constructors of Guestfs.MDCreate

        constructor(properties?: Partial<MDCreate.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MDCreate;
    }

    module Mke2fs {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            blockscount: number;
            blocksize: number;
            blockspergroup: number;
            bytesperinode: number;
            creatoros: string;
            discard: Tristate;
            extent: Tristate;
            filetype: Tristate;
            flexbg: Tristate;
            forcecreate: Tristate;
            fragsize: number;
            fstype: string;
            hasjournal: Tristate;
            inodesize: number;
            journaldev: Tristate;
            journaldevice: string;
            journalsize: number;
            label: string;
            largefile: Tristate;
            lastmounteddir: string;
            lazyitableinit: Tristate;
            lazyjournalinit: Tristate;
            maxonlineresize: number;
            mmpupdateinterval: number;
            numberofgroups: number;
            numberofinodes: number;
            quota: Tristate;
            quotatype: Tristate;
            reservedblockspercentage: number;
            resizeinode: Tristate;
            sparsesuper: Tristate;
            stridesize: number;
            stripewidth: number;
            testfs: Tristate;
            uninitbg: Tristate;
            usagetype: string;
            uuid: string;
            writesbandgrouponly: Tristate;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_mke2fs.
     */
    class Mke2fs extends GObject.Object {
        static $gtype: GObject.GType<Mke2fs>;

        // Own properties of Guestfs.Mke2fs

        /**
         * A 64-bit integer.
         */
        get blockscount(): number;
        set blockscount(val: number);
        /**
         * A 64-bit integer.
         */
        get blocksize(): number;
        set blocksize(val: number);
        /**
         * A 64-bit integer.
         */
        get blockspergroup(): number;
        set blockspergroup(val: number);
        /**
         * A 64-bit integer.
         */
        get bytesperinode(): number;
        set bytesperinode(val: number);
        /**
         * A string.
         */
        get creatoros(): string;
        set creatoros(val: string);
        /**
         * A boolean.
         */
        get discard(): Tristate;
        set discard(val: Tristate);
        /**
         * A boolean.
         */
        get extent(): Tristate;
        set extent(val: Tristate);
        /**
         * A boolean.
         */
        get filetype(): Tristate;
        set filetype(val: Tristate);
        /**
         * A boolean.
         */
        get flexbg(): Tristate;
        set flexbg(val: Tristate);
        /**
         * A boolean.
         */
        get forcecreate(): Tristate;
        set forcecreate(val: Tristate);
        /**
         * A 64-bit integer.
         */
        get fragsize(): number;
        set fragsize(val: number);
        /**
         * A string.
         */
        get fstype(): string;
        set fstype(val: string);
        /**
         * A boolean.
         */
        get hasjournal(): Tristate;
        set hasjournal(val: Tristate);
        /**
         * A 64-bit integer.
         */
        get inodesize(): number;
        set inodesize(val: number);
        /**
         * A boolean.
         */
        get journaldev(): Tristate;
        set journaldev(val: Tristate);
        /**
         * A string.
         */
        get journaldevice(): string;
        set journaldevice(val: string);
        /**
         * A 64-bit integer.
         */
        get journalsize(): number;
        set journalsize(val: number);
        /**
         * A string.
         */
        get label(): string;
        set label(val: string);
        /**
         * A boolean.
         */
        get largefile(): Tristate;
        set largefile(val: Tristate);
        /**
         * A string.
         */
        get lastmounteddir(): string;
        set lastmounteddir(val: string);
        /**
         * A boolean.
         */
        get lazyitableinit(): Tristate;
        set lazyitableinit(val: Tristate);
        /**
         * A boolean.
         */
        get lazyjournalinit(): Tristate;
        set lazyjournalinit(val: Tristate);
        /**
         * A 64-bit integer.
         */
        get maxonlineresize(): number;
        set maxonlineresize(val: number);
        /**
         * A 32-bit integer.
         */
        get mmpupdateinterval(): number;
        set mmpupdateinterval(val: number);
        /**
         * A 64-bit integer.
         */
        get numberofgroups(): number;
        set numberofgroups(val: number);
        /**
         * A 64-bit integer.
         */
        get numberofinodes(): number;
        set numberofinodes(val: number);
        /**
         * A boolean.
         */
        get quota(): Tristate;
        set quota(val: Tristate);
        /**
         * A boolean.
         */
        get quotatype(): Tristate;
        set quotatype(val: Tristate);
        /**
         * A 32-bit integer.
         */
        get reservedblockspercentage(): number;
        set reservedblockspercentage(val: number);
        /**
         * A boolean.
         */
        get resizeinode(): Tristate;
        set resizeinode(val: Tristate);
        /**
         * A boolean.
         */
        get sparsesuper(): Tristate;
        set sparsesuper(val: Tristate);
        /**
         * A 64-bit integer.
         */
        get stridesize(): number;
        set stridesize(val: number);
        /**
         * A 64-bit integer.
         */
        get stripewidth(): number;
        set stripewidth(val: number);
        /**
         * A boolean.
         */
        get testfs(): Tristate;
        set testfs(val: Tristate);
        /**
         * A boolean.
         */
        get uninitbg(): Tristate;
        set uninitbg(val: Tristate);
        /**
         * A string.
         */
        get usagetype(): string;
        set usagetype(val: string);
        /**
         * A string.
         */
        get uuid(): string;
        set uuid(val: string);
        /**
         * A boolean.
         */
        get writesbandgrouponly(): Tristate;
        set writesbandgrouponly(val: Tristate);

        // Constructors of Guestfs.Mke2fs

        constructor(properties?: Partial<Mke2fs.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Mke2fs;
    }

    module Mkfs {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            blocksize: number;
            features: string;
            inode: number;
            label: string;
            sectorsize: number;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_mkfs.
     */
    class Mkfs extends GObject.Object {
        static $gtype: GObject.GType<Mkfs>;

        // Own properties of Guestfs.Mkfs

        /**
         * A 32-bit integer.
         */
        get blocksize(): number;
        set blocksize(val: number);
        /**
         * A string.
         */
        get features(): string;
        set features(val: string);
        /**
         * A 32-bit integer.
         */
        get inode(): number;
        set inode(val: number);
        /**
         * A string.
         */
        get label(): string;
        set label(val: string);
        /**
         * A 32-bit integer.
         */
        get sectorsize(): number;
        set sectorsize(val: number);

        // Constructors of Guestfs.Mkfs

        constructor(properties?: Partial<Mkfs.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Mkfs;
    }

    module MkfsBtrfs {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            allocstart: number;
            bytecount: number;
            datatype: string;
            label: string;
            leafsize: number;
            metadata: string;
            nodesize: number;
            sectorsize: number;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_mkfs_btrfs.
     */
    class MkfsBtrfs extends GObject.Object {
        static $gtype: GObject.GType<MkfsBtrfs>;

        // Own properties of Guestfs.MkfsBtrfs

        /**
         * A 64-bit integer.
         */
        get allocstart(): number;
        set allocstart(val: number);
        /**
         * A 64-bit integer.
         */
        get bytecount(): number;
        set bytecount(val: number);
        /**
         * A string.
         */
        get datatype(): string;
        set datatype(val: string);
        /**
         * A string.
         */
        get label(): string;
        set label(val: string);
        /**
         * A 32-bit integer.
         */
        get leafsize(): number;
        set leafsize(val: number);
        /**
         * A string.
         */
        get metadata(): string;
        set metadata(val: string);
        /**
         * A 32-bit integer.
         */
        get nodesize(): number;
        set nodesize(val: number);
        /**
         * A 32-bit integer.
         */
        get sectorsize(): number;
        set sectorsize(val: number);

        // Constructors of Guestfs.MkfsBtrfs

        constructor(properties?: Partial<MkfsBtrfs.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MkfsBtrfs;
    }

    module Mksquashfs {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            compress: string;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_mksquashfs.
     */
    class Mksquashfs extends GObject.Object {
        static $gtype: GObject.GType<Mksquashfs>;

        // Own properties of Guestfs.Mksquashfs

        /**
         * A string.
         */
        get compress(): string;
        set compress(val: string);

        // Constructors of Guestfs.Mksquashfs

        constructor(properties?: Partial<Mksquashfs.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Mksquashfs;
    }

    module Mkswap {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            label: string;
            uuid: string;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_mkswap.
     */
    class Mkswap extends GObject.Object {
        static $gtype: GObject.GType<Mkswap>;

        // Own properties of Guestfs.Mkswap

        /**
         * A string.
         */
        get label(): string;
        set label(val: string);
        /**
         * A string.
         */
        get uuid(): string;
        set uuid(val: string);

        // Constructors of Guestfs.Mkswap

        constructor(properties?: Partial<Mkswap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Mkswap;
    }

    module Mktemp {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            suffix: string;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_mktemp.
     */
    class Mktemp extends GObject.Object {
        static $gtype: GObject.GType<Mktemp>;

        // Own properties of Guestfs.Mktemp

        /**
         * A string.
         */
        get suffix(): string;
        set suffix(val: string);

        // Constructors of Guestfs.Mktemp

        constructor(properties?: Partial<Mktemp.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Mktemp;
    }

    module Mount9P {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            options: string;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_mount_9p.
     */
    class Mount9P extends GObject.Object {
        static $gtype: GObject.GType<Mount9P>;

        // Own properties of Guestfs.Mount9P

        /**
         * A string.
         */
        get options(): string;
        set options(val: string);

        // Constructors of Guestfs.Mount9P

        constructor(properties?: Partial<Mount9P.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Mount9P;
    }

    module MountLocal {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            cachetimeout: number;
            debugcalls: Tristate;
            options: string;
            readonly: Tristate;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_mount_local.
     */
    class MountLocal extends GObject.Object {
        static $gtype: GObject.GType<MountLocal>;

        // Own properties of Guestfs.MountLocal

        /**
         * A 32-bit integer.
         */
        get cachetimeout(): number;
        set cachetimeout(val: number);
        /**
         * A boolean.
         */
        get debugcalls(): Tristate;
        set debugcalls(val: Tristate);
        /**
         * A string.
         */
        get options(): string;
        set options(val: string);
        /**
         * A boolean.
         */
        get readonly(): Tristate;
        set readonly(val: Tristate);

        // Constructors of Guestfs.MountLocal

        constructor(properties?: Partial<MountLocal.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MountLocal;
    }

    module NTFSResizeOpts {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            force: Tristate;
            size: number;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_ntfsresize.
     */
    class NTFSResizeOpts extends GObject.Object {
        static $gtype: GObject.GType<NTFSResizeOpts>;

        // Own properties of Guestfs.NTFSResizeOpts

        /**
         * A boolean.
         */
        get force(): Tristate;
        set force(val: Tristate);
        /**
         * A 64-bit integer.
         */
        get size(): number;
        set size(val: number);

        // Constructors of Guestfs.NTFSResizeOpts

        constructor(properties?: Partial<NTFSResizeOpts.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): NTFSResizeOpts;
    }

    module NtfscloneOut {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            force: Tristate;
            ignorefscheck: Tristate;
            metadataonly: Tristate;
            preservetimestamps: Tristate;
            rescue: Tristate;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_ntfsclone_out.
     */
    class NtfscloneOut extends GObject.Object {
        static $gtype: GObject.GType<NtfscloneOut>;

        // Own properties of Guestfs.NtfscloneOut

        /**
         * A boolean.
         */
        get force(): Tristate;
        set force(val: Tristate);
        /**
         * A boolean.
         */
        get ignorefscheck(): Tristate;
        set ignorefscheck(val: Tristate);
        /**
         * A boolean.
         */
        get metadataonly(): Tristate;
        set metadataonly(val: Tristate);
        /**
         * A boolean.
         */
        get preservetimestamps(): Tristate;
        set preservetimestamps(val: Tristate);
        /**
         * A boolean.
         */
        get rescue(): Tristate;
        set rescue(val: Tristate);

        // Constructors of Guestfs.NtfscloneOut

        constructor(properties?: Partial<NtfscloneOut.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): NtfscloneOut;
    }

    module Ntfsfix {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            clearbadsectors: Tristate;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_ntfsfix.
     */
    class Ntfsfix extends GObject.Object {
        static $gtype: GObject.GType<Ntfsfix>;

        // Own properties of Guestfs.Ntfsfix

        /**
         * A boolean.
         */
        get clearbadsectors(): Tristate;
        set clearbadsectors(val: Tristate);

        // Constructors of Guestfs.Ntfsfix

        constructor(properties?: Partial<Ntfsfix.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Ntfsfix;
    }

    module Remount {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            rw: Tristate;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_remount.
     */
    class Remount extends GObject.Object {
        static $gtype: GObject.GType<Remount>;

        // Own properties of Guestfs.Remount

        /**
         * A boolean.
         */
        get rw(): Tristate;
        set rw(val: Tristate);

        // Constructors of Guestfs.Remount

        constructor(properties?: Partial<Remount.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Remount;
    }

    module Rsync {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            archive: Tristate;
            deletedest: Tristate;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_rsync.
     */
    class Rsync extends GObject.Object {
        static $gtype: GObject.GType<Rsync>;

        // Own properties of Guestfs.Rsync

        /**
         * A boolean.
         */
        get archive(): Tristate;
        set archive(val: Tristate);
        /**
         * A boolean.
         */
        get deletedest(): Tristate;
        set deletedest(val: Tristate);

        // Constructors of Guestfs.Rsync

        constructor(properties?: Partial<Rsync.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Rsync;
    }

    module RsyncIn {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            archive: Tristate;
            deletedest: Tristate;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_rsync_in.
     */
    class RsyncIn extends GObject.Object {
        static $gtype: GObject.GType<RsyncIn>;

        // Own properties of Guestfs.RsyncIn

        /**
         * A boolean.
         */
        get archive(): Tristate;
        set archive(val: Tristate);
        /**
         * A boolean.
         */
        get deletedest(): Tristate;
        set deletedest(val: Tristate);

        // Constructors of Guestfs.RsyncIn

        constructor(properties?: Partial<RsyncIn.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RsyncIn;
    }

    module RsyncOut {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            archive: Tristate;
            deletedest: Tristate;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_rsync_out.
     */
    class RsyncOut extends GObject.Object {
        static $gtype: GObject.GType<RsyncOut>;

        // Own properties of Guestfs.RsyncOut

        /**
         * A boolean.
         */
        get archive(): Tristate;
        set archive(val: Tristate);
        /**
         * A boolean.
         */
        get deletedest(): Tristate;
        set deletedest(val: Tristate);

        // Constructors of Guestfs.RsyncOut

        constructor(properties?: Partial<RsyncOut.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RsyncOut;
    }

    module SelinuxRelabel {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            force: Tristate;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_selinux_relabel.
     */
    class SelinuxRelabel extends GObject.Object {
        static $gtype: GObject.GType<SelinuxRelabel>;

        // Own properties of Guestfs.SelinuxRelabel

        /**
         * A boolean.
         */
        get force(): Tristate;
        set force(val: Tristate);

        // Constructors of Guestfs.SelinuxRelabel

        constructor(properties?: Partial<SelinuxRelabel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SelinuxRelabel;
    }

    module Session {
        // Signal callback interfaces

        interface Appliance {
            (params: SessionEventParams): void;
        }

        interface Close {
            (params: SessionEventParams): void;
        }

        interface Enter {
            (params: SessionEventParams): void;
        }

        interface LaunchDone {
            (object: SessionEventParams): void;
        }

        interface Library {
            (params: SessionEventParams): void;
        }

        interface LibvirtAuth {
            (object: SessionEventParams): void;
        }

        interface Progress {
            (params: SessionEventParams): void;
        }

        interface SubprocessQuit {
            (object: SessionEventParams): void;
        }

        interface Trace {
            (params: SessionEventParams): void;
        }

        interface Warning {
            (params: SessionEventParams): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A libguestfs session, encapsulating a single libguestfs handle.
     */
    class Session extends GObject.Object {
        static $gtype: GObject.GType<Session>;

        // Constructors of Guestfs.Session

        constructor(properties?: Partial<Session.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Session;

        // Own signals of Guestfs.Session

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'appliance', callback: (_source: this, params: SessionEventParams) => void): number;
        connect_after(signal: 'appliance', callback: (_source: this, params: SessionEventParams) => void): number;
        emit(signal: 'appliance', params: SessionEventParams): void;
        connect(signal: 'close', callback: (_source: this, params: SessionEventParams) => void): number;
        connect_after(signal: 'close', callback: (_source: this, params: SessionEventParams) => void): number;
        emit(signal: 'close', params: SessionEventParams): void;
        connect(signal: 'enter', callback: (_source: this, params: SessionEventParams) => void): number;
        connect_after(signal: 'enter', callback: (_source: this, params: SessionEventParams) => void): number;
        emit(signal: 'enter', params: SessionEventParams): void;
        connect(signal: 'launch-done', callback: (_source: this, object: SessionEventParams) => void): number;
        connect_after(signal: 'launch-done', callback: (_source: this, object: SessionEventParams) => void): number;
        emit(signal: 'launch-done', object: SessionEventParams): void;
        connect(signal: 'library', callback: (_source: this, params: SessionEventParams) => void): number;
        connect_after(signal: 'library', callback: (_source: this, params: SessionEventParams) => void): number;
        emit(signal: 'library', params: SessionEventParams): void;
        connect(signal: 'libvirt-auth', callback: (_source: this, object: SessionEventParams) => void): number;
        connect_after(signal: 'libvirt-auth', callback: (_source: this, object: SessionEventParams) => void): number;
        emit(signal: 'libvirt-auth', object: SessionEventParams): void;
        connect(signal: 'progress', callback: (_source: this, params: SessionEventParams) => void): number;
        connect_after(signal: 'progress', callback: (_source: this, params: SessionEventParams) => void): number;
        emit(signal: 'progress', params: SessionEventParams): void;
        connect(signal: 'subprocess-quit', callback: (_source: this, object: SessionEventParams) => void): number;
        connect_after(signal: 'subprocess-quit', callback: (_source: this, object: SessionEventParams) => void): number;
        emit(signal: 'subprocess-quit', object: SessionEventParams): void;
        connect(signal: 'trace', callback: (_source: this, params: SessionEventParams) => void): number;
        connect_after(signal: 'trace', callback: (_source: this, params: SessionEventParams) => void): number;
        emit(signal: 'trace', params: SessionEventParams): void;
        connect(signal: 'warning', callback: (_source: this, params: SessionEventParams) => void): number;
        connect_after(signal: 'warning', callback: (_source: this, params: SessionEventParams) => void): number;
        emit(signal: 'warning', params: SessionEventParams): void;

        // Own methods of Guestfs.Session

        /**
         * delete the default POSIX ACL of a directory
         *
         * This function deletes the default POSIX Access Control List (ACL)
         * attached to directory `dir`.
         *
         * This function depends on the feature "acl".
         * See also guestfs_session_feature_available().
         * @param dir
         * @returns true on success, false on error
         */
        acl_delete_def_file(dir: string): boolean;
        /**
         * get the POSIX ACL attached to a file
         *
         * This function returns the POSIX Access Control List (ACL) attached to
         * `path`. The ACL is returned in "long text form" (see acl(5)).
         *
         * The `acltype` parameter may be:
         *
         * `access`
         * Return the ordinary (access) ACL for any file, directory or other
         * filesystem object.
         *
         * `default`
         * Return the default ACL. Normally this only makes sense if `path` is a
         * directory.
         *
         * This function depends on the feature "acl".
         * See also guestfs_session_feature_available().
         * @param path
         * @param acltype
         * @returns the returned string, or NULL on error
         */
        acl_get_file(path: string, acltype: string): string;
        /**
         * set the POSIX ACL attached to a file
         *
         * This function sets the POSIX Access Control List (ACL) attached to
         * `path`.
         *
         * The `acltype` parameter may be:
         *
         * `access`
         * Set the ordinary (access) ACL for any file, directory or other
         * filesystem object.
         *
         * `default`
         * Set the default ACL. Normally this only makes sense if `path` is a
         * directory.
         *
         * The `acl` parameter is the new ACL in either "long text form" or "short
         * text form" (see acl(5)). The new ACL completely replaces any previous
         * ACL on the file. The ACL must contain the full Unix permissions (eg.
         * "u::rwx,g::rx,o::rx").
         *
         * If you are specifying individual users or groups, then the mask field is
         * also required (eg. "m::rwx"), followed by the "u:*ID*:..." and/or
         * "g:*ID*:..." field(s). A full ACL string might therefore look like this:
         *
         * <![CDATA[u::rwx,g::rwx,o::rwx,m::rwx,u:500:rwx,g:500:rwx]]>
         *
         * <![CDATA[\ Unix permissions / \mask/ \      ACL        /]]>
         *
         * You should use numeric UIDs and GIDs. To map usernames and groupnames to
         * the correct numeric ID in the context of the guest, use the Augeas
         * functions (see guestfs_session_aug_init()).
         *
         * This function depends on the feature "acl".
         * See also guestfs_session_feature_available().
         * @param path
         * @param acltype
         * @param acl
         * @returns true on success, false on error
         */
        acl_set_file(path: string, acltype: string, acl: string): boolean;
        /**
         * add a CD-ROM disk image to examine
         *
         * This function adds a virtual CD-ROM disk image to the guest.
         *
         * The image is added as read-only drive, so this function is equivalent of
         * guestfs_session_add_drive_ro().
         * @param filename
         * @returns true on success, false on error
         */
        add_cdrom(filename: string): boolean;
        /**
         * add the disk(s) from a named libvirt domain
         *
         * This function adds the disk(s) attached to the named libvirt domain
         * `dom`. It works by connecting to libvirt, requesting the domain and
         * domain XML from libvirt, parsing it for disks, and calling
         * guestfs_session_add_drive_opts() on each one.
         *
         * The number of disks added is returned. This operation is atomic: if an
         * error is returned, then no disks are added.
         *
         * This function does some minimal checks to make sure the libvirt domain
         * is not running (unless `readonly` is true). In a future version we will
         * try to acquire the libvirt lock on each disk.
         *
         * Disks must be accessible locally. This often means that adding disks
         * from a remote libvirt connection (see <ulink
         * url='https://libvirt.org/remote.html'> http://libvirt.org/remote.html
         * </ulink>) will fail unless those disks are accessible via the same
         * device path locally too.
         *
         * The optional `libvirturi` parameter sets the libvirt URI (see <ulink
         * url='https://libvirt.org/uri.html'> http://libvirt.org/uri.html
         * </ulink>). If this is not set then we connect to the default libvirt URI
         * (or one set through an environment variable, see the libvirt
         * documentation for full details).
         *
         * The optional `live` flag is ignored in libguestfs &ge; 1.48.
         *
         * If the `allowuuid` flag is true (default is false) then a UUID *may* be
         * passed instead of the domain name. The `dom` string is treated as a UUID
         * first and looked up, and if that lookup fails then we treat `dom` as a
         * name as usual.
         *
         * The optional `readonlydisk` parameter controls what we do for disks which
         * are marked &lt;readonly/&gt; in the libvirt XML. Possible values are:
         *
         * readonlydisk = "error"
         * If `readonly` is false:
         *
         * The whole call is aborted with an error if any disk with the
         * &lt;readonly/&gt; flag is found.
         *
         * If `readonly` is true:
         *
         * Disks with the &lt;readonly/&gt; flag are added read-only.
         *
         * readonlydisk = "read"
         * If `readonly` is false:
         *
         * Disks with the &lt;readonly/&gt; flag are added read-only. Other
         * disks are added read/write.
         *
         * If `readonly` is true:
         *
         * Disks with the &lt;readonly/&gt; flag are added read-only.
         *
         * readonlydisk = "write" (default)
         * If `readonly` is false:
         *
         * Disks with the &lt;readonly/&gt; flag are added read/write.
         *
         * If `readonly` is true:
         *
         * Disks with the &lt;readonly/&gt; flag are added read-only.
         *
         * readonlydisk = "ignore"
         * If `readonly` is true or false:
         *
         * Disks with the &lt;readonly/&gt; flag are skipped.
         *
         * If present, the value of `logical_block_size` attribute of
         * &lt;blockio/&gt; tag in libvirt XML will be passed as `blocksize`
         * parameter to guestfs_session_add_drive_opts().
         *
         * The other optional parameters are passed directly through to
         * guestfs_session_add_drive_opts().
         * @param dom
         * @param optargs a GuestfsAddDomain containing optional arguments
         * @returns the returned value, or -1 on error
         */
        add_domain(dom: string, optargs?: AddDomain | null): number;
        /**
         * add an image to examine or modify
         *
         * This function adds a disk image called filename to the handle. filename
         * may be a regular host file or a host device.
         *
         * When this function is called before guestfs_session_launch() (the usual
         * case) then the first time you call this function, the disk appears in
         * the API as /dev/sda, the second time as /dev/sdb, and so on.
         *
         * You don't necessarily need to be root when using libguestfs. However you
         * obviously do need sufficient permissions to access the filename for
         * whatever operations you want to perform (ie. read access if you just
         * want to read the image or write access if you want to modify the image).
         *
         * This call checks that filename exists.
         *
         * filename may be the special string "/dev/null". See "NULL DISKS" in
         * guestfs(3).
         *
         * The optional arguments are:
         *
         * `readonly`
         * If true then the image is treated as read-only. Writes are still
         * allowed, but they are stored in a temporary snapshot overlay which
         * is discarded at the end. The disk that you add is not modified.
         *
         * `format`
         * This forces the image format. If you omit this (or use
         * guestfs_session_add_drive() or guestfs_session_add_drive_ro()) then
         * the format is automatically detected. Possible formats include `raw`
         * and `qcow2`.
         *
         * Automatic detection of the format opens you up to a potential
         * security hole when dealing with untrusted raw-format images. See
         * CVE-2010-3851 and <ulink
         * url='https://bugzilla.redhat.com/show_bug.cgi?id=642934'>
         * RHBZ&num;642934 </ulink>. Specifying the format closes this security
         * hole.
         *
         * `iface`
         * This rarely-used option lets you emulate the behaviour of the
         * deprecated guestfs_session_add_drive_with_if() call (q.v.)
         *
         * `name`
         * This field used to be passed as a hint for guest inspection, but it
         * is no longer used.
         *
         * `label`
         * Give the disk a label. The label should be a unique, short string
         * using *only* ASCII characters "[a-zA-Z]". As well as its usual name
         * in the API (such as /dev/sda), the drive will also be named
         * /dev/disk/guestfs/*label*.
         *
         * See "DISK LABELS" in guestfs(3).
         *
         * `protocol`
         * The optional protocol argument can be used to select an alternate
         * source protocol.
         *
         * See also: "REMOTE STORAGE" in guestfs(3).
         *
         * "protocol = "file""
         * filename is interpreted as a local file or device. This is the
         * default if the optional protocol parameter is omitted.
         *
         * "protocol = "ftp"|"ftps"|"http"|"https"|"tftp""
         * Connect to a remote FTP, HTTP or TFTP server. The `server`
         * parameter must also be supplied - see below.
         *
         * See also: "FTP, HTTP AND TFTP" in guestfs(3)
         *
         * "protocol = "gluster""
         * Connect to the GlusterFS server. The `server` parameter must also
         * be supplied - see below.
         *
         * See also: "GLUSTER" in guestfs(3)
         *
         * "protocol = "iscsi""
         * Connect to the iSCSI server. The `server` parameter must also be
         * supplied - see below. The `username` parameter may be supplied.
         * See below. The `secret` parameter may be supplied. See below.
         *
         * See also: "ISCSI" in guestfs(3).
         *
         * "protocol = "nbd""
         * Connect to the Network Block Device server. The `server`
         * parameter must also be supplied - see below.
         *
         * See also: "NETWORK BLOCK DEVICE" in guestfs(3).
         *
         * "protocol = "rbd""
         * Connect to the Ceph (librbd/RBD) server. The `server` parameter
         * must also be supplied - see below. The `username` parameter may
         * be supplied. See below. The `secret` parameter may be supplied.
         * See below.
         *
         * See also: "CEPH" in guestfs(3).
         *
         * "protocol = "sheepdog""
         * Connect to the Sheepdog server. The `server` parameter may also
         * be supplied - see below.
         *
         * See also: "SHEEPDOG" in guestfs(3).
         *
         * "protocol = "ssh""
         * Connect to the Secure Shell (ssh) server.
         *
         * The `server` parameter must be supplied. The `username` parameter
         * may be supplied. See below.
         *
         * See also: "SSH" in guestfs(3).
         *
         * `server`
         * For protocols which require access to a remote server, this is a
         * list of server(s).
         *
         * <![CDATA[Protocol       Number of servers required]]>
         *
         * <![CDATA[--------       --------------------------]]>
         *
         * <![CDATA[file           List must be empty or param not used at all]]>
         *
         * <![CDATA[ftp|ftps|http|https|tftp  Exactly one]]>
         *
         * <![CDATA[gluster        Exactly one]]>
         *
         * <![CDATA[iscsi          Exactly one]]>
         *
         * <![CDATA[nbd            Exactly one]]>
         *
         * <![CDATA[rbd            Zero or more]]>
         *
         * <![CDATA[sheepdog       Zero or more]]>
         *
         * <![CDATA[ssh            Exactly one]]>
         *
         * Each list element is a string specifying a server. The string must
         * be in one of the following formats:
         *
         * <![CDATA[hostname]]>
         *
         * <![CDATA[hostname:port]]>
         *
         * <![CDATA[tcp:hostname]]>
         *
         * <![CDATA[tcp:hostname:port]]>
         *
         * <![CDATA[unix:/path/to/socket]]>
         *
         * If the port number is omitted, then the standard port number for the
         * protocol is used (see /etc/services).
         *
         * `username`
         * For the `ftp,` `ftps,` `http,` `https,` `iscsi,` `rbd,` `ssh` and `tftp`
         * protocols, this specifies the remote username.
         *
         * If not given, then the local username is used for `ssh,` and no
         * authentication is attempted for ceph. But note this sometimes may
         * give unexpected results, for example if using the libvirt backend
         * and if the libvirt backend is configured to start the qemu appliance
         * as a special user such as "qemu.qemu". If in doubt, specify the
         * remote username you want.
         *
         * `secret`
         * For the `rbd` protocol only, this specifies the ‘secret’ to use when
         * connecting to the remote device. It must be base64 encoded.
         *
         * If not given, then a secret matching the given username will be
         * looked up in the default keychain locations, or if no username is
         * given, then no authentication will be used.
         *
         * `cachemode`
         * Choose whether or not libguestfs will obey sync operations (safe but
         * slow) or not (unsafe but fast). The possible values for this string
         * are:
         *
         * "cachemode = "writeback""
         * This is the default.
         *
         * Write operations in the API do not return until a write(2) call
         * has completed in the host [but note this does not imply that
         * anything gets written to disk].
         *
         * Sync operations in the API, including implicit syncs caused by
         * filesystem journalling, will not return until an fdatasync(2)
         * call has completed in the host, indicating that data has been
         * committed to disk.
         *
         * "cachemode = "unsafe""
         * In this mode, there are no guarantees. Libguestfs may cache
         * anything and ignore sync requests. This is suitable only for
         * scratch or temporary disks.
         *
         * `discard`
         * Enable or disable discard (a.k.a. trim or unmap) support on this
         * drive. If enabled, operations such as guestfs_session_fstrim() will
         * be able to discard / make thin / punch holes in the underlying host
         * file or device.
         *
         * Possible discard settings are:
         *
         * "discard = "disable""
         * Disable discard support. This is the default.
         *
         * "discard = "enable""
         * Enable discard support. Fail if discard is not possible.
         *
         * "discard = "besteffort""
         * Enable discard support if possible, but don't fail if it is not
         * supported.
         *
         * Since not all backends and not all underlying systems support
         * discard, this is a good choice if you want to use discard if
         * possible, but don't mind if it doesn't work.
         *
         * `copyonread`
         * The boolean parameter `copyonread` enables copy-on-read support. This
         * only affects disk formats which have backing files, and causes reads
         * to be stored in the overlay layer, speeding up multiple reads of the
         * same area of disk.
         *
         * The default is false.
         *
         * `blocksize`
         * This parameter sets the sector size of the disk. Possible values are
         * `5`12 (the default if the parameter is omitted) or `4`096. Use `4`096
         * when handling an "Advanced Format" disk that uses 4K sector size
         * (<ulink url='https://en.wikipedia.org/wiki/Advanced_Format'>
         * http://en.wikipedia.org/wiki/Advanced_Format </ulink>).
         *
         * Only a subset of the backends support this parameter (currently only
         * the libvirt and direct backends do).
         * @param filename
         * @param optargs a GuestfsAddDrive containing optional arguments
         * @returns true on success, false on error
         */
        add_drive(filename: string, optargs?: AddDrive | null): boolean;
        /**
         * add a drive in snapshot mode (read-only)
         *
         * This function is the equivalent of calling
         * guestfs_session_add_drive_opts() with the optional parameter
         * `GUESTFS_ADD_DRIVE_OPTS_READONLY` set to 1, so the disk is added
         * read-only, with the format being detected automatically.
         * @param filename
         * @returns true on success, false on error
         */
        add_drive_ro(filename: string): boolean;
        /**
         * add a drive read-only specifying the QEMU block emulation to use
         *
         * This is the same as guestfs_session_add_drive_ro() but it allows you to
         * specify the QEMU interface emulation to use at run time. Both the direct
         * and the libvirt backends ignore `iface`.
         * @param filename
         * @param iface
         * @returns true on success, false on error
         */
        add_drive_ro_with_if(filename: string, iface: string): boolean;
        /**
         * add a temporary scratch drive
         *
         * This command adds a temporary scratch drive to the handle. The `size`
         * parameter is the virtual size (in bytes). The scratch drive is blank
         * initially (all reads return zeroes until you start writing to it). The
         * drive is deleted when the handle is closed.
         *
         * The optional arguments `name,` `label` and `blocksize` are passed through
         * to guestfs_session_add_drive_opts().
         * @param size
         * @param optargs a GuestfsAddDriveScratch containing optional arguments
         * @returns true on success, false on error
         */
        add_drive_scratch(size: number, optargs?: AddDriveScratch | null): boolean;
        /**
         * add a drive specifying the QEMU block emulation to use
         *
         * This is the same as guestfs_session_add_drive() but it allows you to
         * specify the QEMU interface emulation to use at run time. Both the direct
         * and the libvirt backends ignore `iface`.
         * @param filename
         * @param iface
         * @returns true on success, false on error
         */
        add_drive_with_if(filename: string, iface: string): boolean;
        /**
         * add the disk(s) from a libvirt domain
         *
         * This function adds the disk(s) attached to the libvirt domain `dom`. It
         * works by requesting the domain XML from libvirt, parsing it for disks,
         * and calling guestfs_session_add_drive_opts() on each one.
         *
         * In the C API we declare "void *dom", but really it has type
         * "virDomainPtr dom". This is so we don't need &lt;libvirt.h&gt;.
         *
         * The number of disks added is returned. This operation is atomic: if an
         * error is returned, then no disks are added.
         *
         * This function does some minimal checks to make sure the libvirt domain
         * is not running (unless `readonly` is true). In a future version we will
         * try to acquire the libvirt lock on each disk.
         *
         * Disks must be accessible locally. This often means that adding disks
         * from a remote libvirt connection (see <ulink
         * url='https://libvirt.org/remote.html'> http://libvirt.org/remote.html
         * </ulink>) will fail unless those disks are accessible via the same
         * device path locally too.
         *
         * The optional `live` flag is ignored in libguestfs &ge; 1.48.
         *
         * The optional `readonlydisk` parameter controls what we do for disks which
         * are marked &lt;readonly/&gt; in the libvirt XML. See
         * guestfs_session_add_domain() for possible values.
         *
         * If present, the value of `logical_block_size` attribute of
         * &lt;blockio/&gt; tag in libvirt XML will be passed as `blocksize`
         * parameter to guestfs_session_add_drive_opts().
         *
         * The other optional parameters are passed directly through to
         * guestfs_session_add_drive_opts().
         * @param dom pointer (not implemented in gobject bindings)
         * @param optargs a GuestfsAddLibvirtDom containing optional arguments
         * @returns the returned value, or -1 on error
         */
        add_libvirt_dom(dom?: any | null, optargs?: AddLibvirtDom | null): number;
        /**
         * clear Augeas path
         *
         * Set the value associated with `path` to `NULL`. This is the same as the
         * augtool(1) `clear` command.
         * @param augpath
         * @returns true on success, false on error
         */
        aug_clear(augpath: string): boolean;
        /**
         * close the current Augeas handle
         *
         * Close the current Augeas handle and free up any resources used by it.
         * After calling this, you have to call guestfs_session_aug_init() again
         * before you can use any other Augeas functions.
         * @returns true on success, false on error
         */
        aug_close(): boolean;
        /**
         * define an Augeas node
         *
         * Defines a variable `name` whose value is the result of evaluating `expr`.
         *
         * If `expr` evaluates to an empty nodeset, a node is created, equivalent to
         * calling guestfs_session_aug_set() `expr,` `val`. `name` will be the nodeset
         * containing that single node.
         *
         * On success this returns a pair containing the number of nodes in the
         * nodeset, and a boolean flag if a node was created.
         * @param name
         * @param expr
         * @param val
         * @returns a IntBool object, or NULL on error
         */
        aug_defnode(name: string, expr: string, val: string): IntBool;
        /**
         * define an Augeas variable
         *
         * Defines an Augeas variable `name` whose value is the result of evaluating
         * `expr`. If `expr` is NULL, then `name` is undefined.
         *
         * On success this returns the number of nodes in `expr,` or `0` if `expr`
         * evaluates to something which is not a nodeset.
         * @param name
         * @param expr
         * @returns the returned value, or -1 on error
         */
        aug_defvar(name: string, expr?: string | null): number;
        /**
         * look up the value of an Augeas path
         *
         * Look up the value associated with `path`. If `path` matches exactly one
         * node, the `value` is returned.
         * @param augpath
         * @returns the returned string, or NULL on error
         */
        aug_get(augpath: string): string;
        /**
         * create a new Augeas handle
         *
         * Create a new Augeas handle for editing configuration files. If there was
         * any previous Augeas handle associated with this guestfs session, then it
         * is closed.
         *
         * You must call this before using any other "guestfs_aug_*" commands.
         *
         * `root` is the filesystem root. `root` must not be NULL, use / instead.
         *
         * The flags are the same as the flags defined in &lt;augeas.h&gt;, the
         * logical *or* of the following integers:
         *
         * `AUG_SAVE_BACKUP` = 1
         * Keep the original file with a ".augsave" extension.
         *
         * `AUG_SAVE_NEWFILE` = 2
         * Save changes into a file with extension ".augnew", and do not
         * overwrite original. Overrides `AUG_SAVE_BACKUP`.
         *
         * `AUG_TYPE_CHECK` = 4
         * Typecheck lenses.
         *
         * This option is only useful when debugging Augeas lenses. Use of this
         * option may require additional memory for the libguestfs appliance.
         * You may need to set the `LIBGUESTFS_MEMSIZE` environment variable or
         * call guestfs_session_set_memsize().
         *
         * `AUG_NO_STDINC` = 8
         * Do not use standard load path for modules.
         *
         * `AUG_SAVE_NOOP` = 16
         * Make save a no-op, just record what would have been changed.
         *
         * `AUG_NO_LOAD` = 32
         * Do not load the tree in guestfs_session_aug_init().
         *
         * To close the handle, you can call guestfs_session_aug_close().
         *
         * To find out more about Augeas, see <ulink url='http://augeas.net/'>
         * http://augeas.net/ </ulink>.
         * @param root
         * @param flags
         * @returns true on success, false on error
         */
        aug_init(root: string, flags: number): boolean;
        /**
         * insert a sibling Augeas node
         *
         * Create a new sibling `label` for `path,` inserting it into the tree before
         * or after `path` (depending on the boolean flag `before)`.
         *
         * `path` must match exactly one existing node in the tree, and `label` must
         * be a label, ie. not contain /, "*" or end with a bracketed index "[N]".
         * @param augpath
         * @param label
         * @param before
         * @returns true on success, false on error
         */
        aug_insert(augpath: string, label: string, before: boolean): boolean;
        /**
         * return the label from an Augeas path expression
         *
         * The label (name of the last element) of the Augeas path expression
         * `augpath` is returned. `augpath` must match exactly one node, else this
         * function returns an error.
         * @param augpath
         * @returns the returned string, or NULL on error
         */
        aug_label(augpath: string): string;
        /**
         * load files into the tree
         *
         * Load files into the tree.
         *
         * See `aug_load` in the Augeas documentation for the full gory details.
         * @returns true on success, false on error
         */
        aug_load(): boolean;
        /**
         * list Augeas nodes under augpath
         *
         * This is just a shortcut for listing guestfs_session_aug_match() "path/*"
         * and sorting the resulting nodes into alphabetical order.
         * @param augpath
         * @returns an array of returned strings, or NULL on error
         */
        aug_ls(augpath: string): string[];
        /**
         * return Augeas nodes which match augpath
         *
         * Returns a list of paths which match the path expression `path`. The
         * returned paths are sufficiently qualified so that they match exactly one
         * node in the current tree.
         * @param augpath
         * @returns an array of returned strings, or NULL on error
         */
        aug_match(augpath: string): string[];
        /**
         * move Augeas node
         *
         * Move the node `src` to `dest`. `src` must match exactly one node. `dest` is
         * overwritten if it exists.
         * @param src
         * @param dest
         * @returns true on success, false on error
         */
        aug_mv(src: string, dest: string): boolean;
        /**
         * remove an Augeas path
         *
         * Remove `path` and all of its children.
         *
         * On success this returns the number of entries which were removed.
         * @param augpath
         * @returns the returned value, or -1 on error
         */
        aug_rm(augpath: string): number;
        /**
         * write all pending Augeas changes to disk
         *
         * This writes all pending changes to disk.
         *
         * The flags which were passed to guestfs_session_aug_init() affect exactly
         * how files are saved.
         * @returns true on success, false on error
         */
        aug_save(): boolean;
        /**
         * set Augeas path to value
         *
         * Set the value associated with `augpath` to `val`.
         *
         * In the Augeas API, it is possible to clear a node by setting the value
         * to NULL. Due to an oversight in the libguestfs API you cannot do that
         * with this call. Instead you must use the guestfs_session_aug_clear()
         * call.
         * @param augpath
         * @param val
         * @returns true on success, false on error
         */
        aug_set(augpath: string, val: string): boolean;
        /**
         * set multiple Augeas nodes
         *
         * Change multiple Augeas nodes in a single operation. `base` is an
         * expression matching multiple nodes. `sub` is a path expression relative
         * to `base`. All nodes matching `base` are found, and then for each node,
         * `sub` is changed to `val`. `sub` may also be `NULL` in which case the `base`
         * nodes are modified.
         *
         * This returns the number of nodes modified.
         * @param base
         * @param sub
         * @param val
         * @returns the returned value, or -1 on error
         */
        aug_setm(base: string, sub: string | null, val: string): number;
        /**
         * add/remove an Augeas lens transformation
         *
         * Add an Augeas transformation for the specified `lens` so it can handle
         * `file`.
         *
         * If `remove` is true (`false` by default), then the transformation is
         * removed.
         * @param lens
         * @param file
         * @param optargs a GuestfsAugTransform containing optional arguments
         * @returns true on success, false on error
         */
        aug_transform(lens: string, file: string, optargs?: AugTransform | null): boolean;
        /**
         * test availability of some parts of the API
         *
         * This command is used to check the availability of some groups of
         * functionality in the appliance, which not all builds of the libguestfs
         * appliance will be able to provide.
         *
         * The libguestfs groups, and the functions that those groups correspond
         * to, are listed in "AVAILABILITY" in guestfs(3). You can also fetch this
         * list at runtime by calling guestfs_session_available_all_groups().
         *
         * The argument `groups` is a list of group names, eg: "["inotify",
         * "augeas"]" would check for the availability of the Linux inotify
         * functions and Augeas (configuration file editing) functions.
         *
         * The command returns no error if *all* requested groups are available.
         *
         * It fails with an error if one or more of the requested groups is
         * unavailable in the appliance.
         *
         * If an unknown group name is included in the list of groups then an error
         * is always returned.
         *
         * *Notes:*
         *
         * *   guestfs_session_feature_available() is the same as this call, but
         * with a slightly simpler to use API: that call returns a boolean
         * true/false instead of throwing an error.
         *
         * *   You must call guestfs_session_launch() before calling this function.
         *
         * The reason is because we don't know what groups are supported by the
         * appliance/daemon until it is running and can be queried.
         *
         * *   If a group of functions is available, this does not necessarily mean
         * that they will work. You still have to check for errors when calling
         * individual API functions even if they are available.
         *
         * *   It is usually the job of distro packagers to build complete
         * functionality into the libguestfs appliance. Upstream libguestfs, if
         * built from source with all requirements satisfied, will support
         * everything.
         *
         * *   This call was added in version 1.0.80. In previous versions of
         * libguestfs all you could do would be to speculatively execute a
         * command to find out if the daemon implemented it. See also
         * guestfs_session_version().
         *
         * See also guestfs_session_filesystem_available().
         * @param groups an array of strings
         * @returns true on success, false on error
         */
        available(groups: string[]): boolean;
        /**
         * return a list of all optional groups
         *
         * This command returns a list of all optional groups that this daemon
         * knows about. Note this returns both supported and unsupported groups. To
         * find out which ones the daemon can actually support you have to call
         * guestfs_session_available() / guestfs_session_feature_available() on
         * each member of the returned list.
         *
         * See also guestfs_session_available(),
         * guestfs_session_feature_available() and "AVAILABILITY" in guestfs(3).
         * @returns an array of returned strings, or NULL on error
         */
        available_all_groups(): string[];
        /**
         * upload base64-encoded data to file
         *
         * This command uploads base64-encoded data from `base6`4file to filename.
         * @param base64file
         * @param filename
         * @param cancellable A GCancellable object
         * @returns true on success, false on error
         */
        base64_in(base64file: string, filename: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * download file and encode as base64
         *
         * This command downloads the contents of filename, writing it out to local
         * file `base6`4file encoded as base64.
         * @param filename
         * @param base64file
         * @param cancellable A GCancellable object
         * @returns true on success, false on error
         */
        base64_out(filename: string, base64file: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * discard all blocks on a device
         *
         * This discards all blocks on the block device `device,` giving the free
         * space back to the host.
         *
         * This operation requires support in libguestfs, the host filesystem, qemu
         * and the host kernel. If this support isn't present it may give an error
         * or even appear to run but do nothing. You must also set the `discard`
         * attribute on the underlying drive (see
         * guestfs_session_add_drive_opts()).
         *
         * This function depends on the feature "blkdiscard".
         * See also guestfs_session_feature_available().
         * @param device
         * @returns true on success, false on error
         */
        blkdiscard(device: string): boolean;
        /**
         * return true if discarded blocks are read as zeroes
         *
         * This call returns true if blocks on `device` that have been discarded by
         * a call to guestfs_session_blkdiscard() are returned as blocks of zero
         * bytes when read the next time.
         *
         * If it returns false, then it may be that discarded blocks are read as
         * stale or random data.
         *
         * This function depends on the feature "blkdiscardzeroes".
         * See also guestfs_session_feature_available().
         * @param device
         * @returns the returned value, or -1 on error
         */
        blkdiscardzeroes(device: string): number;
        /**
         * print block device attributes
         *
         * This command returns block device attributes for `device`. The following
         * fields are usually present in the returned hash. Other fields may also
         * be present.
         *
         * `UUID`
         * The uuid of this device.
         *
         * `LABEL`
         * The label of this device.
         *
         * `VERSION`
         * The version of blkid command.
         *
         * `TYPE`
         * The filesystem type or RAID of this device.
         *
         * `USAGE`
         * The usage of this device, for example `filesystem` or `raid`.
         * @param device
         * @returns a GHashTable of results, or NULL on error
         */
        blkid(device: string): GLib.HashTable<string, string>;
        /**
         * flush device buffers
         *
         * This tells the kernel to flush internal buffers associated with `device`.
         *
         * This uses the blockdev(8) command.
         * @param device
         * @returns true on success, false on error
         */
        blockdev_flushbufs(device: string): boolean;
        /**
         * get blocksize of block device
         *
         * This returns the block size of a device.
         *
         * Note: this is different from both *size in blocks* and *filesystem block
         * size*. Also this setting is not really used by anything. You should
         * probably not use it for anything. Filesystems have their own idea about
         * what block size to choose.
         *
         * This uses the blockdev(8) command.
         * @param device
         * @returns the returned value, or -1 on error
         */
        blockdev_getbsz(device: string): number;
        /**
         * is block device set to read-only
         *
         * Returns a boolean indicating if the block device is read-only (true if
         * read-only, false if not).
         *
         * This uses the blockdev(8) command.
         * @param device
         * @returns the returned value, or -1 on error
         */
        blockdev_getro(device: string): number;
        /**
         * get total size of device in bytes
         *
         * This returns the size of the device in bytes.
         *
         * See also guestfs_session_blockdev_getsz().
         *
         * This uses the blockdev(8) command.
         * @param device
         * @returns the returned value, or -1 on error
         */
        blockdev_getsize64(device: string): number;
        /**
         * get sectorsize of block device
         *
         * This returns the size of sectors on a block device. Usually 512, but can
         * be larger for modern devices.
         *
         * (Note, this is not the size in sectors, use
         * guestfs_session_blockdev_getsz() for that).
         *
         * This uses the blockdev(8) command.
         * @param device
         * @returns the returned value, or -1 on error
         */
        blockdev_getss(device: string): number;
        /**
         * get total size of device in 512-byte sectors
         *
         * This returns the size of the device in units of 512-byte sectors (even
         * if the sectorsize isn't 512 bytes ... weird).
         *
         * See also guestfs_session_blockdev_getss() for the real sector size of
         * the device, and guestfs_session_blockdev_getsize64() for the more useful
         * *size in bytes*.
         *
         * This uses the blockdev(8) command.
         * @param device
         * @returns the returned value, or -1 on error
         */
        blockdev_getsz(device: string): number;
        /**
         * reread partition table
         *
         * Reread the partition table on `device`.
         *
         * This uses the blockdev(8) command.
         * @param device
         * @returns true on success, false on error
         */
        blockdev_rereadpt(device: string): boolean;
        /**
         * set blocksize of block device
         *
         * This call does nothing and has never done anything because of a bug in
         * blockdev. Do not use it.
         *
         * If you need to set the filesystem block size, use the `blocksize` option
         * of guestfs_session_mkfs().
         * @param device
         * @param blocksize
         * @returns true on success, false on error
         */
        blockdev_setbsz(device: string, blocksize: number): boolean;
        /**
         * set readahead
         *
         * Set readahead (in 512-byte sectors) for the device.
         *
         * This uses the blockdev(8) command.
         * @param device
         * @param sectors
         * @returns true on success, false on error
         */
        blockdev_setra(device: string, sectors: number): boolean;
        /**
         * set block device to read-only
         *
         * Sets the block device named `device` to read-only.
         *
         * This uses the blockdev(8) command.
         * @param device
         * @returns true on success, false on error
         */
        blockdev_setro(device: string): boolean;
        /**
         * set block device to read-write
         *
         * Sets the block device named `device` to read-write.
         *
         * This uses the blockdev(8) command.
         * @param device
         * @returns true on success, false on error
         */
        blockdev_setrw(device: string): boolean;
        /**
         * cancel a running or paused balance
         *
         * Cancel a running balance on a btrfs filesystem.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param path
         * @returns true on success, false on error
         */
        btrfs_balance_cancel(path: string): boolean;
        /**
         * pause a running balance
         *
         * Pause a running balance on a btrfs filesystem.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param path
         * @returns true on success, false on error
         */
        btrfs_balance_pause(path: string): boolean;
        /**
         * resume a paused balance
         *
         * Resume a paused balance on a btrfs filesystem.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param path
         * @returns true on success, false on error
         */
        btrfs_balance_resume(path: string): boolean;
        /**
         * show the status of a running or paused balance
         *
         * Show the status of a running or paused balance on a btrfs filesystem.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param path
         * @returns a BTRFSBalance object, or NULL on error
         */
        btrfs_balance_status(path: string): BTRFSBalance;
        /**
         * add devices to a btrfs filesystem
         *
         * Add the list of device(s) in `devices` to the btrfs filesystem mounted at
         * `fs`. If `devices` is an empty list, this does nothing.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param devices an array of strings
         * @param fs
         * @returns true on success, false on error
         */
        btrfs_device_add(devices: string[], fs: string): boolean;
        /**
         * remove devices from a btrfs filesystem
         *
         * Remove the `devices` from the btrfs filesystem mounted at `fs`. If
         * `devices` is an empty list, this does nothing.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param devices an array of strings
         * @param fs
         * @returns true on success, false on error
         */
        btrfs_device_delete(devices: string[], fs: string): boolean;
        /**
         * balance a btrfs filesystem
         *
         * Balance the chunks in the btrfs filesystem mounted at `fs` across the
         * underlying devices.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param fs
         * @returns true on success, false on error
         */
        btrfs_filesystem_balance(fs: string): boolean;
        /**
         * defragment a file or directory
         *
         * Defragment a file or directory on a btrfs filesystem. compress is one of
         * zlib or lzo.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param path
         * @param optargs a GuestfsBTRFSFilesystemDefragment containing optional arguments
         * @returns true on success, false on error
         */
        btrfs_filesystem_defragment(path: string, optargs?: BTRFSFilesystemDefragment | null): boolean;
        /**
         * resize a btrfs filesystem
         *
         * This command resizes a btrfs filesystem.
         *
         * Note that unlike other resize calls, the filesystem has to be mounted
         * and the parameter is the mountpoint not the device (this is a
         * requirement of btrfs itself).
         *
         * The optional parameters are:
         *
         * `size`
         * The new size (in bytes) of the filesystem. If omitted, the
         * filesystem is resized to the maximum size.
         *
         * See also btrfs(8).
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param mountpoint
         * @param optargs a GuestfsBTRFSFilesystemResize containing optional arguments
         * @returns true on success, false on error
         */
        btrfs_filesystem_resize(mountpoint: string, optargs?: BTRFSFilesystemResize | null): boolean;
        /**
         * list devices for btrfs filesystem
         *
         * Show all the devices where the filesystems in `device` is spanned over.
         *
         * If not all the devices for the filesystems are present, then this
         * function fails and the `errno` is set to `ENODEV`.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param device
         * @returns an array of returned strings, or NULL on error
         */
        btrfs_filesystem_show(device: string): string[];
        /**
         * sync a btrfs filesystem
         *
         * Force sync on the btrfs filesystem mounted at `fs`.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param fs
         * @returns true on success, false on error
         */
        btrfs_filesystem_sync(fs: string): boolean;
        /**
         * check a btrfs filesystem
         *
         * Used to check a btrfs filesystem, `device` is the device file where the
         * filesystem is stored.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param device
         * @param optargs a GuestfsBtrfsFsck containing optional arguments
         * @returns true on success, false on error
         */
        btrfs_fsck(device: string, optargs?: BtrfsFsck | null): boolean;
        /**
         * create an image of a btrfs filesystem
         *
         * This is used to create an image of a btrfs filesystem. All data will be
         * zeroed, but metadata and the like is preserved.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param source an array of strings
         * @param image
         * @param optargs a GuestfsBTRFSImage containing optional arguments
         * @returns true on success, false on error
         */
        btrfs_image(source: string[], image: string, optargs?: BTRFSImage | null): boolean;
        /**
         * add a qgroup to a parent qgroup
         *
         * Add qgroup `src` to parent qgroup `dst`. This command can group several
         * qgroups into a parent qgroup to share common limit.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param src
         * @param dst
         * @param path
         * @returns true on success, false on error
         */
        btrfs_qgroup_assign(src: string, dst: string, path: string): boolean;
        /**
         * create a subvolume quota group
         *
         * Create a quota group (qgroup) for subvolume at `subvolume`.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param qgroupid
         * @param subvolume
         * @returns true on success, false on error
         */
        btrfs_qgroup_create(qgroupid: string, subvolume: string): boolean;
        /**
         * destroy a subvolume quota group
         *
         * Destroy a quota group.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param qgroupid
         * @param subvolume
         * @returns true on success, false on error
         */
        btrfs_qgroup_destroy(qgroupid: string, subvolume: string): boolean;
        /**
         * limit the size of a subvolume
         *
         * Limit the size of the subvolume with path `subvolume`.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param subvolume
         * @param size
         * @returns true on success, false on error
         */
        btrfs_qgroup_limit(subvolume: string, size: number): boolean;
        /**
         * remove a qgroup from its parent qgroup
         *
         * Remove qgroup `src` from the parent qgroup `dst`.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param src
         * @param dst
         * @param path
         * @returns true on success, false on error
         */
        btrfs_qgroup_remove(src: string, dst: string, path: string): boolean;
        /**
         * show subvolume quota groups
         *
         * Show all subvolume quota groups in a btrfs filesystem, including their
         * usages.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param path
         * @returns an array of BTRFSQgroup objects, or NULL on error
         */
        btrfs_qgroup_show(path: string): BTRFSQgroup[];
        /**
         * enable or disable subvolume quota support
         *
         * Enable or disable subvolume quota support for filesystem which contains
         * `path`.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param fs
         * @param enable
         * @returns true on success, false on error
         */
        btrfs_quota_enable(fs: string, enable: boolean): boolean;
        /**
         * trash all qgroup numbers and scan the metadata again with the current config
         *
         * Trash all qgroup numbers and scan the metadata again with the current
         * config.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param fs
         * @returns true on success, false on error
         */
        btrfs_quota_rescan(fs: string): boolean;
        /**
         * replace a btrfs managed device with another device
         *
         * Replace device of a btrfs filesystem. On a live filesystem, duplicate
         * the data to the target device which is currently stored on the source
         * device. After completion of the operation, the source device is wiped
         * out and removed from the filesystem.
         *
         * The `targetdev` needs to be same size or larger than the `srcdev`. Devices
         * which are currently mounted are never allowed to be used as the
         * `targetdev`.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param srcdev
         * @param targetdev
         * @param mntpoint
         * @returns true on success, false on error
         */
        btrfs_replace(srcdev: string, targetdev: string, mntpoint: string): boolean;
        /**
         * recover the chunk tree of btrfs filesystem
         *
         * Recover the chunk tree of btrfs filesystem by scanning the devices one
         * by one.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param device
         * @returns true on success, false on error
         */
        btrfs_rescue_chunk_recover(device: string): boolean;
        /**
         * recover bad superblocks from good copies
         *
         * Recover bad superblocks from good copies.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param device
         * @returns true on success, false on error
         */
        btrfs_rescue_super_recover(device: string): boolean;
        /**
         * cancel a running scrub
         *
         * Cancel a running scrub on a btrfs filesystem.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param path
         * @returns true on success, false on error
         */
        btrfs_scrub_cancel(path: string): boolean;
        /**
         * resume a previously canceled or interrupted scrub
         *
         * Resume a previously canceled or interrupted scrub on a btrfs filesystem.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param path
         * @returns true on success, false on error
         */
        btrfs_scrub_resume(path: string): boolean;
        /**
         * read all data from all disks and verify checksums
         *
         * Reads all the data and metadata on the filesystem, and uses checksums
         * and the duplicate copies from RAID storage to identify and repair any
         * corrupt data.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param path
         * @returns true on success, false on error
         */
        btrfs_scrub_start(path: string): boolean;
        /**
         * show status of running or finished scrub
         *
         * Show status of running or finished scrub on a btrfs filesystem.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param path
         * @returns a BTRFSScrub object, or NULL on error
         */
        btrfs_scrub_status(path: string): BTRFSScrub;
        /**
         * enable or disable the seeding feature of device
         *
         * Enable or disable the seeding feature of a device that contains a btrfs
         * filesystem.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param device
         * @param seeding
         * @returns true on success, false on error
         */
        btrfs_set_seeding(device: string, seeding: boolean): boolean;
        /**
         * create a btrfs subvolume
         *
         * Create a btrfs subvolume. The `dest` argument is the destination
         * directory and the name of the subvolume, in the form /path/to/dest/name.
         * The optional parameter `qgroupid` represents the qgroup which the newly
         * created subvolume will be added to.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param dest
         * @param optargs a GuestfsBTRFSSubvolumeCreate containing optional arguments
         * @returns true on success, false on error
         */
        btrfs_subvolume_create(dest: string, optargs?: BTRFSSubvolumeCreate | null): boolean;
        /**
         * delete a btrfs subvolume or snapshot
         *
         * Delete the named btrfs subvolume or snapshot.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param subvolume
         * @returns true on success, false on error
         */
        btrfs_subvolume_delete(subvolume: string): boolean;
        /**
         * get the default subvolume or snapshot of a filesystem
         *
         * Get the default subvolume or snapshot of a filesystem mounted at
         * `mountpoint`.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param fs
         * @returns the returned value, or -1 on error
         */
        btrfs_subvolume_get_default(fs: string): number;
        /**
         * list btrfs snapshots and subvolumes
         *
         * List the btrfs snapshots and subvolumes of the btrfs filesystem which is
         * mounted at `fs`.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param fs
         * @returns an array of BTRFSSubvolume objects, or NULL on error
         */
        btrfs_subvolume_list(fs: string): BTRFSSubvolume[];
        /**
         * set default btrfs subvolume
         *
         * Set the subvolume of the btrfs filesystem `fs` which will be mounted by
         * default. See guestfs_session_btrfs_subvolume_list() to get a list of
         * subvolumes.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param id
         * @param fs
         * @returns true on success, false on error
         */
        btrfs_subvolume_set_default(id: number, fs: string): boolean;
        /**
         * return detailed information of the subvolume
         *
         * Return detailed information of the subvolume.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param subvolume
         * @returns a GHashTable of results, or NULL on error
         */
        btrfs_subvolume_show(subvolume: string): GLib.HashTable<string, string>;
        /**
         * create a btrfs snapshot
         *
         * Create a snapshot of the btrfs subvolume `source`. The `dest` argument is
         * the destination directory and the name of the snapshot, in the form
         * /path/to/dest/name. By default the newly created snapshot is writable,
         * if the value of optional parameter `ro` is true, then a readonly snapshot
         * is created. The optional parameter `qgroupid` represents the qgroup which
         * the newly created snapshot will be added to.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param source
         * @param dest
         * @param optargs a GuestfsBTRFSSubvolumeSnapshot containing optional arguments
         * @returns true on success, false on error
         */
        btrfs_subvolume_snapshot(source: string, dest: string, optargs?: BTRFSSubvolumeSnapshot | null): boolean;
        /**
         * enable extended inode refs
         *
         * This will Enable extended inode refs.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param device
         * @returns true on success, false on error
         */
        btrfstune_enable_extended_inode_refs(device: string): boolean;
        /**
         * enable skinny metadata extent refs
         *
         * This enable skinny metadata extent refs.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param device
         * @returns true on success, false on error
         */
        btrfstune_enable_skinny_metadata_extent_refs(device: string): boolean;
        /**
         * enable or disable seeding of a btrfs device
         *
         * Enable seeding of a btrfs device, this will force a fs readonly so that
         * you can use it to build other filesystems.
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param device
         * @param seeding
         * @returns true on success, false on error
         */
        btrfstune_seeding(device: string, seeding: boolean): boolean;
        /**
         * return the C pointer to the guestfs_h handle
         *
         * In non-C language bindings, this allows you to retrieve the underlying C
         * pointer to the handle (ie. "guestfs_h *"). The purpose of this is to
         * allow other libraries to interwork with libguestfs.
         * @returns the returned value, or -1 on error
         */
        c_pointer(): number;
        /**
         * return canonical device name
         *
         * This utility function is useful when displaying device names to the
         * user. It takes a number of irregular device names and returns them in a
         * consistent format:
         *
         * /dev/hdX
         * /dev/vdX
         * These are returned as /dev/sdX. Note this works for device names and
         * partition names. This is approximately the reverse of the algorithm
         * described in "BLOCK DEVICE NAMING" in guestfs(3).
         *
         * /dev/mapper/VG-LV
         * /dev/dm-N
         * Converted to /dev/VG/LV form using
         * guestfs_session_lvm_canonical_lv_name().
         *
         * Other strings are returned unmodified.
         * @param device
         * @returns the returned string, or NULL on error
         */
        canonical_device_name(device: string): string;
        /**
         * get the Linux capabilities attached to a file
         *
         * This function returns the Linux capabilities attached to `path`. The
         * capabilities set is returned in text form (see cap_to_text(3)).
         *
         * If no capabilities are attached to a file, an empty string is returned.
         *
         * This function depends on the feature "linuxcaps".
         * See also guestfs_session_feature_available().
         * @param path
         * @returns the returned string, or NULL on error
         */
        cap_get_file(path: string): string;
        /**
         * set the Linux capabilities attached to a file
         *
         * This function sets the Linux capabilities attached to `path`. The
         * capabilities set `cap` should be passed in text form (see
         * cap_from_text(3)).
         *
         * This function depends on the feature "linuxcaps".
         * See also guestfs_session_feature_available().
         * @param path
         * @param cap
         * @returns true on success, false on error
         */
        cap_set_file(path: string, cap: string): boolean;
        /**
         * return true path on case-insensitive filesystem
         *
         * This can be used to resolve case insensitive paths on a filesystem which
         * is case sensitive. The use case is to resolve paths which you have read
         * from Windows configuration files or the Windows Registry, to the true
         * path.
         *
         * The command handles a peculiarity of the Linux ntfs-3g filesystem driver
         * (and probably others), which is that although the underlying filesystem
         * is case-insensitive, the driver exports the filesystem to Linux as
         * case-sensitive.
         *
         * One consequence of this is that special directories such as C:\windows
         * may appear as /WINDOWS or /windows (or other things) depending on the
         * precise details of how they were created. In Windows itself this would
         * not be a problem.
         *
         * Bug or feature? You decide: <ulink
         * url='https://www.tuxera.com/community/ntfs-3g-faq/#posixfilenames1'>
         * http://www.tuxera.com/community/ntfs-3g-faq/#posixfilenames1 </ulink>
         *
         * guestfs_session_case_sensitive_path() attempts to resolve the true case
         * of each element in the path. It will return a resolved path if either
         * the full path or its parent directory exists. If the parent directory
         * exists but the full path does not, the case of the parent directory will
         * be correctly resolved, and the remainder appended unmodified. For
         * example, if the file "/Windows/System32/netkvm.sys" exists:
         *
         * guestfs_session_case_sensitive_path() ("/windows/system32/netkvm.sys")
         * "Windows/System32/netkvm.sys"
         *
         * guestfs_session_case_sensitive_path() ("/windows/system32/NoSuchFile")
         * "Windows/System32/NoSuchFile"
         *
         * guestfs_session_case_sensitive_path() ("/windows/system33/netkvm.sys")
         * *ERROR*
         *
         * *Note*: Because of the above behaviour,
         * guestfs_session_case_sensitive_path() cannot be used to check for the
         * existence of a file.
         *
         * *Note*: This function does not handle drive names, backslashes etc.
         *
         * See also guestfs_session_realpath().
         * @param path
         * @returns the returned string, or NULL on error
         */
        case_sensitive_path(path: string): string;
        /**
         * list the contents of a file
         *
         * Return the contents of the file named `path`.
         *
         * Because, in C, this function returns a "char *", there is no way to
         * differentiate between a "\0" character in a file and end of string. To
         * handle binary files, use the guestfs_session_read_file() or
         * guestfs_session_download() functions.
         * @param path
         * @returns the returned string, or NULL on error
         */
        cat(path: string): string;
        /**
         * compute MD5, SHAx or CRC checksum of file
         *
         * This call computes the MD5, SHAx or CRC checksum of the file named
         * `path`.
         *
         * The type of checksum to compute is given by the `csumtype` parameter
         * which must have one of the following values:
         *
         * `crc`
         * Compute the cyclic redundancy check (CRC) specified by POSIX for the
         * `cksum` command.
         *
         * `md5`
         * Compute the MD5 hash (using the md5sum(1) program).
         *
         * `sha1`
         * Compute the SHA1 hash (using the sha1sum(1) program).
         *
         * `sha2`24
         * Compute the SHA224 hash (using the sha224sum(1) program).
         *
         * `sha2`56
         * Compute the SHA256 hash (using the sha256sum(1) program).
         *
         * `sha3`84
         * Compute the SHA384 hash (using the sha384sum(1) program).
         *
         * `sha5`12
         * Compute the SHA512 hash (using the sha512sum(1) program).
         *
         * The checksum is returned as a printable string.
         *
         * To get the checksum for a device, use guestfs_session_checksum_device().
         *
         * To get the checksums for many files, use
         * guestfs_session_checksums_out().
         * @param csumtype
         * @param path
         * @returns the returned string, or NULL on error
         */
        checksum(csumtype: string, path: string): string;
        /**
         * compute MD5, SHAx or CRC checksum of the contents of a device
         *
         * This call computes the MD5, SHAx or CRC checksum of the contents of the
         * device named `device`. For the types of checksums supported see the
         * guestfs_session_checksum() command.
         * @param csumtype
         * @param device
         * @returns the returned string, or NULL on error
         */
        checksum_device(csumtype: string, device: string): string;
        /**
         * compute MD5, SHAx or CRC checksum of files in a directory
         *
         * This command computes the checksums of all regular files in directory
         * and then emits a list of those checksums to the local output file
         * `sumsfile`.
         *
         * This can be used for verifying the integrity of a virtual machine.
         * However to be properly secure you should pay attention to the output of
         * the checksum command (it uses the ones from GNU coreutils). In
         * particular when the filename is not printable, coreutils uses a special
         * backslash syntax. For more information, see the GNU coreutils info file.
         * @param csumtype
         * @param directory
         * @param sumsfile
         * @param cancellable A GCancellable object
         * @returns true on success, false on error
         */
        checksums_out(
            csumtype: string,
            directory: string,
            sumsfile: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * change file mode
         *
         * Change the mode (permissions) of `path` to `mode`. Only numeric modes are
         * supported.
         *
         * *Note*: When using this command from guestfish, `mode` by default would
         * be decimal, unless you prefix it with `0` to get octal, ie. use `0`700 not
         * `7`00.
         *
         * The mode actually set is affected by the umask.
         * @param mode
         * @param path
         * @returns true on success, false on error
         */
        chmod(mode: number, path: string): boolean;
        /**
         * change file owner and group
         *
         * Change the file owner to `owner` and group to `group`.
         *
         * Only numeric uid and gid are supported. If you want to use names, you
         * will need to locate and parse the password file yourself (Augeas support
         * makes this relatively easy).
         * @param owner
         * @param group
         * @param path
         * @returns true on success, false on error
         */
        chown(owner: number, group: number, path: string): boolean;
        /**
         * remove a single per-backend settings string
         *
         * If there is a backend setting string matching "name" or beginning with
         * "name=", then that string is removed from the backend settings.
         *
         * This call returns the number of strings which were removed (which may be
         * 0, 1 or greater than 1).
         *
         * See "BACKEND" in guestfs(3), "BACKEND SETTINGS" in guestfs(3).
         * @param name
         * @returns the returned value, or -1 on error
         */
        clear_backend_setting(name: string): number;
        /**
         * open an encrypted LUKS block device with Clevis and Tang
         *
         * This command opens a block device that has been encrypted according to
         * the Linux Unified Key Setup (LUKS) standard, using network-bound disk
         * encryption (NBDE).
         *
         * `device` is the encrypted block device.
         *
         * The appliance will connect to the Tang servers noted in the tree of
         * Clevis pins that is bound to a keyslot of the LUKS header. The Clevis
         * pin tree may comprise `sss` (redudancy) pins as internal nodes
         * (optionally), and `tang` pins as leaves. `tpm2` pins are not supported.
         * The appliance unlocks the encrypted block device by combining responses
         * from the Tang servers with metadata from the LUKS header; there is no
         * `key` parameter.
         *
         * This command will fail if networking has not been enabled for the
         * appliance. Refer to guestfs_session_set_network().
         *
         * The command creates a new block device called /dev/mapper/mapname. Reads
         * and writes to this block device are decrypted from and encrypted to the
         * underlying `device` respectively. Close the decrypted block device with
         * guestfs_session_cryptsetup_close().
         *
         * `mapname` cannot be "control" because that name is reserved by
         * device-mapper.
         *
         * If this block device contains LVM volume groups, then calling
         * guestfs_session_lvm_scan() with the `activate` parameter `true` will make
         * them visible.
         *
         * Use guestfs_session_list_dm_devices() to list all device mapper devices.
         *
         * This function depends on the feature "clevisluks".
         * See also guestfs_session_feature_available().
         * @param device
         * @param mapname
         * @returns true on success, false on error
         */
        clevis_luks_unlock(device: string, mapname: string): boolean;
        /**
         * Close a libguestfs session.
         * @returns true on success, false on error
         */
        close(): boolean;
        /**
         * run a command from the guest filesystem
         *
         * This call runs a command from the guest filesystem. The filesystem must
         * be mounted, and must contain a compatible operating system (ie.
         * something Linux, with the same or compatible processor architecture).
         *
         * The single parameter is an argv-style list of arguments. The first
         * element is the name of the program to run. Subsequent elements are
         * parameters. The list must be non-empty (ie. must contain a program
         * name). Note that the command runs directly, and is *not* invoked via the
         * shell (see guestfs_session_sh()).
         *
         * The return value is anything printed to *stdout* by the command.
         *
         * If the command returns a non-zero exit status, then this function
         * returns an error message. The error message string is the content of
         * *stderr* from the command.
         *
         * The $PATH environment variable will contain at least /usr/bin and /bin.
         * If you require a program from another location, you should provide the
         * full path in the first parameter.
         *
         * Shared libraries and data files required by the program must be
         * available on filesystems which are mounted in the correct places. It is
         * the caller’s responsibility to ensure all filesystems that are needed
         * are mounted at the right locations.
         * @param _arguments an array of strings
         * @returns the returned string, or NULL on error
         */
        command(_arguments: string[]): string;
        /**
         * run a command, returning lines
         *
         * This is the same as guestfs_session_command(), but splits the result
         * into a list of lines.
         *
         * See also: guestfs_session_sh_lines()
         * @param _arguments an array of strings
         * @returns an array of returned strings, or NULL on error
         */
        command_lines(_arguments: string[]): string[];
        /**
         * output compressed device
         *
         * This command compresses `device` and writes it out to the local file
         * `zdevice`.
         *
         * The `ctype` and optional `level` parameters have the same meaning as in
         * guestfs_session_compress_out().
         * @param ctype
         * @param device
         * @param zdevice
         * @param optargs a GuestfsCompressDeviceOut containing optional arguments
         * @param cancellable A GCancellable object
         * @returns true on success, false on error
         */
        compress_device_out(
            ctype: string,
            device: string,
            zdevice: string,
            optargs?: CompressDeviceOut | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * output compressed file
         *
         * This command compresses file and writes it out to the local file zfile.
         *
         * The compression program used is controlled by the `ctype` parameter.
         * Currently this includes: `compress,` `gzip,` `bzip2`, `xz` or `lzop`. Some
         * compression types may not be supported by particular builds of
         * libguestfs, in which case you will get an error containing the substring
         * "not supported".
         *
         * The optional `level` parameter controls compression level. The meaning
         * and default for this parameter depends on the compression program being
         * used.
         * @param ctype
         * @param file
         * @param zfile
         * @param optargs a GuestfsCompressOut containing optional arguments
         * @param cancellable A GCancellable object
         * @returns true on success, false on error
         */
        compress_out(
            ctype: string,
            file: string,
            zfile: string,
            optargs?: CompressOut | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * add hypervisor parameters
         *
         * This can be used to add arbitrary hypervisor parameters of the form
         * *-param value*. Actually it’s not quite arbitrary - we prevent you from
         * setting some parameters which would interfere with parameters that we
         * use.
         *
         * The first character of `hvparam` string must be a `-` (dash).
         *
         * `hvvalue` can be NULL.
         * @param hvparam
         * @param hvvalue
         * @returns true on success, false on error
         */
        config(hvparam: string, hvvalue?: string | null): boolean;
        /**
         * copy the attributes of a path (file/directory) to another
         *
         * Copy the attributes of a path (which can be a file or a directory) to
         * another path.
         *
         * By default no attribute is copied, so make sure to specify any (or `all`
         * to copy everything).
         *
         * The optional arguments specify which attributes can be copied:
         *
         * `mode`
         * Copy part of the file mode from `source` to `destination`. Only the
         * UNIX permissions and the sticky/setuid/setgid bits can be copied.
         *
         * `xattributes`
         * Copy the Linux extended attributes (xattrs) from `source` to
         * `destination`. This flag does nothing if the *linuxxattrs* feature is
         * not available (see guestfs_session_feature_available()).
         *
         * `ownership`
         * Copy the owner uid and the group gid of `source` to `destination`.
         *
         * `all`
         * Copy all the attributes from `source` to `destination`. Enabling it
         * enables all the other flags, if they are not specified already.
         * @param src
         * @param dest
         * @param optargs a GuestfsCopyAttributes containing optional arguments
         * @returns true on success, false on error
         */
        copy_attributes(src: string, dest: string, optargs?: CopyAttributes | null): boolean;
        /**
         * copy from source device to destination device
         *
         * The four calls guestfs_session_copy_device_to_device(),
         * guestfs_session_copy_device_to_file(),
         * guestfs_session_copy_file_to_device(), and
         * guestfs_session_copy_file_to_file() let you copy from a source
         * (device|file) to a destination (device|file).
         *
         * Partial copies can be made since you can specify optionally the source
         * offset, destination offset and size to copy. These values are all
         * specified in bytes. If not given, the offsets both default to zero, and
         * the size defaults to copying as much as possible until we hit the end of
         * the source.
         *
         * The source and destination may be the same object. However overlapping
         * regions may not be copied correctly.
         *
         * If the destination is a file, it is created if required. If the
         * destination file is not large enough, it is extended.
         *
         * If the destination is a file and the `append` flag is not set, then the
         * destination file is truncated. If the `append` flag is set, then the copy
         * appends to the destination file. The `append` flag currently cannot be
         * set for devices.
         *
         * If the `sparse` flag is true then the call avoids writing blocks that
         * contain only zeroes, which can help in some situations where the backing
         * disk is thin-provisioned. Note that unless the target is already zeroed,
         * using this option will result in incorrect copying.
         * @param src
         * @param dest
         * @param optargs a GuestfsCopyDeviceToDevice containing optional arguments
         * @returns true on success, false on error
         */
        copy_device_to_device(src: string, dest: string, optargs?: CopyDeviceToDevice | null): boolean;
        /**
         * copy from source device to destination file
         *
         * See guestfs_session_copy_device_to_device() for a general overview of
         * this call.
         * @param src
         * @param dest
         * @param optargs a GuestfsCopyDeviceToFile containing optional arguments
         * @returns true on success, false on error
         */
        copy_device_to_file(src: string, dest: string, optargs?: CopyDeviceToFile | null): boolean;
        /**
         * copy from source file to destination device
         *
         * See guestfs_session_copy_device_to_device() for a general overview of
         * this call.
         * @param src
         * @param dest
         * @param optargs a GuestfsCopyFileToDevice containing optional arguments
         * @returns true on success, false on error
         */
        copy_file_to_device(src: string, dest: string, optargs?: CopyFileToDevice | null): boolean;
        /**
         * copy from source file to destination file
         *
         * See guestfs_session_copy_device_to_device() for a general overview of
         * this call.
         *
         * This is not the function you want for copying files. This is for copying
         * blocks within existing files. See guestfs_session_cp(),
         * guestfs_session_cp_a() and guestfs_session_mv() for general file copying
         * and moving functions.
         * @param src
         * @param dest
         * @param optargs a GuestfsCopyFileToFile containing optional arguments
         * @returns true on success, false on error
         */
        copy_file_to_file(src: string, dest: string, optargs?: CopyFileToFile | null): boolean;
        /**
         * copy local files or directories into an image
         *
         * guestfs_session_copy_in() copies local files or directories recursively
         * into the disk image, placing them in the directory called `remotedir`
         * (which must exist).
         *
         * Wildcards cannot be used.
         * @param localpath
         * @param remotedir
         * @returns true on success, false on error
         */
        copy_in(localpath: string, remotedir: string): boolean;
        /**
         * copy remote files or directories out of an image
         *
         * guestfs_session_copy_out() copies remote files or directories
         * recursively out of the disk image, placing them on the host disk in a
         * local directory called `localdir` (which must exist).
         *
         * To download to the current directory, use "." as in:
         *
         * <![CDATA[guestfs_session_copy_out() /home .]]>
         *
         * Wildcards cannot be used.
         * @param remotepath
         * @param localdir
         * @returns true on success, false on error
         */
        copy_out(remotepath: string, localdir: string): boolean;
        /**
         * copy size bytes from source to destination using dd
         *
         * This command copies exactly `size` bytes from one source device or file
         * `src` to another destination device or file `dest`.
         *
         * Note this will fail if the source is too short or if the destination is
         * not large enough.
         * @param src
         * @param dest
         * @param size
         * @returns true on success, false on error
         */
        copy_size(src: string, dest: string, size: number): boolean;
        /**
         * copy a file
         *
         * This copies a file from `src` to `dest` where `dest` is either a
         * destination filename or destination directory.
         * @param src
         * @param dest
         * @returns true on success, false on error
         */
        cp(src: string, dest: string): boolean;
        /**
         * copy a file or directory recursively
         *
         * This copies a file or directory from `src` to `dest` recursively using the
         * "cp -a" command.
         * @param src
         * @param dest
         * @returns true on success, false on error
         */
        cp_a(src: string, dest: string): boolean;
        /**
         * copy a file or directory recursively
         *
         * This copies a file or directory from `src` to `dest` recursively using the
         * "cp -rP" command.
         *
         * Most users should use guestfs_session_cp_a() instead. This command is
         * useful when you don't want to preserve permissions, because the target
         * filesystem does not support it (primarily when writing to DOS FAT
         * filesystems).
         * @param src
         * @param dest
         * @returns true on success, false on error
         */
        cp_r(src: string, dest: string): boolean;
        /**
         * pack directory into cpio file
         *
         * This command packs the contents of directory and downloads it to local
         * file `cpiofile`.
         *
         * The optional `format` parameter can be used to select the format. Only
         * the following formats are currently permitted:
         *
         * `newc`
         * New (SVR4) portable format. This format happens to be compatible
         * with the cpio-like format used by the Linux kernel for initramfs.
         *
         * This is the default format.
         *
         * `crc`
         * New (SVR4) portable format with a checksum.
         * @param directory
         * @param cpiofile
         * @param optargs a GuestfsCpioOut containing optional arguments
         * @param cancellable A GCancellable object
         * @returns true on success, false on error
         */
        cpio_out(
            directory: string,
            cpiofile: string,
            optargs?: CpioOut | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * close an encrypted device
         *
         * This closes an encrypted device that was created earlier by
         * guestfs_session_cryptsetup_open(). The `device` parameter must be the
         * name of the mapping device (ie. /dev/mapper/mapname) and *not* the name
         * of the underlying block device.
         *
         * This function depends on the feature "luks".
         * See also guestfs_session_feature_available().
         * @param device
         * @returns true on success, false on error
         */
        cryptsetup_close(device: string): boolean;
        /**
         * open an encrypted block device
         *
         * This command opens a block device which has been encrypted according to
         * the Linux Unified Key Setup (LUKS) standard, Windows BitLocker, or some
         * other types.
         *
         * `device` is the encrypted block device or partition.
         *
         * The caller must supply one of the keys associated with the encrypted
         * block device, in the `key` parameter.
         *
         * This creates a new block device called /dev/mapper/mapname. Reads and
         * writes to this block device are decrypted from and encrypted to the
         * underlying `device` respectively.
         *
         * `mapname` cannot be "control" because that name is reserved by
         * device-mapper.
         *
         * If the optional `crypttype` parameter is not present then libguestfs
         * tries to guess the correct type (for example LUKS or BitLocker). However
         * you can override this by specifying one of the following types:
         *
         * `luks`
         * A Linux LUKS device.
         *
         * `bitlk`
         * A Windows BitLocker device.
         *
         * The optional `readonly` flag, if set to true, creates a read-only
         * mapping.
         *
         * If this block device contains LVM volume groups, then calling
         * guestfs_session_lvm_scan() with the `activate` parameter `true` will make
         * them visible.
         *
         * Use guestfs_session_list_dm_devices() to list all device mapper devices.
         *
         * This function depends on the feature "luks".
         * See also guestfs_session_feature_available().
         * @param device
         * @param key
         * @param mapname
         * @param optargs a GuestfsCryptsetupOpen containing optional arguments
         * @returns true on success, false on error
         */
        cryptsetup_open(device: string, key: string, mapname: string, optargs?: CryptsetupOpen | null): boolean;
        /**
         * copy from source to destination using dd
         *
         * This command copies from one source device or file `src` to another
         * destination device or file `dest`. Normally you would use this to copy to
         * or from a device or partition, for example to duplicate a filesystem.
         *
         * If the destination is a device, it must be as large or larger than the
         * source file or device, otherwise the copy will fail. This command cannot
         * do partial copies (see guestfs_session_copy_device_to_device()).
         * @param src
         * @param dest
         * @returns true on success, false on error
         */
        dd(src: string, dest: string): boolean;
        /**
         * debugging and internals
         *
         * The guestfs_session_debug() command exposes some internals of `guestfsd`
         * (the guestfs daemon) that runs inside the hypervisor.
         *
         * There is no comprehensive help for this command. You have to look at the
         * file daemon/debug.c in the libguestfs source to find out what you can
         * do.
         * @param subcmd
         * @param extraargs an array of strings
         * @returns the returned string, or NULL on error
         */
        debug(subcmd: string, extraargs: string[]): string;
        /**
         * debug the drives (internal use only)
         *
         * This returns the internal list of drives. ‘debug’ commands are not part
         * of the formal API and can be removed or changed at any time.
         * @returns an array of returned strings, or NULL on error
         */
        debug_drives(): string[];
        /**
         * upload a file to the appliance (internal use only)
         *
         * The guestfs_session_debug_upload() command uploads a file to the
         * libguestfs appliance.
         *
         * There is no comprehensive help for this command. You have to look at the
         * file daemon/debug.c in the libguestfs source to find out what it is for.
         * @param filename
         * @param tmpname
         * @param mode
         * @param cancellable A GCancellable object
         * @returns true on success, false on error
         */
        debug_upload(filename: string, tmpname: string, mode: number, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * convert device to index
         *
         * This function takes a device name (eg. "/dev/sdb") and returns the index
         * of the device in the list of devices.
         *
         * Index numbers start from 0. The named device must exist, for example as
         * a string returned from guestfs_session_list_devices().
         *
         * See also guestfs_session_list_devices(), guestfs_session_part_to_dev(),
         * guestfs_session_device_name().
         * @param device
         * @returns the returned value, or -1 on error
         */
        device_index(device: string): number;
        /**
         * convert device index to name
         *
         * This function takes a device index and returns the device name. For
         * example index `0` will return the string "/dev/sda".
         *
         * The drive index must have been added to the handle.
         *
         * See also guestfs_session_list_devices(), guestfs_session_part_to_dev(),
         * guestfs_session_device_index().
         * @param index
         * @returns the returned string, or NULL on error
         */
        device_name(index: number): string;
        /**
         * report file system disk space usage
         *
         * This command runs the df(1) command to report disk space used.
         *
         * This command is mostly useful for interactive sessions. It is *not*
         * intended that you try to parse the output string. Use
         * guestfs_session_statvfs() from programs.
         * @returns the returned string, or NULL on error
         */
        df(): string;
        /**
         * report file system disk space usage (human readable)
         *
         * This command runs the "df -h" command to report disk space used in
         * human-readable format.
         *
         * This command is mostly useful for interactive sessions. It is *not*
         * intended that you try to parse the output string. Use
         * guestfs_session_statvfs() from programs.
         * @returns the returned string, or NULL on error
         */
        df_h(): string;
        /**
         * create a blank disk image
         *
         * Create a blank disk image called filename (a host file) with format
         * `format` (usually `raw` or `qcow2`). The size is `size` bytes.
         *
         * If used with the optional `backingfile` parameter, then a snapshot is
         * created on top of the backing file. In this case, `size` must be passed
         * as `-1`. The size of the snapshot is the same as the size of the backing
         * file, which is discovered automatically. You are encouraged to also pass
         * `backingformat` to describe the format of `backingfile`.
         *
         * If filename refers to a block device, then the device is formatted. The
         * `size` is ignored since block devices have an intrinsic size.
         *
         * The other optional parameters are:
         *
         * `preallocation`
         * If format is `raw,` then this can be either `off` (or `sparse)` or
         * `full` to create a sparse or fully allocated file respectively. The
         * default is `off`.
         *
         * If format is `qcow2`, then this can be `off` (or `sparse)`, `metadata`
         * or `full`. Preallocating metadata can be faster when doing lots of
         * writes, but uses more space. The default is `off`.
         *
         * `compat`
         * `qcow2` only: Pass the string 1.1 to use the advanced qcow2 format
         * supported by qemu &ge; 1.1.
         *
         * `clustersize`
         * `qcow2` only: Change the qcow2 cluster size. The default is 65536
         * (bytes) and this setting may be any power of two between 512 and
         * 2097152.
         *
         * Note that this call does not add the new disk to the handle. You may
         * need to call guestfs_session_add_drive_opts() separately.
         * @param filename
         * @param format
         * @param size
         * @param optargs a GuestfsDiskCreate containing optional arguments
         * @returns true on success, false on error
         */
        disk_create(filename: string, format: string, size: number, optargs?: DiskCreate | null): boolean;
        /**
         * detect the disk format of a disk image
         *
         * Detect and return the format of the disk image called filename. filename
         * can also be a host device, etc. If the format of the image could not be
         * detected, then "unknown" is returned.
         *
         * Note that detecting the disk format can be insecure under some
         * circumstances. See "CVE-2010-3851" in guestfs(3).
         *
         * See also: "DISK IMAGE FORMATS" in guestfs(3)
         * @param filename
         * @returns the returned string, or NULL on error
         */
        disk_format(filename: string): string;
        /**
         * return whether disk has a backing file
         *
         * Detect and return whether the disk image filename has a backing file.
         *
         * Note that detecting disk features can be insecure under some
         * circumstances. See "CVE-2010-3851" in guestfs(3).
         * @param filename
         * @returns the returned value, or -1 on error
         */
        disk_has_backing_file(filename: string): number;
        /**
         * return virtual size of a disk
         *
         * Detect and return the virtual size in bytes of the disk image called
         * filename.
         *
         * Note that detecting disk features can be insecure under some
         * circumstances. See "CVE-2010-3851" in guestfs(3).
         * @param filename
         * @returns the returned value, or -1 on error
         */
        disk_virtual_size(filename: string): number;
        /**
         * return kernel messages
         *
         * This returns the kernel messages (dmesg(1) output) from the guest
         * kernel. This is sometimes useful for extended debugging of problems.
         *
         * Another way to get the same information is to enable verbose messages
         * with guestfs_session_set_verbose() or by setting the environment
         * variable "LIBGUESTFS_DEBUG=1" before running the program.
         * @returns the returned string, or NULL on error
         */
        dmesg(): string;
        /**
         * download a file to the local machine
         *
         * Download file remotefilename and save it as filename on the local
         * machine.
         *
         * filename can also be a named pipe.
         *
         * See also guestfs_session_upload(), guestfs_session_cat().
         * @param remotefilename
         * @param filename
         * @param cancellable A GCancellable object
         * @returns true on success, false on error
         */
        download(remotefilename: string, filename: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * download the given data units from the disk
         *
         * Download the data units from start address to stop from the disk
         * partition (eg. /dev/sda1) and save them as filename on the local
         * machine.
         *
         * The use of this API on sparse disk image formats such as QCOW, may
         * result in large zero-filled files downloaded on the host.
         *
         * The size of a data unit varies across filesystem implementations. On
         * NTFS filesystems data units are referred as clusters while on ExtX ones
         * they are referred as fragments.
         *
         * If the optional `unallocated` flag is true (default is false), only the
         * unallocated blocks will be extracted. This is useful to detect hidden
         * data or to retrieve deleted files which data units have not been
         * overwritten yet.
         *
         * This function depends on the feature "sleuthkit".
         * See also guestfs_session_feature_available().
         * @param device
         * @param start
         * @param stop
         * @param filename
         * @param optargs a GuestfsDownloadBlocks containing optional arguments
         * @param cancellable A GCancellable object
         * @returns true on success, false on error
         */
        download_blocks(
            device: string,
            start: number,
            stop: number,
            filename: string,
            optargs?: DownloadBlocks | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * download a file to the local machine given its inode
         *
         * Download a file given its inode from the disk partition (eg. /dev/sda1)
         * and save it as filename on the local machine.
         *
         * It is not required to mount the disk to run this command.
         *
         * The command is capable of downloading deleted or inaccessible files.
         *
         * This function depends on the feature "sleuthkit".
         * See also guestfs_session_feature_available().
         * @param device
         * @param inode
         * @param filename
         * @param cancellable A GCancellable object
         * @returns true on success, false on error
         */
        download_inode(device: string, inode: number, filename: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * download a file to the local machine with offset and size
         *
         * Download file remotefilename and save it as filename on the local
         * machine.
         *
         * remotefilename is read for `size` bytes starting at `offset` (this region
         * must be within the file or device).
         *
         * Note that there is no limit on the amount of data that can be downloaded
         * with this call, unlike with guestfs_session_pread(), and this call
         * always reads the full amount unless an error occurs.
         *
         * See also guestfs_session_download(), guestfs_session_pread().
         * @param remotefilename
         * @param filename
         * @param offset
         * @param size
         * @param cancellable A GCancellable object
         * @returns true on success, false on error
         */
        download_offset(
            remotefilename: string,
            filename: string,
            offset: number,
            size: number,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * drop kernel page cache, dentries and inodes
         *
         * This instructs the guest kernel to drop its page cache, and/or dentries
         * and inode caches. The parameter `whattodrop` tells the kernel what
         * precisely to drop, see <ulink url='https://linux-mm.org/Drop_Caches'>
         * http://linux-mm.org/Drop_Caches </ulink>
         *
         * Setting `whattodrop` to 3 should drop everything.
         *
         * This automatically calls sync(2) before the operation, so that the
         * maximum guest memory is freed.
         * @param whattodrop
         * @returns true on success, false on error
         */
        drop_caches(whattodrop: number): boolean;
        /**
         * estimate file space usage
         *
         * This command runs the "du -s" command to estimate file space usage for
         * `path`.
         *
         * `path` can be a file or a directory. If `path` is a directory then the
         * estimate includes the contents of the directory and all subdirectories
         * (recursively).
         *
         * The result is the estimated size in *kilobytes* (ie. units of 1024
         * bytes).
         * @param path
         * @returns the returned value, or -1 on error
         */
        du(path: string): number;
        /**
         * check an ext2/ext3 filesystem
         *
         * This runs the ext2/ext3 filesystem checker on `device`. It can take the
         * following optional arguments:
         *
         * `correct`
         * Automatically repair the file system. This option will cause e2fsck
         * to automatically fix any filesystem problems that can be safely
         * fixed without human intervention.
         *
         * This option may not be specified at the same time as the `forceall`
         * option.
         *
         * `forceall`
         * Assume an answer of ‘yes’ to all questions; allows e2fsck to be used
         * non-interactively.
         *
         * This option may not be specified at the same time as the `correct`
         * option.
         * @param device
         * @param optargs a GuestfsE2fsck containing optional arguments
         * @returns true on success, false on error
         */
        e2fsck(device: string, optargs?: E2fsck | null): boolean;
        /**
         * check an ext2/ext3 filesystem
         *
         * This runs "e2fsck -p -f device", ie. runs the ext2/ext3 filesystem
         * checker on `device,` noninteractively (*-p*), even if the filesystem
         * appears to be clean (*-f*).
         * @param device
         * @returns true on success, false on error
         */
        e2fsck_f(device: string): boolean;
        /**
         * echo arguments back to the client
         *
         * This command concatenates the list of `words` passed with single spaces
         * between them and returns the resulting string.
         *
         * You can use this command to test the connection through to the daemon.
         *
         * See also guestfs_session_ping_daemon().
         * @param words an array of strings
         * @returns the returned string, or NULL on error
         */
        echo_daemon(words: string[]): string;
        /**
         * return lines matching a pattern
         *
         * This calls the external egrep(1) program and returns the matching lines.
         * @param regex
         * @param path
         * @returns an array of returned strings, or NULL on error
         */
        egrep(regex: string, path: string): string[];
        /**
         * return lines matching a pattern
         *
         * This calls the external "egrep -i" program and returns the matching
         * lines.
         * @param regex
         * @param path
         * @returns an array of returned strings, or NULL on error
         */
        egrepi(regex: string, path: string): string[];
        /**
         * test if two files have equal contents
         *
         * This compares the two files file1 and file2 and returns true if their
         * content is exactly equal, or false otherwise.
         *
         * The external cmp(1) program is used for the comparison.
         * @param file1
         * @param file2
         * @returns the returned value, or -1 on error
         */
        equal(file1: string, file2: string): number;
        /**
         * test if file or directory exists
         *
         * This returns `true` if and only if there is a file, directory (or
         * anything) with the given `path` name.
         *
         * See also guestfs_session_is_file(), guestfs_session_is_dir(),
         * guestfs_session_stat().
         * @param path
         * @returns the returned value, or -1 on error
         */
        exists(path: string): number;
        /**
         * install the SYSLINUX bootloader on an ext2/3/4 or btrfs filesystem
         *
         * Install the SYSLINUX bootloader on the device mounted at directory.
         * Unlike guestfs_session_syslinux() which requires a FAT filesystem, this
         * can be used on an ext2/3/4 or btrfs filesystem.
         *
         * The directory parameter can be either a mountpoint, or a directory
         * within the mountpoint.
         *
         * You also have to mark the partition as "active"
         * (guestfs_session_part_set_bootable()) and a Master Boot Record must be
         * installed (eg. using guestfs_session_pwrite_device()) on the first
         * sector of the whole disk. The SYSLINUX package comes with some suitable
         * Master Boot Records. See the extlinux(1) man page for further
         * information.
         *
         * Additional configuration can be supplied to SYSLINUX by placing a file
         * called extlinux.conf on the filesystem under directory. For further
         * information about the contents of this file, see extlinux(1).
         *
         * See also guestfs_session_syslinux().
         *
         * This function depends on the feature "extlinux".
         * See also guestfs_session_feature_available().
         * @param directory
         * @returns true on success, false on error
         */
        extlinux(directory: string): boolean;
        /**
         * expand a f2fs filesystem
         *
         * This expands a f2fs filesystem to match the size of the underlying
         * device.
         *
         * This function depends on the feature "f2fs".
         * See also guestfs_session_feature_available().
         * @param device
         * @returns true on success, false on error
         */
        f2fs_expand(device: string): boolean;
        /**
         * preallocate a file in the guest filesystem
         *
         * This command preallocates a file (containing zero bytes) named `path` of
         * size `len` bytes. If the file exists already, it is overwritten.
         *
         * Do not confuse this with the guestfish-specific `alloc` command which
         * allocates a file in the host and attaches it as a device.
         * @param path
         * @param len
         * @returns true on success, false on error
         */
        fallocate(path: string, len: number): boolean;
        /**
         * preallocate a file in the guest filesystem
         *
         * This command preallocates a file (containing zero bytes) named `path` of
         * size `len` bytes. If the file exists already, it is overwritten.
         *
         * Note that this call allocates disk blocks for the file. To create a
         * sparse file use guestfs_session_truncate_size() instead.
         *
         * The deprecated call guestfs_session_fallocate() does the same, but owing
         * to an oversight it only allowed 30 bit lengths to be specified,
         * effectively limiting the maximum size of files created through that call
         * to 1GB.
         *
         * Do not confuse this with the guestfish-specific `alloc` and `sparse`
         * commands which create a file in the host and attach it as a device.
         * @param path
         * @param len
         * @returns true on success, false on error
         */
        fallocate64(path: string, len: number): boolean;
        /**
         * test availability of some parts of the API
         *
         * This is the same as guestfs_session_available(), but unlike that call it
         * returns a simple true/false boolean result, instead of throwing an
         * exception if a feature is not found. For other documentation see
         * guestfs_session_available().
         * @param groups an array of strings
         * @returns the returned value, or -1 on error
         */
        feature_available(groups: string[]): number;
        /**
         * return lines matching a pattern
         *
         * This calls the external fgrep(1) program and returns the matching lines.
         * @param pattern
         * @param path
         * @returns an array of returned strings, or NULL on error
         */
        fgrep(pattern: string, path: string): string[];
        /**
         * return lines matching a pattern
         *
         * This calls the external "fgrep -i" program and returns the matching
         * lines.
         * @param pattern
         * @param path
         * @returns an array of returned strings, or NULL on error
         */
        fgrepi(pattern: string, path: string): string[];
        /**
         * determine file type
         *
         * This call uses the standard file(1) command to determine the type or
         * contents of the file.
         *
         * This call will also transparently look inside various types of
         * compressed file.
         *
         * The filename is not prepended to the output (like the file command *-b*
         * option).
         *
         * The output depends on the output of the underlying file(1) command and
         * it can change in future in ways beyond our control. In other words, the
         * output is not guaranteed by the ABI.
         *
         * See also: file(1), guestfs_session_vfs_type(), guestfs_session_lstat(),
         * guestfs_session_is_file(), guestfs_session_is_blockdev() (etc),
         * guestfs_session_is_zero().
         * @param path
         * @returns the returned string, or NULL on error
         */
        file(path: string): string;
        /**
         * detect the architecture of a binary file
         *
         * This detects the architecture of the binary filename, and returns it if
         * known.
         *
         * Currently defined architectures are:
         *
         * "aarch64"
         * 64 bit ARM.
         *
         * "arm"
         * 32 bit ARM.
         *
         * "i386"
         * This string is returned for all 32 bit i386, i486, i586, i686
         * binaries irrespective of the precise processor requirements of the
         * binary.
         *
         * "ia64"
         * Intel Itanium.
         *
         * "ppc"
         * 32 bit Power PC.
         *
         * "ppc64"
         * 64 bit Power PC (big endian).
         *
         * "ppc64le"
         * 64 bit Power PC (little endian).
         *
         * "riscv32"
         * "riscv64"
         * "riscv128"
         * RISC-V 32-, 64- or 128-bit variants.
         *
         * "s390"
         * 31 bit IBM S/390.
         *
         * "s390x"
         * 64 bit IBM S/390.
         *
         * "sparc"
         * 32 bit SPARC.
         *
         * "sparc64"
         * 64 bit SPARC V9 and above.
         *
         * "x86_64"
         * 64 bit x86-64.
         *
         * Libguestfs may return other architecture strings in future.
         *
         * The function works on at least the following types of files:
         *
         * *   many types of Un*x and Linux binary
         *
         * *   many types of Un*x and Linux shared library
         *
         * *   Windows Win32 and Win64 binaries
         *
         * *   Windows Win32 and Win64 DLLs
         *
         * Win32 binaries and DLLs return `i3`86.
         *
         * Win64 binaries and DLLs return `x8`6_64.
         *
         * *   Linux kernel modules
         *
         * *   Linux new-style initrd images
         *
         * *   some non-x86 Linux vmlinuz kernels
         *
         * What it can't do currently:
         *
         * *   static libraries (libfoo.a)
         *
         * *   Linux old-style initrd as compressed ext2 filesystem (RHEL 3)
         *
         * *   x86 Linux vmlinuz kernels
         *
         * x86 vmlinuz images (bzImage format) consist of a mix of 16-, 32- and
         * compressed code, and are horribly hard to unpack. If you want to
         * find the architecture of a kernel, use the architecture of the
         * associated initrd or kernel module(s) instead.
         * @param filename
         * @returns the returned string, or NULL on error
         */
        file_architecture(filename: string): string;
        /**
         * return the size of the file in bytes
         *
         * This command returns the size of file in bytes.
         *
         * To get other stats about a file, use guestfs_session_stat(),
         * guestfs_session_lstat(), guestfs_session_is_dir(),
         * guestfs_session_is_file() etc. To get the size of block devices, use
         * guestfs_session_blockdev_getsize64().
         * @param file
         * @returns the returned value, or -1 on error
         */
        filesize(file: string): number;
        /**
         * check if filesystem is available
         *
         * Check whether libguestfs supports the named filesystem. The argument
         * `filesystem` is a filesystem name, such as `ext3`.
         *
         * You must call guestfs_session_launch() before using this command.
         *
         * This is mainly useful as a negative test. If this returns true, it
         * doesn't mean that a particular filesystem can be created or mounted,
         * since filesystems can fail for other reasons such as it being a later
         * version of the filesystem, or having incompatible features, or lacking
         * the right mkfs.&lt;*fs*&gt; tool.
         *
         * See also guestfs_session_available(),
         * guestfs_session_feature_available(), "AVAILABILITY" in guestfs(3).
         * @param filesystem
         * @returns the returned value, or -1 on error
         */
        filesystem_available(filesystem: string): number;
        /**
         * walk through the filesystem content
         *
         * Walk through the internal structures of a disk partition (eg. /dev/sda1)
         * in order to return a list of all the files and directories stored
         * within.
         *
         * It is not necessary to mount the disk partition to run this command.
         *
         * All entries in the filesystem are returned. This function can list
         * deleted or unaccessible files. The entries are *not* sorted.
         *
         * The `tsk_dirent` structure contains the following fields.
         *
         * `tsk_inode`
         * Filesystem reference number of the node. It might be `0` if the node
         * has been deleted.
         *
         * `tsk_type`
         * Basic file type information. See below for a detailed list of
         * values.
         *
         * `tsk_size`
         * File size in bytes. It might be `-1` if the node has been deleted.
         *
         * `tsk_name`
         * The file path relative to its directory.
         *
         * `tsk_flags`
         * Bitfield containing extra information regarding the entry. It
         * contains the logical OR of the following values:
         *
         * 0x0001
         * If set to `1`, the file is allocated and visible within the
         * filesystem. Otherwise, the file has been deleted. Under certain
         * circumstances, the function `download_inode` can be used to
         * recover deleted files.
         *
         * 0x0002
         * Filesystem such as NTFS and Ext2 or greater, separate the file
         * name from the metadata structure. The bit is set to `1` when the
         * file name is in an unallocated state and the metadata structure
         * is in an allocated one. This generally implies the metadata has
         * been reallocated to a new file. Therefore, information such as
         * file type, file size, timestamps, number of links and symlink
         * target might not correspond with the ones of the original
         * deleted entry.
         *
         * 0x0004
         * The bit is set to `1` when the file is compressed using
         * filesystem native compression support (NTFS). The API is not
         * able to detect application level compression.
         *
         * `tsk_atime_sec`
         * `tsk_atime_nsec`
         * `tsk_mtime_sec`
         * `tsk_mtime_nsec`
         * `tsk_ctime_sec`
         * `tsk_ctime_nsec`
         * `tsk_crtime_sec`
         * `tsk_crtime_nsec`
         * Respectively, access, modification, last status change and creation
         * time in Unix format in seconds and nanoseconds.
         *
         * `tsk_nlink`
         * Number of file names pointing to this entry.
         *
         * `tsk_link`
         * If the entry is a symbolic link, this field will contain the path to
         * the target file.
         *
         * The `tsk_type` field will contain one of the following characters:
         *
         * 'b' Block special
         *
         * 'c' Char special
         *
         * 'd' Directory
         *
         * 'f' FIFO (named pipe)
         *
         * 'l' Symbolic link
         *
         * 'r' Regular file
         *
         * 's' Socket
         *
         * 'h' Shadow inode (Solaris)
         *
         * 'w' Whiteout inode (BSD)
         *
         * 'u' Unknown file type
         *
         * This function depends on the feature "libtsk".
         * See also guestfs_session_feature_available().
         * @param device
         * @param cancellable A GCancellable object
         * @returns an array of TSKDirent objects, or NULL on error
         */
        filesystem_walk(device: string, cancellable?: Gio.Cancellable | null): TSKDirent[];
        /**
         * fill a file with octets
         *
         * This command creates a new file called `path`. The initial content of the
         * file is `len` octets of `c,` where `c` must be a number in the range
         * "[0..255]".
         *
         * To fill a file with zero bytes (sparsely), it is much more efficient to
         * use guestfs_session_truncate_size(). To create a file with a pattern of
         * repeating bytes use guestfs_session_fill_pattern().
         * @param c
         * @param len
         * @param path
         * @returns true on success, false on error
         */
        fill(c: number, len: number, path: string): boolean;
        /**
         * fill a directory with empty files
         *
         * This function, useful for testing filesystems, creates `nr` empty files
         * in the directory `dir` with names `0`0000000 through `nr-1` (ie. each file
         * name is 8 digits long padded with zeroes).
         * @param dir
         * @param nr
         * @returns true on success, false on error
         */
        fill_dir(dir: string, nr: number): boolean;
        /**
         * fill a file with a repeating pattern of bytes
         *
         * This function is like guestfs_session_fill() except that it creates a
         * new file of length `len` containing the repeating pattern of bytes in
         * `pattern`. The pattern is truncated if necessary to ensure the length of
         * the file is exactly `len` bytes.
         * @param pattern
         * @param len
         * @param path
         * @returns true on success, false on error
         */
        fill_pattern(pattern: string, len: number, path: string): boolean;
        /**
         * find all files and directories
         *
         * This command lists out all files and directories, recursively, starting
         * at directory. It is essentially equivalent to running the shell command
         * "find directory -print" but some post-processing happens on the output,
         * described below.
         *
         * This returns a list of strings *without any prefix*. Thus if the
         * directory structure was:
         *
         * <![CDATA[/tmp/a]]>
         *
         * <![CDATA[/tmp/b]]>
         *
         * <![CDATA[/tmp/c/d]]>
         *
         * then the returned list from guestfs_session_find() /tmp would be 4
         * elements:
         *
         * <![CDATA[a]]>
         *
         * <![CDATA[b]]>
         *
         * <![CDATA[c]]>
         *
         * <![CDATA[c/d]]>
         *
         * If directory is not a directory, then this command returns an error.
         *
         * The returned list is sorted.
         * @param directory
         * @returns an array of returned strings, or NULL on error
         */
        find(directory: string): string[];
        /**
         * find all files and directories, returning NUL-separated list
         *
         * This command lists out all files and directories, recursively, starting
         * at directory, placing the resulting list in the external file called
         * files.
         *
         * This command works the same way as guestfs_session_find() with the
         * following exceptions:
         *
         * *   The resulting list is written to an external file.
         *
         * *   Items (filenames) in the result are separated by "\0" characters.
         * See find(1) option *-print0*.
         *
         * *   The result list is not sorted.
         * @param directory
         * @param files
         * @param cancellable A GCancellable object
         * @returns true on success, false on error
         */
        find0(directory: string, files: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * search the entries associated to the given inode
         *
         * Searches all the entries associated with the given inode.
         *
         * For each entry, a `tsk_dirent` structure is returned. See
         * `filesystem_walk` for more information about `tsk_dirent` structures.
         *
         * This function depends on the feature "libtsk".
         * See also guestfs_session_feature_available().
         * @param device
         * @param inode
         * @param cancellable A GCancellable object
         * @returns an array of TSKDirent objects, or NULL on error
         */
        find_inode(device: string, inode: number, cancellable?: Gio.Cancellable | null): TSKDirent[];
        /**
         * find a filesystem by label
         *
         * This command searches the filesystems and returns the one which has the
         * given label. An error is returned if no such filesystem can be found.
         *
         * To find the label of a filesystem, use guestfs_session_vfs_label().
         * @param label
         * @returns the returned string, or NULL on error
         */
        findfs_label(label: string): string;
        /**
         * find a filesystem by UUID
         *
         * This command searches the filesystems and returns the one which has the
         * given UUID. An error is returned if no such filesystem can be found.
         *
         * To find the UUID of a filesystem, use guestfs_session_vfs_uuid().
         * @param uuid
         * @returns the returned string, or NULL on error
         */
        findfs_uuid(uuid: string): string;
        /**
         * run the filesystem checker
         *
         * This runs the filesystem checker (fsck) on `device` which should have
         * filesystem type `fstype`.
         *
         * The returned integer is the status. See fsck(8) for the list of status
         * codes from `fsck`.
         *
         * Notes:
         *
         * *   Multiple status codes can be summed together.
         *
         * *   A non-zero return code can mean "success", for example if errors
         * have been corrected on the filesystem.
         *
         * *   Checking or repairing NTFS volumes is not supported (by linux-ntfs).
         *
         * This command is entirely equivalent to running "fsck -a -t fstype
         * device".
         * @param fstype
         * @param device
         * @returns the returned value, or -1 on error
         */
        fsck(fstype: string, device: string): number;
        /**
         * trim free space in a filesystem
         *
         * Trim the free space in the filesystem mounted on `mountpoint`. The
         * filesystem must be mounted read-write.
         *
         * The filesystem contents are not affected, but any free space in the
         * filesystem is "trimmed", that is, given back to the host device, thus
         * making disk images more sparse, allowing unused space in qcow2 files to
         * be reused, etc.
         *
         * This operation requires support in libguestfs, the mounted filesystem,
         * the host filesystem, qemu and the host kernel. If this support isn't
         * present it may give an error or even appear to run but do nothing.
         *
         * In the case where the kernel vfs driver does not support trimming, this
         * call will fail with errno set to `ENOTSUP`. Currently this happens when
         * trying to trim FAT filesystems.
         *
         * See also guestfs_session_zero_free_space(). That is a slightly different
         * operation that turns free space in the filesystem into zeroes. It is
         * valid to call guestfs_session_fstrim() either instead of, or after
         * calling guestfs_session_zero_free_space().
         *
         * This function depends on the feature "fstrim".
         * See also guestfs_session_feature_available().
         * @param mountpoint
         * @param optargs a GuestfsFstrim containing optional arguments
         * @returns true on success, false on error
         */
        fstrim(mountpoint: string, optargs?: Fstrim | null): boolean;
        /**
         * get the additional kernel options
         *
         * Return the additional kernel options which are added to the libguestfs
         * appliance kernel command line.
         *
         * If `NULL` then no options are added.
         * @returns the returned string. Note that NULL does not indicate error
         */
        get_append(): string;
        /**
         * get the backend
         *
         * Return the current backend.
         *
         * See guestfs_session_set_backend() and "BACKEND" in guestfs(3).
         * @returns the returned string, or NULL on error
         */
        get_attach_method(): string;
        /**
         * get autosync mode
         *
         * Get the autosync flag.
         * @returns the returned value, or -1 on error
         */
        get_autosync(): number;
        /**
         * get the backend
         *
         * Return the current backend.
         *
         * This handle property was previously called the "attach method".
         *
         * See guestfs_session_set_backend() and "BACKEND" in guestfs(3).
         * @returns the returned string, or NULL on error
         */
        get_backend(): string;
        /**
         * get a single per-backend settings string
         *
         * Find a backend setting string which is either "name" or begins with
         * "name=". If "name", this returns the string "1". If "name=", this
         * returns the part after the equals sign (which may be an empty string).
         *
         * If no such setting is found, this function throws an error. The errno
         * (see guestfs_session_last_errno()) will be `ESRCH` in this case.
         *
         * See "BACKEND" in guestfs(3), "BACKEND SETTINGS" in guestfs(3).
         * @param name
         * @returns the returned string, or NULL on error
         */
        get_backend_setting(name: string): string;
        /**
         * get per-backend settings
         *
         * Return the current backend settings.
         *
         * This call returns all backend settings strings. If you want to find a
         * single backend setting, see guestfs_session_get_backend_setting().
         *
         * See "BACKEND" in guestfs(3), "BACKEND SETTINGS" in guestfs(3).
         * @returns an array of returned strings, or NULL on error
         */
        get_backend_settings(): string[];
        /**
         * get the appliance cache directory
         *
         * Get the directory used by the handle to store the appliance cache.
         * @returns the returned string, or NULL on error
         */
        get_cachedir(): string;
        /**
         * get direct appliance mode flag
         *
         * Return the direct appliance mode flag.
         * @returns the returned value, or -1 on error
         */
        get_direct(): number;
        /**
         * get ext2 file attributes of a file
         *
         * This returns the file attributes associated with file.
         *
         * The attributes are a set of bits associated with each inode which affect
         * the behaviour of the file. The attributes are returned as a string of
         * letters (described below). The string may be empty, indicating that no
         * file attributes are set for this file.
         *
         * These attributes are only present when the file is located on an
         * ext2/3/4 filesystem. Using this call on other filesystem types will
         * result in an error.
         *
         * The characters (file attributes) in the returned string are currently:
         *
         * 'A' When the file is accessed, its atime is not modified.
         *
         * 'a' The file is append-only.
         *
         * 'c' The file is compressed on-disk.
         *
         * 'D' (Directories only.) Changes to this directory are written
         * synchronously to disk.
         *
         * 'd' The file is not a candidate for backup (see dump(8)).
         *
         * 'E' The file has compression errors.
         *
         * 'e' The file is using extents.
         *
         * 'h' The file is storing its blocks in units of the filesystem blocksize
         * instead of sectors.
         *
         * 'I' (Directories only.) The directory is using hashed trees.
         *
         * 'i' The file is immutable. It cannot be modified, deleted or renamed. No
         * link can be created to this file.
         *
         * 'j' The file is data-journaled.
         *
         * 's' When the file is deleted, all its blocks will be zeroed.
         *
         * 'S' Changes to this file are written synchronously to disk.
         *
         * 'T' (Directories only.) This is a hint to the block allocator that
         * subdirectories contained in this directory should be spread across
         * blocks. If not present, the block allocator will try to group
         * subdirectories together.
         *
         * 't' For a file, this disables tail-merging. (Not used by upstream
         * implementations of ext2.)
         *
         * 'u' When the file is deleted, its blocks will be saved, allowing the
         * file to be undeleted.
         *
         * 'X' The raw contents of the compressed file may be accessed.
         *
         * 'Z' The compressed file is dirty.
         *
         * More file attributes may be added to this list later. Not all file
         * attributes may be set for all kinds of files. For detailed information,
         * consult the chattr(1) man page.
         *
         * See also guestfs_session_set_e2attrs().
         *
         * Don't confuse these attributes with extended attributes (see
         * guestfs_session_getxattr()).
         * @param file
         * @returns the returned string, or NULL on error
         */
        get_e2attrs(file: string): string;
        /**
         * get ext2 file generation of a file
         *
         * This returns the ext2 file generation of a file. The generation (which
         * used to be called the "version") is a number associated with an inode.
         * This is most commonly used by NFS servers.
         *
         * The generation is only present when the file is located on an ext2/3/4
         * filesystem. Using this call on other filesystem types will result in an
         * error.
         *
         * See guestfs_session_set_e2generation().
         * @param file
         * @returns the returned value, or -1 on error
         */
        get_e2generation(file: string): number;
        /**
         * get the ext2/3/4 filesystem label
         *
         * This returns the ext2/3/4 filesystem label of the filesystem on `device`.
         * @param device
         * @returns the returned string, or NULL on error
         */
        get_e2label(device: string): string;
        /**
         * get the ext2/3/4 filesystem UUID
         *
         * This returns the ext2/3/4 filesystem UUID of the filesystem on `device`.
         * @param device
         * @returns the returned string, or NULL on error
         */
        get_e2uuid(device: string): string;
        /**
         * get the hypervisor binary
         *
         * Return the current hypervisor binary.
         *
         * This is always non-NULL. If it wasn't set already, then this will return
         * the default qemu binary name.
         * @returns the returned string, or NULL on error
         */
        get_hv(): string;
        /**
         * get the handle identifier
         *
         * Get the handle identifier. See guestfs_session_set_identifier().
         * @returns the returned string, or NULL on error
         */
        get_identifier(): string;
        /**
         * challenge of i'th requested credential
         *
         * Get the challenge (provided by libvirt) for the `index'`th requested
         * credential. If libvirt did not provide a challenge, this returns the
         * empty string "".
         *
         * See "LIBVIRT AUTHENTICATION" in guestfs(3) for documentation and example
         * code.
         * @param index
         * @returns the returned string, or NULL on error
         */
        get_libvirt_requested_credential_challenge(index: number): string;
        /**
         * default result of i'th requested credential
         *
         * Get the default result (provided by libvirt) for the `index'`th requested
         * credential. If libvirt did not provide a default result, this returns
         * the empty string "".
         *
         * See "LIBVIRT AUTHENTICATION" in guestfs(3) for documentation and example
         * code.
         * @param index
         * @returns the returned string, or NULL on error
         */
        get_libvirt_requested_credential_defresult(index: number): string;
        /**
         * prompt of i'th requested credential
         *
         * Get the prompt (provided by libvirt) for the `index'`th requested
         * credential. If libvirt did not provide a prompt, this returns the empty
         * string "".
         *
         * See "LIBVIRT AUTHENTICATION" in guestfs(3) for documentation and example
         * code.
         * @param index
         * @returns the returned string, or NULL on error
         */
        get_libvirt_requested_credential_prompt(index: number): string;
        /**
         * get list of credentials requested by libvirt
         *
         * This should only be called during the event callback for events of type
         * `GUESTFS_EVENT_LIBVIRT_AUTH`.
         *
         * Return the list of credentials requested by libvirt. Possible values are
         * a subset of the strings provided when you called
         * guestfs_session_set_libvirt_supported_credentials().
         *
         * See "LIBVIRT AUTHENTICATION" in guestfs(3) for documentation and example
         * code.
         * @returns an array of returned strings, or NULL on error
         */
        get_libvirt_requested_credentials(): string[];
        /**
         * get memory allocated to the hypervisor
         *
         * This gets the memory size in megabytes allocated to the hypervisor.
         *
         * If guestfs_session_set_memsize() was not called on this handle, and if
         * `LIBGUESTFS_MEMSIZE` was not set, then this returns the compiled-in
         * default value for memsize.
         *
         * For more information on the architecture of libguestfs, see guestfs(3).
         * @returns the returned value, or -1 on error
         */
        get_memsize(): number;
        /**
         * get enable network flag
         *
         * This returns the enable network flag.
         * @returns the returned value, or -1 on error
         */
        get_network(): number;
        /**
         * get the search path
         *
         * Return the current search path.
         *
         * This is always non-NULL. If it wasn't set already, then this will return
         * the default path.
         * @returns the returned string, or NULL on error
         */
        get_path(): string;
        /**
         * get process group flag
         *
         * This returns the process group flag.
         * @returns the returned value, or -1 on error
         */
        get_pgroup(): number;
        /**
         * get PID of hypervisor
         *
         * Return the process ID of the hypervisor. If there is no hypervisor
         * running, then this will return an error.
         *
         * This is an internal call used for debugging and testing.
         * @returns the returned value, or -1 on error
         */
        get_pid(): number;
        /**
         * get the program name
         *
         * Get the program name. See guestfs_session_set_program().
         * @returns the returned string, or NULL on error
         */
        get_program(): string;
        /**
         * get the hypervisor binary (usually qemu)
         *
         * Return the current hypervisor binary (usually qemu).
         *
         * This is always non-NULL. If it wasn't set already, then this will return
         * the default qemu binary name.
         * @returns the returned string, or NULL on error
         */
        get_qemu(): string;
        /**
         * get recovery process enabled flag
         *
         * Return the recovery process enabled flag.
         * @returns the returned value, or -1 on error
         */
        get_recovery_proc(): number;
        /**
         * get SELinux enabled flag
         *
         * This returns the current setting of the selinux flag which is passed to
         * the appliance at boot time. See guestfs_session_set_selinux().
         *
         * For more information on the architecture of libguestfs, see guestfs(3).
         * @returns the returned value, or -1 on error
         */
        get_selinux(): number;
        /**
         * get number of virtual CPUs in appliance
         *
         * This returns the number of virtual CPUs assigned to the appliance.
         * @returns the returned value, or -1 on error
         */
        get_smp(): number;
        /**
         * get the temporary directory for sockets and PID files
         *
         * Get the directory used by the handle to store temporary socket and PID
         * files.
         *
         * This is different from guestfs_session_get_tmpdir(), as we need shorter
         * paths for sockets (due to the limited buffers of filenames for UNIX
         * sockets), and guestfs_session_get_tmpdir() may be too long for them.
         * Furthermore, sockets and PID files must be accessible to such background
         * services started by libguestfs that may not have permission to access
         * the temporary directory returned by guestfs_session_get_tmpdir().
         *
         * The environment variable `XDG_RUNTIME_DIR` controls the default value: If
         * `XDG_RUNTIME_DIR` is set, then that is the default. Else /tmp is the
         * default.
         * @returns the returned string, or NULL on error
         */
        get_sockdir(): string;
        /**
         * get the current state
         *
         * This returns the current state as an opaque integer. This is only useful
         * for printing debug and internal error messages.
         *
         * For more information on states, see guestfs(3).
         * @returns the returned value, or -1 on error
         */
        get_state(): number;
        /**
         * get the temporary directory
         *
         * Get the directory used by the handle to store temporary files.
         * @returns the returned string, or NULL on error
         */
        get_tmpdir(): string;
        /**
         * get command trace enabled flag
         *
         * Return the command trace flag.
         * @returns the returned value, or -1 on error
         */
        get_trace(): number;
        /**
         * get the current umask
         *
         * Return the current umask. By default the umask is `0`22 unless it has
         * been set by calling guestfs_session_umask().
         * @returns the returned value, or -1 on error
         */
        get_umask(): number;
        /**
         * get verbose mode
         *
         * This returns the verbose messages flag.
         * @returns the returned value, or -1 on error
         */
        get_verbose(): number;
        /**
         * get SELinux security context
         *
         * This gets the SELinux security context of the daemon.
         *
         * See the documentation about SELINUX in guestfs(3), and
         * guestfs_session_setcon()
         *
         * This function depends on the feature "selinux".
         * See also guestfs_session_feature_available().
         * @returns the returned string, or NULL on error
         */
        getcon(): string;
        /**
         * get a single extended attribute
         *
         * Get a single extended attribute from file `path` named `name`. This call
         * follows symlinks. If you want to lookup an extended attribute for the
         * symlink itself, use guestfs_session_lgetxattr().
         *
         * Normally it is better to get all extended attributes from a file in one
         * go by calling guestfs_session_getxattrs(). However some Linux filesystem
         * implementations are buggy and do not provide a way to list out
         * attributes. For these filesystems (notably ntfs-3g) you have to know the
         * names of the extended attributes you want in advance and call this
         * function.
         *
         * Extended attribute values are blobs of binary data. If there is no
         * extended attribute named `name,` this returns an error.
         *
         * See also: guestfs_session_getxattrs(), guestfs_session_lgetxattr(),
         * attr(5).
         *
         * This function depends on the feature "linuxxattrs".
         * See also guestfs_session_feature_available().
         * @param path
         * @param name
         * @returns an array of binary data, or NULL on error
         */
        getxattr(path: string, name: string): Uint8Array;
        /**
         * list extended attributes of a file or directory
         *
         * This call lists the extended attributes of the file or directory `path`.
         *
         * At the system call level, this is a combination of the listxattr(2) and
         * getxattr(2) calls.
         *
         * See also: guestfs_session_lgetxattrs(), attr(5).
         *
         * This function depends on the feature "linuxxattrs".
         * See also guestfs_session_feature_available().
         * @param path
         * @returns an array of XAttr objects, or NULL on error
         */
        getxattrs(path: string): XAttr[];
        /**
         * expand a wildcard path
         *
         * This command searches for all the pathnames matching `pattern` according
         * to the wildcard expansion rules used by the shell.
         *
         * If no paths match, then this returns an empty list (note: not an error).
         *
         * It is just a wrapper around the C glob(3) function with flags
         * "GLOB_MARK|GLOB_BRACE". See that manual page for more details.
         *
         * `directoryslash` controls whether use the `GLOB_MARK` flag for glob(3),
         * and it defaults to true. It can be explicitly set as off to return no
         * trailing slashes in filenames of directories.
         *
         * Notice that there is no equivalent command for expanding a device name
         * (eg. /dev/sd*). Use guestfs_session_list_devices(),
         * guestfs_session_list_partitions() etc functions instead.
         * @param pattern
         * @param optargs a GuestfsGlobExpand containing optional arguments
         * @returns an array of returned strings, or NULL on error
         */
        glob_expand(pattern: string, optargs?: GlobExpand | null): string[];
        /**
         * return lines matching a pattern
         *
         * This calls the external grep(1) program and returns the matching lines.
         *
         * The optional flags are:
         *
         * `extended`
         * Use extended regular expressions. This is the same as using the *-E*
         * flag.
         *
         * `fixed`
         * Match fixed (don't use regular expressions). This is the same as
         * using the *-F* flag.
         *
         * `insensitive`
         * Match case-insensitive. This is the same as using the *-i* flag.
         *
         * `compressed`
         * Use zgrep(1) instead of grep(1). This allows the input to be
         * compress- or gzip-compressed.
         * @param regex
         * @param path
         * @param optargs a GuestfsGrep containing optional arguments
         * @returns an array of returned strings, or NULL on error
         */
        grep(regex: string, path: string, optargs?: Grep | null): string[];
        /**
         * return lines matching a pattern
         *
         * This calls the external "grep -i" program and returns the matching
         * lines.
         * @param regex
         * @param path
         * @returns an array of returned strings, or NULL on error
         */
        grepi(regex: string, path: string): string[];
        /**
         * install GRUB 1
         *
         * This command installs GRUB 1 (the Grand Unified Bootloader) on `device,`
         * with the root directory being `root`.
         *
         * Notes:
         *
         * *   There is currently no way in the API to install grub2, which is used
         * by most modern Linux guests. It is possible to run the grub2 command
         * from the guest, although see the caveats in "RUNNING COMMANDS" in
         * guestfs(3).
         *
         * *   This uses grub-install(8) from the host. Unfortunately grub is not
         * always compatible with itself, so this only works in rather narrow
         * circumstances. Careful testing with each guest version is advisable.
         *
         * *   If grub-install reports the error "No suitable drive was found in
         * the generated device map." it may be that you need to create a
         * /boot/grub/device.map file first that contains the mapping between
         * grub device names and Linux device names. It is usually sufficient
         * to create a file containing:
         *
         * <![CDATA[(hd0) /dev/vda]]>
         *
         * replacing /dev/vda with the name of the installation device.
         *
         * This function depends on the feature "grub".
         * See also guestfs_session_feature_available().
         * @param root
         * @param device
         * @returns true on success, false on error
         */
        grub_install(root: string, device: string): boolean;
        /**
         * return first 10 lines of a file
         *
         * This command returns up to the first 10 lines of a file as a list of
         * strings.
         * @param path
         * @returns an array of returned strings, or NULL on error
         */
        head(path: string): string[];
        /**
         * return first N lines of a file
         *
         * If the parameter `nrlines` is a positive number, this returns the first
         * `nrlines` lines of the file `path`.
         *
         * If the parameter `nrlines` is a negative number, this returns lines from
         * the file `path,` excluding the last `nrlines` lines.
         *
         * If the parameter `nrlines` is zero, this returns an empty list.
         * @param nrlines
         * @param path
         * @returns an array of returned strings, or NULL on error
         */
        head_n(nrlines: number, path: string): string[];
        /**
         * dump a file in hexadecimal
         *
         * This runs "hexdump -C" on the given `path`. The result is the
         * human-readable, canonical hex dump of the file.
         * @param path
         * @returns the returned string, or NULL on error
         */
        hexdump(path: string): string;
        /**
         * close the current hivex handle
         *
         * Close the current hivex handle.
         *
         * This is a wrapper around the hivex(3) call of the same name.
         *
         * This function depends on the feature "hivex".
         * See also guestfs_session_feature_available().
         * @returns true on success, false on error
         */
        hivex_close(): boolean;
        /**
         * commit (write) changes back to the hive
         *
         * Commit (write) changes to the hive.
         *
         * If the optional filename parameter is null, then the changes are written
         * back to the same hive that was opened. If this is not null then they are
         * written to the alternate filename given and the original hive is left
         * untouched.
         *
         * This is a wrapper around the hivex(3) call of the same name.
         *
         * This function depends on the feature "hivex".
         * See also guestfs_session_feature_available().
         * @param filename
         * @returns true on success, false on error
         */
        hivex_commit(filename?: string | null): boolean;
        /**
         * add a child node
         *
         * Add a child node to `parent` named `name`.
         *
         * This is a wrapper around the hivex(3) call of the same name.
         *
         * This function depends on the feature "hivex".
         * See also guestfs_session_feature_available().
         * @param parent
         * @param name
         * @returns the returned value, or -1 on error
         */
        hivex_node_add_child(parent: number, name: string): number;
        /**
         * return list of nodes which are subkeys of node
         *
         * Return the list of nodes which are subkeys of `nodeh`.
         *
         * This is a wrapper around the hivex(3) call of the same name.
         *
         * This function depends on the feature "hivex".
         * See also guestfs_session_feature_available().
         * @param nodeh
         * @returns an array of HivexNode objects, or NULL on error
         */
        hivex_node_children(nodeh: number): HivexNode[];
        /**
         * delete a node (recursively)
         *
         * Delete `nodeh,` recursively if necessary.
         *
         * This is a wrapper around the hivex(3) call of the same name.
         *
         * This function depends on the feature "hivex".
         * See also guestfs_session_feature_available().
         * @param nodeh
         * @returns true on success, false on error
         */
        hivex_node_delete_child(nodeh: number): boolean;
        /**
         * return the named child of node
         *
         * Return the child of `nodeh` with the name `name,` if it exists. This can
         * return `0` meaning the name was not found.
         *
         * This is a wrapper around the hivex(3) call of the same name.
         *
         * This function depends on the feature "hivex".
         * See also guestfs_session_feature_available().
         * @param nodeh
         * @param name
         * @returns the returned value, or -1 on error
         */
        hivex_node_get_child(nodeh: number, name: string): number;
        /**
         * return the named value
         *
         * Return the value attached to `nodeh` which has the name `key,` if it
         * exists. This can return `0` meaning the key was not found.
         *
         * This is a wrapper around the hivex(3) call of the same name.
         *
         * This function depends on the feature "hivex".
         * See also guestfs_session_feature_available().
         * @param nodeh
         * @param key
         * @returns the returned value, or -1 on error
         */
        hivex_node_get_value(nodeh: number, key: string): number;
        /**
         * return the name of the node
         *
         * Return the name of `nodeh`.
         *
         * This is a wrapper around the hivex(3) call of the same name.
         *
         * This function depends on the feature "hivex".
         * See also guestfs_session_feature_available().
         * @param nodeh
         * @returns the returned string, or NULL on error
         */
        hivex_node_name(nodeh: number): string;
        /**
         * return the parent of node
         *
         * Return the parent node of `nodeh`.
         *
         * This is a wrapper around the hivex(3) call of the same name.
         *
         * This function depends on the feature "hivex".
         * See also guestfs_session_feature_available().
         * @param nodeh
         * @returns the returned value, or -1 on error
         */
        hivex_node_parent(nodeh: number): number;
        /**
         * set or replace a single value in a node
         *
         * Set or replace a single value under the node `nodeh`. The `key` is the
         * name, `t` is the type, and `val` is the data.
         *
         * This is a wrapper around the hivex(3) call of the same name.
         *
         * This function depends on the feature "hivex".
         * See also guestfs_session_feature_available().
         * @param nodeh
         * @param key
         * @param t
         * @param val an array of binary data
         * @returns true on success, false on error
         */
        hivex_node_set_value(nodeh: number, key: string, t: number, val: Uint8Array | string): boolean;
        /**
         * return list of values attached to node
         *
         * Return the array of (key, datatype, data) tuples attached to `nodeh`.
         *
         * This is a wrapper around the hivex(3) call of the same name.
         *
         * This function depends on the feature "hivex".
         * See also guestfs_session_feature_available().
         * @param nodeh
         * @returns an array of HivexValue objects, or NULL on error
         */
        hivex_node_values(nodeh: number): HivexValue[];
        /**
         * open a Windows Registry hive file
         *
         * Open the Windows Registry hive file named filename. If there was any
         * previous hivex handle associated with this guestfs session, then it is
         * closed.
         *
         * This is a wrapper around the hivex(3) call of the same name.
         *
         * This function depends on the feature "hivex".
         * See also guestfs_session_feature_available().
         * @param filename
         * @param optargs a GuestfsHivexOpen containing optional arguments
         * @returns true on success, false on error
         */
        hivex_open(filename: string, optargs?: HivexOpen | null): boolean;
        /**
         * return the root node of the hive
         *
         * Return the root node of the hive.
         *
         * This is a wrapper around the hivex(3) call of the same name.
         *
         * This function depends on the feature "hivex".
         * See also guestfs_session_feature_available().
         * @returns the returned value, or -1 on error
         */
        hivex_root(): number;
        /**
         * return the key field from the (key, datatype, data) tuple
         *
         * Return the key (name) field of a (key, datatype, data) tuple.
         *
         * This is a wrapper around the hivex(3) call of the same name.
         *
         * This function depends on the feature "hivex".
         * See also guestfs_session_feature_available().
         * @param valueh
         * @returns the returned string, or NULL on error
         */
        hivex_value_key(valueh: number): string;
        /**
         * return the data field as a UTF-8 string
         *
         * This calls guestfs_session_hivex_value_value() (which returns the data
         * field from a hivex value tuple). It then assumes that the field is a
         * UTF-16LE string and converts the result to UTF-8 (or if this is not
         * possible, it returns an error).
         *
         * This is useful for reading strings out of the Windows registry. However
         * it is not foolproof because the registry is not strongly-typed and
         * fields can contain arbitrary or unexpected data.
         *
         * This function depends on the feature "hivex".
         * See also guestfs_session_feature_available().
         * @param valueh
         * @returns the returned string, or NULL on error
         */
        hivex_value_string(valueh: number): string;
        /**
         * return the data type from the (key, datatype, data) tuple
         *
         * Return the data type field from a (key, datatype, data) tuple.
         *
         * This is a wrapper around the hivex(3) call of the same name.
         *
         * This function depends on the feature "hivex".
         * See also guestfs_session_feature_available().
         * @param valueh
         * @returns the returned value, or -1 on error
         */
        hivex_value_type(valueh: number): number;
        /**
         * return the data field as a UTF-8 string
         *
         * This calls guestfs_session_hivex_value_value() (which returns the data
         * field from a hivex value tuple). It then assumes that the field is a
         * UTF-16LE string and converts the result to UTF-8 (or if this is not
         * possible, it returns an error).
         *
         * This is useful for reading strings out of the Windows registry. However
         * it is not foolproof because the registry is not strongly-typed and
         * fields can contain arbitrary or unexpected data.
         *
         * This function depends on the feature "hivex".
         * See also guestfs_session_feature_available().
         * @param valueh
         * @returns the returned string, or NULL on error
         */
        hivex_value_utf8(valueh: number): string;
        /**
         * return the data field from the (key, datatype, data) tuple
         *
         * Return the data field of a (key, datatype, data) tuple.
         *
         * This is a wrapper around the hivex(3) call of the same name.
         *
         * See also: guestfs_session_hivex_value_utf8().
         *
         * This function depends on the feature "hivex".
         * See also guestfs_session_feature_available().
         * @param valueh
         * @returns an array of binary data, or NULL on error
         */
        hivex_value_value(valueh: number): Uint8Array;
        /**
         * list the contents of a single file in an initrd
         *
         * This command unpacks the file filename from the initrd file called
         * initrdpath. The filename must be given *without* the initial /
         * character.
         *
         * For example, in guestfish you could use the following command to examine
         * the boot script (usually called /init) contained in a Linux initrd or
         * initramfs image:
         *
         * <![CDATA[initrd-cat /boot/initrd-<version>.img init]]>
         *
         * See also guestfs_session_initrd_list().
         * @param initrdpath
         * @param filename
         * @returns an array of binary data, or NULL on error
         */
        initrd_cat(initrdpath: string, filename: string): Uint8Array;
        /**
         * list files in an initrd
         *
         * This command lists out files contained in an initrd.
         *
         * The files are listed without any initial / character. The files are
         * listed in the order they appear (not necessarily alphabetical).
         * Directory names are listed as separate items.
         *
         * Old Linux kernels (2.4 and earlier) used a compressed ext2 filesystem as
         * initrd. We *only* support the newer initramfs format (compressed cpio
         * files).
         * @param path
         * @returns an array of returned strings, or NULL on error
         */
        initrd_list(path: string): string[];
        /**
         * add an inotify watch
         *
         * Watch `path` for the events listed in `mask`.
         *
         * Note that if `path` is a directory then events within that directory are
         * watched, but this does *not* happen recursively (in subdirectories).
         *
         * Note for non-C or non-Linux callers: the inotify events are defined by
         * the Linux kernel ABI and are listed in /usr/include/sys/inotify.h.
         *
         * This function depends on the feature "inotify".
         * See also guestfs_session_feature_available().
         * @param path
         * @param mask
         * @returns the returned value, or -1 on error
         */
        inotify_add_watch(path: string, mask: number): number;
        /**
         * close the inotify handle
         *
         * This closes the inotify handle which was previously opened by
         * inotify_init. It removes all watches, throws away any pending events,
         * and deallocates all resources.
         *
         * This function depends on the feature "inotify".
         * See also guestfs_session_feature_available().
         * @returns true on success, false on error
         */
        inotify_close(): boolean;
        /**
         * return list of watched files that had events
         *
         * This function is a helpful wrapper around guestfs_session_inotify_read()
         * which just returns a list of pathnames of objects that were touched. The
         * returned pathnames are sorted and deduplicated.
         *
         * This function depends on the feature "inotify".
         * See also guestfs_session_feature_available().
         * @returns an array of returned strings, or NULL on error
         */
        inotify_files(): string[];
        /**
         * create an inotify handle
         *
         * This command creates a new inotify handle. The inotify subsystem can be
         * used to notify events which happen to objects in the guest filesystem.
         *
         * `maxevents` is the maximum number of events which will be queued up
         * between calls to guestfs_session_inotify_read() or
         * guestfs_session_inotify_files(). If this is passed as `0`, then the
         * kernel (or previously set) default is used. For Linux 2.6.29 the default
         * was 16384 events. Beyond this limit, the kernel throws away events, but
         * records the fact that it threw them away by setting a flag
         * `IN_Q_OVERFLOW` in the returned structure list (see
         * guestfs_session_inotify_read()).
         *
         * Before any events are generated, you have to add some watches to the
         * internal watch list. See: guestfs_session_inotify_add_watch() and
         * guestfs_session_inotify_rm_watch().
         *
         * Queued up events should be read periodically by calling
         * guestfs_session_inotify_read() (or guestfs_session_inotify_files() which
         * is just a helpful wrapper around guestfs_session_inotify_read()). If you
         * don't read the events out often enough then you risk the internal queue
         * overflowing.
         *
         * The handle should be closed after use by calling
         * guestfs_session_inotify_close(). This also removes any watches
         * automatically.
         *
         * See also inotify(7) for an overview of the inotify interface as exposed
         * by the Linux kernel, which is roughly what we expose via libguestfs.
         * Note that there is one global inotify handle per libguestfs instance.
         *
         * This function depends on the feature "inotify".
         * See also guestfs_session_feature_available().
         * @param maxevents
         * @returns true on success, false on error
         */
        inotify_init(maxevents: number): boolean;
        /**
         * return list of inotify events
         *
         * Return the complete queue of events that have happened since the
         * previous read call.
         *
         * If no events have happened, this returns an empty list.
         *
         * *Note*: In order to make sure that all events have been read, you must
         * call this function repeatedly until it returns an empty list. The reason
         * is that the call will read events up to the maximum appliance-to-host
         * message size and leave remaining events in the queue.
         *
         * This function depends on the feature "inotify".
         * See also guestfs_session_feature_available().
         * @returns an array of INotifyEvent objects, or NULL on error
         */
        inotify_read(): INotifyEvent[];
        /**
         * remove an inotify watch
         *
         * Remove a previously defined inotify watch. See
         * guestfs_session_inotify_add_watch().
         *
         * This function depends on the feature "inotify".
         * See also guestfs_session_feature_available().
         * @param wd
         * @returns true on success, false on error
         */
        inotify_rm_watch(wd: number): boolean;
        /**
         * get architecture of inspected operating system
         *
         * This returns the architecture of the inspected operating system. The
         * possible return values are listed under
         * guestfs_session_file_architecture().
         *
         * If the architecture could not be determined, then the string `unknown` is
         * returned.
         *
         * Please read "INSPECTION" in guestfs(3) for more details.
         * @param root
         * @returns the returned string, or NULL on error
         */
        inspect_get_arch(root: string): string;
        /**
         * get the system build ID
         *
         * This returns the build ID of the system, or the string "unknown" if the
         * system does not have a build ID.
         *
         * For Windows, this gets the build number. Although it is returned as a
         * string, it is (so far) always a number. See <ulink
         * url='https://en.wikipedia.org/wiki/List_of_Microsoft_Windows_versions'>
         * http://en.wikipedia.org/wiki/List_of_Microsoft_Windows_versions </ulink>
         * for some possible values.
         *
         * For Linux, this returns the `BUILD_ID` string from /etc/os-release,
         * although this is not often used.
         *
         * Please read "INSPECTION" in guestfs(3) for more details.
         * @param root
         * @returns the returned string, or NULL on error
         */
        inspect_get_build_id(root: string): string;
        /**
         * get distro of inspected operating system
         *
         * This returns the distro (distribution) of the inspected operating
         * system.
         *
         * Currently defined distros are:
         *
         * "alpinelinux"
         * Alpine Linux.
         *
         * "altlinux"
         * ALT Linux.
         *
         * "archlinux"
         * Arch Linux.
         *
         * "buildroot"
         * Buildroot-derived distro, but not one we specifically recognize.
         *
         * "centos"
         * CentOS.
         *
         * "cirros"
         * Cirros.
         *
         * "coreos"
         * CoreOS.
         *
         * "debian"
         * Debian.
         *
         * "fedora"
         * Fedora.
         *
         * "freebsd"
         * FreeBSD.
         *
         * "freedos"
         * FreeDOS.
         *
         * "frugalware"
         * Frugalware.
         *
         * "gentoo"
         * Gentoo.
         *
         * "kalilinux"
         * Kali Linux.
         *
         * "kylin"
         * Kylin.
         *
         * "linuxmint"
         * Linux Mint.
         *
         * "mageia"
         * Mageia.
         *
         * "mandriva"
         * Mandriva.
         *
         * "meego"
         * MeeGo.
         *
         * "msdos"
         * Microsoft DOS.
         *
         * "neokylin"
         * NeoKylin.
         *
         * "netbsd"
         * NetBSD.
         *
         * "openbsd"
         * OpenBSD.
         *
         * "openmandriva"
         * OpenMandriva Lx.
         *
         * "opensuse"
         * OpenSUSE.
         *
         * "oraclelinux"
         * Oracle Linux.
         *
         * "pardus"
         * Pardus.
         *
         * "pldlinux"
         * PLD Linux.
         *
         * "redhat-based"
         * Some Red Hat-derived distro.
         *
         * "rhel"
         * Red Hat Enterprise Linux.
         *
         * "rocky"
         * Rocky Linux.
         *
         * "scientificlinux"
         * Scientific Linux.
         *
         * "slackware"
         * Slackware.
         *
         * "sles"
         * SuSE Linux Enterprise Server or Desktop.
         *
         * "suse-based"
         * Some openSuSE-derived distro.
         *
         * "ttylinux"
         * ttylinux.
         *
         * "ubuntu"
         * Ubuntu.
         *
         * "unknown"
         * The distro could not be determined.
         *
         * "voidlinux"
         * Void Linux.
         *
         * "windows"
         * Windows does not have distributions. This string is returned if the
         * OS type is Windows.
         *
         * Future versions of libguestfs may return other strings here. The caller
         * should be prepared to handle any string.
         *
         * Please read "INSPECTION" in guestfs(3) for more details.
         * @param root
         * @returns the returned string, or NULL on error
         */
        inspect_get_distro(root: string): string;
        /**
         * get drive letter mappings
         *
         * This call is useful for Windows which uses a primitive system of
         * assigning drive letters (like C:\) to partitions. This inspection API
         * examines the Windows Registry to find out how disks/partitions are
         * mapped to drive letters, and returns a hash table as in the example
         * below:
         *
         * <![CDATA[C      =>     /dev/vda2]]>
         *
         * <![CDATA[E      =>     /dev/vdb1]]>
         *
         * <![CDATA[F      =>     /dev/vdc1]]>
         *
         * Note that keys are drive letters. For Windows, the key is case
         * insensitive and just contains the drive letter, without the customary
         * colon separator character.
         *
         * In future we may support other operating systems that also used drive
         * letters, but the keys for those might not be case insensitive and might
         * be longer than 1 character. For example in OS-9, hard drives were named
         * `h0`, `h1` etc.
         *
         * For Windows guests, currently only hard drive mappings are returned.
         * Removable disks (eg. DVD-ROMs) are ignored.
         *
         * For guests that do not use drive mappings, or if the drive mappings
         * could not be determined, this returns an empty hash table.
         *
         * Please read "INSPECTION" in guestfs(3) for more details. See also
         * guestfs_session_inspect_get_mountpoints(),
         * guestfs_session_inspect_get_filesystems().
         * @param root
         * @returns a GHashTable of results, or NULL on error
         */
        inspect_get_drive_mappings(root: string): GLib.HashTable<string, string>;
        /**
         * get filesystems associated with inspected operating system
         *
         * This returns a list of all the filesystems that we think are associated
         * with this operating system. This includes the root filesystem, other
         * ordinary filesystems, and non-mounted devices like swap partitions.
         *
         * In the case of a multi-boot virtual machine, it is possible for a
         * filesystem to be shared between operating systems.
         *
         * Please read "INSPECTION" in guestfs(3) for more details. See also
         * guestfs_session_inspect_get_mountpoints().
         * @param root
         * @returns an array of returned strings, or NULL on error
         */
        inspect_get_filesystems(root: string): string[];
        /**
         * get format of inspected operating system
         *
         * Before libguestfs 1.38, there was some unreliable support for detecting
         * installer CDs. This API would return:
         *
         * `installed`
         * This is an installed operating system.
         *
         * `installer`
         * The disk image being inspected is not an installed operating system,
         * but a *bootable* install disk, live CD, or similar.
         *
         * `unknown`
         * The format of this disk image is not known.
         *
         * In libguestfs &ge; 1.38, this only returns `installed`. Use libosinfo
         * directly to detect installer CDs.
         *
         * Please read "INSPECTION" in guestfs(3) for more details.
         * @param root
         * @returns the returned string, or NULL on error
         */
        inspect_get_format(root: string): string;
        /**
         * get hostname of the operating system
         *
         * This function returns the hostname of the operating system as found by
         * inspection of the guest’s configuration files.
         *
         * If the hostname could not be determined, then the string `unknown` is
         * returned.
         *
         * Please read "INSPECTION" in guestfs(3) for more details.
         * @param root
         * @returns the returned string, or NULL on error
         */
        inspect_get_hostname(root: string): string;
        /**
         * get the icon corresponding to this operating system
         *
         * This function returns an icon corresponding to the inspected operating
         * system. The icon is returned as a buffer containing a PNG image
         * (re-encoded to PNG if necessary).
         *
         * If it was not possible to get an icon this function returns a
         * zero-length (non-NULL) buffer. *Callers must check for this case*.
         *
         * Libguestfs will start by looking for a file called /etc/favicon.png or
         * C:\etc\favicon.png and if it has the correct format, the contents of
         * this file will be returned. You can disable favicons by passing the
         * optional `favicon` boolean as false (default is true).
         *
         * If finding the favicon fails, then we look in other places in the guest
         * for a suitable icon.
         *
         * If the optional `highquality` boolean is true then only high quality
         * icons are returned, which means only icons of high resolution with an
         * alpha channel. The default (false) is to return any icon we can, even if
         * it is of substandard quality.
         *
         * Notes:
         *
         * *   Unlike most other inspection API calls, the guest’s disks must be
         * mounted up before you call this, since it needs to read information
         * from the guest filesystem during the call.
         *
         * *   Security: The icon data comes from the untrusted guest, and should
         * be treated with caution. PNG files have been known to contain
         * exploits. Ensure that libpng (or other relevant libraries) are fully
         * up to date before trying to process or display the icon.
         *
         * *   The PNG image returned can be any size. It might not be square.
         * Libguestfs tries to return the largest, highest quality icon
         * available. The application must scale the icon to the required size.
         *
         * *   Extracting icons from Windows guests requires the external
         * wrestool(1) program from the `icoutils` package, and several programs
         * (bmptopnm(1), pnmtopng(1), pamcut(1)) from the `netpbm` package.
         * These must be installed separately.
         *
         * *   Operating system icons are usually trademarks. Seek legal advice
         * before using trademarks in applications.
         * @param root
         * @param optargs a GuestfsInspectGetIcon containing optional arguments
         * @returns an array of binary data, or NULL on error
         */
        inspect_get_icon(root: string, optargs?: InspectGetIcon | null): Uint8Array;
        /**
         * get major version of inspected operating system
         *
         * This returns the major version number of the inspected operating system.
         *
         * Windows uses a consistent versioning scheme which is *not* reflected in
         * the popular public names used by the operating system. Notably the
         * operating system known as "Windows 7" is really version 6.1 (ie. major =
         * 6, minor = 1). You can find out the real versions corresponding to
         * releases of Windows by consulting Wikipedia or MSDN.
         *
         * If the version could not be determined, then `0` is returned.
         *
         * Please read "INSPECTION" in guestfs(3) for more details.
         * @param root
         * @returns the returned value, or -1 on error
         */
        inspect_get_major_version(root: string): number;
        /**
         * get minor version of inspected operating system
         *
         * This returns the minor version number of the inspected operating system.
         *
         * If the version could not be determined, then `0` is returned.
         *
         * Please read "INSPECTION" in guestfs(3) for more details. See also
         * guestfs_session_inspect_get_major_version().
         * @param root
         * @returns the returned value, or -1 on error
         */
        inspect_get_minor_version(root: string): number;
        /**
         * get mountpoints of inspected operating system
         *
         * This returns a hash of where we think the filesystems associated with
         * this operating system should be mounted. Callers should note that this
         * is at best an educated guess made by reading configuration files such as
         * /etc/fstab. *In particular note* that this may return filesystems which
         * are non-existent or not mountable and callers should be prepared to
         * handle or ignore failures if they try to mount them.
         *
         * Each element in the returned hashtable has a key which is the path of
         * the mountpoint (eg. /boot) and a value which is the filesystem that
         * would be mounted there (eg. /dev/sda1).
         *
         * Non-mounted devices such as swap devices are *not* returned in this
         * list.
         *
         * For operating systems like Windows which still use drive letters, this
         * call will only return an entry for the first drive "mounted on" /. For
         * information about the mapping of drive letters to partitions, see
         * guestfs_session_inspect_get_drive_mappings().
         *
         * Please read "INSPECTION" in guestfs(3) for more details. See also
         * guestfs_session_inspect_get_filesystems().
         * @param root
         * @returns a GHashTable of results, or NULL on error
         */
        inspect_get_mountpoints(root: string): GLib.HashTable<string, string>;
        /**
         * get a possible osinfo short ID corresponding to this operating system
         *
         * This function returns a possible short ID for libosinfo corresponding to
         * the guest.
         *
         * *Note:* The returned ID is only a guess by libguestfs, and nothing
         * ensures that it actually exists in osinfo-db.
         *
         * If no ID could not be determined, then the string `unknown` is returned.
         * @param root
         * @returns the returned string, or NULL on error
         */
        inspect_get_osinfo(root: string): string;
        /**
         * get package format used by the operating system
         *
         * This function and guestfs_session_inspect_get_package_management()
         * return the package format and package management tool used by the
         * inspected operating system. For example for Fedora these functions would
         * return `rpm` (package format), and `yum` or `dnf` (package management).
         *
         * This returns the string `unknown` if we could not determine the package
         * format *or* if the operating system does not have a real packaging
         * system (eg. Windows).
         *
         * Possible strings include: `rpm,` `deb,` `ebuild,` `pisi,` `pacman,` `pkgsrc,`
         * `apk,` `xbps`. Future versions of libguestfs may return other strings.
         *
         * Please read "INSPECTION" in guestfs(3) for more details.
         * @param root
         * @returns the returned string, or NULL on error
         */
        inspect_get_package_format(root: string): string;
        /**
         * get package management tool used by the operating system
         *
         * guestfs_session_inspect_get_package_format() and this function return
         * the package format and package management tool used by the inspected
         * operating system. For example for Fedora these functions would return
         * `rpm` (package format), and `yum` or `dnf` (package management).
         *
         * This returns the string `unknown` if we could not determine the package
         * management tool *or* if the operating system does not have a real
         * packaging system (eg. Windows).
         *
         * Possible strings include: `yum,` `dnf,` `up2`date, `apt` (for all Debian
         * derivatives), `portage,` `pisi,` `pacman,` `urpmi,` `zypper,` `apk,` `xbps`.
         * Future versions of libguestfs may return other strings.
         *
         * Please read "INSPECTION" in guestfs(3) for more details.
         * @param root
         * @returns the returned string, or NULL on error
         */
        inspect_get_package_management(root: string): string;
        /**
         * get product name of inspected operating system
         *
         * This returns the product name of the inspected operating system. The
         * product name is generally some freeform string which can be displayed to
         * the user, but should not be parsed by programs.
         *
         * If the product name could not be determined, then the string `unknown` is
         * returned.
         *
         * Please read "INSPECTION" in guestfs(3) for more details.
         * @param root
         * @returns the returned string, or NULL on error
         */
        inspect_get_product_name(root: string): string;
        /**
         * get product variant of inspected operating system
         *
         * This returns the product variant of the inspected operating system.
         *
         * For Windows guests, this returns the contents of the Registry key
         * "HKLM\Software\Microsoft\Windows NT\CurrentVersion" `InstallationType`
         * which is usually a string such as `Client` or `Server` (other values are
         * possible). This can be used to distinguish consumer and enterprise
         * versions of Windows that have the same version number (for example,
         * Windows 7 and Windows 2008 Server are both version 6.1, but the former
         * is `Client` and the latter is `Server)`.
         *
         * For enterprise Linux guests, in future we intend this to return the
         * product variant such as `Desktop,` `Server` and so on. But this is not
         * implemented at present.
         *
         * If the product variant could not be determined, then the string `unknown`
         * is returned.
         *
         * Please read "INSPECTION" in guestfs(3) for more details. See also
         * guestfs_session_inspect_get_product_name(),
         * guestfs_session_inspect_get_major_version().
         * @param root
         * @returns the returned string, or NULL on error
         */
        inspect_get_product_variant(root: string): string;
        /**
         * return list of operating systems found by last inspection
         *
         * This function is a convenient way to get the list of root devices, as
         * returned from a previous call to guestfs_session_inspect_os(), but
         * without redoing the whole inspection process.
         *
         * This returns an empty list if either no root devices were found or the
         * caller has not called guestfs_session_inspect_os().
         *
         * Please read "INSPECTION" in guestfs(3) for more details.
         * @returns an array of returned strings, or NULL on error
         */
        inspect_get_roots(): string[];
        /**
         * get type of inspected operating system
         *
         * This returns the type of the inspected operating system. Currently
         * defined types are:
         *
         * "linux"
         * Any Linux-based operating system.
         *
         * "windows"
         * Any Microsoft Windows operating system.
         *
         * "freebsd"
         * FreeBSD.
         *
         * "netbsd"
         * NetBSD.
         *
         * "openbsd"
         * OpenBSD.
         *
         * "hurd"
         * GNU/Hurd.
         *
         * "dos"
         * MS-DOS, FreeDOS and others.
         *
         * "minix"
         * MINIX.
         *
         * "unknown"
         * The operating system type could not be determined.
         *
         * Future versions of libguestfs may return other strings here. The caller
         * should be prepared to handle any string.
         *
         * Please read "INSPECTION" in guestfs(3) for more details.
         * @param root
         * @returns the returned string, or NULL on error
         */
        inspect_get_type(root: string): string;
        /**
         * get Windows CurrentControlSet of inspected operating system
         *
         * This returns the Windows CurrentControlSet of the inspected guest. The
         * CurrentControlSet is a registry key name such as `ControlSet0`01.
         *
         * This call assumes that the guest is Windows and that the Registry could
         * be examined by inspection. If this is not the case then an error is
         * returned.
         *
         * Please read "INSPECTION" in guestfs(3) for more details.
         * @param root
         * @returns the returned string, or NULL on error
         */
        inspect_get_windows_current_control_set(root: string): string;
        /**
         * get the path of the Windows software hive
         *
         * This returns the path to the hive (binary Windows Registry file)
         * corresponding to HKLM\SOFTWARE.
         *
         * This call assumes that the guest is Windows and that the guest has a
         * software hive file with the right name. If this is not the case then an
         * error is returned. This call does not check that the hive is a valid
         * Windows Registry hive.
         *
         * You can use guestfs_session_hivex_open() to read or write to the hive.
         *
         * Please read "INSPECTION" in guestfs(3) for more details.
         * @param root
         * @returns the returned string, or NULL on error
         */
        inspect_get_windows_software_hive(root: string): string;
        /**
         * get the path of the Windows system hive
         *
         * This returns the path to the hive (binary Windows Registry file)
         * corresponding to HKLM\SYSTEM.
         *
         * This call assumes that the guest is Windows and that the guest has a
         * system hive file with the right name. If this is not the case then an
         * error is returned. This call does not check that the hive is a valid
         * Windows Registry hive.
         *
         * You can use guestfs_session_hivex_open() to read or write to the hive.
         *
         * Please read "INSPECTION" in guestfs(3) for more details.
         * @param root
         * @returns the returned string, or NULL on error
         */
        inspect_get_windows_system_hive(root: string): string;
        /**
         * get Windows systemroot of inspected operating system
         *
         * This returns the Windows systemroot of the inspected guest. The
         * systemroot is a directory path such as /WINDOWS.
         *
         * This call assumes that the guest is Windows and that the systemroot
         * could be determined by inspection. If this is not the case then an error
         * is returned.
         *
         * Please read "INSPECTION" in guestfs(3) for more details.
         * @param root
         * @returns the returned string, or NULL on error
         */
        inspect_get_windows_systemroot(root: string): string;
        /**
         * get live flag for install disk
         *
         * This is deprecated and always returns `false`.
         *
         * Please read "INSPECTION" in guestfs(3) for more details.
         * @param root
         * @returns the returned value, or -1 on error
         */
        inspect_is_live(root: string): number;
        /**
         * get multipart flag for install disk
         *
         * This is deprecated and always returns `false`.
         *
         * Please read "INSPECTION" in guestfs(3) for more details.
         * @param root
         * @returns the returned value, or -1 on error
         */
        inspect_is_multipart(root: string): number;
        /**
         * get netinst (network installer) flag for install disk
         *
         * This is deprecated and always returns `false`.
         *
         * Please read "INSPECTION" in guestfs(3) for more details.
         * @param root
         * @returns the returned value, or -1 on error
         */
        inspect_is_netinst(root: string): number;
        /**
         * get list of applications installed in the operating system
         *
         * Return the list of applications installed in the operating system.
         *
         * *Note:* This call works differently from other parts of the inspection
         * API. You have to call guestfs_session_inspect_os(), then
         * guestfs_session_inspect_get_mountpoints(), then mount up the disks,
         * before calling this. Listing applications is a significantly more
         * difficult operation which requires access to the full filesystem. Also
         * note that unlike the other "guestfs_inspect_get_*" calls which are just
         * returning data cached in the libguestfs handle, this call actually reads
         * parts of the mounted filesystems during the call.
         *
         * This returns an empty list if the inspection code was not able to
         * determine the list of applications.
         *
         * The application structure contains the following fields:
         *
         * `app_name`
         * The name of the application. For Linux guests, this is the package
         * name.
         *
         * `app_display_name`
         * The display name of the application, sometimes localized to the
         * install language of the guest operating system.
         *
         * If unavailable this is returned as an empty string "". Callers
         * needing to display something can use `app_name` instead.
         *
         * `app_epoch`
         * For package managers which use epochs, this contains the epoch of
         * the package (an integer). If unavailable, this is returned as `0`.
         *
         * `app_version`
         * The version string of the application or package. If unavailable
         * this is returned as an empty string "".
         *
         * `app_release`
         * The release string of the application or package, for package
         * managers that use this. If unavailable this is returned as an empty
         * string "".
         *
         * `app_install_path`
         * The installation path of the application (on operating systems such
         * as Windows which use installation paths). This path is in the format
         * used by the guest operating system, it is not a libguestfs path.
         *
         * If unavailable this is returned as an empty string "".
         *
         * `app_trans_path`
         * The install path translated into a libguestfs path. If unavailable
         * this is returned as an empty string "".
         *
         * `app_publisher`
         * The name of the publisher of the application, for package managers
         * that use this. If unavailable this is returned as an empty string
         * "".
         *
         * `app_url`
         * The URL (eg. upstream URL) of the application. If unavailable this
         * is returned as an empty string "".
         *
         * `app_source_package`
         * For packaging systems which support this, the name of the source
         * package. If unavailable this is returned as an empty string "".
         *
         * `app_summary`
         * A short (usually one line) description of the application or
         * package. If unavailable this is returned as an empty string "".
         *
         * `app_description`
         * A longer description of the application or package. If unavailable
         * this is returned as an empty string "".
         *
         * Please read "INSPECTION" in guestfs(3) for more details.
         * @param root
         * @returns an array of Application objects, or NULL on error
         */
        inspect_list_applications(root: string): Application[];
        /**
         * get list of applications installed in the operating system
         *
         * Return the list of applications installed in the operating system.
         *
         * *Note:* This call works differently from other parts of the inspection
         * API. You have to call guestfs_session_inspect_os(), then
         * guestfs_session_inspect_get_mountpoints(), then mount up the disks,
         * before calling this. Listing applications is a significantly more
         * difficult operation which requires access to the full filesystem. Also
         * note that unlike the other "guestfs_inspect_get_*" calls which are just
         * returning data cached in the libguestfs handle, this call actually reads
         * parts of the mounted filesystems during the call.
         *
         * This returns an empty list if the inspection code was not able to
         * determine the list of applications.
         *
         * The application structure contains the following fields:
         *
         * `app2`_name
         * The name of the application. For Linux guests, this is the package
         * name.
         *
         * `app2`_display_name
         * The display name of the application, sometimes localized to the
         * install language of the guest operating system.
         *
         * If unavailable this is returned as an empty string "". Callers
         * needing to display something can use `app2`_name instead.
         *
         * `app2`_epoch
         * For package managers which use epochs, this contains the epoch of
         * the package (an integer). If unavailable, this is returned as `0`.
         *
         * `app2`_version
         * The version string of the application or package. If unavailable
         * this is returned as an empty string "".
         *
         * `app2`_release
         * The release string of the application or package, for package
         * managers that use this. If unavailable this is returned as an empty
         * string "".
         *
         * `app2`_arch
         * The architecture string of the application or package, for package
         * managers that use this. If unavailable this is returned as an empty
         * string "".
         *
         * `app2`_install_path
         * The installation path of the application (on operating systems such
         * as Windows which use installation paths). This path is in the format
         * used by the guest operating system, it is not a libguestfs path.
         *
         * If unavailable this is returned as an empty string "".
         *
         * `app2`_trans_path
         * The install path translated into a libguestfs path. If unavailable
         * this is returned as an empty string "".
         *
         * `app2`_publisher
         * The name of the publisher of the application, for package managers
         * that use this. If unavailable this is returned as an empty string
         * "".
         *
         * `app2`_url
         * The URL (eg. upstream URL) of the application. If unavailable this
         * is returned as an empty string "".
         *
         * `app2`_source_package
         * For packaging systems which support this, the name of the source
         * package. If unavailable this is returned as an empty string "".
         *
         * `app2`_summary
         * A short (usually one line) description of the application or
         * package. If unavailable this is returned as an empty string "".
         *
         * `app2`_description
         * A longer description of the application or package. If unavailable
         * this is returned as an empty string "".
         *
         * Please read "INSPECTION" in guestfs(3) for more details.
         * @param root
         * @returns an array of Application2 objects, or NULL on error
         */
        inspect_list_applications2(root: string): Application2[];
        /**
         * inspect disk and return list of operating systems found
         *
         * This function uses other libguestfs functions and certain heuristics to
         * inspect the disk(s) (usually disks belonging to a virtual machine),
         * looking for operating systems.
         *
         * The list returned is empty if no operating systems were found.
         *
         * If one operating system was found, then this returns a list with a
         * single element, which is the name of the root filesystem of this
         * operating system. It is also possible for this function to return a list
         * containing more than one element, indicating a dual-boot or multi-boot
         * virtual machine, with each element being the root filesystem of one of
         * the operating systems.
         *
         * You can pass the root string(s) returned to other
         * "guestfs_inspect_get_*" functions in order to query further information
         * about each operating system, such as the name and version.
         *
         * This function uses other libguestfs features such as
         * guestfs_session_mount_ro() and guestfs_session_umount_all() in order to
         * mount and unmount filesystems and look at the contents. This should be
         * called with no disks currently mounted. The function may also use
         * Augeas, so any existing Augeas handle will be closed.
         *
         * This function cannot decrypt encrypted disks. The caller must do that
         * first (supplying the necessary keys) if the disk is encrypted.
         *
         * Please read "INSPECTION" in guestfs(3) for more details.
         *
         * See also guestfs_session_list_filesystems().
         * @returns an array of returned strings, or NULL on error
         */
        inspect_os(): string[];
        /**
         * cause the daemon to exit (internal use only)
         *
         * This function is used internally when testing the appliance.
         * @param cancellable A GCancellable object
         * @returns true on success, false on error
         */
        internal_exit(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * internal test function - do not use
         *
         * This is an internal test function which is used to test whether the
         * automatically generated bindings can handle every possible parameter
         * type correctly.
         *
         * It echos the contents of each parameter to stdout (by default) or to a
         * file (if guestfs_session_internal_test_set_output() was called).
         *
         * You probably don't want to call this function.
         * @param str
         * @param optstr
         * @param strlist an array of strings
         * @param b
         * @param integer
         * @param integer64
         * @param filein
         * @param fileout
         * @param bufferin an array of binary data
         * @param optargs a GuestfsInternalTest containing optional arguments
         * @param cancellable A GCancellable object
         * @returns true on success, false on error
         */
        internal_test(
            str: string,
            optstr: string | null,
            strlist: string[],
            b: boolean,
            integer: number,
            integer64: number,
            filein: string,
            fileout: string,
            bufferin: Uint8Array | string,
            optargs?: InternalTest | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * internal test function - do not use
         *
         * This is an internal test function which is used to test whether the
         * automatically generated bindings can handle the full range of 63 optargs
         * correctly. (Note that 63 is not an absolute limit and it could be raised
         * by changing the XDR protocol).
         *
         * It echos the contents of each parameter to stdout (by default) or to a
         * file (if guestfs_session_internal_test_set_output() was called).
         *
         * You probably don't want to call this function.
         * @param optargs a GuestfsInternalTest63Optargs containing optional arguments
         * @param cancellable A GCancellable object
         * @returns true on success, false on error
         */
        internal_test_63_optargs(optargs?: InternalTest63Optargs | null, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * internal test function - do not use
         *
         * This is an internal test function which is used to test whether the
         * automatically generated bindings can handle every possible parameter
         * type correctly.
         *
         * It closes the output file previously opened by
         * guestfs_session_internal_test_set_output().
         *
         * You probably don't want to call this function.
         * @returns true on success, false on error
         */
        internal_test_close_output(): boolean;
        /**
         * internal test function - do not use
         *
         * This is an internal test function which is used to test whether the
         * automatically generated bindings can handle no args, some optargs
         * correctly.
         *
         * It echos the contents of each parameter to stdout (by default) or to a
         * file (if guestfs_session_internal_test_set_output() was called).
         *
         * You probably don't want to call this function.
         * @param optargs a GuestfsInternalTestOnlyOptargs containing optional arguments
         * @param cancellable A GCancellable object
         * @returns true on success, false on error
         */
        internal_test_only_optargs(
            optargs?: InternalTestOnlyOptargs | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * internal test function - do not use
         *
         * This is an internal test function which is used to test whether the
         * automatically generated bindings can handle every possible return type
         * correctly.
         *
         * It converts string `val` to the return type.
         *
         * You probably don't want to call this function.
         * @param val
         * @returns the returned value, or -1 on error
         */
        internal_test_rbool(val: string): number;
        /**
         * internal test function - do not use
         *
         * This is an internal test function which is used to test whether the
         * automatically generated bindings can handle every possible return type
         * correctly.
         *
         * This function always returns an error.
         *
         * You probably don't want to call this function.
         * @returns the returned value, or -1 on error
         */
        internal_test_rboolerr(): number;
        /**
         * internal test function - do not use
         *
         * This is an internal test function which is used to test whether the
         * automatically generated bindings can handle every possible return type
         * correctly.
         *
         * It converts string `val` to the return type.
         *
         * You probably don't want to call this function.
         * @param val
         * @returns an array of binary data, or NULL on error
         */
        internal_test_rbufferout(val: string): Uint8Array;
        /**
         * internal test function - do not use
         *
         * This is an internal test function which is used to test whether the
         * automatically generated bindings can handle every possible return type
         * correctly.
         *
         * This function always returns an error.
         *
         * You probably don't want to call this function.
         * @returns an array of binary data, or NULL on error
         */
        internal_test_rbufferouterr(): Uint8Array;
        /**
         * internal test function - do not use
         *
         * This is an internal test function which is used to test whether the
         * automatically generated bindings can handle every possible return type
         * correctly.
         *
         * It converts string `val` to the return type.
         *
         * You probably don't want to call this function.
         * @param val
         * @returns the returned string. Note that NULL does not indicate error
         */
        internal_test_rconstoptstring(val: string): string;
        /**
         * internal test function - do not use
         *
         * This is an internal test function which is used to test whether the
         * automatically generated bindings can handle every possible return type
         * correctly.
         *
         * This function always returns an error.
         *
         * You probably don't want to call this function.
         * @returns the returned string. Note that NULL does not indicate error
         */
        internal_test_rconstoptstringerr(): string;
        /**
         * internal test function - do not use
         *
         * This is an internal test function which is used to test whether the
         * automatically generated bindings can handle every possible return type
         * correctly.
         *
         * It converts string `val` to the return type.
         *
         * You probably don't want to call this function.
         * @param val
         * @returns the returned string, or NULL on error
         */
        internal_test_rconststring(val: string): string;
        /**
         * internal test function - do not use
         *
         * This is an internal test function which is used to test whether the
         * automatically generated bindings can handle every possible return type
         * correctly.
         *
         * This function always returns an error.
         *
         * You probably don't want to call this function.
         * @returns the returned string, or NULL on error
         */
        internal_test_rconststringerr(): string;
        /**
         * internal test function - do not use
         *
         * This is an internal test function which is used to test whether the
         * automatically generated bindings can handle every possible return type
         * correctly.
         *
         * It converts string `val` to the return type.
         *
         * You probably don't want to call this function.
         * @param val
         * @returns a GHashTable of results, or NULL on error
         */
        internal_test_rhashtable(val: string): GLib.HashTable<string, string>;
        /**
         * internal test function - do not use
         *
         * This is an internal test function which is used to test whether the
         * automatically generated bindings can handle every possible return type
         * correctly.
         *
         * This function always returns an error.
         *
         * You probably don't want to call this function.
         * @returns a GHashTable of results, or NULL on error
         */
        internal_test_rhashtableerr(): GLib.HashTable<string, string>;
        /**
         * internal test function - do not use
         *
         * This is an internal test function which is used to test whether the
         * automatically generated bindings can handle every possible return type
         * correctly.
         *
         * It converts string `val` to the return type.
         *
         * You probably don't want to call this function.
         * @param val
         * @returns the returned value, or -1 on error
         */
        internal_test_rint(val: string): number;
        /**
         * internal test function - do not use
         *
         * This is an internal test function which is used to test whether the
         * automatically generated bindings can handle every possible return type
         * correctly.
         *
         * It converts string `val` to the return type.
         *
         * You probably don't want to call this function.
         * @param val
         * @returns the returned value, or -1 on error
         */
        internal_test_rint64(val: string): number;
        /**
         * internal test function - do not use
         *
         * This is an internal test function which is used to test whether the
         * automatically generated bindings can handle every possible return type
         * correctly.
         *
         * This function always returns an error.
         *
         * You probably don't want to call this function.
         * @returns the returned value, or -1 on error
         */
        internal_test_rint64err(): number;
        /**
         * internal test function - do not use
         *
         * This is an internal test function which is used to test whether the
         * automatically generated bindings can handle every possible return type
         * correctly.
         *
         * This function always returns an error.
         *
         * You probably don't want to call this function.
         * @returns the returned value, or -1 on error
         */
        internal_test_rinterr(): number;
        /**
         * internal test function - do not use
         *
         * This is an internal test function which is used to test whether the
         * automatically generated bindings can handle every possible return type
         * correctly.
         *
         * It converts string `val` to the return type.
         *
         * You probably don't want to call this function.
         * @param val
         * @returns the returned string, or NULL on error
         */
        internal_test_rstring(val: string): string;
        /**
         * internal test function - do not use
         *
         * This is an internal test function which is used to test whether the
         * automatically generated bindings can handle every possible return type
         * correctly.
         *
         * This function always returns an error.
         *
         * You probably don't want to call this function.
         * @returns the returned string, or NULL on error
         */
        internal_test_rstringerr(): string;
        /**
         * internal test function - do not use
         *
         * This is an internal test function which is used to test whether the
         * automatically generated bindings can handle every possible return type
         * correctly.
         *
         * It converts string `val` to the return type.
         *
         * You probably don't want to call this function.
         * @param val
         * @returns an array of returned strings, or NULL on error
         */
        internal_test_rstringlist(val: string): string[];
        /**
         * internal test function - do not use
         *
         * This is an internal test function which is used to test whether the
         * automatically generated bindings can handle every possible return type
         * correctly.
         *
         * This function always returns an error.
         *
         * You probably don't want to call this function.
         * @returns an array of returned strings, or NULL on error
         */
        internal_test_rstringlisterr(): string[];
        /**
         * internal test function - do not use
         *
         * This is an internal test function which is used to test whether the
         * automatically generated bindings can handle every possible return type
         * correctly.
         *
         * It converts string `val` to the return type.
         *
         * You probably don't want to call this function.
         * @param val
         * @returns a PV object, or NULL on error
         */
        internal_test_rstruct(val: string): PV;
        /**
         * internal test function - do not use
         *
         * This is an internal test function which is used to test whether the
         * automatically generated bindings can handle every possible return type
         * correctly.
         *
         * This function always returns an error.
         *
         * You probably don't want to call this function.
         * @returns a PV object, or NULL on error
         */
        internal_test_rstructerr(): PV;
        /**
         * internal test function - do not use
         *
         * This is an internal test function which is used to test whether the
         * automatically generated bindings can handle every possible return type
         * correctly.
         *
         * It converts string `val` to the return type.
         *
         * You probably don't want to call this function.
         * @param val
         * @returns an array of PV objects, or NULL on error
         */
        internal_test_rstructlist(val: string): PV[];
        /**
         * internal test function - do not use
         *
         * This is an internal test function which is used to test whether the
         * automatically generated bindings can handle every possible return type
         * correctly.
         *
         * This function always returns an error.
         *
         * You probably don't want to call this function.
         * @returns an array of PV objects, or NULL on error
         */
        internal_test_rstructlisterr(): PV[];
        /**
         * internal test function - do not use
         *
         * This is an internal test function which is used to test whether the
         * automatically generated bindings can handle every possible parameter
         * type correctly.
         *
         * It sets the output file used by guestfs_session_internal_test().
         *
         * You probably don't want to call this function.
         * @param filename
         * @returns true on success, false on error
         */
        internal_test_set_output(filename: string): boolean;
        /**
         * test if block device
         *
         * This returns `true` if and only if there is a block device with the given
         * `path` name.
         *
         * If the optional flag `followsymlinks` is true, then a symlink (or chain
         * of symlinks) that ends with a block device also causes the function to
         * return true.
         *
         * This call only looks at files within the guest filesystem. Libguestfs
         * partitions and block devices (eg. /dev/sda) cannot be used as the `path`
         * parameter of this call.
         *
         * See also guestfs_session_stat().
         * @param path
         * @param optargs a GuestfsIsBlockdev containing optional arguments
         * @returns the returned value, or -1 on error
         */
        is_blockdev(path: string, optargs?: IsBlockdev | null): number;
        /**
         * is busy processing a command
         *
         * This always returns false. This function is deprecated with no
         * replacement. Do not use this function.
         *
         * For more information on states, see guestfs(3).
         * @returns the returned value, or -1 on error
         */
        is_busy(): number;
        /**
         * test if character device
         *
         * This returns `true` if and only if there is a character device with the
         * given `path` name.
         *
         * If the optional flag `followsymlinks` is true, then a symlink (or chain
         * of symlinks) that ends with a chardev also causes the function to return
         * true.
         *
         * See also guestfs_session_stat().
         * @param path
         * @param optargs a GuestfsIsChardev containing optional arguments
         * @returns the returned value, or -1 on error
         */
        is_chardev(path: string, optargs?: IsChardev | null): number;
        /**
         * is in configuration state
         *
         * This returns true iff this handle is being configured (in the `CONFIG`
         * state).
         *
         * For more information on states, see guestfs(3).
         * @returns the returned value, or -1 on error
         */
        is_config(): number;
        /**
         * test if a directory
         *
         * This returns `true` if and only if there is a directory with the given
         * `path` name. Note that it returns false for other objects like files.
         *
         * If the optional flag `followsymlinks` is true, then a symlink (or chain
         * of symlinks) that ends with a directory also causes the function to
         * return true.
         *
         * See also guestfs_session_stat().
         * @param path
         * @param optargs a GuestfsIsDir containing optional arguments
         * @returns the returned value, or -1 on error
         */
        is_dir(path: string, optargs?: IsDir | null): number;
        /**
         * test if FIFO (named pipe)
         *
         * This returns `true` if and only if there is a FIFO (named pipe) with the
         * given `path` name.
         *
         * If the optional flag `followsymlinks` is true, then a symlink (or chain
         * of symlinks) that ends with a FIFO also causes the function to return
         * true.
         *
         * See also guestfs_session_stat().
         * @param path
         * @param optargs a GuestfsIsFifo containing optional arguments
         * @returns the returned value, or -1 on error
         */
        is_fifo(path: string, optargs?: IsFifo | null): number;
        /**
         * test if a regular file
         *
         * This returns `true` if and only if there is a regular file with the given
         * `path` name. Note that it returns false for other objects like
         * directories.
         *
         * If the optional flag `followsymlinks` is true, then a symlink (or chain
         * of symlinks) that ends with a file also causes the function to return
         * true.
         *
         * See also guestfs_session_stat().
         * @param path
         * @param optargs a GuestfsIsFile containing optional arguments
         * @returns the returned value, or -1 on error
         */
        is_file(path: string, optargs?: IsFile | null): number;
        /**
         * is launching subprocess
         *
         * This returns true iff this handle is launching the subprocess (in the
         * `LAUNCHING` state).
         *
         * For more information on states, see guestfs(3).
         * @returns the returned value, or -1 on error
         */
        is_launching(): number;
        /**
         * test if mountable is a logical volume
         *
         * This command tests whether `mountable` is a logical volume, and returns
         * true iff this is the case.
         * @param mountable
         * @returns the returned value, or -1 on error
         */
        is_lv(mountable: string): number;
        /**
         * is ready to accept commands
         *
         * This returns true iff this handle is ready to accept commands (in the
         * `READY` state).
         *
         * For more information on states, see guestfs(3).
         * @returns the returned value, or -1 on error
         */
        is_ready(): number;
        /**
         * test if socket
         *
         * This returns `true` if and only if there is a Unix domain socket with the
         * given `path` name.
         *
         * If the optional flag `followsymlinks` is true, then a symlink (or chain
         * of symlinks) that ends with a socket also causes the function to return
         * true.
         *
         * See also guestfs_session_stat().
         * @param path
         * @param optargs a GuestfsIsSocket containing optional arguments
         * @returns the returned value, or -1 on error
         */
        is_socket(path: string, optargs?: IsSocket | null): number;
        /**
         * test if symbolic link
         *
         * This returns `true` if and only if there is a symbolic link with the
         * given `path` name.
         *
         * See also guestfs_session_stat().
         * @param path
         * @returns the returned value, or -1 on error
         */
        is_symlink(path: string): number;
        /**
         * test if a device is a whole device
         *
         * This returns `true` if and only if `device` refers to a whole block
         * device. That is, not a partition or a logical device.
         * @param device
         * @returns the returned value, or -1 on error
         */
        is_whole_device(device: string): number;
        /**
         * test if a file contains all zero bytes
         *
         * This returns true iff the file exists and the file is empty or it
         * contains all zero bytes.
         * @param path
         * @returns the returned value, or -1 on error
         */
        is_zero(path: string): number;
        /**
         * test if a device contains all zero bytes
         *
         * This returns true iff the device exists and contains all zero bytes.
         *
         * Note that for large devices this can take a long time to run.
         * @param device
         * @returns the returned value, or -1 on error
         */
        is_zero_device(device: string): number;
        /**
         * get ISO information from primary volume descriptor of ISO file
         *
         * This is the same as guestfs_session_isoinfo_device() except that it
         * works for an ISO file located inside some other mounted filesystem. Note
         * that in the common case where you have added an ISO file as a libguestfs
         * device, you would *not* call this. Instead you would call
         * guestfs_session_isoinfo_device().
         * @param isofile
         * @returns a ISOInfo object, or NULL on error
         */
        isoinfo(isofile: string): ISOInfo;
        /**
         * get ISO information from primary volume descriptor of device
         *
         * `device` is an ISO device. This returns a struct of information read from
         * the primary volume descriptor (the ISO equivalent of the superblock) of
         * the device.
         *
         * Usually it is more efficient to use the isoinfo(1) command with the *-d*
         * option on the host to analyze ISO files, instead of going through
         * libguestfs.
         *
         * For information on the primary volume descriptor fields, see <ulink
         * url='https://wiki.osdev.org/ISO_9660#The_Primary_Volume_Descriptor'>
         * http://wiki.osdev.org/ISO_9660#The_Primary_Volume_Descriptor </ulink>
         * @param device
         * @returns a ISOInfo object, or NULL on error
         */
        isoinfo_device(device: string): ISOInfo;
        /**
         * close the systemd journal
         *
         * Close the journal handle.
         *
         * This function depends on the feature "journal".
         * See also guestfs_session_feature_available().
         * @returns true on success, false on error
         */
        journal_close(): boolean;
        /**
         * read the current journal entry
         *
         * Read the current journal entry. This returns all the fields in the
         * journal as a set of "(attrname, attrval)" pairs. The `attrname` is the
         * field name (a string).
         *
         * The `attrval` is the field value (a binary blob, often but not always a
         * string). Please note that `attrval` is a byte array, *not* a
         * \0-terminated C string.
         *
         * The length of data may be truncated to the data threshold (see:
         * guestfs_session_journal_set_data_threshold(),
         * guestfs_session_journal_get_data_threshold()).
         *
         * If you set the data threshold to unlimited (`0`) then this call can read
         * a journal entry of any size, ie. it is not limited by the libguestfs
         * protocol.
         *
         * This function depends on the feature "journal".
         * See also guestfs_session_feature_available().
         * @returns an array of XAttr objects, or NULL on error
         */
        journal_get(): XAttr[];
        /**
         * get the data threshold for reading journal entries
         *
         * Get the current data threshold for reading journal entries. This is a
         * hint to the journal that it may truncate data fields to this size when
         * reading them (note also that it may not truncate them). If this returns
         * `0`, then the threshold is unlimited.
         *
         * See also guestfs_session_journal_set_data_threshold().
         *
         * This function depends on the feature "journal".
         * See also guestfs_session_feature_available().
         * @returns the returned value, or -1 on error
         */
        journal_get_data_threshold(): number;
        /**
         * get the timestamp of the current journal entry
         *
         * Get the realtime (wallclock) timestamp of the current journal entry.
         *
         * This function depends on the feature "journal".
         * See also guestfs_session_feature_available().
         * @returns the returned value, or -1 on error
         */
        journal_get_realtime_usec(): number;
        /**
         * move to the next journal entry
         *
         * Move to the next journal entry. You have to call this at least once
         * after opening the handle before you are able to read data.
         *
         * The returned boolean tells you if there are any more journal records to
         * read. `true` means you can read the next record (eg. using
         * guestfs_session_journal_get()), and `false` means you have reached the
         * end of the journal.
         *
         * This function depends on the feature "journal".
         * See also guestfs_session_feature_available().
         * @returns the returned value, or -1 on error
         */
        journal_next(): number;
        /**
         * open the systemd journal
         *
         * Open the systemd journal located in directory. Any previously opened
         * journal handle is closed.
         *
         * The contents of the journal can be read using
         * guestfs_session_journal_next() and guestfs_session_journal_get().
         *
         * After you have finished using the journal, you should close the handle
         * by calling guestfs_session_journal_close().
         *
         * This function depends on the feature "journal".
         * See also guestfs_session_feature_available().
         * @param directory
         * @returns true on success, false on error
         */
        journal_open(directory: string): boolean;
        /**
         * set the data threshold for reading journal entries
         *
         * Set the data threshold for reading journal entries. This is a hint to
         * the journal that it may truncate data fields to this size when reading
         * them (note also that it may not truncate them). If you set this to `0`,
         * then the threshold is unlimited.
         *
         * See also guestfs_session_journal_get_data_threshold().
         *
         * This function depends on the feature "journal".
         * See also guestfs_session_feature_available().
         * @param threshold
         * @returns true on success, false on error
         */
        journal_set_data_threshold(threshold: number): boolean;
        /**
         * skip forwards or backwards in the journal
         *
         * Skip forwards ("skip &ge; 0") or backwards ("skip &lt; 0") in the
         * journal.
         *
         * The number of entries actually skipped is returned (note
         * "rskip &ge; 0"). If this is not the same as the absolute value of the
         * skip parameter ("|skip|") you passed in then it means you have reached
         * the end or the start of the journal.
         *
         * This function depends on the feature "journal".
         * See also guestfs_session_feature_available().
         * @param skip
         * @returns the returned value, or -1 on error
         */
        journal_skip(skip: number): number;
        /**
         * kill the hypervisor
         *
         * This kills the hypervisor.
         *
         * Do not call this. See: guestfs_session_shutdown() instead.
         * @returns true on success, false on error
         */
        kill_subprocess(): boolean;
        /**
         * launch the backend
         *
         * You should call this after configuring the handle (eg. adding drives)
         * but before performing any actions.
         *
         * Do not call guestfs_session_launch() twice on the same handle. Although
         * it will not give an error (for historical reasons), the precise
         * behaviour when you do this is not well defined. Handles are very cheap
         * to create, so create a new one for each launch.
         * @returns true on success, false on error
         */
        launch(): boolean;
        /**
         * change file owner and group
         *
         * Change the file owner to `owner` and group to `group`. This is like
         * guestfs_session_chown() but if `path` is a symlink then the link itself
         * is changed, not the target.
         *
         * Only numeric uid and gid are supported. If you want to use names, you
         * will need to locate and parse the password file yourself (Augeas support
         * makes this relatively easy).
         * @param owner
         * @param group
         * @param path
         * @returns true on success, false on error
         */
        lchown(owner: number, group: number, path: string): boolean;
        /**
         * scan and create Windows dynamic disk volumes
         *
         * This function scans all block devices looking for Windows dynamic disk
         * volumes and partitions, and creates devices for any that were found.
         *
         * Call guestfs_session_list_ldm_volumes() and
         * guestfs_session_list_ldm_partitions() to return all devices.
         *
         * Note that you don't normally need to call this explicitly, since it is
         * done automatically at guestfs_session_launch() time.
         *
         * This function depends on the feature "ldm".
         * See also guestfs_session_feature_available().
         * @returns true on success, false on error
         */
        ldmtool_create_all(): boolean;
        /**
         * return the disks in a Windows dynamic disk group
         *
         * Return the disks in a Windows dynamic disk group. The `diskgroup`
         * parameter should be the GUID of a disk group, one element from the list
         * returned by guestfs_session_ldmtool_scan().
         *
         * This function depends on the feature "ldm".
         * See also guestfs_session_feature_available().
         * @param diskgroup
         * @returns an array of returned strings, or NULL on error
         */
        ldmtool_diskgroup_disks(diskgroup: string): string[];
        /**
         * return the name of a Windows dynamic disk group
         *
         * Return the name of a Windows dynamic disk group. The `diskgroup`
         * parameter should be the GUID of a disk group, one element from the list
         * returned by guestfs_session_ldmtool_scan().
         *
         * This function depends on the feature "ldm".
         * See also guestfs_session_feature_available().
         * @param diskgroup
         * @returns the returned string, or NULL on error
         */
        ldmtool_diskgroup_name(diskgroup: string): string;
        /**
         * return the volumes in a Windows dynamic disk group
         *
         * Return the volumes in a Windows dynamic disk group. The `diskgroup`
         * parameter should be the GUID of a disk group, one element from the list
         * returned by guestfs_session_ldmtool_scan().
         *
         * This function depends on the feature "ldm".
         * See also guestfs_session_feature_available().
         * @param diskgroup
         * @returns an array of returned strings, or NULL on error
         */
        ldmtool_diskgroup_volumes(diskgroup: string): string[];
        /**
         * remove all Windows dynamic disk volumes
         *
         * This is essentially the opposite of
         * guestfs_session_ldmtool_create_all(). It removes the device mapper
         * mappings for all Windows dynamic disk volumes
         *
         * This function depends on the feature "ldm".
         * See also guestfs_session_feature_available().
         * @returns true on success, false on error
         */
        ldmtool_remove_all(): boolean;
        /**
         * scan for Windows dynamic disks
         *
         * This function scans for Windows dynamic disks. It returns a list of
         * identifiers (GUIDs) for all disk groups that were found. These
         * identifiers can be passed to other "guestfs_ldmtool_*" functions.
         *
         * This function scans all block devices. To scan a subset of block
         * devices, call guestfs_session_ldmtool_scan_devices() instead.
         *
         * This function depends on the feature "ldm".
         * See also guestfs_session_feature_available().
         * @returns an array of returned strings, or NULL on error
         */
        ldmtool_scan(): string[];
        /**
         * scan for Windows dynamic disks
         *
         * This function scans for Windows dynamic disks. It returns a list of
         * identifiers (GUIDs) for all disk groups that were found. These
         * identifiers can be passed to other "guestfs_ldmtool_*" functions.
         *
         * The parameter `devices` is a list of block devices which are scanned. If
         * this list is empty, all block devices are scanned.
         *
         * This function depends on the feature "ldm".
         * See also guestfs_session_feature_available().
         * @param devices an array of strings
         * @returns an array of returned strings, or NULL on error
         */
        ldmtool_scan_devices(devices: string[]): string[];
        /**
         * return the hint field of a Windows dynamic disk volume
         *
         * Return the hint field of the volume named `volume` in the disk group with
         * GUID `diskgroup`. This may not be defined, in which case the empty string
         * is returned. The hint field is often, though not always, the name of a
         * Windows drive, eg. "E:".
         *
         * This function depends on the feature "ldm".
         * See also guestfs_session_feature_available().
         * @param diskgroup
         * @param volume
         * @returns the returned string, or NULL on error
         */
        ldmtool_volume_hint(diskgroup: string, volume: string): string;
        /**
         * return the partitions in a Windows dynamic disk volume
         *
         * Return the list of partitions in the volume named `volume` in the disk
         * group with GUID `diskgroup`.
         *
         * This function depends on the feature "ldm".
         * See also guestfs_session_feature_available().
         * @param diskgroup
         * @param volume
         * @returns an array of returned strings, or NULL on error
         */
        ldmtool_volume_partitions(diskgroup: string, volume: string): string[];
        /**
         * return the type of a Windows dynamic disk volume
         *
         * Return the type of the volume named `volume` in the disk group with GUID
         * `diskgroup`.
         *
         * Possible volume types that can be returned here include: `simple,`
         * `spanned,` `striped,` `mirrored,` `raid5`. Other types may also be returned.
         *
         * This function depends on the feature "ldm".
         * See also guestfs_session_feature_available().
         * @param diskgroup
         * @param volume
         * @returns the returned string, or NULL on error
         */
        ldmtool_volume_type(diskgroup: string, volume: string): string;
        /**
         * get a single extended attribute
         *
         * Get a single extended attribute from file `path` named `name`. If `path` is
         * a symlink, then this call returns an extended attribute from the
         * symlink.
         *
         * Normally it is better to get all extended attributes from a file in one
         * go by calling guestfs_session_getxattrs(). However some Linux filesystem
         * implementations are buggy and do not provide a way to list out
         * attributes. For these filesystems (notably ntfs-3g) you have to know the
         * names of the extended attributes you want in advance and call this
         * function.
         *
         * Extended attribute values are blobs of binary data. If there is no
         * extended attribute named `name,` this returns an error.
         *
         * See also: guestfs_session_lgetxattrs(), guestfs_session_getxattr(),
         * attr(5).
         *
         * This function depends on the feature "linuxxattrs".
         * See also guestfs_session_feature_available().
         * @param path
         * @param name
         * @returns an array of binary data, or NULL on error
         */
        lgetxattr(path: string, name: string): Uint8Array;
        /**
         * list extended attributes of a file or directory
         *
         * This is the same as guestfs_session_getxattrs(), but if `path` is a
         * symbolic link, then it returns the extended attributes of the link
         * itself.
         *
         * This function depends on the feature "linuxxattrs".
         * See also guestfs_session_feature_available().
         * @param path
         * @returns an array of XAttr objects, or NULL on error
         */
        lgetxattrs(path: string): XAttr[];
        /**
         * list 9p filesystems
         *
         * This call does nothing and returns an error.
         * @returns an array of returned strings, or NULL on error
         */
        list_9p(): string[];
        /**
         * list the block devices
         *
         * List all the block devices.
         *
         * The full block device names are returned, eg. /dev/sda.
         *
         * See also guestfs_session_list_filesystems().
         * @returns an array of returned strings, or NULL on error
         */
        list_devices(): string[];
        /**
         * mapping of disk labels to devices
         *
         * If you add drives using the optional `label` parameter of
         * guestfs_session_add_drive_opts(), you can use this call to map between
         * disk labels, and raw block device and partition names (like /dev/sda and
         * /dev/sda1).
         *
         * This returns a hashtable, where keys are the disk labels (*without* the
         * /dev/disk/guestfs prefix), and the values are the full raw block device
         * and partition names (eg. /dev/sda and /dev/sda1).
         * @returns a GHashTable of results, or NULL on error
         */
        list_disk_labels(): GLib.HashTable<string, string>;
        /**
         * list device mapper devices
         *
         * List all device mapper devices.
         *
         * The returned list contains /dev/mapper/* devices, eg. ones created by a
         * previous call to guestfs_session_luks_open().
         *
         * Device mapper devices which correspond to logical volumes are *not*
         * returned in this list. Call guestfs_session_lvs() if you want to list
         * logical volumes.
         * @returns an array of returned strings, or NULL on error
         */
        list_dm_devices(): string[];
        /**
         * list filesystems
         *
         * This inspection command looks for filesystems on partitions, block
         * devices and logical volumes, returning a list of `mountables` containing
         * filesystems and their type.
         *
         * The return value is a hash, where the keys are the devices containing
         * filesystems, and the values are the filesystem types. For example:
         *
         * <![CDATA["/dev/sda1" => "ntfs"]]>
         *
         * <![CDATA["/dev/sda2" => "ext2"]]>
         *
         * <![CDATA["/dev/vg_guest/lv_root" => "ext4"]]>
         *
         * <![CDATA["/dev/vg_guest/lv_swap" => "swap"]]>
         *
         * The key is not necessarily a block device. It may also be an opaque
         * ‘mountable’ string which can be passed to guestfs_session_mount().
         *
         * The value can have the special value "unknown", meaning the content of
         * the device is undetermined or empty. "swap" means a Linux swap
         * partition.
         *
         * In libguestfs &le; 1.36 this command ran other libguestfs commands,
         * which might have included guestfs_session_mount() and
         * guestfs_session_umount(), and therefore you had to use this soon after
         * launch and only when nothing else was mounted. This restriction is
         * removed in libguestfs &ge; 1.38.
         *
         * Not all of the filesystems returned will be mountable. In particular,
         * swap partitions are returned in the list. Also this command does not
         * check that each filesystem found is valid and mountable, and some
         * filesystems might be mountable but require special options. Filesystems
         * may not all belong to a single logical operating system (use
         * guestfs_session_inspect_os() to look for OSes).
         * @returns a GHashTable of results, or NULL on error
         */
        list_filesystems(): GLib.HashTable<string, string>;
        /**
         * list all Windows dynamic disk partitions
         *
         * This function returns all Windows dynamic disk partitions that were
         * found at launch time. It returns a list of device names.
         *
         * This function depends on the feature "ldm".
         * See also guestfs_session_feature_available().
         * @returns an array of returned strings, or NULL on error
         */
        list_ldm_partitions(): string[];
        /**
         * list all Windows dynamic disk volumes
         *
         * This function returns all Windows dynamic disk volumes that were found
         * at launch time. It returns a list of device names.
         *
         * This function depends on the feature "ldm".
         * See also guestfs_session_feature_available().
         * @returns an array of returned strings, or NULL on error
         */
        list_ldm_volumes(): string[];
        /**
         * list Linux md (RAID) devices
         *
         * List all Linux md devices.
         * @returns an array of returned strings, or NULL on error
         */
        list_md_devices(): string[];
        /**
         * list the partitions
         *
         * List all the partitions detected on all block devices.
         *
         * The full partition device names are returned, eg. /dev/sda1
         *
         * This does not return logical volumes. For that you will need to call
         * guestfs_session_lvs().
         *
         * See also guestfs_session_list_filesystems().
         * @returns an array of returned strings, or NULL on error
         */
        list_partitions(): string[];
        /**
         * list the files in a directory (long format)
         *
         * List the files in directory (relative to the root directory, there is no
         * cwd) in the format of "ls -la".
         *
         * This command is mostly useful for interactive sessions. It is *not*
         * intended that you try to parse the output string.
         * @param directory
         * @returns the returned string, or NULL on error
         */
        ll(directory: string): string;
        /**
         * list the files in a directory (long format with SELinux contexts)
         *
         * List the files in directory in the format of "ls -laZ".
         *
         * This command is mostly useful for interactive sessions. It is *not*
         * intended that you try to parse the output string.
         * @param directory
         * @returns the returned string, or NULL on error
         */
        llz(directory: string): string;
        /**
         * create a hard link
         *
         * This command creates a hard link.
         * @param target
         * @param linkname
         * @returns true on success, false on error
         */
        ln(target: string, linkname: string): boolean;
        /**
         * create a hard link
         *
         * This command creates a hard link, removing the link `linkname` if it
         * exists already.
         * @param target
         * @param linkname
         * @returns true on success, false on error
         */
        ln_f(target: string, linkname: string): boolean;
        /**
         * create a symbolic link
         *
         * This command creates a symbolic link using the "ln -s" command.
         * @param target
         * @param linkname
         * @returns true on success, false on error
         */
        ln_s(target: string, linkname: string): boolean;
        /**
         * create a symbolic link
         *
         * This command creates a symbolic link using the "ln -sf" command, The
         * *-f* option removes the link (`linkname)` if it exists already.
         * @param target
         * @param linkname
         * @returns true on success, false on error
         */
        ln_sf(target: string, linkname: string): boolean;
        /**
         * remove extended attribute of a file or directory
         *
         * This is the same as guestfs_session_removexattr(), but if `path` is a
         * symbolic link, then it removes an extended attribute of the link itself.
         *
         * This function depends on the feature "linuxxattrs".
         * See also guestfs_session_feature_available().
         * @param xattr
         * @param path
         * @returns true on success, false on error
         */
        lremovexattr(xattr: string, path: string): boolean;
        /**
         * list the files in a directory
         *
         * List the files in directory (relative to the root directory, there is no
         * cwd). The "." and ".." entries are not returned, but hidden files are
         * shown.
         * @param directory
         * @returns an array of returned strings, or NULL on error
         */
        ls(directory: string): string[];
        /**
         * get list of files in a directory
         *
         * This specialized command is used to get a listing of the filenames in
         * the directory `dir`. The list of filenames is written to the local file
         * filenames (on the host).
         *
         * In the output file, the filenames are separated by "\0" characters.
         *
         * "." and ".." are not returned. The filenames are not sorted.
         * @param dir
         * @param filenames
         * @returns true on success, false on error
         */
        ls0(dir: string, filenames: string): boolean;
        /**
         * set extended attribute of a file or directory
         *
         * This is the same as guestfs_session_setxattr(), but if `path` is a
         * symbolic link, then it sets an extended attribute of the link itself.
         *
         * This function depends on the feature "linuxxattrs".
         * See also guestfs_session_feature_available().
         * @param xattr
         * @param val
         * @param vallen
         * @param path
         * @returns true on success, false on error
         */
        lsetxattr(xattr: string, val: string, vallen: number, path: string): boolean;
        /**
         * get file information for a symbolic link
         *
         * Returns file information for the given `path`.
         *
         * This is the same as guestfs_session_stat() except that if `path` is a
         * symbolic link, then the link is stat-ed, not the file it refers to.
         *
         * This is the same as the lstat(2) system call.
         * @param path
         * @returns a Stat object, or NULL on error
         */
        lstat(path: string): Stat;
        /**
         * lstat on multiple files
         *
         * This call allows you to perform the guestfs_session_lstat() operation on
         * multiple files, where all files are in the directory `path`. `names` is
         * the list of files from this directory.
         *
         * On return you get a list of stat structs, with a one-to-one
         * correspondence to the `names` list. If any name did not exist or could
         * not be lstat'd, then the `st_ino` field of that structure is set to `-1`.
         *
         * This call is intended for programs that want to efficiently list a
         * directory contents without making many round-trips. See also
         * guestfs_session_lxattrlist() for a similarly efficient call for getting
         * extended attributes.
         * @param path
         * @param names an array of strings
         * @returns an array of Stat objects, or NULL on error
         */
        lstatlist(path: string, names: string[]): Stat[];
        /**
         * get file information for a symbolic link
         *
         * Returns file information for the given `path`.
         *
         * This is the same as guestfs_session_statns() except that if `path` is a
         * symbolic link, then the link is stat-ed, not the file it refers to.
         *
         * This is the same as the lstat(2) system call.
         * @param path
         * @returns a StatNS object, or NULL on error
         */
        lstatns(path: string): StatNS;
        /**
         * lstat on multiple files
         *
         * This call allows you to perform the guestfs_session_lstatns() operation
         * on multiple files, where all files are in the directory `path`. `names` is
         * the list of files from this directory.
         *
         * On return you get a list of stat structs, with a one-to-one
         * correspondence to the `names` list. If any name did not exist or could
         * not be lstat'd, then the `st_ino` field of that structure is set to `-1`.
         *
         * This call is intended for programs that want to efficiently list a
         * directory contents without making many round-trips. See also
         * guestfs_session_lxattrlist() for a similarly efficient call for getting
         * extended attributes.
         * @param path
         * @param names an array of strings
         * @returns an array of StatNS objects, or NULL on error
         */
        lstatnslist(path: string, names: string[]): StatNS[];
        /**
         * add a key on a LUKS encrypted device
         *
         * This command adds a new key on LUKS device `device`. `key` is any existing
         * key, and is used to access the device. `newkey` is the new key to add.
         * `keyslot` is the key slot that will be replaced.
         *
         * Note that if `keyslot` already contains a key, then this command will
         * fail. You have to use guestfs_session_luks_kill_slot() first to remove
         * that key.
         *
         * This function depends on the feature "luks".
         * See also guestfs_session_feature_available().
         * @param device
         * @param key
         * @param newkey
         * @param keyslot
         * @returns true on success, false on error
         */
        luks_add_key(device: string, key: string, newkey: string, keyslot: number): boolean;
        /**
         * close a LUKS device
         *
         * This closes a LUKS device that was created earlier by
         * guestfs_session_luks_open() or guestfs_session_luks_open_ro(). The
         * `device` parameter must be the name of the LUKS mapping device (ie.
         * /dev/mapper/mapname) and *not* the name of the underlying block device.
         *
         * This function depends on the feature "luks".
         * See also guestfs_session_feature_available().
         * @param device
         * @returns true on success, false on error
         */
        luks_close(device: string): boolean;
        /**
         * format a block device as a LUKS encrypted device
         *
         * This command erases existing data on `device` and formats the device as a
         * LUKS encrypted device. `key` is the initial key, which is added to key
         * slot `keyslot`. (LUKS supports 8 key slots, numbered 0-7).
         *
         * This function depends on the feature "luks".
         * See also guestfs_session_feature_available().
         * @param device
         * @param key
         * @param keyslot
         * @returns true on success, false on error
         */
        luks_format(device: string, key: string, keyslot: number): boolean;
        /**
         * format a block device as a LUKS encrypted device
         *
         * This command is the same as guestfs_session_luks_format() but it also
         * allows you to set the `cipher` used.
         *
         * This function depends on the feature "luks".
         * See also guestfs_session_feature_available().
         * @param device
         * @param key
         * @param keyslot
         * @param cipher
         * @returns true on success, false on error
         */
        luks_format_cipher(device: string, key: string, keyslot: number, cipher: string): boolean;
        /**
         * remove a key from a LUKS encrypted device
         *
         * This command deletes the key in key slot `keyslot` from the encrypted
         * LUKS device `device`. `key` must be one of the *other* keys.
         *
         * This function depends on the feature "luks".
         * See also guestfs_session_feature_available().
         * @param device
         * @param key
         * @param keyslot
         * @returns true on success, false on error
         */
        luks_kill_slot(device: string, key: string, keyslot: number): boolean;
        /**
         * open a LUKS-encrypted block device
         *
         * This command opens a block device which has been encrypted according to
         * the Linux Unified Key Setup (LUKS) standard.
         *
         * `device` is the encrypted block device or partition.
         *
         * The caller must supply one of the keys associated with the LUKS block
         * device, in the `key` parameter.
         *
         * This creates a new block device called /dev/mapper/mapname. Reads and
         * writes to this block device are decrypted from and encrypted to the
         * underlying `device` respectively.
         *
         * If this block device contains LVM volume groups, then calling
         * guestfs_session_lvm_scan() with the `activate` parameter `true` will make
         * them visible.
         *
         * Use guestfs_session_list_dm_devices() to list all device mapper devices.
         *
         * This function depends on the feature "luks".
         * See also guestfs_session_feature_available().
         * @param device
         * @param key
         * @param mapname
         * @returns true on success, false on error
         */
        luks_open(device: string, key: string, mapname: string): boolean;
        /**
         * open a LUKS-encrypted block device read-only
         *
         * This is the same as guestfs_session_luks_open() except that a read-only
         * mapping is created.
         *
         * This function depends on the feature "luks".
         * See also guestfs_session_feature_available().
         * @param device
         * @param key
         * @param mapname
         * @returns true on success, false on error
         */
        luks_open_ro(device: string, key: string, mapname: string): boolean;
        /**
         * get the UUID of a LUKS device
         *
         * This returns the UUID of the LUKS device `device`.
         *
         * This function depends on the feature "luks".
         * See also guestfs_session_feature_available().
         * @param device
         * @returns the returned string, or NULL on error
         */
        luks_uuid(device: string): string;
        /**
         * create an LVM logical volume
         *
         * This creates an LVM logical volume called `logvol` on the volume group
         * `volgroup,` with `size` megabytes.
         *
         * This function depends on the feature "lvm2".
         * See also guestfs_session_feature_available().
         * @param logvol
         * @param volgroup
         * @param mbytes
         * @returns true on success, false on error
         */
        lvcreate(logvol: string, volgroup: string, mbytes: number): boolean;
        /**
         * create an LVM logical volume in % remaining free space
         *
         * Create an LVM logical volume called /dev/volgroup/logvol, using
         * approximately `percent` % of the free space remaining in the volume
         * group. Most usefully, when `percent` is `1`00 this will create the largest
         * possible LV.
         *
         * This function depends on the feature "lvm2".
         * See also guestfs_session_feature_available().
         * @param logvol
         * @param volgroup
         * @param percent
         * @returns true on success, false on error
         */
        lvcreate_free(logvol: string, volgroup: string, percent: number): boolean;
        /**
         * get canonical name of an LV
         *
         * This converts alternative naming schemes for LVs that you might find to
         * the canonical name. For example, /dev/mapper/VG-LV is converted to
         * /dev/VG/LV.
         *
         * This command returns an error if the `lvname` parameter does not refer to
         * a logical volume. In this case errno will be set to `EINVAL`.
         *
         * See also guestfs_session_is_lv(),
         * guestfs_session_canonical_device_name().
         * @param lvname
         * @returns the returned string, or NULL on error
         */
        lvm_canonical_lv_name(lvname: string): string;
        /**
         * clear LVM device filter
         *
         * This undoes the effect of guestfs_session_lvm_set_filter(). LVM will be
         * able to see every block device.
         *
         * This command also clears the LVM cache and performs a volume group scan.
         * @returns true on success, false on error
         */
        lvm_clear_filter(): boolean;
        /**
         * remove all LVM LVs, VGs and PVs
         *
         * This command removes all LVM logical volumes, volume groups and physical
         * volumes.
         *
         * This function depends on the feature "lvm2".
         * See also guestfs_session_feature_available().
         * @returns true on success, false on error
         */
        lvm_remove_all(): boolean;
        /**
         * scan for LVM physical volumes, volume groups and logical volumes
         *
         * This scans all block devices and rebuilds the list of LVM physical
         * volumes, volume groups and logical volumes.
         *
         * If the `activate` parameter is `true` then newly found volume groups and
         * logical volumes are activated, meaning the LV /dev/VG/LV devices become
         * visible.
         *
         * When a libguestfs handle is launched it scans for existing devices, so
         * you do not normally need to use this API. However it is useful when you
         * have added a new device or deleted an existing device (such as when the
         * guestfs_session_luks_open() API is used).
         * @param activate
         * @returns true on success, false on error
         */
        lvm_scan(activate: boolean): boolean;
        /**
         * set LVM device filter
         *
         * This sets the LVM device filter so that LVM will only be able to "see"
         * the block devices in the list `devices,` and will ignore all other
         * attached block devices.
         *
         * Where disk image(s) contain duplicate PVs or VGs, this command is useful
         * to get LVM to ignore the duplicates, otherwise LVM can get confused.
         * Note also there are two types of duplication possible: either cloned
         * PVs/VGs which have identical UUIDs; or VGs that are not cloned but just
         * happen to have the same name. In normal operation you cannot create this
         * situation, but you can do it outside LVM, eg. by cloning disk images or
         * by bit twiddling inside the LVM metadata.
         *
         * This command also clears the LVM cache and performs a volume group scan.
         *
         * You can filter whole block devices or individual partitions.
         *
         * You cannot use this if any VG is currently in use (eg. contains a
         * mounted filesystem), even if you are not filtering out that VG.
         *
         * This function depends on the feature "lvm2".
         * See also guestfs_session_feature_available().
         * @param devices an array of strings
         * @returns true on success, false on error
         */
        lvm_set_filter(devices: string[]): boolean;
        /**
         * remove an LVM logical volume
         *
         * Remove an LVM logical volume `device,` where `device` is the path to the
         * LV, such as /dev/VG/LV.
         *
         * You can also remove all LVs in a volume group by specifying the VG name,
         * /dev/VG.
         *
         * This function depends on the feature "lvm2".
         * See also guestfs_session_feature_available().
         * @param device
         * @returns true on success, false on error
         */
        lvremove(device: string): boolean;
        /**
         * rename an LVM logical volume
         *
         * Rename a logical volume `logvol` with the new name `newlogvol`.
         * @param logvol
         * @param newlogvol
         * @returns true on success, false on error
         */
        lvrename(logvol: string, newlogvol: string): boolean;
        /**
         * resize an LVM logical volume
         *
         * This resizes (expands or shrinks) an existing LVM logical volume to
         * `mbytes`. When reducing, data in the reduced part is lost.
         *
         * This function depends on the feature "lvm2".
         * See also guestfs_session_feature_available().
         * @param device
         * @param mbytes
         * @returns true on success, false on error
         */
        lvresize(device: string, mbytes: number): boolean;
        /**
         * expand an LV to fill free space
         *
         * This expands an existing logical volume `lv` so that it fills `pc` % of
         * the remaining free space in the volume group. Commonly you would call
         * this with pc = 100 which expands the logical volume as much as possible,
         * using all remaining free space in the volume group.
         *
         * This function depends on the feature "lvm2".
         * See also guestfs_session_feature_available().
         * @param lv
         * @param percent
         * @returns true on success, false on error
         */
        lvresize_free(lv: string, percent: number): boolean;
        /**
         * list the LVM logical volumes (LVs)
         *
         * List all the logical volumes detected. This is the equivalent of the
         * lvs(8) command.
         *
         * This returns a list of the logical volume device names (eg.
         * /dev/VolGroup00/LogVol00).
         *
         * See also guestfs_session_lvs_full(), guestfs_session_list_filesystems().
         *
         * This function depends on the feature "lvm2".
         * See also guestfs_session_feature_available().
         * @returns an array of returned strings, or NULL on error
         */
        lvs(): string[];
        /**
         * list the LVM logical volumes (LVs)
         *
         * List all the logical volumes detected. This is the equivalent of the
         * lvs(8) command. The "full" version includes all fields.
         *
         * This function depends on the feature "lvm2".
         * See also guestfs_session_feature_available().
         * @returns an array of LV objects, or NULL on error
         */
        lvs_full(): LV[];
        /**
         * get the UUID of a logical volume
         *
         * This command returns the UUID of the LVM LV `device`.
         * @param device
         * @returns the returned string, or NULL on error
         */
        lvuuid(device: string): string;
        /**
         * lgetxattr on multiple files
         *
         * This call allows you to get the extended attributes of multiple files,
         * where all files are in the directory `path`. `names` is the list of files
         * from this directory.
         *
         * On return you get a flat list of xattr structs which must be interpreted
         * sequentially. The first xattr struct always has a zero-length `attrname`.
         * `attrval` in this struct is zero-length to indicate there was an error
         * doing guestfs_session_lgetxattr() for this file, *or* is a C string
         * which is a decimal number (the number of following attributes for this
         * file, which could be "0"). Then after the first xattr struct are the
         * zero or more attributes for the first named file. This repeats for the
         * second and subsequent files.
         *
         * This call is intended for programs that want to efficiently list a
         * directory contents without making many round-trips. See also
         * guestfs_session_lstatlist() for a similarly efficient call for getting
         * standard stats.
         *
         * This function depends on the feature "linuxxattrs".
         * See also guestfs_session_feature_available().
         * @param path
         * @param names an array of strings
         * @returns an array of XAttr objects, or NULL on error
         */
        lxattrlist(path: string, names: string[]): XAttr[];
        /**
         * maximum number of disks that may be added
         *
         * Return the maximum number of disks that may be added to a handle (eg. by
         * guestfs_session_add_drive_opts() and similar calls).
         *
         * This function was added in libguestfs 1.19.7. In previous versions of
         * libguestfs the limit was 25.
         *
         * See "MAXIMUM NUMBER OF DISKS" in guestfs(3) for additional information
         * on this topic.
         * @returns the returned value, or -1 on error
         */
        max_disks(): number;
        /**
         * create a Linux md (RAID) device
         *
         * Create a Linux md (RAID) device named `name` on the devices in the list
         * `devices`.
         *
         * The optional parameters are:
         *
         * `missingbitmap`
         * A bitmap of missing devices. If a bit is set it means that a missing
         * device is added to the array. The least significant bit corresponds
         * to the first device in the array.
         *
         * As examples:
         *
         * If "devices = ["/dev/sda"]" and "missingbitmap = 0x1" then the
         * resulting array would be "[&lt;missing&gt;, "/dev/sda"]".
         *
         * If "devices = ["/dev/sda"]" and "missingbitmap = 0x2" then the
         * resulting array would be "["/dev/sda", &lt;missing&gt;]".
         *
         * This defaults to `0` (no missing devices).
         *
         * The length of `devices` + the number of bits set in `missingbitmap`
         * must equal `nrdevices` + `spare`.
         *
         * `nrdevices`
         * The number of active RAID devices.
         *
         * If not set, this defaults to the length of `devices` plus the number
         * of bits set in `missingbitmap`.
         *
         * `spare`
         * The number of spare devices.
         *
         * If not set, this defaults to `0`.
         *
         * `chunk`
         * The chunk size in bytes.
         *
         * The `chunk` parameter does not make sense, and should not be
         * specified, when `level` is `raid1` (which is the default; see below).
         *
         * `level`
         * The RAID level, which can be one of: `linear,` `raid0`, `0`, `stripe,`
         * `raid1`, `1`, `mirror,` `raid4`, `4`, `raid5`, `5`, `raid6`, `6`, `raid1`0,
         * `1`0. Some of these are synonymous, and more levels may be added in
         * future.
         *
         * If not set, this defaults to `raid1`.
         *
         * This function depends on the feature "mdadm".
         * See also guestfs_session_feature_available().
         * @param name
         * @param devices an array of strings
         * @param optargs a GuestfsMDCreate containing optional arguments
         * @returns true on success, false on error
         */
        md_create(name: string, devices: string[], optargs?: MDCreate | null): boolean;
        /**
         * obtain metadata for an MD device
         *
         * This command exposes the output of "mdadm -DY &lt;md&gt;". The following
         * fields are usually present in the returned hash. Other fields may also
         * be present.
         *
         * `level`
         * The raid level of the MD device.
         *
         * `devices`
         * The number of underlying devices in the MD device.
         *
         * `metadata`
         * The metadata version used.
         *
         * `uuid`
         * The UUID of the MD device.
         *
         * `name`
         * The name of the MD device.
         *
         * This function depends on the feature "mdadm".
         * See also guestfs_session_feature_available().
         * @param md
         * @returns a GHashTable of results, or NULL on error
         */
        md_detail(md: string): GLib.HashTable<string, string>;
        /**
         * get underlying devices from an MD device
         *
         * This call returns a list of the underlying devices which make up the
         * single software RAID array device `md`.
         *
         * To get a list of software RAID devices, call
         * guestfs_session_list_md_devices().
         *
         * Each structure returned corresponds to one device along with additional
         * status information:
         *
         * `mdstat_device`
         * The name of the underlying device.
         *
         * `mdstat_index`
         * The index of this device within the array.
         *
         * `mdstat_flags`
         * Flags associated with this device. This is a string containing (in
         * no specific order) zero or more of the following flags:
         *
         * `W`  write-mostly
         *
         * `F`  device is faulty
         *
         * `S`  device is a RAID spare
         *
         * `R`  replacement
         *
         * This function depends on the feature "mdadm".
         * See also guestfs_session_feature_available().
         * @param md
         * @returns an array of MDStat objects, or NULL on error
         */
        md_stat(md: string): MDStat[];
        /**
         * stop a Linux md (RAID) device
         *
         * This command deactivates the MD array named `md`. The device is stopped,
         * but it is not destroyed or zeroed.
         *
         * This function depends on the feature "mdadm".
         * See also guestfs_session_feature_available().
         * @param md
         * @returns true on success, false on error
         */
        md_stop(md: string): boolean;
        /**
         * create a directory
         *
         * Create a directory named `path`.
         * @param path
         * @returns true on success, false on error
         */
        mkdir(path: string): boolean;
        /**
         * create a directory with a particular mode
         *
         * This command creates a directory, setting the initial permissions of the
         * directory to `mode`.
         *
         * For common Linux filesystems, the actual mode which is set will be "mode
         * & ~umask & 01777". Non-native-Linux filesystems may interpret the mode
         * in other ways.
         *
         * See also guestfs_session_mkdir(), guestfs_session_umask()
         * @param path
         * @param mode
         * @returns true on success, false on error
         */
        mkdir_mode(path: string, mode: number): boolean;
        /**
         * create a directory and parents
         *
         * Create a directory named `path,` creating any parent directories as
         * necessary. This is like the "mkdir -p" shell command.
         * @param path
         * @returns true on success, false on error
         */
        mkdir_p(path: string): boolean;
        /**
         * create a temporary directory
         *
         * This command creates a temporary directory. The `tmpl` parameter should
         * be a full pathname for the temporary directory name with the final six
         * characters being "XXXXXX".
         *
         * For example: "/tmp/myprogXXXXXX" or "/Temp/myprogXXXXXX", the second one
         * being suitable for Windows filesystems.
         *
         * The name of the temporary directory that was created is returned.
         *
         * The temporary directory is created with mode 0700 and is owned by root.
         *
         * The caller is responsible for deleting the temporary directory and its
         * contents after use.
         *
         * See also: mkdtemp(3)
         * @param tmpl
         * @returns the returned string, or NULL on error
         */
        mkdtemp(tmpl: string): string;
        /**
         * create an ext2/ext3/ext4 filesystem on device
         *
         * `mke2`fs is used to create an ext2, ext3, or ext4 filesystem on `device`.
         *
         * The optional `blockscount` is the size of the filesystem in blocks. If
         * omitted it defaults to the size of `device`. Note if the filesystem is
         * too small to contain a journal, `mke2`fs will silently create an ext2
         * filesystem instead.
         * @param device
         * @param optargs a GuestfsMke2fs containing optional arguments
         * @returns true on success, false on error
         */
        mke2fs(device: string, optargs?: Mke2fs | null): boolean;
        /**
         * make ext2/3/4 filesystem with external journal
         *
         * This creates an ext2/3/4 filesystem on `device` with an external journal
         * on `journal`. It is equivalent to the command:
         *
         * <![CDATA[mke2fs -t fstype -b blocksize -J device=<journal> <device>]]>
         *
         * See also guestfs_session_mke2journal().
         * @param fstype
         * @param blocksize
         * @param device
         * @param journal
         * @returns true on success, false on error
         */
        mke2fs_J(fstype: string, blocksize: number, device: string, journal: string): boolean;
        /**
         * make ext2/3/4 filesystem with external journal
         *
         * This creates an ext2/3/4 filesystem on `device` with an external journal
         * on the journal labeled `label`.
         *
         * See also guestfs_session_mke2journal_L().
         * @param fstype
         * @param blocksize
         * @param device
         * @param label
         * @returns true on success, false on error
         */
        mke2fs_JL(fstype: string, blocksize: number, device: string, label: string): boolean;
        /**
         * make ext2/3/4 filesystem with external journal
         *
         * This creates an ext2/3/4 filesystem on `device` with an external journal
         * on the journal with UUID `uuid`.
         *
         * See also guestfs_session_mke2journal_U().
         *
         * This function depends on the feature "linuxfsuuid".
         * See also guestfs_session_feature_available().
         * @param fstype
         * @param blocksize
         * @param device
         * @param uuid
         * @returns true on success, false on error
         */
        mke2fs_JU(fstype: string, blocksize: number, device: string, uuid: string): boolean;
        /**
         * make ext2/3/4 external journal
         *
         * This creates an ext2 external journal on `device`. It is equivalent to
         * the command:
         *
         * <![CDATA[mke2fs -O journal_dev -b blocksize device]]>
         * @param blocksize
         * @param device
         * @returns true on success, false on error
         */
        mke2journal(blocksize: number, device: string): boolean;
        /**
         * make ext2/3/4 external journal with label
         *
         * This creates an ext2 external journal on `device` with label `label`.
         * @param blocksize
         * @param label
         * @param device
         * @returns true on success, false on error
         */
        mke2journal_L(blocksize: number, label: string, device: string): boolean;
        /**
         * make ext2/3/4 external journal with UUID
         *
         * This creates an ext2 external journal on `device` with UUID `uuid`.
         *
         * This function depends on the feature "linuxfsuuid".
         * See also guestfs_session_feature_available().
         * @param blocksize
         * @param uuid
         * @param device
         * @returns true on success, false on error
         */
        mke2journal_U(blocksize: number, uuid: string, device: string): boolean;
        /**
         * make FIFO (named pipe)
         *
         * This call creates a FIFO (named pipe) called `path` with mode `mode`. It
         * is just a convenient wrapper around guestfs_session_mknod().
         *
         * Unlike with guestfs_session_mknod(), `mode` must contain only permissions
         * bits.
         *
         * The mode actually set is affected by the umask.
         *
         * This function depends on the feature "mknod".
         * See also guestfs_session_feature_available().
         * @param mode
         * @param path
         * @returns true on success, false on error
         */
        mkfifo(mode: number, path: string): boolean;
        /**
         * make a filesystem
         *
         * This function creates a filesystem on `device`. The filesystem type is
         * `fstype,` for example `ext3`.
         *
         * The optional arguments are:
         *
         * `blocksize`
         * The filesystem block size. Supported block sizes depend on the
         * filesystem type, but typically they are `1`024, `2`048 or `4`096 for
         * Linux ext2/3 filesystems.
         *
         * For VFAT and NTFS the `blocksize` parameter is treated as the
         * requested cluster size.
         *
         * For UFS block sizes, please see mkfs.ufs(8).
         *
         * `features`
         * This passes the *-O* parameter to the external mkfs program.
         *
         * For certain filesystem types, this allows extra filesystem features
         * to be selected. See mke2fs(8) and mkfs.ufs(8) for more details.
         *
         * You cannot use this optional parameter with the `gfs` or `gfs2`
         * filesystem type.
         *
         * `inode`
         * This passes the *-I* parameter to the external mke2fs(8) program
         * which sets the inode size (only for ext2/3/4 filesystems at
         * present).
         *
         * `sectorsize`
         * This passes the *-S* parameter to external mkfs.ufs(8) program,
         * which sets sector size for ufs filesystem.
         * @param fstype
         * @param device
         * @param optargs a GuestfsMkfs containing optional arguments
         * @returns true on success, false on error
         */
        mkfs(fstype: string, device: string, optargs?: Mkfs | null): boolean;
        /**
         * make a filesystem with block size
         *
         * This call is similar to guestfs_session_mkfs(), but it allows you to
         * control the block size of the resulting filesystem. Supported block
         * sizes depend on the filesystem type, but typically they are `1`024, `2`048
         * or `4`096 only.
         *
         * For VFAT and NTFS the `blocksize` parameter is treated as the requested
         * cluster size.
         * @param fstype
         * @param blocksize
         * @param device
         * @returns true on success, false on error
         */
        mkfs_b(fstype: string, blocksize: number, device: string): boolean;
        /**
         * create a btrfs filesystem
         *
         * Create a btrfs filesystem, allowing all configurables to be set. For
         * more information on the optional arguments, see mkfs.btrfs(8).
         *
         * Since btrfs filesystems can span multiple devices, this takes a
         * non-empty list of devices.
         *
         * To create general filesystems, use guestfs_session_mkfs().
         *
         * This function depends on the feature "btrfs".
         * See also guestfs_session_feature_available().
         * @param devices an array of strings
         * @param optargs a GuestfsMkfsBtrfs containing optional arguments
         * @returns true on success, false on error
         */
        mkfs_btrfs(devices: string[], optargs?: MkfsBtrfs | null): boolean;
        /**
         * make lost+found directory on an ext2/3/4 filesystem
         *
         * Make the "lost+found" directory, normally in the root directory of an
         * ext2/3/4 filesystem. `mountpoint` is the directory under which we try to
         * create the "lost+found" directory.
         * @param mountpoint
         * @returns true on success, false on error
         */
        mklost_and_found(mountpoint: string): boolean;
        /**
         * create a mountpoint
         *
         * guestfs_session_mkmountpoint() and guestfs_session_rmmountpoint() are
         * specialized calls that can be used to create extra mountpoints before
         * mounting the first filesystem.
         *
         * These calls are *only* necessary in some very limited circumstances,
         * mainly the case where you want to mount a mix of unrelated and/or
         * read-only filesystems together.
         *
         * For example, live CDs often contain a "Russian doll" nest of
         * filesystems, an ISO outer layer, with a squashfs image inside, with an
         * ext2/3 image inside that. You can unpack this as follows in guestfish:
         *
         * <![CDATA[add-ro Fedora-11-i686-Live.iso]]>
         *
         * <![CDATA[run]]>
         *
         * <![CDATA[mkmountpoint /cd]]>
         *
         * <![CDATA[mkmountpoint /sqsh]]>
         *
         * <![CDATA[mkmountpoint /ext3fs]]>
         *
         * <![CDATA[mount /dev/sda /cd]]>
         *
         * <![CDATA[mount-loop /cd/LiveOS/squashfs.img /sqsh]]>
         *
         * <![CDATA[mount-loop /sqsh/LiveOS/ext3fs.img /ext3fs]]>
         *
         * The inner filesystem is now unpacked under the /ext3fs mountpoint.
         *
         * guestfs_session_mkmountpoint() is not compatible with
         * guestfs_session_umount_all(). You may get unexpected errors if you try
         * to mix these calls. It is safest to manually unmount filesystems and
         * remove mountpoints after use.
         *
         * guestfs_session_umount_all() unmounts filesystems by sorting the paths
         * longest first, so for this to work for manual mountpoints, you must
         * ensure that the innermost mountpoints have the longest pathnames, as in
         * the example code above.
         *
         * For more details see <ulink
         * url='https://bugzilla.redhat.com/show_bug.cgi?id=599503'>
         * http://bugzilla.redhat.com/show_bug.cgi?id=599503 </ulink>
         *
         * Autosync [see guestfs_session_set_autosync(), this is set by default on
         * handles] can cause guestfs_session_umount_all() to be called when the
         * handle is closed which can also trigger these issues.
         * @param exemptpath
         * @returns true on success, false on error
         */
        mkmountpoint(exemptpath: string): boolean;
        /**
         * make block, character or FIFO devices
         *
         * This call creates block or character special devices, or named pipes
         * (FIFOs).
         *
         * The `mode` parameter should be the mode, using the standard constants.
         * `devmajor` and `devminor` are the device major and minor numbers, only
         * used when creating block and character special devices.
         *
         * Note that, just like mknod(2), the mode must be bitwise OR'd with
         * S_IFBLK, S_IFCHR, S_IFIFO or S_IFSOCK (otherwise this call just creates
         * a regular file). These constants are available in the standard Linux
         * header files, or you can use guestfs_session_mknod_b(),
         * guestfs_session_mknod_c() or guestfs_session_mkfifo() which are wrappers
         * around this command which bitwise OR in the appropriate constant for
         * you.
         *
         * The mode actually set is affected by the umask.
         *
         * This function depends on the feature "mknod".
         * See also guestfs_session_feature_available().
         * @param mode
         * @param devmajor
         * @param devminor
         * @param path
         * @returns true on success, false on error
         */
        mknod(mode: number, devmajor: number, devminor: number, path: string): boolean;
        /**
         * make block device node
         *
         * This call creates a block device node called `path` with mode `mode` and
         * device major/minor `devmajor` and `devminor`. It is just a convenient
         * wrapper around guestfs_session_mknod().
         *
         * Unlike with guestfs_session_mknod(), `mode` must contain only permissions
         * bits.
         *
         * The mode actually set is affected by the umask.
         *
         * This function depends on the feature "mknod".
         * See also guestfs_session_feature_available().
         * @param mode
         * @param devmajor
         * @param devminor
         * @param path
         * @returns true on success, false on error
         */
        mknod_b(mode: number, devmajor: number, devminor: number, path: string): boolean;
        /**
         * make char device node
         *
         * This call creates a char device node called `path` with mode `mode` and
         * device major/minor `devmajor` and `devminor`. It is just a convenient
         * wrapper around guestfs_session_mknod().
         *
         * Unlike with guestfs_session_mknod(), `mode` must contain only permissions
         * bits.
         *
         * The mode actually set is affected by the umask.
         *
         * This function depends on the feature "mknod".
         * See also guestfs_session_feature_available().
         * @param mode
         * @param devmajor
         * @param devminor
         * @param path
         * @returns true on success, false on error
         */
        mknod_c(mode: number, devmajor: number, devminor: number, path: string): boolean;
        /**
         * create a squashfs filesystem
         *
         * Create a squashfs filesystem for the specified `path`.
         *
         * The optional `compress` flag controls compression. If not given, then the
         * output compressed using `gzip`. Otherwise one of the following strings
         * may be given to select the compression type of the squashfs: `gzip,`
         * `lzma,` `lzo,` `lz4`, `xz`.
         *
         * The other optional arguments are:
         *
         * `excludes`
         * A list of wildcards. Files are excluded if they match any of the
         * wildcards.
         *
         * Please note that this API may fail when used to compress directories
         * with large files, such as the resulting squashfs will be over 3GB big.
         *
         * This function depends on the feature "squashfs".
         * See also guestfs_session_feature_available().
         * @param path
         * @param filename
         * @param optargs a GuestfsMksquashfs containing optional arguments
         * @param cancellable A GCancellable object
         * @returns true on success, false on error
         */
        mksquashfs(
            path: string,
            filename: string,
            optargs?: Mksquashfs | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * create a swap partition
         *
         * Create a Linux swap partition on `device`.
         *
         * The option arguments `label` and `uuid` allow you to set the label and/or
         * UUID of the new swap partition.
         * @param device
         * @param optargs a GuestfsMkswap containing optional arguments
         * @returns true on success, false on error
         */
        mkswap(device: string, optargs?: Mkswap | null): boolean;
        /**
         * create a swap partition with a label
         *
         * Create a swap partition on `device` with label `label`.
         *
         * Note that you cannot attach a swap label to a block device (eg.
         * /dev/sda), just to a partition. This appears to be a limitation of the
         * kernel or swap tools.
         * @param label
         * @param device
         * @returns true on success, false on error
         */
        mkswap_L(label: string, device: string): boolean;
        /**
         * create a swap partition with an explicit UUID
         *
         * Create a swap partition on `device` with UUID `uuid`.
         *
         * This function depends on the feature "linuxfsuuid".
         * See also guestfs_session_feature_available().
         * @param uuid
         * @param device
         * @returns true on success, false on error
         */
        mkswap_U(uuid: string, device: string): boolean;
        /**
         * create a swap file
         *
         * Create a swap file.
         *
         * This command just writes a swap file signature to an existing file. To
         * create the file itself, use something like guestfs_session_fallocate().
         * @param path
         * @returns true on success, false on error
         */
        mkswap_file(path: string): boolean;
        /**
         * create a temporary file
         *
         * This command creates a temporary file. The `tmpl` parameter should be a
         * full pathname for the temporary directory name with the final six
         * characters being "XXXXXX".
         *
         * For example: "/tmp/myprogXXXXXX" or "/Temp/myprogXXXXXX", the second one
         * being suitable for Windows filesystems.
         *
         * The name of the temporary file that was created is returned.
         *
         * The temporary file is created with mode 0600 and is owned by root.
         *
         * The caller is responsible for deleting the temporary file after use.
         *
         * If the optional `suffix` parameter is given, then the suffix (eg. ".txt")
         * is appended to the temporary name.
         *
         * See also: guestfs_session_mkdtemp().
         * @param tmpl
         * @param optargs a GuestfsMktemp containing optional arguments
         * @returns the returned string, or NULL on error
         */
        mktemp(tmpl: string, optargs?: Mktemp | null): string;
        /**
         * load a kernel module
         *
         * This loads a kernel module in the appliance.
         *
         * This function depends on the feature "linuxmodules".
         * See also guestfs_session_feature_available().
         * @param modulename
         * @returns true on success, false on error
         */
        modprobe(modulename: string): boolean;
        /**
         * mount a guest disk at a position in the filesystem
         *
         * Mount a guest disk at a position in the filesystem. Block devices are
         * named /dev/sda, /dev/sdb and so on, as they were added to the guest. If
         * those block devices contain partitions, they will have the usual names
         * (eg. /dev/sda1). Also LVM /dev/VG/LV-style names can be used, or
         * ‘mountable’ strings returned by guestfs_session_list_filesystems() or
         * guestfs_session_inspect_get_mountpoints().
         *
         * The rules are the same as for mount(2): A filesystem must first be
         * mounted on / before others can be mounted. Other filesystems can only be
         * mounted on directories which already exist.
         *
         * The mounted filesystem is writable, if we have sufficient permissions on
         * the underlying device.
         *
         * Before libguestfs 1.13.16, this call implicitly added the options `sync`
         * and `noatime`. The `sync` option greatly slowed writes and caused many
         * problems for users. If your program might need to work with older
         * versions of libguestfs, use guestfs_session_mount_options() instead
         * (using an empty string for the first parameter if you don't want any
         * options).
         * @param mountable
         * @param mountpoint
         * @returns true on success, false on error
         */
        mount(mountable: string, mountpoint: string): boolean;
        /**
         * mount 9p filesystem
         *
         * This call does nothing and returns an error.
         * @param mounttag
         * @param mountpoint
         * @param optargs a GuestfsMount9P containing optional arguments
         * @returns true on success, false on error
         */
        mount_9p(mounttag: string, mountpoint: string, optargs?: Mount9P | null): boolean;
        /**
         * mount on the local filesystem
         *
         * This call exports the libguestfs-accessible filesystem to a local
         * mountpoint (directory) called `localmountpoint`. Ordinary reads and
         * writes to files and directories under `localmountpoint` are redirected
         * through libguestfs.
         *
         * If the optional `readonly` flag is set to true, then writes to the
         * filesystem return error `EROFS`.
         *
         * `options` is a comma-separated list of mount options. See guestmount(1)
         * for some useful options.
         *
         * `cachetimeout` sets the timeout (in seconds) for cached directory
         * entries. The default is 60 seconds. See guestmount(1) for further
         * information.
         *
         * If `debugcalls` is set to true, then additional debugging information is
         * generated for every FUSE call.
         *
         * When guestfs_session_mount_local() returns, the filesystem is ready, but
         * is not processing requests (access to it will block). You have to call
         * guestfs_session_mount_local_run() to run the main loop.
         *
         * See "MOUNT LOCAL" in guestfs(3) for full documentation.
         * @param localmountpoint
         * @param optargs a GuestfsMountLocal containing optional arguments
         * @returns true on success, false on error
         */
        mount_local(localmountpoint: string, optargs?: MountLocal | null): boolean;
        /**
         * run main loop of mount on the local filesystem
         *
         * Run the main loop which translates kernel calls to libguestfs calls.
         *
         * This should only be called after guestfs_session_mount_local() returns
         * successfully. The call will not return until the filesystem is
         * unmounted.
         *
         * Note you must *not* make concurrent libguestfs calls on the same handle
         * from another thread.
         *
         * You may call this from a different thread than the one which called
         * guestfs_session_mount_local(), subject to the usual rules for threads
         * and libguestfs (see "MULTIPLE HANDLES AND MULTIPLE THREADS" in
         * guestfs(3)).
         *
         * See "MOUNT LOCAL" in guestfs(3) for full documentation.
         * @param cancellable A GCancellable object
         * @returns true on success, false on error
         */
        mount_local_run(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * mount a file using the loop device
         *
         * This command lets you mount file (a filesystem image in a file) on a
         * mount point. It is entirely equivalent to the command "mount -o loop
         * file mountpoint".
         * @param file
         * @param mountpoint
         * @returns true on success, false on error
         */
        mount_loop(file: string, mountpoint: string): boolean;
        /**
         * mount a guest disk with mount options
         *
         * This is the same as the guestfs_session_mount() command, but it allows
         * you to set the mount options as for the mount(8) *-o* flag.
         *
         * If the `options` parameter is an empty string, then no options are passed
         * (all options default to whatever the filesystem uses).
         * @param options
         * @param mountable
         * @param mountpoint
         * @returns true on success, false on error
         */
        mount_options(options: string, mountable: string, mountpoint: string): boolean;
        /**
         * mount a guest disk, read-only
         *
         * This is the same as the guestfs_session_mount() command, but it mounts
         * the filesystem with the read-only (*-o ro*) flag.
         * @param mountable
         * @param mountpoint
         * @returns true on success, false on error
         */
        mount_ro(mountable: string, mountpoint: string): boolean;
        /**
         * mount a guest disk with mount options and vfstype
         *
         * This is the same as the guestfs_session_mount() command, but it allows
         * you to set both the mount options and the vfstype as for the mount(8)
         * *-o* and *-t* flags.
         * @param options
         * @param vfstype
         * @param mountable
         * @param mountpoint
         * @returns true on success, false on error
         */
        mount_vfs(options: string, vfstype: string, mountable: string, mountpoint: string): boolean;
        /**
         * extract the device part of a mountable
         *
         * Returns the device name of a mountable. In quite a lot of cases, the
         * mountable is the device name.
         *
         * However this doesn't apply for btrfs subvolumes, where the mountable is
         * a combination of both the device name and the subvolume path (see also
         * guestfs_session_mountable_subvolume() to extract the subvolume path of
         * the mountable if any).
         * @param mountable
         * @returns the returned string, or NULL on error
         */
        mountable_device(mountable: string): string;
        /**
         * extract the subvolume part of a mountable
         *
         * Returns the subvolume path of a mountable. Btrfs subvolumes mountables
         * are a combination of both the device name and the subvolume path (see
         * also guestfs_session_mountable_device() to extract the device of the
         * mountable).
         *
         * If the mountable does not represent a btrfs subvolume, then this
         * function fails and the `errno` is set to `EINVAL`.
         * @param mountable
         * @returns the returned string, or NULL on error
         */
        mountable_subvolume(mountable: string): string;
        /**
         * show mountpoints
         *
         * This call is similar to guestfs_session_mounts(). That call returns a
         * list of devices. This one returns a hash table (map) of device name to
         * directory where the device is mounted.
         * @returns a GHashTable of results, or NULL on error
         */
        mountpoints(): GLib.HashTable<string, string>;
        /**
         * show mounted filesystems
         *
         * This returns the list of currently mounted filesystems. It returns the
         * list of devices (eg. /dev/sda1, /dev/VG/LV).
         *
         * Some internal mounts are not shown.
         *
         * See also: guestfs_session_mountpoints()
         * @returns an array of returned strings, or NULL on error
         */
        mounts(): string[];
        /**
         * move a file
         *
         * This moves a file from `src` to `dest` where `dest` is either a destination
         * filename or destination directory.
         *
         * See also: guestfs_session_rename().
         * @param src
         * @param dest
         * @returns true on success, false on error
         */
        mv(src: string, dest: string): boolean;
        /**
         * return number of whole block devices (disks) added
         *
         * This returns the number of whole block devices that were added. This is
         * the same as the number of devices that would be returned if you called
         * guestfs_session_list_devices().
         *
         * To find out the maximum number of devices that could be added, call
         * guestfs_session_max_disks().
         * @returns the returned value, or -1 on error
         */
        nr_devices(): number;
        /**
         * probe NTFS volume
         *
         * This command runs the ntfs-3g.probe(8) command which probes an NTFS
         * `device` for mountability. (Not all NTFS volumes can be mounted
         * read-write, and some cannot be mounted at all).
         *
         * `rw` is a boolean flag. Set it to true if you want to test if the volume
         * can be mounted read-write. Set it to false if you want to test if the
         * volume can be mounted read-only.
         *
         * The return value is an integer which `0` if the operation would succeed,
         * or some non-zero value documented in the ntfs-3g.probe(8) manual page.
         *
         * This function depends on the feature "ntfs3g".
         * See also guestfs_session_feature_available().
         * @param rw
         * @param device
         * @returns the returned value, or -1 on error
         */
        ntfs_3g_probe(rw: boolean, device: string): number;
        /**
         * download a file to the local machine given its inode
         *
         * Download a file given its inode from a NTFS filesystem and save it as
         * filename on the local machine.
         *
         * This allows to download some otherwise inaccessible files such as the
         * ones within the $Extend folder.
         *
         * The filesystem from which to extract the file must be unmounted,
         * otherwise the call will fail.
         * @param device
         * @param inode
         * @param filename
         * @param cancellable A GCancellable object
         * @returns true on success, false on error
         */
        ntfscat_i(device: string, inode: number, filename: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * restore NTFS from backup file
         *
         * Restore the `backupfile` (from a previous call to
         * guestfs_session_ntfsclone_out()) to `device,` overwriting any existing
         * contents of this device.
         *
         * This function depends on the feature "ntfs3g".
         * See also guestfs_session_feature_available().
         * @param backupfile
         * @param device
         * @param cancellable A GCancellable object
         * @returns true on success, false on error
         */
        ntfsclone_in(backupfile: string, device: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * save NTFS to backup file
         *
         * Stream the NTFS filesystem `device` to the local file `backupfile`. The
         * format used for the backup file is a special format used by the
         * ntfsclone(8) tool.
         *
         * If the optional `metadataonly` flag is true, then *only* the metadata is
         * saved, losing all the user data (this is useful for diagnosing some
         * filesystem problems).
         *
         * The optional `rescue,` `ignorefscheck,` `preservetimestamps` and `force`
         * flags have precise meanings detailed in the ntfsclone(8) man page.
         *
         * Use guestfs_session_ntfsclone_in() to restore the file back to a
         * libguestfs device.
         *
         * This function depends on the feature "ntfs3g".
         * See also guestfs_session_feature_available().
         * @param device
         * @param backupfile
         * @param optargs a GuestfsNtfscloneOut containing optional arguments
         * @param cancellable A GCancellable object
         * @returns true on success, false on error
         */
        ntfsclone_out(
            device: string,
            backupfile: string,
            optargs?: NtfscloneOut | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * fix common errors and force Windows to check NTFS
         *
         * This command repairs some fundamental NTFS inconsistencies, resets the
         * NTFS journal file, and schedules an NTFS consistency check for the first
         * boot into Windows.
         *
         * This is *not* an equivalent of Windows `chkdsk`. It does *not* scan the
         * filesystem for inconsistencies.
         *
         * The optional `clearbadsectors` flag clears the list of bad sectors. This
         * is useful after cloning a disk with bad sectors to a new disk.
         *
         * This function depends on the feature "ntfs3g".
         * See also guestfs_session_feature_available().
         * @param device
         * @param optargs a GuestfsNtfsfix containing optional arguments
         * @returns true on success, false on error
         */
        ntfsfix(device: string, optargs?: Ntfsfix | null): boolean;
        /**
         * resize an NTFS filesystem
         *
         * This command resizes an NTFS filesystem, expanding or shrinking it to
         * the size of the underlying device.
         *
         * The optional parameters are:
         *
         * `size`
         * The new size (in bytes) of the filesystem. If omitted, the
         * filesystem is resized to fit the container (eg. partition).
         *
         * `force`
         * If this option is true, then force the resize of the filesystem even
         * if the filesystem is marked as requiring a consistency check.
         *
         * After the resize operation, the filesystem is always marked as
         * requiring a consistency check (for safety). You have to boot into
         * Windows to perform this check and clear this condition. If you
         * *don't* set the `force` option then it is not possible to call
         * guestfs_session_ntfsresize() multiple times on a single filesystem
         * without booting into Windows between each resize.
         *
         * See also ntfsresize(8).
         *
         * This function depends on the feature "ntfsprogs".
         * See also guestfs_session_feature_available().
         * @param device
         * @param optargs a GuestfsNTFSResizeOpts containing optional arguments
         * @returns true on success, false on error
         */
        ntfsresize(device: string, optargs?: NTFSResizeOpts | null): boolean;
        /**
         * resize an NTFS filesystem (with size)
         *
         * This command is the same as guestfs_session_ntfsresize() except that it
         * allows you to specify the new size (in bytes) explicitly.
         *
         * This function depends on the feature "ntfsprogs".
         * See also guestfs_session_feature_available().
         * @param device
         * @param size
         * @returns true on success, false on error
         */
        ntfsresize_size(device: string, size: number): boolean;
        /**
         * parse the environment and set handle flags accordingly
         *
         * Parse the program’s environment and set flags in the handle accordingly.
         * For example if "LIBGUESTFS_DEBUG=1" then the ‘verbose’ flag is set in
         * the handle.
         *
         * *Most programs do not need to call this*. It is done implicitly when you
         * call guestfs_session_create().
         *
         * See "ENVIRONMENT VARIABLES" in guestfs(3) for a list of environment
         * variables that can affect libguestfs handles. See also
         * "guestfs_create_flags" in guestfs(3), and
         * guestfs_session_parse_environment_list().
         * @returns true on success, false on error
         */
        parse_environment(): boolean;
        /**
         * parse the environment and set handle flags accordingly
         *
         * Parse the list of strings in the argument `environment` and set flags in
         * the handle accordingly. For example if "LIBGUESTFS_DEBUG=1" is a string
         * in the list, then the ‘verbose’ flag is set in the handle.
         *
         * This is the same as guestfs_session_parse_environment() except that it
         * parses an explicit list of strings instead of the program's environment.
         * @param environment an array of strings
         * @returns true on success, false on error
         */
        parse_environment_list(environment: string[]): boolean;
        /**
         * add a partition to the device
         *
         * This command adds a partition to `device`. If there is no partition table
         * on the device, call guestfs_session_part_init() first.
         *
         * The `prlogex` parameter is the type of partition. Normally you should
         * pass `p` or `primary` here, but MBR partition tables also support `l` (or
         * `logical)` and `e` (or `extended)` partition types.
         *
         * `startsect` and `endsect` are the start and end of the partition in
         * *sectors*. `endsect` may be negative, which means it counts backwards
         * from the end of the disk (`-1` is the last sector).
         *
         * Creating a partition which covers the whole disk is not so easy. Use
         * guestfs_session_part_disk() to do that.
         * @param device
         * @param prlogex
         * @param startsect
         * @param endsect
         * @returns true on success, false on error
         */
        part_add(device: string, prlogex: string, startsect: number, endsect: number): boolean;
        /**
         * delete a partition
         *
         * This command deletes the partition numbered `partnum` on `device`.
         *
         * Note that in the case of MBR partitioning, deleting an extended
         * partition also deletes any logical partitions it contains.
         * @param device
         * @param partnum
         * @returns true on success, false on error
         */
        part_del(device: string, partnum: number): boolean;
        /**
         * partition whole disk with a single primary partition
         *
         * This command is simply a combination of guestfs_session_part_init()
         * followed by guestfs_session_part_add() to create a single primary
         * partition covering the whole disk.
         *
         * `parttype` is the partition table type, usually `mbr` or `gpt,` but other
         * possible values are described in guestfs_session_part_init().
         * @param device
         * @param parttype
         * @returns true on success, false on error
         */
        part_disk(device: string, parttype: string): boolean;
        /**
         * move backup GPT header to the end of the disk
         *
         * Move backup GPT data structures to the end of the disk. This is useful
         * in case of in-place image expand since disk space after backup GPT
         * header is not usable. This is equivalent to "sgdisk -e".
         *
         * See also sgdisk(8).
         *
         * This function depends on the feature "gdisk".
         * See also guestfs_session_feature_available().
         * @param device
         * @returns true on success, false on error
         */
        part_expand_gpt(device: string): boolean;
        /**
         * return true if a partition is bootable
         *
         * This command returns true if the partition `partnum` on `device` has the
         * bootable flag set.
         *
         * See also guestfs_session_part_set_bootable().
         * @param device
         * @param partnum
         * @returns the returned value, or -1 on error
         */
        part_get_bootable(device: string, partnum: number): number;
        /**
         * get the GUID of a GPT-partitioned disk
         *
         * Return the disk identifier (GUID) of a GPT-partitioned `device`.
         * Behaviour is undefined for other partition types.
         *
         * This function depends on the feature "gdisk".
         * See also guestfs_session_feature_available().
         * @param device
         * @returns the returned string, or NULL on error
         */
        part_get_disk_guid(device: string): string;
        /**
         * get the attribute flags of a GPT partition
         *
         * Return the attribute flags of numbered GPT partition `partnum`. An error
         * is returned for MBR partitions.
         *
         * This function depends on the feature "gdisk".
         * See also guestfs_session_feature_available().
         * @param device
         * @param partnum
         * @returns the returned value, or -1 on error
         */
        part_get_gpt_attributes(device: string, partnum: number): number;
        /**
         * get the GUID of a GPT partition
         *
         * Return the GUID of numbered GPT partition `partnum`.
         *
         * This function depends on the feature "gdisk".
         * See also guestfs_session_feature_available().
         * @param device
         * @param partnum
         * @returns the returned string, or NULL on error
         */
        part_get_gpt_guid(device: string, partnum: number): string;
        /**
         * get the type GUID of a GPT partition
         *
         * Return the type GUID of numbered GPT partition `partnum`. For MBR
         * partitions, return an appropriate GUID corresponding to the MBR type.
         * Behaviour is undefined for other partition types.
         *
         * This function depends on the feature "gdisk".
         * See also guestfs_session_feature_available().
         * @param device
         * @param partnum
         * @returns the returned string, or NULL on error
         */
        part_get_gpt_type(device: string, partnum: number): string;
        /**
         * get the MBR type byte (ID byte) from a partition
         *
         * Returns the MBR type byte (also known as the ID byte) from the numbered
         * partition `partnum`.
         *
         * Note that only MBR (old DOS-style) partitions have type bytes. You will
         * get undefined results for other partition table types (see
         * guestfs_session_part_get_parttype()).
         * @param device
         * @param partnum
         * @returns the returned value, or -1 on error
         */
        part_get_mbr_id(device: string, partnum: number): number;
        /**
         * get the MBR partition type
         *
         * This returns the partition type of an MBR partition numbered `partnum` on
         * device `device`.
         *
         * It returns `primary,` `logical,` or `extended`.
         * @param device
         * @param partnum
         * @returns the returned string, or NULL on error
         */
        part_get_mbr_part_type(device: string, partnum: number): string;
        /**
         * get partition name
         *
         * This gets the partition name on partition numbered `partnum` on device
         * `device`. Note that partitions are numbered from 1.
         *
         * The partition name can only be read on certain types of partition table.
         * This works on `gpt` but not on `mbr` partitions.
         * @param device
         * @param partnum
         * @returns the returned string, or NULL on error
         */
        part_get_name(device: string, partnum: number): string;
        /**
         * get the partition table type
         *
         * This command examines the partition table on `device` and returns the
         * partition table type (format) being used.
         *
         * Common return values include: `msdos` (a DOS/Windows style MBR partition
         * table), `gpt` (a GPT/EFI-style partition table). Other values are
         * possible, although unusual. See guestfs_session_part_init() for a full
         * list.
         * @param device
         * @returns the returned string, or NULL on error
         */
        part_get_parttype(device: string): string;
        /**
         * create an empty partition table
         *
         * This creates an empty partition table on `device` of one of the partition
         * types listed below. Usually `parttype` should be either `msdos` or `gpt`
         * (for large disks).
         *
         * Initially there are no partitions. Following this, you should call
         * guestfs_session_part_add() for each partition required.
         *
         * Possible values for `parttype` are:
         *
         * `efi`
         * `gpt`
         * Intel EFI / GPT partition table.
         *
         * This is recommended for >= 2 TB partitions that will be accessed
         * from Linux and Intel-based Mac OS X. It also has limited backwards
         * compatibility with the `mbr` format.
         *
         * `mbr`
         * `msdos`
         * The standard PC "Master Boot Record" (MBR) format used by MS-DOS and
         * Windows. This partition type will only work for device sizes up to 2
         * TB. For large disks we recommend using `gpt`.
         *
         * Other partition table types that may work but are not supported include:
         *
         * `aix`
         * AIX disk labels.
         *
         * `amiga`
         * `rdb`
         * Amiga "Rigid Disk Block" format.
         *
         * `bsd`
         * BSD disk labels.
         *
         * `dasd`
         * DASD, used on IBM mainframes.
         *
         * `dvh`
         * MIPS/SGI volumes.
         *
         * `mac`
         * Old Mac partition format. Modern Macs use `gpt`.
         *
         * `pc9`8
         * NEC PC-98 format, common in Japan apparently.
         *
         * `sun`
         * Sun disk labels.
         * @param device
         * @param parttype
         * @returns true on success, false on error
         */
        part_init(device: string, parttype: string): boolean;
        /**
         * list partitions on a device
         *
         * This command parses the partition table on `device` and returns the list
         * of partitions found.
         *
         * The fields in the returned structure are:
         *
         * `part_num`
         * Partition number, counting from 1.
         *
         * `part_start`
         * Start of the partition *in bytes*. To get sectors you have to divide
         * by the device’s sector size, see guestfs_session_blockdev_getss().
         *
         * `part_end`
         * End of the partition in bytes.
         *
         * `part_size`
         * Size of the partition in bytes.
         * @param device
         * @returns an array of Partition objects, or NULL on error
         */
        part_list(device: string): Partition[];
        /**
         * resize a partition
         *
         * This command resizes the partition numbered `partnum` on `device` by
         * moving the end position.
         *
         * Note that this does not modify any filesystem present in the partition.
         * If you wish to do this, you will need to use filesystem resizing
         * commands like guestfs_session_resize2fs().
         *
         * When growing a partition you will want to grow the filesystem
         * afterwards, but when shrinking, you need to shrink the filesystem before
         * the partition.
         * @param device
         * @param partnum
         * @param endsect
         * @returns true on success, false on error
         */
        part_resize(device: string, partnum: number, endsect: number): boolean;
        /**
         * make a partition bootable
         *
         * This sets the bootable flag on partition numbered `partnum` on device
         * `device`. Note that partitions are numbered from 1.
         *
         * The bootable flag is used by some operating systems (notably Windows) to
         * determine which partition to boot from. It is by no means universally
         * recognized.
         * @param device
         * @param partnum
         * @param bootable
         * @returns true on success, false on error
         */
        part_set_bootable(device: string, partnum: number, bootable: boolean): boolean;
        /**
         * set the GUID of a GPT-partitioned disk
         *
         * Set the disk identifier (GUID) of a GPT-partitioned `device` to `guid`.
         * Return an error if the partition table of `device` isn't GPT, or if `guid`
         * is not a valid GUID.
         *
         * This function depends on the feature "gdisk".
         * See also guestfs_session_feature_available().
         * @param device
         * @param guid
         * @returns true on success, false on error
         */
        part_set_disk_guid(device: string, guid: string): boolean;
        /**
         * set the GUID of a GPT-partitioned disk to random value
         *
         * Set the disk identifier (GUID) of a GPT-partitioned `device` to a
         * randomly generated value. Return an error if the partition table of
         * `device` isn't GPT.
         *
         * This function depends on the feature "gdisk".
         * See also guestfs_session_feature_available().
         * @param device
         * @returns true on success, false on error
         */
        part_set_disk_guid_random(device: string): boolean;
        /**
         * set the attribute flags of a GPT partition
         *
         * Set the attribute flags of numbered GPT partition `partnum` to
         * `attributes`. Return an error if the partition table of `device` isn't
         * GPT.
         *
         * See <ulink
         * url='https://en.wikipedia.org/wiki/GUID_Partition_Table#Partition_entrie
         * s'> http://en.wikipedia.org/wiki/GUID_Partition_Table#Partition_entries
         * </ulink> for a useful list of partition attributes.
         *
         * This function depends on the feature "gdisk".
         * See also guestfs_session_feature_available().
         * @param device
         * @param partnum
         * @param attributes
         * @returns true on success, false on error
         */
        part_set_gpt_attributes(device: string, partnum: number, attributes: number): boolean;
        /**
         * set the GUID of a GPT partition
         *
         * Set the GUID of numbered GPT partition `partnum` to `guid`. Return an
         * error if the partition table of `device` isn't GPT, or if `guid` is not a
         * valid GUID.
         *
         * This function depends on the feature "gdisk".
         * See also guestfs_session_feature_available().
         * @param device
         * @param partnum
         * @param guid
         * @returns true on success, false on error
         */
        part_set_gpt_guid(device: string, partnum: number, guid: string): boolean;
        /**
         * set the type GUID of a GPT partition
         *
         * Set the type GUID of numbered GPT partition `partnum` to `guid`. Return an
         * error if the partition table of `device` isn't GPT, or if `guid` is not a
         * valid GUID.
         *
         * See <ulink
         * url='https://en.wikipedia.org/wiki/GUID_Partition_Table#Partition_type_G
         * UIDs'>
         * http://en.wikipedia.org/wiki/GUID_Partition_Table#Partition_type_GUIDs
         * </ulink> for a useful list of type GUIDs.
         *
         * This function depends on the feature "gdisk".
         * See also guestfs_session_feature_available().
         * @param device
         * @param partnum
         * @param guid
         * @returns true on success, false on error
         */
        part_set_gpt_type(device: string, partnum: number, guid: string): boolean;
        /**
         * set the MBR type byte (ID byte) of a partition
         *
         * Sets the MBR type byte (also known as the ID byte) of the numbered
         * partition `partnum` to `idbyte`. Note that the type bytes quoted in most
         * documentation are in fact hexadecimal numbers, but usually documented
         * without any leading "0x" which might be confusing.
         *
         * Note that only MBR (old DOS-style) partitions have type bytes. You will
         * get undefined results for other partition table types (see
         * guestfs_session_part_get_parttype()).
         * @param device
         * @param partnum
         * @param idbyte
         * @returns true on success, false on error
         */
        part_set_mbr_id(device: string, partnum: number, idbyte: number): boolean;
        /**
         * set partition name
         *
         * This sets the partition name on partition numbered `partnum` on device
         * `device`. Note that partitions are numbered from 1.
         *
         * The partition name can only be set on certain types of partition table.
         * This works on `gpt` but not on `mbr` partitions.
         * @param device
         * @param partnum
         * @param name
         * @returns true on success, false on error
         */
        part_set_name(device: string, partnum: number, name: string): boolean;
        /**
         * convert partition name to device name
         *
         * This function takes a partition name (eg. "/dev/sdb1") and removes the
         * partition number, returning the device name (eg. "/dev/sdb").
         *
         * The named partition must exist, for example as a string returned from
         * guestfs_session_list_partitions().
         *
         * See also guestfs_session_part_to_partnum(),
         * guestfs_session_device_index().
         * @param partition
         * @returns the returned string, or NULL on error
         */
        part_to_dev(partition: string): string;
        /**
         * convert partition name to partition number
         *
         * This function takes a partition name (eg. "/dev/sdb1") and returns the
         * partition number (eg. `1`).
         *
         * The named partition must exist, for example as a string returned from
         * guestfs_session_list_partitions().
         *
         * See also guestfs_session_part_to_dev().
         * @param partition
         * @returns the returned value, or -1 on error
         */
        part_to_partnum(partition: string): number;
        /**
         * ping the guest daemon
         *
         * This is a test probe into the guestfs daemon running inside the
         * libguestfs appliance. Calling this function checks that the daemon
         * responds to the ping message, without affecting the daemon or attached
         * block device(s) in any other way.
         * @returns true on success, false on error
         */
        ping_daemon(): boolean;
        /**
         * read part of a file
         *
         * This command lets you read part of a file. It reads `count` bytes of the
         * file, starting at `offset,` from file `path`.
         *
         * This may read fewer bytes than requested. For further details see the
         * pread(2) system call.
         *
         * See also guestfs_session_pwrite(), guestfs_session_pread_device().
         * @param path
         * @param count
         * @param offset
         * @returns an array of binary data, or NULL on error
         */
        pread(path: string, count: number, offset: number): Uint8Array;
        /**
         * read part of a device
         *
         * This command lets you read part of a block device. It reads `count` bytes
         * of `device,` starting at `offset`.
         *
         * This may read fewer bytes than requested. For further details see the
         * pread(2) system call.
         *
         * See also guestfs_session_pread().
         * @param device
         * @param count
         * @param offset
         * @returns an array of binary data, or NULL on error
         */
        pread_device(device: string, count: number, offset: number): Uint8Array;
        /**
         * generate a new random UUID for a physical volume
         *
         * Generate a new random UUID for the physical volume `device`.
         *
         * This function depends on the feature "lvm2".
         * See also guestfs_session_feature_available().
         * @param device
         * @returns true on success, false on error
         */
        pvchange_uuid(device: string): boolean;
        /**
         * generate new random UUIDs for all physical volumes
         *
         * Generate new random UUIDs for all physical volumes.
         *
         * This function depends on the feature "lvm2".
         * See also guestfs_session_feature_available().
         * @returns true on success, false on error
         */
        pvchange_uuid_all(): boolean;
        /**
         * create an LVM physical volume
         *
         * This creates an LVM physical volume on the named `device,` where `device`
         * should usually be a partition name such as /dev/sda1.
         *
         * This function depends on the feature "lvm2".
         * See also guestfs_session_feature_available().
         * @param device
         * @returns true on success, false on error
         */
        pvcreate(device: string): boolean;
        /**
         * remove an LVM physical volume
         *
         * This wipes a physical volume `device` so that LVM will no longer
         * recognise it.
         *
         * The implementation uses the pvremove(8) command which refuses to wipe
         * physical volumes that contain any volume groups, so you have to remove
         * those first.
         *
         * This function depends on the feature "lvm2".
         * See also guestfs_session_feature_available().
         * @param device
         * @returns true on success, false on error
         */
        pvremove(device: string): boolean;
        /**
         * resize an LVM physical volume
         *
         * This resizes (expands or shrinks) an existing LVM physical volume to
         * match the new size of the underlying device.
         *
         * This function depends on the feature "lvm2".
         * See also guestfs_session_feature_available().
         * @param device
         * @returns true on success, false on error
         */
        pvresize(device: string): boolean;
        /**
         * resize an LVM physical volume (with size)
         *
         * This command is the same as guestfs_session_pvresize() except that it
         * allows you to specify the new size (in bytes) explicitly.
         *
         * This function depends on the feature "lvm2".
         * See also guestfs_session_feature_available().
         * @param device
         * @param size
         * @returns true on success, false on error
         */
        pvresize_size(device: string, size: number): boolean;
        /**
         * list the LVM physical volumes (PVs)
         *
         * List all the physical volumes detected. This is the equivalent of the
         * pvs(8) command.
         *
         * This returns a list of just the device names that contain PVs (eg.
         * /dev/sda2).
         *
         * See also guestfs_session_pvs_full().
         *
         * This function depends on the feature "lvm2".
         * See also guestfs_session_feature_available().
         * @returns an array of returned strings, or NULL on error
         */
        pvs(): string[];
        /**
         * list the LVM physical volumes (PVs)
         *
         * List all the physical volumes detected. This is the equivalent of the
         * pvs(8) command. The "full" version includes all fields.
         *
         * This function depends on the feature "lvm2".
         * See also guestfs_session_feature_available().
         * @returns an array of PV objects, or NULL on error
         */
        pvs_full(): PV[];
        /**
         * get the UUID of a physical volume
         *
         * This command returns the UUID of the LVM PV `device`.
         * @param device
         * @returns the returned string, or NULL on error
         */
        pvuuid(device: string): string;
        /**
         * write to part of a file
         *
         * This command writes to part of a file. It writes the data buffer
         * `content` to the file `path` starting at offset `offset`.
         *
         * This command implements the pwrite(2) system call, and like that system
         * call it may not write the full data requested. The return value is the
         * number of bytes that were actually written to the file. This could even
         * be 0, although short writes are unlikely for regular files in ordinary
         * circumstances.
         *
         * See also guestfs_session_pread(), guestfs_session_pwrite_device().
         * @param path
         * @param content an array of binary data
         * @param offset
         * @returns the returned value, or -1 on error
         */
        pwrite(path: string, content: Uint8Array | string, offset: number): number;
        /**
         * write to part of a device
         *
         * This command writes to part of a device. It writes the data buffer
         * `content` to `device` starting at offset `offset`.
         *
         * This command implements the pwrite(2) system call, and like that system
         * call it may not write the full data requested (although short writes to
         * disk devices and partitions are probably impossible with standard Linux
         * kernels).
         *
         * See also guestfs_session_pwrite().
         * @param device
         * @param content an array of binary data
         * @param offset
         * @returns the returned value, or -1 on error
         */
        pwrite_device(device: string, content: Uint8Array | string, offset: number): number;
        /**
         * read a file
         *
         * This calls returns the contents of the file `path` as a buffer.
         *
         * Unlike guestfs_session_cat(), this function can correctly handle files
         * that contain embedded ASCII NUL characters.
         * @param path
         * @returns an array of binary data, or NULL on error
         */
        read_file(path: string): Uint8Array;
        /**
         * read file as lines
         *
         * Return the contents of the file named `path`.
         *
         * The file contents are returned as a list of lines. Trailing `LF` and
         * `CRLF` character sequences are *not* returned.
         *
         * Note that this function cannot correctly handle binary files
         * (specifically, files containing "\0" character which is treated as end
         * of string). For those you need to use the guestfs_session_read_file()
         * function and split the buffer into lines yourself.
         * @param path
         * @returns an array of returned strings, or NULL on error
         */
        read_lines(path: string): string[];
        /**
         * read directories entries
         *
         * This returns the list of directory entries in directory `dir`.
         *
         * All entries in the directory are returned, including "." and "..". The
         * entries are *not* sorted, but returned in the same order as the
         * underlying filesystem.
         *
         * Also this call returns basic file type information about each file. The
         * `ftyp` field will contain one of the following characters:
         *
         * 'b' Block special
         *
         * 'c' Char special
         *
         * 'd' Directory
         *
         * 'f' FIFO (named pipe)
         *
         * 'l' Symbolic link
         *
         * 'r' Regular file
         *
         * 's' Socket
         *
         * 'u' Unknown file type
         *
         * '?' The readdir(3) call returned a `d_type` field with an unexpected
         * value
         *
         * This function is primarily intended for use by programs. To get a simple
         * list of names, use guestfs_session_ls(). To get a printable directory
         * for human consumption, use guestfs_session_ll().
         * @param dir
         * @param cancellable A GCancellable object
         * @returns an array of Dirent objects, or NULL on error
         */
        readdir(dir: string, cancellable?: Gio.Cancellable | null): Dirent[];
        /**
         * read the target of a symbolic link
         *
         * This command reads the target of a symbolic link.
         * @param path
         * @returns the returned string, or NULL on error
         */
        readlink(path: string): string;
        /**
         * readlink on multiple files
         *
         * This call allows you to do a `readlink` operation on multiple files,
         * where all files are in the directory `path`. `names` is the list of files
         * from this directory.
         *
         * On return you get a list of strings, with a one-to-one correspondence to
         * the `names` list. Each string is the value of the symbolic link.
         *
         * If the readlink(2) operation fails on any name, then the corresponding
         * result string is the empty string "". However the whole operation is
         * completed even if there were readlink(2) errors, and so you can call
         * this function with names where you don't know if they are symbolic links
         * already (albeit slightly less efficient).
         *
         * This call is intended for programs that want to efficiently list a
         * directory contents without making many round-trips.
         * @param path
         * @param names an array of strings
         * @returns an array of returned strings, or NULL on error
         */
        readlinklist(path: string, names: string[]): string[];
        /**
         * canonicalized absolute pathname
         *
         * Return the canonicalized absolute pathname of `path`. The returned path
         * has no ".", ".." or symbolic link path elements.
         * @param path
         * @returns the returned string, or NULL on error
         */
        realpath(path: string): string;
        /**
         * remount a filesystem with different options
         *
         * This call allows you to change the `rw` (readonly/read-write) flag on an
         * already mounted filesystem at `mountpoint,` converting a readonly
         * filesystem to be read-write, or vice-versa.
         *
         * Note that at the moment you must supply the "optional" `rw` parameter. In
         * future we may allow other flags to be adjusted.
         * @param mountpoint
         * @param optargs a GuestfsRemount containing optional arguments
         * @returns true on success, false on error
         */
        remount(mountpoint: string, optargs?: Remount | null): boolean;
        /**
         * remove a disk image
         *
         * This call does nothing and returns an error.
         * @param label
         * @returns true on success, false on error
         */
        remove_drive(label: string): boolean;
        /**
         * remove extended attribute of a file or directory
         *
         * This call removes the extended attribute named `xattr` of the file `path`.
         *
         * See also: guestfs_session_lremovexattr(), attr(5).
         *
         * This function depends on the feature "linuxxattrs".
         * See also guestfs_session_feature_available().
         * @param xattr
         * @param path
         * @returns true on success, false on error
         */
        removexattr(xattr: string, path: string): boolean;
        /**
         * rename a file on the same filesystem
         *
         * Rename a file to a new place on the same filesystem. This is the same as
         * the Linux rename(2) system call. In most cases you are better to use
         * guestfs_session_mv() instead.
         * @param oldpath
         * @param newpath
         * @returns true on success, false on error
         */
        rename(oldpath: string, newpath: string): boolean;
        /**
         * resize an ext2, ext3 or ext4 filesystem
         *
         * This resizes an ext2, ext3 or ext4 filesystem to match the size of the
         * underlying device.
         *
         * See also "RESIZE2FS ERRORS" in guestfs(3).
         * @param device
         * @returns true on success, false on error
         */
        resize2fs(device: string): boolean;
        /**
         * resize an ext2, ext3 or ext4 filesystem to the minimum size
         *
         * This command is the same as guestfs_session_resize2fs(), but the
         * filesystem is resized to its minimum size. This works like the *-M*
         * option to the resize2fs(8) command.
         *
         * To get the resulting size of the filesystem you should call
         * guestfs_session_tune2fs_l() and read the "Block size" and "Block count"
         * values. These two numbers, multiplied together, give the resulting size
         * of the minimal filesystem in bytes.
         *
         * See also "RESIZE2FS ERRORS" in guestfs(3).
         * @param device
         * @returns true on success, false on error
         */
        resize2fs_M(device: string): boolean;
        /**
         * resize an ext2, ext3 or ext4 filesystem (with size)
         *
         * This command is the same as guestfs_session_resize2fs() except that it
         * allows you to specify the new size (in bytes) explicitly.
         *
         * See also "RESIZE2FS ERRORS" in guestfs(3).
         * @param device
         * @param size
         * @returns true on success, false on error
         */
        resize2fs_size(device: string, size: number): boolean;
        /**
         * remove a file
         *
         * Remove the single file `path`.
         * @param path
         * @returns true on success, false on error
         */
        rm(path: string): boolean;
        /**
         * remove a file ignoring errors
         *
         * Remove the file `path`.
         *
         * If the file doesn't exist, that error is ignored. (Other errors, eg. I/O
         * errors or bad paths, are not ignored)
         *
         * This call cannot remove directories. Use guestfs_session_rmdir() to
         * remove an empty directory, or guestfs_session_rm_rf() to remove
         * directories recursively.
         * @param path
         * @returns true on success, false on error
         */
        rm_f(path: string): boolean;
        /**
         * remove a file or directory recursively
         *
         * Remove the file or directory `path,` recursively removing the contents if
         * its a directory. This is like the "rm -rf" shell command.
         * @param path
         * @returns true on success, false on error
         */
        rm_rf(path: string): boolean;
        /**
         * remove a directory
         *
         * Remove the single directory `path`.
         * @param path
         * @returns true on success, false on error
         */
        rmdir(path: string): boolean;
        /**
         * remove a mountpoint
         *
         * This call removes a mountpoint that was previously created with
         * guestfs_session_mkmountpoint(). See guestfs_session_mkmountpoint() for
         * full details.
         * @param exemptpath
         * @returns true on success, false on error
         */
        rmmountpoint(exemptpath: string): boolean;
        /**
         * synchronize the contents of two directories
         *
         * This call may be used to copy or synchronize two directories under the
         * same libguestfs handle. This uses the rsync(1) program which uses a fast
         * algorithm that avoids copying files unnecessarily.
         *
         * `src` and `dest` are the source and destination directories. Files are
         * copied from `src` to `dest`.
         *
         * The optional arguments are:
         *
         * `archive`
         * Turns on archive mode. This is the same as passing the *--archive*
         * flag to `rsync`.
         *
         * `deletedest`
         * Delete files at the destination that do not exist at the source.
         *
         * This function depends on the feature "rsync".
         * See also guestfs_session_feature_available().
         * @param src
         * @param dest
         * @param optargs a GuestfsRsync containing optional arguments
         * @returns true on success, false on error
         */
        rsync(src: string, dest: string, optargs?: Rsync | null): boolean;
        /**
         * synchronize host or remote filesystem with filesystem
         *
         * This call may be used to copy or synchronize the filesystem on the host
         * or on a remote computer with the filesystem within libguestfs. This uses
         * the rsync(1) program which uses a fast algorithm that avoids copying
         * files unnecessarily.
         *
         * This call only works if the network is enabled. See
         * guestfs_session_set_network() or the *--network* option to various tools
         * like guestfish(1).
         *
         * Files are copied from the remote server and directory specified by
         * `remote` to the destination directory `dest`.
         *
         * The format of the remote server string is defined by rsync(1). Note that
         * there is no way to supply a password or passphrase so the target must be
         * set up not to require one.
         *
         * The optional arguments are the same as those of guestfs_session_rsync().
         *
         * This function depends on the feature "rsync".
         * See also guestfs_session_feature_available().
         * @param remote
         * @param dest
         * @param optargs a GuestfsRsyncIn containing optional arguments
         * @returns true on success, false on error
         */
        rsync_in(remote: string, dest: string, optargs?: RsyncIn | null): boolean;
        /**
         * synchronize filesystem with host or remote filesystem
         *
         * This call may be used to copy or synchronize the filesystem within
         * libguestfs with a filesystem on the host or on a remote computer. This
         * uses the rsync(1) program which uses a fast algorithm that avoids
         * copying files unnecessarily.
         *
         * This call only works if the network is enabled. See
         * guestfs_session_set_network() or the *--network* option to various tools
         * like guestfish(1).
         *
         * Files are copied from the source directory `src` to the remote server and
         * directory specified by `remote`.
         *
         * The format of the remote server string is defined by rsync(1). Note that
         * there is no way to supply a password or passphrase so the target must be
         * set up not to require one.
         *
         * The optional arguments are the same as those of guestfs_session_rsync().
         *
         * Globbing does not happen on the `src` parameter. In programs which use
         * the API directly you have to expand wildcards yourself (see
         * guestfs_session_glob_expand()). In guestfish you can use the `glob`
         * command (see "glob" in guestfish(1)), for example:
         *
         * <![CDATA[><fs> glob rsync-out /* rsync://remote/]]>
         *
         * This function depends on the feature "rsync".
         * See also guestfs_session_feature_available().
         * @param src
         * @param remote
         * @param optargs a GuestfsRsyncOut containing optional arguments
         * @returns true on success, false on error
         */
        rsync_out(src: string, remote: string, optargs?: RsyncOut | null): boolean;
        /**
         * scrub (securely wipe) a device
         *
         * This command writes patterns over `device` to make data retrieval more
         * difficult.
         *
         * It is an interface to the scrub(1) program. See that manual page for
         * more details.
         *
         * This function depends on the feature "scrub".
         * See also guestfs_session_feature_available().
         * @param device
         * @returns true on success, false on error
         */
        scrub_device(device: string): boolean;
        /**
         * scrub (securely wipe) a file
         *
         * This command writes patterns over a file to make data retrieval more
         * difficult.
         *
         * The file is *removed* after scrubbing.
         *
         * It is an interface to the scrub(1) program. See that manual page for
         * more details.
         *
         * This function depends on the feature "scrub".
         * See also guestfs_session_feature_available().
         * @param file
         * @returns true on success, false on error
         */
        scrub_file(file: string): boolean;
        /**
         * scrub (securely wipe) free space
         *
         * This command creates the directory `dir` and then fills it with files
         * until the filesystem is full, and scrubs the files as for
         * guestfs_session_scrub_file(), and deletes them. The intention is to
         * scrub any free space on the partition containing `dir`.
         *
         * It is an interface to the scrub(1) program. See that manual page for
         * more details.
         *
         * This function depends on the feature "scrub".
         * See also guestfs_session_feature_available().
         * @param dir
         * @returns true on success, false on error
         */
        scrub_freespace(dir: string): boolean;
        /**
         * relabel parts of the filesystem
         *
         * SELinux relabel parts of the filesystem.
         *
         * The `specfile` parameter controls the policy spec file used. You have to
         * parse "/etc/selinux/config" to find the correct SELinux policy and then
         * pass the spec file, usually: "/etc/selinux/" + *selinuxtype* +
         * "/contexts/files/file_contexts".
         *
         * The required `path` parameter is the top level directory where
         * relabelling starts. Normally you should pass `path` as "/" to relabel the
         * whole guest filesystem.
         *
         * The optional `force` boolean controls whether the context is reset for
         * customizable files, and also whether the user, role and range parts of
         * the file context is changed.
         *
         * This function depends on the feature "selinuxrelabel".
         * See also guestfs_session_feature_available().
         * @param specfile
         * @param path
         * @param optargs a GuestfsSelinuxRelabel containing optional arguments
         * @returns true on success, false on error
         */
        selinux_relabel(specfile: string, path: string, optargs?: SelinuxRelabel | null): boolean;
        /**
         * add options to kernel command line
         *
         * This function is used to add additional options to the libguestfs
         * appliance kernel command line.
         *
         * The default is `NULL` unless overridden by setting `LIBGUESTFS_APPEND`
         * environment variable.
         *
         * Setting `append` to `NULL` means *no* additional options are passed
         * (libguestfs always adds a few of its own).
         * @param append
         * @returns true on success, false on error
         */
        set_append(append?: string | null): boolean;
        /**
         * set the backend
         *
         * Set the method that libguestfs uses to connect to the backend guestfsd
         * daemon.
         *
         * See "BACKEND" in guestfs(3).
         * @param backend
         * @returns true on success, false on error
         */
        set_attach_method(backend: string): boolean;
        /**
         * set autosync mode
         *
         * If `autosync` is true, this enables autosync. Libguestfs will make a best
         * effort attempt to make filesystems consistent and synchronized when the
         * handle is closed (also if the program exits without closing handles).
         *
         * This is enabled by default (since libguestfs 1.5.24, previously it was
         * disabled by default).
         * @param autosync
         * @returns true on success, false on error
         */
        set_autosync(autosync: boolean): boolean;
        /**
         * set the backend
         *
         * Set the method that libguestfs uses to connect to the backend guestfsd
         * daemon.
         *
         * This handle property was previously called the "attach method".
         *
         * See "BACKEND" in guestfs(3).
         * @param backend
         * @returns true on success, false on error
         */
        set_backend(backend: string): boolean;
        /**
         * set a single per-backend settings string
         *
         * Append "name=value" to the backend settings string list. However if a
         * string already exists matching "name" or beginning with "name=", then
         * that setting is replaced.
         *
         * See "BACKEND" in guestfs(3), "BACKEND SETTINGS" in guestfs(3).
         * @param name
         * @param val
         * @returns true on success, false on error
         */
        set_backend_setting(name: string, val: string): boolean;
        /**
         * replace per-backend settings strings
         *
         * Set a list of zero or more settings which are passed through to the
         * current backend. Each setting is a string which is interpreted in a
         * backend-specific way, or ignored if not understood by the backend.
         *
         * The default value is an empty list, unless the environment variable
         * `LIBGUESTFS_BACKEND_SETTINGS` was set when the handle was created. This
         * environment variable contains a colon-separated list of settings.
         *
         * This call replaces all backend settings. If you want to replace a single
         * backend setting, see guestfs_session_set_backend_setting(). If you want
         * to clear a single backend setting, see
         * guestfs_session_clear_backend_setting().
         *
         * See "BACKEND" in guestfs(3), "BACKEND SETTINGS" in guestfs(3).
         * @param settings an array of strings
         * @returns true on success, false on error
         */
        set_backend_settings(settings: string[]): boolean;
        /**
         * set the appliance cache directory
         *
         * Set the directory used by the handle to store the appliance cache, when
         * using a supermin appliance. The appliance is cached and shared between
         * all handles which have the same effective user ID.
         *
         * The environment variables `LIBGUESTFS_CACHEDIR` and `TMPDIR` control the
         * default value: If `LIBGUESTFS_CACHEDIR` is set, then that is the default.
         * Else if `TMPDIR` is set, then that is the default. Else /var/tmp is the
         * default.
         * @param cachedir
         * @returns true on success, false on error
         */
        set_cachedir(cachedir?: string | null): boolean;
        /**
         * enable or disable direct appliance mode
         *
         * If the direct appliance mode flag is enabled, then stdin and stdout are
         * passed directly through to the appliance once it is launched.
         *
         * One consequence of this is that log messages aren't caught by the
         * library and handled by guestfs_session_set_log_message_callback(), but
         * go straight to stdout.
         *
         * You probably don't want to use this unless you know what you are doing.
         *
         * The default is disabled.
         * @param direct
         * @returns true on success, false on error
         */
        set_direct(direct: boolean): boolean;
        /**
         * set ext2 file attributes of a file
         *
         * This sets or clears the file attributes `attrs` associated with the inode
         * file.
         *
         * `attrs` is a string of characters representing file attributes. See
         * guestfs_session_get_e2attrs() for a list of possible attributes. Not all
         * attributes can be changed.
         *
         * If optional boolean `clear` is not present or false, then the `attrs`
         * listed are set in the inode.
         *
         * If `clear` is true, then the `attrs` listed are cleared in the inode.
         *
         * In both cases, other attributes not present in the `attrs` string are
         * left unchanged.
         *
         * These attributes are only present when the file is located on an
         * ext2/3/4 filesystem. Using this call on other filesystem types will
         * result in an error.
         * @param file
         * @param attrs
         * @param optargs a GuestfsSetE2attrs containing optional arguments
         * @returns true on success, false on error
         */
        set_e2attrs(file: string, attrs: string, optargs?: SetE2attrs | null): boolean;
        /**
         * set ext2 file generation of a file
         *
         * This sets the ext2 file generation of a file.
         *
         * See guestfs_session_get_e2generation().
         * @param file
         * @param generation
         * @returns true on success, false on error
         */
        set_e2generation(file: string, generation: number): boolean;
        /**
         * set the ext2/3/4 filesystem label
         *
         * This sets the ext2/3/4 filesystem label of the filesystem on `device` to
         * `label`. Filesystem labels are limited to 16 characters.
         *
         * You can use either guestfs_session_tune2fs_l() or
         * guestfs_session_get_e2label() to return the existing label on a
         * filesystem.
         * @param device
         * @param label
         * @returns true on success, false on error
         */
        set_e2label(device: string, label: string): boolean;
        /**
         * set the ext2/3/4 filesystem UUID
         *
         * This sets the ext2/3/4 filesystem UUID of the filesystem on `device` to
         * `uuid`. The format of the UUID and alternatives such as `clear,` `random`
         * and `time` are described in the tune2fs(8) manpage.
         *
         * You can use guestfs_session_vfs_uuid() to return the existing UUID of a
         * filesystem.
         * @param device
         * @param uuid
         * @returns true on success, false on error
         */
        set_e2uuid(device: string, uuid: string): boolean;
        /**
         * set the hypervisor binary
         *
         * Set the hypervisor binary that we will use. The hypervisor depends on
         * the backend, but is usually the location of the qemu/KVM hypervisor.
         *
         * The default is chosen when the library was compiled by the configure
         * script.
         *
         * You can also override this by setting the `LIBGUESTFS_HV` environment
         * variable.
         *
         * Note that you should call this function as early as possible after
         * creating the handle. This is because some pre-launch operations depend
         * on testing qemu features (by running "qemu -help"). If the qemu binary
         * changes, we don't retest features, and so you might see inconsistent
         * results. Using the environment variable `LIBGUESTFS_HV` is safest of all
         * since that picks the qemu binary at the same time as the handle is
         * created.
         * @param hv
         * @returns true on success, false on error
         */
        set_hv(hv: string): boolean;
        /**
         * set the handle identifier
         *
         * This is an informative string which the caller may optionally set in the
         * handle. It is printed in various places, allowing the current handle to
         * be identified in debugging output.
         *
         * One important place is when tracing is enabled. If the identifier string
         * is not an empty string, then trace messages change from this:
         *
         * <![CDATA[libguestfs: trace: get_tmpdir]]>
         *
         * <![CDATA[libguestfs: trace: get_tmpdir = "/tmp"]]>
         *
         * to this:
         *
         * <![CDATA[libguestfs: trace: ID: get_tmpdir]]>
         *
         * <![CDATA[libguestfs: trace: ID: get_tmpdir = "/tmp"]]>
         *
         * where `ID` is the identifier string set by this call.
         *
         * The identifier must only contain alphanumeric ASCII characters,
         * underscore and minus sign. The default is the empty string.
         *
         * See also guestfs_session_set_program(), guestfs_session_set_trace(),
         * guestfs_session_get_identifier().
         * @param identifier
         * @returns true on success, false on error
         */
        set_identifier(identifier: string): boolean;
        /**
         * set filesystem label
         *
         * Set the filesystem label on `mountable` to `label`.
         *
         * Only some filesystem types support labels, and libguestfs supports
         * setting labels on only a subset of these.
         *
         * ext2, ext3, ext4
         * Labels are limited to 16 bytes.
         *
         * NTFS
         * Labels are limited to 128 unicode characters.
         *
         * XFS The label is limited to 12 bytes. The filesystem must not be mounted
         * when trying to set the label.
         *
         * btrfs
         * The label is limited to 255 bytes and some characters are not
         * allowed. Setting the label on a btrfs subvolume will set the label
         * on its parent filesystem. The filesystem must not be mounted when
         * trying to set the label.
         *
         * fat The label is limited to 11 bytes.
         *
         * swap
         * The label is limited to 16 bytes.
         *
         * If there is no support for changing the label for the type of the
         * specified filesystem, set_label will fail and set errno as ENOTSUP.
         *
         * To read the label on a filesystem, call guestfs_session_vfs_label().
         * @param mountable
         * @param label
         * @returns true on success, false on error
         */
        set_label(mountable: string, label: string): boolean;
        /**
         * pass requested credential back to libvirt
         *
         * After requesting the `index'`th credential from the user, call this
         * function to pass the answer back to libvirt.
         *
         * See "LIBVIRT AUTHENTICATION" in guestfs(3) for documentation and example
         * code.
         * @param index
         * @param cred an array of binary data
         * @returns true on success, false on error
         */
        set_libvirt_requested_credential(index: number, cred: Uint8Array | string): boolean;
        /**
         * set libvirt credentials supported by calling program
         *
         * Call this function before setting an event handler for
         * `GUESTFS_EVENT_LIBVIRT_AUTH,` to supply the list of credential types that
         * the program knows how to process.
         *
         * The `creds` list must be a non-empty list of strings. Possible strings
         * are:
         *
         * `username`
         * `authname`
         * `language`
         * `cnonce`
         * `passphrase`
         * `echoprompt`
         * `noechoprompt`
         * `realm`
         * `external`
         *
         * See libvirt documentation for the meaning of these credential types.
         *
         * See "LIBVIRT AUTHENTICATION" in guestfs(3) for documentation and example
         * code.
         * @param creds an array of strings
         * @returns true on success, false on error
         */
        set_libvirt_supported_credentials(creds: string[]): boolean;
        /**
         * set memory allocated to the hypervisor
         *
         * This sets the memory size in megabytes allocated to the hypervisor. This
         * only has any effect if called before guestfs_session_launch().
         *
         * You can also change this by setting the environment variable
         * `LIBGUESTFS_MEMSIZE` before the handle is created.
         *
         * For more information on the architecture of libguestfs, see guestfs(3).
         * @param memsize
         * @returns true on success, false on error
         */
        set_memsize(memsize: number): boolean;
        /**
         * set enable network flag
         *
         * If `network` is true, then the network is enabled in the libguestfs
         * appliance. The default is false.
         *
         * This affects whether commands are able to access the network (see
         * "RUNNING COMMANDS" in guestfs(3)).
         *
         * You must call this before calling guestfs_session_launch(), otherwise it
         * has no effect.
         * @param network
         * @returns true on success, false on error
         */
        set_network(network: boolean): boolean;
        /**
         * set the search path
         *
         * Set the path that libguestfs searches for kernel and initrd.img.
         *
         * The default is "$libdir/guestfs" unless overridden by setting
         * `LIBGUESTFS_PATH` environment variable.
         *
         * Setting `path` to `NULL` restores the default path.
         * @param searchpath
         * @returns true on success, false on error
         */
        set_path(searchpath?: string | null): boolean;
        /**
         * set process group flag
         *
         * If `pgroup` is true, child processes are placed into their own process
         * group.
         *
         * The practical upshot of this is that signals like `SIGINT` (from users
         * pressing "^C") won't be received by the child process.
         *
         * The default for this flag is false, because usually you want "^C" to
         * kill the subprocess. Guestfish sets this flag to true when used
         * interactively, so that "^C" can cancel long-running commands gracefully
         * (see guestfs_session_user_cancel()).
         * @param pgroup
         * @returns true on success, false on error
         */
        set_pgroup(pgroup: boolean): boolean;
        /**
         * set the program name
         *
         * Set the program name. This is an informative string which the main
         * program may optionally set in the handle.
         *
         * When the handle is created, the program name in the handle is set to the
         * basename from "argv[0]". The program name can never be `NULL`.
         * @param program
         * @returns true on success, false on error
         */
        set_program(program: string): boolean;
        /**
         * set the hypervisor binary (usually qemu)
         *
         * Set the hypervisor binary (usually qemu) that we will use.
         *
         * The default is chosen when the library was compiled by the configure
         * script.
         *
         * You can also override this by setting the `LIBGUESTFS_HV` environment
         * variable.
         *
         * Setting `hv` to `NULL` restores the default qemu binary.
         *
         * Note that you should call this function as early as possible after
         * creating the handle. This is because some pre-launch operations depend
         * on testing qemu features (by running "qemu -help"). If the qemu binary
         * changes, we don't retest features, and so you might see inconsistent
         * results. Using the environment variable `LIBGUESTFS_HV` is safest of all
         * since that picks the qemu binary at the same time as the handle is
         * created.
         * @param hv
         * @returns true on success, false on error
         */
        set_qemu(hv?: string | null): boolean;
        /**
         * enable or disable the recovery process
         *
         * If this is called with the parameter `false` then
         * guestfs_session_launch() does not create a recovery process. The purpose
         * of the recovery process is to stop runaway hypervisor processes in the
         * case where the main program aborts abruptly.
         *
         * This only has any effect if called before guestfs_session_launch(), and
         * the default is true.
         *
         * About the only time when you would want to disable this is if the main
         * process will fork itself into the background ("daemonize" itself). In
         * this case the recovery process thinks that the main program has
         * disappeared and so kills the hypervisor, which is not very helpful.
         * @param recoveryproc
         * @returns true on success, false on error
         */
        set_recovery_proc(recoveryproc: boolean): boolean;
        /**
         * set SELinux enabled or disabled at appliance boot
         *
         * This sets the selinux flag that is passed to the appliance at boot time.
         * The default is "selinux=0" (disabled).
         *
         * Note that if SELinux is enabled, it is always in Permissive mode
         * ("enforcing=0").
         *
         * For more information on the architecture of libguestfs, see guestfs(3).
         * @param selinux
         * @returns true on success, false on error
         */
        set_selinux(selinux: boolean): boolean;
        /**
         * set number of virtual CPUs in appliance
         *
         * Change the number of virtual CPUs assigned to the appliance. The default
         * is `1`. Increasing this may improve performance, though often it has no
         * effect.
         *
         * This function must be called before guestfs_session_launch().
         * @param smp
         * @returns true on success, false on error
         */
        set_smp(smp: number): boolean;
        /**
         * set the temporary directory
         *
         * Set the directory used by the handle to store temporary files.
         *
         * The environment variables `LIBGUESTFS_TMPDIR` and `TMPDIR` control the
         * default value: If `LIBGUESTFS_TMPDIR` is set, then that is the default.
         * Else if `TMPDIR` is set, then that is the default. Else /tmp is the
         * default.
         * @param tmpdir
         * @returns true on success, false on error
         */
        set_tmpdir(tmpdir?: string | null): boolean;
        /**
         * enable or disable command traces
         *
         * If the command trace flag is set to 1, then libguestfs calls, parameters
         * and return values are traced.
         *
         * If you want to trace C API calls into libguestfs (and other libraries)
         * then possibly a better way is to use the external ltrace(1) command.
         *
         * Command traces are disabled unless the environment variable
         * `LIBGUESTFS_TRACE` is defined and set to `1`.
         *
         * Trace messages are normally sent to `stderr,` unless you register a
         * callback to send them somewhere else (see
         * guestfs_session_set_event_callback()).
         * @param trace
         * @returns true on success, false on error
         */
        set_trace(trace: boolean): boolean;
        /**
         * set the filesystem UUID
         *
         * Set the filesystem UUID on `device` to `uuid`. If this fails and the errno
         * is ENOTSUP, means that there is no support for changing the UUID for the
         * type of the specified filesystem.
         *
         * Only some filesystem types support setting UUIDs.
         *
         * To read the UUID on a filesystem, call guestfs_session_vfs_uuid().
         * @param device
         * @param uuid
         * @returns true on success, false on error
         */
        set_uuid(device: string, uuid: string): boolean;
        /**
         * set a random UUID for the filesystem
         *
         * Set the filesystem UUID on `device` to a random UUID. If this fails and
         * the errno is ENOTSUP, means that there is no support for changing the
         * UUID for the type of the specified filesystem.
         *
         * Only some filesystem types support setting UUIDs.
         *
         * To read the UUID on a filesystem, call guestfs_session_vfs_uuid().
         * @param device
         * @returns true on success, false on error
         */
        set_uuid_random(device: string): boolean;
        /**
         * set verbose mode
         *
         * If `verbose` is true, this turns on verbose messages.
         *
         * Verbose messages are disabled unless the environment variable
         * `LIBGUESTFS_DEBUG` is defined and set to `1`.
         *
         * Verbose messages are normally sent to `stderr,` unless you register a
         * callback to send them somewhere else (see
         * guestfs_session_set_event_callback()).
         * @param verbose
         * @returns true on success, false on error
         */
        set_verbose(verbose: boolean): boolean;
        /**
         * set SELinux security context
         *
         * This sets the SELinux security context of the daemon to the string
         * `context`.
         *
         * See the documentation about SELINUX in guestfs(3).
         *
         * This function depends on the feature "selinux".
         * See also guestfs_session_feature_available().
         * @param context
         * @returns true on success, false on error
         */
        setcon(context: string): boolean;
        /**
         * set extended attribute of a file or directory
         *
         * This call sets the extended attribute named `xattr` of the file `path` to
         * the value `val` (of length `vallen)`. The value is arbitrary 8 bit data.
         *
         * See also: guestfs_session_lsetxattr(), attr(5).
         *
         * This function depends on the feature "linuxxattrs".
         * See also guestfs_session_feature_available().
         * @param xattr
         * @param val
         * @param vallen
         * @param path
         * @returns true on success, false on error
         */
        setxattr(xattr: string, val: string, vallen: number, path: string): boolean;
        /**
         * create partitions on a block device
         *
         * This is a direct interface to the sfdisk(8) program for creating
         * partitions on block devices.
         *
         * `device` should be a block device, for example /dev/sda.
         *
         * `cyls,` `heads` and `sectors` are the number of cylinders, heads and
         * sectors on the device, which are passed directly to sfdisk(8) as the
         * *-C*, *-H* and *-S* parameters. If you pass `0` for any of these, then
         * the corresponding parameter is omitted. Usually for ‘large’ disks, you
         * can just pass `0` for these, but for small (floppy-sized) disks,
         * sfdisk(8) (or rather, the kernel) cannot work out the right geometry and
         * you will need to tell it.
         *
         * `lines` is a list of lines that we feed to sfdisk(8). For more
         * information refer to the sfdisk(8) manpage.
         *
         * To create a single partition occupying the whole disk, you would pass
         * `lines` as a single element list, when the single element being the
         * string "," (comma).
         *
         * See also: guestfs_session_sfdisk_l(), guestfs_session_sfdisk_N(),
         * guestfs_session_part_init()
         * @param device
         * @param cyls
         * @param heads
         * @param sectors
         * @param lines an array of strings
         * @returns true on success, false on error
         */
        sfdisk(device: string, cyls: number, heads: number, sectors: number, lines: string[]): boolean;
        /**
         * create partitions on a block device
         *
         * This is a simplified interface to the guestfs_session_sfdisk() command,
         * where partition sizes are specified in megabytes only (rounded to the
         * nearest cylinder) and you don't need to specify the cyls, heads and
         * sectors parameters which were rarely if ever used anyway.
         *
         * See also: guestfs_session_sfdisk(), the sfdisk(8) manpage and
         * guestfs_session_part_disk()
         * @param device
         * @param lines an array of strings
         * @returns true on success, false on error
         */
        sfdiskM(device: string, lines: string[]): boolean;
        /**
         * modify a single partition on a block device
         *
         * This runs sfdisk(8) option to modify just the single partition `n` (note:
         * `n` counts from 1).
         *
         * For other parameters, see guestfs_session_sfdisk(). You should usually
         * pass `0` for the cyls/heads/sectors parameters.
         *
         * See also: guestfs_session_part_add()
         * @param device
         * @param partnum
         * @param cyls
         * @param heads
         * @param sectors
         * @param line
         * @returns true on success, false on error
         */
        sfdisk_N(device: string, partnum: number, cyls: number, heads: number, sectors: number, line: string): boolean;
        /**
         * display the disk geometry from the partition table
         *
         * This displays the disk geometry of `device` read from the partition
         * table. Especially in the case where the underlying block device has been
         * resized, this can be different from the kernel’s idea of the geometry
         * (see guestfs_session_sfdisk_kernel_geometry()).
         *
         * The result is in human-readable format, and not designed to be parsed.
         * @param device
         * @returns the returned string, or NULL on error
         */
        sfdisk_disk_geometry(device: string): string;
        /**
         * display the kernel geometry
         *
         * This displays the kernel’s idea of the geometry of `device`.
         *
         * The result is in human-readable format, and not designed to be parsed.
         * @param device
         * @returns the returned string, or NULL on error
         */
        sfdisk_kernel_geometry(device: string): string;
        /**
         * display the partition table
         *
         * This displays the partition table on `device,` in the human-readable
         * output of the sfdisk(8) command. It is not intended to be parsed.
         *
         * See also: guestfs_session_part_list()
         * @param device
         * @returns the returned string, or NULL on error
         */
        sfdisk_l(device: string): string;
        /**
         * run a command via the shell
         *
         * This call runs a command from the guest filesystem via the guest’s
         * /bin/sh.
         *
         * This is like guestfs_session_command(), but passes the command to:
         *
         * <![CDATA[/bin/sh -c "command"]]>
         *
         * Depending on the guest’s shell, this usually results in wildcards being
         * expanded, shell expressions being interpolated and so on.
         *
         * All the provisos about guestfs_session_command() apply to this call.
         * @param command
         * @returns the returned string, or NULL on error
         */
        sh(command: string): string;
        /**
         * run a command via the shell returning lines
         *
         * This is the same as guestfs_session_sh(), but splits the result into a
         * list of lines.
         *
         * See also: guestfs_session_command_lines()
         * @param command
         * @returns an array of returned strings, or NULL on error
         */
        sh_lines(command: string): string[];
        /**
         * shutdown the hypervisor
         *
         * This is the opposite of guestfs_session_launch(). It performs an orderly
         * shutdown of the backend process(es). If the autosync flag is set (which
         * is the default) then the disk image is synchronized.
         *
         * If the subprocess exits with an error then this function will return an
         * error, which should *not* be ignored (it may indicate that the disk
         * image could not be written out properly).
         *
         * It is safe to call this multiple times. Extra calls are ignored.
         *
         * This call does *not* close or free up the handle. You still need to call
         * guestfs_session_close() afterwards.
         *
         * guestfs_session_close() will call this if you don't do it explicitly,
         * but note that any errors are ignored in that case.
         * @returns true on success, false on error
         */
        shutdown(): boolean;
        /**
         * sleep for some seconds
         *
         * Sleep for `secs` seconds.
         * @param secs
         * @returns true on success, false on error
         */
        sleep(secs: number): boolean;
        /**
         * get file information
         *
         * Returns file information for the given `path`.
         *
         * This is the same as the stat(2) system call.
         * @param path
         * @returns a Stat object, or NULL on error
         */
        stat(path: string): Stat;
        /**
         * get file information
         *
         * Returns file information for the given `path`.
         *
         * This is the same as the stat(2) system call.
         * @param path
         * @returns a StatNS object, or NULL on error
         */
        statns(path: string): StatNS;
        /**
         * get file system statistics
         *
         * Returns file system statistics for any mounted file system. `path` should
         * be a file or directory in the mounted file system (typically it is the
         * mount point itself, but it doesn't need to be).
         *
         * This is the same as the statvfs(2) system call.
         * @param path
         * @returns a StatVFS object, or NULL on error
         */
        statvfs(path: string): StatVFS;
        /**
         * print the printable strings in a file
         *
         * This runs the strings(1) command on a file and returns the list of
         * printable strings found.
         *
         * The `strings` command has, in the past, had problems with parsing
         * untrusted files. These are mitigated in the current version of
         * libguestfs, but see "CVE-2014-8484" in guestfs(3).
         * @param path
         * @returns an array of returned strings, or NULL on error
         */
        strings(path: string): string[];
        /**
         * print the printable strings in a file
         *
         * This is like the guestfs_session_strings() command, but allows you to
         * specify the encoding of strings that are looked for in the source file
         * `path`.
         *
         * Allowed encodings are:
         *
         * s   Single 7-bit-byte characters like ASCII and the ASCII-compatible
         * parts of ISO-8859-X (this is what guestfs_session_strings() uses).
         *
         * S   Single 8-bit-byte characters.
         *
         * b   16-bit big endian strings such as those encoded in UTF-16BE or
         * UCS-2BE.
         *
         * l (lower case letter L)
         * 16-bit little endian such as UTF-16LE and UCS-2LE. This is useful
         * for examining binaries in Windows guests.
         *
         * B   32-bit big endian such as UCS-4BE.
         *
         * L   32-bit little endian such as UCS-4LE.
         *
         * The returned strings are transcoded to UTF-8.
         *
         * The `strings` command has, in the past, had problems with parsing
         * untrusted files. These are mitigated in the current version of
         * libguestfs, but see "CVE-2014-8484" in guestfs(3).
         * @param encoding
         * @param path
         * @returns an array of returned strings, or NULL on error
         */
        strings_e(encoding: string, path: string): string[];
        /**
         * disable swap on device
         *
         * This command disables the libguestfs appliance swap device or partition
         * named `device`. See guestfs_session_swapon_device().
         * @param device
         * @returns true on success, false on error
         */
        swapoff_device(device: string): boolean;
        /**
         * disable swap on file
         *
         * This command disables the libguestfs appliance swap on file.
         * @param file
         * @returns true on success, false on error
         */
        swapoff_file(file: string): boolean;
        /**
         * disable swap on labeled swap partition
         *
         * This command disables the libguestfs appliance swap on labeled swap
         * partition.
         * @param label
         * @returns true on success, false on error
         */
        swapoff_label(label: string): boolean;
        /**
         * disable swap on swap partition by UUID
         *
         * This command disables the libguestfs appliance swap partition with the
         * given UUID.
         *
         * This function depends on the feature "linuxfsuuid".
         * See also guestfs_session_feature_available().
         * @param uuid
         * @returns true on success, false on error
         */
        swapoff_uuid(uuid: string): boolean;
        /**
         * enable swap on device
         *
         * This command enables the libguestfs appliance to use the swap device or
         * partition named `device`. The increased memory is made available for all
         * commands, for example those run using guestfs_session_command() or
         * guestfs_session_sh().
         *
         * Note that you should not swap to existing guest swap partitions unless
         * you know what you are doing. They may contain hibernation information,
         * or other information that the guest doesn't want you to trash. You also
         * risk leaking information about the host to the guest this way. Instead,
         * attach a new host device to the guest and swap on that.
         * @param device
         * @returns true on success, false on error
         */
        swapon_device(device: string): boolean;
        /**
         * enable swap on file
         *
         * This command enables swap to a file. See guestfs_session_swapon_device()
         * for other notes.
         * @param file
         * @returns true on success, false on error
         */
        swapon_file(file: string): boolean;
        /**
         * enable swap on labeled swap partition
         *
         * This command enables swap to a labeled swap partition. See
         * guestfs_session_swapon_device() for other notes.
         * @param label
         * @returns true on success, false on error
         */
        swapon_label(label: string): boolean;
        /**
         * enable swap on swap partition by UUID
         *
         * This command enables swap to a swap partition with the given UUID. See
         * guestfs_session_swapon_device() for other notes.
         *
         * This function depends on the feature "linuxfsuuid".
         * See also guestfs_session_feature_available().
         * @param uuid
         * @returns true on success, false on error
         */
        swapon_uuid(uuid: string): boolean;
        /**
         * sync disks, writes are flushed through to the disk image
         *
         * This syncs the disk, so that any writes are flushed through to the
         * underlying disk image.
         *
         * You should always call this if you have modified a disk image, before
         * closing the handle.
         * @returns true on success, false on error
         */
        sync(): boolean;
        /**
         * install the SYSLINUX bootloader
         *
         * Install the SYSLINUX bootloader on `device`.
         *
         * The device parameter must be either a whole disk formatted as a FAT
         * filesystem, or a partition formatted as a FAT filesystem. In the latter
         * case, the partition should be marked as "active"
         * (guestfs_session_part_set_bootable()) and a Master Boot Record must be
         * installed (eg. using guestfs_session_pwrite_device()) on the first
         * sector of the whole disk. The SYSLINUX package comes with some suitable
         * Master Boot Records. See the syslinux(1) man page for further
         * information.
         *
         * The optional arguments are:
         *
         * directory
         * Install SYSLINUX in the named subdirectory, instead of in the root
         * directory of the FAT filesystem.
         *
         * Additional configuration can be supplied to SYSLINUX by placing a file
         * called syslinux.cfg on the FAT filesystem, either in the root directory,
         * or under directory if that optional argument is being used. For further
         * information about the contents of this file, see syslinux(1).
         *
         * See also guestfs_session_extlinux().
         *
         * This function depends on the feature "syslinux".
         * See also guestfs_session_feature_available().
         * @param device
         * @param optargs a GuestfsSyslinux containing optional arguments
         * @returns true on success, false on error
         */
        syslinux(device: string, optargs?: Syslinux | null): boolean;
        /**
         * return last 10 lines of a file
         *
         * This command returns up to the last 10 lines of a file as a list of
         * strings.
         * @param path
         * @returns an array of returned strings, or NULL on error
         */
        tail(path: string): string[];
        /**
         * return last N lines of a file
         *
         * If the parameter `nrlines` is a positive number, this returns the last
         * `nrlines` lines of the file `path`.
         *
         * If the parameter `nrlines` is a negative number, this returns lines from
         * the file `path,` starting with the `-nrlines'`th line.
         *
         * If the parameter `nrlines` is zero, this returns an empty list.
         * @param nrlines
         * @param path
         * @returns an array of returned strings, or NULL on error
         */
        tail_n(nrlines: number, path: string): string[];
        /**
         * unpack tarfile to directory
         *
         * This command uploads and unpacks local file `tarfile` into directory.
         *
         * The optional `compress` flag controls compression. If not given, then the
         * input should be an uncompressed tar file. Otherwise one of the following
         * strings may be given to select the compression type of the input file:
         * `compress,` `gzip,` `bzip2`, `xz,` `lzop,` `lzma,` `zstd`. (Note that not all
         * builds of libguestfs will support all of these compression types).
         *
         * The other optional arguments are:
         *
         * `xattrs`
         * If set to true, extended attributes are restored from the tar file.
         *
         * `selinux`
         * If set to true, SELinux contexts are restored from the tar file.
         *
         * `acls`
         * If set to true, POSIX ACLs are restored from the tar file.
         * @param tarfile
         * @param directory
         * @param optargs a GuestfsTarIn containing optional arguments
         * @param cancellable A GCancellable object
         * @returns true on success, false on error
         */
        tar_in(
            tarfile: string,
            directory: string,
            optargs?: TarIn | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * pack directory into tarfile
         *
         * This command packs the contents of directory and downloads it to local
         * file `tarfile`.
         *
         * The optional `compress` flag controls compression. If not given, then the
         * output will be an uncompressed tar file. Otherwise one of the following
         * strings may be given to select the compression type of the output file:
         * `compress,` `gzip,` `bzip2`, `xz,` `lzop,` `lzma,` `zstd`. (Note that not all
         * builds of libguestfs will support all of these compression types).
         *
         * The other optional arguments are:
         *
         * `excludes`
         * A list of wildcards. Files are excluded if they match any of the
         * wildcards.
         *
         * `numericowner`
         * If set to true, the output tar file will contain UID/GID numbers
         * instead of user/group names.
         *
         * `xattrs`
         * If set to true, extended attributes are saved in the output tar.
         *
         * `selinux`
         * If set to true, SELinux contexts are saved in the output tar.
         *
         * `acls`
         * If set to true, POSIX ACLs are saved in the output tar.
         * @param directory
         * @param tarfile
         * @param optargs a GuestfsTarOut containing optional arguments
         * @param cancellable A GCancellable object
         * @returns true on success, false on error
         */
        tar_out(
            directory: string,
            tarfile: string,
            optargs?: TarOut | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * unpack compressed tarball to directory
         *
         * This command uploads and unpacks local file `tarball` (a *gzip
         * compressed* tar file) into directory.
         * @param tarball
         * @param directory
         * @param cancellable A GCancellable object
         * @returns true on success, false on error
         */
        tgz_in(tarball: string, directory: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * pack directory into compressed tarball
         *
         * This command packs the contents of directory and downloads it to local
         * file `tarball`.
         * @param directory
         * @param tarball
         * @param cancellable A GCancellable object
         * @returns true on success, false on error
         */
        tgz_out(directory: string, tarball: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * update file timestamps or create a new file
         *
         * Touch acts like the touch(1) command. It can be used to update the
         * timestamps on a file, or, if the file does not exist, to create a new
         * zero-length file.
         *
         * This command only works on regular files, and will fail on other file
         * types such as directories, symbolic links, block special etc.
         * @param path
         * @returns true on success, false on error
         */
        touch(path: string): boolean;
        /**
         * truncate a file to zero size
         *
         * This command truncates `path` to a zero-length file. The file must exist
         * already.
         * @param path
         * @returns true on success, false on error
         */
        truncate(path: string): boolean;
        /**
         * truncate a file to a particular size
         *
         * This command truncates `path` to size `size` bytes. The file must exist
         * already.
         *
         * If the current file size is less than `size` then the file is extended to
         * the required size with zero bytes. This creates a sparse file (ie. disk
         * blocks are not allocated for the file until you write to it). To create
         * a non-sparse file of zeroes, use guestfs_session_fallocate64() instead.
         * @param path
         * @param size
         * @returns true on success, false on error
         */
        truncate_size(path: string, size: number): boolean;
        /**
         * adjust ext2/ext3/ext4 filesystem parameters
         *
         * This call allows you to adjust various filesystem parameters of an
         * ext2/ext3/ext4 filesystem called `device`.
         *
         * The optional parameters are:
         *
         * `force`
         * Force tune2fs to complete the operation even in the face of errors.
         * This is the same as the tune2fs(8) `-f` option.
         *
         * `maxmountcount`
         * Set the number of mounts after which the filesystem is checked by
         * e2fsck(8). If this is `0` then the number of mounts is disregarded.
         * This is the same as the tune2fs(8) `-c` option.
         *
         * `mountcount`
         * Set the number of times the filesystem has been mounted. This is the
         * same as the tune2fs(8) `-C` option.
         *
         * `errorbehavior`
         * Change the behavior of the kernel code when errors are detected.
         * Possible values currently are: `continue,` `remount-ro,` `panic`. In
         * practice these options don't really make any difference,
         * particularly for write errors.
         *
         * This is the same as the tune2fs(8) `-e` option.
         *
         * `group`
         * Set the group which can use reserved filesystem blocks. This is the
         * same as the tune2fs(8) `-g` option except that it can only be
         * specified as a number.
         *
         * `intervalbetweenchecks`
         * Adjust the maximal time between two filesystem checks (in seconds).
         * If the option is passed as `0` then time-dependent checking is
         * disabled.
         *
         * This is the same as the tune2fs(8) `-i` option.
         *
         * `reservedblockspercentage`
         * Set the percentage of the filesystem which may only be allocated by
         * privileged processes. This is the same as the tune2fs(8) `-m` option.
         *
         * `lastmounteddirectory`
         * Set the last mounted directory. This is the same as the tune2fs(8)
         * `-M` option.
         *
         * `reservedblockscount` Set the number of reserved filesystem blocks. This
         * is the same as the tune2fs(8) `-r` option.
         * `user`
         * Set the user who can use the reserved filesystem blocks. This is the
         * same as the tune2fs(8) `-u` option except that it can only be
         * specified as a number.
         *
         * To get the current values of filesystem parameters, see
         * guestfs_session_tune2fs_l(). For precise details of how tune2fs works,
         * see the tune2fs(8) man page.
         * @param device
         * @param optargs a GuestfsTune2FS containing optional arguments
         * @returns true on success, false on error
         */
        tune2fs(device: string, optargs?: Tune2FS | null): boolean;
        /**
         * get ext2/ext3/ext4 superblock details
         *
         * This returns the contents of the ext2, ext3 or ext4 filesystem
         * superblock on `device`.
         *
         * It is the same as running "tune2fs -l device". See tune2fs(8) manpage
         * for more details. The list of fields returned isn't clearly defined, and
         * depends on both the version of `tune2`fs that libguestfs was built
         * against, and the filesystem itself.
         * @param device
         * @returns a GHashTable of results, or NULL on error
         */
        tune2fs_l(device: string): GLib.HashTable<string, string>;
        /**
         * unpack compressed tarball to directory
         *
         * This command uploads and unpacks local file `tarball` (an *xz compressed*
         * tar file) into directory.
         *
         * This function depends on the feature "xz".
         * See also guestfs_session_feature_available().
         * @param tarball
         * @param directory
         * @param cancellable A GCancellable object
         * @returns true on success, false on error
         */
        txz_in(tarball: string, directory: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * pack directory into compressed tarball
         *
         * This command packs the contents of directory and downloads it to local
         * file `tarball` (as an xz compressed tar archive).
         *
         * This function depends on the feature "xz".
         * See also guestfs_session_feature_available().
         * @param directory
         * @param tarball
         * @param cancellable A GCancellable object
         * @returns true on success, false on error
         */
        txz_out(directory: string, tarball: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * set file mode creation mask (umask)
         *
         * This function sets the mask used for creating new files and device nodes
         * to "mask & 0777".
         *
         * Typical umask values would be `0`22 which creates new files with
         * permissions like "-rw-r--r--" or "-rwxr-xr-x", and `0`02 which creates
         * new files with permissions like "-rw-rw-r--" or "-rwxrwxr-x".
         *
         * The default umask is `0`22. This is important because it means that
         * directories and device nodes will be created with `0`644 or `0`755 mode
         * even if you specify `0`777.
         *
         * See also guestfs_session_get_umask(), umask(2), guestfs_session_mknod(),
         * guestfs_session_mkdir().
         *
         * This call returns the previous umask.
         * @param mask
         * @returns the returned value, or -1 on error
         */
        umask(mask: number): number;
        /**
         * unmount a filesystem
         *
         * This unmounts the given filesystem. The filesystem may be specified
         * either by its mountpoint (path) or the device which contains the
         * filesystem.
         * @param pathordevice
         * @param optargs a GuestfsUmount containing optional arguments
         * @returns true on success, false on error
         */
        umount(pathordevice: string, optargs?: Umount | null): boolean;
        /**
         * unmount all filesystems
         *
         * This unmounts all mounted filesystems.
         *
         * Some internal mounts are not unmounted by this call.
         * @returns true on success, false on error
         */
        umount_all(): boolean;
        /**
         * unmount a locally mounted filesystem
         *
         * If libguestfs is exporting the filesystem on a local mountpoint, then
         * this unmounts it.
         *
         * See "MOUNT LOCAL" in guestfs(3) for full documentation.
         * @param optargs a GuestfsUmountLocal containing optional arguments
         * @returns true on success, false on error
         */
        umount_local(optargs?: UmountLocal | null): boolean;
        /**
         * upload a file from the local machine
         *
         * Upload local file filename to remotefilename on the filesystem.
         *
         * filename can also be a named pipe.
         *
         * See also guestfs_session_download().
         * @param filename
         * @param remotefilename
         * @param cancellable A GCancellable object
         * @returns true on success, false on error
         */
        upload(filename: string, remotefilename: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * upload a file from the local machine with offset
         *
         * Upload local file filename to remotefilename on the filesystem.
         *
         * remotefilename is overwritten starting at the byte `offset` specified.
         * The intention is to overwrite parts of existing files or devices,
         * although if a non-existent file is specified then it is created with a
         * "hole" before `offset`. The size of the data written is implicit in the
         * size of the source filename.
         *
         * Note that there is no limit on the amount of data that can be uploaded
         * with this call, unlike with guestfs_session_pwrite(), and this call
         * always writes the full amount unless an error occurs.
         *
         * See also guestfs_session_upload(), guestfs_session_pwrite().
         * @param filename
         * @param remotefilename
         * @param offset
         * @param cancellable A GCancellable object
         * @returns true on success, false on error
         */
        upload_offset(
            filename: string,
            remotefilename: string,
            offset: number,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * cancel the current upload or download operation
         *
         * This function cancels the current upload or download operation.
         *
         * Unlike most other libguestfs calls, this function is signal safe and
         * thread safe. You can call it from a signal handler or from another
         * thread, without needing to do any locking.
         *
         * The transfer that was in progress (if there is one) will stop shortly
         * afterwards, and will return an error. The errno (see
         * "guestfs_last_errno") is set to `EINTR,` so you can test for this to find
         * out if the operation was cancelled or failed because of another error.
         *
         * No cleanup is performed: for example, if a file was being uploaded then
         * after cancellation there may be a partially uploaded file. It is the
         * caller’s responsibility to clean up if necessary.
         *
         * There are two common places that you might call
         * guestfs_session_user_cancel():
         *
         * In an interactive text-based program, you might call it from a `SIGINT`
         * signal handler so that pressing "^C" cancels the current operation. (You
         * also need to call guestfs_session_set_pgroup() so that child processes
         * don't receive the "^C" signal).
         *
         * In a graphical program, when the main thread is displaying a progress
         * bar with a cancel button, wire up the cancel button to call this
         * function.
         * @returns true on success, false on error
         */
        user_cancel(): boolean;
        /**
         * set timestamp of a file with nanosecond precision
         *
         * This command sets the timestamps of a file with nanosecond precision.
         *
         * `atsecs,` `atnsecs` are the last access time (atime) in secs and
         * nanoseconds from the epoch.
         *
         * `mtsecs,` `mtnsecs` are the last modification time (mtime) in secs and
         * nanoseconds from the epoch.
         *
         * If the *nsecs field contains the special value `-1` then the
         * corresponding timestamp is set to the current time. (The *secs field is
         * ignored in this case).
         *
         * If the *nsecs field contains the special value `-2` then the
         * corresponding timestamp is left unchanged. (The *secs field is ignored
         * in this case).
         * @param path
         * @param atsecs
         * @param atnsecs
         * @param mtsecs
         * @param mtnsecs
         * @returns true on success, false on error
         */
        utimens(path: string, atsecs: number, atnsecs: number, mtsecs: number, mtnsecs: number): boolean;
        /**
         * appliance kernel version
         *
         * This returns the kernel version of the appliance, where this is
         * available. This information is only useful for debugging. Nothing in the
         * returned structure is defined by the API.
         * @returns a UTSName object, or NULL on error
         */
        utsname(): UTSName;
        /**
         * get the library version number
         *
         * Return the libguestfs version number that the program is linked against.
         *
         * Note that because of dynamic linking this is not necessarily the version
         * of libguestfs that you compiled against. You can compile the program,
         * and then at runtime dynamically link against a completely different
         * libguestfs.so library.
         *
         * This call was added in version 1.0.58. In previous versions of
         * libguestfs there was no way to get the version number. From C code you
         * can use dynamic linker functions to find out if this symbol exists (if
         * it doesn't, then it’s an earlier version).
         *
         * The call returns a structure with four elements. The first three
         * (`major,` `minor` and `release)` are numbers and correspond to the usual
         * version triplet. The fourth element (`extra)` is a string and is normally
         * empty, but may be used for distro-specific information.
         *
         * To construct the original version string: "$major.$minor.$release$extra"
         *
         * See also: "LIBGUESTFS VERSION NUMBERS" in guestfs(3).
         *
         * *Note:* Don't use this call to test for availability of features. In
         * enterprise distributions we backport features from later versions into
         * earlier versions, making this an unreliable way to test for features.
         * Use guestfs_session_available() or guestfs_session_feature_available()
         * instead.
         * @returns a Version object, or NULL on error
         */
        version(): Version;
        /**
         * get the filesystem label
         *
         * This returns the label of the filesystem on `mountable`.
         *
         * If the filesystem is unlabeled, this returns the empty string.
         *
         * To find a filesystem from the label, use guestfs_session_findfs_label().
         * @param mountable
         * @returns the returned string, or NULL on error
         */
        vfs_label(mountable: string): string;
        /**
         * get minimum filesystem size
         *
         * Get the minimum size of filesystem in bytes. This is the minimum
         * possible size for filesystem shrinking.
         *
         * If getting minimum size of specified filesystem is not supported, this
         * will fail and set errno as ENOTSUP.
         *
         * See also ntfsresize(8), resize2fs(8), btrfs(8), xfs_info(8).
         * @param mountable
         * @returns the returned value, or -1 on error
         */
        vfs_minimum_size(mountable: string): number;
        /**
         * get the Linux VFS type corresponding to a mounted device
         *
         * This command gets the filesystem type corresponding to the filesystem on
         * `mountable`.
         *
         * For most filesystems, the result is the name of the Linux VFS module
         * which would be used to mount this filesystem if you mounted it without
         * specifying the filesystem type. For example a string such as `ext3` or
         * `ntfs`.
         * @param mountable
         * @returns the returned string, or NULL on error
         */
        vfs_type(mountable: string): string;
        /**
         * get the filesystem UUID
         *
         * This returns the filesystem UUID of the filesystem on `mountable`.
         *
         * If the filesystem does not have a UUID, this returns the empty string.
         *
         * To find a filesystem from the UUID, use guestfs_session_findfs_uuid().
         * @param mountable
         * @returns the returned string, or NULL on error
         */
        vfs_uuid(mountable: string): string;
        /**
         * activate or deactivate some volume groups
         *
         * This command activates or (if `activate` is false) deactivates all
         * logical volumes in the listed volume groups `volgroups`.
         *
         * This command is the same as running "vgchange -a y|n volgroups..."
         *
         * Note that if `volgroups` is an empty list then all volume groups are
         * activated or deactivated.
         *
         * This function depends on the feature "lvm2".
         * See also guestfs_session_feature_available().
         * @param activate
         * @param volgroups an array of strings
         * @returns true on success, false on error
         */
        vg_activate(activate: boolean, volgroups: string[]): boolean;
        /**
         * activate or deactivate all volume groups
         *
         * This command activates or (if `activate` is false) deactivates all
         * logical volumes in all volume groups.
         *
         * This command is the same as running "vgchange -a y|n"
         *
         * This function depends on the feature "lvm2".
         * See also guestfs_session_feature_available().
         * @param activate
         * @returns true on success, false on error
         */
        vg_activate_all(activate: boolean): boolean;
        /**
         * generate a new random UUID for a volume group
         *
         * Generate a new random UUID for the volume group `vg`.
         *
         * This function depends on the feature "lvm2".
         * See also guestfs_session_feature_available().
         * @param vg
         * @returns true on success, false on error
         */
        vgchange_uuid(vg: string): boolean;
        /**
         * generate new random UUIDs for all volume groups
         *
         * Generate new random UUIDs for all volume groups.
         *
         * This function depends on the feature "lvm2".
         * See also guestfs_session_feature_available().
         * @returns true on success, false on error
         */
        vgchange_uuid_all(): boolean;
        /**
         * create an LVM volume group
         *
         * This creates an LVM volume group called `volgroup` from the non-empty
         * list of physical volumes `physvols`.
         *
         * This function depends on the feature "lvm2".
         * See also guestfs_session_feature_available().
         * @param volgroup
         * @param physvols an array of strings
         * @returns true on success, false on error
         */
        vgcreate(volgroup: string, physvols: string[]): boolean;
        /**
         * get the LV UUIDs of all LVs in the volume group
         *
         * Given a VG called `vgname,` this returns the UUIDs of all the logical
         * volumes created in this volume group.
         *
         * You can use this along with guestfs_session_lvs() and
         * guestfs_session_lvuuid() calls to associate logical volumes and volume
         * groups.
         *
         * See also guestfs_session_vgpvuuids().
         * @param vgname
         * @returns an array of returned strings, or NULL on error
         */
        vglvuuids(vgname: string): string[];
        /**
         * get volume group metadata
         *
         * `vgname` is an LVM volume group. This command examines the volume group
         * and returns its metadata.
         *
         * Note that the metadata is an internal structure used by LVM, subject to
         * change at any time, and is provided for information only.
         *
         * This function depends on the feature "lvm2".
         * See also guestfs_session_feature_available().
         * @param vgname
         * @returns an array of binary data, or NULL on error
         */
        vgmeta(vgname: string): Uint8Array;
        /**
         * get the PV UUIDs containing the volume group
         *
         * Given a VG called `vgname,` this returns the UUIDs of all the physical
         * volumes that this volume group resides on.
         *
         * You can use this along with guestfs_session_pvs() and
         * guestfs_session_pvuuid() calls to associate physical volumes and volume
         * groups.
         *
         * See also guestfs_session_vglvuuids().
         * @param vgname
         * @returns an array of returned strings, or NULL on error
         */
        vgpvuuids(vgname: string): string[];
        /**
         * remove an LVM volume group
         *
         * Remove an LVM volume group `vgname,` (for example `VG)`.
         *
         * This also forcibly removes all logical volumes in the volume group (if
         * any).
         *
         * This function depends on the feature "lvm2".
         * See also guestfs_session_feature_available().
         * @param vgname
         * @returns true on success, false on error
         */
        vgremove(vgname: string): boolean;
        /**
         * rename an LVM volume group
         *
         * Rename a volume group `volgroup` with the new name `newvolgroup`.
         * @param volgroup
         * @param newvolgroup
         * @returns true on success, false on error
         */
        vgrename(volgroup: string, newvolgroup: string): boolean;
        /**
         * list the LVM volume groups (VGs)
         *
         * List all the volumes groups detected. This is the equivalent of the
         * vgs(8) command.
         *
         * This returns a list of just the volume group names that were detected
         * (eg. `VolGroup0`0).
         *
         * See also guestfs_session_vgs_full().
         *
         * This function depends on the feature "lvm2".
         * See also guestfs_session_feature_available().
         * @returns an array of returned strings, or NULL on error
         */
        vgs(): string[];
        /**
         * list the LVM volume groups (VGs)
         *
         * List all the volumes groups detected. This is the equivalent of the
         * vgs(8) command. The "full" version includes all fields.
         *
         * This function depends on the feature "lvm2".
         * See also guestfs_session_feature_available().
         * @returns an array of VG objects, or NULL on error
         */
        vgs_full(): VG[];
        /**
         * rescan for LVM physical volumes, volume groups and logical volumes
         *
         * This rescans all block devices and rebuilds the list of LVM physical
         * volumes, volume groups and logical volumes.
         * @returns true on success, false on error
         */
        vgscan(): boolean;
        /**
         * get the UUID of a volume group
         *
         * This command returns the UUID of the LVM VG named `vgname`.
         * @param vgname
         * @returns the returned string, or NULL on error
         */
        vguuid(vgname: string): string;
        /**
         * wait until the hypervisor launches (no op)
         *
         * This function is a no op.
         *
         * In versions of the API &lt; 1.0.71 you had to call this function just
         * after calling guestfs_session_launch() to wait for the launch to
         * complete. However this is no longer necessary because
         * guestfs_session_launch() now does the waiting.
         *
         * If you see any calls to this function in code then you can just remove
         * them, unless you want to retain compatibility with older versions of the
         * API.
         * @returns true on success, false on error
         */
        wait_ready(): boolean;
        /**
         * count characters in a file
         *
         * This command counts the characters in a file, using the "wc -c" external
         * command.
         * @param path
         * @returns the returned value, or -1 on error
         */
        wc_c(path: string): number;
        /**
         * count lines in a file
         *
         * This command counts the lines in a file, using the "wc -l" external
         * command.
         * @param path
         * @returns the returned value, or -1 on error
         */
        wc_l(path: string): number;
        /**
         * count words in a file
         *
         * This command counts the words in a file, using the "wc -w" external
         * command.
         * @param path
         * @returns the returned value, or -1 on error
         */
        wc_w(path: string): number;
        /**
         * wipe a filesystem signature from a device
         *
         * This command erases filesystem or RAID signatures from the specified
         * `device` to make the filesystem invisible to libblkid.
         *
         * This does not erase the filesystem itself nor any other data from the
         * `device`.
         *
         * Compare with guestfs_session_zero() which zeroes the first few blocks of
         * a device.
         *
         * This function depends on the feature "wipefs".
         * See also guestfs_session_feature_available().
         * @param device
         * @returns true on success, false on error
         */
        wipefs(device: string): boolean;
        /**
         * create a new file
         *
         * This call creates a file called `path`. The content of the file is the
         * string `content` (which can contain any 8 bit data).
         *
         * See also guestfs_session_write_append().
         * @param path
         * @param content an array of binary data
         * @returns true on success, false on error
         */
        write(path: string, content: Uint8Array | string): boolean;
        /**
         * append content to end of file
         *
         * This call appends `content` to the end of file `path`. If `path` does not
         * exist, then a new file is created.
         *
         * See also guestfs_session_write().
         * @param path
         * @param content an array of binary data
         * @returns true on success, false on error
         */
        write_append(path: string, content: Uint8Array | string): boolean;
        /**
         * create a file
         *
         * This call creates a file called `path`. The contents of the file is the
         * string `content` (which can contain any 8 bit data), with length `size`.
         *
         * As a special case, if `size` is `0` then the length is calculated using
         * `strlen` (so in this case the content cannot contain embedded ASCII
         * NULs).
         *
         * *NB.* Owing to a bug, writing content containing ASCII NUL characters
         * does *not* work, even if the length is specified.
         * @param path
         * @param content
         * @param size
         * @returns true on success, false on error
         */
        write_file(path: string, content: string, size: number): boolean;
        /**
         * change parameters of an XFS filesystem
         *
         * Change the parameters of the XFS filesystem on `device`.
         *
         * Devices that are mounted cannot be modified. Administrators must unmount
         * filesystems before this call can modify parameters.
         *
         * Some of the parameters of a mounted filesystem can be examined and
         * modified using the guestfs_session_xfs_info() and
         * guestfs_session_xfs_growfs() calls.
         *
         * Beginning with XFS version 5, it is no longer possible to modify the
         * lazy-counters setting (ie. `lazycounter` parameter has no effect).
         *
         * This function depends on the feature "xfs".
         * See also guestfs_session_feature_available().
         * @param device
         * @param optargs a GuestfsXfsAdmin containing optional arguments
         * @returns true on success, false on error
         */
        xfs_admin(device: string, optargs?: XfsAdmin | null): boolean;
        /**
         * expand an existing XFS filesystem
         *
         * Grow the XFS filesystem mounted at `path`.
         *
         * The returned struct contains geometry information. Missing fields are
         * returned as `-1` (for numeric fields) or empty string.
         *
         * This function depends on the feature "xfs".
         * See also guestfs_session_feature_available().
         * @param path
         * @param optargs a GuestfsXfsGrowfs containing optional arguments
         * @returns true on success, false on error
         */
        xfs_growfs(path: string, optargs?: XfsGrowfs | null): boolean;
        /**
         * get geometry of XFS filesystem
         *
         * `pathordevice` is a mounted XFS filesystem or a device containing an XFS
         * filesystem. This command returns the geometry of the filesystem.
         *
         * The returned struct contains geometry information. Missing fields are
         * returned as `-1` (for numeric fields) or empty string.
         *
         * This function depends on the feature "xfs".
         * See also guestfs_session_feature_available().
         * @param pathordevice
         * @returns a XFSInfo object, or NULL on error
         */
        xfs_info(pathordevice: string): XFSInfo;
        /**
         * repair an XFS filesystem
         *
         * Repair corrupt or damaged XFS filesystem on `device`.
         *
         * The filesystem is specified using the `device` argument which should be
         * the device name of the disk partition or volume containing the
         * filesystem. If given the name of a block device, `xfs_repair` will
         * attempt to find the raw device associated with the specified block
         * device and will use the raw device instead.
         *
         * Regardless, the filesystem to be repaired must be unmounted, otherwise,
         * the resulting filesystem may be inconsistent or corrupt.
         *
         * The returned status indicates whether filesystem corruption was detected
         * (returns `1`) or was not detected (returns `0`).
         *
         * This function depends on the feature "xfs".
         * See also guestfs_session_feature_available().
         * @param device
         * @param optargs a GuestfsXfsRepair containing optional arguments
         * @returns the returned value, or -1 on error
         */
        xfs_repair(device: string, optargs?: XfsRepair | null): number;
        /**
         * destroy previously loaded yara rules
         *
         * Destroy previously loaded Yara rules in order to free libguestfs
         * resources.
         *
         * This function depends on the feature "libyara".
         * See also guestfs_session_feature_available().
         * @returns true on success, false on error
         */
        yara_destroy(): boolean;
        /**
         * load yara rules within libguestfs
         *
         * Upload a set of Yara rules from local file filename.
         *
         * Yara rules allow to categorize files based on textual or binary patterns
         * within their content. See guestfs_session_yara_scan() to see how to scan
         * files with the loaded rules.
         *
         * Rules can be in binary format, as when compiled with yarac command, or
         * in source code format. In the latter case, the rules will be first
         * compiled and then loaded.
         *
         * Rules in source code format cannot include external files. In such
         * cases, it is recommended to compile them first.
         *
         * Previously loaded rules will be destroyed.
         *
         * This function depends on the feature "libyara".
         * See also guestfs_session_feature_available().
         * @param filename
         * @param cancellable A GCancellable object
         * @returns true on success, false on error
         */
        yara_load(filename: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * scan a file with the loaded yara rules
         *
         * Scan a file with the previously loaded Yara rules.
         *
         * For each matching rule, a `yara_detection` structure is returned.
         *
         * The `yara_detection` structure contains the following fields.
         *
         * `yara_name`
         * Path of the file matching a Yara rule.
         *
         * `yara_rule`
         * Identifier of the Yara rule which matched against the given file.
         *
         * This function depends on the feature "libyara".
         * See also guestfs_session_feature_available().
         * @param path
         * @param cancellable A GCancellable object
         * @returns an array of YaraDetection objects, or NULL on error
         */
        yara_scan(path: string, cancellable?: Gio.Cancellable | null): YaraDetection[];
        /**
         * return lines matching a pattern
         *
         * This calls the external `zegrep` program and returns the matching lines.
         * @param regex
         * @param path
         * @returns an array of returned strings, or NULL on error
         */
        zegrep(regex: string, path: string): string[];
        /**
         * return lines matching a pattern
         *
         * This calls the external "zegrep -i" program and returns the matching
         * lines.
         * @param regex
         * @param path
         * @returns an array of returned strings, or NULL on error
         */
        zegrepi(regex: string, path: string): string[];
        /**
         * write zeroes to the device
         *
         * This command writes zeroes over the first few blocks of `device`.
         *
         * How many blocks are zeroed isn't specified (but it’s *not* enough to
         * securely wipe the device). It should be sufficient to remove any
         * partition tables, filesystem superblocks and so on.
         *
         * If blocks are already zero, then this command avoids writing zeroes.
         * This prevents the underlying device from becoming non-sparse or growing
         * unnecessarily.
         *
         * See also: guestfs_session_zero_device(), guestfs_session_scrub_device(),
         * guestfs_session_is_zero_device()
         * @param device
         * @returns true on success, false on error
         */
        zero(device: string): boolean;
        /**
         * write zeroes to an entire device
         *
         * This command writes zeroes over the entire `device`. Compare with
         * guestfs_session_zero() which just zeroes the first few blocks of a
         * device.
         *
         * If blocks are already zero, then this command avoids writing zeroes.
         * This prevents the underlying device from becoming non-sparse or growing
         * unnecessarily.
         * @param device
         * @returns true on success, false on error
         */
        zero_device(device: string): boolean;
        /**
         * zero free space in a filesystem
         *
         * Zero the free space in the filesystem mounted on directory. The
         * filesystem must be mounted read-write.
         *
         * The filesystem contents are not affected, but any free space in the
         * filesystem is freed.
         *
         * Free space is not "trimmed". You may want to call
         * guestfs_session_fstrim() either as an alternative to this, or after
         * calling this, depending on your requirements.
         * @param directory
         * @returns true on success, false on error
         */
        zero_free_space(directory: string): boolean;
        /**
         * zero unused inodes and disk blocks on ext2/3 filesystem
         *
         * This runs the *zerofree* program on `device`. This program claims to zero
         * unused inodes and disk blocks on an ext2/3 filesystem, thus making it
         * possible to compress the filesystem more effectively.
         *
         * You should not run this program if the filesystem is mounted.
         *
         * It is possible that using this program can damage the filesystem or data
         * on the filesystem.
         *
         * This function depends on the feature "zerofree".
         * See also guestfs_session_feature_available().
         * @param device
         * @returns true on success, false on error
         */
        zerofree(device: string): boolean;
        /**
         * return lines matching a pattern
         *
         * This calls the external `zfgrep` program and returns the matching lines.
         * @param pattern
         * @param path
         * @returns an array of returned strings, or NULL on error
         */
        zfgrep(pattern: string, path: string): string[];
        /**
         * return lines matching a pattern
         *
         * This calls the external "zfgrep -i" program and returns the matching
         * lines.
         * @param pattern
         * @param path
         * @returns an array of returned strings, or NULL on error
         */
        zfgrepi(pattern: string, path: string): string[];
        /**
         * determine file type inside a compressed file
         *
         * This command runs file(1) after first decompressing `path` using `meth`.
         *
         * `meth` must be one of `gzip,` `compress` or `bzip2`.
         *
         * Since 1.0.63, use guestfs_session_file() instead which can now process
         * compressed files.
         * @param meth
         * @param path
         * @returns the returned string, or NULL on error
         */
        zfile(meth: string, path: string): string;
        /**
         * return lines matching a pattern
         *
         * This calls the external zgrep(1) program and returns the matching lines.
         * @param regex
         * @param path
         * @returns an array of returned strings, or NULL on error
         */
        zgrep(regex: string, path: string): string[];
        /**
         * return lines matching a pattern
         *
         * This calls the external "zgrep -i" program and returns the matching
         * lines.
         * @param regex
         * @param path
         * @returns an array of returned strings, or NULL on error
         */
        zgrepi(regex: string, path: string): string[];
    }

    module SetE2attrs {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            clear: Tristate;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_set_e2attrs.
     */
    class SetE2attrs extends GObject.Object {
        static $gtype: GObject.GType<SetE2attrs>;

        // Own properties of Guestfs.SetE2attrs

        /**
         * A boolean.
         */
        get clear(): Tristate;
        set clear(val: Tristate);

        // Constructors of Guestfs.SetE2attrs

        constructor(properties?: Partial<SetE2attrs.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SetE2attrs;
    }

    module Syslinux {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            directory: string;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_syslinux.
     */
    class Syslinux extends GObject.Object {
        static $gtype: GObject.GType<Syslinux>;

        // Own properties of Guestfs.Syslinux

        /**
         * A string.
         */
        get directory(): string;
        set directory(val: string);

        // Constructors of Guestfs.Syslinux

        constructor(properties?: Partial<Syslinux.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Syslinux;
    }

    module TarIn {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            acls: Tristate;
            compress: string;
            selinux: Tristate;
            xattrs: Tristate;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_tar_in.
     */
    class TarIn extends GObject.Object {
        static $gtype: GObject.GType<TarIn>;

        // Own properties of Guestfs.TarIn

        /**
         * A boolean.
         */
        get acls(): Tristate;
        set acls(val: Tristate);
        /**
         * A string.
         */
        get compress(): string;
        set compress(val: string);
        /**
         * A boolean.
         */
        get selinux(): Tristate;
        set selinux(val: Tristate);
        /**
         * A boolean.
         */
        get xattrs(): Tristate;
        set xattrs(val: Tristate);

        // Constructors of Guestfs.TarIn

        constructor(properties?: Partial<TarIn.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TarIn;
    }

    module TarOut {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            acls: Tristate;
            compress: string;
            numericowner: Tristate;
            selinux: Tristate;
            xattrs: Tristate;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_tar_out.
     */
    class TarOut extends GObject.Object {
        static $gtype: GObject.GType<TarOut>;

        // Own properties of Guestfs.TarOut

        /**
         * A boolean.
         */
        get acls(): Tristate;
        set acls(val: Tristate);
        /**
         * A string.
         */
        get compress(): string;
        set compress(val: string);
        /**
         * A boolean.
         */
        get numericowner(): Tristate;
        set numericowner(val: Tristate);
        /**
         * A boolean.
         */
        get selinux(): Tristate;
        set selinux(val: Tristate);
        /**
         * A boolean.
         */
        get xattrs(): Tristate;
        set xattrs(val: Tristate);

        // Constructors of Guestfs.TarOut

        constructor(properties?: Partial<TarOut.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TarOut;
    }

    module Tune2FS {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            errorbehavior: string;
            force: Tristate;
            group: number;
            intervalbetweenchecks: number;
            lastmounteddirectory: string;
            maxmountcount: number;
            mountcount: number;
            reservedblockscount: number;
            reservedblockspercentage: number;
            user: number;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_tune2fs.
     */
    class Tune2FS extends GObject.Object {
        static $gtype: GObject.GType<Tune2FS>;

        // Own properties of Guestfs.Tune2FS

        /**
         * A string.
         */
        get errorbehavior(): string;
        set errorbehavior(val: string);
        /**
         * A boolean.
         */
        get force(): Tristate;
        set force(val: Tristate);
        /**
         * A 64-bit integer.
         */
        get group(): number;
        set group(val: number);
        /**
         * A 32-bit integer.
         */
        get intervalbetweenchecks(): number;
        set intervalbetweenchecks(val: number);
        /**
         * A string.
         */
        get lastmounteddirectory(): string;
        set lastmounteddirectory(val: string);
        /**
         * A 32-bit integer.
         */
        get maxmountcount(): number;
        set maxmountcount(val: number);
        /**
         * A 32-bit integer.
         */
        get mountcount(): number;
        set mountcount(val: number);
        /**
         * A 64-bit integer.
         */
        get reservedblockscount(): number;
        set reservedblockscount(val: number);
        /**
         * A 32-bit integer.
         */
        get reservedblockspercentage(): number;
        set reservedblockspercentage(val: number);
        /**
         * A 64-bit integer.
         */
        get user(): number;
        set user(val: number);

        // Constructors of Guestfs.Tune2FS

        constructor(properties?: Partial<Tune2FS.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Tune2FS;
    }

    module Umount {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            force: Tristate;
            lazyunmount: Tristate;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_umount.
     */
    class Umount extends GObject.Object {
        static $gtype: GObject.GType<Umount>;

        // Own properties of Guestfs.Umount

        /**
         * A boolean.
         */
        get force(): Tristate;
        set force(val: Tristate);
        /**
         * A boolean.
         */
        get lazyunmount(): Tristate;
        set lazyunmount(val: Tristate);

        // Constructors of Guestfs.Umount

        constructor(properties?: Partial<Umount.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Umount;
    }

    module UmountLocal {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            retry: Tristate;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_umount_local.
     */
    class UmountLocal extends GObject.Object {
        static $gtype: GObject.GType<UmountLocal>;

        // Own properties of Guestfs.UmountLocal

        /**
         * A boolean.
         */
        get retry(): Tristate;
        set retry(val: Tristate);

        // Constructors of Guestfs.UmountLocal

        constructor(properties?: Partial<UmountLocal.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): UmountLocal;
    }

    module XfsAdmin {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            extunwritten: Tristate;
            imgfile: Tristate;
            label: string;
            lazycounter: Tristate;
            projid32bit: Tristate;
            uuid: string;
            v2log: Tristate;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_xfs_admin.
     */
    class XfsAdmin extends GObject.Object {
        static $gtype: GObject.GType<XfsAdmin>;

        // Own properties of Guestfs.XfsAdmin

        /**
         * A boolean.
         */
        get extunwritten(): Tristate;
        set extunwritten(val: Tristate);
        /**
         * A boolean.
         */
        get imgfile(): Tristate;
        set imgfile(val: Tristate);
        /**
         * A string.
         */
        get label(): string;
        set label(val: string);
        /**
         * A boolean.
         */
        get lazycounter(): Tristate;
        set lazycounter(val: Tristate);
        /**
         * A boolean.
         */
        get projid32bit(): Tristate;
        set projid32bit(val: Tristate);
        /**
         * A string.
         */
        get uuid(): string;
        set uuid(val: string);
        /**
         * A boolean.
         */
        get v2log(): Tristate;
        set v2log(val: Tristate);

        // Constructors of Guestfs.XfsAdmin

        constructor(properties?: Partial<XfsAdmin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): XfsAdmin;
    }

    module XfsGrowfs {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            datasec: Tristate;
            datasize: number;
            logsec: Tristate;
            logsize: number;
            maxpct: number;
            rtextsize: number;
            rtsec: Tristate;
            rtsize: number;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_xfs_growfs.
     */
    class XfsGrowfs extends GObject.Object {
        static $gtype: GObject.GType<XfsGrowfs>;

        // Own properties of Guestfs.XfsGrowfs

        /**
         * A boolean.
         */
        get datasec(): Tristate;
        set datasec(val: Tristate);
        /**
         * A 64-bit integer.
         */
        get datasize(): number;
        set datasize(val: number);
        /**
         * A boolean.
         */
        get logsec(): Tristate;
        set logsec(val: Tristate);
        /**
         * A 64-bit integer.
         */
        get logsize(): number;
        set logsize(val: number);
        /**
         * A 32-bit integer.
         */
        get maxpct(): number;
        set maxpct(val: number);
        /**
         * A 64-bit integer.
         */
        get rtextsize(): number;
        set rtextsize(val: number);
        /**
         * A boolean.
         */
        get rtsec(): Tristate;
        set rtsec(val: Tristate);
        /**
         * A 64-bit integer.
         */
        get rtsize(): number;
        set rtsize(val: number);

        // Constructors of Guestfs.XfsGrowfs

        constructor(properties?: Partial<XfsGrowfs.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): XfsGrowfs;
    }

    module XfsRepair {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            agstride: number;
            bhashsize: number;
            forcegeometry: Tristate;
            forcelogzero: Tristate;
            ihashsize: number;
            logdev: string;
            maxmem: number;
            nomodify: Tristate;
            noprefetch: Tristate;
            rtdev: string;
        }
    }

    /**
     * An object encapsulating optional arguments for guestfs_session_xfs_repair.
     */
    class XfsRepair extends GObject.Object {
        static $gtype: GObject.GType<XfsRepair>;

        // Own properties of Guestfs.XfsRepair

        /**
         * A 64-bit integer.
         */
        get agstride(): number;
        set agstride(val: number);
        /**
         * A 64-bit integer.
         */
        get bhashsize(): number;
        set bhashsize(val: number);
        /**
         * A boolean.
         */
        get forcegeometry(): Tristate;
        set forcegeometry(val: Tristate);
        /**
         * A boolean.
         */
        get forcelogzero(): Tristate;
        set forcelogzero(val: Tristate);
        /**
         * A 64-bit integer.
         */
        get ihashsize(): number;
        set ihashsize(val: number);
        /**
         * A string.
         */
        get logdev(): string;
        set logdev(val: string);
        /**
         * A 64-bit integer.
         */
        get maxmem(): number;
        set maxmem(val: number);
        /**
         * A boolean.
         */
        get nomodify(): Tristate;
        set nomodify(val: Tristate);
        /**
         * A boolean.
         */
        get noprefetch(): Tristate;
        set noprefetch(val: Tristate);
        /**
         * A string.
         */
        get rtdev(): string;
        set rtdev(val: string);

        // Constructors of Guestfs.XfsRepair

        constructor(properties?: Partial<XfsRepair.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): XfsRepair;
    }

    type AddDomainClass = typeof AddDomain;
    abstract class AddDomainPrivate {
        static $gtype: GObject.GType<AddDomainPrivate>;

        // Constructors of Guestfs.AddDomainPrivate

        _init(...args: any[]): void;
    }

    type AddDriveClass = typeof AddDrive;
    abstract class AddDrivePrivate {
        static $gtype: GObject.GType<AddDrivePrivate>;

        // Constructors of Guestfs.AddDrivePrivate

        _init(...args: any[]): void;
    }

    type AddDriveScratchClass = typeof AddDriveScratch;
    abstract class AddDriveScratchPrivate {
        static $gtype: GObject.GType<AddDriveScratchPrivate>;

        // Constructors of Guestfs.AddDriveScratchPrivate

        _init(...args: any[]): void;
    }

    type AddLibvirtDomClass = typeof AddLibvirtDom;
    abstract class AddLibvirtDomPrivate {
        static $gtype: GObject.GType<AddLibvirtDomPrivate>;

        // Constructors of Guestfs.AddLibvirtDomPrivate

        _init(...args: any[]): void;
    }

    class Application {
        static $gtype: GObject.GType<Application>;

        // Own fields of Guestfs.Application

        app_name: string;
        app_display_name: string;
        app_epoch: number;
        app_version: string;
        app_release: string;
        app_install_path: string;
        app_trans_path: string;
        app_publisher: string;
        app_url: string;
        app_source_package: string;
        app_summary: string;
        app_description: string;

        // Constructors of Guestfs.Application

        constructor(
            properties?: Partial<{
                app_name: string;
                app_display_name: string;
                app_epoch: number;
                app_version: string;
                app_release: string;
                app_install_path: string;
                app_trans_path: string;
                app_publisher: string;
                app_url: string;
                app_source_package: string;
                app_summary: string;
                app_description: string;
            }>,
        );
        _init(...args: any[]): void;
    }

    class Application2 {
        static $gtype: GObject.GType<Application2>;

        // Own fields of Guestfs.Application2

        app2_name: string;
        app2_display_name: string;
        app2_epoch: number;
        app2_version: string;
        app2_release: string;
        app2_arch: string;
        app2_install_path: string;
        app2_trans_path: string;
        app2_publisher: string;
        app2_url: string;
        app2_source_package: string;
        app2_summary: string;
        app2_description: string;
        app2_spare1: string;
        app2_spare2: string;
        app2_spare3: string;
        app2_spare4: string;

        // Constructors of Guestfs.Application2

        constructor(
            properties?: Partial<{
                app2_name: string;
                app2_display_name: string;
                app2_epoch: number;
                app2_version: string;
                app2_release: string;
                app2_arch: string;
                app2_install_path: string;
                app2_trans_path: string;
                app2_publisher: string;
                app2_url: string;
                app2_source_package: string;
                app2_summary: string;
                app2_description: string;
                app2_spare1: string;
                app2_spare2: string;
                app2_spare3: string;
                app2_spare4: string;
            }>,
        );
        _init(...args: any[]): void;
    }

    type AugTransformClass = typeof AugTransform;
    abstract class AugTransformPrivate {
        static $gtype: GObject.GType<AugTransformPrivate>;

        // Constructors of Guestfs.AugTransformPrivate

        _init(...args: any[]): void;
    }

    class BTRFSBalance {
        static $gtype: GObject.GType<BTRFSBalance>;

        // Own fields of Guestfs.BTRFSBalance

        btrfsbalance_status: string;
        btrfsbalance_total: number;
        btrfsbalance_balanced: number;
        btrfsbalance_considered: number;
        btrfsbalance_left: number;

        // Constructors of Guestfs.BTRFSBalance

        constructor(
            properties?: Partial<{
                btrfsbalance_status: string;
                btrfsbalance_total: number;
                btrfsbalance_balanced: number;
                btrfsbalance_considered: number;
                btrfsbalance_left: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    type BTRFSFilesystemDefragmentClass = typeof BTRFSFilesystemDefragment;
    abstract class BTRFSFilesystemDefragmentPrivate {
        static $gtype: GObject.GType<BTRFSFilesystemDefragmentPrivate>;

        // Constructors of Guestfs.BTRFSFilesystemDefragmentPrivate

        _init(...args: any[]): void;
    }

    type BTRFSFilesystemResizeClass = typeof BTRFSFilesystemResize;
    abstract class BTRFSFilesystemResizePrivate {
        static $gtype: GObject.GType<BTRFSFilesystemResizePrivate>;

        // Constructors of Guestfs.BTRFSFilesystemResizePrivate

        _init(...args: any[]): void;
    }

    type BTRFSImageClass = typeof BTRFSImage;
    abstract class BTRFSImagePrivate {
        static $gtype: GObject.GType<BTRFSImagePrivate>;

        // Constructors of Guestfs.BTRFSImagePrivate

        _init(...args: any[]): void;
    }

    class BTRFSQgroup {
        static $gtype: GObject.GType<BTRFSQgroup>;

        // Own fields of Guestfs.BTRFSQgroup

        btrfsqgroup_id: string;
        btrfsqgroup_rfer: number;
        btrfsqgroup_excl: number;

        // Constructors of Guestfs.BTRFSQgroup

        constructor(
            properties?: Partial<{
                btrfsqgroup_id: string;
                btrfsqgroup_rfer: number;
                btrfsqgroup_excl: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    class BTRFSScrub {
        static $gtype: GObject.GType<BTRFSScrub>;

        // Own fields of Guestfs.BTRFSScrub

        btrfsscrub_data_extents_scrubbed: number;
        btrfsscrub_tree_extents_scrubbed: number;
        btrfsscrub_data_bytes_scrubbed: number;
        btrfsscrub_tree_bytes_scrubbed: number;
        btrfsscrub_read_errors: number;
        btrfsscrub_csum_errors: number;
        btrfsscrub_verify_errors: number;
        btrfsscrub_no_csum: number;
        btrfsscrub_csum_discards: number;
        btrfsscrub_super_errors: number;
        btrfsscrub_malloc_errors: number;
        btrfsscrub_uncorrectable_errors: number;
        btrfsscrub_unverified_errors: number;
        btrfsscrub_corrected_errors: number;
        btrfsscrub_last_physical: number;

        // Constructors of Guestfs.BTRFSScrub

        constructor(
            properties?: Partial<{
                btrfsscrub_data_extents_scrubbed: number;
                btrfsscrub_tree_extents_scrubbed: number;
                btrfsscrub_data_bytes_scrubbed: number;
                btrfsscrub_tree_bytes_scrubbed: number;
                btrfsscrub_read_errors: number;
                btrfsscrub_csum_errors: number;
                btrfsscrub_verify_errors: number;
                btrfsscrub_no_csum: number;
                btrfsscrub_csum_discards: number;
                btrfsscrub_super_errors: number;
                btrfsscrub_malloc_errors: number;
                btrfsscrub_uncorrectable_errors: number;
                btrfsscrub_unverified_errors: number;
                btrfsscrub_corrected_errors: number;
                btrfsscrub_last_physical: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    class BTRFSSubvolume {
        static $gtype: GObject.GType<BTRFSSubvolume>;

        // Own fields of Guestfs.BTRFSSubvolume

        btrfssubvolume_id: number;
        btrfssubvolume_top_level_id: number;
        btrfssubvolume_path: string;

        // Constructors of Guestfs.BTRFSSubvolume

        constructor(
            properties?: Partial<{
                btrfssubvolume_id: number;
                btrfssubvolume_top_level_id: number;
                btrfssubvolume_path: string;
            }>,
        );
        _init(...args: any[]): void;
    }

    type BTRFSSubvolumeCreateClass = typeof BTRFSSubvolumeCreate;
    abstract class BTRFSSubvolumeCreatePrivate {
        static $gtype: GObject.GType<BTRFSSubvolumeCreatePrivate>;

        // Constructors of Guestfs.BTRFSSubvolumeCreatePrivate

        _init(...args: any[]): void;
    }

    type BTRFSSubvolumeSnapshotClass = typeof BTRFSSubvolumeSnapshot;
    abstract class BTRFSSubvolumeSnapshotPrivate {
        static $gtype: GObject.GType<BTRFSSubvolumeSnapshotPrivate>;

        // Constructors of Guestfs.BTRFSSubvolumeSnapshotPrivate

        _init(...args: any[]): void;
    }

    type BtrfsFsckClass = typeof BtrfsFsck;
    abstract class BtrfsFsckPrivate {
        static $gtype: GObject.GType<BtrfsFsckPrivate>;

        // Constructors of Guestfs.BtrfsFsckPrivate

        _init(...args: any[]): void;
    }

    type CompressDeviceOutClass = typeof CompressDeviceOut;
    abstract class CompressDeviceOutPrivate {
        static $gtype: GObject.GType<CompressDeviceOutPrivate>;

        // Constructors of Guestfs.CompressDeviceOutPrivate

        _init(...args: any[]): void;
    }

    type CompressOutClass = typeof CompressOut;
    abstract class CompressOutPrivate {
        static $gtype: GObject.GType<CompressOutPrivate>;

        // Constructors of Guestfs.CompressOutPrivate

        _init(...args: any[]): void;
    }

    type CopyAttributesClass = typeof CopyAttributes;
    abstract class CopyAttributesPrivate {
        static $gtype: GObject.GType<CopyAttributesPrivate>;

        // Constructors of Guestfs.CopyAttributesPrivate

        _init(...args: any[]): void;
    }

    type CopyDeviceToDeviceClass = typeof CopyDeviceToDevice;
    abstract class CopyDeviceToDevicePrivate {
        static $gtype: GObject.GType<CopyDeviceToDevicePrivate>;

        // Constructors of Guestfs.CopyDeviceToDevicePrivate

        _init(...args: any[]): void;
    }

    type CopyDeviceToFileClass = typeof CopyDeviceToFile;
    abstract class CopyDeviceToFilePrivate {
        static $gtype: GObject.GType<CopyDeviceToFilePrivate>;

        // Constructors of Guestfs.CopyDeviceToFilePrivate

        _init(...args: any[]): void;
    }

    type CopyFileToDeviceClass = typeof CopyFileToDevice;
    abstract class CopyFileToDevicePrivate {
        static $gtype: GObject.GType<CopyFileToDevicePrivate>;

        // Constructors of Guestfs.CopyFileToDevicePrivate

        _init(...args: any[]): void;
    }

    type CopyFileToFileClass = typeof CopyFileToFile;
    abstract class CopyFileToFilePrivate {
        static $gtype: GObject.GType<CopyFileToFilePrivate>;

        // Constructors of Guestfs.CopyFileToFilePrivate

        _init(...args: any[]): void;
    }

    type CpioOutClass = typeof CpioOut;
    abstract class CpioOutPrivate {
        static $gtype: GObject.GType<CpioOutPrivate>;

        // Constructors of Guestfs.CpioOutPrivate

        _init(...args: any[]): void;
    }

    type CryptsetupOpenClass = typeof CryptsetupOpen;
    abstract class CryptsetupOpenPrivate {
        static $gtype: GObject.GType<CryptsetupOpenPrivate>;

        // Constructors of Guestfs.CryptsetupOpenPrivate

        _init(...args: any[]): void;
    }

    class Dirent {
        static $gtype: GObject.GType<Dirent>;

        // Own fields of Guestfs.Dirent

        ino: number;
        ftyp: number;
        name: string;

        // Constructors of Guestfs.Dirent

        constructor(
            properties?: Partial<{
                ino: number;
                ftyp: number;
                name: string;
            }>,
        );
        _init(...args: any[]): void;
    }

    type DiskCreateClass = typeof DiskCreate;
    abstract class DiskCreatePrivate {
        static $gtype: GObject.GType<DiskCreatePrivate>;

        // Constructors of Guestfs.DiskCreatePrivate

        _init(...args: any[]): void;
    }

    type DownloadBlocksClass = typeof DownloadBlocks;
    abstract class DownloadBlocksPrivate {
        static $gtype: GObject.GType<DownloadBlocksPrivate>;

        // Constructors of Guestfs.DownloadBlocksPrivate

        _init(...args: any[]): void;
    }

    type E2fsckClass = typeof E2fsck;
    abstract class E2fsckPrivate {
        static $gtype: GObject.GType<E2fsckPrivate>;

        // Constructors of Guestfs.E2fsckPrivate

        _init(...args: any[]): void;
    }

    type FstrimClass = typeof Fstrim;
    abstract class FstrimPrivate {
        static $gtype: GObject.GType<FstrimPrivate>;

        // Constructors of Guestfs.FstrimPrivate

        _init(...args: any[]): void;
    }

    type GlobExpandClass = typeof GlobExpand;
    abstract class GlobExpandPrivate {
        static $gtype: GObject.GType<GlobExpandPrivate>;

        // Constructors of Guestfs.GlobExpandPrivate

        _init(...args: any[]): void;
    }

    type GrepClass = typeof Grep;
    abstract class GrepPrivate {
        static $gtype: GObject.GType<GrepPrivate>;

        // Constructors of Guestfs.GrepPrivate

        _init(...args: any[]): void;
    }

    class HivexNode {
        static $gtype: GObject.GType<HivexNode>;

        // Own fields of Guestfs.HivexNode

        hivex_node_h: number;

        // Constructors of Guestfs.HivexNode

        constructor(
            properties?: Partial<{
                hivex_node_h: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    type HivexOpenClass = typeof HivexOpen;
    abstract class HivexOpenPrivate {
        static $gtype: GObject.GType<HivexOpenPrivate>;

        // Constructors of Guestfs.HivexOpenPrivate

        _init(...args: any[]): void;
    }

    class HivexValue {
        static $gtype: GObject.GType<HivexValue>;

        // Own fields of Guestfs.HivexValue

        hivex_value_h: number;

        // Constructors of Guestfs.HivexValue

        constructor(
            properties?: Partial<{
                hivex_value_h: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    class INotifyEvent {
        static $gtype: GObject.GType<INotifyEvent>;

        // Own fields of Guestfs.INotifyEvent

        in_wd: number;
        in_mask: number;
        in_cookie: number;
        in_name: string;

        // Constructors of Guestfs.INotifyEvent

        constructor(
            properties?: Partial<{
                in_wd: number;
                in_mask: number;
                in_cookie: number;
                in_name: string;
            }>,
        );
        _init(...args: any[]): void;
    }

    class ISOInfo {
        static $gtype: GObject.GType<ISOInfo>;

        // Own fields of Guestfs.ISOInfo

        iso_system_id: string;
        iso_volume_id: string;
        iso_volume_space_size: number;
        iso_volume_set_size: number;
        iso_volume_sequence_number: number;
        iso_logical_block_size: number;
        iso_volume_set_id: string;
        iso_publisher_id: string;
        iso_data_preparer_id: string;
        iso_application_id: string;
        iso_copyright_file_id: string;
        iso_abstract_file_id: string;
        iso_bibliographic_file_id: string;
        iso_volume_creation_t: number;
        iso_volume_modification_t: number;
        iso_volume_expiration_t: number;
        iso_volume_effective_t: number;

        // Constructors of Guestfs.ISOInfo

        constructor(
            properties?: Partial<{
                iso_system_id: string;
                iso_volume_id: string;
                iso_volume_space_size: number;
                iso_volume_set_size: number;
                iso_volume_sequence_number: number;
                iso_logical_block_size: number;
                iso_volume_set_id: string;
                iso_publisher_id: string;
                iso_data_preparer_id: string;
                iso_application_id: string;
                iso_copyright_file_id: string;
                iso_abstract_file_id: string;
                iso_bibliographic_file_id: string;
                iso_volume_creation_t: number;
                iso_volume_modification_t: number;
                iso_volume_expiration_t: number;
                iso_volume_effective_t: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    type InspectGetIconClass = typeof InspectGetIcon;
    abstract class InspectGetIconPrivate {
        static $gtype: GObject.GType<InspectGetIconPrivate>;

        // Constructors of Guestfs.InspectGetIconPrivate

        _init(...args: any[]): void;
    }

    class IntBool {
        static $gtype: GObject.GType<IntBool>;

        // Own fields of Guestfs.IntBool

        i: number;
        b: number;

        // Constructors of Guestfs.IntBool

        constructor(
            properties?: Partial<{
                i: number;
                b: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    type InternalTest63OptargsClass = typeof InternalTest63Optargs;
    abstract class InternalTest63OptargsPrivate {
        static $gtype: GObject.GType<InternalTest63OptargsPrivate>;

        // Constructors of Guestfs.InternalTest63OptargsPrivate

        _init(...args: any[]): void;
    }

    type InternalTestClass = typeof InternalTest;
    type InternalTestOnlyOptargsClass = typeof InternalTestOnlyOptargs;
    abstract class InternalTestOnlyOptargsPrivate {
        static $gtype: GObject.GType<InternalTestOnlyOptargsPrivate>;

        // Constructors of Guestfs.InternalTestOnlyOptargsPrivate

        _init(...args: any[]): void;
    }

    abstract class InternalTestPrivate {
        static $gtype: GObject.GType<InternalTestPrivate>;

        // Constructors of Guestfs.InternalTestPrivate

        _init(...args: any[]): void;
    }

    type IsBlockdevClass = typeof IsBlockdev;
    abstract class IsBlockdevPrivate {
        static $gtype: GObject.GType<IsBlockdevPrivate>;

        // Constructors of Guestfs.IsBlockdevPrivate

        _init(...args: any[]): void;
    }

    type IsChardevClass = typeof IsChardev;
    abstract class IsChardevPrivate {
        static $gtype: GObject.GType<IsChardevPrivate>;

        // Constructors of Guestfs.IsChardevPrivate

        _init(...args: any[]): void;
    }

    type IsDirClass = typeof IsDir;
    abstract class IsDirPrivate {
        static $gtype: GObject.GType<IsDirPrivate>;

        // Constructors of Guestfs.IsDirPrivate

        _init(...args: any[]): void;
    }

    type IsFifoClass = typeof IsFifo;
    abstract class IsFifoPrivate {
        static $gtype: GObject.GType<IsFifoPrivate>;

        // Constructors of Guestfs.IsFifoPrivate

        _init(...args: any[]): void;
    }

    type IsFileClass = typeof IsFile;
    abstract class IsFilePrivate {
        static $gtype: GObject.GType<IsFilePrivate>;

        // Constructors of Guestfs.IsFilePrivate

        _init(...args: any[]): void;
    }

    type IsSocketClass = typeof IsSocket;
    abstract class IsSocketPrivate {
        static $gtype: GObject.GType<IsSocketPrivate>;

        // Constructors of Guestfs.IsSocketPrivate

        _init(...args: any[]): void;
    }

    class LV {
        static $gtype: GObject.GType<LV>;

        // Own fields of Guestfs.LV

        lv_name: string;
        lv_uuid: number[];
        lv_attr: string;
        lv_major: number;
        lv_minor: number;
        lv_kernel_major: number;
        lv_kernel_minor: number;
        lv_size: number;
        seg_count: number;
        origin: string;
        snap_percent: number;
        copy_percent: number;
        move_pv: string;
        lv_tags: string;
        mirror_log: string;
        modules: string;

        // Constructors of Guestfs.LV

        constructor(
            properties?: Partial<{
                lv_name: string;
                lv_uuid: number[];
                lv_attr: string;
                lv_major: number;
                lv_minor: number;
                lv_kernel_major: number;
                lv_kernel_minor: number;
                lv_size: number;
                seg_count: number;
                origin: string;
                snap_percent: number;
                copy_percent: number;
                move_pv: string;
                lv_tags: string;
                mirror_log: string;
                modules: string;
            }>,
        );
        _init(...args: any[]): void;
    }

    type MDCreateClass = typeof MDCreate;
    abstract class MDCreatePrivate {
        static $gtype: GObject.GType<MDCreatePrivate>;

        // Constructors of Guestfs.MDCreatePrivate

        _init(...args: any[]): void;
    }

    class MDStat {
        static $gtype: GObject.GType<MDStat>;

        // Own fields of Guestfs.MDStat

        mdstat_device: string;
        mdstat_index: number;
        mdstat_flags: string;

        // Constructors of Guestfs.MDStat

        constructor(
            properties?: Partial<{
                mdstat_device: string;
                mdstat_index: number;
                mdstat_flags: string;
            }>,
        );
        _init(...args: any[]): void;
    }

    type Mke2fsClass = typeof Mke2fs;
    abstract class Mke2fsPrivate {
        static $gtype: GObject.GType<Mke2fsPrivate>;

        // Constructors of Guestfs.Mke2fsPrivate

        _init(...args: any[]): void;
    }

    type MkfsBtrfsClass = typeof MkfsBtrfs;
    abstract class MkfsBtrfsPrivate {
        static $gtype: GObject.GType<MkfsBtrfsPrivate>;

        // Constructors of Guestfs.MkfsBtrfsPrivate

        _init(...args: any[]): void;
    }

    type MkfsClass = typeof Mkfs;
    abstract class MkfsPrivate {
        static $gtype: GObject.GType<MkfsPrivate>;

        // Constructors of Guestfs.MkfsPrivate

        _init(...args: any[]): void;
    }

    type MksquashfsClass = typeof Mksquashfs;
    abstract class MksquashfsPrivate {
        static $gtype: GObject.GType<MksquashfsPrivate>;

        // Constructors of Guestfs.MksquashfsPrivate

        _init(...args: any[]): void;
    }

    type MkswapClass = typeof Mkswap;
    abstract class MkswapPrivate {
        static $gtype: GObject.GType<MkswapPrivate>;

        // Constructors of Guestfs.MkswapPrivate

        _init(...args: any[]): void;
    }

    type MktempClass = typeof Mktemp;
    abstract class MktempPrivate {
        static $gtype: GObject.GType<MktempPrivate>;

        // Constructors of Guestfs.MktempPrivate

        _init(...args: any[]): void;
    }

    type Mount9PClass = typeof Mount9P;
    abstract class Mount9PPrivate {
        static $gtype: GObject.GType<Mount9PPrivate>;

        // Constructors of Guestfs.Mount9PPrivate

        _init(...args: any[]): void;
    }

    type MountLocalClass = typeof MountLocal;
    abstract class MountLocalPrivate {
        static $gtype: GObject.GType<MountLocalPrivate>;

        // Constructors of Guestfs.MountLocalPrivate

        _init(...args: any[]): void;
    }

    type NTFSResizeOptsClass = typeof NTFSResizeOpts;
    abstract class NTFSResizeOptsPrivate {
        static $gtype: GObject.GType<NTFSResizeOptsPrivate>;

        // Constructors of Guestfs.NTFSResizeOptsPrivate

        _init(...args: any[]): void;
    }

    type NtfscloneOutClass = typeof NtfscloneOut;
    abstract class NtfscloneOutPrivate {
        static $gtype: GObject.GType<NtfscloneOutPrivate>;

        // Constructors of Guestfs.NtfscloneOutPrivate

        _init(...args: any[]): void;
    }

    type NtfsfixClass = typeof Ntfsfix;
    abstract class NtfsfixPrivate {
        static $gtype: GObject.GType<NtfsfixPrivate>;

        // Constructors of Guestfs.NtfsfixPrivate

        _init(...args: any[]): void;
    }

    class PV {
        static $gtype: GObject.GType<PV>;

        // Own fields of Guestfs.PV

        pv_name: string;
        pv_uuid: number[];
        pv_fmt: string;
        pv_size: number;
        dev_size: number;
        pv_free: number;
        pv_used: number;
        pv_attr: string;
        pv_pe_count: number;
        pv_pe_alloc_count: number;
        pv_tags: string;
        pe_start: number;
        pv_mda_count: number;
        pv_mda_free: number;

        // Constructors of Guestfs.PV

        constructor(
            properties?: Partial<{
                pv_name: string;
                pv_uuid: number[];
                pv_fmt: string;
                pv_size: number;
                dev_size: number;
                pv_free: number;
                pv_used: number;
                pv_attr: string;
                pv_pe_count: number;
                pv_pe_alloc_count: number;
                pv_tags: string;
                pe_start: number;
                pv_mda_count: number;
                pv_mda_free: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    class Partition {
        static $gtype: GObject.GType<Partition>;

        // Own fields of Guestfs.Partition

        part_num: number;
        part_start: number;
        part_end: number;
        part_size: number;

        // Constructors of Guestfs.Partition

        constructor(
            properties?: Partial<{
                part_num: number;
                part_start: number;
                part_end: number;
                part_size: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    type RemountClass = typeof Remount;
    abstract class RemountPrivate {
        static $gtype: GObject.GType<RemountPrivate>;

        // Constructors of Guestfs.RemountPrivate

        _init(...args: any[]): void;
    }

    type RsyncClass = typeof Rsync;
    type RsyncInClass = typeof RsyncIn;
    abstract class RsyncInPrivate {
        static $gtype: GObject.GType<RsyncInPrivate>;

        // Constructors of Guestfs.RsyncInPrivate

        _init(...args: any[]): void;
    }

    type RsyncOutClass = typeof RsyncOut;
    abstract class RsyncOutPrivate {
        static $gtype: GObject.GType<RsyncOutPrivate>;

        // Constructors of Guestfs.RsyncOutPrivate

        _init(...args: any[]): void;
    }

    abstract class RsyncPrivate {
        static $gtype: GObject.GType<RsyncPrivate>;

        // Constructors of Guestfs.RsyncPrivate

        _init(...args: any[]): void;
    }

    type SelinuxRelabelClass = typeof SelinuxRelabel;
    abstract class SelinuxRelabelPrivate {
        static $gtype: GObject.GType<SelinuxRelabelPrivate>;

        // Constructors of Guestfs.SelinuxRelabelPrivate

        _init(...args: any[]): void;
    }

    type SessionClass = typeof Session;
    class SessionEventParams {
        static $gtype: GObject.GType<SessionEventParams>;

        // Own fields of Guestfs.SessionEventParams

        event: SessionEvent;
        flags: number;
        buf: Uint8Array;
        array: number[];
        array_len: number;

        // Constructors of Guestfs.SessionEventParams

        _init(...args: any[]): void;
    }

    abstract class SessionPrivate {
        static $gtype: GObject.GType<SessionPrivate>;

        // Constructors of Guestfs.SessionPrivate

        _init(...args: any[]): void;
    }

    type SetE2attrsClass = typeof SetE2attrs;
    abstract class SetE2attrsPrivate {
        static $gtype: GObject.GType<SetE2attrsPrivate>;

        // Constructors of Guestfs.SetE2attrsPrivate

        _init(...args: any[]): void;
    }

    class Stat {
        static $gtype: GObject.GType<Stat>;

        // Own fields of Guestfs.Stat

        dev: number;
        ino: number;
        mode: number;
        nlink: number;
        uid: number;
        gid: number;
        rdev: number;
        size: number;
        blksize: number;
        blocks: number;
        atime: number;
        mtime: number;
        ctime: number;

        // Constructors of Guestfs.Stat

        constructor(
            properties?: Partial<{
                dev: number;
                ino: number;
                mode: number;
                nlink: number;
                uid: number;
                gid: number;
                rdev: number;
                size: number;
                blksize: number;
                blocks: number;
                atime: number;
                mtime: number;
                ctime: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    class StatNS {
        static $gtype: GObject.GType<StatNS>;

        // Own fields of Guestfs.StatNS

        st_dev: number;
        st_ino: number;
        st_mode: number;
        st_nlink: number;
        st_uid: number;
        st_gid: number;
        st_rdev: number;
        st_size: number;
        st_blksize: number;
        st_blocks: number;
        st_atime_sec: number;
        st_atime_nsec: number;
        st_mtime_sec: number;
        st_mtime_nsec: number;
        st_ctime_sec: number;
        st_ctime_nsec: number;
        st_spare1: number;
        st_spare2: number;
        st_spare3: number;
        st_spare4: number;
        st_spare5: number;
        st_spare6: number;

        // Constructors of Guestfs.StatNS

        constructor(
            properties?: Partial<{
                st_dev: number;
                st_ino: number;
                st_mode: number;
                st_nlink: number;
                st_uid: number;
                st_gid: number;
                st_rdev: number;
                st_size: number;
                st_blksize: number;
                st_blocks: number;
                st_atime_sec: number;
                st_atime_nsec: number;
                st_mtime_sec: number;
                st_mtime_nsec: number;
                st_ctime_sec: number;
                st_ctime_nsec: number;
                st_spare1: number;
                st_spare2: number;
                st_spare3: number;
                st_spare4: number;
                st_spare5: number;
                st_spare6: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    class StatVFS {
        static $gtype: GObject.GType<StatVFS>;

        // Own fields of Guestfs.StatVFS

        bsize: number;
        frsize: number;
        blocks: number;
        bfree: number;
        bavail: number;
        files: number;
        ffree: number;
        favail: number;
        fsid: number;
        flag: number;
        namemax: number;

        // Constructors of Guestfs.StatVFS

        constructor(
            properties?: Partial<{
                bsize: number;
                frsize: number;
                blocks: number;
                bfree: number;
                bavail: number;
                files: number;
                ffree: number;
                favail: number;
                fsid: number;
                flag: number;
                namemax: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    type SyslinuxClass = typeof Syslinux;
    abstract class SyslinuxPrivate {
        static $gtype: GObject.GType<SyslinuxPrivate>;

        // Constructors of Guestfs.SyslinuxPrivate

        _init(...args: any[]): void;
    }

    class TSKDirent {
        static $gtype: GObject.GType<TSKDirent>;

        // Own fields of Guestfs.TSKDirent

        tsk_inode: number;
        tsk_type: number;
        tsk_size: number;
        tsk_name: string;
        tsk_flags: number;
        tsk_atime_sec: number;
        tsk_atime_nsec: number;
        tsk_mtime_sec: number;
        tsk_mtime_nsec: number;
        tsk_ctime_sec: number;
        tsk_ctime_nsec: number;
        tsk_crtime_sec: number;
        tsk_crtime_nsec: number;
        tsk_nlink: number;
        tsk_link: string;
        tsk_spare1: number;

        // Constructors of Guestfs.TSKDirent

        constructor(
            properties?: Partial<{
                tsk_inode: number;
                tsk_type: number;
                tsk_size: number;
                tsk_name: string;
                tsk_flags: number;
                tsk_atime_sec: number;
                tsk_atime_nsec: number;
                tsk_mtime_sec: number;
                tsk_mtime_nsec: number;
                tsk_ctime_sec: number;
                tsk_ctime_nsec: number;
                tsk_crtime_sec: number;
                tsk_crtime_nsec: number;
                tsk_nlink: number;
                tsk_link: string;
                tsk_spare1: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    type TarInClass = typeof TarIn;
    abstract class TarInPrivate {
        static $gtype: GObject.GType<TarInPrivate>;

        // Constructors of Guestfs.TarInPrivate

        _init(...args: any[]): void;
    }

    type TarOutClass = typeof TarOut;
    abstract class TarOutPrivate {
        static $gtype: GObject.GType<TarOutPrivate>;

        // Constructors of Guestfs.TarOutPrivate

        _init(...args: any[]): void;
    }

    type Tune2FSClass = typeof Tune2FS;
    abstract class Tune2FSPrivate {
        static $gtype: GObject.GType<Tune2FSPrivate>;

        // Constructors of Guestfs.Tune2FSPrivate

        _init(...args: any[]): void;
    }

    class UTSName {
        static $gtype: GObject.GType<UTSName>;

        // Own fields of Guestfs.UTSName

        uts_sysname: string;
        uts_release: string;
        uts_version: string;
        uts_machine: string;

        // Constructors of Guestfs.UTSName

        constructor(
            properties?: Partial<{
                uts_sysname: string;
                uts_release: string;
                uts_version: string;
                uts_machine: string;
            }>,
        );
        _init(...args: any[]): void;
    }

    type UmountClass = typeof Umount;
    type UmountLocalClass = typeof UmountLocal;
    abstract class UmountLocalPrivate {
        static $gtype: GObject.GType<UmountLocalPrivate>;

        // Constructors of Guestfs.UmountLocalPrivate

        _init(...args: any[]): void;
    }

    abstract class UmountPrivate {
        static $gtype: GObject.GType<UmountPrivate>;

        // Constructors of Guestfs.UmountPrivate

        _init(...args: any[]): void;
    }

    class VG {
        static $gtype: GObject.GType<VG>;

        // Own fields of Guestfs.VG

        vg_name: string;
        vg_uuid: number[];
        vg_fmt: string;
        vg_attr: string;
        vg_size: number;
        vg_free: number;
        vg_sysid: string;
        vg_extent_size: number;
        vg_extent_count: number;
        vg_free_count: number;
        max_lv: number;
        max_pv: number;
        pv_count: number;
        lv_count: number;
        snap_count: number;
        vg_seqno: number;
        vg_tags: string;
        vg_mda_count: number;
        vg_mda_free: number;

        // Constructors of Guestfs.VG

        constructor(
            properties?: Partial<{
                vg_name: string;
                vg_uuid: number[];
                vg_fmt: string;
                vg_attr: string;
                vg_size: number;
                vg_free: number;
                vg_sysid: string;
                vg_extent_size: number;
                vg_extent_count: number;
                vg_free_count: number;
                max_lv: number;
                max_pv: number;
                pv_count: number;
                lv_count: number;
                snap_count: number;
                vg_seqno: number;
                vg_tags: string;
                vg_mda_count: number;
                vg_mda_free: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    class Version {
        static $gtype: GObject.GType<Version>;

        // Own fields of Guestfs.Version

        major: number;
        minor: number;
        release: number;
        extra: string;

        // Constructors of Guestfs.Version

        constructor(
            properties?: Partial<{
                major: number;
                minor: number;
                release: number;
                extra: string;
            }>,
        );
        _init(...args: any[]): void;
    }

    class XAttr {
        static $gtype: GObject.GType<XAttr>;

        // Own fields of Guestfs.XAttr

        attrname: string;
        attrval: Uint8Array;

        // Constructors of Guestfs.XAttr

        constructor(
            properties?: Partial<{
                attrname: string;
                attrval: Uint8Array;
            }>,
        );
        _init(...args: any[]): void;
    }

    class XFSInfo {
        static $gtype: GObject.GType<XFSInfo>;

        // Own fields of Guestfs.XFSInfo

        xfs_mntpoint: string;
        xfs_inodesize: number;
        xfs_agcount: number;
        xfs_agsize: number;
        xfs_sectsize: number;
        xfs_attr: number;
        xfs_blocksize: number;
        xfs_datablocks: number;
        xfs_imaxpct: number;
        xfs_sunit: number;
        xfs_swidth: number;
        xfs_dirversion: number;
        xfs_dirblocksize: number;
        xfs_cimode: number;
        xfs_logname: string;
        xfs_logblocksize: number;
        xfs_logblocks: number;
        xfs_logversion: number;
        xfs_logsectsize: number;
        xfs_logsunit: number;
        xfs_lazycount: number;
        xfs_rtname: string;
        xfs_rtextsize: number;
        xfs_rtblocks: number;
        xfs_rtextents: number;

        // Constructors of Guestfs.XFSInfo

        constructor(
            properties?: Partial<{
                xfs_mntpoint: string;
                xfs_inodesize: number;
                xfs_agcount: number;
                xfs_agsize: number;
                xfs_sectsize: number;
                xfs_attr: number;
                xfs_blocksize: number;
                xfs_datablocks: number;
                xfs_imaxpct: number;
                xfs_sunit: number;
                xfs_swidth: number;
                xfs_dirversion: number;
                xfs_dirblocksize: number;
                xfs_cimode: number;
                xfs_logname: string;
                xfs_logblocksize: number;
                xfs_logblocks: number;
                xfs_logversion: number;
                xfs_logsectsize: number;
                xfs_logsunit: number;
                xfs_lazycount: number;
                xfs_rtname: string;
                xfs_rtextsize: number;
                xfs_rtblocks: number;
                xfs_rtextents: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    type XfsAdminClass = typeof XfsAdmin;
    abstract class XfsAdminPrivate {
        static $gtype: GObject.GType<XfsAdminPrivate>;

        // Constructors of Guestfs.XfsAdminPrivate

        _init(...args: any[]): void;
    }

    type XfsGrowfsClass = typeof XfsGrowfs;
    abstract class XfsGrowfsPrivate {
        static $gtype: GObject.GType<XfsGrowfsPrivate>;

        // Constructors of Guestfs.XfsGrowfsPrivate

        _init(...args: any[]): void;
    }

    type XfsRepairClass = typeof XfsRepair;
    abstract class XfsRepairPrivate {
        static $gtype: GObject.GType<XfsRepairPrivate>;

        // Constructors of Guestfs.XfsRepairPrivate

        _init(...args: any[]): void;
    }

    class YaraDetection {
        static $gtype: GObject.GType<YaraDetection>;

        // Own fields of Guestfs.YaraDetection

        yara_name: string;
        yara_rule: string;

        // Constructors of Guestfs.YaraDetection

        constructor(
            properties?: Partial<{
                yara_name: string;
                yara_rule: string;
            }>,
        );
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

export default Guestfs;
// END
