
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-colorhug-1.0-import.d.ts';
    
/**
 * ColorHug-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GUsb from '@girs/gusb-1.0';
import type Json from '@girs/json-1.0';
import type Colord from '@girs/colord-1.0';

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
 * @bitfield 
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
const DEVICE_GUID_COLORHUG: string | null
const DEVICE_GUID_COLORHUG2: string | null
const DEVICE_GUID_COLORHUG_ALS: string | null
const DEVICE_GUID_COLORHUG_PLUS: string | null
const DEVICE_USB_TIMEOUT: number
const EEPROM_ADDR_RUNCODE: number
const EEPROM_ADDR_RUNCODE_ALS: number
const EP0_TRANSFER_SIZE: number
const EP0_TRANSFER_SIZE_V2: number
const FIRMWARE_ID_TOKEN1: string | null
const FIRMWARE_ID_TOKEN2: string | null
const FIRMWARE_ID_TOKEN_ALS: string | null
const FIRMWARE_ID_TOKEN_PLUS: string | null
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
const WRITE_EEPROM_MAGIC: string | null
function colorSelectToString(colorSelect: ColorSelect): string | null
function commandToString(cmd: Cmd): string | null
/**
 * Checks the firmware is suitable for the ColorHug device that is attached.
 * @param device 
 * @param data firmware binary data
 * @param dataLen size of `data`
 * @returns %TRUE if the command was executed successfully.
 */
function deviceCheckFirmware(device: GUsb.Device, data: number, dataLen: number): boolean
function deviceClose(device: GUsb.Device): boolean
function deviceErrorQuark(): GLib.Quark
/**
 * Gets the ADC positive calibration value.
 * @param device A #GUsbDevice
 * @param cancellable a #GCancellable, or %NULL
 * @returns %TRUE for success
 */
function deviceGetAdcCalibrationNeg(device: GUsb.Device, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ number ]
/**
 * Gets the ADC positive calibration value.
 * @param device A #GUsbDevice
 * @param cancellable a #GCancellable, or %NULL
 * @returns %TRUE for success
 */
function deviceGetAdcCalibrationPos(device: GUsb.Device, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ number ]
/**
 * Gets any PCB wavelength_cal from the device.
 * @param device A #GUsbDevice
 * @param nmStart 
 * @param c0 
 * @param c1 
 * @param c2 
 * @param cancellable a #GCancellable, or %NULL
 * @returns %TRUE for success
 */
function deviceGetCcdCalibration(device: GUsb.Device, nmStart: number, c0: number, c1: number, c2: number, cancellable: Gio.Cancellable | null): boolean
/**
 * Gets the status for the last operation.
 * @param device A #GUsbDevice
 * @param cancellable a #GCancellable, or %NULL
 * @returns %TRUE for success
 */
function deviceGetError(device: GUsb.Device, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* status */ Error, /* cmd */ Cmd ]
/**
 * Returns the GUID for the connected ColorHug device.
 * @param device A #GUsbDevice
 * @returns the GUID address, or %NULL for error
 */
function deviceGetGuid(device: GUsb.Device): string | null
/**
 * Gets the illuminants from the device.
 * @param device A #GUsbDevice
 * @param cancellable a #GCancellable, or %NULL
 * @returns %TRUE for success
 */
function deviceGetIlluminants(device: GUsb.Device, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ Illuminant ]
/**
 * Gets the integration time used for taking the next samples.
 * @param device A #GUsbDevice
 * @param cancellable a #GCancellable, or %NULL
 * @returns %TRUE for success
 */
function deviceGetIntegralTime(device: GUsb.Device, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ number ]
/**
 * Gets the LEDs from the device.
 * @param device A #GUsbDevice
 * @param cancellable a #GCancellable, or %NULL
 * @returns %TRUE for success
 */
