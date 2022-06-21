// @ts-nocheck

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
 * @bitfield 
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
/**
 * Copy an access control list.
 * @param list A list of        #GnomeKeyringAccessControl pointers.
 */
function acl_copy(list: AccessControl[]): AccessControl[]
/**
 * Free an access control list.
 * @param acl A list of       #GnomeKeyringAccessControl pointers.
 */
function acl_free(acl: AccessControl[]): void
/**
 * Store a key-value-pair with a string value in `attributes`.
 * @param attributes A #GnomeKeyringAttributeList
 * @param name The name of the new attribute
 * @param value The value to store in `attributes`
 */
function attribute_list_append_string(attributes: AttributeList, name: string, value: string): void
/**
 * Store a key-value-pair with an unsigned 32bit number value in `attributes`.
 * @param attributes A #GnomeKeyringAttributeList
 * @param name The name of the new attribute
 * @param value The value to store in `attributes`
 */
function attribute_list_append_uint32(attributes: AttributeList, name: string, value: number): void
/**
 * Copy a list of item attributes.
 * @param attributes A #GnomeKeyringAttributeList to copy.
 */
function attribute_list_copy(attributes: AttributeList): AttributeList
/**
 * Free the memory used by `attributes`.
 * 
 * If a %NULL pointer is passed, it is ignored.
 * @param attributes A #GnomeKeyringAttributeList
 */
function attribute_list_free(attributes: AttributeList): void
function attribute_list_get_type(): GObject.GType
/**
 * Create a new #GnomeKeyringAttributeList.
 */
function attribute_list_new(): AttributeList
/**
 * Create #GList of #GnomeKeyringAttribute pointers from `attributes`. This is
 * mostly useful in language bindings which cannot directly use a #GArray.
 * @param attributes A #GnomeKeyringAttributeList
 */
function attribute_list_to_glist(attributes: AttributeList): Attribute[]
/**
 * Cancel an asynchronous request.
 * 
 * If a callback was registered when making the asynchronous request, that callback
 * function will be called with a result of %GNOME_KEYRING_RESULT_CANCELLED
 * @param request The request returned from the asynchronous call function.
 */
function cancel_request(request: object): void
/**
 * Change the password for `keyring`. In most cases you would specify %NULL for
 * both the `original` and `password` arguments and allow the user to type the
 * correct passwords.
 * 
 * For an asynchronous version of this function see gnome_keyring_change_password().
 * @param keyring The name of the keyring to change the password for. Cannot be %NULL
 * @param original The old keyring password, or %NULL to prompt the            user for it.
 * @param password The new keyring password, or %NULL to prompt the            user for it.
 */
function change_password_sync(keyring: string, original: string | null, password: string | null): Result
/**
 * Create a new keyring with the specified name. In most cases %NULL will be
 * passed in as the `password,` which will prompt the user to enter a password
 * of their choice.
 * 
 * For an asynchronous version of this function see gnome_keyring_create().
 * @param keyring_name The new keyring name. Must not be %NULL
 * @param password The password for the new keyring. If %NULL user            will be prompted.
 */
function create_sync(keyring_name: string, password: string | null): Result
function daemon_prepare_environment_sync(): Result
function daemon_set_display_sync(display: string): Result
/**
 * Delete `keyring`. Once a keyring is deleted there is no mechanism for
 * recovery of its contents.
 * 
 * For an asynchronous version of this function see gnome_keyring_delete().
 * @param keyring The name of the keyring to delete. Cannot be %NULL
 */
function delete_sync(keyring: string): Result
/**
 * Searches through all keyrings for items that match the `attributes` and `type`.
 * The matches are for exact equality.
 * 
 * A %GList of GnomeKeyringFound structures is returned in `found`. The list may
 * have zero items if nothing matched the criteria. The list should be freed
 * using gnome_keyring_found_list_free().
 * 
 * The user may have been prompted to unlock necessary keyrings, and user will
 * have been prompted for access to the items if needed.
 * 
 * For an asynchronous version of this function see gnome_keyring_find_items().
 * @param type The type of items to find.
 * @param attributes A list of attributes to search for. This cannot be an empty list.
 */
