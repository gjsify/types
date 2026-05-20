
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
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GUsb from '@girs/gusb-1.0';
import type Json from '@girs/json-1.0';

export namespace FPrint {

    /**
     * FPrint-2.0
     */


    /**
     * Error codes for device operations. More specific errors from other domains
     * such as #G_IO_ERROR or #G_USB_DEVICE_ERROR may also be reported.
     * @gir-type Struct
     */
    class DeviceError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        /**
         * A general error occurred.
         */
        static GENERAL: number;

        /**
         * The device does not support the requested
         *  operation.
         */
        static NOT_SUPPORTED: number;

        /**
         * The device needs to be opened to start this
         *   operation.
         */
        static NOT_OPEN: number;

        /**
         * The device has already been opened.
         */
        static ALREADY_OPEN: number;

        /**
         * The device is busy with another request.
         */
        static BUSY: number;

        /**
         * Protocol error
         */
        static PROTO: number;

        /**
         * The passed data is invalid
         */
        static DATA_INVALID: number;

        /**
         * Requested print was not found on device
         */
        static DATA_NOT_FOUND: number;

        /**
         * No space on device available for operation
         */
        static DATA_FULL: number;

        /**
         * Enrolling template duplicates storaged templates
         */
        static DATA_DUPLICATE: number;

        /**
         * The device has been removed.
         */
        static REMOVED: number;

        /**
         * The device might be getting too hot
         */
        static TOO_HOT: number;

        // Constructors
        constructor(options: { message: string; code: number });