function deviceGetLeds(device: GUsb.Device, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ StatusLed ]
function deviceGetMode(device: GUsb.Device): DeviceMode
/**
 * Gets any PCB errata from the device.
 * @param device A #GUsbDevice
 * @param cancellable a #GCancellable, or %NULL
 * @returns %TRUE for success
 */
function deviceGetPcbErrata(device: GUsb.Device, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ PcbErrata ]
/**
 * Returns the runcode address for the ColorHug device.
 * @param device A #GUsbDevice
 * @returns the runcode address, or 0 for error
 */
function deviceGetRuncodeAddress(device: GUsb.Device): number
/**
 * Gets the serial number from the device.
 * @param device A #GUsbDevice
 * @param cancellable a #GCancellable, or %NULL
 * @returns %TRUE for success
 */
function deviceGetSerialNumber(device: GUsb.Device, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ number ]
/**
 * Gets the spectrum from the device. This queries the device multiple times
 * until the spectrum has been populated.
 * @param device A #GUsbDevice
 * @param cancellable a #GCancellable, or %NULL
 * @returns a #CdSpectrum, or %NULL for error
 */
function deviceGetSpectrum(device: GUsb.Device, cancellable: Gio.Cancellable | null): Colord.Spectrum
/**
 * Gets the spectrum from the device. This queries the device multiple times
 * until the spectrum has been populated.
 * @param device A #GUsbDevice
 * @param kind A #ChSpectrumKind
 * @param cancellable a #GCancellable, or %NULL
 * @returns a #CdSpectrum, or %NULL for error
 */
function deviceGetSpectrumFull(device: GUsb.Device, kind: SpectrumKind, cancellable: Gio.Cancellable | null): Colord.Spectrum
/**
 * Gets the PCB board temperature from the device.
 * @param device A #GUsbDevice
 * @param cancellable a #GCancellable, or %NULL
 * @returns %TRUE for success
 */
function deviceGetTemperature(device: GUsb.Device, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* value */ number ]
function deviceIsColorhug(device: GUsb.Device): boolean
/**
 * Loads the entire SRAM from the device EEPROM.
 * @param device A #GUsbDevice
 * @param cancellable a #GCancellable, or %NULL
 * @returns %TRUE for success
 */
function deviceLoadSram(device: GUsb.Device, cancellable: Gio.Cancellable | null): boolean
/**
 * Gets the device mode from the unique code stored in the firmware data.
 * The firmware identifier has been present since colorhug-1.2.2.bin for
 * ColorHug and all firmware versions for ColorHug2 and ColorHug+.
 * @param data firmware binary data
 * @param dataLen size of `data`
 * @returns A #ChDeviceMode
 */
function deviceModeFromFirmware(data: number, dataLen: number): DeviceMode
function deviceModeToString(deviceMode: DeviceMode): string | null
function deviceOpen(device: GUsb.Device): boolean
/**
 * Opens the device ready for use.
 * @param device A #GUsbDevice
 * @param cancellable a #GCancellable, or %NULL
 * @returns %TRUE for success
 */
function deviceOpenFull(device: GUsb.Device, cancellable: Gio.Cancellable | null): boolean
/**
 * Reads a value from the SRAM.
 * @param device A #GUsbDevice
 * @param addr 
 * @param len 
 * @param cancellable a #GCancellable, or %NULL
 * @returns %TRUE for success
 */
function deviceReadSram(device: GUsb.Device, addr: number, len: number, cancellable: Gio.Cancellable | null): any
/**
 * Saves the entire SRAM space into the device EEPROM.
 * @param device A #GUsbDevice
 * @param cancellable a #GCancellable, or %NULL
 * @returns %TRUE for success
 */
function deviceSaveSram(device: GUsb.Device, cancellable: Gio.Cancellable | null): boolean
/**
 * Performs a self test on the device
 * @param device A #GUsbDevice
 * @param cancellable a #GCancellable, or %NULL
 * @returns %TRUE for success
 */