function find_items_sync(type: ItemType, attributes: AttributeList): [ /* returnType */ Result, /* found */ Found[] ]
/**
 * Find a previously stored network password. Searches all keyrings.
 * 
 * A %GList of #GnomeKeyringNetworkPasswordData structures are returned in the
 * `out_list` argument. The list should be freed with gnome_keyring_network_password_list_free()
 * 
 * The user may have been prompted to unlock necessary keyrings, and user will
 * have been prompted for access to the items if needed.
 * 
 * Network passwords are items with the item type %GNOME_KEYRING_ITEM_NETWORK_PASSWORD
 * @param user The user name or %NULL.
 * @param domain The domain name or %NULL.
 * @param server The server or %NULL.
 * @param object The remote object or %NULL.
 * @param protocol The network protocol or %NULL.
 * @param authtype The authentication type or %NULL.
 * @param port The network port or zero.
 */
function find_network_password_sync(user: string | null, domain: string | null, server: string | null, object: string | null, protocol: string | null, authtype: string | null, port: number): [ /* returnType */ Result, /* results */ NetworkPasswordData[] ]
/**
 * Free the memory used by the #GnomeKeyringFound items in `found_list`.
 * @param found_list a #GList of #GnomeKeyringFound
 */
function found_list_free(found_list: Found[]): void
/**
 * Clears the memory used by password by filling with '\0' and frees the memory
 * after doing this. You should use this function instead of g_free() for
 * secret information.
 * @param password the password to be freed
 */
function free_password(password: string): void
/**
 * Get the default keyring name.
 * 
 * The string returned in `keyring` must be freed with g_free().
 * 
 * For an asynchronous version of this function see gnome_keyring_get_default_keyring().
 */
function get_default_keyring_sync(): [ /* returnType */ Result, /* keyring */ string ]
/**
 * Get information about `keyring`.
 * 
 * The #GnomeKeyringInfo structure returned in `info` must be freed with
 * gnome_keyring_info_free().
 * 
 * For an asynchronous version of this function see gnome_keyring_get_info().
 * @param keyring The name of the keyring, or %NULL for the default           keyring.
 */
function get_info_sync(keyring: string | null): [ /* returnType */ Result, /* info */ Info ]
/**
 * Check whether you can communicate with a gnome-keyring-daemon.
 */
function is_available(): boolean
/**
 * Get the application access rights for the access control.
 * @param ac A #GnomeKeyringAccessControl pointer.
 */
function item_ac_get_access_type(ac: AccessControl): AccessType
/**
 * Get the access control application's display name.
 * @param ac A #GnomeKeyringAccessControl pointer.
 */
function item_ac_get_display_name(ac: AccessControl): string
/**
 * Get the access control application's full path name.
 * @param ac A #GnomeKeyringAccessControl pointer.
 */
function item_ac_get_path_name(ac: AccessControl): string
/**
 * Set the application access rights for the access control.
 * @param ac A #GnomeKeyringAccessControl pointer.
 * @param value The new access rights.
 */
function item_ac_set_access_type(ac: AccessControl, value: AccessType): void
/**
 * Set the access control application's display name.
 * @param ac A #GnomeKeyringAccessControl pointer.
 * @param value The new application display name.
 */
function item_ac_set_display_name(ac: AccessControl, value: string): void
/**
 * Set the access control application's full path name.
 * @param ac A #GnomeKeyringAccessControl pointer
 * @param value The new application full path.
 */
function item_ac_set_path_name(ac: AccessControl, value: string): void
/**
 * Create a new item in a keyring.
 * 
 * The `secret` must be a null terminated string. It should be allocated using secure
 * memory whenever possible. See gnome_keyring_memory_strdup()
 * 
 * The user may have been prompted to unlock necessary keyrings. If %NULL is
 * specified as the `keyring` and no default keyring exists, the user will be
 * prompted to create a new keyring.
 * 
 * When `update_if_exists` is set to %TRUE, the user may be prompted for access
 * to the previously existing item.
 * 
 * For an asynchronous version of this function see gnome_keyring_item_create().
 * @param keyring The name of the keyring in which to create the item,           or %NULL for the default keyring.
 * @param type The item type.
 * @param display_name The name of the item. This will be displayed to the user where necessary.
 * @param attributes A (possibly empty) list of attributes to store with the item.
 * @param secret The password or secret of the item.
 * @param update_if_exists If true, then another item matching the type, and attributes  will be updated instead of creating a new item.
 */
