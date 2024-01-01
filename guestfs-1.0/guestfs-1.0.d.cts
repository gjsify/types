
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './guestfs-1.0-ambient.d.ts';
import './guestfs-1.0-import.d.ts';
/**
 * Guestfs-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

/**
 * For more detail on libguestfs events, see "SETTING CALLBACKS TO HANDLE
 * EVENTS" in guestfs(3).
 */
export enum SessionEvent {
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
export enum Tristate {
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
export module AddDomain {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.AddDomain

        /**
         * A boolean.
         */
        allowuuid?: Tristate | null
        /**
         * A string.
         */
        cachemode?: string | null
        /**
         * A boolean.
         */
        copyonread?: Tristate | null
        /**
         * A string.
         */
        discard?: string | null
        /**
         * A string.
         */
        iface?: string | null
        /**
         * A string.
         */
        libvirturi?: string | null
        /**
         * A boolean.
         */
        live?: Tristate | null
        /**
         * A boolean.
         */
        readonly?: Tristate | null
        /**
         * A string.
         */
        readonlydisk?: string | null
    }

}

export interface AddDomain {

    // Own properties of Guestfs-1.0.Guestfs.AddDomain

    /**
     * A boolean.
     */
    allowuuid: Tristate
    /**
     * A string.
     */
    cachemode: string | null
    /**
     * A boolean.
     */
    copyonread: Tristate
    /**
     * A string.
     */
    discard: string | null
    /**
     * A string.
     */
    iface: string | null
    /**
     * A string.
     */
    libvirturi: string | null
    /**
     * A boolean.
     */
    live: Tristate
    /**
     * A boolean.
     */
    readonly: Tristate
    /**
     * A string.
     */
    readonlydisk: string | null

    // Own fields of Guestfs-1.0.Guestfs.AddDomain

    parent: GObject.Object
    priv: AddDomainPrivate

    // Class property signals of Guestfs-1.0.Guestfs.AddDomain

    connect(sigName: "notify::allowuuid", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowuuid", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allowuuid", ...args: any[]): void
    connect(sigName: "notify::cachemode", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cachemode", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cachemode", ...args: any[]): void
    connect(sigName: "notify::copyonread", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::copyonread", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::copyonread", ...args: any[]): void
    connect(sigName: "notify::discard", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::discard", ...args: any[]): void
    connect(sigName: "notify::iface", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::iface", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::iface", ...args: any[]): void
    connect(sigName: "notify::libvirturi", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::libvirturi", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::libvirturi", ...args: any[]): void
    connect(sigName: "notify::live", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::live", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::live", ...args: any[]): void
    connect(sigName: "notify::readonly", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonly", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::readonly", ...args: any[]): void
    connect(sigName: "notify::readonlydisk", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonlydisk", callback: (($obj: AddDomain, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::readonlydisk", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_add_domain.
 * @class 
 */
export class AddDomain extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.AddDomain

    static name: string
    static $gtype: GObject.GType<AddDomain>

    // Constructors of Guestfs-1.0.Guestfs.AddDomain

    constructor(config?: AddDomain.ConstructorProperties) 
    /**
     * Create a new GuestfsAddDomain object
     * @constructor 
     * @returns a new GuestfsAddDomain object
     */
    constructor() 
    /**
     * Create a new GuestfsAddDomain object
     * @constructor 
     * @returns a new GuestfsAddDomain object
     */
    static new(): AddDomain
    _init(config?: AddDomain.ConstructorProperties): void
}

export module AddDrive {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.AddDrive

        /**
         * A string.
         */
        cachemode?: string | null
        /**
         * A boolean.
         */
        copyonread?: Tristate | null
        /**
         * A string.
         */
        discard?: string | null
        /**
         * A string.
         */
        format?: string | null
        /**
         * A string.
         */
        iface?: string | null
        /**
         * A string.
         */
        label?: string | null
        /**
         * A string.
         */
        name?: string | null
        /**
         * A string.
         */
        protocol?: string | null
        /**
         * A boolean.
         */
        readonly?: Tristate | null
        /**
         * A string.
         */
        secret?: string | null
        /**
         * A string.
         */
        username?: string | null
    }

}

export interface AddDrive {

    // Own properties of Guestfs-1.0.Guestfs.AddDrive

    /**
     * A string.
     */
    cachemode: string | null
    /**
     * A boolean.
     */
    copyonread: Tristate
    /**
     * A string.
     */
    discard: string | null
    /**
     * A string.
     */
    format: string | null
    /**
     * A string.
     */
    iface: string | null
    /**
     * A string.
     */
    label: string | null
    /**
     * A string.
     */
    name: string | null
    /**
     * A string.
     */
    protocol: string | null
    /**
     * A boolean.
     */
    readonly: Tristate
    /**
     * A string.
     */
    secret: string | null
    /**
     * A string.
     */
    username: string | null

    // Own fields of Guestfs-1.0.Guestfs.AddDrive

    parent: GObject.Object
    priv: AddDrivePrivate

    // Class property signals of Guestfs-1.0.Guestfs.AddDrive

    connect(sigName: "notify::cachemode", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cachemode", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cachemode", ...args: any[]): void
    connect(sigName: "notify::copyonread", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::copyonread", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::copyonread", ...args: any[]): void
    connect(sigName: "notify::discard", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::discard", ...args: any[]): void
    connect(sigName: "notify::format", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: "notify::iface", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::iface", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::iface", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::protocol", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::protocol", ...args: any[]): void
    connect(sigName: "notify::readonly", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonly", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::readonly", ...args: any[]): void
    connect(sigName: "notify::secret", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::secret", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::secret", ...args: any[]): void
    connect(sigName: "notify::username", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: AddDrive, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::username", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_add_drive.
 * @class 
 */
export class AddDrive extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.AddDrive

    static name: string
    static $gtype: GObject.GType<AddDrive>

    // Constructors of Guestfs-1.0.Guestfs.AddDrive

    constructor(config?: AddDrive.ConstructorProperties) 
    /**
     * Create a new GuestfsAddDrive object
     * @constructor 
     * @returns a new GuestfsAddDrive object
     */
    constructor() 
    /**
     * Create a new GuestfsAddDrive object
     * @constructor 
     * @returns a new GuestfsAddDrive object
     */
    static new(): AddDrive
    _init(config?: AddDrive.ConstructorProperties): void
}

export module AddDriveScratch {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.AddDriveScratch

        /**
         * A string.
         */
        label?: string | null
        /**
         * A string.
         */
        name?: string | null
    }

}

export interface AddDriveScratch {

    // Own properties of Guestfs-1.0.Guestfs.AddDriveScratch

    /**
     * A string.
     */
    label: string | null
    /**
     * A string.
     */
    name: string | null

    // Own fields of Guestfs-1.0.Guestfs.AddDriveScratch

    parent: GObject.Object
    priv: AddDriveScratchPrivate

    // Class property signals of Guestfs-1.0.Guestfs.AddDriveScratch