function deviceSelfTest(device: GUsb.Device, cancellable: Gio.Cancellable | null): boolean
/**
 * Sets any PCB wavelength_cal on the device
 * @param device A #GUsbDevice
 * @param nmStart 
 * @param c0 
 * @param c1 
 * @param c2 
 * @param cancellable a #GCancellable, or %NULL
 * @returns %TRUE for success
 */
function deviceSetCcdCalibration(device: GUsb.Device, nmStart: number, c0: number, c1: number, c2: number, cancellable: Gio.Cancellable | null): boolean
/**
 * Sets the firmware signing keys on the device.
 * 
 * IMPORTANT: This can only be called once until the device is unlocked.
 * @param device A #GUsbDevice
 * @param keys a set of XTEA keys
 * @param cancellable a #GCancellable, or %NULL
 * @returns %TRUE for success
 */
function deviceSetCryptoKey(device: GUsb.Device, keys: number, cancellable: Gio.Cancellable | null): boolean
/**
 * Sets the illuminants on the device
 * @param device A #GUsbDevice
 * @param value serial number
 * @param cancellable a #GCancellable, or %NULL
 * @returns %TRUE for success
 */
function deviceSetIlluminants(device: GUsb.Device, value: Illuminant, cancellable: Gio.Cancellable | null): boolean
/**
 * Sets the integration value for the next sample.
 * @param device A #GUsbDevice
 * @param value integration time in ms
 * @param cancellable a #GCancellable, or %NULL
 * @returns %TRUE for success
 */
function deviceSetIntegralTime(device: GUsb.Device, value: number, cancellable: Gio.Cancellable | null): boolean
/**
 * Sets the LEDs on the device
 * @param device A #GUsbDevice
 * @param value serial number
 * @param cancellable a #GCancellable, or %NULL
 * @returns %TRUE for success
 */
function deviceSetLeds(device: GUsb.Device, value: StatusLed, cancellable: Gio.Cancellable | null): boolean
/**
 * Sets any PCB errata on the device
 * @param device A #GUsbDevice
 * @param value #ChPcbErrata, e.g. %CH_PCB_ERRATA_SWAPPED_LEDS
 * @param cancellable a #GCancellable, or %NULL
 * @returns %TRUE for success
 */
function deviceSetPcbErrata(device: GUsb.Device, value: PcbErrata, cancellable: Gio.Cancellable | null): boolean
/**
 * Sets the serial number on the device
 * @param device A #GUsbDevice
 * @param value serial number
 * @param cancellable a #GCancellable, or %NULL
 * @returns %TRUE for success
 */
function deviceSetSerialNumber(device: GUsb.Device, value: number, cancellable: Gio.Cancellable | null): boolean
/**
 * Sets the spectrum from the device. This sends data multiple multiple times
 * until the spectrum has been populated.
 * @param device A #GUsbDevice
 * @param kind A #ChSpectrumKind
 * @param sp A #CdSpectrum
 * @param cancellable a #GCancellable, or %NULL
 * @returns %TRUE for success
 */
function deviceSetSpectrumFull(device: GUsb.Device, kind: SpectrumKind, sp: Colord.Spectrum, cancellable: Gio.Cancellable | null): boolean
/**
 * Takes a reading from the device.
 * @param device A #GUsbDevice
 * @param value a #ChSpectrumKind, e.g. %CH_SPECTRUM_KIND_RAW
 * @param cancellable a #GCancellable, or %NULL
 * @returns %TRUE for success
 */
function deviceTakeReadingSpectral(device: GUsb.Device, value: SpectrumKind, cancellable: Gio.Cancellable | null): boolean
/**
 * Takes a reading from the device and returns the XYZ value.
 * @param device A #GUsbDevice
 * @param calibrationIdx A calibration index or 0 for none
 * @param cancellable a #GCancellable, or %NULL
 * @returns a #CdColorXYZ, or %NULL for error
 */
