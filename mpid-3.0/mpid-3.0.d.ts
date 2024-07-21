/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace MPID {
    /**
     * MPID-3.0
     */

    export namespace Error {
        export const $gtype: GObject.GType<Error>;
    }

    enum Error {
        /**
         * Indicates no error has occurred
         */
        OK,
        /**
         * Unable to find the device path
         */
        NO_SUCH_DEVICE,
        /**
         * The device detection mechanism (e.g. udev) failed
         */
        DEVICE_DB_FAILED,
        /**
         * The device is not a media player
         */
        NOT_MEDIA_PLAYER,
        /**
         * The device detection mechanism identified the device
         *   but was unable to locate its device information
         */
        DEVICE_INFO_MISSING,
    }
    export namespace Source {
        export const $gtype: GObject.GType<Source>;
    }

    enum Source {
        /**
         * No device information is available
         */
        NONE,
        /**
         * Device information provided by the operating system (e.g. udev)
         */
        SYSTEM,
        /**
         * Device information provided by an override file on the device itself.
         */
        OVERRIDE,
    }
    export namespace SourceType {
        export const $gtype: GObject.GType<SourceType>;
    }

    enum SourceType {
        NO_DEVICE_INFO,
        SYSTEM_DEVICE_INFO,
        OVERRIDE_DEVICE_INFO,
    }
    const PROTOCOL_GENERIC: string;
    const PROTOCOL_IPOD: string;
    /**
     * Enables or disables debug output from the MPID library
     * @param debug whether to enable debug output
     */
    function enable_debug(debug: boolean): void;
    module Device {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            access_protocols: string[];
            accessProtocols: string[];
            audio_folders: string[];
            audioFolders: string[];
            drive_type: string;
            driveType: string;
            error: Error;
            folder_depth: number;
            folderDepth: number;
            fs_uuid: string;
            fsUuid: string;
            input_formats: string[];
            inputFormats: string[];
            input_path: string;
            inputPath: string;
            model: string;
            mpi_file: string;
            mpiFile: string;
            output_formats: string[];
            outputFormats: string[];
            playlist_formats: string[];
            playlistFormats: string[];
            playlist_path: string;
            playlistPath: string;
            requires_eject: boolean;
            requiresEject: boolean;
            serial: string;
            source: SourceType;
            vendor: string;
        }
    }

    /**
     * An #MPIDDevice stores a set of information for a particular attached device,
     * identified by either a mount point (e.g. /media/device) or a device node
     * (e.g. /dev/sdb).
     */
    class Device extends GObject.Object {
        static $gtype: GObject.GType<Device>;

        // Own properties of MPID.Device

        /**
         * Names of access protocols that can be used to access the device contents
         */
        get access_protocols(): string[];
        /**
         * Names of access protocols that can be used to access the device contents
         */
        get accessProtocols(): string[];
        /**
         * A set of folders (relative to the root of the device) containing audio
         * folders.
         */
        get audio_folders(): string[];
        /**
         * A set of folders (relative to the root of the device) containing audio
         * folders.
         */
        get audioFolders(): string[];
        /**
         * The device drive type
         */
        get drive_type(): string;
        /**
         * The device drive type
         */
        get driveType(): string;
        /**
         * MPID error code resulting from device detection (see #MPIDError)
         */
        get error(): Error;
        /**
         * The folder nesting level supported by the device.  -1 indicates there is no limit.
         */
        get folder_depth(): number;
        /**
         * The folder nesting level supported by the device.  -1 indicates there is no limit.
         */
        get folderDepth(): number;
        /**
         * The device filesystem UUID
         */
        get fs_uuid(): string;
        /**
         * The device filesystem UUID
         */
        get fsUuid(): string;
        /**
         * A set of MIME types that the device can record
         */
        get input_formats(): string[];
        /**
         * A set of MIME types that the device can record
         */
        get inputFormats(): string[];
        /**
         * Either the device node path or the mount point path for the device.
         */
        get input_path(): string;
        /**
         * Either the device node path or the mount point path for the device.
         */
        get inputPath(): string;
        /**
         * The device model name
         */
        get model(): string;
        /**
         * Path to a .mpi file describing the device
         */
        get mpi_file(): string;
        /**
         * Path to a .mpi file describing the device
         */
        get mpiFile(): string;
        /**
         * A set of MIME types that the device can play
         */
        get output_formats(): string[];
        /**
         * A set of MIME types that the device can play
         */
        get outputFormats(): string[];
        /**
         * A set of playlist format MIME types suppored by the device
         */
        get playlist_formats(): string[];
        /**
         * A set of playlist format MIME types suppored by the device
         */
        get playlistFormats(): string[];
        /**
         * Path to playlist files on the device.  May include '%File' to indicate a directory
         * containing any number of playlist files.
         */
        get playlist_path(): string;
        /**
         * Path to playlist files on the device.  May include '%File' to indicate a directory
         * containing any number of playlist files.
         */
        get playlistPath(): string;
        /**
         * If %TRUE, the device must be ejected rather than unmounted
         */
        get requires_eject(): boolean;
        /**
         * If %TRUE, the device must be ejected rather than unmounted
         */
        get requiresEject(): boolean;
        /**
         * The device serial ID
         */
        get serial(): string;
        /**
         * The information source used to provide device information (see #MPIDSource)
         */
        get source(): SourceType;
        /**
         * The device vendor name
         */
        get vendor(): string;

        // Constructors of MPID.Device

        constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](path: string): Device;

        static new_from_mpi_file(path: string): Device;
    }

    type DeviceClass = typeof Device;
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

export default MPID;

// END
