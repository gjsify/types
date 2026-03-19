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
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace GnomeKeyring {
    /**
     * GnomeKeyring-1.0
     */

    /**
     * Type of access restriction.
     * @gir-type Enum
     * @deprecated No permission prompts are supported.
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

    /**
     * @gir-type Enum
     */
    enum AttributeType {
        STRING,
        UINT32,
    }

    /**
     * The types of items.
     * @gir-type Enum
     * @deprecated Use `SecretSchema` instead.
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
     * @gir-type Enum
     * @deprecated Errors are returned from libsecret functions as {@link GLib.Error}.
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

    const ITEM_APPLICATION_SECRET: number;
    const ITEM_INFO_ALL: number;
    const ITEM_TYPE_MASK: number;
    /**
     * <para>
     * A keyring only stored in memory.
     * </para>
     */
    const SESSION: string;
    /**
     * Copy an access control list.
     * @param list A list of        {@link GnomeKeyring.AccessControl} pointers.
     * @returns A new list of {@link GnomeKeyring.AccessControl} items. Use `gnome_keyring_acl_free()` to free the memory.
     * @deprecated Not needed when using libsecret.
     */
    function acl_copy(list: AccessControl[]): AccessControl[];
    /**
     * Free an access control list.
     * @param acl A list of       {@link GnomeKeyring.AccessControl} pointers.
     * @deprecated Not needed when using libsecret.
     */
    function acl_free(acl: AccessControl[]): void;
    /**
     * Store a key-value-pair with a string value in `attributes`.
     * @param attributes A {@link GnomeKeyring.AttributeList}
     * @param name The name of the new attribute
     * @param value The value to store in `attributes`
     * @deprecated libsecret stores attributes as a {@link GLib.HashTable} containing             string keys and values, use `g_hash_table_replace()` instead.
     */
    function attribute_list_append_string(attributes: AttributeList, name: string, value: string): void;
    /**
     * Store a key-value-pair with an unsigned 32bit number value in `attributes`.
     * @param attributes A {@link GnomeKeyring.AttributeList}
     * @param name The name of the new attribute
     * @param value The value to store in `attributes`
     * @deprecated libsecret does not support number attributes.
     */
    function attribute_list_append_uint32(attributes: AttributeList, name: string, value: number): void;
    /**
     * Copy a list of item attributes.
     * @param attributes A {@link GnomeKeyring.AttributeList} to copy.
     * @returns The new {@link GnomeKeyring.AttributeList}
     * @deprecated Not needed when using libsecret.
     */
    function attribute_list_copy(attributes: AttributeList): AttributeList;
    /**
     * Free the memory used by `attributes`.
     *
     * If a `null` pointer is passed, it is ignored.
     * @param attributes A {@link GnomeKeyring.AttributeList}
     * @deprecated libsecret stores attributes as a {@link GLib.HashTable} containing             string keys and values, use `g_hash_table_unref()` instead.
     */
    function attribute_list_free(attributes: AttributeList): void;
    function attribute_list_get_type(): GObject.GType;
    /**
     * Create a new {@link GnomeKeyring.AttributeList}.
     * @returns The new {@link GnomeKeyring.AttributeList}
     * @deprecated libsecret stores attributes as a {@link GLib.HashTable} containing             string keys and values; use `g_hash_table_new()` instead.
     */
    function attribute_list_new(): AttributeList;
    /**
     * Create {@link GLib.List} of {@link GnomeKeyring.Attribute} pointers from `attributes`. This is
     * mostly useful in language bindings which cannot directly use a {@link GLib.Array}.
     * @param attributes A {@link GnomeKeyring.AttributeList}
     * @returns {@link GLib.List} of {@link GnomeKeyring.Attribute}.
     * @since 3.4
     * @deprecated Not needed when using libsecret.
     */
    function attribute_list_to_glist(attributes: AttributeList): Attribute[];
    /**
     * Cancel an asynchronous request.
     *
     * If a callback was registered when making the asynchronous request, that callback
     * function will be called with a result of {@link GnomeKeyring.Result.CANCELLED}
     * @param request The request returned from the asynchronous call function.
     * @deprecated When using libsecret, use `GCancellable` to cancel asynchronous             requests.
     */
    function cancel_request(request: any): void;
    /**
     * Change the password for `keyring`. In most cases you would specify `null` for
     * both the `original` and `password` arguments and allow the user to type the
     * correct passwords.
     *
     * For an asynchronous version of this function see `gnome_keyring_change_password()`.
     * @param keyring The name of the keyring to change the password for. Cannot be `null`
     * @param original The old keyring password, or `null` to prompt the            user for it.
     * @param password The new keyring password, or `null` to prompt the            user for it.
     * @returns {@link GnomeKeyring.Result.OK} if the operation was succcessful or an error result otherwise.
     * @deprecated Not used with libsecret.
     */
    function change_password_sync(keyring: string, original?: string | null, password?: string | null): Result;
    /**
     * Create a new keyring with the specified name. In most cases `null` will be
     * passed in as the `password`, which will prompt the user to enter a password
     * of their choice.
     *
     * For an asynchronous version of this function see `gnome_keyring_create()`.
     * @param keyring_name The new keyring name. Must not be `null`
     * @param password The password for the new keyring. If `null` user            will be prompted.
     * @returns {@link GnomeKeyring.Result.OK} if the operation was succcessful or an error result otherwise.
     * @deprecated Use `secret_collection_create_sync()` instead.
     */
    function create_sync(keyring_name: string, password?: string | null): Result;
    /**
     * @returns GNOME_KEYRING_RESULT_OK
     * @deprecated No longer supported, call is ignored.
     */
    function daemon_prepare_environment_sync(): Result;
    /**
     * @param display Deprecated
     * @returns GNOME_KEYRING_RESULT_DENIED
     * @deprecated No longer supported, always fails.
     */
    function daemon_set_display_sync(display: string): Result;
    /**
     * Delete `keyring`. Once a keyring is deleted there is no mechanism for
     * recovery of its contents.
     *
     * For an asynchronous version of this function see `gnome_keyring_delete()`.
     * @param keyring The name of the keyring to delete. Cannot be `null`
     * @returns {@link GnomeKeyring.Result.OK} if the operation was succcessful or an error result otherwise.
     * @deprecated Use `secret_collection_delete_sync()` instead.
     */
    function delete_sync(keyring: string): Result;
    /**
     * Searches through all keyrings for items that match the `attributes` and `type`.
     * The matches are for exact equality.
     *
     * A %GList of GnomeKeyringFound structures is returned in `found`. The list may
     * have zero items if nothing matched the criteria. The list should be freed
     * using `gnome_keyring_found_list_free()`.
     *
     * The user may have been prompted to unlock necessary keyrings, and user will
     * have been prompted for access to the items if needed.
     *
     * For an asynchronous version of this function see `gnome_keyring_find_items()`.
     * @param type The type of items to find.
     * @param attributes A list of attributes to search for. This cannot be an empty list.
     * @returns {@link GnomeKeyring.Result.OK} if the operation was succcessful or an error result otherwise.
     * @deprecated Use `secret_password_lookup_sync()` or `secret_service_search_sync()` instead.
     */
    function find_items_sync(type: ItemType | null, attributes: AttributeList): [Result, Found[]];
    /**
     * Find a previously stored network password. Searches all keyrings.
     *
     * A %GList of {@link GnomeKeyring.NetworkPasswordData} structures are returned in the
     * `out_list` argument. The list should be freed with `gnome_keyring_network_password_list_free()`
     *
     * The user may have been prompted to unlock necessary keyrings, and user will
     * have been prompted for access to the items if needed.
     *
     * Network passwords are items with the item type {@link GnomeKeyring.ItemType.NETWORK_PASSWORD}
     * @param user The user name or `null`.
     * @param domain The domain name or `null`.
     * @param server The server or `null`.
     * @param object The remote object or `null`.
     * @param protocol The network protocol or `null`.
     * @param authtype The authentication type or `null`.
     * @param port The network port or zero.
     * @returns {@link GnomeKeyring.Result.OK} if the operation was succcessful or an error result otherwise.
     * @deprecated Use `secret_password_lookup_sync()` with `SECRET_SCHEMA_COMPAT_NETWORK`.
     */
    function find_network_password_sync(
        user: string | null,
        domain: string | null,
        server: string | null,
        object: string | null,
        protocol: string | null,
        authtype: string | null,
        port: number,
    ): [Result, NetworkPasswordData[]];
    /**
     * Free the memory used by the {@link GnomeKeyring.Found} items in `found_list`.
     * @param found_list a {@link GLib.List} of {@link GnomeKeyring.Found}
     * @deprecated Not needed when using libsecret.
     */
    function found_list_free(found_list: Found[]): void;
    /**
     * Clears the memory used by password by filling with '\0' and frees the memory
     * after doing this. You should use this function instead of `g_free()` for
     * secret information.
     * @param password the password to be freed
     * @deprecated Use `secret_password_free()` instead.
     */
    function free_password(password: string): void;
    /**
     * Get the default keyring name.
     *
     * The string returned in `keyring` must be freed with `g_free()`.
     *
     * For an asynchronous version of this function see `gnome_keyring_get_default_keyring()`.
     * @returns {@link GnomeKeyring.Result.OK} if the operation was succcessful or an error result otherwise.
     * @deprecated Use `secret_collection_for_alias_sync()` instead.
     */
    function get_default_keyring_sync(): [Result, string];
    /**
     * Get information about `keyring`.
     *
     * The {@link GnomeKeyring.Info} structure returned in `info` must be freed with
     * `gnome_keyring_info_free()`.
     *
     * For an asynchronous version of this function see `gnome_keyring_get_info()`.
     * @param keyring The name of the keyring, or `null` for the default           keyring.
     * @returns {@link GnomeKeyring.Result.OK} if the operation was succcessful or an error result otherwise.
     * @deprecated Use `SecretCollection` objects instead.
     */
    function get_info_sync(keyring: string | null): [Result, Info];
    /**
     * Check whether you can communicate with a gnome-keyring-daemon.
     * @returns `false` if you can't communicate with the daemon (so you can't load and save passwords).
     * @deprecated Not needed when using libsecret. The gnome-keyring daemon is             automatically started as needed.
     */
    function is_available(): boolean;
    /**
     * Get the application access rights for the access control.
     * @param ac A {@link GnomeKeyring.AccessControl} pointer.
     * @returns The access rights.
     * @deprecated Not supported when using libsecret.
     */
    function item_ac_get_access_type(ac: AccessControl): AccessType;
    /**
     * Get the access control application's display name.
     * @param ac A {@link GnomeKeyring.AccessControl} pointer.
     * @returns A newly allocated string containing the display name.
     * @deprecated Not supported when using libsecret.
     */
    function item_ac_get_display_name(ac: AccessControl): string;
    /**
     * Get the access control application's full path name.
     * @param ac A {@link GnomeKeyring.AccessControl} pointer.
     * @returns A newly allocated string containing the display name.
     * @deprecated Not supported when using libsecret.
     */
    function item_ac_get_path_name(ac: AccessControl): string;
    /**
     * Set the application access rights for the access control.
     * @param ac A {@link GnomeKeyring.AccessControl} pointer.
     * @param value The new access rights.
     * @deprecated Not supported when using libsecret.
     */
    function item_ac_set_access_type(ac: AccessControl, value: AccessType | null): void;
    /**
     * Set the access control application's display name.
     * @param ac A {@link GnomeKeyring.AccessControl} pointer.
     * @param value The new application display name.
     * @deprecated Not supported when using libsecret.
     */
    function item_ac_set_display_name(ac: AccessControl, value: string): void;
    /**
     * Set the access control application's full path name.
     * @param ac A {@link GnomeKeyring.AccessControl} pointer
     * @param value The new application full path.
     * @deprecated Not supported when using libsecret.
     */
    function item_ac_set_path_name(ac: AccessControl, value: string): void;
    /**
     * Create a new item in a keyring.
     *
     * The `secret` must be a null terminated string. It should be allocated using secure
     * memory whenever possible. See `gnome_keyring_memory_strdup()`
     *
     * The user may have been prompted to unlock necessary keyrings. If `null` is
     * specified as the `keyring` and no default keyring exists, the user will be
     * prompted to create a new keyring.
     *
     * When `update_if_exists` is set to `true`, the user may be prompted for access
     * to the previously existing item.
     *
     * For an asynchronous version of this function see `gnome_keyring_item_create()`.
     * @param keyring The name of the keyring in which to create the item,           or `null` for the default keyring.
     * @param type The item type.
     * @param display_name The name of the item. This will be displayed to the user where necessary.
     * @param attributes A (possibly empty) list of attributes to store with the item.
     * @param secret The password or secret of the item.
     * @param update_if_exists If true, then another item matching the type, and attributes  will be updated instead of creating a new item.
     * @returns {@link GnomeKeyring.Result.OK} if the operation was succcessful or an error result otherwise.
     * @deprecated Use `secret_password_store_sync()` or `secret_item_create_sync()` instead.
     */
    function item_create_sync(
        keyring: string | null,
        type: ItemType | null,
        display_name: string,
        attributes: AttributeList,
        secret: string,
        update_if_exists: boolean,
    ): [Result, number];
    /**
     * Delete an item in a keyring.
     *
     * The user may be prompted if the calling application doesn't have necessary
     * access to delete the item.
     *
     * For an asynchronous version of this function see `gnome_keyring_item_delete()`.
     * @param keyring The name of the keyring from which to delete the           item, or `null` for the default keyring.
     * @param id The id of the item
     * @returns {@link GnomeKeyring.Result.OK} if the operation was succcessful or an error result otherwise.
     * @deprecated Use `secret_password_clear_sync()` or `secret_item_delete_sync()` instead.
     */
    function item_delete_sync(keyring: string | null, id: number): Result;
    /**
     * @param keyring The name of the keyring in which the item exists, or           `null` for the default keyring.
     * @param id The id of the item
     * @returns Always {@link GnomeKeyring.Result.OK}.
     * @deprecated Never returns any acls.
     */
    function item_get_acl_sync(keyring: string | null, id: number): [Result, AccessControl[]];
    /**
     * Get all attributes for an item.
     *
     * A {@link GnomeKeyring.AttributeList} will be returned in `attributes`. This should be
     * freed using `gnome_keyring_attribute_list_free()`.
     *
     * For an asynchronous version of this function see `gnome_keyring_item_get_attributes()`.
     * @param keyring The name of the keyring in which the item exists, or           `null` for the default keyring.
     * @param id The id of the item
     * @param attributes The location to return a pointer to the attribute list.
     * @returns {@link GnomeKeyring.Result.OK} if the operation was succcessful or an error result otherwise.
     * @deprecated Use `secret_item_get_attributes()` instead.
     */
    function item_get_attributes_sync(keyring: string | null, id: number, attributes: AttributeList): Result;
    /**
     * Get information about an item, optionally retrieving its secret.
     *
     * If `flags` includes {@link GnomeKeyring.ItemInfoFlags.SECRET} then the user may be
     * prompted if the calling application doesn't have necessary access to read
     * the item with its secret.
     *
     * A {@link GnomeKeyring.ItemInfo} structure will be returned in `info`. Certain fields
     * of this structure may be `null` or zero if they were not specified in `flags`.
     * This must be freed using `gnome_keyring_item_info_free()`.
     *
     * For an asynchronous version of this function see `gnome_keyring_item_get_info_full()`.
     * @param keyring The name of the keyring in which the item exists, or           `null` for the default keyring.
     * @param id The id of the item
     * @param flags The parts of the item to retrieve.
     * @returns {@link GnomeKeyring.Result.OK} if the operation was succcessful or an error result otherwise.
     * @deprecated Use `SecretItem` objects instead.
     */
    function item_get_info_full_sync(keyring: string | null, id: number, flags: number): [Result, ItemInfo];
    /**
     * Get information about an item and its secret.
     *
     * The user may be prompted if the calling application doesn't have necessary
     * access to read the item with its secret.
     *
     * A {@link GnomeKeyring.ItemInfo} structure will be returned in `info`. This must be
     * freed using `gnome_keyring_item_info_free()`.
     *
     * For an asynchronous version of this function see `gnome_keyring_item_get_info()`.
     * @param keyring The name of the keyring in which the item exists, or           `null` for the default keyring.
     * @param id The id of the item
     * @returns {@link GnomeKeyring.Result.OK} if the operation was succcessful or an error result otherwise.
     * @deprecated Use `SecretItem` objects instead.
     */
    function item_get_info_sync(keyring: string | null, id: number): [Result, ItemInfo];
    /**
     * Will grant the application access rights to the item, provided
     * callee has write access to said item.
     * @param keyring The keyring name, or `null` for the default keyring.
     * @param display_name The display name for the application, as returned by `g_get_application_name()`.
     * @param full_path The full filepath to the application.
     * @param id The id of the item to grant access to.
     * @param rights The type of rights to grant.
     * @returns {@link GnomeKeyring.Result.OK} if the operation was succcessful or an error result otherwise.
     * @deprecated This function no longer has any effect.
     */
    function item_grant_access_rights_sync(
        keyring: string | null,
        display_name: string,
        full_path: string,
        id: number,
        rights: AccessType | null,
    ): Result;
    /**
     * @param keyring The name of the keyring in which the item exists, or           `null` for the default keyring.
     * @param id The id of the item
     * @param acl The access control list to       set on the item.
     * @returns {@link GnomeKeyring.Result.OK} if the operation was succcessful or an error result otherwise.
     * @deprecated This function no longer has any effect.
     */
    function item_set_acl_sync(keyring: string | null, id: number, acl: AccessControl[]): Result;
    /**
     * Set all the attributes for an item. This will replace any previous attributes
     * set on the item.
     *
     * For an asynchronous version of this function see `gnome_keyring_item_set_attributes()`.
     * @param keyring The name of the keyring in which the item exists, or           `null` for the default keyring.
     * @param id The id of the item
     * @param attributes The full list of attributes to set on the item.
     * @returns {@link GnomeKeyring.Result.OK} if the operation was succcessful or an error result otherwise.
     * @deprecated Use `secret_item_set_attributes_sync()` instead.
     */
    function item_set_attributes_sync(keyring: string | null, id: number, attributes: AttributeList): Result;
    /**
     * Set information on an item, like its display name, secret etc...
     *
     * Only the fields in the `info` pointer that are non-null or non-zero will be
     * set on the item.
     *
     * For an asynchronous version of this function see `gnome_keyring_item_set_info()`.
     * @param keyring The name of the keyring in which the item exists, or           `null` for the default keyring.
     * @param id The id of the item
     * @param info The item info to save into the item.
     * @returns {@link GnomeKeyring.Result.OK} if the operation was succcessful or an error result otherwise.
     * @deprecated Use `SecretItem` objects instead.
     */
    function item_set_info_sync(keyring: string | null, id: number, info: ItemInfo): Result;
    /**
     * Get a list of all the ids for items in `keyring`.
     *
     * Use GPOINTER_TO_UINT() on the list to access the integer ids. The list
     * should be freed with `g_list_free()`.
     *
     * For an asynchronous version of this function see `gnome_keyring_list_item_ids()`.
     * @param keyring The name of the keyring, or `null` for the default           keyring.
     * @returns {@link GnomeKeyring.Result.OK} if the operation was succcessful or an error result otherwise.
     * @deprecated Use `secret_collection_get_items()` instead.
     */
    function list_item_ids_sync(keyring: string | null): [Result, number[]];
    /**
     * Get a list of keyring names.
     *
     * The list returned in in `keyrings` must be freed using
     * `gnome_keyring_string_list_free()`.
     *
     * For an asynchronous version of this function see `gnome_keyring_list_keyring_names()`.
     * @returns {@link GnomeKeyring.Result.OK} if the operation was succcessful or an error result otherwise.
     * @deprecated Use `secret_service_get_collections()` instead.
     */
    function list_keyring_names_sync(): [Result, string[]];
    /**
     * Lock all the keyrings, so that their contents may not eb accessed without
     * first unlocking them with a password.
     *
     * For an asynchronous version of this function see `gnome_keyring_lock_all()`.
     * @returns {@link GnomeKeyring.Result.OK} if the operation was succcessful or an error result otherwise.
     * @deprecated Use libsecret instead.
     */
    function lock_all_sync(): Result;
    /**
     * Lock a `keyring`, so that its contents may not be accessed without first
     * supplying a password.
     *
     * Most keyring opretaions involving items require that you first unlock the
     * keyring. One exception is `gnome_keyring_find_items_sync()` and related functions.
     *
     * For an asynchronous version of this function see `gnome_keyring_lock()`.
     * @param keyring The name of the keyring to lock, or `null` for the           default keyring.
     * @returns {@link GnomeKeyring.Result.OK} if the operation was succcessful or an error result otherwise.
     * @deprecated Use `secret_service_lock_sync()` instead.
     */
    function lock_sync(keyring?: string | null): Result;
    /**
     * Free a network password data pointer. If `null` is passed in,
     * nothing happens.
     * @param data A {@link GnomeKeyring.NetworkPasswordData} pointer.
     * @deprecated Not used with libsecret.
     */
    function network_password_free(data?: NetworkPasswordData | null): void;
    /**
     * Free a list of network password data.
     * @param list A list of        {@link GnomeKeyring.NetworkPasswordData} pointers.
     * @deprecated Not used with libsecret.
     */
    function network_password_list_free(list: NetworkPasswordData[]): void;
    /**
     * The #GNOME_KEYRING_RESULT_OK and #GNOME_KEYRING_RESULT_CANCELLED
     * codes will return an empty string.
     *
     * Note that there are some results for which the application will need to
     * take appropriate action rather than just display an error message to
     * the user.
     * @param res A {@link GnomeKeyring.Result}
     * @returns a string suitable for display to the user for a given {@link GnomeKeyring.Result}, or an empty string if the message wouldn't make sense to a user.
     * @deprecated libsecret returns errors as {@link GLib.Error} directly. Use the             error message field for a description.
     */
    function result_to_message(res: Result | null): string;
    /**
     * Change the default keyring.
     *
     * For an asynchronous version of this function see `gnome_keyring_set_default_keyring()`.
     * @param keyring The keyring to make default
     * @returns {@link GnomeKeyring.Result.OK} if the operation was succcessful or an error result otherwise.
     * @deprecated Use `secret_service_set_alias_sync()` instead.
     */
    function set_default_keyring_sync(keyring: string): Result;
    /**
     * Set flags and info for `keyring`. The only fields in `info` that are used
     * are lock_on_idle and lock_timeout.
     *
     * For an asynchronous version of this function see `gnome_keyring_set_info()`.
     * @param keyring The name of the keyring, or `null` for the default           keyring.
     * @param info A structure containing flags and info for the keyring.
     * @returns {@link GnomeKeyring.Result.OK} if the operation was succcessful or an error result otherwise.
     * @deprecated Use `SecretCollection` objects instead.
     */
    function set_info_sync(keyring: string | null, info: Info): Result;
    /**
     * Store a network password.
     *
     * If an item already exists for with this network info (ie: user, server etc...)
     * then it will be updated.
     *
     * The created or updated item id will be returned in `item_id`.
     *
     * Network passwords are items with the item type {@link GnomeKeyring.ItemType.NETWORK_PASSWORD}
     * @param keyring The keyring to store the password in, or `null` for           the default keyring.
     * @param user The user name or `null`.
     * @param domain The domain name or `null`.
     * @param server The server or `null`.
     * @param object The remote object or `null`.
     * @param protocol The network protocol or `null`.
     * @param authtype The authentication type or `null`.
     * @param port The network port or zero.
     * @param password The password to store, must not be `null`.
     * @returns {@link GnomeKeyring.Result.OK} if the operation was succcessful or an error result otherwise.
     * @deprecated Use `secret_password_store_sync()` with `SECRET_SCHEMA_COMPAT_NETWORK`.
     */
    function set_network_password_sync(
        keyring: string | null,
        user: string | null,
        domain: string | null,
        server: string | null,
        object: string | null,
        protocol: string | null,
        authtype: string | null,
        port: number,
        password: string,
    ): [Result, number];
    /**
     * Free a list of string pointers.
     * @param strings A %GList of string pointers.
     * @deprecated Not needed when using libsecret.
     */
    function string_list_free(strings: string[]): void;
    /**
     * Unlock a `keyring`, so that its contents may be accessed. In most cases `null`
     * will be passed in as the `password`, which will prompt the user to enter the
     * correct password.
     *
     * Most keyring opretaions involving items require that yo ufirst unlock the
     * keyring. One exception is `gnome_keyring_find_items_sync()` and related functions.
     *
     * For an asynchronous version of this function see `gnome_keyring_unlock()`.
     * @param keyring The name of the keyring to unlock, or `null` for the           default keyring.
     * @param password The password to unlock the keyring with, or `null`            to prompt the user.
     * @returns {@link GnomeKeyring.Result.OK} if the operation was succcessful or an error result otherwise.
     * @deprecated Use `secret_service_unlock_sync()` instead.
     */
    function unlock_sync(keyring?: string | null, password?: string | null): Result;
    /**
     * @gir-type Callback
     */
    interface OperationDoneCallback {
        (result: Result): void;
    }
    /**
     * @gir-type Callback
     */
    interface OperationGetAttributesCallback {
        (result: Result, attributes: AttributeList): void;
    }
    /**
     * @gir-type Callback
     */
    interface OperationGetIntCallback {
        (result: Result, val: number): void;
    }
    /**
     * @gir-type Callback
     */
    interface OperationGetItemInfoCallback {
        (result: Result, info: ItemInfo): void;
    }
    /**
     * @gir-type Callback
     */
    interface OperationGetKeyringInfoCallback {
        (result: Result, info: Info): void;
    }
    /**
     * @gir-type Callback
     */
    interface OperationGetStringCallback {
        (result: Result, string?: string | null): void;
    }
    /**
     * Type of access.
     * @gir-type Flags
     * @deprecated libsecret only supports string attributes.
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

    /**
     * @gir-type Flags
     */
    enum ItemInfoFlags {
        BASICS,
        SECRET,
    }

    /**
     * A structure which contains access control information.
     * @gir-type Struct
     */
    class AccessControl {
        static $gtype: GObject.GType<AccessControl>;

        // Constructors

        constructor(application: ApplicationRef, types_allowed: AccessType);

        static ['new'](application: ApplicationRef, types_allowed: AccessType): AccessControl;

        // Methods

        /**
         * Copy an access control for an item.
         * @returns The new {@link GnomeKeyring.AccessControl} pointer. Use `gnome_keyring_access_control_free()` to free the memory.
         */
        copy(): AccessControl;
        /**
         * Free an access control for an item.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class ApplicationRef {
        static $gtype: GObject.GType<ApplicationRef>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): ApplicationRef;

        // Methods

        /**
         * Copy an application reference.
         * @returns A new {@link GnomeKeyring.ApplicationRef} pointer.
         */
        copy(): ApplicationRef;
        /**
         * Free an application reference.
         */
        free(): void;
    }

    /**
     * An item attribute. Set <code>string</code> if data type is
     * {@link GnomeKeyring.AttributeType.STRING} or <code>integer</code> if data type is
     * {@link GnomeKeyring.AttributeType.UINT32}
     * @gir-type Struct
     * @deprecated libsecret only supports string attributes.
     */
    class Attribute {
        static $gtype: GObject.GType<Attribute>;

        // Fields

        name: string;
        type: AttributeType;

        // Static methods

        /**
         * Store a key-value-pair with a string value in `attributes`.
         * @param attributes A {@link GnomeKeyring.AttributeList}
         * @param name The name of the new attribute
         * @param value The value to store in `attributes`
         */
        static list_append_string(attributes: AttributeList, name: string, value: string): void;
        /**
         * Store a key-value-pair with an unsigned 32bit number value in `attributes`.
         * @param attributes A {@link GnomeKeyring.AttributeList}
         * @param name The name of the new attribute
         * @param value The value to store in `attributes`
         */
        static list_append_uint32(attributes: AttributeList, name: string, value: number): void;
        /**
         * Copy a list of item attributes.
         * @param attributes A {@link GnomeKeyring.AttributeList} to copy.
         */
        static list_copy(attributes: AttributeList): AttributeList;
        /**
         * Free the memory used by `attributes`.
         *
         * If a `null` pointer is passed, it is ignored.
         * @param attributes A {@link GnomeKeyring.AttributeList}
         */
        static list_free(attributes: AttributeList): void;
        /**
         * Create a new {@link GnomeKeyring.AttributeList}.
         */
        static list_new(): AttributeList;
        /**
         * Create {@link GLib.List} of {@link GnomeKeyring.Attribute} pointers from `attributes`. This is
         * mostly useful in language bindings which cannot directly use a {@link GLib.Array}.
         * @param attributes A {@link GnomeKeyring.AttributeList}
         */
        static list_to_glist(attributes: AttributeList): Attribute[];

        // Methods

        /**
         * Return the string value. It is an error to call this method if
         * `attribute`.type is not #GNOME_KEYRING_ATTRIBUTE_TYPE_STRING. This method is
         * mostly useful for language bindings which do not provide union access. In C
         * you should just use attribute->value.string.
         * @returns The value.string pointer of `attribute`. This is not a copy, do not free.
         */
        get_string(): string;
        /**
         * Return the uint32 value. It is an error to call this method if
         * `attribute`.type is not #GNOME_KEYRING_ATTRIBUTE_TYPE_UINT32. This method is
         * mostly useful for language bindings which do not provide union access. In C
         * you should just use attribute->value.integer.
         * @returns The value.integer of `attribute`.
         */
        get_uint32(): number;
    }

    /**
     * A found structure returned by a found operation. Use `gnome_keyring_found_list_free()`
     * to free a list of these structures.
     * @gir-type Struct
     * @deprecated Not used with libsecret.
     */
    class Found {
        static $gtype: GObject.GType<Found>;

        // Fields

        keyring: string;
        item_id: number;
        attributes: AttributeList;
        secret: string;

        // Constructors

        constructor(
            properties?: Partial<{
                keyring: string;
                item_id: number;
                secret: string;
            }>,
        );

        // Static methods

        /**
         * Free the memory used by the {@link GnomeKeyring.Found} items in `found_list`.
         * @param found_list a {@link GLib.List} of {@link GnomeKeyring.Found}
         */
        static list_free(found_list: Found[]): void;

        // Methods

        /**
         * Copy a {@link GnomeKeyring.Found} item.
         * @returns The new {@link GnomeKeyring.Found}
         */
        copy(): Found;
        /**
         * Free the memory used by a {@link GnomeKeyring.Found} item.
         *
         * You usually want to use `gnome_keyring_found_list_free()` on the list of
         * results.
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     */
    class Info {
        static $gtype: GObject.GType<Info>;

        // Methods

        /**
         * Copy a {@link GnomeKeyring.Info} object.
         * @returns The newly allocated {@link GnomeKeyring.Info}. This must be freed with `gnome_keyring_info_free()`
         */
        copy(): Info;
        /**
         * Free a {@link GnomeKeyring.Info} object. If a `null` pointer is passed
         * nothing occurs.
         */
        free(): void;
        /**
         * Get the time at which the keyring was created.
         * @returns The created time.
         */
        get_ctime(): number;
        /**
         * Get whether the keyring is locked or not.
         * @returns Whether the keyring is locked or not.
         */
        get_is_locked(): boolean;
        /**
         * Get whether or not to lock a keyring after a certain amount of idle time.
         *
         * See also `gnome_keyring_info_get_lock_timeout()`.
         * @returns Whether to lock or not.
         */
        get_lock_on_idle(): boolean;
        /**
         * Get the idle timeout, in seconds, after which to lock the keyring.
         *
         * See also `gnome_keyring_info_get_lock_on_idle()`.
         * @returns The idle timeout, in seconds.
         */
        get_lock_timeout(): number;
        /**
         * Get the time at which the keyring was last modified.
         * @returns The last modified time.
         */
        get_mtime(): number;
        /**
         * Set whether or not to lock a keyring after a certain amount of idle time.
         *
         * See also `gnome_keyring_info_set_lock_timeout()`.
         * @param value Whether to lock or not.
         */
        set_lock_on_idle(value: boolean): void;
        /**
         * Set the idle timeout, in seconds, after which to lock the keyring.
         *
         * See also `gnome_keyring_info_set_lock_on_idle()`.
         * @param value The lock timeout in seconds.
         */
        set_lock_timeout(value: number): void;
    }

    /**
     * @gir-type Struct
     */
    class ItemInfo {
        static $gtype: GObject.GType<ItemInfo>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): ItemInfo;

        // Methods

        /**
         * Copy a {@link GnomeKeyring.ItemInfo} object.
         * @returns A keyring item info pointer.
         */
        copy(): ItemInfo;
        /**
         * Free the {@link GnomeKeyring.ItemInfo} object.
         *
         * A `null` pointer may be passed, in which case it will be ignored.
         */
        free(): void;
        /**
         * Get the item created time.
         * @returns The item created time.
         */
        get_ctime(): number;
        /**
         * Get the item display name.
         * @returns The newly allocated string containing the item display name.
         */
        get_display_name(): string;
        /**
         * Get the item last modified time.
         * @returns The item last modified time.
         */
        get_mtime(): number;
        /**
         * Get the item secret.
         * @returns The newly allocated string containing the item secret.
         */
        get_secret(): string;
        /**
         * Get the item type.
         * @returns The item type
         */
        get_type(): ItemType;
        /**
         * Set the display name on an item info.
         * @param value The new display name.
         */
        set_display_name(value: string): void;
        /**
         * Set the secret on an item info.
         * @param value The new item secret
         */
        set_secret(value: string): void;
        /**
         * Set the type on an item info.
         * @param type The new item type
         */
        set_type(type: ItemType | null): void;
    }

    /**
     * Network password info.
     * @gir-type Struct
     * @deprecated Use #SECRET_SCHEMA_COMPAT_NETWORK instead.
     */
    class NetworkPasswordData {
        static $gtype: GObject.GType<NetworkPasswordData>;

        // Fields

        keyring: string;
        item_id: number;
        protocol: string;
        server: string;
        object: string;
        authtype: string;
        port: number;
        user: string;
        domain: string;
        password: string;

        // Constructors

        constructor(
            properties?: Partial<{
                keyring: string;
                item_id: number;
                protocol: string;
                server: string;
                object: string;
                authtype: string;
                port: number;
                user: string;
                domain: string;
                password: string;
            }>,
        );
    }

    /**
     * Describes a password schema. Often you'll want to use a predefined schema such
     * as `GNOME_KEYRING_NETWORK_PASSWORD`.
     *
     * <para>
     * The last attribute name in a schema must be `null`.
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
     * @gir-type Struct
     */
    class PasswordSchema {
        static $gtype: GObject.GType<PasswordSchema>;

        // Fields

        item_type: ItemType;
    }

    /**
     * One attribute of a {@link GnomeKeyring.PasswordSchema}.
     * @gir-type Struct
     */
    class PasswordSchemaAttribute {
        static $gtype: GObject.GType<PasswordSchemaAttribute>;

        // Fields

        name: string;
        type: AttributeType;
    }

    /**
     * @gir-type Alias
     */
    type AttributeList = GLib.Array;
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

export default GnomeKeyring;

// END
