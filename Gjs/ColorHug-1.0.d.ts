/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * ColorHug-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GUsb from './GUsb-1.0';
import type Colord from './Colord-1.0';

export namespace ColorHug {

enum ColorSelect {
    RED,
    WHITE,
    BLUE,
    GREEN,
}
enum DeviceMode {
    UNKNOWN,
    LEGACY,
    BOOTLOADER,
    FIRMWARE,
    BOOTLOADER_PLUS,
    FIRMWARE_PLUS,
    FIRMWARE2,
    BOOTLOADER2,
    BOOTLOADER_ALS,
    FIRMWARE_ALS,
}
enum Error {
    NONE,
    UNKNOWN_CMD,
    WRONG_UNLOCK_CODE,
    NOT_IMPLEMENTED,
    UNDERFLOW_SENSOR,
    NO_SERIAL,
    WATCHDOG,
    INVALID_ADDRESS,
    INVALID_LENGTH,
    INVALID_CHECKSUM,
    INVALID_VALUE,
    UNKNOWN_CMD_FOR_BOOTLOADER,
    NO_CALIBRATION,
    OVERFLOW_MULTIPLY,
    OVERFLOW_ADDITION,
    OVERFLOW_SENSOR,
    OVERFLOW_STACK,
    DEVICE_DEACTIVATED,
    INCOMPLETE_REQUEST,
    SELF_TEST_SENSOR,
    SELF_TEST_RED,
    SELF_TEST_GREEN,
    SELF_TEST_BLUE,
    SELF_TEST_COLOR_SELECT,
    SELF_TEST_MULTIPLIER,
    INVALID_CALIBRATION,
    SRAM_FAILED,
    OUT_OF_MEMORY,
    SELF_TEST_TEMPERATURE,
    SELF_TEST_I2C,
    SELF_TEST_ADC_VDD,
    SELF_TEST_ADC_VSS,
    SELF_TEST_ADC_VREF,
    I2C_SLAVE_ADDRESS,
    I2C_SLAVE_CONFIG,
    SELF_TEST_EEPROM,
}
enum FreqScale {
    TODO_0,
    TODO_20,
    TODO_2,
    TODO_100,
}
enum MeasureMode {
    FREQUENCY,
    DURATION,
}
enum SpectrumKind {
    RAW,
    DARK_CAL,
    TEMP_CAL,
    IRRADIANCE_CAL,
    LAST,
}
/**
 * CH_DEVICE_QUEUE_PROCESS_FLAGS_NONE:
 * 	Normal operation, where a single device command failure makes
 * the return value of the process %FALSE, but the queue contibues
 * to run for other devices.
 * 
 * CH_DEVICE_QUEUE_PROCESS_FLAGS_CONTINUE_ERRORS:
 * 	Continue to submit commands to a device that has failed a
 * command, for example where one command might not be supported
 * in the middle of a queue of commands.
 * 
 * CH_DEVICE_QUEUE_PROCESS_FLAGS_NONFATAL_ERRORS:
 * 	Do not consider a device error to be fatal, but instead emit
 * a signal and continue with the rest of the queue. If the flag
 * %CH_DEVICE_QUEUE_PROCESS_FLAGS_CONTINUE_ERRORS is not used then
 * other commands to the same device will not be submitted.
 * 
 * Flags for controlling processing options
 */
enum DeviceQueueProcessFlags {
    NONE,
    CONTINUE_ERRORS,
    NONFATAL_ERRORS,
}
enum Illuminant {
    NONE,
    A,
    UV,
}
enum PcbErrata {
    NONE,
    SWAPPED_LEDS,
    NO_WELCOME,
}
enum StatusLed {
    GREEN,
    RED,
    BLUE,
}
const BUFFER_INPUT_CMD: number
const BUFFER_INPUT_DATA: number
const BUFFER_OUTPUT_CMD: number
const BUFFER_OUTPUT_DATA: number
const BUFFER_OUTPUT_RETVAL: number
const CALIBRATION_DESCRIPTION_LEN: number
const CALIBRATION_INDEX_CRT: number
const CALIBRATION_INDEX_FACTORY_ONLY: number
const CALIBRATION_INDEX_LCD: number
const CALIBRATION_INDEX_LED: number
const CALIBRATION_INDEX_MAX: number
const CALIBRATION_INDEX_PROJECTOR: number
const CALIBRATION_MAX: number
const CALIBRATION_SPECTRAL: number
const CALIBRATION_TYPE_ALL: number
const CALIBRATION_TYPE_CRT: number
const CALIBRATION_TYPE_LCD: number
const CALIBRATION_TYPE_LED: number
const CALIBRATION_TYPE_PROJECTOR: number
const CCD_SPECTRAL_RESOLUTION: number
/**
 * Boot into to the flash memory.
 * 
 * IN:  [1:cmd]
 * OUT: [1:retval][1:cmd]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ✓       |      ×
 * ColorHug2      |      ✓       |      ×
 * ColorHug+      |      ✓       |      ×
 * ColorHugALS    |      ✓       |      ×
 */
const CMD_BOOT_FLASH: number
/**
 * Clears any recorded error on the device.
 * 
 * PROTOCOLv2:
 * bRequest:   [cmd]
 * wValue:     0x00
 * wIndex:     interface
 * wLength:    0x00
 * Direction:  DEVICE->HOST
 * Data:       []
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ×
 * ColorHug2      |      ×       |      ×
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ×
 */
const CMD_CLEAR_ERROR: number
/**
 * Erases flash memory before a write is done.
 * Erasing flash can only be done in 1k byte chunks and should be
 * aligned to 1k.
 * 
 * IN:  [1:cmd][2:address][2:length]
 * OUT: [1:retval][1:cmd]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ✓       |      ×
 * ColorHug2      |      ✓       |      ×
 * ColorHug+      |      ✓       |      ×
 * ColorHugALS    |      ✓       |      ×
 */
const CMD_ERASE_FLASH: number
/**
 * Gets the value of the Vref- ADC adjustment.
 * `vref` is a packed float.
 * 
 * IN:  [1:cmd]
 * OUT: [1:retval][1:cmd][4:vref]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ×
 * ColorHug2      |      ×       |      ×
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ×
 */
const CMD_GET_ADC_CALIBRATION_NEG: number
/**
 * Gets the value of the Vref+ ADC adjustment.
 * `vref` is a packed float.
 * 
 * IN:  [1:cmd]
 * OUT: [1:retval][1:cmd][4:vref]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ×
 * ColorHug2      |      ×       |      ×
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ×
 */
const CMD_GET_ADC_CALIBRATION_POS: number
/**
 * Gets the calibration matrix. The description does not have to be NULL
 * terminated.
 * 
 * `types` is a bitmask which corresponds to:
 * 
 * bit:
 *  0     Can be used with LCD panels
 *  1     Can be used with CRT monitors
 *  2     Can be used with projectors
 *  3     Can be used with LED panels
 *  4-7   Reserved for future use
 * 
 * IN:  [1:cmd][2:index]
 * OUT: [1:retval][1:cmd][2*9:matrix_value][1:types][23:description]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ✓
 * ColorHug2      |      ×       |      ✓
 * ColorHug+      |      ×       |      ×
 * ColorHugALS    |      ×       |      ×
 */
const CMD_GET_CALIBRATION: number
/**
 * Get the mappings from default calibration type to calibration
 * indexes.
 * 
 * The calibration types are as follows:
 * LCD		= 0
 * CRT		= 1
 * Projector	= 2
 * LED		= 3
 * Custom1	= 4
 * Custom2	= 5
 * 
 * In the future CustomX may be renamed to another display technology,
 * e.g. e-ink.
 * 
 * IN:  [1:cmd]
 * OUT: [1:retval][1:cmd][6*2:types]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ✓
 * ColorHug2      |      ×       |      ✓
 * ColorHug+      |      ×       |      ×
 * ColorHugALS    |      ×       |      ×
 */
const CMD_GET_CALIBRATION_MAP: number
/**
 * Gets the spectral indexes for the RGB calibration which are values between 0
 * and %CH_CCD_SPECTRAL_RESOLUTION pointing to the dominant peak for the color.
 * Red is nominally 625nm, green 520nm and blue 465nm.
 * 
 * IN:  [1:cmd]
 * OUT: [1:retval][1:cmd][2:red-idx][2:green-idx][2:blue-idx]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ×
 * ColorHug2      |      ×       |      ×
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ×
 */
const CMD_GET_CCD_CALIBRATION: number
/**
 * Get the color select state.
 * 
 * IN:  [1:cmd]
 * OUT: [1:retval][1:cmd][1:color_select]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ✓
 * ColorHug2      |      ×       |      ×
 * ColorHug+      |      ×       |      ×
 * ColorHugALS    |      ×       |      ✓
 */
const CMD_GET_COLOR_SELECT: number
/**
 * Get the DAC value. `scale` is a packed float, where 1.0f is 3.3V
 * 
 * IN:  [1:cmd]
 * OUT: [1:retval][1:cmd][4:value]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ×
 * ColorHug2      |      ×       |      ×
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ×
 */
const CMD_GET_DAC_VALUE: number
/**
 * Get the dark offsets.
 * 
 * IN:  [1:cmd]
 * OUT: [1:retval][1:cmd][2:red][2:green][2:blue]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ✓
 * ColorHug2      |      ×       |      ×
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ×
 */
const CMD_GET_DARK_OFFSETS: number
/**
 * Gets any recorded error from the device.
 * 
 * PROTOCOLv2:
 * bRequest:   [cmd]
 * wValue:     0x00
 * wIndex:     interface
 * wLength:    0x00
 * Direction:  DEVICE->HOST
 * Data:       [1:error][1:cmd]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ×
 * ColorHug2      |      ×       |      ×
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ×
 */
const CMD_GET_ERROR: number
/**
 * Gets the firmware version.
 * 
 * IN:  [1:cmd]
 * OUT: [1:retval][1:cmd][2:major][2:minor][2:micro]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ✓       |      ✓
 * ColorHug2      |      ✓       |      ✓
 * ColorHug+      |      ✓       |      ✓
 * ColorHugALS    |      ✓       |      ✓
 */
const CMD_GET_FIRMWARE_VERSION: number
/**
 * Get the hardware version.
 * 
 * The hardware versions are as follows:
 * 0x00		= Pre-production hardware
 * 0x01		= ColorHug
 * 0x02		= ColorHug2
 * 0x03		= ColorHug+
 * 0x04		= ColorHugALS
 * 0x05-0x0f	= Reserved for future use
 * 
 * IN:  [1:cmd]
 * OUT: [1:retval][1:cmd][1:hw_version]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ✓       |      ✓
 * ColorHug2      |      ✓       |      ✓
 * ColorHug+      |      ✓       |      ✓
 * ColorHugALS    |      ✓       |      ✓
 */
const CMD_GET_HARDWARE_VERSION: number
/**
 * Get the illuminant state.
 * 
 * IN:  [1:cmd]
 * OUT: [1:retval][1:cmd][1:illuminants]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ×
 * ColorHug2      |      ×       |      ×
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ×
 */
const CMD_GET_ILLUMINANTS: number
/**
 * Gets the integral time.
 * 
 * IN:  [1:cmd]
 * OUT: [1:retval][1:cmd][2:integral_time]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ✓
 * ColorHug2      |      ×       |      ×
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ✓
 */
const CMD_GET_INTEGRAL_TIME: number
/**
 * Get the LED state.
 * 
 * IN:  [1:cmd]
 * OUT: [1:retval][1:cmd][1:led_state]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ✓
 * ColorHug2      |      ×       |      ✓
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ✓       |      ✓
 */
const CMD_GET_LEDS: number
/**
 * Gets the measurement mode.
 * 
 * IN:  [1:cmd]
 * OUT: [1:retval][1:cmd][1:measure_mode]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ✓
 * ColorHug2      |      ×       |      ×
 * ColorHug+      |      ×       |      ×
 * ColorHugALS    |      ×       |      ×
 */
const CMD_GET_MEASURE_MODE: number
/**
 * Gets the multiplier value.
 * 
 * IN:  [1:cmd]
 * OUT: [1:retval][1:cmd][1:multiplier_value]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ✓
 * ColorHug2      |      ×       |      ×
 * ColorHug+      |      ×       |      ×
 * ColorHugALS    |      ×       |      ✓
 */
const CMD_GET_MULTIPLIER: number
/**
 * Get User's Email Address
 * 
 * IN:  [1:cmd]
 * OUT: [1:retval][1:cmd][60:owner-email]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ✓
 * ColorHug2      |      ×       |      ✓
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ×
 */
const CMD_GET_OWNER_EMAIL: number
/**
 * Get User's Name
 * 
 * IN:  [1:cmd]
 * OUT: [1:retval][1:cmd][60:owner-name]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ✓
 * ColorHug2      |      ×       |      ✓
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ×
 */
const CMD_GET_OWNER_NAME: number
/**
 * Gets the board errata value.
 * 
 * IN:  [1:cmd]
 * OUT: [1:retval][1:cmd][2:pcb_errata]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ✓
 * ColorHug2      |      ×       |      ✓
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ×
 */
const CMD_GET_PCB_ERRATA: number
/**
 * Get the post XYZ scaling constant. `scale` is a packed float.
 * 
 * IN:  [1:cmd]
 * OUT: [1:retval][1:cmd][4:scale]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ✓
 * ColorHug2      |      ×       |      ×
 * ColorHug+      |      ×       |      ×
 * ColorHugALS    |      ×       |      ×
 */
const CMD_GET_POST_SCALE: number
/**
 * Get the pre XYZ scaling constant. `scale` is a packed float.
 * 
 * IN:  [1:cmd]
 * OUT: [1:retval][1:cmd][4:scale]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ✓
 * ColorHug2      |      ×       |      ×
 * ColorHug+      |      ×       |      ×
 * ColorHugALS    |      ×       |      ×
 */
const CMD_GET_PRE_SCALE: number
/**
 * Gets the remote hash which is used to get the last profile saved
 * to a public web service.
 * 
 * IN:  [1:cmd]
 * OUT: [1:retval][1:cmd][20:sha1_hash]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ✓
 * ColorHug2      |      ×       |      ✓
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ×
 */
const CMD_GET_REMOTE_HASH: number
/**
 * Gets the device serial number.
 * 
 * IN:  [1:cmd]
 * OUT: [1:retval][1:cmd][4:serial_number]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ✓
 * ColorHug2      |      ×       |      ✓
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ✓
 */
const CMD_GET_SERIAL_NUMBER: number
/**
 * Gets the temperature of the sensor in degrees celsius
 * 
 * IN:  [1:cmd]
 * OUT: [1:retval][1:cmd][4:temperature]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ×
 * ColorHug2      |      ×       |      ✓
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ×
 */
const CMD_GET_TEMPERATURE: number
/**
 * Load the SRAM from the EEPROM.
 * 
 * PROTOCOLv2:
 * bRequest:   [cmd]
 * wValue:     0x00
 * wIndex:     interface
 * wLength:    0x00
 * Direction:  DEVICE->HOST
 * Data:       [1:error][1:cmd]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ×
 * ColorHug2      |      ×       |      ×
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ×
 */
const CMD_LOAD_SRAM: number
/**
 * Read in raw data from the flash memory.
 * 
 * IN:  [1:cmd][2:address][1:length]
 * OUT: [1:retval][1:cmd][1:checksum][1-60:data]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ✓       |      ×
 * ColorHug2      |      ✓       |      ×
 * ColorHug+      |      ✓       |      ×
 * ColorHugALS    |      ✓       |      ×
 */
const CMD_READ_FLASH: number
/**
 * Read in raw data from the SRAM memory.
 * 
 * PROTOCOLv1:
 * IN:  [1:cmd][2:address][1:length]
 * OUT: [1:retval][1:cmd][1-60:data]
 * 
 * PROTOCOLv2:
 * bRequest:   [cmd]
 * wValue:     [address-index/64]
 * wIndex:     interface
 * wLength:    0x64
 * Direction:  DEVICE->HOST
 * Data:       [64:DATA]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ×
 * ColorHug2      |      ×       |      ✓
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ×
 */
const CMD_READ_SRAM: number
/**
 * Reset the processor.
 * 
 * IN:  [1:cmd]
 * OUT: [1:retval][1:cmd] (but with success the device will disconnect)
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ✓       |      ✓
 * ColorHug2      |      ✓       |      ✓
 * ColorHug+      |      ✓       |      ✓
 * ColorHugALS    |      ✓       |      ✓
 */
const CMD_RESET: number
/**
 * Save the SRAM to the EEPROM.
 * 
 * PROTOCOLv2:
 * bRequest:   [cmd]
 * wValue:     0x00
 * wIndex:     interface
 * wLength:    0x00
 * Direction:  DEVICE->HOST
 * Data:       [1:error][1:cmd]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ×
 * ColorHug2      |      ×       |      ×
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ×
 */
const CMD_SAVE_SRAM: number
/**
 * Tests the device by trying to get a non-zero reading from each
 * color channel.
 * 
 * IN:  [1:cmd]
 * OUT: [1:retval][1:cmd]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ✓       |      ✓
 * ColorHug2      |      ✓       |      ✓
 * ColorHug+      |      ✓       |      ✓
 * ColorHugALS    |      ✓       |      ×
 */
const CMD_SELF_TEST: number
/**
 * Sets the calibration matrix.
 * 
 * IN:  [1:cmd][2:index][4*9:matrix_value][1:types][23:description]
 * OUT: [1:retval][1:cmd]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ✓
 * ColorHug2      |      ×       |      ✓
 * ColorHug+      |      ×       |      ×
 * ColorHugALS    |      ×       |      ×
 */
const CMD_SET_CALIBRATION: number
/**
 * Set the calibration type to index map.
 * 
 * IN:  [1:cmd][6*2:types]
 * OUT: [1:retval][1:cmd]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ✓
 * ColorHug2      |      ×       |      ✓
 * ColorHug+      |      ×       |      ×
 * ColorHugALS    |      ×       |      ×
 */
const CMD_SET_CALIBRATION_MAP: number
/**
 * Sets the spectral indexes for the RGB calibration.
 * 
 * IN:  [1:cmd][2:red-idx][2:green-idx][2:blue-idx]
 * OUT: [1:retval][1:cmd]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ×
 * ColorHug2      |      ×       |      ×
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ×
 */
const CMD_SET_CCD_CALIBRATION: number
/**
 * Set the color select state.
 * 
 * IN:  [1:cmd][1:color_select]
 * OUT: [1:retval][1:cmd]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ✓
 * ColorHug2      |      ×       |      ×
 * ColorHug+      |      ×       |      ×
 * ColorHugALS    |      ×       |      ✓
 */
const CMD_SET_COLOR_SELECT: number
/**
 * Sets the 128 bit encyption key for the device.
 * 
 * PROTOCOLv2:
 * bRequest:   [cmd]
 * wValue:     0x00
 * wIndex:     interface
 * wLength:    0x00
 * Direction:  DEVICE->HOST
 * Data:       [4:key0][4:key1][4:key2][4:key3]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ×
 * ColorHug2      |      ×       |      ×
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ×
 */
const CMD_SET_CRYPTO_KEY: number
/**
 * Set the DAC value. `scale` is a packed float, where 1.0f is 3.3V
 * 
 * IN:  [1:cmd][4:value]
 * OUT: [1:retval][1:cmd]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ×
 * ColorHug2      |      ×       |      ×
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ×
 */
const CMD_SET_DAC_VALUE: number
/**
 * Set the dark offsets for use when taking samples when the measure
 * mode is FREQUENCY. When the measure mode is DURATION these values
 * have no effect.
 * 
 * IN:  [1:cmd][2:red][2:green][2:blue]
 * OUT: [1:retval][1:cmd]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ✓
 * ColorHug2      |      ×       |      ×
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ×
 */
const CMD_SET_DARK_OFFSETS: number
/**
 * Sets the result of the firmware flashing. The idea of this command
 * is that the flashing interaction is thus:
 * 
 * 1.	Reset()			device goes to bootloader mode
 * 2.	SetFlashSuccess(FALSE)
 * 3.	WriteFlash($data)
 * 4.	ReadFlash($data)	to verify
 * 5.	BootFlash()		switch to program mode
 * 6.	SetFlashSuccess(TRUE)
 * 
 * The idea is that we only set the success FALSE from the bootoloader
 * to indicate that on booting we should not boot into the program.
 * We can only set the success true from the *new* program code so as
 * to verify that the new program boots, and can accept HID commands.
 * 
 * IN:  [1:cmd][1:success]
 * OUT: [1:retval][1:cmd]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ✓       |      ✓
 * ColorHug2      |      ✓       |      ✓
 * ColorHug+      |      ✓       |      ✓
 * ColorHugALS    |      ✓       |      ✓
 * 
 * Different values of `success` are permitted in each mode.
 */
const CMD_SET_FLASH_SUCCESS: number
/**
 * Set the illuminants.
 * 
 * IN:  [1:cmd][1:illuminant]
 * OUT: [1:retval][1:cmd]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ×
 * ColorHug2      |      ×       |      ×
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ×
 */
const CMD_SET_ILLUMINANTS: number
/**
 * Sets the integral time.
 * 
 * IN:  [1:cmd][2:integral_time]
 * OUT: [1:retval][1:cmd]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ✓
 * ColorHug2      |      ×       |      ×
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ✓
 */
const CMD_SET_INTEGRAL_TIME: number
/**
 * Set the LED state. Using a `repeat` value of anything other than
 * 0 will block the processor for the duration of the command.
 * 
 * If `repeat` is not 0, then the LEDs are reset to all off at the end
 * of the sequence.
 * 
 * IN:  [1:cmd][1:led_state][1:repeat][1:on-time][1:off-time]
 * OUT: [1:retval][1:cmd]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ✓
 * ColorHug2      |      ×       |      ✓
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ✓
 */
const CMD_SET_LEDS: number
/**
 * Sets the measurement mode. The mode can either be frequency or pulse
 * duration. The former is well tested, but the latter is much more
 * precise.
 * 
 * IN:  [1:cmd][1:measure_mode]
 * OUT: [1:retval][1:cmd]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ✓
 * ColorHug2      |      ×       |      ×
 * ColorHug+      |      ×       |      ×
 * ColorHugALS    |      ×       |      ×
 */
const CMD_SET_MEASURE_MODE: number
/**
 * Sets the multiplier value.
 * 
 * IN:  [1:cmd][1:multiplier_value]
 * OUT: [1:retval][1:cmd]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ✓
 * ColorHug2      |      ×       |      ×
 * ColorHug+      |      ×       |      ×
 * ColorHugALS    |      ×       |      ✓
 */
const CMD_SET_MULTIPLIER: number
/**
 * Set User's Email Address
 * 
 * IN:  [1:cmd][60:owner-email]
 * OUT: [1:retval][1:cmd]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ✓
 * ColorHug2      |      ×       |      ✓
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ×
 */
const CMD_SET_OWNER_EMAIL: number
/**
 * Set User's Name
 * 
 * IN:  [1:cmd][60:owner-name]
 * OUT: [1:retval][1:cmd]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ✓
 * ColorHug2      |      ×       |      ✓
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ×
 */
const CMD_SET_OWNER_NAME: number
/**
 * Sets the board errata value. Board errata is used to correct swapped
 * LEDs and any future problems discovered that only affect some batches
 * of hardware version 1.
 * 
 * The errata bitmask is as follows:
 * 0x00		= No errata for this PCB
 * 0x01		= Leds are swapped
 * 0x02-0xffff	= Reserved for future use
 * 
 * IN:  [1:cmd][2:pcb_errata]
 * OUT: [1:retval][1:cmd]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ✓
 * ColorHug2      |      ×       |      ✓
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ×
 */
const CMD_SET_PCB_ERRATA: number
/**
 * Set the post XYZ scaling constant. `scale` is a packed float.
 * 
 * IN:  [1:cmd][4:scale]
 * OUT: [1:retval][1:cmd]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ✓
 * ColorHug2      |      ×       |      ×
 * ColorHug+      |      ×       |      ×
 * ColorHugALS    |      ×       |      ×
 */
const CMD_SET_POST_SCALE: number
/**
 * Set the pre XYZ scaling constant. `scale` is a packed float.
 * 
 * IN:  [1:cmd][4:scale]
 * OUT: [1:retval][1:cmd]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ✓
 * ColorHug2      |      ×       |      ×
 * ColorHug+      |      ×       |      ×
 * ColorHugALS    |      ×       |      ×
 */
const CMD_SET_PRE_SCALE: number
/**
 * Sets the remote SHA1 hash of the profile. This is designed to
 * be used by the calibration program to indicate the key which allows
 * the completed profile to be found from a public web service.
 * 
 * IN:  [1:cmd][20:sha1_hash]
 * OUT: [1:retval][1:cmd]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ✓
 * ColorHug2      |      ×       |      ✓
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ×
 */
const CMD_SET_REMOTE_HASH: number
/**
 * Sets the device serial number.
 * 
 * IN:  [1:cmd][4:serial_number]
 * OUT: [1:retval][1:cmd]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ✓
 * ColorHug2      |      ×       |      ✓
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ×
 */
const CMD_SET_SERIAL_NUMBER: number
/**
 * Take a reading taking into account just dark offsets.
 * All of `red,` `green` and `blue` are packed float values.
 * 
 * This command is useful if you want to do an ambient reading.
 * 
 * IN:  [1:cmd]
 * OUT: [1:retval][1:cmd][4:red][4:green][4:blue]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ✓
 * ColorHug2      |      ×       |      ✓
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ×
 */
const CMD_TAKE_READINGS: number
/**
 * Takes 30 raw samples and returns them in an array.
 * 
 * This command can be used to find the optimum delay between patches
 * by showing a black sample area, then white, and then using this
 * command to find out how long the actual hardware delay is.
 * 
 * It can also be used to find out how stable the device or output is
 * over a small amount of time, typically ~2.5 seconds for the maximum
 * integral time.
 * 
 * IN:  [1:cmd]
 * OUT: [1:retval][1:cmd][30:reading_array]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ✓
 * ColorHug2      |      ×       |      ×
 * ColorHug+      |      ×       |      ×
 * ColorHugALS    |      ×       |      ×
 */
const CMD_TAKE_READING_ARRAY: number
/**
 * Take a raw reading.
 * 
 * IN:  [1:cmd]
 * OUT: [1:retval][1:cmd][4:count]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ✓
 * ColorHug2      |      ×       |      ×
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ✓
 */
const CMD_TAKE_READING_RAW: number
/**
 * Takes a spectral reading putting %CH_CCD_SPECTRAL_RESOLUTION uint16_t values
 * (typically 7296 bytes) in SRAM.
 * The values are scaled from 0x0000 to 0x03ff and correspond to the actual
 * signal amplitude once Vref- and Vref+ have been taken into account.
 * 
 * IN:  [1:cmd]
 * OUT: [1:retval][1:cmd][4:addr]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ×
 * ColorHug2      |      ×       |      ×
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ×
 */
const CMD_TAKE_READING_SPECTRAL: number
/**
 * Take a reading taking into account:
 *  1. dark offsets
 *  2. the calibration matrix
 * 
 * If the calibration index > %CH_CALIBRATION_MAX then the calibration
 * map is used to find the default calibration index to use.
 * 
 * If the calibration index is set to %CH_CALIBRATION_SPECTRAL then the
 * spectral hardware is used if it is available. The CIE 1931 luminosity
 * function data is used by default.
 * 
 * IN:  [1:cmd][2:calibration-index]
 * OUT: [1:retval][1:cmd][4:red][4:green][4:blue]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ✓
 * ColorHug2      |      ×       |      ✓
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ×
 */
const CMD_TAKE_READING_XYZ: number
/**
 * Write values to EEPROM.
 * 
 * IN:  [1:cmd][8:eeprom_magic]
 * OUT: [1:retval][1:cmd]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ✓
 * ColorHug2      |      ×       |      ✓
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ×
 */
const CMD_WRITE_EEPROM: number
/**
 * Write raw data to the flash memory. You can only write aligned to
 * a 32 byte boundary, and you must flush any incomplete 64 byte block.
 * 
 * IN:  [1:cmd][2:address][1:length][1:checksum][1-32:data]
 * OUT: [1:retval][1:cmd]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ✓       |      ×
 * ColorHug2      |      ✓       |      ×
 * ColorHug+      |      ✓       |      ×
 * ColorHugALS    |      ✓       |      ×
 */
const CMD_WRITE_FLASH: number
/**
 * Write raw data to the SRAM memory.
 * 
 * IN:  [1:cmd][2:address][1:length][1-60:data]
 * OUT: [1:retval][1:cmd]
 * 
 * This command is available under these conditions:
 * 
 *                |  Bootloader  |  Firmware
 * ---------------+--------------+-----------
 * ColorHug       |      ×       |      ×
 * ColorHug2      |      ×       |      ✓
 * ColorHug+      |      ×       |      ✓
 * ColorHugALS    |      ×       |      ×
 */
const CMD_WRITE_SRAM: number
const DEVICE_GUID_COLORHUG: string
const DEVICE_GUID_COLORHUG2: string
const DEVICE_GUID_COLORHUG_ALS: string
const DEVICE_GUID_COLORHUG_PLUS: string
const DEVICE_USB_TIMEOUT: number
const EEPROM_ADDR_RUNCODE: number
const EEPROM_ADDR_RUNCODE_ALS: number
const EP0_TRANSFER_SIZE: number
const EP0_TRANSFER_SIZE_V2: number
const FIRMWARE_ID_TOKEN1: string
const FIRMWARE_ID_TOKEN2: string
const FIRMWARE_ID_TOKEN_ALS: string
const FIRMWARE_ID_TOKEN_PLUS: string
const FLASH_ERASE_BLOCK_SIZE: number
const FLASH_RECONNECT_TIMEOUT: number
const FLASH_TRANSFER_BLOCK_SIZE: number
const FLASH_WRITE_BLOCK_SIZE: number
const INTEGRAL_TIME_VALUE_100MS: number
const INTEGRAL_TIME_VALUE_200MS: number
const INTEGRAL_TIME_VALUE_50MS: number
const INTEGRAL_TIME_VALUE_5MS: number
const INTEGRAL_TIME_VALUE_MAX: number
const OWNER_LENGTH_MAX: number
const USB_CONFIG: number
const USB_HID_EP: number
const USB_HID_EP_IN: number
const USB_HID_EP_OUT: number
const USB_HID_EP_SIZE: number
const USB_INTERFACE: number
const USB_PID_BOOTLOADER: number
const USB_PID_BOOTLOADER2: number
const USB_PID_BOOTLOADER_ALS: number
const USB_PID_BOOTLOADER_PLUS: number
const USB_PID_FIRMWARE: number
const USB_PID_FIRMWARE2: number
const USB_PID_FIRMWARE_ALS: number
const USB_PID_FIRMWARE_ALS_SENSOR_HID: number
const USB_PID_FIRMWARE_PLUS: number
const USB_PID_LEGACY: number
const USB_VID: number
const USB_VID_LEGACY: number
const WRITE_EEPROM_MAGIC: string
function color_select_to_string(color_select: ColorSelect): string
function command_to_string(cmd: Cmd): string
function device_check_firmware(device: GUsb.Device, data: number, data_len: number): boolean
function device_close(device: GUsb.Device): boolean
function device_error_quark(): GLib.Quark
function device_get_adc_calibration_neg(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ number ]
function device_get_adc_calibration_pos(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ number ]
function device_get_ccd_calibration(device: GUsb.Device, nm_start: number, c0: number, c1: number, c2: number, cancellable?: Gio.Cancellable | null): boolean
function device_get_error(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* status */ Error, /* cmd */ Cmd ]
function device_get_guid(device: GUsb.Device): string
function device_get_illuminants(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ Illuminant ]
function device_get_integral_time(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ number ]
function device_get_leds(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ StatusLed ]
function device_get_mode(device: GUsb.Device): DeviceMode
function device_get_pcb_errata(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ PcbErrata ]
function device_get_runcode_address(device: GUsb.Device): number
function device_get_serial_number(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ number ]
function device_get_spectrum(device: GUsb.Device, cancellable?: Gio.Cancellable | null): Colord.Spectrum
function device_get_spectrum_full(device: GUsb.Device, kind: SpectrumKind, cancellable?: Gio.Cancellable | null): Colord.Spectrum
function device_get_temperature(device: GUsb.Device, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ number ]
function device_is_colorhug(device: GUsb.Device): boolean
function device_load_sram(device: GUsb.Device, cancellable?: Gio.Cancellable | null): boolean
function device_mode_from_firmware(data: number, data_len: number): DeviceMode
function device_mode_to_string(device_mode: DeviceMode): string
function device_open(device: GUsb.Device): boolean
function device_open_full(device: GUsb.Device, cancellable?: Gio.Cancellable | null): boolean
function device_read_sram(device: GUsb.Device, addr: number, len: number, cancellable?: Gio.Cancellable | null): GLib.Bytes
function device_save_sram(device: GUsb.Device, cancellable?: Gio.Cancellable | null): boolean
function device_self_test(device: GUsb.Device, cancellable?: Gio.Cancellable | null): boolean
function device_set_ccd_calibration(device: GUsb.Device, nm_start: number, c0: number, c1: number, c2: number, cancellable?: Gio.Cancellable | null): boolean
function device_set_crypto_key(device: GUsb.Device, keys: number, cancellable?: Gio.Cancellable | null): boolean
function device_set_illuminants(device: GUsb.Device, value: Illuminant, cancellable?: Gio.Cancellable | null): boolean
function device_set_integral_time(device: GUsb.Device, value: number, cancellable?: Gio.Cancellable | null): boolean
function device_set_leds(device: GUsb.Device, value: StatusLed, cancellable?: Gio.Cancellable | null): boolean
function device_set_pcb_errata(device: GUsb.Device, value: PcbErrata, cancellable?: Gio.Cancellable | null): boolean
function device_set_serial_number(device: GUsb.Device, value: number, cancellable?: Gio.Cancellable | null): boolean
function device_set_spectrum_full(device: GUsb.Device, kind: SpectrumKind, sp: Colord.Spectrum, cancellable?: Gio.Cancellable | null): boolean
function device_take_reading_spectral(device: GUsb.Device, value: SpectrumKind, cancellable?: Gio.Cancellable | null): boolean
function device_take_reading_xyz(device: GUsb.Device, calibration_idx: number, cancellable?: Gio.Cancellable | null): Colord.ColorXYZ
function device_write_command(device: GUsb.Device, cmd: number, buffer_in: number, buffer_in_len: number, buffer_out: number, buffer_out_len: number, cancellable?: Gio.Cancellable | null): boolean
function device_write_command_async(device: GUsb.Device, cmd: number, buffer_in: number, buffer_in_len: number, buffer_out: number, buffer_out_len: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function device_write_command_finish(device: GUsb.Device, res: Gio.AsyncResult): boolean
function device_write_sram(device: GUsb.Device, addr: number, data: GLib.Bytes, cancellable?: Gio.Cancellable | null): boolean
function measure_mode_to_string(measure_mode: MeasureMode): string
function multiplier_to_string(multiplier: FreqScale): string
function sha1_parse(value: string, sha1: Sha1): boolean
function strerror(error_enum: Error): string
interface DeviceQueue_ConstructProps extends GObject.Object_ConstructProps {
}
class DeviceQueue {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of ColorHug-1.0.ColorHug.DeviceQueue */
    /**
     * Adds a raw command to the device queue.
     * @param device A #GUsbDevice
     * @param cmd The command, e.g. %CH_CMD_TAKE_READINGS
     * @param buffer_in The input buffer, or %NULL
     * @param buffer_in_len The size of `buffer_in`
     * @param buffer_out The output buffer, or %NULL
     * @param buffer_out_len The size of `buffer_out`
     */
    add(device: GUsb.Device, cmd: number, buffer_in: number, buffer_in_len: number, buffer_out: number, buffer_out_len: number): void
    /**
     * Boots the device from bootloader to firmware mode.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     */
    boot_flash(device: GUsb.Device): void
    /**
     * Clears a calibration slot.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param calibration_index Slot
     */
    clear_calibration(device: GUsb.Device, calibration_index: number): void
    /**
     * Erase program code on the device.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param address The device EEPROM address
     * @param len The length of `data`
     */
    erase_flash(device: GUsb.Device, address: number, len: number): void
    /**
     * Gets the ADC Vref- calibration value.
     * 
     * NOTE: This command is available on hardware version: 2
     * @param device A #GUsbDevice
     * @param vref The voltage reference, ranging from 0.0 to 3.3V.
     */
    get_adc_vref_neg(device: GUsb.Device, vref: number): void
    /**
     * Gets the ADC Vref+ calibration value.
     * 
     * NOTE: This command is available on hardware version: 2
     * @param device A #GUsbDevice
     * @param vref The voltage reference, ranging from 0.0 to 3.3V.
     */
    get_adc_vref_pos(device: GUsb.Device, vref: number): void
    /**
     * Gets the calibration data.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param calibration_index The slot position
     * @param calibration the 3x3 calibration matrix
     * @param types The types the matrix supports
     * @param description The description of the calibration
     */
    get_calibration(device: GUsb.Device, calibration_index: number, calibration: Colord.Mat3x3, types: number, description: string): void
    /**
     * Gets the calibration map.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param calibration_map An array of slot positions
     */
    get_calibration_map(device: GUsb.Device, calibration_map: number): void
    /**
     * Gets the CCD spectral calibration indexes. These are "pointers" to specific
     * spectral peaks returned by the CCD.
     * 
     * NOTE: This command is available on hardware version: 2
     * @param device A #GUsbDevice
     * @param indexes An array of red, green, blue indexes
     */
    get_ccd_calibration(device: GUsb.Device, indexes: number): void
    /**
     * Gets the selected sensor color.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param color_select The color select, e.g. %CH_COLOR_SELECT_RED
     */
    get_color_select(device: GUsb.Device, color_select: ColorSelect): void
    /**
     * Gets the DAC value.
     * 
     * NOTE: This command is available on hardware version: 2
     * @param device A #GUsbDevice
     * @param dac_value value between 0.0 and 0.99
     */
    get_dac_value(device: GUsb.Device, dac_value: number): void
    /**
     * Gets the device dark offsets.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param value A #CdColorRGB
     */
    get_dark_offsets(device: GUsb.Device, value: Colord.ColorRGB): void
    /**
     * Gets the firmware version.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param major The firmware major version
     * @param minor The firmware minor version
     * @param micro The firmware micro version
     */
    get_firmware_ver(device: GUsb.Device, major: number, minor: number, micro: number): void
    /**
     * Gets the hardware version.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param hw_version The hardware version
     */
    get_hardware_version(device: GUsb.Device, hw_version: number): void
    /**
     * Gets the reading integral time.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param integral_time The sensor integral time in device units
     */
    get_integral_time(device: GUsb.Device, integral_time: number): void
    /**
     * Gets the LED status.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param leds The LED bitfield
     */
    get_leds(device: GUsb.Device, leds: number): void
    /**
     * Gets the measurement mode.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param measure_mode The #ChMeasureMode, e.g. %CH_MEASURE_MODE_DURATION
     */
    get_measure_mode(device: GUsb.Device, measure_mode: MeasureMode): void
    /**
     * Gets the sensor multiplier.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param multiplier The device multiplier, e.g. %CH_FREQ_SCALE_100
     */
    get_multiplier(device: GUsb.Device, multiplier: FreqScale): void
    /**
     * Gets the owner email address.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param email An email address
     */
    get_owner_email(device: GUsb.Device, email: string): void
    /**
     * Gets the owner name.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param name The owner name
     */
    get_owner_name(device: GUsb.Device, name: string): void
    /**
     * Gets the PCB errata level.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param pcb_errata The PCB errata, e.g. %CH_PCB_ERRATA_SWAPPED_LEDS
     */
    get_pcb_errata(device: GUsb.Device, pcb_errata: number): void
    /**
     * Gets the post scale value.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param post_scale The post-scale value
     */
    get_post_scale(device: GUsb.Device, post_scale: number): void
    /**
     * Gets the pre scale value.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param pre_scale Pre-scale value
     */
    get_pre_scale(device: GUsb.Device, pre_scale: number): void
    /**
     * Gets the remote hash stored on the device.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param remote_hash A #ChSha1
     */
    get_remote_hash(device: GUsb.Device, remote_hash: Sha1): void
    /**
     * Gets the device serial number.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param serial_number The device serial number
     */
    get_serial_number(device: GUsb.Device, serial_number: number): void
    /**
     * Gets the device temperature.
     * 
     * NOTE: This command is available on hardware version: 2
     * @param device A #GUsbDevice
     * @param temperature Temperature in Celcius
     */
    get_temperature(device: GUsb.Device, temperature: number): void
    /**
     * Processes all commands in the command queue.
     * WARNING: this function is syncronous and will block.
     * @param process_flags Flags how to process the queue, e.g. %CH_DEVICE_QUEUE_PROCESS_FLAGS_CONTINUE_ERRORS
     * @param cancellable #GCancellable or %NULL
     */
    process(process_flags: DeviceQueueProcessFlags, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Processes all commands in the command queue.
     * @param process_flags 
     * @param cancellable A #GCancellable, or %NULL
     * @param callback A #GAsyncReadyCallback that will be called when finished.
     */
    process_async(process_flags: DeviceQueueProcessFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    process_finish(res: Gio.AsyncResult): boolean
    /**
     * Reads firmware on the device.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param data Firmware binary data
     * @param len Size of `data`
     */
    read_firmware(device: GUsb.Device, data: number, len: number): void
    /**
     * Read flash code from the device.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param address The device EEPROM address
     * @param data Binary data
     * @param len The length of `data`
     */
    read_flash(device: GUsb.Device, address: number, data: number, len: number): void
    /**
     * Reads binary data from the SRAM.
     * 
     * NOTE: This command is available on hardware version: 2
     * @param device A #GUsbDevice
     * @param address The device memory address
     * @param data The binary data
     * @param len Size of `data`
     */
    read_sram(device: GUsb.Device, address: number, data: number, len: number): void
    /**
     * Resets the device back to bootloader mode.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     */
    reset(device: GUsb.Device): void
    /**
     * Performs some self tests on the device.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     */
    self_test(device: GUsb.Device): void
    /**
     * Sets the calibration data.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param calibration_index The slot position
     * @param calibration the 3x3 calibration matrix
     * @param types The types the matrix supports
     * @param description The description of the calibration
     */
    set_calibration(device: GUsb.Device, calibration_index: number, calibration: Colord.Mat3x3, types: number, description: string): void
    set_calibration_ccmx(device: GUsb.Device, calibration_index: number, ccmx: Colord.It8): boolean
    /**
     * Sets the calibration map.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param calibration_map An array of slot positions
     */
    set_calibration_map(device: GUsb.Device, calibration_map: number): void
    /**
     * Sets the CCD spectral calibration indexes. These are "pointers" to specific
     * spectral peaks returned by the CCD.
     * 
     * NOTE: This command is available on hardware version: 2
     * @param device A #GUsbDevice
     * @param indexes An array of red, green, blue indexes
     */
    set_ccd_calibration(device: GUsb.Device, indexes: number): void
    /**
     * Sets the sensor measurement color.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param color_select The color select, e.g. %CH_COLOR_SELECT_RED
     */
    set_color_select(device: GUsb.Device, color_select: ColorSelect): void
    /**
     * Sets the post scale value.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param dac_value The DAC value
     */
    set_dac_value(device: GUsb.Device, dac_value: number): void
    /**
     * Sets the device dark offsets.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param value A #CdColorRGB
     */
    set_dark_offsets(device: GUsb.Device, value: Colord.ColorRGB): void
    /**
     * Sets the firmware flash sucess value.
     * Be careful using this function as misuse can result in a 'bricked'
     * ColorHug device.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param value Success value
     */
    set_flash_success(device: GUsb.Device, value: number): void
    /**
     * Sets the reading integral time.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param integral_time The sensor integral time in device units
     */
    set_integral_time(device: GUsb.Device, integral_time: number): void
    /**
     * Sets the LED status.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param leds The LEDs bitfield
     * @param repeat Sets the number of times to repeat the pattern
     * @param on_time Set the on time
     * @param off_time Set the off time
     */
    set_leds(device: GUsb.Device, leds: number, repeat: number, on_time: number, off_time: number): void
    /**
     * Sets the measurement mode.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param measure_mode The #ChMeasureMode, e.g. %CH_MEASURE_MODE_DURATION
     */
    set_measure_mode(device: GUsb.Device, measure_mode: MeasureMode): void
    /**
     * Sets the sensor multiplier.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param multiplier The device multiplier, e.g. %CH_FREQ_SCALE_100
     */
    set_multiplier(device: GUsb.Device, multiplier: FreqScale): void
    /**
     * Sets the owner email address.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param email An email address
     */
    set_owner_email(device: GUsb.Device, email: string): void
    /**
     * Sets the owner name.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param name The owner name
     */
    set_owner_name(device: GUsb.Device, name: string): void
    /**
     * Sets the PCB board errata.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param pcb_errata The PCB errata, e.g. %CH_PCB_ERRATA_SWAPPED_LEDS
     */
    set_pcb_errata(device: GUsb.Device, pcb_errata: number): void
    /**
     * Sets the post scale value.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param post_scale The post-scale value
     */
    set_post_scale(device: GUsb.Device, post_scale: number): void
    /**
     * Sets the pre-scale value.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param pre_scale Pre-scale value
     */
    set_pre_scale(device: GUsb.Device, pre_scale: number): void
    /**
     * Sets the remote hash on the device.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param remote_hash A #ChSha1
     */
    set_remote_hash(device: GUsb.Device, remote_hash: Sha1): void
    /**
     * Sets the device serial number.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param serial_number The device serial number
     */
    set_serial_number(device: GUsb.Device, serial_number: number): void
    /**
     * Get an array of raw readings in quick succession.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param reading_array An array of raw readings
     */
    take_reading_array(device: GUsb.Device, reading_array: number): void
    /**
     * Take a raw reading from the sensor.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param take_reading A raw reading value
     */
    take_reading_raw(device: GUsb.Device, take_reading: number): void
    /**
     * Takes a raw spectral reading.
     * 
     * NOTE: This command is available on hardware version: 2
     * @param device A #GUsbDevice
     * @param sram_addr The SRAM location where the data is held
     */
    take_reading_spectral(device: GUsb.Device, sram_addr: number): void
    /**
     * Take a RGB triplet of readings from the sensor without applying the
     * calibration matrix.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param value The #CdColorRGB of the raw reading
     */
    take_readings(device: GUsb.Device, value: Colord.ColorRGB): void
    /**
     * Take an XYZ fully cooked reading from the sensor.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param calibration_index 
     * @param value The #CdColorXYZ for a given calibration slot
     */
    take_readings_xyz(device: GUsb.Device, calibration_index: number, value: Colord.ColorXYZ): void
    /**
     * Verifies firmware on the device.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param data Firmware binary data
     * @param len Size of `data`
     */
    verify_firmware(device: GUsb.Device, data: number, len: number): void
    /**
     * Verify flash code from the device.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param address The device EEPROM address
     * @param data Binary data
     * @param len The length of `data`
     */
    verify_flash(device: GUsb.Device, address: number, data: number, len: number): void
    /**
     * Writes values to the firmware to be set at device startup.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param magic The magic sekret string
     */
    write_eeprom(device: GUsb.Device, magic: string): void
    /**
     * Writes new firmware to the device.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param data Firmware binary data
     * @param len Size of `data`
     */
    write_firmware(device: GUsb.Device, data: number, len: number): void
    /**
     * Write flash code to the device.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param address The device EEPROM address
     * @param data Binary data
     * @param len The length of `data`
     */
    write_flash(device: GUsb.Device, address: number, data: number, len: number): void
    /**
     * Writes binary data to the SRAM.
     * 
     * NOTE: This command is available on hardware version: 2
     * @param device A #GUsbDevice
     * @param address The device memory address
     * @param data The binary data
     * @param len Size of `data`
     */
    write_sram(device: GUsb.Device, address: number, data: number, len: number): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of ColorHug-1.0.ColorHug.DeviceQueue */
    vfunc_device_failed(device: GUsb.Device, error_message: string): void
    vfunc_progress_changed(percentage: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of ColorHug-1.0.ColorHug.DeviceQueue */
    connect(sigName: "device-failed", callback: (($obj: DeviceQueue, object: GObject.Object, p0: string) => void)): number
    connect_after(sigName: "device-failed", callback: (($obj: DeviceQueue, object: GObject.Object, p0: string) => void)): number
    emit(sigName: "device-failed", object: GObject.Object, p0: string): void
    connect(sigName: "progress-changed", callback: (($obj: DeviceQueue, object: number) => void)): number
    connect_after(sigName: "progress-changed", callback: (($obj: DeviceQueue, object: number) => void)): number
    emit(sigName: "progress-changed", object: number): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: DeviceQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceQueue_ConstructProps)
    _init (config?: DeviceQueue_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): DeviceQueue
    static $gtype: GObject.Type
}
abstract class DeviceQueueClass {
    /* Fields of ColorHug-1.0.ColorHug.DeviceQueueClass */
    parent_class: GObject.ObjectClass
    device_failed: (device_queue: DeviceQueue, device: GUsb.Device, error_message: string) => void
    progress_changed: (device_queue: DeviceQueue, percentage: number) => void
    static name: string
}
class Sha1 {
    /* Fields of ColorHug-1.0.ColorHug.Sha1 */
    bytes: Uint8Array
    /* Methods of ColorHug-1.0.ColorHug.Sha1 */
    /**
     * Gets a string representation of the SHA1 hash.
     */
    to_string(): string
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Parses a SHA1 hash from a string value.
     * @param value A string representation of the SHA1 hash
     * @param sha1 A %ChSha1
     */
    static parse(value: string, sha1: Sha1): boolean
}
    type Cmd = number
}
export default ColorHug;