function deviceTakeReadingXyz(device: GUsb.Device, calibrationIdx: number, cancellable: Gio.Cancellable | null): Colord.ColorXYZ
/**
 * Sends a message to the device and waits for a reply.
 * @param device A #GUsbDevice
 * @param cmd The command to use, e.g. %CH_CMD_GET_COLOR_SELECT
 * @param bufferIn The input buffer of data, or %NULL
 * @param bufferInLen The input buffer length
 * @param bufferOut The output buffer of data, or %NULL
 * @param bufferOutLen The output buffer length
 * @param cancellable A #GCancellable or %NULL
 * @returns %TRUE if the command was executed successfully.
 */
function deviceWriteCommand(device: GUsb.Device, cmd: number, bufferIn: number, bufferInLen: number, bufferOut: number, bufferOutLen: number, cancellable: Gio.Cancellable | null): boolean
/**
 * Sends a message to the device and waits for a reply.
 * @param device A #GUsbDevice
 * @param cmd The command to use, e.g. %CH_CMD_GET_COLOR_SELECT
 * @param bufferIn The input buffer of data, or %NULL
 * @param bufferInLen The input buffer length
 * @param bufferOut The output buffer of data, or %NULL
 * @param bufferOutLen The output buffer length
 * @param cancellable A #GCancellable, or %NULL
 * @param callback A #GAsyncReadyCallback that will be called when finished.
 */
