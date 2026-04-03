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
import type Soup from '@girs/soup-3.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Json from '@girs/json-1.0';
import type Goa from '@girs/goa-1.0';

export namespace Msg {
    /**
     * Msg-1
     */

    /**
     * The type of Drive
     * <ulink url="https://docs.microsoft.com/en-us/graph/api/resources/drive?view=graph-rest-1.0">
     * objects</ulink>.
     * @gir-type Enum
     */
    enum DriveType {
        /**
         * Personal OneDrive drive
         */
        PERSONAL,
        /**
         * OneDrive for Business drive
         */
        BUSINESS,
        /**
         * SharePoint document library
         */
        DOCUMENT_LIBRARY,
    }

    /**
     * This enumeration can be expanded at a later date.
     * @gir-type Struct
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * An unrecoverable error occurred.
         */
        static FAILED: number;
        static PROTOCOL_ERROR: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * @gir-type Struct
     */
    class MailFolderType {
        static $gtype: GObject.GType<MailFolderType>;

        // Static fields

        static '0': number;
        static INBOX: number;
        static DRAFTS: number;
        static SENT_ITEMS: number;
        static JUNK_EMAIL: number;
        static DELETED_ITEMS: number;
        static OUTBOX: number;
        static ARCHIVE: number;
        static OTHER: number;
        static MAX: number;
    }

    const API_ENDPOINT: string;
    const BETA_API_ENDPOINT: string;
    function error_quark(): GLib.Quark;
    /**
     * @param object
     * @param name
     */
    function json_object_get_boolean(object: Json.Object, name: string): boolean;
    /**
     * @param object
     * @param name
     */
    function json_object_get_string(object: Json.Object, name: string): string;
    namespace Drive {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * {@link Msg.DriveService} is a subclass of {@link Msg.Service} for communicating with the MS Graph API.
     *
     * Details: https://learn.microsoft.com/en-us/graph/api/resources/drive?view=graph-rest-1.0
     * @gir-type Class
     */
    class Drive extends GObject.Object {
        static $gtype: GObject.GType<Drive>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Drive.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Drive.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Drive;

        static new_from_json(object: Json.Object): Drive;

        // Signals

        /** @signal */
        connect<K extends keyof Drive.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Drive.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Drive.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Drive.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Drive.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Drive.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get created time of drive.
         * @returns created time of drive
         */
        get_created(): GLib.DateTime;
        /**
         * Gets the drive type of the drive.
         * @returns the drive type of drive
         */
        get_drive_type(): DriveType;
        /**
         * Gets the ID of the drive.
         * @returns the id of the drive
         */
        get_id(): string;
        /**
         * Gets the modified time of the drive.
         * @returns modified time of drive
         */
        get_modified(): GLib.DateTime;
        /**
         * Gets tthe name of the drive.
         * @returns name of drive
         */
        get_name(): string;
        /**
         * Gets the remaining size of the drive.
         * @returns remaining size of drive
         */
        get_remaining(): number;
        /**
         * Gets the total size of the drive.
         * @returns total size of drive
         */
        get_total(): number;
        /**
         * Gets the used size of the drive.
         * @returns used size of drive
         */
        get_used(): number;
    }

    namespace DriveItem {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DriveItem extends GObject.Object {
        static $gtype: GObject.GType<DriveItem>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DriveItem.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DriveItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_from_json(object: Json.Object): DriveItem;

        // Signals

        /** @signal */
        connect<K extends keyof DriveItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DriveItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DriveItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DriveItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DriveItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DriveItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get created time of drive item.
         * @returns created date time of drive item
         */
        get_created(): number;
        /**
         * Gets drive id of drive item.
         * @returns drive id of drive item
         */
        get_drive_id(): string;
        /**
         * Gets etag of drive item.
         * @returns etag of drive item
         */
        get_etag(): string;
        /**
         * Get id of drive item.
         * @returns id of drive item
         */
        get_id(): string;
        /**
         * Gets modified time of drive item.
         * @returns modified date time of drive item
         */
        get_modified(): number;
        /**
         * Gets name of drive item.
         * @returns name of drive item
         */
        get_name(): string;
        /**
         * Gets parent id of drive item.
         * @returns parent id of drive item
         */
        get_parent_id(): string;
        /**
         * Get remote parent drive id of drive item.
         */
        get_remote_drive_id(): string;
        /**
         * Get remote id of drive item.
         */
        get_remote_id(): string;
        /**
         * Gets size of drive item.
         * @returns size of drive item
         */
        get_size(): number;
        /**
         * Gets user of drive item.
         * @returns user of drive item
         */
        get_user(): string;
        /**
         * Gets whether item is shared.
         * @returns `true` if item is shared, otherwise `false`
         */
        is_shared(): boolean;
        /**
         * Sets id of drive item.
         * @param id new id of drive item
         */
        set_id(id: string): void;
        /**
         * Sets name of drive item.
         * @param name new name of drive item
         */
        set_name(name: string): void;
        /**
         * Set parent id of drive item.
         * @param parent_id parent id
         */
        set_parent_id(parent_id: string): void;
    }

