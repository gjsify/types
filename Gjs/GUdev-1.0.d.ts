// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GUdev-1.0
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GUdev {

/**
 * Enumeration used to specify a the type of a device.
 */
enum DeviceType {
    /**
     * Device does not have a device file.
     */
    NONE,
    /**
     * Device is a block device.
     */
    BLOCK,
    /**
     * Device is a character device.
     */
    CHAR,
}
interface Client_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GUdev-1.0.GUdev.Client

    /**
     * The subsystems to listen for uevents on.
     * 
     * To listen for only a specific DEVTYPE for a given SUBSYSTEM, use
     * "subsystem/devtype". For example, to only listen for uevents
     * where SUBSYSTEM is usb and DEVTYPE is usb_interface, use
     * "usb/usb_interface".
     * 
     * If this property is %NULL, then no events will be reported. If
     * it's the empty array, events from all subsystems will be
     * reported.
     */
    subsystems?: string[] | null
}

/**
 * Signal callback interface for `uevent`
 */
interface Client_UeventSignalCallback {
    ($obj: Client, action: string, device: Device): void
}

interface Client {

    // Own properties of GUdev-1.0.GUdev.Client

    /**
     * The subsystems to listen for uevents on.
     * 
     * To listen for only a specific DEVTYPE for a given SUBSYSTEM, use
     * "subsystem/devtype". For example, to only listen for uevents
     * where SUBSYSTEM is usb and DEVTYPE is usb_interface, use
     * "usb/usb_interface".
     * 
     * If this property is %NULL, then no events will be reported. If
     * it's the empty array, events from all subsystems will be
     * reported.
     */
    readonly subsystems: string[]

    // Own fields of GUdev-1.0.GUdev.Client

    parent: GObject.Object

    // Owm methods of GUdev-1.0.GUdev.Client

    /**
     * Looks up a device for a device file.
     * @param device_file A device file.
     */
    query_by_device_file(device_file: string): Device | null
    /**
     * Looks up a device for a type and device number.
     * @param type A value from the #GUdevDeviceType enumeration.
     * @param number A device number.
     */
    query_by_device_number(type: DeviceType, number: DeviceNumber): Device | null
    /**
     * Gets all devices belonging to `subsystem`.
     * @param subsystem The subsystem to get devices for or %NULL to get all devices.
     */
    query_by_subsystem(subsystem: string | null): Device[] | null
    /**
     * Looks up a device for a subsystem and name.
     * @param subsystem A subsystem name.
     * @param name The name of the device.
     */
    query_by_subsystem_and_name(subsystem: string, name: string): Device | null
    /**
     * Looks up a device for a sysfs path.
     * @param sysfs_path A sysfs path.
     */
    query_by_sysfs_path(sysfs_path: string): Device | null

    // Own virtual methods of GUdev-1.0.GUdev.Client

    vfunc_uevent(action: string, device: Device): void

    // Own signals of GUdev-1.0.GUdev.Client

    connect(sigName: "uevent", callback: Client_UeventSignalCallback): number
    connect_after(sigName: "uevent", callback: Client_UeventSignalCallback): number
    emit(sigName: "uevent", action: string, device: Device, ...args: any[]): void

    // Class property signals of GUdev-1.0.GUdev.Client

