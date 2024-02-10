/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './fprint-2.0-ambient.d.ts';
import './fprint-2.0-import.d.ts';
/**
 * FPrint-2.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GUsb from '@girs/gusb-1.0';
import type Json from '@girs/json-1.0';

export namespace FPrint {
    /**
     * Error codes for device operations. More specific errors from other domains
     * such as #G_IO_ERROR or #G_USB_DEVICE_ERROR may also be reported.
     */
    class DeviceError extends GLib.Error {
        // Own fields of FPrint-2.0.DeviceError

        /**
         * A general error occurred.
         */
        GENERAL: number;
        /**
         * The device does not support the requested
         *  operation.
         */
        NOT_SUPPORTED: number;
        /**
         * The device needs to be opened to start this
         *   operation.
         */
        NOT_OPEN: number;
        /**
         * The device has already been opened.
         */
        ALREADY_OPEN: number;
        /**
         * The device is busy with another request.
         */
        BUSY: number;
        /**
         * Protocol error
         */
        PROTO: number;
        /**
         * The passed data is invalid
         */
        DATA_INVALID: number;
        /**
         * Requested print was not found on device
         */
        DATA_NOT_FOUND: number;
        /**
         * No space on device available for operation
         */
        DATA_FULL: number;
        /**
         * Enrolling template duplicates storaged templates
         */
        DATA_DUPLICATE: number;
        /**
         * The device has been removed.
         */
        REMOVED: number;
        /**
         * The device might be getting too hot
         */
        TOO_HOT: number;

        // Constructors of FPrint-2.0.DeviceError

        constructor(options: { message: string; code: number });

        // Owm methods of FPrint-2.0.DeviceError

        static quark(): GLib.Quark;
    }

    /**
     * Error codes representing scan failures resulting in the user needing to
     * retry.
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
    }
    enum DeviceType {
        /**
         * The device is a virtual device
         */
        VIRTUAL,
        /**
         * The device is a USB device
         */
        USB,
        /**
         * The device is a udev device
         */
        UDEV,
    }
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
     * When a device is created, it is assumed to be cold. Applications such as
     * fprintd may want to ensure all devices on the system are cold before
     * shutting down in order to ensure that the cool-off period is not violated
     * because the internal libfprint state about the device is lost.
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
    function device_error_quark(): GLib.Quark;
    function device_retry_quark(): GLib.Quark;
    interface EnrollProgress {
        (device: Device, completed_stages: number, print?: Print | null, error?: GLib.Error | null): void;
    }
    interface MatchCb {
        (device: Device, match?: Print | null, print?: Print | null, error?: GLib.Error | null): void;
    }
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
    module Context {
        // Signal callback interfaces

        interface DeviceAdded {
            (device: Device): void;
        }

        interface DeviceRemoved {
            (device: Device): void;
        }

        // Constructor properties interface
    }

    class Context extends GObject.Object {
        // Constructors of FPrint-2.0.Context

        static ['new'](): Context;

        // Owm methods of FPrint-2.0.Context

        /**
         * Enumerate all devices. You should call this function exactly once
         * at startup. Please note that it iterates the mainloop until all
         * devices are enumerated.
         */
        enumerate(): void;
        /**
         * Get all devices. fp_context_enumerate() will be called as needed.
         * @returns a new #GPtrArray of #FpDevice's.
         */
        get_devices(): Device[];
    }

    module Device {
        // Signal callback interfaces

        interface Removed {
            (): void;
        }

        // Constructor properties interface
    }

    abstract class Device extends GObject.Object {
        // Own properties of FPrint-2.0.Device

        readonly device_id: string;
        readonly deviceId: string;
        readonly driver: string;
        readonly finger_status: FingerStatusFlags;
        readonly fingerStatus: FingerStatusFlags;
        fpi_driver_data: number;
        fpiDriverData: number;
        fpi_environ: string;
        fpiEnviron: string;
        fpi_udev_data_hidraw: string;
        fpiUdevDataHidraw: string;
        fpi_udev_data_spidev: string;
        fpiUdevDataSpidev: string;
        fpi_usb_device: GUsb.Device;
        fpiUsbDevice: GUsb.Device;
        readonly name: string;
        readonly nr_enroll_stages: number;
        readonly nrEnrollStages: number;
        readonly open: boolean;
        readonly removed: boolean;
        readonly scan_type: ScanType;
        readonly scanType: ScanType;
        readonly temperature: Temperature;

        // Owm methods of FPrint-2.0.Device

        /**
         * Start an asynchronous operation to capture an image. The callback will
         * be called once the operation has finished. Retrieve the result with
         * fp_device_capture_finish().
         * @param wait_for_finger Whether to wait for a finger or not
         * @param cancellable a #GCancellable, or %NULL
         * @param callback the function to call on completion
         */
        capture(
            wait_for_finger: boolean,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finish an asynchronous operation to capture an image. You should check
         * for an error of type %FP_DEVICE_RETRY to prompt the user again if there
         * was an interaction issue.
         *
         * See fp_device_capture().
         * @param result A #GAsyncResult
         * @returns #FpImage or %NULL on error
         */
        capture_finish(result: Gio.AsyncResult): Image;
        /**
         * Start an synchronous operation to capture an image.
         * @param wait_for_finger Whether to wait for a finger or not
         * @param cancellable a #GCancellable, or %NULL
         * @returns A new #FpImage or %NULL on error
         */
        capture_sync(wait_for_finger: boolean, cancellable?: Gio.Cancellable | null): Image;
        /**
         * Start an asynchronous operation to delete all prints from the device.
         * The callback will be called once the operation has finished. Retrieve
         * the result with fp_device_clear_storage_finish().
         *
         * This only makes sense on devices that store prints on-chip, but is safe
         * to always call.
         * @param cancellable a #GCancellable, or %NULL
         * @param callback the function to call on completion
         */
        clear_storage(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finish an asynchronous operation to delete all enrolled prints.
         *
         * See fp_device_clear_storage().
         * @param result A #GAsyncResult
         * @returns %FALSE on error, %TRUE otherwise
         */
        clear_storage_finish(result: Gio.AsyncResult): void;
        /**
         * Clear sensor storage.
         * @param cancellable a #GCancellable, or %NULL
         * @returns %FALSE on error, %TRUE otherwise
         */
        clear_storage_sync(cancellable?: Gio.Cancellable | null): void;
        /**
         * Start an asynchronous operation to close the device. The callback will
         * be called once the operation has finished. Retrieve the result with
         * fp_device_close_finish().
         * @param cancellable a #GCancellable, or %NULL
         * @param callback the function to call on completion
         */
        close(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finish an asynchronous operation to close the device.
         * See fp_device_close().
         * @param result A #GAsyncResult
         * @returns %FALSE on error, %TRUE otherwise
         */
        close_finish(result: Gio.AsyncResult): void;
        /**
         * Close the device synchronously.
         * @param cancellable a #GCancellable, or %NULL
         * @returns %FALSE on error, %TRUE otherwise
         */
        close_sync(cancellable?: Gio.Cancellable | null): void;
        /**
         * Start an asynchronous operation to delete a print from the device.
         * The callback will be called once the operation has finished. Retrieve
         * the result with fp_device_delete_print_finish().
         *
         * This only makes sense on devices that store prints on-chip, but is safe
         * to always call.
         * @param enrolled_print a #FpPrint to delete
         * @param cancellable a #GCancellable, or %NULL
         * @param callback the function to call on completion
         */
        delete_print(
            enrolled_print: Print,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finish an asynchronous operation to delete an enrolled print.
         *
         * See fp_device_delete_print().
         * @param result A #GAsyncResult
         * @returns %FALSE on error, %TRUE otherwise
         */
        delete_print_finish(result: Gio.AsyncResult): void;
        /**
         * Delete a given print from the device.
         * @param enrolled_print a #FpPrint to verify
         * @param cancellable a #GCancellable, or %NULL
         * @returns %FALSE on error, %TRUE otherwise
         */
        delete_print_sync(enrolled_print: Print, cancellable?: Gio.Cancellable | null): void;
        /**
         * Start an asynchronous operation to enroll a print. The callback will
         * be called once the operation has finished. Retrieve the result with
         * fp_device_enroll_finish().
         *
         * The `template_print` parameter is a #FpPrint with available metadata filled
         * in and, optionally, with existing fingerprint data to be updated with newly
         * enrolled fingerprints if a device driver supports it. The driver may make use
         * of the metadata, when e.g. storing the print on device memory. It is undefined
         * whether this print is filled in by the driver and returned, or whether the
         * driver will return a newly created print after enrollment succeeded.
         * @param template_print a #FpPrint
         * @param cancellable a #GCancellable, or %NULL
         * @param callback the function to call on completion
         */
        enroll(
            template_print: Print,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finish an asynchronous operation to enroll a print. You should check
         * for an error of type %FP_DEVICE_RETRY to prompt the user again if there
         * was an interaction issue.
         * See fp_device_enroll().
         * @param result A #GAsyncResult
         * @returns The enrolled #FpPrint, or %NULL on error
         */
        enroll_finish(result: Gio.AsyncResult): Print;
        /**
         * Enroll a new print. See fp_device_enroll(). It is undefined whether
         * `template_print` is updated or a newly created #FpPrint is returned.
         * @param template_print A #FpPrint to fill in or use   as a template.
         * @param cancellable a #GCancellable, or %NULL
         * @param progress_cb progress reporting callback
         * @returns A #FpPrint on success, %NULL otherwise
         */
        enroll_sync(
            template_print: Print,
            cancellable?: Gio.Cancellable | null,
            progress_cb?: EnrollProgress | null,
        ): Print;
        get_device_id(): string;
        get_driver(): string;
        /**
         * Gets the #FpDeviceFeature's supported by the `device`.
         * @returns #FpDeviceFeature flags of supported features
         */
        get_features(): DeviceFeature;
        /**
         * Retrieves the finger status flags for the device.
         * This can be used by the UI to present the relevant feedback, although it
         * is not guaranteed to be a relevant value when not performing any action.
         * @returns The current #FpFingerStatusFlags
         */
        get_finger_status(): FingerStatusFlags;
        get_name(): string;
        /**
         * Retrieves the number of enroll stages for this device.
         * @returns The number of enroll stages
         */
        get_nr_enroll_stages(): number;
        /**
         * Retrieves the scan type of the device.
         * @returns The #FpScanType
         */
        get_scan_type(): ScanType;
        /**
         * Retrieves simple temperature information for device. It is not possible
         * to use a device when this is #FP_TEMPERATURE_HOT.
         * @returns The current temperature estimation.
         */
        get_temperature(): Temperature;
        /**
         * Checks if `device` supports the requested #FpDeviceFeature's.
         * See fp_device_get_features()
         * @param feature #FpDeviceFeature flags to check against device supported features
         * @returns %TRUE if supported, %FALSE otherwise
         */
        has_feature(feature: DeviceFeature): boolean;
        /**
         * Whether the device has on-chip storage. If it has, you can list the
         * prints stored on the with fp_device_list_prints() and you should
         * always delete prints from the device again using
         * fp_device_delete_print().
         */
        has_storage(): boolean;
        /**
         * Start an asynchronous operation to identify prints. The callback will
         * be called once the operation has finished. Retrieve the result with
         * fp_device_identify_finish().
         * @param prints #GPtrArray of #FpPrint
         * @param cancellable a #GCancellable, or %NULL
         * @param callback the function to call on completion
         */
        identify(
            prints: Print[],
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finish an asynchronous operation to identify a print. You should check
         * for an error of type %FP_DEVICE_RETRY to prompt the user again if there
         * was an interaction issue.
         *
         * Use `match` to find the print that matched. With `print` you can fetch the
         * newly created print and retrieve the image data if available.
         *
         * See fp_device_identify().
         * @param result A #GAsyncResult
         * @returns %FALSE on error, %TRUE otherwise
         */
        identify_finish(result: Gio.AsyncResult): void;
        /**
         * Identify a print synchronously.
         * @param prints #GPtrArray of #FpPrint
         * @param cancellable a #GCancellable, or %NULL
         * @returns %FALSE on error, %TRUE otherwise
         */
        identify_sync(prints: Print[], cancellable?: Gio.Cancellable | null): void;
        is_open(): boolean;
        /**
         * Start an asynchronous operation to list all prints stored on the device.
         * This only makes sense on devices that store prints on-chip.
         *
         * Retrieve the result with fp_device_list_prints_finish().
         * @param cancellable a #GCancellable, or %NULL
         * @param callback the function to call on completion
         */
        list_prints(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finish an asynchronous operation to list all device stored prints.
         *
         * See fp_device_list_prints().
         * @param result A #GAsyncResult
         * @returns Array of prints or %NULL on error
         */
        list_prints_finish(result: Gio.AsyncResult): Print[];
        /**
         * List device stored prints synchronously.
         * @param cancellable a #GCancellable, or %NULL
         * @returns Array of prints, or %NULL on error
         */
        list_prints_sync(cancellable?: Gio.Cancellable | null): Print[];
        /**
         * Finish an asynchronous operation to open the device.
         * See fp_device_open().
         * @param result A #GAsyncResult
         * @returns %FALSE on error, %TRUE otherwise
         */
        open_finish(result: Gio.AsyncResult): void;
        /**
         * Open the device synchronously.
         * @param cancellable a #GCancellable, or %NULL
         * @returns %FALSE on error, %TRUE otherwise
         */
        open_sync(cancellable?: Gio.Cancellable | null): void;
        /**
         * Resume device after system suspend. Retrieve the result with
         * fp_device_suspend_finish().
         *
         * Note that it is not defined when any ongoing operation may return (success or
         * error). You must be ready to handle this before, during or after the
         * resume operation.
         * @param cancellable a #GCancellable, or %NULL, currently not used
         * @param callback the function to call on completion
         */
        resume(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finish an asynchronous operation to resume the device after suspend.
         * See fp_device_resume().
         *
         * The API user should accept an error of #FP_DEVICE_ERROR_NOT_SUPPORTED.
         * @param result A #GAsyncResult
         * @returns %FALSE on error, %TRUE otherwise
         */
        resume_finish(result: Gio.AsyncResult): void;
        /**
         * Resume device after suspend.
         * @param cancellable a #GCancellable, or %NULL, currently not used
         * @returns %FALSE on error, %TRUE otherwise
         */
        resume_sync(cancellable?: Gio.Cancellable | null): void;
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
         * fp_device_suspend_finish().
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
         * @param cancellable a #GCancellable, or %NULL, currently not used
         * @param callback the function to call on completion
         */
        suspend(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finish an asynchronous operation to prepare the device for suspend.
         * See fp_device_suspend().
         *
         * The API user should accept an error of #FP_DEVICE_ERROR_NOT_SUPPORTED.
         * @param result A #GAsyncResult
         * @returns %FALSE on error, %TRUE otherwise
         */
        suspend_finish(result: Gio.AsyncResult): void;
        /**
         * Prepare device for suspend.
         * @param cancellable a #GCancellable, or %NULL, currently not used
         * @returns %FALSE on error, %TRUE otherwise
         */
        suspend_sync(cancellable?: Gio.Cancellable | null): void;
        /**
         * Start an asynchronous operation to verify a print. The callback will
         * be called once the operation has finished. Retrieve the result with
         * fp_device_verify_finish().
         * @param enrolled_print a #FpPrint to verify
         * @param cancellable a #GCancellable, or %NULL
         * @param callback the function to call on completion
         */
        verify(
            enrolled_print: Print,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finish an asynchronous operation to verify an enrolled print. You should check
         * for an error of type %FP_DEVICE_RETRY to prompt the user again if there
         * was an interaction issue.
         *
         * With `print` you can fetch the newly created print and retrieve the image data if available.
         *
         * See fp_device_verify().
         * @param result A #GAsyncResult
         * @returns %FALSE on error, %TRUE otherwise
         */
        verify_finish(result: Gio.AsyncResult): void;
        /**
         * Verify a given print synchronously.
         * @param enrolled_print a #FpPrint to verify
         * @param cancellable a #GCancellable, or %NULL
         * @returns %FALSE on error, %TRUE otherwise
         */
        verify_sync(enrolled_print: Print, cancellable: Gio.Cancellable | null): void;
    }

    module Image {
        // Constructor properties interface
    }

    class Image extends GObject.Object {
        // Own properties of FPrint-2.0.Image

        height: number;
        width: number;

        // Constructors of FPrint-2.0.Image

        static ['new'](width: number, height: number): Image;

        // Owm methods of FPrint-2.0.Image

        /**
         * Detects the minutiae found in an image.
         * @param cancellable a #GCancellable, or %NULL
         * @param callback the function to call on completion
         */
        detect_minutiae(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finish minutiae detection in an image
         * @param result A #GAsyncResult
         * @returns %TRUE on success
         */
        detect_minutiae_finish(result: Gio.AsyncResult): boolean;
        /**
         * Gets the binarized data for an image. This data must not be modified or
         * freed. You need to first detect the minutiae using
         * fp_image_detect_minutiae().
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
         * Gets the pixel height of an image.
         * @returns the height of the image
         */
        get_height(): number;
        /**
         * Gets the minutiae for an image. This data must not be modified or
         * freed. You need to first detect the minutiae using
         * fp_image_detect_minutiae().
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

    module ImageDevice {
        // Signal callback interfaces

        interface FpiImageDeviceStateChanged {
            (new_state: unknown): void;
        }

        // Constructor properties interface
    }

    abstract class ImageDevice extends Device {}

    module Print {
        // Constructor properties interface
    }

    class Print extends GObject.InitiallyUnowned {
        // Own properties of FPrint-2.0.Print

        description: string;
        device_id: string;
        deviceId: string;
        device_stored: boolean;
        deviceStored: boolean;
        driver: string;
        enroll_date: GLib.Date;
        enrollDate: GLib.Date;
        finger: Finger;
        fpi_data: GLib.Variant;
        fpiData: GLib.Variant;
        fpi_prints: any;
        fpiPrints: any;
        readonly image: Image;
        username: string;

        // Constructors of FPrint-2.0.Print

        static ['new'](device: Device): Print;

        // Owm methods of FPrint-2.0.Print

        /**
         * Deserialize a print definition from permanent storage.
         * @param data The binary data
         */
        static deserialize(data: Uint8Array): Print;

        // Owm methods of FPrint-2.0.Print

        /**
         * Tests whether the prints is compatible with the given device.
         * @param device A #FpDevice
         * @returns %TRUE if the print is compatible with the device
         */
        compatible(device: Device): boolean;
        /**
         * Tests whether the prints can be considered equal. This only compares the
         * actual information about the print, not the metadata.
         * @param other Second #FpPrint
         * @returns %TRUE if the prints are equal
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
         * @returns The #GDate
         */
        get_enroll_date(): GLib.Date | null;
        /**
         * Returns the finger that the print was created for.
         * @returns The #FpFinger
         */
        get_finger(): Finger;
        /**
         * Returns the image that the print was created from, or %NULL
         * @returns The #FpImage
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
         * @returns %TRUE on success
         */
        serialize(): void;
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
         * @param finger The #FpFinger
         */
        set_finger(finger: Finger): void;
        /**
         * Set the username for the print.
         * @param username The new username
         */
        set_username(username: string): void;
    }

    /**
     * Class structure for #FpContext instances.
     */
    class ContextClass {}

    class DeviceClass {}

    class ImageClass {}

    class ImageDeviceClass {}

    class Minutia {
        // Owm methods of FPrint-2.0.Minutia

        /**
         * Returns the coordinates of the found minutia. This is only useful for
         * debugging purposes and the API is not considered stable for production.
         */
        get_coords(): void;
    }

    class PrintClass {}

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