function item_create_sync(keyring: string | null, type: ItemType, display_name: string, attributes: AttributeList, secret: string, update_if_exists: boolean): [ /* returnType */ Result, /* item_id */ number ]
/**
 * Delete an item in a keyring.
 * 
 * The user may be prompted if the calling application doesn't have necessary
 * access to delete the item.
 * 
 * For an asynchronous version of this function see gnome_keyring_item_delete().
 * @param keyring The name of the keyring from which to delete the           item, or %NULL for the default keyring.
 * @param id The id of the item
 */
function item_delete_sync(keyring: string | null, id: number): Result
function item_get_acl_sync(keyring: string | null, id: number): [ /* returnType */ Result, /* acl */ AccessControl[] ]
/**
 * Get all attributes for an item.
 * 
 * A #GnomeKeyringAttributeList will be returned in `attributes`. This should be
 * freed using gnome_keyring_attribute_list_free().
 * 
 * For an asynchronous version of this function see gnome_keyring_item_get_attributes().
 * @param keyring The name of the keyring in which the item exists, or           %NULL for the default keyring.
 * @param id The id of the item
 * @param attributes The location to return a pointer to the attribute list.
 */
function item_get_attributes_sync(keyring: string | null, id: number, attributes: AttributeList): Result
/**
 * Get information about an item, optionally retrieving its secret.
 * 
 * If `flags` includes %GNOME_KEYRING_ITEM_INFO_SECRET then the user may be
 * prompted if the calling application doesn't have necessary access to read
 * the item with its secret.
 * 
 * A #GnomeKeyringItemInfo structure will be returned in `info`. Certain fields
 * of this structure may be %NULL or zero if they were not specified in `flags`.
 * This must be freed using gnome_keyring_item_info_free().
 * 
 * For an asynchronous version of this function see gnome_keyring_item_get_info_full().
 * @param keyring The name of the keyring in which the item exists, or           %NULL for the default keyring.
 * @param id The id of the item
 * @param flags The parts of the item to retrieve.
 */
function item_get_info_full_sync(keyring: string | null, id: number, flags: number): [ /* returnType */ Result, /* info */ ItemInfo ]
/**
 * Get information about an item and its secret.
 * 
 * The user may be prompted if the calling application doesn't have necessary
 * access to read the item with its secret.
 * 
 * A #GnomeKeyringItemInfo structure will be returned in `info`. This must be
 * freed using gnome_keyring_item_info_free().
 * 
 * For an asynchronous version of this function see gnome_keyring_item_get_info().
 * @param keyring The name of the keyring in which the item exists, or           %NULL for the default keyring.
 * @param id The id of the item
 */
function item_get_info_sync(keyring: string | null, id: number): [ /* returnType */ Result, /* info */ ItemInfo ]
/**
 * Will grant the application access rights to the item, provided
 * callee has write access to said item.
 * @param keyring The keyring name, or %NULL for the default keyring.
 * @param display_name The display name for the application, as returned by g_get_application_name().
 * @param full_path The full filepath to the application.
 * @param id The id of the item to grant access to.
 * @param rights The type of rights to grant.
 */
function item_grant_access_rights_sync(keyring: string | null, display_name: string, full_path: string, id: number, rights: AccessType): Result
function item_set_acl_sync(keyring: string | null, id: number, acl: AccessControl[]): Result
/**
 * Set all the attributes for an item. This will replace any previous attributes
 * set on the item.
 * 
 * For an asynchronous version of this function see gnome_keyring_item_set_attributes().
 * @param keyring The name of the keyring in which the item exists, or           %NULL for the default keyring.
 * @param id The id of the item
 * @param attributes The full list of attributes to set on the item.
 */