function deviceWriteCommandAsync(device: GUsb.Device, cmd: number, bufferIn: number, bufferInLen: number, bufferOut: number, bufferOutLen: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
/**
 * Gets the result from the asynchronous function.
 * @param device a #GUsbDevice instance.
 * @param res the #GAsyncResult
 * @returns %TRUE if the request was fulfilled.
 */
function deviceWriteCommandFinish(device: GUsb.Device, res: Gio.AsyncResult): boolean
/**
 * Loads the entire SRAM from the device EEPROM.
 * @param device A #GUsbDevice
 * @param addr 
 * @param data A #GBytes
 * @param cancellable a #GCancellable, or %NULL
 * @returns %TRUE for success
 */
function deviceWriteSram(device: GUsb.Device, addr: number, data: any, cancellable: Gio.Cancellable | null): boolean
function measureModeToString(measureMode: MeasureMode): string | null
function multiplierToString(multiplier: FreqScale): string | null
/**
 * Parses a SHA1 hash from a string value.
 * @param value A string representation of the SHA1 hash
 * @param sha1 A %ChSha1
 * @returns %TRUE for success
 */
function sha1Parse(value: string | null, sha1: Sha1): boolean
function strerror(errorEnum: Error): string | null
module DeviceQueue {

    // Signal callback interfaces

    /**
     * Signal callback interface for `device-failed`
     */
    interface DeviceFailedSignalCallback {
        (object: GObject.Object, p0: string | null): void
    }

    /**
     * Signal callback interface for `progress-changed`
     */
    interface ProgressChangedSignalCallback {
        (object: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface DeviceQueue {

    // Own properties of ColorHug-1.0.ColorHug.DeviceQueue

    __gtype__: number

    // Own fields of ColorHug-1.0.ColorHug.DeviceQueue

    parentInstance: GObject.Object

    // Owm methods of ColorHug-1.0.ColorHug.DeviceQueue

    /**
     * Adds a raw command to the device queue.
     * @param device A #GUsbDevice
     * @param cmd The command, e.g. %CH_CMD_TAKE_READINGS
     * @param bufferIn The input buffer, or %NULL
     * @param bufferInLen The size of `buffer_in`
     * @param bufferOut The output buffer, or %NULL
     * @param bufferOutLen The size of `buffer_out`
     */
    add(device: GUsb.Device, cmd: number, bufferIn: number, bufferInLen: number, bufferOut: number, bufferOutLen: number): void
    /**
     * Boots the device from bootloader to firmware mode.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     */
    bootFlash(device: GUsb.Device): void
    /**
     * Clears a calibration slot.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param calibrationIndex Slot
     */
    clearCalibration(device: GUsb.Device, calibrationIndex: number): void
    /**
     * Erase program code on the device.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param address The device EEPROM address
     * @param len The length of `data`
     */
    eraseFlash(device: GUsb.Device, address: number, len: number): void
    /**
     * Gets the ADC Vref- calibration value.
     * 
     * NOTE: This command is available on hardware version: 2
     * @param device A #GUsbDevice
     * @param vref The voltage reference, ranging from 0.0 to 3.3V.
     */
    getAdcVrefNeg(device: GUsb.Device, vref: number): void
    /**
     * Gets the ADC Vref+ calibration value.
     * 
     * NOTE: This command is available on hardware version: 2
     * @param device A #GUsbDevice
     * @param vref The voltage reference, ranging from 0.0 to 3.3V.
     */
    getAdcVrefPos(device: GUsb.Device, vref: number): void
    /**
     * Gets the calibration data.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param calibrationIndex The slot position
     * @param calibration the 3x3 calibration matrix
     * @param types The types the matrix supports
     * @param description The description of the calibration
     */
    getCalibration(device: GUsb.Device, calibrationIndex: number, calibration: Colord.Mat3x3, types: number, description: string | null): void
    /**
     * Gets the calibration map.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param calibrationMap An array of slot positions
     */
    getCalibrationMap(device: GUsb.Device, calibrationMap: number): void
    /**
     * Gets the CCD spectral calibration indexes. These are "pointers" to specific
     * spectral peaks returned by the CCD.
     * 
     * NOTE: This command is available on hardware version: 2
     * @param device A #GUsbDevice
     * @param indexes An array of red, green, blue indexes
     */
    getCcdCalibration(device: GUsb.Device, indexes: number): void
    /**
     * Gets the selected sensor color.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param colorSelect The color select, e.g. %CH_COLOR_SELECT_RED
     */
    getColorSelect(device: GUsb.Device, colorSelect: ColorSelect): void
    /**
     * Gets the DAC value.
     * 
     * NOTE: This command is available on hardware version: 2
     * @param device A #GUsbDevice
     * @param dacValue value between 0.0 and 0.99
     */
    getDacValue(device: GUsb.Device, dacValue: number): void
    /**
     * Gets the device dark offsets.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param value A #CdColorRGB
     */
    getDarkOffsets(device: GUsb.Device, value: Colord.ColorRGB): void
    /**
     * Gets the firmware version.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param major The firmware major version
     * @param minor The firmware minor version
     * @param micro The firmware micro version
     */
    getFirmwareVer(device: GUsb.Device, major: number, minor: number, micro: number): void
    /**
     * Gets the hardware version.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param hwVersion The hardware version
     */
    getHardwareVersion(device: GUsb.Device, hwVersion: number): void
    /**
     * Gets the reading integral time.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param integralTime The sensor integral time in device units
     */
    getIntegralTime(device: GUsb.Device, integralTime: number): void
    /**
     * Gets the LED status.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param leds The LED bitfield
     */
    getLeds(device: GUsb.Device, leds: number): void
    /**
     * Gets the measurement mode.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param measureMode The #ChMeasureMode, e.g. %CH_MEASURE_MODE_DURATION
     */
    getMeasureMode(device: GUsb.Device, measureMode: MeasureMode): void
    /**
     * Gets the sensor multiplier.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param multiplier The device multiplier, e.g. %CH_FREQ_SCALE_100
     */
    getMultiplier(device: GUsb.Device, multiplier: FreqScale): void
    /**
     * Gets the owner email address.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param email An email address
     */
    getOwnerEmail(device: GUsb.Device, email: string | null): void
    /**
     * Gets the owner name.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param name The owner name
     */
    getOwnerName(device: GUsb.Device, name: string | null): void
    /**
     * Gets the PCB errata level.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param pcbErrata The PCB errata, e.g. %CH_PCB_ERRATA_SWAPPED_LEDS
     */
    getPcbErrata(device: GUsb.Device, pcbErrata: number): void
    /**
     * Gets the post scale value.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param postScale The post-scale value
     */
    getPostScale(device: GUsb.Device, postScale: number): void
    /**
     * Gets the pre scale value.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param preScale Pre-scale value
     */
    getPreScale(device: GUsb.Device, preScale: number): void
    /**
     * Gets the remote hash stored on the device.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param remoteHash A #ChSha1
     */
    getRemoteHash(device: GUsb.Device, remoteHash: Sha1): void
    /**
     * Gets the device serial number.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param serialNumber The device serial number
     */
    getSerialNumber(device: GUsb.Device, serialNumber: number): void
    /**
     * Gets the device temperature.
     * 
     * NOTE: This command is available on hardware version: 2
     * @param device A #GUsbDevice
     * @param temperature Temperature in Celcius
     */
    getTemperature(device: GUsb.Device, temperature: number): void
    /**
     * Processes all commands in the command queue.
     * WARNING: this function is syncronous and will block.
     * @param processFlags Flags how to process the queue, e.g. %CH_DEVICE_QUEUE_PROCESS_FLAGS_CONTINUE_ERRORS
     * @param cancellable #GCancellable or %NULL
     * @returns %TRUE if the commands were executed successfully.
     */
    process(processFlags: DeviceQueueProcessFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Processes all commands in the command queue.
     * @param processFlags 
     * @param cancellable A #GCancellable, or %NULL
     * @param callback A #GAsyncReadyCallback that will be called when finished.
     */
    processAsync(processFlags: DeviceQueueProcessFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     * @returns %TRUE if the request was fulfilled.
     */
    processFinish(res: Gio.AsyncResult): boolean
    /**
     * Reads firmware on the device.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param data Firmware binary data
     * @param len Size of `data`
     */
    readFirmware(device: GUsb.Device, data: number, len: number): void
    /**
     * Read flash code from the device.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param address The device EEPROM address
     * @param data Binary data
     * @param len The length of `data`
     */
    readFlash(device: GUsb.Device, address: number, data: number, len: number): void
    /**
     * Reads binary data from the SRAM.
     * 
     * NOTE: This command is available on hardware version: 2
     * @param device A #GUsbDevice
     * @param address The device memory address
     * @param data The binary data
     * @param len Size of `data`
     */
    readSram(device: GUsb.Device, address: number, data: number, len: number): void
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
    selfTest(device: GUsb.Device): void
    /**
     * Sets the calibration data.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param calibrationIndex The slot position
     * @param calibration the 3x3 calibration matrix
     * @param types The types the matrix supports
     * @param description The description of the calibration
     */
    setCalibration(device: GUsb.Device, calibrationIndex: number, calibration: Colord.Mat3x3, types: number, description: string | null): void
    setCalibrationCcmx(device: GUsb.Device, calibrationIndex: number, ccmx: Colord.It8): boolean
    /**
     * Sets the calibration map.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param calibrationMap An array of slot positions
     */
    setCalibrationMap(device: GUsb.Device, calibrationMap: number): void
    /**
     * Sets the CCD spectral calibration indexes. These are "pointers" to specific
     * spectral peaks returned by the CCD.
     * 
     * NOTE: This command is available on hardware version: 2
     * @param device A #GUsbDevice
     * @param indexes An array of red, green, blue indexes
     */
    setCcdCalibration(device: GUsb.Device, indexes: number): void
    /**
     * Sets the sensor measurement color.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param colorSelect The color select, e.g. %CH_COLOR_SELECT_RED
     */
    setColorSelect(device: GUsb.Device, colorSelect: ColorSelect): void
    /**
     * Sets the post scale value.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param dacValue The DAC value
     */
    setDacValue(device: GUsb.Device, dacValue: number): void
    /**
     * Sets the device dark offsets.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param value A #CdColorRGB
     */
    setDarkOffsets(device: GUsb.Device, value: Colord.ColorRGB): void
    /**
     * Sets the firmware flash sucess value.
     * Be careful using this function as misuse can result in a 'bricked'
     * ColorHug device.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param value Success value
     */
    setFlashSuccess(device: GUsb.Device, value: number): void
    /**
     * Sets the reading integral time.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param integralTime The sensor integral time in device units
     */
    setIntegralTime(device: GUsb.Device, integralTime: number): void
    /**
     * Sets the LED status.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param leds The LEDs bitfield
     * @param repeat Sets the number of times to repeat the pattern
     * @param onTime Set the on time
     * @param offTime Set the off time
     */
    setLeds(device: GUsb.Device, leds: number, repeat: number, onTime: number, offTime: number): void
    /**
     * Sets the measurement mode.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param measureMode The #ChMeasureMode, e.g. %CH_MEASURE_MODE_DURATION
     */
    setMeasureMode(device: GUsb.Device, measureMode: MeasureMode): void
    /**
     * Sets the sensor multiplier.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param multiplier The device multiplier, e.g. %CH_FREQ_SCALE_100
     */
    setMultiplier(device: GUsb.Device, multiplier: FreqScale): void
    /**
     * Sets the owner email address.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param email An email address
     */
    setOwnerEmail(device: GUsb.Device, email: string | null): void
    /**
     * Sets the owner name.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param name The owner name
     */
    setOwnerName(device: GUsb.Device, name: string | null): void
    /**
     * Sets the PCB board errata.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param pcbErrata The PCB errata, e.g. %CH_PCB_ERRATA_SWAPPED_LEDS
     */
    setPcbErrata(device: GUsb.Device, pcbErrata: number): void
    /**
     * Sets the post scale value.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param postScale The post-scale value
     */
    setPostScale(device: GUsb.Device, postScale: number): void
    /**
     * Sets the pre-scale value.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param preScale Pre-scale value
     */
    setPreScale(device: GUsb.Device, preScale: number): void
    /**
     * Sets the remote hash on the device.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param remoteHash A #ChSha1
     */
    setRemoteHash(device: GUsb.Device, remoteHash: Sha1): void
    /**
     * Sets the device serial number.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param serialNumber The device serial number
     */
    setSerialNumber(device: GUsb.Device, serialNumber: number): void
    /**
     * Get an array of raw readings in quick succession.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param readingArray An array of raw readings
     */
    takeReadingArray(device: GUsb.Device, readingArray: number): void
    /**
     * Take a raw reading from the sensor.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param takeReading A raw reading value
     */
    takeReadingRaw(device: GUsb.Device, takeReading: number): void
    /**
     * Takes a raw spectral reading.
     * 
     * NOTE: This command is available on hardware version: 2
     * @param device A #GUsbDevice
     * @param sramAddr The SRAM location where the data is held
     */
    takeReadingSpectral(device: GUsb.Device, sramAddr: number): void
    /**
     * Take a RGB triplet of readings from the sensor without applying the
     * calibration matrix.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param value The #CdColorRGB of the raw reading
     */
    takeReadings(device: GUsb.Device, value: Colord.ColorRGB): void
    /**
     * Take an XYZ fully cooked reading from the sensor.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param calibrationIndex 
     * @param value The #CdColorXYZ for a given calibration slot
     */
    takeReadingsXyz(device: GUsb.Device, calibrationIndex: number, value: Colord.ColorXYZ): void
    /**
     * Verifies firmware on the device.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param data Firmware binary data
     * @param len Size of `data`
     */
    verifyFirmware(device: GUsb.Device, data: number, len: number): void
    /**
     * Verify flash code from the device.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param address The device EEPROM address
     * @param data Binary data
     * @param len The length of `data`
     */
    verifyFlash(device: GUsb.Device, address: number, data: number, len: number): void
    /**
     * Writes values to the firmware to be set at device startup.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param magic The magic sekret string
     */
    writeEeprom(device: GUsb.Device, magic: string | null): void
    /**
     * Writes new firmware to the device.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param data Firmware binary data
     * @param len Size of `data`
     */
    writeFirmware(device: GUsb.Device, data: number, len: number): void
    /**
     * Write flash code to the device.
     * 
     * NOTE: This command is available on hardware version: 1 & 2
     * @param device A #GUsbDevice
     * @param address The device EEPROM address
     * @param data Binary data
     * @param len The length of `data`
     */
    writeFlash(device: GUsb.Device, address: number, data: number, len: number): void
    /**
     * Writes binary data to the SRAM.
     * 
     * NOTE: This command is available on hardware version: 2
     * @param device A #GUsbDevice
     * @param address The device memory address
     * @param data The binary data
     * @param len Size of `data`
     */
    writeSram(device: GUsb.Device, address: number, data: number, len: number): void

    // Own virtual methods of ColorHug-1.0.ColorHug.DeviceQueue

    deviceFailed(device: GUsb.Device, errorMessage: string | null): void
    progressChanged(percentage: number): void

    // Own signals of ColorHug-1.0.ColorHug.DeviceQueue

    connect(sigName: "device-failed", callback: DeviceQueue.DeviceFailedSignalCallback): number
    on(sigName: "device-failed", callback: DeviceQueue.DeviceFailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-failed", callback: DeviceQueue.DeviceFailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-failed", callback: DeviceQueue.DeviceFailedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "device-failed", p0: string | null, ...args: any[]): void
    connect(sigName: "progress-changed", callback: DeviceQueue.ProgressChangedSignalCallback): number
    on(sigName: "progress-changed", callback: DeviceQueue.ProgressChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress-changed", callback: DeviceQueue.ProgressChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress-changed", callback: DeviceQueue.ProgressChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "progress-changed", ...args: any[]): void

    // Class property signals of ColorHug-1.0.ColorHug.DeviceQueue

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DeviceQueue extends GObject.Object {

    // Own properties of ColorHug-1.0.ColorHug.DeviceQueue

    static name: string

    // Constructors of ColorHug-1.0.ColorHug.DeviceQueue

    constructor(config?: DeviceQueue.ConstructorProperties) 
    constructor() 
    static new(): DeviceQueue
    _init(config?: DeviceQueue.ConstructorProperties): void
}

interface DeviceQueueClass {

    // Own fields of ColorHug-1.0.ColorHug.DeviceQueueClass

    parentClass: GObject.ObjectClass
    deviceFailed: (deviceQueue: DeviceQueue, device: GUsb.Device, errorMessage: string | null) => void
    progressChanged: (deviceQueue: DeviceQueue, percentage: number) => void
}

abstract class DeviceQueueClass {

    // Own properties of ColorHug-1.0.ColorHug.DeviceQueueClass

    static name: string
}

interface Sha1 {

    // Own fields of ColorHug-1.0.ColorHug.Sha1

    bytes: Uint8Array

    // Owm methods of ColorHug-1.0.ColorHug.Sha1

    /**
     * Gets a string representation of the SHA1 hash.
     * @returns A string, free with g_free().
     */
    toString(): string | null
}

class Sha1 {

    // Own properties of ColorHug-1.0.ColorHug.Sha1

    static name: string

    // Constructors of ColorHug-1.0.ColorHug.Sha1

    /**
     * Parses a SHA1 hash from a string value.
     * @param value A string representation of the SHA1 hash
     * @param sha1 A %ChSha1
     * @returns %TRUE for success
     */
    static parse(value: string | null, sha1: Sha1): boolean
}

    type Cmd = number
}

export default ColorHug;
// END