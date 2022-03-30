/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GnomeKeyring-1.0
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace GnomeKeyring {

/**
 * Type of access restriction.
 */
enum AccessRestriction {
    /**
     * Ask permission.
     */
    ASK,
    /**
     * Deny permission.
     */
    DENY,
    /**
     * Give permission.
     */
    ALLOW,
}
enum AttributeType {
    STRING,
    UINT32,
}
/**
 * The types of items.
 */
enum ItemType {
    /**
     * Generic secret
     */
    GENERIC_SECRET,
    /**
     * Network password
     */
    NETWORK_PASSWORD,
    /**
     * Note
     */
    NOTE,
    /**
     * Keyring password
     */
    CHAINED_KEYRING_PASSWORD,
    /**
     * Password for encryption key
     */
    ENCRYPTION_KEY_PASSWORD,
    /**
     * Key storage password
     */
    PK_STORAGE,
    /**
     * Not used
     */
    LAST_TYPE,
}
/**
 * Various result codes returned by functions.
 */
enum Result {
    /**
     * The operation completed successfully.
     */
    OK,
    /**
     * Either the user or daemon denied access.
     */
    DENIED,
    /**
     * Keyring daemon is not available.
     */
    NO_KEYRING_DAEMON,
    /**
     * Keyring was already unlocked.
     */
    ALREADY_UNLOCKED,
    /**
     * No such keyring exists.
     */
    NO_SUCH_KEYRING,
    /**
     * Bad arguments to function.
     */
    BAD_ARGUMENTS,
    /**
     * Problem communicating with daemon.
     */
    IO_ERROR,
    /**
     * Operation was cancelled.
     */
    CANCELLED,
    /**
     * The keyring already exists.
     */
    KEYRING_ALREADY_EXISTS,
    /**
     * No such match found.
     */
    NO_MATCH,
}
/**
 * Type of access.
 */
enum AccessType {
    /**
     * Read access
     */
    READ,
    /**
     * Write access
     */
    WRITE,
    /**
     * Delete access
     */
    REMOVE,
}
enum ItemInfoFlags {
    BASICS,
    SECRET,
}
const ITEM_APPLICATION_SECRET: number
const ITEM_INFO_ALL: number
const ITEM_TYPE_MASK: number
/**
 * <para>
 * A keyring only stored in memory.
 * </para>
 */
const SESSION: string
function acl_copy(list: AccessControl[]): AccessControl[]
function acl_free(acl: AccessControl[]): void
function attribute_list_append_string(attributes: AttributeList, name: string, value: string): void
function attribute_list_append_uint32(attributes: AttributeList, name: string, value: number): void
function attribute_list_copy(attributes: AttributeList): AttributeList
function attribute_list_free(attributes: AttributeList): void
function attribute_list_get_type(): GObject.Type
function attribute_list_new(): AttributeList
function attribute_list_to_glist(attributes: AttributeList): Attribute[]
function cancel_request(request: object): void
function change_password_sync(keyring: string, original?: string | null, password?: string | null): Result
function create_sync(keyring_name: string, password?: string | null): Result
function daemon_prepare_environment_sync(): Result
function daemon_set_display_sync(display: string): Result
function delete_sync(keyring: string): Result
function find_items_sync(type: ItemType, attributes: AttributeList): [ /* returnType */ Result, /* found */ Found[] ]
function find_network_password_sync(user: string | null, domain: string | null, server: string | null, object: string | null, protocol: string | null, authtype: string | null, port: number): [ /* returnType */ Result, /* results */ NetworkPasswordData[] ]
function found_list_free(found_list: Found[]): void
function free_password(password: string): void
function get_default_keyring_sync(): [ /* returnType */ Result, /* keyring */ string ]
function get_info_sync(keyring?: string | null): [ /* returnType */ Result, /* info */ Info ]
function is_available(): boolean
function item_ac_get_access_type(ac: AccessControl): AccessType
function item_ac_get_display_name(ac: AccessControl): string
function item_ac_get_path_name(ac: AccessControl): string
function item_ac_set_access_type(ac: AccessControl, value: AccessType): void
function item_ac_set_display_name(ac: AccessControl, value: string): void
function item_ac_set_path_name(ac: AccessControl, value: string): void
function item_create_sync(keyring: string | null, type: ItemType, display_name: string, attributes: AttributeList, secret: string, update_if_exists: boolean): [ /* returnType */ Result, /* item_id */ number ]
function item_delete_sync(keyring: string | null, id: number): Result
function item_get_acl_sync(keyring: string | null, id: number): [ /* returnType */ Result, /* acl */ AccessControl[] ]
function item_get_attributes_sync(keyring: string | null, id: number, attributes: AttributeList): Result
function item_get_info_full_sync(keyring: string | null, id: number, flags: number): [ /* returnType */ Result, /* info */ ItemInfo ]
function item_get_info_sync(keyring: string | null, id: number): [ /* returnType */ Result, /* info */ ItemInfo ]
function item_grant_access_rights_sync(keyring: string | null, display_name: string, full_path: string, id: number, rights: AccessType): Result
function item_set_acl_sync(keyring: string | null, id: number, acl: AccessControl[]): Result
function item_set_attributes_sync(keyring: string | null, id: number, attributes: AttributeList): Result
function item_set_info_sync(keyring: string | null, id: number, info: ItemInfo): Result
function list_item_ids_sync(keyring?: string | null): [ /* returnType */ Result, /* ids */ number[] ]
function list_keyring_names_sync(): [ /* returnType */ Result, /* keyrings */ string[] ]
function lock_all_sync(): Result
function lock_sync(keyring?: string | null): Result
function network_password_free(data?: NetworkPasswordData | null): void
function network_password_list_free(list: NetworkPasswordData[]): void
function result_to_message(res: Result): string
function set_default_keyring_sync(keyring: string): Result
function set_info_sync(keyring: string | null, info: Info): Result
function set_network_password_sync(keyring: string | null, user: string | null, domain: string | null, server: string | null, object: string | null, protocol: string | null, authtype: string | null, port: number, password: string): [ /* returnType */ Result, /* item_id */ number ]
function string_list_free(strings: string[]): void
function unlock_sync(keyring?: string | null, password?: string | null): Result
interface OperationDoneCallback {
    (result: Result): void
}
interface OperationGetAttributesCallback {
    (result: Result, attributes: AttributeList): void
}
interface OperationGetIntCallback {
    (result: Result, val: number): void
}
interface OperationGetItemInfoCallback {
    (result: Result, info: ItemInfo): void
}
interface OperationGetKeyringInfoCallback {
    (result: Result, info: Info): void
}
interface OperationGetStringCallback {
    (result: Result, string: string | null): void
}
class AccessControl {
    /* Methods of GnomeKeyring-1.0.GnomeKeyring.AccessControl */
    /**
     * Copy an access control for an item.
     */
    copy(): AccessControl
    /**
     * Free an access control for an item.
     */
    free(): void
    static name: string
    static new(application: ApplicationRef, types_allowed: AccessType): AccessControl
    constructor(application: ApplicationRef, types_allowed: AccessType)
    /* Static methods and pseudo-constructors */
    static new(application: ApplicationRef, types_allowed: AccessType): AccessControl
}
class ApplicationRef {
    /* Methods of GnomeKeyring-1.0.GnomeKeyring.ApplicationRef */
    /**
     * Copy an application reference.
     */
    copy(): ApplicationRef
    /**
     * Free an application reference.
     */
    free(): void
    static name: string
    static new(): ApplicationRef
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ApplicationRef
}
class Attribute {
    /* Fields of GnomeKeyring-1.0.GnomeKeyring.Attribute */
    /**
     * The name of the attribute.
     */
    name: string
    /**
     * The data type.
     */
    type: AttributeType
    /* Methods of GnomeKeyring-1.0.GnomeKeyring.Attribute */
    /**
     * Return the string value. It is an error to call this method if
     * `attribute`.type is not #GNOME_KEYRING_ATTRIBUTE_TYPE_STRING. This method is
     * mostly useful for language bindings which do not provide union access. In C
     * you should just use attribute->value.string.
     */
    get_string(): string
    /**
     * Return the uint32 value. It is an error to call this method if
     * `attribute`.type is not #GNOME_KEYRING_ATTRIBUTE_TYPE_UINT32. This method is
     * mostly useful for language bindings which do not provide union access. In C
     * you should just use attribute->value.integer.
     */
    get_uint32(): number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Store a key-value-pair with a string value in `attributes`.
     * @param attributes A #GnomeKeyringAttributeList
     * @param name The name of the new attribute
     * @param value The value to store in `attributes`
     */
    static list_append_string(attributes: AttributeList, name: string, value: string): void
    /**
     * Store a key-value-pair with an unsigned 32bit number value in `attributes`.
     * @param attributes A #GnomeKeyringAttributeList
     * @param name The name of the new attribute
     * @param value The value to store in `attributes`
     */
    static list_append_uint32(attributes: AttributeList, name: string, value: number): void
    /**
     * Copy a list of item attributes.
     * @param attributes A #GnomeKeyringAttributeList to copy.
     */
    static list_copy(attributes: AttributeList): AttributeList
    /**
     * Free the memory used by `attributes`.
     * 
     * If a %NULL pointer is passed, it is ignored.
     * @param attributes A #GnomeKeyringAttributeList
     */
    static list_free(attributes: AttributeList): void
    /**
     * Create a new #GnomeKeyringAttributeList.
     */
    static list_new(): AttributeList
    /**
     * Create #GList of #GnomeKeyringAttribute pointers from `attributes`. This is
     * mostly useful in language bindings which cannot directly use a #GArray.
     * @param attributes A #GnomeKeyringAttributeList
     */
    static list_to_glist(attributes: AttributeList): Attribute[]
}
class Found {
    /* Fields of GnomeKeyring-1.0.GnomeKeyring.Found */
    /**
     * The keyring the item was found in.
     */
    keyring: string
    /**
     * The identifier for the item.
     */
    item_id: number
    /**
     * The item's attributes.
     */
    attributes: AttributeList
    /**
     * The item's secret.
     */
    secret: string
    /* Methods of GnomeKeyring-1.0.GnomeKeyring.Found */
    /**
     * Copy a #GnomeKeyringFound item.
     */
    copy(): Found
    /**
     * Free the memory used by a #GnomeKeyringFound item.
     * 
     * You usually want to use gnome_keyring_found_list_free() on the list of
     * results.
     */
    free(): void
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Free the memory used by the #GnomeKeyringFound items in `found_list`.
     * @param found_list a #GList of #GnomeKeyringFound
     */
    static list_free(found_list: Found[]): void
}
class Info {
    /* Methods of GnomeKeyring-1.0.GnomeKeyring.Info */
    /**
     * Copy a #GnomeKeyringInfo object.
     */
    copy(): Info
    /**
     * Free a #GnomeKeyringInfo object. If a %NULL pointer is passed
     * nothing occurs.
     */
    free(): void
    /**
     * Get the time at which the keyring was created.
     */
    get_ctime(): number
    /**
     * Get whether the keyring is locked or not.
     */
    get_is_locked(): boolean
    /**
     * Get whether or not to lock a keyring after a certain amount of idle time.
     * 
     * See also gnome_keyring_info_get_lock_timeout().
     */
    get_lock_on_idle(): boolean
    /**
     * Get the idle timeout, in seconds, after which to lock the keyring.
     * 
     * See also gnome_keyring_info_get_lock_on_idle().
     */
    get_lock_timeout(): number
    /**
     * Get the time at which the keyring was last modified.
     */
    get_mtime(): number
    /**
     * Set whether or not to lock a keyring after a certain amount of idle time.
     * 
     * See also gnome_keyring_info_set_lock_timeout().
     * @param value Whether to lock or not.
     */
    set_lock_on_idle(value: boolean): void
    /**
     * Set the idle timeout, in seconds, after which to lock the keyring.
     * 
     * See also gnome_keyring_info_set_lock_on_idle().
     * @param value The lock timeout in seconds.
     */
    set_lock_timeout(value: number): void
    static name: string
}
class ItemInfo {
    /* Methods of GnomeKeyring-1.0.GnomeKeyring.ItemInfo */
    /**
     * Copy a #GnomeKeyringItemInfo object.
     */
    copy(): ItemInfo
    /**
     * Free the #GnomeKeyringItemInfo object.
     * 
     * A %NULL pointer may be passed, in which case it will be ignored.
     */
    free(): void
    /**
     * Get the item created time.
     */
    get_ctime(): number
    /**
     * Get the item display name.
     */
    get_display_name(): string
    /**
     * Get the item last modified time.
     */
    get_mtime(): number
    /**
     * Get the item secret.
     */
    get_secret(): string
    /**
     * Get the item type.
     */
    get_type(): ItemType
    /**
     * Set the display name on an item info.
     * @param value The new display name.
     */
    set_display_name(value: string): void
    /**
     * Set the secret on an item info.
     * @param value The new item secret
     */
    set_secret(value: string): void
    /**
     * Set the type on an item info.
     * @param type The new item type
     */
    set_type(type: ItemType): void
    static name: string
    static new(): ItemInfo
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ItemInfo
}
class NetworkPasswordData {
    /* Fields of GnomeKeyring-1.0.GnomeKeyring.NetworkPasswordData */
    /**
     * Keyring item stored in.
     */
    keyring: string
    /**
     * The identifier of the item.
     */
    item_id: number
    /**
     * Network protocol or scheme.
     */
    protocol: string
    /**
     * Server or host name.
     */
    server: string
    /**
     * Share or other object on server.
     */
    object: string
    /**
     * Type of authentication.
     */
    authtype: string
    /**
     * TCP port.
     */
    port: number
    /**
     * User name.
     */
    user: string
    /**
     * User domain
     */
    domain: string
    /**
     * The password.
     */
    password: string
    static name: string
}
class PasswordSchema {
    /* Fields of GnomeKeyring-1.0.GnomeKeyring.PasswordSchema */
    /**
     * The item type for this schema.
     */
    item_type: ItemType
    /**
     * list of attributes
     */
    attributes: PasswordSchemaAttribute[]
    static name: string
}
class PasswordSchemaAttribute {
    /* Fields of GnomeKeyring-1.0.GnomeKeyring.PasswordSchemaAttribute */
    /**
     * the attribute name
     */
    name: string
    /**
     * the attribute data type
     */
    type: AttributeType
    static name: string
}
    type AttributeList = GLib.Array
}
export default GnomeKeyring;