function item_set_attributes_sync(keyring: string | null, id: number, attributes: AttributeList): Result
/**
 * Set information on an item, like its display name, secret etc...
 * 
 * Only the fields in the `info` pointer that are non-null or non-zero will be
 * set on the item.
 * 
 * For an asynchronous version of this function see gnome_keyring_item_set_info().
 * @param keyring The name of the keyring in which the item exists, or           %NULL for the default keyring.
 * @param id The id of the item
 * @param info The item info to save into the item.
 */
function item_set_info_sync(keyring: string | null, id: number, info: ItemInfo): Result
/**
 * Get a list of all the ids for items in `keyring`.
 * 
 * Use GPOINTER_TO_UINT() on the list to access the integer ids. The list
 * should be freed with g_list_free().
 * 
 * For an asynchronous version of this function see gnome_keyring_list_item_ids().
 * @param keyring The name of the keyring, or %NULL for the default           keyring.
 */
function list_item_ids_sync(keyring: string | null): [ /* returnType */ Result, /* ids */ number[] ]
/**
 * Get a list of keyring names.
 * 
 * The list returned in in `keyrings` must be freed using
 * gnome_keyring_string_list_free().
 * 
 * For an asynchronous version of this function see gnome_keyring_list_keyring_names().
 */
function list_keyring_names_sync(): [ /* returnType */ Result, /* keyrings */ string[] ]
/**
 * Lock all the keyrings, so that their contents may not eb accessed without
 * first unlocking them with a password.
 * 
 * For an asynchronous version of this function see gnome_keyring_lock_all().
 */
function lock_all_sync(): Result
/**
 * Lock a `keyring,` so that its contents may not be accessed without first
 * supplying a password.
 * 
 * Most keyring opretaions involving items require that you first unlock the
 * keyring. One exception is gnome_keyring_find_items_sync() and related functions.
 * 
 * For an asynchronous version of this function see gnome_keyring_lock().
 * @param keyring The name of the keyring to lock, or %NULL for the           default keyring.
 */
function lock_sync(keyring: string | null): Result
/**
 * Free a network password data pointer. If %NULL is passed in,
 * nothing happens.
 * @param data A #GnomeKeyringNetworkPasswordData pointer.
 */
function network_password_free(data: NetworkPasswordData | null): void
/**
 * Free a list of network password data.
 * @param list A list of        #GnomeKeyringNetworkPasswordData pointers.
 */
function network_password_list_free(list: NetworkPasswordData[]): void
/**
 * The #GNOME_KEYRING_RESULT_OK and #GNOME_KEYRING_RESULT_CANCELLED
 * codes will return an empty string.
 * 
 * Note that there are some results for which the application will need to
 * take appropriate action rather than just display an error message to
 * the user.
 * @param res A #GnomeKeyringResult
 */
function result_to_message(res: Result): string
/**
 * Change the default keyring.
 * 
 * For an asynchronous version of this function see gnome_keyring_set_default_keyring().
 * @param keyring The keyring to make default
 */
function set_default_keyring_sync(keyring: string): Result
/**
 * Set flags and info for `keyring`. The only fields in `info` that are used
 * are lock_on_idle and lock_timeout.
 * 
 * For an asynchronous version of this function see gnome_keyring_set_info().
 * @param keyring The name of the keyring, or %NULL for the default           keyring.
 * @param info A structure containing flags and info for the keyring.
 */
function set_info_sync(keyring: string | null, info: Info): Result
/**
 * Store a network password.
 * 
 * If an item already exists for with this network info (ie: user, server etc...)
 * then it will be updated.
 * 
 * The created or updated item id will be returned in `item_id`.
 * 
 * Network passwords are items with the item type %GNOME_KEYRING_ITEM_NETWORK_PASSWORD
 * @param keyring The keyring to store the password in, or %NULL for           the default keyring.
 * @param user The user name or %NULL.
 * @param domain The domain name or %NULL.
 * @param server The server or %NULL.
 * @param object The remote object or %NULL.
 * @param protocol The network protocol or %NULL.
 * @param authtype The authentication type or %NULL.
 * @param port The network port or zero.
 * @param password The password to store, must not be %NULL.
 */