    connect(sigName: "notify::subsystems", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subsystems", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subsystems", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GUdevClient is used to query information about devices on a Linux
 * system from the Linux kernel and the udev device
 * manager.
 * 
 * Device information is retrieved from the kernel (through the
 * <literal>sysfs</literal> filesystem) and the udev daemon (through a
 * <literal>tmpfs</literal> filesystem) and presented through
 * #GUdevDevice objects. This means that no blocking IO ever happens
 * (in both cases, we are essentially just reading data from kernel
 * memory) and as such there are no asynchronous versions of the
 * provided methods.
 * 
 * To get #GUdevDevice objects, use
 * g_udev_client_query_by_subsystem(),
 * g_udev_client_query_by_device_number(),
 * g_udev_client_query_by_device_file(),
 * g_udev_client_query_by_sysfs_path(),
 * g_udev_client_query_by_subsystem_and_name()
 * or the #GUdevEnumerator type.
 * 
 * To listen to uevents, connect to the #GUdevClient::uevent signal.
 * @class 
 */
class Client extends GObject.Object {

    // Own properties of GUdev-1.0.GUdev.Client

    static name: string
    static $gtype: GObject.GType<Client>

    // Constructors of GUdev-1.0.GUdev.Client

    constructor(config?: Client_ConstructProps) 
    /**
     * Constructs a #GUdevClient object that can be used to query
     * information about devices. Connect to the #GUdevClient::uevent
     * signal to listen for uevents. Note that signals are emitted in the
     * <link linkend="g-main-context-push-thread-default">thread-default main loop</link>
     * of the thread that you call this constructor from.
     * @constructor 
     * @param subsystems A %NULL terminated string array of subsystems to listen for uevents on, %NULL to not listen on uevents at all, or an empty array to listen to uevents on all subsystems. See the documentation for the #GUdevClient:subsystems property for details on this parameter.
     */
    constructor(subsystems: string[] | null) 
    /**
     * Constructs a #GUdevClient object that can be used to query
     * information about devices. Connect to the #GUdevClient::uevent
     * signal to listen for uevents. Note that signals are emitted in the
     * <link linkend="g-main-context-push-thread-default">thread-default main loop</link>
     * of the thread that you call this constructor from.
     * @constructor 
     * @param subsystems A %NULL terminated string array of subsystems to listen for uevents on, %NULL to not listen on uevents at all, or an empty array to listen to uevents on all subsystems. See the documentation for the #GUdevClient:subsystems property for details on this parameter.
     */
    static new(subsystems: string[] | null): Client
    _init(config?: Client_ConstructProps): void
}

interface Device_ConstructProps extends GObject.Object_ConstructProps {
}

interface Device {

    // Own fields of GUdev-1.0.GUdev.Device

    parent: GObject.Object

    // Owm methods of GUdev-1.0.GUdev.Device

    /**
     * Gets the most recent action (e.g. "add", "remove", "change", etc.) for `device`.
     */
    get_action(): string
    /**
     * Gets the device file for `device`.
     */
    get_device_file(): string | null
    /**
     * Gets a list of symlinks (in <literal>/dev</literal>) that points to
     * the device file for `device`.
     */
    get_device_file_symlinks(): string[]
    /**
     * Gets the device number, if any, for `device`.
     */
    get_device_number(): DeviceNumber
    /**
     * Gets the type of the device file, if any, for `device`.
     */
    get_device_type(): DeviceType
    /**
     * Gets the device type for `device`.
     */
    get_devtype(): string
    /**
     * Gets the name of the driver used for `device`.
     */
    get_driver(): string | null
    /**
     * Gets whether `device` has been initialized.
     */
    get_is_initialized(): boolean
    /**
     * Gets the name of `device,` e.g. "sda3".
     */
    get_name(): string
    /**
     * Gets the number of `device,` e.g. "3" if g_udev_device_get_name() returns "sda3".
     */
    get_number(): string
    /**
     * Gets the immediate parent of `device,` if any.
     */
    get_parent(): Device | null
    /**
     * Walks up the chain of parents of `device` and returns the first
     * device encountered where `subsystem` and `devtype` matches, if any.
     * @param subsystem The subsystem of the parent to get.
     * @param devtype The devtype of the parent to get or %NULL.
     */
    get_parent_with_subsystem(subsystem: string, devtype: string | null): Device | null
    /**
     * Look up the value for `key` on `device`.
     * @param key Name of property.
     */
    get_property(key: string): string | null

    // Overloads of get_property

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
    get_property(property_name?: string, value?: any): void
    get_property(...args: any[]): any
    get_property(args_or_property_name: any[] | string, value?: any): string | null | void | any
    /**
     * Look up the value for `key` on `device` and convert it to an
     * boolean. This is done by doing a case-insensitive string comparison
     * on the string value against "1" and "true".
     * @param key Name of property.
     */
    get_property_as_boolean(key: string): boolean
    /**
     * Look up the value for `key` on `device` and convert it to a double
     * precision floating point number using g_ascii_strtod().
     * @param key Name of property.
     */
    get_property_as_double(key: string): number
    /**
     * Look up the value for `key` on `device` and convert it to an integer
     * using strtol().
     * @param key Name of property.
     */
    get_property_as_int(key: string): number
    /**
     * Look up the value for `key` on `device` and return the result of
     * splitting it into non-empty tokens split at white space (only space
     * (' '), form-feed ('\f'), newline ('\n'), carriage return ('\r'),
     * horizontal tab ('\t'), and vertical tab ('\v') are considered; the
     * locale is not taken into account).
     * @param key Name of property.
     */
    get_property_as_strv(key: string): string[] | null
    /**
     * Look up the value for `key` on `device` and convert it to an unsigned
     * 64-bit integer using g_ascii_strtoull().
     * @param key Name of property.
     */
    get_property_as_uint64(key: string): number
    /**
     * Gets all keys for properties on `device`.
     */
    get_property_keys(): string[]
    /**
     * Gets the most recent sequence number for `device`.
     */
    get_seqnum(): number
    /**
     * Gets the subsystem for `device`.
     */
    get_subsystem(): string
    /**
     * Look up the sysfs attribute with `name` on `device`. The retrieved value
     * is cached in the device. Repeated calls will return the same value and
     * not open the attribute again, unless updated through one of the
     * "uncached" functions.
     * @param name Name of the sysfs attribute.
     */
    get_sysfs_attr(name: string): string | null
    /**
     * Look up the sysfs attribute with `name` on `device` and convert it to an
     * boolean. This is done by doing a case-insensitive string comparison
     * on the string value against "1", "true", "Y" and "y". The retrieved value is
     * cached in the device. Repeated calls will return the same value and
     * not open the attribute again, unless updated through one of the
     * "uncached" functions.
     * @param name Name of the sysfs attribute.
     */
    get_sysfs_attr_as_boolean(name: string): boolean
    /**
     * Look up the sysfs attribute with `name` on `device` and convert it to an
     * boolean. This is done by doing a case-insensitive string comparison
     * on the string value against "1", "true", "Y" and "y". This function does
     * blocking I/O, and updates the sysfs attributes cache.
     * @param name Name of the sysfs attribute.
     */
    get_sysfs_attr_as_boolean_uncached(name: string): boolean
    /**
     * Look up the sysfs attribute with `name` on `device` and convert it to a double
     * precision floating point number using g_ascii_strtod(). The retrieved value is cached
     * in the device. Repeated calls will return the same value and not open the
     * attribute again, unless updated through one of the "uncached" functions.
     * @param name Name of the sysfs attribute.
     */
    get_sysfs_attr_as_double(name: string): number
    /**
     * Look up the sysfs attribute with `name` on `device` and convert it to a double
     * precision floating point number using g_ascii_strtod(). This function does blocking
     * I/O, and updates the sysfs attributes cache.
     * @param name Name of the sysfs attribute.
     */
    get_sysfs_attr_as_double_uncached(name: string): number
    /**
     * Look up the sysfs attribute with `name` on `device` and convert it to an integer
     * using strtol(). The retrieved value is cached in the device. Repeated calls
     * will return the same value and not open the attribute again, unless updated
     * through one of the "uncached" functions.
     * @param name Name of the sysfs attribute.
     */
    get_sysfs_attr_as_int(name: string): number
    /**
     * Look up the sysfs attribute with `name` on `device` and convert it to an integer
     * using strtol(). This function does blocking I/O, and updates the sysfs
     * attributes cache.
     * @param name Name of the sysfs attribute.
     */
    get_sysfs_attr_as_int_uncached(name: string): number
    /**
     * Look up the sysfs attribute with `name` on `device` and return the result of
     * splitting it into non-empty tokens split at white space (only space (' '),
     * form-feed ('\f'), newline ('\n'), carriage return ('\r'), horizontal
     * tab ('\t'), and vertical tab ('\v') are considered; the locale is
     * not taken into account).
     * 
     * The retrieved value is cached in the device. Repeated calls will return
     * the same value and not open the attribute again, unless updated through
     * one of the "uncached" functions.
     * @param name Name of the sysfs attribute.
     */
    get_sysfs_attr_as_strv(name: string): string[] | null
    /**
     * Look up the sysfs attribute with `name` on `device` and return the result of
     * splitting it into non-empty tokens split at white space (only space (' '),
     * form-feed ('\f'), newline ('\n'), carriage return ('\r'), horizontal
     * tab ('\t'), and vertical tab ('\v') are considered; the locale is
     * not taken into account).
     * 
     * This function does blocking I/O, and updates the sysfs attributes cache.
     * @param name Name of the sysfs attribute.
     */
    get_sysfs_attr_as_strv_uncached(name: string): string[] | null
    /**
     * Look up the sysfs attribute with `name` on `device` and convert it to an unsigned
     * 64-bit integer using g_ascii_strtoull(). The retrieved value is cached in the
     * device. Repeated calls will return the same value and not open the attribute
     * again, unless updated through one of the "uncached" functions.
     * @param name Name of the sysfs attribute.
     */
    get_sysfs_attr_as_uint64(name: string): number
    /**
     * Look up the sysfs attribute with `name` on `device` and convert it to an unsigned
     * 64-bit integer using g_ascii_strtoull(). This function does blocking I/O, and
     * updates the sysfs attributes cache.
     * @param name Name of the sysfs attribute.
     */
    get_sysfs_attr_as_uint64_uncached(name: string): number
    /**
     * Gets all keys for sysfs attributes on `device`.
     */
    get_sysfs_attr_keys(): string[]
    /**
     * Look up the sysfs attribute with `name` on `device`. This function does
     * blocking I/O, and updates the sysfs attributes cache.
     * @param name Name of the sysfs attribute.
     */
    get_sysfs_attr_uncached(name: string): string | null
    /**
     * Gets the sysfs path for `device`.
     */
    get_sysfs_path(): string
    /**
     * Gets all tags for `device`.
     */
    get_tags(): string[]
    /**
     * Gets number of micro-seconds since `device` was initialized.
     * 
     * This only works for devices with properties in the udev
     * database. All other devices return 0.
     */
    get_usec_since_initialized(): number
    /**
     * Check if a the property with the given key exists.
     * @param key Name of property.
     */
    has_property(key: string): boolean
    /**
     * Check if a the sysfs attribute with the given key exists. The
     * retrieved value is cached in the device. Repeated calls will
     * return the same result and not check for the presence of the
     * attribute again, unless updated through one of the "uncached"
     * functions.
     * @param key Name of sysfs attribute.
     */
    has_sysfs_attr(key: string): boolean
    /**
     * Check if a the sysfs attribute with the given key exists. The
     * retrieved value is cached in the device. Repeated calls will
     * return the same result and not check for the presence of the
     * attribute again, unless updated through one of the "uncached"
     * functions.
     * @param key Name of sysfs attribute.
     */
    has_sysfs_attr_uncached(key: string): boolean

    // Class property signals of GUdev-1.0.GUdev.Device

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GUdevDevice class is used to get information about a specific
 * device. Note that you cannot instantiate a #GUdevDevice object
 * yourself. Instead you must use #GUdevClient to obtain #GUdevDevice
 * objects.
 * 
 * To get basic information about a device, use
 * g_udev_device_get_subsystem(), g_udev_device_get_devtype(),
 * g_udev_device_get_name(), g_udev_device_get_number(),
 * g_udev_device_get_sysfs_path(), g_udev_device_get_driver(),
 * g_udev_device_get_action(), g_udev_device_get_seqnum(),
 * g_udev_device_get_device_type(), g_udev_device_get_device_number(),
 * g_udev_device_get_device_file(),
 * g_udev_device_get_device_file_symlinks().
 * 
 * To navigate the device tree, use g_udev_device_get_parent() and
 * g_udev_device_get_parent_with_subsystem().
 * 
 * To access udev properties for the device, use
 * g_udev_device_get_property_keys(),
 * g_udev_device_has_property(),
 * g_udev_device_get_property(),
 * g_udev_device_get_property_as_int(),
 * g_udev_device_get_property_as_uint64(),
 * g_udev_device_get_property_as_double(),
 * g_udev_device_get_property_as_boolean() and
 * g_udev_device_get_property_as_strv().
 * 
 * To access sysfs attributes for the device, use
 * g_udev_device_get_sysfs_attr_keys(),
 * g_udev_device_has_sysfs_attr(),
 * g_udev_device_get_sysfs_attr(),
 * g_udev_device_get_sysfs_attr_as_int(),
 * g_udev_device_get_sysfs_attr_as_uint64(),
 * g_udev_device_get_sysfs_attr_as_double(),
 * g_udev_device_get_sysfs_attr_as_boolean() and
 * g_udev_device_get_sysfs_attr_as_strv().
 * 
 * Note that all getters on #GUdevDevice are non-reffing – returned
 * values are owned by the object, should not be freed and are only
 * valid as long as the object is alive.
 * 
 * By design, #GUdevDevice will not react to changes for a device – it
 * only contains a snapshot of information when the #GUdevDevice
 * object was created. To work with changes, you typically connect to
 * the #GUdevClient::uevent signal on a #GUdevClient and get a new
 * #GUdevDevice whenever an event happens.
 * @class 
 */
class Device extends GObject.Object {

    // Own properties of GUdev-1.0.GUdev.Device

    static name: string
    static $gtype: GObject.GType<Device>

    // Constructors of GUdev-1.0.GUdev.Device

    constructor(config?: Device_ConstructProps) 
    _init(config?: Device_ConstructProps): void
}

interface Enumerator_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GUdev-1.0.GUdev.Enumerator

    /**
     * The #GUdevClient to enumerate devices from.
     */
    client?: Client | null
}

interface Enumerator {

    // Own properties of GUdev-1.0.GUdev.Enumerator

    /**
     * The #GUdevClient to enumerate devices from.
     */
    readonly client: Client

    // Own fields of GUdev-1.0.GUdev.Enumerator

    parent: GObject.Object

    // Owm methods of GUdev-1.0.GUdev.Enumerator

    /**
     * All returned devices will be initialized.
     */
    add_match_is_initialized(): Enumerator
    /**
     * All returned devices will match the given `name`.
     * @param name Wildcard filter for kernel name e.g. "sda*".
     */
    add_match_name(name: string): Enumerator
    /**
     * All returned devices will have a property matching the given `name` and `value`.
     * @param name Wildcard filter for property name.
     * @param value Wildcard filter for property value.
     */
    add_match_property(name: string, value: string): Enumerator
    /**
     * All returned devices will match the given `subsystem`.
     * @param subsystem Wildcard for subsystem name e.g. 'scsi' or 'a*'.
     */
    add_match_subsystem(subsystem: string): Enumerator
    /**
     * All returned devices will have a sysfs attribute matching the given `name` and `value`.
     * @param name Wildcard filter for sysfs attribute key.
     * @param value Wildcard filter for sysfs attribute value.
     */
    add_match_sysfs_attr(name: string, value: string): Enumerator
    /**
     * All returned devices will match the given `tag`.
     * @param tag A udev tag e.g. "udev-acl".
     */
    add_match_tag(tag: string): Enumerator
    /**
     * All returned devices will not match the given `subsystem`.
     * @param subsystem Wildcard for subsystem name e.g. 'scsi' or 'a*'.
     */
    add_nomatch_subsystem(subsystem: string): Enumerator
    /**
     * All returned devices will not have a sysfs attribute matching the given `name` and `value`.
     * @param name Wildcard filter for sysfs attribute key.
     * @param value Wildcard filter for sysfs attribute value.
     */
    add_nomatch_sysfs_attr(name: string, value: string): Enumerator
    /**
     * Add a device to the list of devices, to retrieve it back sorted in dependency order.
     * @param sysfs_path A sysfs path, e.g. "/sys/devices/pci0000:00/0000:00:1f.2/host0/target0:0:0/0:0:0:0/block/sda"
     */
    add_sysfs_path(sysfs_path: string): Enumerator
    /**
     * Executes the query in `enumerator`.
     */
    execute(): Device[]

    // Class property signals of GUdev-1.0.GUdev.Enumerator

    connect(sigName: "notify::client", callback: (($obj: Enumerator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client", callback: (($obj: Enumerator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::client", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GUdevEnumerator is used to lookup and sort devices.
 * @class 
 */
class Enumerator extends GObject.Object {

    // Own properties of GUdev-1.0.GUdev.Enumerator

    static name: string
    static $gtype: GObject.GType<Enumerator>

    // Constructors of GUdev-1.0.GUdev.Enumerator

    constructor(config?: Enumerator_ConstructProps) 
    /**
     * Constructs a #GUdevEnumerator object that can be used to enumerate
     * and sort devices. Use the add_match_*() and add_nomatch_*() methods
     * and execute the query to get a list of devices with
     * g_udev_enumerator_execute().
     * @constructor 
     * @param client A #GUdevClient to enumerate devices from.
     */
    constructor(client: Client) 
    /**
     * Constructs a #GUdevEnumerator object that can be used to enumerate
     * and sort devices. Use the add_match_*() and add_nomatch_*() methods
     * and execute the query to get a list of devices with
     * g_udev_enumerator_execute().
     * @constructor 
     * @param client A #GUdevClient to enumerate devices from.
     */
    static new(client: Client): Enumerator
    _init(config?: Enumerator_ConstructProps): void
}

interface ClientClass {

    // Own fields of GUdev-1.0.GUdev.ClientClass

    /**
     * Parent class.
     * @field 
     */
    parent_class: GObject.ObjectClass
    uevent: (client: Client, action: string, device: Device) => void
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    reserved6: () => void
    reserved7: () => void
    reserved8: () => void
}

/**
 * Class structure for #GUdevClient.
 * @record 
 */
abstract class ClientClass {

    // Own properties of GUdev-1.0.GUdev.ClientClass

    static name: string
}

interface ClientPrivate {
}

class ClientPrivate {

    // Own properties of GUdev-1.0.GUdev.ClientPrivate

    static name: string
}

interface DeviceClass {

    // Own fields of GUdev-1.0.GUdev.DeviceClass

    /**
     * Parent class.
     * @field 
     */
    parent_class: GObject.ObjectClass
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    reserved6: () => void
    reserved7: () => void
    reserved8: () => void
}

/**
 * Class structure for #GUdevDevice.
 * @record 
 */
abstract class DeviceClass {

    // Own properties of GUdev-1.0.GUdev.DeviceClass

    static name: string
}

interface DevicePrivate {
}

class DevicePrivate {

    // Own properties of GUdev-1.0.GUdev.DevicePrivate

    static name: string
}

interface EnumeratorClass {

    // Own fields of GUdev-1.0.GUdev.EnumeratorClass

    /**
     * Parent class.
     * @field 
     */
    parent_class: GObject.ObjectClass
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    reserved6: () => void
    reserved7: () => void
    reserved8: () => void
}

/**
 * Class structure for #GUdevEnumerator.
 * @record 
 */
abstract class EnumeratorClass {

    // Own properties of GUdev-1.0.GUdev.EnumeratorClass

    static name: string
}

interface EnumeratorPrivate {
}

class EnumeratorPrivate {

    // Own properties of GUdev-1.0.GUdev.EnumeratorPrivate

    static name: string
}

    type DeviceNumber = number
}
export default GUdev;