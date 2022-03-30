/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GnomeKeyring-1.0
 */

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
function aclCopy(list: AccessControl[]): AccessControl[]
function aclFree(acl: AccessControl[]): void
function attributeListAppendString(attributes: AttributeList, name: string, value: string): void
function attributeListAppendUint32(attributes: AttributeList, name: string, value: number): void
function attributeListCopy(attributes: AttributeList): AttributeList
function attributeListFree(attributes: AttributeList): void
function attributeListGetType(): GObject.Type
function attributeListNew(): AttributeList
function attributeListToGlist(attributes: AttributeList): Attribute[]
function cancelRequest(request: object): void
function changePasswordSync(keyring: string, original?: string | null, password?: string | null): Result
function createSync(keyringName: string, password?: string | null): Result
function daemonPrepareEnvironmentSync(): Result
function daemonSetDisplaySync(display: string): Result
function deleteSync(keyring: string): Result
function findItemsSync(type: ItemType, attributes: AttributeList): [ /* returnType */ Result, /* found */ Found[] ]
function findNetworkPasswordSync(user: string | null, domain: string | null, server: string | null, object: string | null, protocol: string | null, authtype: string | null, port: number): [ /* returnType */ Result, /* results */ NetworkPasswordData[] ]
function foundListFree(foundList: Found[]): void
function freePassword(password: string): void
function getDefaultKeyringSync(): [ /* returnType */ Result, /* keyring */ string ]
function getInfoSync(keyring?: string | null): [ /* returnType */ Result, /* info */ Info ]
function isAvailable(): boolean
function itemAcGetAccessType(ac: AccessControl): AccessType
function itemAcGetDisplayName(ac: AccessControl): string
function itemAcGetPathName(ac: AccessControl): string
function itemAcSetAccessType(ac: AccessControl, value: AccessType): void
function itemAcSetDisplayName(ac: AccessControl, value: string): void
function itemAcSetPathName(ac: AccessControl, value: string): void
function itemCreateSync(keyring: string | null, type: ItemType, displayName: string, attributes: AttributeList, secret: string, updateIfExists: boolean): [ /* returnType */ Result, /* itemId */ number ]
function itemDeleteSync(keyring: string | null, id: number): Result
function itemGetAclSync(keyring: string | null, id: number): [ /* returnType */ Result, /* acl */ AccessControl[] ]
function itemGetAttributesSync(keyring: string | null, id: number, attributes: AttributeList): Result
function itemGetInfoFullSync(keyring: string | null, id: number, flags: number): [ /* returnType */ Result, /* info */ ItemInfo ]
function itemGetInfoSync(keyring: string | null, id: number): [ /* returnType */ Result, /* info */ ItemInfo ]
function itemGrantAccessRightsSync(keyring: string | null, displayName: string, fullPath: string, id: number, rights: AccessType): Result
function itemSetAclSync(keyring: string | null, id: number, acl: AccessControl[]): Result
function itemSetAttributesSync(keyring: string | null, id: number, attributes: AttributeList): Result
function itemSetInfoSync(keyring: string | null, id: number, info: ItemInfo): Result
function listItemIdsSync(keyring?: string | null): [ /* returnType */ Result, /* ids */ number[] ]
function listKeyringNamesSync(): [ /* returnType */ Result, /* keyrings */ string[] ]
function lockAllSync(): Result
function lockSync(keyring?: string | null): Result
function networkPasswordFree(data?: NetworkPasswordData | null): void
function networkPasswordListFree(list: NetworkPasswordData[]): void
function resultToMessage(res: Result): string
function setDefaultKeyringSync(keyring: string): Result
function setInfoSync(keyring: string | null, info: Info): Result
function setNetworkPasswordSync(keyring: string | null, user: string | null, domain: string | null, server: string | null, object: string | null, protocol: string | null, authtype: string | null, port: number, password: string): [ /* returnType */ Result, /* itemId */ number ]
function stringListFree(strings: string[]): void
function unlockSync(keyring?: string | null, password?: string | null): Result
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
    static new(application: ApplicationRef, typesAllowed: AccessType): AccessControl
    constructor(application: ApplicationRef, typesAllowed: AccessType)
    /* Static methods and pseudo-constructors */
    static new(application: ApplicationRef, typesAllowed: AccessType): AccessControl
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
    getString(): string
    /**
     * Return the uint32 value. It is an error to call this method if
     * `attribute`.type is not #GNOME_KEYRING_ATTRIBUTE_TYPE_UINT32. This method is
     * mostly useful for language bindings which do not provide union access. In C
     * you should just use attribute->value.integer.
     */
    getUint32(): number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Store a key-value-pair with a string value in `attributes`.
     * @param attributes A #GnomeKeyringAttributeList
     * @param name The name of the new attribute
     * @param value The value to store in `attributes`
     */
    static listAppendString(attributes: AttributeList, name: string, value: string): void
    /**
     * Store a key-value-pair with an unsigned 32bit number value in `attributes`.
     * @param attributes A #GnomeKeyringAttributeList
     * @param name The name of the new attribute
     * @param value The value to store in `attributes`
     */
    static listAppendUint32(attributes: AttributeList, name: string, value: number): void
    /**
     * Copy a list of item attributes.
     * @param attributes A #GnomeKeyringAttributeList to copy.
     */
    static listCopy(attributes: AttributeList): AttributeList
    /**
     * Free the memory used by `attributes`.
     * 
     * If a %NULL pointer is passed, it is ignored.
     * @param attributes A #GnomeKeyringAttributeList
     */
    static listFree(attributes: AttributeList): void
    /**
     * Create a new #GnomeKeyringAttributeList.
     */
    static listNew(): AttributeList
    /**
     * Create #GList of #GnomeKeyringAttribute pointers from `attributes`. This is
     * mostly useful in language bindings which cannot directly use a #GArray.
     * @param attributes A #GnomeKeyringAttributeList
     */
    static listToGlist(attributes: AttributeList): Attribute[]
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
    itemId: number
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
     * @param foundList a #GList of #GnomeKeyringFound
     */
    static listFree(foundList: Found[]): void
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
    getCtime(): number
    /**
     * Get whether the keyring is locked or not.
     */
    getIsLocked(): boolean
    /**
     * Get whether or not to lock a keyring after a certain amount of idle time.
     * 
     * See also gnome_keyring_info_get_lock_timeout().
     */
    getLockOnIdle(): boolean
    /**
     * Get the idle timeout, in seconds, after which to lock the keyring.
     * 
     * See also gnome_keyring_info_get_lock_on_idle().
     */
    getLockTimeout(): number
    /**
     * Get the time at which the keyring was last modified.
     */
    getMtime(): number
    /**
     * Set whether or not to lock a keyring after a certain amount of idle time.
     * 
     * See also gnome_keyring_info_set_lock_timeout().
     * @param value Whether to lock or not.
     */
    setLockOnIdle(value: boolean): void
    /**
     * Set the idle timeout, in seconds, after which to lock the keyring.
     * 
     * See also gnome_keyring_info_set_lock_on_idle().
     * @param value The lock timeout in seconds.
     */
    setLockTimeout(value: number): void
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
    getCtime(): number
    /**
     * Get the item display name.
     */
    getDisplayName(): string
    /**
     * Get the item last modified time.
     */
    getMtime(): number
    /**
     * Get the item secret.
     */
    getSecret(): string
    /**
     * Get the item type.
     */
    getType(): ItemType
    /**
     * Set the display name on an item info.
     * @param value The new display name.
     */
    setDisplayName(value: string): void
    /**
     * Set the secret on an item info.
     * @param value The new item secret
     */
    setSecret(value: string): void
    /**
     * Set the type on an item info.
     * @param type The new item type
     */
    setType(type: ItemType): void
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
    itemId: number
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
    itemType: ItemType
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