function set_network_password_sync(keyring: string | null, user: string | null, domain: string | null, server: string | null, object: string | null, protocol: string | null, authtype: string | null, port: number, password: string): [ /* returnType */ Result, /* item_id */ number ]
/**
 * Free a list of string pointers.
 * @param strings A %GList of string pointers.
 */
function string_list_free(strings: string[]): void
/**
 * Unlock a `keyring,` so that its contents may be accessed. In most cases %NULL
 * will be passed in as the `password,` which will prompt the user to enter the
 * correct password.
 * 
 * Most keyring opretaions involving items require that yo ufirst unlock the
 * keyring. One exception is gnome_keyring_find_items_sync() and related functions.
 * 
 * For an asynchronous version of this function see gnome_keyring_unlock().
 * @param keyring The name of the keyring to unlock, or %NULL for the           default keyring.
 * @param password The password to unlock the keyring with, or %NULL            to prompt the user.
 */
function unlock_sync(keyring: string | null, password: string | null): Result
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
interface AccessControl {

    // Owm methods of GnomeKeyring-1.0.GnomeKeyring.AccessControl

    /**
     * Copy an access control for an item.
     */
    copy(): AccessControl
    /**
     * Free an access control for an item.
     */
    free(): void
}

/**
 * A structure which contains access control information.
 * @record 
 */
class AccessControl {

    // Own properties of GnomeKeyring-1.0.GnomeKeyring.AccessControl

    static name: string

    // Constructors of GnomeKeyring-1.0.GnomeKeyring.AccessControl

    /**
     * Create a new access control for an item. Combine the various access
     * rights allowed.
     * @constructor 
     * @param application A #GnomeKeyringApplicationRef pointer
     * @param types_allowed Access types allowed.
     */
    constructor(application: ApplicationRef, types_allowed: AccessType) 
    /**
     * Create a new access control for an item. Combine the various access
     * rights allowed.
     * @constructor 
     * @param application A #GnomeKeyringApplicationRef pointer
     * @param types_allowed Access types allowed.
     */
    static new(application: ApplicationRef, types_allowed: AccessType): AccessControl
}

interface ApplicationRef {

    // Owm methods of GnomeKeyring-1.0.GnomeKeyring.ApplicationRef

    /**
     * Copy an application reference.
     */
    copy(): ApplicationRef
    /**
     * Free an application reference.
     */
    free(): void
}

class ApplicationRef {

    // Own properties of GnomeKeyring-1.0.GnomeKeyring.ApplicationRef

    static name: string

    // Constructors of GnomeKeyring-1.0.GnomeKeyring.ApplicationRef

    /**
     * Create a new application reference.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new application reference.
     * @constructor 
     */
    static new(): ApplicationRef
}

interface Attribute {

    // Own fields of GnomeKeyring-1.0.GnomeKeyring.Attribute

    /**
     * The name of the attribute.
     * @field 
     */
    name: string
    /**
     * The data type.
     * @field 
     */
    type: AttributeType

    // Owm methods of GnomeKeyring-1.0.GnomeKeyring.Attribute

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
}

/**
 * An item attribute. Set <code>string</code> if data type is
 * %GNOME_KEYRING_ATTRIBUTE_TYPE_STRING or <code>integer</code> if data type is
 * %GNOME_KEYRING_ATTRIBUTE_TYPE_UINT32
 * @record 
 */
class Attribute {

    // Own properties of GnomeKeyring-1.0.GnomeKeyring.Attribute

    static name: string

    // Constructors of GnomeKeyring-1.0.GnomeKeyring.Attribute

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

interface Found {

    // Own fields of GnomeKeyring-1.0.GnomeKeyring.Found

    /**
     * The keyring the item was found in.
     * @field 
     */
    keyring: string
    /**
     * The identifier for the item.
     * @field 
     */
    item_id: number
    /**
     * The item's attributes.
     * @field 
     */
    attributes: AttributeList
    /**
     * The item's secret.
     * @field 
     */
    secret: string

    // Owm methods of GnomeKeyring-1.0.GnomeKeyring.Found

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
}

/**
 * A found structure returned by a found operation. Use gnome_keyring_found_list_free()
 * to free a list of these structures.
 * @record 
 */
class Found {