    namespace DriveItemFile {
        // Signal signatures
        interface SignalSignatures extends DriveItem.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends DriveItem.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DriveItemFile extends DriveItem {
        static $gtype: GObject.GType<DriveItemFile>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DriveItemFile.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DriveItemFile.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DriveItemFile;

        static new_from_json(object: Json.Object): DriveItemFile;

        // Signals

        /** @signal */
        connect<K extends keyof DriveItemFile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DriveItemFile.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DriveItemFile.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DriveItemFile.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DriveItemFile.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DriveItemFile.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets mime type of drive item file.
         * @returns mime type of drive item file
         */
        get_mime_type(): string;
        /**
         * Gets thumbnail uri of drive item file.
         * @returns thumbnail uri of drive item file
         */
        get_thumbnail_uri(): string;
    }

    namespace DriveItemFolder {
        // Signal signatures
        interface SignalSignatures extends DriveItem.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends DriveItem.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DriveItemFolder extends DriveItem {
        static $gtype: GObject.GType<DriveItemFolder>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DriveItemFolder.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DriveItemFolder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DriveItemFolder;

        static new_from_json(object: Json.Object): DriveItemFolder;

        // Signals

        /** @signal */
        connect<K extends keyof DriveItemFolder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DriveItemFolder.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DriveItemFolder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DriveItemFolder.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DriveItemFolder.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DriveItemFolder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace DriveService {
        // Signal signatures
        interface SignalSignatures extends Service.SignalSignatures {
            'notify::authorizer': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Service.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DriveService extends Service {
        static $gtype: GObject.GType<DriveService>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DriveService.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DriveService.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](authorizer: Authorizer): DriveService;

        // Signals

        /** @signal */
        connect<K extends keyof DriveService.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DriveService.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DriveService.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DriveService.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DriveService.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DriveService.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds item to parent folder
         * @param parent parent drive item
         * @param item drive item to add
         * @param cancellable a cancellable
         * @returns a new drive item
         */
        add_item_to_folder(parent: DriveItem, item: DriveItem, cancellable?: Gio.Cancellable | null): DriveItem;
        /**
         * Copy a file async on remote server to a new directory.
         * @param file source {@link Msg.DriveItem}
         * @param destination destination directory {@link Msg.DriveItem}
         * @param cancellable a {@link Gio.Cancellable}
         * @returns `true` if accepted, `false` on error
         */
        copy_file(file: DriveItem, destination: DriveItem, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Creates a new folder called name under parent.
         * @param parent parent drive item
         * @param name name of new folder
         * @param cancellable a cancellable
         * @returns a newly created {@link Msg.DriveItem}
         */
        create_folder(parent: DriveItem, name: string, cancellable?: Gio.Cancellable | null): DriveItem;
        /**
         * Deletes item.
         * @param item a {@link Msg.DriveItem}
         * @param cancellable a cancellable
         * @returns `true` when item has been deleted, otherwise `false`
         */
        ['delete'](item: DriveItem, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Download item
         * @param item a {@link Msg.DriveItem}
         * @param cancellable a {@link Gio.Cancellable}
         * @returns input stream of drive item
         */
        download_item(item: DriveItem, cancellable?: Gio.Cancellable | null): Gio.InputStream;
        /**
         * Download url
         * @param url url to download
         * @param cancellable a {@link Gio.Cancellable}
         * @returns a new {@link Gio.InputStream} for url
         */
        download_url(url: string, cancellable?: Gio.Cancellable | null): Gio.InputStream;
        /**
         * Queries the Microsoft Graph API for all the drives of the currently logged in user
         * @param cancellable a {@link Gio.Cancellable}
         * @returns all drives the user can access
         */
        get_drives(cancellable?: Gio.Cancellable | null): Drive[];
        /**
         * Get root item of selected drive
         * @param drive a {@link Msg.Drive}
         * @param cancellable a {@link Gio.Cancellable}
         * @returns root 'MsgDriveItem'
         */
        get_root(drive: Drive, cancellable?: Gio.Cancellable | null): DriveItem;
        /**
         * Requests all shared with me items
         * @param cancellable a {@link Gio.Cancellable}
         * @returns shared with me list
         */
        get_shared_with_me(cancellable?: Gio.Cancellable | null): DriveItem[];
        /**
         * Get a list of all files in folder item
         * @param item a {@link Msg.DriveItem}
         * @param cancellable a {@link Gio.Cancellable}
         * @returns all items in folder
         */
        list_children(item: DriveItem, cancellable?: Gio.Cancellable | null): DriveItem[];
        /**
         * Move a file async on remote server to a new directory.
         * @param file source {@link Msg.DriveItem}
         * @param destination destination directory {@link Msg.DriveItem}
         * @param cancellable a {@link Gio.Cancellable}
         * @returns moved {@link Msg.DriveItem}
         */
        move_file(file: DriveItem, destination: DriveItem, cancellable?: Gio.Cancellable | null): DriveItem;
        /**
         * Sets a new drive item name
         * @param item a {@link Msg.DriveItem}
         * @param new_name new name of item
         * @param cancellable a {@link Gio.Cancellable}
         * @returns the renamed {@link Msg.DriveItem}
         */
        rename(item: DriveItem, new_name: string, cancellable?: Gio.Cancellable | null): DriveItem;
        /**
         * Creates an update stream for drive item in order to update it's content.
         * @param item a drive item
         * @param cancellable a cancellable
         * @returns an output stream
         */
        update(item: DriveItem, cancellable?: Gio.Cancellable | null): Gio.OutputStream;
        /**
         * Finish a update session of given #item.
         * @param item a {@link Msg.DriveItem}
         * @param stream stream where data is store and needs to be transfered
         * @param cancellable a {@link Gio.Cancellable}
         * @returns a new {@link Msg.DriveItem} or `null` on error.
         */
        update_finish(item: DriveItem, stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): DriveItem;
    }

    namespace GoaAuthorizer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::goa-object': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Authorizer.ConstructorProps {
            goa_object: Goa.Object;
            goaObject: Goa.Object;
        }
    }

    /**
     * The {@link Msg.GoaAuthorizer} structure contains only private data and
     * should only be accessed using the provided API.
     * @gir-type Class
     */
    class GoaAuthorizer extends GObject.Object implements Authorizer {
        static $gtype: GObject.GType<GoaAuthorizer>;

        // Properties

        /**
         * @construct-only
         */
        get goa_object(): Goa.Object;
        /**
         * @construct-only
         */
        get goaObject(): Goa.Object;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GoaAuthorizer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GoaAuthorizer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](goa_object: Goa.Object): GoaAuthorizer;

        // Signals

        /** @signal */
        connect<K extends keyof GoaAuthorizer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GoaAuthorizer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GoaAuthorizer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GoaAuthorizer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GoaAuthorizer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GoaAuthorizer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the GOA account used by `self` for authorization.
         * @returns A {@link Goa.Object}. The returned object is owned by {@link Msg.GoaAuthorizer} and should not be modified or freed.
         */
        get_goa_object(): Goa.Object;
        /**
         * Adds the necessary authorization to `message`. The type of `message`
         * can be DELETE, GET and POST.
         *
         * This method modifies `message` in place and is thread safe.
         * @param message A {@link Soup.Message}.
         */
        process_request(message: Soup.Message): void;
        /**
         * Synchronously forces `iface` to refresh any authorization tokens
         * held by it. See `msg_authorizer_refresh_authorization_async()` for the
         * asynchronous version of this call.
         *
         * This method is thread safe.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         * @returns `true` if the authorizer now has a valid token.
         */
        refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Adds the necessary authorization to `message`. The type of `message`
         * can be DELETE, GET and POST.
         *
         * This method modifies `message` in place and is thread safe.
         * @param message A {@link Soup.Message}.
         * @virtual
         */
        vfunc_process_request(message: Soup.Message): void;
        /**
         * Synchronously forces `iface` to refresh any authorization tokens
         * held by it. See `msg_authorizer_refresh_authorization_async()` for the
         * asynchronous version of this call.
         *
         * This method is thread safe.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         * @virtual
         */
        vfunc_refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace InputStream {
        // Signal signatures
        interface SignalSignatures extends Gio.InputStream.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Gio.InputStream.ConstructorProps, Gio.Seekable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class InputStream extends Gio.InputStream implements Gio.Seekable {
        static $gtype: GObject.GType<InputStream>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: InputStream.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<InputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](service: Service, uri: string): InputStream;

        // Signals

        /** @signal */
        connect<K extends keyof InputStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InputStream.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof InputStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InputStream.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof InputStream.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InputStream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Gets corresponding SoupMessage
         * @param stream a {@link Gio.InputStream}
         */
        static get_message(stream: Gio.InputStream): Soup.Message;
        /**
         * @param stream
         * @param io_priority
         * @param cancellable
         * @param callback
         */
        static send_async(
            stream: Gio.InputStream,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<InputStream> | null,
        ): void;
        /**
         * @param stream
         * @param result
         */
        static send_finish(stream: Gio.InputStream, result: Gio.AsyncResult): boolean;
        /**
         * Tests if the stream supports the {@link Gio.SeekableIface}.
         * @returns `true` if `seekable` can be seeked. `false` otherwise.
         */
        can_seek(): boolean;
        /**
         * Tests if the length of the stream can be adjusted with
         * `g_seekable_truncate()`.
         * @returns `true` if the stream can be truncated, `false` otherwise.
         */
        can_truncate(): boolean;
        /**
         * Seeks in the stream by the given `offset`, modified by `type`.
         *
         * Attempting to seek past the end of the stream will have different
         * results depending on if the stream is fixed-sized or resizable.  If
         * the stream is resizable then seeking past the end and then writing
         * will result in zeros filling the empty space.  Seeking past the end
         * of a resizable stream and reading will result in EOF.  Seeking past
         * the end of a fixed-sized stream will fail.
         *
         * Any operation that would result in a negative offset will fail.
         *
         * If `cancellable` is not `null`, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error {@link Gio.IOErrorEnum.CANCELLED} will be returned.
         * @param offset a `goffset`.
         * @param type a {@link GLib.SeekType}.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error     has occurred, this function will return `false` and set `error`     appropriately if present.
         */
        seek(offset: number, type: GLib.SeekType | null, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tells the current position within the stream.
         * @returns the (positive or zero) offset from the beginning of the buffer, zero if the target is not seekable.
         */
        tell(): number;
        /**
         * Sets the length of the stream to `offset`. If the stream was previously
         * larger than `offset`, the extra data is discarded. If the stream was
         * previously shorter than `offset`, it is extended with NUL ('\0') bytes.
         *
         * If `cancellable` is not `null`, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error {@link Gio.IOErrorEnum.CANCELLED} will be returned. If an
         * operation was partially finished when the operation was cancelled the
         * partial result will be returned, without an error.
         * @param offset new length for `seekable`, in bytes.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error     has occurred, this function will return `false` and set `error`     appropriately if present.
         */
        truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tests if the stream supports the {@link Gio.SeekableIface}.
         * @virtual
         */
        vfunc_can_seek(): boolean;
        /**
         * Tests if the length of the stream can be adjusted with
         * `g_seekable_truncate()`.
         * @virtual
         */
        vfunc_can_truncate(): boolean;
        /**
         * Seeks in the stream by the given `offset`, modified by `type`.
         *
         * Attempting to seek past the end of the stream will have different
         * results depending on if the stream is fixed-sized or resizable.  If
         * the stream is resizable then seeking past the end and then writing
         * will result in zeros filling the empty space.  Seeking past the end
         * of a resizable stream and reading will result in EOF.  Seeking past
         * the end of a fixed-sized stream will fail.
         *
         * Any operation that would result in a negative offset will fail.
         *
         * If `cancellable` is not `null`, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error {@link Gio.IOErrorEnum.CANCELLED} will be returned.
         * @param offset a `goffset`.
         * @param type a {@link GLib.SeekType}.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Tells the current position within the stream.
         * @virtual
         */
        vfunc_tell(): number;
        /**
         * Sets the length of the stream to `offset`. If the stream was previously
         * larger than `offset`, the extra data is discarded. If the stream was
         * previously shorter than `offset`, it is extended with NUL ('\0') bytes.
         *
         * If `cancellable` is not `null`, then the operation can be cancelled by
         * triggering the cancellable object from another thread. If the operation
         * was cancelled, the error {@link Gio.IOErrorEnum.CANCELLED} will be returned. If an
         * operation was partially finished when the operation was cancelled the
         * partial result will be returned, without an error.
         * @param offset new length for `seekable`, in bytes.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace MailFolder {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Handling of mail folder specific functions.
     * @gir-type Class
     */
    class MailFolder extends GObject.Object {
        static $gtype: GObject.GType<MailFolder>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MailFolder.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MailFolder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MailFolder;

        static new_from_json(json_object: Json.Object): MailFolder;

        // Signals

        /** @signal */
        connect<K extends keyof MailFolder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MailFolder.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MailFolder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MailFolder.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MailFolder.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MailFolder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_child_folder_count(): number;
        get_delta_link(): string;
        /**
         * @returns display name of mail folder
         */
        get_display_name(): string;
        get_folder_type(): MailFolderType;
        /**
         * @returns id of mail folder
         */
        get_id(): string;
        get_parent_id(): string;
        /**
         * @returns total item number of mail folder
         */
        get_total_item_count(): number;
        /**
         * @returns unread item number of mail folder
         */
        get_unread_item_count(): number;
        /**
         * @param count
         */
        set_child_folder_count(count: number): void;
        /**
         * @param delta_link
         */
        set_delta_link(delta_link: string): void;
        /**
         * @param display_name
         */
        set_display_name(display_name: string): void;
        /**
         * @param type
         */
        set_folder_type(type: MailFolderType | null): void;
        /**
         * @param id
         */
        set_id(id: string): void;
        /**
         * @param id
         */
        set_parent_id(id: string): void;
        /**
         * @param count
         */
        set_total_item_count(count: number): void;
        /**
         * @param count
         */
        set_unread_item_count(count: number): void;
    }

    namespace MailMessage {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Handling of mail message specific functions.
     * @gir-type Class
     */
    class MailMessage extends GObject.Object {
        static $gtype: GObject.GType<MailMessage>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MailMessage.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MailMessage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MailMessage;

        static new_from_json(json_object: Json.Object): MailMessage;

        // Signals

        /** @signal */
        connect<K extends keyof MailMessage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MailMessage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MailMessage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MailMessage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MailMessage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MailMessage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get mail body.
         * @param is_html
         * @returns mail body
         */
        get_body(is_html: boolean): string;
        /**
         * Get mail body preview.
         * @returns body preview of mail_message
         */
        get_body_preview(): string;
        /**
         * Get mail cc.
         * @returns mail cc
         */
        get_cc(): string;
        /**
         * Get whether mail has attachments.
         * @returns `true` if mail has attachments otherwise `false`
         */
        get_has_attachment(): boolean;
        /**
         * Get id.
         * @returns unique mail id
         */
        get_id(): string;
        /**
         * Get mail received date.
         * @returns received date
         */
        get_received_date(): GLib.DateTime;
        /**
         * Get mail receiver.
         * @returns mail receiver
         */
        get_receiver(): string;
        /**
         * Get mail sender.
         * @returns mail sender
         */
        get_sender(): string;
        /**
         * Get mail subject.
         * @returns subject of mail_message
         */
        get_subject(): string;
        /**
         * Get mail unread.
         * @returns unread count
         */
        get_unread(): number;
        /**
         * Set mail body.
         * @param body mail body
         */
        set_body(body: string): void;
        /**
         * @param preview
         */
        set_body_preview(preview: string): void;
        /**
         * Set mail cc.
         * @param cc carbon copy string
         */
        set_cc(cc: string): void;
        /**
         * Set whether mail has attachments.
         * @param has_attachment flag to set attachments
         */
        set_has_attachment(has_attachment: boolean): void;
        /**
         * Set mail id.
         * @param id mail_message id
         */
        set_id(id: string): void;
        /**
         * Set mail received timestamp.
         * @param timestamp received timestamp
         */
        set_received_date(timestamp: number): void;
        /**
         * Set mail receiver.
         * @param receiver mail_message receiver
         */
        set_receiver(receiver: string): void;
        /**
         * Set mail sender.
         * @param sender mail_message sender
         */
        set_sender(sender: string): void;
        /**
         * Set mail subject.
         * @param subject mail subject
         */
        set_subject(subject: string): void;
        /**
         * Set mail unread count.
         * @param unread unread count
         */
        set_unread(unread: number): void;
    }

    namespace MailService {
        // Signal signatures
        interface SignalSignatures extends Service.SignalSignatures {
            'notify::authorizer': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Service.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class MailService extends Service {
        static $gtype: GObject.GType<MailService>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MailService.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MailService.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](authorizer: Authorizer): MailService;

        // Signals

        /** @signal */
        connect<K extends keyof MailService.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MailService.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MailService.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MailService.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MailService.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MailService.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Create new draft mail #mail and return new mail object.
         * @param mail a `MsgMail`
         * @param cancellable a {@link Gio.Cancellable}
         * @returns a new `MsgMail`
         */
        create_draft_message(mail: MailMessage, cancellable?: Gio.Cancellable | null): MailMessage;
        /**
         * Delets #mail.
         * @param mail a `MsgMail`
         * @param cancellable a {@link Gio.Cancellable}
         * @returns `true` for succes, else &FALSE
         */
        delete_message(mail: MailMessage, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * @param type
         * @param cancellable
         */
        get_folder_id(type: MailFolderType | null, cancellable?: Gio.Cancellable | null): string;
        /**
         * Get a specific mail folder for given service
         * @param type a `MsgMailMailFolderType`
         * @param cancellable a {@link Gio.Cancellable}
         * @returns a {@link Msg.MailFolder}
         */
        get_mail_folder(type: MailFolderType | null, cancellable?: Gio.Cancellable | null): MailFolder;
        /**
         * Get all folders for given service
         * @param delta_url
         * @param delta_url_out
         * @param cancellable a {@link Gio.Cancellable}
         * @returns all mail folders the user can access
         */
        get_mail_folders(delta_url: string, delta_url_out: string, cancellable?: Gio.Cancellable | null): MailFolder[];
        /**
         * Get all mails for given service
         * @param folder
         * @param next_link next link if available
         * @param out_next_link next next link
         * @param delta_link delta link if used
         * @param out_delta_link new delta link
         * @param max_page_size maximal page size
         * @param cancellable a {@link Gio.Cancellable}
         * @returns all mails the user can access
         */
        get_messages(
            folder: MailFolder,
            next_link: string,
            out_next_link: string,
            delta_link: string,
            out_delta_link: string,
            max_page_size: number,
            cancellable?: Gio.Cancellable | null,
        ): MailMessage[];
        /**
         * @param mail
         * @param cancellable
         */
        get_mime_message(mail: MailMessage, cancellable?: Gio.Cancellable | null): GLib.Bytes;
    }

    namespace OAuth2Authorizer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::client-id': (pspec: GObject.ParamSpec) => void;
            'notify::redirect-uri': (pspec: GObject.ParamSpec) => void;
            'notify::refresh-token': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Authorizer.ConstructorProps {
            client_id: string;
            clientId: string;
            redirect_uri: string;
            redirectUri: string;
            refresh_token: string;
            refreshToken: string;
        }
    }

    /**
     * @gir-type Class
     */
    class OAuth2Authorizer extends GObject.Object implements Authorizer {
        static $gtype: GObject.GType<OAuth2Authorizer>;

        // Properties

        /**
         * @construct-only
         */
        get client_id(): string;
        /**
         * @construct-only
         */
        get clientId(): string;
        /**
         * @construct-only
         */
        get redirect_uri(): string;
        /**
         * @construct-only
         */
        get redirectUri(): string;
        get refresh_token(): string;
        set refresh_token(val: string);
        get refreshToken(): string;
        set refreshToken(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OAuth2Authorizer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<OAuth2Authorizer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](client_id: string, redirect_uri: string): OAuth2Authorizer;

        // Signals

        /** @signal */
        connect<K extends keyof OAuth2Authorizer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OAuth2Authorizer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof OAuth2Authorizer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OAuth2Authorizer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof OAuth2Authorizer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<OAuth2Authorizer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param self
         */
        static test_load_credentials(self: Authorizer): boolean;
        /**
         * @param self
         */
        static test_save_credentials(self: Authorizer): void;

        // Methods

        build_authentication_uri(): string;
        /**
         * @param authorization_code
         * @param cancellable
         */
        request_authorization(authorization_code: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Adds the necessary authorization to `message`. The type of `message`
         * can be DELETE, GET and POST.
         *
         * This method modifies `message` in place and is thread safe.
         * @param message A {@link Soup.Message}.
         */
        process_request(message: Soup.Message): void;
        /**
         * Synchronously forces `iface` to refresh any authorization tokens
         * held by it. See `msg_authorizer_refresh_authorization_async()` for the
         * asynchronous version of this call.
         *
         * This method is thread safe.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         * @returns `true` if the authorizer now has a valid token.
         */
        refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Adds the necessary authorization to `message`. The type of `message`
         * can be DELETE, GET and POST.
         *
         * This method modifies `message` in place and is thread safe.
         * @param message A {@link Soup.Message}.
         * @virtual
         */
        vfunc_process_request(message: Soup.Message): void;
        /**
         * Synchronously forces `iface` to refresh any authorization tokens
         * held by it. See `msg_authorizer_refresh_authorization_async()` for the
         * asynchronous version of this call.
         *
         * This method is thread safe.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         * @virtual
         */
        vfunc_refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Service {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::authorizer': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            authorizer: Authorizer;
        }
    }

    /**
     * @gir-type Class
     */
    class Service extends GObject.Object {
        static $gtype: GObject.GType<Service>;

        // Properties

        /**
         * @construct-only
         */
        set authorizer(val: Authorizer);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Service.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Service.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Service.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Service.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Service.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Service.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Service.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Service.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param msg
         * @param tls_cert
         * @param tls_errors
         * @param session
         */
        static accept_certificate_cb(
            msg: Soup.Message,
            tls_cert: Gio.TlsCertificate,
            tls_errors: Gio.TlsCertificateFlags,
            session?: any | null,
        ): boolean;
        static get_https_port(): number;
        /**
         * Get next link
         * @param object a {@link Json.Object}
         */
        static get_next_link(object: Json.Object): string;
        /**
         * @param msg
         */
        static handle_rate_limiting(msg: Soup.Message): boolean;
        /**
         * Parse response data and check for errors. In case
         * no errors are found, return json root object.
         * @param bytes input bytes containing response buffer
         * @param object a pointer to the returning root object
         */
        static parse_response(bytes: GLib.Bytes | Uint8Array, object: Json.Object): Json.Parser;

        // Methods

        /**
         * Construct and checks a {@link Soup.Message} for transfer
         * @param method transfer method
         * @param uri uri to access
         * @param etag an optional etag
         * @param etag_if_match use etag if
         * @returns a {@link Soup.Message} or NULL on error.
         */
        build_message(method: string, uri: string, etag: string, etag_if_match: boolean): Soup.Message;
        /**
         * Get related authorizer.
         * @returns a {@link Msg.Authorizer}
         */
        get_authorizer(): Authorizer;
        /**
         * Get related soup session
         * @returns a {@link Soup.Session}
         */
        get_session(): Soup.Session;
        /**
         * @param cancellable
         */
        refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Adds authorizer information to `message` and send it.
         * @param message a {@link Soup.Message}
         * @param cancellable a {@link Gio.Cancellable}
         * @returns a {@link Gio.InputStream}
         */
        send(message: Soup.Message, cancellable?: Gio.Cancellable | null): Gio.InputStream;
        /**
         * A combination of `msg_service_send_and_read` and `msg_service_parse_response`
         * @param message a {@link Soup.Message}
         * @param object
         * @param cancellable a {@link Gio.Cancellable}
         * @returns a {@link Json.Parser} or `null` on error
         */
        send_and_parse_response(
            message: Soup.Message,
            object: Json.Object,
            cancellable?: Gio.Cancellable | null,
        ): Json.Parser;
        /**
         * Adds authorizer information to `message` and send it.
         * @param message a {@link Soup.Message}
         * @param cancellable a {@link Gio.Cancellable}
         * @returns a {@link GLib.Bytes} or `null` on error.
         */
        send_and_read(message: Soup.Message, cancellable?: Gio.Cancellable | null): GLib.Bytes;
    }

    namespace User {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Handling of user specific functions.
     * @gir-type Class
     */
    class User extends GObject.Object {
        static $gtype: GObject.GType<User>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: User.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<User.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): User;

        static new_from_json(json_object: Json.Object): User;

        // Signals

        /** @signal */
        connect<K extends keyof User.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, User.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof User.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, User.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof User.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<User.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns company name of user or `null` if not existing
         */
        get_company_name(): string;
        /**
         * @returns department of user or `null` if not existing
         */
        get_department(): string;
        /**
         * @returns display name of user or `null` if not existing
         */
        get_display_name(): string;
        /**
         * @returns given name of user or `null` if not existing
         */
        get_given_name(): string;
        /**
         * @returns mail of user or `null` if not existing
         */
        get_mail(): string;
        get_mail_name(): string;
        /**
         * @returns mobile phone of user or `null` if not existing
         */
        get_mobile_phone(): string;
        /**
         * @returns office location of user or `null` if not existing
         */
        get_office_location(): string;
        /**
         * @returns surname of user or `null` if not existing
         */
        get_surname(): string;
    }

    namespace UserContactFolder {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Handling of user_contact folder specific functions.
     * @gir-type Class
     */
    class UserContactFolder extends GObject.Object {
        static $gtype: GObject.GType<UserContactFolder>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UserContactFolder.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<UserContactFolder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): UserContactFolder;

        static new_from_json(json_object: Json.Object): UserContactFolder;

        // Signals

        /** @signal */
        connect<K extends keyof UserContactFolder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserContactFolder.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof UserContactFolder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserContactFolder.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof UserContactFolder.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UserContactFolder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns display name of user_contact folder
         */
        get_display_name(): string;
        /**
         * @returns id of user_contact folder
         */
        get_id(): string;
    }

    namespace UserService {
        // Signal signatures
        interface SignalSignatures extends Service.SignalSignatures {
            'notify::authorizer': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Service.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class UserService extends Service {
        static $gtype: GObject.GType<UserService>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UserService.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<UserService.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](authorizer: Authorizer): UserService;

        // Signals

        /** @signal */
        connect<K extends keyof UserService.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserService.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof UserService.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserService.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof UserService.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UserService.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Find all users with the given `name`. (Business accounts only!)
         * @param name name to search
         * @param cancellable a {@link Gio.Cancellable}
         * @returns a list of contacts with the given name.
         */
        find_users(name: string, cancellable?: Gio.Cancellable | null): User[];
        /**
         * Get all folders for given service
         * @param cancellable a {@link Gio.Cancellable}
         * @returns all user contact folders the user can access
         */
        get_contact_folders(cancellable?: Gio.Cancellable | null): UserContactFolder[];
        /**
         * Get all contats within users 'Contact' folder.
         * @param cancellable a {@link Gio.Cancellable}
         * @returns all contact in users contact folder
         */
        get_contacts(cancellable?: Gio.Cancellable | null): UserContactFolder[];
        /**
         * Try to load user photo using provided %mail address.
         * @param mail mail address
         * @param cancellable a {@link Gio.Cancellable}
         * @returns user photo or `null` if not found.
         */
        get_photo(mail: string, cancellable?: Gio.Cancellable | null): GLib.Bytes;
        /**
         * Get user information
         * @param name user name (`null` for me)
         * @param cancellable a {@link Gio.Cancellable}
         * @returns request user
         */
        get_user(name: string, cancellable?: Gio.Cancellable | null): User;
    }

    /**
     * @gir-type Alias
     */
    type AuthorizerInterface = typeof Authorizer;
    /**
     * @gir-type Alias
     */
    type DriveClass = typeof Drive;
    /**
     * @gir-type Alias
     */
    type DriveItemClass = typeof DriveItem;
    /**
     * @gir-type Alias
     */
    type DriveItemFileClass = typeof DriveItemFile;
    /**
     * @gir-type Alias
     */
    type DriveItemFolderClass = typeof DriveItemFolder;
    /**
     * @gir-type Alias
     */
    type DriveServiceClass = typeof DriveService;
    /**
     * @gir-type Alias
     */
    type GoaAuthorizerClass = typeof GoaAuthorizer;
    /**
     * @gir-type Struct
     */
    abstract class GoaAuthorizerPrivate {
        static $gtype: GObject.GType<GoaAuthorizerPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type InputStreamClass = typeof InputStream;
    /**
     * @gir-type Struct
     */
    abstract class InputStreamPrivate {
        static $gtype: GObject.GType<InputStreamPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type MailFolderClass = typeof MailFolder;
    /**
     * @gir-type Alias
     */
    type MailMessageClass = typeof MailMessage;
    /**
     * @gir-type Alias
     */
    type MailServiceClass = typeof MailService;
    /**
     * @gir-type Alias
     */
    type OAuth2AuthorizerClass = typeof OAuth2Authorizer;
    /**
     * @gir-type Struct
     */
    abstract class OAuth2AuthorizerPrivate {
        static $gtype: GObject.GType<OAuth2AuthorizerPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ServiceClass = typeof Service;
    /**
     * @gir-type Alias
     */
    type UserClass = typeof User;
    /**
     * @gir-type Alias
     */
    type UserContactFolderClass = typeof UserContactFolder;
    /**
     * @gir-type Alias
     */
    type UserServiceClass = typeof UserService;
    /**
     * @gir-type Struct
     */
    abstract class _DriveItemFileClass {
        static $gtype: GObject.GType<_DriveItemFileClass>;

        // Fields

        padding: any[];
    }

    /**
     * @gir-type Struct
     */
    abstract class _DriveItemFolderClass {
        static $gtype: GObject.GType<_DriveItemFolderClass>;

        // Fields

        padding: any[];
    }

    namespace Authorizer {
        /**
         * Interface for implementing Authorizer.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Adds the necessary authorization to `message`. The type of `message`
             * can be DELETE, GET and POST.
             *
             * This method modifies `message` in place and is thread safe.
             * @param message A {@link Soup.Message}.
             * @virtual
             */
            vfunc_process_request(message: Soup.Message): void;
            /**
             * Synchronously forces `iface` to refresh any authorization tokens
             * held by it. See `msg_authorizer_refresh_authorization_async()` for the
             * asynchronous version of this call.
             *
             * This method is thread safe.
             * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
             * @virtual
             */
            vfunc_refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface AuthorizerNamespace {
        $gtype: GObject.GType<Authorizer>;
        prototype: Authorizer;
    }
    /**
     * @gir-type Interface
     */
    interface Authorizer extends GObject.Object, Authorizer.Interface {
        // Methods

        /**
         * Adds the necessary authorization to `message`. The type of `message`
         * can be DELETE, GET and POST.
         *
         * This method modifies `message` in place and is thread safe.
         * @param message A {@link Soup.Message}.
         */
        process_request(message: Soup.Message): void;
        /**
         * Synchronously forces `iface` to refresh any authorization tokens
         * held by it. See `msg_authorizer_refresh_authorization_async()` for the
         * asynchronous version of this call.
         *
         * This method is thread safe.
         * @param cancellable An optional {@link Gio.Cancellable} object, or   `null`.
         * @returns `true` if the authorizer now has a valid token.
         */
        refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;
    }

    export const Authorizer: AuthorizerNamespace & {
        new (): Authorizer; // This allows `obj instanceof Authorizer`
    };

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

export default Msg;

// END