    connect(sigName: "notify::label", callback: (($obj: AddDriveScratch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: AddDriveScratch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: AddDriveScratch, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AddDriveScratch, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_add_drive_scratch.
 * @class 
 */
export class AddDriveScratch extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.AddDriveScratch

    static name: string
    static $gtype: GObject.GType<AddDriveScratch>

    // Constructors of Guestfs-1.0.Guestfs.AddDriveScratch

    constructor(config?: AddDriveScratch.ConstructorProperties) 
    /**
     * Create a new GuestfsAddDriveScratch object
     * @constructor 
     * @returns a new GuestfsAddDriveScratch object
     */
    constructor() 
    /**
     * Create a new GuestfsAddDriveScratch object
     * @constructor 
     * @returns a new GuestfsAddDriveScratch object
     */
    static new(): AddDriveScratch
    _init(config?: AddDriveScratch.ConstructorProperties): void
}

export module AddLibvirtDom {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.AddLibvirtDom

        /**
         * A string.
         */
        cachemode?: string | null
        /**
         * A boolean.
         */
        copyonread?: Tristate | null
        /**
         * A string.
         */
        discard?: string | null
        /**
         * A string.
         */
        iface?: string | null
        /**
         * A boolean.
         */
        live?: Tristate | null
        /**
         * A boolean.
         */
        readonly?: Tristate | null
        /**
         * A string.
         */
        readonlydisk?: string | null
    }

}

export interface AddLibvirtDom {

    // Own properties of Guestfs-1.0.Guestfs.AddLibvirtDom

    /**
     * A string.
     */
    cachemode: string | null
    /**
     * A boolean.
     */
    copyonread: Tristate
    /**
     * A string.
     */
    discard: string | null
    /**
     * A string.
     */
    iface: string | null
    /**
     * A boolean.
     */
    live: Tristate
    /**
     * A boolean.
     */
    readonly: Tristate
    /**
     * A string.
     */
    readonlydisk: string | null

    // Own fields of Guestfs-1.0.Guestfs.AddLibvirtDom

    parent: GObject.Object
    priv: AddLibvirtDomPrivate

    // Class property signals of Guestfs-1.0.Guestfs.AddLibvirtDom

    connect(sigName: "notify::cachemode", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cachemode", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cachemode", ...args: any[]): void
    connect(sigName: "notify::copyonread", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::copyonread", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::copyonread", ...args: any[]): void
    connect(sigName: "notify::discard", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::discard", ...args: any[]): void
    connect(sigName: "notify::iface", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::iface", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::iface", ...args: any[]): void
    connect(sigName: "notify::live", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::live", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::live", ...args: any[]): void
    connect(sigName: "notify::readonly", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonly", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::readonly", ...args: any[]): void
    connect(sigName: "notify::readonlydisk", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonlydisk", callback: (($obj: AddLibvirtDom, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::readonlydisk", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_add_libvirt_dom.
 * @class 
 */
export class AddLibvirtDom extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.AddLibvirtDom

    static name: string
    static $gtype: GObject.GType<AddLibvirtDom>

    // Constructors of Guestfs-1.0.Guestfs.AddLibvirtDom

    constructor(config?: AddLibvirtDom.ConstructorProperties) 
    /**
     * Create a new GuestfsAddLibvirtDom object
     * @constructor 
     * @returns a new GuestfsAddLibvirtDom object
     */
    constructor() 
    /**
     * Create a new GuestfsAddLibvirtDom object
     * @constructor 
     * @returns a new GuestfsAddLibvirtDom object
     */
    static new(): AddLibvirtDom
    _init(config?: AddLibvirtDom.ConstructorProperties): void
}

export module AugTransform {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.AugTransform

        /**
         * A boolean.
         */
        remove?: Tristate | null
    }

}

export interface AugTransform {

    // Own properties of Guestfs-1.0.Guestfs.AugTransform

    /**
     * A boolean.
     */
    remove: Tristate

    // Own fields of Guestfs-1.0.Guestfs.AugTransform

    parent: GObject.Object
    priv: AugTransformPrivate

    // Class property signals of Guestfs-1.0.Guestfs.AugTransform

    connect(sigName: "notify::remove", callback: (($obj: AugTransform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remove", callback: (($obj: AugTransform, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remove", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_aug_transform.
 * @class 
 */
export class AugTransform extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.AugTransform

    static name: string
    static $gtype: GObject.GType<AugTransform>

    // Constructors of Guestfs-1.0.Guestfs.AugTransform

    constructor(config?: AugTransform.ConstructorProperties) 
    /**
     * Create a new GuestfsAugTransform object
     * @constructor 
     * @returns a new GuestfsAugTransform object
     */
    constructor() 
    /**
     * Create a new GuestfsAugTransform object
     * @constructor 
     * @returns a new GuestfsAugTransform object
     */
    static new(): AugTransform
    _init(config?: AugTransform.ConstructorProperties): void
}

export module BTRFSFilesystemDefragment {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.BTRFSFilesystemDefragment

        /**
         * A string.
         */
        compress?: string | null
        /**
         * A boolean.
         */
        flush?: Tristate | null
    }

}

export interface BTRFSFilesystemDefragment {

    // Own properties of Guestfs-1.0.Guestfs.BTRFSFilesystemDefragment

    /**
     * A string.
     */
    compress: string | null
    /**
     * A boolean.
     */
    flush: Tristate

    // Own fields of Guestfs-1.0.Guestfs.BTRFSFilesystemDefragment

    parent: GObject.Object
    priv: BTRFSFilesystemDefragmentPrivate

    // Class property signals of Guestfs-1.0.Guestfs.BTRFSFilesystemDefragment

    connect(sigName: "notify::compress", callback: (($obj: BTRFSFilesystemDefragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compress", callback: (($obj: BTRFSFilesystemDefragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::compress", ...args: any[]): void
    connect(sigName: "notify::flush", callback: (($obj: BTRFSFilesystemDefragment, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flush", callback: (($obj: BTRFSFilesystemDefragment, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flush", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_btrfs_filesystem_defragment.
 * @class 
 */
export class BTRFSFilesystemDefragment extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.BTRFSFilesystemDefragment

    static name: string
    static $gtype: GObject.GType<BTRFSFilesystemDefragment>

    // Constructors of Guestfs-1.0.Guestfs.BTRFSFilesystemDefragment

    constructor(config?: BTRFSFilesystemDefragment.ConstructorProperties) 
    /**
     * Create a new GuestfsBTRFSFilesystemDefragment object
     * @constructor 
     * @returns a new GuestfsBTRFSFilesystemDefragment object
     */
    constructor() 
    /**
     * Create a new GuestfsBTRFSFilesystemDefragment object
     * @constructor 
     * @returns a new GuestfsBTRFSFilesystemDefragment object
     */
    static new(): BTRFSFilesystemDefragment
    _init(config?: BTRFSFilesystemDefragment.ConstructorProperties): void
}

export module BTRFSFilesystemResize {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.BTRFSFilesystemResize

        /**
         * A 64-bit integer.
         */
        size?: number | null
    }

}

export interface BTRFSFilesystemResize {

    // Own properties of Guestfs-1.0.Guestfs.BTRFSFilesystemResize

    /**
     * A 64-bit integer.
     */
    size: number

    // Own fields of Guestfs-1.0.Guestfs.BTRFSFilesystemResize

    parent: GObject.Object
    priv: BTRFSFilesystemResizePrivate

    // Class property signals of Guestfs-1.0.Guestfs.BTRFSFilesystemResize

    connect(sigName: "notify::size", callback: (($obj: BTRFSFilesystemResize, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: BTRFSFilesystemResize, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_btrfs_filesystem_resize.
 * @class 
 */
export class BTRFSFilesystemResize extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.BTRFSFilesystemResize

    static name: string
    static $gtype: GObject.GType<BTRFSFilesystemResize>

    // Constructors of Guestfs-1.0.Guestfs.BTRFSFilesystemResize

    constructor(config?: BTRFSFilesystemResize.ConstructorProperties) 
    /**
     * Create a new GuestfsBTRFSFilesystemResize object
     * @constructor 
     * @returns a new GuestfsBTRFSFilesystemResize object
     */
    constructor() 
    /**
     * Create a new GuestfsBTRFSFilesystemResize object
     * @constructor 
     * @returns a new GuestfsBTRFSFilesystemResize object
     */
    static new(): BTRFSFilesystemResize
    _init(config?: BTRFSFilesystemResize.ConstructorProperties): void
}

export module BTRFSImage {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.BTRFSImage

        /**
         * A 32-bit integer.
         */
        compresslevel?: number | null
    }

}

export interface BTRFSImage {

    // Own properties of Guestfs-1.0.Guestfs.BTRFSImage

    /**
     * A 32-bit integer.
     */
    compresslevel: number

    // Own fields of Guestfs-1.0.Guestfs.BTRFSImage

    parent: GObject.Object
    priv: BTRFSImagePrivate

    // Class property signals of Guestfs-1.0.Guestfs.BTRFSImage

    connect(sigName: "notify::compresslevel", callback: (($obj: BTRFSImage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compresslevel", callback: (($obj: BTRFSImage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::compresslevel", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_btrfs_image.
 * @class 
 */
export class BTRFSImage extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.BTRFSImage

    static name: string
    static $gtype: GObject.GType<BTRFSImage>

    // Constructors of Guestfs-1.0.Guestfs.BTRFSImage

    constructor(config?: BTRFSImage.ConstructorProperties) 
    /**
     * Create a new GuestfsBTRFSImage object
     * @constructor 
     * @returns a new GuestfsBTRFSImage object
     */
    constructor() 
    /**
     * Create a new GuestfsBTRFSImage object
     * @constructor 
     * @returns a new GuestfsBTRFSImage object
     */
    static new(): BTRFSImage
    _init(config?: BTRFSImage.ConstructorProperties): void
}

export module BTRFSSubvolumeCreate {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.BTRFSSubvolumeCreate

        /**
         * A string.
         */
        qgroupid?: string | null
    }

}

export interface BTRFSSubvolumeCreate {

    // Own properties of Guestfs-1.0.Guestfs.BTRFSSubvolumeCreate

    /**
     * A string.
     */
    qgroupid: string | null

    // Own fields of Guestfs-1.0.Guestfs.BTRFSSubvolumeCreate

    parent: GObject.Object
    priv: BTRFSSubvolumeCreatePrivate

    // Class property signals of Guestfs-1.0.Guestfs.BTRFSSubvolumeCreate

    connect(sigName: "notify::qgroupid", callback: (($obj: BTRFSSubvolumeCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qgroupid", callback: (($obj: BTRFSSubvolumeCreate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::qgroupid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_btrfs_subvolume_create.
 * @class 
 */
export class BTRFSSubvolumeCreate extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.BTRFSSubvolumeCreate

    static name: string
    static $gtype: GObject.GType<BTRFSSubvolumeCreate>

    // Constructors of Guestfs-1.0.Guestfs.BTRFSSubvolumeCreate

    constructor(config?: BTRFSSubvolumeCreate.ConstructorProperties) 
    /**
     * Create a new GuestfsBTRFSSubvolumeCreate object
     * @constructor 
     * @returns a new GuestfsBTRFSSubvolumeCreate object
     */
    constructor() 
    /**
     * Create a new GuestfsBTRFSSubvolumeCreate object
     * @constructor 
     * @returns a new GuestfsBTRFSSubvolumeCreate object
     */
    static new(): BTRFSSubvolumeCreate
    _init(config?: BTRFSSubvolumeCreate.ConstructorProperties): void
}

export module BTRFSSubvolumeSnapshot {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.BTRFSSubvolumeSnapshot

        /**
         * A string.
         */
        qgroupid?: string | null
        /**
         * A boolean.
         */
        ro?: Tristate | null
    }

}

export interface BTRFSSubvolumeSnapshot {

    // Own properties of Guestfs-1.0.Guestfs.BTRFSSubvolumeSnapshot

    /**
     * A string.
     */
    qgroupid: string | null
    /**
     * A boolean.
     */
    ro: Tristate

    // Own fields of Guestfs-1.0.Guestfs.BTRFSSubvolumeSnapshot

    parent: GObject.Object
    priv: BTRFSSubvolumeSnapshotPrivate

    // Class property signals of Guestfs-1.0.Guestfs.BTRFSSubvolumeSnapshot

    connect(sigName: "notify::qgroupid", callback: (($obj: BTRFSSubvolumeSnapshot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qgroupid", callback: (($obj: BTRFSSubvolumeSnapshot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::qgroupid", ...args: any[]): void
    connect(sigName: "notify::ro", callback: (($obj: BTRFSSubvolumeSnapshot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ro", callback: (($obj: BTRFSSubvolumeSnapshot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ro", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_btrfs_subvolume_snapshot.
 * @class 
 */
export class BTRFSSubvolumeSnapshot extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.BTRFSSubvolumeSnapshot

    static name: string
    static $gtype: GObject.GType<BTRFSSubvolumeSnapshot>

    // Constructors of Guestfs-1.0.Guestfs.BTRFSSubvolumeSnapshot

    constructor(config?: BTRFSSubvolumeSnapshot.ConstructorProperties) 
    /**
     * Create a new GuestfsBTRFSSubvolumeSnapshot object
     * @constructor 
     * @returns a new GuestfsBTRFSSubvolumeSnapshot object
     */
    constructor() 
    /**
     * Create a new GuestfsBTRFSSubvolumeSnapshot object
     * @constructor 
     * @returns a new GuestfsBTRFSSubvolumeSnapshot object
     */
    static new(): BTRFSSubvolumeSnapshot
    _init(config?: BTRFSSubvolumeSnapshot.ConstructorProperties): void
}

export module BtrfsFsck {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.BtrfsFsck

        /**
         * A boolean.
         */
        repair?: Tristate | null
        /**
         * A 64-bit integer.
         */
        superblock?: number | null
    }

}

export interface BtrfsFsck {

    // Own properties of Guestfs-1.0.Guestfs.BtrfsFsck

    /**
     * A boolean.
     */
    repair: Tristate
    /**
     * A 64-bit integer.
     */
    superblock: number

    // Own fields of Guestfs-1.0.Guestfs.BtrfsFsck

    parent: GObject.Object
    priv: BtrfsFsckPrivate

    // Class property signals of Guestfs-1.0.Guestfs.BtrfsFsck

    connect(sigName: "notify::repair", callback: (($obj: BtrfsFsck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repair", callback: (($obj: BtrfsFsck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::repair", ...args: any[]): void
    connect(sigName: "notify::superblock", callback: (($obj: BtrfsFsck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::superblock", callback: (($obj: BtrfsFsck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::superblock", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_btrfs_fsck.
 * @class 
 */
export class BtrfsFsck extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.BtrfsFsck

    static name: string
    static $gtype: GObject.GType<BtrfsFsck>

    // Constructors of Guestfs-1.0.Guestfs.BtrfsFsck

    constructor(config?: BtrfsFsck.ConstructorProperties) 
    /**
     * Create a new GuestfsBtrfsFsck object
     * @constructor 
     * @returns a new GuestfsBtrfsFsck object
     */
    constructor() 
    /**
     * Create a new GuestfsBtrfsFsck object
     * @constructor 
     * @returns a new GuestfsBtrfsFsck object
     */
    static new(): BtrfsFsck
    _init(config?: BtrfsFsck.ConstructorProperties): void
}

export module CompressDeviceOut {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.CompressDeviceOut

        /**
         * A 32-bit integer.
         */
        level?: number | null
    }

}

export interface CompressDeviceOut {

    // Own properties of Guestfs-1.0.Guestfs.CompressDeviceOut

    /**
     * A 32-bit integer.
     */
    level: number

    // Own fields of Guestfs-1.0.Guestfs.CompressDeviceOut

    parent: GObject.Object
    priv: CompressDeviceOutPrivate

    // Class property signals of Guestfs-1.0.Guestfs.CompressDeviceOut

    connect(sigName: "notify::level", callback: (($obj: CompressDeviceOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level", callback: (($obj: CompressDeviceOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::level", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_compress_device_out.
 * @class 
 */
export class CompressDeviceOut extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.CompressDeviceOut

    static name: string
    static $gtype: GObject.GType<CompressDeviceOut>

    // Constructors of Guestfs-1.0.Guestfs.CompressDeviceOut

    constructor(config?: CompressDeviceOut.ConstructorProperties) 
    /**
     * Create a new GuestfsCompressDeviceOut object
     * @constructor 
     * @returns a new GuestfsCompressDeviceOut object
     */
    constructor() 
    /**
     * Create a new GuestfsCompressDeviceOut object
     * @constructor 
     * @returns a new GuestfsCompressDeviceOut object
     */
    static new(): CompressDeviceOut
    _init(config?: CompressDeviceOut.ConstructorProperties): void
}

export module CompressOut {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.CompressOut

        /**
         * A 32-bit integer.
         */
        level?: number | null
    }

}

export interface CompressOut {

    // Own properties of Guestfs-1.0.Guestfs.CompressOut

    /**
     * A 32-bit integer.
     */
    level: number

    // Own fields of Guestfs-1.0.Guestfs.CompressOut

    parent: GObject.Object
    priv: CompressOutPrivate

    // Class property signals of Guestfs-1.0.Guestfs.CompressOut

    connect(sigName: "notify::level", callback: (($obj: CompressOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level", callback: (($obj: CompressOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::level", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_compress_out.
 * @class 
 */
export class CompressOut extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.CompressOut

    static name: string
    static $gtype: GObject.GType<CompressOut>

    // Constructors of Guestfs-1.0.Guestfs.CompressOut

    constructor(config?: CompressOut.ConstructorProperties) 
    /**
     * Create a new GuestfsCompressOut object
     * @constructor 
     * @returns a new GuestfsCompressOut object
     */
    constructor() 
    /**
     * Create a new GuestfsCompressOut object
     * @constructor 
     * @returns a new GuestfsCompressOut object
     */
    static new(): CompressOut
    _init(config?: CompressOut.ConstructorProperties): void
}

export module CopyAttributes {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.CopyAttributes

        /**
         * A boolean.
         */
        all?: Tristate | null
        /**
         * A boolean.
         */
        mode?: Tristate | null
        /**
         * A boolean.
         */
        ownership?: Tristate | null
        /**
         * A boolean.
         */
        xattributes?: Tristate | null
    }

}

export interface CopyAttributes {

    // Own properties of Guestfs-1.0.Guestfs.CopyAttributes

    /**
     * A boolean.
     */
    all: Tristate
    /**
     * A boolean.
     */
    mode: Tristate
    /**
     * A boolean.
     */
    ownership: Tristate
    /**
     * A boolean.
     */
    xattributes: Tristate

    // Own fields of Guestfs-1.0.Guestfs.CopyAttributes

    parent: GObject.Object
    priv: CopyAttributesPrivate

    // Class property signals of Guestfs-1.0.Guestfs.CopyAttributes

    connect(sigName: "notify::all", callback: (($obj: CopyAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::all", callback: (($obj: CopyAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::all", ...args: any[]): void
    connect(sigName: "notify::mode", callback: (($obj: CopyAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: CopyAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::ownership", callback: (($obj: CopyAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ownership", callback: (($obj: CopyAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ownership", ...args: any[]): void
    connect(sigName: "notify::xattributes", callback: (($obj: CopyAttributes, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xattributes", callback: (($obj: CopyAttributes, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xattributes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_copy_attributes.
 * @class 
 */
export class CopyAttributes extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.CopyAttributes

    static name: string
    static $gtype: GObject.GType<CopyAttributes>

    // Constructors of Guestfs-1.0.Guestfs.CopyAttributes

    constructor(config?: CopyAttributes.ConstructorProperties) 
    /**
     * Create a new GuestfsCopyAttributes object
     * @constructor 
     * @returns a new GuestfsCopyAttributes object
     */
    constructor() 
    /**
     * Create a new GuestfsCopyAttributes object
     * @constructor 
     * @returns a new GuestfsCopyAttributes object
     */
    static new(): CopyAttributes
    _init(config?: CopyAttributes.ConstructorProperties): void
}

export module CopyDeviceToDevice {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.CopyDeviceToDevice

        /**
         * A boolean.
         */
        append?: Tristate | null
        /**
         * A 64-bit integer.
         */
        destoffset?: number | null
        /**
         * A 64-bit integer.
         */
        size?: number | null
        /**
         * A boolean.
         */
        sparse?: Tristate | null
        /**
         * A 64-bit integer.
         */
        srcoffset?: number | null
    }

}

export interface CopyDeviceToDevice {

    // Own properties of Guestfs-1.0.Guestfs.CopyDeviceToDevice

    /**
     * A boolean.
     */
    append: Tristate
    /**
     * A 64-bit integer.
     */
    destoffset: number
    /**
     * A 64-bit integer.
     */
    size: number
    /**
     * A boolean.
     */
    sparse: Tristate
    /**
     * A 64-bit integer.
     */
    srcoffset: number

    // Own fields of Guestfs-1.0.Guestfs.CopyDeviceToDevice

    parent: GObject.Object
    priv: CopyDeviceToDevicePrivate

    // Class property signals of Guestfs-1.0.Guestfs.CopyDeviceToDevice

    connect(sigName: "notify::append", callback: (($obj: CopyDeviceToDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::append", callback: (($obj: CopyDeviceToDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::append", ...args: any[]): void
    connect(sigName: "notify::destoffset", callback: (($obj: CopyDeviceToDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destoffset", callback: (($obj: CopyDeviceToDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destoffset", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: CopyDeviceToDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: CopyDeviceToDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::sparse", callback: (($obj: CopyDeviceToDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sparse", callback: (($obj: CopyDeviceToDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sparse", ...args: any[]): void
    connect(sigName: "notify::srcoffset", callback: (($obj: CopyDeviceToDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::srcoffset", callback: (($obj: CopyDeviceToDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::srcoffset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_copy_device_to_device.
 * @class 
 */
export class CopyDeviceToDevice extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.CopyDeviceToDevice

    static name: string
    static $gtype: GObject.GType<CopyDeviceToDevice>

    // Constructors of Guestfs-1.0.Guestfs.CopyDeviceToDevice

    constructor(config?: CopyDeviceToDevice.ConstructorProperties) 
    /**
     * Create a new GuestfsCopyDeviceToDevice object
     * @constructor 
     * @returns a new GuestfsCopyDeviceToDevice object
     */
    constructor() 
    /**
     * Create a new GuestfsCopyDeviceToDevice object
     * @constructor 
     * @returns a new GuestfsCopyDeviceToDevice object
     */
    static new(): CopyDeviceToDevice
    _init(config?: CopyDeviceToDevice.ConstructorProperties): void
}

export module CopyDeviceToFile {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.CopyDeviceToFile

        /**
         * A boolean.
         */
        append?: Tristate | null
        /**
         * A 64-bit integer.
         */
        destoffset?: number | null
        /**
         * A 64-bit integer.
         */
        size?: number | null
        /**
         * A boolean.
         */
        sparse?: Tristate | null
        /**
         * A 64-bit integer.
         */
        srcoffset?: number | null
    }

}

export interface CopyDeviceToFile {

    // Own properties of Guestfs-1.0.Guestfs.CopyDeviceToFile

    /**
     * A boolean.
     */
    append: Tristate
    /**
     * A 64-bit integer.
     */
    destoffset: number
    /**
     * A 64-bit integer.
     */
    size: number
    /**
     * A boolean.
     */
    sparse: Tristate
    /**
     * A 64-bit integer.
     */
    srcoffset: number

    // Own fields of Guestfs-1.0.Guestfs.CopyDeviceToFile

    parent: GObject.Object
    priv: CopyDeviceToFilePrivate

    // Class property signals of Guestfs-1.0.Guestfs.CopyDeviceToFile

    connect(sigName: "notify::append", callback: (($obj: CopyDeviceToFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::append", callback: (($obj: CopyDeviceToFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::append", ...args: any[]): void
    connect(sigName: "notify::destoffset", callback: (($obj: CopyDeviceToFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destoffset", callback: (($obj: CopyDeviceToFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destoffset", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: CopyDeviceToFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: CopyDeviceToFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::sparse", callback: (($obj: CopyDeviceToFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sparse", callback: (($obj: CopyDeviceToFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sparse", ...args: any[]): void
    connect(sigName: "notify::srcoffset", callback: (($obj: CopyDeviceToFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::srcoffset", callback: (($obj: CopyDeviceToFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::srcoffset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_copy_device_to_file.
 * @class 
 */
export class CopyDeviceToFile extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.CopyDeviceToFile

    static name: string
    static $gtype: GObject.GType<CopyDeviceToFile>

    // Constructors of Guestfs-1.0.Guestfs.CopyDeviceToFile

    constructor(config?: CopyDeviceToFile.ConstructorProperties) 
    /**
     * Create a new GuestfsCopyDeviceToFile object
     * @constructor 
     * @returns a new GuestfsCopyDeviceToFile object
     */
    constructor() 
    /**
     * Create a new GuestfsCopyDeviceToFile object
     * @constructor 
     * @returns a new GuestfsCopyDeviceToFile object
     */
    static new(): CopyDeviceToFile
    _init(config?: CopyDeviceToFile.ConstructorProperties): void
}

export module CopyFileToDevice {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.CopyFileToDevice

        /**
         * A boolean.
         */
        append?: Tristate | null
        /**
         * A 64-bit integer.
         */
        destoffset?: number | null
        /**
         * A 64-bit integer.
         */
        size?: number | null
        /**
         * A boolean.
         */
        sparse?: Tristate | null
        /**
         * A 64-bit integer.
         */
        srcoffset?: number | null
    }

}

export interface CopyFileToDevice {

    // Own properties of Guestfs-1.0.Guestfs.CopyFileToDevice

    /**
     * A boolean.
     */
    append: Tristate
    /**
     * A 64-bit integer.
     */
    destoffset: number
    /**
     * A 64-bit integer.
     */
    size: number
    /**
     * A boolean.
     */
    sparse: Tristate
    /**
     * A 64-bit integer.
     */
    srcoffset: number

    // Own fields of Guestfs-1.0.Guestfs.CopyFileToDevice

    parent: GObject.Object
    priv: CopyFileToDevicePrivate

    // Class property signals of Guestfs-1.0.Guestfs.CopyFileToDevice

    connect(sigName: "notify::append", callback: (($obj: CopyFileToDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::append", callback: (($obj: CopyFileToDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::append", ...args: any[]): void
    connect(sigName: "notify::destoffset", callback: (($obj: CopyFileToDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destoffset", callback: (($obj: CopyFileToDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destoffset", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: CopyFileToDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: CopyFileToDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::sparse", callback: (($obj: CopyFileToDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sparse", callback: (($obj: CopyFileToDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sparse", ...args: any[]): void
    connect(sigName: "notify::srcoffset", callback: (($obj: CopyFileToDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::srcoffset", callback: (($obj: CopyFileToDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::srcoffset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_copy_file_to_device.
 * @class 
 */
export class CopyFileToDevice extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.CopyFileToDevice

    static name: string
    static $gtype: GObject.GType<CopyFileToDevice>

    // Constructors of Guestfs-1.0.Guestfs.CopyFileToDevice

    constructor(config?: CopyFileToDevice.ConstructorProperties) 
    /**
     * Create a new GuestfsCopyFileToDevice object
     * @constructor 
     * @returns a new GuestfsCopyFileToDevice object
     */
    constructor() 
    /**
     * Create a new GuestfsCopyFileToDevice object
     * @constructor 
     * @returns a new GuestfsCopyFileToDevice object
     */
    static new(): CopyFileToDevice
    _init(config?: CopyFileToDevice.ConstructorProperties): void
}

export module CopyFileToFile {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.CopyFileToFile

        /**
         * A boolean.
         */
        append?: Tristate | null
        /**
         * A 64-bit integer.
         */
        destoffset?: number | null
        /**
         * A 64-bit integer.
         */
        size?: number | null
        /**
         * A boolean.
         */
        sparse?: Tristate | null
        /**
         * A 64-bit integer.
         */
        srcoffset?: number | null
    }

}

export interface CopyFileToFile {

    // Own properties of Guestfs-1.0.Guestfs.CopyFileToFile

    /**
     * A boolean.
     */
    append: Tristate
    /**
     * A 64-bit integer.
     */
    destoffset: number
    /**
     * A 64-bit integer.
     */
    size: number
    /**
     * A boolean.
     */
    sparse: Tristate
    /**
     * A 64-bit integer.
     */
    srcoffset: number

    // Own fields of Guestfs-1.0.Guestfs.CopyFileToFile

    parent: GObject.Object
    priv: CopyFileToFilePrivate

    // Class property signals of Guestfs-1.0.Guestfs.CopyFileToFile

    connect(sigName: "notify::append", callback: (($obj: CopyFileToFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::append", callback: (($obj: CopyFileToFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::append", ...args: any[]): void
    connect(sigName: "notify::destoffset", callback: (($obj: CopyFileToFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destoffset", callback: (($obj: CopyFileToFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destoffset", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: CopyFileToFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: CopyFileToFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::sparse", callback: (($obj: CopyFileToFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sparse", callback: (($obj: CopyFileToFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sparse", ...args: any[]): void
    connect(sigName: "notify::srcoffset", callback: (($obj: CopyFileToFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::srcoffset", callback: (($obj: CopyFileToFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::srcoffset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_copy_file_to_file.
 * @class 
 */
export class CopyFileToFile extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.CopyFileToFile

    static name: string
    static $gtype: GObject.GType<CopyFileToFile>

    // Constructors of Guestfs-1.0.Guestfs.CopyFileToFile

    constructor(config?: CopyFileToFile.ConstructorProperties) 
    /**
     * Create a new GuestfsCopyFileToFile object
     * @constructor 
     * @returns a new GuestfsCopyFileToFile object
     */
    constructor() 
    /**
     * Create a new GuestfsCopyFileToFile object
     * @constructor 
     * @returns a new GuestfsCopyFileToFile object
     */
    static new(): CopyFileToFile
    _init(config?: CopyFileToFile.ConstructorProperties): void
}

export module CpioOut {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.CpioOut

        /**
         * A string.
         */
        format?: string | null
    }

}

export interface CpioOut {

    // Own properties of Guestfs-1.0.Guestfs.CpioOut

    /**
     * A string.
     */
    format: string | null

    // Own fields of Guestfs-1.0.Guestfs.CpioOut

    parent: GObject.Object
    priv: CpioOutPrivate

    // Class property signals of Guestfs-1.0.Guestfs.CpioOut

    connect(sigName: "notify::format", callback: (($obj: CpioOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::format", callback: (($obj: CpioOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_cpio_out.
 * @class 
 */
export class CpioOut extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.CpioOut

    static name: string
    static $gtype: GObject.GType<CpioOut>

    // Constructors of Guestfs-1.0.Guestfs.CpioOut

    constructor(config?: CpioOut.ConstructorProperties) 
    /**
     * Create a new GuestfsCpioOut object
     * @constructor 
     * @returns a new GuestfsCpioOut object
     */
    constructor() 
    /**
     * Create a new GuestfsCpioOut object
     * @constructor 
     * @returns a new GuestfsCpioOut object
     */
    static new(): CpioOut
    _init(config?: CpioOut.ConstructorProperties): void
}

export module DiskCreate {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.DiskCreate

        /**
         * A string.
         */
        backingfile?: string | null
        /**
         * A string.
         */
        backingformat?: string | null
        /**
         * A 32-bit integer.
         */
        clustersize?: number | null
        /**
         * A string.
         */
        compat?: string | null
        /**
         * A string.
         */
        preallocation?: string | null
    }

}

export interface DiskCreate {

    // Own properties of Guestfs-1.0.Guestfs.DiskCreate

    /**
     * A string.
     */
    backingfile: string | null
    /**
     * A string.
     */
    backingformat: string | null
    /**
     * A 32-bit integer.
     */
    clustersize: number
    /**
     * A string.
     */
    compat: string | null
    /**
     * A string.
     */
    preallocation: string | null

    // Own fields of Guestfs-1.0.Guestfs.DiskCreate

    parent: GObject.Object
    priv: DiskCreatePrivate

    // Class property signals of Guestfs-1.0.Guestfs.DiskCreate

    connect(sigName: "notify::backingfile", callback: (($obj: DiskCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backingfile", callback: (($obj: DiskCreate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::backingfile", ...args: any[]): void
    connect(sigName: "notify::backingformat", callback: (($obj: DiskCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backingformat", callback: (($obj: DiskCreate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::backingformat", ...args: any[]): void
    connect(sigName: "notify::clustersize", callback: (($obj: DiskCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clustersize", callback: (($obj: DiskCreate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clustersize", ...args: any[]): void
    connect(sigName: "notify::compat", callback: (($obj: DiskCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compat", callback: (($obj: DiskCreate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::compat", ...args: any[]): void
    connect(sigName: "notify::preallocation", callback: (($obj: DiskCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preallocation", callback: (($obj: DiskCreate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::preallocation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_disk_create.
 * @class 
 */
export class DiskCreate extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.DiskCreate

    static name: string
    static $gtype: GObject.GType<DiskCreate>

    // Constructors of Guestfs-1.0.Guestfs.DiskCreate

    constructor(config?: DiskCreate.ConstructorProperties) 
    /**
     * Create a new GuestfsDiskCreate object
     * @constructor 
     * @returns a new GuestfsDiskCreate object
     */
    constructor() 
    /**
     * Create a new GuestfsDiskCreate object
     * @constructor 
     * @returns a new GuestfsDiskCreate object
     */
    static new(): DiskCreate
    _init(config?: DiskCreate.ConstructorProperties): void
}

export module DownloadBlocks {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.DownloadBlocks

        /**
         * A boolean.
         */
        unallocated?: Tristate | null
    }

}

export interface DownloadBlocks {

    // Own properties of Guestfs-1.0.Guestfs.DownloadBlocks

    /**
     * A boolean.
     */
    unallocated: Tristate

    // Own fields of Guestfs-1.0.Guestfs.DownloadBlocks

    parent: GObject.Object
    priv: DownloadBlocksPrivate

    // Class property signals of Guestfs-1.0.Guestfs.DownloadBlocks

    connect(sigName: "notify::unallocated", callback: (($obj: DownloadBlocks, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unallocated", callback: (($obj: DownloadBlocks, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unallocated", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_download_blocks.
 * @class 
 */
export class DownloadBlocks extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.DownloadBlocks

    static name: string
    static $gtype: GObject.GType<DownloadBlocks>

    // Constructors of Guestfs-1.0.Guestfs.DownloadBlocks

    constructor(config?: DownloadBlocks.ConstructorProperties) 
    /**
     * Create a new GuestfsDownloadBlocks object
     * @constructor 
     * @returns a new GuestfsDownloadBlocks object
     */
    constructor() 
    /**
     * Create a new GuestfsDownloadBlocks object
     * @constructor 
     * @returns a new GuestfsDownloadBlocks object
     */
    static new(): DownloadBlocks
    _init(config?: DownloadBlocks.ConstructorProperties): void
}

export module E2fsck {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.E2fsck

        /**
         * A boolean.
         */
        correct?: Tristate | null
        /**
         * A boolean.
         */
        forceall?: Tristate | null
    }

}

export interface E2fsck {

    // Own properties of Guestfs-1.0.Guestfs.E2fsck

    /**
     * A boolean.
     */
    correct: Tristate
    /**
     * A boolean.
     */
    forceall: Tristate

    // Own fields of Guestfs-1.0.Guestfs.E2fsck

    parent: GObject.Object
    priv: E2fsckPrivate

    // Class property signals of Guestfs-1.0.Guestfs.E2fsck

    connect(sigName: "notify::correct", callback: (($obj: E2fsck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::correct", callback: (($obj: E2fsck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::correct", ...args: any[]): void
    connect(sigName: "notify::forceall", callback: (($obj: E2fsck, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::forceall", callback: (($obj: E2fsck, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::forceall", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_e2fsck.
 * @class 
 */
export class E2fsck extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.E2fsck

    static name: string
    static $gtype: GObject.GType<E2fsck>

    // Constructors of Guestfs-1.0.Guestfs.E2fsck

    constructor(config?: E2fsck.ConstructorProperties) 
    /**
     * Create a new GuestfsE2fsck object
     * @constructor 
     * @returns a new GuestfsE2fsck object
     */
    constructor() 
    /**
     * Create a new GuestfsE2fsck object
     * @constructor 
     * @returns a new GuestfsE2fsck object
     */
    static new(): E2fsck
    _init(config?: E2fsck.ConstructorProperties): void
}

export module Fstrim {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.Fstrim

        /**
         * A 64-bit integer.
         */
        length?: number | null
        /**
         * A 64-bit integer.
         */
        minimumfreeextent?: number | null
        /**
         * A 64-bit integer.
         */
        offset?: number | null
    }

}

export interface Fstrim {

    // Own properties of Guestfs-1.0.Guestfs.Fstrim

    /**
     * A 64-bit integer.
     */
    length: number
    /**
     * A 64-bit integer.
     */
    minimumfreeextent: number
    /**
     * A 64-bit integer.
     */
    offset: number

    // Own fields of Guestfs-1.0.Guestfs.Fstrim

    parent: GObject.Object
    priv: FstrimPrivate

    // Class property signals of Guestfs-1.0.Guestfs.Fstrim

    connect(sigName: "notify::length", callback: (($obj: Fstrim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: Fstrim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::minimumfreeextent", callback: (($obj: Fstrim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minimumfreeextent", callback: (($obj: Fstrim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::minimumfreeextent", ...args: any[]): void
    connect(sigName: "notify::offset", callback: (($obj: Fstrim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offset", callback: (($obj: Fstrim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::offset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_fstrim.
 * @class 
 */
export class Fstrim extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.Fstrim

    static name: string
    static $gtype: GObject.GType<Fstrim>

    // Constructors of Guestfs-1.0.Guestfs.Fstrim

    constructor(config?: Fstrim.ConstructorProperties) 
    /**
     * Create a new GuestfsFstrim object
     * @constructor 
     * @returns a new GuestfsFstrim object
     */
    constructor() 
    /**
     * Create a new GuestfsFstrim object
     * @constructor 
     * @returns a new GuestfsFstrim object
     */
    static new(): Fstrim
    _init(config?: Fstrim.ConstructorProperties): void
}

export module GlobExpand {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.GlobExpand

        /**
         * A boolean.
         */
        directoryslash?: Tristate | null
    }

}

export interface GlobExpand {

    // Own properties of Guestfs-1.0.Guestfs.GlobExpand

    /**
     * A boolean.
     */
    directoryslash: Tristate

    // Own fields of Guestfs-1.0.Guestfs.GlobExpand

    parent: GObject.Object
    priv: GlobExpandPrivate

    // Class property signals of Guestfs-1.0.Guestfs.GlobExpand

    connect(sigName: "notify::directoryslash", callback: (($obj: GlobExpand, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::directoryslash", callback: (($obj: GlobExpand, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::directoryslash", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_glob_expand.
 * @class 
 */
export class GlobExpand extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.GlobExpand

    static name: string
    static $gtype: GObject.GType<GlobExpand>

    // Constructors of Guestfs-1.0.Guestfs.GlobExpand

    constructor(config?: GlobExpand.ConstructorProperties) 
    /**
     * Create a new GuestfsGlobExpand object
     * @constructor 
     * @returns a new GuestfsGlobExpand object
     */
    constructor() 
    /**
     * Create a new GuestfsGlobExpand object
     * @constructor 
     * @returns a new GuestfsGlobExpand object
     */
    static new(): GlobExpand
    _init(config?: GlobExpand.ConstructorProperties): void
}

export module Grep {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.Grep

        /**
         * A boolean.
         */
        compressed?: Tristate | null
        /**
         * A boolean.
         */
        extended?: Tristate | null
        /**
         * A boolean.
         */
        fixed?: Tristate | null
        /**
         * A boolean.
         */
        insensitive?: Tristate | null
    }

}

export interface Grep {

    // Own properties of Guestfs-1.0.Guestfs.Grep

    /**
     * A boolean.
     */
    compressed: Tristate
    /**
     * A boolean.
     */
    extended: Tristate
    /**
     * A boolean.
     */
    fixed: Tristate
    /**
     * A boolean.
     */
    insensitive: Tristate

    // Own fields of Guestfs-1.0.Guestfs.Grep

    parent: GObject.Object
    priv: GrepPrivate

    // Class property signals of Guestfs-1.0.Guestfs.Grep

    connect(sigName: "notify::compressed", callback: (($obj: Grep, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compressed", callback: (($obj: Grep, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::compressed", ...args: any[]): void
    connect(sigName: "notify::extended", callback: (($obj: Grep, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extended", callback: (($obj: Grep, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::extended", ...args: any[]): void
    connect(sigName: "notify::fixed", callback: (($obj: Grep, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed", callback: (($obj: Grep, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed", ...args: any[]): void
    connect(sigName: "notify::insensitive", callback: (($obj: Grep, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::insensitive", callback: (($obj: Grep, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::insensitive", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_grep.
 * @class 
 */
export class Grep extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.Grep

    static name: string
    static $gtype: GObject.GType<Grep>

    // Constructors of Guestfs-1.0.Guestfs.Grep

    constructor(config?: Grep.ConstructorProperties) 
    /**
     * Create a new GuestfsGrep object
     * @constructor 
     * @returns a new GuestfsGrep object
     */
    constructor() 
    /**
     * Create a new GuestfsGrep object
     * @constructor 
     * @returns a new GuestfsGrep object
     */
    static new(): Grep
    _init(config?: Grep.ConstructorProperties): void
}

export module HivexOpen {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.HivexOpen

        /**
         * A boolean.
         */
        debug?: Tristate | null
        /**
         * A boolean.
         */
        unsafe?: Tristate | null
        /**
         * A boolean.
         */
        verbose?: Tristate | null
        /**
         * A boolean.
         */
        write?: Tristate | null
    }

}

export interface HivexOpen {

    // Own properties of Guestfs-1.0.Guestfs.HivexOpen

    /**
     * A boolean.
     */
    debug: Tristate
    /**
     * A boolean.
     */
    unsafe: Tristate
    /**
     * A boolean.
     */
    verbose: Tristate
    /**
     * A boolean.
     */
    write: Tristate

    // Own fields of Guestfs-1.0.Guestfs.HivexOpen

    parent: GObject.Object
    priv: HivexOpenPrivate

    // Class property signals of Guestfs-1.0.Guestfs.HivexOpen

    connect(sigName: "notify::debug", callback: (($obj: HivexOpen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::debug", callback: (($obj: HivexOpen, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::debug", ...args: any[]): void
    connect(sigName: "notify::unsafe", callback: (($obj: HivexOpen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unsafe", callback: (($obj: HivexOpen, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unsafe", ...args: any[]): void
    connect(sigName: "notify::verbose", callback: (($obj: HivexOpen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::verbose", callback: (($obj: HivexOpen, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::verbose", ...args: any[]): void
    connect(sigName: "notify::write", callback: (($obj: HivexOpen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::write", callback: (($obj: HivexOpen, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::write", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_hivex_open.
 * @class 
 */
export class HivexOpen extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.HivexOpen

    static name: string
    static $gtype: GObject.GType<HivexOpen>

    // Constructors of Guestfs-1.0.Guestfs.HivexOpen

    constructor(config?: HivexOpen.ConstructorProperties) 
    /**
     * Create a new GuestfsHivexOpen object
     * @constructor 
     * @returns a new GuestfsHivexOpen object
     */
    constructor() 
    /**
     * Create a new GuestfsHivexOpen object
     * @constructor 
     * @returns a new GuestfsHivexOpen object
     */
    static new(): HivexOpen
    _init(config?: HivexOpen.ConstructorProperties): void
}

export module InspectGetIcon {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.InspectGetIcon

        /**
         * A boolean.
         */
        favicon?: Tristate | null
        /**
         * A boolean.
         */
        highquality?: Tristate | null
    }

}

export interface InspectGetIcon {

    // Own properties of Guestfs-1.0.Guestfs.InspectGetIcon

    /**
     * A boolean.
     */
    favicon: Tristate
    /**
     * A boolean.
     */
    highquality: Tristate

    // Own fields of Guestfs-1.0.Guestfs.InspectGetIcon

    parent: GObject.Object
    priv: InspectGetIconPrivate

    // Class property signals of Guestfs-1.0.Guestfs.InspectGetIcon

    connect(sigName: "notify::favicon", callback: (($obj: InspectGetIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::favicon", callback: (($obj: InspectGetIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::favicon", ...args: any[]): void
    connect(sigName: "notify::highquality", callback: (($obj: InspectGetIcon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highquality", callback: (($obj: InspectGetIcon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::highquality", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_inspect_get_icon.
 * @class 
 */
export class InspectGetIcon extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.InspectGetIcon

    static name: string
    static $gtype: GObject.GType<InspectGetIcon>

    // Constructors of Guestfs-1.0.Guestfs.InspectGetIcon

    constructor(config?: InspectGetIcon.ConstructorProperties) 
    /**
     * Create a new GuestfsInspectGetIcon object
     * @constructor 
     * @returns a new GuestfsInspectGetIcon object
     */
    constructor() 
    /**
     * Create a new GuestfsInspectGetIcon object
     * @constructor 
     * @returns a new GuestfsInspectGetIcon object
     */
    static new(): InspectGetIcon
    _init(config?: InspectGetIcon.ConstructorProperties): void
}

export module InternalTest {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.InternalTest

        /**
         * A boolean.
         */
        obool?: Tristate | null
        /**
         * A 32-bit integer.
         */
        oint?: number | null
        /**
         * A 64-bit integer.
         */
        oint64?: number | null
        /**
         * A string.
         */
        ostring?: string | null
    }

}

export interface InternalTest {

    // Own properties of Guestfs-1.0.Guestfs.InternalTest

    /**
     * A boolean.
     */
    obool: Tristate
    /**
     * A 32-bit integer.
     */
    oint: number
    /**
     * A 64-bit integer.
     */
    oint64: number
    /**
     * A string.
     */
    ostring: string | null

    // Own fields of Guestfs-1.0.Guestfs.InternalTest

    parent: GObject.Object
    priv: InternalTestPrivate

    // Class property signals of Guestfs-1.0.Guestfs.InternalTest

    connect(sigName: "notify::obool", callback: (($obj: InternalTest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::obool", callback: (($obj: InternalTest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::obool", ...args: any[]): void
    connect(sigName: "notify::oint", callback: (($obj: InternalTest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::oint", callback: (($obj: InternalTest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::oint", ...args: any[]): void
    connect(sigName: "notify::oint64", callback: (($obj: InternalTest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::oint64", callback: (($obj: InternalTest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::oint64", ...args: any[]): void
    connect(sigName: "notify::ostring", callback: (($obj: InternalTest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ostring", callback: (($obj: InternalTest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ostring", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_internal_test.
 * @class 
 */
export class InternalTest extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.InternalTest

    static name: string
    static $gtype: GObject.GType<InternalTest>

    // Constructors of Guestfs-1.0.Guestfs.InternalTest

    constructor(config?: InternalTest.ConstructorProperties) 
    /**
     * Create a new GuestfsInternalTest object
     * @constructor 
     * @returns a new GuestfsInternalTest object
     */
    constructor() 
    /**
     * Create a new GuestfsInternalTest object
     * @constructor 
     * @returns a new GuestfsInternalTest object
     */
    static new(): InternalTest
    _init(config?: InternalTest.ConstructorProperties): void
}

export module InternalTest63Optargs {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.InternalTest63Optargs

        /**
         * A 32-bit integer.
         */
        opt1?: number | null
        /**
         * A 32-bit integer.
         */
        opt10?: number | null
        /**
         * A 32-bit integer.
         */
        opt11?: number | null
        /**
         * A 32-bit integer.
         */
        opt12?: number | null
        /**
         * A 32-bit integer.
         */
        opt13?: number | null
        /**
         * A 32-bit integer.
         */
        opt14?: number | null
        /**
         * A 32-bit integer.
         */
        opt15?: number | null
        /**
         * A 32-bit integer.
         */
        opt16?: number | null
        /**
         * A 32-bit integer.
         */
        opt17?: number | null
        /**
         * A 32-bit integer.
         */
        opt18?: number | null
        /**
         * A 32-bit integer.
         */
        opt19?: number | null
        /**
         * A 32-bit integer.
         */
        opt2?: number | null
        /**
         * A 32-bit integer.
         */
        opt20?: number | null
        /**
         * A 32-bit integer.
         */
        opt21?: number | null
        /**
         * A 32-bit integer.
         */
        opt22?: number | null
        /**
         * A 32-bit integer.
         */
        opt23?: number | null
        /**
         * A 32-bit integer.
         */
        opt24?: number | null
        /**
         * A 32-bit integer.
         */
        opt25?: number | null
        /**
         * A 32-bit integer.
         */
        opt26?: number | null
        /**
         * A 32-bit integer.
         */
        opt27?: number | null
        /**
         * A 32-bit integer.
         */
        opt28?: number | null
        /**
         * A 32-bit integer.
         */
        opt29?: number | null
        /**
         * A 32-bit integer.
         */
        opt3?: number | null
        /**
         * A 32-bit integer.
         */
        opt30?: number | null
        /**
         * A 32-bit integer.
         */
        opt31?: number | null
        /**
         * A 32-bit integer.
         */
        opt32?: number | null
        /**
         * A 32-bit integer.
         */
        opt33?: number | null
        /**
         * A 32-bit integer.
         */
        opt34?: number | null
        /**
         * A 32-bit integer.
         */
        opt35?: number | null
        /**
         * A 32-bit integer.
         */
        opt36?: number | null
        /**
         * A 32-bit integer.
         */
        opt37?: number | null
        /**
         * A 32-bit integer.
         */
        opt38?: number | null
        /**
         * A 32-bit integer.
         */
        opt39?: number | null
        /**
         * A 32-bit integer.
         */
        opt4?: number | null
        /**
         * A 32-bit integer.
         */
        opt40?: number | null
        /**
         * A 32-bit integer.
         */
        opt41?: number | null
        /**
         * A 32-bit integer.
         */
        opt42?: number | null
        /**
         * A 32-bit integer.
         */
        opt43?: number | null
        /**
         * A 32-bit integer.
         */
        opt44?: number | null
        /**
         * A 32-bit integer.
         */
        opt45?: number | null
        /**
         * A 32-bit integer.
         */
        opt46?: number | null
        /**
         * A 32-bit integer.
         */
        opt47?: number | null
        /**
         * A 32-bit integer.
         */
        opt48?: number | null
        /**
         * A 32-bit integer.
         */
        opt49?: number | null
        /**
         * A 32-bit integer.
         */
        opt5?: number | null
        /**
         * A 32-bit integer.
         */
        opt50?: number | null
        /**
         * A 32-bit integer.
         */
        opt51?: number | null
        /**
         * A 32-bit integer.
         */
        opt52?: number | null
        /**
         * A 32-bit integer.
         */
        opt53?: number | null
        /**
         * A 32-bit integer.
         */
        opt54?: number | null
        /**
         * A 32-bit integer.
         */
        opt55?: number | null
        /**
         * A 32-bit integer.
         */
        opt56?: number | null
        /**
         * A 32-bit integer.
         */
        opt57?: number | null
        /**
         * A 32-bit integer.
         */
        opt58?: number | null
        /**
         * A 32-bit integer.
         */
        opt59?: number | null
        /**
         * A 32-bit integer.
         */
        opt6?: number | null
        /**
         * A 32-bit integer.
         */
        opt60?: number | null
        /**
         * A 32-bit integer.
         */
        opt61?: number | null
        /**
         * A 32-bit integer.
         */
        opt62?: number | null
        /**
         * A 32-bit integer.
         */
        opt63?: number | null
        /**
         * A 32-bit integer.
         */
        opt7?: number | null
        /**
         * A 32-bit integer.
         */
        opt8?: number | null
        /**
         * A 32-bit integer.
         */
        opt9?: number | null
    }

}

export interface InternalTest63Optargs {

    // Own properties of Guestfs-1.0.Guestfs.InternalTest63Optargs

    /**
     * A 32-bit integer.
     */
    opt1: number
    /**
     * A 32-bit integer.
     */
    opt10: number
    /**
     * A 32-bit integer.
     */
    opt11: number
    /**
     * A 32-bit integer.
     */
    opt12: number
    /**
     * A 32-bit integer.
     */
    opt13: number
    /**
     * A 32-bit integer.
     */
    opt14: number
    /**
     * A 32-bit integer.
     */
    opt15: number
    /**
     * A 32-bit integer.
     */
    opt16: number
    /**
     * A 32-bit integer.
     */
    opt17: number
    /**
     * A 32-bit integer.
     */
    opt18: number
    /**
     * A 32-bit integer.
     */
    opt19: number
    /**
     * A 32-bit integer.
     */
    opt2: number
    /**
     * A 32-bit integer.
     */
    opt20: number
    /**
     * A 32-bit integer.
     */
    opt21: number
    /**
     * A 32-bit integer.
     */
    opt22: number
    /**
     * A 32-bit integer.
     */
    opt23: number
    /**
     * A 32-bit integer.
     */
    opt24: number
    /**
     * A 32-bit integer.
     */
    opt25: number
    /**
     * A 32-bit integer.
     */
    opt26: number
    /**
     * A 32-bit integer.
     */
    opt27: number
    /**
     * A 32-bit integer.
     */
    opt28: number
    /**
     * A 32-bit integer.
     */
    opt29: number
    /**
     * A 32-bit integer.
     */
    opt3: number
    /**
     * A 32-bit integer.
     */
    opt30: number
    /**
     * A 32-bit integer.
     */
    opt31: number
    /**
     * A 32-bit integer.
     */
    opt32: number
    /**
     * A 32-bit integer.
     */
    opt33: number
    /**
     * A 32-bit integer.
     */
    opt34: number
    /**
     * A 32-bit integer.
     */
    opt35: number
    /**
     * A 32-bit integer.
     */
    opt36: number
    /**
     * A 32-bit integer.
     */
    opt37: number
    /**
     * A 32-bit integer.
     */
    opt38: number
    /**
     * A 32-bit integer.
     */
    opt39: number
    /**
     * A 32-bit integer.
     */
    opt4: number
    /**
     * A 32-bit integer.
     */
    opt40: number
    /**
     * A 32-bit integer.
     */
    opt41: number
    /**
     * A 32-bit integer.
     */
    opt42: number
    /**
     * A 32-bit integer.
     */
    opt43: number
    /**
     * A 32-bit integer.
     */
    opt44: number
    /**
     * A 32-bit integer.
     */
    opt45: number
    /**
     * A 32-bit integer.
     */
    opt46: number
    /**
     * A 32-bit integer.
     */
    opt47: number
    /**
     * A 32-bit integer.
     */
    opt48: number
    /**
     * A 32-bit integer.
     */
    opt49: number
    /**
     * A 32-bit integer.
     */
    opt5: number
    /**
     * A 32-bit integer.
     */
    opt50: number
    /**
     * A 32-bit integer.
     */
    opt51: number
    /**
     * A 32-bit integer.
     */
    opt52: number
    /**
     * A 32-bit integer.
     */
    opt53: number
    /**
     * A 32-bit integer.
     */
    opt54: number
    /**
     * A 32-bit integer.
     */
    opt55: number
    /**
     * A 32-bit integer.
     */
    opt56: number
    /**
     * A 32-bit integer.
     */
    opt57: number
    /**
     * A 32-bit integer.
     */
    opt58: number
    /**
     * A 32-bit integer.
     */
    opt59: number
    /**
     * A 32-bit integer.
     */
    opt6: number
    /**
     * A 32-bit integer.
     */
    opt60: number
    /**
     * A 32-bit integer.
     */
    opt61: number
    /**
     * A 32-bit integer.
     */
    opt62: number
    /**
     * A 32-bit integer.
     */
    opt63: number
    /**
     * A 32-bit integer.
     */
    opt7: number
    /**
     * A 32-bit integer.
     */
    opt8: number
    /**
     * A 32-bit integer.
     */
    opt9: number

    // Own fields of Guestfs-1.0.Guestfs.InternalTest63Optargs

    parent: GObject.Object
    priv: InternalTest63OptargsPrivate

    // Class property signals of Guestfs-1.0.Guestfs.InternalTest63Optargs

    connect(sigName: "notify::opt1", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt1", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt1", ...args: any[]): void
    connect(sigName: "notify::opt10", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt10", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt10", ...args: any[]): void
    connect(sigName: "notify::opt11", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt11", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt11", ...args: any[]): void
    connect(sigName: "notify::opt12", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt12", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt12", ...args: any[]): void
    connect(sigName: "notify::opt13", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt13", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt13", ...args: any[]): void
    connect(sigName: "notify::opt14", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt14", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt14", ...args: any[]): void
    connect(sigName: "notify::opt15", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt15", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt15", ...args: any[]): void
    connect(sigName: "notify::opt16", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt16", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt16", ...args: any[]): void
    connect(sigName: "notify::opt17", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt17", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt17", ...args: any[]): void
    connect(sigName: "notify::opt18", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt18", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt18", ...args: any[]): void
    connect(sigName: "notify::opt19", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt19", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt19", ...args: any[]): void
    connect(sigName: "notify::opt2", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt2", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt2", ...args: any[]): void
    connect(sigName: "notify::opt20", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt20", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt20", ...args: any[]): void
    connect(sigName: "notify::opt21", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt21", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt21", ...args: any[]): void
    connect(sigName: "notify::opt22", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt22", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt22", ...args: any[]): void
    connect(sigName: "notify::opt23", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt23", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt23", ...args: any[]): void
    connect(sigName: "notify::opt24", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt24", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt24", ...args: any[]): void
    connect(sigName: "notify::opt25", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt25", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt25", ...args: any[]): void
    connect(sigName: "notify::opt26", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt26", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt26", ...args: any[]): void
    connect(sigName: "notify::opt27", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt27", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt27", ...args: any[]): void
    connect(sigName: "notify::opt28", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt28", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt28", ...args: any[]): void
    connect(sigName: "notify::opt29", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt29", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt29", ...args: any[]): void
    connect(sigName: "notify::opt3", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt3", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt3", ...args: any[]): void
    connect(sigName: "notify::opt30", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt30", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt30", ...args: any[]): void
    connect(sigName: "notify::opt31", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt31", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt31", ...args: any[]): void
    connect(sigName: "notify::opt32", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt32", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt32", ...args: any[]): void
    connect(sigName: "notify::opt33", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt33", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt33", ...args: any[]): void
    connect(sigName: "notify::opt34", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt34", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt34", ...args: any[]): void
    connect(sigName: "notify::opt35", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt35", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt35", ...args: any[]): void
    connect(sigName: "notify::opt36", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt36", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt36", ...args: any[]): void
    connect(sigName: "notify::opt37", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt37", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt37", ...args: any[]): void
    connect(sigName: "notify::opt38", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt38", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt38", ...args: any[]): void
    connect(sigName: "notify::opt39", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt39", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt39", ...args: any[]): void
    connect(sigName: "notify::opt4", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt4", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt4", ...args: any[]): void
    connect(sigName: "notify::opt40", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt40", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt40", ...args: any[]): void
    connect(sigName: "notify::opt41", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt41", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt41", ...args: any[]): void
    connect(sigName: "notify::opt42", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt42", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt42", ...args: any[]): void
    connect(sigName: "notify::opt43", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt43", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt43", ...args: any[]): void
    connect(sigName: "notify::opt44", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt44", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt44", ...args: any[]): void
    connect(sigName: "notify::opt45", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt45", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt45", ...args: any[]): void
    connect(sigName: "notify::opt46", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt46", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt46", ...args: any[]): void
    connect(sigName: "notify::opt47", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt47", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt47", ...args: any[]): void
    connect(sigName: "notify::opt48", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt48", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt48", ...args: any[]): void
    connect(sigName: "notify::opt49", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt49", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt49", ...args: any[]): void
    connect(sigName: "notify::opt5", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt5", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt5", ...args: any[]): void
    connect(sigName: "notify::opt50", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt50", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt50", ...args: any[]): void
    connect(sigName: "notify::opt51", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt51", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt51", ...args: any[]): void
    connect(sigName: "notify::opt52", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt52", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt52", ...args: any[]): void
    connect(sigName: "notify::opt53", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt53", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt53", ...args: any[]): void
    connect(sigName: "notify::opt54", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt54", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt54", ...args: any[]): void
    connect(sigName: "notify::opt55", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt55", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt55", ...args: any[]): void
    connect(sigName: "notify::opt56", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt56", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt56", ...args: any[]): void
    connect(sigName: "notify::opt57", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt57", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt57", ...args: any[]): void
    connect(sigName: "notify::opt58", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt58", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt58", ...args: any[]): void
    connect(sigName: "notify::opt59", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt59", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt59", ...args: any[]): void
    connect(sigName: "notify::opt6", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt6", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt6", ...args: any[]): void
    connect(sigName: "notify::opt60", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt60", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt60", ...args: any[]): void
    connect(sigName: "notify::opt61", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt61", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt61", ...args: any[]): void
    connect(sigName: "notify::opt62", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt62", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt62", ...args: any[]): void
    connect(sigName: "notify::opt63", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt63", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt63", ...args: any[]): void
    connect(sigName: "notify::opt7", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt7", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt7", ...args: any[]): void
    connect(sigName: "notify::opt8", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt8", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt8", ...args: any[]): void
    connect(sigName: "notify::opt9", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opt9", callback: (($obj: InternalTest63Optargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opt9", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_internal_test_63_optargs.
 * @class 
 */
export class InternalTest63Optargs extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.InternalTest63Optargs

    static name: string
    static $gtype: GObject.GType<InternalTest63Optargs>

    // Constructors of Guestfs-1.0.Guestfs.InternalTest63Optargs

    constructor(config?: InternalTest63Optargs.ConstructorProperties) 
    /**
     * Create a new GuestfsInternalTest63Optargs object
     * @constructor 
     * @returns a new GuestfsInternalTest63Optargs object
     */
    constructor() 
    /**
     * Create a new GuestfsInternalTest63Optargs object
     * @constructor 
     * @returns a new GuestfsInternalTest63Optargs object
     */
    static new(): InternalTest63Optargs
    _init(config?: InternalTest63Optargs.ConstructorProperties): void
}

export module InternalTestOnlyOptargs {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.InternalTestOnlyOptargs

        /**
         * A 32-bit integer.
         */
        test?: number | null
    }

}

export interface InternalTestOnlyOptargs {

    // Own properties of Guestfs-1.0.Guestfs.InternalTestOnlyOptargs

    /**
     * A 32-bit integer.
     */
    test: number

    // Own fields of Guestfs-1.0.Guestfs.InternalTestOnlyOptargs

    parent: GObject.Object
    priv: InternalTestOnlyOptargsPrivate

    // Class property signals of Guestfs-1.0.Guestfs.InternalTestOnlyOptargs

    connect(sigName: "notify::test", callback: (($obj: InternalTestOnlyOptargs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::test", callback: (($obj: InternalTestOnlyOptargs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::test", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_internal_test_only_optargs.
 * @class 
 */
export class InternalTestOnlyOptargs extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.InternalTestOnlyOptargs

    static name: string
    static $gtype: GObject.GType<InternalTestOnlyOptargs>

    // Constructors of Guestfs-1.0.Guestfs.InternalTestOnlyOptargs

    constructor(config?: InternalTestOnlyOptargs.ConstructorProperties) 
    /**
     * Create a new GuestfsInternalTestOnlyOptargs object
     * @constructor 
     * @returns a new GuestfsInternalTestOnlyOptargs object
     */
    constructor() 
    /**
     * Create a new GuestfsInternalTestOnlyOptargs object
     * @constructor 
     * @returns a new GuestfsInternalTestOnlyOptargs object
     */
    static new(): InternalTestOnlyOptargs
    _init(config?: InternalTestOnlyOptargs.ConstructorProperties): void
}

export module IsBlockdev {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.IsBlockdev

        /**
         * A boolean.
         */
        followsymlinks?: Tristate | null
    }

}

export interface IsBlockdev {

    // Own properties of Guestfs-1.0.Guestfs.IsBlockdev

    /**
     * A boolean.
     */
    followsymlinks: Tristate

    // Own fields of Guestfs-1.0.Guestfs.IsBlockdev

    parent: GObject.Object
    priv: IsBlockdevPrivate

    // Class property signals of Guestfs-1.0.Guestfs.IsBlockdev

    connect(sigName: "notify::followsymlinks", callback: (($obj: IsBlockdev, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::followsymlinks", callback: (($obj: IsBlockdev, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::followsymlinks", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_is_blockdev.
 * @class 
 */
export class IsBlockdev extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.IsBlockdev

    static name: string
    static $gtype: GObject.GType<IsBlockdev>

    // Constructors of Guestfs-1.0.Guestfs.IsBlockdev

    constructor(config?: IsBlockdev.ConstructorProperties) 
    /**
     * Create a new GuestfsIsBlockdev object
     * @constructor 
     * @returns a new GuestfsIsBlockdev object
     */
    constructor() 
    /**
     * Create a new GuestfsIsBlockdev object
     * @constructor 
     * @returns a new GuestfsIsBlockdev object
     */
    static new(): IsBlockdev
    _init(config?: IsBlockdev.ConstructorProperties): void
}

export module IsChardev {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.IsChardev

        /**
         * A boolean.
         */
        followsymlinks?: Tristate | null
    }

}

export interface IsChardev {

    // Own properties of Guestfs-1.0.Guestfs.IsChardev

    /**
     * A boolean.
     */
    followsymlinks: Tristate

    // Own fields of Guestfs-1.0.Guestfs.IsChardev

    parent: GObject.Object
    priv: IsChardevPrivate

    // Class property signals of Guestfs-1.0.Guestfs.IsChardev

    connect(sigName: "notify::followsymlinks", callback: (($obj: IsChardev, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::followsymlinks", callback: (($obj: IsChardev, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::followsymlinks", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_is_chardev.
 * @class 
 */
export class IsChardev extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.IsChardev

    static name: string
    static $gtype: GObject.GType<IsChardev>

    // Constructors of Guestfs-1.0.Guestfs.IsChardev

    constructor(config?: IsChardev.ConstructorProperties) 
    /**
     * Create a new GuestfsIsChardev object
     * @constructor 
     * @returns a new GuestfsIsChardev object
     */
    constructor() 
    /**
     * Create a new GuestfsIsChardev object
     * @constructor 
     * @returns a new GuestfsIsChardev object
     */
    static new(): IsChardev
    _init(config?: IsChardev.ConstructorProperties): void
}

export module IsDir {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.IsDir

        /**
         * A boolean.
         */
        followsymlinks?: Tristate | null
    }

}

export interface IsDir {

    // Own properties of Guestfs-1.0.Guestfs.IsDir

    /**
     * A boolean.
     */
    followsymlinks: Tristate

    // Own fields of Guestfs-1.0.Guestfs.IsDir

    parent: GObject.Object
    priv: IsDirPrivate

    // Class property signals of Guestfs-1.0.Guestfs.IsDir

    connect(sigName: "notify::followsymlinks", callback: (($obj: IsDir, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::followsymlinks", callback: (($obj: IsDir, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::followsymlinks", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_is_dir.
 * @class 
 */
export class IsDir extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.IsDir

    static name: string
    static $gtype: GObject.GType<IsDir>

    // Constructors of Guestfs-1.0.Guestfs.IsDir

    constructor(config?: IsDir.ConstructorProperties) 
    /**
     * Create a new GuestfsIsDir object
     * @constructor 
     * @returns a new GuestfsIsDir object
     */
    constructor() 
    /**
     * Create a new GuestfsIsDir object
     * @constructor 
     * @returns a new GuestfsIsDir object
     */
    static new(): IsDir
    _init(config?: IsDir.ConstructorProperties): void
}

export module IsFifo {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.IsFifo

        /**
         * A boolean.
         */
        followsymlinks?: Tristate | null
    }

}

export interface IsFifo {

    // Own properties of Guestfs-1.0.Guestfs.IsFifo

    /**
     * A boolean.
     */
    followsymlinks: Tristate

    // Own fields of Guestfs-1.0.Guestfs.IsFifo

    parent: GObject.Object
    priv: IsFifoPrivate

    // Class property signals of Guestfs-1.0.Guestfs.IsFifo

    connect(sigName: "notify::followsymlinks", callback: (($obj: IsFifo, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::followsymlinks", callback: (($obj: IsFifo, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::followsymlinks", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_is_fifo.
 * @class 
 */
export class IsFifo extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.IsFifo

    static name: string
    static $gtype: GObject.GType<IsFifo>

    // Constructors of Guestfs-1.0.Guestfs.IsFifo

    constructor(config?: IsFifo.ConstructorProperties) 
    /**
     * Create a new GuestfsIsFifo object
     * @constructor 
     * @returns a new GuestfsIsFifo object
     */
    constructor() 
    /**
     * Create a new GuestfsIsFifo object
     * @constructor 
     * @returns a new GuestfsIsFifo object
     */
    static new(): IsFifo
    _init(config?: IsFifo.ConstructorProperties): void
}

export module IsFile {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.IsFile

        /**
         * A boolean.
         */
        followsymlinks?: Tristate | null
    }

}

export interface IsFile {

    // Own properties of Guestfs-1.0.Guestfs.IsFile

    /**
     * A boolean.
     */
    followsymlinks: Tristate

    // Own fields of Guestfs-1.0.Guestfs.IsFile

    parent: GObject.Object
    priv: IsFilePrivate

    // Class property signals of Guestfs-1.0.Guestfs.IsFile

    connect(sigName: "notify::followsymlinks", callback: (($obj: IsFile, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::followsymlinks", callback: (($obj: IsFile, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::followsymlinks", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_is_file.
 * @class 
 */
export class IsFile extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.IsFile

    static name: string
    static $gtype: GObject.GType<IsFile>

    // Constructors of Guestfs-1.0.Guestfs.IsFile

    constructor(config?: IsFile.ConstructorProperties) 
    /**
     * Create a new GuestfsIsFile object
     * @constructor 
     * @returns a new GuestfsIsFile object
     */
    constructor() 
    /**
     * Create a new GuestfsIsFile object
     * @constructor 
     * @returns a new GuestfsIsFile object
     */
    static new(): IsFile
    _init(config?: IsFile.ConstructorProperties): void
}

export module IsSocket {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.IsSocket

        /**
         * A boolean.
         */
        followsymlinks?: Tristate | null
    }

}

export interface IsSocket {

    // Own properties of Guestfs-1.0.Guestfs.IsSocket

    /**
     * A boolean.
     */
    followsymlinks: Tristate

    // Own fields of Guestfs-1.0.Guestfs.IsSocket

    parent: GObject.Object
    priv: IsSocketPrivate

    // Class property signals of Guestfs-1.0.Guestfs.IsSocket

    connect(sigName: "notify::followsymlinks", callback: (($obj: IsSocket, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::followsymlinks", callback: (($obj: IsSocket, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::followsymlinks", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_is_socket.
 * @class 
 */
export class IsSocket extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.IsSocket

    static name: string
    static $gtype: GObject.GType<IsSocket>

    // Constructors of Guestfs-1.0.Guestfs.IsSocket

    constructor(config?: IsSocket.ConstructorProperties) 
    /**
     * Create a new GuestfsIsSocket object
     * @constructor 
     * @returns a new GuestfsIsSocket object
     */
    constructor() 
    /**
     * Create a new GuestfsIsSocket object
     * @constructor 
     * @returns a new GuestfsIsSocket object
     */
    static new(): IsSocket
    _init(config?: IsSocket.ConstructorProperties): void
}

export module MDCreate {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.MDCreate

        /**
         * A 64-bit integer.
         */
        chunk?: number | null
        /**
         * A string.
         */
        level?: string | null
        /**
         * A 64-bit integer.
         */
        missingbitmap?: number | null
        /**
         * A 32-bit integer.
         */
        nrdevices?: number | null
        /**
         * A 32-bit integer.
         */
        spare?: number | null
    }

}

export interface MDCreate {

    // Own properties of Guestfs-1.0.Guestfs.MDCreate

    /**
     * A 64-bit integer.
     */
    chunk: number
    /**
     * A string.
     */
    level: string | null
    /**
     * A 64-bit integer.
     */
    missingbitmap: number
    /**
     * A 32-bit integer.
     */
    nrdevices: number
    /**
     * A 32-bit integer.
     */
    spare: number

    // Own fields of Guestfs-1.0.Guestfs.MDCreate

    parent: GObject.Object
    priv: MDCreatePrivate

    // Class property signals of Guestfs-1.0.Guestfs.MDCreate

    connect(sigName: "notify::chunk", callback: (($obj: MDCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chunk", callback: (($obj: MDCreate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::chunk", ...args: any[]): void
    connect(sigName: "notify::level", callback: (($obj: MDCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::level", callback: (($obj: MDCreate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::level", ...args: any[]): void
    connect(sigName: "notify::missingbitmap", callback: (($obj: MDCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::missingbitmap", callback: (($obj: MDCreate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::missingbitmap", ...args: any[]): void
    connect(sigName: "notify::nrdevices", callback: (($obj: MDCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nrdevices", callback: (($obj: MDCreate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nrdevices", ...args: any[]): void
    connect(sigName: "notify::spare", callback: (($obj: MDCreate, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spare", callback: (($obj: MDCreate, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spare", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_md_create.
 * @class 
 */
export class MDCreate extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.MDCreate

    static name: string
    static $gtype: GObject.GType<MDCreate>

    // Constructors of Guestfs-1.0.Guestfs.MDCreate

    constructor(config?: MDCreate.ConstructorProperties) 
    /**
     * Create a new GuestfsMDCreate object
     * @constructor 
     * @returns a new GuestfsMDCreate object
     */
    constructor() 
    /**
     * Create a new GuestfsMDCreate object
     * @constructor 
     * @returns a new GuestfsMDCreate object
     */
    static new(): MDCreate
    _init(config?: MDCreate.ConstructorProperties): void
}

export module Mke2fs {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.Mke2fs

        /**
         * A 64-bit integer.
         */
        blockscount?: number | null
        /**
         * A 64-bit integer.
         */
        blocksize?: number | null
        /**
         * A 64-bit integer.
         */
        blockspergroup?: number | null
        /**
         * A 64-bit integer.
         */
        bytesperinode?: number | null
        /**
         * A string.
         */
        creatoros?: string | null
        /**
         * A boolean.
         */
        discard?: Tristate | null
        /**
         * A boolean.
         */
        extent?: Tristate | null
        /**
         * A boolean.
         */
        filetype?: Tristate | null
        /**
         * A boolean.
         */
        flexbg?: Tristate | null
        /**
         * A boolean.
         */
        forcecreate?: Tristate | null
        /**
         * A 64-bit integer.
         */
        fragsize?: number | null
        /**
         * A string.
         */
        fstype?: string | null
        /**
         * A boolean.
         */
        hasjournal?: Tristate | null
        /**
         * A 64-bit integer.
         */
        inodesize?: number | null
        /**
         * A boolean.
         */
        journaldev?: Tristate | null
        /**
         * A string.
         */
        journaldevice?: string | null
        /**
         * A 64-bit integer.
         */
        journalsize?: number | null
        /**
         * A string.
         */
        label?: string | null
        /**
         * A boolean.
         */
        largefile?: Tristate | null
        /**
         * A string.
         */
        lastmounteddir?: string | null
        /**
         * A boolean.
         */
        lazyitableinit?: Tristate | null
        /**
         * A boolean.
         */
        lazyjournalinit?: Tristate | null
        /**
         * A 64-bit integer.
         */
        maxonlineresize?: number | null
        /**
         * A 32-bit integer.
         */
        mmpupdateinterval?: number | null
        /**
         * A 64-bit integer.
         */
        numberofgroups?: number | null
        /**
         * A 64-bit integer.
         */
        numberofinodes?: number | null
        /**
         * A boolean.
         */
        quota?: Tristate | null
        /**
         * A boolean.
         */
        quotatype?: Tristate | null
        /**
         * A 32-bit integer.
         */
        reservedblockspercentage?: number | null
        /**
         * A boolean.
         */
        resizeinode?: Tristate | null
        /**
         * A boolean.
         */
        sparsesuper?: Tristate | null
        /**
         * A 64-bit integer.
         */
        stridesize?: number | null
        /**
         * A 64-bit integer.
         */
        stripewidth?: number | null
        /**
         * A boolean.
         */
        testfs?: Tristate | null
        /**
         * A boolean.
         */
        uninitbg?: Tristate | null
        /**
         * A string.
         */
        usagetype?: string | null
        /**
         * A string.
         */
        uuid?: string | null
        /**
         * A boolean.
         */
        writesbandgrouponly?: Tristate | null
    }

}

export interface Mke2fs {

    // Own properties of Guestfs-1.0.Guestfs.Mke2fs

    /**
     * A 64-bit integer.
     */
    blockscount: number
    /**
     * A 64-bit integer.
     */
    blocksize: number
    /**
     * A 64-bit integer.
     */
    blockspergroup: number
    /**
     * A 64-bit integer.
     */
    bytesperinode: number
    /**
     * A string.
     */
    creatoros: string | null
    /**
     * A boolean.
     */
    discard: Tristate
    /**
     * A boolean.
     */
    extent: Tristate
    /**
     * A boolean.
     */
    filetype: Tristate
    /**
     * A boolean.
     */
    flexbg: Tristate
    /**
     * A boolean.
     */
    forcecreate: Tristate
    /**
     * A 64-bit integer.
     */
    fragsize: number
    /**
     * A string.
     */
    fstype: string | null
    /**
     * A boolean.
     */
    hasjournal: Tristate
    /**
     * A 64-bit integer.
     */
    inodesize: number
    /**
     * A boolean.
     */
    journaldev: Tristate
    /**
     * A string.
     */
    journaldevice: string | null
    /**
     * A 64-bit integer.
     */
    journalsize: number
    /**
     * A string.
     */
    label: string | null
    /**
     * A boolean.
     */
    largefile: Tristate
    /**
     * A string.
     */
    lastmounteddir: string | null
    /**
     * A boolean.
     */
    lazyitableinit: Tristate
    /**
     * A boolean.
     */
    lazyjournalinit: Tristate
    /**
     * A 64-bit integer.
     */
    maxonlineresize: number
    /**
     * A 32-bit integer.
     */
    mmpupdateinterval: number
    /**
     * A 64-bit integer.
     */
    numberofgroups: number
    /**
     * A 64-bit integer.
     */
    numberofinodes: number
    /**
     * A boolean.
     */
    quota: Tristate
    /**
     * A boolean.
     */
    quotatype: Tristate
    /**
     * A 32-bit integer.
     */
    reservedblockspercentage: number
    /**
     * A boolean.
     */
    resizeinode: Tristate
    /**
     * A boolean.
     */
    sparsesuper: Tristate
    /**
     * A 64-bit integer.
     */
    stridesize: number
    /**
     * A 64-bit integer.
     */
    stripewidth: number
    /**
     * A boolean.
     */
    testfs: Tristate
    /**
     * A boolean.
     */
    uninitbg: Tristate
    /**
     * A string.
     */
    usagetype: string | null
    /**
     * A string.
     */
    uuid: string | null
    /**
     * A boolean.
     */
    writesbandgrouponly: Tristate

    // Own fields of Guestfs-1.0.Guestfs.Mke2fs

    parent: GObject.Object
    priv: Mke2fsPrivate

    // Class property signals of Guestfs-1.0.Guestfs.Mke2fs

    connect(sigName: "notify::blockscount", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blockscount", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::blockscount", ...args: any[]): void
    connect(sigName: "notify::blocksize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::blocksize", ...args: any[]): void
    connect(sigName: "notify::blockspergroup", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blockspergroup", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::blockspergroup", ...args: any[]): void
    connect(sigName: "notify::bytesperinode", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bytesperinode", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bytesperinode", ...args: any[]): void
    connect(sigName: "notify::creatoros", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::creatoros", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::creatoros", ...args: any[]): void
    connect(sigName: "notify::discard", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::discard", ...args: any[]): void
    connect(sigName: "notify::extent", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extent", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::extent", ...args: any[]): void
    connect(sigName: "notify::filetype", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filetype", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filetype", ...args: any[]): void
    connect(sigName: "notify::flexbg", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flexbg", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flexbg", ...args: any[]): void
    connect(sigName: "notify::forcecreate", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::forcecreate", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::forcecreate", ...args: any[]): void
    connect(sigName: "notify::fragsize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fragsize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fragsize", ...args: any[]): void
    connect(sigName: "notify::fstype", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fstype", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fstype", ...args: any[]): void
    connect(sigName: "notify::hasjournal", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hasjournal", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hasjournal", ...args: any[]): void
    connect(sigName: "notify::inodesize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inodesize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inodesize", ...args: any[]): void
    connect(sigName: "notify::journaldev", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::journaldev", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::journaldev", ...args: any[]): void
    connect(sigName: "notify::journaldevice", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::journaldevice", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::journaldevice", ...args: any[]): void
    connect(sigName: "notify::journalsize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::journalsize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::journalsize", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::largefile", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::largefile", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::largefile", ...args: any[]): void
    connect(sigName: "notify::lastmounteddir", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lastmounteddir", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::lastmounteddir", ...args: any[]): void
    connect(sigName: "notify::lazyitableinit", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lazyitableinit", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::lazyitableinit", ...args: any[]): void
    connect(sigName: "notify::lazyjournalinit", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lazyjournalinit", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::lazyjournalinit", ...args: any[]): void
    connect(sigName: "notify::maxonlineresize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maxonlineresize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::maxonlineresize", ...args: any[]): void
    connect(sigName: "notify::mmpupdateinterval", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mmpupdateinterval", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mmpupdateinterval", ...args: any[]): void
    connect(sigName: "notify::numberofgroups", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::numberofgroups", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::numberofgroups", ...args: any[]): void
    connect(sigName: "notify::numberofinodes", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::numberofinodes", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::numberofinodes", ...args: any[]): void
    connect(sigName: "notify::quota", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quota", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::quota", ...args: any[]): void
    connect(sigName: "notify::quotatype", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::quotatype", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::quotatype", ...args: any[]): void
    connect(sigName: "notify::reservedblockspercentage", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reservedblockspercentage", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reservedblockspercentage", ...args: any[]): void
    connect(sigName: "notify::resizeinode", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizeinode", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resizeinode", ...args: any[]): void
    connect(sigName: "notify::sparsesuper", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sparsesuper", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sparsesuper", ...args: any[]): void
    connect(sigName: "notify::stridesize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stridesize", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stridesize", ...args: any[]): void
    connect(sigName: "notify::stripewidth", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stripewidth", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stripewidth", ...args: any[]): void
    connect(sigName: "notify::testfs", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::testfs", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::testfs", ...args: any[]): void
    connect(sigName: "notify::uninitbg", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uninitbg", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uninitbg", ...args: any[]): void
    connect(sigName: "notify::usagetype", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::usagetype", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::usagetype", ...args: any[]): void
    connect(sigName: "notify::uuid", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uuid", ...args: any[]): void
    connect(sigName: "notify::writesbandgrouponly", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::writesbandgrouponly", callback: (($obj: Mke2fs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::writesbandgrouponly", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_mke2fs.
 * @class 
 */
export class Mke2fs extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.Mke2fs

    static name: string
    static $gtype: GObject.GType<Mke2fs>

    // Constructors of Guestfs-1.0.Guestfs.Mke2fs

    constructor(config?: Mke2fs.ConstructorProperties) 
    /**
     * Create a new GuestfsMke2fs object
     * @constructor 
     * @returns a new GuestfsMke2fs object
     */
    constructor() 
    /**
     * Create a new GuestfsMke2fs object
     * @constructor 
     * @returns a new GuestfsMke2fs object
     */
    static new(): Mke2fs
    _init(config?: Mke2fs.ConstructorProperties): void
}

export module Mkfs {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.Mkfs

        /**
         * A 32-bit integer.
         */
        blocksize?: number | null
        /**
         * A string.
         */
        features?: string | null
        /**
         * A 32-bit integer.
         */
        inode?: number | null
        /**
         * A string.
         */
        label?: string | null
        /**
         * A 32-bit integer.
         */
        sectorsize?: number | null
    }

}

export interface Mkfs {

    // Own properties of Guestfs-1.0.Guestfs.Mkfs

    /**
     * A 32-bit integer.
     */
    blocksize: number
    /**
     * A string.
     */
    features: string | null
    /**
     * A 32-bit integer.
     */
    inode: number
    /**
     * A string.
     */
    label: string | null
    /**
     * A 32-bit integer.
     */
    sectorsize: number

    // Own fields of Guestfs-1.0.Guestfs.Mkfs

    parent: GObject.Object
    priv: MkfsPrivate

    // Class property signals of Guestfs-1.0.Guestfs.Mkfs

    connect(sigName: "notify::blocksize", callback: (($obj: Mkfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: Mkfs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::blocksize", ...args: any[]): void
    connect(sigName: "notify::features", callback: (($obj: Mkfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::features", callback: (($obj: Mkfs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::features", ...args: any[]): void
    connect(sigName: "notify::inode", callback: (($obj: Mkfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inode", callback: (($obj: Mkfs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inode", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: Mkfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Mkfs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::sectorsize", callback: (($obj: Mkfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sectorsize", callback: (($obj: Mkfs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sectorsize", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_mkfs.
 * @class 
 */
export class Mkfs extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.Mkfs

    static name: string
    static $gtype: GObject.GType<Mkfs>

    // Constructors of Guestfs-1.0.Guestfs.Mkfs

    constructor(config?: Mkfs.ConstructorProperties) 
    /**
     * Create a new GuestfsMkfs object
     * @constructor 
     * @returns a new GuestfsMkfs object
     */
    constructor() 
    /**
     * Create a new GuestfsMkfs object
     * @constructor 
     * @returns a new GuestfsMkfs object
     */
    static new(): Mkfs
    _init(config?: Mkfs.ConstructorProperties): void
}

export module MkfsBtrfs {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.MkfsBtrfs

        /**
         * A 64-bit integer.
         */
        allocstart?: number | null
        /**
         * A 64-bit integer.
         */
        bytecount?: number | null
        /**
         * A string.
         */
        datatype?: string | null
        /**
         * A string.
         */
        label?: string | null
        /**
         * A 32-bit integer.
         */
        leafsize?: number | null
        /**
         * A string.
         */
        metadata?: string | null
        /**
         * A 32-bit integer.
         */
        nodesize?: number | null
        /**
         * A 32-bit integer.
         */
        sectorsize?: number | null
    }

}

export interface MkfsBtrfs {

    // Own properties of Guestfs-1.0.Guestfs.MkfsBtrfs

    /**
     * A 64-bit integer.
     */
    allocstart: number
    /**
     * A 64-bit integer.
     */
    bytecount: number
    /**
     * A string.
     */
    datatype: string | null
    /**
     * A string.
     */
    label: string | null
    /**
     * A 32-bit integer.
     */
    leafsize: number
    /**
     * A string.
     */
    metadata: string | null
    /**
     * A 32-bit integer.
     */
    nodesize: number
    /**
     * A 32-bit integer.
     */
    sectorsize: number

    // Own fields of Guestfs-1.0.Guestfs.MkfsBtrfs

    parent: GObject.Object
    priv: MkfsBtrfsPrivate

    // Class property signals of Guestfs-1.0.Guestfs.MkfsBtrfs

    connect(sigName: "notify::allocstart", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocstart", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allocstart", ...args: any[]): void
    connect(sigName: "notify::bytecount", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bytecount", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bytecount", ...args: any[]): void
    connect(sigName: "notify::datatype", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::datatype", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::datatype", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::leafsize", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::leafsize", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::leafsize", ...args: any[]): void
    connect(sigName: "notify::metadata", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadata", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::metadata", ...args: any[]): void
    connect(sigName: "notify::nodesize", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nodesize", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nodesize", ...args: any[]): void
    connect(sigName: "notify::sectorsize", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sectorsize", callback: (($obj: MkfsBtrfs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sectorsize", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_mkfs_btrfs.
 * @class 
 */
export class MkfsBtrfs extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.MkfsBtrfs

    static name: string
    static $gtype: GObject.GType<MkfsBtrfs>

    // Constructors of Guestfs-1.0.Guestfs.MkfsBtrfs

    constructor(config?: MkfsBtrfs.ConstructorProperties) 
    /**
     * Create a new GuestfsMkfsBtrfs object
     * @constructor 
     * @returns a new GuestfsMkfsBtrfs object
     */
    constructor() 
    /**
     * Create a new GuestfsMkfsBtrfs object
     * @constructor 
     * @returns a new GuestfsMkfsBtrfs object
     */
    static new(): MkfsBtrfs
    _init(config?: MkfsBtrfs.ConstructorProperties): void
}

export module Mksquashfs {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.Mksquashfs

        /**
         * A string.
         */
        compress?: string | null
    }

}

export interface Mksquashfs {

    // Own properties of Guestfs-1.0.Guestfs.Mksquashfs

    /**
     * A string.
     */
    compress: string | null

    // Own fields of Guestfs-1.0.Guestfs.Mksquashfs

    parent: GObject.Object
    priv: MksquashfsPrivate

    // Class property signals of Guestfs-1.0.Guestfs.Mksquashfs

    connect(sigName: "notify::compress", callback: (($obj: Mksquashfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compress", callback: (($obj: Mksquashfs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::compress", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_mksquashfs.
 * @class 
 */
export class Mksquashfs extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.Mksquashfs

    static name: string
    static $gtype: GObject.GType<Mksquashfs>

    // Constructors of Guestfs-1.0.Guestfs.Mksquashfs

    constructor(config?: Mksquashfs.ConstructorProperties) 
    /**
     * Create a new GuestfsMksquashfs object
     * @constructor 
     * @returns a new GuestfsMksquashfs object
     */
    constructor() 
    /**
     * Create a new GuestfsMksquashfs object
     * @constructor 
     * @returns a new GuestfsMksquashfs object
     */
    static new(): Mksquashfs
    _init(config?: Mksquashfs.ConstructorProperties): void
}

export module Mkswap {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.Mkswap

        /**
         * A string.
         */
        label?: string | null
        /**
         * A string.
         */
        uuid?: string | null
    }

}

export interface Mkswap {

    // Own properties of Guestfs-1.0.Guestfs.Mkswap

    /**
     * A string.
     */
    label: string | null
    /**
     * A string.
     */
    uuid: string | null

    // Own fields of Guestfs-1.0.Guestfs.Mkswap

    parent: GObject.Object
    priv: MkswapPrivate

    // Class property signals of Guestfs-1.0.Guestfs.Mkswap

    connect(sigName: "notify::label", callback: (($obj: Mkswap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Mkswap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::uuid", callback: (($obj: Mkswap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: Mkswap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uuid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_mkswap.
 * @class 
 */
export class Mkswap extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.Mkswap

    static name: string
    static $gtype: GObject.GType<Mkswap>

    // Constructors of Guestfs-1.0.Guestfs.Mkswap

    constructor(config?: Mkswap.ConstructorProperties) 
    /**
     * Create a new GuestfsMkswap object
     * @constructor 
     * @returns a new GuestfsMkswap object
     */
    constructor() 
    /**
     * Create a new GuestfsMkswap object
     * @constructor 
     * @returns a new GuestfsMkswap object
     */
    static new(): Mkswap
    _init(config?: Mkswap.ConstructorProperties): void
}

export module Mktemp {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.Mktemp

        /**
         * A string.
         */
        suffix?: string | null
    }

}

export interface Mktemp {

    // Own properties of Guestfs-1.0.Guestfs.Mktemp

    /**
     * A string.
     */
    suffix: string | null

    // Own fields of Guestfs-1.0.Guestfs.Mktemp

    parent: GObject.Object
    priv: MktempPrivate

    // Class property signals of Guestfs-1.0.Guestfs.Mktemp

    connect(sigName: "notify::suffix", callback: (($obj: Mktemp, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suffix", callback: (($obj: Mktemp, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::suffix", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_mktemp.
 * @class 
 */
export class Mktemp extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.Mktemp

    static name: string
    static $gtype: GObject.GType<Mktemp>

    // Constructors of Guestfs-1.0.Guestfs.Mktemp

    constructor(config?: Mktemp.ConstructorProperties) 
    /**
     * Create a new GuestfsMktemp object
     * @constructor 
     * @returns a new GuestfsMktemp object
     */
    constructor() 
    /**
     * Create a new GuestfsMktemp object
     * @constructor 
     * @returns a new GuestfsMktemp object
     */
    static new(): Mktemp
    _init(config?: Mktemp.ConstructorProperties): void
}

export module Mount9P {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.Mount9P

        /**
         * A string.
         */
        options?: string | null
    }

}

export interface Mount9P {

    // Own properties of Guestfs-1.0.Guestfs.Mount9P

    /**
     * A string.
     */
    options: string | null

    // Own fields of Guestfs-1.0.Guestfs.Mount9P

    parent: GObject.Object
    priv: Mount9PPrivate

    // Class property signals of Guestfs-1.0.Guestfs.Mount9P

    connect(sigName: "notify::options", callback: (($obj: Mount9P, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::options", callback: (($obj: Mount9P, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::options", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_mount_9p.
 * @class 
 */
export class Mount9P extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.Mount9P

    static name: string
    static $gtype: GObject.GType<Mount9P>

    // Constructors of Guestfs-1.0.Guestfs.Mount9P

    constructor(config?: Mount9P.ConstructorProperties) 
    /**
     * Create a new GuestfsMount9P object
     * @constructor 
     * @returns a new GuestfsMount9P object
     */
    constructor() 
    /**
     * Create a new GuestfsMount9P object
     * @constructor 
     * @returns a new GuestfsMount9P object
     */
    static new(): Mount9P
    _init(config?: Mount9P.ConstructorProperties): void
}

export module MountLocal {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.MountLocal

        /**
         * A 32-bit integer.
         */
        cachetimeout?: number | null
        /**
         * A boolean.
         */
        debugcalls?: Tristate | null
        /**
         * A string.
         */
        options?: string | null
        /**
         * A boolean.
         */
        readonly?: Tristate | null
    }

}

export interface MountLocal {

    // Own properties of Guestfs-1.0.Guestfs.MountLocal

    /**
     * A 32-bit integer.
     */
    cachetimeout: number
    /**
     * A boolean.
     */
    debugcalls: Tristate
    /**
     * A string.
     */
    options: string | null
    /**
     * A boolean.
     */
    readonly: Tristate

    // Own fields of Guestfs-1.0.Guestfs.MountLocal

    parent: GObject.Object
    priv: MountLocalPrivate

    // Class property signals of Guestfs-1.0.Guestfs.MountLocal

    connect(sigName: "notify::cachetimeout", callback: (($obj: MountLocal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cachetimeout", callback: (($obj: MountLocal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cachetimeout", ...args: any[]): void
    connect(sigName: "notify::debugcalls", callback: (($obj: MountLocal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::debugcalls", callback: (($obj: MountLocal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::debugcalls", ...args: any[]): void
    connect(sigName: "notify::options", callback: (($obj: MountLocal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::options", callback: (($obj: MountLocal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::options", ...args: any[]): void
    connect(sigName: "notify::readonly", callback: (($obj: MountLocal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::readonly", callback: (($obj: MountLocal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::readonly", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_mount_local.
 * @class 
 */
export class MountLocal extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.MountLocal

    static name: string
    static $gtype: GObject.GType<MountLocal>

    // Constructors of Guestfs-1.0.Guestfs.MountLocal

    constructor(config?: MountLocal.ConstructorProperties) 
    /**
     * Create a new GuestfsMountLocal object
     * @constructor 
     * @returns a new GuestfsMountLocal object
     */
    constructor() 
    /**
     * Create a new GuestfsMountLocal object
     * @constructor 
     * @returns a new GuestfsMountLocal object
     */
    static new(): MountLocal
    _init(config?: MountLocal.ConstructorProperties): void
}

export module NTFSResizeOpts {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.NTFSResizeOpts

        /**
         * A boolean.
         */
        force?: Tristate | null
        /**
         * A 64-bit integer.
         */
        size?: number | null
    }

}

export interface NTFSResizeOpts {

    // Own properties of Guestfs-1.0.Guestfs.NTFSResizeOpts

    /**
     * A boolean.
     */
    force: Tristate
    /**
     * A 64-bit integer.
     */
    size: number

    // Own fields of Guestfs-1.0.Guestfs.NTFSResizeOpts

    parent: GObject.Object
    priv: NTFSResizeOptsPrivate

    // Class property signals of Guestfs-1.0.Guestfs.NTFSResizeOpts

    connect(sigName: "notify::force", callback: (($obj: NTFSResizeOpts, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force", callback: (($obj: NTFSResizeOpts, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::force", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: NTFSResizeOpts, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: NTFSResizeOpts, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_ntfsresize.
 * @class 
 */
export class NTFSResizeOpts extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.NTFSResizeOpts

    static name: string
    static $gtype: GObject.GType<NTFSResizeOpts>

    // Constructors of Guestfs-1.0.Guestfs.NTFSResizeOpts

    constructor(config?: NTFSResizeOpts.ConstructorProperties) 
    /**
     * Create a new GuestfsNTFSResizeOpts object
     * @constructor 
     * @returns a new GuestfsNTFSResizeOpts object
     */
    constructor() 
    /**
     * Create a new GuestfsNTFSResizeOpts object
     * @constructor 
     * @returns a new GuestfsNTFSResizeOpts object
     */
    static new(): NTFSResizeOpts
    _init(config?: NTFSResizeOpts.ConstructorProperties): void
}

export module NtfscloneOut {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.NtfscloneOut

        /**
         * A boolean.
         */
        force?: Tristate | null
        /**
         * A boolean.
         */
        ignorefscheck?: Tristate | null
        /**
         * A boolean.
         */
        metadataonly?: Tristate | null
        /**
         * A boolean.
         */
        preservetimestamps?: Tristate | null
        /**
         * A boolean.
         */
        rescue?: Tristate | null
    }

}

export interface NtfscloneOut {

    // Own properties of Guestfs-1.0.Guestfs.NtfscloneOut

    /**
     * A boolean.
     */
    force: Tristate
    /**
     * A boolean.
     */
    ignorefscheck: Tristate
    /**
     * A boolean.
     */
    metadataonly: Tristate
    /**
     * A boolean.
     */
    preservetimestamps: Tristate
    /**
     * A boolean.
     */
    rescue: Tristate

    // Own fields of Guestfs-1.0.Guestfs.NtfscloneOut

    parent: GObject.Object
    priv: NtfscloneOutPrivate

    // Class property signals of Guestfs-1.0.Guestfs.NtfscloneOut

    connect(sigName: "notify::force", callback: (($obj: NtfscloneOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force", callback: (($obj: NtfscloneOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::force", ...args: any[]): void
    connect(sigName: "notify::ignorefscheck", callback: (($obj: NtfscloneOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ignorefscheck", callback: (($obj: NtfscloneOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ignorefscheck", ...args: any[]): void
    connect(sigName: "notify::metadataonly", callback: (($obj: NtfscloneOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadataonly", callback: (($obj: NtfscloneOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::metadataonly", ...args: any[]): void
    connect(sigName: "notify::preservetimestamps", callback: (($obj: NtfscloneOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preservetimestamps", callback: (($obj: NtfscloneOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::preservetimestamps", ...args: any[]): void
    connect(sigName: "notify::rescue", callback: (($obj: NtfscloneOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rescue", callback: (($obj: NtfscloneOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rescue", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_ntfsclone_out.
 * @class 
 */
export class NtfscloneOut extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.NtfscloneOut

    static name: string
    static $gtype: GObject.GType<NtfscloneOut>

    // Constructors of Guestfs-1.0.Guestfs.NtfscloneOut

    constructor(config?: NtfscloneOut.ConstructorProperties) 
    /**
     * Create a new GuestfsNtfscloneOut object
     * @constructor 
     * @returns a new GuestfsNtfscloneOut object
     */
    constructor() 
    /**
     * Create a new GuestfsNtfscloneOut object
     * @constructor 
     * @returns a new GuestfsNtfscloneOut object
     */
    static new(): NtfscloneOut
    _init(config?: NtfscloneOut.ConstructorProperties): void
}

export module Ntfsfix {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.Ntfsfix

        /**
         * A boolean.
         */
        clearbadsectors?: Tristate | null
    }

}

export interface Ntfsfix {

    // Own properties of Guestfs-1.0.Guestfs.Ntfsfix

    /**
     * A boolean.
     */
    clearbadsectors: Tristate

    // Own fields of Guestfs-1.0.Guestfs.Ntfsfix

    parent: GObject.Object
    priv: NtfsfixPrivate

    // Class property signals of Guestfs-1.0.Guestfs.Ntfsfix

    connect(sigName: "notify::clearbadsectors", callback: (($obj: Ntfsfix, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clearbadsectors", callback: (($obj: Ntfsfix, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clearbadsectors", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_ntfsfix.
 * @class 
 */
export class Ntfsfix extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.Ntfsfix

    static name: string
    static $gtype: GObject.GType<Ntfsfix>

    // Constructors of Guestfs-1.0.Guestfs.Ntfsfix

    constructor(config?: Ntfsfix.ConstructorProperties) 
    /**
     * Create a new GuestfsNtfsfix object
     * @constructor 
     * @returns a new GuestfsNtfsfix object
     */
    constructor() 
    /**
     * Create a new GuestfsNtfsfix object
     * @constructor 
     * @returns a new GuestfsNtfsfix object
     */
    static new(): Ntfsfix
    _init(config?: Ntfsfix.ConstructorProperties): void
}

export module Remount {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.Remount

        /**
         * A boolean.
         */
        rw?: Tristate | null
    }

}

export interface Remount {

    // Own properties of Guestfs-1.0.Guestfs.Remount

    /**
     * A boolean.
     */
    rw: Tristate

    // Own fields of Guestfs-1.0.Guestfs.Remount

    parent: GObject.Object
    priv: RemountPrivate

    // Class property signals of Guestfs-1.0.Guestfs.Remount

    connect(sigName: "notify::rw", callback: (($obj: Remount, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rw", callback: (($obj: Remount, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rw", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_remount.
 * @class 
 */
export class Remount extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.Remount

    static name: string
    static $gtype: GObject.GType<Remount>

    // Constructors of Guestfs-1.0.Guestfs.Remount

    constructor(config?: Remount.ConstructorProperties) 
    /**
     * Create a new GuestfsRemount object
     * @constructor 
     * @returns a new GuestfsRemount object
     */
    constructor() 
    /**
     * Create a new GuestfsRemount object
     * @constructor 
     * @returns a new GuestfsRemount object
     */
    static new(): Remount
    _init(config?: Remount.ConstructorProperties): void
}

export module Rsync {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.Rsync

        /**
         * A boolean.
         */
        archive?: Tristate | null
        /**
         * A boolean.
         */
        deletedest?: Tristate | null
    }

}

export interface Rsync {

    // Own properties of Guestfs-1.0.Guestfs.Rsync

    /**
     * A boolean.
     */
    archive: Tristate
    /**
     * A boolean.
     */
    deletedest: Tristate

    // Own fields of Guestfs-1.0.Guestfs.Rsync

    parent: GObject.Object
    priv: RsyncPrivate

    // Class property signals of Guestfs-1.0.Guestfs.Rsync

    connect(sigName: "notify::archive", callback: (($obj: Rsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::archive", callback: (($obj: Rsync, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::archive", ...args: any[]): void
    connect(sigName: "notify::deletedest", callback: (($obj: Rsync, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletedest", callback: (($obj: Rsync, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deletedest", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_rsync.
 * @class 
 */
export class Rsync extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.Rsync

    static name: string
    static $gtype: GObject.GType<Rsync>

    // Constructors of Guestfs-1.0.Guestfs.Rsync

    constructor(config?: Rsync.ConstructorProperties) 
    /**
     * Create a new GuestfsRsync object
     * @constructor 
     * @returns a new GuestfsRsync object
     */
    constructor() 
    /**
     * Create a new GuestfsRsync object
     * @constructor 
     * @returns a new GuestfsRsync object
     */
    static new(): Rsync
    _init(config?: Rsync.ConstructorProperties): void
}

export module RsyncIn {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.RsyncIn

        /**
         * A boolean.
         */
        archive?: Tristate | null
        /**
         * A boolean.
         */
        deletedest?: Tristate | null
    }

}

export interface RsyncIn {

    // Own properties of Guestfs-1.0.Guestfs.RsyncIn

    /**
     * A boolean.
     */
    archive: Tristate
    /**
     * A boolean.
     */
    deletedest: Tristate

    // Own fields of Guestfs-1.0.Guestfs.RsyncIn

    parent: GObject.Object
    priv: RsyncInPrivate

    // Class property signals of Guestfs-1.0.Guestfs.RsyncIn

    connect(sigName: "notify::archive", callback: (($obj: RsyncIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::archive", callback: (($obj: RsyncIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::archive", ...args: any[]): void
    connect(sigName: "notify::deletedest", callback: (($obj: RsyncIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletedest", callback: (($obj: RsyncIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deletedest", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_rsync_in.
 * @class 
 */
export class RsyncIn extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.RsyncIn

    static name: string
    static $gtype: GObject.GType<RsyncIn>

    // Constructors of Guestfs-1.0.Guestfs.RsyncIn

    constructor(config?: RsyncIn.ConstructorProperties) 
    /**
     * Create a new GuestfsRsyncIn object
     * @constructor 
     * @returns a new GuestfsRsyncIn object
     */
    constructor() 
    /**
     * Create a new GuestfsRsyncIn object
     * @constructor 
     * @returns a new GuestfsRsyncIn object
     */
    static new(): RsyncIn
    _init(config?: RsyncIn.ConstructorProperties): void
}

export module RsyncOut {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.RsyncOut

        /**
         * A boolean.
         */
        archive?: Tristate | null
        /**
         * A boolean.
         */
        deletedest?: Tristate | null
    }

}

export interface RsyncOut {

    // Own properties of Guestfs-1.0.Guestfs.RsyncOut

    /**
     * A boolean.
     */
    archive: Tristate
    /**
     * A boolean.
     */
    deletedest: Tristate

    // Own fields of Guestfs-1.0.Guestfs.RsyncOut

    parent: GObject.Object
    priv: RsyncOutPrivate

    // Class property signals of Guestfs-1.0.Guestfs.RsyncOut

    connect(sigName: "notify::archive", callback: (($obj: RsyncOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::archive", callback: (($obj: RsyncOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::archive", ...args: any[]): void
    connect(sigName: "notify::deletedest", callback: (($obj: RsyncOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletedest", callback: (($obj: RsyncOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deletedest", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_rsync_out.
 * @class 
 */
export class RsyncOut extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.RsyncOut

    static name: string
    static $gtype: GObject.GType<RsyncOut>

    // Constructors of Guestfs-1.0.Guestfs.RsyncOut

    constructor(config?: RsyncOut.ConstructorProperties) 
    /**
     * Create a new GuestfsRsyncOut object
     * @constructor 
     * @returns a new GuestfsRsyncOut object
     */
    constructor() 
    /**
     * Create a new GuestfsRsyncOut object
     * @constructor 
     * @returns a new GuestfsRsyncOut object
     */
    static new(): RsyncOut
    _init(config?: RsyncOut.ConstructorProperties): void
}

export module SelinuxRelabel {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.SelinuxRelabel

        /**
         * A boolean.
         */
        force?: Tristate | null
    }

}

export interface SelinuxRelabel {

    // Own properties of Guestfs-1.0.Guestfs.SelinuxRelabel

    /**
     * A boolean.
     */
    force: Tristate

    // Own fields of Guestfs-1.0.Guestfs.SelinuxRelabel

    parent: GObject.Object
    priv: SelinuxRelabelPrivate

    // Class property signals of Guestfs-1.0.Guestfs.SelinuxRelabel

    connect(sigName: "notify::force", callback: (($obj: SelinuxRelabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force", callback: (($obj: SelinuxRelabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::force", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_selinux_relabel.
 * @class 
 */
export class SelinuxRelabel extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.SelinuxRelabel

    static name: string
    static $gtype: GObject.GType<SelinuxRelabel>

    // Constructors of Guestfs-1.0.Guestfs.SelinuxRelabel

    constructor(config?: SelinuxRelabel.ConstructorProperties) 
    /**
     * Create a new GuestfsSelinuxRelabel object
     * @constructor 
     * @returns a new GuestfsSelinuxRelabel object
     */
    constructor() 
    /**
     * Create a new GuestfsSelinuxRelabel object
     * @constructor 
     * @returns a new GuestfsSelinuxRelabel object
     */
    static new(): SelinuxRelabel
    _init(config?: SelinuxRelabel.ConstructorProperties): void
}

export module Session {

    // Signal callback interfaces

    /**
     * Signal callback interface for `appliance`
     */
    export interface ApplianceSignalCallback {
        ($obj: Session, params: SessionEventParams): void
    }

    /**
     * Signal callback interface for `close`
     */
    export interface CloseSignalCallback {
        ($obj: Session, params: SessionEventParams): void
    }

    /**
     * Signal callback interface for `enter`
     */
    export interface EnterSignalCallback {
        ($obj: Session, params: SessionEventParams): void
    }

    /**
     * Signal callback interface for `launch-done`
     */
    export interface LaunchDoneSignalCallback {
        ($obj: Session, object: SessionEventParams): void
    }

    /**
     * Signal callback interface for `library`
     */
    export interface LibrarySignalCallback {
        ($obj: Session, params: SessionEventParams): void
    }

    /**
     * Signal callback interface for `libvirt-auth`
     */
    export interface LibvirtAuthSignalCallback {
        ($obj: Session, object: SessionEventParams): void
    }

    /**
     * Signal callback interface for `progress`
     */
    export interface ProgressSignalCallback {
        ($obj: Session, params: SessionEventParams): void
    }

    /**
     * Signal callback interface for `subprocess-quit`
     */
    export interface SubprocessQuitSignalCallback {
        ($obj: Session, object: SessionEventParams): void
    }

    /**
     * Signal callback interface for `trace`
     */
    export interface TraceSignalCallback {
        ($obj: Session, params: SessionEventParams): void
    }

    /**
     * Signal callback interface for `warning`
     */
    export interface WarningSignalCallback {
        ($obj: Session, params: SessionEventParams): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Session {

    // Own fields of Guestfs-1.0.Guestfs.Session

    parent: GObject.Object
    priv: SessionPrivate

    // Owm methods of Guestfs-1.0.Guestfs.Session

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
    acl_delete_def_file(dir: string): boolean
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
    acl_get_file(path: string, acltype: string): string | null
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
    acl_set_file(path: string, acltype: string, acl: string): boolean
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
    add_cdrom(filename: string): boolean
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
     * url='http://libvirt.org/remote.html'> http://libvirt.org/remote.html
     * </ulink>) will fail unless those disks are accessible via the same
     * device path locally too.
     * 
     * The optional `libvirturi` parameter sets the libvirt URI (see <ulink
     * url='http://libvirt.org/uri.html'> http://libvirt.org/uri.html
     * </ulink>). If this is not set then we connect to the default libvirt URI
     * (or one set through an environment variable, see the libvirt
     * documentation for full details).
     * 
     * The optional `live` flag controls whether this call will try to connect
     * to a running virtual machine `guestfsd` process if it sees a suitable
     * &lt;channel&gt; element in the libvirt XML definition. The default (if
     * the flag is omitted) is never to try. See "ATTACHING TO RUNNING DAEMONS"
     * in guestfs(3) for more information.
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
     * The other optional parameters are passed directly through to
     * guestfs_session_add_drive_opts().
     * @param dom 
     * @param optargs a GuestfsAddDomain containing optional arguments
     * @returns the returned value, or -1 on error
     */
    add_domain(dom: string, optargs: AddDomain | null): number
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
     * In libguestfs &ge; 1.20 you can also call this function after launch
     * (with some restrictions). This is called "hotplugging". When
     * hotplugging, you must specify a `label` so that the new disk gets a
     * predictable name. For more information see "HOTPLUGGING" in guestfs(3).
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
     * The name the drive had in the original guest, e.g. /dev/sdb. This is
     * used as a hint to the guest inspection process if it is available.
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
     * @param filename 
     * @param optargs a GuestfsAddDrive containing optional arguments
     * @returns true on success, false on error
     */
    add_drive(filename: string, optargs: AddDrive | null): boolean
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
    add_drive_ro(filename: string): boolean
    /**
     * add a drive read-only specifying the QEMU block emulation to use
     * 
     * This is the same as guestfs_session_add_drive_ro() but it allows you to
     * specify the QEMU interface emulation to use at run time.
     * @param filename 
     * @param iface 
     * @returns true on success, false on error
     */
    add_drive_ro_with_if(filename: string, iface: string): boolean
    /**
     * add a temporary scratch drive
     * 
     * This command adds a temporary scratch drive to the handle. The `size`
     * parameter is the virtual size (in bytes). The scratch drive is blank
     * initially (all reads return zeroes until you start writing to it). The
     * drive is deleted when the handle is closed.
     * 
     * The optional arguments `name` and `label` are passed through to
     * guestfs_session_add_drive().
     * @param size 
     * @param optargs a GuestfsAddDriveScratch containing optional arguments
     * @returns true on success, false on error
     */
    add_drive_scratch(size: number, optargs: AddDriveScratch | null): boolean
    /**
     * add a drive specifying the QEMU block emulation to use
     * 
     * This is the same as guestfs_session_add_drive() but it allows you to
     * specify the QEMU interface emulation to use at run time.
     * @param filename 
     * @param iface 
     * @returns true on success, false on error
     */
    add_drive_with_if(filename: string, iface: string): boolean
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
     * url='http://libvirt.org/remote.html'> http://libvirt.org/remote.html
     * </ulink>) will fail unless those disks are accessible via the same
     * device path locally too.
     * 
     * The optional `live` flag controls whether this call will try to connect
     * to a running virtual machine `guestfsd` process if it sees a suitable
     * &lt;channel&gt; element in the libvirt XML definition. The default (if
     * the flag is omitted) is never to try. See "ATTACHING TO RUNNING DAEMONS"
     * in guestfs(3) for more information.
     * 
     * The optional `readonlydisk` parameter controls what we do for disks which
     * are marked &lt;readonly/&gt; in the libvirt XML. See
     * guestfs_session_add_domain() for possible values.
     * 
     * The other optional parameters are passed directly through to
     * guestfs_session_add_drive_opts().
     * @param dom pointer (not implemented in gobject bindings)
     * @param optargs a GuestfsAddLibvirtDom containing optional arguments
     * @returns the returned value, or -1 on error
     */
    add_libvirt_dom(dom: any | null, optargs: AddLibvirtDom | null): number
    /**
     * clear Augeas path
     * 
     * Set the value associated with `path` to `NULL`. This is the same as the
     * augtool(1) `clear` command.
     * @param augpath 
     * @returns true on success, false on error
     */
    aug_clear(augpath: string): boolean
    /**
     * close the current Augeas handle
     * 
     * Close the current Augeas handle and free up any resources used by it.
     * After calling this, you have to call guestfs_session_aug_init() again
     * before you can use any other Augeas functions.
     * @returns true on success, false on error
     */
    aug_close(): boolean
    /**
     * define an Augeas node
     * 
     * Defines a variable `name` whose value is the result of evaluating `expr`.
     * 
     * If `expr` evaluates to an empty nodeset, a node is created, equivalent to
     * calling guestfs_session_aug_set() `expr,` `value`. `name` will be the
     * nodeset containing that single node.
     * 
     * On success this returns a pair containing the number of nodes in the
     * nodeset, and a boolean flag if a node was created.
     * @param name 
     * @param expr 
     * @param val 
     * @returns a IntBool object, or NULL on error
     */
    aug_defnode(name: string, expr: string, val: string): IntBool
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
    aug_defvar(name: string, expr: string | null): number
    /**
     * look up the value of an Augeas path
     * 
     * Look up the value associated with `path`. If `path` matches exactly one
     * node, the `value` is returned.
     * @param augpath 
     * @returns the returned string, or NULL on error
     */
    aug_get(augpath: string): string | null
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
    aug_init(root: string, flags: number): boolean
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
    aug_insert(augpath: string, label: string, before: boolean): boolean
    /**
     * return the label from an Augeas path expression
     * 
     * The label (name of the last element) of the Augeas path expression
     * `augpath` is returned. `augpath` must match exactly one node, else this
     * function returns an error.
     * @param augpath 
     * @returns the returned string, or NULL on error
     */
    aug_label(augpath: string): string | null
    /**
     * load files into the tree
     * 
     * Load files into the tree.
     * 
     * See `aug_load` in the Augeas documentation for the full gory details.
     * @returns true on success, false on error
     */
    aug_load(): boolean
    /**
     * list Augeas nodes under augpath
     * 
     * This is just a shortcut for listing guestfs_session_aug_match() "path/*"
     * and sorting the resulting nodes into alphabetical order.
     * @param augpath 
     * @returns an array of returned strings, or NULL on error
     */
    aug_ls(augpath: string): string[]
    /**
     * return Augeas nodes which match augpath
     * 
     * Returns a list of paths which match the path expression `path`. The
     * returned paths are sufficiently qualified so that they match exactly one
     * node in the current tree.
     * @param augpath 
     * @returns an array of returned strings, or NULL on error
     */
    aug_match(augpath: string): string[]
    /**
     * move Augeas node
     * 
     * Move the node `src` to `dest`. `src` must match exactly one node. `dest` is
     * overwritten if it exists.
     * @param src 
     * @param dest 
     * @returns true on success, false on error
     */
    aug_mv(src: string, dest: string): boolean
    /**
     * remove an Augeas path
     * 
     * Remove `path` and all of its children.
     * 
     * On success this returns the number of entries which were removed.
     * @param augpath 
     * @returns the returned value, or -1 on error
     */
    aug_rm(augpath: string): number
    /**
     * write all pending Augeas changes to disk
     * 
     * This writes all pending changes to disk.
     * 
     * The flags which were passed to guestfs_session_aug_init() affect exactly
     * how files are saved.
     * @returns true on success, false on error
     */
    aug_save(): boolean
    /**
     * set Augeas path to value
     * 
     * Set the value associated with `path` to `val`.
     * 
     * In the Augeas API, it is possible to clear a node by setting the value
     * to NULL. Due to an oversight in the libguestfs API you cannot do that
     * with this call. Instead you must use the guestfs_session_aug_clear()
     * call.
     * @param augpath 
     * @param val 
     * @returns true on success, false on error
     */
    aug_set(augpath: string, val: string): boolean
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
    aug_setm(base: string, sub: string | null, val: string): number
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
    aug_transform(lens: string, file: string, optargs: AugTransform | null): boolean
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
    available(groups: string[]): boolean
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
    available_all_groups(): string[]
    /**
     * upload base64-encoded data to file
     * 
     * This command uploads base64-encoded data from `base6`4file to filename.
     * @param base64file 
     * @param filename 
     * @param cancellable A GCancellable object
     * @returns true on success, false on error
     */
    base64_in(base64file: string, filename: string, cancellable: Gio.Cancellable | null): boolean
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
    base64_out(filename: string, base64file: string, cancellable: Gio.Cancellable | null): boolean
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
    blkdiscard(device: string): boolean
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
    blkdiscardzeroes(device: string): number
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
    blkid(device: string): GLib.HashTable
    /**
     * flush device buffers
     * 
     * This tells the kernel to flush internal buffers associated with `device`.
     * 
     * This uses the blockdev(8) command.
     * @param device 
     * @returns true on success, false on error
     */
    blockdev_flushbufs(device: string): boolean
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
    blockdev_getbsz(device: string): number
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
    blockdev_getro(device: string): number
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
    blockdev_getsize64(device: string): number
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
    blockdev_getss(device: string): number
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
    blockdev_getsz(device: string): number
    /**
     * reread partition table
     * 
     * Reread the partition table on `device`.
     * 
     * This uses the blockdev(8) command.
     * @param device 
     * @returns true on success, false on error
     */
    blockdev_rereadpt(device: string): boolean
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
    blockdev_setbsz(device: string, blocksize: number): boolean
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
    blockdev_setra(device: string, sectors: number): boolean
    /**
     * set block device to read-only
     * 
     * Sets the block device named `device` to read-only.
     * 
     * This uses the blockdev(8) command.
     * @param device 
     * @returns true on success, false on error
     */
    blockdev_setro(device: string): boolean
    /**
     * set block device to read-write
     * 
     * Sets the block device named `device` to read-write.
     * 
     * This uses the blockdev(8) command.
     * @param device 
     * @returns true on success, false on error
     */
    blockdev_setrw(device: string): boolean
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
    btrfs_balance_cancel(path: string): boolean
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
    btrfs_balance_pause(path: string): boolean
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
    btrfs_balance_resume(path: string): boolean
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
    btrfs_balance_status(path: string): BTRFSBalance
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
    btrfs_device_add(devices: string[], fs: string): boolean
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
    btrfs_device_delete(devices: string[], fs: string): boolean
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
    btrfs_filesystem_balance(fs: string): boolean
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
    btrfs_filesystem_defragment(path: string, optargs: BTRFSFilesystemDefragment | null): boolean
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
    btrfs_filesystem_resize(mountpoint: string, optargs: BTRFSFilesystemResize | null): boolean
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
    btrfs_filesystem_show(device: string): string[]
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
    btrfs_filesystem_sync(fs: string): boolean
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
    btrfs_fsck(device: string, optargs: BtrfsFsck | null): boolean
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
    btrfs_image(source: string[], image: string, optargs: BTRFSImage | null): boolean
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
    btrfs_qgroup_assign(src: string, dst: string, path: string): boolean
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
    btrfs_qgroup_create(qgroupid: string, subvolume: string): boolean
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
    btrfs_qgroup_destroy(qgroupid: string, subvolume: string): boolean
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
    btrfs_qgroup_limit(subvolume: string, size: number): boolean
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
    btrfs_qgroup_remove(src: string, dst: string, path: string): boolean
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
    btrfs_qgroup_show(path: string): BTRFSQgroup[]
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
    btrfs_quota_enable(fs: string, enable: boolean): boolean
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
    btrfs_quota_rescan(fs: string): boolean
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
    btrfs_replace(srcdev: string, targetdev: string, mntpoint: string): boolean
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
    btrfs_rescue_chunk_recover(device: string): boolean
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
    btrfs_rescue_super_recover(device: string): boolean
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
    btrfs_scrub_cancel(path: string): boolean
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
    btrfs_scrub_resume(path: string): boolean
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
    btrfs_scrub_start(path: string): boolean
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
    btrfs_scrub_status(path: string): BTRFSScrub
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
    btrfs_set_seeding(device: string, seeding: boolean): boolean
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
    btrfs_subvolume_create(dest: string, optargs: BTRFSSubvolumeCreate | null): boolean
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
    btrfs_subvolume_delete(subvolume: string): boolean
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
    btrfs_subvolume_get_default(fs: string): number
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
    btrfs_subvolume_list(fs: string): BTRFSSubvolume[]
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
    btrfs_subvolume_set_default(id: number, fs: string): boolean
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
    btrfs_subvolume_show(subvolume: string): GLib.HashTable
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
    btrfs_subvolume_snapshot(source: string, dest: string, optargs: BTRFSSubvolumeSnapshot | null): boolean
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
    btrfstune_enable_extended_inode_refs(device: string): boolean
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
    btrfstune_enable_skinny_metadata_extent_refs(device: string): boolean
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
    btrfstune_seeding(device: string, seeding: boolean): boolean
    /**
     * return the C pointer to the guestfs_h handle
     * 
     * In non-C language bindings, this allows you to retrieve the underlying C
     * pointer to the handle (ie. "guestfs_h *"). The purpose of this is to
     * allow other libraries to interwork with libguestfs.
     * @returns the returned value, or -1 on error
     */
    c_pointer(): number
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
    canonical_device_name(device: string): string | null
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
    cap_get_file(path: string): string | null
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
    cap_set_file(path: string, cap: string): boolean
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
     * url='http://www.tuxera.com/community/ntfs-3g-faq/#posixfilenames1'>
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
    case_sensitive_path(path: string): string | null
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
    cat(path: string): string | null
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
     * Compute the MD5 hash (using the `md5`sum program).
     * 
     * `sha1`
     * Compute the SHA1 hash (using the `sha1`sum program).
     * 
     * `sha2`24
     * Compute the SHA224 hash (using the `sha2`24sum program).
     * 
     * `sha2`56
     * Compute the SHA256 hash (using the `sha2`56sum program).
     * 
     * `sha3`84
     * Compute the SHA384 hash (using the `sha3`84sum program).
     * 
     * `sha5`12
     * Compute the SHA512 hash (using the `sha5`12sum program).
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
    checksum(csumtype: string, path: string): string | null
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
    checksum_device(csumtype: string, device: string): string | null
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
    checksums_out(csumtype: string, directory: string, sumsfile: string, cancellable: Gio.Cancellable | null): boolean
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
    chmod(mode: number, path: string): boolean
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
    chown(owner: number, group: number, path: string): boolean
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
    clear_backend_setting(name: string): number
    /**
     * Close a libguestfs session.
     * @returns true on success, false on error
     */
    close(): boolean
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
     * @param arguments_ an array of strings
     * @returns the returned string, or NULL on error
     */
    command(arguments_: string[]): string | null
    /**
     * run a command, returning lines
     * 
     * This is the same as guestfs_session_command(), but splits the result
     * into a list of lines.
     * 
     * See also: guestfs_session_sh_lines()
     * @param arguments_ an array of strings
     * @returns an array of returned strings, or NULL on error
     */
    command_lines(arguments_: string[]): string[]
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
    compress_device_out(ctype: string, device: string, zdevice: string, optargs: CompressDeviceOut | null, cancellable: Gio.Cancellable | null): boolean
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
    compress_out(ctype: string, file: string, zfile: string, optargs: CompressOut | null, cancellable: Gio.Cancellable | null): boolean
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
    config(hvparam: string, hvvalue: string | null): boolean
    /**
     * copy the attributes of a path (file/directory) to another
     * 
     * Copy the attributes of a path (which can be a file or a directory) to
     * another path.
     * 
     * By default `no` attribute is copied, so make sure to specify any (or `all`
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
    copy_attributes(src: string, dest: string, optargs: CopyAttributes | null): boolean
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
    copy_device_to_device(src: string, dest: string, optargs: CopyDeviceToDevice | null): boolean
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
    copy_device_to_file(src: string, dest: string, optargs: CopyDeviceToFile | null): boolean
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
    copy_file_to_device(src: string, dest: string, optargs: CopyFileToDevice | null): boolean
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
    copy_file_to_file(src: string, dest: string, optargs: CopyFileToFile | null): boolean
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
    copy_in(localpath: string, remotedir: string): boolean
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
    copy_out(remotepath: string, localdir: string): boolean
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
    copy_size(src: string, dest: string, size: number): boolean
    /**
     * copy a file
     * 
     * This copies a file from `src` to `dest` where `dest` is either a
     * destination filename or destination directory.
     * @param src 
     * @param dest 
     * @returns true on success, false on error
     */
    cp(src: string, dest: string): boolean
    /**
     * copy a file or directory recursively
     * 
     * This copies a file or directory from `src` to `dest` recursively using the
     * "cp -a" command.
     * @param src 
     * @param dest 
     * @returns true on success, false on error
     */
    cp_a(src: string, dest: string): boolean
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
    cp_r(src: string, dest: string): boolean
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
    cpio_out(directory: string, cpiofile: string, optargs: CpioOut | null, cancellable: Gio.Cancellable | null): boolean
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
    dd(src: string, dest: string): boolean
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
    debug(subcmd: string, extraargs: string[]): string | null
    /**
     * debug the drives (internal use only)
     * 
     * This returns the internal list of drives. ‘debug’ commands are not part
     * of the formal API and can be removed or changed at any time.
     * @returns an array of returned strings, or NULL on error
     */
    debug_drives(): string[]
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
    debug_upload(filename: string, tmpname: string, mode: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * convert device to index
     * 
     * This function takes a device name (eg. "/dev/sdb") and returns the index
     * of the device in the list of devices.
     * 
     * Index numbers start from 0. The named device must exist, for example as
     * a string returned from guestfs_session_list_devices().
     * 
     * See also guestfs_session_list_devices(), guestfs_session_part_to_dev().
     * @param device 
     * @returns the returned value, or -1 on error
     */
    device_index(device: string): number
    /**
     * report file system disk space usage
     * 
     * This command runs the `df` command to report disk space used.
     * 
     * This command is mostly useful for interactive sessions. It is *not*
     * intended that you try to parse the output string. Use
     * guestfs_session_statvfs() from programs.
     * @returns the returned string, or NULL on error
     */
    df(): string | null
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
    df_h(): string | null
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
    disk_create(filename: string, format: string, size: number, optargs: DiskCreate | null): boolean
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
    disk_format(filename: string): string | null
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
    disk_has_backing_file(filename: string): number
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
    disk_virtual_size(filename: string): number
    /**
     * return kernel messages
     * 
     * This returns the kernel messages (`dmesg` output) from the guest kernel.
     * This is sometimes useful for extended debugging of problems.
     * 
     * Another way to get the same information is to enable verbose messages
     * with guestfs_session_set_verbose() or by setting the environment
     * variable "LIBGUESTFS_DEBUG=1" before running the program.
     * @returns the returned string, or NULL on error
     */
    dmesg(): string | null
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
    download(remotefilename: string, filename: string, cancellable: Gio.Cancellable | null): boolean
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
    download_blocks(device: string, start: number, stop: number, filename: string, optargs: DownloadBlocks | null, cancellable: Gio.Cancellable | null): boolean
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
    download_inode(device: string, inode: number, filename: string, cancellable: Gio.Cancellable | null): boolean
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
    download_offset(remotefilename: string, filename: string, offset: number, size: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * drop kernel page cache, dentries and inodes
     * 
     * This instructs the guest kernel to drop its page cache, and/or dentries
     * and inode caches. The parameter `whattodrop` tells the kernel what
     * precisely to drop, see <ulink url='http://linux-mm.org/Drop_Caches'>
     * http://linux-mm.org/Drop_Caches </ulink>
     * 
     * Setting `whattodrop` to 3 should drop everything.
     * 
     * This automatically calls sync(2) before the operation, so that the
     * maximum guest memory is freed.
     * @param whattodrop 
     * @returns true on success, false on error
     */
    drop_caches(whattodrop: number): boolean
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
    du(path: string): number
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
    e2fsck(device: string, optargs: E2fsck | null): boolean
    /**
     * check an ext2/ext3 filesystem
     * 
     * This runs "e2fsck -p -f device", ie. runs the ext2/ext3 filesystem
     * checker on `device,` noninteractively (*-p*), even if the filesystem
     * appears to be clean (*-f*).
     * @param device 
     * @returns true on success, false on error
     */
    e2fsck_f(device: string): boolean
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
    echo_daemon(words: string[]): string | null
    /**
     * return lines matching a pattern
     * 
     * This calls the external `egrep` program and returns the matching lines.
     * @param regex 
     * @param path 
     * @returns an array of returned strings, or NULL on error
     */
    egrep(regex: string, path: string): string[]
    /**
     * return lines matching a pattern
     * 
     * This calls the external "egrep -i" program and returns the matching
     * lines.
     * @param regex 
     * @param path 
     * @returns an array of returned strings, or NULL on error
     */
    egrepi(regex: string, path: string): string[]
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
    equal(file1: string, file2: string): number
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
    exists(path: string): number
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
    extlinux(directory: string): boolean
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
    f2fs_expand(device: string): boolean
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
    fallocate(path: string, len: number): boolean
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
    fallocate64(path: string, len: number): boolean
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
    feature_available(groups: string[]): number
    /**
     * return lines matching a pattern
     * 
     * This calls the external `fgrep` program and returns the matching lines.
     * @param pattern 
     * @param path 
     * @returns an array of returned strings, or NULL on error
     */
    fgrep(pattern: string, path: string): string[]
    /**
     * return lines matching a pattern
     * 
     * This calls the external "fgrep -i" program and returns the matching
     * lines.
     * @param pattern 
     * @param path 
     * @returns an array of returned strings, or NULL on error
     */
    fgrepi(pattern: string, path: string): string[]
    /**
     * determine file type
     * 
     * This call uses the standard file(1) command to determine the type or
     * contents of the file.
     * 
     * This call will also transparently look inside various types of
     * compressed file.
     * 
     * The exact command which runs is "file -zb path". Note in particular that
     * the filename is not prepended to the output (the *-b* option).
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
    file(path: string): string | null
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
    file_architecture(filename: string): string | null
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
    filesize(file: string): number
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
    filesystem_available(filesystem: string): number
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
    filesystem_walk(device: string, cancellable: Gio.Cancellable | null): TSKDirent[]
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
    fill(c: number, len: number, path: string): boolean
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
    fill_dir(dir: string, nr: number): boolean
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
    fill_pattern(pattern: string, len: number, path: string): boolean
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
    find(directory: string): string[]
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
    find0(directory: string, files: string, cancellable: Gio.Cancellable | null): boolean
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
    find_inode(device: string, inode: number, cancellable: Gio.Cancellable | null): TSKDirent[]
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
    findfs_label(label: string): string | null
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
    findfs_uuid(uuid: string): string | null
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
    fsck(fstype: string, device: string): number
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
    fstrim(mountpoint: string, optargs: Fstrim | null): boolean
    /**
     * get the additional kernel options
     * 
     * Return the additional kernel options which are added to the libguestfs
     * appliance kernel command line.
     * 
     * If `NULL` then no options are added.
     * @returns the returned string. Note that NULL does not indicate error
     */
    get_append(): string
    /**
     * get the backend
     * 
     * Return the current backend.
     * 
     * See guestfs_session_set_backend() and "BACKEND" in guestfs(3).
     * @returns the returned string, or NULL on error
     */
    get_attach_method(): string | null
    /**
     * get autosync mode
     * 
     * Get the autosync flag.
     * @returns the returned value, or -1 on error
     */
    get_autosync(): number
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
    get_backend(): string | null
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
    get_backend_setting(name: string): string | null
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
    get_backend_settings(): string[]
    /**
     * get the appliance cache directory
     * 
     * Get the directory used by the handle to store the appliance cache.
     * @returns the returned string, or NULL on error
     */
    get_cachedir(): string | null
    /**
     * get direct appliance mode flag
     * 
     * Return the direct appliance mode flag.
     * @returns the returned value, or -1 on error
     */
    get_direct(): number
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
    get_e2attrs(file: string): string | null
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
    get_e2generation(file: string): number
    /**
     * get the ext2/3/4 filesystem label
     * 
     * This returns the ext2/3/4 filesystem label of the filesystem on `device`.
     * @param device 
     * @returns the returned string, or NULL on error
     */
    get_e2label(device: string): string | null
    /**
     * get the ext2/3/4 filesystem UUID
     * 
     * This returns the ext2/3/4 filesystem UUID of the filesystem on `device`.
     * @param device 
     * @returns the returned string, or NULL on error
     */
    get_e2uuid(device: string): string | null
    /**
     * get the hypervisor binary
     * 
     * Return the current hypervisor binary.
     * 
     * This is always non-NULL. If it wasn't set already, then this will return
     * the default qemu binary name.
     * @returns the returned string, or NULL on error
     */
    get_hv(): string | null
    /**
     * get the handle identifier
     * 
     * Get the handle identifier. See guestfs_session_set_identifier().
     * @returns the returned string, or NULL on error
     */
    get_identifier(): string
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
    get_libvirt_requested_credential_challenge(index: number): string | null
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
    get_libvirt_requested_credential_defresult(index: number): string | null
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
    get_libvirt_requested_credential_prompt(index: number): string | null
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
    get_libvirt_requested_credentials(): string[]
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
    get_memsize(): number
    /**
     * get enable network flag
     * 
     * This returns the enable network flag.
     * @returns the returned value, or -1 on error
     */
    get_network(): number
    /**
     * get the search path
     * 
     * Return the current search path.
     * 
     * This is always non-NULL. If it wasn't set already, then this will return
     * the default path.
     * @returns the returned string, or NULL on error
     */
    get_path(): string
    /**
     * get process group flag
     * 
     * This returns the process group flag.
     * @returns the returned value, or -1 on error
     */
    get_pgroup(): number
    /**
     * get PID of hypervisor
     * 
     * Return the process ID of the hypervisor. If there is no hypervisor
     * running, then this will return an error.
     * 
     * This is an internal call used for debugging and testing.
     * @returns the returned value, or -1 on error
     */
    get_pid(): number
    /**
     * get the program name
     * 
     * Get the program name. See guestfs_session_set_program().
     * @returns the returned string, or NULL on error
     */
    get_program(): string
    /**
     * get the hypervisor binary (usually qemu)
     * 
     * Return the current hypervisor binary (usually qemu).
     * 
     * This is always non-NULL. If it wasn't set already, then this will return
     * the default qemu binary name.
     * @returns the returned string, or NULL on error
     */
    get_qemu(): string
    /**
     * get recovery process enabled flag
     * 
     * Return the recovery process enabled flag.
     * @returns the returned value, or -1 on error
     */
    get_recovery_proc(): number
    /**
     * get SELinux enabled flag
     * 
     * This returns the current setting of the selinux flag which is passed to
     * the appliance at boot time. See guestfs_session_set_selinux().
     * 
     * For more information on the architecture of libguestfs, see guestfs(3).
     * @returns the returned value, or -1 on error
     */
    get_selinux(): number
    /**
     * get number of virtual CPUs in appliance
     * 
     * This returns the number of virtual CPUs assigned to the appliance.
     * @returns the returned value, or -1 on error
     */
    get_smp(): number
    /**
     * get the temporary directory for sockets
     * 
     * Get the directory used by the handle to store temporary socket files.
     * 
     * This is different from guestfs_session_tmpdir(), as we need shorter
     * paths for sockets (due to the limited buffers of filenames for UNIX
     * sockets), and guestfs_session_tmpdir() may be too long for them.
     * 
     * The environment variable `XDG_RUNTIME_DIR` controls the default value: If
     * `XDG_RUNTIME_DIR` is set, then that is the default. Else /tmp is the
     * default.
     * @returns the returned string, or NULL on error
     */
    get_sockdir(): string | null
    /**
     * get the current state
     * 
     * This returns the current state as an opaque integer. This is only useful
     * for printing debug and internal error messages.
     * 
     * For more information on states, see guestfs(3).
     * @returns the returned value, or -1 on error
     */
    get_state(): number
    /**
     * get the temporary directory
     * 
     * Get the directory used by the handle to store temporary files.
     * @returns the returned string, or NULL on error
     */
    get_tmpdir(): string | null
    /**
     * get command trace enabled flag
     * 
     * Return the command trace flag.
     * @returns the returned value, or -1 on error
     */
    get_trace(): number
    /**
     * get the current umask
     * 
     * Return the current umask. By default the umask is `0`22 unless it has
     * been set by calling guestfs_session_umask().
     * @returns the returned value, or -1 on error
     */
    get_umask(): number
    /**
     * get verbose mode
     * 
     * This returns the verbose messages flag.
     * @returns the returned value, or -1 on error
     */
    get_verbose(): number
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
    getcon(): string | null
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
    getxattr(path: string, name: string): Uint8Array
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
    getxattrs(path: string): XAttr[]
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
    glob_expand(pattern: string, optargs: GlobExpand | null): string[]
    /**
     * return lines matching a pattern
     * 
     * This calls the external `grep` program and returns the matching lines.
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
     * Use `zgrep` instead of `grep`. This allows the input to be compress-
     * or gzip-compressed.
     * @param regex 
     * @param path 
     * @param optargs a GuestfsGrep containing optional arguments
     * @returns an array of returned strings, or NULL on error
     */
    grep(regex: string, path: string, optargs: Grep | null): string[]
    /**
     * return lines matching a pattern
     * 
     * This calls the external "grep -i" program and returns the matching
     * lines.
     * @param regex 
     * @param path 
     * @returns an array of returned strings, or NULL on error
     */
    grepi(regex: string, path: string): string[]
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
     * *   This uses `grub-install` from the host. Unfortunately grub is not
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
    grub_install(root: string, device: string): boolean
    /**
     * return first 10 lines of a file
     * 
     * This command returns up to the first 10 lines of a file as a list of
     * strings.
     * @param path 
     * @returns an array of returned strings, or NULL on error
     */
    head(path: string): string[]
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
    head_n(nrlines: number, path: string): string[]
    /**
     * dump a file in hexadecimal
     * 
     * This runs "hexdump -C" on the given `path`. The result is the
     * human-readable, canonical hex dump of the file.
     * @param path 
     * @returns the returned string, or NULL on error
     */
    hexdump(path: string): string | null
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
    hivex_close(): boolean
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
    hivex_commit(filename: string | null): boolean
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
    hivex_node_add_child(parent: number, name: string): number
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
    hivex_node_children(nodeh: number): HivexNode[]
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
    hivex_node_delete_child(nodeh: number): boolean
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
    hivex_node_get_child(nodeh: number, name: string): number
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
    hivex_node_get_value(nodeh: number, key: string): number
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
    hivex_node_name(nodeh: number): string | null
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
    hivex_node_parent(nodeh: number): number
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
    hivex_node_set_value(nodeh: number, key: string, t: number, val: Uint8Array): boolean
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
    hivex_node_values(nodeh: number): HivexValue[]
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
    hivex_open(filename: string, optargs: HivexOpen | null): boolean
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
    hivex_root(): number
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
    hivex_value_key(valueh: number): string | null
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
    hivex_value_string(valueh: number): string | null
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
    hivex_value_type(valueh: number): number
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
    hivex_value_utf8(valueh: number): string | null
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
    hivex_value_value(valueh: number): Uint8Array
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
    initrd_cat(initrdpath: string, filename: string): Uint8Array
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
    initrd_list(path: string): string[]
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
    inotify_add_watch(path: string, mask: number): number
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
    inotify_close(): boolean
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
    inotify_files(): string[]
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
    inotify_init(maxevents: number): boolean
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
    inotify_read(): INotifyEvent[]
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
    inotify_rm_watch(wd: number): boolean
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
    inspect_get_arch(root: string): string | null
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
    inspect_get_distro(root: string): string | null
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
    inspect_get_drive_mappings(root: string): GLib.HashTable
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
    inspect_get_filesystems(root: string): string[]
    /**
     * get format of inspected operating system
     * 
     * Before libguestfs 1.38, there was some unreliable support for detecting
     * installer CDs. This API would return:
     * 
     * "installed"
     * This is an installed operating system.
     * 
     * "installer"
     * The disk image being inspected is not an installed operating system,
     * but a *bootable* install disk, live CD, or similar.
     * 
     * "unknown"
     * The format of this disk image is not known.
     * 
     * In libguestfs &ge; 1.38, this only returns `installed`. Use libosinfo
     * directly to detect installer CDs.
     * 
     * Please read "INSPECTION" in guestfs(3) for more details.
     * @param root 
     * @returns the returned string, or NULL on error
     */
    inspect_get_format(root: string): string | null
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
    inspect_get_hostname(root: string): string | null
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
     * *   Extracting icons from Windows guests requires the external `wrestool`
     * program from the `icoutils` package, and several programs (`bmptopnm,`
     * `pnmtopng,` `pamcut)` from the `netpbm` package. These must be
     * installed separately.
     * 
     * *   Operating system icons are usually trademarks. Seek legal advice
     * before using trademarks in applications.
     * @param root 
     * @param optargs a GuestfsInspectGetIcon containing optional arguments
     * @returns an array of binary data, or NULL on error
     */
    inspect_get_icon(root: string, optargs: InspectGetIcon | null): Uint8Array
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
    inspect_get_major_version(root: string): number
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
    inspect_get_minor_version(root: string): number
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
    inspect_get_mountpoints(root: string): GLib.HashTable
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
    inspect_get_osinfo(root: string): string | null
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
    inspect_get_package_format(root: string): string | null
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
    inspect_get_package_management(root: string): string | null
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
    inspect_get_product_name(root: string): string | null
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
    inspect_get_product_variant(root: string): string | null
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
    inspect_get_roots(): string[]
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
    inspect_get_type(root: string): string | null
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
    inspect_get_windows_current_control_set(root: string): string | null
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
    inspect_get_windows_software_hive(root: string): string | null
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
    inspect_get_windows_system_hive(root: string): string | null
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
    inspect_get_windows_systemroot(root: string): string | null
    /**
     * get live flag for install disk
     * 
     * This is deprecated and always returns `false`.
     * 
     * Please read "INSPECTION" in guestfs(3) for more details.
     * @param root 
     * @returns the returned value, or -1 on error
     */
    inspect_is_live(root: string): number
    /**
     * get multipart flag for install disk
     * 
     * This is deprecated and always returns `false`.
     * 
     * Please read "INSPECTION" in guestfs(3) for more details.
     * @param root 
     * @returns the returned value, or -1 on error
     */
    inspect_is_multipart(root: string): number
    /**
     * get netinst (network installer) flag for install disk
     * 
     * This is deprecated and always returns `false`.
     * 
     * Please read "INSPECTION" in guestfs(3) for more details.
     * @param root 
     * @returns the returned value, or -1 on error
     */
    inspect_is_netinst(root: string): number
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
     * The name of the application. For Red Hat-derived and Debian-derived
     * Linux guests, this is the package name.
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
    inspect_list_applications(root: string): Application[]
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
     * The name of the application. For Red Hat-derived and Debian-derived
     * Linux guests, this is the package name.
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
    inspect_list_applications2(root: string): Application2[]
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
    inspect_os(): string[]
    /**
     * cause the daemon to exit (internal use only)
     * 
     * This function is used internally when testing the appliance.
     * @param cancellable A GCancellable object
     * @returns true on success, false on error
     */
    internal_exit(cancellable: Gio.Cancellable | null): boolean
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
    internal_test(str: string, optstr: string | null, strlist: string[], b: boolean, integer: number, integer64: number, filein: string, fileout: string, bufferin: Uint8Array, optargs: InternalTest | null, cancellable: Gio.Cancellable | null): boolean
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
    internal_test_63_optargs(optargs: InternalTest63Optargs | null, cancellable: Gio.Cancellable | null): boolean
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
    internal_test_close_output(): boolean
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
    internal_test_only_optargs(optargs: InternalTestOnlyOptargs | null, cancellable: Gio.Cancellable | null): boolean
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
    internal_test_rbool(val: string): number
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
    internal_test_rboolerr(): number
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
    internal_test_rbufferout(val: string): Uint8Array
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
    internal_test_rbufferouterr(): Uint8Array
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
    internal_test_rconstoptstring(val: string): string
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
    internal_test_rconstoptstringerr(): string
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
    internal_test_rconststring(val: string): string
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
    internal_test_rconststringerr(): string
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
    internal_test_rhashtable(val: string): GLib.HashTable
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
    internal_test_rhashtableerr(): GLib.HashTable
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
    internal_test_rint(val: string): number
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
    internal_test_rint64(val: string): number
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
    internal_test_rint64err(): number
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
    internal_test_rinterr(): number
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
    internal_test_rstring(val: string): string | null
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
    internal_test_rstringerr(): string | null
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
    internal_test_rstringlist(val: string): string[]
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
    internal_test_rstringlisterr(): string[]
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
    internal_test_rstruct(val: string): PV
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
    internal_test_rstructerr(): PV
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
    internal_test_rstructlist(val: string): PV[]
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
    internal_test_rstructlisterr(): PV[]
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
    internal_test_set_output(filename: string): boolean
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
    is_blockdev(path: string, optargs: IsBlockdev | null): number
    /**
     * is busy processing a command
     * 
     * This always returns false. This function is deprecated with no
     * replacement. Do not use this function.
     * 
     * For more information on states, see guestfs(3).
     * @returns the returned value, or -1 on error
     */
    is_busy(): number
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
    is_chardev(path: string, optargs: IsChardev | null): number
    /**
     * is in configuration state
     * 
     * This returns true iff this handle is being configured (in the `CONFIG`
     * state).
     * 
     * For more information on states, see guestfs(3).
     * @returns the returned value, or -1 on error
     */
    is_config(): number
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
    is_dir(path: string, optargs: IsDir | null): number
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
    is_fifo(path: string, optargs: IsFifo | null): number
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
    is_file(path: string, optargs: IsFile | null): number
    /**
     * is launching subprocess
     * 
     * This returns true iff this handle is launching the subprocess (in the
     * `LAUNCHING` state).
     * 
     * For more information on states, see guestfs(3).
     * @returns the returned value, or -1 on error
     */
    is_launching(): number
    /**
     * test if mountable is a logical volume
     * 
     * This command tests whether `mountable` is a logical volume, and returns
     * true iff this is the case.
     * @param mountable 
     * @returns the returned value, or -1 on error
     */
    is_lv(mountable: string): number
    /**
     * is ready to accept commands
     * 
     * This returns true iff this handle is ready to accept commands (in the
     * `READY` state).
     * 
     * For more information on states, see guestfs(3).
     * @returns the returned value, or -1 on error
     */
    is_ready(): number
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
    is_socket(path: string, optargs: IsSocket | null): number
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
    is_symlink(path: string): number
    /**
     * test if a device is a whole device
     * 
     * This returns `true` if and only if `device` refers to a whole block
     * device. That is, not a partition or a logical device.
     * @param device 
     * @returns the returned value, or -1 on error
     */
    is_whole_device(device: string): number
    /**
     * test if a file contains all zero bytes
     * 
     * This returns true iff the file exists and the file is empty or it
     * contains all zero bytes.
     * @param path 
     * @returns the returned value, or -1 on error
     */
    is_zero(path: string): number
    /**
     * test if a device contains all zero bytes
     * 
     * This returns true iff the device exists and contains all zero bytes.
     * 
     * Note that for large devices this can take a long time to run.
     * @param device 
     * @returns the returned value, or -1 on error
     */
    is_zero_device(device: string): number
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
    isoinfo(isofile: string): ISOInfo
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
     * url='http://wiki.osdev.org/ISO_9660#The_Primary_Volume_Descriptor'>
     * http://wiki.osdev.org/ISO_9660#The_Primary_Volume_Descriptor </ulink>
     * @param device 
     * @returns a ISOInfo object, or NULL on error
     */
    isoinfo_device(device: string): ISOInfo
    /**
     * close the systemd journal
     * 
     * Close the journal handle.
     * 
     * This function depends on the feature "journal".
     * See also guestfs_session_feature_available().
     * @returns true on success, false on error
     */
    journal_close(): boolean
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
    journal_get(): XAttr[]
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
    journal_get_data_threshold(): number
    /**
     * get the timestamp of the current journal entry
     * 
     * Get the realtime (wallclock) timestamp of the current journal entry.
     * 
     * This function depends on the feature "journal".
     * See also guestfs_session_feature_available().
     * @returns the returned value, or -1 on error
     */
    journal_get_realtime_usec(): number
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
    journal_next(): number
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
    journal_open(directory: string): boolean
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
    journal_set_data_threshold(threshold: number): boolean
    /**
     * skip forwards or backwards in the journal
     * 
     * Skip forwards ("skip &ge; 0") or backwards ("skip &lt; 0") in the
     * journal.
     * 
     * The number of entries actually skipped is returned (note "rskip &ge;
     * 0"). If this is not the same as the absolute value of the skip parameter
     * ("|skip|") you passed in then it means you have reached the end or the
     * start of the journal.
     * 
     * This function depends on the feature "journal".
     * See also guestfs_session_feature_available().
     * @param skip 
     * @returns the returned value, or -1 on error
     */
    journal_skip(skip: number): number
    /**
     * kill the hypervisor
     * 
     * This kills the hypervisor.
     * 
     * Do not call this. See: guestfs_session_shutdown() instead.
     * @returns true on success, false on error
     */
    kill_subprocess(): boolean
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
    launch(): boolean
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
    lchown(owner: number, group: number, path: string): boolean
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
     * done automatically at guestfs_session_launch() time. However you might
     * want to call this function if you have hotplugged disks or have just
     * created a Windows dynamic disk.
     * 
     * This function depends on the feature "ldm".
     * See also guestfs_session_feature_available().
     * @returns true on success, false on error
     */
    ldmtool_create_all(): boolean
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
    ldmtool_diskgroup_disks(diskgroup: string): string[]
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
    ldmtool_diskgroup_name(diskgroup: string): string | null
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
    ldmtool_diskgroup_volumes(diskgroup: string): string[]
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
    ldmtool_remove_all(): boolean
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
    ldmtool_scan(): string[]
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
    ldmtool_scan_devices(devices: string[]): string[]
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
    ldmtool_volume_hint(diskgroup: string, volume: string): string | null
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
    ldmtool_volume_partitions(diskgroup: string, volume: string): string[]
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
    ldmtool_volume_type(diskgroup: string, volume: string): string | null
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
    lgetxattr(path: string, name: string): Uint8Array
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
    lgetxattrs(path: string): XAttr[]
    /**
     * list 9p filesystems
     * 
     * List all 9p filesystems attached to the guest. A list of mount tags is
     * returned.
     * @returns an array of returned strings, or NULL on error
     */
    list_9p(): string[]
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
    list_devices(): string[]
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
    list_disk_labels(): GLib.HashTable
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
    list_dm_devices(): string[]
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
    list_filesystems(): GLib.HashTable
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
    list_ldm_partitions(): string[]
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
    list_ldm_volumes(): string[]
    /**
     * list Linux md (RAID) devices
     * 
     * List all Linux md devices.
     * @returns an array of returned strings, or NULL on error
     */
    list_md_devices(): string[]
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
    list_partitions(): string[]
    /**
     * list the files in a directory (long format)
     * 
     * List the files in directory (relative to the root directory, there is no
     * cwd) in the format of 'ls -la'.
     * 
     * This command is mostly useful for interactive sessions. It is *not*
     * intended that you try to parse the output string.
     * @param directory 
     * @returns the returned string, or NULL on error
     */
    ll(directory: string): string | null
    /**
     * list the files in a directory (long format with SELinux contexts)
     * 
     * List the files in directory in the format of 'ls -laZ'.
     * 
     * This command is mostly useful for interactive sessions. It is *not*
     * intended that you try to parse the output string.
     * @param directory 
     * @returns the returned string, or NULL on error
     */
    llz(directory: string): string | null
    /**
     * create a hard link
     * 
     * This command creates a hard link using the `ln` command.
     * @param target 
     * @param linkname 
     * @returns true on success, false on error
     */
    ln(target: string, linkname: string): boolean
    /**
     * create a hard link
     * 
     * This command creates a hard link using the "ln -f" command. The *-f*
     * option removes the link (`linkname)` if it exists already.
     * @param target 
     * @param linkname 
     * @returns true on success, false on error
     */
    ln_f(target: string, linkname: string): boolean
    /**
     * create a symbolic link
     * 
     * This command creates a symbolic link using the "ln -s" command.
     * @param target 
     * @param linkname 
     * @returns true on success, false on error
     */
    ln_s(target: string, linkname: string): boolean
    /**
     * create a symbolic link
     * 
     * This command creates a symbolic link using the "ln -sf" command, The
     * *-f* option removes the link (`linkname)` if it exists already.
     * @param target 
     * @param linkname 
     * @returns true on success, false on error
     */
    ln_sf(target: string, linkname: string): boolean
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
    lremovexattr(xattr: string, path: string): boolean
    /**
     * list the files in a directory
     * 
     * List the files in directory (relative to the root directory, there is no
     * cwd). The '.' and '..' entries are not returned, but hidden files are
     * shown.
     * @param directory 
     * @returns an array of returned strings, or NULL on error
     */
    ls(directory: string): string[]
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
    ls0(dir: string, filenames: string): boolean
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
    lsetxattr(xattr: string, val: string, vallen: number, path: string): boolean
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
    lstat(path: string): Stat
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
    lstatlist(path: string, names: string[]): Stat[]
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
    lstatns(path: string): StatNS
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
    lstatnslist(path: string, names: string[]): StatNS[]
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
    luks_add_key(device: string, key: string, newkey: string, keyslot: number): boolean
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
    luks_close(device: string): boolean
    /**
     * format a block device as a LUKS encrypted device
     * 
     * This command erases existing data on `device` and formats the device as a
     * LUKS encrypted device. `key` is the initial key, which is added to key
     * slot `slot`. (LUKS supports 8 key slots, numbered 0-7).
     * 
     * This function depends on the feature "luks".
     * See also guestfs_session_feature_available().
     * @param device 
     * @param key 
     * @param keyslot 
     * @returns true on success, false on error
     */
    luks_format(device: string, key: string, keyslot: number): boolean
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
    luks_format_cipher(device: string, key: string, keyslot: number, cipher: string): boolean
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
    luks_kill_slot(device: string, key: string, keyslot: number): boolean
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
    luks_open(device: string, key: string, mapname: string): boolean
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
    luks_open_ro(device: string, key: string, mapname: string): boolean
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
    lvcreate(logvol: string, volgroup: string, mbytes: number): boolean
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
    lvcreate_free(logvol: string, volgroup: string, percent: number): boolean
    /**
     * get canonical name of an LV
     * 
     * This converts alternative naming schemes for LVs that you might find to
     * the canonical name. For example, /dev/mapper/VG-LV is converted to
     * /dev/VG/LV.
     * 
     * This command returns an error if the `lvname` parameter does not refer to
     * a logical volume.
     * 
     * See also guestfs_session_is_lv(),
     * guestfs_session_canonical_device_name().
     * @param lvname 
     * @returns the returned string, or NULL on error
     */
    lvm_canonical_lv_name(lvname: string): string | null
    /**
     * clear LVM device filter
     * 
     * This undoes the effect of guestfs_session_lvm_set_filter(). LVM will be
     * able to see every block device.
     * 
     * This command also clears the LVM cache and performs a volume group scan.
     * @returns true on success, false on error
     */
    lvm_clear_filter(): boolean
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
    lvm_remove_all(): boolean
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
    lvm_scan(activate: boolean): boolean
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
    lvm_set_filter(devices: string[]): boolean
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
    lvremove(device: string): boolean
    /**
     * rename an LVM logical volume
     * 
     * Rename a logical volume `logvol` with the new name `newlogvol`.
     * @param logvol 
     * @param newlogvol 
     * @returns true on success, false on error
     */
    lvrename(logvol: string, newlogvol: string): boolean
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
    lvresize(device: string, mbytes: number): boolean
    /**
     * expand an LV to fill free space
     * 
     * This expands an existing logical volume `lv` so that it fills `pc%` of the
     * remaining free space in the volume group. Commonly you would call this
     * with pc = 100 which expands the logical volume as much as possible,
     * using all remaining free space in the volume group.
     * 
     * This function depends on the feature "lvm2".
     * See also guestfs_session_feature_available().
     * @param lv 
     * @param percent 
     * @returns true on success, false on error
     */
    lvresize_free(lv: string, percent: number): boolean
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
    lvs(): string[]
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
    lvs_full(): LV[]
    /**
     * get the UUID of a logical volume
     * 
     * This command returns the UUID of the LVM LV `device`.
     * @param device 
     * @returns the returned string, or NULL on error
     */
    lvuuid(device: string): string | null
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
     * doing `lgetxattr` for this file, *or* is a C string which is a decimal
     * number (the number of following attributes for this file, which could be
     * "0"). Then after the first xattr struct are the zero or more attributes
     * for the first named file. This repeats for the second and subsequent
     * files.
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
    lxattrlist(path: string, names: string[]): XAttr[]
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
    max_disks(): number
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
     * `level`
     * The RAID level, which can be one of: *linear*, *raid0*, *0*,
     * *stripe*, *raid1*, *1*, *mirror*, *raid4*, *4*, *raid5*, *5*,
     * *raid6*, *6*, *raid10*, *10*. Some of these are synonymous, and more
     * levels may be added in future.
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
    md_create(name: string, devices: string[], optargs: MDCreate | null): boolean
    /**
     * obtain metadata for an MD device
     * 
     * This command exposes the output of 'mdadm -DY &lt;md&gt;'. The following
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
    md_detail(md: string): GLib.HashTable
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
    md_stat(md: string): MDStat[]
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
    md_stop(md: string): boolean
    /**
     * create a directory
     * 
     * Create a directory named `path`.
     * @param path 
     * @returns true on success, false on error
     */
    mkdir(path: string): boolean
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
    mkdir_mode(path: string, mode: number): boolean
    /**
     * create a directory and parents
     * 
     * Create a directory named `path,` creating any parent directories as
     * necessary. This is like the "mkdir -p" shell command.
     * @param path 
     * @returns true on success, false on error
     */
    mkdir_p(path: string): boolean
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
    mkdtemp(tmpl: string): string | null
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
    mke2fs(device: string, optargs: Mke2fs | null): boolean
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
    mke2fs_J(fstype: string, blocksize: number, device: string, journal: string): boolean
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
    mke2fs_JL(fstype: string, blocksize: number, device: string, label: string): boolean
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
    mke2fs_JU(fstype: string, blocksize: number, device: string, uuid: string): boolean
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
    mke2journal(blocksize: number, device: string): boolean
    /**
     * make ext2/3/4 external journal with label
     * 
     * This creates an ext2 external journal on `device` with label `label`.
     * @param blocksize 
     * @param label 
     * @param device 
     * @returns true on success, false on error
     */
    mke2journal_L(blocksize: number, label: string, device: string): boolean
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
    mke2journal_U(blocksize: number, uuid: string, device: string): boolean
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
    mkfifo(mode: number, path: string): boolean
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
    mkfs(fstype: string, device: string, optargs: Mkfs | null): boolean
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
    mkfs_b(fstype: string, blocksize: number, device: string): boolean
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
    mkfs_btrfs(devices: string[], optargs: MkfsBtrfs | null): boolean
    /**
     * make lost+found directory on an ext2/3/4 filesystem
     * 
     * Make the "lost+found" directory, normally in the root directory of an
     * ext2/3/4 filesystem. `mountpoint` is the directory under which we try to
     * create the "lost+found" directory.
     * @param mountpoint 
     * @returns true on success, false on error
     */
    mklost_and_found(mountpoint: string): boolean
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
    mkmountpoint(exemptpath: string): boolean
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
    mknod(mode: number, devmajor: number, devminor: number, path: string): boolean
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
    mknod_b(mode: number, devmajor: number, devminor: number, path: string): boolean
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
    mknod_c(mode: number, devmajor: number, devminor: number, path: string): boolean
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
    mksquashfs(path: string, filename: string, optargs: Mksquashfs | null, cancellable: Gio.Cancellable | null): boolean
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
    mkswap(device: string, optargs: Mkswap | null): boolean
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
    mkswap_L(label: string, device: string): boolean
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
    mkswap_U(uuid: string, device: string): boolean
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
    mkswap_file(path: string): boolean
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
    mktemp(tmpl: string, optargs: Mktemp | null): string | null
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
    modprobe(modulename: string): boolean
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
    mount(mountable: string, mountpoint: string): boolean
    /**
     * mount 9p filesystem
     * 
     * Mount the virtio-9p filesystem with the tag `mounttag` on the directory
     * `mountpoint`.
     * 
     * If required, "trans=virtio" will be automatically added to the options.
     * Any other options required can be passed in the optional `options`
     * parameter.
     * @param mounttag 
     * @param mountpoint 
     * @param optargs a GuestfsMount9P containing optional arguments
     * @returns true on success, false on error
     */
    mount_9p(mounttag: string, mountpoint: string, optargs: Mount9P | null): boolean
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
    mount_local(localmountpoint: string, optargs: MountLocal | null): boolean
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
    mount_local_run(cancellable: Gio.Cancellable | null): boolean
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
    mount_loop(file: string, mountpoint: string): boolean
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
    mount_options(options: string, mountable: string, mountpoint: string): boolean
    /**
     * mount a guest disk, read-only
     * 
     * This is the same as the guestfs_session_mount() command, but it mounts
     * the filesystem with the read-only (*-o ro*) flag.
     * @param mountable 
     * @param mountpoint 
     * @returns true on success, false on error
     */
    mount_ro(mountable: string, mountpoint: string): boolean
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
    mount_vfs(options: string, vfstype: string, mountable: string, mountpoint: string): boolean
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
    mountable_device(mountable: string): string | null
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
    mountable_subvolume(mountable: string): string | null
    /**
     * show mountpoints
     * 
     * This call is similar to guestfs_session_mounts(). That call returns a
     * list of devices. This one returns a hash table (map) of device name to
     * directory where the device is mounted.
     * @returns a GHashTable of results, or NULL on error
     */
    mountpoints(): GLib.HashTable
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
    mounts(): string[]
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
    mv(src: string, dest: string): boolean
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
    nr_devices(): number
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
    ntfs_3g_probe(rw: boolean, device: string): number
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
    ntfscat_i(device: string, inode: number, filename: string, cancellable: Gio.Cancellable | null): boolean
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
    ntfsclone_in(backupfile: string, device: string, cancellable: Gio.Cancellable | null): boolean
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
    ntfsclone_out(device: string, backupfile: string, optargs: NtfscloneOut | null, cancellable: Gio.Cancellable | null): boolean
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
    ntfsfix(device: string, optargs: Ntfsfix | null): boolean
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
    ntfsresize(device: string, optargs: NTFSResizeOpts | null): boolean
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
    ntfsresize_size(device: string, size: number): boolean
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
    parse_environment(): boolean
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
    parse_environment_list(environment: string[]): boolean
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
    part_add(device: string, prlogex: string, startsect: number, endsect: number): boolean
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
    part_del(device: string, partnum: number): boolean
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
    part_disk(device: string, parttype: string): boolean
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
    part_expand_gpt(device: string): boolean
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
    part_get_bootable(device: string, partnum: number): number
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
    part_get_disk_guid(device: string): string | null
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
    part_get_gpt_attributes(device: string, partnum: number): number
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
    part_get_gpt_guid(device: string, partnum: number): string | null
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
    part_get_gpt_type(device: string, partnum: number): string | null
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
    part_get_mbr_id(device: string, partnum: number): number
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
    part_get_mbr_part_type(device: string, partnum: number): string | null
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
    part_get_name(device: string, partnum: number): string | null
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
    part_get_parttype(device: string): string | null
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
     * efi
     * gpt Intel EFI / GPT partition table.
     * 
     * This is recommended for >= 2 TB partitions that will be accessed
     * from Linux and Intel-based Mac OS X. It also has limited backwards
     * compatibility with the `mbr` format.
     * 
     * mbr
     * msdos
     * The standard PC "Master Boot Record" (MBR) format used by MS-DOS and
     * Windows. This partition type will only work for device sizes up to 2
     * TB. For large disks we recommend using `gpt`.
     * 
     * Other partition table types that may work but are not supported include:
     * 
     * aix AIX disk labels.
     * 
     * amiga
     * rdb Amiga "Rigid Disk Block" format.
     * 
     * bsd BSD disk labels.
     * 
     * dasd
     * DASD, used on IBM mainframes.
     * 
     * dvh MIPS/SGI volumes.
     * 
     * mac Old Mac partition format. Modern Macs use `gpt`.
     * 
     * pc98
     * NEC PC-98 format, common in Japan apparently.
     * 
     * sun Sun disk labels.
     * @param device 
     * @param parttype 
     * @returns true on success, false on error
     */
    part_init(device: string, parttype: string): boolean
    /**
     * list partitions on a device
     * 
     * This command parses the partition table on `device` and returns the list
     * of partitions found.
     * 
     * The fields in the returned structure are:
     * 
     * part_num
     * Partition number, counting from 1.
     * 
     * part_start
     * Start of the partition *in bytes*. To get sectors you have to divide
     * by the device’s sector size, see guestfs_session_blockdev_getss().
     * 
     * part_end
     * End of the partition in bytes.
     * 
     * part_size
     * Size of the partition in bytes.
     * @param device 
     * @returns an array of Partition objects, or NULL on error
     */
    part_list(device: string): Partition[]
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
    part_resize(device: string, partnum: number, endsect: number): boolean
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
    part_set_bootable(device: string, partnum: number, bootable: boolean): boolean
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
    part_set_disk_guid(device: string, guid: string): boolean
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
    part_set_disk_guid_random(device: string): boolean
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
    part_set_gpt_attributes(device: string, partnum: number, attributes: number): boolean
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
    part_set_gpt_guid(device: string, partnum: number, guid: string): boolean
    /**
     * set the type GUID of a GPT partition
     * 
     * Set the type GUID of numbered GPT partition `partnum` to `guid`. Return an
     * error if the partition table of `device` isn't GPT, or if `guid` is not a
     * valid GUID.
     * 
     * See <ulink
     * url='http://en.wikipedia.org/wiki/GUID_Partition_Table#Partition_type_GU
     * IDs'>
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
    part_set_gpt_type(device: string, partnum: number, guid: string): boolean
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
    part_set_mbr_id(device: string, partnum: number, idbyte: number): boolean
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
    part_set_name(device: string, partnum: number, name: string): boolean
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
    part_to_dev(partition: string): string | null
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
    part_to_partnum(partition: string): number
    /**
     * ping the guest daemon
     * 
     * This is a test probe into the guestfs daemon running inside the
     * libguestfs appliance. Calling this function checks that the daemon
     * responds to the ping message, without affecting the daemon or attached
     * block device(s) in any other way.
     * @returns true on success, false on error
     */
    ping_daemon(): boolean
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
    pread(path: string, count: number, offset: number): Uint8Array
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
    pread_device(device: string, count: number, offset: number): Uint8Array
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
    pvchange_uuid(device: string): boolean
    /**
     * generate new random UUIDs for all physical volumes
     * 
     * Generate new random UUIDs for all physical volumes.
     * 
     * This function depends on the feature "lvm2".
     * See also guestfs_session_feature_available().
     * @returns true on success, false on error
     */
    pvchange_uuid_all(): boolean
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
    pvcreate(device: string): boolean
    /**
     * remove an LVM physical volume
     * 
     * This wipes a physical volume `device` so that LVM will no longer
     * recognise it.
     * 
     * The implementation uses the `pvremove` command which refuses to wipe
     * physical volumes that contain any volume groups, so you have to remove
     * those first.
     * 
     * This function depends on the feature "lvm2".
     * See also guestfs_session_feature_available().
     * @param device 
     * @returns true on success, false on error
     */
    pvremove(device: string): boolean
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
    pvresize(device: string): boolean
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
    pvresize_size(device: string, size: number): boolean
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
    pvs(): string[]
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
    pvs_full(): PV[]
    /**
     * get the UUID of a physical volume
     * 
     * This command returns the UUID of the LVM PV `device`.
     * @param device 
     * @returns the returned string, or NULL on error
     */
    pvuuid(device: string): string | null
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
    pwrite(path: string, content: Uint8Array, offset: number): number
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
    pwrite_device(device: string, content: Uint8Array, offset: number): number
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
    read_file(path: string): Uint8Array
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
    read_lines(path: string): string[]
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
     * @returns an array of Dirent objects, or NULL on error
     */
    readdir(dir: string): Dirent[]
    /**
     * read the target of a symbolic link
     * 
     * This command reads the target of a symbolic link.
     * @param path 
     * @returns the returned string, or NULL on error
     */
    readlink(path: string): string | null
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
    readlinklist(path: string, names: string[]): string[]
    /**
     * canonicalized absolute pathname
     * 
     * Return the canonicalized absolute pathname of `path`. The returned path
     * has no ".", ".." or symbolic link path elements.
     * @param path 
     * @returns the returned string, or NULL on error
     */
    realpath(path: string): string | null
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
    remount(mountpoint: string, optargs: Remount | null): boolean
    /**
     * remove a disk image
     * 
     * This function is conceptually the opposite of
     * guestfs_session_add_drive_opts(). It removes the drive that was
     * previously added with label `label`.
     * 
     * Note that in order to remove drives, you have to add them with labels
     * (see the optional `label` argument to guestfs_session_add_drive_opts()).
     * If you didn't use a label, then they cannot be removed.
     * 
     * You can call this function before or after launching the handle. If
     * called after launch, if the backend supports it, we try to hot unplug
     * the drive: see "HOTPLUGGING" in guestfs(3). The disk must not be in use
     * (eg. mounted) when you do this. We try to detect if the disk is in use
     * and stop you from doing this.
     * @param label 
     * @returns true on success, false on error
     */
    remove_drive(label: string): boolean
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
    removexattr(xattr: string, path: string): boolean
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
    rename(oldpath: string, newpath: string): boolean
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
    resize2fs(device: string): boolean
    /**
     * resize an ext2, ext3 or ext4 filesystem to the minimum size
     * 
     * This command is the same as guestfs_session_resize2fs(), but the
     * filesystem is resized to its minimum size. This works like the *-M*
     * option to the `resize2`fs command.
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
    resize2fs_M(device: string): boolean
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
    resize2fs_size(device: string, size: number): boolean
    /**
     * remove a file
     * 
     * Remove the single file `path`.
     * @param path 
     * @returns true on success, false on error
     */
    rm(path: string): boolean
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
    rm_f(path: string): boolean
    /**
     * remove a file or directory recursively
     * 
     * Remove the file or directory `path,` recursively removing the contents if
     * its a directory. This is like the "rm -rf" shell command.
     * @param path 
     * @returns true on success, false on error
     */
    rm_rf(path: string): boolean
    /**
     * remove a directory
     * 
     * Remove the single directory `path`.
     * @param path 
     * @returns true on success, false on error
     */
    rmdir(path: string): boolean
    /**
     * remove a mountpoint
     * 
     * This call removes a mountpoint that was previously created with
     * guestfs_session_mkmountpoint(). See guestfs_session_mkmountpoint() for
     * full details.
     * @param exemptpath 
     * @returns true on success, false on error
     */
    rmmountpoint(exemptpath: string): boolean
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
    rsync(src: string, dest: string, optargs: Rsync | null): boolean
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
    rsync_in(remote: string, dest: string, optargs: RsyncIn | null): boolean
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
    rsync_out(src: string, remote: string, optargs: RsyncOut | null): boolean
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
    scrub_device(device: string): boolean
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
    scrub_file(file: string): boolean
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
    scrub_freespace(dir: string): boolean
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
    selinux_relabel(specfile: string, path: string, optargs: SelinuxRelabel | null): boolean
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
    set_append(append: string | null): boolean
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
    set_attach_method(backend: string): boolean
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
    set_autosync(autosync: boolean): boolean
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
    set_backend(backend: string): boolean
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
    set_backend_setting(name: string, val: string): boolean
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
    set_backend_settings(settings: string[]): boolean
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
    set_cachedir(cachedir: string | null): boolean
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
    set_direct(direct: boolean): boolean
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
    set_e2attrs(file: string, attrs: string, optargs: SetE2attrs | null): boolean
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
    set_e2generation(file: string, generation: number): boolean
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
    set_e2label(device: string, label: string): boolean
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
    set_e2uuid(device: string, uuid: string): boolean
    /**
     * set the hypervisor binary
     * 
     * Set the hypervisor binary that we will use. The hypervisor depends on
     * the backend, but is usually the location of the qemu/KVM hypervisor. For
     * the uml backend, it is the location of the `linux` or `vmlinux` binary.
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
    set_hv(hv: string): boolean
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
    set_identifier(identifier: string): boolean
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
    set_label(mountable: string, label: string): boolean
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
    set_libvirt_requested_credential(index: number, cred: Uint8Array): boolean
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
    set_libvirt_supported_credentials(creds: string[]): boolean
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
    set_memsize(memsize: number): boolean
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
    set_network(network: boolean): boolean
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
    set_path(searchpath: string | null): boolean
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
    set_pgroup(pgroup: boolean): boolean
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
    set_program(program: string): boolean
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
    set_qemu(hv: string | null): boolean
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
    set_recovery_proc(recoveryproc: boolean): boolean
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
    set_selinux(selinux: boolean): boolean
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
    set_smp(smp: number): boolean
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
    set_tmpdir(tmpdir: string | null): boolean
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
    set_trace(trace: boolean): boolean
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
    set_uuid(device: string, uuid: string): boolean
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
    set_uuid_random(device: string): boolean
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
    set_verbose(verbose: boolean): boolean
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
    setcon(context: string): boolean
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
    setxattr(xattr: string, val: string, vallen: number, path: string): boolean
    /**
     * create partitions on a block device
     * 
     * This is a direct interface to the sfdisk(8) program for creating
     * partitions on block devices.
     * 
     * `device` should be a block device, for example /dev/sda.
     * 
     * `cyls,` `heads` and `sectors` are the number of cylinders, heads and
     * sectors on the device, which are passed directly to sfdisk as the *-C*,
     * *-H* and *-S* parameters. If you pass `0` for any of these, then the
     * corresponding parameter is omitted. Usually for ‘large’ disks, you can
     * just pass `0` for these, but for small (floppy-sized) disks, sfdisk (or
     * rather, the kernel) cannot work out the right geometry and you will need
     * to tell it.
     * 
     * `lines` is a list of lines that we feed to `sfdisk`. For more information
     * refer to the sfdisk(8) manpage.
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
    sfdisk(device: string, cyls: number, heads: number, sectors: number, lines: string[]): boolean
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
    sfdiskM(device: string, lines: string[]): boolean
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
    sfdisk_N(device: string, partnum: number, cyls: number, heads: number, sectors: number, line: string): boolean
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
    sfdisk_disk_geometry(device: string): string | null
    /**
     * display the kernel geometry
     * 
     * This displays the kernel’s idea of the geometry of `device`.
     * 
     * The result is in human-readable format, and not designed to be parsed.
     * @param device 
     * @returns the returned string, or NULL on error
     */
    sfdisk_kernel_geometry(device: string): string | null
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
    sfdisk_l(device: string): string | null
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
    sh(command: string): string | null
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
    sh_lines(command: string): string[]
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
    shutdown(): boolean
    /**
     * sleep for some seconds
     * 
     * Sleep for `secs` seconds.
     * @param secs 
     * @returns true on success, false on error
     */
    sleep(secs: number): boolean
    /**
     * get file information
     * 
     * Returns file information for the given `path`.
     * 
     * This is the same as the stat(2) system call.
     * @param path 
     * @returns a Stat object, or NULL on error
     */
    stat(path: string): Stat
    /**
     * get file information
     * 
     * Returns file information for the given `path`.
     * 
     * This is the same as the stat(2) system call.
     * @param path 
     * @returns a StatNS object, or NULL on error
     */
    statns(path: string): StatNS
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
    statvfs(path: string): StatVFS
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
    strings(path: string): string[]
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
    strings_e(encoding: string, path: string): string[]
    /**
     * disable swap on device
     * 
     * This command disables the libguestfs appliance swap device or partition
     * named `device`. See guestfs_session_swapon_device().
     * @param device 
     * @returns true on success, false on error
     */
    swapoff_device(device: string): boolean
    /**
     * disable swap on file
     * 
     * This command disables the libguestfs appliance swap on file.
     * @param file 
     * @returns true on success, false on error
     */
    swapoff_file(file: string): boolean
    /**
     * disable swap on labeled swap partition
     * 
     * This command disables the libguestfs appliance swap on labeled swap
     * partition.
     * @param label 
     * @returns true on success, false on error
     */
    swapoff_label(label: string): boolean
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
    swapoff_uuid(uuid: string): boolean
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
    swapon_device(device: string): boolean
    /**
     * enable swap on file
     * 
     * This command enables swap to a file. See guestfs_session_swapon_device()
     * for other notes.
     * @param file 
     * @returns true on success, false on error
     */
    swapon_file(file: string): boolean
    /**
     * enable swap on labeled swap partition
     * 
     * This command enables swap to a labeled swap partition. See
     * guestfs_session_swapon_device() for other notes.
     * @param label 
     * @returns true on success, false on error
     */
    swapon_label(label: string): boolean
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
    swapon_uuid(uuid: string): boolean
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
    sync(): boolean
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
    syslinux(device: string, optargs: Syslinux | null): boolean
    /**
     * return last 10 lines of a file
     * 
     * This command returns up to the last 10 lines of a file as a list of
     * strings.
     * @param path 
     * @returns an array of returned strings, or NULL on error
     */
    tail(path: string): string[]
    /**
     * return last N lines of a file
     * 
     * If the parameter `nrlines` is a positive number, this returns the last
     * `nrlines` lines of the file `path`.
     * 
     * If the parameter `nrlines` is a negative number, this returns lines from
     * the file `path,` starting with the `-nrlinesth` line.
     * 
     * If the parameter `nrlines` is zero, this returns an empty list.
     * @param nrlines 
     * @param path 
     * @returns an array of returned strings, or NULL on error
     */
    tail_n(nrlines: number, path: string): string[]
    /**
     * unpack tarfile to directory
     * 
     * This command uploads and unpacks local file `tarfile` into directory.
     * 
     * The optional `compress` flag controls compression. If not given, then the
     * input should be an uncompressed tar file. Otherwise one of the following
     * strings may be given to select the compression type of the input file:
     * `compress,` `gzip,` `bzip2`, `xz,` `lzop`. (Note that not all builds of
     * libguestfs will support all of these compression types).
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
    tar_in(tarfile: string, directory: string, optargs: TarIn | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * pack directory into tarfile
     * 
     * This command packs the contents of directory and downloads it to local
     * file `tarfile`.
     * 
     * The optional `compress` flag controls compression. If not given, then the
     * output will be an uncompressed tar file. Otherwise one of the following
     * strings may be given to select the compression type of the output file:
     * `compress,` `gzip,` `bzip2`, `xz,` `lzop`. (Note that not all builds of
     * libguestfs will support all of these compression types).
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
    tar_out(directory: string, tarfile: string, optargs: TarOut | null, cancellable: Gio.Cancellable | null): boolean
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
    tgz_in(tarball: string, directory: string, cancellable: Gio.Cancellable | null): boolean
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
    tgz_out(directory: string, tarball: string, cancellable: Gio.Cancellable | null): boolean
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
    touch(path: string): boolean
    /**
     * truncate a file to zero size
     * 
     * This command truncates `path` to a zero-length file. The file must exist
     * already.
     * @param path 
     * @returns true on success, false on error
     */
    truncate(path: string): boolean
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
    truncate_size(path: string, size: number): boolean
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
     * This is the same as the tune2fs `-f` option.
     * 
     * `maxmountcount`
     * Set the number of mounts after which the filesystem is checked by
     * e2fsck(8). If this is `0` then the number of mounts is disregarded.
     * This is the same as the tune2fs `-c` option.
     * 
     * `mountcount`
     * Set the number of times the filesystem has been mounted. This is the
     * same as the tune2fs `-C` option.
     * 
     * `errorbehavior`
     * Change the behavior of the kernel code when errors are detected.
     * Possible values currently are: `continue,` `remount-ro,` `panic`. In
     * practice these options don't really make any difference,
     * particularly for write errors.
     * 
     * This is the same as the tune2fs `-e` option.
     * 
     * `group`
     * Set the group which can use reserved filesystem blocks. This is the
     * same as the tune2fs `-g` option except that it can only be specified
     * as a number.
     * 
     * `intervalbetweenchecks`
     * Adjust the maximal time between two filesystem checks (in seconds).
     * If the option is passed as `0` then time-dependent checking is
     * disabled.
     * 
     * This is the same as the tune2fs `-i` option.
     * 
     * `reservedblockspercentage`
     * Set the percentage of the filesystem which may only be allocated by
     * privileged processes. This is the same as the tune2fs `-m` option.
     * 
     * `lastmounteddirectory`
     * Set the last mounted directory. This is the same as the tune2fs `-M`
     * option.
     * 
     * `reservedblockscount` Set the number of reserved filesystem blocks. This
     * is the same as the tune2fs `-r` option.
     * `user`
     * Set the user who can use the reserved filesystem blocks. This is the
     * same as the tune2fs `-u` option except that it can only be specified
     * as a number.
     * 
     * To get the current values of filesystem parameters, see
     * guestfs_session_tune2fs_l(). For precise details of how tune2fs works,
     * see the tune2fs(8) man page.
     * @param device 
     * @param optargs a GuestfsTune2FS containing optional arguments
     * @returns true on success, false on error
     */
    tune2fs(device: string, optargs: Tune2FS | null): boolean
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
    tune2fs_l(device: string): GLib.HashTable
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
    txz_in(tarball: string, directory: string, cancellable: Gio.Cancellable | null): boolean
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
    txz_out(directory: string, tarball: string, cancellable: Gio.Cancellable | null): boolean
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
    umask(mask: number): number
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
    umount(pathordevice: string, optargs: Umount | null): boolean
    /**
     * unmount all filesystems
     * 
     * This unmounts all mounted filesystems.
     * 
     * Some internal mounts are not unmounted by this call.
     * @returns true on success, false on error
     */
    umount_all(): boolean
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
    umount_local(optargs: UmountLocal | null): boolean
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
    upload(filename: string, remotefilename: string, cancellable: Gio.Cancellable | null): boolean
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
    upload_offset(filename: string, remotefilename: string, offset: number, cancellable: Gio.Cancellable | null): boolean
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
     * also need to call "guestfs_set_pgroup" so that child processes don't
     * receive the "^C" signal).
     * 
     * In a graphical program, when the main thread is displaying a progress
     * bar with a cancel button, wire up the cancel button to call this
     * function.
     * @returns true on success, false on error
     */
    user_cancel(): boolean
    /**
     * set timestamp of a file with nanosecond precision
     * 
     * This command sets the timestamps of a file with nanosecond precision.
     * 
     * "atsecs, atnsecs" are the last access time (atime) in secs and
     * nanoseconds from the epoch.
     * 
     * "mtsecs, mtnsecs" are the last modification time (mtime) in secs and
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
    utimens(path: string, atsecs: number, atnsecs: number, mtsecs: number, mtnsecs: number): boolean
    /**
     * appliance kernel version
     * 
     * This returns the kernel version of the appliance, where this is
     * available. This information is only useful for debugging. Nothing in the
     * returned structure is defined by the API.
     * @returns a UTSName object, or NULL on error
     */
    utsname(): UTSName
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
    version(): Version
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
    vfs_label(mountable: string): string | null
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
    vfs_minimum_size(mountable: string): number
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
    vfs_type(mountable: string): string | null
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
    vfs_uuid(mountable: string): string | null
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
    vg_activate(activate: boolean, volgroups: string[]): boolean
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
    vg_activate_all(activate: boolean): boolean
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
    vgchange_uuid(vg: string): boolean
    /**
     * generate new random UUIDs for all volume groups
     * 
     * Generate new random UUIDs for all volume groups.
     * 
     * This function depends on the feature "lvm2".
     * See also guestfs_session_feature_available().
     * @returns true on success, false on error
     */
    vgchange_uuid_all(): boolean
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
    vgcreate(volgroup: string, physvols: string[]): boolean
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
    vglvuuids(vgname: string): string[]
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
    vgmeta(vgname: string): Uint8Array
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
    vgpvuuids(vgname: string): string[]
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
    vgremove(vgname: string): boolean
    /**
     * rename an LVM volume group
     * 
     * Rename a volume group `volgroup` with the new name `newvolgroup`.
     * @param volgroup 
     * @param newvolgroup 
     * @returns true on success, false on error
     */
    vgrename(volgroup: string, newvolgroup: string): boolean
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
    vgs(): string[]
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
    vgs_full(): VG[]
    /**
     * rescan for LVM physical volumes, volume groups and logical volumes
     * 
     * This rescans all block devices and rebuilds the list of LVM physical
     * volumes, volume groups and logical volumes.
     * @returns true on success, false on error
     */
    vgscan(): boolean
    /**
     * get the UUID of a volume group
     * 
     * This command returns the UUID of the LVM VG named `vgname`.
     * @param vgname 
     * @returns the returned string, or NULL on error
     */
    vguuid(vgname: string): string | null
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
    wait_ready(): boolean
    /**
     * count characters in a file
     * 
     * This command counts the characters in a file, using the "wc -c" external
     * command.
     * @param path 
     * @returns the returned value, or -1 on error
     */
    wc_c(path: string): number
    /**
     * count lines in a file
     * 
     * This command counts the lines in a file, using the "wc -l" external
     * command.
     * @param path 
     * @returns the returned value, or -1 on error
     */
    wc_l(path: string): number
    /**
     * count words in a file
     * 
     * This command counts the words in a file, using the "wc -w" external
     * command.
     * @param path 
     * @returns the returned value, or -1 on error
     */
    wc_w(path: string): number
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
    wipefs(device: string): boolean
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
    write(path: string, content: Uint8Array): boolean
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
    write_append(path: string, content: Uint8Array): boolean
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
    write_file(path: string, content: string, size: number): boolean
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
     * This function depends on the feature "xfs".
     * See also guestfs_session_feature_available().
     * @param device 
     * @param optargs a GuestfsXfsAdmin containing optional arguments
     * @returns true on success, false on error
     */
    xfs_admin(device: string, optargs: XfsAdmin | null): boolean
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
    xfs_growfs(path: string, optargs: XfsGrowfs | null): boolean
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
    xfs_info(pathordevice: string): XFSInfo
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
    xfs_repair(device: string, optargs: XfsRepair | null): number
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
    yara_destroy(): boolean
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
    yara_load(filename: string, cancellable: Gio.Cancellable | null): boolean
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
    yara_scan(path: string, cancellable: Gio.Cancellable | null): YaraDetection[]
    /**
     * return lines matching a pattern
     * 
     * This calls the external `zegrep` program and returns the matching lines.
     * @param regex 
     * @param path 
     * @returns an array of returned strings, or NULL on error
     */
    zegrep(regex: string, path: string): string[]
    /**
     * return lines matching a pattern
     * 
     * This calls the external "zegrep -i" program and returns the matching
     * lines.
     * @param regex 
     * @param path 
     * @returns an array of returned strings, or NULL on error
     */
    zegrepi(regex: string, path: string): string[]
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
    zero(device: string): boolean
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
    zero_device(device: string): boolean
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
    zero_free_space(directory: string): boolean
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
    zerofree(device: string): boolean
    /**
     * return lines matching a pattern
     * 
     * This calls the external `zfgrep` program and returns the matching lines.
     * @param pattern 
     * @param path 
     * @returns an array of returned strings, or NULL on error
     */
    zfgrep(pattern: string, path: string): string[]
    /**
     * return lines matching a pattern
     * 
     * This calls the external "zfgrep -i" program and returns the matching
     * lines.
     * @param pattern 
     * @param path 
     * @returns an array of returned strings, or NULL on error
     */
    zfgrepi(pattern: string, path: string): string[]
    /**
     * determine file type inside a compressed file
     * 
     * This command runs file after first decompressing `path` using `method`.
     * 
     * `method` must be one of `gzip,` `compress` or `bzip2`.
     * 
     * Since 1.0.63, use guestfs_session_file() instead which can now process
     * compressed files.
     * @param meth 
     * @param path 
     * @returns the returned string, or NULL on error
     */
    zfile(meth: string, path: string): string | null
    /**
     * return lines matching a pattern
     * 
     * This calls the external `zgrep` program and returns the matching lines.
     * @param regex 
     * @param path 
     * @returns an array of returned strings, or NULL on error
     */
    zgrep(regex: string, path: string): string[]
    /**
     * return lines matching a pattern
     * 
     * This calls the external "zgrep -i" program and returns the matching
     * lines.
     * @param regex 
     * @param path 
     * @returns an array of returned strings, or NULL on error
     */
    zgrepi(regex: string, path: string): string[]

    // Own signals of Guestfs-1.0.Guestfs.Session

    connect(sigName: "appliance", callback: Session.ApplianceSignalCallback): number
    connect_after(sigName: "appliance", callback: Session.ApplianceSignalCallback): number
    emit(sigName: "appliance", params: SessionEventParams, ...args: any[]): void
    connect(sigName: "close", callback: Session.CloseSignalCallback): number
    connect_after(sigName: "close", callback: Session.CloseSignalCallback): number
    emit(sigName: "close", params: SessionEventParams, ...args: any[]): void
    connect(sigName: "enter", callback: Session.EnterSignalCallback): number
    connect_after(sigName: "enter", callback: Session.EnterSignalCallback): number
    emit(sigName: "enter", params: SessionEventParams, ...args: any[]): void
    connect(sigName: "launch-done", callback: Session.LaunchDoneSignalCallback): number
    connect_after(sigName: "launch-done", callback: Session.LaunchDoneSignalCallback): number
    emit(sigName: "launch-done", object: SessionEventParams, ...args: any[]): void
    connect(sigName: "library", callback: Session.LibrarySignalCallback): number
    connect_after(sigName: "library", callback: Session.LibrarySignalCallback): number
    emit(sigName: "library", params: SessionEventParams, ...args: any[]): void
    connect(sigName: "libvirt-auth", callback: Session.LibvirtAuthSignalCallback): number
    connect_after(sigName: "libvirt-auth", callback: Session.LibvirtAuthSignalCallback): number
    emit(sigName: "libvirt-auth", object: SessionEventParams, ...args: any[]): void
    connect(sigName: "progress", callback: Session.ProgressSignalCallback): number
    connect_after(sigName: "progress", callback: Session.ProgressSignalCallback): number
    emit(sigName: "progress", params: SessionEventParams, ...args: any[]): void
    connect(sigName: "subprocess-quit", callback: Session.SubprocessQuitSignalCallback): number
    connect_after(sigName: "subprocess-quit", callback: Session.SubprocessQuitSignalCallback): number
    emit(sigName: "subprocess-quit", object: SessionEventParams, ...args: any[]): void
    connect(sigName: "trace", callback: Session.TraceSignalCallback): number
    connect_after(sigName: "trace", callback: Session.TraceSignalCallback): number
    emit(sigName: "trace", params: SessionEventParams, ...args: any[]): void
    connect(sigName: "warning", callback: Session.WarningSignalCallback): number
    connect_after(sigName: "warning", callback: Session.WarningSignalCallback): number
    emit(sigName: "warning", params: SessionEventParams, ...args: any[]): void

    // Class property signals of Guestfs-1.0.Guestfs.Session

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A libguestfs session, encapsulating a single libguestfs handle.
 * @class 
 */
export class Session extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.Session

    static name: string
    static $gtype: GObject.GType<Session>

    // Constructors of Guestfs-1.0.Guestfs.Session

    constructor(config?: Session.ConstructorProperties) 
    /**
     * Create a new libguestfs session.
     * @constructor 
     * @returns a new guestfs session object
     */
    constructor() 
    /**
     * Create a new libguestfs session.
     * @constructor 
     * @returns a new guestfs session object
     */
    static new(): Session
    _init(config?: Session.ConstructorProperties): void
}

export module SetE2attrs {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.SetE2attrs

        /**
         * A boolean.
         */
        clear?: Tristate | null
    }

}

export interface SetE2attrs {

    // Own properties of Guestfs-1.0.Guestfs.SetE2attrs

    /**
     * A boolean.
     */
    clear: Tristate

    // Own fields of Guestfs-1.0.Guestfs.SetE2attrs

    parent: GObject.Object
    priv: SetE2attrsPrivate

    // Class property signals of Guestfs-1.0.Guestfs.SetE2attrs

    connect(sigName: "notify::clear", callback: (($obj: SetE2attrs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clear", callback: (($obj: SetE2attrs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clear", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_set_e2attrs.
 * @class 
 */
export class SetE2attrs extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.SetE2attrs

    static name: string
    static $gtype: GObject.GType<SetE2attrs>

    // Constructors of Guestfs-1.0.Guestfs.SetE2attrs

    constructor(config?: SetE2attrs.ConstructorProperties) 
    /**
     * Create a new GuestfsSetE2attrs object
     * @constructor 
     * @returns a new GuestfsSetE2attrs object
     */
    constructor() 
    /**
     * Create a new GuestfsSetE2attrs object
     * @constructor 
     * @returns a new GuestfsSetE2attrs object
     */
    static new(): SetE2attrs
    _init(config?: SetE2attrs.ConstructorProperties): void
}

export module Syslinux {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.Syslinux

        /**
         * A string.
         */
        directory?: string | null
    }

}

export interface Syslinux {

    // Own properties of Guestfs-1.0.Guestfs.Syslinux

    /**
     * A string.
     */
    directory: string | null

    // Own fields of Guestfs-1.0.Guestfs.Syslinux

    parent: GObject.Object
    priv: SyslinuxPrivate

    // Class property signals of Guestfs-1.0.Guestfs.Syslinux

    connect(sigName: "notify::directory", callback: (($obj: Syslinux, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::directory", callback: (($obj: Syslinux, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::directory", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_syslinux.
 * @class 
 */
export class Syslinux extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.Syslinux

    static name: string
    static $gtype: GObject.GType<Syslinux>

    // Constructors of Guestfs-1.0.Guestfs.Syslinux

    constructor(config?: Syslinux.ConstructorProperties) 
    /**
     * Create a new GuestfsSyslinux object
     * @constructor 
     * @returns a new GuestfsSyslinux object
     */
    constructor() 
    /**
     * Create a new GuestfsSyslinux object
     * @constructor 
     * @returns a new GuestfsSyslinux object
     */
    static new(): Syslinux
    _init(config?: Syslinux.ConstructorProperties): void
}

export module TarIn {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.TarIn

        /**
         * A boolean.
         */
        acls?: Tristate | null
        /**
         * A string.
         */
        compress?: string | null
        /**
         * A boolean.
         */
        selinux?: Tristate | null
        /**
         * A boolean.
         */
        xattrs?: Tristate | null
    }

}

export interface TarIn {

    // Own properties of Guestfs-1.0.Guestfs.TarIn

    /**
     * A boolean.
     */
    acls: Tristate
    /**
     * A string.
     */
    compress: string | null
    /**
     * A boolean.
     */
    selinux: Tristate
    /**
     * A boolean.
     */
    xattrs: Tristate

    // Own fields of Guestfs-1.0.Guestfs.TarIn

    parent: GObject.Object
    priv: TarInPrivate

    // Class property signals of Guestfs-1.0.Guestfs.TarIn

    connect(sigName: "notify::acls", callback: (($obj: TarIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::acls", callback: (($obj: TarIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::acls", ...args: any[]): void
    connect(sigName: "notify::compress", callback: (($obj: TarIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compress", callback: (($obj: TarIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::compress", ...args: any[]): void
    connect(sigName: "notify::selinux", callback: (($obj: TarIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selinux", callback: (($obj: TarIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selinux", ...args: any[]): void
    connect(sigName: "notify::xattrs", callback: (($obj: TarIn, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xattrs", callback: (($obj: TarIn, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xattrs", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_tar_in.
 * @class 
 */
export class TarIn extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.TarIn

    static name: string
    static $gtype: GObject.GType<TarIn>

    // Constructors of Guestfs-1.0.Guestfs.TarIn

    constructor(config?: TarIn.ConstructorProperties) 
    /**
     * Create a new GuestfsTarIn object
     * @constructor 
     * @returns a new GuestfsTarIn object
     */
    constructor() 
    /**
     * Create a new GuestfsTarIn object
     * @constructor 
     * @returns a new GuestfsTarIn object
     */
    static new(): TarIn
    _init(config?: TarIn.ConstructorProperties): void
}

export module TarOut {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.TarOut

        /**
         * A boolean.
         */
        acls?: Tristate | null
        /**
         * A string.
         */
        compress?: string | null
        /**
         * A boolean.
         */
        numericowner?: Tristate | null
        /**
         * A boolean.
         */
        selinux?: Tristate | null
        /**
         * A boolean.
         */
        xattrs?: Tristate | null
    }

}

export interface TarOut {

    // Own properties of Guestfs-1.0.Guestfs.TarOut

    /**
     * A boolean.
     */
    acls: Tristate
    /**
     * A string.
     */
    compress: string | null
    /**
     * A boolean.
     */
    numericowner: Tristate
    /**
     * A boolean.
     */
    selinux: Tristate
    /**
     * A boolean.
     */
    xattrs: Tristate

    // Own fields of Guestfs-1.0.Guestfs.TarOut

    parent: GObject.Object
    priv: TarOutPrivate

    // Class property signals of Guestfs-1.0.Guestfs.TarOut

    connect(sigName: "notify::acls", callback: (($obj: TarOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::acls", callback: (($obj: TarOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::acls", ...args: any[]): void
    connect(sigName: "notify::compress", callback: (($obj: TarOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compress", callback: (($obj: TarOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::compress", ...args: any[]): void
    connect(sigName: "notify::numericowner", callback: (($obj: TarOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::numericowner", callback: (($obj: TarOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::numericowner", ...args: any[]): void
    connect(sigName: "notify::selinux", callback: (($obj: TarOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selinux", callback: (($obj: TarOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selinux", ...args: any[]): void
    connect(sigName: "notify::xattrs", callback: (($obj: TarOut, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xattrs", callback: (($obj: TarOut, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xattrs", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_tar_out.
 * @class 
 */
export class TarOut extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.TarOut

    static name: string
    static $gtype: GObject.GType<TarOut>

    // Constructors of Guestfs-1.0.Guestfs.TarOut

    constructor(config?: TarOut.ConstructorProperties) 
    /**
     * Create a new GuestfsTarOut object
     * @constructor 
     * @returns a new GuestfsTarOut object
     */
    constructor() 
    /**
     * Create a new GuestfsTarOut object
     * @constructor 
     * @returns a new GuestfsTarOut object
     */
    static new(): TarOut
    _init(config?: TarOut.ConstructorProperties): void
}

export module Tune2FS {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.Tune2FS

        /**
         * A string.
         */
        errorbehavior?: string | null
        /**
         * A boolean.
         */
        force?: Tristate | null
        /**
         * A 64-bit integer.
         */
        group?: number | null
        /**
         * A 32-bit integer.
         */
        intervalbetweenchecks?: number | null
        /**
         * A string.
         */
        lastmounteddirectory?: string | null
        /**
         * A 32-bit integer.
         */
        maxmountcount?: number | null
        /**
         * A 32-bit integer.
         */
        mountcount?: number | null
        /**
         * A 64-bit integer.
         */
        reservedblockscount?: number | null
        /**
         * A 32-bit integer.
         */
        reservedblockspercentage?: number | null
        /**
         * A 64-bit integer.
         */
        user?: number | null
    }

}

export interface Tune2FS {

    // Own properties of Guestfs-1.0.Guestfs.Tune2FS

    /**
     * A string.
     */
    errorbehavior: string | null
    /**
     * A boolean.
     */
    force: Tristate
    /**
     * A 64-bit integer.
     */
    group: number
    /**
     * A 32-bit integer.
     */
    intervalbetweenchecks: number
    /**
     * A string.
     */
    lastmounteddirectory: string | null
    /**
     * A 32-bit integer.
     */
    maxmountcount: number
    /**
     * A 32-bit integer.
     */
    mountcount: number
    /**
     * A 64-bit integer.
     */
    reservedblockscount: number
    /**
     * A 32-bit integer.
     */
    reservedblockspercentage: number
    /**
     * A 64-bit integer.
     */
    user: number

    // Own fields of Guestfs-1.0.Guestfs.Tune2FS

    parent: GObject.Object
    priv: Tune2FSPrivate

    // Class property signals of Guestfs-1.0.Guestfs.Tune2FS

    connect(sigName: "notify::errorbehavior", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::errorbehavior", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::errorbehavior", ...args: any[]): void
    connect(sigName: "notify::force", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::force", ...args: any[]): void
    connect(sigName: "notify::group", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::group", ...args: any[]): void
    connect(sigName: "notify::intervalbetweenchecks", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::intervalbetweenchecks", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::intervalbetweenchecks", ...args: any[]): void
    connect(sigName: "notify::lastmounteddirectory", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lastmounteddirectory", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::lastmounteddirectory", ...args: any[]): void
    connect(sigName: "notify::maxmountcount", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maxmountcount", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::maxmountcount", ...args: any[]): void
    connect(sigName: "notify::mountcount", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mountcount", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mountcount", ...args: any[]): void
    connect(sigName: "notify::reservedblockscount", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reservedblockscount", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reservedblockscount", ...args: any[]): void
    connect(sigName: "notify::reservedblockspercentage", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reservedblockspercentage", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reservedblockspercentage", ...args: any[]): void
    connect(sigName: "notify::user", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user", callback: (($obj: Tune2FS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_tune2fs.
 * @class 
 */
export class Tune2FS extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.Tune2FS

    static name: string
    static $gtype: GObject.GType<Tune2FS>

    // Constructors of Guestfs-1.0.Guestfs.Tune2FS

    constructor(config?: Tune2FS.ConstructorProperties) 
    /**
     * Create a new GuestfsTune2FS object
     * @constructor 
     * @returns a new GuestfsTune2FS object
     */
    constructor() 
    /**
     * Create a new GuestfsTune2FS object
     * @constructor 
     * @returns a new GuestfsTune2FS object
     */
    static new(): Tune2FS
    _init(config?: Tune2FS.ConstructorProperties): void
}

export module Umount {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.Umount

        /**
         * A boolean.
         */
        force?: Tristate | null
        /**
         * A boolean.
         */
        lazyunmount?: Tristate | null
    }

}

export interface Umount {

    // Own properties of Guestfs-1.0.Guestfs.Umount

    /**
     * A boolean.
     */
    force: Tristate
    /**
     * A boolean.
     */
    lazyunmount: Tristate

    // Own fields of Guestfs-1.0.Guestfs.Umount

    parent: GObject.Object
    priv: UmountPrivate

    // Class property signals of Guestfs-1.0.Guestfs.Umount

    connect(sigName: "notify::force", callback: (($obj: Umount, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force", callback: (($obj: Umount, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::force", ...args: any[]): void
    connect(sigName: "notify::lazyunmount", callback: (($obj: Umount, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lazyunmount", callback: (($obj: Umount, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::lazyunmount", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_umount.
 * @class 
 */
export class Umount extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.Umount

    static name: string
    static $gtype: GObject.GType<Umount>

    // Constructors of Guestfs-1.0.Guestfs.Umount

    constructor(config?: Umount.ConstructorProperties) 
    /**
     * Create a new GuestfsUmount object
     * @constructor 
     * @returns a new GuestfsUmount object
     */
    constructor() 
    /**
     * Create a new GuestfsUmount object
     * @constructor 
     * @returns a new GuestfsUmount object
     */
    static new(): Umount
    _init(config?: Umount.ConstructorProperties): void
}

export module UmountLocal {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.UmountLocal

        /**
         * A boolean.
         */
        retry?: Tristate | null
    }

}

export interface UmountLocal {

    // Own properties of Guestfs-1.0.Guestfs.UmountLocal

    /**
     * A boolean.
     */
    retry: Tristate

    // Own fields of Guestfs-1.0.Guestfs.UmountLocal

    parent: GObject.Object
    priv: UmountLocalPrivate

    // Class property signals of Guestfs-1.0.Guestfs.UmountLocal

    connect(sigName: "notify::retry", callback: (($obj: UmountLocal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::retry", callback: (($obj: UmountLocal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::retry", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_umount_local.
 * @class 
 */
export class UmountLocal extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.UmountLocal

    static name: string
    static $gtype: GObject.GType<UmountLocal>

    // Constructors of Guestfs-1.0.Guestfs.UmountLocal

    constructor(config?: UmountLocal.ConstructorProperties) 
    /**
     * Create a new GuestfsUmountLocal object
     * @constructor 
     * @returns a new GuestfsUmountLocal object
     */
    constructor() 
    /**
     * Create a new GuestfsUmountLocal object
     * @constructor 
     * @returns a new GuestfsUmountLocal object
     */
    static new(): UmountLocal
    _init(config?: UmountLocal.ConstructorProperties): void
}

export module XfsAdmin {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.XfsAdmin

        /**
         * A boolean.
         */
        extunwritten?: Tristate | null
        /**
         * A boolean.
         */
        imgfile?: Tristate | null
        /**
         * A string.
         */
        label?: string | null
        /**
         * A boolean.
         */
        lazycounter?: Tristate | null
        /**
         * A boolean.
         */
        projid32bit?: Tristate | null
        /**
         * A string.
         */
        uuid?: string | null
        /**
         * A boolean.
         */
        v2log?: Tristate | null
    }

}

export interface XfsAdmin {

    // Own properties of Guestfs-1.0.Guestfs.XfsAdmin

    /**
     * A boolean.
     */
    extunwritten: Tristate
    /**
     * A boolean.
     */
    imgfile: Tristate
    /**
     * A string.
     */
    label: string | null
    /**
     * A boolean.
     */
    lazycounter: Tristate
    /**
     * A boolean.
     */
    projid32bit: Tristate
    /**
     * A string.
     */
    uuid: string | null
    /**
     * A boolean.
     */
    v2log: Tristate

    // Own fields of Guestfs-1.0.Guestfs.XfsAdmin

    parent: GObject.Object
    priv: XfsAdminPrivate

    // Class property signals of Guestfs-1.0.Guestfs.XfsAdmin

    connect(sigName: "notify::extunwritten", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extunwritten", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::extunwritten", ...args: any[]): void
    connect(sigName: "notify::imgfile", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imgfile", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::imgfile", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::lazycounter", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::lazycounter", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::lazycounter", ...args: any[]): void
    connect(sigName: "notify::projid32bit", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::projid32bit", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::projid32bit", ...args: any[]): void
    connect(sigName: "notify::uuid", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uuid", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uuid", ...args: any[]): void
    connect(sigName: "notify::v2log", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::v2log", callback: (($obj: XfsAdmin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::v2log", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_xfs_admin.
 * @class 
 */
export class XfsAdmin extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.XfsAdmin

    static name: string
    static $gtype: GObject.GType<XfsAdmin>

    // Constructors of Guestfs-1.0.Guestfs.XfsAdmin

    constructor(config?: XfsAdmin.ConstructorProperties) 
    /**
     * Create a new GuestfsXfsAdmin object
     * @constructor 
     * @returns a new GuestfsXfsAdmin object
     */
    constructor() 
    /**
     * Create a new GuestfsXfsAdmin object
     * @constructor 
     * @returns a new GuestfsXfsAdmin object
     */
    static new(): XfsAdmin
    _init(config?: XfsAdmin.ConstructorProperties): void
}

export module XfsGrowfs {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.XfsGrowfs

        /**
         * A boolean.
         */
        datasec?: Tristate | null
        /**
         * A 64-bit integer.
         */
        datasize?: number | null
        /**
         * A boolean.
         */
        logsec?: Tristate | null
        /**
         * A 64-bit integer.
         */
        logsize?: number | null
        /**
         * A 32-bit integer.
         */
        maxpct?: number | null
        /**
         * A 64-bit integer.
         */
        rtextsize?: number | null
        /**
         * A boolean.
         */
        rtsec?: Tristate | null
        /**
         * A 64-bit integer.
         */
        rtsize?: number | null
    }

}

export interface XfsGrowfs {

    // Own properties of Guestfs-1.0.Guestfs.XfsGrowfs

    /**
     * A boolean.
     */
    datasec: Tristate
    /**
     * A 64-bit integer.
     */
    datasize: number
    /**
     * A boolean.
     */
    logsec: Tristate
    /**
     * A 64-bit integer.
     */
    logsize: number
    /**
     * A 32-bit integer.
     */
    maxpct: number
    /**
     * A 64-bit integer.
     */
    rtextsize: number
    /**
     * A boolean.
     */
    rtsec: Tristate
    /**
     * A 64-bit integer.
     */
    rtsize: number

    // Own fields of Guestfs-1.0.Guestfs.XfsGrowfs

    parent: GObject.Object
    priv: XfsGrowfsPrivate

    // Class property signals of Guestfs-1.0.Guestfs.XfsGrowfs

    connect(sigName: "notify::datasec", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::datasec", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::datasec", ...args: any[]): void
    connect(sigName: "notify::datasize", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::datasize", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::datasize", ...args: any[]): void
    connect(sigName: "notify::logsec", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logsec", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::logsec", ...args: any[]): void
    connect(sigName: "notify::logsize", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logsize", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::logsize", ...args: any[]): void
    connect(sigName: "notify::maxpct", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maxpct", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::maxpct", ...args: any[]): void
    connect(sigName: "notify::rtextsize", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rtextsize", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rtextsize", ...args: any[]): void
    connect(sigName: "notify::rtsec", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rtsec", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rtsec", ...args: any[]): void
    connect(sigName: "notify::rtsize", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rtsize", callback: (($obj: XfsGrowfs, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rtsize", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_xfs_growfs.
 * @class 
 */
export class XfsGrowfs extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.XfsGrowfs

    static name: string
    static $gtype: GObject.GType<XfsGrowfs>

    // Constructors of Guestfs-1.0.Guestfs.XfsGrowfs

    constructor(config?: XfsGrowfs.ConstructorProperties) 
    /**
     * Create a new GuestfsXfsGrowfs object
     * @constructor 
     * @returns a new GuestfsXfsGrowfs object
     */
    constructor() 
    /**
     * Create a new GuestfsXfsGrowfs object
     * @constructor 
     * @returns a new GuestfsXfsGrowfs object
     */
    static new(): XfsGrowfs
    _init(config?: XfsGrowfs.ConstructorProperties): void
}

export module XfsRepair {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Guestfs-1.0.Guestfs.XfsRepair

        /**
         * A 64-bit integer.
         */
        agstride?: number | null
        /**
         * A 64-bit integer.
         */
        bhashsize?: number | null
        /**
         * A boolean.
         */
        forcegeometry?: Tristate | null
        /**
         * A boolean.
         */
        forcelogzero?: Tristate | null
        /**
         * A 64-bit integer.
         */
        ihashsize?: number | null
        /**
         * A string.
         */
        logdev?: string | null
        /**
         * A 64-bit integer.
         */
        maxmem?: number | null
        /**
         * A boolean.
         */
        nomodify?: Tristate | null
        /**
         * A boolean.
         */
        noprefetch?: Tristate | null
        /**
         * A string.
         */
        rtdev?: string | null
    }

}

export interface XfsRepair {

    // Own properties of Guestfs-1.0.Guestfs.XfsRepair

    /**
     * A 64-bit integer.
     */
    agstride: number
    /**
     * A 64-bit integer.
     */
    bhashsize: number
    /**
     * A boolean.
     */
    forcegeometry: Tristate
    /**
     * A boolean.
     */
    forcelogzero: Tristate
    /**
     * A 64-bit integer.
     */
    ihashsize: number
    /**
     * A string.
     */
    logdev: string | null
    /**
     * A 64-bit integer.
     */
    maxmem: number
    /**
     * A boolean.
     */
    nomodify: Tristate
    /**
     * A boolean.
     */
    noprefetch: Tristate
    /**
     * A string.
     */
    rtdev: string | null

    // Own fields of Guestfs-1.0.Guestfs.XfsRepair

    parent: GObject.Object
    priv: XfsRepairPrivate

    // Class property signals of Guestfs-1.0.Guestfs.XfsRepair

    connect(sigName: "notify::agstride", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::agstride", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::agstride", ...args: any[]): void
    connect(sigName: "notify::bhashsize", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bhashsize", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bhashsize", ...args: any[]): void
    connect(sigName: "notify::forcegeometry", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::forcegeometry", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::forcegeometry", ...args: any[]): void
    connect(sigName: "notify::forcelogzero", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::forcelogzero", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::forcelogzero", ...args: any[]): void
    connect(sigName: "notify::ihashsize", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ihashsize", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ihashsize", ...args: any[]): void
    connect(sigName: "notify::logdev", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::logdev", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::logdev", ...args: any[]): void
    connect(sigName: "notify::maxmem", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maxmem", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::maxmem", ...args: any[]): void
    connect(sigName: "notify::nomodify", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::nomodify", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::nomodify", ...args: any[]): void
    connect(sigName: "notify::noprefetch", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::noprefetch", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::noprefetch", ...args: any[]): void
    connect(sigName: "notify::rtdev", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rtdev", callback: (($obj: XfsRepair, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rtdev", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object encapsulating optional arguments for guestfs_session_xfs_repair.
 * @class 
 */
export class XfsRepair extends GObject.Object {

    // Own properties of Guestfs-1.0.Guestfs.XfsRepair

    static name: string
    static $gtype: GObject.GType<XfsRepair>

    // Constructors of Guestfs-1.0.Guestfs.XfsRepair

    constructor(config?: XfsRepair.ConstructorProperties) 
    /**
     * Create a new GuestfsXfsRepair object
     * @constructor 
     * @returns a new GuestfsXfsRepair object
     */
    constructor() 
    /**
     * Create a new GuestfsXfsRepair object
     * @constructor 
     * @returns a new GuestfsXfsRepair object
     */
    static new(): XfsRepair
    _init(config?: XfsRepair.ConstructorProperties): void
}

export interface AddDomainClass {

    // Own fields of Guestfs-1.0.Guestfs.AddDomainClass

    /**
     * The superclass of GuestfsAddDomainClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsAddDomain.
 * @record 
 */
export abstract class AddDomainClass {

    // Own properties of Guestfs-1.0.Guestfs.AddDomainClass

    static name: string
}

export interface AddDomainPrivate {
}

export class AddDomainPrivate {

    // Own properties of Guestfs-1.0.Guestfs.AddDomainPrivate

    static name: string
}

export interface AddDriveClass {

    // Own fields of Guestfs-1.0.Guestfs.AddDriveClass

    /**
     * The superclass of GuestfsAddDriveClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsAddDrive.
 * @record 
 */
export abstract class AddDriveClass {

    // Own properties of Guestfs-1.0.Guestfs.AddDriveClass

    static name: string
}

export interface AddDrivePrivate {
}

export class AddDrivePrivate {

    // Own properties of Guestfs-1.0.Guestfs.AddDrivePrivate

    static name: string
}

export interface AddDriveScratchClass {

    // Own fields of Guestfs-1.0.Guestfs.AddDriveScratchClass

    /**
     * The superclass of GuestfsAddDriveScratchClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsAddDriveScratch.
 * @record 
 */
export abstract class AddDriveScratchClass {

    // Own properties of Guestfs-1.0.Guestfs.AddDriveScratchClass

    static name: string
}

export interface AddDriveScratchPrivate {
}

export class AddDriveScratchPrivate {

    // Own properties of Guestfs-1.0.Guestfs.AddDriveScratchPrivate

    static name: string
}

export interface AddLibvirtDomClass {

    // Own fields of Guestfs-1.0.Guestfs.AddLibvirtDomClass

    /**
     * The superclass of GuestfsAddLibvirtDomClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsAddLibvirtDom.
 * @record 
 */
export abstract class AddLibvirtDomClass {

    // Own properties of Guestfs-1.0.Guestfs.AddLibvirtDomClass

    static name: string
}

export interface AddLibvirtDomPrivate {
}

export class AddLibvirtDomPrivate {

    // Own properties of Guestfs-1.0.Guestfs.AddLibvirtDomPrivate

    static name: string
}

export interface Application {

    // Own fields of Guestfs-1.0.Guestfs.Application

    /**
     * A NULL-terminated string
     * @field 
     */
    app_name: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    app_display_name: string | null
    /**
     * A signed 32-bit integer
     * @field 
     */
    app_epoch: number
    /**
     * A NULL-terminated string
     * @field 
     */
    app_version: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    app_release: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    app_install_path: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    app_trans_path: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    app_publisher: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    app_url: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    app_source_package: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    app_summary: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    app_description: string | null
}

export class Application {

    // Own properties of Guestfs-1.0.Guestfs.Application

    static name: string
}

export interface Application2 {

    // Own fields of Guestfs-1.0.Guestfs.Application2

    /**
     * A NULL-terminated string
     * @field 
     */
    app2_name: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    app2_display_name: string | null
    /**
     * A signed 32-bit integer
     * @field 
     */
    app2_epoch: number
    /**
     * A NULL-terminated string
     * @field 
     */
    app2_version: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    app2_release: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    app2_arch: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    app2_install_path: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    app2_trans_path: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    app2_publisher: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    app2_url: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    app2_source_package: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    app2_summary: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    app2_description: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    app2_spare1: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    app2_spare2: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    app2_spare3: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    app2_spare4: string | null
}

export class Application2 {

    // Own properties of Guestfs-1.0.Guestfs.Application2

    static name: string
}

export interface AugTransformClass {

    // Own fields of Guestfs-1.0.Guestfs.AugTransformClass

    /**
     * The superclass of GuestfsAugTransformClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsAugTransform.
 * @record 
 */
export abstract class AugTransformClass {

    // Own properties of Guestfs-1.0.Guestfs.AugTransformClass

    static name: string
}

export interface AugTransformPrivate {
}

export class AugTransformPrivate {

    // Own properties of Guestfs-1.0.Guestfs.AugTransformPrivate

    static name: string
}

export interface BTRFSBalance {

    // Own fields of Guestfs-1.0.Guestfs.BTRFSBalance

    /**
     * A NULL-terminated string
     * @field 
     */
    btrfsbalance_status: string | null
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    btrfsbalance_total: number
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    btrfsbalance_balanced: number
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    btrfsbalance_considered: number
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    btrfsbalance_left: number
}

export class BTRFSBalance {

    // Own properties of Guestfs-1.0.Guestfs.BTRFSBalance

    static name: string
}

export interface BTRFSFilesystemDefragmentClass {

    // Own fields of Guestfs-1.0.Guestfs.BTRFSFilesystemDefragmentClass

    /**
     * The superclass of GuestfsBTRFSFilesystemDefragmentClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsBTRFSFilesystemDefragment.
 * @record 
 */
export abstract class BTRFSFilesystemDefragmentClass {

    // Own properties of Guestfs-1.0.Guestfs.BTRFSFilesystemDefragmentClass

    static name: string
}

export interface BTRFSFilesystemDefragmentPrivate {
}

export class BTRFSFilesystemDefragmentPrivate {

    // Own properties of Guestfs-1.0.Guestfs.BTRFSFilesystemDefragmentPrivate

    static name: string
}

export interface BTRFSFilesystemResizeClass {

    // Own fields of Guestfs-1.0.Guestfs.BTRFSFilesystemResizeClass

    /**
     * The superclass of GuestfsBTRFSFilesystemResizeClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsBTRFSFilesystemResize.
 * @record 
 */
export abstract class BTRFSFilesystemResizeClass {

    // Own properties of Guestfs-1.0.Guestfs.BTRFSFilesystemResizeClass

    static name: string
}

export interface BTRFSFilesystemResizePrivate {
}

export class BTRFSFilesystemResizePrivate {

    // Own properties of Guestfs-1.0.Guestfs.BTRFSFilesystemResizePrivate

    static name: string
}

export interface BTRFSImageClass {

    // Own fields of Guestfs-1.0.Guestfs.BTRFSImageClass

    /**
     * The superclass of GuestfsBTRFSImageClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsBTRFSImage.
 * @record 
 */
export abstract class BTRFSImageClass {

    // Own properties of Guestfs-1.0.Guestfs.BTRFSImageClass

    static name: string
}

export interface BTRFSImagePrivate {
}

export class BTRFSImagePrivate {

    // Own properties of Guestfs-1.0.Guestfs.BTRFSImagePrivate

    static name: string
}

export interface BTRFSQgroup {

    // Own fields of Guestfs-1.0.Guestfs.BTRFSQgroup

    /**
     * A NULL-terminated string
     * @field 
     */
    btrfsqgroup_id: string | null
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    btrfsqgroup_rfer: number
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    btrfsqgroup_excl: number
}

export class BTRFSQgroup {

    // Own properties of Guestfs-1.0.Guestfs.BTRFSQgroup

    static name: string
}

export interface BTRFSScrub {

    // Own fields of Guestfs-1.0.Guestfs.BTRFSScrub

    /**
     * An unsigned 64-bit integer
     * @field 
     */
    btrfsscrub_data_extents_scrubbed: number
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    btrfsscrub_tree_extents_scrubbed: number
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    btrfsscrub_data_bytes_scrubbed: number
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    btrfsscrub_tree_bytes_scrubbed: number
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    btrfsscrub_read_errors: number
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    btrfsscrub_csum_errors: number
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    btrfsscrub_verify_errors: number
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    btrfsscrub_no_csum: number
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    btrfsscrub_csum_discards: number
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    btrfsscrub_super_errors: number
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    btrfsscrub_malloc_errors: number
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    btrfsscrub_uncorrectable_errors: number
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    btrfsscrub_unverified_errors: number
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    btrfsscrub_corrected_errors: number
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    btrfsscrub_last_physical: number
}

export class BTRFSScrub {

    // Own properties of Guestfs-1.0.Guestfs.BTRFSScrub

    static name: string
}

export interface BTRFSSubvolume {

    // Own fields of Guestfs-1.0.Guestfs.BTRFSSubvolume

    /**
     * An unsigned 64-bit integer
     * @field 
     */
    btrfssubvolume_id: number
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    btrfssubvolume_top_level_id: number
    /**
     * A NULL-terminated string
     * @field 
     */
    btrfssubvolume_path: string | null
}

export class BTRFSSubvolume {

    // Own properties of Guestfs-1.0.Guestfs.BTRFSSubvolume

    static name: string
}

export interface BTRFSSubvolumeCreateClass {

    // Own fields of Guestfs-1.0.Guestfs.BTRFSSubvolumeCreateClass

    /**
     * The superclass of GuestfsBTRFSSubvolumeCreateClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsBTRFSSubvolumeCreate.
 * @record 
 */
export abstract class BTRFSSubvolumeCreateClass {

    // Own properties of Guestfs-1.0.Guestfs.BTRFSSubvolumeCreateClass

    static name: string
}

export interface BTRFSSubvolumeCreatePrivate {
}

export class BTRFSSubvolumeCreatePrivate {

    // Own properties of Guestfs-1.0.Guestfs.BTRFSSubvolumeCreatePrivate

    static name: string
}

export interface BTRFSSubvolumeSnapshotClass {

    // Own fields of Guestfs-1.0.Guestfs.BTRFSSubvolumeSnapshotClass

    /**
     * The superclass of GuestfsBTRFSSubvolumeSnapshotClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsBTRFSSubvolumeSnapshot.
 * @record 
 */
export abstract class BTRFSSubvolumeSnapshotClass {

    // Own properties of Guestfs-1.0.Guestfs.BTRFSSubvolumeSnapshotClass

    static name: string
}

export interface BTRFSSubvolumeSnapshotPrivate {
}

export class BTRFSSubvolumeSnapshotPrivate {

    // Own properties of Guestfs-1.0.Guestfs.BTRFSSubvolumeSnapshotPrivate

    static name: string
}

export interface BtrfsFsckClass {

    // Own fields of Guestfs-1.0.Guestfs.BtrfsFsckClass

    /**
     * The superclass of GuestfsBtrfsFsckClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsBtrfsFsck.
 * @record 
 */
export abstract class BtrfsFsckClass {

    // Own properties of Guestfs-1.0.Guestfs.BtrfsFsckClass

    static name: string
}

export interface BtrfsFsckPrivate {
}

export class BtrfsFsckPrivate {

    // Own properties of Guestfs-1.0.Guestfs.BtrfsFsckPrivate

    static name: string
}

export interface CompressDeviceOutClass {

    // Own fields of Guestfs-1.0.Guestfs.CompressDeviceOutClass

    /**
     * The superclass of GuestfsCompressDeviceOutClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsCompressDeviceOut.
 * @record 
 */
export abstract class CompressDeviceOutClass {

    // Own properties of Guestfs-1.0.Guestfs.CompressDeviceOutClass

    static name: string
}

export interface CompressDeviceOutPrivate {
}

export class CompressDeviceOutPrivate {

    // Own properties of Guestfs-1.0.Guestfs.CompressDeviceOutPrivate

    static name: string
}

export interface CompressOutClass {

    // Own fields of Guestfs-1.0.Guestfs.CompressOutClass

    /**
     * The superclass of GuestfsCompressOutClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsCompressOut.
 * @record 
 */
export abstract class CompressOutClass {

    // Own properties of Guestfs-1.0.Guestfs.CompressOutClass

    static name: string
}

export interface CompressOutPrivate {
}

export class CompressOutPrivate {

    // Own properties of Guestfs-1.0.Guestfs.CompressOutPrivate

    static name: string
}

export interface CopyAttributesClass {

    // Own fields of Guestfs-1.0.Guestfs.CopyAttributesClass

    /**
     * The superclass of GuestfsCopyAttributesClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsCopyAttributes.
 * @record 
 */
export abstract class CopyAttributesClass {

    // Own properties of Guestfs-1.0.Guestfs.CopyAttributesClass

    static name: string
}

export interface CopyAttributesPrivate {
}

export class CopyAttributesPrivate {

    // Own properties of Guestfs-1.0.Guestfs.CopyAttributesPrivate

    static name: string
}

export interface CopyDeviceToDeviceClass {

    // Own fields of Guestfs-1.0.Guestfs.CopyDeviceToDeviceClass

    /**
     * The superclass of GuestfsCopyDeviceToDeviceClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsCopyDeviceToDevice.
 * @record 
 */
export abstract class CopyDeviceToDeviceClass {

    // Own properties of Guestfs-1.0.Guestfs.CopyDeviceToDeviceClass

    static name: string
}

export interface CopyDeviceToDevicePrivate {
}

export class CopyDeviceToDevicePrivate {

    // Own properties of Guestfs-1.0.Guestfs.CopyDeviceToDevicePrivate

    static name: string
}

export interface CopyDeviceToFileClass {

    // Own fields of Guestfs-1.0.Guestfs.CopyDeviceToFileClass

    /**
     * The superclass of GuestfsCopyDeviceToFileClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsCopyDeviceToFile.
 * @record 
 */
export abstract class CopyDeviceToFileClass {

    // Own properties of Guestfs-1.0.Guestfs.CopyDeviceToFileClass

    static name: string
}

export interface CopyDeviceToFilePrivate {
}

export class CopyDeviceToFilePrivate {

    // Own properties of Guestfs-1.0.Guestfs.CopyDeviceToFilePrivate

    static name: string
}

export interface CopyFileToDeviceClass {

    // Own fields of Guestfs-1.0.Guestfs.CopyFileToDeviceClass

    /**
     * The superclass of GuestfsCopyFileToDeviceClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsCopyFileToDevice.
 * @record 
 */
export abstract class CopyFileToDeviceClass {

    // Own properties of Guestfs-1.0.Guestfs.CopyFileToDeviceClass

    static name: string
}

export interface CopyFileToDevicePrivate {
}

export class CopyFileToDevicePrivate {

    // Own properties of Guestfs-1.0.Guestfs.CopyFileToDevicePrivate

    static name: string
}

export interface CopyFileToFileClass {

    // Own fields of Guestfs-1.0.Guestfs.CopyFileToFileClass

    /**
     * The superclass of GuestfsCopyFileToFileClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsCopyFileToFile.
 * @record 
 */
export abstract class CopyFileToFileClass {

    // Own properties of Guestfs-1.0.Guestfs.CopyFileToFileClass

    static name: string
}

export interface CopyFileToFilePrivate {
}

export class CopyFileToFilePrivate {

    // Own properties of Guestfs-1.0.Guestfs.CopyFileToFilePrivate

    static name: string
}

export interface CpioOutClass {

    // Own fields of Guestfs-1.0.Guestfs.CpioOutClass

    /**
     * The superclass of GuestfsCpioOutClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsCpioOut.
 * @record 
 */
export abstract class CpioOutClass {

    // Own properties of Guestfs-1.0.Guestfs.CpioOutClass

    static name: string
}

export interface CpioOutPrivate {
}

export class CpioOutPrivate {

    // Own properties of Guestfs-1.0.Guestfs.CpioOutPrivate

    static name: string
}

export interface Dirent {

    // Own fields of Guestfs-1.0.Guestfs.Dirent

    /**
     * A signed 64-bit integer
     * @field 
     */
    ino: number
    /**
     * A character
     * @field 
     */
    ftyp: number
    /**
     * A NULL-terminated string
     * @field 
     */
    name: string | null
}

export class Dirent {

    // Own properties of Guestfs-1.0.Guestfs.Dirent

    static name: string
}

export interface DiskCreateClass {

    // Own fields of Guestfs-1.0.Guestfs.DiskCreateClass

    /**
     * The superclass of GuestfsDiskCreateClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsDiskCreate.
 * @record 
 */
export abstract class DiskCreateClass {

    // Own properties of Guestfs-1.0.Guestfs.DiskCreateClass

    static name: string
}

export interface DiskCreatePrivate {
}

export class DiskCreatePrivate {

    // Own properties of Guestfs-1.0.Guestfs.DiskCreatePrivate

    static name: string
}

export interface DownloadBlocksClass {

    // Own fields of Guestfs-1.0.Guestfs.DownloadBlocksClass

    /**
     * The superclass of GuestfsDownloadBlocksClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsDownloadBlocks.
 * @record 
 */
export abstract class DownloadBlocksClass {

    // Own properties of Guestfs-1.0.Guestfs.DownloadBlocksClass

    static name: string
}

export interface DownloadBlocksPrivate {
}

export class DownloadBlocksPrivate {

    // Own properties of Guestfs-1.0.Guestfs.DownloadBlocksPrivate

    static name: string
}

export interface E2fsckClass {

    // Own fields of Guestfs-1.0.Guestfs.E2fsckClass

    /**
     * The superclass of GuestfsE2fsckClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsE2fsck.
 * @record 
 */
export abstract class E2fsckClass {

    // Own properties of Guestfs-1.0.Guestfs.E2fsckClass

    static name: string
}

export interface E2fsckPrivate {
}

export class E2fsckPrivate {

    // Own properties of Guestfs-1.0.Guestfs.E2fsckPrivate

    static name: string
}

export interface FstrimClass {

    // Own fields of Guestfs-1.0.Guestfs.FstrimClass

    /**
     * The superclass of GuestfsFstrimClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsFstrim.
 * @record 
 */
export abstract class FstrimClass {

    // Own properties of Guestfs-1.0.Guestfs.FstrimClass

    static name: string
}

export interface FstrimPrivate {
}

export class FstrimPrivate {

    // Own properties of Guestfs-1.0.Guestfs.FstrimPrivate

    static name: string
}

export interface GlobExpandClass {

    // Own fields of Guestfs-1.0.Guestfs.GlobExpandClass

    /**
     * The superclass of GuestfsGlobExpandClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsGlobExpand.
 * @record 
 */
export abstract class GlobExpandClass {

    // Own properties of Guestfs-1.0.Guestfs.GlobExpandClass

    static name: string
}

export interface GlobExpandPrivate {
}

export class GlobExpandPrivate {

    // Own properties of Guestfs-1.0.Guestfs.GlobExpandPrivate

    static name: string
}

export interface GrepClass {

    // Own fields of Guestfs-1.0.Guestfs.GrepClass

    /**
     * The superclass of GuestfsGrepClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsGrep.
 * @record 
 */
export abstract class GrepClass {

    // Own properties of Guestfs-1.0.Guestfs.GrepClass

    static name: string
}

export interface GrepPrivate {
}

export class GrepPrivate {

    // Own properties of Guestfs-1.0.Guestfs.GrepPrivate

    static name: string
}

export interface HivexNode {

    // Own fields of Guestfs-1.0.Guestfs.HivexNode

    /**
     * A signed 64-bit integer
     * @field 
     */
    hivex_node_h: number
}

export class HivexNode {

    // Own properties of Guestfs-1.0.Guestfs.HivexNode

    static name: string
}

export interface HivexOpenClass {

    // Own fields of Guestfs-1.0.Guestfs.HivexOpenClass

    /**
     * The superclass of GuestfsHivexOpenClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsHivexOpen.
 * @record 
 */
export abstract class HivexOpenClass {

    // Own properties of Guestfs-1.0.Guestfs.HivexOpenClass

    static name: string
}

export interface HivexOpenPrivate {
}

export class HivexOpenPrivate {

    // Own properties of Guestfs-1.0.Guestfs.HivexOpenPrivate

    static name: string
}

export interface HivexValue {

    // Own fields of Guestfs-1.0.Guestfs.HivexValue

    /**
     * A signed 64-bit integer
     * @field 
     */
    hivex_value_h: number
}

export class HivexValue {

    // Own properties of Guestfs-1.0.Guestfs.HivexValue

    static name: string
}

export interface INotifyEvent {

    // Own fields of Guestfs-1.0.Guestfs.INotifyEvent

    /**
     * A signed 64-bit integer
     * @field 
     */
    in_wd: number
    /**
     * An unsigned 32-bit integer
     * @field 
     */
    in_mask: number
    /**
     * An unsigned 32-bit integer
     * @field 
     */
    in_cookie: number
    /**
     * A NULL-terminated string
     * @field 
     */
    in_name: string | null
}

export class INotifyEvent {

    // Own properties of Guestfs-1.0.Guestfs.INotifyEvent

    static name: string
}

export interface ISOInfo {

    // Own fields of Guestfs-1.0.Guestfs.ISOInfo

    /**
     * A NULL-terminated string
     * @field 
     */
    iso_system_id: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    iso_volume_id: string | null
    /**
     * An unsigned 32-bit integer
     * @field 
     */
    iso_volume_space_size: number
    /**
     * An unsigned 32-bit integer
     * @field 
     */
    iso_volume_set_size: number
    /**
     * An unsigned 32-bit integer
     * @field 
     */
    iso_volume_sequence_number: number
    /**
     * An unsigned 32-bit integer
     * @field 
     */
    iso_logical_block_size: number
    /**
     * A NULL-terminated string
     * @field 
     */
    iso_volume_set_id: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    iso_publisher_id: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    iso_data_preparer_id: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    iso_application_id: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    iso_copyright_file_id: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    iso_abstract_file_id: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    iso_bibliographic_file_id: string | null
    /**
     * A signed 64-bit integer
     * @field 
     */
    iso_volume_creation_t: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    iso_volume_modification_t: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    iso_volume_expiration_t: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    iso_volume_effective_t: number
}

export class ISOInfo {

    // Own properties of Guestfs-1.0.Guestfs.ISOInfo

    static name: string
}

export interface InspectGetIconClass {

    // Own fields of Guestfs-1.0.Guestfs.InspectGetIconClass

    /**
     * The superclass of GuestfsInspectGetIconClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsInspectGetIcon.
 * @record 
 */
export abstract class InspectGetIconClass {

    // Own properties of Guestfs-1.0.Guestfs.InspectGetIconClass

    static name: string
}

export interface InspectGetIconPrivate {
}

export class InspectGetIconPrivate {

    // Own properties of Guestfs-1.0.Guestfs.InspectGetIconPrivate

    static name: string
}

export interface IntBool {

    // Own fields of Guestfs-1.0.Guestfs.IntBool

    /**
     * A signed 32-bit integer
     * @field 
     */
    i: number
    /**
     * A signed 32-bit integer
     * @field 
     */
    b: number
}

export class IntBool {

    // Own properties of Guestfs-1.0.Guestfs.IntBool

    static name: string
}

export interface InternalTest63OptargsClass {

    // Own fields of Guestfs-1.0.Guestfs.InternalTest63OptargsClass

    /**
     * The superclass of GuestfsInternalTest63OptargsClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsInternalTest63Optargs.
 * @record 
 */
export abstract class InternalTest63OptargsClass {

    // Own properties of Guestfs-1.0.Guestfs.InternalTest63OptargsClass

    static name: string
}

export interface InternalTest63OptargsPrivate {
}

export class InternalTest63OptargsPrivate {

    // Own properties of Guestfs-1.0.Guestfs.InternalTest63OptargsPrivate

    static name: string
}

export interface InternalTestClass {

    // Own fields of Guestfs-1.0.Guestfs.InternalTestClass

    /**
     * The superclass of GuestfsInternalTestClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsInternalTest.
 * @record 
 */
export abstract class InternalTestClass {

    // Own properties of Guestfs-1.0.Guestfs.InternalTestClass

    static name: string
}

export interface InternalTestOnlyOptargsClass {

    // Own fields of Guestfs-1.0.Guestfs.InternalTestOnlyOptargsClass

    /**
     * The superclass of GuestfsInternalTestOnlyOptargsClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsInternalTestOnlyOptargs.
 * @record 
 */
export abstract class InternalTestOnlyOptargsClass {

    // Own properties of Guestfs-1.0.Guestfs.InternalTestOnlyOptargsClass

    static name: string
}

export interface InternalTestOnlyOptargsPrivate {
}

export class InternalTestOnlyOptargsPrivate {

    // Own properties of Guestfs-1.0.Guestfs.InternalTestOnlyOptargsPrivate

    static name: string
}

export interface InternalTestPrivate {
}

export class InternalTestPrivate {

    // Own properties of Guestfs-1.0.Guestfs.InternalTestPrivate

    static name: string
}

export interface IsBlockdevClass {

    // Own fields of Guestfs-1.0.Guestfs.IsBlockdevClass

    /**
     * The superclass of GuestfsIsBlockdevClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsIsBlockdev.
 * @record 
 */
export abstract class IsBlockdevClass {

    // Own properties of Guestfs-1.0.Guestfs.IsBlockdevClass

    static name: string
}

export interface IsBlockdevPrivate {
}

export class IsBlockdevPrivate {

    // Own properties of Guestfs-1.0.Guestfs.IsBlockdevPrivate

    static name: string
}

export interface IsChardevClass {

    // Own fields of Guestfs-1.0.Guestfs.IsChardevClass

    /**
     * The superclass of GuestfsIsChardevClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsIsChardev.
 * @record 
 */
export abstract class IsChardevClass {

    // Own properties of Guestfs-1.0.Guestfs.IsChardevClass

    static name: string
}

export interface IsChardevPrivate {
}

export class IsChardevPrivate {

    // Own properties of Guestfs-1.0.Guestfs.IsChardevPrivate

    static name: string
}

export interface IsDirClass {

    // Own fields of Guestfs-1.0.Guestfs.IsDirClass

    /**
     * The superclass of GuestfsIsDirClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsIsDir.
 * @record 
 */
export abstract class IsDirClass {

    // Own properties of Guestfs-1.0.Guestfs.IsDirClass

    static name: string
}

export interface IsDirPrivate {
}

export class IsDirPrivate {

    // Own properties of Guestfs-1.0.Guestfs.IsDirPrivate

    static name: string
}

export interface IsFifoClass {

    // Own fields of Guestfs-1.0.Guestfs.IsFifoClass

    /**
     * The superclass of GuestfsIsFifoClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsIsFifo.
 * @record 
 */
export abstract class IsFifoClass {

    // Own properties of Guestfs-1.0.Guestfs.IsFifoClass

    static name: string
}

export interface IsFifoPrivate {
}

export class IsFifoPrivate {

    // Own properties of Guestfs-1.0.Guestfs.IsFifoPrivate

    static name: string
}

export interface IsFileClass {

    // Own fields of Guestfs-1.0.Guestfs.IsFileClass

    /**
     * The superclass of GuestfsIsFileClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsIsFile.
 * @record 
 */
export abstract class IsFileClass {

    // Own properties of Guestfs-1.0.Guestfs.IsFileClass

    static name: string
}

export interface IsFilePrivate {
}

export class IsFilePrivate {

    // Own properties of Guestfs-1.0.Guestfs.IsFilePrivate

    static name: string
}

export interface IsSocketClass {

    // Own fields of Guestfs-1.0.Guestfs.IsSocketClass

    /**
     * The superclass of GuestfsIsSocketClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsIsSocket.
 * @record 
 */
export abstract class IsSocketClass {

    // Own properties of Guestfs-1.0.Guestfs.IsSocketClass

    static name: string
}

export interface IsSocketPrivate {
}

export class IsSocketPrivate {

    // Own properties of Guestfs-1.0.Guestfs.IsSocketPrivate

    static name: string
}

export interface LV {

    // Own fields of Guestfs-1.0.Guestfs.LV

    /**
     * A NULL-terminated string
     * @field 
     */
    lv_name: string | null
    /**
     * A 32 byte UUID. Note that this is not NULL-terminated
     * @field 
     */
    lv_uuid: number[]
    /**
     * A NULL-terminated string
     * @field 
     */
    lv_attr: string | null
    /**
     * A signed 64-bit integer
     * @field 
     */
    lv_major: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    lv_minor: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    lv_kernel_major: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    lv_kernel_minor: number
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    lv_size: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    seg_count: number
    /**
     * A NULL-terminated string
     * @field 
     */
    origin: string | null
    /**
     * A floating point number. A value between 0 and 100 represents a percentage. A value of -1 represents 'not present'
     * @field 
     */
    snap_percent: number
    /**
     * A floating point number. A value between 0 and 100 represents a percentage. A value of -1 represents 'not present'
     * @field 
     */
    copy_percent: number
    /**
     * A NULL-terminated string
     * @field 
     */
    move_pv: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    lv_tags: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    mirror_log: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    modules: string | null
}

export class LV {

    // Own properties of Guestfs-1.0.Guestfs.LV

    static name: string
}

export interface MDCreateClass {

    // Own fields of Guestfs-1.0.Guestfs.MDCreateClass

    /**
     * The superclass of GuestfsMDCreateClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsMDCreate.
 * @record 
 */
export abstract class MDCreateClass {

    // Own properties of Guestfs-1.0.Guestfs.MDCreateClass

    static name: string
}

export interface MDCreatePrivate {
}

export class MDCreatePrivate {

    // Own properties of Guestfs-1.0.Guestfs.MDCreatePrivate

    static name: string
}

export interface MDStat {

    // Own fields of Guestfs-1.0.Guestfs.MDStat

    /**
     * A NULL-terminated string
     * @field 
     */
    mdstat_device: string | null
    /**
     * A signed 32-bit integer
     * @field 
     */
    mdstat_index: number
    /**
     * A NULL-terminated string
     * @field 
     */
    mdstat_flags: string | null
}

export class MDStat {

    // Own properties of Guestfs-1.0.Guestfs.MDStat

    static name: string
}

export interface Mke2fsClass {

    // Own fields of Guestfs-1.0.Guestfs.Mke2fsClass

    /**
     * The superclass of GuestfsMke2fsClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsMke2fs.
 * @record 
 */
export abstract class Mke2fsClass {

    // Own properties of Guestfs-1.0.Guestfs.Mke2fsClass

    static name: string
}

export interface Mke2fsPrivate {
}

export class Mke2fsPrivate {

    // Own properties of Guestfs-1.0.Guestfs.Mke2fsPrivate

    static name: string
}

export interface MkfsBtrfsClass {

    // Own fields of Guestfs-1.0.Guestfs.MkfsBtrfsClass

    /**
     * The superclass of GuestfsMkfsBtrfsClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsMkfsBtrfs.
 * @record 
 */
export abstract class MkfsBtrfsClass {

    // Own properties of Guestfs-1.0.Guestfs.MkfsBtrfsClass

    static name: string
}

export interface MkfsBtrfsPrivate {
}

export class MkfsBtrfsPrivate {

    // Own properties of Guestfs-1.0.Guestfs.MkfsBtrfsPrivate

    static name: string
}

export interface MkfsClass {

    // Own fields of Guestfs-1.0.Guestfs.MkfsClass

    /**
     * The superclass of GuestfsMkfsClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsMkfs.
 * @record 
 */
export abstract class MkfsClass {

    // Own properties of Guestfs-1.0.Guestfs.MkfsClass

    static name: string
}

export interface MkfsPrivate {
}

export class MkfsPrivate {

    // Own properties of Guestfs-1.0.Guestfs.MkfsPrivate

    static name: string
}

export interface MksquashfsClass {

    // Own fields of Guestfs-1.0.Guestfs.MksquashfsClass

    /**
     * The superclass of GuestfsMksquashfsClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsMksquashfs.
 * @record 
 */
export abstract class MksquashfsClass {

    // Own properties of Guestfs-1.0.Guestfs.MksquashfsClass

    static name: string
}

export interface MksquashfsPrivate {
}

export class MksquashfsPrivate {

    // Own properties of Guestfs-1.0.Guestfs.MksquashfsPrivate

    static name: string
}

export interface MkswapClass {

    // Own fields of Guestfs-1.0.Guestfs.MkswapClass

    /**
     * The superclass of GuestfsMkswapClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsMkswap.
 * @record 
 */
export abstract class MkswapClass {

    // Own properties of Guestfs-1.0.Guestfs.MkswapClass

    static name: string
}

export interface MkswapPrivate {
}

export class MkswapPrivate {

    // Own properties of Guestfs-1.0.Guestfs.MkswapPrivate

    static name: string
}

export interface MktempClass {

    // Own fields of Guestfs-1.0.Guestfs.MktempClass

    /**
     * The superclass of GuestfsMktempClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsMktemp.
 * @record 
 */
export abstract class MktempClass {

    // Own properties of Guestfs-1.0.Guestfs.MktempClass

    static name: string
}

export interface MktempPrivate {
}

export class MktempPrivate {

    // Own properties of Guestfs-1.0.Guestfs.MktempPrivate

    static name: string
}

export interface Mount9PClass {

    // Own fields of Guestfs-1.0.Guestfs.Mount9PClass

    /**
     * The superclass of GuestfsMount9PClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsMount9P.
 * @record 
 */
export abstract class Mount9PClass {

    // Own properties of Guestfs-1.0.Guestfs.Mount9PClass

    static name: string
}

export interface Mount9PPrivate {
}

export class Mount9PPrivate {

    // Own properties of Guestfs-1.0.Guestfs.Mount9PPrivate

    static name: string
}

export interface MountLocalClass {

    // Own fields of Guestfs-1.0.Guestfs.MountLocalClass

    /**
     * The superclass of GuestfsMountLocalClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsMountLocal.
 * @record 
 */
export abstract class MountLocalClass {

    // Own properties of Guestfs-1.0.Guestfs.MountLocalClass

    static name: string
}

export interface MountLocalPrivate {
}

export class MountLocalPrivate {

    // Own properties of Guestfs-1.0.Guestfs.MountLocalPrivate

    static name: string
}

export interface NTFSResizeOptsClass {

    // Own fields of Guestfs-1.0.Guestfs.NTFSResizeOptsClass

    /**
     * The superclass of GuestfsNTFSResizeOptsClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsNTFSResizeOpts.
 * @record 
 */
export abstract class NTFSResizeOptsClass {

    // Own properties of Guestfs-1.0.Guestfs.NTFSResizeOptsClass

    static name: string
}

export interface NTFSResizeOptsPrivate {
}

export class NTFSResizeOptsPrivate {

    // Own properties of Guestfs-1.0.Guestfs.NTFSResizeOptsPrivate

    static name: string
}

export interface NtfscloneOutClass {

    // Own fields of Guestfs-1.0.Guestfs.NtfscloneOutClass

    /**
     * The superclass of GuestfsNtfscloneOutClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsNtfscloneOut.
 * @record 
 */
export abstract class NtfscloneOutClass {

    // Own properties of Guestfs-1.0.Guestfs.NtfscloneOutClass

    static name: string
}

export interface NtfscloneOutPrivate {
}

export class NtfscloneOutPrivate {

    // Own properties of Guestfs-1.0.Guestfs.NtfscloneOutPrivate

    static name: string
}

export interface NtfsfixClass {

    // Own fields of Guestfs-1.0.Guestfs.NtfsfixClass

    /**
     * The superclass of GuestfsNtfsfixClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsNtfsfix.
 * @record 
 */
export abstract class NtfsfixClass {

    // Own properties of Guestfs-1.0.Guestfs.NtfsfixClass

    static name: string
}

export interface NtfsfixPrivate {
}

export class NtfsfixPrivate {

    // Own properties of Guestfs-1.0.Guestfs.NtfsfixPrivate

    static name: string
}

export interface PV {

    // Own fields of Guestfs-1.0.Guestfs.PV

    /**
     * A NULL-terminated string
     * @field 
     */
    pv_name: string | null
    /**
     * A 32 byte UUID. Note that this is not NULL-terminated
     * @field 
     */
    pv_uuid: number[]
    /**
     * A NULL-terminated string
     * @field 
     */
    pv_fmt: string | null
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    pv_size: number
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    dev_size: number
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    pv_free: number
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    pv_used: number
    /**
     * A NULL-terminated string
     * @field 
     */
    pv_attr: string | null
    /**
     * A signed 64-bit integer
     * @field 
     */
    pv_pe_count: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    pv_pe_alloc_count: number
    /**
     * A NULL-terminated string
     * @field 
     */
    pv_tags: string | null
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    pe_start: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    pv_mda_count: number
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    pv_mda_free: number
}

export class PV {

    // Own properties of Guestfs-1.0.Guestfs.PV

    static name: string
}

export interface Partition {

    // Own fields of Guestfs-1.0.Guestfs.Partition

    /**
     * A signed 32-bit integer
     * @field 
     */
    part_num: number
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    part_start: number
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    part_end: number
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    part_size: number
}

export class Partition {

    // Own properties of Guestfs-1.0.Guestfs.Partition

    static name: string
}

export interface RemountClass {

    // Own fields of Guestfs-1.0.Guestfs.RemountClass

    /**
     * The superclass of GuestfsRemountClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsRemount.
 * @record 
 */
export abstract class RemountClass {

    // Own properties of Guestfs-1.0.Guestfs.RemountClass

    static name: string
}

export interface RemountPrivate {
}

export class RemountPrivate {

    // Own properties of Guestfs-1.0.Guestfs.RemountPrivate

    static name: string
}

export interface RsyncClass {

    // Own fields of Guestfs-1.0.Guestfs.RsyncClass

    /**
     * The superclass of GuestfsRsyncClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsRsync.
 * @record 
 */
export abstract class RsyncClass {

    // Own properties of Guestfs-1.0.Guestfs.RsyncClass

    static name: string
}

export interface RsyncInClass {

    // Own fields of Guestfs-1.0.Guestfs.RsyncInClass

    /**
     * The superclass of GuestfsRsyncInClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsRsyncIn.
 * @record 
 */
export abstract class RsyncInClass {

    // Own properties of Guestfs-1.0.Guestfs.RsyncInClass

    static name: string
}

export interface RsyncInPrivate {
}

export class RsyncInPrivate {

    // Own properties of Guestfs-1.0.Guestfs.RsyncInPrivate

    static name: string
}

export interface RsyncOutClass {

    // Own fields of Guestfs-1.0.Guestfs.RsyncOutClass

    /**
     * The superclass of GuestfsRsyncOutClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsRsyncOut.
 * @record 
 */
export abstract class RsyncOutClass {

    // Own properties of Guestfs-1.0.Guestfs.RsyncOutClass

    static name: string
}

export interface RsyncOutPrivate {
}

export class RsyncOutPrivate {

    // Own properties of Guestfs-1.0.Guestfs.RsyncOutPrivate

    static name: string
}

export interface RsyncPrivate {
}

export class RsyncPrivate {

    // Own properties of Guestfs-1.0.Guestfs.RsyncPrivate

    static name: string
}

export interface SelinuxRelabelClass {

    // Own fields of Guestfs-1.0.Guestfs.SelinuxRelabelClass

    /**
     * The superclass of GuestfsSelinuxRelabelClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsSelinuxRelabel.
 * @record 
 */
export abstract class SelinuxRelabelClass {

    // Own properties of Guestfs-1.0.Guestfs.SelinuxRelabelClass

    static name: string
}

export interface SelinuxRelabelPrivate {
}

export class SelinuxRelabelPrivate {

    // Own properties of Guestfs-1.0.Guestfs.SelinuxRelabelPrivate

    static name: string
}

export interface SessionClass {

    // Own fields of Guestfs-1.0.Guestfs.SessionClass

    /**
     * The superclass of GuestfsSession
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsSession.
 * @record 
 */
export abstract class SessionClass {

    // Own properties of Guestfs-1.0.Guestfs.SessionClass

    static name: string
}

export interface SessionEventParams {

    // Own fields of Guestfs-1.0.Guestfs.SessionEventParams

    /**
     * The event
     * @field 
     */
    event: SessionEvent
    /**
     * Unused
     * @field 
     */
    flags: number
    /**
     * A message buffer. This buffer can contain arbitrary 8 bit data,
     *       including NUL bytes
     * @field 
     */
    buf: Uint8Array
    /**
     * An array of 64-bit unsigned integers
     * @field 
     */
    array: number[]
    /**
     * The length of `array`
     * @field 
     */
    array_len: number
}

export class SessionEventParams {

    // Own properties of Guestfs-1.0.Guestfs.SessionEventParams

    static name: string
}

export interface SessionPrivate {
}

export class SessionPrivate {

    // Own properties of Guestfs-1.0.Guestfs.SessionPrivate

    static name: string
}

export interface SetE2attrsClass {

    // Own fields of Guestfs-1.0.Guestfs.SetE2attrsClass

    /**
     * The superclass of GuestfsSetE2attrsClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsSetE2attrs.
 * @record 
 */
export abstract class SetE2attrsClass {

    // Own properties of Guestfs-1.0.Guestfs.SetE2attrsClass

    static name: string
}

export interface SetE2attrsPrivate {
}

export class SetE2attrsPrivate {

    // Own properties of Guestfs-1.0.Guestfs.SetE2attrsPrivate

    static name: string
}

export interface Stat {

    // Own fields of Guestfs-1.0.Guestfs.Stat

    /**
     * A signed 64-bit integer
     * @field 
     */
    dev: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    ino: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    mode: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    nlink: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    uid: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    gid: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    rdev: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    size: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    blksize: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    blocks: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    atime: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    mtime: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    ctime: number
}

export class Stat {

    // Own properties of Guestfs-1.0.Guestfs.Stat

    static name: string
}

export interface StatNS {

    // Own fields of Guestfs-1.0.Guestfs.StatNS

    /**
     * A signed 64-bit integer
     * @field 
     */
    st_dev: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    st_ino: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    st_mode: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    st_nlink: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    st_uid: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    st_gid: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    st_rdev: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    st_size: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    st_blksize: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    st_blocks: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    st_atime_sec: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    st_atime_nsec: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    st_mtime_sec: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    st_mtime_nsec: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    st_ctime_sec: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    st_ctime_nsec: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    st_spare1: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    st_spare2: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    st_spare3: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    st_spare4: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    st_spare5: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    st_spare6: number
}

export class StatNS {

    // Own properties of Guestfs-1.0.Guestfs.StatNS

    static name: string
}

export interface StatVFS {

    // Own fields of Guestfs-1.0.Guestfs.StatVFS

    /**
     * A signed 64-bit integer
     * @field 
     */
    bsize: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    frsize: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    blocks: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    bfree: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    bavail: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    files: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    ffree: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    favail: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    fsid: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    flag: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    namemax: number
}

export class StatVFS {

    // Own properties of Guestfs-1.0.Guestfs.StatVFS

    static name: string
}

export interface SyslinuxClass {

    // Own fields of Guestfs-1.0.Guestfs.SyslinuxClass

    /**
     * The superclass of GuestfsSyslinuxClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsSyslinux.
 * @record 
 */
export abstract class SyslinuxClass {

    // Own properties of Guestfs-1.0.Guestfs.SyslinuxClass

    static name: string
}

export interface SyslinuxPrivate {
}

export class SyslinuxPrivate {

    // Own properties of Guestfs-1.0.Guestfs.SyslinuxPrivate

    static name: string
}

export interface TSKDirent {

    // Own fields of Guestfs-1.0.Guestfs.TSKDirent

    /**
     * An unsigned 64-bit integer
     * @field 
     */
    tsk_inode: number
    /**
     * A character
     * @field 
     */
    tsk_type: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    tsk_size: number
    /**
     * A NULL-terminated string
     * @field 
     */
    tsk_name: string | null
    /**
     * An unsigned 32-bit integer
     * @field 
     */
    tsk_flags: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    tsk_atime_sec: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    tsk_atime_nsec: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    tsk_mtime_sec: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    tsk_mtime_nsec: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    tsk_ctime_sec: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    tsk_ctime_nsec: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    tsk_crtime_sec: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    tsk_crtime_nsec: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    tsk_nlink: number
    /**
     * A NULL-terminated string
     * @field 
     */
    tsk_link: string | null
    /**
     * A signed 64-bit integer
     * @field 
     */
    tsk_spare1: number
}

export class TSKDirent {

    // Own properties of Guestfs-1.0.Guestfs.TSKDirent

    static name: string
}

export interface TarInClass {

    // Own fields of Guestfs-1.0.Guestfs.TarInClass

    /**
     * The superclass of GuestfsTarInClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsTarIn.
 * @record 
 */
export abstract class TarInClass {

    // Own properties of Guestfs-1.0.Guestfs.TarInClass

    static name: string
}

export interface TarInPrivate {
}

export class TarInPrivate {

    // Own properties of Guestfs-1.0.Guestfs.TarInPrivate

    static name: string
}

export interface TarOutClass {

    // Own fields of Guestfs-1.0.Guestfs.TarOutClass

    /**
     * The superclass of GuestfsTarOutClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsTarOut.
 * @record 
 */
export abstract class TarOutClass {

    // Own properties of Guestfs-1.0.Guestfs.TarOutClass

    static name: string
}

export interface TarOutPrivate {
}

export class TarOutPrivate {

    // Own properties of Guestfs-1.0.Guestfs.TarOutPrivate

    static name: string
}

export interface Tune2FSClass {

    // Own fields of Guestfs-1.0.Guestfs.Tune2FSClass

    /**
     * The superclass of GuestfsTune2FSClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsTune2FS.
 * @record 
 */
export abstract class Tune2FSClass {

    // Own properties of Guestfs-1.0.Guestfs.Tune2FSClass

    static name: string
}

export interface Tune2FSPrivate {
}

export class Tune2FSPrivate {

    // Own properties of Guestfs-1.0.Guestfs.Tune2FSPrivate

    static name: string
}

export interface UTSName {

    // Own fields of Guestfs-1.0.Guestfs.UTSName

    /**
     * A NULL-terminated string
     * @field 
     */
    uts_sysname: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    uts_release: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    uts_version: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    uts_machine: string | null
}

export class UTSName {

    // Own properties of Guestfs-1.0.Guestfs.UTSName

    static name: string
}

export interface UmountClass {

    // Own fields of Guestfs-1.0.Guestfs.UmountClass

    /**
     * The superclass of GuestfsUmountClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsUmount.
 * @record 
 */
export abstract class UmountClass {

    // Own properties of Guestfs-1.0.Guestfs.UmountClass

    static name: string
}

export interface UmountLocalClass {

    // Own fields of Guestfs-1.0.Guestfs.UmountLocalClass

    /**
     * The superclass of GuestfsUmountLocalClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsUmountLocal.
 * @record 
 */
export abstract class UmountLocalClass {

    // Own properties of Guestfs-1.0.Guestfs.UmountLocalClass

    static name: string
}

export interface UmountLocalPrivate {
}

export class UmountLocalPrivate {

    // Own properties of Guestfs-1.0.Guestfs.UmountLocalPrivate

    static name: string
}

export interface UmountPrivate {
}

export class UmountPrivate {

    // Own properties of Guestfs-1.0.Guestfs.UmountPrivate

    static name: string
}

export interface VG {

    // Own fields of Guestfs-1.0.Guestfs.VG

    /**
     * A NULL-terminated string
     * @field 
     */
    vg_name: string | null
    /**
     * A 32 byte UUID. Note that this is not NULL-terminated
     * @field 
     */
    vg_uuid: number[]
    /**
     * A NULL-terminated string
     * @field 
     */
    vg_fmt: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    vg_attr: string | null
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    vg_size: number
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    vg_free: number
    /**
     * A NULL-terminated string
     * @field 
     */
    vg_sysid: string | null
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    vg_extent_size: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    vg_extent_count: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    vg_free_count: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    max_lv: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    max_pv: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    pv_count: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    lv_count: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    snap_count: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    vg_seqno: number
    /**
     * A NULL-terminated string
     * @field 
     */
    vg_tags: string | null
    /**
     * A signed 64-bit integer
     * @field 
     */
    vg_mda_count: number
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    vg_mda_free: number
}

export class VG {

    // Own properties of Guestfs-1.0.Guestfs.VG

    static name: string
}

export interface Version {

    // Own fields of Guestfs-1.0.Guestfs.Version

    /**
     * A signed 64-bit integer
     * @field 
     */
    major: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    minor: number
    /**
     * A signed 64-bit integer
     * @field 
     */
    release: number
    /**
     * A NULL-terminated string
     * @field 
     */
    extra: string | null
}

export class Version {

    // Own properties of Guestfs-1.0.Guestfs.Version

    static name: string
}

export interface XAttr {

    // Own fields of Guestfs-1.0.Guestfs.XAttr

    /**
     * A NULL-terminated string
     * @field 
     */
    attrname: string | null
    /**
     * A GByteArray
     * @field 
     */
    attrval: Uint8Array
}

export class XAttr {

    // Own properties of Guestfs-1.0.Guestfs.XAttr

    static name: string
}

export interface XFSInfo {

    // Own fields of Guestfs-1.0.Guestfs.XFSInfo

    /**
     * A NULL-terminated string
     * @field 
     */
    xfs_mntpoint: string | null
    /**
     * An unsigned 32-bit integer
     * @field 
     */
    xfs_inodesize: number
    /**
     * An unsigned 32-bit integer
     * @field 
     */
    xfs_agcount: number
    /**
     * An unsigned 32-bit integer
     * @field 
     */
    xfs_agsize: number
    /**
     * An unsigned 32-bit integer
     * @field 
     */
    xfs_sectsize: number
    /**
     * An unsigned 32-bit integer
     * @field 
     */
    xfs_attr: number
    /**
     * An unsigned 32-bit integer
     * @field 
     */
    xfs_blocksize: number
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    xfs_datablocks: number
    /**
     * An unsigned 32-bit integer
     * @field 
     */
    xfs_imaxpct: number
    /**
     * An unsigned 32-bit integer
     * @field 
     */
    xfs_sunit: number
    /**
     * An unsigned 32-bit integer
     * @field 
     */
    xfs_swidth: number
    /**
     * An unsigned 32-bit integer
     * @field 
     */
    xfs_dirversion: number
    /**
     * An unsigned 32-bit integer
     * @field 
     */
    xfs_dirblocksize: number
    /**
     * An unsigned 32-bit integer
     * @field 
     */
    xfs_cimode: number
    /**
     * A NULL-terminated string
     * @field 
     */
    xfs_logname: string | null
    /**
     * An unsigned 32-bit integer
     * @field 
     */
    xfs_logblocksize: number
    /**
     * An unsigned 32-bit integer
     * @field 
     */
    xfs_logblocks: number
    /**
     * An unsigned 32-bit integer
     * @field 
     */
    xfs_logversion: number
    /**
     * An unsigned 32-bit integer
     * @field 
     */
    xfs_logsectsize: number
    /**
     * An unsigned 32-bit integer
     * @field 
     */
    xfs_logsunit: number
    /**
     * An unsigned 32-bit integer
     * @field 
     */
    xfs_lazycount: number
    /**
     * A NULL-terminated string
     * @field 
     */
    xfs_rtname: string | null
    /**
     * An unsigned 32-bit integer
     * @field 
     */
    xfs_rtextsize: number
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    xfs_rtblocks: number
    /**
     * An unsigned 64-bit integer
     * @field 
     */
    xfs_rtextents: number
}

export class XFSInfo {

    // Own properties of Guestfs-1.0.Guestfs.XFSInfo

    static name: string
}

export interface XfsAdminClass {

    // Own fields of Guestfs-1.0.Guestfs.XfsAdminClass

    /**
     * The superclass of GuestfsXfsAdminClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsXfsAdmin.
 * @record 
 */
export abstract class XfsAdminClass {

    // Own properties of Guestfs-1.0.Guestfs.XfsAdminClass

    static name: string
}

export interface XfsAdminPrivate {
}

export class XfsAdminPrivate {

    // Own properties of Guestfs-1.0.Guestfs.XfsAdminPrivate

    static name: string
}

export interface XfsGrowfsClass {

    // Own fields of Guestfs-1.0.Guestfs.XfsGrowfsClass

    /**
     * The superclass of GuestfsXfsGrowfsClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsXfsGrowfs.
 * @record 
 */
export abstract class XfsGrowfsClass {

    // Own properties of Guestfs-1.0.Guestfs.XfsGrowfsClass

    static name: string
}

export interface XfsGrowfsPrivate {
}

export class XfsGrowfsPrivate {

    // Own properties of Guestfs-1.0.Guestfs.XfsGrowfsPrivate

    static name: string
}

export interface XfsRepairClass {

    // Own fields of Guestfs-1.0.Guestfs.XfsRepairClass

    /**
     * The superclass of GuestfsXfsRepairClass
     * @field 
     */
    parent_class: GObject.ObjectClass
}

/**
 * A class metadata object for GuestfsXfsRepair.
 * @record 
 */
export abstract class XfsRepairClass {

    // Own properties of Guestfs-1.0.Guestfs.XfsRepairClass

    static name: string
}

export interface XfsRepairPrivate {
}

export class XfsRepairPrivate {

    // Own properties of Guestfs-1.0.Guestfs.XfsRepairPrivate

    static name: string
}

export interface YaraDetection {

    // Own fields of Guestfs-1.0.Guestfs.YaraDetection

    /**
     * A NULL-terminated string
     * @field 
     */
    yara_name: string | null
    /**
     * A NULL-terminated string
     * @field 
     */
    yara_rule: string | null
}

export class YaraDetection {

    // Own properties of Guestfs-1.0.Guestfs.YaraDetection

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END