    // Own properties of GnomeKeyring-1.0.GnomeKeyring.Found

    static name: string

    // Constructors of GnomeKeyring-1.0.GnomeKeyring.Found

    /**
     * Free the memory used by the #GnomeKeyringFound items in `found_list`.
     * @param found_list a #GList of #GnomeKeyringFound
     */
    static list_free(found_list: Found[]): void
}

interface Info {

    // Owm methods of GnomeKeyring-1.0.GnomeKeyring.Info

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
}

class Info {

    // Own properties of GnomeKeyring-1.0.GnomeKeyring.Info

    static name: string
}

interface ItemInfo {

    // Owm methods of GnomeKeyring-1.0.GnomeKeyring.ItemInfo

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
}

class ItemInfo {

    // Own properties of GnomeKeyring-1.0.GnomeKeyring.ItemInfo

    static name: string

    // Constructors of GnomeKeyring-1.0.GnomeKeyring.ItemInfo

    /**
     * Create a new #GnomeKeyringItemInfo object.
     * Free the #GnomeKeyringItemInfo object.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #GnomeKeyringItemInfo object.
     * Free the #GnomeKeyringItemInfo object.
     * @constructor 
     */
    static new(): ItemInfo
}

interface NetworkPasswordData {

    // Own fields of GnomeKeyring-1.0.GnomeKeyring.NetworkPasswordData

    /**
     * Keyring item stored in.
     * @field 
     */
    keyring: string
    /**
     * The identifier of the item.
     * @field 
     */
    item_id: number
    /**
     * Network protocol or scheme.
     * @field 
     */
    protocol: string
    /**
     * Server or host name.
     * @field 
     */
    server: string
    /**
     * Share or other object on server.
     * @field 
     */
    object: string
    /**
     * Type of authentication.
     * @field 
     */
    authtype: string
    /**
     * TCP port.
     * @field 
     */
    port: number
    /**
     * User name.
     * @field 
     */
    user: string
    /**
     * User domain
     * @field 
     */
    domain: string
    /**
     * The password.
     * @field 
     */
    password: string
}

/**
 * Network password info.
 * @record 
 */
class NetworkPasswordData {

    // Own properties of GnomeKeyring-1.0.GnomeKeyring.NetworkPasswordData

    static name: string
}

interface PasswordSchema {

    // Own fields of GnomeKeyring-1.0.GnomeKeyring.PasswordSchema

    /**
     * The item type for this schema.
     * @field 
     */
    item_type: ItemType
    /**
     * list of attributes
     * @field 
     */
    attributes: PasswordSchemaAttribute[]
}

/**
 * Describes a password schema. Often you'll want to use a predefined schema such
 * as %GNOME_KEYRING_NETWORK_PASSWORD.
 * 
 * <para>
 * The last attribute name in a schema must be %NULL.
 * 
 * <programlisting>
 *   GnomeKeyringPasswordSchema my_schema = {
 *       GNOME_KEYRING_ITEM_GENERIC_SECRET,
 *       {
 *            { "string-attr", GNOME_KEYRING_ATTRIBUTE_TYPE_STRING },
 *            { "uint-attr", GNOME_KEYRING_ATTRIBUTE_TYPE_UINT32 },
 *            { NULL, 0 }
 *       }
 *   };
 * </programlisting>
 * </para>
 * @record 
 */
class PasswordSchema {

    // Own properties of GnomeKeyring-1.0.GnomeKeyring.PasswordSchema

    static name: string
}

interface PasswordSchemaAttribute {

    // Own fields of GnomeKeyring-1.0.GnomeKeyring.PasswordSchemaAttribute

    /**
     * the attribute name
     * @field 
     */
    name: string
    /**
     * the attribute data type
     * @field 
     */
    type: AttributeType
}

/**
 * One attribute of a #GnomeKeyringPasswordSchema.
 * @record 
 */
class PasswordSchemaAttribute {

    // Own properties of GnomeKeyring-1.0.GnomeKeyring.PasswordSchemaAttribute

    static name: string
}

    type AttributeList = GLib.Array
}
export default GnomeKeyring;