        // Static methods
        static quark(): GLib.Quark;
    }


    /**
     * @gir-type Enum
     */
    export namespace DeviceRetry {
        export const $gtype: GObject.GType<DeviceRetry>;
    }

    /**
     * Error codes representing scan failures resulting in the user needing to
     * retry.
     * @gir-type Enum
     */
    enum DeviceRetry {
        /**
         * The scan did not succeed due to poor scan quality
         *   or other general user scanning problem.
         */
        GENERAL,
        /**
         * The scan did not succeed because the finger
         *   swipe was too short.
         */
        TOO_SHORT,
        /**
         * The scan did not succeed because the finger
         *   was not centered on the scanner.
         */
        CENTER_FINGER,
        /**
         * The scan did not succeed due to quality or
         *   pressure problems; the user should remove their finger from the scanner
         *   before retrying.
         */
        REMOVE_FINGER,
        /**
         * The scan did not succeed because the finger
         *   swipe or touch was too fast.
         */
        TOO_FAST,
    }


    /**
     * @gir-type Enum
     */
    export namespace DeviceType {
        export const $gtype: GObject.GType<DeviceType>;
    }

    /**
     * @gir-type Enum
     */
    enum DeviceType {
        /**
         * The device is a virtual device
         */
        VIRTUAL,
        /**
         * The device is a udev device
         */
        UDEV,
        /**
         * The device is a USB device
         */
        USB,
    }


    /**
     * @gir-type Enum
     */
    export namespace Finger {
        export const $gtype: GObject.GType<Finger>;
    }

    /**
     * @gir-type Enum
     */
    enum Finger {
        /**
         * The finger is unknown
         */
        UNKNOWN,
        /**
         * Left thumb
         */
        LEFT_THUMB,
        /**
         * Left index finger
         */
        LEFT_INDEX,
        /**
         * Left middle finger
         */
        LEFT_MIDDLE,
        /**
         * Left ring finger
         */
        LEFT_RING,
        /**
         * Left little finger
         */
        LEFT_LITTLE,
        /**
         * Right thumb
         */
        RIGHT_THUMB,
        /**
         * Right index finger
         */
        RIGHT_INDEX,
        /**
         * Right middle finger
         */
        RIGHT_MIDDLE,
        /**
         * Right ring finger
         */
        RIGHT_RING,
        /**
         * Right little finger
         */
        RIGHT_LITTLE,
        /**
         * The first finger in the fp-print order
         */
        FIRST,
        /**
         * The last finger in the fp-print order
         */
        LAST,
    }


    /**
     * @gir-type Enum
     */
    export namespace ScanType {
        export const $gtype: GObject.GType<ScanType>;
    }

    /**
     * @gir-type Enum
     */
    enum ScanType {
        /**
         * Sensor requires swiping the finger.
         */
        SWIPE,
        /**
         * Sensor requires placing/pressing down the finger.
         */
        PRESS,
    }


    /**
     * @gir-type Enum
     */
    export namespace Temperature {
        export const $gtype: GObject.GType<Temperature>;
    }

    /**
     * When a device is created, it is assumed to be cold. Applications such as
     * fprintd may want to ensure all devices on the system are cold before
     * shutting down in order to ensure that the cool-off period is not violated
     * because the internal libfprint state about the device is lost.
     * @gir-type Enum
     */
    enum Temperature {
        /**
         * Sensor is considered cold.
         */
        COLD,
        /**
         * Sensor is warm, usage time may be limited.
         */
        WARM,
        /**
         * Sensor is hot and cannot be used.
         */
        HOT,
    }


    /**
     * @returns Quark representing a device error.
     */
    function device_error_quark(): GLib.Quark;

    /**
     * @returns Quark representing a retryable error.
     */
    function device_retry_quark(): GLib.Quark;

    /**
     * @gir-type Callback
     */
    interface EnrollProgress {
        (device: Device, completed_stages: number, print: Print | null, error: GLib.Error | null): void;
    }

    /**
     * @gir-type Callback
     */
    interface MatchCb {
        (device: Device, match: Print | null, print: Print | null, error: GLib.Error | null): void;
    }

    /**
     * @gir-type Flags
     */
    export namespace DeviceFeature {
        export const $gtype: GObject.GType<DeviceFeature>;
    }

    /**
     * @gir-type Flags
     */
    enum DeviceFeature {
        /**
         * Device does not support any feature
         */
        NONE,
        /**
         * Supports image capture
         */
        CAPTURE,
        /**
         * Supports finger identification
         */
        IDENTIFY,
        /**
         * Supports finger verification
         */
        VERIFY,
        /**
         * Device has a persistent storage
         */
        STORAGE,
        /**
         * Supports listing the storage templates
         */
        STORAGE_LIST,
        /**
         * Supports deleting stored templates
         */
        STORAGE_DELETE,
        /**
         * Supports clearing the whole storage
         */
        STORAGE_CLEAR,
        /**
         * Natively supports duplicates detection
         */
        DUPLICATES_CHECK,
        /**
         * Whether the device can run continuously
         */
        ALWAYS_ON,
        /**
         * Supports updating an existing print record using new scans
         */
        UPDATE_PRINT,
    }


    /**
     * @gir-type Flags
     */
    export namespace FingerStatusFlags {
        export const $gtype: GObject.GType<FingerStatusFlags>;
    }

    /**
     * @gir-type Flags
     */
    enum FingerStatusFlags {
        /**
         * Sensor has not the finger on it, nor requires it
         */
        NONE,
        /**
         * Sensor waits for the finger
         */
        NEEDED,
        /**
         * Sensor has the finger on it
         */
        PRESENT,
    }


    namespace Context {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * This signal is emitted when a fingerprint reader is added.
             * @signal
             * @run-last
             */
            "device-added": (arg0: Device) => void;
            /**
             * This signal is emitted when a fingerprint reader is removed.
             * 
             * It is guaranteed that the device has been closed before this signal
             * is emitted. See the {@link FPrint.Device} removed signal documentation for more
             * information.
             * @signal
             * @run-last
             */
            "device-removed": (arg0: Device) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Context extends GObject.Object {
        static $gtype: GObject.GType<Context>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Context.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Context.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Context;

        // Signals
        /** @signal */
        connect<K extends keyof Context.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Context.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Context.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Context.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Context.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Context.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * Called when a new device is added
         * @param device 
         * @virtual
         */
        vfunc_device_added(device: Device): void;

        /**
         * Called when a device is removed
         * @param device 
         * @virtual
         */
        vfunc_device_removed(device: Device): void;

        // Methods
        /**
         * Enumerate all devices. You should call this function exactly once
         * at startup. Please note that it iterates the mainloop until all
         * devices are enumerated.
         */
        enumerate(): void;

        /**
         * Get all devices. `fp_context_enumerate()` will be called as needed.
         * @returns a new {@link GLib.PtrArray} of {@link FPrint.Device}'s.
         */
        get_devices(): Device[];
    }


    namespace Device {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * This signal is emitted after the device has been removed and no operation
             * is pending anymore.
             * 
             * The API user is still required to close a removed device. The above
             * guarantee means that the call to close the device can be made immediately
             * from the signal handler.
             * 
             * The close operation will return FP_DEVICE_ERROR_REMOVED, but the device
             * will still be considered closed afterwards.
             * 
             * The device will only be removed from the {@link FPrint.Context} after it has been
             * closed by the API user.
             * @signal
             * @run-last
             */
            removed: () => void;
            "notify::device-id": (pspec: GObject.ParamSpec) => void;
            "notify::driver": (pspec: GObject.ParamSpec) => void;
            "notify::finger-status": (pspec: GObject.ParamSpec) => void;
            "notify::fpi-driver-data": (pspec: GObject.ParamSpec) => void;
            "notify::fpi-environ": (pspec: GObject.ParamSpec) => void;
            "notify::fpi-udev-data-hidraw": (pspec: GObject.ParamSpec) => void;
            "notify::fpi-udev-data-spidev": (pspec: GObject.ParamSpec) => void;
            "notify::fpi-usb-device": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::nr-enroll-stages": (pspec: GObject.ParamSpec) => void;
            "notify::open": (pspec: GObject.ParamSpec) => void;
            "notify::removed": (pspec: GObject.ParamSpec) => void;
            "notify::scan-type": (pspec: GObject.ParamSpec) => void;
            "notify::temperature": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.AsyncInitable.ConstructorProps {
            device_id: string;
            deviceId: string;
            driver: string;
            finger_status: FingerStatusFlags;
            fingerStatus: FingerStatusFlags;
            fpi_driver_data: bigint | number;
            fpiDriverData: bigint | number;
            fpi_environ: string;
            fpiEnviron: string;
            fpi_udev_data_hidraw: string;
            fpiUdevDataHidraw: string;
            fpi_udev_data_spidev: string;
            fpiUdevDataSpidev: string;
            fpi_usb_device: GUsb.Device;
            fpiUsbDevice: GUsb.Device;
            name: string;
            nr_enroll_stages: number;
            nrEnrollStages: number;
            open: boolean;
            removed: boolean;
            scan_type: ScanType;
            scanType: ScanType;
            temperature: Temperature;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class Device extends GObject.Object implements Gio.AsyncInitable<Device> {
        static $gtype: GObject.GType<Device>;

        // Properties
        /**
         * @read-only
         */
        get device_id(): string;

        /**
         * @read-only
         */
        get deviceId(): string;

        /**
         * @read-only
         * @default null
         */
        get driver(): string;

        /**
         * @read-only
         * @default FPrint.FingerStatusFlags.NONE
         */
        get finger_status(): FingerStatusFlags;

        /**
         * @read-only
         * @default FPrint.FingerStatusFlags.NONE
         */
        get fingerStatus(): FingerStatusFlags;

        /**
         * @construct-only
         * @default 0
         */
        set fpi_driver_data(val: bigint | number);

        /**
         * @construct-only
         * @default 0
         */
        set fpiDriverData(val: bigint | number);

        /**
         * @construct-only
         * @default null
         */
        set fpi_environ(val: string);

        /**
         * @construct-only
         * @default null
         */
        set fpiEnviron(val: string);

        /**
         * @construct-only
         * @default null
         */
        get fpi_udev_data_hidraw(): string;

        /**
         * @construct-only
         * @default null
         */
        get fpiUdevDataHidraw(): string;

        /**
         * @construct-only
         * @default null
         */
        get fpi_udev_data_spidev(): string;

        /**
         * @construct-only
         * @default null
         */
        get fpiUdevDataSpidev(): string;

        /**
         * @construct-only
         */
        get fpi_usb_device(): GUsb.Device;

        /**
         * @construct-only
         */
        get fpiUsbDevice(): GUsb.Device;

        /**
         * @read-only
         * @default null
         */
        get name(): string;

        /**
         * @read-only
         * @default 0
         */
        get nr_enroll_stages(): number;

        /**
         * @read-only
         * @default 0
         */
        get nrEnrollStages(): number;

        /**
         * @read-only
         * @default false
         */
        get open(): boolean;

        /**
         * @read-only
         * @default false
         */
        get removed(): boolean;

        /**
         * @read-only
         * @default FPrint.ScanType.SWIPE
         */
        get scan_type(): ScanType;

        /**
         * @read-only
         * @default FPrint.ScanType.SWIPE
         */
        get scanType(): ScanType;

        /**
         * @read-only
         * @default FPrint.Temperature.COLD
         */
        get temperature(): Temperature;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Device.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Device.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Device.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Start an asynchronous operation to capture an image. The callback will
         * be called once the operation has finished. Retrieve the result with
         * `fp_device_capture_finish()`.
         * @param wait_for_finger Whether to wait for a finger or not
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        capture(wait_for_finger: boolean, cancellable: Gio.Cancellable | null): globalThis.Promise<Image>;

        /**
         * Start an asynchronous operation to capture an image. The callback will
         * be called once the operation has finished. Retrieve the result with
         * `fp_device_capture_finish()`.
         * @param wait_for_finger Whether to wait for a finger or not
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to call on completion
         */
        capture(wait_for_finger: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Start an asynchronous operation to capture an image. The callback will
         * be called once the operation has finished. Retrieve the result with
         * `fp_device_capture_finish()`.
         * @param wait_for_finger Whether to wait for a finger or not
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to call on completion
         */
        capture(wait_for_finger: boolean, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Image> | void;

        /**
         * Finish an asynchronous operation to capture an image. You should check
         * for an error of type `FP_DEVICE_RETRY` to prompt the user again if there
         * was an interaction issue.
         * 
         * See `fp_device_capture()`.
         * @param result A {@link Gio.AsyncResult}
         * @returns {@link FPrint.Image} or `null` on error
         */
        capture_finish(result: Gio.AsyncResult): Image;

        /**
         * Start an synchronous operation to capture an image.
         * @param wait_for_finger Whether to wait for a finger or not
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns A new {@link FPrint.Image} or `null` on error
         */
        capture_sync(wait_for_finger: boolean, cancellable: Gio.Cancellable | null): Image;

        /**
         * Start an asynchronous operation to delete all prints from the device.
         * The callback will be called once the operation has finished. Retrieve
         * the result with `fp_device_clear_storage_finish()`.
         * 
         * This only makes sense on devices that store prints on-chip, but is safe
         * to always call.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        clear_storage(cancellable: Gio.Cancellable | null): globalThis.Promise<void>;

        /**
         * Start an asynchronous operation to delete all prints from the device.
         * The callback will be called once the operation has finished. Retrieve
         * the result with `fp_device_clear_storage_finish()`.
         * 
         * This only makes sense on devices that store prints on-chip, but is safe
         * to always call.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to call on completion
         */
        clear_storage(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Start an asynchronous operation to delete all prints from the device.
         * The callback will be called once the operation has finished. Retrieve
         * the result with `fp_device_clear_storage_finish()`.
         * 
         * This only makes sense on devices that store prints on-chip, but is safe
         * to always call.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to call on completion
         */
        clear_storage(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * Finish an asynchronous operation to delete all enrolled prints.
         * 
         * See `fp_device_clear_storage()`.
         * @param result A {@link Gio.AsyncResult}
         * @returns `false` on error, `true` otherwise
         */
        clear_storage_finish(result: Gio.AsyncResult): void;

        /**
         * Clear sensor storage.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns `false` on error, `true` otherwise
         */
        clear_storage_sync(cancellable: Gio.Cancellable | null): void;

        /**
         * Start an asynchronous operation to close the device. The callback will
         * be called once the operation has finished. Retrieve the result with
         * `fp_device_close_finish()`.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        close(cancellable: Gio.Cancellable | null): globalThis.Promise<void>;

        /**
         * Start an asynchronous operation to close the device. The callback will
         * be called once the operation has finished. Retrieve the result with
         * `fp_device_close_finish()`.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to call on completion
         */
        close(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Start an asynchronous operation to close the device. The callback will
         * be called once the operation has finished. Retrieve the result with
         * `fp_device_close_finish()`.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to call on completion
         */
        close(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * Finish an asynchronous operation to close the device.
         * See `fp_device_close()`.
         * @param result A {@link Gio.AsyncResult}
         * @returns `false` on error, `true` otherwise
         */
        close_finish(result: Gio.AsyncResult): void;

        /**
         * Close the device synchronously.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns `false` on error, `true` otherwise
         */
        close_sync(cancellable: Gio.Cancellable | null): void;

        /**
         * Start an asynchronous operation to delete a print from the device.
         * The callback will be called once the operation has finished. Retrieve
         * the result with `fp_device_delete_print_finish()`.
         * 
         * This only makes sense on devices that store prints on-chip, but is safe
         * to always call.
         * @param enrolled_print a {@link FPrint.Print} to delete
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        delete_print(enrolled_print: Print, cancellable: Gio.Cancellable | null): globalThis.Promise<void>;

        /**
         * Start an asynchronous operation to delete a print from the device.
         * The callback will be called once the operation has finished. Retrieve
         * the result with `fp_device_delete_print_finish()`.
         * 
         * This only makes sense on devices that store prints on-chip, but is safe
         * to always call.
         * @param enrolled_print a {@link FPrint.Print} to delete
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to call on completion
         */
        delete_print(enrolled_print: Print, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Start an asynchronous operation to delete a print from the device.
         * The callback will be called once the operation has finished. Retrieve
         * the result with `fp_device_delete_print_finish()`.
         * 
         * This only makes sense on devices that store prints on-chip, but is safe
         * to always call.
         * @param enrolled_print a {@link FPrint.Print} to delete
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to call on completion
         */
        delete_print(enrolled_print: Print, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * Finish an asynchronous operation to delete an enrolled print.
         * 
         * See `fp_device_delete_print()`.
         * @param result A {@link Gio.AsyncResult}
         * @returns `false` on error, `true` otherwise
         */
        delete_print_finish(result: Gio.AsyncResult): void;

        /**
         * Delete a given print from the device.
         * @param enrolled_print a {@link FPrint.Print} to verify
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns `false` on error, `true` otherwise
         */
        delete_print_sync(enrolled_print: Print, cancellable: Gio.Cancellable | null): void;

        /**
         * Start an asynchronous operation to enroll a print. The callback will
         * be called once the operation has finished. Retrieve the result with
         * `fp_device_enroll_finish()`.
         * 
         * The `template_print` parameter is a {@link FPrint.Print} with available metadata filled
         * in and, optionally, with existing fingerprint data to be updated with newly
         * enrolled fingerprints if a device driver supports it. The driver may make use
         * of the metadata, when e.g. storing the print on device memory. It is undefined
         * whether this print is filled in by the driver and returned, or whether the
         * driver will return a newly created print after enrollment succeeded.
         * @param template_print a {@link FPrint.Print}
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param progress_cb progress reporting callback
         */
        enroll(template_print: Print, cancellable: Gio.Cancellable | null, progress_cb: EnrollProgress | null): globalThis.Promise<Print>;

        /**
         * Start an asynchronous operation to enroll a print. The callback will
         * be called once the operation has finished. Retrieve the result with
         * `fp_device_enroll_finish()`.
         * 
         * The `template_print` parameter is a {@link FPrint.Print} with available metadata filled
         * in and, optionally, with existing fingerprint data to be updated with newly
         * enrolled fingerprints if a device driver supports it. The driver may make use
         * of the metadata, when e.g. storing the print on device memory. It is undefined
         * whether this print is filled in by the driver and returned, or whether the
         * driver will return a newly created print after enrollment succeeded.
         * @param template_print a {@link FPrint.Print}
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param progress_cb progress reporting callback
         * @param callback the function to call on completion
         */
        enroll(template_print: Print, cancellable: Gio.Cancellable | null, progress_cb: EnrollProgress | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Start an asynchronous operation to enroll a print. The callback will
         * be called once the operation has finished. Retrieve the result with
         * `fp_device_enroll_finish()`.
         * 
         * The `template_print` parameter is a {@link FPrint.Print} with available metadata filled
         * in and, optionally, with existing fingerprint data to be updated with newly
         * enrolled fingerprints if a device driver supports it. The driver may make use
         * of the metadata, when e.g. storing the print on device memory. It is undefined
         * whether this print is filled in by the driver and returned, or whether the
         * driver will return a newly created print after enrollment succeeded.
         * @param template_print a {@link FPrint.Print}
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param progress_cb progress reporting callback
         * @param callback the function to call on completion
         */
        enroll(template_print: Print, cancellable: Gio.Cancellable | null, progress_cb: EnrollProgress | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Print> | void;

        /**
         * Finish an asynchronous operation to enroll a print. You should check
         * for an error of type `FP_DEVICE_RETRY` to prompt the user again if there
         * was an interaction issue.
         * See `fp_device_enroll()`.
         * @param result A {@link Gio.AsyncResult}
         * @returns The enrolled {@link FPrint.Print}, or `null` on error
         */
        enroll_finish(result: Gio.AsyncResult): Print;

        /**
         * Enroll a new print. See `fp_device_enroll()`. It is undefined whether
         * `template_print` is updated or a newly created {@link FPrint.Print} is returned.
         * @param template_print A {@link FPrint.Print} to fill in or use   as a template.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param progress_cb progress reporting callback
         * @returns A {@link FPrint.Print} on success, `null` otherwise
         */
        enroll_sync(template_print: Print, cancellable: Gio.Cancellable | null, progress_cb: EnrollProgress | null): Print;

        /**
         * @returns The ID of the device
         */
        get_device_id(): string;

        /**
         * @returns The ID of the driver
         */
        get_driver(): string;

        /**
         * Gets the {@link FPrint.DeviceFeature}'s supported by the `device`.
         * @returns {@link FPrint.DeviceFeature} flags of supported features
         */
        get_features(): DeviceFeature;

        /**
         * Retrieves the finger status flags for the device.
         * This can be used by the UI to present the relevant feedback, although it
         * is not guaranteed to be a relevant value when not performing any action.
         * @returns The current {@link FPrint.FingerStatusFlags}
         */
        get_finger_status(): FingerStatusFlags;

        /**
         * @returns The human readable name of the device
         */
        get_name(): string;

        /**
         * Retrieves the number of enroll stages for this device.
         * @returns The number of enroll stages
         */
        get_nr_enroll_stages(): number;

        /**
         * Retrieves the scan type of the device.
         * @returns The {@link FPrint.ScanType}
         */
        get_scan_type(): ScanType;

        /**
         * Retrieves simple temperature information for device. It is not possible
         * to use a device when this is #FP_TEMPERATURE_HOT.
         * @returns The current temperature estimation.
         */
        get_temperature(): Temperature;

        /**
         * Checks if `device` supports the requested {@link FPrint.DeviceFeature}'s.
         * See `fp_device_get_features()`
         * @param feature {@link FPrint.DeviceFeature} flags to check against device supported features
         * @returns `true` if supported, `false` otherwise
         */
        has_feature(feature: DeviceFeature): boolean;

        /**
         * Whether the device has on-chip storage. If it has, you can list the
         * prints stored on the with `fp_device_list_prints()` and you should
         * always delete prints from the device again using
         * `fp_device_delete_print()`.
         */
        has_storage(): boolean;

        /**
         * Start an asynchronous operation to identify prints. The callback will
         * be called once the operation has finished. Retrieve the result with
         * `fp_device_identify_finish()`.
         * @param prints {@link GLib.PtrArray} of {@link FPrint.Print}
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param match_cb match reporting callback
         */
        identify(prints: Print[], cancellable: Gio.Cancellable | null, match_cb: MatchCb | null): globalThis.Promise<[void, Print | null, Print | null]>;

        /**
         * Start an asynchronous operation to identify prints. The callback will
         * be called once the operation has finished. Retrieve the result with
         * `fp_device_identify_finish()`.
         * @param prints {@link GLib.PtrArray} of {@link FPrint.Print}
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param match_cb match reporting callback
         * @param callback the function to call on completion
         */
        identify(prints: Print[], cancellable: Gio.Cancellable | null, match_cb: MatchCb | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Start an asynchronous operation to identify prints. The callback will
         * be called once the operation has finished. Retrieve the result with
         * `fp_device_identify_finish()`.
         * @param prints {@link GLib.PtrArray} of {@link FPrint.Print}
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param match_cb match reporting callback
         * @param callback the function to call on completion
         */
        identify(prints: Print[], cancellable: Gio.Cancellable | null, match_cb: MatchCb | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<[void, Print | null, Print | null]> | void;

        /**
         * Finish an asynchronous operation to identify a print. You should check
         * for an error of type `FP_DEVICE_RETRY` to prompt the user again if there
         * was an interaction issue.
         * 
         * Use `match` to find the print that matched. With `print` you can fetch the
         * newly created print and retrieve the image data if available.
         * 
         * See `fp_device_identify()`.
         * @param result A {@link Gio.AsyncResult}
         * @returns `false` on error, `true` otherwise
         */
        identify_finish(result: Gio.AsyncResult): [Print | null, Print | null];

        /**
         * Identify a print synchronously.
         * @param prints {@link GLib.PtrArray} of {@link FPrint.Print}
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param match_cb match reporting callback
         * @returns `false` on error, `true` otherwise
         */
        identify_sync(prints: Print[], cancellable: Gio.Cancellable | null, match_cb: MatchCb | null): [Print | null, Print | null];

        /**
         * @returns Whether the device is open or not
         */
        is_open(): boolean;

        /**
         * Start an asynchronous operation to list all prints stored on the device.
         * This only makes sense on devices that store prints on-chip.
         * 
         * Retrieve the result with `fp_device_list_prints_finish()`.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        list_prints(cancellable: Gio.Cancellable | null): globalThis.Promise<Print[]>;

        /**
         * Start an asynchronous operation to list all prints stored on the device.
         * This only makes sense on devices that store prints on-chip.
         * 
         * Retrieve the result with `fp_device_list_prints_finish()`.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to call on completion
         */
        list_prints(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Start an asynchronous operation to list all prints stored on the device.
         * This only makes sense on devices that store prints on-chip.
         * 
         * Retrieve the result with `fp_device_list_prints_finish()`.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to call on completion
         */
        list_prints(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Print[]> | void;

        /**
         * Finish an asynchronous operation to list all device stored prints.
         * 
         * See `fp_device_list_prints()`.
         * @param result A {@link Gio.AsyncResult}
         * @returns Array of prints or `null` on error
         */
        list_prints_finish(result: Gio.AsyncResult): Print[];

        /**
         * List device stored prints synchronously.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns Array of prints, or `null` on error
         */
        list_prints_sync(cancellable: Gio.Cancellable | null): Print[];

        /**
         * Finish an asynchronous operation to open the device.
         * See `fp_device_open()`.
         * @param result A {@link Gio.AsyncResult}
         * @returns `false` on error, `true` otherwise
         */
        open_finish(result: Gio.AsyncResult): void;

        /**
         * Open the device synchronously.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns `false` on error, `true` otherwise
         */
        open_sync(cancellable: Gio.Cancellable | null): void;

        /**
         * Resume device after system suspend. Retrieve the result with
         * `fp_device_suspend_finish()`.
         * 
         * Note that it is not defined when any ongoing operation may return (success or
         * error). You must be ready to handle this before, during or after the
         * resume operation.
         * @param cancellable a {@link Gio.Cancellable}, or `null`, currently not used
         */
        resume(cancellable: Gio.Cancellable | null): globalThis.Promise<void>;

        /**
         * Resume device after system suspend. Retrieve the result with
         * `fp_device_suspend_finish()`.
         * 
         * Note that it is not defined when any ongoing operation may return (success or
         * error). You must be ready to handle this before, during or after the
         * resume operation.
         * @param cancellable a {@link Gio.Cancellable}, or `null`, currently not used
         * @param callback the function to call on completion
         */
        resume(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Resume device after system suspend. Retrieve the result with
         * `fp_device_suspend_finish()`.
         * 
         * Note that it is not defined when any ongoing operation may return (success or
         * error). You must be ready to handle this before, during or after the
         * resume operation.
         * @param cancellable a {@link Gio.Cancellable}, or `null`, currently not used
         * @param callback the function to call on completion
         */
        resume(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * Finish an asynchronous operation to resume the device after suspend.
         * See `fp_device_resume()`.
         * 
         * The API user should accept an error of #FP_DEVICE_ERROR_NOT_SUPPORTED.
         * @param result A {@link Gio.AsyncResult}
         * @returns `false` on error, `true` otherwise
         */
        resume_finish(result: Gio.AsyncResult): void;

        /**
         * Resume device after suspend.
         * @param cancellable a {@link Gio.Cancellable}, or `null`, currently not used
         * @returns `false` on error, `true` otherwise
         */
        resume_sync(cancellable: Gio.Cancellable | null): void;

        /**
         * Check whether the device supports capturing images.
         * @returns Whether the device supports image capture
         */
        supports_capture(): boolean;

        /**
         * Check whether the device supports identification.
         * @returns Whether the device supports identification
         */
        supports_identify(): boolean;

        /**
         * Prepare the device for system suspend. Retrieve the result with
         * `fp_device_suspend_finish()`.
         * 
         * The suspend method can be called at any time (even if the device is not
         * opened) and must be paired with a corresponding resume call. It is undefined
         * when or how any ongoing operation is finished. This call might wait for an
         * ongoing operation to finish, might cancel the ongoing operation or may
         * prepare the device so that the host is resumed when the operation can be
         * finished.
         * 
         * If an ongoing operation must be cancelled then it will complete with an error
         * code of #FP_DEVICE_ERROR_BUSY before the suspend async routine finishes.
         * 
         * Any operation started while the device is suspended will fail with
         * #FP_DEVICE_ERROR_BUSY, this includes calls to open or close the device.
         * @param cancellable a {@link Gio.Cancellable}, or `null`, currently not used
         */
        suspend(cancellable: Gio.Cancellable | null): globalThis.Promise<void>;

        /**
         * Prepare the device for system suspend. Retrieve the result with
         * `fp_device_suspend_finish()`.
         * 
         * The suspend method can be called at any time (even if the device is not
         * opened) and must be paired with a corresponding resume call. It is undefined
         * when or how any ongoing operation is finished. This call might wait for an
         * ongoing operation to finish, might cancel the ongoing operation or may
         * prepare the device so that the host is resumed when the operation can be
         * finished.
         * 
         * If an ongoing operation must be cancelled then it will complete with an error
         * code of #FP_DEVICE_ERROR_BUSY before the suspend async routine finishes.
         * 
         * Any operation started while the device is suspended will fail with
         * #FP_DEVICE_ERROR_BUSY, this includes calls to open or close the device.
         * @param cancellable a {@link Gio.Cancellable}, or `null`, currently not used
         * @param callback the function to call on completion
         */
        suspend(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Prepare the device for system suspend. Retrieve the result with
         * `fp_device_suspend_finish()`.
         * 
         * The suspend method can be called at any time (even if the device is not
         * opened) and must be paired with a corresponding resume call. It is undefined
         * when or how any ongoing operation is finished. This call might wait for an
         * ongoing operation to finish, might cancel the ongoing operation or may
         * prepare the device so that the host is resumed when the operation can be
         * finished.
         * 
         * If an ongoing operation must be cancelled then it will complete with an error
         * code of #FP_DEVICE_ERROR_BUSY before the suspend async routine finishes.
         * 
         * Any operation started while the device is suspended will fail with
         * #FP_DEVICE_ERROR_BUSY, this includes calls to open or close the device.
         * @param cancellable a {@link Gio.Cancellable}, or `null`, currently not used
         * @param callback the function to call on completion
         */
        suspend(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * Finish an asynchronous operation to prepare the device for suspend.
         * See `fp_device_suspend()`.
         * 
         * The API user should accept an error of #FP_DEVICE_ERROR_NOT_SUPPORTED.
         * @param result A {@link Gio.AsyncResult}
         * @returns `false` on error, `true` otherwise
         */
        suspend_finish(result: Gio.AsyncResult): void;

        /**
         * Prepare device for suspend.
         * @param cancellable a {@link Gio.Cancellable}, or `null`, currently not used
         * @returns `false` on error, `true` otherwise
         */
        suspend_sync(cancellable: Gio.Cancellable | null): void;

        /**
         * Start an asynchronous operation to verify a print. The callback will
         * be called once the operation has finished. Retrieve the result with
         * `fp_device_verify_finish()`.
         * @param enrolled_print a {@link FPrint.Print} to verify
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param match_cb match reporting callback
         */
        verify(enrolled_print: Print, cancellable: Gio.Cancellable | null, match_cb: MatchCb | null): globalThis.Promise<[void, boolean, Print | null]>;

        /**
         * Start an asynchronous operation to verify a print. The callback will
         * be called once the operation has finished. Retrieve the result with
         * `fp_device_verify_finish()`.
         * @param enrolled_print a {@link FPrint.Print} to verify
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param match_cb match reporting callback
         * @param callback the function to call on completion
         */
        verify(enrolled_print: Print, cancellable: Gio.Cancellable | null, match_cb: MatchCb | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Start an asynchronous operation to verify a print. The callback will
         * be called once the operation has finished. Retrieve the result with
         * `fp_device_verify_finish()`.
         * @param enrolled_print a {@link FPrint.Print} to verify
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param match_cb match reporting callback
         * @param callback the function to call on completion
         */
        verify(enrolled_print: Print, cancellable: Gio.Cancellable | null, match_cb: MatchCb | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<[void, boolean, Print | null]> | void;

        /**
         * Finish an asynchronous operation to verify an enrolled print. You should check
         * for an error of type `FP_DEVICE_RETRY` to prompt the user again if there
         * was an interaction issue.
         * 
         * With `print` you can fetch the newly created print and retrieve the image data if available.
         * 
         * See `fp_device_verify()`.
         * @param result A {@link Gio.AsyncResult}
         * @returns `false` on error, `true` otherwise
         */
        verify_finish(result: Gio.AsyncResult): [boolean, Print | null];

        /**
         * Verify a given print synchronously.
         * @param enrolled_print a {@link FPrint.Print} to verify
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param match_cb match reporting callback
         * @returns `false` on error, `true` otherwise
         */
        verify_sync(enrolled_print: Print, cancellable: Gio.Cancellable | null, match_cb: MatchCb | null): [boolean, Print | null];

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns `true` if successful. If an error has occurred, this function will return `false` and set `error` appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or `null` on error.
         * @param res the {@link Gio.AsyncResult} from the callback
         * @returns a newly created {@link GObject.Object},      or `null` on error. Free with `g_object_unref()`.
         */
        new_finish(res: Gio.AsyncResult): Device;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @virtual
         */
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
    }


    namespace Image {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            height: number;
            width: number;
        }
    }

    /**
     * @gir-type Class
     */
    class Image extends GObject.Object {
        static $gtype: GObject.GType<Image>;

        // Properties
        /**
         * @construct-only
         * @default 0
         */
        get height(): number;

        /**
         * @construct-only
         * @default 0
         */
        get width(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Image.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Image.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](width: number, height: number): Image;

        // Signals
        /** @signal */
        connect<K extends keyof Image.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Image.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Image.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Image.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Image.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Image.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Detects the minutiae found in an image.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        detect_minutiae(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Detects the minutiae found in an image.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to call on completion
         */
        detect_minutiae(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Detects the minutiae found in an image.
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback the function to call on completion
         */
        detect_minutiae(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finish minutiae detection in an image
         * @param result A {@link Gio.AsyncResult}
         * @returns `true` on success
         */
        detect_minutiae_finish(result: Gio.AsyncResult): boolean;

        /**
         * Gets the binarized data for an image. This data must not be modified or
         * freed. You need to first detect the minutiae using
         * `fp_image_detect_minutiae()`.
         * @returns The binarized image data
         */
        get_binarized(): Uint8Array;

        /**
         * Gets the greyscale data for an image. This data must not be modified or
         * freed.
         * @returns The image data
         */
        get_data(): Uint8Array;

        /**
         * @param args 
         */
    // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;

        /**
         * Gets the pixel height of an image.
         * @returns the height of the image
         */
        get_height(): number;

        /**
         * Gets the minutiae for an image. This data must not be modified or
         * freed. You need to first detect the minutiae using
         * `fp_image_detect_minutiae()`.
         * @returns The detected minutiae
         */
        get_minutiae(): Minutia[];

        /**
         * Gets the resolution of the image. Note that this is assumed to
         * be fixed to 500 points per inch (~19.685 p/mm) for most drivers.
         * @returns the resolution of the image in points per millimeter
         */
        get_ppmm(): number;

        /**
         * Gets the pixel width of an image.
         * @returns the width of the image
         */
        get_width(): number;
    }


    namespace ImageDevice {
        // Signal signatures
        interface SignalSignatures extends Device.SignalSignatures {
            /**
             * This signal is only for internal purposes.
             * @signal
             * @run-first
             */
            "fpi-image-device-state-changed": (arg0: unknown) => void;
            "notify::device-id": (pspec: GObject.ParamSpec) => void;
            "notify::driver": (pspec: GObject.ParamSpec) => void;
            "notify::finger-status": (pspec: GObject.ParamSpec) => void;
            "notify::fpi-driver-data": (pspec: GObject.ParamSpec) => void;
            "notify::fpi-environ": (pspec: GObject.ParamSpec) => void;
            "notify::fpi-udev-data-hidraw": (pspec: GObject.ParamSpec) => void;
            "notify::fpi-udev-data-spidev": (pspec: GObject.ParamSpec) => void;
            "notify::fpi-usb-device": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::nr-enroll-stages": (pspec: GObject.ParamSpec) => void;
            "notify::open": (pspec: GObject.ParamSpec) => void;
            "notify::removed": (pspec: GObject.ParamSpec) => void;
            "notify::scan-type": (pspec: GObject.ParamSpec) => void;
            "notify::temperature": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps, Gio.AsyncInitable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    abstract class ImageDevice extends Device implements Gio.AsyncInitable<ImageDevice> {
        static $gtype: GObject.GType<ImageDevice>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ImageDevice.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ImageDevice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ImageDevice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ImageDevice.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ImageDevice.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ImageDevice.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ImageDevice.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ImageDevice.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns `true` if successful. If an error has occurred, this function will return `false` and set `error` appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or `null` on error.
         * @param res the {@link Gio.AsyncResult} from the callback
         * @returns a newly created {@link GObject.Object},      or `null` on error. Free with `g_object_unref()`.
         */
        new_finish(res: Gio.AsyncResult): ImageDevice;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @virtual
         */
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
    }


    namespace Print {
        // Signal signatures
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::device-id": (pspec: GObject.ParamSpec) => void;
            "notify::device-stored": (pspec: GObject.ParamSpec) => void;
            "notify::driver": (pspec: GObject.ParamSpec) => void;
            "notify::enroll-date": (pspec: GObject.ParamSpec) => void;
            "notify::finger": (pspec: GObject.ParamSpec) => void;
            "notify::fpi-data": (pspec: GObject.ParamSpec) => void;
            "notify::fpi-prints": (pspec: GObject.ParamSpec) => void;
            "notify::image": (pspec: GObject.ParamSpec) => void;
            "notify::username": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
            description: string | null;
            device_id: string;
            deviceId: string;
            device_stored: boolean;
            deviceStored: boolean;
            driver: string;
            enroll_date: GLib.Date | null;
            enrollDate: GLib.Date | null;
            finger: Finger;
            fpi_data: GLib.Variant;
            fpiData: GLib.Variant;
            fpi_prints: never;
            fpiPrints: never;
            image: Image | null;
            username: string | null;
        }
    }

    /**
     * @gir-type Class
     */
    class Print extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<Print>;

        // Properties
        /**
         * @default null
         */
        get description(): string | null;
        set description(val: string | null);

        /**
         * @construct-only
         * @default null
         */
        get device_id(): string;

        /**
         * @construct-only
         * @default null
         */
        get deviceId(): string;

        /**
         * @construct-only
         * @default false
         */
        get device_stored(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get deviceStored(): boolean;

        /**
         * @construct-only
         * @default null
         */
        get driver(): string;

        get enroll_date(): GLib.Date | null;
        set enroll_date(val: GLib.Date | null);

        get enrollDate(): GLib.Date | null;
        set enrollDate(val: GLib.Date | null);

        /**
         * @default FPrint.Finger.UNKNOWN
         */
        get finger(): Finger;
        set finger(val: Finger);

        get fpi_data(): GLib.Variant;
        set fpi_data(val: GLib.Variant);

        get fpiData(): GLib.Variant;
        set fpiData(val: GLib.Variant);

        get fpi_prints(): null;
        set fpi_prints(val: never);

        get fpiPrints(): null;
        set fpiPrints(val: never);

        /**
         * @read-only
         */
        get image(): Image | null;

        /**
         * @default null
         */
        get username(): string | null;
        set username(val: string | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Print.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Print.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](device: Device): Print;

        // Signals
        /** @signal */
        connect<K extends keyof Print.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Print.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Print.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Print.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Print.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Print.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Deserialize a print definition from permanent storage.
         * @param data The binary data
         */
        static deserialize(data: Uint8Array | string): Print;

        // Methods
        /**
         * Tests whether the prints is compatible with the given device.
         * @param device A {@link FPrint.Device}
         * @returns `true` if the print is compatible with the device
         */
        compatible(device: Device): boolean;

        /**
         * Tests whether the prints can be considered equal. This only compares the
         * actual information about the print, not the metadata.
         * @param other Second {@link FPrint.Print}
         * @returns `true` if the prints are equal
         */
        equal(other: Print): boolean;

        /**
         * Returns the user defined description for the print.
         * @returns The description
         */
        get_description(): string | null;

        /**
         * Returns the device ID that the print was created for.
         * @returns The device ID
         */
        get_device_id(): string;

        /**
         * Whether the print is actually stored on the device and this is
         * just a handle to use that references the device stored data.
         * @returns Whether the print is stored on the device
         */
        get_device_stored(): boolean;

        /**
         * Returns the driver that the print was created for.
         * @returns The driver
         */
        get_driver(): string;

        /**
         * Returns the user defined enroll date for the print.
         * @returns The {@link GLib.Date}
         */
        get_enroll_date(): GLib.Date | null;

        /**
         * Returns the finger that the print was created for.
         * @returns The {@link FPrint.Finger}
         */
        get_finger(): Finger;

        /**
         * Returns the image that the print was created from, or `null`
         * @returns The {@link FPrint.Image}
         */
        get_image(): Image | null;

        /**
         * Returns the user defined username for the print.
         * @returns The username
         */
        get_username(): string | null;

        /**
         * Serialize a print definition for permanent storage. Note that this is
         * lossy in the sense that e.g. the image data is discarded.
         * @returns `true` on success
         */
        serialize(): Uint8Array;

        /**
         * Set the description for the print.
         * @param description The new description
         */
        set_description(description: string): void;

        /**
         * Set the enroll date for the print.
         * @param enroll_date The new enroll date
         */
        set_enroll_date(enroll_date: GLib.Date): void;

        /**
         * Set the finger that the print is for.
         * @param finger The {@link FPrint.Finger}
         */
        set_finger(finger: Finger): void;

        /**
         * Set the username for the print.
         * @param username The new username
         */
        set_username(username: string): void;
    }


    /**
     * @gir-type Alias
     */
    type ContextClass = typeof Context;

    /**
     * @gir-type Alias
     */
    type DeviceClass = typeof Device;

    /**
     * @gir-type Alias
     */
    type ImageClass = typeof Image;

    /**
     * @gir-type Alias
     */
    type ImageDeviceClass = typeof ImageDevice;

    /**
     * @gir-type Struct
     */
    abstract class Minutia {
        static $gtype: GObject.GType<Minutia>;

        // Methods
        /**
         * Returns the coordinates of the found minutia. This is only useful for
         * debugging purposes and the API is not considered stable for production.
         */
        get_coords(): [number, number];
    }


    /**
     * @gir-type Alias
     */
    type PrintClass = typeof Print;

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

export default FPrint;

// END
